const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;



const oauth2Client = new OAuth2(
  process.env.ClientID,
  process.env.ClientSecret,
 "https://developers.google.com/oauthplayground", 
);

oauth2Client.setCredentials({
  refresh_token: `1//042nj6Cs1mkjlCgYIARAAGAQSNwF-L9IrXUVSHYpVyfXcprKb5Fg7GURFHc2AvSXOrmTr5Nv4ARLcOlwIUBG5vOhypCiKMHenZGk`
});

//const accessToken = oauth2Client.getAccessToken()

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
       type: "OAuth2",
       user: "oladotunlawal7@gmail.com", 
       ClientId: process.env.ClientID,
       ClientSecret: process.env.ClientSecret,
       RefreshToken: process.env.RefreshToken,
       accessToken: process.env.AccessToken
  }
};

  const transporter = nodemailer.createTransport(smtpConfig);
  transporter.verify((error, success) => {
    if(error) {
      console.error(error)
    } else {
      console.log('users ready to mail myself')
    }
  });


  sendToMeRouter.post('/', (req,res, next) => {
    const mail = {
      from: process.env.THE_EMAIL,
      to: 'oladotunlawal7@gmail.com',
      text: `
      from: ${req.body.name} 

      contact: ${req.body.email}

      message:  ${req.body.message}`
    }
    
transporter.sendMail(mail, (err,data) => {
    if(err) {
      res.json({
        status: 'failure to send mail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  }) 

});


console.log("from sendToMe")

module.exports = sendToMeRouter