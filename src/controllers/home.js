import Products from '../models/Products.js'
import Admin from '../models/Admin.js'

export const renderHome = async(req, res) => {
    try {

        const productCategories = []

        const data = {
            categories: [],
        }
        const products = await Products.find().sort({ date: -1 })

        products.forEach(product => {
            const { title, description, image, price, categorie, _id } = product

            if (!productCategories.includes(categorie)) {
                productCategories.push(categorie)
                return data.categories.push({
                    name: categorie,
                    products: [{
                        title,
                        description,
                        image,
                        price,
                        _id
                    }]
                })
            }
            if (data.categories[productCategories.indexOf(categorie)].products.length < 6) {
                data.categories[productCategories.indexOf(categorie)].products.push({ title, description, image, price, _id })
            }
        })
        data.msg = 'Pedido realizado, pronto nos estaremos comunicando contigo'
        res.render('home', data)
    } catch (e) {
        console.log('error: ', e)
    }
}