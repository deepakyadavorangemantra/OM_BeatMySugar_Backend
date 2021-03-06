const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");


router.post("/", function(request, response){
    var customerid = request.body.customerid;
    try{
        const req = new sql.Request(dbConnection);
            
            req.input('customerid',sql.Int, customerid);
            
            req.execute("dbo.Get_CustomerChapterMapping").then(function(chapterData){
                   
                const req2 = new sql.Request(dbConnection)

                req2.input('customerid',sql.Int, customerid);
                
                    req2.execute("dbo.Get_CustomerEducationDetails").then(function(topicData){
                        console.log(chapterData.recordset); 
                        console.log(topicData.recordset);
                        TopicList = topicData.recordset;

                        const req3 = new sql.Request(dbConnection)
                        req3.execute("dbo.Get_TopicContentMasterAll").then((dataContent)=>{
                            ContentList = dataContent.recordset;
                            var TopicListNew =  TopicList.map((content)=>{
                                
                                var contents = ContentList.filter((opt)=>{
                                    if(opt.fld_topicid == content.fld_id){
                                        return opt;
                                    }
                                });    
                                content['contents'] = contents;
                                return content;
                            });

                            var result =  chapterData.recordset.map((chapter)=>{
                
                                var topics = TopicListNew.filter((opt)=>{
                                    if(opt.fld_chapterid == chapter.fld_chapterid){
                                        return opt;
                                    }
                                });    
                                chapter['topics'] = topics;
                                return chapter;
                            });

                            response.status(200).json({
                                data:result
                            });

                        });

                        

                        // var result = chapterData.recordset.map(function(chapter){
                            
                        //     chapter['topics'] = topicData.recordset.filter(function(topic){
                        //             return topic.fld_chapterid == chapter.fld_chapterid
                        //     })
                            
                        //     return chapter;
                        // });

                        

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