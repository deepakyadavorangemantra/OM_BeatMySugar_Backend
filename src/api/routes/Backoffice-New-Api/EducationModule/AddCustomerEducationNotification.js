const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
 
    var adminid = request.body.adminid;
    var emailtext = request.body.emailtext;
    var smstext = request.body.smstext;
    var createdon = request.body.createdon;
    var status = request.body.status;
    

    try{
        const req = new sql.Request(dbConnection);

           
        req.input('adminid',sql.Int, adminid);
        req.input('emailtext',sql.Text, emailtext);
        req.input('smstext',sql.Text, smstext);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('status',sql.TinyInt, status);

        req.execute("dbo.Add_CustomerEducationNotification").then((data)=>{
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