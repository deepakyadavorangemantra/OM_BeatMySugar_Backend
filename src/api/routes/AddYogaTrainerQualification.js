const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var trainer_id = request.body.trainer_id;
    var qualification= request.body.qualification;
    var institute = request.body.institute;
    var completion_year = request.body.completion_year;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;



    try{
        const req = new sql.Request(dbConnection);
    

        req.input('trainer_id',sql.Int, trainer_id);
        req.input('qualification',sql.NVarChar(200), qualification);
        req.input('institute',sql.NVarChar(200), institute);
        req.input('completion_year',sql.NVarChar(200), completion_year);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
       
    
        req.execute("dbo.Add_YogaQualification", function(err, data){
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