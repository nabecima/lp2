/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_modernizr_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modernizr-custom */ \"./src/js/modernizr-custom.js\");\n/* harmony import */ var _js_modernizr_custom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_modernizr_custom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://lp2/./src/index.js?");

/***/ }),

/***/ "./src/js/modernizr-custom.js":
/*!************************************!*\
  !*** ./src/js/modernizr-custom.js ***!
  \************************************/
/***/ (function() {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/*! modernizr 3.6.0 (Custom Build) | MIT *\n * https://modernizr.com/download/?-webp-setclasses !*/\n!function (e, n, A) {\n  function o(e, n) {\n    return _typeof(e) === n;\n  }\n\n  function t() {\n    var e, n, A, t, a, i, l;\n\n    for (var f in r) {\n      if (r.hasOwnProperty(f)) {\n        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {\n          e.push(n.options.aliases[A].toLowerCase());\n        }\n\n        for (t = o(n.fn, \"function\") ? n.fn() : n.fn, a = 0; a < e.length; a++) {\n          i = e[a], l = i.split(\".\"), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? \"\" : \"no-\") + l.join(\"-\"));\n        }\n      }\n    }\n  }\n\n  function a(e) {\n    var n = u.className,\n        A = Modernizr._config.classPrefix || \"\";\n\n    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {\n      var o = new RegExp(\"(^|\\\\s)\" + A + \"no-js(\\\\s|$)\");\n      n = n.replace(o, \"$1\" + A + \"js$2\");\n    }\n\n    Modernizr._config.enableClasses && (n += \" \" + A + e.join(\" \" + A), c ? u.className.baseVal = n : u.className = n);\n  }\n\n  function i(e, n) {\n    if (\"object\" == _typeof(e)) for (var A in e) {\n      f(e, A) && i(A, e[A]);\n    } else {\n      e = e.toLowerCase();\n      var o = e.split(\".\"),\n          t = Modernizr[o[0]];\n      if (2 == o.length && (t = t[o[1]]), \"undefined\" != typeof t) return Modernizr;\n      n = \"function\" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? \"\" : \"no-\") + o.join(\"-\")]), Modernizr._trigger(e, n);\n    }\n    return Modernizr;\n  }\n\n  var s = [],\n      r = [],\n      l = {\n    _version: \"3.6.0\",\n    _config: {\n      classPrefix: \"\",\n      enableClasses: !0,\n      enableJSClass: !0,\n      usePrefixes: !0\n    },\n    _q: [],\n    on: function on(e, n) {\n      var A = this;\n      setTimeout(function () {\n        n(A[e]);\n      }, 0);\n    },\n    addTest: function addTest(e, n, A) {\n      r.push({\n        name: e,\n        fn: n,\n        options: A\n      });\n    },\n    addAsyncTest: function addAsyncTest(e) {\n      r.push({\n        name: null,\n        fn: e\n      });\n    }\n  },\n      Modernizr = function Modernizr() {};\n\n  Modernizr.prototype = l, Modernizr = new Modernizr();\n  var f,\n      u = n.documentElement,\n      c = \"svg\" === u.nodeName.toLowerCase();\n  !function () {\n    var e = {}.hasOwnProperty;\n    f = o(e, \"undefined\") || o(e.call, \"undefined\") ? function (e, n) {\n      return n in e && o(e.constructor.prototype[n], \"undefined\");\n    } : function (n, A) {\n      return e.call(n, A);\n    };\n  }(), l._l = {}, l.on = function (e, n) {\n    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {\n      Modernizr._trigger(e, Modernizr[e]);\n    }, 0);\n  }, l._trigger = function (e, n) {\n    if (this._l[e]) {\n      var A = this._l[e];\n      setTimeout(function () {\n        var e, o;\n\n        for (e = 0; e < A.length; e++) {\n          (o = A[e])(n);\n        }\n      }, 0), delete this._l[e];\n    }\n  }, Modernizr._q.push(function () {\n    l.addTest = i;\n  }), Modernizr.addAsyncTest(function () {\n    function e(e, n, A) {\n      function o(n) {\n        var o = n && \"load\" === n.type ? 1 == t.width : !1,\n            a = \"webp\" === e;\n        i(e, a && o ? new Boolean(o) : o), A && A(n);\n      }\n\n      var t = new Image();\n      t.onerror = o, t.onload = o, t.src = n;\n    }\n\n    var n = [{\n      uri: \"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=\",\n      name: \"webp\"\n    }, {\n      uri: \"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\",\n      name: \"webp.alpha\"\n    }, {\n      uri: \"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA\",\n      name: \"webp.animation\"\n    }, {\n      uri: \"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=\",\n      name: \"webp.lossless\"\n    }],\n        A = n.shift();\n    e(A.name, A.uri, function (A) {\n      if (A && \"load\" === A.type) for (var o = 0; o < n.length; o++) {\n        e(n[o].name, n[o].uri);\n      }\n    });\n  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;\n\n  for (var p = 0; p < Modernizr._q.length; p++) {\n    Modernizr._q[p]();\n  }\n\n  e.Modernizr = Modernizr;\n}(window, document);\n\n//# sourceURL=webpack://lp2/./src/js/modernizr-custom.js?");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/***/ (function() {

eval("var burger = document.querySelector(\".l-header__burger\");\nvar nav = document.querySelector(\".l-nav__links\");\nvar body = document.querySelector(\"#body\");\nvar active = \"is-active\";\nburger.addEventListener(\"click\", function () {\n  this.classList.toggle(active);\n  nav.classList.toggle(active);\n  body.classList.toggle(active);\n});\n\n//# sourceURL=webpack://lp2/./src/js/navigation.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lp2/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;