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








var PathTracer = /** @class */ (function () {
    function PathTracer() {
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
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].textureSize, // width
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].textureSize, // height
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
        this.sampleCount = 0;
        this.tracerProgram = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].compileShader(_toTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_6__["default"], _toTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_7__["default"]);
        this.tracerVertexAttribute = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getAttribLocation(this.tracerProgram, 'vertex');
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].enableVertexAttribArray(this.tracerVertexAttribute);
    }
    ;
    PathTracer.prototype.restart = function () {
        this.sampleCount = 0;
    };
    PathTracer.prototype.updateTexture = function (modelviewProjection, timeSinceStart) {
        // implement aliasing by random sampling within a pixel
        var x = (Math.random() * 2 - 1) / _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].textureSize;
        var y = (Math.random() * 2 - 1) / _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].textureSize;
        var z = 0;
        var v = new _glVec__WEBPACK_IMPORTED_MODULE_2__["glVec3"]([x, y, z]);
        var jitter = _glMat__WEBPACK_IMPORTED_MODULE_1__["glMat4"].fromTranslation(v);
        var matrix = jitter.multM(modelviewProjection).invert();
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ray00 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, -1, -1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ray01 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, -1, +1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ray10 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, +1, -1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ray11 = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].getEyeRay(matrix, +1, +1);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].timeSinceStart = timeSinceStart;
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].textureWeight = this.sampleCount / (this.sampleCount + 1);
        // set uniforms
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.tracerProgram);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.tracerProgram);
        // render to texture
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].viewport(0, 0, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].textureSize, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].textureSize);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.tracerProgram);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[0]);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindBuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindFramebuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, this.frameBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].framebufferTexture2D(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].COLOR_ATTACHMENT0, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[1], 0);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].vertexAttribPointer(this.tracerVertexAttribute, 2, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, false, 0, 0);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindFramebuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, null);
        // ping pong textures
        this.textures.reverse();
        this.sampleCount++;
    };
    ;
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
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
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
    lightIntensity: 1.0,
    lightColor: new _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]([1.0, 1.0, 1.0]),
    ballColor: new _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]([0.5, 0.5, 0.8]),
    eye: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    light: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([-0.6, 0.7, 0.8]),
    textureSize: 512,
    textureWeight: 0,
    timeSinceStart: 0,
    ray00: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    ray01: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    ray10: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    ray11: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
};
var Shaders = /** @class */ (function () {
    function Shaders() {
    }
    Shaders.getEyeRay = function (matrix, x, y) {
        var vec = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec4"]([x, y, 0, 1]);
        return matrix.multV(vec).divideByW().subtract(Uniforms.eye);
    };
    Shaders.setUniforms = function (program) {
        for (var name in Uniforms) {
            var value = Uniforms[name];
            var location = _index__WEBPACK_IMPORTED_MODULE_1__["gl"].getUniformLocation(program, name);
            if (location == null)
                continue;
            else if (value instanceof _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]) {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform3fv(location, new Float32Array([value.get(0), value.get(1), value.get(2)]));
            }
            else if (value instanceof _glColor__WEBPACK_IMPORTED_MODULE_2__["glColor"]) {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform3fv(location, new Float32Array([value.r, value.g, value.b]));
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




var App = /** @class */ (function () {
    function App() {
        this.tracer = new _PathTracer__WEBPACK_IMPORTED_MODULE_2__["PathTracer"]();
    }
    App.prototype.updateTexture = function (timeSinceStart) {
        this.modelview = _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"].makeLookAt(_Shaders__WEBPACK_IMPORTED_MODULE_1__["Uniforms"].eye, new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]), // center point
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
        this.tracer.restart();
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

/***/ "./src/hsvColor.ts":
/*!*************************!*\
  !*** ./src/hsvColor.ts ***!
  \*************************/
/*! exports provided: hsvColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvColor", function() { return hsvColor; });
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");

/**
 * Class for representing color values. Values are on a 0-1 scale.
 */
var hsvColor = /** @class */ (function () {
    /**
     * @param color HSV values to store in this object
     */
    function hsvColor(color) {
        this.h = color[0];
        this.s = color[1];
        this.v = color[2];
    }
    /**
     * Creates an hsvColor object from an htmlColor object.
     *
     * @param color The htmlColor object.
     * @returns The hsvColor object.
     */
    hsvColor.fromHtmlColor = function (color) {
        var r = color.r;
        var g = color.g;
        var b = color.b;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var d = max - min;
        var h;
        var s = (max === 0 ? 0 : d / max);
        var v = max / 255;
        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b ? 6 : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break;
        }
        return new hsvColor([h, s, v]);
    };
    /**
     * Creates an hsvColor object from a glColor object.
     *
     * @param color The glColor object.
     * @returns The hsvColor object.
     */
    hsvColor.fromGlColor = function (color) {
        return hsvColor.fromHtmlColor(color.toHtmlColor());
    };
    /**
     * Creates a glColor object from this object.
     *
     * @returns The glColor object.
     */
    hsvColor.prototype.toGlColor = function () {
        var r, g, b, i, f, p, q, t;
        i = Math.floor(this.h * 6);
        f = this.h * 6 - i;
        p = this.v * (1 - this.s);
        q = this.v * (1 - f * this.s);
        t = this.v * (1 - (1 - f) * this.s);
        switch (i % 6) {
            case 0:
                r = this.v, g = t, b = p;
                break;
            case 1:
                r = q, g = this.v, b = p;
                break;
            case 2:
                r = p, g = this.v, b = t;
                break;
            case 3:
                r = p, g = q, b = this.v;
                break;
            case 4:
                r = t, g = p, b = this.v;
                break;
            case 5:
                r = this.v, g = p, b = q;
                break;
        }
        return new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([r, g, b]);
    };
    /**
     * Creates an htmlColor object from this object.
     *
     * @returns The glColor object.
     */
    hsvColor.prototype.toHtmlColor = function () {
        return this.toGlColor().toHtmlColor();
    };
    return hsvColor;
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
/*! exports provided: gl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony import */ var _Shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shaders */ "./src/Shaders.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LightColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LightColors */ "./src/LightColors.ts");
/* harmony import */ var _hsvColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsvColor */ "./src/hsvColor.ts");





var app;
var gl = null;
var canvas;
var angleX = 0;
var angleY = 0;
var zoomZ = 3.0;
function component() {
    var element = document.createElement('div');
    element.innerHTML =
        '<canvas id="canvas"></canvas>\n' +
            '<br />\n' +
            '<label for="intensityRange">Intensity</label>\n' +
            '<input id="intensityRange" type="range" min="20" max="100" value="50" class="slider">\n' +
            '<br />\n' +
            '<label for="temperatureRange">Temperature</label>\n' +
            '<input id="temperatureRange" type="range" min="2000" max="8000" value="' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '" class="slider">\n' +
            '<span id="temperatureSpan">' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '</span>\n' +
            '<br>\n' +
            '<label for="ballColorRange">Ball Color</label>\n' +
            '<input id="ballColorRange" type="range" min="0" max="1000" value="' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '" class="slider">\n' +
            '<span id="ballColorSpan" />';
    return element;
}
document.body.appendChild(component());
function tick(timeSinceStart) {
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].eye.set(0, zoomZ * Math.sin(angleY) * Math.cos(angleX));
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].eye.set(1, zoomZ * Math.sin(angleX));
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].eye.set(2, zoomZ * Math.cos(angleY) * Math.cos(angleX));
    app.updateTexture(timeSinceStart);
    app.displayTexture();
}
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
        var start = new Date().getTime();
        setInterval(function () { tick(((new Date()).getTime() - start) * 0.001); }, 1000 / 60);
        canvas.ontouchstart = function (event) {
            event.preventDefault();
            if (event.touches.length === 1) {
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
intensitySlider.value = "" + _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightIntensity * 50;
intensitySlider.oninput = function () {
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightIntensity = parseFloat(intensitySlider.value) / 50;
    app.restart();
};
var temperatureSlider = document.getElementById("temperatureRange");
setLightColor();
temperatureSlider.oninput = setLightColor;
function setLightColor() {
    var temperature = parseFloat(temperatureSlider.value);
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightColor = _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].toRGB(temperature);
    var span = document.getElementById("temperatureSpan");
    span.innerText = temperature.toFixed() + "K";
    if (app) {
        app.restart();
    }
}
var ballColorSlider = document.getElementById("ballColorRange");
ballColorSlider.value = (parseFloat(ballColorSlider.max) * _hsvColor__WEBPACK_IMPORTED_MODULE_4__["hsvColor"].fromGlColor(_Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ballColor).v).toString();
setSpanColor();
ballColorSlider.oninput = setBallColor;
function setBallColor() {
    var hue = parseFloat(ballColorSlider.value);
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ballColor = (new _hsvColor__WEBPACK_IMPORTED_MODULE_4__["hsvColor"]([hue / parseFloat(ballColorSlider.max), 0.6, 0.6])).toGlColor();
    setSpanColor();
    if (app) {
        app.restart();
    }
}
function setSpanColor() {
    var span = document.getElementById("ballColorSpan");
    span.style.backgroundColor = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ballColor.toHtmlColor().toHex();
}


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
/* harmony default export */ __webpack_exports__["default"] = (" precision highp float;\r\n varying vec2 texCoord;\r\n uniform sampler2D texture;\r\n\r\n void main()\r\n {\r\n   gl_FragColor = texture2D(texture, texCoord);\r\n }\r\n");

/***/ }),

/***/ "./src/toScreenVertex.glsl":
/*!*********************************!*\
  !*** ./src/toScreenVertex.glsl ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" attribute vec3 vertex;\r\n varying vec2 texCoord;\r\n \r\n void main()\r\n {\r\n   texCoord = vertex.xy * 0.5 + 0.5;\r\n   gl_Position = vec4(vertex, 1.0);\r\n }\r\n");

/***/ }),

/***/ "./src/toTextureFragment.glsl":
/*!************************************!*\
  !*** ./src/toTextureFragment.glsl ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" precision highp float;\r\n uniform vec3 eye;\r\n varying vec3 initialRay;\r\n uniform float textureWeight;\r\n uniform float textureSize;\r\n uniform float timeSinceStart;\r\n uniform sampler2D texture;\r\n uniform vec3 light;\r\n uniform float lightIntensity;\r\n uniform vec3 lightColor;\r\n uniform vec3 ballColor;\r\n\r\n const int BOUNCES = 5;\r\n const float EPSILON = 0.0001;\r\n const float INFINITY = 10000.0;\r\n const float LIGHT_SIZE = 0.1;\r\n const vec3 SPHERE_CENTER = vec3(0, -0.5, 0);\r\n const float SPHERE_RADIUS = 0.5;\r\n\r\n float intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius)\r\n {\r\n   vec3 toSphere = origin - sphereCenter;\r\n   float a = dot(ray, ray);\r\n   float b = 2.0 * dot(toSphere, ray);\r\n   float c = dot(toSphere, toSphere) - sphereRadius*sphereRadius;\r\n   float discriminant = b*b - 4.0*a*c;\r\n   if(discriminant > 0.0) {\r\n     float t = (-b - sqrt(discriminant)) / (2.0 * a);\r\n     if(t > 0.0) return t;\r\n   }\r\n   return INFINITY;\r\n }\r\n\r\n vec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius) \r\n {\r\n   return (hit - sphereCenter) / sphereRadius;\r\n }\r\n\r\n float random(vec3 scale, float seed) \r\n {\r\n   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\r\n }\r\n\r\n vec3 cosineWeightedDirection(float seed, vec3 normal) \r\n {\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float r = sqrt(u);\r\n   float angle = 6.283185307179586 * v;\r\n   // compute basis from normal\r\n   vec3 sdir, tdir;\r\n   if (abs(normal.x)<.5) \r\n   {\r\n     sdir = cross(normal, vec3(1,0,0));\r\n   }\r\n   else \r\n   {\r\n     sdir = cross(normal, vec3(0,1,0));\r\n   }\r\n   tdir = cross(normal, sdir);\r\n   return r*cos(angle)*sdir + r*sin(angle)*tdir + sqrt(1.-u)*normal;\r\n }\r\n\r\n vec3 uniformlyRandomDirection(float seed) \r\n {\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float z = 1.0 - 2.0 * u;\r\n   float r = sqrt(1.0 - z * z);\r\n   float angle = 6.283185307179586 * v;\r\n   return vec3(r * cos(angle), r * sin(angle), z);\r\n }\r\n\r\n vec3 uniformlyRandomVector(float seed) \r\n {\r\n   return uniformlyRandomDirection(seed) * sqrt(random(vec3(36.7539, 50.3658, 306.2759), seed));\r\n }\r\n\r\n float shadow(vec3 origin, vec3 ray) \r\n {\r\n   float tSphere = intersectSphere(origin, ray, SPHERE_CENTER, SPHERE_RADIUS);\r\n   if(tSphere < 1.0)\r\n   {\r\n     return 0.0;\r\n   }\r\n   else\r\n   {\r\n     return 1.0;\r\n   }\r\n }\r\n\r\n vec3 calculateColor(vec3 origin, vec3 ray, vec3 light) \r\n {\r\n   vec3 colorMask = lightColor;\r\n   vec3 accumulatedColor = vec3(0.0);\r\n\r\n   // main raytracing loop\r\n   for(int bounce = 0; bounce < BOUNCES; bounce++) \r\n   {\r\n      // if the first ray hits the light, return the light color. This simulates\r\n      // displaying the light\r\n      if ( bounce == 0)\r\n      {\r\n         if (intersectSphere(origin, ray, light, LIGHT_SIZE)<INFINITY)\r\n         {\r\n            return (lightIntensity/2.0)*lightColor;\r\n         }\r\n      }\r\n     // compute the intersection with everything\r\n     float tSphere = intersectSphere(origin, ray, SPHERE_CENTER, SPHERE_RADIUS);\r\n     vec3 surfaceColor = vec3(0.5);\r\n\r\n     // find the closest intersection\r\n     float t = INFINITY;\r\n     float tfloor = INFINITY;\r\n\r\n     // check for intersection with the ground\r\n     if (ray.y < 0.0)\r\n     {\r\n       // distance to floor = num unit vectors required to reach the floor\r\n       tfloor = -(origin.y+1.0)/ray.y;\r\n       if (tfloor < t )\r\n       {\r\n         t = tfloor;\r\n       }\r\n     }\r\n\r\n     if(tSphere < t)\r\n     {\r\n       surfaceColor = vec3(ballColor);\r\n       t = tSphere;\r\n     }\r\n\r\n     // info about hit\r\n     vec3 hit = origin + ray * t;\r\n     float specularHighlight = 0.0;\r\n     vec3 normal;\r\n\r\n     // calculate the normal\r\n     if(t == tfloor)\r\n     {\r\n       normal = vec3(0.0,1.0,0.0);\r\n     }\r\n     else if(t == tSphere)\r\n     {\r\n       normal = normalForSphere(hit, SPHERE_CENTER, SPHERE_RADIUS);\r\n     }\r\n     else\r\n     {\r\n       break;\r\n     }\r\n\r\n     ray = cosineWeightedDirection(timeSinceStart + float(bounce), normal);\r\n\r\n     // compute diffuse lighting contribution\r\n     vec3 toLight = light - hit;\r\n     float diffuse = max(0.0, dot(normalize(toLight), normal));\r\n\r\n     // trace a shadow ray to the light\r\n     float shadowIntensity = shadow(hit + normal * EPSILON, toLight);\r\n\r\n     // do light bounce\r\n     colorMask *= surfaceColor;\r\n     accumulatedColor += colorMask * (lightIntensity * diffuse * shadowIntensity);\r\n     accumulatedColor += colorMask * specularHighlight * shadowIntensity;\r\n\r\n     // calculate next origin\r\n     origin = hit;\r\n   }\r\n\r\n   return accumulatedColor;\r\n }\r\n\r\n void main() \r\n {\r\n   vec3 newLight = light + uniformlyRandomVector(timeSinceStart - 53.0) * LIGHT_SIZE;\r\n   vec3 texture2 = texture2D(texture, gl_FragCoord.xy / textureSize).rgb;\r\n   gl_FragColor = vec4(mix(calculateColor(eye, initialRay, newLight), texture2, textureWeight), 1.0);\r\n }");

/***/ }),

/***/ "./src/toTextureVertex.glsl":
/*!**********************************!*\
  !*** ./src/toTextureVertex.glsl ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" attribute vec3 vertex;\r\n uniform vec3 eye, ray00, ray01, ray10, ray11;\r\n varying vec3 initialRay;\r\n\r\n void main()\r\n {\r\n   vec2 percent = vertex.xy * 0.5 + 0.5;\r\n   initialRay = mix(mix(ray00, ray01, percent.y), mix(ray10, ray11, percent.y), percent.x);\r\n   gl_Position = vec4(vertex, 1.0);\r\n }\r\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9MaWdodENvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aFRyYWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hhZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yV2l0aFRlbXBlcmF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9nbE1hdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xWZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzdkNvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9odG1sQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvU2NyZWVuRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvdG9TY3JlZW5WZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvdG9UZXh0dXJlRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvdG9UZXh0dXJlVmVydGV4Lmdsc2wiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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LENBQUMsQ0FBQztRQUMzRixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvRixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQyw0QkFBNEI7UUFDNUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEYsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7UUFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFTLEdBQWhCO1FBQ0csSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUUxQixL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LENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVsQixRQUFRLEdBQUcsRUFBRTtZQUNWLEtBQUssR0FBRztnQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdkIsS0FBSyxDQUFDO2dCQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0QsS0FBSyxDQUFDO2dCQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDL0MsS0FBSyxDQUFDO2dCQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07U0FDakQ7UUFFRCxPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFD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TSxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xcclxcbi5zbGlkZXI6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgc2hvd24gb24gbW91c2Utb3ZlciAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiNiYWxsQ29sb3JTcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLnNsaWRlciB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2JhbGxDb2xvclNwYW4ge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbGFiZWwge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuICAjdGVtcGVyYXR1cmVTcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyoqXHJcbiAqIENsYXNzIGZvciByZXByZXNlbnRpbmcgY29sb3IgdmFsdWVzLiBWYWx1ZXMgbWF5IGJlIG9uIGEgMC0xIG9yIDAtMjU1IHNjYWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICAgcHVibGljIHJlYWRvbmx5IHI6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IGc6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IGI6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgUkdCIHZhbHVlcyB0byBzdG9yZSBpbiB0aGlzIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG4gICAgICB0aGlzLnIgPSBjb2xvclswXTtcclxuICAgICAgdGhpcy5nID0gY29sb3JbMV07XHJcbiAgICAgIHRoaXMuYiA9IGNvbG9yWzJdO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIH0gZnJvbSBcIi4vZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBnZXR0aW5nIFJHQiB2YWx1ZXMgZm9yIGNvbG9yIHRlbXBlcmF0dXJlcy4gUkdCIHZhbHVlc1xyXG4gKiBhcmUgYmV0d2VlbiAwIGFuZCAxLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExpZ2h0Q29sb3JzIHtcclxuICAgLyoqXHJcbiAgICAqIEtub3duIGNvbG9yIHZhbHVlcy4gRm9yIG90aGVyIHJlcXVlc3RzIHRoZSBjbGFzcyB3aWxsIHJldHVybiBpbnRlcnBvbGF0ZWQgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb2xvcnM6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmVbXSA9IFtcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTQ3IC8gMjU1LCA0MSAvIDI1NV0sIDE5MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxOTcgLyAyNTUsIDE0MyAvIDI1NV0sIDI2MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyMTQgLyAyNTUsIDE3MCAvIDI1NV0sIDI4NTApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNDEgLyAyNTUsIDIyNCAvIDI1NV0sIDMyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTAgLyAyNTUsIDI0NCAvIDI1NV0sIDUyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1MSAvIDI1NV0sIDU0MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1NSAvIDI1NV0sIDYwMDApLCAvLyBkYXlsaWdodFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjAxIC8gMjU1LCAyMjYgLyAyNTUsIDI1NSAvIDI1NV0sIDcwMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbNjQgLyAyNTUsIDE1NiAvIDI1NSwgMjU1IC8gMjU1XSwgMjAwMDApLFxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgZGF5bGlnaHQoKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvUkdCKDYwMDApO1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtaW5pbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1pblRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heGltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWF4VGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIENvbG9yIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIHRvUkdCKHRlbXBlcmF0dXJlOiBudW1iZXIpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuXHJcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA8PSB0aGlzLm1pblRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0ZW1wZXJhdHVyZSA+PSB0aGlzLm1heFRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMSA9IHRoaXMuY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY29sb3IyID0gdGhpcy5jb2xvcnNbaSArIDFdO1xyXG4gICAgICAgICAgICBpZiAodGVtcGVyYXR1cmUgPj0gY29sb3IxLnRlbXBlcmF0dXJlICYmIHRlbXBlcmF0dXJlIDw9IGNvbG9yMi50ZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAodGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpIC8gKGNvbG9yMi50ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yMS5yICsgcmF0aW8gKiAoY29sb3IyLnIgLSBjb2xvcjEucik7XHJcbiAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IxLmcgKyByYXRpbyAqIChjb2xvcjIuZyAtIGNvbG9yMS5nKTtcclxuICAgICAgICAgICAgICAgbGV0IGIgPSBjb2xvcjEuYiArIHJhdGlvICogKGNvbG9yMi5iIC0gY29sb3IxLmIpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoW3IsIGcsIGJdLCB0ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc2hvdWxkbid0IGdldCBoZXJlLCBidXQgaWYgd2UgZG8sIHJldHVybiB0aGUgbGFzdCBjb2xvclxyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiXHJcbi8qXHJcbiBXZWJHTCBQYXRoIFRyYWNpbmcgKGh0dHA6Ly9tYWRlYnlldmFuLmNvbS93ZWJnbC1wYXRoLXRyYWNpbmcvKVxyXG4gTGljZW5zZTogTUlUIExpY2Vuc2UgKHNlZSBiZWxvdylcclxuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTAgRXZhbiBXYWxsYWNlXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cclxuIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXHJcbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcclxuIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxyXG4gY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxyXG4gU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcclxuIGNvbmRpdGlvbnM6XHJcblxyXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcbiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG4gSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcbiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgU2hhZGVycywgVW5pZm9ybXMgfSBmcm9tICcuL1NoYWRlcnMnO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tICcuL2dsTWF0JztcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB0b1NjcmVlblZlcnRleFNvdXJjZSBmcm9tICcuL3RvU2NyZWVuVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSBmcm9tICcuL3RvU2NyZWVuRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVWZXJ0ZXhTb3VyY2UgZnJvbSAnLi90b1RleHR1cmVWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSBmcm9tICcuL3RvVGV4dHVyZUZyYWdtZW50Lmdsc2wnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXIge1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVzOiBXZWJHTFRleHR1cmVbXTtcclxuICAgcHJpdmF0ZSByZW5kZXJQcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgcmVuZGVyVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgc2FtcGxlQ291bnQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB0cmFjZXJQcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdHJhY2VyVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcblxyXG4gICBwcml2YXRlIHZlcnRpY2VzID0gW1xyXG4gICAgICAtMSwgLTEsXHJcbiAgICAgIC0xLCArMSxcclxuICAgICAgKzEsIC0xLFxyXG4gICAgICArMSwgKzFcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgLy8gY3JlYXRlIHZlcnRleCBidWZmZXIgLSB0aGUgYmxvY2sgd2UnbGwgZHJhdyBvdXIgcmVuZGVyZWQgdGV4dHVyZSBvblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGZyYW1lYnVmZmVyXHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHR1cmVzXHJcbiAgICAgIGdsLmdldEV4dGVuc2lvbignRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdCcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKGdsLmNyZWF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbaV0pO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgICAgIGdsLlJHQkEzMkYsICAgICAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy50ZXh0dXJlU2l6ZSwgICAvLyB3aWR0aFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy50ZXh0dXJlU2l6ZSwgICAvLyBoZWlnaHRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgICAgIGdsLlJHQkEsICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICAgICBnbC5GTE9BVCwgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHJlbmRlciBzaGFkZXJcclxuICAgICAgdGhpcy5yZW5kZXJQcm9ncmFtID0gU2hhZGVycy5jb21waWxlU2hhZGVyKHRvU2NyZWVuVmVydGV4U291cmNlLCB0b1NjcmVlbkZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnJlbmRlclByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgdGhpcy5zYW1wbGVDb3VudCA9IDA7XHJcbiAgICAgIHRoaXMudHJhY2VyUHJvZ3JhbSA9IFNoYWRlcnMuY29tcGlsZVNoYWRlcih0b1RleHR1cmVWZXJ0ZXhTb3VyY2UsIHRvVGV4dHVyZUZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy50cmFjZXJWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRyYWNlclByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50cmFjZXJWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc2FtcGxlQ291bnQgPSAwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZShtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQsIHRpbWVTaW5jZVN0YXJ0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBhbGlhc2luZyBieSByYW5kb20gc2FtcGxpbmcgd2l0aGluIGEgcGl4ZWxcclxuICAgICAgbGV0IHggPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnRleHR1cmVTaXplO1xyXG4gICAgICBsZXQgeSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gVW5pZm9ybXMudGV4dHVyZVNpemU7XHJcbiAgICAgIGxldCB6ID0gMDtcclxuXHJcbiAgICAgIGxldCB2ID0gbmV3IGdsVmVjMyhbeCwgeSwgel0pO1xyXG4gICAgICBsZXQgaml0dGVyID0gZ2xNYXQ0LmZyb21UcmFuc2xhdGlvbih2KTtcclxuICAgICAgbGV0IG1hdHJpeCA9IGppdHRlci5tdWx0TShtb2RlbHZpZXdQcm9qZWN0aW9uKS5pbnZlcnQoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnJheTAwID0gU2hhZGVycy5nZXRFeWVSYXkobWF0cml4LCAtMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy5yYXkwMSA9IFNoYWRlcnMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsICsxKTtcclxuICAgICAgVW5pZm9ybXMucmF5MTAgPSBTaGFkZXJzLmdldEV5ZVJheShtYXRyaXgsICsxLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnJheTExID0gU2hhZGVycy5nZXRFeWVSYXkobWF0cml4LCArMSwgKzEpO1xyXG4gICAgICBVbmlmb3Jtcy50aW1lU2luY2VTdGFydCA9IHRpbWVTaW5jZVN0YXJ0O1xyXG4gICAgICBVbmlmb3Jtcy50ZXh0dXJlV2VpZ2h0ID0gdGhpcy5zYW1wbGVDb3VudCAvICh0aGlzLnNhbXBsZUNvdW50ICsgMSk7XHJcblxyXG4gICAgICAvLyBzZXQgdW5pZm9ybXNcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRyYWNlclByb2dyYW0pO1xyXG4gICAgICBTaGFkZXJzLnNldFVuaWZvcm1zKHRoaXMudHJhY2VyUHJvZ3JhbSk7XHJcblxyXG4gICAgICAvLyByZW5kZXIgdG8gdGV4dHVyZVxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBVbmlmb3Jtcy50ZXh0dXJlU2l6ZSwgVW5pZm9ybXMudGV4dHVyZVNpemUpO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMudHJhY2VyUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMV0sIDApO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudHJhY2VyVmVydGV4QXR0cmlidXRlLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIHBpbmcgcG9uZyB0ZXh0dXJlc1xyXG4gICAgICB0aGlzLnRleHR1cmVzLnJldmVyc2UoKTtcclxuICAgICAgdGhpcy5zYW1wbGVDb3VudCsrO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG5cclxuICAgICAgdmFyIGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIHNpemUgPSA1MTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucmVuZGVyUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMucmVuZGVyVmVydGV4QXR0cmlidXRlLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnbFZlYzMsIGdsVmVjNCB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBmb3IgdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVVuaWZvcm1zIHtcclxuICAgbGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgbGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgYmFsbENvbG9yOiBnbENvbG9yLFxyXG4gICBleWU6IGdsVmVjMyxcclxuICAgbGlnaHQ6IGdsVmVjMyxcclxuICAgdGV4dHVyZVNpemU6IG51bWJlcixcclxuICAgdGV4dHVyZVdlaWdodDogbnVtYmVyLFxyXG4gICB0aW1lU2luY2VTdGFydDogbnVtYmVyLFxyXG4gICByYXkwMDogZ2xWZWMzLFxyXG4gICByYXkwMTogZ2xWZWMzLFxyXG4gICByYXkxMDogZ2xWZWMzLFxyXG4gICByYXkxMTogZ2xWZWMzLFxyXG4gICBbcHJvcE5hbWU6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgdmFyIFVuaWZvcm1zOiBJVW5pZm9ybXMgPSB7XHJcbiAgIGxpZ2h0SW50ZW5zaXR5OiAxLjAsXHJcbiAgIGxpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFsxLjAsIDEuMCwgMS4wXSksXHJcbiAgIGJhbGxDb2xvcjogbmV3IGdsQ29sb3IoWzAuNSwgMC41LCAwLjhdKSxcclxuICAgZXllOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIGxpZ2h0OiBuZXcgZ2xWZWMzKFstMC42LCAwLjcsIDAuOF0pLCAvLyBTQVcgbGlnaHQgcG9zaXRpb25cclxuICAgdGV4dHVyZVNpemU6IDUxMixcclxuICAgdGV4dHVyZVdlaWdodDogMCxcclxuICAgdGltZVNpbmNlU3RhcnQ6IDAsXHJcbiAgIHJheTAwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHJheTAxOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHJheTExOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFkZXJzIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0RXllUmF5KG1hdHJpeDogZ2xNYXQ0LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWM0KFt4LCB5LCAwLCAxXSk7XHJcbiAgICAgIHJldHVybiBtYXRyaXgubXVsdFYodmVjKS5kaXZpZGVCeVcoKS5zdWJ0cmFjdChVbmlmb3Jtcy5leWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHNldFVuaWZvcm1zKHByb2dyYW06IFdlYkdMUHJvZ3JhbSkge1xyXG4gICAgICBmb3IgKHZhciBuYW1lIGluIFVuaWZvcm1zKSB7XHJcbiAgICAgICAgIHZhciB2YWx1ZSA9IFVuaWZvcm1zW25hbWVdO1xyXG4gICAgICAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XHJcbiAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbFZlYzMpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuZ2V0KDApLCB2YWx1ZS5nZXQoMSksIHZhbHVlLmdldCgyKV0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsQ29sb3IpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuciwgdmFsdWUuZywgdmFsdWUuYl0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGNvbXBpbGVTb3VyY2Uoc291cmNlOiBzdHJpbmcsIHR5cGU6IG51bWJlcikge1xyXG4gICAgICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdjb21waWxlIGVycm9yOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZVNoYWRlcih2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZykge1xyXG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIFNoYWRlcnMuY29tcGlsZVNvdXJjZSh2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIFNoYWRlcnMuY29tcGlsZVNvdXJjZShmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKSk7XHJcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xyXG4gICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdsaW5rIGVycm9yOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlclByb2dyYW07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tIFwiLi9TaGFkZXJzXCI7XHJcbmltcG9ydCB7IFBhdGhUcmFjZXIgfSBmcm9tIFwiLi9QYXRoVHJhY2VyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgcHVibGljIHRyYWNlciA9IG5ldyBQYXRoVHJhY2VyKCk7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3OiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZSh0aW1lU2luY2VTdGFydDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gZ2xNYXQ0Lm1ha2VMb29rQXQoXHJcbiAgICAgICAgIFVuaWZvcm1zLmV5ZSxcclxuICAgICAgICAgbmV3IGdsVmVjMyhbMCwgMCwgMF0pLCAgLy8gY2VudGVyIHBvaW50XHJcbiAgICAgICAgIG5ldyBnbFZlYzMoWzAsIDEsIDBdKSAgIC8vIHVwIHZlY3RvclxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5wcm9qZWN0aW9uID0gZ2xNYXQ0Lm1ha2VQZXJzcGVjdGl2ZSg1NSwgMSwgMC4xLCAxMDApO1xyXG4gICAgICB0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24gPSB0aGlzLnByb2plY3Rpb24ubXVsdE0odGhpcy5tb2RlbHZpZXcpO1xyXG4gICAgICB0aGlzLnRyYWNlci51cGRhdGVUZXh0dXJlKHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbiwgdGltZVNpbmNlU3RhcnQpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnRyYWNlci5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudHJhY2VyLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvciBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhbiBodG1sIGNvbG9yIG9iamVjdCAoMC0yNTUgYmFzZWQpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0h0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5yKTtcclxuICAgICAgbGV0IGcgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuZyk7XHJcbiAgICAgIGxldCBiID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgYWRkcyB0ZW1wZXJhdHVyZSB0byBhIENvbG9yIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUgZXh0ZW5kcyBnbENvbG9yIHtcclxuICAgLyoqXHJcbiAgICAqIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHVibGljIHRlbXBlcmF0dXJlOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKiBAcGFyYW0gdGVtcGVyYXR1cmUgVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdLCB0ZW1wZXJhdHVyZTogbnVtYmVyKSB7XHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzQsIGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyBtYXRyaXggZm9yIHVzZSBpbiBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xNYXQ0IHtcclxuICAgLyoqIFRoZSBtYXRyaXggdmFsdWUgc3RvcmVkIGFzIGEgMTYgZWxlbWVudCBhcnJheSAqL1xyXG4gICBwcml2YXRlIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbE1hdDQge1xyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NCh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCB2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhIHZlY3RvciBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0Vih2ZWM6IGdsVmVjNCk6IGdsVmVjNCB7XHJcbiAgICAgIGxldCB2YWxzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tyb3cgKiA0ICsgY29sXSAqIHZlYy5nZXQoY29sKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YWxzLnB1c2goc3VtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjNCh2YWxzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhbm90aGVyIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBtYXRyaXguXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRNKG90aGVyOiBnbE1hdDQpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5nZXQocm93LCBpKSAqIG90aGVyLmdldChpLCBjb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocm93LCBjb2wsIHN1bSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEludmVydHMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGludmVydCgpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRyYW5zcG9zZXMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBnbE1hdDQge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZhbHVlcyA9IHJlc3VsdC52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgdHJhbnNsYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdHJhbnNsYXRpb25zLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVHJhbnNsYXRpb24odjogZ2xWZWMzKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgdi5nZXQoMCksXHJcbiAgICAgICAgIDAsIDEsIDAsIHYuZ2V0KDEpLFxyXG4gICAgICAgICAwLCAwLCAxLCB2LmdldCgyKSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KFxyXG4gICAgICBleWU6IGdsVmVjMyxcclxuICAgICAgY2VudGVyOiBnbFZlYzMsXHJcbiAgICAgIHVwOiBnbFZlYzMsXHJcbiAgICk6IGdsTWF0NCB7XHJcblxyXG4gICAgICAvLyBjbG9uZSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdvbmFsc1xyXG4gICAgICBsZXQgeiA9IGV5ZS5jbG9uZSgpLnN1YnRyYWN0KGNlbnRlcikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCB4ID0gdXAuY2xvbmUoKS5jcm9zcyh6KS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IHkgPSB6LmNsb25lKCkuY3Jvc3MoeCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICBsZXQgbSA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICB4LmdldCgwKSwgeC5nZXQoMSksIHguZ2V0KDIpLCAwLFxyXG4gICAgICAgICB5LmdldCgwKSwgeS5nZXQoMSksIHkuZ2V0KDIpLCAwLFxyXG4gICAgICAgICB6LmdldCgwKSwgei5nZXQoMSksIHouZ2V0KDIpLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgdmFyIHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgLWV5ZS5nZXQoMCksXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUuZ2V0KDEpLFxyXG4gICAgICAgICAwLCAwLCAxLCAtZXllLmdldCgyKSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBtLm11bHRNKHQpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVQZXJzcGVjdGl2ZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBmb3Z5IEZpZWxkIG9mIHZpZXcgKGluIGRlZ3JlZXMpLlxyXG4gICAgKiBAcGFyYW0gYXNwZWN0IFZpZXcgYXNwZWN0IHJhdGlvLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgTmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgRmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlUGVyc3BlY3RpdmUoXHJcbiAgICAgIGZvdnk6IG51bWJlcixcclxuICAgICAgYXNwZWN0OiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgeW1heCA9IHpuZWFyICogTWF0aC50YW4oZm92eSAqIE1hdGguUEkgLyAzNjAuMCk7XHJcbiAgICAgIHZhciB5bWluID0gLXltYXg7XHJcbiAgICAgIHZhciB4bWluID0geW1pbiAqIGFzcGVjdDtcclxuICAgICAgdmFyIHhtYXggPSB5bWF4ICogYXNwZWN0O1xyXG5cclxuICAgICAgcmV0dXJuIGdsTWF0NC5tYWtlRnJ1c3R1bSh4bWluLCB4bWF4LCB5bWluLCB5bWF4LCB6bmVhciwgemZhcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1RnJ1c3R1bS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZWZ0IFRoZSBsZWZ0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gcmlnaHQgVGhlIHJpZ2h0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gYm90dG9tIFRoZSBib3R0b20gY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB0b3AgVGhlIHRvcCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpuZWFyIFRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBUaGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcmV0dXJucyB0aGUgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlRnJ1c3R1bShcclxuICAgICAgbGVmdDogbnVtYmVyLFxyXG4gICAgICByaWdodDogbnVtYmVyLFxyXG4gICAgICBib3R0b206IG51bWJlcixcclxuICAgICAgdG9wOiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgWCA9IDIgKiB6bmVhciAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgWSA9IDIgKiB6bmVhciAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQSA9IChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBCID0gKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEMgPSAtKHpmYXIgKyB6bmVhcikgLyAoemZhciAtIHpuZWFyKTtcclxuICAgICAgdmFyIEQgPSAtMiAqIHpmYXIgKiB6bmVhciAvICh6ZmFyIC0gem5lYXIpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBYLCAwLCBBLCAwLFxyXG4gICAgICAgICAwLCBZLCBCLCAwLFxyXG4gICAgICAgICAwLCAwLCBDLCBELFxyXG4gICAgICAgICAwLCAwLCAtMSwgMFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxufSIsIlxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBnbFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHByb3RlY3RlZCB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5kZXggVGhlIGVsZW1lbnQgaW5kZXguXHJcbiAgICAqIEByZXR1cm5zIFRoZSBlbGVtZW50IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB2YWx1ZSBpbiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGluZGV4IFRoZSBlbGVtZW50IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVsZW1lbnQgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIFRoZSB2ZWN0b3IgbWFnbml0dWRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hZ25pdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbaV0gKiB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBub3JtYWxpemUoKTogZ2xWZWMge1xyXG4gICAgICBsZXQgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgaWYgKG1hZyAhPT0gMCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXogdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjMyBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gc3VwZXIubm9ybWFsaXplKCkgYXMgZ2xWZWMzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGlzIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWM6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdIC09IHZlYy52YWx1ZXNbMF07XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdIC09IHZlYy52YWx1ZXNbMV07XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdIC09IHZlYy52YWx1ZXNbMl07XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGxldCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjNCBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhbiB4LXkteiB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IGlzIGNvbXB1dGVkIGJ5IGRpdmlkaW5nIHRoaXMgdmVjdG9yc1xyXG4gICAgKiBlbGVtZW50cyBieSB0aGUgdyB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIHgteS16IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXZpZGVCeVcoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciByZXByZXNlbnRpbmcgY29sb3IgdmFsdWVzLiBWYWx1ZXMgYXJlIG9uIGEgMC0xIHNjYWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGhzdkNvbG9yIHtcclxuICAgcHVibGljIHJlYWRvbmx5IGg6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IHM6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IHY6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgSFNWIHZhbHVlcyB0byBzdG9yZSBpbiB0aGlzIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG4gICAgICB0aGlzLmggPSBjb2xvclswXTtcclxuICAgICAgdGhpcy5zID0gY29sb3JbMV07XHJcbiAgICAgIHRoaXMudiA9IGNvbG9yWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBoc3ZDb2xvciBvYmplY3QgZnJvbSBhbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9yIFRoZSBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHN2Q29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tSHRtbENvbG9yKGNvbG9yOiBodG1sQ29sb3IpOiBoc3ZDb2xvciB7XHJcbiAgICAgIGxldCByID0gY29sb3IucjtcclxuICAgICAgbGV0IGcgPSBjb2xvci5nO1xyXG4gICAgICBsZXQgYiA9IGNvbG9yLmI7XHJcblxyXG4gICAgICBsZXQgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XHJcbiAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgbGV0IGQgPSBtYXggLSBtaW47XHJcbiAgICAgIGxldCBoO1xyXG4gICAgICBsZXQgcyA9IChtYXggPT09IDAgPyAwIDogZCAvIG1heCk7XHJcbiAgICAgIGxldCB2ID0gbWF4IC8gMjU1O1xyXG5cclxuICAgICAgc3dpdGNoIChtYXgpIHtcclxuICAgICAgICAgY2FzZSBtaW46IGggPSAwOyBicmVhaztcclxuICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSArIGQgKiAoZyA8IGIgPyA2IDogMCk7IGggLz0gNiAqIGQ7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpICsgZCAqIDI7IGggLz0gNiAqIGQ7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpICsgZCAqIDQ7IGggLz0gNiAqIGQ7IGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGhzdkNvbG9yKFtoLCBzLCB2XSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGhzdkNvbG9yIG9iamVjdCBmcm9tIGEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgVGhlIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHN2Q29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tR2xDb2xvcihjb2xvcjogZ2xDb2xvcik6IGhzdkNvbG9yIHtcclxuICAgICAgcmV0dXJuIGhzdkNvbG9yLmZyb21IdG1sQ29sb3IoY29sb3IudG9IdG1sQ29sb3IoKSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgZ2xDb2xvciBvYmplY3QgZnJvbSB0aGlzIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBnbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dsQ29sb3IoKTogZ2xDb2xvciB7XHJcblxyXG4gICAgICB2YXIgciwgZywgYiwgaSwgZiwgcCwgcSwgdDtcclxuICAgICAgaSA9IE1hdGguZmxvb3IodGhpcy5oICogNik7XHJcbiAgICAgIGYgPSB0aGlzLmggKiA2IC0gaTtcclxuICAgICAgcCA9IHRoaXMudiAqICgxIC0gdGhpcy5zKTtcclxuICAgICAgcSA9IHRoaXMudiAqICgxIC0gZiAqIHRoaXMucyk7XHJcbiAgICAgIHQgPSB0aGlzLnYgKiAoMSAtICgxIC0gZikgKiB0aGlzLnMpO1xyXG4gICAgICBzd2l0Y2ggKGkgJSA2KSB7XHJcbiAgICAgICAgIGNhc2UgMDogciA9IHRoaXMudiwgZyA9IHQsIGIgPSBwOyBicmVhaztcclxuICAgICAgICAgY2FzZSAxOiByID0gcSwgZyA9IHRoaXMudiwgYiA9IHA7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIDI6IHIgPSBwLCBnID0gdGhpcy52LCBiID0gdDsgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgMzogciA9IHAsIGcgPSBxLCBiID0gdGhpcy52OyBicmVhaztcclxuICAgICAgICAgY2FzZSA0OiByID0gdCwgZyA9IHAsIGIgPSB0aGlzLnY7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIDU6IHIgPSB0aGlzLnYsIGcgPSBwLCBiID0gcTsgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IGZyb20gdGhpcyBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IdG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9HbENvbG9yKCkudG9IdG1sQ29sb3IoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBoc3ZDb2xvciB9IGZyb20gXCIuL2hzdkNvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjU1XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHRtbENvbG9yIGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gMykge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgMyBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYyBUaGUgbnVtZXJpYyB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb21wb25lbnRUb0hleChjOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICB2YXIgaGV4ID0gYy50b1N0cmluZygxNik7XHJcbiAgICAgIHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgaGV4IHN0cmluZyAoZS5nLiAjMGYwZjBmKTtcclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0hleCgpOiBzdHJpbmcge1xyXG4gICAgICBsZXQgckhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5yKTtcclxuICAgICAgbGV0IGdIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuZyk7XHJcbiAgICAgIGxldCBiSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmIpO1xyXG4gICAgICByZXR1cm4gXCIjXCIgKyBySGV4ICsgZ0hleCArIGJIZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgZnJvbSBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBoZXggVGhlIGhleCBzdHJpbmdcclxuICAgICogQHJldHVybnMgVGhlIGh0bWxDb2xvciBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUhleChoZXg6IHN0cmluZyk6IGh0bWxDb2xvciB7XHJcbiAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICBsZXQgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xyXG4gICAgICAgICBsZXQgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gICAgICAgICBsZXQgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xyXG4gICAgICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBXZWJHTCBjb2xvciBvYmplY3QgKDAtMSBiYXNlZClcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HbENvbG9yKCk6IGdsQ29sb3Ige1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3RoaXMuciAvIDI1NSwgdGhpcy5nIC8gMjU1LCB0aGlzLmIgLyAyNTVdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tIFwiLi9TaGFkZXJzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IExpZ2h0Q29sb3JzIH0gZnJvbSBcIi4vTGlnaHRDb2xvcnNcIjtcclxuaW1wb3J0IHsgaHN2Q29sb3IgfSBmcm9tIFwiLi9oc3ZDb2xvclwiO1xyXG5cclxubGV0IGFwcDogQXBwO1xyXG5leHBvcnQgbGV0IGdsOiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxubGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5sZXQgYW5nbGVYID0gMDtcclxubGV0IGFuZ2xlWSA9IDA7XHJcbmxldCB6b29tWiA9IDMuMDtcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgZWxlbWVudC5pbm5lckhUTUwgPVxyXG4gICAgICAnPGNhbnZhcyBpZD1cImNhbnZhc1wiPjwvY2FudmFzPlxcbicgK1xyXG4gICAgICAnPGJyIC8+XFxuJyArXHJcbiAgICAgICc8bGFiZWwgZm9yPVwiaW50ZW5zaXR5UmFuZ2VcIj5JbnRlbnNpdHk8L2xhYmVsPlxcbicgK1xyXG4gICAgICAnPGlucHV0IGlkPVwiaW50ZW5zaXR5UmFuZ2VcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIyMFwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNTBcIiBjbGFzcz1cInNsaWRlclwiPlxcbicgK1xyXG4gICAgICAnPGJyIC8+XFxuJyArXHJcbiAgICAgICc8bGFiZWwgZm9yPVwidGVtcGVyYXR1cmVSYW5nZVwiPlRlbXBlcmF0dXJlPC9sYWJlbD5cXG4nICtcclxuICAgICAgJzxpbnB1dCBpZD1cInRlbXBlcmF0dXJlUmFuZ2VcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIyMDAwXCIgbWF4PVwiODAwMFwiIHZhbHVlPVwiJyArIExpZ2h0Q29sb3JzLmRheWxpZ2h0LnRlbXBlcmF0dXJlICsgJ1wiIGNsYXNzPVwic2xpZGVyXCI+XFxuJyArXHJcbiAgICAgICc8c3BhbiBpZD1cInRlbXBlcmF0dXJlU3BhblwiPicgKyBMaWdodENvbG9ycy5kYXlsaWdodC50ZW1wZXJhdHVyZSArICc8L3NwYW4+XFxuJyArXHJcbiAgICAgICc8YnI+XFxuJyArXHJcbiAgICAgICc8bGFiZWwgZm9yPVwiYmFsbENvbG9yUmFuZ2VcIj5CYWxsIENvbG9yPC9sYWJlbD5cXG4nICtcclxuICAgICAgJzxpbnB1dCBpZD1cImJhbGxDb2xvclJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMDBcIiB2YWx1ZT1cIicgKyBMaWdodENvbG9ycy5kYXlsaWdodC50ZW1wZXJhdHVyZSArICdcIiBjbGFzcz1cInNsaWRlclwiPlxcbicgK1xyXG4gICAgICAnPHNwYW4gaWQ9XCJiYWxsQ29sb3JTcGFuXCIgLz4nO1xyXG5cclxuICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxuZnVuY3Rpb24gdGljayh0aW1lU2luY2VTdGFydDogbnVtYmVyKSB7XHJcbiAgIFVuaWZvcm1zLmV5ZS5zZXQoMCwgem9vbVogKiBNYXRoLnNpbihhbmdsZVkpICogTWF0aC5jb3MoYW5nbGVYKSk7XHJcbiAgIFVuaWZvcm1zLmV5ZS5zZXQoMSwgem9vbVogKiBNYXRoLnNpbihhbmdsZVgpKTtcclxuICAgVW5pZm9ybXMuZXllLnNldCgyLCB6b29tWiAqIE1hdGguY29zKGFuZ2xlWSkgKiBNYXRoLmNvcyhhbmdsZVgpKTtcclxuXHJcbiAgIGFwcC51cGRhdGVUZXh0dXJlKHRpbWVTaW5jZVN0YXJ0KTtcclxuICAgYXBwLmRpc3BsYXlUZXh0dXJlKCk7XHJcbn1cclxuXHJcbnZhciBtb3VzZURvd24gPSBmYWxzZTtcclxudmFyIG9sZFg6IG51bWJlcjtcclxudmFyIG9sZFk6IG51bWJlcjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgdHJ5IHtcclxuICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJykgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBnZXQgV2ViR0wyIGNvbnRleHRcIik7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChnbCkge1xyXG4gICAgICBhcHAgPSBuZXcgQXBwKCk7XHJcbiAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHRpY2soKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBzdGFydCkgKiAwLjAwMSk7IH0sIDEwMDAgLyA2MCk7XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50OiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgb2xkWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgb2xkWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgb25Nb3ZlKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBvbGRYID0gZXZlbnQueDtcclxuICAgICAgICAgb2xkWSA9IGV2ZW50Lnk7XHJcblxyXG4gICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBvbk1vdmUoZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25Nb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgIGlmIChtb3VzZURvd24pIHtcclxuICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgYW5nbGVZIC09ICh4IC0gb2xkWCkgKiAwLjAxO1xyXG4gICAgICBhbmdsZVggKz0gKHkgLSBvbGRZKSAqIDAuMDE7XHJcblxyXG4gICAgICAvLyBkb24ndCBnbyB1cHNpZGUgZG93blxyXG4gICAgICBhbmdsZVggPSBNYXRoLm1heChhbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICBhbmdsZVggPSBNYXRoLm1pbihhbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcblxyXG4gICAgICAvLyBjbGVhciB0aGUgc2FtcGxlIGJ1ZmZlclxyXG4gICAgICBhcHAucmVzdGFydCgpO1xyXG5cclxuICAgICAgLy8gcmVtZW1iZXIgdGhpcyBjb29yZGluYXRlXHJcbiAgICAgIG9sZFggPSB4O1xyXG4gICAgICBvbGRZID0geTtcclxuICAgfVxyXG59XHJcblxyXG5sZXQgaW50ZW5zaXR5U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlbnNpdHlSYW5nZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5pbnRlbnNpdHlTbGlkZXIudmFsdWUgPSBcIlwiICsgVW5pZm9ybXMubGlnaHRJbnRlbnNpdHkgKiA1MDtcclxuaW50ZW5zaXR5U2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIFVuaWZvcm1zLmxpZ2h0SW50ZW5zaXR5ID0gcGFyc2VGbG9hdChpbnRlbnNpdHlTbGlkZXIudmFsdWUpIC8gNTA7XHJcbiAgIGFwcC5yZXN0YXJ0KCk7XHJcbn1cclxuXHJcblxyXG5sZXQgdGVtcGVyYXR1cmVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlUmFuZ2VcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuc2V0TGlnaHRDb2xvcigpO1xyXG50ZW1wZXJhdHVyZVNsaWRlci5vbmlucHV0ID0gc2V0TGlnaHRDb2xvclxyXG5cclxuZnVuY3Rpb24gc2V0TGlnaHRDb2xvcigpIHtcclxuICAgbGV0IHRlbXBlcmF0dXJlID0gcGFyc2VGbG9hdCh0ZW1wZXJhdHVyZVNsaWRlci52YWx1ZSk7XHJcbiAgIFVuaWZvcm1zLmxpZ2h0Q29sb3IgPSBMaWdodENvbG9ycy50b1JHQih0ZW1wZXJhdHVyZSk7XHJcbiAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVNwYW5cIikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICBzcGFuLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlLnRvRml4ZWQoKSArIFwiS1wiO1xyXG5cclxuICAgaWYgKGFwcCkge1xyXG4gICAgICBhcHAucmVzdGFydCgpO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG5sZXQgYmFsbENvbG9yU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWxsQ29sb3JSYW5nZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5iYWxsQ29sb3JTbGlkZXIudmFsdWUgPSAocGFyc2VGbG9hdChiYWxsQ29sb3JTbGlkZXIubWF4KSAqIGhzdkNvbG9yLmZyb21HbENvbG9yKFVuaWZvcm1zLmJhbGxDb2xvcikudikudG9TdHJpbmcoKTtcclxuc2V0U3BhbkNvbG9yKCk7XHJcbmJhbGxDb2xvclNsaWRlci5vbmlucHV0ID0gc2V0QmFsbENvbG9yXHJcblxyXG5mdW5jdGlvbiBzZXRCYWxsQ29sb3IoKSB7XHJcbiAgIGxldCBodWUgPSBwYXJzZUZsb2F0KGJhbGxDb2xvclNsaWRlci52YWx1ZSk7XHJcbiAgIFVuaWZvcm1zLmJhbGxDb2xvciA9IChuZXcgaHN2Q29sb3IoW2h1ZSAvIHBhcnNlRmxvYXQoYmFsbENvbG9yU2xpZGVyLm1heCksIDAuNiwgMC42XSkpLnRvR2xDb2xvcigpO1xyXG5cclxuICAgc2V0U3BhbkNvbG9yKCk7XHJcblxyXG4gICBpZiAoYXBwKSB7XHJcbiAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3BhbkNvbG9yKCkge1xyXG4gICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFsbENvbG9yU3BhblwiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gVW5pZm9ybXMuYmFsbENvbG9yLnRvSHRtbENvbG9yKCkudG9IZXgoKTtcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IFwiIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG4gdmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbiB1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xcclxcblxcclxcbiB2b2lkIG1haW4oKVxcclxcbiB7XFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHRleENvb3JkKTtcXHJcXG4gfVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCIgYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbiB2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxuIFxcclxcbiB2b2lkIG1haW4oKVxcclxcbiB7XFxyXFxuICAgdGV4Q29vcmQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHZlcnRleCwgMS4wKTtcXHJcXG4gfVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCIgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbiB1bmlmb3JtIHZlYzMgZXllO1xcclxcbiB2YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4gdW5pZm9ybSBmbG9hdCB0ZXh0dXJlV2VpZ2h0O1xcclxcbiB1bmlmb3JtIGZsb2F0IHRleHR1cmVTaXplO1xcclxcbiB1bmlmb3JtIGZsb2F0IHRpbWVTaW5jZVN0YXJ0O1xcclxcbiB1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xcclxcbiB1bmlmb3JtIHZlYzMgbGlnaHQ7XFxyXFxuIHVuaWZvcm0gZmxvYXQgbGlnaHRJbnRlbnNpdHk7XFxyXFxuIHVuaWZvcm0gdmVjMyBsaWdodENvbG9yO1xcclxcbiB1bmlmb3JtIHZlYzMgYmFsbENvbG9yO1xcclxcblxcclxcbiBjb25zdCBpbnQgQk9VTkNFUyA9IDU7XFxyXFxuIGNvbnN0IGZsb2F0IEVQU0lMT04gPSAwLjAwMDE7XFxyXFxuIGNvbnN0IGZsb2F0IElORklOSVRZID0gMTAwMDAuMDtcXHJcXG4gY29uc3QgZmxvYXQgTElHSFRfU0laRSA9IDAuMTtcXHJcXG4gY29uc3QgdmVjMyBTUEhFUkVfQ0VOVEVSID0gdmVjMygwLCAtMC41LCAwKTtcXHJcXG4gY29uc3QgZmxvYXQgU1BIRVJFX1JBRElVUyA9IDAuNTtcXHJcXG5cXHJcXG4gZmxvYXQgaW50ZXJzZWN0U3BoZXJlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG4ge1xcclxcbiAgIHZlYzMgdG9TcGhlcmUgPSBvcmlnaW4gLSBzcGhlcmVDZW50ZXI7XFxyXFxuICAgZmxvYXQgYSA9IGRvdChyYXksIHJheSk7XFxyXFxuICAgZmxvYXQgYiA9IDIuMCAqIGRvdCh0b1NwaGVyZSwgcmF5KTtcXHJcXG4gICBmbG9hdCBjID0gZG90KHRvU3BoZXJlLCB0b1NwaGVyZSkgLSBzcGhlcmVSYWRpdXMqc3BoZXJlUmFkaXVzO1xcclxcbiAgIGZsb2F0IGRpc2NyaW1pbmFudCA9IGIqYiAtIDQuMCphKmM7XFxyXFxuICAgaWYoZGlzY3JpbWluYW50ID4gMC4wKSB7XFxyXFxuICAgICBmbG9hdCB0ID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgIGlmKHQgPiAwLjApIHJldHVybiB0O1xcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuIH1cXHJcXG5cXHJcXG4gdmVjMyBub3JtYWxGb3JTcGhlcmUodmVjMyBoaXQsIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpIFxcclxcbiB7XFxyXFxuICAgcmV0dXJuIChoaXQgLSBzcGhlcmVDZW50ZXIpIC8gc3BoZXJlUmFkaXVzO1xcclxcbiB9XFxyXFxuXFxyXFxuIGZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKSBcXHJcXG4ge1xcclxcbiAgIHJldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXogKyBzZWVkLCBzY2FsZSkpICogNDM3NTguNTQ1MyArIHNlZWQpO1xcclxcbiB9XFxyXFxuXFxyXFxuIHZlYzMgY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24oZmxvYXQgc2VlZCwgdmVjMyBub3JtYWwpIFxcclxcbiB7XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCk8LjUpIFxcclxcbiAgIHtcXHJcXG4gICAgIHNkaXIgPSBjcm9zcyhub3JtYWwsIHZlYzMoMSwwLDApKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBcXHJcXG4gICB7XFxyXFxuICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDAsMSwwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByKmNvcyhhbmdsZSkqc2RpciArIHIqc2luKGFuZ2xlKSp0ZGlyICsgc3FydCgxLi11KSpub3JtYWw7XFxyXFxuIH1cXHJcXG5cXHJcXG4gdmVjMyB1bmlmb3JtbHlSYW5kb21EaXJlY3Rpb24oZmxvYXQgc2VlZCkgXFxyXFxuIHtcXHJcXG4gICBmbG9hdCB1ID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHYgPSByYW5kb20odmVjMyg2My43MjY0LCAxMC44NzMsIDYyMy42NzM2KSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgeiA9IDEuMCAtIDIuMCAqIHU7XFxyXFxuICAgZmxvYXQgciA9IHNxcnQoMS4wIC0geiAqIHopO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIHJldHVybiB2ZWMzKHIgKiBjb3MoYW5nbGUpLCByICogc2luKGFuZ2xlKSwgeik7XFxyXFxuIH1cXHJcXG5cXHJcXG4gdmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZCkgXFxyXFxuIHtcXHJcXG4gICByZXR1cm4gdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKHNlZWQpICogc3FydChyYW5kb20odmVjMygzNi43NTM5LCA1MC4zNjU4LCAzMDYuMjc1OSksIHNlZWQpKTtcXHJcXG4gfVxcclxcblxcclxcbiBmbG9hdCBzaGFkb3codmVjMyBvcmlnaW4sIHZlYzMgcmF5KSBcXHJcXG4ge1xcclxcbiAgIGZsb2F0IHRTcGhlcmUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIFNQSEVSRV9DRU5URVIsIFNQSEVSRV9SQURJVVMpO1xcclxcbiAgIGlmKHRTcGhlcmUgPCAxLjApXFxyXFxuICAge1xcclxcbiAgICAgcmV0dXJuIDAuMDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgIHJldHVybiAxLjA7XFxyXFxuICAgfVxcclxcbiB9XFxyXFxuXFxyXFxuIHZlYzMgY2FsY3VsYXRlQ29sb3IodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCB2ZWMzIGxpZ2h0KSBcXHJcXG4ge1xcclxcbiAgIHZlYzMgY29sb3JNYXNrID0gbGlnaHRDb2xvcjtcXHJcXG4gICB2ZWMzIGFjY3VtdWxhdGVkQ29sb3IgPSB2ZWMzKDAuMCk7XFxyXFxuXFxyXFxuICAgLy8gbWFpbiByYXl0cmFjaW5nIGxvb3BcXHJcXG4gICBmb3IoaW50IGJvdW5jZSA9IDA7IGJvdW5jZSA8IEJPVU5DRVM7IGJvdW5jZSsrKSBcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gaWYgdGhlIGZpcnN0IHJheSBoaXRzIHRoZSBsaWdodCwgcmV0dXJuIHRoZSBsaWdodCBjb2xvci4gVGhpcyBzaW11bGF0ZXNcXHJcXG4gICAgICAvLyBkaXNwbGF5aW5nIHRoZSBsaWdodFxcclxcbiAgICAgIGlmICggYm91bmNlID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGlmIChpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIGxpZ2h0LCBMSUdIVF9TSVpFKTxJTkZJTklUWSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIChsaWdodEludGVuc2l0eS8yLjApKmxpZ2h0Q29sb3I7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgIC8vIGNvbXB1dGUgdGhlIGludGVyc2VjdGlvbiB3aXRoIGV2ZXJ5dGhpbmdcXHJcXG4gICAgIGZsb2F0IHRTcGhlcmUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIFNQSEVSRV9DRU5URVIsIFNQSEVSRV9SQURJVVMpO1xcclxcbiAgICAgdmVjMyBzdXJmYWNlQ29sb3IgPSB2ZWMzKDAuNSk7XFxyXFxuXFxyXFxuICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGludGVyc2VjdGlvblxcclxcbiAgICAgZmxvYXQgdCA9IElORklOSVRZO1xcclxcbiAgICAgZmxvYXQgdGZsb29yID0gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgICAvLyBjaGVjayBmb3IgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZFxcclxcbiAgICAgaWYgKHJheS55IDwgMC4wKVxcclxcbiAgICAge1xcclxcbiAgICAgICAvLyBkaXN0YW5jZSB0byBmbG9vciA9IG51bSB1bml0IHZlY3RvcnMgcmVxdWlyZWQgdG8gcmVhY2ggdGhlIGZsb29yXFxyXFxuICAgICAgIHRmbG9vciA9IC0ob3JpZ2luLnkrMS4wKS9yYXkueTtcXHJcXG4gICAgICAgaWYgKHRmbG9vciA8IHQgKVxcclxcbiAgICAgICB7XFxyXFxuICAgICAgICAgdCA9IHRmbG9vcjtcXHJcXG4gICAgICAgfVxcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgaWYodFNwaGVyZSA8IHQpXFxyXFxuICAgICB7XFxyXFxuICAgICAgIHN1cmZhY2VDb2xvciA9IHZlYzMoYmFsbENvbG9yKTtcXHJcXG4gICAgICAgdCA9IHRTcGhlcmU7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICAvLyBpbmZvIGFib3V0IGhpdFxcclxcbiAgICAgdmVjMyBoaXQgPSBvcmlnaW4gKyByYXkgKiB0O1xcclxcbiAgICAgZmxvYXQgc3BlY3VsYXJIaWdobGlnaHQgPSAwLjA7XFxyXFxuICAgICB2ZWMzIG5vcm1hbDtcXHJcXG5cXHJcXG4gICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsXFxyXFxuICAgICBpZih0ID09IHRmbG9vcilcXHJcXG4gICAgIHtcXHJcXG4gICAgICAgbm9ybWFsID0gdmVjMygwLjAsMS4wLDAuMCk7XFxyXFxuICAgICB9XFxyXFxuICAgICBlbHNlIGlmKHQgPT0gdFNwaGVyZSlcXHJcXG4gICAgIHtcXHJcXG4gICAgICAgbm9ybWFsID0gbm9ybWFsRm9yU3BoZXJlKGhpdCwgU1BIRVJFX0NFTlRFUiwgU1BIRVJFX1JBRElVUyk7XFxyXFxuICAgICB9XFxyXFxuICAgICBlbHNlXFxyXFxuICAgICB7XFxyXFxuICAgICAgIGJyZWFrO1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odGltZVNpbmNlU3RhcnQgKyBmbG9hdChib3VuY2UpLCBub3JtYWwpO1xcclxcblxcclxcbiAgICAgLy8gY29tcHV0ZSBkaWZmdXNlIGxpZ2h0aW5nIGNvbnRyaWJ1dGlvblxcclxcbiAgICAgdmVjMyB0b0xpZ2h0ID0gbGlnaHQgLSBoaXQ7XFxyXFxuICAgICBmbG9hdCBkaWZmdXNlID0gbWF4KDAuMCwgZG90KG5vcm1hbGl6ZSh0b0xpZ2h0KSwgbm9ybWFsKSk7XFxyXFxuXFxyXFxuICAgICAvLyB0cmFjZSBhIHNoYWRvdyByYXkgdG8gdGhlIGxpZ2h0XFxyXFxuICAgICBmbG9hdCBzaGFkb3dJbnRlbnNpdHkgPSBzaGFkb3coaGl0ICsgbm9ybWFsICogRVBTSUxPTiwgdG9MaWdodCk7XFxyXFxuXFxyXFxuICAgICAvLyBkbyBsaWdodCBib3VuY2VcXHJcXG4gICAgIGNvbG9yTWFzayAqPSBzdXJmYWNlQ29sb3I7XFxyXFxuICAgICBhY2N1bXVsYXRlZENvbG9yICs9IGNvbG9yTWFzayAqIChsaWdodEludGVuc2l0eSAqIGRpZmZ1c2UgKiBzaGFkb3dJbnRlbnNpdHkpO1xcclxcbiAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBjb2xvck1hc2sgKiBzcGVjdWxhckhpZ2hsaWdodCAqIHNoYWRvd0ludGVuc2l0eTtcXHJcXG5cXHJcXG4gICAgIC8vIGNhbGN1bGF0ZSBuZXh0IG9yaWdpblxcclxcbiAgICAgb3JpZ2luID0gaGl0O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICByZXR1cm4gYWNjdW11bGF0ZWRDb2xvcjtcXHJcXG4gfVxcclxcblxcclxcbiB2b2lkIG1haW4oKSBcXHJcXG4ge1xcclxcbiAgIHZlYzMgbmV3TGlnaHQgPSBsaWdodCArIHVuaWZvcm1seVJhbmRvbVZlY3Rvcih0aW1lU2luY2VTdGFydCAtIDUzLjApICogTElHSFRfU0laRTtcXHJcXG4gICB2ZWMzIHRleHR1cmUyID0gdGV4dHVyZTJEKHRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHRleHR1cmVTaXplKS5yZ2I7XFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChtaXgoY2FsY3VsYXRlQ29sb3IoZXllLCBpbml0aWFsUmF5LCBuZXdMaWdodCksIHRleHR1cmUyLCB0ZXh0dXJlV2VpZ2h0KSwgMS4wKTtcXHJcXG4gfVwiIiwiZXhwb3J0IGRlZmF1bHQgXCIgYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbiB1bmlmb3JtIHZlYzMgZXllLCByYXkwMCwgcmF5MDEsIHJheTEwLCByYXkxMTtcXHJcXG4gdmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuXFxyXFxuIHZvaWQgbWFpbigpXFxyXFxuIHtcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgocmF5MDAsIHJheTAxLCBwZXJjZW50LnkpLCBtaXgocmF5MTAsIHJheTExLCBwZXJjZW50LnkpLCBwZXJjZW50LngpO1xcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgsIDEuMCk7XFxyXFxuIH1cXHJcXG5cIiJdLCJzb3VyY2VSb290IjoiIn0=