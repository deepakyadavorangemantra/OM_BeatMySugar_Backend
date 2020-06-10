const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");



router.post("/", function(request, response){
   
    var id = request.body.id;
    var name = request.body.name;
    var dob = request.body.dob;
    var gender = request.body.gender;
    var maritalstatus = request.body.maritalstatus;
    var occuption = request.body.occuption;
    var profileimage = request.body.profileimage;
    var address = request.body.address;
    var landmark = request.body.landmark;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;
    var areyoudiabetic = request.body.areyoudiabetic;
    var typeofdiabetic = request.body.typeofdiabetic;
    var typeofdiabetic = request.body.typeofdiabetic;
    var diagnosed = request.body.diagnosed;
    var updatedon = request.body.updatedon;
    var updatedby = request.body.updatedby;

   

    try{
        const req = new sql.Request(dbConnection);

        req.input('id',sql.Int, id);
        req.input('name',sql.NVarChar(100), name);
        req.input('dob',sql.NVarChar(200), dob);
        req.input('gender',sql.NVarChar(10), gender);
        req.input('maritalstatus',sql.NVarChar(10), maritalstatus);
        req.input('occuption',sql.NVarChar(100), occuption);
        req.input('profileimage',sql.NVarChar(100), profileimage);
        req.input('address',sql.NVarChar(200), address);
        req.input('landmark',sql.NVarChar(500), landmark);
        req.input('city',sql.NVarChar(50), city);
        req.input('state',sql.NVarChar(50), state);
        req.input('country',sql.NVarChar(50), country);
        req.input('pincode',sql.NVarChar(10), pincode);
        req.input('areyoudiabetic',sql.NVarChar(10), areyoudiabetic);
        req.input('typeofdiabetic',sql.NVarChar(50), typeofdiabetic);
        req.input('diagnosed',sql.NVarChar(200), diagnosed);
        req.input('updatedon',sql.NVarChar(200), updatedon);
        req.input('updatedby',sql.Int, updatedby);


  

        req.execute("dbo.Update_UserInfoBasic", function(err, data){
            if(err){
                console.log("Error while executing the SP - [error] " + err);
                response.status(404).json({
                    data:err.message
                });
            }else{
                response.status(200).json({
                    data: data.recordset
                });
            }
        });

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;