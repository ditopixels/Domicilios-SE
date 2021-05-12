"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAdmin = exports.renderLogin = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _Admin = _interopRequireDefault(require("../models/Admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderLogin = function renderLogin(req, res) {
  res.render('login', {
    title: 'Login'
  });
};

exports.renderLogin = renderLogin;

var validateAdmin = _passport["default"].authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
});

exports.validateAdmin = validateAdmin;