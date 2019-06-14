const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Image = require('../models/image');

const multer = require('multer');
const fs = require('fs');

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {

        cb(null, true);

    } else {

        cb(null, false);

    }

};

const upload = multer({
    dest: 'public/uploads/',
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/:id', (req, res) => {

    Image.findOne({_id: req.params.id}, function(err, image) {

        if (err) {

            console.log("errr", err);
            //return done(err, null);

        } else {

            res.send({
                image: {
                    path: image.path,
                    alt: image.alt,
                    title: image.title
                }
            });

        }

    });

});

router.post('/create', auth, upload.single('image'), (req, res, next) => {

    const { alt, title } = req.body;

    Image.create({
        path: req.file.filename,
        alt: alt,
        title: title
    }).then(image => res.send({
        image: {
            id: image._id,
            path: image.path,
            alt: image.alt,
            title: image.title
        }
    })).catch(e => {
        console.log(e);
    });

});

router.delete('/:id', auth, (req, res) => {

    Image.findOne({_id: req.params.id}, function(err, image) {

        if (err) {

            console.log("errr", err);
            //return done(err, null);

        } else {

            image.remove();
            fs.unlink(`./public/uploads/${image.path}`, (err) => {
                if (err) throw err;

                res.send({succes: true});

            });

        }

    });

});

module.exports = router;