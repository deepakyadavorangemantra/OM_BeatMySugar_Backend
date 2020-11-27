const express = require("express");
const router = express.Router();
const sql = require("mssql");

const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var vendororderid = request.body.vendororderid;
    var category = request.body.category;
    var productid = request.body.productid;
    var price = request.body.price;
    var tax = request.body.tax;
    var quantity = request.body.quantity;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;
    var status = request.body.status;
    var orderdetailid = request.body.orderdetailid;
    var orderid = request.body.orderid;
    var vendorid = request.body.vendorid;

    var  shipvendorid = request.body.shipvendorid;
    var mrp = request.body.mrp;
    var vendorsellingprice = request.body.vendorsellingprice;
    
    try{
        const req = new sql.Request(dbConnection);
    

        req.input('vendororderid',sql.INT, vendororderid);
        req.input('category',sql.NVarChar(100), category);
        req.input('productid',sql.Int, productid);
        req.input('price',sql.Decimal(18,2), price);
        req.input('tax',sql.Decimal(18,2), tax);
        req.input('quantity',sql.Int, quantity);
        req.input('updated_on',sql.NVarChar(200), updated_on);
        req.input('updated_by',sql.Int, updated_by);
        req.input('status',sql.NVarChar(100), status);
        req.input('orderdetailid',sql.INT, orderdetailid);
        req.input('orderid',sql.INT, orderid);
        req.input('vendorid',sql.INT, vendorid);
        req.input('shipvendorid',sql.Int, shipvendorid);
        req.input('mrp',sql.Decimal(18,2), mrp);
        req.input('vendorsellingprice',sql.Decimal(18,2), vendorsellingprice);
    
        req.execute("dbo.Add_VendorOrderDetail", function(err, data){
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