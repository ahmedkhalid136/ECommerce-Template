const express = require('express');
const router = express.Router();
const controller = require("./controller")

router.post("/addProduct", function (req, res, next) {
    controller.addProduct(req, res, next);
});

router.post("/deleteProduct", function (req, res, next) {

})

module.exports = router;