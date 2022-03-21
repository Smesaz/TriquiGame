const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define(
        "Record",
        {
            winner:{
                type: DataTypes.STRING,
                allowNull:false,
                allowEmpty: false,
            },
            loser:{
                type: DataTypes.STRING,
                allowNull:false,
                allowEmpty: false,
            },
            date:{
                type: DataTypes.STRING,
                allowNull: false,
                allowEmpty: false,
                unique:true,
            },
        },
        {
            timestamps: false,
        }
    );
}; 