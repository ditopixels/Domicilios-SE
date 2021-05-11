import Products from '../models/Products.js'

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
            data.categories[productCategories.indexOf(categorie)].products.push({ title, description, image, price, _id })


        })
        data.msg = 'Pedido realizado, pronto nos estaremos comunicando contigo'
        console.log(data)
        res.render('home', data)
    } catch (e) {
        console.log('error: ', e)
    }
}