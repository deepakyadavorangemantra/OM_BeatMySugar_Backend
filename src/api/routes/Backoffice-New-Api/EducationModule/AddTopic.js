const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var title = request.body.orderdetailid;
    var content = request.body.content;
    var orderno = request.body.orderno;
    var img_url = request.body.img_url;
    var type = request.body.type;
    var createdat = request.body.createdat;
    var updatedat = request.body.updatedat;
    var status = request.body.status;

    try{
        const req = new sql.Request(dbConnection);

        req.input('title',sql.NVarChar(200), title);
        req.input('content',sql.NVarChar(200), content);
        req.input('orderno',sql.Int, orderno);
        req.input('type',sql.NVarChar, type);
        req.input('img_url',sql.NVarChar, img_url);
        req.input('createdat',sql.NVarChar(100), createdat);
        req.input('updatedat',sql.Int, updatedat);
        req.input('status',sql.Int, status);

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