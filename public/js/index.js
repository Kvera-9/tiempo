"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var key = '19ef9d06b24551412b3f8836f13a814c';
var city = 'Reus';
var url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(key);

var getWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get(url);

          case 2:
            result = _context.sent;
            console.log(result.data.main);
            render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getWeather() {
    return _ref.apply(this, arguments);
  };
}();

getWeather();
var appRoot = document.getElementById('appRoot');

var render = function render(temperatura, humedad, presion) {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " El Tiempo en ", city, " sera de :"), /*#__PURE__*/React.createElement("p", null, "La Temperatura: ", temperatura), /*#__PURE__*/React.createElement("p", null, "La Humedad: ", humedad), /*#__PURE__*/React.createElement("p", null, " La Presi\xF3n: ", presion));
  ReactDOM.render(template, appRoot);
};

render();

//# sourceMappingURL=index.js.map