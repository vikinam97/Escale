const jwt = require('jsonwebtoken'),
    User = require("../api/user/user.model");

module.exports = function (req, res, next) {
    if(!req.headers.authorization) return res.json({
        msg: "Token Not Found"
    });
    jwt.verify(req.headers.authorization, process.env.SECRET, function(err, userObj) {
        if (err) return res.json({
            msg: "Invalid Token"
        })
        req.user = userObj;
        next();
    });
}