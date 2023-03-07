const Clay = require('../../../models/clay')

function clayController() {
    return {
        async policy(req, res) {
            const clays = await Clay.find()
            return res.render('customers/clay', { clays: clays })
        }

    }
}

module.exports = clayController