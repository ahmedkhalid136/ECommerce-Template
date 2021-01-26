const express = require('express');
const router = express.Router();
const controller = require("./controller")

////////////////////// Product Routes //////////////////////
router.post("/addProduct", function (req, res, next) {
    controller.addProduct(req, res, next);
});

router.post("/deleteProduct", function (req, res, next) {
    controller.deleteProduct(req, res, next);
})

router.post("/searchproduct", function (req, res, next) {
    controller.searchProduct(req, res, next);
})
router.post("/updateproduct", function (req, res, next) {
    controller.updateProduct(req, res, next);
});

/////////////////////// Order Routes //////////////////
router.post("/placeorder", function (req, res, next) {
    controller.placeorder(req, res, next);
})

module.exports = router;