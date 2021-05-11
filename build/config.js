"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  port: process.env.PORT || 3000,
  host: process.env.MONGO_HOST || 'localhost',
  db: process.env.MONGO_DB || 'domicilios',
  URI: "".concat(process.env.MONGO_HOST || 'localhost', "/").concat(process.env.MONGO_DB || 'domicilios')
};
exports["default"] = _default;