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
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n.SliderLabel {\r\n  display: inline-block;\r\n  width: 25%;\r\n  text-align: right;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.SliderGroup {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  background-color: rgb(240, 240, 240);\r\n}\r\n\r\n.SliderHeader {\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  color: gray;\r\n}\r\n\r\n.SliderRange {\r\n  width: 50%;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  border-radius: 15px;\r\n  height: 15px;\r\n  margin-top: 0px;\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.SliderRange::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n}\r\n\r\n.SliderRange::-moz-range-thumb {\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n  cursor: pointer;\r\n}\r\n\r\n.SliderColorSpan {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 5px;\r\n  border-radius: 50%;\r\n  border: gray;\r\n  border-style: solid;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .SliderHeader {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .SliderLabel {\r\n    width: 30%;\r\n    font-size: 40px;\r\n    padding-bottom: 18px;\r\n  }\r\n\r\n  .SliderRange {\r\n    width: 45%;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .SliderRange::-webkit-slider-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderRange::-moz-range-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderColorSpan {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .SliderValueSpan {\r\n    font-size: 40px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n}\r\n", ""]);
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
            var r = this.colors[index].r + partial * (this.colors[index + 1].r - this.colors[index].r);
            var g = this.colors[index].g + partial * (this.colors[index + 1].g - this.colors[index].g);
            var b = this.colors[index].b + partial * (this.colors[index + 1].b - this.colors[index].b);
            return new _htmlColor__WEBPACK_IMPORTED_MODULE_0__["htmlColor"]([r, g, b]);
        }
    };
    return ColorRange;
}());



/***/ }),

/***/ "./src/PathTracer.ts":
/*!***************************!*\
  !*** ./src/PathTracer.ts ***!
  \***************************/
/*! exports provided: RenderMode, ToScreenUniforms, PathTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMode", function() { return RenderMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToScreenUniforms", function() { return ToScreenUniforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathTracer", function() { return PathTracer; });
/* harmony import */ var _Shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shaders */ "./src/Shaders.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _toScreenVertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toScreenVertex.glsl */ "./src/toScreenVertex.glsl");
/* harmony import */ var _toScreenFragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toScreenFragment.glsl */ "./src/toScreenFragment.glsl");
/* harmony import */ var _toTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toTextureVertex.glsl */ "./src/toTextureVertex.glsl");
/* harmony import */ var _toTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toTextureFragment.glsl */ "./src/toTextureFragment.glsl");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");
/* harmony import */ var _ColorRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ColorRange */ "./src/ColorRange.ts");










/**
 * Rendering mode for displaying the texture
 */
var RenderMode;
(function (RenderMode) {
    RenderMode[RenderMode["Science"] = 0] = "Science";
    RenderMode[RenderMode["Value"] = 1] = "Value";
    RenderMode[RenderMode["Chroma"] = 2] = "Chroma";
    RenderMode[RenderMode["Artist"] = 3] = "Artist";
    RenderMode[RenderMode["Bands"] = 4] = "Bands";
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
    uBallLightChroma: 1.0,
    uBallShadowChroma: 1.0,
    uBallLightShift: 0.0,
    uBallShadowShift: 0.0,
    uHighlightColor: undefined,
    uLightLightColor: undefined,
    uMidLightColor: undefined,
    uDarkLightColor: undefined,
    uLightestShadowColor: undefined,
    uDarkestShadowColor: undefined,
    uAvgShadowColor: undefined,
    uBALL_SPECULAR: _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBALL_SPECULAR,
    uBALL_LIGHT: _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBALL_LIGHT,
    uBALL_SHADOW: _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBALL_SHADOW,
};
/**
 * Class that does the work of building the Path Traced texture
 */
var PathTracer = /** @class */ (function () {
    function PathTracer() {
        this.mainView = RenderMode.Science;
        this.smallViews = [
            RenderMode.Artist,
            RenderMode.Chroma,
            RenderMode.Bands,
            RenderMode.Value,
        ];
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
        var internalFormat;
        var format;
        var type;
        // create textures
        if (_index__WEBPACK_IMPORTED_MODULE_3__["gl"] instanceof WebGLRenderingContext) {
            var ext = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getExtension('OES_texture_half_float');
            if (ext) {
                // Thanks Apple. Always got to do things a little differently
                internalFormat = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA;
                format = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA;
                type = ext.HALF_FLOAT_OES;
            }
            else {
                // No floating point textures? really fall back to unsigned bytes
                internalFormat = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA;
                format = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA;
                type = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].UNSIGNED_BYTE;
            }
        }
        // Typescript doesn't let you do an 'else if' here and when WebGL2 is
        // not supported, we get an exception, so thus the try-catch
        // see: https://stackoverflow.com/questions/45381122/typescript-type-narrowed-to-never-with-instanceof-in-an-if-else-statement
        try {
            if (_index__WEBPACK_IMPORTED_MODULE_3__["gl"] instanceof WebGL2RenderingContext) {
                _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getExtension('EXT_color_buffer_float');
                internalFormat = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA32F;
                format = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA;
                type = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT;
            }
        }
        catch (error) {
        }
        // create two textures. One we display and one we draw to
        this.textures = [];
        for (var i = 0; i < 2; i++) {
            this.textures.push(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].createTexture());
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[i]);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texParameteri(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_MAG_FILTER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].NEAREST);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texParameteri(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_MIN_FILTER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].NEAREST);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texImage2D(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, // target
            0, // level
            internalFormat, // internal format
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, // width
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, // height
            0, // border
            format, // format
            type, // type
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
    Object.defineProperty(PathTracer.prototype, "renderMode", {
        get: function () {
            return this.mainView;
        },
        enumerable: true,
        configurable: true
    });
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
        var data = this.getPixelData();
        var cr = new _ColorRange__WEBPACK_IMPORTED_MODULE_9__["ColorRange"]([data.darkestLightColor.toHtmlColor(), data.avgLightColor.toHtmlColor(), data.lightestLightColor.toHtmlColor()]);
        ToScreenUniforms.uMaxChroma = data.maxChroma;
        ToScreenUniforms.uHighlightColor = cr.get(1.0).toGlColor();
        ToScreenUniforms.uLightLightColor = cr.get(0.8).toGlColor();
        ToScreenUniforms.uMidLightColor = cr.get(0.5).toGlColor();
        ToScreenUniforms.uDarkLightColor = cr.get(0.2).toGlColor();
        ToScreenUniforms.uLightestShadowColor = data.lightestShadowColor;
        ToScreenUniforms.uDarkestShadowColor = data.darkestShadowColor;
        ToScreenUniforms.uAvgShadowColor = data.avgShadowColor;
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
    PathTracer.prototype.getPixelData = function () {
        var data = {
            maxChroma: 0,
            avgLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([0, 0, 0]),
            lightestLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([0, 0, 0]),
            darkestLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([1, 1, 1]),
            avgShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([0, 0, 0]),
            lightestShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([0, 0, 0]),
            darkestShadowColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([1, 1, 1]),
        };
        var size = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize;
        if (this.pixels === undefined) {
            this.pixels = new Float32Array(size * size * 4);
        }
        // TODO handle case when the text type is UNSIGNED_BYTE
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].readPixels(0, 0, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uTextureSize, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, this.pixels);
        var numLightPixels = 0;
        var numShadowPixels = 0;
        for (var row = 0; row < size; row++) {
            for (var col = 0; col < size; col++) {
                var index = (row * size + col) * 4;
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
                var color = new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([r, g, b]);
                if (a == _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBALL_LIGHT) {
                    numLightPixels++;
                    if (data.lightestLightColor == null) {
                        data.lightestLightColor = color;
                    }
                    if (data.darkestLightColor == null) {
                        data.darkestLightColor = color;
                    }
                    data.lightestLightColor = _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"].lightest(data.lightestLightColor, color);
                    data.darkestLightColor = _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"].darkest(data.darkestLightColor, color);
                    data.avgLightColor.r += color.r;
                    data.avgLightColor.b += color.b;
                    data.avgLightColor.g += color.g;
                }
                else if (a == _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBALL_SHADOW) {
                    numShadowPixels++;
                    if (data.lightestShadowColor == null) {
                        data.lightestShadowColor = color;
                    }
                    if (data.darkestShadowColor == null) {
                        data.darkestShadowColor = color;
                    }
                    data.lightestShadowColor = _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"].lightest(data.lightestShadowColor, color);
                    data.darkestShadowColor = _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"].darkest(data.darkestShadowColor, color);
                    data.avgShadowColor.r += color.r;
                    data.avgShadowColor.b += color.b;
                    data.avgShadowColor.g += color.g;
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
        return data;
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
        for (var i = 0; i < this.smallViews.length; i++) {
            ToScreenUniforms.uXOffset = 1.0 - (this.smallViews.length - i - 0.5) * (2 * ToScreenUniforms.uScale);
            ToScreenUniforms.uYOffset = 1.0 - ToScreenUniforms.uScale;
            ToScreenUniforms.uMode = this.smallViews[i];
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.renderProgram, ToScreenUniforms);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        }
    };
    PathTracer.prototype.swap = function (pos) {
        this.smallViews = [
            RenderMode.Artist,
            RenderMode.Chroma,
            RenderMode.Bands,
            RenderMode.Value,
        ];
        this.mainView = this.smallViews[pos];
        this.smallViews[pos] = RenderMode.Science;
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
    uBALL_SPECULAR: 1002,
    uBALL_LIGHT: 1001,
    uBALL_SHADOW: 1000,
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
        var label = document.createElement('label');
        label.id = setup.id + 'Label';
        label.className = 'SliderLabel';
        label.innerText = setup.label;
        parent.appendChild(label);
        this._range = document.createElement('input');
        this._range.type = 'range';
        this._range.id = setup.id + 'Range';
        this._range.className = 'SliderRange';
        this._range.min = setup.min.toString();
        this._range.max = setup.max.toString();
        this._range.value = setup.value.toString();
        this._range.addEventListener('input', function () { return _this.updateSpanColor(); });
        parent.appendChild(this._range);
        this._colorSpan = document.createElement('span');
        this._colorSpan.id = setup.id + 'ColorSpan';
        this._colorSpan.className = 'SliderColorSpan';
        parent.appendChild(this._colorSpan);
        this._valueSpan = document.createElement('span');
        this._valueSpan.id = setup.id + 'ValueSpan';
        this._valueSpan.className = 'SliderValueSpan';
        //      this._valueSpan.innerText = setup.value.toString();
        parent.appendChild(this._valueSpan);
        // set the initial color
        this.colors = setup.colors;
        this._range.oninput = setup.oninput;
    }
    /**
     * Sets the span color to the currently selected color.
     */
    Slider.prototype.updateSpanColor = function () {
        var val = (this.value - this.min) / (this.max - this.min);
        var color = _htmlColor__WEBPACK_IMPORTED_MODULE_0__["htmlColor"].fromColor(this._colors.get(val));
        this._colorSpan.style.backgroundColor = color.toHex();
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
                gradientStr += ', ' + colors[i].toHex();
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
            var val = (this.value - this.min) / (this.max - this.min);
            return this._colors.get(val);
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
            var val = (this.value - this.min) / (this.max - this.min);
            return this._colors.get(val).toGlColor();
        },
        enumerable: true,
        configurable: true
    });
    return Slider;
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
        this.setDescription();
    }
    /**
     * Processes a click/touch event at the designated coordinates. If a hit
     * occurs, the clicked on view is swapped for the primary view and true
     * is returned. If no hit occurs, false is returned.
     *
     * @param x The x coordinate.
     * @param y The y coordinate.
     * @returns true if a hit on one of the views occurs.
     */
    App.prototype.click = function (x, y) {
        // TODO handle this within the PathTracer class so that we don't have to hard code view stuff
        var size = _index__WEBPACK_IMPORTED_MODULE_4__["canvas"].width / 4;
        if (y < size) {
            if (x > _index__WEBPACK_IMPORTED_MODULE_4__["canvas"].width - 1 * size) {
                this.swap(3);
                this.setDescription();
                return true;
            }
            else if (x > _index__WEBPACK_IMPORTED_MODULE_4__["canvas"].width - 2 * size) {
                this.swap(2);
                this.setDescription();
                return true;
            }
            else if (x > _index__WEBPACK_IMPORTED_MODULE_4__["canvas"].width - 3 * size) {
                this.swap(1);
                this.setDescription();
                return true;
            }
            else if (x > _index__WEBPACK_IMPORTED_MODULE_4__["canvas"].width - 4 * size) {
                this.swap(0);
                this.setDescription();
                return true;
            }
        }
        return false;
    };
    App.prototype.setDescription = function () {
        var description = document.getElementById('description');
        switch (this.tracer.renderMode) {
            case _PathTracer__WEBPACK_IMPORTED_MODULE_2__["RenderMode"].Science:
                description.innerText = "This view displays the numerically computed colors.";
                break;
            case _PathTracer__WEBPACK_IMPORTED_MODULE_2__["RenderMode"].Artist:
                description.innerText = "This view displays the artist adjusted colors.";
                break;
            case _PathTracer__WEBPACK_IMPORTED_MODULE_2__["RenderMode"].Chroma:
                description.innerText = "This view displays the chroma on the ball. Red=highest chroma.";
                break;
            case _PathTracer__WEBPACK_IMPORTED_MODULE_2__["RenderMode"].Value:
                description.innerText = "This view displays the ball using values only.";
                break;
            case _PathTracer__WEBPACK_IMPORTED_MODULE_2__["RenderMode"].Bands:
                description.innerText = "This view displays the ball rendered with limited colors.";
                break;
        }
    };
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
        var timeSinceStart = ((new Date()).getTime() - this.start) * 0.001;
        if (this.count < 1000) {
            this.count++;
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
     * Creates an glColor object using values in a Color object.
     *
     * @param color A generic Color object.
     */
    glColor.fromColor = function (color) {
        var r = glColor.clamp(color.r);
        var g = glColor.clamp(color.g);
        var b = glColor.clamp(color.b);
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
     * Clamps a number between 0 and 1.
     *
     * @param val The value.
     * @returns The clamped value
     */
    glColor.clamp = function (val) {
        if (val < 0) {
            return 0;
        }
        else if (val > 1) {
            return 1;
        }
        else {
            return val;
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: gl, canvas, angleX, angleY, zoomZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleX", function() { return angleX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleY", function() { return angleY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomZ", function() { return zoomZ; });
/* harmony import */ var _Shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shaders */ "./src/Shaders.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glColorWithTemperature */ "./src/glColorWithTemperature.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _PathTracer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PathTracer */ "./src/PathTracer.ts");
/* harmony import */ var _hsvColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hsvColor */ "./src/hsvColor.ts");








var app;
var gl = null;
var canvas;
var angleX = 0;
var angleY = 0;
var zoomZ = 3.0;
var skinTones = [
    new _htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"]([240, 223, 214]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"]([255, 218, 200]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"]([232, 179, 117]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"]([190, 136, 87]),
    //   new htmlColor([115, 91, 59]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"]([139, 73, 65])
    //   new htmlColor([132, 55, 34]),
    //new htmlColor([61, 12, 2]),
    //   new htmlColor([38, 7, 1])
];
function component() {
    var div = document.createElement('div');
    var container = document.createElement('div');
    container.className = 'container';
    div.appendChild(container);
    var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    container.appendChild(canvas);
    var description = document.createElement('div');
    description.id = 'description';
    container.appendChild(description);
    div.appendChild(document.createElement('br'));
    var intensitySlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
        id: 'LightIntensity',
        label: 'Light Intensity',
        min: 0,
        max: 100,
        value: _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uLightIntensity * 100,
        colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"].white],
        oninput: function () {
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uLightIntensity = intensitySlider.value / 100;
            app.restart();
        }
    });
    div.appendChild(document.createElement('br'));
    // build a range of colors
    var min = 2000;
    var max = 10000;
    var colors = [];
    for (var i = 0; i < 10; i++) {
        var temp = min + (i / 9) * (max - min);
        colors.push(_glColorWithTemperature__WEBPACK_IMPORTED_MODULE_4__["glColorWithTemperature"].create(temp).toHtmlColor());
    }
    var lightColorSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
        id: 'LightColor',
        label: 'Light Color',
        min: 2000,
        max: 10000,
        value: _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_4__["glColorWithTemperature"].daylight.temperature,
        colors: colors,
        oninput: setLightColor,
        getText: function (slider) { return slider.value.toFixed() + "K"; }
    });
    // apply the initial colors
    setLightColor();
    function setLightColor() {
        // update the colors for the intensity slider
        intensitySlider.colors = [_htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"].black, lightColorSlider.htmlColor];
        // use the value in rendering
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uLightColor = lightColorSlider.glColor;
        if (app) {
            app.restart();
        }
    }
    div.appendChild(document.createElement('br'));
    var ballColorSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
        id: 'BallColor',
        label: 'Ball Color',
        min: 0,
        max: 100,
        value: 50,
        colors: skinTones,
        oninput: function () {
            ballLightShiftSlider.colors = computeShiftColors(ballColorSlider.htmlColor, 180);
            ballShadowShiftSlider.colors = computeShiftColors(ballColorSlider.htmlColor, 180);
            ballLightChromaSlider.colors = computeChromaColors(ballLightShiftSlider.htmlColor);
            ballShadowChromaSlider.colors = computeChromaColors(ballShadowShiftSlider.htmlColor);
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBallColor = ballColorSlider.glColor;
            app.restart();
        }
    });
    // make sure gl matches the initial UI setting
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uBallColor = ballColorSlider.glColor;
    div.appendChild(document.createElement('br'));
    var ambientIntensitySlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](div, {
        id: 'AmbientIntensity',
        label: 'Ambient Light',
        min: 0,
        max: 100,
        value: _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uAmbientLightIntensity * 100,
        colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_3__["htmlColor"].white],
        oninput: function () {
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].uAmbientLightIntensity = ambientIntensitySlider.value / 100;
            app.restart();
        }
    });
    div.appendChild(document.createElement('br'));
    var groupDiv = document.createElement('div');
    groupDiv.className = "SliderGroup";
    var headerDiv = document.createElement('div');
    headerDiv.className = "SliderHeader";
    headerDiv.innerText = "Ball in Light";
    groupDiv.appendChild(headerDiv);
    div.appendChild(groupDiv);
    var ballLightChromaSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](groupDiv, {
        id: 'LightChroma',
        label: 'Chroma',
        min: 0,
        max: 200,
        value: 100,
        colors: computeChromaColors(ballColorSlider.htmlColor),
        oninput: function () {
            _PathTracer__WEBPACK_IMPORTED_MODULE_6__["ToScreenUniforms"].uBallLightChroma = ballLightChromaSlider.value / 100;
            app.restart();
        },
        getText: function (slider) { return slider.value.toFixed() + "%"; }
    });
    function computeChromaColors(baseColor) {
        var hsv = _hsvColor__WEBPACK_IMPORTED_MODULE_7__["hsvColor"].fromHtmlColor(baseColor);
        hsv = new _hsvColor__WEBPACK_IMPORTED_MODULE_7__["hsvColor"]([hsv.h, Math.min(hsv.s * 2, 1.0), hsv.v]);
        return [baseColor.toGray(), baseColor, hsv.toHtmlColor()];
    }
    groupDiv.appendChild(document.createElement('br'));
    var ballLightShiftSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](groupDiv, {
        id: 'BallLightShift',
        label: 'Temperature',
        min: -180,
        max: 180,
        value: 0,
        colors: computeShiftColors(ballColorSlider.htmlColor, 180),
        oninput: function () {
            ballLightChromaSlider.colors = computeChromaColors(ballLightShiftSlider.htmlColor);
            _PathTracer__WEBPACK_IMPORTED_MODULE_6__["ToScreenUniforms"].uBallLightShift = ballLightShiftSlider.value;
            app.restart();
        },
        getText: getTemperatureShiftText,
    });
    function computeShiftColors(baseColor, maxShift) {
        var hsv = _hsvColor__WEBPACK_IMPORTED_MODULE_7__["hsvColor"].fromHtmlColor(baseColor);
        var colors = [];
        var numSteps = 10;
        for (var i = 0; i < numSteps; i++) {
            var shift = (maxShift - (i / (numSteps - 1)) * (2 * maxShift)) / 360;
            var adjustment = 0;
            if (hsv.h + shift < 0) {
                adjustment = 1;
            }
            else if (hsv.h + shift > 1) {
                adjustment = -1;
            }
            colors.push((new _hsvColor__WEBPACK_IMPORTED_MODULE_7__["hsvColor"]([hsv.h + shift + adjustment, hsv.s, hsv.v])).toHtmlColor());
        }
        return colors;
    }
    var separator = document.createElement('div');
    separator.style.height = '2px';
    div.appendChild(separator);
    groupDiv = document.createElement('div');
    groupDiv.className = "SliderGroup";
    headerDiv = document.createElement('div');
    headerDiv.className = "SliderHeader";
    headerDiv.innerText = "Ball in Shadow";
    groupDiv.appendChild(headerDiv);
    div.appendChild(groupDiv);
    var ballShadowChromaSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](groupDiv, {
        id: 'ShadowChroma',
        label: 'Chroma',
        min: 0,
        max: 200,
        value: 100,
        colors: computeChromaColors(ballColorSlider.htmlColor),
        oninput: function () {
            ballShadowChromaSlider.colors = computeChromaColors(ballShadowShiftSlider.htmlColor);
            _PathTracer__WEBPACK_IMPORTED_MODULE_6__["ToScreenUniforms"].uBallShadowChroma = ballShadowChromaSlider.value / 100;
            app.restart();
        },
        getText: function (slider) { return slider.value.toFixed() + "%"; }
    });
    groupDiv.appendChild(document.createElement('br'));
    var ballShadowShiftSlider = new _Slider__WEBPACK_IMPORTED_MODULE_5__["Slider"](groupDiv, {
        id: 'BallShadowShift',
        label: 'Temperature',
        min: -180,
        max: 180,
        value: 0,
        colors: computeShiftColors(ballColorSlider.htmlColor, 180),
        oninput: function () {
            _PathTracer__WEBPACK_IMPORTED_MODULE_6__["ToScreenUniforms"].uBallShadowShift = ballShadowShiftSlider.value;
            app.restart();
        },
        getText: getTemperatureShiftText,
    });
    function getTemperatureShiftText(slider) {
        if (slider.value >= 0) {
            return '+' + slider.value.toFixed() + "º";
        }
        else {
            return slider.value.toFixed() + "º";
        }
    }
    return div;
}
document.body.appendChild(component());
var mouseDown = false;
var oldX;
var oldY;
window.onload = function () {
    canvas = document.getElementById('canvas');
    gl = canvas.getContext('webgl2');
    if (!gl) {
        gl = canvas.getContext('webgl');
    }
    if (!gl) {
        // TODO display a message about not being able to create a WebGL context
        console.log("Unable to get WebGL context");
    }
    else {
        app = new _app__WEBPACK_IMPORTED_MODULE_1__["App"]();
        canvas.ontouchstart = function (event) {
            event.preventDefault();
            if (event.touches.length === 1) {
                var x = event.touches[0].clientX;
                var y = event.touches[0].clientY;
                if (app.click(x, y)) {
                    return;
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
            app.click(event.x, event.y);
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
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\nvarying vec2 texCoord;\r\nuniform sampler2D uTexture;\r\nuniform int uMode;\r\nuniform float uMaxChroma;\r\nuniform float uBallLightChroma;\r\nuniform float uBallShadowChroma;\r\nuniform float uBallLightShift;\r\nuniform float uBallShadowShift;\r\nuniform vec3 uHighlightColor;\r\nuniform vec3 uLightLightColor;\r\nuniform vec3 uMidLightColor;\r\nuniform vec3 uDarkLightColor;\r\nuniform vec3 uLightestShadowColor;\r\nuniform vec3 uDarkestShadowColor;\r\nuniform vec3 uAvgShadowColor;\r\nuniform float uBALL_SPECULAR;\r\nuniform float uBALL_LIGHT;\r\nuniform float uBALL_SHADOW;\r\n\r\n#define MODE_SCIENCE 0\r\n#define MODE_VALUE 1\r\n#define MODE_CHROMA 2\r\n#define MODE_ARTIST 3\r\n#define MODE_BANDS 4\r\n\r\nvec4 white = vec4(1.0, 1.0, 1.0, 1.0);\r\nvec4 red = vec4(1.0, 0.0, 0.0, 1.0);\r\nvec4 orange = vec4(1.0, 0.65, 0.0, 1.0);\r\nvec4 yellow = vec4(1.0, 1.0, 0.0, 1.0);\r\nvec4 green = vec4(0.0, 1.0, 0.0, 1.0);\r\nvec4 cyan = vec4(0.0, 1.0, 1.0, 1.0);\r\nvec4 blue = vec4(0.0, 0.0, 1.0, 1.0);\r\nvec4 black = vec4(0.0, 0.0, 0.0, 1.0);\r\n#define NUM_COLORS 6\r\nvec4 colors[NUM_COLORS];\r\n\r\nvec4 value2Color(float value)\r\n{\r\n   float span = 1.0 / float(NUM_COLORS - 1);\r\n   value *= float(NUM_COLORS - 1);\r\n   if (value < 0.0)\r\n   {\r\n      return colors[0];\r\n   }\r\n   else if (value < 1.0)\r\n   {\r\n      return colors[0] + value * (colors[1] - colors[0]);\r\n   }\r\n   else if (value < 2.0)\r\n   {\r\n      return colors[1] + (value - 1.0) * (colors[2] - colors[1]);\r\n   }\r\n   else if (value < 3.0)\r\n   {\r\n      return colors[2] + (value - 2.0) * (colors[3] - colors[2]);\r\n   }\r\n   else if (value < 4.0)\r\n   {\r\n      return colors[3] + (value - 3.0) * (colors[4] - colors[3]);\r\n   }\r\n   else if (value < 5.0)\r\n   {\r\n      return colors[4] + (value - 4.0) * (colors[5] - colors[4]);\r\n   }\r\n   /*\r\n   else if (value < 6.0)\r\n   {\r\n      return colors[5] + (value - 5.0) * (colors[6] - colors[5]);\r\n   }\r\n   */\r\n   else\r\n   {\r\n      return colors[NUM_COLORS - 1];\r\n   }\r\n}\r\n\r\n// All components are in the range [0…1], including hue.\r\nvec4 rgb2hsv(vec4 c)\r\n{\r\n   vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\r\n   vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\r\n   vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\r\n\r\n   float d = q.x - min(q.w, q.y);\r\n   float e = 1.0e-10;\r\n   return vec4(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x, c.a);\r\n}\r\n\r\n// All components are in the range[0…1], including hue.\r\nvec4 hsv2rgb(vec4 c)\r\n{\r\n   vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r\n   vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r\n   return vec4(c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y), c.a);\r\n}\r\n\r\nfloat toGray(vec4 c)\r\n{\r\n   // lots of ways to convert RGB to gray scale.\r\n\r\n   // simple averaging method\r\n   // return (c.r + c.g + c.b) / 3.0;\r\n\r\n   // relative perceptual values\r\n   // return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\r\n\r\n   // luminosity measure\r\n   float gamma = 2.2;\r\n   float y = 0.2126 * pow(c.r, gamma) + 0.7152 * pow(c.g, gamma) + .0722 * pow(c.b, gamma);\r\n   float l = 116.0 * pow(y, 1.0 / 3.0) - 16.0;\r\n   return l / 100.0;\r\n}\r\n\r\nvec4 renderAsValue()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n   float rgb = toGray(color);\r\n   return vec4(rgb, rgb, rgb, 1.0);\r\n}\r\n\r\nvec4 renderAsChroma()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n\r\n   // render the scale as a bar on the left\r\n   if (texCoord.x < 0.03)\r\n   {\r\n      return value2Color((texCoord.y - 0.1) / 0.9);\r\n   }\r\n   else\r\n   {\r\n      if (color.a >= uBALL_SHADOW)\r\n      {\r\n         float avg = (color.r + color.g + color.b) / 3.0;\r\n         float rgb = (abs(avg - color.r) + abs(avg - color.g) + abs(avg - color.b)) / (4.0 / 3.0);\r\n         return value2Color(rgb / uMaxChroma);\r\n      }\r\n      else\r\n      {\r\n         return vec4(0.0, 0.0, 0.0, 1.0);\r\n      }\r\n   }\r\n}\r\n\r\nfloat d2(vec3 c1, vec3 c2)\r\n{\r\n   // sum the squares of the differences\r\n   return pow(c1.r - c2.r, 2.0) + pow(c1.g - c2.g, 2.0) + pow(c1.b - c2.b, 2.0);\r\n}\r\n\r\nvec3 closest(vec3 color, vec3 high, vec3 light, vec3 mid, vec3 dark)\r\n{\r\n   float dhigh = d2(color, high);\r\n   float dlight = d2(color, light);\r\n   float dmid = d2(color, mid);\r\n   float ddark = d2(color, dark);\r\n\r\n   float dmin = min(dhigh, min(dlight, min(dmid, ddark)));\r\n   if (dmin == dhigh)\r\n   {\r\n      return high;\r\n   }\r\n   else if (dmin == dlight)\r\n   {\r\n      return light;\r\n   }\r\n   else if (dmin == dmid)\r\n   {\r\n      return mid;\r\n   }\r\n   else\r\n   {\r\n      return dark;\r\n   }\r\n}\r\n\r\nvec4 renderAsBands()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n\r\n   if (color.a > 1.0 && color.a <= (uBALL_SHADOW + uBALL_LIGHT) / 2.0)\r\n   {\r\n      return vec4(uAvgShadowColor, 1.0);\r\n   }\r\n   else if (color.a > (uBALL_SHADOW + uBALL_LIGHT) / 2.0)\r\n   {\r\n      vec3 c =\r\n          closest(color.rgb, uHighlightColor, uLightLightColor, uMidLightColor, uDarkLightColor);\r\n      return vec4(c, 1.0);\r\n   }\r\n   else\r\n   {\r\n      return color;\r\n   }\r\n}\r\n\r\nvec4 shiftTemperature(vec4 rgb, float deg)\r\n{\r\n   vec4 hsv = rgb2hsv(rgb);\r\n   hsv.x += deg / 360.0;\r\n   return hsv2rgb(hsv);\r\n}\r\n\r\nvec4 renderAsArtist()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n\r\n   if (color.a >= 1.0)\r\n   {\r\n      float percentLight = clamp(uBALL_LIGHT - color.a, 0.0, 1.0);\r\n      float percentShadow = 1.0 - percentLight;\r\n\r\n      // temperature shift\r\n      vec4 rgblight = shiftTemperature(color, -uBallLightShift);\r\n      vec4 rgbshadow = shiftTemperature(color, -uBallShadowShift);\r\n      vec4 rgbmix = mix(rgblight, rgbshadow, percentShadow);\r\n      vec4 hsv = rgb2hsv(rgbmix);\r\n\r\n      // correct overflows\r\n      if (hsv.x > 1.0)\r\n      {\r\n         hsv.x -= 1.0;\r\n      }\r\n      else if (hsv.x < 0.0)\r\n      {\r\n         hsv.x += 1.0;\r\n      }\r\n\r\n      // chroma shift\r\n      hsv.y *= (percentLight * uBallLightChroma + percentShadow * uBallShadowChroma);\r\n      hsv.y = clamp(hsv.y, 0.0, 1.0);\r\n\r\n      // adjust light/dark value to match the old value in rgb space\r\n      float origValue = toGray(color);\r\n      float newValue = toGray(hsv2rgb(hsv));\r\n      for (int i = 0; i < 1000; i++)\r\n      {\r\n         if (abs(origValue - newValue) < 0.01)\r\n         {\r\n            break;\r\n         }\r\n         else\r\n         {\r\n            hsv.z += (origValue - newValue) / 10.0;\r\n            newValue = toGray(hsv2rgb(hsv));\r\n         }\r\n      }\r\n\r\n      // convert back to rgb\r\n      return hsv2rgb(hsv);\r\n   }\r\n   else\r\n   {\r\n      return color;\r\n   }\r\n}\r\n\r\nvec4 renderAsScience()\r\n{\r\n   // just return the texture\r\n   return texture2D(uTexture, texCoord);\r\n}\r\n\r\nvoid main()\r\n{\r\n   colors[0] = black;\r\n   colors[1] = blue;\r\n   colors[2] = green;\r\n   colors[3] = yellow;\r\n   colors[4] = orange;\r\n   colors[5] = red;\r\n\r\n   if (uMode == MODE_VALUE)\r\n   {\r\n      gl_FragColor = renderAsValue();\r\n   }\r\n   else if (uMode == MODE_CHROMA)\r\n   {\r\n      gl_FragColor = renderAsChroma();\r\n   }\r\n   else if (uMode == MODE_ARTIST)\r\n   {\r\n      gl_FragColor = renderAsArtist();\r\n   }\r\n   else if (uMode == MODE_BANDS)\r\n   {\r\n      gl_FragColor = renderAsBands();\r\n   }\r\n   else\r\n   {\r\n      gl_FragColor = renderAsScience();\r\n   }\r\n}\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\nuniform vec3 uEye;\r\nvarying vec3 initialRay;\r\nuniform float uTextureWeight;\r\nuniform float uTextureSize;\r\nuniform float uTimeSinceStart;\r\nuniform sampler2D uTexture;\r\nuniform vec3 uLightPos;\r\nuniform float uLightIntensity;\r\nuniform vec3 uLightColor;\r\nuniform float uAmbientLightIntensity;\r\nuniform vec3 uBallColor;\r\nuniform float uPass;\r\nuniform float uNumPasses;\r\nuniform float uSample;\r\nuniform float uBALL_SPECULAR;\r\nuniform float uBALL_LIGHT;\r\nuniform float uBALL_SHADOW;\r\n\r\nconst int MAX_BOUNCES = 100;\r\nconst float EPSILON = 0.0001;\r\nconst float INFINITY = 10000.0;\r\nconst float LIGHT_SIZE = 0.1;\r\nconst vec3 BALL_CENTER = vec3(0, -0.5, 0);\r\nconst float BALL_RADIUS = 0.5;\r\nconst vec3 DOME_CENTER = vec3(0, 0, 0);\r\nconst float DOME_RADIUS = 7.0;\r\nconst float VAL = 0.8;\r\nconst vec3 DOME_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 FLOOR_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 AMBIENT_COLOR = vec3(1.0, 1.0, 1.0);\r\nconst int NUM_LIGHTS = 6;\r\nconst float HEIGHT = 4.0;\r\nconst float RADIUS = 4.0;\r\nconst float PI = 3.14159265;\r\n\r\nstruct Light\r\n{\r\n   float intensity;\r\n   float size;\r\n   vec3 pos;\r\n   vec3 color;\r\n};\r\n\r\nLight Lights[NUM_LIGHTS];\r\n\r\nfloat intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   vec3 toSphere = origin - sphereCenter;\r\n   float a = dot(ray, ray);\r\n   float b = 2.0 * dot(toSphere, ray);\r\n   float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;\r\n   float discriminant = b * b - 4.0 * a * c;\r\n   if (discriminant > 0.0)\r\n   {\r\n      float t1 = (-b - sqrt(discriminant)) / (2.0 * a);\r\n      float t2 = (-b + sqrt(discriminant)) / (2.0 * a);\r\n      if (t1 > 0.0)\r\n      {\r\n         return t1;\r\n      }\r\n      else if (t2 > 0.0)\r\n      {\r\n         return t2;\r\n      }\r\n   }\r\n   return INFINITY;\r\n}\r\n\r\nvec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   return (hit - sphereCenter) / sphereRadius;\r\n}\r\n\r\nfloat random(vec3 scale, float seed)\r\n{\r\n   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\r\n}\r\n\r\nvec3 cosineWeightedDirection(float seed, vec3 normal)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float r = sqrt(u);\r\n   float angle = 6.283185307179586 * v;\r\n   // compute basis from normal\r\n   vec3 sdir, tdir;\r\n   if (abs(normal.x) < .5)\r\n   {\r\n      sdir = cross(normal, vec3(1, 0, 0));\r\n   }\r\n   else\r\n   {\r\n      sdir = cross(normal, vec3(0, 1, 0));\r\n   }\r\n   tdir = cross(normal, sdir);\r\n   return r * cos(angle) * sdir + r * sin(angle) * tdir + sqrt(1. - u) * normal;\r\n}\r\n\r\nvec3 uniformlyRandomDirection(float seed)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float z = 1.0 - 2.0 * u;\r\n   float r = sqrt(1.0 - z * z);\r\n   float angle = 6.283185307179586 * v;\r\n   return vec3(r * cos(angle), r * sin(angle), z);\r\n}\r\n\r\nvec3 uniformlyRandomVector(float seed)\r\n{\r\n   return uniformlyRandomDirection(seed) * sqrt(random(vec3(36.7539, 50.3658, 306.2759), seed));\r\n}\r\n\r\nbool inShadow(vec3 origin, vec3 ray)\r\n{\r\n   float tBall = intersectSphere(origin, ray, BALL_CENTER, BALL_RADIUS);\r\n   if (tBall < 1.0)\r\n   {\r\n      return true;\r\n   }\r\n   else\r\n   {\r\n      return false;\r\n   }\r\n}\r\n\r\nvec4 calculateColor(vec3 origin, vec3 ray)\r\n{\r\n   vec3 accumulatedColor = vec3(0.0);\r\n   vec3 colorMask = vec3(1.0);\r\n   vec3 eye = origin;\r\n   bool ballHit = false;\r\n   bool ballShadow = false;\r\n\r\n   // main raytracing loop\r\n   for (int bounce = 0; bounce < MAX_BOUNCES; bounce++)\r\n   {\r\n      // compute the intersection with everything\r\n      float tBall = intersectSphere(origin, ray, BALL_CENTER, BALL_RADIUS);\r\n      vec3 surfaceColor = vec3(0.5, 0.5, 0.5);\r\n\r\n      if (bounce == 0)\r\n      {\r\n         // if the first ray hits the light, return the light color. This\r\n         // simulates displaying the light\r\n         for (int i = 0; i < NUM_LIGHTS; i++)\r\n         {\r\n            if (intersectSphere(origin, ray, Lights[i].pos, Lights[i].size) < tBall)\r\n            {\r\n               return vec4(Lights[i].intensity * Lights[i].color, 1.0);\r\n            }\r\n         }\r\n      }\r\n\r\n      float tDome = intersectSphere(origin, ray, DOME_CENTER, DOME_RADIUS);\r\n\r\n      // find the closest intersection\r\n      float t = INFINITY;\r\n      float tfloor = INFINITY;\r\n\r\n      // check for intersection with the ground\r\n      if (ray.y < 0.0)\r\n      {\r\n         // distance to floor = num unit vectors required to reach the floor\r\n         tfloor = -(origin.y + 1.0) / ray.y;\r\n         if (tfloor < t)\r\n         {\r\n            t = tfloor;\r\n         }\r\n\r\n         surfaceColor = FLOOR_COLOR;\r\n      }\r\n\r\n      if (tBall < t)\r\n      {\r\n         surfaceColor = vec3(uBallColor);\r\n         t = tBall;\r\n\r\n         if (bounce == 0)\r\n         {\r\n            ballHit = true;\r\n         }\r\n      }\r\n      else if (tDome < t)\r\n      {\r\n         surfaceColor = DOME_COLOR;\r\n         t = tDome;\r\n      }\r\n\r\n      // info about hit\r\n      vec3 hit = origin + ray * t;\r\n      vec3 normal;\r\n\r\n      // calculate the normal\r\n      if (t == tfloor)\r\n      {\r\n         normal = vec3(0.0, 1.0, 0.0);\r\n      }\r\n      else if (t == tBall)\r\n      {\r\n         normal = normalForSphere(hit, BALL_CENTER, BALL_RADIUS);\r\n      }\r\n      else if (t == tDome)\r\n      {\r\n         normal = -normalForSphere(hit, DOME_CENTER, DOME_RADIUS);\r\n      }\r\n      else\r\n      {\r\n         break;\r\n      }\r\n\r\n      colorMask *= surfaceColor;\r\n\r\n      if (length(colorMask) < 0.01)\r\n      {\r\n         break;\r\n      }\r\n\r\n      for (int i = 0; i < NUM_LIGHTS; i++)\r\n      {\r\n         // compute diffuse lighting contribution\r\n         vec3 toLight = Lights[i].pos - hit;\r\n\r\n         // trace a shadow ray to the light\r\n         if (inShadow(hit + normal * EPSILON, toLight) == false)\r\n         {\r\n            // diffuse component\r\n            float diffuse = max(0.0, dot(normalize(toLight), normal));\r\n\r\n            // specular component\r\n            vec3 toEye = eye - hit;\r\n            vec3 n2l = normalize(toLight);\r\n            vec3 n2e = normalize(toEye);\r\n            vec3 bisector = (n2l + n2e) / length(n2l + n2e);\r\n            float specularCoefficient = 0.5;\r\n            float shininess = 100.0;\r\n            float specular = specularCoefficient * pow(max(0.0, dot(bisector, normal)), shininess);\r\n\r\n            // apply light fall off as distance squares. Use a min value for the\r\n            // light size otherwise falloff is too rapid\r\n            float radius = max(0.75, Lights[i].size);\r\n            float dist = max(1.0, (length(toLight) - radius) / radius);\r\n            float lightIntensity = Lights[i].intensity / (dist * dist);\r\n\r\n            accumulatedColor += colorMask * Lights[i].color * lightIntensity * diffuse;\r\n\r\n            // TODO define a color mask for specular reflection\r\n            //            accumulatedColor += mix(surfaceColor, Lights[i].color, 0.8) *\r\n            //            lightIntensity * specular;\r\n            accumulatedColor +=\r\n                (length(surfaceColor) * Lights[i].color) * lightIntensity * specular;\r\n         }\r\n         else if (bounce == 0 && i == 0)\r\n         {\r\n            ballShadow = true;\r\n         }\r\n      }\r\n\r\n      // calculate next origin\r\n      ray = cosineWeightedDirection(uTimeSinceStart + float(bounce), normal);\r\n\r\n      origin = hit;\r\n   }\r\n\r\n   float alpha = 1.0;\r\n   if (ballHit)\r\n   {\r\n      if (ballShadow)\r\n      {\r\n         alpha = uBALL_SHADOW;\r\n      }\r\n      else\r\n      {\r\n         alpha = uBALL_LIGHT;\r\n      }\r\n   }\r\n   return vec4(clamp(accumulatedColor, 0.0, 1.0), alpha);\r\n}\r\n\r\nvoid main()\r\n{\r\n   if (floor(mod(gl_FragCoord.x, uNumPasses)) != uPass)\r\n   {\r\n      if (uSample == 0.0 && uPass == 0.0)\r\n      {\r\n         gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r\n      }\r\n      else\r\n      {\r\n         gl_FragColor = texture2D(uTexture, gl_FragCoord.xy / uTextureSize);\r\n      }\r\n      return;\r\n   }\r\n\r\n   //   vec3 rand = uniformlyRandomVector(uTimeSinceStart) * LIGHT_SIZE;\r\n   vec3 rand = uniformlyRandomVector(uSample) * LIGHT_SIZE;\r\n\r\n   Lights[0].intensity = uLightIntensity;\r\n   Lights[0].size = LIGHT_SIZE;\r\n   Lights[0].pos = uLightPos + rand;\r\n   Lights[0].color = uLightColor;\r\n\r\n   for (int i = 1; i < NUM_LIGHTS; i++)\r\n   {\r\n      float x = RADIUS * sin(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + rand.x;\r\n      float y = HEIGHT + rand.y;\r\n      float z = RADIUS * cos(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + rand.z;\r\n\r\n      Lights[i].intensity = uAmbientLightIntensity;\r\n      Lights[i].size = 2.0 * LIGHT_SIZE;\r\n      Lights[i].pos = vec3(x, y, z);\r\n      Lights[i].color = AMBIENT_COLOR;\r\n   }\r\n\r\n   // merge the new color into the existing texture\r\n   vec4 textureColor = texture2D(uTexture, gl_FragCoord.xy / uTextureSize);\r\n   vec4 newColor = calculateColor(uEye, initialRay);\r\n   gl_FragColor = mix(newColor, textureColor, uTextureWeight);\r\n}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9Db2xvclJhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9TaGFkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xNYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVmVjLnRzIiwid2VicGFjazovLy8uL3NyYy9oc3ZDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovLy8uL3NyYy90b1NjcmVlbkZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvU2NyZWVuVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvVGV4dHVyZUZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvVGV4dHVyZVZlcnRleC5nbHNsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUVHO0lBQ1ksNkJBQU0sR0FBNkI7UUFDL0MsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ2xFLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdB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RUQsT0FBTyxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBTSxHQUFiO1FBRUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvRixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQyw0QkFBNEI7UUFDNUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEYsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7UUFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdB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Qyx1QkFBdUIsK0NBQStDLCtCQUErQixjQUFjLFdBQVcsd0NBQXdDLHVDQUF1Qyx1QkFBdUIsV0FBVyxxRUFBcUUsc0JBQXNCLDBFQUEwRSwwQ0FBMEMsV0FBVyx5Q0FBeUMscUVBQXFFLFdBQVcseUNBQXlDLHNFQUFzRSxXQUFXLHlCQUF5QixtQkFBbUIsV0FBVyx3Q0FBd0Msc0RBQXNELG1CQUFtQixXQUFXLDZCQUE2QixnQkFBZ0IsZ0JBQWdCLHFHQUFxRyxxSUFBcUksOEdBQThHLGdGQUFnRiw4Q0FBOEMsNENBQTRDLGdFQUFnRSxnREFBZ0Qsd0NBQXdDLHVHQUF1Ryw2TUFBNk0sMkVBQTJFLDJFQUEyRSwrRkFBK0YsME5BQTBOLDRIQUE0SCxjQUFjLDBEQUEwRCxrQ0FBa0MsY0FBYyxXQUFXLHVIQUF1SCwyQkFBMkIsUUFBUSw2QkFBNkIsMkJBQTJCLG9DQUFvQyxrQ0FBa0MsV0FBVyx5QkFBeUIsaUNBQWlDLFdBQVcsUUFBUSw2REFBNkQsS0FBSyx3QkFBd0IsbUVBQW1FLHdEQUF3RCxxREFBcUQsV0FBVyx5QkFBeUIsZ0ZBQWdGLFdBQVcsaUJBQWlCLFFBQVEsZ0ZBQWdGLCtEQUErRCxpREFBaUQsbUNBQW1DLHdDQUF3QyxxQ0FBcUMsMEJBQTBCLGdCQUFnQixhQUFhLDJGQUEyRixvQ0FBb0MsMkZBQTJGLDJEQUEyRCw0Q0FBNEMsd0NBQXdDLDBDQUEwQyxRQUFRLDBJQUEwSSx3REFBd0Qsa0VBQWtFLEtBQUssQzs7Ozs7Ozs7Ozs7O0FDQTkzUztBQUFlLHNGQUF1QixzREFBc0QsNEJBQTRCLHdCQUF3Qiw0Q0FBNEMsbUdBQW1HLHVDQUF1QyxLQUFLLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJHcm91cCB7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVySGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2Uge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XFxyXFxuICBib3JkZXI6IGdyYXk7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JlZW4sIGRhcmtncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyZWVuLCBkYXJrZ3JlZW4pO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IGdyYXk7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5TbGlkZXJIZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyTGFiZWwge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclZhbHVlU3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcclxuLyoqXHJcbiAqIENsYXNzIGZvciByZXByZXNlbnRpbmcgY29sb3IgdmFsdWVzLiBWYWx1ZXMgbWF5IGJlIG9uIGEgMC0xIG9yIDAtMjU1IHNjYWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICAgcHVibGljIHI6IG51bWJlcjtcclxuICAgcHVibGljIGc6IG51bWJlcjtcclxuICAgcHVibGljIGI6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgUkdCIHZhbHVlcyB0byBzdG9yZSBpbiB0aGlzIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG4gICAgICB0aGlzLnIgPSBjb2xvclswXTtcclxuICAgICAgdGhpcy5nID0gY29sb3JbMV07XHJcbiAgICAgIHRoaXMuYiA9IGNvbG9yWzJdO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcnBvbGF0ZXMgYW5kIGFycmF5IG9mIGNvbG9yc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yUmFuZ2Uge1xyXG4gICAvKipcclxuICAgICogVGhlIGNvbG9yc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb2xvcnM6IGh0bWxDb2xvcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3JzIFRoZSBjb2xvcnMgdG8gaW50ZXJwb2xhdGVcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcnM6IGh0bWxDb2xvcltdKSB7XHJcbiAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhbiBpbnRlcnBvbGF0ZWQgY29sb3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsdWUgQSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KHZhbHVlOiBudW1iZXIpOiBodG1sQ29sb3Ige1xyXG5cclxuICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsdWUgPj0gMSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpICogdmFsdWUpO1xyXG4gICAgICAgICBsZXQgcGFydGlhbCA9ICh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlIC0gaW5kZXg7XHJcblxyXG4gICAgICAgICBsZXQgciA9IHRoaXMuY29sb3JzW2luZGV4XS5yICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLnIgLSB0aGlzLmNvbG9yc1tpbmRleF0ucik7XHJcbiAgICAgICAgIGxldCBnID0gdGhpcy5jb2xvcnNbaW5kZXhdLmcgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uZyAtIHRoaXMuY29sb3JzW2luZGV4XS5nKTtcclxuICAgICAgICAgbGV0IGIgPSB0aGlzLmNvbG9yc1tpbmRleF0uYiArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5iIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmIpO1xyXG5cclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJcclxuaW1wb3J0IHsgU2hhZGVycywgVW5pZm9ybXMgfSBmcm9tICcuL1NoYWRlcnMnO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tICcuL2dsTWF0JztcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB0b1NjcmVlblZlcnRleFNvdXJjZSBmcm9tICcuL3RvU2NyZWVuVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSBmcm9tICcuL3RvU2NyZWVuRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVWZXJ0ZXhTb3VyY2UgZnJvbSAnLi90b1RleHR1cmVWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSBmcm9tICcuL3RvVGV4dHVyZUZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSAnLi9nbENvbG9yJztcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gJy4vQ29sb3JSYW5nZSc7XHJcblxyXG4vKipcclxuICogUmVuZGVyaW5nIG1vZGUgZm9yIGRpc3BsYXlpbmcgdGhlIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlbmRlck1vZGUge1xyXG4gICBTY2llbmNlID0gMCxcclxuICAgVmFsdWUgPSAxLFxyXG4gICBDaHJvbWEgPSAyLFxyXG4gICBBcnRpc3QgPSAzLFxyXG4gICBCYW5kcyA9IDQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBmb3IgdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVRvU2NyZWVuVW5pZm9ybXMge1xyXG4gICB1U2NhbGU6IG51bWJlcjtcclxuICAgdVhPZmZzZXQ6IG51bWJlcjtcclxuICAgdVlPZmZzZXQ6IG51bWJlcjtcclxuICAgdU1vZGU6IFJlbmRlck1vZGU7XHJcbiAgIHVNYXhDaHJvbWE6IG51bWJlcjtcclxuICAgdUJhbGxMaWdodENocm9tYTogbnVtYmVyO1xyXG4gICB1QmFsbFNoYWRvd0Nocm9tYTogbnVtYmVyO1xyXG4gICB1QmFsbExpZ2h0U2hpZnQ6IG51bWJlcjtcclxuICAgdUJhbGxTaGFkb3dTaGlmdDogbnVtYmVyO1xyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVMaWdodExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVNaWRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya0xpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVMaWdodGVzdFNoYWRvd0NvbG9yOiBnbENvbG9yO1xyXG4gICB1RGFya2VzdFNoYWRvd0NvbG9yOiBnbENvbG9yO1xyXG4gICB1QXZnU2hhZG93Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVCQUxMX1NQRUNVTEFSOiBudW1iZXI7XHJcbiAgIHVCQUxMX0xJR0hUOiBudW1iZXI7XHJcbiAgIHVCQUxMX1NIQURPVzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsdWVzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgbGV0IFRvU2NyZWVuVW5pZm9ybXM6IElUb1NjcmVlblVuaWZvcm1zID0ge1xyXG4gICB1U2NhbGU6IDEuMCxcclxuICAgdVhPZmZzZXQ6IDAuMCxcclxuICAgdVlPZmZzZXQ6IDAuMCxcclxuICAgdU1vZGU6IDAsXHJcbiAgIHVNYXhDaHJvbWE6IDEuMCxcclxuICAgdUJhbGxMaWdodENocm9tYTogMS4wLFxyXG4gICB1QmFsbFNoYWRvd0Nocm9tYTogMS4wLFxyXG4gICB1QmFsbExpZ2h0U2hpZnQ6IDAuMCxcclxuICAgdUJhbGxTaGFkb3dTaGlmdDogMC4wLFxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1TWlkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0xpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUxpZ2h0ZXN0U2hhZG93Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdURhcmtlc3RTaGFkb3dDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1QXZnU2hhZG93Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUJBTExfU1BFQ1VMQVI6IFVuaWZvcm1zLnVCQUxMX1NQRUNVTEFSLFxyXG4gICB1QkFMTF9MSUdIVDogVW5pZm9ybXMudUJBTExfTElHSFQsXHJcbiAgIHVCQUxMX1NIQURPVzogVW5pZm9ybXMudUJBTExfU0hBRE9XLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVBpeGVsRGF0YSB7XHJcbiAgIG1heENocm9tYTogbnVtYmVyLFxyXG4gICBhdmdMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBsaWdodGVzdExpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGRhcmtlc3RMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBhdmdTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgZGFya2VzdFNoYWRvd0NvbG9yOiBnbENvbG9yLFxyXG59XHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGRvZXMgdGhlIHdvcmsgb2YgYnVpbGRpbmcgdGhlIFBhdGggVHJhY2VkIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyIHtcclxuXHJcbiAgIHByaXZhdGUgdmVydGV4QnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuXHJcbiAgIHByaXZhdGUgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XHJcbiAgIHByaXZhdGUgdGV4dHVyZXM6IFdlYkdMVGV4dHVyZVtdO1xyXG4gICBwcml2YXRlIHJlbmRlclByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSByZW5kZXJWZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB0cmFjZXJQcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdHJhY2VyVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgcGl4ZWxzOiBGbG9hdDMyQXJyYXk7XHJcblxyXG4gICBwcml2YXRlIG1haW5WaWV3ID0gUmVuZGVyTW9kZS5TY2llbmNlO1xyXG4gICBwcml2YXRlIHNtYWxsVmlld3MgPSBbXHJcbiAgICAgIFJlbmRlck1vZGUuQXJ0aXN0LFxyXG4gICAgICBSZW5kZXJNb2RlLkNocm9tYSxcclxuICAgICAgUmVuZGVyTW9kZS5CYW5kcyxcclxuICAgICAgUmVuZGVyTW9kZS5WYWx1ZSxcclxuICAgXTtcclxuXHJcbiAgIHByaXZhdGUgdmVydGljZXMgPSBbXHJcbiAgICAgIC0xLCAtMSxcclxuICAgICAgLTEsICsxLFxyXG4gICAgICArMSwgLTEsXHJcbiAgICAgICsxLCArMVxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAvLyBjcmVhdGUgdmVydGV4IGJ1ZmZlciAtIHRoZSBibG9jayB3ZSdsbCBkcmF3IG91ciByZW5kZXJlZCB0ZXh0dXJlIG9uXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgZnJhbWVidWZmZXJcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcblxyXG4gICAgICBsZXQgaW50ZXJuYWxGb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IGZvcm1hdDogbnVtYmVyO1xyXG4gICAgICBsZXQgdHlwZTogbnVtYmVyO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHR1cmVzXHJcbiAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICBsZXQgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0Jyk7XHJcbiAgICAgICAgIGlmIChleHQpIHtcclxuICAgICAgICAgICAgLy8gVGhhbmtzIEFwcGxlLiBBbHdheXMgZ290IHRvIGRvIHRoaW5ncyBhIGxpdHRsZSBkaWZmZXJlbnRseVxyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBleHQuSEFMRl9GTE9BVF9PRVM7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5vIGZsb2F0aW5nIHBvaW50IHRleHR1cmVzPyByZWFsbHkgZmFsbCBiYWNrIHRvIHVuc2lnbmVkIGJ5dGVzXHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGxldCB5b3UgZG8gYW4gJ2Vsc2UgaWYnIGhlcmUgYW5kIHdoZW4gV2ViR0wyIGlzXHJcbiAgICAgIC8vIG5vdCBzdXBwb3J0ZWQsIHdlIGdldCBhbiBleGNlcHRpb24sIHNvIHRodXMgdGhlIHRyeS1jYXRjaFxyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1MzgxMTIyL3R5cGVzY3JpcHQtdHlwZS1uYXJyb3dlZC10by1uZXZlci13aXRoLWluc3RhbmNlb2YtaW4tYW4taWYtZWxzZS1zdGF0ZW1lbnRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgaWYgKGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICAgICBnbC5nZXRFeHRlbnNpb24oJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnKTtcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBMzJGO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZ2wuRkxPQVRcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdHdvIHRleHR1cmVzLiBPbmUgd2UgZGlzcGxheSBhbmQgb25lIHdlIGRyYXcgdG9cclxuICAgICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goZ2wuY3JlYXRlVGV4dHVyZSgpKTtcclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1tpXSk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELCAgICAgICAgICAvLyB0YXJnZXRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gbGV2ZWxcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQsICAgICAgICAgLy8gaW50ZXJuYWwgZm9ybWF0XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIHdpZHRoXHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIGhlaWdodFxyXG4gICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXJcclxuICAgICAgICAgICAgZm9ybWF0LCAgICAgICAgICAgICAgICAgLy8gZm9ybWF0XHJcbiAgICAgICAgICAgIHR5cGUsICAgICAgICAgICAgICAgICAgIC8vIHR5cGVcclxuICAgICAgICAgICAgbnVsbCAgICAgICAgICAgICAgICAgICAgLy8gcGl4ZWxzXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgcmVuZGVyIHNoYWRlclxyXG4gICAgICB0aGlzLnJlbmRlclByb2dyYW0gPSBTaGFkZXJzLmNvbXBpbGVTaGFkZXIodG9TY3JlZW5WZXJ0ZXhTb3VyY2UsIHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucmVuZGVyUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICB0aGlzLnRyYWNlclByb2dyYW0gPSBTaGFkZXJzLmNvbXBpbGVTaGFkZXIodG9UZXh0dXJlVmVydGV4U291cmNlLCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSk7XHJcbiAgICAgIHRoaXMudHJhY2VyVmVydGV4QXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy50cmFjZXJQcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudHJhY2VyVmVydGV4QXR0cmlidXRlKTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyBnZXQgcmVuZGVyTW9kZSgpOiBSZW5kZXJNb2RlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpblZpZXc7XHJcbiAgIH1cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIFVuaWZvcm1zLnVTYW1wbGUgPSAwO1xyXG4gICAgICBVbmlmb3Jtcy51UGFzcyA9IDA7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGRhdGVUZXh0dXJlKG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NCwgdGltZVNpbmNlU3RhcnQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgLy8gaW1wbGVtZW50IGFsaWFzaW5nIGJ5IHJhbmRvbSBzYW1wbGluZyB3aXRoaW4gYSBwaXhlbFxyXG4gICAgICBsZXQgeCA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gVW5pZm9ybXMudVRleHR1cmVTaXplO1xyXG4gICAgICBsZXQgeSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gVW5pZm9ybXMudVRleHR1cmVTaXplO1xyXG4gICAgICBsZXQgeiA9IDA7XHJcblxyXG4gICAgICBsZXQgdiA9IG5ldyBnbFZlYzMoW3gsIHksIHpdKTtcclxuICAgICAgbGV0IGppdHRlciA9IGdsTWF0NC5mcm9tVHJhbnNsYXRpb24odik7XHJcbiAgICAgIGxldCBtYXRyaXggPSBqaXR0ZXIubXVsdE0obW9kZWx2aWV3UHJvamVjdGlvbikuaW52ZXJ0KCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy51UmF5MDAgPSBTaGFkZXJzLmdldEV5ZVJheShtYXRyaXgsIC0xLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMSA9IFNoYWRlcnMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsICsxKTtcclxuICAgICAgVW5pZm9ybXMudVJheTEwID0gU2hhZGVycy5nZXRFeWVSYXkobWF0cml4LCArMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTEgPSBTaGFkZXJzLmdldEV5ZVJheShtYXRyaXgsICsxLCArMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVUaW1lU2luY2VTdGFydCA9IHRpbWVTaW5jZVN0YXJ0O1xyXG4gICAgICBVbmlmb3Jtcy51VGV4dHVyZVdlaWdodCA9IFVuaWZvcm1zLnVTYW1wbGUgLyAoVW5pZm9ybXMudVNhbXBsZSArIDEpO1xyXG5cclxuICAgICAgLy8gc2V0IHVuaWZvcm1zXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy50cmFjZXJQcm9ncmFtKTtcclxuICAgICAgU2hhZGVycy5zZXRVbmlmb3Jtcyh0aGlzLnRyYWNlclByb2dyYW0sIFVuaWZvcm1zKTtcclxuXHJcbiAgICAgIC8vIHJlbmRlciB0byB0ZXh0dXJlXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgVW5pZm9ybXMudVRleHR1cmVTaXplKTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRyYWNlclByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLCAwKTtcclxuXHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50cmFjZXJWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldFBpeGVsRGF0YSgpO1xyXG4gICAgICBsZXQgY3IgPSBuZXcgQ29sb3JSYW5nZShbZGF0YS5kYXJrZXN0TGlnaHRDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmF2Z0xpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKV0pO1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVNYXhDaHJvbWEgPSBkYXRhLm1heENocm9tYTtcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51SGlnaGxpZ2h0Q29sb3IgPSBjci5nZXQoMS4wKS50b0dsQ29sb3IoKTtcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51TGlnaHRMaWdodENvbG9yID0gY3IuZ2V0KDAuOCkudG9HbENvbG9yKCk7XHJcbiAgICAgIFRvU2NyZWVuVW5pZm9ybXMudU1pZExpZ2h0Q29sb3IgPSBjci5nZXQoMC41KS50b0dsQ29sb3IoKTtcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51RGFya0xpZ2h0Q29sb3IgPSBjci5nZXQoMC4yKS50b0dsQ29sb3IoKTtcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51TGlnaHRlc3RTaGFkb3dDb2xvciA9IGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvcjtcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51RGFya2VzdFNoYWRvd0NvbG9yID0gZGF0YS5kYXJrZXN0U2hhZG93Q29sb3I7XHJcbiAgICAgIFRvU2NyZWVuVW5pZm9ybXMudUF2Z1NoYWRvd0NvbG9yID0gZGF0YS5hdmdTaGFkb3dDb2xvcjtcclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBwaW5nIHBvbmcgdGV4dHVyZXNcclxuICAgICAgdGhpcy50ZXh0dXJlcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy51UGFzcysrO1xyXG4gICAgICBpZiAoVW5pZm9ybXMudVBhc3MgPT0gVW5pZm9ybXMudU51bVBhc3Nlcykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51UGFzcyA9IDA7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVTYW1wbGUrKztcclxuICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgcHJpdmF0ZSBnZXRQaXhlbERhdGEoKTogSVBpeGVsRGF0YSB7XHJcblxyXG4gICAgICBsZXQgZGF0YTogSVBpeGVsRGF0YSA9IHtcclxuICAgICAgICAgbWF4Q2hyb21hOiAwLFxyXG4gICAgICAgICBhdmdMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBsaWdodGVzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGRhcmtlc3RMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pLFxyXG4gICAgICAgICBhdmdTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgZGFya2VzdFNoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pLFxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBpeGVscyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIHRoaXMucGl4ZWxzID0gbmV3IEZsb2F0MzJBcnJheShzaXplICogc2l6ZSAqIDQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPIGhhbmRsZSBjYXNlIHdoZW4gdGhlIHRleHQgdHlwZSBpcyBVTlNJR05FRF9CWVRFXHJcbiAgICAgIGdsLnJlYWRQaXhlbHMoMCwgMCwgVW5pZm9ybXMudVRleHR1cmVTaXplLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUsIGdsLlJHQkEsIGdsLkZMT0FULCB0aGlzLnBpeGVscyk7XHJcblxyXG4gICAgICBsZXQgbnVtTGlnaHRQaXhlbHMgPSAwO1xyXG4gICAgICBsZXQgbnVtU2hhZG93UGl4ZWxzID0gMDtcclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gKHJvdyAqIHNpemUgKyBjb2wpICogNDtcclxuICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDBdO1xyXG4gICAgICAgICAgICBsZXQgZyA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIGxldCBiID0gdGhpcy5waXhlbHNbaW5kZXggKyAyXTtcclxuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnBpeGVsc1tpbmRleCArIDNdO1xyXG5cclxuICAgICAgICAgICAgLy8gaWdub3JlIHZhbHVlcyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgYmFsbFxyXG4gICAgICAgICAgICBpZiAoYSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGF2ZyA9IChyICsgZyArIGIpIC8gMztcclxuICAgICAgICAgICAgbGV0IGNocm9tYSA9IChNYXRoLmFicyhyIC0gYXZnKSArIE1hdGguYWJzKGcgLSBhdmcpICsgTWF0aC5hYnMoYiAtIGF2ZykpIC8gKDQgLyAzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaHJvbWEgPiBkYXRhLm1heENocm9tYSkge1xyXG4gICAgICAgICAgICAgICBkYXRhLm1heENocm9tYSA9IGNocm9tYTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgICAgICAgaWYgKGEgPT0gVW5pZm9ybXMudUJBTExfTElHSFQpIHtcclxuICAgICAgICAgICAgICAgbnVtTGlnaHRQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgaWYgKGRhdGEubGlnaHRlc3RMaWdodENvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5saWdodGVzdExpZ2h0Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9IGdsQ29sb3IuZGFya2VzdChkYXRhLmRhcmtlc3RMaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5yICs9IGNvbG9yLnI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYSA9PSBVbmlmb3Jtcy51QkFMTF9TSEFET1cpIHtcclxuICAgICAgICAgICAgICAgbnVtU2hhZG93UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID0gZ2xDb2xvci5kYXJrZXN0KGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobnVtTGlnaHRQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5yIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bVNoYWRvd1BpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5yIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgIHZhciBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAgICAgbGV0IHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgaWYgKGlzTW9iaWxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnJlbmRlclByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIFRvU2NyZWVuVW5pZm9ybXMudVNjYWxlID0gMS4wO1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVYT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVZT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBUb1NjcmVlblVuaWZvcm1zLnVNb2RlID0gdGhpcy5tYWluVmlldztcclxuICAgICAgU2hhZGVycy5zZXRVbmlmb3Jtcyh0aGlzLnJlbmRlclByb2dyYW0sIFRvU2NyZWVuVW5pZm9ybXMpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIHNtYWxsZXIgdmlld3NcclxuICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51U2NhbGUgPSAwLjI1O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc21hbGxWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBUb1NjcmVlblVuaWZvcm1zLnVYT2Zmc2V0ID0gMS4wIC0gKHRoaXMuc21hbGxWaWV3cy5sZW5ndGggLSBpIC0gMC41KSAqICgyICogVG9TY3JlZW5Vbmlmb3Jtcy51U2NhbGUpO1xyXG4gICAgICAgICBUb1NjcmVlblVuaWZvcm1zLnVZT2Zmc2V0ID0gMS4wIC0gVG9TY3JlZW5Vbmlmb3Jtcy51U2NhbGU7XHJcbiAgICAgICAgIFRvU2NyZWVuVW5pZm9ybXMudU1vZGUgPSB0aGlzLnNtYWxsVmlld3NbaV07XHJcbiAgICAgICAgIFNoYWRlcnMuc2V0VW5pZm9ybXModGhpcy5yZW5kZXJQcm9ncmFtLCBUb1NjcmVlblVuaWZvcm1zKTtcclxuICAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN3YXAocG9zOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zbWFsbFZpZXdzID0gW1xyXG4gICAgICAgICBSZW5kZXJNb2RlLkFydGlzdCxcclxuICAgICAgICAgUmVuZGVyTW9kZS5DaHJvbWEsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQmFuZHMsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuVmFsdWUsXHJcbiAgICAgIF07XHJcbiAgICAgIHRoaXMubWFpblZpZXcgPSB0aGlzLnNtYWxsVmlld3NbcG9zXTtcclxuICAgICAgdGhpcy5zbWFsbFZpZXdzW3Bvc10gPSBSZW5kZXJNb2RlLlNjaWVuY2U7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnbFZlYzMsIGdsVmVjNCB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBmb3IgdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVVuaWZvcm1zIHtcclxuICAgdUxpZ2h0SW50ZW5zaXR5OiBudW1iZXIsXHJcbiAgIHVMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICB1TGlnaHRQb3M6IGdsVmVjMyxcclxuICAgdUFtYmllbnRMaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICB1QmFsbENvbG9yOiBnbENvbG9yLFxyXG4gICB1RXllOiBnbFZlYzMsXHJcbiAgIHVUZXh0dXJlU2l6ZTogbnVtYmVyLFxyXG4gICB1VGV4dHVyZVdlaWdodDogbnVtYmVyLFxyXG4gICB1VGltZVNpbmNlU3RhcnQ6IG51bWJlcixcclxuICAgdVJheTAwOiBnbFZlYzMsXHJcbiAgIHVSYXkwMTogZ2xWZWMzLFxyXG4gICB1UmF5MTA6IGdsVmVjMyxcclxuICAgdVJheTExOiBnbFZlYzMsXHJcbiAgIHVQYXNzOiBudW1iZXIsXHJcbiAgIHVTYW1wbGU6IG51bWJlcixcclxuICAgdU51bVBhc3NlczogbnVtYmVyLFxyXG4gICB1QkFMTF9TUEVDVUxBUjogbnVtYmVyO1xyXG4gICB1QkFMTF9MSUdIVDogbnVtYmVyO1xyXG4gICB1QkFMTF9TSEFET1c6IG51bWJlcjtcclxuICAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnlcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbHVlcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IHZhciBVbmlmb3JtczogSVVuaWZvcm1zID0ge1xyXG4gICB1TGlnaHRJbnRlbnNpdHk6IDAuNyxcclxuICAgdUxpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFsxLjAsIDEuMCwgMS4wXSksXHJcbiAgIHVMaWdodFBvczogbmV3IGdsVmVjMyhbLTAuNiwgMC43LCAwLjhdKSxcclxuICAgdUFtYmllbnRMaWdodEludGVuc2l0eTogMC4zLFxyXG4gICB1QmFsbENvbG9yOiBuZXcgZ2xDb2xvcihbMC41LCAwLjUsIDAuOF0pLFxyXG4gICB1RXllOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVUZXh0dXJlU2l6ZTogMjU2LFxyXG4gICB1VGV4dHVyZVdlaWdodDogMCxcclxuICAgdVRpbWVTaW5jZVN0YXJ0OiAwLFxyXG4gICB1UmF5MDA6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTAxOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MTE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVBhc3M6IDAuMCxcclxuICAgdU51bVBhc3NlczogMS4wLFxyXG4gICB1U2FtcGxlOiAwLjAsXHJcbiAgIHVCQUxMX1NQRUNVTEFSOiAxMDAyLFxyXG4gICB1QkFMTF9MSUdIVDogMTAwMSxcclxuICAgdUJBTExfU0hBRE9XOiAxMDAwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhZGVycyB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldEV5ZVJheShtYXRyaXg6IGdsTWF0NCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgdmVjID0gbmV3IGdsVmVjNChbeCwgeSwgMCwgMV0pO1xyXG4gICAgICByZXR1cm4gbWF0cml4Lm11bHRWKHZlYykuZGl2aWRlQnlXKCkuc3VidHJhY3QoVW5pZm9ybXMudUV5ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgc2V0VW5pZm9ybXMocHJvZ3JhbTogV2ViR0xQcm9ncmFtLCB1bmlmb3JtczogYW55KSB7XHJcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gdW5pZm9ybXMpIHtcclxuICAgICAgICAgdmFyIHZhbHVlID0gdW5pZm9ybXNbbmFtZV07XHJcbiAgICAgICAgIHZhciBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcclxuICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsVmVjMykge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCBuZXcgRmxvYXQzMkFycmF5KFt2YWx1ZS5nZXQoMCksIHZhbHVlLmdldCgxKSwgdmFsdWUuZ2V0KDIpXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xDb2xvcikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCBuZXcgRmxvYXQzMkFycmF5KFt2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwidU1vZGVcIikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGNvbXBpbGVTb3VyY2Uoc291cmNlOiBzdHJpbmcsIHR5cGU6IG51bWJlcikge1xyXG4gICAgICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdjb21waWxlIGVycm9yOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZVNoYWRlcih2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZykge1xyXG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIFNoYWRlcnMuY29tcGlsZVNvdXJjZSh2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIFNoYWRlcnMuY29tcGlsZVNvdXJjZShmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKSk7XHJcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xyXG4gICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdsaW5rIGVycm9yOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlclByb2dyYW07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IENvbG9yUmFuZ2UgfSBmcm9tIFwiLi9Db2xvclJhbmdlXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhIHBhc3NlZCB0byB0aGUgU2xpZGVyIGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJTZXR1cCB7XHJcbiAgIGlkOiBzdHJpbmcsXHJcbiAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgIG1pbjogbnVtYmVyLFxyXG4gICBtYXg6IG51bWJlcixcclxuICAgdmFsdWU6IG51bWJlcixcclxuICAgY29sb3JzOiBodG1sQ29sb3JbXSxcclxuICAgb25pbnB1dD86ICgpID0+IHZvaWQsXHJcbiAgIGdldFRleHQ/OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHNsaWRlciBjb21wb3NlZCBvZiBhIGxhYmVsLCBpbnB1dCByYW5nZSwgY29sb3Igc3BhbiBhbmQgdmFsdWUgc3BhblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsaWRlciB7XHJcblxyXG4gICBwcml2YXRlIF9yYW5nZTogSFRNTElucHV0RWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX3ZhbHVlU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF9jb2xvcnM6IENvbG9yUmFuZ2U7XHJcbiAgIHByaXZhdGUgX2dldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCBodG1sIG9iamVjdC5cclxuICAgICogQHBhcmFtIHNldHVwIFRoZSBzZXR1cCBkYXRhIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIHNldHVwOiBJU2xpZGVyU2V0dXApIHtcclxuICAgICAgdGhpcy5fZ2V0VGV4dCA9IHNldHVwLmdldFRleHQ7XHJcblxyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5pZCA9IHNldHVwLmlkICsgJ0xhYmVsJztcclxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ1NsaWRlckxhYmVsJztcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc2V0dXAubGFiZWw7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnR5cGUgPSAncmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5pZCA9IHNldHVwLmlkICsgJ1JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuY2xhc3NOYW1lID0gJ1NsaWRlclJhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UubWluID0gc2V0dXAubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1heCA9IHNldHVwLm1heC50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZSA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdGhpcy51cGRhdGVTcGFuQ29sb3IoKSk7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9yYW5nZSk7XHJcblxyXG4gICAgICB0aGlzLl9jb2xvclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMuX2NvbG9yU3Bhbi5pZCA9IHNldHVwLmlkICsgJ0NvbG9yU3Bhbic7XHJcbiAgICAgIHRoaXMuX2NvbG9yU3Bhbi5jbGFzc05hbWUgPSAnU2xpZGVyQ29sb3JTcGFuJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX2NvbG9yU3Bhbik7XHJcblxyXG4gICAgICB0aGlzLl92YWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pZCA9IHNldHVwLmlkICsgJ1ZhbHVlU3Bhbic7XHJcbiAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5jbGFzc05hbWUgPSAnU2xpZGVyVmFsdWVTcGFuJztcclxuICAgICAgLy8gICAgICB0aGlzLl92YWx1ZVNwYW4uaW5uZXJUZXh0ID0gc2V0dXAudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX3ZhbHVlU3Bhbik7XHJcblxyXG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgY29sb3JcclxuICAgICAgdGhpcy5jb2xvcnMgPSBzZXR1cC5jb2xvcnM7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZS5vbmlucHV0ID0gc2V0dXAub25pbnB1dDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIHNwYW4gY29sb3IgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvci5cclxuICAgICovXHJcbiAgIHByaXZhdGUgdXBkYXRlU3BhbkNvbG9yKCk6IHZvaWQge1xyXG4gICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ29sb3IodGhpcy5fY29sb3JzLmdldCh2YWwpKTtcclxuICAgICAgdGhpcy5fY29sb3JTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnRvSGV4KClcclxuICAgICAgaWYgKHRoaXMuX2dldFRleHQpIHtcclxuICAgICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHRoaXMuX2dldFRleHQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGh0bWwgcmFuZ2Ugb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbCByYW5nZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHJhbmdlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtaW4gc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWluKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heCBzbGlkZXIgdmFsdWUuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWF4KTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIGNvbG9yIGZvciB0aGUgc2xpZGVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IGNvbG9ycyhjb2xvcnM6IGh0bWxDb2xvcltdKSB7XHJcblxyXG4gICAgICAvLyBzdG9yZSB0aGUgY29sb3JzXHJcbiAgICAgIHRoaXMuX2NvbG9ycyA9IG5ldyBDb2xvclJhbmdlKGNvbG9ycyk7XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgZ3JhZGllbnQgc3R5bGUgZm9yIHRoZSByYW5nZSBvYmplY3RcclxuICAgICAgbGV0IGdyYWRpZW50U3RyID0gJzkwZGVnJztcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgZ3JhZGllbnRTdHIgKz0gJywgJyArIGNvbG9yc1tpXS50b0hleCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3JhbmdlLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KCcgKyBncmFkaWVudFN0ciArICcpJztcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3BhbiBjb2xvciB0b29cclxuICAgICAgdGhpcy51cGRhdGVTcGFuQ29sb3IoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIGN1cnJlbnQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGh0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgY3VycmVudCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZ2xDb2xvcigpOiBnbENvbG9yIHtcclxuICAgICAgbGV0IHZhbCA9ICh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xyXG4gICAgICByZXR1cm4gdGhpcy5fY29sb3JzLmdldCh2YWwpLnRvR2xDb2xvcigpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBVbmlmb3JtcyB9IGZyb20gXCIuL1NoYWRlcnNcIjtcclxuaW1wb3J0IHsgUGF0aFRyYWNlciwgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgem9vbVosIGFuZ2xlWSwgYW5nbGVYLCBjYW52YXMgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgIHB1YmxpYyB0cmFjZXIgPSBuZXcgUGF0aFRyYWNlcigpO1xyXG4gICBwcml2YXRlIG1vZGVsdmlldzogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHByb2plY3Rpb246IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgc3RhcnQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBjb3VudCA9IDA7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbGljayh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAvLyBUT0RPIGhhbmRsZSB0aGlzIHdpdGhpbiB0aGUgUGF0aFRyYWNlciBjbGFzcyBzbyB0aGF0IHdlIGRvbid0IGhhdmUgdG8gaGFyZCBjb2RlIHZpZXcgc3R1ZmZcclxuICAgICAgbGV0IHNpemUgPSBjYW52YXMud2lkdGggLyA0O1xyXG5cclxuICAgICAgaWYgKHkgPCBzaXplKSB7XHJcblxyXG4gICAgICAgICBpZiAoeCA+IGNhbnZhcy53aWR0aCAtIDEgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh4ID4gY2FudmFzLndpZHRoIC0gMiAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiBjYW52YXMud2lkdGggLSAzICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoeCA+IGNhbnZhcy53aWR0aCAtIDQgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICBzd2l0Y2ggKHRoaXMudHJhY2VyLnJlbmRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLlNjaWVuY2U6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhpcyB2aWV3IGRpc3BsYXlzIHRoZSBudW1lcmljYWxseSBjb21wdXRlZCBjb2xvcnMuXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkFydGlzdDpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGlzIHZpZXcgZGlzcGxheXMgdGhlIGFydGlzdCBhZGp1c3RlZCBjb2xvcnMuXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkNocm9tYTpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGlzIHZpZXcgZGlzcGxheXMgdGhlIGNocm9tYSBvbiB0aGUgYmFsbC4gUmVkPWhpZ2hlc3QgY2hyb21hLlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5WYWx1ZTpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGlzIHZpZXcgZGlzcGxheXMgdGhlIGJhbGwgdXNpbmcgdmFsdWVzIG9ubHkuXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkJhbmRzOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlRoaXMgdmlldyBkaXNwbGF5cyB0aGUgYmFsbCByZW5kZXJlZCB3aXRoIGxpbWl0ZWQgY29sb3JzLlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZSh0aW1lU2luY2VTdGFydDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gZ2xNYXQ0Lm1ha2VMb29rQXQoXHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUsXHJcbiAgICAgICAgIG5ldyBnbFZlYzMoWzAsIDAsIDBdKSwgIC8vIGNlbnRlciBwb2ludFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSkgICAvLyB1cCB2ZWN0b3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IGdsTWF0NC5tYWtlUGVyc3BlY3RpdmUoNTUsIDEsIDAuMSwgMTAwKTtcclxuICAgICAgdGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0aW9uLm11bHRNKHRoaXMubW9kZWx2aWV3KTtcclxuICAgICAgdGhpcy50cmFjZXIudXBkYXRlVGV4dHVyZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24sIHRpbWVTaW5jZVN0YXJ0KTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy50cmFjZXIuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy50cmFjZXIucmVzdGFydCgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3dhcChwb3M6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnRyYWNlci5zd2FwKHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgbGV0IHRpbWVTaW5jZVN0YXJ0ID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0KSAqIDAuMDAxO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY291bnQgPCAxMDAwKSB7XHJcbiAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS5zZXQoMCwgem9vbVogKiBNYXRoLnNpbihhbmdsZVkpICogTWF0aC5jb3MoYW5nbGVYKSk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUuc2V0KDEsIHpvb21aICogTWF0aC5zaW4oYW5nbGVYKSk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUuc2V0KDIsIHpvb21aICogTWF0aC5jb3MoYW5nbGVZKSAqIE1hdGguY29zKGFuZ2xlWCkpO1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKHRpbWVTaW5jZVN0YXJ0KTtcclxuICAgICAgICAgdGhpcy5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBnbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGdsQ29sb3IuY2xhbXAoY29sb3Iucik7XHJcbiAgICAgIGxldCBnID0gZ2xDb2xvci5jbGFtcChjb2xvci5nKTtcclxuICAgICAgbGV0IGIgPSBnbENvbG9yLmNsYW1wKGNvbG9yLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxpZ2h0ZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBsaWdodGVzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbGlnaHRlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPiBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGRhcmtlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGRhcmtlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGRhcmtlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPCBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENsYW1wcyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICogQHJldHVybnMgVGhlIGNsYW1wZWQgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNsYW1wKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgaWYgKHZhbCA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsID4gMSkge1xyXG4gICAgICAgICByZXR1cm4gMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYW4gaHRtbCBjb2xvciBvYmplY3QgKDAtMjU1IGJhc2VkKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IdG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMucik7XHJcbiAgICAgIGxldCBnID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmcpO1xyXG4gICAgICBsZXQgYiA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5iKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGFkZHMgdGVtcGVyYXR1cmUgdG8gYSBDb2xvciBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIGV4dGVuZHMgZ2xDb2xvciB7XHJcbiAgIC8qKlxyXG4gICAgKiBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgX3RlbXBlcmF0dXJlOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgdGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICogQHBhcmFtIHRlbXBlcmF0dXJlIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10sIHRlbXBlcmF0dXJlOiBudW1iZXIpIHtcclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICAgICB0aGlzLl90ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogS25vd24gY29sb3IgdmFsdWVzLiBGb3Igb3RoZXIgcmVxdWVzdHMgdGhlIGNsYXNzIHdpbGwgcmV0dXJuIGludGVycG9sYXRlZCB2YWx1ZXNcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNvbG9yczogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVtdID0gW1xyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxNDcgLyAyNTUsIDQxIC8gMjU1XSwgMTkwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDE5NyAvIDI1NSwgMTQzIC8gMjU1XSwgMjYwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDIxNCAvIDI1NSwgMTcwIC8gMjU1XSwgMjg1MCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI0MSAvIDI1NSwgMjI0IC8gMjU1XSwgMzIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1MCAvIDI1NSwgMjQ0IC8gMjU1XSwgNTIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjUxIC8gMjU1XSwgNTQwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjU1IC8gMjU1XSwgNjAwMCksIC8vIGRheWxpZ2h0XHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyMDEgLyAyNTUsIDIyNiAvIDI1NSwgMjU1IC8gMjU1XSwgNzAwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFs2NCAvIDI1NSwgMTU2IC8gMjU1LCAyNTUgLyAyNTVdLCAyMDAwMCksXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldCBkYXlsaWdodCgpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKDYwMDApO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluaW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtaW5UZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXhpbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1heFRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSBDb2xvciBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGUodGVtcGVyYXR1cmU6IG51bWJlcik6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUge1xyXG5cclxuICAgICAgaWYgKHRlbXBlcmF0dXJlIDw9IHRoaXMubWluVGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRlbXBlcmF0dXJlID49IHRoaXMubWF4VGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IxID0gdGhpcy5jb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjIgPSB0aGlzLmNvbG9yc1tpICsgMV07XHJcbiAgICAgICAgICAgIGlmICh0ZW1wZXJhdHVyZSA+PSBjb2xvcjEudGVtcGVyYXR1cmUgJiYgdGVtcGVyYXR1cmUgPD0gY29sb3IyLnRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgIGxldCByYXRpbyA9ICh0ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSkgLyAoY29sb3IyLnRlbXBlcmF0dXJlIC0gY29sb3IxLnRlbXBlcmF0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCByID0gY29sb3IxLnIgKyByYXRpbyAqIChjb2xvcjIuciAtIGNvbG9yMS5yKTtcclxuICAgICAgICAgICAgICAgbGV0IGcgPSBjb2xvcjEuZyArIHJhdGlvICogKGNvbG9yMi5nIC0gY29sb3IxLmcpO1xyXG4gICAgICAgICAgICAgICBsZXQgYiA9IGNvbG9yMS5iICsgcmF0aW8gKiAoY29sb3IyLmIgLSBjb2xvcjEuYik7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbciwgZywgYl0sIHRlbXBlcmF0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzaG91bGRuJ3QgZ2V0IGhlcmUsIGJ1dCBpZiB3ZSBkbywgcmV0dXJuIHRoZSBsYXN0IGNvbG9yXHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzQsIGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyBtYXRyaXggZm9yIHVzZSBpbiBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xNYXQ0IHtcclxuICAgLyoqIFRoZSBtYXRyaXggdmFsdWUgc3RvcmVkIGFzIGEgMTYgZWxlbWVudCBhcnJheSAqL1xyXG4gICBwcml2YXRlIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbE1hdDQge1xyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NCh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCB2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhIHZlY3RvciBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0Vih2ZWM6IGdsVmVjNCk6IGdsVmVjNCB7XHJcbiAgICAgIGxldCB2YWxzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tyb3cgKiA0ICsgY29sXSAqIHZlYy5nZXQoY29sKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YWxzLnB1c2goc3VtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjNCh2YWxzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhbm90aGVyIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBtYXRyaXguXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRNKG90aGVyOiBnbE1hdDQpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5nZXQocm93LCBpKSAqIG90aGVyLmdldChpLCBjb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocm93LCBjb2wsIHN1bSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEludmVydHMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGludmVydCgpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRyYW5zcG9zZXMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBnbE1hdDQge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZhbHVlcyA9IHJlc3VsdC52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgdHJhbnNsYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdHJhbnNsYXRpb25zLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVHJhbnNsYXRpb24odjogZ2xWZWMzKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgdi5nZXQoMCksXHJcbiAgICAgICAgIDAsIDEsIDAsIHYuZ2V0KDEpLFxyXG4gICAgICAgICAwLCAwLCAxLCB2LmdldCgyKSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KFxyXG4gICAgICBleWU6IGdsVmVjMyxcclxuICAgICAgY2VudGVyOiBnbFZlYzMsXHJcbiAgICAgIHVwOiBnbFZlYzMsXHJcbiAgICk6IGdsTWF0NCB7XHJcblxyXG4gICAgICAvLyBjbG9uZSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdvbmFsc1xyXG4gICAgICBsZXQgeiA9IGV5ZS5jbG9uZSgpLnN1YnRyYWN0KGNlbnRlcikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCB4ID0gdXAuY2xvbmUoKS5jcm9zcyh6KS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IHkgPSB6LmNsb25lKCkuY3Jvc3MoeCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICBsZXQgbSA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICB4LmdldCgwKSwgeC5nZXQoMSksIHguZ2V0KDIpLCAwLFxyXG4gICAgICAgICB5LmdldCgwKSwgeS5nZXQoMSksIHkuZ2V0KDIpLCAwLFxyXG4gICAgICAgICB6LmdldCgwKSwgei5nZXQoMSksIHouZ2V0KDIpLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgdmFyIHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgLWV5ZS5nZXQoMCksXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUuZ2V0KDEpLFxyXG4gICAgICAgICAwLCAwLCAxLCAtZXllLmdldCgyKSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBtLm11bHRNKHQpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVQZXJzcGVjdGl2ZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBmb3Z5IEZpZWxkIG9mIHZpZXcgKGluIGRlZ3JlZXMpLlxyXG4gICAgKiBAcGFyYW0gYXNwZWN0IFZpZXcgYXNwZWN0IHJhdGlvLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgTmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgRmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlUGVyc3BlY3RpdmUoXHJcbiAgICAgIGZvdnk6IG51bWJlcixcclxuICAgICAgYXNwZWN0OiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgeW1heCA9IHpuZWFyICogTWF0aC50YW4oZm92eSAqIE1hdGguUEkgLyAzNjAuMCk7XHJcbiAgICAgIHZhciB5bWluID0gLXltYXg7XHJcbiAgICAgIHZhciB4bWluID0geW1pbiAqIGFzcGVjdDtcclxuICAgICAgdmFyIHhtYXggPSB5bWF4ICogYXNwZWN0O1xyXG5cclxuICAgICAgcmV0dXJuIGdsTWF0NC5tYWtlRnJ1c3R1bSh4bWluLCB4bWF4LCB5bWluLCB5bWF4LCB6bmVhciwgemZhcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1RnJ1c3R1bS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZWZ0IFRoZSBsZWZ0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gcmlnaHQgVGhlIHJpZ2h0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gYm90dG9tIFRoZSBib3R0b20gY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB0b3AgVGhlIHRvcCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpuZWFyIFRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBUaGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcmV0dXJucyB0aGUgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlRnJ1c3R1bShcclxuICAgICAgbGVmdDogbnVtYmVyLFxyXG4gICAgICByaWdodDogbnVtYmVyLFxyXG4gICAgICBib3R0b206IG51bWJlcixcclxuICAgICAgdG9wOiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgWCA9IDIgKiB6bmVhciAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgWSA9IDIgKiB6bmVhciAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQSA9IChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBCID0gKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEMgPSAtKHpmYXIgKyB6bmVhcikgLyAoemZhciAtIHpuZWFyKTtcclxuICAgICAgdmFyIEQgPSAtMiAqIHpmYXIgKiB6bmVhciAvICh6ZmFyIC0gem5lYXIpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBYLCAwLCBBLCAwLFxyXG4gICAgICAgICAwLCBZLCBCLCAwLFxyXG4gICAgICAgICAwLCAwLCBDLCBELFxyXG4gICAgICAgICAwLCAwLCAtMSwgMFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxufSIsIlxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBnbFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHByb3RlY3RlZCB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5kZXggVGhlIGVsZW1lbnQgaW5kZXguXHJcbiAgICAqIEByZXR1cm5zIFRoZSBlbGVtZW50IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB2YWx1ZSBpbiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGluZGV4IFRoZSBlbGVtZW50IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVsZW1lbnQgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIFRoZSB2ZWN0b3IgbWFnbml0dWRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hZ25pdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbaV0gKiB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBub3JtYWxpemUoKTogZ2xWZWMge1xyXG4gICAgICBsZXQgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgaWYgKG1hZyAhPT0gMCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXogdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjMyBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gc3VwZXIubm9ybWFsaXplKCkgYXMgZ2xWZWMzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGlzIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWM6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdIC09IHZlYy52YWx1ZXNbMF07XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdIC09IHZlYy52YWx1ZXNbMV07XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdIC09IHZlYy52YWx1ZXNbMl07XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGxldCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjNCBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhbiB4LXkteiB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IGlzIGNvbXB1dGVkIGJ5IGRpdmlkaW5nIHRoaXMgdmVjdG9yc1xyXG4gICAgKiBlbGVtZW50cyBieSB0aGUgdyB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIHgteS16IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXZpZGVCeVcoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciByZXByZXNlbnRpbmcgY29sb3IgdmFsdWVzLiBWYWx1ZXMgYXJlIG9uIGEgMC0xIHNjYWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGhzdkNvbG9yIHtcclxuICAgcHVibGljIHJlYWRvbmx5IGg6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IHM6IG51bWJlcjtcclxuICAgcHVibGljIHJlYWRvbmx5IHY6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgSFNWIHZhbHVlcyB0byBzdG9yZSBpbiB0aGlzIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG4gICAgICB0aGlzLmggPSBjb2xvclswXTtcclxuICAgICAgdGhpcy5zID0gY29sb3JbMV07XHJcbiAgICAgIHRoaXMudiA9IGNvbG9yWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBoc3ZDb2xvciBvYmplY3QgZnJvbSBhbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9yIFRoZSBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHN2Q29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tSHRtbENvbG9yKGNvbG9yOiBodG1sQ29sb3IpOiBoc3ZDb2xvciB7XHJcbiAgICAgIGxldCByID0gY29sb3IucjtcclxuICAgICAgbGV0IGcgPSBjb2xvci5nO1xyXG4gICAgICBsZXQgYiA9IGNvbG9yLmI7XHJcblxyXG4gICAgICBsZXQgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XHJcbiAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgbGV0IGQgPSBtYXggLSBtaW47XHJcbiAgICAgIGxldCBoO1xyXG4gICAgICBsZXQgcyA9IChtYXggPT09IDAgPyAwIDogZCAvIG1heCk7XHJcbiAgICAgIGxldCB2ID0gbWF4IC8gMjU1O1xyXG5cclxuICAgICAgc3dpdGNoIChtYXgpIHtcclxuICAgICAgICAgY2FzZSBtaW46IGggPSAwOyBicmVhaztcclxuICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSArIGQgKiAoZyA8IGIgPyA2IDogMCk7IGggLz0gNiAqIGQ7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpICsgZCAqIDI7IGggLz0gNiAqIGQ7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpICsgZCAqIDQ7IGggLz0gNiAqIGQ7IGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGhzdkNvbG9yKFtoLCBzLCB2XSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGhzdkNvbG9yIG9iamVjdCBmcm9tIGEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgVGhlIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHN2Q29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tR2xDb2xvcihjb2xvcjogZ2xDb2xvcik6IGhzdkNvbG9yIHtcclxuICAgICAgcmV0dXJuIGhzdkNvbG9yLmZyb21IdG1sQ29sb3IoY29sb3IudG9IdG1sQ29sb3IoKSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgZ2xDb2xvciBvYmplY3QgZnJvbSB0aGlzIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBnbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dsQ29sb3IoKTogZ2xDb2xvciB7XHJcblxyXG4gICAgICB2YXIgciwgZywgYiwgaSwgZiwgcCwgcSwgdDtcclxuICAgICAgaSA9IE1hdGguZmxvb3IodGhpcy5oICogNik7XHJcbiAgICAgIGYgPSB0aGlzLmggKiA2IC0gaTtcclxuICAgICAgcCA9IHRoaXMudiAqICgxIC0gdGhpcy5zKTtcclxuICAgICAgcSA9IHRoaXMudiAqICgxIC0gZiAqIHRoaXMucyk7XHJcbiAgICAgIHQgPSB0aGlzLnYgKiAoMSAtICgxIC0gZikgKiB0aGlzLnMpO1xyXG4gICAgICBzd2l0Y2ggKGkgJSA2KSB7XHJcbiAgICAgICAgIGNhc2UgMDogciA9IHRoaXMudiwgZyA9IHQsIGIgPSBwOyBicmVhaztcclxuICAgICAgICAgY2FzZSAxOiByID0gcSwgZyA9IHRoaXMudiwgYiA9IHA7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIDI6IHIgPSBwLCBnID0gdGhpcy52LCBiID0gdDsgYnJlYWs7XHJcbiAgICAgICAgIGNhc2UgMzogciA9IHAsIGcgPSBxLCBiID0gdGhpcy52OyBicmVhaztcclxuICAgICAgICAgY2FzZSA0OiByID0gdCwgZyA9IHAsIGIgPSB0aGlzLnY7IGJyZWFrO1xyXG4gICAgICAgICBjYXNlIDU6IHIgPSB0aGlzLnYsIGcgPSBwLCBiID0gcTsgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IGZyb20gdGhpcyBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IdG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9HbENvbG9yKCkudG9IdG1sQ29sb3IoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGNsYXNzIHRoYXQgcmVxdWlyZXMgUkdCIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDI1NVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGh0bWxDb2xvciBleHRlbmRzIENvbG9yIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgd2hpdGUgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDI1NSwgMjU1XSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmxhY2sgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcmVkID0gbmV3IGh0bWxDb2xvcihbMjU1LCAwLCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZ3JlZW4gPSBuZXcgaHRtbENvbG9yKFswLCAyNTUsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBibHVlID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMjU1XSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgb3JhbmdlID0gbmV3IGh0bWxDb2xvcihbMjU1LCAxNjUsIDBdKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdKSB7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDMpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDMgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclswXSA8IDAgfHwgY29sb3JbMF0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnZycgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIHZhbHVlIHRvIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMgVGhlIG51bWVyaWMgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29tcG9uZW50VG9IZXgoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGhleCBzdHJpbmcgKGUuZy4gIzBmMGYwZik7XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IZXgoKTogc3RyaW5nIHtcclxuICAgICAgbGV0IHJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMucik7XHJcbiAgICAgIGxldCBnSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmcpO1xyXG4gICAgICBsZXQgYkhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5iKTtcclxuICAgICAgcmV0dXJuIFwiI1wiICsgckhleCArIGdIZXggKyBiSGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IGZyb20gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nXHJcbiAgICAqIEByZXR1cm5zIFRoZSBodG1sQ29sb3Igb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21IZXgoaGV4OiBzdHJpbmcpOiBodG1sQ29sb3Ige1xyXG4gICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgbGV0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgICAgbGV0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgICAgbGV0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLnIpO1xyXG4gICAgICBsZXQgZyA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5nKTtcclxuICAgICAgbGV0IGIgPSBodG1sQ29sb3IuY2xhbXAoY29sb3IuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSb3VuZHMgYSBudW1iZXIgdG8gYSB3aG9sZSBudW1iZXIgYW5kIGNsYW1wcyBpdCBiZXR3ZWVuIDAgYW5kIDI1NS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgcm91bmRlZCAmIGNsYW1wZWQgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNsYW1wKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgdmFsID0gTWF0aC5yb3VuZCh2YWwpO1xyXG4gICAgICBpZiAodmFsIDwgMCkge1xyXG4gICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh2YWwgPiAyNTUpIHtcclxuICAgICAgICAgcmV0dXJuIDI1NTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBjb2xvciB0byBhbiBlcXVpdmFsZW50IGdyYXktc2NhbGUgY29sb3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBncmF5LXNjYWxlIGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR3JheSgpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgcmdiID0gTWF0aC5yb3VuZCgodGhpcy5yICsgdGhpcy5nICsgdGhpcy5iKSAvIDMpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbcmdiLCByZ2IsIHJnYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBXZWJHTCBjb2xvciBvYmplY3QgKDAtMSBiYXNlZClcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HbENvbG9yKCk6IGdsQ29sb3Ige1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3RoaXMuciAvIDI1NSwgdGhpcy5nIC8gMjU1LCB0aGlzLmIgLyAyNTVdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tIFwiLi9TaGFkZXJzXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIH0gZnJvbSBcIi4vZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVwiO1xyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgVG9TY3JlZW5Vbmlmb3JtcyB9IGZyb20gXCIuL1BhdGhUcmFjZXJcIjtcclxuaW1wb3J0IHsgaHN2Q29sb3IgfSBmcm9tIFwiLi9oc3ZDb2xvclwiO1xyXG5cclxubGV0IGFwcDogQXBwO1xyXG5leHBvcnQgbGV0IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuZXhwb3J0IGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuZXhwb3J0IGxldCBhbmdsZVggPSAwO1xyXG5leHBvcnQgbGV0IGFuZ2xlWSA9IDA7XHJcbmV4cG9ydCBsZXQgem9vbVogPSAzLjA7XHJcblxyXG5sZXQgc2tpblRvbmVzID0gW1xyXG4gICBuZXcgaHRtbENvbG9yKFsyNDAsIDIyMywgMjE0XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzI1NSwgMjE4LCAyMDBdKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMjMyLCAxNzksIDExN10pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxOTAsIDEzNiwgODddKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFsxMTUsIDkxLCA1OV0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxMzksIDczLCA2NV0pXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTMyLCA1NSwgMzRdKSxcclxuICAgLy9uZXcgaHRtbENvbG9yKFs2MSwgMTIsIDJdKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFszOCwgNywgMV0pXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICBjYW52YXMuaWQgPSAnY2FudmFzJztcclxuICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xyXG4gICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgbGV0IGludGVuc2l0eVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgIGlkOiAnTGlnaHRJbnRlbnNpdHknLFxyXG4gICAgICBsYWJlbDogJ0xpZ2h0IEludGVuc2l0eScsXHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxMDAsXHJcbiAgICAgIHZhbHVlOiBVbmlmb3Jtcy51TGlnaHRJbnRlbnNpdHkgKiAxMDAsXHJcbiAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgb25pbnB1dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICBVbmlmb3Jtcy51TGlnaHRJbnRlbnNpdHkgPSBpbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcblxyXG4gICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG4gICAvLyBidWlsZCBhIHJhbmdlIG9mIGNvbG9yc1xyXG4gICBsZXQgbWluID0gMjAwMDtcclxuICAgbGV0IG1heCA9IDEwMDAwO1xyXG4gICBsZXQgY29sb3JzOiBodG1sQ29sb3JbXSA9IFtdO1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgbGV0IHRlbXAgPSBtaW4gKyAoaSAvIDkpICogKG1heCAtIG1pbik7XHJcbiAgICAgIGNvbG9ycy5wdXNoKGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUuY3JlYXRlKHRlbXApLnRvSHRtbENvbG9yKCkpO1xyXG4gICB9XHJcbiAgIGxldCBsaWdodENvbG9yU2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgaWQ6ICdMaWdodENvbG9yJyxcclxuICAgICAgbGFiZWw6ICdMaWdodCBDb2xvcicsXHJcbiAgICAgIG1pbjogMjAwMCxcclxuICAgICAgbWF4OiAxMDAwMCxcclxuICAgICAgdmFsdWU6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUuZGF5bGlnaHQudGVtcGVyYXR1cmUsXHJcbiAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICBvbmlucHV0OiBzZXRMaWdodENvbG9yLFxyXG4gICAgICBnZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHsgcmV0dXJuIHNsaWRlci52YWx1ZS50b0ZpeGVkKCkgKyBcIktcIiB9XHJcbiAgIH0pO1xyXG5cclxuICAgLy8gYXBwbHkgdGhlIGluaXRpYWwgY29sb3JzXHJcbiAgIHNldExpZ2h0Q29sb3IoKTtcclxuXHJcbiAgIGZ1bmN0aW9uIHNldExpZ2h0Q29sb3IoKSB7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIGNvbG9ycyBmb3IgdGhlIGludGVuc2l0eSBzbGlkZXJcclxuICAgICAgaW50ZW5zaXR5U2xpZGVyLmNvbG9ycyA9IFtodG1sQ29sb3IuYmxhY2ssIGxpZ2h0Q29sb3JTbGlkZXIuaHRtbENvbG9yXTtcclxuXHJcbiAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW4gcmVuZGVyaW5nXHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodENvbG9yID0gbGlnaHRDb2xvclNsaWRlci5nbENvbG9yO1xyXG4gICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgbGV0IGJhbGxDb2xvclNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgIGlkOiAnQmFsbENvbG9yJyxcclxuICAgICAgbGFiZWw6ICdCYWxsIENvbG9yJyxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBtYXg6IDEwMCxcclxuICAgICAgdmFsdWU6IDUwLFxyXG4gICAgICBjb2xvcnM6IHNraW5Ub25lcyxcclxuICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICBiYWxsTGlnaHRTaGlmdFNsaWRlci5jb2xvcnMgPSBjb21wdXRlU2hpZnRDb2xvcnMoYmFsbENvbG9yU2xpZGVyLmh0bWxDb2xvciwgMTgwKTtcclxuICAgICAgICAgYmFsbFNoYWRvd1NoaWZ0U2xpZGVyLmNvbG9ycyA9IGNvbXB1dGVTaGlmdENvbG9ycyhiYWxsQ29sb3JTbGlkZXIuaHRtbENvbG9yLCAxODApO1xyXG4gICAgICAgICBiYWxsTGlnaHRDaHJvbWFTbGlkZXIuY29sb3JzID0gY29tcHV0ZUNocm9tYUNvbG9ycyhiYWxsTGlnaHRTaGlmdFNsaWRlci5odG1sQ29sb3IpO1xyXG4gICAgICAgICBiYWxsU2hhZG93Q2hyb21hU2xpZGVyLmNvbG9ycyA9IGNvbXB1dGVDaHJvbWFDb2xvcnMoYmFsbFNoYWRvd1NoaWZ0U2xpZGVyLmh0bWxDb2xvcik7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsQ29sb3IgPSBiYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuICAgICAgICAgYXBwLnJlc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxuXHJcbiAgIC8vIG1ha2Ugc3VyZSBnbCBtYXRjaGVzIHRoZSBpbml0aWFsIFVJIHNldHRpbmdcclxuICAgVW5pZm9ybXMudUJhbGxDb2xvciA9IGJhbGxDb2xvclNsaWRlci5nbENvbG9yO1xyXG5cclxuICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgbGV0IGFtYmllbnRJbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICBpZDogJ0FtYmllbnRJbnRlbnNpdHknLFxyXG4gICAgICBsYWJlbDogJ0FtYmllbnQgTGlnaHQnLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICB2YWx1ZTogVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSAqIDEwMCxcclxuICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICBvbmlucHV0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVBbWJpZW50TGlnaHRJbnRlbnNpdHkgPSBhbWJpZW50SW50ZW5zaXR5U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICBhcHAucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgbGV0IGdyb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGdyb3VwRGl2LmNsYXNzTmFtZSA9IFwiU2xpZGVyR3JvdXBcIjtcclxuICAgbGV0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBoZWFkZXJEaXYuY2xhc3NOYW1lID0gXCJTbGlkZXJIZWFkZXJcIjtcclxuICAgaGVhZGVyRGl2LmlubmVyVGV4dCA9IFwiQmFsbCBpbiBMaWdodFwiO1xyXG4gICBncm91cERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xyXG4gICBkaXYuYXBwZW5kQ2hpbGQoZ3JvdXBEaXYpO1xyXG5cclxuICAgbGV0IGJhbGxMaWdodENocm9tYVNsaWRlciA9IG5ldyBTbGlkZXIoZ3JvdXBEaXYsIHtcclxuICAgICAgaWQ6ICdMaWdodENocm9tYScsXHJcbiAgICAgIGxhYmVsOiAnQ2hyb21hJyxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBtYXg6IDIwMCxcclxuICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgY29sb3JzOiBjb21wdXRlQ2hyb21hQ29sb3JzKGJhbGxDb2xvclNsaWRlci5odG1sQ29sb3IpLFxyXG4gICAgICBvbmlucHV0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIFRvU2NyZWVuVW5pZm9ybXMudUJhbGxMaWdodENocm9tYSA9IGJhbGxMaWdodENocm9tYVNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgYXBwLnJlc3RhcnQoKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0VGV4dDogKHNsaWRlcjogU2xpZGVyKSA9PiB7IHJldHVybiBzbGlkZXIudmFsdWUudG9GaXhlZCgpICsgXCIlXCIgfVxyXG4gICB9KVxyXG5cclxuICAgZnVuY3Rpb24gY29tcHV0ZUNocm9tYUNvbG9ycyhiYXNlQ29sb3I6IGh0bWxDb2xvcik6IGh0bWxDb2xvcltdIHtcclxuICAgICAgbGV0IGhzdiA9IGhzdkNvbG9yLmZyb21IdG1sQ29sb3IoYmFzZUNvbG9yKTtcclxuICAgICAgaHN2ID0gbmV3IGhzdkNvbG9yKFtoc3YuaCwgTWF0aC5taW4oaHN2LnMgKiAyLCAxLjApLCBoc3Yudl0pO1xyXG4gICAgICByZXR1cm4gW2Jhc2VDb2xvci50b0dyYXkoKSwgYmFzZUNvbG9yLCBoc3YudG9IdG1sQ29sb3IoKV07XHJcbiAgIH1cclxuXHJcbiAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgbGV0IGJhbGxMaWdodFNoaWZ0U2xpZGVyID0gbmV3IFNsaWRlcihncm91cERpdiwge1xyXG4gICAgICBpZDogJ0JhbGxMaWdodFNoaWZ0JyxcclxuICAgICAgbGFiZWw6ICdUZW1wZXJhdHVyZScsXHJcbiAgICAgIG1pbjogLTE4MCxcclxuICAgICAgbWF4OiAxODAsXHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgICBjb2xvcnM6IGNvbXB1dGVTaGlmdENvbG9ycyhiYWxsQ29sb3JTbGlkZXIuaHRtbENvbG9yLCAxODApLFxyXG4gICAgICBvbmlucHV0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIGJhbGxMaWdodENocm9tYVNsaWRlci5jb2xvcnMgPSBjb21wdXRlQ2hyb21hQ29sb3JzKGJhbGxMaWdodFNoaWZ0U2xpZGVyLmh0bWxDb2xvcik7XHJcbiAgICAgICAgIFRvU2NyZWVuVW5pZm9ybXMudUJhbGxMaWdodFNoaWZ0ID0gYmFsbExpZ2h0U2hpZnRTbGlkZXIudmFsdWU7XHJcbiAgICAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFRleHQ6IGdldFRlbXBlcmF0dXJlU2hpZnRUZXh0LFxyXG4gICB9KVxyXG5cclxuICAgZnVuY3Rpb24gY29tcHV0ZVNoaWZ0Q29sb3JzKGJhc2VDb2xvcjogaHRtbENvbG9yLCBtYXhTaGlmdDogbnVtYmVyKTogaHRtbENvbG9yW10ge1xyXG4gICAgICBsZXQgaHN2ID0gaHN2Q29sb3IuZnJvbUh0bWxDb2xvcihiYXNlQ29sb3IpO1xyXG4gICAgICBsZXQgY29sb3JzOiBodG1sQ29sb3JbXSA9IFtdO1xyXG4gICAgICBsZXQgbnVtU3RlcHMgPSAxMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBzaGlmdCA9IChtYXhTaGlmdCAtIChpIC8gKG51bVN0ZXBzIC0gMSkpICogKDIgKiBtYXhTaGlmdCkpIC8gMzYwO1xyXG4gICAgICAgICBsZXQgYWRqdXN0bWVudCA9IDA7XHJcbiAgICAgICAgIGlmIChoc3YuaCArIHNoaWZ0IDwgMCkge1xyXG4gICAgICAgICAgICBhZGp1c3RtZW50ID0gMTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChoc3YuaCArIHNoaWZ0ID4gMSkge1xyXG4gICAgICAgICAgICBhZGp1c3RtZW50ID0gLTE7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgY29sb3JzLnB1c2goKG5ldyBoc3ZDb2xvcihbaHN2LmggKyBzaGlmdCArIGFkanVzdG1lbnQsIGhzdi5zLCBoc3Yudl0pKS50b0h0bWxDb2xvcigpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29sb3JzO1xyXG4gICB9XHJcblxyXG4gICBsZXQgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIHNlcGFyYXRvci5zdHlsZS5oZWlnaHQgPSAnMnB4JztcclxuICAgZGl2LmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XHJcblxyXG4gICBncm91cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBncm91cERpdi5jbGFzc05hbWUgPSBcIlNsaWRlckdyb3VwXCI7XHJcbiAgIGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBoZWFkZXJEaXYuY2xhc3NOYW1lID0gXCJTbGlkZXJIZWFkZXJcIjtcclxuICAgaGVhZGVyRGl2LmlubmVyVGV4dCA9IFwiQmFsbCBpbiBTaGFkb3dcIjtcclxuICAgZ3JvdXBEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcclxuICAgZGl2LmFwcGVuZENoaWxkKGdyb3VwRGl2KTtcclxuXHJcbiAgIGxldCBiYWxsU2hhZG93Q2hyb21hU2xpZGVyID0gbmV3IFNsaWRlcihncm91cERpdiwge1xyXG4gICAgICBpZDogJ1NoYWRvd0Nocm9tYScsXHJcbiAgICAgIGxhYmVsOiAnQ2hyb21hJyxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBtYXg6IDIwMCxcclxuICAgICAgdmFsdWU6IDEwMCxcclxuICAgICAgY29sb3JzOiBjb21wdXRlQ2hyb21hQ29sb3JzKGJhbGxDb2xvclNsaWRlci5odG1sQ29sb3IpLFxyXG4gICAgICBvbmlucHV0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIGJhbGxTaGFkb3dDaHJvbWFTbGlkZXIuY29sb3JzID0gY29tcHV0ZUNocm9tYUNvbG9ycyhiYWxsU2hhZG93U2hpZnRTbGlkZXIuaHRtbENvbG9yKTtcclxuICAgICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51QmFsbFNoYWRvd0Nocm9tYSA9IGJhbGxTaGFkb3dDaHJvbWFTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4geyByZXR1cm4gc2xpZGVyLnZhbHVlLnRvRml4ZWQoKSArIFwiJVwiIH1cclxuICAgfSlcclxuXHJcbiAgIGdyb3VwRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgbGV0IGJhbGxTaGFkb3dTaGlmdFNsaWRlciA9IG5ldyBTbGlkZXIoZ3JvdXBEaXYsIHtcclxuICAgICAgaWQ6ICdCYWxsU2hhZG93U2hpZnQnLFxyXG4gICAgICBsYWJlbDogJ1RlbXBlcmF0dXJlJyxcclxuICAgICAgbWluOiAtMTgwLFxyXG4gICAgICBtYXg6IDE4MCxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICAgIGNvbG9yczogY29tcHV0ZVNoaWZ0Q29sb3JzKGJhbGxDb2xvclNsaWRlci5odG1sQ29sb3IsIDE4MCksXHJcbiAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgVG9TY3JlZW5Vbmlmb3Jtcy51QmFsbFNoYWRvd1NoaWZ0ID0gYmFsbFNoYWRvd1NoaWZ0U2xpZGVyLnZhbHVlO1xyXG4gICAgICAgICBhcHAucmVzdGFydCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRUZXh0OiBnZXRUZW1wZXJhdHVyZVNoaWZ0VGV4dCxcclxuICAgfSlcclxuXHJcbiAgIGZ1bmN0aW9uIGdldFRlbXBlcmF0dXJlU2hpZnRUZXh0KHNsaWRlcjogU2xpZGVyKTogc3RyaW5nIHtcclxuICAgICAgaWYgKHNsaWRlci52YWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgIHJldHVybiAnKycgKyBzbGlkZXIudmFsdWUudG9GaXhlZCgpICsgXCLCulwiXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBzbGlkZXIudmFsdWUudG9GaXhlZCgpICsgXCLCulwiXHJcblxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxudmFyIG1vdXNlRG93biA9IGZhbHNlO1xyXG52YXIgb2xkWDogbnVtYmVyO1xyXG52YXIgb2xkWTogbnVtYmVyO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKSBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgaWYgKCFnbCkge1xyXG4gICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuICAgfVxyXG5cclxuICAgaWYgKCFnbCkge1xyXG4gICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbiAgICAgIGNhbnZhcy5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgeCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgbGV0IHkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgICAgIGlmIChhcHAuY2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgb2xkWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgb2xkWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgb25Nb3ZlKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBvbGRYID0gZXZlbnQueDtcclxuICAgICAgICAgb2xkWSA9IGV2ZW50Lnk7XHJcblxyXG4gICAgICAgICBtb3VzZURvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBvbk1vdmUoZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjYW52YXMub25jbGljayA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBhcHAuY2xpY2soZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgaWYgKG1vdXNlRG93bikge1xyXG4gICAgICAvLyB1cGRhdGUgdGhlIGFuZ2xlcyBiYXNlZCBvbiBob3cgZmFyIHdlIG1vdmVkIHNpbmNlIGxhc3QgdGltZVxyXG4gICAgICBhbmdsZVkgLT0gKHggLSBvbGRYKSAqIDAuMDE7XHJcbiAgICAgIGFuZ2xlWCArPSAoeSAtIG9sZFkpICogMC4wMTtcclxuXHJcbiAgICAgIC8vIGRvbid0IGdvIHVwc2lkZSBkb3duXHJcbiAgICAgIGFuZ2xlWCA9IE1hdGgubWF4KGFuZ2xlWCwgLU1hdGguUEkgLyAyICsgMC4wMSk7XHJcbiAgICAgIGFuZ2xlWCA9IE1hdGgubWluKGFuZ2xlWCwgTWF0aC5QSSAvIDIgLSAwLjAxKTtcclxuXHJcbiAgICAgIC8vIGNsZWFyIHRoZSBzYW1wbGUgYnVmZmVyXHJcbiAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAvLyByZW1lbWJlciB0aGlzIGNvb3JkaW5hdGVcclxuICAgICAgb2xkWCA9IHg7XHJcbiAgICAgIG9sZFkgPSB5O1xyXG4gICB9XHJcbn1cclxuXHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIGludCB1TW9kZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVNYXhDaHJvbWE7XFxyXFxudW5pZm9ybSBmbG9hdCB1QmFsbExpZ2h0Q2hyb21hO1xcclxcbnVuaWZvcm0gZmxvYXQgdUJhbGxTaGFkb3dDaHJvbWE7XFxyXFxudW5pZm9ybSBmbG9hdCB1QmFsbExpZ2h0U2hpZnQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1QmFsbFNoYWRvd1NoaWZ0O1xcclxcbnVuaWZvcm0gdmVjMyB1SGlnaGxpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVNaWRMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1RGFya0xpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodGVzdFNoYWRvd0NvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1RGFya2VzdFNoYWRvd0NvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1QXZnU2hhZG93Q29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1QkFMTF9TUEVDVUxBUjtcXHJcXG51bmlmb3JtIGZsb2F0IHVCQUxMX0xJR0hUO1xcclxcbnVuaWZvcm0gZmxvYXQgdUJBTExfU0hBRE9XO1xcclxcblxcclxcbiNkZWZpbmUgTU9ERV9TQ0lFTkNFIDBcXHJcXG4jZGVmaW5lIE1PREVfVkFMVUUgMVxcclxcbiNkZWZpbmUgTU9ERV9DSFJPTUEgMlxcclxcbiNkZWZpbmUgTU9ERV9BUlRJU1QgM1xcclxcbiNkZWZpbmUgTU9ERV9CQU5EUyA0XFxyXFxuXFxyXFxudmVjNCB3aGl0ZSA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IHJlZCA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IG9yYW5nZSA9IHZlYzQoMS4wLCAwLjY1LCAwLjAsIDEuMCk7XFxyXFxudmVjNCB5ZWxsb3cgPSB2ZWM0KDEuMCwgMS4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBncmVlbiA9IHZlYzQoMC4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGN5YW4gPSB2ZWM0KDAuMCwgMS4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibHVlID0gdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgYmxhY2sgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuI2RlZmluZSBOVU1fQ09MT1JTIDZcXHJcXG52ZWM0IGNvbG9yc1tOVU1fQ09MT1JTXTtcXHJcXG5cXHJcXG52ZWM0IHZhbHVlMkNvbG9yKGZsb2F0IHZhbHVlKVxcclxcbntcXHJcXG4gICBmbG9hdCBzcGFuID0gMS4wIC8gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIHZhbHVlICo9IGZsb2F0KE5VTV9DT0xPUlMgLSAxKTtcXHJcXG4gICBpZiAodmFsdWUgPCAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF07XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzBdICsgdmFsdWUgKiAoY29sb3JzWzFdIC0gY29sb3JzWzBdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAyLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMV0gKyAodmFsdWUgLSAxLjApICogKGNvbG9yc1syXSAtIGNvbG9yc1sxXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMy4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzJdICsgKHZhbHVlIC0gMi4wKSAqIChjb2xvcnNbM10gLSBjb2xvcnNbMl0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDQuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1szXSArICh2YWx1ZSAtIDMuMCkgKiAoY29sb3JzWzRdIC0gY29sb3JzWzNdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA1LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNF0gKyAodmFsdWUgLSA0LjApICogKGNvbG9yc1s1XSAtIGNvbG9yc1s0XSk7XFxyXFxuICAgfVxcclxcbiAgIC8qXFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA2LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNV0gKyAodmFsdWUgLSA1LjApICogKGNvbG9yc1s2XSAtIGNvbG9yc1s1XSk7XFxyXFxuICAgfVxcclxcbiAgICovXFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzW05VTV9DT0xPUlMgLSAxXTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbi8vIEFsbCBjb21wb25lbnRzIGFyZSBpbiB0aGUgcmFuZ2UgWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IHJnYjJoc3YodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDAuMCwgLTEuMCAvIDMuMCwgMi4wIC8gMy4wLCAtMS4wKTtcXHJcXG4gICB2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSwgdmVjNChjLmdiLCBLLnh5KSwgc3RlcChjLmIsIGMuZykpO1xcclxcbiAgIHZlYzQgcSA9IG1peCh2ZWM0KHAueHl3LCBjLnIpLCB2ZWM0KGMuciwgcC55engpLCBzdGVwKHAueCwgYy5yKSk7XFxyXFxuXFxyXFxuICAgZmxvYXQgZCA9IHEueCAtIG1pbihxLncsIHEueSk7XFxyXFxuICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxyXFxuICAgcmV0dXJuIHZlYzQoYWJzKHEueiArIChxLncgLSBxLnkpIC8gKDYuMCAqIGQgKyBlKSksIGQgLyAocS54ICsgZSksIHEueCwgYy5hKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZVsw4oCmMV0sIGluY2x1ZGluZyBodWUuXFxyXFxudmVjNCBoc3YycmdiKHZlYzQgYylcXHJcXG57XFxyXFxuICAgdmVjNCBLID0gdmVjNCgxLjAsIDIuMCAvIDMuMCwgMS4wIC8gMy4wLCAzLjApO1xcclxcbiAgIHZlYzMgcCA9IGFicyhmcmFjdChjLnh4eCArIEsueHl6KSAqIDYuMCAtIEsud3d3KTtcXHJcXG4gICByZXR1cm4gdmVjNChjLnogKiBtaXgoSy54eHgsIGNsYW1wKHAgLSBLLnh4eCwgMC4wLCAxLjApLCBjLnkpLCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCB0b0dyYXkodmVjNCBjKVxcclxcbntcXHJcXG4gICAvLyBsb3RzIG9mIHdheXMgdG8gY29udmVydCBSR0IgdG8gZ3JheSBzY2FsZS5cXHJcXG5cXHJcXG4gICAvLyBzaW1wbGUgYXZlcmFnaW5nIG1ldGhvZFxcclxcbiAgIC8vIHJldHVybiAoYy5yICsgYy5nICsgYy5iKSAvIDMuMDtcXHJcXG5cXHJcXG4gICAvLyByZWxhdGl2ZSBwZXJjZXB0dWFsIHZhbHVlc1xcclxcbiAgIC8vIHJldHVybiAwLjMgKiBjLnIgKyAwLjU5ICogYy5nICsgMC4xMSAqIGMuYjtcXHJcXG5cXHJcXG4gICAvLyBsdW1pbm9zaXR5IG1lYXN1cmVcXHJcXG4gICBmbG9hdCBnYW1tYSA9IDIuMjtcXHJcXG4gICBmbG9hdCB5ID0gMC4yMTI2ICogcG93KGMuciwgZ2FtbWEpICsgMC43MTUyICogcG93KGMuZywgZ2FtbWEpICsgLjA3MjIgKiBwb3coYy5iLCBnYW1tYSk7XFxyXFxuICAgZmxvYXQgbCA9IDExNi4wICogcG93KHksIDEuMCAvIDMuMCkgLSAxNi4wO1xcclxcbiAgIHJldHVybiBsIC8gMTAwLjA7XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNWYWx1ZSgpXFxyXFxue1xcclxcbiAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG4gICBmbG9hdCByZ2IgPSB0b0dyYXkoY29sb3IpO1xcclxcbiAgIHJldHVybiB2ZWM0KHJnYiwgcmdiLCByZ2IsIDEuMCk7XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNDaHJvbWEoKVxcclxcbntcXHJcXG4gICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuICAgLy8gcmVuZGVyIHRoZSBzY2FsZSBhcyBhIGJhciBvbiB0aGUgbGVmdFxcclxcbiAgIGlmICh0ZXhDb29yZC54IDwgMC4wMylcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHZhbHVlMkNvbG9yKCh0ZXhDb29yZC55IC0gMC4xKSAvIDAuOSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKGNvbG9yLmEgPj0gdUJBTExfU0hBRE9XKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmbG9hdCBhdmcgPSAoY29sb3IuciArIGNvbG9yLmcgKyBjb2xvci5iKSAvIDMuMDtcXHJcXG4gICAgICAgICBmbG9hdCByZ2IgPSAoYWJzKGF2ZyAtIGNvbG9yLnIpICsgYWJzKGF2ZyAtIGNvbG9yLmcpICsgYWJzKGF2ZyAtIGNvbG9yLmIpKSAvICg0LjAgLyAzLjApO1xcclxcbiAgICAgICAgIHJldHVybiB2YWx1ZTJDb2xvcihyZ2IgLyB1TWF4Q2hyb21hKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCgwLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGQyKHZlYzMgYzEsIHZlYzMgYzIpXFxyXFxue1xcclxcbiAgIC8vIHN1bSB0aGUgc3F1YXJlcyBvZiB0aGUgZGlmZmVyZW5jZXNcXHJcXG4gICByZXR1cm4gcG93KGMxLnIgLSBjMi5yLCAyLjApICsgcG93KGMxLmcgLSBjMi5nLCAyLjApICsgcG93KGMxLmIgLSBjMi5iLCAyLjApO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGNsb3Nlc3QodmVjMyBjb2xvciwgdmVjMyBoaWdoLCB2ZWMzIGxpZ2h0LCB2ZWMzIG1pZCwgdmVjMyBkYXJrKVxcclxcbntcXHJcXG4gICBmbG9hdCBkaGlnaCA9IGQyKGNvbG9yLCBoaWdoKTtcXHJcXG4gICBmbG9hdCBkbGlnaHQgPSBkMihjb2xvciwgbGlnaHQpO1xcclxcbiAgIGZsb2F0IGRtaWQgPSBkMihjb2xvciwgbWlkKTtcXHJcXG4gICBmbG9hdCBkZGFyayA9IGQyKGNvbG9yLCBkYXJrKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkbWluID0gbWluKGRoaWdoLCBtaW4oZGxpZ2h0LCBtaW4oZG1pZCwgZGRhcmspKSk7XFxyXFxuICAgaWYgKGRtaW4gPT0gZGhpZ2gpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBoaWdoO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmIChkbWluID09IGRsaWdodClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGxpZ2h0O1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmIChkbWluID09IGRtaWQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBtaWQ7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGRhcms7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzQmFuZHMoKVxcclxcbntcXHJcXG4gICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuICAgaWYgKGNvbG9yLmEgPiAxLjAgJiYgY29sb3IuYSA8PSAodUJBTExfU0hBRE9XICsgdUJBTExfTElHSFQpIC8gMi4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdmVjNCh1QXZnU2hhZG93Q29sb3IsIDEuMCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKGNvbG9yLmEgPiAodUJBTExfU0hBRE9XICsgdUJBTExfTElHSFQpIC8gMi4wKVxcclxcbiAgIHtcXHJcXG4gICAgICB2ZWMzIGMgPVxcclxcbiAgICAgICAgICBjbG9zZXN0KGNvbG9yLnJnYiwgdUhpZ2hsaWdodENvbG9yLCB1TGlnaHRMaWdodENvbG9yLCB1TWlkTGlnaHRDb2xvciwgdURhcmtMaWdodENvbG9yKTtcXHJcXG4gICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcjtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgc2hpZnRUZW1wZXJhdHVyZSh2ZWM0IHJnYiwgZmxvYXQgZGVnKVxcclxcbntcXHJcXG4gICB2ZWM0IGhzdiA9IHJnYjJoc3YocmdiKTtcXHJcXG4gICBoc3YueCArPSBkZWcgLyAzNjAuMDtcXHJcXG4gICByZXR1cm4gaHN2MnJnYihoc3YpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzQXJ0aXN0KClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgIGlmIChjb2xvci5hID49IDEuMClcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgcGVyY2VudExpZ2h0ID0gY2xhbXAodUJBTExfTElHSFQgLSBjb2xvci5hLCAwLjAsIDEuMCk7XFxyXFxuICAgICAgZmxvYXQgcGVyY2VudFNoYWRvdyA9IDEuMCAtIHBlcmNlbnRMaWdodDtcXHJcXG5cXHJcXG4gICAgICAvLyB0ZW1wZXJhdHVyZSBzaGlmdFxcclxcbiAgICAgIHZlYzQgcmdibGlnaHQgPSBzaGlmdFRlbXBlcmF0dXJlKGNvbG9yLCAtdUJhbGxMaWdodFNoaWZ0KTtcXHJcXG4gICAgICB2ZWM0IHJnYnNoYWRvdyA9IHNoaWZ0VGVtcGVyYXR1cmUoY29sb3IsIC11QmFsbFNoYWRvd1NoaWZ0KTtcXHJcXG4gICAgICB2ZWM0IHJnYm1peCA9IG1peChyZ2JsaWdodCwgcmdic2hhZG93LCBwZXJjZW50U2hhZG93KTtcXHJcXG4gICAgICB2ZWM0IGhzdiA9IHJnYjJoc3YocmdibWl4KTtcXHJcXG5cXHJcXG4gICAgICAvLyBjb3JyZWN0IG92ZXJmbG93c1xcclxcbiAgICAgIGlmIChoc3YueCA+IDEuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgaHN2LnggLT0gMS4wO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmIChoc3YueCA8IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgaHN2LnggKz0gMS4wO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBjaHJvbWEgc2hpZnRcXHJcXG4gICAgICBoc3YueSAqPSAocGVyY2VudExpZ2h0ICogdUJhbGxMaWdodENocm9tYSArIHBlcmNlbnRTaGFkb3cgKiB1QmFsbFNoYWRvd0Nocm9tYSk7XFxyXFxuICAgICAgaHN2LnkgPSBjbGFtcChoc3YueSwgMC4wLCAxLjApO1xcclxcblxcclxcbiAgICAgIC8vIGFkanVzdCBsaWdodC9kYXJrIHZhbHVlIHRvIG1hdGNoIHRoZSBvbGQgdmFsdWUgaW4gcmdiIHNwYWNlXFxyXFxuICAgICAgZmxvYXQgb3JpZ1ZhbHVlID0gdG9HcmF5KGNvbG9yKTtcXHJcXG4gICAgICBmbG9hdCBuZXdWYWx1ZSA9IHRvR3JheShoc3YycmdiKGhzdikpO1xcclxcbiAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgMTAwMDsgaSsrKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBpZiAoYWJzKG9yaWdWYWx1ZSAtIG5ld1ZhbHVlKSA8IDAuMDEpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGhzdi56ICs9IChvcmlnVmFsdWUgLSBuZXdWYWx1ZSkgLyAxMC4wO1xcclxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdG9HcmF5KGhzdjJyZ2IoaHN2KSk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBjb252ZXJ0IGJhY2sgdG8gcmdiXFxyXFxuICAgICAgcmV0dXJuIGhzdjJyZ2IoaHN2KTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3I7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzU2NpZW5jZSgpXFxyXFxue1xcclxcbiAgIC8vIGp1c3QgcmV0dXJuIHRoZSB0ZXh0dXJlXFxyXFxuICAgcmV0dXJuIHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBjb2xvcnNbMF0gPSBibGFjaztcXHJcXG4gICBjb2xvcnNbMV0gPSBibHVlO1xcclxcbiAgIGNvbG9yc1syXSA9IGdyZWVuO1xcclxcbiAgIGNvbG9yc1szXSA9IHllbGxvdztcXHJcXG4gICBjb2xvcnNbNF0gPSBvcmFuZ2U7XFxyXFxuICAgY29sb3JzWzVdID0gcmVkO1xcclxcblxcclxcbiAgIGlmICh1TW9kZSA9PSBNT0RFX1ZBTFVFKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc1ZhbHVlKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQ0hST01BKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc0Nocm9tYSgpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh1TW9kZSA9PSBNT0RFX0FSVElTVClcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNBcnRpc3QoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9CQU5EUylcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNCYW5kcygpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzU2NpZW5jZSgpO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2NhbGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1WE9mZnNldDtcXHJcXG51bmlmb3JtIGZsb2F0IHVZT2Zmc2V0O1xcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHRleENvb3JkID0gdmVydGV4Lnh5ICogMC41ICsgMC41O1xcclxcblxcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh1U2NhbGUgKiB2ZXJ0ZXgueCArIHVYT2Zmc2V0LCB1U2NhbGUgKiB2ZXJ0ZXgueSArIHVZT2Zmc2V0LCAwLjAsIDEuMCk7XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWU7XFxyXFxudmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGV4dHVyZVdlaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVUZXh0dXJlU2l6ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUaW1lU2luY2VTdGFydDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0UG9zO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVCYWxsQ29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1UGFzcztcXHJcXG51bmlmb3JtIGZsb2F0IHVOdW1QYXNzZXM7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2FtcGxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdUJBTExfU1BFQ1VMQVI7XFxyXFxudW5pZm9ybSBmbG9hdCB1QkFMTF9MSUdIVDtcXHJcXG51bmlmb3JtIGZsb2F0IHVCQUxMX1NIQURPVztcXHJcXG5cXHJcXG5jb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDA7XFxyXFxuY29uc3QgZmxvYXQgRVBTSUxPTiA9IDAuMDAwMTtcXHJcXG5jb25zdCBmbG9hdCBJTkZJTklUWSA9IDEwMDAwLjA7XFxyXFxuY29uc3QgZmxvYXQgTElHSFRfU0laRSA9IDAuMTtcXHJcXG5jb25zdCB2ZWMzIEJBTExfQ0VOVEVSID0gdmVjMygwLCAtMC41LCAwKTtcXHJcXG5jb25zdCBmbG9hdCBCQUxMX1JBRElVUyA9IDAuNTtcXHJcXG5jb25zdCB2ZWMzIERPTUVfQ0VOVEVSID0gdmVjMygwLCAwLCAwKTtcXHJcXG5jb25zdCBmbG9hdCBET01FX1JBRElVUyA9IDcuMDtcXHJcXG5jb25zdCBmbG9hdCBWQUwgPSAwLjg7XFxyXFxuY29uc3QgdmVjMyBET01FX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEZMT09SX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEFNQklFTlRfQ09MT1IgPSB2ZWMzKDEuMCwgMS4wLCAxLjApO1xcclxcbmNvbnN0IGludCBOVU1fTElHSFRTID0gNjtcXHJcXG5jb25zdCBmbG9hdCBIRUlHSFQgPSA0LjA7XFxyXFxuY29uc3QgZmxvYXQgUkFESVVTID0gNC4wO1xcclxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTtcXHJcXG5cXHJcXG5zdHJ1Y3QgTGlnaHRcXHJcXG57XFxyXFxuICAgZmxvYXQgaW50ZW5zaXR5O1xcclxcbiAgIGZsb2F0IHNpemU7XFxyXFxuICAgdmVjMyBwb3M7XFxyXFxuICAgdmVjMyBjb2xvcjtcXHJcXG59O1xcclxcblxcclxcbkxpZ2h0IExpZ2h0c1tOVU1fTElHSFRTXTtcXHJcXG5cXHJcXG5mbG9hdCBpbnRlcnNlY3RTcGhlcmUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICB2ZWMzIHRvU3BoZXJlID0gb3JpZ2luIC0gc3BoZXJlQ2VudGVyO1xcclxcbiAgIGZsb2F0IGEgPSBkb3QocmF5LCByYXkpO1xcclxcbiAgIGZsb2F0IGIgPSAyLjAgKiBkb3QodG9TcGhlcmUsIHJheSk7XFxyXFxuICAgZmxvYXQgYyA9IGRvdCh0b1NwaGVyZSwgdG9TcGhlcmUpIC0gc3BoZXJlUmFkaXVzICogc3BoZXJlUmFkaXVzO1xcclxcbiAgIGZsb2F0IGRpc2NyaW1pbmFudCA9IGIgKiBiIC0gNC4wICogYSAqIGM7XFxyXFxuICAgaWYgKGRpc2NyaW1pbmFudCA+IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgdDEgPSAoLWIgLSBzcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIuMCAqIGEpO1xcclxcbiAgICAgIGZsb2F0IHQyID0gKC1iICsgc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBpZiAodDEgPiAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB0MTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodDIgPiAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB0MjtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIHJldHVybiBJTkZJTklUWTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBub3JtYWxGb3JTcGhlcmUodmVjMyBoaXQsIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpXFxyXFxue1xcclxcbiAgIHJldHVybiAoaGl0IC0gc3BoZXJlQ2VudGVyKSAvIHNwaGVyZVJhZGl1cztcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgcmFuZG9tKHZlYzMgc2NhbGUsIGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIHJldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXogKyBzZWVkLCBzY2FsZSkpICogNDM3NTguNTQ1MyArIHNlZWQpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGNvc2luZVdlaWdodGVkRGlyZWN0aW9uKGZsb2F0IHNlZWQsIHZlYzMgbm9ybWFsKVxcclxcbntcXHJcXG4gICBmbG9hdCB1ID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHYgPSByYW5kb20odmVjMyg2My43MjY0LCAxMC44NzMsIDYyMy42NzM2KSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgciA9IHNxcnQodSk7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgLy8gY29tcHV0ZSBiYXNpcyBmcm9tIG5vcm1hbFxcclxcbiAgIHZlYzMgc2RpciwgdGRpcjtcXHJcXG4gICBpZiAoYWJzKG5vcm1hbC54KSA8IC41KVxcclxcbiAgIHtcXHJcXG4gICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDEsIDAsIDApKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDAsIDEsIDApKTtcXHJcXG4gICB9XFxyXFxuICAgdGRpciA9IGNyb3NzKG5vcm1hbCwgc2Rpcik7XFxyXFxuICAgcmV0dXJuIHIgKiBjb3MoYW5nbGUpICogc2RpciArIHIgKiBzaW4oYW5nbGUpICogdGRpciArIHNxcnQoMS4gLSB1KSAqIG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21EaXJlY3Rpb24oZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHogPSAxLjAgLSAyLjAgKiB1O1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KDEuMCAtIHogKiB6KTtcXHJcXG4gICBmbG9hdCBhbmdsZSA9IDYuMjgzMTg1MzA3MTc5NTg2ICogdjtcXHJcXG4gICByZXR1cm4gdmVjMyhyICogY29zKGFuZ2xlKSwgciAqIHNpbihhbmdsZSksIHopO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIHVuaWZvcm1seVJhbmRvbVZlY3RvcihmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKHNlZWQpICogc3FydChyYW5kb20odmVjMygzNi43NTM5LCA1MC4zNjU4LCAzMDYuMjc1OSksIHNlZWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9vbCBpblNoYWRvdyh2ZWMzIG9yaWdpbiwgdmVjMyByYXkpXFxyXFxue1xcclxcbiAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgQkFMTF9SQURJVVMpO1xcclxcbiAgIGlmICh0QmFsbCA8IDEuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCBjYWxjdWxhdGVDb2xvcih2ZWMzIG9yaWdpbiwgdmVjMyByYXkpXFxyXFxue1xcclxcbiAgIHZlYzMgYWNjdW11bGF0ZWRDb2xvciA9IHZlYzMoMC4wKTtcXHJcXG4gICB2ZWMzIGNvbG9yTWFzayA9IHZlYzMoMS4wKTtcXHJcXG4gICB2ZWMzIGV5ZSA9IG9yaWdpbjtcXHJcXG4gICBib29sIGJhbGxIaXQgPSBmYWxzZTtcXHJcXG4gICBib29sIGJhbGxTaGFkb3cgPSBmYWxzZTtcXHJcXG5cXHJcXG4gICAvLyBtYWluIHJheXRyYWNpbmcgbG9vcFxcclxcbiAgIGZvciAoaW50IGJvdW5jZSA9IDA7IGJvdW5jZSA8IE1BWF9CT1VOQ0VTOyBib3VuY2UrKylcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gY29tcHV0ZSB0aGUgaW50ZXJzZWN0aW9uIHdpdGggZXZlcnl0aGluZ1xcclxcbiAgICAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgQkFMTF9SQURJVVMpO1xcclxcbiAgICAgIHZlYzMgc3VyZmFjZUNvbG9yID0gdmVjMygwLjUsIDAuNSwgMC41KTtcXHJcXG5cXHJcXG4gICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGlmIHRoZSBmaXJzdCByYXkgaGl0cyB0aGUgbGlnaHQsIHJldHVybiB0aGUgbGlnaHQgY29sb3IuIFRoaXNcXHJcXG4gICAgICAgICAvLyBzaW11bGF0ZXMgZGlzcGxheWluZyB0aGUgbGlnaHRcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgaWYgKGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgTGlnaHRzW2ldLnBvcywgTGlnaHRzW2ldLnNpemUpIDwgdEJhbGwpXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHJldHVybiB2ZWM0KExpZ2h0c1tpXS5pbnRlbnNpdHkgKiBMaWdodHNbaV0uY29sb3IsIDEuMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZmxvYXQgdERvbWUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIERPTUVfQ0VOVEVSLCBET01FX1JBRElVUyk7XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBpbnRlcnNlY3Rpb25cXHJcXG4gICAgICBmbG9hdCB0ID0gSU5GSU5JVFk7XFxyXFxuICAgICAgZmxvYXQgdGZsb29yID0gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgICAgLy8gY2hlY2sgZm9yIGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmRcXHJcXG4gICAgICBpZiAocmF5LnkgPCAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGRpc3RhbmNlIHRvIGZsb29yID0gbnVtIHVuaXQgdmVjdG9ycyByZXF1aXJlZCB0byByZWFjaCB0aGUgZmxvb3JcXHJcXG4gICAgICAgICB0Zmxvb3IgPSAtKG9yaWdpbi55ICsgMS4wKSAvIHJheS55O1xcclxcbiAgICAgICAgIGlmICh0Zmxvb3IgPCB0KVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB0ID0gdGZsb29yO1xcclxcbiAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBGTE9PUl9DT0xPUjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHRCYWxsIDwgdClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdmVjMyh1QmFsbENvbG9yKTtcXHJcXG4gICAgICAgICB0ID0gdEJhbGw7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBiYWxsSGl0ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHREb21lIDwgdClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRE9NRV9DT0xPUjtcXHJcXG4gICAgICAgICB0ID0gdERvbWU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGluZm8gYWJvdXQgaGl0XFxyXFxuICAgICAgdmVjMyBoaXQgPSBvcmlnaW4gKyByYXkgKiB0O1xcclxcbiAgICAgIHZlYzMgbm9ybWFsO1xcclxcblxcclxcbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsXFxyXFxuICAgICAgaWYgKHQgPT0gdGZsb29yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSB2ZWMzKDAuMCwgMS4wLCAwLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRCYWxsKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JTcGhlcmUoaGl0LCBCQUxMX0NFTlRFUiwgQkFMTF9SQURJVVMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHREb21lKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSAtbm9ybWFsRm9yU3BoZXJlKGhpdCwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgY29sb3JNYXNrICo9IHN1cmZhY2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgICBpZiAobGVuZ3RoKGNvbG9yTWFzaykgPCAwLjAxKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGNvbXB1dGUgZGlmZnVzZSBsaWdodGluZyBjb250cmlidXRpb25cXHJcXG4gICAgICAgICB2ZWMzIHRvTGlnaHQgPSBMaWdodHNbaV0ucG9zIC0gaGl0O1xcclxcblxcclxcbiAgICAgICAgIC8vIHRyYWNlIGEgc2hhZG93IHJheSB0byB0aGUgbGlnaHRcXHJcXG4gICAgICAgICBpZiAoaW5TaGFkb3coaGl0ICsgbm9ybWFsICogRVBTSUxPTiwgdG9MaWdodCkgPT0gZmFsc2UpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIC8vIGRpZmZ1c2UgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlmZnVzZSA9IG1heCgwLjAsIGRvdChub3JtYWxpemUodG9MaWdodCksIG5vcm1hbCkpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIHNwZWN1bGFyIGNvbXBvbmVudFxcclxcbiAgICAgICAgICAgIHZlYzMgdG9FeWUgPSBleWUgLSBoaXQ7XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmwgPSBub3JtYWxpemUodG9MaWdodCk7XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmUgPSBub3JtYWxpemUodG9FeWUpO1xcclxcbiAgICAgICAgICAgIHZlYzMgYmlzZWN0b3IgPSAobjJsICsgbjJlKSAvIGxlbmd0aChuMmwgKyBuMmUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyQ29lZmZpY2llbnQgPSAwLjU7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc2hpbmluZXNzID0gMTAwLjA7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc3BlY3VsYXIgPSBzcGVjdWxhckNvZWZmaWNpZW50ICogcG93KG1heCgwLjAsIGRvdChiaXNlY3Rvciwgbm9ybWFsKSksIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gYXBwbHkgbGlnaHQgZmFsbCBvZmYgYXMgZGlzdGFuY2Ugc3F1YXJlcy4gVXNlIGEgbWluIHZhbHVlIGZvciB0aGVcXHJcXG4gICAgICAgICAgICAvLyBsaWdodCBzaXplIG90aGVyd2lzZSBmYWxsb2ZmIGlzIHRvbyByYXBpZFxcclxcbiAgICAgICAgICAgIGZsb2F0IHJhZGl1cyA9IG1heCgwLjc1LCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IG1heCgxLjAsIChsZW5ndGgodG9MaWdodCkgLSByYWRpdXMpIC8gcmFkaXVzKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBsaWdodEludGVuc2l0eSA9IExpZ2h0c1tpXS5pbnRlbnNpdHkgLyAoZGlzdCAqIGRpc3QpO1xcclxcblxcclxcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gY29sb3JNYXNrICogTGlnaHRzW2ldLmNvbG9yICogbGlnaHRJbnRlbnNpdHkgKiBkaWZmdXNlO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIFRPRE8gZGVmaW5lIGEgY29sb3IgbWFzayBmb3Igc3BlY3VsYXIgcmVmbGVjdGlvblxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBtaXgoc3VyZmFjZUNvbG9yLCBMaWdodHNbaV0uY29sb3IsIDAuOCkgKlxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9XFxyXFxuICAgICAgICAgICAgICAgIChsZW5ndGgoc3VyZmFjZUNvbG9yKSAqIExpZ2h0c1tpXS5jb2xvcikgKiBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlIGlmIChib3VuY2UgPT0gMCAmJiBpID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGJhbGxTaGFkb3cgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIG5leHQgb3JpZ2luXFxyXFxuICAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odVRpbWVTaW5jZVN0YXJ0ICsgZmxvYXQoYm91bmNlKSwgbm9ybWFsKTtcXHJcXG5cXHJcXG4gICAgICBvcmlnaW4gPSBoaXQ7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIGZsb2F0IGFscGhhID0gMS4wO1xcclxcbiAgIGlmIChiYWxsSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAoYmFsbFNoYWRvdylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1QkFMTF9TSEFET1c7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1QkFMTF9MSUdIVDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIHJldHVybiB2ZWM0KGNsYW1wKGFjY3VtdWxhdGVkQ29sb3IsIDAuMCwgMS4wKSwgYWxwaGEpO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBpZiAoZmxvb3IobW9kKGdsX0ZyYWdDb29yZC54LCB1TnVtUGFzc2VzKSkgIT0gdVBhc3MpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh1U2FtcGxlID09IDAuMCAmJiB1UGFzcyA9PSAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHVUZXh0dXJlU2l6ZSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHJldHVybjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gICB2ZWMzIHJhbmQgPSB1bmlmb3JtbHlSYW5kb21WZWN0b3IodVRpbWVTaW5jZVN0YXJ0KSAqIExJR0hUX1NJWkU7XFxyXFxuICAgdmVjMyByYW5kID0gdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHVTYW1wbGUpICogTElHSFRfU0laRTtcXHJcXG5cXHJcXG4gICBMaWdodHNbMF0uaW50ZW5zaXR5ID0gdUxpZ2h0SW50ZW5zaXR5O1xcclxcbiAgIExpZ2h0c1swXS5zaXplID0gTElHSFRfU0laRTtcXHJcXG4gICBMaWdodHNbMF0ucG9zID0gdUxpZ2h0UG9zICsgcmFuZDtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB1TGlnaHRDb2xvcjtcXHJcXG5cXHJcXG4gICBmb3IgKGludCBpID0gMTsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgeCA9IFJBRElVUyAqIHNpbigyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLng7XFxyXFxuICAgICAgZmxvYXQgeSA9IEhFSUdIVCArIHJhbmQueTtcXHJcXG4gICAgICBmbG9hdCB6ID0gUkFESVVTICogY29zKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQuejtcXHJcXG5cXHJcXG4gICAgICBMaWdodHNbaV0uaW50ZW5zaXR5ID0gdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG4gICAgICBMaWdodHNbaV0uc2l6ZSA9IDIuMCAqIExJR0hUX1NJWkU7XFxyXFxuICAgICAgTGlnaHRzW2ldLnBvcyA9IHZlYzMoeCwgeSwgeik7XFxyXFxuICAgICAgTGlnaHRzW2ldLmNvbG9yID0gQU1CSUVOVF9DT0xPUjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gbWVyZ2UgdGhlIG5ldyBjb2xvciBpbnRvIHRoZSBleGlzdGluZyB0ZXh0dXJlXFxyXFxuICAgdmVjNCB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHVUZXh0dXJlU2l6ZSk7XFxyXFxuICAgdmVjNCBuZXdDb2xvciA9IGNhbGN1bGF0ZUNvbG9yKHVFeWUsIGluaXRpYWxSYXkpO1xcclxcbiAgIGdsX0ZyYWdDb2xvciA9IG1peChuZXdDb2xvciwgdGV4dHVyZUNvbG9yLCB1VGV4dHVyZVdlaWdodCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWUsIHVSYXkwMCwgdVJheTAxLCB1UmF5MTAsIHVSYXkxMTtcXHJcXG52YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgodVJheTAwLCB1UmF5MDEsIHBlcmNlbnQueSksIG1peCh1UmF5MTAsIHVSYXkxMSwgcGVyY2VudC55KSwgcGVyY2VudC54KTtcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcclxcbn1cXHJcXG5cIiJdLCJzb3VyY2VSb290IjoiIn0=