const homeController = require('../app/http/controllers/homeController')
const productController = require('../app/http/controllers/productController')
const clayController = require('../app/http/controllers/customers/clayController')
const juteController = require('../app/http/controllers/customers/juteController')
const bambooController = require('../app/http/controllers/customers/bambooController')

const recommendtController = require('../app/http/controllers/recommendController')

const authController = require('../app/http/controllers/authController')
const schemeController = require('../app/http/controllers/schemeController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')

// Middlewares 
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')

function initRoutes(app) {
    app.get('/', homeController().index)
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    app.post("/remove-cart", cartController().remove);
    // Customer routes
    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    // Admin routes
    app.get('/admin/orders', admin, adminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)

    // app.get('/clay', (req, res) => {
    //     res.render('clay')
    // })
    app.get('/help', schemeController().policy)
    app.get('/products', productController().index)
    app.get('/clay', clayController().policy)
    app.get('/jute', juteController().policy)
    app.get('/bamboo', bambooController().policy)
    app.get('/customer/orders', productController().index)
}

module.exports = initRoutes

