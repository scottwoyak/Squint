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
exports.push([module.i, "#MainCanvas {\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n#Overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: transparent;\r\n  user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n#CtrlsContainer {\r\n  margin-top: 5px;\r\n}\r\n\r\n.PlanesApp #LightLightRange::-webkit-slider-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n.PlanesApp #LightLightSliderRange::-moz-range-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n\r\n.PlanesApp #MidLightRange::-webkit-slider-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n.PlanesApp #MidLightSliderRange::-moz-range-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n\r\n.PlanesApp #DarkLightRange::-webkit-slider-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n.PlanesApp #DarkLightSliderRange::-moz-range-thumb {\r\n  background: linear-gradient(135deg, lightgray, darkgray);\r\n}\r\n\r\n.PlanesApp .SliderRange {\r\n  width: 35%;\r\n}\r\n\r\n.PlanesApp .SliderLabel {\r\n  width: 18%;\r\n}\r\n\r\n.PlanesApp #ThresholdCanvas {\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 150px;\r\n  height: 150px;\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .PlanesApp .SliderRange {\r\n    width: 28%;\r\n  }\r\n\r\n  .PlanesApp .SliderLabel {\r\n    width: 22%;\r\n  }\r\n\r\n  .PlanesApp #ThresholdCanvas {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: rgb(128, 128, 150);\r\n  }\r\n}\r\n", ""]);
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
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
// Module
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#drawTime {\r\n  position: absolute;\r\n  top: -495px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  font-size: 8pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#progressSpan {\r\n  position: absolute;\r\n  bottom: 3px;\r\n  left: 0px;\r\n  right: 0px;\r\n  height: 5px;\r\n  background-color: rgba(50, 205, 50, 0.75);\r\n}\r\n\r\n#modeButton {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: yellow;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  * {\r\n    font-size: 40px;\r\n  }\r\n\r\n  #drawTime {\r\n    top: -960px;\r\n    left: 4px;\r\n    font-size: 16pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  modeButton {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n}\r\n", ""]);
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");


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
    ColorAnalyzer.prototype.run = function (alphaLight, alphaShadow) {
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
        _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].readPixels(0, 0, this.size, this.size, _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].RGBA, _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].FLOAT, this.pixels);
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
/*! exports provided: gl, isMobile, clamp, toDeg, toRad, mix, toCss, Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDeg", function() { return toDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCss", function() { return toCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
var gl = null;
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
var Globals = /** @class */ (function () {
    function Globals() {
    }
    Object.defineProperty(Globals, "gl", {
        get: function () {
            return gl;
        },
        set: function (context) {
            gl = context;
        },
        enumerable: true,
        configurable: true
    });
    return Globals;
}());



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
        _Globals__WEBPACK_IMPORTED_MODULE_8__["Globals"].gl = context;
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
            _this.renderer = new _PathTracerRenderer__WEBPACK_IMPORTED_MODULE_1__["PathTracerRenderer"](tObj);
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
    function PathTracerRenderer(tObj) {
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
        this.vertexBuffer = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].createBuffer();
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindBuffer(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bufferData(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].ARRAY_BUFFER, new Float32Array(this.vertices), _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].STATIC_DRAW);
        // create framebuffer
        this.frameBuffer = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].createFramebuffer();
        var internalFormat;
        var format;
        var type;
        // create textures
        if (_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"] instanceof WebGLRenderingContext) {
            var ext = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].getExtension('OES_texture_half_float');
            if (ext) {
                // Thanks Apple. Always got to do things a little differently
                internalFormat = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].RGBA;
                format = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].RGBA;
                type = ext.HALF_FLOAT_OES;
            }
            else {
                // No floating point textures? really fall back to unsigned bytes
                internalFormat = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].RGBA;
                format = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].RGBA;
                type = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].UNSIGNED_BYTE;
            }
        }
        // Typescript doesn't let you do an 'else if' here and when WebGL2 is
        // not supported, we get an exception, so thus the try-catch
        // see: https://stackoverflow.com/questions/45381122/typescript-type-narrowed-to-never-with-instanceof-in-an-if-else-statement
        try {
            if (_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"] instanceof WebGL2RenderingContext) {
                _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].getExtension('EXT_color_buffer_float');
                internalFormat = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].RGBA32F;
                format = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].RGBA;
                type = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].FLOAT;
            }
        }
        catch (error) {
        }
        // create two textures. One we display and one we draw to
        this.textures = [];
        for (var i = 0; i < 2; i++) {
            this.textures.push(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].createTexture());
            _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, this.textures[i]);
            _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_MAG_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].NEAREST);
            _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_MIN_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].NEAREST);
            _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].texImage2D(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, // target
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
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, null);
        // create toScreen shader
        this.toScreenProgram = _glCompiler__WEBPACK_IMPORTED_MODULE_11__["glCompiler"].compile(_shaders_PathTracerToScreenVertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_PathTracerToScreenFragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
        this.toScreenVertexAttribute = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].getAttribLocation(this.toScreenProgram, 'vertex');
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].enableVertexAttribArray(this.toScreenVertexAttribute);
        this.compileShader(tObj);
    }
    PathTracerRenderer.prototype.compileShader = function (tObj) {
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_9__["Profiler"]();
        // create the toTexture shader
        if (tObj && tObj.triangles.length > 0) {
            this.toTextureProgram = _glCompiler__WEBPACK_IMPORTED_MODULE_11__["glCompiler"].compile(_shaders_PathTracerToTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]
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
            this.toTextureProgram = _glCompiler__WEBPACK_IMPORTED_MODULE_11__["glCompiler"].compile(_shaders_PathTracerToTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]
                .replace('<VERSION>', ''), _shaders_PathTracerToTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"]
                .replace('<VERSION>', ''));
        }
        this.toTextureVertexAttribute = _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].getAttribLocation(this.toTextureProgram, 'vertex');
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].enableVertexAttribArray(this.toTextureVertexAttribute);
        p.log('compile');
    };
    /**
     * Uploads all the triangle data to WebGL
     *
     * @param program The program to upload to
     */
    PathTracerRenderer.prototype.uploadUniforms = function (tObj) {
        // upload the big chunks as Uniform Blocks
        var blockBinding = 2;
        var vBlock = new _glUniformBlock__WEBPACK_IMPORTED_MODULE_13__["glUniformBlock"](this.toTextureProgram, 'MyVerticesBlock', blockBinding);
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
        var tBlock = new _glUniformBlock__WEBPACK_IMPORTED_MODULE_13__["glUniformBlock"](this.toTextureProgram, 'MyTrianglesBlock', blockBinding);
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
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_10__["glUniform"](this.toTextureProgram);
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
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_10__["glUniform"](this.toTextureProgram);
        uni.setAll(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"]);
        // render to texture
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].viewport(0, 0, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uTextureSize);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, this.textures[0]);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindBuffer(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].FRAMEBUFFER, this.frameBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].framebufferTexture2D(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].FRAMEBUFFER, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].COLOR_ATTACHMENT0, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, this.textures[1], 0);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].vertexAttribPointer(this.toTextureVertexAttribute, 2, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].FLOAT, false, 0, 0);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].drawArrays(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TRIANGLE_STRIP, 0, 4);
        var data = this.analyzer.run(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uLightAlpha, _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uShadowAlpha);
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
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].FRAMEBUFFER, null);
        // ping pong textures
        this.textures.reverse();
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uSample++;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uRandom = Math.random();
    };
    ;
    PathTracerRenderer.prototype.displayTexture = function () {
        // size of the actual canvas. The texture we create is drawn to this item
        var size = document.body.clientWidth;
        if (_Globals__WEBPACK_IMPORTED_MODULE_8__["isMobile"] === false) {
            // not sure why, but this basically becomes full width on my phone
            size = 512;
        }
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].canvas.width = size;
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].canvas.height = size;
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].viewport(0, 0, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].canvas.width, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].canvas.height);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].useProgram(this.toScreenProgram);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TEXTURE_2D, this.textures[0]);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].bindBuffer(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].vertexAttribPointer(this.toScreenVertexAttribute, 2, _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].FLOAT, false, 0, 0);
        // display the main screen
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_10__["glUniform"](this.toScreenProgram);
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale = 1.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uXOffset = 0.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uYOffset = 0.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uMode = this.mainView;
        uni.setAll(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"]);
        _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].drawArrays(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TRIANGLE_STRIP, 0, 4);
        // display the smaller views
        _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale = 0.2;
        for (var i = 0; i < this.smallViews.length; i++) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uXOffset = 1.0 - (this.smallViews.length - i - 0.5) * (2 * _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale);
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uYOffset = 1.0 - _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uScale;
            _Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"].uMode = this.smallViews[i];
            uni.setAll(_Uniforms__WEBPACK_IMPORTED_MODULE_7__["Uniforms"]);
            _Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].drawArrays(_Globals__WEBPACK_IMPORTED_MODULE_8__["gl"].TRIANGLE_STRIP, 0, 4);
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
/* harmony import */ var _TriangleSphere__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TriangleSphere */ "./src/TriangleSphere.ts");
/* harmony import */ var _TriangleCube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TriangleCube */ "./src/TriangleCube.ts");
/* harmony import */ var _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThresholdCtrl */ "./src/ThresholdCtrl.ts");
/* harmony import */ var _PointerEventHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PointerEventHandler */ "./src/PointerEventHandler.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! worker-loader?name=LoaderWorker.worker.js!./LoaderWorker */ "./node_modules/worker-loader/dist/cjs.js?name=LoaderWorker.worker.js!./src/LoaderWorker.ts");
/* harmony import */ var worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DropDownMenu */ "./src/DropDownMenu.ts");
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












// specify loader and options here. This value must match the
// contents of worker.d.ts


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
        this.pointerMode = PointerMode.View;
        this.dirty = true;
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
        div.style.width = _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].canvas.width + 'px';
        var ctrlsContainer = document.createElement('div');
        ctrlsContainer.className = 'container';
        ctrlsContainer.id = 'CtrlsContainer';
        div.appendChild(ctrlsContainer);
        this.createCtrlsElements(ctrlsContainer);
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
        _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"].gl = context;
        this.renderer = new _PlanesRenderer__WEBPACK_IMPORTED_MODULE_3__["PlanesRenderer"]();
        this.renderer.whiteColor = WHITE_COLOR;
        this.renderer.blackColor = BLACK_COLOR;
        this.handler = new _PointerEventHandler__WEBPACK_IMPORTED_MODULE_10__["PointerEventHandler"](canvas);
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
        var subMenu;
        var menu = new _DropDownMenu__WEBPACK_IMPORTED_MODULE_13__["DropDownMenu"](parent, 'Models', 'ModelDropDown');
        menu.addItem('Female Pose', function () { return _this.loadModel('Pose1.blob'); });
        menu.addItem('Female Head', function () { return _this.loadModel('FemaleHead.blob'); });
        menu.addItem('Skull 1', function () { return _this.loadModel('Skull1.blob'); });
        menu.addItem('Skull 2', function () { return _this.loadModel('Skull2.blob'); });
        menu.addItem('Skull 3', function () { return _this.loadModel('Skull3.blob'); });
        menu.addItem('Pelvis', function () { return _this.loadModel('Pelvis.blob'); });
        menu.addItem('Head Ecorche', function () { return _this.loadModel('HeadEcorche.blob'); });
        menu.addItem('Arnold', function () { return _this.loadModel('Arnold.blob'); });
        menu.addItem('Teapot', function () { return _this.loadModel('Teapot.blob'); });
        subMenu = menu.addSubMenu('Poses', 'HeadsSubMenu');
        subMenu.addItem('Pose 1', function () { return _this.loadModel('Pose_01.blob'); });
        subMenu.addItem('Pose 2', function () { return _this.loadModel('Pose_02.blob'); });
        subMenu.addItem('Pose 3', function () { return _this.loadModel('Pose_03.blob'); });
        subMenu.addItem('Pose 4', function () { return _this.loadModel('Pose_04.blob'); });
        subMenu.addItem('Pose 5', function () { return _this.loadModel('Pose_05.blob'); });
        subMenu.addItem('Pose 6', function () { return _this.loadModel('Pose_06.blob'); });
        subMenu.addItem('Pose 7', function () { return _this.loadModel('Pose_07.blob'); });
        subMenu.addItem('Pose 8', function () { return _this.loadModel('Pose_08.blob'); });
        subMenu.addItem('Pose 9', function () { return _this.loadModel('Pose_09.blob'); });
        subMenu.addItem('Pose 10', function () { return _this.loadModel('Pose_010.blob'); });
        subMenu.addItem('Pose 11', function () { return _this.loadModel('Pose_011.blob'); });
        subMenu.addItem('Pose 12', function () { return _this.loadModel('Pose_012.blob'); });
        subMenu.addItem('Pose 13', function () { return _this.loadModel('Pose_013.blob'); });
        subMenu.addItem('Pose 14', function () { return _this.loadModel('Pose_014.blob'); });
        subMenu.addItem('Pose 15', function () { return _this.loadModel('Pose_015.blob'); });
        subMenu.addItem('Pose 16', function () { return _this.loadModel('Pose_016.blob'); });
        subMenu = menu.addSubMenu('Heads', 'HeadsSubMenu');
        subMenu.addItem('Head 1', function () { return _this.loadModel('Head1.blob'); });
        subMenu.addItem('Head 2', function () { return _this.loadModel('Head2.blob'); });
        subMenu.addItem('Head 3', function () { return _this.loadModel('Head3.blob'); });
        subMenu.addItem('Head 4', function () { return _this.loadModel('Head4.blob'); });
        subMenu.addItem('Head 5', function () { return _this.loadModel('Head5.blob'); });
        subMenu.addItem('Head 6', function () { return _this.loadModel('Head6.blob'); });
        subMenu.addItem('Head 7', function () { return _this.loadModel('Head7.blob'); });
        subMenu.addItem('Head 8', function () { return _this.loadModel('Head8.blob'); });
        subMenu.addItem('Head 9', function () { return _this.loadModel('Head9.blob'); });
        subMenu.addItem('Head 10', function () { return _this.loadModel('Head10.blob'); });
    };
    PlanesApp.prototype.createCtrlsElements = function (parent) {
        var _this = this;
        this.thresholdCtrl = new _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_9__["ThresholdCtrl"](parent, this, function (value) {
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
        this.loadModel(this.query);
    };
    PlanesApp.prototype.loadModel = function (query) {
        var _this = this;
        // if nothing was specified, load an interesting model
        if (!query) {
            query = 'Pose_02.blob';
        }
        if (query && query.toLowerCase() === 'trianglesphere') {
            var radius = 0.75;
            var center = new _glVec__WEBPACK_IMPORTED_MODULE_5__["glVec3"]([0, 0, 0]);
            var tObj = new _TriangleSphere__WEBPACK_IMPORTED_MODULE_7__["TriangleSphere"](100, radius, center);
            tObj.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_6__["NormalType"].Smooth);
            this.renderer.setModel(tObj);
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase() === 'trianglecube') {
            var size = 0.8;
            var center = new _glVec__WEBPACK_IMPORTED_MODULE_5__["glVec3"]([0, 0, 0]);
            var tObj = new _TriangleCube__WEBPACK_IMPORTED_MODULE_8__["TriangleCube"](size, center);
            this.renderer.setModel(tObj);
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase().endsWith('.obj')) {
            this.loadModelFile(query).then(function (tObj) {
                _this.renderer.setModel(tObj);
                _this.orient(tObj, query);
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
        else if (query && query.toLowerCase().endsWith('.blob')) {
            this.loadModelFile(query).then(function (tObj) {
                _this.renderer.setModel(tObj);
                _this.orient(tObj, query);
                _this.dirty = true;
                requestAnimationFrame(function () { return _this.tick(); });
            });
        }
        else {
            // TODO multi line error messages not supported
            this.overlay.innerText = 'Unknown Model:' + query;
        }
    };
    PlanesApp.prototype.loadModelFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // if a previous worker exists, close it
            if (_this.worker) {
                _this.worker.terminate();
                _this.worker = undefined;
            }
            _this.worker = new worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_12___default.a();
            var tStart = Date.now();
            _this.worker.onmessage = function (_a) {
                var data = _a.data;
                if (typeof data === 'string') {
                    // avoid flashing messages for things that happen very quickly.
                    if (Date.now() - tStart > 500) {
                        _this.overlay.innerText = data;
                    }
                }
                else {
                    var tObj = _TriangleObj__WEBPACK_IMPORTED_MODULE_6__["TriangleObj"].fromData(data);
                    _this.overlay.innerText = '';
                    _this.worker.terminate();
                    _this.worker = undefined;
                    resolve(tObj);
                }
            };
            _this.worker.postMessage(file);
        });
    };
    PlanesApp.prototype.orient = function (tObj, query) {
        // orient each file so that it is facing forward
        var file = query.toLowerCase();
        file = file.split('.')[0];
        switch (file) {
            case 'skull1':
                this.renderer.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(90));
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'pelvis':
                this.renderer.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(11));
                this.renderer.rotZ(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-87));
                break;
            case 'wolf':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-140));
                this.renderer.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(5));
                break;
            case 'sheephead':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-160));
                break;
            case 'pose1':
                break;
            case 'teapot':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(90));
                break;
            default:
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
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
            this.renderer.rotX(delta.y * 0.01);
            this.renderer.rotY(delta.x * 0.01);
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
        var size = _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].canvas.width;
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
        this.renderer.rotZ(delta);
        this.dirty = true;
    };
    PlanesApp.prototype.onTranslate = function (delta) {
        var factor = 1;
        if (_Globals__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
            factor = 2;
        }
        this.renderer.translateView(new _glVec__WEBPACK_IMPORTED_MODULE_5__["glVec2"]([
            factor * 2 * delta.x / _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].canvas.width,
            factor * 2 * delta.y / _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].canvas.height
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
        Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(tObj.toBlob(), name);
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
    function PlanesRenderer() {
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.lightView = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.projection = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.uColor = new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1, 1, 1]);
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
        this.computeColors();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].enable(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_TEST);
        this.program = _glCompiler__WEBPACK_IMPORTED_MODULE_7__["glCompiler"].compile(_shaders_PlanesVertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_PlanesFragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var tBall = new _TriangleSphere__WEBPACK_IMPORTED_MODULE_5__["TriangleSphere"](100, BALL_RADIUS, new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]));
        tBall.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_8__["NormalType"].Smooth);
        this.ball = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tBall, this.program);
        var tArrow = new _TriangleArrow__WEBPACK_IMPORTED_MODULE_10__["TriangleArrow"]();
        this.arrow = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tArrow, this.program);
        this.projection = _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"].makeOrtho(-1, 1, -1, 1, -100, 100);
    }
    //
    // The functions below change the model
    //
    PlanesRenderer.prototype.rotX = function (angle) {
        this.obj.rotX(angle);
    };
    PlanesRenderer.prototype.rotY = function (angle) {
        this.obj.rotY(angle);
    };
    PlanesRenderer.prototype.rotZ = function (angle) {
        this.obj.rotZ(angle);
    };
    PlanesRenderer.prototype.scale = function (scale) {
        this.obj.scale(scale);
    };
    PlanesRenderer.prototype.translate = function (offset) {
        this.obj.translate(offset);
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
        this.obj = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tObj, this.program);
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
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].viewport(0, 0, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.width, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.height);
        this.renderToShadowMap();
        this.renderToScreen();
    };
    PlanesRenderer.prototype.setStdUniforms = function () {
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_6__["glUniform"](this.program);
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
        if (!this.textureFrameBuffer) {
            this.textureFrameBuffer = new _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["glTextureFrameBuffer"](_ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["FrameBufferStyle"].Depth);
        }
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].viewport(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"]);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, this.textureFrameBuffer.colorTexture);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, this.textureFrameBuffer.frameBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].framebufferTexture2D(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_ATTACHMENT0, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, this.textureFrameBuffer.colorTexture, 0);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].useProgram(this.program);
        var style = getComputedStyle(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas);
        var color = _htmlColor__WEBPACK_IMPORTED_MODULE_15__["htmlColor"].fromCss(style.backgroundColor).toGlColor();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clearColor(color.r, color.g, color.b, 1);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT | _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_BUFFER_BIT);
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
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].readPixels(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_14__["textureSize"], _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].RGBA, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].UNSIGNED_BYTE, pixels);
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
        if (!this.shadowFrameBuffer) {
            this.shadowFrameBuffer = new _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["glTextureFrameBuffer"](_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.width, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.height, _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_13__["FrameBufferStyle"].Depth);
        }
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, this.shadowFrameBuffer.frameBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].useProgram(this.program);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT | _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_BUFFER_BIT);
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
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, null);
    };
    PlanesRenderer.prototype.renderToScreen = function () {
        // display the depth buffer for testing purposes
        if (this.showShadowMap) {
            var tr = new _TextureRenderer__WEBPACK_IMPORTED_MODULE_12__["TextureRenderer"]();
            tr.render(this.shadowFrameBuffer.depthTexture);
        }
        else {
            _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].useProgram(this.program);
            _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, this.shadowFrameBuffer.depthTexture);
            _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT | _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_BUFFER_BIT);
            // reset the view matrix
            this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
            this.view.scale(this.zoomFactor);
            this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([this.translation.x, this.translation.y, 0]));
            // draw the main object
            var uni = this.setStdUniforms();
            this.obj.draw();
            // draw the object in the upper right at a reduced size and opposite banding
            _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT);
            this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
            this.view.scale(this.miniSize);
            this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1 - this.miniSize, 1 - this.miniSize, 0]));
            uni.set('view', this.view.transpose());
            uni.set('uUseThresholds', this.uUseThresholds ? 0 : 1, true);
            this.obj.draw();
            // draw the ball
            this.drawBall();
            _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, null);
        }
    };
    PlanesRenderer.prototype.drawBall = function () {
        var uni = this.setStdUniforms();
        // stop using the shadowmap
        uni.seti('uUseShadows', 0);
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.view.scale(this.miniSize);
        this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-(1 - this.miniSize), 1 - this.miniSize, 0]));
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
        if (x > (1 - this.miniSize) && y > (1 - this.miniSize)) {
            this.uUseThresholds = !this.uUseThresholds;
            this.render();
            return true;
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
                var touch = _this.getTouch(event, _this.primaryTouchId);
                var pos = _this.getPos(touch);
                _this.ourOnDrag(pos);
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _glCompiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glCompiler */ "./src/glCompiler.ts");




/**
 * Class that does the work of building the Path Traced texture
 */
var TextureRenderer = /** @class */ (function () {
    function TextureRenderer() {
        this.vertices = [
            -1, -1,
            -1, +1,
            +1, -1,
            +1, +1
        ];
        // create vertex buffer - the block we'll draw our rendered texture on
        this.vertexBuffer = _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].createBuffer();
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].bindBuffer(_Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].bufferData(_Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].ARRAY_BUFFER, new Float32Array(this.vertices), _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].STATIC_DRAW);
        // create shader
        this.program = _glCompiler__WEBPACK_IMPORTED_MODULE_3__["glCompiler"].compile(_shaders_TextureRendererVertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"], _shaders_TextureRendererFragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.vertexAttribute = _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].getAttribLocation(this.program, 'vertex');
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].enableVertexAttribArray(this.vertexAttribute);
    }
    TextureRenderer.prototype.render = function (texture) {
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
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].viewport(0, 0, size, size);
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].useProgram(this.program);
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].TEXTURE_2D, texture);
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].bindBuffer(_Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].vertexAttribPointer(this.vertexAttribute, 2, _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].FLOAT, false, 0, 0);
        // display the main screen
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].drawArrays(_Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].TRIANGLE_STRIP, 0, 4);
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
                        data.name = bFile.info.name;
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
    function TriangleObjFile(name, src, statusFunction) {
        var _this = _super.call(this, name) || this;
        // record the status function. If one is not supplied, create one that does nothing
        if (statusFunction) {
            _this.updateStatus = statusFunction;
        }
        else {
            _this.updateStatus = function (status) { };
        }
        _this.parse(src);
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
    TriangleObjFile.prototype.parse = function (src) {
        this.updateStatus('Processing');
        var t = Date.now();
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        var lines = src.split('\n');
        p.log('split');
        for (var i = 0; i < lines.length; i++) {
            // report progress every 50 ms
            if (Date.now() - t > 50) {
                this.updateStatus('Processing: ' + (100 * i / lines.length).toFixed() + '%');
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
        this.updateStatus('Processing: 100%');
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");

/**
 * Wrapper for a WebGl Buffer and Attribute
 */
var glBuffer = /** @class */ (function () {
    function glBuffer(program, attributeName) {
        this.buffer = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createBuffer();
        this.attributeLocation = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].getAttribLocation(program, attributeName);
    }
    glBuffer.prototype.delete = function () {
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteBuffer(this.buffer);
        this.buffer = undefined;
        this.attributeLocation = undefined;
    };
    glBuffer.prototype.upload = function (vertices) {
        this.bind();
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bufferData(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, new Float32Array(vertices), _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].STATIC_DRAW);
    };
    glBuffer.prototype.bind = function () {
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, this.buffer);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].enableVertexAttribArray(this.attributeLocation);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].vertexAttribPointer(this.attributeLocation, 3, // size
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT, // type
        false, // normalized
        0, // stride
        0 // offset
        );
    };
    return glBuffer;
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");

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
     * @param source The source code
     * @param type The shader type
     * @throws if the compilation fails
     */
    glCompiler.compileShader = function (source, type) {
        var shader = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createShader(type);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].shaderSource(shader, source);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].compileShader(shader);
        if (!_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].getShaderParameter(shader, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].COMPILE_STATUS)) {
            console.log(source);
            throw 'compile error: ' + _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].getShaderInfoLog(shader);
        }
        return shader;
    };
    /**
     * Compiles and links vertex and fragment shaders into a program
     *
     * @param vertexSource Vertex shader source
     * @param fragmentSource Fragment shader source
     * @returns the program id
     * @throws if the compilation fails
     */
    glCompiler.compile = function (vertexSource, fragmentSource) {
        var program = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createProgram();
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].attachShader(program, glCompiler.compileShader(vertexSource, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].VERTEX_SHADER));
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].attachShader(program, glCompiler.compileShader(fragmentSource, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAGMENT_SHADER));
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].linkProgram(program);
        if (!_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].getProgramParameter(program, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].LINK_STATUS)) {
            throw 'link error: ' + _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].getProgramInfoLog(program);
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _glUniform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glUniform */ "./src/glUniform.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");





var glObject = /** @class */ (function () {
    function glObject(tObj, program) {
        this.model = new _glMat__WEBPACK_IMPORTED_MODULE_1__["glMat4"]();
        this.tObj = tObj;
        this.program = program;
        // create buffers (and associated attributes)
        this.vertexBuffer = new _glBuffer__WEBPACK_IMPORTED_MODULE_0__["glBuffer"](program, 'aVertex');
        this.normalBuffer = new _glBuffer__WEBPACK_IMPORTED_MODULE_0__["glBuffer"](program, 'aNormal');
        this.uploadTriangles();
    }
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
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_4__["Profiler"]();
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
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_3__["glUniform"](this.program);
        uni.set('model', this.model.transpose());
        this.vertexBuffer.bind();
        this.normalBuffer.bind();
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].drawArrays(_Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].TRIANGLES, 0, this.tObj.triangles.length * 3);
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");

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
     * @param width The width (in pixels) of the rendering (must be power of 2)
     * @param height The height (in pixels) of the rendering (must be power of 2)
     */
    function glTextureFrameBuffer(width, height, style) {
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
    glTextureFrameBuffer.prototype.create = function (width, height) {
        // Step 1: Create a frame buffer object
        this.frameBuffer = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createFramebuffer();
        // Step 2: Create and initialize a texture buffer to hold the colors.
        this.colorTexture = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createTexture();
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.colorTexture);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texImage2D(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, 0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA, width, height, 0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_BYTE, null);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MIN_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MAG_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_S, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_T, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE);
        // Step 4: Attach the specific buffers to the frame buffer.
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, this.frameBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].framebufferTexture2D(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_ATTACHMENT0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.colorTexture, 0);
        // Step 5: Verify that the frame buffer is valid.
        var status = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].checkFramebufferStatus(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER);
        if (status !== _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER_COMPLETE) {
            var msg = "The created frame buffer is invalid: " + status.toString();
            alert(msg);
            console.log(msg);
        }
        // Unbind these new objects, which makes the default frame buffer the
        // target for rendering.
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, null);
    };
    glTextureFrameBuffer.prototype.createDepth = function (width, height) {
        var depth_texture_extension = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].getExtension('WEBGL_depth_texture');
        if (!depth_texture_extension) {
            alert('This WebGL program requires the use of the WEBGL_depth_texture extension.');
            return;
        }
        // Step 1: Create a frame buffer object
        this.frameBuffer = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createFramebuffer();
        // Step 2: Create and initialize a texture buffer to hold the colors.
        this.colorTexture = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createTexture();
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.colorTexture);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texImage2D(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, 0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA, width, height, 0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_BYTE, null);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MIN_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MAG_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_S, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_T, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE);
        // Step 3: Create and initialize a texture buffer to hold the depth values.
        // Note: the WEBGL_depth_texture extension is required for this to work
        //       and for the gl.DEPTH_COMPONENT texture format to be supported.
        this.depthTexture = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].createTexture();
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.depthTexture);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texImage2D(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, 0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_COMPONENT, width, height, 0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_COMPONENT, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_INT, null);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MIN_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MAG_FILTER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_S, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_T, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE);
        // Step 4: Attach the specific buffers to the frame buffer.
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, this.frameBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].framebufferTexture2D(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_ATTACHMENT0, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.colorTexture, 0);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].framebufferTexture2D(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_ATTACHMENT, _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.depthTexture, 0);
        // Step 5: Verify that the frame buffer is valid.
        var status = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].checkFramebufferStatus(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER);
        if (status !== _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER_COMPLETE) {
            var msg = "The created frame buffer is invalid: " + status.toString();
            alert(msg);
            console.log(msg);
        }
        // Unbind these new objects, which makes the default frame buffer the
        // target for rendering.
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, null);
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");




/**
 * Utility class for setting uniform values in a shader
 */
var glUniform = /** @class */ (function () {
    /**
     * Creates an object for setting values and calls gl.useProgram
     *
     * @param program The program associated with the uniform values
     */
    function glUniform(program) {
        this.program = program;
        _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].useProgram(program);
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
        var loc = _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].getUniformLocation(this.program, name);
        if (loc) {
            if (value instanceof _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]) {
                _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform3fv(loc, new Float32Array(value.values));
            }
            else if (value instanceof _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]) {
                _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform3fv(loc, new Float32Array([value.r, value.g, value.b]));
            }
            else if (value instanceof _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"]) {
                _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].uniformMatrix4fv(loc, false, new Float32Array(value.values));
            }
            else if (name === "uMode") {
                _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform1i(loc, value);
            }
            else {
                if (int) {
                    _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform1i(loc, value);
                }
                else {
                    _Globals__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform1f(loc, value);
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");

var glUniformBlock = /** @class */ (function () {
    function glUniformBlock(program, blockName, blockBinding) {
        var gl2 = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"];
        this.blockLocation = gl2.getUniformBlockIndex(program, blockName);
        gl2.uniformBlockBinding(program, this.blockLocation, blockBinding);
        this.blockBuffer = gl2.createBuffer();
        gl2.bindBufferBase(gl2.UNIFORM_BUFFER, blockBinding, this.blockBuffer);
    }
    glUniformBlock.prototype.upload = function (data) {
        var gl2 = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9Ecm9wRG93bk1lbnUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvUGxhbmVzQXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1NsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UYWJzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQmxvYkZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jsb2JTaGltLnRzIiwid2VicGFjazovLy8uL3NyYy9Db2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3JBbmFseXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3JSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJvcERvd25NZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9JbmRleGVkVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhdGhUcmFjZXJBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhdGhUcmFjZXJSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmVzQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXNSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9pbnRlckV2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZmlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BoZXJpY2FsQ29vcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RleHR1cmVSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVGhyZXNob2xkQ3RybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVBcnJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVDdWJlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iai50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZVNwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZvbHVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsTWF0LnRzIiwid2VicGFjazovLy8uL3NyYy9nbE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xUZXh0dXJlRnJhbWVCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVW5pZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xVbmlmb3JtQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVmVjLnRzIiwid2VicGFjazovLy8uL3NyYy9odG1sQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvcldpdGhBbHBoYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9TY3JlZW5WZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGxhbmVzRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QbGFuZXNWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9UZXh0dXJlUmVuZGVyZXJGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1RleHR1cmVSZW5kZXJlclZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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LE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU0sWUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLFlBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLFlBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLFlBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFNLFlBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFD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QVcsQ0FBQyxDQUFDO1FBUTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLHNCQUFPLEdBQXJCLFVBQXNCLEdBQWE7UUFFaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWYsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksYUFBYSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLGNBQWMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFN0QsT0FBTyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksOEJBQUssR0FBWjtRQUVHLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxD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QUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLE1BQWM7UUFFekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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LElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0NBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLGtEQUFRLEVBQUUsQ0FBQztRQUV2QixJQUFJLEtBQUssR0FBRyxJQUFJLDZDQUFNLENBQUM7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRWxELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENB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QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFB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SUFBSSxDQUFDLENBQUM7Z0JBQy9CLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5SCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoSTtxQkFDSTtvQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENB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LEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0YsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEMsNEJBQTRCO1FBQzVCLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRTlELE9BQU8sTUFBTSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMEJBQVMsR0FBaEI7UUFDRyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBRTFCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDL0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMs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QVcseUJBQXlCLDJCQUEyQixXQUFXLDZDQUE2Qyw4QkFBOEIsV0FBVyxRQUFRLHdDQUF3QyxLQUFLLEM7Ozs7Ozs7Ozs7OztBQ0FscEs7QUFBZSx1RkFBd0IsMkJBQTJCLDJCQUEyQixzQkFBc0IsMkJBQTJCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLCtCQUErQix3QkFBd0Isb0VBQW9FLGtEQUFrRCxrREFBa0Qsb0VBQW9FLEtBQUssQzs7Ozs7Ozs7Ozs7O0FDQXhnQjtBQUFlLDBGQUEyQiwwQkFBMEIsK0JBQStCLHFCQUFxQiw4Q0FBOEMsRUFBRSxLOzs7Ozs7Ozs7Ozs7QUNBeEs7QUFBZSwwRkFBMkIsMEJBQTBCLHdCQUF3Qix3Q0FBd0MsbURBQW1ELEtBQUssSzs7Ozs7Ozs7Ozs7QUNBNUwsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4SEFBMEQ7O0FBRTVGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cXHJcXG4uRHJvcERvd24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcclxcbi5Ecm9wRG93bkJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xcclxcbi5Ecm9wRG93bkJ1dHRvbjpob3ZlcixcXHJcXG4uRHJvcERvd25CdXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXFxyXFxuLkRyb3BEb3duTWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcclxcbi5Ecm9wRG93bk1lbnVJdGVtIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXHJcXG4uRHJvcERvd25NZW51SXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xcclxcbi5Ecm9wRG93blNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuRHJvcERvd25NZW51IHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjTWFpbkNhbnZhcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxufVxcclxcblxcclxcbiNPdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI0N0cmxzQ29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjTGlnaHRMaWdodFJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuLlBsYW5lc0FwcCAjTGlnaHRMaWdodFNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uUGxhbmVzQXBwICNNaWRMaWdodFJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuLlBsYW5lc0FwcCAjTWlkTGlnaHRTbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjRGFya0xpZ2h0UmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JheSwgZGFya2dyYXkpO1xcclxcbn1cXHJcXG4uUGxhbmVzQXBwICNEYXJrTGlnaHRTbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyYXksIGRhcmtncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgd2lkdGg6IDE4JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgICB3aWR0aDogMjglO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgICB3aWR0aDogMjIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlNsaWRlckxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJIZWFkZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JlZW4sIGRhcmtncmVlbik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5TbGlkZXJMYWJlbCB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDM0cHg7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclZhbHVlU3BhbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFN0eWxlIHRoZSB0YWIgKi9cXHJcXG4uVGFicyB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXFxyXFxuLlRhYnMgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xcclxcbi5UYWJzIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXFxyXFxuLlRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xcclxcbi5UYWJDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlRhYnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRHJvcERvd25NZW51LmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NsaWRlci5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJzLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BsYW5lc0FwcC5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJhd1RpbWUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtNDk1cHg7XFxyXFxuICBsZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogOHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2dyZXNzU3BhbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDNweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDIwNSwgNTAsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kZUJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgKiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkcmF3VGltZSB7XFxyXFxuICAgIHRvcDogLTk2MHB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1vZGVCdXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYixjLGQpe3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixiKSxlLnJlc3BvbnNlVHlwZT1cImJsb2JcIixlLm9ubG9hZD1mdW5jdGlvbigpe2EoZS5yZXNwb25zZSxjLGQpfSxlLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGUuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGEsYixkLGUpe2lmKGU9ZXx8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGUmJihlLmRvY3VtZW50LnRpdGxlPWUuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYSlyZXR1cm4gYyhhLGIsZCk7dmFyIGc9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWEudHlwZSxoPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGk9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChpfHxnJiZoKSYmXCJvYmplY3RcIj09dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBqPW5ldyBGaWxlUmVhZGVyO2oub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ai5yZXN1bHQ7YT1pP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGU/ZS5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxlPW51bGx9LGoucmVhZEFzRGF0YVVSTChhKX1lbHNle3ZhciBrPWYuVVJMfHxmLndlYmtpdFVSTCxsPWsuY3JlYXRlT2JqZWN0VVJMKGEpO2U/ZS5sb2NhdGlvbj1sOmxvY2F0aW9uLmhyZWY9bCxlPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2sucmV2b2tlT2JqZWN0VVJMKGwpfSw0RTQpfX0pO2Yuc2F2ZUFzPWEuc2F2ZUFzPWEsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWEpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIkxvYWRlcldvcmtlci53b3JrZXIuanNcIik7XG59OyIsImltcG9ydCAnLi9CbG9iU2hpbSc7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgZm9yIHNsaWNpbmcgdXAgQmxvYnNcclxuICovXHJcbmNsYXNzIEJsb2JTbGljZXIge1xyXG5cclxuICAgLy8gVGhlIHN0YXJ0IGJ5dGUgdmFsdWUgZm9yIHRoZSBuZXh0IHNsaWNlXHJcbiAgIHByaXZhdGUgc3RhcnQgPSAwO1xyXG5cclxuICAgLy8gVGhlIEJsb2Igd2UncmUgc2xpY2luZyBcclxuICAgcHJpdmF0ZSBibG9iOiBCbG9iO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBibG9iIFRoZSBCbG9iIHRvIGJlIHNsaWNlZFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGJsb2I6IEJsb2IpIHtcclxuICAgICAgdGhpcy5ibG9iID0gYmxvYjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG5leHQgc2xpY2UuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc2xpY2VkIEJsb2IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbmV4dChsZW46IG51bWJlcik6IEJsb2Ige1xyXG4gICAgICBsZXQgYiA9IHRoaXMuYmxvYi5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0ICsgbGVuKTtcclxuICAgICAgdGhpcy5zdGFydCArPSBsZW47XHJcbiAgICAgIHJldHVybiBiO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGFuIEFycmF5QnVmZmVyLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQW4gQXJyYXlCdWZmZXIgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZXh0QXJyYXlCdWZmZXIobGVuOiBudW1iZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5leHQobGVuKS5hcnJheUJ1ZmZlcigpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGFuIEludDMyQXJyYXlcclxuICAgICpcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQW4gSW50MzJBcnJheSBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFzeW5jIG5leHRJbnQzMkFycmF5KGxlbjogbnVtYmVyKTogUHJvbWlzZTxJbnQzMkFycmF5PiB7XHJcbiAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShhd2FpdCB0aGlzLm5leHRBcnJheUJ1ZmZlcihsZW4pKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNsaWNlcyB0aGUgQmxvYiBhbmQgcmV0dXJucyBpdCBhcyBhIHN0cmluZ1xyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFzeW5jIG5leHRTdHJpbmcobGVuOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXh0KGxlbikudGV4dCgpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGNyZWF0aW9uIGFuZCBleHRyYWN0aW9uIG9mIGEgc2VsZiBkZXNjcmliaW5nIEJsb2IuIERhdGFcclxuICogaXMgc3RvcmVkIGFzOlxyXG4gKiBcclxuICogW251bUVudHJpZXNdIC0gVGhlIG51bWJlciBlbnRyaWVzIGluIHRoZSBmaWxlLiA0IGJ5dGUgSW50MzJcclxuICogW3NpemVzXSAtIFNpemVzIG9mIGFsbCB0aGUgZW50cmllcywgaW5jbHVkaW5nIHRoZSBpbmZvIG9iamVjdFxyXG4gKiBbaW5mb10gLSBVc2VyIHN1cHBsaWVkIGRhdGEgYXMgYSBKU09OIHN0cmluZ1xyXG4gKiBbZW50cnkgMV0gLSBGaXJzdCB1c2VyIGVudHJ5XHJcbiAqIFtlbnRyeSAyXSAtIFNlY29uZCB1c2VyIGVudHJ5XHJcbiAqIFsuLi5dXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvYkZpbGUge1xyXG4gICBwdWJsaWMgaW5mbzogYW55O1xyXG4gICBwdWJsaWMgcGFydHM6IEJsb2JbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiBoZWFkZXIgdG8gYmUgc3RvcmVkIHdpdGggdGhlIEJsb2JcclxuICAgICogQHBhcmFtIHBhcnRzIFRoZSBkYXRhIGNvbnRlbnRzIG9mIHRoZSBCbG9iXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbnN0cnVjdG9yKGluZm86IG9iamVjdCwgcGFydHM6IEJsb2JbXSkge1xyXG4gICAgICB0aGlzLmluZm8gPSBpbmZvO1xyXG4gICAgICB0aGlzLnBhcnRzID0gcGFydHM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIHJhdyBCbG9iIG9iamVjdCBpbnRvIGEgQmxvYkZpbGVcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBibG9iIFRoZSBCbG9iIHRvIHByb2Nlc3MuXHJcbiAgICAqIEByZXR1cm4gQSBCbG9iRmlsZSBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBleHRyYWN0KGJsb2I6IEJsb2IpOiBQcm9taXNlPEJsb2JGaWxlPiB7XHJcblxyXG4gICAgICBsZXQgYmxvYlNsaWNlciA9IG5ldyBCbG9iU2xpY2VyKGJsb2IpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgZXh0cmFjdCB0aGUgbnVtYmVyIG9mIGVudHJpZXNcclxuICAgICAgbGV0IG51bUVudHJpZXMgPSAoYXdhaXQgYmxvYlNsaWNlci5uZXh0SW50MzJBcnJheSg0KSlbMF07XHJcblxyXG4gICAgICAvLyB0aGUgdGhlIHNpemVzIGFycmF5XHJcbiAgICAgIGxldCBzaXplcyA9IGF3YWl0IGJsb2JTbGljZXIubmV4dEludDMyQXJyYXkoNCAqIChudW1FbnRyaWVzICsgMSkpO1xyXG5cclxuICAgICAgLy8gdGhlbiB0aGUgaW5mbyBvYmplY3RcclxuICAgICAgbGV0IGpzb25JbmZvID0gYXdhaXQgYmxvYlNsaWNlci5uZXh0U3RyaW5nKHNpemVzWzBdKTtcclxuXHJcbiAgICAgIC8vIHRoZW4gYWxsIHRoZSBzdWIgYmxvYnNcclxuICAgICAgbGV0IHBhcnRzOiBCbG9iW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1FbnRyaWVzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHNpemUgPSBzaXplc1tpICsgMV07XHJcbiAgICAgICAgIHBhcnRzLnB1c2goYmxvYlNsaWNlci5uZXh0KHNpemUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBCbG9iRmlsZShKU09OLnBhcnNlKGpzb25JbmZvKSwgcGFydHMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlIGEgQmxvYkZpbGUgQmxvYlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIGhlYWRlciB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQmxvYlxyXG4gICAgKiBAcGFyYW0gcGFydHMgVGhlIGRhdGEgY29udGVudHMgb2YgdGhlIEJsb2JcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQmxvYihpbmZvOiBvYmplY3QsIHBhcnRzOiBCbG9iUGFydFtdKTogQmxvYiB7XHJcblxyXG4gICAgICBsZXQganNvbkluZm8gPSBKU09OLnN0cmluZ2lmeShpbmZvKTtcclxuXHJcbiAgICAgIC8vIEJ1aWxkIHRoZSBhcnJheSBvZiBzaXplc1xyXG4gICAgICBsZXQgc2l6ZXM6IG51bWJlcltdID0gW2pzb25JbmZvLmxlbmd0aF07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHBhcnQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgaWYgKHBhcnQgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goNCAqIHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChwYXJ0IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goNCAqIHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChwYXJ0IGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2gocGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gJ1Vuc3VwcG9ydGVkIEJsb2IgUGFydCBUeXBlOiAnICsgdHlwZW9mIHBhcnQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXNzZW1ibGUgdGhlIGJsb2IgcGFydHNcclxuICAgICAgbGV0IGFsbFBhcnRzOiBCbG9iUGFydFtdID0gW107XHJcbiAgICAgIGFsbFBhcnRzLnB1c2gobmV3IEludDMyQXJyYXkoW3BhcnRzLmxlbmd0aF0pKTtcclxuICAgICAgYWxsUGFydHMucHVzaChuZXcgSW50MzJBcnJheShzaXplcykpO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKGpzb25JbmZvKTtcclxuICAgICAgYWxsUGFydHMucHVzaCguLi5wYXJ0cyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIGJsb2JcclxuICAgICAgcmV0dXJuIG5ldyBCbG9iKGFsbFBhcnRzKTtcclxuICAgfVxyXG59IiwiLy8gbmVlZGVkIGZvciBTYWZhcmlcclxuaWYgKCFCbG9iLnByb3RvdHlwZS5hcnJheUJ1ZmZlcikge1xyXG4gICBCbG9iLnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcblxyXG4gICAgICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXlCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdGFydCB0aGUgcmVhZFxyXG4gICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vIG5lZWRlZCBmb3IgU2FmYXJpXHJcbmlmICghQmxvYi5wcm90b3R5cGUudGV4dCkge1xyXG5cclxuICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgQmxvYi5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uICgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkZWNvZGUgaW50byBhIHN0cmluZ1xyXG4gICAgICAgICAgICBsZXQgdHh0ID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHR4dCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RhcnQgdGhlIHJlYWRcclxuICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcbiIsIlxyXG4vKipcclxuICogQ2xhc3MgZm9yIHJlcHJlc2VudGluZyBjb2xvciB2YWx1ZXMuIFZhbHVlcyBtYXkgYmUgb24gYSAwLTEgb3IgMC0yNTUgc2NhbGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICBwdWJsaWMgcjogbnVtYmVyO1xyXG4gICBwdWJsaWMgZzogbnVtYmVyO1xyXG4gICBwdWJsaWMgYjogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBSR0IgdmFsdWVzIHRvIHN0b3JlIGluIHRoaXMgb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcbiAgICAgIHRoaXMuciA9IGNvbG9yWzBdO1xyXG4gICAgICB0aGlzLmcgPSBjb2xvclsxXTtcclxuICAgICAgdGhpcy5iID0gY29sb3JbMl07XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpdGVtcyByZXR1cm5lZCBmcm9tIGV4YW1pbmluZyB0aGUgY3VycmVudCB2aWV3XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvckRhdGEge1xyXG4gICBtYXhDaHJvbWE6IG51bWJlcixcclxuICAgaGlnaGxpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGF2Z0xpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGxpZ2h0ZXN0TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgZGFya2VzdExpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGF2Z1NoYWRvd0NvbG9yOiBnbENvbG9yLFxyXG4gICBsaWdodGVzdFNoYWRvd0NvbG9yOiBnbENvbG9yLFxyXG4gICBkYXJrZXN0U2hhZG93Q29sb3I6IGdsQ29sb3IsXHJcbiAgIHRlcm1pbmF0b3JDb2xvcjogZ2xDb2xvcixcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgZ3JhYnMgYSBjb3B5IG9mIHRoZSByZW5kZXJlZCB0ZXh0dXJlIGFuZCBleGFtaW5lcyBpdCBmb3JcclxuICogY29sb3IgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yQW5hbHl6ZXIge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBhcnJheSB3aGVyZSB3ZSdsbCBkdW1wIHRoZSB0ZXh0dXJlIHRvLiBDYWNoZSB0aGlzIGFycmF5IGluc3RlYWQgb2ZcclxuICAgICogYWxsb2NhdGluZyBhIG5ldyBvbmUgZm9yIGVhY2ggZnJhbWUuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHBpeGVsczogRmxvYXQzMkFycmF5O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFNpemUgb2YgdGhlIHRleHR1cmVcclxuICAgICovXHJcbiAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBzaXplIFRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBidWZmZXJcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuXHJcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAvLyBhbGxvY2F0ZSB0aGUgYnVmZmVyIHVzZWQgZm9yIGdyYWJzXHJcbiAgICAgIHRoaXMucGl4ZWxzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNpemUgKiB0aGlzLnNpemUgKiA0KTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJ1bnMgdGhlIGFuYWx5c2lzIC0gZ3JhYnMgYSBjb3B5IG9mIHRoZSBmcmFtZSBidWZmZXIgYW5kIHNjYW5zIGl0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGFscGhhTGlnaHQgVGhlIGFscGhhIHZhbHVlIGZvciB0aGluZ3MgaW4gbGlnaHQuIFZhbHVlcyBhYm92ZSB0aGlzIGFyZSBkdWUgdG8gc3BlY3VsYXIgbGlnaHRpbmcuXHJcbiAgICAqIEBwYXJhbSBhbHBoYVNoYWRvdyBUaGUgYWxwaGEgdmFsdWUgZm9yIHRoaW5ncyBpbiBzaGFkb3cuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcnVuKGFscGhhTGlnaHQ6IG51bWJlciwgYWxwaGFTaGFkb3c6IG51bWJlcik6IElDb2xvckRhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGE6IElDb2xvckRhdGEgPSB7XHJcbiAgICAgICAgIG1heENocm9tYTogMCxcclxuICAgICAgICAgYXZnTGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgbGlnaHRlc3RMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBkYXJrZXN0TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEsIDEsIDFdKSxcclxuICAgICAgICAgYXZnU2hhZG93Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGxpZ2h0ZXN0U2hhZG93Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGRhcmtlc3RTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzEsIDEsIDFdKSxcclxuICAgICAgICAgdGVybWluYXRvckNvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBoaWdobGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVE9ETyBoYW5kbGUgY2FzZSB3aGVuIHRoZSB0ZXh0IHR5cGUgaXMgVU5TSUdORURfQllURVxyXG4gICAgICBnbC5yZWFkUGl4ZWxzKDAsIDAsIHRoaXMuc2l6ZSwgdGhpcy5zaXplLCBnbC5SR0JBLCBnbC5GTE9BVCwgdGhpcy5waXhlbHMpO1xyXG5cclxuICAgICAgbGV0IG51bUxpZ2h0UGl4ZWxzID0gMDtcclxuICAgICAgbGV0IG51bVNoYWRvd1BpeGVscyA9IDA7XHJcbiAgICAgIGxldCBudW1UZXJtaW5hdG9yUGl4ZWxzID0gMDtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuc2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5zaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAocm93ICogdGhpcy5zaXplICsgY29sKSAqIDQ7XHJcbiAgICAgICAgICAgIGxldCByID0gdGhpcy5waXhlbHNbaW5kZXggKyAwXTtcclxuICAgICAgICAgICAgbGV0IGcgPSB0aGlzLnBpeGVsc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMl07XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5waXhlbHNbaW5kZXggKyAzXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSB2YWx1ZXMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIGJhbGxcclxuICAgICAgICAgICAgaWYgKGEgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhdmcgPSAociArIGcgKyBiKSAvIDM7XHJcbiAgICAgICAgICAgIGxldCBjaHJvbWEgPSAoTWF0aC5hYnMociAtIGF2ZykgKyBNYXRoLmFicyhnIC0gYXZnKSArIE1hdGguYWJzKGIgLSBhdmcpKSAvICg0IC8gMyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hyb21hID4gZGF0YS5tYXhDaHJvbWEpIHtcclxuICAgICAgICAgICAgICAgZGF0YS5tYXhDaHJvbWEgPSBjaHJvbWE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IG5ldyBnbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgICAgICAgIGlmIChhID09IGFscGhhTGlnaHQpIHtcclxuICAgICAgICAgICAgICAgbnVtTGlnaHRQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgaWYgKGRhdGEubGlnaHRlc3RMaWdodENvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5saWdodGVzdExpZ2h0Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9IGdsQ29sb3IuZGFya2VzdChkYXRhLmRhcmtlc3RMaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5yICs9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYSA9PSBhbHBoYVNoYWRvdykge1xyXG4gICAgICAgICAgICAgICBudW1TaGFkb3dQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgaWYgKGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID0gZ2xDb2xvci5saWdodGVzdChkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPSBnbENvbG9yLmRhcmtlc3QoZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5yICs9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhID4gYWxwaGFMaWdodCkge1xyXG4gICAgICAgICAgICAgICBkYXRhLmhpZ2hsaWdodENvbG9yID0gZ2xDb2xvci5saWdodGVzdChkYXRhLmhpZ2hsaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXJtaW5hdG9yID0gKGFscGhhTGlnaHQgKyBhbHBoYVNoYWRvdykgLyAyLjA7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhIC0gdGVybWluYXRvcikgPCAwLjEpIHtcclxuICAgICAgICAgICAgICAgbnVtVGVybWluYXRvclBpeGVscysrO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5yICs9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG51bUxpZ2h0UGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuciAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmcgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5iIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1TaGFkb3dQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuciAvPSBudW1TaGFkb3dQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuZyAvPSBudW1TaGFkb3dQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuYiAvPSBudW1TaGFkb3dQaXhlbHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bVRlcm1pbmF0b3JQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLnIgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuZyAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5iIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcnBvbGF0ZXMgYW5kIGFycmF5IG9mIGNvbG9yc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yUmFuZ2Uge1xyXG4gICAvKipcclxuICAgICogVGhlIGNvbG9yc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb2xvcnM6IGh0bWxDb2xvcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3JzIFRoZSBjb2xvcnMgdG8gaW50ZXJwb2xhdGVcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcnM6IGh0bWxDb2xvcltdKSB7XHJcbiAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhbiBpbnRlcnBvbGF0ZWQgY29sb3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsdWUgQSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KHZhbHVlOiBudW1iZXIpOiBodG1sQ29sb3Ige1xyXG5cclxuICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsdWUgPj0gMSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpICogdmFsdWUpO1xyXG4gICAgICAgICBsZXQgcGFydGlhbCA9ICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlIC0gaW5kZXg7XHJcblxyXG4gICAgICAgICBsZXQgciA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLnIgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uciAtIHRoaXMuY29sb3JzW2luZGV4XS5yKSk7XHJcbiAgICAgICAgIGxldCBnID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uZyArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5nIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmcpKTtcclxuICAgICAgICAgbGV0IGIgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5iICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLmIgLSB0aGlzLmNvbG9yc1tpbmRleF0uYikpO1xyXG5cclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJleHBvcnQgdHlwZSBNZW51SXRlbUZ1bmN0aW9uID0gKCkgPT4gdm9pZDtcclxuXHJcbmNsYXNzIE1lbnUge1xyXG4gICBwdWJsaWMgbWVudURpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgIHB1YmxpYyBpZ25vcmVFdmVudCA9IGZhbHNlO1xyXG5cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgaWYgKHRoaXMubWVudURpdi5jbGFzc0xpc3QuY29udGFpbnMoJ0Ryb3BEb3duU2hvdycpID09PSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnRHJvcERvd25TaG93Jyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdEcm9wRG93blNob3cnKSkge1xyXG4gICAgICAgICB0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnRHJvcERvd25TaG93Jyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIGFkZENsb3NlSGFuZGxlcigpIHtcclxuICAgICAgLy8gVE9ETyBvbiB0aGUgcGhvbmUgdGhpcyBldmVudCBkb2VzIG5vdCBvY2N1ciB3aGVuIGNsaWNraW5nIG92ZXIgdGhlIGNhbnZhc1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGlmICh0aGlzLmlnbm9yZUV2ZW50ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLmlnbm9yZUV2ZW50ID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wRG93bk1lbnUgZXh0ZW5kcyBNZW51IHtcclxuICAgcHJpdmF0ZSBkcm9wRG93bkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5kcm9wRG93bkRpdi5pZCA9IGlkICsgJ0Ryb3BEb3duJztcclxuICAgICAgdGhpcy5kcm9wRG93bkRpdi5jbGFzc05hbWUgPSAnRHJvcERvd24nO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wRG93bkRpdik7XHJcblxyXG4gICAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBtZW51QnV0dG9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIG1lbnVCdXR0b24uY2xhc3NOYW1lID0gJ0Ryb3BEb3duQnV0dG9uJztcclxuICAgICAgbWVudUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmlnbm9yZUV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kcm9wRG93bkRpdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuXHJcbiAgICAgIHN1cGVyLmFkZENsb3NlSGFuZGxlcigpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMubWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLm1lbnVEaXYuY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIHRoaXMubWVudURpdi5pZCA9IGlkICsgJ0Ryb3BEb3duTWVudSc7XHJcbiAgICAgIHRoaXMuZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQodGhpcy5tZW51RGl2KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGFkZEl0ZW0odGV4dDogc3RyaW5nLCBjYWxsYmFjazogTWVudUl0ZW1GdW5jdGlvbikge1xyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpdGVtLmlkID0gdGhpcy5pZCArICdEcm9wRG93bk1lbnVJdGVtJztcclxuICAgICAgaXRlbS5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudURpdi5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGFkZFN1Yk1lbnUodGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKTogU3ViTWVudSB7XHJcblxyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpdGVtLmlkID0gdGhpcy5pZCArICdEcm9wRG93bk1lbnVJdGVtJztcclxuICAgICAgaXRlbS5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgc3ViTWVudS5zaG93KCk7XHJcbiAgICAgICAgIHN1Yk1lbnUuaWdub3JlRXZlbnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudURpdi5hcHBlbmRDaGlsZChpdGVtKTtcclxuXHJcbiAgICAgIGxldCBzdWJNZW51ID0gbmV3IFN1Yk1lbnUoaXRlbSwgdGhpcy5kcm9wRG93bkRpdiwgaWQpO1xyXG4gICAgICByZXR1cm4gc3ViTWVudTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ViTWVudSBleHRlbmRzIE1lbnUge1xyXG4gICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgZHJvcERvd25EaXY6IEhUTUxEaXZFbGVtZW50LCBpZDogc3RyaW5nKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgdGhpcy5tZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMubWVudURpdi5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51JztcclxuICAgICAgdGhpcy5tZW51RGl2LmlkID0gaWQgKyAnRHJvcERvd25NZW51JztcclxuICAgICAgZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQodGhpcy5tZW51RGl2KTtcclxuXHJcbiAgICAgIHRoaXMuYWRkQ2xvc2VIYW5kbGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhZGRJdGVtKHRleHQ6IHN0cmluZywgY2FsbGJhY2s6IE1lbnVJdGVtRnVuY3Rpb24pIHtcclxuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaXRlbS5pZCA9IHRoaXMuaWQgKyAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ0Ryb3BEb3duTWVudUl0ZW0nO1xyXG4gICAgICBpdGVtLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy5pZ25vcmVFdmVudCA9IHRydWU7XHJcbiAgICAgICAgIC8vIFRPRE8gdGhlIGdsb2JhbCBoYW5kbGVyIHNob3VsZCBnZXQgdGhpcyBidXQgZG9lcyBub3Qgb24gcGhvbmVzXHJcbiAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVudURpdi5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGxldCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcblxyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gdjEgKyBjbGFtcChtaXgsIDAsIDEpICogKHYyIC0gdjEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3MocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAoYSA9PT0gdW5kZWZpbmVkID8gJycgOiAnLCcgKyBhKSArICcpJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbHMge1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBnbCgpIHtcclxuICAgICAgcmV0dXJuIGdsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHNldCBnbChjb250ZXh0OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICAgIGdsID0gY29udGV4dDtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBob2xkaW5nIGluZm9ybWF0aW9uIGFib3V0IGEgdHJpYW5nbGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkVHJpYW5nbGUge1xyXG4gICB2ZXJ0aWNlczogZ2xWZWMzW107XHJcbiAgIHB1YmxpYyBpVjA6IG51bWJlcjtcclxuICAgcHVibGljIGlWMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaVYyOiBudW1iZXI7XHJcblxyXG4gICBub3JtYWxzOiBnbFZlYzNbXTtcclxuICAgcHVibGljIGlOMDogbnVtYmVyO1xyXG4gICBwdWJsaWMgaU4xOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpTjI6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICB2ZXJ0aWNlczogZ2xWZWMzW10sIGlWMDogbnVtYmVyLCBpVjE6IG51bWJlciwgaVYyOiBudW1iZXIsXHJcbiAgICAgIG5vcm1hbHM6IGdsVmVjM1tdLCBpTjA/OiBudW1iZXIsIGlOMT86IG51bWJlciwgaU4yPzogbnVtYmVyLFxyXG4gICApIHtcclxuICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgICB0aGlzLmlWMCA9IGlWMDtcclxuICAgICAgdGhpcy5pVjEgPSBpVjE7XHJcbiAgICAgIHRoaXMuaVYyID0gaVYyO1xyXG5cclxuICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgaWYgKGlOMCA9PT0gdW5kZWZpbmVkIHx8IGlOMCA9PT0gLTEpIHtcclxuICAgICAgICAgbGV0IG5vcm1hbCA9IHRoaXMuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWwpO1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm5vcm1hbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgdGhpcy5pTjAgPSBpbmRleDtcclxuICAgICAgICAgdGhpcy5pTjEgPSBpbmRleDtcclxuICAgICAgICAgdGhpcy5pTjIgPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgdGhpcy5pTjAgPSBpTjA7XHJcbiAgICAgICAgIHRoaXMuaU4xID0gaU4xO1xyXG4gICAgICAgICB0aGlzLmlOMiA9IGlOMjtcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIGxldCBuID0gdGhpcy5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgIGxldCBuMCA9IHRoaXMubjA7XHJcbiAgICAgICAgIGxldCBuMSA9IHRoaXMubjE7XHJcbiAgICAgICAgIGxldCBuMiA9IHRoaXMubjI7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4udG9TdHJpbmcoMikpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuMC50b1N0cmluZygyKSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4xLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobjIudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGdldCB2MCgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1t0aGlzLmlWMF07XHJcbiAgIH1cclxuICAgZ2V0IHYxKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMuaVYxXTtcclxuICAgfVxyXG4gICBnZXQgdjIoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbdGhpcy5pVjJdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbjAoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsc1t0aGlzLmlOMF07XHJcbiAgIH1cclxuICAgZ2V0IG4xKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbHNbdGhpcy5pTjFdO1xyXG4gICB9XHJcbiAgIGdldCBuMigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxzW3RoaXMuaU4yXTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueCwgTWF0aC5taW4odGhpcy52MS54LCB0aGlzLnYyLngpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueSwgTWF0aC5taW4odGhpcy52MS55LCB0aGlzLnYyLnkpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueiwgTWF0aC5taW4odGhpcy52MS56LCB0aGlzLnYyLnopKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueCwgTWF0aC5tYXgodGhpcy52MS54LCB0aGlzLnYyLngpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueSwgTWF0aC5tYXgodGhpcy52MS55LCB0aGlzLnYyLnkpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueiwgTWF0aC5tYXgodGhpcy52MS56LCB0aGlzLnYyLnopKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWwoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IGEgPSB0aGlzLnYxLnN1YnRyYWN0KHRoaXMudjApO1xyXG4gICAgICBsZXQgYiA9IHRoaXMudjIuc3VidHJhY3QodGhpcy52MSk7XHJcbiAgICAgIHJldHVybiBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgUGF0aFRyYWNlclJlbmRlcmVyLCBSZW5kZXJNb2RlIH0gZnJvbSBcIi4vUGF0aFRyYWNlclJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSBcIi4vVW5pZm9ybXNcIjtcclxuaW1wb3J0IHsgU3BoZXJpY2FsQ29vcmQgfSBmcm9tIFwiLi9TcGhlcmljYWxDb29yZFwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUgfSBmcm9tIFwiLi9nbENvbG9yV2l0aFRlbXBlcmF0dXJlXCI7XHJcbmltcG9ydCB7IEdsb2JhbHMsIGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlU3BoZXJlIH0gZnJvbSBcIi4vVHJpYW5nbGVTcGhlcmVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVDdWJlIH0gZnJvbSBcIi4vVHJpYW5nbGVDdWJlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqRmlsZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqRmlsZVwiO1xyXG5cclxubGV0IHNraW5Ub25lcyA9IFtcclxuICAgbmV3IGh0bWxDb2xvcihbMjQwLCAyMjMsIDIxNF0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsyNTUsIDIxOCwgMjAwXSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzIzMiwgMTc5LCAxMTddKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTkwLCAxMzYsIDg3XSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTE1LCA5MSwgNTldKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTM5LCA3MywgNjVdKVxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzEzMiwgNTUsIDM0XSksXHJcbiAgIC8vbmV3IGh0bWxDb2xvcihbNjEsIDEyLCAyXSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMzgsIDcsIDFdKVxyXG5dO1xyXG5cclxuZW51bSBQb2ludGVyTW9kZSB7XHJcbiAgIFZpZXcsXHJcbiAgIExpZ2h0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aFRyYWNlckFwcCB7XHJcbiAgIHB1YmxpYyByZW5kZXJlcjogUGF0aFRyYWNlclJlbmRlcmVyO1xyXG4gICBwcml2YXRlIG1vZGVsdmlldzogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHByb2plY3Rpb246IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGU6IFBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZVNwZWNpYWwgPSBmYWxzZTtcclxuICAgcHJpdmF0ZSBwb3M6IFNwaGVyaWNhbENvb3JkO1xyXG4gICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBwcml2YXRlIGludGVuc2l0eVNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGxpZ2h0Q29sb3JTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBiYWxsQ29sb3JTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBhbWJpZW50SW50ZW5zaXR5U2xpZGVyOiBTbGlkZXI7XHJcblxyXG4gICBwcml2YXRlIGFuZ2xlWCA9IDAuNTtcclxuICAgcHJpdmF0ZSBhbmdsZVkgPSAwLjc1O1xyXG4gICBwcml2YXRlIHpvb21aID0gMy41O1xyXG5cclxuICAgcHJpdmF0ZSBtb3VzZURvd24gPSBmYWxzZTtcclxuICAgcHJpdmF0ZSBvbGRYOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgb2xkWTogbnVtYmVyO1xyXG5cclxuICAgcHJpdmF0ZSBsYXN0VGltZXM6IG51bWJlcltdID0gW107XHJcbiAgIHByaXZhdGUgcmVhZG9ubHkgTUFYX1NBTVBMRVMgPSA1MDA7XHJcblxyXG4gICBwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocXVlcnk6IHN0cmluZykge1xyXG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wb25lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuY2FudmFzLmlkID0gJ2NhbnZhcyc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICBsZXQgY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xyXG5cclxuICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgIC8vIFRPRE8gZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgbm90IGJlaW5nIGFibGUgdG8gY3JlYXRlIGEgV2ViR0wgY29udGV4dFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBnZXQgV2ViR0wgY29udGV4dFwiKTtcclxuICAgICAgfVxyXG4gICAgICBHbG9iYWxzLmdsID0gY29udGV4dDtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9udG91Y2hzdGFydCA9IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25Eb3duKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNobW92ZSA9IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICB0aGlzLm9uTW92ZShldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9udG91Y2hlbmQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5vbkRvd24oZXZlbnQueCwgZXZlbnQueSk7XHJcblxyXG4gICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdGlvbiBiZWNhdXNlIGRyYWdnaW5nIGlzIHVzZWQgZm9yIHJvdGF0aW5nIHRoZSBjYW1lcmEgYW5kIG1vdmluZyBvYmplY3RzXHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZW1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5vbk1vdmUoZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2V1cCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9hZE1vZGVsKHRoaXMucXVlcnkpLnRoZW4oKHRPYmo6IFRyaWFuZ2xlT2JqKSA9PiB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUGF0aFRyYWNlclJlbmRlcmVyKHRPYmopO1xyXG4gICAgICAgICAvL3RoaXMucmVuZGVyZXIuc2V0TW9kZWwodE9iaik7XHJcbiAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBsZXQgZHJhd1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZHJhd1RpbWUuaWQgPSAnZHJhd1RpbWUnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1RpbWUpO1xyXG5cclxuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGJ1dHRvbi5pZCA9ICdtb2RlQnV0dG9uJztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdWaWV3JztcclxuICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICBzd2l0Y2ggKHRoaXMucG9pbnRlck1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5WaWV3OlxyXG4gICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0xpZ2h0JztcclxuICAgICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLkxpZ2h0O1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuTGlnaHQ6XHJcbiAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyc7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgICAgbGV0IHByb2dyZXNzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgcHJvZ3Jlc3NTcGFuLmlkID0gJ3Byb2dyZXNzU3Bhbic7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9ncmVzc1NwYW4pO1xyXG5cclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG4gICAgICB0aGlzLmludGVuc2l0eVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnTGlnaHRJbnRlbnNpdHknLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0IEludGVuc2l0eScsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiBVbmlmb3Jtcy51TGlnaHRJbnRlbnNpdHkgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRJbnRlbnNpdHkgPSB0aGlzLmludGVuc2l0eVNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBidWlsZCBhIHJhbmdlIG9mIGNvbG9yc1xyXG4gICAgICBsZXQgbWluID0gMjAwMDtcclxuICAgICAgbGV0IG1heCA9IDEwMDAwO1xyXG4gICAgICBsZXQgY29sb3JzOiBodG1sQ29sb3JbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRlbXAgPSBtaW4gKyAoaSAvIDkpICogKG1heCAtIG1pbik7XHJcbiAgICAgICAgIGNvbG9ycy5wdXNoKGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUuY3JlYXRlKHRlbXApLnRvSHRtbENvbG9yKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlnaHRDb2xvclNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnTGlnaHRDb2xvcicsXHJcbiAgICAgICAgIGxhYmVsOiAnTGlnaHQgQ29sb3InLFxyXG4gICAgICAgICBtaW46IDIwMDAsXHJcbiAgICAgICAgIG1heDogMTAwMDAsXHJcbiAgICAgICAgIHZhbHVlOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlLmRheWxpZ2h0LnRlbXBlcmF0dXJlLFxyXG4gICAgICAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldExpZ2h0Q29sb3IoKTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKHNsaWRlcjogU2xpZGVyKSA9PiB7IHJldHVybiBzbGlkZXIudmFsdWUudG9GaXhlZCgpICsgXCJLXCIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGFwcGx5IHRoZSBpbml0aWFsIGNvbG9yc1xyXG4gICAgICB0aGlzLnNldExpZ2h0Q29sb3IoKTtcclxuXHJcbiAgICAgIHRoaXMuYmFsbENvbG9yU2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdCYWxsQ29sb3InLFxyXG4gICAgICAgICBsYWJlbDogJ0JhbGwgQ29sb3InLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogNTAsXHJcbiAgICAgICAgIGNvbG9yczogc2tpblRvbmVzLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVPYmpDb2xvciA9IHRoaXMuYmFsbENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gbWFrZSBzdXJlIGdsIG1hdGNoZXMgdGhlIGluaXRpYWwgVUkgc2V0dGluZ1xyXG4gICAgICBVbmlmb3Jtcy51T2JqQ29sb3IgPSB0aGlzLmJhbGxDb2xvclNsaWRlci5nbENvbG9yO1xyXG5cclxuICAgICAgdGhpcy5hbWJpZW50SW50ZW5zaXR5U2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdBbWJpZW50SW50ZW5zaXR5JyxcclxuICAgICAgICAgbGFiZWw6ICdBbWJpZW50IExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IFVuaWZvcm1zLnVBbWJpZW50TGlnaHRJbnRlbnNpdHkgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ID0gdGhpcy5hbWJpZW50SW50ZW5zaXR5U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBkaXY7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgbG9hZE1vZGVsKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPFRyaWFuZ2xlT2JqPiB7XHJcbiAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVzcGhlcmUnKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsUmFkaXVzID0gMDtcclxuICAgICAgICAgbGV0IHJhZGl1cyA9IDAuNTtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBnbFZlYzMoWzAsIHJhZGl1cywgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZVNwaGVyZSg4LCByYWRpdXMsIGNlbnRlcik7XHJcbiAgICAgICAgIHRPYmouYnJlYWtJbnRvVm9sdW1lcygpO1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICd0cmlhbmdsZWN1YmUnKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsUmFkaXVzID0gMDtcclxuICAgICAgICAgbGV0IHNpemUgPSAwLjg7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCBzaXplIC8gMi4wLCAwXSk7XHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlQ3ViZShzaXplLCBjZW50ZXIpO1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5vYmonKSkge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIHJldHVybiBmZXRjaChxdWVyeSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqRmlsZShxdWVyeSwgcmVzKTtcclxuICAgICAgICAgICAgICAgbGV0IHNpemUgPSAxLjU7XHJcbiAgICAgICAgICAgICAgIHRPYmouYXV0b0NlbnRlcihzaXplKTtcclxuICAgICAgICAgICAgICAgdE9iai50cmFuc2xhdGUobmV3IGdsVmVjMyhbMCwgdE9iai5oZWlnaHQgLyAyLCAwXSkpO1xyXG4gICAgICAgICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0TGlnaHRDb2xvcigpIHtcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY29sb3JzIGZvciB0aGUgaW50ZW5zaXR5IHNsaWRlclxyXG4gICAgICB0aGlzLmludGVuc2l0eVNsaWRlci5jb2xvcnMgPSBbaHRtbENvbG9yLmJsYWNrLCB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIuaHRtbENvbG9yXTtcclxuXHJcbiAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW4gcmVuZGVyaW5nXHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodENvbG9yID0gdGhpcy5saWdodENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRvd24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGVTcGVjaWFsID0gKHggPCAwLjEgKiB0aGlzLmNhbnZhcy53aWR0aCkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICB0aGlzLm9sZFkgPSB5O1xyXG5cclxuICAgICAgdGhpcy5wb3MgPSBTcGhlcmljYWxDb29yZC5mcm9tWFlaKFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMpO1xyXG5cclxuICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcclxuICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLlZpZXcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy56b29tWiA9IGNsYW1wKHRoaXMuem9vbVosIDEsIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFuZ2xlcyBiYXNlZCBvbiBob3cgZmFyIHdlIG1vdmVkIHNpbmNlIGxhc3QgdGltZVxyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWSAtPSAoeCAtIHRoaXMub2xkWCkgKiAwLjAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCArPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAxO1xyXG5cclxuICAgICAgICAgICAgICAgLy8gZG9uJ3QgZ28gdXBzaWRlIGRvd25cclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggPSBNYXRoLm1heCh0aGlzLmFuZ2xlWCwgLU1hdGguUEkgLyAyICsgMC4wMSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5taW4odGhpcy5hbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5MaWdodCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyAtPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAwNTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MucmFkaXVzID0gY2xhbXAodGhpcy5wb3MucmFkaXVzLCBVbmlmb3Jtcy51QmFsbFJhZGl1cyArIDAuNSwgNSk7XHJcbiAgICAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMgPSB0aGlzLnBvcy50b1hZWigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yb3RhdGlvbkFuZ2xlICs9ICh4IC0gdGhpcy5vbGRYKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgKz0gKHkgLSB0aGlzLm9sZFkpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSA9IGNsYW1wKHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlLCAwLCAxODApO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBjbGVhciB0aGUgc2FtcGxlIGJ1ZmZlclxyXG4gICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlbWVtYmVyIHRoaXMgY29vcmRpbmF0ZVxyXG4gICAgICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICAgICB0aGlzLm9sZFkgPSB5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgLy8gVE9ETyBoYW5kbGUgdGhpcyB3aXRoaW4gdGhlIFBhdGhUcmFjZXIgY2xhc3Mgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGhhcmQgY29kZSB2aWV3IHN0dWZmXHJcbiAgICAgIGxldCBzaXplID0gMC4yICogdGhpcy5jYW52YXMud2lkdGg7XHJcblxyXG4gICAgICBpZiAoeSA8IHNpemUpIHtcclxuXHJcbiAgICAgICAgIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAxICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMiAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDMgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucmVuZGVyZXIucmVuZGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQXJ0aXN0OlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5DaHJvbWE6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ2hyb21hIFZpZXc6IHJlZD1oaWdoZXN0IGNocm9tYVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5WYWx1ZTpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJWYWx1ZSBWaWV3XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkJhbmRzOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIjUgQ29sb3IgKyBIaWdobGlnaHQgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVRleHR1cmUoKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gZ2xNYXQ0Lm1ha2VMb29rQXQoXHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUsXHJcbiAgICAgICAgIG5ldyBnbFZlYzMoWzAsIDEsIDBdKSwgIC8vIGNlbnRlciBwb2ludFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSkgICAvLyB1cCB2ZWN0b3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IGdsTWF0NC5tYWtlUGVyc3BlY3RpdmUoNTUsIDEsIDAuMSwgMTAwKTtcclxuICAgICAgdGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0aW9uLm11bHRNKHRoaXMubW9kZWx2aWV3KTtcclxuICAgICAgdGhpcy5yZW5kZXJlci51cGRhdGVUZXh0dXJlKHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbik7XHJcbiAgIH07XHJcblxyXG4gICBwcml2YXRlIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN3YXAocG9zOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zd2FwKHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgICAgaWYgKFVuaWZvcm1zLnVTYW1wbGUgPCB0aGlzLk1BWF9TQU1QTEVTKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzBdID0gdGhpcy56b29tWiAqIE1hdGguc2luKHRoaXMuYW5nbGVZKSAqIE1hdGguY29zKHRoaXMuYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMV0gPSB0aGlzLnpvb21aICogTWF0aC5zaW4odGhpcy5hbmdsZVgpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1syXSA9IHRoaXMuem9vbVogKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWCk7XHJcblxyXG4gICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoKTtcclxuICAgICAgICAgdGhpcy5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVRpbWVyTGFiZWwoKSB7XHJcblxyXG4gICAgICBsZXQgdCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgbGV0IGRyYXdUaW1lTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd1RpbWUnKTtcclxuICAgICAgaWYgKHRoaXMubGFzdFRpbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgbGV0IGVsYXBzZWRNcyA9ICh0IC0gdGhpcy5sYXN0VGltZXNbMF0pIC8gdGhpcy5sYXN0VGltZXMubGVuZ3RoO1xyXG4gICAgICAgICBkcmF3VGltZUxhYmVsLmlubmVyVGV4dCA9IGVsYXBzZWRNcy50b0ZpeGVkKDApICsgJ21zJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxhc3RUaW1lcy5wdXNoKHQpO1xyXG4gICAgICBpZiAodGhpcy5sYXN0VGltZXMubGVuZ3RoID4gMzApIHtcclxuICAgICAgICAgdGhpcy5sYXN0VGltZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJhd1RpbWVMYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gVW5pZm9ybXMudVNhbXBsZSA8IHRoaXMuTUFYX1NBTVBMRVMgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgICAgbGV0IHByb2dyZXNzID0gVW5pZm9ybXMudVNhbXBsZSAvIHRoaXMuTUFYX1NBTVBMRVM7XHJcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzU3BhbicpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgbGV0IHcgPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgc3Bhbi5zdHlsZS5yaWdodCA9IHcgKiAoMSAtIHByb2dyZXNzKSArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSAnLi9nbE1hdCc7XHJcbmltcG9ydCB7IGdsVmVjMywgZ2xWZWM0IH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB0b1NjcmVlblZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVWZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvVGV4dHVyZUZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSAnLi9Db2xvclJhbmdlJztcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tICcuL1VuaWZvcm1zJztcclxuaW1wb3J0IHsgZ2wsIGlzTW9iaWxlIH0gZnJvbSAnLi9HbG9iYWxzJztcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tICcuL1Byb2ZpbGVyJztcclxuaW1wb3J0IHsgZ2xVbmlmb3JtIH0gZnJvbSAnLi9nbFVuaWZvcm0nO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuaW1wb3J0IHsgQ29sb3JBbmFseXplciB9IGZyb20gJy4vQ29sb3JBbmFseXplcic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IGdsVW5pZm9ybUJsb2NrIH0gZnJvbSAnLi9nbFVuaWZvcm1CbG9jayc7XHJcblxyXG4vKipcclxuICogUmVuZGVyaW5nIG1vZGUgZm9yIGRpc3BsYXlpbmcgdGhlIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlbmRlck1vZGUge1xyXG4gICBBcnRpc3QgPSAwLFxyXG4gICBWYWx1ZSA9IDEsXHJcbiAgIENocm9tYSA9IDIsXHJcbiAgIEJhbmRzID0gMyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgZG9lcyB0aGUgd29yayBvZiBidWlsZGluZyB0aGUgUGF0aCBUcmFjZWQgdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXJSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XHJcbiAgIHByaXZhdGUgdGV4dHVyZXM6IFdlYkdMVGV4dHVyZVtdO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdG9UZXh0dXJlUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGFuYWx5emVyOiBDb2xvckFuYWx5emVyO1xyXG5cclxuICAgcHJpdmF0ZSBtYWluVmlldyA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICBwcml2YXRlIHNtYWxsVmlld3MgPSBbXHJcbiAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICBdO1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0aWNlcyA9IFtcclxuICAgICAgLTEsIC0xLFxyXG4gICAgICAtMSwgKzEsXHJcbiAgICAgICsxLCAtMSxcclxuICAgICAgKzEsICsxXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodE9iajogVHJpYW5nbGVPYmopIHtcclxuXHJcbiAgICAgIC8vIGxhcmdlciB0ZXh0dXJlIGlzIGhpZ2hlciByZXNvbHV0aW9uLCBidXQgdGFrZXMgbG9uZ2VyIHRvIGNvbXB1dGVcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDI1NjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gVW5pZm9ybXMudVRleHR1cmVTaXplID0gNTEyO1xyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSAyNTY7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmFseXplciA9IG5ldyBDb2xvckFuYWx5emVyKFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdmVydGV4IGJ1ZmZlciAtIHRoZSBibG9jayB3ZSdsbCBkcmF3IG91ciByZW5kZXJlZCB0ZXh0dXJlIG9uXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgZnJhbWVidWZmZXJcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcblxyXG4gICAgICBsZXQgaW50ZXJuYWxGb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IGZvcm1hdDogbnVtYmVyO1xyXG4gICAgICBsZXQgdHlwZTogbnVtYmVyO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHR1cmVzXHJcbiAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICBsZXQgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0Jyk7XHJcbiAgICAgICAgIGlmIChleHQpIHtcclxuICAgICAgICAgICAgLy8gVGhhbmtzIEFwcGxlLiBBbHdheXMgZ290IHRvIGRvIHRoaW5ncyBhIGxpdHRsZSBkaWZmZXJlbnRseVxyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBleHQuSEFMRl9GTE9BVF9PRVM7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5vIGZsb2F0aW5nIHBvaW50IHRleHR1cmVzPyByZWFsbHkgZmFsbCBiYWNrIHRvIHVuc2lnbmVkIGJ5dGVzXHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGxldCB5b3UgZG8gYW4gJ2Vsc2UgaWYnIGhlcmUgYW5kIHdoZW4gV2ViR0wyIGlzXHJcbiAgICAgIC8vIG5vdCBzdXBwb3J0ZWQsIHdlIGdldCBhbiBleGNlcHRpb24sIHNvIHRodXMgdGhlIHRyeS1jYXRjaFxyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1MzgxMTIyL3R5cGVzY3JpcHQtdHlwZS1uYXJyb3dlZC10by1uZXZlci13aXRoLWluc3RhbmNlb2YtaW4tYW4taWYtZWxzZS1zdGF0ZW1lbnRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgaWYgKGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICAgICBnbC5nZXRFeHRlbnNpb24oJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnKTtcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBMzJGO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZ2wuRkxPQVRcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdHdvIHRleHR1cmVzLiBPbmUgd2UgZGlzcGxheSBhbmQgb25lIHdlIGRyYXcgdG9cclxuICAgICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goZ2wuY3JlYXRlVGV4dHVyZSgpKTtcclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1tpXSk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELCAgICAgICAgICAvLyB0YXJnZXRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gbGV2ZWxcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQsICAgICAgICAgLy8gaW50ZXJuYWwgZm9ybWF0XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIHdpZHRoXHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIGhlaWdodFxyXG4gICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXJcclxuICAgICAgICAgICAgZm9ybWF0LCAgICAgICAgICAgICAgICAgLy8gZm9ybWF0XHJcbiAgICAgICAgICAgIHR5cGUsICAgICAgICAgICAgICAgICAgIC8vIHR5cGVcclxuICAgICAgICAgICAgbnVsbCAgICAgICAgICAgICAgICAgICAgLy8gcGl4ZWxzXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdG9TY3JlZW4gc2hhZGVyXHJcbiAgICAgIHRoaXMudG9TY3JlZW5Qcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKHRvU2NyZWVuVmVydGV4U291cmNlLCB0b1NjcmVlbkZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9TY3JlZW5Qcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgdGhpcy5jb21waWxlU2hhZGVyKHRPYmopO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXBpbGVTaGFkZXIodE9iaj86IFRyaWFuZ2xlT2JqKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdG9UZXh0dXJlIHNoYWRlclxyXG4gICAgICBpZiAodE9iaiAmJiB0T2JqLnRyaWFuZ2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgdG9UZXh0dXJlVmVydGV4U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnI3ZlcnNpb24gMzAwIGVzJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJ05PVEhJTkcnLCAnVVNFX1RSSUFOR0xFUycpLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVGcmFnbWVudFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJyN2ZXJzaW9uIDMwMCBlcycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCdOT1RISU5HJywgJ1VTRV9UUklBTkdMRVMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9WRVJUSUNFUz4nLCB0T2JqLnZlcnRpY2VzLmxlbmd0aC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9WT0xVTUVTPicsIHRPYmoudm9sdW1lcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVFJJQU5HTEVTPicsIHRPYmoudHJpYW5nbGVzLmxlbmd0aC50b1N0cmluZygpKVxyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgLy8gdXBsb2FkIHRyaWFuZ2xlcyB0byB0aGUgR1BVXHJcbiAgICAgICAgIHRoaXMudXBsb2FkVW5pZm9ybXModE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgdG9UZXh0dXJlVmVydGV4U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnJyksXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZUZyYWdtZW50U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnJylcclxuICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgICAgIHAubG9nKCdjb21waWxlJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGxvYWRzIGFsbCB0aGUgdHJpYW5nbGUgZGF0YSB0byBXZWJHTFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHByb2dyYW0gVGhlIHByb2dyYW0gdG8gdXBsb2FkIHRvXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwbG9hZFVuaWZvcm1zKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICAvLyB1cGxvYWQgdGhlIGJpZyBjaHVua3MgYXMgVW5pZm9ybSBCbG9ja3NcclxuICAgICAgbGV0IGJsb2NrQmluZGluZyA9IDI7XHJcbiAgICAgIGxldCB2QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2sodGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlWZXJ0aWNlc0Jsb2NrJywgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIC8vIHB1dCB0aGUgZGF0YSBpbnRvIGEgRmxvYXQzMkFycmF5IGZvciB1cGxvYWRpbmdcclxuICAgICAgbGV0IHZEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0T2JqLnZlcnRpY2VzLmxlbmd0aCAqIDQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0T2JqLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDBdID0gdi54O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDFdID0gdi55O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDJdID0gdi56O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDNdID0gMDtcclxuICAgICAgfVxyXG4gICAgICB2QmxvY2sudXBsb2FkKHZEYXRhKTtcclxuXHJcbiAgICAgIGJsb2NrQmluZGluZyA9IDM7XHJcbiAgICAgIGxldCB0QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2sodGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlUcmlhbmdsZXNCbG9jaycsIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICAvLyBwdXQgdGhlIGRhdGEgaW50byBhIEZsb2F0MzJBcnJheSBmb3IgdXBsb2FkaW5nXHJcbiAgICAgIGxldCB0RGF0YSA9IG5ldyBJbnQzMkFycmF5KHRPYmoudHJpYW5nbGVzLmxlbmd0aCAqIDQpO1xyXG4gICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IHRPYmoudm9sdW1lcy5sZW5ndGg7IHYrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdE9iai52b2x1bWVzW3ZdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZvbC50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSB2b2wudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYwO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYxO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYyO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0QmxvY2sudXBsb2FkKHREYXRhKTtcclxuXHJcbiAgICAgIC8vIFVwbG9hZCB0aGUgdm9sdW1lIGluZm8gYXMgYSBzdGFuZGFyZCB1bmlmb3JtXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRPYmoudm9sdW1lc1tpXTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5zdGFydEluZGV4Jywgc3RhcnRJbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10ubnVtVHJpYW5nbGVzJywgdm9sLnRyaWFuZ2xlcy5sZW5ndGgsIHRydWUpO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1pbicsIHZvbC5ib3hNaW4pO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1heCcsIHZvbC5ib3hNYXgpO1xyXG4gICAgICAgICBzdGFydEluZGV4ICs9IHZvbC50cmlhbmdsZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNaW4nLCB0T2JqLmJveE1pbik7XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNYXgnLCB0T2JqLmJveE1heCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgcmVuZGVyTW9kZSgpOiBSZW5kZXJNb2RlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpblZpZXc7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlID0gMDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRFeWVSYXkobWF0cml4OiBnbE1hdDQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzQoW3gsIHksIDAsIDFdKTtcclxuICAgICAgcmV0dXJuIG1hdHJpeC5tdWx0Vih2ZWMpLmRpdmlkZUJ5VygpLnN1YnRyYWN0KFVuaWZvcm1zLnVFeWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZShtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBhbGlhc2luZyBieSByYW5kb20gc2FtcGxpbmcgd2l0aGluIGEgcGl4ZWxcclxuICAgICAgbGV0IHggPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHkgPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHogPSAwO1xyXG5cclxuICAgICAgbGV0IHYgPSBuZXcgZ2xWZWMzKFt4LCB5LCB6XSk7XHJcbiAgICAgIGxldCBqaXR0ZXIgPSBnbE1hdDQuZnJvbVRyYW5zbGF0aW9uKHYpO1xyXG4gICAgICBsZXQgbWF0cml4ID0gaml0dGVyLm11bHRNKG1vZGVsdmlld1Byb2plY3Rpb24pLmludmVyc2UoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMCA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTAxID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCAtMSwgKzEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTAgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsICsxLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMSA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsICsxKTtcclxuICAgICAgLy8gc2V0IHVuaWZvcm1zXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG5cclxuICAgICAgLy8gcmVuZGVyIHRvIHRleHR1cmVcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVW5pZm9ybXMudVRleHR1cmVTaXplLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLCAwKTtcclxuXHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5hbmFseXplci5ydW4oVW5pZm9ybXMudUxpZ2h0QWxwaGEsIFVuaWZvcm1zLnVTaGFkb3dBbHBoYSk7XHJcbiAgICAgIFVuaWZvcm1zLnVNYXhDaHJvbWEgPSBkYXRhLm1heENocm9tYTtcclxuXHJcbiAgICAgIGxldCBjciA9IG5ldyBDb2xvclJhbmdlKFtkYXRhLmRhcmtlc3RMaWdodENvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEuYXZnTGlnaHRDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvci50b0h0bWxDb2xvcigpXSk7XHJcbiAgICAgIFVuaWZvcm1zLnVIaWdobGlnaHRDb2xvciA9IGRhdGEuaGlnaGxpZ2h0Q29sb3I7XHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodExpZ2h0Q29sb3IgPSBjci5nZXQoMC44NSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVNaWRMaWdodENvbG9yID0gY3IuZ2V0KDAuNSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVEYXJrTGlnaHRDb2xvciA9IGNyLmdldCgwLjE1KS50b0dsQ29sb3IoKTtcclxuXHJcbiAgICAgIGNyID0gbmV3IENvbG9yUmFuZ2UoW2RhdGEuZGFya2VzdFNoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEuYXZnU2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCldKTtcclxuICAgICAgLy9Vbmlmb3Jtcy51U2hhZG93Q29sb3IgPSBkYXRhLnRlcm1pbmF0b3JDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudVNoYWRvd0NvbG9yID0gZGF0YS5hdmdTaGFkb3dDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudVJlZmxlY3RlZExpZ2h0Q29sb3IgPSBjci5nZXQoMSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVEYXJrQWNjZW50Q29sb3IgPSBjci5nZXQoMC4wKS50b0dsQ29sb3IoKTtcclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBwaW5nIHBvbmcgdGV4dHVyZXNcclxuICAgICAgdGhpcy50ZXh0dXJlcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlKys7XHJcbiAgICAgIFVuaWZvcm1zLnVSYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG5cclxuICAgICAgLy8gc2l6ZSBvZiB0aGUgYWN0dWFsIGNhbnZhcy4gVGhlIHRleHR1cmUgd2UgY3JlYXRlIGlzIGRyYXduIHRvIHRoaXMgaXRlbVxyXG4gICAgICBsZXQgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIC8vIG5vdCBzdXJlIHdoeSwgYnV0IHRoaXMgYmFzaWNhbGx5IGJlY29tZXMgZnVsbCB3aWR0aCBvbiBteSBwaG9uZVxyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBtYWluIHNjcmVlblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIFVuaWZvcm1zLnVTY2FsZSA9IDEuMDtcclxuICAgICAgVW5pZm9ybXMudVhPZmZzZXQgPSAwLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMubWFpblZpZXc7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIHNtYWxsZXIgdmlld3NcclxuICAgICAgVW5pZm9ybXMudVNjYWxlID0gMC4yO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc21hbGxWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51WE9mZnNldCA9IDEuMCAtICh0aGlzLnNtYWxsVmlld3MubGVuZ3RoIC0gaSAtIDAuNSkgKiAoMiAqIFVuaWZvcm1zLnVTY2FsZSk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMS4wIC0gVW5pZm9ybXMudVNjYWxlO1xyXG4gICAgICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMuc21hbGxWaWV3c1tpXTtcclxuICAgICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcbiAgICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc21hbGxWaWV3cyA9IFtcclxuICAgICAgICAgUmVuZGVyTW9kZS5DaHJvbWEsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuVmFsdWUsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQmFuZHMsXHJcbiAgICAgIF07XHJcbiAgICAgIGlmICh0aGlzLm1haW5WaWV3ID09IHRoaXMuc21hbGxWaWV3c1twb3NdKSB7XHJcbiAgICAgICAgIHRoaXMubWFpblZpZXcgPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tYWluVmlldyA9IHRoaXMuc21hbGxWaWV3c1twb3NdO1xyXG4gICAgICAgICB0aGlzLnNtYWxsVmlld3NbcG9zXSA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IEdsb2JhbHMsIHRvUmFkLCBpc01vYmlsZSwgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFBsYW5lc1JlbmRlcmVyIH0gZnJvbSBcIi4vUGxhbmVzUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2xWZWM0LCBnbFZlYzMsIGdsVmVjMiB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IE5vcm1hbFR5cGUsIFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVTcGhlcmUgfSBmcm9tIFwiLi9UcmlhbmdsZVNwaGVyZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUN1YmUgfSBmcm9tIFwiLi9UcmlhbmdsZUN1YmVcIjtcclxuaW1wb3J0IHsgVGhyZXNob2xkQ3RybCB9IGZyb20gXCIuL1RocmVzaG9sZEN0cmxcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcblxyXG4vLyBzcGVjaWZ5IGxvYWRlciBhbmQgb3B0aW9ucyBoZXJlLiBUaGlzIHZhbHVlIG11c3QgbWF0Y2ggdGhlXHJcbi8vIGNvbnRlbnRzIG9mIHdvcmtlci5kLnRzXHJcbmltcG9ydCBMb2FkZXJXb3JrZXIgZnJvbSAnd29ya2VyLWxvYWRlcj9uYW1lPUxvYWRlcldvcmtlci53b3JrZXIuanMhLi9Mb2FkZXJXb3JrZXInO1xyXG5pbXBvcnQgeyBEcm9wRG93bk1lbnUsIFN1Yk1lbnUgfSBmcm9tIFwiLi9Ecm9wRG93bk1lbnVcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbmVudW0gUG9pbnRlck1vZGUge1xyXG4gICBWaWV3LFxyXG4gICBMaWdodCxcclxufVxyXG5cclxuLy9jb25zdCBXSElURV9DT0xPUiA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuY29uc3QgV0hJVEVfQ09MT1IgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1MCwgMjQyXSk7XHJcbmNvbnN0IEJMQUNLX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG4vL2NvbnN0IEJMQUNLX0NPTE9SID0gbmV3IGh0bWxDb2xvcihbMzAsIDIwLCAwXSk7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbmVzQXBwIHtcclxuICAgcHVibGljIHJlbmRlcmVyOiBQbGFuZXNSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICBwcml2YXRlIG92ZXJsYXk6IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBoYW5kbGVyOiBQb2ludGVyRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgcHJpdmF0ZSBkaXJ0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICBwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gICBwcml2YXRlIGhpZ2hsaWdodFNsaWRlcjogU2xpZGVyXHJcbiAgIHByaXZhdGUgbGlnaHRMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIG1pZExpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgZGFya0xpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgc2hhZG93U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgdGhyZXNob2xkQ3RybDogVGhyZXNob2xkQ3RybDtcclxuICAgcHJpdmF0ZSB3b3JrZXI6IExvYWRlcldvcmtlcjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXBvbmVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkaXYuY2xhc3NOYW1lID0gJ1BsYW5lc0FwcCc7XHJcblxyXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHZpZXdDb250YWluZXIuaWQgPSAnVmlld0NvbnRhaW5lcic7XHJcbiAgICAgIHZpZXdDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3Q29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jcmVhdGVWaWV3RWxlbWVudHModmlld0NvbnRhaW5lcik7XHJcbiAgICAgIGRpdi5zdHlsZS53aWR0aCA9IGdsLmNhbnZhcy53aWR0aCArICdweCc7XHJcblxyXG4gICAgICBjb25zdCBjdHJsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjdHJsc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgY3RybHNDb250YWluZXIuaWQgPSAnQ3RybHNDb250YWluZXInO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY3RybHNDb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUN0cmxzRWxlbWVudHMoY3RybHNDb250YWluZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVWaWV3RWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjYW52YXMuaWQgPSAnTWFpbkNhbnZhcyc7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5pZCA9ICdPdmVybGF5JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IDUxMjtcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubGluZUhlaWdodCA9IHNpemUgKyAncHgnOyAvLyB2ZXJ0aWNhbGx5IGNlbnRlciB0ZXh0XHJcblxyXG4gICAgICAvLyB3aHkgZG8gd2UgaGF2ZSB0byBtYW51YWxseSBzZXQgdGhpcyBoZWlnaHQ/IElmIHdlIGRvbid0IGl0IGlzIDUxNS4yIHB4IGhpZ2hcclxuICAgICAgcGFyZW50LnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xyXG5cclxuXHJcbiAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgICAgIC8vIFRPRE8gZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgbm90IGJlaW5nIGFibGUgdG8gY3JlYXRlIGEgV2ViR0wgY29udGV4dFxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBnZXQgV2ViR0wgY29udGV4dFwiKTtcclxuICAgICAgfVxyXG4gICAgICBHbG9iYWxzLmdsID0gY29udGV4dDtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUGxhbmVzUmVuZGVyZXIoKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci53aGl0ZUNvbG9yID0gV0hJVEVfQ09MT1I7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYmxhY2tDb2xvciA9IEJMQUNLX0NPTE9SO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIoY2FudmFzKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRHJhZyA9IChwb3M6IGdsVmVjMiwgZGVsdGE6IGdsVmVjMikgPT4gdGhpcy5vbkRyYWcocG9zLCBkZWx0YSk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkNsaWNrID0gKHBvczogZ2xWZWMyKSA9PiB0aGlzLm9uQ2xpY2socG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uU2NhbGUgPSAoc2NhbGU6IG51bWJlciwgY2hhbmdlOiBudW1iZXIpID0+IHRoaXMub25TY2FsZShzY2FsZSwgY2hhbmdlKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uUm90YXRlID0gKGFuZ2xlOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHRoaXMub25Sb3RhdGUoYW5nbGUsIGRlbHRhKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uVHJhbnNsYXRlID0gKGRlbHRhOiBnbFZlYzIpID0+IHRoaXMub25UcmFuc2xhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgZG9jdW1lbnQub25rZXlwcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdvJzpcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5vcHRpbWl6ZShOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncCc6XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIub3B0aW1pemUoTm9ybWFsVHlwZS5GbGF0KTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgICAgICAgIHRoaXMudGVzdCgpO1xyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNob3dTaGFkb3dNYXAgPSAhdGhpcy5yZW5kZXJlci5zaG93U2hhZG93TWFwO1xyXG4gICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHN1Yk1lbnU6IFN1Yk1lbnU7XHJcbiAgICAgIGxldCBtZW51ID0gbmV3IERyb3BEb3duTWVudShwYXJlbnQsICdNb2RlbHMnLCAnTW9kZWxEcm9wRG93bicpO1xyXG4gICAgICBtZW51LmFkZEl0ZW0oJ0ZlbWFsZSBQb3NlJywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1Bvc2UxLmJsb2InKSk7XHJcbiAgICAgIG1lbnUuYWRkSXRlbSgnRmVtYWxlIEhlYWQnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnRmVtYWxlSGVhZC5ibG9iJykpO1xyXG4gICAgICBtZW51LmFkZEl0ZW0oJ1NrdWxsIDEnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnU2t1bGwxLmJsb2InKSk7XHJcbiAgICAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMicsICgpID0+IHRoaXMubG9hZE1vZGVsKCdTa3VsbDIuYmxvYicpKTtcclxuICAgICAgbWVudS5hZGRJdGVtKCdTa3VsbCAzJywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1NrdWxsMy5ibG9iJykpO1xyXG4gICAgICBtZW51LmFkZEl0ZW0oJ1BlbHZpcycsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQZWx2aXMuYmxvYicpKTtcclxuICAgICAgbWVudS5hZGRJdGVtKCdIZWFkIEVjb3JjaGUnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnSGVhZEVjb3JjaGUuYmxvYicpKTtcclxuICAgICAgbWVudS5hZGRJdGVtKCdBcm5vbGQnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnQXJub2xkLmJsb2InKSk7XHJcbiAgICAgIG1lbnUuYWRkSXRlbSgnVGVhcG90JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1RlYXBvdC5ibG9iJykpO1xyXG5cclxuICAgICAgc3ViTWVudSA9IG1lbnUuYWRkU3ViTWVudSgnUG9zZXMnLCAnSGVhZHNTdWJNZW51Jyk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxJywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1Bvc2VfMDEuYmxvYicpKTtcclxuICAgICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDInLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnUG9zZV8wMi5ibG9iJykpO1xyXG4gICAgICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMycsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQb3NlXzAzLmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA0JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1Bvc2VfMDQuYmxvYicpKTtcclxuICAgICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDUnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnUG9zZV8wNS5ibG9iJykpO1xyXG4gICAgICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgNicsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQb3NlXzA2LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSA3JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1Bvc2VfMDcuYmxvYicpKTtcclxuICAgICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDgnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnUG9zZV8wOC5ibG9iJykpO1xyXG4gICAgICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgOScsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQb3NlXzA5LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMCcsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQb3NlXzAxMC5ibG9iJykpO1xyXG4gICAgICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTEnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnUG9zZV8wMTEuYmxvYicpKTtcclxuICAgICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDEyJywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1Bvc2VfMDEyLmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxMycsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQb3NlXzAxMy5ibG9iJykpO1xyXG4gICAgICBzdWJNZW51LmFkZEl0ZW0oJ1Bvc2UgMTQnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnUG9zZV8wMTQuYmxvYicpKTtcclxuICAgICAgc3ViTWVudS5hZGRJdGVtKCdQb3NlIDE1JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ1Bvc2VfMDE1LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnUG9zZSAxNicsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQb3NlXzAxNi5ibG9iJykpO1xyXG5cclxuICAgICAgc3ViTWVudSA9IG1lbnUuYWRkU3ViTWVudSgnSGVhZHMnLCAnSGVhZHNTdWJNZW51Jyk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCAxJywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQxLmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCAyJywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQyLmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCAzJywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQzLmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA0JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQ0LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA1JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQ1LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA2JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQ2LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA3JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQ3LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA4JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQ4LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCA5JywgKCkgPT4gdGhpcy5sb2FkTW9kZWwoJ0hlYWQ5LmJsb2InKSk7XHJcbiAgICAgIHN1Yk1lbnUuYWRkSXRlbSgnSGVhZCAxMCcsICgpID0+IHRoaXMubG9hZE1vZGVsKCdIZWFkMTAuYmxvYicpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVDdHJsc0VsZW1lbnRzKHBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy50aHJlc2hvbGRDdHJsID0gbmV3IFRocmVzaG9sZEN0cmwoXHJcbiAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgdGhpcyxcclxuICAgICAgICAgKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci50aHJlc2hvbGQxID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci50aHJlc2hvbGQyID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnSGlnaGxpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ID0gdGhpcy5oaWdobGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHRMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnTGlnaHRMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnTGlnaHQgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5saWdodExpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtCTEFDS19DT0xPUiwgV0hJVEVfQ09MT1JdLFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5saWdodExpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyLnJhbmdlLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ01pZExpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdNaWQgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5taWRMaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbQkxBQ0tfQ09MT1IsIFdISVRFX0NPTE9SXSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIubWlkTGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm1pZExpZ2h0U2xpZGVyLnJhbmdlLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuZGFya0xpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdEYXJrTGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ0RhcmsgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW0JMQUNLX0NPTE9SLCBXSElURV9DT0xPUl0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLmRhcmtMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZGFya0xpZ2h0U2xpZGVyLnJhbmdlLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuc2hhZG93U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdTaGFkb3cnLFxyXG4gICAgICAgICBsYWJlbDogJ1NoYWRvdycsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLnNoYWRvdyAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbQkxBQ0tfQ09MT1IsIFdISVRFX0NPTE9SXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNoYWRvdyA9IHRoaXMuc2hhZG93U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLnNoYWRvdykudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmxvYWRNb2RlbCh0aGlzLnF1ZXJ5KTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZykge1xyXG5cclxuICAgICAgLy8gaWYgbm90aGluZyB3YXMgc3BlY2lmaWVkLCBsb2FkIGFuIGludGVyZXN0aW5nIG1vZGVsXHJcbiAgICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICAgcXVlcnkgPSAnUG9zZV8wMi5ibG9iJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICd0cmlhbmdsZXNwaGVyZScpIHtcclxuICAgICAgICAgbGV0IHJhZGl1cyA9IDAuNzU7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlU3BoZXJlKDEwMCwgcmFkaXVzLCBjZW50ZXIpXHJcbiAgICAgICAgIHRPYmouY29tcHV0ZU5vcm1hbHMoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICd0cmlhbmdsZWN1YmUnKSB7XHJcbiAgICAgICAgIGxldCBzaXplID0gMC44O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZUN1YmUoc2l6ZSwgY2VudGVyKTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcub2JqJykpIHtcclxuXHJcbiAgICAgICAgIHRoaXMubG9hZE1vZGVsRmlsZShxdWVyeSkudGhlbigodE9iaikgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgICAgdGhpcy5vcmllbnQodE9iaiwgcXVlcnkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICBsZXQgdG9rZW5zID0gcXVlcnkuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgbGV0IHByb3BGaWxlID0gdG9rZW5zWzBdICsgJ19Qcm9wLicgKyB0b2tlbnNbMV07XHJcbiAgICAgICAgICAgICAgIHRoaXMubG9hZE1vZGVsRmlsZShwcm9wRmlsZSkudGhlbigodFByb3BPYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgdE9iai5jb21iaW5lKHRQcm9wT2JqKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9yaWVudCh0T2JqLCBxdWVyeSk7XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5ibG9iJykpIHtcclxuXHJcbiAgICAgICAgIHRoaXMubG9hZE1vZGVsRmlsZShxdWVyeSkudGhlbigodE9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWVudCh0T2JqLCBxdWVyeSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIFRPRE8gbXVsdGkgbGluZSBlcnJvciBtZXNzYWdlcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSAnVW5rbm93biBNb2RlbDonICsgcXVlcnk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWxGaWxlKGZpbGU6IHN0cmluZyk6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUcmlhbmdsZU9iaj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgLy8gaWYgYSBwcmV2aW91cyB3b3JrZXIgZXhpc3RzLCBjbG9zZSBpdFxyXG4gICAgICAgICBpZiAodGhpcy53b3JrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy53b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMud29ya2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLndvcmtlciA9IG5ldyBMb2FkZXJXb3JrZXIoKTtcclxuICAgICAgICAgbGV0IHRTdGFydCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfTogeyBkYXRhOiBhbnkgfSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAvLyBhdm9pZCBmbGFzaGluZyBtZXNzYWdlcyBmb3IgdGhpbmdzIHRoYXQgaGFwcGVuIHZlcnkgcXVpY2tseS5cclxuICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0U3RhcnQgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LmlubmVyVGV4dCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IHRPYmogPSBUcmlhbmdsZU9iai5mcm9tRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgIHRoaXMud29ya2VyLnRlcm1pbmF0ZSgpO1xyXG4gICAgICAgICAgICAgICB0aGlzLndvcmtlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgIHJlc29sdmUodE9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKGZpbGUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcmllbnQodE9iajogVHJpYW5nbGVPYmosIHF1ZXJ5OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIC8vIG9yaWVudCBlYWNoIGZpbGUgc28gdGhhdCBpdCBpcyBmYWNpbmcgZm9yd2FyZFxyXG4gICAgICBsZXQgZmlsZSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGZpbGUgPSBmaWxlLnNwbGl0KCcuJylbMF07XHJcbiAgICAgIHN3aXRjaCAoZmlsZSkge1xyXG4gICAgICAgICBjYXNlICdza3VsbDEnOlxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFgodG9SYWQoOTApKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKDE4MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgJ3BlbHZpcyc6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WCh0b1JhZCgxMSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFoodG9SYWQoLTg3KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAnd29sZic6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSh0b1JhZCgtMTQwKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WCh0b1JhZCg1KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAnc2hlZXBoZWFkJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKC0xNjApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdwb3NlMSc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAndGVhcG90JzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKDkwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKDE4MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVNsaWRlcnMoKSB7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5oaWdobGlnaHQ7XHJcbiAgICAgIHRoaXMubGlnaHRMaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIubGlnaHRMaWdodDtcclxuICAgICAgdGhpcy5taWRMaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIubWlkTGlnaHQ7XHJcbiAgICAgIHRoaXMuZGFya0xpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQ7XHJcbiAgICAgIHRoaXMuc2hhZG93U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5zaGFkb3c7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdG9nZ2xlTW9kZSgpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLnBvaW50ZXJNb2RlKSB7XHJcbiAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuVmlldzpcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLkxpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmJhbGxDb2xvciA9IHRoaXMucmVuZGVyZXIueWVsbG93O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuTGlnaHQ6XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmJhbGxDb2xvciA9IFdISVRFX0NPTE9SLnRvR2xDb2xvcigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRyYWcocG9zOiBnbFZlYzIsIGRlbHRhOiBnbFZlYzIpIHtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuVmlldykge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFgoZGVsdGEueSAqIDAuMDEpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFkoZGVsdGEueCAqIDAuMDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLkxpZ2h0KSB7XHJcblxyXG4gICAgICAgICBsZXQgbWF0WSA9IGdsTWF0NC5mcm9tUm90WSh0b1JhZChkZWx0YS54KSk7XHJcbiAgICAgICAgIGxldCBtYXRYID0gZ2xNYXQ0LmZyb21Sb3RYKHRvUmFkKGRlbHRhLnkpKTtcclxuICAgICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzQoW1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi54LFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi55LFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi56LFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgIF0pO1xyXG4gICAgICAgICB2ZWMgPSBtYXRYLm11bHRWKHZlYyk7XHJcbiAgICAgICAgIHZlYyA9IG1hdFkubXVsdFYodmVjKTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueCA9IHZlYy52YWx1ZXNbMF07XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnkgPSB2ZWMudmFsdWVzWzFdO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi56ID0gdmVjLnZhbHVlc1syXTtcclxuXHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUuXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUuXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIG9uQ2xpY2socG9zOiBnbFZlYzIpOiBib29sZWFuIHtcclxuXHJcbiAgICAgIGxldCBzaXplID0gZ2wuY2FudmFzLndpZHRoO1xyXG5cclxuICAgICAgLy8gVE9ETyBnZXQgdGhlIHNpemUgb2YgdGhlIGFyZWEgZnJvbSB0aGUgcmVuZGVyZXJcclxuICAgICAgaWYgKHBvcy54IDwgc2l6ZSAvIDUgJiYgcG9zLnkgPCBzaXplIC8gNSkge1xyXG4gICAgICAgICB0aGlzLnRvZ2dsZU1vZGUoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmNsaWNrKHBvcy54IC8gc2l6ZSwgMSAtIChwb3MueSAvIHNpemUpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblNjYWxlKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuem9vbShjaGFuZ2UpO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvblJvdGF0ZShhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucm90WihkZWx0YSk7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uVHJhbnNsYXRlKGRlbHRhOiBnbFZlYzIpIHtcclxuXHJcbiAgICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgZmFjdG9yID0gMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlci50cmFuc2xhdGVWaWV3KG5ldyBnbFZlYzIoW1xyXG4gICAgICAgICBmYWN0b3IgKiAyICogZGVsdGEueCAvIGdsLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgZmFjdG9yICogMiAqIGRlbHRhLnkgLyBnbC5jYW52YXMuaGVpZ2h0XHJcbiAgICAgIF0pKTtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgLy8gVE9ETyBvbmx5IHJlZHJhdyB0aGUgdGhyZXNob2xkIGN0cmwgaWYgYSBzbGlkZXIgY2hhbmdlZFxyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcigpO1xyXG4gICAgICAgICB0aGlzLnRocmVzaG9sZEN0cmwuZHJhdygpO1xyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2F2ZSgpIHtcclxuICAgICAgbGV0IHRPYmogPSB0aGlzLnJlbmRlcmVyLnRPYmo7XHJcblxyXG4gICAgICBsZXQgbmFtZSA9IHRPYmoubmFtZS5zcGxpdCgnLicpWzBdICsgJy5ibG9iJztcclxuICAgICAgc2F2ZUFzKHRPYmoudG9CbG9iKCksIG5hbWUpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGFzeW5jIHRlc3QoKSB7XHJcbiAgICAgIC8vIHVuY29tbWVudCB0byB0ZXN0IEJsb2JzXHJcbiAgICAgIGxldCBibG9iID0gdGhpcy5yZW5kZXJlci50T2JqLnRvQmxvYigpO1xyXG4gICAgICBsZXQgdE9iaiA9IGF3YWl0IFRyaWFuZ2xlT2JqLmZyb21CbG9iKGJsb2IpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0T2JqLm5hbWUpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSAnLi9nbE1hdCc7XHJcbmltcG9ydCB7IGdsVmVjMywgZ2xWZWMyIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB2ZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BsYW5lc1ZlcnRleC5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50U291cmNlIGZyb20gJy4vc2hhZGVycy9QbGFuZXNGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgZ2wsIGNsYW1wLCBtaXgsIHRvUmFkLCB0b0RlZyB9IGZyb20gJy4vR2xvYmFscyc7XHJcbmltcG9ydCB7IFRyaWFuZ2xlU3BoZXJlIH0gZnJvbSAnLi9UcmlhbmdsZVNwaGVyZSc7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gJy4vZ2xVbmlmb3JtJztcclxuaW1wb3J0IHsgZ2xDb21waWxlciB9IGZyb20gJy4vZ2xDb21waWxlcic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IGdsT2JqZWN0IH0gZnJvbSAnLi9nbE9iamVjdCc7XHJcbmltcG9ydCB7IFRyaWFuZ2xlQXJyb3cgfSBmcm9tICcuL1RyaWFuZ2xlQXJyb3cnO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSAnLi9nbENvbG9yJztcclxuaW1wb3J0IHsgVGV4dHVyZVJlbmRlcmVyIH0gZnJvbSAnLi9UZXh0dXJlUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBnbFRleHR1cmVGcmFtZUJ1ZmZlciwgRnJhbWVCdWZmZXJTdHlsZSB9IGZyb20gJy4vZ2xUZXh0dXJlRnJhbWVCdWZmZXInO1xyXG5pbXBvcnQgeyB0ZXh0dXJlU2l6ZSB9IGZyb20gJy4vVGhyZXNob2xkQ3RybCc7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gJy4vaHRtbENvbG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWxsSW1hZ2VEYXRhIHtcclxuICAgcHVibGljIGltYWdlOiBJbWFnZURhdGE7XHJcbiAgIHB1YmxpYyBiYWxsQ2VudGVyOiBnbFZlYzI7XHJcbiAgIHB1YmxpYyBiYWxsUmFkaXVzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgREVGQVVMVF9USFJFU0hPTEQxID0gNDA7XHJcbmV4cG9ydCBsZXQgREVGQVVMVF9USFJFU0hPTEQyID0gNzA7XHJcblxyXG5jb25zdCBISUdITElHSFRfRElGRiA9IDAuMTtcclxuY29uc3QgQkFMTF9SQURJVVMgPSAwLjU7XHJcbmNvbnN0IElOSVRJQUxfTElHSFRfRElSRUNUSU9OID0gWzEuMCwgLTEuMCwgMS41XTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IHJlbmRlcnMgdHJpYW5nbGVzIGFuZCBhIGxpZ2h0IHNvdXJjZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYW5lc1JlbmRlcmVyIHtcclxuXHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgIHByaXZhdGUgbGlnaHRWaWV3ID0gbmV3IGdsTWF0NCgpO1xyXG4gICBwcml2YXRlIHByb2plY3Rpb24gPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICBwcml2YXRlIHVDb2xvciA9IG5ldyBnbENvbG9yKFsxLCAxLCAxXSk7XHJcbiAgIHByaXZhdGUgdVRocmVzaG9sZDEgPSBERUZBVUxUX1RIUkVTSE9MRDE7XHJcbiAgIHByaXZhdGUgdVRocmVzaG9sZDIgPSBERUZBVUxUX1RIUkVTSE9MRDI7XHJcblxyXG4gICBwcml2YXRlIHVIaWdobGlnaHQ6IG51bWJlciA9IDEuMDtcclxuICAgcHJpdmF0ZSB1TGlnaHRMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVNaWRMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVEYXJrTGlnaHQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB1U2hhZG93OiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAvLyBzaXplIG9mIHRoZSBzbWFsbGVyIHZpZXdcclxuICAgcHJpdmF0ZSByZWFkb25seSBtaW5pU2l6ZSA9IDAuMjtcclxuXHJcbiAgIHByaXZhdGUgdVVzZVRocmVzaG9sZHMgPSBmYWxzZTtcclxuXHJcbiAgIHByaXZhdGUgYmFsbDogZ2xPYmplY3Q7XHJcbiAgIHByaXZhdGUgYXJyb3c6IGdsT2JqZWN0O1xyXG4gICBwcml2YXRlIG9iajogZ2xPYmplY3Q7XHJcblxyXG4gICBwcml2YXRlIHNoYWRvd0ZyYW1lQnVmZmVyOiBnbFRleHR1cmVGcmFtZUJ1ZmZlcjtcclxuICAgcHJpdmF0ZSB0ZXh0dXJlRnJhbWVCdWZmZXI6IGdsVGV4dHVyZUZyYW1lQnVmZmVyO1xyXG5cclxuICAgcHVibGljIHVMaWdodERpcmVjdGlvbiA9IG5ldyBnbFZlYzMoSU5JVElBTF9MSUdIVF9ESVJFQ1RJT04pO1xyXG5cclxuICAgcHVibGljIGJhbGxDb2xvciA9IG5ldyBnbENvbG9yKFsxLCAxLCAxXSk7XHJcbiAgIHB1YmxpYyByZWFkb25seSB5ZWxsb3cgPSBuZXcgZ2xDb2xvcihbMS4wLCAwLjksIDAuN10pO1xyXG4gICBwdWJsaWMgd2hpdGVDb2xvciA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuICAgcHVibGljIGJsYWNrQ29sb3IgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAwXSk7XHJcblxyXG4gICBwcml2YXRlIHpvb21GYWN0b3I6IG51bWJlciA9IDE7XHJcbiAgIHByaXZhdGUgdHJhbnNsYXRpb24gPSBuZXcgZ2xWZWMyKFswLCAwXSk7XHJcbiAgIHB1YmxpYyBzaG93U2hhZG93TWFwID0gZmFsc2U7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuXHJcbiAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZSh2ZXJ0ZXhTb3VyY2UsIGZyYWdtZW50U291cmNlKTtcclxuXHJcbiAgICAgIGxldCB0QmFsbCA9IG5ldyBUcmlhbmdsZVNwaGVyZSgxMDAsIEJBTExfUkFESVVTLCBuZXcgZ2xWZWMzKFswLCAwLCAwXSkpO1xyXG4gICAgICB0QmFsbC5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgIHRoaXMuYmFsbCA9IG5ldyBnbE9iamVjdCh0QmFsbCwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCB0QXJyb3cgPSBuZXcgVHJpYW5nbGVBcnJvdygpO1xyXG4gICAgICB0aGlzLmFycm93ID0gbmV3IGdsT2JqZWN0KHRBcnJvdywgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IGdsTWF0NC5tYWtlT3J0aG8oLTEsIDEsIC0xLCAxLCAtMTAwLCAxMDApO1xyXG4gICB9XHJcblxyXG4gICAvL1xyXG4gICAvLyBUaGUgZnVuY3Rpb25zIGJlbG93IGNoYW5nZSB0aGUgbW9kZWxcclxuICAgLy9cclxuICAgcHVibGljIHJvdFgoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm9iai5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMub2JqLnJvdFkoYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5vYmoucm90WihhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5vYmouc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5vYmoudHJhbnNsYXRlKG9mZnNldCk7XHJcbiAgIH1cclxuXHJcbiAgIC8vXHJcbiAgIC8vIFRoZSBmdW5jdGlvbnMgYmVsb3cgY2hhbmdlIG91ciB2aWV3IG9mIHRoZSBtb2RlbFxyXG4gICAvL1xyXG4gICBwdWJsaWMgem9vbSh6b29tOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy56b29tRmFjdG9yICo9IHpvb207XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0cmFuc2xhdGVWaWV3KGRlbHRhOiBnbFZlYzIpIHtcclxuICAgICAgdGhpcy50cmFuc2xhdGlvbi54ICs9IGRlbHRhLng7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRpb24ueSArPSBkZWx0YS55O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhpZ2hsaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51SGlnaGxpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgaGlnaGxpZ2h0KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudUhpZ2hsaWdodCA9IE1hdGgubWF4KHZhbCwgSElHSExJR0hUX0RJRkYpO1xyXG4gICAgICB0aGlzLnVTaGFkb3cgPSBNYXRoLm1pbih0aGlzLnVTaGFkb3csIHRoaXMudUhpZ2hsaWdodCAtIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbGlnaHRMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51TGlnaHRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IG1pZExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVNaWRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IGRhcmtMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51RGFya0xpZ2h0O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHNoYWRvdygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51U2hhZG93O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgc2hhZG93KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHZhbCwgMSAtIEhJR0hMSUdIVF9ESUZGKTtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gTWF0aC5tYXgodGhpcy51SGlnaGxpZ2h0LCB0aGlzLnVTaGFkb3cgKyBISUdITElHSFRfRElGRik7XHJcbiAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHRocmVzaG9sZDEoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudVRocmVzaG9sZDE7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB0aHJlc2hvbGQxKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDEgPSB2YWw7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDIgPSBNYXRoLm1heCh0aGlzLnVUaHJlc2hvbGQyLCB2YWwpO1xyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQyO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gTWF0aC5taW4odGhpcy51VGhyZXNob2xkMSwgdmFsKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgdE9iaigpOiBUcmlhbmdsZU9iaiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9iai50T2JqO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbG9yQXQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICBkZWcgPSBjbGFtcChkZWcsIDAsIDkwKTtcclxuICAgICAgcmV0dXJuIG1peCh0aGlzLnVTaGFkb3csIHRoaXMudUhpZ2hsaWdodCAtIEhJR0hMSUdIVF9ESUZGLCBNYXRoLmNvcyh0b1JhZChkZWcpKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdGhyZXNob2xkQXQoY29sb3I6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIGxldCBhY29zID0gKGNvbG9yIC0gdGhpcy51U2hhZG93KSAvICh0aGlzLnVIaWdobGlnaHQgLSBISUdITElHSFRfRElGRiAtIHRoaXMudVNoYWRvdyk7XHJcbiAgICAgIHJldHVybiB0b0RlZyhNYXRoLmFjb3MoYWNvcykpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZUNvbG9ycygpIHtcclxuICAgICAgdGhpcy51TGlnaHRMaWdodCA9IHRoaXMuY29sb3JBdCgwLjUgKiB0aGlzLnRocmVzaG9sZDEpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IHRoaXMuY29sb3JBdChtaXgodGhpcy50aHJlc2hvbGQxLCB0aGlzLnRocmVzaG9sZDIsIDAuNSkpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSB0aGlzLmNvbG9yQXQoKHRoaXMudGhyZXNob2xkMiArIDkwKSAvIDIpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2V0TW9kZWwodE9iajogVHJpYW5nbGVPYmopIHtcclxuICAgICAgaWYgKHRoaXMub2JqKSB7XHJcbiAgICAgICAgIHRoaXMub2JqLmRlbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub2JqID0gbmV3IGdsT2JqZWN0KHRPYmosIHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICBsZXQgY2VudGVyID0gdE9iai5jZW50ZXI7XHJcbiAgICAgIHRoaXMub2JqLnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFstY2VudGVyLngsIC1jZW50ZXIueSwgLWNlbnRlci56XSkpO1xyXG4gICAgICB0aGlzLm9iai5zY2FsZSgyLjAgLyBNYXRoLnNxcnQodE9iai53aWR0aCAqIHRPYmoud2lkdGggKyB0T2JqLmhlaWdodCAqIHRPYmouaGVpZ2h0ICsgdE9iai5kZXB0aCAqIHRPYmouZGVwdGgpKTtcclxuXHJcbiAgICAgIC8vIHJlc2V0IHRoZSB2aWV3IGFuZCB0aGUgbGlnaHRcclxuICAgICAgdGhpcy52aWV3ID0gZ2xNYXQ0LmlkZW50aXR5KCk7XHJcbiAgICAgIHRoaXMuem9vbUZhY3RvciA9IDE7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRpb24gPSBuZXcgZ2xWZWMyKFswLCAwXSk7XHJcbiAgICAgIHRoaXMudUxpZ2h0RGlyZWN0aW9uID0gbmV3IGdsVmVjMyhbMS4wLCAtMS4wLCAxLjVdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIHRoaXMucmVuZGVyVG9TaGFkb3dNYXAoKTtcclxuICAgICAgdGhpcy5yZW5kZXJUb1NjcmVlbigpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldFN0ZFVuaWZvcm1zKCk6IGdsVW5pZm9ybSB7XHJcblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy52aWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgnbGlnaHRWaWV3JywgdGhpcy5saWdodFZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdwcm9qZWN0aW9uJywgdGhpcy5wcm9qZWN0aW9uLnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgdGhpcy51TGlnaHREaXJlY3Rpb24pO1xyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAxKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51VXNlVGhyZXNob2xkcyA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgdW5pLnNldCgndVRocmVzaG9sZDEnLCAxIC0gTWF0aC5zaW4odG9SYWQodGhpcy50aHJlc2hvbGQxICsgOTApKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VUaHJlc2hvbGQyJywgMSAtIE1hdGguc2luKHRvUmFkKHRoaXMudGhyZXNob2xkMiArIDkwKSkpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUxpZ2h0SW50ZW5zaXR5JywgdGhpcy51SGlnaGxpZ2h0IC0gdGhpcy51U2hhZG93IC0gSElHSExJR0hUX0RJRkYpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIHRoaXMudVNoYWRvdyk7XHJcbiAgICAgIHVuaS5zZXQoJ3VIaWdobGlnaHQnLCB0aGlzLnVIaWdobGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHRMaWdodCcsIHRoaXMudUxpZ2h0TGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1TWlkTGlnaHQnLCB0aGlzLnVNaWRMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VEYXJrTGlnaHQnLCB0aGlzLnVEYXJrTGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1U2hhZG93JywgdGhpcy51U2hhZG93KTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VXaGl0ZUNvbG9yJywgdGhpcy53aGl0ZUNvbG9yLnRvR2xDb2xvcigpKTtcclxuICAgICAgdW5pLnNldCgndUJsYWNrQ29sb3InLCB0aGlzLmJsYWNrQ29sb3IudG9HbENvbG9yKCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHVuaTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldEJhbGxJbWFnZSgpOiBCYWxsSW1hZ2VEYXRhIHtcclxuXHJcbiAgICAgIGlmICghdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIgPSBuZXcgZ2xUZXh0dXJlRnJhbWVCdWZmZXIodGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCBGcmFtZUJ1ZmZlclN0eWxlLkRlcHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmNvbG9yVGV4dHVyZSk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmNvbG9yVGV4dHVyZSwgMCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuXHJcbiAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoPEVsZW1lbnQ+Z2wuY2FudmFzKTtcclxuICAgICAgbGV0IGNvbG9yID0gaHRtbENvbG9yLmZyb21Dc3Moc3R5bGUuYmFja2dyb3VuZENvbG9yKS50b0dsQ29sb3IoKTtcclxuICAgICAgZ2wuY2xlYXJDb2xvcihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCAxKTtcclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuXHJcbiAgICAgIC8vIGFsd2F5cyByZW5kZXIgd2l0aCBiYW5kc1xyXG4gICAgICB1bmkuc2V0aSgndVVzZVRocmVzaG9sZHMnLCAxKTtcclxuXHJcbiAgICAgIC8vIHNob290IHRoZSBsaWdodCBzdHJhaWdodCBkb3duXHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodERpcmVjdGlvbicsIG5ldyBnbFZlYzMoWzAsIC0xLCAwXSkpO1xyXG5cclxuICAgICAgLy8gZG9uJ3QgY2FzdCBzaGFkb3dzXHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDApO1xyXG5cclxuICAgICAgdW5pLnNldCgndmlldycsIG5ldyBnbE1hdDQoKSk7XHJcblxyXG4gICAgICAvLyBtb3ZlIHRoZSBiYWxsIHRvIHRoZSBsb3dlciBsZWZ0IGFuZCBwYXJ0aWFsbHkgb2Zmc2NyZWVuXHJcbiAgICAgIGNvbnN0IHNjYWxlID0gMS43NTtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IGdsVmVjMyhbLTAuNiwgLTAuNiwgMF0pO1xyXG4gICAgICB0aGlzLmJhbGwuY2xlYXJUcmFuc2Zvcm1zKCk7XHJcbiAgICAgIHRoaXMuYmFsbC5zY2FsZShzY2FsZSk7XHJcbiAgICAgIHRoaXMuYmFsbC50cmFuc2xhdGUob2Zmc2V0KTtcclxuXHJcbiAgICAgIC8vIHJlbmRlciB0aGUgYmFsbFxyXG4gICAgICB0aGlzLmJhbGwuZHJhdygpO1xyXG4gICAgICB0aGlzLmJhbGwuY2xlYXJUcmFuc2Zvcm1zKCk7XHJcblxyXG4gICAgICAvLyBkcmF3IHRoZSBhcnJvd1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgZ2xWZWMzKFsxLCAtMC41LCAwLjVdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgMCwgdHJ1ZSk7XHJcblxyXG4gICAgICAvLyBmaXJzdCByZXNldCB0aGluZ3Mgc28gdGhhdCB3ZSdyZSBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICB0aGlzLmFycm93LmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmFycm93LnNjYWxlKDEuMjUpXHJcbiAgICAgIHRoaXMuYXJyb3cudHJhbnNsYXRlKG5ldyBnbFZlYzMoW29mZnNldC54LCBvZmZzZXQueSArIHNjYWxlICogQkFMTF9SQURJVVMgKyAwLjEsIDAuMF0pKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VXaGl0ZUNvbG9yJywgbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAwLjVdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VCbGFja0NvbG9yJywgaHRtbENvbG9yLmJsYWNrLnRvR2xDb2xvcigpKTtcclxuICAgICAgdW5pLnNldCgndUFtYmllbnRJbnRlbnNpdHknLCAwLjQpO1xyXG4gICAgICB0aGlzLmFycm93LmRyYXcoKTtcclxuXHJcbiAgICAgIGxldCBwaXhlbHMgPSBuZXcgVWludDhBcnJheSh0ZXh0dXJlU2l6ZSAqIHRleHR1cmVTaXplICogNCk7XHJcbiAgICAgIGdsLnJlYWRQaXhlbHMoMCwgMCwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBwaXhlbHMpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBkYXRhIHN0cnVjdHVyZSB3ZSdsbCByZXR1cm5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgQmFsbEltYWdlRGF0YSgpO1xyXG4gICAgICBkYXRhLmltYWdlID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkocGl4ZWxzKSwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplKTtcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgZnJvbSBbLTEsMV0gZHJhd2luZyBzcGFjZSB0byBbMCwxXVxyXG4gICAgICBkYXRhLmJhbGxSYWRpdXMgPSBzY2FsZSAqIEJBTExfUkFESVVTO1xyXG4gICAgICBkYXRhLmJhbGxDZW50ZXIgPSBuZXcgZ2xWZWMyKFtvZmZzZXQueCwgb2Zmc2V0LnldKTtcclxuICAgICAgZGF0YS5iYWxsUmFkaXVzIC89IDI7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlci54ID0gMC41ICogKGRhdGEuYmFsbENlbnRlci54ICsgMSk7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlci55ID0gMC41ICogKGRhdGEuYmFsbENlbnRlci55ICsgMSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSByZW5kZXJUb1NoYWRvd01hcCgpOiB2b2lkIHtcclxuXHJcbiAgICAgIGlmICghdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyID0gbmV3IGdsVGV4dHVyZUZyYW1lQnVmZmVyKGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCwgRnJhbWVCdWZmZXJTdHlsZS5EZXB0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5mcmFtZUJ1ZmZlcik7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICBsZXQgdXAgPSBuZXcgZ2xWZWMzKFswLCAxLCAwXSk7XHJcbiAgICAgIGxldCBtYXQgPSBnbE1hdDQubWFrZUxvb2tBdCh0aGlzLnVMaWdodERpcmVjdGlvbiwgY2VudGVyLCB1cCk7XHJcbiAgICAgIG1hdC5zZXQoMCwgMywgMCk7XHJcbiAgICAgIG1hdC5zZXQoMSwgMywgMCk7XHJcbiAgICAgIG1hdC5zZXQoMiwgMywgMCk7XHJcbiAgICAgIHRoaXMubGlnaHRWaWV3ID0gbWF0O1xyXG5cclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuXHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdmlldyBtYXRyaXggc28gdGhhdCBvdXIgdmlldyBpcyBmcm9tIHRoZSBsaWdodFxyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy5saWdodFZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdwcm9qZWN0aW9uJywgZ2xNYXQ0LmlkZW50aXR5KCkpO1xyXG5cclxuICAgICAgLy8gZG9uJ3QgdHJ5IHRvIHVzZSB0aGUgc2hhZG93IHRleHR1cmUgd2hpbGUgd2UncmUgY3JlYXRpbmcgaXRcclxuICAgICAgdW5pLnNldGkoJ3VVc2VTaGFkb3dzJywgMCk7XHJcblxyXG4gICAgICB0aGlzLm9iai5kcmF3KCk7XHJcblxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSByZW5kZXJUb1NjcmVlbigpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIGRlcHRoIGJ1ZmZlciBmb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBpZiAodGhpcy5zaG93U2hhZG93TWFwKSB7XHJcbiAgICAgICAgIGxldCB0ciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIoKTtcclxuICAgICAgICAgdHIucmVuZGVyKHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuZGVwdGhUZXh0dXJlKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5kZXB0aFRleHR1cmUpXHJcblxyXG4gICAgICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAgICAvLyByZXNldCB0aGUgdmlldyBtYXRyaXhcclxuICAgICAgICAgdGhpcy52aWV3ID0gbmV3IGdsTWF0NCgpO1xyXG4gICAgICAgICB0aGlzLnZpZXcuc2NhbGUodGhpcy56b29tRmFjdG9yKTtcclxuICAgICAgICAgdGhpcy52aWV3LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFt0aGlzLnRyYW5zbGF0aW9uLngsIHRoaXMudHJhbnNsYXRpb24ueSwgMF0pKTtcclxuXHJcbiAgICAgICAgIC8vIGRyYXcgdGhlIG1haW4gb2JqZWN0XHJcbiAgICAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcbiAgICAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgICAgIC8vIGRyYXcgdGhlIG9iamVjdCBpbiB0aGUgdXBwZXIgcmlnaHQgYXQgYSByZWR1Y2VkIHNpemUgYW5kIG9wcG9zaXRlIGJhbmRpbmdcclxuICAgICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICAgICAgIHRoaXMudmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgICAgICAgdGhpcy52aWV3LnNjYWxlKHRoaXMubWluaVNpemUpO1xyXG4gICAgICAgICB0aGlzLnZpZXcudHJhbnNsYXRlKG5ldyBnbFZlYzMoWzEgLSB0aGlzLm1pbmlTaXplLCAxIC0gdGhpcy5taW5pU2l6ZSwgMF0pKTtcclxuICAgICAgICAgdW5pLnNldCgndmlldycsIHRoaXMudmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51VXNlVGhyZXNob2xkcyA/IDAgOiAxLCB0cnVlKTtcclxuICAgICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgICAgLy8gZHJhdyB0aGUgYmFsbFxyXG4gICAgICAgICB0aGlzLmRyYXdCYWxsKCk7XHJcblxyXG4gICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGRyYXdCYWxsKCkge1xyXG5cclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuXHJcbiAgICAgIC8vIHN0b3AgdXNpbmcgdGhlIHNoYWRvd21hcFxyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAwKTtcclxuXHJcbiAgICAgIHRoaXMudmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgICAgdGhpcy52aWV3LnNjYWxlKHRoaXMubWluaVNpemUpO1xyXG4gICAgICB0aGlzLnZpZXcudHJhbnNsYXRlKG5ldyBnbFZlYzMoWy0oMSAtIHRoaXMubWluaVNpemUpLCAxIC0gdGhpcy5taW5pU2l6ZSwgMF0pKTtcclxuICAgICAgdW5pLnNldCgndmlldycsIHRoaXMudmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51VXNlVGhyZXNob2xkcyA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgdW5pLnNldCgndVdoaXRlQ29sb3InLCB0aGlzLmJhbGxDb2xvcik7XHJcbiAgICAgIHVuaS5zZXQoJ3VCbGFja0NvbG9yJywgaHRtbENvbG9yLmJsYWNrLnRvR2xDb2xvcigpKTtcclxuICAgICAgdGhpcy5iYWxsLmRyYXcoKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodERpcmVjdGlvbicsIG5ldyBnbFZlYzMoWzEsIC0wLjUsIDAuNV0pKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCAwLCB0cnVlKTtcclxuXHJcbiAgICAgIC8vIGJhY2sgb3V0IGFuZ2xlcyBhcyBpZiBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICBsZXQgeCA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLng7XHJcbiAgICAgIGxldCB5ID0gdGhpcy51TGlnaHREaXJlY3Rpb24ueTtcclxuICAgICAgbGV0IHogPSB0aGlzLnVMaWdodERpcmVjdGlvbi56O1xyXG5cclxuICAgICAgLy8gc3RhcnQgYnkgbG9va2luZyBkb3duIGZyb20gdGhlIFogZGlyZWN0aW9uXHJcbiAgICAgIGxldCByYWRpdXMgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gTWF0aC5hY29zKHogLyByYWRpdXMpO1xyXG4gICAgICBsZXQgcm90YXRpb25BbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCByZXNldCB0aGluZ3Mgc28gdGhhdCB3ZSdyZSBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICB0aGlzLmFycm93LmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmFycm93LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFswLjAsIDAuNTUsIDAuMF0pKTtcclxuICAgICAgdGhpcy5hcnJvdy5yb3RYKHRvUmFkKDkwKSk7XHJcblxyXG4gICAgICAvLyByb3RhdGUgdG8gbWF0Y2ggdGhlIGxpZ2h0IHNvdXJjZVxyXG4gICAgICB0aGlzLmFycm93LnJvdFkoLWVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgdGhpcy5hcnJvdy5yb3RaKC1yb3RhdGlvbkFuZ2xlKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VXaGl0ZUNvbG9yJywgdGhpcy55ZWxsb3cpO1xyXG4gICAgICB1bmkuc2V0KCd1QmxhY2tDb2xvcicsIGh0bWxDb2xvci5ibGFjay50b0dsQ29sb3IoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbGljayh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgaWYgKHggPiAoMSAtIHRoaXMubWluaVNpemUpICYmIHkgPiAoMSAtIHRoaXMubWluaVNpemUpKSB7XHJcbiAgICAgICAgIHRoaXMudVVzZVRocmVzaG9sZHMgPSAhdGhpcy51VXNlVGhyZXNob2xkcztcclxuICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuICAgICAgdGhpcy5vYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMiB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG50eXBlIFBvaW50ZXJSb3RhdGVGdW5jdGlvbiA9IChhbmdsZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJUcmFuc2xhdGVGdW5jdGlvbiA9IChkZWx0YTogZ2xWZWMyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJTY2FsZUZ1bmN0aW9uID0gKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJEcmFnRnVuY3Rpb24gPSAocG9zOiBnbFZlYzIsIGRlbHRhOiBnbFZlYzIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlclVwRnVuY3Rpb24gPSAoKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJEb3duRnVuY3Rpb24gPSAocG9zOiBnbFZlYzIpID0+IHZvaWQ7XHJcbnR5cGUgUG9pbnRlckRibENsaWNrRnVuY3Rpb24gPSAocG9zOiBnbFZlYzIpID0+IGJvb2xlYW47XHJcbnR5cGUgUG9pbnRlckNsaWNrRnVuY3Rpb24gPSAocG9zOiBnbFZlYzIpID0+IGJvb2xlYW47XHJcblxyXG5jb25zdCBEQkxfQ0xJQ0tfVElNRSA9IDMwMDsgLy8gbXNcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBtYW5hZ2luZyB0b3VjaC9tb3VzZSBldmVudHMgb3ZlciBhIGh0bWwgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvaW50ZXJFdmVudEhhbmRsZXIge1xyXG5cclxuICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgcHVibGljIG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgcHVibGljIG9uVXA6IFBvaW50ZXJVcEZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25Eb3duOiBQb2ludGVyRG93bkZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25TY2FsZTogUG9pbnRlclNjYWxlRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvblJvdGF0ZTogUG9pbnRlclJvdGF0ZUZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25UcmFuc2xhdGU6IFBvaW50ZXJUcmFuc2xhdGVGdW5jdGlvbjtcclxuICAgcHVibGljIG9uQ2xpY2s6IFBvaW50ZXJDbGlja0Z1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25EYmxDbGljazogUG9pbnRlckRibENsaWNrRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRyYWc6IFBvaW50ZXJEcmFnRnVuY3Rpb247XHJcblxyXG4gICBwdWJsaWMgbGFzdFBvczogZ2xWZWMyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaFRpbWU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBwcmltYXJ5VG91Y2hJZDogbnVtYmVyID0gLTE7XHJcbiAgIHByaXZhdGUgc2Vjb25kYXJ5VG91Y2hJZDogbnVtYmVyID0gLTE7XHJcbiAgIHByaXZhdGUgaW5pdGlhbFRvdWNoRGlzdGFuY2U6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBsYXN0VG91Y2hEaXN0YW5jZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaEFuZ2xlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgbGFzdFRvdWNoQ2VudGVyOiBnbFZlYzI7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAvLyBlbGVtZW50Lm9udG91Y2ggaXNuJ3Qgc3VwcG9ydGVkIG9uIGRlc2t0b3AgZGV2aWNlcyBzbyB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpbnN0ZWFkXHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgLy8gcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIHVzaW5nIHRoZSBldmVudFxyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3QgdG91Y2hcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAvLyByZWNvcmQgdGhlIHByaW1hcnkgdG91Y2ggaWRcclxuICAgICAgICAgICAgdGhpcy5wcmltYXJ5VG91Y2hJZCA9IGV2ZW50LnRvdWNoZXNbMF0uaWRlbnRpZmllcjtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbmQgb3V0IG9uRG93bigpIGFuZCBwb3RlbnRpYWxseSBvbkRibENsaWNrKCkgZXZlbnRzXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvcyhldmVudC50b3VjaGVzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHRpbWUgLSB0aGlzLmxhc3RUb3VjaFRpbWUgPCBEQkxfQ0xJQ0tfVElNRSkge1xyXG4gICAgICAgICAgICAgICB0aGlzLm91ckRibENsaWNrKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3VyT25Eb3duKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hUaW1lID0gdGltZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBzZWNvbmQgdG91Y2hcclxuICAgICAgICAgZWxzZSBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDIgJiYgdGhpcy5wcmltYXJ5VG91Y2hJZCA+PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyByZWNvcmQgdGhlIHNlY29uZGFyeSB0b3VjaCBpZC4gSXQgd2lsbCBhbHdheXMgYmUgdGhlIHNlY29uZCBlbGVtZW50IHdoZW5cclxuICAgICAgICAgICAgLy8gdGhlcmUgYXJlIG9ubHkgdHdvIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA9IGV2ZW50LnRvdWNoZXNbMV0uaWRlbnRpZmllcjtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCB2YWx1ZXMgZm9yIGdlc3R1cmVzXHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMuY29tcHV0ZVRvdWNoRGlzdGFuY2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxUb3VjaERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hBbmdsZSA9IHRoaXMuY29tcHV0ZVRvdWNoQW5nbGUoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaENlbnRlciA9IHRoaXMuY29tcHV0ZVRvdWNoQ2VudGVyKGV2ZW50KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAvLyBwcmV2ZW50IHRoZSBicm93c2VyIGZyb20gdXNpbmcgdGhlIGV2ZW50XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAvLyBpZiB0aGUgaW5pdGlhbCB0d28gdG91Y2hlcyBhcmUgYWN0aXZlXHJcbiAgICAgICAgIGlmICh0aGlzLnByaW1hcnlUb3VjaElkID49IDAgJiYgdGhpcy5zZWNvbmRhcnlUb3VjaElkID49IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbmQgb3V0IGdlc3R1cmUgZXZlbnRzXHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMuY29tcHV0ZVRvdWNoRGlzdGFuY2UoZXZlbnQpO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBkaXN0YW5jZSAvIHRoaXMuaW5pdGlhbFRvdWNoRGlzdGFuY2U7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2UgPSBkaXN0YW5jZSAvIHRoaXMubGFzdFRvdWNoRGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMub3VyT25TY2FsZShzY2FsZSwgY2hhbmdlKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hEaXN0YW5jZSA9IGRpc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jb21wdXRlVG91Y2hBbmdsZShldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub3VyT25Sb3RhdGUoYW5nbGUsIGFuZ2xlIC0gdGhpcy5sYXN0VG91Y2hBbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQW5nbGUgPSBhbmdsZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLmNvbXB1dGVUb3VjaENlbnRlcihldmVudCk7XHJcbiAgICAgICAgICAgIC8vIHJldmVyc2UgWSB2YWx1ZXMgc28gdGhlIGJvdHRvbSBpcyB6ZXJvIGluc3RlYWQgb2YgdGhlIHRvcFxyXG4gICAgICAgICAgICBsZXQgZGVsdGEgPSBbY2VudGVyLnggLSB0aGlzLmxhc3RUb3VjaENlbnRlci54LCB0aGlzLmxhc3RUb3VjaENlbnRlci55IC0gY2VudGVyLnldO1xyXG4gICAgICAgICAgICB0aGlzLm91ck9uVHJhbnNsYXRlKG5ldyBnbFZlYzIoZGVsdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZW50ZXIgPSBjZW50ZXI7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gaWYgb25seSB0aGUgaW5pdGlhbCB0b3VjaCBpcyBhY3RpdmVcclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wcmltYXJ5VG91Y2hJZCA+PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBzZW5kIG91dCB0aGUgZHJhZyBldmVudFxyXG4gICAgICAgICAgICBsZXQgdG91Y2ggPSB0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnByaW1hcnlUb3VjaElkKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zKHRvdWNoKTtcclxuICAgICAgICAgICAgdGhpcy5vdXJPbkRyYWcocG9zKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgIC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSB1c2luZyB0aGUgZXZlbnRcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLnNlY29uZGFyeVRvdWNoSWQgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5zZWNvbmRhcnlUb3VjaElkKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvdWNoSWQgPSAtMTtcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGlmIHdlIGxpZnRlZCB0aGUgc2Vjb25kIGZpbmdlciwgYnV0IG5vdCB0aGUgZmlyc3QsIGdvIGJhY2tcclxuICAgICAgICAgICAgICAgLy8gdG8gdGhlIGRyYWcgZ2VzdHVyZSwgYnV0IGFkanVzdCB0aGUgcmVtZW1iZXJkIHBvc2l0aW9uIHRvXHJcbiAgICAgICAgICAgICAgIC8vIGJlIHRoZSBjdXJyZW50IG9uZSBzbyB0aGF0IHRoaW5ncyBkb24ndCBqdW1wXHJcbiAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMucHJpbWFyeVRvdWNoSWQpO1xyXG4gICAgICAgICAgICAgICBpZiAodG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0UG9zID0gdGhpcy5nZXRQb3ModG91Y2gpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKHRoaXMucHJpbWFyeVRvdWNoSWQgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRUb3VjaChldmVudCwgdGhpcy5wcmltYXJ5VG91Y2hJZCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wcmltYXJ5VG91Y2hJZCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5vdXJPblVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCA9PT0gLTEgfHwgdGhpcy5wcmltYXJ5VG91Y2hJZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVG91Y2hEaXN0YW5jZSA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaERpc3RhbmNlID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRvdWNoQW5nbGUgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hDZW50ZXIgPSBuZXcgZ2xWZWMyKFstMSwgLTFdKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgbGV0IHBvcyA9IG5ldyBnbFZlYzIoWyg8YW55PmV2ZW50KS5sYXllclgsICg8YW55PmV2ZW50KS5sYXllclldKTtcclxuICAgICAgICAgdGhpcy5vdXJPbkRvd24ocG9zKTtcclxuXHJcbiAgICAgICAgIC8vIGRpc2FibGUgc2VsZWN0aW9uIGJlY2F1c2UgZHJhZ2dpbmcgaXMgdXNlZCBmb3Igcm90YXRpbmcgdGhlIGNhbWVyYSBhbmQgbW92aW5nIG9iamVjdHNcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm91ck9uRHJhZyhwb3MpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZXVwID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub3VyT25VcCgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbmRibGNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIHRoaXMub3VyRGJsQ2xpY2socG9zKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFRvdWNoKGV2ZW50OiBUb3VjaEV2ZW50LCBpZDogbnVtYmVyKTogVG91Y2gge1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbaV07XHJcbiAgICAgICAgIGlmICh0b3VjaC5pZGVudGlmaWVyID09PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG91Y2g7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbm8gbWF0Y2ggd2FzIGZvdW5kXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFBvcyh0b3VjaDogVG91Y2gpOiBnbFZlYzIge1xyXG4gICAgICBsZXQgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzIoW3RvdWNoLmNsaWVudFggLSByZWN0LngsIHRvdWNoLmNsaWVudFkgLSByZWN0LnldKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRUb3VjaGVzKGV2ZW50OiBUb3VjaEV2ZW50KTogeyBwcmltYXJ5VG91Y2g6IFRvdWNoLCBzZWNvbmRhcnlUb3VjaDogVG91Y2ggfSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5wcmltYXJ5VG91Y2hJZCA8IDAgfHwgdGhpcy5zZWNvbmRhcnlUb3VjaElkIDwgMCkge1xyXG4gICAgICAgICB0aHJvdyBFcnJvcignVHdvIHRvdWNoZXMgZXhwZWN0ZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgcHJpbWFyeVRvdWNoOiB0aGlzLmdldFRvdWNoKGV2ZW50LCB0aGlzLnByaW1hcnlUb3VjaElkKSxcclxuICAgICAgICAgc2Vjb25kYXJ5VG91Y2g6IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMuc2Vjb25kYXJ5VG91Y2hJZCksXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb21wdXRlVG91Y2hEaXN0YW5jZShldmVudDogVG91Y2hFdmVudCk6IG51bWJlciB7XHJcblxyXG4gICAgICBsZXQgdG91Y2hlcyA9IHRoaXMuZ2V0VG91Y2hlcyhldmVudCk7XHJcblxyXG4gICAgICBsZXQgeDEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5YO1xyXG4gICAgICBsZXQgeTEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5ZO1xyXG4gICAgICBsZXQgeDIgPSB0b3VjaGVzLnNlY29uZGFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoKHgyIC0geDEpICogKHgyIC0geDEpICsgKHkyIC0geTEpICogKHkyIC0geTEpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb21wdXRlVG91Y2hBbmdsZShldmVudDogVG91Y2hFdmVudCk6IG51bWJlciB7XHJcblxyXG4gICAgICBsZXQgdG91Y2hlcyA9IHRoaXMuZ2V0VG91Y2hlcyhldmVudCk7XHJcblxyXG4gICAgICBsZXQgeDEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5YO1xyXG4gICAgICBsZXQgeTEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5ZO1xyXG4gICAgICBsZXQgeDIgPSB0b3VjaGVzLnNlY29uZGFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXB1dGVUb3VjaENlbnRlcihldmVudDogVG91Y2hFdmVudCk6IGdsVmVjMiB7XHJcblxyXG4gICAgICBsZXQgdG91Y2hlcyA9IHRoaXMuZ2V0VG91Y2hlcyhldmVudCk7XHJcblxyXG4gICAgICBsZXQgeDEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5YO1xyXG4gICAgICBsZXQgeTEgPSB0b3VjaGVzLnByaW1hcnlUb3VjaC5zY3JlZW5ZO1xyXG4gICAgICBsZXQgeDIgPSB0b3VjaGVzLnNlY29uZGFyeVRvdWNoLnNjcmVlblg7XHJcbiAgICAgIGxldCB5MiA9IHRvdWNoZXMuc2Vjb25kYXJ5VG91Y2guc2NyZWVuWTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMyKFsoeDEgKyB4MikgLyAyLCAoeTEgKyB5MikgLyAyXSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25Eb3duKHBvczogZ2xWZWMyKSB7XHJcblxyXG4gICAgICAvLyBjaGVjayBmb3IgYSBjbGljayBoYW5kbGVyXHJcbiAgICAgIGlmICh0aGlzLm9uQ2xpY2sgJiYgdGhpcy5vbkNsaWNrKHBvcy5jbG9uZSgpKSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgbm90IGhhbmRsZWQgYnkgYSBjbGljayBoYW5kZXIsIHNlbmQgdGhlIG9uRG93biBldmVudFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmxhc3RQb3MgPSBwb3MuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLm9uRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihwb3MuY2xvbmUoKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uVXAoKSB7XHJcblxyXG4gICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub25VcCkge1xyXG4gICAgICAgICB0aGlzLm9uVXAoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uRHJhZyhwb3M6IGdsVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5vbkRyYWcpIHtcclxuICAgICAgICAgbGV0IGRlbHRhID0gbmV3IGdsVmVjMihbcG9zLnggLSB0aGlzLmxhc3RQb3MueCwgcG9zLnkgLSB0aGlzLmxhc3RQb3MueV0pO1xyXG4gICAgICAgICB0aGlzLm9uRHJhZyhwb3MuY2xvbmUoKSwgZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdFBvcyA9IHBvcy5jbG9uZSgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ckRibENsaWNrKHBvczogZ2xWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uRGJsQ2xpY2spIHtcclxuICAgICAgICAgdGhpcy5vbkRibENsaWNrKHBvcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPblNjYWxlKHNjYWxlOiBudW1iZXIsIGNoYW5nZTogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uU2NhbGUpIHtcclxuICAgICAgICAgdGhpcy5vblNjYWxlKHNjYWxlLCBjaGFuZ2UpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25Sb3RhdGUoYW5nbGU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICBpZiAodGhpcy5vblJvdGF0ZSkge1xyXG4gICAgICAgICB0aGlzLm9uUm90YXRlKGFuZ2xlLCBkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPblRyYW5zbGF0ZShkZWx0YTogZ2xWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uVHJhbnNsYXRlKSB7XHJcbiAgICAgICAgIHRoaXMub25UcmFuc2xhdGUoZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsIi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBsb2dnaW5nIHRpbWluZyBtZXNzYWdlcyBmb3IgcHJvZmlsZSBjb2RlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZmlsZXIge1xyXG4gICAvLyB0aGUgbGFzdCB0aW1lIHN0YW1wXHJcbiAgIHByaXZhdGUgdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgcHVibGljIGdldCBlbGFwc2VkTXMoKSB7XHJcbiAgICAgIHJldHVybiAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnQpO1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgKiBQcmludHMgYSBtZXNzYWdlIHRvIGNvbnNvbGUgb2YgdGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgbGFzdCBtYXJrXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIHByaW50IHdpdGggdGhlIHRpbWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnICsgJyAnICsgdGhpcy5lbGFwc2VkTXMudG9GaXhlZCgxKSArICcgbXMnKTtcclxuICAgICAgdGhpcy5tYXJrKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGRhdGVzIHRoZSB0aW1lc3RhbXAgdG8gbm93XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFyaygpIHtcclxuICAgICAgdGhpcy50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gXCIuL0NvbG9yUmFuZ2VcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yV2l0aEFscGhhIH0gZnJvbSBcIi4vaHRtbENvbG9yV2l0aEFscGhhXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhIHBhc3NlZCB0byB0aGUgU2xpZGVyIGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJTZXR1cCB7XHJcbiAgIGlkOiBzdHJpbmcsXHJcbiAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgIG1pbjogbnVtYmVyLFxyXG4gICBtYXg6IG51bWJlcixcclxuICAgdmFsdWU6IG51bWJlcixcclxuICAgY29sb3JzPzogaHRtbENvbG9yW10sXHJcbiAgIG9uaW5wdXQ/OiAoKSA9PiB2b2lkLFxyXG4gICBnZXRUZXh0PzogKHNsaWRlcjogU2xpZGVyKSA9PiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzbGlkZXIgY29tcG9zZWQgb2YgYSBsYWJlbCwgaW5wdXQgcmFuZ2UsIGNvbG9yIHNwYW4gYW5kIHZhbHVlIHNwYW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXIge1xyXG5cclxuICAgcHJpdmF0ZSBfcmFuZ2U6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX2NvbG9yU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF92YWx1ZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JzOiBDb2xvclJhbmdlO1xyXG4gICBwcml2YXRlIF9nZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZztcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgaHRtbCBvYmplY3QuXHJcbiAgICAqIEBwYXJhbSBzZXR1cCBUaGUgc2V0dXAgZGF0YSBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBzZXR1cDogSVNsaWRlclNldHVwKSB7XHJcblxyXG4gICAgICB0aGlzLl9nZXRUZXh0ID0gc2V0dXAuZ2V0VGV4dDtcclxuXHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmlkID0gc2V0dXAuaWQ7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnU2xpZGVyRGl2JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5pZCA9IHNldHVwLmlkICsgJ0xhYmVsJztcclxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ1NsaWRlckxhYmVsJztcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc2V0dXAubGFiZWw7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnR5cGUgPSAncmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5pZCA9IHNldHVwLmlkICsgJ1JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuY2xhc3NOYW1lID0gJ1NsaWRlclJhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UubWluID0gc2V0dXAubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1heCA9IHNldHVwLm1heC50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZSA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5Db2xvcigpO1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KClcclxuICAgICAgfSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl9yYW5nZSk7XHJcblxyXG4gICAgICBpZiAoc2V0dXAuY29sb3JzKSB7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmlkID0gc2V0dXAuaWQgKyAnQ29sb3JTcGFuJztcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJDb2xvclNwYW4nO1xyXG4gICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fY29sb3JTcGFuKTtcclxuXHJcbiAgICAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBjb2xvci5cclxuICAgICAgICAgdGhpcy5jb2xvcnMgPSBzZXR1cC5jb2xvcnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmlkID0gc2V0dXAuaWQgKyAnVmFsdWVTcGFuJztcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJWYWx1ZVNwYW4nO1xyXG4gICAgICAvLyAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pbm5lclRleHQgPSBzZXR1cC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fdmFsdWVTcGFuKTtcclxuXHJcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBzcGFuIHRleHRcclxuICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpO1xyXG5cclxuICAgICAgdGhpcy5fcmFuZ2Uub25pbnB1dCA9IHNldHVwLm9uaW5wdXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBzcGFuIGNvbG9yIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwZGF0ZVNwYW5Db2xvcigpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ29sb3IodGhpcy5fY29sb3JzLmdldCh2YWwpKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnRvSGV4KClcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICogU2V0cyB0aGUgc3BhbiBjb2xvciB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yLlxyXG4gKi9cclxuICAgcHJpdmF0ZSB1cGRhdGVTcGFuVGV4dCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2dldFRleHQpIHtcclxuICAgICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHRoaXMuX2dldFRleHQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGh0bWwgcmFuZ2Ugb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbCByYW5nZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHJhbmdlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciAoYW5kIGFzc29jaWF0ZWQgY29udGVudClcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgdGhlIGRlc2lyZWQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHZhbHVlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnZhbHVlQXNOdW1iZXIgPSB2YWw7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbiBzbGlkZXIgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWluKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1pbik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF4IHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1heCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBjb2xvciBmb3IgdGhlIHNsaWRlclxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCBjb2xvcnMoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIGNvbG9yc1xyXG4gICAgICB0aGlzLl9jb2xvcnMgPSBuZXcgQ29sb3JSYW5nZShjb2xvcnMpO1xyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGdyYWRpZW50IHN0eWxlIGZvciB0aGUgcmFuZ2Ugb2JqZWN0XHJcbiAgICAgIGxldCBncmFkaWVudFN0ciA9ICc5MGRlZyc7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGdyYWRpZW50U3RyICs9ICcsICcgKyBjb2xvcnNbaV0udG9Dc3MoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9yYW5nZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCgnICsgZ3JhZGllbnRTdHIgKyAnKSc7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIHNwYW4gY29sb3IgdG9vXHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBodG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBodG1sQ29sb3JXaXRoQWxwaGEudHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYSBnbENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBnbENvbG9yKCk6IGdsQ29sb3Ige1xyXG4gICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgIGxldCB2YWwgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ycy5nZXQodmFsKS50b0dsQ29sb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFswLCAwLCAwXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFNwaGVyaWNhbCBjb29yZGluYXRlcyBiYXNlZCBvbiB0aGUgV2ViR0wgdmlld2luZyBzeXN0ZW06IHg9bGVmdC1yaWdodCwgeT11cC1kb3duLCB6PW5lYXItZmFyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3BoZXJpY2FsQ29vcmQge1xyXG4gICAvKipcclxuICAgICogVGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsZXZhdGlvbiBmcm9tIHRoZSBmbG9vciB0byB0aGUgcG9pbnQuIDAgYW5kIDE4MCBhcmUgb24gdGhlXHJcbiAgICAqIGZsb29yLiA5MCBwb2ludHMgdXAuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZWxldmF0aW9uQW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGFuZ2xlLCB3aGVuIGxvb2tpbmcgZG93biBmcm9tIHRoZSB0b3AsIHRvIHRoZSBwb2ludC4gMCBwb2ludHMgcmlnaHQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcm90YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcmFkaXVzXHJcbiAgICAqIEBwYXJhbSBlbGV2YXRpb25BbmdsZSBcclxuICAgICogQHBhcmFtIHJvdGF0aW9uQW5nbGUgXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIGVsZXZhdGlvbkFuZ2xlOiBudW1iZXIsIHJvdGF0aW9uQW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgdGhpcy5lbGV2YXRpb25BbmdsZSA9IGVsZXZhdGlvbkFuZ2xlO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uQW5nbGUgPSByb3RhdGlvbkFuZ2xlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHNwaGVyaWNhbCBjb29yZGluYXRlIGZyb20gYSBjYXJ0ZXNpYW4gcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwb3MgVGhlIGNhcnRlc2lhbiBwb2ludC5cclxuICAgICogQHJldHVybnMgVGhlIHNwaGVyaWNhbCBjb29yZGluYXRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tWFlaKHBvczogbnVtYmVyW10pOiBTcGhlcmljYWxDb29yZCB7XHJcblxyXG4gICAgICBsZXQgeCA9IHBvc1swXTtcclxuICAgICAgbGV0IHkgPSBwb3NbMV07XHJcbiAgICAgIGxldCB6ID0gcG9zWzJdO1xyXG5cclxuICAgICAgbGV0IHJhZGl1cyA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xyXG4gICAgICBsZXQgcm90YXRpb25BbmdsZSA9ICgxODAgLyBNYXRoLlBJKSAqIE1hdGguYXRhbjIoeiwgeCk7XHJcbiAgICAgIGxldCBlbGV2YXRpb25BbmdsZSA9ICgxODAgLyBNYXRoLlBJKSAqIE1hdGguYXNpbih5IC8gcmFkaXVzKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgU3BoZXJpY2FsQ29vcmQocmFkaXVzLCBlbGV2YXRpb25BbmdsZSwgcm90YXRpb25BbmdsZSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIHNwaGVyaWNhbCBjb29yZGluYXRlIHRvIGEgY2FydGVzaWFuIGNvb3JkaW5hdGUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgY2FydGVzaWFuIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9YWVooKTogbnVtYmVyW10ge1xyXG5cclxuICAgICAgbGV0IGZsb29yUmFkaXVzID0gdGhpcy5yYWRpdXMgKiBNYXRoLmNvcygoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLmVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHggPSBmbG9vclJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMucm90YXRpb25BbmdsZSk7XHJcbiAgICAgIGxldCB5ID0gdGhpcy5yYWRpdXMgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLmVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHogPSBmbG9vclJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMucm90YXRpb25BbmdsZSk7XHJcblxyXG4gICAgICByZXR1cm4gW3gsIHksIHpdO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB2ZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1RleHR1cmVSZW5kZXJlclZlcnRleC5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50U291cmNlIGZyb20gJy4vc2hhZGVycy9UZXh0dXJlUmVuZGVyZXJGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgZ2wsIGlzTW9iaWxlIH0gZnJvbSAnLi9HbG9iYWxzJztcclxuaW1wb3J0IHsgZ2xDb21waWxlciB9IGZyb20gJy4vZ2xDb21waWxlcic7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBkb2VzIHRoZSB3b3JrIG9mIGJ1aWxkaW5nIHRoZSBQYXRoIFRyYWNlZCB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyIHtcclxuXHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgdmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcblxyXG4gICBwcml2YXRlIHZlcnRpY2VzID0gW1xyXG4gICAgICAtMSwgLTEsXHJcbiAgICAgIC0xLCArMSxcclxuICAgICAgKzEsIC0xLFxyXG4gICAgICArMSwgKzFcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB2ZXJ0ZXggYnVmZmVyIC0gdGhlIGJsb2NrIHdlJ2xsIGRyYXcgb3VyIHJlbmRlcmVkIHRleHR1cmUgb25cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBzaGFkZXJcclxuICAgICAgdGhpcy5wcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZW5kZXIodGV4dHVyZTogV2ViR0xUZXh0dXJlKTogdm9pZCB7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAvLyBzaXplIG9mIHRoZSBhY3R1YWwgY2FudmFzLiBUaGUgdGV4dHVyZSB3ZSBjcmVhdGUgaXMgZHJhd24gdG8gdGhpcyBpdGVtXHJcbiAgICAgIGxldCBzaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgLy8gbm90IHN1cmUgd2h5LCBidXQgdGhpcyBiYXNpY2FsbHkgYmVjb21lcyBmdWxsIHdpZHRoIG9uIG15IHBob25lXHJcbiAgICAgICAgIHNpemUgPSA1MTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICAqL1xyXG4gICAgICAvL2dsLmNhbnZhcy53aWR0aCA9IDEyODtcclxuICAgICAgLy9nbC5jYW52YXMuaGVpZ2h0ID0gMTI4O1xyXG5cclxuICAgICAgbGV0IHNpemUgPSA1MTI7XHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIHNpemUsIHNpemUpO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudmVydGV4QXR0cmlidXRlLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cclxuICAgICAgLy8gZGlzcGxheSB0aGUgbWFpbiBzY3JlZW5cclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgUGxhbmVzQXBwIH0gZnJvbSBcIi4vUGxhbmVzQXBwXCI7XHJcbmltcG9ydCB7IHRvUmFkLCB0b0RlZywgY2xhbXAsIGlzTW9iaWxlIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBnbFZlYzIgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBQb2ludGVyRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vUG9pbnRlckV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG4vLyBUT0RPIG1ha2UgdGhlc2UgdmFyaWFibGVzXHJcbmV4cG9ydCBsZXQgdGV4dHVyZVNpemUgPSAyNTY7XHJcbmV4cG9ydCBsZXQgZGlzcGxheVNpemUgPSAxNTA7XHJcblxyXG5leHBvcnQgdHlwZSBUaHJlc2hvbGRDaGFuZ2VGdW5jdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuXHJcbmNvbnN0IE5PTUlOQUxfRElTUExBWV9TSVpFID0gMTUwO1xyXG5jb25zdCBOT01JTkFMX0tOT0JfTEVOR1RIID0gMjU7XHJcbmNvbnN0IE5PTUlOQUxfS05PQl9SQURJVVMgPSAxMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGRDdHJsIHtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBwcml2YXRlIGhpZGRlbkNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHByaXZhdGUgYXBwOiBQbGFuZXNBcHA7XHJcbiAgIHByaXZhdGUgbW91c2VPZmZzZXQgPSBuZXcgZ2xWZWMyKCk7XHJcbiAgIHByaXZhdGUgaGl0ID0gMDtcclxuICAgcHJpdmF0ZSBoYW5kbGVyOiBQb2ludGVyRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgcHJpdmF0ZSBiYWxsQ2VudGVyOiBnbFZlYzI7XHJcbiAgIHByaXZhdGUgcDE6IGdsVmVjMjtcclxuICAgcHJpdmF0ZSBwMjogZ2xWZWMyO1xyXG5cclxuICAgcHJpdmF0ZSBvblRocmVzaG9sZDFDaGFuZ2U6IFRocmVzaG9sZENoYW5nZUZ1bmN0aW9uO1xyXG4gICBwcml2YXRlIG9uVGhyZXNob2xkMkNoYW5nZTogVGhyZXNob2xkQ2hhbmdlRnVuY3Rpb247XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgIGFwcDogUGxhbmVzQXBwLFxyXG4gICAgICBvblRocmVzaG9sZDFDaGFuZ2U6IFRocmVzaG9sZENoYW5nZUZ1bmN0aW9uLFxyXG4gICAgICBvblRocmVzaG9sZDJDaGFuZ2U6IFRocmVzaG9sZENoYW5nZUZ1bmN0aW9uXHJcbiAgICkge1xyXG5cclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIGRpc3BsYXlTaXplID0gMzAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgdGhpcy5vblRocmVzaG9sZDFDaGFuZ2UgPSBvblRocmVzaG9sZDFDaGFuZ2U7XHJcbiAgICAgIHRoaXMub25UaHJlc2hvbGQyQ2hhbmdlID0gb25UaHJlc2hvbGQyQ2hhbmdlO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgdGhpcy5jYW52YXMuaWQgPSAnVGhyZXNob2xkQ2FudmFzJztcclxuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBkaXNwbGF5U2l6ZTtcclxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZGlzcGxheVNpemU7XHJcblxyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMud2lkdGggPSB0ZXh0dXJlU2l6ZTtcclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMuaGVpZ2h0ID0gdGV4dHVyZVNpemU7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlbkNhbnZhcyk7XHJcblxyXG4gICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgUG9pbnRlckV2ZW50SGFuZGxlcih0aGlzLmNhbnZhcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkRvd24gPSAocG9zOiBnbFZlYzIpID0+IHRoaXMub25Eb3duKHBvcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkRyYWcgPSAocG9zOiBnbFZlYzIsIGRlbHRhOiBnbFZlYzIpID0+IHRoaXMub25EcmFnKHBvcywgZGVsdGEpO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgb25Eb3duKHBvczogZ2xWZWMyKSB7XHJcblxyXG4gICAgICB0aGlzLmhpdFRlc3QocG9zKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBoaXRUZXN0KHBvczogZ2xWZWMyKSB7XHJcbiAgICAgIGxldCBkMSA9IHRoaXMucDEuZGlzdGFuY2UocG9zKTtcclxuICAgICAgbGV0IGQyID0gdGhpcy5wMi5kaXN0YW5jZShwb3MpO1xyXG5cclxuICAgICAgY29uc3QgSElUX1JBRElVUyA9IE5PTUlOQUxfS05PQl9SQURJVVMgKiAoZGlzcGxheVNpemUgLyBOT01JTkFMX0RJU1BMQVlfU0laRSk7XHJcbiAgICAgIGlmIChkMSA8IEhJVF9SQURJVVMgJiYgZDEgPD0gZDIpIHtcclxuICAgICAgICAgdGhpcy5oaXQgPSAxO1xyXG4gICAgICAgICB0aGlzLm1vdXNlT2Zmc2V0ID0gbmV3IGdsVmVjMihbdGhpcy5wMS54IC0gcG9zLngsIHRoaXMucDEueSAtIHBvcy55XSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoZDIgPCBISVRfUkFESVVTICYmIGQyIDw9IGQxKSB7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gMjtcclxuICAgICAgICAgdGhpcy5tb3VzZU9mZnNldCA9IG5ldyBnbFZlYzIoW3RoaXMucDIueCAtIHBvcy54LCB0aGlzLnAyLnkgLSBwb3MueV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLmhpdCA9IDA7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRyYWcocG9zOiBnbFZlYzIsIGRlbHRhOiBnbFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMuaGl0ID4gMCkge1xyXG4gICAgICAgICBsZXQgaGl0UHQgPSBuZXcgZ2xWZWMyKFtwb3MueCArIHRoaXMubW91c2VPZmZzZXQueCwgcG9zLnkgKyB0aGlzLm1vdXNlT2Zmc2V0LnldKTtcclxuICAgICAgICAgaGl0UHQueCA9IE1hdGgubWF4KGhpdFB0LngsIHRoaXMuYmFsbENlbnRlci54KTtcclxuICAgICAgICAgaGl0UHQueSA9IE1hdGgubWluKGhpdFB0LnksIHRoaXMuYmFsbENlbnRlci55KTtcclxuICAgICAgICAgbGV0IHJhZGl1cyA9IHRoaXMuYmFsbENlbnRlci5kaXN0YW5jZShoaXRQdCk7XHJcbiAgICAgICAgIGxldCBhbmdsZSA9IGNsYW1wKHRvRGVnKE1hdGguYXNpbigoaGl0UHQueCAtIHRoaXMuYmFsbENlbnRlci54KSAvIHJhZGl1cykpLCAwLCA5MCk7XHJcbiAgICAgICAgIGlmICh0aGlzLmhpdCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25UaHJlc2hvbGQxQ2hhbmdlKGFuZ2xlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblRocmVzaG9sZDJDaGFuZ2UoYW5nbGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICBsZXQgYmFsbEltYWdlRGF0YSA9IHRoaXMuYXBwLnJlbmRlcmVyLmdldEJhbGxJbWFnZSgpO1xyXG5cclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoYmFsbEltYWdlRGF0YS5pbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY3R4LnJlc2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoMCwgZGlzcGxheVNpemUgLyAyKTtcclxuICAgICAgY3R4LnNjYWxlKGRpc3BsYXlTaXplIC8gdGV4dHVyZVNpemUsIC1kaXNwbGF5U2l6ZSAvIHRleHR1cmVTaXplKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmhpZGRlbkNhbnZhcywgMCwgLXRleHR1cmVTaXplIC8gMik7XHJcblxyXG4gICAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgdGhpcy5iYWxsQ2VudGVyID0gbmV3IGdsVmVjMihbXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsQ2VudGVyLngsXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogKDEgLSBiYWxsSW1hZ2VEYXRhLmJhbGxDZW50ZXIueSlcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpbWVncmVlbic7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjaydcclxuXHJcbiAgICAgIGNvbnN0IEtOT0JfTEVOR1RIID0gTk9NSU5BTF9LTk9CX0xFTkdUSCAqIChkaXNwbGF5U2l6ZSAvIE5PTUlOQUxfRElTUExBWV9TSVpFKTtcclxuICAgICAgY29uc3QgS05PQl9SQURJVVMgPSBOT01JTkFMX0tOT0JfUkFESVVTICogKGRpc3BsYXlTaXplIC8gTk9NSU5BTF9ESVNQTEFZX1NJWkUpO1xyXG4gICAgICBsZXQgciA9IGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsUmFkaXVzO1xyXG4gICAgICBsZXQgczEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgcik7XHJcbiAgICAgIHRoaXMucDEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgciArIEtOT0JfTEVOR1RIKTtcclxuICAgICAgbGV0IHMyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIpO1xyXG4gICAgICB0aGlzLnAyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIgKyBLTk9CX0xFTkdUSCk7XHJcblxyXG4gICAgICBjdHgubGluZVdpZHRoID0gKDEgLyAxNTApICogZGlzcGxheVNpemU7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbyhzMS54LCBzMS55KTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLnAxLngsIHRoaXMucDEueSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh0aGlzLnAxLngsIHRoaXMucDEueSwgS05PQl9SQURJVVMsIDAsIHRvUmFkKDM2MCkpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oczIueCwgczIueSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5wMi54LCB0aGlzLnAyLnkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmModGhpcy5wMi54LCB0aGlzLnAyLnksIEtOT0JfUkFESVVTLCAwLCB0b1JhZCgzNjApKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFB0KGNlbnRlcjogZ2xWZWMyLCB0aHJlc2hvbGQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpOiBnbFZlYzIge1xyXG5cclxuICAgICAgbGV0IG95ID0gcmFkaXVzICogTWF0aC5zaW4odG9SYWQoOTAgLSB0aHJlc2hvbGQpKTtcclxuICAgICAgbGV0IG94ID0gcmFkaXVzICogTWF0aC5jb3ModG9SYWQoOTAgLSB0aHJlc2hvbGQpKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMyKFtjZW50ZXIueCArIG94LCBjZW50ZXIueSAtIG95XSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIDNEIGFycm93IHVzaW5nIHRyaWFuZ2xlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlQXJyb3cgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICBzdXBlcignQXJyb3cnKTtcclxuICAgICAgY29uc3QgTlVNX1NURVBTID0gMzA7XHJcbiAgICAgIGNvbnN0IFRJUCA9IG5ldyBnbFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgY29uc3QgVE9UQUxfTEVOR1RIID0gMC40O1xyXG4gICAgICBjb25zdCBBUlJPV19SQURJVVMgPSAwLjE1O1xyXG4gICAgICBjb25zdCBBUlJPV19MRU5HVEggPSAxLjUgKiBBUlJPV19SQURJVVM7XHJcbiAgICAgIGNvbnN0IFNIQUZUX1JBRElVUyA9IDAuNSAqIEFSUk9XX1JBRElVUztcclxuXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSBhcnJvdyBoZWFkXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChUSVApO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbMCwgQVJST1dfTEVOR1RILCAwXSkpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gQVJST1dfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBBUlJPV19MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gQVJST1dfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGlUaXAgPSAwO1xyXG4gICAgICBsZXQgaUJhc2UgPSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpMSA9IDIgKyBpO1xyXG4gICAgICAgICBsZXQgaTIgPSAoaSA9PSBOVU1fU1RFUFMgLSAxKSA/IDAgOiBpMSArIDE7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGlUaXAsIGkyLCBpMSwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGlCYXNlLCBpMSwgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgYXJyb3cgc2hhZnRcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoWzAsIFRPVEFMX0xFTkdUSCwgMF0pKTtcclxuICAgICAgbGV0IGlFbmQgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IHggPSBTSEFGVF9SQURJVVMgKiBNYXRoLnNpbihpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeSA9IEFSUk9XX0xFTkdUSDtcclxuICAgICAgICAgbGV0IHogPSBTSEFGVF9SQURJVVMgKiBNYXRoLmNvcyhpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbeCwgeSwgel0pKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gU0hBRlRfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBUT1RBTF9MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gU0hBRlRfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGlTdGFydCA9IGlFbmQgKyAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpMSA9IGlTdGFydCArIGk7XHJcbiAgICAgICAgIGxldCBpMiA9IChpID09IE5VTV9TVEVQUyAtIDEpID8gaVN0YXJ0IDogaTEgKyAxO1xyXG4gICAgICAgICBsZXQgaTMgPSBpMSArIE5VTV9TVEVQUztcclxuICAgICAgICAgbGV0IGk0ID0gaTIgKyBOVU1fU1RFUFM7XHJcblxyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTIsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTQsIGkzLCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkzLCBpNCwgaUVuZCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFZvbHVtZSB9IGZyb20gXCIuL1ZvbHVtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlQ3ViZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBzdXBlcignQ3ViZScpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVUcmlhbmdsZXMoc2l6ZSwgY2VudGVyKTtcclxuXHJcbiAgICAgIHRoaXMudm9sdW1lcy5wdXNoKG5ldyBWb2x1bWUoKSk7XHJcbiAgICAgIHRoaXMudm9sdW1lc1swXS5ib3hNaW4gPSB0aGlzLmJveE1pbi5jbG9uZSgpO1xyXG4gICAgICB0aGlzLnZvbHVtZXNbMF0uYm94TWF4ID0gdGhpcy5ib3hNYXguY2xvbmUoKTtcclxuICAgICAgdGhpcy52b2x1bWVzWzBdLnRyaWFuZ2xlcyA9IHRoaXMudHJpYW5nbGVzO1xyXG4gICB9XHJcblxyXG4gICBjcmVhdGVGYWNlKGkxOiBudW1iZXIsIGkyOiBudW1iZXIsIGkzOiBudW1iZXIsIGk0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMiwgaTMsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMiwgaTQsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgfVxyXG5cclxuICAgY3JlYXRlVHJpYW5nbGVzKHNpemU6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSAtIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54IC0gc2l6ZSAvIDIsIGNlbnRlci55ICsgc2l6ZSAvIDIsIGNlbnRlci56IC0gc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiArIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCArIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgwLCAxLCAyLCAzKTtcclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDQsIDYsIDUsIDcpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDAsIDQsIDEsIDUpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMiwgMywgNiwgNyk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMCwgMiwgNCwgNik7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgxLCA1LCAzLCA3KTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBWb2x1bWUgfSBmcm9tIFwiLi9Wb2x1bWVcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgQmxvYkZpbGUgfSBmcm9tIFwiLi9CbG9iRmlsZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gTm9ybWFsVHlwZSB7XHJcbiAgIFNtb290aCxcclxuICAgRmxhdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpEYXRhIHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB2ZXJ0aWNlczogRmxvYXQzMkFycmF5O1xyXG4gICBub3JtYWxzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIG5JbmRpY2VzOiBJbnQzMkFycmF5O1xyXG4gICB2SW5kaWNlczogSW50MzJBcnJheTtcclxuICAgYm94TWluOiBnbFZlYzM7XHJcbiAgIGJveE1heDogZ2xWZWMzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBjb21wdXRlIG5vcm1hbHMgZm9yIHZlcnRpY2VzIHRoYXQgam9pbiBtdWx0aXBsZSBmYWNlc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlOb3JtVmVydGV4IHtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhpcyB2ZXJ0ZXhcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBub3JtYWwgU3RvcmVzIGEgbm9ybWFsIGZvciB0aGUgdmVydGV4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcHVzaChub3JtYWw6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWwpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG5vcm1hbCBieSBhdmVyYWdpbmcgYWxsIHRoZSBpbmRpdmlkdWFsIG5vcm1hbHMgYXNzb2NpYXRlZCB3aXRoIHRoZSB2ZXJ0ZXhcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbm9ybWFsKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBuID0gbmV3IGdsVmVjMygpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9ybWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBuLnggKz0gdGhpcy5ub3JtYWxzW2ldLng7XHJcbiAgICAgICAgIG4ueSArPSB0aGlzLm5vcm1hbHNbaV0ueTtcclxuICAgICAgICAgbi56ICs9IHRoaXMubm9ybWFsc1tpXS56O1xyXG4gICAgICB9XHJcbiAgICAgIG4ueCAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBuLnkgLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi56IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcblxyXG4gICAgICByZXR1cm4gbjtcclxuICAgfVxyXG59XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciByZXByZXNlbnRpbmcgYW4gb2JqZWN0IGZyb20gYSBidW5jaCBvZiB0cmlhbmdsZXMuIFRoZSBjbGFzc1xyXG4gKiBlZmZpY2llbnRseSBtYW5hZ2VzIHRoZSB0cmlhbmdsZXMgYnkgc3RvcmluZyB0aGVtIGluIHZvbHVtZXMgYW5kIGJ5XHJcbiAqIHBhc3NpbmcgdGhlbSB0byBXZWJHTCB1c2luZyBVbmlmb3JtIEJ1ZmZlcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iaiB7XHJcbiAgIHB1YmxpYyB2ZXJ0aWNlczogZ2xWZWMzW10gPSBbXTtcclxuICAgcHVibGljIG5vcm1hbHM6IGdsVmVjM1tdID0gW107XHJcbiAgIHB1YmxpYyB0cmlhbmdsZXM6IEluZGV4ZWRUcmlhbmdsZVtdID0gW107XHJcbiAgIHB1YmxpYyBib3hNaW4gPSBuZXcgZ2xWZWMzKFtOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFXSk7XHJcbiAgIHB1YmxpYyBib3hNYXggPSBuZXcgZ2xWZWMzKFstTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFXSk7XHJcbiAgIHB1YmxpYyB2b2x1bWVzOiBWb2x1bWVbXSA9IFtdO1xyXG4gICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3hNYXgueCAtIHRoaXMuYm94TWluLng7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC55IC0gdGhpcy5ib3hNaW4ueTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3hNYXgueiAtIHRoaXMuYm94TWluLno7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgY2VudGVyKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgKHRoaXMuYm94TWluLnggKyB0aGlzLmJveE1heC54KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi55ICsgdGhpcy5ib3hNYXgueSkgLyAyLFxyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueiArIHRoaXMuYm94TWF4LnopIC8gMixcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBwdXNoKHRyaTogSW5kZXhlZFRyaWFuZ2xlKSB7XHJcbiAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2godHJpKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRyaS5taW5YKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9IE1hdGgubWluKHRoaXMuYm94TWluLnksIHRyaS5taW5ZKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9IE1hdGgubWluKHRoaXMuYm94TWluLnosIHRyaS5taW5aKTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHRyaS5tYXhYKTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnksIHRyaS5tYXhZKTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRyaS5tYXhaKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNjYWxlcyB0aGUgb2JqZWN0IHRvIHRoZSBzcGVjaWZpZWQgc2l6ZSBhbmQgY2VudGVycyBpdCBhYm91dCAoMCwwLDApXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gc2l6ZSBUaGUgbWF4IHNpemUgZm9yIHRoZSB3aWR0aCwgaGVpZ2h0LCBhbmQgZGVwdGhcclxuICAgICovXHJcbiAgIHB1YmxpYyBhdXRvQ2VudGVyKHNpemU6IG51bWJlcikge1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG5cclxuICAgICAgbGV0IHRyYW5zID0gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueCArIHRoaXMuYm94TWluLngpIC8gMixcclxuICAgICAgICAgLSh0aGlzLmJveE1heC55ICsgdGhpcy5ib3hNaW4ueSkgLyAyLFxyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnogKyB0aGlzLmJveE1pbi56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IHNjYWxlID0gc2l6ZSAvIE1hdGgubWF4KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmRlcHRoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudmVydGljZXNbaV07XHJcblxyXG4gICAgICAgICB2LnggPSAodi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi55ID0gKHYueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYueiA9ICh2LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveE1pbi54ID0gKHRoaXMuYm94TWluLnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gKHRoaXMuYm94TWluLnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gKHRoaXMuYm94TWluLnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gKHRoaXMuYm94TWF4LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gKHRoaXMuYm94TWF4LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gKHRoaXMuYm94TWF4LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHYuYm94TWluLnggPSAodi5ib3hNaW4ueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnkgPSAodi5ib3hNaW4ueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnogPSAodi5ib3hNaW4ueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnggPSAodi5ib3hNYXgueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnkgPSAodi5ib3hNYXgueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnogPSAodi5ib3hNYXgueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdhdXRvQWRqdXN0KCknKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNoaWZ0IHRoZSBvYmplY3QgaW4gc3BhY2UuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBhbW91bnQgdG8gc2hpZnRcclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudmVydGljZXNbaV07XHJcblxyXG4gICAgICAgICB2LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHYueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdi56ICs9IG9mZnNldC56O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveE1pbi54ICs9IG9mZnNldC54O1xyXG4gICAgICB0aGlzLmJveE1pbi55ICs9IG9mZnNldC55O1xyXG4gICAgICB0aGlzLmJveE1pbi56ICs9IG9mZnNldC56O1xyXG4gICAgICB0aGlzLmJveE1heC54ICs9IG9mZnNldC54O1xyXG4gICAgICB0aGlzLmJveE1heC55ICs9IG9mZnNldC55O1xyXG4gICAgICB0aGlzLmJveE1heC56ICs9IG9mZnNldC56O1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRoaXMudm9sdW1lc1tpXTtcclxuICAgICAgICAgdm9sLmJveE1pbi54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICB2b2wuYm94TWluLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueiArPSBvZmZzZXQuejtcclxuICAgICAgICAgdm9sLmJveE1heC54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueiArPSBvZmZzZXQuejtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQnJlYWtzIHRoZSBvYmplY3QgaW50byBldmVubHkgc3BhY2VkIHZvbHVtZXMuIFRoZSBudW1iZXIgb2Ygdm9sdW1lcyBpcyBhdXRvbWF0aWNhbGx5XHJcbiAgICAqIGRldGVybWluZWQgYmFzZWQgb24gdGhlIG51bWJlciBvZiB0cmlhbmdsZXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYnJlYWtJbnRvVm9sdW1lcygpIHtcclxuICAgICAgbGV0IG51bVN0ZXBzO1xyXG4gICAgICBpZiAodGhpcy50cmlhbmdsZXMubGVuZ3RoIDwgNDApIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJpYW5nbGVzLmxlbmd0aCA8IDE1MDApIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52b2x1bWVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3cobnVtU3RlcHMsIDMpOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52b2x1bWVzLnB1c2gobmV3IFZvbHVtZSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdCA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5YIC0gdGhpcy5ib3hNaW4ueCkgLyAodGhpcy5ib3hNYXgueCAtIHRoaXMuYm94TWluLngpKTtcclxuICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWSAtIHRoaXMuYm94TWluLnkpIC8gKHRoaXMuYm94TWF4LnkgLSB0aGlzLmJveE1pbi55KSk7XHJcbiAgICAgICAgIGxldCB6ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblogLSB0aGlzLmJveE1pbi56KSAvICh0aGlzLmJveE1heC56IC0gdGhpcy5ib3hNaW4ueikpO1xyXG4gICAgICAgICB4ID0gY2xhbXAoeCwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeSA9IGNsYW1wKHksIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHogPSBjbGFtcCh6LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgIHRoaXMudm9sdW1lc1tpbmRleF0ucHVzaCh0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbHModHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG5cclxuICAgICAgbGV0IG5vcm1hbHM6IGdsVmVjM1tdID0gW107XHJcbiAgICAgIGxldCBtdWx0aU5vcm1WZXJ0aWNlczogTXVsdGlOb3JtVmVydGV4W10gPSBbXTtcclxuICAgICAgaWYgKHR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlcy5wdXNoKG5ldyBNdWx0aU5vcm1WZXJ0ZXgoKSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0b3JlIHRoZSBub3JtYWxzIHdpdGggZWFjaCB2ZXJ0ZXggLSB3ZSdsbCBsYXRlciBhdmVyYWdlIHRoZXNlXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgbiA9IHRyaS5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pVjBdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pVjFdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pVjJdLnB1c2gobik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBub3JtYWxzIGFycmF5XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXVsdGlOb3JtVmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKG11bHRpTm9ybVZlcnRpY2VzW2ldLm5vcm1hbCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdHJpYW5nbGVzXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICB0cmkubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgICAgIHRyaS5pTjAgPSB0cmkuaVYwO1xyXG4gICAgICAgICAgICB0cmkuaU4xID0gdHJpLmlWMTtcclxuICAgICAgICAgICAgdHJpLmlOMiA9IHRyaS5pVjI7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaCh0cmkuY29tcHV0ZU5vcm1hbCgpKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9ybWFscy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgdHJpLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICAgICB0cmkuaU4wID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRyaS5pTjEgPSBpbmRleDtcclxuICAgICAgICAgICAgdHJpLmlOMiA9IGluZGV4O1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuXHJcbiAgICAgIHAubG9nKCdjb21wdXRlTm9ybWFscycpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyBpbiB0aGUgZm9yIC5PQkogZmlsZSBmb3JtYXRcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRoZSBzdHJpbmdcclxuICAgICovXHJcbiAgIHB1YmxpYyB0b09ialN0cmluZyhkaWdpdHMgPSA4KSB7XHJcblxyXG4gICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgIHN0ciArPSAnIyBWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnIyBOb3JtYWxzOiAnICsgdGhpcy5ub3JtYWxzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJyMgVHJpYW5nbGVzOiAnICsgdGhpcy50cmlhbmdsZXMubGVuZ3RoICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnXFxuJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudmVydGljZXNbaV07XHJcbiAgICAgICAgIHN0ciArPSAndiAnICsgdi54LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2LnkudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHYuei50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IG4gPSB0aGlzLm5vcm1hbHNbaV07XHJcbiAgICAgICAgIHN0ciArPSAndm4gJyArIG4ueC50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgbi55LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuLnoudG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHQgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgc3RyICs9ICdmICcgK1xyXG4gICAgICAgICAgICAodC5pVjAgKyAxKSArICcvLycgKyAodC5pTjAgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmlWMSArIDEpICsgJy8vJyArICh0LmlOMSArIDEpICsgJyAnICtcclxuICAgICAgICAgICAgKHQuaVYyICsgMSkgKyAnLy8nICsgKHQuaU4yICsgMSkgKyAnXFxuJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuXHJcbiAgICAgIGxldCBtc2cgPSAnT3B0aW1pemVkIC5PQkogY29udGVudCBjb3BpZWQgdG8gY2xpcGJvYXJkXFxuXFxuJztcclxuICAgICAgbXNnICs9ICdOdW0gVHJpYW5nbGVzOiAnICsgdGhpcy50cmlhbmdsZXMubGVuZ3RoICsgJ1xcbic7XHJcblxyXG4gICAgICBsZXQgdmVydGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbiAgICAgIGxldCBpbmRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgZ2VuZXJhdGUgYSB1bmlxdWUgc2V0IG9mIHZlcnRpY2VzXHJcbiAgICAgIGxldCB1bmlxdWVWZXJ0aWNlczogZ2xWZWMzW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICBsZXQgb2xkVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuICAgICAgICAgbGV0IGtleSA9IHRoaXMudmVydGljZXNbaV0udG9TdHJpbmcoNCwgJyAnKTtcclxuICAgICAgICAgbGV0IG9sZEluZGV4ID0gaSArIDE7XHJcbiAgICAgICAgIGxldCBuZXdJbmRleDtcclxuICAgICAgICAgaWYgKHZlcnRleFRvSW5kZXhNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgLy8ganVzdCBtYXAgdGhlIG9sZCBpbmRleCB0byB0aGUgZXhpc3RpbmcgZW50cnlcclxuICAgICAgICAgICAgbmV3SW5kZXggPSB2ZXJ0ZXhUb0luZGV4TWFwLmdldChrZXkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZW50cnlcclxuICAgICAgICAgICAgbmV3SW5kZXggPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhUb0luZGV4TWFwLnNldChrZXksIG5ld0luZGV4KTtcclxuICAgICAgICAgICAgdW5pcXVlVmVydGljZXMucHVzaChvbGRWZXJ0ZXgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vIHN0b3JlIHRoZSB0cmFuc2xhdGlvblxyXG4gICAgICAgICBpbmRleFRvSW5kZXhNYXAuc2V0KG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBvbGRTaXplID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICAgIGxldCBuZXdTaXplID0gdW5pcXVlVmVydGljZXMubGVuZ3RoO1xyXG4gICAgICBtc2cgKz0gJ051bSBWZXJ0aWNlczogJyArIG9sZFNpemUgKyAnIHRvICcgKyBuZXdTaXplICsgJywgJyArICgxMDAgKiBuZXdTaXplIC8gb2xkU2l6ZSkudG9GaXhlZCgpICsgJyAlXFxuJztcclxuXHJcbiAgICAgIC8vIHJlc2V0IGFsbCB0aGUgdmVydGljZXNcclxuICAgICAgdGhpcy52ZXJ0aWNlcyA9IHVuaXF1ZVZlcnRpY2VzO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgdHJpLnZlcnRpY2VzID0gdW5pcXVlVmVydGljZXM7XHJcbiAgICAgICAgIHRyaS5pVjAgPSBpbmRleFRvSW5kZXhNYXAuZ2V0KHRyaS5pVjAgKyAxKSAtIDE7XHJcbiAgICAgICAgIHRyaS5pVjEgPSBpbmRleFRvSW5kZXhNYXAuZ2V0KHRyaS5pVjEgKyAxKSAtIDE7XHJcbiAgICAgICAgIHRyaS5pVjIgPSBpbmRleFRvSW5kZXhNYXAuZ2V0KHRyaS5pVjIgKyAxKSAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9sZFNpemUgPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKG5vcm1hbFR5cGUpO1xyXG4gICAgICBuZXdTaXplID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbXNnICs9ICdOdW0gTm9ybWFsczogJyArIG9sZFNpemUgKyAnIHRvICcgKyBuZXdTaXplICsgJywgJyArICgxMDAgKiBuZXdTaXplIC8gb2xkU2l6ZSkudG9GaXhlZCgpICsgJyAlJztcclxuXHJcbiAgICAgIGxldCBzdHIgPSB0aGlzLnRvT2JqU3RyaW5nKDYpO1xyXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzdHIpLnRoZW4oKCkgPT4geyBhbGVydChtc2cpIH0pO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHB1c2hWZWMoYXJyYXk6IG51bWJlcltdLCB2ZWM6IGdsVmVjMykge1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy54KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueSk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tYmluZSh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBsZXQgc3RhcnRWSW5kZXggPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICAgICAgbGV0IHN0YXJ0TkluZGV4ID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godE9iai52ZXJ0aWNlc1tpXS5jbG9uZSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2godE9iai5ub3JtYWxzW2ldLmNsb25lKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0T2JqLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUoXHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMsXHJcbiAgICAgICAgICAgIHRyaS5pVjAgKyBzdGFydFZJbmRleCxcclxuICAgICAgICAgICAgdHJpLmlWMSArIHN0YXJ0VkluZGV4LFxyXG4gICAgICAgICAgICB0cmkuaVYyICsgc3RhcnRWSW5kZXgsXHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscyxcclxuICAgICAgICAgICAgdHJpLmlOMCArIHN0YXJ0TkluZGV4LFxyXG4gICAgICAgICAgICB0cmkuaU4xICsgc3RhcnROSW5kZXgsXHJcbiAgICAgICAgICAgIHRyaS5pTjIgKyBzdGFydE5JbmRleFxyXG4gICAgICAgICApKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9EYXRhKCk6IFRyaWFuZ2xlT2JqRGF0YSB7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBUcmlhbmdsZU9iakRhdGE7XHJcbiAgICAgIGRhdGEubmFtZSA9IHRoaXMubmFtZTtcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgdGhlIHRyaWFuZ2xlcyBpbnRvIGFycmF5cyB0aGF0IGNhbiBiZSB1cGxvYWRlZFxyXG4gICAgICBsZXQgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRoaXMudmVydGljZXNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRoaXMubm9ybWFsc1tpXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB2SW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5JbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuXHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMCk7XHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMSk7XHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMik7XHJcblxyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjApO1xyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjEpO1xyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XHJcbiAgICAgIGRhdGEubm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XHJcbiAgICAgIGRhdGEudkluZGljZXMgPSBuZXcgSW50MzJBcnJheSh2SW5kaWNlcyk7XHJcbiAgICAgIGRhdGEubkluZGljZXMgPSBuZXcgSW50MzJBcnJheShuSW5kaWNlcyk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gdGhpcy5ib3hNaW4uY2xvbmUoKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSB0aGlzLmJveE1heC5jbG9uZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxuXHJcblxyXG4gICBwcml2YXRlIHN0YXRpYyBkYXRhMnZlcnRleChkYXRhOiBUcmlhbmdsZU9iakRhdGEsIGluZGV4OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMF0sXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMV0sXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZGF0YTJub3JtYWwoZGF0YTogVHJpYW5nbGVPYmpEYXRhLCBpbmRleDogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBkYXRhLm5vcm1hbHNbMyAqIGluZGV4ICsgMF0sXHJcbiAgICAgICAgIGRhdGEubm9ybWFsc1szICogaW5kZXggKyAxXSxcclxuICAgICAgICAgZGF0YS5ub3JtYWxzWzMgKiBpbmRleCArIDJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21EYXRhKGRhdGE6IFRyaWFuZ2xlT2JqRGF0YSk6IFRyaWFuZ2xlT2JqIHtcclxuICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmooKTtcclxuICAgICAgdE9iai5uYW1lID0gZGF0YS5uYW1lO1xyXG5cclxuICAgICAgLy8gcmVzdG9yZSB2ZXJ0aWNlc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudmVydGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIHRPYmoudmVydGljZXMucHVzaChUcmlhbmdsZU9iai5kYXRhMnZlcnRleChkYXRhLCBpKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlc3RvcmUgbm9ybWFsc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubm9ybWFscy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgdE9iai5ub3JtYWxzLnB1c2goVHJpYW5nbGVPYmouZGF0YTJub3JtYWwoZGF0YSwgaSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXN0b3JlIHRyaWFuZ2xlc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudkluZGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpVjAgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIGxldCBpVjEgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIGxldCBpVjIgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCBpTjAgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIGxldCBpTjEgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIGxldCBpTjIgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCB0ID0gbmV3IEluZGV4ZWRUcmlhbmdsZSh0T2JqLnZlcnRpY2VzLCBpVjAsIGlWMSwgaVYyLCB0T2JqLm5vcm1hbHMsIGlOMCwgaU4xLCBpTjIpO1xyXG4gICAgICAgICB0T2JqLnRyaWFuZ2xlcy5wdXNoKHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0T2JqLmJveE1pbiA9IG5ldyBnbFZlYzMoZGF0YS5ib3hNaW4udmFsdWVzKTtcclxuICAgICAgdE9iai5ib3hNYXggPSBuZXcgZ2xWZWMzKGRhdGEuYm94TWF4LnZhbHVlcyk7XHJcblxyXG4gICAgICByZXR1cm4gdE9iajtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvQmxvYigpOiBCbG9iIHtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBhIGRlc2NyaXB0aW9uXHJcbiAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICBGaWxlVHlwZTogJ0JpbmFyeSBPQkonLFxyXG4gICAgICAgICBWZXJzaW9uOiAnMS4wJyxcclxuICAgICAgICAgTmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBnZXQgdGhlIHJhdyBkYXRhXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy50b0RhdGEoKTtcclxuXHJcbiAgICAgIC8vIGJyZWFrIGl0IGludG8gcGFydHNcclxuICAgICAgbGV0IHBhcnRzOiBCbG9iUGFydFtdID0gW107XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS52ZXJ0aWNlcyk7XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS5ub3JtYWxzKTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLnZJbmRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLm5JbmRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWluLnZhbHVlcykpO1xyXG4gICAgICBwYXJ0cy5wdXNoKG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5ib3hNYXgudmFsdWVzKSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIEJsb2JcclxuICAgICAgcmV0dXJuIEJsb2JGaWxlLmNyZWF0ZUJsb2IoaW5mbywgcGFydHMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21CbG9iKGJsb2I6IEJsb2IpOiBQcm9taXNlPFRyaWFuZ2xlT2JqPiB7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IFRyaWFuZ2xlT2JqLmJsb2JUb0RhdGEoYmxvYik7XHJcbiAgICAgIHJldHVybiBUcmlhbmdsZU9iai5mcm9tRGF0YShkYXRhKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBibG9iVG9EYXRhKGJsb2I6IEJsb2IpOiBQcm9taXNlPFRyaWFuZ2xlT2JqRGF0YT4ge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhKCk7XHJcbiAgICAgIGxldCBiRmlsZSA9IGF3YWl0IEJsb2JGaWxlLmV4dHJhY3QoYmxvYik7XHJcblxyXG4gICAgICBkYXRhLm5hbWUgPSBiRmlsZS5pbmZvLm5hbWU7XHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzBdLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzFdLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBkYXRhLnZJbmRpY2VzID0gbmV3IEludDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbMl0uYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgIGRhdGEubkluZGljZXMgPSBuZXcgSW50MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1szXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5ib3hNaW4gPSBuZXcgZ2xWZWMzKEFycmF5LmZyb20obmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1s0XS5hcnJheUJ1ZmZlcigpKSkpO1xyXG4gICAgICBkYXRhLmJveE1heCA9IG5ldyBnbFZlYzMoQXJyYXkuZnJvbShuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzVdLmFycmF5QnVmZmVyKCkpKSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4vUHJvZmlsZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFN0YXR1c0Z1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbG9hZHMgYSAub2JqIGZpbGUgYW5kIGNyZWF0ZXMgdHJpYW5nbGVzIGZvciBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRmlsZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU3RhdHVzOiBTdGF0dXNGdW5jdGlvbjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCBzdGF0dXNGdW5jdGlvbj86IFN0YXR1c0Z1bmN0aW9uKSB7XHJcblxyXG4gICAgICBzdXBlcihuYW1lKTtcclxuXHJcbiAgICAgIC8vIHJlY29yZCB0aGUgc3RhdHVzIGZ1bmN0aW9uLiBJZiBvbmUgaXMgbm90IHN1cHBsaWVkLCBjcmVhdGUgb25lIHRoYXQgZG9lcyBub3RoaW5nXHJcbiAgICAgIGlmIChzdGF0dXNGdW5jdGlvbikge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyA9IHN0YXR1c0Z1bmN0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyA9IChzdGF0dXMpID0+IHsgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wYXJzZShzcmMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlRmFjZShsaW5lOiBzdHJpbmcpOiB7IGlWOiBudW1iZXJbXSwgaU46IG51bWJlcltdIH0ge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBpVjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgICAgIGlOOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgfVxyXG4gICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgbGV0IG51bVZhbHMgPSB0b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWxzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZhbHMgPSB0b2tlbnNbaSArIDFdLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgIHJldC5pVi5wdXNoKHBhcnNlSW50KHZhbHNbMF0pIC0gMSk7XHJcbiAgICAgICAgIHJldC5pTi5wdXNoKHZhbHMubGVuZ3RoID09PSAzID8gcGFyc2VJbnQodmFsc1syXSkgLSAxIDogLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2Uoc3JjOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nJyk7XHJcbiAgICAgIGxldCB0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIGxldCBsaW5lcyA9IHNyYy5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIHAubG9nKCdzcGxpdCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAvLyByZXBvcnQgcHJvZ3Jlc3MgZXZlcnkgNTAgbXNcclxuICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0ID4gNTApIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6ICcgKyAoMTAwICogaSAvIGxpbmVzLmxlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgICAgICAgICAgdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgndiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzMoW3BhcnNlRmxvYXQodG9rZW5zWzFdKSwgcGFyc2VGbG9hdCh0b2tlbnNbMl0pLCBwYXJzZUZsb2F0KHRva2Vuc1szXSldKVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVjKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3ZuICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjMyhbcGFyc2VGbG9hdCh0b2tlbnNbMV0pLCBwYXJzZUZsb2F0KHRva2Vuc1syXSksIHBhcnNlRmxvYXQodG9rZW5zWzNdKV0pXHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHZlYyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCdmICcpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLnBhcnNlRmFjZShsaW5lKTtcclxuICAgICAgICAgICAgaWYgKHJldC5pTi5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgcmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSwgdGhpcy5ub3JtYWxzLCByZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHJldC5pVlswXSwgcmV0LmlWWzJdLCByZXQuaVZbM10sIHRoaXMubm9ybWFscywgcmV0LmlOWzBdLCByZXQuaU5bMl0sIHJldC5pTlszXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCByZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdLCB0aGlzLm5vcm1hbHMsIHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubm9ybWFscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6IDEwMCUnKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ05vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCk7XHJcbiAgICAgIHAubG9nKCdwYXJzZScpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzcGhlcmUgdXNpbmcgdHJpYW5nbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVTcGhlcmUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyB0aGUgc3BoZXJlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbnVtU3RlcHMgVGhlIG51bWJlciBvZiBiYW5kcyB1c2VkIHRvIGNvdmVyIHRoZSBzcGhlcmVcclxuICAgICogQHBhcmFtIHJhZGl1cyBUaGUgcmFkaXVzIG9mIHRoZSBzcGhlcmVcclxuICAgICogQHBhcmFtIGNlbnRlciBUaGUgY2VudGVyIG9mIHRoZSBzcGhlcmVcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihudW1TdGVwczogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIHN1cGVyKCdTcGhlcmUnKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdmVydGljZXNcclxuICAgICAgdGhpcy5jcmVhdGVWZXJ0aWNlcyhudW1TdGVwcywgcmFkaXVzLCBjZW50ZXIpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRyaWFuZ2xlcyBmcm9tIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLmNvbm5lY3RWZXJ0aWNlcyhudW1TdGVwcyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlVmVydGljZXMobnVtU3RlcHM6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHM7IGkrKykge1xyXG4gICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLngsIGNlbnRlci55ICsgcmFkaXVzLCBjZW50ZXIuel0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChpID09PSBudW1TdGVwcyAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSAtIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5jb3MoaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCByID0gcmFkaXVzICogTWF0aC5zaW4oaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBpICUgMiA/IDAgOiAoKDIgKiBNYXRoLlBJKSAvIG51bVN0ZXBzKSAqIDAuNTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueCArIHIgKiBNYXRoLnNpbigoaiAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJIC0gb2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgICAgY2VudGVyLnkgKyB5LFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueiArIHIgKiBNYXRoLmNvcygoaiAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJIC0gb2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbm5lY3RWZXJ0aWNlcyhudW1TdGVwczogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBmaXJzdCA9IDA7XHJcbiAgICAgIGxldCBsYXN0ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0ZXBzIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBmaXJzdDtcclxuICAgICAgICAgICAgICAgbGV0IGkyID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IGogPT09IChudW1TdGVwcyAtIDEpID8gMSA6IGkyICsgMTtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkyLCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gbnVtU3RlcHMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBzdGFydEluZGV4ID0gbGFzdCAtIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBsYXN0O1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSBzdGFydEluZGV4ICsgajtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gaiA9PT0gKG51bVN0ZXBzIC0gMSkgPyBzdGFydEluZGV4IDogaTIgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTMsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0QSA9IDEgKyAoaSAtIDEpICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBzdGFydEIgPSAxICsgaSAqIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBzdGFydEEgKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSAoaiA9PT0gKG51bVN0ZXBzIC0gMSkpID8gc3RhcnRBIDogaTEgKyAxO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBzdGFydEIgKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTQgPSAoaiA9PT0gKG51bVN0ZXBzIC0gMSkpID8gc3RhcnRCIDogaTMgKyAxO1xyXG4gICAgICAgICAgICAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGk0LCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMywgaTQsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTMsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTIsIGkzLCBpNCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlck1vZGUgfSBmcm9tIFwiLi9QYXRoVHJhY2VyUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgU3BoZXJpY2FsQ29vcmQgfSBmcm9tIFwiLi9TcGhlcmljYWxDb29yZFwiO1xyXG5cclxuLyoqXHJcbiAqIFR5cGVzIGZvciB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVuaWZvcm1zIHtcclxuICAgdVNjYWxlOiBudW1iZXI7XHJcbiAgIHVYT2Zmc2V0OiBudW1iZXI7XHJcbiAgIHVZT2Zmc2V0OiBudW1iZXI7XHJcbiAgIHVNb2RlOiBSZW5kZXJNb2RlO1xyXG4gICB1TWF4Q2hyb21hOiBudW1iZXI7XHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVNaWRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya0xpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcblxyXG4gICB1U2hhZG93Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVSZWZsZWN0ZWRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya0FjY2VudENvbG9yOiBnbENvbG9yO1xyXG5cclxuICAgdUxpZ2h0QWxwaGE6IG51bWJlcjtcclxuICAgdVNoYWRvd0FscGhhOiBudW1iZXI7XHJcblxyXG4gICB1TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdUxpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIHVMaWdodFBvczogZ2xWZWMzLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiBudW1iZXIsXHJcbiAgIHVPYmpDb2xvcjogZ2xDb2xvcixcclxuICAgdUJhbGxSYWRpdXM6IG51bWJlcixcclxuICAgdUV5ZTogZ2xWZWMzLFxyXG4gICB1VGV4dHVyZVNpemU6IG51bWJlcixcclxuICAgdVJhbmRvbTogbnVtYmVyLFxyXG4gICB1UmF5MDA6IGdsVmVjMyxcclxuICAgdVJheTAxOiBnbFZlYzMsXHJcbiAgIHVSYXkxMDogZ2xWZWMzLFxyXG4gICB1UmF5MTE6IGdsVmVjMyxcclxuICAgdVNhbXBsZTogbnVtYmVyLFxyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgbGV0IFVuaWZvcm1zOiBJVW5pZm9ybXMgPSB7XHJcbiAgIHVTY2FsZTogMS4wLFxyXG4gICB1WE9mZnNldDogMC4wLFxyXG4gICB1WU9mZnNldDogMC4wLFxyXG4gICB1TW9kZTogMCxcclxuICAgdU1heENocm9tYTogMS4wLFxyXG5cclxuICAgdUhpZ2hsaWdodENvbG9yOiB1bmRlZmluZWQsXHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdU1pZExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdURhcmtMaWdodENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1U2hhZG93Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdVJlZmxlY3RlZExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdURhcmtBY2NlbnRDb2xvcjogdW5kZWZpbmVkLFxyXG5cclxuICAgdUxpZ2h0QWxwaGE6IDEwMDEsXHJcbiAgIHVTaGFkb3dBbHBoYTogMTAwMCxcclxuXHJcbiAgIHVMaWdodEludGVuc2l0eTogMC43LFxyXG4gICB1TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgZ2xWZWMzKG5ldyBTcGhlcmljYWxDb29yZCgyLCA2MCwgMTEwKS50b1hZWigpKSxcclxuICAgdUFtYmllbnRMaWdodEludGVuc2l0eTogMC4zLFxyXG4gICB1T2JqQ29sb3I6IG5ldyBnbENvbG9yKFswLjUsIDAuNSwgMC44XSksXHJcbiAgIHVCYWxsUmFkaXVzOiAwLjUsXHJcbiAgIHVFeWU6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVSYW5kb206IE1hdGgucmFuZG9tKCksXHJcbiAgIHVSYXkwMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MDE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1U2FtcGxlOiAwLjAsXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG5jb25zdCBNQVggPSAxMDAwOyAvLyBJTkZJTklUWSBpbiBvdXIgcmVuZGVyaW5nIHdvcmxkXHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBtYW5hZ2VzIGEgc2V0IG9mIHRyaWFuZ2xlcyB3aXRoaW4gYSBnaXZlbiBzcGFjZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZvbHVtZSB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgdHJpYW5nbGVzIGVuY2xvc2VkIHdpdGhpbiB0aGUgYm91bmRpbmcgYm94XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJpYW5nbGVzOiBJbmRleGVkVHJpYW5nbGVbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEJvdW5kaW5nIGJveCBtaW5pbXVtXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYm94TWluID0gbmV3IGdsVmVjMyhbTUFYLCBNQVgsIE1BWF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEJvdW5kaW5nIGJveCBtYXhpbXVtXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYm94TWF4ID0gbmV3IGdsVmVjMyhbLU1BWCwgLU1BWCwgLU1BWF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFN0b3JlcyBhIHRyaWFuZ2xlIGFuZCB1cGRhdGVzIHRoZSBib3VuZGluZyBib3hcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB0cmlhbmdsZSBUaGUgdHJpYW5nbGUgdG8gc3RvcmVcclxuICAgICovXHJcbiAgIHB1YmxpYyBwdXNoKHRyaWFuZ2xlOiBJbmRleGVkVHJpYW5nbGUpIHtcclxuXHJcbiAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2godHJpYW5nbGUpO1xyXG4gICAgICB0aGlzLmJveE1pbi54ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueCwgdHJpYW5nbGUubWluWCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0cmlhbmdsZS5taW5ZKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9IE1hdGgubWluKHRoaXMuYm94TWluLnosIHRyaWFuZ2xlLm1pblopO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueCwgdHJpYW5nbGUubWF4WCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB0cmlhbmdsZS5tYXhZKTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRyaWFuZ2xlLm1heFopO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgYSBXZWJHbCBCdWZmZXIgYW5kIEF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQnVmZmVyIHtcclxuICAgcHJpdmF0ZSBidWZmZXI6IFdlYkdMQnVmZmVyO1xyXG4gICBwcml2YXRlIGF0dHJpYnV0ZUxvY2F0aW9uOiBudW1iZXI7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHJpYnV0ZU5hbWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICBnbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXIpO1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZCh2ZXJ0aWNlczogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5iaW5kKCk7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYmluZCgpIHtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVMb2NhdGlvbik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24sXHJcbiAgICAgICAgIDMsICAgICAgICAgICAgICAgIC8vIHNpemVcclxuICAgICAgICAgZ2wuRkxPQVQsICAgICAgICAgLy8gdHlwZVxyXG4gICAgICAgICBmYWxzZSwgICAgICAgICAgICAvLyBub3JtYWxpemVkXHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgIC8vIHN0cmlkZVxyXG4gICAgICAgICAwICAgICAgICAgICAgICAgICAvLyBvZmZzZXRcclxuICAgICAgKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBnbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGNsYW1wKGNvbG9yLnIsIDAsIDEpO1xyXG4gICAgICBsZXQgZyA9IGNsYW1wKGNvbG9yLmcsIDAsIDEpO1xyXG4gICAgICBsZXQgYiA9IGNsYW1wKGNvbG9yLmIsIDAsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxpZ2h0ZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBsaWdodGVzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbGlnaHRlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPiBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGRhcmtlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGRhcmtlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGRhcmtlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPCBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGFuIGh0bWwgY29sb3Igb2JqZWN0ICgwLTI1NSBiYXNlZCkuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSHRtbENvbG9yKCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLnIpO1xyXG4gICAgICBsZXQgZyA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5nKTtcclxuICAgICAgbGV0IGIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBhZGRzIHRlbXBlcmF0dXJlIHRvIGEgQ29sb3Igb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSBleHRlbmRzIGdsQ29sb3Ige1xyXG4gICAvKipcclxuICAgICogVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIF90ZW1wZXJhdHVyZTogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB0ZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqIEBwYXJhbSB0ZW1wZXJhdHVyZSBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdLCB0ZW1wZXJhdHVyZTogbnVtYmVyKSB7XHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEtub3duIGNvbG9yIHZhbHVlcy4gRm9yIG90aGVyIHJlcXVlc3RzIHRoZSBjbGFzcyB3aWxsIHJldHVybiBpbnRlcnBvbGF0ZWQgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb2xvcnM6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmVbXSA9IFtcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTQ3IC8gMjU1LCA0MSAvIDI1NV0sIDE5MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxOTcgLyAyNTUsIDE0MyAvIDI1NV0sIDI2MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyMTQgLyAyNTUsIDE3MCAvIDI1NV0sIDI4NTApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNDEgLyAyNTUsIDIyNCAvIDI1NV0sIDMyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTAgLyAyNTUsIDI0NCAvIDI1NV0sIDUyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1MSAvIDI1NV0sIDU0MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1NSAvIDI1NV0sIDYwMDApLCAvLyBkYXlsaWdodFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjAxIC8gMjU1LCAyMjYgLyAyNTUsIDI1NSAvIDI1NV0sIDcwMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbNjQgLyAyNTUsIDE1NiAvIDI1NSwgMjU1IC8gMjU1XSwgMjAwMDApLFxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgZGF5bGlnaHQoKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSg2MDAwKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbmltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWluVGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWF4aW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtYXhUZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgQ29sb3IgbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHRlbXBlcmF0dXJlOiBudW1iZXIpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuXHJcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA8PSB0aGlzLm1pblRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0ZW1wZXJhdHVyZSA+PSB0aGlzLm1heFRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMSA9IHRoaXMuY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY29sb3IyID0gdGhpcy5jb2xvcnNbaSArIDFdO1xyXG4gICAgICAgICAgICBpZiAodGVtcGVyYXR1cmUgPj0gY29sb3IxLnRlbXBlcmF0dXJlICYmIHRlbXBlcmF0dXJlIDw9IGNvbG9yMi50ZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAodGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpIC8gKGNvbG9yMi50ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yMS5yICsgcmF0aW8gKiAoY29sb3IyLnIgLSBjb2xvcjEucik7XHJcbiAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IxLmcgKyByYXRpbyAqIChjb2xvcjIuZyAtIGNvbG9yMS5nKTtcclxuICAgICAgICAgICAgICAgbGV0IGIgPSBjb2xvcjEuYiArIHJhdGlvICogKGNvbG9yMi5iIC0gY29sb3IxLmIpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoW3IsIGcsIGJdLCB0ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc2hvdWxkbid0IGdldCBoZXJlLCBidXQgaWYgd2UgZG8sIHJldHVybiB0aGUgbGFzdCBjb2xvclxyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSB3cmFwcGVyIGZvciBjb21waWxpbmcgV2ViR0wgc2hhZGVyIHByb2dyYW1zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb21waWxlciB7XHJcblxyXG4gICAvKipcclxuICAgICogdXNlIHN0YXRpYyBmdW5jdGlvbnMgb25seVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXBpbGVzIGEgc2hhZGVyIHByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB0eXBlIFRoZSBzaGFkZXIgdHlwZVxyXG4gICAgKiBAdGhyb3dzIGlmIHRoZSBjb21waWxhdGlvbiBmYWlsc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY29tcGlsZVNoYWRlcihzb3VyY2U6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coc291cmNlKTtcclxuICAgICAgICAgdGhyb3cgJ2NvbXBpbGUgZXJyb3I6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXBpbGVzIGFuZCBsaW5rcyB2ZXJ0ZXggYW5kIGZyYWdtZW50IHNoYWRlcnMgaW50byBhIHByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVmVydGV4IHNoYWRlciBzb3VyY2VcclxuICAgICogQHBhcmFtIGZyYWdtZW50U291cmNlIEZyYWdtZW50IHNoYWRlciBzb3VyY2VcclxuICAgICogQHJldHVybnMgdGhlIHByb2dyYW0gaWRcclxuICAgICogQHRocm93cyBpZiB0aGUgY29tcGlsYXRpb24gZmFpbHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZSh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZykge1xyXG4gICAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcihmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKSk7XHJcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdsaW5rIGVycm9yOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjNCwgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgdG9EZWcsIHRvUmFkIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgbWF0cml4IGZvciB1c2UgaW4gV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsTWF0NCB7XHJcbiAgIC8qKiBUaGUgbWF0cml4IHZhbHVlIHN0b3JlZCBhcyBhIDE2IGVsZW1lbnQgYXJyYXkgKi9cclxuICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldCdzIGFuIGlkZW50aXR5IG1hdHJpeC4gU2FtZSBhcyBjcmVhdGluZyBhIG5ldyBtYXRyaXgsIGJ1dCBzeW50YWN0aWNhbGx5XHJcbiAgICAqIHNob3dzIHdoYXQgaXMgaGFwcGVuaW5nLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBuZXcgaWRlbml0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IGdsTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xNYXQ0IHtcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgdmFsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYSB2ZWN0b3IgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3Rvci5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdFYodmVjOiBnbFZlYzQpOiBnbFZlYzQge1xyXG4gICAgICBsZXQgdmFsczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbcm93ICogNCArIGNvbF0gKiB2ZWMudmFsdWVzW2NvbF07XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdmFscy5wdXNoKHN1bSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzQodmFscyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYW5vdGhlciBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgbWF0cml4LlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0TShvdGhlcjogZ2xNYXQ0KTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZ2V0KHJvdywgaSkgKiBvdGhlci5nZXQoaSwgY29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCBzdW0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBJbnZlcnRzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaW52ZXJzZSBvZiB0aGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGludmVyc2UoKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBsZXQgYTAwID0gdGhpcy52YWx1ZXNbMF0sIGEwMSA9IHRoaXMudmFsdWVzWzFdLCBhMDIgPSB0aGlzLnZhbHVlc1syXSwgYTAzID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIGxldCBhMTAgPSB0aGlzLnZhbHVlc1s0XSwgYTExID0gdGhpcy52YWx1ZXNbNV0sIGExMiA9IHRoaXMudmFsdWVzWzZdLCBhMTMgPSB0aGlzLnZhbHVlc1s3XTtcclxuICAgICAgbGV0IGEyMCA9IHRoaXMudmFsdWVzWzhdLCBhMjEgPSB0aGlzLnZhbHVlc1s5XSwgYTIyID0gdGhpcy52YWx1ZXNbMTBdLCBhMjMgPSB0aGlzLnZhbHVlc1sxMV07XHJcbiAgICAgIGxldCBhMzAgPSB0aGlzLnZhbHVlc1sxMl0sIGEzMSA9IHRoaXMudmFsdWVzWzEzXSwgYTMyID0gdGhpcy52YWx1ZXNbMTRdLCBhMzMgPSB0aGlzLnZhbHVlc1sxNV07XHJcblxyXG4gICAgICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xyXG4gICAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xyXG4gICAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xyXG4gICAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xyXG4gICAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xyXG4gICAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xyXG4gICAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xyXG4gICAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xyXG4gICAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxyXG4gICAgICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgaWYgKCFkZXQpIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgcmVzdWx0LnZhbHVlc1swXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1szXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRyYW5zcG9zZXMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIG5ldyBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNwb3NlZCBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJhbnNwb3NlKCk6IGdsTWF0NCB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCB0aGlzLmdldChjb2wsIHJvdykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSBzY2FsZSBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gc2NhbGUgVGhlIHNjYWxlIGZhY3RvclxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tU2NhbGUoc2NhbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIHNjYWxlLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBzY2FsZSwgMCwgMCxcclxuICAgICAgICAgMCwgMCwgc2NhbGUsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSB0cmFuc2xhdGlvbiBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB0cmFuc2xhdGlvbnMuXHJcbiAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21UcmFuc2xhdGlvbih2OiBnbFZlYzMpOiBnbE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCB2LngsXHJcbiAgICAgICAgIDAsIDEsIDAsIHYueSxcclxuICAgICAgICAgMCwgMCwgMSwgdi56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RYKGFuZ2xlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAwLCAtcywgYywgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tUm90WShhbmdsZTogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgYywgMCwgLXMsIDAsXHJcbiAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFooYW5nbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKVxyXG4gICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKVxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGMsIHMsIDAsIDAsXHJcbiAgICAgICAgIC1zLCBjLCAwLCAwLFxyXG4gICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21Sb3RYKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFkoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tUm90WShhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVJvdFooYW5nbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21UcmFuc2xhdGlvbihvZmZzZXQpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tU2NhbGUoc2NhbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSB2aWV3aW5nIG1hdHJpeC4gU2VlIGdsdUxvb2tBdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBleWUgVGhlIGV5ZSBwb3NpdGlvbi5cclxuICAgICogQHBhcmFtIGNlbnRlciBUaGUgcG9pbnQgb2YgaW50ZXJlc3QuXHJcbiAgICAqIEBwYXJhbSB1cCBUaGUgdXAgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmlld2luZyBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VMb29rQXQoZXllOiBnbFZlYzMsIGNlbnRlcjogZ2xWZWMzLCB1cDogZ2xWZWMzLCApOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEgPSBleWUuc3VidHJhY3QoY2VudGVyKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGIgPSB1cC5jcm9zcyhhKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGMgPSBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgbGV0IG0gPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgYi54LCBiLnksIGIueiwgMCxcclxuICAgICAgICAgYy54LCBjLnksIGMueiwgMCxcclxuICAgICAgICAgYS54LCBhLnksIGEueiwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHZhciB0ID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIDEsIDAsIDAsIC1leWUueCxcclxuICAgICAgICAgMCwgMSwgMCwgLWV5ZS55LFxyXG4gICAgICAgICAwLCAwLCAxLCAtZXllLnosXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbS5tdWx0TSh0KTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1UGVyc3BlY3RpdmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZm92eSBGaWVsZCBvZiB2aWV3IChpbiBkZWdyZWVzKS5cclxuICAgICogQHBhcmFtIGFzcGVjdCBWaWV3IGFzcGVjdCByYXRpby5cclxuICAgICogQHBhcmFtIHpuZWFyIE5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIEZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZVBlcnNwZWN0aXZlKFxyXG4gICAgICBmb3Z5OiBudW1iZXIsXHJcbiAgICAgIGFzcGVjdDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIHltYXggPSB6bmVhciAqIE1hdGgudGFuKGZvdnkgKiBNYXRoLlBJIC8gMzYwLjApO1xyXG4gICAgICB2YXIgeW1pbiA9IC15bWF4O1xyXG4gICAgICB2YXIgeG1pbiA9IHltaW4gKiBhc3BlY3Q7XHJcbiAgICAgIHZhciB4bWF4ID0geW1heCAqIGFzcGVjdDtcclxuXHJcbiAgICAgIHJldHVybiBnbE1hdDQubWFrZUZydXN0dW0oeG1pbiwgeG1heCwgeW1pbiwgeW1heCwgem5lYXIsIHpmYXIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdUZydXN0dW0uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIGJvdHRvbSBUaGUgYm90dG9tIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6bmVhciBUaGUgbmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgVGhlIGZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHJldHVybnMgdGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZUZydXN0dW0oXHJcbiAgICAgIGxlZnQ6IG51bWJlcixcclxuICAgICAgcmlnaHQ6IG51bWJlcixcclxuICAgICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICAgIHRvcDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIFggPSAyICogem5lYXIgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIFkgPSAyICogem5lYXIgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEEgPSAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgQiA9ICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBDID0gLSh6ZmFyICsgem5lYXIpIC8gKHpmYXIgLSB6bmVhcik7XHJcbiAgICAgIHZhciBEID0gLTIgKiB6ZmFyICogem5lYXIgLyAoemZhciAtIHpuZWFyKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgWCwgMCwgQSwgMCxcclxuICAgICAgICAgMCwgWSwgQiwgMCxcclxuICAgICAgICAgMCwgMCwgQywgRCxcclxuICAgICAgICAgMCwgMCwgLTEsIDBcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1T3J0aG8uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIGJvdHRvbSBUaGUgYm90dG9tIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6bmVhciBUaGUgbmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgVGhlIGZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHJldHVybnMgdGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZU9ydGhvKFxyXG4gICAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgICB0b3A6IG51bWJlcixcclxuICAgICAgbmVhcjogbnVtYmVyLFxyXG4gICAgICBmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIDIgLyAocmlnaHQgLSBsZWZ0KSwgMCwgMCwgKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KSxcclxuICAgICAgICAgMCwgMiAvICh0b3AgLSBib3R0b20pLCAwLCAodG9wICsgYm90dG9tKSAvICh0b3AgLSBib3R0b20pLFxyXG4gICAgICAgICAwLCAwLCAyIC8gKGZhciAtIG5lYXIpLCAoZmFyICsgbmVhcikgLyAoZmFyIC0gbmVhciksXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcsIGRpZ2l0czogbnVtYmVyID0gMikge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IDQ7IHIrKykge1xyXG4gICAgICAgICBsZXQgbGluZSA9IFwiXCI7XHJcbiAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XHJcbiAgICAgICAgICAgIGxpbmUgKz0gdGhpcy5nZXQociwgYykudG9GaXhlZChkaWdpdHMpICsgJyAnO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGxpbmUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IGdsQnVmZmVyIH0gZnJvbSBcIi4vZ2xCdWZmZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gXCIuL2dsVW5pZm9ybVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xPYmplY3Qge1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgdE9iajogVHJpYW5nbGVPYmo7XHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogZ2xCdWZmZXI7XHJcbiAgIHByaXZhdGUgbm9ybWFsQnVmZmVyOiBnbEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBtb2RlbCA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0T2JqOiBUcmlhbmdsZU9iaiwgcHJvZ3JhbTogV2ViR0xQcm9ncmFtKSB7XHJcblxyXG4gICAgICB0aGlzLnRPYmogPSB0T2JqO1xyXG4gICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGJ1ZmZlcnMgKGFuZCBhc3NvY2lhdGVkIGF0dHJpYnV0ZXMpXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gbmV3IGdsQnVmZmVyKHByb2dyYW0sICdhVmVydGV4Jyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyID0gbmV3IGdsQnVmZmVyKHByb2dyYW0sICdhTm9ybWFsJyk7XHJcblxyXG4gICAgICB0aGlzLnVwbG9hZFRyaWFuZ2xlcygpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlci5kZWxldGUoKTtcclxuICAgICAgdGhpcy5ub3JtYWxCdWZmZXIuZGVsZXRlKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbC5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsLnJvdFooYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5tb2RlbC50cmFuc2xhdGUob2Zmc2V0KTtcclxuICAgfVxyXG4gICBwdWJsaWMgY2xlYXJUcmFuc2Zvcm1zKCkge1xyXG4gICAgICB0aGlzLm1vZGVsID0gbmV3IGdsTWF0NCgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHB1c2hWZWMoYXJyYXk6IG51bWJlcltdLCB2ZWM6IGdsVmVjMykge1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy54KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueSk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBsb2FkVHJpYW5nbGVzKCkge1xyXG5cclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgLy8gY29udmVydCB0aGUgdHJpYW5nbGVzIGludG8gYXJyYXlzIHRoYXQgY2FuIGJlIHVwbG9hZGVkXHJcbiAgICAgIGxldCB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50T2JqLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy50T2JqLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHZlcnRpY2VzLCB0cmkudjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRyaS52MSk7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyh2ZXJ0aWNlcywgdHJpLnYyKTtcclxuXHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyhub3JtYWxzLCB0cmkubjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWMobm9ybWFscywgdHJpLm4xKTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRyaS5uMik7XHJcbiAgICAgIH1cclxuICAgICAgcC5sb2coJ3RvIGdsVmVjW10nKTtcclxuXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyLnVwbG9hZCh2ZXJ0aWNlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLnVwbG9hZChub3JtYWxzKTtcclxuICAgICAgcC5sb2coJ3VwbG9hZCcpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ21vZGVsJywgdGhpcy5tb2RlbC50cmFuc3Bvc2UoKSk7XHJcblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmJpbmQoKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMudE9iai50cmlhbmdsZXMubGVuZ3RoICogMyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcHRpbWl6ZShub3JtYWxUeXBlOiBOb3JtYWxUeXBlKSB7XHJcbiAgICAgIHRoaXMudE9iai5vcHRpbWl6ZShub3JtYWxUeXBlKTtcclxuICAgICAgdGhpcy51cGxvYWRUcmlhbmdsZXMoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBGcmFtZUJ1ZmZlclN0eWxlIHtcclxuICAgTm9ybWFsLFxyXG4gICBEZXB0aCxcclxuICAgRmxvYXRcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZnJhbWUgYnVmZmVyIHRoYXQgY2FuIGJlIHJlbmRlcmVkIHRvXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xUZXh0dXJlRnJhbWVCdWZmZXIge1xyXG5cclxuICAgcHVibGljIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwdWJsaWMgY29sb3JUZXh0dXJlOiBXZWJHTFRleHR1cmU7XHJcbiAgIHB1YmxpYyBkZXB0aFRleHR1cmU6IFdlYkdMVGV4dHVyZTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBmcmFtZSBidWZmZXIgZm9yIHJlbmRlcmluZyBpbnRvIHRleHR1cmUgb2JqZWN0cy5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzdHlsZTogRnJhbWVCdWZmZXJTdHlsZSkge1xyXG5cclxuICAgICAgc3dpdGNoIChzdHlsZSkge1xyXG4gICAgICAgICBjYXNlIEZyYW1lQnVmZmVyU3R5bGUuTm9ybWFsOlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIEZyYW1lQnVmZmVyU3R5bGUuRGVwdGg6XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGVwdGgod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBGcmFtZUJ1ZmZlclN0eWxlLkZsb2F0OlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZsb2F0KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgYSBmcmFtZSBidWZmZXIgb2JqZWN0XHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgLy8gU3RlcCAyOiBDcmVhdGUgYW5kIGluaXRpYWxpemUgYSB0ZXh0dXJlIGJ1ZmZlciB0byBob2xkIHRoZSBjb2xvcnMuXHJcbiAgICAgIHRoaXMuY29sb3JUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCxcclxuICAgICAgICAgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cclxuICAgICAgLy8gU3RlcCA0OiBBdHRhY2ggdGhlIHNwZWNpZmljIGJ1ZmZlcnMgdG8gdGhlIGZyYW1lIGJ1ZmZlci5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSwgMCk7XHJcblxyXG4gICAgICAvLyBTdGVwIDU6IFZlcmlmeSB0aGF0IHRoZSBmcmFtZSBidWZmZXIgaXMgdmFsaWQuXHJcbiAgICAgIGxldCBzdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgbGV0IG1zZyA9IFwiVGhlIGNyZWF0ZWQgZnJhbWUgYnVmZmVyIGlzIGludmFsaWQ6IFwiICsgc3RhdHVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVuYmluZCB0aGVzZSBuZXcgb2JqZWN0cywgd2hpY2ggbWFrZXMgdGhlIGRlZmF1bHQgZnJhbWUgYnVmZmVyIHRoZVxyXG4gICAgICAvLyB0YXJnZXQgZm9yIHJlbmRlcmluZy5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlRGVwdGgod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgbGV0IGRlcHRoX3RleHR1cmVfZXh0ZW5zaW9uID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZXB0aF90ZXh0dXJlJyk7XHJcbiAgICAgIGlmICghZGVwdGhfdGV4dHVyZV9leHRlbnNpb24pIHtcclxuICAgICAgICAgYWxlcnQoJ1RoaXMgV2ViR0wgcHJvZ3JhbSByZXF1aXJlcyB0aGUgdXNlIG9mIHRoZSBXRUJHTF9kZXB0aF90ZXh0dXJlIGV4dGVuc2lvbi4nKTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTdGVwIDE6IENyZWF0ZSBhIGZyYW1lIGJ1ZmZlciBvYmplY3RcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcblxyXG4gICAgICAvLyBTdGVwIDI6IENyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIHRleHR1cmUgYnVmZmVyIHRvIGhvbGQgdGhlIGNvbG9ycy5cclxuICAgICAgdGhpcy5jb2xvclRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuY29sb3JUZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLFxyXG4gICAgICAgICBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBudWxsKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblxyXG4gICAgICAvLyBTdGVwIDM6IENyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIHRleHR1cmUgYnVmZmVyIHRvIGhvbGQgdGhlIGRlcHRoIHZhbHVlcy5cclxuICAgICAgLy8gTm90ZTogdGhlIFdFQkdMX2RlcHRoX3RleHR1cmUgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkIGZvciB0aGlzIHRvIHdvcmtcclxuICAgICAgLy8gICAgICAgYW5kIGZvciB0aGUgZ2wuREVQVEhfQ09NUE9ORU5UIHRleHR1cmUgZm9ybWF0IHRvIGJlIHN1cHBvcnRlZC5cclxuICAgICAgdGhpcy5kZXB0aFRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuZGVwdGhUZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5ERVBUSF9DT01QT05FTlQsIHdpZHRoLCBoZWlnaHQsIDAsXHJcbiAgICAgICAgIGdsLkRFUFRIX0NPTVBPTkVOVCwgZ2wuVU5TSUdORURfSU5ULCBudWxsKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblxyXG4gICAgICAvLyBTdGVwIDQ6IEF0dGFjaCB0aGUgc3BlY2lmaWMgYnVmZmVycyB0byB0aGUgZnJhbWUgYnVmZmVyLlxyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMuY29sb3JUZXh0dXJlLCAwKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkRFUFRIX0FUVEFDSE1FTlQsIGdsLlRFWFRVUkVfMkQsIHRoaXMuZGVwdGhUZXh0dXJlLCAwKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNTogVmVyaWZ5IHRoYXQgdGhlIGZyYW1lIGJ1ZmZlciBpcyB2YWxpZC5cclxuICAgICAgbGV0IHN0YXR1cyA9IGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpO1xyXG4gICAgICBpZiAoc3RhdHVzICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICBsZXQgbXNnID0gXCJUaGUgY3JlYXRlZCBmcmFtZSBidWZmZXIgaXMgaW52YWxpZDogXCIgKyBzdGF0dXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgYWxlcnQobXNnKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVW5iaW5kIHRoZXNlIG5ldyBvYmplY3RzLCB3aGljaCBtYWtlcyB0aGUgZGVmYXVsdCBmcmFtZSBidWZmZXIgdGhlXHJcbiAgICAgIC8vIHRhcmdldCBmb3IgcmVuZGVyaW5nLlxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNyZWF0ZUZsb2F0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIHNldHRpbmcgdW5pZm9ybSB2YWx1ZXMgaW4gYSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFVuaWZvcm0ge1xyXG4gICAvLyB0aGUgV2ViR0wgc2hhZGVyIHByb2dyYW1cclxuICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBvYmplY3QgZm9yIHNldHRpbmcgdmFsdWVzIGFuZCBjYWxscyBnbC51c2VQcm9ncmFtXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcHJvZ3JhbSBUaGUgcHJvZ3JhbSBhc3NvY2lhdGVkIHdpdGggdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocHJvZ3JhbTogV2ViR0xQcm9ncmFtKSB7XHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdW5pZm9ybSB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5hbWUgVGhlIHZhcmlhYmxlIG5hbWVcclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZVxyXG4gICAgKiBAcGFyYW0gaW50IElmIHRydWUgYW5kIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhbiBpbnRlZ2VyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlciB8IGdsVmVjMyB8IGdsQ29sb3IgfCBnbE1hdDQsIGludDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICBsZXQgbG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSk7XHJcbiAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xWZWMzKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jLCBuZXcgRmxvYXQzMkFycmF5KHZhbHVlLnZhbHVlcykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xDb2xvcikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvYywgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuciwgdmFsdWUuZywgdmFsdWUuYl0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsTWF0NCkge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvYywgZmFsc2UsIG5ldyBGbG9hdDMyQXJyYXkodmFsdWUudmFsdWVzKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJ1TW9kZVwiKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2MsIHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGludCkge1xyXG4gICAgICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xZihsb2MsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYW4gaW50ZWdlciB1bmlmb3JtIHZhbHVlIChzYW1lIGFzIHNldChuYW1lLCB2YWx1ZSwgdHJ1ZSkpXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbmFtZSBUaGUgdmFyaWFibGUgbmFtZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0aShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUsIHRydWUpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhbGwgdmFsdWVzIGZvciB2YXJpYWJsZXMgc3RvcmVkIGFzIG1lbWJlcnMgb2YgYW4gb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdW5pZm9ybXMgVGhlIG9iamVjdCB3aXRoIG1lbWJlciB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXRBbGwodW5pZm9ybXM6IGFueSkge1xyXG5cclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiB1bmlmb3Jtcykge1xyXG4gICAgICAgICB2YXIgdmFsdWUgPSB1bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdsVW5pZm9ybUJsb2NrIHtcclxuICAgcHJpdmF0ZSBibG9ja0xvY2F0aW9uOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgYmxvY2tCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IocHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBibG9ja05hbWU6IHN0cmluZywgYmxvY2tCaW5kaW5nOiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGxldCBnbDIgPSBnbCBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5ibG9ja0xvY2F0aW9uID0gZ2wyLmdldFVuaWZvcm1CbG9ja0luZGV4KHByb2dyYW0sIGJsb2NrTmFtZSk7XHJcbiAgICAgIGdsMi51bmlmb3JtQmxvY2tCaW5kaW5nKHByb2dyYW0sIHRoaXMuYmxvY2tMb2NhdGlvbiwgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIHRoaXMuYmxvY2tCdWZmZXIgPSBnbDIuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyQmFzZShnbDIuVU5JRk9STV9CVUZGRVIsIGJsb2NrQmluZGluZywgdGhpcy5ibG9ja0J1ZmZlcik7XHJcbiAgIH1cclxuXHJcbiAgIHVwbG9hZChkYXRhOiBGbG9hdDMyQXJyYXkgfCBJbnQzMkFycmF5KSB7XHJcblxyXG4gICAgICBsZXQgZ2wyID0gZ2wgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCB0aGlzLmJsb2NrQnVmZmVyKTtcclxuICAgICAgZ2wyLmJ1ZmZlckRhdGEoZ2wyLlVOSUZPUk1fQlVGRkVSLCBkYXRhLCBnbDIuU1RBVElDX0RSQVcpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgLypcclxuICAgICAgdmFyIHVuaWZvcm1CbG9ja0J1ZmZlciA9IGdsMi5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCB1bmlmb3JtQmxvY2tCdWZmZXIpO1xyXG4gICAgICBnbDIuYnVmZmVyRGF0YShnbDIuVU5JRk9STV9CVUZGRVIsIHRyaWFuZ2xlRGF0YSwgZ2wyLlNUQVRJQ19EUkFXKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCBudWxsKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXJCYXNlKGdsMi5VTklGT1JNX0JVRkZFUiwgMiwgdW5pZm9ybUJsb2NrQnVmZmVyKTtcclxuICAgICAgKi9cclxuXHJcbiAgIH1cclxufSIsIlxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBnbFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjMiBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigyKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xWZWMyIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzIodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSB0byBhbm90aGVyIHBvaW50XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHBvaW50XHJcbiAgICAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgcG9pbnQgYW5kIHRoZSBvdGhlciBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIGRpc3RhbmNlKG90aGVyOiBnbFZlYzIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCAtIG90aGVyLngsIDIpICsgTWF0aC5wb3codGhpcy55IC0gb3RoZXIueSwgMikpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkteiB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWMzIGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGRpZ2l0cyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGRpc3BsYXkuIFRoaXMgdmFsdWUgaXMgcGFzc2VkIHRvIHRvRml4ZWQoKS5cclxuICAgICogQHBhcmFtIGRpdmlkZXIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBlYWNoIG51bWJlci5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIsIGRpdmlkZXIgPSAnLCcpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy54LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnkudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMuei50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBub3JtYWxpemUoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGxldCByZXQgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXQudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnRyYWN0KHZlYzogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAtIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC0gdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLSB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQWRkcyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBhZGQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYWRkKHZlYzogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSArIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdICsgdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gKyB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGxldCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjNCBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhbiB4LXkteiB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IGlzIGNvbXB1dGVkIGJ5IGRpdmlkaW5nIHRoaXMgdmVjdG9yc1xyXG4gICAgKiBlbGVtZW50cyBieSB0aGUgdyB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIHgteS16IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXZpZGVCeVcoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgdG9Dc3MgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjU1XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHRtbENvbG9yIGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSB3aGl0ZSA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBibGFjayA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSByZWQgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDAsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBncmVlbiA9IG5ldyBodG1sQ29sb3IoWzAsIDI1NSwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJsdWUgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAyNTVdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBvcmFuZ2UgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDE2NSwgMF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gMykge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgMyBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYyBUaGUgbnVtZXJpYyB2YWx1ZVxyXG4gICAgKiBAcmV0dXJucyBUaGUgaGV4IHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbXBvbmVudFRvSGV4KGM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBoZXggc3RyaW5nIChlLmcuICMwZjBmMGYpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBoZXggc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSGV4KCk6IHN0cmluZyB7XHJcbiAgICAgIGxldCBySGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLnIpO1xyXG4gICAgICBsZXQgZ0hleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5nKTtcclxuICAgICAgbGV0IGJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBcIiNcIiArIHJIZXggKyBnSGV4ICsgYkhleDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgY3NzIHN0cmluZyAoZS5nLiAncmdiKDEyOCwyMjgsMzIpJykuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY3NzIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0NzcygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdG9Dc3ModGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIGNzcyBzdHlsZSBzdHJpbmcgKGUuZy4gJ3JnYigyNCwzNiw4MyknKSB0byBhIGNvbG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY3NzIFRoZSBjc3Mgc3RyaW5nLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Dc3MoY3NzOiBzdHJpbmcpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgcmVnZXggPSAvXFxkKy9nO1xyXG4gICAgICBsZXQgdmFscyA9IGNzcy5tYXRjaChyZWdleCkuc2xpY2UoMCwgMyk7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtwYXJzZUludCh2YWxzWzBdKSwgcGFyc2VJbnQodmFsc1sxXSksIHBhcnNlSW50KHZhbHNbMl0pXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgZnJvbSBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBoZXggVGhlIGhleCBzdHJpbmdcclxuICAgICogQHJldHVybnMgVGhlIGh0bWxDb2xvciBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUhleChoZXg6IHN0cmluZyk6IGh0bWxDb2xvciB7XHJcbiAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICBsZXQgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xyXG4gICAgICAgICBsZXQgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gICAgICAgICBsZXQgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xyXG4gICAgICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IHVzaW5nIHZhbHVlcyBpbiBhIENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBIGdlbmVyaWMgQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tQ29sb3IoY29sb3I6IENvbG9yKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBodG1sQ29sb3IuY2xhbXAoY29sb3Iucik7XHJcbiAgICAgIGxldCBnID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLmcpO1xyXG4gICAgICBsZXQgYiA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5iKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJvdW5kcyBhIG51bWJlciB0byBhIHdob2xlIG51bWJlciBhbmQgY2xhbXBzIGl0IGJldHdlZW4gMCBhbmQgMjU1LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqIEByZXR1cm5zIFRoZSByb3VuZGVkICYgY2xhbXBlZCB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY2xhbXAodmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICB2YWwgPSBNYXRoLnJvdW5kKHZhbCk7XHJcbiAgICAgIGlmICh2YWwgPCAwKSB7XHJcbiAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbCA+IDI1NSkge1xyXG4gICAgICAgICByZXR1cm4gMjU1O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIGNvbG9yIHRvIGFuIGVxdWl2YWxlbnQgZ3JheS1zY2FsZSBjb2xvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGdyYXktc2NhbGUgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HcmF5KCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByZ2IgPSBNYXRoLnJvdW5kKCh0aGlzLnIgKyB0aGlzLmcgKyB0aGlzLmIpIC8gMyk7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyZ2IsIHJnYiwgcmdiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIFdlYkdMIGNvbG9yIG9iamVjdCAoMC0xIGJhc2VkKVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBnbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dsQ29sb3IoKTogZ2xDb2xvciB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbdGhpcy5yIC8gMjU1LCB0aGlzLmcgLyAyNTUsIHRoaXMuYiAvIDI1NV0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgdG9Dc3MgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQW4gaHRtbCBjb2xvciB3aXRoIGEgdHJhbnNwYXJlbmN5IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHRtbENvbG9yV2l0aEFscGhhIGV4dGVuZHMgaHRtbENvbG9yIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHJhbnNwYXJlbnQgPSBuZXcgaHRtbENvbG9yV2l0aEFscGhhKFswLCAwLCAwLCAwXSk7XHJcblxyXG4gICAvKiogVGhlIHRyYW5zcGFyZW5jeSAoYWxwaGEpIHZhbHVlICovXHJcbiAgIHB1YmxpYyBhOiBudW1iZXIgPSAyNTU7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQkEgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIHN1cGVyKFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdXSk7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDQpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDQgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29sb3JbNF0gPCAwIHx8IGNvbG9yWzRdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2EnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hID0gY29sb3JbM107XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGNzcyBzdHJpbmcgKGUuZy4gJ3JnYigxMjgsMjI4LDMyLDI1NSknKS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjc3Mgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvQ3NzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0b0Nzcyh0aGlzLnIsIHRoaXMuZywgdGhpcy5iLCB0aGlzLmEpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBQYXRoVHJhY2VyQXBwIH0gZnJvbSBcIi4vUGF0aFRyYWNlckFwcFwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBQbGFuZXNBcHAgfSBmcm9tIFwiLi9QbGFuZXNBcHBcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICBsZXQgcXVlcnk6IHN0cmluZztcclxuICAgbGV0IHR5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1xyXG4gICAgICBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xyXG5cclxuICAgICAgbGV0IHRva2VucyA9IHF1ZXJ5LnNwbGl0KCctJyk7XHJcbiAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgIHR5cGUgPSB0b2tlbnNbMF07XHJcbiAgICAgICAgIHF1ZXJ5ID0gdG9rZW5zWzFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0eXBlID0gdG9rZW5zWzBdO1xyXG4gICAgICAgICBxdWVyeSA9ICcnO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGlmICh0eXBlID09PSAncGxhbmVzJykge1xyXG4gICAgICBsZXQgYXBwID0gbmV3IFBsYW5lc0FwcChxdWVyeSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLmNvbXBvbmVudCgpKTtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgbGV0IGFwcCA9IG5ldyBQYXRoVHJhY2VyQXBwKHF1ZXJ5KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY29tcG9uZW50KCkpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIGludCB1TW9kZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVNYXhDaHJvbWE7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVIaWdobGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdU1pZExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVEYXJrTGlnaHRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdVNoYWRvd0NvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1UmVmbGVjdGVkTGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdURhcmtBY2NlbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3dBbHBoYTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcblxcclxcbiNkZWZpbmUgTU9ERV9TQ0lFTkNFIDBcXHJcXG4jZGVmaW5lIE1PREVfVkFMVUUgMVxcclxcbiNkZWZpbmUgTU9ERV9DSFJPTUEgMlxcclxcbiNkZWZpbmUgTU9ERV9CQU5EUyAzXFxyXFxuXFxyXFxudmVjNCB3aGl0ZSA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IHJlZCA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IG9yYW5nZSA9IHZlYzQoMS4wLCAwLjY1LCAwLjAsIDEuMCk7XFxyXFxudmVjNCB5ZWxsb3cgPSB2ZWM0KDEuMCwgMS4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBncmVlbiA9IHZlYzQoMC4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGN5YW4gPSB2ZWM0KDAuMCwgMS4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibHVlID0gdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgYmxhY2sgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuI2RlZmluZSBOVU1fQ09MT1JTIDZcXHJcXG52ZWM0IGNvbG9yc1tOVU1fQ09MT1JTXTtcXHJcXG5cXHJcXG52ZWM0IHZhbHVlMkNvbG9yKGZsb2F0IHZhbHVlKVxcclxcbntcXHJcXG4gICBmbG9hdCBzcGFuID0gMS4wIC8gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIHZhbHVlICo9IGZsb2F0KE5VTV9DT0xPUlMgLSAxKTtcXHJcXG4gICBpZiAodmFsdWUgPCAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF07XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzBdICsgdmFsdWUgKiAoY29sb3JzWzFdIC0gY29sb3JzWzBdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAyLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMV0gKyAodmFsdWUgLSAxLjApICogKGNvbG9yc1syXSAtIGNvbG9yc1sxXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMy4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzJdICsgKHZhbHVlIC0gMi4wKSAqIChjb2xvcnNbM10gLSBjb2xvcnNbMl0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDQuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1szXSArICh2YWx1ZSAtIDMuMCkgKiAoY29sb3JzWzRdIC0gY29sb3JzWzNdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA1LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNF0gKyAodmFsdWUgLSA0LjApICogKGNvbG9yc1s1XSAtIGNvbG9yc1s0XSk7XFxyXFxuICAgfVxcclxcbiAgIC8qXFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA2LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNV0gKyAodmFsdWUgLSA1LjApICogKGNvbG9yc1s2XSAtIGNvbG9yc1s1XSk7XFxyXFxuICAgfVxcclxcbiAgICovXFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzW05VTV9DT0xPUlMgLSAxXTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc1ZhbHVlKClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbiAgIGZsb2F0IHJnYiA9IHRvR3JheShjb2xvcik7XFxyXFxuICAgcmV0dXJuIHZlYzQocmdiLCByZ2IsIHJnYiwgMS4wKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc0Nocm9tYSgpXFxyXFxue1xcclxcbiAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG5cXHJcXG4gICAvLyByZW5kZXIgdGhlIHNjYWxlIGFzIGEgYmFyIG9uIHRoZSBsZWZ0XFxyXFxuICAgaWYgKHRleENvb3JkLnggPCAwLjAzKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdmFsdWUyQ29sb3IoKHRleENvb3JkLnkgLSAwLjEpIC8gMC45KTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+PSB1U2hhZG93QWxwaGEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZsb2F0IGF2ZyA9IChjb2xvci5yICsgY29sb3IuZyArIGNvbG9yLmIpIC8gMy4wO1xcclxcbiAgICAgICAgIGZsb2F0IHJnYiA9IChhYnMoYXZnIC0gY29sb3IucikgKyBhYnMoYXZnIC0gY29sb3IuZykgKyBhYnMoYXZnIC0gY29sb3IuYikpIC8gKDQuMCAvIDMuMCk7XFxyXFxuICAgICAgICAgcmV0dXJuIHZhbHVlMkNvbG9yKHJnYiAvIHVNYXhDaHJvbWEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgZDIodmVjMyBjMSwgdmVjMyBjMilcXHJcXG57XFxyXFxuICAgLy8gc3VtIHRoZSBzcXVhcmVzIG9mIHRoZSBkaWZmZXJlbmNlc1xcclxcbiAgIHJldHVybiBwb3coYzEuciAtIGMyLnIsIDIuMCkgKyBwb3coYzEuZyAtIGMyLmcsIDIuMCkgKyBwb3coYzEuYiAtIGMyLmIsIDIuMCk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgY2xvc2VzdCh2ZWMzIGNvbG9yLCB2ZWMzIGxpZ2h0LCB2ZWMzIG1pZCwgdmVjMyBkYXJrKVxcclxcbntcXHJcXG4gICBmbG9hdCBkbGlnaHQgPSBkMihjb2xvciwgbGlnaHQpO1xcclxcbiAgIGZsb2F0IGRtaWQgPSBkMihjb2xvciwgbWlkKTtcXHJcXG4gICBmbG9hdCBkZGFyayA9IGQyKGNvbG9yLCBkYXJrKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkbWluID0gbWluKGRsaWdodCwgbWluKGRtaWQsIGRkYXJrKSk7XFxyXFxuICAgaWYgKGRtaW4gPT0gZGxpZ2h0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbGlnaHQ7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKGRtaW4gPT0gZG1pZClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIG1pZDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gZGFyaztcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNCYW5kcygpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNpemUgPSAwLjA3O1xcclxcbiAgIGZsb2F0IG1hcmdpbiA9ICgxLjAgLSA2LjAgKiBzaXplKSAvIDIuMDtcXHJcXG4gICBpZiAodGV4Q29vcmQueCA8IHNpemUgJiYgdGV4Q29vcmQueSA+IG1hcmdpbiAmJiB0ZXhDb29yZC55IDwgKDEuMCAtIG1hcmdpbikpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDEuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1RGFya0FjY2VudENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDIuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1U2hhZG93Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVEYXJrTGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA0LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodU1pZExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNS4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVMaWdodExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgLy8gaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgICAgIC8vIGRlZmluZSB0aGUgdGVybWluYXRvciBhcyB0aGUgcG9pbnQgd2hlcmUgdGhpbmdzIGFyZSA1MCUgaW4gc2hhZG93XFxyXFxuICAgICAgZmxvYXQgdGVybWluYXRvciA9ICgodVNoYWRvd0FscGhhICsgdUxpZ2h0QWxwaGEpIC8gMi4wKTtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+IDEuMCAmJiBjb2xvci5hIDw9IHRlcm1pbmF0b3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZlYzMgYyA9IGNsb3Nlc3QoY29sb3IucmdiLCB1U2hhZG93Q29sb3IsIHVSZWZsZWN0ZWRMaWdodENvbG9yLCB1RGFya0FjY2VudENvbG9yKTtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmIChjb2xvci5hID4gdGVybWluYXRvcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gb25seSByZW5kZXIgdGhlIGhpZ2hsaWdodCB3aGVyZSBpdCdzIGNvbnRyaWJ1dGlvbiBpcyBzaWduaWZpY2FudCwgaS5lLiBncmVhdGVyXFxyXFxuICAgICAgICAgLy8gdGhhbiBzb21lIHRocmVzaG9sZFxcclxcbiAgICAgICAgIGNvbnN0IGZsb2F0IFNQRUNVTEFSX1RIUkVTSE9MRCA9IDAuMTtcXHJcXG4gICAgICAgICBpZiAoY29sb3IuYSA+ICh1TGlnaHRBbHBoYSArIFNQRUNVTEFSX1RIUkVTSE9MRCkpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2ZWMzIGMgPSBjbG9zZXN0KGNvbG9yLnJnYiwgdUxpZ2h0TGlnaHRDb2xvciwgdU1pZExpZ2h0Q29sb3IsIHVEYXJrTGlnaHRDb2xvcik7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHZlYzQoYywgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIGNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNTY2llbmNlKClcXHJcXG57XFxyXFxuICAgLy8ganVzdCByZXR1cm4gdGhlIHRleHR1cmVcXHJcXG4gICByZXR1cm4gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGNvbG9yc1swXSA9IGJsYWNrO1xcclxcbiAgIGNvbG9yc1sxXSA9IGJsdWU7XFxyXFxuICAgY29sb3JzWzJdID0gZ3JlZW47XFxyXFxuICAgY29sb3JzWzNdID0geWVsbG93O1xcclxcbiAgIGNvbG9yc1s0XSA9IG9yYW5nZTtcXHJcXG4gICBjb2xvcnNbNV0gPSByZWQ7XFxyXFxuXFxyXFxuICAgaWYgKHVNb2RlID09IE1PREVfVkFMVUUpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzVmFsdWUoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9DSFJPTUEpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQ2hyb21hKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQkFORFMpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQmFuZHMoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc1NjaWVuY2UoKTtcXHJcXG4gICB9XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNjYWxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdVhPZmZzZXQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1WU9mZnNldDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB0ZXhDb29yZCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodVNjYWxlICogdmVydGV4LnggKyB1WE9mZnNldCwgdVNjYWxlICogdmVydGV4LnkgKyB1WU9mZnNldCwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPFZFUlNJT04+XFxyXFxuXFxyXFxuI2RlZmluZSBOT1RISU5HXFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4jZGVmaW5lIEVTMzAwXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbmluIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZWxzZVxcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZlxcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1RXllO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRleHR1cmVTaXplO1xcclxcbnVuaWZvcm0gZmxvYXQgdVJhbmRvbTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0UG9zO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVPYmpDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVCYWxsUmFkaXVzO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNhbXBsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvd0FscGhhO1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbm91dCB2ZWM0IGZyYWdDb2xvcjtcXHJcXG4jZWxzZVxcclxcbiNkZWZpbmUgZnJhZ0NvbG9yIGdsX0ZyYWdDb2xvclxcclxcbiNkZWZpbmUgdGV4dHVyZSB0ZXh0dXJlMkRcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5jb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDtcXHJcXG5jb25zdCBmbG9hdCBFUFNJTE9OID0gMC4wMDAwMDE7XFxyXFxuY29uc3QgZmxvYXQgT0ZGU0VUID0gMC4wMDAxO1xcclxcbmNvbnN0IGZsb2F0IElORklOSVRZID0gMTAwMDAuMDtcXHJcXG5jb25zdCBmbG9hdCBMSUdIVF9TSVpFID0gMC4xO1xcclxcbiNkZWZpbmUgQkFMTF9DRU5URVIgdmVjMygwLCB1QmFsbFJhZGl1cywgMClcXHJcXG5jb25zdCB2ZWMzIERPTUVfQ0VOVEVSID0gdmVjMygwLCAwLCAwKTtcXHJcXG5jb25zdCBmbG9hdCBET01FX1JBRElVUyA9IDguMDtcXHJcXG5jb25zdCBmbG9hdCBWQUwgPSAwLjg7XFxyXFxuY29uc3QgdmVjMyBET01FX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEZMT09SX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEFNQklFTlRfQ09MT1IgPSB2ZWMzKDEuMCwgMS4wLCAxLjApO1xcclxcbmNvbnN0IGludCBOVU1fTElHSFRTID0gNjtcXHJcXG5jb25zdCBmbG9hdCBIRUlHSFQgPSA1LjA7XFxyXFxuY29uc3QgZmxvYXQgUkFESVVTID0gNC4wO1xcclxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTtcXHJcXG5cXHJcXG5zdHJ1Y3QgTGlnaHRcXHJcXG57XFxyXFxuICAgZmxvYXQgaW50ZW5zaXR5O1xcclxcbiAgIGZsb2F0IHNpemU7XFxyXFxuICAgdmVjMyBwb3M7XFxyXFxuICAgdmVjMyBjb2xvcjtcXHJcXG59O1xcclxcblxcclxcbiBMaWdodCBMaWdodHNbTlVNX0xJR0hUU107XFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG5zdHJ1Y3QgVHJpYW5nbGVcXHJcXG57XFxyXFxuICAgdmVjMyBwMDtcXHJcXG4gICB2ZWMzIHAxO1xcclxcbiAgIHZlYzMgcDI7XFxyXFxufTtcXHJcXG5cXHJcXG5zdHJ1Y3QgVm9sdW1lXFxyXFxue1xcclxcbiAgIGludCBzdGFydEluZGV4O1xcclxcbiAgIGludCBudW1UcmlhbmdsZXM7XFxyXFxuICAgdmVjMyBib3hNaW47XFxyXFxuICAgdmVjMyBib3hNYXg7XFxyXFxufTtcXHJcXG5cXHJcXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgaXMgcmVwbGFjZWQgd2l0aCBjb2RlIGdlbmVyYXRlZCBpbiBKYXZhU2NyaXB0XFxyXFxuY29uc3QgaW50IE5VTV9WRVJUSUNFUyA9IDxOVU1fVkVSVElDRVM+O1xcclxcbmNvbnN0IGludCBOVU1fVk9MVU1FUyA9IDxOVU1fVk9MVU1FUz47XFxyXFxuY29uc3QgaW50IE5VTV9UUklBTkdMRVMgPSA8TlVNX1RSSUFOR0xFUz47XFxyXFxuXFxyXFxubGF5b3V0KHN0ZDE0MCkgdW5pZm9ybSBNeVZlcnRpY2VzQmxvY2sgeyB2ZWMzIHZlcnRpY2VzW05VTV9WRVJUSUNFU107IH07XFxyXFxuXFxyXFxuc3RydWN0IElUcmlhbmdsZVxcclxcbntcXHJcXG4gICBpbnQgaTA7XFxyXFxuICAgaW50IGkxO1xcclxcbiAgIGludCBpMjtcXHJcXG59O1xcclxcblxcclxcbmxheW91dChzdGQxNDApIHVuaWZvcm0gTXlUcmlhbmdsZXNCbG9jayB7IElUcmlhbmdsZSB0cmlhbmdsZXNbTlVNX1RSSUFOR0xFU107IH07XFxyXFxuVHJpYW5nbGUgZ2V0VHJpYW5nbGUoaW50IGluZGV4KVxcclxcbntcXHJcXG4gICBJVHJpYW5nbGUgdHJpID0gdHJpYW5nbGVzW2luZGV4XTtcXHJcXG4gICB2ZWMzIHAwID0gdmVydGljZXNbdHJpLmkwXTtcXHJcXG4gICB2ZWMzIHAxID0gdmVydGljZXNbdHJpLmkxXTtcXHJcXG4gICB2ZWMzIHAyID0gdmVydGljZXNbdHJpLmkyXTtcXHJcXG4gICByZXR1cm4gVHJpYW5nbGUocDAsIHAxLCBwMik7XFxyXFxufVxcclxcblxcclxcbi8vIFRoZSBjZW50cmFsIG9iamVjdCBiZWluZyByZW5kZXJlZFxcclxcbnN0cnVjdCBPYmplY3RcXHJcXG57XFxyXFxuICAgVm9sdW1lIHZvbHVtZXNbTlVNX1ZPTFVNRVNdO1xcclxcbiAgIHZlYzMgYm94TWluO1xcclxcbiAgIHZlYzMgYm94TWF4O1xcclxcbn07XFxyXFxuXFxyXFxudW5pZm9ybSBPYmplY3Qgb2JqZWN0O1xcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0Qm94KGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgY29uc3QgdmVjMyBib3hNaW4sIGNvbnN0IHZlYzMgYm94TWF4KVxcclxcbntcXHJcXG4gICB2ZWMzIHJheUludiA9IDEuMCAvIHJheTtcXHJcXG4gICB2ZWMzIHRib3QgPSByYXlJbnYgKiAoYm94TWluIC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHR0b3AgPSByYXlJbnYgKiAoYm94TWF4IC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHRtaW4gPSBtaW4odHRvcCwgdGJvdCk7XFxyXFxuICAgdmVjMyB0bWF4ID0gbWF4KHR0b3AsIHRib3QpO1xcclxcbiAgIHZlYzIgdCA9IG1heCh0bWluLnh4LCB0bWluLnl6KTtcXHJcXG4gICBmbG9hdCB0MCA9IG1heCh0LngsIHQueSk7XFxyXFxuICAgdCA9IG1pbih0bWF4Lnh4LCB0bWF4Lnl6KTtcXHJcXG4gICBmbG9hdCB0MSA9IG1pbih0LngsIHQueSk7XFxyXFxuICAgcmV0dXJuIHQxID4gbWF4KHQwLCAwLjApO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdFZvbChjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIFZvbHVtZSB2b2wpXFxyXFxue1xcclxcbiAgIGlmICh2b2wubnVtVHJpYW5nbGVzID09IDApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgdm9sLmJveE1pbiwgdm9sLmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0T2JqKGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgT2JqZWN0IG9iamVjdClcXHJcXG57XFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgb2JqZWN0LmJveE1pbiwgb2JqZWN0LmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbi8vIE3DtmxsZXLigJNUcnVtYm9yZSByYXktdHJpYW5nbGUgaW50ZXJzZWN0aW9uIGFsZ29yaXRobVxcclxcbi8vIHNvdXJjZTogaHR0cDovL2JpdC5seS8yTXhuUE1HXFxyXFxuZmxvYXQgaW50ZXJzZWN0VHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBUcmlhbmdsZSB0cmkpXFxyXFxue1xcclxcbiAgIHZlYzMgZWRnZTEsIGVkZ2UyLCBoLCBzLCBxO1xcclxcbiAgIGZsb2F0IGEsIGYsIHUsIHY7XFxyXFxuICAgZWRnZTEgPSB0cmkucDEgLSB0cmkucDA7XFxyXFxuICAgZWRnZTIgPSB0cmkucDIgLSB0cmkucDA7XFxyXFxuXFxyXFxuICAgaCA9IGNyb3NzKHJheSwgZWRnZTIpO1xcclxcbiAgIGEgPSBkb3QoZWRnZTEsIGgpO1xcclxcbiAgIGlmIChhYnMoYSkgPCBFUFNJTE9OKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICBmID0gMS4wIC8gYTtcXHJcXG4gICBzID0gb3JpZ2luIC0gdHJpLnAwO1xcclxcbiAgIHUgPSBmICogZG90KHMsIGgpO1xcclxcbiAgIGlmICh1IDwgMC4wIHx8IHUgPiAxLjApXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHEgPSBjcm9zcyhzLCBlZGdlMSk7XFxyXFxuICAgdiA9IGYgKiBkb3QocmF5LCBxKTtcXHJcXG4gICBpZiAodiA8IDAuMCB8fCAodSArIHYpID4gMS4wKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAvLyBBdCB0aGlzIHN0YWdlIHdlIGNhbiBjb21wdXRlIHQgdG8gZmluZCBvdXQgd2hlcmUgdGhlIGludGVyc2VjdGlvbiBwb2ludCBpcyBvbiB0aGUgbGluZS5cXHJcXG4gICBmbG9hdCB0ID0gZiAqIGRvdChlZGdlMiwgcSk7XFxyXFxuICAgaWYgKHQgPD0gRVBTSUxPTikgLy8gdGhpcyBtZWFucyB0aGF0IHRoZXJlIGlzIGEgbGluZSBpbnRlcnNlY3Rpb24gYnV0IG5vdCBhIHJheSBpbnRlcnNlY3Rpb24uXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHJldHVybiB0OyAvLyByYXkgaW50ZXJzZWN0aW9uXFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yVHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgaGl0LCBpbnQgdEluZGV4KVxcclxcbntcXHJcXG4gICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZSh0SW5kZXgpO1xcclxcbiAgIHZlYzMgbm9ybWFsID0gY3Jvc3ModHJpLnAxIC0gdHJpLnAwLCB0cmkucDIgLSB0cmkucDApO1xcclxcbiAgIG5vcm1hbCA9IG5vcm1hbGl6ZShub3JtYWwpO1xcclxcbiAgIGlmIChkb3Qobm9ybWFsLCBvcmlnaW4gLSBoaXQpID4gMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbm9ybWFsO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiAtbm9ybWFsO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuZmxvYXQgaW50ZXJzZWN0U3BoZXJlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXHJcXG4gICBmbG9hdCBhID0gZG90KHJheSwgcmF5KTtcXHJcXG4gICBmbG9hdCBiID0gMi4wICogZG90KHRvU3BoZXJlLCByYXkpO1xcclxcbiAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cyAqIHNwaGVyZVJhZGl1cztcXHJcXG4gICBmbG9hdCBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xcclxcbiAgIGlmIChkaXNjcmltaW5hbnQgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHQxID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBmbG9hdCB0MiA9ICgtYiArIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgaWYgKHQxID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQyID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDI7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yU3BoZXJlKHZlYzMgaGl0LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICByZXR1cm4gKGhpdCAtIHNwaGVyZUNlbnRlcikgLyBzcGhlcmVSYWRpdXM7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6ICsgc2VlZCwgc2NhbGUpKSAqIDQzNzU4LjU0NTMgKyBzZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbihmbG9hdCBzZWVkLCB2ZWMzIG5vcm1hbClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCkgPCAuNSlcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygxLCAwLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygwLCAxLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByICogY29zKGFuZ2xlKSAqIHNkaXIgKyByICogc2luKGFuZ2xlKSAqIHRkaXIgKyBzcXJ0KDEuIC0gdSkgKiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB6ID0gMS4wIC0gMi4wICogdTtcXHJcXG4gICBmbG9hdCByID0gc3FydCgxLjAgLSB6ICogeik7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgcmV0dXJuIHZlYzMociAqIGNvcyhhbmdsZSksIHIgKiBzaW4oYW5nbGUpLCB6KTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihzZWVkKSAqIHNxcnQocmFuZG9tKHZlYzMoMzYuNzUzOSwgNTAuMzY1OCwgMzA2LjI3NTkpLCBzZWVkKSk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW5TaGFkb3codmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBmbG9hdCB0TGlnaHQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcbiAgIGlmICh0QmFsbCA8IHRMaWdodClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgaWYgKGludGVyc2VjdE9iaihvcmlnaW4sIHJheSwgb2JqZWN0KSlcXHJcXG4gICB7XFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fVk9MVU1FUzsgaSsrKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBWb2x1bWUgdm9sID0gb2JqZWN0LnZvbHVtZXNbaV07XFxyXFxuICAgICAgICAgaWYgKGludGVyc2VjdFZvbChvcmlnaW4sIHJheSwgdm9sKSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IHZvbC5zdGFydEluZGV4OyBpIDwgKHZvbC5zdGFydEluZGV4ICsgdm9sLm51bVRyaWFuZ2xlcyk7IGkrKylcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUoaSk7XFxyXFxuICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpIDwgdExpZ2h0KVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiNlbmRpZlxcclxcblxcclxcbiAgIHJldHVybiBmYWxzZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZSBbMOKApjFdLCBpbmNsdWRpbmcgaHVlLlxcclxcbnZlYzQgcmdiMmhzdih2ZWM0IGMpXFxyXFxue1xcclxcbiAgIHZlYzQgSyA9IHZlYzQoMC4wLCAtMS4wIC8gMy4wLCAyLjAgLyAzLjAsIC0xLjApO1xcclxcbiAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLCB2ZWM0KGMuZ2IsIEsueHkpLCBzdGVwKGMuYiwgYy5nKSk7XFxyXFxuICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksIHZlYzQoYy5yLCBwLnl6eCksIHN0ZXAocC54LCBjLnIpKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXHJcXG4gICBmbG9hdCBlID0gMS4wZS0xMDtcXHJcXG4gICByZXR1cm4gdmVjNChhYnMocS56ICsgKHEudyAtIHEueSkgLyAoNi4wICogZCArIGUpKSwgZCAvIChxLnggKyBlKSwgcS54LCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBBbGwgY29tcG9uZW50cyBhcmUgaW4gdGhlIHJhbmdlWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IGhzdjJyZ2IodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDEuMCwgMi4wIC8gMy4wLCAxLjAgLyAzLjAsIDMuMCk7XFxyXFxuICAgdmVjMyBwID0gYWJzKGZyYWN0KGMueHh4ICsgSy54eXopICogNi4wIC0gSy53d3cpO1xcclxcbiAgIHJldHVybiB2ZWM0KGMueiAqIG1peChLLnh4eCwgY2xhbXAocCAtIEsueHh4LCAwLjAsIDEuMCksIGMueSksIGMuYSk7XFxyXFxufVxcclxcblxcclxcbnZlYzQgc2hpZnRUZW1wZXJhdHVyZSh2ZWM0IHJnYiwgZmxvYXQgZGVnLCBmbG9hdCB0aW50U3RyZW5ndGgpXFxyXFxue1xcclxcbiAgIHZlYzQgaHN2ID0gcmdiMmhzdihyZ2IpO1xcclxcbiAgIGhzdi54ICs9IGRlZyAvIDM2MC4wO1xcclxcbiAgIHZlYzQgZnVsbFRpbnRSZ2IgPSBoc3YycmdiKGhzdik7XFxyXFxuXFxyXFxuICAgcmV0dXJuIG1peChyZ2IsIGZ1bGxUaW50UmdiLCB0aW50U3RyZW5ndGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBUT0RPIG1vdmUgdG8gYSBjb21tb24gZmlsZVxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCBjYWxjdWxhdGVDb2xvcih2ZWMzIG9yaWdpbiwgdmVjMyByYXkpXFxyXFxue1xcclxcbiAgIHZlYzMgYWNjdW11bGF0ZWRDb2xvciA9IHZlYzMoMC4wKTtcXHJcXG4gICB2ZWMzIGNvbG9yTWFzayA9IHZlYzMoMS4wKTtcXHJcXG4gICB2ZWMzIGV5ZSA9IG9yaWdpbjtcXHJcXG4gICBib29sIG9iakhpdCA9IGZhbHNlO1xcclxcbiAgIGJvb2wgb2JqU2hhZG93ID0gZmFsc2U7XFxyXFxuICAgZmxvYXQgc3BlY3VsYXJDb250cmlidXRpb24gPSAwLjA7XFxyXFxuXFxyXFxuICAgLy8gbWFpbiByYXl0cmFjaW5nIGxvb3BcXHJcXG4gICBmb3IgKGludCBib3VuY2UgPSAwOyBib3VuY2UgPCBNQVhfQk9VTkNFUzsgYm91bmNlKyspXFxyXFxuICAge1xcclxcbiAgICAgIC8vIGNvbXB1dGUgdGhlIGludGVyc2VjdGlvbiB3aXRoIGV2ZXJ5dGhpbmdcXHJcXG4gICAgICBmbG9hdCB0QmFsbCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG4gICAgICB2ZWMzIHN1cmZhY2VDb2xvciA9IHZlYzMoMC41LCAwLjUsIDAuNSk7XFxyXFxuXFxyXFxuICAgICAgZmxvYXQgdE9iaiA9IElORklOSVRZO1xcclxcbiAgICAgIGludCB0SW5kZXg7XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBpZiAoaW50ZXJzZWN0T2JqKG9yaWdpbiwgcmF5LCBvYmplY3QpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9WT0xVTUVTOyBpKyspXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIFZvbHVtZSB2b2wgPSBvYmplY3Qudm9sdW1lc1tpXTtcXHJcXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0Vm9sKG9yaWdpbiwgcmF5LCB2b2wpKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBmb3IgKGludCBpID0gdm9sLnN0YXJ0SW5kZXg7IGkgPCAodm9sLnN0YXJ0SW5kZXggKyB2b2wubnVtVHJpYW5nbGVzKTsgaSsrKVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZShpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBmbG9hdCB0VHJpID0gbWluKHRPYmosIGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBpZiAodFRyaSA8IHRPYmopXFxyXFxuICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRPYmogPSB0VHJpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRJbmRleCA9IGk7XFxyXFxuICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4gICAgICAvLyBpZiB0aGUgZmlyc3QgcmF5IGhpdHMgdGhlIGxpZ2h0LCByZXR1cm4gdGhlIGxpZ2h0IGNvbG9yLiBUaGlzXFxyXFxuICAgICAgLy8gc2ltdWxhdGVzIGRpc3BsYXlpbmcgdGhlIGxpZ2h0XFxyXFxuICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZmxvYXQgdExpZ2h0ID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBMaWdodHNbaV0ucG9zLCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgaWYgKHRMaWdodCA8IHRCYWxsICYmIHRMaWdodCA8IHRPYmopXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHJldHVybiB2ZWM0KExpZ2h0c1tpXS5pbnRlbnNpdHkgKiBMaWdodHNbaV0uY29sb3IsIDEuMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBpbnRlcnNlY3Rpb25cXHJcXG4gICAgICBmbG9hdCB0RG9tZSA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICBmbG9hdCB0Rmxvb3IgPSBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAgICAvLyBjaGVjayBmb3IgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZFxcclxcbiAgICAgIGlmIChyYXkueSA8IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gZGlzdGFuY2UgdG8gZmxvb3IgPSBudW0gdW5pdCB2ZWN0b3JzIHJlcXVpcmVkIHRvIHJlYWNoIHRoZSBmbG9vclxcclxcbiAgICAgICAgIHRGbG9vciA9IC1vcmlnaW4ueSAvIHJheS55O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGhpdFxcclxcbiAgICAgIGZsb2F0IHQgPSBtaW4obWluKHREb21lLCB0Rmxvb3IpLCBtaW4odEJhbGwsIHRPYmopKTtcXHJcXG5cXHJcXG4gICAgICAvLyBpbmZvIGFib3V0IGhpdFxcclxcbiAgICAgIHZlYzMgaGl0ID0gb3JpZ2luICsgcmF5ICogdDtcXHJcXG4gICAgICB2ZWMzIG5vcm1hbDtcXHJcXG5cXHJcXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbFxcclxcbiAgICAgIGlmICh0ID09IHRGbG9vcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRkxPT1JfQ09MT1I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gdmVjMygwLjAsIDEuMCwgMC4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0QmFsbClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdmVjMyh1T2JqQ29sb3IpO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IG5vcm1hbEZvclNwaGVyZShoaXQsIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpIaXQgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRPYmopXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IHVPYmpDb2xvcjtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JUcmlhbmdsZShvcmlnaW4sIGhpdCwgdEluZGV4KTtcXHJcXG5cXHJcXG4gICAgICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9iakhpdCA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHREb21lKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBET01FX0NPTE9SO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IC1ub3JtYWxGb3JTcGhlcmUoaGl0LCBET01FX0NFTlRFUiwgRE9NRV9SQURJVVMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBjb2xvck1hc2sgKj0gc3VyZmFjZUNvbG9yO1xcclxcblxcclxcbiAgICAgIGlmIChsZW5ndGgoY29sb3JNYXNrKSA8IDAuMDEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gY29tcHV0ZSBkaWZmdXNlIGxpZ2h0aW5nIGNvbnRyaWJ1dGlvblxcclxcbiAgICAgICAgIHZlYzMgdG9MaWdodCA9IExpZ2h0c1tpXS5wb3MgLSBoaXQ7XFxyXFxuICAgICAgICAgdmVjMyB0b0xpZ2h0TiA9IG5vcm1hbGl6ZSh0b0xpZ2h0KTtcXHJcXG5cXHJcXG4gICAgICAgICAvLyB0cmFjZSBhIHNoYWRvdyByYXkgdG8gdGhlIGxpZ2h0XFxyXFxuICAgICAgICAgaWYgKGluU2hhZG93KGhpdCArIG5vcm1hbCAqIE9GRlNFVCwgdG9MaWdodE4sIGxlbmd0aCh0b0xpZ2h0KSkgPT0gZmFsc2UpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIC8vIGRpZmZ1c2UgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlmZnVzZSA9IG1heCgwLjAsIGRvdCh0b0xpZ2h0Tiwgbm9ybWFsKSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gc3BlY3VsYXIgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgdmVjMyB0b0V5ZSA9IGV5ZSAtIGhpdDtcXHJcXG4gICAgICAgICAgICB2ZWMzIG4ybCA9IHRvTGlnaHROO1xcclxcbiAgICAgICAgICAgIHZlYzMgbjJlID0gbm9ybWFsaXplKHRvRXllKTtcXHJcXG4gICAgICAgICAgICB2ZWMzIGJpc2VjdG9yID0gKG4ybCArIG4yZSkgLyBsZW5ndGgobjJsICsgbjJlKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzcGVjdWxhckNvZWZmaWNpZW50ID0gMC41O1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNoaW5pbmVzcyA9IDEwMC4wO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyID0gc3BlY3VsYXJDb2VmZmljaWVudCAqIHBvdyhtYXgoMC4wLCBkb3QoYmlzZWN0b3IsIG5vcm1hbCkpLCBzaGluaW5lc3MpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIGFwcGx5IGxpZ2h0IGZhbGwgb2ZmIGFzIGRpc3RhbmNlIHNxdWFyZXMuIFVzZSBhIG1pbiB2YWx1ZSBmb3IgdGhlXFxyXFxuICAgICAgICAgICAgLy8gbGlnaHQgc2l6ZSBvdGhlcndpc2UgZmFsbG9mZiBpcyB0b28gcmFwaWRcXHJcXG4gICAgICAgICAgICBmbG9hdCByYWRpdXMgPSBtYXgoMC43NSwgTGlnaHRzW2ldLnNpemUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IGRpc3QgPSBtYXgoMS4wLCAobGVuZ3RoKHRvTGlnaHQpIC0gcmFkaXVzKSAvIHJhZGl1cyk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgbGlnaHRJbnRlbnNpdHkgPSBMaWdodHNbaV0uaW50ZW5zaXR5IC8gKGRpc3QgKiBkaXN0KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9IGNvbG9yTWFzayAqIExpZ2h0c1tpXS5jb2xvciAqIGxpZ2h0SW50ZW5zaXR5ICogZGlmZnVzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBUT0RPIGRlZmluZSBhIGNvbG9yIG1hc2sgZm9yIHNwZWN1bGFyIHJlZmxlY3Rpb25cXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gbWl4KHN1cmZhY2VDb2xvciwgTGlnaHRzW2ldLmNvbG9yLCAwLjgpICpcXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPVxcclxcbiAgICAgICAgICAgICAgICAobGVuZ3RoKHN1cmZhY2VDb2xvcikgKiBMaWdodHNbaV0uY29sb3IpICogbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBzcGVjdWxhckNvbnRyaWJ1dGlvbiArPSBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZSBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpTaGFkb3cgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIG5leHQgb3JpZ2luXFxyXFxuICAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odVJhbmRvbSArIGZsb2F0KGJvdW5jZSksIG5vcm1hbCk7XFxyXFxuXFxyXFxuICAgICAgb3JpZ2luID0gaGl0O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICBmbG9hdCBhbHBoYSA9IDEuMDtcXHJcXG4gICBpZiAob2JqSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAob2JqU2hhZG93KVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVTaGFkb3dBbHBoYTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVMaWdodEFscGhhO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhbHBoYSArPSBjbGFtcChzcGVjdWxhckNvbnRyaWJ1dGlvbiwgMC4wLCAxLjApO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWM0IHNjaWVuY2VDb2xvciA9IHZlYzQoY2xhbXAoYWNjdW11bGF0ZWRDb2xvciwgMC4wLCAxLjApLCBhbHBoYSk7XFxyXFxuICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICAvKlxcclxcbiAgIGlmIChvYmpIaXQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB2ZWM0KHRvQXJ0aXN0KHNjaWVuY2VDb2xvcikucmdiLCBhbHBoYSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdmVjMyByYW5kID0gdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHVSYW5kb20pICogTElHSFRfU0laRTtcXHJcXG5cXHJcXG4gICBMaWdodHNbMF0uaW50ZW5zaXR5ID0gdUxpZ2h0SW50ZW5zaXR5O1xcclxcbiAgIExpZ2h0c1swXS5zaXplID0gTElHSFRfU0laRTtcXHJcXG4gICBMaWdodHNbMF0ucG9zID0gdUxpZ2h0UG9zICsgcmFuZDtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB1TGlnaHRDb2xvcjtcXHJcXG5cXHJcXG4gICBmb3IgKGludCBpID0gMTsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgeCA9IFJBRElVUyAqIHNpbigyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLng7XFxyXFxuICAgICAgZmxvYXQgeSA9IEhFSUdIVCArIHJhbmQueTtcXHJcXG4gICAgICBmbG9hdCB6ID0gUkFESVVTICogY29zKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQuejtcXHJcXG5cXHJcXG4gICAgICBMaWdodHNbaV0uaW50ZW5zaXR5ID0gdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG4gICAgICBMaWdodHNbaV0uc2l6ZSA9IDIuMCAqIExJR0hUX1NJWkU7XFxyXFxuICAgICAgTGlnaHRzW2ldLnBvcyA9IHZlYzMoeCwgeSwgeik7XFxyXFxuICAgICAgTGlnaHRzW2ldLmNvbG9yID0gQU1CSUVOVF9DT0xPUjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gbWVyZ2UgdGhlIG5ldyBjb2xvciBpbnRvIHRoZSBleGlzdGluZyB0ZXh0dXJlXFxyXFxuICAgdmVjNCB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlKHVUZXh0dXJlLCBnbF9GcmFnQ29vcmQueHkgLyB1VGV4dHVyZVNpemUpO1xcclxcbiAgIHZlYzQgbmV3Q29sb3IgPSBjYWxjdWxhdGVDb2xvcih1RXllLCBpbml0aWFsUmF5KTtcXHJcXG4gICBmbG9hdCB3ZWlnaHQgPSAodVNhbXBsZSAvICgxLjAgKyB1U2FtcGxlKSk7XFxyXFxuICAgZnJhZ0NvbG9yID0gbWl4KG5ld0NvbG9yLCB0ZXh0dXJlQ29sb3IsIHdlaWdodCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8VkVSU0lPTj5cXHJcXG5cXHJcXG4jZGVmaW5lIE5PVEhJTkdcXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiNkZWZpbmUgRVMzMDBcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWUsIHVSYXkwMCwgdVJheTAxLCB1UmF5MTAsIHVSYXkxMTtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5pbiB2ZWMzIHZlcnRleDtcXHJcXG5vdXQgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbHNlXFxyXFxuYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZiBcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgodVJheTAwLCB1UmF5MDEsIHBlcmNlbnQueSksIG1peCh1UmF5MTAsIHVSYXkxMSwgcGVyY2VudC55KSwgcGVyY2VudC54KTtcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbi8vIGludGVycG9sYXRlZCB2YWx1ZXMgZnJvbSB0aGUgdmVydGV4IHNoYWRlclxcclxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcclxcbnZhcnlpbmcgdmVjMyB2VmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gZmxvYXQgdUFtYmllbnRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodERpcmVjdGlvbjtcXHJcXG5cXHJcXG4vLyB0aGUgY29sb3JzIHdlIHVzZSB0byByZXByZXNlbnQgb3VyIGxpZ2h0ZXN0IGFuZCBkYXJrZXN0IHZhbHVlc1xcclxcbnVuaWZvcm0gdmVjMyB1V2hpdGVDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUJsYWNrQ29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVRocmVzaG9sZHM7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGhyZXNob2xkMTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUaHJlc2hvbGQyO1xcclxcbnVuaWZvcm0gZmxvYXQgdUhpZ2hsaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdU1pZExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdURhcmtMaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3c7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVNoYWRvd3M7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNoYWRvd1RleHR1cmU7XFxyXFxuXFxyXFxuYm9vbCBpbl9zaGFkb3codm9pZClcXHJcXG57XFxyXFxuICAgaWYgKHVVc2VTaGFkb3dzID09IDApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gVGhlIHZlcnRleCBsb2NhdGlvbiByZW5kZXJlZCBmcm9tIHRoZSBsaWdodCBzb3VyY2UgaXMgYWxtb3N0IGluIE5vcm1hbGl6ZWRcXHJcXG4gICAvLyBEZXZpY2UgQ29vcmRpbmF0ZXMgKE5EQyksIGJ1dCB0aGUgcGVyc3BlY3RpdmUgZGl2aXNpb24gaGFzIG5vdCBiZWVuXFxyXFxuICAgLy8gcGVyZm9ybWVkIHlldC4gUGVyZm9ybSB0aGUgcGVyc3BlY3RpdmUgZGl2aWRlLiBUaGUgKHgseSx6KSB2ZXJ0ZXggbG9jYXRpb25cXHJcXG4gICAvLyBjb21wb25lbnRzIGFyZSBub3cgZWFjaCBpbiB0aGUgcmFuZ2UgWy0xLjAsKzEuMF0uXFxyXFxuICAgLy8gdmVjMyB2ZXJ0ZXhfcmVsYXRpdmVfdG9fbGlnaHQgPSB2X1ZlcnRleF9yZWxhdGl2ZV90b19saWdodC54eXogLyB2X1ZlcnRleF9yZWxhdGl2ZV90b19saWdodC53O1xcclxcbiAgIHZlYzMgdmVydGV4ID0gdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG4gICAvLyBDb252ZXJ0IHRoZSB0aGUgdmFsdWVzIGZyb20gTm9ybWFsaXplZCBEZXZpY2UgQ29vcmRpbmF0ZXMgKHJhbmdlIFstMS4wLCsxLjBdKVxcclxcbiAgIC8vIHRvIHRoZSByYW5nZSBbMC4wLDEuMF0uIFRoaXMgbWFwcGluZyBpcyBkb25lIGJ5IHNjYWxpbmdcXHJcXG4gICAvLyB0aGUgdmFsdWVzIGJ5IDAuNSwgd2hpY2ggZ2l2ZXMgdmFsdWVzIGluIHRoZSByYW5nZSBbLTAuNSwrMC41XSBhbmQgdGhlblxcclxcbiAgIC8vIHNoaWZ0aW5nIHRoZSB2YWx1ZXMgYnkgKzAuNS5cXHJcXG4gICB2ZXJ0ZXggPSB2ZXJ0ZXggKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgLy8gR2V0IHRoZSB6IHZhbHVlIG9mIHRoaXMgZnJhZ21lbnQgaW4gcmVsYXRpb25zaGlwIHRvIHRoZSBsaWdodCBzb3VyY2UuXFxyXFxuICAgLy8gVGhpcyB2YWx1ZSB3YXMgc3RvcmVkIGluIHRoZSBzaGFkb3cgbWFwIChkZXB0aCBidWZmZXIgb2YgdGhlIGZyYW1lIGJ1ZmZlcilcXHJcXG4gICAvLyB3aGljaCB3YXMgcGFzc2VkIHRvIHRoZSBzaGFkZXIgYXMgYSB0ZXh0dXJlIG1hcC5cXHJcXG4gICAvLyB2ZWM0IHRleHR1cmVWYWx1ZSA9IHRleHR1cmUyRCh1U2hhZG93U2FtcGxlciwgdmVydGV4Lnh5KTtcXHJcXG5cXHJcXG4gICAvLyBUaGUgdGV4dHVyZSBtYXAgY29udGFpbnMgYSBzaW5nbGUgZGVwdGggdmFsdWUgZm9yIGVhY2ggcGl4ZWwuIEhvd2V2ZXIsXFxyXFxuICAgLy8gdGhlIHRleHR1cmUyRCBzYW1wbGVyIGFsd2F5cyByZXR1cm5zIGEgY29sb3IgZnJvbSBhIHRleHR1cmUuIEZvciBhXFxyXFxuICAgLy8gZ2wuREVQVEhfQ09NUE9ORU5UIHRleHR1cmUsIHRoZSBjb2xvciBjb250YWlucyB0aGUgZGVwdGggdmFsdWUgaW5cXHJcXG4gICAvLyBlYWNoIG9mIHRoZSBjb2xvciBjb21wb25lbnRzLiBJZiB0aGUgdmFsdWUgd2FzIGQsIHRoZW4gdGhlIGNvbG9yIHJldHVybmVkXFxyXFxuICAgLy8gaXMgKGQsZCxkLDEpLiBUaGlzIGlzIGEgXFxcImNvbG9yXFxcIiAoZGVwdGgpIHZhbHVlIGJldHdlZW4gWzAuMCwrMS4wXS5cXHJcXG4gICBmbG9hdCBzaGFkb3dtYXBfZGlzdGFuY2UgPSB0ZXh0dXJlMkQodVNoYWRvd1RleHR1cmUsIHZlcnRleC54eSkucjtcXHJcXG5cXHJcXG4gICAvLyBUZXN0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgZnJhZ21lbnQgYW5kIHRoZSBsaWdodCBzb3VyY2UgYXNcXHJcXG4gICAvLyBjYWxjdWxhdGVkIHVzaW5nIHRoZSBzaGFkb3dtYXAgdHJhbnNmb3JtYXRpb24gKHZlcnRleF9yZWxhdGl2ZV90b19saWdodC56KSBhbmRcXHJcXG4gICAvLyB0aGUgc21hbGxlc3QgZGlzdGFuY2UgYmV0d2VlbiB0aGUgY2xvc2VzdCBmcmFnbWVudCB0byB0aGUgbGlnaHQgc291cmNlXFxyXFxuICAgLy8gZm9yIHRoaXMgbG9jYXRpb24sIGFzIHN0b3JlZCBpbiB0aGUgc2hhZG93bWFwLiBXaGVuIHRoZSBjbG9zZXN0XFxyXFxuICAgLy8gZGlzdGFuY2UgdG8gdGhlIGxpZ2h0IHNvdXJjZSB3YXMgc2F2ZWQgaW4gdGhlIHNoYWRvd21hcCwgc29tZVxcclxcbiAgIC8vIHByZWNpc2lvbiB3YXMgbG9zdC4gVGhlcmVmb3JlIHdlIG5lZWQgYSBzbWFsbCB0b2xlcmFuY2UgZmFjdG9yIHRvXFxyXFxuICAgLy8gY29tcGVuc2F0ZSBmb3IgdGhlIGxvc3QgcHJlY2lzaW9uLlxcclxcbiAgIGZsb2F0IHRvbCA9IDAuMDAxO1xcclxcbiAgIGlmICh2ZXJ0ZXgueiA8PSBzaGFkb3dtYXBfZGlzdGFuY2UgKyB0b2wpXFxyXFxuICAge1xcclxcbiAgICAgIC8vIFRoaXMgc3VyZmFjZSByZWNlaXZlcyBmdWxsIGxpZ2h0IGJlY2F1c2UgaXQgaXMgdGhlIGNsb3Nlc3Qgc3VyZmFjZVxcclxcbiAgICAgIC8vIHRvIHRoZSBsaWdodC5cXHJcXG4gICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gVGhpcyBzdXJmYWNlIGlzIGluIGEgc2hhZG93IGJlY2F1c2UgdGhlcmUgaXMgYSBjbG9zZXIgc3VyZmFjZSB0b1xcclxcbiAgICAgIC8vIHRoZSBsaWdodCBzb3VyY2UuXFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IGdldENvbG9yKGZsb2F0IHZhbClcXHJcXG57XFxyXFxuICAgdmVjMyByZ2IgPSBtaXgodUJsYWNrQ29sb3IsIHVXaGl0ZUNvbG9yLCB2YWwpO1xcclxcbiAgIHJldHVybiB2ZWM0KHJnYi5yLCByZ2IuZywgcmdiLmIsIDEuMCk7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGlmIChpbl9zaGFkb3coKSlcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKHVVc2VUaHJlc2hvbGRzID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IGdldENvbG9yKHVBbWJpZW50SW50ZW5zaXR5KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBnbF9GcmFnQ29sb3IgPSBnZXRDb2xvcih1U2hhZG93KTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgcmV0dXJuO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWMzIGV5ZSA9IHZlYzMoMC4wLCAwLjAsIC0xMC4wKTtcXHJcXG4gICB2ZWMzIHRvTGlnaHQgPSBub3JtYWxpemUoLXVMaWdodERpcmVjdGlvbik7XFxyXFxuICAgdmVjMyB0b0V5ZSA9IG5vcm1hbGl6ZShleWUgLSB2VmVydGV4KTtcXHJcXG4gICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2Tm9ybWFsKTsgLy8gdk5vcm1hbCBpcyBpbnRlcnBvbGF0ZWQgYW5kIG5vIGxvbmcgbm9ybWFsXFxyXFxuXFxyXFxuICAgLy8gc3dhcCBub3JtYWxzIGZvciBiYWNrIGZhY2luZyB0cmlhbmdsZXNcXHJcXG4gICBpZiAoZG90KG5vcm1hbCwgdG9FeWUpIDwgMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICBub3JtYWwgPSAtbm9ybWFsO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBjb21wdXRlIGRpZmZ1c2UgY29udHJpYnV0aW9uID0gY29zIG9mIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvcnMgKGRvdCBwcm9kdWN0KVxcclxcbiAgIGZsb2F0IGRpZmZ1c2VGYWN0b3IgPSBjbGFtcChkb3Qobm9ybWFsLCB0b0xpZ2h0KSwgMC4wLCAxLjApO1xcclxcbiAgIGZsb2F0IGRpZmZ1c2UgPSBkaWZmdXNlRmFjdG9yICogdUxpZ2h0SW50ZW5zaXR5O1xcclxcblxcclxcbiAgIC8vIGNvbXB1dGUgc3BlY3VsYXIgY29udHJpYnV0aW9uXFxyXFxuICAgZmxvYXQgc2hpbmluZXNzID0gMTUuMDtcXHJcXG4gICB2ZWMzIHJlZmxlY3Rpb24gPSBub3JtYWxpemUoMi4wICogZG90KG5vcm1hbCwgdG9MaWdodCkgKiBub3JtYWwgLSB0b0xpZ2h0KTtcXHJcXG4gICBmbG9hdCBjb3NBbmdsZSA9IGNsYW1wKGRvdChyZWZsZWN0aW9uLCB0b0V5ZSksIDAuMCwgMS4wKTsgLy8gY2xhbXAgdG8gYXZvaWQgdmFsdWVzID4gOTAgZGVnXFxyXFxuICAgZmxvYXQgc3BlY3VsYXIgPSAwLjEgKiBwb3coY29zQW5nbGUsIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgZmxvYXQgdmFsO1xcclxcbiAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICB2YWwgPSB1QW1iaWVudEludGVuc2l0eSArIGRpZmZ1c2UgKyBzcGVjdWxhcjtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB0aHJlc2hvbGQgPSAxLjAgLSBkaWZmdXNlRmFjdG9yO1xcclxcblxcclxcbiAgICAgIGZsb2F0IHYxID0gbWluKHVUaHJlc2hvbGQxLCB1VGhyZXNob2xkMik7XFxyXFxuICAgICAgZmxvYXQgdjIgPSBtYXgodVRocmVzaG9sZDEsIHVUaHJlc2hvbGQyKTtcXHJcXG5cXHJcXG4gICAgICBpZiAodGhyZXNob2xkIDwgdjEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZhbCA9IHVMaWdodExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCB2MilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmFsID0gdU1pZExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCAxLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZhbCA9IHVEYXJrTGlnaHQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmFsID0gdVNoYWRvdztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHNwZWN1bGFyID4gMC4wNSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmFsID0gdUhpZ2hsaWdodDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgIGdsX0ZyYWdDb2xvciA9IGdldENvbG9yKHZhbCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyBhVmVydGV4O1xcclxcbmF0dHJpYnV0ZSB2ZWMzIGFOb3JtYWw7XFxyXFxuXFxyXFxudW5pZm9ybSBtYXQ0IG1vZGVsO1xcclxcbnVuaWZvcm0gbWF0NCB2aWV3O1xcclxcbnVuaWZvcm0gbWF0NCBsaWdodFZpZXc7XFxyXFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMzIHZOb3JtYWw7XFxyXFxudmFyeWluZyB2ZWMzIHZWZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMzIHZTaGFkb3dWZXJ0ZXg7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChhVmVydGV4LCAxLjApO1xcclxcbiAgIHZOb3JtYWwgPSAobW9kZWwgKiB2ZWM0KGFOb3JtYWwsIDAuMCkpLnh5ejtcXHJcXG4gICB2VmVydGV4ID0gKG1vZGVsICogdmVjNChhVmVydGV4LCAxLjApKS54eXo7XFxyXFxuICAgdlNoYWRvd1ZlcnRleCA9IChsaWdodFZpZXcgKiBtb2RlbCAqIHZlYzQoYVZlcnRleCwgMS4wKSkueHl6O1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7IGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpOyB9XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIlxcclxcbmF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdGV4Q29vcmQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHZlcnRleC54eSwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=