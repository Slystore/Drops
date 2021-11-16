
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2

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
  
  async function sendMail(name, recipient) {
    try {
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
  
      const mailOptions = {
        from: 'DROPS SHOES <dropshoes.info@gmail.com>',
        to: recipient,
        subject: 'Hello from gmail using API',
        html: getHtmlMessage(name),
      };
  
     transport.sendMail(mailOptions, (error, result) => {
         if(error) console.log('Error', error)
         else console.log('Success', result)
         transpport.close()
     });
     
  } catch(error){}
}

const getHtmlMessage = (name) => {
    return `
    <h3> ${name} </h3>
    
    `
}
  module.exports = sendMail