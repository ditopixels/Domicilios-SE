"use strict";

var _input = _interopRequireDefault(require("./Components/input.js"));

var _password = _interopRequireDefault(require("./Components/password.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var d = document;
d.addEventListener('DOMContentLoaded', function () {
  (0, _input["default"])();
  (0, _password["default"])();
});