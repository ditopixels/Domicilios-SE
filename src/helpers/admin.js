import Admin from '../models/Admin.js'
import bcrypt from 'bcryptjs'

const credentials = {
    username: 'Juan Diego',
    password: 'test123'
}


//createAdmin()

async function createAdmin() {
    try {
        const admins = await Admin.find()
        if (!admins.length > 0) {
            const admin = await new Admin(credentials)
            admin.password = await admin.encryptPassword(credentials.password)
            await admin.save()
            console.log("¡Admin created!")
        }
    } catch (e) {
        console.log(e)
    }
}