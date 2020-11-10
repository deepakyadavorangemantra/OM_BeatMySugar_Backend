const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.get("/", function(request, response){

    var QuestionList,OptionList;
    var chapterid = request.query.chapterid;

    console.log(request.query.chapterid);

    try{
        const req = new sql.Request(dbConnection);
         
        req.input('chapterid',sql.Int, chapterid);

        req.execute("dbo.Get_QuestionMaster").then((data)=>{

                QuestionList = data.recordset;
                console.log(QuestionList);
                const req2 = new sql.Request(dbConnection)

                req2.execute("dbo.Get_QuestionOptionMasterAll").then((data)=>{
                    OptionList = data.recordset;
                    var result =  QuestionList.map((que)=>{
                        
                        var options = OptionList.filter((opt)=>{
                            if(opt.fld_questionid == que.fld_id){
                                return opt;
                            }
                        });    
                        que['options'] = options;
                        return que;
                    });

                    console.log(result);
                    response.status(200).json({
                        data: result
                    });

                }) 

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