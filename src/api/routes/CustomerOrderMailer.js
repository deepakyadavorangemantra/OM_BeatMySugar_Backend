const express = require("express");
const router = express.Router();
const sql = require("mssql");

// const dbConnection = require("../../utilities/db2");
var nodemailer = require('nodemailer');
var inlineBase64 = require('nodemailer-plugin-inline-base64');
var smtpTransport = require("nodemailer-smtp-transport");

var QRCode = require('qrcode')

var data = ''
var CheckVal = ''

router.post("/", function(request, response){


    var orderdate = request.body.orderdate;
    var ordernumber = request.body.ordernumber;

    var shippingname = request.body.shippingname;
    var shippingaddress = request.body.shippingaddress;
    var shippingstreet = request.body.shippingstreet;
    var shippinglandmark = request.body.shippinglandmark;
    var shippingcountry = request.body.shippingcountry;
    var shippingstate = request.body.shippingstate;
    var shippingcity = request.body.shippingcity;
    var shippingpincode =request.body.shippingpincode;
    var shippingmobile = request.body.shippingmobile;

    var billingname = request.body.billingname;
    var billingaddress = request.body.billingaddress;
    var billingstreet = request.body.billingstreet;
    var billinglandmark = request.body.billinglandmark;
    var billingcountry = request.body.billingcountry;
    var billingstate = request.body.billingstate;
    var billingcity = request.body.billingcity;
    var billingpincode = request.body.billingpincode;
    var billingmobile = request.body.billingmobile;

    var total= request.body.total;

    var orderDetail= request.body.orderDetail;

    // console.log(request.body)


    try{
     
        var data = ''
        for(var i = 0 ; i <orderDetail.length ; i++)
    
        {
        data = data + 
        ' <tr>'+
        '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
         orderDetail[i].name+'<br/>  Item Code : '+orderDetail[i].code+'   <br/> HSN Code : '+orderDetail[i].hsn+'  <br/> Brand: '+orderDetail[i].brand+'</td>'+
       ' <td style="text-align:center">'+orderDetail[i].quantity+'</td>'+
       ' <td style="text-align: right; padding-right: 1%;">'+orderDetail[i].price+'</td>'+
        '<td style="text-align:center">'+orderDetail[i].tax+'</td>'+
       ' <td style="text-align: right; padding-right: 1%;">'+orderDetail[i].price+'</td>'+
   ' </tr>'
        }


                    const mailOptions = {
                     
                        from: 'BeatMySugar - Simplifying Diabetes Management <wecare@beatmysugar.com>', // sender address
                        to: 'tapan@globaltrendz.com', // list of receivers
                        subject: 'Order Placed.', // Subject line
                        html:
                        
                       ' <!doctype html/>'+
        
                       ' <html>'+
                        
                        ' <head>'+
                           '<style>'+
                      '  tr.success td {-webkit-print-color-adjust: exact;background-color: #f7f7f7 !important;}'+
                        'tr.success th {-webkit-print-color-adjust:exact;background-color: #f7f7f7 !important;}'+
                        'body{bacbackground-color: white!important;}'+
                       ' @media only screen and (max-width: 1024px) and (min-width: 360px) {'+
                           
                           'body{overflow:scroll}}'+
                        
                      '  tr.danger td {background-color: #f7f7f7 !important;-webkit-print-color-adjust: exact;}'+
                        '</style>'+
                           '<title>BeatMySugar</title>'+
                         '</head>'+
                         
                    '     <body style="text-align: center;">'+
                           '<table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
                               ' #000; border-collapse: collapse;" border="1" cellspacing="0" cellpadding="0">'+
                             '<tbody>'+
                                       '<tr>'+
                                           '<td rowspan="2" style="width:20%"><img src=http://www.beatmysugar.com/assets/images/bms-logo.png style="width: 50%;"/> </td>'+
                                           '<td colspan="8" style="width:80%"> <h2 style="text-align: center; font-size: 25px; font-weight: bold;">'+
                                           ' BeatMySugar</h2><p style="text-align: center;">Rx Health Management India Pvt Ltd'+
                        
                        '12th Floor, Puri 81 Business Hub,'+
                        
                        '<br/>Sec-81, Faridabad,'+
                        
                        'Haryana - 121 001. INDIA.</p>'+
                                                  '<tr class="success">'+
                                              ' <td colspan="8" style="text-align: right; padding-right: 1%; font-weight: bold; font-size: 20px; ">'+
                                                   'Order Form</td></tr></td>'+
                                       '</tr>'+
                        
                                             
                                       '<tr>'+
                                         '<td colspan="1" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                                              ' <span style="font-weight: bold; font-size: 16px;">Order Date</span></td>'+
                                         '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                                               orderdate+'</td>'+
                                         '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                                               '<span style="font-weight: bold; font-size: 16px;">Purchase Order No.</span></td>'+
                                         '<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+ordernumber+'</td>'+
                        
                                       '</tr>'         +            
                        
                        
                                      ' <tr class="success">'+
                                          ' <td colspan="4" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">Billing '+
                                           'Address</td>'+
                                         '<td colspan="4" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">Shipping Address</td>'+
                                      '</tr>'+
                                       '<tr>'+
                                         '<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                                               '<span style="font-weight: bold; font-size: 18px;">'+billingname+'</span><p>'+billingaddress+
                                               '<br/>'+billingstreet+'<br/>'+billingcity+' '+billingpincode+', '+billingstate+', '+billingcountry+'.<br/>Landmark: '+billinglandmark+
                                              '<br/>Mobile Number: ( +91 '+billingmobile+')</p></td>'+
                        
                                              '<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                                              '<span style="font-weight: bold; font-size: 18px;">'+shippingname+'</span><p>'+shippingaddress+
                                              '<br/>'+shippingstreet+'<br/>'+shippingcity+' '+shippingpincode+', '+shippingstate+', '+shippingcountry+'.<br/>Landmark: '+shippinglandmark+
                                             '<br/>Mobile Number: ( +91 '+shippingmobile+')</p></td>'+
                                      ' </tr>'+
                        
                                   '</tbody>'+
                               '</table>'+
                                 '  <table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; border-right-color:'+
                                       ' #000; border-top: hidden;" border="1" cellspacing="0" cellpadding="0">'+
                             '<tbody>'+
                                       
                                  
                            ' <tr class="success">'+
                             '<td colspan="3" style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;"> '+
                           '  Product</span></td>'+
                             '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Quantity</span></td>'+
                            ' <td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Rate</span></td>'+
                            ' <td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">GST %</span></td>'+
                             '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Total (INR)</span></td>'+
                        
                            ' </tr>'+
                       
                    data+
                                
                        
                                   '</tbody>'+
                               '</table>'+
                        
                              ' <table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; border-right-color: #000; '+
                               'border-top: hidden;" border="1" cellspacing="1" cellpadding="0">'+
                             '<tbody>'+
                        
                                      ' <tr>'+
                                         '<td rowspan="5" colspan="4" style="text-align: left; padding-left: 1%;"><span style="font-weight: bold;"> '+
                                          ' Note:</span>'+
                                           '<ul style="text-align: left;">'+
                                             
                                           
                                             '<li>Delivery Date Will be given on Confirmation<br/>of Order</li>'+
                                           '</ul>'+
                                           
                                         
                                          ' <tr><td colspan="4" style="text-align: right; padding: 1%;"><span style="font-weight: bold;">'+
                                              ' Total Amount (Inclusive of all Taxes)</span></td><td style="text-align: right; padding-right: 1%;">'+total+
                                           '    </td></tr>   '                  +
                                       '  </td>'+
                        
                                       '</tr>'+
                        
                        
                                    
                        
                                       '<tr>'+
                                         '<th colspan="10" style=" padding-top: 1%; padding-bottom: 1%; text-align: center;">Have a Question? Call us on '+
                                        ' +91 90244 22444 or Email us at wecare@beatmysugar.com</th>'+
                                       '</tr>'+
                        
                                      ' <tr class="success">'+
                                      ' <th colspan="10" style="padding-top: 1%; padding-bottom: 1%; text-align: center; background: #f7f7f7;">Visit'+
                                            'us at www.beatmysugar.com</th>'+
                                       '</tr>'+
                                       
                                  ' </tbody>'+
                           '</table>'+
                        ' </body>'+
                        '</html>'
                        
                        
                    
                    }
    
                      

                      transporter.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));
                      transporter.sendMail(mailOptions, function (err, info) {
                        if(err){
                          response.status(500);
                          console.log(err)
                        }
                        else{
                          response.status(200);
                          console.log(info);
                          response.send(info);
                        }
                         
                     });
                
                   
              

    }catch (err){
        response.status(500);
        response.send(err.message);
    }


});

module.exports = router;


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use SSL,
  auth: {

         user: 'wecare@beatmysugar.com',
         pass: 'jamrood1234!'
        
     }
 });


 