   
const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");


var promises = [];

router.post("/", function(request, response){

    try{    
            var req_obj = {};
            request.body.data.forEach((option,index) => {
                req_obj[index] = new sql.Request(dbConnection)
 
                req_obj[index].input('optionid',sql.Int, option.id);
                req_obj[index].input('orderno',sql.Int,option.orderno);

                promises.push(
                    req_obj[index].execute("dbo.Update_QuestionOptionOrderMaster").then(function(optionData){
                            // response.status(200).json({
                            //     data: data.recordset
                            // })
                            return optionData.recordset[0];
                        }).catch((err)=>{
                            console.log("Error while executing the SP - [error] " + err);
                            response.status(404).json({
                                data:err.message
                            });
                    })
                );
            
            });

            Promise.all(promises)
            .then((result) => {
                    // var resp = {};                    
                    // resp['options'] = result;
                    response.status(200).json({
                                    data:result
                                })
            })
            .catch(error => console.log(`Error in promises ${error}`))
            return;
    }
    catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;

 