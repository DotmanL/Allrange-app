const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')


const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.THE_EMAIL,
      pass: process.env.THE_PASSWORD
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