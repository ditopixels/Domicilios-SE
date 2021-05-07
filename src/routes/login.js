import { Router } from 'express'
import ctrl from '../controllers'

const router = Router()

router.get('/login', ctrl.renderLogin)
router.post('/login', ctrl.validateAdmin)

export default router