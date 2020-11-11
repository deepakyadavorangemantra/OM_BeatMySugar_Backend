const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");

// var fs = require('fs');
// var util = require('util');
// var log_file = fs.createWriteStream(__dirname + '/alt_debug.log', {flags : 'w'});
// var log_stdout = process.stdout;

// var writelog = function(d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };

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
    var promises = [];

    try{
        const req = new sql.Request(dbConnection);
           
        req.input('questionid',sql.Int, request.body.question.questionid);
        req.input('chapterid',sql.Int, request.body.question.chapterid);
        req.input('questiontext',sql.Text, request.body.question.questiontext);
        req.input('answertext',sql.Text, request.body.question.answertext);
        req.input('orderno',sql.Int, request.body.question.orderno);
        req.input('updatedon',sql.NVarChar(100), request.body.question.updatedon);
        req.input('status',sql.Int, request.body.question.status);

 
            req.execute("dbo.Update_QuestionMaster").then(function(questionData){
                   
                    var req_obj ={};
                    request.body.options.forEach((option,index) => {
                        
                        req_obj[index] = new sql.Request(dbConnection)

                        req_obj[index].input('optionid',sql.Int, option.optionid);
                        req_obj[index].input('questionid',sql.Int, request.body.question.questionid);
                        req_obj[index].input('optiontext',sql.NVarChar(200), option.optiontext);
                        req_obj[index].input('iscorrect',sql.TinyInt(200), option.fld_iscorrect === true ? 1 : 0);
                        req_obj[index].input('orderno',sql.Int, option.orderno);
                        req_obj[index].input('updatedon',sql.NVarChar(100), option.updatedon);
                        req_obj[index].input('status',sql.Int, option.status);
        
                        promises.push(
                                req_obj[index].execute("dbo.Update_QuestionOptionMaster").then(function(optionData){
                                    // response.status(200).json({
                                    //     data: data.recordset
                                    // })
                                    return optionData.recordset[0];
                                }).catch((err)=>{
                                    console.log("Error while executing the SP - [error] " + err);
                                    response.status(404).json({
                                        data:err.message
                                    });
                            })
                        );
                    
                    });//foreach

                    Promise.all(promises)
                    .then((result) => {
                          var resp = {};
                          
                          resp['question'] = questionData.recordset;
                          resp['options'] = result;
                          response.status(200).json({
                                            data:resp
                                        })
                    })
                    .catch(error => console.log(`Error in promises ${error}`))
                    return;

            }).catch((err)=>{
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            })
 

      
    console.log(promises);
    



    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});
console.log('here');
module.exports = router;