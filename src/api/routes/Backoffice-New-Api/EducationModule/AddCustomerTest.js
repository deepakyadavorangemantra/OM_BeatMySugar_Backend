const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var customerid = request.body.data.user_id;
    var chapterid = request.body.data.chapterid;
    var questionid = request.body.data.questionid;
    var optionid = request.body.data.optionid;
    var createdon = request.body.data.createdon;
    var status = request.body.data.status;
    var promises = [];

    try{

        var req_obj ={};

        request.body.data.questions.forEach((question,index) => {
            
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
                //     response.status(404).json({
                //         data:err.message
                return err
                // });
            }));
        });

        Promise.all(promises)
        .then((result) => {
              var resp = {};
            /*Add Chapter Unlock Mapping*/
            
            const req_chapter = new sql.Request(dbConnection);

            req_chapter.input('customerid',sql.NVarChar(200), customerid);
            req_chapter.input('chapterid',sql.INT, chapterid);
            req_chapter.input('isunlocked',sql.TinyInt, 1);
            req_chapter.input('createdon',sql.NVarChar(100), createdon);
            req_chapter.input('status',sql.TinyInt, 1);

            req_chapter.execute("dbo.Add_CustomerEducationChapterMapping", function(err, data){
                if(err){
                    console.log("Error while executing the SP - [error] " + err);
                    // response.status(404).json({
                    //     data:err.message
                    // });
                }else{
                    /*
                    const req2 = new sql.Request(dbConnection);

                    req2.input('customerid',sql.Int, customerid);
                    req2.input('current_topic',sql.VarChar, "");
                    req2.input('current_chapter',sql.VarChar,chapterid);
                    req2.input('timespent',sql.VarChar, "");
    
                    //Update Current Topic
                    req2.execute("dbo.Update_CustomerEducationDetails").then((educationData)=>{
                        console.log(educationData.recordset);
                    });
                    */
                    
                    response.status(200).json({
                        data:result
                    })
                }
            });

        });
           
    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;