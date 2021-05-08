import { Router } from 'express'
import ctrl from '../controllers'
import { isAuthenticated } from '../helpers/auth.js'

const router = Router()

router.get('/dashboard', ctrl.renderDashboard)

export default router