"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loginCtrl = require("./login.ctrl.js");

var _dashboardCtrl = require("./dashboard.ctrl.js");

var _default = {
  renderLogin: _loginCtrl.renderLogin,
  validateAdmin: _loginCtrl.validateAdmin,
  renderDashboard: _dashboardCtrl.renderDashboard
};
exports["default"] = _default;