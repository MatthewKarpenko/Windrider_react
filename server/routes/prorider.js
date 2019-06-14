const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const auth = require('../middleware/auth');

const Prorider = require('../models/prorider');
const Post = require('../models/prorider');

router.get('/', (req, res) => {
    Prorider.find({}).then(proriders => {
        res.render('proriders', {proriders: proriders})
    });
});

router.get('/new', (req, res) => res.render('newProrider'));

router.post('/signup', (req, res, next) => {
    const { name, surname, email, password } = req.body;
    Prorider.find({email: email})
        .exec()
        .then(prorider => {
            if(prorider.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
                })
            } else {
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        Prorider.create({
                            name: name,
                            surname: surname,
                            email: email,
                            password: hash
                        }).then(prorider => {
                            res.status(500).json({
                                prorider: prorider
                            })
                        }).catch(err => {
                            res.status(500).json({
                                error: err
                            })
                        });
                    }
                });
            }
        });
});

router.post('/login', (req, res, next) => {

    Prorider.find({email: req.body.email})
        .exec()
        .then(prorider => {
            if (prorider.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            } else {
                bcrypt.compare(req.body.password, prorider[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth failed'
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                            email: prorider[0].email,
                            userId: prorider[0]._id
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

router.get('/:id/addPhoto', auth, (req, res) => {

    Prorider.findOne({_id: req.userData.userId}, (err, prorider) => {
        if (err) {
            console.log("errr", err);
            //return done(err, null);
        } else {
            console.log(prorider);
            res.render('addPhotos', {prorider: prorider});
        }
    });

});

router.post('/:id/addPhotos', auth, (req, res, next) => {

    Prorider.findOne({_id: req.userData.userId}, (err, prorider) => {
        if (err) {
            console.log("errr", err);
            //return done(err, null);
        } else {
            console.log(req.files);
            prorider.photos = req.body.photos;
            prorider.save((err, updatedProrider) => {
                if (err) return err;
                res.send(updatedProrider);
            });
        }
    });

});

router.delete('/:id', auth, (req, res) => {
    Prorider.findOne({_id: req.userData.userId}, (err, prorider) => {
        if (err) {
            console.log("errr", err);
            //return done(err, null);
        } else {
            console.log(prorider);
            prorider.remove()
        }
    });

});

router.get('/:id', (req, res) => {
    Prorider.findOne({_id: req.params.id})
        .populate('posts', ['title', 'content', 'dateAdded'])
        .exec((err, prorider) => {
        if (err) {
            console.log("errr", err);
            //return done(err, null);
        } else {
            console.log(prorider.posts)
            res.render('proriderPage', {prorider: prorider});
        }
    });

});

module.exports = router;