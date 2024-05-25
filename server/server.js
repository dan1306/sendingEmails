const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3002;
const cors = require("cors");
const nodemailer = require('nodemailer');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
require("dotenv").config();


app.get("/api/v1/sendEmail", (req, res) => {
    console.log(req.body)

    res.send("req.body")
})

app.post("/api/v1/sendEmail", (req, res) => {
    console.log(req.body)

    const {
        email,
        subject,
        message
    } = req.body
    
    

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:process.env.email,
          pass: process.env.password
        }
      });
      
      let mailOptions = {
        from: process.env.email,
        to: email,
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(400).json(error)
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json('Email sent: ' + info.response)
        }
      });
    
})

app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });
  