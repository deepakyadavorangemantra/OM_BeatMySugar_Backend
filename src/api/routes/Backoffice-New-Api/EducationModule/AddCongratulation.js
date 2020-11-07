const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   

    var title = request.body.title;
    var content = request.body.content;
    var createdon = request.body.createdon;
    var updatedon = request.body.updatedon;
    var createdby = request.body.createdby;
    var updatedby = request.body.updatedby;
    var status = request.body.status;
    

    try{
        const req = new sql.Request(dbConnection);

        req.input('title',sql.NVarChar(200), title);
        req.input('content',sql.Text, content);
        req.input('createdby',sql.NVarChar(100), createdby);
        req.input('updatedby',sql.NVarChar(100), updatedby);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('status',sql.Int, status);

        req.execute("dbo.Add_CongratulationMaster", function(err, data){
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