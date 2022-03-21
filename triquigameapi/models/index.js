'use strict';
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const {DB_USER, DB_PASS, DB_HOST, DB_NAME} = process.env;

let sequelize = new Sequelize(
  {
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: 5432,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
    native: false,
});

const modelDefiners = [];

fs
  .readdirSync(path.join(__dirname, '/'))
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, '/', file)));
  });

// Conexión (sequelize) a todos los modelos
modelDefiners.forEach(modelName => modelName(sequelize)); 

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// const {Invitado} = sequelize.models;


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};