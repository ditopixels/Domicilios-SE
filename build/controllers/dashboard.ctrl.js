"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDashboard = void 0;

var _Pedidos = _interopRequireDefault(require("../models/Pedidos.js"));

var _Products = _interopRequireDefault(require("../models/Products.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderDashboard = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var data, pedidosDB, productsDB, pedidos, products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {};
            _context.next = 3;
            return _Pedidos["default"].find({
              status: false
            }).limit(5).sort({
              date: -1
            });

          case 3:
            pedidosDB = _context.sent;
            _context.next = 6;
            return _Products["default"].find().sort({
              date: -1
            });

          case 6:
            productsDB = _context.sent;
            pedidos = [];
            products = [];
            data.title = 'Dashboard';
            data.name = req.user.username;
            console.log('Productos ', pedidosDB);
            pedidosDB.forEach(function (pedido) {
              return pedidos.push({
                _id: pedido._id,
                name: pedido.name,
                date: pedido.date,
                phone: pedido.phone,
                image: pedido.image
              });
            });
            data.pedidos = pedidos;
            productsDB.forEach(function (product) {
              return products.push({
                _id: product._id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image
              });
            });
            data.products = products;
            res.render('dashboard', data);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderDashboard(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderDashboard = renderDashboard;