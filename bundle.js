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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/DropDownMenu.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/DropDownMenu.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* The container <div> - needed to position the dropdown content */\r\n.DropDown {\r\n  position: absolute;\r\n  left: 0px;\r\n  bottom: 0px;\r\n  display: inline-block;\r\n}\r\n\r\n/* Dropdown Button */\r\n.DropDownButton {\r\n  background-color: #3498db;\r\n  color: white;\r\n  padding: 8px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Dropdown button on hover & focus */\r\n.DropDownButton:hover,\r\n.DropDownButton:focus {\r\n  background-color: #2980b9;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n.DropDownMenu {\r\n  display: none;\r\n  position: absolute;\r\n  left: 0px;\r\n  bottom: 0px;\r\n  background-color: #f1f1f1;\r\n  min-width: 150px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.DropDownMenuItem {\r\n  color: black;\r\n  padding: 8px;\r\n  text-decoration: none;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n.DropDownMenuItem:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\r\n.DropDownShow {\r\n  display: block;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .DropDownMenu {\r\n    min-width: 300px;\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/PlanesApp.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/PlanesApp.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".PlanesApp #MainCanvas {\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n.PlanesApp #Overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: transparent;\r\n  user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n.PlanesApp #CtrlsContainer {\r\n  margin-top: 5px;\r\n}\r\n\r\n.PlanesApp #LightLightRange::-webkit-slider-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n.PlanesApp #LightLightSliderRange::-moz-range-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n\r\n.PlanesApp #MidLightRange::-webkit-slider-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n.PlanesApp #MidLightSliderRange::-moz-range-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n\r\n.PlanesApp #DarkLightRange::-webkit-slider-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n.PlanesApp #DarkLightSliderRange::-moz-range-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n\r\n.PlanesApp .SliderRange {\r\n  width: 35%;\r\n}\r\n\r\n.PlanesApp .SliderLabel {\r\n  width: 18%;\r\n}\r\n\r\n.PlanesApp #ThresholdCanvas {\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 150px;\r\n  height: 150px;\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .PlanesApp .SliderRange {\r\n    width: 28%;\r\n  }\r\n\r\n  .PlanesApp .SliderLabel {\r\n    width: 22%;\r\n  }\r\n\r\n  .PlanesApp #ThresholdCanvas {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: rgb(128, 128, 150);\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/Slider.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/Slider.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".SliderLabel {\r\n  display: inline-block;\r\n  width: 25%;\r\n  text-align: right;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.SliderHeader {\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  color: gray;\r\n}\r\n\r\n.SliderRange {\r\n  width: 50%;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  border-radius: 15px;\r\n  height: 15px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.SliderRange::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n}\r\n\r\n.SliderRange::-moz-range-thumb {\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n  cursor: pointer;\r\n}\r\n\r\n.SliderColorSpan {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 5px;\r\n  margin-bottom: 1px;\r\n  border-radius: 50%;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .SliderLabel {\r\n    width: 30%;\r\n    padding-bottom: 18px;\r\n  }\r\n\r\n  .SliderRange {\r\n    width: 45%;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .SliderRange::-webkit-slider-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderRange::-moz-range-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderColorSpan {\r\n    width: 34px;\r\n    height: 34px;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  .SliderValueSpan {\r\n    margin-left: 10px;\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/Tabs.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/Tabs.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Style the tab */\r\n.Tabs {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Style the buttons that are used to open the tab content */\r\n.Tabs button {\r\n  background-color: #fff;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  color: #333;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n.Tabs button:hover {\r\n  background-color: #ddd;\r\n  color: #000;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n.Tabs button.active {\r\n  background-color: #eee;\r\n  color: #000;\r\n}\r\n\r\n/* Style the tab content */\r\n.TabContent {\r\n  display: none;\r\n  padding: 20px 12px;\r\n  background-color: #eee;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .Tabs button {\r\n    padding: 20px 40px;\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/ViewerApp.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/ViewerApp.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ViewerApp #MainCanvas {\r\n  background-color: rgb(114, 117, 134);\r\n}\r\n\r\n.ViewerApp #Overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: transparent;\r\n  user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./DropDownMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/DropDownMenu.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./Slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/Slider.css");
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./Tabs.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/Tabs.css");
var ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./PlanesApp.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/PlanesApp.css");
var ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./ViewerApp.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/ViewerApp.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);
// Module
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#drawTime {\r\n  position: absolute;\r\n  top: -495px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  font-size: 8pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#progressSpan {\r\n  position: absolute;\r\n  bottom: 3px;\r\n  left: 0px;\r\n  right: 0px;\r\n  height: 5px;\r\n  background-color: rgba(50, 205, 50, 0.75);\r\n}\r\n\r\n#modeButton {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: yellow;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  * {\r\n    font-size: 40px;\r\n  }\r\n\r\n  #drawTime {\r\n    top: -960px;\r\n    left: 4px;\r\n    font-size: 16pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #modeButton {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js?name=LoaderWorker.worker.js!./src/LoaderWorker.ts":
/*!**************************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js?name=LoaderWorker.worker.js!./src/LoaderWorker.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "LoaderWorker.worker.js");
};

/***/ }),

/***/ "./src/BlobFile.ts":
/*!*************************!*\
  !*** ./src/BlobFile.ts ***!
  \*************************/
/*! exports provided: BlobFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobFile", function() { return BlobFile; });
/* harmony import */ var _BlobShim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlobShim */ "./src/BlobShim.ts");
/* harmony import */ var _BlobShim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_BlobShim__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * Internal class for slicing up Blobs
 */
var BlobSlicer = /** @class */ (function () {
    /**
     * @param blob The Blob to be sliced
     */
    function BlobSlicer(blob) {
        // The start byte value for the next slice
        this.start = 0;
        this.blob = blob;
    }
    /**
     * Gets the next slice.
     *
     * @param len The length of the slice.
     * @returns The sliced Blob.
     */
    BlobSlicer.prototype.next = function (len) {
        var b = this.blob.slice(this.start, this.start + len);
        this.start += len;
        return b;
    };
    /**
     * Slices the Blob and returns it as an ArrayBuffer.
     *
     * @param len The length of the slice.
     * @returns An ArrayBuffer promise.
     */
    BlobSlicer.prototype.nextArrayBuffer = function (len) {
        return this.next(len).arrayBuffer();
    };
    /**
     * Slices the Blob and returns it as an Int32Array
     *
     * @param len The length of the slice.
     * @returns An Int32Array promise.
     */
    BlobSlicer.prototype.nextInt32Array = function (len) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Int32Array.bind;
                        return [4 /*yield*/, this.nextArrayBuffer(len)];
                    case 1: return [2 /*return*/, new (_a.apply(Int32Array, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    /**
     * Slices the Blob and returns it as a string
     *
     * @param len The length of the slice.
     * @returns A string promise.
     */
    BlobSlicer.prototype.nextString = function (len) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.next(len).text()];
            });
        });
    };
    return BlobSlicer;
}());
/**
 * Manages creation and extraction of a self describing Blob. Data
 * is stored as:
 *
 * [numEntries] - The number entries in the file. 4 byte Int32
 * [sizes] - Sizes of all the entries, including the info object
 * [info] - User supplied data as a JSON string
 * [entry 1] - First user entry
 * [entry 2] - Second user entry
 * [...]
 */
var BlobFile = /** @class */ (function () {
    /**
     * @param info The information header to be stored with the Blob
     * @param parts The data contents of the Blob
     */
    function BlobFile(info, parts) {
        this.parts = [];
        this.info = info;
        this.parts = parts;
    }
    /**
     * Converts a raw Blob object into a BlobFile
     *
     * @param blob The Blob to process.
     * @return A BlobFile promise.
     */
    BlobFile.extract = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var blobSlicer, numEntries, sizes, jsonInfo, parts, i, size;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blobSlicer = new BlobSlicer(blob);
                        return [4 /*yield*/, blobSlicer.nextInt32Array(4)];
                    case 1:
                        numEntries = (_a.sent())[0];
                        return [4 /*yield*/, blobSlicer.nextInt32Array(4 * (numEntries + 1))];
                    case 2:
                        sizes = _a.sent();
                        return [4 /*yield*/, blobSlicer.nextString(sizes[0])];
                    case 3:
                        jsonInfo = _a.sent();
                        parts = [];
                        for (i = 0; i < numEntries; i++) {
                            size = sizes[i + 1];
                            parts.push(blobSlicer.next(size));
                        }
                        return [2 /*return*/, new BlobFile(JSON.parse(jsonInfo), parts)];
                }
            });
        });
    };
    /**
     * Create a BlobFile Blob
     *
     * @param info The information header to be stored with the Blob
     * @param parts The data contents of the Blob
     */
    BlobFile.createBlob = function (info, parts) {
        var jsonInfo = JSON.stringify(info);
        // Build the array of sizes
        var sizes = [jsonInfo.length];
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part instanceof Int32Array) {
                sizes.push(4 * part.length);
            }
            else if (part instanceof Float32Array) {
                sizes.push(4 * part.length);
            }
            else if (part instanceof String) {
                sizes.push(part.length);
            }
            else {
                var msg = 'Unsupported Blob Part Type: ' + typeof part;
                console.error(msg);
                throw new Error(msg);
            }
        }
        // assemble the blob parts
        var allParts = [];
        allParts.push(new Int32Array([parts.length]));
        allParts.push(new Int32Array(sizes));
        allParts.push(jsonInfo);
        allParts.push.apply(allParts, parts);
        // create the blob
        return new Blob(allParts);
    };
    return BlobFile;
}());



/***/ }),

/***/ "./src/BlobShim.ts":
/*!*************************!*\
  !*** ./src/BlobShim.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// needed for Safari
if (!Blob.prototype.arrayBuffer) {
    Blob.prototype.arrayBuffer = function () {
        var _this = this;
        // read the Blob the old fashioned way
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            // register event handlers
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
            // start the read
            reader.readAsArrayBuffer(_this);
        });
    };
}
// needed for Safari
if (!Blob.prototype.text) {
    // read the Blob the old fashioned way
    Blob.prototype.text = function () {
        var _this = this;
        // read the Blob the old fashioned way
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            // register event handlers
            reader.onloadend = function () {
                // decode into a string
                var txt = new TextDecoder("utf-8").decode(reader.result);
                resolve(txt);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
            // start the read
            reader.readAsArrayBuffer(_this);
        });
    };
}


/***/ }),

/***/ "./src/Color.ts":
/*!**********************!*\
  !*** ./src/Color.ts ***!
  \**********************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/**
 * Class for representing color values. Values may be on a 0-1 or 0-255 scale.
 */
var Color = /** @class */ (function () {
    /**
     * @param color RGB values to store in this object
     */
    function Color(color) {
        this.r = color[0];
        this.g = color[1];
        this.b = color[2];
        if (color.length === 4) {
            this.a = color[3];
        }
    }
    return Color;
}());



/***/ }),

/***/ "./src/ColorAnalyzer.ts":
/*!******************************!*\
  !*** ./src/ColorAnalyzer.ts ***!
  \******************************/
/*! exports provided: ColorAnalyzer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAnalyzer", function() { return ColorAnalyzer; });
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");

/**
 * This class grabs a copy of the rendered texture and examines it for
 * color values.
 */
var ColorAnalyzer = /** @class */ (function () {
    /**
     * @param size The width and height of the buffer
     */
    function ColorAnalyzer(size) {
        this.size = size;
        // allocate the buffer used for grabs
        this.pixels = new Float32Array(this.size * this.size * 4);
    }
    /**
     * Runs the analysis - grabs a copy of the frame buffer and scans it.
     *
     * @param alphaLight The alpha value for things in light. Values above this are due to specular lighting.
     * @param alphaShadow The alpha value for things in shadow.
     */
    ColorAnalyzer.prototype.run = function (gl, alphaLight, alphaShadow) {
        var data = {
            maxChroma: 0,
            avgLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([0, 0, 0]),
            lightestLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([0, 0, 0]),
            darkestLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([1, 1, 1]),
            avgShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([0, 0, 0]),
            lightestShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([0, 0, 0]),
            darkestShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([1, 1, 1]),
            terminatorColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([0, 0, 0]),
            highlightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([0, 0, 0]),
        };
        // TODO handle case when the text type is UNSIGNED_BYTE
        gl.readPixels(0, 0, this.size, this.size, gl.RGBA, gl.FLOAT, this.pixels);
        var numLightPixels = 0;
        var numShadowPixels = 0;
        var numTerminatorPixels = 0;
        for (var row = 0; row < this.size; row++) {
            for (var col = 0; col < this.size; col++) {
                var index = (row * this.size + col) * 4;
                var r = this.pixels[index + 0];
                var g = this.pixels[index + 1];
                var b = this.pixels[index + 2];
                var a = this.pixels[index + 3];
                // ignore values that are not part of the ball
                if (a === 1) {
                    continue;
                }
                var avg = (r + g + b) / 3;
                var chroma = (Math.abs(r - avg) + Math.abs(g - avg) + Math.abs(b - avg)) / (4 / 3);
                if (chroma > data.maxChroma) {
                    data.maxChroma = chroma;
                }
                var color = new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([r, g, b]);
                if (a == alphaLight) {
                    numLightPixels++;
                    if (data.lightestLightColor == null) {
                        data.lightestLightColor = color;
                    }
                    if (data.darkestLightColor == null) {
                        data.darkestLightColor = color;
                    }
                    data.lightestLightColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"].lightest(data.lightestLightColor, color);
                    data.darkestLightColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"].darkest(data.darkestLightColor, color);
                    data.avgLightColor.r += color.r;
                    data.avgLightColor.b += color.b;
                    data.avgLightColor.g += color.g;
                }
                else if (a == alphaShadow) {
                    numShadowPixels++;
                    if (data.lightestShadowColor == null) {
                        data.lightestShadowColor = color;
                    }
                    if (data.darkestShadowColor == null) {
                        data.darkestShadowColor = color;
                    }
                    data.lightestShadowColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"].lightest(data.lightestShadowColor, color);
                    data.darkestShadowColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"].darkest(data.darkestShadowColor, color);
                    data.avgShadowColor.r += color.r;
                    data.avgShadowColor.b += color.b;
                    data.avgShadowColor.g += color.g;
                }
                else if (a > alphaLight) {
                    data.highlightColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"].lightest(data.highlightColor, color);
                }
                var terminator = (alphaLight + alphaShadow) / 2.0;
                if (Math.abs(a - terminator) < 0.1) {
                    numTerminatorPixels++;
                    data.terminatorColor.r += color.r;
                    data.terminatorColor.b += color.b;
                    data.terminatorColor.g += color.g;
                }
            }
        }
        if (numLightPixels > 0) {
            data.avgLightColor.r /= numLightPixels;
            data.avgLightColor.g /= numLightPixels;
            data.avgLightColor.b /= numLightPixels;
        }
        if (numShadowPixels > 0) {
            data.avgShadowColor.r /= numShadowPixels;
            data.avgShadowColor.g /= numShadowPixels;
            data.avgShadowColor.b /= numShadowPixels;
        }
        if (numTerminatorPixels > 0) {
            data.terminatorColor.r /= numTerminatorPixels;
            data.terminatorColor.g /= numTerminatorPixels;
            data.terminatorColor.b /= numTerminatorPixels;
        }
        return data;
    };
    return ColorAnalyzer;
}());



/***/ }),

/***/ "./src/ColorRange.ts":
/*!***************************!*\
  !*** ./src/ColorRange.ts ***!
  \***************************/
/*! exports provided: ColorRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorRange", function() { return ColorRange; });
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");

/**
 * Interpolates and array of colors
 */
var ColorRange = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param colors The colors to interpolate
     */
    function ColorRange(colors) {
        this.colors = colors;
    }
    /**
     * Gets an interpolated color.
     *
     * @param value A value between 0 and 1.
     */
    ColorRange.prototype.get = function (value) {
        if (value < 0) {
            return this.colors[0];
        }
        else if (value >= 1) {
            return this.colors[this.colors.length - 1];
        }
        else {
            var index = Math.floor((this.colors.length - 1) * value);
            var partial = (this.colors.length - 1) * value - index;
            var r = Math.round(this.colors[index].r + partial * (this.colors[index + 1].r - this.colors[index].r));
            var g = Math.round(this.colors[index].g + partial * (this.colors[index + 1].g - this.colors[index].g));
            var b = Math.round(this.colors[index].b + partial * (this.colors[index + 1].b - this.colors[index].b));
            return new _htmlColor__WEBPACK_IMPORTED_MODULE_0__["htmlColor"]([r, g, b]);
        }
    };
    return ColorRange;
}());



/***/ }),

/***/ "./src/DropDownMenu.ts":
/*!*****************************!*\
  !*** ./src/DropDownMenu.ts ***!
  \*****************************/
/*! exports provided: DropDownMenu, SubMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownMenu", function() { return DropDownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMenu", function() { return SubMenu; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Menu = /** @class */ (function () {
    function Menu() {
        this.ignoreEvent = false;
    }
    Menu.prototype.show = function () {
        if (this.menuDiv.classList.contains('DropDownShow') === false) {
            this.menuDiv.classList.add('DropDownShow');
        }
    };
    Menu.prototype.hide = function () {
        if (this.menuDiv.classList.contains('DropDownShow')) {
            this.menuDiv.classList.remove('DropDownShow');
        }
    };
    Menu.prototype.addCloseHandler = function () {
        // TODO on the phone this event does not occur when clicking over the canvas
        var _this = this;
        window.addEventListener('click', function (event) {
            if (_this.ignoreEvent === false) {
                _this.hide();
            }
            _this.ignoreEvent = false;
        });
    };
    return Menu;
}());
var DropDownMenu = /** @class */ (function (_super) {
    __extends(DropDownMenu, _super);
    function DropDownMenu(parent, text, id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.dropDownDiv = document.createElement('div');
        _this.dropDownDiv.id = id + 'DropDown';
        _this.dropDownDiv.className = 'DropDown';
        parent.appendChild(_this.dropDownDiv);
        var menuButton = document.createElement('div');
        menuButton.innerText = text;
        menuButton.className = 'DropDownButton';
        menuButton.onclick = function () {
            _this.ignoreEvent = true;
            _this.show();
        };
        _this.dropDownDiv.appendChild(menuButton);
        _super.prototype.addCloseHandler.call(_this);
        _this.menuDiv = document.createElement('div');
        _this.menuDiv.className = 'DropDownMenu';
        _this.menuDiv.id = id + 'DropDownMenu';
        _this.dropDownDiv.appendChild(_this.menuDiv);
        return _this;
    }
    DropDownMenu.prototype.addItem = function (text, callback) {
        var item = document.createElement('div');
        item.id = this.id + 'DropDownMenuItem';
        item.className = 'DropDownMenuItem';
        item.innerText = text;
        item.onclick = function () {
            callback();
        };
        this.menuDiv.appendChild(item);
    };
    DropDownMenu.prototype.addSubMenu = function (text, id) {
        var _this = this;
        var item = document.createElement('div');
        item.id = this.id + 'DropDownMenuItem';
        item.className = 'DropDownMenuItem';
        item.innerText = text;
        item.onclick = function () {
            _this.hide();
            subMenu.show();
            subMenu.ignoreEvent = true;
        };
        this.menuDiv.appendChild(item);
        var subMenu = new SubMenu(item, this.dropDownDiv, id);
        return subMenu;
    };
    return DropDownMenu;
}(Menu));

var SubMenu = /** @class */ (function (_super) {
    __extends(SubMenu, _super);
    function SubMenu(parent, dropDownDiv, id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.menuDiv = document.createElement('div');
        _this.menuDiv.className = 'DropDownMenu';
        _this.menuDiv.id = id + 'DropDownMenu';
        dropDownDiv.appendChild(_this.menuDiv);
        _this.addCloseHandler();
        return _this;
    }
    SubMenu.prototype.addItem = function (text, callback) {
        var _this = this;
        var item = document.createElement('div');
        item.id = this.id + 'DropDownMenuItem';
        item.className = 'DropDownMenuItem';
        item.innerText = text;
        item.onclick = function () {
            _this.ignoreEvent = true;
            // TODO the global handler should get this but does not on phones
            _this.hide();
            callback();
        };
        this.menuDiv.appendChild(item);
    };
    return SubMenu;
}(Menu));



/***/ }),

/***/ "./src/Globals.ts":
/*!************************!*\
  !*** ./src/Globals.ts ***!
  \************************/
/*! exports provided: isMobile, clamp, toDeg, toRad, mix, toCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDeg", function() { return toDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCss", function() { return toCss; });
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
function clamp(value, min, max) {
    if (value < min) {
        return min;
    }
    else if (value > max) {
        return max;
    }
    else {
        return value;
    }
}
function toDeg(rad) {
    return (180 / Math.PI) * rad;
}
function toRad(deg) {
    return (Math.PI / 180) * deg;
}
function mix(v1, v2, mix) {
    return v1 + clamp(mix, 0, 1) * (v2 - v1);
}
function toCss(r, g, b, a) {
    return 'rgb(' + r + ',' + g + ',' + b + (a === undefined ? '' : ',' + a) + ')';
}


/***/ }),

/***/ "./src/IndexedTriangle.ts":
/*!********************************!*\
  !*** ./src/IndexedTriangle.ts ***!
  \********************************/
/*! exports provided: IndexedTriangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedTriangle", function() { return IndexedTriangle; });
/* harmony import */ var _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexedVec3 */ "./src/IndexedVec3.ts");

/**
 * Minimalist wrapper around a WebGL triangle element
 */
var IndexedTriangle = /** @class */ (function () {
    function IndexedTriangle(vertices, normals, i1, i2, i3) {
        this.v1 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](vertices, i1);
        this.v2 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](vertices, i2);
        this.v3 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](vertices, i3);
        this.n1 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](normals, i1);
        this.n2 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](normals, i2);
        this.n3 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](normals, i3);
        this.i1 = i1;
        this.i2 = i2;
        this.i3 = i3;
    }
    Object.defineProperty(IndexedTriangle.prototype, "minX", {
        get: function () {
            return Math.min(this.v1.x, this.v2.x, this.v3.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minY", {
        get: function () {
            return Math.min(this.v1.y, this.v2.y, this.v3.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minZ", {
        get: function () {
            return Math.min(this.v1.z, this.v2.z, this.v3.z);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxX", {
        get: function () {
            return Math.max(this.v1.x, this.v2.x, this.v3.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxY", {
        get: function () {
            return Math.max(this.v1.y, this.v2.y, this.v3.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxZ", {
        get: function () {
            return Math.max(this.v1.z, this.v2.z, this.v3.z);
        },
        enumerable: true,
        configurable: true
    });
    IndexedTriangle.prototype.computeNormal = function () {
        var v1 = this.v1.toVec3();
        var v2 = this.v2.toVec3();
        var v3 = this.v3.toVec3();
        var a = v2.subtract(v1);
        var b = v3.subtract(v2);
        return a.cross(b).normalize();
    };
    return IndexedTriangle;
}());



/***/ }),

/***/ "./src/IndexedVec3.ts":
/*!****************************!*\
  !*** ./src/IndexedVec3.ts ***!
  \****************************/
/*! exports provided: IndexedVec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedVec3", function() { return IndexedVec3; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");

var IndexedVec3 = /** @class */ (function () {
    function IndexedVec3(values, index) {
        this.values = values;
        this.index = index;
    }
    Object.defineProperty(IndexedVec3.prototype, "x", {
        get: function () {
            return this.values[3 * this.index + 0];
        },
        set: function (val) {
            this.values[3 * this.index + 0] = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedVec3.prototype, "y", {
        get: function () {
            return this.values[3 * this.index + 1];
        },
        set: function (val) {
            this.values[3 * this.index + 1] = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedVec3.prototype, "z", {
        get: function () {
            return this.values[3 * this.index + 2];
        },
        set: function (val) {
            this.values[3 * this.index + 2] = val;
        },
        enumerable: true,
        configurable: true
    });
    IndexedVec3.prototype.toVec3 = function () {
        return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.x, this.y, this.z]);
    };
    return IndexedVec3;
}());



/***/ }),

/***/ "./src/Mat.ts":
/*!********************!*\
  !*** ./src/Mat.ts ***!
  \********************/
/*! exports provided: Mat4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return Mat4; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

/**
 * An x-y-z-w matrix for use in WebGL applications.
 */
var Mat4 = /** @class */ (function () {
    /**
     * @param values If supplied, the initial matrix values. If not supplied, the matrix is
     * initialized as an identity matrix.
     */
    function Mat4(values) {
        if (values) {
            this.values = __spreadArrays(values);
        }
        else {
            this.values = [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ];
        }
    }
    Object.defineProperty(Mat4, "identity", {
        /**
         * Get's an identity matrix. Same as creating a new matrix, but syntactically
         * shows what is happening.
         *
         * @returns A new idenity matrix.
         */
        get: function () {
            return new Mat4();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mat4, "ortho", {
        /**
         * Creates an orthographic matrix in the WebGL coordinate system (positive z towards you)
         *
         * @return A new orthographic matrix
         */
        get: function () {
            return Mat4.makeOrtho(-1, 1, -1, 1, 1, -1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the matrix.
     *
     * @returns A copy of the matrix.
     */
    Mat4.prototype.clone = function () {
        return new Mat4(this.values);
    };
    /**
     * Gets a value in the matrix.
     *
     * @param row The row index.
     * @param col The column index.
     * @returns The matrix value.
     */
    Mat4.prototype.get = function (row, col) {
        return this.values[4 * row + col];
    };
    /**
     * Sets a value in the matrix.
     *
     * @param row The row index.
     * @param col The column index.
     * @param val The value.
     */
    Mat4.prototype.set = function (row, col, val) {
        this.values[4 * row + col] = val;
    };
    /**
     * Multiplies this matrix against a vector and returns the result.
     *
     * @param vec The vector.
     * @return The result of the multiplication.
     */
    Mat4.prototype.multV = function (vec) {
        var vals = [];
        for (var row = 0; row < 4; row++) {
            var sum = 0;
            for (var col = 0; col < 4; col++) {
                sum += this.values[row * 4 + col] * vec.values[col];
            }
            vals.push(sum);
        }
        return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec4"](vals);
    };
    /**
     * Multiplies this matrix against another matrix and returns the result.
     *
     * @param other The matrix.
     * @return The result of the multiplication.
     */
    Mat4.prototype.multM = function (other) {
        var result = new Mat4();
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                var sum = 0;
                for (var i = 0; i < 4; i++) {
                    sum += this.get(row, i) * other.get(i, col);
                }
                result.set(row, col, sum);
            }
        }
        return result;
    };
    /**
     * Inverts this matrix and returns the result.
     *
     * @returns The inverse of this.
     */
    Mat4.prototype.inverse = function () {
        var result = new Mat4();
        var a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3];
        var a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7];
        var a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        var a30 = this.values[12], a31 = this.values[13], a32 = this.values[14], a33 = this.values[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        // Calculate the determinant
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        result.values[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        result.values[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        result.values[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        result.values[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        result.values[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        result.values[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        result.values[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        result.values[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        result.values[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        result.values[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        result.values[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        result.values[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        result.values[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        result.values[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        result.values[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        result.values[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return result;
    };
    /**
     * Transposes this matrix and returns the result as a new matrix.
     *
     * @returns The transposed matrix.
     */
    Mat4.prototype.transpose = function () {
        var result = new Mat4();
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                result.set(row, col, this.get(col, row));
            }
        }
        return result;
    };
    /**
     * Creates a matrix that contains a scale operation.
     *
     * @param scale The scale factor
     * @returns The transformation matrix.
     */
    Mat4.fromScale = function (scale) {
        return new Mat4([
            scale, 0, 0, 0,
            0, scale, 0, 0,
            0, 0, scale, 0,
            0, 0, 0, 1
        ]);
    };
    /**
     * Creates a matrix that contains a translation operation.
     *
     * @param vec The translations.
     * @returns The transformation matrix.
     */
    Mat4.fromTranslation = function (v) {
        return new Mat4([
            1, 0, 0, v.x,
            0, 1, 0, v.y,
            0, 0, 1, v.z,
            0, 0, 0, 1
        ]);
    };
    Mat4.fromRotX = function (angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new Mat4([
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1
        ]);
    };
    Mat4.fromRotY = function (angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new Mat4([
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1
        ]);
    };
    Mat4.fromRotZ = function (angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new Mat4([
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    };
    Mat4.prototype.rotX = function (angle) {
        this.values = Mat4.fromRotX(angle).multM(this).values;
        return this;
    };
    Mat4.prototype.rotY = function (angle) {
        this.values = Mat4.fromRotY(angle).multM(this).values;
        return this;
    };
    Mat4.prototype.rotZ = function (angle) {
        this.values = Mat4.fromRotZ(angle).multM(this).values;
        return this;
    };
    Mat4.prototype.translate = function (offset) {
        this.values = Mat4.fromTranslation(offset).multM(this).values;
        return this;
    };
    Mat4.prototype.scale = function (scale) {
        this.values = Mat4.fromScale(scale).multM(this).values;
        return this;
    };
    /**
     * Creates a viewing matrix. See gluLookAt.
     *
     * @param eye The eye position.
     * @param center The point of interest.
     * @param up The up vector.
     * @returns The viewing matrix.
     */
    Mat4.makeLookAt = function (eye, center, up) {
        var a = eye.subtract(center).normalize();
        var b = up.cross(a).normalize();
        var c = a.cross(b).normalize();
        var m = new Mat4([
            b.x, b.y, b.z, 0,
            c.x, c.y, c.z, 0,
            a.x, a.y, a.z, 0,
            0, 0, 0, 1
        ]);
        var t = new Mat4([
            1, 0, 0, -eye.x,
            0, 1, 0, -eye.y,
            0, 0, 1, -eye.z,
            0, 0, 0, 1
        ]);
        var result = m.multM(t);
        return result;
    };
    /**
     * Creates a perspective matrix. See gluPerspective.
     *
     * @param fovy Field of view (in degrees).
     * @param aspect View aspect ratio.
     * @param znear Near clipping plane.
     * @param zfar Far clipping plane.
     */
    Mat4.makePerspective = function (fovy, aspect, znear, zfar) {
        var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
        var ymin = -ymax;
        var xmin = ymin * aspect;
        var xmax = ymax * aspect;
        return Mat4.makeFrustum(xmin, xmax, ymin, ymax, znear, zfar);
    };
    /**
     * Creates a perspective matrix. See gluFrustum.
     *
     * @param left The left clipping plane.
     * @param right The right clipping plane.
     * @param bottom The bottom clipping plane.
     * @param top The top clipping plane.
     * @param znear The near clipping plane.
     * @param zfar The far clipping plane.
     * @returns the perspective matrix.
     */
    Mat4.makeFrustum = function (left, right, bottom, top, znear, zfar) {
        var X = 2 * znear / (right - left);
        var Y = 2 * znear / (top - bottom);
        var A = (right + left) / (right - left);
        var B = (top + bottom) / (top - bottom);
        var C = -(zfar + znear) / (zfar - znear);
        var D = -2 * zfar * znear / (zfar - znear);
        return new Mat4([
            X, 0, A, 0,
            0, Y, B, 0,
            0, 0, C, D,
            0, 0, -1, 0
        ]);
    };
    /**
     * Creates a perspective matrix. See gluOrtho.
     *
     * @param left The left clipping plane.
     * @param right The right clipping plane.
     * @param bottom The bottom clipping plane.
     * @param top The top clipping plane.
     * @param znear The near clipping plane.
     * @param zfar The far clipping plane.
     * @returns the perspective matrix.
     */
    Mat4.makeOrtho = function (left, right, bottom, top, near, far) {
        return new Mat4([
            2 / (right - left), 0, 0, (right + left) / (right - left),
            0, 2 / (top - bottom), 0, (top + bottom) / (top - bottom),
            0, 0, 2 / (far - near), (far + near) / (far - near),
            0, 0, 0, 1
        ]);
    };
    Mat4.prototype.log = function (msg, digits) {
        if (digits === void 0) { digits = 2; }
        console.log(msg);
        for (var r = 0; r < 4; r++) {
            var line = "";
            for (var c = 0; c < 4; c++) {
                line += this.get(r, c).toFixed(digits) + ' ';
            }
            console.log(line);
        }
        console.log();
    };
    return Mat4;
}());



/***/ }),

/***/ "./src/ModelLoader.ts":
/*!****************************!*\
  !*** ./src/ModelLoader.ts ***!
  \****************************/
/*! exports provided: ModelLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelLoader", function() { return ModelLoader; });
/* harmony import */ var worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! worker-loader?name=LoaderWorker.worker.js!./LoaderWorker */ "./node_modules/worker-loader/dist/cjs.js?name=LoaderWorker.worker.js!./src/LoaderWorker.ts");
/* harmony import */ var worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
// specify loader and options here. This value must match the
// contents of worker.d.ts



/**
 * Class for doing the work of loading a file into a glObject
 */
var ModelLoader = /** @class */ (function () {
    function ModelLoader() {
    }
    /**
     * Loads a file
     *
     * @param file The file url to load
     * @param updateStatus Callback that is notified of progress
     * @returns TriangleObj promise
     */
    ModelLoader.prototype.loadModelFile = function (file, updateStatus) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // if a previous worker exists, close it
            if (_this.worker) {
                _this.worker.terminate();
                _this.worker = undefined;
            }
            _this.worker = new worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_0___default.a();
            var tStart = Date.now();
            _this.worker.onmessage = function (_a) {
                var data = _a.data;
                if (typeof data === 'string') {
                    // avoid flashing messages for things that happen very quickly.
                    if (Date.now() - tStart > 500) {
                        updateStatus(data);
                    }
                }
                else {
                    var tObj = _TriangleObj__WEBPACK_IMPORTED_MODULE_1__["TriangleObj"].fromData(data);
                    updateStatus('');
                    _this.worker.terminate();
                    _this.worker = undefined;
                    resolve(tObj);
                }
            };
            _this.worker.postMessage(file);
        });
    };
    ModelLoader.prototype.orient = function (model) {
        // orient each file so that it is facing forward
        var name = model.name.split('.')[0].toLowerCase();
        switch (name) {
            case 'skull1':
                model.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(90));
                //model.rotY(toRad(180));
                break;
            case 'pelvis':
                model.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(11));
                model.rotZ(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-87));
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'wolf':
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-140));
                model.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(5));
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'skull4':
                model.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(80));
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-22));
                model.rotZ(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-1));
                break;
            case 'sheephead':
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(20));
                break;
            case 'pose1':
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'teapot':
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(90));
                break;
            default:
                break;
        }
    };
    return ModelLoader;
}());



/***/ }),

/***/ "./src/ModelsDropDownMenu.ts":
/*!***********************************!*\
  !*** ./src/ModelsDropDownMenu.ts ***!
  \***********************************/
/*! exports provided: createModelsDropDownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModelsDropDownMenu", function() { return createModelsDropDownMenu; });
/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropDownMenu */ "./src/DropDownMenu.ts");

function createModelsDropDownMenu(parent, loadModel) {
    var subMenu;
    var menu = new _DropDownMenu__WEBPACK_IMPORTED_MODULE_0__["DropDownMenu"](parent, 'Models', 'ModelDropDown');
    menu.addItem('Female Pose', function () { return loadModel('Pose1.blob'); });
    menu.addItem('Female Head', function () { return loadModel('FemaleHead.blob'); });
    menu.addItem('Arnold', function () { return loadModel('Arnold.blob'); });
    menu.addItem('Teapot', function () { return loadModel('Teapot.blob'); });
    subMenu = menu.addSubMenu('Anatomy', 'AnatomySubMenu');
    subMenu.addItem('Skull 1', function () { return loadModel('Skull1.blob'); });
    subMenu.addItem('Skull 2', function () { return loadModel('Skull2.blob'); });
    subMenu.addItem('Skull 3', function () { return loadModel('Skull3.blob'); });
    subMenu.addItem('Skull 4', function () { return loadModel('Skull4.blob'); });
    subMenu.addItem('Pelvis', function () { return loadModel('Pelvis.blob'); });
    subMenu.addItem('Clavicle', function () { return loadModel('Clavicle.blob'); });
    subMenu.addItem('Scapula', function () { return loadModel('Scapula.blob'); });
    subMenu.addItem('Humerus', function () { return loadModel('Humerus.blob'); });
    subMenu.addItem('Head Ecorche', function () { return loadModel('HeadEcorche.blob'); });
    subMenu = menu.addSubMenu('Poses', 'HeadsSubMenu');
    subMenu.addItem('Pose 1', function () { return loadModel('Pose_01.blob'); });
    subMenu.addItem('Pose 2', function () { return loadModel('Pose_02.blob'); });
    subMenu.addItem('Pose 3', function () { return loadModel('Pose_03.blob'); });
    subMenu.addItem('Pose 4', function () { return loadModel('Pose_04.blob'); });
    subMenu.addItem('Pose 5', function () { return loadModel('Pose_05.blob'); });
    subMenu.addItem('Pose 6', function () { return loadModel('Pose_06.blob'); });
    subMenu.addItem('Pose 7', function () { return loadModel('Pose_07.blob'); });
    subMenu.addItem('Pose 8', function () { return loadModel('Pose_08.blob'); });
    subMenu.addItem('Pose 9', function () { return loadModel('Pose_09.blob'); });
    subMenu.addItem('Pose 10', function () { return loadModel('Pose_010.blob'); });
    subMenu.addItem('Pose 11', function () { return loadModel('Pose_011.blob'); });
    subMenu.addItem('Pose 12', function () { return loadModel('Pose_012.blob'); });
    subMenu.addItem('Pose 13', function () { return loadModel('Pose_013.blob'); });
    subMenu.addItem('Pose 14', function () { return loadModel('Pose_014.blob'); });
    subMenu.addItem('Pose 15', function () { return loadModel('Pose_015.blob'); });
    subMenu.addItem('Pose 16', function () { return loadModel('Pose_016.blob'); });
    subMenu = menu.addSubMenu('Heads', 'HeadsSubMenu');
    subMenu.addItem('Head 1', function () { return loadModel('Head1.blob'); });
    subMenu.addItem('Head 2', function () { return loadModel('Head2.blob'); });
    subMenu.addItem('Head 3', function () { return loadModel('Head3.blob'); });
    subMenu.addItem('Head 4', function () { return loadModel('Head4.blob'); });
    subMenu.addItem('Head 5', function () { return loadModel('Head5.blob'); });
    subMenu.addItem('Head 6', function () { return loadModel('Head6.blob'); });
    subMenu.addItem('Head 7', function () { return loadModel('Head7.blob'); });
    subMenu.addItem('Head 8', function () { return loadModel('Head8.blob'); });
    subMenu.addItem('Head 9', function () { return loadModel('Head9.blob'); });
    subMenu.addItem('Head 10', function () { return loadModel('Head10.blob'); });
    subMenu.addItem('Head 11', function () { return loadModel('Head.blob'); });
    return menu;
}


/***/ }),

/***/ "./src/PathTracerApp.ts":
/*!******************************!*\
  !*** ./src/PathTracerApp.ts ***!
  \******************************/
/*! exports provided: PathTracerApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathTracerApp", function() { return PathTracerApp; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathTracerRenderer */ "./src/PathTracerRenderer.ts");
/* harmony import */ var _Mat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mat */ "./src/Mat.ts");
/* harmony import */ var _Uniforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Uniforms */ "./src/Uniforms.ts");
/* harmony import */ var _SphericalCoord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SphericalCoord */ "./src/SphericalCoord.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glColorWithTemperature */ "./src/glColorWithTemperature.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _TriangleObjFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TriangleObjFile */ "./src/TriangleObjFile.ts");
/* harmony import */ var _TriangleObjBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TriangleObjBuilder */ "./src/TriangleObjBuilder.ts");











var skinTones = [
    new _htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"]([240, 223, 214]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"]([255, 218, 200]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"]([232, 179, 117]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"]([190, 136, 87]),
    //   new htmlColor([115, 91, 59]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"]([139, 73, 65])
    //   new htmlColor([132, 55, 34]),
    //new htmlColor([61, 12, 2]),
    //   new htmlColor([38, 7, 1])
];
var PointerMode;
(function (PointerMode) {
    PointerMode[PointerMode["View"] = 0] = "View";
    PointerMode[PointerMode["Light"] = 1] = "Light";
})(PointerMode || (PointerMode = {}));
var PathTracerApp = /** @class */ (function () {
    function PathTracerApp(query) {
        this.gl = null;
        this.pointerMode = PointerMode.View;
        this.pointerModeSpecial = false;
        this.angleX = 0.5;
        this.angleY = 0.75;
        this.zoomZ = 3.5;
        this.mouseDown = false;
        this.lastTimes = [];
        this.MAX_SAMPLES = 500;
        this.query = query;
    }
    PathTracerApp.prototype.component = function () {
        var _this = this;
        var div = document.createElement('div');
        var container = document.createElement('span');
        container.className = 'container';
        div.appendChild(container);
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas';
        container.appendChild(this.canvas);
        var context = this.canvas.getContext('webgl2');
        if (!context) {
            context = this.canvas.getContext('webgl');
        }
        if (!context) {
            // TODO display a message about not being able to create a WebGL context
            console.log("Unable to get WebGL context");
        }
        this.gl = context;
        this.canvas.ontouchstart = function (event) {
            event.preventDefault();
            if (event.touches.length === 1) {
                _this.onDown(event.touches[0].clientX, event.touches[0].clientY);
            }
        };
        this.canvas.ontouchmove = function (event) {
            event.preventDefault();
            _this.onMove(event.touches[0].clientX, event.touches[0].clientY);
        };
        this.canvas.ontouchend = function (event) {
            event.preventDefault();
            _this.mouseDown = false;
        };
        this.canvas.onmousedown = function (event) {
            _this.onDown(event.x, event.y);
            // disable selection because dragging is used for rotating the camera and moving objects
            return false;
        };
        this.canvas.onmousemove = function (event) {
            _this.onMove(event.x, event.y);
        };
        this.canvas.onmouseup = function (event) {
            _this.mouseDown = false;
        };
        this.canvas.onmouseleave = function (event) {
            _this.mouseDown = false;
        };
        this.loadModel(this.query).then(function (tObj) {
            _this.renderer = new _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__["PathTracerRenderer"](_this.gl, tObj);
            requestAnimationFrame(function () { return _this.tick(); });
        });
        var drawTime = document.createElement('div');
        drawTime.id = 'drawTime';
        container.appendChild(drawTime);
        var description = document.createElement('div');
        description.id = 'description';
        container.appendChild(description);
        var button = document.createElement('span');
        button.id = 'modeButton';
        button.innerHTML = 'View';
        this.pointerMode = PointerMode.View;
        button.onclick = function () {
            switch (_this.pointerMode) {
                case PointerMode.View:
                    button.innerHTML = 'Light';
                    _this.pointerMode = PointerMode.Light;
                    break;
                case PointerMode.Light:
                    button.innerHTML = 'View';
                    _this.pointerMode = PointerMode.View;
                    break;
            }
        };
        container.appendChild(button);
        var progressSpan = document.createElement('span');
        progressSpan.id = 'progressSpan';
        container.appendChild(progressSpan);
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));
        this.intensitySlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
            id: 'LightIntensity',
            label: 'Light Intensity',
            min: 0,
            max: 100,
            value: _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uLightIntensity * 100,
            colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"].white],
            oninput: function () {
                _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uLightIntensity = _this.intensitySlider.value / 100;
                _this.restart();
            }
        });
        // build a range of colors
        var min = 2000;
        var max = 10000;
        var colors = [];
        for (var i = 0; i < 10; i++) {
            var temp = min + (i / 9) * (max - min);
            colors.push(_glColorWithTemperature__WEBPACK_IMPORTED_MODULE_7__["glColorWithTemperature"].create(temp).toHtmlColor());
        }
        this.lightColorSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
            id: 'LightColor',
            label: 'Light Color',
            min: 2000,
            max: 10000,
            value: _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_7__["glColorWithTemperature"].daylight.temperature,
            colors: colors,
            oninput: function () {
                _this.setLightColor();
            },
            getText: function (slider) { return slider.value.toFixed() + "K"; }
        });
        // apply the initial colors
        this.setLightColor();
        this.ballColorSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
            id: 'BallColor',
            label: 'Ball Color',
            min: 0,
            max: 100,
            value: 50,
            colors: skinTones,
            oninput: function () {
                _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uObjColor = _this.ballColorSlider.glColor;
                _this.restart();
            }
        });
        // make sure gl matches the initial UI setting
        _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uObjColor = this.ballColorSlider.glColor;
        this.ambientIntensitySlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
            id: 'AmbientIntensity',
            label: 'Ambient Light',
            min: 0,
            max: 100,
            value: _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uAmbientLightIntensity * 100,
            colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"].white],
            oninput: function () {
                _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uAmbientLightIntensity = _this.ambientIntensitySlider.value / 100;
                _this.restart();
            }
        });
        return div;
    };
    PathTracerApp.prototype.loadModel = function (query) {
        if (query && query.toLowerCase() === 'sphere') {
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uBallRadius = 0;
            var radius = 0.5;
            var center = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([0, radius, 0]);
            var tObj = new _TriangleObjBuilder__WEBPACK_IMPORTED_MODULE_10__["TriangleObjBuilder"]();
            tObj.addSphere(8, radius, center);
            tObj.breakIntoVolumes();
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase() === 'cube') {
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uBallRadius = 0;
            var size = 0.8;
            var center = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([0, size / 2.0, 0]);
            var tObj = new _TriangleObjBuilder__WEBPACK_IMPORTED_MODULE_10__["TriangleObjBuilder"]();
            tObj.addCube(size, center);
            tObj.breakIntoVolumes();
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase().endsWith('.obj')) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uBallRadius = 0;
            return fetch(query)
                .then(function (res) { return res.text(); })
                .then(function (res) {
                var tObj = new _TriangleObjFile__WEBPACK_IMPORTED_MODULE_9__["TriangleObjFile"](query, res);
                var size = 1.5;
                tObj.autoCenter(size);
                tObj.translate(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([0, tObj.height / 2, 0]));
                tObj.breakIntoVolumes();
                return tObj;
            });
        }
        else {
            return Promise.resolve(null);
        }
    };
    PathTracerApp.prototype.setLightColor = function () {
        // update the colors for the intensity slider
        this.intensitySlider.colors = [_htmlColor__WEBPACK_IMPORTED_MODULE_6__["htmlColor"].black, this.lightColorSlider.htmlColor];
        // use the value in rendering
        _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uLightColor = this.lightColorSlider.glColor;
        this.restart();
    };
    PathTracerApp.prototype.onDown = function (x, y) {
        if (this.click(x, y)) {
            return;
        }
        ;
        this.pointerModeSpecial = (x < 0.1 * this.canvas.width) ? true : false;
        this.oldX = x;
        this.oldY = y;
        this.pos = _SphericalCoord__WEBPACK_IMPORTED_MODULE_4__["SphericalCoord"].fromXYZ(_Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uLightPos.values);
        this.mouseDown = true;
    };
    PathTracerApp.prototype.onMove = function (x, y) {
        if (this.mouseDown) {
            if (this.pointerMode === PointerMode.View) {
                if (this.pointerModeSpecial) {
                    this.zoomZ -= (y - this.oldY) * 0.01;
                    this.zoomZ = Object(_Globals__WEBPACK_IMPORTED_MODULE_8__["clamp"])(this.zoomZ, 1, 8);
                }
                else {
                    // update the angles based on how far we moved since last time
                    this.angleY -= (x - this.oldX) * 0.01;
                    this.angleX += (y - this.oldY) * 0.01;
                    // don't go upside down
                    this.angleX = Math.max(this.angleX, -Math.PI / 2 + 0.01);
                    this.angleX = Math.min(this.angleX, Math.PI / 2 - 0.01);
                }
            }
            else if (this.pointerMode === PointerMode.Light) {
                if (this.pointerModeSpecial) {
                    this.pos.radius -= (y - this.oldY) * 0.005;
                    this.pos.radius = Object(_Globals__WEBPACK_IMPORTED_MODULE_8__["clamp"])(this.pos.radius, _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uBallRadius + 0.5, 5);
                    _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uLightPos.values = this.pos.toXYZ();
                }
                else {
                    this.pos.rotationAngle += (x - this.oldX);
                    this.pos.elevationAngle += (y - this.oldY);
                    this.pos.elevationAngle = Object(_Globals__WEBPACK_IMPORTED_MODULE_8__["clamp"])(this.pos.elevationAngle, 0, 180);
                    _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uLightPos.values = this.pos.toXYZ();
                }
            }
            // clear the sample buffer
            this.restart();
            // remember this coordinate
            this.oldX = x;
            this.oldY = y;
        }
    };
    /**
     * Processes a click/touch event at the designated coordinates. If a hit
     * occurs, the clicked on view is swapped for the primary view and true
     * is returned. If no hit occurs, false is returned.
     *
     * @param x The x coordinate.
     * @param y The y coordinate.
     * @returns true if a hit on one of the views occurs.
     */
    PathTracerApp.prototype.click = function (x, y) {
        // TODO handle this within the PathTracer class so that we don't have to hard code view stuff
        var size = 0.2 * this.canvas.width;
        if (y < size) {
            if (x > this.canvas.width - 1 * size) {
                this.swap(2);
                this.setDescription();
                return true;
            }
            else if (x > this.canvas.width - 2 * size) {
                this.swap(1);
                this.setDescription();
                return true;
            }
            else if (x > this.canvas.width - 3 * size) {
                this.swap(0);
                this.setDescription();
                return true;
            }
        }
        return false;
    };
    PathTracerApp.prototype.setDescription = function () {
        var description = document.getElementById('description');
        switch (this.renderer.renderMode) {
            case _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Artist:
                description.innerText = "";
                break;
            case _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Chroma:
                description.innerText = "Chroma View: red=highest chroma";
                break;
            case _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Value:
                description.innerText = "Value View";
                break;
            case _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Bands:
                description.innerText = "5 Color + Highlight View";
                break;
        }
    };
    PathTracerApp.prototype.updateTexture = function () {
        this.modelview = _Mat__WEBPACK_IMPORTED_MODULE_2__["Mat4"].makeLookAt(_Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uEye, new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([0, 1, 0]), // center point
        new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([0, 1, 0]) // up vector
        );
        this.projection = _Mat__WEBPACK_IMPORTED_MODULE_2__["Mat4"].makePerspective(55, 1, 0.1, 100);
        this.modelviewProjection = this.projection.multM(this.modelview);
        this.renderer.updateTexture(this.modelviewProjection);
    };
    ;
    PathTracerApp.prototype.displayTexture = function () {
        this.renderer.displayTexture();
    };
    ;
    PathTracerApp.prototype.restart = function () {
        if (this.renderer) {
            this.renderer.restart();
        }
    };
    PathTracerApp.prototype.swap = function (pos) {
        this.renderer.swap(pos);
    };
    PathTracerApp.prototype.tick = function () {
        var _this = this;
        this.updateTimerLabel();
        this.updateProgress();
        if (_Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uSample < this.MAX_SAMPLES) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uEye.values[0] = this.zoomZ * Math.sin(this.angleY) * Math.cos(this.angleX);
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uEye.values[1] = this.zoomZ * Math.sin(this.angleX);
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uEye.values[2] = this.zoomZ * Math.cos(this.angleY) * Math.cos(this.angleX);
            this.updateTexture();
            this.displayTexture();
        }
        requestAnimationFrame(function () { return _this.tick(); });
    };
    PathTracerApp.prototype.updateTimerLabel = function () {
        var t = window.performance.now();
        var drawTimeLabel = document.getElementById('drawTime');
        if (this.lastTimes.length > 0) {
            var elapsedMs = (t - this.lastTimes[0]) / this.lastTimes.length;
            drawTimeLabel.innerText = elapsedMs.toFixed(0) + 'ms';
        }
        this.lastTimes.push(t);
        if (this.lastTimes.length > 30) {
            this.lastTimes.shift();
        }
        drawTimeLabel.style.visibility = _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uSample < this.MAX_SAMPLES ? 'visible' : 'hidden';
    };
    PathTracerApp.prototype.updateProgress = function () {
        var progress = _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uSample / this.MAX_SAMPLES;
        var span = document.getElementById('progressSpan');
        if (progress >= 0 && progress < 1) {
            span.style.visibility = 'visible';
            var w = this.canvas.width;
            span.style.right = w * (1 - progress) + 'px';
        }
        else {
            span.style.visibility = 'hidden';
        }
    };
    return PathTracerApp;
}());



/***/ }),

/***/ "./src/PathTracerRenderer.ts":
/*!***********************************!*\
  !*** ./src/PathTracerRenderer.ts ***!
  \***********************************/
/*! exports provided: RenderMode, PathTracerRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMode", function() { return RenderMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathTracerRenderer", function() { return PathTracerRenderer; });
/* harmony import */ var _Mat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mat */ "./src/Mat.ts");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _shaders_PathTracerToScreenVertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/PathTracerToScreenVertex.glsl */ "./src/shaders/PathTracerToScreenVertex.glsl");
/* harmony import */ var _shaders_PathTracerToScreenFragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/PathTracerToScreenFragment.glsl */ "./src/shaders/PathTracerToScreenFragment.glsl");
/* harmony import */ var _shaders_PathTracerToTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/PathTracerToTextureVertex.glsl */ "./src/shaders/PathTracerToTextureVertex.glsl");
/* harmony import */ var _shaders_PathTracerToTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/PathTracerToTextureFragment.glsl */ "./src/shaders/PathTracerToTextureFragment.glsl");
/* harmony import */ var _ColorRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColorRange */ "./src/ColorRange.ts");
/* harmony import */ var _Uniforms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Uniforms */ "./src/Uniforms.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
/* harmony import */ var _glUniform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./glUniform */ "./src/glUniform.ts");
/* harmony import */ var _glCompiler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./glCompiler */ "./src/glCompiler.ts");
/* harmony import */ var _ColorAnalyzer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ColorAnalyzer */ "./src/ColorAnalyzer.ts");
/* harmony import */ var _glUniformBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glUniformBlock */ "./src/glUniformBlock.ts");
/* harmony import */ var _glTexture__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./glTexture */ "./src/glTexture.ts");
/* harmony import */ var _glFrameBuffer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./glFrameBuffer */ "./src/glFrameBuffer.ts");
















/**
 * Rendering mode for displaying the texture
 */
var RenderMode;
(function (RenderMode) {
    RenderMode[RenderMode["Artist"] = 0] = "Artist";
    RenderMode[RenderMode["Value"] = 1] = "Value";
    RenderMode[RenderMode["Chroma"] = 2] = "Chroma";
    RenderMode[RenderMode["Bands"] = 3] = "Bands";
})(RenderMode || (RenderMode = {}));
/**
 * Class that does the work of building the Path Traced texture
 */
var PathTracerRenderer = /** @class */ (function () {
    function PathTracerRenderer(glCtx, tObj) {
        this.gl = null;
        this.mainView = RenderMode.Artist;
        this.smallViews = [
            RenderMode.Chroma,
            RenderMode.Value,
            RenderMode.Bands,
        ];
        this.vertices = [
            -1, -1,
            -1, +1,
            +1, -1,
            +1, +1
        ];
        this.gl = glCtx;
        var gl = this.gl;
        // larger texture is higher resolution, but takes longer to compute
        if (_Globals__WEBPACK_IMPORTED_MODULE_8__["isMobile"]) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize = 256;
        }
        else {
            // Uniforms.uTextureSize = 512;
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize = 256;
        }
        this.analyzer = new _ColorAnalyzer__WEBPACK_IMPORTED_MODULE_12__["ColorAnalyzer"](_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize);
        // create vertex buffer - the block we'll draw our rendered texture on
        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        // create framebuffer
        this.frameBuffer = new _glFrameBuffer__WEBPACK_IMPORTED_MODULE_15__["glFrameBuffer"](gl, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize);
        this.renderTexture = this.frameBuffer.createTexture(_glTexture__WEBPACK_IMPORTED_MODULE_14__["glTextureStyle"].Float);
        // create two textures. One we display and one we draw to
        this.textures = [];
        for (var i = 0; i < 2; i++) {
            this.textures.push(this.frameBuffer.createTexture(_glTexture__WEBPACK_IMPORTED_MODULE_14__["glTextureStyle"].Color));
        }
        // create toScreen shader
        this.toScreenProgram = _glCompiler__WEBPACK_IMPORTED_MODULE_11__["glCompiler"].compile(gl, _shaders_PathTracerToScreenVertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_PathTracerToScreenFragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
        this.toScreenVertexAttribute = gl.getAttribLocation(this.toScreenProgram, 'vertex');
        gl.enableVertexAttribArray(this.toScreenVertexAttribute);
        this.compileShader(tObj);
    }
    PathTracerRenderer.prototype.compileShader = function (tObj) {
        var gl = this.gl;
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_9__["Profiler"]();
        // create the toTexture shader
        if (tObj && tObj.numTriangles > 0) {
            this.toTextureProgram = _glCompiler__WEBPACK_IMPORTED_MODULE_11__["glCompiler"].compile(gl, _shaders_PathTracerToTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]
                .replace('<VERSION>', '#version 300 es')
                .replace('NOTHING', 'USE_TRIANGLES'), _shaders_PathTracerToTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"]
                .replace('<VERSION>', '#version 300 es')
                .replace('NOTHING', 'USE_TRIANGLES')
                .replace('<NUM_VERTICES>', tObj.numVertices.toString())
                .replace('<NUM_VOLUMES>', tObj.volumes.length.toString())
                .replace('<NUM_TRIANGLES>', tObj.numTriangles.toString()));
            // upload triangles to the GPU
            this.uploadUniforms(tObj);
        }
        else {
            this.toTextureProgram = _glCompiler__WEBPACK_IMPORTED_MODULE_11__["glCompiler"].compile(gl, _shaders_PathTracerToTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]
                .replace('<VERSION>', ''), _shaders_PathTracerToTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"]
                .replace('<VERSION>', ''));
        }
        this.toTextureVertexAttribute = gl.getAttribLocation(this.toTextureProgram, 'vertex');
        gl.enableVertexAttribArray(this.toTextureVertexAttribute);
        p.log('compile');
    };
    /**
     * Uploads all the triangle data to WebGL
     *
     * @param program The program to upload to
     */
    PathTracerRenderer.prototype.uploadUniforms = function (tObj) {
        var gl = this.gl;
        // upload the big chunks as Uniform Blocks
        var blockBinding = 2;
        var vBlock = new _glUniformBlock__WEBPACK_IMPORTED_MODULE_13__["glUniformBlock"](gl, this.toTextureProgram, 'MyVerticesBlock', blockBinding);
        // put the data into a Float32Array for uploading
        var vData = new Float32Array(tObj.numVertices * 4);
        for (var i = 0; i < tObj.numVertices; i++) {
            vData[4 * i + 0] = tObj.vertices[3 * i + 0];
            vData[4 * i + 1] = tObj.vertices[3 * i + 1];
            vData[4 * i + 2] = tObj.vertices[3 * i + 2];
            vData[4 * i + 3] = 0;
        }
        vBlock.upload(vData);
        blockBinding = 3;
        var tBlock = new _glUniformBlock__WEBPACK_IMPORTED_MODULE_13__["glUniformBlock"](gl, this.toTextureProgram, 'MyTrianglesBlock', blockBinding);
        // put the data into a Float32Array for uploading
        var tData = new Int32Array(tObj.numTriangles * 4);
        var index = 0;
        for (var v = 0; v < tObj.volumes.length; v++) {
            var vol = tObj.volumes[v];
            for (var i = 0; i < vol.triangles.length; i++) {
                var t = vol.triangles[i];
                tData[index++] = t.i1;
                tData[index++] = t.i2;
                tData[index++] = t.i3;
                tData[index++] = 0;
            }
        }
        tBlock.upload(tData);
        // Upload the volume info as a standard uniform
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_10__["glUniform"](gl, this.toTextureProgram);
        var startIndex = 0;
        for (var i = 0; i < tObj.volumes.length; i++) {
            var vol = tObj.volumes[i];
            uni.set('object.volumes[' + i + '].startIndex', startIndex, true);
            uni.set('object.volumes[' + i + '].numTriangles', vol.triangles.length, true);
            uni.set('object.volumes[' + i + '].boxMin', vol.boxMin);
            uni.set('object.volumes[' + i + '].boxMax', vol.boxMax);
            startIndex += vol.triangles.length;
        }
        uni.set('object.boxMin', tObj.boxMin);
        uni.set('object.boxMax', tObj.boxMax);
    };
    Object.defineProperty(PathTracerRenderer.prototype, "renderMode", {
        get: function () {
            return this.mainView;
        },
        enumerable: true,
        configurable: true
    });
    PathTracerRenderer.prototype.restart = function () {
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uSample = 0;
    };
    PathTracerRenderer.prototype.getEyeRay = function (matrix, x, y) {
        var vec = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec4"]([x, y, 0, 1]);
        return matrix.multV(vec).divideByW().subtract(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uEye);
    };
    PathTracerRenderer.prototype.updateTexture = function (modelviewProjection) {
        var gl = this.gl;
        // implement aliasing by random sampling within a pixel
        var x = (Math.random() * 2 - 1) / _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize;
        var y = (Math.random() * 2 - 1) / _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize;
        var z = 0;
        var v = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x, y, z]);
        var jitter = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].fromTranslation(v);
        var matrix = jitter.multM(modelviewProjection).inverse();
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uRay00 = this.getEyeRay(matrix, -1, -1);
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uRay01 = this.getEyeRay(matrix, -1, +1);
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uRay10 = this.getEyeRay(matrix, +1, -1);
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uRay11 = this.getEyeRay(matrix, +1, +1);
        // set uniforms
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_10__["glUniform"](gl, this.toTextureProgram);
        uni.setAll(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"]);
        // render to texture
        gl.viewport(0, 0, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize);
        this.textures[0].bind();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        this.frameBuffer.bind();
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.textures[1].get(), 0);
        gl.vertexAttribPointer(this.toTextureVertexAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        var data = this.analyzer.run(gl, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uLightAlpha, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uShadowAlpha);
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uMaxChroma = data.maxChroma;
        var cr = new _ColorRange__WEBPACK_IMPORTED_MODULE_6__["ColorRange"]([data.darkestLightColor.toHtmlColor(), data.avgLightColor.toHtmlColor(), data.lightestLightColor.toHtmlColor()]);
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uHighlightColor = data.highlightColor;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uLightLightColor = cr.get(0.85).toGlColor();
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uMidLightColor = cr.get(0.5).toGlColor();
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uDarkLightColor = cr.get(0.15).toGlColor();
        cr = new _ColorRange__WEBPACK_IMPORTED_MODULE_6__["ColorRange"]([data.darkestShadowColor.toHtmlColor(), data.avgShadowColor.toHtmlColor(), data.lightestShadowColor.toHtmlColor()]);
        //Uniforms.uShadowColor = data.terminatorColor;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uShadowColor = data.avgShadowColor;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uReflectedLightColor = cr.get(1).toGlColor();
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uDarkAccentColor = cr.get(0.0).toGlColor();
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        // ping pong textures
        this.textures.reverse();
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uSample++;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uRandom = Math.random();
    };
    ;
    PathTracerRenderer.prototype.displayTexture = function () {
        var gl = this.gl;
        // size of the actual canvas. The texture we create is drawn to this item
        var size = document.body.clientWidth;
        if (_Globals__WEBPACK_IMPORTED_MODULE_8__["isMobile"] === false) {
            // not sure why, but this basically becomes full width on my phone
            size = 512;
        }
        gl.canvas.width = size;
        gl.canvas.height = size;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.useProgram(this.toScreenProgram);
        this.textures[0].bind();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.toScreenVertexAttribute, 2, gl.FLOAT, false, 0, 0);
        // display the main screen
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_10__["glUniform"](gl, this.toScreenProgram);
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale = 1.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uXOffset = 0.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uYOffset = 0.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uMode = this.mainView;
        uni.setAll(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"]);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        // display the smaller views
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale = 0.2;
        for (var i = 0; i < this.smallViews.length; i++) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uXOffset = 1.0 - (this.smallViews.length - i - 0.5) * (2 * _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale);
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uYOffset = 1.0 - _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale;
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uMode = this.smallViews[i];
            uni.setAll(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"]);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
    };
    PathTracerRenderer.prototype.swap = function (pos) {
        this.smallViews = [
            RenderMode.Chroma,
            RenderMode.Value,
            RenderMode.Bands,
        ];
        if (this.mainView == this.smallViews[pos]) {
            this.mainView = RenderMode.Artist;
        }
        else {
            this.mainView = this.smallViews[pos];
            this.smallViews[pos] = RenderMode.Artist;
        }
        this.displayTexture();
    };
    return PathTracerRenderer;
}());



/***/ }),

/***/ "./src/PlanesApp.ts":
/*!**************************!*\
  !*** ./src/PlanesApp.ts ***!
  \**************************/
/*! exports provided: PlanesApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesApp", function() { return PlanesApp; });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer */ "./src/Renderer.ts");
/* harmony import */ var _Mat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Mat */ "./src/Mat.ts");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThresholdCtrl */ "./src/ThresholdCtrl.ts");
/* harmony import */ var _PointerEventHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointerEventHandler */ "./src/PointerEventHandler.ts");
/* harmony import */ var _ModelsDropDownMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModelsDropDownMenu */ "./src/ModelsDropDownMenu.ts");
/* harmony import */ var _ModelLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModelLoader */ "./src/ModelLoader.ts");










var PointerMode;
(function (PointerMode) {
    PointerMode[PointerMode["View"] = 0] = "View";
    PointerMode[PointerMode["Light"] = 1] = "Light";
})(PointerMode || (PointerMode = {}));
//const WHITE_COLOR = new htmlColor([255, 255, 255]);
var WHITE_COLOR = new _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"]([255, 250, 242]);
var BLACK_COLOR = new _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"]([0, 0, 0]);
//const BLACK_COLOR = new htmlColor([30, 20, 0]);
var PlanesApp = /** @class */ (function () {
    function PlanesApp(query) {
        this.gl = null;
        this.pointerMode = PointerMode.View;
        this.dirty = true;
        this.loader = new _ModelLoader__WEBPACK_IMPORTED_MODULE_9__["ModelLoader"]();
        this.query = query;
    }
    PlanesApp.prototype.component = function () {
        var div = document.createElement('div');
        div.className = 'PlanesApp';
        var viewContainer = document.createElement('div');
        viewContainer.id = 'ViewContainer';
        viewContainer.className = 'container';
        div.appendChild(viewContainer);
        this.createViewElements(viewContainer);
        div.style.width = this.gl.canvas.width + 'px';
        var ctrlsContainer = document.createElement('div');
        ctrlsContainer.className = 'container';
        ctrlsContainer.id = 'CtrlsContainer';
        div.appendChild(ctrlsContainer);
        this.createCtrlsElements(ctrlsContainer);
        this.loadModel(this.query);
        return div;
    };
    PlanesApp.prototype.createViewElements = function (parent) {
        var _this = this;
        var canvas = document.createElement('canvas');
        canvas.id = 'MainCanvas';
        parent.appendChild(canvas);
        this.overlay = document.createElement('div');
        this.overlay.id = 'Overlay';
        parent.appendChild(this.overlay);
        var size = 512;
        if (_Globals__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
            size = document.body.clientWidth;
        }
        canvas.width = size;
        canvas.height = size;
        this.overlay.style.lineHeight = size + 'px'; // vertically center text
        // why do we have to manually set this height? If we don't it is 515.2 px high
        parent.style.height = size + 'px';
        var context = canvas.getContext('webgl');
        if (!context) {
            // TODO display a message about not being able to create a WebGL context
            console.log("Unable to get WebGL context");
        }
        this.gl = context;
        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](this.gl);
        this.renderer.whiteColor = WHITE_COLOR;
        this.renderer.blackColor = BLACK_COLOR;
        this.renderer.useThresholds = false;
        this.renderer.miniViewUseThresholds = true;
        this.handler = new _PointerEventHandler__WEBPACK_IMPORTED_MODULE_7__["PointerEventHandler"](canvas);
        this.handler.onDrag = function (pos, delta) { return _this.onDrag(pos, delta); };
        this.handler.onClick = function (pos) { return _this.onClick(pos); };
        this.handler.onScale = function (scale, change) { return _this.onScale(scale, change); };
        this.handler.onRotate = function (angle, delta) { return _this.onRotate(angle, delta); };
        this.handler.onTranslate = function (delta) { return _this.onTranslate(delta); };
        Object(_ModelsDropDownMenu__WEBPACK_IMPORTED_MODULE_8__["createModelsDropDownMenu"])(parent, function (file) { return _this.loadModel(file); });
    };
    PlanesApp.prototype.createCtrlsElements = function (parent) {
        var _this = this;
        this.thresholdCtrl = new _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_6__["ThresholdCtrl"](parent, this, function (value) {
            _this.renderer.threshold1 = value;
            _this.updateSliders();
            _this.dirty = true;
        }, function (value) {
            _this.renderer.threshold2 = value;
            _this.updateSliders();
            _this.dirty = true;
        });
        this.highlightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'Highlight',
            label: 'Highlight',
            min: 0,
            max: 100,
            value: this.renderer.highlight * 100,
            colors: [BLACK_COLOR, WHITE_COLOR],
            oninput: function () {
                _this.renderer.highlight = _this.highlightSlider.value / 100;
                _this.updateSliders();
                _this.dirty = true;
            },
            getText: function () { return (100 * _this.renderer.highlight).toFixed(0) + "%"; }
        });
        this.lightLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'LightLight',
            label: 'Light Light',
            min: 0,
            max: 100,
            value: this.renderer.lightLight * 100,
            colors: [BLACK_COLOR, WHITE_COLOR],
            getText: function () { return (100 * _this.renderer.lightLight).toFixed(0) + "%"; }
        });
        this.lightLightSlider.range.disabled = true;
        this.midLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'MidLight',
            label: 'Mid Light',
            min: 0,
            max: 100,
            value: this.renderer.midLight * 100,
            colors: [BLACK_COLOR, WHITE_COLOR],
            getText: function () { return (100 * _this.renderer.midLight).toFixed(0) + "%"; }
        });
        this.midLightSlider.range.disabled = true;
        this.darkLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'DarkLight',
            label: 'Dark Light',
            min: 0,
            max: 100,
            value: this.renderer.darkLight * 100,
            colors: [BLACK_COLOR, WHITE_COLOR],
            getText: function () { return (100 * _this.renderer.darkLight).toFixed(0) + "%"; }
        });
        this.darkLightSlider.range.disabled = true;
        this.shadowSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'Shadow',
            label: 'Shadow',
            min: 0,
            max: 100,
            value: this.renderer.shadow * 100,
            colors: [BLACK_COLOR, WHITE_COLOR],
            oninput: function () {
                _this.renderer.shadow = _this.shadowSlider.value / 100;
                _this.updateSliders();
                _this.dirty = true;
            },
            getText: function () { return (100 * _this.renderer.shadow).toFixed(0) + "%"; }
        });
    };
    PlanesApp.prototype.loadModel = function (query) {
        var _this = this;
        // if nothing was specified, load an interesting model
        if (!query) {
            query = 'Pose_02.blob';
        }
        var lc = query.toLowerCase();
        if (lc.endsWith('.obj') || lc.endsWith('.blob')) {
            var statusFunc = function (status) {
                _this.overlay.innerText = status;
            };
            this.loader.loadModelFile(query, statusFunc)
                .then(function (tObj) {
                _this.renderer.setModel(tObj);
                _this.loader.orient(_this.renderer.obj);
                _this.dirty = true;
                requestAnimationFrame(function () { return _this.tick(); });
            });
        }
        else {
            // TODO multi line error messages not supported
            this.overlay.innerText = 'Unknown Model:' + query;
        }
    };
    PlanesApp.prototype.updateSliders = function () {
        this.highlightSlider.value = 100 * this.renderer.highlight;
        this.lightLightSlider.value = 100 * this.renderer.lightLight;
        this.midLightSlider.value = 100 * this.renderer.midLight;
        this.darkLightSlider.value = 100 * this.renderer.darkLight;
        this.shadowSlider.value = 100 * this.renderer.shadow;
    };
    PlanesApp.prototype.toggleMode = function () {
        switch (this.pointerMode) {
            case PointerMode.View:
                this.pointerMode = PointerMode.Light;
                this.renderer.ballColor = this.renderer.yellow;
                break;
            case PointerMode.Light:
                this.pointerMode = PointerMode.View;
                this.renderer.ballColor = WHITE_COLOR.toGlColor();
                break;
        }
        this.dirty = true;
    };
    PlanesApp.prototype.onDrag = function (pos, delta) {
        this.dirty = true;
        if (this.pointerMode === PointerMode.View) {
            // TODO replace 0.01 with some kind of physical measurement
            this.renderer.obj.rotX(-delta.y * 0.01);
            this.renderer.obj.rotY(-delta.x * 0.01);
        }
        else if (this.pointerMode === PointerMode.Light) {
            var matY = _Mat__WEBPACK_IMPORTED_MODULE_4__["Mat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-delta.x));
            var matX = _Mat__WEBPACK_IMPORTED_MODULE_4__["Mat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-delta.y));
            var vec = new _Vec__WEBPACK_IMPORTED_MODULE_5__["Vec4"]([
                this.renderer.uLightDirection.x,
                this.renderer.uLightDirection.y,
                this.renderer.uLightDirection.z,
                1
            ]);
            vec = matX.multV(vec);
            vec = matY.multV(vec);
            this.renderer.uLightDirection.x = vec.values[0];
            this.renderer.uLightDirection.y = vec.values[1];
            this.renderer.uLightDirection.z = vec.values[2];
            this.dirty = true;
        }
    };
    /**
     * Processes a click/touch event at the designated coordinates.
     *
     * @param x The x coordinate.
     * @param y The y coordinate.
     * @returns true if a hit on one of the views occurs.
     */
    PlanesApp.prototype.onClick = function (pos) {
        var canvasWidth = this.gl.canvas.width;
        var canvasHeight = this.gl.canvas.height;
        var clipSpace = this.renderer.getClipSpace();
        var miniWidth = this.renderer.miniSize * (2 / clipSpace.width) * canvasWidth;
        var miniHeight = this.renderer.miniSize * (2 / clipSpace.height) * canvasHeight;
        if (pos.x < miniWidth && pos.y < miniHeight) {
            this.toggleMode();
            return true;
        }
        else if (pos.x > canvasWidth - miniWidth && pos.y < miniWidth) {
            this.renderer.useThresholds = !this.renderer.useThresholds;
            this.renderer.miniViewUseThresholds = !this.renderer.miniViewUseThresholds;
            this.dirty = true;
            return true;
        }
        // not handled
        return false;
    };
    PlanesApp.prototype.onScale = function (scale, change) {
        this.renderer.zoom(change);
        this.dirty = true;
    };
    PlanesApp.prototype.onRotate = function (angle, delta) {
        this.renderer.obj.rotZ(delta);
        this.dirty = true;
    };
    PlanesApp.prototype.onTranslate = function (delta) {
        var factor = 1;
        if (_Globals__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
            factor = 2;
        }
        this.renderer.translateView(new _Vec__WEBPACK_IMPORTED_MODULE_5__["Vec2"]([
            factor * 2 * delta.x / this.gl.canvas.width,
            factor * 2 * delta.y / this.gl.canvas.height
        ]));
        this.dirty = true;
    };
    PlanesApp.prototype.tick = function () {
        var _this = this;
        if (this.dirty) {
            // TODO only redraw the threshold ctrl if a slider changed
            this.renderer.render();
            this.thresholdCtrl.draw();
            this.dirty = false;
        }
        requestAnimationFrame(function () { return _this.tick(); });
    };
    return PlanesApp;
}());



/***/ }),

/***/ "./src/PointerEventHandler.ts":
/*!************************************!*\
  !*** ./src/PointerEventHandler.ts ***!
  \************************************/
/*! exports provided: PointerEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEventHandler", function() { return PointerEventHandler; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");

var DBL_CLICK_TIME = 300; // ms
/**
 * Utility class for managing touch/mouse events over a html element
 */
var PointerEventHandler = /** @class */ (function () {
    function PointerEventHandler(element) {
        var _this = this;
        this.mouseDown = false;
        this.primaryTouchId = -1;
        this.secondaryTouchId = -1;
        this.element = element;
        // element.ontouch isn't supported on desktop devices so use addEventListener instead
        element.addEventListener('touchstart', function (event) {
            // prevent the browser from using the event
            event.preventDefault();
            // if this is the first touch
            if (event.touches.length === 1) {
                // record the primary touch id
                _this.primaryTouchId = event.touches[0].identifier;
                // send out onDown() and potentially onDblClick() events
                var pos = _this.getPos(event.touches[0]);
                var time = Date.now();
                if (time - _this.lastTouchTime < DBL_CLICK_TIME) {
                    _this.ourDblClick(pos);
                }
                else {
                    _this.ourOnDown(pos);
                }
                _this.lastTouchTime = time;
            }
            // if this is the second touch
            else if (event.touches.length === 2 && _this.primaryTouchId >= 0) {
                // record the secondary touch id. It will always be the second element when
                // there are only two elements
                _this.secondaryTouchId = event.touches[1].identifier;
                // set values for gestures
                var distance = _this.computeTouchDistance(event);
                _this.initialTouchDistance = distance;
                _this.lastTouchDistance = distance;
                _this.lastTouchAngle = _this.computeTouchAngle(event);
                _this.lastTouchCenter = _this.computeTouchCenter(event);
            }
        });
        element.addEventListener('touchmove', function (event) {
            // prevent the browser from using the event
            event.preventDefault();
            // if the initial two touches are active
            if (_this.primaryTouchId >= 0 && _this.secondaryTouchId >= 0) {
                // send out gesture events
                var distance = _this.computeTouchDistance(event);
                var scale = distance / _this.initialTouchDistance;
                var change = distance / _this.lastTouchDistance;
                _this.ourOnScale(scale, change);
                _this.lastTouchDistance = distance;
                var angle = _this.computeTouchAngle(event);
                _this.ourOnRotate(angle, angle - _this.lastTouchAngle);
                _this.lastTouchAngle = angle;
                var center = _this.computeTouchCenter(event);
                // reverse Y values so the bottom is zero instead of the top
                var delta = [center.x - _this.lastTouchCenter.x, _this.lastTouchCenter.y - center.y];
                _this.ourOnTranslate(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"](delta));
                _this.lastTouchCenter = center;
            }
            // if only the initial touch is active
            else if (_this.primaryTouchId >= 0) {
                // send out the drag event
                if (_this.mouseDown) {
                    var touch = _this.getTouch(event, _this.primaryTouchId);
                    var pos = _this.getPos(touch);
                    _this.ourOnDrag(pos);
                }
            }
        });
        element.addEventListener('touchend', function (event) {
            // prevent the browser from using the event
            event.preventDefault();
            if (_this.secondaryTouchId >= 0) {
                if (_this.getTouch(event, _this.secondaryTouchId) === null) {
                    _this.secondaryTouchId = -1;
                    // if we lifted the second finger, but not the first, go back
                    // to the drag gesture, but adjust the rememberd position to
                    // be the current one so that things don't jump
                    var touch = _this.getTouch(event, _this.primaryTouchId);
                    if (touch) {
                        _this.lastPos = _this.getPos(touch);
                    }
                }
            }
            if (_this.primaryTouchId >= 0) {
                if (_this.getTouch(event, _this.primaryTouchId) === null) {
                    _this.primaryTouchId = -1;
                    _this.ourOnUp();
                }
            }
            if (_this.secondaryTouchId === -1 || _this.primaryTouchId === -1) {
                _this.initialTouchDistance = -1;
                _this.lastTouchDistance = -1;
                _this.lastTouchAngle = -1;
                _this.lastTouchCenter = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"]([-1, -1]);
            }
        });
        element.onmousedown = function (event) {
            var pos = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"]([event.layerX, event.layerY]);
            _this.ourOnDown(pos);
            // disable selection because dragging is used for rotating the camera and moving objects
            return false;
        };
        element.onmousemove = function (event) {
            var pos = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"]([event.layerX, event.layerY]);
            if (_this.mouseDown) {
                _this.ourOnDrag(pos);
            }
        };
        element.onmouseup = function (event) {
            _this.ourOnUp();
        };
        element.onmouseleave = function (event) {
            _this.mouseDown = false;
        };
        element.ondblclick = function (event) {
            var pos = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"]([event.layerX, event.layerY]);
            _this.ourDblClick(pos);
        };
    }
    PointerEventHandler.prototype.getTouch = function (event, id) {
        for (var i = 0; i < event.touches.length; i++) {
            var touch = event.touches[i];
            if (touch.identifier === id) {
                return touch;
            }
        }
        // no match was found
        return null;
    };
    PointerEventHandler.prototype.getPos = function (touch) {
        var rect = this.element.getBoundingClientRect();
        return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"]([touch.clientX - rect.x, touch.clientY - rect.y]);
    };
    PointerEventHandler.prototype.getTouches = function (event) {
        if (this.primaryTouchId < 0 || this.secondaryTouchId < 0) {
            throw Error('Two touches expected');
        }
        return {
            primaryTouch: this.getTouch(event, this.primaryTouchId),
            secondaryTouch: this.getTouch(event, this.secondaryTouchId),
        };
    };
    PointerEventHandler.prototype.computeTouchDistance = function (event) {
        var touches = this.getTouches(event);
        var x1 = touches.primaryTouch.screenX;
        var y1 = touches.primaryTouch.screenY;
        var x2 = touches.secondaryTouch.screenX;
        var y2 = touches.secondaryTouch.screenY;
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    };
    PointerEventHandler.prototype.computeTouchAngle = function (event) {
        var touches = this.getTouches(event);
        var x1 = touches.primaryTouch.screenX;
        var y1 = touches.primaryTouch.screenY;
        var x2 = touches.secondaryTouch.screenX;
        var y2 = touches.secondaryTouch.screenY;
        return Math.atan2(y2 - y1, x2 - x1);
    };
    PointerEventHandler.prototype.computeTouchCenter = function (event) {
        var touches = this.getTouches(event);
        var x1 = touches.primaryTouch.screenX;
        var y1 = touches.primaryTouch.screenY;
        var x2 = touches.secondaryTouch.screenX;
        var y2 = touches.secondaryTouch.screenY;
        return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"]([(x1 + x2) / 2, (y1 + y2) / 2]);
    };
    PointerEventHandler.prototype.ourOnDown = function (pos) {
        // check for a click handler
        if (this.onClick && this.onClick(pos.clone())) {
            return;
        }
        // if not handled by a click hander, send the onDown event
        else {
            this.mouseDown = true;
            this.lastPos = pos.clone();
            if (this.onDown) {
                this.onDown(pos.clone());
            }
        }
    };
    PointerEventHandler.prototype.ourOnUp = function () {
        this.mouseDown = false;
        if (this.onUp) {
            this.onUp();
        }
    };
    PointerEventHandler.prototype.ourOnDrag = function (pos) {
        if (this.onDrag) {
            var delta = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec2"]([pos.x - this.lastPos.x, pos.y - this.lastPos.y]);
            this.onDrag(pos.clone(), delta);
        }
        this.lastPos = pos.clone();
    };
    PointerEventHandler.prototype.ourDblClick = function (pos) {
        if (this.onDblClick) {
            this.onDblClick(pos);
        }
    };
    PointerEventHandler.prototype.ourOnScale = function (scale, change) {
        if (this.onScale) {
            this.onScale(scale, change);
        }
    };
    PointerEventHandler.prototype.ourOnRotate = function (angle, delta) {
        if (this.onRotate) {
            this.onRotate(angle, delta);
        }
    };
    PointerEventHandler.prototype.ourOnTranslate = function (delta) {
        if (this.onTranslate) {
            this.onTranslate(delta);
        }
    };
    return PointerEventHandler;
}());



/***/ }),

/***/ "./src/Profiler.ts":
/*!*************************!*\
  !*** ./src/Profiler.ts ***!
  \*************************/
/*! exports provided: Profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/**
 * Utility class for logging timing messages for profile code
 */
var Profiler = /** @class */ (function () {
    function Profiler() {
        // the last time stamp
        this.t = performance.now();
    }
    Object.defineProperty(Profiler.prototype, "elapsedMs", {
        get: function () {
            return (performance.now() - this.t);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Prints a message to console of the elapsed time since the last mark
     *
     * @param msg The message to print with the time
     */
    Profiler.prototype.log = function (msg) {
        console.log(msg + ' ' + this.elapsedMs.toFixed(1) + ' ms');
        this.mark();
    };
    /**
     * Updates the timestamp to now
     */
    Profiler.prototype.mark = function () {
        this.t = performance.now();
    };
    return Profiler;
}());



/***/ }),

/***/ "./src/Renderer.ts":
/*!*************************!*\
  !*** ./src/Renderer.ts ***!
  \*************************/
/*! exports provided: BallImageData, DEFAULT_THRESHOLD1, DEFAULT_THRESHOLD2, Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallImageData", function() { return BallImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THRESHOLD1", function() { return DEFAULT_THRESHOLD1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THRESHOLD2", function() { return DEFAULT_THRESHOLD2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _Mat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mat */ "./src/Mat.ts");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _shaders_ViewerVertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/ViewerVertex.glsl */ "./src/shaders/ViewerVertex.glsl");
/* harmony import */ var _shaders_ViewerFragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/ViewerFragment.glsl */ "./src/shaders/ViewerFragment.glsl");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _glUniform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glUniform */ "./src/glUniform.ts");
/* harmony import */ var _glCompiler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glCompiler */ "./src/glCompiler.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _glObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glObject */ "./src/glObject.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _TextureRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TextureRenderer */ "./src/TextureRenderer.ts");
/* harmony import */ var _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ThresholdCtrl */ "./src/ThresholdCtrl.ts");
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _glClipSpace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glClipSpace */ "./src/glClipSpace.ts");
/* harmony import */ var _TriangleObjBuilder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TriangleObjBuilder */ "./src/TriangleObjBuilder.ts");
/* harmony import */ var _glTexture__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./glTexture */ "./src/glTexture.ts");
/* harmony import */ var _glFrameBuffer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./glFrameBuffer */ "./src/glFrameBuffer.ts");

















var BallImageData = /** @class */ (function () {
    function BallImageData() {
    }
    return BallImageData;
}());

var DEFAULT_THRESHOLD1 = 40;
var DEFAULT_THRESHOLD2 = 70;
var HIGHLIGHT_DIFF = 0.1;
var BALL_RADIUS = 0.5;
var INITIAL_LIGHT_DIRECTION = [1.0, -1.0, -1.5];
var INITIAL_VIEW = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity;
/**
 * Class that renders triangles and a light source
 */
var Renderer = /** @class */ (function () {
    function Renderer(glCtx) {
        this.gl = null;
        this.view = INITIAL_VIEW;
        this.lightView = new _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
        this.projection = new _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
        this.uEye = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 8]); // 4 times the max object dimension of 2. For a model, about 20 ft away
        this.orthographic = false;
        this.uThreshold1 = DEFAULT_THRESHOLD1;
        this.uThreshold2 = DEFAULT_THRESHOLD2;
        this.uHighlight = 1.0;
        this.uShadow = 0.2;
        // size of the smaller view
        this.miniSize = 0.2;
        this.useThresholds = false;
        this.miniViewUseThresholds = true;
        this.uLightDirection = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"](INITIAL_LIGHT_DIRECTION);
        this.ballColor = new _glColor__WEBPACK_IMPORTED_MODULE_9__["glColor3"]([1, 1, 1]);
        this.yellow = new _glColor__WEBPACK_IMPORTED_MODULE_9__["glColor3"]([1.0, 0.9, 0.7]);
        this.whiteColor = new _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"]([255, 255, 255]);
        this.blackColor = new _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"]([0, 0, 0]);
        this.showShadowMap = false;
        this.showMiniView = true;
        this.showFloor = false;
        this.gl = glCtx;
        var gl = this.gl;
        this.computeColors();
        // enable z-buffer
        gl.enable(gl.DEPTH_TEST);
        // enable alpha values
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.program = _glCompiler__WEBPACK_IMPORTED_MODULE_6__["glCompiler"].compile(gl, _shaders_ViewerVertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_ViewerFragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var tBall = new _TriangleObjBuilder__WEBPACK_IMPORTED_MODULE_14__["TriangleObjBuilder"]('Ball');
        tBall.addSphere(50, BALL_RADIUS, new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]));
        tBall.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_7__["NormalType"].Smooth);
        this.ball = new _glObject__WEBPACK_IMPORTED_MODULE_8__["glObject"](gl, tBall, this.program);
        var tArrow = new _TriangleObjBuilder__WEBPACK_IMPORTED_MODULE_14__["TriangleObjBuilder"]('Light Arrow');
        tArrow.addArrow();
        this.arrow = new _glObject__WEBPACK_IMPORTED_MODULE_8__["glObject"](gl, tArrow, this.program);
        this.resize();
    }
    Renderer.prototype.getClipSpace = function () {
        var gl = this.gl;
        var ar = gl.canvas.width / gl.canvas.height;
        if (ar > 1) {
            return new _glClipSpace__WEBPACK_IMPORTED_MODULE_13__["glClipSpace"](new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([-ar, -1, 100]), new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([ar, 1, -100]));
        }
        else {
            return new _glClipSpace__WEBPACK_IMPORTED_MODULE_13__["glClipSpace"](new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([-1, -1 / ar, 100]), new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([1, 1 / ar, -100]));
        }
    };
    Renderer.prototype.resize = function () {
    };
    Renderer.prototype.updateProjectionMatrix = function () {
        var clipSpace = this.getClipSpace();
        if (this.orthographic) {
            this.projection = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makeOrtho(clipSpace.left, clipSpace.right, clipSpace.bottom, clipSpace.top, clipSpace.near, clipSpace.far);
        }
        else {
            var eye = this.uEye;
            var center = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]);
            var up = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 1, 0]);
            var mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makeLookAt(eye, center, up);
            var maxHeight = 2.0;
            var fieldOfView = 2 * Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toDeg"])(Math.atan2(maxHeight / 2, eye.z));
            var aspectRatio = clipSpace.width / clipSpace.height;
            var near = 0.1;
            var far = 20;
            this.projection = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makePerspective(fieldOfView, aspectRatio, near, far).multM(mat);
        }
    };
    //
    // The functions below change our view of the model
    //
    Renderer.prototype.zoom = function (zoom) {
        this.view.scale(zoom);
    };
    Renderer.prototype.translateView = function (delta) {
        this.view.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([delta.x, delta.y, 0]));
    };
    Object.defineProperty(Renderer.prototype, "highlight", {
        get: function () {
            return this.uHighlight;
        },
        set: function (val) {
            this.uHighlight = Math.max(val, HIGHLIGHT_DIFF);
            this.uShadow = Math.min(this.uShadow, this.uHighlight - HIGHLIGHT_DIFF);
            this.computeColors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "lightLight", {
        get: function () {
            return this.uLightLight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "midLight", {
        get: function () {
            return this.uMidLight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "darkLight", {
        get: function () {
            return this.uDarkLight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "shadow", {
        get: function () {
            return this.uShadow;
        },
        set: function (val) {
            this.uShadow = Math.min(val, 1 - HIGHLIGHT_DIFF);
            this.uHighlight = Math.max(this.uHighlight, this.uShadow + HIGHLIGHT_DIFF);
            this.computeColors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "threshold1", {
        get: function () {
            return this.uThreshold1;
        },
        set: function (val) {
            this.uThreshold1 = val;
            this.uThreshold2 = Math.max(this.uThreshold2, val);
            this.computeColors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "threshold2", {
        get: function () {
            return this.uThreshold2;
        },
        set: function (val) {
            this.uThreshold2 = val;
            this.uThreshold1 = Math.min(this.uThreshold1, val);
            this.computeColors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "tObj", {
        get: function () {
            return this.obj.tObj;
        },
        enumerable: true,
        configurable: true
    });
    Renderer.prototype.colorAt = function (deg) {
        deg = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(deg, 0, 90);
        return Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["mix"])(this.uShadow, this.uHighlight - HIGHLIGHT_DIFF, Math.cos(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(deg)));
    };
    Renderer.prototype.computeColors = function () {
        this.uLightLight = this.colorAt(0.5 * this.threshold1);
        this.uMidLight = this.colorAt(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["mix"])(this.threshold1, this.threshold2, 0.5));
        this.uDarkLight = this.colorAt((this.threshold2 + 90) / 2);
    };
    Renderer.prototype.setModel = function (tObj) {
        if (this.obj) {
            this.obj.delete();
        }
        this.obj = new _glObject__WEBPACK_IMPORTED_MODULE_8__["glObject"](this.gl, tObj, this.program);
        var center = tObj.center;
        this.obj.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([-center.x, -center.y, -center.z]));
        var scale = 2.0 / Math.sqrt(tObj.width * tObj.width + tObj.height * tObj.height + tObj.depth * tObj.depth);
        this.obj.scale(scale);
        this.obj.xForm.snap();
        if (this.floor) {
            this.floor.delete;
        }
        var tFloor = new _TriangleObjBuilder__WEBPACK_IMPORTED_MODULE_14__["TriangleObjBuilder"]('Floor');
        // make the floor size slightly larger than the object, centered at the bottom
        var radius = 4;
        var pos = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, -scale * tObj.height / 2, 0]);
        tFloor.addDisk(50, radius, pos);
        this.floor = new _glObject__WEBPACK_IMPORTED_MODULE_8__["glObject"](this.gl, tFloor, this.program);
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_5__["glUniform"](this.gl, this.program);
        uni.set('uFloorCenter', tFloor.center);
        uni.set('uFloorRadius', radius);
        // reset the view and the light
        this.resetView();
        this.uLightDirection = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"](INITIAL_LIGHT_DIRECTION);
    };
    Renderer.prototype.resetView = function () {
        this.view = INITIAL_VIEW.clone();
    };
    Renderer.prototype.render = function () {
        var gl = this.gl;
        var style = getComputedStyle(gl.canvas);
        var color = _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"].fromCss(style.backgroundColor).toGlColor();
        gl.clearColor(color.r, color.g, color.b, 1);
        this.updateProjectionMatrix();
        this.setStdUniforms();
        this.renderToShadowMap();
        this.renderToScreen();
    };
    Renderer.prototype.setStdUniforms = function () {
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_5__["glUniform"](this.gl, this.program);
        uni.set('view', this.view);
        uni.set('lightView', this.lightView);
        uni.set('projection', this.projection);
        uni.set('uEye', this.uEye);
        uni.set('uOrthographic', this.orthographic);
        uni.set('uLightDirection', this.uLightDirection);
        uni.set('uUseShadows', true);
        uni.set('uUseThresholds', this.useThresholds ? 1 : 0, true);
        uni.set('uThreshold1', 1 - Math.sin(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(this.threshold1 + 90)));
        uni.set('uThreshold2', 1 - Math.sin(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(this.threshold2 + 90)));
        uni.set('uLightIntensity', this.uHighlight - this.uShadow - HIGHLIGHT_DIFF);
        uni.set('uAmbientIntensity', this.uShadow);
        uni.set('uHighlight', this.uHighlight);
        uni.set('uLightLight', this.uLightLight);
        uni.set('uMidLight', this.uMidLight);
        uni.set('uDarkLight', this.uDarkLight);
        uni.set('uShadow', this.uShadow);
        uni.set('uWhiteColor', this.whiteColor.toGlColor());
        uni.set('uBlackColor', this.blackColor.toGlColor());
        return uni;
    };
    Renderer.prototype.getBallImage = function () {
        var gl = this.gl;
        if (!this.tCtrlFrameBuffer) {
            this.tCtrlFrameBuffer = new _glFrameBuffer__WEBPACK_IMPORTED_MODULE_16__["glFrameBuffer"](gl, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"]);
            this.tCtrlColorTexture = this.tCtrlFrameBuffer.createTexture(_glTexture__WEBPACK_IMPORTED_MODULE_15__["glTextureStyle"].Color);
            this.tCtrlDepthTexture = this.tCtrlFrameBuffer.createTexture(_glTexture__WEBPACK_IMPORTED_MODULE_15__["glTextureStyle"].Depth);
            this.tCtrlFrameBuffer.attachTexture(gl.COLOR_ATTACHMENT0, this.tCtrlColorTexture);
            this.tCtrlFrameBuffer.attachTexture(gl.DEPTH_ATTACHMENT, this.tCtrlDepthTexture);
            this.tCtrlFrameBuffer.check();
            // Unbind these new objects, which makes the default frame buffer the
            // target for rendering.
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
        gl.viewport(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"]);
        this.tCtrlColorTexture.bind();
        this.tCtrlFrameBuffer.bind();
        this.tCtrlFrameBuffer.attachTexture(gl.COLOR_ATTACHMENT0, this.tCtrlColorTexture);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.useProgram(this.program);
        var style = getComputedStyle(gl.canvas);
        var color = _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"].fromCss(style.backgroundColor).toGlColor();
        gl.clearColor(color.r, color.g, color.b, 1);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
        var uni = this.setStdUniforms();
        // always render with bands
        uni.set('uUseThresholds', true);
        // shoot the light straight down
        uni.set('uLightDirection', new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, -1, 0]));
        // don't cast shadows
        uni.set('uUseShadows', false);
        uni.set('view', new _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"]());
        // move the ball to the lower left and partially offscreen
        var scale = 1.75;
        var offset = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([-0.6, -0.6, 0]);
        this.ball.clearTransforms();
        this.ball.scale(scale);
        this.ball.translate(offset);
        // render the ball
        this.ball.draw();
        this.ball.clearTransforms();
        // draw the arrow
        uni.set('uLightDirection', new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([1, -0.5, -0.5]));
        uni.set('uUseThresholds', false);
        // first reset things so that we're looking down the z-axis
        this.arrow.clearTransforms();
        this.arrow.scale(1.25);
        this.arrow.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([offset.x, offset.y + scale * BALL_RADIUS + 0.1, 0.0]));
        uni.set('uWhiteColor', new _glColor__WEBPACK_IMPORTED_MODULE_9__["glColor3"]([1.0, 1.0, 0.5]));
        uni.set('uBlackColor', _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"].black.toGlColor());
        uni.set('uAmbientIntensity', 0.4);
        this.arrow.draw();
        var pixels = new Uint8Array(_ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"] * _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"] * 4);
        gl.readPixels(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"], gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        // create the data structure we'll return
        var data = new BallImageData();
        data.image = new ImageData(new Uint8ClampedArray(pixels), _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_11__["textureSize"]);
        // convert from [-1,1] drawing space to [0,1]
        data.ballRadius = scale * BALL_RADIUS;
        data.ballCenter = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"]([offset.x, offset.y]);
        data.ballRadius /= 2;
        data.ballCenter.x = 0.5 * (data.ballCenter.x + 1);
        data.ballCenter.y = 0.5 * (data.ballCenter.y + 1);
        return data;
    };
    Renderer.prototype.renderToShadowMap = function () {
        var gl = this.gl;
        if (!this.shadowFrameBuffer) {
            var size = 1024;
            this.shadowFrameBuffer = new _glFrameBuffer__WEBPACK_IMPORTED_MODULE_16__["glFrameBuffer"](gl, size, size);
            this.shadowColorTexture = this.shadowFrameBuffer.createTexture(_glTexture__WEBPACK_IMPORTED_MODULE_15__["glTextureStyle"].Color);
            this.shadowDepthTexture = this.shadowFrameBuffer.createTexture(_glTexture__WEBPACK_IMPORTED_MODULE_15__["glTextureStyle"].Depth);
            this.shadowFrameBuffer.attachTexture(gl.COLOR_ATTACHMENT0, this.shadowColorTexture);
            this.shadowFrameBuffer.attachTexture(gl.DEPTH_ATTACHMENT, this.shadowDepthTexture);
            this.shadowFrameBuffer.check();
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
        gl.viewport(0, 0, this.shadowFrameBuffer.width, this.shadowFrameBuffer.height);
        this.shadowFrameBuffer.bind();
        gl.useProgram(this.program);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
        var center = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]);
        var up = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 1, 0]);
        var eye = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([-this.uLightDirection.x, -this.uLightDirection.y, -this.uLightDirection.z]);
        var mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makeLookAt(eye, center, up);
        mat.set(0, 3, 0);
        mat.set(1, 3, 0);
        mat.set(2, 3, 0);
        // to avoid clipping, expand the z range to allow full projation of
        // anything in a 3-3-3 cube.
        var maxSize = Math.sqrt(27);
        mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makeOrtho(-1, 1, -1, 1, maxSize, -maxSize).multM(mat);
        this.lightView = mat;
        var uni = this.setStdUniforms();
        // change the view matrix so that our view is from the light
        uni.set('view', this.lightView);
        uni.set('projection', _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity);
        // don't try to use the shadow texture while we're creating it
        uni.set('uUseShadows', false);
        this.obj.draw();
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    Renderer.prototype.renderToScreen = function () {
        var gl = this.gl;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        // display the depth buffer for testing purposes
        if (this.showShadowMap) {
            var tr = new _TextureRenderer__WEBPACK_IMPORTED_MODULE_10__["TextureRenderer"](gl);
            tr.render(this.shadowDepthTexture.get(), this.shadowFrameBuffer.width, this.shadowFrameBuffer.height);
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
        else {
            gl.useProgram(this.program);
            this.shadowDepthTexture.bind();
            gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
            // draw the main object
            var uni = this.setStdUniforms();
            this.obj.draw();
            if (this.showFloor) {
                uni.set('uShowFloor', true);
                this.floor.xForm.mat = this.obj.xForm.mat.clone();
                // cull polygons so we don't see the floor from below
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.BACK);
                this.floor.draw();
                gl.disable(gl.CULL_FACE);
                uni.set('uShowFloor', false);
            }
            gl.clear(gl.DEPTH_BUFFER_BIT);
            this.drawMiniView();
            this.drawBall();
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
    };
    Renderer.prototype.drawMiniView = function () {
        var uni = this.setStdUniforms();
        uni.set('projection', _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].ortho);
        // draw the object in the upper right at a reduced size
        var view = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity;
        view.scale(this.miniSize);
        var clipSpace = this.getClipSpace();
        view.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([clipSpace.max.x - this.miniSize, clipSpace.max.y - this.miniSize, 0]));
        uni.set('view', view);
        uni.set('uUseThresholds', this.miniViewUseThresholds ? 0 : 1, true);
        this.obj.draw();
    };
    Renderer.prototype.drawBall = function () {
        var uni = this.setStdUniforms();
        uni.set('projection', _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].ortho);
        // stop using the shadowmap
        uni.set('uUseShadows', false);
        var view = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity;
        view.scale(this.miniSize);
        var clipSpace = this.getClipSpace();
        view.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([clipSpace.min.x + this.miniSize, clipSpace.max.y - this.miniSize, 0]));
        uni.set('view', view);
        uni.set('uUseThresholds', this.useThresholds ? 1 : 0, true);
        uni.set('uWhiteColor', this.ballColor);
        uni.set('uBlackColor', _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"].black.toGlColor());
        this.ball.draw();
        uni.set('uLightDirection', new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([1, -0.5, -0.5]));
        uni.set('uUseThresholds', 0, true);
        // back out angles as if looking down the z-axis
        var x = this.uLightDirection.x;
        var y = this.uLightDirection.y;
        var z = this.uLightDirection.z;
        // start by looking down from the Z direction
        var radius = Math.sqrt(x * x + y * y + z * z);
        var elevationAngle = Math.acos(z / radius);
        var rotationAngle = Math.atan2(y, x);
        // first reset things so that we're looking down the z-axis
        this.arrow.clearTransforms();
        this.arrow.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0.0, 0.55, 0.0]));
        this.arrow.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(90));
        // rotate to match the light source
        this.arrow.rotY(-elevationAngle);
        this.arrow.rotZ(-rotationAngle);
        uni.set('uWhiteColor', this.yellow);
        uni.set('uBlackColor', _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"].black.toGlColor());
        uni.set('uAmbientIntensity', 0.4);
        this.arrow.draw();
    };
    /**
     * Processes a click/touch event at the designated coordinates. If a hit
     * occurs, the clicked on view is swapped for the primary view and true
     * is returned. If no hit occurs, false is returned.
     *
     * @param x The x coordinate [0-1].
     * @param y The y coordinate [0-1].
     * @returns true if a hit on one of the views occurs.
     */
    Renderer.prototype.click = function (x, y) {
        // TODO adjust for aspect ratio
        if (this.showMiniView) {
            if (x > (1 - this.miniSize) && y > (1 - this.miniSize)) {
                this.useThresholds = !this.useThresholds;
                this.render();
                return true;
            }
        }
        return false;
    };
    return Renderer;
}());



/***/ }),

/***/ "./src/Slider.ts":
/*!***********************!*\
  !*** ./src/Slider.ts ***!
  \***********************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _ColorRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorRange */ "./src/ColorRange.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _htmlColorWithAlpha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlColorWithAlpha */ "./src/htmlColorWithAlpha.ts");




/**
 * Class representing a slider composed of a label, input range, color span and value span
 */
var Slider = /** @class */ (function () {
    /**
     * @param parent The parent html object.
     * @param setup The setup data object
     */
    function Slider(parent, setup) {
        var _this = this;
        this._getText = setup.getText;
        var div = document.createElement('div');
        div.id = setup.id;
        div.className = 'SliderDiv';
        parent.appendChild(div);
        var label = document.createElement('label');
        label.id = setup.id + 'Label';
        label.className = 'SliderLabel';
        label.innerText = setup.label;
        div.appendChild(label);
        this._range = document.createElement('input');
        this._range.type = 'range';
        this._range.id = setup.id + 'Range';
        this._range.className = 'SliderRange';
        this._range.min = setup.min.toString();
        this._range.max = setup.max.toString();
        this._range.value = setup.value.toString();
        this._range.addEventListener('input', function () {
            _this.updateSpanColor();
            _this.updateSpanText();
        });
        div.appendChild(this._range);
        if (setup.colors) {
            this._colorSpan = document.createElement('span');
            this._colorSpan.id = setup.id + 'ColorSpan';
            this._colorSpan.className = 'SliderColorSpan';
            div.appendChild(this._colorSpan);
            // set the initial color.
            this.colors = setup.colors;
        }
        this._valueSpan = document.createElement('span');
        this._valueSpan.id = setup.id + 'ValueSpan';
        this._valueSpan.className = 'SliderValueSpan';
        //      this._valueSpan.innerText = setup.value.toString();
        div.appendChild(this._valueSpan);
        // set the initial span text
        this.updateSpanText();
        this._range.oninput = setup.oninput;
    }
    /**
     * Sets the span color to the currently selected color.
     */
    Slider.prototype.updateSpanColor = function () {
        if (this._colors) {
            var val = (this.value - this.min) / (this.max - this.min);
            var color = _htmlColor__WEBPACK_IMPORTED_MODULE_0__["htmlColor"].fromColor(this._colors.get(val));
            this._colorSpan.style.backgroundColor = color.toHex();
        }
    };
    /**
  * Sets the span color to the currently selected color.
  */
    Slider.prototype.updateSpanText = function () {
        if (this._getText) {
            this._valueSpan.innerText = this._getText(this);
        }
    };
    Object.defineProperty(Slider.prototype, "range", {
        /**
         * Gets the html range object
         *
         * @returns The html range object.
         */
        get: function () {
            return this._range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "value", {
        /**
         * Gets the current slider value
         *
         * @returns the current slider value
         */
        get: function () {
            return this._range.valueAsNumber;
        },
        /**
         * Sets the value of the slider (and associated content)
         *
         * @param val the desired slider value
         */
        set: function (val) {
            this._range.valueAsNumber = val;
            this.updateSpanColor();
            this.updateSpanText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "min", {
        /**
         * Gets the min slider value.
         *
         * @returns The min slider value.
         */
        get: function () {
            return parseFloat(this._range.min);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "max", {
        /**
         * Gets the max slider value.
         *
         * @returns The max slider value.
         */
        get: function () {
            return parseFloat(this._range.max);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "colors", {
        /**
         * Sets the color for the slider
         */
        set: function (colors) {
            // store the colors
            this._colors = new _ColorRange__WEBPACK_IMPORTED_MODULE_1__["ColorRange"](colors);
            // build the gradient style for the range object
            var gradientStr = '90deg';
            for (var i = 0; i < colors.length; i++) {
                gradientStr += ', ' + colors[i].toCss();
            }
            this._range.style.background = 'linear-gradient(' + gradientStr + ')';
            // update the span color too
            this.updateSpanColor();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "htmlColor", {
        /**
         * Gets the current color as an htmlColor object.
         *
         * @returns The current color.
         */
        get: function () {
            if (this._colors) {
                var val = (this.value - this.min) / (this.max - this.min);
                return this._colors.get(val);
            }
            else {
                return _htmlColorWithAlpha__WEBPACK_IMPORTED_MODULE_3__["htmlColorWithAlpha"].transparent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "glColor", {
        /**
         * Gets the current color as a glColor object.
         *
         * @returns The current color.
         */
        get: function () {
            if (this._colors) {
                var val = (this.value - this.min) / (this.max - this.min);
                return this._colors.get(val).toGlColor();
            }
            else {
                return new _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor3"]([0, 0, 0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Slider;
}());



/***/ }),

/***/ "./src/SphericalCoord.ts":
/*!*******************************!*\
  !*** ./src/SphericalCoord.ts ***!
  \*******************************/
/*! exports provided: SphericalCoord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SphericalCoord", function() { return SphericalCoord; });
/**
 * Spherical coordinates based on the WebGL viewing system: x=left-right, y=up-down, z=near-far
 */
var SphericalCoord = /** @class */ (function () {
    /**
     * @param radius
     * @param elevationAngle
     * @param rotationAngle
     */
    function SphericalCoord(radius, elevationAngle, rotationAngle) {
        /**
         * The distance from the origin to the point
         */
        this.radius = 0;
        /**
         * The elevation from the floor to the point. 0 and 180 are on the
         * floor. 90 points up.
         */
        this.elevationAngle = 0;
        /**
         * The angle, when looking down from the top, to the point. 0 points right.
         */
        this.rotationAngle = 0;
        this.radius = radius;
        this.elevationAngle = elevationAngle;
        this.rotationAngle = rotationAngle;
    }
    /**
     * Creates a spherical coordinate from a cartesian point
     *
     * @param pos The cartesian point.
     * @returns The spherical coordinate.
     */
    SphericalCoord.fromXYZ = function (pos) {
        var x = pos[0];
        var y = pos[1];
        var z = pos[2];
        var radius = Math.sqrt(x * x + y * y + z * z);
        var rotationAngle = (180 / Math.PI) * Math.atan2(z, x);
        var elevationAngle = (180 / Math.PI) * Math.asin(y / radius);
        return new SphericalCoord(radius, elevationAngle, rotationAngle);
    };
    /**
     * Converts this spherical coordinate to a cartesian coordinate.
     *
     * @returns The cartesian coordinate.
     */
    SphericalCoord.prototype.toXYZ = function () {
        var floorRadius = this.radius * Math.cos((Math.PI / 180) * this.elevationAngle);
        var x = floorRadius * Math.cos((Math.PI / 180) * this.rotationAngle);
        var y = this.radius * Math.sin((Math.PI / 180) * this.elevationAngle);
        var z = floorRadius * Math.sin((Math.PI / 180) * this.rotationAngle);
        return [x, y, z];
    };
    return SphericalCoord;
}());



/***/ }),

/***/ "./src/TextureRenderer.ts":
/*!********************************!*\
  !*** ./src/TextureRenderer.ts ***!
  \********************************/
/*! exports provided: TextureRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureRenderer", function() { return TextureRenderer; });
/* harmony import */ var _shaders_TextureRendererVertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/TextureRendererVertex.glsl */ "./src/shaders/TextureRendererVertex.glsl");
/* harmony import */ var _shaders_TextureRendererFragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/TextureRendererFragment.glsl */ "./src/shaders/TextureRendererFragment.glsl");
/* harmony import */ var _glCompiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glCompiler */ "./src/glCompiler.ts");



/**
 * Class that does the work of building the Path Traced texture
 */
var TextureRenderer = /** @class */ (function () {
    function TextureRenderer(glCtx) {
        this.gl = null;
        this.vertices = [
            -1, -1,
            -1, +1,
            +1, -1,
            +1, +1
        ];
        this.gl = glCtx;
        var gl = this.gl;
        // create vertex buffer - the block we'll draw our rendered texture on
        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        // create shader
        this.program = _glCompiler__WEBPACK_IMPORTED_MODULE_2__["glCompiler"].compile(gl, _shaders_TextureRendererVertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"], _shaders_TextureRendererFragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.vertexAttribute = gl.getAttribLocation(this.program, 'vertex');
        gl.enableVertexAttribArray(this.vertexAttribute);
    }
    TextureRenderer.prototype.render = function (texture, width, height) {
        var gl = this.gl;
        gl.viewport((gl.canvas.width - width) / 2, (gl.canvas.height - height) / 2, width, height);
        gl.useProgram(this.program);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.vertexAttribute, 2, gl.FLOAT, false, 0, 0);
        // display the main screen
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    return TextureRenderer;
}());



/***/ }),

/***/ "./src/ThresholdCtrl.ts":
/*!******************************!*\
  !*** ./src/ThresholdCtrl.ts ***!
  \******************************/
/*! exports provided: textureSize, displaySize, ThresholdCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textureSize", function() { return textureSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySize", function() { return displaySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThresholdCtrl", function() { return ThresholdCtrl; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _PointerEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointerEventHandler */ "./src/PointerEventHandler.ts");



// TODO make these variables
var textureSize = 256;
var displaySize = 150;
var NOMINAL_DISPLAY_SIZE = 150;
var NOMINAL_KNOB_LENGTH = 25;
var NOMINAL_KNOB_RADIUS = 10;
var ThresholdCtrl = /** @class */ (function () {
    function ThresholdCtrl(parent, app, onThreshold1Change, onThreshold2Change) {
        var _this = this;
        this.mouseOffset = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
        this.hit = 0;
        if (_Globals__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
            displaySize = 300;
        }
        this.app = app;
        this.onThreshold1Change = onThreshold1Change;
        this.onThreshold2Change = onThreshold2Change;
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'ThresholdCanvas';
        this.canvas.width = displaySize;
        this.canvas.height = displaySize;
        parent.appendChild(this.canvas);
        this.hiddenCanvas = document.createElement('canvas');
        this.hiddenCanvas.width = textureSize;
        this.hiddenCanvas.height = textureSize;
        this.hiddenCanvas.style.display = 'none';
        parent.appendChild(this.hiddenCanvas);
        this.handler = new _PointerEventHandler__WEBPACK_IMPORTED_MODULE_2__["PointerEventHandler"](this.canvas);
        this.handler.onDown = function (pos) { return _this.onDown(pos); };
        this.handler.onDrag = function (pos, delta) { return _this.onDrag(pos, delta); };
    }
    ThresholdCtrl.prototype.onDown = function (pos) {
        this.hitTest(pos);
    };
    ThresholdCtrl.prototype.hitTest = function (pos) {
        var d1 = this.p1.distance(pos);
        var d2 = this.p2.distance(pos);
        var HIT_RADIUS = NOMINAL_KNOB_RADIUS * (displaySize / NOMINAL_DISPLAY_SIZE);
        if (d1 < HIT_RADIUS && d1 <= d2) {
            this.hit = 1;
            this.mouseOffset = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"]([this.p1.x - pos.x, this.p1.y - pos.y]);
        }
        else if (d2 < HIT_RADIUS && d2 <= d1) {
            this.hit = 2;
            this.mouseOffset = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"]([this.p2.x - pos.x, this.p2.y - pos.y]);
        }
        else {
            this.hit = 0;
        }
    };
    ThresholdCtrl.prototype.onDrag = function (pos, delta) {
        if (this.hit > 0) {
            var hitPt = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"]([pos.x + this.mouseOffset.x, pos.y + this.mouseOffset.y]);
            hitPt.x = Math.max(hitPt.x, this.ballCenter.x);
            hitPt.y = Math.min(hitPt.y, this.ballCenter.y);
            var radius = this.ballCenter.distance(hitPt);
            var angle = Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["toDeg"])(Math.asin((hitPt.x - this.ballCenter.x) / radius)), 0, 90);
            if (this.hit == 1) {
                this.onThreshold1Change(angle);
            }
            else {
                this.onThreshold2Change(angle);
            }
        }
    };
    ThresholdCtrl.prototype.draw = function () {
        var ballImageData = this.app.renderer.getBallImage();
        this.hiddenCanvas.getContext('2d').putImageData(ballImageData.image, 0, 0);
        var ctx = this.canvas.getContext('2d');
        ctx.resetTransform();
        ctx.translate(0, displaySize / 2);
        ctx.scale(displaySize / textureSize, -displaySize / textureSize);
        ctx.drawImage(this.hiddenCanvas, 0, -textureSize / 2);
        ctx.resetTransform();
        this.ballCenter = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"]([
            displaySize * ballImageData.ballCenter.x,
            displaySize * (1 - ballImageData.ballCenter.y)
        ]);
        ctx.fillStyle = 'limegreen';
        ctx.strokeStyle = 'black';
        var KNOB_LENGTH = NOMINAL_KNOB_LENGTH * (displaySize / NOMINAL_DISPLAY_SIZE);
        var KNOB_RADIUS = NOMINAL_KNOB_RADIUS * (displaySize / NOMINAL_DISPLAY_SIZE);
        var r = displaySize * ballImageData.ballRadius;
        var s1 = this.getPt(this.ballCenter, this.app.renderer.threshold1, r);
        this.p1 = this.getPt(this.ballCenter, this.app.renderer.threshold1, r + KNOB_LENGTH);
        var s2 = this.getPt(this.ballCenter, this.app.renderer.threshold2, r);
        this.p2 = this.getPt(this.ballCenter, this.app.renderer.threshold2, r + KNOB_LENGTH);
        ctx.lineWidth = (1 / 150) * displaySize;
        ctx.beginPath();
        ctx.moveTo(s1.x, s1.y);
        ctx.lineTo(this.p1.x, this.p1.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.p1.x, this.p1.y, KNOB_RADIUS, 0, Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["toRad"])(360));
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(s2.x, s2.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.p2.x, this.p2.y, KNOB_RADIUS, 0, Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["toRad"])(360));
        ctx.fill();
        ctx.stroke();
    };
    ThresholdCtrl.prototype.getPt = function (center, threshold, radius) {
        var oy = radius * Math.sin(Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["toRad"])(90 - threshold));
        var ox = radius * Math.cos(Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["toRad"])(90 - threshold));
        return new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec2"]([center.x + ox, center.y - oy]);
    };
    return ThresholdCtrl;
}());



/***/ }),

/***/ "./src/TriangleObj.ts":
/*!****************************!*\
  !*** ./src/TriangleObj.ts ***!
  \****************************/
/*! exports provided: NormalType, TriangleObjData, TriangleObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalType", function() { return NormalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObjData", function() { return TriangleObjData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObj", function() { return TriangleObj; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/IndexedTriangle.ts");
/* harmony import */ var _Volume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Volume */ "./src/Volume.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _BlobFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlobFile */ "./src/BlobFile.ts");
/* harmony import */ var _IndexedVec3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IndexedVec3 */ "./src/IndexedVec3.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var NormalType;
(function (NormalType) {
    NormalType[NormalType["Smooth"] = 0] = "Smooth";
    NormalType[NormalType["Flat"] = 1] = "Flat";
})(NormalType || (NormalType = {}));
var TriangleObjData = /** @class */ (function () {
    function TriangleObjData() {
    }
    return TriangleObjData;
}());

/**
 * Class used to compute normals for vertices that join multiple faces
 */
var MultiNormVertex = /** @class */ (function () {
    function MultiNormVertex() {
        this.normals = [];
    }
    /**
     * Stores a normal for this vertex
     *
     * @param normal Stores a normal for the vertex
     */
    MultiNormVertex.prototype.push = function (normal) {
        this.normals.push(normal);
    };
    Object.defineProperty(MultiNormVertex.prototype, "normal", {
        /**
         * Computes the normal by averaging all the individual normals associated with the vertex
         */
        get: function () {
            var n = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
            for (var i = 0; i < this.normals.length; i++) {
                n.x += this.normals[i].x;
                n.y += this.normals[i].y;
                n.z += this.normals[i].z;
            }
            n.x /= this.normals.length;
            n.y /= this.normals.length;
            n.z /= this.normals.length;
            return n;
        },
        enumerable: true,
        configurable: true
    });
    return MultiNormVertex;
}());
/**
 * Base class for representing an object from a bunch of triangles. The class
 * efficiently manages the triangles by storing them in volumes and by
 * passing them to WebGL using Uniform Buffers
 */
var TriangleObj = /** @class */ (function () {
    function TriangleObj(name) {
        this.vertices = [];
        this.normals = [];
        this.indices = [];
        this.boxMin = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]);
        this.boxMax = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]);
        this.volumes = [];
        this.name = name;
    }
    Object.defineProperty(TriangleObj.prototype, "numVertices", {
        get: function () {
            return this.vertices.length / 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "numTriangles", {
        get: function () {
            return this.indices.length / 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "width", {
        get: function () {
            return this.boxMax.x - this.boxMin.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "height", {
        get: function () {
            return this.boxMax.y - this.boxMin.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "depth", {
        get: function () {
            return this.boxMax.z - this.boxMin.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "center", {
        get: function () {
            return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([
                (this.boxMin.x + this.boxMax.x) / 2,
                (this.boxMin.y + this.boxMax.y) / 2,
                (this.boxMin.z + this.boxMax.z) / 2,
            ]);
        },
        enumerable: true,
        configurable: true
    });
    TriangleObj.prototype.getTriangle = function (index) {
        var i1 = this.indices[3 * index + 0];
        var i2 = this.indices[3 * index + 1];
        var i3 = this.indices[3 * index + 2];
        return new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, this.normals, i1, i2, i3);
    };
    /**
     * Scales the object to the specified size and centers it about (0,0,0)
     *
     * @param size The max size for the width, height, and depth
     */
    TriangleObj.prototype.autoCenter = function (size) {
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        var trans = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([
            -(this.boxMax.x + this.boxMin.x) / 2,
            -(this.boxMax.y + this.boxMin.y) / 2,
            -(this.boxMax.z + this.boxMin.z) / 2,
        ]);
        var scale = size / Math.max(this.width, this.height, this.depth);
        for (var i = 0; i < this.numVertices; i++) {
            var v = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_6__["IndexedVec3"](this.vertices, i);
            v.x = (v.x + trans.x) * scale;
            v.y = (v.y + trans.y) * scale;
            v.z = (v.z + trans.z) * scale;
        }
        this.boxMin.x = (this.boxMin.x + trans.x) * scale;
        this.boxMin.y = (this.boxMin.y + trans.y) * scale;
        this.boxMin.z = (this.boxMin.z + trans.z) * scale;
        this.boxMax.x = (this.boxMax.x + trans.x) * scale;
        this.boxMax.y = (this.boxMax.y + trans.y) * scale;
        this.boxMax.z = (this.boxMax.z + trans.z) * scale;
        for (var i = 0; i < this.volumes.length; i++) {
            var v = this.volumes[i];
            v.boxMin.x = (v.boxMin.x + trans.x) * scale;
            v.boxMin.y = (v.boxMin.y + trans.y) * scale;
            v.boxMin.z = (v.boxMin.z + trans.z) * scale;
            v.boxMax.x = (v.boxMax.x + trans.x) * scale;
            v.boxMax.y = (v.boxMax.y + trans.y) * scale;
            v.boxMax.z = (v.boxMax.z + trans.z) * scale;
        }
        p.log('autoAdjust()');
    };
    /**
     * Shift the object in space.
     *
     * @param offset The amount to shift
     */
    TriangleObj.prototype.translate = function (offset) {
        for (var i = 0; i < this.numVertices; i++) {
            var v = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_6__["IndexedVec3"](this.vertices, i);
            v.x += offset.x;
            v.y += offset.y;
            v.z += offset.z;
        }
        this.boxMin.x += offset.x;
        this.boxMin.y += offset.y;
        this.boxMin.z += offset.z;
        this.boxMax.x += offset.x;
        this.boxMax.y += offset.y;
        this.boxMax.z += offset.z;
        for (var i = 0; i < this.volumes.length; i++) {
            var vol = this.volumes[i];
            vol.boxMin.x += offset.x;
            vol.boxMin.y += offset.y;
            vol.boxMin.z += offset.z;
            vol.boxMax.x += offset.x;
            vol.boxMax.y += offset.y;
            vol.boxMax.z += offset.z;
        }
    };
    /**
     * Breaks the object into evenly spaced volumes. The number of volumes is automatically
     * determined based on the number of triangles.
     */
    TriangleObj.prototype.breakIntoVolumes = function () {
        var numSteps;
        if (this.numTriangles < 40) {
            numSteps = 1;
        }
        else if (this.numTriangles < 1500) {
            numSteps = 2;
        }
        else {
            numSteps = 3;
        }
        this.volumes = [];
        for (var i = 0; i < Math.pow(numSteps, 3); i++) {
            this.volumes.push(new _Volume__WEBPACK_IMPORTED_MODULE_2__["Volume"]());
        }
        for (var i = 0; i < this.numTriangles; i++) {
            var t = this.getTriangle(i);
            var x = Math.floor(numSteps * (t.minX - this.boxMin.x) / (this.boxMax.x - this.boxMin.x));
            var y = Math.floor(numSteps * (t.minY - this.boxMin.y) / (this.boxMax.y - this.boxMin.y));
            var z = Math.floor(numSteps * (t.minZ - this.boxMin.z) / (this.boxMax.z - this.boxMin.z));
            x = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(x, 0, numSteps - 1);
            y = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(y, 0, numSteps - 1);
            z = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(z, 0, numSteps - 1);
            var index = x + y * numSteps + z * numSteps * numSteps;
            this.volumes[index].push(t);
        }
    };
    TriangleObj.prototype.updateBounds = function (v) {
        this.boxMin.x = Math.min(this.boxMin.x, v.x);
        this.boxMin.y = Math.min(this.boxMin.y, v.y);
        this.boxMin.z = Math.min(this.boxMin.z, v.z);
        this.boxMax.x = Math.max(this.boxMax.x, v.x);
        this.boxMax.y = Math.max(this.boxMax.y, v.y);
        this.boxMax.z = Math.max(this.boxMax.z, v.z);
    };
    TriangleObj.prototype.pushQuad = function (v1, v2, v3, v4) {
        this.pushTriangle(v1, v2, v3);
        this.pushTriangle(v2, v4, v3);
    };
    TriangleObj.prototype.pushTriangle = function (v1, v2, v3) {
        var _a, _b, _c;
        // add indices
        var i1 = this.numVertices;
        var i2 = i1 + 1;
        var i3 = i1 + 2;
        this.indices.push(i1, i2, i3);
        // add vertices
        this.vertices.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z);
        this.updateBounds(v1);
        this.updateBounds(v2);
        this.updateBounds(v3);
        // add normals
        var tri = new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, this.normals, i1, i2, i3);
        var normal = tri.computeNormal();
        (_a = this.normals).push.apply(_a, normal.values);
        (_b = this.normals).push.apply(_b, normal.values);
        (_c = this.normals).push.apply(_c, normal.values);
    };
    TriangleObj.prototype.computeNormals = function (type) {
        var _a;
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        if (type === NormalType.Smooth) {
            var multiNormVertices = [];
            for (var i = 0; i < this.numVertices; i++) {
                multiNormVertices.push(new MultiNormVertex());
            }
            // store the normals with each vertex - we'll later average these
            for (var i = 0; i < this.numTriangles; i++) {
                var tri = this.getTriangle(i);
                var n = tri.computeNormal();
                multiNormVertices[tri.i1].push(n);
                multiNormVertices[tri.i2].push(n);
                multiNormVertices[tri.i3].push(n);
            }
            // populate the normals array
            this.normals = [];
            for (var i = 0; i < multiNormVertices.length; i++) {
                (_a = this.normals).push.apply(_a, multiNormVertices[i].normal.values);
            }
        }
        else {
            // to go this way we need to have a unique vector and normal for each triangle
            // corner. Blow away the old stuff and rebuild
            var oldIndices = this.indices;
            var oldVertices = this.vertices;
            // reset everything
            this.vertices = [];
            this.normals = [];
            this.indices = [];
            // rebuild
            for (var i = 0; i < oldIndices.length / 3; i++) {
                var v1 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_6__["IndexedVec3"](oldVertices, oldIndices[3 * i + 0]);
                var v2 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_6__["IndexedVec3"](oldVertices, oldIndices[3 * i + 1]);
                var v3 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_6__["IndexedVec3"](oldVertices, oldIndices[3 * i + 2]);
                this.pushTriangle(v1, v2, v3);
            }
        }
        p.log('computeNormals');
    };
    TriangleObj.prototype.x = function (i) {
        return this.vertices[3 * i + 0];
    };
    TriangleObj.prototype.y = function (i) {
        return this.vertices[3 * i + 1];
    };
    TriangleObj.prototype.z = function (i) {
        return this.vertices[3 * i + 2];
    };
    TriangleObj.prototype.findBounds = function () {
        for (var i = 0; i < this.numVertices; i++) {
            this.boxMin.x = Math.min(this.boxMin.x, this.x(i));
            this.boxMin.y = Math.min(this.boxMin.y, this.y(i));
            this.boxMin.z = Math.min(this.boxMin.z, this.z(i));
            this.boxMax.x = Math.max(this.boxMax.x, this.x(i));
            this.boxMax.y = Math.max(this.boxMax.y, this.y(i));
            this.boxMax.z = Math.max(this.boxMax.z, this.z(i));
        }
    };
    /**
     * Creates a string in the for .OBJ file format
     *
     * @returns the string
     */
    TriangleObj.prototype.toObjString = function (digits) {
        if (digits === void 0) { digits = 8; }
        var str = '';
        str += '# Vertices: ' + this.vertices.length + '\n';
        str += '# Triangles: ' + this.numTriangles + '\n';
        str += '\n';
        for (var i = 0; i < this.numVertices; i++) {
            var v = this.vertices;
            str += 'v ' + v[3 * i + 0].toPrecision(digits) + ' ' + v[3 * i + 1].toPrecision(digits) + ' ' + v[3 * i + 2].toPrecision(digits) + '\n';
        }
        for (var i = 0; i < this.numVertices; i++) {
            var n = this.normals;
            str += 'vn ' + n[3 * i + 0].toPrecision(digits) + ' ' + n[3 * i + 1].toPrecision(digits) + ' ' + n[3 * i + 2].toPrecision(digits) + '\n';
        }
        for (var i = 0; i < this.numTriangles; i++) {
            var t = this.getTriangle(i);
            str += 'f ' +
                (t.i1 + 1) + '//' + (t.i1 + 1) + ' ' +
                (t.i2 + 1) + '//' + (t.i2 + 1) + ' ' +
                (t.i3 + 1) + '//' + (t.i3 + 1) + '\n';
        }
        return str;
    };
    TriangleObj.prototype.optimize = function (normalType) {
        if (normalType === NormalType.Smooth) {
            var vertexToIndexMap = new Map();
            var indexToIndexMap = new Map();
            // first generate a unique set of vertices
            var uniqueVertices = [];
            for (var i = 0; i < this.numVertices; i++) {
                var oldVertex = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_6__["IndexedVec3"](this.vertices, i);
                var key = this.vertices[3 * i + 0].toFixed(4) + ' ' + this.vertices[3 * i + 1].toFixed(4) + ' ' + this.vertices[3 * i + 2].toFixed(4);
                var oldIndex = i + 1;
                var newIndex = void 0;
                if (vertexToIndexMap.has(key)) {
                    // just map the old index to the existing entry
                    newIndex = vertexToIndexMap.get(key);
                }
                else {
                    // create a new entry
                    newIndex = uniqueVertices.length + 1;
                    vertexToIndexMap.set(key, newIndex);
                    uniqueVertices.push(oldVertex);
                }
                // store the translation
                indexToIndexMap.set(oldIndex, newIndex);
            }
            // reset all the vertices
            this.vertices = [];
            for (var i = 0; i < uniqueVertices.length; i++) {
                this.vertices.push(uniqueVertices[i].x);
                this.vertices.push(uniqueVertices[i].y);
                this.vertices.push(uniqueVertices[i].z);
            }
            // remap all indices
            for (var i = 0; i < this.indices.length; i++) {
                var oldIndex = this.indices[i];
                this.indices[i] = indexToIndexMap.get(oldIndex + 1) - 1;
            }
        }
        else {
            // nothing to do for flat normals. New vertices and normals are created in 
            // computeNormals() below if needed
        }
        this.computeNormals(normalType);
    };
    TriangleObj.prototype.combine = function (tObj) {
        var _a, _b;
        // save the value for the first index of the combined objects
        var startIndex = this.numVertices;
        // add the other vertices and normals to ours
        (_a = this.vertices).push.apply(_a, tObj.vertices);
        (_b = this.normals).push.apply(_b, tObj.normals);
        // add the other indices, but offset them properly
        for (var i = 0; i < tObj.indices.length; i++) {
            this.indices.push(startIndex + tObj.indices[i]);
        }
        // merge the bounding boxes
        this.boxMin.x = Math.min(this.boxMin.x, tObj.boxMin.x);
        this.boxMin.y = Math.min(this.boxMin.y, tObj.boxMin.y);
        this.boxMin.z = Math.min(this.boxMin.z, tObj.boxMin.z);
        this.boxMax.x = Math.max(this.boxMax.x, tObj.boxMax.x);
        this.boxMax.y = Math.max(this.boxMax.y, tObj.boxMax.y);
        this.boxMax.z = Math.max(this.boxMax.z, tObj.boxMax.z);
    };
    TriangleObj.prototype.toData = function () {
        var data = new TriangleObjData;
        data.name = this.name;
        data.vertices = new Float32Array(this.vertices);
        data.normals = new Float32Array(this.normals);
        data.indices = new Int32Array(this.indices);
        data.boxMin = this.boxMin.clone();
        data.boxMax = this.boxMax.clone();
        return data;
    };
    TriangleObj.fromData = function (data) {
        var tObj = new TriangleObj();
        tObj.name = data.name;
        tObj.vertices = Array.from(data.vertices);
        tObj.normals = Array.from(data.normals);
        tObj.indices = Array.from(data.indices);
        tObj.boxMin = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"](data.boxMin.values);
        tObj.boxMax = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"](data.boxMax.values);
        return tObj;
    };
    TriangleObj.prototype.toBlob = function () {
        // create a description
        var info = {
            FileType: 'Binary OBJ',
            Version: '1.0',
            Name: this.name,
        };
        // get the raw data
        var data = this.toData();
        // break it into parts
        var parts = [];
        parts.push(data.vertices);
        parts.push(data.normals);
        parts.push(data.indices);
        parts.push(new Float32Array(data.boxMin.values));
        parts.push(new Float32Array(data.boxMax.values));
        // create the Blob
        return _BlobFile__WEBPACK_IMPORTED_MODULE_5__["BlobFile"].createBlob(info, parts);
    };
    TriangleObj.fromBlob = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TriangleObj.blobToData(blob)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, TriangleObj.fromData(data)];
                }
            });
        });
    };
    TriangleObj.blobToData = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var data, bFile, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        data = new TriangleObjData();
                        return [4 /*yield*/, _BlobFile__WEBPACK_IMPORTED_MODULE_5__["BlobFile"].extract(blob)];
                    case 1:
                        bFile = _s.sent();
                        data.name = bFile.info.Name;
                        _a = data;
                        _b = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[0].arrayBuffer()];
                    case 2:
                        _a.vertices = new (_b.apply(Float32Array, [void 0, _s.sent()]))();
                        _c = data;
                        _d = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[1].arrayBuffer()];
                    case 3:
                        _c.normals = new (_d.apply(Float32Array, [void 0, _s.sent()]))();
                        _e = data;
                        _f = Int32Array.bind;
                        return [4 /*yield*/, bFile.parts[2].arrayBuffer()];
                    case 4:
                        _e.indices = new (_f.apply(Int32Array, [void 0, _s.sent()]))();
                        _g = data;
                        _h = _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"].bind;
                        _k = (_j = Array).from;
                        _l = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[3].arrayBuffer()];
                    case 5:
                        _g.boxMin = new (_h.apply(_Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"], [void 0, _k.apply(_j, [new (_l.apply(Float32Array, [void 0, _s.sent()]))()])]))();
                        _m = data;
                        _o = _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"].bind;
                        _q = (_p = Array).from;
                        _r = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[4].arrayBuffer()];
                    case 6:
                        _m.boxMax = new (_o.apply(_Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"], [void 0, _q.apply(_p, [new (_r.apply(Float32Array, [void 0, _s.sent()]))()])]))();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return TriangleObj;
}());



/***/ }),

/***/ "./src/TriangleObjBuilder.ts":
/*!***********************************!*\
  !*** ./src/TriangleObjBuilder.ts ***!
  \***********************************/
/*! exports provided: TriangleObjBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObjBuilder", function() { return TriangleObjBuilder; });
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TriangleObjBuilder = /** @class */ (function (_super) {
    __extends(TriangleObjBuilder, _super);
    function TriangleObjBuilder(name) {
        return _super.call(this, name) || this;
    }
    // TODO pass in args for construction
    TriangleObjBuilder.prototype.addArrow = function () {
        var NUM_STEPS = 30;
        var TOTAL_LENGTH = 0.4;
        var ARROW_RADIUS = 0.15;
        var ARROW_LENGTH = 1.5 * ARROW_RADIUS;
        var SHAFT_RADIUS = 0.5 * ARROW_RADIUS;
        var TIP = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]);
        var TIP_BASE = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, ARROW_LENGTH, 0]);
        // build the arrow head
        for (var i = 0; i < NUM_STEPS; i++) {
            var x1 = ARROW_RADIUS * Math.sin(i / (NUM_STEPS - 1) * 2 * Math.PI);
            var y1 = ARROW_LENGTH;
            var z1 = ARROW_RADIUS * Math.cos(i / (NUM_STEPS - 1) * 2 * Math.PI);
            var x2 = ARROW_RADIUS * Math.sin((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);
            var y2 = ARROW_LENGTH;
            var z2 = ARROW_RADIUS * Math.cos((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);
            var p1 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x1, y1, z1]);
            var p2 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x2, y2, z2]);
            this.pushTriangle(TIP, p1, p2);
            this.pushTriangle(TIP_BASE, p2, p1);
        }
        // build the arrow shaft
        var END = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, TOTAL_LENGTH, 0]);
        for (var i = 0; i < NUM_STEPS; i++) {
            var x1 = SHAFT_RADIUS * Math.sin(i / (NUM_STEPS - 1) * 2 * Math.PI);
            var z1 = SHAFT_RADIUS * Math.cos(i / (NUM_STEPS - 1) * 2 * Math.PI);
            var x2 = SHAFT_RADIUS * Math.sin((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);
            var z2 = SHAFT_RADIUS * Math.cos((i + 1) / (NUM_STEPS - 1) * 2 * Math.PI);
            var p1 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x1, ARROW_LENGTH, z1]);
            var p2 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x2, ARROW_LENGTH, z2]);
            var p3 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x1, TOTAL_LENGTH, z1]);
            var p4 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x2, TOTAL_LENGTH, z2]);
            this.pushTriangle(p1, p2, p4);
            this.pushTriangle(p1, p4, p3);
            this.pushTriangle(END, p3, p4);
        }
    };
    TriangleObjBuilder.prototype.addSphere = function (numSteps, radius, center) {
        // create an array of vertices
        var vertices = [];
        for (var i = 0; i < numSteps; i++) {
            if (i === 0) {
                vertices.push(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x, center.y + radius, center.z]));
            }
            else if (i === numSteps - 1) {
                vertices.push(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x, center.y - radius, center.z]));
            }
            else {
                var y = radius * Math.cos(i / (numSteps - 1) * Math.PI);
                var r = radius * Math.sin(i / (numSteps - 1) * Math.PI);
                var offset = i % 2 ? 0 : ((2 * Math.PI) / numSteps) * 0.5;
                for (var j = 0; j < numSteps; j++) {
                    vertices.push(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([
                        center.x + r * Math.sin((j / numSteps) * 2 * Math.PI - offset),
                        center.y + y,
                        center.z + r * Math.cos((j / numSteps) * 2 * Math.PI - offset),
                    ]));
                }
            }
        }
        // connect the vertices
        var first = 0;
        var last = vertices.length - 1;
        for (var i = 0; i < numSteps - 1; i++) {
            for (var j = 0; j < numSteps; j++) {
                if (i === 0) {
                    var i1 = first;
                    var i2 = j + 1;
                    var i3 = j === (numSteps - 1) ? 1 : i2 + 1;
                    this.pushTriangle(vertices[i1], vertices[i2], vertices[i3]);
                }
                else if (i === numSteps - 2) {
                    var startIndex = last - numSteps;
                    var i1 = last;
                    var i2 = startIndex + j;
                    var i3 = j === (numSteps - 1) ? startIndex : i2 + 1;
                    this.pushTriangle(vertices[i1], vertices[i3], vertices[i2]);
                }
                else {
                    var startA = 1 + (i - 1) * numSteps;
                    var startB = 1 + i * numSteps;
                    var i1 = startA + j;
                    var i2 = (j === (numSteps - 1)) ? startA : i1 + 1;
                    var i3 = startB + j;
                    var i4 = (j === (numSteps - 1)) ? startB : i3 + 1;
                    if (i % 2) {
                        this.pushTriangle(vertices[i1], vertices[i4], vertices[i2]);
                        this.pushTriangle(vertices[i1], vertices[i3], vertices[i4]);
                    }
                    else {
                        this.pushTriangle(vertices[i1], vertices[i3], vertices[i2]);
                        this.pushTriangle(vertices[i2], vertices[i3], vertices[i4]);
                    }
                }
            }
        }
    };
    TriangleObjBuilder.prototype.addCube = function (size, center) {
        var v1 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x - size / 2, center.y - size / 2, center.z - size / 2]);
        var v2 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x - size / 2, center.y - size / 2, center.z + size / 2]);
        var v3 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x - size / 2, center.y + size / 2, center.z - size / 2]);
        var v4 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x - size / 2, center.y + size / 2, center.z + size / 2]);
        var v5 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x + size / 2, center.y - size / 2, center.z - size / 2]);
        var v6 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x + size / 2, center.y - size / 2, center.z + size / 2]);
        var v7 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x + size / 2, center.y + size / 2, center.z - size / 2]);
        var v8 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([center.x + size / 2, center.y + size / 2, center.z + size / 2]);
        this.pushQuad(v1, v2, v3, v4);
        this.pushQuad(v5, v7, v6, v8);
        this.pushQuad(v1, v5, v2, v6);
        this.pushQuad(v3, v4, v7, v8);
        this.pushQuad(v1, v3, v5, v7);
        this.pushQuad(v2, v6, v4, v8);
    };
    TriangleObjBuilder.prototype.addDisk = function (numSteps, radius, center) {
        for (var i = 0; i <= numSteps; i++) {
            var x1 = center.x + radius * Math.sin((i / numSteps) * 2 * Math.PI);
            var y1 = center.y;
            var z1 = center.z + radius * Math.cos((i / numSteps) * 2 * Math.PI);
            var x2 = center.x + radius * Math.sin(((i + 1) / numSteps) * 2 * Math.PI);
            var y2 = center.y;
            var z2 = center.z + radius * Math.cos(((i + 1) / numSteps) * 2 * Math.PI);
            var p1 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x1, y1, z1]);
            var p2 = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([x2, y2, z2]);
            this.pushTriangle(center, p1, p2);
        }
    };
    return TriangleObjBuilder;
}(_TriangleObj__WEBPACK_IMPORTED_MODULE_0__["TriangleObj"]));



/***/ }),

/***/ "./src/TriangleObjFile.ts":
/*!********************************!*\
  !*** ./src/TriangleObjFile.ts ***!
  \********************************/
/*! exports provided: TriangleObjFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObjFile", function() { return TriangleObjFile; });
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Class that loads a .obj file and creates triangles for it
 */
var TriangleObjFile = /** @class */ (function (_super) {
    __extends(TriangleObjFile, _super);
    function TriangleObjFile(name, src, updateStatus) {
        var _this = _super.call(this, name) || this;
        // record the status function. If one is not supplied, create one that does nothing
        if (!updateStatus) {
            updateStatus = function (status) { };
        }
        _this.parse(src, updateStatus);
        return _this;
    }
    TriangleObjFile.prototype.parseFace = function (line) {
        var ret = {
            iV: [],
            iN: [],
        };
        var tokens = line.match(/\S+/g);
        var numVals = tokens.length - 1;
        for (var i = 0; i < numVals; i++) {
            var vals = tokens[i + 1].split('/');
            ret.iV.push(parseInt(vals[0]) - 1);
            if (vals.length === 3) {
                ret.iN.push(parseInt(vals[2]) - 1);
            }
        }
        return ret;
    };
    TriangleObjFile.prototype.parse = function (src, updateStatus) {
        updateStatus('Processing');
        var t = Date.now();
        var p2 = new _Profiler__WEBPACK_IMPORTED_MODULE_1__["Profiler"]();
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_1__["Profiler"]();
        var lines = src.split('\n');
        p.log('split');
        var vertices = [];
        var normals = [];
        var vIndices = [];
        var nIndices = [];
        var match = true;
        var containsNormals = true;
        for (var i = 0; i < lines.length; i++) {
            // report progress every 50 ms
            if (Date.now() - t > 50) {
                updateStatus('Processing: ' + (100 * i / lines.length).toFixed() + '%');
                t = Date.now();
            }
            var line = lines[i];
            if (line.startsWith('v ')) {
                var tokens = line.match(/\S+/g);
                vertices.push(parseFloat(tokens[1]));
                vertices.push(parseFloat(tokens[2]));
                vertices.push(parseFloat(tokens[3]));
            }
            else if (line.startsWith('vn ')) {
                var tokens = line.match(/\S+/g);
                normals.push(parseFloat(tokens[1]));
                normals.push(parseFloat(tokens[2]));
                normals.push(parseFloat(tokens[3]));
            }
            else if (line.startsWith('f ')) {
                var ret = this.parseFace(line);
                if (containsNormals) {
                    if (ret.iV.length !== ret.iN.length) {
                        containsNormals = false;
                        console.warn('Normals not specified in file. Flat normals will be computed.');
                    }
                    else if (match) {
                        for (var i_1 = 0; i_1 < ret.iV.length; i_1++) {
                            if (ret.iV[i_1] != ret.iN[i_1]) {
                                console.warn('Vertices and normals don\'t match. Content will be re-indexed');
                                match = false;
                                break;
                            }
                        }
                    }
                }
                if (ret.iV.length === 4) {
                    vIndices.push(ret.iV[0], ret.iV[1], ret.iV[2]);
                    vIndices.push(ret.iV[0], ret.iV[2], ret.iV[3]);
                    if (containsNormals) {
                        nIndices.push(ret.iN[0], ret.iN[1], ret.iN[2]);
                        nIndices.push(ret.iN[0], ret.iN[2], ret.iN[3]);
                    }
                }
                else {
                    vIndices.push(ret.iV[0], ret.iV[1], ret.iV[2]);
                    if (containsNormals) {
                        nIndices.push(ret.iN[0], ret.iN[1], ret.iN[2]);
                    }
                }
            }
        }
        p.log('parse');
        if (match) {
            this.vertices = vertices;
            this.indices = vIndices;
            if (containsNormals) {
                this.normals = normals;
            }
        }
        else {
            this.vertices = [];
            this.normals = [];
            this.indices = [];
            for (var i = 0; i < vIndices.length; i++) {
                this.vertices.push(vertices[3 * vIndices[i] + 0]);
                this.vertices.push(vertices[3 * vIndices[i] + 1]);
                this.vertices.push(vertices[3 * vIndices[i] + 2]);
                this.normals.push(normals[3 * nIndices[i] + 0]);
                this.normals.push(normals[3 * nIndices[i] + 1]);
                this.normals.push(normals[3 * nIndices[i] + 2]);
                this.indices.push(i);
            }
            p.log('reindex');
        }
        if (containsNormals === false) {
            this.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_0__["NormalType"].Flat);
            p.log('compute normals');
        }
        this.findBounds();
        p.log('findBounds');
        p2.log('Total');
        updateStatus('Processing: 100%');
        console.log('Vertices: ' + this.vertices.length);
        console.log('Normals: ' + this.normals.length);
        console.log('Triangles: ' + this.numTriangles);
    };
    return TriangleObjFile;
}(_TriangleObj__WEBPACK_IMPORTED_MODULE_0__["TriangleObj"]));



/***/ }),

/***/ "./src/Uniforms.ts":
/*!*************************!*\
  !*** ./src/Uniforms.ts ***!
  \*************************/
/*! exports provided: Uniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uniforms", function() { return Uniforms; });
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _SphericalCoord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SphericalCoord */ "./src/SphericalCoord.ts");



/**
 * Values that are passed to the shader
 */
var Uniforms = {
    uScale: 1.0,
    uXOffset: 0.0,
    uYOffset: 0.0,
    uMode: 0,
    uMaxChroma: 1.0,
    uHighlightColor: undefined,
    uLightLightColor: undefined,
    uMidLightColor: undefined,
    uDarkLightColor: undefined,
    uShadowColor: undefined,
    uReflectedLightColor: undefined,
    uDarkAccentColor: undefined,
    uLightAlpha: 1001,
    uShadowAlpha: 1000,
    uLightIntensity: 0.7,
    uLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([1.0, 1.0, 1.0]),
    uLightPos: new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"](new _SphericalCoord__WEBPACK_IMPORTED_MODULE_2__["SphericalCoord"](2, 60, 110).toXYZ()),
    uAmbientLightIntensity: 0.3,
    uObjColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]([0.5, 0.5, 0.8]),
    uBallRadius: 0.5,
    uEye: new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]),
    uTextureSize: 256,
    uRandom: Math.random(),
    uRay00: new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]),
    uRay01: new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]),
    uRay10: new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]),
    uRay11: new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, 0, 0]),
    uSample: 0.0,
};


/***/ }),

/***/ "./src/Vec.ts":
/*!********************!*\
  !*** ./src/Vec.ts ***!
  \********************/
/*! exports provided: Vec2, Vec3, Vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return Vec2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return Vec4; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * Vector class for use with WebGL applications.
 */
var Vec = /** @class */ (function () {
    /**
     * @param valuesOrSize If a array, the values for the vector. If a number, the size of the vector.
     */
    function Vec(valuesOrSize) {
        if (valuesOrSize instanceof Array) {
            this.values = __spreadArrays(valuesOrSize);
        }
        else {
            this.values = new Array(valuesOrSize);
            for (var i = 0; i < valuesOrSize; i++) {
                this.values[i] = 0;
            }
        }
    }
    /**
     * Computes the magnitude of the vector.
     *
     * @return The vector magnitude.
     */
    Vec.prototype.magnitude = function () {
        var sum = 0;
        for (var i = 0; i < this.values.length; i++) {
            sum += this.values[i] * this.values[i];
        }
        return Math.sqrt(sum);
    };
    return Vec;
}());
/**
 * An x-y vector.
 */
var Vec2 = /** @class */ (function (_super) {
    __extends(Vec2, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function Vec2(vals) {
        var _this = this;
        if (vals) {
            _this = _super.call(this, vals) || this;
        }
        else {
            _this = _super.call(this, 2) || this;
        }
        return _this;
    }
    /**
     * Creates a copy of the vector.
     *
     * @returns A copy of the vector.
     */
    Vec2.prototype.clone = function () {
        return new Vec2(this.values);
    };
    Object.defineProperty(Vec2.prototype, "x", {
        /**
         * Gets the X component of the vector
         *
         * @returns The value
         */
        get: function () {
            return this.values[0];
        },
        /**
         * Sets the X component of the vector
         *
         * @param val The value
         */
        set: function (val) {
            this.values[0] = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "y", {
        /**
         * Gets the Y component of the vector
         *
         * @returns The value
         */
        get: function () {
            return this.values[1];
        },
        /**
         * Sets the Y component of the vector
         *
         * @param val The value
         */
        set: function (val) {
            this.values[1] = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Computes the distance to another point
     *
     * @param other The other point
     * @returns The distance between this point and the other point
     */
    Vec2.prototype.distance = function (other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    };
    return Vec2;
}(Vec));

/**
 * An x-y-z vector.
 */
var Vec3 = /** @class */ (function (_super) {
    __extends(Vec3, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function Vec3(vals) {
        var _this = this;
        if (vals) {
            _this = _super.call(this, vals) || this;
        }
        else {
            _this = _super.call(this, 3) || this;
        }
        return _this;
    }
    Object.defineProperty(Vec3.prototype, "x", {
        /**
         * Gets the X component of the vector
         *
         * @returns The value
         */
        get: function () {
            return this.values[0];
        },
        /**
         * Sets the X component of the vector
         *
         * @param val The value
         */
        set: function (val) {
            this.values[0] = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "y", {
        /**
         * Gets the Y component of the vector
         *
         * @returns The value
         */
        get: function () {
            return this.values[1];
        },
        /**
         * Sets the Y component of the vector
         *
         * @param val The value
         */
        set: function (val) {
            this.values[1] = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "z", {
        /**
         * Gets the Z component of the vector
         *
         * @returns The value
         */
        get: function () {
            return this.values[2];
        },
        /**
         * Sets the Z component of the vector
         *
         * @param val The value
         */
        set: function (val) {
            this.values[2] = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the vector.
     *
     * @returns A copy of the vector.
     */
    Vec3.prototype.clone = function () {
        return new Vec3(this.values);
    };
    /**
     * Creates a string representation of the vector
     *
     * @param digits The number of decimal places to display. This value is passed to toFixed().
     * @param divider The string to separate each number.
     * @returns A string representation.
     */
    Vec3.prototype.toString = function (digits, divider) {
        if (divider === void 0) { divider = ','; }
        return this.x.toFixed(digits) + divider + this.y.toFixed(digits) + divider + this.z.toFixed(digits);
    };
    /**
     * Normalizes this vector, and stores and returns the result.
     *
     * @returns The resulting normalized vector.
     */
    Vec3.prototype.normalize = function () {
        var mag = this.magnitude();
        var ret = this.clone();
        if (mag !== 0) {
            for (var i = 0; i < this.values.length; i++) {
                ret.values[i] /= mag;
            }
        }
        return ret;
    };
    /**
     * Subtracts values from this vector.
     *
     * @param vec The vector to subtract.
     * @returns The computed vector.
     */
    Vec3.prototype.subtract = function (vec) {
        return new Vec3([
            this.values[0] - vec.values[0],
            this.values[1] - vec.values[1],
            this.values[2] - vec.values[2]
        ]);
    };
    /**
     * Adds values from this vector.
     *
     * @param vec The vector to add.
     * @returns The computed vector.
     */
    Vec3.prototype.add = function (vec) {
        return new Vec3([
            this.values[0] + vec.values[0],
            this.values[1] + vec.values[1],
            this.values[2] + vec.values[2]
        ]);
    };
    /**
     * Computes the cross product of this vector and another vector.
     *
     * @param other The other vector.
     */
    Vec3.prototype.cross = function (other) {
        var A = this.values;
        var B = other.values;
        return new Vec3([
            A[1] * B[2] - A[2] * B[1],
            A[2] * B[0] - A[0] * B[2],
            A[0] * B[1] - A[1] * B[0]
        ]);
    };
    return Vec3;
}(Vec));

/**
 * An x-y-z-w vector.
 */
var Vec4 = /** @class */ (function (_super) {
    __extends(Vec4, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function Vec4(vals) {
        var _this = this;
        if (vals) {
            _this = _super.call(this, vals) || this;
        }
        else {
            _this = _super.call(this, 4) || this;
        }
        return _this;
    }
    /**
     * Returns an x-y-z vector where each element is computed by dividing this vectors
     * elements by the w value.
     *
     * @returns An x-y-z vector.
     */
    Vec4.prototype.divideByW = function () {
        var w = this.values[3];
        return new Vec3([
            this.values[0] / w,
            this.values[1] / w,
            this.values[2] / w
        ]);
    };
    return Vec4;
}(Vec));



/***/ }),

/***/ "./src/ViewerApp.ts":
/*!**************************!*\
  !*** ./src/ViewerApp.ts ***!
  \**************************/
/*! exports provided: ViewerApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerApp", function() { return ViewerApp; });
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer */ "./src/Renderer.ts");
/* harmony import */ var _Mat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mat */ "./src/Mat.ts");
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _PointerEventHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PointerEventHandler */ "./src/PointerEventHandler.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ModelsDropDownMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModelsDropDownMenu */ "./src/ModelsDropDownMenu.ts");
/* harmony import */ var _ModelLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModelLoader */ "./src/ModelLoader.ts");










var PointerMode;
(function (PointerMode) {
    PointerMode[PointerMode["View"] = 0] = "View";
    PointerMode[PointerMode["Light"] = 1] = "Light";
})(PointerMode || (PointerMode = {}));
//const WHITE_COLOR = new htmlColor([255, 255, 255]);
var WHITE_COLOR = new _htmlColor__WEBPACK_IMPORTED_MODULE_0__["htmlColor"]([255, 250, 242]);
var BLACK_COLOR = new _htmlColor__WEBPACK_IMPORTED_MODULE_0__["htmlColor"]([0, 0, 0]);
//const BLACK_COLOR = new htmlColor([30, 20, 0]);
var ViewerApp = /** @class */ (function () {
    function ViewerApp(query) {
        this.gl = null;
        this.pointerMode = PointerMode.View;
        this.dirty = true;
        this.loader = new _ModelLoader__WEBPACK_IMPORTED_MODULE_9__["ModelLoader"]();
        this.query = query;
    }
    ViewerApp.prototype.component = function () {
        var div = document.createElement('div');
        div.className = 'ViewerApp';
        var viewContainer = document.createElement('div');
        viewContainer.id = 'ViewContainer';
        viewContainer.className = 'container';
        div.appendChild(viewContainer);
        this.createViewElements(viewContainer);
        var ctrlsContainer = document.createElement('div');
        ctrlsContainer.className = 'container';
        ctrlsContainer.id = 'CtrlsContainer';
        div.appendChild(ctrlsContainer);
        this.createCtrlsElements(ctrlsContainer);
        this.loadModel(this.query);
        return div;
    };
    ViewerApp.prototype.createViewElements = function (parent) {
        var _this = this;
        var canvas = document.createElement('canvas');
        canvas.id = 'MainCanvas';
        parent.appendChild(canvas);
        this.overlay = document.createElement('div');
        this.overlay.id = 'Overlay';
        parent.appendChild(this.overlay);
        // don't try to make the canvas transparent to the underlying html. This
        // seems to limit the alpha values we can use in our scene.
        var context = canvas.getContext('webgl', { alpha: false });
        if (!context) {
            // TODO display a message about not being able to create a WebGL context
            console.log("Unable to get WebGL context");
        }
        this.gl = context;
        this.updateSize();
        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_2__["Renderer"](this.gl);
        this.renderer.whiteColor = WHITE_COLOR;
        this.renderer.blackColor = BLACK_COLOR;
        this.renderer.showMiniView = false;
        this.handler = new _PointerEventHandler__WEBPACK_IMPORTED_MODULE_6__["PointerEventHandler"](canvas);
        this.handler.onDrag = function (pos, delta) { return _this.onDrag(pos, delta); };
        this.handler.onClick = function (pos) { return _this.onClick(pos); };
        this.handler.onScale = function (scale, change) { return _this.onScale(scale, change); };
        this.handler.onRotate = function (angle, delta) { return _this.onRotate(angle, delta); };
        this.handler.onTranslate = function (delta) { return _this.onTranslate(delta); };
        document.onkeypress = function (event) {
            switch (event.key) {
                case 'i':
                    alert(_this.renderer.tObj.name + '\n' +
                        'Num Triangles: ' + _this.renderer.tObj.numTriangles.toLocaleString() + '\n' +
                        'Num Vertices: ' + _this.renderer.tObj.numVertices.toLocaleString() + '\n');
                case 'o':
                    _this.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_5__["NormalType"].Smooth);
                    break;
                case 'p':
                    _this.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_5__["NormalType"].Flat);
                    break;
                case 't':
                    break;
                case 's':
                    _this.save();
                    break;
                case 'd':
                    _this.renderer.showShadowMap = !_this.renderer.showShadowMap;
                    _this.dirty = true;
                    break;
                case 'v':
                    _this.renderer.orthographic = !_this.renderer.orthographic;
                    _this.dirty = true;
                    break;
            }
        };
        Object(_ModelsDropDownMenu__WEBPACK_IMPORTED_MODULE_8__["createModelsDropDownMenu"])(parent, function (file) { return _this.loadModel(file); });
        window.onresize = function () {
            _this.updateSize();
            _this.renderer.resize();
            _this.dirty = true;
        };
    };
    ViewerApp.prototype.optimize = function (normalType) {
        var obj = this.renderer.obj;
        var oldNumVertices = obj.tObj.numVertices;
        obj.optimize(normalType);
        var newNumVertices = obj.tObj.numVertices;
        var msg = 'Optimized .OBJ content copied to clipboard\n\n';
        msg += 'Num Triangles: ' + obj.tObj.numTriangles + '\n';
        msg += 'Num Vertices: ' + oldNumVertices + ' to ' + newNumVertices + ', ' + (100 * newNumVertices / oldNumVertices).toFixed() + ' %\n';
        var str = obj.tObj.toObjString(6);
        navigator.clipboard.writeText(str).then(function () { alert(msg); });
        this.dirty = true;
    };
    ViewerApp.prototype.updateSize = function () {
        var gl = this.gl;
        var width = window.innerWidth;
        var height = window.innerHeight;
        gl.canvas.width = width;
        gl.canvas.height = height;
        this.overlay.style.width = width + 'px';
        this.overlay.style.height = height + 'px';
        this.overlay.style.lineHeight = height + 'px'; // vertically center text
    };
    ViewerApp.prototype.createCtrlsElements = function (parent) {
        /*
        this.highlightSlider = new Slider(parent, {
           id: 'Highlight',
           label: 'Highlight',
           min: 0,
           max: 100,
           value: this.renderer.highlight * 100,
           colors: [BLACK_COLOR, WHITE_COLOR],
           oninput: () => {
              this.renderer.highlight = this.highlightSlider.value / 100;
              this.updateSliders();
              this.dirty = true;
           },
           getText: () => { return (100 * this.renderer.highlight).toFixed(0) + "%" }
        });
        */
    };
    ViewerApp.prototype.loadModel = function (query) {
        var _this = this;
        // if nothing was specified, load an interesting model
        if (!query) {
            query = 'Pose_02.blob';
        }
        var lc = query.toLowerCase();
        if (lc.endsWith('.obj') || lc.endsWith('.blob')) {
            var statusFunc = function (status) {
                _this.overlay.innerText = status;
            };
            this.loader.loadModelFile(query, statusFunc)
                .then(function (tObj) {
                _this.renderer.setModel(tObj);
                _this.loader.orient(_this.renderer.obj);
                _this.renderer.showFloor = query.startsWith('Pose');
                _this.dirty = true;
                requestAnimationFrame(function () { return _this.tick(); });
                /*
                   let tokens = query.split('.');
                   let propFile = tokens[0] + '_Prop.' + tokens[1];
                   this.loadModelFile(propFile).then((tPropObj) => {
                      tObj.combine(tPropObj);
                      return tObj;
                   }).then(() => {
                      this.renderer.setModel(tObj);
                      this.orient(tObj, query);
       
                      this.dirty = true;
                      requestAnimationFrame(() => this.tick());
                   });
                */
            });
        }
        else {
            // TODO multi line error messages not supported
            this.overlay.innerText = 'Unknown Model:' + query;
        }
    };
    ViewerApp.prototype.toggleMode = function () {
        switch (this.pointerMode) {
            case PointerMode.View:
                this.pointerMode = PointerMode.Light;
                this.renderer.ballColor = this.renderer.yellow;
                break;
            case PointerMode.Light:
                this.pointerMode = PointerMode.View;
                this.renderer.ballColor = WHITE_COLOR.toGlColor();
                break;
        }
        this.dirty = true;
    };
    ViewerApp.prototype.onDrag = function (pos, delta) {
        this.dirty = true;
        if (this.pointerMode === PointerMode.View) {
            this.renderer.obj.rotX(-delta.y * 0.01);
            this.renderer.obj.rotY(-delta.x * 0.01);
        }
        else if (this.pointerMode === PointerMode.Light) {
            var matY = _Mat__WEBPACK_IMPORTED_MODULE_3__["Mat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_1__["toRad"])(-delta.x));
            var matX = _Mat__WEBPACK_IMPORTED_MODULE_3__["Mat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_1__["toRad"])(-delta.y));
            var vec = new _Vec__WEBPACK_IMPORTED_MODULE_4__["Vec4"]([
                this.renderer.uLightDirection.x,
                this.renderer.uLightDirection.y,
                this.renderer.uLightDirection.z,
                1
            ]);
            vec = matX.multV(vec);
            vec = matY.multV(vec);
            this.renderer.uLightDirection.x = vec.values[0];
            this.renderer.uLightDirection.y = vec.values[1];
            this.renderer.uLightDirection.z = vec.values[2];
            this.dirty = true;
        }
    };
    /**
     * Processes a click/touch event at the designated coordinates.
     *
     * @param x The x coordinate.
     * @param y The y coordinate.
     * @returns true if a hit on one of the views occurs.
     */
    ViewerApp.prototype.onClick = function (pos) {
        var canvasWidth = this.gl.canvas.width;
        var canvasHeight = this.gl.canvas.height;
        var clipSpace = this.renderer.getClipSpace();
        var miniWidth = this.renderer.miniSize * (2 / clipSpace.width) * canvasWidth;
        var miniHeight = this.renderer.miniSize * (2 / clipSpace.height) * canvasHeight;
        if (pos.x < miniWidth && pos.y < miniHeight) {
            this.toggleMode();
            return true;
        }
        else if (pos.x > canvasWidth - miniWidth && pos.y < miniWidth) {
            this.renderer.resetView();
            this.dirty = true;
            return true;
        }
        // not handled
        return false;
    };
    ViewerApp.prototype.onScale = function (scale, change) {
        this.renderer.zoom(change);
        this.dirty = true;
    };
    ViewerApp.prototype.onRotate = function (angle, delta) {
        this.renderer.obj.rotZ(delta);
        this.dirty = true;
    };
    ViewerApp.prototype.onTranslate = function (delta) {
        // TODO how can this scaling be detected from javascript?
        var factor = 1;
        if (_Globals__WEBPACK_IMPORTED_MODULE_1__["isMobile"]) {
            factor = 2;
        }
        var clipSpace = this.renderer.getClipSpace();
        this.renderer.translateView(new _Vec__WEBPACK_IMPORTED_MODULE_4__["Vec2"]([
            factor * clipSpace.width * delta.x / this.gl.canvas.width,
            factor * clipSpace.height * delta.y / this.gl.canvas.height
        ]));
        this.dirty = true;
    };
    ViewerApp.prototype.tick = function () {
        var _this = this;
        if (this.dirty) {
            // TODO only redraw the threshold ctrl if a slider changed
            this.renderer.render();
            this.dirty = false;
        }
        requestAnimationFrame(function () { return _this.tick(); });
    };
    ViewerApp.prototype.save = function () {
        var tObj = this.renderer.tObj;
        var name = tObj.name.split('.')[0] + '.blob';
        Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(tObj.toBlob(), name);
    };
    return ViewerApp;
}());



/***/ }),

/***/ "./src/Volume.ts":
/*!***********************!*\
  !*** ./src/Volume.ts ***!
  \***********************/
/*! exports provided: Volume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume", function() { return Volume; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");

var MAX = 1000; // INFINITY in our rendering world
/**
 * Class that manages a set of triangles within a given space
 */
var Volume = /** @class */ (function () {
    function Volume() {
        /**
         * The triangles enclosed within the bounding box
         */
        this.triangles = [];
        /**
         * Bounding box minimum
         */
        this.boxMin = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([MAX, MAX, MAX]);
        /**
         * Bounding box maximum
         */
        this.boxMax = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([-MAX, -MAX, -MAX]);
    }
    /**
     * Stores a triangle and updates the bounding box
     *
     * @param triangle The triangle to store
     */
    Volume.prototype.push = function (triangle) {
        this.triangles.push(triangle);
        this.boxMin.x = Math.min(this.boxMin.x, triangle.minX);
        this.boxMin.y = Math.min(this.boxMin.y, triangle.minY);
        this.boxMin.z = Math.min(this.boxMin.z, triangle.minZ);
        this.boxMax.x = Math.max(this.boxMax.x, triangle.maxX);
        this.boxMax.y = Math.max(this.boxMax.y, triangle.maxY);
        this.boxMax.z = Math.max(this.boxMax.z, triangle.maxZ);
    };
    return Volume;
}());



/***/ }),

/***/ "./src/XForm.ts":
/*!**********************!*\
  !*** ./src/XForm.ts ***!
  \**********************/
/*! exports provided: XForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XForm", function() { return XForm; });
/* harmony import */ var _Mat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mat */ "./src/Mat.ts");

var XForm = /** @class */ (function () {
    function XForm() {
        this.base = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity;
        this.mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity;
    }
    XForm.prototype.get = function () {
        return this.mat.multM(this.base);
    };
    XForm.prototype.snap = function () {
        this.base = this.get();
        this.mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity;
    };
    XForm.prototype.reset = function () {
        this.mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity;
    };
    XForm.prototype.rotX = function (angle) {
        this.mat.rotX(angle);
        return this;
    };
    XForm.prototype.rotY = function (angle) {
        this.mat.rotY(angle);
        return this;
    };
    XForm.prototype.rotZ = function (angle) {
        this.mat.rotZ(angle);
        return this;
    };
    XForm.prototype.translate = function (offset) {
        this.mat.translate(offset);
        return this;
    };
    XForm.prototype.scale = function (scale) {
        this.mat.scale(scale);
        return this;
    };
    return XForm;
}());



/***/ }),

/***/ "./src/glAttributeBuffer.ts":
/*!**********************************!*\
  !*** ./src/glAttributeBuffer.ts ***!
  \**********************************/
/*! exports provided: glAttributeBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glAttributeBuffer", function() { return glAttributeBuffer; });
/**
 * Wrapper for a WebGl Buffer and Attribute
 */
var glAttributeBuffer = /** @class */ (function () {
    function glAttributeBuffer(glCtx, program, attributeName) {
        this.gl = null;
        this.gl = glCtx;
        var gl = this.gl;
        this.buffer = gl.createBuffer();
        this.attributeLocation = gl.getAttribLocation(program, attributeName);
    }
    glAttributeBuffer.prototype.delete = function () {
        this.gl.deleteBuffer(this.buffer);
        this.buffer = undefined;
        this.attributeLocation = undefined;
    };
    glAttributeBuffer.prototype.upload = function (values) {
        var gl = this.gl;
        this.bind();
        if (values instanceof Float32Array) {
            gl.bufferData(gl.ARRAY_BUFFER, values, gl.STATIC_DRAW);
        }
        else {
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
        }
    };
    glAttributeBuffer.prototype.bind = function () {
        var gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.enableVertexAttribArray(this.attributeLocation);
        gl.vertexAttribPointer(this.attributeLocation, 3, // size
        gl.FLOAT, // type
        false, // normalized
        0, // stride
        0 // offset
        );
    };
    return glAttributeBuffer;
}());



/***/ }),

/***/ "./src/glClipSpace.ts":
/*!****************************!*\
  !*** ./src/glClipSpace.ts ***!
  \****************************/
/*! exports provided: glClipSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glClipSpace", function() { return glClipSpace; });
/**
 * Utility for holding a clip space. Default is values from -1 to 1.
 */
var glClipSpace = /** @class */ (function () {
    function glClipSpace(min, max) {
        this.min = min;
        this.max = max;
    }
    Object.defineProperty(glClipSpace.prototype, "left", {
        get: function () {
            return this.min.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "right", {
        get: function () {
            return this.max.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "top", {
        get: function () {
            return this.max.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "bottom", {
        get: function () {
            return this.min.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "near", {
        get: function () {
            return this.min.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "far", {
        get: function () {
            return this.max.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "width", {
        get: function () {
            return Math.abs(this.max.x - this.min.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "height", {
        get: function () {
            return Math.abs(this.max.y - this.min.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "depth", {
        get: function () {
            return Math.abs(this.max.z - this.min.z);
        },
        enumerable: true,
        configurable: true
    });
    return glClipSpace;
}());



/***/ }),

/***/ "./src/glColor.ts":
/*!************************!*\
  !*** ./src/glColor.ts ***!
  \************************/
/*! exports provided: glColor3, glColor4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glColor3", function() { return glColor3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glColor4", function() { return glColor4; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./src/Color.ts");
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Color class that requires RGB values to be between 0 and 1
 */
var glColor3 = /** @class */ (function (_super) {
    __extends(glColor3, _super);
    /**
     * @param color An RGB color array
     */
    function glColor3(color) {
        var _this = this;
        if (color.length != 3) {
            throw new Error("Invalid color array length (expected 3 elements)");
        }
        if (color[0] < 0 || color[0] > 1) {
            throw new Error("Invalid color 'r' value (expected [0-1])");
        }
        if (color[1] < 0 || color[1] > 1) {
            throw new Error("Invalid color 'g' value (expected [0-1])");
        }
        if (color[2] < 0 || color[2] > 1) {
            throw new Error("Invalid color 'b' value (expected [0-1])");
        }
        _this = _super.call(this, color) || this;
        return _this;
    }
    /**
     * Creates an glColor object using values in a Color object.
     *
     * @param color A generic Color object.
     */
    glColor3.fromColor = function (color) {
        var r = Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["clamp"])(color.r, 0, 1);
        var g = Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["clamp"])(color.g, 0, 1);
        var b = Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["clamp"])(color.b, 0, 1);
        return new glColor3([r, g, b]);
    };
    /**
     * Returns the lighter of two colors
     *
     * @param c1 The first color.
     * @param c2 The second color.
     * @returns The lightest color.
     */
    glColor3.lightest = function (c1, c2) {
        // TODO: use luminosity instead?
        if (c1.r + c1.g + c1.b > c2.r + c2.g + c2.b) {
            return c1;
        }
        else {
            return c2;
        }
    };
    /**
     * Returns the darker of two colors
     *
     * @param c1 The first color.
     * @param c2 The second color.
     * @returns The darkest color.
     */
    glColor3.darkest = function (c1, c2) {
        // TODO: use luminosity instead?
        if (c1.r + c1.g + c1.b < c2.r + c2.g + c2.b) {
            return c1;
        }
        else {
            return c2;
        }
    };
    /**
     * Converts this object to an html color object (0-255 based).
     *
     * @returns An htmlColor object.
     */
    glColor3.prototype.toHtmlColor = function () {
        var r = Math.round(255 * this.r);
        var g = Math.round(255 * this.g);
        var b = Math.round(255 * this.b);
        return new _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"]([r, g, b]);
    };
    return glColor3;
}(_Color__WEBPACK_IMPORTED_MODULE_0__["Color"]));

/**
 * Color class that requires RGBA values to be between 0 and 1
 */
var glColor4 = /** @class */ (function (_super) {
    __extends(glColor4, _super);
    /**
     * @param color An RGB color array
     */
    function glColor4(color) {
        var _this = this;
        if (color.length != 4) {
            throw new Error("Invalid color array length (expected 4 elements)");
        }
        if (color[0] < 0 || color[0] > 1) {
            throw new Error("Invalid color 'r' value (expected [0-1])");
        }
        if (color[1] < 0 || color[1] > 1) {
            throw new Error("Invalid color 'g' value (expected [0-1])");
        }
        if (color[2] < 0 || color[2] > 1) {
            throw new Error("Invalid color 'b' value (expected [0-1])");
        }
        if (color[3] < 0 || color[3] > 1) {
            throw new Error("Invalid color 'a' value (expected [0-1])");
        }
        _this = _super.call(this, color) || this;
        return _this;
    }
    return glColor4;
}(_Color__WEBPACK_IMPORTED_MODULE_0__["Color"]));



/***/ }),

/***/ "./src/glColorWithTemperature.ts":
/*!***************************************!*\
  !*** ./src/glColorWithTemperature.ts ***!
  \***************************************/
/*! exports provided: glColorWithTemperature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glColorWithTemperature", function() { return glColorWithTemperature; });
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Class that adds temperature to a Color object
 */
var glColorWithTemperature = /** @class */ (function (_super) {
    __extends(glColorWithTemperature, _super);
    /**
     * @param color An RGB color array
     * @param temperature Temperature in Kelvin
     */
    function glColorWithTemperature(color, temperature) {
        var _this = _super.call(this, color) || this;
        _this._temperature = temperature;
        return _this;
    }
    Object.defineProperty(glColorWithTemperature.prototype, "temperature", {
        /**
         * Gets the temperature in Kelvin
         */
        get: function () {
            return this._temperature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glColorWithTemperature, "daylight", {
        get: function () {
            return this.create(6000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glColorWithTemperature, "minTemperature", {
        /**
         * Gets the minimum supported temperature.
         *
         * @returns temperature value in Kelvin.
         */
        get: function () {
            return this.colors[0].temperature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glColorWithTemperature, "maxTemperature", {
        /**
         * Gets the maximum supported temperature.
         *
         * @returns temperature value in Kelvin.
         */
        get: function () {
            return this.colors[this.colors.length - 1].temperature;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a Color matching the specified temperature.
     *
     * @returns temperature value in Kelvin.
     */
    glColorWithTemperature.create = function (temperature) {
        if (temperature <= this.minTemperature) {
            return this.colors[0];
        }
        else if (temperature >= this.maxTemperature) {
            return this.colors[this.colors.length - 1];
        }
        else {
            for (var i = 0; i < this.colors.length - 1; i++) {
                var color1 = this.colors[i];
                var color2 = this.colors[i + 1];
                if (temperature >= color1.temperature && temperature <= color2.temperature) {
                    var ratio = (temperature - color1.temperature) / (color2.temperature - color1.temperature);
                    var r = color1.r + ratio * (color2.r - color1.r);
                    var g = color1.g + ratio * (color2.g - color1.g);
                    var b = color1.b + ratio * (color2.b - color1.b);
                    return new glColorWithTemperature([r, g, b], temperature);
                }
            }
            // shouldn't get here, but if we do, return the last color
            return this.colors[this.colors.length - 1];
        }
    };
    /**
     * Known color values. For other requests the class will return interpolated values
     */
    glColorWithTemperature.colors = [
        new glColorWithTemperature([255 / 255, 147 / 255, 41 / 255], 1900),
        new glColorWithTemperature([255 / 255, 197 / 255, 143 / 255], 2600),
        new glColorWithTemperature([255 / 255, 214 / 255, 170 / 255], 2850),
        new glColorWithTemperature([255 / 255, 241 / 255, 224 / 255], 3200),
        new glColorWithTemperature([255 / 255, 250 / 255, 244 / 255], 5200),
        new glColorWithTemperature([255 / 255, 255 / 255, 251 / 255], 5400),
        new glColorWithTemperature([255 / 255, 255 / 255, 255 / 255], 6000),
        new glColorWithTemperature([201 / 255, 226 / 255, 255 / 255], 7000),
        new glColorWithTemperature([64 / 255, 156 / 255, 255 / 255], 20000),
    ];
    return glColorWithTemperature;
}(_glColor__WEBPACK_IMPORTED_MODULE_0__["glColor3"]));



/***/ }),

/***/ "./src/glCompiler.ts":
/*!***************************!*\
  !*** ./src/glCompiler.ts ***!
  \***************************/
/*! exports provided: glCompiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glCompiler", function() { return glCompiler; });
/**
 * Utility wrapper for compiling WebGL shader programs
 */
var glCompiler = /** @class */ (function () {
    /**
     * use static functions only
     */
    function glCompiler() {
    }
    /**
     * Compiles a shader program
     *
     * @param gl The WebGL context
     * @param source The source code
     * @param type The shader type
     * @throws if the compilation fails
     */
    glCompiler.compileShader = function (gl, source, type) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.log(source);
            var err = gl.getShaderInfoLog(shader);
            console.error(err);
            throw 'compile error: ' + err;
        }
        return shader;
    };
    /**
     * Compiles and links vertex and fragment shaders into a program
     *
     * @param gl The WebGL context
     * @param vertexSource Vertex shader source
     * @param fragmentSource Fragment shader source
     * @returns the program id
     * @throws if the compilation fails
     */
    glCompiler.compile = function (gl, vertexSource, fragmentSource) {
        var program = gl.createProgram();
        gl.attachShader(program, glCompiler.compileShader(gl, vertexSource, gl.VERTEX_SHADER));
        gl.attachShader(program, glCompiler.compileShader(gl, fragmentSource, gl.FRAGMENT_SHADER));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw 'link error: ' + gl.getProgramInfoLog(program);
        }
        return program;
    };
    return glCompiler;
}());



/***/ }),

/***/ "./src/glFrameBuffer.ts":
/*!******************************!*\
  !*** ./src/glFrameBuffer.ts ***!
  \******************************/
/*! exports provided: glFrameBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glFrameBuffer", function() { return glFrameBuffer; });
/* harmony import */ var _glTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTexture */ "./src/glTexture.ts");

/**
 * Lightweight WebGL wrapper for a framebuffer
 */
var glFrameBuffer = /** @class */ (function () {
    /**
     * Create a frame buffer
     *
     * @param glCtx The WebGL context
     * @param width The width (in pixels) of the rendering (must be power of 2)
     * @param height The height (in pixels) of the rendering (must be power of 2)
     */
    function glFrameBuffer(glCtx, width, height) {
        this.gl = null;
        this.gl = glCtx;
        this.width = width;
        this.height = height;
        var gl = this.gl;
        this.frameBuffer = gl.createFramebuffer();
    }
    glFrameBuffer.prototype.delete = function () {
        var gl = this.gl;
        if (this.frameBuffer) {
            gl.deleteFramebuffer(this.frameBuffer);
            this.frameBuffer = null;
        }
    };
    glFrameBuffer.prototype.get = function () {
        return this.frameBuffer;
    };
    glFrameBuffer.prototype.bind = function () {
        var gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    };
    glFrameBuffer.prototype.createTexture = function (style) {
        return new _glTexture__WEBPACK_IMPORTED_MODULE_0__["glTexture"](this.gl, this.width, this.height, style);
    };
    glFrameBuffer.prototype.attachTexture = function (attachment, texture) {
        if (texture instanceof _glTexture__WEBPACK_IMPORTED_MODULE_0__["glTexture"]) {
            texture = texture.get();
        }
        var gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, 0);
    };
    glFrameBuffer.prototype.check = function () {
        var gl = this.gl;
        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            var msg = "The created frame buffer is invalid: " + status.toString();
            alert(msg);
            console.log(msg);
        }
    };
    return glFrameBuffer;
}());



/***/ }),

/***/ "./src/glIndexBuffer.ts":
/*!******************************!*\
  !*** ./src/glIndexBuffer.ts ***!
  \******************************/
/*! exports provided: glIndexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glIndexBuffer", function() { return glIndexBuffer; });
/**
 * Wrapper for a WebGl Buffer and Attribute
 */
var glIndexBuffer = /** @class */ (function () {
    function glIndexBuffer(glCtx) {
        this.gl = null;
        this.gl = glCtx;
        var gl = this.gl;
        this.buffer = gl.createBuffer();
    }
    glIndexBuffer.prototype.delete = function () {
        this.gl.deleteBuffer(this.buffer);
        this.buffer = undefined;
    };
    glIndexBuffer.prototype.upload = function (values) {
        var gl = this.gl;
        this.bind();
        if (values instanceof Int32Array) {
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, values, gl.STATIC_DRAW);
        }
        else {
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int32Array(values), gl.STATIC_DRAW);
        }
    };
    glIndexBuffer.prototype.bind = function () {
        var gl = this.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    };
    return glIndexBuffer;
}());



/***/ }),

/***/ "./src/glObject.ts":
/*!*************************!*\
  !*** ./src/glObject.ts ***!
  \*************************/
/*! exports provided: glObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glObject", function() { return glObject; });
/* harmony import */ var _glAttributeBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glAttributeBuffer */ "./src/glAttributeBuffer.ts");
/* harmony import */ var _glUniform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glUniform */ "./src/glUniform.ts");
/* harmony import */ var _glIndexBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glIndexBuffer */ "./src/glIndexBuffer.ts");
/* harmony import */ var _XForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XForm */ "./src/XForm.ts");




var glObject = /** @class */ (function () {
    function glObject(glCtx, tObj, program) {
        this.gl = null;
        this.xForm = new _XForm__WEBPACK_IMPORTED_MODULE_3__["XForm"]();
        this.gl = glCtx;
        var gl = this.gl;
        var ext = gl.getExtension('OES_element_index_uint');
        this.tObj = tObj;
        this.program = program;
        // create buffers (and associated attributes)
        this.vertexBuffer = new _glAttributeBuffer__WEBPACK_IMPORTED_MODULE_0__["glAttributeBuffer"](gl, program, 'aVertex');
        this.normalBuffer = new _glAttributeBuffer__WEBPACK_IMPORTED_MODULE_0__["glAttributeBuffer"](gl, program, 'aNormal');
        this.indexBuffer = new _glIndexBuffer__WEBPACK_IMPORTED_MODULE_2__["glIndexBuffer"](gl);
        this.uploadTriangles();
    }
    Object.defineProperty(glObject.prototype, "name", {
        get: function () {
            return this.tObj.name;
        },
        enumerable: true,
        configurable: true
    });
    glObject.prototype.delete = function () {
        this.vertexBuffer.delete();
        this.normalBuffer.delete();
        this.indexBuffer.delete();
    };
    glObject.prototype.snap = function () {
        this.xForm.snap();
    };
    glObject.prototype.rotX = function (angle) {
        this.xForm.rotX(angle);
    };
    glObject.prototype.rotY = function (angle) {
        this.xForm.rotY(angle);
    };
    glObject.prototype.rotZ = function (angle) {
        this.xForm.rotZ(angle);
    };
    glObject.prototype.scale = function (scale) {
        this.xForm.scale(scale);
    };
    glObject.prototype.translate = function (offset) {
        this.xForm.translate(offset);
    };
    glObject.prototype.clearTransforms = function () {
        this.xForm.reset();
    };
    glObject.prototype.uploadTriangles = function () {
        this.vertexBuffer.upload(this.tObj.vertices);
        this.normalBuffer.upload(this.tObj.normals);
        this.indexBuffer.upload(this.tObj.indices);
    };
    glObject.prototype.draw = function () {
        var gl = this.gl;
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_1__["glUniform"](gl, this.program);
        uni.set('model', this.xForm.get());
        this.vertexBuffer.bind();
        this.indexBuffer.bind();
        this.normalBuffer.bind();
        gl.drawElements(gl.TRIANGLES, 3 * this.tObj.numTriangles, gl.UNSIGNED_INT, 0);
    };
    glObject.prototype.optimize = function (normalType) {
        this.tObj.optimize(normalType);
        this.uploadTriangles();
    };
    return glObject;
}());



/***/ }),

/***/ "./src/glTexture.ts":
/*!**************************!*\
  !*** ./src/glTexture.ts ***!
  \**************************/
/*! exports provided: glTextureStyle, glTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glTextureStyle", function() { return glTextureStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glTexture", function() { return glTexture; });
var glTextureStyle;
(function (glTextureStyle) {
    glTextureStyle[glTextureStyle["Color"] = 0] = "Color";
    glTextureStyle[glTextureStyle["Depth"] = 1] = "Depth";
    glTextureStyle[glTextureStyle["Float"] = 2] = "Float";
})(glTextureStyle || (glTextureStyle = {}));
/**
 * Lightweight WebGL wrapper for a texture
 */
var glTexture = /** @class */ (function () {
    /**
     * Create a frame buffer for rendering into texture objects.
     *
     * @param glCtx The WebGL context
     * @param width The width (in pixels) of the rendering (must be power of 2)
     * @param height The height (in pixels) of the rendering (must be power of 2)
     */
    function glTexture(glCtx, width, height, style) {
        this.gl = null;
        this.gl = glCtx;
        this.width = width;
        this.height = height;
        switch (style) {
            case glTextureStyle.Color:
                this.create(width, height);
                break;
            case glTextureStyle.Depth:
                this.createDepth(width, height);
                break;
            case glTextureStyle.Float:
                this.createFloat(width, height);
                break;
        }
    }
    glTexture.prototype.delete = function () {
        var gl = this.gl;
        if (this.texture) {
            gl.deleteTexture(this.texture);
            this.texture = null;
        }
    };
    glTexture.prototype.create = function (width, height) {
        var gl = this.gl;
        // Step 2: Create and initialize a texture buffer to hold the colors.
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, // target
        0, // level
        gl.RGBA, // internal format
        width, // width
        height, // height
        0, // border
        gl.RGBA, // format
        gl.UNSIGNED_BYTE, // type
        null // pixels
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };
    glTexture.prototype.createDepth = function (width, height) {
        var gl = this.gl;
        var depth_texture_extension = gl.getExtension('WEBGL_depth_texture');
        if (!depth_texture_extension) {
            alert('This WebGL program requires the use of the WEBGL_depth_texture extension.');
            return;
        }
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, // target
        0, // level
        gl.DEPTH_COMPONENT, // internal format
        width, // width
        height, // height
        0, // border
        gl.DEPTH_COMPONENT, // format
        gl.UNSIGNED_INT, // type
        null // pixels
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };
    glTexture.prototype.createFloat = function (width, height) {
        var gl = this.gl;
        var internalFormat;
        var format;
        var type;
        // create textures
        if (gl instanceof WebGLRenderingContext) {
            var ext = gl.getExtension('OES_texture_half_float');
            if (ext) {
                // Thanks Apple. Always got to do things a little differently
                internalFormat = gl.RGBA;
                format = gl.RGBA;
                type = ext.HALF_FLOAT_OES;
            }
            else {
                // No floating point textures? really fall back to unsigned bytes
                internalFormat = gl.RGBA;
                format = gl.RGBA;
                type = gl.UNSIGNED_BYTE;
            }
        }
        // Typescript doesn't let you do an 'else if' here and when WebGL2 is
        // not supported, we get an exception, so thus the try-catch
        // see: https://stackoverflow.com/questions/45381122/typescript-type-narrowed-to-never-with-instanceof-in-an-if-else-statement
        try {
            if (gl instanceof WebGL2RenderingContext) {
                gl.getExtension('EXT_color_buffer_float');
                internalFormat = gl.RGBA32F;
                format = gl.RGBA;
                type = gl.FLOAT;
            }
        }
        catch (error) {
        }
        // create two textures. One we display and one we draw to
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, // target
        0, // level
        internalFormat, // internal format
        width, // width
        height, // height
        0, // border
        format, // format
        type, // type
        null // pixels
        );
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    glTexture.prototype.get = function () {
        return this.texture;
    };
    glTexture.prototype.bind = function () {
        var gl = this.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
    };
    return glTexture;
}());



/***/ }),

/***/ "./src/glUniform.ts":
/*!**************************!*\
  !*** ./src/glUniform.ts ***!
  \**************************/
/*! exports provided: glUniform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glUniform", function() { return glUniform; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _Mat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mat */ "./src/Mat.ts");



/**
 * Utility class for setting uniform values in a shader
 */
var glUniform = /** @class */ (function () {
    /**
     * Creates an object for setting values and calls gl.useProgram
     *
     * @param glCtx The WebGL context
     * @param program The program associated with the uniform values
     */
    function glUniform(glCtx, program) {
        this.gl = null;
        this.gl = glCtx;
        var gl = this.gl;
        this.program = program;
        gl.useProgram(program);
    }
    /**
     * Sets a uniform value
     *
     * @param name The variable name
     * @param value The value
     * @param int If true and the value is a number, it is treated as an integer
     */
    glUniform.prototype.set = function (name, value, int) {
        if (int === void 0) { int = false; }
        var gl = this.gl;
        var loc = gl.getUniformLocation(this.program, name);
        if (loc) {
            if (value instanceof _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]) {
                gl.uniform3fv(loc, new Float32Array(value.values));
            }
            else if (value instanceof _glColor__WEBPACK_IMPORTED_MODULE_1__["glColor3"]) {
                gl.uniform3fv(loc, new Float32Array([value.r, value.g, value.b]));
            }
            else if (value instanceof _glColor__WEBPACK_IMPORTED_MODULE_1__["glColor4"]) {
                gl.uniform4fv(loc, new Float32Array([value.r, value.g, value.b, value.a]));
            }
            else if (value instanceof _Mat__WEBPACK_IMPORTED_MODULE_2__["Mat4"]) {
                gl.uniformMatrix4fv(loc, false, new Float32Array(value.transpose().values));
            }
            else if (value instanceof Boolean || typeof (value) === 'boolean') {
                gl.uniform1i(loc, value ? 1.0 : 0.0);
            }
            else if (name === "uMode") {
                gl.uniform1i(loc, value);
            }
            else {
                if (int) {
                    gl.uniform1i(loc, value);
                }
                else {
                    gl.uniform1f(loc, value);
                }
            }
        }
    };
    /**
     * Sets an integer uniform value (same as set(name, value, true))
     *
     * @param name The variable name
     * @param value The value
     */
    glUniform.prototype.seti = function (name, value) {
        this.set(name, value, true);
    };
    /**
     * Sets all values for variables stored as members of an object
     *
     * @param uniforms The object with member values
     */
    glUniform.prototype.setAll = function (uniforms) {
        for (var name in uniforms) {
            var value = uniforms[name];
            this.set(name, value);
        }
    };
    return glUniform;
}());



/***/ }),

/***/ "./src/glUniformBlock.ts":
/*!*******************************!*\
  !*** ./src/glUniformBlock.ts ***!
  \*******************************/
/*! exports provided: glUniformBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glUniformBlock", function() { return glUniformBlock; });
var glUniformBlock = /** @class */ (function () {
    function glUniformBlock(glCtx, program, blockName, blockBinding) {
        this.gl2 = null;
        this.gl2 = glCtx;
        var gl2 = this.gl2;
        this.blockLocation = gl2.getUniformBlockIndex(program, blockName);
        gl2.uniformBlockBinding(program, this.blockLocation, blockBinding);
        this.blockBuffer = gl2.createBuffer();
        gl2.bindBufferBase(gl2.UNIFORM_BUFFER, blockBinding, this.blockBuffer);
    }
    glUniformBlock.prototype.upload = function (data) {
        var gl2 = this.gl2;
        gl2.bindBuffer(gl2.UNIFORM_BUFFER, this.blockBuffer);
        gl2.bufferData(gl2.UNIFORM_BUFFER, data, gl2.STATIC_DRAW);
        gl2.bindBuffer(gl2.UNIFORM_BUFFER, null);
    };
    return glUniformBlock;
}());



/***/ }),

/***/ "./src/htmlColor.ts":
/*!**************************!*\
  !*** ./src/htmlColor.ts ***!
  \**************************/
/*! exports provided: htmlColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlColor", function() { return htmlColor; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./src/Color.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Color class that requires RGB values to be between 0 and 255
 */
var htmlColor = /** @class */ (function (_super) {
    __extends(htmlColor, _super);
    /**
     * @param color An RGB color array
     */
    function htmlColor(color) {
        var _this = this;
        if (color.length != 3) {
            throw new Error("Invalid color array length (expected 3 elements)");
        }
        if (color[0] < 0 || color[0] > 255) {
            throw new Error("Invalid color 'r' value (expected [0-255])");
        }
        if (color[1] < 0 || color[1] > 255) {
            throw new Error("Invalid color 'g' value (expected [0-255])");
        }
        if (color[2] < 0 || color[2] > 255) {
            throw new Error("Invalid color 'b' value (expected [0-255])");
        }
        _this = _super.call(this, color) || this;
        return _this;
    }
    /**
     * Converts a value to a hex string
     *
     * @param c The numeric value
     * @returns The hex string
     */
    htmlColor.prototype.componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    /**
     * Converts this object to a hex string (e.g. #0f0f0f).
     *
     * @returns A hex string.
     */
    htmlColor.prototype.toHex = function () {
        var rHex = this.componentToHex(this.r);
        var gHex = this.componentToHex(this.g);
        var bHex = this.componentToHex(this.b);
        return "#" + rHex + gHex + bHex;
    };
    /**
     * Converts this object to a css string (e.g. 'rgb(128,228,32)').
     *
     * @returns A css string.
     */
    htmlColor.prototype.toCss = function () {
        return Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toCss"])(this.r, this.g, this.b);
    };
    /**
     * Converts a css style string (e.g. 'rgb(24,36,83)') to a color
     *
     * @param css The css string.
     * @returns The color.
     */
    htmlColor.fromCss = function (css) {
        var regex = /\d+/g;
        var vals = css.match(regex).slice(0, 3);
        return new htmlColor([parseInt(vals[0]), parseInt(vals[1]), parseInt(vals[2])]);
    };
    /**
     * Creates an htmlColor object from a hex string
     *
     * @param hex The hex string
     * @returns The htmlColor object
     */
    htmlColor.fromHex = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            return new htmlColor([r, g, b]);
        }
        else {
            return null;
        }
    };
    /**
     * Creates an htmlColor object using values in a Color object.
     *
     * @param color A generic Color object.
     */
    htmlColor.fromColor = function (color) {
        var r = htmlColor.clamp(color.r);
        var g = htmlColor.clamp(color.g);
        var b = htmlColor.clamp(color.b);
        return new htmlColor([r, g, b]);
    };
    /**
     * Rounds a number to a whole number and clamps it between 0 and 255.
     *
     * @param val The value.
     * @returns The rounded & clamped value
     */
    htmlColor.clamp = function (val) {
        val = Math.round(val);
        if (val < 0) {
            return 0;
        }
        else if (val > 255) {
            return 255;
        }
        else {
            return val;
        }
    };
    /**
     * Converts this color to an equivalent gray-scale color
     *
     * @returns The gray-scale color.
     */
    htmlColor.prototype.toGray = function () {
        var rgb = Math.round((this.r + this.g + this.b) / 3);
        return new htmlColor([rgb, rgb, rgb]);
    };
    /**
     * Converts this object to a WebGL color object (0-1 based)
     *
     * @returns A glColor object.
     */
    htmlColor.prototype.toGlColor = function () {
        return new _glColor__WEBPACK_IMPORTED_MODULE_1__["glColor3"]([this.r / 255, this.g / 255, this.b / 255]);
    };
    htmlColor.white = new htmlColor([255, 255, 255]);
    htmlColor.black = new htmlColor([0, 0, 0]);
    htmlColor.red = new htmlColor([255, 0, 0]);
    htmlColor.green = new htmlColor([0, 255, 0]);
    htmlColor.blue = new htmlColor([0, 0, 255]);
    htmlColor.orange = new htmlColor([255, 165, 0]);
    return htmlColor;
}(_Color__WEBPACK_IMPORTED_MODULE_0__["Color"]));



/***/ }),

/***/ "./src/htmlColorWithAlpha.ts":
/*!***********************************!*\
  !*** ./src/htmlColorWithAlpha.ts ***!
  \***********************************/
/*! exports provided: htmlColorWithAlpha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlColorWithAlpha", function() { return htmlColorWithAlpha; });
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * An html color with a transparency value
 */
var htmlColorWithAlpha = /** @class */ (function (_super) {
    __extends(htmlColorWithAlpha, _super);
    /**
     * @param color An RGBA color array
     */
    function htmlColorWithAlpha(color) {
        var _this = _super.call(this, [color[0], color[1], color[2]]) || this;
        /** The transparency (alpha) value */
        _this.a = 255;
        if (color.length != 4) {
            throw new Error("Invalid color array length (expected 4 elements)");
        }
        if (color[4] < 0 || color[4] > 255) {
            throw new Error("Invalid color 'a' value (expected [0-255])");
        }
        _this.a = color[3];
        return _this;
    }
    /**
     * Converts this object to a css string (e.g. 'rgb(128,228,32,255)').
     *
     * @returns A css string.
     */
    htmlColorWithAlpha.prototype.toCss = function () {
        return Object(_Globals__WEBPACK_IMPORTED_MODULE_1__["toCss"])(this.r, this.g, this.b, this.a);
    };
    htmlColorWithAlpha.transparent = new htmlColorWithAlpha([0, 0, 0, 0]);
    return htmlColorWithAlpha;
}(_htmlColor__WEBPACK_IMPORTED_MODULE_0__["htmlColor"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PathTracerApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PathTracerApp */ "./src/PathTracerApp.ts");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlanesApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlanesApp */ "./src/PlanesApp.ts");
/* harmony import */ var _ViewerApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewerApp */ "./src/ViewerApp.ts");




window.onload = function () {
    var query;
    var type = 'default';
    if (window.location.search) {
        query = window.location.search.substr(1);
        var tokens = query.split('-');
        if (tokens.length === 2) {
            type = tokens[0];
            query = tokens[1];
        }
        else {
            type = tokens[0];
            query = '';
        }
    }
    if (type === 'planes') {
        var app = new _PlanesApp__WEBPACK_IMPORTED_MODULE_2__["PlanesApp"](query);
        document.body.appendChild(app.component());
    }
    else if (type === 'viewer') {
        var app = new _ViewerApp__WEBPACK_IMPORTED_MODULE_3__["ViewerApp"](query);
        document.body.appendChild(app.component());
    }
    else { // type === 'ball'
        var app = new _PathTracerApp__WEBPACK_IMPORTED_MODULE_0__["PathTracerApp"](query);
        document.body.appendChild(app.component());
    }
};


/***/ }),

/***/ "./src/shaders/PathTracerToScreenFragment.glsl":
/*!*****************************************************!*\
  !*** ./src/shaders/PathTracerToScreenFragment.glsl ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\nvarying vec2 texCoord;\r\nuniform sampler2D uTexture;\r\nuniform int uMode;\r\nuniform float uMaxChroma;\r\n\r\nuniform vec3 uHighlightColor;\r\nuniform vec3 uLightLightColor;\r\nuniform vec3 uMidLightColor;\r\nuniform vec3 uDarkLightColor;\r\n\r\nuniform vec3 uShadowColor;\r\nuniform vec3 uReflectedLightColor;\r\nuniform vec3 uDarkAccentColor;\r\n\r\nuniform float uShadowAlpha;\r\nuniform float uLightAlpha;\r\n\r\n#define MODE_SCIENCE 0\r\n#define MODE_VALUE 1\r\n#define MODE_CHROMA 2\r\n#define MODE_BANDS 3\r\n\r\nvec4 white = vec4(1.0, 1.0, 1.0, 1.0);\r\nvec4 red = vec4(1.0, 0.0, 0.0, 1.0);\r\nvec4 orange = vec4(1.0, 0.65, 0.0, 1.0);\r\nvec4 yellow = vec4(1.0, 1.0, 0.0, 1.0);\r\nvec4 green = vec4(0.0, 1.0, 0.0, 1.0);\r\nvec4 cyan = vec4(0.0, 1.0, 1.0, 1.0);\r\nvec4 blue = vec4(0.0, 0.0, 1.0, 1.0);\r\nvec4 black = vec4(0.0, 0.0, 0.0, 1.0);\r\n#define NUM_COLORS 6\r\nvec4 colors[NUM_COLORS];\r\n\r\nvec4 value2Color(float value)\r\n{\r\n   float span = 1.0 / float(NUM_COLORS - 1);\r\n   value *= float(NUM_COLORS - 1);\r\n   if (value < 0.0)\r\n   {\r\n      return colors[0];\r\n   }\r\n   else if (value < 1.0)\r\n   {\r\n      return colors[0] + value * (colors[1] - colors[0]);\r\n   }\r\n   else if (value < 2.0)\r\n   {\r\n      return colors[1] + (value - 1.0) * (colors[2] - colors[1]);\r\n   }\r\n   else if (value < 3.0)\r\n   {\r\n      return colors[2] + (value - 2.0) * (colors[3] - colors[2]);\r\n   }\r\n   else if (value < 4.0)\r\n   {\r\n      return colors[3] + (value - 3.0) * (colors[4] - colors[3]);\r\n   }\r\n   else if (value < 5.0)\r\n   {\r\n      return colors[4] + (value - 4.0) * (colors[5] - colors[4]);\r\n   }\r\n   /*\r\n   else if (value < 6.0)\r\n   {\r\n      return colors[5] + (value - 5.0) * (colors[6] - colors[5]);\r\n   }\r\n   */\r\n   else\r\n   {\r\n      return colors[NUM_COLORS - 1];\r\n   }\r\n}\r\n\r\nfloat toGray(vec4 c)\r\n{\r\n   // lots of ways to convert RGB to gray scale.\r\n\r\n   // simple averaging method\r\n   // return (c.r + c.g + c.b) / 3.0;\r\n\r\n   // relative perceptual values\r\n   // return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\r\n\r\n   // luminosity measure\r\n   float gamma = 2.2;\r\n   float y = 0.2126 * pow(c.r, gamma) + 0.7152 * pow(c.g, gamma) + .0722 * pow(c.b, gamma);\r\n   float l = 116.0 * pow(y, 1.0 / 3.0) - 16.0;\r\n   return l / 100.0;\r\n}\r\n\r\nvec4 renderAsValue()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n   float rgb = toGray(color);\r\n   return vec4(rgb, rgb, rgb, 1.0);\r\n}\r\n\r\nvec4 renderAsChroma()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n\r\n   // render the scale as a bar on the left\r\n   if (texCoord.x < 0.03)\r\n   {\r\n      return value2Color((texCoord.y - 0.1) / 0.9);\r\n   }\r\n   else\r\n   {\r\n      if (color.a >= uShadowAlpha)\r\n      {\r\n         float avg = (color.r + color.g + color.b) / 3.0;\r\n         float rgb = (abs(avg - color.r) + abs(avg - color.g) + abs(avg - color.b)) / (4.0 / 3.0);\r\n         return value2Color(rgb / uMaxChroma);\r\n      }\r\n      else\r\n      {\r\n         return vec4(0.0, 0.0, 0.0, 1.0);\r\n      }\r\n   }\r\n}\r\n\r\nfloat d2(vec3 c1, vec3 c2)\r\n{\r\n   // sum the squares of the differences\r\n   return pow(c1.r - c2.r, 2.0) + pow(c1.g - c2.g, 2.0) + pow(c1.b - c2.b, 2.0);\r\n}\r\n\r\nvec3 closest(vec3 color, vec3 light, vec3 mid, vec3 dark)\r\n{\r\n   float dlight = d2(color, light);\r\n   float dmid = d2(color, mid);\r\n   float ddark = d2(color, dark);\r\n\r\n   float dmin = min(dlight, min(dmid, ddark));\r\n   if (dmin == dlight)\r\n   {\r\n      return light;\r\n   }\r\n   else if (dmin == dmid)\r\n   {\r\n      return mid;\r\n   }\r\n   else\r\n   {\r\n      return dark;\r\n   }\r\n}\r\n\r\nvec4 renderAsBands()\r\n{\r\n   float size = 0.07;\r\n   float margin = (1.0 - 6.0 * size) / 2.0;\r\n   if (texCoord.x < size && texCoord.y > margin && texCoord.y < (1.0 - margin))\r\n   {\r\n      if (texCoord.y < (margin + 1.0 * size))\r\n      {\r\n         return vec4(uDarkAccentColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 2.0 * size))\r\n      {\r\n         return vec4(uShadowColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 3.0 * size))\r\n      {\r\n         return vec4(uDarkLightColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 4.0 * size))\r\n      {\r\n         return vec4(uMidLightColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 5.0 * size))\r\n      {\r\n         return vec4(uLightLightColor, 1.0);\r\n      }\r\n      else // if (texCoord.y < (margin + 7.0 * size))\r\n      {\r\n         return vec4(uHighlightColor, 1.0);\r\n      }\r\n   }\r\n   else\r\n   {\r\n      vec4 color = texture2D(uTexture, texCoord);\r\n\r\n      // define the terminator as the point where things are 50% in shadow\r\n      float terminator = ((uShadowAlpha + uLightAlpha) / 2.0);\r\n      if (color.a > 1.0 && color.a <= terminator)\r\n      {\r\n         vec3 c = closest(color.rgb, uShadowColor, uReflectedLightColor, uDarkAccentColor);\r\n         return vec4(c, 1.0);\r\n      }\r\n      else if (color.a > terminator)\r\n      {\r\n         // only render the highlight where it's contribution is significant, i.e. greater\r\n         // than some threshold\r\n         const float SPECULAR_THRESHOLD = 0.1;\r\n         if (color.a > (uLightAlpha + SPECULAR_THRESHOLD))\r\n         {\r\n            return vec4(uHighlightColor, 1.0);\r\n         }\r\n         else\r\n         {\r\n            vec3 c = closest(color.rgb, uLightLightColor, uMidLightColor, uDarkLightColor);\r\n            return vec4(c, 1.0);\r\n         }\r\n      }\r\n      else\r\n      {\r\n         return color;\r\n      }\r\n   }\r\n}\r\n\r\nvec4 renderAsScience()\r\n{\r\n   // just return the texture\r\n   return texture2D(uTexture, texCoord);\r\n}\r\n\r\nvoid main()\r\n{\r\n   colors[0] = black;\r\n   colors[1] = blue;\r\n   colors[2] = green;\r\n   colors[3] = yellow;\r\n   colors[4] = orange;\r\n   colors[5] = red;\r\n\r\n   if (uMode == MODE_VALUE)\r\n   {\r\n      gl_FragColor = renderAsValue();\r\n   }\r\n   else if (uMode == MODE_CHROMA)\r\n   {\r\n      gl_FragColor = renderAsChroma();\r\n   }\r\n   else if (uMode == MODE_BANDS)\r\n   {\r\n      gl_FragColor = renderAsBands();\r\n   }\r\n   else\r\n   {\r\n      gl_FragColor = renderAsScience();\r\n   }\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/PathTracerToScreenVertex.glsl":
/*!***************************************************!*\
  !*** ./src/shaders/PathTracerToScreenVertex.glsl ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 vertex;\r\nvarying vec2 texCoord;\r\nuniform float uScale;\r\nuniform float uXOffset;\r\nuniform float uYOffset;\r\n\r\nvoid main()\r\n{\r\n   texCoord = vertex.xy * 0.5 + 0.5;\r\n\r\n   gl_Position = vec4(uScale * vertex.x + uXOffset, uScale * vertex.y + uYOffset, 0.0, 1.0);\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/PathTracerToTextureFragment.glsl":
/*!******************************************************!*\
  !*** ./src/shaders/PathTracerToTextureFragment.glsl ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<VERSION>\r\n\r\n#define NOTHING\r\n\r\n#ifdef USE_TRIANGLES\r\n#define ES300\r\n#endif\r\n\r\nprecision highp float;\r\n\r\n#ifdef ES300\r\nin vec3 initialRay;\r\n#else\r\nvarying vec3 initialRay;\r\n#endif\r\n\r\nuniform vec3 uEye;\r\nuniform float uTextureSize;\r\nuniform float uRandom;\r\nuniform sampler2D uTexture;\r\nuniform vec3 uLightPos;\r\nuniform float uLightIntensity;\r\nuniform vec3 uLightColor;\r\nuniform float uAmbientLightIntensity;\r\nuniform vec3 uObjColor;\r\nuniform float uBallRadius;\r\nuniform float uSample;\r\nuniform float uLightAlpha;\r\nuniform float uShadowAlpha;\r\n\r\n#ifdef ES300\r\nout vec4 fragColor;\r\n#else\r\n#define fragColor gl_FragColor\r\n#define texture texture2D\r\n#endif\r\n\r\nconst int MAX_BOUNCES = 10;\r\nconst float EPSILON = 0.000001;\r\nconst float OFFSET = 0.0001;\r\nconst float INFINITY = 10000.0;\r\nconst float LIGHT_SIZE = 0.1;\r\n#define BALL_CENTER vec3(0, uBallRadius, 0)\r\nconst vec3 DOME_CENTER = vec3(0, 0, 0);\r\nconst float DOME_RADIUS = 8.0;\r\nconst float VAL = 0.8;\r\nconst vec3 DOME_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 FLOOR_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 AMBIENT_COLOR = vec3(1.0, 1.0, 1.0);\r\nconst int NUM_LIGHTS = 6;\r\nconst float HEIGHT = 5.0;\r\nconst float RADIUS = 4.0;\r\nconst float PI = 3.14159265;\r\n\r\nstruct Light\r\n{\r\n   float intensity;\r\n   float size;\r\n   vec3 pos;\r\n   vec3 color;\r\n};\r\n\r\n Light Lights[NUM_LIGHTS];\r\n\r\n#ifdef USE_TRIANGLES\r\nstruct Triangle\r\n{\r\n   vec3 p0;\r\n   vec3 p1;\r\n   vec3 p2;\r\n};\r\n\r\nstruct Volume\r\n{\r\n   int startIndex;\r\n   int numTriangles;\r\n   vec3 boxMin;\r\n   vec3 boxMax;\r\n};\r\n\r\n// The following line is replaced with code generated in JavaScript\r\nconst int NUM_VERTICES = <NUM_VERTICES>;\r\nconst int NUM_VOLUMES = <NUM_VOLUMES>;\r\nconst int NUM_TRIANGLES = <NUM_TRIANGLES>;\r\n\r\nlayout(std140) uniform MyVerticesBlock { vec3 vertices[NUM_VERTICES]; };\r\n\r\nstruct ITriangle\r\n{\r\n   int i0;\r\n   int i1;\r\n   int i2;\r\n};\r\n\r\nlayout(std140) uniform MyTrianglesBlock { ITriangle triangles[NUM_TRIANGLES]; };\r\nTriangle getTriangle(int index)\r\n{\r\n   ITriangle tri = triangles[index];\r\n   vec3 p0 = vertices[tri.i0];\r\n   vec3 p1 = vertices[tri.i1];\r\n   vec3 p2 = vertices[tri.i2];\r\n   return Triangle(p0, p1, p2);\r\n}\r\n\r\n// The central object being rendered\r\nstruct Object\r\n{\r\n   Volume volumes[NUM_VOLUMES];\r\n   vec3 boxMin;\r\n   vec3 boxMax;\r\n};\r\n\r\nuniform Object object;\r\n\r\nbool intersectBox(const vec3 origin, const vec3 ray, const vec3 boxMin, const vec3 boxMax)\r\n{\r\n   vec3 rayInv = 1.0 / ray;\r\n   vec3 tbot = rayInv * (boxMin - origin);\r\n   vec3 ttop = rayInv * (boxMax - origin);\r\n   vec3 tmin = min(ttop, tbot);\r\n   vec3 tmax = max(ttop, tbot);\r\n   vec2 t = max(tmin.xx, tmin.yz);\r\n   float t0 = max(t.x, t.y);\r\n   t = min(tmax.xx, tmax.yz);\r\n   float t1 = min(t.x, t.y);\r\n   return t1 > max(t0, 0.0);\r\n}\r\n\r\nbool intersectVol(const vec3 origin, const vec3 ray, Volume vol)\r\n{\r\n   if (vol.numTriangles == 0)\r\n   {\r\n      return false;\r\n   }\r\n\r\n   return intersectBox(origin, ray, vol.boxMin, vol.boxMax);\r\n}\r\n\r\nbool intersectObj(const vec3 origin, const vec3 ray, Object object)\r\n{\r\n   return intersectBox(origin, ray, object.boxMin, object.boxMax);\r\n}\r\n\r\n// Möller–Trumbore ray-triangle intersection algorithm\r\n// source: http://bit.ly/2MxnPMG\r\nfloat intersectTriangle(vec3 origin, vec3 ray, Triangle tri)\r\n{\r\n   vec3 edge1, edge2, h, s, q;\r\n   float a, f, u, v;\r\n   edge1 = tri.p1 - tri.p0;\r\n   edge2 = tri.p2 - tri.p0;\r\n\r\n   h = cross(ray, edge2);\r\n   a = dot(edge1, h);\r\n   if (abs(a) < EPSILON)\r\n      return INFINITY;\r\n\r\n   f = 1.0 / a;\r\n   s = origin - tri.p0;\r\n   u = f * dot(s, h);\r\n   if (u < 0.0 || u > 1.0)\r\n      return INFINITY;\r\n\r\n   q = cross(s, edge1);\r\n   v = f * dot(ray, q);\r\n   if (v < 0.0 || (u + v) > 1.0)\r\n      return INFINITY;\r\n\r\n   // At this stage we can compute t to find out where the intersection point is on the line.\r\n   float t = f * dot(edge2, q);\r\n   if (t <= EPSILON) // this means that there is a line intersection but not a ray intersection.\r\n      return INFINITY;\r\n\r\n   return t; // ray intersection\r\n}\r\n\r\nvec3 normalForTriangle(vec3 origin, vec3 hit, int tIndex)\r\n{\r\n   Triangle tri = getTriangle(tIndex);\r\n   vec3 normal = cross(tri.p1 - tri.p0, tri.p2 - tri.p0);\r\n   normal = normalize(normal);\r\n   if (dot(normal, origin - hit) > 0.0)\r\n   {\r\n      return normal;\r\n   }\r\n   else\r\n   {\r\n      return -normal;\r\n   }\r\n}\r\n#endif\r\n\r\nfloat intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   vec3 toSphere = origin - sphereCenter;\r\n   float a = dot(ray, ray);\r\n   float b = 2.0 * dot(toSphere, ray);\r\n   float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;\r\n   float discriminant = b * b - 4.0 * a * c;\r\n   if (discriminant > 0.0)\r\n   {\r\n      float t1 = (-b - sqrt(discriminant)) / (2.0 * a);\r\n      float t2 = (-b + sqrt(discriminant)) / (2.0 * a);\r\n      if (t1 > 0.0)\r\n      {\r\n         return t1;\r\n      }\r\n      else if (t2 > 0.0)\r\n      {\r\n         return t2;\r\n      }\r\n   }\r\n   return INFINITY;\r\n}\r\n\r\nvec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   return (hit - sphereCenter) / sphereRadius;\r\n}\r\n\r\nfloat random(vec3 scale, float seed)\r\n{\r\n   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\r\n}\r\n\r\nvec3 cosineWeightedDirection(float seed, vec3 normal)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float r = sqrt(u);\r\n   float angle = 6.283185307179586 * v;\r\n   // compute basis from normal\r\n   vec3 sdir, tdir;\r\n   if (abs(normal.x) < .5)\r\n   {\r\n      sdir = cross(normal, vec3(1, 0, 0));\r\n   }\r\n   else\r\n   {\r\n      sdir = cross(normal, vec3(0, 1, 0));\r\n   }\r\n   tdir = cross(normal, sdir);\r\n   return r * cos(angle) * sdir + r * sin(angle) * tdir + sqrt(1. - u) * normal;\r\n}\r\n\r\nvec3 uniformlyRandomDirection(float seed)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float z = 1.0 - 2.0 * u;\r\n   float r = sqrt(1.0 - z * z);\r\n   float angle = 6.283185307179586 * v;\r\n   return vec3(r * cos(angle), r * sin(angle), z);\r\n}\r\n\r\nvec3 uniformlyRandomVector(float seed)\r\n{\r\n   return uniformlyRandomDirection(seed) * sqrt(random(vec3(36.7539, 50.3658, 306.2759), seed));\r\n}\r\n\r\nbool inShadow(vec3 origin, vec3 ray, float tLight)\r\n{\r\n   float tBall = intersectSphere(origin, ray, BALL_CENTER, uBallRadius);\r\n   if (tBall < tLight)\r\n   {\r\n      return true;\r\n   }\r\n\r\n#ifdef USE_TRIANGLES\r\n   if (intersectObj(origin, ray, object))\r\n   {\r\n      for (int i = 0; i < NUM_VOLUMES; i++)\r\n      {\r\n         Volume vol = object.volumes[i];\r\n         if (intersectVol(origin, ray, vol))\r\n         {\r\n            for (int i = vol.startIndex; i < (vol.startIndex + vol.numTriangles); i++)\r\n            {\r\n               Triangle tri = getTriangle(i);\r\n               if (intersectTriangle(origin, ray, tri) < tLight)\r\n               {\r\n                  return true;\r\n               }\r\n            }\r\n         }\r\n      }\r\n   }\r\n#endif\r\n\r\n   return false;\r\n}\r\n\r\n// All components are in the range [0…1], including hue.\r\nvec4 rgb2hsv(vec4 c)\r\n{\r\n   vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\r\n   vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\r\n   vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\r\n\r\n   float d = q.x - min(q.w, q.y);\r\n   float e = 1.0e-10;\r\n   return vec4(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x, c.a);\r\n}\r\n\r\n// All components are in the range[0…1], including hue.\r\nvec4 hsv2rgb(vec4 c)\r\n{\r\n   vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r\n   vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r\n   return vec4(c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y), c.a);\r\n}\r\n\r\nvec4 shiftTemperature(vec4 rgb, float deg, float tintStrength)\r\n{\r\n   vec4 hsv = rgb2hsv(rgb);\r\n   hsv.x += deg / 360.0;\r\n   vec4 fullTintRgb = hsv2rgb(hsv);\r\n\r\n   return mix(rgb, fullTintRgb, tintStrength);\r\n}\r\n\r\n// TODO move to a common file\r\nfloat toGray(vec4 c)\r\n{\r\n   // lots of ways to convert RGB to gray scale.\r\n\r\n   // simple averaging method\r\n   // return (c.r + c.g + c.b) / 3.0;\r\n\r\n   // relative perceptual values\r\n   // return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\r\n\r\n   // luminosity measure\r\n   float gamma = 2.2;\r\n   float y = 0.2126 * pow(c.r, gamma) + 0.7152 * pow(c.g, gamma) + .0722 * pow(c.b, gamma);\r\n   float l = 116.0 * pow(y, 1.0 / 3.0) - 16.0;\r\n   return l / 100.0;\r\n}\r\n\r\nvec4 calculateColor(vec3 origin, vec3 ray)\r\n{\r\n   vec3 accumulatedColor = vec3(0.0);\r\n   vec3 colorMask = vec3(1.0);\r\n   vec3 eye = origin;\r\n   bool objHit = false;\r\n   bool objShadow = false;\r\n   float specularContribution = 0.0;\r\n\r\n   // main raytracing loop\r\n   for (int bounce = 0; bounce < MAX_BOUNCES; bounce++)\r\n   {\r\n      // compute the intersection with everything\r\n      float tBall = intersectSphere(origin, ray, BALL_CENTER, uBallRadius);\r\n      vec3 surfaceColor = vec3(0.5, 0.5, 0.5);\r\n\r\n      float tObj = INFINITY;\r\n      int tIndex;\r\n#ifdef USE_TRIANGLES\r\n      if (intersectObj(origin, ray, object))\r\n      {\r\n         for (int i = 0; i < NUM_VOLUMES; i++)\r\n         {\r\n            Volume vol = object.volumes[i];\r\n            if (intersectVol(origin, ray, vol))\r\n            {\r\n               for (int i = vol.startIndex; i < (vol.startIndex + vol.numTriangles); i++)\r\n               {\r\n                  Triangle tri = getTriangle(i);\r\n                  float tTri = min(tObj, intersectTriangle(origin, ray, tri));\r\n                  if (tTri < tObj)\r\n                  {\r\n                     tObj = tTri;\r\n                     tIndex = i;\r\n                  }\r\n               }\r\n            }\r\n         }\r\n      }\r\n#endif\r\n\r\n      // if the first ray hits the light, return the light color. This\r\n      // simulates displaying the light\r\n      if (bounce == 0)\r\n      {\r\n         for (int i = 0; i < NUM_LIGHTS; i++)\r\n         {\r\n            float tLight = intersectSphere(origin, ray, Lights[i].pos, Lights[i].size);\r\n            if (tLight < tBall && tLight < tObj)\r\n            {\r\n               return vec4(Lights[i].intensity * Lights[i].color, 1.0);\r\n            }\r\n         }\r\n      }\r\n\r\n      // find the closest intersection\r\n      float tDome = intersectSphere(origin, ray, DOME_CENTER, DOME_RADIUS);\r\n      float tFloor = INFINITY;\r\n\r\n      // check for intersection with the ground\r\n      if (ray.y < 0.0)\r\n      {\r\n         // distance to floor = num unit vectors required to reach the floor\r\n         tFloor = -origin.y / ray.y;\r\n      }\r\n\r\n      // find the closest hit\r\n      float t = min(min(tDome, tFloor), min(tBall, tObj));\r\n\r\n      // info about hit\r\n      vec3 hit = origin + ray * t;\r\n      vec3 normal;\r\n\r\n      // calculate the normal\r\n      if (t == tFloor)\r\n      {\r\n         surfaceColor = FLOOR_COLOR;\r\n         normal = vec3(0.0, 1.0, 0.0);\r\n      }\r\n      else if (t == tBall)\r\n      {\r\n         surfaceColor = vec3(uObjColor);\r\n         normal = normalForSphere(hit, BALL_CENTER, uBallRadius);\r\n\r\n         if (bounce == 0)\r\n         {\r\n            objHit = true;\r\n         }\r\n      }\r\n#ifdef USE_TRIANGLES\r\n      else if (t == tObj)\r\n      {\r\n         surfaceColor = uObjColor;\r\n         normal = normalForTriangle(origin, hit, tIndex);\r\n\r\n         if (bounce == 0)\r\n         {\r\n            objHit = true;\r\n         }\r\n      }\r\n#endif\r\n      else if (t == tDome)\r\n      {\r\n         surfaceColor = DOME_COLOR;\r\n         normal = -normalForSphere(hit, DOME_CENTER, DOME_RADIUS);\r\n      }\r\n      else\r\n      {\r\n         break;\r\n      }\r\n\r\n      colorMask *= surfaceColor;\r\n\r\n      if (length(colorMask) < 0.01)\r\n      {\r\n         break;\r\n      }\r\n\r\n      for (int i = 0; i < NUM_LIGHTS; i++)\r\n      {\r\n         // compute diffuse lighting contribution\r\n         vec3 toLight = Lights[i].pos - hit;\r\n         vec3 toLightN = normalize(toLight);\r\n\r\n         // trace a shadow ray to the light\r\n         if (inShadow(hit + normal * OFFSET, toLightN, length(toLight)) == false)\r\n         {\r\n            // diffuse component\r\n            float diffuse = max(0.0, dot(toLightN, normal));\r\n\r\n            // specular component\r\n            vec3 toEye = eye - hit;\r\n            vec3 n2l = toLightN;\r\n            vec3 n2e = normalize(toEye);\r\n            vec3 bisector = (n2l + n2e) / length(n2l + n2e);\r\n            float specularCoefficient = 0.5;\r\n            float shininess = 100.0;\r\n            float specular = specularCoefficient * pow(max(0.0, dot(bisector, normal)), shininess);\r\n\r\n            // apply light fall off as distance squares. Use a min value for the\r\n            // light size otherwise falloff is too rapid\r\n            float radius = max(0.75, Lights[i].size);\r\n            float dist = max(1.0, (length(toLight) - radius) / radius);\r\n            float lightIntensity = Lights[i].intensity / (dist * dist);\r\n\r\n            accumulatedColor += colorMask * Lights[i].color * lightIntensity * diffuse;\r\n\r\n            // TODO define a color mask for specular reflection\r\n            //            accumulatedColor += mix(surfaceColor, Lights[i].color, 0.8) *\r\n            //            lightIntensity * specular;\r\n            accumulatedColor +=\r\n                (length(surfaceColor) * Lights[i].color) * lightIntensity * specular;\r\n\r\n            if (bounce == 0 && i == 0)\r\n            {\r\n               specularContribution += lightIntensity * specular;\r\n            }\r\n         }\r\n         else if (bounce == 0 && i == 0)\r\n         {\r\n            objShadow = true;\r\n         }\r\n      }\r\n\r\n      // calculate next origin\r\n      ray = cosineWeightedDirection(uRandom + float(bounce), normal);\r\n\r\n      origin = hit;\r\n   }\r\n\r\n   float alpha = 1.0;\r\n   if (objHit)\r\n   {\r\n      if (objShadow)\r\n      {\r\n         alpha = uShadowAlpha;\r\n      }\r\n      else\r\n      {\r\n         alpha = uLightAlpha;\r\n      }\r\n      alpha += clamp(specularContribution, 0.0, 1.0);\r\n   }\r\n\r\n   vec4 scienceColor = vec4(clamp(accumulatedColor, 0.0, 1.0), alpha);\r\n   return scienceColor;\r\n   /*\r\n   if (objHit)\r\n   {\r\n      return vec4(toArtist(scienceColor).rgb, alpha);\r\n   }\r\n   else\r\n   {\r\n      return scienceColor;\r\n   }\r\n   */\r\n}\r\n\r\nvoid main()\r\n{\r\n   vec3 rand = uniformlyRandomVector(uRandom) * LIGHT_SIZE;\r\n\r\n   Lights[0].intensity = uLightIntensity;\r\n   Lights[0].size = LIGHT_SIZE;\r\n   Lights[0].pos = uLightPos + rand;\r\n   Lights[0].color = uLightColor;\r\n\r\n   for (int i = 1; i < NUM_LIGHTS; i++)\r\n   {\r\n      float x = RADIUS * sin(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + rand.x;\r\n      float y = HEIGHT + rand.y;\r\n      float z = RADIUS * cos(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + rand.z;\r\n\r\n      Lights[i].intensity = uAmbientLightIntensity;\r\n      Lights[i].size = 2.0 * LIGHT_SIZE;\r\n      Lights[i].pos = vec3(x, y, z);\r\n      Lights[i].color = AMBIENT_COLOR;\r\n   }\r\n\r\n   // merge the new color into the existing texture\r\n   vec4 textureColor = texture(uTexture, gl_FragCoord.xy / uTextureSize);\r\n   vec4 newColor = calculateColor(uEye, initialRay);\r\n   float weight = (uSample / (1.0 + uSample));\r\n   fragColor = mix(newColor, textureColor, weight);\r\n}");

/***/ }),

/***/ "./src/shaders/PathTracerToTextureVertex.glsl":
/*!****************************************************!*\
  !*** ./src/shaders/PathTracerToTextureVertex.glsl ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<VERSION>\r\n\r\n#define NOTHING\r\n#ifdef USE_TRIANGLES\r\n#define ES300\r\n#endif\r\n\r\nprecision highp float;\r\nuniform vec3 uEye, uRay00, uRay01, uRay10, uRay11;\r\n\r\n#ifdef ES300\r\nin vec3 vertex;\r\nout vec3 initialRay;\r\n#else\r\nattribute vec3 vertex;\r\nvarying vec3 initialRay;\r\n#endif \r\n\r\nvoid main()\r\n{\r\n   vec2 percent = vertex.xy * 0.5 + 0.5;\r\n   initialRay = mix(mix(uRay00, uRay01, percent.y), mix(uRay10, uRay11, percent.y), percent.x);\r\n   gl_Position = vec4(vertex, 1.0);\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/TextureRendererFragment.glsl":
/*!**************************************************!*\
  !*** ./src/shaders/TextureRendererFragment.glsl ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nprecision highp float;\r\nvarying vec2 texCoord;\r\nuniform sampler2D uTexture;\r\n\r\nvoid main() { gl_FragColor = texture2D(uTexture, texCoord); }\r\n");

/***/ }),

/***/ "./src/shaders/TextureRendererVertex.glsl":
/*!************************************************!*\
  !*** ./src/shaders/TextureRendererVertex.glsl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nattribute vec3 vertex;\r\nvarying vec2 texCoord;\r\n\r\nvoid main()\r\n{\r\n   texCoord = vertex.xy * 0.5 + 0.5;\r\n\r\n   gl_Position = vec4(vertex.xy, 0.0, 1.0);\r\n}\r\n");

/***/ }),

/***/ "./src/shaders/ViewerFragment.glsl":
/*!*****************************************!*\
  !*** ./src/shaders/ViewerFragment.glsl ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\n\r\n// interpolated values from the vertex shader\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nuniform mat4 model;\r\nuniform mat4 view;\r\nuniform mat4 lightView;\r\nuniform mat4 projection;\r\nuniform vec3 uEye;\r\nuniform int uOrthographic;\r\n\r\nuniform float uLightIntensity;\r\nuniform float uAmbientIntensity;\r\nuniform vec3 uLightDirection;\r\n\r\n// the colors we use to represent our lightest and darkest values\r\nuniform vec3 uWhiteColor;\r\nuniform vec3 uBlackColor;\r\n\r\nuniform int uUseThresholds;\r\nuniform float uThreshold1;\r\nuniform float uThreshold2;\r\nuniform float uHighlight;\r\nuniform float uLightLight;\r\nuniform float uMidLight;\r\nuniform float uDarkLight;\r\nuniform float uShadow;\r\n\r\nuniform int uUseShadows;\r\nuniform sampler2D uShadowTexture;\r\n\r\nuniform vec3 uFloorCenter;\r\nuniform float uFloorRadius;\r\nuniform int uShowFloor;\r\n\r\nbool in_shadow(void)\r\n{\r\n   if (uUseShadows == 0)\r\n   {\r\n      return false;\r\n   }\r\n\r\n   // The vertex location rendered from the light source is almost in Normalized\r\n   // Device Coordinates (NDC), but the perspective division has not been\r\n   // performed yet. Perform the perspective divide. The (x,y,z) vertex location\r\n   // components are now each in the range [-1.0,+1.0].\r\n   // vec3 vertex_relative_to_light = v_Vertex_relative_to_light.xyz / v_Vertex_relative_to_light.w;\r\n   vec3 vertex = vShadowVertex;\r\n\r\n   // Convert the the values from Normalized Device Coordinates (range [-1.0,+1.0])\r\n   // to the range [0.0,1.0]. This mapping is done by scaling\r\n   // the values by 0.5, which gives values in the range [-0.5,+0.5] and then\r\n   // shifting the values by +0.5.\r\n   vertex = vertex * 0.5 + 0.5;\r\n\r\n   // Get the z value of this fragment in relationship to the light source.\r\n   // This value was stored in the shadow map (depth buffer of the frame buffer)\r\n   // which was passed to the shader as a texture map.\r\n   // vec4 textureValue = texture2D(uShadowSampler, vertex.xy);\r\n\r\n   // The texture map contains a single depth value for each pixel. However,\r\n   // the texture2D sampler always returns a color from a texture. For a\r\n   // gl.DEPTH_COMPONENT texture, the color contains the depth value in\r\n   // each of the color components. If the value was d, then the color returned\r\n   // is (d,d,d,1). This is a \"color\" (depth) value between [0.0,+1.0].\r\n   float shadowmap_distance = texture2D(uShadowTexture, vertex.xy).r;\r\n\r\n   // Test the distance between this fragment and the light source as\r\n   // calculated using the shadowmap transformation (vertex_relative_to_light.z) and\r\n   // the smallest distance between the closest fragment to the light source\r\n   // for this location, as stored in the shadowmap. When the closest\r\n   // distance to the light source was saved in the shadowmap, some\r\n   // precision was lost. Therefore we need a small tolerance factor to\r\n   // compensate for the lost precision.\r\n   float tol = 0.001;\r\n   if (vertex.z <= shadowmap_distance + tol)\r\n   {\r\n      // This surface receives full light because it is the closest surface\r\n      // to the light.\r\n      return false;\r\n   }\r\n   else\r\n   {\r\n      // This surface is in a shadow because there is a closer surface to\r\n      // the light source.\r\n      return true;\r\n   }\r\n}\r\n\r\nvec4 getColor(float val)\r\n{\r\n   float a = 1.0;\r\n   if (uShowFloor == 1)\r\n   {\r\n      // gradiate out the background from half transparent to full transparency\r\n      vec3 center = (model * vec4(uFloorCenter, 1.0)).xyz;\r\n      float dist = length(center - vVertex);\r\n      a = 0.5 * (1.0 - dist / uFloorRadius);\r\n   }\r\n\r\n   vec3 rgb = mix(uBlackColor, uWhiteColor, val);\r\n   return vec4(rgb, a);\r\n}\r\n\r\nvoid main()\r\n{\r\n   vec4 fragColor;\r\n   if (in_shadow())\r\n   {\r\n      if (uUseThresholds == 0)\r\n      {\r\n         fragColor = getColor(uAmbientIntensity);\r\n      }\r\n      else\r\n      {\r\n         fragColor = getColor(uShadow);\r\n      }\r\n      // useful for debugging - turn shadows red\r\n      // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\r\n      // return;\r\n   }\r\n   else\r\n   {\r\n      vec3 toLight = normalize(-uLightDirection);\r\n      vec3 toEye;\r\n      if (uOrthographic == 1)\r\n      {\r\n         toEye = vec3(0.0, 0.0, 1.0);\r\n      }\r\n      else\r\n      {\r\n         toEye = normalize(uEye - vVertex);\r\n      }\r\n\r\n      vec3 normal = normalize(vNormal); // vNormal is interpolated and nolonger normal\r\n\r\n      // swap normals for back facing triangles\r\n      if (dot(normal, toEye) < 0.0)\r\n      {\r\n         normal = -normal;\r\n      }\r\n\r\n      // compute diffuse contribution = cos of angle between the vectors (dot product)\r\n      float diffuseFactor = clamp(dot(normal, toLight), 0.0, 1.0);\r\n      float diffuse = diffuseFactor * uLightIntensity;\r\n\r\n      // compute specular contribution\r\n      float shininess = 15.0;\r\n      vec3 reflection = normalize(2.0 * dot(normal, toLight) * normal - toLight);\r\n      float cosAngle = clamp(dot(reflection, toEye), 0.0, 1.0); // clamp to avoid values > 90 deg\r\n      float specular = 0.1 * pow(cosAngle, shininess);\r\n\r\n      float val;\r\n      if (uUseThresholds == 0)\r\n      {\r\n         val = uAmbientIntensity + diffuse + specular;\r\n      }\r\n      else\r\n      {\r\n         float threshold = 1.0 - diffuseFactor;\r\n\r\n         float v1 = min(uThreshold1, uThreshold2);\r\n         float v2 = max(uThreshold1, uThreshold2);\r\n\r\n         if (threshold < v1)\r\n         {\r\n            val = uLightLight;\r\n         }\r\n         else if (threshold < v2)\r\n         {\r\n            val = uMidLight;\r\n         }\r\n         else if (threshold < 1.0)\r\n         {\r\n            val = uDarkLight;\r\n         }\r\n         else\r\n         {\r\n            val = uShadow;\r\n         }\r\n\r\n         if (specular > 0.05)\r\n         {\r\n            val = uHighlight;\r\n         }\r\n      }\r\n\r\n      fragColor = getColor(val);\r\n   }\r\n\r\n   gl_FragColor = fragColor;\r\n}");

/***/ }),

/***/ "./src/shaders/ViewerVertex.glsl":
/*!***************************************!*\
  !*** ./src/shaders/ViewerVertex.glsl ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 aVertex;\r\nattribute vec3 aNormal;\r\n\r\nuniform mat4 model;\r\nuniform mat4 view;\r\nuniform mat4 lightView;\r\nuniform mat4 projection;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nvoid main()\r\n{\r\n   gl_Position = projection * view * model * vec4(aVertex, 1.0);\r\n   vNormal = (model * vec4(aNormal, 0.0)).xyz;\r\n   vVertex = (model * vec4(aVertex, 1.0)).xyz;\r\n   vShadowVertex = (lightView * model * vec4(aVertex, 1.0)).xyz;\r\n}");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9Ecm9wRG93bk1lbnUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvUGxhbmVzQXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1NsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UYWJzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1ZpZXdlckFwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2FkZXJXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jsb2JGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9CbG9iU2hpbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yQW5hbHl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Ryb3BEb3duTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXhlZFRyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9JbmRleGVkVmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0LnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWxzRHJvcERvd25NZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5lc0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9pbnRlckV2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZmlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwaGVyaWNhbENvb3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9UZXh0dXJlUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RocmVzaG9sZEN0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlT2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iakJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlT2JqRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld2VyQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9Wb2x1bWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hGb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9nbEF0dHJpYnV0ZUJ1ZmZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xDbGlwU3BhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsRnJhbWVCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsSW5kZXhCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nbFRleHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVW5pZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xVbmlmb3JtQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbENvbG9yV2l0aEFscGhhLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9TY3JlZW5GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9UZXh0dXJlUmVuZGVyZXJGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1RleHR1cmVSZW5kZXJlclZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1ZpZXdlckZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvVmlld2VyVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0YsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEMsNEJBQTRCO1FBQzVCLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxH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TyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBRTdELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxj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QyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksYUFBYSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLGNBQWMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFN0QsT0FBTyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksOEJBQUssR0FBWjtRQUVHLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENB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LEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUks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QUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0osQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLENBQVE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxD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QUM7SUFDTyx1QkFBQyxHQUFULFVBQVUsQ0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRVMsZ0NBQVUsR0FBcEI7UUFDRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxN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Q2xELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxD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LEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLElBQUksRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFMUUsSUFBSSxFQUFFLEdBQUcsSUFBSSx5Q0FBSSxDQUFDLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLEdBQUcsSUFBSSx5Q0FBSSxDQUFDLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxD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Q0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksRUFBRSxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLEVBQUUsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxFQUFFLEdBQUcsSUFBSSx5Q0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksRUFBRSxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLEVBQUUsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUks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QUVHO1FBQ0ksV0FBTSxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUxQzs7V0FFRztRQUNJLFdBQU0sR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFpQmhELENBQUM7SUFmRTs7OztPQUlHO0lBQ0kscUJBQUksR0FBWCxVQUFZLFFBQXlCO1FBRWxDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFB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Q0FBNkMsMERBQTBELFdBQVcseUJBQXlCLG1EQUFtRCwwREFBMEQsc0RBQXNELGtEQUFrRCxrQ0FBa0MsY0FBYyxtREFBbUQsZ0NBQWdDLGNBQWMsb0RBQW9ELGlDQUFpQyxjQUFjLCtCQUErQiw4QkFBOEIsY0FBYyxtREFBbUQsaUNBQWlDLGNBQWMsV0FBVyx3Q0FBd0MsUUFBUSxvQ0FBb0MsS0FBSyxDOzs7Ozs7Ozs7Ozs7QUNBdG1NO0FBQWUsdUZBQXdCLDJCQUEyQiwyQkFBMkIsc0JBQXNCLDJCQUEyQiw0QkFBNEIsNkJBQTZCLHlCQUF5QiwrQkFBK0Isd0JBQXdCLG9FQUFvRSxrREFBa0Qsa0RBQWtELG9FQUFvRSxLQUFLLEM7Ozs7Ozs7Ozs7O0FDQXhnQixVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhIQUEwRDs7QUFFNUY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcclxcbi5Ecm9wRG93biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcGRvd24gQnV0dG9uICovXFxyXFxuLkRyb3BEb3duQnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXFxyXFxuLkRyb3BEb3duQnV0dG9uOmhvdmVyLFxcclxcbi5Ecm9wRG93bkJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cXHJcXG4uRHJvcERvd25NZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxuICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXFxyXFxuLkRyb3BEb3duTWVudUl0ZW0ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xcclxcbi5Ecm9wRG93bk1lbnVJdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXFxyXFxuLkRyb3BEb3duU2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5Ecm9wRG93bk1lbnUge1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5QbGFuZXNBcHAgI01haW5DYW52YXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNPdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjQ3RybHNDb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNMaWdodExpZ2h0UmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG4uUGxhbmVzQXBwICNMaWdodExpZ2h0U2xpZGVyUmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmF5LCBkYXJrZ3JheSk7XFxyXFxufVxcclxcblxcclxcbi5QbGFuZXNBcHAgI01pZExpZ2h0UmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG4uUGxhbmVzQXBwICNNaWRMaWdodFNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNEYXJrTGlnaHRSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmF5LCBkYXJrZ3JheSk7XFxyXFxufVxcclxcbi5QbGFuZXNBcHAgI0RhcmtMaWdodFNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwIC5TbGlkZXJSYW5nZSB7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwIC5TbGlkZXJMYWJlbCB7XFxyXFxuICB3aWR0aDogMTglO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNUaHJlc2hvbGRDYW52YXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuUGxhbmVzQXBwIC5TbGlkZXJSYW5nZSB7XFxyXFxuICAgIHdpZHRoOiAyOCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUGxhbmVzQXBwIC5TbGlkZXJMYWJlbCB7XFxyXFxuICAgIHdpZHRoOiAyMiU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUGxhbmVzQXBwICNUaHJlc2hvbGRDYW52YXMge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTUwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuU2xpZGVyTGFiZWwge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckhlYWRlciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xcclxcbiAgYm9yZGVyOiBncmF5O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyZWVuLCBkYXJrZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckNvbG9yU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiBncmF5O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlNsaWRlckxhYmVsIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgICB3aWR0aDogMzRweDtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyVmFsdWVTcGFuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3R5bGUgdGhlIHRhYiAqL1xcclxcbi5UYWJzIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiB0aGUgdGFiIGNvbnRlbnQgKi9cXHJcXG4uVGFicyBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXFxyXFxuLlRhYnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cXHJcXG4uVGFicyBidXR0b24uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXFxyXFxuLlRhYkNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuVGFicyBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlZpZXdlckFwcCAjTWFpbkNhbnZhcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMTcsIDEzNCk7XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXJBcHAgI092ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRHJvcERvd25NZW51LmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NsaWRlci5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJzLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BsYW5lc0FwcC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9WaWV3ZXJBcHAuY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIGxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RyYXdUaW1lIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTQ5NXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBmb250LXNpemU6IDhwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwcm9ncmVzc1NwYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAzcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAyMDUsIDUwLCAwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGVCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gICoge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHJhd1RpbWUge1xcclxcbiAgICB0b3A6IC05NjBweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbW9kZUJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhiLGMsZCl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGIpLGUucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGUub25sb2FkPWZ1bmN0aW9uKCl7YShlLnJlc3BvbnNlLGMsZCl9LGUub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZS5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYSxiLGQsZSl7aWYoZT1lfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZSYmKGUuZG9jdW1lbnQudGl0bGU9ZS5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBhKXJldHVybiBjKGEsYixkKTt2YXIgZz1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09YS50eXBlLGg9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaT0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGl8fGcmJmgpJiZcIm9iamVjdFwiPT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGo9bmV3IEZpbGVSZWFkZXI7ai5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1qLnJlc3VsdDthPWk/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZT9lLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGU9bnVsbH0sai5yZWFkQXNEYXRhVVJMKGEpfWVsc2V7dmFyIGs9Zi5VUkx8fGYud2Via2l0VVJMLGw9ay5jcmVhdGVPYmplY3RVUkwoYSk7ZT9lLmxvY2F0aW9uPWw6bG9jYXRpb24uaHJlZj1sLGU9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay5yZXZva2VPYmplY3RVUkwobCl9LDRFNCl9fSk7Zi5zYXZlQXM9YS5zYXZlQXM9YSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9YSl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiTG9hZGVyV29ya2VyLndvcmtlci5qc1wiKTtcbn07IiwiaW1wb3J0ICcuL0Jsb2JTaGltJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyBmb3Igc2xpY2luZyB1cCBCbG9ic1xyXG4gKi9cclxuY2xhc3MgQmxvYlNsaWNlciB7XHJcblxyXG4gICAvLyBUaGUgc3RhcnQgYnl0ZSB2YWx1ZSBmb3IgdGhlIG5leHQgc2xpY2VcclxuICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAvLyBUaGUgQmxvYiB3ZSdyZSBzbGljaW5nIFxyXG4gICBwcml2YXRlIGJsb2I6IEJsb2I7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gYmUgc2xpY2VkXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoYmxvYjogQmxvYikge1xyXG4gICAgICB0aGlzLmJsb2IgPSBibG9iO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbmV4dCBzbGljZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBzbGljZWQgQmxvYi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZXh0KGxlbjogbnVtYmVyKTogQmxvYiB7XHJcbiAgICAgIGxldCBiID0gdGhpcy5ibG9iLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuc3RhcnQgKyBsZW4pO1xyXG4gICAgICB0aGlzLnN0YXJ0ICs9IGxlbjtcclxuICAgICAgcmV0dXJuIGI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gQXJyYXlCdWZmZXIuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBBcnJheUJ1ZmZlciBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5leHRBcnJheUJ1ZmZlcihsZW46IG51bWJlcik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV4dChsZW4pLmFycmF5QnVmZmVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gSW50MzJBcnJheVxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBJbnQzMkFycmF5IHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dEludDMyQXJyYXkobGVuOiBudW1iZXIpOiBQcm9taXNlPEludDMyQXJyYXk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGF3YWl0IHRoaXMubmV4dEFycmF5QnVmZmVyKGxlbikpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGEgc3RyaW5nXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dFN0cmluZyhsZW46IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5leHQobGVuKS50ZXh0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgY3JlYXRpb24gYW5kIGV4dHJhY3Rpb24gb2YgYSBzZWxmIGRlc2NyaWJpbmcgQmxvYi4gRGF0YVxyXG4gKiBpcyBzdG9yZWQgYXM6XHJcbiAqIFxyXG4gKiBbbnVtRW50cmllc10gLSBUaGUgbnVtYmVyIGVudHJpZXMgaW4gdGhlIGZpbGUuIDQgYnl0ZSBJbnQzMlxyXG4gKiBbc2l6ZXNdIC0gU2l6ZXMgb2YgYWxsIHRoZSBlbnRyaWVzLCBpbmNsdWRpbmcgdGhlIGluZm8gb2JqZWN0XHJcbiAqIFtpbmZvXSAtIFVzZXIgc3VwcGxpZWQgZGF0YSBhcyBhIEpTT04gc3RyaW5nXHJcbiAqIFtlbnRyeSAxXSAtIEZpcnN0IHVzZXIgZW50cnlcclxuICogW2VudHJ5IDJdIC0gU2Vjb25kIHVzZXIgZW50cnlcclxuICogWy4uLl1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9iRmlsZSB7XHJcbiAgIHB1YmxpYyBpbmZvOiBhbnk7XHJcbiAgIHB1YmxpYyBwYXJ0czogQmxvYltdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIGhlYWRlciB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQmxvYlxyXG4gICAgKiBAcGFyYW0gcGFydHMgVGhlIGRhdGEgY29udGVudHMgb2YgdGhlIEJsb2JcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoaW5mbzogb2JqZWN0LCBwYXJ0czogQmxvYltdKSB7XHJcbiAgICAgIHRoaXMuaW5mbyA9IGluZm87XHJcbiAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgcmF3IEJsb2Igb2JqZWN0IGludG8gYSBCbG9iRmlsZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gcHJvY2Vzcy5cclxuICAgICogQHJldHVybiBBIEJsb2JGaWxlIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4dHJhY3QoYmxvYjogQmxvYik6IFByb21pc2U8QmxvYkZpbGU+IHtcclxuXHJcbiAgICAgIGxldCBibG9iU2xpY2VyID0gbmV3IEJsb2JTbGljZXIoYmxvYik7XHJcblxyXG4gICAgICAvLyBmaXJzdCBleHRyYWN0IHRoZSBudW1iZXIgb2YgZW50cmllc1xyXG4gICAgICBsZXQgbnVtRW50cmllcyA9IChhd2FpdCBibG9iU2xpY2VyLm5leHRJbnQzMkFycmF5KDQpKVswXTtcclxuXHJcbiAgICAgIC8vIHRoZSB0aGUgc2l6ZXMgYXJyYXlcclxuICAgICAgbGV0IHNpemVzID0gYXdhaXQgYmxvYlNsaWNlci5uZXh0SW50MzJBcnJheSg0ICogKG51bUVudHJpZXMgKyAxKSk7XHJcblxyXG4gICAgICAvLyB0aGVuIHRoZSBpbmZvIG9iamVjdFxyXG4gICAgICBsZXQganNvbkluZm8gPSBhd2FpdCBibG9iU2xpY2VyLm5leHRTdHJpbmcoc2l6ZXNbMF0pO1xyXG5cclxuICAgICAgLy8gdGhlbiBhbGwgdGhlIHN1YiBibG9ic1xyXG4gICAgICBsZXQgcGFydHM6IEJsb2JbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUVudHJpZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IHNpemVzW2kgKyAxXTtcclxuICAgICAgICAgcGFydHMucHVzaChibG9iU2xpY2VyLm5leHQoc2l6ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEJsb2JGaWxlKEpTT04ucGFyc2UoanNvbkluZm8pLCBwYXJ0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBCbG9iRmlsZSBCbG9iXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gaGVhZGVyIHRvIGJlIHN0b3JlZCB3aXRoIHRoZSBCbG9iXHJcbiAgICAqIEBwYXJhbSBwYXJ0cyBUaGUgZGF0YSBjb250ZW50cyBvZiB0aGUgQmxvYlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGVCbG9iKGluZm86IG9iamVjdCwgcGFydHM6IEJsb2JQYXJ0W10pOiBCbG9iIHtcclxuXHJcbiAgICAgIGxldCBqc29uSW5mbyA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xyXG5cclxuICAgICAgLy8gQnVpbGQgdGhlIGFycmF5IG9mIHNpemVzXHJcbiAgICAgIGxldCBzaXplczogbnVtYmVyW10gPSBbanNvbkluZm8ubGVuZ3RoXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgcGFydCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICBpZiAocGFydCBpbnN0YW5jZW9mIEludDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaChwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPSAnVW5zdXBwb3J0ZWQgQmxvYiBQYXJ0IFR5cGU6ICcgKyB0eXBlb2YgcGFydDtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhc3NlbWJsZSB0aGUgYmxvYiBwYXJ0c1xyXG4gICAgICBsZXQgYWxsUGFydHM6IEJsb2JQYXJ0W10gPSBbXTtcclxuICAgICAgYWxsUGFydHMucHVzaChuZXcgSW50MzJBcnJheShbcGFydHMubGVuZ3RoXSkpO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKG5ldyBJbnQzMkFycmF5KHNpemVzKSk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2goanNvbkluZm8pO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKC4uLnBhcnRzKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgYmxvYlxyXG4gICAgICByZXR1cm4gbmV3IEJsb2IoYWxsUGFydHMpO1xyXG4gICB9XHJcbn0iLCIvLyBuZWVkZWQgZm9yIFNhZmFyaVxyXG5pZiAoIUJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyKSB7XHJcbiAgIEJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuXHJcbiAgICAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0YXJ0IHRoZSByZWFkXHJcbiAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG5cclxuLy8gbmVlZGVkIGZvciBTYWZhcmlcclxuaWYgKCFCbG9iLnByb3RvdHlwZS50ZXh0KSB7XHJcblxyXG4gICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICBCbG9iLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlY29kZSBpbnRvIGEgc3RyaW5nXHJcbiAgICAgICAgICAgIGxldCB0eHQgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHh0KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdGFydCB0aGUgcmVhZFxyXG4gICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuIiwiXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgcmVwcmVzZW50aW5nIGNvbG9yIHZhbHVlcy4gVmFsdWVzIG1heSBiZSBvbiBhIDAtMSBvciAwLTI1NSBzY2FsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgIHB1YmxpYyByOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBnOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBiOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBhOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIFJHQiB2YWx1ZXMgdG8gc3RvcmUgaW4gdGhpcyBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5yID0gY29sb3JbMF07XHJcbiAgICAgIHRoaXMuZyA9IGNvbG9yWzFdO1xyXG4gICAgICB0aGlzLmIgPSBjb2xvclsyXTtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgdGhpcy5hID0gY29sb3JbM107XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvcjMgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogVGhlIGl0ZW1zIHJldHVybmVkIGZyb20gZXhhbWluaW5nIHRoZSBjdXJyZW50IHZpZXdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9yRGF0YSB7XHJcbiAgIG1heENocm9tYTogbnVtYmVyLFxyXG4gICBoaWdobGlnaHRDb2xvcjogZ2xDb2xvcjMsXHJcbiAgIGF2Z0xpZ2h0Q29sb3I6IGdsQ29sb3IzLFxyXG4gICBsaWdodGVzdExpZ2h0Q29sb3I6IGdsQ29sb3IzLFxyXG4gICBkYXJrZXN0TGlnaHRDb2xvcjogZ2xDb2xvcjMsXHJcbiAgIGF2Z1NoYWRvd0NvbG9yOiBnbENvbG9yMyxcclxuICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcjMsXHJcbiAgIGRhcmtlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcjMsXHJcbiAgIHRlcm1pbmF0b3JDb2xvcjogZ2xDb2xvcjMsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGdyYWJzIGEgY29weSBvZiB0aGUgcmVuZGVyZWQgdGV4dHVyZSBhbmQgZXhhbWluZXMgaXQgZm9yXHJcbiAqIGNvbG9yIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvckFuYWx5emVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYXJyYXkgd2hlcmUgd2UnbGwgZHVtcCB0aGUgdGV4dHVyZSB0by4gQ2FjaGUgdGhpcyBhcnJheSBpbnN0ZWFkIG9mXHJcbiAgICAqIGFsbG9jYXRpbmcgYSBuZXcgb25lIGZvciBlYWNoIGZyYW1lLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBwaXhlbHM6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTaXplIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gc2l6ZSBUaGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgYnVmZmVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgLy8gYWxsb2NhdGUgdGhlIGJ1ZmZlciB1c2VkIGZvciBncmFic1xyXG4gICAgICB0aGlzLnBpeGVscyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zaXplICogdGhpcy5zaXplICogNCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSdW5zIHRoZSBhbmFseXNpcyAtIGdyYWJzIGEgY29weSBvZiB0aGUgZnJhbWUgYnVmZmVyIGFuZCBzY2FucyBpdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBhbHBoYUxpZ2h0IFRoZSBhbHBoYSB2YWx1ZSBmb3IgdGhpbmdzIGluIGxpZ2h0LiBWYWx1ZXMgYWJvdmUgdGhpcyBhcmUgZHVlIHRvIHNwZWN1bGFyIGxpZ2h0aW5nLlxyXG4gICAgKiBAcGFyYW0gYWxwaGFTaGFkb3cgVGhlIGFscGhhIHZhbHVlIGZvciB0aGluZ3MgaW4gc2hhZG93LlxyXG4gICAgKi9cclxuICAgcHVibGljIHJ1bihcclxuICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIGFscGhhTGlnaHQ6IG51bWJlcixcclxuICAgICAgYWxwaGFTaGFkb3c6IG51bWJlclxyXG4gICApOiBJQ29sb3JEYXRhIHtcclxuXHJcbiAgICAgIGxldCBkYXRhOiBJQ29sb3JEYXRhID0ge1xyXG4gICAgICAgICBtYXhDaHJvbWE6IDAsXHJcbiAgICAgICAgIGF2Z0xpZ2h0Q29sb3I6IG5ldyBnbENvbG9yMyhbMCwgMCwgMF0pLFxyXG4gICAgICAgICBsaWdodGVzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yMyhbMCwgMCwgMF0pLFxyXG4gICAgICAgICBkYXJrZXN0TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IzKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIGF2Z1NoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcjMoWzAsIDAsIDBdKSxcclxuICAgICAgICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IzKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGRhcmtlc3RTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IzKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIHRlcm1pbmF0b3JDb2xvcjogbmV3IGdsQ29sb3IzKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGhpZ2hsaWdodENvbG9yOiBuZXcgZ2xDb2xvcjMoWzAsIDAsIDBdKSxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVE9ETyBoYW5kbGUgY2FzZSB3aGVuIHRoZSB0ZXh0IHR5cGUgaXMgVU5TSUdORURfQllURVxyXG4gICAgICBnbC5yZWFkUGl4ZWxzKDAsIDAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplLCBnbC5SR0JBLCBnbC5GTE9BVCwgdGhpcy5waXhlbHMpO1xyXG5cclxuICAgICAgbGV0IG51bUxpZ2h0UGl4ZWxzID0gMDtcclxuICAgICAgbGV0IG51bVNoYWRvd1BpeGVscyA9IDA7XHJcbiAgICAgIGxldCBudW1UZXJtaW5hdG9yUGl4ZWxzID0gMDtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5zaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAocm93ICogdGhpcy5zaXplICsgY29sKSAqIDQ7XHJcbiAgICAgICAgICAgIGxldCByID0gdGhpcy5waXhlbHNbaW5kZXggKyAwXTtcclxuICAgICAgICAgICAgbGV0IGcgPSB0aGlzLnBpeGVsc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMl07XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5waXhlbHNbaW5kZXggKyAzXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSB2YWx1ZXMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIGJhbGxcclxuICAgICAgICAgICAgaWYgKGEgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhdmcgPSAociArIGcgKyBiKSAvIDM7XHJcbiAgICAgICAgICAgIGxldCBjaHJvbWEgPSAoTWF0aC5hYnMociAtIGF2ZykgKyBNYXRoLmFicyhnIC0gYXZnKSArIE1hdGguYWJzKGIgLSBhdmcpKSAvICg0IC8gMyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hyb21hID4gZGF0YS5tYXhDaHJvbWEpIHtcclxuICAgICAgICAgICAgICAgZGF0YS5tYXhDaHJvbWEgPSBjaHJvbWE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IG5ldyBnbENvbG9yMyhbciwgZywgYl0pO1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBhbHBoYUxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIG51bUxpZ2h0UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPSBnbENvbG9yMy5saWdodGVzdChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gZ2xDb2xvcjMuZGFya2VzdChkYXRhLmRhcmtlc3RMaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5yICs9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYSA9PSBhbHBoYVNoYWRvdykge1xyXG4gICAgICAgICAgICAgICBudW1TaGFkb3dQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgaWYgKGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID0gZ2xDb2xvcjMubGlnaHRlc3QoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID0gZ2xDb2xvcjMuZGFya2VzdChkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPiBhbHBoYUxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIGRhdGEuaGlnaGxpZ2h0Q29sb3IgPSBnbENvbG9yMy5saWdodGVzdChkYXRhLmhpZ2hsaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXJtaW5hdG9yID0gKGFscGhhTGlnaHQgKyBhbHBoYVNoYWRvdykgLyAyLjA7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhIC0gdGVybWluYXRvcikgPCAwLjEpIHtcclxuICAgICAgICAgICAgICAgbnVtVGVybWluYXRvclBpeGVscysrO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5yICs9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG51bUxpZ2h0UGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuciAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmcgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5iIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1TaGFkb3dQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuciAvPSBudW1TaGFkb3dQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuZyAvPSBudW1TaGFkb3dQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuYiAvPSBudW1TaGFkb3dQaXhlbHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bVRlcm1pbmF0b3JQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLnIgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuZyAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5iIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcnBvbGF0ZXMgYW5kIGFycmF5IG9mIGNvbG9yc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yUmFuZ2Uge1xyXG4gICAvKipcclxuICAgICogVGhlIGNvbG9yc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb2xvcnM6IGh0bWxDb2xvcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3JzIFRoZSBjb2xvcnMgdG8gaW50ZXJwb2xhdGVcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcnM6IGh0bWxDb2xvcltdKSB7XHJcbiAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhbiBpbnRlcnBvbGF0ZWQgY29sb3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsdWUgQSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KHZhbHVlOiBudW1iZXIpOiBodG1sQ29sb3Ige1xyXG5cclxuICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsdWUgPj0gMSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpICogdmFsdWUpO1xyXG4gICAgICAgICBsZXQgcGFydGlhbCA9ICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlIC0gaW5kZXg7XHJcblxyXG4gICAgICAgICBsZXQgciA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLnIgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uciAtIHRoaXMuY29sb3JzW2luZGV4XS5yKSk7XHJcbiAgICAgICAgIGxldCBnID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uZyArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5nIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmcpKTtcclxuICAgICAgICAgbGV0IGIgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5iICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLmIgLSB0aGlzLmNvbG9yc1tpbmRleF0uYikpO1xyXG5cclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJleHBvcnQgdHlwZSBNZW51SXRlbUZ1bmN0aW9uID0gKCkgPT4gdm9pZDtcclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gICBwdWJsaWMgbWVudURpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgIHB1YmxpYyBpZ25vcmVFdmVudCA9IGZhbHNlO1xyXG5cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgaWYgKHRoaXMubWVudURpdi5jbGFzc0xpc3QuY29udGFpbnMoJ0Ryb3BEb3duU2hvdycpID09PSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnRHJvcERvd25TaG93Jyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdEcm9wRG93blNob3cnKSkge1xyXG4gICAgICAgICB0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnRHJvcERvd25TaG93Jyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIGFkZENsb3NlSGFuZGxlcigpIHtcclxuICAgICAgLy8gVE9ETyBvbiB0aGUgcGhvbmUgdGhpcyBldmVudCBkb2VzIG5vdCBvY2N1ciB3aGVuIGNsaWNraW5nIG92ZXIgdGhlIGNhbnZhc1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGlmICh0aGlzLmlnbm9yZUV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLmlnbm9yZUV2ZW50ID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wRG93bk1lbnUgZXh0ZW5kcyBNZW51IHtcclxuICAgcHJpdmF0ZSBkcm9wRG93bkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5kcm9wRG93bkRpdi5pZCA9IGlkICsgJ0Ryb3BEb3duJztcclxuICAgICAgdGhpcy5kcm9wRG93bkRpdi5jbGFzc05hbWUgPSAnRHJvcERvd24nO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wRG93bkRpdik7XHJcblxyXG4gICAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBtZW51QnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIG1lbnVCdXR0b24uY2xhc3NOYW1lID0gJ0Ryb3BEb3duQnV0dG9uJztcclxuICAgICAgbWVudUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmlnbm9yZUV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kcm9wRG93bkRpdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuXHJcbiAgICAgIHN1cGVyLmFkZENsb3NlSGFuZGxlcigpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMubWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLm1lbnVEaXYuY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIHRoaXMubWVudURpdi5pZCA9IGlkICsgJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQodGhpcy5tZW51RGl2KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGFkZEl0ZW0odGV4dDogc3RyaW5nLCBjYWxsYmFjazogTWVudUl0ZW1GdW5jdGlvbikge1xyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpdGVtLmlkID0gdGhpcy5pZCArICdEcm9wRG93bk1lbnVJdGVtJztcclxuICAgICAgaXRlbS5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudURpdi5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGFkZFN1Yk1lbnUodGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKTogU3ViTWVudSB7XHJcblxyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpdGVtLmlkID0gdGhpcy5pZCArICdEcm9wRG93bk1lbnVJdGVtJztcclxuICAgICAgaXRlbS5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgc3ViTWVudS5zaG93KCk7XHJcbiAgICAgICAgIHN1Yk1lbnUuaWdub3JlRXZlbnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudURpdi5hcHBlbmRDaGlsZChpdGVtKTtcclxuXHJcbiAgICAgIGxldCBzdWJNZW51ID0gbmV3IFN1Yk1lbnUoaXRlbSwgdGhpcy5kcm9wRG93bkRpdiwgaWQpO1xyXG4gICAgICByZXR1cm4gc3ViTWVudTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ViTWVudSBleHRlbmRzIE1lbnUge1xyXG4gICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgZHJvcERvd25EaXY6IEhUTUxEaXZFbGVtZW50LCBpZDogc3RyaW5nKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgdGhpcy5tZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMubWVudURpdi5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51JztcclxuICAgICAgdGhpcy5tZW51RGl2LmlkID0gaWQgKyAnRHJvcERvd25NZW51JztcclxuICAgICAgZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQodGhpcy5tZW51RGl2KTtcclxuXHJcbiAgICAgIHRoaXMuYWRkQ2xvc2VIYW5kbGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhZGRJdGVtKHRleHQ6IHN0cmluZywgY2FsbGJhY2s6IE1lbnVJdGVtRnVuY3Rpb24pIHtcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaXRlbS5pZCA9IHRoaXMuaWQgKyAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy5pZ25vcmVFdmVudCA9IHRydWU7XHJcbiAgICAgICAgIC8vIFRPRE8gdGhlIGdsb2JhbCBoYW5kbGVyIHNob3VsZCBnZXQgdGhpcyBidXQgZG9lcyBub3Qgb24gcGhvbmVzXHJcbiAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudURpdi5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IHR5cGUgU3RhdHVzRnVuY3Rpb24gPSAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gdjEgKyBjbGFtcChtaXgsIDAsIDEpICogKHYyIC0gdjEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3MocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAoYSA9PT0gdW5kZWZpbmVkID8gJycgOiAnLCcgKyBhKSArICcpJztcclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFZlYzMgfSBmcm9tIFwiLi9JbmRleGVkVmVjM1wiO1xyXG5cclxuLyoqXHJcbiAqIE1pbmltYWxpc3Qgd3JhcHBlciBhcm91bmQgYSBXZWJHTCB0cmlhbmdsZSBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5kZXhlZFRyaWFuZ2xlIHtcclxuICAgcHVibGljIHYxOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIHYyOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIHYzOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIG4xOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIG4yOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIG4zOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIGkxOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpMjogbnVtYmVyO1xyXG4gICBwdWJsaWMgaTM6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICB2ZXJ0aWNlczogbnVtYmVyW10sXHJcbiAgICAgIG5vcm1hbHM6IG51bWJlcltdLFxyXG4gICAgICBpMTogbnVtYmVyLFxyXG4gICAgICBpMjogbnVtYmVyLFxyXG4gICAgICBpMzogbnVtYmVyLFxyXG4gICApIHtcclxuICAgICAgdGhpcy52MSA9IG5ldyBJbmRleGVkVmVjMyh2ZXJ0aWNlcywgaTEpO1xyXG4gICAgICB0aGlzLnYyID0gbmV3IEluZGV4ZWRWZWMzKHZlcnRpY2VzLCBpMik7XHJcbiAgICAgIHRoaXMudjMgPSBuZXcgSW5kZXhlZFZlYzModmVydGljZXMsIGkzKTtcclxuICAgICAgdGhpcy5uMSA9IG5ldyBJbmRleGVkVmVjMyhub3JtYWxzLCBpMSk7XHJcbiAgICAgIHRoaXMubjIgPSBuZXcgSW5kZXhlZFZlYzMobm9ybWFscywgaTIpO1xyXG4gICAgICB0aGlzLm4zID0gbmV3IEluZGV4ZWRWZWMzKG5vcm1hbHMsIGkzKTtcclxuICAgICAgdGhpcy5pMSA9IGkxO1xyXG4gICAgICB0aGlzLmkyID0gaTI7XHJcbiAgICAgIHRoaXMuaTMgPSBpMztcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjEueCwgdGhpcy52Mi54LCB0aGlzLnYzLngpO1xyXG4gICB9XHJcbiAgIGdldCBtaW5ZKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYxLnksIHRoaXMudjIueSwgdGhpcy52My55KTtcclxuICAgfVxyXG4gICBnZXQgbWluWigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MS56LCB0aGlzLnYyLnosIHRoaXMudjMueik7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhYKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYxLngsIHRoaXMudjIueCwgdGhpcy52My54KTtcclxuICAgfVxyXG4gICBnZXQgbWF4WSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MS55LCB0aGlzLnYyLnksIHRoaXMudjMueSk7XHJcbiAgIH1cclxuICAgZ2V0IG1heFooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjEueiwgdGhpcy52Mi56LCB0aGlzLnYzLnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbCgpOiBWZWMzIHtcclxuICAgICAgbGV0IHYxID0gdGhpcy52MS50b1ZlYzMoKTtcclxuICAgICAgbGV0IHYyID0gdGhpcy52Mi50b1ZlYzMoKTtcclxuICAgICAgbGV0IHYzID0gdGhpcy52My50b1ZlYzMoKTtcclxuXHJcbiAgICAgIGxldCBhID0gdjIuc3VidHJhY3QodjEpO1xyXG4gICAgICBsZXQgYiA9IHYzLnN1YnRyYWN0KHYyKTtcclxuICAgICAgcmV0dXJuIGEuY3Jvc3MoYikubm9ybWFsaXplKCk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IElWZWMzIH0gZnJvbSBcIi4vSVZlYzNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkVmVjMyBpbXBsZW1lbnRzIElWZWMzIHtcclxuXHJcbiAgIHByaXZhdGUgdmFsdWVzOiBudW1iZXJbXTtcclxuICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IodmFsdWVzOiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMF07XHJcbiAgIH1cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDFdO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAyXTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMF0gPSB2YWw7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMV0gPSB2YWw7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b1ZlYzMoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbdGhpcy54LCB0aGlzLnksIHRoaXMuel0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWM0LCBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyBtYXRyaXggZm9yIHVzZSBpbiBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWF0NCB7XHJcbiAgIC8qKiBUaGUgbWF0cml4IHZhbHVlIHN0b3JlZCBhcyBhIDE2IGVsZW1lbnQgYXJyYXkgKi9cclxuICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldCdzIGFuIGlkZW50aXR5IG1hdHJpeC4gU2FtZSBhcyBjcmVhdGluZyBhIG5ldyBtYXRyaXgsIGJ1dCBzeW50YWN0aWNhbGx5XHJcbiAgICAqIHNob3dzIHdoYXQgaXMgaGFwcGVuaW5nLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBuZXcgaWRlbml0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBpZGVudGl0eSgpOiBNYXQ0IHtcclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIG9ydGhvZ3JhcGhpYyBtYXRyaXggaW4gdGhlIFdlYkdMIGNvb3JkaW5hdGUgc3lzdGVtIChwb3NpdGl2ZSB6IHRvd2FyZHMgeW91KVxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBBIG5ldyBvcnRob2dyYXBoaWMgbWF0cml4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBvcnRobygpOiBNYXQ0IHtcclxuICAgICAgcmV0dXJuIE1hdDQubWFrZU9ydGhvKC0xLCAxLCAtMSwgMSwgMSwgLTEpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IE1hdDQge1xyXG4gICAgICByZXR1cm4gbmV3IE1hdDQodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgdmFsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYSB2ZWN0b3IgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3Rvci5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdFYodmVjOiBWZWM0KTogVmVjNCB7XHJcbiAgICAgIGxldCB2YWxzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tyb3cgKiA0ICsgY29sXSAqIHZlYy52YWx1ZXNbY29sXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YWxzLnB1c2goc3VtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IFZlYzQodmFscyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYW5vdGhlciBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgbWF0cml4LlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0TShvdGhlcjogTWF0NCk6IE1hdDQge1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZ2V0KHJvdywgaSkgKiBvdGhlci5nZXQoaSwgY29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCBzdW0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBJbnZlcnRzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaW52ZXJzZSBvZiB0aGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGludmVyc2UoKTogTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IE1hdDQoKTtcclxuXHJcbiAgICAgIGxldCBhMDAgPSB0aGlzLnZhbHVlc1swXSwgYTAxID0gdGhpcy52YWx1ZXNbMV0sIGEwMiA9IHRoaXMudmFsdWVzWzJdLCBhMDMgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgbGV0IGExMCA9IHRoaXMudmFsdWVzWzRdLCBhMTEgPSB0aGlzLnZhbHVlc1s1XSwgYTEyID0gdGhpcy52YWx1ZXNbNl0sIGExMyA9IHRoaXMudmFsdWVzWzddO1xyXG4gICAgICBsZXQgYTIwID0gdGhpcy52YWx1ZXNbOF0sIGEyMSA9IHRoaXMudmFsdWVzWzldLCBhMjIgPSB0aGlzLnZhbHVlc1sxMF0sIGEyMyA9IHRoaXMudmFsdWVzWzExXTtcclxuICAgICAgbGV0IGEzMCA9IHRoaXMudmFsdWVzWzEyXSwgYTMxID0gdGhpcy52YWx1ZXNbMTNdLCBhMzIgPSB0aGlzLnZhbHVlc1sxNF0sIGEzMyA9IHRoaXMudmFsdWVzWzE1XTtcclxuXHJcbiAgICAgIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XHJcbiAgICAgIGxldCBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XHJcbiAgICAgIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XHJcbiAgICAgIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XHJcbiAgICAgIGxldCBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XHJcbiAgICAgIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XHJcbiAgICAgIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XHJcbiAgICAgIGxldCBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XHJcbiAgICAgIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XHJcbiAgICAgIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XHJcbiAgICAgIGxldCBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XHJcbiAgICAgIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XHJcbiAgICAgIGxldCBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XHJcblxyXG4gICAgICBpZiAoIWRldCkge1xyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICByZXN1bHQudmFsdWVzWzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1syXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVHJhbnNwb3NlcyB0aGlzIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IGFzIGEgbmV3IG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB0cmFuc3Bvc2VkIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmFuc3Bvc2UoKTogTWF0NCB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgc2NhbGUgb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNjYWxlIFRoZSBzY2FsZSBmYWN0b3JcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVNjYWxlKHNjYWxlOiBudW1iZXIpOiBNYXQ0IHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgTWF0NChbXHJcbiAgICAgICAgIHNjYWxlLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBzY2FsZSwgMCwgMCxcclxuICAgICAgICAgMCwgMCwgc2NhbGUsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSB0cmFuc2xhdGlvbiBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB0cmFuc2xhdGlvbnMuXHJcbiAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21UcmFuc2xhdGlvbih2OiBWZWMzKTogTWF0NCB7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCB2LngsXHJcbiAgICAgICAgIDAsIDEsIDAsIHYueSxcclxuICAgICAgICAgMCwgMCwgMSwgdi56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RYKGFuZ2xlOiBudW1iZXIpOiBNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgTWF0NChbXHJcbiAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgIDAsIGMsIHMsIDAsXHJcbiAgICAgICAgIDAsIC1zLCBjLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RZKGFuZ2xlOiBudW1iZXIpOiBNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgTWF0NChbXHJcbiAgICAgICAgIGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICBzLCAwLCBjLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RaKGFuZ2xlOiBudW1iZXIpOiBNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgTWF0NChbXHJcbiAgICAgICAgIGMsIHMsIDAsIDAsXHJcbiAgICAgICAgIC1zLCBjLCAwLCAwLFxyXG4gICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKTogTWF0NCB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gTWF0NC5mcm9tUm90WChhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKTogTWF0NCB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gTWF0NC5mcm9tUm90WShhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WihhbmdsZTogbnVtYmVyKTogTWF0NCB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gTWF0NC5mcm9tUm90WihhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogVmVjMyk6IE1hdDQge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IE1hdDQuZnJvbVRyYW5zbGF0aW9uKG9mZnNldCkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcik6IE1hdDQge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IE1hdDQuZnJvbVNjYWxlKHNjYWxlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHZpZXdpbmcgbWF0cml4LiBTZWUgZ2x1TG9va0F0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGV5ZSBUaGUgZXllIHBvc2l0aW9uLlxyXG4gICAgKiBAcGFyYW0gY2VudGVyIFRoZSBwb2ludCBvZiBpbnRlcmVzdC5cclxuICAgICogQHBhcmFtIHVwIFRoZSB1cCB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2aWV3aW5nIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZUxvb2tBdChleWU6IFZlYzMsIGNlbnRlcjogVmVjMywgdXA6IFZlYzMsICk6IE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEgPSBleWUuc3VidHJhY3QoY2VudGVyKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGIgPSB1cC5jcm9zcyhhKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGMgPSBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgbGV0IG0gPSBuZXcgTWF0NChbXHJcbiAgICAgICAgIGIueCwgYi55LCBiLnosIDAsXHJcbiAgICAgICAgIGMueCwgYy55LCBjLnosIDAsXHJcbiAgICAgICAgIGEueCwgYS55LCBhLnosIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICB2YXIgdCA9IG5ldyBNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgLWV5ZS54LFxyXG4gICAgICAgICAwLCAxLCAwLCAtZXllLnksXHJcbiAgICAgICAgIDAsIDAsIDEsIC1leWUueixcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBtLm11bHRNKHQpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVQZXJzcGVjdGl2ZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBmb3Z5IEZpZWxkIG9mIHZpZXcgKGluIGRlZ3JlZXMpLlxyXG4gICAgKiBAcGFyYW0gYXNwZWN0IFZpZXcgYXNwZWN0IHJhdGlvLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgTmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgRmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlUGVyc3BlY3RpdmUoXHJcbiAgICAgIGZvdnk6IG51bWJlcixcclxuICAgICAgYXNwZWN0OiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IE1hdDQge1xyXG5cclxuICAgICAgdmFyIHltYXggPSB6bmVhciAqIE1hdGgudGFuKGZvdnkgKiBNYXRoLlBJIC8gMzYwLjApO1xyXG4gICAgICB2YXIgeW1pbiA9IC15bWF4O1xyXG4gICAgICB2YXIgeG1pbiA9IHltaW4gKiBhc3BlY3Q7XHJcbiAgICAgIHZhciB4bWF4ID0geW1heCAqIGFzcGVjdDtcclxuXHJcbiAgICAgIHJldHVybiBNYXQ0Lm1ha2VGcnVzdHVtKHhtaW4sIHhtYXgsIHltaW4sIHltYXgsIHpuZWFyLCB6ZmFyKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVGcnVzdHVtLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlZnQgVGhlIGxlZnQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSByaWdodCBUaGUgcmlnaHQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSBib3R0b20gVGhlIGJvdHRvbSBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHRvcCBUaGUgdG9wIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgVGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIFRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEByZXR1cm5zIHRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VGcnVzdHVtKFxyXG4gICAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgICB0b3A6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogTWF0NCB7XHJcblxyXG4gICAgICB2YXIgWCA9IDIgKiB6bmVhciAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgWSA9IDIgKiB6bmVhciAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQSA9IChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBCID0gKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEMgPSAtKHpmYXIgKyB6bmVhcikgLyAoemZhciAtIHpuZWFyKTtcclxuICAgICAgdmFyIEQgPSAtMiAqIHpmYXIgKiB6bmVhciAvICh6ZmFyIC0gem5lYXIpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KFtcclxuICAgICAgICAgWCwgMCwgQSwgMCxcclxuICAgICAgICAgMCwgWSwgQiwgMCxcclxuICAgICAgICAgMCwgMCwgQywgRCxcclxuICAgICAgICAgMCwgMCwgLTEsIDBcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1T3J0aG8uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIGJvdHRvbSBUaGUgYm90dG9tIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6bmVhciBUaGUgbmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgVGhlIGZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHJldHVybnMgdGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZU9ydGhvKFxyXG4gICAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgICB0b3A6IG51bWJlcixcclxuICAgICAgbmVhcjogbnVtYmVyLFxyXG4gICAgICBmYXI6IG51bWJlcik6IE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KFtcclxuICAgICAgICAgMiAvIChyaWdodCAtIGxlZnQpLCAwLCAwLCAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpLFxyXG4gICAgICAgICAwLCAyIC8gKHRvcCAtIGJvdHRvbSksIDAsICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSksXHJcbiAgICAgICAgIDAsIDAsIDIgLyAoZmFyIC0gbmVhciksIChmYXIgKyBuZWFyKSAvIChmYXIgLSBuZWFyKSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGxvZyhtc2c6IHN0cmluZywgZGlnaXRzOiBudW1iZXIgPSAyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgNDsgcisrKSB7XHJcbiAgICAgICAgIGxldCBsaW5lID0gXCJcIjtcclxuICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA0OyBjKyspIHtcclxuICAgICAgICAgICAgbGluZSArPSB0aGlzLmdldChyLCBjKS50b0ZpeGVkKGRpZ2l0cykgKyAnICc7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgY29uc29sZS5sb2cobGluZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coKTtcclxuICAgfVxyXG5cclxufSIsIi8vIHNwZWNpZnkgbG9hZGVyIGFuZCBvcHRpb25zIGhlcmUuIFRoaXMgdmFsdWUgbXVzdCBtYXRjaCB0aGVcclxuLy8gY29udGVudHMgb2Ygd29ya2VyLmQudHNcclxuaW1wb3J0IExvYWRlcldvcmtlciBmcm9tICd3b3JrZXItbG9hZGVyP25hbWU9TG9hZGVyV29ya2VyLndvcmtlci5qcyEuL0xvYWRlcldvcmtlcic7XHJcblxyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBTdGF0dXNGdW5jdGlvbiwgdG9SYWQgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBnbE9iamVjdCB9IGZyb20gJy4vZ2xPYmplY3QnO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBkb2luZyB0aGUgd29yayBvZiBsb2FkaW5nIGEgZmlsZSBpbnRvIGEgZ2xPYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNb2RlbExvYWRlciB7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIFdlYldvcmtlciB0aGF0IGRvZXMgdGhlIGRvd25sb2FkIGFuZCBwcm9jZXNzaW5nXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHdvcmtlcjogTG9hZGVyV29ya2VyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIExvYWRzIGEgZmlsZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGZpbGUgVGhlIGZpbGUgdXJsIHRvIGxvYWRcclxuICAgICogQHBhcmFtIHVwZGF0ZVN0YXR1cyBDYWxsYmFjayB0aGF0IGlzIG5vdGlmaWVkIG9mIHByb2dyZXNzXHJcbiAgICAqIEByZXR1cm5zIFRyaWFuZ2xlT2JqIHByb21pc2VcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2FkTW9kZWxGaWxlKGZpbGU6IHN0cmluZywgdXBkYXRlU3RhdHVzOiBTdGF0dXNGdW5jdGlvbik6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUcmlhbmdsZU9iaj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgLy8gaWYgYSBwcmV2aW91cyB3b3JrZXIgZXhpc3RzLCBjbG9zZSBpdFxyXG4gICAgICAgICBpZiAodGhpcy53b3JrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMud29ya2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLndvcmtlciA9IG5ldyBMb2FkZXJXb3JrZXIoKTtcclxuICAgICAgICAgbGV0IHRTdGFydCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfTogeyBkYXRhOiBhbnkgfSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAvLyBhdm9pZCBmbGFzaGluZyBtZXNzYWdlcyBmb3IgdGhpbmdzIHRoYXQgaGFwcGVuIHZlcnkgcXVpY2tseS5cclxuICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0U3RhcnQgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgdXBkYXRlU3RhdHVzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGxldCB0T2JqID0gVHJpYW5nbGVPYmouZnJvbURhdGEoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICB1cGRhdGVTdGF0dXMoJycpO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy53b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMud29ya2VyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgcmVzb2x2ZSh0T2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UoZmlsZSk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3JpZW50KG1vZGVsOiBnbE9iamVjdCkge1xyXG5cclxuICAgICAgLy8gb3JpZW50IGVhY2ggZmlsZSBzbyB0aGF0IGl0IGlzIGZhY2luZyBmb3J3YXJkXHJcbiAgICAgIGxldCBuYW1lID0gbW9kZWwubmFtZS5zcGxpdCgnLicpWzBdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICBjYXNlICdza3VsbDEnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDkwKSk7XHJcbiAgICAgICAgICAgIC8vbW9kZWwucm90WSh0b1JhZCgxODApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdwZWx2aXMnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDExKSk7XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFoodG9SYWQoLTg3KSk7XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoMTgwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAnd29sZic6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoLTE0MCkpO1xyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDUpKTtcclxuICAgICAgICAgICAgbW9kZWwucm90WSh0b1JhZCgxODApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdza3VsbDQnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDgwKSk7XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoLTIyKSk7XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFoodG9SYWQoLTEpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdzaGVlcGhlYWQnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RZKHRvUmFkKDIwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAncG9zZTEnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RZKHRvUmFkKDE4MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgJ3RlYXBvdCc6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoOTApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBEcm9wRG93bk1lbnUsIFN1Yk1lbnUgfSBmcm9tIFwiLi9Ecm9wRG93bk1lbnVcIjtcclxuXHJcbnR5cGUgTG9hZE1vZGVsRnVuY3Rpb24gPSAoZmlsZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsc0Ryb3BEb3duTWVudShwYXJlbnQ6IEhUTUxFbGVtZW50LCBsb2FkTW9kZWw6IExvYWRNb2RlbEZ1bmN0aW9uKTogRHJvcERvd25NZW51IHtcclxuXHJcbiAgIGxldCBzdWJNZW51OiBTdWJNZW51O1xyXG4gICBsZXQgbWVudSA9IG5ldyBEcm9wRG93bk1lbnUocGFyZW50LCAnTW9kZWxzJywgJ01vZGVsRHJvcERvd24nKTtcclxuICAgbWVudS5hZGRJdGVtKCdGZW1hbGUgUG9zZScsICgpID0+IGxvYWRNb2RlbCgnUG9zZTEuYmxvYicpKTtcclxuICAgbWVudS5hZGRJdGVtKCdGZW1hbGUgSGVhZCcsICgpID0+IGxvYWRNb2RlbCgnRmVtYWxlSGVhZC5ibG9iJykpO1xyXG4gICBtZW51LmFkZEl0ZW0oJ0Fybm9sZCcsICgpID0+IGxvYWRNb2RlbCgnQXJub2xkLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnVGVhcG90JywgKCkgPT4gbG9hZE1vZGVsKCdUZWFwb3QuYmxvYicpKTtcclxuXHJcbiAgIHN1Yk1lbnUgPSBtZW51LmFkZFN1Yk1lbnUoJ0FuYXRvbXknLCAnQW5hdG9teVN1Yk1lbnUnKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdTa3VsbCAxJywgKCkgPT4gbG9hZE1vZGVsKCdTa3VsbDEuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdTa3VsbCAyJywgKCkgPT4gbG9hZE1vZGVsKCdTa3VsbDIuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdTa3VsbCAzJywgKCkgPT4gbG9hZE1vZGVsKCdTa3VsbDMuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdTa3VsbCA0JywgKCkgPT4gbG9hZE1vZGVsKCdTa3VsbDQuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdQZWx2aXMnLCAoKSA9PiBsb2FkTW9kZWwoJ1BlbHZpcy5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0NsYXZpY2xlJywgKCkgPT4gbG9hZE1vZGVsKCdDbGF2aWNsZS5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ1NjYXB1bGEnLCAoKSA9PiBsb2FkTW9kZWwoJ1NjYXB1bGEuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIdW1lcnVzJywgKCkgPT4gbG9hZE1vZGVsKCdIdW1lcnVzLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCBFY29yY2hlJywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkRWNvcmNoZS5ibG9iJykpO1xyXG5cclxuICAgc3ViTWVudSA9IG1lbnUuYWRkU3ViTWVudSgnUG9zZXMnLCAnSGVhZHNTdWJNZW51Jyk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAyJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAzJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAzLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA0JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA0LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA1JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA2JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA2LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA3JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA3LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA4JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA4LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA5JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA5LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMCcsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTAuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDExJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxMS5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTInLCAoKSA9PiBsb2FkTW9kZWwoJ1Bvc2VfMDEyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMycsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTMuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDE0JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxNC5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTUnLCAoKSA9PiBsb2FkTW9kZWwoJ1Bvc2VfMDE1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxNicsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTYuYmxvYicpKTtcclxuXHJcbiAgIHN1Yk1lbnUgPSBtZW51LmFkZFN1Yk1lbnUoJ0hlYWRzJywgJ0hlYWRzU3ViTWVudScpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgMScsICgpID0+IGxvYWRNb2RlbCgnSGVhZDEuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDInLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCAzJywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkMy5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgNCcsICgpID0+IGxvYWRNb2RlbCgnSGVhZDQuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDUnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQ1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA2JywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkNi5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgNycsICgpID0+IGxvYWRNb2RlbCgnSGVhZDcuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDgnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQ4LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA5JywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkOS5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgMTAnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQxMC5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgMTEnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQuYmxvYicpKTtcclxuXHJcbiAgIHJldHVybiBtZW51O1xyXG59XHJcbiIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgUGF0aFRyYWNlclJlbmRlcmVyLCBSZW5kZXJNb2RlIH0gZnJvbSBcIi4vUGF0aFRyYWNlclJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IE1hdDQgfSBmcm9tIFwiLi9NYXRcIjtcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tIFwiLi9Vbmlmb3Jtc1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxDb29yZCB9IGZyb20gXCIuL1NwaGVyaWNhbENvb3JkXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB9IGZyb20gXCIuL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmVcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmpGaWxlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpGaWxlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqQnVpbGRlciB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqQnVpbGRlclwiO1xyXG5cclxubGV0IHNraW5Ub25lcyA9IFtcclxuICAgbmV3IGh0bWxDb2xvcihbMjQwLCAyMjMsIDIxNF0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsyNTUsIDIxOCwgMjAwXSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzIzMiwgMTc5LCAxMTddKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTkwLCAxMzYsIDg3XSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTE1LCA5MSwgNTldKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTM5LCA3MywgNjVdKVxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzEzMiwgNTUsIDM0XSksXHJcbiAgIC8vbmV3IGh0bWxDb2xvcihbNjEsIDEyLCAyXSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMzgsIDcsIDFdKVxyXG5dO1xyXG5cclxuZW51bSBQb2ludGVyTW9kZSB7XHJcbiAgIFZpZXcsXHJcbiAgIExpZ2h0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aFRyYWNlckFwcCB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFBhdGhUcmFjZXJSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXc6IE1hdDQ7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbjogTWF0NDtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXdQcm9qZWN0aW9uOiBNYXQ0O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGVTcGVjaWFsID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgcG9zOiBTcGhlcmljYWxDb29yZDtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgcHJpdmF0ZSBpbnRlbnNpdHlTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBsaWdodENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYmFsbENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYW1iaWVudEludGVuc2l0eVNsaWRlcjogU2xpZGVyO1xyXG5cclxuICAgcHJpdmF0ZSBhbmdsZVggPSAwLjU7XHJcbiAgIHByaXZhdGUgYW5nbGVZID0gMC43NTtcclxuICAgcHJpdmF0ZSB6b29tWiA9IDMuNTtcclxuXHJcbiAgIHByaXZhdGUgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgb2xkWDogbnVtYmVyO1xyXG4gICBwcml2YXRlIG9sZFk6IG51bWJlcjtcclxuXHJcbiAgIHByaXZhdGUgbGFzdFRpbWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IE1BWF9TQU1QTEVTID0gNTAwO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgbGV0IGNvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nbCA9IGNvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoc3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaG1vdmUgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5vbk1vdmUoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoZW5kID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Eb3duKGV2ZW50LngsIGV2ZW50LnkpO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Nb3ZlKGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNldXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRNb2RlbCh0aGlzLnF1ZXJ5KS50aGVuKCh0T2JqOiBUcmlhbmdsZU9iaikgPT4ge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBhdGhUcmFjZXJSZW5kZXJlcih0aGlzLmdsLCB0T2JqKTtcclxuICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCBkcmF3VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkcmF3VGltZS5pZCA9ICdkcmF3VGltZSc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGltZSk7XHJcblxyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgYnV0dG9uLmlkID0gJ21vZGVCdXR0b24nO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLlZpZXc6XHJcbiAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnTGlnaHQnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdWaWV3JztcclxuICAgICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgICBsZXQgcHJvZ3Jlc3NTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBwcm9ncmVzc1NwYW4uaWQgPSAncHJvZ3Jlc3NTcGFuJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzU3Bhbik7XHJcblxyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZW5zaXR5U2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodEludGVuc2l0eScsXHJcbiAgICAgICAgIGxhYmVsOiAnTGlnaHQgSW50ZW5zaXR5JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSA9IHRoaXMuaW50ZW5zaXR5U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGJ1aWxkIGEgcmFuZ2Ugb2YgY29sb3JzXHJcbiAgICAgIGxldCBtaW4gPSAyMDAwO1xyXG4gICAgICBsZXQgbWF4ID0gMTAwMDA7XHJcbiAgICAgIGxldCBjb2xvcnM6IGh0bWxDb2xvcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICBsZXQgdGVtcCA9IG1pbiArIChpIC8gOSkgKiAobWF4IC0gbWluKTtcclxuICAgICAgICAgY29sb3JzLnB1c2goZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS5jcmVhdGUodGVtcCkudG9IdG1sQ29sb3IoKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWdodENvbG9yU2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodENvbG9yJyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBDb2xvcicsXHJcbiAgICAgICAgIG1pbjogMjAwMCxcclxuICAgICAgICAgbWF4OiAxMDAwMCxcclxuICAgICAgICAgdmFsdWU6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUuZGF5bGlnaHQudGVtcGVyYXR1cmUsXHJcbiAgICAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGlnaHRDb2xvcigpO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHsgcmV0dXJuIHNsaWRlci52YWx1ZS50b0ZpeGVkKCkgKyBcIktcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gYXBwbHkgdGhlIGluaXRpYWwgY29sb3JzXHJcbiAgICAgIHRoaXMuc2V0TGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgdGhpcy5iYWxsQ29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0JhbGxDb2xvcicsXHJcbiAgICAgICAgIGxhYmVsOiAnQmFsbCBDb2xvcicsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgICAgY29sb3JzOiBza2luVG9uZXMsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudU9iakNvbG9yID0gdGhpcy5iYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBtYWtlIHN1cmUgZ2wgbWF0Y2hlcyB0aGUgaW5pdGlhbCBVSSBzZXR0aW5nXHJcbiAgICAgIFVuaWZvcm1zLnVPYmpDb2xvciA9IHRoaXMuYmFsbENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICAgICB0aGlzLmFtYmllbnRJbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0FtYmllbnRJbnRlbnNpdHknLFxyXG4gICAgICAgICBsYWJlbDogJ0FtYmllbnQgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVBbWJpZW50TGlnaHRJbnRlbnNpdHkgPSB0aGlzLmFtYmllbnRJbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICdzcGhlcmUnKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsUmFkaXVzID0gMDtcclxuICAgICAgICAgbGV0IHJhZGl1cyA9IDAuNTtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBWZWMzKFswLCByYWRpdXMsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmpCdWlsZGVyKCk7XHJcbiAgICAgICAgIHRPYmouYWRkU3BoZXJlKDgsIHJhZGl1cywgY2VudGVyKTtcclxuICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ2N1YmUnKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsUmFkaXVzID0gMDtcclxuICAgICAgICAgbGV0IHNpemUgPSAwLjg7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgVmVjMyhbMCwgc2l6ZSAvIDIuMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iakJ1aWxkZXIoKTtcclxuICAgICAgICAgdE9iai5hZGRDdWJlKHNpemUsIGNlbnRlcik7XHJcbiAgICAgICAgIHRPYmouYnJlYWtJbnRvVm9sdW1lcygpO1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5vYmonKSkge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIHJldHVybiBmZXRjaChxdWVyeSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqRmlsZShxdWVyeSwgcmVzKTtcclxuICAgICAgICAgICAgICAgbGV0IHNpemUgPSAxLjU7XHJcbiAgICAgICAgICAgICAgIHRPYmouYXV0b0NlbnRlcihzaXplKTtcclxuICAgICAgICAgICAgICAgdE9iai50cmFuc2xhdGUobmV3IFZlYzMoWzAsIHRPYmouaGVpZ2h0IC8gMiwgMF0pKTtcclxuICAgICAgICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgICAgICAgIHJldHVybiB0T2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldExpZ2h0Q29sb3IoKSB7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIGNvbG9ycyBmb3IgdGhlIGludGVuc2l0eSBzbGlkZXJcclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIuY29sb3JzID0gW2h0bWxDb2xvci5ibGFjaywgdGhpcy5saWdodENvbG9yU2xpZGVyLmh0bWxDb2xvcl07XHJcblxyXG4gICAgICAvLyB1c2UgdGhlIHZhbHVlIGluIHJlbmRlcmluZ1xyXG4gICAgICBVbmlmb3Jtcy51TGlnaHRDb2xvciA9IHRoaXMubGlnaHRDb2xvclNsaWRlci5nbENvbG9yO1xyXG5cclxuICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Eb3duKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGljayh4LCB5KSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCA9ICh4IDwgMC4xICogdGhpcy5jYW52YXMud2lkdGgpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgdGhpcy5vbGRZID0geTtcclxuXHJcbiAgICAgIHRoaXMucG9zID0gU3BoZXJpY2FsQ29vcmQuZnJvbVhZWihVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzKTtcclxuXHJcbiAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XHJcbiAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnpvb21aIC09ICh5IC0gdGhpcy5vbGRZKSAqIDAuMDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogPSBjbGFtcCh0aGlzLnpvb21aLCAxLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVkgLT0gKHggLSB0aGlzLm9sZFgpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggKz0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGRvbid0IGdvIHVwc2lkZSBkb3duXHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5tYXgodGhpcy5hbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCA9IE1hdGgubWluKHRoaXMuYW5nbGVYLCBNYXRoLlBJIC8gMiAtIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yYWRpdXMgLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyA9IGNsYW1wKHRoaXMucG9zLnJhZGl1cywgVW5pZm9ybXMudUJhbGxSYWRpdXMgKyAwLjUsIDUpO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3Mucm90YXRpb25BbmdsZSArPSAoeCAtIHRoaXMub2xkWCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlICs9ICh5IC0gdGhpcy5vbGRZKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgPSBjbGFtcCh0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSwgMCwgMTgwKTtcclxuICAgICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0UG9zLnZhbHVlcyA9IHRoaXMucG9zLnRvWFlaKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gY2xlYXIgdGhlIHNhbXBsZSBidWZmZXJcclxuICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAvLyByZW1lbWJlciB0aGlzIGNvb3JkaW5hdGVcclxuICAgICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgICAgdGhpcy5vbGRZID0geTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuIElmIGEgaGl0XHJcbiAgICAqIG9jY3VycywgdGhlIGNsaWNrZWQgb24gdmlldyBpcyBzd2FwcGVkIGZvciB0aGUgcHJpbWFyeSB2aWV3IGFuZCB0cnVlXHJcbiAgICAqIGlzIHJldHVybmVkLiBJZiBubyBoaXQgb2NjdXJzLCBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUuXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUuXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIHRoaXMgd2l0aGluIHRoZSBQYXRoVHJhY2VyIGNsYXNzIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBoYXJkIGNvZGUgdmlldyBzdHVmZlxyXG4gICAgICBsZXQgc2l6ZSA9IDAuMiAqIHRoaXMuY2FudmFzLndpZHRoO1xyXG5cclxuICAgICAgaWYgKHkgPCBzaXplKSB7XHJcblxyXG4gICAgICAgICBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMSAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDIgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAzICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgc3dpdGNoICh0aGlzLnJlbmRlcmVyLnJlbmRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkFydGlzdDpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQ2hyb21hOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkNocm9tYSBWaWV3OiByZWQ9aGlnaGVzdCBjaHJvbWFcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuVmFsdWU6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVmFsdWUgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5CYW5kczpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCI1IENvbG9yICsgSGlnaGxpZ2h0IFZpZXdcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUZXh0dXJlKCkge1xyXG4gICAgICB0aGlzLm1vZGVsdmlldyA9IE1hdDQubWFrZUxvb2tBdChcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZSxcclxuICAgICAgICAgbmV3IFZlYzMoWzAsIDEsIDBdKSwgIC8vIGNlbnRlciBwb2ludFxyXG4gICAgICAgICBuZXcgVmVjMyhbMCwgMSwgMF0pICAgLy8gdXAgdmVjdG9yXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb24gPSBNYXQ0Lm1ha2VQZXJzcGVjdGl2ZSg1NSwgMSwgMC4xLCAxMDApO1xyXG4gICAgICB0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24gPSB0aGlzLnByb2plY3Rpb24ubXVsdE0odGhpcy5tb2RlbHZpZXcpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnVwZGF0ZVRleHR1cmUodGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uKTtcclxuICAgfTtcclxuXHJcbiAgIHByaXZhdGUgZGlzcGxheVRleHR1cmUoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5yZW5kZXJlcikge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3dhcChwb3M6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnN3YXAocG9zKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRpY2soKSB7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVRpbWVyTGFiZWwoKTtcclxuICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgICBpZiAoVW5pZm9ybXMudVNhbXBsZSA8IHRoaXMuTUFYX1NBTVBMRVMpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMF0gPSB0aGlzLnpvb21aICogTWF0aC5zaW4odGhpcy5hbmdsZVkpICogTWF0aC5jb3ModGhpcy5hbmdsZVgpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1sxXSA9IHRoaXMuem9vbVogKiBNYXRoLnNpbih0aGlzLmFuZ2xlWCk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzJdID0gdGhpcy56b29tWiAqIE1hdGguY29zKHRoaXMuYW5nbGVZKSAqIE1hdGguY29zKHRoaXMuYW5nbGVYKTtcclxuXHJcbiAgICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgICB0aGlzLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlVGltZXJMYWJlbCgpIHtcclxuXHJcbiAgICAgIGxldCB0ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICBsZXQgZHJhd1RpbWVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3VGltZScpO1xyXG4gICAgICBpZiAodGhpcy5sYXN0VGltZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICBsZXQgZWxhcHNlZE1zID0gKHQgLSB0aGlzLmxhc3RUaW1lc1swXSkgLyB0aGlzLmxhc3RUaW1lcy5sZW5ndGg7XHJcbiAgICAgICAgIGRyYXdUaW1lTGFiZWwuaW5uZXJUZXh0ID0gZWxhcHNlZE1zLnRvRml4ZWQoMCkgKyAnbXMnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdFRpbWVzLnB1c2godCk7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RUaW1lcy5sZW5ndGggPiAzMCkge1xyXG4gICAgICAgICB0aGlzLmxhc3RUaW1lcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkcmF3VGltZUxhYmVsLnN0eWxlLnZpc2liaWxpdHkgPSBVbmlmb3Jtcy51U2FtcGxlIDwgdGhpcy5NQVhfU0FNUExFUyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBVbmlmb3Jtcy51U2FtcGxlIC8gdGhpcy5NQVhfU0FNUExFUztcclxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NTcGFuJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICBpZiAocHJvZ3Jlc3MgPj0gMCAmJiBwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgc3Bhbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICBsZXQgdyA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnJpZ2h0ID0gdyAqICgxIC0gcHJvZ3Jlc3MpICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3Bhbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi9NYXQnO1xyXG5pbXBvcnQgeyBWZWMzLCBWZWM0IH0gZnJvbSAnLi9WZWMnO1xyXG5pbXBvcnQgdG9TY3JlZW5WZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsJztcclxuaW1wb3J0IHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlbkZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlVmVydGV4U291cmNlIGZyb20gJy4vc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gJy4vQ29sb3JSYW5nZSc7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSAnLi9Vbmlmb3Jtcyc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi9HbG9iYWxzJztcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tICcuL1Byb2ZpbGVyJztcclxuaW1wb3J0IHsgZ2xVbmlmb3JtIH0gZnJvbSAnLi9nbFVuaWZvcm0nO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuaW1wb3J0IHsgQ29sb3JBbmFseXplciB9IGZyb20gJy4vQ29sb3JBbmFseXplcic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IGdsVW5pZm9ybUJsb2NrIH0gZnJvbSAnLi9nbFVuaWZvcm1CbG9jayc7XHJcbmltcG9ydCB7IGdsVGV4dHVyZSwgZ2xUZXh0dXJlU3R5bGUgfSBmcm9tICcuL2dsVGV4dHVyZSc7XHJcbmltcG9ydCB7IGdsRnJhbWVCdWZmZXIgfSBmcm9tICcuL2dsRnJhbWVCdWZmZXInO1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcmluZyBtb2RlIGZvciBkaXNwbGF5aW5nIHRoZSB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZW5kZXJNb2RlIHtcclxuICAgQXJ0aXN0ID0gMCxcclxuICAgVmFsdWUgPSAxLFxyXG4gICBDaHJvbWEgPSAyLFxyXG4gICBCYW5kcyA9IDMsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGRvZXMgdGhlIHdvcmsgb2YgYnVpbGRpbmcgdGhlIFBhdGggVHJhY2VkIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyUmVuZGVyZXIge1xyXG5cclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHByaXZhdGUgdmVydGV4QnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBmcmFtZUJ1ZmZlcjogZ2xGcmFtZUJ1ZmZlcjtcclxuICAgcHJpdmF0ZSByZW5kZXJUZXh0dXJlOiBnbFRleHR1cmU7XHJcbiAgIHByaXZhdGUgdGV4dHVyZXM6IGdsVGV4dHVyZVtdO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdG9UZXh0dXJlUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGFuYWx5emVyOiBDb2xvckFuYWx5emVyO1xyXG5cclxuICAgcHJpdmF0ZSBtYWluVmlldyA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICBwcml2YXRlIHNtYWxsVmlld3MgPSBbXHJcbiAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICBdO1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0aWNlcyA9IFtcclxuICAgICAgLTEsIC0xLFxyXG4gICAgICAtMSwgKzEsXHJcbiAgICAgICsxLCAtMSxcclxuICAgICAgKzEsICsxXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgIGdsQ3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICB0T2JqOiBUcmlhbmdsZU9ialxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIC8vIGxhcmdlciB0ZXh0dXJlIGlzIGhpZ2hlciByZXNvbHV0aW9uLCBidXQgdGFrZXMgbG9uZ2VyIHRvIGNvbXB1dGVcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDI1NjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gVW5pZm9ybXMudVRleHR1cmVTaXplID0gNTEyO1xyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSAyNTY7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmFseXplciA9IG5ldyBDb2xvckFuYWx5emVyKFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdmVydGV4IGJ1ZmZlciAtIHRoZSBibG9jayB3ZSdsbCBkcmF3IG91ciByZW5kZXJlZCB0ZXh0dXJlIG9uXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgZnJhbWVidWZmZXJcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IG5ldyBnbEZyYW1lQnVmZmVyKFxyXG4gICAgICAgICBnbCxcclxuICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplLFxyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlclRleHR1cmUgPSB0aGlzLmZyYW1lQnVmZmVyLmNyZWF0ZVRleHR1cmUoZ2xUZXh0dXJlU3R5bGUuRmxvYXQpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKHRoaXMuZnJhbWVCdWZmZXIuY3JlYXRlVGV4dHVyZShnbFRleHR1cmVTdHlsZS5Db2xvcikpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gY3JlYXRlIHRvU2NyZWVuIHNoYWRlclxyXG4gICAgICB0aGlzLnRvU2NyZWVuUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShnbCwgdG9TY3JlZW5WZXJ0ZXhTb3VyY2UsIHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnRvU2NyZWVuVmVydGV4QXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy50b1NjcmVlblByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICB0aGlzLmNvbXBpbGVTaGFkZXIodE9iaik7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29tcGlsZVNoYWRlcih0T2JqPzogVHJpYW5nbGVPYmopIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdG9UZXh0dXJlIHNoYWRlclxyXG4gICAgICBpZiAodE9iaiAmJiB0T2JqLm51bVRyaWFuZ2xlcyA+IDApIHtcclxuICAgICAgICAgdGhpcy50b1RleHR1cmVQcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKFxyXG4gICAgICAgICAgICBnbCxcclxuICAgICAgICAgICAgdG9UZXh0dXJlVmVydGV4U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnI3ZlcnNpb24gMzAwIGVzJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJ05PVEhJTkcnLCAnVVNFX1RSSUFOR0xFUycpLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVGcmFnbWVudFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJyN2ZXJzaW9uIDMwMCBlcycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCdOT1RISU5HJywgJ1VTRV9UUklBTkdMRVMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9WRVJUSUNFUz4nLCB0T2JqLm51bVZlcnRpY2VzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8TlVNX1ZPTFVNRVM+JywgdE9iai52b2x1bWVzLmxlbmd0aC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9UUklBTkdMRVM+JywgdE9iai5udW1UcmlhbmdsZXMudG9TdHJpbmcoKSlcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8vIHVwbG9hZCB0cmlhbmdsZXMgdG8gdGhlIEdQVVxyXG4gICAgICAgICB0aGlzLnVwbG9hZFVuaWZvcm1zKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnRvVGV4dHVyZVByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoXHJcbiAgICAgICAgICAgIGdsLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVWZXJ0ZXhTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcnKSxcclxuICAgICAgICAgICAgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcnKVxyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgICAgIHAubG9nKCdjb21waWxlJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGxvYWRzIGFsbCB0aGUgdHJpYW5nbGUgZGF0YSB0byBXZWJHTFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHByb2dyYW0gVGhlIHByb2dyYW0gdG8gdXBsb2FkIHRvXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwbG9hZFVuaWZvcm1zKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsIGFzIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgICAvLyB1cGxvYWQgdGhlIGJpZyBjaHVua3MgYXMgVW5pZm9ybSBCbG9ja3NcclxuICAgICAgbGV0IGJsb2NrQmluZGluZyA9IDI7XHJcbiAgICAgIGxldCB2QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2soZ2wsIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ015VmVydGljZXNCbG9jaycsIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICAvLyBwdXQgdGhlIGRhdGEgaW50byBhIEZsb2F0MzJBcnJheSBmb3IgdXBsb2FkaW5nXHJcbiAgICAgIGxldCB2RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodE9iai5udW1WZXJ0aWNlcyAqIDQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDBdID0gdE9iai52ZXJ0aWNlc1szICogaSArIDBdO1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDFdID0gdE9iai52ZXJ0aWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDJdID0gdE9iai52ZXJ0aWNlc1szICogaSArIDJdO1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDNdID0gMDtcclxuICAgICAgfVxyXG4gICAgICB2QmxvY2sudXBsb2FkKHZEYXRhKTtcclxuXHJcbiAgICAgIGJsb2NrQmluZGluZyA9IDM7XHJcbiAgICAgIGxldCB0QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2soZ2wsIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ015VHJpYW5nbGVzQmxvY2snLCBibG9ja0JpbmRpbmcpO1xyXG5cclxuICAgICAgLy8gcHV0IHRoZSBkYXRhIGludG8gYSBGbG9hdDMyQXJyYXkgZm9yIHVwbG9hZGluZ1xyXG4gICAgICBsZXQgdERhdGEgPSBuZXcgSW50MzJBcnJheSh0T2JqLm51bVRyaWFuZ2xlcyAqIDQpO1xyXG4gICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IHRPYmoudm9sdW1lcy5sZW5ndGg7IHYrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdE9iai52b2x1bWVzW3ZdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZvbC50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSB2b2wudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaTE7XHJcbiAgICAgICAgICAgIHREYXRhW2luZGV4KytdID0gdC5pMjtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmkzO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0QmxvY2sudXBsb2FkKHREYXRhKTtcclxuXHJcbiAgICAgIC8vIFVwbG9hZCB0aGUgdm9sdW1lIGluZm8gYXMgYSBzdGFuZGFyZCB1bmlmb3JtXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKGdsLCB0aGlzLnRvVGV4dHVyZVByb2dyYW0pO1xyXG4gICAgICBsZXQgc3RhcnRJbmRleCA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2b2wgPSB0T2JqLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10uc3RhcnRJbmRleCcsIHN0YXJ0SW5kZXgsIHRydWUpO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLm51bVRyaWFuZ2xlcycsIHZvbC50cmlhbmdsZXMubGVuZ3RoLCB0cnVlKTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5ib3hNaW4nLCB2b2wuYm94TWluKTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5ib3hNYXgnLCB2b2wuYm94TWF4KTtcclxuICAgICAgICAgc3RhcnRJbmRleCArPSB2b2wudHJpYW5nbGVzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICB1bmkuc2V0KCdvYmplY3QuYm94TWluJywgdE9iai5ib3hNaW4pO1xyXG4gICAgICB1bmkuc2V0KCdvYmplY3QuYm94TWF4JywgdE9iai5ib3hNYXgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHJlbmRlck1vZGUoKTogUmVuZGVyTW9kZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1haW5WaWV3O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgVW5pZm9ybXMudVNhbXBsZSA9IDA7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0RXllUmF5KG1hdHJpeDogTWF0NCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBWZWMzIHtcclxuICAgICAgbGV0IHZlYyA9IG5ldyBWZWM0KFt4LCB5LCAwLCAxXSk7XHJcbiAgICAgIHJldHVybiBtYXRyaXgubXVsdFYodmVjKS5kaXZpZGVCeVcoKS5zdWJ0cmFjdChVbmlmb3Jtcy51RXllKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwZGF0ZVRleHR1cmUobW9kZWx2aWV3UHJvamVjdGlvbjogTWF0NCk6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBhbGlhc2luZyBieSByYW5kb20gc2FtcGxpbmcgd2l0aGluIGEgcGl4ZWxcclxuICAgICAgbGV0IHggPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHkgPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHogPSAwO1xyXG5cclxuICAgICAgbGV0IHYgPSBuZXcgVmVjMyhbeCwgeSwgel0pO1xyXG4gICAgICBsZXQgaml0dGVyID0gTWF0NC5mcm9tVHJhbnNsYXRpb24odik7XHJcbiAgICAgIGxldCBtYXRyaXggPSBqaXR0ZXIubXVsdE0obW9kZWx2aWV3UHJvamVjdGlvbikuaW52ZXJzZSgpO1xyXG5cclxuICAgICAgVW5pZm9ybXMudVJheTAwID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCAtMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MDEgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsIC0xLCArMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMCA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTExID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCArMSwgKzEpO1xyXG4gICAgICAvLyBzZXQgdW5pZm9ybXNcclxuICAgICAgbGV0IHVuaSA9IG5ldyBnbFVuaWZvcm0oZ2wsIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG5cclxuICAgICAgLy8gcmVuZGVyIHRvIHRleHR1cmVcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVW5pZm9ybXMudVRleHR1cmVTaXplLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG4gICAgICB0aGlzLnRleHR1cmVzWzBdLmJpbmQoKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1sxXS5nZXQoKSwgMCk7XHJcblxyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9UZXh0dXJlVmVydGV4QXR0cmlidXRlLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuYW5hbHl6ZXIucnVuKGdsLCBVbmlmb3Jtcy51TGlnaHRBbHBoYSwgVW5pZm9ybXMudVNoYWRvd0FscGhhKTtcclxuICAgICAgVW5pZm9ybXMudU1heENocm9tYSA9IGRhdGEubWF4Q2hyb21hO1xyXG5cclxuICAgICAgbGV0IGNyID0gbmV3IENvbG9yUmFuZ2UoW2RhdGEuZGFya2VzdExpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdMaWdodENvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEubGlnaHRlc3RMaWdodENvbG9yLnRvSHRtbENvbG9yKCldKTtcclxuICAgICAgVW5pZm9ybXMudUhpZ2hsaWdodENvbG9yID0gZGF0YS5oaWdobGlnaHRDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudUxpZ2h0TGlnaHRDb2xvciA9IGNyLmdldCgwLjg1KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudU1pZExpZ2h0Q29sb3IgPSBjci5nZXQoMC41KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtMaWdodENvbG9yID0gY3IuZ2V0KDAuMTUpLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgY3IgPSBuZXcgQ29sb3JSYW5nZShbZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKV0pO1xyXG4gICAgICAvL1VuaWZvcm1zLnVTaGFkb3dDb2xvciA9IGRhdGEudGVybWluYXRvckNvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51U2hhZG93Q29sb3IgPSBkYXRhLmF2Z1NoYWRvd0NvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51UmVmbGVjdGVkTGlnaHRDb2xvciA9IGNyLmdldCgxKS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtBY2NlbnRDb2xvciA9IGNyLmdldCgwLjApLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIHBpbmcgcG9uZyB0ZXh0dXJlc1xyXG4gICAgICB0aGlzLnRleHR1cmVzLnJldmVyc2UoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVTYW1wbGUrKztcclxuICAgICAgVW5pZm9ybXMudVJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgZGlzcGxheVRleHR1cmUoKTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgLy8gc2l6ZSBvZiB0aGUgYWN0dWFsIGNhbnZhcy4gVGhlIHRleHR1cmUgd2UgY3JlYXRlIGlzIGRyYXduIHRvIHRoaXMgaXRlbVxyXG4gICAgICBsZXQgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIC8vIG5vdCBzdXJlIHdoeSwgYnV0IHRoaXMgYmFzaWNhbGx5IGJlY29tZXMgZnVsbCB3aWR0aCBvbiBteSBwaG9uZVxyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIHRoaXMudGV4dHVyZXNbMF0uYmluZCgpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBtYWluIHNjcmVlblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybShnbCwgdGhpcy50b1NjcmVlblByb2dyYW0pO1xyXG4gICAgICBVbmlmb3Jtcy51U2NhbGUgPSAxLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVYT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBVbmlmb3Jtcy51WU9mZnNldCA9IDAuMDtcclxuICAgICAgVW5pZm9ybXMudU1vZGUgPSB0aGlzLm1haW5WaWV3O1xyXG4gICAgICB1bmkuc2V0QWxsKFVuaWZvcm1zKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBzbWFsbGVyIHZpZXdzXHJcbiAgICAgIFVuaWZvcm1zLnVTY2FsZSA9IDAuMjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNtYWxsVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgVW5pZm9ybXMudVhPZmZzZXQgPSAxLjAgLSAodGhpcy5zbWFsbFZpZXdzLmxlbmd0aCAtIGkgLSAwLjUpICogKDIgKiBVbmlmb3Jtcy51U2NhbGUpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51WU9mZnNldCA9IDEuMCAtIFVuaWZvcm1zLnVTY2FsZTtcclxuICAgICAgICAgVW5pZm9ybXMudU1vZGUgPSB0aGlzLnNtYWxsVmlld3NbaV07XHJcbiAgICAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG4gICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3dhcChwb3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnNtYWxsVmlld3MgPSBbXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICAgICBdO1xyXG4gICAgICBpZiAodGhpcy5tYWluVmlldyA9PSB0aGlzLnNtYWxsVmlld3NbcG9zXSkge1xyXG4gICAgICAgICB0aGlzLm1haW5WaWV3ID0gUmVuZGVyTW9kZS5BcnRpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMubWFpblZpZXcgPSB0aGlzLnNtYWxsVmlld3NbcG9zXTtcclxuICAgICAgICAgdGhpcy5zbWFsbFZpZXdzW3Bvc10gPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCI7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyB0b1JhZCwgaXNNb2JpbGUgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgTWF0NCB9IGZyb20gXCIuL01hdFwiO1xyXG5pbXBvcnQgeyBWZWM0LCBWZWMyIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IFRocmVzaG9sZEN0cmwgfSBmcm9tIFwiLi9UaHJlc2hvbGRDdHJsXCI7XHJcbmltcG9ydCB7IFBvaW50ZXJFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9Qb2ludGVyRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1vZGVsc0Ryb3BEb3duTWVudSB9IGZyb20gXCIuL01vZGVsc0Ryb3BEb3duTWVudVwiO1xyXG5pbXBvcnQgeyBNb2RlbExvYWRlciB9IGZyb20gXCIuL01vZGVsTG9hZGVyXCI7XHJcblxyXG5lbnVtIFBvaW50ZXJNb2RlIHtcclxuICAgVmlldyxcclxuICAgTGlnaHQsXHJcbn1cclxuXHJcbi8vY29uc3QgV0hJVEVfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1NSwgMjU1XSk7XHJcbmNvbnN0IFdISVRFX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTAsIDI0Ml0pO1xyXG5jb25zdCBCTEFDS19DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDBdKTtcclxuLy9jb25zdCBCTEFDS19DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzMwLCAyMCwgMF0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYW5lc0FwcCB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgb3ZlcmxheTogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIGhhbmRsZXI6IFBvaW50ZXJFdmVudEhhbmRsZXI7XHJcblxyXG4gICBwcml2YXRlIGRpcnR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHJcbiAgIHByaXZhdGUgaGlnaGxpZ2h0U2xpZGVyOiBTbGlkZXJcclxuICAgcHJpdmF0ZSBsaWdodExpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgbWlkTGlnaHRTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBkYXJrTGlnaHRTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBzaGFkb3dTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSB0aHJlc2hvbGRDdHJsOiBUaHJlc2hvbGRDdHJsO1xyXG4gICBwcml2YXRlIGxvYWRlciA9IG5ldyBNb2RlbExvYWRlcigpO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnUGxhbmVzQXBwJztcclxuXHJcbiAgICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdmlld0NvbnRhaW5lci5pZCA9ICdWaWV3Q29udGFpbmVyJztcclxuICAgICAgdmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKHZpZXdDb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZVZpZXdFbGVtZW50cyh2aWV3Q29udGFpbmVyKTtcclxuICAgICAgZGl2LnN0eWxlLndpZHRoID0gdGhpcy5nbC5jYW52YXMud2lkdGggKyAncHgnO1xyXG5cclxuICAgICAgY29uc3QgY3RybHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY3RybHNDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGN0cmxzQ29udGFpbmVyLmlkID0gJ0N0cmxzQ29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGN0cmxzQ29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jcmVhdGVDdHJsc0VsZW1lbnRzKGN0cmxzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZE1vZGVsKHRoaXMucXVlcnkpO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVWaWV3RWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjYW52YXMuaWQgPSAnTWFpbkNhbnZhcyc7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5pZCA9ICdPdmVybGF5JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IDUxMjtcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubGluZUhlaWdodCA9IHNpemUgKyAncHgnOyAvLyB2ZXJ0aWNhbGx5IGNlbnRlciB0ZXh0XHJcblxyXG4gICAgICAvLyB3aHkgZG8gd2UgaGF2ZSB0byBtYW51YWxseSBzZXQgdGhpcyBoZWlnaHQ/IElmIHdlIGRvbid0IGl0IGlzIDUxNS4yIHB4IGhpZ2hcclxuICAgICAgcGFyZW50LnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xyXG5cclxuXHJcbiAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgIC8vIFRPRE8gZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgbm90IGJlaW5nIGFibGUgdG8gY3JlYXRlIGEgV2ViR0wgY29udGV4dFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBnZXQgV2ViR0wgY29udGV4dFwiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdsID0gY29udGV4dDtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy5nbCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIud2hpdGVDb2xvciA9IFdISVRFX0NPTE9SO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmJsYWNrQ29sb3IgPSBCTEFDS19DT0xPUjtcclxuICAgICAgdGhpcy5yZW5kZXJlci51c2VUaHJlc2hvbGRzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubWluaVZpZXdVc2VUaHJlc2hvbGRzID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuaGFuZGxlciA9IG5ldyBQb2ludGVyRXZlbnRIYW5kbGVyKGNhbnZhcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkRyYWcgPSAocG9zOiBWZWMyLCBkZWx0YTogVmVjMikgPT4gdGhpcy5vbkRyYWcocG9zLCBkZWx0YSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkNsaWNrID0gKHBvczogVmVjMikgPT4gdGhpcy5vbkNsaWNrKHBvcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vblNjYWxlID0gKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSA9PiB0aGlzLm9uU2NhbGUoc2NhbGUsIGNoYW5nZSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vblJvdGF0ZSA9IChhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB0aGlzLm9uUm90YXRlKGFuZ2xlLCBkZWx0YSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vblRyYW5zbGF0ZSA9IChkZWx0YTogVmVjMikgPT4gdGhpcy5vblRyYW5zbGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBjcmVhdGVNb2RlbHNEcm9wRG93bk1lbnUocGFyZW50LCAoZmlsZSkgPT4gdGhpcy5sb2FkTW9kZWwoZmlsZSkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZUN0cmxzRWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnRocmVzaG9sZEN0cmwgPSBuZXcgVGhyZXNob2xkQ3RybChcclxuICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICB0aGlzLFxyXG4gICAgICAgICAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDEgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnSGlnaGxpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdIaWdobGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5oaWdobGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW0JMQUNLX0NPTE9SLCBXSElURV9DT0xPUl0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5oaWdobGlnaHQgPSB0aGlzLmhpZ2hsaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5oaWdobGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodExpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW0JMQUNLX0NPTE9SLCBXSElURV9DT0xPUl0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIucmFuZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5taWRMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnTWlkTGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ01pZCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIucmFuZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5kYXJrTGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ0RhcmtMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnRGFyayBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmRhcmtMaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbQkxBQ0tfQ09MT1IsIFdISVRFX0NPTE9SXSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5kYXJrTGlnaHRTbGlkZXIucmFuZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zaGFkb3dTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ1NoYWRvdycsXHJcbiAgICAgICAgIGxhYmVsOiAnU2hhZG93JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuc2hhZG93ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93ID0gdGhpcy5zaGFkb3dTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuc2hhZG93KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZykge1xyXG5cclxuICAgICAgLy8gaWYgbm90aGluZyB3YXMgc3BlY2lmaWVkLCBsb2FkIGFuIGludGVyZXN0aW5nIG1vZGVsXHJcbiAgICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICAgcXVlcnkgPSAnUG9zZV8wMi5ibG9iJztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxjID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKGxjLmVuZHNXaXRoKCcub2JqJykgfHwgbGMuZW5kc1dpdGgoJy5ibG9iJykpIHtcclxuXHJcbiAgICAgICAgIGxldCBzdGF0dXNGdW5jID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSBzdGF0dXM7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRNb2RlbEZpbGUocXVlcnksIHN0YXR1c0Z1bmMpXHJcbiAgICAgICAgICAgIC50aGVuKCh0T2JqKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICB0aGlzLmxvYWRlci5vcmllbnQodGhpcy5yZW5kZXJlci5vYmopO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBUT0RPIG11bHRpIGxpbmUgZXJyb3IgbWVzc2FnZXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gJ1Vua25vd24gTW9kZWw6JyArIHF1ZXJ5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU2xpZGVycygpIHtcclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodDtcclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5saWdodExpZ2h0O1xyXG4gICAgICB0aGlzLm1pZExpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodDtcclxuICAgICAgdGhpcy5kYXJrTGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmRhcmtMaWdodDtcclxuICAgICAgdGhpcy5zaGFkb3dTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLnNoYWRvdztcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB0b2dnbGVNb2RlKCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucG9pbnRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5WaWV3OlxyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYmFsbENvbG9yID0gdGhpcy5yZW5kZXJlci55ZWxsb3c7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYmFsbENvbG9yID0gV0hJVEVfQ09MT1IudG9HbENvbG9yKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRHJhZyhwb3M6IFZlYzIsIGRlbHRhOiBWZWMyKSB7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLlZpZXcpIHtcclxuICAgICAgICAgLy8gVE9ETyByZXBsYWNlIDAuMDEgd2l0aCBzb21lIGtpbmQgb2YgcGh5c2ljYWwgbWVhc3VyZW1lbnRcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5vYmoucm90WCgtZGVsdGEueSAqIDAuMDEpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RZKC1kZWx0YS54ICogMC4wMSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgIGxldCBtYXRZID0gTWF0NC5mcm9tUm90WSh0b1JhZCgtZGVsdGEueCkpO1xyXG4gICAgICAgICBsZXQgbWF0WCA9IE1hdDQuZnJvbVJvdFgodG9SYWQoLWRlbHRhLnkpKTtcclxuICAgICAgICAgbGV0IHZlYyA9IG5ldyBWZWM0KFtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueixcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICBdKTtcclxuICAgICAgICAgdmVjID0gbWF0WC5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICB2ZWMgPSBtYXRZLm11bHRWKHZlYyk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnggPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi55ID0gdmVjLnZhbHVlc1sxXTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueiA9IHZlYy52YWx1ZXNbMl07XHJcblxyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlLlxyXG4gICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlLlxyXG4gICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgaGl0IG9uIG9uZSBvZiB0aGUgdmlld3Mgb2NjdXJzLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBvbkNsaWNrKHBvczogVmVjMik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgbGV0IGNhbnZhc1dpZHRoID0gdGhpcy5nbC5jYW52YXMud2lkdGg7XHJcbiAgICAgIGxldCBjYW52YXNIZWlnaHQgPSB0aGlzLmdsLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBjbGlwU3BhY2UgPSB0aGlzLnJlbmRlcmVyLmdldENsaXBTcGFjZSgpO1xyXG4gICAgICBsZXQgbWluaVdpZHRoID0gdGhpcy5yZW5kZXJlci5taW5pU2l6ZSAqICgyIC8gY2xpcFNwYWNlLndpZHRoKSAqIGNhbnZhc1dpZHRoO1xyXG4gICAgICBsZXQgbWluaUhlaWdodCA9IHRoaXMucmVuZGVyZXIubWluaVNpemUgKiAoMiAvIGNsaXBTcGFjZS5oZWlnaHQpICogY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKHBvcy54IDwgbWluaVdpZHRoICYmIHBvcy55IDwgbWluaUhlaWdodCkge1xyXG4gICAgICAgICB0aGlzLnRvZ2dsZU1vZGUoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocG9zLnggPiBjYW52YXNXaWR0aCAtIG1pbmlXaWR0aCAmJiBwb3MueSA8IG1pbmlXaWR0aCkge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVzZVRocmVzaG9sZHMgPSAhdGhpcy5yZW5kZXJlci51c2VUaHJlc2hvbGRzO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLm1pbmlWaWV3VXNlVGhyZXNob2xkcyA9ICF0aGlzLnJlbmRlcmVyLm1pbmlWaWV3VXNlVGhyZXNob2xkcztcclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBub3QgaGFuZGxlZFxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25TY2FsZShzY2FsZTogbnVtYmVyLCBjaGFuZ2U6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnpvb20oY2hhbmdlKTtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Sb3RhdGUoYW5nbGU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RaKGRlbHRhKTtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25UcmFuc2xhdGUoZGVsdGE6IFZlYzIpIHtcclxuXHJcbiAgICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgZmFjdG9yID0gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlci50cmFuc2xhdGVWaWV3KG5ldyBWZWMyKFtcclxuICAgICAgICAgZmFjdG9yICogMiAqIGRlbHRhLnggLyB0aGlzLmdsLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgZmFjdG9yICogMiAqIGRlbHRhLnkgLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcclxuICAgICAgXSkpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRpY2soKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAvLyBUT0RPIG9ubHkgcmVkcmF3IHRoZSB0aHJlc2hvbGQgY3RybCBpZiBhIHNsaWRlciBjaGFuZ2VkXHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICAgICAgIHRoaXMudGhyZXNob2xkQ3RybC5kcmF3KCk7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlYzIgfSBmcm9tIFwiLi9WZWNcIjtcclxuXHJcbnR5cGUgUG9pbnRlclJvdGF0ZUZ1bmN0aW9uID0gKGFuZ2xlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlclRyYW5zbGF0ZUZ1bmN0aW9uID0gKGRlbHRhOiBWZWMyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJTY2FsZUZ1bmN0aW9uID0gKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJEcmFnRnVuY3Rpb24gPSAocG9zOiBWZWMyLCBkZWx0YTogVmVjMikgPT4gdm9pZDtcclxudHlwZSBQb2ludGVyVXBGdW5jdGlvbiA9ICgpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlckRvd25GdW5jdGlvbiA9IChwb3M6IFZlYzIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlckRibENsaWNrRnVuY3Rpb24gPSAocG9zOiBWZWMyKSA9PiBib29sZWFuO1xyXG50eXBlIFBvaW50ZXJDbGlja0Z1bmN0aW9uID0gKHBvczogVmVjMikgPT4gYm9vbGVhbjtcclxuXHJcbmNvbnN0IERCTF9DTElDS19USU1FID0gMzAwOyAvLyBtc1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIG1hbmFnaW5nIHRvdWNoL21vdXNlIGV2ZW50cyBvdmVyIGEgaHRtbCBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9pbnRlckV2ZW50SGFuZGxlciB7XHJcblxyXG4gICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBwdWJsaWMgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICBwdWJsaWMgb25VcDogUG9pbnRlclVwRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRvd246IFBvaW50ZXJEb3duRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvblNjYWxlOiBQb2ludGVyU2NhbGVGdW5jdGlvbjtcclxuICAgcHVibGljIG9uUm90YXRlOiBQb2ludGVyUm90YXRlRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvblRyYW5zbGF0ZTogUG9pbnRlclRyYW5zbGF0ZUZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25DbGljazogUG9pbnRlckNsaWNrRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRibENsaWNrOiBQb2ludGVyRGJsQ2xpY2tGdW5jdGlvbjtcclxuICAgcHVibGljIG9uRHJhZzogUG9pbnRlckRyYWdGdW5jdGlvbjtcclxuXHJcbiAgIHB1YmxpYyBsYXN0UG9zOiBWZWMyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaFRpbWU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBwcmltYXJ5VG91Y2hJZDogbnVtYmVyID0gLTE7XHJcbiAgIHByaXZhdGUgc2Vjb25kYXJ5VG91Y2hJZDogbnVtYmVyID0gLTE7XHJcbiAgIHByaXZhdGUgaW5pdGlhbFRvdWNoRGlzdGFuY2U6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBsYXN0VG91Y2hEaXN0YW5jZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaEFuZ2xlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgbGFzdFRvdWNoQ2VudGVyOiBWZWMyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgLy8gZWxlbWVudC5vbnRvdWNoIGlzbid0IHN1cHBvcnRlZCBvbiBkZXNrdG9wIGRldmljZXMgc28gdXNlIGFkZEV2ZW50TGlzdGVuZXIgaW5zdGVhZFxyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgIC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSB1c2luZyB0aGUgZXZlbnRcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRvdWNoXHJcbiAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgLy8gcmVjb3JkIHRoZSBwcmltYXJ5IHRvdWNoIGlkXHJcbiAgICAgICAgICAgIHRoaXMucHJpbWFyeVRvdWNoSWQgPSBldmVudC50b3VjaGVzWzBdLmlkZW50aWZpZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBzZW5kIG91dCBvbkRvd24oKSBhbmQgcG90ZW50aWFsbHkgb25EYmxDbGljaygpIGV2ZW50c1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3MoZXZlbnQudG91Y2hlc1swXSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lIC0gdGhpcy5sYXN0VG91Y2hUaW1lIDwgREJMX0NMSUNLX1RJTUUpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5vdXJEYmxDbGljayhwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLm91ck9uRG93bihwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoVGltZSA9IHRpbWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgc2Vjb25kIHRvdWNoXHJcbiAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAyICYmIHRoaXMucHJpbWFyeVRvdWNoSWQgPj0gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8gcmVjb3JkIHRoZSBzZWNvbmRhcnkgdG91Y2ggaWQuIEl0IHdpbGwgYWx3YXlzIGJlIHRoZSBzZWNvbmQgZWxlbWVudCB3aGVuXHJcbiAgICAgICAgICAgIC8vIHRoZXJlIGFyZSBvbmx5IHR3byBlbGVtZW50c1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvdWNoSWQgPSBldmVudC50b3VjaGVzWzFdLmlkZW50aWZpZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdmFsdWVzIGZvciBnZXN0dXJlc1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmNvbXB1dGVUb3VjaERpc3RhbmNlKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVG91Y2hEaXN0YW5jZSA9IGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQW5nbGUgPSB0aGlzLmNvbXB1dGVUb3VjaEFuZ2xlKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZW50ZXIgPSB0aGlzLmNvbXB1dGVUb3VjaENlbnRlcihldmVudCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgLy8gcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIHVzaW5nIHRoZSBldmVudFxyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgLy8gaWYgdGhlIGluaXRpYWwgdHdvIHRvdWNoZXMgYXJlIGFjdGl2ZVxyXG4gICAgICAgICBpZiAodGhpcy5wcmltYXJ5VG91Y2hJZCA+PSAwICYmIHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA+PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBzZW5kIG91dCBnZXN0dXJlIGV2ZW50c1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLmNvbXB1dGVUb3VjaERpc3RhbmNlKGV2ZW50KTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gZGlzdGFuY2UgLyB0aGlzLmluaXRpYWxUb3VjaERpc3RhbmNlO1xyXG4gICAgICAgICAgICBsZXQgY2hhbmdlID0gZGlzdGFuY2UgLyB0aGlzLmxhc3RUb3VjaERpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLm91ck9uU2NhbGUoc2NhbGUsIGNoYW5nZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY29tcHV0ZVRvdWNoQW5nbGUoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm91ck9uUm90YXRlKGFuZ2xlLCBhbmdsZSAtIHRoaXMubGFzdFRvdWNoQW5nbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaEFuZ2xlID0gYW5nbGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5jb21wdXRlVG91Y2hDZW50ZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAvLyByZXZlcnNlIFkgdmFsdWVzIHNvIHRoZSBib3R0b20gaXMgemVybyBpbnN0ZWFkIG9mIHRoZSB0b3BcclxuICAgICAgICAgICAgbGV0IGRlbHRhID0gW2NlbnRlci54IC0gdGhpcy5sYXN0VG91Y2hDZW50ZXIueCwgdGhpcy5sYXN0VG91Y2hDZW50ZXIueSAtIGNlbnRlci55XTtcclxuICAgICAgICAgICAgdGhpcy5vdXJPblRyYW5zbGF0ZShuZXcgVmVjMihkZWx0YSkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvLyBpZiBvbmx5IHRoZSBpbml0aWFsIHRvdWNoIGlzIGFjdGl2ZVxyXG4gICAgICAgICBlbHNlIGlmICh0aGlzLnByaW1hcnlUb3VjaElkID49IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbmQgb3V0IHRoZSBkcmFnIGV2ZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICBsZXQgdG91Y2ggPSB0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnByaW1hcnlUb3VjaElkKTtcclxuICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zKHRvdWNoKTtcclxuICAgICAgICAgICAgICAgdGhpcy5vdXJPbkRyYWcocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgLy8gcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIHVzaW5nIHRoZSBldmVudFxyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnNlY29uZGFyeVRvdWNoSWQpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgLy8gaWYgd2UgbGlmdGVkIHRoZSBzZWNvbmQgZmluZ2VyLCBidXQgbm90IHRoZSBmaXJzdCwgZ28gYmFja1xyXG4gICAgICAgICAgICAgICAvLyB0byB0aGUgZHJhZyBnZXN0dXJlLCBidXQgYWRqdXN0IHRoZSByZW1lbWJlcmQgcG9zaXRpb24gdG9cclxuICAgICAgICAgICAgICAgLy8gYmUgdGhlIGN1cnJlbnQgb25lIHNvIHRoYXQgdGhpbmdzIGRvbid0IGp1bXBcclxuICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gdGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5wcmltYXJ5VG91Y2hJZCk7XHJcbiAgICAgICAgICAgICAgIGlmICh0b3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3MgPSB0aGlzLmdldFBvcyh0b3VjaCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAodGhpcy5wcmltYXJ5VG91Y2hJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnByaW1hcnlUb3VjaElkKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnByaW1hcnlUb3VjaElkID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLm91ck9uVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAodGhpcy5zZWNvbmRhcnlUb3VjaElkID09PSAtMSB8fCB0aGlzLnByaW1hcnlUb3VjaElkID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxUb3VjaERpc3RhbmNlID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoRGlzdGFuY2UgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hBbmdsZSA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbnRlciA9IG5ldyBWZWMyKFstMSwgLTFdKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgbGV0IHBvcyA9IG5ldyBWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIHRoaXMub3VyT25Eb3duKHBvcyk7XHJcblxyXG4gICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdGlvbiBiZWNhdXNlIGRyYWdnaW5nIGlzIHVzZWQgZm9yIHJvdGF0aW5nIHRoZSBjYW1lcmEgYW5kIG1vdmluZyBvYmplY3RzXHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IFZlYzIoWyg8YW55PmV2ZW50KS5sYXllclgsICg8YW55PmV2ZW50KS5sYXllclldKTtcclxuICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3VyT25EcmFnKHBvcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNldXAgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5vdXJPblVwKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9uZGJsY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgbGV0IHBvcyA9IG5ldyBWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIHRoaXMub3VyRGJsQ2xpY2socG9zKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFRvdWNoKGV2ZW50OiBUb3VjaEV2ZW50LCBpZDogbnVtYmVyKTogVG91Y2gge1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbaV07XHJcbiAgICAgICAgIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG91Y2g7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbm8gbWF0Y2ggd2FzIGZvdW5kXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFBvcyh0b3VjaDogVG91Y2gpOiBWZWMyIHtcclxuICAgICAgbGV0IHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMihbdG91Y2guY2xpZW50WCAtIHJlY3QueCwgdG91Y2guY2xpZW50WSAtIHJlY3QueV0pO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFRvdWNoZXMoZXZlbnQ6IFRvdWNoRXZlbnQpOiB7IHByaW1hcnlUb3VjaDogVG91Y2gsIHNlY29uZGFyeVRvdWNoOiBUb3VjaCB9IHtcclxuXHJcbiAgICAgIGlmICh0aGlzLnByaW1hcnlUb3VjaElkIDwgMCB8fCB0aGlzLnNlY29uZGFyeVRvdWNoSWQgPCAwKSB7XHJcbiAgICAgICAgIHRocm93IEVycm9yKCdUd28gdG91Y2hlcyBleHBlY3RlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICBwcmltYXJ5VG91Y2g6IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMucHJpbWFyeVRvdWNoSWQpLFxyXG4gICAgICAgICBzZWNvbmRhcnlUb3VjaDogdGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5zZWNvbmRhcnlUb3VjaElkKSxcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXB1dGVUb3VjaERpc3RhbmNlKGV2ZW50OiBUb3VjaEV2ZW50KTogbnVtYmVyIHtcclxuXHJcbiAgICAgIGxldCB0b3VjaGVzID0gdGhpcy5nZXRUb3VjaGVzKGV2ZW50KTtcclxuXHJcbiAgICAgIGxldCB4MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblk7XHJcbiAgICAgIGxldCB4MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWDtcclxuICAgICAgbGV0IHkyID0gdG91Y2hlcy5zZWNvbmRhcnlUb3VjaC5zY3JlZW5ZO1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGguc3FydCgoeDIgLSB4MSkgKiAoeDIgLSB4MSkgKyAoeTIgLSB5MSkgKiAoeTIgLSB5MSkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXB1dGVUb3VjaEFuZ2xlKGV2ZW50OiBUb3VjaEV2ZW50KTogbnVtYmVyIHtcclxuXHJcbiAgICAgIGxldCB0b3VjaGVzID0gdGhpcy5nZXRUb3VjaGVzKGV2ZW50KTtcclxuXHJcbiAgICAgIGxldCB4MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblk7XHJcbiAgICAgIGxldCB4MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWDtcclxuICAgICAgbGV0IHkyID0gdG91Y2hlcy5zZWNvbmRhcnlUb3VjaC5zY3JlZW5ZO1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29tcHV0ZVRvdWNoQ2VudGVyKGV2ZW50OiBUb3VjaEV2ZW50KTogVmVjMiB7XHJcblxyXG4gICAgICBsZXQgdG91Y2hlcyA9IHRoaXMuZ2V0VG91Y2hlcyhldmVudCk7XHJcblxyXG4gICAgICBsZXQgeDEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5YO1xyXG4gICAgICBsZXQgeTEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5ZO1xyXG4gICAgICBsZXQgeDIgPSB0b3VjaGVzLnNlY29uZGFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgVmVjMihbKHgxICsgeDIpIC8gMiwgKHkxICsgeTIpIC8gMl0pO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uRG93bihwb3M6IFZlYzIpIHtcclxuXHJcbiAgICAgIC8vIGNoZWNrIGZvciBhIGNsaWNrIGhhbmRsZXJcclxuICAgICAgaWYgKHRoaXMub25DbGljayAmJiB0aGlzLm9uQ2xpY2socG9zLmNsb25lKCkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBub3QgaGFuZGxlZCBieSBhIGNsaWNrIGhhbmRlciwgc2VuZCB0aGUgb25Eb3duIGV2ZW50XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMubGFzdFBvcyA9IHBvcy5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMub25Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb3duKHBvcy5jbG9uZSgpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25VcCgpIHtcclxuXHJcbiAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vblVwKSB7XHJcbiAgICAgICAgIHRoaXMub25VcCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25EcmFnKHBvczogVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5vbkRyYWcpIHtcclxuICAgICAgICAgbGV0IGRlbHRhID0gbmV3IFZlYzIoW3Bvcy54IC0gdGhpcy5sYXN0UG9zLngsIHBvcy55IC0gdGhpcy5sYXN0UG9zLnldKTtcclxuICAgICAgICAgdGhpcy5vbkRyYWcocG9zLmNsb25lKCksIGRlbHRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxhc3RQb3MgPSBwb3MuY2xvbmUoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJEYmxDbGljayhwb3M6IFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMub25EYmxDbGljaykge1xyXG4gICAgICAgICB0aGlzLm9uRGJsQ2xpY2socG9zKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uU2NhbGUoc2NhbGU6IG51bWJlciwgY2hhbmdlOiBudW1iZXIpIHtcclxuICAgICAgaWYgKHRoaXMub25TY2FsZSkge1xyXG4gICAgICAgICB0aGlzLm9uU2NhbGUoc2NhbGUsIGNoYW5nZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPblJvdGF0ZShhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uUm90YXRlKSB7XHJcbiAgICAgICAgIHRoaXMub25Sb3RhdGUoYW5nbGUsIGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uVHJhbnNsYXRlKGRlbHRhOiBWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgIHRoaXMub25UcmFuc2xhdGUoZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsIi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBsb2dnaW5nIHRpbWluZyBtZXNzYWdlcyBmb3IgcHJvZmlsZSBjb2RlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZmlsZXIge1xyXG4gICAvLyB0aGUgbGFzdCB0aW1lIHN0YW1wXHJcbiAgIHByaXZhdGUgdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgcHVibGljIGdldCBlbGFwc2VkTXMoKSB7XHJcbiAgICAgIHJldHVybiAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnQpO1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgKiBQcmludHMgYSBtZXNzYWdlIHRvIGNvbnNvbGUgb2YgdGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgbGFzdCBtYXJrXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIHByaW50IHdpdGggdGhlIHRpbWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnICsgJyAnICsgdGhpcy5lbGFwc2VkTXMudG9GaXhlZCgxKSArICcgbXMnKTtcclxuICAgICAgdGhpcy5tYXJrKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGRhdGVzIHRoZSB0aW1lc3RhbXAgdG8gbm93XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFyaygpIHtcclxuICAgICAgdGhpcy50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi9NYXQnO1xyXG5pbXBvcnQgeyBWZWMzLCBWZWMyIH0gZnJvbSAnLi9WZWMnO1xyXG5pbXBvcnQgdmVydGV4U291cmNlIGZyb20gJy4vc2hhZGVycy9WaWV3ZXJWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCBmcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvVmlld2VyRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB7IGNsYW1wLCBtaXgsIHRvUmFkLCB0b0RlZyB9IGZyb20gJy4vR2xvYmFscyc7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gJy4vZ2xVbmlmb3JtJztcclxuaW1wb3J0IHsgZ2xDb21waWxlciB9IGZyb20gJy4vZ2xDb21waWxlcic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IGdsT2JqZWN0IH0gZnJvbSAnLi9nbE9iamVjdCc7XHJcbmltcG9ydCB7IGdsQ29sb3IzIH0gZnJvbSAnLi9nbENvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZVJlbmRlcmVyIH0gZnJvbSAnLi9UZXh0dXJlUmVuZGVyZXInO1xyXG5pbXBvcnQgeyB0ZXh0dXJlU2l6ZSB9IGZyb20gJy4vVGhyZXNob2xkQ3RybCc7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gJy4vaHRtbENvbG9yJztcclxuaW1wb3J0IHsgZ2xDbGlwU3BhY2UgfSBmcm9tICcuL2dsQ2xpcFNwYWNlJztcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmpCdWlsZGVyIH0gZnJvbSAnLi9UcmlhbmdsZU9iakJ1aWxkZXInO1xyXG5pbXBvcnQgeyBnbFRleHR1cmUsIGdsVGV4dHVyZVN0eWxlIH0gZnJvbSAnLi9nbFRleHR1cmUnO1xyXG5pbXBvcnQgeyBnbEZyYW1lQnVmZmVyIH0gZnJvbSAnLi9nbEZyYW1lQnVmZmVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWxsSW1hZ2VEYXRhIHtcclxuICAgcHVibGljIGltYWdlOiBJbWFnZURhdGE7XHJcbiAgIHB1YmxpYyBiYWxsQ2VudGVyOiBWZWMyO1xyXG4gICBwdWJsaWMgYmFsbFJhZGl1czogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IERFRkFVTFRfVEhSRVNIT0xEMSA9IDQwO1xyXG5leHBvcnQgbGV0IERFRkFVTFRfVEhSRVNIT0xEMiA9IDcwO1xyXG5cclxuY29uc3QgSElHSExJR0hUX0RJRkYgPSAwLjE7XHJcbmNvbnN0IEJBTExfUkFESVVTID0gMC41O1xyXG5jb25zdCBJTklUSUFMX0xJR0hUX0RJUkVDVElPTiA9IFsxLjAsIC0xLjAsIC0xLjVdO1xyXG5jb25zdCBJTklUSUFMX1ZJRVcgPSBNYXQ0LmlkZW50aXR5O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgcmVuZGVycyB0cmlhbmdsZXMgYW5kIGEgbGlnaHQgc291cmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG5cclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZpZXcgPSBJTklUSUFMX1ZJRVc7XHJcbiAgIHByaXZhdGUgbGlnaHRWaWV3ID0gbmV3IE1hdDQoKTtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uID0gbmV3IE1hdDQoKTtcclxuICAgcHJpdmF0ZSB1RXllID0gbmV3IFZlYzMoWzAsIDAsIDhdKTsgLy8gNCB0aW1lcyB0aGUgbWF4IG9iamVjdCBkaW1lbnNpb24gb2YgMi4gRm9yIGEgbW9kZWwsIGFib3V0IDIwIGZ0IGF3YXlcclxuICAgcHVibGljIG9ydGhvZ3JhcGhpYyA9IGZhbHNlO1xyXG5cclxuICAgcHJpdmF0ZSB1VGhyZXNob2xkMSA9IERFRkFVTFRfVEhSRVNIT0xEMTtcclxuICAgcHJpdmF0ZSB1VGhyZXNob2xkMiA9IERFRkFVTFRfVEhSRVNIT0xEMjtcclxuXHJcbiAgIHByaXZhdGUgdUhpZ2hsaWdodDogbnVtYmVyID0gMS4wO1xyXG4gICBwcml2YXRlIHVMaWdodExpZ2h0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdU1pZExpZ2h0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdURhcmtMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVTaGFkb3c6IG51bWJlciA9IDAuMjtcclxuXHJcbiAgIC8vIHNpemUgb2YgdGhlIHNtYWxsZXIgdmlld1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgbWluaVNpemUgPSAwLjI7XHJcblxyXG4gICBwdWJsaWMgdXNlVGhyZXNob2xkcyA9IGZhbHNlO1xyXG4gICBwdWJsaWMgbWluaVZpZXdVc2VUaHJlc2hvbGRzID0gdHJ1ZTtcclxuXHJcbiAgIHByaXZhdGUgYmFsbDogZ2xPYmplY3Q7XHJcbiAgIHByaXZhdGUgYXJyb3c6IGdsT2JqZWN0O1xyXG4gICBwcml2YXRlIGZsb29yOiBnbE9iamVjdDtcclxuICAgcHVibGljIG9iajogZ2xPYmplY3Q7XHJcblxyXG4gICBwcml2YXRlIHNoYWRvd0ZyYW1lQnVmZmVyOiBnbEZyYW1lQnVmZmVyO1xyXG4gICBwcml2YXRlIHNoYWRvd0NvbG9yVGV4dHVyZTogZ2xUZXh0dXJlO1xyXG4gICBwcml2YXRlIHNoYWRvd0RlcHRoVGV4dHVyZTogZ2xUZXh0dXJlO1xyXG5cclxuICAgcHJpdmF0ZSB0Q3RybEZyYW1lQnVmZmVyOiBnbEZyYW1lQnVmZmVyO1xyXG4gICBwcml2YXRlIHRDdHJsQ29sb3JUZXh0dXJlOiBnbFRleHR1cmU7XHJcbiAgIHByaXZhdGUgdEN0cmxEZXB0aFRleHR1cmU6IGdsVGV4dHVyZTtcclxuXHJcbiAgIHB1YmxpYyB1TGlnaHREaXJlY3Rpb24gPSBuZXcgVmVjMyhJTklUSUFMX0xJR0hUX0RJUkVDVElPTik7XHJcblxyXG4gICBwdWJsaWMgYmFsbENvbG9yID0gbmV3IGdsQ29sb3IzKFsxLCAxLCAxXSk7XHJcbiAgIHB1YmxpYyByZWFkb25seSB5ZWxsb3cgPSBuZXcgZ2xDb2xvcjMoWzEuMCwgMC45LCAwLjddKTtcclxuICAgcHVibGljIHdoaXRlQ29sb3IgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1NSwgMjU1XSk7XHJcbiAgIHB1YmxpYyBibGFja0NvbG9yID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG5cclxuICAgcHVibGljIHNob3dTaGFkb3dNYXAgPSBmYWxzZTtcclxuICAgcHVibGljIHNob3dNaW5pVmlldyA9IHRydWU7XHJcbiAgIHB1YmxpYyBzaG93Rmxvb3IgPSBmYWxzZTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XHJcblxyXG4gICAgICB0aGlzLmdsID0gZ2xDdHg7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuXHJcbiAgICAgIC8vIGVuYWJsZSB6LWJ1ZmZlclxyXG4gICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gICAgICAvLyBlbmFibGUgYWxwaGEgdmFsdWVzXHJcbiAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XHJcbiAgICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xyXG5cclxuICAgICAgdGhpcy5wcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKGdsLCB2ZXJ0ZXhTb3VyY2UsIGZyYWdtZW50U291cmNlKTtcclxuXHJcbiAgICAgIGxldCB0QmFsbCA9IG5ldyBUcmlhbmdsZU9iakJ1aWxkZXIoJ0JhbGwnKTtcclxuICAgICAgdEJhbGwuYWRkU3BoZXJlKDUwLCBCQUxMX1JBRElVUywgbmV3IFZlYzMoWzAsIDAsIDBdKSk7XHJcbiAgICAgIHRCYWxsLm9wdGltaXplKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgdGhpcy5iYWxsID0gbmV3IGdsT2JqZWN0KGdsLCB0QmFsbCwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCB0QXJyb3cgPSBuZXcgVHJpYW5nbGVPYmpCdWlsZGVyKCdMaWdodCBBcnJvdycpO1xyXG4gICAgICB0QXJyb3cuYWRkQXJyb3coKTtcclxuICAgICAgdGhpcy5hcnJvdyA9IG5ldyBnbE9iamVjdChnbCwgdEFycm93LCB0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldENsaXBTcGFjZSgpOiBnbENsaXBTcGFjZSB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBsZXQgYXIgPSBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGFyID4gMSkge1xyXG4gICAgICAgICByZXR1cm4gbmV3IGdsQ2xpcFNwYWNlKG5ldyBWZWMzKFstYXIsIC0xLCAxMDBdKSwgbmV3IFZlYzMoW2FyLCAxLCAtMTAwXSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbmV3IGdsQ2xpcFNwYWNlKG5ldyBWZWMzKFstMSwgLTEgLyBhciwgMTAwXSksIG5ldyBWZWMzKFsxLCAxIC8gYXIsIC0xMDBdKSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVQcm9qZWN0aW9uTWF0cml4KCkge1xyXG4gICAgICBsZXQgY2xpcFNwYWNlID0gdGhpcy5nZXRDbGlwU3BhY2UoKTtcclxuICAgICAgaWYgKHRoaXMub3J0aG9ncmFwaGljKSB7XHJcbiAgICAgICAgIHRoaXMucHJvamVjdGlvbiA9IE1hdDQubWFrZU9ydGhvKFxyXG4gICAgICAgICAgICBjbGlwU3BhY2UubGVmdCxcclxuICAgICAgICAgICAgY2xpcFNwYWNlLnJpZ2h0LFxyXG4gICAgICAgICAgICBjbGlwU3BhY2UuYm90dG9tLFxyXG4gICAgICAgICAgICBjbGlwU3BhY2UudG9wLFxyXG4gICAgICAgICAgICBjbGlwU3BhY2UubmVhcixcclxuICAgICAgICAgICAgY2xpcFNwYWNlLmZhclxyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBsZXQgZXllID0gdGhpcy51RXllO1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgICAgbGV0IHVwID0gbmV3IFZlYzMoWzAsIDEsIDBdKTtcclxuICAgICAgICAgbGV0IG1hdCA9IE1hdDQubWFrZUxvb2tBdChleWUsIGNlbnRlciwgdXApO1xyXG5cclxuXHJcbiAgICAgICAgIGxldCBtYXhIZWlnaHQgPSAyLjA7XHJcbiAgICAgICAgIGxldCBmaWVsZE9mVmlldyA9IDIgKiB0b0RlZyhNYXRoLmF0YW4yKG1heEhlaWdodCAvIDIsIGV5ZS56KSk7XHJcbiAgICAgICAgIGxldCBhc3BlY3RSYXRpbyA9IGNsaXBTcGFjZS53aWR0aCAvIGNsaXBTcGFjZS5oZWlnaHQ7XHJcbiAgICAgICAgIGxldCBuZWFyID0gMC4xO1xyXG4gICAgICAgICBsZXQgZmFyID0gMjA7XHJcbiAgICAgICAgIHRoaXMucHJvamVjdGlvbiA9IE1hdDQubWFrZVBlcnNwZWN0aXZlKGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgbmVhciwgZmFyKS5tdWx0TShtYXQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8vXHJcbiAgIC8vIFRoZSBmdW5jdGlvbnMgYmVsb3cgY2hhbmdlIG91ciB2aWV3IG9mIHRoZSBtb2RlbFxyXG4gICAvL1xyXG4gICBwdWJsaWMgem9vbSh6b29tOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52aWV3LnNjYWxlKHpvb20pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdHJhbnNsYXRlVmlldyhkZWx0YTogVmVjMikge1xyXG4gICAgICB0aGlzLnZpZXcudHJhbnNsYXRlKG5ldyBWZWMzKFtkZWx0YS54LCBkZWx0YS55LCAwXSkpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhpZ2hsaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51SGlnaGxpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgaGlnaGxpZ2h0KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudUhpZ2hsaWdodCA9IE1hdGgubWF4KHZhbCwgSElHSExJR0hUX0RJRkYpO1xyXG4gICAgICB0aGlzLnVTaGFkb3cgPSBNYXRoLm1pbih0aGlzLnVTaGFkb3csIHRoaXMudUhpZ2hsaWdodCAtIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbGlnaHRMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51TGlnaHRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IG1pZExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVNaWRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IGRhcmtMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51RGFya0xpZ2h0O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHNoYWRvdygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51U2hhZG93O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgc2hhZG93KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHZhbCwgMSAtIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gTWF0aC5tYXgodGhpcy51SGlnaGxpZ2h0LCB0aGlzLnVTaGFkb3cgKyBISUdITElHSFRfRElGRik7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHRocmVzaG9sZDEoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudVRocmVzaG9sZDE7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB0aHJlc2hvbGQxKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDEgPSB2YWw7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDIgPSBNYXRoLm1heCh0aGlzLnVUaHJlc2hvbGQyLCB2YWwpO1xyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQyO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gTWF0aC5taW4odGhpcy51VGhyZXNob2xkMSwgdmFsKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgdE9iaigpOiBUcmlhbmdsZU9iaiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9iai50T2JqO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbG9yQXQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICBkZWcgPSBjbGFtcChkZWcsIDAsIDkwKTtcclxuICAgICAgcmV0dXJuIG1peCh0aGlzLnVTaGFkb3csIHRoaXMudUhpZ2hsaWdodCAtIEhJR0hMSUdIVF9ESUZGLCBNYXRoLmNvcyh0b1JhZChkZWcpKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlQ29sb3JzKCkge1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gdGhpcy5jb2xvckF0KDAuNSAqIHRoaXMudGhyZXNob2xkMSk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gdGhpcy5jb2xvckF0KG1peCh0aGlzLnRocmVzaG9sZDEsIHRoaXMudGhyZXNob2xkMiwgMC41KSk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IHRoaXMuY29sb3JBdCgodGhpcy50aHJlc2hvbGQyICsgOTApIC8gMik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXRNb2RlbCh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBpZiAodGhpcy5vYmopIHtcclxuICAgICAgICAgdGhpcy5vYmouZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vYmogPSBuZXcgZ2xPYmplY3QodGhpcy5nbCwgdE9iaiwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCBjZW50ZXIgPSB0T2JqLmNlbnRlcjtcclxuICAgICAgdGhpcy5vYmoudHJhbnNsYXRlKG5ldyBWZWMzKFstY2VudGVyLngsIC1jZW50ZXIueSwgLWNlbnRlci56XSkpO1xyXG4gICAgICBsZXQgc2NhbGUgPSAyLjAgLyBNYXRoLnNxcnQodE9iai53aWR0aCAqIHRPYmoud2lkdGggKyB0T2JqLmhlaWdodCAqIHRPYmouaGVpZ2h0ICsgdE9iai5kZXB0aCAqIHRPYmouZGVwdGgpO1xyXG4gICAgICB0aGlzLm9iai5zY2FsZShzY2FsZSk7XHJcbiAgICAgIHRoaXMub2JqLnhGb3JtLnNuYXAoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgIHRoaXMuZmxvb3IuZGVsZXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0Rmxvb3IgPSBuZXcgVHJpYW5nbGVPYmpCdWlsZGVyKCdGbG9vcicpO1xyXG5cclxuICAgICAgLy8gbWFrZSB0aGUgZmxvb3Igc2l6ZSBzbGlnaHRseSBsYXJnZXIgdGhhbiB0aGUgb2JqZWN0LCBjZW50ZXJlZCBhdCB0aGUgYm90dG9tXHJcbiAgICAgIGxldCByYWRpdXMgPSA0O1xyXG4gICAgICBsZXQgcG9zID0gbmV3IFZlYzMoWzAsIC1zY2FsZSAqIHRPYmouaGVpZ2h0IC8gMiwgMF0pO1xyXG4gICAgICB0Rmxvb3IuYWRkRGlzayg1MCwgcmFkaXVzLCBwb3MpO1xyXG4gICAgICB0aGlzLmZsb29yID0gbmV3IGdsT2JqZWN0KHRoaXMuZ2wsIHRGbG9vciwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMuZ2wsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VGbG9vckNlbnRlcicsIHRGbG9vci5jZW50ZXIpO1xyXG4gICAgICB1bmkuc2V0KCd1Rmxvb3JSYWRpdXMnLCByYWRpdXMpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgdGhlIHZpZXcgYW5kIHRoZSBsaWdodFxyXG4gICAgICB0aGlzLnJlc2V0VmlldygpO1xyXG4gICAgICB0aGlzLnVMaWdodERpcmVjdGlvbiA9IG5ldyBWZWMzKElOSVRJQUxfTElHSFRfRElSRUNUSU9OKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlc2V0VmlldygpIHtcclxuICAgICAgdGhpcy52aWV3ID0gSU5JVElBTF9WSUVXLmNsb25lKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKDxFbGVtZW50PmdsLmNhbnZhcyk7XHJcbiAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ3NzKHN0eWxlLmJhY2tncm91bmRDb2xvcikudG9HbENvbG9yKCk7XHJcbiAgICAgIGdsLmNsZWFyQ29sb3IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgMSk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG4gICAgICB0aGlzLnJlbmRlclRvU2hhZG93TWFwKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyVG9TY3JlZW4oKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBzZXRTdGRVbmlmb3JtcygpOiBnbFVuaWZvcm0ge1xyXG5cclxuICAgICAgbGV0IHVuaSA9IG5ldyBnbFVuaWZvcm0odGhpcy5nbCwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgdW5pLnNldCgndmlldycsIHRoaXMudmlldyk7XHJcbiAgICAgIHVuaS5zZXQoJ2xpZ2h0VmlldycsIHRoaXMubGlnaHRWaWV3KTtcclxuICAgICAgdW5pLnNldCgncHJvamVjdGlvbicsIHRoaXMucHJvamVjdGlvbik7XHJcbiAgICAgIHVuaS5zZXQoJ3VFeWUnLCB0aGlzLnVFeWUpO1xyXG4gICAgICB1bmkuc2V0KCd1T3J0aG9ncmFwaGljJywgdGhpcy5vcnRob2dyYXBoaWMpO1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCB0aGlzLnVMaWdodERpcmVjdGlvbik7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VTaGFkb3dzJywgdHJ1ZSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIHRoaXMudXNlVGhyZXNob2xkcyA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgdW5pLnNldCgndVRocmVzaG9sZDEnLCAxIC0gTWF0aC5zaW4odG9SYWQodGhpcy50aHJlc2hvbGQxICsgOTApKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VUaHJlc2hvbGQyJywgMSAtIE1hdGguc2luKHRvUmFkKHRoaXMudGhyZXNob2xkMiArIDkwKSkpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUxpZ2h0SW50ZW5zaXR5JywgdGhpcy51SGlnaGxpZ2h0IC0gdGhpcy51U2hhZG93IC0gSElHSExJR0hUX0RJRkYpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIHRoaXMudVNoYWRvdyk7XHJcbiAgICAgIHVuaS5zZXQoJ3VIaWdobGlnaHQnLCB0aGlzLnVIaWdobGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHRMaWdodCcsIHRoaXMudUxpZ2h0TGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1TWlkTGlnaHQnLCB0aGlzLnVNaWRMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VEYXJrTGlnaHQnLCB0aGlzLnVEYXJrTGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1U2hhZG93JywgdGhpcy51U2hhZG93KTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VXaGl0ZUNvbG9yJywgdGhpcy53aGl0ZUNvbG9yLnRvR2xDb2xvcigpKTtcclxuICAgICAgdW5pLnNldCgndUJsYWNrQ29sb3InLCB0aGlzLmJsYWNrQ29sb3IudG9HbENvbG9yKCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHVuaTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldEJhbGxJbWFnZSgpOiBCYWxsSW1hZ2VEYXRhIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICBpZiAoIXRoaXMudEN0cmxGcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICB0aGlzLnRDdHJsRnJhbWVCdWZmZXIgPSBuZXcgZ2xGcmFtZUJ1ZmZlcihnbCwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplKTtcclxuICAgICAgICAgdGhpcy50Q3RybENvbG9yVGV4dHVyZSA9IHRoaXMudEN0cmxGcmFtZUJ1ZmZlci5jcmVhdGVUZXh0dXJlKGdsVGV4dHVyZVN0eWxlLkNvbG9yKTtcclxuICAgICAgICAgdGhpcy50Q3RybERlcHRoVGV4dHVyZSA9IHRoaXMudEN0cmxGcmFtZUJ1ZmZlci5jcmVhdGVUZXh0dXJlKGdsVGV4dHVyZVN0eWxlLkRlcHRoKTtcclxuXHJcbiAgICAgICAgIHRoaXMudEN0cmxGcmFtZUJ1ZmZlci5hdHRhY2hUZXh0dXJlKGdsLkNPTE9SX0FUVEFDSE1FTlQwLCB0aGlzLnRDdHJsQ29sb3JUZXh0dXJlKTtcclxuICAgICAgICAgdGhpcy50Q3RybEZyYW1lQnVmZmVyLmF0dGFjaFRleHR1cmUoZ2wuREVQVEhfQVRUQUNITUVOVCwgdGhpcy50Q3RybERlcHRoVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICB0aGlzLnRDdHJsRnJhbWVCdWZmZXIuY2hlY2soKTtcclxuXHJcbiAgICAgICAgIC8vIFVuYmluZCB0aGVzZSBuZXcgb2JqZWN0cywgd2hpY2ggbWFrZXMgdGhlIGRlZmF1bHQgZnJhbWUgYnVmZmVyIHRoZVxyXG4gICAgICAgICAvLyB0YXJnZXQgZm9yIHJlbmRlcmluZy5cclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICB0aGlzLnRDdHJsQ29sb3JUZXh0dXJlLmJpbmQoKTtcclxuICAgICAgdGhpcy50Q3RybEZyYW1lQnVmZmVyLmJpbmQoKTtcclxuICAgICAgdGhpcy50Q3RybEZyYW1lQnVmZmVyLmF0dGFjaFRleHR1cmUoZ2wuQ09MT1JfQVRUQUNITUVOVDAsIHRoaXMudEN0cmxDb2xvclRleHR1cmUpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoPEVsZW1lbnQ+Z2wuY2FudmFzKTtcclxuICAgICAgbGV0IGNvbG9yID0gaHRtbENvbG9yLmZyb21Dc3Moc3R5bGUuYmFja2dyb3VuZENvbG9yKS50b0dsQ29sb3IoKTtcclxuICAgICAgZ2wuY2xlYXJDb2xvcihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCAxKTtcclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuXHJcbiAgICAgIC8vIGFsd2F5cyByZW5kZXIgd2l0aCBiYW5kc1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIHRydWUpO1xyXG5cclxuICAgICAgLy8gc2hvb3QgdGhlIGxpZ2h0IHN0cmFpZ2h0IGRvd25cclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IFZlYzMoWzAsIC0xLCAwXSkpO1xyXG5cclxuICAgICAgLy8gZG9uJ3QgY2FzdCBzaGFkb3dzXHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VTaGFkb3dzJywgZmFsc2UpO1xyXG5cclxuICAgICAgdW5pLnNldCgndmlldycsIG5ldyBNYXQ0KCkpO1xyXG5cclxuICAgICAgLy8gbW92ZSB0aGUgYmFsbCB0byB0aGUgbG93ZXIgbGVmdCBhbmQgcGFydGlhbGx5IG9mZnNjcmVlblxyXG4gICAgICBjb25zdCBzY2FsZSA9IDEuNzU7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IG5ldyBWZWMzKFstMC42LCAtMC42LCAwXSk7XHJcbiAgICAgIHRoaXMuYmFsbC5jbGVhclRyYW5zZm9ybXMoKTtcclxuICAgICAgdGhpcy5iYWxsLnNjYWxlKHNjYWxlKTtcclxuICAgICAgdGhpcy5iYWxsLnRyYW5zbGF0ZShvZmZzZXQpO1xyXG5cclxuICAgICAgLy8gcmVuZGVyIHRoZSBiYWxsXHJcbiAgICAgIHRoaXMuYmFsbC5kcmF3KCk7XHJcbiAgICAgIHRoaXMuYmFsbC5jbGVhclRyYW5zZm9ybXMoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIGFycm93XHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodERpcmVjdGlvbicsIG5ldyBWZWMzKFsxLCAtMC41LCAtMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIGZhbHNlKTtcclxuXHJcbiAgICAgIC8vIGZpcnN0IHJlc2V0IHRoaW5ncyBzbyB0aGF0IHdlJ3JlIGxvb2tpbmcgZG93biB0aGUgei1heGlzXHJcbiAgICAgIHRoaXMuYXJyb3cuY2xlYXJUcmFuc2Zvcm1zKCk7XHJcbiAgICAgIHRoaXMuYXJyb3cuc2NhbGUoMS4yNSlcclxuICAgICAgdGhpcy5hcnJvdy50cmFuc2xhdGUobmV3IFZlYzMoW29mZnNldC54LCBvZmZzZXQueSArIHNjYWxlICogQkFMTF9SQURJVVMgKyAwLjEsIDAuMF0pKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VXaGl0ZUNvbG9yJywgbmV3IGdsQ29sb3IzKFsxLjAsIDEuMCwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1QmxhY2tDb2xvcicsIGh0bWxDb2xvci5ibGFjay50b0dsQ29sb3IoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcblxyXG4gICAgICBsZXQgcGl4ZWxzID0gbmV3IFVpbnQ4QXJyYXkodGV4dHVyZVNpemUgKiB0ZXh0dXJlU2l6ZSAqIDQpO1xyXG4gICAgICBnbC5yZWFkUGl4ZWxzKDAsIDAsIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgcGl4ZWxzKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgZGF0YSBzdHJ1Y3R1cmUgd2UnbGwgcmV0dXJuXHJcbiAgICAgIGxldCBkYXRhID0gbmV3IEJhbGxJbWFnZURhdGEoKTtcclxuICAgICAgZGF0YS5pbWFnZSA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVscyksIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICAvLyBjb252ZXJ0IGZyb20gWy0xLDFdIGRyYXdpbmcgc3BhY2UgdG8gWzAsMV1cclxuICAgICAgZGF0YS5iYWxsUmFkaXVzID0gc2NhbGUgKiBCQUxMX1JBRElVUztcclxuICAgICAgZGF0YS5iYWxsQ2VudGVyID0gbmV3IFZlYzIoW29mZnNldC54LCBvZmZzZXQueV0pO1xyXG4gICAgICBkYXRhLmJhbGxSYWRpdXMgLz0gMjtcclxuICAgICAgZGF0YS5iYWxsQ2VudGVyLnggPSAwLjUgKiAoZGF0YS5iYWxsQ2VudGVyLnggKyAxKTtcclxuICAgICAgZGF0YS5iYWxsQ2VudGVyLnkgPSAwLjUgKiAoZGF0YS5iYWxsQ2VudGVyLnkgKyAxKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHJlbmRlclRvU2hhZG93TWFwKCk6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgaWYgKCF0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyKSB7XHJcbiAgICAgICAgIGxldCBzaXplID0gMTAyNDtcclxuICAgICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlciA9IG5ldyBnbEZyYW1lQnVmZmVyKGdsLCBzaXplLCBzaXplKTtcclxuICAgICAgICAgdGhpcy5zaGFkb3dDb2xvclRleHR1cmUgPSB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmNyZWF0ZVRleHR1cmUoZ2xUZXh0dXJlU3R5bGUuQ29sb3IpO1xyXG4gICAgICAgICB0aGlzLnNoYWRvd0RlcHRoVGV4dHVyZSA9IHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuY3JlYXRlVGV4dHVyZShnbFRleHR1cmVTdHlsZS5EZXB0aCk7XHJcblxyXG4gICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmF0dGFjaFRleHR1cmUoZ2wuQ09MT1JfQVRUQUNITUVOVDAsIHRoaXMuc2hhZG93Q29sb3JUZXh0dXJlKTtcclxuICAgICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5hdHRhY2hUZXh0dXJlKGdsLkRFUFRIX0FUVEFDSE1FTlQsIHRoaXMuc2hhZG93RGVwdGhUZXh0dXJlKTtcclxuXHJcbiAgICAgICAgIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuY2hlY2soKTtcclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIud2lkdGgsIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5iaW5kKCk7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICBsZXQgY2VudGVyID0gbmV3IFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgbGV0IHVwID0gbmV3IFZlYzMoWzAsIDEsIDBdKTtcclxuICAgICAgbGV0IGV5ZSA9IG5ldyBWZWMzKFstdGhpcy51TGlnaHREaXJlY3Rpb24ueCwgLXRoaXMudUxpZ2h0RGlyZWN0aW9uLnksIC10aGlzLnVMaWdodERpcmVjdGlvbi56XSk7XHJcbiAgICAgIGxldCBtYXQgPSBNYXQ0Lm1ha2VMb29rQXQoZXllLCBjZW50ZXIsIHVwKTtcclxuICAgICAgbWF0LnNldCgwLCAzLCAwKTtcclxuICAgICAgbWF0LnNldCgxLCAzLCAwKTtcclxuICAgICAgbWF0LnNldCgyLCAzLCAwKTtcclxuICAgICAgLy8gdG8gYXZvaWQgY2xpcHBpbmcsIGV4cGFuZCB0aGUgeiByYW5nZSB0byBhbGxvdyBmdWxsIHByb2phdGlvbiBvZlxyXG4gICAgICAvLyBhbnl0aGluZyBpbiBhIDMtMy0zIGN1YmUuXHJcbiAgICAgIGxldCBtYXhTaXplID0gTWF0aC5zcXJ0KDI3KTtcclxuICAgICAgbWF0ID0gTWF0NC5tYWtlT3J0aG8oLTEsIDEsIC0xLCAxLCBtYXhTaXplLCAtbWF4U2l6ZSkubXVsdE0obWF0KTtcclxuICAgICAgdGhpcy5saWdodFZpZXcgPSBtYXQ7XHJcblxyXG4gICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG5cclxuICAgICAgLy8gY2hhbmdlIHRoZSB2aWV3IG1hdHJpeCBzbyB0aGF0IG91ciB2aWV3IGlzIGZyb20gdGhlIGxpZ2h0XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLmxpZ2h0Vmlldyk7XHJcbiAgICAgIHVuaS5zZXQoJ3Byb2plY3Rpb24nLCBNYXQ0LmlkZW50aXR5KTtcclxuXHJcbiAgICAgIC8vIGRvbid0IHRyeSB0byB1c2UgdGhlIHNoYWRvdyB0ZXh0dXJlIHdoaWxlIHdlJ3JlIGNyZWF0aW5nIGl0XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VTaGFkb3dzJywgZmFsc2UpO1xyXG5cclxuICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcmVuZGVyVG9TY3JlZW4oKTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIGRlcHRoIGJ1ZmZlciBmb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBpZiAodGhpcy5zaG93U2hhZG93TWFwKSB7XHJcbiAgICAgICAgIGxldCB0ciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIoZ2wpO1xyXG4gICAgICAgICB0ci5yZW5kZXIoXHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93RGVwdGhUZXh0dXJlLmdldCgpLFxyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmhlaWdodFxyXG4gICAgICAgICApO1xyXG4gICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgICAgdGhpcy5zaGFkb3dEZXB0aFRleHR1cmUuYmluZCgpO1xyXG5cclxuICAgICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgICAgLy8gZHJhdyB0aGUgbWFpbiBvYmplY3RcclxuICAgICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuICAgICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMuc2hvd0Zsb29yKSB7XHJcbiAgICAgICAgICAgIHVuaS5zZXQoJ3VTaG93Rmxvb3InLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmxvb3IueEZvcm0ubWF0ID0gdGhpcy5vYmoueEZvcm0ubWF0LmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjdWxsIHBvbHlnb25zIHNvIHdlIGRvbid0IHNlZSB0aGUgZmxvb3IgZnJvbSBiZWxvd1xyXG4gICAgICAgICAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKVxyXG4gICAgICAgICAgICBnbC5jdWxsRmFjZShnbC5CQUNLKTtcclxuICAgICAgICAgICAgdGhpcy5mbG9vci5kcmF3KCk7XHJcbiAgICAgICAgICAgIGdsLmRpc2FibGUoZ2wuQ1VMTF9GQUNFKVxyXG5cclxuICAgICAgICAgICAgdW5pLnNldCgndVNob3dGbG9vcicsIGZhbHNlKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAgICB0aGlzLmRyYXdNaW5pVmlldygpO1xyXG4gICAgICAgICB0aGlzLmRyYXdCYWxsKCk7XHJcblxyXG4gICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGRyYXdNaW5pVmlldygpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcbiAgICAgIHVuaS5zZXQoJ3Byb2plY3Rpb24nLCBNYXQ0Lm9ydGhvKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIG9iamVjdCBpbiB0aGUgdXBwZXIgcmlnaHQgYXQgYSByZWR1Y2VkIHNpemVcclxuICAgICAgbGV0IHZpZXcgPSBNYXQ0LmlkZW50aXR5O1xyXG4gICAgICB2aWV3LnNjYWxlKHRoaXMubWluaVNpemUpO1xyXG4gICAgICBsZXQgY2xpcFNwYWNlID0gdGhpcy5nZXRDbGlwU3BhY2UoKTtcclxuICAgICAgdmlldy50cmFuc2xhdGUobmV3IFZlYzMoW2NsaXBTcGFjZS5tYXgueCAtIHRoaXMubWluaVNpemUsIGNsaXBTcGFjZS5tYXgueSAtIHRoaXMubWluaVNpemUsIDBdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB2aWV3KTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLm1pbmlWaWV3VXNlVGhyZXNob2xkcyA/IDAgOiAxLCB0cnVlKTtcclxuICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGRyYXdCYWxsKCkge1xyXG5cclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuICAgICAgdW5pLnNldCgncHJvamVjdGlvbicsIE1hdDQub3J0aG8pO1xyXG5cclxuICAgICAgLy8gc3RvcCB1c2luZyB0aGUgc2hhZG93bWFwXHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VTaGFkb3dzJywgZmFsc2UpO1xyXG5cclxuICAgICAgbGV0IHZpZXcgPSBNYXQ0LmlkZW50aXR5O1xyXG4gICAgICB2aWV3LnNjYWxlKHRoaXMubWluaVNpemUpO1xyXG4gICAgICBsZXQgY2xpcFNwYWNlID0gdGhpcy5nZXRDbGlwU3BhY2UoKTtcclxuICAgICAgdmlldy50cmFuc2xhdGUobmV3IFZlYzMoW2NsaXBTcGFjZS5taW4ueCArIHRoaXMubWluaVNpemUsIGNsaXBTcGFjZS5tYXgueSAtIHRoaXMubWluaVNpemUsIDBdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB2aWV3KTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVzZVRocmVzaG9sZHMgPyAxIDogMCwgdHJ1ZSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VXaGl0ZUNvbG9yJywgdGhpcy5iYWxsQ29sb3IpO1xyXG4gICAgICB1bmkuc2V0KCd1QmxhY2tDb2xvcicsIGh0bWxDb2xvci5ibGFjay50b0dsQ29sb3IoKSk7XHJcbiAgICAgIHRoaXMuYmFsbC5kcmF3KCk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgVmVjMyhbMSwgLTAuNSwgLTAuNV0pKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCAwLCB0cnVlKTtcclxuXHJcbiAgICAgIC8vIGJhY2sgb3V0IGFuZ2xlcyBhcyBpZiBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICBsZXQgeCA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLng7XHJcbiAgICAgIGxldCB5ID0gdGhpcy51TGlnaHREaXJlY3Rpb24ueTtcclxuICAgICAgbGV0IHogPSB0aGlzLnVMaWdodERpcmVjdGlvbi56O1xyXG5cclxuICAgICAgLy8gc3RhcnQgYnkgbG9va2luZyBkb3duIGZyb20gdGhlIFogZGlyZWN0aW9uXHJcbiAgICAgIGxldCByYWRpdXMgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gTWF0aC5hY29zKHogLyByYWRpdXMpO1xyXG4gICAgICBsZXQgcm90YXRpb25BbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCByZXNldCB0aGluZ3Mgc28gdGhhdCB3ZSdyZSBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICB0aGlzLmFycm93LmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmFycm93LnRyYW5zbGF0ZShuZXcgVmVjMyhbMC4wLCAwLjU1LCAwLjBdKSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90WCh0b1JhZCg5MCkpO1xyXG5cclxuICAgICAgLy8gcm90YXRlIHRvIG1hdGNoIHRoZSBsaWdodCBzb3VyY2VcclxuICAgICAgdGhpcy5hcnJvdy5yb3RZKC1lbGV2YXRpb25BbmdsZSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90Wigtcm90YXRpb25BbmdsZSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1V2hpdGVDb2xvcicsIHRoaXMueWVsbG93KTtcclxuICAgICAgdW5pLnNldCgndUJsYWNrQ29sb3InLCBodG1sQ29sb3IuYmxhY2sudG9HbENvbG9yKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIDAuNCk7XHJcbiAgICAgIHRoaXMuYXJyb3cuZHJhdygpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuIElmIGEgaGl0XHJcbiAgICAqIG9jY3VycywgdGhlIGNsaWNrZWQgb24gdmlldyBpcyBzd2FwcGVkIGZvciB0aGUgcHJpbWFyeSB2aWV3IGFuZCB0cnVlXHJcbiAgICAqIGlzIHJldHVybmVkLiBJZiBubyBoaXQgb2NjdXJzLCBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUgWzAtMV0uXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUgWzAtMV0uXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuXHJcbiAgICAgIC8vIFRPRE8gYWRqdXN0IGZvciBhc3BlY3QgcmF0aW9cclxuICAgICAgaWYgKHRoaXMuc2hvd01pbmlWaWV3KSB7XHJcbiAgICAgICAgIGlmICh4ID4gKDEgLSB0aGlzLm1pbmlTaXplKSAmJiB5ID4gKDEgLSB0aGlzLm1pbmlTaXplKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZVRocmVzaG9sZHMgPSAhdGhpcy51c2VUaHJlc2hvbGRzO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSBcIi4vQ29sb3JSYW5nZVwiO1xyXG5pbXBvcnQgeyBnbENvbG9yMyB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yV2l0aEFscGhhIH0gZnJvbSBcIi4vaHRtbENvbG9yV2l0aEFscGhhXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhIHBhc3NlZCB0byB0aGUgU2xpZGVyIGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJTZXR1cCB7XHJcbiAgIGlkOiBzdHJpbmcsXHJcbiAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgIG1pbjogbnVtYmVyLFxyXG4gICBtYXg6IG51bWJlcixcclxuICAgdmFsdWU6IG51bWJlcixcclxuICAgY29sb3JzPzogaHRtbENvbG9yW10sXHJcbiAgIG9uaW5wdXQ/OiAoKSA9PiB2b2lkLFxyXG4gICBnZXRUZXh0PzogKHNsaWRlcjogU2xpZGVyKSA9PiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzbGlkZXIgY29tcG9zZWQgb2YgYSBsYWJlbCwgaW5wdXQgcmFuZ2UsIGNvbG9yIHNwYW4gYW5kIHZhbHVlIHNwYW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXIge1xyXG5cclxuICAgcHJpdmF0ZSBfcmFuZ2U6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX2NvbG9yU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF92YWx1ZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JzOiBDb2xvclJhbmdlO1xyXG4gICBwcml2YXRlIF9nZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZztcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgaHRtbCBvYmplY3QuXHJcbiAgICAqIEBwYXJhbSBzZXR1cCBUaGUgc2V0dXAgZGF0YSBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBzZXR1cDogSVNsaWRlclNldHVwKSB7XHJcblxyXG4gICAgICB0aGlzLl9nZXRUZXh0ID0gc2V0dXAuZ2V0VGV4dDtcclxuXHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmlkID0gc2V0dXAuaWQ7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnU2xpZGVyRGl2JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5pZCA9IHNldHVwLmlkICsgJ0xhYmVsJztcclxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ1NsaWRlckxhYmVsJztcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc2V0dXAubGFiZWw7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnR5cGUgPSAncmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5pZCA9IHNldHVwLmlkICsgJ1JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuY2xhc3NOYW1lID0gJ1NsaWRlclJhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UubWluID0gc2V0dXAubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1heCA9IHNldHVwLm1heC50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZSA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5Db2xvcigpO1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KClcclxuICAgICAgfSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl9yYW5nZSk7XHJcblxyXG4gICAgICBpZiAoc2V0dXAuY29sb3JzKSB7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmlkID0gc2V0dXAuaWQgKyAnQ29sb3JTcGFuJztcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJDb2xvclNwYW4nO1xyXG4gICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fY29sb3JTcGFuKTtcclxuXHJcbiAgICAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBjb2xvci5cclxuICAgICAgICAgdGhpcy5jb2xvcnMgPSBzZXR1cC5jb2xvcnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmlkID0gc2V0dXAuaWQgKyAnVmFsdWVTcGFuJztcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJWYWx1ZVNwYW4nO1xyXG4gICAgICAvLyAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pbm5lclRleHQgPSBzZXR1cC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fdmFsdWVTcGFuKTtcclxuXHJcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBzcGFuIHRleHRcclxuICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpO1xyXG5cclxuICAgICAgdGhpcy5fcmFuZ2Uub25pbnB1dCA9IHNldHVwLm9uaW5wdXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBzcGFuIGNvbG9yIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwZGF0ZVNwYW5Db2xvcigpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ29sb3IodGhpcy5fY29sb3JzLmdldCh2YWwpKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnRvSGV4KClcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICogU2V0cyB0aGUgc3BhbiBjb2xvciB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yLlxyXG4gKi9cclxuICAgcHJpdmF0ZSB1cGRhdGVTcGFuVGV4dCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2dldFRleHQpIHtcclxuICAgICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHRoaXMuX2dldFRleHQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGh0bWwgcmFuZ2Ugb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbCByYW5nZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHJhbmdlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciAoYW5kIGFzc29jaWF0ZWQgY29udGVudClcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgdGhlIGRlc2lyZWQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHZhbHVlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnZhbHVlQXNOdW1iZXIgPSB2YWw7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbiBzbGlkZXIgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWluKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1pbik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF4IHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1heCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBjb2xvciBmb3IgdGhlIHNsaWRlclxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCBjb2xvcnMoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIGNvbG9yc1xyXG4gICAgICB0aGlzLl9jb2xvcnMgPSBuZXcgQ29sb3JSYW5nZShjb2xvcnMpO1xyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGdyYWRpZW50IHN0eWxlIGZvciB0aGUgcmFuZ2Ugb2JqZWN0XHJcbiAgICAgIGxldCBncmFkaWVudFN0ciA9ICc5MGRlZyc7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGdyYWRpZW50U3RyICs9ICcsICcgKyBjb2xvcnNbaV0udG9Dc3MoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9yYW5nZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCgnICsgZ3JhZGllbnRTdHIgKyAnKSc7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIHNwYW4gY29sb3IgdG9vXHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBodG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBodG1sQ29sb3JXaXRoQWxwaGEudHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYSBnbENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBnbENvbG9yKCk6IGdsQ29sb3IzIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCkudG9HbENvbG9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBuZXcgZ2xDb2xvcjMoWzAsIDAsIDBdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCIvKipcclxuICogU3BoZXJpY2FsIGNvb3JkaW5hdGVzIGJhc2VkIG9uIHRoZSBXZWJHTCB2aWV3aW5nIHN5c3RlbTogeD1sZWZ0LXJpZ2h0LCB5PXVwLWRvd24sIHo9bmVhci1mYXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWxDb29yZCB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxldmF0aW9uIGZyb20gdGhlIGZsb29yIHRvIHRoZSBwb2ludC4gMCBhbmQgMTgwIGFyZSBvbiB0aGVcclxuICAgICogZmxvb3IuIDkwIHBvaW50cyB1cC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBlbGV2YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYW5nbGUsIHdoZW4gbG9va2luZyBkb3duIGZyb20gdGhlIHRvcCwgdG8gdGhlIHBvaW50LiAwIHBvaW50cyByaWdodC5cclxuICAgICovXHJcbiAgIHB1YmxpYyByb3RhdGlvbkFuZ2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSByYWRpdXNcclxuICAgICogQHBhcmFtIGVsZXZhdGlvbkFuZ2xlIFxyXG4gICAgKiBAcGFyYW0gcm90YXRpb25BbmdsZSBcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgZWxldmF0aW9uQW5nbGU6IG51bWJlciwgcm90YXRpb25BbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICB0aGlzLmVsZXZhdGlvbkFuZ2xlID0gZWxldmF0aW9uQW5nbGU7XHJcbiAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IHJvdGF0aW9uQW5nbGU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3BoZXJpY2FsIGNvb3JkaW5hdGUgZnJvbSBhIGNhcnRlc2lhbiBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHBvcyBUaGUgY2FydGVzaWFuIHBvaW50LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc3BoZXJpY2FsIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21YWVoocG9zOiBudW1iZXJbXSk6IFNwaGVyaWNhbENvb3JkIHtcclxuXHJcbiAgICAgIGxldCB4ID0gcG9zWzBdO1xyXG4gICAgICBsZXQgeSA9IHBvc1sxXTtcclxuICAgICAgbGV0IHogPSBwb3NbMl07XHJcblxyXG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XHJcbiAgICAgIGxldCByb3RhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hdGFuMih6LCB4KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hc2luKHkgLyByYWRpdXMpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcGhlcmljYWxDb29yZChyYWRpdXMsIGVsZXZhdGlvbkFuZ2xlLCByb3RhdGlvbkFuZ2xlKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgc3BoZXJpY2FsIGNvb3JkaW5hdGUgdG8gYSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1hZWigpOiBudW1iZXJbXSB7XHJcblxyXG4gICAgICBsZXQgZmxvb3JSYWRpdXMgPSB0aGlzLnJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeCA9IGZsb29yUmFkaXVzICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeiA9IGZsb29yUmFkaXVzICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBbeCwgeSwgel07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvVGV4dHVyZVJlbmRlcmVyVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgZnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1RleHR1cmVSZW5kZXJlckZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGRvZXMgdGhlIHdvcmsgb2YgYnVpbGRpbmcgdGhlIFBhdGggVHJhY2VkIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIge1xyXG5cclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgdmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcblxyXG4gICBwcml2YXRlIHZlcnRpY2VzID0gW1xyXG4gICAgICAtMSwgLTEsXHJcbiAgICAgIC0xLCArMSxcclxuICAgICAgKzEsIC0xLFxyXG4gICAgICArMSwgKzFcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHZlcnRleCBidWZmZXIgLSB0aGUgYmxvY2sgd2UnbGwgZHJhdyBvdXIgcmVuZGVyZWQgdGV4dHVyZSBvblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHNoYWRlclxyXG4gICAgICB0aGlzLnByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoZ2wsIHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZW5kZXIodGV4dHVyZTogV2ViR0xUZXh0dXJlLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KFxyXG4gICAgICAgICAoZ2wuY2FudmFzLndpZHRoIC0gd2lkdGgpIC8gMixcclxuICAgICAgICAgKGdsLmNhbnZhcy5oZWlnaHQgLSBoZWlnaHQpIC8gMixcclxuICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgIGhlaWdodFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBsYW5lc0FwcCB9IGZyb20gXCIuL1BsYW5lc0FwcFwiO1xyXG5pbXBvcnQgeyB0b1JhZCwgdG9EZWcsIGNsYW1wLCBpc01vYmlsZSB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgVmVjMiB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBQb2ludGVyRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vUG9pbnRlckV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG4vLyBUT0RPIG1ha2UgdGhlc2UgdmFyaWFibGVzXHJcbmV4cG9ydCBsZXQgdGV4dHVyZVNpemUgPSAyNTY7XHJcbmV4cG9ydCBsZXQgZGlzcGxheVNpemUgPSAxNTA7XHJcblxyXG5leHBvcnQgdHlwZSBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuXHJcbmNvbnN0IE5PTUlOQUxfRElTUExBWV9TSVpFID0gMTUwO1xyXG5jb25zdCBOT01JTkFMX0tOT0JfTEVOR1RIID0gMjU7XHJcbmNvbnN0IE5PTUlOQUxfS05PQl9SQURJVVMgPSAxMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGRDdHJsIHtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBwcml2YXRlIGhpZGRlbkNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHByaXZhdGUgYXBwOiBQbGFuZXNBcHA7XHJcbiAgIHByaXZhdGUgbW91c2VPZmZzZXQgPSBuZXcgVmVjMigpO1xyXG4gICBwcml2YXRlIGhpdCA9IDA7XHJcbiAgIHByaXZhdGUgaGFuZGxlcjogUG9pbnRlckV2ZW50SGFuZGxlcjtcclxuXHJcbiAgIHByaXZhdGUgYmFsbENlbnRlcjogVmVjMjtcclxuICAgcHJpdmF0ZSBwMTogVmVjMjtcclxuICAgcHJpdmF0ZSBwMjogVmVjMjtcclxuXHJcbiAgIHByaXZhdGUgb25UaHJlc2hvbGQxQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbjtcclxuICAgcHJpdmF0ZSBvblRocmVzaG9sZDJDaGFuZ2U6IFRocmVzaG9sZENoYW5nZUZ1bmN0aW9uO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICBhcHA6IFBsYW5lc0FwcCxcclxuICAgICAgb25UaHJlc2hvbGQxQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbixcclxuICAgICAgb25UaHJlc2hvbGQyQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvblxyXG4gICApIHtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBkaXNwbGF5U2l6ZSA9IDMwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgIHRoaXMub25UaHJlc2hvbGQxQ2hhbmdlID0gb25UaHJlc2hvbGQxQ2hhbmdlO1xyXG4gICAgICB0aGlzLm9uVGhyZXNob2xkMkNoYW5nZSA9IG9uVGhyZXNob2xkMkNoYW5nZTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuY2FudmFzLmlkID0gJ1RocmVzaG9sZENhbnZhcyc7XHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gZGlzcGxheVNpemU7XHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRpc3BsYXlTaXplO1xyXG5cclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLndpZHRoID0gdGV4dHVyZVNpemU7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLmhlaWdodCA9IHRleHR1cmVTaXplO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5DYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIodGhpcy5jYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Eb3duID0gKHBvczogVmVjMikgPT4gdGhpcy5vbkRvd24ocG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRHJhZyA9IChwb3M6IFZlYzIsIGRlbHRhOiBWZWMyKSA9PiB0aGlzLm9uRHJhZyhwb3MsIGRlbHRhKTtcclxuICAgfVxyXG4gICBwcml2YXRlIG9uRG93bihwb3M6IFZlYzIpIHtcclxuXHJcbiAgICAgIHRoaXMuaGl0VGVzdChwb3MpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGhpdFRlc3QocG9zOiBWZWMyKSB7XHJcbiAgICAgIGxldCBkMSA9IHRoaXMucDEuZGlzdGFuY2UocG9zKTtcclxuICAgICAgbGV0IGQyID0gdGhpcy5wMi5kaXN0YW5jZShwb3MpO1xyXG5cclxuICAgICAgY29uc3QgSElUX1JBRElVUyA9IE5PTUlOQUxfS05PQl9SQURJVVMgKiAoZGlzcGxheVNpemUgLyBOT01JTkFMX0RJU1BMQVlfU0laRSk7XHJcbiAgICAgIGlmIChkMSA8IEhJVF9SQURJVVMgJiYgZDEgPD0gZDIpIHtcclxuICAgICAgICAgdGhpcy5oaXQgPSAxO1xyXG4gICAgICAgICB0aGlzLm1vdXNlT2Zmc2V0ID0gbmV3IFZlYzIoW3RoaXMucDEueCAtIHBvcy54LCB0aGlzLnAxLnkgLSBwb3MueV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGQyIDwgSElUX1JBRElVUyAmJiBkMiA8PSBkMSkge1xyXG4gICAgICAgICB0aGlzLmhpdCA9IDI7XHJcbiAgICAgICAgIHRoaXMubW91c2VPZmZzZXQgPSBuZXcgVmVjMihbdGhpcy5wMi54IC0gcG9zLngsIHRoaXMucDIueSAtIHBvcy55XSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gMDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRHJhZyhwb3M6IFZlYzIsIGRlbHRhOiBWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLmhpdCA+IDApIHtcclxuICAgICAgICAgbGV0IGhpdFB0ID0gbmV3IFZlYzIoW3Bvcy54ICsgdGhpcy5tb3VzZU9mZnNldC54LCBwb3MueSArIHRoaXMubW91c2VPZmZzZXQueV0pO1xyXG4gICAgICAgICBoaXRQdC54ID0gTWF0aC5tYXgoaGl0UHQueCwgdGhpcy5iYWxsQ2VudGVyLngpO1xyXG4gICAgICAgICBoaXRQdC55ID0gTWF0aC5taW4oaGl0UHQueSwgdGhpcy5iYWxsQ2VudGVyLnkpO1xyXG4gICAgICAgICBsZXQgcmFkaXVzID0gdGhpcy5iYWxsQ2VudGVyLmRpc3RhbmNlKGhpdFB0KTtcclxuICAgICAgICAgbGV0IGFuZ2xlID0gY2xhbXAodG9EZWcoTWF0aC5hc2luKChoaXRQdC54IC0gdGhpcy5iYWxsQ2VudGVyLngpIC8gcmFkaXVzKSksIDAsIDkwKTtcclxuICAgICAgICAgaWYgKHRoaXMuaGl0ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRocmVzaG9sZDFDaGFuZ2UoYW5nbGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uVGhyZXNob2xkMkNoYW5nZShhbmdsZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgIGxldCBiYWxsSW1hZ2VEYXRhID0gdGhpcy5hcHAucmVuZGVyZXIuZ2V0QmFsbEltYWdlKCk7XHJcblxyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShiYWxsSW1hZ2VEYXRhLmltYWdlLCAwLCAwKTtcclxuXHJcbiAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSgwLCBkaXNwbGF5U2l6ZSAvIDIpO1xyXG4gICAgICBjdHguc2NhbGUoZGlzcGxheVNpemUgLyB0ZXh0dXJlU2l6ZSwgLWRpc3BsYXlTaXplIC8gdGV4dHVyZVNpemUpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaGlkZGVuQ2FudmFzLCAwLCAtdGV4dHVyZVNpemUgLyAyKTtcclxuXHJcbiAgICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICAgICB0aGlzLmJhbGxDZW50ZXIgPSBuZXcgVmVjMihbXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsQ2VudGVyLngsXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogKDEgLSBiYWxsSW1hZ2VEYXRhLmJhbGxDZW50ZXIueSlcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpbWVncmVlbic7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjaydcclxuXHJcbiAgICAgIGNvbnN0IEtOT0JfTEVOR1RIID0gTk9NSU5BTF9LTk9CX0xFTkdUSCAqIChkaXNwbGF5U2l6ZSAvIE5PTUlOQUxfRElTUExBWV9TSVpFKTtcclxuICAgICAgY29uc3QgS05PQl9SQURJVVMgPSBOT01JTkFMX0tOT0JfUkFESVVTICogKGRpc3BsYXlTaXplIC8gTk9NSU5BTF9ESVNQTEFZX1NJWkUpO1xyXG4gICAgICBsZXQgciA9IGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsUmFkaXVzO1xyXG4gICAgICBsZXQgczEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgcik7XHJcbiAgICAgIHRoaXMucDEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgciArIEtOT0JfTEVOR1RIKTtcclxuICAgICAgbGV0IHMyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIpO1xyXG4gICAgICB0aGlzLnAyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIgKyBLTk9CX0xFTkdUSCk7XHJcblxyXG4gICAgICBjdHgubGluZVdpZHRoID0gKDEgLyAxNTApICogZGlzcGxheVNpemU7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbyhzMS54LCBzMS55KTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLnAxLngsIHRoaXMucDEueSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh0aGlzLnAxLngsIHRoaXMucDEueSwgS05PQl9SQURJVVMsIDAsIHRvUmFkKDM2MCkpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oczIueCwgczIueSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5wMi54LCB0aGlzLnAyLnkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmModGhpcy5wMi54LCB0aGlzLnAyLnksIEtOT0JfUkFESVVTLCAwLCB0b1JhZCgzNjApKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFB0KGNlbnRlcjogVmVjMiwgdGhyZXNob2xkOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogVmVjMiB7XHJcblxyXG4gICAgICBsZXQgb3kgPSByYWRpdXMgKiBNYXRoLnNpbih0b1JhZCg5MCAtIHRocmVzaG9sZCkpO1xyXG4gICAgICBsZXQgb3ggPSByYWRpdXMgKiBNYXRoLmNvcyh0b1JhZCg5MCAtIHRocmVzaG9sZCkpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBWZWMyKFtjZW50ZXIueCArIG94LCBjZW50ZXIueSAtIG95XSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFZvbHVtZSB9IGZyb20gXCIuL1ZvbHVtZVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBCbG9iRmlsZSB9IGZyb20gXCIuL0Jsb2JGaWxlXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRWZWMzIH0gZnJvbSBcIi4vSW5kZXhlZFZlYzNcIjtcclxuaW1wb3J0IHsgSVZlYzMgfSBmcm9tIFwiLi9JVmVjM1wiO1xyXG5cclxuZXhwb3J0IGVudW0gTm9ybWFsVHlwZSB7XHJcbiAgIFNtb290aCxcclxuICAgRmxhdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpEYXRhIHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB2ZXJ0aWNlczogRmxvYXQzMkFycmF5O1xyXG4gICBub3JtYWxzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIGluZGljZXM6IEludDMyQXJyYXk7XHJcbiAgIGJveE1pbjogVmVjMztcclxuICAgYm94TWF4OiBWZWMzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBjb21wdXRlIG5vcm1hbHMgZm9yIHZlcnRpY2VzIHRoYXQgam9pbiBtdWx0aXBsZSBmYWNlc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlOb3JtVmVydGV4IHtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBWZWMzKSB7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbm9ybWFsIGJ5IGF2ZXJhZ2luZyBhbGwgdGhlIGluZGl2aWR1YWwgbm9ybWFscyBhc3NvY2lhdGVkIHdpdGggdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBub3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGxldCBuID0gbmV3IFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZnJvbSBhIGJ1bmNoIG9mIHRyaWFuZ2xlcy4gVGhlIGNsYXNzXHJcbiAqIGVmZmljaWVudGx5IG1hbmFnZXMgdGhlIHRyaWFuZ2xlcyBieSBzdG9yaW5nIHRoZW0gaW4gdm9sdW1lcyBhbmQgYnlcclxuICogcGFzc2luZyB0aGVtIHRvIFdlYkdMIHVzaW5nIFVuaWZvcm0gQnVmZmVyc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqIHtcclxuICAgcHVibGljIHZlcnRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwdWJsaWMgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgcHVibGljIGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgIHB1YmxpYyBib3hNaW4gPSBuZXcgVmVjMyhbTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgYm94TWF4ID0gbmV3IFZlYzMoWy1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUVdKTtcclxuICAgcHVibGljIHZvbHVtZXM6IFZvbHVtZVtdID0gW107XHJcbiAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVZlcnRpY2VzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVRyaWFuZ2xlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC54IC0gdGhpcy5ib3hNaW4ueDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnkgLSB0aGlzLmJveE1pbi55O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC56IC0gdGhpcy5ib3hNaW4uejtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjZW50ZXIoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi54ICsgdGhpcy5ib3hNYXgueCkgLyAyLFxyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueSArIHRoaXMuYm94TWF4LnkpIC8gMixcclxuICAgICAgICAgKHRoaXMuYm94TWluLnogKyB0aGlzLmJveE1heC56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobmFtZT86IHN0cmluZykge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0VHJpYW5nbGUoaW5kZXg6IG51bWJlcik6IEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgICAgIGxldCBpMSA9IHRoaXMuaW5kaWNlc1szICogaW5kZXggKyAwXTtcclxuICAgICAgbGV0IGkyID0gdGhpcy5pbmRpY2VzWzMgKiBpbmRleCArIDFdO1xyXG4gICAgICBsZXQgaTMgPSB0aGlzLmluZGljZXNbMyAqIGluZGV4ICsgMl07XHJcbiAgICAgIHJldHVybiBuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHRoaXMubm9ybWFscywgaTEsIGkyLCBpMyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTY2FsZXMgdGhlIG9iamVjdCB0byB0aGUgc3BlY2lmaWVkIHNpemUgYW5kIGNlbnRlcnMgaXQgYWJvdXQgKDAsMCwwKVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNpemUgVGhlIG1heCBzaXplIGZvciB0aGUgd2lkdGgsIGhlaWdodCwgYW5kIGRlcHRoXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXV0b0NlbnRlcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCB0cmFucyA9IG5ldyBWZWMzKFtcclxuICAgICAgICAgLSh0aGlzLmJveE1heC54ICsgdGhpcy5ib3hNaW4ueCkgLyAyLFxyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnkgKyB0aGlzLmJveE1pbi55KSAvIDIsXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueiArIHRoaXMuYm94TWluLnopIC8gMixcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgc2NhbGUgPSBzaXplIC8gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSBuZXcgSW5kZXhlZFZlYzModGhpcy52ZXJ0aWNlcywgaSk7XHJcblxyXG4gICAgICAgICB2LnggPSAodi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi55ID0gKHYueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYueiA9ICh2LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveE1pbi54ID0gKHRoaXMuYm94TWluLnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gKHRoaXMuYm94TWluLnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gKHRoaXMuYm94TWluLnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gKHRoaXMuYm94TWF4LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gKHRoaXMuYm94TWF4LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gKHRoaXMuYm94TWF4LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHYuYm94TWluLnggPSAodi5ib3hNaW4ueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnkgPSAodi5ib3hNaW4ueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnogPSAodi5ib3hNaW4ueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnggPSAodi5ib3hNYXgueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnkgPSAodi5ib3hNYXgueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnogPSAodi5ib3hNYXgueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdhdXRvQWRqdXN0KCknKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNoaWZ0IHRoZSBvYmplY3QgaW4gc3BhY2UuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBhbW91bnQgdG8gc2hpZnRcclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBWZWMzKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IG5ldyBJbmRleGVkVmVjMyh0aGlzLnZlcnRpY2VzLCBpKTtcclxuXHJcbiAgICAgICAgIHYueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdi55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2LnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogKz0gb2Zmc2V0Lno7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9sdW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdGhpcy52b2x1bWVzW2ldO1xyXG4gICAgICAgICB2b2wuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1pbi56ICs9IG9mZnNldC56O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1heC56ICs9IG9mZnNldC56O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCcmVha3MgdGhlIG9iamVjdCBpbnRvIGV2ZW5seSBzcGFjZWQgdm9sdW1lcy4gVGhlIG51bWJlciBvZiB2b2x1bWVzIGlzIGF1dG9tYXRpY2FsbHlcclxuICAgICogZGV0ZXJtaW5lZCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHRyaWFuZ2xlcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBicmVha0ludG9Wb2x1bWVzKCkge1xyXG4gICAgICBsZXQgbnVtU3RlcHM7XHJcbiAgICAgIGlmICh0aGlzLm51bVRyaWFuZ2xlcyA8IDQwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm51bVRyaWFuZ2xlcyA8IDE1MDApIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52b2x1bWVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3cobnVtU3RlcHMsIDMpOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52b2x1bWVzLnB1c2gobmV3IFZvbHVtZSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWCAtIHRoaXMuYm94TWluLngpIC8gKHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54KSk7XHJcbiAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblkgLSB0aGlzLmJveE1pbi55KSAvICh0aGlzLmJveE1heC55IC0gdGhpcy5ib3hNaW4ueSkpO1xyXG4gICAgICAgICBsZXQgeiA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5aIC0gdGhpcy5ib3hNaW4ueikgLyAodGhpcy5ib3hNYXgueiAtIHRoaXMuYm94TWluLnopKTtcclxuICAgICAgICAgeCA9IGNsYW1wKHgsIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHkgPSBjbGFtcCh5LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB6ID0gY2xhbXAoeiwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgbGV0IGluZGV4ID0geCArIHkgKiBudW1TdGVwcyArIHogKiBudW1TdGVwcyAqIG51bVN0ZXBzO1xyXG4gICAgICAgICB0aGlzLnZvbHVtZXNbaW5kZXhdLnB1c2godCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVCb3VuZHModjogSVZlYzMpIHtcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHYueCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB2LnkpO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdi56KTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHYueCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB2LnkpO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueiwgdi56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHB1c2hRdWFkKHYxOiBJVmVjMywgdjI6IElWZWMzLCB2MzogSVZlYzMsIHY0OiBJVmVjMykge1xyXG5cclxuICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjEsIHYyLCB2Myk7XHJcbiAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHYyLCB2NCwgdjMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcHVzaFRyaWFuZ2xlKHYxOiBJVmVjMywgdjI6IElWZWMzLCB2MzogSVZlYzMpIHtcclxuXHJcbiAgICAgIC8vIGFkZCBpbmRpY2VzXHJcbiAgICAgIGxldCBpMSA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgIGxldCBpMiA9IGkxICsgMTtcclxuICAgICAgbGV0IGkzID0gaTEgKyAyO1xyXG4gICAgICB0aGlzLmluZGljZXMucHVzaChpMSwgaTIsIGkzKTtcclxuXHJcbiAgICAgIC8vIGFkZCB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2godjEueCwgdjEueSwgdjEueiwgdjIueCwgdjIueSwgdjIueiwgdjMueCwgdjMueSwgdjMueik7XHJcbiAgICAgIHRoaXMudXBkYXRlQm91bmRzKHYxKTtcclxuICAgICAgdGhpcy51cGRhdGVCb3VuZHModjIpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUJvdW5kcyh2Myk7XHJcblxyXG4gICAgICAvLyBhZGQgbm9ybWFsc1xyXG4gICAgICBsZXQgdHJpID0gbmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCB0aGlzLm5vcm1hbHMsIGkxLCBpMiwgaTMpO1xyXG4gICAgICBsZXQgbm9ybWFsID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm5vcm1hbC52YWx1ZXMpO1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5ub3JtYWwudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWxzKHR5cGU6IE5vcm1hbFR5cGUpIHtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gTm9ybWFsVHlwZS5TbW9vdGgpIHtcclxuICAgICAgICAgbGV0IG11bHRpTm9ybVZlcnRpY2VzOiBNdWx0aU5vcm1WZXJ0ZXhbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlcy5wdXNoKG5ldyBNdWx0aU5vcm1WZXJ0ZXgoKSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0b3JlIHRoZSBub3JtYWxzIHdpdGggZWFjaCB2ZXJ0ZXggLSB3ZSdsbCBsYXRlciBhdmVyYWdlIHRoZXNlXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgICAgbGV0IG4gPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaTFdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pMl0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmkzXS5wdXNoKG4pO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgbm9ybWFscyBhcnJheVxyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0aU5vcm1WZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5tdWx0aU5vcm1WZXJ0aWNlc1tpXS5ub3JtYWwudmFsdWVzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyB0byBnbyB0aGlzIHdheSB3ZSBuZWVkIHRvIGhhdmUgYSB1bmlxdWUgdmVjdG9yIGFuZCBub3JtYWwgZm9yIGVhY2ggdHJpYW5nbGVcclxuICAgICAgICAgLy8gY29ybmVyLiBCbG93IGF3YXkgdGhlIG9sZCBzdHVmZiBhbmQgcmVidWlsZFxyXG4gICAgICAgICBsZXQgb2xkSW5kaWNlcyA9IHRoaXMuaW5kaWNlcztcclxuICAgICAgICAgbGV0IG9sZFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcztcclxuXHJcbiAgICAgICAgIC8vIHJlc2V0IGV2ZXJ5dGhpbmdcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBbXTtcclxuICAgICAgICAgdGhpcy5pbmRpY2VzID0gW107XHJcblxyXG4gICAgICAgICAvLyByZWJ1aWxkXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkSW5kaWNlcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHYxID0gbmV3IEluZGV4ZWRWZWMzKG9sZFZlcnRpY2VzLCBvbGRJbmRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICBsZXQgdjIgPSBuZXcgSW5kZXhlZFZlYzMob2xkVmVydGljZXMsIG9sZEluZGljZXNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIGxldCB2MyA9IG5ldyBJbmRleGVkVmVjMyhvbGRWZXJ0aWNlcywgb2xkSW5kaWNlc1szICogaSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjEsIHYyLCB2Myk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ2NvbXB1dGVOb3JtYWxzJyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgeChpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgeShpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDFdO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgeihpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDJdO1xyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgZmluZEJvdW5kcygpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRoaXMueChpKSk7XHJcbiAgICAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0aGlzLnkoaSkpO1xyXG4gICAgICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdGhpcy56KGkpKTtcclxuXHJcbiAgICAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0aGlzLngoaSkpO1xyXG4gICAgICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdGhpcy55KGkpKTtcclxuICAgICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRoaXMueihpKSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgaW4gdGhlIGZvciAuT0JKIGZpbGUgZm9ybWF0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9PYmpTdHJpbmcoZGlnaXRzID0gOCkge1xyXG5cclxuICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICBzdHIgKz0gJyMgVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJyMgVHJpYW5nbGVzOiAnICsgdGhpcy5udW1UcmlhbmdsZXMgKyAnXFxuJztcclxuICAgICAgc3RyICs9ICdcXG4nO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzO1xyXG4gICAgICAgICBzdHIgKz0gJ3YgJyArIHZbMyAqIGkgKyAwXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdlszICogaSArIDFdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2WzMgKiBpICsgMl0udG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBuID0gdGhpcy5ub3JtYWxzO1xyXG4gICAgICAgICBzdHIgKz0gJ3ZuICcgKyBuWzMgKiBpICsgMF0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG5bMyAqIGkgKyAxXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgblszICogaSArIDJdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHQgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG4gICAgICAgICBzdHIgKz0gJ2YgJyArXHJcbiAgICAgICAgICAgICh0LmkxICsgMSkgKyAnLy8nICsgKHQuaTEgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmkyICsgMSkgKyAnLy8nICsgKHQuaTIgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmkzICsgMSkgKyAnLy8nICsgKHQuaTMgKyAxKSArICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgaWYgKG5vcm1hbFR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcblxyXG4gICAgICAgICBsZXQgdmVydGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbiAgICAgICAgIGxldCBpbmRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgLy8gZmlyc3QgZ2VuZXJhdGUgYSB1bmlxdWUgc2V0IG9mIHZlcnRpY2VzXHJcbiAgICAgICAgIGxldCB1bmlxdWVWZXJ0aWNlczogSW5kZXhlZFZlYzNbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9sZFZlcnRleCA9IG5ldyBJbmRleGVkVmVjMyh0aGlzLnZlcnRpY2VzLCBpKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAwXS50b0ZpeGVkKDQpICsgJyAnICsgdGhpcy52ZXJ0aWNlc1szICogaSArIDFdLnRvRml4ZWQoNCkgKyAnICcgKyB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl0udG9GaXhlZCg0KTtcclxuICAgICAgICAgICAgbGV0IG9sZEluZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgIGxldCBuZXdJbmRleDtcclxuICAgICAgICAgICAgaWYgKHZlcnRleFRvSW5kZXhNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgLy8ganVzdCBtYXAgdGhlIG9sZCBpbmRleCB0byB0aGUgZXhpc3RpbmcgZW50cnlcclxuICAgICAgICAgICAgICAgbmV3SW5kZXggPSB2ZXJ0ZXhUb0luZGV4TWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZW50cnlcclxuICAgICAgICAgICAgICAgbmV3SW5kZXggPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICB2ZXJ0ZXhUb0luZGV4TWFwLnNldChrZXksIG5ld0luZGV4KTtcclxuICAgICAgICAgICAgICAgdW5pcXVlVmVydGljZXMucHVzaChvbGRWZXJ0ZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB0cmFuc2xhdGlvblxyXG4gICAgICAgICAgICBpbmRleFRvSW5kZXhNYXAuc2V0KG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHJlc2V0IGFsbCB0aGUgdmVydGljZXNcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1bmlxdWVWZXJ0aWNlc1tpXS54KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHVuaXF1ZVZlcnRpY2VzW2ldLnkpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godW5pcXVlVmVydGljZXNbaV0ueik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHJlbWFwIGFsbCBpbmRpY2VzXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IHRoaXMuaW5kaWNlc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2VzW2ldID0gaW5kZXhUb0luZGV4TWFwLmdldChvbGRJbmRleCArIDEpIC0gMTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGZvciBmbGF0IG5vcm1hbHMuIE5ldyB2ZXJ0aWNlcyBhbmQgbm9ybWFscyBhcmUgY3JlYXRlZCBpbiBcclxuICAgICAgICAgLy8gY29tcHV0ZU5vcm1hbHMoKSBiZWxvdyBpZiBuZWVkZWRcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhub3JtYWxUeXBlKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbWJpbmUodE9iajogVHJpYW5nbGVPYmopIHtcclxuXHJcbiAgICAgIC8vIHNhdmUgdGhlIHZhbHVlIGZvciB0aGUgZmlyc3QgaW5kZXggb2YgdGhlIGNvbWJpbmVkIG9iamVjdHNcclxuICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0aGlzLm51bVZlcnRpY2VzO1xyXG5cclxuICAgICAgLy8gYWRkIHRoZSBvdGhlciB2ZXJ0aWNlcyBhbmQgbm9ybWFscyB0byBvdXJzXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaCguLi50T2JqLnZlcnRpY2VzKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4udE9iai5ub3JtYWxzKTtcclxuXHJcbiAgICAgIC8vIGFkZCB0aGUgb3RoZXIgaW5kaWNlcywgYnV0IG9mZnNldCB0aGVtIHByb3Blcmx5XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai5pbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKHN0YXJ0SW5kZXggKyB0T2JqLmluZGljZXNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBtZXJnZSB0aGUgYm91bmRpbmcgYm94ZXNcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRPYmouYm94TWluLngpO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueSwgdE9iai5ib3hNaW4ueSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSBNYXRoLm1pbih0aGlzLmJveE1pbi56LCB0T2JqLmJveE1pbi56KTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHRPYmouYm94TWF4LngpO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdE9iai5ib3hNYXgueSk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSBNYXRoLm1heCh0aGlzLmJveE1heC56LCB0T2JqLmJveE1heC56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvRGF0YSgpOiBUcmlhbmdsZU9iakRhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhO1xyXG4gICAgICBkYXRhLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubm9ybWFscyk7XHJcbiAgICAgIGRhdGEuaW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gdGhpcy5ib3hNaW4uY2xvbmUoKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSB0aGlzLmJveE1heC5jbG9uZSgpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tRGF0YShkYXRhOiBUcmlhbmdsZU9iakRhdGEpOiBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iaigpO1xyXG4gICAgICB0T2JqLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgIHRPYmoudmVydGljZXMgPSBBcnJheS5mcm9tKGRhdGEudmVydGljZXMpO1xyXG4gICAgICB0T2JqLm5vcm1hbHMgPSBBcnJheS5mcm9tKGRhdGEubm9ybWFscyk7XHJcbiAgICAgIHRPYmouaW5kaWNlcyA9IEFycmF5LmZyb20oZGF0YS5pbmRpY2VzKTtcclxuICAgICAgdE9iai5ib3hNaW4gPSBuZXcgVmVjMyhkYXRhLmJveE1pbi52YWx1ZXMpO1xyXG4gICAgICB0T2JqLmJveE1heCA9IG5ldyBWZWMzKGRhdGEuYm94TWF4LnZhbHVlcyk7XHJcbiAgICAgIHJldHVybiB0T2JqO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9CbG9iKCk6IEJsb2Ige1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGEgZGVzY3JpcHRpb25cclxuICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgIEZpbGVUeXBlOiAnQmluYXJ5IE9CSicsXHJcbiAgICAgICAgIFZlcnNpb246ICcxLjAnLFxyXG4gICAgICAgICBOYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGdldCB0aGUgcmF3IGRhdGFcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLnRvRGF0YSgpO1xyXG5cclxuICAgICAgLy8gYnJlYWsgaXQgaW50byBwYXJ0c1xyXG4gICAgICBsZXQgcGFydHM6IEJsb2JQYXJ0W10gPSBbXTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLnZlcnRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLm5vcm1hbHMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEuaW5kaWNlcyk7XHJcbiAgICAgIHBhcnRzLnB1c2gobmV3IEZsb2F0MzJBcnJheShkYXRhLmJveE1pbi52YWx1ZXMpKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWF4LnZhbHVlcykpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBCbG9iXHJcbiAgICAgIHJldHVybiBCbG9iRmlsZS5jcmVhdGVCbG9iKGluZm8sIHBhcnRzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBmcm9tQmxvYihibG9iOiBCbG9iKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBUcmlhbmdsZU9iai5ibG9iVG9EYXRhKGJsb2IpO1xyXG4gICAgICByZXR1cm4gVHJpYW5nbGVPYmouZnJvbURhdGEoZGF0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgYmxvYlRvRGF0YShibG9iOiBCbG9iKTogUHJvbWlzZTxUcmlhbmdsZU9iakRhdGE+IHtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFRyaWFuZ2xlT2JqRGF0YSgpO1xyXG4gICAgICBsZXQgYkZpbGUgPSBhd2FpdCBCbG9iRmlsZS5leHRyYWN0KGJsb2IpO1xyXG5cclxuICAgICAgZGF0YS5uYW1lID0gYkZpbGUuaW5mby5OYW1lO1xyXG4gICAgICBkYXRhLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1swXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5ub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1sxXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5pbmRpY2VzID0gbmV3IEludDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbMl0uYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gbmV3IFZlYzMoQXJyYXkuZnJvbShuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzNdLmFycmF5QnVmZmVyKCkpKSk7XHJcbiAgICAgIGRhdGEuYm94TWF4ID0gbmV3IFZlYzMoQXJyYXkuZnJvbShuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzRdLmFycmF5QnVmZmVyKCkpKSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqQnVpbGRlciBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZykge1xyXG4gICAgICBzdXBlcihuYW1lKTtcclxuICAgfVxyXG5cclxuICAgLy8gVE9ETyBwYXNzIGluIGFyZ3MgZm9yIGNvbnN0cnVjdGlvblxyXG4gICBwdWJsaWMgYWRkQXJyb3coKSB7XHJcbiAgICAgIGNvbnN0IE5VTV9TVEVQUyA9IDMwO1xyXG4gICAgICBjb25zdCBUT1RBTF9MRU5HVEggPSAwLjQ7XHJcbiAgICAgIGNvbnN0IEFSUk9XX1JBRElVUyA9IDAuMTU7XHJcbiAgICAgIGNvbnN0IEFSUk9XX0xFTkdUSCA9IDEuNSAqIEFSUk9XX1JBRElVUztcclxuICAgICAgY29uc3QgU0hBRlRfUkFESVVTID0gMC41ICogQVJST1dfUkFESVVTO1xyXG4gICAgICBjb25zdCBUSVAgPSBuZXcgVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICBjb25zdCBUSVBfQkFTRSA9IG5ldyBWZWMzKFswLCBBUlJPV19MRU5HVEgsIDBdKTtcclxuXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSBhcnJvdyBoZWFkXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IHgxID0gQVJST1dfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkxID0gQVJST1dfTEVOR1RIO1xyXG4gICAgICAgICBsZXQgejEgPSBBUlJPV19SQURJVVMgKiBNYXRoLmNvcyhpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeDIgPSBBUlJPV19SQURJVVMgKiBNYXRoLnNpbigoaSArIDEpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeTIgPSBBUlJPV19MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6MiA9IEFSUk9XX1JBRElVUyAqIE1hdGguY29zKChpICsgMSkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcblxyXG4gICAgICAgICBsZXQgcDEgPSBuZXcgVmVjMyhbeDEsIHkxLCB6MV0pO1xyXG4gICAgICAgICBsZXQgcDIgPSBuZXcgVmVjMyhbeDIsIHkyLCB6Ml0pO1xyXG4gICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZShUSVAsIHAxLCBwMik7XHJcbiAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKFRJUF9CQVNFLCBwMiwgcDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgYXJyb3cgc2hhZnRcclxuICAgICAgY29uc3QgRU5EID0gbmV3IFZlYzMoWzAsIFRPVEFMX0xFTkdUSCwgMF0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4MSA9IFNIQUZUX1JBRElVUyAqIE1hdGguc2luKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB6MSA9IFNIQUZUX1JBRElVUyAqIE1hdGguY29zKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB4MiA9IFNIQUZUX1JBRElVUyAqIE1hdGguc2luKChpICsgMSkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB6MiA9IFNIQUZUX1JBRElVUyAqIE1hdGguY29zKChpICsgMSkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcblxyXG4gICAgICAgICBsZXQgcDEgPSBuZXcgVmVjMyhbeDEsIEFSUk9XX0xFTkdUSCwgejFdKTtcclxuICAgICAgICAgbGV0IHAyID0gbmV3IFZlYzMoW3gyLCBBUlJPV19MRU5HVEgsIHoyXSk7XHJcbiAgICAgICAgIGxldCBwMyA9IG5ldyBWZWMzKFt4MSwgVE9UQUxfTEVOR1RILCB6MV0pO1xyXG4gICAgICAgICBsZXQgcDQgPSBuZXcgVmVjMyhbeDIsIFRPVEFMX0xFTkdUSCwgejJdKTtcclxuICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUocDEsIHAyLCBwNCk7XHJcbiAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHAxLCBwNCwgcDMpO1xyXG4gICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZShFTkQsIHAzLCBwNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGFkZFNwaGVyZShudW1TdGVwczogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2VudGVyOiBWZWMzKSB7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgdmVydGljZXNcclxuICAgICAgbGV0IHZlcnRpY2VzOiBWZWMzW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwczsgaSsrKSB7XHJcbiAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gobmV3IFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSArIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoaSA9PT0gbnVtU3RlcHMgLSAxKSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gobmV3IFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSAtIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5jb3MoaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCByID0gcmFkaXVzICogTWF0aC5zaW4oaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBpICUgMiA/IDAgOiAoKDIgKiBNYXRoLlBJKSAvIG51bVN0ZXBzKSAqIDAuNTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgdmVydGljZXMucHVzaChuZXcgVmVjMyhbXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci54ICsgciAqIE1hdGguc2luKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueSArIHksXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci56ICsgciAqIE1hdGguY29zKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25uZWN0IHRoZSB2ZXJ0aWNlc1xyXG4gICAgICBsZXQgZmlyc3QgPSAwO1xyXG4gICAgICBsZXQgbGFzdCA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHMgLSAxOyBpKyspIHtcclxuICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1TdGVwczsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGZpcnN0O1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gaiA9PT0gKG51bVN0ZXBzIC0gMSkgPyAxIDogaTIgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2ZXJ0aWNlc1tpMV0sIHZlcnRpY2VzW2kyXSwgdmVydGljZXNbaTNdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpID09PSBudW1TdGVwcyAtIDIpIHtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBsYXN0IC0gbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGxhc3Q7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IHN0YXJ0SW5kZXggKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBqID09PSAobnVtU3RlcHMgLSAxKSA/IHN0YXJ0SW5kZXggOiBpMiArIDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHZlcnRpY2VzW2kxXSwgdmVydGljZXNbaTNdLCB2ZXJ0aWNlc1tpMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICBsZXQgc3RhcnRBID0gMSArIChpIC0gMSkgKiBudW1TdGVwcztcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0QiA9IDEgKyBpICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IHN0YXJ0QSArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEEgOiBpMSArIDE7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IHN0YXJ0QiArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpNCA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEIgOiBpMyArIDE7XHJcbiAgICAgICAgICAgICAgIGlmIChpICUgMikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2ZXJ0aWNlc1tpMV0sIHZlcnRpY2VzW2k0XSwgdmVydGljZXNbaTJdKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodmVydGljZXNbaTFdLCB2ZXJ0aWNlc1tpM10sIHZlcnRpY2VzW2k0XSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHZlcnRpY2VzW2kxXSwgdmVydGljZXNbaTNdLCB2ZXJ0aWNlc1tpMl0pO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2ZXJ0aWNlc1tpMl0sIHZlcnRpY2VzW2kzXSwgdmVydGljZXNbaTRdKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhZGRDdWJlKHNpemU6IG51bWJlciwgY2VudGVyOiBWZWMzKSB7XHJcblxyXG4gICAgICBsZXQgdjEgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjIgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjMgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjQgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjUgPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjYgPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjcgPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjggPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG5cclxuICAgICAgdGhpcy5wdXNoUXVhZCh2MSwgdjIsIHYzLCB2NCk7XHJcbiAgICAgIHRoaXMucHVzaFF1YWQodjUsIHY3LCB2NiwgdjgpO1xyXG5cclxuICAgICAgdGhpcy5wdXNoUXVhZCh2MSwgdjUsIHYyLCB2Nik7XHJcbiAgICAgIHRoaXMucHVzaFF1YWQodjMsIHY0LCB2NywgdjgpO1xyXG5cclxuICAgICAgdGhpcy5wdXNoUXVhZCh2MSwgdjMsIHY1LCB2Nyk7XHJcbiAgICAgIHRoaXMucHVzaFF1YWQodjIsIHY2LCB2NCwgdjgpO1xyXG4gICB9XHJcblxyXG4gICBhZGREaXNrKG51bVN0ZXBzOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjZW50ZXI6IFZlYzMpIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG51bVN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHgxID0gY2VudGVyLnggKyByYWRpdXMgKiBNYXRoLnNpbigoaSAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkxID0gY2VudGVyLnk7XHJcbiAgICAgICAgIGxldCB6MSA9IGNlbnRlci56ICsgcmFkaXVzICogTWF0aC5jb3MoKGkgLyBudW1TdGVwcykgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB4MiA9IGNlbnRlci54ICsgcmFkaXVzICogTWF0aC5zaW4oKChpICsgMSkgLyBudW1TdGVwcykgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB5MiA9IGNlbnRlci55O1xyXG4gICAgICAgICBsZXQgejIgPSBjZW50ZXIueiArIHJhZGl1cyAqIE1hdGguY29zKCgoaSArIDEpIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkpO1xyXG5cclxuICAgICAgICAgbGV0IHAxID0gbmV3IFZlYzMoW3gxLCB5MSwgejFdKTtcclxuICAgICAgICAgbGV0IHAyID0gbmV3IFZlYzMoW3gyLCB5MiwgejJdKTtcclxuICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUoY2VudGVyLCBwMSwgcDIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5pbXBvcnQgeyBTdGF0dXNGdW5jdGlvbiB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGxvYWRzIGEgLm9iaiBmaWxlIGFuZCBjcmVhdGVzIHRyaWFuZ2xlcyBmb3IgaXRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iakZpbGUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzcmM6IHN0cmluZywgdXBkYXRlU3RhdHVzPzogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHN1cGVyKG5hbWUpO1xyXG5cclxuICAgICAgLy8gcmVjb3JkIHRoZSBzdGF0dXMgZnVuY3Rpb24uIElmIG9uZSBpcyBub3Qgc3VwcGxpZWQsIGNyZWF0ZSBvbmUgdGhhdCBkb2VzIG5vdGhpbmdcclxuICAgICAgaWYgKCF1cGRhdGVTdGF0dXMpIHtcclxuICAgICAgICAgdXBkYXRlU3RhdHVzID0gKHN0YXR1cykgPT4geyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnBhcnNlKHNyYywgdXBkYXRlU3RhdHVzKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZUZhY2UobGluZTogc3RyaW5nKTogeyBpVjogbnVtYmVyW10sIGlOOiBudW1iZXJbXSB9IHtcclxuICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgaVY6IFtdIGFzIG51bWJlcltdLFxyXG4gICAgICAgICBpTjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgIGxldCBudW1WYWxzID0gdG9rZW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmFsczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2YWxzID0gdG9rZW5zW2kgKyAxXS5zcGxpdCgnLycpO1xyXG4gICAgICAgICByZXQuaVYucHVzaChwYXJzZUludCh2YWxzWzBdKSAtIDEpO1xyXG4gICAgICAgICBpZiAodmFscy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgcmV0LmlOLnB1c2gocGFyc2VJbnQodmFsc1syXSkgLSAxKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2Uoc3JjOiBzdHJpbmcsIHVwZGF0ZVN0YXR1czogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZycpO1xyXG4gICAgICBsZXQgdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICBsZXQgcDIgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IGxpbmVzID0gc3JjLnNwbGl0KCdcXG4nKTtcclxuICAgICAgcC5sb2coJ3NwbGl0Jyk7XHJcblxyXG4gICAgICBsZXQgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBub3JtYWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBsZXQgdkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBuSW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG1hdGNoID0gdHJ1ZTtcclxuICAgICAgbGV0IGNvbnRhaW5zTm9ybWFscyA9IHRydWU7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIC8vIHJlcG9ydCBwcm9ncmVzcyBldmVyeSA1MCBtc1xyXG4gICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHQgPiA1MCkge1xyXG4gICAgICAgICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6ICcgKyAoMTAwICogaSAvIGxpbmVzLmxlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgICAgICAgICAgdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgndiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1sxXSkpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbM10pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3ZuICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMV0pKTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1szXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5wYXJzZUZhY2UobGluZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgIGlmIChyZXQuaVYubGVuZ3RoICE9PSByZXQuaU4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zTm9ybWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vcm1hbHMgbm90IHNwZWNpZmllZCBpbiBmaWxlLiBGbGF0IG5vcm1hbHMgd2lsbCBiZSBjb21wdXRlZC4nKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5pVi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmV0LmlWW2ldICE9IHJldC5pTltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1ZlcnRpY2VzIGFuZCBub3JtYWxzIGRvblxcJ3QgbWF0Y2guIENvbnRlbnQgd2lsbCBiZSByZS1pbmRleGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmV0LmlWLmxlbmd0aCA9PT0gNCkge1xyXG5cclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdKTtcclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsyXSwgcmV0LmlWWzNdKTtcclxuICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pO1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzJdLCByZXQuaU5bM10pO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHZJbmRpY2VzLnB1c2gocmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSk7XHJcbiAgICAgICAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgICAgbkluZGljZXMucHVzaChyZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ3BhcnNlJyk7XHJcblxyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgICAgICB0aGlzLmluZGljZXMgPSB2SW5kaWNlcztcclxuXHJcbiAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgIHRoaXMubm9ybWFscyA9IFtdO1xyXG4gICAgICAgICB0aGlzLmluZGljZXMgPSBbXTtcclxuXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdkluZGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsc1szICogbkluZGljZXNbaV0gKyAwXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbHNbMyAqIG5JbmRpY2VzW2ldICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWxzWzMgKiBuSW5kaWNlc1tpXSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2VzLnB1c2goaSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcC5sb2coJ3JlaW5kZXgnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLkZsYXQpO1xyXG4gICAgICAgICBwLmxvZygnY29tcHV0ZSBub3JtYWxzJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmluZEJvdW5kcygpO1xyXG4gICAgICBwLmxvZygnZmluZEJvdW5kcycpO1xyXG4gICAgICBwMi5sb2coJ1RvdGFsJyk7XHJcblxyXG4gICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6IDEwMCUnKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ05vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyaWFuZ2xlczogJyArIHRoaXMubnVtVHJpYW5nbGVzKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yMyB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxDb29yZCB9IGZyb20gXCIuL1NwaGVyaWNhbENvb3JkXCI7XHJcblxyXG4vKipcclxuICogVHlwZXMgZm9yIHRoZSB1bmlmb3JtIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVW5pZm9ybXMge1xyXG4gICB1U2NhbGU6IG51bWJlcjtcclxuICAgdVhPZmZzZXQ6IG51bWJlcjtcclxuICAgdVlPZmZzZXQ6IG51bWJlcjtcclxuICAgdU1vZGU6IFJlbmRlck1vZGU7XHJcbiAgIHVNYXhDaHJvbWE6IG51bWJlcjtcclxuXHJcbiAgIHVIaWdobGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IGdsQ29sb3IzO1xyXG4gICB1TWlkTGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcbiAgIHVEYXJrTGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcblxyXG4gICB1U2hhZG93Q29sb3I6IGdsQ29sb3IzO1xyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcbiAgIHVEYXJrQWNjZW50Q29sb3I6IGdsQ29sb3IzO1xyXG5cclxuICAgdUxpZ2h0QWxwaGE6IG51bWJlcjtcclxuICAgdVNoYWRvd0FscGhhOiBudW1iZXI7XHJcblxyXG4gICB1TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdUxpZ2h0Q29sb3I6IGdsQ29sb3IzLFxyXG4gICB1TGlnaHRQb3M6IFZlYzMsXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdU9iakNvbG9yOiBnbENvbG9yMyxcclxuICAgdUJhbGxSYWRpdXM6IG51bWJlcixcclxuICAgdUV5ZTogVmVjMyxcclxuICAgdVRleHR1cmVTaXplOiBudW1iZXIsXHJcbiAgIHVSYW5kb206IG51bWJlcixcclxuICAgdVJheTAwOiBWZWMzLFxyXG4gICB1UmF5MDE6IFZlYzMsXHJcbiAgIHVSYXkxMDogVmVjMyxcclxuICAgdVJheTExOiBWZWMzLFxyXG4gICB1U2FtcGxlOiBudW1iZXIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWx1ZXMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBsZXQgVW5pZm9ybXM6IElVbmlmb3JtcyA9IHtcclxuICAgdVNjYWxlOiAxLjAsXHJcbiAgIHVYT2Zmc2V0OiAwLjAsXHJcbiAgIHVZT2Zmc2V0OiAwLjAsXHJcbiAgIHVNb2RlOiAwLFxyXG4gICB1TWF4Q2hyb21hOiAxLjAsXHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1TWlkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0xpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0FjY2VudENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1TGlnaHRBbHBoYTogMTAwMSxcclxuICAgdVNoYWRvd0FscGhhOiAxMDAwLFxyXG5cclxuICAgdUxpZ2h0SW50ZW5zaXR5OiAwLjcsXHJcbiAgIHVMaWdodENvbG9yOiBuZXcgZ2xDb2xvcjMoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgVmVjMyhuZXcgU3BoZXJpY2FsQ29vcmQoMiwgNjAsIDExMCkudG9YWVooKSksXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IDAuMyxcclxuICAgdU9iakNvbG9yOiBuZXcgZ2xDb2xvcjMoWzAuNSwgMC41LCAwLjhdKSxcclxuICAgdUJhbGxSYWRpdXM6IDAuNSxcclxuICAgdUV5ZTogbmV3IFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVSYW5kb206IE1hdGgucmFuZG9tKCksXHJcbiAgIHVSYXkwMDogbmV3IFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTAxOiBuZXcgVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MTA6IG5ldyBWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVNhbXBsZTogMC4wLFxyXG59XHJcbiIsImltcG9ydCB7IElWZWMzIH0gZnJvbSBcIi4vSVZlYzNcIjtcclxuXHJcbi8qKlxyXG4gKiBWZWN0b3IgY2xhc3MgZm9yIHVzZSB3aXRoIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmNsYXNzIFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzIgZXh0ZW5kcyBWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWMyIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMyKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgdG8gYW5vdGhlciBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciBwb2ludFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHBvaW50IGFuZCB0aGUgb3RoZXIgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXN0YW5jZShvdGhlcjogVmVjMik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54IC0gb3RoZXIueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSBvdGhlci55LCAyKSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWMzIGV4dGVuZHMgVmVjIGltcGxlbWVudHMgSVZlYzMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzModGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZGlnaXRzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gZGlzcGxheS4gVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gdG9GaXhlZCgpLlxyXG4gICAgKiBAcGFyYW0gZGl2aWRlciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGVhY2ggbnVtYmVyLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHM6IG51bWJlciwgZGl2aWRlciA9ICcsJyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLngudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMueS50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy56LnRvRml4ZWQoZGlnaXRzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBWZWMzIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGxldCByZXQgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXQudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnRyYWN0KHZlYzogVmVjMyk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAtIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC0gdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLSB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQWRkcyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBhZGQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYWRkKHZlYzogVmVjMyk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSArIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdICsgdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gKyB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IFZlYzMpOiBWZWMzIHtcclxuICAgICAgbGV0IEEgPSB0aGlzLnZhbHVlcztcclxuICAgICAgbGV0IEIgPSBvdGhlci52YWx1ZXM7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzQgZXh0ZW5kcyBWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIHgteS16IHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgY29tcHV0ZWQgYnkgZGl2aWRpbmcgdGhpcyB2ZWN0b3JzXHJcbiAgICAqIGVsZW1lbnRzIGJ5IHRoZSB3IHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4geC15LXogdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpdmlkZUJ5VygpOiBWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgdG9SYWQsIGlzTW9iaWxlIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gXCIuL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IE1hdDQgfSBmcm9tIFwiLi9NYXRcIjtcclxuaW1wb3J0IHsgVmVjNCwgVmVjMiB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBOb3JtYWxUeXBlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1vZGVsc0Ryb3BEb3duTWVudSB9IGZyb20gXCIuL01vZGVsc0Ryb3BEb3duTWVudVwiO1xyXG5pbXBvcnQgeyBNb2RlbExvYWRlciB9IGZyb20gXCIuL01vZGVsTG9hZGVyXCI7XHJcblxyXG5lbnVtIFBvaW50ZXJNb2RlIHtcclxuICAgVmlldyxcclxuICAgTGlnaHQsXHJcbn1cclxuXHJcbi8vY29uc3QgV0hJVEVfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1NSwgMjU1XSk7XHJcbmNvbnN0IFdISVRFX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTAsIDI0Ml0pO1xyXG5jb25zdCBCTEFDS19DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDBdKTtcclxuLy9jb25zdCBCTEFDS19DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzMwLCAyMCwgMF0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcCB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgb3ZlcmxheTogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIGhhbmRsZXI6IFBvaW50ZXJFdmVudEhhbmRsZXI7XHJcblxyXG4gICBwcml2YXRlIGRpcnR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHJcbiAgIHByaXZhdGUgbG9hZGVyID0gbmV3IE1vZGVsTG9hZGVyKCk7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocXVlcnk6IHN0cmluZykge1xyXG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wb25lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdWaWV3ZXJBcHAnO1xyXG5cclxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2aWV3Q29udGFpbmVyLmlkID0gJ1ZpZXdDb250YWluZXInO1xyXG4gICAgICB2aWV3Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodmlld0NvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY3JlYXRlVmlld0VsZW1lbnRzKHZpZXdDb250YWluZXIpO1xyXG5cclxuICAgICAgY29uc3QgY3RybHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY3RybHNDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGN0cmxzQ29udGFpbmVyLmlkID0gJ0N0cmxzQ29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGN0cmxzQ29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jcmVhdGVDdHJsc0VsZW1lbnRzKGN0cmxzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZE1vZGVsKHRoaXMucXVlcnkpO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVWaWV3RWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjYW52YXMuaWQgPSAnTWFpbkNhbnZhcyc7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5pZCA9ICdPdmVybGF5JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcblxyXG4gICAgICAvLyBkb24ndCB0cnkgdG8gbWFrZSB0aGUgY2FudmFzIHRyYW5zcGFyZW50IHRvIHRoZSB1bmRlcmx5aW5nIGh0bWwuIFRoaXNcclxuICAgICAgLy8gc2VlbXMgdG8gbGltaXQgdGhlIGFscGhhIHZhbHVlcyB3ZSBjYW4gdXNlIGluIG91ciBzY2VuZS5cclxuICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCB7IGFscGhhOiBmYWxzZSB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2wgPSBjb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMuZ2wpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLndoaXRlQ29sb3IgPSBXSElURV9DT0xPUjtcclxuICAgICAgdGhpcy5yZW5kZXJlci5ibGFja0NvbG9yID0gQkxBQ0tfQ09MT1I7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2hvd01pbmlWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgUG9pbnRlckV2ZW50SGFuZGxlcihjYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25EcmFnID0gKHBvczogVmVjMiwgZGVsdGE6IFZlYzIpID0+IHRoaXMub25EcmFnKHBvcywgZGVsdGEpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25DbGljayA9IChwb3M6IFZlYzIpID0+IHRoaXMub25DbGljayhwb3MpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25TY2FsZSA9IChzY2FsZTogbnVtYmVyLCBjaGFuZ2U6IG51bWJlcikgPT4gdGhpcy5vblNjYWxlKHNjYWxlLCBjaGFuZ2UpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Sb3RhdGUgPSAoYW5nbGU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4gdGhpcy5vblJvdGF0ZShhbmdsZSwgZGVsdGEpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25UcmFuc2xhdGUgPSAoZGVsdGE6IFZlYzIpID0+IHRoaXMub25UcmFuc2xhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgZG9jdW1lbnQub25rZXlwcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdpJzpcclxuICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudE9iai5uYW1lICsgJ1xcbicgK1xyXG4gICAgICAgICAgICAgICAgICAnTnVtIFRyaWFuZ2xlczogJyArIHRoaXMucmVuZGVyZXIudE9iai5udW1UcmlhbmdsZXMudG9Mb2NhbGVTdHJpbmcoKSArICdcXG4nICtcclxuICAgICAgICAgICAgICAgICAgJ051bSBWZXJ0aWNlczogJyArIHRoaXMucmVuZGVyZXIudE9iai5udW1WZXJ0aWNlcy50b0xvY2FsZVN0cmluZygpICsgJ1xcbidcclxuICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgICAgICAgIHRoaXMub3B0aW1pemUoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3AnOlxyXG4gICAgICAgICAgICAgICB0aGlzLm9wdGltaXplKE5vcm1hbFR5cGUuRmxhdCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNob3dTaGFkb3dNYXAgPSAhdGhpcy5yZW5kZXJlci5zaG93U2hhZG93TWFwO1xyXG4gICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd2JzpcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5vcnRob2dyYXBoaWMgPSAhdGhpcy5yZW5kZXJlci5vcnRob2dyYXBoaWM7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjcmVhdGVNb2RlbHNEcm9wRG93bk1lbnUocGFyZW50LCAoZmlsZSkgPT4gdGhpcy5sb2FkTW9kZWwoZmlsZSkpO1xyXG5cclxuICAgICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzaXplKCk7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgbGV0IG9iaiA9IHRoaXMucmVuZGVyZXIub2JqO1xyXG4gICAgICBsZXQgb2xkTnVtVmVydGljZXMgPSBvYmoudE9iai5udW1WZXJ0aWNlcztcclxuXHJcbiAgICAgIG9iai5vcHRpbWl6ZShub3JtYWxUeXBlKTtcclxuXHJcbiAgICAgIGxldCBuZXdOdW1WZXJ0aWNlcyA9IG9iai50T2JqLm51bVZlcnRpY2VzO1xyXG5cclxuICAgICAgbGV0IG1zZyA9ICdPcHRpbWl6ZWQgLk9CSiBjb250ZW50IGNvcGllZCB0byBjbGlwYm9hcmRcXG5cXG4nO1xyXG4gICAgICBtc2cgKz0gJ051bSBUcmlhbmdsZXM6ICcgKyBvYmoudE9iai5udW1UcmlhbmdsZXMgKyAnXFxuJztcclxuICAgICAgbXNnICs9ICdOdW0gVmVydGljZXM6ICcgKyBvbGROdW1WZXJ0aWNlcyArICcgdG8gJyArIG5ld051bVZlcnRpY2VzICsgJywgJyArICgxMDAgKiBuZXdOdW1WZXJ0aWNlcyAvIG9sZE51bVZlcnRpY2VzKS50b0ZpeGVkKCkgKyAnICVcXG4nO1xyXG5cclxuICAgICAgbGV0IHN0ciA9IG9iai50T2JqLnRvT2JqU3RyaW5nKDYpO1xyXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzdHIpLnRoZW4oKCkgPT4geyBhbGVydChtc2cpIH0pO1xyXG5cclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgZ2wuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5saW5lSGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JzsgLy8gdmVydGljYWxseSBjZW50ZXIgdGV4dFxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZUN0cmxzRWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgLypcclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnSGlnaGxpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ID0gdGhpcy5oaWdobGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgICAgKi9cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZykge1xyXG5cclxuICAgICAgLy8gaWYgbm90aGluZyB3YXMgc3BlY2lmaWVkLCBsb2FkIGFuIGludGVyZXN0aW5nIG1vZGVsXHJcbiAgICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICAgcXVlcnkgPSAnUG9zZV8wMi5ibG9iJztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxjID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKGxjLmVuZHNXaXRoKCcub2JqJykgfHwgbGMuZW5kc1dpdGgoJy5ibG9iJykpIHtcclxuXHJcbiAgICAgICAgIGxldCBzdGF0dXNGdW5jID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSBzdGF0dXM7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRNb2RlbEZpbGUocXVlcnksIHN0YXR1c0Z1bmMpXHJcbiAgICAgICAgICAgIC50aGVuKCh0T2JqKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICB0aGlzLmxvYWRlci5vcmllbnQodGhpcy5yZW5kZXJlci5vYmopO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zaG93Rmxvb3IgPSBxdWVyeS5zdGFydHNXaXRoKCdQb3NlJyk7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuXHJcbiAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgIGxldCB0b2tlbnMgPSBxdWVyeS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcHJvcEZpbGUgPSB0b2tlbnNbMF0gKyAnX1Byb3AuJyArIHRva2Vuc1sxXTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTW9kZWxGaWxlKHByb3BGaWxlKS50aGVuKCh0UHJvcE9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICB0T2JqLmNvbWJpbmUodFByb3BPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gdE9iajtcclxuICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0TW9kZWwodE9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZW50KHRPYmosIHF1ZXJ5KTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIFRPRE8gbXVsdGkgbGluZSBlcnJvciBtZXNzYWdlcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSAnVW5rbm93biBNb2RlbDonICsgcXVlcnk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB0b2dnbGVNb2RlKCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucG9pbnRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5WaWV3OlxyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYmFsbENvbG9yID0gdGhpcy5yZW5kZXJlci55ZWxsb3c7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYmFsbENvbG9yID0gV0hJVEVfQ09MT1IudG9HbENvbG9yKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRHJhZyhwb3M6IFZlYzIsIGRlbHRhOiBWZWMyKSB7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLlZpZXcpIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5vYmoucm90WCgtZGVsdGEueSAqIDAuMDEpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RZKC1kZWx0YS54ICogMC4wMSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgIGxldCBtYXRZID0gTWF0NC5mcm9tUm90WSh0b1JhZCgtZGVsdGEueCkpO1xyXG4gICAgICAgICBsZXQgbWF0WCA9IE1hdDQuZnJvbVJvdFgodG9SYWQoLWRlbHRhLnkpKTtcclxuICAgICAgICAgbGV0IHZlYyA9IG5ldyBWZWM0KFtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueixcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICBdKTtcclxuICAgICAgICAgdmVjID0gbWF0WC5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICB2ZWMgPSBtYXRZLm11bHRWKHZlYyk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnggPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi55ID0gdmVjLnZhbHVlc1sxXTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueiA9IHZlYy52YWx1ZXNbMl07XHJcblxyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlLlxyXG4gICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlLlxyXG4gICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgaGl0IG9uIG9uZSBvZiB0aGUgdmlld3Mgb2NjdXJzLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBvbkNsaWNrKHBvczogVmVjMik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgbGV0IGNhbnZhc1dpZHRoID0gdGhpcy5nbC5jYW52YXMud2lkdGg7XHJcbiAgICAgIGxldCBjYW52YXNIZWlnaHQgPSB0aGlzLmdsLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBjbGlwU3BhY2UgPSB0aGlzLnJlbmRlcmVyLmdldENsaXBTcGFjZSgpO1xyXG4gICAgICBsZXQgbWluaVdpZHRoID0gdGhpcy5yZW5kZXJlci5taW5pU2l6ZSAqICgyIC8gY2xpcFNwYWNlLndpZHRoKSAqIGNhbnZhc1dpZHRoO1xyXG4gICAgICBsZXQgbWluaUhlaWdodCA9IHRoaXMucmVuZGVyZXIubWluaVNpemUgKiAoMiAvIGNsaXBTcGFjZS5oZWlnaHQpICogY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKHBvcy54IDwgbWluaVdpZHRoICYmIHBvcy55IDwgbWluaUhlaWdodCkge1xyXG4gICAgICAgICB0aGlzLnRvZ2dsZU1vZGUoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocG9zLnggPiBjYW52YXNXaWR0aCAtIG1pbmlXaWR0aCAmJiBwb3MueSA8IG1pbmlXaWR0aCkge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc2V0VmlldygpO1xyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG5vdCBoYW5kbGVkXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblNjYWxlKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuem9vbShjaGFuZ2UpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblJvdGF0ZShhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIub2JqLnJvdFooZGVsdGEpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblRyYW5zbGF0ZShkZWx0YTogVmVjMikge1xyXG5cclxuICAgICAgLy8gVE9ETyBob3cgY2FuIHRoaXMgc2NhbGluZyBiZSBkZXRlY3RlZCBmcm9tIGphdmFzY3JpcHQ/XHJcbiAgICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgZmFjdG9yID0gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNsaXBTcGFjZSA9IHRoaXMucmVuZGVyZXIuZ2V0Q2xpcFNwYWNlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudHJhbnNsYXRlVmlldyhuZXcgVmVjMihbXHJcbiAgICAgICAgIGZhY3RvciAqIGNsaXBTcGFjZS53aWR0aCAqIGRlbHRhLnggLyB0aGlzLmdsLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgZmFjdG9yICogY2xpcFNwYWNlLmhlaWdodCAqIGRlbHRhLnkgLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcclxuICAgICAgXSkpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRpY2soKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAvLyBUT0RPIG9ubHkgcmVkcmF3IHRoZSB0aHJlc2hvbGQgY3RybCBpZiBhIHNsaWRlciBjaGFuZ2VkXHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBzYXZlKCkge1xyXG4gICAgICBsZXQgdE9iaiA9IHRoaXMucmVuZGVyZXIudE9iajtcclxuXHJcbiAgICAgIGxldCBuYW1lID0gdE9iai5uYW1lLnNwbGl0KCcuJylbMF0gKyAnLmJsb2InO1xyXG4gICAgICBzYXZlQXModE9iai50b0Jsb2IoKSwgbmFtZSk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5cclxuY29uc3QgTUFYID0gMTAwMDsgLy8gSU5GSU5JVFkgaW4gb3VyIHJlbmRlcmluZyB3b3JsZFxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbWFuYWdlcyBhIHNldCBvZiB0cmlhbmdsZXMgd2l0aGluIGEgZ2l2ZW4gc3BhY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWb2x1bWUge1xyXG4gICAvKipcclxuICAgICogVGhlIHRyaWFuZ2xlcyBlbmNsb3NlZCB3aXRoaW4gdGhlIGJvdW5kaW5nIGJveFxyXG4gICAgKi9cclxuICAgcHVibGljIHRyaWFuZ2xlczogSW5kZXhlZFRyaWFuZ2xlW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCb3VuZGluZyBib3ggbWluaW11bVxyXG4gICAgKi9cclxuICAgcHVibGljIGJveE1pbiA9IG5ldyBWZWMzKFtNQVgsIE1BWCwgTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1heGltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNYXggPSBuZXcgVmVjMyhbLU1BWCwgLU1BWCwgLU1BWF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFN0b3JlcyBhIHRyaWFuZ2xlIGFuZCB1cGRhdGVzIHRoZSBib3VuZGluZyBib3hcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB0cmlhbmdsZSBUaGUgdHJpYW5nbGUgdG8gc3RvcmVcclxuICAgICovXHJcbiAgIHB1YmxpYyBwdXNoKHRyaWFuZ2xlOiBJbmRleGVkVHJpYW5nbGUpIHtcclxuXHJcbiAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2godHJpYW5nbGUpO1xyXG4gICAgICB0aGlzLmJveE1pbi54ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueCwgdHJpYW5nbGUubWluWCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0cmlhbmdsZS5taW5ZKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9IE1hdGgubWluKHRoaXMuYm94TWluLnosIHRyaWFuZ2xlLm1pblopO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueCwgdHJpYW5nbGUubWF4WCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB0cmlhbmdsZS5tYXhZKTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRyaWFuZ2xlLm1heFopO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0NCB9IGZyb20gXCIuL01hdFwiO1xyXG5pbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgWEZvcm0ge1xyXG4gICBwdWJsaWMgYmFzZSA9IE1hdDQuaWRlbnRpdHk7XHJcbiAgIHB1YmxpYyBtYXQgPSBNYXQ0LmlkZW50aXR5O1xyXG5cclxuICAgcHVibGljIGdldCgpOiBNYXQ0IHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF0Lm11bHRNKHRoaXMuYmFzZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzbmFwKCkge1xyXG4gICAgICB0aGlzLmJhc2UgPSB0aGlzLmdldCgpO1xyXG4gICAgICB0aGlzLm1hdCA9IE1hdDQuaWRlbnRpdHk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgdGhpcy5tYXQgPSBNYXQ0LmlkZW50aXR5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKTogWEZvcm0ge1xyXG4gICAgICB0aGlzLm1hdC5yb3RYKGFuZ2xlKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFkoYW5nbGU6IG51bWJlcik6IFhGb3JtIHtcclxuICAgICAgdGhpcy5tYXQucm90WShhbmdsZSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpOiBYRm9ybSB7XHJcbiAgICAgIHRoaXMubWF0LnJvdFooYW5nbGUpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogVmVjMyk6IFhGb3JtIHtcclxuICAgICAgdGhpcy5tYXQudHJhbnNsYXRlKG9mZnNldCk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKTogWEZvcm0ge1xyXG4gICAgICB0aGlzLm1hdC5zY2FsZShzY2FsZSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbn0iLCJcclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIGEgV2ViR2wgQnVmZmVyIGFuZCBBdHRyaWJ1dGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbEF0dHJpYnV0ZUJ1ZmZlciB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwcml2YXRlIGJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgYXR0cmlidXRlTG9jYXRpb246IG51bWJlcjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgZ2xDdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIHByb2dyYW06IFdlYkdMUHJvZ3JhbSxcclxuICAgICAgYXR0cmlidXRlTmFtZTogc3RyaW5nXHJcbiAgICkge1xyXG4gICAgICB0aGlzLmdsID0gZ2xDdHg7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0cmlidXRlTmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuYnVmZmVyKTtcclxuICAgICAgdGhpcy5idWZmZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGxvYWQodmFsdWVzOiBudW1iZXJbXSB8IEZsb2F0MzJBcnJheSkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHZhbHVlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2YWx1ZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBiaW5kKCkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbixcclxuICAgICAgICAgMywgICAgICAgICAgICAgICAgLy8gc2l6ZVxyXG4gICAgICAgICBnbC5GTE9BVCwgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIG5vcm1hbGl6ZWRcclxuICAgICAgICAgMCwgICAgICAgICAgICAgICAgLy8gc3RyaWRlXHJcbiAgICAgICAgIDAgICAgICAgICAgICAgICAgIC8vIG9mZnNldFxyXG4gICAgICApO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBmb3IgaG9sZGluZyBhIGNsaXAgc3BhY2UuIERlZmF1bHQgaXMgdmFsdWVzIGZyb20gLTEgdG8gMS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENsaXBTcGFjZSB7XHJcbiAgIHB1YmxpYyBtaW46IFZlYzM7XHJcbiAgIHB1YmxpYyBtYXg6IFZlYzM7XHJcblxyXG4gICBwdWJsaWMgZ2V0IGxlZnQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWluLng7XHJcbiAgIH1cclxuICAgcHVibGljIGdldCByaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0b3AoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4Lnk7XHJcbiAgIH1cclxuICAgcHVibGljIGdldCBib3R0b20oKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbmVhcigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5taW4uejtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IGZhcigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXguejtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5tYXgueCAtIHRoaXMubWluLngpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5tYXgueSAtIHRoaXMubWluLnkpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLm1heC56IC0gdGhpcy5taW4ueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtaW46IFZlYzMsIG1heDogVmVjMykge1xyXG4gICAgICB0aGlzLm1pbiA9IG1pbjtcclxuICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGNsYXNzIHRoYXQgcmVxdWlyZXMgUkdCIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yMyBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGdsQ29sb3Igb2JqZWN0IHVzaW5nIHZhbHVlcyBpbiBhIENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBIGdlbmVyaWMgQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tQ29sb3IoY29sb3I6IENvbG9yKTogZ2xDb2xvcjMge1xyXG4gICAgICBsZXQgciA9IGNsYW1wKGNvbG9yLnIsIDAsIDEpO1xyXG4gICAgICBsZXQgZyA9IGNsYW1wKGNvbG9yLmcsIDAsIDEpO1xyXG4gICAgICBsZXQgYiA9IGNsYW1wKGNvbG9yLmIsIDAsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IzKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsaWdodGVyIG9mIHR3byBjb2xvcnNcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjMSBUaGUgZmlyc3QgY29sb3IuXHJcbiAgICAqIEBwYXJhbSBjMiBUaGUgc2Vjb25kIGNvbG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbGlnaHRlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGxpZ2h0ZXN0KGMxOiBnbENvbG9yMywgYzI6IGdsQ29sb3IzKTogZ2xDb2xvcjMge1xyXG4gICAgICAvLyBUT0RPOiB1c2UgbHVtaW5vc2l0eSBpbnN0ZWFkP1xyXG4gICAgICBpZiAoYzEuciArIGMxLmcgKyBjMS5iID4gYzIuciArIGMyLmcgKyBjMi5iKSB7XHJcbiAgICAgICAgIHJldHVybiBjMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGMyO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBkYXJrZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBkYXJrZXN0IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBkYXJrZXN0KGMxOiBnbENvbG9yMywgYzI6IGdsQ29sb3IzKTogZ2xDb2xvcjMge1xyXG4gICAgICAvLyBUT0RPOiB1c2UgbHVtaW5vc2l0eSBpbnN0ZWFkP1xyXG4gICAgICBpZiAoYzEuciArIGMxLmcgKyBjMS5iIDwgYzIuciArIGMyLmcgKyBjMi5iKSB7XHJcbiAgICAgICAgIHJldHVybiBjMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGMyO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhbiBodG1sIGNvbG9yIG9iamVjdCAoMC0yNTUgYmFzZWQpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0h0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5yKTtcclxuICAgICAgbGV0IGcgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuZyk7XHJcbiAgICAgIGxldCBiID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0JBIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yNCBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDQpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDQgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclszXSA8IDAgfHwgY29sb3JbM10gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2EnIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvcjMgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBhZGRzIHRlbXBlcmF0dXJlIHRvIGEgQ29sb3Igb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSBleHRlbmRzIGdsQ29sb3IzIHtcclxuICAgLyoqXHJcbiAgICAqIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBfdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB0ZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgdGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKiBAcGFyYW0gdGVtcGVyYXR1cmUgVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSwgdGVtcGVyYXR1cmU6IG51bWJlcikge1xyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgICAgIHRoaXMuX3RlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBLbm93biBjb2xvciB2YWx1ZXMuIEZvciBvdGhlciByZXF1ZXN0cyB0aGUgY2xhc3Mgd2lsbCByZXR1cm4gaW50ZXJwb2xhdGVkIHZhbHVlc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlW10gPSBbXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDE0NyAvIDI1NSwgNDEgLyAyNTVdLCAxOTAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTk3IC8gMjU1LCAxNDMgLyAyNTVdLCAyNjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjE0IC8gMjU1LCAxNzAgLyAyNTVdLCAyODUwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjQxIC8gMjU1LCAyMjQgLyAyNTVdLCAzMjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjUwIC8gMjU1LCAyNDQgLyAyNTVdLCA1MjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjU1IC8gMjU1LCAyNTEgLyAyNTVdLCA1NDAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjU1IC8gMjU1LCAyNTUgLyAyNTVdLCA2MDAwKSwgLy8gZGF5bGlnaHRcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzIwMSAvIDI1NSwgMjI2IC8gMjU1LCAyNTUgLyAyNTVdLCA3MDAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzY0IC8gMjU1LCAxNTYgLyAyNTUsIDI1NSAvIDI1NV0sIDIwMDAwKSxcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IGRheWxpZ2h0KCk6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGUoNjAwMCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtaW5pbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1pblRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heGltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWF4VGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIENvbG9yIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGNyZWF0ZSh0ZW1wZXJhdHVyZTogbnVtYmVyKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcblxyXG4gICAgICBpZiAodGVtcGVyYXR1cmUgPD0gdGhpcy5taW5UZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGVtcGVyYXR1cmUgPj0gdGhpcy5tYXhUZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xvcnMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjEgPSB0aGlzLmNvbG9yc1tpXTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMiA9IHRoaXMuY29sb3JzW2kgKyAxXTtcclxuICAgICAgICAgICAgaWYgKHRlbXBlcmF0dXJlID49IGNvbG9yMS50ZW1wZXJhdHVyZSAmJiB0ZW1wZXJhdHVyZSA8PSBjb2xvcjIudGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgbGV0IHJhdGlvID0gKHRlbXBlcmF0dXJlIC0gY29sb3IxLnRlbXBlcmF0dXJlKSAvIChjb2xvcjIudGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgbGV0IHIgPSBjb2xvcjEuciArIHJhdGlvICogKGNvbG9yMi5yIC0gY29sb3IxLnIpO1xyXG4gICAgICAgICAgICAgICBsZXQgZyA9IGNvbG9yMS5nICsgcmF0aW8gKiAoY29sb3IyLmcgLSBjb2xvcjEuZyk7XHJcbiAgICAgICAgICAgICAgIGxldCBiID0gY29sb3IxLmIgKyByYXRpbyAqIChjb2xvcjIuYiAtIGNvbG9yMS5iKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFtyLCBnLCBiXSwgdGVtcGVyYXR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHNob3VsZG4ndCBnZXQgaGVyZSwgYnV0IGlmIHdlIGRvLCByZXR1cm4gdGhlIGxhc3QgY29sb3JcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsIi8qKlxyXG4gKiBVdGlsaXR5IHdyYXBwZXIgZm9yIGNvbXBpbGluZyBXZWJHTCBzaGFkZXIgcHJvZ3JhbXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbXBpbGVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiB1c2Ugc3RhdGljIGZ1bmN0aW9ucyBvbmx5XHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcGlsZXMgYSBzaGFkZXIgcHJvZ3JhbVxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gZ2wgVGhlIFdlYkdMIGNvbnRleHQgXHJcbiAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB0eXBlIFRoZSBzaGFkZXIgdHlwZVxyXG4gICAgKiBAdGhyb3dzIGlmIHRoZSBjb21waWxhdGlvbiBmYWlsc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY29tcGlsZVNoYWRlcihcclxuICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIHNvdXJjZTogc3RyaW5nLFxyXG4gICAgICB0eXBlOiBudW1iZXJcclxuICAgKSB7XHJcbiAgICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coc291cmNlKTtcclxuICAgICAgICAgbGV0IGVyciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICB0aHJvdyAnY29tcGlsZSBlcnJvcjogJyArIGVycjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcGlsZXMgYW5kIGxpbmtzIHZlcnRleCBhbmQgZnJhZ21lbnQgc2hhZGVycyBpbnRvIGEgcHJvZ3JhbVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGdsIFRoZSBXZWJHTCBjb250ZXh0XHJcbiAgICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVmVydGV4IHNoYWRlciBzb3VyY2VcclxuICAgICogQHBhcmFtIGZyYWdtZW50U291cmNlIEZyYWdtZW50IHNoYWRlciBzb3VyY2VcclxuICAgICogQHJldHVybnMgdGhlIHByb2dyYW0gaWRcclxuICAgICogQHRocm93cyBpZiB0aGUgY29tcGlsYXRpb24gZmFpbHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZShcclxuICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIHZlcnRleFNvdXJjZTogc3RyaW5nLFxyXG4gICAgICBmcmFnbWVudFNvdXJjZTogc3RyaW5nXHJcbiAgICkge1xyXG4gICAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcihnbCwgdmVydGV4U291cmNlLCBnbC5WRVJURVhfU0hBREVSKSk7XHJcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBnbENvbXBpbGVyLmNvbXBpbGVTaGFkZXIoZ2wsIGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpKTtcclxuICAgICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgdGhyb3cgJ2xpbmsgZXJyb3I6ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xUZXh0dXJlLCBnbFRleHR1cmVTdHlsZSB9IGZyb20gXCIuL2dsVGV4dHVyZVwiO1xyXG5cclxuLyoqXHJcbiAqIExpZ2h0d2VpZ2h0IFdlYkdMIHdyYXBwZXIgZm9yIGEgZnJhbWVidWZmZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbEZyYW1lQnVmZmVyIHtcclxuXHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIGZyYW1lIGJ1ZmZlclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGdsQ3R4IFRoZSBXZWJHTCBjb250ZXh0XHJcbiAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICkge1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICBpZiAodGhpcy5mcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICBnbC5kZWxldGVGcmFtZWJ1ZmZlcih0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCgpOiBXZWJHTEZyYW1lYnVmZmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZnJhbWVCdWZmZXI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBiaW5kKCkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY3JlYXRlVGV4dHVyZShzdHlsZTogZ2xUZXh0dXJlU3R5bGUpOiBnbFRleHR1cmUge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVGV4dHVyZSh0aGlzLmdsLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgc3R5bGUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYXR0YWNoVGV4dHVyZShhdHRhY2htZW50OiBudW1iZXIsIHRleHR1cmU6IFdlYkdMVGV4dHVyZSB8IGdsVGV4dHVyZSkge1xyXG5cclxuICAgICAgaWYgKHRleHR1cmUgaW5zdGFuY2VvZiBnbFRleHR1cmUpIHtcclxuICAgICAgICAgdGV4dHVyZSA9IHRleHR1cmUuZ2V0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKFxyXG4gICAgICAgICBnbC5GUkFNRUJVRkZFUixcclxuICAgICAgICAgYXR0YWNobWVudCxcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgdGV4dHVyZSxcclxuICAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY2hlY2soKSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgbGV0IG1zZyA9IFwiVGhlIGNyZWF0ZWQgZnJhbWUgYnVmZmVyIGlzIGludmFsaWQ6IFwiICsgc3RhdHVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBhIFdlYkdsIEJ1ZmZlciBhbmQgQXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xJbmRleEJ1ZmZlciB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwcml2YXRlIGJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoZ2xDdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXIpO1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IHVuZGVmaW5lZDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZCh2YWx1ZXM6IG51bWJlcltdIHwgSW50MzJBcnJheSkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHZhbHVlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgSW50MzJBcnJheSh2YWx1ZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBiaW5kKCkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgZ2xBdHRyaWJ1dGVCdWZmZXIgfSBmcm9tIFwiLi9nbEF0dHJpYnV0ZUJ1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gXCIuL2dsVW5pZm9ybVwiO1xyXG5pbXBvcnQgeyBnbEluZGV4QnVmZmVyIH0gZnJvbSBcIi4vZ2xJbmRleEJ1ZmZlclwiO1xyXG5pbXBvcnQgeyBYRm9ybSB9IGZyb20gXCIuL1hGb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xPYmplY3Qge1xyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHVibGljIHJlYWRvbmx5IHRPYmo6IFRyaWFuZ2xlT2JqO1xyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IGdsQXR0cmlidXRlQnVmZmVyO1xyXG4gICBwcml2YXRlIG5vcm1hbEJ1ZmZlcjogZ2xBdHRyaWJ1dGVCdWZmZXI7XHJcbiAgIHByaXZhdGUgaW5kZXhCdWZmZXI6IGdsSW5kZXhCdWZmZXI7XHJcbiAgIHB1YmxpYyB4Rm9ybSA9IG5ldyBYRm9ybSgpO1xyXG5cclxuICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRPYmoubmFtZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgdE9iajogVHJpYW5nbGVPYmosXHJcbiAgICAgIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHZhciBleHQgPSBnbC5nZXRFeHRlbnNpb24oJ09FU19lbGVtZW50X2luZGV4X3VpbnQnKTtcclxuXHJcbiAgICAgIHRoaXMudE9iaiA9IHRPYmo7XHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYnVmZmVycyAoYW5kIGFzc29jaWF0ZWQgYXR0cmlidXRlcylcclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBuZXcgZ2xBdHRyaWJ1dGVCdWZmZXIoZ2wsIHByb2dyYW0sICdhVmVydGV4Jyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyID0gbmV3IGdsQXR0cmlidXRlQnVmZmVyKGdsLCBwcm9ncmFtLCAnYU5vcm1hbCcpO1xyXG4gICAgICB0aGlzLmluZGV4QnVmZmVyID0gbmV3IGdsSW5kZXhCdWZmZXIoZ2wpO1xyXG5cclxuICAgICAgdGhpcy51cGxvYWRUcmlhbmdsZXMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIuZGVsZXRlKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmRlbGV0ZSgpO1xyXG4gICAgICB0aGlzLmluZGV4QnVmZmVyLmRlbGV0ZSgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc25hcCgpIHtcclxuICAgICAgdGhpcy54Rm9ybS5zbmFwKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy54Rm9ybS5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMueEZvcm0ucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnhGb3JtLnJvdFooYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMueEZvcm0uc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBWZWMzKSB7XHJcbiAgICAgIHRoaXMueEZvcm0udHJhbnNsYXRlKG9mZnNldCk7XHJcbiAgIH1cclxuICAgcHVibGljIGNsZWFyVHJhbnNmb3JtcygpIHtcclxuICAgICAgdGhpcy54Rm9ybS5yZXNldCgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBsb2FkVHJpYW5nbGVzKCkge1xyXG5cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIudXBsb2FkKHRoaXMudE9iai52ZXJ0aWNlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLnVwbG9hZCh0aGlzLnRPYmoubm9ybWFscyk7XHJcbiAgICAgIHRoaXMuaW5kZXhCdWZmZXIudXBsb2FkKHRoaXMudE9iai5pbmRpY2VzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybShnbCwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgdW5pLnNldCgnbW9kZWwnLCB0aGlzLnhGb3JtLmdldCgpKTtcclxuXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyLmJpbmQoKTtcclxuICAgICAgdGhpcy5pbmRleEJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmJpbmQoKTtcclxuXHJcbiAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDMgKiB0aGlzLnRPYmoubnVtVHJpYW5nbGVzLCBnbC5VTlNJR05FRF9JTlQsIDApO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICB0aGlzLnRPYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcbiAgICAgIHRoaXMudXBsb2FkVHJpYW5nbGVzKCk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBlbnVtIGdsVGV4dHVyZVN0eWxlIHtcclxuICAgQ29sb3IsXHJcbiAgIERlcHRoLFxyXG4gICBGbG9hdFxyXG59XHJcblxyXG4vKipcclxuICogTGlnaHR3ZWlnaHQgV2ViR0wgd3JhcHBlciBmb3IgYSB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xUZXh0dXJlIHtcclxuXHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwdWJsaWMgdGV4dHVyZTogV2ViR0xUZXh0dXJlO1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIGZyYW1lIGJ1ZmZlciBmb3IgcmVuZGVyaW5nIGludG8gdGV4dHVyZSBvYmplY3RzLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGdsQ3R4IFRoZSBXZWJHTCBjb250ZXh0XHJcbiAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgIHN0eWxlOiBnbFRleHR1cmVTdHlsZVxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc3R5bGUpIHtcclxuICAgICAgICAgY2FzZSBnbFRleHR1cmVTdHlsZS5Db2xvcjpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBnbFRleHR1cmVTdHlsZS5EZXB0aDpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZXB0aCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIGdsVGV4dHVyZVN0eWxlLkZsb2F0OlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZsb2F0KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xyXG4gICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAvLyBTdGVwIDI6IENyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIHRleHR1cmUgYnVmZmVyIHRvIGhvbGQgdGhlIGNvbG9ycy5cclxuICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xyXG5cclxuICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgIGdsLlJHQkEsICAgICAgICAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICB3aWR0aCwgICAgICAgICAgICAgICAgICAvLyB3aWR0aFxyXG4gICAgICAgICBoZWlnaHQsICAgICAgICAgICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgIGdsLlJHQkEsICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICBnbC5VTlNJR05FRF9CWVRFLCAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlRGVwdGgod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGxldCBkZXB0aF90ZXh0dXJlX2V4dGVuc2lvbiA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVwdGhfdGV4dHVyZScpO1xyXG4gICAgICBpZiAoIWRlcHRoX3RleHR1cmVfZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgIGFsZXJ0KCdUaGlzIFdlYkdMIHByb2dyYW0gcmVxdWlyZXMgdGhlIHVzZSBvZiB0aGUgV0VCR0xfZGVwdGhfdGV4dHVyZSBleHRlbnNpb24uJyk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xyXG5cclxuICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgIGdsLkRFUFRIX0NPTVBPTkVOVCwgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICB3aWR0aCwgICAgICAgICAgICAgICAgICAvLyB3aWR0aFxyXG4gICAgICAgICBoZWlnaHQsICAgICAgICAgICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgIGdsLkRFUFRIX0NPTVBPTkVOVCwgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICBnbC5VTlNJR05FRF9JTlQsICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjcmVhdGVGbG9hdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgbGV0IGludGVybmFsRm9ybWF0OiBudW1iZXI7XHJcbiAgICAgIGxldCBmb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IHR5cGU6IG51bWJlcjtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0dXJlc1xyXG4gICAgICBpZiAoZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgbGV0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcpO1xyXG4gICAgICAgICBpZiAoZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIFRoYW5rcyBBcHBsZS4gQWx3YXlzIGdvdCB0byBkbyB0aGluZ3MgYSBsaXR0bGUgZGlmZmVyZW50bHlcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZXh0LkhBTEZfRkxPQVRfT0VTO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyBmbG9hdGluZyBwb2ludCB0ZXh0dXJlcz8gcmVhbGx5IGZhbGwgYmFjayB0byB1bnNpZ25lZCBieXRlc1xyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBsZXQgeW91IGRvIGFuICdlbHNlIGlmJyBoZXJlIGFuZCB3aGVuIFdlYkdMMiBpc1xyXG4gICAgICAvLyBub3Qgc3VwcG9ydGVkLCB3ZSBnZXQgYW4gZXhjZXB0aW9uLCBzbyB0aHVzIHRoZSB0cnktY2F0Y2hcclxuICAgICAgLy8gc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTM4MTEyMi90eXBlc2NyaXB0LXR5cGUtbmFycm93ZWQtdG8tbmV2ZXItd2l0aC1pbnN0YW5jZW9mLWluLWFuLWlmLWVsc2Utc3RhdGVtZW50XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgICAgZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTMyRjtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLkZMT0FUXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG5cclxuICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgIGludGVybmFsRm9ybWF0LCAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICB3aWR0aCwgICAgICAgICAgICAgICAgICAvLyB3aWR0aFxyXG4gICAgICAgICBoZWlnaHQsICAgICAgICAgICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgIGZvcm1hdCwgICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICB0eXBlLCAgICAgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICApO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCgpOiBXZWJHTFRleHR1cmUge1xyXG4gICAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYmluZCgpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgZ2xDb2xvcjMsIGdsQ29sb3I0IH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSBcIi4vTWF0XCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3Igc2V0dGluZyB1bmlmb3JtIHZhbHVlcyBpbiBhIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVW5pZm9ybSB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgIC8vIHRoZSBXZWJHTCBzaGFkZXIgcHJvZ3JhbVxyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIG9iamVjdCBmb3Igc2V0dGluZyB2YWx1ZXMgYW5kIGNhbGxzIGdsLnVzZVByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBnbEN0eCBUaGUgV2ViR0wgY29udGV4dFxyXG4gICAgKiBAcGFyYW0gcHJvZ3JhbSBUaGUgcHJvZ3JhbSBhc3NvY2lhdGVkIHdpdGggdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgIGdsQ3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgKSB7XHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdW5pZm9ybSB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5hbWUgVGhlIHZhcmlhYmxlIG5hbWVcclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZVxyXG4gICAgKiBAcGFyYW0gaW50IElmIHRydWUgYW5kIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhbiBpbnRlZ2VyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIHZhbHVlOiBCb29sZWFuIHwgbnVtYmVyIHwgVmVjMyB8IGdsQ29sb3IzIHwgZ2xDb2xvcjQgfCBNYXQ0LFxyXG4gICAgICBpbnQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICApIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICBsZXQgbG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSk7XHJcbiAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVmVjMykge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvYywgbmV3IEZsb2F0MzJBcnJheSh2YWx1ZS52YWx1ZXMpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsQ29sb3IzKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jLCBuZXcgRmxvYXQzMkFycmF5KFt2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xDb2xvcjQpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTRmdihsb2MsIG5ldyBGbG9hdDMyQXJyYXkoW3ZhbHVlLnIsIHZhbHVlLmcsIHZhbHVlLmIsIHZhbHVlLmFdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXQ0KSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheSh2YWx1ZS50cmFuc3Bvc2UoKS52YWx1ZXMpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgdHlwZW9mICh2YWx1ZSkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jLCB2YWx1ZSA/IDEuMCA6IDAuMCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJ1TW9kZVwiKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2MsIHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGludCkge1xyXG4gICAgICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xZihsb2MsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYW4gaW50ZWdlciB1bmlmb3JtIHZhbHVlIChzYW1lIGFzIHNldChuYW1lLCB2YWx1ZSwgdHJ1ZSkpXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbmFtZSBUaGUgdmFyaWFibGUgbmFtZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0aShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUsIHRydWUpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhbGwgdmFsdWVzIGZvciB2YXJpYWJsZXMgc3RvcmVkIGFzIG1lbWJlcnMgb2YgYW4gb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdW5pZm9ybXMgVGhlIG9iamVjdCB3aXRoIG1lbWJlciB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXRBbGwodW5pZm9ybXM6IGFueSkge1xyXG5cclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiB1bmlmb3Jtcykge1xyXG4gICAgICAgICB2YXIgdmFsdWUgPSB1bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBnbFVuaWZvcm1CbG9jayB7XHJcbiAgIHByaXZhdGUgZ2wyOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHJpdmF0ZSBibG9ja0xvY2F0aW9uOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgYmxvY2tCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoXHJcbiAgICAgIGdsQ3R4OiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW0sXHJcbiAgICAgIGJsb2NrTmFtZTogc3RyaW5nLFxyXG4gICAgICBibG9ja0JpbmRpbmc6IG51bWJlclxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wyID0gZ2xDdHg7XHJcbiAgICAgIGxldCBnbDIgPSB0aGlzLmdsMjtcclxuXHJcbiAgICAgIHRoaXMuYmxvY2tMb2NhdGlvbiA9IGdsMi5nZXRVbmlmb3JtQmxvY2tJbmRleChwcm9ncmFtLCBibG9ja05hbWUpO1xyXG4gICAgICBnbDIudW5pZm9ybUJsb2NrQmluZGluZyhwcm9ncmFtLCB0aGlzLmJsb2NrTG9jYXRpb24sIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICB0aGlzLmJsb2NrQnVmZmVyID0gZ2wyLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlckJhc2UoZ2wyLlVOSUZPUk1fQlVGRkVSLCBibG9ja0JpbmRpbmcsIHRoaXMuYmxvY2tCdWZmZXIpO1xyXG4gICB9XHJcblxyXG4gICB1cGxvYWQoZGF0YTogRmxvYXQzMkFycmF5IHwgSW50MzJBcnJheSkge1xyXG5cclxuICAgICAgbGV0IGdsMiA9IHRoaXMuZ2wyO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIHRoaXMuYmxvY2tCdWZmZXIpO1xyXG4gICAgICBnbDIuYnVmZmVyRGF0YShnbDIuVU5JRk9STV9CVUZGRVIsIGRhdGEsIGdsMi5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyKGdsMi5VTklGT1JNX0JVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvcjMgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcbmltcG9ydCB7IHRvQ3NzIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGNsYXNzIHRoYXQgcmVxdWlyZXMgUkdCIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDI1NVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGh0bWxDb2xvciBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgd2hpdGUgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1NSwgMjU1XSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmxhY2sgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcmVkID0gbmV3IGh0bWxDb2xvcihbMjU1LCAwLCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZ3JlZW4gPSBuZXcgaHRtbENvbG9yKFswLCAyNTUsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBibHVlID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMjU1XSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgb3JhbmdlID0gbmV3IGh0bWxDb2xvcihbMjU1LCAxNjUsIDBdKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMgVGhlIG51bWVyaWMgdmFsdWVcclxuICAgICogQHJldHVybnMgVGhlIGhleCBzdHJpbmdcclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBjb21wb25lbnRUb0hleChjOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICB2YXIgaGV4ID0gYy50b1N0cmluZygxNik7XHJcbiAgICAgIHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgaGV4IHN0cmluZyAoZS5nLiAjMGYwZjBmKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgaGV4IHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0hleCgpOiBzdHJpbmcge1xyXG4gICAgICBsZXQgckhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5yKTtcclxuICAgICAgbGV0IGdIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuZyk7XHJcbiAgICAgIGxldCBiSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmIpO1xyXG4gICAgICByZXR1cm4gXCIjXCIgKyBySGV4ICsgZ0hleCArIGJIZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGNzcyBzdHJpbmcgKGUuZy4gJ3JnYigxMjgsMjI4LDMyKScpLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNzcyBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Dc3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRvQ3NzKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSBjc3Mgc3R5bGUgc3RyaW5nIChlLmcuICdyZ2IoMjQsMzYsODMpJykgdG8gYSBjb2xvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNzcyBUaGUgY3NzIHN0cmluZy5cclxuICAgICogQHJldHVybnMgVGhlIGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tQ3NzKGNzczogc3RyaW5nKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHJlZ2V4ID0gL1xcZCsvZztcclxuICAgICAgbGV0IHZhbHMgPSBjc3MubWF0Y2gocmVnZXgpLnNsaWNlKDAsIDMpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbcGFyc2VJbnQodmFsc1swXSksIHBhcnNlSW50KHZhbHNbMV0pLCBwYXJzZUludCh2YWxzWzJdKV0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IGZyb20gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nXHJcbiAgICAqIEByZXR1cm5zIFRoZSBodG1sQ29sb3Igb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21IZXgoaGV4OiBzdHJpbmcpOiBodG1sQ29sb3Ige1xyXG4gICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgbGV0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgICAgbGV0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgICAgbGV0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLnIpO1xyXG4gICAgICBsZXQgZyA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5nKTtcclxuICAgICAgbGV0IGIgPSBodG1sQ29sb3IuY2xhbXAoY29sb3IuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSb3VuZHMgYSBudW1iZXIgdG8gYSB3aG9sZSBudW1iZXIgYW5kIGNsYW1wcyBpdCBiZXR3ZWVuIDAgYW5kIDI1NS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgcm91bmRlZCAmIGNsYW1wZWQgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNsYW1wKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgdmFsID0gTWF0aC5yb3VuZCh2YWwpO1xyXG4gICAgICBpZiAodmFsIDwgMCkge1xyXG4gICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh2YWwgPiAyNTUpIHtcclxuICAgICAgICAgcmV0dXJuIDI1NTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBjb2xvciB0byBhbiBlcXVpdmFsZW50IGdyYXktc2NhbGUgY29sb3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBncmF5LXNjYWxlIGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR3JheSgpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgcmdiID0gTWF0aC5yb3VuZCgodGhpcy5yICsgdGhpcy5nICsgdGhpcy5iKSAvIDMpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbcmdiLCByZ2IsIHJnYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBXZWJHTCBjb2xvciBvYmplY3QgKDAtMSBiYXNlZClcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HbENvbG9yKCk6IGdsQ29sb3IzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbENvbG9yMyhbdGhpcy5yIC8gMjU1LCB0aGlzLmcgLyAyNTUsIHRoaXMuYiAvIDI1NV0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgdG9Dc3MgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQW4gaHRtbCBjb2xvciB3aXRoIGEgdHJhbnNwYXJlbmN5IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHRtbENvbG9yV2l0aEFscGhhIGV4dGVuZHMgaHRtbENvbG9yIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHJhbnNwYXJlbnQgPSBuZXcgaHRtbENvbG9yV2l0aEFscGhhKFswLCAwLCAwLCAwXSk7XHJcblxyXG4gICAvKiogVGhlIHRyYW5zcGFyZW5jeSAoYWxwaGEpIHZhbHVlICovXHJcbiAgIHB1YmxpYyBhOiBudW1iZXIgPSAyNTU7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQkEgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIHN1cGVyKFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdXSk7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDQpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDQgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29sb3JbNF0gPCAwIHx8IGNvbG9yWzRdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2EnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hID0gY29sb3JbM107XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGNzcyBzdHJpbmcgKGUuZy4gJ3JnYigxMjgsMjI4LDMyLDI1NSknKS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjc3Mgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvQ3NzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0b0Nzcyh0aGlzLnIsIHRoaXMuZywgdGhpcy5iLCB0aGlzLmEpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBQYXRoVHJhY2VyQXBwIH0gZnJvbSBcIi4vUGF0aFRyYWNlckFwcFwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBQbGFuZXNBcHAgfSBmcm9tIFwiLi9QbGFuZXNBcHBcIjtcclxuaW1wb3J0IHsgVmlld2VyQXBwIH0gZnJvbSBcIi4vVmlld2VyQXBwXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgbGV0IHF1ZXJ5OiBzdHJpbmc7XHJcbiAgIGxldCB0eXBlID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcclxuICAgICAgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGxldCB0b2tlbnMgPSBxdWVyeS5zcGxpdCgnLScpO1xyXG4gICAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICB0eXBlID0gdG9rZW5zWzBdO1xyXG4gICAgICAgICBxdWVyeSA9IHRva2Vuc1sxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdHlwZSA9IHRva2Vuc1swXTtcclxuICAgICAgICAgcXVlcnkgPSAnJztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpZiAodHlwZSA9PT0gJ3BsYW5lcycpIHtcclxuICAgICAgbGV0IGFwcCA9IG5ldyBQbGFuZXNBcHAocXVlcnkpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC5jb21wb25lbnQoKSk7XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodHlwZSA9PT0gJ3ZpZXdlcicpIHtcclxuICAgICAgbGV0IGFwcCA9IG5ldyBWaWV3ZXJBcHAocXVlcnkpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC5jb21wb25lbnQoKSk7XHJcbiAgIH1cclxuICAgZWxzZSB7IC8vIHR5cGUgPT09ICdiYWxsJ1xyXG4gICAgICBsZXQgYXBwID0gbmV3IFBhdGhUcmFjZXJBcHAocXVlcnkpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC5jb21wb25lbnQoKSk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcclxcbnVuaWZvcm0gaW50IHVNb2RlO1xcclxcbnVuaWZvcm0gZmxvYXQgdU1heENocm9tYTtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdUhpZ2hsaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1TWlkTGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdURhcmtMaWdodENvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1U2hhZG93Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVSZWZsZWN0ZWRMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1RGFya0FjY2VudENvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvd0FscGhhO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0QWxwaGE7XFxyXFxuXFxyXFxuI2RlZmluZSBNT0RFX1NDSUVOQ0UgMFxcclxcbiNkZWZpbmUgTU9ERV9WQUxVRSAxXFxyXFxuI2RlZmluZSBNT0RFX0NIUk9NQSAyXFxyXFxuI2RlZmluZSBNT0RFX0JBTkRTIDNcXHJcXG5cXHJcXG52ZWM0IHdoaXRlID0gdmVjNCgxLjAsIDEuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgcmVkID0gdmVjNCgxLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgb3JhbmdlID0gdmVjNCgxLjAsIDAuNjUsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IHllbGxvdyA9IHZlYzQoMS4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGdyZWVuID0gdmVjNCgwLjAsIDEuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgY3lhbiA9IHZlYzQoMC4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IGJsdWUgPSB2ZWM0KDAuMCwgMC4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibGFjayA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4jZGVmaW5lIE5VTV9DT0xPUlMgNlxcclxcbnZlYzQgY29sb3JzW05VTV9DT0xPUlNdO1xcclxcblxcclxcbnZlYzQgdmFsdWUyQ29sb3IoZmxvYXQgdmFsdWUpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNwYW4gPSAxLjAgLyBmbG9hdChOVU1fQ09MT1JTIC0gMSk7XFxyXFxuICAgdmFsdWUgKj0gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIGlmICh2YWx1ZSA8IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1swXTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAxLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF0gKyB2YWx1ZSAqIChjb2xvcnNbMV0gLSBjb2xvcnNbMF0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDIuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1sxXSArICh2YWx1ZSAtIDEuMCkgKiAoY29sb3JzWzJdIC0gY29sb3JzWzFdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAzLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMl0gKyAodmFsdWUgLSAyLjApICogKGNvbG9yc1szXSAtIGNvbG9yc1syXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzNdICsgKHZhbHVlIC0gMy4wKSAqIChjb2xvcnNbNF0gLSBjb2xvcnNbM10pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDUuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s0XSArICh2YWx1ZSAtIDQuMCkgKiAoY29sb3JzWzVdIC0gY29sb3JzWzRdKTtcXHJcXG4gICB9XFxyXFxuICAgLypcXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDYuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s1XSArICh2YWx1ZSAtIDUuMCkgKiAoY29sb3JzWzZdIC0gY29sb3JzWzVdKTtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbTlVNX0NPTE9SUyAtIDFdO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgdG9HcmF5KHZlYzQgYylcXHJcXG57XFxyXFxuICAgLy8gbG90cyBvZiB3YXlzIHRvIGNvbnZlcnQgUkdCIHRvIGdyYXkgc2NhbGUuXFxyXFxuXFxyXFxuICAgLy8gc2ltcGxlIGF2ZXJhZ2luZyBtZXRob2RcXHJcXG4gICAvLyByZXR1cm4gKGMuciArIGMuZyArIGMuYikgLyAzLjA7XFxyXFxuXFxyXFxuICAgLy8gcmVsYXRpdmUgcGVyY2VwdHVhbCB2YWx1ZXNcXHJcXG4gICAvLyByZXR1cm4gMC4zICogYy5yICsgMC41OSAqIGMuZyArIDAuMTEgKiBjLmI7XFxyXFxuXFxyXFxuICAgLy8gbHVtaW5vc2l0eSBtZWFzdXJlXFxyXFxuICAgZmxvYXQgZ2FtbWEgPSAyLjI7XFxyXFxuICAgZmxvYXQgeSA9IDAuMjEyNiAqIHBvdyhjLnIsIGdhbW1hKSArIDAuNzE1MiAqIHBvdyhjLmcsIGdhbW1hKSArIC4wNzIyICogcG93KGMuYiwgZ2FtbWEpO1xcclxcbiAgIGZsb2F0IGwgPSAxMTYuMCAqIHBvdyh5LCAxLjAgLyAzLjApIC0gMTYuMDtcXHJcXG4gICByZXR1cm4gbCAvIDEwMC4wO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzVmFsdWUoKVxcclxcbntcXHJcXG4gICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuICAgZmxvYXQgcmdiID0gdG9HcmF5KGNvbG9yKTtcXHJcXG4gICByZXR1cm4gdmVjNChyZ2IsIHJnYiwgcmdiLCAxLjApO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzQ2hyb21hKClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgIC8vIHJlbmRlciB0aGUgc2NhbGUgYXMgYSBiYXIgb24gdGhlIGxlZnRcXHJcXG4gICBpZiAodGV4Q29vcmQueCA8IDAuMDMpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB2YWx1ZTJDb2xvcigodGV4Q29vcmQueSAtIDAuMSkgLyAwLjkpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIGlmIChjb2xvci5hID49IHVTaGFkb3dBbHBoYSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZmxvYXQgYXZnID0gKGNvbG9yLnIgKyBjb2xvci5nICsgY29sb3IuYikgLyAzLjA7XFxyXFxuICAgICAgICAgZmxvYXQgcmdiID0gKGFicyhhdmcgLSBjb2xvci5yKSArIGFicyhhdmcgLSBjb2xvci5nKSArIGFicyhhdmcgLSBjb2xvci5iKSkgLyAoNC4wIC8gMy4wKTtcXHJcXG4gICAgICAgICByZXR1cm4gdmFsdWUyQ29sb3IocmdiIC8gdU1heENocm9tYSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBkMih2ZWMzIGMxLCB2ZWMzIGMyKVxcclxcbntcXHJcXG4gICAvLyBzdW0gdGhlIHNxdWFyZXMgb2YgdGhlIGRpZmZlcmVuY2VzXFxyXFxuICAgcmV0dXJuIHBvdyhjMS5yIC0gYzIuciwgMi4wKSArIHBvdyhjMS5nIC0gYzIuZywgMi4wKSArIHBvdyhjMS5iIC0gYzIuYiwgMi4wKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjbG9zZXN0KHZlYzMgY29sb3IsIHZlYzMgbGlnaHQsIHZlYzMgbWlkLCB2ZWMzIGRhcmspXFxyXFxue1xcclxcbiAgIGZsb2F0IGRsaWdodCA9IGQyKGNvbG9yLCBsaWdodCk7XFxyXFxuICAgZmxvYXQgZG1pZCA9IGQyKGNvbG9yLCBtaWQpO1xcclxcbiAgIGZsb2F0IGRkYXJrID0gZDIoY29sb3IsIGRhcmspO1xcclxcblxcclxcbiAgIGZsb2F0IGRtaW4gPSBtaW4oZGxpZ2h0LCBtaW4oZG1pZCwgZGRhcmspKTtcXHJcXG4gICBpZiAoZG1pbiA9PSBkbGlnaHQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBsaWdodDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAoZG1pbiA9PSBkbWlkKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbWlkO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBkYXJrO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc0JhbmRzKClcXHJcXG57XFxyXFxuICAgZmxvYXQgc2l6ZSA9IDAuMDc7XFxyXFxuICAgZmxvYXQgbWFyZ2luID0gKDEuMCAtIDYuMCAqIHNpemUpIC8gMi4wO1xcclxcbiAgIGlmICh0ZXhDb29yZC54IDwgc2l6ZSAmJiB0ZXhDb29yZC55ID4gbWFyZ2luICYmIHRleENvb3JkLnkgPCAoMS4wIC0gbWFyZ2luKSlcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMS4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVEYXJrQWNjZW50Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMi4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVTaGFkb3dDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyAzLjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodURhcmtMaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDQuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1TWlkTGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA1LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodUxpZ2h0TGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSAvLyBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA3LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodUhpZ2hsaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuICAgICAgLy8gZGVmaW5lIHRoZSB0ZXJtaW5hdG9yIGFzIHRoZSBwb2ludCB3aGVyZSB0aGluZ3MgYXJlIDUwJSBpbiBzaGFkb3dcXHJcXG4gICAgICBmbG9hdCB0ZXJtaW5hdG9yID0gKCh1U2hhZG93QWxwaGEgKyB1TGlnaHRBbHBoYSkgLyAyLjApO1xcclxcbiAgICAgIGlmIChjb2xvci5hID4gMS4wICYmIGNvbG9yLmEgPD0gdGVybWluYXRvcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmVjMyBjID0gY2xvc2VzdChjb2xvci5yZ2IsIHVTaGFkb3dDb2xvciwgdVJlZmxlY3RlZExpZ2h0Q29sb3IsIHVEYXJrQWNjZW50Q29sb3IpO1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KGMsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKGNvbG9yLmEgPiB0ZXJtaW5hdG9yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICAvLyBvbmx5IHJlbmRlciB0aGUgaGlnaGxpZ2h0IHdoZXJlIGl0J3MgY29udHJpYnV0aW9uIGlzIHNpZ25pZmljYW50LCBpLmUuIGdyZWF0ZXJcXHJcXG4gICAgICAgICAvLyB0aGFuIHNvbWUgdGhyZXNob2xkXFxyXFxuICAgICAgICAgY29uc3QgZmxvYXQgU1BFQ1VMQVJfVEhSRVNIT0xEID0gMC4xO1xcclxcbiAgICAgICAgIGlmIChjb2xvci5hID4gKHVMaWdodEFscGhhICsgU1BFQ1VMQVJfVEhSRVNIT0xEKSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHZlYzQodUhpZ2hsaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHZlYzMgYyA9IGNsb3Nlc3QoY29sb3IucmdiLCB1TGlnaHRMaWdodENvbG9yLCB1TWlkTGlnaHRDb2xvciwgdURhcmtMaWdodENvbG9yKTtcXHJcXG4gICAgICAgICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gY29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc1NjaWVuY2UoKVxcclxcbntcXHJcXG4gICAvLyBqdXN0IHJldHVybiB0aGUgdGV4dHVyZVxcclxcbiAgIHJldHVybiB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgY29sb3JzWzBdID0gYmxhY2s7XFxyXFxuICAgY29sb3JzWzFdID0gYmx1ZTtcXHJcXG4gICBjb2xvcnNbMl0gPSBncmVlbjtcXHJcXG4gICBjb2xvcnNbM10gPSB5ZWxsb3c7XFxyXFxuICAgY29sb3JzWzRdID0gb3JhbmdlO1xcclxcbiAgIGNvbG9yc1s1XSA9IHJlZDtcXHJcXG5cXHJcXG4gICBpZiAodU1vZGUgPT0gTU9ERV9WQUxVRSlcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNWYWx1ZSgpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh1TW9kZSA9PSBNT0RFX0NIUk9NQSlcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNDaHJvbWEoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9CQU5EUylcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNCYW5kcygpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzU2NpZW5jZSgpO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2NhbGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1WE9mZnNldDtcXHJcXG51bmlmb3JtIGZsb2F0IHVZT2Zmc2V0O1xcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHRleENvb3JkID0gdmVydGV4Lnh5ICogMC41ICsgMC41O1xcclxcblxcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh1U2NhbGUgKiB2ZXJ0ZXgueCArIHVYT2Zmc2V0LCB1U2NhbGUgKiB2ZXJ0ZXgueSArIHVZT2Zmc2V0LCAwLjAsIDEuMCk7XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8VkVSU0lPTj5cXHJcXG5cXHJcXG4jZGVmaW5lIE5PVEhJTkdcXHJcXG5cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiNkZWZpbmUgRVMzMDBcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuXFxyXFxuI2lmZGVmIEVTMzAwXFxyXFxuaW4gdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbHNlXFxyXFxudmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVFeWU7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGV4dHVyZVNpemU7XFxyXFxudW5pZm9ybSBmbG9hdCB1UmFuZG9tO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRQb3M7XFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gZmxvYXQgdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIHZlYzMgdU9iakNvbG9yO1xcclxcbnVuaWZvcm0gZmxvYXQgdUJhbGxSYWRpdXM7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2FtcGxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0QWxwaGE7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2hhZG93QWxwaGE7XFxyXFxuXFxyXFxuI2lmZGVmIEVTMzAwXFxyXFxub3V0IHZlYzQgZnJhZ0NvbG9yO1xcclxcbiNlbHNlXFxyXFxuI2RlZmluZSBmcmFnQ29sb3IgZ2xfRnJhZ0NvbG9yXFxyXFxuI2RlZmluZSB0ZXh0dXJlIHRleHR1cmUyRFxcclxcbiNlbmRpZlxcclxcblxcclxcbmNvbnN0IGludCBNQVhfQk9VTkNFUyA9IDEwO1xcclxcbmNvbnN0IGZsb2F0IEVQU0lMT04gPSAwLjAwMDAwMTtcXHJcXG5jb25zdCBmbG9hdCBPRkZTRVQgPSAwLjAwMDE7XFxyXFxuY29uc3QgZmxvYXQgSU5GSU5JVFkgPSAxMDAwMC4wO1xcclxcbmNvbnN0IGZsb2F0IExJR0hUX1NJWkUgPSAwLjE7XFxyXFxuI2RlZmluZSBCQUxMX0NFTlRFUiB2ZWMzKDAsIHVCYWxsUmFkaXVzLCAwKVxcclxcbmNvbnN0IHZlYzMgRE9NRV9DRU5URVIgPSB2ZWMzKDAsIDAsIDApO1xcclxcbmNvbnN0IGZsb2F0IERPTUVfUkFESVVTID0gOC4wO1xcclxcbmNvbnN0IGZsb2F0IFZBTCA9IDAuODtcXHJcXG5jb25zdCB2ZWMzIERPTUVfQ09MT1IgPSB2ZWMzKFZBTCwgVkFMLCBWQUwpO1xcclxcbmNvbnN0IHZlYzMgRkxPT1JfQ09MT1IgPSB2ZWMzKFZBTCwgVkFMLCBWQUwpO1xcclxcbmNvbnN0IHZlYzMgQU1CSUVOVF9DT0xPUiA9IHZlYzMoMS4wLCAxLjAsIDEuMCk7XFxyXFxuY29uc3QgaW50IE5VTV9MSUdIVFMgPSA2O1xcclxcbmNvbnN0IGZsb2F0IEhFSUdIVCA9IDUuMDtcXHJcXG5jb25zdCBmbG9hdCBSQURJVVMgPSA0LjA7XFxyXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1O1xcclxcblxcclxcbnN0cnVjdCBMaWdodFxcclxcbntcXHJcXG4gICBmbG9hdCBpbnRlbnNpdHk7XFxyXFxuICAgZmxvYXQgc2l6ZTtcXHJcXG4gICB2ZWMzIHBvcztcXHJcXG4gICB2ZWMzIGNvbG9yO1xcclxcbn07XFxyXFxuXFxyXFxuIExpZ2h0IExpZ2h0c1tOVU1fTElHSFRTXTtcXHJcXG5cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbnN0cnVjdCBUcmlhbmdsZVxcclxcbntcXHJcXG4gICB2ZWMzIHAwO1xcclxcbiAgIHZlYzMgcDE7XFxyXFxuICAgdmVjMyBwMjtcXHJcXG59O1xcclxcblxcclxcbnN0cnVjdCBWb2x1bWVcXHJcXG57XFxyXFxuICAgaW50IHN0YXJ0SW5kZXg7XFxyXFxuICAgaW50IG51bVRyaWFuZ2xlcztcXHJcXG4gICB2ZWMzIGJveE1pbjtcXHJcXG4gICB2ZWMzIGJveE1heDtcXHJcXG59O1xcclxcblxcclxcbi8vIFRoZSBmb2xsb3dpbmcgbGluZSBpcyByZXBsYWNlZCB3aXRoIGNvZGUgZ2VuZXJhdGVkIGluIEphdmFTY3JpcHRcXHJcXG5jb25zdCBpbnQgTlVNX1ZFUlRJQ0VTID0gPE5VTV9WRVJUSUNFUz47XFxyXFxuY29uc3QgaW50IE5VTV9WT0xVTUVTID0gPE5VTV9WT0xVTUVTPjtcXHJcXG5jb25zdCBpbnQgTlVNX1RSSUFOR0xFUyA9IDxOVU1fVFJJQU5HTEVTPjtcXHJcXG5cXHJcXG5sYXlvdXQoc3RkMTQwKSB1bmlmb3JtIE15VmVydGljZXNCbG9jayB7IHZlYzMgdmVydGljZXNbTlVNX1ZFUlRJQ0VTXTsgfTtcXHJcXG5cXHJcXG5zdHJ1Y3QgSVRyaWFuZ2xlXFxyXFxue1xcclxcbiAgIGludCBpMDtcXHJcXG4gICBpbnQgaTE7XFxyXFxuICAgaW50IGkyO1xcclxcbn07XFxyXFxuXFxyXFxubGF5b3V0KHN0ZDE0MCkgdW5pZm9ybSBNeVRyaWFuZ2xlc0Jsb2NrIHsgSVRyaWFuZ2xlIHRyaWFuZ2xlc1tOVU1fVFJJQU5HTEVTXTsgfTtcXHJcXG5UcmlhbmdsZSBnZXRUcmlhbmdsZShpbnQgaW5kZXgpXFxyXFxue1xcclxcbiAgIElUcmlhbmdsZSB0cmkgPSB0cmlhbmdsZXNbaW5kZXhdO1xcclxcbiAgIHZlYzMgcDAgPSB2ZXJ0aWNlc1t0cmkuaTBdO1xcclxcbiAgIHZlYzMgcDEgPSB2ZXJ0aWNlc1t0cmkuaTFdO1xcclxcbiAgIHZlYzMgcDIgPSB2ZXJ0aWNlc1t0cmkuaTJdO1xcclxcbiAgIHJldHVybiBUcmlhbmdsZShwMCwgcDEsIHAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gVGhlIGNlbnRyYWwgb2JqZWN0IGJlaW5nIHJlbmRlcmVkXFxyXFxuc3RydWN0IE9iamVjdFxcclxcbntcXHJcXG4gICBWb2x1bWUgdm9sdW1lc1tOVU1fVk9MVU1FU107XFxyXFxuICAgdmVjMyBib3hNaW47XFxyXFxuICAgdmVjMyBib3hNYXg7XFxyXFxufTtcXHJcXG5cXHJcXG51bmlmb3JtIE9iamVjdCBvYmplY3Q7XFxyXFxuXFxyXFxuYm9vbCBpbnRlcnNlY3RCb3goY29uc3QgdmVjMyBvcmlnaW4sIGNvbnN0IHZlYzMgcmF5LCBjb25zdCB2ZWMzIGJveE1pbiwgY29uc3QgdmVjMyBib3hNYXgpXFxyXFxue1xcclxcbiAgIHZlYzMgcmF5SW52ID0gMS4wIC8gcmF5O1xcclxcbiAgIHZlYzMgdGJvdCA9IHJheUludiAqIChib3hNaW4gLSBvcmlnaW4pO1xcclxcbiAgIHZlYzMgdHRvcCA9IHJheUludiAqIChib3hNYXggLSBvcmlnaW4pO1xcclxcbiAgIHZlYzMgdG1pbiA9IG1pbih0dG9wLCB0Ym90KTtcXHJcXG4gICB2ZWMzIHRtYXggPSBtYXgodHRvcCwgdGJvdCk7XFxyXFxuICAgdmVjMiB0ID0gbWF4KHRtaW4ueHgsIHRtaW4ueXopO1xcclxcbiAgIGZsb2F0IHQwID0gbWF4KHQueCwgdC55KTtcXHJcXG4gICB0ID0gbWluKHRtYXgueHgsIHRtYXgueXopO1xcclxcbiAgIGZsb2F0IHQxID0gbWluKHQueCwgdC55KTtcXHJcXG4gICByZXR1cm4gdDEgPiBtYXgodDAsIDAuMCk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0Vm9sKGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgVm9sdW1lIHZvbClcXHJcXG57XFxyXFxuICAgaWYgKHZvbC5udW1UcmlhbmdsZXMgPT0gMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICByZXR1cm4gaW50ZXJzZWN0Qm94KG9yaWdpbiwgcmF5LCB2b2wuYm94TWluLCB2b2wuYm94TWF4KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9vbCBpbnRlcnNlY3RPYmooY29uc3QgdmVjMyBvcmlnaW4sIGNvbnN0IHZlYzMgcmF5LCBPYmplY3Qgb2JqZWN0KVxcclxcbntcXHJcXG4gICByZXR1cm4gaW50ZXJzZWN0Qm94KG9yaWdpbiwgcmF5LCBvYmplY3QuYm94TWluLCBvYmplY3QuYm94TWF4KTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTcO2bGxlcuKAk1RydW1ib3JlIHJheS10cmlhbmdsZSBpbnRlcnNlY3Rpb24gYWxnb3JpdGhtXFxyXFxuLy8gc291cmNlOiBodHRwOi8vYml0Lmx5LzJNeG5QTUdcXHJcXG5mbG9hdCBpbnRlcnNlY3RUcmlhbmdsZSh2ZWMzIG9yaWdpbiwgdmVjMyByYXksIFRyaWFuZ2xlIHRyaSlcXHJcXG57XFxyXFxuICAgdmVjMyBlZGdlMSwgZWRnZTIsIGgsIHMsIHE7XFxyXFxuICAgZmxvYXQgYSwgZiwgdSwgdjtcXHJcXG4gICBlZGdlMSA9IHRyaS5wMSAtIHRyaS5wMDtcXHJcXG4gICBlZGdlMiA9IHRyaS5wMiAtIHRyaS5wMDtcXHJcXG5cXHJcXG4gICBoID0gY3Jvc3MocmF5LCBlZGdlMik7XFxyXFxuICAgYSA9IGRvdChlZGdlMSwgaCk7XFxyXFxuICAgaWYgKGFicyhhKSA8IEVQU0lMT04pXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIGYgPSAxLjAgLyBhO1xcclxcbiAgIHMgPSBvcmlnaW4gLSB0cmkucDA7XFxyXFxuICAgdSA9IGYgKiBkb3QocywgaCk7XFxyXFxuICAgaWYgKHUgPCAwLjAgfHwgdSA+IDEuMClcXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgcSA9IGNyb3NzKHMsIGVkZ2UxKTtcXHJcXG4gICB2ID0gZiAqIGRvdChyYXksIHEpO1xcclxcbiAgIGlmICh2IDwgMC4wIHx8ICh1ICsgdikgPiAxLjApXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIC8vIEF0IHRoaXMgc3RhZ2Ugd2UgY2FuIGNvbXB1dGUgdCB0byBmaW5kIG91dCB3aGVyZSB0aGUgaW50ZXJzZWN0aW9uIHBvaW50IGlzIG9uIHRoZSBsaW5lLlxcclxcbiAgIGZsb2F0IHQgPSBmICogZG90KGVkZ2UyLCBxKTtcXHJcXG4gICBpZiAodCA8PSBFUFNJTE9OKSAvLyB0aGlzIG1lYW5zIHRoYXQgdGhlcmUgaXMgYSBsaW5lIGludGVyc2VjdGlvbiBidXQgbm90IGEgcmF5IGludGVyc2VjdGlvbi5cXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgcmV0dXJuIHQ7IC8vIHJheSBpbnRlcnNlY3Rpb25cXHJcXG59XFxyXFxuXFxyXFxudmVjMyBub3JtYWxGb3JUcmlhbmdsZSh2ZWMzIG9yaWdpbiwgdmVjMyBoaXQsIGludCB0SW5kZXgpXFxyXFxue1xcclxcbiAgIFRyaWFuZ2xlIHRyaSA9IGdldFRyaWFuZ2xlKHRJbmRleCk7XFxyXFxuICAgdmVjMyBub3JtYWwgPSBjcm9zcyh0cmkucDEgLSB0cmkucDAsIHRyaS5wMiAtIHRyaS5wMCk7XFxyXFxuICAgbm9ybWFsID0gbm9ybWFsaXplKG5vcm1hbCk7XFxyXFxuICAgaWYgKGRvdChub3JtYWwsIG9yaWdpbiAtIGhpdCkgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBub3JtYWw7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIC1ub3JtYWw7XFxyXFxuICAgfVxcclxcbn1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5mbG9hdCBpbnRlcnNlY3RTcGhlcmUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICB2ZWMzIHRvU3BoZXJlID0gb3JpZ2luIC0gc3BoZXJlQ2VudGVyO1xcclxcbiAgIGZsb2F0IGEgPSBkb3QocmF5LCByYXkpO1xcclxcbiAgIGZsb2F0IGIgPSAyLjAgKiBkb3QodG9TcGhlcmUsIHJheSk7XFxyXFxuICAgZmxvYXQgYyA9IGRvdCh0b1NwaGVyZSwgdG9TcGhlcmUpIC0gc3BoZXJlUmFkaXVzICogc3BoZXJlUmFkaXVzO1xcclxcbiAgIGZsb2F0IGRpc2NyaW1pbmFudCA9IGIgKiBiIC0gNC4wICogYSAqIGM7XFxyXFxuICAgaWYgKGRpc2NyaW1pbmFudCA+IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgdDEgPSAoLWIgLSBzcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIuMCAqIGEpO1xcclxcbiAgICAgIGZsb2F0IHQyID0gKC1iICsgc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBpZiAodDEgPiAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB0MTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodDIgPiAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB0MjtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIHJldHVybiBJTkZJTklUWTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBub3JtYWxGb3JTcGhlcmUodmVjMyBoaXQsIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpXFxyXFxue1xcclxcbiAgIHJldHVybiAoaGl0IC0gc3BoZXJlQ2VudGVyKSAvIHNwaGVyZVJhZGl1cztcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgcmFuZG9tKHZlYzMgc2NhbGUsIGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIHJldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXogKyBzZWVkLCBzY2FsZSkpICogNDM3NTguNTQ1MyArIHNlZWQpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGNvc2luZVdlaWdodGVkRGlyZWN0aW9uKGZsb2F0IHNlZWQsIHZlYzMgbm9ybWFsKVxcclxcbntcXHJcXG4gICBmbG9hdCB1ID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHYgPSByYW5kb20odmVjMyg2My43MjY0LCAxMC44NzMsIDYyMy42NzM2KSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgciA9IHNxcnQodSk7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgLy8gY29tcHV0ZSBiYXNpcyBmcm9tIG5vcm1hbFxcclxcbiAgIHZlYzMgc2RpciwgdGRpcjtcXHJcXG4gICBpZiAoYWJzKG5vcm1hbC54KSA8IC41KVxcclxcbiAgIHtcXHJcXG4gICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDEsIDAsIDApKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDAsIDEsIDApKTtcXHJcXG4gICB9XFxyXFxuICAgdGRpciA9IGNyb3NzKG5vcm1hbCwgc2Rpcik7XFxyXFxuICAgcmV0dXJuIHIgKiBjb3MoYW5nbGUpICogc2RpciArIHIgKiBzaW4oYW5nbGUpICogdGRpciArIHNxcnQoMS4gLSB1KSAqIG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21EaXJlY3Rpb24oZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHogPSAxLjAgLSAyLjAgKiB1O1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KDEuMCAtIHogKiB6KTtcXHJcXG4gICBmbG9hdCBhbmdsZSA9IDYuMjgzMTg1MzA3MTc5NTg2ICogdjtcXHJcXG4gICByZXR1cm4gdmVjMyhyICogY29zKGFuZ2xlKSwgciAqIHNpbihhbmdsZSksIHopO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIHVuaWZvcm1seVJhbmRvbVZlY3RvcihmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKHNlZWQpICogc3FydChyYW5kb20odmVjMygzNi43NTM5LCA1MC4zNjU4LCAzMDYuMjc1OSksIHNlZWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9vbCBpblNoYWRvdyh2ZWMzIG9yaWdpbiwgdmVjMyByYXksIGZsb2F0IHRMaWdodClcXHJcXG57XFxyXFxuICAgZmxvYXQgdEJhbGwgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuICAgaWYgKHRCYWxsIDwgdExpZ2h0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICBpZiAoaW50ZXJzZWN0T2JqKG9yaWdpbiwgcmF5LCBvYmplY3QpKVxcclxcbiAgIHtcXHJcXG4gICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9WT0xVTUVTOyBpKyspXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIFZvbHVtZSB2b2wgPSBvYmplY3Qudm9sdW1lc1tpXTtcXHJcXG4gICAgICAgICBpZiAoaW50ZXJzZWN0Vm9sKG9yaWdpbiwgcmF5LCB2b2wpKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBmb3IgKGludCBpID0gdm9sLnN0YXJ0SW5kZXg7IGkgPCAodm9sLnN0YXJ0SW5kZXggKyB2b2wubnVtVHJpYW5nbGVzKTsgaSsrKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZShpKTtcXHJcXG4gICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0VHJpYW5nbGUob3JpZ2luLCByYXksIHRyaSkgPCB0TGlnaHQpXFxyXFxuICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuICAgcmV0dXJuIGZhbHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBBbGwgY29tcG9uZW50cyBhcmUgaW4gdGhlIHJhbmdlIFsw4oCmMV0sIGluY2x1ZGluZyBodWUuXFxyXFxudmVjNCByZ2IyaHN2KHZlYzQgYylcXHJcXG57XFxyXFxuICAgdmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XFxyXFxuICAgdmVjNCBwID0gbWl4KHZlYzQoYy5iZywgSy53eiksIHZlYzQoYy5nYiwgSy54eSksIHN0ZXAoYy5iLCBjLmcpKTtcXHJcXG4gICB2ZWM0IHEgPSBtaXgodmVjNChwLnh5dywgYy5yKSwgdmVjNChjLnIsIHAueXp4KSwgc3RlcChwLngsIGMucikpO1xcclxcblxcclxcbiAgIGZsb2F0IGQgPSBxLnggLSBtaW4ocS53LCBxLnkpO1xcclxcbiAgIGZsb2F0IGUgPSAxLjBlLTEwO1xcclxcbiAgIHJldHVybiB2ZWM0KGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLCBkIC8gKHEueCArIGUpLCBxLngsIGMuYSk7XFxyXFxufVxcclxcblxcclxcbi8vIEFsbCBjb21wb25lbnRzIGFyZSBpbiB0aGUgcmFuZ2VbMOKApjFdLCBpbmNsdWRpbmcgaHVlLlxcclxcbnZlYzQgaHN2MnJnYih2ZWM0IGMpXFxyXFxue1xcclxcbiAgIHZlYzQgSyA9IHZlYzQoMS4wLCAyLjAgLyAzLjAsIDEuMCAvIDMuMCwgMy4wKTtcXHJcXG4gICB2ZWMzIHAgPSBhYnMoZnJhY3QoYy54eHggKyBLLnh5eikgKiA2LjAgLSBLLnd3dyk7XFxyXFxuICAgcmV0dXJuIHZlYzQoYy56ICogbWl4KEsueHh4LCBjbGFtcChwIC0gSy54eHgsIDAuMCwgMS4wKSwgYy55KSwgYy5hKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCBzaGlmdFRlbXBlcmF0dXJlKHZlYzQgcmdiLCBmbG9hdCBkZWcsIGZsb2F0IHRpbnRTdHJlbmd0aClcXHJcXG57XFxyXFxuICAgdmVjNCBoc3YgPSByZ2IyaHN2KHJnYik7XFxyXFxuICAgaHN2LnggKz0gZGVnIC8gMzYwLjA7XFxyXFxuICAgdmVjNCBmdWxsVGludFJnYiA9IGhzdjJyZ2IoaHN2KTtcXHJcXG5cXHJcXG4gICByZXR1cm4gbWl4KHJnYiwgZnVsbFRpbnRSZ2IsIHRpbnRTdHJlbmd0aCk7XFxyXFxufVxcclxcblxcclxcbi8vIFRPRE8gbW92ZSB0byBhIGNvbW1vbiBmaWxlXFxyXFxuZmxvYXQgdG9HcmF5KHZlYzQgYylcXHJcXG57XFxyXFxuICAgLy8gbG90cyBvZiB3YXlzIHRvIGNvbnZlcnQgUkdCIHRvIGdyYXkgc2NhbGUuXFxyXFxuXFxyXFxuICAgLy8gc2ltcGxlIGF2ZXJhZ2luZyBtZXRob2RcXHJcXG4gICAvLyByZXR1cm4gKGMuciArIGMuZyArIGMuYikgLyAzLjA7XFxyXFxuXFxyXFxuICAgLy8gcmVsYXRpdmUgcGVyY2VwdHVhbCB2YWx1ZXNcXHJcXG4gICAvLyByZXR1cm4gMC4zICogYy5yICsgMC41OSAqIGMuZyArIDAuMTEgKiBjLmI7XFxyXFxuXFxyXFxuICAgLy8gbHVtaW5vc2l0eSBtZWFzdXJlXFxyXFxuICAgZmxvYXQgZ2FtbWEgPSAyLjI7XFxyXFxuICAgZmxvYXQgeSA9IDAuMjEyNiAqIHBvdyhjLnIsIGdhbW1hKSArIDAuNzE1MiAqIHBvdyhjLmcsIGdhbW1hKSArIC4wNzIyICogcG93KGMuYiwgZ2FtbWEpO1xcclxcbiAgIGZsb2F0IGwgPSAxMTYuMCAqIHBvdyh5LCAxLjAgLyAzLjApIC0gMTYuMDtcXHJcXG4gICByZXR1cm4gbCAvIDEwMC4wO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IGNhbGN1bGF0ZUNvbG9yKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSlcXHJcXG57XFxyXFxuICAgdmVjMyBhY2N1bXVsYXRlZENvbG9yID0gdmVjMygwLjApO1xcclxcbiAgIHZlYzMgY29sb3JNYXNrID0gdmVjMygxLjApO1xcclxcbiAgIHZlYzMgZXllID0gb3JpZ2luO1xcclxcbiAgIGJvb2wgb2JqSGl0ID0gZmFsc2U7XFxyXFxuICAgYm9vbCBvYmpTaGFkb3cgPSBmYWxzZTtcXHJcXG4gICBmbG9hdCBzcGVjdWxhckNvbnRyaWJ1dGlvbiA9IDAuMDtcXHJcXG5cXHJcXG4gICAvLyBtYWluIHJheXRyYWNpbmcgbG9vcFxcclxcbiAgIGZvciAoaW50IGJvdW5jZSA9IDA7IGJvdW5jZSA8IE1BWF9CT1VOQ0VTOyBib3VuY2UrKylcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gY29tcHV0ZSB0aGUgaW50ZXJzZWN0aW9uIHdpdGggZXZlcnl0aGluZ1xcclxcbiAgICAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcbiAgICAgIHZlYzMgc3VyZmFjZUNvbG9yID0gdmVjMygwLjUsIDAuNSwgMC41KTtcXHJcXG5cXHJcXG4gICAgICBmbG9hdCB0T2JqID0gSU5GSU5JVFk7XFxyXFxuICAgICAgaW50IHRJbmRleDtcXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiAgICAgIGlmIChpbnRlcnNlY3RPYmoob3JpZ2luLCByYXksIG9iamVjdCkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX1ZPTFVNRVM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgVm9sdW1lIHZvbCA9IG9iamVjdC52b2x1bWVzW2ldO1xcclxcbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3RWb2wob3JpZ2luLCByYXksIHZvbCkpXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSB2b2wuc3RhcnRJbmRleDsgaSA8ICh2b2wuc3RhcnRJbmRleCArIHZvbC5udW1UcmlhbmdsZXMpOyBpKyspXFxyXFxuICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgIFRyaWFuZ2xlIHRyaSA9IGdldFRyaWFuZ2xlKGkpO1xcclxcbiAgICAgICAgICAgICAgICAgIGZsb2F0IHRUcmkgPSBtaW4odE9iaiwgaW50ZXJzZWN0VHJpYW5nbGUob3JpZ2luLCByYXksIHRyaSkpO1xcclxcbiAgICAgICAgICAgICAgICAgIGlmICh0VHJpIDwgdE9iailcXHJcXG4gICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgdE9iaiA9IHRUcmk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgdEluZGV4ID0gaTtcXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiNlbmRpZlxcclxcblxcclxcbiAgICAgIC8vIGlmIHRoZSBmaXJzdCByYXkgaGl0cyB0aGUgbGlnaHQsIHJldHVybiB0aGUgbGlnaHQgY29sb3IuIFRoaXNcXHJcXG4gICAgICAvLyBzaW11bGF0ZXMgZGlzcGxheWluZyB0aGUgbGlnaHRcXHJcXG4gICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBmbG9hdCB0TGlnaHQgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIExpZ2h0c1tpXS5wb3MsIExpZ2h0c1tpXS5zaXplKTtcXHJcXG4gICAgICAgICAgICBpZiAodExpZ2h0IDwgdEJhbGwgJiYgdExpZ2h0IDwgdE9iailcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgcmV0dXJuIHZlYzQoTGlnaHRzW2ldLmludGVuc2l0eSAqIExpZ2h0c1tpXS5jb2xvciwgMS4wKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGludGVyc2VjdGlvblxcclxcbiAgICAgIGZsb2F0IHREb21lID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBET01FX0NFTlRFUiwgRE9NRV9SQURJVVMpO1xcclxcbiAgICAgIGZsb2F0IHRGbG9vciA9IElORklOSVRZO1xcclxcblxcclxcbiAgICAgIC8vIGNoZWNrIGZvciBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgZ3JvdW5kXFxyXFxuICAgICAgaWYgKHJheS55IDwgMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICAvLyBkaXN0YW5jZSB0byBmbG9vciA9IG51bSB1bml0IHZlY3RvcnMgcmVxdWlyZWQgdG8gcmVhY2ggdGhlIGZsb29yXFxyXFxuICAgICAgICAgdEZsb29yID0gLW9yaWdpbi55IC8gcmF5Lnk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGZpbmQgdGhlIGNsb3Nlc3QgaGl0XFxyXFxuICAgICAgZmxvYXQgdCA9IG1pbihtaW4odERvbWUsIHRGbG9vciksIG1pbih0QmFsbCwgdE9iaikpO1xcclxcblxcclxcbiAgICAgIC8vIGluZm8gYWJvdXQgaGl0XFxyXFxuICAgICAgdmVjMyBoaXQgPSBvcmlnaW4gKyByYXkgKiB0O1xcclxcbiAgICAgIHZlYzMgbm9ybWFsO1xcclxcblxcclxcbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsXFxyXFxuICAgICAgaWYgKHQgPT0gdEZsb29yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBGTE9PUl9DT0xPUjtcXHJcXG4gICAgICAgICBub3JtYWwgPSB2ZWMzKDAuMCwgMS4wLCAwLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRCYWxsKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSB2ZWMzKHVPYmpDb2xvcik7XFxyXFxuICAgICAgICAgbm9ybWFsID0gbm9ybWFsRm9yU3BoZXJlKGhpdCwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG5cXHJcXG4gICAgICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9iakhpdCA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiAgICAgIGVsc2UgaWYgKHQgPT0gdE9iailcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdU9iakNvbG9yO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IG5vcm1hbEZvclRyaWFuZ2xlKG9yaWdpbiwgaGl0LCB0SW5kZXgpO1xcclxcblxcclxcbiAgICAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgb2JqSGl0ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiNlbmRpZlxcclxcbiAgICAgIGVsc2UgaWYgKHQgPT0gdERvbWUpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IERPTUVfQ09MT1I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gLW5vcm1hbEZvclNwaGVyZShoaXQsIERPTUVfQ0VOVEVSLCBET01FX1JBRElVUyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGNvbG9yTWFzayAqPSBzdXJmYWNlQ29sb3I7XFxyXFxuXFxyXFxuICAgICAgaWYgKGxlbmd0aChjb2xvck1hc2spIDwgMC4wMSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICAvLyBjb21wdXRlIGRpZmZ1c2UgbGlnaHRpbmcgY29udHJpYnV0aW9uXFxyXFxuICAgICAgICAgdmVjMyB0b0xpZ2h0ID0gTGlnaHRzW2ldLnBvcyAtIGhpdDtcXHJcXG4gICAgICAgICB2ZWMzIHRvTGlnaHROID0gbm9ybWFsaXplKHRvTGlnaHQpO1xcclxcblxcclxcbiAgICAgICAgIC8vIHRyYWNlIGEgc2hhZG93IHJheSB0byB0aGUgbGlnaHRcXHJcXG4gICAgICAgICBpZiAoaW5TaGFkb3coaGl0ICsgbm9ybWFsICogT0ZGU0VULCB0b0xpZ2h0TiwgbGVuZ3RoKHRvTGlnaHQpKSA9PSBmYWxzZSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgLy8gZGlmZnVzZSBjb21wb25lbnRcXHJcXG4gICAgICAgICAgICBmbG9hdCBkaWZmdXNlID0gbWF4KDAuMCwgZG90KHRvTGlnaHROLCBub3JtYWwpKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBzcGVjdWxhciBjb21wb25lbnRcXHJcXG4gICAgICAgICAgICB2ZWMzIHRvRXllID0gZXllIC0gaGl0O1xcclxcbiAgICAgICAgICAgIHZlYzMgbjJsID0gdG9MaWdodE47XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmUgPSBub3JtYWxpemUodG9FeWUpO1xcclxcbiAgICAgICAgICAgIHZlYzMgYmlzZWN0b3IgPSAobjJsICsgbjJlKSAvIGxlbmd0aChuMmwgKyBuMmUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyQ29lZmZpY2llbnQgPSAwLjU7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc2hpbmluZXNzID0gMTAwLjA7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc3BlY3VsYXIgPSBzcGVjdWxhckNvZWZmaWNpZW50ICogcG93KG1heCgwLjAsIGRvdChiaXNlY3Rvciwgbm9ybWFsKSksIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gYXBwbHkgbGlnaHQgZmFsbCBvZmYgYXMgZGlzdGFuY2Ugc3F1YXJlcy4gVXNlIGEgbWluIHZhbHVlIGZvciB0aGVcXHJcXG4gICAgICAgICAgICAvLyBsaWdodCBzaXplIG90aGVyd2lzZSBmYWxsb2ZmIGlzIHRvbyByYXBpZFxcclxcbiAgICAgICAgICAgIGZsb2F0IHJhZGl1cyA9IG1heCgwLjc1LCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IG1heCgxLjAsIChsZW5ndGgodG9MaWdodCkgLSByYWRpdXMpIC8gcmFkaXVzKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBsaWdodEludGVuc2l0eSA9IExpZ2h0c1tpXS5pbnRlbnNpdHkgLyAoZGlzdCAqIGRpc3QpO1xcclxcblxcclxcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gY29sb3JNYXNrICogTGlnaHRzW2ldLmNvbG9yICogbGlnaHRJbnRlbnNpdHkgKiBkaWZmdXNlO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIFRPRE8gZGVmaW5lIGEgY29sb3IgbWFzayBmb3Igc3BlY3VsYXIgcmVmbGVjdGlvblxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBtaXgoc3VyZmFjZUNvbG9yLCBMaWdodHNbaV0uY29sb3IsIDAuOCkgKlxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9XFxyXFxuICAgICAgICAgICAgICAgIChsZW5ndGgoc3VyZmFjZUNvbG9yKSAqIExpZ2h0c1tpXS5jb2xvcikgKiBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcblxcclxcbiAgICAgICAgICAgIGlmIChib3VuY2UgPT0gMCAmJiBpID09IDApXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHNwZWN1bGFyQ29udHJpYnV0aW9uICs9IGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlIGlmIChib3VuY2UgPT0gMCAmJiBpID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9ialNoYWRvdyA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBjYWxjdWxhdGUgbmV4dCBvcmlnaW5cXHJcXG4gICAgICByYXkgPSBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbih1UmFuZG9tICsgZmxvYXQoYm91bmNlKSwgbm9ybWFsKTtcXHJcXG5cXHJcXG4gICAgICBvcmlnaW4gPSBoaXQ7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIGZsb2F0IGFscGhhID0gMS4wO1xcclxcbiAgIGlmIChvYmpIaXQpXFxyXFxuICAge1xcclxcbiAgICAgIGlmIChvYmpTaGFkb3cpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGFscGhhID0gdVNoYWRvd0FscGhhO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGFscGhhID0gdUxpZ2h0QWxwaGE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGFscGhhICs9IGNsYW1wKHNwZWN1bGFyQ29udHJpYnV0aW9uLCAwLjAsIDEuMCk7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzQgc2NpZW5jZUNvbG9yID0gdmVjNChjbGFtcChhY2N1bXVsYXRlZENvbG9yLCAwLjAsIDEuMCksIGFscGhhKTtcXHJcXG4gICByZXR1cm4gc2NpZW5jZUNvbG9yO1xcclxcbiAgIC8qXFxyXFxuICAgaWYgKG9iakhpdClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHZlYzQodG9BcnRpc3Qoc2NpZW5jZUNvbG9yKS5yZ2IsIGFscGhhKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gc2NpZW5jZUNvbG9yO1xcclxcbiAgIH1cXHJcXG4gICAqL1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMzIHJhbmQgPSB1bmlmb3JtbHlSYW5kb21WZWN0b3IodVJhbmRvbSkgKiBMSUdIVF9TSVpFO1xcclxcblxcclxcbiAgIExpZ2h0c1swXS5pbnRlbnNpdHkgPSB1TGlnaHRJbnRlbnNpdHk7XFxyXFxuICAgTGlnaHRzWzBdLnNpemUgPSBMSUdIVF9TSVpFO1xcclxcbiAgIExpZ2h0c1swXS5wb3MgPSB1TGlnaHRQb3MgKyByYW5kO1xcclxcbiAgIExpZ2h0c1swXS5jb2xvciA9IHVMaWdodENvbG9yO1xcclxcblxcclxcbiAgIGZvciAoaW50IGkgPSAxOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB4ID0gUkFESVVTICogc2luKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQueDtcXHJcXG4gICAgICBmbG9hdCB5ID0gSEVJR0hUICsgcmFuZC55O1xcclxcbiAgICAgIGZsb2F0IHogPSBSQURJVVMgKiBjb3MoMi4wICogUEkgKiBmbG9hdChpKSAvIChmbG9hdChOVU1fTElHSFRTKSAtIDEuMCkpICsgcmFuZC56O1xcclxcblxcclxcbiAgICAgIExpZ2h0c1tpXS5pbnRlbnNpdHkgPSB1QW1iaWVudExpZ2h0SW50ZW5zaXR5O1xcclxcbiAgICAgIExpZ2h0c1tpXS5zaXplID0gMi4wICogTElHSFRfU0laRTtcXHJcXG4gICAgICBMaWdodHNbaV0ucG9zID0gdmVjMyh4LCB5LCB6KTtcXHJcXG4gICAgICBMaWdodHNbaV0uY29sb3IgPSBBTUJJRU5UX0NPTE9SO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBtZXJnZSB0aGUgbmV3IGNvbG9yIGludG8gdGhlIGV4aXN0aW5nIHRleHR1cmVcXHJcXG4gICB2ZWM0IHRleHR1cmVDb2xvciA9IHRleHR1cmUodVRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHVUZXh0dXJlU2l6ZSk7XFxyXFxuICAgdmVjNCBuZXdDb2xvciA9IGNhbGN1bGF0ZUNvbG9yKHVFeWUsIGluaXRpYWxSYXkpO1xcclxcbiAgIGZsb2F0IHdlaWdodCA9ICh1U2FtcGxlIC8gKDEuMCArIHVTYW1wbGUpKTtcXHJcXG4gICBmcmFnQ29sb3IgPSBtaXgobmV3Q29sb3IsIHRleHR1cmVDb2xvciwgd2VpZ2h0KTtcXHJcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcIjxWRVJTSU9OPlxcclxcblxcclxcbiNkZWZpbmUgTk9USElOR1xcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuI2RlZmluZSBFUzMwMFxcclxcbiNlbmRpZlxcclxcblxcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG51bmlmb3JtIHZlYzMgdUV5ZSwgdVJheTAwLCB1UmF5MDEsIHVSYXkxMCwgdVJheTExO1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbmluIHZlYzMgdmVydGV4O1xcclxcbm91dCB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2Vsc2VcXHJcXG5hdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2VuZGlmIFxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHZlYzIgcGVyY2VudCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG4gICBpbml0aWFsUmF5ID0gbWl4KG1peCh1UmF5MDAsIHVSYXkwMSwgcGVyY2VudC55KSwgbWl4KHVSYXkxMCwgdVJheTExLCBwZXJjZW50LnkpLCBwZXJjZW50LngpO1xcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgsIDEuMCk7XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJcXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHsgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7IH1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxyXFxuYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB0ZXhDb29yZCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4Lnh5LCAwLjAsIDEuMCk7XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuXFxyXFxuLy8gaW50ZXJwb2xhdGVkIHZhbHVlcyBmcm9tIHRoZSB2ZXJ0ZXggc2hhZGVyXFxyXFxudmFyeWluZyB2ZWMzIHZOb3JtYWw7XFxyXFxudmFyeWluZyB2ZWMzIHZWZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMzIHZTaGFkb3dWZXJ0ZXg7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQ0IG1vZGVsO1xcclxcbnVuaWZvcm0gbWF0NCB2aWV3O1xcclxcbnVuaWZvcm0gbWF0NCBsaWdodFZpZXc7XFxyXFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWU7XFxyXFxudW5pZm9ybSBpbnQgdU9ydGhvZ3JhcGhpYztcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHREaXJlY3Rpb247XFxyXFxuXFxyXFxuLy8gdGhlIGNvbG9ycyB3ZSB1c2UgdG8gcmVwcmVzZW50IG91ciBsaWdodGVzdCBhbmQgZGFya2VzdCB2YWx1ZXNcXHJcXG51bmlmb3JtIHZlYzMgdVdoaXRlQ29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVCbGFja0NvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gaW50IHVVc2VUaHJlc2hvbGRzO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRocmVzaG9sZDE7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGhyZXNob2xkMjtcXHJcXG51bmlmb3JtIGZsb2F0IHVIaWdobGlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRMaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVNaWRMaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVEYXJrTGlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2hhZG93O1xcclxcblxcclxcbnVuaWZvcm0gaW50IHVVc2VTaGFkb3dzO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTaGFkb3dUZXh0dXJlO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1Rmxvb3JDZW50ZXI7XFxyXFxudW5pZm9ybSBmbG9hdCB1Rmxvb3JSYWRpdXM7XFxyXFxudW5pZm9ybSBpbnQgdVNob3dGbG9vcjtcXHJcXG5cXHJcXG5ib29sIGluX3NoYWRvdyh2b2lkKVxcclxcbntcXHJcXG4gICBpZiAodVVzZVNoYWRvd3MgPT0gMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBUaGUgdmVydGV4IGxvY2F0aW9uIHJlbmRlcmVkIGZyb20gdGhlIGxpZ2h0IHNvdXJjZSBpcyBhbG1vc3QgaW4gTm9ybWFsaXplZFxcclxcbiAgIC8vIERldmljZSBDb29yZGluYXRlcyAoTkRDKSwgYnV0IHRoZSBwZXJzcGVjdGl2ZSBkaXZpc2lvbiBoYXMgbm90IGJlZW5cXHJcXG4gICAvLyBwZXJmb3JtZWQgeWV0LiBQZXJmb3JtIHRoZSBwZXJzcGVjdGl2ZSBkaXZpZGUuIFRoZSAoeCx5LHopIHZlcnRleCBsb2NhdGlvblxcclxcbiAgIC8vIGNvbXBvbmVudHMgYXJlIG5vdyBlYWNoIGluIHRoZSByYW5nZSBbLTEuMCwrMS4wXS5cXHJcXG4gICAvLyB2ZWMzIHZlcnRleF9yZWxhdGl2ZV90b19saWdodCA9IHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnh5eiAvIHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnc7XFxyXFxuICAgdmVjMyB2ZXJ0ZXggPSB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbiAgIC8vIENvbnZlcnQgdGhlIHRoZSB2YWx1ZXMgZnJvbSBOb3JtYWxpemVkIERldmljZSBDb29yZGluYXRlcyAocmFuZ2UgWy0xLjAsKzEuMF0pXFxyXFxuICAgLy8gdG8gdGhlIHJhbmdlIFswLjAsMS4wXS4gVGhpcyBtYXBwaW5nIGlzIGRvbmUgYnkgc2NhbGluZ1xcclxcbiAgIC8vIHRoZSB2YWx1ZXMgYnkgMC41LCB3aGljaCBnaXZlcyB2YWx1ZXMgaW4gdGhlIHJhbmdlIFstMC41LCswLjVdIGFuZCB0aGVuXFxyXFxuICAgLy8gc2hpZnRpbmcgdGhlIHZhbHVlcyBieSArMC41LlxcclxcbiAgIHZlcnRleCA9IHZlcnRleCAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICAvLyBHZXQgdGhlIHogdmFsdWUgb2YgdGhpcyBmcmFnbWVudCBpbiByZWxhdGlvbnNoaXAgdG8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAvLyBUaGlzIHZhbHVlIHdhcyBzdG9yZWQgaW4gdGhlIHNoYWRvdyBtYXAgKGRlcHRoIGJ1ZmZlciBvZiB0aGUgZnJhbWUgYnVmZmVyKVxcclxcbiAgIC8vIHdoaWNoIHdhcyBwYXNzZWQgdG8gdGhlIHNoYWRlciBhcyBhIHRleHR1cmUgbWFwLlxcclxcbiAgIC8vIHZlYzQgdGV4dHVyZVZhbHVlID0gdGV4dHVyZTJEKHVTaGFkb3dTYW1wbGVyLCB2ZXJ0ZXgueHkpO1xcclxcblxcclxcbiAgIC8vIFRoZSB0ZXh0dXJlIG1hcCBjb250YWlucyBhIHNpbmdsZSBkZXB0aCB2YWx1ZSBmb3IgZWFjaCBwaXhlbC4gSG93ZXZlcixcXHJcXG4gICAvLyB0aGUgdGV4dHVyZTJEIHNhbXBsZXIgYWx3YXlzIHJldHVybnMgYSBjb2xvciBmcm9tIGEgdGV4dHVyZS4gRm9yIGFcXHJcXG4gICAvLyBnbC5ERVBUSF9DT01QT05FTlQgdGV4dHVyZSwgdGhlIGNvbG9yIGNvbnRhaW5zIHRoZSBkZXB0aCB2YWx1ZSBpblxcclxcbiAgIC8vIGVhY2ggb2YgdGhlIGNvbG9yIGNvbXBvbmVudHMuIElmIHRoZSB2YWx1ZSB3YXMgZCwgdGhlbiB0aGUgY29sb3IgcmV0dXJuZWRcXHJcXG4gICAvLyBpcyAoZCxkLGQsMSkuIFRoaXMgaXMgYSBcXFwiY29sb3JcXFwiIChkZXB0aCkgdmFsdWUgYmV0d2VlbiBbMC4wLCsxLjBdLlxcclxcbiAgIGZsb2F0IHNoYWRvd21hcF9kaXN0YW5jZSA9IHRleHR1cmUyRCh1U2hhZG93VGV4dHVyZSwgdmVydGV4Lnh5KS5yO1xcclxcblxcclxcbiAgIC8vIFRlc3QgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBmcmFnbWVudCBhbmQgdGhlIGxpZ2h0IHNvdXJjZSBhc1xcclxcbiAgIC8vIGNhbGN1bGF0ZWQgdXNpbmcgdGhlIHNoYWRvd21hcCB0cmFuc2Zvcm1hdGlvbiAodmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0LnopIGFuZFxcclxcbiAgIC8vIHRoZSBzbWFsbGVzdCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjbG9zZXN0IGZyYWdtZW50IHRvIHRoZSBsaWdodCBzb3VyY2VcXHJcXG4gICAvLyBmb3IgdGhpcyBsb2NhdGlvbiwgYXMgc3RvcmVkIGluIHRoZSBzaGFkb3dtYXAuIFdoZW4gdGhlIGNsb3Nlc3RcXHJcXG4gICAvLyBkaXN0YW5jZSB0byB0aGUgbGlnaHQgc291cmNlIHdhcyBzYXZlZCBpbiB0aGUgc2hhZG93bWFwLCBzb21lXFxyXFxuICAgLy8gcHJlY2lzaW9uIHdhcyBsb3N0LiBUaGVyZWZvcmUgd2UgbmVlZCBhIHNtYWxsIHRvbGVyYW5jZSBmYWN0b3IgdG9cXHJcXG4gICAvLyBjb21wZW5zYXRlIGZvciB0aGUgbG9zdCBwcmVjaXNpb24uXFxyXFxuICAgZmxvYXQgdG9sID0gMC4wMDE7XFxyXFxuICAgaWYgKHZlcnRleC56IDw9IHNoYWRvd21hcF9kaXN0YW5jZSArIHRvbClcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gVGhpcyBzdXJmYWNlIHJlY2VpdmVzIGZ1bGwgbGlnaHQgYmVjYXVzZSBpdCBpcyB0aGUgY2xvc2VzdCBzdXJmYWNlXFxyXFxuICAgICAgLy8gdG8gdGhlIGxpZ2h0LlxcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBUaGlzIHN1cmZhY2UgaXMgaW4gYSBzaGFkb3cgYmVjYXVzZSB0aGVyZSBpcyBhIGNsb3NlciBzdXJmYWNlIHRvXFxyXFxuICAgICAgLy8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgZ2V0Q29sb3IoZmxvYXQgdmFsKVxcclxcbntcXHJcXG4gICBmbG9hdCBhID0gMS4wO1xcclxcbiAgIGlmICh1U2hvd0Zsb29yID09IDEpXFxyXFxuICAge1xcclxcbiAgICAgIC8vIGdyYWRpYXRlIG91dCB0aGUgYmFja2dyb3VuZCBmcm9tIGhhbGYgdHJhbnNwYXJlbnQgdG8gZnVsbCB0cmFuc3BhcmVuY3lcXHJcXG4gICAgICB2ZWMzIGNlbnRlciA9IChtb2RlbCAqIHZlYzQodUZsb29yQ2VudGVyLCAxLjApKS54eXo7XFxyXFxuICAgICAgZmxvYXQgZGlzdCA9IGxlbmd0aChjZW50ZXIgLSB2VmVydGV4KTtcXHJcXG4gICAgICBhID0gMC41ICogKDEuMCAtIGRpc3QgLyB1Rmxvb3JSYWRpdXMpO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWMzIHJnYiA9IG1peCh1QmxhY2tDb2xvciwgdVdoaXRlQ29sb3IsIHZhbCk7XFxyXFxuICAgcmV0dXJuIHZlYzQocmdiLCBhKTtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdmVjNCBmcmFnQ29sb3I7XFxyXFxuICAgaWYgKGluX3NoYWRvdygpKVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAodVVzZVRocmVzaG9sZHMgPT0gMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZnJhZ0NvbG9yID0gZ2V0Q29sb3IodUFtYmllbnRJbnRlbnNpdHkpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZyYWdDb2xvciA9IGdldENvbG9yKHVTaGFkb3cpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAvLyB1c2VmdWwgZm9yIGRlYnVnZ2luZyAtIHR1cm4gc2hhZG93cyByZWRcXHJcXG4gICAgICAvLyBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuICAgICAgLy8gcmV0dXJuO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHZlYzMgdG9MaWdodCA9IG5vcm1hbGl6ZSgtdUxpZ2h0RGlyZWN0aW9uKTtcXHJcXG4gICAgICB2ZWMzIHRvRXllO1xcclxcbiAgICAgIGlmICh1T3J0aG9ncmFwaGljID09IDEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHRvRXllID0gdmVjMygwLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICB0b0V5ZSA9IG5vcm1hbGl6ZSh1RXllIC0gdlZlcnRleCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZOb3JtYWwpOyAvLyB2Tm9ybWFsIGlzIGludGVycG9sYXRlZCBhbmQgbm9sb25nZXIgbm9ybWFsXFxyXFxuXFxyXFxuICAgICAgLy8gc3dhcCBub3JtYWxzIGZvciBiYWNrIGZhY2luZyB0cmlhbmdsZXNcXHJcXG4gICAgICBpZiAoZG90KG5vcm1hbCwgdG9FeWUpIDwgMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSAtbm9ybWFsO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBjb21wdXRlIGRpZmZ1c2UgY29udHJpYnV0aW9uID0gY29zIG9mIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvcnMgKGRvdCBwcm9kdWN0KVxcclxcbiAgICAgIGZsb2F0IGRpZmZ1c2VGYWN0b3IgPSBjbGFtcChkb3Qobm9ybWFsLCB0b0xpZ2h0KSwgMC4wLCAxLjApO1xcclxcbiAgICAgIGZsb2F0IGRpZmZ1c2UgPSBkaWZmdXNlRmFjdG9yICogdUxpZ2h0SW50ZW5zaXR5O1xcclxcblxcclxcbiAgICAgIC8vIGNvbXB1dGUgc3BlY3VsYXIgY29udHJpYnV0aW9uXFxyXFxuICAgICAgZmxvYXQgc2hpbmluZXNzID0gMTUuMDtcXHJcXG4gICAgICB2ZWMzIHJlZmxlY3Rpb24gPSBub3JtYWxpemUoMi4wICogZG90KG5vcm1hbCwgdG9MaWdodCkgKiBub3JtYWwgLSB0b0xpZ2h0KTtcXHJcXG4gICAgICBmbG9hdCBjb3NBbmdsZSA9IGNsYW1wKGRvdChyZWZsZWN0aW9uLCB0b0V5ZSksIDAuMCwgMS4wKTsgLy8gY2xhbXAgdG8gYXZvaWQgdmFsdWVzID4gOTAgZGVnXFxyXFxuICAgICAgZmxvYXQgc3BlY3VsYXIgPSAwLjEgKiBwb3coY29zQW5nbGUsIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgICAgZmxvYXQgdmFsO1xcclxcbiAgICAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICB2YWwgPSB1QW1iaWVudEludGVuc2l0eSArIGRpZmZ1c2UgKyBzcGVjdWxhcjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmbG9hdCB0aHJlc2hvbGQgPSAxLjAgLSBkaWZmdXNlRmFjdG9yO1xcclxcblxcclxcbiAgICAgICAgIGZsb2F0IHYxID0gbWluKHVUaHJlc2hvbGQxLCB1VGhyZXNob2xkMik7XFxyXFxuICAgICAgICAgZmxvYXQgdjIgPSBtYXgodVRocmVzaG9sZDEsIHVUaHJlc2hvbGQyKTtcXHJcXG5cXHJcXG4gICAgICAgICBpZiAodGhyZXNob2xkIDwgdjEpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHZhbCA9IHVMaWdodExpZ2h0O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCB2MilcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmFsID0gdU1pZExpZ2h0O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCAxLjApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHZhbCA9IHVEYXJrTGlnaHQ7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIGVsc2VcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmFsID0gdVNoYWRvdztcXHJcXG4gICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKHNwZWN1bGFyID4gMC4wNSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmFsID0gdUhpZ2hsaWdodDtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGZyYWdDb2xvciA9IGdldENvbG9yKHZhbCk7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIGdsX0ZyYWdDb2xvciA9IGZyYWdDb2xvcjtcXHJcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXg7XFxyXFxuYXR0cmlidXRlIHZlYzMgYU5vcm1hbDtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDQgbW9kZWw7XFxyXFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxyXFxudW5pZm9ybSBtYXQ0IGxpZ2h0VmlldztcXHJcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXHJcXG52YXJ5aW5nIHZlYzMgdlZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCk7XFxyXFxuICAgdk5vcm1hbCA9IChtb2RlbCAqIHZlYzQoYU5vcm1hbCwgMC4wKSkueHl6O1xcclxcbiAgIHZWZXJ0ZXggPSAobW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCkpLnh5ejtcXHJcXG4gICB2U2hhZG93VmVydGV4ID0gKGxpZ2h0VmlldyAqIG1vZGVsICogdmVjNChhVmVydGV4LCAxLjApKS54eXo7XFxyXFxufVwiIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==