import passport from "passport"
import Admin from "../models/Admin"

export const renderLogin = (req, res) => {
    res.render('login', {
        title: 'Login',
    })
}

export const validateAdmin = passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
})