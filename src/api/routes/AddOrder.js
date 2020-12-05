const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../utilities/db");


router.post("/", function(request, response){
   
    var orderdate = request.body.orderdate;
    var ordervalue = request.body.ordervalue;
    var paymentmode = request.body.paymentmode;
    var numofitems = request.body.numofitems;
    var customerid = request.body.customerid;
    var billingaddress = request.body.billingaddress;
    var deliveryaddress = request.body.deliveryaddress;
    var ordersource = request.body.ordersource;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    var shippingname = request.body.shippingname;
    var shippingstreet = request.body.shippingstreet;
    var shippinglandmark = request.body.shippinglandmark;
    var shippingcountry = request.body.shippingcountry;
    var shippingstate = request.body.shippingstate;
    var shippingcity= request.body.shippingcity;
    var shippingpincode = request.body.shippingpincode;
    var shippingmobile = request.body.shippingmobile;

    var billingname = request.body.billingname;
    var billingstreet = request.body.billingstreet;
    var billinglandmark = request.body.billinglandmark;
    var billingcountry = request.body.billingcountry;
    var billingstate = request.body.billingstate;
    var billingcity= request.body.billingcity;
    var billingpincode = request.body.billingpincode;
    var billingmobile = request.body.billingmobile;


    try{
        const req = new sql.Request(dbConnection);
    

        req.input('orderdate',sql.NVarChar(200), orderdate);
        req.input('ordervalue',sql.Decimal(18,2), ordervalue);
        req.input('paymentmode',sql.NVarChar(100), paymentmode);
        req.input('numofitems',sql.Int, numofitems);
        req.input('customerid',sql.Int, customerid);
        req.input('billingaddress',sql.NVarChar(200), billingaddress);
        req.input('deliveryaddress',sql.NVarChar(200), deliveryaddress);
        req.input('ordersource',sql.NVarChar(50), ordersource);
        req.input('status',sql.NVarChar(50), status);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);

        req.input('shippingname',sql.NVarChar(100), shippingname);
        req.input('shippingstreet',sql.NVarChar(200), shippingstreet);
        req.input('shippinglandmark',sql.NVarChar(200), shippinglandmark);
        req.input('shippingcity',sql.NVarChar(100), shippingcity);
        req.input('shippingstate',sql.NVarChar(100), shippingstate);
        req.input('shippingcountry',sql.NVarChar(100), shippingcountry);
        req.input('shippingpincode',sql.NVarChar(10), shippingpincode);
        req.input('shippingmobile',sql.NVarChar(15), shippingmobile);


        req.input('billingname',sql.NVarChar(100), billingname);
        req.input('billingstreet',sql.NVarChar(100), billingstreet);
        req.input('billinglandmark',sql.NVarChar(100), billinglandmark);
        req.input('billingcity',sql.NVarChar(100), billingcity);
        req.input('billingstate',sql.NVarChar(100), billingstate);
        req.input('billingcountry',sql.NVarChar(100), billingcountry);
        req.input('billingpincode',sql.NVarChar(10), billingpincode);
        req.input('billingmobile',sql.NVarChar(15), billingmobile);
       
   
    
        req.execute("dbo.Add_Order", function(err, data){
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