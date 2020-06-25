const express = require("express"),
    User = require("../user/user.model"),
    jwt = require('jsonwebtoken'),
    router = express.Router();

router.post("/login", async function (req, res) {
   try {
    let userObj = await User.findOne({
        email: req.body.userName,
        password: req.body.password,
        deleted: { $ne: true}
    });
    if (!userObj) return res.json({
        msg: "Invalid username or password"
    });
    // jwt.sign(userObj, 'secret', { expiresIn: '1h' });
    jwt.sign(JSON.stringify(userObj), process.env.SECRET, function(err, token) {
        if (err) return res.end(err);    
        res.json({
            token: token
        })
    })
   } catch (error) {
       console.log(error);
       res.end("Error Occured");
   }
})

module.exports = router;