const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('entregable_3',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING 
    },
    password:{
        type: DataTypes.STRING
    },
    birthday:{
        type: DataTypes.STRING
    }
    
},{
    timestamps: false
})

    module.exports=Users

    

