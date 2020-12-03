const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var customerid = request.body.user_id;
    var chapterid = request.body.chapterid;
    var questionid = request.body.questionid;
    var optionid = request.body.optionid;
    var createdon = request.body.createdon;
    var status = request.body.status;
    var promises = [];

    try{

        var req_obj ={};

        request.body.questions.forEach((question,index) => {
            
            req_obj[index] = new sql.Request(dbConnection)

            req_obj[index].input('customerid',sql.Int, customerid);
            req_obj[index].input('chapterid',sql.Int, question.fld_chapterid);
            req_obj[index].input('questionid',sql.Int, question.fld_id);
            req_obj[index].input('optionid',sql.Int, question.user_ans);
            req_obj[index].input('createdon',sql.NVarChar(100), question.fld_createdon);
            req_obj[index].input('status',sql.Int, question.fld_status);

            promises.push( req_obj[index].execute("dbo.Add_CustomerEducationTest").then((data)=>{
                    return data.recordset;          
                }).catch((err)=>{
                    console.log("Error while executing the SP - [error] " + err);
                    response.status(404).json({
                        data:err.message
                });
            }));
        });

        Promise.all(promises)
        .then((result) => {
              var resp = {};
              
            //   resp['question'] = questionData.recordset;
            //   resp['options'] = result;
              response.status(200).json({
                                data:result
                            })
        });
           
    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;