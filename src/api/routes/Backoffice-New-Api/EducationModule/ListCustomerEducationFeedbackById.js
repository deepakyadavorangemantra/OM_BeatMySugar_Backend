const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.get("/", function(request, response){
   
    var customerid = request.query.customerid;

 
    try{
        const req = new sql.Request(dbConnection);
         
        req.input('customerid',sql.Int, customerid);

        req.execute("dbo.Get_CustomerEducationFeedbackMasterById", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
                response.status(200).json({
                    data: data.recordset,
                    is_feedback: data.recordset.length > 0 ? true : false,
                });
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;