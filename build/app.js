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

var _login = _interopRequireDefault(require("./routes/login.js"));

var _dashboard = _interopRequireDefault(require("./routes/dashboard.js"));

var _config = _interopRequireDefault(require("./config.js"));

require("./helpers/admin.js");

require("./helpers/passport.js");

var _passport2 = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', _config["default"].port);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _expressSession["default"])({
  secret: 'b49e7ede-af71-11eb-8529-0242ac130003',
  resave: false,
  saveUninitialized: true
}));
app.use(_passport2["default"].initialize());
app.use(_passport2["default"].session());
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
    }
  }
}));
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