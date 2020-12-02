const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var customerid = request.body.customerid;
    var chapterid = request.body.chapterid;
    var questionid = request.body.questionid;
    var optionid = request.body.optionid;
    var createdon = request.body.createdon;
    var status = request.body.status;
    

    try{
        const req = new sql.Request(dbConnection);

           
        req.input('customerid',sql.Int, customerid);
        req.input('chapterid',sql.Int, chapterid);
        req.input('questionid',sql.Int, questionid);
        req.input('optionid',sql.Int, optionid);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('status',sql.Int, status);

        req.execute("dbo.Add_CustomerEducationTest").then((data)=>{
            response.status(200).json({
                data: data.recordset
            });
            }).catch((err)=>{
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
            });
        });
           
    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;