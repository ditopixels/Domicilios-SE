import Pedidos from '../models/Pedidos.js'
import Products from '../models/Products.js'
import cloudinary from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: 'domicilios-santa-elena',
    api_key: '394946996974333',
    api_secret: 'IsiSpKih9kakRkm89BSm6nY5Djs'
})

export const createPedido = async(req, res) => {
    try {
        const { name, email, phone, edad, entry, output, cantidad, image, producto } = req.body
        if (req.params.pedido) {
            const newPedido = new Pedidos({
                name,
                email,
                phone,
                edad,
                cantidad,
                output,
                type: 'product',
                status: false,
                image,
                producto
            })
            await newPedido.save()
            return res.redirect('/#modal')
        }
        const newPedido = new Pedidos({ producto, name, email, phone, edad, entry, output, status: false, type: 'pedido' })

        await newPedido.save()

        res.redirect('/#modal')
    } catch (e) {
        console.log(e)
    }
}
export const createProduct = async(req, res) => {

    try {
        const { title, description, price, categorie } = req.body

        const image = await cloudinary.v2.uploader.upload(req.file.path)
        const newProduct = new Products({ title, description, categorie, price, image: image.url, imageId: image.public_id })
        await newProduct.save()
        fs.unlink(req.file.path, () => {
            res.redirect('/producto/add#modal')
        })
    } catch (e) {
        console.log(e)
    }
}

export const renderPedidos = async(req, res) => {
    try {
        const data = {}
        const pedidosDB = await Pedidos.find().sort({ date: -1 })
        const pedidos = []

        data.title = 'Pedidos'
        pedidosDB.forEach(pedido => {
            const { _id, name, date, phone, email, entry, output, status, producto, image } = pedido
            pedidos.push({ _id, name, date, phone, email, entry, output, status, producto, image })
        })
        console.log(pedidosDB)
        data.pedidos = pedidos
        res.render("pedidos", data)
    } catch (e) {
        console.log(e)
    }
}

export const renderPedido = async(req, res) => {
    try {
        const data = {}
        const id = req.params.pedido
        const product = await Products.findById(req.params.pedido)

        data.product = {
            image: product.image,
            title: product.title,
            id
        }

        res.render('buyProduct', data)
    } catch (e) {
        console.log("error")
    }
}

export const updateStatus = (req, res) => {
    Pedidos.findByIdAndUpdate({ _id: req.params.pedido }, { status: true }, (err, pedido) => {
        if (err) {
            return res.json({
                ok: false,
                err
            })
        }
        if (!pedido) {
            return res.json({
                ok: false,
                err: {
                    message: "El pedido no existe"
                }
            })
        }
        return res.json({
            ok: true,
            message: `El pedido de ${pedido.name} ha sido eliminado`
        })
    })
}

export const updateProduct = async(req, res) => {
    try {
        const { title, description, price, categorie } = req.body

        const imageUp = await Products.findById(req.params.product)

        const image = await cloudinary.v2.uploader.upload(req.file.path)
        await cloudinary.v2.uploader.destroy(imageUp.imageId)

        await Products.findByIdAndUpdate({
            _id: req.params.product
        }, {
            title,
            description,
            price,
            categorie,
            image: image.url,
            imageId: image.public_id
        }, async(err, product) => {
            if (err) {

                res.json({
                    ok: false,
                    err
                })
            }
            if (!product) {
                res.json({
                    ok: false,
                    err: {
                        message: "El pedido no existe"
                    }
                })
            }
        })
        fs.unlink(req.file.path, () => {
            res.redirect('/producto/add')
        })
    } catch (e) {
        console.log(e)
    }

}

export const renderProduct = async(req, res) => {
    try {
        if (req.params.product) {
            const data = {}
            const producto = await Products.findById(req.params.product)

            data.product = {
                title: producto.title,
                description: producto.description,
                categorie: producto.categorie,
                price: producto.price,
                image: producto.image,
                id: producto._id
            }
            return res.render('addProduct', data)
        }
        res.render('addProduct')
    } catch (e) {
        console.log(e)
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.product)
        res.json({ ok: true })
    } catch (e) {
        console.log(e)
    }
}

export const renderCategorie = async(req, res) => {
    try {
        const data = { products: [] }
        data.categorie = req.params.categorie

        const productsDB = await Products.find({ categorie: data.categorie })
        console.log(productsDB)
        if (!productsDB > 0) {
            return res.render('404')
        }
        productsDB.forEach(product => data.products.push({
            _id: product._id,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image
        }))
        res.render('categorie', data)
    } catch (e) {
        console.log(e)
    }

}