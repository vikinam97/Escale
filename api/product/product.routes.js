const express = require("express"),
    controller = require("./product.controller"),
    auth = require("../../util/auth"),
    router = express.Router();

router.get("/product", 
    auth, 
    controller.get)

router.post("/product", 
    auth, 
    controller.create)

router.put("/product" + "/:id", 
    auth, 
    controller.update)

router.get("/product" + "/:id", 
    auth, 
    controller.info)

router.delete("/product" + "/:id", 
    auth, 
    controller.delete)
module.exports = router;