const {
    Schema,
    model
} = require('mongoose');

const schema = new Schema({
    key: {
        type: String,
        default: ""
    } 
});

module.exports = model("API", schema);