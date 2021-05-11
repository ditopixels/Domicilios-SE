"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var reqSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  entry: {
    type: String
  },
  cantidad: {
    type: Number
  },
  output: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now
  },
  type: {
    type: String,
    "enum": ["pedido", "product"]
  },
  image: {
    type: String
  },
  producto: {
    type: String
  }
});

var _default = (0, _mongoose.model)('Pedidos', reqSchema);

exports["default"] = _default;