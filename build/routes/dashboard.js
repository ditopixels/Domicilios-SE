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
router.get('/dashboard', _auth.isAuthenticated, _controllers["default"].renderDashboard);
var _default = router;
exports["default"] = _default;