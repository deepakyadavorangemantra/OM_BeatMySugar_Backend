const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var feedbackid = request.body.feedbackid;
    var customerid = request.body.customerid;
    var adminid = request.body.adminid;
    var feedbacktext = request.body.feedbacktext;

    var updatedon = request.body.updatedon;
    var status = request.body.status;
    

    try{
        const req = new sql.Request(dbConnection);

           
        req.input('feedbackid',sql.Int, feedbackid);
        req.input('customerid',sql.Int, customerid);
        req.input('adminid',sql.Int, adminid);
        req.input('feedbacktext',sql.Text, feedbacktext);
        req.input('updatedon',sql.NVarChar(100), updatedon);
        req.input('status',sql.TinyInt, status);

        req.execute("dbo.Update_CustomerEducationFeedback").then((data)=>{
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