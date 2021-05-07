import Admin from "../models/Admin"
import jwt from 'jsonwebtoken'

export const renderLogin = (req, res) => {
    res.render('login', {
        title: 'Login',
    })
}

export const validateAdmin = (req, res) => {
    const { username, password } = req.body
    Admin.findOne({ username }, async(err, admin) => {
        if (err) return res.json({
            ok: false,
            err
        })
        if (!admin) {
            return res.json({
                ok: false,
                err: "No existe el usuario"
            })
        }
        const match = await admin.matchPassword(password)
        console.log(match, password, admin)
        if (!match) {
            return res.json({
                ok: false,
                err: 'Las contraseñas no coinciden'
            })
        }
        const token = jwt.sign({ id: admin._id }, "b49e7ede-af71-11eb-8529-0242ac130003", { expiresIn: 60 * 60 * 24 })
        res.json({
            ok: true,
            token
        })

    })
}