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
    /**
     * Get's an identity matrix. Same as creating a new matrix, but syntactically
     * shows what is happening.
     *
     * @returns A new idenity matrix.
     */
    Mat4.identity = function () {
        return new Mat4();
    };
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
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'pelvis':
                model.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(11));
                model.rotZ(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-87));
                break;
            case 'wolf':
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-140));
                model.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(5));
                break;
            case 'sheephead':
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-160));
                break;
            case 'pose1':
                break;
            case 'teapot':
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(90));
                break;
            default:
                model.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
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
    menu.addItem('Skull 1', function () { return loadModel('Skull1.blob'); });
    menu.addItem('Skull 2', function () { return loadModel('Skull2.blob'); });
    menu.addItem('Skull 3', function () { return loadModel('Skull3.blob'); });
    menu.addItem('Pelvis', function () { return loadModel('Pelvis.blob'); });
    menu.addItem('Head Ecorche', function () { return loadModel('HeadEcorche.blob'); });
    menu.addItem('Arnold', function () { return loadModel('Arnold.blob'); });
    menu.addItem('Teapot', function () { return loadModel('Teapot.blob'); });
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
            this.renderer.obj.rotX(delta.y * 0.01);
            this.renderer.obj.rotY(delta.x * 0.01);
        }
        else if (this.pointerMode === PointerMode.Light) {
            var matY = _Mat__WEBPACK_IMPORTED_MODULE_4__["Mat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(delta.x));
            var matX = _Mat__WEBPACK_IMPORTED_MODULE_4__["Mat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(delta.y));
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
var INITIAL_LIGHT_DIRECTION = [1.0, -1.0, 1.5];
var INITIAL_VIEW = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity();
/**
 * Class that renders triangles and a light source
 */
var Renderer = /** @class */ (function () {
    function Renderer(glCtx) {
        this.gl = null;
        this.view = INITIAL_VIEW;
        this.lightView = new _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
        //   private projection = new Mat4();
        this.projection = new _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
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
            return new _glClipSpace__WEBPACK_IMPORTED_MODULE_13__["glClipSpace"](new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([-ar, -1, -100]), new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([ar, 1, 100]));
        }
        else {
            return new _glClipSpace__WEBPACK_IMPORTED_MODULE_13__["glClipSpace"](new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([-1, -1 / ar, -100]), new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([1, 1 / ar, 100]));
        }
    };
    Renderer.prototype.resize = function () {
        var clipSpace = this.getClipSpace();
        this.projection = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makeOrtho(clipSpace.left, clipSpace.right, clipSpace.bottom, clipSpace.top, clipSpace.near, clipSpace.far);
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
        this.uLightDirection = new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([1.0, -1.0, 1.5]);
    };
    Renderer.prototype.resetView = function () {
        this.view = INITIAL_VIEW.clone();
    };
    Renderer.prototype.render = function () {
        var gl = this.gl;
        var style = getComputedStyle(gl.canvas);
        var color = _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"].fromCss(style.backgroundColor).toGlColor();
        gl.clearColor(color.r, color.g, color.b, 1);
        this.setStdUniforms();
        this.renderToShadowMap();
        this.renderToScreen();
    };
    Renderer.prototype.setStdUniforms = function () {
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_5__["glUniform"](this.gl, this.program);
        uni.set('view', this.view.transpose());
        uni.set('lightView', this.lightView.transpose());
        uni.set('projection', this.projection.transpose());
        uni.set('uLightDirection', this.uLightDirection);
        uni.seti('uUseShadows', 1);
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
        uni.seti('uUseThresholds', 1);
        // shoot the light straight down
        uni.set('uLightDirection', new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([0, -1, 0]));
        // don't cast shadows
        uni.seti('uUseShadows', 0);
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
        uni.set('uLightDirection', new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([1, -0.5, 0.5]));
        uni.seti('uUseThresholds', 0);
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
        var mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makeLookAt(this.uLightDirection, center, up);
        mat.set(0, 3, 0);
        mat.set(1, 3, 0);
        mat.set(2, 3, 0);
        // to avoid clipping, expand the z range to allow full rotation of
        // anything in a 3-3-3 cube.
        var maxSize = Math.sqrt(27);
        mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].makeOrtho(-1, 1, -1, 1, -maxSize, maxSize).multM(mat);
        this.lightView = mat;
        var uni = this.setStdUniforms();
        // change the view matrix so that our view is from the light
        uni.set('view', this.lightView.transpose());
        uni.set('projection', _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity());
        // don't try to use the shadow texture while we're creating it
        uni.seti('uUseShadows', 0);
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
        }
        else {
            gl.useProgram(this.program);
            this.shadowDepthTexture.bind();
            gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
            // draw the main object
            var uni = this.setStdUniforms();
            this.obj.draw();
            if (this.showFloor) {
                uni.seti('uShowFloor', 1);
                this.floor.xForm.mat = this.obj.xForm.mat.clone();
                // cull polygons so we don't see the floor from below
                gl.enable(gl.CULL_FACE);
                gl.cullFace(gl.FRONT);
                this.floor.draw();
                gl.disable(gl.CULL_FACE);
                uni.seti('uShowFloor', 0);
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
        // draw the object in the upper right at a reduced size
        var view = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity();
        view.scale(this.miniSize);
        var clipSpace = this.getClipSpace();
        view.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([clipSpace.max.x - this.miniSize, clipSpace.max.y - this.miniSize, 0]));
        uni.set('view', view.transpose());
        uni.set('uUseThresholds', this.miniViewUseThresholds ? 0 : 1, true);
        this.obj.draw();
    };
    Renderer.prototype.drawBall = function () {
        var uni = this.setStdUniforms();
        // stop using the shadowmap
        uni.seti('uUseShadows', 0);
        var view = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity();
        view.scale(this.miniSize);
        var clipSpace = this.getClipSpace();
        view.translate(new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([clipSpace.min.x + this.miniSize, clipSpace.max.y - this.miniSize, 0]));
        uni.set('view', view.transpose());
        uni.set('uUseThresholds', this.useThresholds ? 1 : 0, true);
        uni.set('uWhiteColor', this.ballColor);
        uni.set('uBlackColor', _htmlColor__WEBPACK_IMPORTED_MODULE_12__["htmlColor"].black.toGlColor());
        this.ball.draw();
        uni.set('uLightDirection', new _Vec__WEBPACK_IMPORTED_MODULE_1__["Vec3"]([1, -0.5, 0.5]));
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
                if (ret.iN.length === 4) {
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
            this.renderer.obj.rotX(delta.y * 0.01);
            this.renderer.obj.rotY(delta.x * 0.01);
        }
        else if (this.pointerMode === PointerMode.Light) {
            var matY = _Mat__WEBPACK_IMPORTED_MODULE_3__["Mat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_1__["toRad"])(delta.x));
            var matX = _Mat__WEBPACK_IMPORTED_MODULE_3__["Mat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_1__["toRad"])(delta.y));
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
        this.base = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity();
        this.mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity();
    }
    XForm.prototype.get = function () {
        return this.mat.multM(this.base);
    };
    XForm.prototype.snap = function () {
        this.base = this.get();
        this.mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity();
    };
    XForm.prototype.reset = function () {
        this.mat = _Mat__WEBPACK_IMPORTED_MODULE_0__["Mat4"].identity();
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
            return (this.max.x - this.min.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "height", {
        get: function () {
            return (this.max.y - this.min.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(glClipSpace.prototype, "depth", {
        get: function () {
            return (this.max.z - this.min.z);
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
            throw 'compile error: ' + gl.getShaderInfoLog(shader);
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
        uni.set('model', this.xForm.get().transpose());
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
                gl.uniformMatrix4fv(loc, false, new Float32Array(value.values));
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
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\n\r\n// interpolated values from the vertex shader\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nuniform mat4 model;\r\nuniform mat4 view;\r\nuniform mat4 lightView;\r\nuniform mat4 projection;\r\n\r\nuniform float uLightIntensity;\r\nuniform float uAmbientIntensity;\r\nuniform vec3 uLightDirection;\r\n\r\n// the colors we use to represent our lightest and darkest values\r\nuniform vec3 uWhiteColor;\r\nuniform vec3 uBlackColor;\r\n\r\nuniform int uUseThresholds;\r\nuniform float uThreshold1;\r\nuniform float uThreshold2;\r\nuniform float uHighlight;\r\nuniform float uLightLight;\r\nuniform float uMidLight;\r\nuniform float uDarkLight;\r\nuniform float uShadow;\r\n\r\nuniform int uUseShadows;\r\nuniform sampler2D uShadowTexture;\r\n\r\nuniform vec3 uFloorCenter;\r\nuniform float uFloorRadius;\r\nuniform int uShowFloor;\r\n\r\nbool in_shadow(void)\r\n{\r\n   if (uUseShadows == 0)\r\n   {\r\n      return false;\r\n   }\r\n\r\n   // The vertex location rendered from the light source is almost in Normalized\r\n   // Device Coordinates (NDC), but the perspective division has not been\r\n   // performed yet. Perform the perspective divide. The (x,y,z) vertex location\r\n   // components are now each in the range [-1.0,+1.0].\r\n   // vec3 vertex_relative_to_light = v_Vertex_relative_to_light.xyz / v_Vertex_relative_to_light.w;\r\n   vec3 vertex = vShadowVertex;\r\n\r\n   // Convert the the values from Normalized Device Coordinates (range [-1.0,+1.0])\r\n   // to the range [0.0,1.0]. This mapping is done by scaling\r\n   // the values by 0.5, which gives values in the range [-0.5,+0.5] and then\r\n   // shifting the values by +0.5.\r\n   vertex = vertex * 0.5 + 0.5;\r\n\r\n   // Get the z value of this fragment in relationship to the light source.\r\n   // This value was stored in the shadow map (depth buffer of the frame buffer)\r\n   // which was passed to the shader as a texture map.\r\n   // vec4 textureValue = texture2D(uShadowSampler, vertex.xy);\r\n\r\n   // The texture map contains a single depth value for each pixel. However,\r\n   // the texture2D sampler always returns a color from a texture. For a\r\n   // gl.DEPTH_COMPONENT texture, the color contains the depth value in\r\n   // each of the color components. If the value was d, then the color returned\r\n   // is (d,d,d,1). This is a \"color\" (depth) value between [0.0,+1.0].\r\n   float shadowmap_distance = texture2D(uShadowTexture, vertex.xy).r;\r\n\r\n   // Test the distance between this fragment and the light source as\r\n   // calculated using the shadowmap transformation (vertex_relative_to_light.z) and\r\n   // the smallest distance between the closest fragment to the light source\r\n   // for this location, as stored in the shadowmap. When the closest\r\n   // distance to the light source was saved in the shadowmap, some\r\n   // precision was lost. Therefore we need a small tolerance factor to\r\n   // compensate for the lost precision.\r\n   float tol = 0.001;\r\n   if (vertex.z <= shadowmap_distance + tol)\r\n   {\r\n      // This surface receives full light because it is the closest surface\r\n      // to the light.\r\n      return false;\r\n   }\r\n   else\r\n   {\r\n      // This surface is in a shadow because there is a closer surface to\r\n      // the light source.\r\n      return true;\r\n   }\r\n}\r\n\r\nvec4 getColor(float val)\r\n{\r\n   float a = 1.0;\r\n   if (uShowFloor == 1)\r\n   {\r\n      // gradiate out the background from half transparent to full transparency\r\n      vec3 center = (model * vec4(uFloorCenter, 1.0)).xyz;\r\n      float dist = length(center - vVertex);\r\n      a = 0.5 * (1.0 - dist / uFloorRadius);\r\n   }\r\n\r\n   vec3 rgb = mix(uBlackColor, uWhiteColor, val);\r\n   return vec4(rgb, a);\r\n}\r\n\r\nvoid main()\r\n{\r\n   vec4 fragColor;\r\n   if (in_shadow())\r\n   {\r\n      if (uUseThresholds == 0)\r\n      {\r\n         fragColor = getColor(uAmbientIntensity);\r\n      }\r\n      else\r\n      {\r\n         fragColor = getColor(uShadow);\r\n      }\r\n      // useful for debugging - turn shadows red\r\n      // gl_FragColor = vec4(1.0, 0.0, 0.0, 0.0);\r\n      // return;\r\n   }\r\n   else\r\n   {\r\n      vec3 toLight = normalize(-uLightDirection);\r\n      vec3 toEye = vec3(0.0, 0.0, -1.0);\r\n      vec3 normal = normalize(vNormal); // vNormal is interpolated and nolonger normal\r\n\r\n      // swap normals for back facing triangles\r\n      if (dot(normal, toEye) < -0.0)\r\n      {\r\n         normal = -normal;\r\n      }\r\n\r\n      // compute diffuse contribution = cos of angle between the vectors (dot product)\r\n      float diffuseFactor = clamp(dot(normal, toLight), 0.0, 1.0);\r\n      float diffuse = diffuseFactor * uLightIntensity;\r\n\r\n      // compute specular contribution\r\n      float shininess = 15.0;\r\n      vec3 reflection = normalize(2.0 * dot(normal, toLight) * normal - toLight);\r\n      float cosAngle = clamp(dot(reflection, toEye), 0.0, 1.0); // clamp to avoid values > 90 deg\r\n      float specular = 0.1 * pow(cosAngle, shininess);\r\n\r\n      float val;\r\n      if (uUseThresholds == 0)\r\n      {\r\n         val = uAmbientIntensity + diffuse + specular;\r\n      }\r\n      else\r\n      {\r\n         float threshold = 1.0 - diffuseFactor;\r\n\r\n         float v1 = min(uThreshold1, uThreshold2);\r\n         float v2 = max(uThreshold1, uThreshold2);\r\n\r\n         if (threshold < v1)\r\n         {\r\n            val = uLightLight;\r\n         }\r\n         else if (threshold < v2)\r\n         {\r\n            val = uMidLight;\r\n         }\r\n         else if (threshold < 1.0)\r\n         {\r\n            val = uDarkLight;\r\n         }\r\n         else\r\n         {\r\n            val = uShadow;\r\n         }\r\n\r\n         if (specular > 0.05)\r\n         {\r\n            val = uHighlight;\r\n         }\r\n      }\r\n\r\n      fragColor = getColor(val);\r\n   }\r\n\r\n   gl_FragColor = fragColor;\r\n}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9Ecm9wRG93bk1lbnUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvUGxhbmVzQXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1NsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UYWJzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1ZpZXdlckFwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2FkZXJXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jsb2JGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9CbG9iU2hpbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yQW5hbHl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Ryb3BEb3duTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXhlZFRyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9JbmRleGVkVmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0LnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWxzRHJvcERvd25NZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5lc0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9pbnRlckV2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZmlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwaGVyaWNhbENvb3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9UZXh0dXJlUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RocmVzaG9sZEN0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlT2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iakJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlT2JqRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld2VyQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9Wb2x1bWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1hGb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9nbEF0dHJpYnV0ZUJ1ZmZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xDbGlwU3BhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsRnJhbWVCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsSW5kZXhCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nbFRleHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVW5pZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xVbmlmb3JtQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbENvbG9yV2l0aEFscGhhLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9TY3JlZW5GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9UZXh0dXJlUmVuZGVyZXJGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1RleHR1cmVSZW5kZXJlclZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1ZpZXdlckZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvVmlld2VyVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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LEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9GLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhDLDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoRixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUM7U0FDZDtRQUNELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5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LENBQUM7SUFFdkQsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxjQUFjLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxlQUFlLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBRTdELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsWUFBWSxDQUFDLEVBQXZCLENBQXVCLENB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QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUVsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFD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QUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUYsQ0FBQyxHQUFHLHNEQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxHQUFHLHNEQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxHQUFHLHNEQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDSixDQUFDO0lBRU8sa0NBQVksR0FBcEIsVUFBcUIsQ0FBUTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMs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QyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzFJO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNyQixHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzNJO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixHQUFHLElBQUksSUFBSTtnQkFDUixDQUFD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SUFBTSxZQUFZLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN4QyxJQUFNLFlBQVksR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ3hDLElBQU0sR0FBRyxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFNLFFBQVEsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsdUJBQXVCO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEUsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFDO1lBQ3RCLElBQUksRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUUsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFDO1lBQ3RCLElBQUksRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFMUUsSUFBSSxFQUFFLEdBQUcsSUFBSSx5Q0FBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksRUFBRSxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsd0JBQXdCO1FBQ3hCLElBQU0sR0FBRyxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUUsSUFBSSxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUxRSxJQUFJLEVBQUUsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLEdBQUcsSUFBSSx5Q0FBSSxDQUFDLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakM7SUFDSixDQUFDO0lBRU0sc0NBQVMsR0FBaEIsVUFBaUIsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsTUFBWTtRQUU1RCw4QkFBOEI7UUFDOUIsSUFBSSxRQUFRLEdBQVcsRUFBRSxDQUFDO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5Q0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25FO2lCQUNJLElBQUksQ0FBQyxLQUFLLFFBQVEsR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSx5Q0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25FO2lCQUNJO2dCQUNGLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hELElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUUxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUVoQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUkseUNBQUksQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7d0JBQzlE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LE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLEVBQUUsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxFQUFFLEdBQUcsSUFBSSx5Q0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksRUFBRSxHQUFHLElBQUkseUNBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLEVBQUUsR0FBRyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJ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QTJDLHlKQUF5Siw4QkFBOEIsV0FBVyxvS0FBb0ssMERBQTBELCtFQUErRSxxRkFBcUYsbUVBQW1FLDRGQUE0Rix3QkFBd0IsNkNBQTZDLDBEQUEwRCxXQUFXLHlCQUF5QixtREFBbUQsMERBQTBELHNEQUFzRCxrREFBa0Qsa0NBQWtDLGNBQWMsbURBQW1ELGdDQUFnQyxjQUFjLG9EQUFvRCxpQ0FBaUMsY0FBYywrQkFBK0IsOEJBQThCLGNBQWMsbURBQW1ELGlDQUFpQyxjQUFjLFdBQVcsd0NBQXdDLFFBQVEsb0NBQW9DLEtBQUssQzs7Ozs7Ozs7Ozs7O0FDQW41TDtBQUFlLHVGQUF3QiwyQkFBMkIsMkJBQTJCLHNCQUFzQiwyQkFBMkIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsK0JBQStCLHdCQUF3QixvRUFBb0Usa0RBQWtELGtEQUFrRCxvRUFBb0UsS0FBSyxDOzs7Ozs7Ozs7OztBQ0F4Z0IsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4SEFBMEQ7O0FBRTVGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cXHJcXG4uRHJvcERvd24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcclxcbi5Ecm9wRG93bkJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xcclxcbi5Ecm9wRG93bkJ1dHRvbjpob3ZlcixcXHJcXG4uRHJvcERvd25CdXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXFxyXFxuLkRyb3BEb3duTWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcclxcbi5Ecm9wRG93bk1lbnVJdGVtIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXHJcXG4uRHJvcERvd25NZW51SXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xcclxcbi5Ecm9wRG93blNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuRHJvcERvd25NZW51IHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuUGxhbmVzQXBwICNNYWluQ2FudmFzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjT3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5QbGFuZXNBcHAgI0N0cmxzQ29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjTGlnaHRMaWdodFJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuLlBsYW5lc0FwcCAjTGlnaHRMaWdodFNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNNaWRMaWdodFJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuLlBsYW5lc0FwcCAjTWlkTGlnaHRTbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjRGFya0xpZ2h0UmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG4uUGxhbmVzQXBwICNEYXJrTGlnaHRTbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgd2lkdGg6IDE4JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgICB3aWR0aDogMjglO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgICB3aWR0aDogMjIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlNsaWRlckxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJIZWFkZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JlZW4sIGRhcmtncmVlbik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5TbGlkZXJMYWJlbCB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDM0cHg7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclZhbHVlU3BhbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFN0eWxlIHRoZSB0YWIgKi9cXHJcXG4uVGFicyB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXFxyXFxuLlRhYnMgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xcclxcbi5UYWJzIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXFxyXFxuLlRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xcclxcbi5UYWJDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlRhYnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5WaWV3ZXJBcHAgI01haW5DYW52YXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgMTE3LCAxMzQpO1xcclxcbn1cXHJcXG5cXHJcXG4uVmlld2VyQXBwICNPdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Ryb3BEb3duTWVudS5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TbGlkZXIuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFicy5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QbGFuZXNBcHAuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVmlld2VyQXBwLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICBsZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNkcmF3VGltZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC00OTVweDtcXHJcXG4gIGxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgZm9udC1zaXplOiA4cHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZ3Jlc3NTcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogM3B4O1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMjA1LCA1MCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbiNtb2RlQnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAqIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2RyYXdUaW1lIHtcXHJcXG4gICAgdG9wOiAtOTYwcHg7XFxyXFxuICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB0O1xcclxcbiAgICBmb250LXdlaWdodDogZGFya2VyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21vZGVCdXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYixjLGQpe3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixiKSxlLnJlc3BvbnNlVHlwZT1cImJsb2JcIixlLm9ubG9hZD1mdW5jdGlvbigpe2EoZS5yZXNwb25zZSxjLGQpfSxlLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGUuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGEsYixkLGUpe2lmKGU9ZXx8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGUmJihlLmRvY3VtZW50LnRpdGxlPWUuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYSlyZXR1cm4gYyhhLGIsZCk7dmFyIGc9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWEudHlwZSxoPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGk9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChpfHxnJiZoKSYmXCJvYmplY3RcIj09dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBqPW5ldyBGaWxlUmVhZGVyO2oub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ai5yZXN1bHQ7YT1pP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGU/ZS5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxlPW51bGx9LGoucmVhZEFzRGF0YVVSTChhKX1lbHNle3ZhciBrPWYuVVJMfHxmLndlYmtpdFVSTCxsPWsuY3JlYXRlT2JqZWN0VVJMKGEpO2U/ZS5sb2NhdGlvbj1sOmxvY2F0aW9uLmhyZWY9bCxlPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2sucmV2b2tlT2JqZWN0VVJMKGwpfSw0RTQpfX0pO2Yuc2F2ZUFzPWEuc2F2ZUFzPWEsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWEpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIkxvYWRlcldvcmtlci53b3JrZXIuanNcIik7XG59OyIsImltcG9ydCAnLi9CbG9iU2hpbSc7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgZm9yIHNsaWNpbmcgdXAgQmxvYnNcclxuICovXHJcbmNsYXNzIEJsb2JTbGljZXIge1xyXG5cclxuICAgLy8gVGhlIHN0YXJ0IGJ5dGUgdmFsdWUgZm9yIHRoZSBuZXh0IHNsaWNlXHJcbiAgIHByaXZhdGUgc3RhcnQgPSAwO1xyXG5cclxuICAgLy8gVGhlIEJsb2Igd2UncmUgc2xpY2luZyBcclxuICAgcHJpdmF0ZSBibG9iOiBCbG9iO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBibG9iIFRoZSBCbG9iIHRvIGJlIHNsaWNlZFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGJsb2I6IEJsb2IpIHtcclxuICAgICAgdGhpcy5ibG9iID0gYmxvYjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG5leHQgc2xpY2UuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc2xpY2VkIEJsb2IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbmV4dChsZW46IG51bWJlcik6IEJsb2Ige1xyXG4gICAgICBsZXQgYiA9IHRoaXMuYmxvYi5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0ICsgbGVuKTtcclxuICAgICAgdGhpcy5zdGFydCArPSBsZW47XHJcbiAgICAgIHJldHVybiBiO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGFuIEFycmF5QnVmZmVyLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQW4gQXJyYXlCdWZmZXIgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZXh0QXJyYXlCdWZmZXIobGVuOiBudW1iZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5leHQobGVuKS5hcnJheUJ1ZmZlcigpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGFuIEludDMyQXJyYXlcclxuICAgICpcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQW4gSW50MzJBcnJheSBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFzeW5jIG5leHRJbnQzMkFycmF5KGxlbjogbnVtYmVyKTogUHJvbWlzZTxJbnQzMkFycmF5PiB7XHJcbiAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShhd2FpdCB0aGlzLm5leHRBcnJheUJ1ZmZlcihsZW4pKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNsaWNlcyB0aGUgQmxvYiBhbmQgcmV0dXJucyBpdCBhcyBhIHN0cmluZ1xyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFzeW5jIG5leHRTdHJpbmcobGVuOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXh0KGxlbikudGV4dCgpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGNyZWF0aW9uIGFuZCBleHRyYWN0aW9uIG9mIGEgc2VsZiBkZXNjcmliaW5nIEJsb2IuIERhdGFcclxuICogaXMgc3RvcmVkIGFzOlxyXG4gKiBcclxuICogW251bUVudHJpZXNdIC0gVGhlIG51bWJlciBlbnRyaWVzIGluIHRoZSBmaWxlLiA0IGJ5dGUgSW50MzJcclxuICogW3NpemVzXSAtIFNpemVzIG9mIGFsbCB0aGUgZW50cmllcywgaW5jbHVkaW5nIHRoZSBpbmZvIG9iamVjdFxyXG4gKiBbaW5mb10gLSBVc2VyIHN1cHBsaWVkIGRhdGEgYXMgYSBKU09OIHN0cmluZ1xyXG4gKiBbZW50cnkgMV0gLSBGaXJzdCB1c2VyIGVudHJ5XHJcbiAqIFtlbnRyeSAyXSAtIFNlY29uZCB1c2VyIGVudHJ5XHJcbiAqIFsuLi5dXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvYkZpbGUge1xyXG4gICBwdWJsaWMgaW5mbzogYW55O1xyXG4gICBwdWJsaWMgcGFydHM6IEJsb2JbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiBoZWFkZXIgdG8gYmUgc3RvcmVkIHdpdGggdGhlIEJsb2JcclxuICAgICogQHBhcmFtIHBhcnRzIFRoZSBkYXRhIGNvbnRlbnRzIG9mIHRoZSBCbG9iXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbnN0cnVjdG9yKGluZm86IG9iamVjdCwgcGFydHM6IEJsb2JbXSkge1xyXG4gICAgICB0aGlzLmluZm8gPSBpbmZvO1xyXG4gICAgICB0aGlzLnBhcnRzID0gcGFydHM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIHJhdyBCbG9iIG9iamVjdCBpbnRvIGEgQmxvYkZpbGVcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBibG9iIFRoZSBCbG9iIHRvIHByb2Nlc3MuXHJcbiAgICAqIEByZXR1cm4gQSBCbG9iRmlsZSBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBleHRyYWN0KGJsb2I6IEJsb2IpOiBQcm9taXNlPEJsb2JGaWxlPiB7XHJcblxyXG4gICAgICBsZXQgYmxvYlNsaWNlciA9IG5ldyBCbG9iU2xpY2VyKGJsb2IpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgZXh0cmFjdCB0aGUgbnVtYmVyIG9mIGVudHJpZXNcclxuICAgICAgbGV0IG51bUVudHJpZXMgPSAoYXdhaXQgYmxvYlNsaWNlci5uZXh0SW50MzJBcnJheSg0KSlbMF07XHJcblxyXG4gICAgICAvLyB0aGUgdGhlIHNpemVzIGFycmF5XHJcbiAgICAgIGxldCBzaXplcyA9IGF3YWl0IGJsb2JTbGljZXIubmV4dEludDMyQXJyYXkoNCAqIChudW1FbnRyaWVzICsgMSkpO1xyXG5cclxuICAgICAgLy8gdGhlbiB0aGUgaW5mbyBvYmplY3RcclxuICAgICAgbGV0IGpzb25JbmZvID0gYXdhaXQgYmxvYlNsaWNlci5uZXh0U3RyaW5nKHNpemVzWzBdKTtcclxuXHJcbiAgICAgIC8vIHRoZW4gYWxsIHRoZSBzdWIgYmxvYnNcclxuICAgICAgbGV0IHBhcnRzOiBCbG9iW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1FbnRyaWVzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHNpemUgPSBzaXplc1tpICsgMV07XHJcbiAgICAgICAgIHBhcnRzLnB1c2goYmxvYlNsaWNlci5uZXh0KHNpemUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBCbG9iRmlsZShKU09OLnBhcnNlKGpzb25JbmZvKSwgcGFydHMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlIGEgQmxvYkZpbGUgQmxvYlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIGhlYWRlciB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQmxvYlxyXG4gICAgKiBAcGFyYW0gcGFydHMgVGhlIGRhdGEgY29udGVudHMgb2YgdGhlIEJsb2JcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQmxvYihpbmZvOiBvYmplY3QsIHBhcnRzOiBCbG9iUGFydFtdKTogQmxvYiB7XHJcblxyXG4gICAgICBsZXQganNvbkluZm8gPSBKU09OLnN0cmluZ2lmeShpbmZvKTtcclxuXHJcbiAgICAgIC8vIEJ1aWxkIHRoZSBhcnJheSBvZiBzaXplc1xyXG4gICAgICBsZXQgc2l6ZXM6IG51bWJlcltdID0gW2pzb25JbmZvLmxlbmd0aF07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHBhcnQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgaWYgKHBhcnQgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goNCAqIHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChwYXJ0IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goNCAqIHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChwYXJ0IGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2gocGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gJ1Vuc3VwcG9ydGVkIEJsb2IgUGFydCBUeXBlOiAnICsgdHlwZW9mIHBhcnQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXNzZW1ibGUgdGhlIGJsb2IgcGFydHNcclxuICAgICAgbGV0IGFsbFBhcnRzOiBCbG9iUGFydFtdID0gW107XHJcbiAgICAgIGFsbFBhcnRzLnB1c2gobmV3IEludDMyQXJyYXkoW3BhcnRzLmxlbmd0aF0pKTtcclxuICAgICAgYWxsUGFydHMucHVzaChuZXcgSW50MzJBcnJheShzaXplcykpO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKGpzb25JbmZvKTtcclxuICAgICAgYWxsUGFydHMucHVzaCguLi5wYXJ0cyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIGJsb2JcclxuICAgICAgcmV0dXJuIG5ldyBCbG9iKGFsbFBhcnRzKTtcclxuICAgfVxyXG59IiwiLy8gbmVlZGVkIGZvciBTYWZhcmlcclxuaWYgKCFCbG9iLnByb3RvdHlwZS5hcnJheUJ1ZmZlcikge1xyXG4gICBCbG9iLnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcblxyXG4gICAgICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXlCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdGFydCB0aGUgcmVhZFxyXG4gICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vIG5lZWRlZCBmb3IgU2FmYXJpXHJcbmlmICghQmxvYi5wcm90b3R5cGUudGV4dCkge1xyXG5cclxuICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgQmxvYi5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uICgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkZWNvZGUgaW50byBhIHN0cmluZ1xyXG4gICAgICAgICAgICBsZXQgdHh0ID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHR4dCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RhcnQgdGhlIHJlYWRcclxuICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcbiIsIlxyXG4vKipcclxuICogQ2xhc3MgZm9yIHJlcHJlc2VudGluZyBjb2xvciB2YWx1ZXMuIFZhbHVlcyBtYXkgYmUgb24gYSAwLTEgb3IgMC0yNTUgc2NhbGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICBwdWJsaWMgcjogbnVtYmVyO1xyXG4gICBwdWJsaWMgZzogbnVtYmVyO1xyXG4gICBwdWJsaWMgYjogbnVtYmVyO1xyXG4gICBwdWJsaWMgYTogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBSR0IgdmFsdWVzIHRvIHN0b3JlIGluIHRoaXMgb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcbiAgICAgIHRoaXMuciA9IGNvbG9yWzBdO1xyXG4gICAgICB0aGlzLmcgPSBjb2xvclsxXTtcclxuICAgICAgdGhpcy5iID0gY29sb3JbMl07XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgIHRoaXMuYSA9IGNvbG9yWzNdO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsQ29sb3IzIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpdGVtcyByZXR1cm5lZCBmcm9tIGV4YW1pbmluZyB0aGUgY3VycmVudCB2aWV3XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvckRhdGEge1xyXG4gICBtYXhDaHJvbWE6IG51bWJlcixcclxuICAgaGlnaGxpZ2h0Q29sb3I6IGdsQ29sb3IzLFxyXG4gICBhdmdMaWdodENvbG9yOiBnbENvbG9yMyxcclxuICAgbGlnaHRlc3RMaWdodENvbG9yOiBnbENvbG9yMyxcclxuICAgZGFya2VzdExpZ2h0Q29sb3I6IGdsQ29sb3IzLFxyXG4gICBhdmdTaGFkb3dDb2xvcjogZ2xDb2xvcjMsXHJcbiAgIGxpZ2h0ZXN0U2hhZG93Q29sb3I6IGdsQ29sb3IzLFxyXG4gICBkYXJrZXN0U2hhZG93Q29sb3I6IGdsQ29sb3IzLFxyXG4gICB0ZXJtaW5hdG9yQ29sb3I6IGdsQ29sb3IzLFxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBncmFicyBhIGNvcHkgb2YgdGhlIHJlbmRlcmVkIHRleHR1cmUgYW5kIGV4YW1pbmVzIGl0IGZvclxyXG4gKiBjb2xvciB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sb3JBbmFseXplciB7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGFycmF5IHdoZXJlIHdlJ2xsIGR1bXAgdGhlIHRleHR1cmUgdG8uIENhY2hlIHRoaXMgYXJyYXkgaW5zdGVhZCBvZlxyXG4gICAgKiBhbGxvY2F0aW5nIGEgbmV3IG9uZSBmb3IgZWFjaCBmcmFtZS5cclxuICAgICovXHJcbiAgIHByaXZhdGUgcGl4ZWxzOiBGbG9hdDMyQXJyYXk7XHJcblxyXG4gICAvKipcclxuICAgICogU2l6ZSBvZiB0aGUgdGV4dHVyZVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHNpemUgVGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGJ1ZmZlclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlcikge1xyXG5cclxuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuXHJcbiAgICAgIC8vIGFsbG9jYXRlIHRoZSBidWZmZXIgdXNlZCBmb3IgZ3JhYnNcclxuICAgICAgdGhpcy5waXhlbHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc2l6ZSAqIHRoaXMuc2l6ZSAqIDQpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUnVucyB0aGUgYW5hbHlzaXMgLSBncmFicyBhIGNvcHkgb2YgdGhlIGZyYW1lIGJ1ZmZlciBhbmQgc2NhbnMgaXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYWxwaGFMaWdodCBUaGUgYWxwaGEgdmFsdWUgZm9yIHRoaW5ncyBpbiBsaWdodC4gVmFsdWVzIGFib3ZlIHRoaXMgYXJlIGR1ZSB0byBzcGVjdWxhciBsaWdodGluZy5cclxuICAgICogQHBhcmFtIGFscGhhU2hhZG93IFRoZSBhbHBoYSB2YWx1ZSBmb3IgdGhpbmdzIGluIHNoYWRvdy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBydW4oXHJcbiAgICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICBhbHBoYUxpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGFscGhhU2hhZG93OiBudW1iZXJcclxuICAgKTogSUNvbG9yRGF0YSB7XHJcblxyXG4gICAgICBsZXQgZGF0YTogSUNvbG9yRGF0YSA9IHtcclxuICAgICAgICAgbWF4Q2hyb21hOiAwLFxyXG4gICAgICAgICBhdmdMaWdodENvbG9yOiBuZXcgZ2xDb2xvcjMoWzAsIDAsIDBdKSxcclxuICAgICAgICAgbGlnaHRlc3RMaWdodENvbG9yOiBuZXcgZ2xDb2xvcjMoWzAsIDAsIDBdKSxcclxuICAgICAgICAgZGFya2VzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yMyhbMSwgMSwgMV0pLFxyXG4gICAgICAgICBhdmdTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IzKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGxpZ2h0ZXN0U2hhZG93Q29sb3I6IG5ldyBnbENvbG9yMyhbMCwgMCwgMF0pLFxyXG4gICAgICAgICBkYXJrZXN0U2hhZG93Q29sb3I6IG5ldyBnbENvbG9yMyhbMSwgMSwgMV0pLFxyXG4gICAgICAgICB0ZXJtaW5hdG9yQ29sb3I6IG5ldyBnbENvbG9yMyhbMCwgMCwgMF0pLFxyXG4gICAgICAgICBoaWdobGlnaHRDb2xvcjogbmV3IGdsQ29sb3IzKFswLCAwLCAwXSksXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIGNhc2Ugd2hlbiB0aGUgdGV4dCB0eXBlIGlzIFVOU0lHTkVEX0JZVEVcclxuICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgZ2wuUkdCQSwgZ2wuRkxPQVQsIHRoaXMucGl4ZWxzKTtcclxuXHJcbiAgICAgIGxldCBudW1MaWdodFBpeGVscyA9IDA7XHJcbiAgICAgIGxldCBudW1TaGFkb3dQaXhlbHMgPSAwO1xyXG4gICAgICBsZXQgbnVtVGVybWluYXRvclBpeGVscyA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gKHJvdyAqIHRoaXMuc2l6ZSArIGNvbCkgKiA0O1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMF07XHJcbiAgICAgICAgICAgIGxldCBnID0gdGhpcy5waXhlbHNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDJdO1xyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMucGl4ZWxzW2luZGV4ICsgM107XHJcblxyXG4gICAgICAgICAgICAvLyBpZ25vcmUgdmFsdWVzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBiYWxsXHJcbiAgICAgICAgICAgIGlmIChhID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXZnID0gKHIgKyBnICsgYikgLyAzO1xyXG4gICAgICAgICAgICBsZXQgY2hyb21hID0gKE1hdGguYWJzKHIgLSBhdmcpICsgTWF0aC5hYnMoZyAtIGF2ZykgKyBNYXRoLmFicyhiIC0gYXZnKSkgLyAoNCAvIDMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNocm9tYSA+IGRhdGEubWF4Q2hyb21hKSB7XHJcbiAgICAgICAgICAgICAgIGRhdGEubWF4Q2hyb21hID0gY2hyb21hO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgZ2xDb2xvcjMoW3IsIGcsIGJdKTtcclxuICAgICAgICAgICAgaWYgKGEgPT0gYWxwaGFMaWdodCkge1xyXG4gICAgICAgICAgICAgICBudW1MaWdodFBpeGVscysrO1xyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmRhcmtlc3RMaWdodENvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gZ2xDb2xvcjMubGlnaHRlc3QoZGF0YS5saWdodGVzdExpZ2h0Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9IGdsQ29sb3IzLmRhcmtlc3QoZGF0YS5kYXJrZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPT0gYWxwaGFTaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgbnVtU2hhZG93UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IzLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IzLmRhcmtlc3QoZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5yICs9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhID4gYWxwaGFMaWdodCkge1xyXG4gICAgICAgICAgICAgICBkYXRhLmhpZ2hsaWdodENvbG9yID0gZ2xDb2xvcjMubGlnaHRlc3QoZGF0YS5oaWdobGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVybWluYXRvciA9IChhbHBoYUxpZ2h0ICsgYWxwaGFTaGFkb3cpIC8gMi4wO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYSAtIHRlcm1pbmF0b3IpIDwgMC4xKSB7XHJcbiAgICAgICAgICAgICAgIG51bVRlcm1pbmF0b3JQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChudW1MaWdodFBpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLnIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5nIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtU2hhZG93UGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmcgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1UZXJtaW5hdG9yUGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5yIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuYiAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJwb2xhdGVzIGFuZCBhcnJheSBvZiBjb2xvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvclJhbmdlIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSBjb2xvcnNcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29sb3JzOiBodG1sQ29sb3JbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9ycyBUaGUgY29sb3JzIHRvIGludGVycG9sYXRlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG4gICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYW4gaW50ZXJwb2xhdGVkIGNvbG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCh2YWx1ZTogbnVtYmVyKTogaHRtbENvbG9yIHtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKTtcclxuICAgICAgICAgbGV0IHBhcnRpYWwgPSAodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSAtIGluZGV4O1xyXG5cclxuICAgICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5yICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLnIgLSB0aGlzLmNvbG9yc1tpbmRleF0ucikpO1xyXG4gICAgICAgICBsZXQgZyA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLmcgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uZyAtIHRoaXMuY29sb3JzW2luZGV4XS5nKSk7XHJcbiAgICAgICAgIGxldCBiID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uYiArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5iIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmIpKTtcclxuXHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiZXhwb3J0IHR5cGUgTWVudUl0ZW1GdW5jdGlvbiA9ICgpID0+IHZvaWQ7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgcHVibGljIG1lbnVEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICBwdWJsaWMgaWdub3JlRXZlbnQgPSBmYWxzZTtcclxuXHJcbiAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHNob3coKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdEcm9wRG93blNob3cnKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgdGhpcy5tZW51RGl2LmNsYXNzTGlzdC5hZGQoJ0Ryb3BEb3duU2hvdycpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBoaWRlKCkge1xyXG4gICAgICBpZiAodGhpcy5tZW51RGl2LmNsYXNzTGlzdC5jb250YWlucygnRHJvcERvd25TaG93JykpIHtcclxuICAgICAgICAgdGhpcy5tZW51RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ0Ryb3BEb3duU2hvdycpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBhZGRDbG9zZUhhbmRsZXIoKSB7XHJcbiAgICAgIC8vIFRPRE8gb24gdGhlIHBob25lIHRoaXMgZXZlbnQgZG9lcyBub3Qgb2NjdXIgd2hlbiBjbGlja2luZyBvdmVyIHRoZSBjYW52YXNcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICBpZiAodGhpcy5pZ25vcmVFdmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5pZ25vcmVFdmVudCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcERvd25NZW51IGV4dGVuZHMgTWVudSB7XHJcbiAgIHByaXZhdGUgZHJvcERvd25EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICB0aGlzLmRyb3BEb3duRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuaWQgPSBpZCArICdEcm9wRG93bic7XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuY2xhc3NOYW1lID0gJ0Ryb3BEb3duJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcERvd25EaXYpO1xyXG5cclxuICAgICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbWVudUJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBtZW51QnV0dG9uLmNsYXNzTmFtZSA9ICdEcm9wRG93bkJ1dHRvbic7XHJcbiAgICAgIG1lbnVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy5pZ25vcmVFdmVudCA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcblxyXG4gICAgICBzdXBlci5hZGRDbG9zZUhhbmRsZXIoKTtcclxuXHJcblxyXG4gICAgICB0aGlzLm1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5tZW51RGl2LmNsYXNzTmFtZSA9ICdEcm9wRG93bk1lbnUnO1xyXG4gICAgICB0aGlzLm1lbnVEaXYuaWQgPSBpZCArICdEcm9wRG93bk1lbnUnO1xyXG4gICAgICB0aGlzLmRyb3BEb3duRGl2LmFwcGVuZENoaWxkKHRoaXMubWVudURpdik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhZGRJdGVtKHRleHQ6IHN0cmluZywgY2FsbGJhY2s6IE1lbnVJdGVtRnVuY3Rpb24pIHtcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaXRlbS5pZCA9IHRoaXMuaWQgKyAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhZGRTdWJNZW51KHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZyk6IFN1Yk1lbnUge1xyXG5cclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaXRlbS5pZCA9IHRoaXMuaWQgKyAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgIHN1Yk1lbnUuc2hvdygpO1xyXG4gICAgICAgICBzdWJNZW51Lmlnbm9yZUV2ZW50ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG4gICAgICBsZXQgc3ViTWVudSA9IG5ldyBTdWJNZW51KGl0ZW0sIHRoaXMuZHJvcERvd25EaXYsIGlkKTtcclxuICAgICAgcmV0dXJuIHN1Yk1lbnU7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1Yk1lbnUgZXh0ZW5kcyBNZW51IHtcclxuICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGRyb3BEb3duRGl2OiBIVE1MRGl2RWxlbWVudCwgaWQ6IHN0cmluZykge1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgIHRoaXMubWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLm1lbnVEaXYuY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIHRoaXMubWVudURpdi5pZCA9IGlkICsgJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIGRyb3BEb3duRGl2LmFwcGVuZENoaWxkKHRoaXMubWVudURpdik7XHJcblxyXG4gICAgICB0aGlzLmFkZENsb3NlSGFuZGxlcigpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYWRkSXRlbSh0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrOiBNZW51SXRlbUZ1bmN0aW9uKSB7XHJcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGl0ZW0uaWQgPSB0aGlzLmlkICsgJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmNsYXNzTmFtZSA9ICdEcm9wRG93bk1lbnVJdGVtJztcclxuICAgICAgaXRlbS5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMuaWdub3JlRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAvLyBUT0RPIHRoZSBnbG9iYWwgaGFuZGxlciBzaG91bGQgZ2V0IHRoaXMgYnV0IGRvZXMgbm90IG9uIHBob25lc1xyXG4gICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgIH1cclxufSIsImV4cG9ydCB0eXBlIFN0YXR1c0Z1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGxldCBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWcocmFkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKDE4MCAvIE1hdGguUEkpICogcmFkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9SYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKE1hdGguUEkgLyAxODApICogZGVnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWl4KHYxOiBudW1iZXIsIHYyOiBudW1iZXIsIG1peDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuIHYxICsgY2xhbXAobWl4LCAwLCAxKSAqICh2MiAtIHYxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgKGEgPT09IHVuZGVmaW5lZCA/ICcnIDogJywnICsgYSkgKyAnKSc7XHJcbn0iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRWZWMzIH0gZnJvbSBcIi4vSW5kZXhlZFZlYzNcIjtcclxuXHJcbi8qKlxyXG4gKiBNaW5pbWFsaXN0IHdyYXBwZXIgYXJvdW5kIGEgV2ViR0wgdHJpYW5nbGUgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgIHB1YmxpYyB2MTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBpMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaTI6IG51bWJlcjtcclxuICAgcHVibGljIGkzOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihcclxuICAgICAgdmVydGljZXM6IG51bWJlcltdLFxyXG4gICAgICBub3JtYWxzOiBudW1iZXJbXSxcclxuICAgICAgaTE6IG51bWJlcixcclxuICAgICAgaTI6IG51bWJlcixcclxuICAgICAgaTM6IG51bWJlcixcclxuICAgKSB7XHJcbiAgICAgIHRoaXMudjEgPSBuZXcgSW5kZXhlZFZlYzModmVydGljZXMsIGkxKTtcclxuICAgICAgdGhpcy52MiA9IG5ldyBJbmRleGVkVmVjMyh2ZXJ0aWNlcywgaTIpO1xyXG4gICAgICB0aGlzLnYzID0gbmV3IEluZGV4ZWRWZWMzKHZlcnRpY2VzLCBpMyk7XHJcbiAgICAgIHRoaXMubjEgPSBuZXcgSW5kZXhlZFZlYzMobm9ybWFscywgaTEpO1xyXG4gICAgICB0aGlzLm4yID0gbmV3IEluZGV4ZWRWZWMzKG5vcm1hbHMsIGkyKTtcclxuICAgICAgdGhpcy5uMyA9IG5ldyBJbmRleGVkVmVjMyhub3JtYWxzLCBpMyk7XHJcbiAgICAgIHRoaXMuaTEgPSBpMTtcclxuICAgICAgdGhpcy5pMiA9IGkyO1xyXG4gICAgICB0aGlzLmkzID0gaTM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5YKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYxLngsIHRoaXMudjIueCwgdGhpcy52My54KTtcclxuICAgfVxyXG4gICBnZXQgbWluWSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MS55LCB0aGlzLnYyLnksIHRoaXMudjMueSk7XHJcbiAgIH1cclxuICAgZ2V0IG1pblooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjEueiwgdGhpcy52Mi56LCB0aGlzLnYzLnopO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MS54LCB0aGlzLnYyLngsIHRoaXMudjMueCk7XHJcbiAgIH1cclxuICAgZ2V0IG1heFkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjEueSwgdGhpcy52Mi55LCB0aGlzLnYzLnkpO1xyXG4gICB9XHJcbiAgIGdldCBtYXhaKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYxLnosIHRoaXMudjIueiwgdGhpcy52My56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGxldCB2MSA9IHRoaXMudjEudG9WZWMzKCk7XHJcbiAgICAgIGxldCB2MiA9IHRoaXMudjIudG9WZWMzKCk7XHJcbiAgICAgIGxldCB2MyA9IHRoaXMudjMudG9WZWMzKCk7XHJcblxyXG4gICAgICBsZXQgYSA9IHYyLnN1YnRyYWN0KHYxKTtcclxuICAgICAgbGV0IGIgPSB2My5zdWJ0cmFjdCh2Mik7XHJcbiAgICAgIHJldHVybiBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBJVmVjMyB9IGZyb20gXCIuL0lWZWMzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXhlZFZlYzMgaW1wbGVtZW50cyBJVmVjMyB7XHJcblxyXG4gICBwcml2YXRlIHZhbHVlczogbnVtYmVyW107XHJcbiAgIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHZhbHVlczogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDBdO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAxXTtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMl07XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDBdID0gdmFsO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDFdID0gdmFsO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9WZWMzKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjNCwgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgbWF0cml4IGZvciB1c2UgaW4gV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdDQge1xyXG4gICAvKiogVGhlIG1hdHJpeCB2YWx1ZSBzdG9yZWQgYXMgYSAxNiBlbGVtZW50IGFycmF5ICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIG1hdHJpeCB2YWx1ZXMuIElmIG5vdCBzdXBwbGllZCwgdGhlIG1hdHJpeCBpcyBcclxuICAgICogaW5pdGlhbGl6ZWQgYXMgYW4gaWRlbnRpdHkgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXQncyBhbiBpZGVudGl0eSBtYXRyaXguIFNhbWUgYXMgY3JlYXRpbmcgYSBuZXcgbWF0cml4LCBidXQgc3ludGFjdGljYWxseVxyXG4gICAgKiBzaG93cyB3aGF0IGlzIGhhcHBlbmluZy5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgbmV3IGlkZW5pdHkgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBNYXQ0IHtcclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgTWF0NCh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCB2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhIHZlY3RvciBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0Vih2ZWM6IFZlYzQpOiBWZWM0IHtcclxuICAgICAgbGV0IHZhbHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW3JvdyAqIDQgKyBjb2xdICogdmVjLnZhbHVlc1tjb2xdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHZhbHMucHVzaChzdW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgVmVjNCh2YWxzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhbm90aGVyIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBtYXRyaXguXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRNKG90aGVyOiBNYXQ0KTogTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IE1hdDQoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5nZXQocm93LCBpKSAqIG90aGVyLmdldChpLCBjb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocm93LCBjb2wsIHN1bSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEludmVydHMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnNlIG9mIHRoaXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgaW52ZXJzZSgpOiBNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgTWF0NCgpO1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUcmFuc3Bvc2VzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSBuZXcgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zcG9zZWQgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBNYXQ0IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCB0aGlzLmdldChjb2wsIHJvdykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSBzY2FsZSBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gc2NhbGUgVGhlIHNjYWxlIGZhY3RvclxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tU2NhbGUoc2NhbGU6IG51bWJlcik6IE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KFtcclxuICAgICAgICAgc2NhbGUsIDAsIDAsIDAsXHJcbiAgICAgICAgIDAsIHNjYWxlLCAwLCAwLFxyXG4gICAgICAgICAwLCAwLCBzY2FsZSwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBtYXRyaXggdGhhdCBjb250YWlucyBhIHRyYW5zbGF0aW9uIG9wZXJhdGlvbi5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHRyYW5zbGF0aW9ucy5cclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVRyYW5zbGF0aW9uKHY6IFZlYzMpOiBNYXQ0IHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgTWF0NChbXHJcbiAgICAgICAgIDEsIDAsIDAsIHYueCxcclxuICAgICAgICAgMCwgMSwgMCwgdi55LFxyXG4gICAgICAgICAwLCAwLCAxLCB2LnosXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFgoYW5nbGU6IG51bWJlcik6IE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgYywgcywgMCxcclxuICAgICAgICAgMCwgLXMsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFkoYW5nbGU6IG51bWJlcik6IE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KFtcclxuICAgICAgICAgYywgMCwgLXMsIDAsXHJcbiAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFooYW5nbGU6IG51bWJlcik6IE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBNYXQ0KFtcclxuICAgICAgICAgYywgcywgMCwgMCxcclxuICAgICAgICAgLXMsIGMsIDAsIDAsXHJcbiAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpOiBNYXQ0IHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBNYXQ0LmZyb21Sb3RYKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RZKGFuZ2xlOiBudW1iZXIpOiBNYXQ0IHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBNYXQ0LmZyb21Sb3RZKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpOiBNYXQ0IHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBNYXQ0LmZyb21Sb3RaKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBWZWMzKTogTWF0NCB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gTWF0NC5mcm9tVHJhbnNsYXRpb24ob2Zmc2V0KS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKTogTWF0NCB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gTWF0NC5mcm9tU2NhbGUoc2NhbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KGV5ZTogVmVjMywgY2VudGVyOiBWZWMzLCB1cDogVmVjMywgKTogTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYSA9IGV5ZS5zdWJ0cmFjdChjZW50ZXIpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICBsZXQgYiA9IHVwLmNyb3NzKGEpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICBsZXQgYyA9IGEuY3Jvc3MoYikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICBsZXQgbSA9IG5ldyBNYXQ0KFtcclxuICAgICAgICAgYi54LCBiLnksIGIueiwgMCxcclxuICAgICAgICAgYy54LCBjLnksIGMueiwgMCxcclxuICAgICAgICAgYS54LCBhLnksIGEueiwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHZhciB0ID0gbmV3IE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAtZXllLngsXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUueSxcclxuICAgICAgICAgMCwgMCwgMSwgLWV5ZS56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG0ubXVsdE0odCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdVBlcnNwZWN0aXZlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGZvdnkgRmllbGQgb2YgdmlldyAoaW4gZGVncmVlcykuXHJcbiAgICAqIEBwYXJhbSBhc3BlY3QgVmlldyBhc3BlY3QgcmF0aW8uXHJcbiAgICAqIEBwYXJhbSB6bmVhciBOZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBGYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VQZXJzcGVjdGl2ZShcclxuICAgICAgZm92eTogbnVtYmVyLFxyXG4gICAgICBhc3BlY3Q6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogTWF0NCB7XHJcblxyXG4gICAgICB2YXIgeW1heCA9IHpuZWFyICogTWF0aC50YW4oZm92eSAqIE1hdGguUEkgLyAzNjAuMCk7XHJcbiAgICAgIHZhciB5bWluID0gLXltYXg7XHJcbiAgICAgIHZhciB4bWluID0geW1pbiAqIGFzcGVjdDtcclxuICAgICAgdmFyIHhtYXggPSB5bWF4ICogYXNwZWN0O1xyXG5cclxuICAgICAgcmV0dXJuIE1hdDQubWFrZUZydXN0dW0oeG1pbiwgeG1heCwgeW1pbiwgeW1heCwgem5lYXIsIHpmYXIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdUZydXN0dW0uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIGJvdHRvbSBUaGUgYm90dG9tIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6bmVhciBUaGUgbmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgVGhlIGZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHJldHVybnMgdGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZUZydXN0dW0oXHJcbiAgICAgIGxlZnQ6IG51bWJlcixcclxuICAgICAgcmlnaHQ6IG51bWJlcixcclxuICAgICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICAgIHRvcDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBNYXQ0IHtcclxuXHJcbiAgICAgIHZhciBYID0gMiAqIHpuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBZID0gMiAqIHpuZWFyIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBBID0gKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIEIgPSAodG9wICsgYm90dG9tKSAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQyA9IC0oemZhciArIHpuZWFyKSAvICh6ZmFyIC0gem5lYXIpO1xyXG4gICAgICB2YXIgRCA9IC0yICogemZhciAqIHpuZWFyIC8gKHpmYXIgLSB6bmVhcik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IE1hdDQoW1xyXG4gICAgICAgICBYLCAwLCBBLCAwLFxyXG4gICAgICAgICAwLCBZLCBCLCAwLFxyXG4gICAgICAgICAwLCAwLCBDLCBELFxyXG4gICAgICAgICAwLCAwLCAtMSwgMFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVPcnRoby5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZWZ0IFRoZSBsZWZ0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gcmlnaHQgVGhlIHJpZ2h0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gYm90dG9tIFRoZSBib3R0b20gY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB0b3AgVGhlIHRvcCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpuZWFyIFRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBUaGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcmV0dXJucyB0aGUgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlT3J0aG8oXHJcbiAgICAgIGxlZnQ6IG51bWJlcixcclxuICAgICAgcmlnaHQ6IG51bWJlcixcclxuICAgICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICAgIHRvcDogbnVtYmVyLFxyXG4gICAgICBuZWFyOiBudW1iZXIsXHJcbiAgICAgIGZhcjogbnVtYmVyKTogTWF0NCB7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IE1hdDQoW1xyXG4gICAgICAgICAyIC8gKHJpZ2h0IC0gbGVmdCksIDAsIDAsIChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCksXHJcbiAgICAgICAgIDAsIDIgLyAodG9wIC0gYm90dG9tKSwgMCwgKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKSxcclxuICAgICAgICAgMCwgMCwgMiAvIChmYXIgLSBuZWFyKSwgKGZhciArIG5lYXIpIC8gKGZhciAtIG5lYXIpLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nLCBkaWdpdHM6IG51bWJlciA9IDIpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCA0OyByKyspIHtcclxuICAgICAgICAgbGV0IGxpbmUgPSBcIlwiO1xyXG4gICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDQ7IGMrKykge1xyXG4gICAgICAgICAgICBsaW5lICs9IHRoaXMuZ2V0KHIsIGMpLnRvRml4ZWQoZGlnaXRzKSArICcgJztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhsaW5lKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygpO1xyXG4gICB9XHJcblxyXG59IiwiLy8gc3BlY2lmeSBsb2FkZXIgYW5kIG9wdGlvbnMgaGVyZS4gVGhpcyB2YWx1ZSBtdXN0IG1hdGNoIHRoZVxyXG4vLyBjb250ZW50cyBvZiB3b3JrZXIuZC50c1xyXG5pbXBvcnQgTG9hZGVyV29ya2VyIGZyb20gJ3dvcmtlci1sb2FkZXI/bmFtZT1Mb2FkZXJXb3JrZXIud29ya2VyLmpzIS4vTG9hZGVyV29ya2VyJztcclxuXHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IFN0YXR1c0Z1bmN0aW9uLCB0b1JhZCB9IGZyb20gJy4vR2xvYmFscyc7XHJcbmltcG9ydCB7IGdsT2JqZWN0IH0gZnJvbSAnLi9nbE9iamVjdCc7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGRvaW5nIHRoZSB3b3JrIG9mIGxvYWRpbmcgYSBmaWxlIGludG8gYSBnbE9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1vZGVsTG9hZGVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgV2ViV29ya2VyIHRoYXQgZG9lcyB0aGUgZG93bmxvYWQgYW5kIHByb2Nlc3NpbmdcclxuICAgICovXHJcbiAgIHByaXZhdGUgd29ya2VyOiBMb2FkZXJXb3JrZXI7XHJcblxyXG4gICAvKipcclxuICAgICogTG9hZHMgYSBmaWxlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZmlsZSBUaGUgZmlsZSB1cmwgdG8gbG9hZFxyXG4gICAgKiBAcGFyYW0gdXBkYXRlU3RhdHVzIENhbGxiYWNrIHRoYXQgaXMgbm90aWZpZWQgb2YgcHJvZ3Jlc3NcclxuICAgICogQHJldHVybnMgVHJpYW5nbGVPYmogcHJvbWlzZVxyXG4gICAgKi9cclxuICAgcHVibGljIGxvYWRNb2RlbEZpbGUoZmlsZTogc3RyaW5nLCB1cGRhdGVTdGF0dXM6IFN0YXR1c0Z1bmN0aW9uKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFRyaWFuZ2xlT2JqPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAvLyBpZiBhIHByZXZpb3VzIHdvcmtlciBleGlzdHMsIGNsb3NlIGl0XHJcbiAgICAgICAgIGlmICh0aGlzLndvcmtlcikge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMud29ya2VyID0gbmV3IExvYWRlcldvcmtlcigpO1xyXG4gICAgICAgICBsZXQgdFN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgdGhpcy53b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9OiB7IGRhdGE6IGFueSB9KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGF2b2lkIGZsYXNoaW5nIG1lc3NhZ2VzIGZvciB0aGluZ3MgdGhhdCBoYXBwZW4gdmVyeSBxdWlja2x5LlxyXG4gICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRTdGFydCA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0dXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IHRPYmogPSBUcmlhbmdsZU9iai5mcm9tRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgIHVwZGF0ZVN0YXR1cygnJyk7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLndvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgdGhpcy53b3JrZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICByZXNvbHZlKHRPYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgICB0aGlzLndvcmtlci5wb3N0TWVzc2FnZShmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcmllbnQobW9kZWw6IGdsT2JqZWN0KSB7XHJcblxyXG4gICAgICAvLyBvcmllbnQgZWFjaCBmaWxlIHNvIHRoYXQgaXQgaXMgZmFjaW5nIGZvcndhcmRcclxuICAgICAgbGV0IG5hbWUgPSBtb2RlbC5uYW1lLnNwbGl0KCcuJylbMF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgIGNhc2UgJ3NrdWxsMSc6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFgodG9SYWQoOTApKTtcclxuICAgICAgICAgICAgbW9kZWwucm90WSh0b1JhZCgxODApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdwZWx2aXMnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDExKSk7XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFoodG9SYWQoLTg3KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAnd29sZic6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoLTE0MCkpO1xyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdzaGVlcGhlYWQnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RZKHRvUmFkKC0xNjApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdwb3NlMSc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAndGVhcG90JzpcclxuICAgICAgICAgICAgbW9kZWwucm90WSh0b1JhZCg5MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoMTgwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IERyb3BEb3duTWVudSwgU3ViTWVudSB9IGZyb20gXCIuL0Ryb3BEb3duTWVudVwiO1xyXG5cclxudHlwZSBMb2FkTW9kZWxGdW5jdGlvbiA9IChmaWxlOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZWxzRHJvcERvd25NZW51KHBhcmVudDogSFRNTEVsZW1lbnQsIGxvYWRNb2RlbDogTG9hZE1vZGVsRnVuY3Rpb24pOiBEcm9wRG93bk1lbnUge1xyXG5cclxuICAgbGV0IHN1Yk1lbnU6IFN1Yk1lbnU7XHJcbiAgIGxldCBtZW51ID0gbmV3IERyb3BEb3duTWVudShwYXJlbnQsICdNb2RlbHMnLCAnTW9kZWxEcm9wRG93bicpO1xyXG4gICBtZW51LmFkZEl0ZW0oJ0ZlbWFsZSBQb3NlJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlMS5ibG9iJykpO1xyXG4gICBtZW51LmFkZEl0ZW0oJ0ZlbWFsZSBIZWFkJywgKCkgPT4gbG9hZE1vZGVsKCdGZW1hbGVIZWFkLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMScsICgpID0+IGxvYWRNb2RlbCgnU2t1bGwxLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMicsICgpID0+IGxvYWRNb2RlbCgnU2t1bGwyLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMycsICgpID0+IGxvYWRNb2RlbCgnU2t1bGwzLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnUGVsdmlzJywgKCkgPT4gbG9hZE1vZGVsKCdQZWx2aXMuYmxvYicpKTtcclxuICAgbWVudS5hZGRJdGVtKCdIZWFkIEVjb3JjaGUnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWRFY29yY2hlLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnQXJub2xkJywgKCkgPT4gbG9hZE1vZGVsKCdBcm5vbGQuYmxvYicpKTtcclxuICAgbWVudS5hZGRJdGVtKCdUZWFwb3QnLCAoKSA9PiBsb2FkTW9kZWwoJ1RlYXBvdC5ibG9iJykpO1xyXG5cclxuICAgc3ViTWVudSA9IG1lbnUuYWRkU3ViTWVudSgnUG9zZXMnLCAnSGVhZHNTdWJNZW51Jyk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAyJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAzJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAzLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA0JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA0LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA1JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA2JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA2LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA3JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA3LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA4JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA4LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA5JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA5LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMCcsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTAuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDExJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxMS5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTInLCAoKSA9PiBsb2FkTW9kZWwoJ1Bvc2VfMDEyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMycsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTMuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDE0JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxNC5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTUnLCAoKSA9PiBsb2FkTW9kZWwoJ1Bvc2VfMDE1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxNicsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTYuYmxvYicpKTtcclxuXHJcbiAgIHN1Yk1lbnUgPSBtZW51LmFkZFN1Yk1lbnUoJ0hlYWRzJywgJ0hlYWRzU3ViTWVudScpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgMScsICgpID0+IGxvYWRNb2RlbCgnSGVhZDEuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDInLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCAzJywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkMy5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgNCcsICgpID0+IGxvYWRNb2RlbCgnSGVhZDQuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDUnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQ1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA2JywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkNi5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgNycsICgpID0+IGxvYWRNb2RlbCgnSGVhZDcuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDgnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQ4LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA5JywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkOS5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgMTAnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQxMC5ibG9iJykpO1xyXG5cclxuICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBQYXRoVHJhY2VyUmVuZGVyZXIsIFJlbmRlck1vZGUgfSBmcm9tIFwiLi9QYXRoVHJhY2VyUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgTWF0NCB9IGZyb20gXCIuL01hdFwiO1xyXG5pbXBvcnQgeyBVbmlmb3JtcyB9IGZyb20gXCIuL1VuaWZvcm1zXCI7XHJcbmltcG9ydCB7IFNwaGVyaWNhbENvb3JkIH0gZnJvbSBcIi4vU3BoZXJpY2FsQ29vcmRcIjtcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCI7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIH0gZnJvbSBcIi4vZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVwiO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iakZpbGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9iakZpbGVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmpCdWlsZGVyIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpCdWlsZGVyXCI7XHJcblxyXG5sZXQgc2tpblRvbmVzID0gW1xyXG4gICBuZXcgaHRtbENvbG9yKFsyNDAsIDIyMywgMjE0XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzI1NSwgMjE4LCAyMDBdKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMjMyLCAxNzksIDExN10pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxOTAsIDEzNiwgODddKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFsxMTUsIDkxLCA1OV0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxMzksIDczLCA2NV0pXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTMyLCA1NSwgMzRdKSxcclxuICAgLy9uZXcgaHRtbENvbG9yKFs2MSwgMTIsIDJdKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFszOCwgNywgMV0pXHJcbl07XHJcblxyXG5lbnVtIFBvaW50ZXJNb2RlIHtcclxuICAgVmlldyxcclxuICAgTGlnaHQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyQXBwIHtcclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHB1YmxpYyByZW5kZXJlcjogUGF0aFRyYWNlclJlbmRlcmVyO1xyXG4gICBwcml2YXRlIG1vZGVsdmlldzogTWF0NDtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uOiBNYXQ0O1xyXG4gICBwcml2YXRlIG1vZGVsdmlld1Byb2plY3Rpb246IE1hdDQ7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGU6IFBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZVNwZWNpYWwgPSBmYWxzZTtcclxuICAgcHJpdmF0ZSBwb3M6IFNwaGVyaWNhbENvb3JkO1xyXG4gICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBwcml2YXRlIGludGVuc2l0eVNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGxpZ2h0Q29sb3JTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBiYWxsQ29sb3JTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBhbWJpZW50SW50ZW5zaXR5U2xpZGVyOiBTbGlkZXI7XHJcblxyXG4gICBwcml2YXRlIGFuZ2xlWCA9IDAuNTtcclxuICAgcHJpdmF0ZSBhbmdsZVkgPSAwLjc1O1xyXG4gICBwcml2YXRlIHpvb21aID0gMy41O1xyXG5cclxuICAgcHJpdmF0ZSBtb3VzZURvd24gPSBmYWxzZTtcclxuICAgcHJpdmF0ZSBvbGRYOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgb2xkWTogbnVtYmVyO1xyXG5cclxuICAgcHJpdmF0ZSBsYXN0VGltZXM6IG51bWJlcltdID0gW107XHJcbiAgIHByaXZhdGUgcmVhZG9ubHkgTUFYX1NBTVBMRVMgPSA1MDA7XHJcblxyXG4gICBwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocXVlcnk6IHN0cmluZykge1xyXG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wb25lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuY2FudmFzLmlkID0gJ2NhbnZhcyc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICBsZXQgY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xyXG5cclxuICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgIC8vIFRPRE8gZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgbm90IGJlaW5nIGFibGUgdG8gY3JlYXRlIGEgV2ViR0wgY29udGV4dFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBnZXQgV2ViR0wgY29udGV4dFwiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdsID0gY29udGV4dDtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9udG91Y2hzdGFydCA9IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25Eb3duKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNobW92ZSA9IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICB0aGlzLm9uTW92ZShldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9udG91Y2hlbmQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5vbkRvd24oZXZlbnQueCwgZXZlbnQueSk7XHJcblxyXG4gICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdGlvbiBiZWNhdXNlIGRyYWdnaW5nIGlzIHVzZWQgZm9yIHJvdGF0aW5nIHRoZSBjYW1lcmEgYW5kIG1vdmluZyBvYmplY3RzXHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZW1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5vbk1vdmUoZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2V1cCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9hZE1vZGVsKHRoaXMucXVlcnkpLnRoZW4oKHRPYmo6IFRyaWFuZ2xlT2JqKSA9PiB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUGF0aFRyYWNlclJlbmRlcmVyKHRoaXMuZ2wsIHRPYmopO1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IGRyYXdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRyYXdUaW1lLmlkID0gJ2RyYXdUaW1lJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUaW1lKTtcclxuXHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBidXR0b24uaWQgPSAnbW9kZUJ1dHRvbic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyc7XHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgc3dpdGNoICh0aGlzLnBvaW50ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuVmlldzpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdMaWdodCc7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5MaWdodDtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLkxpZ2h0OlxyXG4gICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICAgIGxldCBwcm9ncmVzc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHByb2dyZXNzU3Bhbi5pZCA9ICdwcm9ncmVzc1NwYW4nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NTcGFuKTtcclxuXHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0SW50ZW5zaXR5JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBJbnRlbnNpdHknLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ID0gdGhpcy5pbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gYnVpbGQgYSByYW5nZSBvZiBjb2xvcnNcclxuICAgICAgbGV0IG1pbiA9IDIwMDA7XHJcbiAgICAgIGxldCBtYXggPSAxMDAwMDtcclxuICAgICAgbGV0IGNvbG9yczogaHRtbENvbG9yW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ZW1wID0gbWluICsgKGkgLyA5KSAqIChtYXggLSBtaW4pO1xyXG4gICAgICAgICBjb2xvcnMucHVzaChnbENvbG9yV2l0aFRlbXBlcmF0dXJlLmNyZWF0ZSh0ZW1wKS50b0h0bWxDb2xvcigpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0Q29sb3InLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0IENvbG9yJyxcclxuICAgICAgICAgbWluOiAyMDAwLFxyXG4gICAgICAgICBtYXg6IDEwMDAwLFxyXG4gICAgICAgICB2YWx1ZTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS5kYXlsaWdodC50ZW1wZXJhdHVyZSxcclxuICAgICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4geyByZXR1cm4gc2xpZGVyLnZhbHVlLnRvRml4ZWQoKSArIFwiS1wiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBhcHBseSB0aGUgaW5pdGlhbCBjb2xvcnNcclxuICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcblxyXG4gICAgICB0aGlzLmJhbGxDb2xvclNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQmFsbENvbG9yJyxcclxuICAgICAgICAgbGFiZWw6ICdCYWxsIENvbG9yJyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IDUwLFxyXG4gICAgICAgICBjb2xvcnM6IHNraW5Ub25lcyxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICBVbmlmb3Jtcy51T2JqQ29sb3IgPSB0aGlzLmJhbGxDb2xvclNsaWRlci5nbENvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBnbCBtYXRjaGVzIHRoZSBpbml0aWFsIFVJIHNldHRpbmdcclxuICAgICAgVW5pZm9ybXMudU9iakNvbG9yID0gdGhpcy5iYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuXHJcbiAgICAgIHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQW1iaWVudEludGVuc2l0eScsXHJcbiAgICAgICAgIGxhYmVsOiAnQW1iaWVudCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSA9IHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGxvYWRNb2RlbChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3NwaGVyZScpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICBsZXQgcmFkaXVzID0gMC41O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IFZlYzMoWzAsIHJhZGl1cywgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iakJ1aWxkZXIoKTtcclxuICAgICAgICAgdE9iai5hZGRTcGhlcmUoOCwgcmFkaXVzLCBjZW50ZXIpO1xyXG4gICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAnY3ViZScpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IDAuODtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBWZWMzKFswLCBzaXplIC8gMi4wLCAwXSk7XHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqQnVpbGRlcigpO1xyXG4gICAgICAgICB0T2JqLmFkZEN1YmUoc2l6ZSwgY2VudGVyKTtcclxuICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLm9iaicpKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsUmFkaXVzID0gMDtcclxuICAgICAgICAgcmV0dXJuIGZldGNoKHF1ZXJ5KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmpGaWxlKHF1ZXJ5LCByZXMpO1xyXG4gICAgICAgICAgICAgICBsZXQgc2l6ZSA9IDEuNTtcclxuICAgICAgICAgICAgICAgdE9iai5hdXRvQ2VudGVyKHNpemUpO1xyXG4gICAgICAgICAgICAgICB0T2JqLnRyYW5zbGF0ZShuZXcgVmVjMyhbMCwgdE9iai5oZWlnaHQgLyAyLCAwXSkpO1xyXG4gICAgICAgICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0TGlnaHRDb2xvcigpIHtcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY29sb3JzIGZvciB0aGUgaW50ZW5zaXR5IHNsaWRlclxyXG4gICAgICB0aGlzLmludGVuc2l0eVNsaWRlci5jb2xvcnMgPSBbaHRtbENvbG9yLmJsYWNrLCB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIuaHRtbENvbG9yXTtcclxuXHJcbiAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW4gcmVuZGVyaW5nXHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodENvbG9yID0gdGhpcy5saWdodENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRvd24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGVTcGVjaWFsID0gKHggPCAwLjEgKiB0aGlzLmNhbnZhcy53aWR0aCkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICB0aGlzLm9sZFkgPSB5O1xyXG5cclxuICAgICAgdGhpcy5wb3MgPSBTcGhlcmljYWxDb29yZC5mcm9tWFlaKFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMpO1xyXG5cclxuICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcclxuICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLlZpZXcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy56b29tWiA9IGNsYW1wKHRoaXMuem9vbVosIDEsIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFuZ2xlcyBiYXNlZCBvbiBob3cgZmFyIHdlIG1vdmVkIHNpbmNlIGxhc3QgdGltZVxyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWSAtPSAoeCAtIHRoaXMub2xkWCkgKiAwLjAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCArPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAxO1xyXG5cclxuICAgICAgICAgICAgICAgLy8gZG9uJ3QgZ28gdXBzaWRlIGRvd25cclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggPSBNYXRoLm1heCh0aGlzLmFuZ2xlWCwgLU1hdGguUEkgLyAyICsgMC4wMSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5taW4odGhpcy5hbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5MaWdodCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyAtPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAwNTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MucmFkaXVzID0gY2xhbXAodGhpcy5wb3MucmFkaXVzLCBVbmlmb3Jtcy51QmFsbFJhZGl1cyArIDAuNSwgNSk7XHJcbiAgICAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMgPSB0aGlzLnBvcy50b1hZWigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yb3RhdGlvbkFuZ2xlICs9ICh4IC0gdGhpcy5vbGRYKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgKz0gKHkgLSB0aGlzLm9sZFkpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSA9IGNsYW1wKHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlLCAwLCAxODApO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBjbGVhciB0aGUgc2FtcGxlIGJ1ZmZlclxyXG4gICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlbWVtYmVyIHRoaXMgY29vcmRpbmF0ZVxyXG4gICAgICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICAgICB0aGlzLm9sZFkgPSB5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgLy8gVE9ETyBoYW5kbGUgdGhpcyB3aXRoaW4gdGhlIFBhdGhUcmFjZXIgY2xhc3Mgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGhhcmQgY29kZSB2aWV3IHN0dWZmXHJcbiAgICAgIGxldCBzaXplID0gMC4yICogdGhpcy5jYW52YXMud2lkdGg7XHJcblxyXG4gICAgICBpZiAoeSA8IHNpemUpIHtcclxuXHJcbiAgICAgICAgIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAxICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMiAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDMgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucmVuZGVyZXIucmVuZGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQXJ0aXN0OlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5DaHJvbWE6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ2hyb21hIFZpZXc6IHJlZD1oaWdoZXN0IGNocm9tYVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5WYWx1ZTpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJWYWx1ZSBWaWV3XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkJhbmRzOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIjUgQ29sb3IgKyBIaWdobGlnaHQgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVRleHR1cmUoKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gTWF0NC5tYWtlTG9va0F0KFxyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLFxyXG4gICAgICAgICBuZXcgVmVjMyhbMCwgMSwgMF0pLCAgLy8gY2VudGVyIHBvaW50XHJcbiAgICAgICAgIG5ldyBWZWMzKFswLCAxLCAwXSkgICAvLyB1cCB2ZWN0b3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IE1hdDQubWFrZVBlcnNwZWN0aXZlKDU1LCAxLCAwLjEsIDEwMCk7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdGlvbi5tdWx0TSh0aGlzLm1vZGVsdmlldyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudXBkYXRlVGV4dHVyZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24pO1xyXG4gICB9O1xyXG5cclxuICAgcHJpdmF0ZSBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc3dhcChwb3MpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdGljaygpIHtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgIGlmIChVbmlmb3Jtcy51U2FtcGxlIDwgdGhpcy5NQVhfU0FNUExFUykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1swXSA9IHRoaXMuem9vbVogKiBNYXRoLnNpbih0aGlzLmFuZ2xlWSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWCk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzFdID0gdGhpcy56b29tWiAqIE1hdGguc2luKHRoaXMuYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMl0gPSB0aGlzLnpvb21aICogTWF0aC5jb3ModGhpcy5hbmdsZVkpICogTWF0aC5jb3ModGhpcy5hbmdsZVgpO1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUaW1lckxhYmVsKCkge1xyXG5cclxuICAgICAgbGV0IHQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIGxldCBkcmF3VGltZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdUaW1lJyk7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RUaW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIGxldCBlbGFwc2VkTXMgPSAodCAtIHRoaXMubGFzdFRpbWVzWzBdKSAvIHRoaXMubGFzdFRpbWVzLmxlbmd0aDtcclxuICAgICAgICAgZHJhd1RpbWVMYWJlbC5pbm5lclRleHQgPSBlbGFwc2VkTXMudG9GaXhlZCgwKSArICdtcyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0VGltZXMucHVzaCh0KTtcclxuICAgICAgaWYgKHRoaXMubGFzdFRpbWVzLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgIHRoaXMubGFzdFRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyYXdUaW1lTGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9IFVuaWZvcm1zLnVTYW1wbGUgPCB0aGlzLk1BWF9TQU1QTEVTID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IFVuaWZvcm1zLnVTYW1wbGUgLyB0aGlzLk1BWF9TQU1QTEVTO1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc1NwYW4nKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgIGxldCB3ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUucmlnaHQgPSB3ICogKDEgLSBwcm9ncmVzcykgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE1hdDQgfSBmcm9tICcuL01hdCc7XHJcbmltcG9ydCB7IFZlYzMsIFZlYzQgfSBmcm9tICcuL1ZlYyc7XHJcbmltcG9ydCB0b1NjcmVlblZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVWZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvVGV4dHVyZUZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSAnLi9Db2xvclJhbmdlJztcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tICcuL1VuaWZvcm1zJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gJy4vUHJvZmlsZXInO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tICcuL2dsVW5pZm9ybSc7XHJcbmltcG9ydCB7IGdsQ29tcGlsZXIgfSBmcm9tICcuL2dsQ29tcGlsZXInO1xyXG5pbXBvcnQgeyBDb2xvckFuYWx5emVyIH0gZnJvbSAnLi9Db2xvckFuYWx5emVyJztcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tICcuL1RyaWFuZ2xlT2JqJztcclxuaW1wb3J0IHsgZ2xVbmlmb3JtQmxvY2sgfSBmcm9tICcuL2dsVW5pZm9ybUJsb2NrJztcclxuaW1wb3J0IHsgZ2xUZXh0dXJlLCBnbFRleHR1cmVTdHlsZSB9IGZyb20gJy4vZ2xUZXh0dXJlJztcclxuaW1wb3J0IHsgZ2xGcmFtZUJ1ZmZlciB9IGZyb20gJy4vZ2xGcmFtZUJ1ZmZlcic7XHJcblxyXG4vKipcclxuICogUmVuZGVyaW5nIG1vZGUgZm9yIGRpc3BsYXlpbmcgdGhlIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlbmRlck1vZGUge1xyXG4gICBBcnRpc3QgPSAwLFxyXG4gICBWYWx1ZSA9IDEsXHJcbiAgIENocm9tYSA9IDIsXHJcbiAgIEJhbmRzID0gMyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgZG9lcyB0aGUgd29yayBvZiBidWlsZGluZyB0aGUgUGF0aCBUcmFjZWQgdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXJSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBnbEZyYW1lQnVmZmVyO1xyXG4gICBwcml2YXRlIHJlbmRlclRleHR1cmU6IGdsVGV4dHVyZTtcclxuICAgcHJpdmF0ZSB0ZXh0dXJlczogZ2xUZXh0dXJlW107XHJcbiAgIHByaXZhdGUgdG9TY3JlZW5Qcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB0b1RleHR1cmVQcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdG9UZXh0dXJlVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgYW5hbHl6ZXI6IENvbG9yQW5hbHl6ZXI7XHJcblxyXG4gICBwcml2YXRlIG1haW5WaWV3ID0gUmVuZGVyTW9kZS5BcnRpc3Q7XHJcbiAgIHByaXZhdGUgc21hbGxWaWV3cyA9IFtcclxuICAgICAgUmVuZGVyTW9kZS5DaHJvbWEsXHJcbiAgICAgIFJlbmRlck1vZGUuVmFsdWUsXHJcbiAgICAgIFJlbmRlck1vZGUuQmFuZHMsXHJcbiAgIF07XHJcblxyXG4gICBwcml2YXRlIHZlcnRpY2VzID0gW1xyXG4gICAgICAtMSwgLTEsXHJcbiAgICAgIC0xLCArMSxcclxuICAgICAgKzEsIC0xLFxyXG4gICAgICArMSwgKzFcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgZ2xDdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIHRPYmo6IFRyaWFuZ2xlT2JqXHJcbiAgICkge1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgLy8gbGFyZ2VyIHRleHR1cmUgaXMgaGlnaGVyIHJlc29sdXRpb24sIGJ1dCB0YWtlcyBsb25nZXIgdG8gY29tcHV0ZVxyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplID0gMjU2O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSA1MTI7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDI1NjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuYWx5emVyID0gbmV3IENvbG9yQW5hbHl6ZXIoVW5pZm9ybXMudVRleHR1cmVTaXplKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB2ZXJ0ZXggYnVmZmVyIC0gdGhlIGJsb2NrIHdlJ2xsIGRyYXcgb3VyIHJlbmRlcmVkIHRleHR1cmUgb25cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBmcmFtZWJ1ZmZlclxyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyID0gbmV3IGdsRnJhbWVCdWZmZXIoXHJcbiAgICAgICAgIGdsLFxyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsXHJcbiAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyVGV4dHVyZSA9IHRoaXMuZnJhbWVCdWZmZXIuY3JlYXRlVGV4dHVyZShnbFRleHR1cmVTdHlsZS5GbG9hdCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdHdvIHRleHR1cmVzLiBPbmUgd2UgZGlzcGxheSBhbmQgb25lIHdlIGRyYXcgdG9cclxuICAgICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2godGhpcy5mcmFtZUJ1ZmZlci5jcmVhdGVUZXh0dXJlKGdsVGV4dHVyZVN0eWxlLkNvbG9yKSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBjcmVhdGUgdG9TY3JlZW4gc2hhZGVyXHJcbiAgICAgIHRoaXMudG9TY3JlZW5Qcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKGdsLCB0b1NjcmVlblZlcnRleFNvdXJjZSwgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSk7XHJcbiAgICAgIHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRvU2NyZWVuUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvU2NyZWVuVmVydGV4QXR0cmlidXRlKTtcclxuXHJcbiAgICAgIHRoaXMuY29tcGlsZVNoYWRlcih0T2JqKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb21waWxlU2hhZGVyKHRPYmo/OiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgLy8gY3JlYXRlIHRoZSB0b1RleHR1cmUgc2hhZGVyXHJcbiAgICAgIGlmICh0T2JqICYmIHRPYmoubnVtVHJpYW5nbGVzID4gMCkge1xyXG4gICAgICAgICB0aGlzLnRvVGV4dHVyZVByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoXHJcbiAgICAgICAgICAgIGdsLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVWZXJ0ZXhTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcjdmVyc2lvbiAzMDAgZXMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnTk9USElORycsICdVU0VfVFJJQU5HTEVTJyksXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZUZyYWdtZW50U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnI3ZlcnNpb24gMzAwIGVzJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJ05PVEhJTkcnLCAnVVNFX1RSSUFOR0xFUycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8TlVNX1ZFUlRJQ0VTPicsIHRPYmoubnVtVmVydGljZXMudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVk9MVU1FUz4nLCB0T2JqLnZvbHVtZXMubGVuZ3RoLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8TlVNX1RSSUFOR0xFUz4nLCB0T2JqLm51bVRyaWFuZ2xlcy50b1N0cmluZygpKVxyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgLy8gdXBsb2FkIHRyaWFuZ2xlcyB0byB0aGUgR1BVXHJcbiAgICAgICAgIHRoaXMudXBsb2FkVW5pZm9ybXModE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgZ2wsXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZVZlcnRleFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJycpLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVGcmFnbWVudFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJycpXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudG9UZXh0dXJlVmVydGV4QXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy50b1RleHR1cmVQcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudG9UZXh0dXJlVmVydGV4QXR0cmlidXRlKTtcclxuICAgICAgcC5sb2coJ2NvbXBpbGUnKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFVwbG9hZHMgYWxsIHRoZSB0cmlhbmdsZSBkYXRhIHRvIFdlYkdMXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcHJvZ3JhbSBUaGUgcHJvZ3JhbSB0byB1cGxvYWQgdG9cclxuICAgICovXHJcbiAgIHByaXZhdGUgdXBsb2FkVW5pZm9ybXModE9iajogVHJpYW5nbGVPYmopIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2wgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICAgIC8vIHVwbG9hZCB0aGUgYmlnIGNodW5rcyBhcyBVbmlmb3JtIEJsb2Nrc1xyXG4gICAgICBsZXQgYmxvY2tCaW5kaW5nID0gMjtcclxuICAgICAgbGV0IHZCbG9jayA9IG5ldyBnbFVuaWZvcm1CbG9jayhnbCwgdGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlWZXJ0aWNlc0Jsb2NrJywgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIC8vIHB1dCB0aGUgZGF0YSBpbnRvIGEgRmxvYXQzMkFycmF5IGZvciB1cGxvYWRpbmdcclxuICAgICAgbGV0IHZEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0T2JqLm51bVZlcnRpY2VzICogNCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIHZEYXRhWzQgKiBpICsgMF0gPSB0T2JqLnZlcnRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIHZEYXRhWzQgKiBpICsgMV0gPSB0T2JqLnZlcnRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIHZEYXRhWzQgKiBpICsgMl0gPSB0T2JqLnZlcnRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIHZEYXRhWzQgKiBpICsgM10gPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHZCbG9jay51cGxvYWQodkRhdGEpO1xyXG5cclxuICAgICAgYmxvY2tCaW5kaW5nID0gMztcclxuICAgICAgbGV0IHRCbG9jayA9IG5ldyBnbFVuaWZvcm1CbG9jayhnbCwgdGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlUcmlhbmdsZXNCbG9jaycsIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICAvLyBwdXQgdGhlIGRhdGEgaW50byBhIEZsb2F0MzJBcnJheSBmb3IgdXBsb2FkaW5nXHJcbiAgICAgIGxldCB0RGF0YSA9IG5ldyBJbnQzMkFycmF5KHRPYmoubnVtVHJpYW5nbGVzICogNCk7XHJcbiAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgdE9iai52b2x1bWVzLmxlbmd0aDsgdisrKSB7XHJcbiAgICAgICAgIGxldCB2b2wgPSB0T2JqLnZvbHVtZXNbdl07XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdm9sLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdCA9IHZvbC50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgIHREYXRhW2luZGV4KytdID0gdC5pMTtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmkyO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaTM7XHJcbiAgICAgICAgICAgIHREYXRhW2luZGV4KytdID0gMDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRCbG9jay51cGxvYWQodERhdGEpO1xyXG5cclxuICAgICAgLy8gVXBsb2FkIHRoZSB2b2x1bWUgaW5mbyBhcyBhIHN0YW5kYXJkIHVuaWZvcm1cclxuICAgICAgbGV0IHVuaSA9IG5ldyBnbFVuaWZvcm0oZ2wsIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRPYmoudm9sdW1lc1tpXTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5zdGFydEluZGV4Jywgc3RhcnRJbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10ubnVtVHJpYW5nbGVzJywgdm9sLnRyaWFuZ2xlcy5sZW5ndGgsIHRydWUpO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1pbicsIHZvbC5ib3hNaW4pO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1heCcsIHZvbC5ib3hNYXgpO1xyXG4gICAgICAgICBzdGFydEluZGV4ICs9IHZvbC50cmlhbmdsZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNaW4nLCB0T2JqLmJveE1pbik7XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNYXgnLCB0T2JqLmJveE1heCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgcmVuZGVyTW9kZSgpOiBSZW5kZXJNb2RlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpblZpZXc7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlID0gMDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRFeWVSYXkobWF0cml4OiBNYXQ0LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFZlYzMge1xyXG4gICAgICBsZXQgdmVjID0gbmV3IFZlYzQoW3gsIHksIDAsIDFdKTtcclxuICAgICAgcmV0dXJuIG1hdHJpeC5tdWx0Vih2ZWMpLmRpdmlkZUJ5VygpLnN1YnRyYWN0KFVuaWZvcm1zLnVFeWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZShtb2RlbHZpZXdQcm9qZWN0aW9uOiBNYXQ0KTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgLy8gaW1wbGVtZW50IGFsaWFzaW5nIGJ5IHJhbmRvbSBzYW1wbGluZyB3aXRoaW4gYSBwaXhlbFxyXG4gICAgICBsZXQgeCA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gVW5pZm9ybXMudVRleHR1cmVTaXplO1xyXG4gICAgICBsZXQgeSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gVW5pZm9ybXMudVRleHR1cmVTaXplO1xyXG4gICAgICBsZXQgeiA9IDA7XHJcblxyXG4gICAgICBsZXQgdiA9IG5ldyBWZWMzKFt4LCB5LCB6XSk7XHJcbiAgICAgIGxldCBqaXR0ZXIgPSBNYXQ0LmZyb21UcmFuc2xhdGlvbih2KTtcclxuICAgICAgbGV0IG1hdHJpeCA9IGppdHRlci5tdWx0TShtb2RlbHZpZXdQcm9qZWN0aW9uKS5pbnZlcnNlKCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy51UmF5MDAgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsIC0xLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMSA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsICsxKTtcclxuICAgICAgVW5pZm9ybXMudVJheTEwID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCArMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTEgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsICsxLCArMSk7XHJcbiAgICAgIC8vIHNldCB1bmlmb3Jtc1xyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybShnbCwgdGhpcy50b1RleHR1cmVQcm9ncmFtKTtcclxuICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcblxyXG4gICAgICAvLyByZW5kZXIgdG8gdGV4dHVyZVxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSk7XHJcbiAgICAgIHRoaXMudGV4dHVyZXNbMF0uYmluZCgpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyLmJpbmQoKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLmdldCgpLCAwKTtcclxuXHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5hbmFseXplci5ydW4oZ2wsIFVuaWZvcm1zLnVMaWdodEFscGhhLCBVbmlmb3Jtcy51U2hhZG93QWxwaGEpO1xyXG4gICAgICBVbmlmb3Jtcy51TWF4Q2hyb21hID0gZGF0YS5tYXhDaHJvbWE7XHJcblxyXG4gICAgICBsZXQgY3IgPSBuZXcgQ29sb3JSYW5nZShbZGF0YS5kYXJrZXN0TGlnaHRDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmF2Z0xpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKV0pO1xyXG4gICAgICBVbmlmb3Jtcy51SGlnaGxpZ2h0Q29sb3IgPSBkYXRhLmhpZ2hsaWdodENvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51TGlnaHRMaWdodENvbG9yID0gY3IuZ2V0KDAuODUpLnRvR2xDb2xvcigpO1xyXG4gICAgICBVbmlmb3Jtcy51TWlkTGlnaHRDb2xvciA9IGNyLmdldCgwLjUpLnRvR2xDb2xvcigpO1xyXG4gICAgICBVbmlmb3Jtcy51RGFya0xpZ2h0Q29sb3IgPSBjci5nZXQoMC4xNSkudG9HbENvbG9yKCk7XHJcblxyXG4gICAgICBjciA9IG5ldyBDb2xvclJhbmdlKFtkYXRhLmRhcmtlc3RTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmF2Z1NoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpXSk7XHJcbiAgICAgIC8vVW5pZm9ybXMudVNoYWRvd0NvbG9yID0gZGF0YS50ZXJtaW5hdG9yQ29sb3I7XHJcbiAgICAgIFVuaWZvcm1zLnVTaGFkb3dDb2xvciA9IGRhdGEuYXZnU2hhZG93Q29sb3I7XHJcbiAgICAgIFVuaWZvcm1zLnVSZWZsZWN0ZWRMaWdodENvbG9yID0gY3IuZ2V0KDEpLnRvR2xDb2xvcigpO1xyXG4gICAgICBVbmlmb3Jtcy51RGFya0FjY2VudENvbG9yID0gY3IuZ2V0KDAuMCkudG9HbENvbG9yKCk7XHJcblxyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgLy8gcGluZyBwb25nIHRleHR1cmVzXHJcbiAgICAgIHRoaXMudGV4dHVyZXMucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgVW5pZm9ybXMudVNhbXBsZSsrO1xyXG4gICAgICBVbmlmb3Jtcy51UmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAvLyBzaXplIG9mIHRoZSBhY3R1YWwgY2FudmFzLiBUaGUgdGV4dHVyZSB3ZSBjcmVhdGUgaXMgZHJhd24gdG8gdGhpcyBpdGVtXHJcbiAgICAgIGxldCBzaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgLy8gbm90IHN1cmUgd2h5LCBidXQgdGhpcyBiYXNpY2FsbHkgYmVjb21lcyBmdWxsIHdpZHRoIG9uIG15IHBob25lXHJcbiAgICAgICAgIHNpemUgPSA1MTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMudG9TY3JlZW5Qcm9ncmFtKTtcclxuICAgICAgdGhpcy50ZXh0dXJlc1swXS5iaW5kKCk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKGdsLCB0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIFVuaWZvcm1zLnVTY2FsZSA9IDEuMDtcclxuICAgICAgVW5pZm9ybXMudVhPZmZzZXQgPSAwLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMubWFpblZpZXc7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIHNtYWxsZXIgdmlld3NcclxuICAgICAgVW5pZm9ybXMudVNjYWxlID0gMC4yO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc21hbGxWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51WE9mZnNldCA9IDEuMCAtICh0aGlzLnNtYWxsVmlld3MubGVuZ3RoIC0gaSAtIDAuNSkgKiAoMiAqIFVuaWZvcm1zLnVTY2FsZSk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMS4wIC0gVW5pZm9ybXMudVNjYWxlO1xyXG4gICAgICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMuc21hbGxWaWV3c1tpXTtcclxuICAgICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcbiAgICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc21hbGxWaWV3cyA9IFtcclxuICAgICAgICAgUmVuZGVyTW9kZS5DaHJvbWEsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuVmFsdWUsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQmFuZHMsXHJcbiAgICAgIF07XHJcbiAgICAgIGlmICh0aGlzLm1haW5WaWV3ID09IHRoaXMuc21hbGxWaWV3c1twb3NdKSB7XHJcbiAgICAgICAgIHRoaXMubWFpblZpZXcgPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tYWluVmlldyA9IHRoaXMuc21hbGxWaWV3c1twb3NdO1xyXG4gICAgICAgICB0aGlzLnNtYWxsVmlld3NbcG9zXSA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IHRvUmFkLCBpc01vYmlsZSB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi9SZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSBcIi4vTWF0XCI7XHJcbmltcG9ydCB7IFZlYzQsIFZlYzIgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgVGhyZXNob2xkQ3RybCB9IGZyb20gXCIuL1RocmVzaG9sZEN0cmxcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTW9kZWxzRHJvcERvd25NZW51IH0gZnJvbSBcIi4vTW9kZWxzRHJvcERvd25NZW51XCI7XHJcbmltcG9ydCB7IE1vZGVsTG9hZGVyIH0gZnJvbSBcIi4vTW9kZWxMb2FkZXJcIjtcclxuXHJcbmVudW0gUG9pbnRlck1vZGUge1xyXG4gICBWaWV3LFxyXG4gICBMaWdodCxcclxufVxyXG5cclxuLy9jb25zdCBXSElURV9DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuY29uc3QgV0hJVEVfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1MCwgMjQyXSk7XHJcbmNvbnN0IEJMQUNLX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG4vL2NvbnN0IEJMQUNLX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMzAsIDIwLCAwXSk7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbmVzQXBwIHtcclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGU6IFBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgcHJpdmF0ZSBvdmVybGF5OiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgaGFuZGxlcjogUG9pbnRlckV2ZW50SGFuZGxlcjtcclxuXHJcbiAgIHByaXZhdGUgZGlydHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHJpdmF0ZSBoaWdobGlnaHRTbGlkZXI6IFNsaWRlclxyXG4gICBwcml2YXRlIGxpZ2h0TGlnaHRTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBtaWRMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGRhcmtMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIHNoYWRvd1NsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIHRocmVzaG9sZEN0cmw6IFRocmVzaG9sZEN0cmw7XHJcbiAgIHByaXZhdGUgbG9hZGVyID0gbmV3IE1vZGVsTG9hZGVyKCk7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocXVlcnk6IHN0cmluZykge1xyXG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wb25lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdQbGFuZXNBcHAnO1xyXG5cclxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2aWV3Q29udGFpbmVyLmlkID0gJ1ZpZXdDb250YWluZXInO1xyXG4gICAgICB2aWV3Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodmlld0NvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY3JlYXRlVmlld0VsZW1lbnRzKHZpZXdDb250YWluZXIpO1xyXG4gICAgICBkaXYuc3R5bGUud2lkdGggPSB0aGlzLmdsLmNhbnZhcy53aWR0aCArICdweCc7XHJcblxyXG4gICAgICBjb25zdCBjdHJsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjdHJsc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgY3RybHNDb250YWluZXIuaWQgPSAnQ3RybHNDb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY3RybHNDb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUN0cmxzRWxlbWVudHMoY3RybHNDb250YWluZXIpO1xyXG5cclxuICAgICAgdGhpcy5sb2FkTW9kZWwodGhpcy5xdWVyeSk7XHJcblxyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZVZpZXdFbGVtZW50cyhwYXJlbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy5pZCA9ICdNYWluQ2FudmFzJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5vdmVybGF5LmlkID0gJ092ZXJsYXknO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuXHJcbiAgICAgIGxldCBzaXplID0gNTEyO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgY2FudmFzLndpZHRoID0gc2l6ZTtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHNpemU7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5saW5lSGVpZ2h0ID0gc2l6ZSArICdweCc7IC8vIHZlcnRpY2FsbHkgY2VudGVyIHRleHRcclxuXHJcbiAgICAgIC8vIHdoeSBkbyB3ZSBoYXZlIHRvIG1hbnVhbGx5IHNldCB0aGlzIGhlaWdodD8gSWYgd2UgZG9uJ3QgaXQgaXMgNTE1LjIgcHggaGlnaFxyXG4gICAgICBwYXJlbnQuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XHJcblxyXG5cclxuICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2wgPSBjb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLmdsKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci53aGl0ZUNvbG9yID0gV0hJVEVfQ09MT1I7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYmxhY2tDb2xvciA9IEJMQUNLX0NPTE9SO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnVzZVRocmVzaG9sZHMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5taW5pVmlld1VzZVRocmVzaG9sZHMgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIoY2FudmFzKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRHJhZyA9IChwb3M6IFZlYzIsIGRlbHRhOiBWZWMyKSA9PiB0aGlzLm9uRHJhZyhwb3MsIGRlbHRhKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uQ2xpY2sgPSAocG9zOiBWZWMyKSA9PiB0aGlzLm9uQ2xpY2socG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uU2NhbGUgPSAoc2NhbGU6IG51bWJlciwgY2hhbmdlOiBudW1iZXIpID0+IHRoaXMub25TY2FsZShzY2FsZSwgY2hhbmdlKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uUm90YXRlID0gKGFuZ2xlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHRoaXMub25Sb3RhdGUoYW5nbGUsIGRlbHRhKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uVHJhbnNsYXRlID0gKGRlbHRhOiBWZWMyKSA9PiB0aGlzLm9uVHJhbnNsYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGNyZWF0ZU1vZGVsc0Ryb3BEb3duTWVudShwYXJlbnQsIChmaWxlKSA9PiB0aGlzLmxvYWRNb2RlbChmaWxlKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlQ3RybHNFbGVtZW50cyhwYXJlbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMudGhyZXNob2xkQ3RybCA9IG5ldyBUaHJlc2hvbGRDdHJsKFxyXG4gICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudGhyZXNob2xkMSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudGhyZXNob2xkMiA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdIaWdobGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbQkxBQ0tfQ09MT1IsIFdISVRFX0NPTE9SXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodCA9IHRoaXMuaGlnaGxpZ2h0U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0TGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0IExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIubGlnaHRMaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbQkxBQ0tfQ09MT1IsIFdISVRFX0NPTE9SXSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIubGlnaHRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGlnaHRMaWdodFNsaWRlci5yYW5nZS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLm1pZExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdNaWRMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnTWlkIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIubWlkTGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW0JMQUNLX0NPTE9SLCBXSElURV9DT0xPUl0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5taWRMaWdodFNsaWRlci5yYW5nZS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnRGFya0xpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdEYXJrIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlci5yYW5nZS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnNoYWRvd1NsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnU2hhZG93JyxcclxuICAgICAgICAgbGFiZWw6ICdTaGFkb3cnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5zaGFkb3cgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW0JMQUNLX0NPTE9SLCBXSElURV9DT0xPUl0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkb3cgPSB0aGlzLnNoYWRvd1NsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5zaGFkb3cpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGxvYWRNb2RlbChxdWVyeTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAvLyBpZiBub3RoaW5nIHdhcyBzcGVjaWZpZWQsIGxvYWQgYW4gaW50ZXJlc3RpbmcgbW9kZWxcclxuICAgICAgaWYgKCFxdWVyeSkge1xyXG4gICAgICAgICBxdWVyeSA9ICdQb3NlXzAyLmJsb2InO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbGMgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAobGMuZW5kc1dpdGgoJy5vYmonKSB8fCBsYy5lbmRzV2l0aCgnLmJsb2InKSkge1xyXG5cclxuICAgICAgICAgbGV0IHN0YXR1c0Z1bmMgPSAoc3RhdHVzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmlubmVyVGV4dCA9IHN0YXR1cztcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdGhpcy5sb2FkZXIubG9hZE1vZGVsRmlsZShxdWVyeSwgc3RhdHVzRnVuYylcclxuICAgICAgICAgICAgLnRoZW4oKHRPYmopID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0TW9kZWwodE9iaik7XHJcbiAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLm9yaWVudCh0aGlzLnJlbmRlcmVyLm9iaik7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIFRPRE8gbXVsdGkgbGluZSBlcnJvciBtZXNzYWdlcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSAnVW5rbm93biBNb2RlbDonICsgcXVlcnk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVTbGlkZXJzKCkge1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0O1xyXG4gICAgICB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQ7XHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0O1xyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0O1xyXG4gICAgICB0aGlzLnNoYWRvd1NsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuc2hhZG93O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHRvZ2dsZU1vZGUoKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLlZpZXc6XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5MaWdodDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5iYWxsQ29sb3IgPSB0aGlzLnJlbmRlcmVyLnllbGxvdztcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLkxpZ2h0OlxyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5iYWxsQ29sb3IgPSBXSElURV9DT0xPUi50b0dsQ29sb3IoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25EcmFnKHBvczogVmVjMiwgZGVsdGE6IFZlYzIpIHtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuVmlldykge1xyXG4gICAgICAgICAvLyBUT0RPIHJlcGxhY2UgMC4wMSB3aXRoIHNvbWUga2luZCBvZiBwaHlzaWNhbCBtZWFzdXJlbWVudFxyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RYKGRlbHRhLnkgKiAwLjAxKTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5vYmoucm90WShkZWx0YS54ICogMC4wMSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgIGxldCBtYXRZID0gTWF0NC5mcm9tUm90WSh0b1JhZChkZWx0YS54KSk7XHJcbiAgICAgICAgIGxldCBtYXRYID0gTWF0NC5mcm9tUm90WCh0b1JhZChkZWx0YS55KSk7XHJcbiAgICAgICAgIGxldCB2ZWMgPSBuZXcgVmVjNChbXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLngsXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnksXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnosXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgXSk7XHJcbiAgICAgICAgIHZlYyA9IG1hdFgubXVsdFYodmVjKTtcclxuICAgICAgICAgdmVjID0gbWF0WS5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi54ID0gdmVjLnZhbHVlc1swXTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSA9IHZlYy52YWx1ZXNbMV07XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnogPSB2ZWMudmFsdWVzWzJdO1xyXG5cclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFByb2Nlc3NlcyBhIGNsaWNrL3RvdWNoIGV2ZW50IGF0IHRoZSBkZXNpZ25hdGVkIGNvb3JkaW5hdGVzLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHByaXZhdGUgb25DbGljayhwb3M6IFZlYzIpOiBib29sZWFuIHtcclxuXHJcbiAgICAgIGxldCBjYW52YXNXaWR0aCA9IHRoaXMuZ2wuY2FudmFzLndpZHRoO1xyXG4gICAgICBsZXQgY2FudmFzSGVpZ2h0ID0gdGhpcy5nbC5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICBsZXQgY2xpcFNwYWNlID0gdGhpcy5yZW5kZXJlci5nZXRDbGlwU3BhY2UoKTtcclxuICAgICAgbGV0IG1pbmlXaWR0aCA9IHRoaXMucmVuZGVyZXIubWluaVNpemUgKiAoMiAvIGNsaXBTcGFjZS53aWR0aCkgKiBjYW52YXNXaWR0aDtcclxuICAgICAgbGV0IG1pbmlIZWlnaHQgPSB0aGlzLnJlbmRlcmVyLm1pbmlTaXplICogKDIgLyBjbGlwU3BhY2UuaGVpZ2h0KSAqIGNhbnZhc0hlaWdodDtcclxuXHJcbiAgICAgIGlmIChwb3MueCA8IG1pbmlXaWR0aCAmJiBwb3MueSA8IG1pbmlIZWlnaHQpIHtcclxuICAgICAgICAgdGhpcy50b2dnbGVNb2RlKCk7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHBvcy54ID4gY2FudmFzV2lkdGggLSBtaW5pV2lkdGggJiYgcG9zLnkgPCBtaW5pV2lkdGgpIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51c2VUaHJlc2hvbGRzID0gIXRoaXMucmVuZGVyZXIudXNlVGhyZXNob2xkcztcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5taW5pVmlld1VzZVRocmVzaG9sZHMgPSAhdGhpcy5yZW5kZXJlci5taW5pVmlld1VzZVRocmVzaG9sZHM7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbm90IGhhbmRsZWRcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uU2NhbGUoc2NhbGU6IG51bWJlciwgY2hhbmdlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci56b29tKGNoYW5nZSk7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uUm90YXRlKGFuZ2xlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5vYmoucm90WihkZWx0YSk7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uVHJhbnNsYXRlKGRlbHRhOiBWZWMyKSB7XHJcblxyXG4gICAgICBsZXQgZmFjdG9yID0gMTtcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIGZhY3RvciA9IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVuZGVyZXIudHJhbnNsYXRlVmlldyhuZXcgVmVjMihbXHJcbiAgICAgICAgIGZhY3RvciAqIDIgKiBkZWx0YS54IC8gdGhpcy5nbC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgIGZhY3RvciAqIDIgKiBkZWx0YS55IC8gdGhpcy5nbC5jYW52YXMuaGVpZ2h0XHJcbiAgICAgIF0pKTtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgLy8gVE9ETyBvbmx5IHJlZHJhdyB0aGUgdGhyZXNob2xkIGN0cmwgaWYgYSBzbGlkZXIgY2hhbmdlZFxyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcigpO1xyXG4gICAgICAgICB0aGlzLnRocmVzaG9sZEN0cmwuZHJhdygpO1xyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWMyIH0gZnJvbSBcIi4vVmVjXCI7XHJcblxyXG50eXBlIFBvaW50ZXJSb3RhdGVGdW5jdGlvbiA9IChhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJUcmFuc2xhdGVGdW5jdGlvbiA9IChkZWx0YTogVmVjMikgPT4gdm9pZDtcclxudHlwZSBQb2ludGVyU2NhbGVGdW5jdGlvbiA9IChzY2FsZTogbnVtYmVyLCBjaGFuZ2U6IG51bWJlcikgPT4gdm9pZDtcclxudHlwZSBQb2ludGVyRHJhZ0Z1bmN0aW9uID0gKHBvczogVmVjMiwgZGVsdGE6IFZlYzIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlclVwRnVuY3Rpb24gPSAoKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJEb3duRnVuY3Rpb24gPSAocG9zOiBWZWMyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJEYmxDbGlja0Z1bmN0aW9uID0gKHBvczogVmVjMikgPT4gYm9vbGVhbjtcclxudHlwZSBQb2ludGVyQ2xpY2tGdW5jdGlvbiA9IChwb3M6IFZlYzIpID0+IGJvb2xlYW47XHJcblxyXG5jb25zdCBEQkxfQ0xJQ0tfVElNRSA9IDMwMDsgLy8gbXNcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBtYW5hZ2luZyB0b3VjaC9tb3VzZSBldmVudHMgb3ZlciBhIGh0bWwgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvaW50ZXJFdmVudEhhbmRsZXIge1xyXG5cclxuICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgcHVibGljIG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgcHVibGljIG9uVXA6IFBvaW50ZXJVcEZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25Eb3duOiBQb2ludGVyRG93bkZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25TY2FsZTogUG9pbnRlclNjYWxlRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvblJvdGF0ZTogUG9pbnRlclJvdGF0ZUZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25UcmFuc2xhdGU6IFBvaW50ZXJUcmFuc2xhdGVGdW5jdGlvbjtcclxuICAgcHVibGljIG9uQ2xpY2s6IFBvaW50ZXJDbGlja0Z1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25EYmxDbGljazogUG9pbnRlckRibENsaWNrRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRyYWc6IFBvaW50ZXJEcmFnRnVuY3Rpb247XHJcblxyXG4gICBwdWJsaWMgbGFzdFBvczogVmVjMjtcclxuICAgcHJpdmF0ZSBsYXN0VG91Y2hUaW1lOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgcHJpbWFyeVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICBwcml2YXRlIHNlY29uZGFyeVRvdWNoSWQ6IG51bWJlciA9IC0xO1xyXG4gICBwcml2YXRlIGluaXRpYWxUb3VjaERpc3RhbmNlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgbGFzdFRvdWNoRGlzdGFuY2U6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBsYXN0VG91Y2hBbmdsZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaENlbnRlcjogVmVjMjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgIC8vIGVsZW1lbnQub250b3VjaCBpc24ndCBzdXBwb3J0ZWQgb24gZGVza3RvcCBkZXZpY2VzIHNvIHVzZSBhZGRFdmVudExpc3RlbmVyIGluc3RlYWRcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAvLyBwcmV2ZW50IHRoZSBicm93c2VyIGZyb20gdXNpbmcgdGhlIGV2ZW50XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0b3VjaFxyXG4gICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgcHJpbWFyeSB0b3VjaCBpZFxyXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlUb3VjaElkID0gZXZlbnQudG91Y2hlc1swXS5pZGVudGlmaWVyO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VuZCBvdXQgb25Eb3duKCkgYW5kIHBvdGVudGlhbGx5IG9uRGJsQ2xpY2soKSBldmVudHNcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zKGV2ZW50LnRvdWNoZXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAodGltZSAtIHRoaXMubGFzdFRvdWNoVGltZSA8IERCTF9DTElDS19USU1FKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3VyRGJsQ2xpY2socG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5vdXJPbkRvd24ocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIHNlY29uZCB0b3VjaFxyXG4gICAgICAgICBlbHNlIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMiAmJiB0aGlzLnByaW1hcnlUb3VjaElkID49IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgc2Vjb25kYXJ5IHRvdWNoIGlkLiBJdCB3aWxsIGFsd2F5cyBiZSB0aGUgc2Vjb25kIGVsZW1lbnQgd2hlblxyXG4gICAgICAgICAgICAvLyB0aGVyZSBhcmUgb25seSB0d28gZWxlbWVudHNcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRhcnlUb3VjaElkID0gZXZlbnQudG91Y2hlc1sxXS5pZGVudGlmaWVyO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHZhbHVlcyBmb3IgZ2VzdHVyZXNcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jb21wdXRlVG91Y2hEaXN0YW5jZShldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFRvdWNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hEaXN0YW5jZSA9IGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaEFuZ2xlID0gdGhpcy5jb21wdXRlVG91Y2hBbmdsZShldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VudGVyID0gdGhpcy5jb21wdXRlVG91Y2hDZW50ZXIoZXZlbnQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgIC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSB1c2luZyB0aGUgZXZlbnRcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgIC8vIGlmIHRoZSBpbml0aWFsIHR3byB0b3VjaGVzIGFyZSBhY3RpdmVcclxuICAgICAgICAgaWYgKHRoaXMucHJpbWFyeVRvdWNoSWQgPj0gMCAmJiB0aGlzLnNlY29uZGFyeVRvdWNoSWQgPj0gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8gc2VuZCBvdXQgZ2VzdHVyZSBldmVudHNcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jb21wdXRlVG91Y2hEaXN0YW5jZShldmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IGRpc3RhbmNlIC8gdGhpcy5pbml0aWFsVG91Y2hEaXN0YW5jZTtcclxuICAgICAgICAgICAgbGV0IGNoYW5nZSA9IGRpc3RhbmNlIC8gdGhpcy5sYXN0VG91Y2hEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5vdXJPblNjYWxlKHNjYWxlLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaERpc3RhbmNlID0gZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmNvbXB1dGVUb3VjaEFuZ2xlKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vdXJPblJvdGF0ZShhbmdsZSwgYW5nbGUgLSB0aGlzLmxhc3RUb3VjaEFuZ2xlKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hBbmdsZSA9IGFuZ2xlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMuY29tcHV0ZVRvdWNoQ2VudGVyKGV2ZW50KTtcclxuICAgICAgICAgICAgLy8gcmV2ZXJzZSBZIHZhbHVlcyBzbyB0aGUgYm90dG9tIGlzIHplcm8gaW5zdGVhZCBvZiB0aGUgdG9wXHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IFtjZW50ZXIueCAtIHRoaXMubGFzdFRvdWNoQ2VudGVyLngsIHRoaXMubGFzdFRvdWNoQ2VudGVyLnkgLSBjZW50ZXIueV07XHJcbiAgICAgICAgICAgIHRoaXMub3VyT25UcmFuc2xhdGUobmV3IFZlYzIoZGVsdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZW50ZXIgPSBjZW50ZXI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gaWYgb25seSB0aGUgaW5pdGlhbCB0b3VjaCBpcyBhY3RpdmVcclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wcmltYXJ5VG91Y2hJZCA+PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBzZW5kIG91dCB0aGUgZHJhZyBldmVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcclxuICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gdGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5wcmltYXJ5VG91Y2hJZCk7XHJcbiAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvcyh0b3VjaCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3VyT25EcmFnKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgIC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSB1c2luZyB0aGUgZXZlbnRcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLnNlY29uZGFyeVRvdWNoSWQgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5zZWNvbmRhcnlUb3VjaElkKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvdWNoSWQgPSAtMTtcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGlmIHdlIGxpZnRlZCB0aGUgc2Vjb25kIGZpbmdlciwgYnV0IG5vdCB0aGUgZmlyc3QsIGdvIGJhY2tcclxuICAgICAgICAgICAgICAgLy8gdG8gdGhlIGRyYWcgZ2VzdHVyZSwgYnV0IGFkanVzdCB0aGUgcmVtZW1iZXJkIHBvc2l0aW9uIHRvXHJcbiAgICAgICAgICAgICAgIC8vIGJlIHRoZSBjdXJyZW50IG9uZSBzbyB0aGF0IHRoaW5ncyBkb24ndCBqdW1wXHJcbiAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMucHJpbWFyeVRvdWNoSWQpO1xyXG4gICAgICAgICAgICAgICBpZiAodG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gdGhpcy5nZXRQb3ModG91Y2gpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKHRoaXMucHJpbWFyeVRvdWNoSWQgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5wcmltYXJ5VG91Y2hJZCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wcmltYXJ5VG91Y2hJZCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5vdXJPblVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA9PT0gLTEgfHwgdGhpcy5wcmltYXJ5VG91Y2hJZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVG91Y2hEaXN0YW5jZSA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaERpc3RhbmNlID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQW5nbGUgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZW50ZXIgPSBuZXcgVmVjMihbLTEsIC0xXSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgVmVjMihbKDxhbnk+ZXZlbnQpLmxheWVyWCwgKDxhbnk+ZXZlbnQpLmxheWVyWV0pO1xyXG4gICAgICAgICB0aGlzLm91ck9uRG93bihwb3MpO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZW1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgbGV0IHBvcyA9IG5ldyBWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm91ck9uRHJhZyhwb3MpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZXVwID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub3VyT25VcCgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbmRibGNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgVmVjMihbKDxhbnk+ZXZlbnQpLmxheWVyWCwgKDxhbnk+ZXZlbnQpLmxheWVyWV0pO1xyXG4gICAgICAgICB0aGlzLm91ckRibENsaWNrKHBvcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRUb3VjaChldmVudDogVG91Y2hFdmVudCwgaWQ6IG51bWJlcik6IFRvdWNoIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQudG91Y2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdG91Y2ggPSBldmVudC50b3VjaGVzW2ldO1xyXG4gICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdWNoO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG5vIG1hdGNoIHdhcyBmb3VuZFxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRQb3ModG91Y2g6IFRvdWNoKTogVmVjMiB7XHJcbiAgICAgIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzIoW3RvdWNoLmNsaWVudFggLSByZWN0LngsIHRvdWNoLmNsaWVudFkgLSByZWN0LnldKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRUb3VjaGVzKGV2ZW50OiBUb3VjaEV2ZW50KTogeyBwcmltYXJ5VG91Y2g6IFRvdWNoLCBzZWNvbmRhcnlUb3VjaDogVG91Y2ggfSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5wcmltYXJ5VG91Y2hJZCA8IDAgfHwgdGhpcy5zZWNvbmRhcnlUb3VjaElkIDwgMCkge1xyXG4gICAgICAgICB0aHJvdyBFcnJvcignVHdvIHRvdWNoZXMgZXhwZWN0ZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgcHJpbWFyeVRvdWNoOiB0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnByaW1hcnlUb3VjaElkKSxcclxuICAgICAgICAgc2Vjb25kYXJ5VG91Y2g6IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCksXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb21wdXRlVG91Y2hEaXN0YW5jZShldmVudDogVG91Y2hFdmVudCk6IG51bWJlciB7XHJcblxyXG4gICAgICBsZXQgdG91Y2hlcyA9IHRoaXMuZ2V0VG91Y2hlcyhldmVudCk7XHJcblxyXG4gICAgICBsZXQgeDEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5YO1xyXG4gICAgICBsZXQgeTEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5ZO1xyXG4gICAgICBsZXQgeDIgPSB0b3VjaGVzLnNlY29uZGFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoKHgyIC0geDEpICogKHgyIC0geDEpICsgKHkyIC0geTEpICogKHkyIC0geTEpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb21wdXRlVG91Y2hBbmdsZShldmVudDogVG91Y2hFdmVudCk6IG51bWJlciB7XHJcblxyXG4gICAgICBsZXQgdG91Y2hlcyA9IHRoaXMuZ2V0VG91Y2hlcyhldmVudCk7XHJcblxyXG4gICAgICBsZXQgeDEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5YO1xyXG4gICAgICBsZXQgeTEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5ZO1xyXG4gICAgICBsZXQgeDIgPSB0b3VjaGVzLnNlY29uZGFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXB1dGVUb3VjaENlbnRlcihldmVudDogVG91Y2hFdmVudCk6IFZlYzIge1xyXG5cclxuICAgICAgbGV0IHRvdWNoZXMgPSB0aGlzLmdldFRvdWNoZXMoZXZlbnQpO1xyXG5cclxuICAgICAgbGV0IHgxID0gdG91Y2hlcy5wcmltYXJ5VG91Y2guc2NyZWVuWDtcclxuICAgICAgbGV0IHkxID0gdG91Y2hlcy5wcmltYXJ5VG91Y2guc2NyZWVuWTtcclxuICAgICAgbGV0IHgyID0gdG91Y2hlcy5zZWNvbmRhcnlUb3VjaC5zY3JlZW5YO1xyXG4gICAgICBsZXQgeTIgPSB0b3VjaGVzLnNlY29uZGFyeVRvdWNoLnNjcmVlblk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFZlYzIoWyh4MSArIHgyKSAvIDIsICh5MSArIHkyKSAvIDJdKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPbkRvd24ocG9zOiBWZWMyKSB7XHJcblxyXG4gICAgICAvLyBjaGVjayBmb3IgYSBjbGljayBoYW5kbGVyXHJcbiAgICAgIGlmICh0aGlzLm9uQ2xpY2sgJiYgdGhpcy5vbkNsaWNrKHBvcy5jbG9uZSgpKSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgbm90IGhhbmRsZWQgYnkgYSBjbGljayBoYW5kZXIsIHNlbmQgdGhlIG9uRG93biBldmVudFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmxhc3RQb3MgPSBwb3MuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLm9uRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihwb3MuY2xvbmUoKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uVXAoKSB7XHJcblxyXG4gICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub25VcCkge1xyXG4gICAgICAgICB0aGlzLm9uVXAoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uRHJhZyhwb3M6IFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMub25EcmFnKSB7XHJcbiAgICAgICAgIGxldCBkZWx0YSA9IG5ldyBWZWMyKFtwb3MueCAtIHRoaXMubGFzdFBvcy54LCBwb3MueSAtIHRoaXMubGFzdFBvcy55XSk7XHJcbiAgICAgICAgIHRoaXMub25EcmFnKHBvcy5jbG9uZSgpLCBkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0UG9zID0gcG9zLmNsb25lKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyRGJsQ2xpY2socG9zOiBWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uRGJsQ2xpY2spIHtcclxuICAgICAgICAgdGhpcy5vbkRibENsaWNrKHBvcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPblNjYWxlKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uU2NhbGUpIHtcclxuICAgICAgICAgdGhpcy5vblNjYWxlKHNjYWxlLCBjaGFuZ2UpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25Sb3RhdGUoYW5nbGU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICBpZiAodGhpcy5vblJvdGF0ZSkge1xyXG4gICAgICAgICB0aGlzLm9uUm90YXRlKGFuZ2xlLCBkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPblRyYW5zbGF0ZShkZWx0YTogVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5vblRyYW5zbGF0ZSkge1xyXG4gICAgICAgICB0aGlzLm9uVHJhbnNsYXRlKGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCIvKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgbG9nZ2luZyB0aW1pbmcgbWVzc2FnZXMgZm9yIHByb2ZpbGUgY29kZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVyIHtcclxuICAgLy8gdGhlIGxhc3QgdGltZSBzdGFtcFxyXG4gICBwcml2YXRlIHQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgIHB1YmxpYyBnZXQgZWxhcHNlZE1zKCkge1xyXG4gICAgICByZXR1cm4gKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy50KTtcclxuICAgfVxyXG4gICAvKipcclxuICAgICogUHJpbnRzIGEgbWVzc2FnZSB0byBjb25zb2xlIG9mIHRoZSBlbGFwc2VkIHRpbWUgc2luY2UgdGhlIGxhc3QgbWFya1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG1zZyBUaGUgbWVzc2FnZSB0byBwcmludCB3aXRoIHRoZSB0aW1lXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZyArICcgJyArIHRoaXMuZWxhcHNlZE1zLnRvRml4ZWQoMSkgKyAnIG1zJyk7XHJcbiAgICAgIHRoaXMubWFyaygpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVXBkYXRlcyB0aGUgdGltZXN0YW1wIHRvIG5vd1xyXG4gICAgKi9cclxuICAgcHVibGljIG1hcmsoKSB7XHJcbiAgICAgIHRoaXMudCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgTWF0NCB9IGZyb20gJy4vTWF0JztcclxuaW1wb3J0IHsgVmVjMywgVmVjMiB9IGZyb20gJy4vVmVjJztcclxuaW1wb3J0IHZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvVmlld2VyVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgZnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1ZpZXdlckZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBjbGFtcCwgbWl4LCB0b1JhZCwgdG9EZWcgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tICcuL2dsVW5pZm9ybSc7XHJcbmltcG9ydCB7IGdsQ29tcGlsZXIgfSBmcm9tICcuL2dsQ29tcGlsZXInO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBnbE9iamVjdCB9IGZyb20gJy4vZ2xPYmplY3QnO1xyXG5pbXBvcnQgeyBnbENvbG9yMyB9IGZyb20gJy4vZ2xDb2xvcic7XHJcbmltcG9ydCB7IFRleHR1cmVSZW5kZXJlciB9IGZyb20gJy4vVGV4dHVyZVJlbmRlcmVyJztcclxuaW1wb3J0IHsgdGV4dHVyZVNpemUgfSBmcm9tICcuL1RocmVzaG9sZEN0cmwnO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tICcuL2h0bWxDb2xvcic7XHJcbmltcG9ydCB7IGdsQ2xpcFNwYWNlIH0gZnJvbSAnLi9nbENsaXBTcGFjZSc7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqQnVpbGRlciB9IGZyb20gJy4vVHJpYW5nbGVPYmpCdWlsZGVyJztcclxuaW1wb3J0IHsgZ2xUZXh0dXJlLCBnbFRleHR1cmVTdHlsZSB9IGZyb20gJy4vZ2xUZXh0dXJlJztcclxuaW1wb3J0IHsgZ2xGcmFtZUJ1ZmZlciB9IGZyb20gJy4vZ2xGcmFtZUJ1ZmZlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFsbEltYWdlRGF0YSB7XHJcbiAgIHB1YmxpYyBpbWFnZTogSW1hZ2VEYXRhO1xyXG4gICBwdWJsaWMgYmFsbENlbnRlcjogVmVjMjtcclxuICAgcHVibGljIGJhbGxSYWRpdXM6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGxldCBERUZBVUxUX1RIUkVTSE9MRDEgPSA0MDtcclxuZXhwb3J0IGxldCBERUZBVUxUX1RIUkVTSE9MRDIgPSA3MDtcclxuXHJcbmNvbnN0IEhJR0hMSUdIVF9ESUZGID0gMC4xO1xyXG5jb25zdCBCQUxMX1JBRElVUyA9IDAuNTtcclxuY29uc3QgSU5JVElBTF9MSUdIVF9ESVJFQ1RJT04gPSBbMS4wLCAtMS4wLCAxLjVdO1xyXG5jb25zdCBJTklUSUFMX1ZJRVcgPSBNYXQ0LmlkZW50aXR5KCk7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCByZW5kZXJzIHRyaWFuZ2xlcyBhbmQgYSBsaWdodCBzb3VyY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdmlldyA9IElOSVRJQUxfVklFVztcclxuICAgcHJpdmF0ZSBsaWdodFZpZXcgPSBuZXcgTWF0NCgpO1xyXG4gICAvLyAgIHByaXZhdGUgcHJvamVjdGlvbiA9IG5ldyBNYXQ0KCk7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbiA9IG5ldyBNYXQ0KCk7XHJcblxyXG4gICBwcml2YXRlIHVUaHJlc2hvbGQxID0gREVGQVVMVF9USFJFU0hPTEQxO1xyXG4gICBwcml2YXRlIHVUaHJlc2hvbGQyID0gREVGQVVMVF9USFJFU0hPTEQyO1xyXG5cclxuICAgcHJpdmF0ZSB1SGlnaGxpZ2h0OiBudW1iZXIgPSAxLjA7XHJcbiAgIHByaXZhdGUgdUxpZ2h0TGlnaHQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB1TWlkTGlnaHQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB1RGFya0xpZ2h0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdVNoYWRvdzogbnVtYmVyID0gMC4yO1xyXG5cclxuICAgLy8gc2l6ZSBvZiB0aGUgc21hbGxlciB2aWV3XHJcbiAgIHB1YmxpYyByZWFkb25seSBtaW5pU2l6ZSA9IDAuMjtcclxuXHJcbiAgIHB1YmxpYyB1c2VUaHJlc2hvbGRzID0gZmFsc2U7XHJcbiAgIHB1YmxpYyBtaW5pVmlld1VzZVRocmVzaG9sZHMgPSB0cnVlO1xyXG5cclxuICAgcHJpdmF0ZSBiYWxsOiBnbE9iamVjdDtcclxuICAgcHJpdmF0ZSBhcnJvdzogZ2xPYmplY3Q7XHJcbiAgIHByaXZhdGUgZmxvb3I6IGdsT2JqZWN0O1xyXG4gICBwdWJsaWMgb2JqOiBnbE9iamVjdDtcclxuXHJcbiAgIHByaXZhdGUgc2hhZG93RnJhbWVCdWZmZXI6IGdsRnJhbWVCdWZmZXI7XHJcbiAgIHByaXZhdGUgc2hhZG93Q29sb3JUZXh0dXJlOiBnbFRleHR1cmU7XHJcbiAgIHByaXZhdGUgc2hhZG93RGVwdGhUZXh0dXJlOiBnbFRleHR1cmU7XHJcblxyXG4gICBwcml2YXRlIHRDdHJsRnJhbWVCdWZmZXI6IGdsRnJhbWVCdWZmZXI7XHJcbiAgIHByaXZhdGUgdEN0cmxDb2xvclRleHR1cmU6IGdsVGV4dHVyZTtcclxuICAgcHJpdmF0ZSB0Q3RybERlcHRoVGV4dHVyZTogZ2xUZXh0dXJlO1xyXG5cclxuICAgcHVibGljIHVMaWdodERpcmVjdGlvbiA9IG5ldyBWZWMzKElOSVRJQUxfTElHSFRfRElSRUNUSU9OKTtcclxuXHJcbiAgIHB1YmxpYyBiYWxsQ29sb3IgPSBuZXcgZ2xDb2xvcjMoWzEsIDEsIDFdKTtcclxuICAgcHVibGljIHJlYWRvbmx5IHllbGxvdyA9IG5ldyBnbENvbG9yMyhbMS4wLCAwLjksIDAuN10pO1xyXG4gICBwdWJsaWMgd2hpdGVDb2xvciA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuICAgcHVibGljIGJsYWNrQ29sb3IgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAwXSk7XHJcblxyXG4gICBwdWJsaWMgc2hvd1NoYWRvd01hcCA9IGZhbHNlO1xyXG4gICBwdWJsaWMgc2hvd01pbmlWaWV3ID0gdHJ1ZTtcclxuICAgcHVibGljIHNob3dGbG9vciA9IGZhbHNlO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGdsQ3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG5cclxuICAgICAgLy8gZW5hYmxlIHotYnVmZmVyXHJcbiAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICAgIC8vIGVuYWJsZSBhbHBoYSB2YWx1ZXNcclxuICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcclxuICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHJcblxyXG4gICAgICB0aGlzLnByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoZ2wsIHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xyXG5cclxuICAgICAgbGV0IHRCYWxsID0gbmV3IFRyaWFuZ2xlT2JqQnVpbGRlcignQmFsbCcpO1xyXG4gICAgICB0QmFsbC5hZGRTcGhlcmUoNTAsIEJBTExfUkFESVVTLCBuZXcgVmVjMyhbMCwgMCwgMF0pKTtcclxuICAgICAgdEJhbGwub3B0aW1pemUoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICB0aGlzLmJhbGwgPSBuZXcgZ2xPYmplY3QoZ2wsIHRCYWxsLCB0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgbGV0IHRBcnJvdyA9IG5ldyBUcmlhbmdsZU9iakJ1aWxkZXIoJ0xpZ2h0IEFycm93Jyk7XHJcbiAgICAgIHRBcnJvdy5hZGRBcnJvdygpO1xyXG4gICAgICB0aGlzLmFycm93ID0gbmV3IGdsT2JqZWN0KGdsLCB0QXJyb3csIHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0Q2xpcFNwYWNlKCk6IGdsQ2xpcFNwYWNlIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGxldCBhciA9IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoYXIgPiAxKSB7XHJcbiAgICAgICAgIHJldHVybiBuZXcgZ2xDbGlwU3BhY2UobmV3IFZlYzMoWy1hciwgLTEsIC0xMDBdKSwgbmV3IFZlYzMoW2FyLCAxLCAxMDBdKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBuZXcgZ2xDbGlwU3BhY2UobmV3IFZlYzMoWy0xLCAtMSAvIGFyLCAtMTAwXSksIG5ldyBWZWMzKFsxLCAxIC8gYXIsIDEwMF0pKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVzaXplKCkge1xyXG4gICAgICBsZXQgY2xpcFNwYWNlID0gdGhpcy5nZXRDbGlwU3BhY2UoKTtcclxuICAgICAgdGhpcy5wcm9qZWN0aW9uID0gTWF0NC5tYWtlT3J0aG8oXHJcbiAgICAgICAgIGNsaXBTcGFjZS5sZWZ0LFxyXG4gICAgICAgICBjbGlwU3BhY2UucmlnaHQsXHJcbiAgICAgICAgIGNsaXBTcGFjZS5ib3R0b20sXHJcbiAgICAgICAgIGNsaXBTcGFjZS50b3AsXHJcbiAgICAgICAgIGNsaXBTcGFjZS5uZWFyLFxyXG4gICAgICAgICBjbGlwU3BhY2UuZmFyXHJcbiAgICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIC8vXHJcbiAgIC8vIFRoZSBmdW5jdGlvbnMgYmVsb3cgY2hhbmdlIG91ciB2aWV3IG9mIHRoZSBtb2RlbFxyXG4gICAvL1xyXG4gICBwdWJsaWMgem9vbSh6b29tOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52aWV3LnNjYWxlKHpvb20pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdHJhbnNsYXRlVmlldyhkZWx0YTogVmVjMikge1xyXG4gICAgICB0aGlzLnZpZXcudHJhbnNsYXRlKG5ldyBWZWMzKFtkZWx0YS54LCBkZWx0YS55LCAwXSkpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhpZ2hsaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51SGlnaGxpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgaGlnaGxpZ2h0KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudUhpZ2hsaWdodCA9IE1hdGgubWF4KHZhbCwgSElHSExJR0hUX0RJRkYpO1xyXG4gICAgICB0aGlzLnVTaGFkb3cgPSBNYXRoLm1pbih0aGlzLnVTaGFkb3csIHRoaXMudUhpZ2hsaWdodCAtIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbGlnaHRMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51TGlnaHRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IG1pZExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVNaWRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IGRhcmtMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51RGFya0xpZ2h0O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHNoYWRvdygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51U2hhZG93O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgc2hhZG93KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHZhbCwgMSAtIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gTWF0aC5tYXgodGhpcy51SGlnaGxpZ2h0LCB0aGlzLnVTaGFkb3cgKyBISUdITElHSFRfRElGRik7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHRocmVzaG9sZDEoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudVRocmVzaG9sZDE7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB0aHJlc2hvbGQxKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDEgPSB2YWw7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDIgPSBNYXRoLm1heCh0aGlzLnVUaHJlc2hvbGQyLCB2YWwpO1xyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQyO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gTWF0aC5taW4odGhpcy51VGhyZXNob2xkMSwgdmFsKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgdE9iaigpOiBUcmlhbmdsZU9iaiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9iai50T2JqO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbG9yQXQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICBkZWcgPSBjbGFtcChkZWcsIDAsIDkwKTtcclxuICAgICAgcmV0dXJuIG1peCh0aGlzLnVTaGFkb3csIHRoaXMudUhpZ2hsaWdodCAtIEhJR0hMSUdIVF9ESUZGLCBNYXRoLmNvcyh0b1JhZChkZWcpKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlQ29sb3JzKCkge1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gdGhpcy5jb2xvckF0KDAuNSAqIHRoaXMudGhyZXNob2xkMSk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gdGhpcy5jb2xvckF0KG1peCh0aGlzLnRocmVzaG9sZDEsIHRoaXMudGhyZXNob2xkMiwgMC41KSk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IHRoaXMuY29sb3JBdCgodGhpcy50aHJlc2hvbGQyICsgOTApIC8gMik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXRNb2RlbCh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBpZiAodGhpcy5vYmopIHtcclxuICAgICAgICAgdGhpcy5vYmouZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vYmogPSBuZXcgZ2xPYmplY3QodGhpcy5nbCwgdE9iaiwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCBjZW50ZXIgPSB0T2JqLmNlbnRlcjtcclxuICAgICAgdGhpcy5vYmoudHJhbnNsYXRlKG5ldyBWZWMzKFstY2VudGVyLngsIC1jZW50ZXIueSwgLWNlbnRlci56XSkpO1xyXG4gICAgICBsZXQgc2NhbGUgPSAyLjAgLyBNYXRoLnNxcnQodE9iai53aWR0aCAqIHRPYmoud2lkdGggKyB0T2JqLmhlaWdodCAqIHRPYmouaGVpZ2h0ICsgdE9iai5kZXB0aCAqIHRPYmouZGVwdGgpO1xyXG4gICAgICB0aGlzLm9iai5zY2FsZShzY2FsZSk7XHJcbiAgICAgIHRoaXMub2JqLnhGb3JtLnNuYXAoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgIHRoaXMuZmxvb3IuZGVsZXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0Rmxvb3IgPSBuZXcgVHJpYW5nbGVPYmpCdWlsZGVyKCdGbG9vcicpO1xyXG5cclxuICAgICAgLy8gbWFrZSB0aGUgZmxvb3Igc2l6ZSBzbGlnaHRseSBsYXJnZXIgdGhhbiB0aGUgb2JqZWN0LCBjZW50ZXJlZCBhdCB0aGUgYm90dG9tXHJcbiAgICAgIGxldCByYWRpdXMgPSA0O1xyXG4gICAgICBsZXQgcG9zID0gbmV3IFZlYzMoWzAsIC1zY2FsZSAqIHRPYmouaGVpZ2h0IC8gMiwgMF0pO1xyXG4gICAgICB0Rmxvb3IuYWRkRGlzayg1MCwgcmFkaXVzLCBwb3MpO1xyXG4gICAgICB0aGlzLmZsb29yID0gbmV3IGdsT2JqZWN0KHRoaXMuZ2wsIHRGbG9vciwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMuZ2wsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VGbG9vckNlbnRlcicsIHRGbG9vci5jZW50ZXIpO1xyXG4gICAgICB1bmkuc2V0KCd1Rmxvb3JSYWRpdXMnLCByYWRpdXMpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgdGhlIHZpZXcgYW5kIHRoZSBsaWdodFxyXG4gICAgICB0aGlzLnJlc2V0VmlldygpO1xyXG4gICAgICB0aGlzLnVMaWdodERpcmVjdGlvbiA9IG5ldyBWZWMzKFsxLjAsIC0xLjAsIDEuNV0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVzZXRWaWV3KCkge1xyXG4gICAgICB0aGlzLnZpZXcgPSBJTklUSUFMX1ZJRVcuY2xvbmUoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoPEVsZW1lbnQ+Z2wuY2FudmFzKTtcclxuICAgICAgbGV0IGNvbG9yID0gaHRtbENvbG9yLmZyb21Dc3Moc3R5bGUuYmFja2dyb3VuZENvbG9yKS50b0dsQ29sb3IoKTtcclxuICAgICAgZ2wuY2xlYXJDb2xvcihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCAxKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuICAgICAgdGhpcy5yZW5kZXJUb1NoYWRvd01hcCgpO1xyXG4gICAgICB0aGlzLnJlbmRlclRvU2NyZWVuKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0U3RkVW5pZm9ybXMoKTogZ2xVbmlmb3JtIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMuZ2wsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdsaWdodFZpZXcnLCB0aGlzLmxpZ2h0Vmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3Byb2plY3Rpb24nLCB0aGlzLnByb2plY3Rpb24udHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCB0aGlzLnVMaWdodERpcmVjdGlvbik7XHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDEpO1xyXG5cclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVzZVRocmVzaG9sZHMgPyAxIDogMCwgdHJ1ZSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VUaHJlc2hvbGQxJywgMSAtIE1hdGguc2luKHRvUmFkKHRoaXMudGhyZXNob2xkMSArIDkwKSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VGhyZXNob2xkMicsIDEgLSBNYXRoLnNpbih0b1JhZCh0aGlzLnRocmVzaG9sZDIgKyA5MCkpKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodEludGVuc2l0eScsIHRoaXMudUhpZ2hsaWdodCAtIHRoaXMudVNoYWRvdyAtIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdW5pLnNldCgndUFtYmllbnRJbnRlbnNpdHknLCB0aGlzLnVTaGFkb3cpO1xyXG4gICAgICB1bmkuc2V0KCd1SGlnaGxpZ2h0JywgdGhpcy51SGlnaGxpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndUxpZ2h0TGlnaHQnLCB0aGlzLnVMaWdodExpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndU1pZExpZ2h0JywgdGhpcy51TWlkTGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1RGFya0xpZ2h0JywgdGhpcy51RGFya0xpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndVNoYWRvdycsIHRoaXMudVNoYWRvdyk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1V2hpdGVDb2xvcicsIHRoaXMud2hpdGVDb2xvci50b0dsQ29sb3IoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VCbGFja0NvbG9yJywgdGhpcy5ibGFja0NvbG9yLnRvR2xDb2xvcigpKTtcclxuXHJcbiAgICAgIHJldHVybiB1bmk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXRCYWxsSW1hZ2UoKTogQmFsbEltYWdlRGF0YSB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnRDdHJsRnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgdGhpcy50Q3RybEZyYW1lQnVmZmVyID0gbmV3IGdsRnJhbWVCdWZmZXIoZ2wsIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSk7XHJcbiAgICAgICAgIHRoaXMudEN0cmxDb2xvclRleHR1cmUgPSB0aGlzLnRDdHJsRnJhbWVCdWZmZXIuY3JlYXRlVGV4dHVyZShnbFRleHR1cmVTdHlsZS5Db2xvcik7XHJcbiAgICAgICAgIHRoaXMudEN0cmxEZXB0aFRleHR1cmUgPSB0aGlzLnRDdHJsRnJhbWVCdWZmZXIuY3JlYXRlVGV4dHVyZShnbFRleHR1cmVTdHlsZS5EZXB0aCk7XHJcblxyXG4gICAgICAgICB0aGlzLnRDdHJsRnJhbWVCdWZmZXIuYXR0YWNoVGV4dHVyZShnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgdGhpcy50Q3RybENvbG9yVGV4dHVyZSk7XHJcbiAgICAgICAgIHRoaXMudEN0cmxGcmFtZUJ1ZmZlci5hdHRhY2hUZXh0dXJlKGdsLkRFUFRIX0FUVEFDSE1FTlQsIHRoaXMudEN0cmxEZXB0aFRleHR1cmUpO1xyXG5cclxuICAgICAgICAgdGhpcy50Q3RybEZyYW1lQnVmZmVyLmNoZWNrKCk7XHJcblxyXG4gICAgICAgICAvLyBVbmJpbmQgdGhlc2UgbmV3IG9iamVjdHMsIHdoaWNoIG1ha2VzIHRoZSBkZWZhdWx0IGZyYW1lIGJ1ZmZlciB0aGVcclxuICAgICAgICAgLy8gdGFyZ2V0IGZvciByZW5kZXJpbmcuXHJcbiAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCB0ZXh0dXJlU2l6ZSwgdGV4dHVyZVNpemUpO1xyXG5cclxuICAgICAgdGhpcy50Q3RybENvbG9yVGV4dHVyZS5iaW5kKCk7XHJcbiAgICAgIHRoaXMudEN0cmxGcmFtZUJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMudEN0cmxGcmFtZUJ1ZmZlci5hdHRhY2hUZXh0dXJlKGdsLkNPTE9SX0FUVEFDSE1FTlQwLCB0aGlzLnRDdHJsQ29sb3JUZXh0dXJlKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKDxFbGVtZW50PmdsLmNhbnZhcyk7XHJcbiAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ3NzKHN0eWxlLmJhY2tncm91bmRDb2xvcikudG9HbENvbG9yKCk7XHJcbiAgICAgIGdsLmNsZWFyQ29sb3IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgMSk7XHJcbiAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICAvLyBhbHdheXMgcmVuZGVyIHdpdGggYmFuZHNcclxuICAgICAgdW5pLnNldGkoJ3VVc2VUaHJlc2hvbGRzJywgMSk7XHJcblxyXG4gICAgICAvLyBzaG9vdCB0aGUgbGlnaHQgc3RyYWlnaHQgZG93blxyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgVmVjMyhbMCwgLTEsIDBdKSk7XHJcblxyXG4gICAgICAvLyBkb24ndCBjYXN0IHNoYWRvd3NcclxuICAgICAgdW5pLnNldGkoJ3VVc2VTaGFkb3dzJywgMCk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgbmV3IE1hdDQoKSk7XHJcblxyXG4gICAgICAvLyBtb3ZlIHRoZSBiYWxsIHRvIHRoZSBsb3dlciBsZWZ0IGFuZCBwYXJ0aWFsbHkgb2Zmc2NyZWVuXHJcbiAgICAgIGNvbnN0IHNjYWxlID0gMS43NTtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IFZlYzMoWy0wLjYsIC0wLjYsIDBdKTtcclxuICAgICAgdGhpcy5iYWxsLmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmJhbGwuc2NhbGUoc2NhbGUpO1xyXG4gICAgICB0aGlzLmJhbGwudHJhbnNsYXRlKG9mZnNldCk7XHJcblxyXG4gICAgICAvLyByZW5kZXIgdGhlIGJhbGxcclxuICAgICAgdGhpcy5iYWxsLmRyYXcoKTtcclxuICAgICAgdGhpcy5iYWxsLmNsZWFyVHJhbnNmb3JtcygpO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgYXJyb3dcclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IFZlYzMoWzEsIC0wLjUsIDAuNV0pKTtcclxuICAgICAgdW5pLnNldGkoJ3VVc2VUaHJlc2hvbGRzJywgMCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCByZXNldCB0aGluZ3Mgc28gdGhhdCB3ZSdyZSBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICB0aGlzLmFycm93LmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmFycm93LnNjYWxlKDEuMjUpXHJcbiAgICAgIHRoaXMuYXJyb3cudHJhbnNsYXRlKG5ldyBWZWMzKFtvZmZzZXQueCwgb2Zmc2V0LnkgKyBzY2FsZSAqIEJBTExfUkFESVVTICsgMC4xLCAwLjBdKSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1V2hpdGVDb2xvcicsIG5ldyBnbENvbG9yMyhbMS4wLCAxLjAsIDAuNV0pKTtcclxuICAgICAgdW5pLnNldCgndUJsYWNrQ29sb3InLCBodG1sQ29sb3IuYmxhY2sudG9HbENvbG9yKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIDAuNCk7XHJcbiAgICAgIHRoaXMuYXJyb3cuZHJhdygpO1xyXG5cclxuICAgICAgbGV0IHBpeGVscyA9IG5ldyBVaW50OEFycmF5KHRleHR1cmVTaXplICogdGV4dHVyZVNpemUgKiA0KTtcclxuICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB0ZXh0dXJlU2l6ZSwgdGV4dHVyZVNpemUsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHBpeGVscyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIGRhdGEgc3RydWN0dXJlIHdlJ2xsIHJldHVyblxyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBCYWxsSW1hZ2VEYXRhKCk7XHJcbiAgICAgIGRhdGEuaW1hZ2UgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShwaXhlbHMpLCB0ZXh0dXJlU2l6ZSwgdGV4dHVyZVNpemUpO1xyXG5cclxuICAgICAgLy8gY29udmVydCBmcm9tIFstMSwxXSBkcmF3aW5nIHNwYWNlIHRvIFswLDFdXHJcbiAgICAgIGRhdGEuYmFsbFJhZGl1cyA9IHNjYWxlICogQkFMTF9SQURJVVM7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlciA9IG5ldyBWZWMyKFtvZmZzZXQueCwgb2Zmc2V0LnldKTtcclxuICAgICAgZGF0YS5iYWxsUmFkaXVzIC89IDI7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlci54ID0gMC41ICogKGRhdGEuYmFsbENlbnRlci54ICsgMSk7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlci55ID0gMC41ICogKGRhdGEuYmFsbENlbnRlci55ICsgMSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSByZW5kZXJUb1NoYWRvd01hcCgpOiB2b2lkIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGlmICghdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IDEwMjQ7XHJcbiAgICAgICAgIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIgPSBuZXcgZ2xGcmFtZUJ1ZmZlcihnbCwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgIHRoaXMuc2hhZG93Q29sb3JUZXh0dXJlID0gdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5jcmVhdGVUZXh0dXJlKGdsVGV4dHVyZVN0eWxlLkNvbG9yKTtcclxuICAgICAgICAgdGhpcy5zaGFkb3dEZXB0aFRleHR1cmUgPSB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmNyZWF0ZVRleHR1cmUoZ2xUZXh0dXJlU3R5bGUuRGVwdGgpO1xyXG5cclxuICAgICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5hdHRhY2hUZXh0dXJlKGdsLkNPTE9SX0FUVEFDSE1FTlQwLCB0aGlzLnNoYWRvd0NvbG9yVGV4dHVyZSk7XHJcbiAgICAgICAgIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuYXR0YWNoVGV4dHVyZShnbC5ERVBUSF9BVFRBQ0hNRU5ULCB0aGlzLnNoYWRvd0RlcHRoVGV4dHVyZSk7XHJcblxyXG4gICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmNoZWNrKCk7XHJcbiAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLndpZHRoLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmhlaWdodCk7XHJcbiAgICAgIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuYmluZCgpO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgbGV0IGNlbnRlciA9IG5ldyBWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgIGxldCB1cCA9IG5ldyBWZWMzKFswLCAxLCAwXSk7XHJcbiAgICAgIGxldCBtYXQgPSBNYXQ0Lm1ha2VMb29rQXQodGhpcy51TGlnaHREaXJlY3Rpb24sIGNlbnRlciwgdXApO1xyXG4gICAgICBtYXQuc2V0KDAsIDMsIDApO1xyXG4gICAgICBtYXQuc2V0KDEsIDMsIDApO1xyXG4gICAgICBtYXQuc2V0KDIsIDMsIDApO1xyXG4gICAgICAvLyB0byBhdm9pZCBjbGlwcGluZywgZXhwYW5kIHRoZSB6IHJhbmdlIHRvIGFsbG93IGZ1bGwgcm90YXRpb24gb2ZcclxuICAgICAgLy8gYW55dGhpbmcgaW4gYSAzLTMtMyBjdWJlLlxyXG4gICAgICBsZXQgbWF4U2l6ZSA9IE1hdGguc3FydCgyNyk7XHJcbiAgICAgIG1hdCA9IE1hdDQubWFrZU9ydGhvKC0xLCAxLCAtMSwgMSwgLW1heFNpemUsIG1heFNpemUpLm11bHRNKG1hdCk7XHJcbiAgICAgIHRoaXMubGlnaHRWaWV3ID0gbWF0O1xyXG5cclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuXHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdmlldyBtYXRyaXggc28gdGhhdCBvdXIgdmlldyBpcyBmcm9tIHRoZSBsaWdodFxyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy5saWdodFZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdwcm9qZWN0aW9uJywgTWF0NC5pZGVudGl0eSgpKTtcclxuXHJcbiAgICAgIC8vIGRvbid0IHRyeSB0byB1c2UgdGhlIHNoYWRvdyB0ZXh0dXJlIHdoaWxlIHdlJ3JlIGNyZWF0aW5nIGl0XHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDApO1xyXG5cclxuICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcmVuZGVyVG9TY3JlZW4oKTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIGRlcHRoIGJ1ZmZlciBmb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBpZiAodGhpcy5zaG93U2hhZG93TWFwKSB7XHJcbiAgICAgICAgIGxldCB0ciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIoZ2wpO1xyXG4gICAgICAgICB0ci5yZW5kZXIoXHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93RGVwdGhUZXh0dXJlLmdldCgpLFxyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmhlaWdodFxyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICAgICB0aGlzLnNoYWRvd0RlcHRoVGV4dHVyZS5iaW5kKCk7XHJcblxyXG4gICAgICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAgICAvLyBkcmF3IHRoZSBtYWluIG9iamVjdFxyXG4gICAgICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG4gICAgICAgICB0aGlzLm9iai5kcmF3KCk7XHJcblxyXG4gICAgICAgICBpZiAodGhpcy5zaG93Rmxvb3IpIHtcclxuICAgICAgICAgICAgdW5pLnNldGkoJ3VTaG93Rmxvb3InLCAxKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmxvb3IueEZvcm0ubWF0ID0gdGhpcy5vYmoueEZvcm0ubWF0LmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjdWxsIHBvbHlnb25zIHNvIHdlIGRvbid0IHNlZSB0aGUgZmxvb3IgZnJvbSBiZWxvd1xyXG4gICAgICAgICAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKVxyXG4gICAgICAgICAgICBnbC5jdWxsRmFjZShnbC5GUk9OVCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmxvb3IuZHJhdygpO1xyXG4gICAgICAgICAgICBnbC5kaXNhYmxlKGdsLkNVTExfRkFDRSlcclxuXHJcbiAgICAgICAgICAgIHVuaS5zZXRpKCd1U2hvd0Zsb29yJywgMCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgICAgdGhpcy5kcmF3TWluaVZpZXcoKTtcclxuICAgICAgICAgdGhpcy5kcmF3QmFsbCgpO1xyXG5cclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBkcmF3TWluaVZpZXcoKSB7XHJcblxyXG4gICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgb2JqZWN0IGluIHRoZSB1cHBlciByaWdodCBhdCBhIHJlZHVjZWQgc2l6ZVxyXG4gICAgICBsZXQgdmlldyA9IE1hdDQuaWRlbnRpdHkoKTtcclxuICAgICAgdmlldy5zY2FsZSh0aGlzLm1pbmlTaXplKTtcclxuICAgICAgbGV0IGNsaXBTcGFjZSA9IHRoaXMuZ2V0Q2xpcFNwYWNlKCk7XHJcbiAgICAgIHZpZXcudHJhbnNsYXRlKG5ldyBWZWMzKFtjbGlwU3BhY2UubWF4LnggLSB0aGlzLm1pbmlTaXplLCBjbGlwU3BhY2UubWF4LnkgLSB0aGlzLm1pbmlTaXplLCAwXSkpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3Jywgdmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy5taW5pVmlld1VzZVRocmVzaG9sZHMgPyAwIDogMSwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBkcmF3QmFsbCgpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICAvLyBzdG9wIHVzaW5nIHRoZSBzaGFkb3dtYXBcclxuICAgICAgdW5pLnNldGkoJ3VVc2VTaGFkb3dzJywgMCk7XHJcblxyXG4gICAgICBsZXQgdmlldyA9IE1hdDQuaWRlbnRpdHkoKTtcclxuICAgICAgdmlldy5zY2FsZSh0aGlzLm1pbmlTaXplKTtcclxuICAgICAgbGV0IGNsaXBTcGFjZSA9IHRoaXMuZ2V0Q2xpcFNwYWNlKCk7XHJcbiAgICAgIHZpZXcudHJhbnNsYXRlKG5ldyBWZWMzKFtjbGlwU3BhY2UubWluLnggKyB0aGlzLm1pbmlTaXplLCBjbGlwU3BhY2UubWF4LnkgLSB0aGlzLm1pbmlTaXplLCAwXSkpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3Jywgdmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51c2VUaHJlc2hvbGRzID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICB1bmkuc2V0KCd1V2hpdGVDb2xvcicsIHRoaXMuYmFsbENvbG9yKTtcclxuICAgICAgdW5pLnNldCgndUJsYWNrQ29sb3InLCBodG1sQ29sb3IuYmxhY2sudG9HbENvbG9yKCkpO1xyXG4gICAgICB0aGlzLmJhbGwuZHJhdygpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IFZlYzMoWzEsIC0wLjUsIDAuNV0pKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCAwLCB0cnVlKTtcclxuXHJcbiAgICAgIC8vIGJhY2sgb3V0IGFuZ2xlcyBhcyBpZiBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICBsZXQgeCA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLng7XHJcbiAgICAgIGxldCB5ID0gdGhpcy51TGlnaHREaXJlY3Rpb24ueTtcclxuICAgICAgbGV0IHogPSB0aGlzLnVMaWdodERpcmVjdGlvbi56O1xyXG5cclxuICAgICAgLy8gc3RhcnQgYnkgbG9va2luZyBkb3duIGZyb20gdGhlIFogZGlyZWN0aW9uXHJcbiAgICAgIGxldCByYWRpdXMgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gTWF0aC5hY29zKHogLyByYWRpdXMpO1xyXG4gICAgICBsZXQgcm90YXRpb25BbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCByZXNldCB0aGluZ3Mgc28gdGhhdCB3ZSdyZSBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICB0aGlzLmFycm93LmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmFycm93LnRyYW5zbGF0ZShuZXcgVmVjMyhbMC4wLCAwLjU1LCAwLjBdKSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90WCh0b1JhZCg5MCkpO1xyXG5cclxuICAgICAgLy8gcm90YXRlIHRvIG1hdGNoIHRoZSBsaWdodCBzb3VyY2VcclxuICAgICAgdGhpcy5hcnJvdy5yb3RZKC1lbGV2YXRpb25BbmdsZSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90Wigtcm90YXRpb25BbmdsZSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1V2hpdGVDb2xvcicsIHRoaXMueWVsbG93KTtcclxuICAgICAgdW5pLnNldCgndUJsYWNrQ29sb3InLCBodG1sQ29sb3IuYmxhY2sudG9HbENvbG9yKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIDAuNCk7XHJcbiAgICAgIHRoaXMuYXJyb3cuZHJhdygpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuIElmIGEgaGl0XHJcbiAgICAqIG9jY3VycywgdGhlIGNsaWNrZWQgb24gdmlldyBpcyBzd2FwcGVkIGZvciB0aGUgcHJpbWFyeSB2aWV3IGFuZCB0cnVlXHJcbiAgICAqIGlzIHJldHVybmVkLiBJZiBubyBoaXQgb2NjdXJzLCBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUgWzAtMV0uXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUgWzAtMV0uXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuXHJcbiAgICAgIC8vIFRPRE8gYWRqdXN0IGZvciBhc3BlY3QgcmF0aW9cclxuICAgICAgaWYgKHRoaXMuc2hvd01pbmlWaWV3KSB7XHJcbiAgICAgICAgIGlmICh4ID4gKDEgLSB0aGlzLm1pbmlTaXplKSAmJiB5ID4gKDEgLSB0aGlzLm1pbmlTaXplKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZVRocmVzaG9sZHMgPSAhdGhpcy51c2VUaHJlc2hvbGRzO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSBcIi4vQ29sb3JSYW5nZVwiO1xyXG5pbXBvcnQgeyBnbENvbG9yMyB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yV2l0aEFscGhhIH0gZnJvbSBcIi4vaHRtbENvbG9yV2l0aEFscGhhXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhIHBhc3NlZCB0byB0aGUgU2xpZGVyIGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJTZXR1cCB7XHJcbiAgIGlkOiBzdHJpbmcsXHJcbiAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgIG1pbjogbnVtYmVyLFxyXG4gICBtYXg6IG51bWJlcixcclxuICAgdmFsdWU6IG51bWJlcixcclxuICAgY29sb3JzPzogaHRtbENvbG9yW10sXHJcbiAgIG9uaW5wdXQ/OiAoKSA9PiB2b2lkLFxyXG4gICBnZXRUZXh0PzogKHNsaWRlcjogU2xpZGVyKSA9PiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzbGlkZXIgY29tcG9zZWQgb2YgYSBsYWJlbCwgaW5wdXQgcmFuZ2UsIGNvbG9yIHNwYW4gYW5kIHZhbHVlIHNwYW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXIge1xyXG5cclxuICAgcHJpdmF0ZSBfcmFuZ2U6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX2NvbG9yU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF92YWx1ZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JzOiBDb2xvclJhbmdlO1xyXG4gICBwcml2YXRlIF9nZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZztcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgaHRtbCBvYmplY3QuXHJcbiAgICAqIEBwYXJhbSBzZXR1cCBUaGUgc2V0dXAgZGF0YSBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBzZXR1cDogSVNsaWRlclNldHVwKSB7XHJcblxyXG4gICAgICB0aGlzLl9nZXRUZXh0ID0gc2V0dXAuZ2V0VGV4dDtcclxuXHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmlkID0gc2V0dXAuaWQ7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnU2xpZGVyRGl2JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5pZCA9IHNldHVwLmlkICsgJ0xhYmVsJztcclxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ1NsaWRlckxhYmVsJztcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc2V0dXAubGFiZWw7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnR5cGUgPSAncmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5pZCA9IHNldHVwLmlkICsgJ1JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuY2xhc3NOYW1lID0gJ1NsaWRlclJhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UubWluID0gc2V0dXAubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1heCA9IHNldHVwLm1heC50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZSA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5Db2xvcigpO1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KClcclxuICAgICAgfSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl9yYW5nZSk7XHJcblxyXG4gICAgICBpZiAoc2V0dXAuY29sb3JzKSB7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmlkID0gc2V0dXAuaWQgKyAnQ29sb3JTcGFuJztcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJDb2xvclNwYW4nO1xyXG4gICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fY29sb3JTcGFuKTtcclxuXHJcbiAgICAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBjb2xvci5cclxuICAgICAgICAgdGhpcy5jb2xvcnMgPSBzZXR1cC5jb2xvcnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmlkID0gc2V0dXAuaWQgKyAnVmFsdWVTcGFuJztcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJWYWx1ZVNwYW4nO1xyXG4gICAgICAvLyAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pbm5lclRleHQgPSBzZXR1cC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fdmFsdWVTcGFuKTtcclxuXHJcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBzcGFuIHRleHRcclxuICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpO1xyXG5cclxuICAgICAgdGhpcy5fcmFuZ2Uub25pbnB1dCA9IHNldHVwLm9uaW5wdXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBzcGFuIGNvbG9yIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwZGF0ZVNwYW5Db2xvcigpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ29sb3IodGhpcy5fY29sb3JzLmdldCh2YWwpKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnRvSGV4KClcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICogU2V0cyB0aGUgc3BhbiBjb2xvciB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yLlxyXG4gKi9cclxuICAgcHJpdmF0ZSB1cGRhdGVTcGFuVGV4dCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2dldFRleHQpIHtcclxuICAgICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHRoaXMuX2dldFRleHQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGh0bWwgcmFuZ2Ugb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbCByYW5nZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHJhbmdlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciAoYW5kIGFzc29jaWF0ZWQgY29udGVudClcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgdGhlIGRlc2lyZWQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHZhbHVlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnZhbHVlQXNOdW1iZXIgPSB2YWw7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbiBzbGlkZXIgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWluKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1pbik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF4IHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1heCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBjb2xvciBmb3IgdGhlIHNsaWRlclxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCBjb2xvcnMoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIGNvbG9yc1xyXG4gICAgICB0aGlzLl9jb2xvcnMgPSBuZXcgQ29sb3JSYW5nZShjb2xvcnMpO1xyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGdyYWRpZW50IHN0eWxlIGZvciB0aGUgcmFuZ2Ugb2JqZWN0XHJcbiAgICAgIGxldCBncmFkaWVudFN0ciA9ICc5MGRlZyc7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGdyYWRpZW50U3RyICs9ICcsICcgKyBjb2xvcnNbaV0udG9Dc3MoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9yYW5nZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCgnICsgZ3JhZGllbnRTdHIgKyAnKSc7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIHNwYW4gY29sb3IgdG9vXHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBodG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBodG1sQ29sb3JXaXRoQWxwaGEudHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYSBnbENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBnbENvbG9yKCk6IGdsQ29sb3IzIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCkudG9HbENvbG9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBuZXcgZ2xDb2xvcjMoWzAsIDAsIDBdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCIvKipcclxuICogU3BoZXJpY2FsIGNvb3JkaW5hdGVzIGJhc2VkIG9uIHRoZSBXZWJHTCB2aWV3aW5nIHN5c3RlbTogeD1sZWZ0LXJpZ2h0LCB5PXVwLWRvd24sIHo9bmVhci1mYXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWxDb29yZCB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxldmF0aW9uIGZyb20gdGhlIGZsb29yIHRvIHRoZSBwb2ludC4gMCBhbmQgMTgwIGFyZSBvbiB0aGVcclxuICAgICogZmxvb3IuIDkwIHBvaW50cyB1cC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBlbGV2YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYW5nbGUsIHdoZW4gbG9va2luZyBkb3duIGZyb20gdGhlIHRvcCwgdG8gdGhlIHBvaW50LiAwIHBvaW50cyByaWdodC5cclxuICAgICovXHJcbiAgIHB1YmxpYyByb3RhdGlvbkFuZ2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSByYWRpdXNcclxuICAgICogQHBhcmFtIGVsZXZhdGlvbkFuZ2xlIFxyXG4gICAgKiBAcGFyYW0gcm90YXRpb25BbmdsZSBcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgZWxldmF0aW9uQW5nbGU6IG51bWJlciwgcm90YXRpb25BbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICB0aGlzLmVsZXZhdGlvbkFuZ2xlID0gZWxldmF0aW9uQW5nbGU7XHJcbiAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IHJvdGF0aW9uQW5nbGU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3BoZXJpY2FsIGNvb3JkaW5hdGUgZnJvbSBhIGNhcnRlc2lhbiBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHBvcyBUaGUgY2FydGVzaWFuIHBvaW50LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc3BoZXJpY2FsIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21YWVoocG9zOiBudW1iZXJbXSk6IFNwaGVyaWNhbENvb3JkIHtcclxuXHJcbiAgICAgIGxldCB4ID0gcG9zWzBdO1xyXG4gICAgICBsZXQgeSA9IHBvc1sxXTtcclxuICAgICAgbGV0IHogPSBwb3NbMl07XHJcblxyXG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XHJcbiAgICAgIGxldCByb3RhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hdGFuMih6LCB4KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hc2luKHkgLyByYWRpdXMpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcGhlcmljYWxDb29yZChyYWRpdXMsIGVsZXZhdGlvbkFuZ2xlLCByb3RhdGlvbkFuZ2xlKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgc3BoZXJpY2FsIGNvb3JkaW5hdGUgdG8gYSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1hZWigpOiBudW1iZXJbXSB7XHJcblxyXG4gICAgICBsZXQgZmxvb3JSYWRpdXMgPSB0aGlzLnJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeCA9IGZsb29yUmFkaXVzICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeiA9IGZsb29yUmFkaXVzICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBbeCwgeSwgel07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvVGV4dHVyZVJlbmRlcmVyVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgZnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1RleHR1cmVSZW5kZXJlckZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGRvZXMgdGhlIHdvcmsgb2YgYnVpbGRpbmcgdGhlIFBhdGggVHJhY2VkIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIge1xyXG5cclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgdmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcblxyXG4gICBwcml2YXRlIHZlcnRpY2VzID0gW1xyXG4gICAgICAtMSwgLTEsXHJcbiAgICAgIC0xLCArMSxcclxuICAgICAgKzEsIC0xLFxyXG4gICAgICArMSwgKzFcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHZlcnRleCBidWZmZXIgLSB0aGUgYmxvY2sgd2UnbGwgZHJhdyBvdXIgcmVuZGVyZWQgdGV4dHVyZSBvblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHNoYWRlclxyXG4gICAgICB0aGlzLnByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoZ2wsIHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZW5kZXIodGV4dHVyZTogV2ViR0xUZXh0dXJlLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KFxyXG4gICAgICAgICAoZ2wuY2FudmFzLndpZHRoIC0gd2lkdGgpIC8gMixcclxuICAgICAgICAgKGdsLmNhbnZhcy5oZWlnaHQgLSBoZWlnaHQpIC8gMixcclxuICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgIGhlaWdodFxyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBsYW5lc0FwcCB9IGZyb20gXCIuL1BsYW5lc0FwcFwiO1xyXG5pbXBvcnQgeyB0b1JhZCwgdG9EZWcsIGNsYW1wLCBpc01vYmlsZSB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgVmVjMiB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBQb2ludGVyRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vUG9pbnRlckV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG4vLyBUT0RPIG1ha2UgdGhlc2UgdmFyaWFibGVzXHJcbmV4cG9ydCBsZXQgdGV4dHVyZVNpemUgPSAyNTY7XHJcbmV4cG9ydCBsZXQgZGlzcGxheVNpemUgPSAxNTA7XHJcblxyXG5leHBvcnQgdHlwZSBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuXHJcbmNvbnN0IE5PTUlOQUxfRElTUExBWV9TSVpFID0gMTUwO1xyXG5jb25zdCBOT01JTkFMX0tOT0JfTEVOR1RIID0gMjU7XHJcbmNvbnN0IE5PTUlOQUxfS05PQl9SQURJVVMgPSAxMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGRDdHJsIHtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBwcml2YXRlIGhpZGRlbkNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHByaXZhdGUgYXBwOiBQbGFuZXNBcHA7XHJcbiAgIHByaXZhdGUgbW91c2VPZmZzZXQgPSBuZXcgVmVjMigpO1xyXG4gICBwcml2YXRlIGhpdCA9IDA7XHJcbiAgIHByaXZhdGUgaGFuZGxlcjogUG9pbnRlckV2ZW50SGFuZGxlcjtcclxuXHJcbiAgIHByaXZhdGUgYmFsbENlbnRlcjogVmVjMjtcclxuICAgcHJpdmF0ZSBwMTogVmVjMjtcclxuICAgcHJpdmF0ZSBwMjogVmVjMjtcclxuXHJcbiAgIHByaXZhdGUgb25UaHJlc2hvbGQxQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbjtcclxuICAgcHJpdmF0ZSBvblRocmVzaG9sZDJDaGFuZ2U6IFRocmVzaG9sZENoYW5nZUZ1bmN0aW9uO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICBhcHA6IFBsYW5lc0FwcCxcclxuICAgICAgb25UaHJlc2hvbGQxQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbixcclxuICAgICAgb25UaHJlc2hvbGQyQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvblxyXG4gICApIHtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBkaXNwbGF5U2l6ZSA9IDMwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgIHRoaXMub25UaHJlc2hvbGQxQ2hhbmdlID0gb25UaHJlc2hvbGQxQ2hhbmdlO1xyXG4gICAgICB0aGlzLm9uVGhyZXNob2xkMkNoYW5nZSA9IG9uVGhyZXNob2xkMkNoYW5nZTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuY2FudmFzLmlkID0gJ1RocmVzaG9sZENhbnZhcyc7XHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gZGlzcGxheVNpemU7XHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRpc3BsYXlTaXplO1xyXG5cclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLndpZHRoID0gdGV4dHVyZVNpemU7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLmhlaWdodCA9IHRleHR1cmVTaXplO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5DYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIodGhpcy5jYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Eb3duID0gKHBvczogVmVjMikgPT4gdGhpcy5vbkRvd24ocG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRHJhZyA9IChwb3M6IFZlYzIsIGRlbHRhOiBWZWMyKSA9PiB0aGlzLm9uRHJhZyhwb3MsIGRlbHRhKTtcclxuICAgfVxyXG4gICBwcml2YXRlIG9uRG93bihwb3M6IFZlYzIpIHtcclxuXHJcbiAgICAgIHRoaXMuaGl0VGVzdChwb3MpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGhpdFRlc3QocG9zOiBWZWMyKSB7XHJcbiAgICAgIGxldCBkMSA9IHRoaXMucDEuZGlzdGFuY2UocG9zKTtcclxuICAgICAgbGV0IGQyID0gdGhpcy5wMi5kaXN0YW5jZShwb3MpO1xyXG5cclxuICAgICAgY29uc3QgSElUX1JBRElVUyA9IE5PTUlOQUxfS05PQl9SQURJVVMgKiAoZGlzcGxheVNpemUgLyBOT01JTkFMX0RJU1BMQVlfU0laRSk7XHJcbiAgICAgIGlmIChkMSA8IEhJVF9SQURJVVMgJiYgZDEgPD0gZDIpIHtcclxuICAgICAgICAgdGhpcy5oaXQgPSAxO1xyXG4gICAgICAgICB0aGlzLm1vdXNlT2Zmc2V0ID0gbmV3IFZlYzIoW3RoaXMucDEueCAtIHBvcy54LCB0aGlzLnAxLnkgLSBwb3MueV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGQyIDwgSElUX1JBRElVUyAmJiBkMiA8PSBkMSkge1xyXG4gICAgICAgICB0aGlzLmhpdCA9IDI7XHJcbiAgICAgICAgIHRoaXMubW91c2VPZmZzZXQgPSBuZXcgVmVjMihbdGhpcy5wMi54IC0gcG9zLngsIHRoaXMucDIueSAtIHBvcy55XSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gMDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRHJhZyhwb3M6IFZlYzIsIGRlbHRhOiBWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLmhpdCA+IDApIHtcclxuICAgICAgICAgbGV0IGhpdFB0ID0gbmV3IFZlYzIoW3Bvcy54ICsgdGhpcy5tb3VzZU9mZnNldC54LCBwb3MueSArIHRoaXMubW91c2VPZmZzZXQueV0pO1xyXG4gICAgICAgICBoaXRQdC54ID0gTWF0aC5tYXgoaGl0UHQueCwgdGhpcy5iYWxsQ2VudGVyLngpO1xyXG4gICAgICAgICBoaXRQdC55ID0gTWF0aC5taW4oaGl0UHQueSwgdGhpcy5iYWxsQ2VudGVyLnkpO1xyXG4gICAgICAgICBsZXQgcmFkaXVzID0gdGhpcy5iYWxsQ2VudGVyLmRpc3RhbmNlKGhpdFB0KTtcclxuICAgICAgICAgbGV0IGFuZ2xlID0gY2xhbXAodG9EZWcoTWF0aC5hc2luKChoaXRQdC54IC0gdGhpcy5iYWxsQ2VudGVyLngpIC8gcmFkaXVzKSksIDAsIDkwKTtcclxuICAgICAgICAgaWYgKHRoaXMuaGl0ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRocmVzaG9sZDFDaGFuZ2UoYW5nbGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uVGhyZXNob2xkMkNoYW5nZShhbmdsZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgIGxldCBiYWxsSW1hZ2VEYXRhID0gdGhpcy5hcHAucmVuZGVyZXIuZ2V0QmFsbEltYWdlKCk7XHJcblxyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShiYWxsSW1hZ2VEYXRhLmltYWdlLCAwLCAwKTtcclxuXHJcbiAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSgwLCBkaXNwbGF5U2l6ZSAvIDIpO1xyXG4gICAgICBjdHguc2NhbGUoZGlzcGxheVNpemUgLyB0ZXh0dXJlU2l6ZSwgLWRpc3BsYXlTaXplIC8gdGV4dHVyZVNpemUpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaGlkZGVuQ2FudmFzLCAwLCAtdGV4dHVyZVNpemUgLyAyKTtcclxuXHJcbiAgICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICAgICB0aGlzLmJhbGxDZW50ZXIgPSBuZXcgVmVjMihbXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsQ2VudGVyLngsXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogKDEgLSBiYWxsSW1hZ2VEYXRhLmJhbGxDZW50ZXIueSlcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpbWVncmVlbic7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjaydcclxuXHJcbiAgICAgIGNvbnN0IEtOT0JfTEVOR1RIID0gTk9NSU5BTF9LTk9CX0xFTkdUSCAqIChkaXNwbGF5U2l6ZSAvIE5PTUlOQUxfRElTUExBWV9TSVpFKTtcclxuICAgICAgY29uc3QgS05PQl9SQURJVVMgPSBOT01JTkFMX0tOT0JfUkFESVVTICogKGRpc3BsYXlTaXplIC8gTk9NSU5BTF9ESVNQTEFZX1NJWkUpO1xyXG4gICAgICBsZXQgciA9IGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsUmFkaXVzO1xyXG4gICAgICBsZXQgczEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgcik7XHJcbiAgICAgIHRoaXMucDEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgciArIEtOT0JfTEVOR1RIKTtcclxuICAgICAgbGV0IHMyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIpO1xyXG4gICAgICB0aGlzLnAyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIgKyBLTk9CX0xFTkdUSCk7XHJcblxyXG4gICAgICBjdHgubGluZVdpZHRoID0gKDEgLyAxNTApICogZGlzcGxheVNpemU7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbyhzMS54LCBzMS55KTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLnAxLngsIHRoaXMucDEueSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh0aGlzLnAxLngsIHRoaXMucDEueSwgS05PQl9SQURJVVMsIDAsIHRvUmFkKDM2MCkpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oczIueCwgczIueSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5wMi54LCB0aGlzLnAyLnkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmModGhpcy5wMi54LCB0aGlzLnAyLnksIEtOT0JfUkFESVVTLCAwLCB0b1JhZCgzNjApKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFB0KGNlbnRlcjogVmVjMiwgdGhyZXNob2xkOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogVmVjMiB7XHJcblxyXG4gICAgICBsZXQgb3kgPSByYWRpdXMgKiBNYXRoLnNpbih0b1JhZCg5MCAtIHRocmVzaG9sZCkpO1xyXG4gICAgICBsZXQgb3ggPSByYWRpdXMgKiBNYXRoLmNvcyh0b1JhZCg5MCAtIHRocmVzaG9sZCkpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBWZWMyKFtjZW50ZXIueCArIG94LCBjZW50ZXIueSAtIG95XSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFZvbHVtZSB9IGZyb20gXCIuL1ZvbHVtZVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBCbG9iRmlsZSB9IGZyb20gXCIuL0Jsb2JGaWxlXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRWZWMzIH0gZnJvbSBcIi4vSW5kZXhlZFZlYzNcIjtcclxuaW1wb3J0IHsgSVZlYzMgfSBmcm9tIFwiLi9JVmVjM1wiO1xyXG5cclxuZXhwb3J0IGVudW0gTm9ybWFsVHlwZSB7XHJcbiAgIFNtb290aCxcclxuICAgRmxhdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpEYXRhIHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB2ZXJ0aWNlczogRmxvYXQzMkFycmF5O1xyXG4gICBub3JtYWxzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIGluZGljZXM6IEludDMyQXJyYXk7XHJcbiAgIGJveE1pbjogVmVjMztcclxuICAgYm94TWF4OiBWZWMzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBjb21wdXRlIG5vcm1hbHMgZm9yIHZlcnRpY2VzIHRoYXQgam9pbiBtdWx0aXBsZSBmYWNlc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlOb3JtVmVydGV4IHtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBWZWMzKSB7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbm9ybWFsIGJ5IGF2ZXJhZ2luZyBhbGwgdGhlIGluZGl2aWR1YWwgbm9ybWFscyBhc3NvY2lhdGVkIHdpdGggdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBub3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGxldCBuID0gbmV3IFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZnJvbSBhIGJ1bmNoIG9mIHRyaWFuZ2xlcy4gVGhlIGNsYXNzXHJcbiAqIGVmZmljaWVudGx5IG1hbmFnZXMgdGhlIHRyaWFuZ2xlcyBieSBzdG9yaW5nIHRoZW0gaW4gdm9sdW1lcyBhbmQgYnlcclxuICogcGFzc2luZyB0aGVtIHRvIFdlYkdMIHVzaW5nIFVuaWZvcm0gQnVmZmVyc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqIHtcclxuICAgcHVibGljIHZlcnRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwdWJsaWMgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgcHVibGljIGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgIHB1YmxpYyBib3hNaW4gPSBuZXcgVmVjMyhbTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgYm94TWF4ID0gbmV3IFZlYzMoWy1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUVdKTtcclxuICAgcHVibGljIHZvbHVtZXM6IFZvbHVtZVtdID0gW107XHJcbiAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVZlcnRpY2VzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVRyaWFuZ2xlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC54IC0gdGhpcy5ib3hNaW4ueDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnkgLSB0aGlzLmJveE1pbi55O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC56IC0gdGhpcy5ib3hNaW4uejtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjZW50ZXIoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi54ICsgdGhpcy5ib3hNYXgueCkgLyAyLFxyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueSArIHRoaXMuYm94TWF4LnkpIC8gMixcclxuICAgICAgICAgKHRoaXMuYm94TWluLnogKyB0aGlzLmJveE1heC56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobmFtZT86IHN0cmluZykge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0VHJpYW5nbGUoaW5kZXg6IG51bWJlcik6IEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgICAgIGxldCBpMSA9IHRoaXMuaW5kaWNlc1szICogaW5kZXggKyAwXTtcclxuICAgICAgbGV0IGkyID0gdGhpcy5pbmRpY2VzWzMgKiBpbmRleCArIDFdO1xyXG4gICAgICBsZXQgaTMgPSB0aGlzLmluZGljZXNbMyAqIGluZGV4ICsgMl07XHJcbiAgICAgIHJldHVybiBuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHRoaXMubm9ybWFscywgaTEsIGkyLCBpMyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTY2FsZXMgdGhlIG9iamVjdCB0byB0aGUgc3BlY2lmaWVkIHNpemUgYW5kIGNlbnRlcnMgaXQgYWJvdXQgKDAsMCwwKVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNpemUgVGhlIG1heCBzaXplIGZvciB0aGUgd2lkdGgsIGhlaWdodCwgYW5kIGRlcHRoXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXV0b0NlbnRlcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCB0cmFucyA9IG5ldyBWZWMzKFtcclxuICAgICAgICAgLSh0aGlzLmJveE1heC54ICsgdGhpcy5ib3hNaW4ueCkgLyAyLFxyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnkgKyB0aGlzLmJveE1pbi55KSAvIDIsXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueiArIHRoaXMuYm94TWluLnopIC8gMixcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgc2NhbGUgPSBzaXplIC8gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSBuZXcgSW5kZXhlZFZlYzModGhpcy52ZXJ0aWNlcywgaSk7XHJcblxyXG4gICAgICAgICB2LnggPSAodi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi55ID0gKHYueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYueiA9ICh2LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveE1pbi54ID0gKHRoaXMuYm94TWluLnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gKHRoaXMuYm94TWluLnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gKHRoaXMuYm94TWluLnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gKHRoaXMuYm94TWF4LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gKHRoaXMuYm94TWF4LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gKHRoaXMuYm94TWF4LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHYuYm94TWluLnggPSAodi5ib3hNaW4ueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnkgPSAodi5ib3hNaW4ueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnogPSAodi5ib3hNaW4ueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnggPSAodi5ib3hNYXgueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnkgPSAodi5ib3hNYXgueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnogPSAodi5ib3hNYXgueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdhdXRvQWRqdXN0KCknKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNoaWZ0IHRoZSBvYmplY3QgaW4gc3BhY2UuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBhbW91bnQgdG8gc2hpZnRcclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBWZWMzKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IG5ldyBJbmRleGVkVmVjMyh0aGlzLnZlcnRpY2VzLCBpKTtcclxuXHJcbiAgICAgICAgIHYueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdi55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2LnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogKz0gb2Zmc2V0Lno7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9sdW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdGhpcy52b2x1bWVzW2ldO1xyXG4gICAgICAgICB2b2wuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1pbi56ICs9IG9mZnNldC56O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1heC56ICs9IG9mZnNldC56O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCcmVha3MgdGhlIG9iamVjdCBpbnRvIGV2ZW5seSBzcGFjZWQgdm9sdW1lcy4gVGhlIG51bWJlciBvZiB2b2x1bWVzIGlzIGF1dG9tYXRpY2FsbHlcclxuICAgICogZGV0ZXJtaW5lZCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHRyaWFuZ2xlcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBicmVha0ludG9Wb2x1bWVzKCkge1xyXG4gICAgICBsZXQgbnVtU3RlcHM7XHJcbiAgICAgIGlmICh0aGlzLm51bVRyaWFuZ2xlcyA8IDQwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm51bVRyaWFuZ2xlcyA8IDE1MDApIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52b2x1bWVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3cobnVtU3RlcHMsIDMpOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52b2x1bWVzLnB1c2gobmV3IFZvbHVtZSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWCAtIHRoaXMuYm94TWluLngpIC8gKHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54KSk7XHJcbiAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblkgLSB0aGlzLmJveE1pbi55KSAvICh0aGlzLmJveE1heC55IC0gdGhpcy5ib3hNaW4ueSkpO1xyXG4gICAgICAgICBsZXQgeiA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5aIC0gdGhpcy5ib3hNaW4ueikgLyAodGhpcy5ib3hNYXgueiAtIHRoaXMuYm94TWluLnopKTtcclxuICAgICAgICAgeCA9IGNsYW1wKHgsIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHkgPSBjbGFtcCh5LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB6ID0gY2xhbXAoeiwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgbGV0IGluZGV4ID0geCArIHkgKiBudW1TdGVwcyArIHogKiBudW1TdGVwcyAqIG51bVN0ZXBzO1xyXG4gICAgICAgICB0aGlzLnZvbHVtZXNbaW5kZXhdLnB1c2godCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVCb3VuZHModjogSVZlYzMpIHtcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHYueCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB2LnkpO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdi56KTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHYueCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB2LnkpO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueiwgdi56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHB1c2hRdWFkKHYxOiBJVmVjMywgdjI6IElWZWMzLCB2MzogSVZlYzMsIHY0OiBJVmVjMykge1xyXG5cclxuICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjEsIHYyLCB2Myk7XHJcbiAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHYyLCB2NCwgdjMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcHVzaFRyaWFuZ2xlKHYxOiBJVmVjMywgdjI6IElWZWMzLCB2MzogSVZlYzMpIHtcclxuXHJcbiAgICAgIC8vIGFkZCBpbmRpY2VzXHJcbiAgICAgIGxldCBpMSA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgIGxldCBpMiA9IGkxICsgMTtcclxuICAgICAgbGV0IGkzID0gaTEgKyAyO1xyXG4gICAgICB0aGlzLmluZGljZXMucHVzaChpMSwgaTIsIGkzKTtcclxuXHJcbiAgICAgIC8vIGFkZCB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2godjEueCwgdjEueSwgdjEueiwgdjIueCwgdjIueSwgdjIueiwgdjMueCwgdjMueSwgdjMueik7XHJcbiAgICAgIHRoaXMudXBkYXRlQm91bmRzKHYxKTtcclxuICAgICAgdGhpcy51cGRhdGVCb3VuZHModjIpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUJvdW5kcyh2Myk7XHJcblxyXG4gICAgICAvLyBhZGQgbm9ybWFsc1xyXG4gICAgICBsZXQgdHJpID0gbmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCB0aGlzLm5vcm1hbHMsIGkxLCBpMiwgaTMpO1xyXG4gICAgICBsZXQgbm9ybWFsID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm5vcm1hbC52YWx1ZXMpO1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5ub3JtYWwudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWxzKHR5cGU6IE5vcm1hbFR5cGUpIHtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gTm9ybWFsVHlwZS5TbW9vdGgpIHtcclxuICAgICAgICAgbGV0IG11bHRpTm9ybVZlcnRpY2VzOiBNdWx0aU5vcm1WZXJ0ZXhbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlcy5wdXNoKG5ldyBNdWx0aU5vcm1WZXJ0ZXgoKSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0b3JlIHRoZSBub3JtYWxzIHdpdGggZWFjaCB2ZXJ0ZXggLSB3ZSdsbCBsYXRlciBhdmVyYWdlIHRoZXNlXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgICAgbGV0IG4gPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaTFdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pMl0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmkzXS5wdXNoKG4pO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgbm9ybWFscyBhcnJheVxyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0aU5vcm1WZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5tdWx0aU5vcm1WZXJ0aWNlc1tpXS5ub3JtYWwudmFsdWVzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyB0byBnbyB0aGlzIHdheSB3ZSBuZWVkIHRvIGhhdmUgYSB1bmlxdWUgdmVjdG9yIGFuZCBub3JtYWwgZm9yIGVhY2ggdHJpYW5nbGVcclxuICAgICAgICAgLy8gY29ybmVyLiBCbG93IGF3YXkgdGhlIG9sZCBzdHVmZiBhbmQgcmVidWlsZFxyXG4gICAgICAgICBsZXQgb2xkSW5kaWNlcyA9IHRoaXMuaW5kaWNlcztcclxuICAgICAgICAgbGV0IG9sZFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcztcclxuXHJcbiAgICAgICAgIC8vIHJlc2V0IGV2ZXJ5dGhpbmdcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBbXTtcclxuICAgICAgICAgdGhpcy5pbmRpY2VzID0gW107XHJcblxyXG4gICAgICAgICAvLyByZWJ1aWxkXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkSW5kaWNlcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHYxID0gbmV3IEluZGV4ZWRWZWMzKG9sZFZlcnRpY2VzLCBvbGRJbmRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICBsZXQgdjIgPSBuZXcgSW5kZXhlZFZlYzMob2xkVmVydGljZXMsIG9sZEluZGljZXNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIGxldCB2MyA9IG5ldyBJbmRleGVkVmVjMyhvbGRWZXJ0aWNlcywgb2xkSW5kaWNlc1szICogaSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjEsIHYyLCB2Myk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ2NvbXB1dGVOb3JtYWxzJyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgeChpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgeShpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDFdO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgeihpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDJdO1xyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgZmluZEJvdW5kcygpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRoaXMueChpKSk7XHJcbiAgICAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0aGlzLnkoaSkpO1xyXG4gICAgICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdGhpcy56KGkpKTtcclxuXHJcbiAgICAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0aGlzLngoaSkpO1xyXG4gICAgICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdGhpcy55KGkpKTtcclxuICAgICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRoaXMueihpKSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgaW4gdGhlIGZvciAuT0JKIGZpbGUgZm9ybWF0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9PYmpTdHJpbmcoZGlnaXRzID0gOCkge1xyXG5cclxuICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICBzdHIgKz0gJyMgVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJyMgVHJpYW5nbGVzOiAnICsgdGhpcy5udW1UcmlhbmdsZXMgKyAnXFxuJztcclxuICAgICAgc3RyICs9ICdcXG4nO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzO1xyXG4gICAgICAgICBzdHIgKz0gJ3YgJyArIHZbMyAqIGkgKyAwXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdlszICogaSArIDFdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2WzMgKiBpICsgMl0udG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBuID0gdGhpcy5ub3JtYWxzO1xyXG4gICAgICAgICBzdHIgKz0gJ3ZuICcgKyBuWzMgKiBpICsgMF0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG5bMyAqIGkgKyAxXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgblszICogaSArIDJdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHQgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG4gICAgICAgICBzdHIgKz0gJ2YgJyArXHJcbiAgICAgICAgICAgICh0LmkxICsgMSkgKyAnLy8nICsgKHQuaTEgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmkyICsgMSkgKyAnLy8nICsgKHQuaTIgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmkzICsgMSkgKyAnLy8nICsgKHQuaTMgKyAxKSArICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgaWYgKG5vcm1hbFR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcblxyXG4gICAgICAgICBsZXQgdmVydGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbiAgICAgICAgIGxldCBpbmRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgLy8gZmlyc3QgZ2VuZXJhdGUgYSB1bmlxdWUgc2V0IG9mIHZlcnRpY2VzXHJcbiAgICAgICAgIGxldCB1bmlxdWVWZXJ0aWNlczogSW5kZXhlZFZlYzNbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9sZFZlcnRleCA9IG5ldyBJbmRleGVkVmVjMyh0aGlzLnZlcnRpY2VzLCBpKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAwXS50b0ZpeGVkKDQpICsgJyAnICsgdGhpcy52ZXJ0aWNlc1szICogaSArIDFdLnRvRml4ZWQoNCkgKyAnICcgKyB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl0udG9GaXhlZCg0KTtcclxuICAgICAgICAgICAgbGV0IG9sZEluZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgIGxldCBuZXdJbmRleDtcclxuICAgICAgICAgICAgaWYgKHZlcnRleFRvSW5kZXhNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgLy8ganVzdCBtYXAgdGhlIG9sZCBpbmRleCB0byB0aGUgZXhpc3RpbmcgZW50cnlcclxuICAgICAgICAgICAgICAgbmV3SW5kZXggPSB2ZXJ0ZXhUb0luZGV4TWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZW50cnlcclxuICAgICAgICAgICAgICAgbmV3SW5kZXggPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICB2ZXJ0ZXhUb0luZGV4TWFwLnNldChrZXksIG5ld0luZGV4KTtcclxuICAgICAgICAgICAgICAgdW5pcXVlVmVydGljZXMucHVzaChvbGRWZXJ0ZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB0cmFuc2xhdGlvblxyXG4gICAgICAgICAgICBpbmRleFRvSW5kZXhNYXAuc2V0KG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHJlc2V0IGFsbCB0aGUgdmVydGljZXNcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1bmlxdWVWZXJ0aWNlc1tpXS54KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHVuaXF1ZVZlcnRpY2VzW2ldLnkpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godW5pcXVlVmVydGljZXNbaV0ueik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHJlbWFwIGFsbCBpbmRpY2VzXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IHRoaXMuaW5kaWNlc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2VzW2ldID0gaW5kZXhUb0luZGV4TWFwLmdldChvbGRJbmRleCArIDEpIC0gMTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGZvciBmbGF0IG5vcm1hbHMuIE5ldyB2ZXJ0aWNlcyBhbmQgbm9ybWFscyBhcmUgY3JlYXRlZCBpbiBcclxuICAgICAgICAgLy8gY29tcHV0ZU5vcm1hbHMoKSBiZWxvdyBpZiBuZWVkZWRcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhub3JtYWxUeXBlKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbWJpbmUodE9iajogVHJpYW5nbGVPYmopIHtcclxuXHJcbiAgICAgIC8vIHNhdmUgdGhlIHZhbHVlIGZvciB0aGUgZmlyc3QgaW5kZXggb2YgdGhlIGNvbWJpbmVkIG9iamVjdHNcclxuICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0aGlzLm51bVZlcnRpY2VzO1xyXG5cclxuICAgICAgLy8gYWRkIHRoZSBvdGhlciB2ZXJ0aWNlcyBhbmQgbm9ybWFscyB0byBvdXJzXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaCguLi50T2JqLnZlcnRpY2VzKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4udE9iai5ub3JtYWxzKTtcclxuXHJcbiAgICAgIC8vIGFkZCB0aGUgb3RoZXIgaW5kaWNlcywgYnV0IG9mZnNldCB0aGVtIHByb3Blcmx5XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai5pbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKHN0YXJ0SW5kZXggKyB0T2JqLmluZGljZXNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBtZXJnZSB0aGUgYm91bmRpbmcgYm94ZXNcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRPYmouYm94TWluLngpO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueSwgdE9iai5ib3hNaW4ueSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSBNYXRoLm1pbih0aGlzLmJveE1pbi56LCB0T2JqLmJveE1pbi56KTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHRPYmouYm94TWF4LngpO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdE9iai5ib3hNYXgueSk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSBNYXRoLm1heCh0aGlzLmJveE1heC56LCB0T2JqLmJveE1heC56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvRGF0YSgpOiBUcmlhbmdsZU9iakRhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhO1xyXG4gICAgICBkYXRhLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubm9ybWFscyk7XHJcbiAgICAgIGRhdGEuaW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gdGhpcy5ib3hNaW4uY2xvbmUoKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSB0aGlzLmJveE1heC5jbG9uZSgpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tRGF0YShkYXRhOiBUcmlhbmdsZU9iakRhdGEpOiBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iaigpO1xyXG4gICAgICB0T2JqLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgIHRPYmoudmVydGljZXMgPSBBcnJheS5mcm9tKGRhdGEudmVydGljZXMpO1xyXG4gICAgICB0T2JqLm5vcm1hbHMgPSBBcnJheS5mcm9tKGRhdGEubm9ybWFscyk7XHJcbiAgICAgIHRPYmouaW5kaWNlcyA9IEFycmF5LmZyb20oZGF0YS5pbmRpY2VzKTtcclxuICAgICAgdE9iai5ib3hNaW4gPSBuZXcgVmVjMyhkYXRhLmJveE1pbi52YWx1ZXMpO1xyXG4gICAgICB0T2JqLmJveE1heCA9IG5ldyBWZWMzKGRhdGEuYm94TWF4LnZhbHVlcyk7XHJcbiAgICAgIHJldHVybiB0T2JqO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9CbG9iKCk6IEJsb2Ige1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGEgZGVzY3JpcHRpb25cclxuICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgIEZpbGVUeXBlOiAnQmluYXJ5IE9CSicsXHJcbiAgICAgICAgIFZlcnNpb246ICcxLjAnLFxyXG4gICAgICAgICBOYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGdldCB0aGUgcmF3IGRhdGFcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLnRvRGF0YSgpO1xyXG5cclxuICAgICAgLy8gYnJlYWsgaXQgaW50byBwYXJ0c1xyXG4gICAgICBsZXQgcGFydHM6IEJsb2JQYXJ0W10gPSBbXTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLnZlcnRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLm5vcm1hbHMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEuaW5kaWNlcyk7XHJcbiAgICAgIHBhcnRzLnB1c2gobmV3IEZsb2F0MzJBcnJheShkYXRhLmJveE1pbi52YWx1ZXMpKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWF4LnZhbHVlcykpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBCbG9iXHJcbiAgICAgIHJldHVybiBCbG9iRmlsZS5jcmVhdGVCbG9iKGluZm8sIHBhcnRzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBmcm9tQmxvYihibG9iOiBCbG9iKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBUcmlhbmdsZU9iai5ibG9iVG9EYXRhKGJsb2IpO1xyXG4gICAgICByZXR1cm4gVHJpYW5nbGVPYmouZnJvbURhdGEoZGF0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgYmxvYlRvRGF0YShibG9iOiBCbG9iKTogUHJvbWlzZTxUcmlhbmdsZU9iakRhdGE+IHtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFRyaWFuZ2xlT2JqRGF0YSgpO1xyXG4gICAgICBsZXQgYkZpbGUgPSBhd2FpdCBCbG9iRmlsZS5leHRyYWN0KGJsb2IpO1xyXG5cclxuICAgICAgZGF0YS5uYW1lID0gYkZpbGUuaW5mby5OYW1lO1xyXG4gICAgICBkYXRhLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1swXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5ub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1sxXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5pbmRpY2VzID0gbmV3IEludDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbMl0uYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gbmV3IFZlYzMoQXJyYXkuZnJvbShuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzNdLmFycmF5QnVmZmVyKCkpKSk7XHJcbiAgICAgIGRhdGEuYm94TWF4ID0gbmV3IFZlYzMoQXJyYXkuZnJvbShuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzRdLmFycmF5QnVmZmVyKCkpKSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqQnVpbGRlciBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZykge1xyXG4gICAgICBzdXBlcihuYW1lKTtcclxuICAgfVxyXG5cclxuICAgLy8gVE9ETyBwYXNzIGluIGFyZ3MgZm9yIGNvbnN0cnVjdGlvblxyXG4gICBwdWJsaWMgYWRkQXJyb3coKSB7XHJcbiAgICAgIGNvbnN0IE5VTV9TVEVQUyA9IDMwO1xyXG4gICAgICBjb25zdCBUT1RBTF9MRU5HVEggPSAwLjQ7XHJcbiAgICAgIGNvbnN0IEFSUk9XX1JBRElVUyA9IDAuMTU7XHJcbiAgICAgIGNvbnN0IEFSUk9XX0xFTkdUSCA9IDEuNSAqIEFSUk9XX1JBRElVUztcclxuICAgICAgY29uc3QgU0hBRlRfUkFESVVTID0gMC41ICogQVJST1dfUkFESVVTO1xyXG4gICAgICBjb25zdCBUSVAgPSBuZXcgVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICBjb25zdCBUSVBfQkFTRSA9IG5ldyBWZWMzKFswLCBBUlJPV19MRU5HVEgsIDBdKTtcclxuXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSBhcnJvdyBoZWFkXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IHgxID0gQVJST1dfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkxID0gQVJST1dfTEVOR1RIO1xyXG4gICAgICAgICBsZXQgejEgPSBBUlJPV19SQURJVVMgKiBNYXRoLmNvcyhpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeDIgPSBBUlJPV19SQURJVVMgKiBNYXRoLnNpbigoaSArIDEpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeTIgPSBBUlJPV19MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6MiA9IEFSUk9XX1JBRElVUyAqIE1hdGguY29zKChpICsgMSkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcblxyXG4gICAgICAgICBsZXQgcDEgPSBuZXcgVmVjMyhbeDEsIHkxLCB6MV0pO1xyXG4gICAgICAgICBsZXQgcDIgPSBuZXcgVmVjMyhbeDIsIHkyLCB6Ml0pO1xyXG4gICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZShUSVAsIHAxLCBwMik7XHJcbiAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKFRJUF9CQVNFLCBwMiwgcDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgYXJyb3cgc2hhZnRcclxuICAgICAgY29uc3QgRU5EID0gbmV3IFZlYzMoWzAsIFRPVEFMX0xFTkdUSCwgMF0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4MSA9IFNIQUZUX1JBRElVUyAqIE1hdGguc2luKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB6MSA9IFNIQUZUX1JBRElVUyAqIE1hdGguY29zKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB4MiA9IFNIQUZUX1JBRElVUyAqIE1hdGguc2luKChpICsgMSkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB6MiA9IFNIQUZUX1JBRElVUyAqIE1hdGguY29zKChpICsgMSkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcblxyXG4gICAgICAgICBsZXQgcDEgPSBuZXcgVmVjMyhbeDEsIEFSUk9XX0xFTkdUSCwgejFdKTtcclxuICAgICAgICAgbGV0IHAyID0gbmV3IFZlYzMoW3gyLCBBUlJPV19MRU5HVEgsIHoyXSk7XHJcbiAgICAgICAgIGxldCBwMyA9IG5ldyBWZWMzKFt4MSwgVE9UQUxfTEVOR1RILCB6MV0pO1xyXG4gICAgICAgICBsZXQgcDQgPSBuZXcgVmVjMyhbeDIsIFRPVEFMX0xFTkdUSCwgejJdKTtcclxuICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUocDEsIHAyLCBwNCk7XHJcbiAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHAxLCBwNCwgcDMpO1xyXG4gICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZShFTkQsIHAzLCBwNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGFkZFNwaGVyZShudW1TdGVwczogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2VudGVyOiBWZWMzKSB7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgdmVydGljZXNcclxuICAgICAgbGV0IHZlcnRpY2VzOiBWZWMzW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwczsgaSsrKSB7XHJcbiAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gobmV3IFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSArIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoaSA9PT0gbnVtU3RlcHMgLSAxKSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gobmV3IFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSAtIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5jb3MoaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCByID0gcmFkaXVzICogTWF0aC5zaW4oaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBpICUgMiA/IDAgOiAoKDIgKiBNYXRoLlBJKSAvIG51bVN0ZXBzKSAqIDAuNTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgdmVydGljZXMucHVzaChuZXcgVmVjMyhbXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci54ICsgciAqIE1hdGguc2luKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueSArIHksXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci56ICsgciAqIE1hdGguY29zKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25uZWN0IHRoZSB2ZXJ0aWNlc1xyXG4gICAgICBsZXQgZmlyc3QgPSAwO1xyXG4gICAgICBsZXQgbGFzdCA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHMgLSAxOyBpKyspIHtcclxuICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1TdGVwczsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGZpcnN0O1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gaiA9PT0gKG51bVN0ZXBzIC0gMSkgPyAxIDogaTIgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2ZXJ0aWNlc1tpMV0sIHZlcnRpY2VzW2kyXSwgdmVydGljZXNbaTNdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpID09PSBudW1TdGVwcyAtIDIpIHtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBsYXN0IC0gbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGxhc3Q7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IHN0YXJ0SW5kZXggKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBqID09PSAobnVtU3RlcHMgLSAxKSA/IHN0YXJ0SW5kZXggOiBpMiArIDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHZlcnRpY2VzW2kxXSwgdmVydGljZXNbaTNdLCB2ZXJ0aWNlc1tpMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICBsZXQgc3RhcnRBID0gMSArIChpIC0gMSkgKiBudW1TdGVwcztcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0QiA9IDEgKyBpICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IHN0YXJ0QSArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEEgOiBpMSArIDE7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IHN0YXJ0QiArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpNCA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEIgOiBpMyArIDE7XHJcbiAgICAgICAgICAgICAgIGlmIChpICUgMikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2ZXJ0aWNlc1tpMV0sIHZlcnRpY2VzW2k0XSwgdmVydGljZXNbaTJdKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodmVydGljZXNbaTFdLCB2ZXJ0aWNlc1tpM10sIHZlcnRpY2VzW2k0XSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHZlcnRpY2VzW2kxXSwgdmVydGljZXNbaTNdLCB2ZXJ0aWNlc1tpMl0pO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2ZXJ0aWNlc1tpMl0sIHZlcnRpY2VzW2kzXSwgdmVydGljZXNbaTRdKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhZGRDdWJlKHNpemU6IG51bWJlciwgY2VudGVyOiBWZWMzKSB7XHJcblxyXG4gICAgICBsZXQgdjEgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjIgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjMgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjQgPSBuZXcgVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjUgPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjYgPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjcgPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pO1xyXG4gICAgICBsZXQgdjggPSBuZXcgVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pO1xyXG5cclxuICAgICAgdGhpcy5wdXNoUXVhZCh2MSwgdjIsIHYzLCB2NCk7XHJcbiAgICAgIHRoaXMucHVzaFF1YWQodjUsIHY3LCB2NiwgdjgpO1xyXG5cclxuICAgICAgdGhpcy5wdXNoUXVhZCh2MSwgdjUsIHYyLCB2Nik7XHJcbiAgICAgIHRoaXMucHVzaFF1YWQodjMsIHY0LCB2NywgdjgpO1xyXG5cclxuICAgICAgdGhpcy5wdXNoUXVhZCh2MSwgdjMsIHY1LCB2Nyk7XHJcbiAgICAgIHRoaXMucHVzaFF1YWQodjIsIHY2LCB2NCwgdjgpO1xyXG4gICB9XHJcblxyXG4gICBhZGREaXNrKG51bVN0ZXBzOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjZW50ZXI6IFZlYzMpIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG51bVN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHgxID0gY2VudGVyLnggKyByYWRpdXMgKiBNYXRoLnNpbigoaSAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkxID0gY2VudGVyLnk7XHJcbiAgICAgICAgIGxldCB6MSA9IGNlbnRlci56ICsgcmFkaXVzICogTWF0aC5jb3MoKGkgLyBudW1TdGVwcykgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB4MiA9IGNlbnRlci54ICsgcmFkaXVzICogTWF0aC5zaW4oKChpICsgMSkgLyBudW1TdGVwcykgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB5MiA9IGNlbnRlci55O1xyXG4gICAgICAgICBsZXQgejIgPSBjZW50ZXIueiArIHJhZGl1cyAqIE1hdGguY29zKCgoaSArIDEpIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkpO1xyXG5cclxuICAgICAgICAgbGV0IHAxID0gbmV3IFZlYzMoW3gxLCB5MSwgejFdKTtcclxuICAgICAgICAgbGV0IHAyID0gbmV3IFZlYzMoW3gyLCB5MiwgejJdKTtcclxuICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUoY2VudGVyLCBwMSwgcDIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5pbXBvcnQgeyBTdGF0dXNGdW5jdGlvbiB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGxvYWRzIGEgLm9iaiBmaWxlIGFuZCBjcmVhdGVzIHRyaWFuZ2xlcyBmb3IgaXRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iakZpbGUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzcmM6IHN0cmluZywgdXBkYXRlU3RhdHVzPzogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHN1cGVyKG5hbWUpO1xyXG5cclxuICAgICAgLy8gcmVjb3JkIHRoZSBzdGF0dXMgZnVuY3Rpb24uIElmIG9uZSBpcyBub3Qgc3VwcGxpZWQsIGNyZWF0ZSBvbmUgdGhhdCBkb2VzIG5vdGhpbmdcclxuICAgICAgaWYgKCF1cGRhdGVTdGF0dXMpIHtcclxuICAgICAgICAgdXBkYXRlU3RhdHVzID0gKHN0YXR1cykgPT4geyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnBhcnNlKHNyYywgdXBkYXRlU3RhdHVzKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZUZhY2UobGluZTogc3RyaW5nKTogeyBpVjogbnVtYmVyW10sIGlOOiBudW1iZXJbXSB9IHtcclxuICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgaVY6IFtdIGFzIG51bWJlcltdLFxyXG4gICAgICAgICBpTjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgIGxldCBudW1WYWxzID0gdG9rZW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmFsczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2YWxzID0gdG9rZW5zW2kgKyAxXS5zcGxpdCgnLycpO1xyXG4gICAgICAgICByZXQuaVYucHVzaChwYXJzZUludCh2YWxzWzBdKSAtIDEpO1xyXG4gICAgICAgICBpZiAodmFscy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgcmV0LmlOLnB1c2gocGFyc2VJbnQodmFsc1syXSkgLSAxKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2Uoc3JjOiBzdHJpbmcsIHVwZGF0ZVN0YXR1czogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZycpO1xyXG4gICAgICBsZXQgdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICBsZXQgcDIgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IGxpbmVzID0gc3JjLnNwbGl0KCdcXG4nKTtcclxuICAgICAgcC5sb2coJ3NwbGl0Jyk7XHJcblxyXG4gICAgICBsZXQgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBub3JtYWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBsZXQgdkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBuSW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG1hdGNoID0gdHJ1ZTtcclxuICAgICAgbGV0IGNvbnRhaW5zTm9ybWFscyA9IHRydWU7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIC8vIHJlcG9ydCBwcm9ncmVzcyBldmVyeSA1MCBtc1xyXG4gICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHQgPiA1MCkge1xyXG4gICAgICAgICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6ICcgKyAoMTAwICogaSAvIGxpbmVzLmxlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgICAgICAgICAgdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgndiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1sxXSkpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbM10pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3ZuICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMV0pKTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1szXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5wYXJzZUZhY2UobGluZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgIGlmIChyZXQuaVYubGVuZ3RoICE9PSByZXQuaU4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zTm9ybWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vcm1hbHMgbm90IHNwZWNpZmllZCBpbiBmaWxlLiBGbGF0IG5vcm1hbHMgd2lsbCBiZSBjb21wdXRlZC4nKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5pVi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmV0LmlWW2ldICE9IHJldC5pTltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1ZlcnRpY2VzIGFuZCBub3JtYWxzIGRvblxcJ3QgbWF0Y2guIENvbnRlbnQgd2lsbCBiZSByZS1pbmRleGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmV0LmlOLmxlbmd0aCA9PT0gNCkge1xyXG5cclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdKTtcclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsyXSwgcmV0LmlWWzNdKTtcclxuICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pO1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzJdLCByZXQuaU5bM10pO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHZJbmRpY2VzLnB1c2gocmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSk7XHJcbiAgICAgICAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgICAgbkluZGljZXMucHVzaChyZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ3BhcnNlJyk7XHJcblxyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgICAgICB0aGlzLmluZGljZXMgPSB2SW5kaWNlcztcclxuXHJcbiAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgIHRoaXMubm9ybWFscyA9IFtdO1xyXG4gICAgICAgICB0aGlzLmluZGljZXMgPSBbXTtcclxuXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdkluZGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsc1szICogbkluZGljZXNbaV0gKyAwXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbHNbMyAqIG5JbmRpY2VzW2ldICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWxzWzMgKiBuSW5kaWNlc1tpXSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2VzLnB1c2goaSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcC5sb2coJ3JlaW5kZXgnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLkZsYXQpO1xyXG4gICAgICAgICBwLmxvZygnY29tcHV0ZSBub3JtYWxzJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmluZEJvdW5kcygpO1xyXG4gICAgICBwLmxvZygnZmluZEJvdW5kcycpO1xyXG4gICAgICBwMi5sb2coJ1RvdGFsJyk7XHJcblxyXG4gICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6IDEwMCUnKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ05vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyaWFuZ2xlczogJyArIHRoaXMubnVtVHJpYW5nbGVzKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yMyB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxDb29yZCB9IGZyb20gXCIuL1NwaGVyaWNhbENvb3JkXCI7XHJcblxyXG4vKipcclxuICogVHlwZXMgZm9yIHRoZSB1bmlmb3JtIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVW5pZm9ybXMge1xyXG4gICB1U2NhbGU6IG51bWJlcjtcclxuICAgdVhPZmZzZXQ6IG51bWJlcjtcclxuICAgdVlPZmZzZXQ6IG51bWJlcjtcclxuICAgdU1vZGU6IFJlbmRlck1vZGU7XHJcbiAgIHVNYXhDaHJvbWE6IG51bWJlcjtcclxuXHJcbiAgIHVIaWdobGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IGdsQ29sb3IzO1xyXG4gICB1TWlkTGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcbiAgIHVEYXJrTGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcblxyXG4gICB1U2hhZG93Q29sb3I6IGdsQ29sb3IzO1xyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogZ2xDb2xvcjM7XHJcbiAgIHVEYXJrQWNjZW50Q29sb3I6IGdsQ29sb3IzO1xyXG5cclxuICAgdUxpZ2h0QWxwaGE6IG51bWJlcjtcclxuICAgdVNoYWRvd0FscGhhOiBudW1iZXI7XHJcblxyXG4gICB1TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdUxpZ2h0Q29sb3I6IGdsQ29sb3IzLFxyXG4gICB1TGlnaHRQb3M6IFZlYzMsXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdU9iakNvbG9yOiBnbENvbG9yMyxcclxuICAgdUJhbGxSYWRpdXM6IG51bWJlcixcclxuICAgdUV5ZTogVmVjMyxcclxuICAgdVRleHR1cmVTaXplOiBudW1iZXIsXHJcbiAgIHVSYW5kb206IG51bWJlcixcclxuICAgdVJheTAwOiBWZWMzLFxyXG4gICB1UmF5MDE6IFZlYzMsXHJcbiAgIHVSYXkxMDogVmVjMyxcclxuICAgdVJheTExOiBWZWMzLFxyXG4gICB1U2FtcGxlOiBudW1iZXIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWx1ZXMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBsZXQgVW5pZm9ybXM6IElVbmlmb3JtcyA9IHtcclxuICAgdVNjYWxlOiAxLjAsXHJcbiAgIHVYT2Zmc2V0OiAwLjAsXHJcbiAgIHVZT2Zmc2V0OiAwLjAsXHJcbiAgIHVNb2RlOiAwLFxyXG4gICB1TWF4Q2hyb21hOiAxLjAsXHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1TWlkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0xpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0FjY2VudENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1TGlnaHRBbHBoYTogMTAwMSxcclxuICAgdVNoYWRvd0FscGhhOiAxMDAwLFxyXG5cclxuICAgdUxpZ2h0SW50ZW5zaXR5OiAwLjcsXHJcbiAgIHVMaWdodENvbG9yOiBuZXcgZ2xDb2xvcjMoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgVmVjMyhuZXcgU3BoZXJpY2FsQ29vcmQoMiwgNjAsIDExMCkudG9YWVooKSksXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IDAuMyxcclxuICAgdU9iakNvbG9yOiBuZXcgZ2xDb2xvcjMoWzAuNSwgMC41LCAwLjhdKSxcclxuICAgdUJhbGxSYWRpdXM6IDAuNSxcclxuICAgdUV5ZTogbmV3IFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVSYW5kb206IE1hdGgucmFuZG9tKCksXHJcbiAgIHVSYXkwMDogbmV3IFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTAxOiBuZXcgVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MTA6IG5ldyBWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVNhbXBsZTogMC4wLFxyXG59XHJcbiIsImltcG9ydCB7IElWZWMzIH0gZnJvbSBcIi4vSVZlYzNcIjtcclxuXHJcbi8qKlxyXG4gKiBWZWN0b3IgY2xhc3MgZm9yIHVzZSB3aXRoIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmNsYXNzIFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzIgZXh0ZW5kcyBWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWMyIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMyKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgdG8gYW5vdGhlciBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciBwb2ludFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHBvaW50IGFuZCB0aGUgb3RoZXIgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXN0YW5jZShvdGhlcjogVmVjMik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54IC0gb3RoZXIueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSBvdGhlci55LCAyKSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWMzIGV4dGVuZHMgVmVjIGltcGxlbWVudHMgSVZlYzMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzModGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZGlnaXRzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gZGlzcGxheS4gVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gdG9GaXhlZCgpLlxyXG4gICAgKiBAcGFyYW0gZGl2aWRlciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGVhY2ggbnVtYmVyLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHM6IG51bWJlciwgZGl2aWRlciA9ICcsJyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLngudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMueS50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy56LnRvRml4ZWQoZGlnaXRzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBWZWMzIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGxldCByZXQgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXQudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnRyYWN0KHZlYzogVmVjMyk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAtIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC0gdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLSB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQWRkcyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBhZGQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYWRkKHZlYzogVmVjMyk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSArIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdICsgdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gKyB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IFZlYzMpOiBWZWMzIHtcclxuICAgICAgbGV0IEEgPSB0aGlzLnZhbHVlcztcclxuICAgICAgbGV0IEIgPSBvdGhlci52YWx1ZXM7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzQgZXh0ZW5kcyBWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIHgteS16IHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgY29tcHV0ZWQgYnkgZGl2aWRpbmcgdGhpcyB2ZWN0b3JzXHJcbiAgICAqIGVsZW1lbnRzIGJ5IHRoZSB3IHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4geC15LXogdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpdmlkZUJ5VygpOiBWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgdG9SYWQsIGlzTW9iaWxlIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gXCIuL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IE1hdDQgfSBmcm9tIFwiLi9NYXRcIjtcclxuaW1wb3J0IHsgVmVjNCwgVmVjMiB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBOb3JtYWxUeXBlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1vZGVsc0Ryb3BEb3duTWVudSB9IGZyb20gXCIuL01vZGVsc0Ryb3BEb3duTWVudVwiO1xyXG5pbXBvcnQgeyBNb2RlbExvYWRlciB9IGZyb20gXCIuL01vZGVsTG9hZGVyXCI7XHJcblxyXG5lbnVtIFBvaW50ZXJNb2RlIHtcclxuICAgVmlldyxcclxuICAgTGlnaHQsXHJcbn1cclxuXHJcbi8vY29uc3QgV0hJVEVfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1NSwgMjU1XSk7XHJcbmNvbnN0IFdISVRFX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTAsIDI0Ml0pO1xyXG5jb25zdCBCTEFDS19DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDBdKTtcclxuLy9jb25zdCBCTEFDS19DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzMwLCAyMCwgMF0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdlckFwcCB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgb3ZlcmxheTogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIGhhbmRsZXI6IFBvaW50ZXJFdmVudEhhbmRsZXI7XHJcblxyXG4gICBwcml2YXRlIGRpcnR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHJcbiAgIHByaXZhdGUgbG9hZGVyID0gbmV3IE1vZGVsTG9hZGVyKCk7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocXVlcnk6IHN0cmluZykge1xyXG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wb25lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdWaWV3ZXJBcHAnO1xyXG5cclxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2aWV3Q29udGFpbmVyLmlkID0gJ1ZpZXdDb250YWluZXInO1xyXG4gICAgICB2aWV3Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodmlld0NvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY3JlYXRlVmlld0VsZW1lbnRzKHZpZXdDb250YWluZXIpO1xyXG5cclxuICAgICAgY29uc3QgY3RybHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY3RybHNDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGN0cmxzQ29udGFpbmVyLmlkID0gJ0N0cmxzQ29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGN0cmxzQ29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jcmVhdGVDdHJsc0VsZW1lbnRzKGN0cmxzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZE1vZGVsKHRoaXMucXVlcnkpO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVWaWV3RWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjYW52YXMuaWQgPSAnTWFpbkNhbnZhcyc7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5pZCA9ICdPdmVybGF5JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcblxyXG4gICAgICAvLyBkb24ndCB0cnkgdG8gbWFrZSB0aGUgY2FudmFzIHRyYW5zcGFyZW50IHRvIHRoZSB1bmRlcmx5aW5nIGh0bWwuIFRoaXNcclxuICAgICAgLy8gc2VlbXMgdG8gbGltaXQgdGhlIGFscGhhIHZhbHVlcyB3ZSBjYW4gdXNlIGluIG91ciBzY2VuZS5cclxuICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCB7IGFscGhhOiBmYWxzZSB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ2wgPSBjb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMuZ2wpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLndoaXRlQ29sb3IgPSBXSElURV9DT0xPUjtcclxuICAgICAgdGhpcy5yZW5kZXJlci5ibGFja0NvbG9yID0gQkxBQ0tfQ09MT1I7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2hvd01pbmlWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgUG9pbnRlckV2ZW50SGFuZGxlcihjYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25EcmFnID0gKHBvczogVmVjMiwgZGVsdGE6IFZlYzIpID0+IHRoaXMub25EcmFnKHBvcywgZGVsdGEpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25DbGljayA9IChwb3M6IFZlYzIpID0+IHRoaXMub25DbGljayhwb3MpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25TY2FsZSA9IChzY2FsZTogbnVtYmVyLCBjaGFuZ2U6IG51bWJlcikgPT4gdGhpcy5vblNjYWxlKHNjYWxlLCBjaGFuZ2UpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Sb3RhdGUgPSAoYW5nbGU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4gdGhpcy5vblJvdGF0ZShhbmdsZSwgZGVsdGEpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25UcmFuc2xhdGUgPSAoZGVsdGE6IFZlYzIpID0+IHRoaXMub25UcmFuc2xhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgZG9jdW1lbnQub25rZXlwcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdpJzpcclxuICAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudE9iai5uYW1lICsgJ1xcbicgK1xyXG4gICAgICAgICAgICAgICAgICAnTnVtIFRyaWFuZ2xlczogJyArIHRoaXMucmVuZGVyZXIudE9iai5udW1UcmlhbmdsZXMudG9Mb2NhbGVTdHJpbmcoKSArICdcXG4nICtcclxuICAgICAgICAgICAgICAgICAgJ051bSBWZXJ0aWNlczogJyArIHRoaXMucmVuZGVyZXIudE9iai5udW1WZXJ0aWNlcy50b0xvY2FsZVN0cmluZygpICsgJ1xcbidcclxuICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgICAgICAgIHRoaXMub3B0aW1pemUoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3AnOlxyXG4gICAgICAgICAgICAgICB0aGlzLm9wdGltaXplKE5vcm1hbFR5cGUuRmxhdCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNob3dTaGFkb3dNYXAgPSAhdGhpcy5yZW5kZXJlci5zaG93U2hhZG93TWFwO1xyXG4gICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY3JlYXRlTW9kZWxzRHJvcERvd25NZW51KHBhcmVudCwgKGZpbGUpID0+IHRoaXMubG9hZE1vZGVsKGZpbGUpKTtcclxuXHJcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc2l6ZSgpO1xyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuXHJcbiAgICAgIGxldCBvYmogPSB0aGlzLnJlbmRlcmVyLm9iajtcclxuICAgICAgbGV0IG9sZE51bVZlcnRpY2VzID0gb2JqLnRPYmoubnVtVmVydGljZXM7XHJcblxyXG4gICAgICBvYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcblxyXG4gICAgICBsZXQgbmV3TnVtVmVydGljZXMgPSBvYmoudE9iai5udW1WZXJ0aWNlcztcclxuXHJcbiAgICAgIGxldCBtc2cgPSAnT3B0aW1pemVkIC5PQkogY29udGVudCBjb3BpZWQgdG8gY2xpcGJvYXJkXFxuXFxuJztcclxuICAgICAgbXNnICs9ICdOdW0gVHJpYW5nbGVzOiAnICsgb2JqLnRPYmoubnVtVHJpYW5nbGVzICsgJ1xcbic7XHJcbiAgICAgIG1zZyArPSAnTnVtIFZlcnRpY2VzOiAnICsgb2xkTnVtVmVydGljZXMgKyAnIHRvICcgKyBuZXdOdW1WZXJ0aWNlcyArICcsICcgKyAoMTAwICogbmV3TnVtVmVydGljZXMgLyBvbGROdW1WZXJ0aWNlcykudG9GaXhlZCgpICsgJyAlXFxuJztcclxuXHJcbiAgICAgIGxldCBzdHIgPSBvYmoudE9iai50b09ialN0cmluZyg2KTtcclxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc3RyKS50aGVuKCgpID0+IHsgYWxlcnQobXNnKSB9KTtcclxuXHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubGluZUhlaWdodCA9IGhlaWdodCArICdweCc7IC8vIHZlcnRpY2FsbHkgY2VudGVyIHRleHRcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVDdHJsc0VsZW1lbnRzKHBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdIaWdobGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbQkxBQ0tfQ09MT1IsIFdISVRFX0NPTE9SXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodCA9IHRoaXMuaGlnaGxpZ2h0U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcbiAgICAgICovXHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgbG9hZE1vZGVsKHF1ZXJ5OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIC8vIGlmIG5vdGhpbmcgd2FzIHNwZWNpZmllZCwgbG9hZCBhbiBpbnRlcmVzdGluZyBtb2RlbFxyXG4gICAgICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICAgICAgIHF1ZXJ5ID0gJ1Bvc2VfMDIuYmxvYic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBsYyA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmIChsYy5lbmRzV2l0aCgnLm9iaicpIHx8IGxjLmVuZHNXaXRoKCcuYmxvYicpKSB7XHJcblxyXG4gICAgICAgICBsZXQgc3RhdHVzRnVuYyA9IChzdGF0dXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gc3RhdHVzO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLmxvYWRlci5sb2FkTW9kZWxGaWxlKHF1ZXJ5LCBzdGF0dXNGdW5jKVxyXG4gICAgICAgICAgICAudGhlbigodE9iaikgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIub3JpZW50KHRoaXMucmVuZGVyZXIub2JqKTtcclxuXHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hvd0Zsb29yID0gcXVlcnkuc3RhcnRzV2l0aCgnUG9zZScpO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcblxyXG4gICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICBsZXQgdG9rZW5zID0gcXVlcnkuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHByb3BGaWxlID0gdG9rZW5zWzBdICsgJ19Qcm9wLicgKyB0b2tlbnNbMV07XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vZGVsRmlsZShwcm9wRmlsZSkudGhlbigodFByb3BPYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgdE9iai5jb21iaW5lKHRQcm9wT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWVudCh0T2JqLCBxdWVyeSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBUT0RPIG11bHRpIGxpbmUgZXJyb3IgbWVzc2FnZXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gJ1Vua25vd24gTW9kZWw6JyArIHF1ZXJ5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdG9nZ2xlTW9kZSgpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLnBvaW50ZXJNb2RlKSB7XHJcbiAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuVmlldzpcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLkxpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmJhbGxDb2xvciA9IHRoaXMucmVuZGVyZXIueWVsbG93O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuTGlnaHQ6XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmJhbGxDb2xvciA9IFdISVRFX0NPTE9SLnRvR2xDb2xvcigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRyYWcocG9zOiBWZWMyLCBkZWx0YTogVmVjMikge1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIub2JqLnJvdFgoZGVsdGEueSAqIDAuMDEpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RZKGRlbHRhLnggKiAwLjAxKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5MaWdodCkge1xyXG5cclxuICAgICAgICAgbGV0IG1hdFkgPSBNYXQ0LmZyb21Sb3RZKHRvUmFkKGRlbHRhLngpKTtcclxuICAgICAgICAgbGV0IG1hdFggPSBNYXQ0LmZyb21Sb3RYKHRvUmFkKGRlbHRhLnkpKTtcclxuICAgICAgICAgbGV0IHZlYyA9IG5ldyBWZWM0KFtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueixcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICBdKTtcclxuICAgICAgICAgdmVjID0gbWF0WC5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICB2ZWMgPSBtYXRZLm11bHRWKHZlYyk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnggPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi55ID0gdmVjLnZhbHVlc1sxXTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueiA9IHZlYy52YWx1ZXNbMl07XHJcblxyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlLlxyXG4gICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlLlxyXG4gICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgaGl0IG9uIG9uZSBvZiB0aGUgdmlld3Mgb2NjdXJzLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBvbkNsaWNrKHBvczogVmVjMik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgbGV0IGNhbnZhc1dpZHRoID0gdGhpcy5nbC5jYW52YXMud2lkdGg7XHJcbiAgICAgIGxldCBjYW52YXNIZWlnaHQgPSB0aGlzLmdsLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBjbGlwU3BhY2UgPSB0aGlzLnJlbmRlcmVyLmdldENsaXBTcGFjZSgpO1xyXG4gICAgICBsZXQgbWluaVdpZHRoID0gdGhpcy5yZW5kZXJlci5taW5pU2l6ZSAqICgyIC8gY2xpcFNwYWNlLndpZHRoKSAqIGNhbnZhc1dpZHRoO1xyXG4gICAgICBsZXQgbWluaUhlaWdodCA9IHRoaXMucmVuZGVyZXIubWluaVNpemUgKiAoMiAvIGNsaXBTcGFjZS5oZWlnaHQpICogY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKHBvcy54IDwgbWluaVdpZHRoICYmIHBvcy55IDwgbWluaUhlaWdodCkge1xyXG4gICAgICAgICB0aGlzLnRvZ2dsZU1vZGUoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocG9zLnggPiBjYW52YXNXaWR0aCAtIG1pbmlXaWR0aCAmJiBwb3MueSA8IG1pbmlXaWR0aCkge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJlc2V0VmlldygpO1xyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG5vdCBoYW5kbGVkXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblNjYWxlKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuem9vbShjaGFuZ2UpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblJvdGF0ZShhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIub2JqLnJvdFooZGVsdGEpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblRyYW5zbGF0ZShkZWx0YTogVmVjMikge1xyXG5cclxuICAgICAgLy8gVE9ETyBob3cgY2FuIHRoaXMgc2NhbGluZyBiZSBkZXRlY3RlZCBmcm9tIGphdmFzY3JpcHQ/XHJcbiAgICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgZmFjdG9yID0gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNsaXBTcGFjZSA9IHRoaXMucmVuZGVyZXIuZ2V0Q2xpcFNwYWNlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudHJhbnNsYXRlVmlldyhuZXcgVmVjMihbXHJcbiAgICAgICAgIGZhY3RvciAqIGNsaXBTcGFjZS53aWR0aCAqIGRlbHRhLnggLyB0aGlzLmdsLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgZmFjdG9yICogY2xpcFNwYWNlLmhlaWdodCAqIGRlbHRhLnkgLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcclxuICAgICAgXSkpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRpY2soKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAvLyBUT0RPIG9ubHkgcmVkcmF3IHRoZSB0aHJlc2hvbGQgY3RybCBpZiBhIHNsaWRlciBjaGFuZ2VkXHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBzYXZlKCkge1xyXG4gICAgICBsZXQgdE9iaiA9IHRoaXMucmVuZGVyZXIudE9iajtcclxuXHJcbiAgICAgIGxldCBuYW1lID0gdE9iai5uYW1lLnNwbGl0KCcuJylbMF0gKyAnLmJsb2InO1xyXG4gICAgICBzYXZlQXModE9iai50b0Jsb2IoKSwgbmFtZSk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5cclxuY29uc3QgTUFYID0gMTAwMDsgLy8gSU5GSU5JVFkgaW4gb3VyIHJlbmRlcmluZyB3b3JsZFxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbWFuYWdlcyBhIHNldCBvZiB0cmlhbmdsZXMgd2l0aGluIGEgZ2l2ZW4gc3BhY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWb2x1bWUge1xyXG4gICAvKipcclxuICAgICogVGhlIHRyaWFuZ2xlcyBlbmNsb3NlZCB3aXRoaW4gdGhlIGJvdW5kaW5nIGJveFxyXG4gICAgKi9cclxuICAgcHVibGljIHRyaWFuZ2xlczogSW5kZXhlZFRyaWFuZ2xlW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCb3VuZGluZyBib3ggbWluaW11bVxyXG4gICAgKi9cclxuICAgcHVibGljIGJveE1pbiA9IG5ldyBWZWMzKFtNQVgsIE1BWCwgTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1heGltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNYXggPSBuZXcgVmVjMyhbLU1BWCwgLU1BWCwgLU1BWF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFN0b3JlcyBhIHRyaWFuZ2xlIGFuZCB1cGRhdGVzIHRoZSBib3VuZGluZyBib3hcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB0cmlhbmdsZSBUaGUgdHJpYW5nbGUgdG8gc3RvcmVcclxuICAgICovXHJcbiAgIHB1YmxpYyBwdXNoKHRyaWFuZ2xlOiBJbmRleGVkVHJpYW5nbGUpIHtcclxuXHJcbiAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2godHJpYW5nbGUpO1xyXG4gICAgICB0aGlzLmJveE1pbi54ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueCwgdHJpYW5nbGUubWluWCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0cmlhbmdsZS5taW5ZKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9IE1hdGgubWluKHRoaXMuYm94TWluLnosIHRyaWFuZ2xlLm1pblopO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueCwgdHJpYW5nbGUubWF4WCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB0cmlhbmdsZS5tYXhZKTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRyaWFuZ2xlLm1heFopO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0NCB9IGZyb20gXCIuL01hdFwiO1xyXG5pbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgWEZvcm0ge1xyXG4gICBwdWJsaWMgYmFzZSA9IE1hdDQuaWRlbnRpdHkoKTtcclxuICAgcHVibGljIG1hdCA9IE1hdDQuaWRlbnRpdHkoKTtcclxuXHJcbiAgIHB1YmxpYyBnZXQoKTogTWF0NCB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1hdC5tdWx0TSh0aGlzLmJhc2UpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc25hcCgpIHtcclxuICAgICAgdGhpcy5iYXNlID0gdGhpcy5nZXQoKTtcclxuICAgICAgdGhpcy5tYXQgPSBNYXQ0LmlkZW50aXR5KCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgdGhpcy5tYXQgPSBNYXQ0LmlkZW50aXR5KCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpOiBYRm9ybSB7XHJcbiAgICAgIHRoaXMubWF0LnJvdFgoYW5nbGUpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKTogWEZvcm0ge1xyXG4gICAgICB0aGlzLm1hdC5yb3RZKGFuZ2xlKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcik6IFhGb3JtIHtcclxuICAgICAgdGhpcy5tYXQucm90WihhbmdsZSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBWZWMzKTogWEZvcm0ge1xyXG4gICAgICB0aGlzLm1hdC50cmFuc2xhdGUob2Zmc2V0KTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpOiBYRm9ybSB7XHJcbiAgICAgIHRoaXMubWF0LnNjYWxlKHNjYWxlKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxufSIsIlxyXG4vKipcclxuICogV3JhcHBlciBmb3IgYSBXZWJHbCBCdWZmZXIgYW5kIEF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQXR0cmlidXRlQnVmZmVyIHtcclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHByaXZhdGUgYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBhdHRyaWJ1dGVMb2NhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxyXG4gICAgICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmdcclxuICAgKSB7XHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyaWJ1dGVOYW1lKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXIpO1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZCh2YWx1ZXM6IG51bWJlcltdIHwgRmxvYXQzMkFycmF5KSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG5cclxuICAgICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xyXG4gICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdmFsdWVzLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZhbHVlcyksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgICAgfVxyXG5cclxuICAgfVxyXG5cclxuICAgcHVibGljIGJpbmQoKSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmlidXRlTG9jYXRpb24pO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uLFxyXG4gICAgICAgICAzLCAgICAgICAgICAgICAgICAvLyBzaXplXHJcbiAgICAgICAgIGdsLkZMT0FULCAgICAgICAgIC8vIHR5cGVcclxuICAgICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gbm9ybWFsaXplZFxyXG4gICAgICAgICAwLCAgICAgICAgICAgICAgICAvLyBzdHJpZGVcclxuICAgICAgICAgMCAgICAgICAgICAgICAgICAgLy8gb2Zmc2V0XHJcbiAgICAgICk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGZvciBob2xkaW5nIGEgY2xpcCBzcGFjZS4gRGVmYXVsdCBpcyB2YWx1ZXMgZnJvbSAtMSB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ2xpcFNwYWNlIHtcclxuICAgcHVibGljIG1pbjogVmVjMztcclxuICAgcHVibGljIG1heDogVmVjMztcclxuXHJcbiAgIHB1YmxpYyBnZXQgbGVmdCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5taW4ueDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IHJpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1heC54O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHRvcCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueTtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IGJvdHRvbSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5taW4ueTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBuZWFyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1pbi56O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgZmFyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1heC56O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiAodGhpcy5tYXgueCAtIHRoaXMubWluLngpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gKHRoaXMubWF4LnkgLSB0aGlzLm1pbi55KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gKHRoaXMubWF4LnogLSB0aGlzLm1pbi56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKG1pbjogVmVjMywgbWF4OiBWZWMzKSB7XHJcbiAgICAgIHRoaXMubWluID0gbWluO1xyXG4gICAgICB0aGlzLm1heCA9IG1heDtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3IzIGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gMykge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgMyBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gZ2xDb2xvciBvYmplY3QgdXNpbmcgdmFsdWVzIGluIGEgQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9yIEEgZ2VuZXJpYyBDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBnbENvbG9yMyB7XHJcbiAgICAgIGxldCByID0gY2xhbXAoY29sb3IuciwgMCwgMSk7XHJcbiAgICAgIGxldCBnID0gY2xhbXAoY29sb3IuZywgMCwgMSk7XHJcbiAgICAgIGxldCBiID0gY2xhbXAoY29sb3IuYiwgMCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcjMoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxpZ2h0ZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBsaWdodGVzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbGlnaHRlc3QoYzE6IGdsQ29sb3IzLCBjMjogZ2xDb2xvcjMpOiBnbENvbG9yMyB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPiBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGRhcmtlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGRhcmtlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGRhcmtlc3QoYzE6IGdsQ29sb3IzLCBjMjogZ2xDb2xvcjMpOiBnbENvbG9yMyB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPCBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGFuIGh0bWwgY29sb3Igb2JqZWN0ICgwLTI1NSBiYXNlZCkuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSHRtbENvbG9yKCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLnIpO1xyXG4gICAgICBsZXQgZyA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5nKTtcclxuICAgICAgbGV0IGIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQkEgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3I0IGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gNCkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgNCBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzNdIDwgMCB8fCBjb2xvclszXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYScgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yMyB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGFkZHMgdGVtcGVyYXR1cmUgdG8gYSBDb2xvciBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIGV4dGVuZHMgZ2xDb2xvcjMge1xyXG4gICAvKipcclxuICAgICogVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIF90ZW1wZXJhdHVyZTogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB0ZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqIEBwYXJhbSB0ZW1wZXJhdHVyZSBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdLCB0ZW1wZXJhdHVyZTogbnVtYmVyKSB7XHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEtub3duIGNvbG9yIHZhbHVlcy4gRm9yIG90aGVyIHJlcXVlc3RzIHRoZSBjbGFzcyB3aWxsIHJldHVybiBpbnRlcnBvbGF0ZWQgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb2xvcnM6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmVbXSA9IFtcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTQ3IC8gMjU1LCA0MSAvIDI1NV0sIDE5MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxOTcgLyAyNTUsIDE0MyAvIDI1NV0sIDI2MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyMTQgLyAyNTUsIDE3MCAvIDI1NV0sIDI4NTApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNDEgLyAyNTUsIDIyNCAvIDI1NV0sIDMyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTAgLyAyNTUsIDI0NCAvIDI1NV0sIDUyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1MSAvIDI1NV0sIDU0MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1NSAvIDI1NV0sIDYwMDApLCAvLyBkYXlsaWdodFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjAxIC8gMjU1LCAyMjYgLyAyNTUsIDI1NSAvIDI1NV0sIDcwMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbNjQgLyAyNTUsIDE1NiAvIDI1NSwgMjU1IC8gMjU1XSwgMjAwMDApLFxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgZGF5bGlnaHQoKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSg2MDAwKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbmltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWluVGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWF4aW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtYXhUZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgQ29sb3IgbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHRlbXBlcmF0dXJlOiBudW1iZXIpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuXHJcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA8PSB0aGlzLm1pblRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0ZW1wZXJhdHVyZSA+PSB0aGlzLm1heFRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMSA9IHRoaXMuY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY29sb3IyID0gdGhpcy5jb2xvcnNbaSArIDFdO1xyXG4gICAgICAgICAgICBpZiAodGVtcGVyYXR1cmUgPj0gY29sb3IxLnRlbXBlcmF0dXJlICYmIHRlbXBlcmF0dXJlIDw9IGNvbG9yMi50ZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAodGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpIC8gKGNvbG9yMi50ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yMS5yICsgcmF0aW8gKiAoY29sb3IyLnIgLSBjb2xvcjEucik7XHJcbiAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IxLmcgKyByYXRpbyAqIChjb2xvcjIuZyAtIGNvbG9yMS5nKTtcclxuICAgICAgICAgICAgICAgbGV0IGIgPSBjb2xvcjEuYiArIHJhdGlvICogKGNvbG9yMi5iIC0gY29sb3IxLmIpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoW3IsIGcsIGJdLCB0ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc2hvdWxkbid0IGdldCBoZXJlLCBidXQgaWYgd2UgZG8sIHJldHVybiB0aGUgbGFzdCBjb2xvclxyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFV0aWxpdHkgd3JhcHBlciBmb3IgY29tcGlsaW5nIFdlYkdMIHNoYWRlciBwcm9ncmFtc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29tcGlsZXIge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIHVzZSBzdGF0aWMgZnVuY3Rpb25zIG9ubHlcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21waWxlcyBhIHNoYWRlciBwcm9ncmFtXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBnbCBUaGUgV2ViR0wgY29udGV4dCBcclxuICAgICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIGNvZGVcclxuICAgICogQHBhcmFtIHR5cGUgVGhlIHNoYWRlciB0eXBlXHJcbiAgICAqIEB0aHJvd3MgaWYgdGhlIGNvbXBpbGF0aW9uIGZhaWxzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb21waWxlU2hhZGVyKFxyXG4gICAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgc291cmNlOiBzdHJpbmcsXHJcbiAgICAgIHR5cGU6IG51bWJlclxyXG4gICApIHtcclxuICAgICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xyXG4gICAgICAgICB0aHJvdyAnY29tcGlsZSBlcnJvcjogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcGlsZXMgYW5kIGxpbmtzIHZlcnRleCBhbmQgZnJhZ21lbnQgc2hhZGVycyBpbnRvIGEgcHJvZ3JhbVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGdsIFRoZSBXZWJHTCBjb250ZXh0XHJcbiAgICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVmVydGV4IHNoYWRlciBzb3VyY2VcclxuICAgICogQHBhcmFtIGZyYWdtZW50U291cmNlIEZyYWdtZW50IHNoYWRlciBzb3VyY2VcclxuICAgICogQHJldHVybnMgdGhlIHByb2dyYW0gaWRcclxuICAgICogQHRocm93cyBpZiB0aGUgY29tcGlsYXRpb24gZmFpbHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZShcclxuICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIHZlcnRleFNvdXJjZTogc3RyaW5nLFxyXG4gICAgICBmcmFnbWVudFNvdXJjZTogc3RyaW5nXHJcbiAgICkge1xyXG4gICAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcihnbCwgdmVydGV4U291cmNlLCBnbC5WRVJURVhfU0hBREVSKSk7XHJcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBnbENvbXBpbGVyLmNvbXBpbGVTaGFkZXIoZ2wsIGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpKTtcclxuICAgICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgdGhyb3cgJ2xpbmsgZXJyb3I6ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xUZXh0dXJlLCBnbFRleHR1cmVTdHlsZSB9IGZyb20gXCIuL2dsVGV4dHVyZVwiO1xyXG5cclxuLyoqXHJcbiAqIExpZ2h0d2VpZ2h0IFdlYkdMIHdyYXBwZXIgZm9yIGEgZnJhbWVidWZmZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbEZyYW1lQnVmZmVyIHtcclxuXHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIGZyYW1lIGJ1ZmZlclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGdsQ3R4IFRoZSBXZWJHTCBjb250ZXh0XHJcbiAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICkge1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICBpZiAodGhpcy5mcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICBnbC5kZWxldGVGcmFtZWJ1ZmZlcih0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCgpOiBXZWJHTEZyYW1lYnVmZmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZnJhbWVCdWZmZXI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBiaW5kKCkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY3JlYXRlVGV4dHVyZShzdHlsZTogZ2xUZXh0dXJlU3R5bGUpOiBnbFRleHR1cmUge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVGV4dHVyZSh0aGlzLmdsLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgc3R5bGUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYXR0YWNoVGV4dHVyZShhdHRhY2htZW50OiBudW1iZXIsIHRleHR1cmU6IFdlYkdMVGV4dHVyZSB8IGdsVGV4dHVyZSkge1xyXG5cclxuICAgICAgaWYgKHRleHR1cmUgaW5zdGFuY2VvZiBnbFRleHR1cmUpIHtcclxuICAgICAgICAgdGV4dHVyZSA9IHRleHR1cmUuZ2V0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKFxyXG4gICAgICAgICBnbC5GUkFNRUJVRkZFUixcclxuICAgICAgICAgYXR0YWNobWVudCxcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgdGV4dHVyZSxcclxuICAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY2hlY2soKSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGxldCBzdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgbGV0IG1zZyA9IFwiVGhlIGNyZWF0ZWQgZnJhbWUgYnVmZmVyIGlzIGludmFsaWQ6IFwiICsgc3RhdHVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBhIFdlYkdsIEJ1ZmZlciBhbmQgQXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xJbmRleEJ1ZmZlciB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwcml2YXRlIGJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoZ2xDdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXIpO1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IHVuZGVmaW5lZDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZCh2YWx1ZXM6IG51bWJlcltdIHwgSW50MzJBcnJheSkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHZhbHVlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBuZXcgSW50MzJBcnJheSh2YWx1ZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBiaW5kKCkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgZ2xBdHRyaWJ1dGVCdWZmZXIgfSBmcm9tIFwiLi9nbEF0dHJpYnV0ZUJ1ZmZlclwiO1xyXG5pbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gXCIuL2dsVW5pZm9ybVwiO1xyXG5pbXBvcnQgeyBnbEluZGV4QnVmZmVyIH0gZnJvbSBcIi4vZ2xJbmRleEJ1ZmZlclwiO1xyXG5pbXBvcnQgeyBYRm9ybSB9IGZyb20gXCIuL1hGb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xPYmplY3Qge1xyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHVibGljIHJlYWRvbmx5IHRPYmo6IFRyaWFuZ2xlT2JqO1xyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IGdsQXR0cmlidXRlQnVmZmVyO1xyXG4gICBwcml2YXRlIG5vcm1hbEJ1ZmZlcjogZ2xBdHRyaWJ1dGVCdWZmZXI7XHJcbiAgIHByaXZhdGUgaW5kZXhCdWZmZXI6IGdsSW5kZXhCdWZmZXI7XHJcbiAgIHB1YmxpYyB4Rm9ybSA9IG5ldyBYRm9ybSgpO1xyXG5cclxuICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRPYmoubmFtZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgdE9iajogVHJpYW5nbGVPYmosXHJcbiAgICAgIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHZhciBleHQgPSBnbC5nZXRFeHRlbnNpb24oJ09FU19lbGVtZW50X2luZGV4X3VpbnQnKTtcclxuXHJcbiAgICAgIHRoaXMudE9iaiA9IHRPYmo7XHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYnVmZmVycyAoYW5kIGFzc29jaWF0ZWQgYXR0cmlidXRlcylcclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBuZXcgZ2xBdHRyaWJ1dGVCdWZmZXIoZ2wsIHByb2dyYW0sICdhVmVydGV4Jyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyID0gbmV3IGdsQXR0cmlidXRlQnVmZmVyKGdsLCBwcm9ncmFtLCAnYU5vcm1hbCcpO1xyXG4gICAgICB0aGlzLmluZGV4QnVmZmVyID0gbmV3IGdsSW5kZXhCdWZmZXIoZ2wpO1xyXG5cclxuICAgICAgdGhpcy51cGxvYWRUcmlhbmdsZXMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIuZGVsZXRlKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmRlbGV0ZSgpO1xyXG4gICAgICB0aGlzLmluZGV4QnVmZmVyLmRlbGV0ZSgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc25hcCgpIHtcclxuICAgICAgdGhpcy54Rm9ybS5zbmFwKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy54Rm9ybS5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMueEZvcm0ucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnhGb3JtLnJvdFooYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMueEZvcm0uc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBWZWMzKSB7XHJcbiAgICAgIHRoaXMueEZvcm0udHJhbnNsYXRlKG9mZnNldCk7XHJcbiAgIH1cclxuICAgcHVibGljIGNsZWFyVHJhbnNmb3JtcygpIHtcclxuICAgICAgdGhpcy54Rm9ybS5yZXNldCgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBsb2FkVHJpYW5nbGVzKCkge1xyXG5cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIudXBsb2FkKHRoaXMudE9iai52ZXJ0aWNlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLnVwbG9hZCh0aGlzLnRPYmoubm9ybWFscyk7XHJcbiAgICAgIHRoaXMuaW5kZXhCdWZmZXIudXBsb2FkKHRoaXMudE9iai5pbmRpY2VzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybShnbCwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgdW5pLnNldCgnbW9kZWwnLCB0aGlzLnhGb3JtLmdldCgpLnRyYW5zcG9zZSgpKTtcclxuXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyLmJpbmQoKTtcclxuICAgICAgdGhpcy5pbmRleEJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmJpbmQoKTtcclxuXHJcbiAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIDMgKiB0aGlzLnRPYmoubnVtVHJpYW5nbGVzLCBnbC5VTlNJR05FRF9JTlQsIDApO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICB0aGlzLnRPYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcbiAgICAgIHRoaXMudXBsb2FkVHJpYW5nbGVzKCk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBlbnVtIGdsVGV4dHVyZVN0eWxlIHtcclxuICAgQ29sb3IsXHJcbiAgIERlcHRoLFxyXG4gICBGbG9hdFxyXG59XHJcblxyXG4vKipcclxuICogTGlnaHR3ZWlnaHQgV2ViR0wgd3JhcHBlciBmb3IgYSB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xUZXh0dXJlIHtcclxuXHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwdWJsaWMgdGV4dHVyZTogV2ViR0xUZXh0dXJlO1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIGZyYW1lIGJ1ZmZlciBmb3IgcmVuZGVyaW5nIGludG8gdGV4dHVyZSBvYmplY3RzLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGdsQ3R4IFRoZSBXZWJHTCBjb250ZXh0XHJcbiAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgIHN0eWxlOiBnbFRleHR1cmVTdHlsZVxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc3R5bGUpIHtcclxuICAgICAgICAgY2FzZSBnbFRleHR1cmVTdHlsZS5Db2xvcjpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBnbFRleHR1cmVTdHlsZS5EZXB0aDpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZXB0aCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIGdsVGV4dHVyZVN0eWxlLkZsb2F0OlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZsb2F0KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xyXG4gICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAvLyBTdGVwIDI6IENyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIHRleHR1cmUgYnVmZmVyIHRvIGhvbGQgdGhlIGNvbG9ycy5cclxuICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xyXG5cclxuICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgIGdsLlJHQkEsICAgICAgICAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICB3aWR0aCwgICAgICAgICAgICAgICAgICAvLyB3aWR0aFxyXG4gICAgICAgICBoZWlnaHQsICAgICAgICAgICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgIGdsLlJHQkEsICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICBnbC5VTlNJR05FRF9CWVRFLCAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlRGVwdGgod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGxldCBkZXB0aF90ZXh0dXJlX2V4dGVuc2lvbiA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVwdGhfdGV4dHVyZScpO1xyXG4gICAgICBpZiAoIWRlcHRoX3RleHR1cmVfZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgIGFsZXJ0KCdUaGlzIFdlYkdMIHByb2dyYW0gcmVxdWlyZXMgdGhlIHVzZSBvZiB0aGUgV0VCR0xfZGVwdGhfdGV4dHVyZSBleHRlbnNpb24uJyk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xyXG5cclxuICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgIGdsLkRFUFRIX0NPTVBPTkVOVCwgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICB3aWR0aCwgICAgICAgICAgICAgICAgICAvLyB3aWR0aFxyXG4gICAgICAgICBoZWlnaHQsICAgICAgICAgICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgIGdsLkRFUFRIX0NPTVBPTkVOVCwgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICBnbC5VTlNJR05FRF9JTlQsICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjcmVhdGVGbG9hdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgbGV0IGludGVybmFsRm9ybWF0OiBudW1iZXI7XHJcbiAgICAgIGxldCBmb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IHR5cGU6IG51bWJlcjtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0dXJlc1xyXG4gICAgICBpZiAoZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgbGV0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcpO1xyXG4gICAgICAgICBpZiAoZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIFRoYW5rcyBBcHBsZS4gQWx3YXlzIGdvdCB0byBkbyB0aGluZ3MgYSBsaXR0bGUgZGlmZmVyZW50bHlcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZXh0LkhBTEZfRkxPQVRfT0VTO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyBmbG9hdGluZyBwb2ludCB0ZXh0dXJlcz8gcmVhbGx5IGZhbGwgYmFjayB0byB1bnNpZ25lZCBieXRlc1xyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBsZXQgeW91IGRvIGFuICdlbHNlIGlmJyBoZXJlIGFuZCB3aGVuIFdlYkdMMiBpc1xyXG4gICAgICAvLyBub3Qgc3VwcG9ydGVkLCB3ZSBnZXQgYW4gZXhjZXB0aW9uLCBzbyB0aHVzIHRoZSB0cnktY2F0Y2hcclxuICAgICAgLy8gc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTM4MTEyMi90eXBlc2NyaXB0LXR5cGUtbmFycm93ZWQtdG8tbmV2ZXItd2l0aC1pbnN0YW5jZW9mLWluLWFuLWlmLWVsc2Utc3RhdGVtZW50XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgICAgZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTMyRjtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLkZMT0FUXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcclxuXHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG5cclxuICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgIGludGVybmFsRm9ybWF0LCAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICB3aWR0aCwgICAgICAgICAgICAgICAgICAvLyB3aWR0aFxyXG4gICAgICAgICBoZWlnaHQsICAgICAgICAgICAgICAgICAvLyBoZWlnaHRcclxuICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgIGZvcm1hdCwgICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICB0eXBlLCAgICAgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICApO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCgpOiBXZWJHTFRleHR1cmUge1xyXG4gICAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYmluZCgpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgZ2xDb2xvcjMsIGdsQ29sb3I0IH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSBcIi4vTWF0XCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3Igc2V0dGluZyB1bmlmb3JtIHZhbHVlcyBpbiBhIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVW5pZm9ybSB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgIC8vIHRoZSBXZWJHTCBzaGFkZXIgcHJvZ3JhbVxyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIG9iamVjdCBmb3Igc2V0dGluZyB2YWx1ZXMgYW5kIGNhbGxzIGdsLnVzZVByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBnbEN0eCBUaGUgV2ViR0wgY29udGV4dFxyXG4gICAgKiBAcGFyYW0gcHJvZ3JhbSBUaGUgcHJvZ3JhbSBhc3NvY2lhdGVkIHdpdGggdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgIGdsQ3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW1cclxuICAgKSB7XHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdW5pZm9ybSB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5hbWUgVGhlIHZhcmlhYmxlIG5hbWVcclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZVxyXG4gICAgKiBAcGFyYW0gaW50IElmIHRydWUgYW5kIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhbiBpbnRlZ2VyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIHZhbHVlOiBudW1iZXIgfCBWZWMzIHwgZ2xDb2xvcjMgfCBnbENvbG9yNCB8IE1hdDQsXHJcbiAgICAgIGludDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICkge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGxldCBsb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCBuYW1lKTtcclxuICAgICAgaWYgKGxvYykge1xyXG4gICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBWZWMzKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jLCBuZXcgRmxvYXQzMkFycmF5KHZhbHVlLnZhbHVlcykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xDb2xvcjMpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2MsIG5ldyBGbG9hdDMyQXJyYXkoW3ZhbHVlLnIsIHZhbHVlLmcsIHZhbHVlLmJdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbENvbG9yNCkge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtNGZ2KGxvYywgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuciwgdmFsdWUuZywgdmFsdWUuYiwgdmFsdWUuYV0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hdDQpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHZhbHVlLnZhbHVlcykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwidU1vZGVcIikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbnQpIHtcclxuICAgICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGxvYywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICBnbC51bmlmb3JtMWYobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGFuIGludGVnZXIgdW5pZm9ybSB2YWx1ZSAoc2FtZSBhcyBzZXQobmFtZSwgdmFsdWUsIHRydWUpKVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5hbWUgVGhlIHZhcmlhYmxlIG5hbWVcclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldGkobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlLCB0cnVlKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYWxsIHZhbHVlcyBmb3IgdmFyaWFibGVzIHN0b3JlZCBhcyBtZW1iZXJzIG9mIGFuIG9iamVjdFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHVuaWZvcm1zIFRoZSBvYmplY3Qgd2l0aCBtZW1iZXIgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0QWxsKHVuaWZvcm1zOiBhbnkpIHtcclxuXHJcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gdW5pZm9ybXMpIHtcclxuICAgICAgICAgdmFyIHZhbHVlID0gdW5pZm9ybXNbbmFtZV07XHJcbiAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgZ2xVbmlmb3JtQmxvY2sge1xyXG4gICBwcml2YXRlIGdsMjogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHByaXZhdGUgYmxvY2tMb2NhdGlvbjogbnVtYmVyO1xyXG4gICBwcml2YXRlIGJsb2NrQnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxyXG4gICAgICBibG9ja05hbWU6IHN0cmluZyxcclxuICAgICAgYmxvY2tCaW5kaW5nOiBudW1iZXJcclxuICAgKSB7XHJcblxyXG4gICAgICB0aGlzLmdsMiA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wyID0gdGhpcy5nbDI7XHJcblxyXG4gICAgICB0aGlzLmJsb2NrTG9jYXRpb24gPSBnbDIuZ2V0VW5pZm9ybUJsb2NrSW5kZXgocHJvZ3JhbSwgYmxvY2tOYW1lKTtcclxuICAgICAgZ2wyLnVuaWZvcm1CbG9ja0JpbmRpbmcocHJvZ3JhbSwgdGhpcy5ibG9ja0xvY2F0aW9uLCBibG9ja0JpbmRpbmcpO1xyXG5cclxuICAgICAgdGhpcy5ibG9ja0J1ZmZlciA9IGdsMi5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXJCYXNlKGdsMi5VTklGT1JNX0JVRkZFUiwgYmxvY2tCaW5kaW5nLCB0aGlzLmJsb2NrQnVmZmVyKTtcclxuICAgfVxyXG5cclxuICAgdXBsb2FkKGRhdGE6IEZsb2F0MzJBcnJheSB8IEludDMyQXJyYXkpIHtcclxuXHJcbiAgICAgIGxldCBnbDIgPSB0aGlzLmdsMjtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCB0aGlzLmJsb2NrQnVmZmVyKTtcclxuICAgICAgZ2wyLmJ1ZmZlckRhdGEoZ2wyLlVOSUZPUk1fQlVGRkVSLCBkYXRhLCBnbDIuU1RBVElDX0RSQVcpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IzIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyB0b0NzcyB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyNTVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHdoaXRlID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTUsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJsYWNrID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJlZCA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGdyZWVuID0gbmV3IGh0bWxDb2xvcihbMCwgMjU1LCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmx1ZSA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG9yYW5nZSA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMTY1LCAwXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjIFRoZSBudW1lcmljIHZhbHVlXHJcbiAgICAqIEByZXR1cm5zIFRoZSBoZXggc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29tcG9uZW50VG9IZXgoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGhleCBzdHJpbmcgKGUuZy4gIzBmMGYwZikuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGhleCBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IZXgoKTogc3RyaW5nIHtcclxuICAgICAgbGV0IHJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMucik7XHJcbiAgICAgIGxldCBnSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmcpO1xyXG4gICAgICBsZXQgYkhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5iKTtcclxuICAgICAgcmV0dXJuIFwiI1wiICsgckhleCArIGdIZXggKyBiSGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBjc3Mgc3RyaW5nIChlLmcuICdyZ2IoMTI4LDIyOCwzMiknKS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjc3Mgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvQ3NzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0b0Nzcyh0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgY3NzIHN0eWxlIHN0cmluZyAoZS5nLiAncmdiKDI0LDM2LDgzKScpIHRvIGEgY29sb3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjc3MgVGhlIGNzcyBzdHJpbmcuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNzcyhjc3M6IHN0cmluZyk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByZWdleCA9IC9cXGQrL2c7XHJcbiAgICAgIGxldCB2YWxzID0gY3NzLm1hdGNoKHJlZ2V4KS5zbGljZSgwLCAzKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3BhcnNlSW50KHZhbHNbMF0pLCBwYXJzZUludCh2YWxzWzFdKSwgcGFyc2VJbnQodmFsc1syXSldKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCBmcm9tIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGhleCBUaGUgaGV4IHN0cmluZ1xyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbENvbG9yIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tSGV4KGhleDogc3RyaW5nKTogaHRtbENvbG9yIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgIGxldCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgICAgICAgIGxldCBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XHJcbiAgICAgICAgIGxldCBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgdXNpbmcgdmFsdWVzIGluIGEgQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9yIEEgZ2VuZXJpYyBDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5yKTtcclxuICAgICAgbGV0IGcgPSBodG1sQ29sb3IuY2xhbXAoY29sb3IuZyk7XHJcbiAgICAgIGxldCBiID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUm91bmRzIGEgbnVtYmVyIHRvIGEgd2hvbGUgbnVtYmVyIGFuZCBjbGFtcHMgaXQgYmV0d2VlbiAwIGFuZCAyNTUuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICogQHJldHVybnMgVGhlIHJvdW5kZWQgJiBjbGFtcGVkIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjbGFtcCh2YWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHZhbCA9IE1hdGgucm91bmQodmFsKTtcclxuICAgICAgaWYgKHZhbCA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsID4gMjU1KSB7XHJcbiAgICAgICAgIHJldHVybiAyNTU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgY29sb3IgdG8gYW4gZXF1aXZhbGVudCBncmF5LXNjYWxlIGNvbG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZ3JheS1zY2FsZSBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dyYXkoKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHJnYiA9IE1hdGgucm91bmQoKHRoaXMuciArIHRoaXMuZyArIHRoaXMuYikgLyAzKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3JnYiwgcmdiLCByZ2JdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgV2ViR0wgY29sb3Igb2JqZWN0ICgwLTEgYmFzZWQpXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR2xDb2xvcigpOiBnbENvbG9yMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcjMoW3RoaXMuciAvIDI1NSwgdGhpcy5nIC8gMjU1LCB0aGlzLmIgLyAyNTVdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IHRvQ3NzIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGh0bWwgY29sb3Igd2l0aCBhIHRyYW5zcGFyZW5jeSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGh0bWxDb2xvcldpdGhBbHBoYSBleHRlbmRzIGh0bWxDb2xvciB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRyYW5zcGFyZW50ID0gbmV3IGh0bWxDb2xvcldpdGhBbHBoYShbMCwgMCwgMCwgMF0pO1xyXG5cclxuICAgLyoqIFRoZSB0cmFuc3BhcmVuY3kgKGFscGhhKSB2YWx1ZSAqL1xyXG4gICBwdWJsaWMgYTogbnVtYmVyID0gMjU1O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0JBIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBzdXBlcihbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXV0pO1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSA0KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCA0IGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9yWzRdIDwgMCB8fCBjb2xvcls0XSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdhJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYSA9IGNvbG9yWzNdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBjc3Mgc3RyaW5nIChlLmcuICdyZ2IoMTI4LDIyOCwzMiwyNTUpJykuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY3NzIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0NzcygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdG9Dc3ModGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgUGF0aFRyYWNlckFwcCB9IGZyb20gXCIuL1BhdGhUcmFjZXJBcHBcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUGxhbmVzQXBwIH0gZnJvbSBcIi4vUGxhbmVzQXBwXCI7XHJcbmltcG9ydCB7IFZpZXdlckFwcCB9IGZyb20gXCIuL1ZpZXdlckFwcFwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgIGxldCBxdWVyeTogc3RyaW5nO1xyXG4gICBsZXQgdHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHJcbiAgICAgIHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBsZXQgdG9rZW5zID0gcXVlcnkuc3BsaXQoJy0nKTtcclxuICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgdHlwZSA9IHRva2Vuc1swXTtcclxuICAgICAgICAgcXVlcnkgPSB0b2tlbnNbMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHR5cGUgPSB0b2tlbnNbMF07XHJcbiAgICAgICAgIHF1ZXJ5ID0gJyc7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaWYgKHR5cGUgPT09ICdwbGFuZXMnKSB7XHJcbiAgICAgIGxldCBhcHAgPSBuZXcgUGxhbmVzQXBwKHF1ZXJ5KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY29tcG9uZW50KCkpO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHR5cGUgPT09ICd2aWV3ZXInKSB7XHJcbiAgICAgIGxldCBhcHAgPSBuZXcgVmlld2VyQXBwKHF1ZXJ5KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY29tcG9uZW50KCkpO1xyXG4gICB9XHJcbiAgIGVsc2UgeyAvLyB0eXBlID09PSAnYmFsbCdcclxuICAgICAgbGV0IGFwcCA9IG5ldyBQYXRoVHJhY2VyQXBwKHF1ZXJ5KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY29tcG9uZW50KCkpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIGludCB1TW9kZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVNYXhDaHJvbWE7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVIaWdobGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdU1pZExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVEYXJrTGlnaHRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdVNoYWRvd0NvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1UmVmbGVjdGVkTGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdURhcmtBY2NlbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3dBbHBoYTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcblxcclxcbiNkZWZpbmUgTU9ERV9TQ0lFTkNFIDBcXHJcXG4jZGVmaW5lIE1PREVfVkFMVUUgMVxcclxcbiNkZWZpbmUgTU9ERV9DSFJPTUEgMlxcclxcbiNkZWZpbmUgTU9ERV9CQU5EUyAzXFxyXFxuXFxyXFxudmVjNCB3aGl0ZSA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IHJlZCA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IG9yYW5nZSA9IHZlYzQoMS4wLCAwLjY1LCAwLjAsIDEuMCk7XFxyXFxudmVjNCB5ZWxsb3cgPSB2ZWM0KDEuMCwgMS4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBncmVlbiA9IHZlYzQoMC4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGN5YW4gPSB2ZWM0KDAuMCwgMS4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibHVlID0gdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgYmxhY2sgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuI2RlZmluZSBOVU1fQ09MT1JTIDZcXHJcXG52ZWM0IGNvbG9yc1tOVU1fQ09MT1JTXTtcXHJcXG5cXHJcXG52ZWM0IHZhbHVlMkNvbG9yKGZsb2F0IHZhbHVlKVxcclxcbntcXHJcXG4gICBmbG9hdCBzcGFuID0gMS4wIC8gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIHZhbHVlICo9IGZsb2F0KE5VTV9DT0xPUlMgLSAxKTtcXHJcXG4gICBpZiAodmFsdWUgPCAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF07XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzBdICsgdmFsdWUgKiAoY29sb3JzWzFdIC0gY29sb3JzWzBdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAyLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMV0gKyAodmFsdWUgLSAxLjApICogKGNvbG9yc1syXSAtIGNvbG9yc1sxXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMy4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzJdICsgKHZhbHVlIC0gMi4wKSAqIChjb2xvcnNbM10gLSBjb2xvcnNbMl0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDQuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1szXSArICh2YWx1ZSAtIDMuMCkgKiAoY29sb3JzWzRdIC0gY29sb3JzWzNdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA1LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNF0gKyAodmFsdWUgLSA0LjApICogKGNvbG9yc1s1XSAtIGNvbG9yc1s0XSk7XFxyXFxuICAgfVxcclxcbiAgIC8qXFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA2LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNV0gKyAodmFsdWUgLSA1LjApICogKGNvbG9yc1s2XSAtIGNvbG9yc1s1XSk7XFxyXFxuICAgfVxcclxcbiAgICovXFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzW05VTV9DT0xPUlMgLSAxXTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc1ZhbHVlKClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbiAgIGZsb2F0IHJnYiA9IHRvR3JheShjb2xvcik7XFxyXFxuICAgcmV0dXJuIHZlYzQocmdiLCByZ2IsIHJnYiwgMS4wKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc0Nocm9tYSgpXFxyXFxue1xcclxcbiAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG5cXHJcXG4gICAvLyByZW5kZXIgdGhlIHNjYWxlIGFzIGEgYmFyIG9uIHRoZSBsZWZ0XFxyXFxuICAgaWYgKHRleENvb3JkLnggPCAwLjAzKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdmFsdWUyQ29sb3IoKHRleENvb3JkLnkgLSAwLjEpIC8gMC45KTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+PSB1U2hhZG93QWxwaGEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZsb2F0IGF2ZyA9IChjb2xvci5yICsgY29sb3IuZyArIGNvbG9yLmIpIC8gMy4wO1xcclxcbiAgICAgICAgIGZsb2F0IHJnYiA9IChhYnMoYXZnIC0gY29sb3IucikgKyBhYnMoYXZnIC0gY29sb3IuZykgKyBhYnMoYXZnIC0gY29sb3IuYikpIC8gKDQuMCAvIDMuMCk7XFxyXFxuICAgICAgICAgcmV0dXJuIHZhbHVlMkNvbG9yKHJnYiAvIHVNYXhDaHJvbWEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgZDIodmVjMyBjMSwgdmVjMyBjMilcXHJcXG57XFxyXFxuICAgLy8gc3VtIHRoZSBzcXVhcmVzIG9mIHRoZSBkaWZmZXJlbmNlc1xcclxcbiAgIHJldHVybiBwb3coYzEuciAtIGMyLnIsIDIuMCkgKyBwb3coYzEuZyAtIGMyLmcsIDIuMCkgKyBwb3coYzEuYiAtIGMyLmIsIDIuMCk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgY2xvc2VzdCh2ZWMzIGNvbG9yLCB2ZWMzIGxpZ2h0LCB2ZWMzIG1pZCwgdmVjMyBkYXJrKVxcclxcbntcXHJcXG4gICBmbG9hdCBkbGlnaHQgPSBkMihjb2xvciwgbGlnaHQpO1xcclxcbiAgIGZsb2F0IGRtaWQgPSBkMihjb2xvciwgbWlkKTtcXHJcXG4gICBmbG9hdCBkZGFyayA9IGQyKGNvbG9yLCBkYXJrKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkbWluID0gbWluKGRsaWdodCwgbWluKGRtaWQsIGRkYXJrKSk7XFxyXFxuICAgaWYgKGRtaW4gPT0gZGxpZ2h0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbGlnaHQ7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKGRtaW4gPT0gZG1pZClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIG1pZDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gZGFyaztcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNCYW5kcygpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNpemUgPSAwLjA3O1xcclxcbiAgIGZsb2F0IG1hcmdpbiA9ICgxLjAgLSA2LjAgKiBzaXplKSAvIDIuMDtcXHJcXG4gICBpZiAodGV4Q29vcmQueCA8IHNpemUgJiYgdGV4Q29vcmQueSA+IG1hcmdpbiAmJiB0ZXhDb29yZC55IDwgKDEuMCAtIG1hcmdpbikpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDEuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1RGFya0FjY2VudENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDIuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1U2hhZG93Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVEYXJrTGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA0LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodU1pZExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNS4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVMaWdodExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgLy8gaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgICAgIC8vIGRlZmluZSB0aGUgdGVybWluYXRvciBhcyB0aGUgcG9pbnQgd2hlcmUgdGhpbmdzIGFyZSA1MCUgaW4gc2hhZG93XFxyXFxuICAgICAgZmxvYXQgdGVybWluYXRvciA9ICgodVNoYWRvd0FscGhhICsgdUxpZ2h0QWxwaGEpIC8gMi4wKTtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+IDEuMCAmJiBjb2xvci5hIDw9IHRlcm1pbmF0b3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZlYzMgYyA9IGNsb3Nlc3QoY29sb3IucmdiLCB1U2hhZG93Q29sb3IsIHVSZWZsZWN0ZWRMaWdodENvbG9yLCB1RGFya0FjY2VudENvbG9yKTtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmIChjb2xvci5hID4gdGVybWluYXRvcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gb25seSByZW5kZXIgdGhlIGhpZ2hsaWdodCB3aGVyZSBpdCdzIGNvbnRyaWJ1dGlvbiBpcyBzaWduaWZpY2FudCwgaS5lLiBncmVhdGVyXFxyXFxuICAgICAgICAgLy8gdGhhbiBzb21lIHRocmVzaG9sZFxcclxcbiAgICAgICAgIGNvbnN0IGZsb2F0IFNQRUNVTEFSX1RIUkVTSE9MRCA9IDAuMTtcXHJcXG4gICAgICAgICBpZiAoY29sb3IuYSA+ICh1TGlnaHRBbHBoYSArIFNQRUNVTEFSX1RIUkVTSE9MRCkpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2ZWMzIGMgPSBjbG9zZXN0KGNvbG9yLnJnYiwgdUxpZ2h0TGlnaHRDb2xvciwgdU1pZExpZ2h0Q29sb3IsIHVEYXJrTGlnaHRDb2xvcik7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHZlYzQoYywgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIGNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNTY2llbmNlKClcXHJcXG57XFxyXFxuICAgLy8ganVzdCByZXR1cm4gdGhlIHRleHR1cmVcXHJcXG4gICByZXR1cm4gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGNvbG9yc1swXSA9IGJsYWNrO1xcclxcbiAgIGNvbG9yc1sxXSA9IGJsdWU7XFxyXFxuICAgY29sb3JzWzJdID0gZ3JlZW47XFxyXFxuICAgY29sb3JzWzNdID0geWVsbG93O1xcclxcbiAgIGNvbG9yc1s0XSA9IG9yYW5nZTtcXHJcXG4gICBjb2xvcnNbNV0gPSByZWQ7XFxyXFxuXFxyXFxuICAgaWYgKHVNb2RlID09IE1PREVfVkFMVUUpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzVmFsdWUoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9DSFJPTUEpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQ2hyb21hKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQkFORFMpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQmFuZHMoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc1NjaWVuY2UoKTtcXHJcXG4gICB9XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNjYWxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdVhPZmZzZXQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1WU9mZnNldDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB0ZXhDb29yZCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodVNjYWxlICogdmVydGV4LnggKyB1WE9mZnNldCwgdVNjYWxlICogdmVydGV4LnkgKyB1WU9mZnNldCwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPFZFUlNJT04+XFxyXFxuXFxyXFxuI2RlZmluZSBOT1RISU5HXFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4jZGVmaW5lIEVTMzAwXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbmluIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZWxzZVxcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZlxcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1RXllO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRleHR1cmVTaXplO1xcclxcbnVuaWZvcm0gZmxvYXQgdVJhbmRvbTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0UG9zO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVPYmpDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVCYWxsUmFkaXVzO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNhbXBsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvd0FscGhhO1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbm91dCB2ZWM0IGZyYWdDb2xvcjtcXHJcXG4jZWxzZVxcclxcbiNkZWZpbmUgZnJhZ0NvbG9yIGdsX0ZyYWdDb2xvclxcclxcbiNkZWZpbmUgdGV4dHVyZSB0ZXh0dXJlMkRcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5jb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDtcXHJcXG5jb25zdCBmbG9hdCBFUFNJTE9OID0gMC4wMDAwMDE7XFxyXFxuY29uc3QgZmxvYXQgT0ZGU0VUID0gMC4wMDAxO1xcclxcbmNvbnN0IGZsb2F0IElORklOSVRZID0gMTAwMDAuMDtcXHJcXG5jb25zdCBmbG9hdCBMSUdIVF9TSVpFID0gMC4xO1xcclxcbiNkZWZpbmUgQkFMTF9DRU5URVIgdmVjMygwLCB1QmFsbFJhZGl1cywgMClcXHJcXG5jb25zdCB2ZWMzIERPTUVfQ0VOVEVSID0gdmVjMygwLCAwLCAwKTtcXHJcXG5jb25zdCBmbG9hdCBET01FX1JBRElVUyA9IDguMDtcXHJcXG5jb25zdCBmbG9hdCBWQUwgPSAwLjg7XFxyXFxuY29uc3QgdmVjMyBET01FX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEZMT09SX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEFNQklFTlRfQ09MT1IgPSB2ZWMzKDEuMCwgMS4wLCAxLjApO1xcclxcbmNvbnN0IGludCBOVU1fTElHSFRTID0gNjtcXHJcXG5jb25zdCBmbG9hdCBIRUlHSFQgPSA1LjA7XFxyXFxuY29uc3QgZmxvYXQgUkFESVVTID0gNC4wO1xcclxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTtcXHJcXG5cXHJcXG5zdHJ1Y3QgTGlnaHRcXHJcXG57XFxyXFxuICAgZmxvYXQgaW50ZW5zaXR5O1xcclxcbiAgIGZsb2F0IHNpemU7XFxyXFxuICAgdmVjMyBwb3M7XFxyXFxuICAgdmVjMyBjb2xvcjtcXHJcXG59O1xcclxcblxcclxcbiBMaWdodCBMaWdodHNbTlVNX0xJR0hUU107XFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG5zdHJ1Y3QgVHJpYW5nbGVcXHJcXG57XFxyXFxuICAgdmVjMyBwMDtcXHJcXG4gICB2ZWMzIHAxO1xcclxcbiAgIHZlYzMgcDI7XFxyXFxufTtcXHJcXG5cXHJcXG5zdHJ1Y3QgVm9sdW1lXFxyXFxue1xcclxcbiAgIGludCBzdGFydEluZGV4O1xcclxcbiAgIGludCBudW1UcmlhbmdsZXM7XFxyXFxuICAgdmVjMyBib3hNaW47XFxyXFxuICAgdmVjMyBib3hNYXg7XFxyXFxufTtcXHJcXG5cXHJcXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgaXMgcmVwbGFjZWQgd2l0aCBjb2RlIGdlbmVyYXRlZCBpbiBKYXZhU2NyaXB0XFxyXFxuY29uc3QgaW50IE5VTV9WRVJUSUNFUyA9IDxOVU1fVkVSVElDRVM+O1xcclxcbmNvbnN0IGludCBOVU1fVk9MVU1FUyA9IDxOVU1fVk9MVU1FUz47XFxyXFxuY29uc3QgaW50IE5VTV9UUklBTkdMRVMgPSA8TlVNX1RSSUFOR0xFUz47XFxyXFxuXFxyXFxubGF5b3V0KHN0ZDE0MCkgdW5pZm9ybSBNeVZlcnRpY2VzQmxvY2sgeyB2ZWMzIHZlcnRpY2VzW05VTV9WRVJUSUNFU107IH07XFxyXFxuXFxyXFxuc3RydWN0IElUcmlhbmdsZVxcclxcbntcXHJcXG4gICBpbnQgaTA7XFxyXFxuICAgaW50IGkxO1xcclxcbiAgIGludCBpMjtcXHJcXG59O1xcclxcblxcclxcbmxheW91dChzdGQxNDApIHVuaWZvcm0gTXlUcmlhbmdsZXNCbG9jayB7IElUcmlhbmdsZSB0cmlhbmdsZXNbTlVNX1RSSUFOR0xFU107IH07XFxyXFxuVHJpYW5nbGUgZ2V0VHJpYW5nbGUoaW50IGluZGV4KVxcclxcbntcXHJcXG4gICBJVHJpYW5nbGUgdHJpID0gdHJpYW5nbGVzW2luZGV4XTtcXHJcXG4gICB2ZWMzIHAwID0gdmVydGljZXNbdHJpLmkwXTtcXHJcXG4gICB2ZWMzIHAxID0gdmVydGljZXNbdHJpLmkxXTtcXHJcXG4gICB2ZWMzIHAyID0gdmVydGljZXNbdHJpLmkyXTtcXHJcXG4gICByZXR1cm4gVHJpYW5nbGUocDAsIHAxLCBwMik7XFxyXFxufVxcclxcblxcclxcbi8vIFRoZSBjZW50cmFsIG9iamVjdCBiZWluZyByZW5kZXJlZFxcclxcbnN0cnVjdCBPYmplY3RcXHJcXG57XFxyXFxuICAgVm9sdW1lIHZvbHVtZXNbTlVNX1ZPTFVNRVNdO1xcclxcbiAgIHZlYzMgYm94TWluO1xcclxcbiAgIHZlYzMgYm94TWF4O1xcclxcbn07XFxyXFxuXFxyXFxudW5pZm9ybSBPYmplY3Qgb2JqZWN0O1xcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0Qm94KGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgY29uc3QgdmVjMyBib3hNaW4sIGNvbnN0IHZlYzMgYm94TWF4KVxcclxcbntcXHJcXG4gICB2ZWMzIHJheUludiA9IDEuMCAvIHJheTtcXHJcXG4gICB2ZWMzIHRib3QgPSByYXlJbnYgKiAoYm94TWluIC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHR0b3AgPSByYXlJbnYgKiAoYm94TWF4IC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHRtaW4gPSBtaW4odHRvcCwgdGJvdCk7XFxyXFxuICAgdmVjMyB0bWF4ID0gbWF4KHR0b3AsIHRib3QpO1xcclxcbiAgIHZlYzIgdCA9IG1heCh0bWluLnh4LCB0bWluLnl6KTtcXHJcXG4gICBmbG9hdCB0MCA9IG1heCh0LngsIHQueSk7XFxyXFxuICAgdCA9IG1pbih0bWF4Lnh4LCB0bWF4Lnl6KTtcXHJcXG4gICBmbG9hdCB0MSA9IG1pbih0LngsIHQueSk7XFxyXFxuICAgcmV0dXJuIHQxID4gbWF4KHQwLCAwLjApO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdFZvbChjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIFZvbHVtZSB2b2wpXFxyXFxue1xcclxcbiAgIGlmICh2b2wubnVtVHJpYW5nbGVzID09IDApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgdm9sLmJveE1pbiwgdm9sLmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0T2JqKGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgT2JqZWN0IG9iamVjdClcXHJcXG57XFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgb2JqZWN0LmJveE1pbiwgb2JqZWN0LmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbi8vIE3DtmxsZXLigJNUcnVtYm9yZSByYXktdHJpYW5nbGUgaW50ZXJzZWN0aW9uIGFsZ29yaXRobVxcclxcbi8vIHNvdXJjZTogaHR0cDovL2JpdC5seS8yTXhuUE1HXFxyXFxuZmxvYXQgaW50ZXJzZWN0VHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBUcmlhbmdsZSB0cmkpXFxyXFxue1xcclxcbiAgIHZlYzMgZWRnZTEsIGVkZ2UyLCBoLCBzLCBxO1xcclxcbiAgIGZsb2F0IGEsIGYsIHUsIHY7XFxyXFxuICAgZWRnZTEgPSB0cmkucDEgLSB0cmkucDA7XFxyXFxuICAgZWRnZTIgPSB0cmkucDIgLSB0cmkucDA7XFxyXFxuXFxyXFxuICAgaCA9IGNyb3NzKHJheSwgZWRnZTIpO1xcclxcbiAgIGEgPSBkb3QoZWRnZTEsIGgpO1xcclxcbiAgIGlmIChhYnMoYSkgPCBFUFNJTE9OKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICBmID0gMS4wIC8gYTtcXHJcXG4gICBzID0gb3JpZ2luIC0gdHJpLnAwO1xcclxcbiAgIHUgPSBmICogZG90KHMsIGgpO1xcclxcbiAgIGlmICh1IDwgMC4wIHx8IHUgPiAxLjApXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHEgPSBjcm9zcyhzLCBlZGdlMSk7XFxyXFxuICAgdiA9IGYgKiBkb3QocmF5LCBxKTtcXHJcXG4gICBpZiAodiA8IDAuMCB8fCAodSArIHYpID4gMS4wKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAvLyBBdCB0aGlzIHN0YWdlIHdlIGNhbiBjb21wdXRlIHQgdG8gZmluZCBvdXQgd2hlcmUgdGhlIGludGVyc2VjdGlvbiBwb2ludCBpcyBvbiB0aGUgbGluZS5cXHJcXG4gICBmbG9hdCB0ID0gZiAqIGRvdChlZGdlMiwgcSk7XFxyXFxuICAgaWYgKHQgPD0gRVBTSUxPTikgLy8gdGhpcyBtZWFucyB0aGF0IHRoZXJlIGlzIGEgbGluZSBpbnRlcnNlY3Rpb24gYnV0IG5vdCBhIHJheSBpbnRlcnNlY3Rpb24uXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHJldHVybiB0OyAvLyByYXkgaW50ZXJzZWN0aW9uXFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yVHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgaGl0LCBpbnQgdEluZGV4KVxcclxcbntcXHJcXG4gICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZSh0SW5kZXgpO1xcclxcbiAgIHZlYzMgbm9ybWFsID0gY3Jvc3ModHJpLnAxIC0gdHJpLnAwLCB0cmkucDIgLSB0cmkucDApO1xcclxcbiAgIG5vcm1hbCA9IG5vcm1hbGl6ZShub3JtYWwpO1xcclxcbiAgIGlmIChkb3Qobm9ybWFsLCBvcmlnaW4gLSBoaXQpID4gMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbm9ybWFsO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiAtbm9ybWFsO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuZmxvYXQgaW50ZXJzZWN0U3BoZXJlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXHJcXG4gICBmbG9hdCBhID0gZG90KHJheSwgcmF5KTtcXHJcXG4gICBmbG9hdCBiID0gMi4wICogZG90KHRvU3BoZXJlLCByYXkpO1xcclxcbiAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cyAqIHNwaGVyZVJhZGl1cztcXHJcXG4gICBmbG9hdCBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xcclxcbiAgIGlmIChkaXNjcmltaW5hbnQgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHQxID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBmbG9hdCB0MiA9ICgtYiArIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgaWYgKHQxID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQyID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDI7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yU3BoZXJlKHZlYzMgaGl0LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICByZXR1cm4gKGhpdCAtIHNwaGVyZUNlbnRlcikgLyBzcGhlcmVSYWRpdXM7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6ICsgc2VlZCwgc2NhbGUpKSAqIDQzNzU4LjU0NTMgKyBzZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbihmbG9hdCBzZWVkLCB2ZWMzIG5vcm1hbClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCkgPCAuNSlcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygxLCAwLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygwLCAxLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByICogY29zKGFuZ2xlKSAqIHNkaXIgKyByICogc2luKGFuZ2xlKSAqIHRkaXIgKyBzcXJ0KDEuIC0gdSkgKiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB6ID0gMS4wIC0gMi4wICogdTtcXHJcXG4gICBmbG9hdCByID0gc3FydCgxLjAgLSB6ICogeik7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgcmV0dXJuIHZlYzMociAqIGNvcyhhbmdsZSksIHIgKiBzaW4oYW5nbGUpLCB6KTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihzZWVkKSAqIHNxcnQocmFuZG9tKHZlYzMoMzYuNzUzOSwgNTAuMzY1OCwgMzA2LjI3NTkpLCBzZWVkKSk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW5TaGFkb3codmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBmbG9hdCB0TGlnaHQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcbiAgIGlmICh0QmFsbCA8IHRMaWdodClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgaWYgKGludGVyc2VjdE9iaihvcmlnaW4sIHJheSwgb2JqZWN0KSlcXHJcXG4gICB7XFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fVk9MVU1FUzsgaSsrKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBWb2x1bWUgdm9sID0gb2JqZWN0LnZvbHVtZXNbaV07XFxyXFxuICAgICAgICAgaWYgKGludGVyc2VjdFZvbChvcmlnaW4sIHJheSwgdm9sKSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IHZvbC5zdGFydEluZGV4OyBpIDwgKHZvbC5zdGFydEluZGV4ICsgdm9sLm51bVRyaWFuZ2xlcyk7IGkrKylcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUoaSk7XFxyXFxuICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpIDwgdExpZ2h0KVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiNlbmRpZlxcclxcblxcclxcbiAgIHJldHVybiBmYWxzZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZSBbMOKApjFdLCBpbmNsdWRpbmcgaHVlLlxcclxcbnZlYzQgcmdiMmhzdih2ZWM0IGMpXFxyXFxue1xcclxcbiAgIHZlYzQgSyA9IHZlYzQoMC4wLCAtMS4wIC8gMy4wLCAyLjAgLyAzLjAsIC0xLjApO1xcclxcbiAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLCB2ZWM0KGMuZ2IsIEsueHkpLCBzdGVwKGMuYiwgYy5nKSk7XFxyXFxuICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksIHZlYzQoYy5yLCBwLnl6eCksIHN0ZXAocC54LCBjLnIpKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXHJcXG4gICBmbG9hdCBlID0gMS4wZS0xMDtcXHJcXG4gICByZXR1cm4gdmVjNChhYnMocS56ICsgKHEudyAtIHEueSkgLyAoNi4wICogZCArIGUpKSwgZCAvIChxLnggKyBlKSwgcS54LCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBBbGwgY29tcG9uZW50cyBhcmUgaW4gdGhlIHJhbmdlWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IGhzdjJyZ2IodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDEuMCwgMi4wIC8gMy4wLCAxLjAgLyAzLjAsIDMuMCk7XFxyXFxuICAgdmVjMyBwID0gYWJzKGZyYWN0KGMueHh4ICsgSy54eXopICogNi4wIC0gSy53d3cpO1xcclxcbiAgIHJldHVybiB2ZWM0KGMueiAqIG1peChLLnh4eCwgY2xhbXAocCAtIEsueHh4LCAwLjAsIDEuMCksIGMueSksIGMuYSk7XFxyXFxufVxcclxcblxcclxcbnZlYzQgc2hpZnRUZW1wZXJhdHVyZSh2ZWM0IHJnYiwgZmxvYXQgZGVnLCBmbG9hdCB0aW50U3RyZW5ndGgpXFxyXFxue1xcclxcbiAgIHZlYzQgaHN2ID0gcmdiMmhzdihyZ2IpO1xcclxcbiAgIGhzdi54ICs9IGRlZyAvIDM2MC4wO1xcclxcbiAgIHZlYzQgZnVsbFRpbnRSZ2IgPSBoc3YycmdiKGhzdik7XFxyXFxuXFxyXFxuICAgcmV0dXJuIG1peChyZ2IsIGZ1bGxUaW50UmdiLCB0aW50U3RyZW5ndGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBUT0RPIG1vdmUgdG8gYSBjb21tb24gZmlsZVxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCBjYWxjdWxhdGVDb2xvcih2ZWMzIG9yaWdpbiwgdmVjMyByYXkpXFxyXFxue1xcclxcbiAgIHZlYzMgYWNjdW11bGF0ZWRDb2xvciA9IHZlYzMoMC4wKTtcXHJcXG4gICB2ZWMzIGNvbG9yTWFzayA9IHZlYzMoMS4wKTtcXHJcXG4gICB2ZWMzIGV5ZSA9IG9yaWdpbjtcXHJcXG4gICBib29sIG9iakhpdCA9IGZhbHNlO1xcclxcbiAgIGJvb2wgb2JqU2hhZG93ID0gZmFsc2U7XFxyXFxuICAgZmxvYXQgc3BlY3VsYXJDb250cmlidXRpb24gPSAwLjA7XFxyXFxuXFxyXFxuICAgLy8gbWFpbiByYXl0cmFjaW5nIGxvb3BcXHJcXG4gICBmb3IgKGludCBib3VuY2UgPSAwOyBib3VuY2UgPCBNQVhfQk9VTkNFUzsgYm91bmNlKyspXFxyXFxuICAge1xcclxcbiAgICAgIC8vIGNvbXB1dGUgdGhlIGludGVyc2VjdGlvbiB3aXRoIGV2ZXJ5dGhpbmdcXHJcXG4gICAgICBmbG9hdCB0QmFsbCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG4gICAgICB2ZWMzIHN1cmZhY2VDb2xvciA9IHZlYzMoMC41LCAwLjUsIDAuNSk7XFxyXFxuXFxyXFxuICAgICAgZmxvYXQgdE9iaiA9IElORklOSVRZO1xcclxcbiAgICAgIGludCB0SW5kZXg7XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBpZiAoaW50ZXJzZWN0T2JqKG9yaWdpbiwgcmF5LCBvYmplY3QpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9WT0xVTUVTOyBpKyspXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIFZvbHVtZSB2b2wgPSBvYmplY3Qudm9sdW1lc1tpXTtcXHJcXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0Vm9sKG9yaWdpbiwgcmF5LCB2b2wpKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBmb3IgKGludCBpID0gdm9sLnN0YXJ0SW5kZXg7IGkgPCAodm9sLnN0YXJ0SW5kZXggKyB2b2wubnVtVHJpYW5nbGVzKTsgaSsrKVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZShpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBmbG9hdCB0VHJpID0gbWluKHRPYmosIGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBpZiAodFRyaSA8IHRPYmopXFxyXFxuICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRPYmogPSB0VHJpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRJbmRleCA9IGk7XFxyXFxuICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4gICAgICAvLyBpZiB0aGUgZmlyc3QgcmF5IGhpdHMgdGhlIGxpZ2h0LCByZXR1cm4gdGhlIGxpZ2h0IGNvbG9yLiBUaGlzXFxyXFxuICAgICAgLy8gc2ltdWxhdGVzIGRpc3BsYXlpbmcgdGhlIGxpZ2h0XFxyXFxuICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZmxvYXQgdExpZ2h0ID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBMaWdodHNbaV0ucG9zLCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgaWYgKHRMaWdodCA8IHRCYWxsICYmIHRMaWdodCA8IHRPYmopXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHJldHVybiB2ZWM0KExpZ2h0c1tpXS5pbnRlbnNpdHkgKiBMaWdodHNbaV0uY29sb3IsIDEuMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBpbnRlcnNlY3Rpb25cXHJcXG4gICAgICBmbG9hdCB0RG9tZSA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICBmbG9hdCB0Rmxvb3IgPSBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAgICAvLyBjaGVjayBmb3IgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZFxcclxcbiAgICAgIGlmIChyYXkueSA8IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gZGlzdGFuY2UgdG8gZmxvb3IgPSBudW0gdW5pdCB2ZWN0b3JzIHJlcXVpcmVkIHRvIHJlYWNoIHRoZSBmbG9vclxcclxcbiAgICAgICAgIHRGbG9vciA9IC1vcmlnaW4ueSAvIHJheS55O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGhpdFxcclxcbiAgICAgIGZsb2F0IHQgPSBtaW4obWluKHREb21lLCB0Rmxvb3IpLCBtaW4odEJhbGwsIHRPYmopKTtcXHJcXG5cXHJcXG4gICAgICAvLyBpbmZvIGFib3V0IGhpdFxcclxcbiAgICAgIHZlYzMgaGl0ID0gb3JpZ2luICsgcmF5ICogdDtcXHJcXG4gICAgICB2ZWMzIG5vcm1hbDtcXHJcXG5cXHJcXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbFxcclxcbiAgICAgIGlmICh0ID09IHRGbG9vcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRkxPT1JfQ09MT1I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gdmVjMygwLjAsIDEuMCwgMC4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0QmFsbClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdmVjMyh1T2JqQ29sb3IpO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IG5vcm1hbEZvclNwaGVyZShoaXQsIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpIaXQgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRPYmopXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IHVPYmpDb2xvcjtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JUcmlhbmdsZShvcmlnaW4sIGhpdCwgdEluZGV4KTtcXHJcXG5cXHJcXG4gICAgICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9iakhpdCA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHREb21lKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBET01FX0NPTE9SO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IC1ub3JtYWxGb3JTcGhlcmUoaGl0LCBET01FX0NFTlRFUiwgRE9NRV9SQURJVVMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBjb2xvck1hc2sgKj0gc3VyZmFjZUNvbG9yO1xcclxcblxcclxcbiAgICAgIGlmIChsZW5ndGgoY29sb3JNYXNrKSA8IDAuMDEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gY29tcHV0ZSBkaWZmdXNlIGxpZ2h0aW5nIGNvbnRyaWJ1dGlvblxcclxcbiAgICAgICAgIHZlYzMgdG9MaWdodCA9IExpZ2h0c1tpXS5wb3MgLSBoaXQ7XFxyXFxuICAgICAgICAgdmVjMyB0b0xpZ2h0TiA9IG5vcm1hbGl6ZSh0b0xpZ2h0KTtcXHJcXG5cXHJcXG4gICAgICAgICAvLyB0cmFjZSBhIHNoYWRvdyByYXkgdG8gdGhlIGxpZ2h0XFxyXFxuICAgICAgICAgaWYgKGluU2hhZG93KGhpdCArIG5vcm1hbCAqIE9GRlNFVCwgdG9MaWdodE4sIGxlbmd0aCh0b0xpZ2h0KSkgPT0gZmFsc2UpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIC8vIGRpZmZ1c2UgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlmZnVzZSA9IG1heCgwLjAsIGRvdCh0b0xpZ2h0Tiwgbm9ybWFsKSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gc3BlY3VsYXIgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgdmVjMyB0b0V5ZSA9IGV5ZSAtIGhpdDtcXHJcXG4gICAgICAgICAgICB2ZWMzIG4ybCA9IHRvTGlnaHROO1xcclxcbiAgICAgICAgICAgIHZlYzMgbjJlID0gbm9ybWFsaXplKHRvRXllKTtcXHJcXG4gICAgICAgICAgICB2ZWMzIGJpc2VjdG9yID0gKG4ybCArIG4yZSkgLyBsZW5ndGgobjJsICsgbjJlKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzcGVjdWxhckNvZWZmaWNpZW50ID0gMC41O1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNoaW5pbmVzcyA9IDEwMC4wO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyID0gc3BlY3VsYXJDb2VmZmljaWVudCAqIHBvdyhtYXgoMC4wLCBkb3QoYmlzZWN0b3IsIG5vcm1hbCkpLCBzaGluaW5lc3MpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIGFwcGx5IGxpZ2h0IGZhbGwgb2ZmIGFzIGRpc3RhbmNlIHNxdWFyZXMuIFVzZSBhIG1pbiB2YWx1ZSBmb3IgdGhlXFxyXFxuICAgICAgICAgICAgLy8gbGlnaHQgc2l6ZSBvdGhlcndpc2UgZmFsbG9mZiBpcyB0b28gcmFwaWRcXHJcXG4gICAgICAgICAgICBmbG9hdCByYWRpdXMgPSBtYXgoMC43NSwgTGlnaHRzW2ldLnNpemUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IGRpc3QgPSBtYXgoMS4wLCAobGVuZ3RoKHRvTGlnaHQpIC0gcmFkaXVzKSAvIHJhZGl1cyk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgbGlnaHRJbnRlbnNpdHkgPSBMaWdodHNbaV0uaW50ZW5zaXR5IC8gKGRpc3QgKiBkaXN0KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9IGNvbG9yTWFzayAqIExpZ2h0c1tpXS5jb2xvciAqIGxpZ2h0SW50ZW5zaXR5ICogZGlmZnVzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBUT0RPIGRlZmluZSBhIGNvbG9yIG1hc2sgZm9yIHNwZWN1bGFyIHJlZmxlY3Rpb25cXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gbWl4KHN1cmZhY2VDb2xvciwgTGlnaHRzW2ldLmNvbG9yLCAwLjgpICpcXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPVxcclxcbiAgICAgICAgICAgICAgICAobGVuZ3RoKHN1cmZhY2VDb2xvcikgKiBMaWdodHNbaV0uY29sb3IpICogbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBzcGVjdWxhckNvbnRyaWJ1dGlvbiArPSBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZSBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpTaGFkb3cgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIG5leHQgb3JpZ2luXFxyXFxuICAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odVJhbmRvbSArIGZsb2F0KGJvdW5jZSksIG5vcm1hbCk7XFxyXFxuXFxyXFxuICAgICAgb3JpZ2luID0gaGl0O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICBmbG9hdCBhbHBoYSA9IDEuMDtcXHJcXG4gICBpZiAob2JqSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAob2JqU2hhZG93KVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVTaGFkb3dBbHBoYTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVMaWdodEFscGhhO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhbHBoYSArPSBjbGFtcChzcGVjdWxhckNvbnRyaWJ1dGlvbiwgMC4wLCAxLjApO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWM0IHNjaWVuY2VDb2xvciA9IHZlYzQoY2xhbXAoYWNjdW11bGF0ZWRDb2xvciwgMC4wLCAxLjApLCBhbHBoYSk7XFxyXFxuICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICAvKlxcclxcbiAgIGlmIChvYmpIaXQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB2ZWM0KHRvQXJ0aXN0KHNjaWVuY2VDb2xvcikucmdiLCBhbHBoYSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdmVjMyByYW5kID0gdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHVSYW5kb20pICogTElHSFRfU0laRTtcXHJcXG5cXHJcXG4gICBMaWdodHNbMF0uaW50ZW5zaXR5ID0gdUxpZ2h0SW50ZW5zaXR5O1xcclxcbiAgIExpZ2h0c1swXS5zaXplID0gTElHSFRfU0laRTtcXHJcXG4gICBMaWdodHNbMF0ucG9zID0gdUxpZ2h0UG9zICsgcmFuZDtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB1TGlnaHRDb2xvcjtcXHJcXG5cXHJcXG4gICBmb3IgKGludCBpID0gMTsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgeCA9IFJBRElVUyAqIHNpbigyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLng7XFxyXFxuICAgICAgZmxvYXQgeSA9IEhFSUdIVCArIHJhbmQueTtcXHJcXG4gICAgICBmbG9hdCB6ID0gUkFESVVTICogY29zKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQuejtcXHJcXG5cXHJcXG4gICAgICBMaWdodHNbaV0uaW50ZW5zaXR5ID0gdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG4gICAgICBMaWdodHNbaV0uc2l6ZSA9IDIuMCAqIExJR0hUX1NJWkU7XFxyXFxuICAgICAgTGlnaHRzW2ldLnBvcyA9IHZlYzMoeCwgeSwgeik7XFxyXFxuICAgICAgTGlnaHRzW2ldLmNvbG9yID0gQU1CSUVOVF9DT0xPUjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gbWVyZ2UgdGhlIG5ldyBjb2xvciBpbnRvIHRoZSBleGlzdGluZyB0ZXh0dXJlXFxyXFxuICAgdmVjNCB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlKHVUZXh0dXJlLCBnbF9GcmFnQ29vcmQueHkgLyB1VGV4dHVyZVNpemUpO1xcclxcbiAgIHZlYzQgbmV3Q29sb3IgPSBjYWxjdWxhdGVDb2xvcih1RXllLCBpbml0aWFsUmF5KTtcXHJcXG4gICBmbG9hdCB3ZWlnaHQgPSAodVNhbXBsZSAvICgxLjAgKyB1U2FtcGxlKSk7XFxyXFxuICAgZnJhZ0NvbG9yID0gbWl4KG5ld0NvbG9yLCB0ZXh0dXJlQ29sb3IsIHdlaWdodCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8VkVSU0lPTj5cXHJcXG5cXHJcXG4jZGVmaW5lIE5PVEhJTkdcXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiNkZWZpbmUgRVMzMDBcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWUsIHVSYXkwMCwgdVJheTAxLCB1UmF5MTAsIHVSYXkxMTtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5pbiB2ZWMzIHZlcnRleDtcXHJcXG5vdXQgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbHNlXFxyXFxuYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZiBcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgodVJheTAwLCB1UmF5MDEsIHBlcmNlbnQueSksIG1peCh1UmF5MTAsIHVSYXkxMSwgcGVyY2VudC55KSwgcGVyY2VudC54KTtcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7IGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpOyB9XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIlxcclxcbmF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdGV4Q29vcmQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHZlcnRleC54eSwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbi8vIGludGVycG9sYXRlZCB2YWx1ZXMgZnJvbSB0aGUgdmVydGV4IHNoYWRlclxcclxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcclxcbnZhcnlpbmcgdmVjMyB2VmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbnVuaWZvcm0gbWF0NCBtb2RlbDtcXHJcXG51bmlmb3JtIG1hdDQgdmlldztcXHJcXG51bmlmb3JtIG1hdDQgbGlnaHRWaWV3O1xcclxcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gZmxvYXQgdUFtYmllbnRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodERpcmVjdGlvbjtcXHJcXG5cXHJcXG4vLyB0aGUgY29sb3JzIHdlIHVzZSB0byByZXByZXNlbnQgb3VyIGxpZ2h0ZXN0IGFuZCBkYXJrZXN0IHZhbHVlc1xcclxcbnVuaWZvcm0gdmVjMyB1V2hpdGVDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUJsYWNrQ29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVRocmVzaG9sZHM7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGhyZXNob2xkMTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUaHJlc2hvbGQyO1xcclxcbnVuaWZvcm0gZmxvYXQgdUhpZ2hsaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdU1pZExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdURhcmtMaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3c7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVNoYWRvd3M7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNoYWRvd1RleHR1cmU7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVGbG9vckNlbnRlcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVGbG9vclJhZGl1cztcXHJcXG51bmlmb3JtIGludCB1U2hvd0Zsb29yO1xcclxcblxcclxcbmJvb2wgaW5fc2hhZG93KHZvaWQpXFxyXFxue1xcclxcbiAgIGlmICh1VXNlU2hhZG93cyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC8vIFRoZSB2ZXJ0ZXggbG9jYXRpb24gcmVuZGVyZWQgZnJvbSB0aGUgbGlnaHQgc291cmNlIGlzIGFsbW9zdCBpbiBOb3JtYWxpemVkXFxyXFxuICAgLy8gRGV2aWNlIENvb3JkaW5hdGVzIChOREMpLCBidXQgdGhlIHBlcnNwZWN0aXZlIGRpdmlzaW9uIGhhcyBub3QgYmVlblxcclxcbiAgIC8vIHBlcmZvcm1lZCB5ZXQuIFBlcmZvcm0gdGhlIHBlcnNwZWN0aXZlIGRpdmlkZS4gVGhlICh4LHkseikgdmVydGV4IGxvY2F0aW9uXFxyXFxuICAgLy8gY29tcG9uZW50cyBhcmUgbm93IGVhY2ggaW4gdGhlIHJhbmdlIFstMS4wLCsxLjBdLlxcclxcbiAgIC8vIHZlYzMgdmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0ID0gdl9WZXJ0ZXhfcmVsYXRpdmVfdG9fbGlnaHQueHl6IC8gdl9WZXJ0ZXhfcmVsYXRpdmVfdG9fbGlnaHQudztcXHJcXG4gICB2ZWMzIHZlcnRleCA9IHZTaGFkb3dWZXJ0ZXg7XFxyXFxuXFxyXFxuICAgLy8gQ29udmVydCB0aGUgdGhlIHZhbHVlcyBmcm9tIE5vcm1hbGl6ZWQgRGV2aWNlIENvb3JkaW5hdGVzIChyYW5nZSBbLTEuMCwrMS4wXSlcXHJcXG4gICAvLyB0byB0aGUgcmFuZ2UgWzAuMCwxLjBdLiBUaGlzIG1hcHBpbmcgaXMgZG9uZSBieSBzY2FsaW5nXFxyXFxuICAgLy8gdGhlIHZhbHVlcyBieSAwLjUsIHdoaWNoIGdpdmVzIHZhbHVlcyBpbiB0aGUgcmFuZ2UgWy0wLjUsKzAuNV0gYW5kIHRoZW5cXHJcXG4gICAvLyBzaGlmdGluZyB0aGUgdmFsdWVzIGJ5ICswLjUuXFxyXFxuICAgdmVydGV4ID0gdmVydGV4ICogMC41ICsgMC41O1xcclxcblxcclxcbiAgIC8vIEdldCB0aGUgeiB2YWx1ZSBvZiB0aGlzIGZyYWdtZW50IGluIHJlbGF0aW9uc2hpcCB0byB0aGUgbGlnaHQgc291cmNlLlxcclxcbiAgIC8vIFRoaXMgdmFsdWUgd2FzIHN0b3JlZCBpbiB0aGUgc2hhZG93IG1hcCAoZGVwdGggYnVmZmVyIG9mIHRoZSBmcmFtZSBidWZmZXIpXFxyXFxuICAgLy8gd2hpY2ggd2FzIHBhc3NlZCB0byB0aGUgc2hhZGVyIGFzIGEgdGV4dHVyZSBtYXAuXFxyXFxuICAgLy8gdmVjNCB0ZXh0dXJlVmFsdWUgPSB0ZXh0dXJlMkQodVNoYWRvd1NhbXBsZXIsIHZlcnRleC54eSk7XFxyXFxuXFxyXFxuICAgLy8gVGhlIHRleHR1cmUgbWFwIGNvbnRhaW5zIGEgc2luZ2xlIGRlcHRoIHZhbHVlIGZvciBlYWNoIHBpeGVsLiBIb3dldmVyLFxcclxcbiAgIC8vIHRoZSB0ZXh0dXJlMkQgc2FtcGxlciBhbHdheXMgcmV0dXJucyBhIGNvbG9yIGZyb20gYSB0ZXh0dXJlLiBGb3IgYVxcclxcbiAgIC8vIGdsLkRFUFRIX0NPTVBPTkVOVCB0ZXh0dXJlLCB0aGUgY29sb3IgY29udGFpbnMgdGhlIGRlcHRoIHZhbHVlIGluXFxyXFxuICAgLy8gZWFjaCBvZiB0aGUgY29sb3IgY29tcG9uZW50cy4gSWYgdGhlIHZhbHVlIHdhcyBkLCB0aGVuIHRoZSBjb2xvciByZXR1cm5lZFxcclxcbiAgIC8vIGlzIChkLGQsZCwxKS4gVGhpcyBpcyBhIFxcXCJjb2xvclxcXCIgKGRlcHRoKSB2YWx1ZSBiZXR3ZWVuIFswLjAsKzEuMF0uXFxyXFxuICAgZmxvYXQgc2hhZG93bWFwX2Rpc3RhbmNlID0gdGV4dHVyZTJEKHVTaGFkb3dUZXh0dXJlLCB2ZXJ0ZXgueHkpLnI7XFxyXFxuXFxyXFxuICAgLy8gVGVzdCB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIGZyYWdtZW50IGFuZCB0aGUgbGlnaHQgc291cmNlIGFzXFxyXFxuICAgLy8gY2FsY3VsYXRlZCB1c2luZyB0aGUgc2hhZG93bWFwIHRyYW5zZm9ybWF0aW9uICh2ZXJ0ZXhfcmVsYXRpdmVfdG9fbGlnaHQueikgYW5kXFxyXFxuICAgLy8gdGhlIHNtYWxsZXN0IGRpc3RhbmNlIGJldHdlZW4gdGhlIGNsb3Nlc3QgZnJhZ21lbnQgdG8gdGhlIGxpZ2h0IHNvdXJjZVxcclxcbiAgIC8vIGZvciB0aGlzIGxvY2F0aW9uLCBhcyBzdG9yZWQgaW4gdGhlIHNoYWRvd21hcC4gV2hlbiB0aGUgY2xvc2VzdFxcclxcbiAgIC8vIGRpc3RhbmNlIHRvIHRoZSBsaWdodCBzb3VyY2Ugd2FzIHNhdmVkIGluIHRoZSBzaGFkb3dtYXAsIHNvbWVcXHJcXG4gICAvLyBwcmVjaXNpb24gd2FzIGxvc3QuIFRoZXJlZm9yZSB3ZSBuZWVkIGEgc21hbGwgdG9sZXJhbmNlIGZhY3RvciB0b1xcclxcbiAgIC8vIGNvbXBlbnNhdGUgZm9yIHRoZSBsb3N0IHByZWNpc2lvbi5cXHJcXG4gICBmbG9hdCB0b2wgPSAwLjAwMTtcXHJcXG4gICBpZiAodmVydGV4LnogPD0gc2hhZG93bWFwX2Rpc3RhbmNlICsgdG9sKVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBUaGlzIHN1cmZhY2UgcmVjZWl2ZXMgZnVsbCBsaWdodCBiZWNhdXNlIGl0IGlzIHRoZSBjbG9zZXN0IHN1cmZhY2VcXHJcXG4gICAgICAvLyB0byB0aGUgbGlnaHQuXFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIC8vIFRoaXMgc3VyZmFjZSBpcyBpbiBhIHNoYWRvdyBiZWNhdXNlIHRoZXJlIGlzIGEgY2xvc2VyIHN1cmZhY2UgdG9cXHJcXG4gICAgICAvLyB0aGUgbGlnaHQgc291cmNlLlxcclxcbiAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCBnZXRDb2xvcihmbG9hdCB2YWwpXFxyXFxue1xcclxcbiAgIGZsb2F0IGEgPSAxLjA7XFxyXFxuICAgaWYgKHVTaG93Rmxvb3IgPT0gMSlcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gZ3JhZGlhdGUgb3V0IHRoZSBiYWNrZ3JvdW5kIGZyb20gaGFsZiB0cmFuc3BhcmVudCB0byBmdWxsIHRyYW5zcGFyZW5jeVxcclxcbiAgICAgIHZlYzMgY2VudGVyID0gKG1vZGVsICogdmVjNCh1Rmxvb3JDZW50ZXIsIDEuMCkpLnh5ejtcXHJcXG4gICAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKGNlbnRlciAtIHZWZXJ0ZXgpO1xcclxcbiAgICAgIGEgPSAwLjUgKiAoMS4wIC0gZGlzdCAvIHVGbG9vclJhZGl1cyk7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzMgcmdiID0gbWl4KHVCbGFja0NvbG9yLCB1V2hpdGVDb2xvciwgdmFsKTtcXHJcXG4gICByZXR1cm4gdmVjNChyZ2IsIGEpO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWM0IGZyYWdDb2xvcjtcXHJcXG4gICBpZiAoaW5fc2hhZG93KCkpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmcmFnQ29sb3IgPSBnZXRDb2xvcih1QW1iaWVudEludGVuc2l0eSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZnJhZ0NvbG9yID0gZ2V0Q29sb3IodVNoYWRvdyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC8vIHVzZWZ1bCBmb3IgZGVidWdnaW5nIC0gdHVybiBzaGFkb3dzIHJlZFxcclxcbiAgICAgIC8vIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMC4wKTtcXHJcXG4gICAgICAvLyByZXR1cm47XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgdmVjMyB0b0xpZ2h0ID0gbm9ybWFsaXplKC11TGlnaHREaXJlY3Rpb24pO1xcclxcbiAgICAgIHZlYzMgdG9FeWUgPSB2ZWMzKDAuMCwgMC4wLCAtMS4wKTtcXHJcXG4gICAgICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2Tm9ybWFsKTsgLy8gdk5vcm1hbCBpcyBpbnRlcnBvbGF0ZWQgYW5kIG5vbG9uZ2VyIG5vcm1hbFxcclxcblxcclxcbiAgICAgIC8vIHN3YXAgbm9ybWFscyBmb3IgYmFjayBmYWNpbmcgdHJpYW5nbGVzXFxyXFxuICAgICAgaWYgKGRvdChub3JtYWwsIHRvRXllKSA8IC0wLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIG5vcm1hbCA9IC1ub3JtYWw7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGNvbXB1dGUgZGlmZnVzZSBjb250cmlidXRpb24gPSBjb3Mgb2YgYW5nbGUgYmV0d2VlbiB0aGUgdmVjdG9ycyAoZG90IHByb2R1Y3QpXFxyXFxuICAgICAgZmxvYXQgZGlmZnVzZUZhY3RvciA9IGNsYW1wKGRvdChub3JtYWwsIHRvTGlnaHQpLCAwLjAsIDEuMCk7XFxyXFxuICAgICAgZmxvYXQgZGlmZnVzZSA9IGRpZmZ1c2VGYWN0b3IgKiB1TGlnaHRJbnRlbnNpdHk7XFxyXFxuXFxyXFxuICAgICAgLy8gY29tcHV0ZSBzcGVjdWxhciBjb250cmlidXRpb25cXHJcXG4gICAgICBmbG9hdCBzaGluaW5lc3MgPSAxNS4wO1xcclxcbiAgICAgIHZlYzMgcmVmbGVjdGlvbiA9IG5vcm1hbGl6ZSgyLjAgKiBkb3Qobm9ybWFsLCB0b0xpZ2h0KSAqIG5vcm1hbCAtIHRvTGlnaHQpO1xcclxcbiAgICAgIGZsb2F0IGNvc0FuZ2xlID0gY2xhbXAoZG90KHJlZmxlY3Rpb24sIHRvRXllKSwgMC4wLCAxLjApOyAvLyBjbGFtcCB0byBhdm9pZCB2YWx1ZXMgPiA5MCBkZWdcXHJcXG4gICAgICBmbG9hdCBzcGVjdWxhciA9IDAuMSAqIHBvdyhjb3NBbmdsZSwgc2hpbmluZXNzKTtcXHJcXG5cXHJcXG4gICAgICBmbG9hdCB2YWw7XFxyXFxuICAgICAgaWYgKHVVc2VUaHJlc2hvbGRzID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZhbCA9IHVBbWJpZW50SW50ZW5zaXR5ICsgZGlmZnVzZSArIHNwZWN1bGFyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZsb2F0IHRocmVzaG9sZCA9IDEuMCAtIGRpZmZ1c2VGYWN0b3I7XFxyXFxuXFxyXFxuICAgICAgICAgZmxvYXQgdjEgPSBtaW4odVRocmVzaG9sZDEsIHVUaHJlc2hvbGQyKTtcXHJcXG4gICAgICAgICBmbG9hdCB2MiA9IG1heCh1VGhyZXNob2xkMSwgdVRocmVzaG9sZDIpO1xcclxcblxcclxcbiAgICAgICAgIGlmICh0aHJlc2hvbGQgPCB2MSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmFsID0gdUxpZ2h0TGlnaHQ7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIGVsc2UgaWYgKHRocmVzaG9sZCA8IHYyKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2YWwgPSB1TWlkTGlnaHQ7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIGVsc2UgaWYgKHRocmVzaG9sZCA8IDEuMClcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmFsID0gdURhcmtMaWdodDtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2YWwgPSB1U2hhZG93O1xcclxcbiAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICBpZiAoc3BlY3VsYXIgPiAwLjA1KVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2YWwgPSB1SGlnaGxpZ2h0O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZnJhZ0NvbG9yID0gZ2V0Q29sb3IodmFsKTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gZnJhZ0NvbG9yO1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiYXR0cmlidXRlIHZlYzMgYVZlcnRleDtcXHJcXG5hdHRyaWJ1dGUgdmVjMyBhTm9ybWFsO1xcclxcblxcclxcbnVuaWZvcm0gbWF0NCBtb2RlbDtcXHJcXG51bmlmb3JtIG1hdDQgdmlldztcXHJcXG51bmlmb3JtIG1hdDQgbGlnaHRWaWV3O1xcclxcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcclxcbnZhcnlpbmcgdmVjMyB2VmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQoYVZlcnRleCwgMS4wKTtcXHJcXG4gICB2Tm9ybWFsID0gKG1vZGVsICogdmVjNChhTm9ybWFsLCAwLjApKS54eXo7XFxyXFxuICAgdlZlcnRleCA9IChtb2RlbCAqIHZlYzQoYVZlcnRleCwgMS4wKSkueHl6O1xcclxcbiAgIHZTaGFkb3dWZXJ0ZXggPSAobGlnaHRWaWV3ICogbW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCkpLnh5ejtcXHJcXG59XCIiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9