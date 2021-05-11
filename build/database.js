"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect('mongodb://localhost/domicilios', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function (db) {
  return console.log("Database listening");
})["catch"](function (err) {
  return console.log(err);
});