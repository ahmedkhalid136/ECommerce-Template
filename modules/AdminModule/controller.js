const product = require("../../schema/product");

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