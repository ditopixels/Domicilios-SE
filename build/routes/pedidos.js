"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = _interopRequireDefault(require("../controllers"));

var _auth = require("../helpers/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/producto/add', _auth.isAuthenticated, _controllers["default"].renderProduct);
router.post('/producto', _auth.isAuthenticated, _controllers["default"].createProduct);
router.get('/productos/:categorie', _controllers["default"].renderCategorie);
router.post('/pedidos', _controllers["default"].createPedido);
router.get('/pedidos', _auth.isAuthenticated, _controllers["default"].renderPedidos);
router.route('/producto/:product').get(_auth.isAuthenticated, _controllers["default"].renderProduct).post(_auth.isAuthenticated, _controllers["default"].updateProduct)["delete"](_auth.isAuthenticated, _controllers["default"].deleteProduct);
router.route('/pedidos/:pedido').get(_controllers["default"].renderPedido).post(_controllers["default"].createPedido).put(_auth.isAuthenticated, _controllers["default"].updateStatus);
var _default = router;
exports["default"] = _default;