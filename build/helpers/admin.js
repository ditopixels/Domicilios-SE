"use strict";

var _Admin = _interopRequireDefault(require("../models/Admin.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var credentials = {
  username: 'Juan Diego',
  password: 'test123'
};
createAdmin();

function createAdmin() {
  return _createAdmin.apply(this, arguments);
}

function _createAdmin() {
  _createAdmin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var admins, admin;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Admin["default"].find();

          case 3:
            admins = _context.sent;

            if (!(!admins.length > 0)) {
              _context.next = 14;
              break;
            }

            _context.next = 7;
            return new _Admin["default"](credentials);

          case 7:
            admin = _context.sent;
            _context.next = 10;
            return admin.encryptPassword(credentials.password);

          case 10:
            admin.password = _context.sent;
            _context.next = 13;
            return admin.save();

          case 13:
            console.log("¡Admin created!");

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));
  return _createAdmin.apply(this, arguments);
}