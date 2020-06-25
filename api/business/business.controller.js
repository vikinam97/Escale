const responseHandler = require("../../util/responseHandler"),
    service = require("./business.service");

module.exports.get = function (req, res) {
    service.get({
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.create = function (req, res) {
    service.create({
        name: req.body.name,
        email: req.body.email,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}