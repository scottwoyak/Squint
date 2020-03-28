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
exports.push([module.i, "#MainCanvas {\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n#Overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: transparent;\r\n  user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n#CtrlsContainer {\r\n  margin-top: 5px;\r\n}\r\n\r\n.PlanesApp .SliderRange {\r\n  width: 35%;\r\n}\r\n\r\n.PlanesApp .SliderLabel {\r\n  width: 18%;\r\n}\r\n\r\n.PlanesApp #ThresholdCanvas {\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 150px;\r\n  height: 150px;\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .PlanesApp .SliderRange {\r\n    width: 30%;\r\n  }\r\n\r\n  .PlanesApp .SliderLabel {\r\n    width: 20%;\r\n  }\r\n\r\n  .PlanesApp #ThresholdCanvas {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: rgb(128, 128, 150);\r\n  }\r\n}\r\n", ""]);
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
exports.push([module.i, ".SliderLabel {\r\n  display: inline-block;\r\n  width: 25%;\r\n  text-align: right;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.SliderHeader {\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  color: gray;\r\n}\r\n\r\n.SliderRange {\r\n  width: 50%;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  border-radius: 15px;\r\n  height: 15px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.SliderRange::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n}\r\n\r\n.SliderRange::-moz-range-thumb {\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n  cursor: pointer;\r\n}\r\n\r\n.SliderColorSpan {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 5px;\r\n  border-radius: 50%;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .SliderLabel {\r\n    width: 30%;\r\n    padding-bottom: 18px;\r\n  }\r\n\r\n  .SliderRange {\r\n    width: 45%;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .SliderRange::-webkit-slider-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderRange::-moz-range-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderColorSpan {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .SliderValueSpan {\r\n    margin-left: 10px;\r\n  }\r\n}\r\n", ""]);
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
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#drawTime {\r\n  position: absolute;\r\n  top: -495px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  font-size: 8pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#progressSpan {\r\n  position: absolute;\r\n  bottom: 3px;\r\n  left: 0px;\r\n  right: 0px;\r\n  height: 5px;\r\n  background-color: rgba(50, 205, 50, 0.75);\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  * {\r\n    font-size: 40px;\r\n  }\r\n\r\n  #drawTime {\r\n    top: -960px;\r\n    left: 4px;\r\n    font-size: 16pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n}\r\n", ""]);
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
/*! exports provided: DropDownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownMenu", function() { return DropDownMenu; });
var DropDownMenu = /** @class */ (function () {
    function DropDownMenu(parent, text, id) {
        var _this = this;
        this.id = id;
        var div = document.createElement('div');
        div.id = id + 'DropDown';
        div.className = 'DropDown';
        parent.appendChild(div);
        var menuButton = document.createElement('div');
        menuButton.innerText = text;
        menuButton.className = 'DropDownButton';
        menuButton.onclick = function () {
            _this.menuDiv.classList.toggle("DropDownShow");
        };
        div.appendChild(menuButton);
        this.menuDiv = document.createElement('div');
        this.menuDiv.className = 'DropDownMenu';
        this.menuDiv.id = id + 'DropDownMenu';
        div.appendChild(this.menuDiv);
    }
    DropDownMenu.prototype.addItem = function (text, callback) {
        var _this = this;
        var item = document.createElement('div');
        item.id = this.id + 'DropDownMenuItem';
        item.className = 'DropDownMenuItem';
        item.innerText = text;
        item.onclick = function () {
            _this.menuDiv.classList.toggle("DropDownShow");
            callback();
        };
        this.menuDiv.appendChild(item);
    };
    return DropDownMenu;
}());



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
                var tObj = new _TriangleObjFile__WEBPACK_IMPORTED_MODULE_11__["TriangleObjFile"](res);
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
        var matrix = jitter.multM(modelviewProjection).invert();
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
/* harmony import */ var worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! worker-loader?name=LoaderWorker.worker.js!./LoaderWorker */ "./node_modules/worker-loader/dist/cjs.js?name=LoaderWorker.worker.js!./src/LoaderWorker.ts");
/* harmony import */ var worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _DropDownMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DropDownMenu */ "./src/DropDownMenu.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");











// specify loader and options here. This value must match the
// contents of worker.d.ts



var PointerMode;
(function (PointerMode) {
    PointerMode[PointerMode["View"] = 0] = "View";
    PointerMode[PointerMode["Light"] = 1] = "Light";
})(PointerMode || (PointerMode = {}));
var PlanesApp = /** @class */ (function () {
    function PlanesApp(query) {
        this.pointerMode = PointerMode.View;
        this.pointerModeSpecial = false;
        this.dirty = true;
        this.query = query;
    }
    Object.defineProperty(PlanesApp.prototype, "threshold1", {
        set: function (val) {
            this.renderer.threshold1 = val;
            this.dirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesApp.prototype, "threshold2", {
        set: function (val) {
            this.renderer.threshold2 = val;
            this.dirty = true;
        },
        enumerable: true,
        configurable: true
    });
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
        this.handler = new _PointerEventHandler__WEBPACK_IMPORTED_MODULE_10__["PointerEventHandler"](canvas);
        this.handler.onDown = function (pos) { return _this.onDown(pos); };
        this.handler.onMove = function (pos) { return _this.onMove(pos); };
        this.handler.onClick = function (pos) { return _this.onClick(pos); };
        this.handler.onDblClick = function (pos) { return _this.onDblClick(pos); };
        document.onkeypress = function (event) {
            if (event.key === 'o') {
                _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_6__["NormalType"].Smooth);
            }
            else if (event.key === 'p') {
                _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_6__["NormalType"].Flat);
            }
        };
        var menu = new _DropDownMenu__WEBPACK_IMPORTED_MODULE_12__["DropDownMenu"](parent, 'Models', 'ModelDropDown');
        menu.addItem('Male Head', function () { return _this.loadModel('Head.obj'); });
        menu.addItem('Female Pose', function () { return _this.loadModel('Pose1.obj'); });
        menu.addItem('Female Head', function () { return _this.loadModel('FemaleHead.obj'); });
        menu.addItem('Skull 1', function () { return _this.loadModel('Skull.obj'); });
        menu.addItem('Skull 2', function () { return _this.loadModel('SkullHigh.obj'); });
        menu.addItem('Arnold', function () { return _this.loadModel('Arnold.obj'); });
        menu.addItem('Teapot', function () { return _this.loadModel('Teapot.obj'); });
    };
    PlanesApp.prototype.createCtrlsElements = function (parent) {
        var _this = this;
        this.thresholdCtrl = new _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_9__["ThresholdCtrl"](parent, this);
        this.highlightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'Highlight',
            label: 'Highlight',
            min: 0,
            max: 100,
            value: this.renderer.highlight * 100,
            colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].white],
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
            colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].white],
            oninput: function () {
                _this.renderer.lightLight = _this.lightLightSlider.value / 100;
                _this.updateSliders();
                _this.dirty = true;
            },
            getText: function () { return (100 * _this.renderer.lightLight).toFixed(0) + "%"; }
        });
        this.midLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'MidLight',
            label: 'Mid Light',
            min: 0,
            max: 100,
            value: this.renderer.midLight * 100,
            colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].white],
            oninput: function () {
                _this.renderer.midLight = _this.midLightSlider.value / 100;
                _this.updateSliders();
                _this.dirty = true;
            },
            getText: function () { return (100 * _this.renderer.midLight).toFixed(0) + "%"; }
        });
        this.darkLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'DarkLight',
            label: 'Dark Light',
            min: 0,
            max: 100,
            value: this.renderer.darkLight * 100,
            colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].white],
            oninput: function () {
                _this.renderer.darkLight = _this.darkLightSlider.value / 100;
                _this.updateSliders();
                _this.dirty = true;
            },
            getText: function () { return (100 * _this.renderer.darkLight).toFixed(0) + "%"; }
        });
        this.shadowSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](parent, {
            id: 'Shadow',
            label: 'Shadow',
            min: 0,
            max: 100,
            value: this.renderer.shadow * 100,
            colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_1__["htmlColor"].white],
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
        // if nothing was specified, load the head model
        if (!query) {
            query = 'Head.obj';
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
            // if a previous worker exists, close it
            if (this.worker) {
                this.worker.terminate();
                this.worker = undefined;
            }
            this.worker = new worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_11___default.a();
            var tStart_1 = Date.now();
            this.worker.onmessage = function (_a) {
                var data = _a.data;
                if (typeof data === 'string') {
                    // avoid flashing messages for things that happen very quickly.
                    if (Date.now() - tStart_1 > 500) {
                        _this.overlay.innerText = data;
                    }
                }
                else {
                    var tObj = _TriangleObj__WEBPACK_IMPORTED_MODULE_6__["TriangleObj"].import(data);
                    _this.renderer.setModel(tObj);
                    _this.orient(tObj, query);
                    _this.overlay.innerText = '';
                    _this.worker.terminate();
                    _this.worker = undefined;
                    _this.dirty = true;
                    requestAnimationFrame(function () { return _this.tick(); });
                }
            };
            this.worker.postMessage(query);
        }
        else {
            // TODO multi line error messages not supported
            this.overlay.innerText = 'Unknown Model:' + query;
        }
    };
    PlanesApp.prototype.orient = function (tObj, query) {
        var center = tObj.center;
        this.renderer.translate(new _glVec__WEBPACK_IMPORTED_MODULE_5__["glVec3"]([-center.x, -center.y, -center.z]));
        this.renderer.scale(2.0 / Math.sqrt(tObj.width * tObj.width + tObj.height * tObj.height + tObj.depth * tObj.depth));
        // orient each file so that it is facing forward
        switch (query.toLowerCase()) {
            case 'skull.obj':
                this.renderer.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(90));
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'wolf.obj':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-140));
                this.renderer.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(5));
                break;
            case 'sheephead.obj':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-160));
                break;
            case 'pose1.obj':
                break;
            case 'teapot.obj':
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
                this.renderer.ballColor = new _glColor__WEBPACK_IMPORTED_MODULE_13__["glColor"]([1.0, 1.0, 1.0]);
                break;
        }
        this.dirty = true;
    };
    PlanesApp.prototype.onDown = function (pos) {
        this.pointerModeSpecial = (pos.x < 0.1 * _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].canvas.width) ? true : false;
    };
    PlanesApp.prototype.onMove = function (pos) {
        if (this.handler.mouseDown) {
            this.dirty = true;
            var old = this.handler.lastPos;
            if (this.pointerMode === PointerMode.View) {
                if (this.pointerModeSpecial) {
                    this.renderer.rotZ((old.y - pos.y) * 0.01);
                }
                else {
                    this.renderer.rotX((pos.y - old.y) * 0.01);
                    this.renderer.rotY((pos.x - old.x) * 0.01);
                }
            }
            else if (this.pointerMode === PointerMode.Light) {
                var matY = _glMat__WEBPACK_IMPORTED_MODULE_4__["glMat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(pos.x - old.x));
                var matX = _glMat__WEBPACK_IMPORTED_MODULE_4__["glMat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(pos.y - old.y));
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
    PlanesApp.prototype.onDblClick = function (pos) {
        this.toggleMode();
    };
    PlanesApp.prototype.tick = function () {
        var _this = this;
        if (this.dirty) {
            this.renderer.render();
            this.thresholdCtrl.draw();
            this.dirty = false;
        }
        requestAnimationFrame(function () { return _this.tick(); });
    };
    return PlanesApp;
}());



/***/ }),

/***/ "./src/PlanesRenderer.ts":
/*!*******************************!*\
  !*** ./src/PlanesRenderer.ts ***!
  \*******************************/
/*! exports provided: BallImageData, PlanesRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallImageData", function() { return BallImageData; });
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
/* harmony import */ var _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./glTextureFrameBuffer */ "./src/glTextureFrameBuffer.ts");
/* harmony import */ var _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ThresholdCtrl */ "./src/ThresholdCtrl.ts");
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");















var BallImageData = /** @class */ (function () {
    function BallImageData() {
    }
    return BallImageData;
}());

var BALL_RADIUS = 0.5;
/**
 * Class that renders triangles and a light source
 */
var PlanesRenderer = /** @class */ (function () {
    function PlanesRenderer() {
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.shadowView = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.projection = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.uColor = new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1, 1, 1]);
        this.uThreshold1 = 40;
        this.uThreshold2 = 70;
        this.uHighlight = 1.0;
        this.uShadow = 0.2;
        // size of the smaller view
        this.miniSize = 0.2;
        this.uUseThresholds = false;
        this.uLightDirection = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1.0, -1.0, 1.5]);
        this.ballColor = new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1, 1, 1]);
        this.yellow = new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1.0, 0.9, 0.7]);
        this.computeColors();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].enable(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_TEST);
        this.program = _glCompiler__WEBPACK_IMPORTED_MODULE_7__["glCompiler"].compile(_shaders_PlanesVertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_PlanesFragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var tBall = new _TriangleSphere__WEBPACK_IMPORTED_MODULE_5__["TriangleSphere"](100, BALL_RADIUS, new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]));
        tBall.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_8__["NormalType"].Smooth);
        this.ball = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tBall, this.program);
        var tArrow = new _TriangleArrow__WEBPACK_IMPORTED_MODULE_10__["TriangleArrow"]();
        this.arrow = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tArrow, this.program);
    }
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
    Object.defineProperty(PlanesRenderer.prototype, "highlight", {
        get: function () {
            return this.uHighlight;
        },
        set: function (val) {
            this.uHighlight = val;
            this.uLightLight = Math.min(this.uLightLight, val);
            this.uMidLight = Math.min(this.uMidLight, val);
            this.uDarkLight = Math.min(this.uDarkLight, val);
            this.uShadow = Math.min(this.uShadow, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "lightLight", {
        get: function () {
            return this.uLightLight;
        },
        set: function (val) {
            this.uHighlight = Math.max(this.uHighlight, val);
            this.uLightLight = val;
            this.uMidLight = Math.min(this.uMidLight, val);
            this.uDarkLight = Math.min(this.uDarkLight, val);
            this.uShadow = Math.min(this.uShadow, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "midLight", {
        get: function () {
            return this.uMidLight;
        },
        set: function (val) {
            this.uHighlight = Math.max(this.uHighlight, val);
            this.uLightLight = Math.max(this.uLightLight, val);
            this.uMidLight = val;
            this.uDarkLight = Math.min(this.uDarkLight, val);
            this.uShadow = Math.min(this.uShadow, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "darkLight", {
        get: function () {
            return this.uDarkLight;
        },
        set: function (val) {
            this.uHighlight = Math.max(this.uHighlight, val);
            this.uLightLight = Math.max(this.uLightLight, val);
            this.uMidLight = Math.max(this.uMidLight, val);
            this.uDarkLight = val;
            this.uShadow = Math.min(this.uShadow, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "shadow", {
        get: function () {
            return this.uShadow;
        },
        set: function (val) {
            this.uHighlight = Math.max(this.uHighlight, val);
            this.uLightLight = Math.max(this.uLightLight, val);
            this.uMidLight = Math.max(this.uMidLight, val);
            this.uDarkLight = Math.max(this.uDarkLight, val);
            this.uShadow = val;
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
        },
        enumerable: true,
        configurable: true
    });
    PlanesRenderer.prototype.colorAt = function (deg) {
        deg = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(deg, 0, 90);
        return Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["mix"])(this.uShadow, this.uHighlight - 0.1, Math.cos(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(deg)));
    };
    /*
    private thresholdAt(color: number): number {
       color = clamp(color, this.ambientIntensity, this.ambientIntensity + this.lightIntensity);
       return toDeg(Math.acos(color - this.ambientIntensity) / this.lightIntensity);
    }
 */
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
    };
    PlanesRenderer.prototype.render = function () {
        //this.renderBall();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].viewport(0, 0, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.width, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.height);
        this.renderToShadowMap();
        this.renderToScreen();
    };
    PlanesRenderer.prototype.setStdUniforms = function () {
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_6__["glUniform"](this.program);
        uni.set('view', this.view.transpose());
        uni.set('shadowView', this.shadowView.transpose());
        uni.set('projection', this.projection.transpose());
        uni.set('uUseThresholds', this.uUseThresholds ? 1 : 0, true);
        uni.set('uLightDirection', this.uLightDirection);
        uni.seti('uUseShadows', 1);
        uni.set('uThreshold1', 1 - Math.sin(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(this.threshold1 + 90)));
        uni.set('uThreshold2', 1 - Math.sin(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(this.threshold2 + 90)));
        uni.set('uLightIntensity', this.uHighlight - this.uShadow - 0.1);
        uni.set('uAmbientIntensity', this.uShadow);
        uni.set('uHighlight', this.uHighlight);
        uni.set('uLightLight', this.uLightLight);
        uni.set('uMidLight', this.uMidLight);
        uni.set('uDarkLight', this.uDarkLight);
        uni.set('uShadow', this.uShadow);
        uni.set('uColor', this.uColor);
        return uni;
    };
    PlanesRenderer.prototype.getBallImage = function () {
        if (!this.textureFrameBuffer) {
            this.textureFrameBuffer = new _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_12__["glTextureFrameBuffer"](_ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"], _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_12__["FrameBufferStyle"].Depth);
        }
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].viewport(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"]);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, this.textureFrameBuffer.colorTexture);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, this.textureFrameBuffer.frameBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].framebufferTexture2D(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_ATTACHMENT0, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, this.textureFrameBuffer.colorTexture, 0);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].useProgram(this.program);
        var style = getComputedStyle(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas);
        var color = _htmlColor__WEBPACK_IMPORTED_MODULE_14__["htmlColor"].fromCss(style.backgroundColor).toGlColor();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clearColor(color.r, color.g, color.b, 1);
        //gl.clearColor(0.5, 0.5, 0.6, 1);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT | _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_BUFFER_BIT);
        var uni = this.setStdUniforms();
        var view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-0.45, -0.45, 0]));
        uni.set('view', view.transpose());
        // always render with bands
        uni.seti('uUseThresholds', 1);
        // shoot the light straight down
        uni.set('uLightDirection', new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, -1, 0]));
        // don't cast shadows
        uni.seti('uUseShadows', 0);
        this.ball.draw();
        var data = new BallImageData();
        data.ballRadius = BALL_RADIUS;
        var c = 0.05 + BALL_RADIUS;
        data.ballCenter = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([c, c]);
        // normalize value since our drawing space is -1 to 1
        data.ballRadius /= 2;
        data.ballCenter.x /= 2;
        data.ballCenter.y /= 2;
        // draw the arrow
        uni.set('uLightDirection', new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1, -0.5, 0.5]));
        uni.set('uUseThresholds', 0, true);
        // first reset things so that we're looking down the z-axis
        this.arrow.clearTransforms();
        this.arrow.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0.0, 1.0, 0.0]));
        uni.set('uColor', new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1.0, 1.0, 0.5]));
        uni.set('uAmbientIntensity', 0.4);
        this.arrow.draw();
        var pixels = new Uint8Array(_ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"] * _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"] * 4);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].readPixels(0, 0, _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"], _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].RGBA, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].UNSIGNED_BYTE, pixels);
        data.image = new ImageData(new Uint8ClampedArray(pixels), _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"], _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_13__["textureSize"]);
        return data;
    };
    PlanesRenderer.prototype.renderToShadowMap = function () {
        if (!this.shadowFrameBuffer) {
            this.shadowFrameBuffer = new _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_12__["glTextureFrameBuffer"](_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.width, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.height, _glTextureFrameBuffer__WEBPACK_IMPORTED_MODULE_12__["FrameBufferStyle"].Depth);
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
        this.shadowView = mat;
        var uni = this.setStdUniforms();
        // change the view matrix so that our view is from the light
        uni.set('view', this.shadowView.transpose());
        // don't try to use the shadow texture while we're creating it
        uni.seti('uUseShadows', 0);
        this.obj.draw();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, null);
    };
    PlanesRenderer.prototype.renderToScreen = function () {
        /*
        // display the depth buffer for testing purposes
        let tr = new TextureRenderer();
        tr.render(this.shadowMap.depthTexture);
        */
        /*
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  
        // display the depth buffer for testing purposes
        let tr = new TextureRenderer();
        tr.render(this.textureFrameBuffer.colorTexture);
  
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return;
        */
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].useProgram(this.program);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, this.shadowFrameBuffer.depthTexture);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT | _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_BUFFER_BIT);
        // reset the view matrix
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        // draw the main object
        var uni = this.setStdUniforms();
        this.obj.draw();
        // draw the object in the upper right at a reduced size and opposite banding
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT);
        this.view.scale(this.miniSize);
        this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1 - this.miniSize, 1 - this.miniSize, 0]));
        uni.set('view', this.view.transpose());
        uni.set('uUseThresholds', this.uUseThresholds ? 0 : 1, true);
        this.obj.draw();
        // draw the ball
        this.drawBall();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, null);
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
        uni.set('uColor', this.ballColor);
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
        uni.set('uColor', this.yellow);
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
        this.element = element;
        element.ontouchstart = function (event) {
            event.preventDefault();
            if (event.touches.length === 1) {
                var rect = _this.element.getBoundingClientRect();
                var pos = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([event.touches[0].clientX - rect.x, event.touches[0].clientY - rect.y]);
                var time = Date.now();
                if (time - _this.lastTouchTime < DBL_CLICK_TIME) {
                    _this.ourDblClick(pos);
                }
                else {
                    _this.ourOnDown(pos);
                }
                _this.lastTouchTime = time;
            }
        };
        element.ontouchmove = function (event) {
            event.preventDefault();
            var rect = _this.element.getBoundingClientRect();
            var pos = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([event.touches[0].clientX - rect.x, event.touches[0].clientY - rect.y]);
            _this.ourOnMove(pos);
        };
        element.ontouchend = function (event) {
            event.preventDefault();
            _this.ourOnUp();
        };
        element.onmousedown = function (event) {
            var pos = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([event.layerX, event.layerY]);
            _this.ourOnDown(pos);
            // disable selection because dragging is used for rotating the camera and moving objects
            return false;
        };
        element.onmousemove = function (event) {
            var pos = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec2"]([event.layerX, event.layerY]);
            _this.ourOnMove(pos);
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
    PointerEventHandler.prototype.ourOnDown = function (pos) {
        if (this.onClick && this.onClick(pos.clone())) {
            return;
        }
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
    PointerEventHandler.prototype.ourOnMove = function (pos) {
        if (this.onMove) {
            this.onMove(pos.clone());
        }
        this.lastPos = pos.clone();
    };
    PointerEventHandler.prototype.ourDblClick = function (pos) {
        if (this.onDblClick) {
            this.onDblClick(pos);
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
var ThresholdCtrl = /** @class */ (function () {
    function ThresholdCtrl(parent, app) {
        var _this = this;
        this.mouseOffset = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]();
        this.hit = 0;
        if (_Globals__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
            displaySize = 300;
        }
        this.app = app;
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
        this.handler.onMove = function (pos) { return _this.onMove(pos); };
    }
    ThresholdCtrl.prototype.onDown = function (pos) {
        this.hitTest(pos);
    };
    ThresholdCtrl.prototype.hitTest = function (pos) {
        var d1 = this.p1.distance(pos);
        var d2 = this.p2.distance(pos);
        var HIT_RADIUS = 15;
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
    ThresholdCtrl.prototype.onMove = function (pos) {
        if (this.handler.mouseDown && this.hit > 0) {
            var hitPt = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec2"]([pos.x - this.mouseOffset.x, pos.y - this.mouseOffset.y]);
            hitPt.x = Math.max(hitPt.x, this.ballCenter.x);
            hitPt.y = Math.min(hitPt.y, this.ballCenter.y);
            var radius = this.ballCenter.distance(hitPt);
            var angle = Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["toDeg"])(Math.asin((hitPt.x - this.ballCenter.x) / radius));
            if (this.hit == 1) {
                this.app.threshold1 = Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["clamp"])(angle, 0, 90);
            }
            else {
                this.app.threshold2 = Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["clamp"])(angle, 0, 90);
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
        var KNOB_LENGTH = (25 / 150) * displaySize;
        var KNOB_RADIUS = (8 / 150) * displaySize;
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
        var _this = _super.call(this) || this;
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
        var _this = _super.call(this) || this;
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
            //console.log(this.normals.length);
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
    function TriangleObj() {
        this.vertices = [];
        this.normals = [];
        this.triangles = [];
        this.boxMin = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]);
        this.boxMax = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]);
        this.volumes = [];
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
    TriangleObj.prototype.export = function () {
        var data = new TriangleObjData;
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
    TriangleObj.import = function (data) {
        var tObj = new TriangleObj();
        // restore vertices
        for (var i = 0; i < data.vertices.length / 3; i++) {
            tObj.vertices.push(this.data2vertex(data, i));
        }
        // restore normals
        for (var i = 0; i < data.normals.length / 3; i++) {
            tObj.normals.push(this.data2normal(data, i));
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
    function TriangleObjFile(src, statusFunction) {
        var _this = _super.call(this) || this;
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
        var _this = _super.call(this) || this;
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
     * Inverts this matrix and returns the result (this).
     *
     * @returns This.
     */
    glMat4.prototype.invert = function () {
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
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\n\r\n// interpolated values from the vertex shader\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nuniform float uLightIntensity;\r\nuniform float uAmbientIntensity;\r\nuniform vec3 uLightDirection;\r\nuniform vec3 uColor;\r\n\r\nuniform int uUseThresholds;\r\nuniform float uThreshold1;\r\nuniform float uThreshold2;\r\nuniform float uHighlight;\r\nuniform float uLightLight;\r\nuniform float uMidLight;\r\nuniform float uDarkLight;\r\nuniform float uShadow;\r\n\r\nuniform int uUseShadows;\r\nuniform sampler2D uShadowTexture;\r\n\r\nbool in_shadow(void)\r\n{\r\n   if (uUseShadows == 0)\r\n   {\r\n      return false;\r\n   }\r\n\r\n   // The vertex location rendered from the light source is almost in Normalized\r\n   // Device Coordinates (NDC), but the perspective division has not been\r\n   // performed yet. Perform the perspective divide. The (x,y,z) vertex location\r\n   // components are now each in the range [-1.0,+1.0].\r\n   // vec3 vertex_relative_to_light = v_Vertex_relative_to_light.xyz / v_Vertex_relative_to_light.w;\r\n   vec3 vertex = vShadowVertex;\r\n\r\n   // Convert the the values from Normalized Device Coordinates (range [-1.0,+1.0])\r\n   // to the range [0.0,1.0]. This mapping is done by scaling\r\n   // the values by 0.5, which gives values in the range [-0.5,+0.5] and then\r\n   // shifting the values by +0.5.\r\n   vertex = vertex * 0.5 + 0.5;\r\n\r\n   // Get the z value of this fragment in relationship to the light source.\r\n   // This value was stored in the shadow map (depth buffer of the frame buffer)\r\n   // which was passed to the shader as a texture map.\r\n   // vec4 textureValue = texture2D(uShadowSampler, vertex.xy);\r\n\r\n   // The texture map contains a single depth value for each pixel. However,\r\n   // the texture2D sampler always returns a color from a texture. For a\r\n   // gl.DEPTH_COMPONENT texture, the color contains the depth value in\r\n   // each of the color components. If the value was d, then the color returned\r\n   // is (d,d,d,1). This is a \"color\" (depth) value between [0.0,+1.0].\r\n   float shadowmap_distance = texture2D(uShadowTexture, vertex.xy).r;\r\n\r\n   // Test the distance between this fragment and the light source as\r\n   // calculated using the shadowmap transformation (vertex_relative_to_light.z) and\r\n   // the smallest distance between the closest fragment to the light source\r\n   // for this location, as stored in the shadowmap. When the closest\r\n   // distance to the light source was saved in the shadowmap, some\r\n   // precision was lost. Therefore we need a small tolerance factor to\r\n   // compensate for the lost precision.\r\n   float tol = 0.001;\r\n   if (vertex.z <= shadowmap_distance + tol)\r\n   {\r\n      // This surface receives full light because it is the closest surface\r\n      // to the light.\r\n      return false;\r\n   }\r\n   else\r\n   {\r\n      // This surface is in a shadow because there is a closer surface to\r\n      // the light source.\r\n      return true;\r\n   }\r\n}\r\n\r\nvoid main()\r\n{\r\n   if (in_shadow())\r\n   {\r\n      if (uUseThresholds == 0)\r\n      {\r\n         gl_FragColor = vec4(vec3(uAmbientIntensity), 1.0);\r\n      }\r\n      else\r\n      {\r\n         gl_FragColor = vec4(vec3(uShadow), 1.0);\r\n      }\r\n      return;\r\n   }\r\n\r\n   vec3 eye = vec3(0.0, 0.0, -10.0);\r\n   vec3 toLight = normalize(-uLightDirection);\r\n   vec3 toEye = normalize(eye - vVertex);\r\n   vec3 normal = normalize(vNormal); // vNormal is interpolated and no long normal\r\n\r\n   // compute diffuse contribution = cos of angle between the vectors (dot product)\r\n   float diffuseFactor = clamp(dot(normal, toLight), 0.0, 1.0);\r\n   float diffuse = diffuseFactor * uLightIntensity;\r\n\r\n   // compute specular contribution\r\n   float shininess = 15.0;\r\n   vec3 reflection = normalize(2.0 * dot(normal, toLight) * normal - toLight);\r\n   float cosAngle = clamp(dot(reflection, toEye), 0.0, 1.0); // clamp to avoid values > 90 deg\r\n   float specular = 0.1 * pow(cosAngle, shininess);\r\n\r\n   float rgb;\r\n   if (uUseThresholds == 0)\r\n   {\r\n      rgb = uAmbientIntensity + diffuse + specular;\r\n   }\r\n   else\r\n   {\r\n      float threshold = 1.0 - diffuseFactor;\r\n\r\n      float v1 = min(uThreshold1, uThreshold2);\r\n      float v2 = max(uThreshold1, uThreshold2);\r\n\r\n      if (threshold < v1)\r\n      {\r\n         rgb = uLightLight;\r\n      }\r\n      else if (threshold < v2)\r\n      {\r\n         rgb = uMidLight;\r\n      }\r\n      else if (threshold < 1.0)\r\n      {\r\n         rgb = uDarkLight;\r\n      }\r\n      else\r\n      {\r\n         rgb = uShadow;\r\n      }\r\n\r\n      if (specular > 0.05)\r\n      {\r\n         rgb = uHighlight;\r\n      }\r\n   }\r\n\r\n   vec3 rgbv = vec3(rgb, rgb, rgb);\r\n   rgbv *= uColor;\r\n   gl_FragColor = vec4(rgbv, 1.0);\r\n}");

/***/ }),

/***/ "./src/shaders/PlanesVertex.glsl":
/*!***************************************!*\
  !*** ./src/shaders/PlanesVertex.glsl ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 aVertex;\r\nattribute vec3 aNormal;\r\n\r\nuniform mat4 model;\r\nuniform mat4 view;\r\nuniform mat4 shadowView;\r\nuniform mat4 projection;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nvoid main()\r\n{\r\n   gl_Position = projection * view * model * vec4(aVertex, 1.0);\r\n   vNormal = (model * vec4(aNormal, 0.0)).xyz;\r\n   vVertex = (model * vec4(aVertex, 1.0)).xyz;\r\n   vShadowVertex = (shadowView * model * vec4(aVertex, 1.0)).xyz;\r\n}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9Ecm9wRG93bk1lbnUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvUGxhbmVzQXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1NsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9UYWJzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yQW5hbHl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Ryb3BEb3duTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXhlZFRyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5lc0FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmVzUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvaW50ZXJFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwaGVyaWNhbENvb3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9UaHJlc2hvbGRDdHJsLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZUFycm93LnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZUN1YmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlT2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iakZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlU3BoZXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9Vbmlmb3Jtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVm9sdW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9nbEJ1ZmZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xDb21waWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xNYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nbFRleHR1cmVGcmFtZUJ1ZmZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xVbmlmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9nbFVuaWZvcm1CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xWZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbENvbG9yV2l0aEFscGhhLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9TY3JlZW5GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QbGFuZXNGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BsYW5lc1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLHFGQUFxRix5QkFBeUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsS0FBSyxrREFBa0QsZ0NBQWdDLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQixLQUFLLG1HQUFtRyxnQ0FBZ0MsS0FBSyxxRUFBcUUsb0JBQW9CLHlCQUF5QixnQkFBZ0Isa0JBQWtCLGdDQUFnQyx1QkFBdUIsc0RBQXNELGlCQUFpQixLQUFLLDhEQUE4RCxtQkFBbUIsbUJBQW1CLDRCQUE0QixxQkFBcUIsc0JBQXNCLEtBQUssa0ZBQWtGLDZCQUE2QixLQUFLLGlLQUFpSyxxQkFBcUIsS0FBSywwREFBMEQscUJBQXFCLHlCQUF5QixPQUFPLEtBQUs7QUFDaDJDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZ0JBQWdCLDJDQUEyQyxLQUFLLGtCQUFrQix5QkFBeUIsY0FBYyxhQUFhLGVBQWUsZ0JBQWdCLHNCQUFzQix5QkFBeUIsbUJBQW1CLG9DQUFvQyx3QkFBd0IsMkJBQTJCLEtBQUsseUJBQXlCLHNCQUFzQixLQUFLLGlDQUFpQyxpQkFBaUIsS0FBSyxpQ0FBaUMsaUJBQWlCLEtBQUsscUNBQXFDLHlCQUF5QixpQkFBaUIsbUJBQW1CLG9CQUFvQiwyQ0FBMkMsS0FBSywwREFBMEQsK0JBQStCLG1CQUFtQixPQUFPLG1DQUFtQyxtQkFBbUIsT0FBTyx1Q0FBdUMscUJBQXFCLHNCQUFzQiw2Q0FBNkMsT0FBTyxLQUFLO0FBQzc5QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQiw0QkFBNEIsaUJBQWlCLHdCQUF3QiwwQkFBMEIsS0FBSyx1QkFBdUIsMEJBQTBCLHdCQUF3QixrQkFBa0IsS0FBSyxzQkFBc0IsaUJBQWlCLCtCQUErQixvQkFBb0IsMEJBQTBCLG1CQUFtQixzQkFBc0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscURBQXFELG1CQUFtQiwwQkFBMEIsMEJBQTBCLDZCQUE2QixLQUFLLDRDQUE0QywrQkFBK0IsdUJBQXVCLDJEQUEyRCxrQkFBa0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDBCQUEwQixpRUFBaUUsS0FBSyx3Q0FBd0MsMkRBQTJELGtCQUFrQixtQkFBbUIseUJBQXlCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLGlFQUFpRSxzQkFBc0IsS0FBSywwQkFBMEIsNEJBQTRCLGtDQUFrQyxrQkFBa0IsbUJBQW1CLHdCQUF3Qix5QkFBeUIsbUJBQW1CLDBCQUEwQix3QkFBd0IsS0FBSywwREFBMEQsb0JBQW9CLG1CQUFtQiw2QkFBNkIsT0FBTyx3QkFBd0IsbUJBQW1CLHFCQUFxQiw0QkFBNEIsd0JBQXdCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLE9BQU8sOENBQThDLG9CQUFvQixxQkFBcUIsT0FBTywwQ0FBMEMsb0JBQW9CLHFCQUFxQixPQUFPLDRCQUE0QixvQkFBb0IscUJBQXFCLDJCQUEyQixPQUFPLDRCQUE0QiwwQkFBMEIsT0FBTyxLQUFLO0FBQ3B0RTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGlDQUFpQyx1QkFBdUIsS0FBSyx1RkFBdUYsNkJBQTZCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHNCQUFzQix5QkFBeUIsa0JBQWtCLEtBQUssaUZBQWlGLDZCQUE2QixrQkFBa0IsS0FBSyw2RUFBNkUsNkJBQTZCLGtCQUFrQixLQUFLLG9EQUFvRCxvQkFBb0IseUJBQXlCLDZCQUE2QixLQUFLLDBEQUEwRCxvQkFBb0IsMkJBQTJCLE9BQU8sS0FBSztBQUNyMEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Ysd0NBQXdDLG1CQUFPLENBQUMsMklBQWdFO0FBQ2hILHdDQUF3QyxtQkFBTyxDQUFDLCtIQUEwRDtBQUMxRyx3Q0FBd0MsbUJBQU8sQ0FBQywySEFBd0Q7QUFDeEcsd0NBQXdDLG1CQUFPLENBQUMscUlBQTZEO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxNQUFNLDJCQUEyQixLQUFLLGNBQWMsa0JBQWtCLEtBQUssb0JBQW9CLHlCQUF5QixLQUFLLHNCQUFzQix5QkFBeUIsa0JBQWtCLGdCQUFnQixtQkFBbUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLHlCQUF5QixtQkFBbUIsZ0RBQWdELHdCQUF3QixLQUFLLG1CQUFtQix5QkFBeUIsa0JBQWtCLGdCQUFnQixtQkFBbUIseUJBQXlCLHdCQUF3QixxQkFBcUIseUJBQXlCLG1CQUFtQixnREFBZ0Qsd0JBQXdCLEtBQUssdUJBQXVCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsZ0RBQWdELEtBQUssMERBQTBELFNBQVMsd0JBQXdCLE9BQU8scUJBQXFCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixPQUFPLHdCQUF3Qix3QkFBd0IsNEJBQTRCLE9BQU8sS0FBSztBQUMzc0M7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0Esb0JBQW9CLHFCQUF1QjtBQUMzQyxFOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7O0dBRUc7QUFDSDtJQUtHOztPQUVHO0lBQ0gsZUFBbUIsS0FBZTtRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0osWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ0w7QUFpQi9COzs7R0FHRztBQUNIO0lBYUc7O09BRUc7SUFDSCx1QkFBbUIsSUFBWTtRQUU1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksMkJBQUcsR0FBVixVQUFXLFVBQWtCLEVBQUUsV0FBbUI7UUFFL0MsSUFBSSxJQUFJLEdBQWU7WUFDcEIsU0FBUyxFQUFFLENBQUM7WUFDWixhQUFhLEVBQUUsSUFBSSxnREFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxrQkFBa0IsRUFBRSxJQUFJLGdEQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLGlCQUFpQixFQUFFLElBQUksZ0RBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekMsY0FBYyxFQUFFLElBQUksZ0RBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsbUJBQW1CLEVBQUUsSUFBSSxnREFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQyxrQkFBa0IsRUFBRSxJQUFJLGdEQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLGVBQWUsRUFBRSxJQUFJLGdEQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLGNBQWMsRUFBRSxJQUFJLGdEQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsdURBQXVEO1FBQ3ZELDJDQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLDJDQUFFLENBQUMsSUFBSSxFQUFFLDJDQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxRSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3ZDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUN2QyxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRS9CLDhDQUE4QztnQkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNWLFNBQVM7aUJBQ1g7Z0JBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVuRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztpQkFDMUI7Z0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxnREFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUU7b0JBQ2xCLGNBQWMsRUFBRSxDQUFDO29CQUNqQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7cUJBQ2xDO29CQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksRUFBRTt3QkFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztxQkFDakM7b0JBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdEQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDM0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdEQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbEM7cUJBQ0ksSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO29CQUN4QixlQUFlLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxFQUFFO3dCQUNuQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO3FCQUNuQztvQkFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7cUJBQ2xDO29CQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnREFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnREFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ25DO3FCQUNJLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxnREFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNyRTtnQkFFRCxJQUFJLFVBQVUsR0FBRyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ2xELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFO29CQUNqQyxtQkFBbUIsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNwQzthQUNIO1NBQ0g7UUFFRCxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQztZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUM7U0FDekM7UUFDRCxJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLGVBQWUsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUM7U0FDM0M7UUFDRCxJQUFJLG1CQUFtQixHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztZQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztZQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUNKLG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxSkQ7QUFBQTtBQUFBO0FBQXdDO0FBRXhDOztHQUVHO0FBQ0g7SUFNRzs7OztPQUlHO0lBQ0gsb0JBQW1CLE1BQW1CO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksd0JBQUcsR0FBVixVQUFXLEtBQWE7UUFFckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO2FBQ0ksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUNJO1lBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV2RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RyxPQUFPLElB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QUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDSixtQkFBQztBQUFELENBQUMsQ0F4Q2lDLHdEQUFXLEdBd0M1Qzs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ21CO0FBQ2xCO0FBQ0k7QUFDSjtBQUVsQyxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDbkIsK0NBQU07SUFDTiwyQ0FBSTtBQUNQLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjtBQUVEO0lBQUE7SUFPQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDOztBQUVEOztHQUVHO0FBQ0g7SUFBQTtRQUNXLFlBQU8sR0FBYSxFQUFFLENBQUM7SUE0QmxDLENBQUM7SUExQkU7Ozs7T0FJRztJQUNJLDhCQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFLRCxzQkFBVyxtQ0FBTTtRQUhqQjs7V0FFRzthQUNIO1lBQ0csSUFBSSxDQUFDLEdBQUcsSUFBSSw2Q0FBTSxFQUFFLENBQUM7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFFM0IsbUNBQW1DO1lBQ25DLE9BQU8sQ0FBQyxDQUFDO1FBQ1osQ0FBQzs7O09BQUE7SUFDSixzQkFBQztBQUFELENBQUM7QUFDRDs7OztHQUlHO0FBQ0g7SUFBQTtRQUNVLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQXNCLEVBQUUsQ0FBQztRQUNsQyxXQUFNLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzVFLFdBQU0sR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQWdYakMsQ0FBQztJQTlXRSxzQkFBVyw4QkFBSzthQUFoQjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywrQkFBTTthQUFqQjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw4QkFBSzthQUFoQjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywrQkFBTTthQUFqQjtZQUNHLE9BQU8sSUFBSSw2Q0FBTSxDQUFDO2dCQUNmLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNuQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDbkMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDckMsQ0FBQyxDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFFUywwQkFBSSxHQUFkLFVBQWUsR0FBb0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxnQ0FBVSxHQUFqQixVQUFrQixJQUFZO1FBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksa0RBQVEsRUFBRSxDQUFDO1FBRXZCLElBQUksS0FBSyxHQUFHLElBQUksNkNBQU0sQ0FBQztZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FB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LElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0osQ0FBQztJQUVNLG9DQUFjLEdBQXJCLFVBQXNCLElBQWdC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TyxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBTSxHQUFiO1FBRUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUUxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9GLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhDLDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoRixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUM7U0FDZDtRQUNELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUU5RCxPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFTLEdBQWhCO1FBQ0csSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUUxQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9CLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzNDO1NBQ0g7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxnQkFBUyxHQUF2QixVQUF3QixLQUFhO1FBRWxDLE9BQU8sSUFBSSxNQUFNLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ1osQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csc0JBQWUsR0FBN0IsVUFBOEIsQ0FBUztRQUVwQyxPQUFPLElBQUksTUFBTSxDQUFDO1lBQ2YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFYSxlQUFRLEdBQXRCLFVBQXVCLEtBQWE7UUFFakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsT0FBTyxJQUFJLE1BQU0sQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1gsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFYSxlQUFRLEdBQXRCLFVBQXVCLEtBQWE7UUFFakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsT0FBTyxJQUFJLE1BQU0sQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNYLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFYSxlQUFRLEdBQXRCLFVBQXVCLEtBQWE7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Q0ExZ0IsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4SEFBMEQ7O0FBRTVGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cXHJcXG4uRHJvcERvd24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcclxcbi5Ecm9wRG93bkJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEcm9wZG93biBidXR0b24gb24gaG92ZXIgJiBmb2N1cyAqL1xcclxcbi5Ecm9wRG93bkJ1dHRvbjpob3ZlcixcXHJcXG4uRHJvcERvd25CdXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXFxyXFxuLkRyb3BEb3duTWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcclxcbi5Ecm9wRG93bk1lbnVJdGVtIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXHJcXG4uRHJvcERvd25NZW51SXRlbTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xcclxcbi5Ecm9wRG93blNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuRHJvcERvd25NZW51IHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjTWFpbkNhbnZhcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxufVxcclxcblxcclxcbiNPdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI0N0cmxzQ29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgd2lkdGg6IDE4JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlNsaWRlckxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJIZWFkZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JlZW4sIGRhcmtncmVlbik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5TbGlkZXJMYWJlbCB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclZhbHVlU3BhbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFN0eWxlIHRoZSB0YWIgKi9cXHJcXG4uVGFicyB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXFxyXFxuLlRhYnMgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xcclxcbi5UYWJzIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXFxyXFxuLlRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xcclxcbi5UYWJDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlRhYnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRHJvcERvd25NZW51LmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NsaWRlci5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJzLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BsYW5lc0FwcC5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJhd1RpbWUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtNDk1cHg7XFxyXFxuICBsZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogOHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2dyZXNzU3BhbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDNweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDIwNSwgNTAsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgKiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkcmF3VGltZSB7XFxyXFxuICAgIHRvcDogLTk2MHB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJMb2FkZXJXb3JrZXIud29ya2VyLmpzXCIpO1xufTsiLCJcclxuLyoqXHJcbiAqIENsYXNzIGZvciByZXByZXNlbnRpbmcgY29sb3IgdmFsdWVzLiBWYWx1ZXMgbWF5IGJlIG9uIGEgMC0xIG9yIDAtMjU1IHNjYWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICAgcHVibGljIHI6IG51bWJlcjtcclxuICAgcHVibGljIGc6IG51bWJlcjtcclxuICAgcHVibGljIGI6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgUkdCIHZhbHVlcyB0byBzdG9yZSBpbiB0aGlzIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG4gICAgICB0aGlzLnIgPSBjb2xvclswXTtcclxuICAgICAgdGhpcy5nID0gY29sb3JbMV07XHJcbiAgICAgIHRoaXMuYiA9IGNvbG9yWzJdO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgaXRlbXMgcmV0dXJuZWQgZnJvbSBleGFtaW5pbmcgdGhlIGN1cnJlbnQgdmlld1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sb3JEYXRhIHtcclxuICAgbWF4Q2hyb21hOiBudW1iZXIsXHJcbiAgIGhpZ2hsaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBhdmdMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBsaWdodGVzdExpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGRhcmtlc3RMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBhdmdTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgZGFya2VzdFNoYWRvd0NvbG9yOiBnbENvbG9yLFxyXG4gICB0ZXJtaW5hdG9yQ29sb3I6IGdsQ29sb3IsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGdyYWJzIGEgY29weSBvZiB0aGUgcmVuZGVyZWQgdGV4dHVyZSBhbmQgZXhhbWluZXMgaXQgZm9yXHJcbiAqIGNvbG9yIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvckFuYWx5emVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYXJyYXkgd2hlcmUgd2UnbGwgZHVtcCB0aGUgdGV4dHVyZSB0by4gQ2FjaGUgdGhpcyBhcnJheSBpbnN0ZWFkIG9mXHJcbiAgICAqIGFsbG9jYXRpbmcgYSBuZXcgb25lIGZvciBlYWNoIGZyYW1lLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBwaXhlbHM6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTaXplIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gc2l6ZSBUaGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgYnVmZmVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgLy8gYWxsb2NhdGUgdGhlIGJ1ZmZlciB1c2VkIGZvciBncmFic1xyXG4gICAgICB0aGlzLnBpeGVscyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zaXplICogdGhpcy5zaXplICogNCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSdW5zIHRoZSBhbmFseXNpcyAtIGdyYWJzIGEgY29weSBvZiB0aGUgZnJhbWUgYnVmZmVyIGFuZCBzY2FucyBpdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBhbHBoYUxpZ2h0IFRoZSBhbHBoYSB2YWx1ZSBmb3IgdGhpbmdzIGluIGxpZ2h0LiBWYWx1ZXMgYWJvdmUgdGhpcyBhcmUgZHVlIHRvIHNwZWN1bGFyIGxpZ2h0aW5nLlxyXG4gICAgKiBAcGFyYW0gYWxwaGFTaGFkb3cgVGhlIGFscGhhIHZhbHVlIGZvciB0aGluZ3MgaW4gc2hhZG93LlxyXG4gICAgKi9cclxuICAgcHVibGljIHJ1bihhbHBoYUxpZ2h0OiBudW1iZXIsIGFscGhhU2hhZG93OiBudW1iZXIpOiBJQ29sb3JEYXRhIHtcclxuXHJcbiAgICAgIGxldCBkYXRhOiBJQ29sb3JEYXRhID0ge1xyXG4gICAgICAgICBtYXhDaHJvbWE6IDAsXHJcbiAgICAgICAgIGF2Z0xpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGxpZ2h0ZXN0TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgZGFya2VzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIGF2Z1NoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBsaWdodGVzdFNoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBkYXJrZXN0U2hhZG93Q29sb3I6IG5ldyBnbENvbG9yKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIHRlcm1pbmF0b3JDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIGNhc2Ugd2hlbiB0aGUgdGV4dCB0eXBlIGlzIFVOU0lHTkVEX0JZVEVcclxuICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgZ2wuUkdCQSwgZ2wuRkxPQVQsIHRoaXMucGl4ZWxzKTtcclxuXHJcbiAgICAgIGxldCBudW1MaWdodFBpeGVscyA9IDA7XHJcbiAgICAgIGxldCBudW1TaGFkb3dQaXhlbHMgPSAwO1xyXG4gICAgICBsZXQgbnVtVGVybWluYXRvclBpeGVscyA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gKHJvdyAqIHRoaXMuc2l6ZSArIGNvbCkgKiA0O1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMF07XHJcbiAgICAgICAgICAgIGxldCBnID0gdGhpcy5waXhlbHNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDJdO1xyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMucGl4ZWxzW2luZGV4ICsgM107XHJcblxyXG4gICAgICAgICAgICAvLyBpZ25vcmUgdmFsdWVzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBiYWxsXHJcbiAgICAgICAgICAgIGlmIChhID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXZnID0gKHIgKyBnICsgYikgLyAzO1xyXG4gICAgICAgICAgICBsZXQgY2hyb21hID0gKE1hdGguYWJzKHIgLSBhdmcpICsgTWF0aC5hYnMoZyAtIGF2ZykgKyBNYXRoLmFicyhiIC0gYXZnKSkgLyAoNCAvIDMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNocm9tYSA+IGRhdGEubWF4Q2hyb21hKSB7XHJcbiAgICAgICAgICAgICAgIGRhdGEubWF4Q2hyb21hID0gY2hyb21hO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgZ2xDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBhbHBoYUxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIG51bUxpZ2h0UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RMaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmRhcmtlc3QoZGF0YS5kYXJrZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPT0gYWxwaGFTaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgbnVtU2hhZG93UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID0gZ2xDb2xvci5kYXJrZXN0KGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYSA+IGFscGhhTGlnaHQpIHtcclxuICAgICAgICAgICAgICAgZGF0YS5oaWdobGlnaHRDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5oaWdobGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVybWluYXRvciA9IChhbHBoYUxpZ2h0ICsgYWxwaGFTaGFkb3cpIC8gMi4wO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYSAtIHRlcm1pbmF0b3IpIDwgMC4xKSB7XHJcbiAgICAgICAgICAgICAgIG51bVRlcm1pbmF0b3JQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChudW1MaWdodFBpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLnIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5nIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtU2hhZG93UGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmcgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1UZXJtaW5hdG9yUGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5yIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuYiAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJwb2xhdGVzIGFuZCBhcnJheSBvZiBjb2xvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvclJhbmdlIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSBjb2xvcnNcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29sb3JzOiBodG1sQ29sb3JbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9ycyBUaGUgY29sb3JzIHRvIGludGVycG9sYXRlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG4gICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYW4gaW50ZXJwb2xhdGVkIGNvbG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCh2YWx1ZTogbnVtYmVyKTogaHRtbENvbG9yIHtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKTtcclxuICAgICAgICAgbGV0IHBhcnRpYWwgPSAodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSAtIGluZGV4O1xyXG5cclxuICAgICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5yICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLnIgLSB0aGlzLmNvbG9yc1tpbmRleF0ucikpO1xyXG4gICAgICAgICBsZXQgZyA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLmcgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uZyAtIHRoaXMuY29sb3JzW2luZGV4XS5nKSk7XHJcbiAgICAgICAgIGxldCBiID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uYiArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5iIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmIpKTtcclxuXHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiZXhwb3J0IHR5cGUgTWVudUl0ZW1GdW5jdGlvbiA9ICgpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcERvd25NZW51IHtcclxuICAgcHJpdmF0ZSBtZW51RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5pZCA9IGlkICsgJ0Ryb3BEb3duJztcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdEcm9wRG93bic7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbWVudUJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICBtZW51QnV0dG9uLmNsYXNzTmFtZSA9ICdEcm9wRG93bkJ1dHRvbic7XHJcbiAgICAgIG1lbnVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy5tZW51RGl2LmNsYXNzTGlzdC50b2dnbGUoXCJEcm9wRG93blNob3dcIik7XHJcbiAgICAgIH1cclxuICAgICAgZGl2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5cclxuICAgICAgdGhpcy5tZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMubWVudURpdi5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51JztcclxuICAgICAgdGhpcy5tZW51RGl2LmlkID0gaWQgKyAnRHJvcERvd25NZW51JztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMubWVudURpdik7XHJcblxyXG5cclxuICAgfVxyXG5cclxuICAgcHVibGljIGFkZEl0ZW0odGV4dDogc3RyaW5nLCBjYWxsYmFjazogTWVudUl0ZW1GdW5jdGlvbikge1xyXG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpdGVtLmlkID0gdGhpcy5pZCArICdEcm9wRG93bk1lbnVJdGVtJztcclxuICAgICAgaXRlbS5jbGFzc05hbWUgPSAnRHJvcERvd25NZW51SXRlbSc7XHJcbiAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1lbnVEaXYuY2xhc3NMaXN0LnRvZ2dsZShcIkRyb3BEb3duU2hvd1wiKTtcclxuICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lbnVEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG4gICB9XHJcbn0iLCJleHBvcnQgbGV0IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBsZXQgaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICBpZiAodmFsdWUgPCBtaW4pIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgfVxyXG4gICBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVnKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuICgxODAgLyBNYXRoLlBJKSAqIHJhZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuIChNYXRoLlBJIC8gMTgwKSAqIGRlZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1peCh2MTogbnVtYmVyLCB2MjogbnVtYmVyLCBtaXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiB2MSArIGNsYW1wKG1peCwgMCwgMSkgKiAodjIgLSB2MSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0NzcyhyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgcmV0dXJuICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArIChhID09PSB1bmRlZmluZWQgPyAnJyA6ICcsJyArIGEpICsgJyknO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFscyB7XHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdsKCkge1xyXG4gICAgICByZXR1cm4gZ2w7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgc2V0IGdsKGNvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgZ2wgPSBjb250ZXh0O1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGhvbGRpbmcgaW5mb3JtYXRpb24gYWJvdXQgYSB0cmlhbmdsZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgIHZlcnRpY2VzOiBnbFZlYzNbXTtcclxuICAgcHVibGljIGlWMDogbnVtYmVyO1xyXG4gICBwdWJsaWMgaVYxOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpVjI6IG51bWJlcjtcclxuXHJcbiAgIG5vcm1hbHM6IGdsVmVjM1tdO1xyXG4gICBwdWJsaWMgaU4wOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpTjE6IG51bWJlcjtcclxuICAgcHVibGljIGlOMjogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHZlcnRpY2VzOiBnbFZlYzNbXSwgaVYwOiBudW1iZXIsIGlWMTogbnVtYmVyLCBpVjI6IG51bWJlcixcclxuICAgICAgbm9ybWFsczogZ2xWZWMzW10sIGlOMD86IG51bWJlciwgaU4xPzogbnVtYmVyLCBpTjI/OiBudW1iZXIsXHJcbiAgICkge1xyXG4gICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICAgIHRoaXMuaVYwID0gaVYwO1xyXG4gICAgICB0aGlzLmlWMSA9IGlWMTtcclxuICAgICAgdGhpcy5pVjIgPSBpVjI7XHJcblxyXG4gICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICBpZiAoaU4wID09PSB1bmRlZmluZWQgfHwgaU4wID09PSAtMSkge1xyXG4gICAgICAgICBsZXQgbm9ybWFsID0gdGhpcy5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9ybWFscy5sZW5ndGggLSAxO1xyXG4gICAgICAgICB0aGlzLmlOMCA9IGluZGV4O1xyXG4gICAgICAgICB0aGlzLmlOMSA9IGluZGV4O1xyXG4gICAgICAgICB0aGlzLmlOMiA9IGluZGV4O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICB0aGlzLmlOMCA9IGlOMDtcclxuICAgICAgICAgdGhpcy5pTjEgPSBpTjE7XHJcbiAgICAgICAgIHRoaXMuaU4yID0gaU4yO1xyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgbGV0IG4gPSB0aGlzLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgbGV0IG4wID0gdGhpcy5uMDtcclxuICAgICAgICAgbGV0IG4xID0gdGhpcy5uMTtcclxuICAgICAgICAgbGV0IG4yID0gdGhpcy5uMjtcclxuICAgICAgICAgY29uc29sZS5sb2cobi50b1N0cmluZygyKSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4wLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobjEudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuMi50b1N0cmluZygyKSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0IHYwKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMuaVYwXTtcclxuICAgfVxyXG4gICBnZXQgdjEoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbdGhpcy5pVjFdO1xyXG4gICB9XHJcbiAgIGdldCB2MigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1t0aGlzLmlWMl07XHJcbiAgIH1cclxuXHJcbiAgIGdldCBuMCgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxzW3RoaXMuaU4wXTtcclxuICAgfVxyXG4gICBnZXQgbjEoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsc1t0aGlzLmlOMV07XHJcbiAgIH1cclxuICAgZ2V0IG4yKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbHNbdGhpcy5pTjJdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWluWCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MC54LCBNYXRoLm1pbih0aGlzLnYxLngsIHRoaXMudjIueCkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWluWSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MC55LCBNYXRoLm1pbih0aGlzLnYxLnksIHRoaXMudjIueSkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWluWigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MC56LCBNYXRoLm1pbih0aGlzLnYxLnosIHRoaXMudjIueikpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MC54LCBNYXRoLm1heCh0aGlzLnYxLngsIHRoaXMudjIueCkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MC55LCBNYXRoLm1heCh0aGlzLnYxLnksIHRoaXMudjIueSkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MC56LCBNYXRoLm1heCh0aGlzLnYxLnosIHRoaXMudjIueikpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbCgpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgYSA9IHRoaXMudjEuc3VidHJhY3QodGhpcy52MCk7XHJcbiAgICAgIGxldCBiID0gdGhpcy52Mi5zdWJ0cmFjdCh0aGlzLnYxKTtcclxuICAgICAgcmV0dXJuIGEuY3Jvc3MoYikubm9ybWFsaXplKCk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBQYXRoVHJhY2VyUmVuZGVyZXIsIFJlbmRlck1vZGUgfSBmcm9tIFwiLi9QYXRoVHJhY2VyUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tIFwiLi9Vbmlmb3Jtc1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxDb29yZCB9IGZyb20gXCIuL1NwaGVyaWNhbENvb3JkXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB9IGZyb20gXCIuL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmVcIjtcclxuaW1wb3J0IHsgR2xvYmFscywgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVTcGhlcmUgfSBmcm9tIFwiLi9UcmlhbmdsZVNwaGVyZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUN1YmUgfSBmcm9tIFwiLi9UcmlhbmdsZUN1YmVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmpGaWxlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpGaWxlXCI7XHJcblxyXG5sZXQgc2tpblRvbmVzID0gW1xyXG4gICBuZXcgaHRtbENvbG9yKFsyNDAsIDIyMywgMjE0XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzI1NSwgMjE4LCAyMDBdKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMjMyLCAxNzksIDExN10pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxOTAsIDEzNiwgODddKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFsxMTUsIDkxLCA1OV0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxMzksIDczLCA2NV0pXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTMyLCA1NSwgMzRdKSxcclxuICAgLy9uZXcgaHRtbENvbG9yKFs2MSwgMTIsIDJdKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFszOCwgNywgMV0pXHJcbl07XHJcblxyXG5lbnVtIFBvaW50ZXJNb2RlIHtcclxuICAgVmlldyxcclxuICAgTGlnaHQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyQXBwIHtcclxuICAgcHVibGljIHJlbmRlcmVyOiBQYXRoVHJhY2VyUmVuZGVyZXI7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3OiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlU3BlY2lhbCA9IGZhbHNlO1xyXG4gICBwcml2YXRlIHBvczogU3BoZXJpY2FsQ29vcmQ7XHJcbiAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgIHByaXZhdGUgaW50ZW5zaXR5U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgbGlnaHRDb2xvclNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGJhbGxDb2xvclNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGFtYmllbnRJbnRlbnNpdHlTbGlkZXI6IFNsaWRlcjtcclxuXHJcbiAgIHByaXZhdGUgYW5nbGVYID0gMC41O1xyXG4gICBwcml2YXRlIGFuZ2xlWSA9IDAuNzU7XHJcbiAgIHByaXZhdGUgem9vbVogPSAzLjU7XHJcblxyXG4gICBwcml2YXRlIG1vdXNlRG93biA9IGZhbHNlO1xyXG4gICBwcml2YXRlIG9sZFg6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBvbGRZOiBudW1iZXI7XHJcblxyXG4gICBwcml2YXRlIGxhc3RUaW1lczogbnVtYmVyW10gPSBbXTtcclxuICAgcHJpdmF0ZSByZWFkb25seSBNQVhfU0FNUExFUyA9IDUwMDtcclxuXHJcbiAgIHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXBvbmVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgdGhpcy5jYW52YXMuaWQgPSAnY2FudmFzJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIGxldCBjb250ZXh0OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIEdsb2JhbHMuZ2wgPSBjb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaHN0YXJ0ID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkRvd24oZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9udG91Y2htb3ZlID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMub25Nb3ZlKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaGVuZCA9IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm9uRG93bihldmVudC54LCBldmVudC55KTtcclxuXHJcbiAgICAgICAgIC8vIGRpc2FibGUgc2VsZWN0aW9uIGJlY2F1c2UgZHJhZ2dpbmcgaXMgdXNlZCBmb3Igcm90YXRpbmcgdGhlIGNhbWVyYSBhbmQgbW92aW5nIG9iamVjdHNcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm9uTW92ZShldmVudC54LCBldmVudC55KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZXVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5sb2FkTW9kZWwodGhpcy5xdWVyeSkudGhlbigodE9iajogVHJpYW5nbGVPYmopID0+IHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBQYXRoVHJhY2VyUmVuZGVyZXIodE9iaik7XHJcbiAgICAgICAgIC8vdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCBkcmF3VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkcmF3VGltZS5pZCA9ICdkcmF3VGltZSc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGltZSk7XHJcblxyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgYnV0dG9uLmlkID0gJ21vZGVCdXR0b24nO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLlZpZXc6XHJcbiAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnTGlnaHQnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdWaWV3JztcclxuICAgICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgICBsZXQgcHJvZ3Jlc3NTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBwcm9ncmVzc1NwYW4uaWQgPSAncHJvZ3Jlc3NTcGFuJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzU3Bhbik7XHJcblxyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZW5zaXR5U2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodEludGVuc2l0eScsXHJcbiAgICAgICAgIGxhYmVsOiAnTGlnaHQgSW50ZW5zaXR5JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSA9IHRoaXMuaW50ZW5zaXR5U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGJ1aWxkIGEgcmFuZ2Ugb2YgY29sb3JzXHJcbiAgICAgIGxldCBtaW4gPSAyMDAwO1xyXG4gICAgICBsZXQgbWF4ID0gMTAwMDA7XHJcbiAgICAgIGxldCBjb2xvcnM6IGh0bWxDb2xvcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICBsZXQgdGVtcCA9IG1pbiArIChpIC8gOSkgKiAobWF4IC0gbWluKTtcclxuICAgICAgICAgY29sb3JzLnB1c2goZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS5jcmVhdGUodGVtcCkudG9IdG1sQ29sb3IoKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWdodENvbG9yU2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodENvbG9yJyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBDb2xvcicsXHJcbiAgICAgICAgIG1pbjogMjAwMCxcclxuICAgICAgICAgbWF4OiAxMDAwMCxcclxuICAgICAgICAgdmFsdWU6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUuZGF5bGlnaHQudGVtcGVyYXR1cmUsXHJcbiAgICAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGlnaHRDb2xvcigpO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHsgcmV0dXJuIHNsaWRlci52YWx1ZS50b0ZpeGVkKCkgKyBcIktcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gYXBwbHkgdGhlIGluaXRpYWwgY29sb3JzXHJcbiAgICAgIHRoaXMuc2V0TGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgdGhpcy5iYWxsQ29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0JhbGxDb2xvcicsXHJcbiAgICAgICAgIGxhYmVsOiAnQmFsbCBDb2xvcicsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgICAgY29sb3JzOiBza2luVG9uZXMsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudU9iakNvbG9yID0gdGhpcy5iYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBtYWtlIHN1cmUgZ2wgbWF0Y2hlcyB0aGUgaW5pdGlhbCBVSSBzZXR0aW5nXHJcbiAgICAgIFVuaWZvcm1zLnVPYmpDb2xvciA9IHRoaXMuYmFsbENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICAgICB0aGlzLmFtYmllbnRJbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0FtYmllbnRJbnRlbnNpdHknLFxyXG4gICAgICAgICBsYWJlbDogJ0FtYmllbnQgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVBbWJpZW50TGlnaHRJbnRlbnNpdHkgPSB0aGlzLmFtYmllbnRJbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICd0cmlhbmdsZXNwaGVyZScpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICBsZXQgcmFkaXVzID0gMC41O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgcmFkaXVzLCAwXSk7XHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlU3BoZXJlKDgsIHJhZGl1cywgY2VudGVyKTtcclxuICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3RyaWFuZ2xlY3ViZScpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IDAuODtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBnbFZlYzMoWzAsIHNpemUgLyAyLjAsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVDdWJlKHNpemUsIGNlbnRlcik7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLm9iaicpKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsUmFkaXVzID0gMDtcclxuICAgICAgICAgcmV0dXJuIGZldGNoKHF1ZXJ5KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmpGaWxlKHJlcyk7XHJcbiAgICAgICAgICAgICAgIGxldCBzaXplID0gMS41O1xyXG4gICAgICAgICAgICAgICB0T2JqLmF1dG9DZW50ZXIoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgIHRPYmoudHJhbnNsYXRlKG5ldyBnbFZlYzMoWzAsIHRPYmouaGVpZ2h0IC8gMiwgMF0pKTtcclxuICAgICAgICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgICAgICAgIHJldHVybiB0T2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldExpZ2h0Q29sb3IoKSB7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIGNvbG9ycyBmb3IgdGhlIGludGVuc2l0eSBzbGlkZXJcclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIuY29sb3JzID0gW2h0bWxDb2xvci5ibGFjaywgdGhpcy5saWdodENvbG9yU2xpZGVyLmh0bWxDb2xvcl07XHJcblxyXG4gICAgICAvLyB1c2UgdGhlIHZhbHVlIGluIHJlbmRlcmluZ1xyXG4gICAgICBVbmlmb3Jtcy51TGlnaHRDb2xvciA9IHRoaXMubGlnaHRDb2xvclNsaWRlci5nbENvbG9yO1xyXG5cclxuICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Eb3duKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGljayh4LCB5KSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCA9ICh4IDwgMC4xICogdGhpcy5jYW52YXMud2lkdGgpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgdGhpcy5vbGRZID0geTtcclxuXHJcbiAgICAgIHRoaXMucG9zID0gU3BoZXJpY2FsQ29vcmQuZnJvbVhZWihVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzKTtcclxuXHJcbiAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XHJcbiAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnpvb21aIC09ICh5IC0gdGhpcy5vbGRZKSAqIDAuMDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogPSBjbGFtcCh0aGlzLnpvb21aLCAxLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVkgLT0gKHggLSB0aGlzLm9sZFgpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggKz0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGRvbid0IGdvIHVwc2lkZSBkb3duXHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5tYXgodGhpcy5hbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCA9IE1hdGgubWluKHRoaXMuYW5nbGVYLCBNYXRoLlBJIC8gMiAtIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yYWRpdXMgLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyA9IGNsYW1wKHRoaXMucG9zLnJhZGl1cywgVW5pZm9ybXMudUJhbGxSYWRpdXMgKyAwLjUsIDUpO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3Mucm90YXRpb25BbmdsZSArPSAoeCAtIHRoaXMub2xkWCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlICs9ICh5IC0gdGhpcy5vbGRZKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgPSBjbGFtcCh0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSwgMCwgMTgwKTtcclxuICAgICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0UG9zLnZhbHVlcyA9IHRoaXMucG9zLnRvWFlaKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gY2xlYXIgdGhlIHNhbXBsZSBidWZmZXJcclxuICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAvLyByZW1lbWJlciB0aGlzIGNvb3JkaW5hdGVcclxuICAgICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgICAgdGhpcy5vbGRZID0geTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuIElmIGEgaGl0XHJcbiAgICAqIG9jY3VycywgdGhlIGNsaWNrZWQgb24gdmlldyBpcyBzd2FwcGVkIGZvciB0aGUgcHJpbWFyeSB2aWV3IGFuZCB0cnVlXHJcbiAgICAqIGlzIHJldHVybmVkLiBJZiBubyBoaXQgb2NjdXJzLCBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUuXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUuXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIHRoaXMgd2l0aGluIHRoZSBQYXRoVHJhY2VyIGNsYXNzIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBoYXJkIGNvZGUgdmlldyBzdHVmZlxyXG4gICAgICBsZXQgc2l6ZSA9IDAuMiAqIHRoaXMuY2FudmFzLndpZHRoO1xyXG5cclxuICAgICAgaWYgKHkgPCBzaXplKSB7XHJcblxyXG4gICAgICAgICBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMSAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDIgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAzICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgc3dpdGNoICh0aGlzLnJlbmRlcmVyLnJlbmRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkFydGlzdDpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQ2hyb21hOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkNocm9tYSBWaWV3OiByZWQ9aGlnaGVzdCBjaHJvbWFcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuVmFsdWU6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVmFsdWUgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5CYW5kczpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCI1IENvbG9yICsgSGlnaGxpZ2h0IFZpZXdcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUZXh0dXJlKCkge1xyXG4gICAgICB0aGlzLm1vZGVsdmlldyA9IGdsTWF0NC5tYWtlTG9va0F0KFxyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSksICAvLyBjZW50ZXIgcG9pbnRcclxuICAgICAgICAgbmV3IGdsVmVjMyhbMCwgMSwgMF0pICAgLy8gdXAgdmVjdG9yXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb24gPSBnbE1hdDQubWFrZVBlcnNwZWN0aXZlKDU1LCAxLCAwLjEsIDEwMCk7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdGlvbi5tdWx0TSh0aGlzLm1vZGVsdmlldyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudXBkYXRlVGV4dHVyZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24pO1xyXG4gICB9O1xyXG5cclxuICAgcHJpdmF0ZSBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc3dhcChwb3MpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdGljaygpIHtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgIGlmIChVbmlmb3Jtcy51U2FtcGxlIDwgdGhpcy5NQVhfU0FNUExFUykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1swXSA9IHRoaXMuem9vbVogKiBNYXRoLnNpbih0aGlzLmFuZ2xlWSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWCk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzFdID0gdGhpcy56b29tWiAqIE1hdGguc2luKHRoaXMuYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMl0gPSB0aGlzLnpvb21aICogTWF0aC5jb3ModGhpcy5hbmdsZVkpICogTWF0aC5jb3ModGhpcy5hbmdsZVgpO1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUaW1lckxhYmVsKCkge1xyXG5cclxuICAgICAgbGV0IHQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIGxldCBkcmF3VGltZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdUaW1lJyk7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RUaW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIGxldCBlbGFwc2VkTXMgPSAodCAtIHRoaXMubGFzdFRpbWVzWzBdKSAvIHRoaXMubGFzdFRpbWVzLmxlbmd0aDtcclxuICAgICAgICAgZHJhd1RpbWVMYWJlbC5pbm5lclRleHQgPSBlbGFwc2VkTXMudG9GaXhlZCgwKSArICdtcyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0VGltZXMucHVzaCh0KTtcclxuICAgICAgaWYgKHRoaXMubGFzdFRpbWVzLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgIHRoaXMubGFzdFRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyYXdUaW1lTGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9IFVuaWZvcm1zLnVTYW1wbGUgPCB0aGlzLk1BWF9TQU1QTEVTID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IFVuaWZvcm1zLnVTYW1wbGUgLyB0aGlzLk1BWF9TQU1QTEVTO1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc1NwYW4nKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgIGxldCB3ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUucmlnaHQgPSB3ICogKDEgLSBwcm9ncmVzcykgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdsTWF0NCB9IGZyb20gJy4vZ2xNYXQnO1xyXG5pbXBvcnQgeyBnbFZlYzMsIGdsVmVjNCB9IGZyb20gJy4vZ2xWZWMnO1xyXG5pbXBvcnQgdG9TY3JlZW5WZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsJztcclxuaW1wb3J0IHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlbkZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlVmVydGV4U291cmNlIGZyb20gJy4vc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gJy4vQ29sb3JSYW5nZSc7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSAnLi9Vbmlmb3Jtcyc7XHJcbmltcG9ydCB7IGdsLCBpc01vYmlsZSB9IGZyb20gJy4vR2xvYmFscyc7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSAnLi9Qcm9maWxlcic7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gJy4vZ2xVbmlmb3JtJztcclxuaW1wb3J0IHsgZ2xDb21waWxlciB9IGZyb20gJy4vZ2xDb21waWxlcic7XHJcbmltcG9ydCB7IENvbG9yQW5hbHl6ZXIgfSBmcm9tICcuL0NvbG9yQW5hbHl6ZXInO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm1CbG9jayB9IGZyb20gJy4vZ2xVbmlmb3JtQmxvY2snO1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcmluZyBtb2RlIGZvciBkaXNwbGF5aW5nIHRoZSB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZW5kZXJNb2RlIHtcclxuICAgQXJ0aXN0ID0gMCxcclxuICAgVmFsdWUgPSAxLFxyXG4gICBDaHJvbWEgPSAyLFxyXG4gICBCYW5kcyA9IDMsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGRvZXMgdGhlIHdvcmsgb2YgYnVpbGRpbmcgdGhlIFBhdGggVHJhY2VkIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyUmVuZGVyZXIge1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVzOiBXZWJHTFRleHR1cmVbXTtcclxuICAgcHJpdmF0ZSB0b1NjcmVlblByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB0b1NjcmVlblZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB0b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBhbmFseXplcjogQ29sb3JBbmFseXplcjtcclxuXHJcbiAgIHByaXZhdGUgbWFpblZpZXcgPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgcHJpdmF0ZSBzbWFsbFZpZXdzID0gW1xyXG4gICAgICBSZW5kZXJNb2RlLkNocm9tYSxcclxuICAgICAgUmVuZGVyTW9kZS5WYWx1ZSxcclxuICAgICAgUmVuZGVyTW9kZS5CYW5kcyxcclxuICAgXTtcclxuXHJcbiAgIHByaXZhdGUgdmVydGljZXMgPSBbXHJcbiAgICAgIC0xLCAtMSxcclxuICAgICAgLTEsICsxLFxyXG4gICAgICArMSwgLTEsXHJcbiAgICAgICsxLCArMVxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICAvLyBsYXJnZXIgdGV4dHVyZSBpcyBoaWdoZXIgcmVzb2x1dGlvbiwgYnV0IHRha2VzIGxvbmdlciB0byBjb21wdXRlXHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSAyNTY7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDUxMjtcclxuICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplID0gMjU2O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5hbHl6ZXIgPSBuZXcgQ29sb3JBbmFseXplcihVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHZlcnRleCBidWZmZXIgLSB0aGUgYmxvY2sgd2UnbGwgZHJhdyBvdXIgcmVuZGVyZWQgdGV4dHVyZSBvblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGZyYW1lYnVmZmVyXHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgbGV0IGludGVybmFsRm9ybWF0OiBudW1iZXI7XHJcbiAgICAgIGxldCBmb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IHR5cGU6IG51bWJlcjtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0dXJlc1xyXG4gICAgICBpZiAoZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgbGV0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcpO1xyXG4gICAgICAgICBpZiAoZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIFRoYW5rcyBBcHBsZS4gQWx3YXlzIGdvdCB0byBkbyB0aGluZ3MgYSBsaXR0bGUgZGlmZmVyZW50bHlcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZXh0LkhBTEZfRkxPQVRfT0VTO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyBmbG9hdGluZyBwb2ludCB0ZXh0dXJlcz8gcmVhbGx5IGZhbGwgYmFjayB0byB1bnNpZ25lZCBieXRlc1xyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBsZXQgeW91IGRvIGFuICdlbHNlIGlmJyBoZXJlIGFuZCB3aGVuIFdlYkdMMiBpc1xyXG4gICAgICAvLyBub3Qgc3VwcG9ydGVkLCB3ZSBnZXQgYW4gZXhjZXB0aW9uLCBzbyB0aHVzIHRoZSB0cnktY2F0Y2hcclxuICAgICAgLy8gc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTM4MTEyMi90eXBlc2NyaXB0LXR5cGUtbmFycm93ZWQtdG8tbmV2ZXItd2l0aC1pbnN0YW5jZW9mLWluLWFuLWlmLWVsc2Utc3RhdGVtZW50XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgICAgZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTMyRjtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLkZMT0FUXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKGdsLmNyZWF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbaV0pO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0LCAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyB3aWR0aFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyBoZWlnaHRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgICAgIGZvcm1hdCwgICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICAgICB0eXBlLCAgICAgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRvU2NyZWVuIHNoYWRlclxyXG4gICAgICB0aGlzLnRvU2NyZWVuUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZSh0b1NjcmVlblZlcnRleFNvdXJjZSwgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSk7XHJcbiAgICAgIHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRvU2NyZWVuUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvU2NyZWVuVmVydGV4QXR0cmlidXRlKTtcclxuXHJcbiAgICAgIHRoaXMuY29tcGlsZVNoYWRlcih0T2JqKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb21waWxlU2hhZGVyKHRPYmo/OiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICAvLyBjcmVhdGUgdGhlIHRvVGV4dHVyZSBzaGFkZXJcclxuICAgICAgaWYgKHRPYmogJiYgdE9iai50cmlhbmdsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICB0aGlzLnRvVGV4dHVyZVByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZVZlcnRleFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJyN2ZXJzaW9uIDMwMCBlcycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCdOT1RISU5HJywgJ1VTRV9UUklBTkdMRVMnKSxcclxuICAgICAgICAgICAgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcjdmVyc2lvbiAzMDAgZXMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnTk9USElORycsICdVU0VfVFJJQU5HTEVTJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVkVSVElDRVM+JywgdE9iai52ZXJ0aWNlcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVk9MVU1FUz4nLCB0T2JqLnZvbHVtZXMubGVuZ3RoLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8TlVNX1RSSUFOR0xFUz4nLCB0T2JqLnRyaWFuZ2xlcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8vIHVwbG9hZCB0cmlhbmdsZXMgdG8gdGhlIEdQVVxyXG4gICAgICAgICB0aGlzLnVwbG9hZFVuaWZvcm1zKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnRvVGV4dHVyZVByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZVZlcnRleFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJycpLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVGcmFnbWVudFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJycpXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRvVGV4dHVyZVByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG4gICAgICBwLmxvZygnY29tcGlsZScpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVXBsb2FkcyBhbGwgdGhlIHRyaWFuZ2xlIGRhdGEgdG8gV2ViR0xcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwcm9ncmFtIFRoZSBwcm9ncmFtIHRvIHVwbG9hZCB0b1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSB1cGxvYWRVbmlmb3Jtcyh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG5cclxuICAgICAgLy8gdXBsb2FkIHRoZSBiaWcgY2h1bmtzIGFzIFVuaWZvcm0gQmxvY2tzXHJcbiAgICAgIGxldCBibG9ja0JpbmRpbmcgPSAyO1xyXG4gICAgICBsZXQgdkJsb2NrID0gbmV3IGdsVW5pZm9ybUJsb2NrKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ015VmVydGljZXNCbG9jaycsIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICAvLyBwdXQgdGhlIGRhdGEgaW50byBhIEZsb2F0MzJBcnJheSBmb3IgdXBsb2FkaW5nXHJcbiAgICAgIGxldCB2RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodE9iai52ZXJ0aWNlcy5sZW5ndGggKiA0KTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdE9iai52ZXJ0aWNlc1tpXTtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAwXSA9IHYueDtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAxXSA9IHYueTtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAyXSA9IHYuejtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAzXSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdkJsb2NrLnVwbG9hZCh2RGF0YSk7XHJcblxyXG4gICAgICBibG9ja0JpbmRpbmcgPSAzO1xyXG4gICAgICBsZXQgdEJsb2NrID0gbmV3IGdsVW5pZm9ybUJsb2NrKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ015VHJpYW5nbGVzQmxvY2snLCBibG9ja0JpbmRpbmcpO1xyXG5cclxuICAgICAgLy8gcHV0IHRoZSBkYXRhIGludG8gYSBGbG9hdDMyQXJyYXkgZm9yIHVwbG9hZGluZ1xyXG4gICAgICBsZXQgdERhdGEgPSBuZXcgSW50MzJBcnJheSh0T2JqLnRyaWFuZ2xlcy5sZW5ndGggKiA0KTtcclxuICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCB0T2JqLnZvbHVtZXMubGVuZ3RoOyB2KyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRPYmoudm9sdW1lc1t2XTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2b2wudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdm9sLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMDtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMTtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMjtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdEJsb2NrLnVwbG9hZCh0RGF0YSk7XHJcblxyXG4gICAgICAvLyBVcGxvYWQgdGhlIHZvbHVtZSBpbmZvIGFzIGEgc3RhbmRhcmQgdW5pZm9ybVxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnRvVGV4dHVyZVByb2dyYW0pO1xyXG4gICAgICBsZXQgc3RhcnRJbmRleCA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2b2wgPSB0T2JqLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10uc3RhcnRJbmRleCcsIHN0YXJ0SW5kZXgsIHRydWUpO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLm51bVRyaWFuZ2xlcycsIHZvbC50cmlhbmdsZXMubGVuZ3RoLCB0cnVlKTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5ib3hNaW4nLCB2b2wuYm94TWluKTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5ib3hNYXgnLCB2b2wuYm94TWF4KTtcclxuICAgICAgICAgc3RhcnRJbmRleCArPSB2b2wudHJpYW5nbGVzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICB1bmkuc2V0KCdvYmplY3QuYm94TWluJywgdE9iai5ib3hNaW4pO1xyXG4gICAgICB1bmkuc2V0KCdvYmplY3QuYm94TWF4JywgdE9iai5ib3hNYXgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHJlbmRlck1vZGUoKTogUmVuZGVyTW9kZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1haW5WaWV3O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgVW5pZm9ybXMudVNhbXBsZSA9IDA7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0RXllUmF5KG1hdHJpeDogZ2xNYXQ0LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWM0KFt4LCB5LCAwLCAxXSk7XHJcbiAgICAgIHJldHVybiBtYXRyaXgubXVsdFYodmVjKS5kaXZpZGVCeVcoKS5zdWJ0cmFjdChVbmlmb3Jtcy51RXllKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwZGF0ZVRleHR1cmUobW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0KTogdm9pZCB7XHJcblxyXG4gICAgICAvLyBpbXBsZW1lbnQgYWxpYXNpbmcgYnkgcmFuZG9tIHNhbXBsaW5nIHdpdGhpbiBhIHBpeGVsXHJcbiAgICAgIGxldCB4ID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgLyBVbmlmb3Jtcy51VGV4dHVyZVNpemU7XHJcbiAgICAgIGxldCB5ID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgLyBVbmlmb3Jtcy51VGV4dHVyZVNpemU7XHJcbiAgICAgIGxldCB6ID0gMDtcclxuXHJcbiAgICAgIGxldCB2ID0gbmV3IGdsVmVjMyhbeCwgeSwgel0pO1xyXG4gICAgICBsZXQgaml0dGVyID0gZ2xNYXQ0LmZyb21UcmFuc2xhdGlvbih2KTtcclxuICAgICAgbGV0IG1hdHJpeCA9IGppdHRlci5tdWx0TShtb2RlbHZpZXdQcm9qZWN0aW9uKS5pbnZlcnQoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMCA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTAxID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCAtMSwgKzEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTAgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsICsxLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMSA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsICsxKTtcclxuICAgICAgLy8gc2V0IHVuaWZvcm1zXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG5cclxuICAgICAgLy8gcmVuZGVyIHRvIHRleHR1cmVcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVW5pZm9ybXMudVRleHR1cmVTaXplLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLCAwKTtcclxuXHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5hbmFseXplci5ydW4oVW5pZm9ybXMudUxpZ2h0QWxwaGEsIFVuaWZvcm1zLnVTaGFkb3dBbHBoYSk7XHJcbiAgICAgIFVuaWZvcm1zLnVNYXhDaHJvbWEgPSBkYXRhLm1heENocm9tYTtcclxuXHJcbiAgICAgIGxldCBjciA9IG5ldyBDb2xvclJhbmdlKFtkYXRhLmRhcmtlc3RMaWdodENvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEuYXZnTGlnaHRDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvci50b0h0bWxDb2xvcigpXSk7XHJcbiAgICAgIFVuaWZvcm1zLnVIaWdobGlnaHRDb2xvciA9IGRhdGEuaGlnaGxpZ2h0Q29sb3I7XHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodExpZ2h0Q29sb3IgPSBjci5nZXQoMC44NSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVNaWRMaWdodENvbG9yID0gY3IuZ2V0KDAuNSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVEYXJrTGlnaHRDb2xvciA9IGNyLmdldCgwLjE1KS50b0dsQ29sb3IoKTtcclxuXHJcbiAgICAgIGNyID0gbmV3IENvbG9yUmFuZ2UoW2RhdGEuZGFya2VzdFNoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEuYXZnU2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCldKTtcclxuICAgICAgLy9Vbmlmb3Jtcy51U2hhZG93Q29sb3IgPSBkYXRhLnRlcm1pbmF0b3JDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudVNoYWRvd0NvbG9yID0gZGF0YS5hdmdTaGFkb3dDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudVJlZmxlY3RlZExpZ2h0Q29sb3IgPSBjci5nZXQoMSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVEYXJrQWNjZW50Q29sb3IgPSBjci5nZXQoMC4wKS50b0dsQ29sb3IoKTtcclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBwaW5nIHBvbmcgdGV4dHVyZXNcclxuICAgICAgdGhpcy50ZXh0dXJlcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlKys7XHJcbiAgICAgIFVuaWZvcm1zLnVSYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG5cclxuICAgICAgLy8gc2l6ZSBvZiB0aGUgYWN0dWFsIGNhbnZhcy4gVGhlIHRleHR1cmUgd2UgY3JlYXRlIGlzIGRyYXduIHRvIHRoaXMgaXRlbVxyXG4gICAgICBsZXQgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIC8vIG5vdCBzdXJlIHdoeSwgYnV0IHRoaXMgYmFzaWNhbGx5IGJlY29tZXMgZnVsbCB3aWR0aCBvbiBteSBwaG9uZVxyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBtYWluIHNjcmVlblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIFVuaWZvcm1zLnVTY2FsZSA9IDEuMDtcclxuICAgICAgVW5pZm9ybXMudVhPZmZzZXQgPSAwLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMubWFpblZpZXc7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIHNtYWxsZXIgdmlld3NcclxuICAgICAgVW5pZm9ybXMudVNjYWxlID0gMC4yO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc21hbGxWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51WE9mZnNldCA9IDEuMCAtICh0aGlzLnNtYWxsVmlld3MubGVuZ3RoIC0gaSAtIDAuNSkgKiAoMiAqIFVuaWZvcm1zLnVTY2FsZSk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMS4wIC0gVW5pZm9ybXMudVNjYWxlO1xyXG4gICAgICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMuc21hbGxWaWV3c1tpXTtcclxuICAgICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcbiAgICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc21hbGxWaWV3cyA9IFtcclxuICAgICAgICAgUmVuZGVyTW9kZS5DaHJvbWEsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuVmFsdWUsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQmFuZHMsXHJcbiAgICAgIF07XHJcbiAgICAgIGlmICh0aGlzLm1haW5WaWV3ID09IHRoaXMuc21hbGxWaWV3c1twb3NdKSB7XHJcbiAgICAgICAgIHRoaXMubWFpblZpZXcgPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tYWluVmlldyA9IHRoaXMuc21hbGxWaWV3c1twb3NdO1xyXG4gICAgICAgICB0aGlzLnNtYWxsVmlld3NbcG9zXSA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IEdsb2JhbHMsIHRvUmFkLCBpc01vYmlsZSwgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFBsYW5lc1JlbmRlcmVyIH0gZnJvbSBcIi4vUGxhbmVzUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2xWZWM0LCBnbFZlYzMsIGdsVmVjMiB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IE5vcm1hbFR5cGUsIFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVTcGhlcmUgfSBmcm9tIFwiLi9UcmlhbmdsZVNwaGVyZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUN1YmUgfSBmcm9tIFwiLi9UcmlhbmdsZUN1YmVcIjtcclxuaW1wb3J0IHsgVGhyZXNob2xkQ3RybCB9IGZyb20gXCIuL1RocmVzaG9sZEN0cmxcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuXHJcbi8vIHNwZWNpZnkgbG9hZGVyIGFuZCBvcHRpb25zIGhlcmUuIFRoaXMgdmFsdWUgbXVzdCBtYXRjaCB0aGVcclxuLy8gY29udGVudHMgb2Ygd29ya2VyLmQudHNcclxuaW1wb3J0IExvYWRlcldvcmtlciBmcm9tICd3b3JrZXItbG9hZGVyP25hbWU9TG9hZGVyV29ya2VyLndvcmtlci5qcyEuL0xvYWRlcldvcmtlcic7XHJcbmltcG9ydCB7IERyb3BEb3duTWVudSB9IGZyb20gXCIuL0Ryb3BEb3duTWVudVwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuZW51bSBQb2ludGVyTW9kZSB7XHJcbiAgIFZpZXcsXHJcbiAgIExpZ2h0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbmVzQXBwIHtcclxuICAgcHVibGljIHJlbmRlcmVyOiBQbGFuZXNSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlU3BlY2lhbCA9IGZhbHNlO1xyXG4gICBwcml2YXRlIG92ZXJsYXk6IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBoYW5kbGVyOiBQb2ludGVyRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgcHJpdmF0ZSBkaXJ0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICBwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gICBwcml2YXRlIGhpZ2hsaWdodFNsaWRlcjogU2xpZGVyXHJcbiAgIHByaXZhdGUgbGlnaHRMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIG1pZExpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgZGFya0xpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgc2hhZG93U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgdGhyZXNob2xkQ3RybDogVGhyZXNob2xkQ3RybDtcclxuICAgcHJpdmF0ZSB3b3JrZXI6IExvYWRlcldvcmtlcjtcclxuXHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDEgPSB2YWw7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2V0IHRocmVzaG9sZDIodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci50aHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnUGxhbmVzQXBwJztcclxuXHJcbiAgICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdmlld0NvbnRhaW5lci5pZCA9ICdWaWV3Q29udGFpbmVyJztcclxuICAgICAgdmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKHZpZXdDb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZVZpZXdFbGVtZW50cyh2aWV3Q29udGFpbmVyKTtcclxuICAgICAgZGl2LnN0eWxlLndpZHRoID0gZ2wuY2FudmFzLndpZHRoICsgJ3B4JztcclxuXHJcbiAgICAgIGNvbnN0IGN0cmxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGN0cmxzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG4gICAgICBjdHJsc0NvbnRhaW5lci5pZCA9ICdDdHJsc0NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjdHJsc0NvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY3JlYXRlQ3RybHNFbGVtZW50cyhjdHJsc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZVZpZXdFbGVtZW50cyhwYXJlbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy5pZCA9ICdNYWluQ2FudmFzJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5vdmVybGF5LmlkID0gJ092ZXJsYXknO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuXHJcbiAgICAgIGxldCBzaXplID0gNTEyO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgY2FudmFzLndpZHRoID0gc2l6ZTtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHNpemU7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5saW5lSGVpZ2h0ID0gc2l6ZSArICdweCc7IC8vIHZlcnRpY2FsbHkgY2VudGVyIHRleHRcclxuXHJcbiAgICAgIC8vIHdoeSBkbyB3ZSBoYXZlIHRvIG1hbnVhbGx5IHNldCB0aGlzIGhlaWdodD8gSWYgd2UgZG9uJ3QgaXQgaXMgNTE1LjIgcHggaGlnaFxyXG4gICAgICBwYXJlbnQuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XHJcblxyXG5cclxuICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIEdsb2JhbHMuZ2wgPSBjb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBQbGFuZXNSZW5kZXJlcigpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIoY2FudmFzKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRG93biA9IChwb3MpID0+IHRoaXMub25Eb3duKHBvcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbk1vdmUgPSAocG9zKSA9PiB0aGlzLm9uTW92ZShwb3MpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25DbGljayA9IChwb3MpID0+IHRoaXMub25DbGljayhwb3MpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25EYmxDbGljayA9IChwb3MpID0+IHRoaXMub25EYmxDbGljayhwb3MpO1xyXG5cclxuICAgICAgZG9jdW1lbnQub25rZXlwcmVzcyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnbycpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5vcHRpbWl6ZShOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAncCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5vcHRpbWl6ZShOb3JtYWxUeXBlLkZsYXQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtZW51ID0gbmV3IERyb3BEb3duTWVudShwYXJlbnQsICdNb2RlbHMnLCAnTW9kZWxEcm9wRG93bicpO1xyXG4gICAgICBtZW51LmFkZEl0ZW0oJ01hbGUgSGVhZCcsICgpID0+IHRoaXMubG9hZE1vZGVsKCdIZWFkLm9iaicpKTtcclxuICAgICAgbWVudS5hZGRJdGVtKCdGZW1hbGUgUG9zZScsICgpID0+IHRoaXMubG9hZE1vZGVsKCdQb3NlMS5vYmonKSk7XHJcbiAgICAgIG1lbnUuYWRkSXRlbSgnRmVtYWxlIEhlYWQnLCAoKSA9PiB0aGlzLmxvYWRNb2RlbCgnRmVtYWxlSGVhZC5vYmonKSk7XHJcbiAgICAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMScsICgpID0+IHRoaXMubG9hZE1vZGVsKCdTa3VsbC5vYmonKSk7XHJcbiAgICAgIG1lbnUuYWRkSXRlbSgnU2t1bGwgMicsICgpID0+IHRoaXMubG9hZE1vZGVsKCdTa3VsbEhpZ2gub2JqJykpO1xyXG4gICAgICBtZW51LmFkZEl0ZW0oJ0Fybm9sZCcsICgpID0+IHRoaXMubG9hZE1vZGVsKCdBcm5vbGQub2JqJykpO1xyXG4gICAgICBtZW51LmFkZEl0ZW0oJ1RlYXBvdCcsICgpID0+IHRoaXMubG9hZE1vZGVsKCdUZWFwb3Qub2JqJykpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZUN0cmxzRWxlbWVudHMocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnRocmVzaG9sZEN0cmwgPSBuZXcgVGhyZXNob2xkQ3RybChwYXJlbnQsIHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnSGlnaGxpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5oaWdobGlnaHQgPSB0aGlzLmhpZ2hsaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5oaWdobGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodExpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQgPSB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIubGlnaHRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLm1pZExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihwYXJlbnQsIHtcclxuICAgICAgICAgaWQ6ICdNaWRMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnTWlkIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIubWlkTGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0ID0gdGhpcy5taWRMaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIocGFyZW50LCB7XHJcbiAgICAgICAgIGlkOiAnRGFya0xpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdEYXJrIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQgPSB0aGlzLmRhcmtMaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zaGFkb3dTbGlkZXIgPSBuZXcgU2xpZGVyKHBhcmVudCwge1xyXG4gICAgICAgICBpZDogJ1NoYWRvdycsXHJcbiAgICAgICAgIGxhYmVsOiAnU2hhZG93JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuc2hhZG93ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkb3cgPSB0aGlzLnNoYWRvd1NsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5zaGFkb3cpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5sb2FkTW9kZWwodGhpcy5xdWVyeSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgbG9hZE1vZGVsKHF1ZXJ5OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIC8vIGlmIG5vdGhpbmcgd2FzIHNwZWNpZmllZCwgbG9hZCB0aGUgaGVhZCBtb2RlbFxyXG4gICAgICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICAgICAgIHF1ZXJ5ID0gJ0hlYWQub2JqJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICd0cmlhbmdsZXNwaGVyZScpIHtcclxuICAgICAgICAgbGV0IHJhZGl1cyA9IDAuNzU7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlU3BoZXJlKDEwMCwgcmFkaXVzLCBjZW50ZXIpXHJcbiAgICAgICAgIHRPYmouY29tcHV0ZU5vcm1hbHMoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICd0cmlhbmdsZWN1YmUnKSB7XHJcbiAgICAgICAgIGxldCBzaXplID0gMC44O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZUN1YmUoc2l6ZSwgY2VudGVyKTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcub2JqJykpIHtcclxuXHJcbiAgICAgICAgIC8vIGlmIGEgcHJldmlvdXMgd29ya2VyIGV4aXN0cywgY2xvc2UgaXRcclxuICAgICAgICAgaWYgKHRoaXMud29ya2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMud29ya2VyLnRlcm1pbmF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLndvcmtlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdGhpcy53b3JrZXIgPSBuZXcgTG9hZGVyV29ya2VyKCk7XHJcbiAgICAgICAgIGxldCB0U3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICB0aGlzLndvcmtlci5vbm1lc3NhZ2UgPSAoeyBkYXRhIH06IHsgZGF0YTogYW55IH0pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgLy8gYXZvaWQgZmxhc2hpbmcgbWVzc2FnZXMgZm9yIHRoaW5ncyB0aGF0IGhhcHBlbiB2ZXJ5IHF1aWNrbHkuXHJcbiAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdFN0YXJ0ID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5pbm5lclRleHQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGxldCB0T2JqID0gVHJpYW5nbGVPYmouaW1wb3J0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICB0aGlzLm9yaWVudCh0T2JqLCBxdWVyeSk7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLndvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgdGhpcy53b3JrZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UocXVlcnkpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gVE9ETyBtdWx0aSBsaW5lIGVycm9yIG1lc3NhZ2VzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgdGhpcy5vdmVybGF5LmlubmVyVGV4dCA9ICdVbmtub3duIE1vZGVsOicgKyBxdWVyeTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3JpZW50KHRPYmo6IFRyaWFuZ2xlT2JqLCBxdWVyeTogc3RyaW5nKSB7XHJcblxyXG4gICAgICBsZXQgY2VudGVyID0gdE9iai5jZW50ZXI7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudHJhbnNsYXRlKG5ldyBnbFZlYzMoWy1jZW50ZXIueCwgLWNlbnRlci55LCAtY2VudGVyLnpdKSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2NhbGUoMi4wIC8gTWF0aC5zcXJ0KHRPYmoud2lkdGggKiB0T2JqLndpZHRoICsgdE9iai5oZWlnaHQgKiB0T2JqLmhlaWdodCArIHRPYmouZGVwdGggKiB0T2JqLmRlcHRoKSk7XHJcblxyXG4gICAgICAvLyBvcmllbnQgZWFjaCBmaWxlIHNvIHRoYXQgaXQgaXMgZmFjaW5nIGZvcndhcmRcclxuICAgICAgc3dpdGNoIChxdWVyeS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgIGNhc2UgJ3NrdWxsLm9iaic6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WCh0b1JhZCg5MCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFkodG9SYWQoMTgwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAnd29sZi5vYmonOlxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFkodG9SYWQoLTE0MCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFgodG9SYWQoNSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgJ3NoZWVwaGVhZC5vYmonOlxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFkodG9SYWQoLTE2MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgJ3Bvc2UxLm9iaic6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAndGVhcG90Lm9iaic6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSh0b1JhZCg5MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSh0b1JhZCgxODApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVTbGlkZXJzKCkge1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0O1xyXG4gICAgICB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQ7XHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0O1xyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0O1xyXG4gICAgICB0aGlzLnNoYWRvd1NsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuc2hhZG93O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHRvZ2dsZU1vZGUoKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLlZpZXc6XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5MaWdodDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5iYWxsQ29sb3IgPSB0aGlzLnJlbmRlcmVyLnllbGxvdztcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLkxpZ2h0OlxyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5iYWxsQ29sb3IgPSBuZXcgZ2xDb2xvcihbMS4wLCAxLjAsIDEuMF0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRvd24ocG9zOiBnbFZlYzIpIHtcclxuXHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGVTcGVjaWFsID0gKHBvcy54IDwgMC4xICogZ2wuY2FudmFzLndpZHRoKSA/IHRydWUgOiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdmUocG9zOiBnbFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMuaGFuZGxlci5tb3VzZURvd24pIHtcclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICAgICBsZXQgb2xkID0gdGhpcy5oYW5kbGVyLmxhc3RQb3M7XHJcbiAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFooKG9sZC55IC0gcG9zLnkpICogMC4wMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WCgocG9zLnkgLSBvbGQueSkgKiAwLjAxKTtcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKChwb3MueCAtIG9sZC54KSAqIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBtYXRZID0gZ2xNYXQ0LmZyb21Sb3RZKHRvUmFkKHBvcy54IC0gb2xkLngpKTtcclxuICAgICAgICAgICAgbGV0IG1hdFggPSBnbE1hdDQuZnJvbVJvdFgodG9SYWQocG9zLnkgLSBvbGQueSkpO1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjNChbXHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLngsXHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnksXHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnosXHJcbiAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHZlYyA9IG1hdFgubXVsdFYodmVjKTtcclxuICAgICAgICAgICAgdmVjID0gbWF0WS5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi54ID0gdmVjLnZhbHVlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSA9IHZlYy52YWx1ZXNbMV07XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnogPSB2ZWMudmFsdWVzWzJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlLlxyXG4gICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlLlxyXG4gICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgaGl0IG9uIG9uZSBvZiB0aGUgdmlld3Mgb2NjdXJzLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBvbkNsaWNrKHBvczogZ2xWZWMyKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IGdsLmNhbnZhcy53aWR0aDtcclxuXHJcbiAgICAgIC8vIFRPRE8gZ2V0IHRoZSBzaXplIG9mIHRoZSBhcmVhIGZyb20gdGhlIHJlbmRlcmVyXHJcbiAgICAgIGlmIChwb3MueCA8IHNpemUgLyA1ICYmIHBvcy55IDwgc2l6ZSAvIDUpIHtcclxuICAgICAgICAgdGhpcy50b2dnbGVNb2RlKCk7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jbGljayhwb3MueCAvIHNpemUsIDEgLSAocG9zLnkgLyBzaXplKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25EYmxDbGljayhwb3M6IGdsVmVjMikge1xyXG5cclxuICAgICAgdGhpcy50b2dnbGVNb2RlKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoKTtcclxuICAgICAgICAgdGhpcy50aHJlc2hvbGRDdHJsLmRyYXcoKTtcclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSAnLi9nbE1hdCc7XHJcbmltcG9ydCB7IGdsVmVjMywgZ2xWZWMyIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB2ZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BsYW5lc1ZlcnRleC5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50U291cmNlIGZyb20gJy4vc2hhZGVycy9QbGFuZXNGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgZ2wsIGNsYW1wLCBtaXgsIHRvUmFkLCB0b0RlZywgaXNNb2JpbGUgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZVNwaGVyZSB9IGZyb20gJy4vVHJpYW5nbGVTcGhlcmUnO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tICcuL2dsVW5pZm9ybSc7XHJcbmltcG9ydCB7IGdsQ29tcGlsZXIgfSBmcm9tICcuL2dsQ29tcGlsZXInO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBnbE9iamVjdCB9IGZyb20gJy4vZ2xPYmplY3QnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUFycm93IH0gZnJvbSAnLi9UcmlhbmdsZUFycm93JztcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gJy4vZ2xDb2xvcic7XHJcbmltcG9ydCB7IFRleHR1cmVSZW5kZXJlciB9IGZyb20gJy4vVGV4dHVyZVJlbmRlcmVyJztcclxuaW1wb3J0IHsgZ2xUZXh0dXJlRnJhbWVCdWZmZXIsIEZyYW1lQnVmZmVyU3R5bGUgfSBmcm9tICcuL2dsVGV4dHVyZUZyYW1lQnVmZmVyJztcclxuaW1wb3J0IHsgdGV4dHVyZVNpemUgfSBmcm9tICcuL1RocmVzaG9sZEN0cmwnO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tICcuL2h0bWxDb2xvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFsbEltYWdlRGF0YSB7XHJcbiAgIHB1YmxpYyBpbWFnZTogSW1hZ2VEYXRhO1xyXG4gICBwdWJsaWMgYmFsbENlbnRlcjogZ2xWZWMyO1xyXG4gICBwdWJsaWMgYmFsbFJhZGl1czogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCQUxMX1JBRElVUyA9IDAuNTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IHJlbmRlcnMgdHJpYW5nbGVzIGFuZCBhIGxpZ2h0IHNvdXJjZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYW5lc1JlbmRlcmVyIHtcclxuXHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgIHByaXZhdGUgc2hhZG93VmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgcHJpdmF0ZSB1Q29sb3IgPSBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pO1xyXG4gICBwcml2YXRlIHVUaHJlc2hvbGQxID0gNDA7XHJcbiAgIHByaXZhdGUgdVRocmVzaG9sZDIgPSA3MDtcclxuXHJcbiAgIHByaXZhdGUgdUhpZ2hsaWdodDogbnVtYmVyID0gMS4wO1xyXG4gICBwcml2YXRlIHVMaWdodExpZ2h0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdU1pZExpZ2h0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdURhcmtMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVTaGFkb3c6IG51bWJlciA9IDAuMjtcclxuXHJcbiAgIC8vIHNpemUgb2YgdGhlIHNtYWxsZXIgdmlld1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IG1pbmlTaXplID0gMC4yO1xyXG5cclxuICAgcHJpdmF0ZSB1VXNlVGhyZXNob2xkcyA9IGZhbHNlO1xyXG5cclxuICAgcHJpdmF0ZSBiYWxsOiBnbE9iamVjdDtcclxuICAgcHJpdmF0ZSBhcnJvdzogZ2xPYmplY3Q7XHJcbiAgIHByaXZhdGUgb2JqOiBnbE9iamVjdDtcclxuXHJcbiAgIHByaXZhdGUgc2hhZG93RnJhbWVCdWZmZXI6IGdsVGV4dHVyZUZyYW1lQnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVGcmFtZUJ1ZmZlcjogZ2xUZXh0dXJlRnJhbWVCdWZmZXI7XHJcblxyXG4gICBwdWJsaWMgdUxpZ2h0RGlyZWN0aW9uID0gbmV3IGdsVmVjMyhbMS4wLCAtMS4wLCAxLjVdKTtcclxuXHJcbiAgIHB1YmxpYyBiYWxsQ29sb3IgPSBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pO1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgeWVsbG93ID0gbmV3IGdsQ29sb3IoWzEuMCwgMC45LCAwLjddKTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG5cclxuICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgICAgdGhpcy5wcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xyXG5cclxuICAgICAgbGV0IHRCYWxsID0gbmV3IFRyaWFuZ2xlU3BoZXJlKDEwMCwgQkFMTF9SQURJVVMsIG5ldyBnbFZlYzMoWzAsIDAsIDBdKSk7XHJcbiAgICAgIHRCYWxsLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgdGhpcy5iYWxsID0gbmV3IGdsT2JqZWN0KHRCYWxsLCB0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgbGV0IHRBcnJvdyA9IG5ldyBUcmlhbmdsZUFycm93KCk7XHJcbiAgICAgIHRoaXMuYXJyb3cgPSBuZXcgZ2xPYmplY3QodEFycm93LCB0aGlzLnByb2dyYW0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMub2JqLnJvdFgoYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RZKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5vYmoucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm9iai5yb3RaKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm9iai5zY2FsZShzY2FsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLm9iai50cmFuc2xhdGUob2Zmc2V0KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoaWdobGlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudUhpZ2hsaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IGhpZ2hsaWdodCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1pbih0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IE1hdGgubWluKHRoaXMudU1pZExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1pbih0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBsaWdodExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVMaWdodExpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgbGlnaHRMaWdodCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gTWF0aC5taW4odGhpcy51TWlkTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IE1hdGgubWluKHRoaXMudURhcmtMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51U2hhZG93ID0gTWF0aC5taW4odGhpcy51U2hhZG93LCB2YWwpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IG1pZExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVNaWRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IG1pZExpZ2h0KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudUhpZ2hsaWdodCA9IE1hdGgubWF4KHRoaXMudUhpZ2hsaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51TGlnaHRMaWdodCA9IE1hdGgubWF4KHRoaXMudUxpZ2h0TGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gdmFsO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1pbih0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkYXJrTGlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudURhcmtMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IGRhcmtMaWdodCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1heCh0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IE1hdGgubWF4KHRoaXMudU1pZExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBzaGFkb3coKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudVNoYWRvdztcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHNoYWRvdyh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1heCh0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IE1hdGgubWF4KHRoaXMudU1pZExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1heCh0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQxKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQxO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gTWF0aC5tYXgodGhpcy51VGhyZXNob2xkMiwgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQyO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gTWF0aC5taW4odGhpcy51VGhyZXNob2xkMSwgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb2xvckF0KGRlZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgZGVnID0gY2xhbXAoZGVnLCAwLCA5MCk7XHJcbiAgICAgIHJldHVybiBtaXgodGhpcy51U2hhZG93LCB0aGlzLnVIaWdobGlnaHQgLSAwLjEsIE1hdGguY29zKHRvUmFkKGRlZykpKTtcclxuICAgfVxyXG5cclxuICAgLypcclxuICAgcHJpdmF0ZSB0aHJlc2hvbGRBdChjb2xvcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgY29sb3IgPSBjbGFtcChjb2xvciwgdGhpcy5hbWJpZW50SW50ZW5zaXR5LCB0aGlzLmFtYmllbnRJbnRlbnNpdHkgKyB0aGlzLmxpZ2h0SW50ZW5zaXR5KTtcclxuICAgICAgcmV0dXJuIHRvRGVnKE1hdGguYWNvcyhjb2xvciAtIHRoaXMuYW1iaWVudEludGVuc2l0eSkgLyB0aGlzLmxpZ2h0SW50ZW5zaXR5KTtcclxuICAgfVxyXG4qL1xyXG5cclxuICAgcHJpdmF0ZSBjb21wdXRlQ29sb3JzKCkge1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gdGhpcy5jb2xvckF0KDAuNSAqIHRoaXMudGhyZXNob2xkMSk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gdGhpcy5jb2xvckF0KG1peCh0aGlzLnRocmVzaG9sZDEsIHRoaXMudGhyZXNob2xkMiwgMC41KSk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IHRoaXMuY29sb3JBdCgodGhpcy50aHJlc2hvbGQyICsgOTApIC8gMik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXRNb2RlbCh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBpZiAodGhpcy5vYmopIHtcclxuICAgICAgICAgdGhpcy5vYmouZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vYmogPSBuZXcgZ2xPYmplY3QodE9iaiwgdGhpcy5wcm9ncmFtKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vdGhpcy5yZW5kZXJCYWxsKCk7XHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIHRoaXMucmVuZGVyVG9TaGFkb3dNYXAoKTtcclxuICAgICAgdGhpcy5yZW5kZXJUb1NjcmVlbigpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldFN0ZFVuaWZvcm1zKCk6IGdsVW5pZm9ybSB7XHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdzaGFkb3dWaWV3JywgdGhpcy5zaGFkb3dWaWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgncHJvamVjdGlvbicsIHRoaXMucHJvamVjdGlvbi50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51VXNlVGhyZXNob2xkcyA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgdGhpcy51TGlnaHREaXJlY3Rpb24pO1xyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAxKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VUaHJlc2hvbGQxJywgMSAtIE1hdGguc2luKHRvUmFkKHRoaXMudGhyZXNob2xkMSArIDkwKSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VGhyZXNob2xkMicsIDEgLSBNYXRoLnNpbih0b1JhZCh0aGlzLnRocmVzaG9sZDIgKyA5MCkpKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodEludGVuc2l0eScsIHRoaXMudUhpZ2hsaWdodCAtIHRoaXMudVNoYWRvdyAtIDAuMSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgdGhpcy51U2hhZG93KTtcclxuICAgICAgdW5pLnNldCgndUhpZ2hsaWdodCcsIHRoaXMudUhpZ2hsaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodExpZ2h0JywgdGhpcy51TGlnaHRMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VNaWRMaWdodCcsIHRoaXMudU1pZExpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndURhcmtMaWdodCcsIHRoaXMudURhcmtMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VTaGFkb3cnLCB0aGlzLnVTaGFkb3cpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUNvbG9yJywgdGhpcy51Q29sb3IpO1xyXG5cclxuICAgICAgcmV0dXJuIHVuaTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldEJhbGxJbWFnZSgpOiBCYWxsSW1hZ2VEYXRhIHtcclxuXHJcbiAgICAgIGlmICghdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIgPSBuZXcgZ2xUZXh0dXJlRnJhbWVCdWZmZXIodGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCBGcmFtZUJ1ZmZlclN0eWxlLkRlcHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmNvbG9yVGV4dHVyZSk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmNvbG9yVGV4dHVyZSwgMCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuXHJcbiAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoPEVsZW1lbnQ+Z2wuY2FudmFzKTtcclxuICAgICAgbGV0IGNvbG9yID0gaHRtbENvbG9yLmZyb21Dc3Moc3R5bGUuYmFja2dyb3VuZENvbG9yKS50b0dsQ29sb3IoKTtcclxuICAgICAgZ2wuY2xlYXJDb2xvcihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCAxKTtcclxuICAgICAgLy9nbC5jbGVhckNvbG9yKDAuNSwgMC41LCAwLjYsIDEpO1xyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG5cclxuICAgICAgbGV0IHZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgICAgIHZpZXcudHJhbnNsYXRlKG5ldyBnbFZlYzMoWy0wLjQ1LCAtMC40NSwgMF0pKTtcclxuICAgICAgdW5pLnNldCgndmlldycsIHZpZXcudHJhbnNwb3NlKCkpO1xyXG5cclxuICAgICAgLy8gYWx3YXlzIHJlbmRlciB3aXRoIGJhbmRzXHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlVGhyZXNob2xkcycsIDEpO1xyXG5cclxuICAgICAgLy8gc2hvb3QgdGhlIGxpZ2h0IHN0cmFpZ2h0IGRvd25cclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IGdsVmVjMyhbMCwgLTEsIDBdKSk7XHJcblxyXG4gICAgICAvLyBkb24ndCBjYXN0IHNoYWRvd3NcclxuICAgICAgdW5pLnNldGkoJ3VVc2VTaGFkb3dzJywgMCk7XHJcblxyXG4gICAgICB0aGlzLmJhbGwuZHJhdygpO1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgQmFsbEltYWdlRGF0YSgpO1xyXG4gICAgICBkYXRhLmJhbGxSYWRpdXMgPSBCQUxMX1JBRElVUztcclxuICAgICAgbGV0IGMgPSAwLjA1ICsgQkFMTF9SQURJVVM7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlciA9IG5ldyBnbFZlYzIoW2MsIGNdKTtcclxuXHJcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZSBzaW5jZSBvdXIgZHJhd2luZyBzcGFjZSBpcyAtMSB0byAxXHJcbiAgICAgIGRhdGEuYmFsbFJhZGl1cyAvPSAyO1xyXG4gICAgICBkYXRhLmJhbGxDZW50ZXIueCAvPSAyO1xyXG4gICAgICBkYXRhLmJhbGxDZW50ZXIueSAvPSAyO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgYXJyb3dcclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IGdsVmVjMyhbMSwgLTAuNSwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIDAsIHRydWUpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgcmVzZXQgdGhpbmdzIHNvIHRoYXQgd2UncmUgbG9va2luZyBkb3duIHRoZSB6LWF4aXNcclxuICAgICAgdGhpcy5hcnJvdy5jbGVhclRyYW5zZm9ybXMoKTtcclxuICAgICAgdGhpcy5hcnJvdy50cmFuc2xhdGUobmV3IGdsVmVjMyhbMC4wLCAxLjAsIDAuMF0pKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VDb2xvcicsIG5ldyBnbENvbG9yKFsxLjAsIDEuMCwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIDAuNCk7XHJcbiAgICAgIHRoaXMuYXJyb3cuZHJhdygpO1xyXG5cclxuXHJcbiAgICAgIGxldCBwaXhlbHMgPSBuZXcgVWludDhBcnJheSh0ZXh0dXJlU2l6ZSAqIHRleHR1cmVTaXplICogNCk7XHJcbiAgICAgIGdsLnJlYWRQaXhlbHMoMCwgMCwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBwaXhlbHMpO1xyXG5cclxuICAgICAgZGF0YS5pbWFnZSA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVscyksIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSByZW5kZXJUb1NoYWRvd01hcCgpOiB2b2lkIHtcclxuXHJcbiAgICAgIGlmICghdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyID0gbmV3IGdsVGV4dHVyZUZyYW1lQnVmZmVyKGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCwgRnJhbWVCdWZmZXJTdHlsZS5EZXB0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5mcmFtZUJ1ZmZlcik7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICBsZXQgdXAgPSBuZXcgZ2xWZWMzKFswLCAxLCAwXSk7XHJcbiAgICAgIGxldCBtYXQgPSBnbE1hdDQubWFrZUxvb2tBdCh0aGlzLnVMaWdodERpcmVjdGlvbiwgY2VudGVyLCB1cCk7XHJcbiAgICAgIG1hdC5zZXQoMCwgMywgMCk7XHJcbiAgICAgIG1hdC5zZXQoMSwgMywgMCk7XHJcbiAgICAgIG1hdC5zZXQoMiwgMywgMCk7XHJcbiAgICAgIHRoaXMuc2hhZG93VmlldyA9IG1hdDtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICAvLyBjaGFuZ2UgdGhlIHZpZXcgbWF0cml4IHNvIHRoYXQgb3VyIHZpZXcgaXMgZnJvbSB0aGUgbGlnaHRcclxuICAgICAgdW5pLnNldCgndmlldycsIHRoaXMuc2hhZG93Vmlldy50cmFuc3Bvc2UoKSk7XHJcblxyXG4gICAgICAvLyBkb24ndCB0cnkgdG8gdXNlIHRoZSBzaGFkb3cgdGV4dHVyZSB3aGlsZSB3ZSdyZSBjcmVhdGluZyBpdFxyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAwKTtcclxuXHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHJlbmRlclRvU2NyZWVuKCk6IHZvaWQge1xyXG5cclxuICAgICAgLypcclxuICAgICAgLy8gZGlzcGxheSB0aGUgZGVwdGggYnVmZmVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgIGxldCB0ciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIoKTtcclxuICAgICAgdHIucmVuZGVyKHRoaXMuc2hhZG93TWFwLmRlcHRoVGV4dHVyZSk7XHJcbiAgICAgICovXHJcblxyXG4gICAgICAvKlxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIGRlcHRoIGJ1ZmZlciBmb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBsZXQgdHIgPSBuZXcgVGV4dHVyZVJlbmRlcmVyKCk7XHJcbiAgICAgIHRyLnJlbmRlcih0aGlzLnRleHR1cmVGcmFtZUJ1ZmZlci5jb2xvclRleHR1cmUpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgICAgKi9cclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuZGVwdGhUZXh0dXJlKVxyXG5cclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgdGhlIHZpZXcgbWF0cml4XHJcbiAgICAgIHRoaXMudmlldyA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIG1haW4gb2JqZWN0XHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIG9iamVjdCBpbiB0aGUgdXBwZXIgcmlnaHQgYXQgYSByZWR1Y2VkIHNpemUgYW5kIG9wcG9zaXRlIGJhbmRpbmdcclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICAgIHRoaXMudmlldy5zY2FsZSh0aGlzLm1pbmlTaXplKTtcclxuICAgICAgdGhpcy52aWV3LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFsxIC0gdGhpcy5taW5pU2l6ZSwgMSAtIHRoaXMubWluaVNpemUsIDBdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIHRoaXMudVVzZVRocmVzaG9sZHMgPyAwIDogMSwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIGJhbGxcclxuICAgICAgdGhpcy5kcmF3QmFsbCgpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZHJhd0JhbGwoKSB7XHJcblxyXG4gICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG5cclxuICAgICAgLy8gc3RvcCB1c2luZyB0aGUgc2hhZG93bWFwXHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDApO1xyXG5cclxuICAgICAgdGhpcy52aWV3ID0gbmV3IGdsTWF0NCgpO1xyXG4gICAgICB0aGlzLnZpZXcuc2NhbGUodGhpcy5taW5pU2l6ZSk7XHJcbiAgICAgIHRoaXMudmlldy50cmFuc2xhdGUobmV3IGdsVmVjMyhbLSgxIC0gdGhpcy5taW5pU2l6ZSksIDEgLSB0aGlzLm1pbmlTaXplLCAwXSkpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy52aWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICB1bmkuc2V0KCd1Q29sb3InLCB0aGlzLmJhbGxDb2xvcik7XHJcbiAgICAgIHRoaXMuYmFsbC5kcmF3KCk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgZ2xWZWMzKFsxLCAtMC41LCAwLjVdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgMCwgdHJ1ZSk7XHJcblxyXG4gICAgICAvLyBiYWNrIG91dCBhbmdsZXMgYXMgaWYgbG9va2luZyBkb3duIHRoZSB6LWF4aXNcclxuICAgICAgbGV0IHggPSB0aGlzLnVMaWdodERpcmVjdGlvbi54O1xyXG4gICAgICBsZXQgeSA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLnk7XHJcbiAgICAgIGxldCB6ID0gdGhpcy51TGlnaHREaXJlY3Rpb24uejtcclxuXHJcbiAgICAgIC8vIHN0YXJ0IGJ5IGxvb2tpbmcgZG93biBmcm9tIHRoZSBaIGRpcmVjdGlvblxyXG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XHJcbiAgICAgIGxldCBlbGV2YXRpb25BbmdsZSA9IE1hdGguYWNvcyh6IC8gcmFkaXVzKTtcclxuICAgICAgbGV0IHJvdGF0aW9uQW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgcmVzZXQgdGhpbmdzIHNvIHRoYXQgd2UncmUgbG9va2luZyBkb3duIHRoZSB6LWF4aXNcclxuICAgICAgdGhpcy5hcnJvdy5jbGVhclRyYW5zZm9ybXMoKTtcclxuICAgICAgdGhpcy5hcnJvdy50cmFuc2xhdGUobmV3IGdsVmVjMyhbMC4wLCAwLjU1LCAwLjBdKSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90WCh0b1JhZCg5MCkpO1xyXG5cclxuICAgICAgLy8gcm90YXRlIHRvIG1hdGNoIHRoZSBsaWdodCBzb3VyY2VcclxuICAgICAgdGhpcy5hcnJvdy5yb3RZKC1lbGV2YXRpb25BbmdsZSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90Wigtcm90YXRpb25BbmdsZSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1Q29sb3InLCB0aGlzLnllbGxvdyk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbGljayh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgaWYgKHggPiAoMSAtIHRoaXMubWluaVNpemUpICYmIHkgPiAoMSAtIHRoaXMubWluaVNpemUpKSB7XHJcbiAgICAgICAgIHRoaXMudVVzZVRocmVzaG9sZHMgPSAhdGhpcy51VXNlVGhyZXNob2xkcztcclxuICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuICAgICAgdGhpcy5vYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMiB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG50eXBlIFBvaW50ZXJFdmVudFZvaWRGdW5jdGlvbiA9IChwb3M6IGdsVmVjMikgPT4gdm9pZDtcclxudHlwZSBQb2ludGVyRXZlbnRCb29sZWFuRnVuY3Rpb24gPSAocG9zOiBnbFZlYzIpID0+IGJvb2xlYW47XHJcblxyXG5jb25zdCBEQkxfQ0xJQ0tfVElNRSA9IDMwMDsgLy8gbXNcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBtYW5hZ2luZyB0b3VjaC9tb3VzZSBldmVudHMgb3ZlciBhIGh0bWwgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvaW50ZXJFdmVudEhhbmRsZXIge1xyXG5cclxuICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgcHVibGljIG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgcHVibGljIG9uVXA6IFZvaWRGdW5jdGlvbjtcclxuICAgcHVibGljIG9uRG93bjogUG9pbnRlckV2ZW50Vm9pZEZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25Nb3ZlOiBQb2ludGVyRXZlbnRWb2lkRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkNsaWNrOiBQb2ludGVyRXZlbnRCb29sZWFuRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRibENsaWNrOiBQb2ludGVyRXZlbnRWb2lkRnVuY3Rpb247XHJcblxyXG4gICBwdWJsaWMgbGFzdFBvczogZ2xWZWMyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaFRpbWU6IG51bWJlcjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgZWxlbWVudC5vbnRvdWNoc3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC54LCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnldKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHRpbWUgLSB0aGlzLmxhc3RUb3VjaFRpbWUgPCBEQkxfQ0xJQ0tfVElNRSkge1xyXG4gICAgICAgICAgICAgICB0aGlzLm91ckRibENsaWNrKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3VyT25Eb3duKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hUaW1lID0gdGltZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9udG91Y2htb3ZlID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC54LCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnldKTtcclxuICAgICAgICAgdGhpcy5vdXJPbk1vdmUocG9zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbnRvdWNoZW5kID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMub3VyT25VcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIHRoaXMub3VyT25Eb3duKHBvcyk7XHJcblxyXG4gICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdGlvbiBiZWNhdXNlIGRyYWdnaW5nIGlzIHVzZWQgZm9yIHJvdGF0aW5nIHRoZSBjYW1lcmEgYW5kIG1vdmluZyBvYmplY3RzXHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbKDxhbnk+ZXZlbnQpLmxheWVyWCwgKDxhbnk+ZXZlbnQpLmxheWVyWV0pO1xyXG4gICAgICAgICB0aGlzLm91ck9uTW92ZShwb3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2V1cCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm91ck9uVXAoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25kYmxjbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbKDxhbnk+ZXZlbnQpLmxheWVyWCwgKDxhbnk+ZXZlbnQpLmxheWVyWV0pO1xyXG4gICAgICAgICB0aGlzLm91ckRibENsaWNrKHBvcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPbkRvd24ocG9zOiBnbFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMub25DbGljayAmJiB0aGlzLm9uQ2xpY2socG9zLmNsb25lKCkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmxhc3RQb3MgPSBwb3MuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLm9uRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihwb3MuY2xvbmUoKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uVXAoKSB7XHJcblxyXG4gICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub25VcCkge1xyXG4gICAgICAgICB0aGlzLm9uVXAoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uTW92ZShwb3M6IGdsVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5vbk1vdmUpIHtcclxuICAgICAgICAgdGhpcy5vbk1vdmUocG9zLmNsb25lKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdFBvcyA9IHBvcy5jbG9uZSgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ckRibENsaWNrKHBvczogZ2xWZWMyKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5vbkRibENsaWNrKSB7XHJcbiAgICAgICAgIHRoaXMub25EYmxDbGljayhwb3MpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsIi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBsb2dnaW5nIHRpbWluZyBtZXNzYWdlcyBmb3IgcHJvZmlsZSBjb2RlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZmlsZXIge1xyXG4gICAvLyB0aGUgbGFzdCB0aW1lIHN0YW1wXHJcbiAgIHByaXZhdGUgdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgcHVibGljIGdldCBlbGFwc2VkTXMoKSB7XHJcbiAgICAgIHJldHVybiAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnQpO1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgKiBQcmludHMgYSBtZXNzYWdlIHRvIGNvbnNvbGUgb2YgdGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgbGFzdCBtYXJrXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIHByaW50IHdpdGggdGhlIHRpbWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnICsgJyAnICsgdGhpcy5lbGFwc2VkTXMudG9GaXhlZCgxKSArICcgbXMnKTtcclxuICAgICAgdGhpcy5tYXJrKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGRhdGVzIHRoZSB0aW1lc3RhbXAgdG8gbm93XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFyaygpIHtcclxuICAgICAgdGhpcy50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gXCIuL0NvbG9yUmFuZ2VcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yV2l0aEFscGhhIH0gZnJvbSBcIi4vaHRtbENvbG9yV2l0aEFscGhhXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhIHBhc3NlZCB0byB0aGUgU2xpZGVyIGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJTZXR1cCB7XHJcbiAgIGlkOiBzdHJpbmcsXHJcbiAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgIG1pbjogbnVtYmVyLFxyXG4gICBtYXg6IG51bWJlcixcclxuICAgdmFsdWU6IG51bWJlcixcclxuICAgY29sb3JzPzogaHRtbENvbG9yW10sXHJcbiAgIG9uaW5wdXQ/OiAoKSA9PiB2b2lkLFxyXG4gICBnZXRUZXh0PzogKHNsaWRlcjogU2xpZGVyKSA9PiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzbGlkZXIgY29tcG9zZWQgb2YgYSBsYWJlbCwgaW5wdXQgcmFuZ2UsIGNvbG9yIHNwYW4gYW5kIHZhbHVlIHNwYW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXIge1xyXG5cclxuICAgcHJpdmF0ZSBfcmFuZ2U6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX2NvbG9yU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF92YWx1ZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JzOiBDb2xvclJhbmdlO1xyXG4gICBwcml2YXRlIF9nZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZztcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgaHRtbCBvYmplY3QuXHJcbiAgICAqIEBwYXJhbSBzZXR1cCBUaGUgc2V0dXAgZGF0YSBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBzZXR1cDogSVNsaWRlclNldHVwKSB7XHJcblxyXG4gICAgICB0aGlzLl9nZXRUZXh0ID0gc2V0dXAuZ2V0VGV4dDtcclxuXHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmlkID0gc2V0dXAuaWQ7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnU2xpZGVyRGl2JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5pZCA9IHNldHVwLmlkICsgJ0xhYmVsJztcclxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ1NsaWRlckxhYmVsJztcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc2V0dXAubGFiZWw7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnR5cGUgPSAncmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5pZCA9IHNldHVwLmlkICsgJ1JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuY2xhc3NOYW1lID0gJ1NsaWRlclJhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UubWluID0gc2V0dXAubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1heCA9IHNldHVwLm1heC50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZSA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5Db2xvcigpO1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KClcclxuICAgICAgfSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl9yYW5nZSk7XHJcblxyXG4gICAgICBpZiAoc2V0dXAuY29sb3JzKSB7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmlkID0gc2V0dXAuaWQgKyAnQ29sb3JTcGFuJztcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJDb2xvclNwYW4nO1xyXG4gICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fY29sb3JTcGFuKTtcclxuXHJcbiAgICAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBjb2xvci5cclxuICAgICAgICAgdGhpcy5jb2xvcnMgPSBzZXR1cC5jb2xvcnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmlkID0gc2V0dXAuaWQgKyAnVmFsdWVTcGFuJztcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJWYWx1ZVNwYW4nO1xyXG4gICAgICAvLyAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pbm5lclRleHQgPSBzZXR1cC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fdmFsdWVTcGFuKTtcclxuXHJcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBzcGFuIHRleHRcclxuICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpO1xyXG5cclxuICAgICAgdGhpcy5fcmFuZ2Uub25pbnB1dCA9IHNldHVwLm9uaW5wdXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBzcGFuIGNvbG9yIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwZGF0ZVNwYW5Db2xvcigpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ29sb3IodGhpcy5fY29sb3JzLmdldCh2YWwpKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnRvSGV4KClcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICogU2V0cyB0aGUgc3BhbiBjb2xvciB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yLlxyXG4gKi9cclxuICAgcHJpdmF0ZSB1cGRhdGVTcGFuVGV4dCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2dldFRleHQpIHtcclxuICAgICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHRoaXMuX2dldFRleHQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGh0bWwgcmFuZ2Ugb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbCByYW5nZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHJhbmdlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciAoYW5kIGFzc29jaWF0ZWQgY29udGVudClcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgdGhlIGRlc2lyZWQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHZhbHVlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnZhbHVlQXNOdW1iZXIgPSB2YWw7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbiBzbGlkZXIgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWluKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1pbik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF4IHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1heCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBjb2xvciBmb3IgdGhlIHNsaWRlclxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCBjb2xvcnMoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIGNvbG9yc1xyXG4gICAgICB0aGlzLl9jb2xvcnMgPSBuZXcgQ29sb3JSYW5nZShjb2xvcnMpO1xyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGdyYWRpZW50IHN0eWxlIGZvciB0aGUgcmFuZ2Ugb2JqZWN0XHJcbiAgICAgIGxldCBncmFkaWVudFN0ciA9ICc5MGRlZyc7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGdyYWRpZW50U3RyICs9ICcsICcgKyBjb2xvcnNbaV0udG9Dc3MoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9yYW5nZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCgnICsgZ3JhZGllbnRTdHIgKyAnKSc7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIHNwYW4gY29sb3IgdG9vXHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBodG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBodG1sQ29sb3JXaXRoQWxwaGEudHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYSBnbENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBnbENvbG9yKCk6IGdsQ29sb3Ige1xyXG4gICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgIGxldCB2YWwgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ycy5nZXQodmFsKS50b0dsQ29sb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFswLCAwLCAwXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFNwaGVyaWNhbCBjb29yZGluYXRlcyBiYXNlZCBvbiB0aGUgV2ViR0wgdmlld2luZyBzeXN0ZW06IHg9bGVmdC1yaWdodCwgeT11cC1kb3duLCB6PW5lYXItZmFyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3BoZXJpY2FsQ29vcmQge1xyXG4gICAvKipcclxuICAgICogVGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsZXZhdGlvbiBmcm9tIHRoZSBmbG9vciB0byB0aGUgcG9pbnQuIDAgYW5kIDE4MCBhcmUgb24gdGhlXHJcbiAgICAqIGZsb29yLiA5MCBwb2ludHMgdXAuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZWxldmF0aW9uQW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGFuZ2xlLCB3aGVuIGxvb2tpbmcgZG93biBmcm9tIHRoZSB0b3AsIHRvIHRoZSBwb2ludC4gMCBwb2ludHMgcmlnaHQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcm90YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcmFkaXVzXHJcbiAgICAqIEBwYXJhbSBlbGV2YXRpb25BbmdsZSBcclxuICAgICogQHBhcmFtIHJvdGF0aW9uQW5nbGUgXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIGVsZXZhdGlvbkFuZ2xlOiBudW1iZXIsIHJvdGF0aW9uQW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgdGhpcy5lbGV2YXRpb25BbmdsZSA9IGVsZXZhdGlvbkFuZ2xlO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uQW5nbGUgPSByb3RhdGlvbkFuZ2xlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHNwaGVyaWNhbCBjb29yZGluYXRlIGZyb20gYSBjYXJ0ZXNpYW4gcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwb3MgVGhlIGNhcnRlc2lhbiBwb2ludC5cclxuICAgICogQHJldHVybnMgVGhlIHNwaGVyaWNhbCBjb29yZGluYXRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tWFlaKHBvczogbnVtYmVyW10pOiBTcGhlcmljYWxDb29yZCB7XHJcblxyXG4gICAgICBsZXQgeCA9IHBvc1swXTtcclxuICAgICAgbGV0IHkgPSBwb3NbMV07XHJcbiAgICAgIGxldCB6ID0gcG9zWzJdO1xyXG5cclxuICAgICAgbGV0IHJhZGl1cyA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xyXG4gICAgICBsZXQgcm90YXRpb25BbmdsZSA9ICgxODAgLyBNYXRoLlBJKSAqIE1hdGguYXRhbjIoeiwgeCk7XHJcbiAgICAgIGxldCBlbGV2YXRpb25BbmdsZSA9ICgxODAgLyBNYXRoLlBJKSAqIE1hdGguYXNpbih5IC8gcmFkaXVzKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgU3BoZXJpY2FsQ29vcmQocmFkaXVzLCBlbGV2YXRpb25BbmdsZSwgcm90YXRpb25BbmdsZSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIHNwaGVyaWNhbCBjb29yZGluYXRlIHRvIGEgY2FydGVzaWFuIGNvb3JkaW5hdGUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgY2FydGVzaWFuIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9YWVooKTogbnVtYmVyW10ge1xyXG5cclxuICAgICAgbGV0IGZsb29yUmFkaXVzID0gdGhpcy5yYWRpdXMgKiBNYXRoLmNvcygoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLmVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHggPSBmbG9vclJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMucm90YXRpb25BbmdsZSk7XHJcbiAgICAgIGxldCB5ID0gdGhpcy5yYWRpdXMgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLmVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHogPSBmbG9vclJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMucm90YXRpb25BbmdsZSk7XHJcblxyXG4gICAgICByZXR1cm4gW3gsIHksIHpdO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBsYW5lc0FwcCB9IGZyb20gXCIuL1BsYW5lc0FwcFwiO1xyXG5pbXBvcnQgeyB0b1JhZCwgdG9EZWcsIGNsYW1wLCBpc01vYmlsZSB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgZ2xWZWMyIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuXHJcbi8vIFRPRE8gbWFrZSB0aGVzZSB2YXJpYWJsZXNcclxuZXhwb3J0IGxldCB0ZXh0dXJlU2l6ZSA9IDI1NjtcclxuZXhwb3J0IGxldCBkaXNwbGF5U2l6ZSA9IDE1MDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGRDdHJsIHtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBwcml2YXRlIGhpZGRlbkNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHByaXZhdGUgYXBwOiBQbGFuZXNBcHA7XHJcbiAgIHByaXZhdGUgbW91c2VPZmZzZXQgPSBuZXcgZ2xWZWMyKCk7XHJcbiAgIHByaXZhdGUgaGl0ID0gMDtcclxuICAgcHJpdmF0ZSBoYW5kbGVyOiBQb2ludGVyRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgcHJpdmF0ZSBiYWxsQ2VudGVyOiBnbFZlYzI7XHJcbiAgIHByaXZhdGUgcDE6IGdsVmVjMjtcclxuICAgcHJpdmF0ZSBwMjogZ2xWZWMyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGFwcDogUGxhbmVzQXBwKSB7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgZGlzcGxheVNpemUgPSAzMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdUaHJlc2hvbGRDYW52YXMnO1xyXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGRpc3BsYXlTaXplO1xyXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkaXNwbGF5U2l6ZTtcclxuXHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy53aWR0aCA9IHRleHR1cmVTaXplO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5oZWlnaHQgPSB0ZXh0dXJlU2l6ZTtcclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuQ2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMuaGFuZGxlciA9IG5ldyBQb2ludGVyRXZlbnRIYW5kbGVyKHRoaXMuY2FudmFzKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRG93biA9IChwb3MpID0+IHRoaXMub25Eb3duKHBvcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbk1vdmUgPSAocG9zKSA9PiB0aGlzLm9uTW92ZShwb3MpO1xyXG5cclxuICAgfVxyXG4gICBwcml2YXRlIG9uRG93bihwb3M6IGdsVmVjMikge1xyXG5cclxuICAgICAgdGhpcy5oaXRUZXN0KHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgaGl0VGVzdChwb3M6IGdsVmVjMikge1xyXG4gICAgICBsZXQgZDEgPSB0aGlzLnAxLmRpc3RhbmNlKHBvcyk7XHJcbiAgICAgIGxldCBkMiA9IHRoaXMucDIuZGlzdGFuY2UocG9zKTtcclxuXHJcbiAgICAgIGNvbnN0IEhJVF9SQURJVVMgPSAxNTtcclxuICAgICAgaWYgKGQxIDwgSElUX1JBRElVUyAmJiBkMSA8PSBkMikge1xyXG4gICAgICAgICB0aGlzLmhpdCA9IDE7XHJcbiAgICAgICAgIHRoaXMubW91c2VPZmZzZXQgPSBuZXcgZ2xWZWMyKFt0aGlzLnAxLnggLSBwb3MueCwgdGhpcy5wMS55IC0gcG9zLnldKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChkMiA8IEhJVF9SQURJVVMgJiYgZDIgPD0gZDEpIHtcclxuICAgICAgICAgdGhpcy5oaXQgPSAyO1xyXG4gICAgICAgICB0aGlzLm1vdXNlT2Zmc2V0ID0gbmV3IGdsVmVjMihbdGhpcy5wMi54IC0gcG9zLngsIHRoaXMucDIueSAtIHBvcy55XSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gMDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW92ZShwb3M6IGdsVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5oYW5kbGVyLm1vdXNlRG93biAmJiB0aGlzLmhpdCA+IDApIHtcclxuICAgICAgICAgbGV0IGhpdFB0ID0gbmV3IGdsVmVjMihbcG9zLnggLSB0aGlzLm1vdXNlT2Zmc2V0LngsIHBvcy55IC0gdGhpcy5tb3VzZU9mZnNldC55XSk7XHJcbiAgICAgICAgIGhpdFB0LnggPSBNYXRoLm1heChoaXRQdC54LCB0aGlzLmJhbGxDZW50ZXIueCk7XHJcbiAgICAgICAgIGhpdFB0LnkgPSBNYXRoLm1pbihoaXRQdC55LCB0aGlzLmJhbGxDZW50ZXIueSk7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGxDZW50ZXIuZGlzdGFuY2UoaGl0UHQpO1xyXG4gICAgICAgICBsZXQgYW5nbGUgPSB0b0RlZyhNYXRoLmFzaW4oKGhpdFB0LnggLSB0aGlzLmJhbGxDZW50ZXIueCkgLyByYWRpdXMpKTtcclxuICAgICAgICAgaWYgKHRoaXMuaGl0ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAudGhyZXNob2xkMSA9IGNsYW1wKGFuZ2xlLCAwLCA5MCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLnRocmVzaG9sZDIgPSBjbGFtcChhbmdsZSwgMCwgOTApO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICBsZXQgYmFsbEltYWdlRGF0YSA9IHRoaXMuYXBwLnJlbmRlcmVyLmdldEJhbGxJbWFnZSgpO1xyXG5cclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoYmFsbEltYWdlRGF0YS5pbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY3R4LnJlc2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoMCwgZGlzcGxheVNpemUgLyAyKTtcclxuICAgICAgY3R4LnNjYWxlKGRpc3BsYXlTaXplIC8gdGV4dHVyZVNpemUsIC1kaXNwbGF5U2l6ZSAvIHRleHR1cmVTaXplKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmhpZGRlbkNhbnZhcywgMCwgLXRleHR1cmVTaXplIC8gMik7XHJcblxyXG4gICAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgdGhpcy5iYWxsQ2VudGVyID0gbmV3IGdsVmVjMihbXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsQ2VudGVyLngsXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogKDEgLSBiYWxsSW1hZ2VEYXRhLmJhbGxDZW50ZXIueSlcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpbWVncmVlbic7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjaydcclxuXHJcbiAgICAgIGNvbnN0IEtOT0JfTEVOR1RIID0gKDI1IC8gMTUwKSAqIGRpc3BsYXlTaXplO1xyXG4gICAgICBjb25zdCBLTk9CX1JBRElVUyA9ICg4IC8gMTUwKSAqIGRpc3BsYXlTaXplO1xyXG4gICAgICBsZXQgciA9IGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsUmFkaXVzO1xyXG4gICAgICBsZXQgczEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgcik7XHJcbiAgICAgIHRoaXMucDEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgciArIEtOT0JfTEVOR1RIKTtcclxuICAgICAgbGV0IHMyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIpO1xyXG4gICAgICB0aGlzLnAyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIgKyBLTk9CX0xFTkdUSCk7XHJcblxyXG4gICAgICBjdHgubGluZVdpZHRoID0gKDEgLyAxNTApICogZGlzcGxheVNpemU7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbyhzMS54LCBzMS55KTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLnAxLngsIHRoaXMucDEueSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh0aGlzLnAxLngsIHRoaXMucDEueSwgS05PQl9SQURJVVMsIDAsIHRvUmFkKDM2MCkpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oczIueCwgczIueSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5wMi54LCB0aGlzLnAyLnkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmModGhpcy5wMi54LCB0aGlzLnAyLnksIEtOT0JfUkFESVVTLCAwLCB0b1JhZCgzNjApKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldFB0KGNlbnRlcjogZ2xWZWMyLCB0aHJlc2hvbGQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpOiBnbFZlYzIge1xyXG5cclxuICAgICAgbGV0IG95ID0gcmFkaXVzICogTWF0aC5zaW4odG9SYWQoOTAgLSB0aHJlc2hvbGQpKTtcclxuICAgICAgbGV0IG94ID0gcmFkaXVzICogTWF0aC5jb3ModG9SYWQoOTAgLSB0aHJlc2hvbGQpKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMyKFtjZW50ZXIueCArIG94LCBjZW50ZXIueSAtIG95XSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIDNEIGFycm93IHVzaW5nIHRyaWFuZ2xlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlQXJyb3cgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICBjb25zdCBOVU1fU1RFUFMgPSAzMDtcclxuICAgICAgY29uc3QgVElQID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICBjb25zdCBUT1RBTF9MRU5HVEggPSAwLjQ7XHJcbiAgICAgIGNvbnN0IEFSUk9XX1JBRElVUyA9IDAuMTU7XHJcbiAgICAgIGNvbnN0IEFSUk9XX0xFTkdUSCA9IDEuNSAqIEFSUk9XX1JBRElVUztcclxuICAgICAgY29uc3QgU0hBRlRfUkFESVVTID0gMC41ICogQVJST1dfUkFESVVTO1xyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGFycm93IGhlYWRcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKFRJUCk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFswLCBBUlJPV19MRU5HVEgsIDBdKSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IHggPSBBUlJPV19SQURJVVMgKiBNYXRoLnNpbihpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeSA9IEFSUk9XX0xFTkdUSDtcclxuICAgICAgICAgbGV0IHogPSBBUlJPV19SQURJVVMgKiBNYXRoLmNvcyhpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbeCwgeSwgel0pKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaVRpcCA9IDA7XHJcbiAgICAgIGxldCBpQmFzZSA9IDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IGkxID0gMiArIGk7XHJcbiAgICAgICAgIGxldCBpMiA9IChpID09IE5VTV9TVEVQUyAtIDEpID8gMCA6IGkxICsgMTtcclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaVRpcCwgaTIsIGkxLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaUJhc2UsIGkxLCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSBhcnJvdyBzaGFmdFxyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbMCwgVE9UQUxfTEVOR1RILCAwXSkpO1xyXG4gICAgICBsZXQgaUVuZCA9IHRoaXMudmVydGljZXMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgeCA9IFNIQUZUX1JBRElVUyAqIE1hdGguc2luKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB5ID0gQVJST1dfTEVOR1RIO1xyXG4gICAgICAgICBsZXQgeiA9IFNIQUZUX1JBRElVUyAqIE1hdGguY29zKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFt4LCB5LCB6XSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IHggPSBTSEFGVF9SQURJVVMgKiBNYXRoLnNpbihpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeSA9IFRPVEFMX0xFTkdUSDtcclxuICAgICAgICAgbGV0IHogPSBTSEFGVF9SQURJVVMgKiBNYXRoLmNvcyhpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbeCwgeSwgel0pKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaVN0YXJ0ID0gaUVuZCArIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IGkxID0gaVN0YXJ0ICsgaTtcclxuICAgICAgICAgbGV0IGkyID0gKGkgPT0gTlVNX1NURVBTIC0gMSkgPyBpU3RhcnQgOiBpMSArIDE7XHJcbiAgICAgICAgIGxldCBpMyA9IGkxICsgTlVNX1NURVBTO1xyXG4gICAgICAgICBsZXQgaTQgPSBpMiArIE5VTV9TVEVQUztcclxuXHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMiwgaTMsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpNCwgaTMsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTMsIGk0LCBpRW5kLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVm9sdW1lIH0gZnJvbSBcIi4vVm9sdW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVDdWJlIGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZVRyaWFuZ2xlcyhzaXplLCBjZW50ZXIpO1xyXG5cclxuICAgICAgdGhpcy52b2x1bWVzLnB1c2gobmV3IFZvbHVtZSgpKTtcclxuICAgICAgdGhpcy52b2x1bWVzWzBdLmJveE1pbiA9IHRoaXMuYm94TWluLmNsb25lKCk7XHJcbiAgICAgIHRoaXMudm9sdW1lc1swXS5ib3hNYXggPSB0aGlzLmJveE1heC5jbG9uZSgpO1xyXG4gICAgICB0aGlzLnZvbHVtZXNbMF0udHJpYW5nbGVzID0gdGhpcy50cmlhbmdsZXM7XHJcbiAgIH1cclxuXHJcbiAgIGNyZWF0ZUZhY2UoaTE6IG51bWJlciwgaTI6IG51bWJlciwgaTM6IG51bWJlciwgaTQ6IG51bWJlcikge1xyXG5cclxuICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkyLCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkyLCBpNCwgaTMsIHRoaXMubm9ybWFscykpO1xyXG4gICB9XHJcblxyXG4gICBjcmVhdGVUcmlhbmdsZXMoc2l6ZTogbnVtYmVyLCBjZW50ZXI6IGdsVmVjMykge1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54IC0gc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56IC0gc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSAtIHNpemUgLyAyLCBjZW50ZXIueiArIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54IC0gc2l6ZSAvIDIsIGNlbnRlci55ICsgc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCArIHNpemUgLyAyLCBjZW50ZXIueSAtIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55ICsgc2l6ZSAvIDIsIGNlbnRlci56IC0gc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCArIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiArIHNpemUgLyAyXSkpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDAsIDEsIDIsIDMpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoNCwgNiwgNSwgNyk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMCwgNCwgMSwgNSk7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgyLCAzLCA2LCA3KTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgwLCAyLCA0LCA2KTtcclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDEsIDUsIDMsIDcpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFZvbHVtZSB9IGZyb20gXCIuL1ZvbHVtZVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gTm9ybWFsVHlwZSB7XHJcbiAgIFNtb290aCxcclxuICAgRmxhdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpEYXRhIHtcclxuICAgdmVydGljZXM6IEZsb2F0MzJBcnJheTtcclxuICAgbm9ybWFsczogRmxvYXQzMkFycmF5O1xyXG4gICBuSW5kaWNlczogSW50MzJBcnJheTtcclxuICAgdkluZGljZXM6IEludDMyQXJyYXk7XHJcbiAgIGJveE1pbjogZ2xWZWMzO1xyXG4gICBib3hNYXg6IGdsVmVjMztcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gY29tcHV0ZSBub3JtYWxzIGZvciB2ZXJ0aWNlcyB0aGF0IGpvaW4gbXVsdGlwbGUgZmFjZXNcclxuICovXHJcbmNsYXNzIE11bHRpTm9ybVZlcnRleCB7XHJcbiAgIHByaXZhdGUgbm9ybWFsczogZ2xWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBub3JtYWwgYnkgYXZlcmFnaW5nIGFsbCB0aGUgaW5kaXZpZHVhbCBub3JtYWxzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmVydGV4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IG5vcm1hbCgpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgbiA9IG5ldyBnbFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcmVwcmVzZW50aW5nIGFuIG9iamVjdCBmcm9tIGEgYnVuY2ggb2YgdHJpYW5nbGVzLiBUaGUgY2xhc3NcclxuICogZWZmaWNpZW50bHkgbWFuYWdlcyB0aGUgdHJpYW5nbGVzIGJ5IHN0b3JpbmcgdGhlbSBpbiB2b2x1bWVzIGFuZCBieVxyXG4gKiBwYXNzaW5nIHRoZW0gdG8gV2ViR0wgdXNpbmcgVW5pZm9ybSBCdWZmZXJzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmoge1xyXG4gICBwdWJsaWMgdmVydGljZXM6IGdsVmVjM1tdID0gW107XHJcbiAgIHB1YmxpYyBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICBwdWJsaWMgdHJpYW5nbGVzOiBJbmRleGVkVHJpYW5nbGVbXSA9IFtdO1xyXG4gICBwdWJsaWMgYm94TWluID0gbmV3IGdsVmVjMyhbTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgYm94TWF4ID0gbmV3IGdsVmVjMyhbLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgdm9sdW1lczogVm9sdW1lW10gPSBbXTtcclxuXHJcbiAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3hNYXgueSAtIHRoaXMuYm94TWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnogLSB0aGlzLmJveE1pbi56O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi54ICsgdGhpcy5ib3hNYXgueCkgLyAyLFxyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueSArIHRoaXMuYm94TWF4LnkpIC8gMixcclxuICAgICAgICAgKHRoaXMuYm94TWluLnogKyB0aGlzLmJveE1heC56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgcHVzaCh0cmk6IEluZGV4ZWRUcmlhbmdsZSkge1xyXG4gICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKHRyaSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnggPSBNYXRoLm1pbih0aGlzLmJveE1pbi54LCB0cmkubWluWCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0cmkubWluWSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSBNYXRoLm1pbih0aGlzLmJveE1pbi56LCB0cmkubWluWik7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0cmkubWF4WCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB0cmkubWF4WSk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSBNYXRoLm1heCh0aGlzLmJveE1heC56LCB0cmkubWF4Wik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTY2FsZXMgdGhlIG9iamVjdCB0byB0aGUgc3BlY2lmaWVkIHNpemUgYW5kIGNlbnRlcnMgaXQgYWJvdXQgKDAsMCwwKVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNpemUgVGhlIG1heCBzaXplIGZvciB0aGUgd2lkdGgsIGhlaWdodCwgYW5kIGRlcHRoXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXV0b0NlbnRlcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCB0cmFucyA9IG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnggKyB0aGlzLmJveE1pbi54KSAvIDIsXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueSArIHRoaXMuYm94TWluLnkpIC8gMixcclxuICAgICAgICAgLSh0aGlzLmJveE1heC56ICsgdGhpcy5ib3hNaW4ueikgLyAyLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCBzY2FsZSA9IHNpemUgLyBNYXRoLm1heCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5kZXB0aCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG5cclxuICAgICAgICAgdi54ID0gKHYueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYueSA9ICh2LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LnogPSAodi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib3hNaW4ueCA9ICh0aGlzLmJveE1pbi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9ICh0aGlzLmJveE1pbi55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9ICh0aGlzLmJveE1pbi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9ICh0aGlzLmJveE1heC54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9ICh0aGlzLmJveE1heC55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9ICh0aGlzLmJveE1heC56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52b2x1bWVzW2ldO1xyXG4gICAgICAgICB2LmJveE1pbi54ID0gKHYuYm94TWluLnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1pbi55ID0gKHYuYm94TWluLnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1pbi56ID0gKHYuYm94TWluLnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC54ID0gKHYuYm94TWF4LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC55ID0gKHYuYm94TWF4LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC56ID0gKHYuYm94TWF4LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLmxvZygnYXV0b0FkanVzdCgpJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTaGlmdCB0aGUgb2JqZWN0IGluIHNwYWNlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG9mZnNldCBUaGUgYW1vdW50IHRvIHNoaWZ0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG5cclxuICAgICAgICAgdi54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICB2LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgIHYueiArPSBvZmZzZXQuejtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib3hNaW4ueCArPSBvZmZzZXQueDtcclxuICAgICAgdGhpcy5ib3hNaW4ueSArPSBvZmZzZXQueTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiArPSBvZmZzZXQuejtcclxuICAgICAgdGhpcy5ib3hNYXgueCArPSBvZmZzZXQueDtcclxuICAgICAgdGhpcy5ib3hNYXgueSArPSBvZmZzZXQueTtcclxuICAgICAgdGhpcy5ib3hNYXgueiArPSBvZmZzZXQuejtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2b2wgPSB0aGlzLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdm9sLmJveE1pbi55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2b2wuYm94TWluLnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdm9sLmJveE1heC55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEJyZWFrcyB0aGUgb2JqZWN0IGludG8gZXZlbmx5IHNwYWNlZCB2b2x1bWVzLiBUaGUgbnVtYmVyIG9mIHZvbHVtZXMgaXMgYXV0b21hdGljYWxseVxyXG4gICAgKiBkZXRlcm1pbmVkIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGJyZWFrSW50b1ZvbHVtZXMoKSB7XHJcbiAgICAgIGxldCBudW1TdGVwcztcclxuICAgICAgaWYgKHRoaXMudHJpYW5nbGVzLmxlbmd0aCA8IDQwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyaWFuZ2xlcy5sZW5ndGggPCAxNTAwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAzO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudm9sdW1lcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KG51bVN0ZXBzLCAzKTsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudm9sdW1lcy5wdXNoKG5ldyBWb2x1bWUoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHQgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWCAtIHRoaXMuYm94TWluLngpIC8gKHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54KSk7XHJcbiAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblkgLSB0aGlzLmJveE1pbi55KSAvICh0aGlzLmJveE1heC55IC0gdGhpcy5ib3hNaW4ueSkpO1xyXG4gICAgICAgICBsZXQgeiA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5aIC0gdGhpcy5ib3hNaW4ueikgLyAodGhpcy5ib3hNYXgueiAtIHRoaXMuYm94TWluLnopKTtcclxuICAgICAgICAgeCA9IGNsYW1wKHgsIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHkgPSBjbGFtcCh5LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB6ID0gY2xhbXAoeiwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgbGV0IGluZGV4ID0geCArIHkgKiBudW1TdGVwcyArIHogKiBudW1TdGVwcyAqIG51bVN0ZXBzO1xyXG4gICAgICAgICB0aGlzLnZvbHVtZXNbaW5kZXhdLnB1c2godCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWxzKHR5cGU6IE5vcm1hbFR5cGUpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICAgICBsZXQgbXVsdGlOb3JtVmVydGljZXM6IE11bHRpTm9ybVZlcnRleFtdID0gW107XHJcbiAgICAgIGlmICh0eXBlID09PSBOb3JtYWxUeXBlLlNtb290aCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXMucHVzaChuZXcgTXVsdGlOb3JtVmVydGV4KCkpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgbm9ybWFscyB3aXRoIGVhY2ggdmVydGV4IC0gd2UnbGwgbGF0ZXIgYXZlcmFnZSB0aGVzZVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgbGV0IG4gPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYwXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYxXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYyXS5wdXNoKG4pO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbm9ybWFscyBhcnJheVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11bHRpTm9ybVZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChtdWx0aU5vcm1WZXJ0aWNlc1tpXS5ub3JtYWwpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyB1cGRhdGUgdGhlIHRyaWFuZ2xlc1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgdHJpLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICAgICB0cmkuaU4wID0gdHJpLmlWMDtcclxuICAgICAgICAgICAgdHJpLmlOMSA9IHRyaS5pVjE7XHJcbiAgICAgICAgICAgIHRyaS5pTjIgPSB0cmkuaVYyO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2godHJpLmNvbXB1dGVOb3JtYWwoKSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG5vcm1hbHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRyaS5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgICAgdHJpLmlOMCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0cmkuaU4xID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRyaS5pTjIgPSBpbmRleDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcblxyXG4gICAgICBwLmxvZygnY29tcHV0ZU5vcm1hbHMnKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgaW4gdGhlIGZvciAuT0JKIGZpbGUgZm9ybWF0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9PYmpTdHJpbmcoZGlnaXRzID0gOCkge1xyXG5cclxuICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICBzdHIgKz0gJyMgVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJyMgTm9ybWFsczogJyArIHRoaXMubm9ybWFscy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICcjIFRyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJ1xcbic7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICBzdHIgKz0gJ3YgJyArIHYueC50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdi55LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2LnoudG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBuID0gdGhpcy5ub3JtYWxzW2ldO1xyXG4gICAgICAgICBzdHIgKz0gJ3ZuICcgKyBuLngudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG4ueS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgbi56LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIHN0ciArPSAnZiAnICtcclxuICAgICAgICAgICAgKHQuaVYwICsgMSkgKyAnLy8nICsgKHQuaU4wICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pVjEgKyAxKSArICcvLycgKyAodC5pTjEgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmlWMiArIDEpICsgJy8vJyArICh0LmlOMiArIDEpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcHRpbWl6ZShub3JtYWxUeXBlOiBOb3JtYWxUeXBlKSB7XHJcblxyXG4gICAgICBsZXQgbXNnID0gJ09wdGltaXplZCAuT0JKIGNvbnRlbnQgY29waWVkIHRvIGNsaXBib2FyZFxcblxcbic7XHJcbiAgICAgIG1zZyArPSAnTnVtIFRyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCArICdcXG4nO1xyXG5cclxuICAgICAgbGV0IHZlcnRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICBsZXQgaW5kZXhUb0luZGV4TWFwID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgIC8vIGZpcnN0IGdlbmVyYXRlIGEgdW5pcXVlIHNldCBvZiB2ZXJ0aWNlc1xyXG4gICAgICBsZXQgdW5pcXVlVmVydGljZXM6IGdsVmVjM1tdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgbGV0IG9sZFZlcnRleCA9IHRoaXMudmVydGljZXNbaV07XHJcbiAgICAgICAgIGxldCBrZXkgPSB0aGlzLnZlcnRpY2VzW2ldLnRvU3RyaW5nKDQsICcgJyk7XHJcbiAgICAgICAgIGxldCBvbGRJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICBsZXQgbmV3SW5kZXg7XHJcbiAgICAgICAgIGlmICh2ZXJ0ZXhUb0luZGV4TWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIC8vIGp1c3QgbWFwIHRoZSBvbGQgaW5kZXggdG8gdGhlIGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gdmVydGV4VG9JbmRleE1hcC5nZXQoa2V5KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGVudHJ5XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gdW5pcXVlVmVydGljZXMubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgdmVydGV4VG9JbmRleE1hcC5zZXQoa2V5LCBuZXdJbmRleCk7XHJcbiAgICAgICAgICAgIHVuaXF1ZVZlcnRpY2VzLnB1c2gob2xkVmVydGV4KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgdHJhbnNsYXRpb25cclxuICAgICAgICAgaW5kZXhUb0luZGV4TWFwLnNldChvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgb2xkU2l6ZSA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xyXG4gICAgICBsZXQgbmV3U2l6ZSA9IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aDtcclxuICAgICAgbXNnICs9ICdOdW0gVmVydGljZXM6ICcgKyBvbGRTaXplICsgJyB0byAnICsgbmV3U2l6ZSArICcsICcgKyAoMTAwICogbmV3U2l6ZSAvIG9sZFNpemUpLnRvRml4ZWQoKSArICcgJVxcbic7XHJcblxyXG4gICAgICAvLyByZXNldCBhbGwgdGhlIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMudmVydGljZXMgPSB1bmlxdWVWZXJ0aWNlcztcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIHRyaS52ZXJ0aWNlcyA9IHVuaXF1ZVZlcnRpY2VzO1xyXG4gICAgICAgICB0cmkuaVYwID0gaW5kZXhUb0luZGV4TWFwLmdldCh0cmkuaVYwICsgMSkgLSAxO1xyXG4gICAgICAgICB0cmkuaVYxID0gaW5kZXhUb0luZGV4TWFwLmdldCh0cmkuaVYxICsgMSkgLSAxO1xyXG4gICAgICAgICB0cmkuaVYyID0gaW5kZXhUb0luZGV4TWFwLmdldCh0cmkuaVYyICsgMSkgLSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvbGRTaXplID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhub3JtYWxUeXBlKTtcclxuICAgICAgbmV3U2l6ZSA9IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG1zZyArPSAnTnVtIE5vcm1hbHM6ICcgKyBvbGRTaXplICsgJyB0byAnICsgbmV3U2l6ZSArICcsICcgKyAoMTAwICogbmV3U2l6ZSAvIG9sZFNpemUpLnRvRml4ZWQoKSArICcgJSc7XHJcblxyXG4gICAgICBsZXQgc3RyID0gdGhpcy50b09ialN0cmluZyg2KTtcclxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc3RyKS50aGVuKCgpID0+IHsgYWxlcnQobXNnKSB9KTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwdXNoVmVjKGFycmF5OiBudW1iZXJbXSwgdmVjOiBnbFZlYzMpIHtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueCk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnkpO1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGV4cG9ydCgpOiBUcmlhbmdsZU9iakRhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhO1xyXG5cclxuICAgICAgLy8gY29udmVydCB0aGUgdHJpYW5nbGVzIGludG8gYXJyYXlzIHRoYXQgY2FuIGJlIHVwbG9hZGVkXHJcbiAgICAgIGxldCB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyh2ZXJ0aWNlcywgdGhpcy52ZXJ0aWNlc1tpXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBub3JtYWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9ybWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWMobm9ybWFscywgdGhpcy5ub3JtYWxzW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHZJbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBsZXQgbkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG5cclxuICAgICAgICAgdkluZGljZXMucHVzaCh0cmkuaVYwKTtcclxuICAgICAgICAgdkluZGljZXMucHVzaCh0cmkuaVYxKTtcclxuICAgICAgICAgdkluZGljZXMucHVzaCh0cmkuaVYyKTtcclxuXHJcbiAgICAgICAgIG5JbmRpY2VzLnB1c2godHJpLmlOMCk7XHJcbiAgICAgICAgIG5JbmRpY2VzLnB1c2godHJpLmlOMSk7XHJcbiAgICAgICAgIG5JbmRpY2VzLnB1c2godHJpLmlOMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKTtcclxuICAgICAgZGF0YS5ub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShub3JtYWxzKTtcclxuICAgICAgZGF0YS52SW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KHZJbmRpY2VzKTtcclxuICAgICAgZGF0YS5uSW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KG5JbmRpY2VzKTtcclxuICAgICAgZGF0YS5ib3hNaW4gPSB0aGlzLmJveE1pbi5jbG9uZSgpO1xyXG4gICAgICBkYXRhLmJveE1heCA9IHRoaXMuYm94TWF4LmNsb25lKCk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuXHJcbiAgIHByaXZhdGUgc3RhdGljIGRhdGEydmVydGV4KGRhdGE6IFRyaWFuZ2xlT2JqRGF0YSwgaW5kZXg6IG51bWJlcik6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgZGF0YS52ZXJ0aWNlc1szICogaW5kZXggKyAwXSxcclxuICAgICAgICAgZGF0YS52ZXJ0aWNlc1szICogaW5kZXggKyAxXSxcclxuICAgICAgICAgZGF0YS52ZXJ0aWNlc1szICogaW5kZXggKyAyXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBkYXRhMm5vcm1hbChkYXRhOiBUcmlhbmdsZU9iakRhdGEsIGluZGV4OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIGRhdGEubm9ybWFsc1szICogaW5kZXggKyAwXSxcclxuICAgICAgICAgZGF0YS5ub3JtYWxzWzMgKiBpbmRleCArIDFdLFxyXG4gICAgICAgICBkYXRhLm5vcm1hbHNbMyAqIGluZGV4ICsgMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgaW1wb3J0KGRhdGE6IFRyaWFuZ2xlT2JqRGF0YSk6IFRyaWFuZ2xlT2JqIHtcclxuICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmooKTtcclxuXHJcbiAgICAgIC8vIHJlc3RvcmUgdmVydGljZXNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnZlcnRpY2VzLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICB0T2JqLnZlcnRpY2VzLnB1c2godGhpcy5kYXRhMnZlcnRleChkYXRhLCBpKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlc3RvcmUgbm9ybWFsc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubm9ybWFscy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgdE9iai5ub3JtYWxzLnB1c2godGhpcy5kYXRhMm5vcm1hbChkYXRhLCBpKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlc3RvcmUgdHJpYW5nbGVzXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS52SW5kaWNlcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgbGV0IGlWMCA9IGRhdGEudkluZGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgbGV0IGlWMSA9IGRhdGEudkluZGljZXNbMyAqIGkgKyAxXTtcclxuICAgICAgICAgbGV0IGlWMiA9IGRhdGEudkluZGljZXNbMyAqIGkgKyAyXTtcclxuICAgICAgICAgbGV0IGlOMCA9IGRhdGEubkluZGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgbGV0IGlOMSA9IGRhdGEubkluZGljZXNbMyAqIGkgKyAxXTtcclxuICAgICAgICAgbGV0IGlOMiA9IGRhdGEubkluZGljZXNbMyAqIGkgKyAyXTtcclxuICAgICAgICAgbGV0IHQgPSBuZXcgSW5kZXhlZFRyaWFuZ2xlKHRPYmoudmVydGljZXMsIGlWMCwgaVYxLCBpVjIsIHRPYmoubm9ybWFscywgaU4wLCBpTjEsIGlOMik7XHJcbiAgICAgICAgIHRPYmoudHJpYW5nbGVzLnB1c2godCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRPYmouYm94TWluID0gbmV3IGdsVmVjMyhkYXRhLmJveE1pbi52YWx1ZXMpO1xyXG4gICAgICB0T2JqLmJveE1heCA9IG5ldyBnbFZlYzMoZGF0YS5ib3hNYXgudmFsdWVzKTtcclxuXHJcbiAgICAgIHJldHVybiB0T2JqO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU3RhdHVzRnVuY3Rpb24gPSAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBsb2FkcyBhIC5vYmogZmlsZSBhbmQgY3JlYXRlcyB0cmlhbmdsZXMgZm9yIGl0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpGaWxlIGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVTdGF0dXM6IFN0YXR1c0Z1bmN0aW9uO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHNyYzogc3RyaW5nLCBzdGF0dXNGdW5jdGlvbj86IFN0YXR1c0Z1bmN0aW9uKSB7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgLy8gcmVjb3JkIHRoZSBzdGF0dXMgZnVuY3Rpb24uIElmIG9uZSBpcyBub3Qgc3VwcGxpZWQsIGNyZWF0ZSBvbmUgdGhhdCBkb2VzIG5vdGhpbmdcclxuICAgICAgaWYgKHN0YXR1c0Z1bmN0aW9uKSB7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzID0gc3RhdHVzRnVuY3Rpb247XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzID0gKHN0YXR1cykgPT4geyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnBhcnNlKHNyYyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2VGYWNlKGxpbmU6IHN0cmluZyk6IHsgaVY6IG51bWJlcltdLCBpTjogbnVtYmVyW10gfSB7XHJcbiAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgIGlWOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgICAgaU46IFtdIGFzIG51bWJlcltdLFxyXG4gICAgICB9XHJcbiAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICBsZXQgbnVtVmFscyA9IHRva2Vucy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZhbHM7IGkrKykge1xyXG4gICAgICAgICBsZXQgdmFscyA9IHRva2Vuc1tpICsgMV0uc3BsaXQoJy8nKTtcclxuICAgICAgICAgcmV0LmlWLnB1c2gocGFyc2VJbnQodmFsc1swXSkgLSAxKTtcclxuICAgICAgICAgcmV0LmlOLnB1c2godmFscy5sZW5ndGggPT09IDMgPyBwYXJzZUludCh2YWxzWzJdKSAtIDEgOiAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZShzcmM6IHN0cmluZykge1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVTdGF0dXMoJ1Byb2Nlc3NpbmcnKTtcclxuICAgICAgbGV0IHQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IGxpbmVzID0gc3JjLnNwbGl0KCdcXG4nKTtcclxuICAgICAgcC5sb2coJ3NwbGl0Jyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIC8vIHJlcG9ydCBwcm9ncmVzcyBldmVyeSA1MCBtc1xyXG4gICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHQgPiA1MCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogJyArICgxMDAgKiBpIC8gbGluZXMubGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICAgICAgICAgICB0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCd2ICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjMyhbcGFyc2VGbG9hdCh0b2tlbnNbMV0pLCBwYXJzZUZsb2F0KHRva2Vuc1syXSksIHBhcnNlRmxvYXQodG9rZW5zWzNdKV0pXHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZWMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgndm4gJykpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWMzKFtwYXJzZUZsb2F0KHRva2Vuc1sxXSksIHBhcnNlRmxvYXQodG9rZW5zWzJdKSwgcGFyc2VGbG9hdCh0b2tlbnNbM10pXSlcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2godmVjKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2YgJykpIHtcclxuICAgICAgICAgICAgbGV0IHJldCA9IHRoaXMucGFyc2VGYWNlKGxpbmUpO1xyXG4gICAgICAgICAgICBpZiAocmV0LmlOLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCByZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdLCB0aGlzLm5vcm1hbHMsIHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgcmV0LmlWWzBdLCByZXQuaVZbMl0sIHJldC5pVlszXSwgdGhpcy5ub3JtYWxzLCByZXQuaU5bMF0sIHJldC5pTlsyXSwgcmV0LmlOWzNdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0sIHRoaXMubm9ybWFscywgcmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5ub3JtYWxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogMTAwJScpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1ZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnTm9ybWFsczogJyArIHRoaXMubm9ybWFscy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVHJpYW5nbGVzOiAnICsgdGhpcy50cmlhbmdsZXMubGVuZ3RoKTtcclxuICAgICAgcC5sb2coJ3BhcnNlJyk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNwaGVyZSB1c2luZyB0cmlhbmdsZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZVNwaGVyZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIHRoZSBzcGhlcmVcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBudW1TdGVwcyBUaGUgbnVtYmVyIG9mIGJhbmRzIHVzZWQgdG8gY292ZXIgdGhlIHNwaGVyZVxyXG4gICAgKiBAcGFyYW0gcmFkaXVzIFRoZSByYWRpdXMgb2YgdGhlIHNwaGVyZVxyXG4gICAgKiBAcGFyYW0gY2VudGVyIFRoZSBjZW50ZXIgb2YgdGhlIHNwaGVyZVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKG51bVN0ZXBzOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjZW50ZXI6IGdsVmVjMykge1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdmVydGljZXNcclxuICAgICAgdGhpcy5jcmVhdGVWZXJ0aWNlcyhudW1TdGVwcywgcmFkaXVzLCBjZW50ZXIpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRyaWFuZ2xlcyBmcm9tIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLmNvbm5lY3RWZXJ0aWNlcyhudW1TdGVwcyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlVmVydGljZXMobnVtU3RlcHM6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHM7IGkrKykge1xyXG4gICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLngsIGNlbnRlci55ICsgcmFkaXVzLCBjZW50ZXIuel0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChpID09PSBudW1TdGVwcyAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSAtIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5jb3MoaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCByID0gcmFkaXVzICogTWF0aC5zaW4oaSAvIChudW1TdGVwcyAtIDEpICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBpICUgMiA/IDAgOiAoKDIgKiBNYXRoLlBJKSAvIG51bVN0ZXBzKSAqIDAuNTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueCArIHIgKiBNYXRoLnNpbigoaiAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJIC0gb2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgICAgY2VudGVyLnkgKyB5LFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueiArIHIgKiBNYXRoLmNvcygoaiAvIG51bVN0ZXBzKSAqIDIgKiBNYXRoLlBJIC0gb2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbm5lY3RWZXJ0aWNlcyhudW1TdGVwczogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBmaXJzdCA9IDA7XHJcbiAgICAgIGxldCBsYXN0ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0ZXBzIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3RlcHM7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBmaXJzdDtcclxuICAgICAgICAgICAgICAgbGV0IGkyID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IGogPT09IChudW1TdGVwcyAtIDEpID8gMSA6IGkyICsgMTtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkyLCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gbnVtU3RlcHMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBzdGFydEluZGV4ID0gbGFzdCAtIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBsYXN0O1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSBzdGFydEluZGV4ICsgajtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gaiA9PT0gKG51bVN0ZXBzIC0gMSkgPyBzdGFydEluZGV4IDogaTIgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTMsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0QSA9IDEgKyAoaSAtIDEpICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBzdGFydEIgPSAxICsgaSAqIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBsZXQgaTEgPSBzdGFydEEgKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSAoaiA9PT0gKG51bVN0ZXBzIC0gMSkpID8gc3RhcnRBIDogaTEgKyAxO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBzdGFydEIgKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTQgPSAoaiA9PT0gKG51bVN0ZXBzIC0gMSkpID8gc3RhcnRCIDogaTMgKyAxO1xyXG4gICAgICAgICAgICAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGk0LCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMywgaTQsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTMsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTIsIGkzLCBpNCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlck1vZGUgfSBmcm9tIFwiLi9QYXRoVHJhY2VyUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgU3BoZXJpY2FsQ29vcmQgfSBmcm9tIFwiLi9TcGhlcmljYWxDb29yZFwiO1xyXG5cclxuLyoqXHJcbiAqIFR5cGVzIGZvciB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVuaWZvcm1zIHtcclxuICAgdVNjYWxlOiBudW1iZXI7XHJcbiAgIHVYT2Zmc2V0OiBudW1iZXI7XHJcbiAgIHVZT2Zmc2V0OiBudW1iZXI7XHJcbiAgIHVNb2RlOiBSZW5kZXJNb2RlO1xyXG4gICB1TWF4Q2hyb21hOiBudW1iZXI7XHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVNaWRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya0xpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcblxyXG4gICB1U2hhZG93Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVSZWZsZWN0ZWRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya0FjY2VudENvbG9yOiBnbENvbG9yO1xyXG5cclxuICAgdUxpZ2h0QWxwaGE6IG51bWJlcjtcclxuICAgdVNoYWRvd0FscGhhOiBudW1iZXI7XHJcblxyXG4gICB1TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdUxpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIHVMaWdodFBvczogZ2xWZWMzLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiBudW1iZXIsXHJcbiAgIHVPYmpDb2xvcjogZ2xDb2xvcixcclxuICAgdUJhbGxSYWRpdXM6IG51bWJlcixcclxuICAgdUV5ZTogZ2xWZWMzLFxyXG4gICB1VGV4dHVyZVNpemU6IG51bWJlcixcclxuICAgdVJhbmRvbTogbnVtYmVyLFxyXG4gICB1UmF5MDA6IGdsVmVjMyxcclxuICAgdVJheTAxOiBnbFZlYzMsXHJcbiAgIHVSYXkxMDogZ2xWZWMzLFxyXG4gICB1UmF5MTE6IGdsVmVjMyxcclxuICAgdVNhbXBsZTogbnVtYmVyLFxyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgbGV0IFVuaWZvcm1zOiBJVW5pZm9ybXMgPSB7XHJcbiAgIHVTY2FsZTogMS4wLFxyXG4gICB1WE9mZnNldDogMC4wLFxyXG4gICB1WU9mZnNldDogMC4wLFxyXG4gICB1TW9kZTogMCxcclxuICAgdU1heENocm9tYTogMS4wLFxyXG5cclxuICAgdUhpZ2hsaWdodENvbG9yOiB1bmRlZmluZWQsXHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdU1pZExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdURhcmtMaWdodENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1U2hhZG93Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdVJlZmxlY3RlZExpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdURhcmtBY2NlbnRDb2xvcjogdW5kZWZpbmVkLFxyXG5cclxuICAgdUxpZ2h0QWxwaGE6IDEwMDEsXHJcbiAgIHVTaGFkb3dBbHBoYTogMTAwMCxcclxuXHJcbiAgIHVMaWdodEludGVuc2l0eTogMC43LFxyXG4gICB1TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgZ2xWZWMzKG5ldyBTcGhlcmljYWxDb29yZCgyLCA2MCwgMTEwKS50b1hZWigpKSxcclxuICAgdUFtYmllbnRMaWdodEludGVuc2l0eTogMC4zLFxyXG4gICB1T2JqQ29sb3I6IG5ldyBnbENvbG9yKFswLjUsIDAuNSwgMC44XSksXHJcbiAgIHVCYWxsUmFkaXVzOiAwLjUsXHJcbiAgIHVFeWU6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVSYW5kb206IE1hdGgucmFuZG9tKCksXHJcbiAgIHVSYXkwMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MDE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1U2FtcGxlOiAwLjAsXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG5jb25zdCBNQVggPSAxMDAwOyAvLyBJTkZJTklUWSBpbiBvdXIgcmVuZGVyaW5nIHdvcmxkXHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBtYW5hZ2VzIGEgc2V0IG9mIHRyaWFuZ2xlcyB3aXRoaW4gYSBnaXZlbiBzcGFjZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZvbHVtZSB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgdHJpYW5nbGVzIGVuY2xvc2VkIHdpdGhpbiB0aGUgYm91bmRpbmcgYm94XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJpYW5nbGVzOiBJbmRleGVkVHJpYW5nbGVbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEJvdW5kaW5nIGJveCBtaW5pbXVtXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYm94TWluID0gbmV3IGdsVmVjMyhbTUFYLCBNQVgsIE1BWF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEJvdW5kaW5nIGJveCBtYXhpbXVtXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYm94TWF4ID0gbmV3IGdsVmVjMyhbLU1BWCwgLU1BWCwgLU1BWF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFN0b3JlcyBhIHRyaWFuZ2xlIGFuZCB1cGRhdGVzIHRoZSBib3VuZGluZyBib3hcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB0cmlhbmdsZSBUaGUgdHJpYW5nbGUgdG8gc3RvcmVcclxuICAgICovXHJcbiAgIHB1YmxpYyBwdXNoKHRyaWFuZ2xlOiBJbmRleGVkVHJpYW5nbGUpIHtcclxuXHJcbiAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2godHJpYW5nbGUpO1xyXG4gICAgICB0aGlzLmJveE1pbi54ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueCwgdHJpYW5nbGUubWluWCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0cmlhbmdsZS5taW5ZKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9IE1hdGgubWluKHRoaXMuYm94TWluLnosIHRyaWFuZ2xlLm1pblopO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueCwgdHJpYW5nbGUubWF4WCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB0cmlhbmdsZS5tYXhZKTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRyaWFuZ2xlLm1heFopO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgYSBXZWJHbCBCdWZmZXIgYW5kIEF0dHJpYnV0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQnVmZmVyIHtcclxuICAgcHJpdmF0ZSBidWZmZXI6IFdlYkdMQnVmZmVyO1xyXG4gICBwcml2YXRlIGF0dHJpYnV0ZUxvY2F0aW9uOiBudW1iZXI7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHJpYnV0ZU5hbWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICBnbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXIpO1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZCh2ZXJ0aWNlczogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5iaW5kKCk7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYmluZCgpIHtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVMb2NhdGlvbik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24sXHJcbiAgICAgICAgIDMsICAgICAgICAgICAgICAgIC8vIHNpemVcclxuICAgICAgICAgZ2wuRkxPQVQsICAgICAgICAgLy8gdHlwZVxyXG4gICAgICAgICBmYWxzZSwgICAgICAgICAgICAvLyBub3JtYWxpemVkXHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgIC8vIHN0cmlkZVxyXG4gICAgICAgICAwICAgICAgICAgICAgICAgICAvLyBvZmZzZXRcclxuICAgICAgKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBnbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGNsYW1wKGNvbG9yLnIsIDAsIDEpO1xyXG4gICAgICBsZXQgZyA9IGNsYW1wKGNvbG9yLmcsIDAsIDEpO1xyXG4gICAgICBsZXQgYiA9IGNsYW1wKGNvbG9yLmIsIDAsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxpZ2h0ZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBsaWdodGVzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbGlnaHRlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPiBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGRhcmtlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGRhcmtlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGRhcmtlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPCBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGFuIGh0bWwgY29sb3Igb2JqZWN0ICgwLTI1NSBiYXNlZCkuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSHRtbENvbG9yKCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLnIpO1xyXG4gICAgICBsZXQgZyA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5nKTtcclxuICAgICAgbGV0IGIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBhZGRzIHRlbXBlcmF0dXJlIHRvIGEgQ29sb3Igb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSBleHRlbmRzIGdsQ29sb3Ige1xyXG4gICAvKipcclxuICAgICogVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIF90ZW1wZXJhdHVyZTogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB0ZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqIEBwYXJhbSB0ZW1wZXJhdHVyZSBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdLCB0ZW1wZXJhdHVyZTogbnVtYmVyKSB7XHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEtub3duIGNvbG9yIHZhbHVlcy4gRm9yIG90aGVyIHJlcXVlc3RzIHRoZSBjbGFzcyB3aWxsIHJldHVybiBpbnRlcnBvbGF0ZWQgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb2xvcnM6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmVbXSA9IFtcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTQ3IC8gMjU1LCA0MSAvIDI1NV0sIDE5MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxOTcgLyAyNTUsIDE0MyAvIDI1NV0sIDI2MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyMTQgLyAyNTUsIDE3MCAvIDI1NV0sIDI4NTApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNDEgLyAyNTUsIDIyNCAvIDI1NV0sIDMyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTAgLyAyNTUsIDI0NCAvIDI1NV0sIDUyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1MSAvIDI1NV0sIDU0MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1NSAvIDI1NV0sIDYwMDApLCAvLyBkYXlsaWdodFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjAxIC8gMjU1LCAyMjYgLyAyNTUsIDI1NSAvIDI1NV0sIDcwMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbNjQgLyAyNTUsIDE1NiAvIDI1NSwgMjU1IC8gMjU1XSwgMjAwMDApLFxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgZGF5bGlnaHQoKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSg2MDAwKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbmltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWluVGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWF4aW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtYXhUZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgQ29sb3IgbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHRlbXBlcmF0dXJlOiBudW1iZXIpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuXHJcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA8PSB0aGlzLm1pblRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0ZW1wZXJhdHVyZSA+PSB0aGlzLm1heFRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMSA9IHRoaXMuY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY29sb3IyID0gdGhpcy5jb2xvcnNbaSArIDFdO1xyXG4gICAgICAgICAgICBpZiAodGVtcGVyYXR1cmUgPj0gY29sb3IxLnRlbXBlcmF0dXJlICYmIHRlbXBlcmF0dXJlIDw9IGNvbG9yMi50ZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAodGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpIC8gKGNvbG9yMi50ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yMS5yICsgcmF0aW8gKiAoY29sb3IyLnIgLSBjb2xvcjEucik7XHJcbiAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IxLmcgKyByYXRpbyAqIChjb2xvcjIuZyAtIGNvbG9yMS5nKTtcclxuICAgICAgICAgICAgICAgbGV0IGIgPSBjb2xvcjEuYiArIHJhdGlvICogKGNvbG9yMi5iIC0gY29sb3IxLmIpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoW3IsIGcsIGJdLCB0ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc2hvdWxkbid0IGdldCBoZXJlLCBidXQgaWYgd2UgZG8sIHJldHVybiB0aGUgbGFzdCBjb2xvclxyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSB3cmFwcGVyIGZvciBjb21waWxpbmcgV2ViR0wgc2hhZGVyIHByb2dyYW1zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb21waWxlciB7XHJcblxyXG4gICAvKipcclxuICAgICogdXNlIHN0YXRpYyBmdW5jdGlvbnMgb25seVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXBpbGVzIGEgc2hhZGVyIHByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB0eXBlIFRoZSBzaGFkZXIgdHlwZVxyXG4gICAgKiBAdGhyb3dzIGlmIHRoZSBjb21waWxhdGlvbiBmYWlsc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY29tcGlsZVNoYWRlcihzb3VyY2U6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coc291cmNlKTtcclxuICAgICAgICAgdGhyb3cgJ2NvbXBpbGUgZXJyb3I6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXBpbGVzIGFuZCBsaW5rcyB2ZXJ0ZXggYW5kIGZyYWdtZW50IHNoYWRlcnMgaW50byBhIHByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVmVydGV4IHNoYWRlciBzb3VyY2VcclxuICAgICogQHBhcmFtIGZyYWdtZW50U291cmNlIEZyYWdtZW50IHNoYWRlciBzb3VyY2VcclxuICAgICogQHJldHVybnMgdGhlIHByb2dyYW0gaWRcclxuICAgICogQHRocm93cyBpZiB0aGUgY29tcGlsYXRpb24gZmFpbHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZSh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZykge1xyXG4gICAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcihmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKSk7XHJcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdsaW5rIGVycm9yOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjNCwgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgdG9EZWcsIHRvUmFkIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgbWF0cml4IGZvciB1c2UgaW4gV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsTWF0NCB7XHJcbiAgIC8qKiBUaGUgbWF0cml4IHZhbHVlIHN0b3JlZCBhcyBhIDE2IGVsZW1lbnQgYXJyYXkgKi9cclxuICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldCdzIGFuIGlkZW50aXR5IG1hdHJpeC4gU2FtZSBhcyBjcmVhdGluZyBhIG5ldyBtYXRyaXgsIGJ1dCBzeW50YWN0aWNhbGx5XHJcbiAgICAqIHNob3dzIHdoYXQgaXMgaGFwcGVuaW5nLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBuZXcgaWRlbml0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IGdsTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xNYXQ0IHtcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgdmFsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYSB2ZWN0b3IgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3Rvci5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdFYodmVjOiBnbFZlYzQpOiBnbFZlYzQge1xyXG4gICAgICBsZXQgdmFsczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbcm93ICogNCArIGNvbF0gKiB2ZWMudmFsdWVzW2NvbF07XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdmFscy5wdXNoKHN1bSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzQodmFscyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYW5vdGhlciBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgbWF0cml4LlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0TShvdGhlcjogZ2xNYXQ0KTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZ2V0KHJvdywgaSkgKiBvdGhlci5nZXQoaSwgY29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCBzdW0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBJbnZlcnRzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgKHRoaXMpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhpcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBpbnZlcnQoKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBsZXQgYTAwID0gdGhpcy52YWx1ZXNbMF0sIGEwMSA9IHRoaXMudmFsdWVzWzFdLCBhMDIgPSB0aGlzLnZhbHVlc1syXSwgYTAzID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIGxldCBhMTAgPSB0aGlzLnZhbHVlc1s0XSwgYTExID0gdGhpcy52YWx1ZXNbNV0sIGExMiA9IHRoaXMudmFsdWVzWzZdLCBhMTMgPSB0aGlzLnZhbHVlc1s3XTtcclxuICAgICAgbGV0IGEyMCA9IHRoaXMudmFsdWVzWzhdLCBhMjEgPSB0aGlzLnZhbHVlc1s5XSwgYTIyID0gdGhpcy52YWx1ZXNbMTBdLCBhMjMgPSB0aGlzLnZhbHVlc1sxMV07XHJcbiAgICAgIGxldCBhMzAgPSB0aGlzLnZhbHVlc1sxMl0sIGEzMSA9IHRoaXMudmFsdWVzWzEzXSwgYTMyID0gdGhpcy52YWx1ZXNbMTRdLCBhMzMgPSB0aGlzLnZhbHVlc1sxNV07XHJcblxyXG4gICAgICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xyXG4gICAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xyXG4gICAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xyXG4gICAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xyXG4gICAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xyXG4gICAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xyXG4gICAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xyXG4gICAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xyXG4gICAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxyXG4gICAgICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgaWYgKCFkZXQpIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgcmVzdWx0LnZhbHVlc1swXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1szXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRyYW5zcG9zZXMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIG5ldyBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNwb3NlZCBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJhbnNwb3NlKCk6IGdsTWF0NCB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCB0aGlzLmdldChjb2wsIHJvdykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSBzY2FsZSBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gc2NhbGUgVGhlIHNjYWxlIGZhY3RvclxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tU2NhbGUoc2NhbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIHNjYWxlLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBzY2FsZSwgMCwgMCxcclxuICAgICAgICAgMCwgMCwgc2NhbGUsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSB0cmFuc2xhdGlvbiBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB0cmFuc2xhdGlvbnMuXHJcbiAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21UcmFuc2xhdGlvbih2OiBnbFZlYzMpOiBnbE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCB2LngsXHJcbiAgICAgICAgIDAsIDEsIDAsIHYueSxcclxuICAgICAgICAgMCwgMCwgMSwgdi56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RYKGFuZ2xlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAwLCAtcywgYywgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tUm90WShhbmdsZTogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgYywgMCwgLXMsIDAsXHJcbiAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFooYW5nbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKVxyXG4gICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKVxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGMsIHMsIDAsIDAsXHJcbiAgICAgICAgIC1zLCBjLCAwLCAwLFxyXG4gICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21Sb3RYKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFkoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tUm90WShhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVJvdFooYW5nbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21UcmFuc2xhdGlvbihvZmZzZXQpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tU2NhbGUoc2NhbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSB2aWV3aW5nIG1hdHJpeC4gU2VlIGdsdUxvb2tBdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBleWUgVGhlIGV5ZSBwb3NpdGlvbi5cclxuICAgICogQHBhcmFtIGNlbnRlciBUaGUgcG9pbnQgb2YgaW50ZXJlc3QuXHJcbiAgICAqIEBwYXJhbSB1cCBUaGUgdXAgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmlld2luZyBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VMb29rQXQoZXllOiBnbFZlYzMsIGNlbnRlcjogZ2xWZWMzLCB1cDogZ2xWZWMzLCApOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEgPSBleWUuc3VidHJhY3QoY2VudGVyKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGIgPSB1cC5jcm9zcyhhKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGMgPSBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgbGV0IG0gPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgYi54LCBiLnksIGIueiwgMCxcclxuICAgICAgICAgYy54LCBjLnksIGMueiwgMCxcclxuICAgICAgICAgYS54LCBhLnksIGEueiwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHZhciB0ID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIDEsIDAsIDAsIC1leWUueCxcclxuICAgICAgICAgMCwgMSwgMCwgLWV5ZS55LFxyXG4gICAgICAgICAwLCAwLCAxLCAtZXllLnosXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbS5tdWx0TSh0KTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1UGVyc3BlY3RpdmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZm92eSBGaWVsZCBvZiB2aWV3IChpbiBkZWdyZWVzKS5cclxuICAgICogQHBhcmFtIGFzcGVjdCBWaWV3IGFzcGVjdCByYXRpby5cclxuICAgICogQHBhcmFtIHpuZWFyIE5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIEZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZVBlcnNwZWN0aXZlKFxyXG4gICAgICBmb3Z5OiBudW1iZXIsXHJcbiAgICAgIGFzcGVjdDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIHltYXggPSB6bmVhciAqIE1hdGgudGFuKGZvdnkgKiBNYXRoLlBJIC8gMzYwLjApO1xyXG4gICAgICB2YXIgeW1pbiA9IC15bWF4O1xyXG4gICAgICB2YXIgeG1pbiA9IHltaW4gKiBhc3BlY3Q7XHJcbiAgICAgIHZhciB4bWF4ID0geW1heCAqIGFzcGVjdDtcclxuXHJcbiAgICAgIHJldHVybiBnbE1hdDQubWFrZUZydXN0dW0oeG1pbiwgeG1heCwgeW1pbiwgeW1heCwgem5lYXIsIHpmYXIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdUZydXN0dW0uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIGJvdHRvbSBUaGUgYm90dG9tIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6bmVhciBUaGUgbmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgVGhlIGZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHJldHVybnMgdGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZUZydXN0dW0oXHJcbiAgICAgIGxlZnQ6IG51bWJlcixcclxuICAgICAgcmlnaHQ6IG51bWJlcixcclxuICAgICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICAgIHRvcDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIFggPSAyICogem5lYXIgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIFkgPSAyICogem5lYXIgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEEgPSAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgQiA9ICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBDID0gLSh6ZmFyICsgem5lYXIpIC8gKHpmYXIgLSB6bmVhcik7XHJcbiAgICAgIHZhciBEID0gLTIgKiB6ZmFyICogem5lYXIgLyAoemZhciAtIHpuZWFyKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgWCwgMCwgQSwgMCxcclxuICAgICAgICAgMCwgWSwgQiwgMCxcclxuICAgICAgICAgMCwgMCwgQywgRCxcclxuICAgICAgICAgMCwgMCwgLTEsIDBcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcsIGRpZ2l0czogbnVtYmVyID0gMikge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IDQ7IHIrKykge1xyXG4gICAgICAgICBsZXQgbGluZSA9IFwiXCI7XHJcbiAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XHJcbiAgICAgICAgICAgIGxpbmUgKz0gdGhpcy5nZXQociwgYykudG9GaXhlZChkaWdpdHMpICsgJyAnO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGxpbmUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IGdsQnVmZmVyIH0gZnJvbSBcIi4vZ2xCdWZmZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gXCIuL2dsVW5pZm9ybVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xPYmplY3Qge1xyXG4gICBwcml2YXRlIHRPYmo6IFRyaWFuZ2xlT2JqO1xyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IGdsQnVmZmVyO1xyXG4gICBwcml2YXRlIG5vcm1hbEJ1ZmZlcjogZ2xCdWZmZXI7XHJcbiAgIHByaXZhdGUgbW9kZWwgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodE9iajogVHJpYW5nbGVPYmosIHByb2dyYW06IFdlYkdMUHJvZ3JhbSkge1xyXG5cclxuICAgICAgdGhpcy50T2JqID0gdE9iajtcclxuICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBidWZmZXJzIChhbmQgYXNzb2NpYXRlZCBhdHRyaWJ1dGVzKVxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG5ldyBnbEJ1ZmZlcihwcm9ncmFtLCAnYVZlcnRleCcpO1xyXG4gICAgICB0aGlzLm5vcm1hbEJ1ZmZlciA9IG5ldyBnbEJ1ZmZlcihwcm9ncmFtLCAnYU5vcm1hbCcpO1xyXG5cclxuICAgICAgdGhpcy51cGxvYWRUcmlhbmdsZXMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIuZGVsZXRlKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmRlbGV0ZSgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwucm90WChhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFkoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsLnJvdFkoYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbC5yb3RaKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsLnNjYWxlKHNjYWxlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcbiAgICAgIHRoaXMubW9kZWwudHJhbnNsYXRlKG9mZnNldCk7XHJcbiAgIH1cclxuICAgcHVibGljIGNsZWFyVHJhbnNmb3JtcygpIHtcclxuICAgICAgdGhpcy5tb2RlbCA9IG5ldyBnbE1hdDQoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwdXNoVmVjKGFycmF5OiBudW1iZXJbXSwgdmVjOiBnbFZlYzMpIHtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueCk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnkpO1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZFRyaWFuZ2xlcygpIHtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIC8vIGNvbnZlcnQgdGhlIHRyaWFuZ2xlcyBpbnRvIGFycmF5cyB0aGF0IGNhbiBiZSB1cGxvYWRlZFxyXG4gICAgICBsZXQgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBub3JtYWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudE9iai50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRyaSA9IHRoaXMudE9iai50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyh2ZXJ0aWNlcywgdHJpLnYwKTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHZlcnRpY2VzLCB0cmkudjEpO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRyaS52Mik7XHJcblxyXG4gICAgICAgICB0aGlzLnB1c2hWZWMobm9ybWFscywgdHJpLm4wKTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRyaS5uMSk7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyhub3JtYWxzLCB0cmkubjIpO1xyXG4gICAgICB9XHJcbiAgICAgIHAubG9nKCd0byBnbFZlY1tdJyk7XHJcblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlci51cGxvYWQodmVydGljZXMpO1xyXG4gICAgICB0aGlzLm5vcm1hbEJ1ZmZlci51cGxvYWQobm9ybWFscyk7XHJcbiAgICAgIHAubG9nKCd1cGxvYWQnKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICB1bmkuc2V0KCdtb2RlbCcsIHRoaXMubW9kZWwudHJhbnNwb3NlKCkpO1xyXG5cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIuYmluZCgpO1xyXG4gICAgICB0aGlzLm5vcm1hbEJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCB0aGlzLnRPYmoudHJpYW5nbGVzLmxlbmd0aCAqIDMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICB0aGlzLnRPYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcbiAgICAgIHRoaXMudXBsb2FkVHJpYW5nbGVzKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRnJhbWVCdWZmZXJTdHlsZSB7XHJcbiAgIE5vcm1hbCxcclxuICAgRGVwdGgsXHJcbiAgIEZsb2F0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGZyYW1lIGJ1ZmZlciB0aGF0IGNhbiBiZSByZW5kZXJlZCB0b1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVGV4dHVyZUZyYW1lQnVmZmVyIHtcclxuXHJcbiAgIHB1YmxpYyBmcmFtZUJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlcjtcclxuICAgcHVibGljIGNvbG9yVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xyXG4gICBwdWJsaWMgZGVwdGhUZXh0dXJlOiBXZWJHTFRleHR1cmU7XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlIGEgZnJhbWUgYnVmZmVyIGZvciByZW5kZXJpbmcgaW50byB0ZXh0dXJlIG9iamVjdHMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIChpbiBwaXhlbHMpIG9mIHRoZSByZW5kZXJpbmcgKG11c3QgYmUgcG93ZXIgb2YgMilcclxuICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IChpbiBwaXhlbHMpIG9mIHRoZSByZW5kZXJpbmcgKG11c3QgYmUgcG93ZXIgb2YgMilcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc3R5bGU6IEZyYW1lQnVmZmVyU3R5bGUpIHtcclxuXHJcbiAgICAgIHN3aXRjaCAoc3R5bGUpIHtcclxuICAgICAgICAgY2FzZSBGcmFtZUJ1ZmZlclN0eWxlLk5vcm1hbDpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBGcmFtZUJ1ZmZlclN0eWxlLkRlcHRoOlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURlcHRoKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgRnJhbWVCdWZmZXJTdHlsZS5GbG9hdDpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGbG9hdCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMTogQ3JlYXRlIGEgZnJhbWUgYnVmZmVyIG9iamVjdFxyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMjogQ3JlYXRlIGFuZCBpbml0aWFsaXplIGEgdGV4dHVyZSBidWZmZXIgdG8gaG9sZCB0aGUgY29sb3JzLlxyXG4gICAgICB0aGlzLmNvbG9yVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsXHJcbiAgICAgICAgIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNDogQXR0YWNoIHRoZSBzcGVjaWZpYyBidWZmZXJzIHRvIHRoZSBmcmFtZSBidWZmZXIuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUsIDApO1xyXG5cclxuICAgICAgLy8gU3RlcCA1OiBWZXJpZnkgdGhhdCB0aGUgZnJhbWUgYnVmZmVyIGlzIHZhbGlkLlxyXG4gICAgICBsZXQgc3RhdHVzID0gZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhnbC5GUkFNRUJVRkZFUik7XHJcbiAgICAgIGlmIChzdGF0dXMgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgIGxldCBtc2cgPSBcIlRoZSBjcmVhdGVkIGZyYW1lIGJ1ZmZlciBpcyBpbnZhbGlkOiBcIiArIHN0YXR1cy50b1N0cmluZygpO1xyXG4gICAgICAgICBhbGVydChtc2cpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVbmJpbmQgdGhlc2UgbmV3IG9iamVjdHMsIHdoaWNoIG1ha2VzIHRoZSBkZWZhdWx0IGZyYW1lIGJ1ZmZlciB0aGVcclxuICAgICAgLy8gdGFyZ2V0IGZvciByZW5kZXJpbmcuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZURlcHRoKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBkZXB0aF90ZXh0dXJlX2V4dGVuc2lvbiA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVwdGhfdGV4dHVyZScpO1xyXG4gICAgICBpZiAoIWRlcHRoX3RleHR1cmVfZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgIGFsZXJ0KCdUaGlzIFdlYkdMIHByb2dyYW0gcmVxdWlyZXMgdGhlIHVzZSBvZiB0aGUgV0VCR0xfZGVwdGhfdGV4dHVyZSBleHRlbnNpb24uJyk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgYSBmcmFtZSBidWZmZXIgb2JqZWN0XHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgLy8gU3RlcCAyOiBDcmVhdGUgYW5kIGluaXRpYWxpemUgYSB0ZXh0dXJlIGJ1ZmZlciB0byBob2xkIHRoZSBjb2xvcnMuXHJcbiAgICAgIHRoaXMuY29sb3JUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCxcclxuICAgICAgICAgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cclxuICAgICAgLy8gU3RlcCAzOiBDcmVhdGUgYW5kIGluaXRpYWxpemUgYSB0ZXh0dXJlIGJ1ZmZlciB0byBob2xkIHRoZSBkZXB0aCB2YWx1ZXMuXHJcbiAgICAgIC8vIE5vdGU6IHRoZSBXRUJHTF9kZXB0aF90ZXh0dXJlIGV4dGVuc2lvbiBpcyByZXF1aXJlZCBmb3IgdGhpcyB0byB3b3JrXHJcbiAgICAgIC8vICAgICAgIGFuZCBmb3IgdGhlIGdsLkRFUFRIX0NPTVBPTkVOVCB0ZXh0dXJlIGZvcm1hdCB0byBiZSBzdXBwb3J0ZWQuXHJcbiAgICAgIHRoaXMuZGVwdGhUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmRlcHRoVGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuREVQVEhfQ09NUE9ORU5ULCB3aWR0aCwgaGVpZ2h0LCAwLFxyXG4gICAgICAgICBnbC5ERVBUSF9DT01QT05FTlQsIGdsLlVOU0lHTkVEX0lOVCwgbnVsbCk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cclxuICAgICAgLy8gU3RlcCA0OiBBdHRhY2ggdGhlIHNwZWNpZmljIGJ1ZmZlcnMgdG8gdGhlIGZyYW1lIGJ1ZmZlci5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSwgMCk7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5ERVBUSF9BVFRBQ0hNRU5ULCBnbC5URVhUVVJFXzJELCB0aGlzLmRlcHRoVGV4dHVyZSwgMCk7XHJcblxyXG4gICAgICAvLyBTdGVwIDU6IFZlcmlmeSB0aGF0IHRoZSBmcmFtZSBidWZmZXIgaXMgdmFsaWQuXHJcbiAgICAgIGxldCBzdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgbGV0IG1zZyA9IFwiVGhlIGNyZWF0ZWQgZnJhbWUgYnVmZmVyIGlzIGludmFsaWQ6IFwiICsgc3RhdHVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVuYmluZCB0aGVzZSBuZXcgb2JqZWN0cywgd2hpY2ggbWFrZXMgdGhlIGRlZmF1bHQgZnJhbWUgYnVmZmVyIHRoZVxyXG4gICAgICAvLyB0YXJnZXQgZm9yIHJlbmRlcmluZy5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjcmVhdGVGbG9hdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBzZXR0aW5nIHVuaWZvcm0gdmFsdWVzIGluIGEgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xVbmlmb3JtIHtcclxuICAgLy8gdGhlIFdlYkdMIHNoYWRlciBwcm9ncmFtXHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGZvciBzZXR0aW5nIHZhbHVlcyBhbmQgY2FsbHMgZ2wudXNlUHJvZ3JhbVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHByb2dyYW0gVGhlIHByb2dyYW0gYXNzb2NpYXRlZCB3aXRoIHRoZSB1bmlmb3JtIHZhbHVlc1xyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHByb2dyYW06IFdlYkdMUHJvZ3JhbSkge1xyXG4gICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhIHVuaWZvcm0gdmFsdWVcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBuYW1lIFRoZSB2YXJpYWJsZSBuYW1lXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWVcclxuICAgICogQHBhcmFtIGludCBJZiB0cnVlIGFuZCB0aGUgdmFsdWUgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYW4gaW50ZWdlclxyXG4gICAgKi9cclxuICAgcHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBnbFZlYzMgfCBnbENvbG9yIHwgZ2xNYXQ0LCBpbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgbGV0IGxvYyA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpO1xyXG4gICAgICBpZiAobG9jKSB7XHJcbiAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsVmVjMykge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvYywgbmV3IEZsb2F0MzJBcnJheSh2YWx1ZS52YWx1ZXMpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsQ29sb3IpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2MsIG5ldyBGbG9hdDMyQXJyYXkoW3ZhbHVlLnIsIHZhbHVlLmcsIHZhbHVlLmJdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbE1hdDQpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHZhbHVlLnZhbHVlcykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwidU1vZGVcIikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbnQpIHtcclxuICAgICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGxvYywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICBnbC51bmlmb3JtMWYobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGFuIGludGVnZXIgdW5pZm9ybSB2YWx1ZSAoc2FtZSBhcyBzZXQobmFtZSwgdmFsdWUsIHRydWUpKVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5hbWUgVGhlIHZhcmlhYmxlIG5hbWVcclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldGkobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlLCB0cnVlKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYWxsIHZhbHVlcyBmb3IgdmFyaWFibGVzIHN0b3JlZCBhcyBtZW1iZXJzIG9mIGFuIG9iamVjdFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHVuaWZvcm1zIFRoZSBvYmplY3Qgd2l0aCBtZW1iZXIgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0QWxsKHVuaWZvcm1zOiBhbnkpIHtcclxuXHJcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gdW5pZm9ybXMpIHtcclxuICAgICAgICAgdmFyIHZhbHVlID0gdW5pZm9ybXNbbmFtZV07XHJcbiAgICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBnbFVuaWZvcm1CbG9jayB7XHJcbiAgIHByaXZhdGUgYmxvY2tMb2NhdGlvbjogbnVtYmVyO1xyXG4gICBwcml2YXRlIGJsb2NrQnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHByb2dyYW06IFdlYkdMUHJvZ3JhbSwgYmxvY2tOYW1lOiBzdHJpbmcsIGJsb2NrQmluZGluZzogbnVtYmVyKSB7XHJcblxyXG4gICAgICBsZXQgZ2wyID0gZ2wgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICAgIHRoaXMuYmxvY2tMb2NhdGlvbiA9IGdsMi5nZXRVbmlmb3JtQmxvY2tJbmRleChwcm9ncmFtLCBibG9ja05hbWUpO1xyXG4gICAgICBnbDIudW5pZm9ybUJsb2NrQmluZGluZyhwcm9ncmFtLCB0aGlzLmJsb2NrTG9jYXRpb24sIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICB0aGlzLmJsb2NrQnVmZmVyID0gZ2wyLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlckJhc2UoZ2wyLlVOSUZPUk1fQlVGRkVSLCBibG9ja0JpbmRpbmcsIHRoaXMuYmxvY2tCdWZmZXIpO1xyXG4gICB9XHJcblxyXG4gICB1cGxvYWQoZGF0YTogRmxvYXQzMkFycmF5IHwgSW50MzJBcnJheSkge1xyXG5cclxuICAgICAgbGV0IGdsMiA9IGdsIGFzIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyKGdsMi5VTklGT1JNX0JVRkZFUiwgdGhpcy5ibG9ja0J1ZmZlcik7XHJcbiAgICAgIGdsMi5idWZmZXJEYXRhKGdsMi5VTklGT1JNX0JVRkZFUiwgZGF0YSwgZ2wyLlNUQVRJQ19EUkFXKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgIHZhciB1bmlmb3JtQmxvY2tCdWZmZXIgPSBnbDIuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyKGdsMi5VTklGT1JNX0JVRkZFUiwgdW5pZm9ybUJsb2NrQnVmZmVyKTtcclxuICAgICAgZ2wyLmJ1ZmZlckRhdGEoZ2wyLlVOSUZPUk1fQlVGRkVSLCB0cmlhbmdsZURhdGEsIGdsMi5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyKGdsMi5VTklGT1JNX0JVRkZFUiwgbnVsbCk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyQmFzZShnbDIuVU5JRk9STV9CVUZGRVIsIDIsIHVuaWZvcm1CbG9ja0J1ZmZlcik7XHJcbiAgICAgICovXHJcblxyXG4gICB9XHJcbn0iLCJcclxuLyoqXHJcbiAqIFZlY3RvciBjbGFzcyBmb3IgdXNlIHdpdGggV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuY2xhc3MgZ2xWZWMge1xyXG5cclxuICAgLyoqIFRoZSB2ZWN0b3IgdmFsdWVzLiAqL1xyXG4gICBwdWJsaWMgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzT3JTaXplIElmIGEgYXJyYXksIHRoZSB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuIElmIGEgbnVtYmVyLCB0aGUgc2l6ZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlc09yU2l6ZTogbnVtYmVyIHwgbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlc09yU2l6ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc09yU2l6ZV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KHZhbHVlc09yU2l6ZSk7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gVGhlIHZlY3RvciBtYWduaXR1ZGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFnbml0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tpXSAqIHRoaXMudmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzIgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMik7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMyKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgdG8gYW5vdGhlciBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciBwb2ludFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHBvaW50IGFuZCB0aGUgb3RoZXIgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXN0YW5jZShvdGhlcjogZ2xWZWMyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLnggLSBvdGhlci54LCAyKSArIE1hdGgucG93KHRoaXMueSAtIG90aGVyLnksIDIpKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXogdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjMyBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBkaWdpdHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBkaXNwbGF5LiBUaGlzIHZhbHVlIGlzIHBhc3NlZCB0byB0b0ZpeGVkKCkuXHJcbiAgICAqIEBwYXJhbSBkaXZpZGVyIFRoZSBzdHJpbmcgdG8gc2VwYXJhdGUgZWFjaCBudW1iZXIuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvU3RyaW5nKGRpZ2l0czogbnVtYmVyLCBkaXZpZGVyID0gJywnKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMueC50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy55LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnoudG9GaXhlZChkaWdpdHMpO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIE5vcm1hbGl6ZXMgdGhpcyB2ZWN0b3IsIGFuZCBzdG9yZXMgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbm9ybWFsaXplKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBtYWcgPSB0aGlzLm1hZ25pdHVkZSgpO1xyXG4gICAgICBsZXQgcmV0ID0gdGhpcy5jbG9uZSgpO1xyXG4gICAgICBpZiAobWFnICE9PSAwKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmV0LnZhbHVlc1tpXSAvPSBtYWc7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFN1YnRyYWN0cyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBzdWJ0cmFjdC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWM6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLSB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAtIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC0gdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEFkZHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gYWRkLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFkZCh2ZWM6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gKyB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSArIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdICsgdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNyb3NzKG90aGVyOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgQSA9IHRoaXMudmFsdWVzO1xyXG4gICAgICBsZXQgQiA9IG90aGVyLnZhbHVlcztcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBBWzFdICogQlsyXSAtIEFbMl0gKiBCWzFdLFxyXG4gICAgICAgICBBWzJdICogQlswXSAtIEFbMF0gKiBCWzJdLFxyXG4gICAgICAgICBBWzBdICogQlsxXSAtIEFbMV0gKiBCWzBdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzQgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4geC15LXogdmVjdG9yIHdoZXJlIGVhY2ggZWxlbWVudCBpcyBjb21wdXRlZCBieSBkaXZpZGluZyB0aGlzIHZlY3RvcnNcclxuICAgICogZWxlbWVudHMgYnkgdGhlIHcgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiB4LXkteiB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGl2aWRlQnlXKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB3ID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcbmltcG9ydCB7IHRvQ3NzIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGNsYXNzIHRoYXQgcmVxdWlyZXMgUkdCIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDI1NVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGh0bWxDb2xvciBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgd2hpdGUgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1NSwgMjU1XSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmxhY2sgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcmVkID0gbmV3IGh0bWxDb2xvcihbMjU1LCAwLCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZ3JlZW4gPSBuZXcgaHRtbENvbG9yKFswLCAyNTUsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBibHVlID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMjU1XSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgb3JhbmdlID0gbmV3IGh0bWxDb2xvcihbMjU1LCAxNjUsIDBdKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMgVGhlIG51bWVyaWMgdmFsdWVcclxuICAgICogQHJldHVybnMgVGhlIGhleCBzdHJpbmdcclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBjb21wb25lbnRUb0hleChjOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICB2YXIgaGV4ID0gYy50b1N0cmluZygxNik7XHJcbiAgICAgIHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgaGV4IHN0cmluZyAoZS5nLiAjMGYwZjBmKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgaGV4IHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0hleCgpOiBzdHJpbmcge1xyXG4gICAgICBsZXQgckhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5yKTtcclxuICAgICAgbGV0IGdIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuZyk7XHJcbiAgICAgIGxldCBiSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmIpO1xyXG4gICAgICByZXR1cm4gXCIjXCIgKyBySGV4ICsgZ0hleCArIGJIZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGNzcyBzdHJpbmcgKGUuZy4gJ3JnYigxMjgsMjI4LDMyKScpLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNzcyBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Dc3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRvQ3NzKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSBjc3Mgc3R5bGUgc3RyaW5nIChlLmcuICdyZ2IoMjQsMzYsODMpJykgdG8gYSBjb2xvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNzcyBUaGUgY3NzIHN0cmluZy5cclxuICAgICogQHJldHVybnMgVGhlIGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tQ3NzKGNzczogc3RyaW5nKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHJlZ2V4ID0gL1xcZCsvZztcclxuICAgICAgbGV0IHZhbHMgPSBjc3MubWF0Y2gocmVnZXgpLnNsaWNlKDAsIDMpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbcGFyc2VJbnQodmFsc1swXSksIHBhcnNlSW50KHZhbHNbMV0pLCBwYXJzZUludCh2YWxzWzJdKV0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IGZyb20gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nXHJcbiAgICAqIEByZXR1cm5zIFRoZSBodG1sQ29sb3Igb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21IZXgoaGV4OiBzdHJpbmcpOiBodG1sQ29sb3Ige1xyXG4gICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgbGV0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgICAgbGV0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgICAgbGV0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLnIpO1xyXG4gICAgICBsZXQgZyA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5nKTtcclxuICAgICAgbGV0IGIgPSBodG1sQ29sb3IuY2xhbXAoY29sb3IuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSb3VuZHMgYSBudW1iZXIgdG8gYSB3aG9sZSBudW1iZXIgYW5kIGNsYW1wcyBpdCBiZXR3ZWVuIDAgYW5kIDI1NS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgcm91bmRlZCAmIGNsYW1wZWQgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNsYW1wKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgdmFsID0gTWF0aC5yb3VuZCh2YWwpO1xyXG4gICAgICBpZiAodmFsIDwgMCkge1xyXG4gICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh2YWwgPiAyNTUpIHtcclxuICAgICAgICAgcmV0dXJuIDI1NTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBjb2xvciB0byBhbiBlcXVpdmFsZW50IGdyYXktc2NhbGUgY29sb3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBncmF5LXNjYWxlIGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR3JheSgpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgcmdiID0gTWF0aC5yb3VuZCgodGhpcy5yICsgdGhpcy5nICsgdGhpcy5iKSAvIDMpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbcmdiLCByZ2IsIHJnYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBXZWJHTCBjb2xvciBvYmplY3QgKDAtMSBiYXNlZClcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HbENvbG9yKCk6IGdsQ29sb3Ige1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3RoaXMuciAvIDI1NSwgdGhpcy5nIC8gMjU1LCB0aGlzLmIgLyAyNTVdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IHRvQ3NzIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGh0bWwgY29sb3Igd2l0aCBhIHRyYW5zcGFyZW5jeSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGh0bWxDb2xvcldpdGhBbHBoYSBleHRlbmRzIGh0bWxDb2xvciB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRyYW5zcGFyZW50ID0gbmV3IGh0bWxDb2xvcldpdGhBbHBoYShbMCwgMCwgMCwgMF0pO1xyXG5cclxuICAgLyoqIFRoZSB0cmFuc3BhcmVuY3kgKGFscGhhKSB2YWx1ZSAqL1xyXG4gICBwdWJsaWMgYTogbnVtYmVyID0gMjU1O1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0JBIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBzdXBlcihbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXV0pO1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSA0KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCA0IGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbG9yWzRdIDwgMCB8fCBjb2xvcls0XSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdhJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYSA9IGNvbG9yWzNdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBjc3Mgc3RyaW5nIChlLmcuICdyZ2IoMTI4LDIyOCwzMiwyNTUpJykuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY3NzIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0NzcygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdG9Dc3ModGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgUGF0aFRyYWNlckFwcCB9IGZyb20gXCIuL1BhdGhUcmFjZXJBcHBcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUGxhbmVzQXBwIH0gZnJvbSBcIi4vUGxhbmVzQXBwXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgbGV0IHF1ZXJ5OiBzdHJpbmc7XHJcbiAgIGxldCB0eXBlID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcclxuICAgICAgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGxldCB0b2tlbnMgPSBxdWVyeS5zcGxpdCgnLScpO1xyXG4gICAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICB0eXBlID0gdG9rZW5zWzBdO1xyXG4gICAgICAgICBxdWVyeSA9IHRva2Vuc1sxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdHlwZSA9IHRva2Vuc1swXTtcclxuICAgICAgICAgcXVlcnkgPSAnJztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpZiAodHlwZSA9PT0gJ3BsYW5lcycpIHtcclxuICAgICAgbGV0IGFwcCA9IG5ldyBQbGFuZXNBcHAocXVlcnkpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC5jb21wb25lbnQoKSk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIGxldCBhcHAgPSBuZXcgUGF0aFRyYWNlckFwcChxdWVyeSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLmNvbXBvbmVudCgpKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxyXFxudW5pZm9ybSBpbnQgdU1vZGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1TWF4Q2hyb21hO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1SGlnaGxpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVNaWRMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1RGFya0xpZ2h0Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVTaGFkb3dDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdVJlZmxlY3RlZExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVEYXJrQWNjZW50Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCB1U2hhZG93QWxwaGE7XFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRBbHBoYTtcXHJcXG5cXHJcXG4jZGVmaW5lIE1PREVfU0NJRU5DRSAwXFxyXFxuI2RlZmluZSBNT0RFX1ZBTFVFIDFcXHJcXG4jZGVmaW5lIE1PREVfQ0hST01BIDJcXHJcXG4jZGVmaW5lIE1PREVfQkFORFMgM1xcclxcblxcclxcbnZlYzQgd2hpdGUgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCByZWQgPSB2ZWM0KDEuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBvcmFuZ2UgPSB2ZWM0KDEuMCwgMC42NSwgMC4wLCAxLjApO1xcclxcbnZlYzQgeWVsbG93ID0gdmVjNCgxLjAsIDEuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgZ3JlZW4gPSB2ZWM0KDAuMCwgMS4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBjeWFuID0gdmVjNCgwLjAsIDEuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgYmx1ZSA9IHZlYzQoMC4wLCAwLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IGJsYWNrID0gdmVjNCgwLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbiNkZWZpbmUgTlVNX0NPTE9SUyA2XFxyXFxudmVjNCBjb2xvcnNbTlVNX0NPTE9SU107XFxyXFxuXFxyXFxudmVjNCB2YWx1ZTJDb2xvcihmbG9hdCB2YWx1ZSlcXHJcXG57XFxyXFxuICAgZmxvYXQgc3BhbiA9IDEuMCAvIGZsb2F0KE5VTV9DT0xPUlMgLSAxKTtcXHJcXG4gICB2YWx1ZSAqPSBmbG9hdChOVU1fQ09MT1JTIC0gMSk7XFxyXFxuICAgaWYgKHZhbHVlIDwgMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzBdO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDEuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1swXSArIHZhbHVlICogKGNvbG9yc1sxXSAtIGNvbG9yc1swXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMi4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzFdICsgKHZhbHVlIC0gMS4wKSAqIChjb2xvcnNbMl0gLSBjb2xvcnNbMV0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDMuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1syXSArICh2YWx1ZSAtIDIuMCkgKiAoY29sb3JzWzNdIC0gY29sb3JzWzJdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA0LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbM10gKyAodmFsdWUgLSAzLjApICogKGNvbG9yc1s0XSAtIGNvbG9yc1szXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzRdICsgKHZhbHVlIC0gNC4wKSAqIChjb2xvcnNbNV0gLSBjb2xvcnNbNF0pO1xcclxcbiAgIH1cXHJcXG4gICAvKlxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNi4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzVdICsgKHZhbHVlIC0gNS4wKSAqIChjb2xvcnNbNl0gLSBjb2xvcnNbNV0pO1xcclxcbiAgIH1cXHJcXG4gICAqL1xcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1tOVU1fQ09MT1JTIC0gMV07XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCB0b0dyYXkodmVjNCBjKVxcclxcbntcXHJcXG4gICAvLyBsb3RzIG9mIHdheXMgdG8gY29udmVydCBSR0IgdG8gZ3JheSBzY2FsZS5cXHJcXG5cXHJcXG4gICAvLyBzaW1wbGUgYXZlcmFnaW5nIG1ldGhvZFxcclxcbiAgIC8vIHJldHVybiAoYy5yICsgYy5nICsgYy5iKSAvIDMuMDtcXHJcXG5cXHJcXG4gICAvLyByZWxhdGl2ZSBwZXJjZXB0dWFsIHZhbHVlc1xcclxcbiAgIC8vIHJldHVybiAwLjMgKiBjLnIgKyAwLjU5ICogYy5nICsgMC4xMSAqIGMuYjtcXHJcXG5cXHJcXG4gICAvLyBsdW1pbm9zaXR5IG1lYXN1cmVcXHJcXG4gICBmbG9hdCBnYW1tYSA9IDIuMjtcXHJcXG4gICBmbG9hdCB5ID0gMC4yMTI2ICogcG93KGMuciwgZ2FtbWEpICsgMC43MTUyICogcG93KGMuZywgZ2FtbWEpICsgLjA3MjIgKiBwb3coYy5iLCBnYW1tYSk7XFxyXFxuICAgZmxvYXQgbCA9IDExNi4wICogcG93KHksIDEuMCAvIDMuMCkgLSAxNi4wO1xcclxcbiAgIHJldHVybiBsIC8gMTAwLjA7XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNWYWx1ZSgpXFxyXFxue1xcclxcbiAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG4gICBmbG9hdCByZ2IgPSB0b0dyYXkoY29sb3IpO1xcclxcbiAgIHJldHVybiB2ZWM0KHJnYiwgcmdiLCByZ2IsIDEuMCk7XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNDaHJvbWEoKVxcclxcbntcXHJcXG4gICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuICAgLy8gcmVuZGVyIHRoZSBzY2FsZSBhcyBhIGJhciBvbiB0aGUgbGVmdFxcclxcbiAgIGlmICh0ZXhDb29yZC54IDwgMC4wMylcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHZhbHVlMkNvbG9yKCh0ZXhDb29yZC55IC0gMC4xKSAvIDAuOSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKGNvbG9yLmEgPj0gdVNoYWRvd0FscGhhKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmbG9hdCBhdmcgPSAoY29sb3IuciArIGNvbG9yLmcgKyBjb2xvci5iKSAvIDMuMDtcXHJcXG4gICAgICAgICBmbG9hdCByZ2IgPSAoYWJzKGF2ZyAtIGNvbG9yLnIpICsgYWJzKGF2ZyAtIGNvbG9yLmcpICsgYWJzKGF2ZyAtIGNvbG9yLmIpKSAvICg0LjAgLyAzLjApO1xcclxcbiAgICAgICAgIHJldHVybiB2YWx1ZTJDb2xvcihyZ2IgLyB1TWF4Q2hyb21hKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCgwLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGQyKHZlYzMgYzEsIHZlYzMgYzIpXFxyXFxue1xcclxcbiAgIC8vIHN1bSB0aGUgc3F1YXJlcyBvZiB0aGUgZGlmZmVyZW5jZXNcXHJcXG4gICByZXR1cm4gcG93KGMxLnIgLSBjMi5yLCAyLjApICsgcG93KGMxLmcgLSBjMi5nLCAyLjApICsgcG93KGMxLmIgLSBjMi5iLCAyLjApO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGNsb3Nlc3QodmVjMyBjb2xvciwgdmVjMyBsaWdodCwgdmVjMyBtaWQsIHZlYzMgZGFyaylcXHJcXG57XFxyXFxuICAgZmxvYXQgZGxpZ2h0ID0gZDIoY29sb3IsIGxpZ2h0KTtcXHJcXG4gICBmbG9hdCBkbWlkID0gZDIoY29sb3IsIG1pZCk7XFxyXFxuICAgZmxvYXQgZGRhcmsgPSBkMihjb2xvciwgZGFyayk7XFxyXFxuXFxyXFxuICAgZmxvYXQgZG1pbiA9IG1pbihkbGlnaHQsIG1pbihkbWlkLCBkZGFyaykpO1xcclxcbiAgIGlmIChkbWluID09IGRsaWdodClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGxpZ2h0O1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmIChkbWluID09IGRtaWQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBtaWQ7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGRhcms7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzQmFuZHMoKVxcclxcbntcXHJcXG4gICBmbG9hdCBzaXplID0gMC4wNztcXHJcXG4gICBmbG9hdCBtYXJnaW4gPSAoMS4wIC0gNi4wICogc2l6ZSkgLyAyLjA7XFxyXFxuICAgaWYgKHRleENvb3JkLnggPCBzaXplICYmIHRleENvb3JkLnkgPiBtYXJnaW4gJiYgdGV4Q29vcmQueSA8ICgxLjAgLSBtYXJnaW4pKVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyAxLjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodURhcmtBY2NlbnRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyAyLjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodVNoYWRvd0NvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDMuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1RGFya0xpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNC4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVNaWRMaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDUuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1TGlnaHRMaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIC8vIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDcuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1SGlnaGxpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG5cXHJcXG4gICAgICAvLyBkZWZpbmUgdGhlIHRlcm1pbmF0b3IgYXMgdGhlIHBvaW50IHdoZXJlIHRoaW5ncyBhcmUgNTAlIGluIHNoYWRvd1xcclxcbiAgICAgIGZsb2F0IHRlcm1pbmF0b3IgPSAoKHVTaGFkb3dBbHBoYSArIHVMaWdodEFscGhhKSAvIDIuMCk7XFxyXFxuICAgICAgaWYgKGNvbG9yLmEgPiAxLjAgJiYgY29sb3IuYSA8PSB0ZXJtaW5hdG9yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICB2ZWMzIGMgPSBjbG9zZXN0KGNvbG9yLnJnYiwgdVNoYWRvd0NvbG9yLCB1UmVmbGVjdGVkTGlnaHRDb2xvciwgdURhcmtBY2NlbnRDb2xvcik7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQoYywgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAoY29sb3IuYSA+IHRlcm1pbmF0b3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIG9ubHkgcmVuZGVyIHRoZSBoaWdobGlnaHQgd2hlcmUgaXQncyBjb250cmlidXRpb24gaXMgc2lnbmlmaWNhbnQsIGkuZS4gZ3JlYXRlclxcclxcbiAgICAgICAgIC8vIHRoYW4gc29tZSB0aHJlc2hvbGRcXHJcXG4gICAgICAgICBjb25zdCBmbG9hdCBTUEVDVUxBUl9USFJFU0hPTEQgPSAwLjE7XFxyXFxuICAgICAgICAgaWYgKGNvbG9yLmEgPiAodUxpZ2h0QWxwaGEgKyBTUEVDVUxBUl9USFJFU0hPTEQpKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4gdmVjNCh1SGlnaGxpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIGVsc2VcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmVjMyBjID0gY2xvc2VzdChjb2xvci5yZ2IsIHVMaWdodExpZ2h0Q29sb3IsIHVNaWRMaWdodENvbG9yLCB1RGFya0xpZ2h0Q29sb3IpO1xcclxcbiAgICAgICAgICAgIHJldHVybiB2ZWM0KGMsIDEuMCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiBjb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzU2NpZW5jZSgpXFxyXFxue1xcclxcbiAgIC8vIGp1c3QgcmV0dXJuIHRoZSB0ZXh0dXJlXFxyXFxuICAgcmV0dXJuIHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBjb2xvcnNbMF0gPSBibGFjaztcXHJcXG4gICBjb2xvcnNbMV0gPSBibHVlO1xcclxcbiAgIGNvbG9yc1syXSA9IGdyZWVuO1xcclxcbiAgIGNvbG9yc1szXSA9IHllbGxvdztcXHJcXG4gICBjb2xvcnNbNF0gPSBvcmFuZ2U7XFxyXFxuICAgY29sb3JzWzVdID0gcmVkO1xcclxcblxcclxcbiAgIGlmICh1TW9kZSA9PSBNT0RFX1ZBTFVFKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc1ZhbHVlKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQ0hST01BKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc0Nocm9tYSgpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh1TW9kZSA9PSBNT0RFX0JBTkRTKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc0JhbmRzKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNTY2llbmNlKCk7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIGZsb2F0IHVTY2FsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVYT2Zmc2V0O1xcclxcbnVuaWZvcm0gZmxvYXQgdVlPZmZzZXQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdGV4Q29vcmQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHVTY2FsZSAqIHZlcnRleC54ICsgdVhPZmZzZXQsIHVTY2FsZSAqIHZlcnRleC55ICsgdVlPZmZzZXQsIDAuMCwgMS4wKTtcXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxWRVJTSU9OPlxcclxcblxcclxcbiNkZWZpbmUgTk9USElOR1xcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuI2RlZmluZSBFUzMwMFxcclxcbiNlbmRpZlxcclxcblxcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5pbiB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2Vsc2VcXHJcXG52YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdUV5ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUZXh0dXJlU2l6ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVSYW5kb207XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodFBvcztcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1QW1iaWVudExpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1T2JqQ29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1QmFsbFJhZGl1cztcXHJcXG51bmlmb3JtIGZsb2F0IHVTYW1wbGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRBbHBoYTtcXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3dBbHBoYTtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5vdXQgdmVjNCBmcmFnQ29sb3I7XFxyXFxuI2Vsc2VcXHJcXG4jZGVmaW5lIGZyYWdDb2xvciBnbF9GcmFnQ29sb3JcXHJcXG4jZGVmaW5lIHRleHR1cmUgdGV4dHVyZTJEXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuY29uc3QgaW50IE1BWF9CT1VOQ0VTID0gMTA7XFxyXFxuY29uc3QgZmxvYXQgRVBTSUxPTiA9IDAuMDAwMDAxO1xcclxcbmNvbnN0IGZsb2F0IE9GRlNFVCA9IDAuMDAwMTtcXHJcXG5jb25zdCBmbG9hdCBJTkZJTklUWSA9IDEwMDAwLjA7XFxyXFxuY29uc3QgZmxvYXQgTElHSFRfU0laRSA9IDAuMTtcXHJcXG4jZGVmaW5lIEJBTExfQ0VOVEVSIHZlYzMoMCwgdUJhbGxSYWRpdXMsIDApXFxyXFxuY29uc3QgdmVjMyBET01FX0NFTlRFUiA9IHZlYzMoMCwgMCwgMCk7XFxyXFxuY29uc3QgZmxvYXQgRE9NRV9SQURJVVMgPSA4LjA7XFxyXFxuY29uc3QgZmxvYXQgVkFMID0gMC44O1xcclxcbmNvbnN0IHZlYzMgRE9NRV9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBGTE9PUl9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBBTUJJRU5UX0NPTE9SID0gdmVjMygxLjAsIDEuMCwgMS4wKTtcXHJcXG5jb25zdCBpbnQgTlVNX0xJR0hUUyA9IDY7XFxyXFxuY29uc3QgZmxvYXQgSEVJR0hUID0gNS4wO1xcclxcbmNvbnN0IGZsb2F0IFJBRElVUyA9IDQuMDtcXHJcXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjU7XFxyXFxuXFxyXFxuc3RydWN0IExpZ2h0XFxyXFxue1xcclxcbiAgIGZsb2F0IGludGVuc2l0eTtcXHJcXG4gICBmbG9hdCBzaXplO1xcclxcbiAgIHZlYzMgcG9zO1xcclxcbiAgIHZlYzMgY29sb3I7XFxyXFxufTtcXHJcXG5cXHJcXG4gTGlnaHQgTGlnaHRzW05VTV9MSUdIVFNdO1xcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuc3RydWN0IFRyaWFuZ2xlXFxyXFxue1xcclxcbiAgIHZlYzMgcDA7XFxyXFxuICAgdmVjMyBwMTtcXHJcXG4gICB2ZWMzIHAyO1xcclxcbn07XFxyXFxuXFxyXFxuc3RydWN0IFZvbHVtZVxcclxcbntcXHJcXG4gICBpbnQgc3RhcnRJbmRleDtcXHJcXG4gICBpbnQgbnVtVHJpYW5nbGVzO1xcclxcbiAgIHZlYzMgYm94TWluO1xcclxcbiAgIHZlYzMgYm94TWF4O1xcclxcbn07XFxyXFxuXFxyXFxuLy8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIHJlcGxhY2VkIHdpdGggY29kZSBnZW5lcmF0ZWQgaW4gSmF2YVNjcmlwdFxcclxcbmNvbnN0IGludCBOVU1fVkVSVElDRVMgPSA8TlVNX1ZFUlRJQ0VTPjtcXHJcXG5jb25zdCBpbnQgTlVNX1ZPTFVNRVMgPSA8TlVNX1ZPTFVNRVM+O1xcclxcbmNvbnN0IGludCBOVU1fVFJJQU5HTEVTID0gPE5VTV9UUklBTkdMRVM+O1xcclxcblxcclxcbmxheW91dChzdGQxNDApIHVuaWZvcm0gTXlWZXJ0aWNlc0Jsb2NrIHsgdmVjMyB2ZXJ0aWNlc1tOVU1fVkVSVElDRVNdOyB9O1xcclxcblxcclxcbnN0cnVjdCBJVHJpYW5nbGVcXHJcXG57XFxyXFxuICAgaW50IGkwO1xcclxcbiAgIGludCBpMTtcXHJcXG4gICBpbnQgaTI7XFxyXFxufTtcXHJcXG5cXHJcXG5sYXlvdXQoc3RkMTQwKSB1bmlmb3JtIE15VHJpYW5nbGVzQmxvY2sgeyBJVHJpYW5nbGUgdHJpYW5nbGVzW05VTV9UUklBTkdMRVNdOyB9O1xcclxcblRyaWFuZ2xlIGdldFRyaWFuZ2xlKGludCBpbmRleClcXHJcXG57XFxyXFxuICAgSVRyaWFuZ2xlIHRyaSA9IHRyaWFuZ2xlc1tpbmRleF07XFxyXFxuICAgdmVjMyBwMCA9IHZlcnRpY2VzW3RyaS5pMF07XFxyXFxuICAgdmVjMyBwMSA9IHZlcnRpY2VzW3RyaS5pMV07XFxyXFxuICAgdmVjMyBwMiA9IHZlcnRpY2VzW3RyaS5pMl07XFxyXFxuICAgcmV0dXJuIFRyaWFuZ2xlKHAwLCBwMSwgcDIpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBUaGUgY2VudHJhbCBvYmplY3QgYmVpbmcgcmVuZGVyZWRcXHJcXG5zdHJ1Y3QgT2JqZWN0XFxyXFxue1xcclxcbiAgIFZvbHVtZSB2b2x1bWVzW05VTV9WT0xVTUVTXTtcXHJcXG4gICB2ZWMzIGJveE1pbjtcXHJcXG4gICB2ZWMzIGJveE1heDtcXHJcXG59O1xcclxcblxcclxcbnVuaWZvcm0gT2JqZWN0IG9iamVjdDtcXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdEJveChjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIGNvbnN0IHZlYzMgYm94TWluLCBjb25zdCB2ZWMzIGJveE1heClcXHJcXG57XFxyXFxuICAgdmVjMyByYXlJbnYgPSAxLjAgLyByYXk7XFxyXFxuICAgdmVjMyB0Ym90ID0gcmF5SW52ICogKGJveE1pbiAtIG9yaWdpbik7XFxyXFxuICAgdmVjMyB0dG9wID0gcmF5SW52ICogKGJveE1heCAtIG9yaWdpbik7XFxyXFxuICAgdmVjMyB0bWluID0gbWluKHR0b3AsIHRib3QpO1xcclxcbiAgIHZlYzMgdG1heCA9IG1heCh0dG9wLCB0Ym90KTtcXHJcXG4gICB2ZWMyIHQgPSBtYXgodG1pbi54eCwgdG1pbi55eik7XFxyXFxuICAgZmxvYXQgdDAgPSBtYXgodC54LCB0LnkpO1xcclxcbiAgIHQgPSBtaW4odG1heC54eCwgdG1heC55eik7XFxyXFxuICAgZmxvYXQgdDEgPSBtaW4odC54LCB0LnkpO1xcclxcbiAgIHJldHVybiB0MSA+IG1heCh0MCwgMC4wKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9vbCBpbnRlcnNlY3RWb2woY29uc3QgdmVjMyBvcmlnaW4sIGNvbnN0IHZlYzMgcmF5LCBWb2x1bWUgdm9sKVxcclxcbntcXHJcXG4gICBpZiAodm9sLm51bVRyaWFuZ2xlcyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHJldHVybiBpbnRlcnNlY3RCb3gob3JpZ2luLCByYXksIHZvbC5ib3hNaW4sIHZvbC5ib3hNYXgpO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdE9iaihjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIE9iamVjdCBvYmplY3QpXFxyXFxue1xcclxcbiAgIHJldHVybiBpbnRlcnNlY3RCb3gob3JpZ2luLCByYXksIG9iamVjdC5ib3hNaW4sIG9iamVjdC5ib3hNYXgpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNw7ZsbGVy4oCTVHJ1bWJvcmUgcmF5LXRyaWFuZ2xlIGludGVyc2VjdGlvbiBhbGdvcml0aG1cXHJcXG4vLyBzb3VyY2U6IGh0dHA6Ly9iaXQubHkvMk14blBNR1xcclxcbmZsb2F0IGludGVyc2VjdFRyaWFuZ2xlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgVHJpYW5nbGUgdHJpKVxcclxcbntcXHJcXG4gICB2ZWMzIGVkZ2UxLCBlZGdlMiwgaCwgcywgcTtcXHJcXG4gICBmbG9hdCBhLCBmLCB1LCB2O1xcclxcbiAgIGVkZ2UxID0gdHJpLnAxIC0gdHJpLnAwO1xcclxcbiAgIGVkZ2UyID0gdHJpLnAyIC0gdHJpLnAwO1xcclxcblxcclxcbiAgIGggPSBjcm9zcyhyYXksIGVkZ2UyKTtcXHJcXG4gICBhID0gZG90KGVkZ2UxLCBoKTtcXHJcXG4gICBpZiAoYWJzKGEpIDwgRVBTSUxPTilcXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgZiA9IDEuMCAvIGE7XFxyXFxuICAgcyA9IG9yaWdpbiAtIHRyaS5wMDtcXHJcXG4gICB1ID0gZiAqIGRvdChzLCBoKTtcXHJcXG4gICBpZiAodSA8IDAuMCB8fCB1ID4gMS4wKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICBxID0gY3Jvc3MocywgZWRnZTEpO1xcclxcbiAgIHYgPSBmICogZG90KHJheSwgcSk7XFxyXFxuICAgaWYgKHYgPCAwLjAgfHwgKHUgKyB2KSA+IDEuMClcXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgLy8gQXQgdGhpcyBzdGFnZSB3ZSBjYW4gY29tcHV0ZSB0IHRvIGZpbmQgb3V0IHdoZXJlIHRoZSBpbnRlcnNlY3Rpb24gcG9pbnQgaXMgb24gdGhlIGxpbmUuXFxyXFxuICAgZmxvYXQgdCA9IGYgKiBkb3QoZWRnZTIsIHEpO1xcclxcbiAgIGlmICh0IDw9IEVQU0lMT04pIC8vIHRoaXMgbWVhbnMgdGhhdCB0aGVyZSBpcyBhIGxpbmUgaW50ZXJzZWN0aW9uIGJ1dCBub3QgYSByYXkgaW50ZXJzZWN0aW9uLlxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICByZXR1cm4gdDsgLy8gcmF5IGludGVyc2VjdGlvblxcclxcbn1cXHJcXG5cXHJcXG52ZWMzIG5vcm1hbEZvclRyaWFuZ2xlKHZlYzMgb3JpZ2luLCB2ZWMzIGhpdCwgaW50IHRJbmRleClcXHJcXG57XFxyXFxuICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUodEluZGV4KTtcXHJcXG4gICB2ZWMzIG5vcm1hbCA9IGNyb3NzKHRyaS5wMSAtIHRyaS5wMCwgdHJpLnAyIC0gdHJpLnAwKTtcXHJcXG4gICBub3JtYWwgPSBub3JtYWxpemUobm9ybWFsKTtcXHJcXG4gICBpZiAoZG90KG5vcm1hbCwgb3JpZ2luIC0gaGl0KSA+IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIG5vcm1hbDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gLW5vcm1hbDtcXHJcXG4gICB9XFxyXFxufVxcclxcbiNlbmRpZlxcclxcblxcclxcbmZsb2F0IGludGVyc2VjdFNwaGVyZSh2ZWMzIG9yaWdpbiwgdmVjMyByYXksIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpXFxyXFxue1xcclxcbiAgIHZlYzMgdG9TcGhlcmUgPSBvcmlnaW4gLSBzcGhlcmVDZW50ZXI7XFxyXFxuICAgZmxvYXQgYSA9IGRvdChyYXksIHJheSk7XFxyXFxuICAgZmxvYXQgYiA9IDIuMCAqIGRvdCh0b1NwaGVyZSwgcmF5KTtcXHJcXG4gICBmbG9hdCBjID0gZG90KHRvU3BoZXJlLCB0b1NwaGVyZSkgLSBzcGhlcmVSYWRpdXMgKiBzcGhlcmVSYWRpdXM7XFxyXFxuICAgZmxvYXQgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0LjAgKiBhICogYztcXHJcXG4gICBpZiAoZGlzY3JpbWluYW50ID4gMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB0MSA9ICgtYiAtIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgZmxvYXQgdDIgPSAoLWIgKyBzcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIuMCAqIGEpO1xcclxcbiAgICAgIGlmICh0MSA+IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHQxO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0MiA+IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHQyO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuICAgcmV0dXJuIElORklOSVRZO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIG5vcm1hbEZvclNwaGVyZSh2ZWMzIGhpdCwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgcmV0dXJuIChoaXQgLSBzcGhlcmVDZW50ZXIpIC8gc3BoZXJlUmFkaXVzO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCByYW5kb20odmVjMyBzY2FsZSwgZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIGZyYWN0KHNpbihkb3QoZ2xfRnJhZ0Nvb3JkLnh5eiArIHNlZWQsIHNjYWxlKSkgKiA0Mzc1OC41NDUzICsgc2VlZCk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24oZmxvYXQgc2VlZCwgdmVjMyBub3JtYWwpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCByID0gc3FydCh1KTtcXHJcXG4gICBmbG9hdCBhbmdsZSA9IDYuMjgzMTg1MzA3MTc5NTg2ICogdjtcXHJcXG4gICAvLyBjb21wdXRlIGJhc2lzIGZyb20gbm9ybWFsXFxyXFxuICAgdmVjMyBzZGlyLCB0ZGlyO1xcclxcbiAgIGlmIChhYnMobm9ybWFsLngpIDwgLjUpXFxyXFxuICAge1xcclxcbiAgICAgIHNkaXIgPSBjcm9zcyhub3JtYWwsIHZlYzMoMSwgMCwgMCkpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHNkaXIgPSBjcm9zcyhub3JtYWwsIHZlYzMoMCwgMSwgMCkpO1xcclxcbiAgIH1cXHJcXG4gICB0ZGlyID0gY3Jvc3Mobm9ybWFsLCBzZGlyKTtcXHJcXG4gICByZXR1cm4gciAqIGNvcyhhbmdsZSkgKiBzZGlyICsgciAqIHNpbihhbmdsZSkgKiB0ZGlyICsgc3FydCgxLiAtIHUpICogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICBmbG9hdCB1ID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHYgPSByYW5kb20odmVjMyg2My43MjY0LCAxMC44NzMsIDYyMy42NzM2KSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgeiA9IDEuMCAtIDIuMCAqIHU7XFxyXFxuICAgZmxvYXQgciA9IHNxcnQoMS4wIC0geiAqIHopO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIHJldHVybiB2ZWMzKHIgKiBjb3MoYW5nbGUpLCByICogc2luKGFuZ2xlKSwgeik7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tVmVjdG9yKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIHJldHVybiB1bmlmb3JtbHlSYW5kb21EaXJlY3Rpb24oc2VlZCkgKiBzcXJ0KHJhbmRvbSh2ZWMzKDM2Ljc1MzksIDUwLjM2NTgsIDMwNi4yNzU5KSwgc2VlZCkpO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGluU2hhZG93KHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgZmxvYXQgdExpZ2h0KVxcclxcbntcXHJcXG4gICBmbG9hdCB0QmFsbCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG4gICBpZiAodEJhbGwgPCB0TGlnaHQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiAgIGlmIChpbnRlcnNlY3RPYmoob3JpZ2luLCByYXksIG9iamVjdCkpXFxyXFxuICAge1xcclxcbiAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX1ZPTFVNRVM7IGkrKylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgVm9sdW1lIHZvbCA9IG9iamVjdC52b2x1bWVzW2ldO1xcclxcbiAgICAgICAgIGlmIChpbnRlcnNlY3RWb2wob3JpZ2luLCByYXksIHZvbCkpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSB2b2wuc3RhcnRJbmRleDsgaSA8ICh2b2wuc3RhcnRJbmRleCArIHZvbC5udW1UcmlhbmdsZXMpOyBpKyspXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIFRyaWFuZ2xlIHRyaSA9IGdldFRyaWFuZ2xlKGkpO1xcclxcbiAgICAgICAgICAgICAgIGlmIChpbnRlcnNlY3RUcmlhbmdsZShvcmlnaW4sIHJheSwgdHJpKSA8IHRMaWdodClcXHJcXG4gICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4gICByZXR1cm4gZmFsc2U7XFxyXFxufVxcclxcblxcclxcbi8vIEFsbCBjb21wb25lbnRzIGFyZSBpbiB0aGUgcmFuZ2UgWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IHJnYjJoc3YodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDAuMCwgLTEuMCAvIDMuMCwgMi4wIC8gMy4wLCAtMS4wKTtcXHJcXG4gICB2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSwgdmVjNChjLmdiLCBLLnh5KSwgc3RlcChjLmIsIGMuZykpO1xcclxcbiAgIHZlYzQgcSA9IG1peCh2ZWM0KHAueHl3LCBjLnIpLCB2ZWM0KGMuciwgcC55engpLCBzdGVwKHAueCwgYy5yKSk7XFxyXFxuXFxyXFxuICAgZmxvYXQgZCA9IHEueCAtIG1pbihxLncsIHEueSk7XFxyXFxuICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxyXFxuICAgcmV0dXJuIHZlYzQoYWJzKHEueiArIChxLncgLSBxLnkpIC8gKDYuMCAqIGQgKyBlKSksIGQgLyAocS54ICsgZSksIHEueCwgYy5hKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZVsw4oCmMV0sIGluY2x1ZGluZyBodWUuXFxyXFxudmVjNCBoc3YycmdiKHZlYzQgYylcXHJcXG57XFxyXFxuICAgdmVjNCBLID0gdmVjNCgxLjAsIDIuMCAvIDMuMCwgMS4wIC8gMy4wLCAzLjApO1xcclxcbiAgIHZlYzMgcCA9IGFicyhmcmFjdChjLnh4eCArIEsueHl6KSAqIDYuMCAtIEsud3d3KTtcXHJcXG4gICByZXR1cm4gdmVjNChjLnogKiBtaXgoSy54eHgsIGNsYW1wKHAgLSBLLnh4eCwgMC4wLCAxLjApLCBjLnkpLCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHNoaWZ0VGVtcGVyYXR1cmUodmVjNCByZ2IsIGZsb2F0IGRlZywgZmxvYXQgdGludFN0cmVuZ3RoKVxcclxcbntcXHJcXG4gICB2ZWM0IGhzdiA9IHJnYjJoc3YocmdiKTtcXHJcXG4gICBoc3YueCArPSBkZWcgLyAzNjAuMDtcXHJcXG4gICB2ZWM0IGZ1bGxUaW50UmdiID0gaHN2MnJnYihoc3YpO1xcclxcblxcclxcbiAgIHJldHVybiBtaXgocmdiLCBmdWxsVGludFJnYiwgdGludFN0cmVuZ3RoKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gVE9ETyBtb3ZlIHRvIGEgY29tbW9uIGZpbGVcXHJcXG5mbG9hdCB0b0dyYXkodmVjNCBjKVxcclxcbntcXHJcXG4gICAvLyBsb3RzIG9mIHdheXMgdG8gY29udmVydCBSR0IgdG8gZ3JheSBzY2FsZS5cXHJcXG5cXHJcXG4gICAvLyBzaW1wbGUgYXZlcmFnaW5nIG1ldGhvZFxcclxcbiAgIC8vIHJldHVybiAoYy5yICsgYy5nICsgYy5iKSAvIDMuMDtcXHJcXG5cXHJcXG4gICAvLyByZWxhdGl2ZSBwZXJjZXB0dWFsIHZhbHVlc1xcclxcbiAgIC8vIHJldHVybiAwLjMgKiBjLnIgKyAwLjU5ICogYy5nICsgMC4xMSAqIGMuYjtcXHJcXG5cXHJcXG4gICAvLyBsdW1pbm9zaXR5IG1lYXN1cmVcXHJcXG4gICBmbG9hdCBnYW1tYSA9IDIuMjtcXHJcXG4gICBmbG9hdCB5ID0gMC4yMTI2ICogcG93KGMuciwgZ2FtbWEpICsgMC43MTUyICogcG93KGMuZywgZ2FtbWEpICsgLjA3MjIgKiBwb3coYy5iLCBnYW1tYSk7XFxyXFxuICAgZmxvYXQgbCA9IDExNi4wICogcG93KHksIDEuMCAvIDMuMCkgLSAxNi4wO1xcclxcbiAgIHJldHVybiBsIC8gMTAwLjA7XFxyXFxufVxcclxcblxcclxcbnZlYzQgY2FsY3VsYXRlQ29sb3IodmVjMyBvcmlnaW4sIHZlYzMgcmF5KVxcclxcbntcXHJcXG4gICB2ZWMzIGFjY3VtdWxhdGVkQ29sb3IgPSB2ZWMzKDAuMCk7XFxyXFxuICAgdmVjMyBjb2xvck1hc2sgPSB2ZWMzKDEuMCk7XFxyXFxuICAgdmVjMyBleWUgPSBvcmlnaW47XFxyXFxuICAgYm9vbCBvYmpIaXQgPSBmYWxzZTtcXHJcXG4gICBib29sIG9ialNoYWRvdyA9IGZhbHNlO1xcclxcbiAgIGZsb2F0IHNwZWN1bGFyQ29udHJpYnV0aW9uID0gMC4wO1xcclxcblxcclxcbiAgIC8vIG1haW4gcmF5dHJhY2luZyBsb29wXFxyXFxuICAgZm9yIChpbnQgYm91bmNlID0gMDsgYm91bmNlIDwgTUFYX0JPVU5DRVM7IGJvdW5jZSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBjb21wdXRlIHRoZSBpbnRlcnNlY3Rpb24gd2l0aCBldmVyeXRoaW5nXFxyXFxuICAgICAgZmxvYXQgdEJhbGwgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuICAgICAgdmVjMyBzdXJmYWNlQ29sb3IgPSB2ZWMzKDAuNSwgMC41LCAwLjUpO1xcclxcblxcclxcbiAgICAgIGZsb2F0IHRPYmogPSBJTkZJTklUWTtcXHJcXG4gICAgICBpbnQgdEluZGV4O1xcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgICAgaWYgKGludGVyc2VjdE9iaihvcmlnaW4sIHJheSwgb2JqZWN0KSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fVk9MVU1FUzsgaSsrKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBWb2x1bWUgdm9sID0gb2JqZWN0LnZvbHVtZXNbaV07XFxyXFxuICAgICAgICAgICAgaWYgKGludGVyc2VjdFZvbChvcmlnaW4sIHJheSwgdm9sKSlcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IHZvbC5zdGFydEluZGV4OyBpIDwgKHZvbC5zdGFydEluZGV4ICsgdm9sLm51bVRyaWFuZ2xlcyk7IGkrKylcXHJcXG4gICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUoaSk7XFxyXFxuICAgICAgICAgICAgICAgICAgZmxvYXQgdFRyaSA9IG1pbih0T2JqLCBpbnRlcnNlY3RUcmlhbmdsZShvcmlnaW4sIHJheSwgdHJpKSk7XFxyXFxuICAgICAgICAgICAgICAgICAgaWYgKHRUcmkgPCB0T2JqKVxcclxcbiAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICB0T2JqID0gdFRyaTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICB0SW5kZXggPSBpO1xcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuICAgICAgLy8gaWYgdGhlIGZpcnN0IHJheSBoaXRzIHRoZSBsaWdodCwgcmV0dXJuIHRoZSBsaWdodCBjb2xvci4gVGhpc1xcclxcbiAgICAgIC8vIHNpbXVsYXRlcyBkaXNwbGF5aW5nIHRoZSBsaWdodFxcclxcbiAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGZsb2F0IHRMaWdodCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgTGlnaHRzW2ldLnBvcywgTGlnaHRzW2ldLnNpemUpO1xcclxcbiAgICAgICAgICAgIGlmICh0TGlnaHQgPCB0QmFsbCAmJiB0TGlnaHQgPCB0T2JqKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICByZXR1cm4gdmVjNChMaWdodHNbaV0uaW50ZW5zaXR5ICogTGlnaHRzW2ldLmNvbG9yLCAxLjApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGZpbmQgdGhlIGNsb3Nlc3QgaW50ZXJzZWN0aW9uXFxyXFxuICAgICAgZmxvYXQgdERvbWUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIERPTUVfQ0VOVEVSLCBET01FX1JBRElVUyk7XFxyXFxuICAgICAgZmxvYXQgdEZsb29yID0gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgICAgLy8gY2hlY2sgZm9yIGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmRcXHJcXG4gICAgICBpZiAocmF5LnkgPCAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGRpc3RhbmNlIHRvIGZsb29yID0gbnVtIHVuaXQgdmVjdG9ycyByZXF1aXJlZCB0byByZWFjaCB0aGUgZmxvb3JcXHJcXG4gICAgICAgICB0Rmxvb3IgPSAtb3JpZ2luLnkgLyByYXkueTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBoaXRcXHJcXG4gICAgICBmbG9hdCB0ID0gbWluKG1pbih0RG9tZSwgdEZsb29yKSwgbWluKHRCYWxsLCB0T2JqKSk7XFxyXFxuXFxyXFxuICAgICAgLy8gaW5mbyBhYm91dCBoaXRcXHJcXG4gICAgICB2ZWMzIGhpdCA9IG9yaWdpbiArIHJheSAqIHQ7XFxyXFxuICAgICAgdmVjMyBub3JtYWw7XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub3JtYWxcXHJcXG4gICAgICBpZiAodCA9PSB0Rmxvb3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IEZMT09SX0NPTE9SO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IHZlYzMoMC4wLCAxLjAsIDAuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQgPT0gdEJhbGwpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IHZlYzModU9iakNvbG9yKTtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JTcGhlcmUoaGl0LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcblxcclxcbiAgICAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgb2JqSGl0ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0T2JqKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSB1T2JqQ29sb3I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gbm9ybWFsRm9yVHJpYW5nbGUob3JpZ2luLCBoaXQsIHRJbmRleCk7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpIaXQgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2VuZGlmXFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0RG9tZSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRE9NRV9DT0xPUjtcXHJcXG4gICAgICAgICBub3JtYWwgPSAtbm9ybWFsRm9yU3BoZXJlKGhpdCwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgY29sb3JNYXNrICo9IHN1cmZhY2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgICBpZiAobGVuZ3RoKGNvbG9yTWFzaykgPCAwLjAxKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGNvbXB1dGUgZGlmZnVzZSBsaWdodGluZyBjb250cmlidXRpb25cXHJcXG4gICAgICAgICB2ZWMzIHRvTGlnaHQgPSBMaWdodHNbaV0ucG9zIC0gaGl0O1xcclxcbiAgICAgICAgIHZlYzMgdG9MaWdodE4gPSBub3JtYWxpemUodG9MaWdodCk7XFxyXFxuXFxyXFxuICAgICAgICAgLy8gdHJhY2UgYSBzaGFkb3cgcmF5IHRvIHRoZSBsaWdodFxcclxcbiAgICAgICAgIGlmIChpblNoYWRvdyhoaXQgKyBub3JtYWwgKiBPRkZTRVQsIHRvTGlnaHROLCBsZW5ndGgodG9MaWdodCkpID09IGZhbHNlKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAvLyBkaWZmdXNlIGNvbXBvbmVudFxcclxcbiAgICAgICAgICAgIGZsb2F0IGRpZmZ1c2UgPSBtYXgoMC4wLCBkb3QodG9MaWdodE4sIG5vcm1hbCkpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIHNwZWN1bGFyIGNvbXBvbmVudFxcclxcbiAgICAgICAgICAgIHZlYzMgdG9FeWUgPSBleWUgLSBoaXQ7XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmwgPSB0b0xpZ2h0TjtcXHJcXG4gICAgICAgICAgICB2ZWMzIG4yZSA9IG5vcm1hbGl6ZSh0b0V5ZSk7XFxyXFxuICAgICAgICAgICAgdmVjMyBiaXNlY3RvciA9IChuMmwgKyBuMmUpIC8gbGVuZ3RoKG4ybCArIG4yZSk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc3BlY3VsYXJDb2VmZmljaWVudCA9IDAuNTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzaGluaW5lc3MgPSAxMDAuMDtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzcGVjdWxhciA9IHNwZWN1bGFyQ29lZmZpY2llbnQgKiBwb3cobWF4KDAuMCwgZG90KGJpc2VjdG9yLCBub3JtYWwpKSwgc2hpbmluZXNzKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBhcHBseSBsaWdodCBmYWxsIG9mZiBhcyBkaXN0YW5jZSBzcXVhcmVzLiBVc2UgYSBtaW4gdmFsdWUgZm9yIHRoZVxcclxcbiAgICAgICAgICAgIC8vIGxpZ2h0IHNpemUgb3RoZXJ3aXNlIGZhbGxvZmYgaXMgdG9vIHJhcGlkXFxyXFxuICAgICAgICAgICAgZmxvYXQgcmFkaXVzID0gbWF4KDAuNzUsIExpZ2h0c1tpXS5zaXplKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBkaXN0ID0gbWF4KDEuMCwgKGxlbmd0aCh0b0xpZ2h0KSAtIHJhZGl1cykgLyByYWRpdXMpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IGxpZ2h0SW50ZW5zaXR5ID0gTGlnaHRzW2ldLmludGVuc2l0eSAvIChkaXN0ICogZGlzdCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBjb2xvck1hc2sgKiBMaWdodHNbaV0uY29sb3IgKiBsaWdodEludGVuc2l0eSAqIGRpZmZ1c2U7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gVE9ETyBkZWZpbmUgYSBjb2xvciBtYXNrIGZvciBzcGVjdWxhciByZWZsZWN0aW9uXFxyXFxuICAgICAgICAgICAgLy8gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9IG1peChzdXJmYWNlQ29sb3IsIExpZ2h0c1tpXS5jb2xvciwgMC44KSAqXFxyXFxuICAgICAgICAgICAgLy8gICAgICAgICAgICBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz1cXHJcXG4gICAgICAgICAgICAgICAgKGxlbmd0aChzdXJmYWNlQ29sb3IpICogTGlnaHRzW2ldLmNvbG9yKSAqIGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgaWYgKGJvdW5jZSA9PSAwICYmIGkgPT0gMClcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgc3BlY3VsYXJDb250cmlidXRpb24gKz0gbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIGVsc2UgaWYgKGJvdW5jZSA9PSAwICYmIGkgPT0gMClcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgb2JqU2hhZG93ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGNhbGN1bGF0ZSBuZXh0IG9yaWdpblxcclxcbiAgICAgIHJheSA9IGNvc2luZVdlaWdodGVkRGlyZWN0aW9uKHVSYW5kb20gKyBmbG9hdChib3VuY2UpLCBub3JtYWwpO1xcclxcblxcclxcbiAgICAgIG9yaWdpbiA9IGhpdDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgZmxvYXQgYWxwaGEgPSAxLjA7XFxyXFxuICAgaWYgKG9iakhpdClcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKG9ialNoYWRvdylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1U2hhZG93QWxwaGE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1TGlnaHRBbHBoYTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYWxwaGEgKz0gY2xhbXAoc3BlY3VsYXJDb250cmlidXRpb24sIDAuMCwgMS4wKTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgdmVjNCBzY2llbmNlQ29sb3IgPSB2ZWM0KGNsYW1wKGFjY3VtdWxhdGVkQ29sb3IsIDAuMCwgMS4wKSwgYWxwaGEpO1xcclxcbiAgIHJldHVybiBzY2llbmNlQ29sb3I7XFxyXFxuICAgLypcXHJcXG4gICBpZiAob2JqSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdmVjNCh0b0FydGlzdChzY2llbmNlQ29sb3IpLnJnYiwgYWxwaGEpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBzY2llbmNlQ29sb3I7XFxyXFxuICAgfVxcclxcbiAgICovXFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHZlYzMgcmFuZCA9IHVuaWZvcm1seVJhbmRvbVZlY3Rvcih1UmFuZG9tKSAqIExJR0hUX1NJWkU7XFxyXFxuXFxyXFxuICAgTGlnaHRzWzBdLmludGVuc2l0eSA9IHVMaWdodEludGVuc2l0eTtcXHJcXG4gICBMaWdodHNbMF0uc2l6ZSA9IExJR0hUX1NJWkU7XFxyXFxuICAgTGlnaHRzWzBdLnBvcyA9IHVMaWdodFBvcyArIHJhbmQ7XFxyXFxuICAgTGlnaHRzWzBdLmNvbG9yID0gdUxpZ2h0Q29sb3I7XFxyXFxuXFxyXFxuICAgZm9yIChpbnQgaSA9IDE7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHggPSBSQURJVVMgKiBzaW4oMi4wICogUEkgKiBmbG9hdChpKSAvIChmbG9hdChOVU1fTElHSFRTKSAtIDEuMCkpICsgcmFuZC54O1xcclxcbiAgICAgIGZsb2F0IHkgPSBIRUlHSFQgKyByYW5kLnk7XFxyXFxuICAgICAgZmxvYXQgeiA9IFJBRElVUyAqIGNvcygyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLno7XFxyXFxuXFxyXFxuICAgICAgTGlnaHRzW2ldLmludGVuc2l0eSA9IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxuICAgICAgTGlnaHRzW2ldLnNpemUgPSAyLjAgKiBMSUdIVF9TSVpFO1xcclxcbiAgICAgIExpZ2h0c1tpXS5wb3MgPSB2ZWMzKHgsIHksIHopO1xcclxcbiAgICAgIExpZ2h0c1tpXS5jb2xvciA9IEFNQklFTlRfQ09MT1I7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC8vIG1lcmdlIHRoZSBuZXcgY29sb3IgaW50byB0aGUgZXhpc3RpbmcgdGV4dHVyZVxcclxcbiAgIHZlYzQgdGV4dHVyZUNvbG9yID0gdGV4dHVyZSh1VGV4dHVyZSwgZ2xfRnJhZ0Nvb3JkLnh5IC8gdVRleHR1cmVTaXplKTtcXHJcXG4gICB2ZWM0IG5ld0NvbG9yID0gY2FsY3VsYXRlQ29sb3IodUV5ZSwgaW5pdGlhbFJheSk7XFxyXFxuICAgZmxvYXQgd2VpZ2h0ID0gKHVTYW1wbGUgLyAoMS4wICsgdVNhbXBsZSkpO1xcclxcbiAgIGZyYWdDb2xvciA9IG1peChuZXdDb2xvciwgdGV4dHVyZUNvbG9yLCB3ZWlnaHQpO1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiPFZFUlNJT04+XFxyXFxuXFxyXFxuI2RlZmluZSBOT1RISU5HXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4jZGVmaW5lIEVTMzAwXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnVuaWZvcm0gdmVjMyB1RXllLCB1UmF5MDAsIHVSYXkwMSwgdVJheTEwLCB1UmF5MTE7XFxyXFxuXFxyXFxuI2lmZGVmIEVTMzAwXFxyXFxuaW4gdmVjMyB2ZXJ0ZXg7XFxyXFxub3V0IHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZWxzZVxcclxcbmF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZW5kaWYgXFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdmVjMiBwZXJjZW50ID0gdmVydGV4Lnh5ICogMC41ICsgMC41O1xcclxcbiAgIGluaXRpYWxSYXkgPSBtaXgobWl4KHVSYXkwMCwgdVJheTAxLCBwZXJjZW50LnkpLCBtaXgodVJheTEwLCB1UmF5MTEsIHBlcmNlbnQueSksIHBlcmNlbnQueCk7XFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHZlcnRleCwgMS4wKTtcXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5cXHJcXG4vLyBpbnRlcnBvbGF0ZWQgdmFsdWVzIGZyb20gdGhlIHZlcnRleCBzaGFkZXJcXHJcXG52YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXHJcXG52YXJ5aW5nIHZlYzMgdlZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHREaXJlY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMzIHVDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIGludCB1VXNlVGhyZXNob2xkcztcXHJcXG51bmlmb3JtIGZsb2F0IHVUaHJlc2hvbGQxO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRocmVzaG9sZDI7XFxyXFxudW5pZm9ybSBmbG9hdCB1SGlnaGxpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0TGlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1TWlkTGlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1RGFya0xpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvdztcXHJcXG5cXHJcXG51bmlmb3JtIGludCB1VXNlU2hhZG93cztcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2hhZG93VGV4dHVyZTtcXHJcXG5cXHJcXG5ib29sIGluX3NoYWRvdyh2b2lkKVxcclxcbntcXHJcXG4gICBpZiAodVVzZVNoYWRvd3MgPT0gMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBUaGUgdmVydGV4IGxvY2F0aW9uIHJlbmRlcmVkIGZyb20gdGhlIGxpZ2h0IHNvdXJjZSBpcyBhbG1vc3QgaW4gTm9ybWFsaXplZFxcclxcbiAgIC8vIERldmljZSBDb29yZGluYXRlcyAoTkRDKSwgYnV0IHRoZSBwZXJzcGVjdGl2ZSBkaXZpc2lvbiBoYXMgbm90IGJlZW5cXHJcXG4gICAvLyBwZXJmb3JtZWQgeWV0LiBQZXJmb3JtIHRoZSBwZXJzcGVjdGl2ZSBkaXZpZGUuIFRoZSAoeCx5LHopIHZlcnRleCBsb2NhdGlvblxcclxcbiAgIC8vIGNvbXBvbmVudHMgYXJlIG5vdyBlYWNoIGluIHRoZSByYW5nZSBbLTEuMCwrMS4wXS5cXHJcXG4gICAvLyB2ZWMzIHZlcnRleF9yZWxhdGl2ZV90b19saWdodCA9IHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnh5eiAvIHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnc7XFxyXFxuICAgdmVjMyB2ZXJ0ZXggPSB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbiAgIC8vIENvbnZlcnQgdGhlIHRoZSB2YWx1ZXMgZnJvbSBOb3JtYWxpemVkIERldmljZSBDb29yZGluYXRlcyAocmFuZ2UgWy0xLjAsKzEuMF0pXFxyXFxuICAgLy8gdG8gdGhlIHJhbmdlIFswLjAsMS4wXS4gVGhpcyBtYXBwaW5nIGlzIGRvbmUgYnkgc2NhbGluZ1xcclxcbiAgIC8vIHRoZSB2YWx1ZXMgYnkgMC41LCB3aGljaCBnaXZlcyB2YWx1ZXMgaW4gdGhlIHJhbmdlIFstMC41LCswLjVdIGFuZCB0aGVuXFxyXFxuICAgLy8gc2hpZnRpbmcgdGhlIHZhbHVlcyBieSArMC41LlxcclxcbiAgIHZlcnRleCA9IHZlcnRleCAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICAvLyBHZXQgdGhlIHogdmFsdWUgb2YgdGhpcyBmcmFnbWVudCBpbiByZWxhdGlvbnNoaXAgdG8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAvLyBUaGlzIHZhbHVlIHdhcyBzdG9yZWQgaW4gdGhlIHNoYWRvdyBtYXAgKGRlcHRoIGJ1ZmZlciBvZiB0aGUgZnJhbWUgYnVmZmVyKVxcclxcbiAgIC8vIHdoaWNoIHdhcyBwYXNzZWQgdG8gdGhlIHNoYWRlciBhcyBhIHRleHR1cmUgbWFwLlxcclxcbiAgIC8vIHZlYzQgdGV4dHVyZVZhbHVlID0gdGV4dHVyZTJEKHVTaGFkb3dTYW1wbGVyLCB2ZXJ0ZXgueHkpO1xcclxcblxcclxcbiAgIC8vIFRoZSB0ZXh0dXJlIG1hcCBjb250YWlucyBhIHNpbmdsZSBkZXB0aCB2YWx1ZSBmb3IgZWFjaCBwaXhlbC4gSG93ZXZlcixcXHJcXG4gICAvLyB0aGUgdGV4dHVyZTJEIHNhbXBsZXIgYWx3YXlzIHJldHVybnMgYSBjb2xvciBmcm9tIGEgdGV4dHVyZS4gRm9yIGFcXHJcXG4gICAvLyBnbC5ERVBUSF9DT01QT05FTlQgdGV4dHVyZSwgdGhlIGNvbG9yIGNvbnRhaW5zIHRoZSBkZXB0aCB2YWx1ZSBpblxcclxcbiAgIC8vIGVhY2ggb2YgdGhlIGNvbG9yIGNvbXBvbmVudHMuIElmIHRoZSB2YWx1ZSB3YXMgZCwgdGhlbiB0aGUgY29sb3IgcmV0dXJuZWRcXHJcXG4gICAvLyBpcyAoZCxkLGQsMSkuIFRoaXMgaXMgYSBcXFwiY29sb3JcXFwiIChkZXB0aCkgdmFsdWUgYmV0d2VlbiBbMC4wLCsxLjBdLlxcclxcbiAgIGZsb2F0IHNoYWRvd21hcF9kaXN0YW5jZSA9IHRleHR1cmUyRCh1U2hhZG93VGV4dHVyZSwgdmVydGV4Lnh5KS5yO1xcclxcblxcclxcbiAgIC8vIFRlc3QgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBmcmFnbWVudCBhbmQgdGhlIGxpZ2h0IHNvdXJjZSBhc1xcclxcbiAgIC8vIGNhbGN1bGF0ZWQgdXNpbmcgdGhlIHNoYWRvd21hcCB0cmFuc2Zvcm1hdGlvbiAodmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0LnopIGFuZFxcclxcbiAgIC8vIHRoZSBzbWFsbGVzdCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjbG9zZXN0IGZyYWdtZW50IHRvIHRoZSBsaWdodCBzb3VyY2VcXHJcXG4gICAvLyBmb3IgdGhpcyBsb2NhdGlvbiwgYXMgc3RvcmVkIGluIHRoZSBzaGFkb3dtYXAuIFdoZW4gdGhlIGNsb3Nlc3RcXHJcXG4gICAvLyBkaXN0YW5jZSB0byB0aGUgbGlnaHQgc291cmNlIHdhcyBzYXZlZCBpbiB0aGUgc2hhZG93bWFwLCBzb21lXFxyXFxuICAgLy8gcHJlY2lzaW9uIHdhcyBsb3N0LiBUaGVyZWZvcmUgd2UgbmVlZCBhIHNtYWxsIHRvbGVyYW5jZSBmYWN0b3IgdG9cXHJcXG4gICAvLyBjb21wZW5zYXRlIGZvciB0aGUgbG9zdCBwcmVjaXNpb24uXFxyXFxuICAgZmxvYXQgdG9sID0gMC4wMDE7XFxyXFxuICAgaWYgKHZlcnRleC56IDw9IHNoYWRvd21hcF9kaXN0YW5jZSArIHRvbClcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gVGhpcyBzdXJmYWNlIHJlY2VpdmVzIGZ1bGwgbGlnaHQgYmVjYXVzZSBpdCBpcyB0aGUgY2xvc2VzdCBzdXJmYWNlXFxyXFxuICAgICAgLy8gdG8gdGhlIGxpZ2h0LlxcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBUaGlzIHN1cmZhY2UgaXMgaW4gYSBzaGFkb3cgYmVjYXVzZSB0aGVyZSBpcyBhIGNsb3NlciBzdXJmYWNlIHRvXFxyXFxuICAgICAgLy8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGlmIChpbl9zaGFkb3coKSlcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKHVVc2VUaHJlc2hvbGRzID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodmVjMyh1QW1iaWVudEludGVuc2l0eSksIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2ZWMzKHVTaGFkb3cpLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICByZXR1cm47XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzMgZXllID0gdmVjMygwLjAsIDAuMCwgLTEwLjApO1xcclxcbiAgIHZlYzMgdG9MaWdodCA9IG5vcm1hbGl6ZSgtdUxpZ2h0RGlyZWN0aW9uKTtcXHJcXG4gICB2ZWMzIHRvRXllID0gbm9ybWFsaXplKGV5ZSAtIHZWZXJ0ZXgpO1xcclxcbiAgIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZOb3JtYWwpOyAvLyB2Tm9ybWFsIGlzIGludGVycG9sYXRlZCBhbmQgbm8gbG9uZyBub3JtYWxcXHJcXG5cXHJcXG4gICAvLyBjb21wdXRlIGRpZmZ1c2UgY29udHJpYnV0aW9uID0gY29zIG9mIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvcnMgKGRvdCBwcm9kdWN0KVxcclxcbiAgIGZsb2F0IGRpZmZ1c2VGYWN0b3IgPSBjbGFtcChkb3Qobm9ybWFsLCB0b0xpZ2h0KSwgMC4wLCAxLjApO1xcclxcbiAgIGZsb2F0IGRpZmZ1c2UgPSBkaWZmdXNlRmFjdG9yICogdUxpZ2h0SW50ZW5zaXR5O1xcclxcblxcclxcbiAgIC8vIGNvbXB1dGUgc3BlY3VsYXIgY29udHJpYnV0aW9uXFxyXFxuICAgZmxvYXQgc2hpbmluZXNzID0gMTUuMDtcXHJcXG4gICB2ZWMzIHJlZmxlY3Rpb24gPSBub3JtYWxpemUoMi4wICogZG90KG5vcm1hbCwgdG9MaWdodCkgKiBub3JtYWwgLSB0b0xpZ2h0KTtcXHJcXG4gICBmbG9hdCBjb3NBbmdsZSA9IGNsYW1wKGRvdChyZWZsZWN0aW9uLCB0b0V5ZSksIDAuMCwgMS4wKTsgLy8gY2xhbXAgdG8gYXZvaWQgdmFsdWVzID4gOTAgZGVnXFxyXFxuICAgZmxvYXQgc3BlY3VsYXIgPSAwLjEgKiBwb3coY29zQW5nbGUsIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgZmxvYXQgcmdiO1xcclxcbiAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICByZ2IgPSB1QW1iaWVudEludGVuc2l0eSArIGRpZmZ1c2UgKyBzcGVjdWxhcjtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB0aHJlc2hvbGQgPSAxLjAgLSBkaWZmdXNlRmFjdG9yO1xcclxcblxcclxcbiAgICAgIGZsb2F0IHYxID0gbWluKHVUaHJlc2hvbGQxLCB1VGhyZXNob2xkMik7XFxyXFxuICAgICAgZmxvYXQgdjIgPSBtYXgodVRocmVzaG9sZDEsIHVUaHJlc2hvbGQyKTtcXHJcXG5cXHJcXG4gICAgICBpZiAodGhyZXNob2xkIDwgdjEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVMaWdodExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCB2MilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmdiID0gdU1pZExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCAxLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVEYXJrTGlnaHQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmdiID0gdVNoYWRvdztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHNwZWN1bGFyID4gMC4wNSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmdiID0gdUhpZ2hsaWdodDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzMgcmdidiA9IHZlYzMocmdiLCByZ2IsIHJnYik7XFxyXFxuICAgcmdidiAqPSB1Q29sb3I7XFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChyZ2J2LCAxLjApO1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiYXR0cmlidXRlIHZlYzMgYVZlcnRleDtcXHJcXG5hdHRyaWJ1dGUgdmVjMyBhTm9ybWFsO1xcclxcblxcclxcbnVuaWZvcm0gbWF0NCBtb2RlbDtcXHJcXG51bmlmb3JtIG1hdDQgdmlldztcXHJcXG51bmlmb3JtIG1hdDQgc2hhZG93VmlldztcXHJcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXHJcXG52YXJ5aW5nIHZlYzMgdlZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCk7XFxyXFxuICAgdk5vcm1hbCA9IChtb2RlbCAqIHZlYzQoYU5vcm1hbCwgMC4wKSkueHl6O1xcclxcbiAgIHZWZXJ0ZXggPSAobW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCkpLnh5ejtcXHJcXG4gICB2U2hhZG93VmVydGV4ID0gKHNoYWRvd1ZpZXcgKiBtb2RlbCAqIHZlYzQoYVZlcnRleCwgMS4wKSkueHl6O1xcclxcbn1cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=