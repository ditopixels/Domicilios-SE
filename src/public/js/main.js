import input from "./Components/input.js"
import password from "./Components/password.js"
import PedidoDone from './Components/acceptPedido.js'
import deleteProduct from './Components/delete.js'
import modal from './Components/modal.js'

const d = document

d.addEventListener('DOMContentLoaded', () => {
    input()
    password()
    PedidoDone()
    modal()
    deleteProduct()
})