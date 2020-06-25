const responseHandler = require("../../util/responseHandler"),
    service = require("./user.service");

module.exports.get = function (req, res) {
    service.get({
        userId: req.user._id
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.create = function (req, res) {
    service.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}