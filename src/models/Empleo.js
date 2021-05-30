import { Schema, model } from 'mongoose'

const empleoSchema = new Schema({
    username: { type: String, required: true },
    cedula: { type: String, required: true },
    edad: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    transport: { type: String, required: true },
    image: { type: String, required: true },
    imageId: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

export default model('Empleo', empleoSchema)