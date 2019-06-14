const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Prorider = require('../models/prorider');
const Post = require('../models/post');

router.post('/create', auth, (req, res, next) => {

    const { title, content } = req.body;
    Prorider.findOne({_id: req.userData.userId})
        .then(prorider => {

            Post.create({
                title: title,
                content: content,
                proriderId: req.userData.userId
                })
                .then(post => {
                    prorider.posts.push(post._id);
                    prorider.save((err, updatedProrider) => {
                        if (err) {
                            res.status(500).json({
                                error: err
                            });
                        }
                        res.status(200).json({post: post});
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });


});

router.put('/:id/update', auth, (req, res, next) => {

    const { title, content } = req.body;

    Post.findOne({_id: req.params.id})
        .exec()
        .then(post => {
            post.title = req.body.title || post.title;
            post.content = req.body.content || post.content;

            post.save((err, updatedPost) => {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }
                res.status(200).json({post: updatedPost});
            });

        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });

});

router.delete('/:id/delete', auth, (req, res, next) => {

    Post.findOne({ _id: req.params.id })
        .exec()
        .then(post => {
            post.remove(() => {
                res.status(200).json({
                    status: 'success'
                });
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });

});

module.exports = router;