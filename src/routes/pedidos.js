import { Router } from 'express'
import ctrl from '../controllers'
import { isAuthenticated } from '../helpers/auth.js'

const router = Router()

router.get('/producto/add', isAuthenticated, ctrl.renderProduct)
router.post('/producto', isAuthenticated, ctrl.createProduct)
router.get('/productos/:categorie', ctrl.renderCategorie)

router.post('/pedidos', ctrl.createPedido)
router.get('/pedidos', isAuthenticated, ctrl.renderPedidos)

router.route('/producto/:product')
    .get(isAuthenticated, ctrl.renderProduct)
    .post(isAuthenticated, ctrl.updateProduct)
    .delete(isAuthenticated, ctrl.deleteProduct)

router.route('/pedidos/:pedido')
    .get(ctrl.renderPedido)
    .post(ctrl.createPedido)
    .put(isAuthenticated, ctrl.updateStatus)

export default router