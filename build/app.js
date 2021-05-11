"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _moment = _interopRequireDefault(require("moment"));

var _passport = _interopRequireDefault(require("passport"));

var _multer = _interopRequireDefault(require("multer"));

var _home = _interopRequireDefault(require("./routes/home.js"));

var _login = _interopRequireDefault(require("./routes/login.js"));

var _dashboard = _interopRequireDefault(require("./routes/dashboard.js"));

var _pedidos = _interopRequireDefault(require("./routes/pedidos.js"));

var _config = _interopRequireDefault(require("./config.js"));

require("./helpers/admin.js");

require("./helpers/passport.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', _config["default"].port);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use((0, _expressSession["default"])({
  secret: 'b49e7ede-af71-11eb-8529-0242ac130003',
  resave: false,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', (0, _expressHandlebars["default"])({
  defaultLayout: 'main',
  layoutsDir: _path["default"].join(app.get('views'), 'layouts'),
  partialsDir: _path["default"].join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: {
    ifEquals: function ifEquals(arg1, arg2, options) {
      return arg1 === arg2 ? options.fn(this) : options.inverse(this);
    },
    timeago: function timeago(timestamp) {
      return (0, _moment["default"])(timestamp).startOf('minute').fromNow();
    }
  }
}));

var storage = _multer["default"].diskStorage({
  destination: _path["default"].join(__dirname, 'public/images/products'),
  filename: function filename(req, file, callback) {
    callback(null, new Date().getTime() + _path["default"].extname(file.originalname));
  }
});

app.use((0, _multer["default"])({
  storage: storage
}).single('image'));
app.use(_home["default"]);
app.use(_pedidos["default"]);
app.use(_login["default"]);
app.use(_dashboard["default"]);
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.get('*', function (req, res) {
  res.render('404', {
    title: 'Juan - Página no encontrada',
    path: req.path
  });
});
var _default = app;
exports["default"] = _default;