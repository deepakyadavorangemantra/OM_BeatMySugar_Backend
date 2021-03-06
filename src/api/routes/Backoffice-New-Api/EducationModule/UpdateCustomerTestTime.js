const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
    
    
    var timespent = request.body.timespent;
    var customerid = request.body.customerid;
    var current_chapter = request.body.current_chapter;
    var current_topic = request.body.current_topic;
    

    try{
        const req = new sql.Request(dbConnection);

        req.input('customerid',sql.Int, customerid);
        req.input('timespent',sql.VarChar, (timespent) ? timespent: "");
        req.input('current_chapter',sql.VarChar, (current_chapter) ? current_chapter: "");
        req.input('current_topic',sql.VarChar, (current_topic) ? current_topic: "");

        req.execute("dbo.Update_CustomerEducationDetails").then((data)=>{
            response.status(200).json({
                data: data.recordset
            });
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