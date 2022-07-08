class AddProduct {

    async addProduct(name, price) {
        const product = require("../schema/product")
        new product({
            name: name,
            price: price
        }).save()
    }

    async getAllProducts() {
        const product = require("../schema/product")
        return await product.find()
    } 
}

module.exports = AddProduct;