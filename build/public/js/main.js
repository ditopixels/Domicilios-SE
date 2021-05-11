"use strict";

var _input = _interopRequireDefault(require("./Components/input.js"));

var _password = _interopRequireDefault(require("./Components/password.js"));

var _acceptPedido = _interopRequireDefault(require("./Components/acceptPedido.js"));

var _delete = _interopRequireDefault(require("./Components/delete.js"));

var _modal = _interopRequireDefault(require("./Components/modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
d.addEventListener('DOMContentLoaded', function () {
  (0, _input["default"])();
  (0, _password["default"])();
  (0, _acceptPedido["default"])();
  (0, _modal["default"])();
  (0, _delete["default"])();
});