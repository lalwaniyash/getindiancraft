const Jute = require('../../../models/jute')

function juteController() {
    return {
        async policy(req, res) {
            const jutes = await Jute.find()
            return res.render('customers/jute', { jutes: jutes })
        }

    }
}

module.exports = juteController