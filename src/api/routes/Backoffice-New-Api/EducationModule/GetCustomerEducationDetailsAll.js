const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");


router.get("/", function(request, response){
    var customerid = request.query.customerid;
    console.log(customerid);
    try{
        const req = new sql.Request(dbConnection);
            
            req.input('customerid',sql.Int, customerid);
            
            req.execute("dbo.Get_CustomerEducationDetailsAll").then(function(chapterData){
                   
                response.status(200).json({
                    data:chapterData.recordset[0]
                });
     
            }).catch((err)=>{
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            })

    }catch (err){
        response.status(500);
        response.send(err.message);
    }
});

module.exports = router;