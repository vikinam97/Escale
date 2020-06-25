const Business = require("./product.model");


/**
 * @description To get the proct by id
 * @author Vignesh R
 */
module.exports.get = ({
    user
}) => {
    return (async () => {
        return Business.find({
            createdBy: user._id
        });
    })()
}

/**
 * @description To get the proct by id
 * @author Vignesh R
 */
module.exports.info = ({
    productId,
    user
}) => {
    return Business.findOne({
        _id: productId
    });
}

/**
 * @description To create the proct
 * @param {String} name of the business
 * @param {String} email of the business
 * @param {Object} user for the user account
 * @author Vignesh R
 */

module.exports.create = ({
    name,
    mrp,
    description,
    images,
    business,
    user
}) => {
    return Business.create({
        name,
        mrp,
        description,
        images,
        business,
        createdBy: user._id,
    })
}

/**
 * @description To update the proct
 * @param {ObjectID} productId of the business
 * @param {String} name of the business
 * @param {Number} mrp for the user account
 * @param {String} description for the user account
 * @param {Array} images 
 * @author Vignesh R
 */

module.exports.update = ({
    productId,
    name,
    mrp,
    description,
    images,
    user
}) => {
    try {
        let updateObj = {};

        if(name) updateObj.name = name;
        if(mrp) updateObj.mrp = mrp;
        if(description) updateObj.description = description;
        if(images) updateObj.images = JSON.parse(images);
        console.log(updateObj);
        return Business.updateOne({
            _id: productId
        }, updateObj, {
            new: true
        })
    } catch (error) {
        return Promise.reject(error);
    }
}

/**
 * @description To delete the proct
 * @param {ObjectId} productId of the pproduct
 * @param {Object} user of the pproduct
 * @author Vignesh R
 */

module.exports.delete = ({
    productId,
    user
}) => {
    return Business.updateOne({
        _id: productId
    }, {
        deleted: true,
        deletedBy: user._id
    }, {
        new: true
    })
}