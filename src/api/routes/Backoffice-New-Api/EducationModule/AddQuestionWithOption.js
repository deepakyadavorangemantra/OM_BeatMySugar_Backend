const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var chapterid = request.body.chapterid;
    var topicid = request.body.topicid;
    var questiontext = request.body.questiontext;
    var answertext = request.body.answertext;
    var orderno = request.body.orderno;
    var createdon = request.body.createdon;
    var updatedon = request.body.updatedon;
    var status = request.body.status;
    
    var result;

    try{
        const req = new sql.Request(dbConnection);
           
        req.input('chapterid',sql.Int, req.body.question.chapterid);
        req.input('questiontext',sql.Text, req.body.question.questiontext);
        req.input('answertext',sql.Text, req.body.question.answertext);
        req.input('orderno',sql.Int, req.body.question.orderno);
        req.input('createdon',sql.NVarChar(100), req.body.question.createdon);
        req.input('status',sql.Int, req.body.question.status);

        req.execute("dbo.Add_QuestionMaster").then(function(data){
                    response.status(200).json({
                        data: data.recordset
                    })
            }).catch((err)=>{
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            })

    
            req.body.options.forEach(option => {
                req.input('questionid',sql.Int, questionid);
                req.input('optiontext',sql.NVarChar(200), optiontext);
                req.input('iscorrect',sql.NVarChar(200), iscorrect);
                req.input('orderno',sql.Int, orderno);
                req.input('createdon',sql.NVarChar(100), createdon);
                req.input('updatedon',sql.NVarChar(100), updatedon);
                req.input('status',sql.Int, status);

                req.execute("dbo.Add_QuestionOptionMaster").then(function(data){
                    response.status(200).json({
                        data: data.recordset
                    })
                }).catch((err)=>{
                    console.log("Error while executing the SP - [error] " + err);
                    response.status(404).json({
                        data:err.message
                    });
                })
            
            });
    

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;