"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var empleoSchema = new _mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  cedula: {
    type: String,
    required: true
  },
  edad: {
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
  transport: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now
  }
});

var _default = (0, _mongoose.model)('Empleo', empleoSchema);

exports["default"] = _default;