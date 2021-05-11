"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHome = void 0;

var _Products = _interopRequireDefault(require("../models/Products.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderHome = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var productCategories, data, products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            productCategories = [];
            data = {
              categories: []
            };
            _context.next = 5;
            return _Products["default"].find().sort({
              date: -1
            });

          case 5:
            products = _context.sent;
            products.forEach(function (product) {
              var title = product.title,
                  description = product.description,
                  image = product.image,
                  price = product.price,
                  categorie = product.categorie,
                  _id = product._id;

              if (!productCategories.includes(categorie)) {
                productCategories.push(categorie);
                return data.categories.push({
                  name: categorie,
                  products: [{
                    title: title,
                    description: description,
                    image: image,
                    price: price,
                    _id: _id
                  }]
                });
              }

              data.categories[productCategories.indexOf(categorie)].products.push({
                title: title,
                description: description,
                image: image,
                price: price,
                _id: _id
              });
            });
            data.msg = 'Pedido realizado, pronto nos estaremos comunicando contigo';
            console.log(data);
            res.render('home', data);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log('error: ', _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function renderHome(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderHome = renderHome;