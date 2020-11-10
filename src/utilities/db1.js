const mssql = require("mssql");
const dbConfig = require("../config1.json");


var db;

var connectToDB = function(){
    if(!db){
        db = new mssql.ConnectionPool(dbConfig);

        db.connect(function(err){
            if(err){
                console.warn("connection error !!");
            }else{
                console.warn("connected successfully");
            }
        });
    }
    return db;
}

module.exports = connectToDB();

