const Menu = require('../../models/menu')
function recommendController() {
    return {
        async index(req, res) {
            const trendings = await Trending.find()
            return res.render('customers/recommend', { trendings: trendings })
        }
    }
}

module.exports = recommendController