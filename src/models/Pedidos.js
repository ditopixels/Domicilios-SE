import { Schema, model } from 'mongoose'

const reqSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    entry: { type: String },
    cantidad: { type: Number },
    output: { type: String, required: true },
    status: { type: Boolean, required: true },
    date: { type: Date, default: Date.now },
    type: { type: String, enum: ["pedido", "product"] },
    image: { type: String },
    producto: { type: String }
})

export default model('Pedidos', reqSchema)