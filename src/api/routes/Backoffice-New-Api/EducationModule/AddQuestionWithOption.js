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
           
        req.input('chapterid',sql.Int, request.body.question.chapterid);
        req.input('questiontext',sql.Text, request.body.question.questiontext);
        req.input('answertext',sql.Text, request.body.question.answertext);
        req.input('orderno',sql.Int, request.body.question.orderno);
        req.input('createdon',sql.NVarChar(100), request.body.question.createdon);
        req.input('status',sql.Int, request.body.question.status);

        promises.push(
            req.execute("dbo.Add_QuestionMaster").then(function(data){
                    // response.status(200).json({
                    //     data: data.recordset
                    // })
                   
                    const req2 = new sql.Request(dbConnection)
                    request.body.options.forEach(option => {
   
                        req2.input('questionid',sql.Int, option.questionid);
                        req2.input('optiontext',sql.NVarChar(200), option.optiontext);
                        req2.input('iscorrect',sql.NVarChar(200), option.iscorrect);
                        req2.input('orderno',sql.Int, option.orderno);
                        req2.input('createdon',sql.NVarChar(100), option.createdon);
                        req2.input('updatedon',sql.NVarChar(100), option.updatedon);
                        req2.input('status',sql.Int, option.status);
        
                        promises.push(
                                req2.execute("dbo.Add_QuestionOptionMaster").then(function(data){
                                    // response.status(200).json({
                                    //     data: data.recordset
                                    // })
                                    return data;
                                }).catch((err)=>{
                                    console.log("Error while executing the SP - [error] " + err);
                                    response.status(404).json({
                                        data:err.message
                                    });
                            })
                        );
                    
                    });

                    return data;

            }).catch((err)=>{
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            })
        );

      
    console.log(promises);
    

    Promise.all(promises)
        .then((result) => {
            console.log(result);
              response.status(200).json({
                                data:result
                            })
        })
    .catch(error => console.log(`Error in promises ${error}`))

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});
console.log('here');
module.exports = router;