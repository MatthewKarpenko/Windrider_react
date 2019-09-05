const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const auth = require('../middleware/auth');

const Admin = require('../models/admin');

const nodemailer = require('nodemailer');

router.post('/', auth, (req, res) => {
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

router.post('/login', (req, res, next) => {

    console.log(req.body.email);
    Admin.find({email: req.body.email})
        .exec()
        .then(admin => {
            if (admin.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            } else {
                bcrypt.compare(req.body.password, admin[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth failed'
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: admin[0].email,
                                userId: admin[0]._id
                            },
                            config.JWT_KEY,
                            {
                                expiresIn: '1h'
                            }
                        );
                        res.cookie('access_token', token, {
                            maxAge: 60 * 60 * 24
                        });
                        return res.status(200).json({
                            message: 'Auth successful',
                            token: token
                        })
                    }
                    res.status(401).json({
                        message: 'Auth failed'
                    });
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });

});

module.exports = router;