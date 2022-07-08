class AddApiKey {

    async generateApiKey() {
        const key = require("../schema/api")
        new key({
            key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }).save()
    }

    async getApiKey(key) {
        const api = require("../schema/api")
        return await api.findOne({
            key: key
        }) 
    }
}

module.exports = AddApiKey;