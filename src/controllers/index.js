import { renderLogin, validateAdmin } from './login.ctrl.js'
import { renderDashboard } from './dashboard.ctrl.js'
import { renderCategorie, deleteProduct, updateProduct, createProduct, renderProduct, createPedido, renderPedido, renderPedidos, updateStatus } from './pedidos.js'
import { createEmpleo, renderEmpleo } from './empleo.js'
import { renderHome } from './home.js'

export default {
    renderHome,
    renderLogin,
    validateAdmin,
    renderDashboard,
    renderHome,
    createPedido,
    renderEmpleo,
    renderPedidos,
    renderPedido,
    updateStatus,
    renderProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    renderCategorie,
    createEmpleo
}