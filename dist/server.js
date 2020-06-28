/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppComp = function (_Component) {
    _inherits(AppComp, _Component);

    function AppComp() {
        _classCallCheck(this, AppComp);

        return _possibleConstructorReturn(this, (AppComp.__proto__ || Object.getPrototypeOf(AppComp)).apply(this, arguments));
    }

    _createClass(AppComp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 homepage" },
                _react2.default.createElement(
                    "h2",
                    null,
                    _react2.default.createElement(
                        "span",
                        { className: "blackColor" },
                        "Welcome to"
                    ),
                    " Shri Balaji Electricals"
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                    "p",
                    null,
                    "Shri Balaji Electricals was established in the year ",
                    _react2.default.createElement(
                        "b",
                        null,
                        "1980 at Mumbai, Maharashtra"
                    ),
                    ". We \u201C",
                    _react2.default.createElement(
                        "b",
                        null,
                        "Shri Balaji Electricals"
                    ),
                    "\u201D are a ",
                    _react2.default.createElement(
                        "b",
                        null,
                        "Sole Proprietorship"
                    ),
                    " firm, engaged as the foremost ",
                    _react2.default.createElement(
                        "b",
                        null,
                        "Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material"
                    ),
                    ". Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "b",
                        null,
                        "Our range of insulation material includes:"
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "/appcomps" },
                        _react2.default.createElement(
                            "li",
                            null,
                            "Electric PVC Tapes in all sizes"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Garware Polyester Film including slitted paper"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "B/C/F/H class insulation papers"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Kraft and Crepe papers"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Rubber Compound for Submersible"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Submersible/Copper/Aluminium/DPC winding wires"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Aluminuim and Copper Lugs"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Cotton Tapes/Webbing Tapes for motor winding"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "B/F/H class Fiber Glass Sleevings"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Pre-Compressed board - Imported and Handmade"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Insulating Varnish"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Fiber Glass Wires and Cables"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Soldering Wire, Stick and Flux"
                    )
                )
            );
        }
    }]);

    return AppComp;
}(_react.Component);

exports.default = AppComp;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, " \n.homepage h2{\n    color: var(--orange-color);\n    font-weight: bold;\n}\n.homepage p{\n    text-align: justify;\n    color: var(--black-color);\n    font-size: 14px;\n    line-height: 22px;\n    /* padding: 10px; */\n    text-align: justify;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(8);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _fs = __webpack_require__(14);

var _fs2 = _interopRequireDefault(_fs);

var _reactRouterDom = __webpack_require__(1);

var _styledComponents = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <-- importing ServerStyleSheet
var index = _fs2.default.readFileSync('/home/mani/Documents/ReactApp/ssr/public/index.html', 'utf8');
// import Html from './client/Html';

var port = 3000;
var server = (0, _express2.default)();

// Creating a single index route to server our React application from.
server.get('*', function (req, res) {
  /**
   * This is where all the magic happens with Styled Components and
   * rendering our React application to string so we can insert it
   * into our HTML template to send to the client.
   */

  console.log('req======', req.url);
  var context = {};
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_App2.default, null)
  )));
  var html = index.replace('<!------ APP ------->', body);
  res.send(html);
});

server.listen(port);
console.log('Serving at http://localhost:' + port);

// import http from "http";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";

// import App from "./App.js";

// http
//   .createServer((req, res) => {
//     const context = {};

//     const html = ReactDOMServer.renderToString(
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     );

//     if (context.url) {
//       res.writeHead(301, {
//         Location: context.url
//       });
//       res.end();
//     } else {
//       res.write(`
//       <!doctype html>
//       <div id="app">${html}</div>
//     `);
//       res.end();
//     }
//   })
//   .listen(3000);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(2);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterDom = __webpack_require__(1);

var _AppComp = __webpack_require__(4);

var _AppComp2 = _interopRequireDefault(_AppComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import logo from './logo.svg';
var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_Routes2.default, null)
  );
};

exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _serverRouter = __webpack_require__(11);

var _serverRouter2 = _interopRequireDefault(_serverRouter);

var _reactRouter = __webpack_require__(12);

__webpack_require__(2);

var _AppComp = __webpack_require__(4);

var _AppComp2 = _interopRequireDefault(_AppComp);

var _AppComps = __webpack_require__(13);

var _AppComps2 = _interopRequireDefault(_AppComps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WebLayout = function WebLayout() {
  return _react2.default.createElement(
    'div',
    { className: 'skin-blue fixed sidebar-mini' },
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, strict: true, component: _AppComp2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/appcomps', exact: true, strict: true, component: _AppComps2.default })
  );
};

function Routes() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: WebLayout })
    )
  );
}

exports.default = Routes;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("server-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppComps = function (_Component) {
    _inherits(AppComps, _Component);

    function AppComps() {
        _classCallCheck(this, AppComps);

        return _possibleConstructorReturn(this, (AppComps.__proto__ || Object.getPrototypeOf(AppComps)).apply(this, arguments));
    }

    _createClass(AppComps, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 homepage" },
                _react2.default.createElement(
                    "h2",
                    null,
                    _react2.default.createElement(
                        "span",
                        { className: "blackColor" },
                        "Welcome to"
                    ),
                    " Shri Balaji Electricals"
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                    "p",
                    null,
                    "Shri Balaji Electricals was established in the year ",
                    _react2.default.createElement(
                        "b",
                        null,
                        "1980 at Mumbai, Maharashtra"
                    ),
                    ". We \u201C",
                    _react2.default.createElement(
                        "b",
                        null,
                        "Shri Balaji Electricals"
                    ),
                    "\u201D are a ",
                    _react2.default.createElement(
                        "b",
                        null,
                        "Sole Proprietorship"
                    ),
                    " firm, engaged as the foremost ",
                    _react2.default.createElement(
                        "b",
                        null,
                        "Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material"
                    ),
                    ". Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market."
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(
                        "b",
                        null,
                        "Our range of insulation material includes:"
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        "Electric PVC Tapes in all sizes"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Garware Polyester Film including slitted paper"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "B/C/F/H class insulation papers"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Kraft and Crepe papers"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Rubber Compound for Submersible"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Submersible/Copper/Aluminium/DPC winding wires"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Aluminuim and Copper Lugs"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Cotton Tapes/Webbing Tapes for motor winding"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "B/F/H class Fiber Glass Sleevings"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Pre-Compressed board - Imported and Handmade"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Insulating Varnish"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Fiber Glass Wires and Cables"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Soldering Wire, Stick and Flux"
                    )
                )
            );
        }
    }]);

    return AppComps;
}(_react.Component);

exports.default = AppComps;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })
/******/ ]);