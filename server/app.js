const express = require('express');
const app = express();
const config = require('./config');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path = require('path');

const staticAsset = require('static-asset');

const proriderRoutes = require('./routes/prorider');
const imagesRouter = require('./routes/image');
const albumsRouter = require('./routes/album');
const postsRouter = require('./routes/post');

const multer = require('multer');
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {

        cb(null, true);

    } else {

        cb(null, false);

    }

};

const upload = multer({
    dest: './server/public/uploads/',
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(staticAsset(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/proriders', proriderRoutes);
app.use('/images', imagesRouter);
app.use('/albums', albumsRouter);
app.use('/posts', postsRouter);


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.render('404');
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error.message);
    res.render('500', {
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {}
    });
});

module.exports = app;