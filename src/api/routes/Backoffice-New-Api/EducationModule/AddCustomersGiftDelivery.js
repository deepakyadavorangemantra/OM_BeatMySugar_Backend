const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var customerid = request.body.customerid;
    var currentchapter = request.body.currentchapter;
    var currenttopic = request.body.currenttopic;
    var iscompleted = request.body.iscompleted;
    var alertmailsent = request.body.alertmailsent;
    var giftdeliverystatus = request.body.giftdeliverystatus;
    var createdon = request.body.createdon;
    var status = request.body.status;

    

    try{
        const req = new sql.Request(dbConnection);

           
        req.input('customerid',sql.Int, customerid);
        req.input('currentchapter',sql.Int, currentchapter);
        req.input('currenttopic',sql.Int, currenttopic);
        req.input('iscompleted',sql.Int, iscompleted);
        req.input('alertmailsent',sql.Int, alertmailsent);
        req.input('giftdeliverystatus',sql.TinyInt, giftdeliverystatus);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('status',sql.Int, status);

        req.execute("dbo.Add_CustomerEducation").then((data)=>{
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