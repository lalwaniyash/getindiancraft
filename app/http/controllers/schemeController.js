const Scheme = require('../../models/scheme')

function schemeController() {
    return {
        async policy(req, res) {
            const schemes = await Scheme.find()
            return res.render('customers/help', { schemes: schemes })
        }
        // policy(req, res) {
        //     res.render('customers/help')
        // }
    }
}

module.exports = schemeController