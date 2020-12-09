const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../../utilities/db1");
var result;


router.get("/", function(request, response){
   

    try{
        var promises = [];
        const req = new sql.Request(dbConnection);
        promises.push(req.execute("dbo.Get_CustomerEducationDashboardCustomerCompleted").then(function(data){
            return data.recordset[0];
        }).catch((err)=>{
            console.log("Error while executing the SP - [error] " + err);
            response.status(404).json({
                data:err.message
            });
        })
        );
        
        promises.push(req.execute("dbo.Get_CustomerEducationDashboardChapterWise").then(function(data){            
            return  {
                chapter_list:
                data.recordset
            }             
         }).catch((err)=>{
             console.log("Error while executing the SP - [error] " + err);
             response.status(404).json({
                 data:err.message
             });
         })
         );

        promises.push(req.execute("dbo.Get_CustomerEducationDashboardCustomersActive").then(function(data){
             
             return {
                        customer:
                        {
                            active:data.recordset[0].customer_active,
                            point:data.recordset[0].customer_active
                        }
                }
          }).catch((err)=>{
              console.log("Error while executing the SP - [error] " + err);
              response.status(404).json({
                  data:err.message
              });
          })
          );

        promises.push(req.execute("dbo.Get_CustomerEducationDashboardGiftHampersDelivery").then(function(data){
            
            return {
                gift_hamper:data.recordset[0]
            }
            
        }).catch((err)=>{
            console.log("Error while executing the SP - [error] " + err);
            response.status(404).json({
                data:err.message
            });
        })
        );

        promises.push(req.execute("dbo.Get_CustomerEducationOverallRating").then(function(data){
            
            return {
                overall_rating:4.5
            }
            
        }).catch((err)=>{
            console.log("Error while executing the SP - [error] " + err);
            response.status(404).json({
                data:err.message
            });
        })
        );
         
        Promise.all(promises)
        .then((result) => {
              var resp = {};
              
            //   resp['question'] = questionData.recordset[0];
            //   resp['options'] = result;
              response.status(200).json({
                                data:result
                            })
        })

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;