import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import 'babel-polyfill'

const adminSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

adminSchema.methods.encryptPassword = async(pass) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(pass, salt)
        return hash
    } catch (e) {
        console.log(e)
    }
}
adminSchema.methods.matchPassword = async function(pass) {
    try {
        return await bcrypt.compare(pass, this.password)
    } catch (e) {
        console.log(e)
    }
}

export default model('Admin', adminSchema)