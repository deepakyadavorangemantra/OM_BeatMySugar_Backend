const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.post("/", function(request, response){
   
    var customerid = request.body.data.customerid;
    var adminid = request.body.data.adminid;
    var feedbacktext = request.body.data.feedbacktext;
    var rating = request.body.data.rating;
    var createdon = request.body.data.createdon;
    var status = request.body.data.status;
    

    try{
        const req = new sql.Request(dbConnection);

           
        req.input('customerid',sql.Int, customerid);
        req.input('adminid',sql.Int, adminid);
        req.input('feedbacktext',sql.Text, feedbacktext);
        req.input('rating',sql.Int, rating);
        req.input('createdon',sql.NVarChar(100), createdon);
        req.input('status',sql.TinyInt, status);

        req.execute("dbo.Add_CustomerEducationFeedback").then((data)=>{
            response.status(200).json({
                
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