"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var calcRouter = _express["default"].Router();

calcRouter.use(_bodyParser["default"].json());
calcRouter.get('/sum/:num1/:num2', function (req, res, next) {
  var _req$params = req.params,
      num1 = _req$params.num1,
      num2 = _req$params.num2;
  var sum = Number(num1) + Number(num2); // Cheking .

  if (isNaN(sum)) {
    // not supported.
    return res.status(403).send({
      status: 'failed',
      message: 'Operation is not supported params are not numbers'
    });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    sum: sum
  });
  next();
});
calcRouter.get('/sub/:num1/:num2', function (req, res, next) {
  var _req$params2 = req.params,
      num1 = _req$params2.num1,
      num2 = _req$params2.num2;
  var subtraction = Number(num1) - Number(num2); // Cheking .

  if (isNaN(subtraction)) {
    // not supported.
    return res.status(403).send({
      status: 'failed',
      message: 'Operation is not supported params are not numbers'
    });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    subtraction: subtraction
  });
  next();
});
calcRouter.get('/mul/:num1/:num2', function (req, res, next) {
  var _req$params3 = req.params,
      num1 = _req$params3.num1,
      num2 = _req$params3.num2;
  var multiplication = Number(num1) * Number(num2); // Cheking .

  if (isNaN(multiplication)) {
    // not supported.
    return res.status(403).send({
      status: 'failed',
      message: 'Operation is not supported params are not numbers'
    });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    multiplication: multiplication
  });
  next();
});
calcRouter.get('/div/:num1/:num2', function (req, res, next) {
  var _req$params4 = req.params,
      num1 = _req$params4.num1,
      num2 = _req$params4.num2;
  var division = Number(num1) / Number(num2); // Cheking .

  if (isNaN(division)) {
    // not supported.
    return res.status(403).send({
      status: 'failed',
      message: 'Operation is not supported params are not numbers'
    });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    division: division
  });
  next();
});
var _default = calcRouter;
exports["default"] = _default;