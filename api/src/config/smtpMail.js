
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const path = require('path');
const ejs = require("ejs");

// const mail = require('../views/mail.ejs')

const OAuth2 = google.auth.OAuth2
let emailTemplate;
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;
// console.log(CLIENT_ID)
// console.log(CLIENT_SECRET)
// console.log(REDIRECT_URI)
// console.log(REFRESH_TOKEN)

  const OAuth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
  function sendMail( recipient) {
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
  
      ejs.renderFile(path.join(__dirname, "../views/mail.ejs"),{
        nombre: 'juan Itu',
        logoPhoto: path.join(__dirname, '../utils/Logo.png')
      })
      .then( result => {
        emailTemplate = result;

        const mailOptions = {
          from: 'DROPS SHOES <dropshoes.info@gmail.com>',
          to: recipient,
          subject: 'Hello from gmail using API',
          html: emailTemplate,
      };
  
      transport.sendMail(mailOptions, (error, result) => {
          if(error) console.log('Error', error)
          else console.log('Success', result)
          transpport.close()
      });
     
  }).catch (error => {
    console.log(error)
  })
}


const getHtmlMessage = (name) => {
    return `
    <h3> ${name} </h3>
    
    `
}
  module.exports = sendMail

  // getHtmlMessage(name)

  // app.get("/hello", (req, res, next) => {
  //   let emailTemplate;
  //   let capitalizedFirstName = "John";
  //   let userEmail = "John@example.com";
  //   ejs
  //     .renderFile(path.join(__dirname, "views/welcome-mail.ejs"), {
  //       user_firstname: capitalizedFirstName,
  //       confirm_link: "http://www.8link.in/confirm=" + userEmail
  //     })
  //     .then(result => {
  //       emailTemplate = result;
  
  //       const message = {
  //         to: userEmail,
  //         from: { email: "welcome@8link.in", name: "8link" },
  //         subject: "Welcome link",
  //         html: emailTemplate
  //       };
  
  //       return SGmail.send(message)
  //         .then(sent => {
  //           // Awesome Logic to check if mail was sent
  //           res.status(200).json({
  //             message: "Welcome mail was sent"
  //           });
  //         })
  //         .catch(err => {
  //           console.log("Error sending mail", err);
  //           res.status(400).json({
  //             message: "Welcome mail was not sent",
  //             error: err
  //           });
  //         });
  
  //       //res.send(emailTemplate);
  //     })
  //     .catch(err => {
  //       res.status(400).json({
  //         message: "Error Rendering emailTemplate",
  //         error: err
  //       });
  //     });
  // });