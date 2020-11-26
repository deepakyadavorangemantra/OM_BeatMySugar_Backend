const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
    var customerid = request.body.customerid;
    try{
        const req = new sql.Request(dbConnection);
            
            req.execute("dbo.Get_ChapterMasterList").then(function(chapterData){
                   
                        const req2 = new sql.Request(dbConnection)

                        req2.input('customerid',sql.Int, customerid);
                     
                            req2.execute("dbo.Get_CustomerEducationDetails").then(function(topicData){
                                console.log(chapterData.recordset);    
                                console.log(topicData.recordset);

                                var result = chapterData.recordset.map(function(chapter){
                                    
                                    chapter['topics'] = topicData.recordset.filter(function(topic){
                                            return topic.fld_chapterid == chapter.fld_chapterid
                                    })
                                    
                                    return chapter;
                                });

                                response.status(200).json({
                                    data:result
                                });

                                }).catch((err)=>{
                                    console.log("Error while executing the SP - [error] " + err);
                                    response.status(404).json({
                                        data:err.message
                                    });
                            })
     
            }).catch((err)=>{
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            })
 

    

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;