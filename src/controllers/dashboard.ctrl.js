import Pedidos from '../models/Pedidos.js'
import Products from '../models/Products.js'

export const renderDashboard = async(req, res) => {
    try {
        const data = {}
        const pedidosDB = await Pedidos.find({ status: false }).limit(5).sort({ date: -1 })
        const productsDB = await Products.find().sort({ date: -1 })
        const pedidos = []
        const products = []

        data.title = 'Dashboard'
        data.name = req.user.username
        console.log('Productos ', pedidosDB)

        pedidosDB.forEach(pedido => pedidos.push({
            _id: pedido._id,
            name: pedido.name,
            date: pedido.date,
            phone: pedido.phone,
            image: pedido.image
        }))

        data.pedidos = pedidos
        productsDB.forEach(product => products.push({
            _id: product._id,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image
        }))
        data.products = products

        res.render('dashboard', data)
    } catch (e) {
        console.log(e)
    }
}