"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

var _calcRouter = _interopRequireDefault(require("./routes/calcRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use('/api', _calcRouter["default"]);
app.use('/', _index["default"]);
app.use('/users', _users["default"]);
var _default = app; //module.exports = app;

exports["default"] = _default;