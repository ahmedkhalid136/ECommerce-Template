const product = require("../../schema/product");
const order = require("../../schema/order");

exports.addProduct = (req, res, next) => {
    const Product = new product(
        {
            Description: req.body.Description,
            Price: req.body.Price,
            image: req.body.image,
            color: req.body.color,
            Ram: req.body.Ram,
            Rom: req.body.Rom

        }
    )
    Product.save((error) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log("your data has been save")
        }
    })
}

exports.deleteProduct = (req, res, next) => {
    product.findByIdAndDelete(req.body.ID, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
}

exports.searchProduct = (req, res, next) => {
    product.find({ Ram: req.body.Ram }, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
}

exports.updateProduct = (req, res, next) => {
    const changes = req.body;
    product.findByIdAndUpdate(req.body.ID, changes, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Successfully Updated")
        }
    })
}

//////////////////////// Order Placement Controller //////////////////////////

exports.placeorder = (req, res, next) => {
    const Order = new order({
        product_ID: req.body.product_ID,
        Name: req.body.Name,
        address: req.body.address,
        postal_code: req.body.postal_code,
    })
    Order.save((err) => {
        if (err) { console.log(err); }
        else { console.log("Successfully Saved"); }
    });

}