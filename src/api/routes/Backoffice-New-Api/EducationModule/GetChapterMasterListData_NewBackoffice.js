const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.get("/", function(request, response){
   
    try{
        const req = new sql.Request(dbConnection);
        req.execute("dbo.Get_ChapterMasterList").then((data)=>{
            // if(err){
            //     console.log("Error while executing the SP - [error] " + err);
            //         response.status(404).json({
            //         data:err.message
            //         });
            // }else{
            //     response.status(200).json({
            //             data: data.recordset
            //         });
            // }
            ChapterList = data.recordset;
                console.log(ChapterList);
                const req2 = new sql.Request(dbConnection)
                req2.execute("dbo.Get_TopicMasterAll").then((dataTopic)=>{
                    TopicList = dataTopic.recordset;

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

                        var result =  ChapterList.map((chapter)=>{
                        
                            var topics = TopicListNew.filter((opt)=>{
                                if(opt.fld_chapterid == chapter.fld_chapterid){
                                    return opt;
                                }
                            });    
                            chapter['topics'] = topics;
                            return chapter;
                        });

                        response.status(200).json({
                            data: result
                        });

                    }) 


                    

                    // response.status(200).json({
                    //     data: result
                    // });
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