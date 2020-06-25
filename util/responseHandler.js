module.exports.sucess = function(res, data) {
    res.status(200).json({
        error: false,
        data: data
    })
}

module.exports.error = function(res, error) {
    res.status(200).json({
        error: false,
        error: error
    })
}