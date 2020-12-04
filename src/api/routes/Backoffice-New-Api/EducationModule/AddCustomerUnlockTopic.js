const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   

    var customerid = request.body.customerid;
    var topicid = request.body.topicid;
    var isunlocked = request.body.isunlocked;
    var createdon = request.body.createdon;
    var status = request.body.status;


    try{
        const req = new sql.Request(dbConnection);

        req.input('customerid',sql.Int, customerid);
        req.input('topicid',sql.INT, topicid);
        req.input('isunlocked',sql.TinyInt, isunlocked);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('status',sql.TinyInt, status);

        req.execute("dbo.Add_CustomerEducationTopicMapping", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
                const req2 = new sql.Request(dbConnection);

                req2.input('customerid',sql.Int, customerid);
                req2.input('current_topic',sql.VarChar, topicid);
                req2.input('current_chapter',sql.VarChar, "");
                req2.input('timespent',sql.VarChar, "");

                //Update Current Topic
                req2.execute("dbo.Update_CustomerEducationDetails").then((educationData)=>{
                    console.log(educationData.recordset);
                });

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