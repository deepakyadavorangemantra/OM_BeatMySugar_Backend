const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){

    var id = request.body.id;
    var title = request.body.title;
    var description = request.body.description;
    var duration = request.body.duration;
    var orderno = request.body.orderno;
    var status = request.body.status;
    var updatedby = request.body.updatedby;
    var updatedon = request.body.updatedon;

    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('title',sql.NVarChar(100), title);
        req.input('description',sql.NVarChar(100), description);
        req.input('duration',sql.NVarChar(100), duration);
        req.input('orderno',sql.Int, orderno);
        req.input('status',sql.NVarChar(10), status);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('updatedby',sql.Int, updatedby);

        req.execute("dbo.Update_ChapterMaster", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
                const req = new sql.Request(dbConnection);
         
                req.input('chapterid',sql.Int, id);

                req.execute("dbo.Get_ChapterByID", function(err, data1){
                    if(err){
                        console.log("Error while executing the SP - [error] " + err);
                        response.status(404).json({
                            data:err.message
                        });
                    }else{
                        response.status(200).json({
                            data: data1.recordset
                        });
                    }
                });
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;