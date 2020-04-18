const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

const nodemailer = require('nodemailer');
const morgan = require('morgan')


if (process.env.NODE_ENV !== 'production') require ('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// const paystack = require("paystack")(process.env.PAYSTACK_SECRET);

// import our stripe libraray and access to our stripe secret key stored and hidden in our.env
// give us access to stripe functions such as stripe.charges, etc..

const app = express();
const port = process.env.PORT || 5000;


app.use(compression());
app.use(express.json())
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded ({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());
app.use(morgan('dev'))


app.post('/sendtome', (req, res) =>  {
    const name = req.body.name;
	const email = req.body.email;
    const message = req.body.message;
    

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.THE_EMAIL,
      pass: process.env.THE_PASSWORD
    }
  });
      const mail = {
		from: name,
		to: 'oladotunlawal7@gmail.com',
		message: message,
        email: email
    };

    transporter.sendMail(mail, (err,data) => {
    if(err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  }) 

});






if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

app.get ('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
}


app.listen(port, error => {
    if(error) throw error;
    console.log('Server is running on port ' + port);
});

app.get('/service-worker.js', ( req, res ) =>{
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

//Payment Route
app.post("/payment", (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'ngn' 
    };

    stripe.charges.create(body, (stripeErr, stripeRes) =>{
if (stripeErr) {
    res.status(500).send({ error:stripeErr });
} else {
    res.status(200).send({ success: stripeRes });
}
    })
});


