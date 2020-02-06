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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n  margin: 0px;\r\n}\r\n\r\n/* Mouse-over effects */\r\n.slider:hover {\r\n  opacity: 1; /* Fully shown on mouse-over */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 60%;\r\n  height: 5px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: 0.2s;\r\n  transition: opacity 0.2s;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background: #4caf50;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background: #4caf50;\r\n  cursor: pointer;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  width: 20%;\r\n  text-align: right;\r\n}\r\n\r\n#ballColorSpan {\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 20px;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .slider {\r\n    width: 50%;\r\n    height: 10px;\r\n    border-radius: 10px;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .slider::-webkit-slider-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  .slider::-moz-range-thumb {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  #ballColorSpan {\r\n    width: 80px;\r\n    height: 40px;\r\n  }\r\n\r\n  label {\r\n    width: 30%;\r\n    font-size: 40px;\r\n  }\r\n  #temperatureSpan {\r\n    font-size: 40px;\r\n  }\r\n}\r\n", ""]);
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

/***/ "./src/ColorRange.ts":
/*!***************************!*\
  !*** ./src/ColorRange.ts ***!
  \***************************/
/*! exports provided: ColorRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorRange", function() { return ColorRange; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./src/Color.ts");

var ColorRange = /** @class */ (function () {
    function ColorRange(colors) {
        this.colors = colors;
    }
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
            var r = this.colors[index].r + partial * (this.colors[index + 1].r - this.colors[index].r);
            var g = this.colors[index].g + partial * (this.colors[index + 1].g - this.colors[index].g);
            var b = this.colors[index].b + partial * (this.colors[index + 1].b - this.colors[index].b);
            return new _Color__WEBPACK_IMPORTED_MODULE_0__["Color"]([r, g, b]);
        }
    };
    return ColorRange;
}());



/***/ }),

/***/ "./src/LightColors.ts":
/*!****************************!*\
  !*** ./src/LightColors.ts ***!
  \****************************/
/*! exports provided: LightColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightColors", function() { return LightColors; });
/* harmony import */ var _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glColorWithTemperature */ "./src/glColorWithTemperature.ts");

/**
 * Class for getting RGB values for color temperatures. RGB values
 * are between 0 and 1.
 */
var LightColors = /** @class */ (function () {
    function LightColors() {
    }
    Object.defineProperty(LightColors, "daylight", {
        get: function () {
            return this.toRGB(6000);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LightColors, "minTemperature", {
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
    Object.defineProperty(LightColors, "maxTemperature", {
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
    LightColors.toRGB = function (temperature) {
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
                    return new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([r, g, b], temperature);
                }
            }
            // shouldn't get here, but if we do, return the last color
            return this.colors[this.colors.length - 1];
        }
    };
    /**
     * Known color values. For other requests the class will return interpolated values
     */
    LightColors.colors = [
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([255 / 255, 147 / 255, 41 / 255], 1900),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([255 / 255, 197 / 255, 143 / 255], 2600),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([255 / 255, 214 / 255, 170 / 255], 2850),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([255 / 255, 241 / 255, 224 / 255], 3200),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([255 / 255, 250 / 255, 244 / 255], 5200),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([255 / 255, 255 / 255, 251 / 255], 5400),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([255 / 255, 255 / 255, 255 / 255], 6000),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([201 / 255, 226 / 255, 255 / 255], 7000),
        new _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_0__["glColorWithTemperature"]([64 / 255, 156 / 255, 255 / 255], 20000),
    ];
    return LightColors;
}());



/***/ }),

/***/ "./src/PathTracer.ts":
/*!***************************!*\
  !*** ./src/PathTracer.ts ***!
  \***************************/
/*! exports provided: PathTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathTracer", function() { return PathTracer; });
/* harmony import */ var _Shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shaders */ "./src/Shaders.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _toScreenVertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toScreenVertex.glsl */ "./src/toScreenVertex.glsl");
/* harmony import */ var _toScreenFragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toScreenFragment.glsl */ "./src/toScreenFragment.glsl");
/* harmony import */ var _toTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toTextureVertex.glsl */ "./src/toTextureVertex.glsl");
/* harmony import */ var _toTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toTextureFragment.glsl */ "./src/toTextureFragment.glsl");
/*
 WebGL Path Tracing (http://madebyevan.com/webgl-path-tracing/)
 License: MIT License (see below)

 Copyright (c) 2010 Evan Wallace

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
*/








/**
 * Rendering mode for displaying the texture
 */
var RenderMode;
(function (RenderMode) {
    RenderMode[RenderMode["Color"] = 0] = "Color";
    RenderMode[RenderMode["Value"] = 1] = "Value";
    RenderMode[RenderMode["Chroma"] = 2] = "Chroma";
})(RenderMode || (RenderMode = {}));
/**
 * Values that are passed to the shader
 */
var ToScreenUniforms = {
    uScale: 1.0,
    uXOffset: 0.0,
    uYOffset: 0.0,
    uMode: 0,
    uMaxChroma: 1.0,
};
var PathTracer = /** @class */ (function () {
    function PathTracer() {
        this.mainView = RenderMode.Color;
        this.smallViews = [RenderMode.Chroma, RenderMode.Value];
        this.vertices = [
            -1, -1,
            -1, +1,
            +1, -1,
            +1, +1
        ];
        // create vertex buffer - the block we'll draw our rendered texture on
        this.vertexBuffer = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].createBuffer();
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindBuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bufferData(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, new Float32Array(this.vertices), _index__WEBPACK_IMPORTED_MODULE_3__["gl"].STATIC_DRAW);
        // create framebuffer
        this.frameBuffer = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].createFramebuffer();
        // create textures
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getExtension('EXT_color_buffer_float');
        // create two textures. One we display and one we draw to
        this.textures = [];
        for (var i = 0; i < 2; i++) {
            this.textures.push(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].createTexture());
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[i]);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texParameteri(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_MAG_FILTER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].NEAREST);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texParameteri(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_MIN_FILTER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].NEAREST);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texImage2D(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, // target
            0, // level
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA32F, // internal format
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, // width
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, // height
            0, // border
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA, // format
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, // type
            null // pixels
            );
        }
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, null);
        // create render shader
        this.renderProgram = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].compileShader(_toScreenVertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"], _toScreenFragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"]);
        this.renderVertexAttribute = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getAttribLocation(this.renderProgram, 'vertex');
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].enableVertexAttribArray(this.renderVertexAttribute);
        this.tracerProgram = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].compileShader(_toTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_6__["default"], _toTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_7__["default"]);
        this.tracerVertexAttribute = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getAttribLocation(this.tracerProgram, 'vertex');
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].enableVertexAttribArray(this.tracerVertexAttribute);
    }
    ;
    PathTracer.prototype.restart = function () {
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uSample = 0;
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uPass = 0;
    };
    PathTracer.prototype.updateTexture = function (modelviewProjection, timeSinceStart) {
        // implement aliasing by random sampling within a pixel
        var x = (Math.random() * 2 - 1) / _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize;
        var y = (Math.random() * 2 - 1) / _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize;
        var z = 0;
        var v = new _glVec__WEBPACK_IMPORTED_MODULE_2__["glVec3"]([x, y, z]);
        var jitter = _glMat__WEBPACK_IMPORTED_MODULE_1__["glMat4"].fromTranslation(v);
        var matrix = jitter.multM(modelviewProjection).invert();
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uRay00 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, -1, -1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uRay01 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, -1, +1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uRay10 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, +1, -1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uRay11 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, +1, +1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTimeSinceStart = timeSinceStart;
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureWeight = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uSample / (_Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uSample + 1);
        // set uniforms
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.tracerProgram);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.tracerProgram, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"]);
        // render to texture
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].viewport(0, 0, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.tracerProgram);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[0]);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindBuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindFramebuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, this.frameBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].framebufferTexture2D(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].COLOR_ATTACHMENT0, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[1], 0);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].vertexAttribPointer(this.tracerVertexAttribute, 2, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, false, 0, 0);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        ToScreenUniforms.uMaxChroma = this.getMaxChroma();
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindFramebuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, null);
        // ping pong textures
        this.textures.reverse();
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uPass++;
        if (_Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uPass == _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uNumPasses) {
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uPass = 0;
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uSample++;
        }
    };
    ;
    PathTracer.prototype.getMaxChroma = function () {
        var size = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize;
        if (this.pixels === undefined) {
            this.pixels = new Float32Array(size * size * 4);
        }
        //      let t1 = window.performance.now();
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].readPixels(0, 0, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, this.pixels);
        var maxChroma = 0;
        for (var row = 0; row < size; row++) {
            for (var col = 0; col < size; col++) {
                var index = (row * size + col) * 4;
                var r = this.pixels[index + 0];
                var g = this.pixels[index + 1];
                var b = this.pixels[index + 2];
                var avg = (r + g + b) / 3;
                var chroma = (Math.abs(r - avg) + Math.abs(g - avg) + Math.abs(b - avg)) / (4 / 3);
                if (chroma > maxChroma) {
                    maxChroma = chroma;
                }
            }
        }
        //      let t2 = window.performance.now();
        //      console.log((t2 - t1) + " ms " + maxChroma);
        return maxChroma;
    };
    PathTracer.prototype.displayTexture = function () {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        var size = document.body.clientWidth;
        if (isMobile === false) {
            size = 512;
        }
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.width = size;
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.height = size;
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].viewport(0, 0, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.width, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.height);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.renderProgram);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[0]);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindBuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].vertexAttribPointer(this.renderVertexAttribute, 2, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, false, 0, 0);
        // display the main screen
        ToScreenUniforms.uScale = 1.0;
        ToScreenUniforms.uXOffset = 0.0;
        ToScreenUniforms.uYOffset = 0.0;
        ToScreenUniforms.uMode = this.mainView;
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.renderProgram, ToScreenUniforms);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        // display the smaller views
        ToScreenUniforms.uScale = 0.25;
        ToScreenUniforms.uXOffset = 0.25;
        ToScreenUniforms.uYOffset = 0.75;
        ToScreenUniforms.uMode = this.smallViews[0];
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.renderProgram, ToScreenUniforms);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        ToScreenUniforms.uScale = 0.25;
        ToScreenUniforms.uXOffset = 0.75;
        ToScreenUniforms.uYOffset = 0.75;
        ToScreenUniforms.uMode = this.smallViews[1];
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.renderProgram, ToScreenUniforms);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
    };
    PathTracer.prototype.swap = function (pos) {
        var tmp = this.smallViews[pos];
        this.smallViews[pos] = this.mainView;
        this.mainView = tmp;
        this.displayTexture();
    };
    return PathTracer;
}());



/***/ }),

/***/ "./src/Shaders.ts":
/*!************************!*\
  !*** ./src/Shaders.ts ***!
  \************************/
/*! exports provided: Uniforms, Shaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uniforms", function() { return Uniforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shaders", function() { return Shaders; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");



/**
 * Values that are passed to the shader
 */
var Uniforms = {
    uLightIntensity: 0.7,
    uLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]([1.0, 1.0, 1.0]),
    uLightPos: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([-0.6, 0.7, 0.8]),
    uAmbientLightIntensity: 0.3,
    uBallColor: new _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]([0.5, 0.5, 0.8]),
    uEye: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    uTextureSize: 256,
    uTextureWeight: 0,
    uTimeSinceStart: 0,
    uRay00: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    uRay01: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    uRay10: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    uRay11: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    uPass: 0.0,
    uNumPasses: 1.0,
    uSample: 0.0,
};
var Shaders = /** @class */ (function () {
    function Shaders() {
    }
    Shaders.getEyeRay = function (matrix, x, y) {
        var vec = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec4"]([x, y, 0, 1]);
        return matrix.multV(vec).divideByW().subtract(Uniforms.uEye);
    };
    Shaders.setUniforms = function (program, uniforms) {
        for (var name in uniforms) {
            var value = uniforms[name];
            var location = _index__WEBPACK_IMPORTED_MODULE_1__["gl"].getUniformLocation(program, name);
            if (location == null)
                continue;
            else if (value instanceof _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]) {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform3fv(location, new Float32Array([value.get(0), value.get(1), value.get(2)]));
            }
            else if (value instanceof _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]) {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform3fv(location, new Float32Array([value.r, value.g, value.b]));
            }
            else if (name === "uMode") {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform1i(location, value);
            }
            else {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform1f(location, value);
            }
        }
    };
    Shaders.compileSource = function (source, type) {
        var shader = _index__WEBPACK_IMPORTED_MODULE_1__["gl"].createShader(type);
        _index__WEBPACK_IMPORTED_MODULE_1__["gl"].shaderSource(shader, source);
        _index__WEBPACK_IMPORTED_MODULE_1__["gl"].compileShader(shader);
        if (!_index__WEBPACK_IMPORTED_MODULE_1__["gl"].getShaderParameter(shader, _index__WEBPACK_IMPORTED_MODULE_1__["gl"].COMPILE_STATUS)) {
            throw 'compile error: ' + _index__WEBPACK_IMPORTED_MODULE_1__["gl"].getShaderInfoLog(shader);
        }
        return shader;
    };
    Shaders.compileShader = function (vertexSource, fragmentSource) {
        var shaderProgram = _index__WEBPACK_IMPORTED_MODULE_1__["gl"].createProgram();
        _index__WEBPACK_IMPORTED_MODULE_1__["gl"].attachShader(shaderProgram, Shaders.compileSource(vertexSource, _index__WEBPACK_IMPORTED_MODULE_1__["gl"].VERTEX_SHADER));
        _index__WEBPACK_IMPORTED_MODULE_1__["gl"].attachShader(shaderProgram, Shaders.compileSource(fragmentSource, _index__WEBPACK_IMPORTED_MODULE_1__["gl"].FRAGMENT_SHADER));
        _index__WEBPACK_IMPORTED_MODULE_1__["gl"].linkProgram(shaderProgram);
        if (!_index__WEBPACK_IMPORTED_MODULE_1__["gl"].getProgramParameter(shaderProgram, _index__WEBPACK_IMPORTED_MODULE_1__["gl"].LINK_STATUS)) {
            throw 'link error: ' + _index__WEBPACK_IMPORTED_MODULE_1__["gl"].getProgramInfoLog(shaderProgram);
        }
        return shaderProgram;
    };
    return Shaders;
}());



/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _Shaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shaders */ "./src/Shaders.ts");
/* harmony import */ var _PathTracer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathTracer */ "./src/PathTracer.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/index.ts");





var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.tracer = new _PathTracer__WEBPACK_IMPORTED_MODULE_2__["PathTracer"]();
        this.count = 0;
        this.start = new Date().getTime();
        requestAnimationFrame(function () { return _this.tick(); });
    }
    App.prototype.updateTexture = function (timeSinceStart) {
        this.modelview = _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"].makeLookAt(_Shaders__WEBPACK_IMPORTED_MODULE_1__["Uniforms"].uEye, new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]), // center point
        new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 1, 0]) // up vector
        );
        this.projection = _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"].makePerspective(55, 1, 0.1, 100);
        this.modelviewProjection = this.projection.multM(this.modelview);
        this.tracer.updateTexture(this.modelviewProjection, timeSinceStart);
    };
    ;
    App.prototype.displayTexture = function () {
        this.tracer.displayTexture();
    };
    ;
    App.prototype.restart = function () {
        this.count = 0;
        this.tracer.restart();
    };
    App.prototype.swap = function (pos) {
        this.tracer.swap(pos);
    };
    App.prototype.tick = function () {
        var _this = this;
        this.count++;
        var timeSinceStart = ((new Date()).getTime() - this.start) * 0.001;
        if (this.count < 150) {
            _Shaders__WEBPACK_IMPORTED_MODULE_1__["Uniforms"].uEye.set(0, _index__WEBPACK_IMPORTED_MODULE_4__["zoomZ"] * Math.sin(_index__WEBPACK_IMPORTED_MODULE_4__["angleY"]) * Math.cos(_index__WEBPACK_IMPORTED_MODULE_4__["angleX"]));
            _Shaders__WEBPACK_IMPORTED_MODULE_1__["Uniforms"].uEye.set(1, _index__WEBPACK_IMPORTED_MODULE_4__["zoomZ"] * Math.sin(_index__WEBPACK_IMPORTED_MODULE_4__["angleX"]));
            _Shaders__WEBPACK_IMPORTED_MODULE_1__["Uniforms"].uEye.set(2, _index__WEBPACK_IMPORTED_MODULE_4__["zoomZ"] * Math.cos(_index__WEBPACK_IMPORTED_MODULE_4__["angleY"]) * Math.cos(_index__WEBPACK_IMPORTED_MODULE_4__["angleX"]));
            this.updateTexture(timeSinceStart);
            this.displayTexture();
        }
        requestAnimationFrame(function () { return _this.tick(); });
    };
    return App;
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
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        _this.temperature = temperature;
        return _this;
    }
    return glColorWithTemperature;
}(_glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]));



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
            this.values = values.slice();
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
                sum += this.values[row * 4 + col] * vec.get(col);
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
        this.values[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        this.values[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        this.values[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        this.values[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        this.values[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        this.values[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        this.values[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        this.values[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        this.values[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        this.values[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        this.values[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        this.values[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        this.values[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        this.values[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        this.values[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        this.values[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return this;
    };
    /**
     * Transposes this matrix and returns the result (this).
     *
     * @returns This.
     */
    glMat4.prototype.transpose = function () {
        var result = new glMat4();
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                result.set(row, col, this.get(col, row));
            }
        }
        this.values = result.values;
        return this;
    };
    /**
     * Creates a matrix that contains a translation operation.
     *
     * @param vec The translations.
     * @returns The translation matrix.
     */
    glMat4.fromTranslation = function (v) {
        var result = new glMat4([
            1, 0, 0, v.get(0),
            0, 1, 0, v.get(1),
            0, 0, 1, v.get(2),
            0, 0, 0, 1
        ]);
        return result;
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
        // clone so we don't modify the origonals
        var z = eye.clone().subtract(center).normalize();
        var x = up.clone().cross(z).normalize();
        var y = z.clone().cross(x).normalize();
        var m = new glMat4([
            x.get(0), x.get(1), x.get(2), 0,
            y.get(0), y.get(1), y.get(2), 0,
            z.get(0), z.get(1), z.get(2), 0,
            0, 0, 0, 1
        ]);
        var t = new glMat4([
            1, 0, 0, -eye.get(0),
            0, 1, 0, -eye.get(1),
            0, 0, 1, -eye.get(2),
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
    return glMat4;
}());



/***/ }),

/***/ "./src/glVec.ts":
/*!**********************!*\
  !*** ./src/glVec.ts ***!
  \**********************/
/*! exports provided: glVec3, glVec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVec3", function() { return glVec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVec4", function() { return glVec4; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Vector class for use with WebGL applications.
 */
var glVec = /** @class */ (function () {
    /**
     * @param valuesOrSize If a array, the values for the vector. If a number, the size of the vector.
     */
    function glVec(valuesOrSize) {
        if (valuesOrSize instanceof Array) {
            this.values = valuesOrSize.slice();
        }
        else {
            this.values = new Array(valuesOrSize);
            for (var i = 0; i < valuesOrSize; i++) {
                this.values[i] = 0;
            }
        }
    }
    /**
     * Gets a value in the vector.
     *
     * @param index The element index.
     * @returns The element value.
     */
    glVec.prototype.get = function (index) {
        return this.values[index];
    };
    /**
     * Sets a value in the vector.
     *
     * @param index The element index.
     * @param value The element value.
     */
    glVec.prototype.set = function (index, value) {
        this.values[index] = value;
    };
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
    /**
     * Normalizes this vector, and stores and returns the result.
     *
     * @returns The resulting normalized vector.
     */
    glVec.prototype.normalize = function () {
        var mag = this.magnitude();
        if (mag !== 0) {
            for (var i = 0; i < this.values.length; i++) {
                this.values[i] /= mag;
            }
        }
        return this;
    };
    return glVec;
}());
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
    /**
     * Creates a copy of the vector.
     *
     * @returns A copy of the vector.
     */
    glVec3.prototype.clone = function () {
        return new glVec3(this.values);
    };
    /**
     * Normalizes this vector, and stores and returns the result.
     *
     * @returns The resulting normalized vector.
     */
    glVec3.prototype.normalize = function () {
        return _super.prototype.normalize.call(this);
    };
    /**
     * Subtracts values from this vector.
     *
     * @param vec The vector to subtract.
     * @returns This vector.
     */
    glVec3.prototype.subtract = function (vec) {
        this.values[0] -= vec.values[0];
        this.values[1] -= vec.values[1];
        this.values[2] -= vec.values[2];
        return this;
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
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
     */
    htmlColor.prototype.componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    /**
     * Converts this object to a hex string (e.g. #0f0f0f);
     */
    htmlColor.prototype.toHex = function () {
        var rHex = this.componentToHex(this.r);
        var gHex = this.componentToHex(this.g);
        var bHex = this.componentToHex(this.b);
        return "#" + rHex + gHex + bHex;
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
     * Converts this object to a WebGL color object (0-1 based)
     *
     * @returns A glColor object.
     */
    htmlColor.prototype.toGlColor = function () {
        return new _glColor__WEBPACK_IMPORTED_MODULE_1__["glColor"]([this.r / 255, this.g / 255, this.b / 255]);
    };
    return htmlColor;
}(_Color__WEBPACK_IMPORTED_MODULE_0__["Color"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: gl, angleX, angleY, zoomZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleX", function() { return angleX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleY", function() { return angleY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomZ", function() { return zoomZ; });
/* harmony import */ var _Shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shaders */ "./src/Shaders.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LightColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LightColors */ "./src/LightColors.ts");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Color */ "./src/Color.ts");
/* harmony import */ var _ColorRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorRange */ "./src/ColorRange.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");







var app;
var gl = null;
var canvas;
var angleX = 0;
var angleY = 0;
var zoomZ = 3.0;
var skinTones = [
    new _Color__WEBPACK_IMPORTED_MODULE_4__["Color"]([255, 218, 200]),
    new _Color__WEBPACK_IMPORTED_MODULE_4__["Color"]([232, 179, 117]),
    new _Color__WEBPACK_IMPORTED_MODULE_4__["Color"]([190, 136, 87]),
    new _Color__WEBPACK_IMPORTED_MODULE_4__["Color"]([115, 91, 59])
    //   new Color([132, 55, 34]),
    //new Color([61, 12, 2]),
    //   new Color([38, 7, 1])
];
function component() {
    var element = document.createElement('div');
    element.innerHTML =
        '<canvas id="canvas"></canvas>\n' +
            '<br />\n' +
            '<label for="intensityRange">Intensity</label>\n' +
            '<input id="intensityRange" type="range" min="0" max="100" value="50" class="slider">\n' +
            '<br />\n' +
            '<label for="temperatureRange">Temperature</label>\n' +
            '<input id="temperatureRange" type="range" min="2000" max="8000" value="' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '" class="slider">\n' +
            '<span id="temperatureSpan">' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '</span>\n' +
            '<br>\n' +
            '<label for="ballColorRange">Ball Color</label>\n' +
            '<input id="ballColorRange" type="range" min="0" max="100" value="50" class="slider">\n' +
            '<span id="ballColorSpan"></span>' +
            '<br />\n' +
            '<label for="ambientIntensityRange">Ambient Intensity</label>\n' +
            '<input id="ambientIntensityRange" type="range" min="0" max="100" value="50" class="slider">\n' +
            '<br />\n' +
            '<br />\n';
    return element;
}
document.body.appendChild(component());
var mouseDown = false;
var oldX;
var oldY;
window.onload = function () {
    canvas = document.getElementById('canvas');
    try {
        gl = canvas.getContext('webgl2');
    }
    catch (e) {
        console.log("Unable to get WebGL2 context");
    }
    if (gl) {
        app = new _app__WEBPACK_IMPORTED_MODULE_1__["App"]();
        canvas.ontouchstart = function (event) {
            event.preventDefault();
            if (event.touches.length === 1) {
                var size = canvas.width / 4;
                var x = event.touches[0].clientX;
                var y = event.touches[0].clientY;
                if (y < size) {
                    if (x > canvas.width - size) {
                        app.swap(1);
                        return;
                    }
                    else if (x > canvas.width - 2 * size) {
                        app.swap(0);
                        return;
                    }
                }
                mouseDown = true;
                oldX = event.touches[0].clientX;
                oldY = event.touches[0].clientY;
            }
        };
        canvas.ontouchmove = function (event) {
            event.preventDefault();
            onMove(event.touches[0].clientX, event.touches[0].clientY);
        };
        canvas.ontouchend = function (event) {
            event.preventDefault();
            mouseDown = false;
        };
        canvas.onmousedown = function (event) {
            oldX = event.x;
            oldY = event.y;
            mouseDown = true;
            // disable selection because dragging is used for rotating the camera and moving objects
            return false;
        };
        canvas.onmousemove = function (event) {
            onMove(event.x, event.y);
        };
        canvas.onmouseup = function (event) {
            mouseDown = false;
        };
        canvas.onclick = function (event) {
            var size = canvas.width / 4;
            if (event.y < size) {
                if (event.x > canvas.width - size) {
                    app.swap(1);
                }
                else if (event.x > canvas.width - 2 * size) {
                    app.swap(0);
                }
            }
        };
    }
};
function onMove(x, y) {
    if (mouseDown) {
        // update the angles based on how far we moved since last time
        angleY -= (x - oldX) * 0.01;
        angleX += (y - oldY) * 0.01;
        // don't go upside down
        angleX = Math.max(angleX, -Math.PI / 2 + 0.01);
        angleX = Math.min(angleX, Math.PI / 2 - 0.01);
        // clear the sample buffer
        app.restart();
        // remember this coordinate
        oldX = x;
        oldY = y;
    }
}
var intensitySlider = document.getElementById("intensityRange");
intensitySlider.value = "" + _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uLightIntensity * 100;
intensitySlider.oninput = function () {
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uLightIntensity = parseFloat(intensitySlider.value) / 100;
    app.restart();
};
var temperatureSlider = document.getElementById("temperatureRange");
setLightColor();
temperatureSlider.oninput = setLightColor;
function setLightColor() {
    var temperature = parseFloat(temperatureSlider.value);
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uLightColor = _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].toRGB(temperature);
    var span = document.getElementById("temperatureSpan");
    span.innerText = temperature.toFixed() + "K";
    if (app) {
        app.restart();
    }
}
/*
let ballColorSlider = document.getElementById("ballColorRange") as HTMLInputElement;
ballColorSlider.value = (parseFloat(ballColorSlider.max) * hsvColor.fromGlColor(Uniforms.uBallColor).h).toString();
setSpanColor();
setBallColor();
ballColorSlider.oninput = setBallColor

function setBallColor() {
   let hue = parseFloat(ballColorSlider.value);
   Uniforms.uBallColor = (new hsvColor([hue / parseFloat(ballColorSlider.max), 0.7, 0.7])).toGlColor();

   setSpanColor();

   if (app) {
      app.restart();
   }
}

function setSpanColor() {
   let span = document.getElementById("ballColorSpan") as HTMLSpanElement;
   span.style.backgroundColor = Uniforms.uBallColor.toHtmlColor().toHex();
}
*/
var skinColorRange = new _ColorRange__WEBPACK_IMPORTED_MODULE_5__["ColorRange"](skinTones);
var ballColorSlider = document.getElementById("ballColorRange");
setSpanColor();
setBallColor();
ballColorSlider.oninput = setBallColor;
function setBallColor() {
    var color = skinColorRange.get(parseFloat(ballColorSlider.value) / 100.0);
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBallColor = new _glColor__WEBPACK_IMPORTED_MODULE_6__["glColor"]([color.r / 255, color.g / 255, color.b / 255]);
    setSpanColor();
    if (app) {
        app.restart();
    }
}
function setSpanColor() {
    var span = document.getElementById("ballColorSpan");
    span.style.backgroundColor = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBallColor.toHtmlColor().toHex();
}
var ambientIntensitySlider = document.getElementById("ambientIntensityRange");
ambientIntensitySlider.value = "" + _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uAmbientLightIntensity * 100;
ambientIntensitySlider.oninput = function () {
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uAmbientLightIntensity = parseFloat(ambientIntensitySlider.value) / 100;
    app.restart();
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

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

/***/ }),

/***/ "./src/toScreenFragment.glsl":
/*!***********************************!*\
  !*** ./src/toScreenFragment.glsl ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\nvarying vec2 texCoord;\r\nuniform sampler2D uTexture;\r\nuniform int uMode;\r\nuniform float uMaxChroma;\r\n\r\n#define MODE_COLOR 0\r\n#define MODE_VALUE 1\r\n#define MODE_CHROMA 2\r\n\r\nvec4 white = vec4(1.0, 1.0, 1.0, 1.0);\r\nvec4 red = vec4(1.0, 0.0, 0.0, 1.0);\r\nvec4 orange = vec4(1.0, 0.65, 0.0, 1.0);\r\nvec4 yellow = vec4(1.0, 1.0, 0.0, 1.0);\r\nvec4 green = vec4(0.0, 1.0, 0.0, 1.0);\r\nvec4 cyan = vec4(0.0, 1.0, 1.0, 1.0);\r\nvec4 blue = vec4(0.0, 0.0, 1.0, 1.0);\r\nvec4 black = vec4(0.0, 0.0, 0.0, 1.0);\r\n#define NUM_COLORS 6\r\nvec4 colors[NUM_COLORS];\r\n\r\nvec4 value2Color(float value)\r\n{\r\n   float span = 1.0 / float(NUM_COLORS - 1);\r\n   value *= float(NUM_COLORS - 1);\r\n   if (value < 0.0)\r\n   {\r\n      return colors[0];\r\n   }\r\n   else if (value < 1.0)\r\n   {\r\n      return colors[0] + value * (colors[1] - colors[0]);\r\n   }\r\n   else if (value < 2.0)\r\n   {\r\n      return colors[1] + (value - 1.0) * (colors[2] - colors[1]);\r\n   }\r\n   else if (value < 3.0)\r\n   {\r\n      return colors[2] + (value - 2.0) * (colors[3] - colors[2]);\r\n   }\r\n   else if (value < 4.0)\r\n   {\r\n      return colors[3] + (value - 3.0) * (colors[4] - colors[3]);\r\n   }\r\n   else if (value < 5.0)\r\n   {\r\n      return colors[4] + (value - 4.0) * (colors[5] - colors[4]);\r\n   }\r\n   /*\r\n   else if (value < 6.0)\r\n   {\r\n      return colors[5] + (value - 5.0) * (colors[6] - colors[5]);\r\n   }\r\n   */\r\n   else\r\n   {\r\n      return colors[NUM_COLORS - 1];\r\n   }\r\n}\r\n\r\nvoid main()\r\n{\r\n   colors[0] = black;\r\n   colors[1] = blue;\r\n   colors[2] = green;\r\n   colors[3] = yellow;\r\n   colors[4] = orange;\r\n   colors[5] = red;\r\n\r\n   if (uMode == MODE_VALUE)\r\n   {\r\n      vec4 color = texture2D(uTexture, texCoord);\r\n      //      float rgb = 0.3 * color.x + 0.59 * color.y + 0.11 * color.z;\r\n      float rgb = clamp((color.r + color.g + color.b) / 3.0, 0.0, 1.0);\r\n      gl_FragColor = vec4(rgb, rgb, rgb, 1.0);\r\n   }\r\n   else if (uMode == MODE_CHROMA)\r\n   {\r\n      if (texCoord.x < 0.03)\r\n      {\r\n         gl_FragColor = value2Color(texCoord.y);\r\n      }\r\n      else\r\n      {\r\n         vec4 color = texture2D(uTexture, texCoord);\r\n         float avg = (color.r + color.g + color.b) / 3.0;\r\n         float rgb = (abs(avg - color.r) + abs(avg - color.g) + abs(avg - color.b)) / (4.0 / 3.0);\r\n         gl_FragColor = value2Color(rgb / uMaxChroma);\r\n      }\r\n   }\r\n   else\r\n   {\r\n      gl_FragColor = texture2D(uTexture, texCoord);\r\n   }\r\n}\r\n");

/***/ }),

/***/ "./src/toScreenVertex.glsl":
/*!*********************************!*\
  !*** ./src/toScreenVertex.glsl ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 vertex;\r\nvarying vec2 texCoord;\r\nuniform float uScale;\r\nuniform float uXOffset;\r\nuniform float uYOffset;\r\n\r\nvoid main()\r\n{\r\n   texCoord = vertex.xy * 0.5 + 0.5;\r\n\r\n   gl_Position = vec4(uScale * vertex.x + uXOffset, uScale * vertex.y + uYOffset, 0.0, 1.0);\r\n}\r\n");

/***/ }),

/***/ "./src/toTextureFragment.glsl":
/*!************************************!*\
  !*** ./src/toTextureFragment.glsl ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\nuniform vec3 uEye;\r\nvarying vec3 initialRay;\r\nuniform float uTextureWeight;\r\nuniform float uTextureSize;\r\nuniform float uTimeSinceStart;\r\nuniform sampler2D uTexture;\r\nuniform vec3 uLightPos;\r\nuniform float uLightIntensity;\r\nuniform vec3 uLightColor;\r\nuniform float uAmbientLightIntensity;\r\nuniform vec3 uBallColor;\r\nuniform float uPass;\r\nuniform float uNumPasses;\r\nuniform float uSample;\r\n\r\nconst int MAX_BOUNCES = 100;\r\nconst float EPSILON = 0.0001;\r\nconst float INFINITY = 10000.0;\r\nconst float LIGHT_SIZE = 0.1;\r\nconst vec3 SPHERE_CENTER = vec3(0, -0.5, 0);\r\nconst float SPHERE_RADIUS = 0.5;\r\nconst vec3 DOME_CENTER = vec3(0, 0, 0);\r\nconst float DOME_RADIUS = 7.0;\r\nconst float VAL = 0.8;\r\nconst vec3 DOME_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 FLOOR_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 AMBIENT_COLOR = vec3(1.0, 1.0, 1.0);\r\nconst int NUM_LIGHTS = 6;\r\nconst float HEIGHT = 4.0;\r\nconst float RADIUS = 4.0;\r\nconst float PI = 3.14159265;\r\n\r\nstruct Light\r\n{\r\n   float intensity;\r\n   float size;\r\n   vec3 pos;\r\n   vec3 color;\r\n};\r\n\r\nLight Lights[NUM_LIGHTS];\r\n\r\nfloat intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   vec3 toSphere = origin - sphereCenter;\r\n   float a = dot(ray, ray);\r\n   float b = 2.0 * dot(toSphere, ray);\r\n   float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;\r\n   float discriminant = b * b - 4.0 * a * c;\r\n   if (discriminant > 0.0)\r\n   {\r\n      float t1 = (-b - sqrt(discriminant)) / (2.0 * a);\r\n      float t2 = (-b + sqrt(discriminant)) / (2.0 * a);\r\n      if (t1 > 0.0)\r\n      {\r\n         return t1;\r\n      }\r\n      else if (t2 > 0.0)\r\n      {\r\n         return t2;\r\n      }\r\n   }\r\n   return INFINITY;\r\n}\r\n\r\nvec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   return (hit - sphereCenter) / sphereRadius;\r\n}\r\n\r\nfloat random(vec3 scale, float seed)\r\n{\r\n   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\r\n}\r\n\r\nvec3 cosineWeightedDirection(float seed, vec3 normal)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float r = sqrt(u);\r\n   float angle = 6.283185307179586 * v;\r\n   // compute basis from normal\r\n   vec3 sdir, tdir;\r\n   if (abs(normal.x) < .5)\r\n   {\r\n      sdir = cross(normal, vec3(1, 0, 0));\r\n   }\r\n   else\r\n   {\r\n      sdir = cross(normal, vec3(0, 1, 0));\r\n   }\r\n   tdir = cross(normal, sdir);\r\n   return r * cos(angle) * sdir + r * sin(angle) * tdir + sqrt(1. - u) * normal;\r\n}\r\n\r\nvec3 uniformlyRandomDirection(float seed)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float z = 1.0 - 2.0 * u;\r\n   float r = sqrt(1.0 - z * z);\r\n   float angle = 6.283185307179586 * v;\r\n   return vec3(r * cos(angle), r * sin(angle), z);\r\n}\r\n\r\nvec3 uniformlyRandomVector(float seed)\r\n{\r\n   return uniformlyRandomDirection(seed) * sqrt(random(vec3(36.7539, 50.3658, 306.2759), seed));\r\n}\r\n\r\nfloat shadow(vec3 origin, vec3 ray)\r\n{\r\n   float tSphere = intersectSphere(origin, ray, SPHERE_CENTER, SPHERE_RADIUS);\r\n   if (tSphere < 1.0)\r\n   {\r\n      return 0.0;\r\n   }\r\n   else\r\n   {\r\n      return 1.0;\r\n   }\r\n}\r\n\r\nvec3 calculateColor(vec3 origin, vec3 ray)\r\n{\r\n   vec3 accumulatedColor = vec3(0.0);\r\n   vec3 colorMask = vec3(1.0);\r\n\r\n   // main raytracing loop\r\n   for (int bounce = 0; bounce < MAX_BOUNCES; bounce++)\r\n   {\r\n      // compute the intersection with everything\r\n      float tSphere = intersectSphere(origin, ray, SPHERE_CENTER, SPHERE_RADIUS);\r\n      vec3 surfaceColor = vec3(0.5, 0.5, 0.5);\r\n\r\n      if (bounce == 0)\r\n      {\r\n         // if the first ray hits the light, return the light color. This\r\n         // simulates displaying the light\r\n         for (int i = 0; i < NUM_LIGHTS; i++)\r\n         {\r\n            vec3 lightPos = Lights[i].pos;\r\n            if (intersectSphere(origin, ray, lightPos, Lights[i].size) < tSphere)\r\n            {\r\n               return Lights[i].intensity * Lights[i].color;\r\n            }\r\n         }\r\n      }\r\n\r\n      float tDome = intersectSphere(origin, ray, DOME_CENTER, DOME_RADIUS);\r\n\r\n      // find the closest intersection\r\n      float t = INFINITY;\r\n      float tfloor = INFINITY;\r\n\r\n      // check for intersection with the ground\r\n      if (ray.y < 0.0)\r\n      {\r\n         // distance to floor = num unit vectors required to reach the floor\r\n         tfloor = -(origin.y + 1.0) / ray.y;\r\n         if (tfloor < t)\r\n         {\r\n            t = tfloor;\r\n         }\r\n\r\n         surfaceColor = FLOOR_COLOR;\r\n      }\r\n\r\n      if (tSphere < t)\r\n      {\r\n         surfaceColor = vec3(uBallColor);\r\n         t = tSphere;\r\n      }\r\n      else if (tDome < t)\r\n      {\r\n         surfaceColor = DOME_COLOR;\r\n         t = tDome;\r\n      }\r\n\r\n      // info about hit\r\n      vec3 hit = origin + ray * t;\r\n      vec3 normal;\r\n\r\n      // calculate the normal\r\n      if (t == tfloor)\r\n      {\r\n         normal = vec3(0.0, 1.0, 0.0);\r\n      }\r\n      else if (t == tSphere)\r\n      {\r\n         normal = normalForSphere(hit, SPHERE_CENTER, SPHERE_RADIUS);\r\n      }\r\n      else if (t == tDome)\r\n      {\r\n         normal = normalForSphere(hit, DOME_CENTER, DOME_RADIUS);\r\n         // normal = -normalForSphere(hit, DOME_CENTER, DOME_RADIUS);\r\n         normal[0] = -normal[0];\r\n         normal[1] = -normal[1];\r\n         normal[2] = -normal[2];\r\n      }\r\n      else\r\n      {\r\n         break;\r\n      }\r\n\r\n      ray = cosineWeightedDirection(uTimeSinceStart + float(bounce), normal);\r\n\r\n      colorMask *= surfaceColor;\r\n\r\n      if (length(colorMask) < 0.01)\r\n      {\r\n         break;\r\n      }\r\n\r\n      for (int i = 0; i < NUM_LIGHTS; i++)\r\n      {\r\n         float lightIntensity = Lights[i].intensity;\r\n         vec3 lightPos = Lights[i].pos;\r\n         vec3 lightColor = Lights[i].color;\r\n\r\n         // compute diffuse lighting contribution\r\n         vec3 toLight = lightPos - hit;\r\n         float diffuse = max(0.0, dot(normalize(toLight), normal));\r\n\r\n         // trace a shadow ray to the light\r\n         float shadowIntensity = shadow(hit + normal * EPSILON, toLight);\r\n\r\n         // do light bounce\r\n\r\n         // apply light fall off as distance squares. Use a min value for the\r\n         // light size\r\n         float radius = max(0.75, Lights[i].size);\r\n         float dist = max(1.0, (length(toLight) - radius) / radius);\r\n\r\n         accumulatedColor +=\r\n             colorMask * lightColor * (lightIntensity / (dist * dist) * diffuse * shadowIntensity);\r\n      }\r\n\r\n      // calculate next origin\r\n      origin = hit;\r\n   }\r\n\r\n   return clamp(accumulatedColor, 0.0, 1.0);\r\n}\r\n\r\nvoid main()\r\n{\r\n   if (floor(mod(gl_FragCoord.x, uNumPasses)) != uPass)\r\n   {\r\n      if (uSample == 0.0 && uPass == 0.0)\r\n      {\r\n         gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r\n      }\r\n      else\r\n      {\r\n         gl_FragColor = texture2D(uTexture, gl_FragCoord.xy / uTextureSize);\r\n      }\r\n      return;\r\n   }\r\n\r\n   vec3 rand = uniformlyRandomVector(uTimeSinceStart - 53.0) * LIGHT_SIZE;\r\n\r\n   Lights[0].intensity = uLightIntensity;\r\n   Lights[0].size = LIGHT_SIZE;\r\n   Lights[0].pos = vec3(uLightPos.x + rand.x, uLightPos.y + rand.y, uLightPos.z + rand.z);\r\n   Lights[0].color = vec3(uLightColor.x, uLightColor.y, uLightColor.z);\r\n\r\n   for (int i = 1; i < NUM_LIGHTS; i++)\r\n   {\r\n      float x = RADIUS * sin(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + +rand.x;\r\n      float y = HEIGHT + +rand.y;\r\n      float z = RADIUS * cos(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + +rand.z;\r\n\r\n      Lights[i].intensity = uAmbientLightIntensity;\r\n      Lights[i].size = 2.0 * LIGHT_SIZE;\r\n      Lights[i].pos = vec3(x, y, z);\r\n      Lights[i].color = AMBIENT_COLOR;\r\n   }\r\n\r\n   vec3 texture2 = texture2D(uTexture, gl_FragCoord.xy / uTextureSize).rgb;\r\n   gl_FragColor = vec4(mix(calculateColor(uEye, initialRay), texture2, uTextureWeight), 1.0);\r\n}");

/***/ }),

/***/ "./src/toTextureVertex.glsl":
/*!**********************************!*\
  !*** ./src/toTextureVertex.glsl ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 vertex;\r\nuniform vec3 uEye, uRay00, uRay01, uRay10, uRay11;\r\nvarying vec3 initialRay;\r\n\r\nvoid main()\r\n{\r\n   vec2 percent = vertex.xy * 0.5 + 0.5;\r\n   initialRay = mix(mix(uRay00, uRay01, percent.y), mix(uRay10, uRay11, percent.y), percent.x);\r\n   gl_Position = vec4(vertex, 1.0);\r\n}\r\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9Db2xvclJhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy9MaWdodENvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aFRyYWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hhZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yV2l0aFRlbXBlcmF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9nbE1hdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xWZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly8vLi9zcmMvdG9TY3JlZW5GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90b1NjcmVlblZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90b1RleHR1cmVGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90b1RleHR1cmVWZXJ0ZXguZ2xzbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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RyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9GLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhDLDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoRixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUM7U0FDZDtRQUNELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUU1RCxPQUFPLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMEJBQVMsR0FBaEI7UUFDRyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBRTFCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDL0IsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FB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LHdDQUF3Qyx1Q0FBdUMsdUJBQXVCLFdBQVcscUVBQXFFLHNCQUFzQiwwRUFBMEUsMENBQTBDLFdBQVcsMkNBQTJDLHlFQUF5RSxXQUFXLHlDQUF5QyxxRUFBcUUseUVBQXlFLG9DQUFvQyxvQ0FBb0Msb0NBQW9DLFdBQVcseUJBQXlCLG1CQUFtQixXQUFXLHFGQUFxRix3Q0FBd0Msc0RBQXNELG1CQUFtQixXQUFXLDZCQUE2QixnQkFBZ0IsZ0JBQWdCLHdEQUF3RCwyQ0FBMkMsK0NBQStDLG9HQUFvRyx1RUFBdUUsZ0lBQWdJLHdNQUF3TSx3RUFBd0UsMklBQTJJLFdBQVcsNkRBQTZELFFBQVEsb0RBQW9ELEtBQUssd0JBQXdCLG1FQUFtRSx3REFBd0QscURBQXFELFdBQVcseUJBQXlCLGdGQUFnRixXQUFXLGlCQUFpQixRQUFRLGtGQUFrRixpREFBaUQsbUNBQW1DLDhGQUE4RiwyRUFBMkUsMEJBQTBCLGdCQUFnQixhQUFhLDRGQUE0RixxQ0FBcUMsNEZBQTRGLDJEQUEyRCw0Q0FBNEMsd0NBQXdDLDBDQUEwQyxRQUFRLG1GQUFtRixpR0FBaUcsS0FBSyxDOzs7Ozs7Ozs7Ozs7QUNBdHhRO0FBQWUsc0ZBQXVCLHNEQUFzRCw0QkFBNEIsd0JBQXdCLDRDQUE0QyxtR0FBbUcsdUNBQXVDLEtBQUssSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cXHJcXG4uc2xpZGVyOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4jYmFsbENvbG9yU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5zbGlkZXIge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNiYWxsQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxhYmVsIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgI3RlbXBlcmF0dXJlU3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxyXG4gKiBDbGFzcyBmb3IgcmVwcmVzZW50aW5nIGNvbG9yIHZhbHVlcy4gVmFsdWVzIG1heSBiZSBvbiBhIDAtMSBvciAwLTI1NSBzY2FsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgIHB1YmxpYyByZWFkb25seSByOiBudW1iZXI7XHJcbiAgIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXI7XHJcbiAgIHB1YmxpYyByZWFkb25seSBiOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIFJHQiB2YWx1ZXMgdG8gc3RvcmUgaW4gdGhpcyBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5yID0gY29sb3JbMF07XHJcbiAgICAgIHRoaXMuZyA9IGNvbG9yWzFdO1xyXG4gICAgICB0aGlzLmIgPSBjb2xvclsyXTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yUmFuZ2Uge1xyXG4gICBwcml2YXRlIGNvbG9yczogQ29sb3JbXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcnM6IENvbG9yW10pIHtcclxuICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQodmFsdWU6IG51bWJlcik6IENvbG9yIHtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKTtcclxuICAgICAgICAgbGV0IHBhcnRpYWwgPSAodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSAtIGluZGV4O1xyXG5cclxuICAgICAgICAgbGV0IHIgPSB0aGlzLmNvbG9yc1tpbmRleF0uciArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5yIC0gdGhpcy5jb2xvcnNbaW5kZXhdLnIpO1xyXG4gICAgICAgICBsZXQgZyA9IHRoaXMuY29sb3JzW2luZGV4XS5nICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLmcgLSB0aGlzLmNvbG9yc1tpbmRleF0uZyk7XHJcbiAgICAgICAgIGxldCBiID0gdGhpcy5jb2xvcnNbaW5kZXhdLmIgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uYiAtIHRoaXMuY29sb3JzW2luZGV4XS5iKTtcclxuXHJcbiAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIH0gZnJvbSBcIi4vZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZXR0aW5nIFJHQiB2YWx1ZXMgZm9yIGNvbG9yIHRlbXBlcmF0dXJlcy4gUkdCIHZhbHVlc1xyXG4gKiBhcmUgYmV0d2VlbiAwIGFuZCAxLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExpZ2h0Q29sb3JzIHtcclxuICAgLyoqXHJcbiAgICAqIEtub3duIGNvbG9yIHZhbHVlcy4gRm9yIG90aGVyIHJlcXVlc3RzIHRoZSBjbGFzcyB3aWxsIHJldHVybiBpbnRlcnBvbGF0ZWQgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb2xvcnM6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmVbXSA9IFtcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTQ3IC8gMjU1LCA0MSAvIDI1NV0sIDE5MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxOTcgLyAyNTUsIDE0MyAvIDI1NV0sIDI2MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyMTQgLyAyNTUsIDE3MCAvIDI1NV0sIDI4NTApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNDEgLyAyNTUsIDIyNCAvIDI1NV0sIDMyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTAgLyAyNTUsIDI0NCAvIDI1NV0sIDUyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1MSAvIDI1NV0sIDU0MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1NSAvIDI1NV0sIDYwMDApLCAvLyBkYXlsaWdodFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjAxIC8gMjU1LCAyMjYgLyAyNTUsIDI1NSAvIDI1NV0sIDcwMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbNjQgLyAyNTUsIDE1NiAvIDI1NSwgMjU1IC8gMjU1XSwgMjAwMDApLFxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgZGF5bGlnaHQoKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvUkdCKDYwMDApO1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtaW5pbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1pblRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heGltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWF4VGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIENvbG9yIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIHRvUkdCKHRlbXBlcmF0dXJlOiBudW1iZXIpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuXHJcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA8PSB0aGlzLm1pblRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0ZW1wZXJhdHVyZSA+PSB0aGlzLm1heFRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMSA9IHRoaXMuY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY29sb3IyID0gdGhpcy5jb2xvcnNbaSArIDFdO1xyXG4gICAgICAgICAgICBpZiAodGVtcGVyYXR1cmUgPj0gY29sb3IxLnRlbXBlcmF0dXJlICYmIHRlbXBlcmF0dXJlIDw9IGNvbG9yMi50ZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAodGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpIC8gKGNvbG9yMi50ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yMS5yICsgcmF0aW8gKiAoY29sb3IyLnIgLSBjb2xvcjEucik7XHJcbiAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IxLmcgKyByYXRpbyAqIChjb2xvcjIuZyAtIGNvbG9yMS5nKTtcclxuICAgICAgICAgICAgICAgbGV0IGIgPSBjb2xvcjEuYiArIHJhdGlvICogKGNvbG9yMi5iIC0gY29sb3IxLmIpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoW3IsIGcsIGJdLCB0ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc2hvdWxkbid0IGdldCBoZXJlLCBidXQgaWYgd2UgZG8sIHJldHVybiB0aGUgbGFzdCBjb2xvclxyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiXHJcbi8qXHJcbiBXZWJHTCBQYXRoIFRyYWNpbmcgKGh0dHA6Ly9tYWRlYnlldmFuLmNvbS93ZWJnbC1wYXRoLXRyYWNpbmcvKVxyXG4gTGljZW5zZTogTUlUIExpY2Vuc2UgKHNlZSBiZWxvdylcclxuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTAgRXZhbiBXYWxsYWNlXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cclxuIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXHJcbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcclxuIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxyXG4gY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxyXG4gU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcclxuIGNvbmRpdGlvbnM6XHJcblxyXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcbiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG4gSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcbiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgU2hhZGVycywgVW5pZm9ybXMgfSBmcm9tICcuL1NoYWRlcnMnO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tICcuL2dsTWF0JztcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB0b1NjcmVlblZlcnRleFNvdXJjZSBmcm9tICcuL3RvU2NyZWVuVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSBmcm9tICcuL3RvU2NyZWVuRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVWZXJ0ZXhTb3VyY2UgZnJvbSAnLi90b1RleHR1cmVWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSBmcm9tICcuL3RvVGV4dHVyZUZyYWdtZW50Lmdsc2wnO1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcmluZyBtb2RlIGZvciBkaXNwbGF5aW5nIHRoZSB0ZXh0dXJlXHJcbiAqL1xyXG5lbnVtIFJlbmRlck1vZGUge1xyXG4gICBDb2xvciA9IDAsXHJcbiAgIFZhbHVlID0gMSxcclxuICAgQ2hyb21hID0gMixcclxufVxyXG5cclxuLyoqXHJcbiAqIFR5cGVzIGZvciB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICovXHJcbmludGVyZmFjZSBJVG9TY3JlZW5Vbmlmb3JtcyB7XHJcbiAgIHVTY2FsZTogbnVtYmVyO1xyXG4gICB1WE9mZnNldDogbnVtYmVyO1xyXG4gICB1WU9mZnNldDogbnVtYmVyO1xyXG4gICB1TW9kZTogUmVuZGVyTW9kZTtcclxuICAgdU1heENocm9tYTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5sZXQgVG9TY3JlZW5Vbmlmb3JtczogSVRvU2NyZWVuVW5pZm9ybXMgPSB7XHJcbiAgIHVTY2FsZTogMS4wLFxyXG4gICB1WE9mZnNldDogMC4wLFxyXG4gICB1WU9mZnNldDogMC4wLFxyXG4gICB1TW9kZTogMCxcclxuICAgdU1heENocm9tYTogMS4wLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aFRyYWNlciB7XHJcblxyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcblxyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVzOiBXZWJHTFRleHR1cmVbXTtcclxuICAgcHJpdmF0ZSByZW5kZXJQcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgcmVuZGVyVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdHJhY2VyUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRyYWNlclZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIHBpeGVsczogRmxvYXQzMkFycmF5O1xyXG5cclxuICAgcHJpdmF0ZSBtYWluVmlldyA9IFJlbmRlck1vZGUuQ29sb3I7XHJcbiAgIHByaXZhdGUgc21hbGxWaWV3cyA9IFtSZW5kZXJNb2RlLkNocm9tYSwgUmVuZGVyTW9kZS5WYWx1ZV07XHJcblxyXG4gICBwcml2YXRlIHZlcnRpY2VzID0gW1xyXG4gICAgICAtMSwgLTEsXHJcbiAgICAgIC0xLCArMSxcclxuICAgICAgKzEsIC0xLFxyXG4gICAgICArMSwgKzFcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgLy8gY3JlYXRlIHZlcnRleCBidWZmZXIgLSB0aGUgYmxvY2sgd2UnbGwgZHJhdyBvdXIgcmVuZGVyZWQgdGV4dHVyZSBvblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGZyYW1lYnVmZmVyXHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHR1cmVzXHJcbiAgICAgIGdsLmdldEV4dGVuc2lvbignRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdCcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKGdsLmNyZWF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbaV0pO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgICAgIGdsLlJHQkEzMkYsICAgICAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyB3aWR0aFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyBoZWlnaHRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgICAgIGdsLlJHQkEsICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICAgICBnbC5GTE9BVCwgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHJlbmRlciBzaGFkZXJcclxuICAgICAgdGhpcy5yZW5kZXJQcm9ncmFtID0gU2hhZGVycy5jb21waWxlU2hhZGVyKHRvU2NyZWVuVmVydGV4U291cmNlLCB0b1NjcmVlbkZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnJlbmRlclByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgdGhpcy50cmFjZXJQcm9ncmFtID0gU2hhZGVycy5jb21waWxlU2hhZGVyKHRvVGV4dHVyZVZlcnRleFNvdXJjZSwgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudHJhY2VyUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgVW5pZm9ybXMudVNhbXBsZSA9IDA7XHJcbiAgICAgIFVuaWZvcm1zLnVQYXNzID0gMDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwZGF0ZVRleHR1cmUobW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0LCB0aW1lU2luY2VTdGFydDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAvLyBpbXBsZW1lbnQgYWxpYXNpbmcgYnkgcmFuZG9tIHNhbXBsaW5nIHdpdGhpbiBhIHBpeGVsXHJcbiAgICAgIGxldCB4ID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgLyBVbmlmb3Jtcy51VGV4dHVyZVNpemU7XHJcbiAgICAgIGxldCB5ID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgLyBVbmlmb3Jtcy51VGV4dHVyZVNpemU7XHJcbiAgICAgIGxldCB6ID0gMDtcclxuXHJcbiAgICAgIGxldCB2ID0gbmV3IGdsVmVjMyhbeCwgeSwgel0pO1xyXG4gICAgICBsZXQgaml0dGVyID0gZ2xNYXQ0LmZyb21UcmFuc2xhdGlvbih2KTtcclxuICAgICAgbGV0IG1hdHJpeCA9IGppdHRlci5tdWx0TShtb2RlbHZpZXdQcm9qZWN0aW9uKS5pbnZlcnQoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMCA9IFNoYWRlcnMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTAxID0gU2hhZGVycy5nZXRFeWVSYXkobWF0cml4LCAtMSwgKzEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTAgPSBTaGFkZXJzLmdldEV5ZVJheShtYXRyaXgsICsxLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMSA9IFNoYWRlcnMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsICsxKTtcclxuICAgICAgVW5pZm9ybXMudVRpbWVTaW5jZVN0YXJ0ID0gdGltZVNpbmNlU3RhcnQ7XHJcbiAgICAgIFVuaWZvcm1zLnVUZXh0dXJlV2VpZ2h0ID0gVW5pZm9ybXMudVNhbXBsZSAvIChVbmlmb3Jtcy51U2FtcGxlICsgMSk7XHJcblxyXG4gICAgICAvLyBzZXQgdW5pZm9ybXNcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRyYWNlclByb2dyYW0pO1xyXG4gICAgICBTaGFkZXJzLnNldFVuaWZvcm1zKHRoaXMudHJhY2VyUHJvZ3JhbSwgVW5pZm9ybXMpO1xyXG5cclxuICAgICAgLy8gcmVuZGVyIHRvIHRleHR1cmVcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVW5pZm9ybXMudVRleHR1cmVTaXplLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMudHJhY2VyUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMV0sIDApO1xyXG5cclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcblxyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVNYXhDaHJvbWEgPSB0aGlzLmdldE1heENocm9tYSgpO1xyXG5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIHBpbmcgcG9uZyB0ZXh0dXJlc1xyXG4gICAgICB0aGlzLnRleHR1cmVzLnJldmVyc2UoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVQYXNzKys7XHJcbiAgICAgIGlmIChVbmlmb3Jtcy51UGFzcyA9PSBVbmlmb3Jtcy51TnVtUGFzc2VzKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVQYXNzID0gMDtcclxuICAgICAgICAgVW5pZm9ybXMudVNhbXBsZSsrO1xyXG4gICAgICB9XHJcbiAgIH07XHJcblxyXG4gICBwcml2YXRlIGdldE1heENocm9tYSgpOiBudW1iZXIge1xyXG4gICAgICBsZXQgc2l6ZSA9IFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBpeGVscyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMucGl4ZWxzID0gbmV3IEZsb2F0MzJBcnJheShzaXplICogc2l6ZSAqIDQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAgICAgIGxldCB0MSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgZ2wuUkdCQSwgZ2wuRkxPQVQsIHRoaXMucGl4ZWxzKTtcclxuICAgICAgbGV0IG1heENocm9tYSA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAocm93ICogc2l6ZSArIGNvbCkgKiA0O1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMF07XHJcbiAgICAgICAgICAgIGxldCBnID0gdGhpcy5waXhlbHNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDJdO1xyXG4gICAgICAgICAgICBsZXQgYXZnID0gKHIgKyBnICsgYikgLyAzO1xyXG4gICAgICAgICAgICBsZXQgY2hyb21hID0gKE1hdGguYWJzKHIgLSBhdmcpICsgTWF0aC5hYnMoZyAtIGF2ZykgKyBNYXRoLmFicyhiIC0gYXZnKSkgLyAoNCAvIDMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNocm9tYSA+IG1heENocm9tYSkge1xyXG4gICAgICAgICAgICAgICBtYXhDaHJvbWEgPSBjaHJvbWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyAgICAgIGxldCB0MiA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgLy8gICAgICBjb25zb2xlLmxvZygodDIgLSB0MSkgKyBcIiBtcyBcIiArIG1heENocm9tYSk7XHJcblxyXG4gICAgICByZXR1cm4gbWF4Q2hyb21hO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgIHZhciBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAgICAgbGV0IHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgaWYgKGlzTW9iaWxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnJlbmRlclByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIFRvU2NyZWVuVW5pZm9ybXMudVNjYWxlID0gMS4wO1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVYT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVZT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVNb2RlID0gdGhpcy5tYWluVmlldztcclxuICAgICAgU2hhZGVycy5zZXRVbmlmb3Jtcyh0aGlzLnJlbmRlclByb2dyYW0sIFRvU2NyZWVuVW5pZm9ybXMpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIHNtYWxsZXIgdmlld3NcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51U2NhbGUgPSAwLjI1O1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVYT2Zmc2V0ID0gMC4yNTtcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51WU9mZnNldCA9IDAuNzU7XHJcbiAgICAgIFRvU2NyZWVuVW5pZm9ybXMudU1vZGUgPSB0aGlzLnNtYWxsVmlld3NbMF07XHJcbiAgICAgIFNoYWRlcnMuc2V0VW5pZm9ybXModGhpcy5yZW5kZXJQcm9ncmFtLCBUb1NjcmVlblVuaWZvcm1zKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcblxyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVTY2FsZSA9IDAuMjU7XHJcbiAgICAgIFRvU2NyZWVuVW5pZm9ybXMudVhPZmZzZXQgPSAwLjc1O1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVZT2Zmc2V0ID0gMC43NTtcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51TW9kZSA9IHRoaXMuc21hbGxWaWV3c1sxXTtcclxuICAgICAgU2hhZGVycy5zZXRVbmlmb3Jtcyh0aGlzLnJlbmRlclByb2dyYW0sIFRvU2NyZWVuVW5pZm9ybXMpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN3YXAocG9zOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgbGV0IHRtcCA9IHRoaXMuc21hbGxWaWV3c1twb3NdO1xyXG4gICAgICB0aGlzLnNtYWxsVmlld3NbcG9zXSA9IHRoaXMubWFpblZpZXc7XHJcbiAgICAgIHRoaXMubWFpblZpZXcgPSB0bXA7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnbFZlYzMsIGdsVmVjNCB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBmb3IgdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVVuaWZvcm1zIHtcclxuICAgdUxpZ2h0SW50ZW5zaXR5OiBudW1iZXIsXHJcbiAgIHVMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICB1TGlnaHRQb3M6IGdsVmVjMyxcclxuICAgdUFtYmllbnRMaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICB1QmFsbENvbG9yOiBnbENvbG9yLFxyXG4gICB1RXllOiBnbFZlYzMsXHJcbiAgIHVUZXh0dXJlU2l6ZTogbnVtYmVyLFxyXG4gICB1VGV4dHVyZVdlaWdodDogbnVtYmVyLFxyXG4gICB1VGltZVNpbmNlU3RhcnQ6IG51bWJlcixcclxuICAgdVJheTAwOiBnbFZlYzMsXHJcbiAgIHVSYXkwMTogZ2xWZWMzLFxyXG4gICB1UmF5MTA6IGdsVmVjMyxcclxuICAgdVJheTExOiBnbFZlYzMsXHJcbiAgIHVQYXNzOiBudW1iZXIsXHJcbiAgIHVTYW1wbGU6IG51bWJlcixcclxuICAgdU51bVBhc3NlczogbnVtYmVyLFxyXG4gICBbcHJvcE5hbWU6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgdmFyIFVuaWZvcm1zOiBJVW5pZm9ybXMgPSB7XHJcbiAgIHVMaWdodEludGVuc2l0eTogMC43LFxyXG4gICB1TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgZ2xWZWMzKFstMC42LCAwLjcsIDAuOF0pLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiAwLjMsXHJcbiAgIHVCYWxsQ29sb3I6IG5ldyBnbENvbG9yKFswLjUsIDAuNSwgMC44XSksXHJcbiAgIHVFeWU6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVUZXh0dXJlV2VpZ2h0OiAwLFxyXG4gICB1VGltZVNpbmNlU3RhcnQ6IDAsXHJcbiAgIHVSYXkwMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MDE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UGFzczogMC4wLFxyXG4gICB1TnVtUGFzc2VzOiAxLjAsXHJcbiAgIHVTYW1wbGU6IDAuMCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWRlcnMge1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXRFeWVSYXkobWF0cml4OiBnbE1hdDQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzQoW3gsIHksIDAsIDFdKTtcclxuICAgICAgcmV0dXJuIG1hdHJpeC5tdWx0Vih2ZWMpLmRpdmlkZUJ5VygpLnN1YnRyYWN0KFVuaWZvcm1zLnVFeWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHNldFVuaWZvcm1zKHByb2dyYW06IFdlYkdMUHJvZ3JhbSwgdW5pZm9ybXM6IGFueSkge1xyXG4gICAgICBmb3IgKHZhciBuYW1lIGluIHVuaWZvcm1zKSB7XHJcbiAgICAgICAgIHZhciB2YWx1ZSA9IHVuaWZvcm1zW25hbWVdO1xyXG4gICAgICAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XHJcbiAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbFZlYzMpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuZ2V0KDApLCB2YWx1ZS5nZXQoMSksIHZhbHVlLmdldCgyKV0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsQ29sb3IpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuciwgdmFsdWUuZywgdmFsdWUuYl0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInVNb2RlXCIpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBjb21waWxlU291cmNlKHNvdXJjZTogc3RyaW5nLCB0eXBlOiBudW1iZXIpIHtcclxuICAgICAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICB0aHJvdyAnY29tcGlsZSBlcnJvcjogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGNvbXBpbGVTaGFkZXIodmVydGV4U291cmNlOiBzdHJpbmcsIGZyYWdtZW50U291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBTaGFkZXJzLmNvbXBpbGVTb3VyY2UodmVydGV4U291cmNlLCBnbC5WRVJURVhfU0hBREVSKSk7XHJcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBTaGFkZXJzLmNvbXBpbGVTb3VyY2UoZnJhZ21lbnRTb3VyY2UsIGdsLkZSQUdNRU5UX1NIQURFUikpO1xyXG4gICAgICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICB0aHJvdyAnbGluayBlcnJvcjogJyArIGdsLmdldFByb2dyYW1JbmZvTG9nKHNoYWRlclByb2dyYW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSBcIi4vU2hhZGVyc1wiO1xyXG5pbXBvcnQgeyBQYXRoVHJhY2VyIH0gZnJvbSBcIi4vUGF0aFRyYWNlclwiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5pbXBvcnQgeyB6b29tWiwgYW5nbGVZLCBhbmdsZVggfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgIHB1YmxpYyB0cmFjZXIgPSBuZXcgUGF0aFRyYWNlcigpO1xyXG4gICBwcml2YXRlIG1vZGVsdmlldzogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHByb2plY3Rpb246IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgc3RhcnQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBjb3VudCA9IDA7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZSh0aW1lU2luY2VTdGFydDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gZ2xNYXQ0Lm1ha2VMb29rQXQoXHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUsXHJcbiAgICAgICAgIG5ldyBnbFZlYzMoWzAsIDAsIDBdKSwgIC8vIGNlbnRlciBwb2ludFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSkgICAvLyB1cCB2ZWN0b3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IGdsTWF0NC5tYWtlUGVyc3BlY3RpdmUoNTUsIDEsIDAuMSwgMTAwKTtcclxuICAgICAgdGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0aW9uLm11bHRNKHRoaXMubW9kZWx2aWV3KTtcclxuICAgICAgdGhpcy50cmFjZXIudXBkYXRlVGV4dHVyZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24sIHRpbWVTaW5jZVN0YXJ0KTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy50cmFjZXIuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy50cmFjZXIucmVzdGFydCgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3dhcChwb3M6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnRyYWNlci5zd2FwKHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICBsZXQgdGltZVNpbmNlU3RhcnQgPSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnQpICogMC4wMDE7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb3VudCA8IDE1MCkge1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnNldCgwLCB6b29tWiAqIE1hdGguc2luKGFuZ2xlWSkgKiBNYXRoLmNvcyhhbmdsZVgpKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS5zZXQoMSwgem9vbVogKiBNYXRoLnNpbihhbmdsZVgpKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS5zZXQoMiwgem9vbVogKiBNYXRoLmNvcyhhbmdsZVkpICogTWF0aC5jb3MoYW5nbGVYKSk7XHJcblxyXG4gICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUodGltZVNpbmNlU3RhcnQpO1xyXG4gICAgICAgICB0aGlzLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvciBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhbiBodG1sIGNvbG9yIG9iamVjdCAoMC0yNTUgYmFzZWQpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0h0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5yKTtcclxuICAgICAgbGV0IGcgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuZyk7XHJcbiAgICAgIGxldCBiID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgYWRkcyB0ZW1wZXJhdHVyZSB0byBhIENvbG9yIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUgZXh0ZW5kcyBnbENvbG9yIHtcclxuICAgLyoqXHJcbiAgICAqIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHVibGljIHRlbXBlcmF0dXJlOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKiBAcGFyYW0gdGVtcGVyYXR1cmUgVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdLCB0ZW1wZXJhdHVyZTogbnVtYmVyKSB7XHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzQsIGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyBtYXRyaXggZm9yIHVzZSBpbiBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xNYXQ0IHtcclxuICAgLyoqIFRoZSBtYXRyaXggdmFsdWUgc3RvcmVkIGFzIGEgMTYgZWxlbWVudCBhcnJheSAqL1xyXG4gICBwcml2YXRlIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbE1hdDQge1xyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NCh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCB2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhIHZlY3RvciBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0Vih2ZWM6IGdsVmVjNCk6IGdsVmVjNCB7XHJcbiAgICAgIGxldCB2YWxzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tyb3cgKiA0ICsgY29sXSAqIHZlYy5nZXQoY29sKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YWxzLnB1c2goc3VtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjNCh2YWxzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhbm90aGVyIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBtYXRyaXguXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRNKG90aGVyOiBnbE1hdDQpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5nZXQocm93LCBpKSAqIG90aGVyLmdldChpLCBjb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocm93LCBjb2wsIHN1bSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEludmVydHMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGludmVydCgpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRyYW5zcG9zZXMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBnbE1hdDQge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZhbHVlcyA9IHJlc3VsdC52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgdHJhbnNsYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdHJhbnNsYXRpb25zLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVHJhbnNsYXRpb24odjogZ2xWZWMzKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgdi5nZXQoMCksXHJcbiAgICAgICAgIDAsIDEsIDAsIHYuZ2V0KDEpLFxyXG4gICAgICAgICAwLCAwLCAxLCB2LmdldCgyKSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KFxyXG4gICAgICBleWU6IGdsVmVjMyxcclxuICAgICAgY2VudGVyOiBnbFZlYzMsXHJcbiAgICAgIHVwOiBnbFZlYzMsXHJcbiAgICk6IGdsTWF0NCB7XHJcblxyXG4gICAgICAvLyBjbG9uZSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdvbmFsc1xyXG4gICAgICBsZXQgeiA9IGV5ZS5jbG9uZSgpLnN1YnRyYWN0KGNlbnRlcikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCB4ID0gdXAuY2xvbmUoKS5jcm9zcyh6KS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IHkgPSB6LmNsb25lKCkuY3Jvc3MoeCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICBsZXQgbSA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICB4LmdldCgwKSwgeC5nZXQoMSksIHguZ2V0KDIpLCAwLFxyXG4gICAgICAgICB5LmdldCgwKSwgeS5nZXQoMSksIHkuZ2V0KDIpLCAwLFxyXG4gICAgICAgICB6LmdldCgwKSwgei5nZXQoMSksIHouZ2V0KDIpLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgdmFyIHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgLWV5ZS5nZXQoMCksXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUuZ2V0KDEpLFxyXG4gICAgICAgICAwLCAwLCAxLCAtZXllLmdldCgyKSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBtLm11bHRNKHQpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVQZXJzcGVjdGl2ZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBmb3Z5IEZpZWxkIG9mIHZpZXcgKGluIGRlZ3JlZXMpLlxyXG4gICAgKiBAcGFyYW0gYXNwZWN0IFZpZXcgYXNwZWN0IHJhdGlvLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgTmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgRmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlUGVyc3BlY3RpdmUoXHJcbiAgICAgIGZvdnk6IG51bWJlcixcclxuICAgICAgYXNwZWN0OiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgeW1heCA9IHpuZWFyICogTWF0aC50YW4oZm92eSAqIE1hdGguUEkgLyAzNjAuMCk7XHJcbiAgICAgIHZhciB5bWluID0gLXltYXg7XHJcbiAgICAgIHZhciB4bWluID0geW1pbiAqIGFzcGVjdDtcclxuICAgICAgdmFyIHhtYXggPSB5bWF4ICogYXNwZWN0O1xyXG5cclxuICAgICAgcmV0dXJuIGdsTWF0NC5tYWtlRnJ1c3R1bSh4bWluLCB4bWF4LCB5bWluLCB5bWF4LCB6bmVhciwgemZhcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1RnJ1c3R1bS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZWZ0IFRoZSBsZWZ0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gcmlnaHQgVGhlIHJpZ2h0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gYm90dG9tIFRoZSBib3R0b20gY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB0b3AgVGhlIHRvcCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpuZWFyIFRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBUaGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcmV0dXJucyB0aGUgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlRnJ1c3R1bShcclxuICAgICAgbGVmdDogbnVtYmVyLFxyXG4gICAgICByaWdodDogbnVtYmVyLFxyXG4gICAgICBib3R0b206IG51bWJlcixcclxuICAgICAgdG9wOiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgWCA9IDIgKiB6bmVhciAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgWSA9IDIgKiB6bmVhciAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQSA9IChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBCID0gKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEMgPSAtKHpmYXIgKyB6bmVhcikgLyAoemZhciAtIHpuZWFyKTtcclxuICAgICAgdmFyIEQgPSAtMiAqIHpmYXIgKiB6bmVhciAvICh6ZmFyIC0gem5lYXIpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBYLCAwLCBBLCAwLFxyXG4gICAgICAgICAwLCBZLCBCLCAwLFxyXG4gICAgICAgICAwLCAwLCBDLCBELFxyXG4gICAgICAgICAwLCAwLCAtMSwgMFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxufSIsIlxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBnbFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHByb3RlY3RlZCB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5kZXggVGhlIGVsZW1lbnQgaW5kZXguXHJcbiAgICAqIEByZXR1cm5zIFRoZSBlbGVtZW50IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB2YWx1ZSBpbiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGluZGV4IFRoZSBlbGVtZW50IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVsZW1lbnQgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIFRoZSB2ZWN0b3IgbWFnbml0dWRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hZ25pdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbaV0gKiB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBub3JtYWxpemUoKTogZ2xWZWMge1xyXG4gICAgICBsZXQgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgaWYgKG1hZyAhPT0gMCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXogdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjMyBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gc3VwZXIubm9ybWFsaXplKCkgYXMgZ2xWZWMzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGlzIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWM6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdIC09IHZlYy52YWx1ZXNbMF07XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdIC09IHZlYy52YWx1ZXNbMV07XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdIC09IHZlYy52YWx1ZXNbMl07XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGxldCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjNCBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhbiB4LXkteiB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IGlzIGNvbXB1dGVkIGJ5IGRpdmlkaW5nIHRoaXMgdmVjdG9yc1xyXG4gICAgKiBlbGVtZW50cyBieSB0aGUgdyB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIHgteS16IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXZpZGVCeVcoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgaHN2Q29sb3IgfSBmcm9tIFwiLi9oc3ZDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGNsYXNzIHRoYXQgcmVxdWlyZXMgUkdCIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDI1NVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGh0bWxDb2xvciBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMgVGhlIG51bWVyaWMgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29tcG9uZW50VG9IZXgoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGhleCBzdHJpbmcgKGUuZy4gIzBmMGYwZik7XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IZXgoKTogc3RyaW5nIHtcclxuICAgICAgbGV0IHJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMucik7XHJcbiAgICAgIGxldCBnSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmcpO1xyXG4gICAgICBsZXQgYkhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5iKTtcclxuICAgICAgcmV0dXJuIFwiI1wiICsgckhleCArIGdIZXggKyBiSGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IGZyb20gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nXHJcbiAgICAqIEByZXR1cm5zIFRoZSBodG1sQ29sb3Igb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21IZXgoaGV4OiBzdHJpbmcpOiBodG1sQ29sb3Ige1xyXG4gICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgbGV0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgICAgbGV0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgICAgbGV0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgV2ViR0wgY29sb3Igb2JqZWN0ICgwLTEgYmFzZWQpXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR2xDb2xvcigpOiBnbENvbG9yIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFt0aGlzLnIgLyAyNTUsIHRoaXMuZyAvIDI1NSwgdGhpcy5iIC8gMjU1XSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSBcIi4vU2hhZGVyc1wiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBMaWdodENvbG9ycyB9IGZyb20gXCIuL0xpZ2h0Q29sb3JzXCI7XHJcbmltcG9ydCB7IGhzdkNvbG9yIH0gZnJvbSBcIi4vaHN2Q29sb3JcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSBcIi4vQ29sb3JSYW5nZVwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxubGV0IGFwcDogQXBwO1xyXG5leHBvcnQgbGV0IGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxubGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5leHBvcnQgbGV0IGFuZ2xlWCA9IDA7XHJcbmV4cG9ydCBsZXQgYW5nbGVZID0gMDtcclxuZXhwb3J0IGxldCB6b29tWiA9IDMuMDtcclxuXHJcbmxldCBza2luVG9uZXMgPSBbXHJcbiAgIG5ldyBDb2xvcihbMjU1LCAyMTgsIDIwMF0pLFxyXG4gICBuZXcgQ29sb3IoWzIzMiwgMTc5LCAxMTddKSxcclxuICAgbmV3IENvbG9yKFsxOTAsIDEzNiwgODddKSxcclxuICAgbmV3IENvbG9yKFsxMTUsIDkxLCA1OV0pXHJcbiAgIC8vICAgbmV3IENvbG9yKFsxMzIsIDU1LCAzNF0pLFxyXG4gICAvL25ldyBDb2xvcihbNjEsIDEyLCAyXSksXHJcbiAgIC8vICAgbmV3IENvbG9yKFszOCwgNywgMV0pXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgIGVsZW1lbnQuaW5uZXJIVE1MID1cclxuICAgICAgJzxjYW52YXMgaWQ9XCJjYW52YXNcIj48L2NhbnZhcz5cXG4nICtcclxuICAgICAgJzxiciAvPlxcbicgK1xyXG4gICAgICAnPGxhYmVsIGZvcj1cImludGVuc2l0eVJhbmdlXCI+SW50ZW5zaXR5PC9sYWJlbD5cXG4nICtcclxuICAgICAgJzxpbnB1dCBpZD1cImludGVuc2l0eVJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNTBcIiBjbGFzcz1cInNsaWRlclwiPlxcbicgK1xyXG4gICAgICAnPGJyIC8+XFxuJyArXHJcbiAgICAgICc8bGFiZWwgZm9yPVwidGVtcGVyYXR1cmVSYW5nZVwiPlRlbXBlcmF0dXJlPC9sYWJlbD5cXG4nICtcclxuICAgICAgJzxpbnB1dCBpZD1cInRlbXBlcmF0dXJlUmFuZ2VcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIyMDAwXCIgbWF4PVwiODAwMFwiIHZhbHVlPVwiJyArIExpZ2h0Q29sb3JzLmRheWxpZ2h0LnRlbXBlcmF0dXJlICsgJ1wiIGNsYXNzPVwic2xpZGVyXCI+XFxuJyArXHJcbiAgICAgICc8c3BhbiBpZD1cInRlbXBlcmF0dXJlU3BhblwiPicgKyBMaWdodENvbG9ycy5kYXlsaWdodC50ZW1wZXJhdHVyZSArICc8L3NwYW4+XFxuJyArXHJcbiAgICAgICc8YnI+XFxuJyArXHJcbiAgICAgICc8bGFiZWwgZm9yPVwiYmFsbENvbG9yUmFuZ2VcIj5CYWxsIENvbG9yPC9sYWJlbD5cXG4nICtcclxuICAgICAgJzxpbnB1dCBpZD1cImJhbGxDb2xvclJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNTBcIiBjbGFzcz1cInNsaWRlclwiPlxcbicgK1xyXG4gICAgICAnPHNwYW4gaWQ9XCJiYWxsQ29sb3JTcGFuXCI+PC9zcGFuPicgK1xyXG4gICAgICAnPGJyIC8+XFxuJyArXHJcbiAgICAgICc8bGFiZWwgZm9yPVwiYW1iaWVudEludGVuc2l0eVJhbmdlXCI+QW1iaWVudCBJbnRlbnNpdHk8L2xhYmVsPlxcbicgK1xyXG4gICAgICAnPGlucHV0IGlkPVwiYW1iaWVudEludGVuc2l0eVJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNTBcIiBjbGFzcz1cInNsaWRlclwiPlxcbicgK1xyXG4gICAgICAnPGJyIC8+XFxuJyArXHJcbiAgICAgICc8YnIgLz5cXG4nO1xyXG5cclxuICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxudmFyIG1vdXNlRG93biA9IGZhbHNlO1xyXG52YXIgb2xkWDogbnVtYmVyO1xyXG52YXIgb2xkWTogbnVtYmVyO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICB0cnkge1xyXG4gICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKSBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xyXG4gICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTDIgY29udGV4dFwiKTtcclxuICAgfVxyXG5cclxuICAgaWYgKGdsKSB7XHJcbiAgICAgIGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbiAgICAgIGNhbnZhcy5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gY2FudmFzLndpZHRoIC8gNDtcclxuXHJcbiAgICAgICAgICAgIGxldCB4ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICBsZXQgeSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgICAgaWYgKHkgPCBzaXplKSB7XHJcbiAgICAgICAgICAgICAgIGlmICh4ID4gY2FudmFzLndpZHRoIC0gc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICBhcHAuc3dhcCgxKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPiBjYW52YXMud2lkdGggLSAyICogc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICBhcHAuc3dhcCgwKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1vdXNlRG93biA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBvbGRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICBvbGRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChldmVudDogVG91Y2hFdmVudCkge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBvbk1vdmUoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaGVuZCA9IGZ1bmN0aW9uIChldmVudDogVG91Y2hFdmVudCkge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBtb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgIG9sZFggPSBldmVudC54O1xyXG4gICAgICAgICBvbGRZID0gZXZlbnQueTtcclxuXHJcbiAgICAgICAgIG1vdXNlRG93biA9IHRydWU7XHJcblxyXG4gICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdGlvbiBiZWNhdXNlIGRyYWdnaW5nIGlzIHVzZWQgZm9yIHJvdGF0aW5nIHRoZSBjYW1lcmEgYW5kIG1vdmluZyBvYmplY3RzXHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgIG9uTW92ZShldmVudC54LCBldmVudC55KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICBtb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNhbnZhcy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgIGxldCBzaXplID0gY2FudmFzLndpZHRoIC8gNDtcclxuXHJcbiAgICAgICAgIGlmIChldmVudC55IDwgc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQueCA+IGNhbnZhcy53aWR0aCAtIHNpemUpIHtcclxuICAgICAgICAgICAgICAgYXBwLnN3YXAoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQueCA+IGNhbnZhcy53aWR0aCAtIDIgKiBzaXplKSB7XHJcbiAgICAgICAgICAgICAgIGFwcC5zd2FwKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICBpZiAobW91c2VEb3duKSB7XHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgYW5nbGVzIGJhc2VkIG9uIGhvdyBmYXIgd2UgbW92ZWQgc2luY2UgbGFzdCB0aW1lXHJcbiAgICAgIGFuZ2xlWSAtPSAoeCAtIG9sZFgpICogMC4wMTtcclxuICAgICAgYW5nbGVYICs9ICh5IC0gb2xkWSkgKiAwLjAxO1xyXG5cclxuICAgICAgLy8gZG9uJ3QgZ28gdXBzaWRlIGRvd25cclxuICAgICAgYW5nbGVYID0gTWF0aC5tYXgoYW5nbGVYLCAtTWF0aC5QSSAvIDIgKyAwLjAxKTtcclxuICAgICAgYW5nbGVYID0gTWF0aC5taW4oYW5nbGVYLCBNYXRoLlBJIC8gMiAtIDAuMDEpO1xyXG5cclxuICAgICAgLy8gY2xlYXIgdGhlIHNhbXBsZSBidWZmZXJcclxuICAgICAgYXBwLnJlc3RhcnQoKTtcclxuXHJcbiAgICAgIC8vIHJlbWVtYmVyIHRoaXMgY29vcmRpbmF0ZVxyXG4gICAgICBvbGRYID0geDtcclxuICAgICAgb2xkWSA9IHk7XHJcbiAgIH1cclxufVxyXG5cclxubGV0IGludGVuc2l0eVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50ZW5zaXR5UmFuZ2VcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuaW50ZW5zaXR5U2xpZGVyLnZhbHVlID0gXCJcIiArIFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSAqIDEwMDtcclxuaW50ZW5zaXR5U2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSA9IHBhcnNlRmxvYXQoaW50ZW5zaXR5U2xpZGVyLnZhbHVlKSAvIDEwMDtcclxuICAgYXBwLnJlc3RhcnQoKTtcclxufVxyXG5cclxuXHJcbmxldCB0ZW1wZXJhdHVyZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVSYW5nZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5zZXRMaWdodENvbG9yKCk7XHJcbnRlbXBlcmF0dXJlU2xpZGVyLm9uaW5wdXQgPSBzZXRMaWdodENvbG9yXHJcblxyXG5mdW5jdGlvbiBzZXRMaWdodENvbG9yKCkge1xyXG4gICBsZXQgdGVtcGVyYXR1cmUgPSBwYXJzZUZsb2F0KHRlbXBlcmF0dXJlU2xpZGVyLnZhbHVlKTtcclxuICAgVW5pZm9ybXMudUxpZ2h0Q29sb3IgPSBMaWdodENvbG9ycy50b1JHQih0ZW1wZXJhdHVyZSk7XHJcbiAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVNwYW5cIikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICBzcGFuLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlLnRvRml4ZWQoKSArIFwiS1wiO1xyXG5cclxuICAgaWYgKGFwcCkge1xyXG4gICAgICBhcHAucmVzdGFydCgpO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG5sZXQgYmFsbENvbG9yU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWxsQ29sb3JSYW5nZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5iYWxsQ29sb3JTbGlkZXIudmFsdWUgPSAocGFyc2VGbG9hdChiYWxsQ29sb3JTbGlkZXIubWF4KSAqIGhzdkNvbG9yLmZyb21HbENvbG9yKFVuaWZvcm1zLnVCYWxsQ29sb3IpLmgpLnRvU3RyaW5nKCk7XHJcbnNldFNwYW5Db2xvcigpO1xyXG5zZXRCYWxsQ29sb3IoKTtcclxuYmFsbENvbG9yU2xpZGVyLm9uaW5wdXQgPSBzZXRCYWxsQ29sb3JcclxuXHJcbmZ1bmN0aW9uIHNldEJhbGxDb2xvcigpIHtcclxuICAgbGV0IGh1ZSA9IHBhcnNlRmxvYXQoYmFsbENvbG9yU2xpZGVyLnZhbHVlKTtcclxuICAgVW5pZm9ybXMudUJhbGxDb2xvciA9IChuZXcgaHN2Q29sb3IoW2h1ZSAvIHBhcnNlRmxvYXQoYmFsbENvbG9yU2xpZGVyLm1heCksIDAuNywgMC43XSkpLnRvR2xDb2xvcigpO1xyXG5cclxuICAgc2V0U3BhbkNvbG9yKCk7XHJcblxyXG4gICBpZiAoYXBwKSB7XHJcbiAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3BhbkNvbG9yKCkge1xyXG4gICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFsbENvbG9yU3BhblwiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gVW5pZm9ybXMudUJhbGxDb2xvci50b0h0bWxDb2xvcigpLnRvSGV4KCk7XHJcbn1cclxuKi9cclxubGV0IHNraW5Db2xvclJhbmdlID0gbmV3IENvbG9yUmFuZ2Uoc2tpblRvbmVzKTtcclxuXHJcbmxldCBiYWxsQ29sb3JTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbGxDb2xvclJhbmdlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbnNldFNwYW5Db2xvcigpO1xyXG5zZXRCYWxsQ29sb3IoKTtcclxuYmFsbENvbG9yU2xpZGVyLm9uaW5wdXQgPSBzZXRCYWxsQ29sb3JcclxuXHJcbmZ1bmN0aW9uIHNldEJhbGxDb2xvcigpIHtcclxuICAgbGV0IGNvbG9yID0gc2tpbkNvbG9yUmFuZ2UuZ2V0KHBhcnNlRmxvYXQoYmFsbENvbG9yU2xpZGVyLnZhbHVlKSAvIDEwMC4wKTtcclxuICAgVW5pZm9ybXMudUJhbGxDb2xvciA9IG5ldyBnbENvbG9yKFtjb2xvci5yIC8gMjU1LCBjb2xvci5nIC8gMjU1LCBjb2xvci5iIC8gMjU1XSk7XHJcblxyXG4gICBzZXRTcGFuQ29sb3IoKTtcclxuXHJcbiAgIGlmIChhcHApIHtcclxuICAgICAgYXBwLnJlc3RhcnQoKTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTcGFuQ29sb3IoKSB7XHJcbiAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWxsQ29sb3JTcGFuXCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBVbmlmb3Jtcy51QmFsbENvbG9yLnRvSHRtbENvbG9yKCkudG9IZXgoKTtcclxufVxyXG5cclxuXHJcbmxldCBhbWJpZW50SW50ZW5zaXR5U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbWJpZW50SW50ZW5zaXR5UmFuZ2VcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuYW1iaWVudEludGVuc2l0eVNsaWRlci52YWx1ZSA9IFwiXCIgKyBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ICogMTAwO1xyXG5hbWJpZW50SW50ZW5zaXR5U2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIFVuaWZvcm1zLnVBbWJpZW50TGlnaHRJbnRlbnNpdHkgPSBwYXJzZUZsb2F0KGFtYmllbnRJbnRlbnNpdHlTbGlkZXIudmFsdWUpIC8gMTAwO1xyXG4gICBhcHAucmVzdGFydCgpO1xyXG59XHJcblxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxyXFxudW5pZm9ybSBpbnQgdU1vZGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1TWF4Q2hyb21hO1xcclxcblxcclxcbiNkZWZpbmUgTU9ERV9DT0xPUiAwXFxyXFxuI2RlZmluZSBNT0RFX1ZBTFVFIDFcXHJcXG4jZGVmaW5lIE1PREVfQ0hST01BIDJcXHJcXG5cXHJcXG52ZWM0IHdoaXRlID0gdmVjNCgxLjAsIDEuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgcmVkID0gdmVjNCgxLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgb3JhbmdlID0gdmVjNCgxLjAsIDAuNjUsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IHllbGxvdyA9IHZlYzQoMS4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGdyZWVuID0gdmVjNCgwLjAsIDEuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgY3lhbiA9IHZlYzQoMC4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IGJsdWUgPSB2ZWM0KDAuMCwgMC4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibGFjayA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4jZGVmaW5lIE5VTV9DT0xPUlMgNlxcclxcbnZlYzQgY29sb3JzW05VTV9DT0xPUlNdO1xcclxcblxcclxcbnZlYzQgdmFsdWUyQ29sb3IoZmxvYXQgdmFsdWUpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNwYW4gPSAxLjAgLyBmbG9hdChOVU1fQ09MT1JTIC0gMSk7XFxyXFxuICAgdmFsdWUgKj0gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIGlmICh2YWx1ZSA8IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1swXTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAxLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF0gKyB2YWx1ZSAqIChjb2xvcnNbMV0gLSBjb2xvcnNbMF0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDIuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1sxXSArICh2YWx1ZSAtIDEuMCkgKiAoY29sb3JzWzJdIC0gY29sb3JzWzFdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAzLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMl0gKyAodmFsdWUgLSAyLjApICogKGNvbG9yc1szXSAtIGNvbG9yc1syXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzNdICsgKHZhbHVlIC0gMy4wKSAqIChjb2xvcnNbNF0gLSBjb2xvcnNbM10pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDUuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s0XSArICh2YWx1ZSAtIDQuMCkgKiAoY29sb3JzWzVdIC0gY29sb3JzWzRdKTtcXHJcXG4gICB9XFxyXFxuICAgLypcXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDYuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s1XSArICh2YWx1ZSAtIDUuMCkgKiAoY29sb3JzWzZdIC0gY29sb3JzWzVdKTtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbTlVNX0NPTE9SUyAtIDFdO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgY29sb3JzWzBdID0gYmxhY2s7XFxyXFxuICAgY29sb3JzWzFdID0gYmx1ZTtcXHJcXG4gICBjb2xvcnNbMl0gPSBncmVlbjtcXHJcXG4gICBjb2xvcnNbM10gPSB5ZWxsb3c7XFxyXFxuICAgY29sb3JzWzRdID0gb3JhbmdlO1xcclxcbiAgIGNvbG9yc1s1XSA9IHJlZDtcXHJcXG5cXHJcXG4gICBpZiAodU1vZGUgPT0gTU9ERV9WQUxVRSlcXHJcXG4gICB7XFxyXFxuICAgICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbiAgICAgIC8vICAgICAgZmxvYXQgcmdiID0gMC4zICogY29sb3IueCArIDAuNTkgKiBjb2xvci55ICsgMC4xMSAqIGNvbG9yLno7XFxyXFxuICAgICAgZmxvYXQgcmdiID0gY2xhbXAoKGNvbG9yLnIgKyBjb2xvci5nICsgY29sb3IuYikgLyAzLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHJnYiwgcmdiLCByZ2IsIDEuMCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQ0hST01BKVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAodGV4Q29vcmQueCA8IDAuMDMpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZhbHVlMkNvbG9yKHRleENvb3JkLnkpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG4gICAgICAgICBmbG9hdCBhdmcgPSAoY29sb3IuciArIGNvbG9yLmcgKyBjb2xvci5iKSAvIDMuMDtcXHJcXG4gICAgICAgICBmbG9hdCByZ2IgPSAoYWJzKGF2ZyAtIGNvbG9yLnIpICsgYWJzKGF2ZyAtIGNvbG9yLmcpICsgYWJzKGF2ZyAtIGNvbG9yLmIpKSAvICg0LjAgLyAzLjApO1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZhbHVlMkNvbG9yKHJnYiAvIHVNYXhDaHJvbWEpO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG4gICB9XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNjYWxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdVhPZmZzZXQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1WU9mZnNldDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB0ZXhDb29yZCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodVNjYWxlICogdmVydGV4LnggKyB1WE9mZnNldCwgdVNjYWxlICogdmVydGV4LnkgKyB1WU9mZnNldCwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnVuaWZvcm0gdmVjMyB1RXllO1xcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbnVuaWZvcm0gZmxvYXQgdVRleHR1cmVXZWlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGV4dHVyZVNpemU7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGltZVNpbmNlU3RhcnQ7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodFBvcztcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1QW1iaWVudExpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1QmFsbENvbG9yO1xcclxcbnVuaWZvcm0gZmxvYXQgdVBhc3M7XFxyXFxudW5pZm9ybSBmbG9hdCB1TnVtUGFzc2VzO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNhbXBsZTtcXHJcXG5cXHJcXG5jb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDA7XFxyXFxuY29uc3QgZmxvYXQgRVBTSUxPTiA9IDAuMDAwMTtcXHJcXG5jb25zdCBmbG9hdCBJTkZJTklUWSA9IDEwMDAwLjA7XFxyXFxuY29uc3QgZmxvYXQgTElHSFRfU0laRSA9IDAuMTtcXHJcXG5jb25zdCB2ZWMzIFNQSEVSRV9DRU5URVIgPSB2ZWMzKDAsIC0wLjUsIDApO1xcclxcbmNvbnN0IGZsb2F0IFNQSEVSRV9SQURJVVMgPSAwLjU7XFxyXFxuY29uc3QgdmVjMyBET01FX0NFTlRFUiA9IHZlYzMoMCwgMCwgMCk7XFxyXFxuY29uc3QgZmxvYXQgRE9NRV9SQURJVVMgPSA3LjA7XFxyXFxuY29uc3QgZmxvYXQgVkFMID0gMC44O1xcclxcbmNvbnN0IHZlYzMgRE9NRV9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBGTE9PUl9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBBTUJJRU5UX0NPTE9SID0gdmVjMygxLjAsIDEuMCwgMS4wKTtcXHJcXG5jb25zdCBpbnQgTlVNX0xJR0hUUyA9IDY7XFxyXFxuY29uc3QgZmxvYXQgSEVJR0hUID0gNC4wO1xcclxcbmNvbnN0IGZsb2F0IFJBRElVUyA9IDQuMDtcXHJcXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjU7XFxyXFxuXFxyXFxuc3RydWN0IExpZ2h0XFxyXFxue1xcclxcbiAgIGZsb2F0IGludGVuc2l0eTtcXHJcXG4gICBmbG9hdCBzaXplO1xcclxcbiAgIHZlYzMgcG9zO1xcclxcbiAgIHZlYzMgY29sb3I7XFxyXFxufTtcXHJcXG5cXHJcXG5MaWdodCBMaWdodHNbTlVNX0xJR0hUU107XFxyXFxuXFxyXFxuZmxvYXQgaW50ZXJzZWN0U3BoZXJlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXHJcXG4gICBmbG9hdCBhID0gZG90KHJheSwgcmF5KTtcXHJcXG4gICBmbG9hdCBiID0gMi4wICogZG90KHRvU3BoZXJlLCByYXkpO1xcclxcbiAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cyAqIHNwaGVyZVJhZGl1cztcXHJcXG4gICBmbG9hdCBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xcclxcbiAgIGlmIChkaXNjcmltaW5hbnQgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHQxID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBmbG9hdCB0MiA9ICgtYiArIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgaWYgKHQxID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQyID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDI7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yU3BoZXJlKHZlYzMgaGl0LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICByZXR1cm4gKGhpdCAtIHNwaGVyZUNlbnRlcikgLyBzcGhlcmVSYWRpdXM7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6ICsgc2VlZCwgc2NhbGUpKSAqIDQzNzU4LjU0NTMgKyBzZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbihmbG9hdCBzZWVkLCB2ZWMzIG5vcm1hbClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCkgPCAuNSlcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygxLCAwLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygwLCAxLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByICogY29zKGFuZ2xlKSAqIHNkaXIgKyByICogc2luKGFuZ2xlKSAqIHRkaXIgKyBzcXJ0KDEuIC0gdSkgKiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB6ID0gMS4wIC0gMi4wICogdTtcXHJcXG4gICBmbG9hdCByID0gc3FydCgxLjAgLSB6ICogeik7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgcmV0dXJuIHZlYzMociAqIGNvcyhhbmdsZSksIHIgKiBzaW4oYW5nbGUpLCB6KTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihzZWVkKSAqIHNxcnQocmFuZG9tKHZlYzMoMzYuNzUzOSwgNTAuMzY1OCwgMzA2LjI3NTkpLCBzZWVkKSk7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHNoYWRvdyh2ZWMzIG9yaWdpbiwgdmVjMyByYXkpXFxyXFxue1xcclxcbiAgIGZsb2F0IHRTcGhlcmUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIFNQSEVSRV9DRU5URVIsIFNQSEVSRV9SQURJVVMpO1xcclxcbiAgIGlmICh0U3BoZXJlIDwgMS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gMC4wO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiAxLjA7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGNhbGN1bGF0ZUNvbG9yKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSlcXHJcXG57XFxyXFxuICAgdmVjMyBhY2N1bXVsYXRlZENvbG9yID0gdmVjMygwLjApO1xcclxcbiAgIHZlYzMgY29sb3JNYXNrID0gdmVjMygxLjApO1xcclxcblxcclxcbiAgIC8vIG1haW4gcmF5dHJhY2luZyBsb29wXFxyXFxuICAgZm9yIChpbnQgYm91bmNlID0gMDsgYm91bmNlIDwgTUFYX0JPVU5DRVM7IGJvdW5jZSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBjb21wdXRlIHRoZSBpbnRlcnNlY3Rpb24gd2l0aCBldmVyeXRoaW5nXFxyXFxuICAgICAgZmxvYXQgdFNwaGVyZSA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgU1BIRVJFX0NFTlRFUiwgU1BIRVJFX1JBRElVUyk7XFxyXFxuICAgICAgdmVjMyBzdXJmYWNlQ29sb3IgPSB2ZWMzKDAuNSwgMC41LCAwLjUpO1xcclxcblxcclxcbiAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IHJheSBoaXRzIHRoZSBsaWdodCwgcmV0dXJuIHRoZSBsaWdodCBjb2xvci4gVGhpc1xcclxcbiAgICAgICAgIC8vIHNpbXVsYXRlcyBkaXNwbGF5aW5nIHRoZSBsaWdodFxcclxcbiAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2ZWMzIGxpZ2h0UG9zID0gTGlnaHRzW2ldLnBvcztcXHJcXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBsaWdodFBvcywgTGlnaHRzW2ldLnNpemUpIDwgdFNwaGVyZSlcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgcmV0dXJuIExpZ2h0c1tpXS5pbnRlbnNpdHkgKiBMaWdodHNbaV0uY29sb3I7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZmxvYXQgdERvbWUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIERPTUVfQ0VOVEVSLCBET01FX1JBRElVUyk7XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBpbnRlcnNlY3Rpb25cXHJcXG4gICAgICBmbG9hdCB0ID0gSU5GSU5JVFk7XFxyXFxuICAgICAgZmxvYXQgdGZsb29yID0gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgICAgLy8gY2hlY2sgZm9yIGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmRcXHJcXG4gICAgICBpZiAocmF5LnkgPCAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGRpc3RhbmNlIHRvIGZsb29yID0gbnVtIHVuaXQgdmVjdG9ycyByZXF1aXJlZCB0byByZWFjaCB0aGUgZmxvb3JcXHJcXG4gICAgICAgICB0Zmxvb3IgPSAtKG9yaWdpbi55ICsgMS4wKSAvIHJheS55O1xcclxcbiAgICAgICAgIGlmICh0Zmxvb3IgPCB0KVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB0ID0gdGZsb29yO1xcclxcbiAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBGTE9PUl9DT0xPUjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHRTcGhlcmUgPCB0KVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSB2ZWMzKHVCYWxsQ29sb3IpO1xcclxcbiAgICAgICAgIHQgPSB0U3BoZXJlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0RG9tZSA8IHQpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IERPTUVfQ09MT1I7XFxyXFxuICAgICAgICAgdCA9IHREb21lO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBpbmZvIGFib3V0IGhpdFxcclxcbiAgICAgIHZlYzMgaGl0ID0gb3JpZ2luICsgcmF5ICogdDtcXHJcXG4gICAgICB2ZWMzIG5vcm1hbDtcXHJcXG5cXHJcXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbFxcclxcbiAgICAgIGlmICh0ID09IHRmbG9vcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgbm9ybWFsID0gdmVjMygwLjAsIDEuMCwgMC4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0U3BoZXJlKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JTcGhlcmUoaGl0LCBTUEhFUkVfQ0VOVEVSLCBTUEhFUkVfUkFESVVTKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0RG9tZSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgbm9ybWFsID0gbm9ybWFsRm9yU3BoZXJlKGhpdCwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICAgICAvLyBub3JtYWwgPSAtbm9ybWFsRm9yU3BoZXJlKGhpdCwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICAgICBub3JtYWxbMF0gPSAtbm9ybWFsWzBdO1xcclxcbiAgICAgICAgIG5vcm1hbFsxXSA9IC1ub3JtYWxbMV07XFxyXFxuICAgICAgICAgbm9ybWFsWzJdID0gLW5vcm1hbFsyXTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odVRpbWVTaW5jZVN0YXJ0ICsgZmxvYXQoYm91bmNlKSwgbm9ybWFsKTtcXHJcXG5cXHJcXG4gICAgICBjb2xvck1hc2sgKj0gc3VyZmFjZUNvbG9yO1xcclxcblxcclxcbiAgICAgIGlmIChsZW5ndGgoY29sb3JNYXNrKSA8IDAuMDEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZmxvYXQgbGlnaHRJbnRlbnNpdHkgPSBMaWdodHNbaV0uaW50ZW5zaXR5O1xcclxcbiAgICAgICAgIHZlYzMgbGlnaHRQb3MgPSBMaWdodHNbaV0ucG9zO1xcclxcbiAgICAgICAgIHZlYzMgbGlnaHRDb2xvciA9IExpZ2h0c1tpXS5jb2xvcjtcXHJcXG5cXHJcXG4gICAgICAgICAvLyBjb21wdXRlIGRpZmZ1c2UgbGlnaHRpbmcgY29udHJpYnV0aW9uXFxyXFxuICAgICAgICAgdmVjMyB0b0xpZ2h0ID0gbGlnaHRQb3MgLSBoaXQ7XFxyXFxuICAgICAgICAgZmxvYXQgZGlmZnVzZSA9IG1heCgwLjAsIGRvdChub3JtYWxpemUodG9MaWdodCksIG5vcm1hbCkpO1xcclxcblxcclxcbiAgICAgICAgIC8vIHRyYWNlIGEgc2hhZG93IHJheSB0byB0aGUgbGlnaHRcXHJcXG4gICAgICAgICBmbG9hdCBzaGFkb3dJbnRlbnNpdHkgPSBzaGFkb3coaGl0ICsgbm9ybWFsICogRVBTSUxPTiwgdG9MaWdodCk7XFxyXFxuXFxyXFxuICAgICAgICAgLy8gZG8gbGlnaHQgYm91bmNlXFxyXFxuXFxyXFxuICAgICAgICAgLy8gYXBwbHkgbGlnaHQgZmFsbCBvZmYgYXMgZGlzdGFuY2Ugc3F1YXJlcy4gVXNlIGEgbWluIHZhbHVlIGZvciB0aGVcXHJcXG4gICAgICAgICAvLyBsaWdodCBzaXplXFxyXFxuICAgICAgICAgZmxvYXQgcmFkaXVzID0gbWF4KDAuNzUsIExpZ2h0c1tpXS5zaXplKTtcXHJcXG4gICAgICAgICBmbG9hdCBkaXN0ID0gbWF4KDEuMCwgKGxlbmd0aCh0b0xpZ2h0KSAtIHJhZGl1cykgLyByYWRpdXMpO1xcclxcblxcclxcbiAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz1cXHJcXG4gICAgICAgICAgICAgY29sb3JNYXNrICogbGlnaHRDb2xvciAqIChsaWdodEludGVuc2l0eSAvIChkaXN0ICogZGlzdCkgKiBkaWZmdXNlICogc2hhZG93SW50ZW5zaXR5KTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIG5leHQgb3JpZ2luXFxyXFxuICAgICAgb3JpZ2luID0gaGl0O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICByZXR1cm4gY2xhbXAoYWNjdW11bGF0ZWRDb2xvciwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBpZiAoZmxvb3IobW9kKGdsX0ZyYWdDb29yZC54LCB1TnVtUGFzc2VzKSkgIT0gdVBhc3MpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh1U2FtcGxlID09IDAuMCAmJiB1UGFzcyA9PSAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHVUZXh0dXJlU2l6ZSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHJldHVybjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgdmVjMyByYW5kID0gdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHVUaW1lU2luY2VTdGFydCAtIDUzLjApICogTElHSFRfU0laRTtcXHJcXG5cXHJcXG4gICBMaWdodHNbMF0uaW50ZW5zaXR5ID0gdUxpZ2h0SW50ZW5zaXR5O1xcclxcbiAgIExpZ2h0c1swXS5zaXplID0gTElHSFRfU0laRTtcXHJcXG4gICBMaWdodHNbMF0ucG9zID0gdmVjMyh1TGlnaHRQb3MueCArIHJhbmQueCwgdUxpZ2h0UG9zLnkgKyByYW5kLnksIHVMaWdodFBvcy56ICsgcmFuZC56KTtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB2ZWMzKHVMaWdodENvbG9yLngsIHVMaWdodENvbG9yLnksIHVMaWdodENvbG9yLnopO1xcclxcblxcclxcbiAgIGZvciAoaW50IGkgPSAxOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB4ID0gUkFESVVTICogc2luKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArICtyYW5kLng7XFxyXFxuICAgICAgZmxvYXQgeSA9IEhFSUdIVCArICtyYW5kLnk7XFxyXFxuICAgICAgZmxvYXQgeiA9IFJBRElVUyAqIGNvcygyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyArcmFuZC56O1xcclxcblxcclxcbiAgICAgIExpZ2h0c1tpXS5pbnRlbnNpdHkgPSB1QW1iaWVudExpZ2h0SW50ZW5zaXR5O1xcclxcbiAgICAgIExpZ2h0c1tpXS5zaXplID0gMi4wICogTElHSFRfU0laRTtcXHJcXG4gICAgICBMaWdodHNbaV0ucG9zID0gdmVjMyh4LCB5LCB6KTtcXHJcXG4gICAgICBMaWdodHNbaV0uY29sb3IgPSBBTUJJRU5UX0NPTE9SO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWMzIHRleHR1cmUyID0gdGV4dHVyZTJEKHVUZXh0dXJlLCBnbF9GcmFnQ29vcmQueHkgLyB1VGV4dHVyZVNpemUpLnJnYjtcXHJcXG4gICBnbF9GcmFnQ29sb3IgPSB2ZWM0KG1peChjYWxjdWxhdGVDb2xvcih1RXllLCBpbml0aWFsUmF5KSwgdGV4dHVyZTIsIHVUZXh0dXJlV2VpZ2h0KSwgMS4wKTtcXHJcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG51bmlmb3JtIHZlYzMgdUV5ZSwgdVJheTAwLCB1UmF5MDEsIHVSYXkxMCwgdVJheTExO1xcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHZlYzIgcGVyY2VudCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG4gICBpbml0aWFsUmF5ID0gbWl4KG1peCh1UmF5MDAsIHVSYXkwMSwgcGVyY2VudC55KSwgbWl4KHVSYXkxMCwgdVJheTExLCBwZXJjZW50LnkpLCBwZXJjZW50LngpO1xcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgsIDEuMCk7XFxyXFxufVxcclxcblwiIl0sInNvdXJjZVJvb3QiOiIifQ==