const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");



router.get("/", function(request, response){
   

    try{
        const req = new sql.Request(dbConnection);

        req.execute("dbo.Get_CustomerEducationAll", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
                response.status(200).json({
                    'customer':{
                        'active':"20",
                        'point':"30"
                    },
                    'customer_completed_test':"20",
                    'chapter_list':data.recordset,
                    'gift_hamper':{
                        'pending':7,
                        'delivered':10
                    }
                });
            }
        });
  

        // req.execute("dbo.Add_CongratulationMaster", function(err, data){
        //     if(err){
        //         console.log("Error while executing the SP - [error] " + err);
        //         response.status(404).json({
        //             data:err.message
        //         });
        //     }else{
        //         response.status(200).json({
        //             data: data.recordset
        //         });
        //     }
        // });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;