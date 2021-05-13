import Empleo from '../models/Empleo.js'
import cloudinary from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: 'domicilios-santa-elena',
    api_key: '394946996974333',
    api_secret: 'IsiSpKih9kakRkm89BSm6nY5Djs'
})

export const renderEmpleo = async(req, res) => {
    console.log(await Empleo.find())
    res.render('empleo', { msg: 'Solicitud de empleo completada, pronto nos comunicaremos contigo' })
}

export const createEmpleo = async(req, res) => {

        try {
            const { username, cedula, edad, phone, email, transport } = req.body

            const image = await cloudinary.v2.uploader.upload(req.file.path)
            const newEmpleo = new Empleo({ username, cedula, edad, phone, email, transport, image: image.url, imageId: image.public_id })
            await newEmpleo.save()
            fs.unlink(req.file.path, () => {
                res.redirect('/empleo#modal')
            })
        } catch (e) {
            console.log(e)
        }
    }
    /*
    empleosDB.forEach(empleo => empleos.push({
                _id: empleo._id,
                username: empleo.username,
                cedula: empleo.cedula,
                edad: empleo.edad,
                email: empleo.email,
                phone: empleo.phone,
                transport: empleo.transport,
                image: empleo.image,
                date: empleo.date
            }))
            data.empleos = empleos
    */