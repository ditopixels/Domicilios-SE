"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loginCtrl = require("./login.ctrl.js");

var _dashboardCtrl = require("./dashboard.ctrl.js");

var _pedidos = require("./pedidos.js");

var _empleo = require("./empleo.js");

var _home = require("./home.js");

var _renderHome$renderLog;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_renderHome$renderLog = {
  renderHome: _home.renderHome,
  renderLogin: _loginCtrl.renderLogin,
  validateAdmin: _loginCtrl.validateAdmin,
  renderDashboard: _dashboardCtrl.renderDashboard
}, _defineProperty(_renderHome$renderLog, "renderHome", _home.renderHome), _defineProperty(_renderHome$renderLog, "createPedido", _pedidos.createPedido), _defineProperty(_renderHome$renderLog, "renderEmpleo", _empleo.renderEmpleo), _defineProperty(_renderHome$renderLog, "renderPedidos", _pedidos.renderPedidos), _defineProperty(_renderHome$renderLog, "renderPedido", _pedidos.renderPedido), _defineProperty(_renderHome$renderLog, "updateStatus", _pedidos.updateStatus), _defineProperty(_renderHome$renderLog, "renderProduct", _pedidos.renderProduct), _defineProperty(_renderHome$renderLog, "createProduct", _pedidos.createProduct), _defineProperty(_renderHome$renderLog, "updateProduct", _pedidos.updateProduct), _defineProperty(_renderHome$renderLog, "deleteProduct", _pedidos.deleteProduct), _defineProperty(_renderHome$renderLog, "renderCategorie", _pedidos.renderCategorie), _defineProperty(_renderHome$renderLog, "createEmpleo", _empleo.createEmpleo), _defineProperty(_renderHome$renderLog, "renderRequest", _empleo.renderRequest), _renderHome$renderLog);

exports["default"] = _default;