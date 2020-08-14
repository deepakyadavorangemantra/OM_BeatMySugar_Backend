const express = require("express");
const router = express.Router();
const sql = require("mssql");
const dbConnection = require("../../../utilities/db1");


router.post("/", function(request, response){
   
    var merchantid = request.body.merchantid;
    var paymentid = request.body.paymentid;


    var orderid = request.body.orderid;

    console.log(request.body)

// console.log('https://test.payumoney.com/payment/payment/addPaymentSplit?merchantKey=tXjTgO&merchantTransactionId='+merchantTransactionId+'&totalAmount='+totalAmount+'&totalDiscount='+totalDiscount+'&jsonSplits='+JSON.stringify(jsonSplits))

    try{
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://test.payumoney.com/payment/merchant/releasePayment?paymentId='+paymentid+'&merchantId='+merchantid
          ,
          'headers': {
            'Authorization': 'QmetgiU8HibANxwgv/8GwF02GElmNG5gRoRM/sVAyWI='
          },
          formData: {
        
          }
        };
        request(options, function (error, response1) {
          // if (error) throw new Error(error);
          console.log(response1.body);
          if(error){
            response.status(404);
            response.send(error);
          }else
          {
            response.status(200).json({
                data: 'Success'
            });
          }
        })

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;