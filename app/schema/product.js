const {
    Schema,
    model
} = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    } 
});

module.exports = model("Product", schema);