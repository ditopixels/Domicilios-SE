import { Router } from 'express'
import ctrl from '../controllers'

const router = Router()

router.get('/', ctrl.renderHome)
router.get('/empleo', ctrl.renderEmpleo)

export default router