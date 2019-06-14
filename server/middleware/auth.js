const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {

    try {
        console.log(req.cookies);
        const decoded = jwt.verify(req.cookies.access_token, config.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }

};