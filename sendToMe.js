const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const oauth2Client = new OAuth2(
  process.env.ClientID,
  process.env.ClientSecret,
 "https://developers.google.com/oauthplayground", 
);

oauth2Client.setCredentials({
  refresh_token:"1//04t5Q7N5EA86SCgYIARAAGAQSNwF-L9Irm963eHtT5dFWyC-zda91KuNnzFgyp0ZweHn2fH_j7cxxnkqDc5QUQ2Y1DMOQNASWBb8"
});

//const accessToken = oauth2Client.getAccessToken()

const transport =  {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
       type: "OAuth2",
       user: "oladotunlawal7@gmail.com", 
       clientId: process.env.ClientID,
       clientSecret: process.env.ClientSecret,
       refreshToken: process.env.RefreshToken,
       accessToken: "ya29.a0Ae4lvC1FBpSMGF_nziGSKcqZGyc6lIE4tR3audAW2NQePYS0jpASiTbZWqyBXXGwLV_0lyLNkuTJVHpacyfHkv8lFwA4XjDQkGh9EjSy9tN4DRXq-uCkL7gXaF6ax5GFw9Zj0NnJSn_Qx_YXi9bttXQBZ59HW5X1LWc"
  }
};

  const transporter = nodemailer.createTransport(transport);
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