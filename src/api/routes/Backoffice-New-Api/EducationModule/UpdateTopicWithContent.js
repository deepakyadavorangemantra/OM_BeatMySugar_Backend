const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var chapterid = request.body.chapterid;
    var title = request.body.title;
    var content = request.body.content;
    var orderno = request.body.orderno;
    var img_url = request.body.img_url;
    var type = request.body.type;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;
    var status = request.body.status;
    var topicid = request.body.topicid;
    var result;
    promises = [];


    try{
        const req = new sql.Request(dbConnection);

        req.input('topicid',sql.Int, topicid);
        req.input('title',sql.NVarChar(200), title);
        req.input('content',sql.Text(200), content);
        req.input('orderno',sql.Int, orderno);
        req.input('type',sql.NVarChar(100), type);
        req.input('img_url',sql.NVarChar, img_url);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.NVarChar(100), updatedby);
        req.input('status',sql.NVarChar(10), status);


        req.execute("dbo.Update_TopicMaster").then(function(topicData){
            // if(err){
            //     console.log("Error while executing the SP - [error] " + err);
            //     response.status(404).json({
            //         data:err.message
            //     });
            // }else{
            //     response.status(200).json({
            //         data: data.recordset
            //     });
            // }

            // console.log(topicData.recordset);
                    var req_obj ={};
                    request.body.contents.forEach((content,index) => {
                        console.log(topicData.recordset[0]);
                        req_obj[index] = new sql.Request(dbConnection)

                        req_obj[index].input('topicid',sql.Int, topicid);
                        req_obj[index].input('content',sql.NVarChar(200), content.fld_content);
                        req_obj[index].input('orderno',sql.Int, content.fld_orderno);
                        req_obj[index].input('status',sql.Int, content.status);
                        
                        if(typeof content.fld_id!='undefined')
                        {
                            if( content.fld_id && content.fld_id != '' ){
                            
                                req_obj[index].input('updatedon',sql.NVarChar(100), content.updatedon);
                                req_obj[index].input('contentid',sql.Int, content.fld_id);

                                promises.push(
                                    req_obj[index].execute("dbo.Update_TopicContentMaster").then(function(contentData){
                                            // response.status(200).json({
                                            //     data: data.recordset
                                            // })
                                            return contentData.recordset[0];
                                        }).catch((err)=>{
                                            console.log("Error while executing the SP - [error] " + err);
                                            response.status(404).json({
                                                data:err.message
                                            });
                                    })
                                );
                            }
                        }
                        else{

                            promises.push(
                                req_obj[index].execute("dbo.Add_TopicContentMaster").then(function(contentData){
                                        // response.status(200).json({
                                        //     data: data.recordset
                                        // })
                                        return contentData.recordset[0];
                                    }).catch((err)=>{
                                        console.log("Error while executing the SP - [error] " + err);
                                        response.status(404).json({
                                            data:err.message
                                        });
                                })
                            );
                        }
                    
                    });

                    Promise.all(promises)
                    .then((result) => {
                        var resp = {};
                        
                        resp['topic'] = topicData.recordset[0];
                        resp['contents'] = result;
                        response.status(200).json({ data:resp })
                    })
                .catch(error => console.log(`Error in promises ${error}`))
                return;

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