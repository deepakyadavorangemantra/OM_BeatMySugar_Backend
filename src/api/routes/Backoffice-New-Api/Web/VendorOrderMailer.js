const express = require("express");
const router = express.Router();
const sql = require("mssql");

// const dbConnection = require("../../utilities/db2");
var nodemailer = require('nodemailer');
var inlineBase64 = require('nodemailer-plugin-inline-base64');
var smtpTransport = require("nodemailer-smtp-transport");

var QRCode = require('qrcode')



router.post("/", function(request, response){

  var data = ''
  var CheckVal = ''
  var ht = ''

    var ordernumber = request.body.ordernumber;
    var cusordernumber = request.body.cusordernumber;
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

    var vendorname = request.body.vendorname;
    var vendoraddress = request.body.vendoraddress;
    var vendorlandmark = request.body.vendorlandmark;
    var vendorcountry = request.body.vendorcountry;
    var vendorstate = request.body.vendorstate;
    var vendorcity= request.body.vendorcity;
    var vendorpincode = request.body.vendorpincode;

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
     

        
      var pw= ''
      
      var cd =  orderdata.map((dt,index)=>(
        dt.fld_productweight != undefined ?

        '<tr>'+
           '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+(index+1)+'.</td>'+
           '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_hsncode+'</td>'+
           '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_prodname+'</td>'+
           '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_brand+'</td>'+
           '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_quantity+'</td>'+
          ' <td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_productweight+' '+dt.fld_productunit+'</td>'+
          ' <td style="padding-top: 1%;padding-bottom: 1%; text-align: center;">₹ '+parseFloat(dt.fld_price).toFixed(2)+'</td>'+
          ' <td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_taxpercent+'% </td>'+
           '<td style=" padding-top: 1%;padding-bottom: 1%;text-align: center;">₹ '+parseFloat(dt.fld_quantity*dt.fld_price).toFixed(2)+'</td>'+
        '</tr>'
        :

        '<tr>'+
        '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+(index+1)+'.</td>'+
        '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_hsncode+'</td>'+
        '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_prodname+'</td>'+
        '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_brand+'</td>'+
        '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_quantity+'</td>'+
       ' <td style="padding-top: 1%;padding-bottom: 1%;text-align: center;"> - </td>'+
       ' <td style="padding-top: 1%;padding-bottom: 1%; text-align: center;">₹ '+parseFloat(dt.fld_price).toFixed(2)+'</td>'+
       ' <td style="padding-top: 1%;padding-bottom: 1%;text-align: center;">'+dt.fld_taxpercent+'% </td>'+
        '<td style=" padding-top: 1%;padding-bottom: 1%;text-align: center;">₹ '+parseFloat(dt.fld_quantity*dt.fld_price).toFixed(2)+'</td>'+
     '</tr>'

        ))


 cd.map((dt,index)=>(

  ht = ht + dt
))




                    const mailOptions = {
                     
                        from: 'BeatMySugar - Simplifying Diabetes Management <wecare@beatmysugar.com>', // sender address
                        to: 'nidhi@globaltrendz.com', // list of receivers
                        cc : 'arun@beatmysugar.com',
                        subject: 'Order Received.', // Subject line
                        html:

                        '<html>'+
                        '<head>'+
                    
                        '<body>'+
                       
                    
                     '<table style="'+
                       'width: 1000px;'+
                       'text-align: center;'+
                      ' margin-left: auto;'+
                      ' margin-right: auto;'+
                       'bottom: 0px;'+
                       'border-right-color: #000;'+
                      ' border-collapse: collapse;'+
                       'font-family: Lato, sans-serif;"' +
                    ' border="1"'+
                     'cellspacing="0"'+
                    ' cellpadding="0">'+
                    
                     '<tbody>'+
                    
                    
                    
                    
                       '<tr>'+
                        ' <td rowspan="2" style="width: 20%;">'+
                           '<img src="https://bmsdemo.beatmysugar.com/assets/images/bms-logo.png" style="width: 50%;"/>'+
                         '</td>'+
                         '<td colspan="8" style="width: 80%;">'+
                           '<h2 style="'+
                               'text-align: center;'+
                               'font-size: 25px;'+
                               'font-weight: bold;'+
                               'margin-bottom:0px;">'+
                             'BeatMySugar'+
                           '</h2>'+
                           '<p style="text-align: center;margin-top:5px;margin-bottom: 5px;">'+
                             'Rx Health Management India Pvt Ltd<br> 12th Floor, Puri'+
                             '81 Business Hub,'+
                    
                             '<br />Sec-81, Faridabad, Haryana - 121 001. INDIA.'+
                           '</p>'+
                           '<tr class="success"'+
                             'style="background-color: #f7f7f7 !important;" >'+
                             '<td colspan="8"'+
                               'style="text-align: right;'+
                                 'padding-right: 1%;'+
                                 'font-weight: bold;'+
                                 'font-size: 20px;">'+
                               'Vendor Order Form'+
                             '</td>'+
                           '</tr>'+
                         '</td>'+
                       '</tr>'+
                    
                       '<tr>'+
                         '<td colspan="1"'+
                           'style="text-align: left;'+
                             'padding-left: 1%;'+
                             'padding-top: 1%;'+
                             'padding-bottom: 1%;">'+
                           '<span style="font-weight: bold; font-size: 16px;">Order Date</span>'+
                         '</td>'+
                        ' <td colspan="1"'+
                           'style=" text-align: left;'+
                             'padding-left: 1%;'+
                            ' padding-top: 1%;'+
                            ' padding-bottom: 1%;" >'+
                            orderdate+
                         '</td>'+
                         '<td colspan="1"'+
                         'style="text-align: left;'+
                           'padding-left: 1%;'+
                           'padding-top: 1%;'+
                           'padding-bottom: 1%;">'+
                         '<span style="font-weight: bold; font-size: 16px;">Customer PO No.</span>'+
                       '</td>'+
                      ' <td colspan="1"'+
                         'style=" text-align: left;'+
                           'padding-left: 1%;'+
                          ' padding-top: 1%;'+
                          ' padding-bottom: 1%;" >'+
                          cusordernumber+
                       '</td>'+
                         '<td colspan="1"'+
                           'style="text-align: left;'+
                             'padding-left: 1%;'+
                             'padding-top: 1%;'+
                             'padding-bottom: 1%;">'+
                          ' <span style="font-weight: bold; font-size: 16px;">Vendor PO No.</span>'+
                         '</td>'+
                        ' <td colspan="1"'+
                         'style="text-align: left;'+
                            ' padding-left: 1%;'+
                             'padding-top: 1%;'+
                            ' padding-bottom: 1%;">'+
                         ordernumber+
                         '</td>'+
                       '</tr>'+

                       '<tr class="success" style="background-color: #f7f7f7 !important;">'+
     '<td colspan="8" style=" padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px; text-align: center; " >'+
      'Vendor Address'+
     '</td>'+
  ' </tr>'+
  ' <tr>'+
   ' <td colspan="8" style=" text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%; " >'+
     ' <span style="font-weight: bold; font-size: 18px;">'+
        vendorname+
      '</span>'+
      '<p style="margin-top:5px">'+
        vendoraddress+','+'<br/>' +vendorcity+','+vendorpincode+',<br/>'+vendorstate+','+vendorcountry+'.<br>'+
        'Landmark:'+vendorlandmark+'<br/>'+
      'Email: ('+vendoremail+')'+
    '  </p>'+
    '</td>'+
  ' </tr>'+
                    
                       '<tr class="success" style="background-color: #f7f7f7 !important;">'+
                         '<td colspan="4" style="padding-top: 1%;'+
                             'padding-bottom: 1%;'+
                             'font-weight: bold;'+
                             'width:50%;'+
                             'font-size: 15px;'+
                             'text-align: center;">'+
                           'Billing Address'+
                         '</td>'+
                         '<td colspan="4" style="padding-top: 1%;'+
                             'padding-bottom: 1%;'+
                             'font-weight: bold;'+
                             'width:50%;'+
                             'font-size: 15px;'+
                            ' text-align: center;">'+
                           'Shipping Address'+
                         '</td>'+
                       '</tr>'+
                       '<tr>'+
                         '<td colspan="4" style="text-align: left;'+
                             'padding-left: 1%;'+
                            ' padding-top: 1%;'+
                             'padding-bottom: 1%;" >'+
                         '  <span style="font-weight: bold; font-size: 18px;">'+
                             billingname+
                           '</span>'+
                           '<p>'+
                             billingaddress + '<br />'+
                             billingstreet  +'<br />'+
                             billingcity +' '+ billingpincode +','+ billingstate +','+
                             billingcountry +'.<br />Landmark:'+ billinglandmark+
                            ' <br />Mobile Number: ( 91 '+billingmobile+' )'+
                           '</p>'+
                         '</td>'+
                    
                        ' <td  colspan="4"  style=" text-align: left;'+
                             'padding-left: 1%;'+
                            ' padding-top: 1%;'+
                             'padding-bottom: 1%;" >'+
                           '<span style="font-weight: bold; font-size: 18px;">'+
                             shippingname+
                           '</span>'+
                           '<p>'+
                             deliveryaddress +'<br />'+
                             shippingstreet +'<br />'+
                             shippingcity +' '+ shippingpincode +','+ shippingstate +','+
                             shippingcountry +'.<br />Landmark:'+ shippinglandmark+
                             '<br />Mobile Number: ( 91 '+shippingmobile+' )'+
                           '</p>'+
                         '</td>'+
                       '</tr>'+
                     '</tbody>'+
                    '</table>'+
                    
                    '<table style="'+
                       'width: 1000px;'+
                       'text-align: center;'+
                       'margin-left: auto;'+
                      ' margin-right: auto;'+
                      ' border-right-color: #000;'+
                      ' border-top: hidden;'+
                       'font-family: Lato, sans-serif;'+
                      ' border-collapse: collapse;"'+
                    ' border="1"'+
                    ' cellspacing="0"'+
                    ' cellpadding="0">'+
                     '<tbody>'+
                     '  <tr class="success"'+
                        ' style="background-color: #f7f7f7 !important;" >'+
                        ' <td style="padding-top: 1%;'+
                            'padding-bottom: 1%;'+
                            'width:5%'+
                             'text-align: center;" >'+
                             '<span style="font-weight: bold;"> S.No</span>'+
                         '</td>'+
                         '<td style=" padding-top: 1%;'+
                            'padding-bottom: 1%;'+
                            'width:10%'+
                            'text-align: center;">'+
                         '<span style="font-weight: bold;"> HSN Code</span>'+
                         '</td>'+
                       '  <td style="padding-top: 1%;'+
                            'padding-bottom: 1%;'+
                            'width:30%'+
                             'text-align: center;">'+
                           '<span style="font-weight: bold;"> Product</span>'+
                         '</td>'+
                        ' <td style="padding-top: 1%;'+
                             'padding-bottom: 1%;'+
                             'width:10%'+
                             'text-align: center; " >'+
                        ' <span style="font-weight: bold;"> Brand</span>'+
                        ' </td>'+
                        
                    
                         '<td style=" padding-top: 1%; padding-bottom: 1%;text-align: center;width:10%;">'+
                           '<span style="font-weight: bold;">Quantity</span>'+
                         '</td>'+
                    
                         '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;width:10%;">'+
                         '<span style="font-weight: bold;">Net Weight</span>'+
                      ' </td>'+
                    
                         '<td style="padding-top: 1%;padding-bottom: 1%;text-align: center;width:10%;">'+
                         '<span style="font-weight: bold;">Rate</span>'+
                       '</td>'+
                       
                        ' <td style="padding-top: 1%;padding-bottom: 1%;text-align: center;width:5%;">'+
                          ' <span style="font-weight: bold;">GST %</span>'+
                         '</td>'+
                        
                    
                         '<td style=" padding-top: 1%; padding-bottom: 1%; text-align: center;width:10%;">'+
                          ' <span style="font-weight: bold;">Total (INR)</span>'+
                         '</td>'+
                    
                     
                       '</tr>'+
                     
                       ht+
                    
                     '</tbody>'+
                    '</table>'+
                    '<table style="'+
                    'width: 1000px;'+
                    'text-align: center;'+
                    'margin-left: auto;'+
                    ' margin-right: auto;'+
                    ' border-right-color: #000;'+
                    ' border-top: hidden;'+
                    'font-family: Lato, sans-serif;'+
                    ' border-collapse: collapse;"'+
                    ' border="1"'+
                    ' cellspacing="0"'+
                    ' cellpadding="0">'+
                     '<tbody>'+
                       '<tr>'+
                         '<td rowspan="7" colspan="4" style="text-align: left; padding-left: 1%;width:55%;">'+
                           '<span style="font-weight: bold;"> Disclaimer:</span>'+
                           '<ul style="text-align: left;line-height:30px">'+
                             '<li>'+
                               'BMS is only providing a platform between seller and you'+
                             '</li>'+
                            ' <li>'+
                               'Warranties, If any, on Products are provided by seller'+
                             '</li>'+
                             '<li>'+
                               'Disputes are subjected to exclusive jurisdiction of the courts in Delhi only'+
                             '</li>'+
                             '<li>'+
                               'Please revisit <a href="https://beatmysugar.com/">www.beatmysugar.com</a>'+
                               'for detailed terms and conditions </li></ul>'+
                    
                           '<tr>'+
                             '<td colspan="4"  style="text-align: right; padding: 1%;width:35%;" >'+
                               '<span style="font-weight: bold;"> Sub total</span>'+
                            ' </td>'+
                             '<td style="text-align: right; padding-right: 1%;">'+
                             '&#8377; '+parseFloat(ordervalue).toFixed(2)+
                             '</td>'+
                          ' </tr>'+
                          ' <tr>'+
                             '<td colspan="4" style="text-align: right; padding: 1%;" >'+
                               '<span style="font-weight: bold;">'+
                                 'Offer Discount'+
                              ' </span>'+
                             '</td>'+
                             '<td style="text-align: right; padding-right: 1%;">'+
                             '&#8377; '+parseFloat((offeramount == null ? 0 : offeramount)).toFixed(2)+
                             '</td>'+
                           '</tr>'+
                           '<tr>'+
                             '<td colspan="4" style="text-align: right; padding: 1%;" >'+
                               '<span style="font-weight: bold;">'+
                                 'Shipping Charge'+
                               '</span>'+
                            ' </td>'+
                             '<td style="text-align: right; padding-right: 1%;">'+
                                '&#8377; '+parseFloat(shippingcharges).toFixed(2)+
                            ' </td>'+
                          ' </tr>'+
                          ' <tr>'+
                            ' <td colspan="4" style="text-align: right; padding: 1%;" >'+
                               '<span style="font-weight: bold;">'+
                                'COD Service Charge'+
                               '</span>'+
                            ' </td>'+
                            ' <td style="text-align: right; padding-right: 1%;">'+
                                '&#8377; '+parseFloat(coddeliverycharges).toFixed(2)+
                             '</td>'+
                           '</tr>'+
                    
                          ' <tr>'+
                             '<td colspan="4"  style="text-align: right; padding: 1%;" >'+
                              ' <span style="font-weight: bold;">'+
                                ' Total (Inclusive of all Taxes)'+
                              ' </span>'+
                             '</td>'+
                            ' <td style="text-align: right; padding-right: 1%;">'+
                                '&#8377; '+parseFloat(netcost).toFixed(2)+
                            ' </td>'+
                           '</tr>'+
                    
                           '<tr>'+
                            ' <td  colspan="4" style="text-align: right; padding: 1%;" >'+
                               '<span style="font-weight: bold;">'+
                                 'Payment Mode'+
                              ' </span>'+
                            ' </td>'+
                            ' <td style="text-align: right; padding-right: 1%;">'+
                                 paymentmode+
                             '</td>'+
                          ' </tr>'+
                        ' </td>'+
                      ' </tr>'+
                    
                      
                    ' </tbody>'+
                    '</table>'+
                    '<table style="'+
                    'width: 1000px;'+
                    'text-align: center;'+
                    'margin-left: auto;'+
                    'margin-right: auto;'+
                    'border-right-color: #000;'+
                    'border-top: hidden;'+
                    'font-family: Lato, sans-serif;'+
                    'border-collapse: collapse;"'+
                    'border="1"'+
                    'cellspacing="1"'+
                    'cellpadding="0">'+
                        '<tbody>'+
                           ' <tr>'+
      
                              '<td colspan="10"'+
                                'style=" padding-top: 1%;'+
                                 ' padding-bottom: 1%;'+
                                  'text-align: center;">'+
                                'Have a Question?<br> Call us on 91 90244 22444 or Email us at wecare@beatmysugar.com'+
                             ' </td>'+
                           ' </tr>'+
                         
                           ' <tr class="success"'+
                            '  style="background-color: #f7f7f7 !important;" >'+
                             ' <td colspan="10"'+
                               ' style="padding-top: 1%;'+
                                 ' padding-bottom: 1%;'+
                                  'text-align: center;'+
                                 ' background: #f7f7f7;">'+
                               ' Visit us at <a href="https://beatmysugar.com/">www.beatmysugar.com</a>'+
                              '</td>'+
                           ' </tr>'+
                       ' </tbody>'+
                    '</table>'+
                    
                    '</body>'+
                    '</html> '       
                    
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


 