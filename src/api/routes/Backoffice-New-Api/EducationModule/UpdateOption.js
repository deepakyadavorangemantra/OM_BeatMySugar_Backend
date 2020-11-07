const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    
    var optionid = request.body.optionid;
    var questionid = request.body.questionid;
    var optiontext = request.body.optiontext;
    var orderno = request.body.orderno;
    var createdon = request.body.createdon;
    var updatedon = request.body.updatedon;
    var status = request.body.status;
    

    try{
        const req = new sql.Request(dbConnection);

        req.input('optionid',sql.Int, optionid);           
        req.input('questionid',sql.Int, questionid);
        req.input('optiontext',sql.NVarChar(200), optiontext);
        req.input('content',sql.NVarChar(200), content);
        req.input('orderno',sql.Int, orderno);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('status',sql.Int, status);

        req.execute("dbo.Update_QuestionOptionMaster", function(err, data){
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