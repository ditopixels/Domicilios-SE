import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageId: { type: String, required: true },
    price: { type: Number, required: true },
    categorie: { type: String, required: true },
    date: { type: Date, default: Date.now },
})

export default model('Products', productSchema)