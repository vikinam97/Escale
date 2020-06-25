const Business = require("./business.model");


/**
 * @description To get the user by id
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
 * @description To create the user
 * @param {String} name of the business
 * @param {String} email of the business
 * @param {String} user for the user account
 * @author Vignesh R
 */

module.exports.create = ({
    name,
    email,
    user
}) => {
    return Business.create({
        name,
        email,
        createdBy: user._id,
        regNo: new Date().getTime()
    })
}