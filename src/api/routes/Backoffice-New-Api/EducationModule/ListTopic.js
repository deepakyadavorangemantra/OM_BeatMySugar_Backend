const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.get("/", function(request, response){
    var TopicList,ContentList;
    var chapterid = request.query.chapterid;

    try{
        const req = new sql.Request(dbConnection);
         
        req.input('chapterid',sql.Int, chapterid);
        
            req.execute("dbo.Get_TopicMaster").then((data)=>{

            TopicList = data.recordset;
                console.log(TopicList);
                const req2 = new sql.Request(dbConnection)

                req2.execute("dbo.Get_TopicContentMasterAll").then((data)=>{
                    ContentList = data.recordset;
                    var result =  TopicList.map((content)=>{
                        
                        var contents = ContentList.filter((opt)=>{
                            if(opt.fld_topicid == content.fld_id){
                                return opt;
                            }
                        });    
                        content['contents'] = contents;
                        return content;
                    });

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