import { Router } from 'express'
import ctrl from '../controllers'
import { isAuthenticated } from '../helpers/auth.js'

const router = Router()

router.get('/dashboard', isAuthenticated, ctrl.renderDashboard)
router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

export default router