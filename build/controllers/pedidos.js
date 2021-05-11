"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCategorie = exports.deleteProduct = exports.renderProduct = exports.updateProduct = exports.updateStatus = exports.renderPedido = exports.renderPedidos = exports.createProduct = exports.createPedido = void 0;

var _Pedidos = _interopRequireDefault(require("../models/Pedidos.js"));

var _Products = _interopRequireDefault(require("../models/Products.js"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_cloudinary["default"].config({
  cloud_name: 'dzycauqfy',
  api_key: '155476782716687',
  api_secret: 'pCdHlKC4osyCoWdUQcdMAl2QRx0'
});

var createPedido = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, phone, edad, entry, output, cantidad, image, producto, _newPedido, newPedido;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, phone = _req$body.phone, edad = _req$body.edad, entry = _req$body.entry, output = _req$body.output, cantidad = _req$body.cantidad, image = _req$body.image, producto = _req$body.producto;

            if (!req.params.pedido) {
              _context.next = 7;
              break;
            }

            _newPedido = new _Pedidos["default"]({
              name: name,
              email: email,
              phone: phone,
              edad: edad,
              cantidad: cantidad,
              output: output,
              type: 'product',
              status: false,
              image: image,
              producto: producto
            });
            _context.next = 6;
            return _newPedido.save();

          case 6:
            return _context.abrupt("return", res.redirect('/#modal'));

          case 7:
            newPedido = new _Pedidos["default"]({
              producto: producto,
              name: name,
              email: email,
              phone: phone,
              edad: edad,
              entry: entry,
              output: output,
              status: false,
              type: 'pedido'
            });
            _context.next = 10;
            return newPedido.save();

          case 10:
            res.redirect('/#modal');
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function createPedido(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPedido = createPedido;

var createProduct = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, title, description, price, categorie, image, newProduct;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, price = _req$body2.price, categorie = _req$body2.categorie;
            _context2.next = 4;
            return _cloudinary["default"].v2.uploader.upload(req.file.path);

          case 4:
            image = _context2.sent;
            newProduct = new _Products["default"]({
              title: title,
              description: description,
              categorie: categorie,
              price: price,
              image: image.url,
              imageId: image.public_id
            });
            _context2.next = 8;
            return newProduct.save();

          case 8:
            _fs["default"].unlink(req.file.path, function () {
              res.redirect('/producto/add', {
                msg: 'Producto creado exitosamente'
              });
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

  return function createProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var renderPedidos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var data, pedidosDB, pedidos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            data = {};
            _context3.next = 4;
            return _Pedidos["default"].find().sort({
              date: -1
            });

          case 4:
            pedidosDB = _context3.sent;
            pedidos = [];
            data.title = 'Pedidos';
            pedidosDB.forEach(function (pedido) {
              var _id = pedido._id,
                  name = pedido.name,
                  date = pedido.date,
                  phone = pedido.phone,
                  email = pedido.email,
                  entry = pedido.entry,
                  output = pedido.output,
                  status = pedido.status,
                  producto = pedido.producto,
                  image = pedido.image;
              pedidos.push({
                _id: _id,
                name: name,
                date: date,
                phone: phone,
                email: email,
                entry: entry,
                output: output,
                status: status,
                producto: producto,
                image: image
              });
            });
            console.log(pedidosDB);
            data.pedidos = pedidos;
            res.render("pedidos", data);
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function renderPedidos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.renderPedidos = renderPedidos;

var renderPedido = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var data, id, product;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            data = {};
            id = req.params.pedido;
            _context4.next = 5;
            return _Products["default"].findById(req.params.pedido);

          case 5:
            product = _context4.sent;
            data.product = {
              image: product.image,
              title: product.title,
              id: id
            };
            res.render('buyProduct', data);
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.log("error");

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function renderPedido(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.renderPedido = renderPedido;

var updateStatus = function updateStatus(req, res) {
  _Pedidos["default"].findByIdAndUpdate({
    _id: req.params.pedido
  }, {
    status: true
  }, function (err, pedido) {
    if (err) {
      return res.json({
        ok: false,
        err: err
      });
    }

    if (!pedido) {
      return res.json({
        ok: false,
        err: {
          message: "El pedido no existe"
        }
      });
    }

    return res.json({
      ok: true,
      message: "El pedido de ".concat(pedido.name, " ha sido eliminado")
    });
  });
};

exports.updateStatus = updateStatus;

var updateProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body3, title, description, price, categorie, imageUp, image;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _req$body3 = req.body, title = _req$body3.title, description = _req$body3.description, price = _req$body3.price, categorie = _req$body3.categorie;
            _context6.next = 4;
            return _Products["default"].findById(req.params.product);

          case 4:
            imageUp = _context6.sent;
            _context6.next = 7;
            return _cloudinary["default"].v2.uploader.upload(req.file.path);

          case 7:
            image = _context6.sent;
            _context6.next = 10;
            return _cloudinary["default"].v2.uploader.destroy(imageUp.imageId);

          case 10:
            _context6.next = 12;
            return _Products["default"].findByIdAndUpdate({
              _id: req.params.product
            }, {
              title: title,
              description: description,
              price: price,
              categorie: categorie,
              image: image.url,
              imageId: image.public_id
            }, /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(err, product) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (err) {
                          res.json({
                            ok: false,
                            err: err
                          });
                        }

                        if (!product) {
                          res.json({
                            ok: false,
                            err: {
                              message: "El pedido no existe"
                            }
                          });
                        }

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x11, _x12) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 12:
            _fs["default"].unlink(req.file.path, function () {
              res.redirect('/producto/add');
            });

            _context6.next = 18;
            break;

          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 15]]);
  }));

  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var renderProduct = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var data, producto;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;

            if (!req.params.product) {
              _context7.next = 8;
              break;
            }

            data = {};
            _context7.next = 5;
            return _Products["default"].findById(req.params.product);

          case 5:
            producto = _context7.sent;
            data.product = {
              title: producto.title,
              description: producto.description,
              categorie: producto.categorie,
              price: producto.price,
              image: producto.image,
              id: producto._id
            };
            return _context7.abrupt("return", res.render('addProduct', data));

          case 8:
            res.render('addProduct');
            _context7.next = 14;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 11]]);
  }));

  return function renderProduct(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.renderProduct = renderProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _Products["default"].findByIdAndDelete(req.params.product);

          case 3:
            product = _context8.sent;
            res.json({
              ok: true
            });
            _context8.next = 10;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function deleteProduct(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;

var renderCategorie = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var data, productsDB;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            data = {
              products: []
            };
            data.categorie = req.params.categorie;
            _context9.next = 5;
            return _Products["default"].find({
              categorie: data.categorie
            });

          case 5:
            productsDB = _context9.sent;
            console.log(productsDB);

            if (!(!productsDB > 0)) {
              _context9.next = 9;
              break;
            }

            return _context9.abrupt("return", res.render('404'));

          case 9:
            productsDB.forEach(function (product) {
              return data.products.push({
                _id: product._id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image
              });
            });
            res.render('categorie', data);
            _context9.next = 16;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 13]]);
  }));

  return function renderCategorie(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.renderCategorie = renderCategorie;