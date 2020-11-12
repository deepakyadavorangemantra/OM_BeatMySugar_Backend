const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id;
    var customerid = request.body.customerid;
    var currentchapter = request.body.currentchapter;
    var currenttopic = request.body.currenttopic;
    var iscompleted = request.body.iscompleted;
    var alertmailsent = request.body.alertmailsent;
    var giftdeliverystatus = request.body.giftdeliverystatus;
    var updatedon = request.body.updatedon;
    var status = request.body.status;
 

    

    try{
        const req = new sql.Request(dbConnection);

           
        req.input('id',sql.Int, id);
        req.input('customerid',sql.Int, customerid);
        req.input('currentchapter',sql.Int, currentchapter);
        req.input('currenttopic',sql.Int, currenttopic);
        req.input('iscompleted',sql.Int, iscompleted);
        req.input('alertmailsent',sql.Int, alertmailsent);
        req.input('giftdeliverystatus',sql.TinyInt, giftdeliverystatus);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('status',sql.Int, status);

        req.execute("dbo.Update_CustomerEducation").then((data)=>{
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