const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    
    var title = request.body.title;
    var content = request.body.content;
    var orderno = request.body.orderno;
    var img_url = request.body.img_url;
    var type = request.body.type;
    var updatedon = request.body.updatedon;
    var status = request.body.status;
    var topicid = request.body.topicid;

    try{
        const req = new sql.Request(dbConnection);
         
        req.input('topicid',sql.Int, topicid);
        req.input('title',sql.NVarChar(200), title);
        req.input('content',sql.Text(200), content);
        req.input('orderno',sql.Int, orderno);
        req.input('type',sql.NVarChar(100), type);
        req.input('img_url',sql.NVarChar, img_url);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('status',sql.NVarChar(10), status);


        req.execute("dbo.Update_TopicMaster", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
                response.status(200).json({
                    data: data.recordset
                });
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;