const User = require("./user.model");


/**
 * @description To get the user by id
 * @author Vignesh R
 */
module.exports.get = ({
    userId
}) => {
    return (async () => {
        return User.findOne({
            _id: userId
        })
    })()
}

/**
 * @description To create the user
 * @param {String} firstName of the user
 * @param {String} lastName of the user
 * @param {String} email of the user
 * @param {String} password for the user account
 * @author Vignesh R`
 */

module.exports.create = ({
    firstName,
    lastName,
    email,
    password
}) => {
    return User.create({
        firstName,
        lastName,
        email,
        password
    })
}