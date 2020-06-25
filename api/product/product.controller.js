const responseHandler = require("../../util/responseHandler"),
    service = require("./product.service");

module.exports.get = function (req, res) {
    service.get({
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.info = function (req, res) {
    service.info({
        productId: req.params.id,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.create = function (req, res) {
    service.create({
        name: req.body.name,
        mrp: req.body.mrp,
        description: req.body.description,
        images: req.body.images,
        business: req.body.business,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.update = function (req, res) {
    service.update({
        productId: req.params.id, 
        name: req.body.name,
        mrp: req.body.mrp,
        description: req.body.description,
        images: req.body.images,
        business: req.body.business,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}

module.exports.delete = function (req, res) {
    service.delete({
        productId: req.params.id,
        user: req.user
    }).then(data => responseHandler.sucess(res, data))
        .catch(error => responseHandler.error(res, error))
}