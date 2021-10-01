"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _app = _interopRequireDefault(require("../app"));

var _sinon = _interopRequireDefault(require("sinon"));

var _supertest = _interopRequireDefault(require("supertest"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].use(_chaiHttp["default"]);

describe('Calculator operations', function (req, res, next) {
  it('/sum/:num1/:num2 Test the addition of two numbers', function (done) {
    var num1 = 1;
    var num2 = 3;
    var sum = num1 + num2;

    _chai["default"].request(_app["default"]).get('/api/sum/:num1/:num2');

    _chai["default"].expect(200);

    _chai["default"].expect('Content-Type', /json/);

    _chai["default"].expect(sum).to.be.a('number');

    _chai["default"].expect(sum).to.equal(4);

    done();
  });
  it('/sub/:num1/:num2 Test the subtraction of two numbers', function (done) {
    var num1 = 4;
    var num2 = 3;
    var sub = num1 - num2;

    _chai["default"].request(_app["default"]).get('/api/sub/:num1/:num2');

    _chai["default"].expect(200);

    _chai["default"].expect('Content-Type', /json/);

    _chai["default"].expect(sub).to.be.a('number');

    _chai["default"].expect(sub).to.equal(1);

    done();
  });
  it('/mul/:num1/:num2 Test the multiplication of two numbers', function (done) {
    var num1 = 4;
    var num2 = 3;
    var multiplication = num1 * num2;

    _chai["default"].request(_app["default"]).get('/api/sub/:num1/:num2');

    _chai["default"].expect(200);

    _chai["default"].expect('Content-Type', /json/);

    _chai["default"].expect(multiplication).to.be.a('number');

    _chai["default"].expect(multiplication).to.equal(12);

    done();
  });
  it('/div/:num1/:num2 Test the multiplication of two numbers', function (done) {
    var num1 = 12;
    var num2 = 3;
    var division = num1 / num2;

    _chai["default"].request(_app["default"]).get('/api/div/:num1/:num2');

    _chai["default"].expect(200);

    _chai["default"].expect('Content-Type', /json/);

    _chai["default"].expect(division).to.be.a('number');

    _chai["default"].expect(division).to.equal(4);

    done();
  });
});