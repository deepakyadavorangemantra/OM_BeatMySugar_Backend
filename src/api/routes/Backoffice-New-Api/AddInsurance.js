const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var name = request.body.name;
    var dob = request.body.dob;
    var address = request.body.address;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var type = request.body.type;
    var sumassured = request.body.sumassured;
    var currentdisease = request.body.currentdisease;
    var currentdiseasedescription = request.body.currentdiseasedescription;
    var insurancepolicy= request.body.insurancepolicy;
    var insurancepolicydescription = request.body.insurancepolicydescription;
    var selfdisclousre = request.body.selfdisclousre;
    var height = request.body.height;
    var weight = request.body.weight;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('name',sql.NVarChar(200), name);
        req.input('dob',sql.NVarChar(200), dob);
        req.input('address',sql.NVarChar(500), address);
        req.input('email',sql.NVarChar(100), email);
        req.input('mobile',sql.NVarChar(15), mobile);
        req.input('type',sql.NVarChar(100), type);
        req.input('sumassured',sql.NVarChar(200), sumassured);
        req.input('currentdisease',sql.NVarChar(10), currentdisease);
        req.input('currentdiseasedescription',sql.NVarChar(500), currentdiseasedescription);
        req.input('insurancepolicy',sql.NVarChar(10), insurancepolicy);
        req.input('insurancepolicydescription',sql.NVarChar(500), insurancepolicydescription);
        req.input('selfdisclousre',sql.NVarChar(500), selfdisclousre);
        req.input('height',sql.NVarChar(100), height);
        req.input('weight',sql.NVarChar(100), weight);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
   
    
        req.execute("dbo.Add_Insurance", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                response.status(200).json({
                    data: data.recordset
                });
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;