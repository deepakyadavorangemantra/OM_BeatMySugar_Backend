const mssql = require("mssql");
const dbConfig = require("../config1.json");


var db;

var connectToDB = function(){
    if(!db){
        db = new mssql.ConnectionPool(dbConfig);

        db.connect(function(err){
            if(err){
<<<<<<< HEAD
                console.log("connection error db1!!");
            }else{
                console.log("connected successfully db1");
=======
                console.log("connection error !!");
            }else{
                console.log("connected successfully");
>>>>>>> master
            }
        });
    }
    return db;
}

module.exports = connectToDB();

