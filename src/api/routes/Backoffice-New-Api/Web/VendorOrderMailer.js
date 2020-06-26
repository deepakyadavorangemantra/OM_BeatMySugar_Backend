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



    var ordernumber = request.body.ordernumber;
    var offerid = request.body.offerid;
    var orderid = request.body.orderid;
    var offeramount = request.body.offeramount;
    var shippingcharges = request.body.shippingcharges;
    var coddeliverycharges = request.body.coddeliverycharges;

    var orderdate = request.body.orderdate;
    var ordervalue = request.body.ordervalue;
    var paymentmode = request.body.paymentmode;
    var netcost = request.body.netcost;
    var numofitems = request.body.numofitems;
    var customerid = request.body.customerid;
    var billingaddress = request.body.billingaddress;
    var deliveryaddress = request.body.deliveryaddress;
    var ordersource = request.body.ordersource;
    var status = request.body.status;
    var updated_on = request.body.updated_on;
    var updated_by = request.body.updated_by;

    var staffid = request.body.staffid;    
    var vendoremail = request.body.vendoremail;

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

    var orderdata = request.body.orderdata;

    console.log(request.body)


    try{
     

        



                    const mailOptions = {
                     
                        from: 'BeatMySugar - Simplifying Diabetes Management <wecare@beatmysugar.com>', // sender address
                        to: 'nidhi@globaltrendz.com', // list of receivers
                        subject: 'Order Placed.', // Subject line
                        html:

                        '<html>'+
'<head>'+

    '</head>'+
'<body>'+
    '<table width="100%" style="font-family: Lato, sans-serif;" cellpadding="0" cellspacing="0" width="100%">'+
        '<tr>'+
            '<td>'+
               ' <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"style="max-width: 650px;border:1px solid #e8e8e8">'+
                    '<tbody>'+
                        

                        '<tr>'+
  
                                  
                                        '<td style="padding-bottom: 15px;"> Your Order - <b>'+ordernumber+'</b>has been successfully placed.</td>'+
                                   ' </tr>'+

                                    '<tr>'+
                                        '<td>'+
                                            '<table style="font-size:13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color: #000; border-collapse: collapse;margin-bottom:0px;font-size: 13px;"border="1" cellspacing="0" cellpadding="0">'+
                                                '<tbody>'+
                                                    '<tr>'+
                                                        '<td colspan="2" style="width:20%;vertical-align:middle"><img src="http://www.beatmysugar.com/assets/images/bms-logo.png" style="width: 50%;margin-right:auto;margin-left:auto; vertical-align: middle" />'+
                                                        '</td>'+
                                                        '<td colspan="8" style="width:80%">'+
                                                           ' <h2 style="text-align: center; font-size: 20px; font-weight: bold">BeatMySugar</h2>'+
                                                            '<p style="text-align: center" }}>Rx Health Management India Pvt Ltd 12th Floor, Puri 81 Business Hub,<br />Sec-81, Faridabad, Haryana - 121 001. INDIA.</p>'+
                                                    '<tr rowspan="8" class="success" style="width:100%">'+
                                                        '<td colspan="2" style="border-top:none"></td>'+
                                                        '<td colspan="8" style="text-align: right; padding-right: 1%;font-weight: bold;font-size: 16px;width:100%">Order Form</td>'+
                                                    '</tr>'+
                                        '</td>'+
                                    '</tr>'+


                                    '<tr style="text-align:center" }}>'+
                                        '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center">'+
                                            '<span style="font-weight: bold; font-size: 14px">Order Date</span></td>'+
                                       ' <td colspan="2" style="text-align: left;padding-left: 1%;padding-top: 1%;padding-bottom: 1%;text-align:center">'+
                                            orderdate+'</td>'+
                                        '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center">'+
                                            '<span style="font-weight: bold;font-size: 14px">Purchase Order No.</span>'+
                                        '</td>'+
                                        '<td colspan="2" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;text-align:center"> '+ordernumber+'</td>'+

                                   ' </tr>'+


                                    '<tr class="success">'+
                                        '<td colspan="5"'+
                                            'style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;padding-left : 1%;">'+
                                            'Billing'+
                                            'Address</td>'+
                                        '<td colspan="5"'+
                                            'style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;padding-left : 1%;">'+
                                           ' Shipping Address</td>'+
                                   ' </tr>'+
                                   ' <tr>'+
                                        '<td colspan="5" style="padding-top: 1%; padding-bottom: 1%; padding-left:1% ">'+
                                            '<span'+
                                                'style="font-weight: bold; font-size: 15px">'+billingname+'</span>'+
                                           ' <p>'+billingaddress+
                                                '<br />'+billingstreet+'<br />'+billingcity+
                                               billingpincode+','+
                                               billingstate+','+
                                               billingcountry+'.<br />Landmark:'+
                                               billinglandmark+''+
                                                '<br />Mobile Number: ( +91 '+billingmobile+')</p>'+
                                       ' </td>'+

                                        '<td colspan="5"'+
                                           ' style="padding-top: 1%; padding-bottom: 1%; font-size: 15px;text-align:center">'+
                                            '<span'+
                                                'style="font-weight: bold; font-size: 15px">'+shippingname+'</span>'+
                                            '<p style="font-size:13px">'+deliveryaddress+
                                                '<br />'+shippingstreet+'<br />'+shippingcity+
                                                shippingpincode+','+
                                                shippingstate+','+
                                                shippingcountry+'.<br />Landmark:'+
                                                shippinglandmark+''+
                                                '<br />Mobile Number: ( +91 '+shippingmobile+')</p>'+
                                        '</td>'+
                                    '</tr>'+

                    '</tbody>'+
                '</table>'+
                '<table'+
                    'style="font-size: 13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
                                                   '#000; border-collapse: collapse;margin-bottom:0px;word-break: break-all"'+
                    'border="1" cellspacing="0" cellpadding="0">'+
                    '<tbody>'+


                        '<tr class="success">'+
                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                   ' style="font-weight: bold">'+
                                    'S.No</span></td>'+
                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                    'style="font-weight: bold">HSN Code</span></td>'+

                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                    'style="font-weight: bold;" }}>'+
                                   ' Product</span></td>'+
                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                   ' style="font-weight: bold">'+
                                   ' Brand</span></td>'+
                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                   ' style="font-weight: bold">Quantity</span></td>'+
                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                    'style="font-weight: bold">Rate</span></td>'+
                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                    'style="font-weight: bold">GST %</span></td>'+
                       
                            '<td style="padding-top: 1%; padding-bottom: 1;text-align:center"><span'+
                                    'style="font-weight: bold">Total (INR)</span></td>'+

                       ' </tr>'+

                       


                     orderdata.map((dt,index)=>(
                        '<tr>'+
                        '<td>'+(index+1)+'.</td>'+
                        '<td>'+dt.fld_hsncode+'</td>'+
                        '<td>'+dt.fld_prodname+'</td>'+
                        '<td>'+dt.fld_brand+'</td>'+
                        '<td>'+dt.fld_quantity+'</td>'+
                        '<td>₹ '+dt.fld_price+'</td>'+
                        '<td>'+dt.fld_taxpercent+'%</td>'+
                        '<td> ₹ '+parseFloat(dt.fld_quantity*dt.fld_price).toFixed(2)+'</td>'+
                
                    '</tr>'
                     ))
                     +


                    '</tbody>'+
                '</table>'+
                '<table style="font-size: 13px;width:100%; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
                                               '#000; border-collapse: collapse;margin-bottom:0px;word-break: break-all"'+
                   ' border="1" cellspacing="0" cellpadding="0">'+
                    '<tbody>'+

                        '<tr>'+
                            '<td style="text-align: left; padding-left: 1%;padding-top:1%;padding-right:1%;vertical-align: top;">'+
                                '<span style="font-weight: bold"> Disclaimer:</span>'+
                                '<ul style="text-align: left;margin-left:5px;padding-left:10px">'+


                                    '<li>BMS is only providing a platform between seller and you</li>'+
                                    '<li>Warranties, If any, on Products are provided by seller</li>'+
                                    '<li>Disputes are subjected to exclusive jurisdiction of the courts in Delhi only  </li>'+
                                    '<li>Please revisit <a href="https://www.beatmysugar.com/" style={{fontWeight:600}}>www.beatmysugar.com</a> for detailed terms and conditions</li>'+
                                '</ul>'+



                            '</td>'+
                            '<td>'+
                               ' <table style="font-size: 13px;border-collapse: collapse;margin-bottom:0px;word-break: break-all" border="1" cellspacing="0" cellpadding="0">'+
                                    '<tr>'+
                                       ' <td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Sub total</span></td>'+
                                        '<td style="text-align: right; padding-right: 1%;width:40%"> ₹ '+ordervalue+' </td>'+

                                   ' </tr>'+
                                   ' <tr style="width:100%;">'+
                                        '<td style="text-align: right; padding: 1%"><span style="font-weight: bold">'+
                                                'Offer Discount</span></td>'+
                                        '<td style="text-align: right; padding-right: 1%;width:40%">  ₹ '+offeramount+'</td>'+

                                    '</tr>'+                                   
                                     '<tr style="width:100%;">'+
                                        '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Shipping Charge</span></td>'+
                                        '<td style="text-align: right; padding-right: 1%;width:40%"> ₹ '+shippingcharges+'  </td>'+

                                    '</tr>'+

                                    '<tr style="width:100%;">'+
                                        '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> COD Service Charge</span></td>'+
                                        '<td style="text-align: right; padding-right: 1%;width:40%"> ₹ '+coddeliverycharges+' </td>'+

                                    '</tr>'+

                                    '<tr style="width:100%;">'+
                                        '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Total (Inclusive of all Taxess)</span></td>'+
                                       ' <td style="text-align: right; padding-right: 1%;width:40%"> ₹ '+netcost+' </td>'+

                                    '</tr>'+
                                    '<tr style="width:100%;">'+
                                        '<td style="text-align: right; padding: 1%"><span style="font-weight: bold"> Payment Mode</span></td>'+
                                        '<td style="text-align: right; padding-right: 1%;width:20%"> '+paymentmode+' </td>'+

                                    '</tr>'+
                                    '<tr style="width:100%;">'+
                                        '<td colspan="2" style="padding-top: 1%; padding-bottom: 1%; text-align: center"> Have a Question? Call us on  +91 90244 22444 or Email us at wecare@beatmysugar.com</td>'+
                                    '</tr>'+
                                    '<tr class="success" style="width:100%;">'+
                                        '<td colspan="2"'+
                                            'style="padding-top: 1%; padding-bottom: 1%; text-align: center;background:#f7f7f7"> Visit us at <a href="https://www.beatmysugar.com/"'+
                                                'style="font-weight:600">www.beatmysugar.com</a></td>'+
                                    '</tr>'+
                            '</td>'+
                '</table>'+

           ' </td>'+
        '</tr>'+





    '</table>'+
  

    '</td>'+

    '</tr>'+
   
            '</table>'+
        '</td>'+
    '</tr>'+
   ' </tbody>'+
   ' </table>'+
    '</td>'+
   ' </tr>'+
    '</table>'+
'</body>'+

'</html>'
                        
                  
                        
                        
                    
                    }
    
                      

                      transporter.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));
                      transporter.sendMail(mailOptions, function (err, info) {
                        if(err){
                            console.log(err)
                          response.status(500);
                        
                        }
                        else{
                            console.log(info);

                        
                                    response.status(200);
                              
                                    response.send(info);
                            
                        
                        }
                         
                     });
                
                   
              

    }catch (err){
        console.log(err)
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
         pass: 'health@2020'
        
     }
 });


 