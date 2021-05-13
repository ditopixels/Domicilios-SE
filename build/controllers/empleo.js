"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRequest = exports.createEmpleo = exports.renderEmpleo = void 0;

var _Empleo = _interopRequireDefault(require("../models/Empleo.js"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_cloudinary["default"].config({
  cloud_name: 'domicilios-santa-elena',
  api_key: '394946996974333',
  api_secret: 'IsiSpKih9kakRkm89BSm6nY5Djs'
});

var renderEmpleo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = console;
            _context.next = 3;
            return _Empleo["default"].find();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            res.render('empleo', {
              msg: 'Solicitud de empleo completada, pronto nos comunicaremos contigo'
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderEmpleo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderEmpleo = renderEmpleo;

var createEmpleo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, username, cedula, edad, phone, email, transport, image, newEmpleo;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, username = _req$body.username, cedula = _req$body.cedula, edad = _req$body.edad, phone = _req$body.phone, email = _req$body.email, transport = _req$body.transport;
            _context2.next = 4;
            return _cloudinary["default"].v2.uploader.upload(req.file.path);

          case 4:
            image = _context2.sent;
            newEmpleo = new _Empleo["default"]({
              username: username,
              cedula: cedula,
              edad: edad,
              phone: phone,
              email: email,
              transport: transport,
              image: image.url,
              imageId: image.public_id
            });
            _context2.next = 8;
            return newEmpleo.save();

          case 8:
            _fs["default"].unlink(req.file.path, function () {
              res.redirect('/empleo#modal');
            });

            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function createEmpleo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createEmpleo = createEmpleo;

var renderRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var data, empleo;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = {};
            _context3.next = 3;
            return _Empleo["default"].findById(req.params.id);

          case 3:
            empleo = _context3.sent;

            if (empleo._id) {
              data.empleo = {
                _id: empleo._id,
                username: empleo.username,
                cedula: empleo.cedula,
                edad: empleo.edad,
                email: empleo.email,
                phone: empleo.phone,
                transport: empleo.transport,
                image: empleo.image,
                date: empleo.date
              };
              res.render('empleoreq', data);
            } else {
              res.render('404');
            }

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function renderRequest(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.renderRequest = renderRequest;