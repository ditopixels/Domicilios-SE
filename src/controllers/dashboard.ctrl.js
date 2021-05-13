import Pedidos from '../models/Pedidos.js'
import Products from '../models/Products.js'
import Empleo from '../models/Empleo.js'

export const renderDashboard = async(req, res) => {
    try {
        const data = {}
        const pedidosDB = await Pedidos.find({ status: false }).limit(5).sort({ date: -1 })
        const productsDB = await Products.find().sort({ date: -1 })
        const empleosDB = await Empleo.find().sort({ date: -1 })
        const pedidos = []
        const products = []
        const empleos = []

        data.title = 'Dashboard'
        data.name = req.user.username
        console.log('Productos ', pedidosDB)

        empleosDB.forEach(empleo => empleos.push({
            _id: empleo._id,
            username: empleo.username,
            phone: empleo.phone,
            image: empleo.image,
            date: empleo.date
        }))
        data.empleos = empleos

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