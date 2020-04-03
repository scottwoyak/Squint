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
            avgLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0, 0, 0]),
            lightestLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0, 0, 0]),
            darkestLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([1, 1, 1]),
            avgShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0, 0, 0]),
            lightestShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0, 0, 0]),
            darkestShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([1, 1, 1]),
            terminatorColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0, 0, 0]),
            highlightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0, 0, 0]),
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
                var color = new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([r, g, b]);
                if (a == alphaLight) {
                    numLightPixels++;
                    if (data.lightestLightColor == null) {
                        data.lightestLightColor = color;
                    }
                    if (data.darkestLightColor == null) {
                        data.darkestLightColor = color;
                    }
                    data.lightestLightColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"].lightest(data.lightestLightColor, color);
                    data.darkestLightColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"].darkest(data.darkestLightColor, color);
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
                    data.lightestShadowColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"].lightest(data.lightestShadowColor, color);
                    data.darkestShadowColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"].darkest(data.darkestShadowColor, color);
                    data.avgShadowColor.r += color.r;
                    data.avgShadowColor.b += color.b;
                    data.avgShadowColor.g += color.g;
                }
                else if (a > alphaLight) {
                    data.highlightColor = _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"].lightest(data.highlightColor, color);
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
/**
 * Class for holding information about a triangle
 */
var IndexedTriangle = /** @class */ (function () {
    function IndexedTriangle(vertices, iV0, iV1, iV2, normals, iN0, iN1, iN2) {
        this.vertices = vertices;
        this.iV0 = iV0;
        this.iV1 = iV1;
        this.iV2 = iV2;
        this.normals = normals;
        if (iN0 === undefined || iN0 === -1) {
            var normal = this.computeNormal();
            this.normals.push(normal);
            var index = this.normals.length - 1;
            this.iN0 = index;
            this.iN1 = index;
            this.iN2 = index;
        }
        else {
            this.normals = normals;
            this.iN0 = iN0;
            this.iN1 = iN1;
            this.iN2 = iN2;
            /*
            let n = this.computeNormal();
            let n0 = this.n0;
            let n1 = this.n1;
            let n2 = this.n2;
            console.log(n.toString(2));
            console.log(n0.toString(2));
            console.log(n1.toString(2));
            console.log(n2.toString(2));
            */
        }
    }
    Object.defineProperty(IndexedTriangle.prototype, "v0", {
        get: function () {
            return this.vertices[this.iV0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "v1", {
        get: function () {
            return this.vertices[this.iV1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "v2", {
        get: function () {
            return this.vertices[this.iV2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "n0", {
        get: function () {
            return this.normals[this.iN0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "n1", {
        get: function () {
            return this.normals[this.iN1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "n2", {
        get: function () {
            return this.normals[this.iN2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minX", {
        get: function () {
            return Math.min(this.v0.x, Math.min(this.v1.x, this.v2.x));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minY", {
        get: function () {
            return Math.min(this.v0.y, Math.min(this.v1.y, this.v2.y));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minZ", {
        get: function () {
            return Math.min(this.v0.z, Math.min(this.v1.z, this.v2.z));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxX", {
        get: function () {
            return Math.max(this.v0.x, Math.max(this.v1.x, this.v2.x));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxY", {
        get: function () {
            return Math.max(this.v0.y, Math.max(this.v1.y, this.v2.y));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxZ", {
        get: function () {
            return Math.max(this.v0.z, Math.max(this.v1.z, this.v2.z));
        },
        enumerable: true,
        configurable: true
    });
    IndexedTriangle.prototype.computeNormal = function () {
        var a = this.v1.subtract(this.v0);
        var b = this.v2.subtract(this.v1);
        return a.cross(b).normalize();
    };
    return IndexedTriangle;
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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathTracerRenderer */ "./src/PathTracerRenderer.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _Uniforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Uniforms */ "./src/Uniforms.ts");
/* harmony import */ var _SphericalCoord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SphericalCoord */ "./src/SphericalCoord.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glColorWithTemperature */ "./src/glColorWithTemperature.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _TriangleSphere__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TriangleSphere */ "./src/TriangleSphere.ts");
/* harmony import */ var _TriangleCube__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TriangleCube */ "./src/TriangleCube.ts");
/* harmony import */ var _TriangleObjFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TriangleObjFile */ "./src/TriangleObjFile.ts");












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
            //this.renderer.setModel(tObj);
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
        if (query && query.toLowerCase() === 'trianglesphere') {
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uBallRadius = 0;
            var radius = 0.5;
            var center = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, radius, 0]);
            var tObj = new _TriangleSphere__WEBPACK_IMPORTED_MODULE_9__["TriangleSphere"](8, radius, center);
            tObj.breakIntoVolumes();
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase() === 'trianglecube') {
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uBallRadius = 0;
            var size = 0.8;
            var center = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, size / 2.0, 0]);
            var tObj = new _TriangleCube__WEBPACK_IMPORTED_MODULE_10__["TriangleCube"](size, center);
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase().endsWith('.obj')) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uBallRadius = 0;
            return fetch(query)
                .then(function (res) { return res.text(); })
                .then(function (res) {
                var tObj = new _TriangleObjFile__WEBPACK_IMPORTED_MODULE_11__["TriangleObjFile"](query, res);
                var size = 1.5;
                tObj.autoCenter(size);
                tObj.translate(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, tObj.height / 2, 0]));
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
        this.modelview = _glMat__WEBPACK_IMPORTED_MODULE_2__["glMat4"].makeLookAt(_Uniforms__WEBPACK_IMPORTED_MODULE_3__["Uniforms"].uEye, new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 1, 0]), // center point
        new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 1, 0]) // up vector
        );
        this.projection = _glMat__WEBPACK_IMPORTED_MODULE_2__["glMat4"].makePerspective(55, 1, 0.1, 100);
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
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
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
        this.frameBuffer = gl.createFramebuffer();
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
        this.textures = [];
        for (var i = 0; i < 2; i++) {
            this.textures.push(gl.createTexture());
            gl.bindTexture(gl.TEXTURE_2D, this.textures[i]);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texImage2D(gl.TEXTURE_2D, // target
            0, // level
            internalFormat, // internal format
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize, // width
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize, // height
            0, // border
            format, // format
            type, // type
            null // pixels
            );
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
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
        if (tObj && tObj.triangles.length > 0) {
            this.toTextureProgram = _glCompiler__WEBPACK_IMPORTED_MODULE_11__["glCompiler"].compile(gl, _shaders_PathTracerToTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]
                .replace('<VERSION>', '#version 300 es')
                .replace('NOTHING', 'USE_TRIANGLES'), _shaders_PathTracerToTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"]
                .replace('<VERSION>', '#version 300 es')
                .replace('NOTHING', 'USE_TRIANGLES')
                .replace('<NUM_VERTICES>', tObj.vertices.length.toString())
                .replace('<NUM_VOLUMES>', tObj.volumes.length.toString())
                .replace('<NUM_TRIANGLES>', tObj.triangles.length.toString()));
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
        var vData = new Float32Array(tObj.vertices.length * 4);
        for (var i = 0; i < tObj.vertices.length; i++) {
            var v = tObj.vertices[i];
            vData[4 * i + 0] = v.x;
            vData[4 * i + 1] = v.y;
            vData[4 * i + 2] = v.z;
            vData[4 * i + 3] = 0;
        }
        vBlock.upload(vData);
        blockBinding = 3;
        var tBlock = new _glUniformBlock__WEBPACK_IMPORTED_MODULE_13__["glUniformBlock"](gl, this.toTextureProgram, 'MyTrianglesBlock', blockBinding);
        // put the data into a Float32Array for uploading
        var tData = new Int32Array(tObj.triangles.length * 4);
        var index = 0;
        for (var v = 0; v < tObj.volumes.length; v++) {
            var vol = tObj.volumes[v];
            for (var i = 0; i < vol.triangles.length; i++) {
                var t = vol.triangles[i];
                tData[index++] = t.iV0;
                tData[index++] = t.iV1;
                tData[index++] = t.iV2;
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
        var vec = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec4"]([x, y, 0, 1]);
        return matrix.multV(vec).divideByW().subtract(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uEye);
    };
    PathTracerRenderer.prototype.updateTexture = function (modelviewProjection) {
        var gl = this.gl;
        // implement aliasing by random sampling within a pixel
        var x = (Math.random() * 2 - 1) / _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize;
        var y = (Math.random() * 2 - 1) / _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize;
        var z = 0;
        var v = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([x, y, z]);
        var jitter = _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"].fromTranslation(v);
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
        gl.bindTexture(gl.TEXTURE_2D, this.textures[0]);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.textures[1], 0);
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
        gl.bindTexture(gl.TEXTURE_2D, this.textures[0]);
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
/* harmony import */ var _PlanesRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlanesRenderer */ "./src/PlanesRenderer.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThresholdCtrl */ "./src/ThresholdCtrl.ts");
/* harmony import */ var _PointerEventHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PointerEventHandler */ "./src/PointerEventHandler.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ModelsDropDownMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModelsDropDownMenu */ "./src/ModelsDropDownMenu.ts");
/* harmony import */ var _ModelLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModelLoader */ "./src/ModelLoader.ts");
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
        this.loader = new _ModelLoader__WEBPACK_IMPORTED_MODULE_11__["ModelLoader"]();
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
        this.renderer = new _PlanesRenderer__WEBPACK_IMPORTED_MODULE_3__["PlanesRenderer"](this.gl);
        this.renderer.whiteColor = WHITE_COLOR;
        this.renderer.blackColor = BLACK_COLOR;
        this.handler = new _PointerEventHandler__WEBPACK_IMPORTED_MODULE_8__["PointerEventHandler"](canvas);
        this.handler.onDrag = function (pos, delta) { return _this.onDrag(pos, delta); };
        this.handler.onClick = function (pos) { return _this.onClick(pos); };
        this.handler.onScale = function (scale, change) { return _this.onScale(scale, change); };
        this.handler.onRotate = function (angle, delta) { return _this.onRotate(angle, delta); };
        this.handler.onTranslate = function (delta) { return _this.onTranslate(delta); };
        document.onkeypress = function (event) {
            switch (event.key) {
                case 'o':
                    _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_6__["NormalType"].Smooth);
                    break;
                case 'p':
                    _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_6__["NormalType"].Flat);
                    break;
                case 's':
                    _this.save();
                    break;
                case 't':
                    _this.test();
                    break;
                case 'd':
                    _this.renderer.showShadowMap = !_this.renderer.showShadowMap;
                    _this.dirty = true;
                    break;
            }
        };
        Object(_ModelsDropDownMenu__WEBPACK_IMPORTED_MODULE_10__["createModelsDropDownMenu"])(parent, function (file) { return _this.loadModel(file); });
    };
    PlanesApp.prototype.createCtrlsElements = function (parent) {
        var _this = this;
        this.thresholdCtrl = new _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_7__["ThresholdCtrl"](parent, this, function (value) {
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
            var matY = _glMat__WEBPACK_IMPORTED_MODULE_4__["glMat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(delta.x));
            var matX = _glMat__WEBPACK_IMPORTED_MODULE_4__["glMat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(delta.y));
            var vec = new _glVec__WEBPACK_IMPORTED_MODULE_5__["glVec4"]([
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
        var size = this.gl.canvas.width;
        // TODO get the size of the area from the renderer
        if (pos.x < size / 5 && pos.y < size / 5) {
            this.toggleMode();
            return true;
        }
        return this.renderer.click(pos.x / size, 1 - (pos.y / size));
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
        this.renderer.translateView(new _glVec__WEBPACK_IMPORTED_MODULE_5__["glVec2"]([
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
    PlanesApp.prototype.save = function () {
        var tObj = this.renderer.tObj;
        var name = tObj.name.split('.')[0] + '.blob';
        Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(tObj.toBlob(), name);
    };
    PlanesApp.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            var blob, tObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blob = this.renderer.tObj.toBlob();
                        return [4 /*yield*/, _TriangleObj__WEBPACK_IMPORTED_MODULE_6__["TriangleObj"].fromBlob(blob)];
                    case 1:
                        tObj = _a.sent();
                        console.log(tObj.name);
                        return [2 /*return*/];
                }
            });
        });
    };
    return PlanesApp;
}());



/***/ }),

/***/ "./src/PlanesRenderer.ts":
/*!*******************************!*\
  !*** ./src/PlanesRenderer.ts ***!
  \*******************************/
/*! exports provided: BallImageData, DEFAULT_THRESHOLD1, DEFAULT_THRESHOLD2, PlanesRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallImageData", function() { return BallImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THRESHOLD1", function() { return DEFAULT_THRESHOLD1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THRESHOLD2", function() { return DEFAULT_THRESHOLD2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesRenderer", function() { return PlanesRenderer; });
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _shaders_PlanesVertex_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/PlanesVertex.glsl */ "./src/shaders/PlanesVertex.glsl");
/* harmony import */ var _shaders_PlanesFragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/PlanesFragment.glsl */ "./src/shaders/PlanesFragment.glsl");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _TriangleSphere__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TriangleSphere */ "./src/TriangleSphere.ts");
/* harmony import */ var _glUniform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glUniform */ "./src/glUniform.ts");
/* harmony import */ var _glCompiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glCompiler */ "./src/glCompiler.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _glObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./glObject */ "./src/glObject.ts");
/* harmony import */ var _TriangleArrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TriangleArrow */ "./src/TriangleArrow.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _TextureRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextureRenderer */ "./src/TextureRenderer.ts");
/* harmony import */ var _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glTextureFrameBuffer */ "./src/glTextureFrameBuffer.ts");
/* harmony import */ var _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ThresholdCtrl */ "./src/ThresholdCtrl.ts");
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _glClipSpace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./glClipSpace */ "./src/glClipSpace.ts");

















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
/**
 * Class that renders triangles and a light source
 */
var PlanesRenderer = /** @class */ (function () {
    function PlanesRenderer(glCtx) {
        this.gl = null;
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.lightView = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.projection = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.uThreshold1 = DEFAULT_THRESHOLD1;
        this.uThreshold2 = DEFAULT_THRESHOLD2;
        this.uHighlight = 1.0;
        this.uShadow = 0.2;
        // size of the smaller view
        this.miniSize = 0.2;
        this.uUseThresholds = false;
        this.uLightDirection = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"](INITIAL_LIGHT_DIRECTION);
        this.ballColor = new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1, 1, 1]);
        this.yellow = new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1.0, 0.9, 0.7]);
        this.whiteColor = new _htmlColor__WEBPACK_IMPORTED_MODULE_15__["htmlColor"]([255, 255, 255]);
        this.blackColor = new _htmlColor__WEBPACK_IMPORTED_MODULE_15__["htmlColor"]([0, 0, 0]);
        this.zoomFactor = 1;
        this.translation = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([0, 0]);
        this.showShadowMap = false;
        this.showMiniView = true;
        this.gl = glCtx;
        var gl = this.gl;
        this.computeColors();
        gl.enable(gl.DEPTH_TEST);
        this.program = _glCompiler__WEBPACK_IMPORTED_MODULE_7__["glCompiler"].compile(gl, _shaders_PlanesVertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_PlanesFragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var tBall = new _TriangleSphere__WEBPACK_IMPORTED_MODULE_5__["TriangleSphere"](100, BALL_RADIUS, new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]));
        tBall.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_8__["NormalType"].Smooth);
        this.ball = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](gl, tBall, this.program);
        var tArrow = new _TriangleArrow__WEBPACK_IMPORTED_MODULE_10__["TriangleArrow"]();
        this.arrow = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](gl, tArrow, this.program);
        this.resize();
    }
    PlanesRenderer.prototype.getClipSpace = function () {
        var gl = this.gl;
        var ar = gl.canvas.width / gl.canvas.height;
        if (ar > 1) {
            return new _glClipSpace__WEBPACK_IMPORTED_MODULE_16__["glClipSpace"](new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-ar, -1, -100]), new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([ar, 1, 100]));
        }
        else {
            return new _glClipSpace__WEBPACK_IMPORTED_MODULE_16__["glClipSpace"](new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-1, -1 / ar, -100]), new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1, 1 / ar, 100]));
        }
    };
    PlanesRenderer.prototype.resize = function () {
        var clipSpace = this.getClipSpace();
        this.projection = _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"].makeOrtho(clipSpace.left, clipSpace.right, clipSpace.bottom, clipSpace.top, clipSpace.near, clipSpace.far);
        if (this.shadowFrameBuffer) {
            this.shadowFrameBuffer.delete();
            this.shadowFrameBuffer = null;
        }
    };
    //
    // The functions below change our view of the model
    //
    PlanesRenderer.prototype.zoom = function (zoom) {
        this.zoomFactor *= zoom;
    };
    PlanesRenderer.prototype.translateView = function (delta) {
        this.translation.x += delta.x;
        this.translation.y += delta.y;
    };
    Object.defineProperty(PlanesRenderer.prototype, "highlight", {
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
    Object.defineProperty(PlanesRenderer.prototype, "lightLight", {
        get: function () {
            return this.uLightLight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "midLight", {
        get: function () {
            return this.uMidLight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "darkLight", {
        get: function () {
            return this.uDarkLight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "shadow", {
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
    Object.defineProperty(PlanesRenderer.prototype, "threshold1", {
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
    Object.defineProperty(PlanesRenderer.prototype, "threshold2", {
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
    Object.defineProperty(PlanesRenderer.prototype, "tObj", {
        get: function () {
            return this.obj.tObj;
        },
        enumerable: true,
        configurable: true
    });
    PlanesRenderer.prototype.colorAt = function (deg) {
        deg = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(deg, 0, 90);
        return Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["mix"])(this.uShadow, this.uHighlight - HIGHLIGHT_DIFF, Math.cos(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(deg)));
    };
    PlanesRenderer.prototype.thresholdAt = function (color) {
        var acos = (color - this.uShadow) / (this.uHighlight - HIGHLIGHT_DIFF - this.uShadow);
        return Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toDeg"])(Math.acos(acos));
    };
    PlanesRenderer.prototype.computeColors = function () {
        this.uLightLight = this.colorAt(0.5 * this.threshold1);
        this.uMidLight = this.colorAt(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["mix"])(this.threshold1, this.threshold2, 0.5));
        this.uDarkLight = this.colorAt((this.threshold2 + 90) / 2);
    };
    PlanesRenderer.prototype.setModel = function (tObj) {
        if (this.obj) {
            this.obj.delete();
        }
        this.obj = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](this.gl, tObj, this.program);
        var center = tObj.center;
        this.obj.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-center.x, -center.y, -center.z]));
        this.obj.scale(2.0 / Math.sqrt(tObj.width * tObj.width + tObj.height * tObj.height + tObj.depth * tObj.depth));
        // reset the view and the light
        this.view = _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"].identity();
        this.zoomFactor = 1;
        this.translation = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([0, 0]);
        this.uLightDirection = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1.0, -1.0, 1.5]);
    };
    PlanesRenderer.prototype.render = function () {
        var gl = this.gl;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        this.setStdUniforms();
        this.renderToShadowMap();
        this.renderToScreen();
    };
    PlanesRenderer.prototype.setStdUniforms = function () {
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_6__["glUniform"](this.gl, this.program);
        uni.set('view', this.view.transpose());
        uni.set('lightView', this.lightView.transpose());
        uni.set('projection', this.projection.transpose());
        uni.set('uLightDirection', this.uLightDirection);
        uni.seti('uUseShadows', 1);
        uni.set('uUseThresholds', this.uUseThresholds ? 1 : 0, true);
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
    PlanesRenderer.prototype.getBallImage = function () {
        var gl = this.gl;
        if (!this.textureFrameBuffer) {
            this.textureFrameBuffer = new _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["glTextureFrameBuffer"](gl, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["FrameBufferStyle"].Depth);
        }
        gl.viewport(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"]);
        gl.bindTexture(gl.TEXTURE_2D, this.textureFrameBuffer.colorTexture);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureFrameBuffer.frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.textureFrameBuffer.colorTexture, 0);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.useProgram(this.program);
        var style = getComputedStyle(gl.canvas);
        var color = _htmlColor__WEBPACK_IMPORTED_MODULE_15__["htmlColor"].fromCss(style.backgroundColor).toGlColor();
        gl.clearColor(color.r, color.g, color.b, 1);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
        var uni = this.setStdUniforms();
        // always render with bands
        uni.seti('uUseThresholds', 1);
        // shoot the light straight down
        uni.set('uLightDirection', new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, -1, 0]));
        // don't cast shadows
        uni.seti('uUseShadows', 0);
        uni.set('view', new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]());
        // move the ball to the lower left and partially offscreen
        var scale = 1.75;
        var offset = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-0.6, -0.6, 0]);
        this.ball.clearTransforms();
        this.ball.scale(scale);
        this.ball.translate(offset);
        // render the ball
        this.ball.draw();
        this.ball.clearTransforms();
        // draw the arrow
        uni.set('uLightDirection', new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1, -0.5, 0.5]));
        uni.set('uUseThresholds', 0, true);
        // first reset things so that we're looking down the z-axis
        this.arrow.clearTransforms();
        this.arrow.scale(1.25);
        this.arrow.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([offset.x, offset.y + scale * BALL_RADIUS + 0.1, 0.0]));
        uni.set('uWhiteColor', new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1.0, 1.0, 0.5]));
        uni.set('uBlackColor', _htmlColor__WEBPACK_IMPORTED_MODULE_15__["htmlColor"].black.toGlColor());
        uni.set('uAmbientIntensity', 0.4);
        this.arrow.draw();
        var pixels = new Uint8Array(_ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"] * _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"] * 4);
        gl.readPixels(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        // create the data structure we'll return
        var data = new BallImageData();
        data.image = new ImageData(new Uint8ClampedArray(pixels), _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"]);
        // convert from [-1,1] drawing space to [0,1]
        data.ballRadius = scale * BALL_RADIUS;
        data.ballCenter = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([offset.x, offset.y]);
        data.ballRadius /= 2;
        data.ballCenter.x = 0.5 * (data.ballCenter.x + 1);
        data.ballCenter.y = 0.5 * (data.ballCenter.y + 1);
        return data;
    };
    PlanesRenderer.prototype.renderToShadowMap = function () {
        var gl = this.gl;
        if (!this.shadowFrameBuffer) {
            this.shadowFrameBuffer = new _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["glTextureFrameBuffer"](gl, gl.canvas.width, gl.canvas.height, _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["FrameBufferStyle"].Depth);
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.shadowFrameBuffer.frameBuffer);
        gl.useProgram(this.program);
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
        var center = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]);
        var up = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 1, 0]);
        var mat = _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"].makeLookAt(this.uLightDirection, center, up);
        mat.set(0, 3, 0);
        mat.set(1, 3, 0);
        mat.set(2, 3, 0);
        this.lightView = mat;
        var uni = this.setStdUniforms();
        // change the view matrix so that our view is from the light
        uni.set('view', this.lightView.transpose());
        uni.set('projection', _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"].identity());
        // don't try to use the shadow texture while we're creating it
        uni.seti('uUseShadows', 0);
        this.obj.draw();
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    PlanesRenderer.prototype.renderToScreen = function () {
        var gl = this.gl;
        // display the depth buffer for testing purposes
        if (this.showShadowMap) {
            var tr = new _TextureRenderer__WEBPACK_IMPORTED_MODULE_12__["TextureRenderer"](gl);
            tr.render(this.shadowFrameBuffer.depthTexture);
        }
        else {
            gl.useProgram(this.program);
            gl.bindTexture(gl.TEXTURE_2D, this.shadowFrameBuffer.depthTexture);
            gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
            // reset the view matrix
            this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
            this.view.scale(this.zoomFactor);
            this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([this.translation.x, this.translation.y, 0]));
            // draw the main object
            var uni = this.setStdUniforms();
            this.obj.draw();
            if (this.showMiniView) {
                // draw the object in the upper right at a reduced size and opposite banding
                gl.clear(gl.DEPTH_BUFFER_BIT);
                this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
                this.view.scale(this.miniSize);
                var clipSpace = this.getClipSpace();
                this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([clipSpace.max.x - this.miniSize, clipSpace.max.x - this.miniSize, 0]));
                uni.set('view', this.view.transpose());
                uni.set('uUseThresholds', this.uUseThresholds ? 0 : 1, true);
                this.obj.draw();
            }
            // draw the ball
            this.drawBall();
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
    };
    PlanesRenderer.prototype.drawBall = function () {
        var uni = this.setStdUniforms();
        // stop using the shadowmap
        uni.seti('uUseShadows', 0);
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.view.scale(this.miniSize);
        var clipSpace = this.getClipSpace();
        this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([clipSpace.min.x + this.miniSize, clipSpace.max.y - this.miniSize, 0]));
        uni.set('view', this.view.transpose());
        uni.set('uUseThresholds', this.uUseThresholds ? 1 : 0, true);
        uni.set('uWhiteColor', this.ballColor);
        uni.set('uBlackColor', _htmlColor__WEBPACK_IMPORTED_MODULE_15__["htmlColor"].black.toGlColor());
        this.ball.draw();
        uni.set('uLightDirection', new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1, -0.5, 0.5]));
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
        this.arrow.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0.0, 0.55, 0.0]));
        this.arrow.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(90));
        // rotate to match the light source
        this.arrow.rotY(-elevationAngle);
        this.arrow.rotZ(-rotationAngle);
        uni.set('uWhiteColor', this.yellow);
        uni.set('uBlackColor', _htmlColor__WEBPACK_IMPORTED_MODULE_15__["htmlColor"].black.toGlColor());
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
    PlanesRenderer.prototype.click = function (x, y) {
        // TODO adjust for aspect ratio
        if (this.showMiniView) {
            if (x > (1 - this.miniSize) && y > (1 - this.miniSize)) {
                this.uUseThresholds = !this.uUseThresholds;
                this.render();
                return true;
            }
        }
        return false;
    };
    PlanesRenderer.prototype.optimize = function (normalType) {
        this.obj.optimize(normalType);
        this.render();
    };
    return PlanesRenderer;
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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");

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
                _this.ourOnTranslate(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"](delta));
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
                _this.lastTouchCenter = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([-1, -1]);
            }
        });
        element.onmousedown = function (event) {
            var pos = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([event.layerX, event.layerY]);
            _this.ourOnDown(pos);
            // disable selection because dragging is used for rotating the camera and moving objects
            return false;
        };
        element.onmousemove = function (event) {
            var pos = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([event.layerX, event.layerY]);
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
            var pos = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([event.layerX, event.layerY]);
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
        return new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([touch.clientX - rect.x, touch.clientY - rect.y]);
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
        return new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([(x1 + x2) / 2, (y1 + y2) / 2]);
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
            var delta = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([pos.x - this.lastPos.x, pos.y - this.lastPos.y]);
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
                return new _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]([0, 0, 0]);
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
    TextureRenderer.prototype.render = function (texture) {
        var gl = this.gl;
        /*
        // size of the actual canvas. The texture we create is drawn to this item
        let size = document.body.clientWidth;
  
        if (isMobile === false) {
           // not sure why, but this basically becomes full width on my phone
           size = 512;
        }
  
        gl.canvas.width = size;
        gl.canvas.height = size;
        */
        //gl.canvas.width = 128;
        //gl.canvas.height = 128;
        var size = 512;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
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
        this.mouseOffset = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]();
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
            this.mouseOffset = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([this.p1.x - pos.x, this.p1.y - pos.y]);
        }
        else if (d2 < HIT_RADIUS && d2 <= d1) {
            this.hit = 2;
            this.mouseOffset = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([this.p2.x - pos.x, this.p2.y - pos.y]);
        }
        else {
            this.hit = 0;
        }
    };
    ThresholdCtrl.prototype.onDrag = function (pos, delta) {
        if (this.hit > 0) {
            var hitPt = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([pos.x + this.mouseOffset.x, pos.y + this.mouseOffset.y]);
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
        this.ballCenter = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([
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
        return new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([center.x + ox, center.y - oy]);
    };
    return ThresholdCtrl;
}());



/***/ }),

/***/ "./src/TriangleArrow.ts":
/*!******************************!*\
  !*** ./src/TriangleArrow.ts ***!
  \******************************/
/*! exports provided: TriangleArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleArrow", function() { return TriangleArrow; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/IndexedTriangle.ts");
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
 * Creates a 3D arrow using triangles
 */
var TriangleArrow = /** @class */ (function (_super) {
    __extends(TriangleArrow, _super);
    function TriangleArrow() {
        var _this = _super.call(this, 'Arrow') || this;
        var NUM_STEPS = 30;
        var TIP = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]);
        var TOTAL_LENGTH = 0.4;
        var ARROW_RADIUS = 0.15;
        var ARROW_LENGTH = 1.5 * ARROW_RADIUS;
        var SHAFT_RADIUS = 0.5 * ARROW_RADIUS;
        // build the arrow head
        _this.vertices.push(TIP);
        _this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, ARROW_LENGTH, 0]));
        for (var i = 0; i < NUM_STEPS; i++) {
            var x = ARROW_RADIUS * Math.sin(i / (NUM_STEPS - 1) * 2 * Math.PI);
            var y = ARROW_LENGTH;
            var z = ARROW_RADIUS * Math.cos(i / (NUM_STEPS - 1) * 2 * Math.PI);
            _this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([x, y, z]));
        }
        var iTip = 0;
        var iBase = 1;
        for (var i = 0; i < NUM_STEPS; i++) {
            var i1 = 2 + i;
            var i2 = (i == NUM_STEPS - 1) ? 0 : i1 + 1;
            _this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](_this.vertices, iTip, i2, i1, _this.normals));
            _this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](_this.vertices, iBase, i1, i2, _this.normals));
        }
        // build the arrow shaft
        _this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, TOTAL_LENGTH, 0]));
        var iEnd = _this.vertices.length - 1;
        for (var i = 0; i < NUM_STEPS; i++) {
            var x = SHAFT_RADIUS * Math.sin(i / (NUM_STEPS - 1) * 2 * Math.PI);
            var y = ARROW_LENGTH;
            var z = SHAFT_RADIUS * Math.cos(i / (NUM_STEPS - 1) * 2 * Math.PI);
            _this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([x, y, z]));
        }
        for (var i = 0; i < NUM_STEPS; i++) {
            var x = SHAFT_RADIUS * Math.sin(i / (NUM_STEPS - 1) * 2 * Math.PI);
            var y = TOTAL_LENGTH;
            var z = SHAFT_RADIUS * Math.cos(i / (NUM_STEPS - 1) * 2 * Math.PI);
            _this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([x, y, z]));
        }
        var iStart = iEnd + 1;
        for (var i = 0; i < NUM_STEPS; i++) {
            var i1 = iStart + i;
            var i2 = (i == NUM_STEPS - 1) ? iStart : i1 + 1;
            var i3 = i1 + NUM_STEPS;
            var i4 = i2 + NUM_STEPS;
            _this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](_this.vertices, i1, i2, i3, _this.normals));
            _this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](_this.vertices, i4, i3, i2, _this.normals));
            _this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](_this.vertices, i3, i4, iEnd, _this.normals));
        }
        return _this;
    }
    return TriangleArrow;
}(_TriangleObj__WEBPACK_IMPORTED_MODULE_1__["TriangleObj"]));



/***/ }),

/***/ "./src/TriangleCube.ts":
/*!*****************************!*\
  !*** ./src/TriangleCube.ts ***!
  \*****************************/
/*! exports provided: TriangleCube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleCube", function() { return TriangleCube; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/IndexedTriangle.ts");
/* harmony import */ var _Volume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Volume */ "./src/Volume.ts");
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




var TriangleCube = /** @class */ (function (_super) {
    __extends(TriangleCube, _super);
    function TriangleCube(size, center) {
        var _this = _super.call(this, 'Cube') || this;
        _this.createTriangles(size, center);
        _this.volumes.push(new _Volume__WEBPACK_IMPORTED_MODULE_3__["Volume"]());
        _this.volumes[0].boxMin = _this.boxMin.clone();
        _this.volumes[0].boxMax = _this.boxMax.clone();
        _this.volumes[0].triangles = _this.triangles;
        return _this;
    }
    TriangleCube.prototype.createFace = function (i1, i2, i3, i4) {
        this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i1, i2, i3, this.normals));
        this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i2, i4, i3, this.normals));
    };
    TriangleCube.prototype.createTriangles = function (size, center) {
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x - size / 2, center.y - size / 2, center.z - size / 2]));
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x - size / 2, center.y - size / 2, center.z + size / 2]));
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x - size / 2, center.y + size / 2, center.z - size / 2]));
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x - size / 2, center.y + size / 2, center.z + size / 2]));
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x + size / 2, center.y - size / 2, center.z - size / 2]));
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x + size / 2, center.y - size / 2, center.z + size / 2]));
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x + size / 2, center.y + size / 2, center.z - size / 2]));
        this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x + size / 2, center.y + size / 2, center.z + size / 2]));
        this.createFace(0, 1, 2, 3);
        this.createFace(4, 6, 5, 7);
        this.createFace(0, 4, 1, 5);
        this.createFace(2, 3, 6, 7);
        this.createFace(0, 2, 4, 6);
        this.createFace(1, 5, 3, 7);
    };
    return TriangleCube;
}(_TriangleObj__WEBPACK_IMPORTED_MODULE_1__["TriangleObj"]));



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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/IndexedTriangle.ts");
/* harmony import */ var _Volume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Volume */ "./src/Volume.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _BlobFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlobFile */ "./src/BlobFile.ts");
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
            var n = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]();
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
        this.triangles = [];
        this.boxMin = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]);
        this.boxMax = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]);
        this.volumes = [];
        this.name = name;
    }
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
            return new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([
                (this.boxMin.x + this.boxMax.x) / 2,
                (this.boxMin.y + this.boxMax.y) / 2,
                (this.boxMin.z + this.boxMax.z) / 2,
            ]);
        },
        enumerable: true,
        configurable: true
    });
    TriangleObj.prototype.push = function (tri) {
        this.triangles.push(tri);
        this.boxMin.x = Math.min(this.boxMin.x, tri.minX);
        this.boxMin.y = Math.min(this.boxMin.y, tri.minY);
        this.boxMin.z = Math.min(this.boxMin.z, tri.minZ);
        this.boxMax.x = Math.max(this.boxMax.x, tri.maxX);
        this.boxMax.y = Math.max(this.boxMax.y, tri.maxY);
        this.boxMax.z = Math.max(this.boxMax.z, tri.maxZ);
    };
    /**
     * Scales the object to the specified size and centers it about (0,0,0)
     *
     * @param size The max size for the width, height, and depth
     */
    TriangleObj.prototype.autoCenter = function (size) {
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        var trans = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([
            -(this.boxMax.x + this.boxMin.x) / 2,
            -(this.boxMax.y + this.boxMin.y) / 2,
            -(this.boxMax.z + this.boxMin.z) / 2,
        ]);
        var scale = size / Math.max(this.width, this.height, this.depth);
        for (var i = 0; i < this.vertices.length; i++) {
            var v = this.vertices[i];
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
        for (var i = 0; i < this.vertices.length; i++) {
            var v = this.vertices[i];
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
        if (this.triangles.length < 40) {
            numSteps = 1;
        }
        else if (this.triangles.length < 1500) {
            numSteps = 2;
        }
        else {
            numSteps = 3;
        }
        this.volumes = [];
        for (var i = 0; i < Math.pow(numSteps, 3); i++) {
            this.volumes.push(new _Volume__WEBPACK_IMPORTED_MODULE_2__["Volume"]());
        }
        for (var i = 0; i < this.triangles.length; i++) {
            var t = this.triangles[i];
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
    TriangleObj.prototype.computeNormals = function (type) {
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        var normals = [];
        var multiNormVertices = [];
        if (type === NormalType.Smooth) {
            for (var i = 0; i < this.vertices.length; i++) {
                multiNormVertices.push(new MultiNormVertex());
            }
            // store the normals with each vertex - we'll later average these
            for (var i = 0; i < this.triangles.length; i++) {
                var tri = this.triangles[i];
                var n = tri.computeNormal();
                multiNormVertices[tri.iV0].push(n);
                multiNormVertices[tri.iV1].push(n);
                multiNormVertices[tri.iV2].push(n);
            }
            // create a new normals array
            for (var i = 0; i < multiNormVertices.length; i++) {
                normals.push(multiNormVertices[i].normal);
            }
            // update the triangles
            for (var i = 0; i < this.triangles.length; i++) {
                var tri = this.triangles[i];
                tri.normals = normals;
                tri.iN0 = tri.iV0;
                tri.iN1 = tri.iV1;
                tri.iN2 = tri.iV2;
            }
        }
        else {
            for (var i = 0; i < this.triangles.length; i++) {
                var tri = this.triangles[i];
                normals.push(tri.computeNormal());
                var index = normals.length - 1;
                tri.normals = normals;
                tri.iN0 = index;
                tri.iN1 = index;
                tri.iN2 = index;
            }
        }
        this.normals = normals;
        p.log('computeNormals');
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
        str += '# Normals: ' + this.normals.length + '\n';
        str += '# Triangles: ' + this.triangles.length + '\n';
        str += '\n';
        for (var i = 0; i < this.vertices.length; i++) {
            var v = this.vertices[i];
            str += 'v ' + v.x.toPrecision(digits) + ' ' + v.y.toPrecision(digits) + ' ' + v.z.toPrecision(digits) + '\n';
        }
        for (var i = 0; i < this.normals.length; i++) {
            var n = this.normals[i];
            str += 'vn ' + n.x.toPrecision(digits) + ' ' + n.y.toPrecision(digits) + ' ' + n.z.toPrecision(digits) + '\n';
        }
        for (var i = 0; i < this.triangles.length; i++) {
            var t = this.triangles[i];
            str += 'f ' +
                (t.iV0 + 1) + '//' + (t.iN0 + 1) + ' ' +
                (t.iV1 + 1) + '//' + (t.iN1 + 1) + ' ' +
                (t.iV2 + 1) + '//' + (t.iN2 + 1) + '\n';
        }
        return str;
    };
    TriangleObj.prototype.optimize = function (normalType) {
        var msg = 'Optimized .OBJ content copied to clipboard\n\n';
        msg += 'Num Triangles: ' + this.triangles.length + '\n';
        var vertexToIndexMap = new Map();
        var indexToIndexMap = new Map();
        // first generate a unique set of vertices
        var uniqueVertices = [];
        for (var i = 0; i < this.vertices.length; i++) {
            var oldVertex = this.vertices[i];
            var key = this.vertices[i].toString(4, ' ');
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
        var oldSize = this.vertices.length;
        var newSize = uniqueVertices.length;
        msg += 'Num Vertices: ' + oldSize + ' to ' + newSize + ', ' + (100 * newSize / oldSize).toFixed() + ' %\n';
        // reset all the vertices
        this.vertices = uniqueVertices;
        for (var i = 0; i < this.triangles.length; i++) {
            var tri = this.triangles[i];
            tri.vertices = uniqueVertices;
            tri.iV0 = indexToIndexMap.get(tri.iV0 + 1) - 1;
            tri.iV1 = indexToIndexMap.get(tri.iV1 + 1) - 1;
            tri.iV2 = indexToIndexMap.get(tri.iV2 + 1) - 1;
        }
        oldSize = this.normals.length;
        this.computeNormals(normalType);
        newSize = this.normals.length;
        msg += 'Num Normals: ' + oldSize + ' to ' + newSize + ', ' + (100 * newSize / oldSize).toFixed() + ' %';
        var str = this.toObjString(6);
        navigator.clipboard.writeText(str).then(function () { alert(msg); });
    };
    TriangleObj.prototype.pushVec = function (array, vec) {
        array.push(vec.x);
        array.push(vec.y);
        array.push(vec.z);
    };
    TriangleObj.prototype.combine = function (tObj) {
        var startVIndex = this.vertices.length;
        var startNIndex = this.normals.length;
        for (var i = 0; i < tObj.vertices.length; i++) {
            this.vertices.push(tObj.vertices[i].clone());
        }
        for (var i = 0; i < tObj.normals.length; i++) {
            this.normals.push(tObj.normals[i].clone());
        }
        for (var i = 0; i < tObj.triangles.length; i++) {
            var tri = tObj.triangles[i];
            this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, tri.iV0 + startVIndex, tri.iV1 + startVIndex, tri.iV2 + startVIndex, this.normals, tri.iN0 + startNIndex, tri.iN1 + startNIndex, tri.iN2 + startNIndex));
        }
    };
    TriangleObj.prototype.toData = function () {
        var data = new TriangleObjData;
        data.name = this.name;
        // convert the triangles into arrays that can be uploaded
        var vertices = [];
        for (var i = 0; i < this.vertices.length; i++) {
            this.pushVec(vertices, this.vertices[i]);
        }
        var normals = [];
        for (var i = 0; i < this.normals.length; i++) {
            this.pushVec(normals, this.normals[i]);
        }
        var vIndices = [];
        var nIndices = [];
        for (var i = 0; i < this.triangles.length; i++) {
            var tri = this.triangles[i];
            vIndices.push(tri.iV0);
            vIndices.push(tri.iV1);
            vIndices.push(tri.iV2);
            nIndices.push(tri.iN0);
            nIndices.push(tri.iN1);
            nIndices.push(tri.iN2);
        }
        data.vertices = new Float32Array(vertices);
        data.normals = new Float32Array(normals);
        data.vIndices = new Int32Array(vIndices);
        data.nIndices = new Int32Array(nIndices);
        data.boxMin = this.boxMin.clone();
        data.boxMax = this.boxMax.clone();
        return data;
    };
    TriangleObj.data2vertex = function (data, index) {
        return new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([
            data.vertices[3 * index + 0],
            data.vertices[3 * index + 1],
            data.vertices[3 * index + 2]
        ]);
    };
    TriangleObj.data2normal = function (data, index) {
        return new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([
            data.normals[3 * index + 0],
            data.normals[3 * index + 1],
            data.normals[3 * index + 2]
        ]);
    };
    TriangleObj.fromData = function (data) {
        var tObj = new TriangleObj();
        tObj.name = data.name;
        // restore vertices
        for (var i = 0; i < data.vertices.length / 3; i++) {
            tObj.vertices.push(TriangleObj.data2vertex(data, i));
        }
        // restore normals
        for (var i = 0; i < data.normals.length / 3; i++) {
            tObj.normals.push(TriangleObj.data2normal(data, i));
        }
        // restore triangles
        for (var i = 0; i < data.vIndices.length / 3; i++) {
            var iV0 = data.vIndices[3 * i + 0];
            var iV1 = data.vIndices[3 * i + 1];
            var iV2 = data.vIndices[3 * i + 2];
            var iN0 = data.nIndices[3 * i + 0];
            var iN1 = data.nIndices[3 * i + 1];
            var iN2 = data.nIndices[3 * i + 2];
            var t = new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](tObj.vertices, iV0, iV1, iV2, tObj.normals, iN0, iN1, iN2);
            tObj.triangles.push(t);
        }
        tObj.boxMin = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"](data.boxMin.values);
        tObj.boxMax = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"](data.boxMax.values);
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
        parts.push(data.vIndices);
        parts.push(data.nIndices);
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
            var data, bFile, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        data = new TriangleObjData();
                        return [4 /*yield*/, _BlobFile__WEBPACK_IMPORTED_MODULE_5__["BlobFile"].extract(blob)];
                    case 1:
                        bFile = _u.sent();
                        data.name = bFile.info.Name;
                        _a = data;
                        _b = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[0].arrayBuffer()];
                    case 2:
                        _a.vertices = new (_b.apply(Float32Array, [void 0, _u.sent()]))();
                        _c = data;
                        _d = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[1].arrayBuffer()];
                    case 3:
                        _c.normals = new (_d.apply(Float32Array, [void 0, _u.sent()]))();
                        _e = data;
                        _f = Int32Array.bind;
                        return [4 /*yield*/, bFile.parts[2].arrayBuffer()];
                    case 4:
                        _e.vIndices = new (_f.apply(Int32Array, [void 0, _u.sent()]))();
                        _g = data;
                        _h = Int32Array.bind;
                        return [4 /*yield*/, bFile.parts[3].arrayBuffer()];
                    case 5:
                        _g.nIndices = new (_h.apply(Int32Array, [void 0, _u.sent()]))();
                        _j = data;
                        _k = _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"].bind;
                        _m = (_l = Array).from;
                        _o = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[4].arrayBuffer()];
                    case 6:
                        _j.boxMin = new (_k.apply(_glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"], [void 0, _m.apply(_l, [new (_o.apply(Float32Array, [void 0, _u.sent()]))()])]))();
                        _p = data;
                        _q = _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"].bind;
                        _s = (_r = Array).from;
                        _t = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[5].arrayBuffer()];
                    case 7:
                        _p.boxMax = new (_q.apply(_glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"], [void 0, _s.apply(_r, [new (_t.apply(Float32Array, [void 0, _u.sent()]))()])]))();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return TriangleObj;
}());



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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/IndexedTriangle.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
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
            ret.iN.push(vals.length === 3 ? parseInt(vals[2]) - 1 : -1);
        }
        return ret;
    };
    TriangleObjFile.prototype.parse = function (src, updateStatus) {
        updateStatus('Processing');
        var t = Date.now();
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        var lines = src.split('\n');
        p.log('split');
        for (var i = 0; i < lines.length; i++) {
            // report progress every 50 ms
            if (Date.now() - t > 50) {
                updateStatus('Processing: ' + (100 * i / lines.length).toFixed() + '%');
                t = Date.now();
            }
            var line = lines[i];
            if (line.startsWith('v ')) {
                var tokens = line.match(/\S+/g);
                var vec = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3])]);
                this.vertices.push(vec);
            }
            else if (line.startsWith('vn ')) {
                var tokens = line.match(/\S+/g);
                var vec = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3])]);
                this.normals.push(vec);
            }
            else if (line.startsWith('f ')) {
                var ret = this.parseFace(line);
                if (ret.iN.length === 4) {
                    this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, ret.iV[0], ret.iV[1], ret.iV[2], this.normals, ret.iN[0], ret.iN[1], ret.iN[2]));
                    this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, ret.iV[0], ret.iV[2], ret.iV[3], this.normals, ret.iN[0], ret.iN[2], ret.iN[3]));
                }
                else {
                    this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, ret.iV[0], ret.iV[1], ret.iV[2], this.normals, ret.iN[0], ret.iN[1], ret.iN[2]));
                }
            }
        }
        if (this.normals.length === 0) {
            this.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_2__["NormalType"].Smooth);
        }
        updateStatus('Processing: 100%');
        console.log('Vertices: ' + this.vertices.length);
        console.log('Normals: ' + this.normals.length);
        console.log('Triangles: ' + this.triangles.length);
        p.log('parse');
    };
    return TriangleObjFile;
}(_TriangleObj__WEBPACK_IMPORTED_MODULE_2__["TriangleObj"]));



/***/ }),

/***/ "./src/TriangleSphere.ts":
/*!*******************************!*\
  !*** ./src/TriangleSphere.ts ***!
  \*******************************/
/*! exports provided: TriangleSphere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleSphere", function() { return TriangleSphere; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/IndexedTriangle.ts");
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
 * Creates a sphere using triangles
 */
var TriangleSphere = /** @class */ (function (_super) {
    __extends(TriangleSphere, _super);
    /**
     * Creates the sphere
     *
     * @param numSteps The number of bands used to cover the sphere
     * @param radius The radius of the sphere
     * @param center The center of the sphere
     */
    function TriangleSphere(numSteps, radius, center) {
        var _this = _super.call(this, 'Sphere') || this;
        // create the vertices
        _this.createVertices(numSteps, radius, center);
        // create triangles from the vertices
        _this.connectVertices(numSteps);
        return _this;
    }
    TriangleSphere.prototype.createVertices = function (numSteps, radius, center) {
        for (var i = 0; i < numSteps; i++) {
            if (i === 0) {
                this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x, center.y + radius, center.z]));
            }
            else if (i === numSteps - 1) {
                this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([center.x, center.y - radius, center.z]));
            }
            else {
                var y = radius * Math.cos(i / (numSteps - 1) * Math.PI);
                var r = radius * Math.sin(i / (numSteps - 1) * Math.PI);
                var offset = i % 2 ? 0 : ((2 * Math.PI) / numSteps) * 0.5;
                for (var j = 0; j < numSteps; j++) {
                    this.vertices.push(new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([
                        center.x + r * Math.sin((j / numSteps) * 2 * Math.PI - offset),
                        center.y + y,
                        center.z + r * Math.cos((j / numSteps) * 2 * Math.PI - offset),
                    ]));
                }
            }
        }
    };
    TriangleSphere.prototype.connectVertices = function (numSteps) {
        var first = 0;
        var last = this.vertices.length - 1;
        for (var i = 0; i < numSteps - 1; i++) {
            for (var j = 0; j < numSteps; j++) {
                if (i === 0) {
                    var i1 = first;
                    var i2 = j + 1;
                    var i3 = j === (numSteps - 1) ? 1 : i2 + 1;
                    this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i1, i2, i3, this.normals));
                }
                else if (i === numSteps - 2) {
                    var startIndex = last - numSteps;
                    var i1 = last;
                    var i2 = startIndex + j;
                    var i3 = j === (numSteps - 1) ? startIndex : i2 + 1;
                    this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i1, i3, i2, this.normals));
                }
                else {
                    var startA = 1 + (i - 1) * numSteps;
                    var startB = 1 + i * numSteps;
                    var i1 = startA + j;
                    var i2 = (j === (numSteps - 1)) ? startA : i1 + 1;
                    var i3 = startB + j;
                    var i4 = (j === (numSteps - 1)) ? startB : i3 + 1;
                    if (i % 2) {
                        this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i1, i4, i2, this.normals));
                        this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i1, i3, i4, this.normals));
                    }
                    else {
                        this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i1, i3, i2, this.normals));
                        this.push(new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_2__["IndexedTriangle"](this.vertices, i2, i3, i4, this.normals));
                    }
                }
            }
        }
    };
    return TriangleSphere;
}(_TriangleObj__WEBPACK_IMPORTED_MODULE_1__["TriangleObj"]));



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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
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
    uLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([1.0, 1.0, 1.0]),
    uLightPos: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"](new _SphericalCoord__WEBPACK_IMPORTED_MODULE_2__["SphericalCoord"](2, 60, 110).toXYZ()),
    uAmbientLightIntensity: 0.3,
    uObjColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0.5, 0.5, 0.8]),
    uBallRadius: 0.5,
    uEye: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uTextureSize: 256,
    uRandom: Math.random(),
    uRay00: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uRay01: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uRay10: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uRay11: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uSample: 0.0,
};


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
/* harmony import */ var _PlanesRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlanesRenderer */ "./src/PlanesRenderer.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
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
        var context = canvas.getContext('webgl');
        if (!context) {
            // TODO display a message about not being able to create a WebGL context
            console.log("Unable to get WebGL context");
        }
        this.gl = context;
        this.updateSize();
        this.renderer = new _PlanesRenderer__WEBPACK_IMPORTED_MODULE_2__["PlanesRenderer"](this.gl);
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
                case 'o':
                    _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_5__["NormalType"].Smooth);
                    break;
                case 'p':
                    _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_5__["NormalType"].Flat);
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
            var matY = _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_1__["toRad"])(delta.x));
            var matX = _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_1__["toRad"])(delta.y));
            var vec = new _glVec__WEBPACK_IMPORTED_MODULE_4__["glVec4"]([
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
        var size = this.gl.canvas.width;
        // TODO get the size of the area from the renderer
        if (pos.x < size / 5 && pos.y < size / 5) {
            this.toggleMode();
            return true;
        }
        return this.renderer.click(pos.x / size, 1 - (pos.y / size));
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
        this.renderer.translateView(new _glVec__WEBPACK_IMPORTED_MODULE_4__["glVec2"]([
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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");

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
        this.boxMin = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([MAX, MAX, MAX]);
        /**
         * Bounding box maximum
         */
        this.boxMax = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([-MAX, -MAX, -MAX]);
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

/***/ "./src/glBuffer.ts":
/*!*************************!*\
  !*** ./src/glBuffer.ts ***!
  \*************************/
/*! exports provided: glBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glBuffer", function() { return glBuffer; });
/**
 * Wrapper for a WebGl Buffer and Attribute
 */
var glBuffer = /** @class */ (function () {
    function glBuffer(glCtx, program, attributeName) {
        this.gl = null;
        this.gl = glCtx;
        var gl = this.gl;
        this.buffer = gl.createBuffer();
        this.attributeLocation = gl.getAttribLocation(program, attributeName);
    }
    glBuffer.prototype.delete = function () {
        this.gl.deleteBuffer(this.buffer);
        this.buffer = undefined;
        this.attributeLocation = undefined;
    };
    glBuffer.prototype.upload = function (vertices) {
        var gl = this.gl;
        this.bind();
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    };
    glBuffer.prototype.bind = function () {
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
    return glBuffer;
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
/*! exports provided: glColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glColor", function() { return glColor; });
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
var glColor = /** @class */ (function (_super) {
    __extends(glColor, _super);
    /**
     * @param color An RGB color array
     */
    function glColor(color) {
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
    glColor.fromColor = function (color) {
        var r = Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["clamp"])(color.r, 0, 1);
        var g = Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["clamp"])(color.g, 0, 1);
        var b = Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["clamp"])(color.b, 0, 1);
        return new glColor([r, g, b]);
    };
    /**
     * Returns the lighter of two colors
     *
     * @param c1 The first color.
     * @param c2 The second color.
     * @returns The lightest color.
     */
    glColor.lightest = function (c1, c2) {
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
    glColor.darkest = function (c1, c2) {
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
    glColor.prototype.toHtmlColor = function () {
        var r = Math.round(255 * this.r);
        var g = Math.round(255 * this.g);
        var b = Math.round(255 * this.b);
        return new _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"]([r, g, b]);
    };
    return glColor;
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
}(_glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]));



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

/***/ "./src/glMat.ts":
/*!**********************!*\
  !*** ./src/glMat.ts ***!
  \**********************/
/*! exports provided: glMat4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glMat4", function() { return glMat4; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
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
var glMat4 = /** @class */ (function () {
    /**
     * @param values If supplied, the initial matrix values. If not supplied, the matrix is
     * initialized as an identity matrix.
     */
    function glMat4(values) {
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
    glMat4.identity = function () {
        return new glMat4();
    };
    /**
     * Creates a copy of the matrix.
     *
     * @returns A copy of the matrix.
     */
    glMat4.prototype.clone = function () {
        return new glMat4(this.values);
    };
    /**
     * Gets a value in the matrix.
     *
     * @param row The row index.
     * @param col The column index.
     * @returns The matrix value.
     */
    glMat4.prototype.get = function (row, col) {
        return this.values[4 * row + col];
    };
    /**
     * Sets a value in the matrix.
     *
     * @param row The row index.
     * @param col The column index.
     * @param val The value.
     */
    glMat4.prototype.set = function (row, col, val) {
        this.values[4 * row + col] = val;
    };
    /**
     * Multiplies this matrix against a vector and returns the result.
     *
     * @param vec The vector.
     * @return The result of the multiplication.
     */
    glMat4.prototype.multV = function (vec) {
        var vals = [];
        for (var row = 0; row < 4; row++) {
            var sum = 0;
            for (var col = 0; col < 4; col++) {
                sum += this.values[row * 4 + col] * vec.values[col];
            }
            vals.push(sum);
        }
        return new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec4"](vals);
    };
    /**
     * Multiplies this matrix against another matrix and returns the result.
     *
     * @param other The matrix.
     * @return The result of the multiplication.
     */
    glMat4.prototype.multM = function (other) {
        var result = new glMat4();
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
    glMat4.prototype.inverse = function () {
        var result = new glMat4();
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
    glMat4.prototype.transpose = function () {
        var result = new glMat4();
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
    glMat4.fromScale = function (scale) {
        return new glMat4([
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
    glMat4.fromTranslation = function (v) {
        return new glMat4([
            1, 0, 0, v.x,
            0, 1, 0, v.y,
            0, 0, 1, v.z,
            0, 0, 0, 1
        ]);
    };
    glMat4.fromRotX = function (angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new glMat4([
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1
        ]);
    };
    glMat4.fromRotY = function (angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new glMat4([
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1
        ]);
    };
    glMat4.fromRotZ = function (angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new glMat4([
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    };
    glMat4.prototype.rotX = function (angle) {
        this.values = glMat4.fromRotX(angle).multM(this).values;
    };
    glMat4.prototype.rotY = function (angle) {
        this.values = glMat4.fromRotY(angle).multM(this).values;
    };
    glMat4.prototype.rotZ = function (angle) {
        this.values = glMat4.fromRotZ(angle).multM(this).values;
    };
    glMat4.prototype.translate = function (offset) {
        this.values = glMat4.fromTranslation(offset).multM(this).values;
    };
    glMat4.prototype.scale = function (scale) {
        this.values = glMat4.fromScale(scale).multM(this).values;
    };
    /**
     * Creates a viewing matrix. See gluLookAt.
     *
     * @param eye The eye position.
     * @param center The point of interest.
     * @param up The up vector.
     * @returns The viewing matrix.
     */
    glMat4.makeLookAt = function (eye, center, up) {
        var a = eye.subtract(center).normalize();
        var b = up.cross(a).normalize();
        var c = a.cross(b).normalize();
        var m = new glMat4([
            b.x, b.y, b.z, 0,
            c.x, c.y, c.z, 0,
            a.x, a.y, a.z, 0,
            0, 0, 0, 1
        ]);
        var t = new glMat4([
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
    glMat4.makePerspective = function (fovy, aspect, znear, zfar) {
        var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
        var ymin = -ymax;
        var xmin = ymin * aspect;
        var xmax = ymax * aspect;
        return glMat4.makeFrustum(xmin, xmax, ymin, ymax, znear, zfar);
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
    glMat4.makeFrustum = function (left, right, bottom, top, znear, zfar) {
        var X = 2 * znear / (right - left);
        var Y = 2 * znear / (top - bottom);
        var A = (right + left) / (right - left);
        var B = (top + bottom) / (top - bottom);
        var C = -(zfar + znear) / (zfar - znear);
        var D = -2 * zfar * znear / (zfar - znear);
        return new glMat4([
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
    glMat4.makeOrtho = function (left, right, bottom, top, near, far) {
        return new glMat4([
            2 / (right - left), 0, 0, (right + left) / (right - left),
            0, 2 / (top - bottom), 0, (top + bottom) / (top - bottom),
            0, 0, 2 / (far - near), (far + near) / (far - near),
            0, 0, 0, 1
        ]);
    };
    glMat4.prototype.log = function (msg, digits) {
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
    return glMat4;
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
/* harmony import */ var _glBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glBuffer */ "./src/glBuffer.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glUniform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glUniform */ "./src/glUniform.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");




var glObject = /** @class */ (function () {
    function glObject(glCtx, tObj, program) {
        this.gl = null;
        this.model = new _glMat__WEBPACK_IMPORTED_MODULE_1__["glMat4"]();
        this.gl = glCtx;
        var gl = this.gl;
        this.tObj = tObj;
        this.program = program;
        // create buffers (and associated attributes)
        this.vertexBuffer = new _glBuffer__WEBPACK_IMPORTED_MODULE_0__["glBuffer"](gl, program, 'aVertex');
        this.normalBuffer = new _glBuffer__WEBPACK_IMPORTED_MODULE_0__["glBuffer"](gl, program, 'aNormal');
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
    };
    glObject.prototype.rotX = function (angle) {
        this.model.rotX(angle);
    };
    glObject.prototype.rotY = function (angle) {
        this.model.rotY(angle);
    };
    glObject.prototype.rotZ = function (angle) {
        this.model.rotZ(angle);
    };
    glObject.prototype.scale = function (scale) {
        this.model.scale(scale);
    };
    glObject.prototype.translate = function (offset) {
        this.model.translate(offset);
    };
    glObject.prototype.clearTransforms = function () {
        this.model = new _glMat__WEBPACK_IMPORTED_MODULE_1__["glMat4"]();
    };
    glObject.prototype.pushVec = function (array, vec) {
        array.push(vec.x);
        array.push(vec.y);
        array.push(vec.z);
    };
    glObject.prototype.uploadTriangles = function () {
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        // convert the triangles into arrays that can be uploaded
        var vertices = [];
        var normals = [];
        for (var i = 0; i < this.tObj.triangles.length; i++) {
            var tri = this.tObj.triangles[i];
            this.pushVec(vertices, tri.v0);
            this.pushVec(vertices, tri.v1);
            this.pushVec(vertices, tri.v2);
            this.pushVec(normals, tri.n0);
            this.pushVec(normals, tri.n1);
            this.pushVec(normals, tri.n2);
        }
        p.log('to glVec[]');
        this.vertexBuffer.upload(vertices);
        this.normalBuffer.upload(normals);
        p.log('upload');
    };
    glObject.prototype.draw = function () {
        var gl = this.gl;
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_2__["glUniform"](gl, this.program);
        uni.set('model', this.model.transpose());
        this.vertexBuffer.bind();
        this.normalBuffer.bind();
        gl.drawArrays(gl.TRIANGLES, 0, this.tObj.triangles.length * 3);
    };
    glObject.prototype.optimize = function (normalType) {
        this.tObj.optimize(normalType);
        this.uploadTriangles();
    };
    return glObject;
}());



/***/ }),

/***/ "./src/glTextureFrameBuffer.ts":
/*!*************************************!*\
  !*** ./src/glTextureFrameBuffer.ts ***!
  \*************************************/
/*! exports provided: FrameBufferStyle, glTextureFrameBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameBufferStyle", function() { return FrameBufferStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glTextureFrameBuffer", function() { return glTextureFrameBuffer; });
var FrameBufferStyle;
(function (FrameBufferStyle) {
    FrameBufferStyle[FrameBufferStyle["Normal"] = 0] = "Normal";
    FrameBufferStyle[FrameBufferStyle["Depth"] = 1] = "Depth";
    FrameBufferStyle[FrameBufferStyle["Float"] = 2] = "Float";
})(FrameBufferStyle || (FrameBufferStyle = {}));
/**
 * A frame buffer that can be rendered to
 */
var glTextureFrameBuffer = /** @class */ (function () {
    /**
     * Create a frame buffer for rendering into texture objects.
     *
     * @param glCtx The WebGL context
     * @param width The width (in pixels) of the rendering (must be power of 2)
     * @param height The height (in pixels) of the rendering (must be power of 2)
     */
    function glTextureFrameBuffer(glCtx, width, height, style) {
        this.gl = null;
        this.gl = glCtx;
        switch (style) {
            case FrameBufferStyle.Normal:
                this.create(width, height);
                break;
            case FrameBufferStyle.Depth:
                this.createDepth(width, height);
                break;
            case FrameBufferStyle.Float:
                this.createFloat(width, height);
                break;
        }
    }
    glTextureFrameBuffer.prototype.delete = function () {
        var gl = this.gl;
        if (this.depthTexture) {
            gl.deleteTexture(this.depthTexture);
            this.depthTexture = null;
        }
        if (this.colorTexture) {
            gl.deleteTexture(this.colorTexture);
            this.colorTexture = null;
        }
        if (this.frameBuffer) {
            gl.deleteFramebuffer(this.frameBuffer);
            this.frameBuffer = null;
        }
    };
    glTextureFrameBuffer.prototype.create = function (width, height) {
        var gl = this.gl;
        // Step 1: Create a frame buffer object
        this.frameBuffer = gl.createFramebuffer();
        // Step 2: Create and initialize a texture buffer to hold the colors.
        this.colorTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.colorTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        // Step 4: Attach the specific buffers to the frame buffer.
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture, 0);
        // Step 5: Verify that the frame buffer is valid.
        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            var msg = "The created frame buffer is invalid: " + status.toString();
            alert(msg);
            console.log(msg);
        }
        // Unbind these new objects, which makes the default frame buffer the
        // target for rendering.
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    glTextureFrameBuffer.prototype.createDepth = function (width, height) {
        var gl = this.gl;
        var depth_texture_extension = gl.getExtension('WEBGL_depth_texture');
        if (!depth_texture_extension) {
            alert('This WebGL program requires the use of the WEBGL_depth_texture extension.');
            return;
        }
        // Step 1: Create a frame buffer object
        this.frameBuffer = gl.createFramebuffer();
        // Step 2: Create and initialize a texture buffer to hold the colors.
        this.colorTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.colorTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        // Step 3: Create and initialize a texture buffer to hold the depth values.
        // Note: the WEBGL_depth_texture extension is required for this to work
        //       and for the gl.DEPTH_COMPONENT texture format to be supported.
        this.depthTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, width, height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        // Step 4: Attach the specific buffers to the frame buffer.
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorTexture, 0);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
        // Step 5: Verify that the frame buffer is valid.
        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            var msg = "The created frame buffer is invalid: " + status.toString();
            alert(msg);
            console.log(msg);
        }
        // Unbind these new objects, which makes the default frame buffer the
        // target for rendering.
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    glTextureFrameBuffer.prototype.createFloat = function (width, height) {
    };
    return glTextureFrameBuffer;
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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");



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
            if (value instanceof _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]) {
                gl.uniform3fv(loc, new Float32Array(value.values));
            }
            else if (value instanceof _glColor__WEBPACK_IMPORTED_MODULE_1__["glColor"]) {
                gl.uniform3fv(loc, new Float32Array([value.r, value.g, value.b]));
            }
            else if (value instanceof _glMat__WEBPACK_IMPORTED_MODULE_2__["glMat4"]) {
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
        /*
        var uniformBlockBuffer = gl2.createBuffer();
        gl2.bindBuffer(gl2.UNIFORM_BUFFER, uniformBlockBuffer);
        gl2.bufferData(gl2.UNIFORM_BUFFER, triangleData, gl2.STATIC_DRAW);
        gl2.bindBuffer(gl2.UNIFORM_BUFFER, null);
        gl2.bindBufferBase(gl2.UNIFORM_BUFFER, 2, uniformBlockBuffer);
        */
    };
    return glUniformBlock;
}());



/***/ }),

/***/ "./src/glVec.ts":
/*!**********************!*\
  !*** ./src/glVec.ts ***!
  \**********************/
/*! exports provided: glVec2, glVec3, glVec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVec2", function() { return glVec2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVec3", function() { return glVec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVec4", function() { return glVec4; });
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
var glVec = /** @class */ (function () {
    /**
     * @param valuesOrSize If a array, the values for the vector. If a number, the size of the vector.
     */
    function glVec(valuesOrSize) {
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
    glVec.prototype.magnitude = function () {
        var sum = 0;
        for (var i = 0; i < this.values.length; i++) {
            sum += this.values[i] * this.values[i];
        }
        return Math.sqrt(sum);
    };
    return glVec;
}());
/**
 * An x-y vector.
 */
var glVec2 = /** @class */ (function (_super) {
    __extends(glVec2, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function glVec2(vals) {
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
    glVec2.prototype.clone = function () {
        return new glVec2(this.values);
    };
    Object.defineProperty(glVec2.prototype, "x", {
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
    Object.defineProperty(glVec2.prototype, "y", {
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
    glVec2.prototype.distance = function (other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    };
    return glVec2;
}(glVec));

/**
 * An x-y-z vector.
 */
var glVec3 = /** @class */ (function (_super) {
    __extends(glVec3, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function glVec3(vals) {
        var _this = this;
        if (vals) {
            _this = _super.call(this, vals) || this;
        }
        else {
            _this = _super.call(this, 3) || this;
        }
        return _this;
    }
    Object.defineProperty(glVec3.prototype, "x", {
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
    Object.defineProperty(glVec3.prototype, "y", {
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
    Object.defineProperty(glVec3.prototype, "z", {
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
    glVec3.prototype.clone = function () {
        return new glVec3(this.values);
    };
    /**
     * Creates a string representation of the vector
     *
     * @param digits The number of decimal places to display. This value is passed to toFixed().
     * @param divider The string to separate each number.
     * @returns A string representation.
     */
    glVec3.prototype.toString = function (digits, divider) {
        if (divider === void 0) { divider = ','; }
        return this.x.toFixed(digits) + divider + this.y.toFixed(digits) + divider + this.z.toFixed(digits);
    };
    /**
     * Normalizes this vector, and stores and returns the result.
     *
     * @returns The resulting normalized vector.
     */
    glVec3.prototype.normalize = function () {
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
    glVec3.prototype.subtract = function (vec) {
        return new glVec3([
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
    glVec3.prototype.add = function (vec) {
        return new glVec3([
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
    glVec3.prototype.cross = function (other) {
        var A = this.values;
        var B = other.values;
        return new glVec3([
            A[1] * B[2] - A[2] * B[1],
            A[2] * B[0] - A[0] * B[2],
            A[0] * B[1] - A[1] * B[0]
        ]);
    };
    return glVec3;
}(glVec));

/**
 * An x-y-z-w vector.
 */
var glVec4 = /** @class */ (function (_super) {
    __extends(glVec4, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function glVec4(vals) {
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
    glVec4.prototype.divideByW = function () {
        var w = this.values[3];
        return new glVec3([
            this.values[0] / w,
            this.values[1] / w,
            this.values[2] / w
        ]);
    };
    return glVec4;
}(glVec));



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
        return new _glColor__WEBPACK_IMPORTED_MODULE_1__["glColor"]([this.r / 255, this.g / 255, this.b / 255]);
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
    else {
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

/***/ "./src/shaders/PlanesFragment.glsl":
/*!*****************************************!*\
  !*** ./src/shaders/PlanesFragment.glsl ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\n\r\n// interpolated values from the vertex shader\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nuniform float uLightIntensity;\r\nuniform float uAmbientIntensity;\r\nuniform vec3 uLightDirection;\r\n\r\n// the colors we use to represent our lightest and darkest values\r\nuniform vec3 uWhiteColor;\r\nuniform vec3 uBlackColor;\r\n\r\nuniform int uUseThresholds;\r\nuniform float uThreshold1;\r\nuniform float uThreshold2;\r\nuniform float uHighlight;\r\nuniform float uLightLight;\r\nuniform float uMidLight;\r\nuniform float uDarkLight;\r\nuniform float uShadow;\r\n\r\nuniform int uUseShadows;\r\nuniform sampler2D uShadowTexture;\r\n\r\nbool in_shadow(void)\r\n{\r\n   if (uUseShadows == 0)\r\n   {\r\n      return false;\r\n   }\r\n\r\n   // The vertex location rendered from the light source is almost in Normalized\r\n   // Device Coordinates (NDC), but the perspective division has not been\r\n   // performed yet. Perform the perspective divide. The (x,y,z) vertex location\r\n   // components are now each in the range [-1.0,+1.0].\r\n   // vec3 vertex_relative_to_light = v_Vertex_relative_to_light.xyz / v_Vertex_relative_to_light.w;\r\n   vec3 vertex = vShadowVertex;\r\n\r\n   // Convert the the values from Normalized Device Coordinates (range [-1.0,+1.0])\r\n   // to the range [0.0,1.0]. This mapping is done by scaling\r\n   // the values by 0.5, which gives values in the range [-0.5,+0.5] and then\r\n   // shifting the values by +0.5.\r\n   vertex = vertex * 0.5 + 0.5;\r\n\r\n   // Get the z value of this fragment in relationship to the light source.\r\n   // This value was stored in the shadow map (depth buffer of the frame buffer)\r\n   // which was passed to the shader as a texture map.\r\n   // vec4 textureValue = texture2D(uShadowSampler, vertex.xy);\r\n\r\n   // The texture map contains a single depth value for each pixel. However,\r\n   // the texture2D sampler always returns a color from a texture. For a\r\n   // gl.DEPTH_COMPONENT texture, the color contains the depth value in\r\n   // each of the color components. If the value was d, then the color returned\r\n   // is (d,d,d,1). This is a \"color\" (depth) value between [0.0,+1.0].\r\n   float shadowmap_distance = texture2D(uShadowTexture, vertex.xy).r;\r\n\r\n   // Test the distance between this fragment and the light source as\r\n   // calculated using the shadowmap transformation (vertex_relative_to_light.z) and\r\n   // the smallest distance between the closest fragment to the light source\r\n   // for this location, as stored in the shadowmap. When the closest\r\n   // distance to the light source was saved in the shadowmap, some\r\n   // precision was lost. Therefore we need a small tolerance factor to\r\n   // compensate for the lost precision.\r\n   float tol = 0.001;\r\n   if (vertex.z <= shadowmap_distance + tol)\r\n   {\r\n      // This surface receives full light because it is the closest surface\r\n      // to the light.\r\n      return false;\r\n   }\r\n   else\r\n   {\r\n      // This surface is in a shadow because there is a closer surface to\r\n      // the light source.\r\n      return true;\r\n   }\r\n}\r\n\r\nvec4 getColor(float val)\r\n{\r\n   vec3 rgb = mix(uBlackColor, uWhiteColor, val);\r\n   return vec4(rgb.r, rgb.g, rgb.b, 1.0);\r\n}\r\n\r\nvoid main()\r\n{\r\n   if (in_shadow())\r\n   {\r\n      if (uUseThresholds == 0)\r\n      {\r\n         gl_FragColor = getColor(uAmbientIntensity);\r\n      }\r\n      else\r\n      {\r\n         gl_FragColor = getColor(uShadow);\r\n      }\r\n      return;\r\n   }\r\n\r\n   vec3 eye = vec3(0.0, 0.0, -10.0);\r\n   vec3 toLight = normalize(-uLightDirection);\r\n   vec3 toEye = normalize(eye - vVertex);\r\n   vec3 normal = normalize(vNormal); // vNormal is interpolated and no long normal\r\n\r\n   // swap normals for back facing triangles\r\n   if (dot(normal, toEye) < 0.0)\r\n   {\r\n      normal = -normal;\r\n   }\r\n\r\n   // compute diffuse contribution = cos of angle between the vectors (dot product)\r\n   float diffuseFactor = clamp(dot(normal, toLight), 0.0, 1.0);\r\n   float diffuse = diffuseFactor * uLightIntensity;\r\n\r\n   // compute specular contribution\r\n   float shininess = 15.0;\r\n   vec3 reflection = normalize(2.0 * dot(normal, toLight) * normal - toLight);\r\n   float cosAngle = clamp(dot(reflection, toEye), 0.0, 1.0); // clamp to avoid values > 90 deg\r\n   float specular = 0.1 * pow(cosAngle, shininess);\r\n\r\n   float val;\r\n   if (uUseThresholds == 0)\r\n   {\r\n      val = uAmbientIntensity + diffuse + specular;\r\n   }\r\n   else\r\n   {\r\n      float threshold = 1.0 - diffuseFactor;\r\n\r\n      float v1 = min(uThreshold1, uThreshold2);\r\n      float v2 = max(uThreshold1, uThreshold2);\r\n\r\n      if (threshold < v1)\r\n      {\r\n         val = uLightLight;\r\n      }\r\n      else if (threshold < v2)\r\n      {\r\n         val = uMidLight;\r\n      }\r\n      else if (threshold < 1.0)\r\n      {\r\n         val = uDarkLight;\r\n      }\r\n      else\r\n      {\r\n         val = uShadow;\r\n      }\r\n\r\n      if (specular > 0.05)\r\n      {\r\n         val = uHighlight;\r\n      }\r\n   }\r\n\r\n   gl_FragColor = getColor(val);\r\n}");

/***/ }),

/***/ "./src/shaders/PlanesVertex.glsl":
/*!***************************************!*\
  !*** ./src/shaders/PlanesVertex.glsl ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 aVertex;\r\nattribute vec3 aNormal;\r\n\r\nuniform mat4 model;\r\nuniform mat4 view;\r\nuniform mat4 lightView;\r\nuniform mat4 projection;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nvoid main()\r\n{\r\n   gl_Position = projection * view * model * vec4(aVertex, 1.0);\r\n   vNormal = (model * vec4(aNormal, 0.0)).xyz;\r\n   vVertex = (model * vec4(aVertex, 1.0)).xyz;\r\n   vShadowVertex = (lightView * model * vec4(aVertex, 1.0)).xyz;\r\n}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9Ecm9wRG93bk1lbnUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvUGxhbmVzQXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1NsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UYWJzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1ZpZXdlckFwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2FkZXJXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jsb2JGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9CbG9iU2hpbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yQW5hbHl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Ryb3BEb3duTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXhlZFRyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9Nb2RlbExvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZWxzRHJvcERvd25NZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5lc0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmVzUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvaW50ZXJFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwaGVyaWNhbENvb3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9UZXh0dXJlUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RocmVzaG9sZEN0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlQXJyb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlQ3ViZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVPYmoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlT2JqRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVTcGhlcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VuaWZvcm1zLnRzIiwid2VicGFjazovLy8uL3NyYy9WaWV3ZXJBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZvbHVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ2xpcFNwYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yV2l0aFRlbXBlcmF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbXBpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nbE1hdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVGV4dHVyZUZyYW1lQnVmZmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nbFVuaWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVW5pZm9ybUJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9nbFZlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9odG1sQ29sb3JXaXRoQWxwaGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlbkZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGF0aFRyYWNlclRvVGV4dHVyZUZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGF0aFRyYWNlclRvVGV4dHVyZVZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BsYW5lc0ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGxhbmVzVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvVGV4dHVyZVJlbmRlcmVyRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9UZXh0dXJlUmVuZGVyZXJWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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QyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUNJO1lBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV2RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENB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RyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLGdCQUFTLENBQUMsY0FBYyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFNLGdCQUFTLENBQUMsZUFBZSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUM3RCxPQUFPLENB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QUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FB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UUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDOUM7UUFFRCxDQUFDLENBQUMsR0FBRyxD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QzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxD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SSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDO0lBbkVEOztPQUVHO0lBQ1ksNkJBQU0sR0FBNkI7UUFDL0MsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ2xFLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFF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RUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9GLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhDLDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoRixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUM7U0FDZDtRQUNELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFD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eUIsMkJBQTJCLFdBQVcsNkNBQTZDLDhCQUE4QixXQUFXLFFBQVEsd0NBQXdDLEtBQUssQzs7Ozs7Ozs7Ozs7O0FDQWxwSztBQUFlLHVGQUF3QiwyQkFBMkIsMkJBQTJCLHNCQUFzQiwyQkFBMkIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsK0JBQStCLHdCQUF3QixvRUFBb0Usa0RBQWtELGtEQUFrRCxvRUFBb0UsS0FBSyxDOzs7Ozs7Ozs7Ozs7QUNBeGdCO0FBQWUsMEZBQTJCLDBCQUEwQiwrQkFBK0IscUJBQXFCLDhDQUE4QyxFQUFFLEs7Ozs7Ozs7Ozs7OztBQ0F4SztBQUFlLDBGQUEyQiwwQkFBMEIsd0JBQXdCLHdDQUF3QyxtREFBbUQsS0FBSyxLOzs7Ozs7Ozs7OztBQ0E1TCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhIQUEwRDs7QUFFNUY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcclxcbi5Ecm9wRG93biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcGRvd24gQnV0dG9uICovXFxyXFxuLkRyb3BEb3duQnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIERyb3Bkb3duIGJ1dHRvbiBvbiBob3ZlciAmIGZvY3VzICovXFxyXFxuLkRyb3BEb3duQnV0dG9uOmhvdmVyLFxcclxcbi5Ecm9wRG93bkJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cXHJcXG4uRHJvcERvd25NZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxuICBtaW4td2lkdGg6IDE1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXFxyXFxuLkRyb3BEb3duTWVudUl0ZW0ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xcclxcbi5Ecm9wRG93bk1lbnVJdGVtOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgKHVzZSBKUyB0byBhZGQgdGhpcyBjbGFzcyB0byB0aGUgLmRyb3Bkb3duLWNvbnRlbnQgY29udGFpbmVyIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBkcm9wZG93biBidXR0b24pICovXFxyXFxuLkRyb3BEb3duU2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5Ecm9wRG93bk1lbnUge1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5QbGFuZXNBcHAgI01haW5DYW52YXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNPdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjQ3RybHNDb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNMaWdodExpZ2h0UmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG4uUGxhbmVzQXBwICNMaWdodExpZ2h0U2xpZGVyUmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmF5LCBkYXJrZ3JheSk7XFxyXFxufVxcclxcblxcclxcbi5QbGFuZXNBcHAgI01pZExpZ2h0UmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG4uUGxhbmVzQXBwICNNaWRMaWdodFNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNEYXJrTGlnaHRSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmF5LCBkYXJrZ3JheSk7XFxyXFxufVxcclxcbi5QbGFuZXNBcHAgI0RhcmtMaWdodFNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwIC5TbGlkZXJSYW5nZSB7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwIC5TbGlkZXJMYWJlbCB7XFxyXFxuICB3aWR0aDogMTglO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNUaHJlc2hvbGRDYW52YXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuUGxhbmVzQXBwIC5TbGlkZXJSYW5nZSB7XFxyXFxuICAgIHdpZHRoOiAyOCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUGxhbmVzQXBwIC5TbGlkZXJMYWJlbCB7XFxyXFxuICAgIHdpZHRoOiAyMiU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUGxhbmVzQXBwICNUaHJlc2hvbGRDYW52YXMge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTUwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuU2xpZGVyTGFiZWwge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckhlYWRlciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xcclxcbiAgYm9yZGVyOiBncmF5O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyZWVuLCBkYXJrZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckNvbG9yU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiBncmF5O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlNsaWRlckxhYmVsIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgICB3aWR0aDogMzRweDtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyVmFsdWVTcGFuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3R5bGUgdGhlIHRhYiAqL1xcclxcbi5UYWJzIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiB0aGUgdGFiIGNvbnRlbnQgKi9cXHJcXG4uVGFicyBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXFxyXFxuLlRhYnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cXHJcXG4uVGFicyBidXR0b24uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXFxyXFxuLlRhYkNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuVGFicyBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlZpZXdlckFwcCAjTWFpbkNhbnZhcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMTcsIDEzNCk7XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXJBcHAgI092ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRHJvcERvd25NZW51LmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NsaWRlci5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJzLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BsYW5lc0FwcC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9WaWV3ZXJBcHAuY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIGxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RyYXdUaW1lIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTQ5NXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBmb250LXNpemU6IDhwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwcm9ncmVzc1NwYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAzcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAyMDUsIDUwLCAwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGVCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gICoge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHJhd1RpbWUge1xcclxcbiAgICB0b3A6IC05NjBweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbW9kZUJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhiLGMsZCl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGIpLGUucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGUub25sb2FkPWZ1bmN0aW9uKCl7YShlLnJlc3BvbnNlLGMsZCl9LGUub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZS5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYSxiLGQsZSl7aWYoZT1lfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZSYmKGUuZG9jdW1lbnQudGl0bGU9ZS5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBhKXJldHVybiBjKGEsYixkKTt2YXIgZz1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09YS50eXBlLGg9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaT0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGl8fGcmJmgpJiZcIm9iamVjdFwiPT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGo9bmV3IEZpbGVSZWFkZXI7ai5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1qLnJlc3VsdDthPWk/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZT9lLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGU9bnVsbH0sai5yZWFkQXNEYXRhVVJMKGEpfWVsc2V7dmFyIGs9Zi5VUkx8fGYud2Via2l0VVJMLGw9ay5jcmVhdGVPYmplY3RVUkwoYSk7ZT9lLmxvY2F0aW9uPWw6bG9jYXRpb24uaHJlZj1sLGU9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay5yZXZva2VPYmplY3RVUkwobCl9LDRFNCl9fSk7Zi5zYXZlQXM9YS5zYXZlQXM9YSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9YSl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiTG9hZGVyV29ya2VyLndvcmtlci5qc1wiKTtcbn07IiwiaW1wb3J0ICcuL0Jsb2JTaGltJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyBmb3Igc2xpY2luZyB1cCBCbG9ic1xyXG4gKi9cclxuY2xhc3MgQmxvYlNsaWNlciB7XHJcblxyXG4gICAvLyBUaGUgc3RhcnQgYnl0ZSB2YWx1ZSBmb3IgdGhlIG5leHQgc2xpY2VcclxuICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAvLyBUaGUgQmxvYiB3ZSdyZSBzbGljaW5nIFxyXG4gICBwcml2YXRlIGJsb2I6IEJsb2I7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gYmUgc2xpY2VkXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoYmxvYjogQmxvYikge1xyXG4gICAgICB0aGlzLmJsb2IgPSBibG9iO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbmV4dCBzbGljZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBzbGljZWQgQmxvYi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZXh0KGxlbjogbnVtYmVyKTogQmxvYiB7XHJcbiAgICAgIGxldCBiID0gdGhpcy5ibG9iLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuc3RhcnQgKyBsZW4pO1xyXG4gICAgICB0aGlzLnN0YXJ0ICs9IGxlbjtcclxuICAgICAgcmV0dXJuIGI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gQXJyYXlCdWZmZXIuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBBcnJheUJ1ZmZlciBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5leHRBcnJheUJ1ZmZlcihsZW46IG51bWJlcik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV4dChsZW4pLmFycmF5QnVmZmVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gSW50MzJBcnJheVxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBJbnQzMkFycmF5IHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dEludDMyQXJyYXkobGVuOiBudW1iZXIpOiBQcm9taXNlPEludDMyQXJyYXk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGF3YWl0IHRoaXMubmV4dEFycmF5QnVmZmVyKGxlbikpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGEgc3RyaW5nXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dFN0cmluZyhsZW46IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5leHQobGVuKS50ZXh0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgY3JlYXRpb24gYW5kIGV4dHJhY3Rpb24gb2YgYSBzZWxmIGRlc2NyaWJpbmcgQmxvYi4gRGF0YVxyXG4gKiBpcyBzdG9yZWQgYXM6XHJcbiAqIFxyXG4gKiBbbnVtRW50cmllc10gLSBUaGUgbnVtYmVyIGVudHJpZXMgaW4gdGhlIGZpbGUuIDQgYnl0ZSBJbnQzMlxyXG4gKiBbc2l6ZXNdIC0gU2l6ZXMgb2YgYWxsIHRoZSBlbnRyaWVzLCBpbmNsdWRpbmcgdGhlIGluZm8gb2JqZWN0XHJcbiAqIFtpbmZvXSAtIFVzZXIgc3VwcGxpZWQgZGF0YSBhcyBhIEpTT04gc3RyaW5nXHJcbiAqIFtlbnRyeSAxXSAtIEZpcnN0IHVzZXIgZW50cnlcclxuICogW2VudHJ5IDJdIC0gU2Vjb25kIHVzZXIgZW50cnlcclxuICogWy4uLl1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9iRmlsZSB7XHJcbiAgIHB1YmxpYyBpbmZvOiBhbnk7XHJcbiAgIHB1YmxpYyBwYXJ0czogQmxvYltdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIGhlYWRlciB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQmxvYlxyXG4gICAgKiBAcGFyYW0gcGFydHMgVGhlIGRhdGEgY29udGVudHMgb2YgdGhlIEJsb2JcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoaW5mbzogb2JqZWN0LCBwYXJ0czogQmxvYltdKSB7XHJcbiAgICAgIHRoaXMuaW5mbyA9IGluZm87XHJcbiAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgcmF3IEJsb2Igb2JqZWN0IGludG8gYSBCbG9iRmlsZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gcHJvY2Vzcy5cclxuICAgICogQHJldHVybiBBIEJsb2JGaWxlIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4dHJhY3QoYmxvYjogQmxvYik6IFByb21pc2U8QmxvYkZpbGU+IHtcclxuXHJcbiAgICAgIGxldCBibG9iU2xpY2VyID0gbmV3IEJsb2JTbGljZXIoYmxvYik7XHJcblxyXG4gICAgICAvLyBmaXJzdCBleHRyYWN0IHRoZSBudW1iZXIgb2YgZW50cmllc1xyXG4gICAgICBsZXQgbnVtRW50cmllcyA9IChhd2FpdCBibG9iU2xpY2VyLm5leHRJbnQzMkFycmF5KDQpKVswXTtcclxuXHJcbiAgICAgIC8vIHRoZSB0aGUgc2l6ZXMgYXJyYXlcclxuICAgICAgbGV0IHNpemVzID0gYXdhaXQgYmxvYlNsaWNlci5uZXh0SW50MzJBcnJheSg0ICogKG51bUVudHJpZXMgKyAxKSk7XHJcblxyXG4gICAgICAvLyB0aGVuIHRoZSBpbmZvIG9iamVjdFxyXG4gICAgICBsZXQganNvbkluZm8gPSBhd2FpdCBibG9iU2xpY2VyLm5leHRTdHJpbmcoc2l6ZXNbMF0pO1xyXG5cclxuICAgICAgLy8gdGhlbiBhbGwgdGhlIHN1YiBibG9ic1xyXG4gICAgICBsZXQgcGFydHM6IEJsb2JbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUVudHJpZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IHNpemVzW2kgKyAxXTtcclxuICAgICAgICAgcGFydHMucHVzaChibG9iU2xpY2VyLm5leHQoc2l6ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEJsb2JGaWxlKEpTT04ucGFyc2UoanNvbkluZm8pLCBwYXJ0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBCbG9iRmlsZSBCbG9iXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gaGVhZGVyIHRvIGJlIHN0b3JlZCB3aXRoIHRoZSBCbG9iXHJcbiAgICAqIEBwYXJhbSBwYXJ0cyBUaGUgZGF0YSBjb250ZW50cyBvZiB0aGUgQmxvYlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGVCbG9iKGluZm86IG9iamVjdCwgcGFydHM6IEJsb2JQYXJ0W10pOiBCbG9iIHtcclxuXHJcbiAgICAgIGxldCBqc29uSW5mbyA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xyXG5cclxuICAgICAgLy8gQnVpbGQgdGhlIGFycmF5IG9mIHNpemVzXHJcbiAgICAgIGxldCBzaXplczogbnVtYmVyW10gPSBbanNvbkluZm8ubGVuZ3RoXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgcGFydCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICBpZiAocGFydCBpbnN0YW5jZW9mIEludDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaChwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPSAnVW5zdXBwb3J0ZWQgQmxvYiBQYXJ0IFR5cGU6ICcgKyB0eXBlb2YgcGFydDtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhc3NlbWJsZSB0aGUgYmxvYiBwYXJ0c1xyXG4gICAgICBsZXQgYWxsUGFydHM6IEJsb2JQYXJ0W10gPSBbXTtcclxuICAgICAgYWxsUGFydHMucHVzaChuZXcgSW50MzJBcnJheShbcGFydHMubGVuZ3RoXSkpO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKG5ldyBJbnQzMkFycmF5KHNpemVzKSk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2goanNvbkluZm8pO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKC4uLnBhcnRzKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgYmxvYlxyXG4gICAgICByZXR1cm4gbmV3IEJsb2IoYWxsUGFydHMpO1xyXG4gICB9XHJcbn0iLCIvLyBuZWVkZWQgZm9yIFNhZmFyaVxyXG5pZiAoIUJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyKSB7XHJcbiAgIEJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuXHJcbiAgICAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0YXJ0IHRoZSByZWFkXHJcbiAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG5cclxuLy8gbmVlZGVkIGZvciBTYWZhcmlcclxuaWYgKCFCbG9iLnByb3RvdHlwZS50ZXh0KSB7XHJcblxyXG4gICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICBCbG9iLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlY29kZSBpbnRvIGEgc3RyaW5nXHJcbiAgICAgICAgICAgIGxldCB0eHQgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHh0KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdGFydCB0aGUgcmVhZFxyXG4gICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuIiwiXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgcmVwcmVzZW50aW5nIGNvbG9yIHZhbHVlcy4gVmFsdWVzIG1heSBiZSBvbiBhIDAtMSBvciAwLTI1NSBzY2FsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgIHB1YmxpYyByOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBnOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBiOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIFJHQiB2YWx1ZXMgdG8gc3RvcmUgaW4gdGhpcyBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5yID0gY29sb3JbMF07XHJcbiAgICAgIHRoaXMuZyA9IGNvbG9yWzFdO1xyXG4gICAgICB0aGlzLmIgPSBjb2xvclsyXTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgaXRlbXMgcmV0dXJuZWQgZnJvbSBleGFtaW5pbmcgdGhlIGN1cnJlbnQgdmlld1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sb3JEYXRhIHtcclxuICAgbWF4Q2hyb21hOiBudW1iZXIsXHJcbiAgIGhpZ2hsaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBhdmdMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBsaWdodGVzdExpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGRhcmtlc3RMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBhdmdTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgZGFya2VzdFNoYWRvd0NvbG9yOiBnbENvbG9yLFxyXG4gICB0ZXJtaW5hdG9yQ29sb3I6IGdsQ29sb3IsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGdyYWJzIGEgY29weSBvZiB0aGUgcmVuZGVyZWQgdGV4dHVyZSBhbmQgZXhhbWluZXMgaXQgZm9yXHJcbiAqIGNvbG9yIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvckFuYWx5emVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYXJyYXkgd2hlcmUgd2UnbGwgZHVtcCB0aGUgdGV4dHVyZSB0by4gQ2FjaGUgdGhpcyBhcnJheSBpbnN0ZWFkIG9mXHJcbiAgICAqIGFsbG9jYXRpbmcgYSBuZXcgb25lIGZvciBlYWNoIGZyYW1lLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBwaXhlbHM6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTaXplIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gc2l6ZSBUaGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgYnVmZmVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgLy8gYWxsb2NhdGUgdGhlIGJ1ZmZlciB1c2VkIGZvciBncmFic1xyXG4gICAgICB0aGlzLnBpeGVscyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zaXplICogdGhpcy5zaXplICogNCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSdW5zIHRoZSBhbmFseXNpcyAtIGdyYWJzIGEgY29weSBvZiB0aGUgZnJhbWUgYnVmZmVyIGFuZCBzY2FucyBpdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBhbHBoYUxpZ2h0IFRoZSBhbHBoYSB2YWx1ZSBmb3IgdGhpbmdzIGluIGxpZ2h0LiBWYWx1ZXMgYWJvdmUgdGhpcyBhcmUgZHVlIHRvIHNwZWN1bGFyIGxpZ2h0aW5nLlxyXG4gICAgKiBAcGFyYW0gYWxwaGFTaGFkb3cgVGhlIGFscGhhIHZhbHVlIGZvciB0aGluZ3MgaW4gc2hhZG93LlxyXG4gICAgKi9cclxuICAgcHVibGljIHJ1bihcclxuICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIGFscGhhTGlnaHQ6IG51bWJlcixcclxuICAgICAgYWxwaGFTaGFkb3c6IG51bWJlclxyXG4gICApOiBJQ29sb3JEYXRhIHtcclxuXHJcbiAgICAgIGxldCBkYXRhOiBJQ29sb3JEYXRhID0ge1xyXG4gICAgICAgICBtYXhDaHJvbWE6IDAsXHJcbiAgICAgICAgIGF2Z0xpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGxpZ2h0ZXN0TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgZGFya2VzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIGF2Z1NoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBsaWdodGVzdFNoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBkYXJrZXN0U2hhZG93Q29sb3I6IG5ldyBnbENvbG9yKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIHRlcm1pbmF0b3JDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIGNhc2Ugd2hlbiB0aGUgdGV4dCB0eXBlIGlzIFVOU0lHTkVEX0JZVEVcclxuICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgZ2wuUkdCQSwgZ2wuRkxPQVQsIHRoaXMucGl4ZWxzKTtcclxuXHJcbiAgICAgIGxldCBudW1MaWdodFBpeGVscyA9IDA7XHJcbiAgICAgIGxldCBudW1TaGFkb3dQaXhlbHMgPSAwO1xyXG4gICAgICBsZXQgbnVtVGVybWluYXRvclBpeGVscyA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gKHJvdyAqIHRoaXMuc2l6ZSArIGNvbCkgKiA0O1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMF07XHJcbiAgICAgICAgICAgIGxldCBnID0gdGhpcy5waXhlbHNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDJdO1xyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMucGl4ZWxzW2luZGV4ICsgM107XHJcblxyXG4gICAgICAgICAgICAvLyBpZ25vcmUgdmFsdWVzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBiYWxsXHJcbiAgICAgICAgICAgIGlmIChhID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXZnID0gKHIgKyBnICsgYikgLyAzO1xyXG4gICAgICAgICAgICBsZXQgY2hyb21hID0gKE1hdGguYWJzKHIgLSBhdmcpICsgTWF0aC5hYnMoZyAtIGF2ZykgKyBNYXRoLmFicyhiIC0gYXZnKSkgLyAoNCAvIDMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNocm9tYSA+IGRhdGEubWF4Q2hyb21hKSB7XHJcbiAgICAgICAgICAgICAgIGRhdGEubWF4Q2hyb21hID0gY2hyb21hO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgZ2xDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBhbHBoYUxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIG51bUxpZ2h0UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RMaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmRhcmtlc3QoZGF0YS5kYXJrZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPT0gYWxwaGFTaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgbnVtU2hhZG93UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID0gZ2xDb2xvci5kYXJrZXN0KGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYSA+IGFscGhhTGlnaHQpIHtcclxuICAgICAgICAgICAgICAgZGF0YS5oaWdobGlnaHRDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5oaWdobGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVybWluYXRvciA9IChhbHBoYUxpZ2h0ICsgYWxwaGFTaGFkb3cpIC8gMi4wO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYSAtIHRlcm1pbmF0b3IpIDwgMC4xKSB7XHJcbiAgICAgICAgICAgICAgIG51bVRlcm1pbmF0b3JQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChudW1MaWdodFBpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLnIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5nIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtU2hhZG93UGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmcgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1UZXJtaW5hdG9yUGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5yIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuYiAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJwb2xhdGVzIGFuZCBhcnJheSBvZiBjb2xvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvclJhbmdlIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSBjb2xvcnNcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29sb3JzOiBodG1sQ29sb3JbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9ycyBUaGUgY29sb3JzIHRvIGludGVycG9sYXRlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG4gICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYW4gaW50ZXJwb2xhdGVkIGNvbG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCh2YWx1ZTogbnVtYmVyKTogaHRtbENvbG9yIHtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKTtcclxuICAgICAgICAgbGV0IHBhcnRpYWwgPSAodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSAtIGluZGV4O1xyXG5cclxuICAgICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5yICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLnIgLSB0aGlzLmNvbG9yc1tpbmRleF0ucikpO1xyXG4gICAgICAgICBsZXQgZyA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLmcgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uZyAtIHRoaXMuY29sb3JzW2luZGV4XS5nKSk7XHJcbiAgICAgICAgIGxldCBiID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uYiArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5iIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmIpKTtcclxuXHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiZXhwb3J0IHR5cGUgTWVudUl0ZW1GdW5jdGlvbiA9ICgpID0+IHZvaWQ7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgcHVibGljIG1lbnVEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICBwdWJsaWMgaWdub3JlRXZlbnQgPSBmYWxzZTtcclxuXHJcbiAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHNob3coKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdEcm9wRG93blNob3cnKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgdGhpcy5tZW51RGl2LmNsYXNzTGlzdC5hZGQoJ0Ryb3BEb3duU2hvdycpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBoaWRlKCkge1xyXG4gICAgICBpZiAodGhpcy5tZW51RGl2LmNsYXNzTGlzdC5jb250YWlucygnRHJvcERvd25TaG93JykpIHtcclxuICAgICAgICAgdGhpcy5tZW51RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ0Ryb3BEb3duU2hvdycpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBhZGRDbG9zZUhhbmRsZXIoKSB7XHJcbiAgICAgIC8vIFRPRE8gb24gdGhlIHBob25lIHRoaXMgZXZlbnQgZG9lcyBub3Qgb2NjdXIgd2hlbiBjbGlja2luZyBvdmVyIHRoZSBjYW52YXNcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICBpZiAodGhpcy5pZ25vcmVFdmVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5pZ25vcmVFdmVudCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcERvd25NZW51IGV4dGVuZHMgTWVudSB7XHJcbiAgIHByaXZhdGUgZHJvcERvd25EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICB0aGlzLmRyb3BEb3duRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuaWQgPSBpZCArICdEcm9wRG93bic7XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuY2xhc3NOYW1lID0gJ0Ryb3BEb3duJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcERvd25EaXYpO1xyXG5cclxuICAgICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbWVudUJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBtZW51QnV0dG9uLmNsYXNzTmFtZSA9ICdEcm9wRG93bkJ1dHRvbic7XHJcbiAgICAgIG1lbnVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy5pZ25vcmVFdmVudCA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcblxyXG4gICAgICBzdXBlci5hZGRDbG9zZUhhbmRsZXIoKTtcclxuXHJcblxyXG4gICAgICB0aGlzLm1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5tZW51RGl2LmNsYXNzTmFtZSA9ICdEcm9wRG93bk1lbnUnO1xyXG4gICAgICB0aGlzLm1lbnVEaXYuaWQgPSBpZCArICdEcm9wRG93bk1lbnUnO1xyXG4gICAgICB0aGlzLmRyb3BEb3duRGl2LmFwcGVuZENoaWxkKHRoaXMubWVudURpdik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhZGRJdGVtKHRleHQ6IHN0cmluZywgY2FsbGJhY2s6IE1lbnVJdGVtRnVuY3Rpb24pIHtcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaXRlbS5pZCA9IHRoaXMuaWQgKyAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhZGRTdWJNZW51KHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZyk6IFN1Yk1lbnUge1xyXG5cclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaXRlbS5pZCA9IHRoaXMuaWQgKyAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgIHN1Yk1lbnUuc2hvdygpO1xyXG4gICAgICAgICBzdWJNZW51Lmlnbm9yZUV2ZW50ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG4gICAgICBsZXQgc3ViTWVudSA9IG5ldyBTdWJNZW51KGl0ZW0sIHRoaXMuZHJvcERvd25EaXYsIGlkKTtcclxuICAgICAgcmV0dXJuIHN1Yk1lbnU7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1Yk1lbnUgZXh0ZW5kcyBNZW51IHtcclxuICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIGRyb3BEb3duRGl2OiBIVE1MRGl2RWxlbWVudCwgaWQ6IHN0cmluZykge1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgIHRoaXMubWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLm1lbnVEaXYuY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIHRoaXMubWVudURpdi5pZCA9IGlkICsgJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIGRyb3BEb3duRGl2LmFwcGVuZENoaWxkKHRoaXMubWVudURpdik7XHJcblxyXG4gICAgICB0aGlzLmFkZENsb3NlSGFuZGxlcigpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYWRkSXRlbSh0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrOiBNZW51SXRlbUZ1bmN0aW9uKSB7XHJcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGl0ZW0uaWQgPSB0aGlzLmlkICsgJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmNsYXNzTmFtZSA9ICdEcm9wRG93bk1lbnVJdGVtJztcclxuICAgICAgaXRlbS5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMuaWdub3JlRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAvLyBUT0RPIHRoZSBnbG9iYWwgaGFuZGxlciBzaG91bGQgZ2V0IHRoaXMgYnV0IGRvZXMgbm90IG9uIHBob25lc1xyXG4gICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgIH1cclxufSIsImV4cG9ydCB0eXBlIFN0YXR1c0Z1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGxldCBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWcocmFkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKDE4MCAvIE1hdGguUEkpICogcmFkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9SYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKE1hdGguUEkgLyAxODApICogZGVnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWl4KHYxOiBudW1iZXIsIHYyOiBudW1iZXIsIG1peDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuIHYxICsgY2xhbXAobWl4LCAwLCAxKSAqICh2MiAtIHYxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgKGEgPT09IHVuZGVmaW5lZCA/ICcnIDogJywnICsgYSkgKyAnKSc7XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBob2xkaW5nIGluZm9ybWF0aW9uIGFib3V0IGEgdHJpYW5nbGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkVHJpYW5nbGUge1xyXG4gICB2ZXJ0aWNlczogZ2xWZWMzW107XHJcbiAgIHB1YmxpYyBpVjA6IG51bWJlcjtcclxuICAgcHVibGljIGlWMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaVYyOiBudW1iZXI7XHJcblxyXG4gICBub3JtYWxzOiBnbFZlYzNbXTtcclxuICAgcHVibGljIGlOMDogbnVtYmVyO1xyXG4gICBwdWJsaWMgaU4xOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpTjI6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICB2ZXJ0aWNlczogZ2xWZWMzW10sIGlWMDogbnVtYmVyLCBpVjE6IG51bWJlciwgaVYyOiBudW1iZXIsXHJcbiAgICAgIG5vcm1hbHM6IGdsVmVjM1tdLCBpTjA/OiBudW1iZXIsIGlOMT86IG51bWJlciwgaU4yPzogbnVtYmVyLFxyXG4gICApIHtcclxuICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgICB0aGlzLmlWMCA9IGlWMDtcclxuICAgICAgdGhpcy5pVjEgPSBpVjE7XHJcbiAgICAgIHRoaXMuaVYyID0gaVYyO1xyXG5cclxuICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgaWYgKGlOMCA9PT0gdW5kZWZpbmVkIHx8IGlOMCA9PT0gLTEpIHtcclxuICAgICAgICAgbGV0IG5vcm1hbCA9IHRoaXMuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWwpO1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm5vcm1hbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgdGhpcy5pTjAgPSBpbmRleDtcclxuICAgICAgICAgdGhpcy5pTjEgPSBpbmRleDtcclxuICAgICAgICAgdGhpcy5pTjIgPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgdGhpcy5pTjAgPSBpTjA7XHJcbiAgICAgICAgIHRoaXMuaU4xID0gaU4xO1xyXG4gICAgICAgICB0aGlzLmlOMiA9IGlOMjtcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIGxldCBuID0gdGhpcy5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgIGxldCBuMCA9IHRoaXMubjA7XHJcbiAgICAgICAgIGxldCBuMSA9IHRoaXMubjE7XHJcbiAgICAgICAgIGxldCBuMiA9IHRoaXMubjI7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4udG9TdHJpbmcoMikpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuMC50b1N0cmluZygyKSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4xLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobjIudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGdldCB2MCgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1t0aGlzLmlWMF07XHJcbiAgIH1cclxuICAgZ2V0IHYxKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMuaVYxXTtcclxuICAgfVxyXG4gICBnZXQgdjIoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbdGhpcy5pVjJdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbjAoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsc1t0aGlzLmlOMF07XHJcbiAgIH1cclxuICAgZ2V0IG4xKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbHNbdGhpcy5pTjFdO1xyXG4gICB9XHJcbiAgIGdldCBuMigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxzW3RoaXMuaU4yXTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueCwgTWF0aC5taW4odGhpcy52MS54LCB0aGlzLnYyLngpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueSwgTWF0aC5taW4odGhpcy52MS55LCB0aGlzLnYyLnkpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueiwgTWF0aC5taW4odGhpcy52MS56LCB0aGlzLnYyLnopKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueCwgTWF0aC5tYXgodGhpcy52MS54LCB0aGlzLnYyLngpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueSwgTWF0aC5tYXgodGhpcy52MS55LCB0aGlzLnYyLnkpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueiwgTWF0aC5tYXgodGhpcy52MS56LCB0aGlzLnYyLnopKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWwoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IGEgPSB0aGlzLnYxLnN1YnRyYWN0KHRoaXMudjApO1xyXG4gICAgICBsZXQgYiA9IHRoaXMudjIuc3VidHJhY3QodGhpcy52MSk7XHJcbiAgICAgIHJldHVybiBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcbn1cclxuIiwiLy8gc3BlY2lmeSBsb2FkZXIgYW5kIG9wdGlvbnMgaGVyZS4gVGhpcyB2YWx1ZSBtdXN0IG1hdGNoIHRoZVxyXG4vLyBjb250ZW50cyBvZiB3b3JrZXIuZC50c1xyXG5pbXBvcnQgTG9hZGVyV29ya2VyIGZyb20gJ3dvcmtlci1sb2FkZXI/bmFtZT1Mb2FkZXJXb3JrZXIud29ya2VyLmpzIS4vTG9hZGVyV29ya2VyJztcclxuXHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IFN0YXR1c0Z1bmN0aW9uLCB0b1JhZCB9IGZyb20gJy4vR2xvYmFscyc7XHJcbmltcG9ydCB7IGdsT2JqZWN0IH0gZnJvbSAnLi9nbE9iamVjdCc7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGRvaW5nIHRoZSB3b3JrIG9mIGxvYWRpbmcgYSBmaWxlIGludG8gYSBnbE9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1vZGVsTG9hZGVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgV2ViV29ya2VyIHRoYXQgZG9lcyB0aGUgZG93bmxvYWQgYW5kIHByb2Nlc3NpbmdcclxuICAgICovXHJcbiAgIHByaXZhdGUgd29ya2VyOiBMb2FkZXJXb3JrZXI7XHJcblxyXG4gICAvKipcclxuICAgICogTG9hZHMgYSBmaWxlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZmlsZSBUaGUgZmlsZSB1cmwgdG8gbG9hZFxyXG4gICAgKiBAcGFyYW0gdXBkYXRlU3RhdHVzIENhbGxiYWNrIHRoYXQgaXMgbm90aWZpZWQgb2YgcHJvZ3Jlc3NcclxuICAgICogQHJldHVybnMgVHJpYW5nbGVPYmogcHJvbWlzZVxyXG4gICAgKi9cclxuICAgcHVibGljIGxvYWRNb2RlbEZpbGUoZmlsZTogc3RyaW5nLCB1cGRhdGVTdGF0dXM6IFN0YXR1c0Z1bmN0aW9uKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFRyaWFuZ2xlT2JqPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAvLyBpZiBhIHByZXZpb3VzIHdvcmtlciBleGlzdHMsIGNsb3NlIGl0XHJcbiAgICAgICAgIGlmICh0aGlzLndvcmtlcikge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMud29ya2VyID0gbmV3IExvYWRlcldvcmtlcigpO1xyXG4gICAgICAgICBsZXQgdFN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgdGhpcy53b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9OiB7IGRhdGE6IGFueSB9KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGF2b2lkIGZsYXNoaW5nIG1lc3NhZ2VzIGZvciB0aGluZ3MgdGhhdCBoYXBwZW4gdmVyeSBxdWlja2x5LlxyXG4gICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRTdGFydCA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0dXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IHRPYmogPSBUcmlhbmdsZU9iai5mcm9tRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgIHVwZGF0ZVN0YXR1cygnJyk7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLndvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgdGhpcy53b3JrZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICByZXNvbHZlKHRPYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgICB0aGlzLndvcmtlci5wb3N0TWVzc2FnZShmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcmllbnQobW9kZWw6IGdsT2JqZWN0KSB7XHJcblxyXG4gICAgICAvLyBvcmllbnQgZWFjaCBmaWxlIHNvIHRoYXQgaXQgaXMgZmFjaW5nIGZvcndhcmRcclxuICAgICAgbGV0IG5hbWUgPSBtb2RlbC5uYW1lLnNwbGl0KCcuJylbMF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgIGNhc2UgJ3NrdWxsMSc6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFgodG9SYWQoOTApKTtcclxuICAgICAgICAgICAgbW9kZWwucm90WSh0b1JhZCgxODApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdwZWx2aXMnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDExKSk7XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFoodG9SYWQoLTg3KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAnd29sZic6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoLTE0MCkpO1xyXG4gICAgICAgICAgICBtb2RlbC5yb3RYKHRvUmFkKDUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdzaGVlcGhlYWQnOlxyXG4gICAgICAgICAgICBtb2RlbC5yb3RZKHRvUmFkKC0xNjApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdwb3NlMSc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAndGVhcG90JzpcclxuICAgICAgICAgICAgbW9kZWwucm90WSh0b1JhZCg5MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIG1vZGVsLnJvdFkodG9SYWQoMTgwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IERyb3BEb3duTWVudSwgU3ViTWVudSB9IGZyb20gXCIuL0Ryb3BEb3duTWVudVwiO1xyXG5cclxudHlwZSBMb2FkTW9kZWxGdW5jdGlvbiA9IChmaWxlOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZWxzRHJvcERvd25NZW51KHBhcmVudDogSFRNTEVsZW1lbnQsIGxvYWRNb2RlbDogTG9hZE1vZGVsRnVuY3Rpb24pOiBEcm9wRG93bk1lbnUge1xyXG5cclxuICAgbGV0IHN1Yk1lbnU6IFN1Yk1lbnU7XHJcbiAgIGxldCBtZW51ID0gbmV3IERyb3BEb3duTWVudShwYXJlbnQsICdNb2RlbHMnLCAnTW9kZWxEcm9wRG93bicpO1xyXG4gICBtZW51LmFkZEl0ZW0oJ0ZlbWFsZSBQb3NlJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlMS5ibG9iJykpO1xyXG4gICBtZW51LmFkZEl0ZW0oJ0ZlbWFsZSBIZWFkJywgKCkgPT4gbG9hZE1vZGVsKCdGZW1hbGVIZWFkLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMScsICgpID0+IGxvYWRNb2RlbCgnU2t1bGwxLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMicsICgpID0+IGxvYWRNb2RlbCgnU2t1bGwyLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMycsICgpID0+IGxvYWRNb2RlbCgnU2t1bGwzLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnUGVsdmlzJywgKCkgPT4gbG9hZE1vZGVsKCdQZWx2aXMuYmxvYicpKTtcclxuICAgbWVudS5hZGRJdGVtKCdIZWFkIEVjb3JjaGUnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWRFY29yY2hlLmJsb2InKSk7XHJcbiAgIG1lbnUuYWRkSXRlbSgnQXJub2xkJywgKCkgPT4gbG9hZE1vZGVsKCdBcm5vbGQuYmxvYicpKTtcclxuICAgbWVudS5hZGRJdGVtKCdUZWFwb3QnLCAoKSA9PiBsb2FkTW9kZWwoJ1RlYXBvdC5ibG9iJykpO1xyXG5cclxuICAgc3ViTWVudSA9IG1lbnUuYWRkU3ViTWVudSgnUG9zZXMnLCAnSGVhZHNTdWJNZW51Jyk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAyJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAzJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAzLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA0JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA0LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA1JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA2JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA2LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA3JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA3LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA4JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA4LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA5JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzA5LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMCcsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTAuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDExJywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxMS5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTInLCAoKSA9PiBsb2FkTW9kZWwoJ1Bvc2VfMDEyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMycsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTMuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDE0JywgKCkgPT4gbG9hZE1vZGVsKCdQb3NlXzAxNC5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTUnLCAoKSA9PiBsb2FkTW9kZWwoJ1Bvc2VfMDE1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxNicsICgpID0+IGxvYWRNb2RlbCgnUG9zZV8wMTYuYmxvYicpKTtcclxuXHJcbiAgIHN1Yk1lbnUgPSBtZW51LmFkZFN1Yk1lbnUoJ0hlYWRzJywgJ0hlYWRzU3ViTWVudScpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgMScsICgpID0+IGxvYWRNb2RlbCgnSGVhZDEuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDInLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQyLmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCAzJywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkMy5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgNCcsICgpID0+IGxvYWRNb2RlbCgnSGVhZDQuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDUnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQ1LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA2JywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkNi5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgNycsICgpID0+IGxvYWRNb2RlbCgnSGVhZDcuYmxvYicpKTtcclxuICAgc3ViTWVudS5hZGRJdGVtKCdIZWFkIDgnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQ4LmJsb2InKSk7XHJcbiAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA5JywgKCkgPT4gbG9hZE1vZGVsKCdIZWFkOS5ibG9iJykpO1xyXG4gICBzdWJNZW51LmFkZEl0ZW0oJ0hlYWQgMTAnLCAoKSA9PiBsb2FkTW9kZWwoJ0hlYWQxMC5ibG9iJykpO1xyXG5cclxuICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgUGF0aFRyYWNlclJlbmRlcmVyLCBSZW5kZXJNb2RlIH0gZnJvbSBcIi4vUGF0aFRyYWNlclJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSBcIi4vVW5pZm9ybXNcIjtcclxuaW1wb3J0IHsgU3BoZXJpY2FsQ29vcmQgfSBmcm9tIFwiLi9TcGhlcmljYWxDb29yZFwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUgfSBmcm9tIFwiLi9nbENvbG9yV2l0aFRlbXBlcmF0dXJlXCI7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlU3BoZXJlIH0gZnJvbSBcIi4vVHJpYW5nbGVTcGhlcmVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVDdWJlIH0gZnJvbSBcIi4vVHJpYW5nbGVDdWJlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqRmlsZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqRmlsZVwiO1xyXG5cclxubGV0IHNraW5Ub25lcyA9IFtcclxuICAgbmV3IGh0bWxDb2xvcihbMjQwLCAyMjMsIDIxNF0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsyNTUsIDIxOCwgMjAwXSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzIzMiwgMTc5LCAxMTddKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTkwLCAxMzYsIDg3XSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTE1LCA5MSwgNTldKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTM5LCA3MywgNjVdKVxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzEzMiwgNTUsIDM0XSksXHJcbiAgIC8vbmV3IGh0bWxDb2xvcihbNjEsIDEyLCAyXSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMzgsIDcsIDFdKVxyXG5dO1xyXG5cclxuZW51bSBQb2ludGVyTW9kZSB7XHJcbiAgIFZpZXcsXHJcbiAgIExpZ2h0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aFRyYWNlckFwcCB7XHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFBhdGhUcmFjZXJSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXc6IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGVTcGVjaWFsID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgcG9zOiBTcGhlcmljYWxDb29yZDtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgcHJpdmF0ZSBpbnRlbnNpdHlTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBsaWdodENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYmFsbENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYW1iaWVudEludGVuc2l0eVNsaWRlcjogU2xpZGVyO1xyXG5cclxuICAgcHJpdmF0ZSBhbmdsZVggPSAwLjU7XHJcbiAgIHByaXZhdGUgYW5nbGVZID0gMC43NTtcclxuICAgcHJpdmF0ZSB6b29tWiA9IDMuNTtcclxuXHJcbiAgIHByaXZhdGUgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgb2xkWDogbnVtYmVyO1xyXG4gICBwcml2YXRlIG9sZFk6IG51bWJlcjtcclxuXHJcbiAgIHByaXZhdGUgbGFzdFRpbWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IE1BWF9TQU1QTEVTID0gNTAwO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgbGV0IGNvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nbCA9IGNvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoc3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaG1vdmUgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5vbk1vdmUoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoZW5kID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Eb3duKGV2ZW50LngsIGV2ZW50LnkpO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Nb3ZlKGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNldXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRNb2RlbCh0aGlzLnF1ZXJ5KS50aGVuKCh0T2JqOiBUcmlhbmdsZU9iaikgPT4ge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBhdGhUcmFjZXJSZW5kZXJlcih0aGlzLmdsLCB0T2JqKTtcclxuICAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IGRyYXdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRyYXdUaW1lLmlkID0gJ2RyYXdUaW1lJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUaW1lKTtcclxuXHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBidXR0b24uaWQgPSAnbW9kZUJ1dHRvbic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyc7XHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgc3dpdGNoICh0aGlzLnBvaW50ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuVmlldzpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdMaWdodCc7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5MaWdodDtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLkxpZ2h0OlxyXG4gICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICAgIGxldCBwcm9ncmVzc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHByb2dyZXNzU3Bhbi5pZCA9ICdwcm9ncmVzc1NwYW4nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NTcGFuKTtcclxuXHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0SW50ZW5zaXR5JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBJbnRlbnNpdHknLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ID0gdGhpcy5pbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gYnVpbGQgYSByYW5nZSBvZiBjb2xvcnNcclxuICAgICAgbGV0IG1pbiA9IDIwMDA7XHJcbiAgICAgIGxldCBtYXggPSAxMDAwMDtcclxuICAgICAgbGV0IGNvbG9yczogaHRtbENvbG9yW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ZW1wID0gbWluICsgKGkgLyA5KSAqIChtYXggLSBtaW4pO1xyXG4gICAgICAgICBjb2xvcnMucHVzaChnbENvbG9yV2l0aFRlbXBlcmF0dXJlLmNyZWF0ZSh0ZW1wKS50b0h0bWxDb2xvcigpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0Q29sb3InLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0IENvbG9yJyxcclxuICAgICAgICAgbWluOiAyMDAwLFxyXG4gICAgICAgICBtYXg6IDEwMDAwLFxyXG4gICAgICAgICB2YWx1ZTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS5kYXlsaWdodC50ZW1wZXJhdHVyZSxcclxuICAgICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4geyByZXR1cm4gc2xpZGVyLnZhbHVlLnRvRml4ZWQoKSArIFwiS1wiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBhcHBseSB0aGUgaW5pdGlhbCBjb2xvcnNcclxuICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcblxyXG4gICAgICB0aGlzLmJhbGxDb2xvclNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQmFsbENvbG9yJyxcclxuICAgICAgICAgbGFiZWw6ICdCYWxsIENvbG9yJyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IDUwLFxyXG4gICAgICAgICBjb2xvcnM6IHNraW5Ub25lcyxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICBVbmlmb3Jtcy51T2JqQ29sb3IgPSB0aGlzLmJhbGxDb2xvclNsaWRlci5nbENvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBnbCBtYXRjaGVzIHRoZSBpbml0aWFsIFVJIHNldHRpbmdcclxuICAgICAgVW5pZm9ybXMudU9iakNvbG9yID0gdGhpcy5iYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuXHJcbiAgICAgIHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQW1iaWVudEludGVuc2l0eScsXHJcbiAgICAgICAgIGxhYmVsOiAnQW1iaWVudCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSA9IHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGxvYWRNb2RlbChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3RyaWFuZ2xlc3BoZXJlJykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSAwLjU7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCByYWRpdXMsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVTcGhlcmUoOCwgcmFkaXVzLCBjZW50ZXIpO1xyXG4gICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVjdWJlJykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIGxldCBzaXplID0gMC44O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgc2l6ZSAvIDIuMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZUN1YmUoc2l6ZSwgY2VudGVyKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcub2JqJykpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICByZXR1cm4gZmV0Y2gocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iakZpbGUocXVlcnksIHJlcyk7XHJcbiAgICAgICAgICAgICAgIGxldCBzaXplID0gMS41O1xyXG4gICAgICAgICAgICAgICB0T2JqLmF1dG9DZW50ZXIoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgIHRPYmoudHJhbnNsYXRlKG5ldyBnbFZlYzMoWzAsIHRPYmouaGVpZ2h0IC8gMiwgMF0pKTtcclxuICAgICAgICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgICAgICAgIHJldHVybiB0T2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldExpZ2h0Q29sb3IoKSB7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIGNvbG9ycyBmb3IgdGhlIGludGVuc2l0eSBzbGlkZXJcclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIuY29sb3JzID0gW2h0bWxDb2xvci5ibGFjaywgdGhpcy5saWdodENvbG9yU2xpZGVyLmh0bWxDb2xvcl07XHJcblxyXG4gICAgICAvLyB1c2UgdGhlIHZhbHVlIGluIHJlbmRlcmluZ1xyXG4gICAgICBVbmlmb3Jtcy51TGlnaHRDb2xvciA9IHRoaXMubGlnaHRDb2xvclNsaWRlci5nbENvbG9yO1xyXG5cclxuICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Eb3duKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGljayh4LCB5KSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCA9ICh4IDwgMC4xICogdGhpcy5jYW52YXMud2lkdGgpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgdGhpcy5vbGRZID0geTtcclxuXHJcbiAgICAgIHRoaXMucG9zID0gU3BoZXJpY2FsQ29vcmQuZnJvbVhZWihVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzKTtcclxuXHJcbiAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XHJcbiAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnpvb21aIC09ICh5IC0gdGhpcy5vbGRZKSAqIDAuMDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogPSBjbGFtcCh0aGlzLnpvb21aLCAxLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVkgLT0gKHggLSB0aGlzLm9sZFgpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggKz0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGRvbid0IGdvIHVwc2lkZSBkb3duXHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5tYXgodGhpcy5hbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCA9IE1hdGgubWluKHRoaXMuYW5nbGVYLCBNYXRoLlBJIC8gMiAtIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yYWRpdXMgLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyA9IGNsYW1wKHRoaXMucG9zLnJhZGl1cywgVW5pZm9ybXMudUJhbGxSYWRpdXMgKyAwLjUsIDUpO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3Mucm90YXRpb25BbmdsZSArPSAoeCAtIHRoaXMub2xkWCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlICs9ICh5IC0gdGhpcy5vbGRZKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgPSBjbGFtcCh0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSwgMCwgMTgwKTtcclxuICAgICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0UG9zLnZhbHVlcyA9IHRoaXMucG9zLnRvWFlaKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gY2xlYXIgdGhlIHNhbXBsZSBidWZmZXJcclxuICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAvLyByZW1lbWJlciB0aGlzIGNvb3JkaW5hdGVcclxuICAgICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgICAgdGhpcy5vbGRZID0geTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuIElmIGEgaGl0XHJcbiAgICAqIG9jY3VycywgdGhlIGNsaWNrZWQgb24gdmlldyBpcyBzd2FwcGVkIGZvciB0aGUgcHJpbWFyeSB2aWV3IGFuZCB0cnVlXHJcbiAgICAqIGlzIHJldHVybmVkLiBJZiBubyBoaXQgb2NjdXJzLCBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUuXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUuXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIHRoaXMgd2l0aGluIHRoZSBQYXRoVHJhY2VyIGNsYXNzIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBoYXJkIGNvZGUgdmlldyBzdHVmZlxyXG4gICAgICBsZXQgc2l6ZSA9IDAuMiAqIHRoaXMuY2FudmFzLndpZHRoO1xyXG5cclxuICAgICAgaWYgKHkgPCBzaXplKSB7XHJcblxyXG4gICAgICAgICBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMSAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDIgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAzICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgc3dpdGNoICh0aGlzLnJlbmRlcmVyLnJlbmRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkFydGlzdDpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQ2hyb21hOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkNocm9tYSBWaWV3OiByZWQ9aGlnaGVzdCBjaHJvbWFcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuVmFsdWU6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVmFsdWUgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5CYW5kczpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCI1IENvbG9yICsgSGlnaGxpZ2h0IFZpZXdcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUZXh0dXJlKCkge1xyXG4gICAgICB0aGlzLm1vZGVsdmlldyA9IGdsTWF0NC5tYWtlTG9va0F0KFxyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSksICAvLyBjZW50ZXIgcG9pbnRcclxuICAgICAgICAgbmV3IGdsVmVjMyhbMCwgMSwgMF0pICAgLy8gdXAgdmVjdG9yXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb24gPSBnbE1hdDQubWFrZVBlcnNwZWN0aXZlKDU1LCAxLCAwLjEsIDEwMCk7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdGlvbi5tdWx0TSh0aGlzLm1vZGVsdmlldyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudXBkYXRlVGV4dHVyZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24pO1xyXG4gICB9O1xyXG5cclxuICAgcHJpdmF0ZSBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc3dhcChwb3MpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdGljaygpIHtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgIGlmIChVbmlmb3Jtcy51U2FtcGxlIDwgdGhpcy5NQVhfU0FNUExFUykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1swXSA9IHRoaXMuem9vbVogKiBNYXRoLnNpbih0aGlzLmFuZ2xlWSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWCk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzFdID0gdGhpcy56b29tWiAqIE1hdGguc2luKHRoaXMuYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMl0gPSB0aGlzLnpvb21aICogTWF0aC5jb3ModGhpcy5hbmdsZVkpICogTWF0aC5jb3ModGhpcy5hbmdsZVgpO1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUaW1lckxhYmVsKCkge1xyXG5cclxuICAgICAgbGV0IHQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIGxldCBkcmF3VGltZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdUaW1lJyk7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RUaW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIGxldCBlbGFwc2VkTXMgPSAodCAtIHRoaXMubGFzdFRpbWVzWzBdKSAvIHRoaXMubGFzdFRpbWVzLmxlbmd0aDtcclxuICAgICAgICAgZHJhd1RpbWVMYWJlbC5pbm5lclRleHQgPSBlbGFwc2VkTXMudG9GaXhlZCgwKSArICdtcyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0VGltZXMucHVzaCh0KTtcclxuICAgICAgaWYgKHRoaXMubGFzdFRpbWVzLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgIHRoaXMubGFzdFRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyYXdUaW1lTGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9IFVuaWZvcm1zLnVTYW1wbGUgPCB0aGlzLk1BWF9TQU1QTEVTID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IFVuaWZvcm1zLnVTYW1wbGUgLyB0aGlzLk1BWF9TQU1QTEVTO1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc1NwYW4nKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgIGxldCB3ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUucmlnaHQgPSB3ICogKDEgLSBwcm9ncmVzcykgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdsTWF0NCB9IGZyb20gJy4vZ2xNYXQnO1xyXG5pbXBvcnQgeyBnbFZlYzMsIGdsVmVjNCB9IGZyb20gJy4vZ2xWZWMnO1xyXG5pbXBvcnQgdG9TY3JlZW5WZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsJztcclxuaW1wb3J0IHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlbkZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlVmVydGV4U291cmNlIGZyb20gJy4vc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gJy4vQ29sb3JSYW5nZSc7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSAnLi9Vbmlmb3Jtcyc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi9HbG9iYWxzJztcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tICcuL1Byb2ZpbGVyJztcclxuaW1wb3J0IHsgZ2xVbmlmb3JtIH0gZnJvbSAnLi9nbFVuaWZvcm0nO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuaW1wb3J0IHsgQ29sb3JBbmFseXplciB9IGZyb20gJy4vQ29sb3JBbmFseXplcic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IGdsVW5pZm9ybUJsb2NrIH0gZnJvbSAnLi9nbFVuaWZvcm1CbG9jayc7XHJcblxyXG4vKipcclxuICogUmVuZGVyaW5nIG1vZGUgZm9yIGRpc3BsYXlpbmcgdGhlIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlbmRlck1vZGUge1xyXG4gICBBcnRpc3QgPSAwLFxyXG4gICBWYWx1ZSA9IDEsXHJcbiAgIENocm9tYSA9IDIsXHJcbiAgIEJhbmRzID0gMyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgZG9lcyB0aGUgd29yayBvZiBidWlsZGluZyB0aGUgUGF0aCBUcmFjZWQgdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXJSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVzOiBXZWJHTFRleHR1cmVbXTtcclxuICAgcHJpdmF0ZSB0b1NjcmVlblByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB0b1NjcmVlblZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB0b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBhbmFseXplcjogQ29sb3JBbmFseXplcjtcclxuXHJcbiAgIHByaXZhdGUgbWFpblZpZXcgPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgcHJpdmF0ZSBzbWFsbFZpZXdzID0gW1xyXG4gICAgICBSZW5kZXJNb2RlLkNocm9tYSxcclxuICAgICAgUmVuZGVyTW9kZS5WYWx1ZSxcclxuICAgICAgUmVuZGVyTW9kZS5CYW5kcyxcclxuICAgXTtcclxuXHJcbiAgIHByaXZhdGUgdmVydGljZXMgPSBbXHJcbiAgICAgIC0xLCAtMSxcclxuICAgICAgLTEsICsxLFxyXG4gICAgICArMSwgLTEsXHJcbiAgICAgICsxLCArMVxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgdE9iajogVHJpYW5nbGVPYmpcclxuICAgKSB7XHJcblxyXG4gICAgICB0aGlzLmdsID0gZ2xDdHg7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAvLyBsYXJnZXIgdGV4dHVyZSBpcyBoaWdoZXIgcmVzb2x1dGlvbiwgYnV0IHRha2VzIGxvbmdlciB0byBjb21wdXRlXHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSAyNTY7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDUxMjtcclxuICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplID0gMjU2O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5hbHl6ZXIgPSBuZXcgQ29sb3JBbmFseXplcihVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHZlcnRleCBidWZmZXIgLSB0aGUgYmxvY2sgd2UnbGwgZHJhdyBvdXIgcmVuZGVyZWQgdGV4dHVyZSBvblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGZyYW1lYnVmZmVyXHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgbGV0IGludGVybmFsRm9ybWF0OiBudW1iZXI7XHJcbiAgICAgIGxldCBmb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IHR5cGU6IG51bWJlcjtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0dXJlc1xyXG4gICAgICBpZiAoZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgbGV0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcpO1xyXG4gICAgICAgICBpZiAoZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIFRoYW5rcyBBcHBsZS4gQWx3YXlzIGdvdCB0byBkbyB0aGluZ3MgYSBsaXR0bGUgZGlmZmVyZW50bHlcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZXh0LkhBTEZfRkxPQVRfT0VTO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyBmbG9hdGluZyBwb2ludCB0ZXh0dXJlcz8gcmVhbGx5IGZhbGwgYmFjayB0byB1bnNpZ25lZCBieXRlc1xyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBsZXQgeW91IGRvIGFuICdlbHNlIGlmJyBoZXJlIGFuZCB3aGVuIFdlYkdMMiBpc1xyXG4gICAgICAvLyBub3Qgc3VwcG9ydGVkLCB3ZSBnZXQgYW4gZXhjZXB0aW9uLCBzbyB0aHVzIHRoZSB0cnktY2F0Y2hcclxuICAgICAgLy8gc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTM4MTEyMi90eXBlc2NyaXB0LXR5cGUtbmFycm93ZWQtdG8tbmV2ZXItd2l0aC1pbnN0YW5jZW9mLWluLWFuLWlmLWVsc2Utc3RhdGVtZW50XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgICAgZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTMyRjtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLkZMT0FUXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKGdsLmNyZWF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbaV0pO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0LCAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyB3aWR0aFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyBoZWlnaHRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgICAgIGZvcm1hdCwgICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICAgICB0eXBlLCAgICAgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRvU2NyZWVuIHNoYWRlclxyXG4gICAgICB0aGlzLnRvU2NyZWVuUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShnbCwgdG9TY3JlZW5WZXJ0ZXhTb3VyY2UsIHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnRvU2NyZWVuVmVydGV4QXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy50b1NjcmVlblByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICB0aGlzLmNvbXBpbGVTaGFkZXIodE9iaik7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29tcGlsZVNoYWRlcih0T2JqPzogVHJpYW5nbGVPYmopIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdG9UZXh0dXJlIHNoYWRlclxyXG4gICAgICBpZiAodE9iaiAmJiB0T2JqLnRyaWFuZ2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgZ2wsXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZVZlcnRleFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJyN2ZXJzaW9uIDMwMCBlcycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCdOT1RISU5HJywgJ1VTRV9UUklBTkdMRVMnKSxcclxuICAgICAgICAgICAgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcjdmVyc2lvbiAzMDAgZXMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnTk9USElORycsICdVU0VfVFJJQU5HTEVTJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVkVSVElDRVM+JywgdE9iai52ZXJ0aWNlcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVk9MVU1FUz4nLCB0T2JqLnZvbHVtZXMubGVuZ3RoLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8TlVNX1RSSUFOR0xFUz4nLCB0T2JqLnRyaWFuZ2xlcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8vIHVwbG9hZCB0cmlhbmdsZXMgdG8gdGhlIEdQVVxyXG4gICAgICAgICB0aGlzLnVwbG9hZFVuaWZvcm1zKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnRvVGV4dHVyZVByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoXHJcbiAgICAgICAgICAgIGdsLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVWZXJ0ZXhTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcnKSxcclxuICAgICAgICAgICAgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcnKVxyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudG9UZXh0dXJlVmVydGV4QXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy50b1RleHR1cmVQcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudG9UZXh0dXJlVmVydGV4QXR0cmlidXRlKTtcclxuICAgICAgcC5sb2coJ2NvbXBpbGUnKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFVwbG9hZHMgYWxsIHRoZSB0cmlhbmdsZSBkYXRhIHRvIFdlYkdMXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcHJvZ3JhbSBUaGUgcHJvZ3JhbSB0byB1cGxvYWQgdG9cclxuICAgICovXHJcbiAgIHByaXZhdGUgdXBsb2FkVW5pZm9ybXModE9iajogVHJpYW5nbGVPYmopIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2wgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICAgIC8vIHVwbG9hZCB0aGUgYmlnIGNodW5rcyBhcyBVbmlmb3JtIEJsb2Nrc1xyXG4gICAgICBsZXQgYmxvY2tCaW5kaW5nID0gMjtcclxuICAgICAgbGV0IHZCbG9jayA9IG5ldyBnbFVuaWZvcm1CbG9jayhnbCwgdGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlWZXJ0aWNlc0Jsb2NrJywgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIC8vIHB1dCB0aGUgZGF0YSBpbnRvIGEgRmxvYXQzMkFycmF5IGZvciB1cGxvYWRpbmdcclxuICAgICAgbGV0IHZEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0T2JqLnZlcnRpY2VzLmxlbmd0aCAqIDQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0T2JqLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDBdID0gdi54O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDFdID0gdi55O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDJdID0gdi56O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDNdID0gMDtcclxuICAgICAgfVxyXG4gICAgICB2QmxvY2sudXBsb2FkKHZEYXRhKTtcclxuXHJcbiAgICAgIGJsb2NrQmluZGluZyA9IDM7XHJcbiAgICAgIGxldCB0QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2soZ2wsIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ015VHJpYW5nbGVzQmxvY2snLCBibG9ja0JpbmRpbmcpO1xyXG5cclxuICAgICAgLy8gcHV0IHRoZSBkYXRhIGludG8gYSBGbG9hdDMyQXJyYXkgZm9yIHVwbG9hZGluZ1xyXG4gICAgICBsZXQgdERhdGEgPSBuZXcgSW50MzJBcnJheSh0T2JqLnRyaWFuZ2xlcy5sZW5ndGggKiA0KTtcclxuICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCB0T2JqLnZvbHVtZXMubGVuZ3RoOyB2KyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRPYmoudm9sdW1lc1t2XTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2b2wudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdm9sLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMDtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMTtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMjtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdEJsb2NrLnVwbG9hZCh0RGF0YSk7XHJcblxyXG4gICAgICAvLyBVcGxvYWQgdGhlIHZvbHVtZSBpbmZvIGFzIGEgc3RhbmRhcmQgdW5pZm9ybVxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybShnbCwgdGhpcy50b1RleHR1cmVQcm9ncmFtKTtcclxuICAgICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudm9sdW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdE9iai52b2x1bWVzW2ldO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLnN0YXJ0SW5kZXgnLCBzdGFydEluZGV4LCB0cnVlKTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5udW1UcmlhbmdsZXMnLCB2b2wudHJpYW5nbGVzLmxlbmd0aCwgdHJ1ZSk7XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10uYm94TWluJywgdm9sLmJveE1pbik7XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10uYm94TWF4Jywgdm9sLmJveE1heCk7XHJcbiAgICAgICAgIHN0YXJ0SW5kZXggKz0gdm9sLnRyaWFuZ2xlcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgdW5pLnNldCgnb2JqZWN0LmJveE1pbicsIHRPYmouYm94TWluKTtcclxuICAgICAgdW5pLnNldCgnb2JqZWN0LmJveE1heCcsIHRPYmouYm94TWF4KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCByZW5kZXJNb2RlKCk6IFJlbmRlck1vZGUge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYWluVmlldztcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIFVuaWZvcm1zLnVTYW1wbGUgPSAwO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldEV5ZVJheShtYXRyaXg6IGdsTWF0NCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgdmVjID0gbmV3IGdsVmVjNChbeCwgeSwgMCwgMV0pO1xyXG4gICAgICByZXR1cm4gbWF0cml4Lm11bHRWKHZlYykuZGl2aWRlQnlXKCkuc3VidHJhY3QoVW5pZm9ybXMudUV5ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGRhdGVUZXh0dXJlKG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NCk6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBhbGlhc2luZyBieSByYW5kb20gc2FtcGxpbmcgd2l0aGluIGEgcGl4ZWxcclxuICAgICAgbGV0IHggPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHkgPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHogPSAwO1xyXG5cclxuICAgICAgbGV0IHYgPSBuZXcgZ2xWZWMzKFt4LCB5LCB6XSk7XHJcbiAgICAgIGxldCBqaXR0ZXIgPSBnbE1hdDQuZnJvbVRyYW5zbGF0aW9uKHYpO1xyXG4gICAgICBsZXQgbWF0cml4ID0gaml0dGVyLm11bHRNKG1vZGVsdmlld1Byb2plY3Rpb24pLmludmVyc2UoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMCA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTAxID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCAtMSwgKzEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTAgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsICsxLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMSA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsICsxKTtcclxuICAgICAgLy8gc2V0IHVuaWZvcm1zXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKGdsLCB0aGlzLnRvVGV4dHVyZVByb2dyYW0pO1xyXG4gICAgICB1bmkuc2V0QWxsKFVuaWZvcm1zKTtcclxuXHJcbiAgICAgIC8vIHJlbmRlciB0byB0ZXh0dXJlXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgVW5pZm9ybXMudVRleHR1cmVTaXplKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1swXSk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1sxXSwgMCk7XHJcblxyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9UZXh0dXJlVmVydGV4QXR0cmlidXRlLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuYW5hbHl6ZXIucnVuKGdsLCBVbmlmb3Jtcy51TGlnaHRBbHBoYSwgVW5pZm9ybXMudVNoYWRvd0FscGhhKTtcclxuICAgICAgVW5pZm9ybXMudU1heENocm9tYSA9IGRhdGEubWF4Q2hyb21hO1xyXG5cclxuICAgICAgbGV0IGNyID0gbmV3IENvbG9yUmFuZ2UoW2RhdGEuZGFya2VzdExpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdMaWdodENvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEubGlnaHRlc3RMaWdodENvbG9yLnRvSHRtbENvbG9yKCldKTtcclxuICAgICAgVW5pZm9ybXMudUhpZ2hsaWdodENvbG9yID0gZGF0YS5oaWdobGlnaHRDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudUxpZ2h0TGlnaHRDb2xvciA9IGNyLmdldCgwLjg1KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudU1pZExpZ2h0Q29sb3IgPSBjci5nZXQoMC41KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtMaWdodENvbG9yID0gY3IuZ2V0KDAuMTUpLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgY3IgPSBuZXcgQ29sb3JSYW5nZShbZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKV0pO1xyXG4gICAgICAvL1VuaWZvcm1zLnVTaGFkb3dDb2xvciA9IGRhdGEudGVybWluYXRvckNvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51U2hhZG93Q29sb3IgPSBkYXRhLmF2Z1NoYWRvd0NvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51UmVmbGVjdGVkTGlnaHRDb2xvciA9IGNyLmdldCgxKS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtBY2NlbnRDb2xvciA9IGNyLmdldCgwLjApLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIHBpbmcgcG9uZyB0ZXh0dXJlc1xyXG4gICAgICB0aGlzLnRleHR1cmVzLnJldmVyc2UoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVTYW1wbGUrKztcclxuICAgICAgVW5pZm9ybXMudVJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgZGlzcGxheVRleHR1cmUoKTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgLy8gc2l6ZSBvZiB0aGUgYWN0dWFsIGNhbnZhcy4gVGhlIHRleHR1cmUgd2UgY3JlYXRlIGlzIGRyYXduIHRvIHRoaXMgaXRlbVxyXG4gICAgICBsZXQgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIC8vIG5vdCBzdXJlIHdoeSwgYnV0IHRoaXMgYmFzaWNhbGx5IGJlY29tZXMgZnVsbCB3aWR0aCBvbiBteSBwaG9uZVxyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBtYWluIHNjcmVlblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybShnbCwgdGhpcy50b1NjcmVlblByb2dyYW0pO1xyXG4gICAgICBVbmlmb3Jtcy51U2NhbGUgPSAxLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVYT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBVbmlmb3Jtcy51WU9mZnNldCA9IDAuMDtcclxuICAgICAgVW5pZm9ybXMudU1vZGUgPSB0aGlzLm1haW5WaWV3O1xyXG4gICAgICB1bmkuc2V0QWxsKFVuaWZvcm1zKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBzbWFsbGVyIHZpZXdzXHJcbiAgICAgIFVuaWZvcm1zLnVTY2FsZSA9IDAuMjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNtYWxsVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgVW5pZm9ybXMudVhPZmZzZXQgPSAxLjAgLSAodGhpcy5zbWFsbFZpZXdzLmxlbmd0aCAtIGkgLSAwLjUpICogKDIgKiBVbmlmb3Jtcy51U2NhbGUpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51WU9mZnNldCA9IDEuMCAtIFVuaWZvcm1zLnVTY2FsZTtcclxuICAgICAgICAgVW5pZm9ybXMudU1vZGUgPSB0aGlzLnNtYWxsVmlld3NbaV07XHJcbiAgICAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG4gICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3dhcChwb3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnNtYWxsVmlld3MgPSBbXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICAgICBdO1xyXG4gICAgICBpZiAodGhpcy5tYWluVmlldyA9PSB0aGlzLnNtYWxsVmlld3NbcG9zXSkge1xyXG4gICAgICAgICB0aGlzLm1haW5WaWV3ID0gUmVuZGVyTW9kZS5BcnRpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMubWFpblZpZXcgPSB0aGlzLnNtYWxsVmlld3NbcG9zXTtcclxuICAgICAgICAgdGhpcy5zbWFsbFZpZXdzW3Bvc10gPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCI7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyB0b1JhZCwgaXNNb2JpbGUgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFBsYW5lc1JlbmRlcmVyIH0gZnJvbSBcIi4vUGxhbmVzUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2xWZWM0LCBnbFZlYzIgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBOb3JtYWxUeXBlLCBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFRocmVzaG9sZEN0cmwgfSBmcm9tIFwiLi9UaHJlc2hvbGRDdHJsXCI7XHJcbmltcG9ydCB7IFBvaW50ZXJFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9Qb2ludGVyRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVNb2RlbHNEcm9wRG93bk1lbnUgfSBmcm9tIFwiLi9Nb2RlbHNEcm9wRG93bk1lbnVcIjtcclxuaW1wb3J0IHsgTW9kZWxMb2FkZXIgfSBmcm9tIFwiLi9Nb2RlbExvYWRlclwiO1xyXG5cclxuZW51bSBQb2ludGVyTW9kZSB7XHJcbiAgIFZpZXcsXHJcbiAgIExpZ2h0LFxyXG59XHJcblxyXG4vL2NvbnN0IFdISVRFX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTUsIDI1NV0pO1xyXG5jb25zdCBXSElURV9DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjUwLCAyNDJdKTtcclxuY29uc3QgQkxBQ0tfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAwXSk7XHJcbi8vY29uc3QgQkxBQ0tfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFszMCwgMjAsIDBdKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXNBcHAge1xyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHVibGljIHJlbmRlcmVyOiBQbGFuZXNSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICBwcml2YXRlIG92ZXJsYXk6IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBoYW5kbGVyOiBQb2ludGVyRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgcHJpdmF0ZSBkaXJ0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICBwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gICBwcml2YXRlIGhpZ2hsaWdodFNsaWRlcjogU2xpZGVyXHJcbiAgIHByaXZhdGUgbGlnaHRMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIG1pZExpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgZGFya0xpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgc2hhZG93U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgdGhyZXNob2xkQ3RybDogVGhyZXNob2xkQ3RybDtcclxuICAgcHJpdmF0ZSBsb2FkZXIgPSBuZXcgTW9kZWxMb2FkZXIoKTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXBvbmVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkaXYuY2xhc3NOYW1lID0gJ1BsYW5lc0FwcCc7XHJcblxyXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHZpZXdDb250YWluZXIuaWQgPSAnVmlld0NvbnRhaW5lcic7XHJcbiAgICAgIHZpZXdDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3Q29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jcmVhdGVWaWV3RWxlbWVudHModmlld0NvbnRhaW5lcik7XHJcbiAgICAgIGRpdi5zdHlsZS53aWR0aCA9IHRoaXMuZ2wuY2FudmFzLndpZHRoICsgJ3B4JztcclxuXHJcbiAgICAgIGNvbnN0IGN0cmxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGN0cmxzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gICAgICBjdHJsc0NvbnRhaW5lci5pZCA9ICdDdHJsc0NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjdHJsc0NvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY3JlYXRlQ3RybHNFbGVtZW50cyhjdHJsc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICB0aGlzLmxvYWRNb2RlbCh0aGlzLnF1ZXJ5KTtcclxuXHJcbiAgICAgIHJldHVybiBkaXY7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlVmlld0VsZW1lbnRzKHBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgY2FudmFzLmlkID0gJ01haW5DYW52YXMnO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLm92ZXJsYXkuaWQgPSAnT3ZlcmxheSc7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xyXG5cclxuICAgICAgbGV0IHNpemUgPSA1MTI7XHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBzaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgfVxyXG4gICAgICBjYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmxpbmVIZWlnaHQgPSBzaXplICsgJ3B4JzsgLy8gdmVydGljYWxseSBjZW50ZXIgdGV4dFxyXG5cclxuICAgICAgLy8gd2h5IGRvIHdlIGhhdmUgdG8gbWFudWFsbHkgc2V0IHRoaXMgaGVpZ2h0PyBJZiB3ZSBkb24ndCBpdCBpcyA1MTUuMiBweCBoaWdoXHJcbiAgICAgIHBhcmVudC5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcclxuXHJcblxyXG4gICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nbCA9IGNvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBsYW5lc1JlbmRlcmVyKHRoaXMuZ2wpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLndoaXRlQ29sb3IgPSBXSElURV9DT0xPUjtcclxuICAgICAgdGhpcy5yZW5kZXJlci5ibGFja0NvbG9yID0gQkxBQ0tfQ09MT1I7XHJcblxyXG4gICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgUG9pbnRlckV2ZW50SGFuZGxlcihjYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25EcmFnID0gKHBvczogZ2xWZWMyLCBkZWx0YTogZ2xWZWMyKSA9PiB0aGlzLm9uRHJhZyhwb3MsIGRlbHRhKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uQ2xpY2sgPSAocG9zOiBnbFZlYzIpID0+IHRoaXMub25DbGljayhwb3MpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25TY2FsZSA9IChzY2FsZTogbnVtYmVyLCBjaGFuZ2U6IG51bWJlcikgPT4gdGhpcy5vblNjYWxlKHNjYWxlLCBjaGFuZ2UpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Sb3RhdGUgPSAoYW5nbGU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4gdGhpcy5vblJvdGF0ZShhbmdsZSwgZGVsdGEpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25UcmFuc2xhdGUgPSAoZGVsdGE6IGdsVmVjMikgPT4gdGhpcy5vblRyYW5zbGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5vbmtleXByZXNzID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm9wdGltaXplKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdwJzpcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5vcHRpbWl6ZShOb3JtYWxUeXBlLkZsYXQpO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd0JzpcclxuICAgICAgICAgICAgICAgdGhpcy50ZXN0KCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hvd1NoYWRvd01hcCA9ICF0aGlzLnJlbmRlcmVyLnNob3dTaGFkb3dNYXA7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjcmVhdGVNb2RlbHNEcm9wRG93bk1lbnUocGFyZW50LCAoZmlsZSkgPT4gdGhpcy5sb2FkTW9kZWwoZmlsZSkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZUN0cmxzRWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnRocmVzaG9sZEN0cmwgPSBuZXcgVGhyZXNob2xkQ3RybChcclxuICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICB0aGlzLFxyXG4gICAgICAgICAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDEgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnSGlnaGxpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdIaWdobGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5oaWdobGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW0JMQUNLX0NPTE9SLCBXSElURV9DT0xPUl0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5oaWdobGlnaHQgPSB0aGlzLmhpZ2hsaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5oaWdobGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodExpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW0JMQUNLX0NPTE9SLCBXSElURV9DT0xPUl0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIucmFuZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5taWRMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnTWlkTGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ01pZCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIucmFuZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5kYXJrTGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ0RhcmtMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnRGFyayBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmRhcmtMaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbQkxBQ0tfQ09MT1IsIFdISVRFX0NPTE9SXSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5kYXJrTGlnaHRTbGlkZXIucmFuZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zaGFkb3dTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ1NoYWRvdycsXHJcbiAgICAgICAgIGxhYmVsOiAnU2hhZG93JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuc2hhZG93ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93ID0gdGhpcy5zaGFkb3dTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuc2hhZG93KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZykge1xyXG5cclxuICAgICAgLy8gaWYgbm90aGluZyB3YXMgc3BlY2lmaWVkLCBsb2FkIGFuIGludGVyZXN0aW5nIG1vZGVsXHJcbiAgICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICAgcXVlcnkgPSAnUG9zZV8wMi5ibG9iJztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxjID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKGxjLmVuZHNXaXRoKCcub2JqJykgfHwgbGMuZW5kc1dpdGgoJy5ibG9iJykpIHtcclxuXHJcbiAgICAgICAgIGxldCBzdGF0dXNGdW5jID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSBzdGF0dXM7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRNb2RlbEZpbGUocXVlcnksIHN0YXR1c0Z1bmMpXHJcbiAgICAgICAgICAgIC50aGVuKCh0T2JqKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICB0aGlzLmxvYWRlci5vcmllbnQodGhpcy5yZW5kZXJlci5vYmopO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBUT0RPIG11bHRpIGxpbmUgZXJyb3IgbWVzc2FnZXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gJ1Vua25vd24gTW9kZWw6JyArIHF1ZXJ5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU2xpZGVycygpIHtcclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodDtcclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5saWdodExpZ2h0O1xyXG4gICAgICB0aGlzLm1pZExpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodDtcclxuICAgICAgdGhpcy5kYXJrTGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmRhcmtMaWdodDtcclxuICAgICAgdGhpcy5zaGFkb3dTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLnNoYWRvdztcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB0b2dnbGVNb2RlKCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucG9pbnRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5WaWV3OlxyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYmFsbENvbG9yID0gdGhpcy5yZW5kZXJlci55ZWxsb3c7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYmFsbENvbG9yID0gV0hJVEVfQ09MT1IudG9HbENvbG9yKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRHJhZyhwb3M6IGdsVmVjMiwgZGVsdGE6IGdsVmVjMikge1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgIC8vIFRPRE8gcmVwbGFjZSAwLjAxIHdpdGggc29tZSBraW5kIG9mIHBoeXNpY2FsIG1lYXN1cmVtZW50XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIub2JqLnJvdFgoZGVsdGEueSAqIDAuMDEpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RZKGRlbHRhLnggKiAwLjAxKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5MaWdodCkge1xyXG5cclxuICAgICAgICAgbGV0IG1hdFkgPSBnbE1hdDQuZnJvbVJvdFkodG9SYWQoZGVsdGEueCkpO1xyXG4gICAgICAgICBsZXQgbWF0WCA9IGdsTWF0NC5mcm9tUm90WCh0b1JhZChkZWx0YS55KSk7XHJcbiAgICAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWM0KFtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueixcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICBdKTtcclxuICAgICAgICAgdmVjID0gbWF0WC5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICB2ZWMgPSBtYXRZLm11bHRWKHZlYyk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnggPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi55ID0gdmVjLnZhbHVlc1sxXTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueiA9IHZlYy52YWx1ZXNbMl07XHJcblxyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlLlxyXG4gICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlLlxyXG4gICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgaGl0IG9uIG9uZSBvZiB0aGUgdmlld3Mgb2NjdXJzLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBvbkNsaWNrKHBvczogZ2xWZWMyKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IHRoaXMuZ2wuY2FudmFzLndpZHRoO1xyXG5cclxuICAgICAgLy8gVE9ETyBnZXQgdGhlIHNpemUgb2YgdGhlIGFyZWEgZnJvbSB0aGUgcmVuZGVyZXJcclxuICAgICAgaWYgKHBvcy54IDwgc2l6ZSAvIDUgJiYgcG9zLnkgPCBzaXplIC8gNSkge1xyXG4gICAgICAgICB0aGlzLnRvZ2dsZU1vZGUoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmNsaWNrKHBvcy54IC8gc2l6ZSwgMSAtIChwb3MueSAvIHNpemUpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblNjYWxlKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuem9vbShjaGFuZ2UpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblJvdGF0ZShhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIub2JqLnJvdFooZGVsdGEpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblRyYW5zbGF0ZShkZWx0YTogZ2xWZWMyKSB7XHJcblxyXG4gICAgICBsZXQgZmFjdG9yID0gMTtcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIGZhY3RvciA9IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVuZGVyZXIudHJhbnNsYXRlVmlldyhuZXcgZ2xWZWMyKFtcclxuICAgICAgICAgZmFjdG9yICogMiAqIGRlbHRhLnggLyB0aGlzLmdsLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgZmFjdG9yICogMiAqIGRlbHRhLnkgLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcclxuICAgICAgXSkpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRpY2soKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAvLyBUT0RPIG9ubHkgcmVkcmF3IHRoZSB0aHJlc2hvbGQgY3RybCBpZiBhIHNsaWRlciBjaGFuZ2VkXHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICAgICAgIHRoaXMudGhyZXNob2xkQ3RybC5kcmF3KCk7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBzYXZlKCkge1xyXG4gICAgICBsZXQgdE9iaiA9IHRoaXMucmVuZGVyZXIudE9iajtcclxuXHJcbiAgICAgIGxldCBuYW1lID0gdE9iai5uYW1lLnNwbGl0KCcuJylbMF0gKyAnLmJsb2InO1xyXG4gICAgICBzYXZlQXModE9iai50b0Jsb2IoKSwgbmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgYXN5bmMgdGVzdCgpIHtcclxuICAgICAgLy8gdW5jb21tZW50IHRvIHRlc3QgQmxvYnNcclxuICAgICAgbGV0IGJsb2IgPSB0aGlzLnJlbmRlcmVyLnRPYmoudG9CbG9iKCk7XHJcbiAgICAgIGxldCB0T2JqID0gYXdhaXQgVHJpYW5nbGVPYmouZnJvbUJsb2IoYmxvYik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRPYmoubmFtZSk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbE1hdDQgfSBmcm9tICcuL2dsTWF0JztcclxuaW1wb3J0IHsgZ2xWZWMzLCBnbFZlYzIgfSBmcm9tICcuL2dsVmVjJztcclxuaW1wb3J0IHZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGxhbmVzVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgZnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BsYW5lc0ZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBjbGFtcCwgbWl4LCB0b1JhZCwgdG9EZWcgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZVNwaGVyZSB9IGZyb20gJy4vVHJpYW5nbGVTcGhlcmUnO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tICcuL2dsVW5pZm9ybSc7XHJcbmltcG9ydCB7IGdsQ29tcGlsZXIgfSBmcm9tICcuL2dsQ29tcGlsZXInO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBnbE9iamVjdCB9IGZyb20gJy4vZ2xPYmplY3QnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUFycm93IH0gZnJvbSAnLi9UcmlhbmdsZUFycm93JztcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gJy4vZ2xDb2xvcic7XHJcbmltcG9ydCB7IFRleHR1cmVSZW5kZXJlciB9IGZyb20gJy4vVGV4dHVyZVJlbmRlcmVyJztcclxuaW1wb3J0IHsgZ2xUZXh0dXJlRnJhbWVCdWZmZXIsIEZyYW1lQnVmZmVyU3R5bGUgfSBmcm9tICcuL2dsVGV4dHVyZUZyYW1lQnVmZmVyJztcclxuaW1wb3J0IHsgdGV4dHVyZVNpemUgfSBmcm9tICcuL1RocmVzaG9sZEN0cmwnO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tICcuL2h0bWxDb2xvcic7XHJcbmltcG9ydCB7IGdsQ2xpcFNwYWNlIH0gZnJvbSAnLi9nbENsaXBTcGFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFsbEltYWdlRGF0YSB7XHJcbiAgIHB1YmxpYyBpbWFnZTogSW1hZ2VEYXRhO1xyXG4gICBwdWJsaWMgYmFsbENlbnRlcjogZ2xWZWMyO1xyXG4gICBwdWJsaWMgYmFsbFJhZGl1czogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IERFRkFVTFRfVEhSRVNIT0xEMSA9IDQwO1xyXG5leHBvcnQgbGV0IERFRkFVTFRfVEhSRVNIT0xEMiA9IDcwO1xyXG5cclxuY29uc3QgSElHSExJR0hUX0RJRkYgPSAwLjE7XHJcbmNvbnN0IEJBTExfUkFESVVTID0gMC41O1xyXG5jb25zdCBJTklUSUFMX0xJR0hUX0RJUkVDVElPTiA9IFsxLjAsIC0xLjAsIDEuNV07XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCByZW5kZXJzIHRyaWFuZ2xlcyBhbmQgYSBsaWdodCBzb3VyY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXNSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgcHJpdmF0ZSBsaWdodFZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbiA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgIHByaXZhdGUgdVRocmVzaG9sZDEgPSBERUZBVUxUX1RIUkVTSE9MRDE7XHJcbiAgIHByaXZhdGUgdVRocmVzaG9sZDIgPSBERUZBVUxUX1RIUkVTSE9MRDI7XHJcblxyXG4gICBwcml2YXRlIHVIaWdobGlnaHQ6IG51bWJlciA9IDEuMDtcclxuICAgcHJpdmF0ZSB1TGlnaHRMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVNaWRMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVEYXJrTGlnaHQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB1U2hhZG93OiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAvLyBzaXplIG9mIHRoZSBzbWFsbGVyIHZpZXdcclxuICAgcHJpdmF0ZSByZWFkb25seSBtaW5pU2l6ZSA9IDAuMjtcclxuXHJcbiAgIHByaXZhdGUgdVVzZVRocmVzaG9sZHMgPSBmYWxzZTtcclxuXHJcbiAgIHByaXZhdGUgYmFsbDogZ2xPYmplY3Q7XHJcbiAgIHByaXZhdGUgYXJyb3c6IGdsT2JqZWN0O1xyXG4gICBwdWJsaWMgb2JqOiBnbE9iamVjdDtcclxuXHJcbiAgIHByaXZhdGUgc2hhZG93RnJhbWVCdWZmZXI6IGdsVGV4dHVyZUZyYW1lQnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVGcmFtZUJ1ZmZlcjogZ2xUZXh0dXJlRnJhbWVCdWZmZXI7XHJcblxyXG4gICBwdWJsaWMgdUxpZ2h0RGlyZWN0aW9uID0gbmV3IGdsVmVjMyhJTklUSUFMX0xJR0hUX0RJUkVDVElPTik7XHJcblxyXG4gICBwdWJsaWMgYmFsbENvbG9yID0gbmV3IGdsQ29sb3IoWzEsIDEsIDFdKTtcclxuICAgcHVibGljIHJlYWRvbmx5IHllbGxvdyA9IG5ldyBnbENvbG9yKFsxLjAsIDAuOSwgMC43XSk7XHJcbiAgIHB1YmxpYyB3aGl0ZUNvbG9yID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTUsIDI1NV0pO1xyXG4gICBwdWJsaWMgYmxhY2tDb2xvciA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDBdKTtcclxuXHJcbiAgIHByaXZhdGUgem9vbUZhY3RvcjogbnVtYmVyID0gMTtcclxuICAgcHJpdmF0ZSB0cmFuc2xhdGlvbiA9IG5ldyBnbFZlYzIoWzAsIDBdKTtcclxuICAgcHVibGljIHNob3dTaGFkb3dNYXAgPSBmYWxzZTtcclxuICAgcHVibGljIHNob3dNaW5pVmlldyA9IHRydWU7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoZ2xDdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcblxyXG4gICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gICAgICB0aGlzLnByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoZ2wsIHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xyXG5cclxuICAgICAgbGV0IHRCYWxsID0gbmV3IFRyaWFuZ2xlU3BoZXJlKDEwMCwgQkFMTF9SQURJVVMsIG5ldyBnbFZlYzMoWzAsIDAsIDBdKSk7XHJcbiAgICAgIHRCYWxsLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgdGhpcy5iYWxsID0gbmV3IGdsT2JqZWN0KGdsLCB0QmFsbCwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCB0QXJyb3cgPSBuZXcgVHJpYW5nbGVBcnJvdygpO1xyXG4gICAgICB0aGlzLmFycm93ID0gbmV3IGdsT2JqZWN0KGdsLCB0QXJyb3csIHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0Q2xpcFNwYWNlKCk6IGdsQ2xpcFNwYWNlIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGxldCBhciA9IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoYXIgPiAxKSB7XHJcbiAgICAgICAgIHJldHVybiBuZXcgZ2xDbGlwU3BhY2UobmV3IGdsVmVjMyhbLWFyLCAtMSwgLTEwMF0pLCBuZXcgZ2xWZWMzKFthciwgMSwgMTAwXSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbmV3IGdsQ2xpcFNwYWNlKG5ldyBnbFZlYzMoWy0xLCAtMSAvIGFyLCAtMTAwXSksIG5ldyBnbFZlYzMoWzEsIDEgLyBhciwgMTAwXSkpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXNpemUoKSB7XHJcbiAgICAgIGxldCBjbGlwU3BhY2UgPSB0aGlzLmdldENsaXBTcGFjZSgpO1xyXG4gICAgICB0aGlzLnByb2plY3Rpb24gPSBnbE1hdDQubWFrZU9ydGhvKFxyXG4gICAgICAgICBjbGlwU3BhY2UubGVmdCxcclxuICAgICAgICAgY2xpcFNwYWNlLnJpZ2h0LFxyXG4gICAgICAgICBjbGlwU3BhY2UuYm90dG9tLFxyXG4gICAgICAgICBjbGlwU3BhY2UudG9wLFxyXG4gICAgICAgICBjbGlwU3BhY2UubmVhcixcclxuICAgICAgICAgY2xpcFNwYWNlLmZhclxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2hhZG93RnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5kZWxldGUoKTtcclxuICAgICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlciA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLy9cclxuICAgLy8gVGhlIGZ1bmN0aW9ucyBiZWxvdyBjaGFuZ2Ugb3VyIHZpZXcgb2YgdGhlIG1vZGVsXHJcbiAgIC8vXHJcbiAgIHB1YmxpYyB6b29tKHpvb206IG51bWJlcikge1xyXG4gICAgICB0aGlzLnpvb21GYWN0b3IgKj0gem9vbTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRyYW5zbGF0ZVZpZXcoZGVsdGE6IGdsVmVjMikge1xyXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnggKz0gZGVsdGEueDtcclxuICAgICAgdGhpcy50cmFuc2xhdGlvbi55ICs9IGRlbHRhLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgaGlnaGxpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVIaWdobGlnaHQ7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCBoaWdobGlnaHQodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gTWF0aC5tYXgodmFsLCBISUdITElHSFRfRElGRik7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdGhpcy51SGlnaGxpZ2h0IC0gSElHSExJR0hUX0RJRkYpO1xyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBsaWdodExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVMaWdodExpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgbWlkTGlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudU1pZExpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgZGFya0xpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVEYXJrTGlnaHQ7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgc2hhZG93KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVTaGFkb3c7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCBzaGFkb3codmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51U2hhZG93ID0gTWF0aC5taW4odmFsLCAxIC0gSElHSExJR0hUX0RJRkYpO1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHRoaXMudVNoYWRvdyArIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgdGhyZXNob2xkMSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51VGhyZXNob2xkMTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHRocmVzaG9sZDEodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51VGhyZXNob2xkMSA9IHZhbDtcclxuICAgICAgdGhpcy51VGhyZXNob2xkMiA9IE1hdGgubWF4KHRoaXMudVRocmVzaG9sZDIsIHZhbCk7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHRocmVzaG9sZDIoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudVRocmVzaG9sZDI7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB0aHJlc2hvbGQyKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDIgPSB2YWw7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDEgPSBNYXRoLm1pbih0aGlzLnVUaHJlc2hvbGQxLCB2YWwpO1xyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0T2JqKCk6IFRyaWFuZ2xlT2JqIHtcclxuICAgICAgcmV0dXJuIHRoaXMub2JqLnRPYmo7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29sb3JBdChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIGRlZyA9IGNsYW1wKGRlZywgMCwgOTApO1xyXG4gICAgICByZXR1cm4gbWl4KHRoaXMudVNoYWRvdywgdGhpcy51SGlnaGxpZ2h0IC0gSElHSExJR0hUX0RJRkYsIE1hdGguY29zKHRvUmFkKGRlZykpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB0aHJlc2hvbGRBdChjb2xvcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgbGV0IGFjb3MgPSAoY29sb3IgLSB0aGlzLnVTaGFkb3cpIC8gKHRoaXMudUhpZ2hsaWdodCAtIEhJR0hMSUdIVF9ESUZGIC0gdGhpcy51U2hhZG93KTtcclxuICAgICAgcmV0dXJuIHRvRGVnKE1hdGguYWNvcyhhY29zKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlQ29sb3JzKCkge1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gdGhpcy5jb2xvckF0KDAuNSAqIHRoaXMudGhyZXNob2xkMSk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gdGhpcy5jb2xvckF0KG1peCh0aGlzLnRocmVzaG9sZDEsIHRoaXMudGhyZXNob2xkMiwgMC41KSk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IHRoaXMuY29sb3JBdCgodGhpcy50aHJlc2hvbGQyICsgOTApIC8gMik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXRNb2RlbCh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBpZiAodGhpcy5vYmopIHtcclxuICAgICAgICAgdGhpcy5vYmouZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vYmogPSBuZXcgZ2xPYmplY3QodGhpcy5nbCwgdE9iaiwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCBjZW50ZXIgPSB0T2JqLmNlbnRlcjtcclxuICAgICAgdGhpcy5vYmoudHJhbnNsYXRlKG5ldyBnbFZlYzMoWy1jZW50ZXIueCwgLWNlbnRlci55LCAtY2VudGVyLnpdKSk7XHJcbiAgICAgIHRoaXMub2JqLnNjYWxlKDIuMCAvIE1hdGguc3FydCh0T2JqLndpZHRoICogdE9iai53aWR0aCArIHRPYmouaGVpZ2h0ICogdE9iai5oZWlnaHQgKyB0T2JqLmRlcHRoICogdE9iai5kZXB0aCkpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgdGhlIHZpZXcgYW5kIHRoZSBsaWdodFxyXG4gICAgICB0aGlzLnZpZXcgPSBnbE1hdDQuaWRlbnRpdHkoKTtcclxuICAgICAgdGhpcy56b29tRmFjdG9yID0gMTtcclxuICAgICAgdGhpcy50cmFuc2xhdGlvbiA9IG5ldyBnbFZlYzIoWzAsIDBdKTtcclxuICAgICAgdGhpcy51TGlnaHREaXJlY3Rpb24gPSBuZXcgZ2xWZWMzKFsxLjAsIC0xLjAsIDEuNV0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuICAgICAgdGhpcy5yZW5kZXJUb1NoYWRvd01hcCgpO1xyXG4gICAgICB0aGlzLnJlbmRlclRvU2NyZWVuKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0U3RkVW5pZm9ybXMoKTogZ2xVbmlmb3JtIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMuZ2wsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdsaWdodFZpZXcnLCB0aGlzLmxpZ2h0Vmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3Byb2plY3Rpb24nLCB0aGlzLnByb2plY3Rpb24udHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCB0aGlzLnVMaWdodERpcmVjdGlvbik7XHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDEpO1xyXG5cclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICB1bmkuc2V0KCd1VGhyZXNob2xkMScsIDEgLSBNYXRoLnNpbih0b1JhZCh0aGlzLnRocmVzaG9sZDEgKyA5MCkpKTtcclxuICAgICAgdW5pLnNldCgndVRocmVzaG9sZDInLCAxIC0gTWF0aC5zaW4odG9SYWQodGhpcy50aHJlc2hvbGQyICsgOTApKSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1TGlnaHRJbnRlbnNpdHknLCB0aGlzLnVIaWdobGlnaHQgLSB0aGlzLnVTaGFkb3cgLSBISUdITElHSFRfRElGRik7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgdGhpcy51U2hhZG93KTtcclxuICAgICAgdW5pLnNldCgndUhpZ2hsaWdodCcsIHRoaXMudUhpZ2hsaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodExpZ2h0JywgdGhpcy51TGlnaHRMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VNaWRMaWdodCcsIHRoaXMudU1pZExpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndURhcmtMaWdodCcsIHRoaXMudURhcmtMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VTaGFkb3cnLCB0aGlzLnVTaGFkb3cpO1xyXG5cclxuICAgICAgdW5pLnNldCgndVdoaXRlQ29sb3InLCB0aGlzLndoaXRlQ29sb3IudG9HbENvbG9yKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1QmxhY2tDb2xvcicsIHRoaXMuYmxhY2tDb2xvci50b0dsQ29sb3IoKSk7XHJcblxyXG4gICAgICByZXR1cm4gdW5pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0QmFsbEltYWdlKCk6IEJhbGxJbWFnZURhdGEge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGlmICghdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIgPSBuZXcgZ2xUZXh0dXJlRnJhbWVCdWZmZXIoZ2wsIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSwgRnJhbWVCdWZmZXJTdHlsZS5EZXB0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVGcmFtZUJ1ZmZlci5jb2xvclRleHR1cmUpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVGcmFtZUJ1ZmZlci5jb2xvclRleHR1cmUsIDApO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcblxyXG4gICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKDxFbGVtZW50PmdsLmNhbnZhcyk7XHJcbiAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ3NzKHN0eWxlLmJhY2tncm91bmRDb2xvcikudG9HbENvbG9yKCk7XHJcbiAgICAgIGdsLmNsZWFyQ29sb3IoY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgMSk7XHJcbiAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICAvLyBhbHdheXMgcmVuZGVyIHdpdGggYmFuZHNcclxuICAgICAgdW5pLnNldGkoJ3VVc2VUaHJlc2hvbGRzJywgMSk7XHJcblxyXG4gICAgICAvLyBzaG9vdCB0aGUgbGlnaHQgc3RyYWlnaHQgZG93blxyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgZ2xWZWMzKFswLCAtMSwgMF0pKTtcclxuXHJcbiAgICAgIC8vIGRvbid0IGNhc3Qgc2hhZG93c1xyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAwKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCBuZXcgZ2xNYXQ0KCkpO1xyXG5cclxuICAgICAgLy8gbW92ZSB0aGUgYmFsbCB0byB0aGUgbG93ZXIgbGVmdCBhbmQgcGFydGlhbGx5IG9mZnNjcmVlblxyXG4gICAgICBjb25zdCBzY2FsZSA9IDEuNzU7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IG5ldyBnbFZlYzMoWy0wLjYsIC0wLjYsIDBdKTtcclxuICAgICAgdGhpcy5iYWxsLmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmJhbGwuc2NhbGUoc2NhbGUpO1xyXG4gICAgICB0aGlzLmJhbGwudHJhbnNsYXRlKG9mZnNldCk7XHJcblxyXG4gICAgICAvLyByZW5kZXIgdGhlIGJhbGxcclxuICAgICAgdGhpcy5iYWxsLmRyYXcoKTtcclxuICAgICAgdGhpcy5iYWxsLmNsZWFyVHJhbnNmb3JtcygpO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgYXJyb3dcclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IGdsVmVjMyhbMSwgLTAuNSwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIDAsIHRydWUpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgcmVzZXQgdGhpbmdzIHNvIHRoYXQgd2UncmUgbG9va2luZyBkb3duIHRoZSB6LWF4aXNcclxuICAgICAgdGhpcy5hcnJvdy5jbGVhclRyYW5zZm9ybXMoKTtcclxuICAgICAgdGhpcy5hcnJvdy5zY2FsZSgxLjI1KVxyXG4gICAgICB0aGlzLmFycm93LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFtvZmZzZXQueCwgb2Zmc2V0LnkgKyBzY2FsZSAqIEJBTExfUkFESVVTICsgMC4xLCAwLjBdKSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1V2hpdGVDb2xvcicsIG5ldyBnbENvbG9yKFsxLjAsIDEuMCwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1QmxhY2tDb2xvcicsIGh0bWxDb2xvci5ibGFjay50b0dsQ29sb3IoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcblxyXG4gICAgICBsZXQgcGl4ZWxzID0gbmV3IFVpbnQ4QXJyYXkodGV4dHVyZVNpemUgKiB0ZXh0dXJlU2l6ZSAqIDQpO1xyXG4gICAgICBnbC5yZWFkUGl4ZWxzKDAsIDAsIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgcGl4ZWxzKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgZGF0YSBzdHJ1Y3R1cmUgd2UnbGwgcmV0dXJuXHJcbiAgICAgIGxldCBkYXRhID0gbmV3IEJhbGxJbWFnZURhdGEoKTtcclxuICAgICAgZGF0YS5pbWFnZSA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVscyksIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICAvLyBjb252ZXJ0IGZyb20gWy0xLDFdIGRyYXdpbmcgc3BhY2UgdG8gWzAsMV1cclxuICAgICAgZGF0YS5iYWxsUmFkaXVzID0gc2NhbGUgKiBCQUxMX1JBRElVUztcclxuICAgICAgZGF0YS5iYWxsQ2VudGVyID0gbmV3IGdsVmVjMihbb2Zmc2V0LngsIG9mZnNldC55XSk7XHJcbiAgICAgIGRhdGEuYmFsbFJhZGl1cyAvPSAyO1xyXG4gICAgICBkYXRhLmJhbGxDZW50ZXIueCA9IDAuNSAqIChkYXRhLmJhbGxDZW50ZXIueCArIDEpO1xyXG4gICAgICBkYXRhLmJhbGxDZW50ZXIueSA9IDAuNSAqIChkYXRhLmJhbGxDZW50ZXIueSArIDEpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcmVuZGVyVG9TaGFkb3dNYXAoKTogdm9pZCB7XHJcblxyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG4gICAgICBpZiAoIXRoaXMuc2hhZG93RnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlciA9IG5ldyBnbFRleHR1cmVGcmFtZUJ1ZmZlcihnbCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0LCBGcmFtZUJ1ZmZlclN0eWxlLkRlcHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmZyYW1lQnVmZmVyKTtcclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgIGxldCB1cCA9IG5ldyBnbFZlYzMoWzAsIDEsIDBdKTtcclxuICAgICAgbGV0IG1hdCA9IGdsTWF0NC5tYWtlTG9va0F0KHRoaXMudUxpZ2h0RGlyZWN0aW9uLCBjZW50ZXIsIHVwKTtcclxuICAgICAgbWF0LnNldCgwLCAzLCAwKTtcclxuICAgICAgbWF0LnNldCgxLCAzLCAwKTtcclxuICAgICAgbWF0LnNldCgyLCAzLCAwKTtcclxuICAgICAgdGhpcy5saWdodFZpZXcgPSBtYXQ7XHJcblxyXG4gICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG5cclxuICAgICAgLy8gY2hhbmdlIHRoZSB2aWV3IG1hdHJpeCBzbyB0aGF0IG91ciB2aWV3IGlzIGZyb20gdGhlIGxpZ2h0XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLmxpZ2h0Vmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3Byb2plY3Rpb24nLCBnbE1hdDQuaWRlbnRpdHkoKSk7XHJcblxyXG4gICAgICAvLyBkb24ndCB0cnkgdG8gdXNlIHRoZSBzaGFkb3cgdGV4dHVyZSB3aGlsZSB3ZSdyZSBjcmVhdGluZyBpdFxyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAwKTtcclxuXHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHJlbmRlclRvU2NyZWVuKCk6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIGRlcHRoIGJ1ZmZlciBmb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBpZiAodGhpcy5zaG93U2hhZG93TWFwKSB7XHJcbiAgICAgICAgIGxldCB0ciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIoZ2wpO1xyXG4gICAgICAgICB0ci5yZW5kZXIodGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5kZXB0aFRleHR1cmUpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmRlcHRoVGV4dHVyZSlcclxuXHJcbiAgICAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgICAgIC8vIHJlc2V0IHRoZSB2aWV3IG1hdHJpeFxyXG4gICAgICAgICB0aGlzLnZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgICAgICAgIHRoaXMudmlldy5zY2FsZSh0aGlzLnpvb21GYWN0b3IpO1xyXG4gICAgICAgICB0aGlzLnZpZXcudHJhbnNsYXRlKG5ldyBnbFZlYzMoW3RoaXMudHJhbnNsYXRpb24ueCwgdGhpcy50cmFuc2xhdGlvbi55LCAwXSkpO1xyXG5cclxuICAgICAgICAgLy8gZHJhdyB0aGUgbWFpbiBvYmplY3RcclxuICAgICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuICAgICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMuc2hvd01pbmlWaWV3KSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIG9iamVjdCBpbiB0aGUgdXBwZXIgcmlnaHQgYXQgYSByZWR1Y2VkIHNpemUgYW5kIG9wcG9zaXRlIGJhbmRpbmdcclxuICAgICAgICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNjYWxlKHRoaXMubWluaVNpemUpO1xyXG4gICAgICAgICAgICBsZXQgY2xpcFNwYWNlID0gdGhpcy5nZXRDbGlwU3BhY2UoKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFtjbGlwU3BhY2UubWF4LnggLSB0aGlzLm1pbmlTaXplLCBjbGlwU3BhY2UubWF4LnggLSB0aGlzLm1pbmlTaXplLCAwXSkpO1xyXG4gICAgICAgICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy52aWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMCA6IDEsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9iai5kcmF3KCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIGRyYXcgdGhlIGJhbGxcclxuICAgICAgICAgdGhpcy5kcmF3QmFsbCgpO1xyXG5cclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBkcmF3QmFsbCgpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICAvLyBzdG9wIHVzaW5nIHRoZSBzaGFkb3dtYXBcclxuICAgICAgdW5pLnNldGkoJ3VVc2VTaGFkb3dzJywgMCk7XHJcblxyXG4gICAgICB0aGlzLnZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgICAgIHRoaXMudmlldy5zY2FsZSh0aGlzLm1pbmlTaXplKTtcclxuICAgICAgbGV0IGNsaXBTcGFjZSA9IHRoaXMuZ2V0Q2xpcFNwYWNlKCk7XHJcbiAgICAgIHRoaXMudmlldy50cmFuc2xhdGUobmV3IGdsVmVjMyhbY2xpcFNwYWNlLm1pbi54ICsgdGhpcy5taW5pU2l6ZSwgY2xpcFNwYWNlLm1heC55IC0gdGhpcy5taW5pU2l6ZSwgMF0pKTtcclxuICAgICAgdW5pLnNldCgndmlldycsIHRoaXMudmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51VXNlVGhyZXNob2xkcyA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgdW5pLnNldCgndVdoaXRlQ29sb3InLCB0aGlzLmJhbGxDb2xvcik7XHJcbiAgICAgIHVuaS5zZXQoJ3VCbGFja0NvbG9yJywgaHRtbENvbG9yLmJsYWNrLnRvR2xDb2xvcigpKTtcclxuICAgICAgdGhpcy5iYWxsLmRyYXcoKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodERpcmVjdGlvbicsIG5ldyBnbFZlYzMoWzEsIC0wLjUsIDAuNV0pKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCAwLCB0cnVlKTtcclxuXHJcbiAgICAgIC8vIGJhY2sgb3V0IGFuZ2xlcyBhcyBpZiBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICBsZXQgeCA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLng7XHJcbiAgICAgIGxldCB5ID0gdGhpcy51TGlnaHREaXJlY3Rpb24ueTtcclxuICAgICAgbGV0IHogPSB0aGlzLnVMaWdodERpcmVjdGlvbi56O1xyXG5cclxuICAgICAgLy8gc3RhcnQgYnkgbG9va2luZyBkb3duIGZyb20gdGhlIFogZGlyZWN0aW9uXHJcbiAgICAgIGxldCByYWRpdXMgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gTWF0aC5hY29zKHogLyByYWRpdXMpO1xyXG4gICAgICBsZXQgcm90YXRpb25BbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCByZXNldCB0aGluZ3Mgc28gdGhhdCB3ZSdyZSBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICB0aGlzLmFycm93LmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmFycm93LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFswLjAsIDAuNTUsIDAuMF0pKTtcclxuICAgICAgdGhpcy5hcnJvdy5yb3RYKHRvUmFkKDkwKSk7XHJcblxyXG4gICAgICAvLyByb3RhdGUgdG8gbWF0Y2ggdGhlIGxpZ2h0IHNvdXJjZVxyXG4gICAgICB0aGlzLmFycm93LnJvdFkoLWVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgdGhpcy5hcnJvdy5yb3RaKC1yb3RhdGlvbkFuZ2xlKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VXaGl0ZUNvbG9yJywgdGhpcy55ZWxsb3cpO1xyXG4gICAgICB1bmkuc2V0KCd1QmxhY2tDb2xvcicsIGh0bWxDb2xvci5ibGFjay50b0dsQ29sb3IoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbGljayh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgLy8gVE9ETyBhZGp1c3QgZm9yIGFzcGVjdCByYXRpb1xyXG4gICAgICBpZiAodGhpcy5zaG93TWluaVZpZXcpIHtcclxuICAgICAgICAgaWYgKHggPiAoMSAtIHRoaXMubWluaVNpemUpICYmIHkgPiAoMSAtIHRoaXMubWluaVNpemUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudVVzZVRocmVzaG9sZHMgPSAhdGhpcy51VXNlVGhyZXNob2xkcztcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICB0aGlzLm9iai5vcHRpbWl6ZShub3JtYWxUeXBlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMyIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbnR5cGUgUG9pbnRlclJvdGF0ZUZ1bmN0aW9uID0gKGFuZ2xlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlclRyYW5zbGF0ZUZ1bmN0aW9uID0gKGRlbHRhOiBnbFZlYzIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlclNjYWxlRnVuY3Rpb24gPSAoc2NhbGU6IG51bWJlciwgY2hhbmdlOiBudW1iZXIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlckRyYWdGdW5jdGlvbiA9IChwb3M6IGdsVmVjMiwgZGVsdGE6IGdsVmVjMikgPT4gdm9pZDtcclxudHlwZSBQb2ludGVyVXBGdW5jdGlvbiA9ICgpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlckRvd25GdW5jdGlvbiA9IChwb3M6IGdsVmVjMikgPT4gdm9pZDtcclxudHlwZSBQb2ludGVyRGJsQ2xpY2tGdW5jdGlvbiA9IChwb3M6IGdsVmVjMikgPT4gYm9vbGVhbjtcclxudHlwZSBQb2ludGVyQ2xpY2tGdW5jdGlvbiA9IChwb3M6IGdsVmVjMikgPT4gYm9vbGVhbjtcclxuXHJcbmNvbnN0IERCTF9DTElDS19USU1FID0gMzAwOyAvLyBtc1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIG1hbmFnaW5nIHRvdWNoL21vdXNlIGV2ZW50cyBvdmVyIGEgaHRtbCBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9pbnRlckV2ZW50SGFuZGxlciB7XHJcblxyXG4gICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBwdWJsaWMgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICBwdWJsaWMgb25VcDogUG9pbnRlclVwRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRvd246IFBvaW50ZXJEb3duRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvblNjYWxlOiBQb2ludGVyU2NhbGVGdW5jdGlvbjtcclxuICAgcHVibGljIG9uUm90YXRlOiBQb2ludGVyUm90YXRlRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvblRyYW5zbGF0ZTogUG9pbnRlclRyYW5zbGF0ZUZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25DbGljazogUG9pbnRlckNsaWNrRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRibENsaWNrOiBQb2ludGVyRGJsQ2xpY2tGdW5jdGlvbjtcclxuICAgcHVibGljIG9uRHJhZzogUG9pbnRlckRyYWdGdW5jdGlvbjtcclxuXHJcbiAgIHB1YmxpYyBsYXN0UG9zOiBnbFZlYzI7XHJcbiAgIHByaXZhdGUgbGFzdFRvdWNoVGltZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIHByaW1hcnlUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgcHJpdmF0ZSBzZWNvbmRhcnlUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgcHJpdmF0ZSBpbml0aWFsVG91Y2hEaXN0YW5jZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaERpc3RhbmNlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgbGFzdFRvdWNoQW5nbGU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBsYXN0VG91Y2hDZW50ZXI6IGdsVmVjMjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgIC8vIGVsZW1lbnQub250b3VjaCBpc24ndCBzdXBwb3J0ZWQgb24gZGVza3RvcCBkZXZpY2VzIHNvIHVzZSBhZGRFdmVudExpc3RlbmVyIGluc3RlYWRcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAvLyBwcmV2ZW50IHRoZSBicm93c2VyIGZyb20gdXNpbmcgdGhlIGV2ZW50XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0b3VjaFxyXG4gICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgcHJpbWFyeSB0b3VjaCBpZFxyXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlUb3VjaElkID0gZXZlbnQudG91Y2hlc1swXS5pZGVudGlmaWVyO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VuZCBvdXQgb25Eb3duKCkgYW5kIHBvdGVudGlhbGx5IG9uRGJsQ2xpY2soKSBldmVudHNcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zKGV2ZW50LnRvdWNoZXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAodGltZSAtIHRoaXMubGFzdFRvdWNoVGltZSA8IERCTF9DTElDS19USU1FKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3VyRGJsQ2xpY2socG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5vdXJPbkRvd24ocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIHNlY29uZCB0b3VjaFxyXG4gICAgICAgICBlbHNlIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMiAmJiB0aGlzLnByaW1hcnlUb3VjaElkID49IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlY29yZCB0aGUgc2Vjb25kYXJ5IHRvdWNoIGlkLiBJdCB3aWxsIGFsd2F5cyBiZSB0aGUgc2Vjb25kIGVsZW1lbnQgd2hlblxyXG4gICAgICAgICAgICAvLyB0aGVyZSBhcmUgb25seSB0d28gZWxlbWVudHNcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRhcnlUb3VjaElkID0gZXZlbnQudG91Y2hlc1sxXS5pZGVudGlmaWVyO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHZhbHVlcyBmb3IgZ2VzdHVyZXNcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jb21wdXRlVG91Y2hEaXN0YW5jZShldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFRvdWNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hEaXN0YW5jZSA9IGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaEFuZ2xlID0gdGhpcy5jb21wdXRlVG91Y2hBbmdsZShldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQ2VudGVyID0gdGhpcy5jb21wdXRlVG91Y2hDZW50ZXIoZXZlbnQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgIC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSB1c2luZyB0aGUgZXZlbnRcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgIC8vIGlmIHRoZSBpbml0aWFsIHR3byB0b3VjaGVzIGFyZSBhY3RpdmVcclxuICAgICAgICAgaWYgKHRoaXMucHJpbWFyeVRvdWNoSWQgPj0gMCAmJiB0aGlzLnNlY29uZGFyeVRvdWNoSWQgPj0gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8gc2VuZCBvdXQgZ2VzdHVyZSBldmVudHNcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGhpcy5jb21wdXRlVG91Y2hEaXN0YW5jZShldmVudCk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IGRpc3RhbmNlIC8gdGhpcy5pbml0aWFsVG91Y2hEaXN0YW5jZTtcclxuICAgICAgICAgICAgbGV0IGNoYW5nZSA9IGRpc3RhbmNlIC8gdGhpcy5sYXN0VG91Y2hEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5vdXJPblNjYWxlKHNjYWxlLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaERpc3RhbmNlID0gZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmNvbXB1dGVUb3VjaEFuZ2xlKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vdXJPblJvdGF0ZShhbmdsZSwgYW5nbGUgLSB0aGlzLmxhc3RUb3VjaEFuZ2xlKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hBbmdsZSA9IGFuZ2xlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMuY29tcHV0ZVRvdWNoQ2VudGVyKGV2ZW50KTtcclxuICAgICAgICAgICAgLy8gcmV2ZXJzZSBZIHZhbHVlcyBzbyB0aGUgYm90dG9tIGlzIHplcm8gaW5zdGVhZCBvZiB0aGUgdG9wXHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IFtjZW50ZXIueCAtIHRoaXMubGFzdFRvdWNoQ2VudGVyLngsIHRoaXMubGFzdFRvdWNoQ2VudGVyLnkgLSBjZW50ZXIueV07XHJcbiAgICAgICAgICAgIHRoaXMub3VyT25UcmFuc2xhdGUobmV3IGdsVmVjMihkZWx0YSkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvLyBpZiBvbmx5IHRoZSBpbml0aWFsIHRvdWNoIGlzIGFjdGl2ZVxyXG4gICAgICAgICBlbHNlIGlmICh0aGlzLnByaW1hcnlUb3VjaElkID49IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbmQgb3V0IHRoZSBkcmFnIGV2ZW50XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICBsZXQgdG91Y2ggPSB0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnByaW1hcnlUb3VjaElkKTtcclxuICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zKHRvdWNoKTtcclxuICAgICAgICAgICAgICAgdGhpcy5vdXJPbkRyYWcocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgLy8gcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIHVzaW5nIHRoZSBldmVudFxyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnNlY29uZGFyeVRvdWNoSWQpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgLy8gaWYgd2UgbGlmdGVkIHRoZSBzZWNvbmQgZmluZ2VyLCBidXQgbm90IHRoZSBmaXJzdCwgZ28gYmFja1xyXG4gICAgICAgICAgICAgICAvLyB0byB0aGUgZHJhZyBnZXN0dXJlLCBidXQgYWRqdXN0IHRoZSByZW1lbWJlcmQgcG9zaXRpb24gdG9cclxuICAgICAgICAgICAgICAgLy8gYmUgdGhlIGN1cnJlbnQgb25lIHNvIHRoYXQgdGhpbmdzIGRvbid0IGp1bXBcclxuICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gdGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5wcmltYXJ5VG91Y2hJZCk7XHJcbiAgICAgICAgICAgICAgIGlmICh0b3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQb3MgPSB0aGlzLmdldFBvcyh0b3VjaCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAodGhpcy5wcmltYXJ5VG91Y2hJZCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnByaW1hcnlUb3VjaElkKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnByaW1hcnlUb3VjaElkID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLm91ck9uVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAodGhpcy5zZWNvbmRhcnlUb3VjaElkID09PSAtMSB8fCB0aGlzLnByaW1hcnlUb3VjaElkID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxUb3VjaERpc3RhbmNlID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoRGlzdGFuY2UgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hBbmdsZSA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbnRlciA9IG5ldyBnbFZlYzIoWy0xLCAtMV0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbKDxhbnk+ZXZlbnQpLmxheWVyWCwgKDxhbnk+ZXZlbnQpLmxheWVyWV0pO1xyXG4gICAgICAgICB0aGlzLm91ck9uRG93bihwb3MpO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZW1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgbGV0IHBvcyA9IG5ldyBnbFZlYzIoWyg8YW55PmV2ZW50KS5sYXllclgsICg8YW55PmV2ZW50KS5sYXllclldKTtcclxuICAgICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3VyT25EcmFnKHBvcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNldXAgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5vdXJPblVwKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9uZGJsY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgbGV0IHBvcyA9IG5ldyBnbFZlYzIoWyg8YW55PmV2ZW50KS5sYXllclgsICg8YW55PmV2ZW50KS5sYXllclldKTtcclxuICAgICAgICAgdGhpcy5vdXJEYmxDbGljayhwb3MpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0VG91Y2goZXZlbnQ6IFRvdWNoRXZlbnQsIGlkOiBudW1iZXIpOiBUb3VjaCB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRvdWNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRvdWNoID0gZXZlbnQudG91Y2hlc1tpXTtcclxuICAgICAgICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3VjaDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBubyBtYXRjaCB3YXMgZm91bmRcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0UG9zKHRvdWNoOiBUb3VjaCk6IGdsVmVjMiB7XHJcbiAgICAgIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMihbdG91Y2guY2xpZW50WCAtIHJlY3QueCwgdG91Y2guY2xpZW50WSAtIHJlY3QueV0pO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFRvdWNoZXMoZXZlbnQ6IFRvdWNoRXZlbnQpOiB7IHByaW1hcnlUb3VjaDogVG91Y2gsIHNlY29uZGFyeVRvdWNoOiBUb3VjaCB9IHtcclxuXHJcbiAgICAgIGlmICh0aGlzLnByaW1hcnlUb3VjaElkIDwgMCB8fCB0aGlzLnNlY29uZGFyeVRvdWNoSWQgPCAwKSB7XHJcbiAgICAgICAgIHRocm93IEVycm9yKCdUd28gdG91Y2hlcyBleHBlY3RlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICBwcmltYXJ5VG91Y2g6IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMucHJpbWFyeVRvdWNoSWQpLFxyXG4gICAgICAgICBzZWNvbmRhcnlUb3VjaDogdGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5zZWNvbmRhcnlUb3VjaElkKSxcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXB1dGVUb3VjaERpc3RhbmNlKGV2ZW50OiBUb3VjaEV2ZW50KTogbnVtYmVyIHtcclxuXHJcbiAgICAgIGxldCB0b3VjaGVzID0gdGhpcy5nZXRUb3VjaGVzKGV2ZW50KTtcclxuXHJcbiAgICAgIGxldCB4MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblk7XHJcbiAgICAgIGxldCB4MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWDtcclxuICAgICAgbGV0IHkyID0gdG91Y2hlcy5zZWNvbmRhcnlUb3VjaC5zY3JlZW5ZO1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGguc3FydCgoeDIgLSB4MSkgKiAoeDIgLSB4MSkgKyAoeTIgLSB5MSkgKiAoeTIgLSB5MSkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXB1dGVUb3VjaEFuZ2xlKGV2ZW50OiBUb3VjaEV2ZW50KTogbnVtYmVyIHtcclxuXHJcbiAgICAgIGxldCB0b3VjaGVzID0gdGhpcy5nZXRUb3VjaGVzKGV2ZW50KTtcclxuXHJcbiAgICAgIGxldCB4MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblk7XHJcbiAgICAgIGxldCB4MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWDtcclxuICAgICAgbGV0IHkyID0gdG91Y2hlcy5zZWNvbmRhcnlUb3VjaC5zY3JlZW5ZO1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29tcHV0ZVRvdWNoQ2VudGVyKGV2ZW50OiBUb3VjaEV2ZW50KTogZ2xWZWMyIHtcclxuXHJcbiAgICAgIGxldCB0b3VjaGVzID0gdGhpcy5nZXRUb3VjaGVzKGV2ZW50KTtcclxuXHJcbiAgICAgIGxldCB4MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MSA9IHRvdWNoZXMucHJpbWFyeVRvdWNoLnNjcmVlblk7XHJcbiAgICAgIGxldCB4MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWDtcclxuICAgICAgbGV0IHkyID0gdG91Y2hlcy5zZWNvbmRhcnlUb3VjaC5zY3JlZW5ZO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzIoWyh4MSArIHgyKSAvIDIsICh5MSArIHkyKSAvIDJdKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPbkRvd24ocG9zOiBnbFZlYzIpIHtcclxuXHJcbiAgICAgIC8vIGNoZWNrIGZvciBhIGNsaWNrIGhhbmRsZXJcclxuICAgICAgaWYgKHRoaXMub25DbGljayAmJiB0aGlzLm9uQ2xpY2socG9zLmNsb25lKCkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBub3QgaGFuZGxlZCBieSBhIGNsaWNrIGhhbmRlciwgc2VuZCB0aGUgb25Eb3duIGV2ZW50XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMubGFzdFBvcyA9IHBvcy5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMub25Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb3duKHBvcy5jbG9uZSgpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25VcCgpIHtcclxuXHJcbiAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vblVwKSB7XHJcbiAgICAgICAgIHRoaXMub25VcCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25EcmFnKHBvczogZ2xWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uRHJhZykge1xyXG4gICAgICAgICBsZXQgZGVsdGEgPSBuZXcgZ2xWZWMyKFtwb3MueCAtIHRoaXMubGFzdFBvcy54LCBwb3MueSAtIHRoaXMubGFzdFBvcy55XSk7XHJcbiAgICAgICAgIHRoaXMub25EcmFnKHBvcy5jbG9uZSgpLCBkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0UG9zID0gcG9zLmNsb25lKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyRGJsQ2xpY2socG9zOiBnbFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMub25EYmxDbGljaykge1xyXG4gICAgICAgICB0aGlzLm9uRGJsQ2xpY2socG9zKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uU2NhbGUoc2NhbGU6IG51bWJlciwgY2hhbmdlOiBudW1iZXIpIHtcclxuICAgICAgaWYgKHRoaXMub25TY2FsZSkge1xyXG4gICAgICAgICB0aGlzLm9uU2NhbGUoc2NhbGUsIGNoYW5nZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPblJvdGF0ZShhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uUm90YXRlKSB7XHJcbiAgICAgICAgIHRoaXMub25Sb3RhdGUoYW5nbGUsIGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uVHJhbnNsYXRlKGRlbHRhOiBnbFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMub25UcmFuc2xhdGUpIHtcclxuICAgICAgICAgdGhpcy5vblRyYW5zbGF0ZShkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGxvZ2dpbmcgdGltaW5nIG1lc3NhZ2VzIGZvciBwcm9maWxlIGNvZGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlciB7XHJcbiAgIC8vIHRoZSBsYXN0IHRpbWUgc3RhbXBcclxuICAgcHJpdmF0ZSB0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpIHtcclxuICAgICAgcmV0dXJuIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudCk7XHJcbiAgIH1cclxuICAgLyoqXHJcbiAgICAqIFByaW50cyBhIG1lc3NhZ2UgdG8gY29uc29sZSBvZiB0aGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBsYXN0IG1hcmtcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gcHJpbnQgd2l0aCB0aGUgdGltZVxyXG4gICAgKi9cclxuICAgcHVibGljIGxvZyhtc2c6IHN0cmluZykge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cgKyAnICcgKyB0aGlzLmVsYXBzZWRNcy50b0ZpeGVkKDEpICsgJyBtcycpO1xyXG4gICAgICB0aGlzLm1hcmsoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFVwZGF0ZXMgdGhlIHRpbWVzdGFtcCB0byBub3dcclxuICAgICovXHJcbiAgIHB1YmxpYyBtYXJrKCkge1xyXG4gICAgICB0aGlzLnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgfVxyXG5cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSBcIi4vQ29sb3JSYW5nZVwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3JXaXRoQWxwaGEgfSBmcm9tIFwiLi9odG1sQ29sb3JXaXRoQWxwaGFcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGEgcGFzc2VkIHRvIHRoZSBTbGlkZXIgY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlclNldHVwIHtcclxuICAgaWQ6IHN0cmluZyxcclxuICAgbGFiZWw6IHN0cmluZyxcclxuICAgbWluOiBudW1iZXIsXHJcbiAgIG1heDogbnVtYmVyLFxyXG4gICB2YWx1ZTogbnVtYmVyLFxyXG4gICBjb2xvcnM/OiBodG1sQ29sb3JbXSxcclxuICAgb25pbnB1dD86ICgpID0+IHZvaWQsXHJcbiAgIGdldFRleHQ/OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHNsaWRlciBjb21wb3NlZCBvZiBhIGxhYmVsLCBpbnB1dCByYW5nZSwgY29sb3Igc3BhbiBhbmQgdmFsdWUgc3BhblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsaWRlciB7XHJcblxyXG4gICBwcml2YXRlIF9yYW5nZTogSFRNTElucHV0RWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX3ZhbHVlU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF9jb2xvcnM6IENvbG9yUmFuZ2U7XHJcbiAgIHByaXZhdGUgX2dldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCBodG1sIG9iamVjdC5cclxuICAgICogQHBhcmFtIHNldHVwIFRoZSBzZXR1cCBkYXRhIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIHNldHVwOiBJU2xpZGVyU2V0dXApIHtcclxuXHJcbiAgICAgIHRoaXMuX2dldFRleHQgPSBzZXR1cC5nZXRUZXh0O1xyXG5cclxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkaXYuaWQgPSBzZXR1cC5pZDtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdTbGlkZXJEaXYnO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgIGxhYmVsLmlkID0gc2V0dXAuaWQgKyAnTGFiZWwnO1xyXG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSAnU2xpZGVyTGFiZWwnO1xyXG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBzZXR1cC5sYWJlbDtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgIHRoaXMuX3JhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgdGhpcy5fcmFuZ2UudHlwZSA9ICdyYW5nZSc7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmlkID0gc2V0dXAuaWQgKyAnUmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5jbGFzc05hbWUgPSAnU2xpZGVyUmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5taW4gPSBzZXR1cC5taW4udG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5fcmFuZ2UubWF4ID0gc2V0dXAubWF4LnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnZhbHVlID0gc2V0dXAudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5fcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKVxyXG4gICAgICB9KTtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuX3JhbmdlKTtcclxuXHJcbiAgICAgIGlmIChzZXR1cC5jb2xvcnMpIHtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICB0aGlzLl9jb2xvclNwYW4uaWQgPSBzZXR1cC5pZCArICdDb2xvclNwYW4nO1xyXG4gICAgICAgICB0aGlzLl9jb2xvclNwYW4uY2xhc3NOYW1lID0gJ1NsaWRlckNvbG9yU3Bhbic7XHJcbiAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl9jb2xvclNwYW4pO1xyXG5cclxuICAgICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIGNvbG9yLlxyXG4gICAgICAgICB0aGlzLmNvbG9ycyA9IHNldHVwLmNvbG9ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB0aGlzLl92YWx1ZVNwYW4uaWQgPSBzZXR1cC5pZCArICdWYWx1ZVNwYW4nO1xyXG4gICAgICB0aGlzLl92YWx1ZVNwYW4uY2xhc3NOYW1lID0gJ1NsaWRlclZhbHVlU3Bhbic7XHJcbiAgICAgIC8vICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl92YWx1ZVNwYW4pO1xyXG5cclxuICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIHNwYW4gdGV4dFxyXG4gICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZS5vbmlucHV0ID0gc2V0dXAub25pbnB1dDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIHNwYW4gY29sb3IgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvci5cclxuICAgICovXHJcbiAgIHByaXZhdGUgdXBkYXRlU3BhbkNvbG9yKCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgIGxldCB2YWwgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcclxuICAgICAgICAgbGV0IGNvbG9yID0gaHRtbENvbG9yLmZyb21Db2xvcih0aGlzLl9jb2xvcnMuZ2V0KHZhbCkpO1xyXG4gICAgICAgICB0aGlzLl9jb2xvclNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IudG9IZXgoKVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gKiBTZXRzIHRoZSBzcGFuIGNvbG9yIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuXHJcbiAqL1xyXG4gICBwcml2YXRlIHVwZGF0ZVNwYW5UZXh0KCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5fZ2V0VGV4dCkge1xyXG4gICAgICAgICB0aGlzLl92YWx1ZVNwYW4uaW5uZXJUZXh0ID0gdGhpcy5fZ2V0VGV4dCh0aGlzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgaHRtbCByYW5nZSBvYmplY3RcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBodG1sIHJhbmdlIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgcmFuZ2UoKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBzbGlkZXIgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JhbmdlLnZhbHVlQXNOdW1iZXI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIChhbmQgYXNzb2NpYXRlZCBjb250ZW50KVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCB0aGUgZGVzaXJlZCBzbGlkZXIgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgdmFsdWUodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5fcmFuZ2UudmFsdWVBc051bWJlciA9IHZhbDtcclxuICAgICAgdGhpcy51cGRhdGVTcGFuQ29sb3IoKTtcclxuICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtaW4gc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWluKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heCBzbGlkZXIgdmFsdWUuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWF4KTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIGNvbG9yIGZvciB0aGUgc2xpZGVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IGNvbG9ycyhjb2xvcnM6IGh0bWxDb2xvcltdKSB7XHJcblxyXG4gICAgICAvLyBzdG9yZSB0aGUgY29sb3JzXHJcbiAgICAgIHRoaXMuX2NvbG9ycyA9IG5ldyBDb2xvclJhbmdlKGNvbG9ycyk7XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgZ3JhZGllbnQgc3R5bGUgZm9yIHRoZSByYW5nZSBvYmplY3RcclxuICAgICAgbGV0IGdyYWRpZW50U3RyID0gJzkwZGVnJztcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgZ3JhZGllbnRTdHIgKz0gJywgJyArIGNvbG9yc1tpXS50b0NzcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3JhbmdlLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KCcgKyBncmFkaWVudFN0ciArICcpJztcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3BhbiBjb2xvciB0b29cclxuICAgICAgdGhpcy51cGRhdGVTcGFuQ29sb3IoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIGN1cnJlbnQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGh0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgIGxldCB2YWwgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ycy5nZXQodmFsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGh0bWxDb2xvcldpdGhBbHBoYS50cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgY3VycmVudCBjb2xvciBhcyBhIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGN1cnJlbnQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGdsQ29sb3IoKTogZ2xDb2xvciB7XHJcbiAgICAgIGlmICh0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgbGV0IHZhbCA9ICh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JzLmdldCh2YWwpLnRvR2xDb2xvcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3IoWzAsIDAsIDBdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCIvKipcclxuICogU3BoZXJpY2FsIGNvb3JkaW5hdGVzIGJhc2VkIG9uIHRoZSBXZWJHTCB2aWV3aW5nIHN5c3RlbTogeD1sZWZ0LXJpZ2h0LCB5PXVwLWRvd24sIHo9bmVhci1mYXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWxDb29yZCB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxldmF0aW9uIGZyb20gdGhlIGZsb29yIHRvIHRoZSBwb2ludC4gMCBhbmQgMTgwIGFyZSBvbiB0aGVcclxuICAgICogZmxvb3IuIDkwIHBvaW50cyB1cC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBlbGV2YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYW5nbGUsIHdoZW4gbG9va2luZyBkb3duIGZyb20gdGhlIHRvcCwgdG8gdGhlIHBvaW50LiAwIHBvaW50cyByaWdodC5cclxuICAgICovXHJcbiAgIHB1YmxpYyByb3RhdGlvbkFuZ2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSByYWRpdXNcclxuICAgICogQHBhcmFtIGVsZXZhdGlvbkFuZ2xlIFxyXG4gICAgKiBAcGFyYW0gcm90YXRpb25BbmdsZSBcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgZWxldmF0aW9uQW5nbGU6IG51bWJlciwgcm90YXRpb25BbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICB0aGlzLmVsZXZhdGlvbkFuZ2xlID0gZWxldmF0aW9uQW5nbGU7XHJcbiAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IHJvdGF0aW9uQW5nbGU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3BoZXJpY2FsIGNvb3JkaW5hdGUgZnJvbSBhIGNhcnRlc2lhbiBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHBvcyBUaGUgY2FydGVzaWFuIHBvaW50LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc3BoZXJpY2FsIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21YWVoocG9zOiBudW1iZXJbXSk6IFNwaGVyaWNhbENvb3JkIHtcclxuXHJcbiAgICAgIGxldCB4ID0gcG9zWzBdO1xyXG4gICAgICBsZXQgeSA9IHBvc1sxXTtcclxuICAgICAgbGV0IHogPSBwb3NbMl07XHJcblxyXG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XHJcbiAgICAgIGxldCByb3RhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hdGFuMih6LCB4KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hc2luKHkgLyByYWRpdXMpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcGhlcmljYWxDb29yZChyYWRpdXMsIGVsZXZhdGlvbkFuZ2xlLCByb3RhdGlvbkFuZ2xlKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgc3BoZXJpY2FsIGNvb3JkaW5hdGUgdG8gYSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1hZWigpOiBudW1iZXJbXSB7XHJcblxyXG4gICAgICBsZXQgZmxvb3JSYWRpdXMgPSB0aGlzLnJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeCA9IGZsb29yUmFkaXVzICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeiA9IGZsb29yUmFkaXVzICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBbeCwgeSwgel07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvVGV4dHVyZVJlbmRlcmVyVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgZnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1RleHR1cmVSZW5kZXJlckZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJy4vR2xvYmFscyc7XHJcbmltcG9ydCB7IGdsQ29tcGlsZXIgfSBmcm9tICcuL2dsQ29tcGlsZXInO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgZG9lcyB0aGUgd29yayBvZiBidWlsZGluZyB0aGUgUGF0aCBUcmFjZWQgdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHR1cmVSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdmVydGV4QnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuXHJcbiAgIHByaXZhdGUgdmVydGljZXMgPSBbXHJcbiAgICAgIC0xLCAtMSxcclxuICAgICAgLTEsICsxLFxyXG4gICAgICArMSwgLTEsXHJcbiAgICAgICsxLCArMVxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGdsQ3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB7XHJcblxyXG4gICAgICB0aGlzLmdsID0gZ2xDdHg7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdmVydGV4IGJ1ZmZlciAtIHRoZSBibG9jayB3ZSdsbCBkcmF3IG91ciByZW5kZXJlZCB0ZXh0dXJlIG9uXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgc2hhZGVyXHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShnbCwgdmVydGV4U291cmNlLCBmcmFnbWVudFNvdXJjZSk7XHJcbiAgICAgIHRoaXMudmVydGV4QXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudmVydGV4QXR0cmlidXRlKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlbmRlcih0ZXh0dXJlOiBXZWJHTFRleHR1cmUpOiB2b2lkIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIC8qXHJcbiAgICAgIC8vIHNpemUgb2YgdGhlIGFjdHVhbCBjYW52YXMuIFRoZSB0ZXh0dXJlIHdlIGNyZWF0ZSBpcyBkcmF3biB0byB0aGlzIGl0ZW1cclxuICAgICAgbGV0IHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgaWYgKGlzTW9iaWxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAvLyBub3Qgc3VyZSB3aHksIGJ1dCB0aGlzIGJhc2ljYWxseSBiZWNvbWVzIGZ1bGwgd2lkdGggb24gbXkgcGhvbmVcclxuICAgICAgICAgc2l6ZSA9IDUxMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2wuY2FudmFzLndpZHRoID0gc2l6ZTtcclxuICAgICAgZ2wuY2FudmFzLmhlaWdodCA9IHNpemU7XHJcbiAgICAgICovXHJcbiAgICAgIC8vZ2wuY2FudmFzLndpZHRoID0gMTI4O1xyXG4gICAgICAvL2dsLmNhbnZhcy5oZWlnaHQgPSAxMjg7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IDUxMjtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBsYW5lc0FwcCB9IGZyb20gXCIuL1BsYW5lc0FwcFwiO1xyXG5pbXBvcnQgeyB0b1JhZCwgdG9EZWcsIGNsYW1wLCBpc01vYmlsZSB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgZ2xWZWMyIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5cclxuLy8gVE9ETyBtYWtlIHRoZXNlIHZhcmlhYmxlc1xyXG5leHBvcnQgbGV0IHRleHR1cmVTaXplID0gMjU2O1xyXG5leHBvcnQgbGV0IGRpc3BsYXlTaXplID0gMTUwO1xyXG5cclxuZXhwb3J0IHR5cGUgVGhyZXNob2xkQ2hhbmdlRnVuY3Rpb24gPSAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcblxyXG5jb25zdCBOT01JTkFMX0RJU1BMQVlfU0laRSA9IDE1MDtcclxuY29uc3QgTk9NSU5BTF9LTk9CX0xFTkdUSCA9IDI1O1xyXG5jb25zdCBOT01JTkFMX0tOT0JfUkFESVVTID0gMTA7XHJcblxyXG5leHBvcnQgY2xhc3MgVGhyZXNob2xkQ3RybCB7XHJcbiAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgcHJpdmF0ZSBoaWRkZW5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBwcml2YXRlIGFwcDogUGxhbmVzQXBwO1xyXG4gICBwcml2YXRlIG1vdXNlT2Zmc2V0ID0gbmV3IGdsVmVjMigpO1xyXG4gICBwcml2YXRlIGhpdCA9IDA7XHJcbiAgIHByaXZhdGUgaGFuZGxlcjogUG9pbnRlckV2ZW50SGFuZGxlcjtcclxuXHJcbiAgIHByaXZhdGUgYmFsbENlbnRlcjogZ2xWZWMyO1xyXG4gICBwcml2YXRlIHAxOiBnbFZlYzI7XHJcbiAgIHByaXZhdGUgcDI6IGdsVmVjMjtcclxuXHJcbiAgIHByaXZhdGUgb25UaHJlc2hvbGQxQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbjtcclxuICAgcHJpdmF0ZSBvblRocmVzaG9sZDJDaGFuZ2U6IFRocmVzaG9sZENoYW5nZUZ1bmN0aW9uO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICBhcHA6IFBsYW5lc0FwcCxcclxuICAgICAgb25UaHJlc2hvbGQxQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbixcclxuICAgICAgb25UaHJlc2hvbGQyQ2hhbmdlOiBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvblxyXG4gICApIHtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBkaXNwbGF5U2l6ZSA9IDMwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgIHRoaXMub25UaHJlc2hvbGQxQ2hhbmdlID0gb25UaHJlc2hvbGQxQ2hhbmdlO1xyXG4gICAgICB0aGlzLm9uVGhyZXNob2xkMkNoYW5nZSA9IG9uVGhyZXNob2xkMkNoYW5nZTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuY2FudmFzLmlkID0gJ1RocmVzaG9sZENhbnZhcyc7XHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gZGlzcGxheVNpemU7XHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRpc3BsYXlTaXplO1xyXG5cclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLndpZHRoID0gdGV4dHVyZVNpemU7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLmhlaWdodCA9IHRleHR1cmVTaXplO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5DYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIodGhpcy5jYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Eb3duID0gKHBvczogZ2xWZWMyKSA9PiB0aGlzLm9uRG93bihwb3MpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25EcmFnID0gKHBvczogZ2xWZWMyLCBkZWx0YTogZ2xWZWMyKSA9PiB0aGlzLm9uRHJhZyhwb3MsIGRlbHRhKTtcclxuICAgfVxyXG4gICBwcml2YXRlIG9uRG93bihwb3M6IGdsVmVjMikge1xyXG5cclxuICAgICAgdGhpcy5oaXRUZXN0KHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgaGl0VGVzdChwb3M6IGdsVmVjMikge1xyXG4gICAgICBsZXQgZDEgPSB0aGlzLnAxLmRpc3RhbmNlKHBvcyk7XHJcbiAgICAgIGxldCBkMiA9IHRoaXMucDIuZGlzdGFuY2UocG9zKTtcclxuXHJcbiAgICAgIGNvbnN0IEhJVF9SQURJVVMgPSBOT01JTkFMX0tOT0JfUkFESVVTICogKGRpc3BsYXlTaXplIC8gTk9NSU5BTF9ESVNQTEFZX1NJWkUpO1xyXG4gICAgICBpZiAoZDEgPCBISVRfUkFESVVTICYmIGQxIDw9IGQyKSB7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gMTtcclxuICAgICAgICAgdGhpcy5tb3VzZU9mZnNldCA9IG5ldyBnbFZlYzIoW3RoaXMucDEueCAtIHBvcy54LCB0aGlzLnAxLnkgLSBwb3MueV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGQyIDwgSElUX1JBRElVUyAmJiBkMiA8PSBkMSkge1xyXG4gICAgICAgICB0aGlzLmhpdCA9IDI7XHJcbiAgICAgICAgIHRoaXMubW91c2VPZmZzZXQgPSBuZXcgZ2xWZWMyKFt0aGlzLnAyLnggLSBwb3MueCwgdGhpcy5wMi55IC0gcG9zLnldKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5oaXQgPSAwO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25EcmFnKHBvczogZ2xWZWMyLCBkZWx0YTogZ2xWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLmhpdCA+IDApIHtcclxuICAgICAgICAgbGV0IGhpdFB0ID0gbmV3IGdsVmVjMihbcG9zLnggKyB0aGlzLm1vdXNlT2Zmc2V0LngsIHBvcy55ICsgdGhpcy5tb3VzZU9mZnNldC55XSk7XHJcbiAgICAgICAgIGhpdFB0LnggPSBNYXRoLm1heChoaXRQdC54LCB0aGlzLmJhbGxDZW50ZXIueCk7XHJcbiAgICAgICAgIGhpdFB0LnkgPSBNYXRoLm1pbihoaXRQdC55LCB0aGlzLmJhbGxDZW50ZXIueSk7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGxDZW50ZXIuZGlzdGFuY2UoaGl0UHQpO1xyXG4gICAgICAgICBsZXQgYW5nbGUgPSBjbGFtcCh0b0RlZyhNYXRoLmFzaW4oKGhpdFB0LnggLSB0aGlzLmJhbGxDZW50ZXIueCkgLyByYWRpdXMpKSwgMCwgOTApO1xyXG4gICAgICAgICBpZiAodGhpcy5oaXQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uVGhyZXNob2xkMUNoYW5nZShhbmdsZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25UaHJlc2hvbGQyQ2hhbmdlKGFuZ2xlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkcmF3KCkge1xyXG5cclxuICAgICAgbGV0IGJhbGxJbWFnZURhdGEgPSB0aGlzLmFwcC5yZW5kZXJlci5nZXRCYWxsSW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGJhbGxJbWFnZURhdGEuaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKDAsIGRpc3BsYXlTaXplIC8gMik7XHJcbiAgICAgIGN0eC5zY2FsZShkaXNwbGF5U2l6ZSAvIHRleHR1cmVTaXplLCAtZGlzcGxheVNpemUgLyB0ZXh0dXJlU2l6ZSk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5oaWRkZW5DYW52YXMsIDAsIC10ZXh0dXJlU2l6ZSAvIDIpO1xyXG5cclxuICAgICAgY3R4LnJlc2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIHRoaXMuYmFsbENlbnRlciA9IG5ldyBnbFZlYzIoW1xyXG4gICAgICAgICBkaXNwbGF5U2l6ZSAqIGJhbGxJbWFnZURhdGEuYmFsbENlbnRlci54LFxyXG4gICAgICAgICBkaXNwbGF5U2l6ZSAqICgxIC0gYmFsbEltYWdlRGF0YS5iYWxsQ2VudGVyLnkpXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdsaW1lZ3JlZW4nO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snXHJcblxyXG4gICAgICBjb25zdCBLTk9CX0xFTkdUSCA9IE5PTUlOQUxfS05PQl9MRU5HVEggKiAoZGlzcGxheVNpemUgLyBOT01JTkFMX0RJU1BMQVlfU0laRSk7XHJcbiAgICAgIGNvbnN0IEtOT0JfUkFESVVTID0gTk9NSU5BTF9LTk9CX1JBRElVUyAqIChkaXNwbGF5U2l6ZSAvIE5PTUlOQUxfRElTUExBWV9TSVpFKTtcclxuICAgICAgbGV0IHIgPSBkaXNwbGF5U2l6ZSAqIGJhbGxJbWFnZURhdGEuYmFsbFJhZGl1cztcclxuICAgICAgbGV0IHMxID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDEsIHIpO1xyXG4gICAgICB0aGlzLnAxID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDEsIHIgKyBLTk9CX0xFTkdUSCk7XHJcbiAgICAgIGxldCBzMiA9IHRoaXMuZ2V0UHQodGhpcy5iYWxsQ2VudGVyLCB0aGlzLmFwcC5yZW5kZXJlci50aHJlc2hvbGQyLCByKTtcclxuICAgICAgdGhpcy5wMiA9IHRoaXMuZ2V0UHQodGhpcy5iYWxsQ2VudGVyLCB0aGlzLmFwcC5yZW5kZXJlci50aHJlc2hvbGQyLCByICsgS05PQl9MRU5HVEgpO1xyXG5cclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICgxIC8gMTUwKSAqIGRpc3BsYXlTaXplO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oczEueCwgczEueSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5wMS54LCB0aGlzLnAxLnkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmModGhpcy5wMS54LCB0aGlzLnAxLnksIEtOT0JfUkFESVVTLCAwLCB0b1JhZCgzNjApKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKHMyLngsIHMyLnkpO1xyXG4gICAgICBjdHgubGluZVRvKHRoaXMucDIueCwgdGhpcy5wMi55KTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHRoaXMucDIueCwgdGhpcy5wMi55LCBLTk9CX1JBRElVUywgMCwgdG9SYWQoMzYwKSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRQdChjZW50ZXI6IGdsVmVjMiwgdGhyZXNob2xkOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogZ2xWZWMyIHtcclxuXHJcbiAgICAgIGxldCBveSA9IHJhZGl1cyAqIE1hdGguc2luKHRvUmFkKDkwIC0gdGhyZXNob2xkKSk7XHJcbiAgICAgIGxldCBveCA9IHJhZGl1cyAqIE1hdGguY29zKHRvUmFkKDkwIC0gdGhyZXNob2xkKSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMihbY2VudGVyLnggKyBveCwgY2VudGVyLnkgLSBveV0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSAzRCBhcnJvdyB1c2luZyB0cmlhbmdsZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZUFycm93IGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgc3VwZXIoJ0Fycm93Jyk7XHJcbiAgICAgIGNvbnN0IE5VTV9TVEVQUyA9IDMwO1xyXG4gICAgICBjb25zdCBUSVAgPSBuZXcgZ2xWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgIGNvbnN0IFRPVEFMX0xFTkdUSCA9IDAuNDtcclxuICAgICAgY29uc3QgQVJST1dfUkFESVVTID0gMC4xNTtcclxuICAgICAgY29uc3QgQVJST1dfTEVOR1RIID0gMS41ICogQVJST1dfUkFESVVTO1xyXG4gICAgICBjb25zdCBTSEFGVF9SQURJVVMgPSAwLjUgKiBBUlJPV19SQURJVVM7XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgYXJyb3cgaGVhZFxyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2goVElQKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoWzAsIEFSUk9XX0xFTkdUSCwgMF0pKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgeCA9IEFSUk9XX1JBRElVUyAqIE1hdGguc2luKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB5ID0gQVJST1dfTEVOR1RIO1xyXG4gICAgICAgICBsZXQgeiA9IEFSUk9XX1JBRElVUyAqIE1hdGguY29zKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFt4LCB5LCB6XSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBpVGlwID0gMDtcclxuICAgICAgbGV0IGlCYXNlID0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaTEgPSAyICsgaTtcclxuICAgICAgICAgbGV0IGkyID0gKGkgPT0gTlVNX1NURVBTIC0gMSkgPyAwIDogaTEgKyAxO1xyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpVGlwLCBpMiwgaTEsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpQmFzZSwgaTEsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGFycm93IHNoYWZ0XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFswLCBUT1RBTF9MRU5HVEgsIDBdKSk7XHJcbiAgICAgIGxldCBpRW5kID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gU0hBRlRfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBBUlJPV19MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gU0hBRlRfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgeCA9IFNIQUZUX1JBRElVUyAqIE1hdGguc2luKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB5ID0gVE9UQUxfTEVOR1RIO1xyXG4gICAgICAgICBsZXQgeiA9IFNIQUZUX1JBRElVUyAqIE1hdGguY29zKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFt4LCB5LCB6XSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBpU3RhcnQgPSBpRW5kICsgMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaTEgPSBpU3RhcnQgKyBpO1xyXG4gICAgICAgICBsZXQgaTIgPSAoaSA9PSBOVU1fU1RFUFMgLSAxKSA/IGlTdGFydCA6IGkxICsgMTtcclxuICAgICAgICAgbGV0IGkzID0gaTEgKyBOVU1fU1RFUFM7XHJcbiAgICAgICAgIGxldCBpNCA9IGkyICsgTlVNX1NURVBTO1xyXG5cclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkyLCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGk0LCBpMywgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMywgaTQsIGlFbmQsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBWb2x1bWUgfSBmcm9tIFwiLi9Wb2x1bWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZUN1YmUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyLCBjZW50ZXI6IGdsVmVjMykge1xyXG5cclxuICAgICAgc3VwZXIoJ0N1YmUnKTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlVHJpYW5nbGVzKHNpemUsIGNlbnRlcik7XHJcblxyXG4gICAgICB0aGlzLnZvbHVtZXMucHVzaChuZXcgVm9sdW1lKCkpO1xyXG4gICAgICB0aGlzLnZvbHVtZXNbMF0uYm94TWluID0gdGhpcy5ib3hNaW4uY2xvbmUoKTtcclxuICAgICAgdGhpcy52b2x1bWVzWzBdLmJveE1heCA9IHRoaXMuYm94TWF4LmNsb25lKCk7XHJcbiAgICAgIHRoaXMudm9sdW1lc1swXS50cmlhbmdsZXMgPSB0aGlzLnRyaWFuZ2xlcztcclxuICAgfVxyXG5cclxuICAgY3JlYXRlRmFjZShpMTogbnVtYmVyLCBpMjogbnVtYmVyLCBpMzogbnVtYmVyLCBpNDogbnVtYmVyKSB7XHJcblxyXG4gICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTIsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTIsIGk0LCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgIH1cclxuXHJcbiAgIGNyZWF0ZVRyaWFuZ2xlcyhzaXplOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54IC0gc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56IC0gc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCArIHNpemUgLyAyLCBjZW50ZXIueSAtIHNpemUgLyAyLCBjZW50ZXIueiArIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55ICsgc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMCwgMSwgMiwgMyk7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSg0LCA2LCA1LCA3KTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgwLCA0LCAxLCA1KTtcclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDIsIDMsIDYsIDcpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDAsIDIsIDQsIDYpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMSwgNSwgMywgNyk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVm9sdW1lIH0gZnJvbSBcIi4vVm9sdW1lXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4vUHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IEJsb2JGaWxlIH0gZnJvbSBcIi4vQmxvYkZpbGVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE5vcm1hbFR5cGUge1xyXG4gICBTbW9vdGgsXHJcbiAgIEZsYXRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRGF0YSB7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgdmVydGljZXM6IEZsb2F0MzJBcnJheTtcclxuICAgbm9ybWFsczogRmxvYXQzMkFycmF5O1xyXG4gICBuSW5kaWNlczogSW50MzJBcnJheTtcclxuICAgdkluZGljZXM6IEludDMyQXJyYXk7XHJcbiAgIGJveE1pbjogZ2xWZWMzO1xyXG4gICBib3hNYXg6IGdsVmVjMztcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gY29tcHV0ZSBub3JtYWxzIGZvciB2ZXJ0aWNlcyB0aGF0IGpvaW4gbXVsdGlwbGUgZmFjZXNcclxuICovXHJcbmNsYXNzIE11bHRpTm9ybVZlcnRleCB7XHJcbiAgIHByaXZhdGUgbm9ybWFsczogZ2xWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBub3JtYWwgYnkgYXZlcmFnaW5nIGFsbCB0aGUgaW5kaXZpZHVhbCBub3JtYWxzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmVydGV4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IG5vcm1hbCgpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgbiA9IG5ldyBnbFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcmVwcmVzZW50aW5nIGFuIG9iamVjdCBmcm9tIGEgYnVuY2ggb2YgdHJpYW5nbGVzLiBUaGUgY2xhc3NcclxuICogZWZmaWNpZW50bHkgbWFuYWdlcyB0aGUgdHJpYW5nbGVzIGJ5IHN0b3JpbmcgdGhlbSBpbiB2b2x1bWVzIGFuZCBieVxyXG4gKiBwYXNzaW5nIHRoZW0gdG8gV2ViR0wgdXNpbmcgVW5pZm9ybSBCdWZmZXJzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmoge1xyXG4gICBwdWJsaWMgdmVydGljZXM6IGdsVmVjM1tdID0gW107XHJcbiAgIHB1YmxpYyBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICBwdWJsaWMgdHJpYW5nbGVzOiBJbmRleGVkVHJpYW5nbGVbXSA9IFtdO1xyXG4gICBwdWJsaWMgYm94TWluID0gbmV3IGdsVmVjMyhbTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgYm94TWF4ID0gbmV3IGdsVmVjMyhbLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgdm9sdW1lczogVm9sdW1lW10gPSBbXTtcclxuICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3hNYXgueSAtIHRoaXMuYm94TWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnogLSB0aGlzLmJveE1pbi56O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi54ICsgdGhpcy5ib3hNYXgueCkgLyAyLFxyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueSArIHRoaXMuYm94TWF4LnkpIC8gMixcclxuICAgICAgICAgKHRoaXMuYm94TWluLnogKyB0aGlzLmJveE1heC56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobmFtZT86IHN0cmluZykge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgcHVzaCh0cmk6IEluZGV4ZWRUcmlhbmdsZSkge1xyXG4gICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKHRyaSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnggPSBNYXRoLm1pbih0aGlzLmJveE1pbi54LCB0cmkubWluWCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0cmkubWluWSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSBNYXRoLm1pbih0aGlzLmJveE1pbi56LCB0cmkubWluWik7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0cmkubWF4WCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB0cmkubWF4WSk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSBNYXRoLm1heCh0aGlzLmJveE1heC56LCB0cmkubWF4Wik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTY2FsZXMgdGhlIG9iamVjdCB0byB0aGUgc3BlY2lmaWVkIHNpemUgYW5kIGNlbnRlcnMgaXQgYWJvdXQgKDAsMCwwKVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNpemUgVGhlIG1heCBzaXplIGZvciB0aGUgd2lkdGgsIGhlaWdodCwgYW5kIGRlcHRoXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXV0b0NlbnRlcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCB0cmFucyA9IG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnggKyB0aGlzLmJveE1pbi54KSAvIDIsXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueSArIHRoaXMuYm94TWluLnkpIC8gMixcclxuICAgICAgICAgLSh0aGlzLmJveE1heC56ICsgdGhpcy5ib3hNaW4ueikgLyAyLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCBzY2FsZSA9IHNpemUgLyBNYXRoLm1heCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5kZXB0aCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG5cclxuICAgICAgICAgdi54ID0gKHYueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYueSA9ICh2LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LnogPSAodi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib3hNaW4ueCA9ICh0aGlzLmJveE1pbi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9ICh0aGlzLmJveE1pbi55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9ICh0aGlzLmJveE1pbi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9ICh0aGlzLmJveE1heC54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9ICh0aGlzLmJveE1heC55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9ICh0aGlzLmJveE1heC56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52b2x1bWVzW2ldO1xyXG4gICAgICAgICB2LmJveE1pbi54ID0gKHYuYm94TWluLnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1pbi55ID0gKHYuYm94TWluLnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1pbi56ID0gKHYuYm94TWluLnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC54ID0gKHYuYm94TWF4LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC55ID0gKHYuYm94TWF4LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC56ID0gKHYuYm94TWF4LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLmxvZygnYXV0b0FkanVzdCgpJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTaGlmdCB0aGUgb2JqZWN0IGluIHNwYWNlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG9mZnNldCBUaGUgYW1vdW50IHRvIHNoaWZ0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG5cclxuICAgICAgICAgdi54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICB2LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgIHYueiArPSBvZmZzZXQuejtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib3hNaW4ueCArPSBvZmZzZXQueDtcclxuICAgICAgdGhpcy5ib3hNaW4ueSArPSBvZmZzZXQueTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiArPSBvZmZzZXQuejtcclxuICAgICAgdGhpcy5ib3hNYXgueCArPSBvZmZzZXQueDtcclxuICAgICAgdGhpcy5ib3hNYXgueSArPSBvZmZzZXQueTtcclxuICAgICAgdGhpcy5ib3hNYXgueiArPSBvZmZzZXQuejtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2b2wgPSB0aGlzLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdm9sLmJveE1pbi55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2b2wuYm94TWluLnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdm9sLmJveE1heC55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEJyZWFrcyB0aGUgb2JqZWN0IGludG8gZXZlbmx5IHNwYWNlZCB2b2x1bWVzLiBUaGUgbnVtYmVyIG9mIHZvbHVtZXMgaXMgYXV0b21hdGljYWxseVxyXG4gICAgKiBkZXRlcm1pbmVkIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGJyZWFrSW50b1ZvbHVtZXMoKSB7XHJcbiAgICAgIGxldCBudW1TdGVwcztcclxuICAgICAgaWYgKHRoaXMudHJpYW5nbGVzLmxlbmd0aCA8IDQwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyaWFuZ2xlcy5sZW5ndGggPCAxNTAwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAzO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudm9sdW1lcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KG51bVN0ZXBzLCAzKTsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudm9sdW1lcy5wdXNoKG5ldyBWb2x1bWUoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHQgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWCAtIHRoaXMuYm94TWluLngpIC8gKHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54KSk7XHJcbiAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblkgLSB0aGlzLmJveE1pbi55KSAvICh0aGlzLmJveE1heC55IC0gdGhpcy5ib3hNaW4ueSkpO1xyXG4gICAgICAgICBsZXQgeiA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5aIC0gdGhpcy5ib3hNaW4ueikgLyAodGhpcy5ib3hNYXgueiAtIHRoaXMuYm94TWluLnopKTtcclxuICAgICAgICAgeCA9IGNsYW1wKHgsIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHkgPSBjbGFtcCh5LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB6ID0gY2xhbXAoeiwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgbGV0IGluZGV4ID0geCArIHkgKiBudW1TdGVwcyArIHogKiBudW1TdGVwcyAqIG51bVN0ZXBzO1xyXG4gICAgICAgICB0aGlzLnZvbHVtZXNbaW5kZXhdLnB1c2godCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWxzKHR5cGU6IE5vcm1hbFR5cGUpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICAgICBsZXQgbXVsdGlOb3JtVmVydGljZXM6IE11bHRpTm9ybVZlcnRleFtdID0gW107XHJcbiAgICAgIGlmICh0eXBlID09PSBOb3JtYWxUeXBlLlNtb290aCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXMucHVzaChuZXcgTXVsdGlOb3JtVmVydGV4KCkpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgbm9ybWFscyB3aXRoIGVhY2ggdmVydGV4IC0gd2UnbGwgbGF0ZXIgYXZlcmFnZSB0aGVzZVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgbGV0IG4gPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYwXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYxXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYyXS5wdXNoKG4pO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbm9ybWFscyBhcnJheVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11bHRpTm9ybVZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChtdWx0aU5vcm1WZXJ0aWNlc1tpXS5ub3JtYWwpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyB1cGRhdGUgdGhlIHRyaWFuZ2xlc1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgdHJpLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICAgICB0cmkuaU4wID0gdHJpLmlWMDtcclxuICAgICAgICAgICAgdHJpLmlOMSA9IHRyaS5pVjE7XHJcbiAgICAgICAgICAgIHRyaS5pTjIgPSB0cmkuaVYyO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2godHJpLmNvbXB1dGVOb3JtYWwoKSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG5vcm1hbHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRyaS5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgICAgdHJpLmlOMCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0cmkuaU4xID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRyaS5pTjIgPSBpbmRleDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcblxyXG4gICAgICBwLmxvZygnY29tcHV0ZU5vcm1hbHMnKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgaW4gdGhlIGZvciAuT0JKIGZpbGUgZm9ybWF0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9PYmpTdHJpbmcoZGlnaXRzID0gOCkge1xyXG5cclxuICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICBzdHIgKz0gJyMgVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJyMgTm9ybWFsczogJyArIHRoaXMubm9ybWFscy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICcjIFRyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJ1xcbic7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICBzdHIgKz0gJ3YgJyArIHYueC50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdi55LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2LnoudG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBuID0gdGhpcy5ub3JtYWxzW2ldO1xyXG4gICAgICAgICBzdHIgKz0gJ3ZuICcgKyBuLngudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG4ueS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgbi56LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIHN0ciArPSAnZiAnICtcclxuICAgICAgICAgICAgKHQuaVYwICsgMSkgKyAnLy8nICsgKHQuaU4wICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pVjEgKyAxKSArICcvLycgKyAodC5pTjEgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmlWMiArIDEpICsgJy8vJyArICh0LmlOMiArIDEpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcHRpbWl6ZShub3JtYWxUeXBlOiBOb3JtYWxUeXBlKSB7XHJcblxyXG4gICAgICBsZXQgbXNnID0gJ09wdGltaXplZCAuT0JKIGNvbnRlbnQgY29waWVkIHRvIGNsaXBib2FyZFxcblxcbic7XHJcbiAgICAgIG1zZyArPSAnTnVtIFRyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCArICdcXG4nO1xyXG5cclxuICAgICAgbGV0IHZlcnRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICBsZXQgaW5kZXhUb0luZGV4TWFwID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgIC8vIGZpcnN0IGdlbmVyYXRlIGEgdW5pcXVlIHNldCBvZiB2ZXJ0aWNlc1xyXG4gICAgICBsZXQgdW5pcXVlVmVydGljZXM6IGdsVmVjM1tdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgbGV0IG9sZFZlcnRleCA9IHRoaXMudmVydGljZXNbaV07XHJcbiAgICAgICAgIGxldCBrZXkgPSB0aGlzLnZlcnRpY2VzW2ldLnRvU3RyaW5nKDQsICcgJyk7XHJcbiAgICAgICAgIGxldCBvbGRJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICBsZXQgbmV3SW5kZXg7XHJcbiAgICAgICAgIGlmICh2ZXJ0ZXhUb0luZGV4TWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIC8vIGp1c3QgbWFwIHRoZSBvbGQgaW5kZXggdG8gdGhlIGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gdmVydGV4VG9JbmRleE1hcC5nZXQoa2V5KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGVudHJ5XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gdW5pcXVlVmVydGljZXMubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgdmVydGV4VG9JbmRleE1hcC5zZXQoa2V5LCBuZXdJbmRleCk7XHJcbiAgICAgICAgICAgIHVuaXF1ZVZlcnRpY2VzLnB1c2gob2xkVmVydGV4KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgdHJhbnNsYXRpb25cclxuICAgICAgICAgaW5kZXhUb0luZGV4TWFwLnNldChvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgb2xkU2l6ZSA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xyXG4gICAgICBsZXQgbmV3U2l6ZSA9IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aDtcclxuICAgICAgbXNnICs9ICdOdW0gVmVydGljZXM6ICcgKyBvbGRTaXplICsgJyB0byAnICsgbmV3U2l6ZSArICcsICcgKyAoMTAwICogbmV3U2l6ZSAvIG9sZFNpemUpLnRvRml4ZWQoKSArICcgJVxcbic7XHJcblxyXG4gICAgICAvLyByZXNldCBhbGwgdGhlIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMudmVydGljZXMgPSB1bmlxdWVWZXJ0aWNlcztcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIHRyaS52ZXJ0aWNlcyA9IHVuaXF1ZVZlcnRpY2VzO1xyXG4gICAgICAgICB0cmkuaVYwID0gaW5kZXhUb0luZGV4TWFwLmdldCh0cmkuaVYwICsgMSkgLSAxO1xyXG4gICAgICAgICB0cmkuaVYxID0gaW5kZXhUb0luZGV4TWFwLmdldCh0cmkuaVYxICsgMSkgLSAxO1xyXG4gICAgICAgICB0cmkuaVYyID0gaW5kZXhUb0luZGV4TWFwLmdldCh0cmkuaVYyICsgMSkgLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvbGRTaXplID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhub3JtYWxUeXBlKTtcclxuICAgICAgbmV3U2l6ZSA9IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG1zZyArPSAnTnVtIE5vcm1hbHM6ICcgKyBvbGRTaXplICsgJyB0byAnICsgbmV3U2l6ZSArICcsICcgKyAoMTAwICogbmV3U2l6ZSAvIG9sZFNpemUpLnRvRml4ZWQoKSArICcgJSc7XHJcblxyXG4gICAgICBsZXQgc3RyID0gdGhpcy50b09ialN0cmluZyg2KTtcclxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc3RyKS50aGVuKCgpID0+IHsgYWxlcnQobXNnKSB9KTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwdXNoVmVjKGFycmF5OiBudW1iZXJbXSwgdmVjOiBnbFZlYzMpIHtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueCk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnkpO1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbWJpbmUodE9iajogVHJpYW5nbGVPYmopIHtcclxuICAgICAgbGV0IHN0YXJ0VkluZGV4ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICAgIGxldCBzdGFydE5JbmRleCA9IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRPYmoudmVydGljZXNbaV0uY2xvbmUoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHRPYmoubm9ybWFsc1tpXS5jbG9uZSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdE9iai50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKFxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLFxyXG4gICAgICAgICAgICB0cmkuaVYwICsgc3RhcnRWSW5kZXgsXHJcbiAgICAgICAgICAgIHRyaS5pVjEgKyBzdGFydFZJbmRleCxcclxuICAgICAgICAgICAgdHJpLmlWMiArIHN0YXJ0VkluZGV4LFxyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMsXHJcbiAgICAgICAgICAgIHRyaS5pTjAgKyBzdGFydE5JbmRleCxcclxuICAgICAgICAgICAgdHJpLmlOMSArIHN0YXJ0TkluZGV4LFxyXG4gICAgICAgICAgICB0cmkuaU4yICsgc3RhcnROSW5kZXhcclxuICAgICAgICAgKSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvRGF0YSgpOiBUcmlhbmdsZU9iakRhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhO1xyXG4gICAgICBkYXRhLm5hbWUgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgICAvLyBjb252ZXJ0IHRoZSB0cmlhbmdsZXMgaW50byBhcnJheXMgdGhhdCBjYW4gYmUgdXBsb2FkZWRcclxuICAgICAgbGV0IHZlcnRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHZlcnRpY2VzLCB0aGlzLnZlcnRpY2VzW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyhub3JtYWxzLCB0aGlzLm5vcm1hbHNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBuSW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcblxyXG4gICAgICAgICB2SW5kaWNlcy5wdXNoKHRyaS5pVjApO1xyXG4gICAgICAgICB2SW5kaWNlcy5wdXNoKHRyaS5pVjEpO1xyXG4gICAgICAgICB2SW5kaWNlcy5wdXNoKHRyaS5pVjIpO1xyXG5cclxuICAgICAgICAgbkluZGljZXMucHVzaCh0cmkuaU4wKTtcclxuICAgICAgICAgbkluZGljZXMucHVzaCh0cmkuaU4xKTtcclxuICAgICAgICAgbkluZGljZXMucHVzaCh0cmkuaU4yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YS52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xyXG4gICAgICBkYXRhLnZJbmRpY2VzID0gbmV3IEludDMyQXJyYXkodkluZGljZXMpO1xyXG4gICAgICBkYXRhLm5JbmRpY2VzID0gbmV3IEludDMyQXJyYXkobkluZGljZXMpO1xyXG4gICAgICBkYXRhLmJveE1pbiA9IHRoaXMuYm94TWluLmNsb25lKCk7XHJcbiAgICAgIGRhdGEuYm94TWF4ID0gdGhpcy5ib3hNYXguY2xvbmUoKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcblxyXG5cclxuICAgcHJpdmF0ZSBzdGF0aWMgZGF0YTJ2ZXJ0ZXgoZGF0YTogVHJpYW5nbGVPYmpEYXRhLCBpbmRleDogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzWzMgKiBpbmRleCArIDBdLFxyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzWzMgKiBpbmRleCArIDFdLFxyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzWzMgKiBpbmRleCArIDJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGRhdGEybm9ybWFsKGRhdGE6IFRyaWFuZ2xlT2JqRGF0YSwgaW5kZXg6IG51bWJlcik6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgZGF0YS5ub3JtYWxzWzMgKiBpbmRleCArIDBdLFxyXG4gICAgICAgICBkYXRhLm5vcm1hbHNbMyAqIGluZGV4ICsgMV0sXHJcbiAgICAgICAgIGRhdGEubm9ybWFsc1szICogaW5kZXggKyAyXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tRGF0YShkYXRhOiBUcmlhbmdsZU9iakRhdGEpOiBUcmlhbmdsZU9iaiB7XHJcbiAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqKCk7XHJcbiAgICAgIHRPYmoubmFtZSA9IGRhdGEubmFtZTtcclxuXHJcbiAgICAgIC8vIHJlc3RvcmUgdmVydGljZXNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnZlcnRpY2VzLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICB0T2JqLnZlcnRpY2VzLnB1c2goVHJpYW5nbGVPYmouZGF0YTJ2ZXJ0ZXgoZGF0YSwgaSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXN0b3JlIG5vcm1hbHNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLm5vcm1hbHMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIHRPYmoubm9ybWFscy5wdXNoKFRyaWFuZ2xlT2JqLmRhdGEybm9ybWFsKGRhdGEsIGkpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVzdG9yZSB0cmlhbmdsZXNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnZJbmRpY2VzLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaVYwID0gZGF0YS52SW5kaWNlc1szICogaSArIDBdO1xyXG4gICAgICAgICBsZXQgaVYxID0gZGF0YS52SW5kaWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICBsZXQgaVYyID0gZGF0YS52SW5kaWNlc1szICogaSArIDJdO1xyXG4gICAgICAgICBsZXQgaU4wID0gZGF0YS5uSW5kaWNlc1szICogaSArIDBdO1xyXG4gICAgICAgICBsZXQgaU4xID0gZGF0YS5uSW5kaWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICBsZXQgaU4yID0gZGF0YS5uSW5kaWNlc1szICogaSArIDJdO1xyXG4gICAgICAgICBsZXQgdCA9IG5ldyBJbmRleGVkVHJpYW5nbGUodE9iai52ZXJ0aWNlcywgaVYwLCBpVjEsIGlWMiwgdE9iai5ub3JtYWxzLCBpTjAsIGlOMSwgaU4yKTtcclxuICAgICAgICAgdE9iai50cmlhbmdsZXMucHVzaCh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdE9iai5ib3hNaW4gPSBuZXcgZ2xWZWMzKGRhdGEuYm94TWluLnZhbHVlcyk7XHJcbiAgICAgIHRPYmouYm94TWF4ID0gbmV3IGdsVmVjMyhkYXRhLmJveE1heC52YWx1ZXMpO1xyXG5cclxuICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b0Jsb2IoKTogQmxvYiB7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYSBkZXNjcmlwdGlvblxyXG4gICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgRmlsZVR5cGU6ICdCaW5hcnkgT0JKJyxcclxuICAgICAgICAgVmVyc2lvbjogJzEuMCcsXHJcbiAgICAgICAgIE5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZ2V0IHRoZSByYXcgZGF0YVxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMudG9EYXRhKCk7XHJcblxyXG4gICAgICAvLyBicmVhayBpdCBpbnRvIHBhcnRzXHJcbiAgICAgIGxldCBwYXJ0czogQmxvYlBhcnRbXSA9IFtdO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEudmVydGljZXMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEubm9ybWFscyk7XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS52SW5kaWNlcyk7XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS5uSW5kaWNlcyk7XHJcbiAgICAgIHBhcnRzLnB1c2gobmV3IEZsb2F0MzJBcnJheShkYXRhLmJveE1pbi52YWx1ZXMpKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWF4LnZhbHVlcykpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBCbG9iXHJcbiAgICAgIHJldHVybiBCbG9iRmlsZS5jcmVhdGVCbG9iKGluZm8sIHBhcnRzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBmcm9tQmxvYihibG9iOiBCbG9iKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBUcmlhbmdsZU9iai5ibG9iVG9EYXRhKGJsb2IpO1xyXG4gICAgICByZXR1cm4gVHJpYW5nbGVPYmouZnJvbURhdGEoZGF0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgYmxvYlRvRGF0YShibG9iOiBCbG9iKTogUHJvbWlzZTxUcmlhbmdsZU9iakRhdGE+IHtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFRyaWFuZ2xlT2JqRGF0YSgpO1xyXG4gICAgICBsZXQgYkZpbGUgPSBhd2FpdCBCbG9iRmlsZS5leHRyYWN0KGJsb2IpO1xyXG5cclxuICAgICAgZGF0YS5uYW1lID0gYkZpbGUuaW5mby5OYW1lO1xyXG4gICAgICBkYXRhLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1swXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5ub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1sxXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS52SW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzJdLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBkYXRhLm5JbmRpY2VzID0gbmV3IEludDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbM10uYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gbmV3IGdsVmVjMyhBcnJheS5mcm9tKG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbNF0uYXJyYXlCdWZmZXIoKSkpKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSBuZXcgZ2xWZWMzKEFycmF5LmZyb20obmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1s1XS5hcnJheUJ1ZmZlcigpKSkpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IFN0YXR1c0Z1bmN0aW9uIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbG9hZHMgYSAub2JqIGZpbGUgYW5kIGNyZWF0ZXMgdHJpYW5nbGVzIGZvciBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRmlsZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCB1cGRhdGVTdGF0dXM/OiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAvLyByZWNvcmQgdGhlIHN0YXR1cyBmdW5jdGlvbi4gSWYgb25lIGlzIG5vdCBzdXBwbGllZCwgY3JlYXRlIG9uZSB0aGF0IGRvZXMgbm90aGluZ1xyXG4gICAgICBpZiAoIXVwZGF0ZVN0YXR1cykge1xyXG4gICAgICAgICB1cGRhdGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFyc2Uoc3JjLCB1cGRhdGVTdGF0dXMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlRmFjZShsaW5lOiBzdHJpbmcpOiB7IGlWOiBudW1iZXJbXSwgaU46IG51bWJlcltdIH0ge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBpVjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgICAgIGlOOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgfVxyXG4gICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgbGV0IG51bVZhbHMgPSB0b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWxzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZhbHMgPSB0b2tlbnNbaSArIDFdLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgIHJldC5pVi5wdXNoKHBhcnNlSW50KHZhbHNbMF0pIC0gMSk7XHJcbiAgICAgICAgIHJldC5pTi5wdXNoKHZhbHMubGVuZ3RoID09PSAzID8gcGFyc2VJbnQodmFsc1syXSkgLSAxIDogLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2Uoc3JjOiBzdHJpbmcsIHVwZGF0ZVN0YXR1czogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZycpO1xyXG4gICAgICBsZXQgdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBsZXQgbGluZXMgPSBzcmMuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBwLmxvZygnc3BsaXQnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgLy8gcmVwb3J0IHByb2dyZXNzIGV2ZXJ5IDUwIG1zXHJcbiAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdCA+IDUwKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogJyArICgxMDAgKiBpIC8gbGluZXMubGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICAgICAgICAgICB0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCd2ICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjMyhbcGFyc2VGbG9hdCh0b2tlbnNbMV0pLCBwYXJzZUZsb2F0KHRva2Vuc1syXSksIHBhcnNlRmxvYXQodG9rZW5zWzNdKV0pXHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZWMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgndm4gJykpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWMzKFtwYXJzZUZsb2F0KHRva2Vuc1sxXSksIHBhcnNlRmxvYXQodG9rZW5zWzJdKSwgcGFyc2VGbG9hdCh0b2tlbnNbM10pXSlcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2godmVjKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2YgJykpIHtcclxuICAgICAgICAgICAgbGV0IHJldCA9IHRoaXMucGFyc2VGYWNlKGxpbmUpO1xyXG4gICAgICAgICAgICBpZiAocmV0LmlOLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCByZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdLCB0aGlzLm5vcm1hbHMsIHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgcmV0LmlWWzBdLCByZXQuaVZbMl0sIHJldC5pVlszXSwgdGhpcy5ub3JtYWxzLCByZXQuaU5bMF0sIHJldC5pTlsyXSwgcmV0LmlOWzNdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0sIHRoaXMubm9ybWFscywgcmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5ub3JtYWxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6IDEwMCUnKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ05vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCk7XHJcbiAgICAgIHAubG9nKCdwYXJzZScpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzcGhlcmUgdXNpbmcgdHJpYW5nbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVTcGhlcmUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyB0aGUgc3BoZXJlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbnVtU3RlcHMgVGhlIG51bWJlciBvZiBiYW5kcyB1c2VkIHRvIGNvdmVyIHRoZSBzcGhlcmVcclxuICAgICogQHBhcmFtIHJhZGl1cyBUaGUgcmFkaXVzIG9mIHRoZSBzcGhlcmVcclxuICAgICogQHBhcmFtIGNlbnRlciBUaGUgY2VudGVyIG9mIHRoZSBzcGhlcmVcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihudW1TdGVwczogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIHN1cGVyKCdTcGhlcmUnKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdmVydGljZXNcclxuICAgICAgdGhpcy5jcmVhdGVWZXJ0aWNlcyhudW1TdGVwcywgcmFkaXVzLCBjZW50ZXIpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRyaWFuZ2xlcyBmcm9tIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLmNvbm5lY3RWZXJ0aWNlcyhudW1TdGVwcyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlVmVydGljZXMobnVtU3RlcHM6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHM7IGkrKykge1xyXG4gICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLngsIGNlbnRlci55ICsgcmFkaXVzLCBjZW50ZXIuel0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChpID09PSBudW1TdGVwcyAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSAtIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5jb3MoaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCByID0gcmFkaXVzICogTWF0aC5zaW4oaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBpICUgMiA/IDAgOiAoKDIgKiBNYXRoLlBJKSAvIG51bVN0ZXBzKSAqIDAuNTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueCArIHIgKiBNYXRoLnNpbigoaiAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJIC0gb2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgICAgY2VudGVyLnkgKyB5LFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueiArIHIgKiBNYXRoLmNvcygoaiAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJIC0gb2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbm5lY3RWZXJ0aWNlcyhudW1TdGVwczogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBmaXJzdCA9IDA7XHJcbiAgICAgIGxldCBsYXN0ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0ZXBzIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBmaXJzdDtcclxuICAgICAgICAgICAgICAgbGV0IGkyID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IGogPT09IChudW1TdGVwcyAtIDEpID8gMSA6IGkyICsgMTtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkyLCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gbnVtU3RlcHMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBzdGFydEluZGV4ID0gbGFzdCAtIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBsYXN0O1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSBzdGFydEluZGV4ICsgajtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gaiA9PT0gKG51bVN0ZXBzIC0gMSkgPyBzdGFydEluZGV4IDogaTIgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTMsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0QSA9IDEgKyAoaSAtIDEpICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBzdGFydEIgPSAxICsgaSAqIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBzdGFydEEgKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSAoaiA9PT0gKG51bVN0ZXBzIC0gMSkpID8gc3RhcnRBIDogaTEgKyAxO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBzdGFydEIgKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTQgPSAoaiA9PT0gKG51bVN0ZXBzIC0gMSkpID8gc3RhcnRCIDogaTMgKyAxO1xyXG4gICAgICAgICAgICAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGk0LCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMywgaTQsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTMsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTIsIGkzLCBpNCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlck1vZGUgfSBmcm9tIFwiLi9QYXRoVHJhY2VyUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgU3BoZXJpY2FsQ29vcmQgfSBmcm9tIFwiLi9TcGhlcmljYWxDb29yZFwiO1xyXG5cclxuLyoqXHJcbiAqIFR5cGVzIGZvciB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVuaWZvcm1zIHtcclxuICAgdVNjYWxlOiBudW1iZXI7XHJcbiAgIHVYT2Zmc2V0OiBudW1iZXI7XHJcbiAgIHVZT2Zmc2V0OiBudW1iZXI7XHJcbiAgIHVNb2RlOiBSZW5kZXJNb2RlO1xyXG4gICB1TWF4Q2hyb21hOiBudW1iZXI7XHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVNaWRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya0xpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcblxyXG4gICB1U2hhZG93Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVSZWZsZWN0ZWRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya0FjY2VudENvbG9yOiBnbENvbG9yO1xyXG5cclxuICAgdUxpZ2h0QWxwaGE6IG51bWJlcjtcclxuICAgdVNoYWRvd0FscGhhOiBudW1iZXI7XHJcblxyXG4gICB1TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdUxpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIHVMaWdodFBvczogZ2xWZWMzLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiBudW1iZXIsXHJcbiAgIHVPYmpDb2xvcjogZ2xDb2xvcixcclxuICAgdUJhbGxSYWRpdXM6IG51bWJlcixcclxuICAgdUV5ZTogZ2xWZWMzLFxyXG4gICB1VGV4dHVyZVNpemU6IG51bWJlcixcclxuICAgdVJhbmRvbTogbnVtYmVyLFxyXG4gICB1UmF5MDA6IGdsVmVjMyxcclxuICAgdVJheTAxOiBnbFZlYzMsXHJcbiAgIHVSYXkxMDogZ2xWZWMzLFxyXG4gICB1UmF5MTE6IGdsVmVjMyxcclxuICAgdVNhbXBsZTogbnVtYmVyLFxyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgbGV0IFVuaWZvcm1zOiBJVW5pZm9ybXMgPSB7XHJcbiAgIHVTY2FsZTogMS4wLFxyXG4gICB1WE9mZnNldDogMC4wLFxyXG4gICB1WU9mZnNldDogMC4wLFxyXG4gICB1TW9kZTogMCxcclxuICAgdU1heENocm9tYTogMS4wLFxyXG5cclxuICAgdUhpZ2hsaWdodENvbG9yOiB1bmRlZmluZWQsXHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdU1pZExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdURhcmtMaWdodENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1U2hhZG93Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdVJlZmxlY3RlZExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdURhcmtBY2NlbnRDb2xvcjogdW5kZWZpbmVkLFxyXG5cclxuICAgdUxpZ2h0QWxwaGE6IDEwMDEsXHJcbiAgIHVTaGFkb3dBbHBoYTogMTAwMCxcclxuXHJcbiAgIHVMaWdodEludGVuc2l0eTogMC43LFxyXG4gICB1TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgZ2xWZWMzKG5ldyBTcGhlcmljYWxDb29yZCgyLCA2MCwgMTEwKS50b1hZWigpKSxcclxuICAgdUFtYmllbnRMaWdodEludGVuc2l0eTogMC4zLFxyXG4gICB1T2JqQ29sb3I6IG5ldyBnbENvbG9yKFswLjUsIDAuNSwgMC44XSksXHJcbiAgIHVCYWxsUmFkaXVzOiAwLjUsXHJcbiAgIHVFeWU6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVSYW5kb206IE1hdGgucmFuZG9tKCksXHJcbiAgIHVSYXkwMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MDE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1U2FtcGxlOiAwLjAsXHJcbn1cclxuIiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IHRvUmFkLCBpc01vYmlsZSB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgUGxhbmVzUmVuZGVyZXIgfSBmcm9tIFwiLi9QbGFuZXNSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5pbXBvcnQgeyBnbFZlYzQsIGdsVmVjMiB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBQb2ludGVyRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vUG9pbnRlckV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgY3JlYXRlTW9kZWxzRHJvcERvd25NZW51IH0gZnJvbSBcIi4vTW9kZWxzRHJvcERvd25NZW51XCI7XHJcbmltcG9ydCB7IE1vZGVsTG9hZGVyIH0gZnJvbSBcIi4vTW9kZWxMb2FkZXJcIjtcclxuXHJcbmVudW0gUG9pbnRlck1vZGUge1xyXG4gICBWaWV3LFxyXG4gICBMaWdodCxcclxufVxyXG5cclxuLy9jb25zdCBXSElURV9DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuY29uc3QgV0hJVEVfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1MCwgMjQyXSk7XHJcbmNvbnN0IEJMQUNLX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG4vL2NvbnN0IEJMQUNLX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMzAsIDIwLCAwXSk7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld2VyQXBwIHtcclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHB1YmxpYyByZW5kZXJlcjogUGxhbmVzUmVuZGVyZXI7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGU6IFBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgcHJpdmF0ZSBvdmVybGF5OiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgaGFuZGxlcjogUG9pbnRlckV2ZW50SGFuZGxlcjtcclxuXHJcbiAgIHByaXZhdGUgZGlydHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHJpdmF0ZSBsb2FkZXIgPSBuZXcgTW9kZWxMb2FkZXIoKTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXBvbmVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkaXYuY2xhc3NOYW1lID0gJ1ZpZXdlckFwcCc7XHJcblxyXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHZpZXdDb250YWluZXIuaWQgPSAnVmlld0NvbnRhaW5lcic7XHJcbiAgICAgIHZpZXdDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3Q29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jcmVhdGVWaWV3RWxlbWVudHModmlld0NvbnRhaW5lcik7XHJcblxyXG4gICAgICBjb25zdCBjdHJsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjdHJsc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgY3RybHNDb250YWluZXIuaWQgPSAnQ3RybHNDb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY3RybHNDb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUN0cmxzRWxlbWVudHMoY3RybHNDb250YWluZXIpO1xyXG5cclxuICAgICAgdGhpcy5sb2FkTW9kZWwodGhpcy5xdWVyeSk7XHJcblxyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZVZpZXdFbGVtZW50cyhwYXJlbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy5pZCA9ICdNYWluQ2FudmFzJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5vdmVybGF5LmlkID0gJ092ZXJsYXknO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuXHJcbiAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgIC8vIFRPRE8gZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgbm90IGJlaW5nIGFibGUgdG8gY3JlYXRlIGEgV2ViR0wgY29udGV4dFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBnZXQgV2ViR0wgY29udGV4dFwiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdsID0gY29udGV4dDtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBQbGFuZXNSZW5kZXJlcih0aGlzLmdsKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci53aGl0ZUNvbG9yID0gV0hJVEVfQ09MT1I7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYmxhY2tDb2xvciA9IEJMQUNLX0NPTE9SO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNob3dNaW5pVmlldyA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIoY2FudmFzKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRHJhZyA9IChwb3M6IGdsVmVjMiwgZGVsdGE6IGdsVmVjMikgPT4gdGhpcy5vbkRyYWcocG9zLCBkZWx0YSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkNsaWNrID0gKHBvczogZ2xWZWMyKSA9PiB0aGlzLm9uQ2xpY2socG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uU2NhbGUgPSAoc2NhbGU6IG51bWJlciwgY2hhbmdlOiBudW1iZXIpID0+IHRoaXMub25TY2FsZShzY2FsZSwgY2hhbmdlKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uUm90YXRlID0gKGFuZ2xlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHRoaXMub25Sb3RhdGUoYW5nbGUsIGRlbHRhKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uVHJhbnNsYXRlID0gKGRlbHRhOiBnbFZlYzIpID0+IHRoaXMub25UcmFuc2xhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgZG9jdW1lbnQub25rZXlwcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdvJzpcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5vcHRpbWl6ZShOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncCc6XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIub3B0aW1pemUoTm9ybWFsVHlwZS5GbGF0KTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hvd1NoYWRvd01hcCA9ICF0aGlzLnJlbmRlcmVyLnNob3dTaGFkb3dNYXA7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjcmVhdGVNb2RlbHNEcm9wRG93bk1lbnUocGFyZW50LCAoZmlsZSkgPT4gdGhpcy5sb2FkTW9kZWwoZmlsZSkpO1xyXG5cclxuICAgICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzaXplKCk7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgZ2wuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5saW5lSGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JzsgLy8gdmVydGljYWxseSBjZW50ZXIgdGV4dFxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZUN0cmxzRWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgLypcclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnSGlnaGxpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ID0gdGhpcy5oaWdobGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgICAgKi9cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZykge1xyXG5cclxuICAgICAgLy8gaWYgbm90aGluZyB3YXMgc3BlY2lmaWVkLCBsb2FkIGFuIGludGVyZXN0aW5nIG1vZGVsXHJcbiAgICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICAgcXVlcnkgPSAnUG9zZV8wMi5ibG9iJztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxjID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKGxjLmVuZHNXaXRoKCcub2JqJykgfHwgbGMuZW5kc1dpdGgoJy5ibG9iJykpIHtcclxuXHJcbiAgICAgICAgIGxldCBzdGF0dXNGdW5jID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSBzdGF0dXM7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMubG9hZGVyLmxvYWRNb2RlbEZpbGUocXVlcnksIHN0YXR1c0Z1bmMpXHJcbiAgICAgICAgICAgIC50aGVuKCh0T2JqKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICB0aGlzLmxvYWRlci5vcmllbnQodGhpcy5yZW5kZXJlci5vYmopO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcblxyXG4gICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICBsZXQgdG9rZW5zID0gcXVlcnkuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IHByb3BGaWxlID0gdG9rZW5zWzBdICsgJ19Qcm9wLicgKyB0b2tlbnNbMV07XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vZGVsRmlsZShwcm9wRmlsZSkudGhlbigodFByb3BPYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgdE9iai5jb21iaW5lKHRQcm9wT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWVudCh0T2JqLCBxdWVyeSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBUT0RPIG11bHRpIGxpbmUgZXJyb3IgbWVzc2FnZXMgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gJ1Vua25vd24gTW9kZWw6JyArIHF1ZXJ5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdG9nZ2xlTW9kZSgpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLnBvaW50ZXJNb2RlKSB7XHJcbiAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuVmlldzpcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLkxpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmJhbGxDb2xvciA9IHRoaXMucmVuZGVyZXIueWVsbG93O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuTGlnaHQ6XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmJhbGxDb2xvciA9IFdISVRFX0NPTE9SLnRvR2xDb2xvcigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRyYWcocG9zOiBnbFZlYzIsIGRlbHRhOiBnbFZlYzIpIHtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuVmlldykge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RYKGRlbHRhLnkgKiAwLjAxKTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5vYmoucm90WShkZWx0YS54ICogMC4wMSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgIGxldCBtYXRZID0gZ2xNYXQ0LmZyb21Sb3RZKHRvUmFkKGRlbHRhLngpKTtcclxuICAgICAgICAgbGV0IG1hdFggPSBnbE1hdDQuZnJvbVJvdFgodG9SYWQoZGVsdGEueSkpO1xyXG4gICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjNChbXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLngsXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnksXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnosXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgXSk7XHJcbiAgICAgICAgIHZlYyA9IG1hdFgubXVsdFYodmVjKTtcclxuICAgICAgICAgdmVjID0gbWF0WS5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi54ID0gdmVjLnZhbHVlc1swXTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSA9IHZlYy52YWx1ZXNbMV07XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnogPSB2ZWMudmFsdWVzWzJdO1xyXG5cclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFByb2Nlc3NlcyBhIGNsaWNrL3RvdWNoIGV2ZW50IGF0IHRoZSBkZXNpZ25hdGVkIGNvb3JkaW5hdGVzLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHByaXZhdGUgb25DbGljayhwb3M6IGdsVmVjMik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgbGV0IHNpemUgPSB0aGlzLmdsLmNhbnZhcy53aWR0aDtcclxuXHJcbiAgICAgIC8vIFRPRE8gZ2V0IHRoZSBzaXplIG9mIHRoZSBhcmVhIGZyb20gdGhlIHJlbmRlcmVyXHJcbiAgICAgIGlmIChwb3MueCA8IHNpemUgLyA1ICYmIHBvcy55IDwgc2l6ZSAvIDUpIHtcclxuICAgICAgICAgdGhpcy50b2dnbGVNb2RlKCk7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jbGljayhwb3MueCAvIHNpemUsIDEgLSAocG9zLnkgLyBzaXplKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25TY2FsZShzY2FsZTogbnVtYmVyLCBjaGFuZ2U6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnpvb20oY2hhbmdlKTtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Sb3RhdGUoYW5nbGU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLm9iai5yb3RaKGRlbHRhKTtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25UcmFuc2xhdGUoZGVsdGE6IGdsVmVjMikge1xyXG5cclxuICAgICAgLy8gVE9ETyBob3cgY2FuIHRoaXMgc2NhbGluZyBiZSBkZXRlY3RlZCBmcm9tIGphdmFzY3JpcHQ/XHJcbiAgICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgZmFjdG9yID0gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNsaXBTcGFjZSA9IHRoaXMucmVuZGVyZXIuZ2V0Q2xpcFNwYWNlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudHJhbnNsYXRlVmlldyhuZXcgZ2xWZWMyKFtcclxuICAgICAgICAgZmFjdG9yICogY2xpcFNwYWNlLndpZHRoICogZGVsdGEueCAvIHRoaXMuZ2wuY2FudmFzLndpZHRoLFxyXG4gICAgICAgICBmYWN0b3IgKiBjbGlwU3BhY2UuaGVpZ2h0ICogZGVsdGEueSAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxyXG4gICAgICBdKSk7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdGljaygpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgIC8vIFRPRE8gb25seSByZWRyYXcgdGhlIHRocmVzaG9sZCBjdHJsIGlmIGEgc2xpZGVyIGNoYW5nZWRcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoKTtcclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNhdmUoKSB7XHJcbiAgICAgIGxldCB0T2JqID0gdGhpcy5yZW5kZXJlci50T2JqO1xyXG5cclxuICAgICAgbGV0IG5hbWUgPSB0T2JqLm5hbWUuc3BsaXQoJy4nKVswXSArICcuYmxvYic7XHJcbiAgICAgIHNhdmVBcyh0T2JqLnRvQmxvYigpLCBuYW1lKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5cclxuY29uc3QgTUFYID0gMTAwMDsgLy8gSU5GSU5JVFkgaW4gb3VyIHJlbmRlcmluZyB3b3JsZFxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbWFuYWdlcyBhIHNldCBvZiB0cmlhbmdsZXMgd2l0aGluIGEgZ2l2ZW4gc3BhY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWb2x1bWUge1xyXG4gICAvKipcclxuICAgICogVGhlIHRyaWFuZ2xlcyBlbmNsb3NlZCB3aXRoaW4gdGhlIGJvdW5kaW5nIGJveFxyXG4gICAgKi9cclxuICAgcHVibGljIHRyaWFuZ2xlczogSW5kZXhlZFRyaWFuZ2xlW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCb3VuZGluZyBib3ggbWluaW11bVxyXG4gICAgKi9cclxuICAgcHVibGljIGJveE1pbiA9IG5ldyBnbFZlYzMoW01BWCwgTUFYLCBNQVhdKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCb3VuZGluZyBib3ggbWF4aW11bVxyXG4gICAgKi9cclxuICAgcHVibGljIGJveE1heCA9IG5ldyBnbFZlYzMoWy1NQVgsIC1NQVgsIC1NQVhdKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSB0cmlhbmdsZSBhbmQgdXBkYXRlcyB0aGUgYm91bmRpbmcgYm94XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdHJpYW5nbGUgVGhlIHRyaWFuZ2xlIHRvIHN0b3JlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcHVzaCh0cmlhbmdsZTogSW5kZXhlZFRyaWFuZ2xlKSB7XHJcblxyXG4gICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKHRyaWFuZ2xlKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRyaWFuZ2xlLm1pblgpO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueSwgdHJpYW5nbGUubWluWSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSBNYXRoLm1pbih0aGlzLmJveE1pbi56LCB0cmlhbmdsZS5taW5aKTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHRyaWFuZ2xlLm1heFgpO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdHJpYW5nbGUubWF4WSk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSBNYXRoLm1heCh0aGlzLmJveE1heC56LCB0cmlhbmdsZS5tYXhaKTtcclxuICAgfVxyXG59XHJcbiIsIlxyXG4vKipcclxuICogV3JhcHBlciBmb3IgYSBXZWJHbCBCdWZmZXIgYW5kIEF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQnVmZmVyIHtcclxuICAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcbiAgIHByaXZhdGUgYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBhdHRyaWJ1dGVMb2NhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICBnbEN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxyXG4gICAgICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmdcclxuICAgKSB7XHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyaWJ1dGVOYW1lKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXIpO1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZCh2ZXJ0aWNlczogbnVtYmVyW10pIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgdGhpcy5iaW5kKCk7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYmluZCgpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVMb2NhdGlvbik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24sXHJcbiAgICAgICAgIDMsICAgICAgICAgICAgICAgIC8vIHNpemVcclxuICAgICAgICAgZ2wuRkxPQVQsICAgICAgICAgLy8gdHlwZVxyXG4gICAgICAgICBmYWxzZSwgICAgICAgICAgICAvLyBub3JtYWxpemVkXHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgIC8vIHN0cmlkZVxyXG4gICAgICAgICAwICAgICAgICAgICAgICAgICAvLyBvZmZzZXRcclxuICAgICAgKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGZvciBob2xkaW5nIGEgY2xpcCBzcGFjZS4gRGVmYXVsdCBpcyB2YWx1ZXMgZnJvbSAtMSB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ2xpcFNwYWNlIHtcclxuICAgcHVibGljIG1pbjogZ2xWZWMzO1xyXG4gICBwdWJsaWMgbWF4OiBnbFZlYzM7XHJcblxyXG4gICBwdWJsaWMgZ2V0IGxlZnQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWluLng7XHJcbiAgIH1cclxuICAgcHVibGljIGdldCByaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0b3AoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4Lnk7XHJcbiAgIH1cclxuICAgcHVibGljIGdldCBib3R0b20oKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbmVhcigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5taW4uejtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IGZhcigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXguejtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gKHRoaXMubWF4LnggLSB0aGlzLm1pbi54KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuICh0aGlzLm1heC55IC0gdGhpcy5taW4ueSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuICh0aGlzLm1heC56IC0gdGhpcy5taW4ueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtaW46IGdsVmVjMywgbWF4OiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5taW4gPSBtaW47XHJcbiAgICAgIHRoaXMubWF4ID0gbWF4O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvciBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGdsQ29sb3Igb2JqZWN0IHVzaW5nIHZhbHVlcyBpbiBhIENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBIGdlbmVyaWMgQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tQ29sb3IoY29sb3I6IENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIGxldCByID0gY2xhbXAoY29sb3IuciwgMCwgMSk7XHJcbiAgICAgIGxldCBnID0gY2xhbXAoY29sb3IuZywgMCwgMSk7XHJcbiAgICAgIGxldCBiID0gY2xhbXAoY29sb3IuYiwgMCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbGlnaHRlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGxpZ2h0ZXN0IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBsaWdodGVzdChjMTogZ2xDb2xvciwgYzI6IGdsQ29sb3IpOiBnbENvbG9yIHtcclxuICAgICAgLy8gVE9ETzogdXNlIGx1bWlub3NpdHkgaW5zdGVhZD9cclxuICAgICAgaWYgKGMxLnIgKyBjMS5nICsgYzEuYiA+IGMyLnIgKyBjMi5nICsgYzIuYikge1xyXG4gICAgICAgICByZXR1cm4gYzE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBjMjtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgZGFya2VyIG9mIHR3byBjb2xvcnNcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjMSBUaGUgZmlyc3QgY29sb3IuXHJcbiAgICAqIEBwYXJhbSBjMiBUaGUgc2Vjb25kIGNvbG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGFya2VzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZGFya2VzdChjMTogZ2xDb2xvciwgYzI6IGdsQ29sb3IpOiBnbENvbG9yIHtcclxuICAgICAgLy8gVE9ETzogdXNlIGx1bWlub3NpdHkgaW5zdGVhZD9cclxuICAgICAgaWYgKGMxLnIgKyBjMS5nICsgYzEuYiA8IGMyLnIgKyBjMi5nICsgYzIuYikge1xyXG4gICAgICAgICByZXR1cm4gYzE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBjMjtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYW4gaHRtbCBjb2xvciBvYmplY3QgKDAtMjU1IGJhc2VkKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IdG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMucik7XHJcbiAgICAgIGxldCBnID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmcpO1xyXG4gICAgICBsZXQgYiA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5iKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGFkZHMgdGVtcGVyYXR1cmUgdG8gYSBDb2xvciBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIGV4dGVuZHMgZ2xDb2xvciB7XHJcbiAgIC8qKlxyXG4gICAgKiBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgX3RlbXBlcmF0dXJlOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgdGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICogQHBhcmFtIHRlbXBlcmF0dXJlIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10sIHRlbXBlcmF0dXJlOiBudW1iZXIpIHtcclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICAgICB0aGlzLl90ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogS25vd24gY29sb3IgdmFsdWVzLiBGb3Igb3RoZXIgcmVxdWVzdHMgdGhlIGNsYXNzIHdpbGwgcmV0dXJuIGludGVycG9sYXRlZCB2YWx1ZXNcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNvbG9yczogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVtdID0gW1xyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxNDcgLyAyNTUsIDQxIC8gMjU1XSwgMTkwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDE5NyAvIDI1NSwgMTQzIC8gMjU1XSwgMjYwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDIxNCAvIDI1NSwgMTcwIC8gMjU1XSwgMjg1MCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI0MSAvIDI1NSwgMjI0IC8gMjU1XSwgMzIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1MCAvIDI1NSwgMjQ0IC8gMjU1XSwgNTIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjUxIC8gMjU1XSwgNTQwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjU1IC8gMjU1XSwgNjAwMCksIC8vIGRheWxpZ2h0XHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyMDEgLyAyNTUsIDIyNiAvIDI1NSwgMjU1IC8gMjU1XSwgNzAwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFs2NCAvIDI1NSwgMTU2IC8gMjU1LCAyNTUgLyAyNTVdLCAyMDAwMCksXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldCBkYXlsaWdodCgpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKDYwMDApO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluaW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtaW5UZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXhpbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1heFRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSBDb2xvciBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGUodGVtcGVyYXR1cmU6IG51bWJlcik6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUge1xyXG5cclxuICAgICAgaWYgKHRlbXBlcmF0dXJlIDw9IHRoaXMubWluVGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRlbXBlcmF0dXJlID49IHRoaXMubWF4VGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IxID0gdGhpcy5jb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjIgPSB0aGlzLmNvbG9yc1tpICsgMV07XHJcbiAgICAgICAgICAgIGlmICh0ZW1wZXJhdHVyZSA+PSBjb2xvcjEudGVtcGVyYXR1cmUgJiYgdGVtcGVyYXR1cmUgPD0gY29sb3IyLnRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgIGxldCByYXRpbyA9ICh0ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSkgLyAoY29sb3IyLnRlbXBlcmF0dXJlIC0gY29sb3IxLnRlbXBlcmF0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCByID0gY29sb3IxLnIgKyByYXRpbyAqIChjb2xvcjIuciAtIGNvbG9yMS5yKTtcclxuICAgICAgICAgICAgICAgbGV0IGcgPSBjb2xvcjEuZyArIHJhdGlvICogKGNvbG9yMi5nIC0gY29sb3IxLmcpO1xyXG4gICAgICAgICAgICAgICBsZXQgYiA9IGNvbG9yMS5iICsgcmF0aW8gKiAoY29sb3IyLmIgLSBjb2xvcjEuYik7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbciwgZywgYl0sIHRlbXBlcmF0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzaG91bGRuJ3QgZ2V0IGhlcmUsIGJ1dCBpZiB3ZSBkbywgcmV0dXJuIHRoZSBsYXN0IGNvbG9yXHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCIvKipcclxuICogVXRpbGl0eSB3cmFwcGVyIGZvciBjb21waWxpbmcgV2ViR0wgc2hhZGVyIHByb2dyYW1zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb21waWxlciB7XHJcblxyXG4gICAvKipcclxuICAgICogdXNlIHN0YXRpYyBmdW5jdGlvbnMgb25seVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXBpbGVzIGEgc2hhZGVyIHByb2dyYW1cclxuICAgICpcclxuICAgICogQHBhcmFtIGdsIFRoZSBXZWJHTCBjb250ZXh0IFxyXG4gICAgKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgY29kZVxyXG4gICAgKiBAcGFyYW0gdHlwZSBUaGUgc2hhZGVyIHR5cGVcclxuICAgICogQHRocm93cyBpZiB0aGUgY29tcGlsYXRpb24gZmFpbHNcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNvbXBpbGVTaGFkZXIoXHJcbiAgICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICBzb3VyY2U6IHN0cmluZyxcclxuICAgICAgdHlwZTogbnVtYmVyXHJcbiAgICkge1xyXG4gICAgICBsZXQgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XHJcbiAgICAgICAgIHRocm93ICdjb21waWxlIGVycm9yOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21waWxlcyBhbmQgbGlua3MgdmVydGV4IGFuZCBmcmFnbWVudCBzaGFkZXJzIGludG8gYSBwcm9ncmFtXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZ2wgVGhlIFdlYkdMIGNvbnRleHRcclxuICAgICogQHBhcmFtIHZlcnRleFNvdXJjZSBWZXJ0ZXggc2hhZGVyIHNvdXJjZVxyXG4gICAgKiBAcGFyYW0gZnJhZ21lbnRTb3VyY2UgRnJhZ21lbnQgc2hhZGVyIHNvdXJjZVxyXG4gICAgKiBAcmV0dXJucyB0aGUgcHJvZ3JhbSBpZFxyXG4gICAgKiBAdGhyb3dzIGlmIHRoZSBjb21waWxhdGlvbiBmYWlsc1xyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjb21waWxlKFxyXG4gICAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCxcclxuICAgICAgdmVydGV4U291cmNlOiBzdHJpbmcsXHJcbiAgICAgIGZyYWdtZW50U291cmNlOiBzdHJpbmdcclxuICAgKSB7XHJcbiAgICAgIGxldCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZ2xDb21waWxlci5jb21waWxlU2hhZGVyKGdsLCB2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcihnbCwgZnJhZ21lbnRTb3VyY2UsIGdsLkZSQUdNRU5UX1NIQURFUikpO1xyXG4gICAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICB0aHJvdyAnbGluayBlcnJvcjogJyArIGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzQsIGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IHRvRGVnLCB0b1JhZCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IG1hdHJpeCBmb3IgdXNlIGluIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbE1hdDQge1xyXG4gICAvKiogVGhlIG1hdHJpeCB2YWx1ZSBzdG9yZWQgYXMgYSAxNiBlbGVtZW50IGFycmF5ICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIG1hdHJpeCB2YWx1ZXMuIElmIG5vdCBzdXBwbGllZCwgdGhlIG1hdHJpeCBpcyBcclxuICAgICogaW5pdGlhbGl6ZWQgYXMgYW4gaWRlbnRpdHkgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXQncyBhbiBpZGVudGl0eSBtYXRyaXguIFNhbWUgYXMgY3JlYXRpbmcgYSBuZXcgbWF0cml4LCBidXQgc3ludGFjdGljYWxseVxyXG4gICAgKiBzaG93cyB3aGF0IGlzIGhhcHBlbmluZy5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgbmV3IGlkZW5pdHkgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBnbE1hdDQge1xyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NCgpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHZhbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGEgdmVjdG9yIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRWKHZlYzogZ2xWZWM0KTogZ2xWZWM0IHtcclxuICAgICAgbGV0IHZhbHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW3JvdyAqIDQgKyBjb2xdICogdmVjLnZhbHVlc1tjb2xdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHZhbHMucHVzaChzdW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWM0KHZhbHMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGFub3RoZXIgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG1hdHJpeC5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdE0ob3RoZXI6IGdsTWF0NCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmdldChyb3csIGkpICogb3RoZXIuZ2V0KGksIGNvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgc3VtKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogSW52ZXJ0cyB0aGlzIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGludmVyc2Ugb2YgdGhpcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBpbnZlcnNlKCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUcmFuc3Bvc2VzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSBuZXcgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zcG9zZWQgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBnbE1hdDQge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgc2NhbGUgb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNjYWxlIFRoZSBzY2FsZSBmYWN0b3JcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVNjYWxlKHNjYWxlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBzY2FsZSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgc2NhbGUsIDAsIDAsXHJcbiAgICAgICAgIDAsIDAsIHNjYWxlLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgdHJhbnNsYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdHJhbnNsYXRpb25zLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVHJhbnNsYXRpb24odjogZ2xWZWMzKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgdi54LFxyXG4gICAgICAgICAwLCAxLCAwLCB2LnksXHJcbiAgICAgICAgIDAsIDAsIDEsIHYueixcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tUm90WChhbmdsZTogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgYywgcywgMCxcclxuICAgICAgICAgMCwgLXMsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFkoYW5nbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKVxyXG4gICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKVxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICBzLCAwLCBjLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RaKGFuZ2xlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBjLCBzLCAwLCAwLFxyXG4gICAgICAgICAtcywgYywgMCwgMCxcclxuICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJvdFgoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tUm90WChhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RZKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVJvdFkoYW5nbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WihhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21Sb3RaKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tVHJhbnNsYXRpb24ob2Zmc2V0KS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVNjYWxlKHNjYWxlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KGV5ZTogZ2xWZWMzLCBjZW50ZXI6IGdsVmVjMywgdXA6IGdsVmVjMywgKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBhID0gZXllLnN1YnRyYWN0KGNlbnRlcikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCBiID0gdXAuY3Jvc3MoYSkubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCBjID0gYS5jcm9zcyhiKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgIGxldCBtID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGIueCwgYi55LCBiLnosIDAsXHJcbiAgICAgICAgIGMueCwgYy55LCBjLnosIDAsXHJcbiAgICAgICAgIGEueCwgYS55LCBhLnosIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICB2YXIgdCA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAtZXllLngsXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUueSxcclxuICAgICAgICAgMCwgMCwgMSwgLWV5ZS56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG0ubXVsdE0odCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdVBlcnNwZWN0aXZlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGZvdnkgRmllbGQgb2YgdmlldyAoaW4gZGVncmVlcykuXHJcbiAgICAqIEBwYXJhbSBhc3BlY3QgVmlldyBhc3BlY3QgcmF0aW8uXHJcbiAgICAqIEBwYXJhbSB6bmVhciBOZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBGYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VQZXJzcGVjdGl2ZShcclxuICAgICAgZm92eTogbnVtYmVyLFxyXG4gICAgICBhc3BlY3Q6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciB5bWF4ID0gem5lYXIgKiBNYXRoLnRhbihmb3Z5ICogTWF0aC5QSSAvIDM2MC4wKTtcclxuICAgICAgdmFyIHltaW4gPSAteW1heDtcclxuICAgICAgdmFyIHhtaW4gPSB5bWluICogYXNwZWN0O1xyXG4gICAgICB2YXIgeG1heCA9IHltYXggKiBhc3BlY3Q7XHJcblxyXG4gICAgICByZXR1cm4gZ2xNYXQ0Lm1ha2VGcnVzdHVtKHhtaW4sIHhtYXgsIHltaW4sIHltYXgsIHpuZWFyLCB6ZmFyKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVGcnVzdHVtLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlZnQgVGhlIGxlZnQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSByaWdodCBUaGUgcmlnaHQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSBib3R0b20gVGhlIGJvdHRvbSBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHRvcCBUaGUgdG9wIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgVGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIFRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEByZXR1cm5zIHRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VGcnVzdHVtKFxyXG4gICAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgICB0b3A6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciBYID0gMiAqIHpuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBZID0gMiAqIHpuZWFyIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBBID0gKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIEIgPSAodG9wICsgYm90dG9tKSAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQyA9IC0oemZhciArIHpuZWFyKSAvICh6ZmFyIC0gem5lYXIpO1xyXG4gICAgICB2YXIgRCA9IC0yICogemZhciAqIHpuZWFyIC8gKHpmYXIgLSB6bmVhcik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIFgsIDAsIEEsIDAsXHJcbiAgICAgICAgIDAsIFksIEIsIDAsXHJcbiAgICAgICAgIDAsIDAsIEMsIEQsXHJcbiAgICAgICAgIDAsIDAsIC0xLCAwXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdU9ydGhvLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlZnQgVGhlIGxlZnQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSByaWdodCBUaGUgcmlnaHQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSBib3R0b20gVGhlIGJvdHRvbSBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHRvcCBUaGUgdG9wIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgVGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIFRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEByZXR1cm5zIHRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VPcnRobyhcclxuICAgICAgbGVmdDogbnVtYmVyLFxyXG4gICAgICByaWdodDogbnVtYmVyLFxyXG4gICAgICBib3R0b206IG51bWJlcixcclxuICAgICAgdG9wOiBudW1iZXIsXHJcbiAgICAgIG5lYXI6IG51bWJlcixcclxuICAgICAgZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAyIC8gKHJpZ2h0IC0gbGVmdCksIDAsIDAsIChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCksXHJcbiAgICAgICAgIDAsIDIgLyAodG9wIC0gYm90dG9tKSwgMCwgKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKSxcclxuICAgICAgICAgMCwgMCwgMiAvIChmYXIgLSBuZWFyKSwgKGZhciArIG5lYXIpIC8gKGZhciAtIG5lYXIpLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nLCBkaWdpdHM6IG51bWJlciA9IDIpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCA0OyByKyspIHtcclxuICAgICAgICAgbGV0IGxpbmUgPSBcIlwiO1xyXG4gICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDQ7IGMrKykge1xyXG4gICAgICAgICAgICBsaW5lICs9IHRoaXMuZ2V0KHIsIGMpLnRvRml4ZWQoZGlnaXRzKSArICcgJztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhsaW5lKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygpO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBnbEJ1ZmZlciB9IGZyb20gXCIuL2dsQnVmZmVyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gXCIuL2dsVW5pZm9ybVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xPYmplY3Qge1xyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHVibGljIHJlYWRvbmx5IHRPYmo6IFRyaWFuZ2xlT2JqO1xyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IGdsQnVmZmVyO1xyXG4gICBwcml2YXRlIG5vcm1hbEJ1ZmZlcjogZ2xCdWZmZXI7XHJcbiAgIHByaXZhdGUgbW9kZWwgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMudE9iai5uYW1lO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgIGdsQ3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICB0T2JqOiBUcmlhbmdsZU9iaixcclxuICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtXHJcbiAgICkge1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgdGhpcy50T2JqID0gdE9iajtcclxuICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBidWZmZXJzIChhbmQgYXNzb2NpYXRlZCBhdHRyaWJ1dGVzKVxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG5ldyBnbEJ1ZmZlcihnbCwgcHJvZ3JhbSwgJ2FWZXJ0ZXgnKTtcclxuICAgICAgdGhpcy5ub3JtYWxCdWZmZXIgPSBuZXcgZ2xCdWZmZXIoZ2wsIHByb2dyYW0sICdhTm9ybWFsJyk7XHJcblxyXG4gICAgICB0aGlzLnVwbG9hZFRyaWFuZ2xlcygpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlci5kZWxldGUoKTtcclxuICAgICAgdGhpcy5ub3JtYWxCdWZmZXIuZGVsZXRlKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbC5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsLnJvdFooYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5tb2RlbC50cmFuc2xhdGUob2Zmc2V0KTtcclxuICAgfVxyXG4gICBwdWJsaWMgY2xlYXJUcmFuc2Zvcm1zKCkge1xyXG4gICAgICB0aGlzLm1vZGVsID0gbmV3IGdsTWF0NCgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHB1c2hWZWMoYXJyYXk6IG51bWJlcltdLCB2ZWM6IGdsVmVjMykge1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy54KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueSk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBsb2FkVHJpYW5nbGVzKCkge1xyXG5cclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgLy8gY29udmVydCB0aGUgdHJpYW5nbGVzIGludG8gYXJyYXlzIHRoYXQgY2FuIGJlIHVwbG9hZGVkXHJcbiAgICAgIGxldCB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50T2JqLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy50T2JqLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHZlcnRpY2VzLCB0cmkudjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRyaS52MSk7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyh2ZXJ0aWNlcywgdHJpLnYyKTtcclxuXHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyhub3JtYWxzLCB0cmkubjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWMobm9ybWFscywgdHJpLm4xKTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRyaS5uMik7XHJcbiAgICAgIH1cclxuICAgICAgcC5sb2coJ3RvIGdsVmVjW10nKTtcclxuXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyLnVwbG9hZCh2ZXJ0aWNlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLnVwbG9hZChub3JtYWxzKTtcclxuICAgICAgcC5sb2coJ3VwbG9hZCcpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKGdsLCB0aGlzLnByb2dyYW0pO1xyXG4gICAgICB1bmkuc2V0KCdtb2RlbCcsIHRoaXMubW9kZWwudHJhbnNwb3NlKCkpO1xyXG5cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIuYmluZCgpO1xyXG4gICAgICB0aGlzLm5vcm1hbEJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCB0aGlzLnRPYmoudHJpYW5nbGVzLmxlbmd0aCAqIDMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICB0aGlzLnRPYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcbiAgICAgIHRoaXMudXBsb2FkVHJpYW5nbGVzKCk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBlbnVtIEZyYW1lQnVmZmVyU3R5bGUge1xyXG4gICBOb3JtYWwsXHJcbiAgIERlcHRoLFxyXG4gICBGbG9hdFxyXG59XHJcblxyXG4vKipcclxuICogQSBmcmFtZSBidWZmZXIgdGhhdCBjYW4gYmUgcmVuZGVyZWQgdG9cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFRleHR1cmVGcmFtZUJ1ZmZlciB7XHJcblxyXG4gICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHVibGljIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwdWJsaWMgY29sb3JUZXh0dXJlOiBXZWJHTFRleHR1cmU7XHJcbiAgIHB1YmxpYyBkZXB0aFRleHR1cmU6IFdlYkdMVGV4dHVyZTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBmcmFtZSBidWZmZXIgZm9yIHJlbmRlcmluZyBpbnRvIHRleHR1cmUgb2JqZWN0cy5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBnbEN0eCBUaGUgV2ViR0wgY29udGV4dFxyXG4gICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIChpbiBwaXhlbHMpIG9mIHRoZSByZW5kZXJpbmcgKG11c3QgYmUgcG93ZXIgb2YgMilcclxuICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IChpbiBwaXhlbHMpIG9mIHRoZSByZW5kZXJpbmcgKG11c3QgYmUgcG93ZXIgb2YgMilcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgZ2xDdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICBzdHlsZTogRnJhbWVCdWZmZXJTdHlsZVxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbEN0eDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc3R5bGUpIHtcclxuICAgICAgICAgY2FzZSBGcmFtZUJ1ZmZlclN0eWxlLk5vcm1hbDpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBGcmFtZUJ1ZmZlclN0eWxlLkRlcHRoOlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURlcHRoKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgRnJhbWVCdWZmZXJTdHlsZS5GbG9hdDpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGbG9hdCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRlcHRoVGV4dHVyZSkge1xyXG4gICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuZGVwdGhUZXh0dXJlKTtcclxuICAgICAgICAgdGhpcy5kZXB0aFRleHR1cmUgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRoaXMuY29sb3JUZXh0dXJlKTtcclxuICAgICAgICAgdGhpcy5jb2xvclRleHR1cmUgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmZyYW1lQnVmZmVyKSB7XHJcbiAgICAgICAgIGdsLmRlbGV0ZUZyYW1lYnVmZmVyKHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICAgICB0aGlzLmZyYW1lQnVmZmVyID0gbnVsbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMTogQ3JlYXRlIGEgZnJhbWUgYnVmZmVyIG9iamVjdFxyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMjogQ3JlYXRlIGFuZCBpbml0aWFsaXplIGEgdGV4dHVyZSBidWZmZXIgdG8gaG9sZCB0aGUgY29sb3JzLlxyXG4gICAgICB0aGlzLmNvbG9yVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsXHJcbiAgICAgICAgIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNDogQXR0YWNoIHRoZSBzcGVjaWZpYyBidWZmZXJzIHRvIHRoZSBmcmFtZSBidWZmZXIuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUsIDApO1xyXG5cclxuICAgICAgLy8gU3RlcCA1OiBWZXJpZnkgdGhhdCB0aGUgZnJhbWUgYnVmZmVyIGlzIHZhbGlkLlxyXG4gICAgICBsZXQgc3RhdHVzID0gZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhnbC5GUkFNRUJVRkZFUik7XHJcbiAgICAgIGlmIChzdGF0dXMgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgIGxldCBtc2cgPSBcIlRoZSBjcmVhdGVkIGZyYW1lIGJ1ZmZlciBpcyBpbnZhbGlkOiBcIiArIHN0YXR1cy50b1N0cmluZygpO1xyXG4gICAgICAgICBhbGVydChtc2cpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVbmJpbmQgdGhlc2UgbmV3IG9iamVjdHMsIHdoaWNoIG1ha2VzIHRoZSBkZWZhdWx0IGZyYW1lIGJ1ZmZlciB0aGVcclxuICAgICAgLy8gdGFyZ2V0IGZvciByZW5kZXJpbmcuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZURlcHRoKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICBsZXQgZGVwdGhfdGV4dHVyZV9leHRlbnNpb24gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlcHRoX3RleHR1cmUnKTtcclxuICAgICAgaWYgKCFkZXB0aF90ZXh0dXJlX2V4dGVuc2lvbikge1xyXG4gICAgICAgICBhbGVydCgnVGhpcyBXZWJHTCBwcm9ncmFtIHJlcXVpcmVzIHRoZSB1c2Ugb2YgdGhlIFdFQkdMX2RlcHRoX3RleHR1cmUgZXh0ZW5zaW9uLicpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFN0ZXAgMTogQ3JlYXRlIGEgZnJhbWUgYnVmZmVyIG9iamVjdFxyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMjogQ3JlYXRlIGFuZCBpbml0aWFsaXplIGEgdGV4dHVyZSBidWZmZXIgdG8gaG9sZCB0aGUgY29sb3JzLlxyXG4gICAgICB0aGlzLmNvbG9yVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsXHJcbiAgICAgICAgIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMzogQ3JlYXRlIGFuZCBpbml0aWFsaXplIGEgdGV4dHVyZSBidWZmZXIgdG8gaG9sZCB0aGUgZGVwdGggdmFsdWVzLlxyXG4gICAgICAvLyBOb3RlOiB0aGUgV0VCR0xfZGVwdGhfdGV4dHVyZSBleHRlbnNpb24gaXMgcmVxdWlyZWQgZm9yIHRoaXMgdG8gd29ya1xyXG4gICAgICAvLyAgICAgICBhbmQgZm9yIHRoZSBnbC5ERVBUSF9DT01QT05FTlQgdGV4dHVyZSBmb3JtYXQgdG8gYmUgc3VwcG9ydGVkLlxyXG4gICAgICB0aGlzLmRlcHRoVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5kZXB0aFRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLkRFUFRIX0NPTVBPTkVOVCwgd2lkdGgsIGhlaWdodCwgMCxcclxuICAgICAgICAgZ2wuREVQVEhfQ09NUE9ORU5ULCBnbC5VTlNJR05FRF9JTlQsIG51bGwpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNDogQXR0YWNoIHRoZSBzcGVjaWZpYyBidWZmZXJzIHRvIHRoZSBmcmFtZSBidWZmZXIuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUsIDApO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuREVQVEhfQVRUQUNITUVOVCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy5kZXB0aFRleHR1cmUsIDApO1xyXG5cclxuICAgICAgLy8gU3RlcCA1OiBWZXJpZnkgdGhhdCB0aGUgZnJhbWUgYnVmZmVyIGlzIHZhbGlkLlxyXG4gICAgICBsZXQgc3RhdHVzID0gZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhnbC5GUkFNRUJVRkZFUik7XHJcbiAgICAgIGlmIChzdGF0dXMgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgIGxldCBtc2cgPSBcIlRoZSBjcmVhdGVkIGZyYW1lIGJ1ZmZlciBpcyBpbnZhbGlkOiBcIiArIHN0YXR1cy50b1N0cmluZygpO1xyXG4gICAgICAgICBhbGVydChtc2cpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVbmJpbmQgdGhlc2UgbmV3IG9iamVjdHMsIHdoaWNoIG1ha2VzIHRoZSBkZWZhdWx0IGZyYW1lIGJ1ZmZlciB0aGVcclxuICAgICAgLy8gdGFyZ2V0IGZvciByZW5kZXJpbmcuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY3JlYXRlRmxvYXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBzZXR0aW5nIHVuaWZvcm0gdmFsdWVzIGluIGEgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xVbmlmb3JtIHtcclxuXHJcbiAgIHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG5cclxuICAgLy8gdGhlIFdlYkdMIHNoYWRlciBwcm9ncmFtXHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGZvciBzZXR0aW5nIHZhbHVlcyBhbmQgY2FsbHMgZ2wudXNlUHJvZ3JhbVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGdsQ3R4IFRoZSBXZWJHTCBjb250ZXh0XHJcbiAgICAqIEBwYXJhbSBwcm9ncmFtIFRoZSBwcm9ncmFtIGFzc29jaWF0ZWQgd2l0aCB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgZ2xDdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsXHJcbiAgICAgIHByb2dyYW06IFdlYkdMUHJvZ3JhbVxyXG4gICApIHtcclxuICAgICAgdGhpcy5nbCA9IGdsQ3R4O1xyXG4gICAgICBsZXQgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB1bmlmb3JtIHZhbHVlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbmFtZSBUaGUgdmFyaWFibGUgbmFtZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAgICAqIEBwYXJhbSBpbnQgSWYgdHJ1ZSBhbmQgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGFuIGludGVnZXJcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIHwgZ2xWZWMzIHwgZ2xDb2xvciB8IGdsTWF0NCwgaW50OiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICAgIGxldCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgICBsZXQgbG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSk7XHJcbiAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xWZWMzKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jLCBuZXcgRmxvYXQzMkFycmF5KHZhbHVlLnZhbHVlcykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xDb2xvcikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvYywgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuciwgdmFsdWUuZywgdmFsdWUuYl0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsTWF0NCkge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvYywgZmFsc2UsIG5ldyBGbG9hdDMyQXJyYXkodmFsdWUudmFsdWVzKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJ1TW9kZVwiKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2MsIHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGludCkge1xyXG4gICAgICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xZihsb2MsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYW4gaW50ZWdlciB1bmlmb3JtIHZhbHVlIChzYW1lIGFzIHNldChuYW1lLCB2YWx1ZSwgdHJ1ZSkpXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbmFtZSBUaGUgdmFyaWFibGUgbmFtZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0aShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUsIHRydWUpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhbGwgdmFsdWVzIGZvciB2YXJpYWJsZXMgc3RvcmVkIGFzIG1lbWJlcnMgb2YgYW4gb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdW5pZm9ybXMgVGhlIG9iamVjdCB3aXRoIG1lbWJlciB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXRBbGwodW5pZm9ybXM6IGFueSkge1xyXG5cclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiB1bmlmb3Jtcykge1xyXG4gICAgICAgICB2YXIgdmFsdWUgPSB1bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBnbFVuaWZvcm1CbG9jayB7XHJcbiAgIHByaXZhdGUgZ2wyOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuICAgcHJpdmF0ZSBibG9ja0xvY2F0aW9uOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgYmxvY2tCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoXHJcbiAgICAgIGdsQ3R4OiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW0sXHJcbiAgICAgIGJsb2NrTmFtZTogc3RyaW5nLFxyXG4gICAgICBibG9ja0JpbmRpbmc6IG51bWJlclxyXG4gICApIHtcclxuXHJcbiAgICAgIHRoaXMuZ2wyID0gZ2xDdHg7XHJcbiAgICAgIGxldCBnbDIgPSB0aGlzLmdsMjtcclxuXHJcbiAgICAgIHRoaXMuYmxvY2tMb2NhdGlvbiA9IGdsMi5nZXRVbmlmb3JtQmxvY2tJbmRleChwcm9ncmFtLCBibG9ja05hbWUpO1xyXG4gICAgICBnbDIudW5pZm9ybUJsb2NrQmluZGluZyhwcm9ncmFtLCB0aGlzLmJsb2NrTG9jYXRpb24sIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICB0aGlzLmJsb2NrQnVmZmVyID0gZ2wyLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlckJhc2UoZ2wyLlVOSUZPUk1fQlVGRkVSLCBibG9ja0JpbmRpbmcsIHRoaXMuYmxvY2tCdWZmZXIpO1xyXG4gICB9XHJcblxyXG4gICB1cGxvYWQoZGF0YTogRmxvYXQzMkFycmF5IHwgSW50MzJBcnJheSkge1xyXG5cclxuICAgICAgbGV0IGdsMiA9IHRoaXMuZ2wyO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIHRoaXMuYmxvY2tCdWZmZXIpO1xyXG4gICAgICBnbDIuYnVmZmVyRGF0YShnbDIuVU5JRk9STV9CVUZGRVIsIGRhdGEsIGdsMi5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyKGdsMi5VTklGT1JNX0JVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICB2YXIgdW5pZm9ybUJsb2NrQnVmZmVyID0gZ2wyLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIHVuaWZvcm1CbG9ja0J1ZmZlcik7XHJcbiAgICAgIGdsMi5idWZmZXJEYXRhKGdsMi5VTklGT1JNX0JVRkZFUiwgdHJpYW5nbGVEYXRhLCBnbDIuU1RBVElDX0RSQVcpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIG51bGwpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlckJhc2UoZ2wyLlVOSUZPUk1fQlVGRkVSLCAyLCB1bmlmb3JtQmxvY2tCdWZmZXIpO1xyXG4gICAgICAqL1xyXG5cclxuICAgfVxyXG59IiwiXHJcbi8qKlxyXG4gKiBWZWN0b3IgY2xhc3MgZm9yIHVzZSB3aXRoIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmNsYXNzIGdsVmVjIHtcclxuXHJcbiAgIC8qKiBUaGUgdmVjdG9yIHZhbHVlcy4gKi9cclxuICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlc09yU2l6ZSBJZiBhIGFycmF5LCB0aGUgdmFsdWVzIGZvciB0aGUgdmVjdG9yLiBJZiBhIG51bWJlciwgdGhlIHNpemUgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih2YWx1ZXNPclNpemU6IG51bWJlciB8IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXNPclNpemUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNPclNpemVdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBBcnJheSh2YWx1ZXNPclNpemUpO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09yU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gMDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIFRoZSB2ZWN0b3IgbWFnbml0dWRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hZ25pdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbaV0gKiB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteSB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWMyIGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbFZlYzIge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMih0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIHRvIGFub3RoZXIgcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgcG9pbnRcclxuICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBwb2ludCBhbmQgdGhlIG90aGVyIHBvaW50XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGlzdGFuY2Uob3RoZXI6IGdsVmVjMik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54IC0gb3RoZXIueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSBvdGhlci55LCAyKSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzMgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1syXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHoodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzModGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZGlnaXRzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gZGlzcGxheS4gVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gdG9GaXhlZCgpLlxyXG4gICAgKiBAcGFyYW0gZGl2aWRlciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGVhY2ggbnVtYmVyLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHM6IG51bWJlciwgZGl2aWRlciA9ICcsJyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLngudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMueS50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy56LnRvRml4ZWQoZGlnaXRzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgbGV0IHJldCA9IHRoaXMuY2xvbmUoKTtcclxuICAgICAgaWYgKG1hZyAhPT0gMCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJldC52YWx1ZXNbaV0gLz0gbWFnO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdWJ0cmFjdHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gc3VidHJhY3QuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3VidHJhY3QodmVjOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC0gdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLSB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAtIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBBZGRzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIGFkZC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhZGQodmVjOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdICsgdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gKyB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSArIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjcm9zcyhvdGhlcjogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IEEgPSB0aGlzLnZhbHVlcztcclxuICAgICAgbGV0IEIgPSBvdGhlci52YWx1ZXM7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgQVsxXSAqIEJbMl0gLSBBWzJdICogQlsxXSxcclxuICAgICAgICAgQVsyXSAqIEJbMF0gLSBBWzBdICogQlsyXSxcclxuICAgICAgICAgQVswXSAqIEJbMV0gLSBBWzFdICogQlswXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWM0IGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIHgteS16IHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgY29tcHV0ZWQgYnkgZGl2aWRpbmcgdGhpcyB2ZWN0b3JzXHJcbiAgICAqIGVsZW1lbnRzIGJ5IHRoZSB3IHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4geC15LXogdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpdmlkZUJ5VygpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgdyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAvIHdcclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyB0b0NzcyB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyNTVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHdoaXRlID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTUsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJsYWNrID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJlZCA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGdyZWVuID0gbmV3IGh0bWxDb2xvcihbMCwgMjU1LCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmx1ZSA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG9yYW5nZSA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMTY1LCAwXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjIFRoZSBudW1lcmljIHZhbHVlXHJcbiAgICAqIEByZXR1cm5zIFRoZSBoZXggc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29tcG9uZW50VG9IZXgoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGhleCBzdHJpbmcgKGUuZy4gIzBmMGYwZikuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGhleCBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IZXgoKTogc3RyaW5nIHtcclxuICAgICAgbGV0IHJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMucik7XHJcbiAgICAgIGxldCBnSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmcpO1xyXG4gICAgICBsZXQgYkhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5iKTtcclxuICAgICAgcmV0dXJuIFwiI1wiICsgckhleCArIGdIZXggKyBiSGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBjc3Mgc3RyaW5nIChlLmcuICdyZ2IoMTI4LDIyOCwzMiknKS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjc3Mgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvQ3NzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0b0Nzcyh0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgY3NzIHN0eWxlIHN0cmluZyAoZS5nLiAncmdiKDI0LDM2LDgzKScpIHRvIGEgY29sb3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjc3MgVGhlIGNzcyBzdHJpbmcuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNzcyhjc3M6IHN0cmluZyk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByZWdleCA9IC9cXGQrL2c7XHJcbiAgICAgIGxldCB2YWxzID0gY3NzLm1hdGNoKHJlZ2V4KS5zbGljZSgwLCAzKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3BhcnNlSW50KHZhbHNbMF0pLCBwYXJzZUludCh2YWxzWzFdKSwgcGFyc2VJbnQodmFsc1syXSldKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCBmcm9tIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGhleCBUaGUgaGV4IHN0cmluZ1xyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbENvbG9yIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tSGV4KGhleDogc3RyaW5nKTogaHRtbENvbG9yIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgIGxldCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgICAgICAgIGxldCBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XHJcbiAgICAgICAgIGxldCBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgdXNpbmcgdmFsdWVzIGluIGEgQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9yIEEgZ2VuZXJpYyBDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5yKTtcclxuICAgICAgbGV0IGcgPSBodG1sQ29sb3IuY2xhbXAoY29sb3IuZyk7XHJcbiAgICAgIGxldCBiID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUm91bmRzIGEgbnVtYmVyIHRvIGEgd2hvbGUgbnVtYmVyIGFuZCBjbGFtcHMgaXQgYmV0d2VlbiAwIGFuZCAyNTUuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICogQHJldHVybnMgVGhlIHJvdW5kZWQgJiBjbGFtcGVkIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjbGFtcCh2YWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHZhbCA9IE1hdGgucm91bmQodmFsKTtcclxuICAgICAgaWYgKHZhbCA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsID4gMjU1KSB7XHJcbiAgICAgICAgIHJldHVybiAyNTU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgY29sb3IgdG8gYW4gZXF1aXZhbGVudCBncmF5LXNjYWxlIGNvbG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZ3JheS1zY2FsZSBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dyYXkoKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHJnYiA9IE1hdGgucm91bmQoKHRoaXMuciArIHRoaXMuZyArIHRoaXMuYikgLyAzKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3JnYiwgcmdiLCByZ2JdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgV2ViR0wgY29sb3Igb2JqZWN0ICgwLTEgYmFzZWQpXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR2xDb2xvcigpOiBnbENvbG9yIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFt0aGlzLnIgLyAyNTUsIHRoaXMuZyAvIDI1NSwgdGhpcy5iIC8gMjU1XSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyB0b0NzcyB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBodG1sIGNvbG9yIHdpdGggYSB0cmFuc3BhcmVuY3kgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3JXaXRoQWxwaGEgZXh0ZW5kcyBodG1sQ29sb3Ige1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0cmFuc3BhcmVudCA9IG5ldyBodG1sQ29sb3JXaXRoQWxwaGEoWzAsIDAsIDAsIDBdKTtcclxuXHJcbiAgIC8qKiBUaGUgdHJhbnNwYXJlbmN5IChhbHBoYSkgdmFsdWUgKi9cclxuICAgcHVibGljIGE6IG51bWJlciA9IDI1NTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCQSBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgc3VwZXIoW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl1dKTtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gNCkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgNCBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb2xvcls0XSA8IDAgfHwgY29sb3JbNF0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYScgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmEgPSBjb2xvclszXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgY3NzIHN0cmluZyAoZS5nLiAncmdiKDEyOCwyMjgsMzIsMjU1KScpLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNzcyBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Dc3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRvQ3NzKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFBhdGhUcmFjZXJBcHAgfSBmcm9tIFwiLi9QYXRoVHJhY2VyQXBwXCI7XHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IFBsYW5lc0FwcCB9IGZyb20gXCIuL1BsYW5lc0FwcFwiO1xyXG5pbXBvcnQgeyBWaWV3ZXJBcHAgfSBmcm9tIFwiLi9WaWV3ZXJBcHBcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICBsZXQgcXVlcnk6IHN0cmluZztcclxuICAgbGV0IHR5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1xyXG4gICAgICBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xyXG5cclxuICAgICAgbGV0IHRva2VucyA9IHF1ZXJ5LnNwbGl0KCctJyk7XHJcbiAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgIHR5cGUgPSB0b2tlbnNbMF07XHJcbiAgICAgICAgIHF1ZXJ5ID0gdG9rZW5zWzFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0eXBlID0gdG9rZW5zWzBdO1xyXG4gICAgICAgICBxdWVyeSA9ICcnO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGlmICh0eXBlID09PSAncGxhbmVzJykge1xyXG4gICAgICBsZXQgYXBwID0gbmV3IFBsYW5lc0FwcChxdWVyeSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLmNvbXBvbmVudCgpKTtcclxuICAgfVxyXG4gICBlbHNlIGlmICh0eXBlID09PSAndmlld2VyJykge1xyXG4gICAgICBsZXQgYXBwID0gbmV3IFZpZXdlckFwcChxdWVyeSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLmNvbXBvbmVudCgpKTtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgbGV0IGFwcCA9IG5ldyBQYXRoVHJhY2VyQXBwKHF1ZXJ5KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY29tcG9uZW50KCkpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIGludCB1TW9kZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVNYXhDaHJvbWE7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVIaWdobGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdU1pZExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVEYXJrTGlnaHRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdVNoYWRvd0NvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1UmVmbGVjdGVkTGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdURhcmtBY2NlbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3dBbHBoYTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcblxcclxcbiNkZWZpbmUgTU9ERV9TQ0lFTkNFIDBcXHJcXG4jZGVmaW5lIE1PREVfVkFMVUUgMVxcclxcbiNkZWZpbmUgTU9ERV9DSFJPTUEgMlxcclxcbiNkZWZpbmUgTU9ERV9CQU5EUyAzXFxyXFxuXFxyXFxudmVjNCB3aGl0ZSA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IHJlZCA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IG9yYW5nZSA9IHZlYzQoMS4wLCAwLjY1LCAwLjAsIDEuMCk7XFxyXFxudmVjNCB5ZWxsb3cgPSB2ZWM0KDEuMCwgMS4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBncmVlbiA9IHZlYzQoMC4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGN5YW4gPSB2ZWM0KDAuMCwgMS4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibHVlID0gdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgYmxhY2sgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuI2RlZmluZSBOVU1fQ09MT1JTIDZcXHJcXG52ZWM0IGNvbG9yc1tOVU1fQ09MT1JTXTtcXHJcXG5cXHJcXG52ZWM0IHZhbHVlMkNvbG9yKGZsb2F0IHZhbHVlKVxcclxcbntcXHJcXG4gICBmbG9hdCBzcGFuID0gMS4wIC8gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIHZhbHVlICo9IGZsb2F0KE5VTV9DT0xPUlMgLSAxKTtcXHJcXG4gICBpZiAodmFsdWUgPCAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF07XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzBdICsgdmFsdWUgKiAoY29sb3JzWzFdIC0gY29sb3JzWzBdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAyLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMV0gKyAodmFsdWUgLSAxLjApICogKGNvbG9yc1syXSAtIGNvbG9yc1sxXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMy4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzJdICsgKHZhbHVlIC0gMi4wKSAqIChjb2xvcnNbM10gLSBjb2xvcnNbMl0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDQuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1szXSArICh2YWx1ZSAtIDMuMCkgKiAoY29sb3JzWzRdIC0gY29sb3JzWzNdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA1LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNF0gKyAodmFsdWUgLSA0LjApICogKGNvbG9yc1s1XSAtIGNvbG9yc1s0XSk7XFxyXFxuICAgfVxcclxcbiAgIC8qXFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA2LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNV0gKyAodmFsdWUgLSA1LjApICogKGNvbG9yc1s2XSAtIGNvbG9yc1s1XSk7XFxyXFxuICAgfVxcclxcbiAgICovXFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzW05VTV9DT0xPUlMgLSAxXTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc1ZhbHVlKClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbiAgIGZsb2F0IHJnYiA9IHRvR3JheShjb2xvcik7XFxyXFxuICAgcmV0dXJuIHZlYzQocmdiLCByZ2IsIHJnYiwgMS4wKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc0Nocm9tYSgpXFxyXFxue1xcclxcbiAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG5cXHJcXG4gICAvLyByZW5kZXIgdGhlIHNjYWxlIGFzIGEgYmFyIG9uIHRoZSBsZWZ0XFxyXFxuICAgaWYgKHRleENvb3JkLnggPCAwLjAzKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdmFsdWUyQ29sb3IoKHRleENvb3JkLnkgLSAwLjEpIC8gMC45KTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+PSB1U2hhZG93QWxwaGEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZsb2F0IGF2ZyA9IChjb2xvci5yICsgY29sb3IuZyArIGNvbG9yLmIpIC8gMy4wO1xcclxcbiAgICAgICAgIGZsb2F0IHJnYiA9IChhYnMoYXZnIC0gY29sb3IucikgKyBhYnMoYXZnIC0gY29sb3IuZykgKyBhYnMoYXZnIC0gY29sb3IuYikpIC8gKDQuMCAvIDMuMCk7XFxyXFxuICAgICAgICAgcmV0dXJuIHZhbHVlMkNvbG9yKHJnYiAvIHVNYXhDaHJvbWEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgZDIodmVjMyBjMSwgdmVjMyBjMilcXHJcXG57XFxyXFxuICAgLy8gc3VtIHRoZSBzcXVhcmVzIG9mIHRoZSBkaWZmZXJlbmNlc1xcclxcbiAgIHJldHVybiBwb3coYzEuciAtIGMyLnIsIDIuMCkgKyBwb3coYzEuZyAtIGMyLmcsIDIuMCkgKyBwb3coYzEuYiAtIGMyLmIsIDIuMCk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgY2xvc2VzdCh2ZWMzIGNvbG9yLCB2ZWMzIGxpZ2h0LCB2ZWMzIG1pZCwgdmVjMyBkYXJrKVxcclxcbntcXHJcXG4gICBmbG9hdCBkbGlnaHQgPSBkMihjb2xvciwgbGlnaHQpO1xcclxcbiAgIGZsb2F0IGRtaWQgPSBkMihjb2xvciwgbWlkKTtcXHJcXG4gICBmbG9hdCBkZGFyayA9IGQyKGNvbG9yLCBkYXJrKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkbWluID0gbWluKGRsaWdodCwgbWluKGRtaWQsIGRkYXJrKSk7XFxyXFxuICAgaWYgKGRtaW4gPT0gZGxpZ2h0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbGlnaHQ7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKGRtaW4gPT0gZG1pZClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIG1pZDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gZGFyaztcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNCYW5kcygpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNpemUgPSAwLjA3O1xcclxcbiAgIGZsb2F0IG1hcmdpbiA9ICgxLjAgLSA2LjAgKiBzaXplKSAvIDIuMDtcXHJcXG4gICBpZiAodGV4Q29vcmQueCA8IHNpemUgJiYgdGV4Q29vcmQueSA+IG1hcmdpbiAmJiB0ZXhDb29yZC55IDwgKDEuMCAtIG1hcmdpbikpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDEuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1RGFya0FjY2VudENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDIuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1U2hhZG93Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVEYXJrTGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA0LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodU1pZExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNS4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVMaWdodExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgLy8gaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgICAgIC8vIGRlZmluZSB0aGUgdGVybWluYXRvciBhcyB0aGUgcG9pbnQgd2hlcmUgdGhpbmdzIGFyZSA1MCUgaW4gc2hhZG93XFxyXFxuICAgICAgZmxvYXQgdGVybWluYXRvciA9ICgodVNoYWRvd0FscGhhICsgdUxpZ2h0QWxwaGEpIC8gMi4wKTtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+IDEuMCAmJiBjb2xvci5hIDw9IHRlcm1pbmF0b3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZlYzMgYyA9IGNsb3Nlc3QoY29sb3IucmdiLCB1U2hhZG93Q29sb3IsIHVSZWZsZWN0ZWRMaWdodENvbG9yLCB1RGFya0FjY2VudENvbG9yKTtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmIChjb2xvci5hID4gdGVybWluYXRvcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gb25seSByZW5kZXIgdGhlIGhpZ2hsaWdodCB3aGVyZSBpdCdzIGNvbnRyaWJ1dGlvbiBpcyBzaWduaWZpY2FudCwgaS5lLiBncmVhdGVyXFxyXFxuICAgICAgICAgLy8gdGhhbiBzb21lIHRocmVzaG9sZFxcclxcbiAgICAgICAgIGNvbnN0IGZsb2F0IFNQRUNVTEFSX1RIUkVTSE9MRCA9IDAuMTtcXHJcXG4gICAgICAgICBpZiAoY29sb3IuYSA+ICh1TGlnaHRBbHBoYSArIFNQRUNVTEFSX1RIUkVTSE9MRCkpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2ZWMzIGMgPSBjbG9zZXN0KGNvbG9yLnJnYiwgdUxpZ2h0TGlnaHRDb2xvciwgdU1pZExpZ2h0Q29sb3IsIHVEYXJrTGlnaHRDb2xvcik7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHZlYzQoYywgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIGNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNTY2llbmNlKClcXHJcXG57XFxyXFxuICAgLy8ganVzdCByZXR1cm4gdGhlIHRleHR1cmVcXHJcXG4gICByZXR1cm4gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGNvbG9yc1swXSA9IGJsYWNrO1xcclxcbiAgIGNvbG9yc1sxXSA9IGJsdWU7XFxyXFxuICAgY29sb3JzWzJdID0gZ3JlZW47XFxyXFxuICAgY29sb3JzWzNdID0geWVsbG93O1xcclxcbiAgIGNvbG9yc1s0XSA9IG9yYW5nZTtcXHJcXG4gICBjb2xvcnNbNV0gPSByZWQ7XFxyXFxuXFxyXFxuICAgaWYgKHVNb2RlID09IE1PREVfVkFMVUUpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzVmFsdWUoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9DSFJPTUEpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQ2hyb21hKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQkFORFMpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQmFuZHMoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc1NjaWVuY2UoKTtcXHJcXG4gICB9XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNjYWxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdVhPZmZzZXQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1WU9mZnNldDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB0ZXhDb29yZCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodVNjYWxlICogdmVydGV4LnggKyB1WE9mZnNldCwgdVNjYWxlICogdmVydGV4LnkgKyB1WU9mZnNldCwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPFZFUlNJT04+XFxyXFxuXFxyXFxuI2RlZmluZSBOT1RISU5HXFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4jZGVmaW5lIEVTMzAwXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbmluIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZWxzZVxcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZlxcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1RXllO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRleHR1cmVTaXplO1xcclxcbnVuaWZvcm0gZmxvYXQgdVJhbmRvbTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0UG9zO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVPYmpDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVCYWxsUmFkaXVzO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNhbXBsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvd0FscGhhO1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbm91dCB2ZWM0IGZyYWdDb2xvcjtcXHJcXG4jZWxzZVxcclxcbiNkZWZpbmUgZnJhZ0NvbG9yIGdsX0ZyYWdDb2xvclxcclxcbiNkZWZpbmUgdGV4dHVyZSB0ZXh0dXJlMkRcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5jb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDtcXHJcXG5jb25zdCBmbG9hdCBFUFNJTE9OID0gMC4wMDAwMDE7XFxyXFxuY29uc3QgZmxvYXQgT0ZGU0VUID0gMC4wMDAxO1xcclxcbmNvbnN0IGZsb2F0IElORklOSVRZID0gMTAwMDAuMDtcXHJcXG5jb25zdCBmbG9hdCBMSUdIVF9TSVpFID0gMC4xO1xcclxcbiNkZWZpbmUgQkFMTF9DRU5URVIgdmVjMygwLCB1QmFsbFJhZGl1cywgMClcXHJcXG5jb25zdCB2ZWMzIERPTUVfQ0VOVEVSID0gdmVjMygwLCAwLCAwKTtcXHJcXG5jb25zdCBmbG9hdCBET01FX1JBRElVUyA9IDguMDtcXHJcXG5jb25zdCBmbG9hdCBWQUwgPSAwLjg7XFxyXFxuY29uc3QgdmVjMyBET01FX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEZMT09SX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEFNQklFTlRfQ09MT1IgPSB2ZWMzKDEuMCwgMS4wLCAxLjApO1xcclxcbmNvbnN0IGludCBOVU1fTElHSFRTID0gNjtcXHJcXG5jb25zdCBmbG9hdCBIRUlHSFQgPSA1LjA7XFxyXFxuY29uc3QgZmxvYXQgUkFESVVTID0gNC4wO1xcclxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTtcXHJcXG5cXHJcXG5zdHJ1Y3QgTGlnaHRcXHJcXG57XFxyXFxuICAgZmxvYXQgaW50ZW5zaXR5O1xcclxcbiAgIGZsb2F0IHNpemU7XFxyXFxuICAgdmVjMyBwb3M7XFxyXFxuICAgdmVjMyBjb2xvcjtcXHJcXG59O1xcclxcblxcclxcbiBMaWdodCBMaWdodHNbTlVNX0xJR0hUU107XFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG5zdHJ1Y3QgVHJpYW5nbGVcXHJcXG57XFxyXFxuICAgdmVjMyBwMDtcXHJcXG4gICB2ZWMzIHAxO1xcclxcbiAgIHZlYzMgcDI7XFxyXFxufTtcXHJcXG5cXHJcXG5zdHJ1Y3QgVm9sdW1lXFxyXFxue1xcclxcbiAgIGludCBzdGFydEluZGV4O1xcclxcbiAgIGludCBudW1UcmlhbmdsZXM7XFxyXFxuICAgdmVjMyBib3hNaW47XFxyXFxuICAgdmVjMyBib3hNYXg7XFxyXFxufTtcXHJcXG5cXHJcXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgaXMgcmVwbGFjZWQgd2l0aCBjb2RlIGdlbmVyYXRlZCBpbiBKYXZhU2NyaXB0XFxyXFxuY29uc3QgaW50IE5VTV9WRVJUSUNFUyA9IDxOVU1fVkVSVElDRVM+O1xcclxcbmNvbnN0IGludCBOVU1fVk9MVU1FUyA9IDxOVU1fVk9MVU1FUz47XFxyXFxuY29uc3QgaW50IE5VTV9UUklBTkdMRVMgPSA8TlVNX1RSSUFOR0xFUz47XFxyXFxuXFxyXFxubGF5b3V0KHN0ZDE0MCkgdW5pZm9ybSBNeVZlcnRpY2VzQmxvY2sgeyB2ZWMzIHZlcnRpY2VzW05VTV9WRVJUSUNFU107IH07XFxyXFxuXFxyXFxuc3RydWN0IElUcmlhbmdsZVxcclxcbntcXHJcXG4gICBpbnQgaTA7XFxyXFxuICAgaW50IGkxO1xcclxcbiAgIGludCBpMjtcXHJcXG59O1xcclxcblxcclxcbmxheW91dChzdGQxNDApIHVuaWZvcm0gTXlUcmlhbmdsZXNCbG9jayB7IElUcmlhbmdsZSB0cmlhbmdsZXNbTlVNX1RSSUFOR0xFU107IH07XFxyXFxuVHJpYW5nbGUgZ2V0VHJpYW5nbGUoaW50IGluZGV4KVxcclxcbntcXHJcXG4gICBJVHJpYW5nbGUgdHJpID0gdHJpYW5nbGVzW2luZGV4XTtcXHJcXG4gICB2ZWMzIHAwID0gdmVydGljZXNbdHJpLmkwXTtcXHJcXG4gICB2ZWMzIHAxID0gdmVydGljZXNbdHJpLmkxXTtcXHJcXG4gICB2ZWMzIHAyID0gdmVydGljZXNbdHJpLmkyXTtcXHJcXG4gICByZXR1cm4gVHJpYW5nbGUocDAsIHAxLCBwMik7XFxyXFxufVxcclxcblxcclxcbi8vIFRoZSBjZW50cmFsIG9iamVjdCBiZWluZyByZW5kZXJlZFxcclxcbnN0cnVjdCBPYmplY3RcXHJcXG57XFxyXFxuICAgVm9sdW1lIHZvbHVtZXNbTlVNX1ZPTFVNRVNdO1xcclxcbiAgIHZlYzMgYm94TWluO1xcclxcbiAgIHZlYzMgYm94TWF4O1xcclxcbn07XFxyXFxuXFxyXFxudW5pZm9ybSBPYmplY3Qgb2JqZWN0O1xcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0Qm94KGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgY29uc3QgdmVjMyBib3hNaW4sIGNvbnN0IHZlYzMgYm94TWF4KVxcclxcbntcXHJcXG4gICB2ZWMzIHJheUludiA9IDEuMCAvIHJheTtcXHJcXG4gICB2ZWMzIHRib3QgPSByYXlJbnYgKiAoYm94TWluIC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHR0b3AgPSByYXlJbnYgKiAoYm94TWF4IC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHRtaW4gPSBtaW4odHRvcCwgdGJvdCk7XFxyXFxuICAgdmVjMyB0bWF4ID0gbWF4KHR0b3AsIHRib3QpO1xcclxcbiAgIHZlYzIgdCA9IG1heCh0bWluLnh4LCB0bWluLnl6KTtcXHJcXG4gICBmbG9hdCB0MCA9IG1heCh0LngsIHQueSk7XFxyXFxuICAgdCA9IG1pbih0bWF4Lnh4LCB0bWF4Lnl6KTtcXHJcXG4gICBmbG9hdCB0MSA9IG1pbih0LngsIHQueSk7XFxyXFxuICAgcmV0dXJuIHQxID4gbWF4KHQwLCAwLjApO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdFZvbChjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIFZvbHVtZSB2b2wpXFxyXFxue1xcclxcbiAgIGlmICh2b2wubnVtVHJpYW5nbGVzID09IDApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgdm9sLmJveE1pbiwgdm9sLmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0T2JqKGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgT2JqZWN0IG9iamVjdClcXHJcXG57XFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgb2JqZWN0LmJveE1pbiwgb2JqZWN0LmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbi8vIE3DtmxsZXLigJNUcnVtYm9yZSByYXktdHJpYW5nbGUgaW50ZXJzZWN0aW9uIGFsZ29yaXRobVxcclxcbi8vIHNvdXJjZTogaHR0cDovL2JpdC5seS8yTXhuUE1HXFxyXFxuZmxvYXQgaW50ZXJzZWN0VHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBUcmlhbmdsZSB0cmkpXFxyXFxue1xcclxcbiAgIHZlYzMgZWRnZTEsIGVkZ2UyLCBoLCBzLCBxO1xcclxcbiAgIGZsb2F0IGEsIGYsIHUsIHY7XFxyXFxuICAgZWRnZTEgPSB0cmkucDEgLSB0cmkucDA7XFxyXFxuICAgZWRnZTIgPSB0cmkucDIgLSB0cmkucDA7XFxyXFxuXFxyXFxuICAgaCA9IGNyb3NzKHJheSwgZWRnZTIpO1xcclxcbiAgIGEgPSBkb3QoZWRnZTEsIGgpO1xcclxcbiAgIGlmIChhYnMoYSkgPCBFUFNJTE9OKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICBmID0gMS4wIC8gYTtcXHJcXG4gICBzID0gb3JpZ2luIC0gdHJpLnAwO1xcclxcbiAgIHUgPSBmICogZG90KHMsIGgpO1xcclxcbiAgIGlmICh1IDwgMC4wIHx8IHUgPiAxLjApXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHEgPSBjcm9zcyhzLCBlZGdlMSk7XFxyXFxuICAgdiA9IGYgKiBkb3QocmF5LCBxKTtcXHJcXG4gICBpZiAodiA8IDAuMCB8fCAodSArIHYpID4gMS4wKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAvLyBBdCB0aGlzIHN0YWdlIHdlIGNhbiBjb21wdXRlIHQgdG8gZmluZCBvdXQgd2hlcmUgdGhlIGludGVyc2VjdGlvbiBwb2ludCBpcyBvbiB0aGUgbGluZS5cXHJcXG4gICBmbG9hdCB0ID0gZiAqIGRvdChlZGdlMiwgcSk7XFxyXFxuICAgaWYgKHQgPD0gRVBTSUxPTikgLy8gdGhpcyBtZWFucyB0aGF0IHRoZXJlIGlzIGEgbGluZSBpbnRlcnNlY3Rpb24gYnV0IG5vdCBhIHJheSBpbnRlcnNlY3Rpb24uXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHJldHVybiB0OyAvLyByYXkgaW50ZXJzZWN0aW9uXFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yVHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgaGl0LCBpbnQgdEluZGV4KVxcclxcbntcXHJcXG4gICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZSh0SW5kZXgpO1xcclxcbiAgIHZlYzMgbm9ybWFsID0gY3Jvc3ModHJpLnAxIC0gdHJpLnAwLCB0cmkucDIgLSB0cmkucDApO1xcclxcbiAgIG5vcm1hbCA9IG5vcm1hbGl6ZShub3JtYWwpO1xcclxcbiAgIGlmIChkb3Qobm9ybWFsLCBvcmlnaW4gLSBoaXQpID4gMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbm9ybWFsO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiAtbm9ybWFsO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuZmxvYXQgaW50ZXJzZWN0U3BoZXJlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXHJcXG4gICBmbG9hdCBhID0gZG90KHJheSwgcmF5KTtcXHJcXG4gICBmbG9hdCBiID0gMi4wICogZG90KHRvU3BoZXJlLCByYXkpO1xcclxcbiAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cyAqIHNwaGVyZVJhZGl1cztcXHJcXG4gICBmbG9hdCBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xcclxcbiAgIGlmIChkaXNjcmltaW5hbnQgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHQxID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBmbG9hdCB0MiA9ICgtYiArIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgaWYgKHQxID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQyID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDI7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yU3BoZXJlKHZlYzMgaGl0LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICByZXR1cm4gKGhpdCAtIHNwaGVyZUNlbnRlcikgLyBzcGhlcmVSYWRpdXM7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6ICsgc2VlZCwgc2NhbGUpKSAqIDQzNzU4LjU0NTMgKyBzZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbihmbG9hdCBzZWVkLCB2ZWMzIG5vcm1hbClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCkgPCAuNSlcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygxLCAwLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygwLCAxLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByICogY29zKGFuZ2xlKSAqIHNkaXIgKyByICogc2luKGFuZ2xlKSAqIHRkaXIgKyBzcXJ0KDEuIC0gdSkgKiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB6ID0gMS4wIC0gMi4wICogdTtcXHJcXG4gICBmbG9hdCByID0gc3FydCgxLjAgLSB6ICogeik7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgcmV0dXJuIHZlYzMociAqIGNvcyhhbmdsZSksIHIgKiBzaW4oYW5nbGUpLCB6KTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihzZWVkKSAqIHNxcnQocmFuZG9tKHZlYzMoMzYuNzUzOSwgNTAuMzY1OCwgMzA2LjI3NTkpLCBzZWVkKSk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW5TaGFkb3codmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBmbG9hdCB0TGlnaHQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcbiAgIGlmICh0QmFsbCA8IHRMaWdodClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgaWYgKGludGVyc2VjdE9iaihvcmlnaW4sIHJheSwgb2JqZWN0KSlcXHJcXG4gICB7XFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fVk9MVU1FUzsgaSsrKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBWb2x1bWUgdm9sID0gb2JqZWN0LnZvbHVtZXNbaV07XFxyXFxuICAgICAgICAgaWYgKGludGVyc2VjdFZvbChvcmlnaW4sIHJheSwgdm9sKSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IHZvbC5zdGFydEluZGV4OyBpIDwgKHZvbC5zdGFydEluZGV4ICsgdm9sLm51bVRyaWFuZ2xlcyk7IGkrKylcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUoaSk7XFxyXFxuICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpIDwgdExpZ2h0KVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiNlbmRpZlxcclxcblxcclxcbiAgIHJldHVybiBmYWxzZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZSBbMOKApjFdLCBpbmNsdWRpbmcgaHVlLlxcclxcbnZlYzQgcmdiMmhzdih2ZWM0IGMpXFxyXFxue1xcclxcbiAgIHZlYzQgSyA9IHZlYzQoMC4wLCAtMS4wIC8gMy4wLCAyLjAgLyAzLjAsIC0xLjApO1xcclxcbiAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLCB2ZWM0KGMuZ2IsIEsueHkpLCBzdGVwKGMuYiwgYy5nKSk7XFxyXFxuICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksIHZlYzQoYy5yLCBwLnl6eCksIHN0ZXAocC54LCBjLnIpKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXHJcXG4gICBmbG9hdCBlID0gMS4wZS0xMDtcXHJcXG4gICByZXR1cm4gdmVjNChhYnMocS56ICsgKHEudyAtIHEueSkgLyAoNi4wICogZCArIGUpKSwgZCAvIChxLnggKyBlKSwgcS54LCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBBbGwgY29tcG9uZW50cyBhcmUgaW4gdGhlIHJhbmdlWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IGhzdjJyZ2IodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDEuMCwgMi4wIC8gMy4wLCAxLjAgLyAzLjAsIDMuMCk7XFxyXFxuICAgdmVjMyBwID0gYWJzKGZyYWN0KGMueHh4ICsgSy54eXopICogNi4wIC0gSy53d3cpO1xcclxcbiAgIHJldHVybiB2ZWM0KGMueiAqIG1peChLLnh4eCwgY2xhbXAocCAtIEsueHh4LCAwLjAsIDEuMCksIGMueSksIGMuYSk7XFxyXFxufVxcclxcblxcclxcbnZlYzQgc2hpZnRUZW1wZXJhdHVyZSh2ZWM0IHJnYiwgZmxvYXQgZGVnLCBmbG9hdCB0aW50U3RyZW5ndGgpXFxyXFxue1xcclxcbiAgIHZlYzQgaHN2ID0gcmdiMmhzdihyZ2IpO1xcclxcbiAgIGhzdi54ICs9IGRlZyAvIDM2MC4wO1xcclxcbiAgIHZlYzQgZnVsbFRpbnRSZ2IgPSBoc3YycmdiKGhzdik7XFxyXFxuXFxyXFxuICAgcmV0dXJuIG1peChyZ2IsIGZ1bGxUaW50UmdiLCB0aW50U3RyZW5ndGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBUT0RPIG1vdmUgdG8gYSBjb21tb24gZmlsZVxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCBjYWxjdWxhdGVDb2xvcih2ZWMzIG9yaWdpbiwgdmVjMyByYXkpXFxyXFxue1xcclxcbiAgIHZlYzMgYWNjdW11bGF0ZWRDb2xvciA9IHZlYzMoMC4wKTtcXHJcXG4gICB2ZWMzIGNvbG9yTWFzayA9IHZlYzMoMS4wKTtcXHJcXG4gICB2ZWMzIGV5ZSA9IG9yaWdpbjtcXHJcXG4gICBib29sIG9iakhpdCA9IGZhbHNlO1xcclxcbiAgIGJvb2wgb2JqU2hhZG93ID0gZmFsc2U7XFxyXFxuICAgZmxvYXQgc3BlY3VsYXJDb250cmlidXRpb24gPSAwLjA7XFxyXFxuXFxyXFxuICAgLy8gbWFpbiByYXl0cmFjaW5nIGxvb3BcXHJcXG4gICBmb3IgKGludCBib3VuY2UgPSAwOyBib3VuY2UgPCBNQVhfQk9VTkNFUzsgYm91bmNlKyspXFxyXFxuICAge1xcclxcbiAgICAgIC8vIGNvbXB1dGUgdGhlIGludGVyc2VjdGlvbiB3aXRoIGV2ZXJ5dGhpbmdcXHJcXG4gICAgICBmbG9hdCB0QmFsbCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG4gICAgICB2ZWMzIHN1cmZhY2VDb2xvciA9IHZlYzMoMC41LCAwLjUsIDAuNSk7XFxyXFxuXFxyXFxuICAgICAgZmxvYXQgdE9iaiA9IElORklOSVRZO1xcclxcbiAgICAgIGludCB0SW5kZXg7XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBpZiAoaW50ZXJzZWN0T2JqKG9yaWdpbiwgcmF5LCBvYmplY3QpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9WT0xVTUVTOyBpKyspXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIFZvbHVtZSB2b2wgPSBvYmplY3Qudm9sdW1lc1tpXTtcXHJcXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0Vm9sKG9yaWdpbiwgcmF5LCB2b2wpKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBmb3IgKGludCBpID0gdm9sLnN0YXJ0SW5kZXg7IGkgPCAodm9sLnN0YXJ0SW5kZXggKyB2b2wubnVtVHJpYW5nbGVzKTsgaSsrKVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZShpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBmbG9hdCB0VHJpID0gbWluKHRPYmosIGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBpZiAodFRyaSA8IHRPYmopXFxyXFxuICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRPYmogPSB0VHJpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRJbmRleCA9IGk7XFxyXFxuICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4gICAgICAvLyBpZiB0aGUgZmlyc3QgcmF5IGhpdHMgdGhlIGxpZ2h0LCByZXR1cm4gdGhlIGxpZ2h0IGNvbG9yLiBUaGlzXFxyXFxuICAgICAgLy8gc2ltdWxhdGVzIGRpc3BsYXlpbmcgdGhlIGxpZ2h0XFxyXFxuICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZmxvYXQgdExpZ2h0ID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBMaWdodHNbaV0ucG9zLCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgaWYgKHRMaWdodCA8IHRCYWxsICYmIHRMaWdodCA8IHRPYmopXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHJldHVybiB2ZWM0KExpZ2h0c1tpXS5pbnRlbnNpdHkgKiBMaWdodHNbaV0uY29sb3IsIDEuMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBpbnRlcnNlY3Rpb25cXHJcXG4gICAgICBmbG9hdCB0RG9tZSA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICBmbG9hdCB0Rmxvb3IgPSBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAgICAvLyBjaGVjayBmb3IgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZFxcclxcbiAgICAgIGlmIChyYXkueSA8IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gZGlzdGFuY2UgdG8gZmxvb3IgPSBudW0gdW5pdCB2ZWN0b3JzIHJlcXVpcmVkIHRvIHJlYWNoIHRoZSBmbG9vclxcclxcbiAgICAgICAgIHRGbG9vciA9IC1vcmlnaW4ueSAvIHJheS55O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGhpdFxcclxcbiAgICAgIGZsb2F0IHQgPSBtaW4obWluKHREb21lLCB0Rmxvb3IpLCBtaW4odEJhbGwsIHRPYmopKTtcXHJcXG5cXHJcXG4gICAgICAvLyBpbmZvIGFib3V0IGhpdFxcclxcbiAgICAgIHZlYzMgaGl0ID0gb3JpZ2luICsgcmF5ICogdDtcXHJcXG4gICAgICB2ZWMzIG5vcm1hbDtcXHJcXG5cXHJcXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbFxcclxcbiAgICAgIGlmICh0ID09IHRGbG9vcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRkxPT1JfQ09MT1I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gdmVjMygwLjAsIDEuMCwgMC4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0QmFsbClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdmVjMyh1T2JqQ29sb3IpO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IG5vcm1hbEZvclNwaGVyZShoaXQsIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpIaXQgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRPYmopXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IHVPYmpDb2xvcjtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JUcmlhbmdsZShvcmlnaW4sIGhpdCwgdEluZGV4KTtcXHJcXG5cXHJcXG4gICAgICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9iakhpdCA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHREb21lKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBET01FX0NPTE9SO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IC1ub3JtYWxGb3JTcGhlcmUoaGl0LCBET01FX0NFTlRFUiwgRE9NRV9SQURJVVMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBjb2xvck1hc2sgKj0gc3VyZmFjZUNvbG9yO1xcclxcblxcclxcbiAgICAgIGlmIChsZW5ndGgoY29sb3JNYXNrKSA8IDAuMDEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gY29tcHV0ZSBkaWZmdXNlIGxpZ2h0aW5nIGNvbnRyaWJ1dGlvblxcclxcbiAgICAgICAgIHZlYzMgdG9MaWdodCA9IExpZ2h0c1tpXS5wb3MgLSBoaXQ7XFxyXFxuICAgICAgICAgdmVjMyB0b0xpZ2h0TiA9IG5vcm1hbGl6ZSh0b0xpZ2h0KTtcXHJcXG5cXHJcXG4gICAgICAgICAvLyB0cmFjZSBhIHNoYWRvdyByYXkgdG8gdGhlIGxpZ2h0XFxyXFxuICAgICAgICAgaWYgKGluU2hhZG93KGhpdCArIG5vcm1hbCAqIE9GRlNFVCwgdG9MaWdodE4sIGxlbmd0aCh0b0xpZ2h0KSkgPT0gZmFsc2UpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIC8vIGRpZmZ1c2UgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlmZnVzZSA9IG1heCgwLjAsIGRvdCh0b0xpZ2h0Tiwgbm9ybWFsKSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gc3BlY3VsYXIgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgdmVjMyB0b0V5ZSA9IGV5ZSAtIGhpdDtcXHJcXG4gICAgICAgICAgICB2ZWMzIG4ybCA9IHRvTGlnaHROO1xcclxcbiAgICAgICAgICAgIHZlYzMgbjJlID0gbm9ybWFsaXplKHRvRXllKTtcXHJcXG4gICAgICAgICAgICB2ZWMzIGJpc2VjdG9yID0gKG4ybCArIG4yZSkgLyBsZW5ndGgobjJsICsgbjJlKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzcGVjdWxhckNvZWZmaWNpZW50ID0gMC41O1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNoaW5pbmVzcyA9IDEwMC4wO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyID0gc3BlY3VsYXJDb2VmZmljaWVudCAqIHBvdyhtYXgoMC4wLCBkb3QoYmlzZWN0b3IsIG5vcm1hbCkpLCBzaGluaW5lc3MpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIGFwcGx5IGxpZ2h0IGZhbGwgb2ZmIGFzIGRpc3RhbmNlIHNxdWFyZXMuIFVzZSBhIG1pbiB2YWx1ZSBmb3IgdGhlXFxyXFxuICAgICAgICAgICAgLy8gbGlnaHQgc2l6ZSBvdGhlcndpc2UgZmFsbG9mZiBpcyB0b28gcmFwaWRcXHJcXG4gICAgICAgICAgICBmbG9hdCByYWRpdXMgPSBtYXgoMC43NSwgTGlnaHRzW2ldLnNpemUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IGRpc3QgPSBtYXgoMS4wLCAobGVuZ3RoKHRvTGlnaHQpIC0gcmFkaXVzKSAvIHJhZGl1cyk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgbGlnaHRJbnRlbnNpdHkgPSBMaWdodHNbaV0uaW50ZW5zaXR5IC8gKGRpc3QgKiBkaXN0KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9IGNvbG9yTWFzayAqIExpZ2h0c1tpXS5jb2xvciAqIGxpZ2h0SW50ZW5zaXR5ICogZGlmZnVzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBUT0RPIGRlZmluZSBhIGNvbG9yIG1hc2sgZm9yIHNwZWN1bGFyIHJlZmxlY3Rpb25cXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gbWl4KHN1cmZhY2VDb2xvciwgTGlnaHRzW2ldLmNvbG9yLCAwLjgpICpcXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPVxcclxcbiAgICAgICAgICAgICAgICAobGVuZ3RoKHN1cmZhY2VDb2xvcikgKiBMaWdodHNbaV0uY29sb3IpICogbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBzcGVjdWxhckNvbnRyaWJ1dGlvbiArPSBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZSBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpTaGFkb3cgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIG5leHQgb3JpZ2luXFxyXFxuICAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odVJhbmRvbSArIGZsb2F0KGJvdW5jZSksIG5vcm1hbCk7XFxyXFxuXFxyXFxuICAgICAgb3JpZ2luID0gaGl0O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICBmbG9hdCBhbHBoYSA9IDEuMDtcXHJcXG4gICBpZiAob2JqSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAob2JqU2hhZG93KVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVTaGFkb3dBbHBoYTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVMaWdodEFscGhhO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhbHBoYSArPSBjbGFtcChzcGVjdWxhckNvbnRyaWJ1dGlvbiwgMC4wLCAxLjApO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWM0IHNjaWVuY2VDb2xvciA9IHZlYzQoY2xhbXAoYWNjdW11bGF0ZWRDb2xvciwgMC4wLCAxLjApLCBhbHBoYSk7XFxyXFxuICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICAvKlxcclxcbiAgIGlmIChvYmpIaXQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB2ZWM0KHRvQXJ0aXN0KHNjaWVuY2VDb2xvcikucmdiLCBhbHBoYSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdmVjMyByYW5kID0gdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHVSYW5kb20pICogTElHSFRfU0laRTtcXHJcXG5cXHJcXG4gICBMaWdodHNbMF0uaW50ZW5zaXR5ID0gdUxpZ2h0SW50ZW5zaXR5O1xcclxcbiAgIExpZ2h0c1swXS5zaXplID0gTElHSFRfU0laRTtcXHJcXG4gICBMaWdodHNbMF0ucG9zID0gdUxpZ2h0UG9zICsgcmFuZDtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB1TGlnaHRDb2xvcjtcXHJcXG5cXHJcXG4gICBmb3IgKGludCBpID0gMTsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgeCA9IFJBRElVUyAqIHNpbigyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLng7XFxyXFxuICAgICAgZmxvYXQgeSA9IEhFSUdIVCArIHJhbmQueTtcXHJcXG4gICAgICBmbG9hdCB6ID0gUkFESVVTICogY29zKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQuejtcXHJcXG5cXHJcXG4gICAgICBMaWdodHNbaV0uaW50ZW5zaXR5ID0gdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG4gICAgICBMaWdodHNbaV0uc2l6ZSA9IDIuMCAqIExJR0hUX1NJWkU7XFxyXFxuICAgICAgTGlnaHRzW2ldLnBvcyA9IHZlYzMoeCwgeSwgeik7XFxyXFxuICAgICAgTGlnaHRzW2ldLmNvbG9yID0gQU1CSUVOVF9DT0xPUjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gbWVyZ2UgdGhlIG5ldyBjb2xvciBpbnRvIHRoZSBleGlzdGluZyB0ZXh0dXJlXFxyXFxuICAgdmVjNCB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlKHVUZXh0dXJlLCBnbF9GcmFnQ29vcmQueHkgLyB1VGV4dHVyZVNpemUpO1xcclxcbiAgIHZlYzQgbmV3Q29sb3IgPSBjYWxjdWxhdGVDb2xvcih1RXllLCBpbml0aWFsUmF5KTtcXHJcXG4gICBmbG9hdCB3ZWlnaHQgPSAodVNhbXBsZSAvICgxLjAgKyB1U2FtcGxlKSk7XFxyXFxuICAgZnJhZ0NvbG9yID0gbWl4KG5ld0NvbG9yLCB0ZXh0dXJlQ29sb3IsIHdlaWdodCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8VkVSU0lPTj5cXHJcXG5cXHJcXG4jZGVmaW5lIE5PVEhJTkdcXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiNkZWZpbmUgRVMzMDBcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWUsIHVSYXkwMCwgdVJheTAxLCB1UmF5MTAsIHVSYXkxMTtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5pbiB2ZWMzIHZlcnRleDtcXHJcXG5vdXQgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbHNlXFxyXFxuYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZiBcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgodVJheTAwLCB1UmF5MDEsIHBlcmNlbnQueSksIG1peCh1UmF5MTAsIHVSYXkxMSwgcGVyY2VudC55KSwgcGVyY2VudC54KTtcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbi8vIGludGVycG9sYXRlZCB2YWx1ZXMgZnJvbSB0aGUgdmVydGV4IHNoYWRlclxcclxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcclxcbnZhcnlpbmcgdmVjMyB2VmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gZmxvYXQgdUFtYmllbnRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodERpcmVjdGlvbjtcXHJcXG5cXHJcXG4vLyB0aGUgY29sb3JzIHdlIHVzZSB0byByZXByZXNlbnQgb3VyIGxpZ2h0ZXN0IGFuZCBkYXJrZXN0IHZhbHVlc1xcclxcbnVuaWZvcm0gdmVjMyB1V2hpdGVDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUJsYWNrQ29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVRocmVzaG9sZHM7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGhyZXNob2xkMTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUaHJlc2hvbGQyO1xcclxcbnVuaWZvcm0gZmxvYXQgdUhpZ2hsaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdU1pZExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdURhcmtMaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3c7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVNoYWRvd3M7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNoYWRvd1RleHR1cmU7XFxyXFxuXFxyXFxuYm9vbCBpbl9zaGFkb3codm9pZClcXHJcXG57XFxyXFxuICAgaWYgKHVVc2VTaGFkb3dzID09IDApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gVGhlIHZlcnRleCBsb2NhdGlvbiByZW5kZXJlZCBmcm9tIHRoZSBsaWdodCBzb3VyY2UgaXMgYWxtb3N0IGluIE5vcm1hbGl6ZWRcXHJcXG4gICAvLyBEZXZpY2UgQ29vcmRpbmF0ZXMgKE5EQyksIGJ1dCB0aGUgcGVyc3BlY3RpdmUgZGl2aXNpb24gaGFzIG5vdCBiZWVuXFxyXFxuICAgLy8gcGVyZm9ybWVkIHlldC4gUGVyZm9ybSB0aGUgcGVyc3BlY3RpdmUgZGl2aWRlLiBUaGUgKHgseSx6KSB2ZXJ0ZXggbG9jYXRpb25cXHJcXG4gICAvLyBjb21wb25lbnRzIGFyZSBub3cgZWFjaCBpbiB0aGUgcmFuZ2UgWy0xLjAsKzEuMF0uXFxyXFxuICAgLy8gdmVjMyB2ZXJ0ZXhfcmVsYXRpdmVfdG9fbGlnaHQgPSB2X1ZlcnRleF9yZWxhdGl2ZV90b19saWdodC54eXogLyB2X1ZlcnRleF9yZWxhdGl2ZV90b19saWdodC53O1xcclxcbiAgIHZlYzMgdmVydGV4ID0gdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG4gICAvLyBDb252ZXJ0IHRoZSB0aGUgdmFsdWVzIGZyb20gTm9ybWFsaXplZCBEZXZpY2UgQ29vcmRpbmF0ZXMgKHJhbmdlIFstMS4wLCsxLjBdKVxcclxcbiAgIC8vIHRvIHRoZSByYW5nZSBbMC4wLDEuMF0uIFRoaXMgbWFwcGluZyBpcyBkb25lIGJ5IHNjYWxpbmdcXHJcXG4gICAvLyB0aGUgdmFsdWVzIGJ5IDAuNSwgd2hpY2ggZ2l2ZXMgdmFsdWVzIGluIHRoZSByYW5nZSBbLTAuNSwrMC41XSBhbmQgdGhlblxcclxcbiAgIC8vIHNoaWZ0aW5nIHRoZSB2YWx1ZXMgYnkgKzAuNS5cXHJcXG4gICB2ZXJ0ZXggPSB2ZXJ0ZXggKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgLy8gR2V0IHRoZSB6IHZhbHVlIG9mIHRoaXMgZnJhZ21lbnQgaW4gcmVsYXRpb25zaGlwIHRvIHRoZSBsaWdodCBzb3VyY2UuXFxyXFxuICAgLy8gVGhpcyB2YWx1ZSB3YXMgc3RvcmVkIGluIHRoZSBzaGFkb3cgbWFwIChkZXB0aCBidWZmZXIgb2YgdGhlIGZyYW1lIGJ1ZmZlcilcXHJcXG4gICAvLyB3aGljaCB3YXMgcGFzc2VkIHRvIHRoZSBzaGFkZXIgYXMgYSB0ZXh0dXJlIG1hcC5cXHJcXG4gICAvLyB2ZWM0IHRleHR1cmVWYWx1ZSA9IHRleHR1cmUyRCh1U2hhZG93U2FtcGxlciwgdmVydGV4Lnh5KTtcXHJcXG5cXHJcXG4gICAvLyBUaGUgdGV4dHVyZSBtYXAgY29udGFpbnMgYSBzaW5nbGUgZGVwdGggdmFsdWUgZm9yIGVhY2ggcGl4ZWwuIEhvd2V2ZXIsXFxyXFxuICAgLy8gdGhlIHRleHR1cmUyRCBzYW1wbGVyIGFsd2F5cyByZXR1cm5zIGEgY29sb3IgZnJvbSBhIHRleHR1cmUuIEZvciBhXFxyXFxuICAgLy8gZ2wuREVQVEhfQ09NUE9ORU5UIHRleHR1cmUsIHRoZSBjb2xvciBjb250YWlucyB0aGUgZGVwdGggdmFsdWUgaW5cXHJcXG4gICAvLyBlYWNoIG9mIHRoZSBjb2xvciBjb21wb25lbnRzLiBJZiB0aGUgdmFsdWUgd2FzIGQsIHRoZW4gdGhlIGNvbG9yIHJldHVybmVkXFxyXFxuICAgLy8gaXMgKGQsZCxkLDEpLiBUaGlzIGlzIGEgXFxcImNvbG9yXFxcIiAoZGVwdGgpIHZhbHVlIGJldHdlZW4gWzAuMCwrMS4wXS5cXHJcXG4gICBmbG9hdCBzaGFkb3dtYXBfZGlzdGFuY2UgPSB0ZXh0dXJlMkQodVNoYWRvd1RleHR1cmUsIHZlcnRleC54eSkucjtcXHJcXG5cXHJcXG4gICAvLyBUZXN0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgZnJhZ21lbnQgYW5kIHRoZSBsaWdodCBzb3VyY2UgYXNcXHJcXG4gICAvLyBjYWxjdWxhdGVkIHVzaW5nIHRoZSBzaGFkb3dtYXAgdHJhbnNmb3JtYXRpb24gKHZlcnRleF9yZWxhdGl2ZV90b19saWdodC56KSBhbmRcXHJcXG4gICAvLyB0aGUgc21hbGxlc3QgZGlzdGFuY2UgYmV0d2VlbiB0aGUgY2xvc2VzdCBmcmFnbWVudCB0byB0aGUgbGlnaHQgc291cmNlXFxyXFxuICAgLy8gZm9yIHRoaXMgbG9jYXRpb24sIGFzIHN0b3JlZCBpbiB0aGUgc2hhZG93bWFwLiBXaGVuIHRoZSBjbG9zZXN0XFxyXFxuICAgLy8gZGlzdGFuY2UgdG8gdGhlIGxpZ2h0IHNvdXJjZSB3YXMgc2F2ZWQgaW4gdGhlIHNoYWRvd21hcCwgc29tZVxcclxcbiAgIC8vIHByZWNpc2lvbiB3YXMgbG9zdC4gVGhlcmVmb3JlIHdlIG5lZWQgYSBzbWFsbCB0b2xlcmFuY2UgZmFjdG9yIHRvXFxyXFxuICAgLy8gY29tcGVuc2F0ZSBmb3IgdGhlIGxvc3QgcHJlY2lzaW9uLlxcclxcbiAgIGZsb2F0IHRvbCA9IDAuMDAxO1xcclxcbiAgIGlmICh2ZXJ0ZXgueiA8PSBzaGFkb3dtYXBfZGlzdGFuY2UgKyB0b2wpXFxyXFxuICAge1xcclxcbiAgICAgIC8vIFRoaXMgc3VyZmFjZSByZWNlaXZlcyBmdWxsIGxpZ2h0IGJlY2F1c2UgaXQgaXMgdGhlIGNsb3Nlc3Qgc3VyZmFjZVxcclxcbiAgICAgIC8vIHRvIHRoZSBsaWdodC5cXHJcXG4gICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gVGhpcyBzdXJmYWNlIGlzIGluIGEgc2hhZG93IGJlY2F1c2UgdGhlcmUgaXMgYSBjbG9zZXIgc3VyZmFjZSB0b1xcclxcbiAgICAgIC8vIHRoZSBsaWdodCBzb3VyY2UuXFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IGdldENvbG9yKGZsb2F0IHZhbClcXHJcXG57XFxyXFxuICAgdmVjMyByZ2IgPSBtaXgodUJsYWNrQ29sb3IsIHVXaGl0ZUNvbG9yLCB2YWwpO1xcclxcbiAgIHJldHVybiB2ZWM0KHJnYi5yLCByZ2IuZywgcmdiLmIsIDEuMCk7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGlmIChpbl9zaGFkb3coKSlcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKHVVc2VUaHJlc2hvbGRzID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IGdldENvbG9yKHVBbWJpZW50SW50ZW5zaXR5KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBnbF9GcmFnQ29sb3IgPSBnZXRDb2xvcih1U2hhZG93KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgcmV0dXJuO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWMzIGV5ZSA9IHZlYzMoMC4wLCAwLjAsIC0xMC4wKTtcXHJcXG4gICB2ZWMzIHRvTGlnaHQgPSBub3JtYWxpemUoLXVMaWdodERpcmVjdGlvbik7XFxyXFxuICAgdmVjMyB0b0V5ZSA9IG5vcm1hbGl6ZShleWUgLSB2VmVydGV4KTtcXHJcXG4gICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2Tm9ybWFsKTsgLy8gdk5vcm1hbCBpcyBpbnRlcnBvbGF0ZWQgYW5kIG5vIGxvbmcgbm9ybWFsXFxyXFxuXFxyXFxuICAgLy8gc3dhcCBub3JtYWxzIGZvciBiYWNrIGZhY2luZyB0cmlhbmdsZXNcXHJcXG4gICBpZiAoZG90KG5vcm1hbCwgdG9FeWUpIDwgMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICBub3JtYWwgPSAtbm9ybWFsO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBjb21wdXRlIGRpZmZ1c2UgY29udHJpYnV0aW9uID0gY29zIG9mIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvcnMgKGRvdCBwcm9kdWN0KVxcclxcbiAgIGZsb2F0IGRpZmZ1c2VGYWN0b3IgPSBjbGFtcChkb3Qobm9ybWFsLCB0b0xpZ2h0KSwgMC4wLCAxLjApO1xcclxcbiAgIGZsb2F0IGRpZmZ1c2UgPSBkaWZmdXNlRmFjdG9yICogdUxpZ2h0SW50ZW5zaXR5O1xcclxcblxcclxcbiAgIC8vIGNvbXB1dGUgc3BlY3VsYXIgY29udHJpYnV0aW9uXFxyXFxuICAgZmxvYXQgc2hpbmluZXNzID0gMTUuMDtcXHJcXG4gICB2ZWMzIHJlZmxlY3Rpb24gPSBub3JtYWxpemUoMi4wICogZG90KG5vcm1hbCwgdG9MaWdodCkgKiBub3JtYWwgLSB0b0xpZ2h0KTtcXHJcXG4gICBmbG9hdCBjb3NBbmdsZSA9IGNsYW1wKGRvdChyZWZsZWN0aW9uLCB0b0V5ZSksIDAuMCwgMS4wKTsgLy8gY2xhbXAgdG8gYXZvaWQgdmFsdWVzID4gOTAgZGVnXFxyXFxuICAgZmxvYXQgc3BlY3VsYXIgPSAwLjEgKiBwb3coY29zQW5nbGUsIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgZmxvYXQgdmFsO1xcclxcbiAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICB2YWwgPSB1QW1iaWVudEludGVuc2l0eSArIGRpZmZ1c2UgKyBzcGVjdWxhcjtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB0aHJlc2hvbGQgPSAxLjAgLSBkaWZmdXNlRmFjdG9yO1xcclxcblxcclxcbiAgICAgIGZsb2F0IHYxID0gbWluKHVUaHJlc2hvbGQxLCB1VGhyZXNob2xkMik7XFxyXFxuICAgICAgZmxvYXQgdjIgPSBtYXgodVRocmVzaG9sZDEsIHVUaHJlc2hvbGQyKTtcXHJcXG5cXHJcXG4gICAgICBpZiAodGhyZXNob2xkIDwgdjEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZhbCA9IHVMaWdodExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCB2MilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmFsID0gdU1pZExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCAxLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZhbCA9IHVEYXJrTGlnaHQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmFsID0gdVNoYWRvdztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHNwZWN1bGFyID4gMC4wNSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmFsID0gdUhpZ2hsaWdodDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgIGdsX0ZyYWdDb2xvciA9IGdldENvbG9yKHZhbCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyBhVmVydGV4O1xcclxcbmF0dHJpYnV0ZSB2ZWMzIGFOb3JtYWw7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQ0IG1vZGVsO1xcclxcbnVuaWZvcm0gbWF0NCB2aWV3O1xcclxcbnVuaWZvcm0gbWF0NCBsaWdodFZpZXc7XFxyXFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMzIHZOb3JtYWw7XFxyXFxudmFyeWluZyB2ZWMzIHZWZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMzIHZTaGFkb3dWZXJ0ZXg7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChhVmVydGV4LCAxLjApO1xcclxcbiAgIHZOb3JtYWwgPSAobW9kZWwgKiB2ZWM0KGFOb3JtYWwsIDAuMCkpLnh5ejtcXHJcXG4gICB2VmVydGV4ID0gKG1vZGVsICogdmVjNChhVmVydGV4LCAxLjApKS54eXo7XFxyXFxuICAgdlNoYWRvd1ZlcnRleCA9IChsaWdodFZpZXcgKiBtb2RlbCAqIHZlYzQoYVZlcnRleCwgMS4wKSkueHl6O1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7IGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpOyB9XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIlxcclxcbmF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdGV4Q29vcmQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHZlcnRleC54eSwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=