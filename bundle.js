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
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureWeight = this.sampleCount / (this.sampleCount + 1);
        // set uniforms
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.tracerProgram);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.tracerProgram);
        // render to texture
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].viewport(0, 0, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize);
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
};
var Shaders = /** @class */ (function () {
    function Shaders() {
    }
    Shaders.getEyeRay = function (matrix, x, y) {
        var vec = new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec4"]([x, y, 0, 1]);
        return matrix.multV(vec).divideByW().subtract(Uniforms.uEye);
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
            '<input id="intensityRange" type="range" min="0" max="100" value="50" class="slider">\n' +
            '<br />\n' +
            '<label for="temperatureRange">Temperature</label>\n' +
            '<input id="temperatureRange" type="range" min="2000" max="8000" value="' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '" class="slider">\n' +
            '<span id="temperatureSpan">' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '</span>\n' +
            '<br>\n' +
            '<label for="ballColorRange">Ball Color</label>\n' +
            '<input id="ballColorRange" type="range" min="0" max="1000" value="' + _LightColors__WEBPACK_IMPORTED_MODULE_3__["LightColors"].daylight.temperature + '" class="slider">\n' +
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
var ballColorSlider = document.getElementById("ballColorRange");
ballColorSlider.value = (parseFloat(ballColorSlider.max) * _hsvColor__WEBPACK_IMPORTED_MODULE_4__["hsvColor"].fromGlColor(_Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBallColor).v).toString();
setSpanColor();
ballColorSlider.oninput = setBallColor;
function setBallColor() {
    var hue = parseFloat(ballColorSlider.value);
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBallColor = (new _hsvColor__WEBPACK_IMPORTED_MODULE_4__["hsvColor"]([hue / parseFloat(ballColorSlider.max), 0.6, 0.6])).toGlColor();
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
/* harmony default export */ __webpack_exports__["default"] = (" precision highp float;\r\n varying vec2 texCoord;\r\n uniform sampler2D uTexture;\r\n\r\n void main()\r\n {\r\n   gl_FragColor = texture2D(uTexture, texCoord);\r\n }\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (" precision highp float;\r\n uniform vec3 uEye;\r\n varying vec3 initialRay;\r\n uniform float uTextureWeight;\r\n uniform float uTextureSize;\r\n uniform float uTimeSinceStart;\r\n uniform sampler2D uTexture;\r\n uniform vec3 uLightPos;\r\n uniform float uLightIntensity;\r\n uniform vec3 uLightColor;\r\n uniform float uAmbientLightIntensity;\r\n uniform vec3 uBallColor;\r\n\r\n const int MAX_BOUNCES = 100;\r\n const float EPSILON = 0.0001;\r\n const float INFINITY = 10000.0;\r\n const float LIGHT_SIZE = 0.1;\r\n const vec3 SPHERE_CENTER = vec3(0, -0.5, 0);\r\n const float SPHERE_RADIUS = 0.5;\r\n const vec3 DOME_CENTER = vec3(0,0,0);\r\n const float DOME_RADIUS = 7.0;\r\n const float VAL = 0.8;\r\n const vec3 DOME_COLOR = vec3(VAL, VAL, VAL);\r\n const vec3 FLOOR_COLOR = vec3(VAL, VAL, VAL);\r\n const vec3 AMBIENT_COLOR = vec3(1.0,1.0,1.0);\r\n const int NUM_LIGHTS = 6;\r\n const float HEIGHT = 4.0;\r\n const float RADIUS = 4.0;\r\n const float PI = 3.14159265;\r\n\r\n struct Light\r\n {\r\n    float intensity;\r\n    float size;\r\n    vec3 pos;\r\n    vec3 color;\r\n };\r\n\r\n Light Lights[NUM_LIGHTS];\r\n\r\n\r\n float intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius)\r\n {\r\n   vec3 toSphere = origin - sphereCenter;\r\n   float a = dot(ray, ray);\r\n   float b = 2.0 * dot(toSphere, ray);\r\n   float c = dot(toSphere, toSphere) - sphereRadius*sphereRadius;\r\n   float discriminant = b*b - 4.0*a*c;\r\n   if(discriminant > 0.0) {\r\n     float t1 = (-b - sqrt(discriminant)) / (2.0 * a);\r\n     float t2 = (-b + sqrt(discriminant)) / (2.0 * a);\r\n     if(t1 > 0.0)\r\n     {\r\n        return t1;\r\n     }\r\n     else if ( t2 > 0.0)\r\n     {\r\n        return t2;\r\n     }\r\n   }\r\n   return INFINITY;\r\n }\r\n\r\n vec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius) \r\n {\r\n   return (hit - sphereCenter) / sphereRadius;\r\n }\r\n\r\n float random(vec3 scale, float seed) \r\n {\r\n   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\r\n }\r\n\r\n vec3 cosineWeightedDirection(float seed, vec3 normal) \r\n {\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float r = sqrt(u);\r\n   float angle = 6.283185307179586 * v;\r\n   // compute basis from normal\r\n   vec3 sdir, tdir;\r\n   if (abs(normal.x)<.5) \r\n   {\r\n     sdir = cross(normal, vec3(1,0,0));\r\n   }\r\n   else \r\n   {\r\n     sdir = cross(normal, vec3(0,1,0));\r\n   }\r\n   tdir = cross(normal, sdir);\r\n   return r*cos(angle)*sdir + r*sin(angle)*tdir + sqrt(1.-u)*normal;\r\n }\r\n\r\n vec3 uniformlyRandomDirection(float seed) \r\n {\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float z = 1.0 - 2.0 * u;\r\n   float r = sqrt(1.0 - z * z);\r\n   float angle = 6.283185307179586 * v;\r\n   return vec3(r * cos(angle), r * sin(angle), z);\r\n }\r\n\r\n vec3 uniformlyRandomVector(float seed) \r\n {\r\n   return uniformlyRandomDirection(seed) * sqrt(random(vec3(36.7539, 50.3658, 306.2759), seed));\r\n }\r\n\r\n float shadow(vec3 origin, vec3 ray) \r\n {\r\n   float tSphere = intersectSphere(origin, ray, SPHERE_CENTER, SPHERE_RADIUS);\r\n   if(tSphere < 1.0)\r\n   {\r\n     return 0.0;\r\n   }\r\n   else\r\n   {\r\n     return 1.0;\r\n   }\r\n }\r\n\r\n vec3 calculateColor(vec3 origin, vec3 ray) \r\n {\r\n   vec3 accumulatedColor = vec3(0.0);\r\n   vec3 colorMask = vec3(1.0);\r\n\r\n   // main raytracing loop\r\n   for(int bounce = 0; bounce < MAX_BOUNCES; bounce++) \r\n   {\r\n     // compute the intersection with everything\r\n     float tSphere = intersectSphere(origin, ray, SPHERE_CENTER, SPHERE_RADIUS);\r\n     vec3 surfaceColor = vec3(0.5, 0.5, 0.5);\r\n\r\n      if ( bounce == 0 )\r\n      {\r\n         // if the first ray hits the light, return the light color. This simulates\r\n         // displaying the light\r\n         for ( int i = 0; i < NUM_LIGHTS; i++)\r\n         {\r\n            vec3 lightPos = Lights[i].pos;\r\n            if (intersectSphere(origin, ray, lightPos, Lights[i].size)<tSphere)\r\n            {\r\n               return Lights[i].intensity*Lights[i].color;\r\n            }\r\n         }\r\n      }\r\n\r\n     float tDome = intersectSphere(origin, ray, DOME_CENTER, DOME_RADIUS);\r\n\r\n     // find the closest intersection\r\n     float t = INFINITY;\r\n     float tfloor = INFINITY;\r\n\r\n     // check for intersection with the ground\r\n     if (ray.y < 0.0)\r\n     {\r\n       // distance to floor = num unit vectors required to reach the floor\r\n       tfloor = -(origin.y+1.0)/ray.y;\r\n       if (tfloor < t )\r\n       {\r\n         t = tfloor;\r\n       }\r\n\r\n       surfaceColor = FLOOR_COLOR;\r\n     }\r\n\r\n     if(tSphere < t)\r\n     {\r\n       surfaceColor = vec3(uBallColor);\r\n       t = tSphere;\r\n     }\r\n     else if (tDome < t)\r\n     {\r\n        surfaceColor = DOME_COLOR;\r\n        t = tDome;\r\n     }\r\n\r\n     // info about hit\r\n     vec3 hit = origin + ray * t;\r\n     vec3 normal;\r\n\r\n     // calculate the normal\r\n     if(t == tfloor)\r\n     {\r\n       normal = vec3(0.0,1.0,0.0);\r\n     }\r\n     else if(t == tSphere)\r\n     {\r\n       normal = normalForSphere(hit, SPHERE_CENTER, SPHERE_RADIUS);\r\n     }\r\n     else if(t == tDome)\r\n     {\r\n        normal = normalForSphere(hit, DOME_CENTER, DOME_RADIUS);\r\n        //normal = -normalForSphere(hit, DOME_CENTER, DOME_RADIUS);\r\n        normal[0] = -normal[0];\r\n        normal[1] = -normal[1];\r\n        normal[2] = -normal[2];\r\n     }\r\n     else\r\n     {\r\n       break;\r\n     }\r\n\r\n     ray = cosineWeightedDirection(uTimeSinceStart + float(bounce), normal);\r\n\r\n\r\n     colorMask *= surfaceColor;\r\n\r\n     if(length(colorMask) < 0.01)\r\n     {\r\n        break;\r\n     }\r\n\r\n     for ( int i = 0; i < NUM_LIGHTS; i++)\r\n     {\r\n         float lightIntensity = Lights[i].intensity;\r\n         vec3 lightPos = Lights[i].pos;\r\n         vec3 lightColor = Lights[i].color;\r\n\r\n         // compute diffuse lighting contribution\r\n         vec3 toLight = lightPos - hit;\r\n         float diffuse = max(0.0, dot(normalize(toLight), normal));\r\n\r\n         // trace a shadow ray to the light\r\n         float shadowIntensity = shadow(hit + normal * EPSILON, toLight);\r\n\r\n         // do light bounce\r\n\r\n         // apply light fall off as distance squares. Use a min value for the light size\r\n         float radius = max(0.75,Lights[i].size);\r\n         float dist = max(1.0,(length(toLight)-radius)/radius);\r\n\r\n         accumulatedColor += colorMask * lightColor * (lightIntensity/(dist*dist) * diffuse * shadowIntensity);\r\n     }\r\n\r\n     // calculate next origin\r\n     origin = hit;\r\n   }\r\n\r\n   return accumulatedColor;\r\n }\r\n\r\n void main() \r\n {\r\n   vec3 rand = uniformlyRandomVector(uTimeSinceStart - 53.0) * LIGHT_SIZE;\r\n\r\n   Lights[0].intensity = uLightIntensity;\r\n   Lights[0].size = LIGHT_SIZE;\r\n   Lights[0].pos = vec3(uLightPos.x + rand.x,uLightPos.y + rand.y,uLightPos.z + rand.z);\r\n   Lights[0].color = vec3(uLightColor.x,uLightColor.y,uLightColor.z);\r\n\r\n   for (int i = 1; i < NUM_LIGHTS; i++)\r\n   {\r\n      float x = RADIUS*sin(2.0*PI*float(i)/(float(NUM_LIGHTS)-1.0)) +  + rand.x;\r\n      float y = HEIGHT +  + rand.y;\r\n      float z = RADIUS*cos(2.0*PI*float(i)/(float(NUM_LIGHTS)-1.0)) +  + rand.z;\r\n\r\n      Lights[i].intensity = uAmbientLightIntensity;\r\n      Lights[i].size = 2.0*LIGHT_SIZE;\r\n      Lights[i].pos = vec3(x,y,z);\r\n      Lights[i].color = AMBIENT_COLOR;\r\n   }\r\n\r\n   vec3 texture2 = texture2D(uTexture, gl_FragCoord.xy / uTextureSize).rgb;\r\n   gl_FragColor = vec4(mix(calculateColor(uEye, initialRay), texture2, uTextureWeight), 1.0);\r\n }");

/***/ }),

/***/ "./src/toTextureVertex.glsl":
/*!**********************************!*\
  !*** ./src/toTextureVertex.glsl ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" attribute vec3 vertex;\r\n uniform vec3 uEye, uRay00, uRay01, uRay10, uRay11;\r\n varying vec3 initialRay;\r\n\r\n void main()\r\n {\r\n   vec2 percent = vertex.xy * 0.5 + 0.5;\r\n   initialRay = mix(mix(uRay00, uRay01, percent.y), mix(uRay10, uRay11, percent.y), percent.x);\r\n   gl_Position = vec4(vertex, 1.0);\r\n }\r\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9MaWdodENvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aFRyYWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2hhZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yV2l0aFRlbXBlcmF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9nbE1hdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xWZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzdkNvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9odG1sQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvU2NyZWVuRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvdG9TY3JlZW5WZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvdG9UZXh0dXJlRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvdG9UZXh0dXJlVmVydGV4Lmdsc2wiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvRixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQyw0QkFBNEI7UUFDNUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEYsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7UUFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFTLEdBQWhCO1FBQ0csSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUUxQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9CLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzNDO1NBQ0g7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxzQkFBZSxHQUE3QixVQUE4QixDQUFTO1FBRXBDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNXLGlCQUFVLEdBQXhCLFVBQ0csR0FBVyxFQUNYLE1BQWMsRUFDZCxFQUFVO1FBR1YseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQy9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQztZQUNoQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ1osQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNXLHNCQUFlLEdBQTdCLFVBQ0csSUFBWSxFQUNaLE1BQWMsRUFDZCxLQUFhLEVBQ2IsSUFBWTtRQUVaLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUV6QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNXLGtCQUFXLEdBQXpCLFVBQ0csSUFBWSxFQUNaLEtBQWEsRUFDYixNQUFjLEVBQ2QsR0FBVyxFQUNYLEtBQWEsRUFDYixJQUFZO1FBRVosSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztRQUUzQyxPQUFPLElBQUksTUFBTSxDQUFDO1lBQ2YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVKLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UkQ7O0dBRUc7QUFDSDtJQUtHOztPQUVHO0lBQ0gsZUFBc0IsWUFBK0I7UUFDbEQsSUFBSSxZQUFZLFlBQVksS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQU8sWUFBWSxRQUFDLENBQUM7U0FDbEM7YUFDSTtZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7U0FDSDtJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG1CQUFHLEdBQVYsVUFBVyxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxtQkFBRyxHQUFWLFVBQVcsS0FBYSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx5QkFBUyxHQUFoQjtRQUNHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08seUJBQVMsR0FBbkI7UUFDRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQzthQUN4QjtTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBQ0osWUFBQztBQUFELENBQUM7QUFFRDs7R0FFRztBQUNIO0lBQTRCLDBCQUFLO0lBRTlCOztPQUVHO0lBQ0gsZ0JBQW1CLElBQWU7UUFBbEMsaUJBT0M7UUFORSxJQUFJLElBQUksRUFBRTtZQUNQLDBCQUFNLElBQUksQ0FBQyxTQUFDO1NBQ2Q7YUFDSTtZQUNGLDBCQUFNLENBQUMsQ0FBQyxTQUFDO1NBQ1g7O0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQkFBSyxHQUFaO1FBQ0csT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwwQkFBUyxHQUFoQjtRQUNHLE9BQU8saUJBQU0sU0FBUyxXQUFZLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0kseUJBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQkFBSyxHQUFaLFVBQWEsS0FBYTtRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLE1BQU0sQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSixhQUFDO0FBQUQsQ0FBQyxDQTNEMkIsS0FBSyxHQTJEaEM7O0FBRUQ7O0dBRUc7QUFDSDtJQUE0QiwwQkFBSztJQUU5Qjs7T0FFRztJQUNILGdCQUFtQixJQUFlO1FBQWxDLGlCQU9DO1FBTkUsSUFBSSxJQUFJLEVBQUU7WUFDUCwwQkFBTSxJQUFJLENBQUMsU0FBQztTQUNkO2FBQ0k7WUFDRiwwQkFBTSxDQUFDLENBQUMsU0FBQztTQUNYOztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDBCQUFTLEdBQWhCO1FBQ0csSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksTUFBTSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNKLGFBQUM7QUFBRCxDQUFDLENBNUIyQixLQUFLLEdBNEJoQzs7Ozs7Ozs7Ozs7Ozs7QUN4S0Q7QUFBQTtBQUFBO0FBQW9DO0FBRXBDOztHQUVHO0FBQ0g7SUFLRzs7T0FFRztJQUNILGtCQUFtQixLQUFlO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLHNCQUFhLEdBQTNCLFVBQTRCLEtBQWdCO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWhCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVsQixRQUFRLEdBQUcsRUFBRTtZQUNWLEtBQUssR0FBRztnQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDdkIsS0FBSyxDQUFDO2dCQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDN0QsS0FBSyxDQUFDO2dCQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07WUFDL0MsS0FBSyxDQUFDO2dCQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFDLE1BQU07U0FDakQ7UUFFRCxPQUFPLElBQUksUUFB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QUE0Rix5RUFBeUUsMEJBQTBCLGdCQUFnQixhQUFhLG9GQUFvRix1Q0FBdUMsb0ZBQW9GLDJEQUEyRCwwQ0FBMEMsc0NBQXNDLDBDQUEwQyxRQUFRLG1GQUFtRixpR0FBaUcsTUFBTSxDOzs7Ozs7Ozs7Ozs7QUNBanZQO0FBQWUsdUZBQXdCLHVEQUF1RCw2QkFBNkIsMEJBQTBCLDRDQUE0QyxtR0FBbUcsdUNBQXVDLE1BQU0sSyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3VzZS1vdmVyIGVmZmVjdHMgKi9cXHJcXG4uc2xpZGVyOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4jYmFsbENvbG9yU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5zbGlkZXIge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNiYWxsQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGxhYmVsIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgI3RlbXBlcmF0dXJlU3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxyXG4gKiBDbGFzcyBmb3IgcmVwcmVzZW50aW5nIGNvbG9yIHZhbHVlcy4gVmFsdWVzIG1heSBiZSBvbiBhIDAtMSBvciAwLTI1NSBzY2FsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgIHB1YmxpYyByZWFkb25seSByOiBudW1iZXI7XHJcbiAgIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXI7XHJcbiAgIHB1YmxpYyByZWFkb25seSBiOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIFJHQiB2YWx1ZXMgdG8gc3RvcmUgaW4gdGhpcyBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5yID0gY29sb3JbMF07XHJcbiAgICAgIHRoaXMuZyA9IGNvbG9yWzFdO1xyXG4gICAgICB0aGlzLmIgPSBjb2xvclsyXTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB9IGZyb20gXCIuL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmVcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgZ2V0dGluZyBSR0IgdmFsdWVzIGZvciBjb2xvciB0ZW1wZXJhdHVyZXMuIFJHQiB2YWx1ZXNcclxuICogYXJlIGJldHdlZW4gMCBhbmQgMS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMaWdodENvbG9ycyB7XHJcbiAgIC8qKlxyXG4gICAgKiBLbm93biBjb2xvciB2YWx1ZXMuIEZvciBvdGhlciByZXF1ZXN0cyB0aGUgY2xhc3Mgd2lsbCByZXR1cm4gaW50ZXJwb2xhdGVkIHZhbHVlc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlW10gPSBbXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDE0NyAvIDI1NSwgNDEgLyAyNTVdLCAxOTAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTk3IC8gMjU1LCAxNDMgLyAyNTVdLCAyNjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjE0IC8gMjU1LCAxNzAgLyAyNTVdLCAyODUwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjQxIC8gMjU1LCAyMjQgLyAyNTVdLCAzMjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjUwIC8gMjU1LCAyNDQgLyAyNTVdLCA1MjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjU1IC8gMjU1LCAyNTEgLyAyNTVdLCA1NDAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjU1IC8gMjU1LCAyNTUgLyAyNTVdLCA2MDAwKSwgLy8gZGF5bGlnaHRcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzIwMSAvIDI1NSwgMjI2IC8gMjU1LCAyNTUgLyAyNTVdLCA3MDAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzY0IC8gMjU1LCAxNTYgLyAyNTUsIDI1NSAvIDI1NV0sIDIwMDAwKSxcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IGRheWxpZ2h0KCk6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUge1xyXG4gICAgICByZXR1cm4gdGhpcy50b1JHQig2MDAwKTtcclxuICAgfVxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluaW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtaW5UZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXhpbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1heFRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSBDb2xvciBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyB0b1JHQih0ZW1wZXJhdHVyZTogbnVtYmVyKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcblxyXG4gICAgICBpZiAodGVtcGVyYXR1cmUgPD0gdGhpcy5taW5UZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGVtcGVyYXR1cmUgPj0gdGhpcy5tYXhUZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xvcnMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjEgPSB0aGlzLmNvbG9yc1tpXTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMiA9IHRoaXMuY29sb3JzW2kgKyAxXTtcclxuICAgICAgICAgICAgaWYgKHRlbXBlcmF0dXJlID49IGNvbG9yMS50ZW1wZXJhdHVyZSAmJiB0ZW1wZXJhdHVyZSA8PSBjb2xvcjIudGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgbGV0IHJhdGlvID0gKHRlbXBlcmF0dXJlIC0gY29sb3IxLnRlbXBlcmF0dXJlKSAvIChjb2xvcjIudGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgbGV0IHIgPSBjb2xvcjEuciArIHJhdGlvICogKGNvbG9yMi5yIC0gY29sb3IxLnIpO1xyXG4gICAgICAgICAgICAgICBsZXQgZyA9IGNvbG9yMS5nICsgcmF0aW8gKiAoY29sb3IyLmcgLSBjb2xvcjEuZyk7XHJcbiAgICAgICAgICAgICAgIGxldCBiID0gY29sb3IxLmIgKyByYXRpbyAqIChjb2xvcjIuYiAtIGNvbG9yMS5iKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFtyLCBnLCBiXSwgdGVtcGVyYXR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHNob3VsZG4ndCBnZXQgaGVyZSwgYnV0IGlmIHdlIGRvLCByZXR1cm4gdGhlIGxhc3QgY29sb3JcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsIlxyXG4vKlxyXG4gV2ViR0wgUGF0aCBUcmFjaW5nIChodHRwOi8vbWFkZWJ5ZXZhbi5jb20vd2ViZ2wtcGF0aC10cmFjaW5nLylcclxuIExpY2Vuc2U6IE1JVCBMaWNlbnNlIChzZWUgYmVsb3cpXHJcblxyXG4gQ29weXJpZ2h0IChjKSAyMDEwIEV2YW4gV2FsbGFjZVxyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXHJcbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxyXG4gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XHJcbiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcclxuIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcclxuIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXHJcbiBjb25kaXRpb25zOlxyXG5cclxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXHJcbiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG4gRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXHJcbiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG4gTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcclxuIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxyXG4gV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXHJcbiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFNoYWRlcnMsIFVuaWZvcm1zIH0gZnJvbSAnLi9TaGFkZXJzJztcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSAnLi9nbE1hdCc7XHJcbmltcG9ydCB7IGdsVmVjMyB9IGZyb20gJy4vZ2xWZWMnO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgdG9TY3JlZW5WZXJ0ZXhTb3VyY2UgZnJvbSAnLi90b1NjcmVlblZlcnRleC5nbHNsJztcclxuaW1wb3J0IHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi90b1NjcmVlbkZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlVmVydGV4U291cmNlIGZyb20gJy4vdG9UZXh0dXJlVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi90b1RleHR1cmVGcmFnbWVudC5nbHNsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyIHtcclxuXHJcbiAgIHByaXZhdGUgdmVydGV4QnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBmcmFtZUJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlcjtcclxuICAgcHJpdmF0ZSB0ZXh0dXJlczogV2ViR0xUZXh0dXJlW107XHJcbiAgIHByaXZhdGUgcmVuZGVyUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHJlbmRlclZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIHNhbXBsZUNvdW50OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdHJhY2VyUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRyYWNlclZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0aWNlcyA9IFtcclxuICAgICAgLTEsIC0xLFxyXG4gICAgICAtMSwgKzEsXHJcbiAgICAgICsxLCAtMSxcclxuICAgICAgKzEsICsxXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSB2ZXJ0ZXggYnVmZmVyIC0gdGhlIGJsb2NrIHdlJ2xsIGRyYXcgb3VyIHJlbmRlcmVkIHRleHR1cmUgb25cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBmcmFtZWJ1ZmZlclxyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0dXJlc1xyXG4gICAgICBnbC5nZXRFeHRlbnNpb24oJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0d28gdGV4dHVyZXMuIE9uZSB3ZSBkaXNwbGF5IGFuZCBvbmUgd2UgZHJhdyB0b1xyXG4gICAgICB0aGlzLnRleHR1cmVzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudGV4dHVyZXMucHVzaChnbC5jcmVhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzW2ldKTtcclxuICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsICAgICAgICAgIC8vIHRhcmdldFxyXG4gICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAvLyBsZXZlbFxyXG4gICAgICAgICAgICBnbC5SR0JBMzJGLCAgICAgICAgICAgICAvLyBpbnRlcm5hbCBmb3JtYXRcclxuICAgICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplLCAgIC8vIHdpZHRoXHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgICAvLyBoZWlnaHRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgICAgIGdsLlJHQkEsICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICAgICBnbC5GTE9BVCwgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHJlbmRlciBzaGFkZXJcclxuICAgICAgdGhpcy5yZW5kZXJQcm9ncmFtID0gU2hhZGVycy5jb21waWxlU2hhZGVyKHRvU2NyZWVuVmVydGV4U291cmNlLCB0b1NjcmVlbkZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnJlbmRlclByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgdGhpcy5zYW1wbGVDb3VudCA9IDA7XHJcbiAgICAgIHRoaXMudHJhY2VyUHJvZ3JhbSA9IFNoYWRlcnMuY29tcGlsZVNoYWRlcih0b1RleHR1cmVWZXJ0ZXhTb3VyY2UsIHRvVGV4dHVyZUZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy50cmFjZXJWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRyYWNlclByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50cmFjZXJWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc2FtcGxlQ291bnQgPSAwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZShtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQsIHRpbWVTaW5jZVN0YXJ0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBhbGlhc2luZyBieSByYW5kb20gc2FtcGxpbmcgd2l0aGluIGEgcGl4ZWxcclxuICAgICAgbGV0IHggPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHkgPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHogPSAwO1xyXG5cclxuICAgICAgbGV0IHYgPSBuZXcgZ2xWZWMzKFt4LCB5LCB6XSk7XHJcbiAgICAgIGxldCBqaXR0ZXIgPSBnbE1hdDQuZnJvbVRyYW5zbGF0aW9uKHYpO1xyXG4gICAgICBsZXQgbWF0cml4ID0gaml0dGVyLm11bHRNKG1vZGVsdmlld1Byb2plY3Rpb24pLmludmVydCgpO1xyXG5cclxuICAgICAgVW5pZm9ybXMudVJheTAwID0gU2hhZGVycy5nZXRFeWVSYXkobWF0cml4LCAtMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MDEgPSBTaGFkZXJzLmdldEV5ZVJheShtYXRyaXgsIC0xLCArMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMCA9IFNoYWRlcnMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTExID0gU2hhZGVycy5nZXRFeWVSYXkobWF0cml4LCArMSwgKzEpO1xyXG4gICAgICBVbmlmb3Jtcy51VGltZVNpbmNlU3RhcnQgPSB0aW1lU2luY2VTdGFydDtcclxuICAgICAgVW5pZm9ybXMudVRleHR1cmVXZWlnaHQgPSB0aGlzLnNhbXBsZUNvdW50IC8gKHRoaXMuc2FtcGxlQ291bnQgKyAxKTtcclxuXHJcbiAgICAgIC8vIHNldCB1bmlmb3Jtc1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMudHJhY2VyUHJvZ3JhbSk7XHJcbiAgICAgIFNoYWRlcnMuc2V0VW5pZm9ybXModGhpcy50cmFjZXJQcm9ncmFtKTtcclxuXHJcbiAgICAgIC8vIHJlbmRlciB0byB0ZXh0dXJlXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgVW5pZm9ybXMudVRleHR1cmVTaXplKTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRyYWNlclByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLCAwKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBwaW5nIHBvbmcgdGV4dHVyZXNcclxuICAgICAgdGhpcy50ZXh0dXJlcy5yZXZlcnNlKCk7XHJcbiAgICAgIHRoaXMuc2FtcGxlQ291bnQrKztcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgIHZhciBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAgICAgbGV0IHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgaWYgKGlzTW9iaWxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnJlbmRlclByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xWZWMzLCBnbFZlYzQgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogVHlwZXMgZm9yIHRoZSB1bmlmb3JtIHZhbHVlc1xyXG4gKi9cclxuaW50ZXJmYWNlIElVbmlmb3JtcyB7XHJcbiAgIHVMaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICB1TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgdUxpZ2h0UG9zOiBnbFZlYzMsXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdUJhbGxDb2xvcjogZ2xDb2xvcixcclxuICAgdUV5ZTogZ2xWZWMzLFxyXG4gICB1VGV4dHVyZVNpemU6IG51bWJlcixcclxuICAgdVRleHR1cmVXZWlnaHQ6IG51bWJlcixcclxuICAgdVRpbWVTaW5jZVN0YXJ0OiBudW1iZXIsXHJcbiAgIHVSYXkwMDogZ2xWZWMzLFxyXG4gICB1UmF5MDE6IGdsVmVjMyxcclxuICAgdVJheTEwOiBnbFZlYzMsXHJcbiAgIHVSYXkxMTogZ2xWZWMzLFxyXG4gICBbcHJvcE5hbWU6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgdmFyIFVuaWZvcm1zOiBJVW5pZm9ybXMgPSB7XHJcbiAgIHVMaWdodEludGVuc2l0eTogMC43LFxyXG4gICB1TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgZ2xWZWMzKFstMC42LCAwLjcsIDAuOF0pLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiAwLjMsXHJcbiAgIHVCYWxsQ29sb3I6IG5ldyBnbENvbG9yKFswLjUsIDAuNSwgMC44XSksXHJcbiAgIHVFeWU6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVUZXh0dXJlV2VpZ2h0OiAwLFxyXG4gICB1VGltZVNpbmNlU3RhcnQ6IDAsXHJcbiAgIHVSYXkwMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MDE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhZGVycyB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldEV5ZVJheShtYXRyaXg6IGdsTWF0NCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgdmVjID0gbmV3IGdsVmVjNChbeCwgeSwgMCwgMV0pO1xyXG4gICAgICByZXR1cm4gbWF0cml4Lm11bHRWKHZlYykuZGl2aWRlQnlXKCkuc3VidHJhY3QoVW5pZm9ybXMudUV5ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgc2V0VW5pZm9ybXMocHJvZ3JhbTogV2ViR0xQcm9ncmFtKSB7XHJcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gVW5pZm9ybXMpIHtcclxuICAgICAgICAgdmFyIHZhbHVlID0gVW5pZm9ybXNbbmFtZV07XHJcbiAgICAgICAgIHZhciBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcclxuICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsVmVjMykge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCBuZXcgRmxvYXQzMkFycmF5KFt2YWx1ZS5nZXQoMCksIHZhbHVlLmdldCgxKSwgdmFsdWUuZ2V0KDIpXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xDb2xvcikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCBuZXcgRmxvYXQzMkFycmF5KFt2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZVNvdXJjZShzb3VyY2U6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XHJcbiAgICAgIHZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgdGhyb3cgJ2NvbXBpbGUgZXJyb3I6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBjb21waWxlU2hhZGVyKHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgU2hhZGVycy5jb21waWxlU291cmNlKHZlcnRleFNvdXJjZSwgZ2wuVkVSVEVYX1NIQURFUikpO1xyXG4gICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgU2hhZGVycy5jb21waWxlU291cmNlKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpKTtcclxuICAgICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcbiAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgdGhyb3cgJ2xpbmsgZXJyb3I6ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBVbmlmb3JtcyB9IGZyb20gXCIuL1NoYWRlcnNcIjtcclxuaW1wb3J0IHsgUGF0aFRyYWNlciB9IGZyb20gXCIuL1BhdGhUcmFjZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgem9vbVosIGFuZ2xlWSwgYW5nbGVYIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICBwdWJsaWMgdHJhY2VyID0gbmV3IFBhdGhUcmFjZXIoKTtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXc6IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHN0YXJ0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgY291bnQgPSAwO1xyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwZGF0ZVRleHR1cmUodGltZVNpbmNlU3RhcnQ6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsdmlldyA9IGdsTWF0NC5tYWtlTG9va0F0KFxyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAwLCAwXSksICAvLyBjZW50ZXIgcG9pbnRcclxuICAgICAgICAgbmV3IGdsVmVjMyhbMCwgMSwgMF0pICAgLy8gdXAgdmVjdG9yXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb24gPSBnbE1hdDQubWFrZVBlcnNwZWN0aXZlKDU1LCAxLCAwLjEsIDEwMCk7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdGlvbi5tdWx0TSh0aGlzLm1vZGVsdmlldyk7XHJcbiAgICAgIHRoaXMudHJhY2VyLnVwZGF0ZVRleHR1cmUodGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uLCB0aW1lU2luY2VTdGFydCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgZGlzcGxheVRleHR1cmUoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudHJhY2VyLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMudHJhY2VyLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRpY2soKSB7XHJcblxyXG4gICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgIGxldCB0aW1lU2luY2VTdGFydCA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydCkgKiAwLjAwMTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNvdW50IDwgMTUwKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUuc2V0KDAsIHpvb21aICogTWF0aC5zaW4oYW5nbGVZKSAqIE1hdGguY29zKGFuZ2xlWCkpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnNldCgxLCB6b29tWiAqIE1hdGguc2luKGFuZ2xlWCkpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnNldCgyLCB6b29tWiAqIE1hdGguY29zKGFuZ2xlWSkgKiBNYXRoLmNvcyhhbmdsZVgpKTtcclxuXHJcbiAgICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSh0aW1lU2luY2VTdGFydCk7XHJcbiAgICAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGNsYXNzIHRoYXQgcmVxdWlyZXMgUkdCIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yIGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gMykge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgMyBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGFuIGh0bWwgY29sb3Igb2JqZWN0ICgwLTI1NSBiYXNlZCkuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSHRtbENvbG9yKCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLnIpO1xyXG4gICAgICBsZXQgZyA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5nKTtcclxuICAgICAgbGV0IGIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBhZGRzIHRlbXBlcmF0dXJlIHRvIGEgQ29sb3Igb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSBleHRlbmRzIGdsQ29sb3Ige1xyXG4gICAvKipcclxuICAgICogVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqIEBwYXJhbSB0ZW1wZXJhdHVyZSBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10sIHRlbXBlcmF0dXJlOiBudW1iZXIpIHtcclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICAgICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjNCwgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IG1hdHJpeCBmb3IgdXNlIGluIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbE1hdDQge1xyXG4gICAvKiogVGhlIG1hdHJpeCB2YWx1ZSBzdG9yZWQgYXMgYSAxNiBlbGVtZW50IGFycmF5ICovXHJcbiAgIHByaXZhdGUgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCBtYXRyaXggdmFsdWVzLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBtYXRyaXggaXMgXHJcbiAgICAqIGluaXRpYWxpemVkIGFzIGFuIGlkZW50aXR5IG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZXM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzKSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc107XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHZhbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGEgdmVjdG9yIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRWKHZlYzogZ2xWZWM0KTogZ2xWZWM0IHtcclxuICAgICAgbGV0IHZhbHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW3JvdyAqIDQgKyBjb2xdICogdmVjLmdldChjb2wpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHZhbHMucHVzaChzdW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWM0KHZhbHMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGFub3RoZXIgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG1hdHJpeC5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdE0ob3RoZXI6IGdsTWF0NCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmdldChyb3csIGkpICogb3RoZXIuZ2V0KGksIGNvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgc3VtKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogSW52ZXJ0cyB0aGlzIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0ICh0aGlzKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoaXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgaW52ZXJ0KCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYTAwID0gdGhpcy52YWx1ZXNbMF0sIGEwMSA9IHRoaXMudmFsdWVzWzFdLCBhMDIgPSB0aGlzLnZhbHVlc1syXSwgYTAzID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIGxldCBhMTAgPSB0aGlzLnZhbHVlc1s0XSwgYTExID0gdGhpcy52YWx1ZXNbNV0sIGExMiA9IHRoaXMudmFsdWVzWzZdLCBhMTMgPSB0aGlzLnZhbHVlc1s3XTtcclxuICAgICAgbGV0IGEyMCA9IHRoaXMudmFsdWVzWzhdLCBhMjEgPSB0aGlzLnZhbHVlc1s5XSwgYTIyID0gdGhpcy52YWx1ZXNbMTBdLCBhMjMgPSB0aGlzLnZhbHVlc1sxMV07XHJcbiAgICAgIGxldCBhMzAgPSB0aGlzLnZhbHVlc1sxMl0sIGEzMSA9IHRoaXMudmFsdWVzWzEzXSwgYTMyID0gdGhpcy52YWx1ZXNbMTRdLCBhMzMgPSB0aGlzLnZhbHVlc1sxNV07XHJcblxyXG4gICAgICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xyXG4gICAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xyXG4gICAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xyXG4gICAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xyXG4gICAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xyXG4gICAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xyXG4gICAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xyXG4gICAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xyXG4gICAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxyXG4gICAgICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgaWYgKCFkZXQpIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVHJhbnNwb3NlcyB0aGlzIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0ICh0aGlzKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoaXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJhbnNwb3NlKCk6IGdsTWF0NCB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCB0aGlzLmdldChjb2wsIHJvdykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudmFsdWVzID0gcmVzdWx0LnZhbHVlcztcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSB0cmFuc2xhdGlvbiBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB0cmFuc2xhdGlvbnMuXHJcbiAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGlvbiBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21UcmFuc2xhdGlvbih2OiBnbFZlYzMpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCB2LmdldCgwKSxcclxuICAgICAgICAgMCwgMSwgMCwgdi5nZXQoMSksXHJcbiAgICAgICAgIDAsIDAsIDEsIHYuZ2V0KDIpLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSB2aWV3aW5nIG1hdHJpeC4gU2VlIGdsdUxvb2tBdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBleWUgVGhlIGV5ZSBwb3NpdGlvbi5cclxuICAgICogQHBhcmFtIGNlbnRlciBUaGUgcG9pbnQgb2YgaW50ZXJlc3QuXHJcbiAgICAqIEBwYXJhbSB1cCBUaGUgdXAgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmlld2luZyBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VMb29rQXQoXHJcbiAgICAgIGV5ZTogZ2xWZWMzLFxyXG4gICAgICBjZW50ZXI6IGdsVmVjMyxcclxuICAgICAgdXA6IGdsVmVjMyxcclxuICAgKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIC8vIGNsb25lIHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ29uYWxzXHJcbiAgICAgIGxldCB6ID0gZXllLmNsb25lKCkuc3VidHJhY3QoY2VudGVyKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IHggPSB1cC5jbG9uZSgpLmNyb3NzKHopLm5vcm1hbGl6ZSgpO1xyXG4gICAgICBsZXQgeSA9IHouY2xvbmUoKS5jcm9zcyh4KS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgIGxldCBtID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIHguZ2V0KDApLCB4LmdldCgxKSwgeC5nZXQoMiksIDAsXHJcbiAgICAgICAgIHkuZ2V0KDApLCB5LmdldCgxKSwgeS5nZXQoMiksIDAsXHJcbiAgICAgICAgIHouZ2V0KDApLCB6LmdldCgxKSwgei5nZXQoMiksIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICB2YXIgdCA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAtZXllLmdldCgwKSxcclxuICAgICAgICAgMCwgMSwgMCwgLWV5ZS5nZXQoMSksXHJcbiAgICAgICAgIDAsIDAsIDEsIC1leWUuZ2V0KDIpLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG0ubXVsdE0odCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdVBlcnNwZWN0aXZlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGZvdnkgRmllbGQgb2YgdmlldyAoaW4gZGVncmVlcykuXHJcbiAgICAqIEBwYXJhbSBhc3BlY3QgVmlldyBhc3BlY3QgcmF0aW8uXHJcbiAgICAqIEBwYXJhbSB6bmVhciBOZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBGYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VQZXJzcGVjdGl2ZShcclxuICAgICAgZm92eTogbnVtYmVyLFxyXG4gICAgICBhc3BlY3Q6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciB5bWF4ID0gem5lYXIgKiBNYXRoLnRhbihmb3Z5ICogTWF0aC5QSSAvIDM2MC4wKTtcclxuICAgICAgdmFyIHltaW4gPSAteW1heDtcclxuICAgICAgdmFyIHhtaW4gPSB5bWluICogYXNwZWN0O1xyXG4gICAgICB2YXIgeG1heCA9IHltYXggKiBhc3BlY3Q7XHJcblxyXG4gICAgICByZXR1cm4gZ2xNYXQ0Lm1ha2VGcnVzdHVtKHhtaW4sIHhtYXgsIHltaW4sIHltYXgsIHpuZWFyLCB6ZmFyKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVGcnVzdHVtLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlZnQgVGhlIGxlZnQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSByaWdodCBUaGUgcmlnaHQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSBib3R0b20gVGhlIGJvdHRvbSBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHRvcCBUaGUgdG9wIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgVGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIFRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEByZXR1cm5zIHRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VGcnVzdHVtKFxyXG4gICAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgICB0b3A6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciBYID0gMiAqIHpuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBZID0gMiAqIHpuZWFyIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBBID0gKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIEIgPSAodG9wICsgYm90dG9tKSAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQyA9IC0oemZhciArIHpuZWFyKSAvICh6ZmFyIC0gem5lYXIpO1xyXG4gICAgICB2YXIgRCA9IC0yICogemZhciAqIHpuZWFyIC8gKHpmYXIgLSB6bmVhcik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIFgsIDAsIEEsIDAsXHJcbiAgICAgICAgIDAsIFksIEIsIDAsXHJcbiAgICAgICAgIDAsIDAsIEMsIEQsXHJcbiAgICAgICAgIDAsIDAsIC0xLCAwXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG59IiwiXHJcbi8qKlxyXG4gKiBWZWN0b3IgY2xhc3MgZm9yIHVzZSB3aXRoIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmNsYXNzIGdsVmVjIHtcclxuXHJcbiAgIC8qKiBUaGUgdmVjdG9yIHZhbHVlcy4gKi9cclxuICAgcHJvdGVjdGVkIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlc09yU2l6ZSBJZiBhIGFycmF5LCB0aGUgdmFsdWVzIGZvciB0aGUgdmVjdG9yLiBJZiBhIG51bWJlciwgdGhlIHNpemUgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih2YWx1ZXNPclNpemU6IG51bWJlciB8IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXNPclNpemUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNPclNpemVdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBBcnJheSh2YWx1ZXNPclNpemUpO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09yU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gMDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgdmFsdWUgaW4gdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBpbmRleCBUaGUgZWxlbWVudCBpbmRleC5cclxuICAgICogQHJldHVybnMgVGhlIGVsZW1lbnQgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbaW5kZXhdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhIHZhbHVlIGluIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5kZXggVGhlIGVsZW1lbnQgaW5kZXguXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZWxlbWVudCB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gVGhlIHZlY3RvciBtYWduaXR1ZGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFnbml0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tpXSAqIHRoaXMudmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIG5vcm1hbGl6ZSgpOiBnbFZlYyB7XHJcbiAgICAgIGxldCBtYWcgPSB0aGlzLm1hZ25pdHVkZSgpO1xyXG4gICAgICBpZiAobWFnICE9PSAwKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gLz0gbWFnO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkteiB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWMzIGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzModGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIE5vcm1hbGl6ZXMgdGhpcyB2ZWN0b3IsIGFuZCBzdG9yZXMgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbm9ybWFsaXplKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBzdXBlci5ub3JtYWxpemUoKSBhcyBnbFZlYzM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdWJ0cmFjdHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gc3VidHJhY3QuXHJcbiAgICAqIEByZXR1cm5zIFRoaXMgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnRyYWN0KHZlYzogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gLT0gdmVjLnZhbHVlc1swXTtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gLT0gdmVjLnZhbHVlc1sxXTtcclxuICAgICAgdGhpcy52YWx1ZXNbMl0gLT0gdmVjLnZhbHVlc1syXTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjcm9zcyhvdGhlcjogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IEEgPSB0aGlzLnZhbHVlcztcclxuICAgICAgbGV0IEIgPSBvdGhlci52YWx1ZXM7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgQVsxXSAqIEJbMl0gLSBBWzJdICogQlsxXSxcclxuICAgICAgICAgQVsyXSAqIEJbMF0gLSBBWzBdICogQlsyXSxcclxuICAgICAgICAgQVswXSAqIEJbMV0gLSBBWzFdICogQlswXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWM0IGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIHgteS16IHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgY29tcHV0ZWQgYnkgZGl2aWRpbmcgdGhpcyB2ZWN0b3JzXHJcbiAgICAqIGVsZW1lbnRzIGJ5IHRoZSB3IHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4geC15LXogdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpdmlkZUJ5VygpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgdyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAvIHdcclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIHJlcHJlc2VudGluZyBjb2xvciB2YWx1ZXMuIFZhbHVlcyBhcmUgb24gYSAwLTEgc2NhbGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHN2Q29sb3Ige1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgaDogbnVtYmVyO1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgczogbnVtYmVyO1xyXG4gICBwdWJsaWMgcmVhZG9ubHkgdjogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBIU1YgdmFsdWVzIHRvIHN0b3JlIGluIHRoaXMgb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcbiAgICAgIHRoaXMuaCA9IGNvbG9yWzBdO1xyXG4gICAgICB0aGlzLnMgPSBjb2xvclsxXTtcclxuICAgICAgdGhpcy52ID0gY29sb3JbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGhzdkNvbG9yIG9iamVjdCBmcm9tIGFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgVGhlIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBoc3ZDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21IdG1sQ29sb3IoY29sb3I6IGh0bWxDb2xvcik6IGhzdkNvbG9yIHtcclxuICAgICAgbGV0IHIgPSBjb2xvci5yO1xyXG4gICAgICBsZXQgZyA9IGNvbG9yLmc7XHJcbiAgICAgIGxldCBiID0gY29sb3IuYjtcclxuXHJcbiAgICAgIGxldCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcclxuICAgICAgbGV0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG4gICAgICBsZXQgZCA9IG1heCAtIG1pbjtcclxuICAgICAgbGV0IGg7XHJcbiAgICAgIGxldCBzID0gKG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4KTtcclxuICAgICAgbGV0IHYgPSBtYXggLyAyNTU7XHJcblxyXG4gICAgICBzd2l0Y2ggKG1heCkge1xyXG4gICAgICAgICBjYXNlIG1pbjogaCA9IDA7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpICsgZCAqIChnIDwgYiA/IDYgOiAwKTsgaCAvPSA2ICogZDsgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgZzogaCA9IChiIC0gcikgKyBkICogMjsgaCAvPSA2ICogZDsgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgYjogaCA9IChyIC0gZykgKyBkICogNDsgaCAvPSA2ICogZDsgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgaHN2Q29sb3IoW2gsIHMsIHZdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHN2Q29sb3Igb2JqZWN0IGZyb20gYSBnbENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvciBUaGUgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBoc3ZDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21HbENvbG9yKGNvbG9yOiBnbENvbG9yKTogaHN2Q29sb3Ige1xyXG4gICAgICByZXR1cm4gaHN2Q29sb3IuZnJvbUh0bWxDb2xvcihjb2xvci50b0h0bWxDb2xvcigpKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBnbENvbG9yIG9iamVjdCBmcm9tIHRoaXMgb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR2xDb2xvcigpOiBnbENvbG9yIHtcclxuXHJcbiAgICAgIHZhciByLCBnLCBiLCBpLCBmLCBwLCBxLCB0O1xyXG4gICAgICBpID0gTWF0aC5mbG9vcih0aGlzLmggKiA2KTtcclxuICAgICAgZiA9IHRoaXMuaCAqIDYgLSBpO1xyXG4gICAgICBwID0gdGhpcy52ICogKDEgLSB0aGlzLnMpO1xyXG4gICAgICBxID0gdGhpcy52ICogKDEgLSBmICogdGhpcy5zKTtcclxuICAgICAgdCA9IHRoaXMudiAqICgxIC0gKDEgLSBmKSAqIHRoaXMucyk7XHJcbiAgICAgIHN3aXRjaCAoaSAlIDYpIHtcclxuICAgICAgICAgY2FzZSAwOiByID0gdGhpcy52LCBnID0gdCwgYiA9IHA7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIDE6IHIgPSBxLCBnID0gdGhpcy52LCBiID0gcDsgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgMjogciA9IHAsIGcgPSB0aGlzLnYsIGIgPSB0OyBicmVhaztcclxuICAgICAgICAgY2FzZSAzOiByID0gcCwgZyA9IHEsIGIgPSB0aGlzLnY7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIDQ6IHIgPSB0LCBnID0gcCwgYiA9IHRoaXMudjsgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgNTogciA9IHRoaXMudiwgZyA9IHAsIGIgPSBxOyBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgZnJvbSB0aGlzIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBnbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0h0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICByZXR1cm4gdGhpcy50b0dsQ29sb3IoKS50b0h0bWxDb2xvcigpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcbmltcG9ydCB7IGhzdkNvbG9yIH0gZnJvbSBcIi4vaHN2Q29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyNTVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjIFRoZSBudW1lcmljIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbXBvbmVudFRvSGV4KGM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBoZXggc3RyaW5nIChlLmcuICMwZjBmMGYpO1xyXG4gICAgKi9cclxuICAgcHVibGljIHRvSGV4KCk6IHN0cmluZyB7XHJcbiAgICAgIGxldCBySGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLnIpO1xyXG4gICAgICBsZXQgZ0hleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5nKTtcclxuICAgICAgbGV0IGJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBcIiNcIiArIHJIZXggKyBnSGV4ICsgYkhleDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCBmcm9tIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGhleCBUaGUgaGV4IHN0cmluZ1xyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbENvbG9yIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tSGV4KGhleDogc3RyaW5nKTogaHRtbENvbG9yIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgIGxldCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgICAgICAgIGxldCBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XHJcbiAgICAgICAgIGxldCBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIFdlYkdMIGNvbG9yIG9iamVjdCAoMC0xIGJhc2VkKVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBnbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dsQ29sb3IoKTogZ2xDb2xvciB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbdGhpcy5yIC8gMjU1LCB0aGlzLmcgLyAyNTUsIHRoaXMuYiAvIDI1NV0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBVbmlmb3JtcyB9IGZyb20gXCIuL1NoYWRlcnNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgTGlnaHRDb2xvcnMgfSBmcm9tIFwiLi9MaWdodENvbG9yc1wiO1xyXG5pbXBvcnQgeyBoc3ZDb2xvciB9IGZyb20gXCIuL2hzdkNvbG9yXCI7XHJcblxyXG5sZXQgYXBwOiBBcHA7XHJcbmV4cG9ydCBsZXQgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG5sZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmV4cG9ydCBsZXQgYW5nbGVYID0gMDtcclxuZXhwb3J0IGxldCBhbmdsZVkgPSAwO1xyXG5leHBvcnQgbGV0IHpvb21aID0gMy4wO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICBlbGVtZW50LmlubmVySFRNTCA9XHJcbiAgICAgICc8Y2FudmFzIGlkPVwiY2FudmFzXCI+PC9jYW52YXM+XFxuJyArXHJcbiAgICAgICc8YnIgLz5cXG4nICtcclxuICAgICAgJzxsYWJlbCBmb3I9XCJpbnRlbnNpdHlSYW5nZVwiPkludGVuc2l0eTwvbGFiZWw+XFxuJyArXHJcbiAgICAgICc8aW5wdXQgaWQ9XCJpbnRlbnNpdHlSYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjUwXCIgY2xhc3M9XCJzbGlkZXJcIj5cXG4nICtcclxuICAgICAgJzxiciAvPlxcbicgK1xyXG4gICAgICAnPGxhYmVsIGZvcj1cInRlbXBlcmF0dXJlUmFuZ2VcIj5UZW1wZXJhdHVyZTwvbGFiZWw+XFxuJyArXHJcbiAgICAgICc8aW5wdXQgaWQ9XCJ0ZW1wZXJhdHVyZVJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMjAwMFwiIG1heD1cIjgwMDBcIiB2YWx1ZT1cIicgKyBMaWdodENvbG9ycy5kYXlsaWdodC50ZW1wZXJhdHVyZSArICdcIiBjbGFzcz1cInNsaWRlclwiPlxcbicgK1xyXG4gICAgICAnPHNwYW4gaWQ9XCJ0ZW1wZXJhdHVyZVNwYW5cIj4nICsgTGlnaHRDb2xvcnMuZGF5bGlnaHQudGVtcGVyYXR1cmUgKyAnPC9zcGFuPlxcbicgK1xyXG4gICAgICAnPGJyPlxcbicgK1xyXG4gICAgICAnPGxhYmVsIGZvcj1cImJhbGxDb2xvclJhbmdlXCI+QmFsbCBDb2xvcjwvbGFiZWw+XFxuJyArXHJcbiAgICAgICc8aW5wdXQgaWQ9XCJiYWxsQ29sb3JSYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDAwXCIgdmFsdWU9XCInICsgTGlnaHRDb2xvcnMuZGF5bGlnaHQudGVtcGVyYXR1cmUgKyAnXCIgY2xhc3M9XCJzbGlkZXJcIj5cXG4nICtcclxuICAgICAgJzxzcGFuIGlkPVwiYmFsbENvbG9yU3BhblwiPjwvc3Bhbj4nICtcclxuICAgICAgJzxiciAvPlxcbicgK1xyXG4gICAgICAnPGxhYmVsIGZvcj1cImFtYmllbnRJbnRlbnNpdHlSYW5nZVwiPkFtYmllbnQgSW50ZW5zaXR5PC9sYWJlbD5cXG4nICtcclxuICAgICAgJzxpbnB1dCBpZD1cImFtYmllbnRJbnRlbnNpdHlSYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjUwXCIgY2xhc3M9XCJzbGlkZXJcIj5cXG4nICtcclxuICAgICAgJzxiciAvPlxcbicgK1xyXG4gICAgICAnPGJyIC8+XFxuJztcclxuXHJcbiAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuXHJcbnZhciBtb3VzZURvd24gPSBmYWxzZTtcclxudmFyIG9sZFg6IG51bWJlcjtcclxudmFyIG9sZFk6IG51bWJlcjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgdHJ5IHtcclxuICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJykgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBnZXQgV2ViR0wyIGNvbnRleHRcIik7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChnbCkge1xyXG4gICAgICBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50OiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgb2xkWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgb2xkWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgb25Nb3ZlKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBvbGRYID0gZXZlbnQueDtcclxuICAgICAgICAgb2xkWSA9IGV2ZW50Lnk7XHJcblxyXG4gICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBvbk1vdmUoZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25Nb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgIGlmIChtb3VzZURvd24pIHtcclxuICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgYW5nbGVZIC09ICh4IC0gb2xkWCkgKiAwLjAxO1xyXG4gICAgICBhbmdsZVggKz0gKHkgLSBvbGRZKSAqIDAuMDE7XHJcblxyXG4gICAgICAvLyBkb24ndCBnbyB1cHNpZGUgZG93blxyXG4gICAgICBhbmdsZVggPSBNYXRoLm1heChhbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICBhbmdsZVggPSBNYXRoLm1pbihhbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcblxyXG4gICAgICAvLyBjbGVhciB0aGUgc2FtcGxlIGJ1ZmZlclxyXG4gICAgICBhcHAucmVzdGFydCgpO1xyXG5cclxuICAgICAgLy8gcmVtZW1iZXIgdGhpcyBjb29yZGluYXRlXHJcbiAgICAgIG9sZFggPSB4O1xyXG4gICAgICBvbGRZID0geTtcclxuICAgfVxyXG59XHJcblxyXG5sZXQgaW50ZW5zaXR5U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRlbnNpdHlSYW5nZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5pbnRlbnNpdHlTbGlkZXIudmFsdWUgPSBcIlwiICsgVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ICogMTAwO1xyXG5pbnRlbnNpdHlTbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ID0gcGFyc2VGbG9hdChpbnRlbnNpdHlTbGlkZXIudmFsdWUpIC8gMTAwO1xyXG4gICBhcHAucmVzdGFydCgpO1xyXG59XHJcblxyXG5cclxubGV0IHRlbXBlcmF0dXJlU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVJhbmdlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbnNldExpZ2h0Q29sb3IoKTtcclxudGVtcGVyYXR1cmVTbGlkZXIub25pbnB1dCA9IHNldExpZ2h0Q29sb3JcclxuXHJcbmZ1bmN0aW9uIHNldExpZ2h0Q29sb3IoKSB7XHJcbiAgIGxldCB0ZW1wZXJhdHVyZSA9IHBhcnNlRmxvYXQodGVtcGVyYXR1cmVTbGlkZXIudmFsdWUpO1xyXG4gICBVbmlmb3Jtcy51TGlnaHRDb2xvciA9IExpZ2h0Q29sb3JzLnRvUkdCKHRlbXBlcmF0dXJlKTtcclxuICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlU3BhblwiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHNwYW4uaW5uZXJUZXh0ID0gdGVtcGVyYXR1cmUudG9GaXhlZCgpICsgXCJLXCI7XHJcblxyXG4gICBpZiAoYXBwKSB7XHJcbiAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuXHJcbmxldCBiYWxsQ29sb3JTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbGxDb2xvclJhbmdlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmJhbGxDb2xvclNsaWRlci52YWx1ZSA9IChwYXJzZUZsb2F0KGJhbGxDb2xvclNsaWRlci5tYXgpICogaHN2Q29sb3IuZnJvbUdsQ29sb3IoVW5pZm9ybXMudUJhbGxDb2xvcikudikudG9TdHJpbmcoKTtcclxuc2V0U3BhbkNvbG9yKCk7XHJcbmJhbGxDb2xvclNsaWRlci5vbmlucHV0ID0gc2V0QmFsbENvbG9yXHJcblxyXG5mdW5jdGlvbiBzZXRCYWxsQ29sb3IoKSB7XHJcbiAgIGxldCBodWUgPSBwYXJzZUZsb2F0KGJhbGxDb2xvclNsaWRlci52YWx1ZSk7XHJcbiAgIFVuaWZvcm1zLnVCYWxsQ29sb3IgPSAobmV3IGhzdkNvbG9yKFtodWUgLyBwYXJzZUZsb2F0KGJhbGxDb2xvclNsaWRlci5tYXgpLCAwLjYsIDAuNl0pKS50b0dsQ29sb3IoKTtcclxuXHJcbiAgIHNldFNwYW5Db2xvcigpO1xyXG5cclxuICAgaWYgKGFwcCkge1xyXG4gICAgICBhcHAucmVzdGFydCgpO1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNwYW5Db2xvcigpIHtcclxuICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbGxDb2xvclNwYW5cIikgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFVuaWZvcm1zLnVCYWxsQ29sb3IudG9IdG1sQ29sb3IoKS50b0hleCgpO1xyXG59XHJcblxyXG5sZXQgYW1iaWVudEludGVuc2l0eVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW1iaWVudEludGVuc2l0eVJhbmdlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmFtYmllbnRJbnRlbnNpdHlTbGlkZXIudmFsdWUgPSBcIlwiICsgVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSAqIDEwMDtcclxuYW1iaWVudEludGVuc2l0eVNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ID0gcGFyc2VGbG9hdChhbWJpZW50SW50ZW5zaXR5U2xpZGVyLnZhbHVlKSAvIDEwMDtcclxuICAgYXBwLnJlc3RhcnQoKTtcclxufVxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgXCIgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbiB2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxuIHVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcclxcblxcclxcbiB2b2lkIG1haW4oKVxcclxcbiB7XFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuIH1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiIGF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG4gdmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbiBcXHJcXG4gdm9pZCBtYWluKClcXHJcXG4ge1xcclxcbiAgIHRleENvb3JkID0gdmVydGV4Lnh5ICogMC41ICsgMC41O1xcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgsIDEuMCk7XFxyXFxuIH1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG4gdW5pZm9ybSB2ZWMzIHVFeWU7XFxyXFxuIHZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiB1bmlmb3JtIGZsb2F0IHVUZXh0dXJlV2VpZ2h0O1xcclxcbiB1bmlmb3JtIGZsb2F0IHVUZXh0dXJlU2l6ZTtcXHJcXG4gdW5pZm9ybSBmbG9hdCB1VGltZVNpbmNlU3RhcnQ7XFxyXFxuIHVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcclxcbiB1bmlmb3JtIHZlYzMgdUxpZ2h0UG9zO1xcclxcbiB1bmlmb3JtIGZsb2F0IHVMaWdodEludGVuc2l0eTtcXHJcXG4gdW5pZm9ybSB2ZWMzIHVMaWdodENvbG9yO1xcclxcbiB1bmlmb3JtIGZsb2F0IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxuIHVuaWZvcm0gdmVjMyB1QmFsbENvbG9yO1xcclxcblxcclxcbiBjb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDA7XFxyXFxuIGNvbnN0IGZsb2F0IEVQU0lMT04gPSAwLjAwMDE7XFxyXFxuIGNvbnN0IGZsb2F0IElORklOSVRZID0gMTAwMDAuMDtcXHJcXG4gY29uc3QgZmxvYXQgTElHSFRfU0laRSA9IDAuMTtcXHJcXG4gY29uc3QgdmVjMyBTUEhFUkVfQ0VOVEVSID0gdmVjMygwLCAtMC41LCAwKTtcXHJcXG4gY29uc3QgZmxvYXQgU1BIRVJFX1JBRElVUyA9IDAuNTtcXHJcXG4gY29uc3QgdmVjMyBET01FX0NFTlRFUiA9IHZlYzMoMCwwLDApO1xcclxcbiBjb25zdCBmbG9hdCBET01FX1JBRElVUyA9IDcuMDtcXHJcXG4gY29uc3QgZmxvYXQgVkFMID0gMC44O1xcclxcbiBjb25zdCB2ZWMzIERPTUVfQ09MT1IgPSB2ZWMzKFZBTCwgVkFMLCBWQUwpO1xcclxcbiBjb25zdCB2ZWMzIEZMT09SX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG4gY29uc3QgdmVjMyBBTUJJRU5UX0NPTE9SID0gdmVjMygxLjAsMS4wLDEuMCk7XFxyXFxuIGNvbnN0IGludCBOVU1fTElHSFRTID0gNjtcXHJcXG4gY29uc3QgZmxvYXQgSEVJR0hUID0gNC4wO1xcclxcbiBjb25zdCBmbG9hdCBSQURJVVMgPSA0LjA7XFxyXFxuIGNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTtcXHJcXG5cXHJcXG4gc3RydWN0IExpZ2h0XFxyXFxuIHtcXHJcXG4gICAgZmxvYXQgaW50ZW5zaXR5O1xcclxcbiAgICBmbG9hdCBzaXplO1xcclxcbiAgICB2ZWMzIHBvcztcXHJcXG4gICAgdmVjMyBjb2xvcjtcXHJcXG4gfTtcXHJcXG5cXHJcXG4gTGlnaHQgTGlnaHRzW05VTV9MSUdIVFNdO1xcclxcblxcclxcblxcclxcbiBmbG9hdCBpbnRlcnNlY3RTcGhlcmUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbiB7XFxyXFxuICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXHJcXG4gICBmbG9hdCBhID0gZG90KHJheSwgcmF5KTtcXHJcXG4gICBmbG9hdCBiID0gMi4wICogZG90KHRvU3BoZXJlLCByYXkpO1xcclxcbiAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cypzcGhlcmVSYWRpdXM7XFxyXFxuICAgZmxvYXQgZGlzY3JpbWluYW50ID0gYipiIC0gNC4wKmEqYztcXHJcXG4gICBpZihkaXNjcmltaW5hbnQgPiAwLjApIHtcXHJcXG4gICAgIGZsb2F0IHQxID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgIGZsb2F0IHQyID0gKC1iICsgc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgIGlmKHQxID4gMC4wKVxcclxcbiAgICAge1xcclxcbiAgICAgICAgcmV0dXJuIHQxO1xcclxcbiAgICAgfVxcclxcbiAgICAgZWxzZSBpZiAoIHQyID4gMC4wKVxcclxcbiAgICAge1xcclxcbiAgICAgICAgcmV0dXJuIHQyO1xcclxcbiAgICAgfVxcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuIH1cXHJcXG5cXHJcXG4gdmVjMyBub3JtYWxGb3JTcGhlcmUodmVjMyBoaXQsIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpIFxcclxcbiB7XFxyXFxuICAgcmV0dXJuIChoaXQgLSBzcGhlcmVDZW50ZXIpIC8gc3BoZXJlUmFkaXVzO1xcclxcbiB9XFxyXFxuXFxyXFxuIGZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKSBcXHJcXG4ge1xcclxcbiAgIHJldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXogKyBzZWVkLCBzY2FsZSkpICogNDM3NTguNTQ1MyArIHNlZWQpO1xcclxcbiB9XFxyXFxuXFxyXFxuIHZlYzMgY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24oZmxvYXQgc2VlZCwgdmVjMyBub3JtYWwpIFxcclxcbiB7XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCk8LjUpIFxcclxcbiAgIHtcXHJcXG4gICAgIHNkaXIgPSBjcm9zcyhub3JtYWwsIHZlYzMoMSwwLDApKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBcXHJcXG4gICB7XFxyXFxuICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDAsMSwwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByKmNvcyhhbmdsZSkqc2RpciArIHIqc2luKGFuZ2xlKSp0ZGlyICsgc3FydCgxLi11KSpub3JtYWw7XFxyXFxuIH1cXHJcXG5cXHJcXG4gdmVjMyB1bmlmb3JtbHlSYW5kb21EaXJlY3Rpb24oZmxvYXQgc2VlZCkgXFxyXFxuIHtcXHJcXG4gICBmbG9hdCB1ID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHYgPSByYW5kb20odmVjMyg2My43MjY0LCAxMC44NzMsIDYyMy42NzM2KSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgeiA9IDEuMCAtIDIuMCAqIHU7XFxyXFxuICAgZmxvYXQgciA9IHNxcnQoMS4wIC0geiAqIHopO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIHJldHVybiB2ZWMzKHIgKiBjb3MoYW5nbGUpLCByICogc2luKGFuZ2xlKSwgeik7XFxyXFxuIH1cXHJcXG5cXHJcXG4gdmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZCkgXFxyXFxuIHtcXHJcXG4gICByZXR1cm4gdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKHNlZWQpICogc3FydChyYW5kb20odmVjMygzNi43NTM5LCA1MC4zNjU4LCAzMDYuMjc1OSksIHNlZWQpKTtcXHJcXG4gfVxcclxcblxcclxcbiBmbG9hdCBzaGFkb3codmVjMyBvcmlnaW4sIHZlYzMgcmF5KSBcXHJcXG4ge1xcclxcbiAgIGZsb2F0IHRTcGhlcmUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIFNQSEVSRV9DRU5URVIsIFNQSEVSRV9SQURJVVMpO1xcclxcbiAgIGlmKHRTcGhlcmUgPCAxLjApXFxyXFxuICAge1xcclxcbiAgICAgcmV0dXJuIDAuMDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgIHJldHVybiAxLjA7XFxyXFxuICAgfVxcclxcbiB9XFxyXFxuXFxyXFxuIHZlYzMgY2FsY3VsYXRlQ29sb3IodmVjMyBvcmlnaW4sIHZlYzMgcmF5KSBcXHJcXG4ge1xcclxcbiAgIHZlYzMgYWNjdW11bGF0ZWRDb2xvciA9IHZlYzMoMC4wKTtcXHJcXG4gICB2ZWMzIGNvbG9yTWFzayA9IHZlYzMoMS4wKTtcXHJcXG5cXHJcXG4gICAvLyBtYWluIHJheXRyYWNpbmcgbG9vcFxcclxcbiAgIGZvcihpbnQgYm91bmNlID0gMDsgYm91bmNlIDwgTUFYX0JPVU5DRVM7IGJvdW5jZSsrKSBcXHJcXG4gICB7XFxyXFxuICAgICAvLyBjb21wdXRlIHRoZSBpbnRlcnNlY3Rpb24gd2l0aCBldmVyeXRoaW5nXFxyXFxuICAgICBmbG9hdCB0U3BoZXJlID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBTUEhFUkVfQ0VOVEVSLCBTUEhFUkVfUkFESVVTKTtcXHJcXG4gICAgIHZlYzMgc3VyZmFjZUNvbG9yID0gdmVjMygwLjUsIDAuNSwgMC41KTtcXHJcXG5cXHJcXG4gICAgICBpZiAoIGJvdW5jZSA9PSAwIClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IHJheSBoaXRzIHRoZSBsaWdodCwgcmV0dXJuIHRoZSBsaWdodCBjb2xvci4gVGhpcyBzaW11bGF0ZXNcXHJcXG4gICAgICAgICAvLyBkaXNwbGF5aW5nIHRoZSBsaWdodFxcclxcbiAgICAgICAgIGZvciAoIGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmVjMyBsaWdodFBvcyA9IExpZ2h0c1tpXS5wb3M7XFxyXFxuICAgICAgICAgICAgaWYgKGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgbGlnaHRQb3MsIExpZ2h0c1tpXS5zaXplKTx0U3BoZXJlKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICByZXR1cm4gTGlnaHRzW2ldLmludGVuc2l0eSpMaWdodHNbaV0uY29sb3I7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICBmbG9hdCB0RG9tZSA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG5cXHJcXG4gICAgIC8vIGZpbmQgdGhlIGNsb3Nlc3QgaW50ZXJzZWN0aW9uXFxyXFxuICAgICBmbG9hdCB0ID0gSU5GSU5JVFk7XFxyXFxuICAgICBmbG9hdCB0Zmxvb3IgPSBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAgIC8vIGNoZWNrIGZvciBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgZ3JvdW5kXFxyXFxuICAgICBpZiAocmF5LnkgPCAwLjApXFxyXFxuICAgICB7XFxyXFxuICAgICAgIC8vIGRpc3RhbmNlIHRvIGZsb29yID0gbnVtIHVuaXQgdmVjdG9ycyByZXF1aXJlZCB0byByZWFjaCB0aGUgZmxvb3JcXHJcXG4gICAgICAgdGZsb29yID0gLShvcmlnaW4ueSsxLjApL3JheS55O1xcclxcbiAgICAgICBpZiAodGZsb29yIDwgdCApXFxyXFxuICAgICAgIHtcXHJcXG4gICAgICAgICB0ID0gdGZsb29yO1xcclxcbiAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgIHN1cmZhY2VDb2xvciA9IEZMT09SX0NPTE9SO1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgaWYodFNwaGVyZSA8IHQpXFxyXFxuICAgICB7XFxyXFxuICAgICAgIHN1cmZhY2VDb2xvciA9IHZlYzModUJhbGxDb2xvcik7XFxyXFxuICAgICAgIHQgPSB0U3BoZXJlO1xcclxcbiAgICAgfVxcclxcbiAgICAgZWxzZSBpZiAodERvbWUgPCB0KVxcclxcbiAgICAge1xcclxcbiAgICAgICAgc3VyZmFjZUNvbG9yID0gRE9NRV9DT0xPUjtcXHJcXG4gICAgICAgIHQgPSB0RG9tZTtcXHJcXG4gICAgIH1cXHJcXG5cXHJcXG4gICAgIC8vIGluZm8gYWJvdXQgaGl0XFxyXFxuICAgICB2ZWMzIGhpdCA9IG9yaWdpbiArIHJheSAqIHQ7XFxyXFxuICAgICB2ZWMzIG5vcm1hbDtcXHJcXG5cXHJcXG4gICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsXFxyXFxuICAgICBpZih0ID09IHRmbG9vcilcXHJcXG4gICAgIHtcXHJcXG4gICAgICAgbm9ybWFsID0gdmVjMygwLjAsMS4wLDAuMCk7XFxyXFxuICAgICB9XFxyXFxuICAgICBlbHNlIGlmKHQgPT0gdFNwaGVyZSlcXHJcXG4gICAgIHtcXHJcXG4gICAgICAgbm9ybWFsID0gbm9ybWFsRm9yU3BoZXJlKGhpdCwgU1BIRVJFX0NFTlRFUiwgU1BIRVJFX1JBRElVUyk7XFxyXFxuICAgICB9XFxyXFxuICAgICBlbHNlIGlmKHQgPT0gdERvbWUpXFxyXFxuICAgICB7XFxyXFxuICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JTcGhlcmUoaGl0LCBET01FX0NFTlRFUiwgRE9NRV9SQURJVVMpO1xcclxcbiAgICAgICAgLy9ub3JtYWwgPSAtbm9ybWFsRm9yU3BoZXJlKGhpdCwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICAgIG5vcm1hbFswXSA9IC1ub3JtYWxbMF07XFxyXFxuICAgICAgICBub3JtYWxbMV0gPSAtbm9ybWFsWzFdO1xcclxcbiAgICAgICAgbm9ybWFsWzJdID0gLW5vcm1hbFsyXTtcXHJcXG4gICAgIH1cXHJcXG4gICAgIGVsc2VcXHJcXG4gICAgIHtcXHJcXG4gICAgICAgYnJlYWs7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICByYXkgPSBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbih1VGltZVNpbmNlU3RhcnQgKyBmbG9hdChib3VuY2UpLCBub3JtYWwpO1xcclxcblxcclxcblxcclxcbiAgICAgY29sb3JNYXNrICo9IHN1cmZhY2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgIGlmKGxlbmd0aChjb2xvck1hc2spIDwgMC4wMSlcXHJcXG4gICAgIHtcXHJcXG4gICAgICAgIGJyZWFrO1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgZm9yICggaW50IGkgPSAwOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgICAge1xcclxcbiAgICAgICAgIGZsb2F0IGxpZ2h0SW50ZW5zaXR5ID0gTGlnaHRzW2ldLmludGVuc2l0eTtcXHJcXG4gICAgICAgICB2ZWMzIGxpZ2h0UG9zID0gTGlnaHRzW2ldLnBvcztcXHJcXG4gICAgICAgICB2ZWMzIGxpZ2h0Q29sb3IgPSBMaWdodHNbaV0uY29sb3I7XFxyXFxuXFxyXFxuICAgICAgICAgLy8gY29tcHV0ZSBkaWZmdXNlIGxpZ2h0aW5nIGNvbnRyaWJ1dGlvblxcclxcbiAgICAgICAgIHZlYzMgdG9MaWdodCA9IGxpZ2h0UG9zIC0gaGl0O1xcclxcbiAgICAgICAgIGZsb2F0IGRpZmZ1c2UgPSBtYXgoMC4wLCBkb3Qobm9ybWFsaXplKHRvTGlnaHQpLCBub3JtYWwpKTtcXHJcXG5cXHJcXG4gICAgICAgICAvLyB0cmFjZSBhIHNoYWRvdyByYXkgdG8gdGhlIGxpZ2h0XFxyXFxuICAgICAgICAgZmxvYXQgc2hhZG93SW50ZW5zaXR5ID0gc2hhZG93KGhpdCArIG5vcm1hbCAqIEVQU0lMT04sIHRvTGlnaHQpO1xcclxcblxcclxcbiAgICAgICAgIC8vIGRvIGxpZ2h0IGJvdW5jZVxcclxcblxcclxcbiAgICAgICAgIC8vIGFwcGx5IGxpZ2h0IGZhbGwgb2ZmIGFzIGRpc3RhbmNlIHNxdWFyZXMuIFVzZSBhIG1pbiB2YWx1ZSBmb3IgdGhlIGxpZ2h0IHNpemVcXHJcXG4gICAgICAgICBmbG9hdCByYWRpdXMgPSBtYXgoMC43NSxMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgZmxvYXQgZGlzdCA9IG1heCgxLjAsKGxlbmd0aCh0b0xpZ2h0KS1yYWRpdXMpL3JhZGl1cyk7XFxyXFxuXFxyXFxuICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBjb2xvck1hc2sgKiBsaWdodENvbG9yICogKGxpZ2h0SW50ZW5zaXR5LyhkaXN0KmRpc3QpICogZGlmZnVzZSAqIHNoYWRvd0ludGVuc2l0eSk7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICAvLyBjYWxjdWxhdGUgbmV4dCBvcmlnaW5cXHJcXG4gICAgIG9yaWdpbiA9IGhpdDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgcmV0dXJuIGFjY3VtdWxhdGVkQ29sb3I7XFxyXFxuIH1cXHJcXG5cXHJcXG4gdm9pZCBtYWluKCkgXFxyXFxuIHtcXHJcXG4gICB2ZWMzIHJhbmQgPSB1bmlmb3JtbHlSYW5kb21WZWN0b3IodVRpbWVTaW5jZVN0YXJ0IC0gNTMuMCkgKiBMSUdIVF9TSVpFO1xcclxcblxcclxcbiAgIExpZ2h0c1swXS5pbnRlbnNpdHkgPSB1TGlnaHRJbnRlbnNpdHk7XFxyXFxuICAgTGlnaHRzWzBdLnNpemUgPSBMSUdIVF9TSVpFO1xcclxcbiAgIExpZ2h0c1swXS5wb3MgPSB2ZWMzKHVMaWdodFBvcy54ICsgcmFuZC54LHVMaWdodFBvcy55ICsgcmFuZC55LHVMaWdodFBvcy56ICsgcmFuZC56KTtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB2ZWMzKHVMaWdodENvbG9yLngsdUxpZ2h0Q29sb3IueSx1TGlnaHRDb2xvci56KTtcXHJcXG5cXHJcXG4gICBmb3IgKGludCBpID0gMTsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgeCA9IFJBRElVUypzaW4oMi4wKlBJKmZsb2F0KGkpLyhmbG9hdChOVU1fTElHSFRTKS0xLjApKSArICArIHJhbmQueDtcXHJcXG4gICAgICBmbG9hdCB5ID0gSEVJR0hUICsgICsgcmFuZC55O1xcclxcbiAgICAgIGZsb2F0IHogPSBSQURJVVMqY29zKDIuMCpQSSpmbG9hdChpKS8oZmxvYXQoTlVNX0xJR0hUUyktMS4wKSkgKyAgKyByYW5kLno7XFxyXFxuXFxyXFxuICAgICAgTGlnaHRzW2ldLmludGVuc2l0eSA9IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxuICAgICAgTGlnaHRzW2ldLnNpemUgPSAyLjAqTElHSFRfU0laRTtcXHJcXG4gICAgICBMaWdodHNbaV0ucG9zID0gdmVjMyh4LHkseik7XFxyXFxuICAgICAgTGlnaHRzW2ldLmNvbG9yID0gQU1CSUVOVF9DT0xPUjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgdmVjMyB0ZXh0dXJlMiA9IHRleHR1cmUyRCh1VGV4dHVyZSwgZ2xfRnJhZ0Nvb3JkLnh5IC8gdVRleHR1cmVTaXplKS5yZ2I7XFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChtaXgoY2FsY3VsYXRlQ29sb3IodUV5ZSwgaW5pdGlhbFJheSksIHRleHR1cmUyLCB1VGV4dHVyZVdlaWdodCksIDEuMCk7XFxyXFxuIH1cIiIsImV4cG9ydCBkZWZhdWx0IFwiIGF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG4gdW5pZm9ybSB2ZWMzIHVFeWUsIHVSYXkwMCwgdVJheTAxLCB1UmF5MTAsIHVSYXkxMTtcXHJcXG4gdmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuXFxyXFxuIHZvaWQgbWFpbigpXFxyXFxuIHtcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgodVJheTAwLCB1UmF5MDEsIHBlcmNlbnQueSksIG1peCh1UmF5MTAsIHVSYXkxMSwgcGVyY2VudC55KSwgcGVyY2VudC54KTtcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcclxcbiB9XFxyXFxuXCIiXSwic291cmNlUm9vdCI6IiJ9