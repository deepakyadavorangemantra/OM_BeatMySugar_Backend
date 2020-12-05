const express = require("express");
const router = express.Router();
const sql = require("mssql");
const sha512 = require("js-sha512");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var username = request.body.username;
    var password = request.body.password;
    var login_type = request.body.login_type;
    var last_action_date_time = request.body.last_action_date_time;

    // console.log(request.body)

    
    try{
        const req = new sql.Request(dbConnection);
    
        req.input('username',sql.NVarChar(200), username);
    
        req.execute("dbo.Username_Auth", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
         
                var hashPassword = sha512(data.recordset[0].fld_salt+password);

                const req2 = new sql.Request(dbConnection);

                req2.input('username',sql.NVarChar(200), username);
                req2.input('password',sql.NVarChar(500), hashPassword);
                req2.input('login_id',sql.Int, data.recordset[0].fld_loginid);
                req2.input('login_type',sql.NVarChar(100), login_type);
                req2.input('last_action_date_time',sql.NVarChar(200), last_action_date_time);


                req2.execute("dbo.Credentials_Auth", function(err2, data2){
                    if(err2){
                        console.log("Error while executing the SP - [error] " + err2);
                        response.status(404).json({
                            data:err2.message
                        });
                    }else{
                        console.log(data2.recordset)
                response.status(200).json({
                    data: data2.recordset
                });
            }
            })
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;