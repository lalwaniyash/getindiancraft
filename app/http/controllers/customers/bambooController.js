const Bamboo = require('../../../models/bamboo')

function bambooController() {
    return {
        async policy(req, res) {
            const bamboos = await Bamboo.find()
            return res.render('customers/bamboo', { bamboos: bamboos })
        }

    }
}

module.exports = bambooController