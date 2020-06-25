const express = require("express"),
    controller = require("./business.controller"),
    auth = require("../../util/auth"),
    router = express.Router();

router.get("/business", 
    auth, 
    controller.get)

router.post("/business", 
    auth, 
    controller.create)

module.exports = router;