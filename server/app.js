const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path = require('path');

const staticAsset = require('static-asset');

const proriderRoutes = require('./routes/prorider');
const imagesRouter = require('./routes/image');
const albumsRouter = require('./routes/album');
const postsRouter = require('./routes/post');
const adminRouter = require('./routes/admin');

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

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(staticAsset(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/proriders', proriderRoutes);
app.use('/api/images', imagesRouter);
app.use('/api/albums', albumsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
   res.sendFile('/application/index.html');
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.json('404');
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error.message);
    res.json({
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {}
    });
});

module.exports = app;