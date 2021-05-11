import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import 'babel-polyfill'

const adminSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

adminSchema.methods.encryptPassword = async(pass) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pass, salt)
    return hash
}
adminSchema.methods.matchPassword = async function(pass) {
    return await bcrypt.compare(pass, this.password)
}

export default model('Admin', adminSchema)