"use strict";

var _app = _interopRequireDefault(require("./app.js"));

require("./database.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_app["default"].get('port'), function () {
  console.log("Server listen on port ".concat(_app["default"].get('port')));
});