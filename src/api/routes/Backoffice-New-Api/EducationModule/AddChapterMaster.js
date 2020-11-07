const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var bgimage = request.body.bgimage;
    var title = request.body.title;
    var description = request.body.description;
    var duration = request.body.duration;
    var orderno = request.body.orderno;
    var status = request.body.status;
    var createdby = request.body.createdby;
    var createdon = request.body.createdon;

    try{
        const req = new sql.Request(dbConnection);


        
        req.input('title',sql.NVarChar(100), title);
        req.input('description',sql.NVarChar(100), description);
        req.input('duration',sql.NVarChar(100), duration);
        req.input('orderno',sql.Int, orderno);
        req.input('bgimage',sql.NVarChar(200), bgimage);
        req.input('status',sql.NVarChar(10), status);
        req.input('createdby',sql.Int, createdby);
        req.input('createdon',sql.NVarChar(100), createdon);

        req.execute("dbo.Add_ChapterMaster", function(err, data){
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