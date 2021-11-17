
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const path = require('path');
const ejs = require("ejs");


// const mail = require('../views/mail.ejs')

const OAuth2 = google.auth.OAuth2
let emailTemplate;
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

  const OAuth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
  function sendMail( recipient, data) {
    const accessToken = OAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'dropshoes.info@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
      tls: {
          rejectUnauthorized: false
      }
    });
  
      ejs.renderFile(path.join(__dirname, "../views/mail-despacho.ejs"),{data})
      .then( result => {
        emailTemplate = result;

        const mailOptions = {
          from: 'DROPS SHOES <dropshoes.info@gmail.com>',
          to: recipient,
          subject: 'Su orden ha sido despachada',
          html: emailTemplate,
      };
  
      transport.sendMail(mailOptions, (error, result) => {
          if(error) console.log('Error', error)
          else console.log('Success', result)
          transport.close()
      });
     
  }).catch (error => {
    console.log(error)
  })
}




module.exports = sendMail