const mongoose = require('mongoose')

class Database {
    constructor(url) {
        this.url = url
    }

    async connect() {
        await mongoose.connect(this.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }) 
    }
} 

module.exports = Database;