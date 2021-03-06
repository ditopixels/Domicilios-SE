import { Router } from 'express'
import ctrl from '../controllers'

const router = Router()

router.get('/', ctrl.renderHome)
router.get('/empleo', ctrl.renderEmpleo)
router.post('/empleo', ctrl.createEmpleo)
router.get('/empleo/:id', ctrl.renderRequest)

export default router