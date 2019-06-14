const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Album = require('../models/album');

router.get('/:id', (req, res) => {

    Album.findOne({_id: req.params.id})
        .populate('images')
        .exec((err, album) => {

            if (err) {

                console.log("errr", err);
                //return done(err, null);

            } else {
                let images = [];
                album.images.forEach((image) => {

                    images.push({

                        id: image._id,
                        path: image.path

                    });

                });
                res.send({
                    album: {
                        title: album.title,
                        images: images
                    }
                });

            }

        });

});

router.post('/create', auth, (req, res, next) => {

    const { title, imagesIDs } = req.body;

    Album.create({
        title: title,
        images: JSON.parse(imagesIDs)
    }).then((album) => {

        album.populate('images', (err, album) => {

                if (err) {

                    console.log("errr", err);
                    //return done(err, null);

                } else {

                    let images = [];
                    album.images.forEach((image) => {

                        images.push({

                            id: image._id,
                            path: image.path

                        });

                        console.log(images)

                    });
                    res.send({
                        album: {
                            id: album._id,
                            title: album.title,
                            images: images
                        }
                    });

                }

            });


    });

});

router.put('/:id', auth, (req, res) => {

    const { title, imagesIDs } = req.body;

    Album.findOne({_id: req.params.id}, (err, album) => {

        if (err) {

            console.log("errr", err);

        } else {

            album.title = title;
            album.images = JSON.parse(imagesIDs);
            album.save((err, updatedAlbum) => {

                if (err) return handleError(err);

                updatedAlbum.populate('images', (err, updatedAlbum) => {

                    if (err) {

                        console.log('errr', err);

                    } else {

                        let images = [];
                        updatedAlbum.images.forEach((image) => {

                            images.push({

                                id: image._id,
                                path: image.path

                            });

                        });

                        res.send({
                            album: {
                                id: updatedAlbum._id,
                                title: updatedAlbum.title,
                                images: images
                            }
                        });

                    }

                });

            });

        }

    });

});

router.delete('/:id', auth, (req, res) => {

    Album.findOne({_id: req.params.id}, (err, album) => {

        if (err) {

            console.log("errr", err);
            //return done(err, null);

        } else {

            album.remove();

        }

    });

});

module.exports = router;