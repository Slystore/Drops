const nodemailer = require("nodemailer");
require("dotenv").config();
const { GOOGLEPASS }= process.env;


// create reusable transporter object using the default SMTP transport
const   transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "germicampo@gmail.com", // generated ethereal user
    pass: GOOGLEPASS, // generated ethereal password
  },
});
transporter.verify().then(()=>{
    console.log('Ready for send ')
})
module.exports=transporter;