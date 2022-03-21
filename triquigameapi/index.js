const express = require("express");
require("dotenv").config()
const bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const app = express();
require('./models');
const {conn} = require('./models');


const postRecord = require('./routes/postRecord');
const getRecords = require('./routes/getRecords');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
app.use(cors());

app.use('/record', postRecord);
app.use('/records', getRecords);

// Default route 
app.get('*', (req,res) => { res.send("Non existent route.") });

const port = process.env.PORT || 3001;

conn.sync({force:false}).then(()=>{
	// console.log(`Node environment: ${process.env.DB_USER}`);
	app.listen(port, ()=>{
		console.log(`Escuchando Port ${port}`);
	});
});