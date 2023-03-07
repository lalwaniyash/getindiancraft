const Menu = require('../../models/menu')
function productController() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            return res.render('products', { pizzas: pizzas })
        }
    }
}

module.exports = productController