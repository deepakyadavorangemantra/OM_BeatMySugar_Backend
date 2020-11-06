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
    var createdon = request.body.createdon;
    var createdby = request.body.createdby;
    var status = request.body.status;
    

    try{
        const req = new sql.Request(dbConnection);
        req.input('chapterid',sql.Int, chapterid);
        req.input('title',sql.NVarChar(200), title);
        req.input('content',sql.Text, content);
        req.input('orderno',sql.Int, orderno);
        req.input('type',sql.NVarChar, type);
        req.input('img_url',sql.NVarChar, img_url);
        req.input('createdby',sql.Int, createdby);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('status',sql.NVarChar(100), status);

        req.execute("dbo.Add_Topic", function(err, data){
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