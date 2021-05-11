"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _Admin = _interopRequireDefault(require("../models/Admin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_passport["default"].use(new _passportLocal.Strategy( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, password, done) {
    var user, match;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Admin["default"].findOne({
              username: username
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", done(null, false, {
              message: "Not User found."
            }));

          case 7:
            _context.next = 9;
            return user.matchPassword(password);

          case 9:
            match = _context.sent;

            if (!match) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", done(null, user));

          case 14:
            return _context.abrupt("return", done(null, false, {
              message: "Incorrect Password."
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()));

_passport["default"].serializeUser(function (user, done) {
  done(null, user._id);
});

_passport["default"].deserializeUser(function (id, done) {
  _Admin["default"].findById(id, function (err, admin) {
    return done(err, admin);
  });
});