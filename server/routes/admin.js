const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Album = require('../models/album');

const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
    console.log(req.body.email);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'billoualex@gmail.com',
            pass: '1q2w3elox'
        }
    });

    let mailOptions = {
        from: 'billoualex@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

module.exports = router;