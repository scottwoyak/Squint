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
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n.SliderLabel {\r\n  display: inline-block;\r\n  width: 25%;\r\n  text-align: right;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.SliderGroup {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.SliderHeader {\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  color: gray;\r\n}\r\n\r\n.SliderRange {\r\n  width: 50%;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  border-radius: 15px;\r\n  height: 15px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.SliderRange::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n}\r\n\r\n.SliderRange::-moz-range-thumb {\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n  cursor: pointer;\r\n}\r\n\r\n.SliderColorSpan {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 5px;\r\n  border-radius: 50%;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#modeButton {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: yellow;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Style the tab */\r\n.Tabs {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Style the buttons that are used to open the tab content */\r\n.Tabs button {\r\n  background-color: #fff;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  font-size: 12pt;\r\n  color: #333;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n.Tabs button:hover {\r\n  background-color: #ddd;\r\n  color: #000;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n.Tabs button.active {\r\n  background-color: #eee;\r\n  color: #000;\r\n}\r\n\r\n/* Style the tab content */\r\n.TabContent {\r\n  display: none;\r\n  padding: 20px 12px;\r\n  background-color: #eee;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .SliderHeader {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .SliderLabel {\r\n    width: 30%;\r\n    font-size: 40px;\r\n    padding-bottom: 18px;\r\n  }\r\n\r\n  .SliderRange {\r\n    width: 45%;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .SliderRange::-webkit-slider-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderRange::-moz-range-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderColorSpan {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .SliderValueSpan {\r\n    font-size: 40px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #modeButton {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  .Tabs button {\r\n    padding: 20px 40px;\r\n    font-size: 40px;\r\n  }\r\n}\r\n", ""]);
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
            var r = Math.round(this.colors[index].r + partial * (this.colors[index + 1].r - this.colors[index].r));
            var g = Math.round(this.colors[index].g + partial * (this.colors[index + 1].g - this.colors[index].g));
            var b = Math.round(this.colors[index].b + partial * (this.colors[index + 1].b - this.colors[index].b));
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
/*! exports provided: RenderMode, PathTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderMode", function() { return RenderMode; });
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
/* harmony import */ var _Uniforms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Uniforms */ "./src/Uniforms.ts");











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
var PathTracer = /** @class */ (function () {
    function PathTracer() {
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
            _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize, // width
            _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize, // height
            0, // border
            format, // format
            type, // type
            null // pixels
            );
        }
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, null);
        // create render shader
        this.toScreenProgram = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].compileShader(_toScreenVertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"], _toScreenFragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"]);
        this.toScreenVertexAttribute = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getAttribLocation(this.toScreenProgram, 'vertex');
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].enableVertexAttribArray(this.toScreenVertexAttribute);
        this.toTextureProgram = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].compileShader(_toTextureVertex_glsl__WEBPACK_IMPORTED_MODULE_6__["default"], _toTextureFragment_glsl__WEBPACK_IMPORTED_MODULE_7__["default"]);
        this.toTextureVertexAttribute = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getAttribLocation(this.toTextureProgram, 'vertex');
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].enableVertexAttribArray(this.toTextureVertexAttribute);
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
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uSample = 0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uPass = 0;
    };
    PathTracer.prototype.getEyeRay = function (matrix, x, y) {
        var vec = new _glVec__WEBPACK_IMPORTED_MODULE_2__["glVec4"]([x, y, 0, 1]);
        return matrix.multV(vec).divideByW().subtract(_Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uEye);
    };
    PathTracer.prototype.updateTexture = function (modelviewProjection, timeSinceStart) {
        // implement aliasing by random sampling within a pixel
        var x = (Math.random() * 2 - 1) / _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize;
        var y = (Math.random() * 2 - 1) / _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize;
        var z = 0;
        var v = new _glVec__WEBPACK_IMPORTED_MODULE_2__["glVec3"]([x, y, z]);
        var jitter = _glMat__WEBPACK_IMPORTED_MODULE_1__["glMat4"].fromTranslation(v);
        var matrix = jitter.multM(modelviewProjection).invert();
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uRay00 = this.getEyeRay(matrix, -1, -1);
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uRay01 = this.getEyeRay(matrix, -1, +1);
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uRay10 = this.getEyeRay(matrix, +1, -1);
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uRay11 = this.getEyeRay(matrix, +1, +1);
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTimeSinceStart = timeSinceStart;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureWeight = _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uSample / (_Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uSample + 1);
        // set uniforms
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.toTextureProgram);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.toTextureProgram, _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"]);
        // render to texture
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].viewport(0, 0, _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize, _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.toTextureProgram);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[0]);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindBuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindFramebuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, this.frameBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].framebufferTexture2D(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].COLOR_ATTACHMENT0, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[1], 0);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].vertexAttribPointer(this.toTextureVertexAttribute, 2, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, false, 0, 0);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        var data = this.getPixelData();
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uMaxChroma = data.maxChroma;
        var cr = new _ColorRange__WEBPACK_IMPORTED_MODULE_9__["ColorRange"]([data.darkestLightColor.toHtmlColor(), data.avgLightColor.toHtmlColor(), data.lightestLightColor.toHtmlColor()]);
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uHighlightColor = data.highlightColor;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uLightLightColor = cr.get(0.85).toGlColor();
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uMidLightColor = cr.get(0.5).toGlColor();
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uDarkLightColor = cr.get(0.15).toGlColor();
        cr = new _ColorRange__WEBPACK_IMPORTED_MODULE_9__["ColorRange"]([data.darkestShadowColor.toHtmlColor(), data.avgShadowColor.toHtmlColor(), data.lightestShadowColor.toHtmlColor()]);
        //Uniforms.uShadowColor = data.terminatorColor;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uShadowColor = data.avgShadowColor;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uReflectedLightColor = cr.get(1).toGlColor();
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uDarkAccentColor = cr.get(0.0).toGlColor();
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindFramebuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].FRAMEBUFFER, null);
        // ping pong textures
        this.textures.reverse();
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uPass++;
        if (_Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uPass == _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uNumPasses) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uPass = 0;
            _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uSample++;
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
            terminatorColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([0, 0, 0]),
            highlightColor: new _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"]([0, 0, 0]),
        };
        var size = _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize;
        if (this.pixels === undefined) {
            this.pixels = new Float32Array(size * size * 4);
        }
        // TODO handle case when the text type is UNSIGNED_BYTE
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].readPixels(0, 0, _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize, _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uTextureSize, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGBA, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, this.pixels);
        var numLightPixels = 0;
        var numShadowPixels = 0;
        var numTerminatorPixels = 0;
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
                if (a == _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uBALL_LIGHT) {
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
                else if (a == _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uBALL_SHADOW) {
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
                else if (a > _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uBALL_LIGHT) {
                    data.highlightColor = _glColor__WEBPACK_IMPORTED_MODULE_8__["glColor"].lightest(data.highlightColor, color);
                }
                var terminator = (_Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uBALL_LIGHT + _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uBALL_SHADOW) / 2.0;
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
    PathTracer.prototype.displayTexture = function () {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        var size = document.body.clientWidth;
        if (isMobile === false) {
            size = 512;
        }
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.width = size;
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.height = size;
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].viewport(0, 0, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.width, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].canvas.height);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].useProgram(this.toScreenProgram);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[0]);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindBuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].vertexAttribPointer(this.toScreenVertexAttribute, 2, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT, false, 0, 0);
        // display the main screen
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uScale = 1.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uXOffset = 0.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uYOffset = 0.0;
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uMode = this.mainView;
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.toScreenProgram, _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"]);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        // display the smaller views
        _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uScale = 0.25;
        for (var i = 0; i < this.smallViews.length; i++) {
            _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uXOffset = 1.0 - (this.smallViews.length - i - 0.5) * (2 * _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uScale);
            _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uYOffset = 1.0 - _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uScale;
            _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"].uMode = this.smallViews[i];
            _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].setUniforms(this.toScreenProgram, _Uniforms__WEBPACK_IMPORTED_MODULE_10__["Uniforms"]);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].drawArrays(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TRIANGLE_STRIP, 0, 4);
        }
    };
    PathTracer.prototype.swap = function (pos) {
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
    return PathTracer;
}());



/***/ }),

/***/ "./src/Shaders.ts":
/*!************************!*\
  !*** ./src/Shaders.ts ***!
  \************************/
/*! exports provided: Shaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shaders", function() { return Shaders; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _glColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glColor */ "./src/glColor.ts");



var Shaders = /** @class */ (function () {
    function Shaders() {
    }
    Shaders.setUniforms = function (program, uniforms) {
        for (var name in uniforms) {
            var value = uniforms[name];
            var location = _index__WEBPACK_IMPORTED_MODULE_1__["gl"].getUniformLocation(program, name);
            if (location == null)
                continue;
            else if (value instanceof _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]) {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform3fv(location, new Float32Array(value.values));
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


/**
 * Values that are passed to the shader
 */
var Uniforms = {
    uScale: 1.0,
    uXOffset: 0.0,
    uYOffset: 0.0,
    uMode: 0,
    uMaxChroma: 1.0,
    uBallLightShift: 0.0,
    uBallLightTintStrength: 0.5,
    uBallShadowShift: 0.0,
    uBallShadowTintStrength: 0.5,
    uHighlightColor: undefined,
    uLightLightColor: undefined,
    uMidLightColor: undefined,
    uDarkLightColor: undefined,
    uShadowColor: undefined,
    uReflectedLightColor: undefined,
    uDarkAccentColor: undefined,
    uBALL_SPECULAR: 1002,
    uBALL_LIGHT: 1001,
    uBALL_SHADOW: 1000,
    uLightIntensity: 0.7,
    uLightColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([1.0, 1.0, 1.0]),
    uLightPos: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-0.6, 1.7, 0.8]),
    uAmbientLightIntensity: 0.3,
    uBallColor: new _glColor__WEBPACK_IMPORTED_MODULE_0__["glColor"]([0.5, 0.5, 0.8]),
    uBallRadius: 0.5,
    uEye: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uTextureSize: 256,
    uTextureWeight: 0,
    uTimeSinceStart: 0,
    uRay00: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uRay01: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uRay10: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uRay11: new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]),
    uPass: 0.0,
    uNumPasses: 1.0,
    uSample: 0.0,
};


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
/* harmony import */ var _PathTracer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathTracer */ "./src/PathTracer.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _Uniforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Uniforms */ "./src/Uniforms.ts");





var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.tracer = new _PathTracer__WEBPACK_IMPORTED_MODULE_1__["PathTracer"]();
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
        var size = _index__WEBPACK_IMPORTED_MODULE_3__["canvas"].width / 4;
        if (y < size) {
            if (x > _index__WEBPACK_IMPORTED_MODULE_3__["canvas"].width - 1 * size) {
                this.swap(2);
                this.setDescription();
                return true;
            }
            else if (x > _index__WEBPACK_IMPORTED_MODULE_3__["canvas"].width - 2 * size) {
                this.swap(1);
                this.setDescription();
                return true;
            }
            else if (x > _index__WEBPACK_IMPORTED_MODULE_3__["canvas"].width - 3 * size) {
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
            case _PathTracer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Artist:
                description.innerText = "";
                break;
            case _PathTracer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Chroma:
                description.innerText = "Chroma View: red=highest chroma";
                break;
            case _PathTracer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Value:
                description.innerText = "Value View";
                break;
            case _PathTracer__WEBPACK_IMPORTED_MODULE_1__["RenderMode"].Bands:
                description.innerText = "5 Color + Highlight View";
                break;
        }
    };
    App.prototype.updateTexture = function (timeSinceStart) {
        this.modelview = _glMat__WEBPACK_IMPORTED_MODULE_2__["glMat4"].makeLookAt(_Uniforms__WEBPACK_IMPORTED_MODULE_4__["Uniforms"].uEye, new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 1, 0]), // center point
        new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 1, 0]) // up vector
        );
        this.projection = _glMat__WEBPACK_IMPORTED_MODULE_2__["glMat4"].makePerspective(55, 1, 0.1, 100);
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
            _Uniforms__WEBPACK_IMPORTED_MODULE_4__["Uniforms"].uEye.values[0] = _index__WEBPACK_IMPORTED_MODULE_3__["zoomZ"] * Math.sin(_index__WEBPACK_IMPORTED_MODULE_3__["angleY"]) * Math.cos(_index__WEBPACK_IMPORTED_MODULE_3__["angleX"]);
            _Uniforms__WEBPACK_IMPORTED_MODULE_4__["Uniforms"].uEye.values[1] = _index__WEBPACK_IMPORTED_MODULE_3__["zoomZ"] * Math.sin(_index__WEBPACK_IMPORTED_MODULE_3__["angleX"]);
            _Uniforms__WEBPACK_IMPORTED_MODULE_4__["Uniforms"].uEye.values[2] = _index__WEBPACK_IMPORTED_MODULE_3__["zoomZ"] * Math.cos(_index__WEBPACK_IMPORTED_MODULE_3__["angleY"]) * Math.cos(_index__WEBPACK_IMPORTED_MODULE_3__["angleX"]);
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
            1, 0, 0, v.values[0],
            0, 1, 0, v.values[1],
            0, 0, 1, v.values[2],
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
            x.values[0], x.values[1], x.values[2], 0,
            y.values[0], y.values[1], y.values[2], 0,
            z.values[0], z.values[1], z.values[2], 0,
            0, 0, 0, 1
        ]);
        var t = new glMat4([
            1, 0, 0, -eye.values[0],
            0, 1, 0, -eye.values[1],
            0, 0, 1, -eye.values[2],
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
        return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _htmlColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlColor */ "./src/htmlColor.ts");
/* harmony import */ var _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glColorWithTemperature */ "./src/glColorWithTemperature.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _Uniforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Uniforms */ "./src/Uniforms.ts");
/* harmony import */ var _SphericalCoord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SphericalCoord */ "./src/SphericalCoord.ts");







var PointerMode;
(function (PointerMode) {
    PointerMode[PointerMode["View"] = 0] = "View";
    PointerMode[PointerMode["Light"] = 1] = "Light";
})(PointerMode || (PointerMode = {}));
var app;
var gl = null;
var canvas;
var angleX = 0.5;
var angleY = 0.75;
var zoomZ = 3.5;
var pointerMode = PointerMode.View;
var pointerModeSpecial = false;
var pos;
var skinTones = [
    new _htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"]([240, 223, 214]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"]([255, 218, 200]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"]([232, 179, 117]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"]([190, 136, 87]),
    //   new htmlColor([115, 91, 59]),
    new _htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"]([139, 73, 65])
    //   new htmlColor([132, 55, 34]),
    //new htmlColor([61, 12, 2]),
    //   new htmlColor([38, 7, 1])
];
function component() {
    var div = document.createElement('div');
    var container = document.createElement('span');
    container.className = 'container';
    div.appendChild(container);
    var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    container.appendChild(canvas);
    var description = document.createElement('div');
    description.id = 'description';
    container.appendChild(description);
    var button = document.createElement('span');
    button.id = 'modeButton';
    button.innerHTML = 'View';
    pointerMode = PointerMode.View;
    button.onclick = function () {
        switch (pointerMode) {
            case PointerMode.View:
                button.innerHTML = 'Light';
                pointerMode = PointerMode.Light;
                break;
            case PointerMode.Light:
                button.innerHTML = 'View';
                pointerMode = PointerMode.View;
                break;
        }
    };
    container.appendChild(button);
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));
    var intensitySlider = new _Slider__WEBPACK_IMPORTED_MODULE_4__["Slider"](div, {
        id: 'LightIntensity',
        label: 'Light Intensity',
        min: 0,
        max: 100,
        value: _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uLightIntensity * 100,
        colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"].white],
        oninput: function () {
            _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uLightIntensity = intensitySlider.value / 100;
            app.restart();
        }
    });
    // build a range of colors
    var min = 2000;
    var max = 10000;
    var colors = [];
    for (var i = 0; i < 10; i++) {
        var temp = min + (i / 9) * (max - min);
        colors.push(_glColorWithTemperature__WEBPACK_IMPORTED_MODULE_3__["glColorWithTemperature"].create(temp).toHtmlColor());
    }
    var lightColorSlider = new _Slider__WEBPACK_IMPORTED_MODULE_4__["Slider"](div, {
        id: 'LightColor',
        label: 'Light Color',
        min: 2000,
        max: 10000,
        value: _glColorWithTemperature__WEBPACK_IMPORTED_MODULE_3__["glColorWithTemperature"].daylight.temperature,
        colors: colors,
        oninput: setLightColor,
        getText: function (slider) { return slider.value.toFixed() + "K"; }
    });
    // apply the initial colors
    setLightColor();
    function setLightColor() {
        // update the colors for the intensity slider
        intensitySlider.colors = [_htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"].black, lightColorSlider.htmlColor];
        // use the value in rendering
        _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uLightColor = lightColorSlider.glColor;
        if (app) {
            app.restart();
        }
    }
    var ballColorSlider = new _Slider__WEBPACK_IMPORTED_MODULE_4__["Slider"](div, {
        id: 'BallColor',
        label: 'Ball Color',
        min: 0,
        max: 100,
        value: 50,
        colors: skinTones,
        oninput: function () {
            _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uBallColor = ballColorSlider.glColor;
            app.restart();
        }
    });
    // make sure gl matches the initial UI setting
    _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uBallColor = ballColorSlider.glColor;
    var ambientIntensitySlider = new _Slider__WEBPACK_IMPORTED_MODULE_4__["Slider"](div, {
        id: 'AmbientIntensity',
        label: 'Ambient Light',
        min: 0,
        max: 100,
        value: _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uAmbientLightIntensity * 100,
        colors: [_htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"].black, _htmlColor__WEBPACK_IMPORTED_MODULE_2__["htmlColor"].white],
        oninput: function () {
            _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uAmbientLightIntensity = ambientIntensitySlider.value / 100;
            app.restart();
        }
    });
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
        app = new _app__WEBPACK_IMPORTED_MODULE_0__["App"]();
        canvas.ontouchstart = function (event) {
            event.preventDefault();
            if (event.touches.length === 1) {
                var x = event.touches[0].clientX;
                var y = event.touches[0].clientY;
                onDown(event.touches[0].clientX, event.touches[0].clientY);
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
            onDown(event.x, event.y);
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
function onDown(x, y) {
    if (app.click(x, y)) {
        return;
    }
    ;
    pointerModeSpecial = (x < 0.1 * canvas.width) ? true : false;
    oldX = x;
    oldY = y;
    pos = _SphericalCoord__WEBPACK_IMPORTED_MODULE_6__["SphericalCoord"].fromXYZ(_Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uLightPos.values);
    mouseDown = true;
}
function onMove(x, y) {
    if (mouseDown) {
        if (pointerMode === PointerMode.View) {
            if (pointerModeSpecial) {
                zoomZ += (y - oldY) * 0.01;
                zoomZ = clamp(zoomZ, 1, 6);
            }
            else {
                // update the angles based on how far we moved since last time
                angleY -= (x - oldX) * 0.01;
                angleX += (y - oldY) * 0.01;
                // don't go upside down
                angleX = Math.max(angleX, -Math.PI / 2 + 0.01);
                angleX = Math.min(angleX, Math.PI / 2 - 0.01);
            }
        }
        else if (pointerMode === PointerMode.Light) {
            if (pointerModeSpecial) {
                pos.radius -= (y - oldY) * 0.005;
                pos.radius = clamp(pos.radius, _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uBallRadius + 0.5, 5);
                _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uLightPos.values = pos.toXYZ();
            }
            else {
                pos.rotationAngle += (x - oldX);
                pos.elevationAngle += (y - oldY);
                pos.elevationAngle = clamp(pos.elevationAngle, 0, 180);
                _Uniforms__WEBPACK_IMPORTED_MODULE_5__["Uniforms"].uLightPos.values = pos.toXYZ();
            }
        }
        // clear the sample buffer
        app.restart();
        // remember this coordinate
        oldX = x;
        oldY = y;
    }
}
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
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\nvarying vec2 texCoord;\r\nuniform sampler2D uTexture;\r\nuniform int uMode;\r\nuniform float uMaxChroma;\r\n\r\nuniform vec3 uHighlightColor;\r\nuniform vec3 uLightLightColor;\r\nuniform vec3 uMidLightColor;\r\nuniform vec3 uDarkLightColor;\r\n\r\nuniform vec3 uShadowColor;\r\nuniform vec3 uReflectedLightColor;\r\nuniform vec3 uDarkAccentColor;\r\n\r\nuniform float uBALL_SPECULAR;\r\nuniform float uBALL_LIGHT;\r\nuniform float uBALL_SHADOW;\r\n\r\n#define MODE_SCIENCE 0\r\n#define MODE_VALUE 1\r\n#define MODE_CHROMA 2\r\n#define MODE_BANDS 3\r\n\r\nvec4 white = vec4(1.0, 1.0, 1.0, 1.0);\r\nvec4 red = vec4(1.0, 0.0, 0.0, 1.0);\r\nvec4 orange = vec4(1.0, 0.65, 0.0, 1.0);\r\nvec4 yellow = vec4(1.0, 1.0, 0.0, 1.0);\r\nvec4 green = vec4(0.0, 1.0, 0.0, 1.0);\r\nvec4 cyan = vec4(0.0, 1.0, 1.0, 1.0);\r\nvec4 blue = vec4(0.0, 0.0, 1.0, 1.0);\r\nvec4 black = vec4(0.0, 0.0, 0.0, 1.0);\r\n#define NUM_COLORS 6\r\nvec4 colors[NUM_COLORS];\r\n\r\nvec4 value2Color(float value)\r\n{\r\n   float span = 1.0 / float(NUM_COLORS - 1);\r\n   value *= float(NUM_COLORS - 1);\r\n   if (value < 0.0)\r\n   {\r\n      return colors[0];\r\n   }\r\n   else if (value < 1.0)\r\n   {\r\n      return colors[0] + value * (colors[1] - colors[0]);\r\n   }\r\n   else if (value < 2.0)\r\n   {\r\n      return colors[1] + (value - 1.0) * (colors[2] - colors[1]);\r\n   }\r\n   else if (value < 3.0)\r\n   {\r\n      return colors[2] + (value - 2.0) * (colors[3] - colors[2]);\r\n   }\r\n   else if (value < 4.0)\r\n   {\r\n      return colors[3] + (value - 3.0) * (colors[4] - colors[3]);\r\n   }\r\n   else if (value < 5.0)\r\n   {\r\n      return colors[4] + (value - 4.0) * (colors[5] - colors[4]);\r\n   }\r\n   /*\r\n   else if (value < 6.0)\r\n   {\r\n      return colors[5] + (value - 5.0) * (colors[6] - colors[5]);\r\n   }\r\n   */\r\n   else\r\n   {\r\n      return colors[NUM_COLORS - 1];\r\n   }\r\n}\r\n\r\nfloat toGray(vec4 c)\r\n{\r\n   // lots of ways to convert RGB to gray scale.\r\n\r\n   // simple averaging method\r\n   // return (c.r + c.g + c.b) / 3.0;\r\n\r\n   // relative perceptual values\r\n   // return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\r\n\r\n   // luminosity measure\r\n   float gamma = 2.2;\r\n   float y = 0.2126 * pow(c.r, gamma) + 0.7152 * pow(c.g, gamma) + .0722 * pow(c.b, gamma);\r\n   float l = 116.0 * pow(y, 1.0 / 3.0) - 16.0;\r\n   return l / 100.0;\r\n}\r\n\r\nvec4 renderAsValue()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n   float rgb = toGray(color);\r\n   return vec4(rgb, rgb, rgb, 1.0);\r\n}\r\n\r\nvec4 renderAsChroma()\r\n{\r\n   vec4 color = texture2D(uTexture, texCoord);\r\n\r\n   // render the scale as a bar on the left\r\n   if (texCoord.x < 0.03)\r\n   {\r\n      return value2Color((texCoord.y - 0.1) / 0.9);\r\n   }\r\n   else\r\n   {\r\n      if (color.a >= uBALL_SHADOW)\r\n      {\r\n         float avg = (color.r + color.g + color.b) / 3.0;\r\n         float rgb = (abs(avg - color.r) + abs(avg - color.g) + abs(avg - color.b)) / (4.0 / 3.0);\r\n         return value2Color(rgb / uMaxChroma);\r\n      }\r\n      else\r\n      {\r\n         return vec4(0.0, 0.0, 0.0, 1.0);\r\n      }\r\n   }\r\n}\r\n\r\nfloat d2(vec3 c1, vec3 c2)\r\n{\r\n   // sum the squares of the differences\r\n   return pow(c1.r - c2.r, 2.0) + pow(c1.g - c2.g, 2.0) + pow(c1.b - c2.b, 2.0);\r\n}\r\n\r\nvec3 closest(vec3 color, vec3 light, vec3 mid, vec3 dark)\r\n{\r\n   float dlight = d2(color, light);\r\n   float dmid = d2(color, mid);\r\n   float ddark = d2(color, dark);\r\n\r\n   float dmin = min(dlight, min(dmid, ddark));\r\n   if (dmin == dlight)\r\n   {\r\n      return light;\r\n   }\r\n   else if (dmin == dmid)\r\n   {\r\n      return mid;\r\n   }\r\n   else\r\n   {\r\n      return dark;\r\n   }\r\n}\r\n\r\nvec4 renderAsBands()\r\n{\r\n   float size = 0.07;\r\n   float margin = (1.0 - 6.0 * size) / 2.0;\r\n   if (texCoord.x < size && texCoord.y > margin && texCoord.y < (1.0 - margin))\r\n   {\r\n      if (texCoord.y < (margin + 1.0 * size))\r\n      {\r\n         return vec4(uDarkAccentColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 2.0 * size))\r\n      {\r\n         return vec4(uShadowColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 3.0 * size))\r\n      {\r\n         return vec4(uDarkLightColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 4.0 * size))\r\n      {\r\n         return vec4(uMidLightColor, 1.0);\r\n      }\r\n      else if (texCoord.y < (margin + 5.0 * size))\r\n      {\r\n         return vec4(uLightLightColor, 1.0);\r\n      }\r\n      else // if (texCoord.y < (margin + 7.0 * size))\r\n      {\r\n         return vec4(uHighlightColor, 1.0);\r\n      }\r\n   }\r\n   else\r\n   {\r\n      vec4 color = texture2D(uTexture, texCoord);\r\n\r\n      // define the terminator as the point where things are 50% in shadow\r\n      float terminator = ((uBALL_SHADOW + uBALL_LIGHT) / 2.0);\r\n      if (color.a > 1.0 && color.a <= terminator)\r\n      {\r\n         vec3 c = closest(color.rgb, uShadowColor, uReflectedLightColor, uDarkAccentColor);\r\n         return vec4(c, 1.0);\r\n      }\r\n      else if (color.a > terminator)\r\n      {\r\n         // only render the highlight where it's contribution is significant, i.e. greater\r\n         // than some threshold\r\n         const float SPECULAR_THRESHOLD = 0.1;\r\n         if (color.a > (uBALL_LIGHT + SPECULAR_THRESHOLD))\r\n         {\r\n            return vec4(uHighlightColor, 1.0);\r\n         }\r\n         else\r\n         {\r\n            vec3 c = closest(color.rgb, uLightLightColor, uMidLightColor, uDarkLightColor);\r\n            return vec4(c, 1.0);\r\n         }\r\n      }\r\n      else\r\n      {\r\n         return color;\r\n      }\r\n   }\r\n}\r\n\r\nvec4 renderAsScience()\r\n{\r\n   // just return the texture\r\n   return texture2D(uTexture, texCoord);\r\n}\r\n\r\nvoid main()\r\n{\r\n   colors[0] = black;\r\n   colors[1] = blue;\r\n   colors[2] = green;\r\n   colors[3] = yellow;\r\n   colors[4] = orange;\r\n   colors[5] = red;\r\n\r\n   if (uMode == MODE_VALUE)\r\n   {\r\n      gl_FragColor = renderAsValue();\r\n   }\r\n   else if (uMode == MODE_CHROMA)\r\n   {\r\n      gl_FragColor = renderAsChroma();\r\n   }\r\n   else if (uMode == MODE_BANDS)\r\n   {\r\n      gl_FragColor = renderAsBands();\r\n   }\r\n   else\r\n   {\r\n      gl_FragColor = renderAsScience();\r\n   }\r\n}\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\nuniform vec3 uEye;\r\nvarying vec3 initialRay;\r\nuniform float uTextureWeight;\r\nuniform float uTextureSize;\r\nuniform float uTimeSinceStart;\r\nuniform sampler2D uTexture;\r\nuniform vec3 uLightPos;\r\nuniform float uLightIntensity;\r\nuniform vec3 uLightColor;\r\nuniform float uAmbientLightIntensity;\r\nuniform vec3 uBallColor;\r\nuniform float uBallRadius;\r\nuniform float uPass;\r\nuniform float uNumPasses;\r\nuniform float uSample;\r\nuniform float uBALL_SPECULAR;\r\nuniform float uBALL_LIGHT;\r\nuniform float uBALL_SHADOW;\r\n\r\nuniform float uBallLightShift;\r\nuniform float uBallLightTintStrength;\r\n\r\nuniform float uBallShadowShift;\r\nuniform float uBallShadowTintStrength;\r\n\r\nconst int MAX_BOUNCES = 100;\r\nconst float EPSILON = 0.0001;\r\nconst float INFINITY = 10000.0;\r\nconst float LIGHT_SIZE = 0.1;\r\nvec3 BALL_CENTER = vec3(0, uBallRadius, 0);\r\nconst vec3 DOME_CENTER = vec3(0, 0, 0);\r\nconst float DOME_RADIUS = 7.0;\r\nconst float VAL = 0.8;\r\nconst vec3 DOME_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 FLOOR_COLOR = vec3(VAL, VAL, VAL);\r\nconst vec3 AMBIENT_COLOR = vec3(1.0, 1.0, 1.0);\r\nconst int NUM_LIGHTS = 6;\r\nconst float HEIGHT = 4.0;\r\nconst float RADIUS = 4.0;\r\nconst float PI = 3.14159265;\r\n\r\nstruct Light\r\n{\r\n   float intensity;\r\n   float size;\r\n   vec3 pos;\r\n   vec3 color;\r\n};\r\n\r\nLight Lights[NUM_LIGHTS];\r\n\r\nfloat intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   vec3 toSphere = origin - sphereCenter;\r\n   float a = dot(ray, ray);\r\n   float b = 2.0 * dot(toSphere, ray);\r\n   float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;\r\n   float discriminant = b * b - 4.0 * a * c;\r\n   if (discriminant > 0.0)\r\n   {\r\n      float t1 = (-b - sqrt(discriminant)) / (2.0 * a);\r\n      float t2 = (-b + sqrt(discriminant)) / (2.0 * a);\r\n      if (t1 > 0.0)\r\n      {\r\n         return t1;\r\n      }\r\n      else if (t2 > 0.0)\r\n      {\r\n         return t2;\r\n      }\r\n   }\r\n   return INFINITY;\r\n}\r\n\r\nvec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius)\r\n{\r\n   return (hit - sphereCenter) / sphereRadius;\r\n}\r\n\r\nfloat random(vec3 scale, float seed)\r\n{\r\n   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\r\n}\r\n\r\nvec3 cosineWeightedDirection(float seed, vec3 normal)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float r = sqrt(u);\r\n   float angle = 6.283185307179586 * v;\r\n   // compute basis from normal\r\n   vec3 sdir, tdir;\r\n   if (abs(normal.x) < .5)\r\n   {\r\n      sdir = cross(normal, vec3(1, 0, 0));\r\n   }\r\n   else\r\n   {\r\n      sdir = cross(normal, vec3(0, 1, 0));\r\n   }\r\n   tdir = cross(normal, sdir);\r\n   return r * cos(angle) * sdir + r * sin(angle) * tdir + sqrt(1. - u) * normal;\r\n}\r\n\r\nvec3 uniformlyRandomDirection(float seed)\r\n{\r\n   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\r\n   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\r\n   float z = 1.0 - 2.0 * u;\r\n   float r = sqrt(1.0 - z * z);\r\n   float angle = 6.283185307179586 * v;\r\n   return vec3(r * cos(angle), r * sin(angle), z);\r\n}\r\n\r\nvec3 uniformlyRandomVector(float seed)\r\n{\r\n   return uniformlyRandomDirection(seed) * sqrt(random(vec3(36.7539, 50.3658, 306.2759), seed));\r\n}\r\n\r\nbool inShadow(vec3 origin, vec3 ray)\r\n{\r\n   float tBall = intersectSphere(origin, ray, BALL_CENTER, uBallRadius);\r\n   if (tBall < 1.0)\r\n   {\r\n      return true;\r\n   }\r\n   else\r\n   {\r\n      return false;\r\n   }\r\n}\r\n\r\n// All components are in the range [0…1], including hue.\r\nvec4 rgb2hsv(vec4 c)\r\n{\r\n   vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\r\n   vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\r\n   vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\r\n\r\n   float d = q.x - min(q.w, q.y);\r\n   float e = 1.0e-10;\r\n   return vec4(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x, c.a);\r\n}\r\n\r\n// All components are in the range[0…1], including hue.\r\nvec4 hsv2rgb(vec4 c)\r\n{\r\n   vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r\n   vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r\n   return vec4(c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y), c.a);\r\n}\r\n\r\nvec4 shiftTemperature(vec4 rgb, float deg, float tintStrength)\r\n{\r\n   vec4 hsv = rgb2hsv(rgb);\r\n   hsv.x += deg / 360.0;\r\n   vec4 fullTintRgb = hsv2rgb(hsv);\r\n\r\n   return mix(rgb, fullTintRgb, tintStrength);\r\n}\r\n\r\n// TODO move to a common file\r\nfloat toGray(vec4 c)\r\n{\r\n   // lots of ways to convert RGB to gray scale.\r\n\r\n   // simple averaging method\r\n   // return (c.r + c.g + c.b) / 3.0;\r\n\r\n   // relative perceptual values\r\n   // return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\r\n\r\n   // luminosity measure\r\n   float gamma = 2.2;\r\n   float y = 0.2126 * pow(c.r, gamma) + 0.7152 * pow(c.g, gamma) + .0722 * pow(c.b, gamma);\r\n   float l = 116.0 * pow(y, 1.0 / 3.0) - 16.0;\r\n   return l / 100.0;\r\n}\r\n\r\nvec4 toArtist(vec4 color)\r\n{\r\n   float percentShadow = clamp(uBALL_LIGHT - color.a, 0.0, 1.0);\r\n   float percentLight = 1.0 - percentShadow;\r\n\r\n   // temperature shift\r\n   vec4 rgblight = shiftTemperature(color, -uBallLightShift, uBallLightTintStrength);\r\n   vec4 rgbshadow = shiftTemperature(color, -uBallShadowShift, uBallShadowTintStrength);\r\n   vec4 rgbmix = mix(rgblight, rgbshadow, percentShadow);\r\n   vec4 hsv = rgb2hsv(rgbmix);\r\n\r\n   // correct overflows\r\n   if (hsv.x > 1.0)\r\n   {\r\n      hsv.x -= 1.0;\r\n   }\r\n   else if (hsv.x < 0.0)\r\n   {\r\n      hsv.x += 1.0;\r\n   }\r\n\r\n   // adjust light/dark value to match the old value in rgb space\r\n   float origValue = toGray(color);\r\n   float newValue = toGray(hsv2rgb(hsv));\r\n   for (int i = 0; i < 1000; i++)\r\n   {\r\n      if (abs(origValue - newValue) < 0.01)\r\n      {\r\n         break;\r\n      }\r\n      else\r\n      {\r\n         hsv.z += (origValue - newValue) / 10.0;\r\n         newValue = toGray(hsv2rgb(hsv));\r\n      }\r\n   }\r\n\r\n   // convert back to rgb\r\n   return hsv2rgb(clamp(hsv, 0.0, 1.0));\r\n}\r\n\r\nvec4 calculateColor(vec3 origin, vec3 ray)\r\n{\r\n   vec3 accumulatedColor = vec3(0.0);\r\n   vec3 colorMask = vec3(1.0);\r\n   vec3 eye = origin;\r\n   bool ballHit = false;\r\n   bool ballShadow = false;\r\n   float specularContribution = 0.0;\r\n\r\n   // main raytracing loop\r\n   for (int bounce = 0; bounce < MAX_BOUNCES; bounce++)\r\n   {\r\n      // compute the intersection with everything\r\n      float tBall = intersectSphere(origin, ray, BALL_CENTER, uBallRadius);\r\n      vec3 surfaceColor = vec3(0.5, 0.5, 0.5);\r\n\r\n      if (bounce == 0)\r\n      {\r\n         // if the first ray hits the light, return the light color. This\r\n         // simulates displaying the light\r\n         for (int i = 0; i < NUM_LIGHTS; i++)\r\n         {\r\n            if (intersectSphere(origin, ray, Lights[i].pos, Lights[i].size) < tBall)\r\n            {\r\n               return vec4(Lights[i].intensity * Lights[i].color, 1.0);\r\n            }\r\n         }\r\n      }\r\n\r\n      float tDome = intersectSphere(origin, ray, DOME_CENTER, DOME_RADIUS);\r\n\r\n      // find the closest intersection\r\n      float t = INFINITY;\r\n      float tfloor = INFINITY;\r\n\r\n      // check for intersection with the ground\r\n      if (ray.y < 0.0)\r\n      {\r\n         // distance to floor = num unit vectors required to reach the floor\r\n         tfloor = -origin.y / ray.y;\r\n         if (tfloor < t)\r\n         {\r\n            t = tfloor;\r\n         }\r\n\r\n         surfaceColor = FLOOR_COLOR;\r\n      }\r\n\r\n      if (tBall < t)\r\n      {\r\n         surfaceColor = vec3(uBallColor);\r\n         t = tBall;\r\n\r\n         if (bounce == 0)\r\n         {\r\n            ballHit = true;\r\n         }\r\n      }\r\n      else if (tDome < t)\r\n      {\r\n         surfaceColor = DOME_COLOR;\r\n         t = tDome;\r\n      }\r\n\r\n      // info about hit\r\n      vec3 hit = origin + ray * t;\r\n      vec3 normal;\r\n\r\n      // calculate the normal\r\n      if (t == tfloor)\r\n      {\r\n         normal = vec3(0.0, 1.0, 0.0);\r\n      }\r\n      else if (t == tBall)\r\n      {\r\n         normal = normalForSphere(hit, BALL_CENTER, uBallRadius);\r\n      }\r\n      else if (t == tDome)\r\n      {\r\n         normal = -normalForSphere(hit, DOME_CENTER, DOME_RADIUS);\r\n      }\r\n      else\r\n      {\r\n         break;\r\n      }\r\n\r\n      colorMask *= surfaceColor;\r\n\r\n      if (length(colorMask) < 0.01)\r\n      {\r\n         break;\r\n      }\r\n\r\n      for (int i = 0; i < NUM_LIGHTS; i++)\r\n      {\r\n         // compute diffuse lighting contribution\r\n         vec3 toLight = Lights[i].pos - hit;\r\n\r\n         // trace a shadow ray to the light\r\n         if (inShadow(hit + normal * EPSILON, toLight) == false)\r\n         {\r\n            // diffuse component\r\n            float diffuse = max(0.0, dot(normalize(toLight), normal));\r\n\r\n            // specular component\r\n            vec3 toEye = eye - hit;\r\n            vec3 n2l = normalize(toLight);\r\n            vec3 n2e = normalize(toEye);\r\n            vec3 bisector = (n2l + n2e) / length(n2l + n2e);\r\n            float specularCoefficient = 0.5;\r\n            float shininess = 100.0;\r\n            float specular = specularCoefficient * pow(max(0.0, dot(bisector, normal)), shininess);\r\n\r\n            // apply light fall off as distance squares. Use a min value for the\r\n            // light size otherwise falloff is too rapid\r\n            float radius = max(0.75, Lights[i].size);\r\n            float dist = max(1.0, (length(toLight) - radius) / radius);\r\n            float lightIntensity = Lights[i].intensity / (dist * dist);\r\n\r\n            accumulatedColor += colorMask * Lights[i].color * lightIntensity * diffuse;\r\n\r\n            // TODO define a color mask for specular reflection\r\n            //            accumulatedColor += mix(surfaceColor, Lights[i].color, 0.8) *\r\n            //            lightIntensity * specular;\r\n            accumulatedColor +=\r\n                (length(surfaceColor) * Lights[i].color) * lightIntensity * specular;\r\n\r\n            if (bounce == 0 && i == 0)\r\n            {\r\n               specularContribution += lightIntensity * specular;\r\n            }\r\n         }\r\n         else if (bounce == 0 && i == 0)\r\n         {\r\n            ballShadow = true;\r\n         }\r\n      }\r\n\r\n      // calculate next origin\r\n      ray = cosineWeightedDirection(uTimeSinceStart + float(bounce), normal);\r\n\r\n      origin = hit;\r\n   }\r\n\r\n   float alpha = 1.0;\r\n   if (ballHit)\r\n   {\r\n      if (ballShadow)\r\n      {\r\n         alpha = uBALL_SHADOW;\r\n      }\r\n      else\r\n      {\r\n         alpha = uBALL_LIGHT;\r\n      }\r\n      alpha += clamp(specularContribution, 0.0, 1.0);\r\n   }\r\n\r\n   vec4 scienceColor = vec4(clamp(accumulatedColor, 0.0, 1.0), alpha);\r\n   return scienceColor;\r\n   /*\r\n   if (ballHit)\r\n   {\r\n      return vec4(toArtist(scienceColor).rgb, alpha);\r\n   }\r\n   else\r\n   {\r\n      return scienceColor;\r\n   }\r\n   */\r\n}\r\n\r\nvoid main()\r\n{\r\n   if (floor(mod(gl_FragCoord.x, uNumPasses)) != uPass)\r\n   {\r\n      if (uSample == 0.0 && uPass == 0.0)\r\n      {\r\n         gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r\n      }\r\n      else\r\n      {\r\n         gl_FragColor = texture2D(uTexture, gl_FragCoord.xy / uTextureSize);\r\n      }\r\n      return;\r\n   }\r\n\r\n   //   vec3 rand = uniformlyRandomVector(uTimeSinceStart) * LIGHT_SIZE;\r\n   vec3 rand = uniformlyRandomVector(uSample) * LIGHT_SIZE;\r\n\r\n   Lights[0].intensity = uLightIntensity;\r\n   Lights[0].size = LIGHT_SIZE;\r\n   Lights[0].pos = uLightPos + rand;\r\n   Lights[0].color = uLightColor;\r\n\r\n   for (int i = 1; i < NUM_LIGHTS; i++)\r\n   {\r\n      float x = RADIUS * sin(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + rand.x;\r\n      float y = HEIGHT + rand.y;\r\n      float z = RADIUS * cos(2.0 * PI * float(i) / (float(NUM_LIGHTS) - 1.0)) + rand.z;\r\n\r\n      Lights[i].intensity = uAmbientLightIntensity;\r\n      Lights[i].size = 2.0 * LIGHT_SIZE;\r\n      Lights[i].pos = vec3(x, y, z);\r\n      Lights[i].color = AMBIENT_COLOR;\r\n   }\r\n\r\n   // merge the new color into the existing texture\r\n   vec4 textureColor = texture2D(uTexture, gl_FragCoord.xy / uTextureSize);\r\n   vec4 newColor = calculateColor(uEye, initialRay);\r\n   gl_FragColor = mix(newColor, textureColor, uTextureWeight);\r\n}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9Db2xvclJhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy9QYXRoVHJhY2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9TaGFkZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwaGVyaWNhbENvb3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9Vbmlmb3Jtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nbENvbG9yV2l0aFRlbXBlcmF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9nbE1hdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xWZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly8vLi9zcmMvdG9TY3JlZW5GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90b1NjcmVlblZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90b1RleHR1cmVGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy90b1RleHR1cmVWZXJ0ZXguZ2xzbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFF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LEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNsRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDO0tBQ3JFLENBQUM7SUF1REwsNkJB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QUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0YsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEMsNEJBQTRCO1FBQzVCLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcs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ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJMYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyR3JvdXAge1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckhlYWRlciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xcclxcbiAgYm9yZGVyOiBncmF5O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyZWVuLCBkYXJrZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckNvbG9yU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiBncmF5O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kZUJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgdGFiICovXFxyXFxuLlRhYnMge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xcclxcbi5UYWJzIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB0O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cXHJcXG4uVGFicyBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xcclxcbi5UYWJzIGJ1dHRvbi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cXHJcXG4uVGFiQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMjBweCAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5TbGlkZXJIZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyTGFiZWwge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclZhbHVlU3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbW9kZUJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5UYWJzIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgcmVwcmVzZW50aW5nIGNvbG9yIHZhbHVlcy4gVmFsdWVzIG1heSBiZSBvbiBhIDAtMSBvciAwLTI1NSBzY2FsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgIHB1YmxpYyByOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBnOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBiOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIFJHQiB2YWx1ZXMgdG8gc3RvcmUgaW4gdGhpcyBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5yID0gY29sb3JbMF07XHJcbiAgICAgIHRoaXMuZyA9IGNvbG9yWzFdO1xyXG4gICAgICB0aGlzLmIgPSBjb2xvclsyXTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJwb2xhdGVzIGFuZCBhcnJheSBvZiBjb2xvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvclJhbmdlIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSBjb2xvcnNcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29sb3JzOiBodG1sQ29sb3JbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9ycyBUaGUgY29sb3JzIHRvIGludGVycG9sYXRlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG4gICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYW4gaW50ZXJwb2xhdGVkIGNvbG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCh2YWx1ZTogbnVtYmVyKTogaHRtbENvbG9yIHtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKTtcclxuICAgICAgICAgbGV0IHBhcnRpYWwgPSAodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSAtIGluZGV4O1xyXG5cclxuICAgICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5yICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLnIgLSB0aGlzLmNvbG9yc1tpbmRleF0ucikpO1xyXG4gICAgICAgICBsZXQgZyA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLmcgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uZyAtIHRoaXMuY29sb3JzW2luZGV4XS5nKSk7XHJcbiAgICAgICAgIGxldCBiID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uYiArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5iIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmIpKTtcclxuXHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiXHJcbmltcG9ydCB7IFNoYWRlcnMgfSBmcm9tICcuL1NoYWRlcnMnO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tICcuL2dsTWF0JztcclxuaW1wb3J0IHsgZ2xWZWMzLCBnbFZlYzQgfSBmcm9tICcuL2dsVmVjJztcclxuaW1wb3J0IHsgZ2wgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHRvU2NyZWVuVmVydGV4U291cmNlIGZyb20gJy4vdG9TY3JlZW5WZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1NjcmVlbkZyYWdtZW50U291cmNlIGZyb20gJy4vdG9TY3JlZW5GcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHRvVGV4dHVyZVZlcnRleFNvdXJjZSBmcm9tICcuL3RvVGV4dHVyZVZlcnRleC5nbHNsJztcclxuaW1wb3J0IHRvVGV4dHVyZUZyYWdtZW50U291cmNlIGZyb20gJy4vdG9UZXh0dXJlRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tICcuL2dsQ29sb3InO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSAnLi9Db2xvclJhbmdlJztcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tICcuL1VuaWZvcm1zJztcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJpbmcgbW9kZSBmb3IgZGlzcGxheWluZyB0aGUgdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGVudW0gUmVuZGVyTW9kZSB7XHJcbiAgIEFydGlzdCA9IDAsXHJcbiAgIFZhbHVlID0gMSxcclxuICAgQ2hyb21hID0gMixcclxuICAgQmFuZHMgPSAzLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVBpeGVsRGF0YSB7XHJcbiAgIG1heENocm9tYTogbnVtYmVyLFxyXG4gICBoaWdobGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgYXZnTGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgbGlnaHRlc3RMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBkYXJrZXN0TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgYXZnU2hhZG93Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGxpZ2h0ZXN0U2hhZG93Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGRhcmtlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgdGVybWluYXRvckNvbG9yOiBnbENvbG9yLFxyXG59XHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGRvZXMgdGhlIHdvcmsgb2YgYnVpbGRpbmcgdGhlIFBhdGggVHJhY2VkIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyIHtcclxuXHJcbiAgIHByaXZhdGUgdmVydGV4QnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuXHJcbiAgIHByaXZhdGUgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XHJcbiAgIHByaXZhdGUgdGV4dHVyZXM6IFdlYkdMVGV4dHVyZVtdO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdG9UZXh0dXJlUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIHBpeGVsczogRmxvYXQzMkFycmF5O1xyXG5cclxuICAgcHJpdmF0ZSBtYWluVmlldyA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICBwcml2YXRlIHNtYWxsVmlld3MgPSBbXHJcbiAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICBdO1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0aWNlcyA9IFtcclxuICAgICAgLTEsIC0xLFxyXG4gICAgICAtMSwgKzEsXHJcbiAgICAgICsxLCAtMSxcclxuICAgICAgKzEsICsxXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSB2ZXJ0ZXggYnVmZmVyIC0gdGhlIGJsb2NrIHdlJ2xsIGRyYXcgb3VyIHJlbmRlcmVkIHRleHR1cmUgb25cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBmcmFtZWJ1ZmZlclxyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuXHJcbiAgICAgIGxldCBpbnRlcm5hbEZvcm1hdDogbnVtYmVyO1xyXG4gICAgICBsZXQgZm9ybWF0OiBudW1iZXI7XHJcbiAgICAgIGxldCB0eXBlOiBudW1iZXI7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGV4dHVyZXNcclxuICAgICAgaWYgKGdsIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICAgICAgIGxldCBleHQgPSBnbC5nZXRFeHRlbnNpb24oJ09FU190ZXh0dXJlX2hhbGZfZmxvYXQnKTtcclxuICAgICAgICAgaWYgKGV4dCkge1xyXG4gICAgICAgICAgICAvLyBUaGFua3MgQXBwbGUuIEFsd2F5cyBnb3QgdG8gZG8gdGhpbmdzIGEgbGl0dGxlIGRpZmZlcmVudGx5XHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGV4dC5IQUxGX0ZMT0FUX09FUztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTm8gZmxvYXRpbmcgcG9pbnQgdGV4dHVyZXM/IHJlYWxseSBmYWxsIGJhY2sgdG8gdW5zaWduZWQgYnl0ZXNcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUeXBlc2NyaXB0IGRvZXNuJ3QgbGV0IHlvdSBkbyBhbiAnZWxzZSBpZicgaGVyZSBhbmQgd2hlbiBXZWJHTDIgaXNcclxuICAgICAgLy8gbm90IHN1cHBvcnRlZCwgd2UgZ2V0IGFuIGV4Y2VwdGlvbiwgc28gdGh1cyB0aGUgdHJ5LWNhdGNoXHJcbiAgICAgIC8vIHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUzODExMjIvdHlwZXNjcmlwdC10eXBlLW5hcnJvd2VkLXRvLW5ldmVyLXdpdGgtaW5zdGFuY2VvZi1pbi1hbi1pZi1lbHNlLXN0YXRlbWVudFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICBpZiAoZ2wgaW5zdGFuY2VvZiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGdsLmdldEV4dGVuc2lvbignRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdCcpO1xyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkEzMkY7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBnbC5GTE9BVFxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0d28gdGV4dHVyZXMuIE9uZSB3ZSBkaXNwbGF5IGFuZCBvbmUgd2UgZHJhdyB0b1xyXG4gICAgICB0aGlzLnRleHR1cmVzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudGV4dHVyZXMucHVzaChnbC5jcmVhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzW2ldKTtcclxuICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfMkQsICAgICAgICAgIC8vIHRhcmdldFxyXG4gICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAvLyBsZXZlbFxyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCwgICAgICAgICAvLyBpbnRlcm5hbCBmb3JtYXRcclxuICAgICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplLCAgLy8gd2lkdGhcclxuICAgICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplLCAgLy8gaGVpZ2h0XHJcbiAgICAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlclxyXG4gICAgICAgICAgICBmb3JtYXQsICAgICAgICAgICAgICAgICAvLyBmb3JtYXRcclxuICAgICAgICAgICAgdHlwZSwgICAgICAgICAgICAgICAgICAgLy8gdHlwZVxyXG4gICAgICAgICAgICBudWxsICAgICAgICAgICAgICAgICAgICAvLyBwaXhlbHNcclxuICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSByZW5kZXIgc2hhZGVyXHJcbiAgICAgIHRoaXMudG9TY3JlZW5Qcm9ncmFtID0gU2hhZGVycy5jb21waWxlU2hhZGVyKHRvU2NyZWVuVmVydGV4U291cmNlLCB0b1NjcmVlbkZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9TY3JlZW5Qcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgdGhpcy50b1RleHR1cmVQcm9ncmFtID0gU2hhZGVycy5jb21waWxlU2hhZGVyKHRvVGV4dHVyZVZlcnRleFNvdXJjZSwgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgZ2V0IHJlbmRlck1vZGUoKTogUmVuZGVyTW9kZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1haW5WaWV3O1xyXG4gICB9XHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlID0gMDtcclxuICAgICAgVW5pZm9ybXMudVBhc3MgPSAwO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGdldEV5ZVJheShtYXRyaXg6IGdsTWF0NCwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgdmVjID0gbmV3IGdsVmVjNChbeCwgeSwgMCwgMV0pO1xyXG4gICAgICByZXR1cm4gbWF0cml4Lm11bHRWKHZlYykuZGl2aWRlQnlXKCkuc3VidHJhY3QoVW5pZm9ybXMudUV5ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGRhdGVUZXh0dXJlKG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NCwgdGltZVNpbmNlU3RhcnQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgLy8gaW1wbGVtZW50IGFsaWFzaW5nIGJ5IHJhbmRvbSBzYW1wbGluZyB3aXRoaW4gYSBwaXhlbFxyXG4gICAgICBsZXQgeCA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gVW5pZm9ybXMudVRleHR1cmVTaXplO1xyXG4gICAgICBsZXQgeSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gVW5pZm9ybXMudVRleHR1cmVTaXplO1xyXG4gICAgICBsZXQgeiA9IDA7XHJcblxyXG4gICAgICBsZXQgdiA9IG5ldyBnbFZlYzMoW3gsIHksIHpdKTtcclxuICAgICAgbGV0IGppdHRlciA9IGdsTWF0NC5mcm9tVHJhbnNsYXRpb24odik7XHJcbiAgICAgIGxldCBtYXRyaXggPSBqaXR0ZXIubXVsdE0obW9kZWx2aWV3UHJvamVjdGlvbikuaW52ZXJ0KCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy51UmF5MDAgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsIC0xLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMSA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsICsxKTtcclxuICAgICAgVW5pZm9ybXMudVJheTEwID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCArMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTEgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsICsxLCArMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVUaW1lU2luY2VTdGFydCA9IHRpbWVTaW5jZVN0YXJ0O1xyXG4gICAgICBVbmlmb3Jtcy51VGV4dHVyZVdlaWdodCA9IFVuaWZvcm1zLnVTYW1wbGUgLyAoVW5pZm9ybXMudVNhbXBsZSArIDEpO1xyXG5cclxuICAgICAgLy8gc2V0IHVuaWZvcm1zXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy50b1RleHR1cmVQcm9ncmFtKTtcclxuICAgICAgU2hhZGVycy5zZXRVbmlmb3Jtcyh0aGlzLnRvVGV4dHVyZVByb2dyYW0sIFVuaWZvcm1zKTtcclxuXHJcbiAgICAgIC8vIHJlbmRlciB0byB0ZXh0dXJlXHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgVW5pZm9ybXMudVRleHR1cmVTaXplKTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRvVGV4dHVyZVByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLCAwKTtcclxuXHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldFBpeGVsRGF0YSgpO1xyXG4gICAgICBVbmlmb3Jtcy51TWF4Q2hyb21hID0gZGF0YS5tYXhDaHJvbWE7XHJcblxyXG4gICAgICBsZXQgY3IgPSBuZXcgQ29sb3JSYW5nZShbZGF0YS5kYXJrZXN0TGlnaHRDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmF2Z0xpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKV0pO1xyXG4gICAgICBVbmlmb3Jtcy51SGlnaGxpZ2h0Q29sb3IgPSBkYXRhLmhpZ2hsaWdodENvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51TGlnaHRMaWdodENvbG9yID0gY3IuZ2V0KDAuODUpLnRvR2xDb2xvcigpO1xyXG4gICAgICBVbmlmb3Jtcy51TWlkTGlnaHRDb2xvciA9IGNyLmdldCgwLjUpLnRvR2xDb2xvcigpO1xyXG4gICAgICBVbmlmb3Jtcy51RGFya0xpZ2h0Q29sb3IgPSBjci5nZXQoMC4xNSkudG9HbENvbG9yKCk7XHJcblxyXG4gICAgICBjciA9IG5ldyBDb2xvclJhbmdlKFtkYXRhLmRhcmtlc3RTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmF2Z1NoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpXSk7XHJcbiAgICAgIC8vVW5pZm9ybXMudVNoYWRvd0NvbG9yID0gZGF0YS50ZXJtaW5hdG9yQ29sb3I7XHJcbiAgICAgIFVuaWZvcm1zLnVTaGFkb3dDb2xvciA9IGRhdGEuYXZnU2hhZG93Q29sb3I7XHJcbiAgICAgIFVuaWZvcm1zLnVSZWZsZWN0ZWRMaWdodENvbG9yID0gY3IuZ2V0KDEpLnRvR2xDb2xvcigpO1xyXG4gICAgICBVbmlmb3Jtcy51RGFya0FjY2VudENvbG9yID0gY3IuZ2V0KDAuMCkudG9HbENvbG9yKCk7XHJcblxyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgLy8gcGluZyBwb25nIHRleHR1cmVzXHJcbiAgICAgIHRoaXMudGV4dHVyZXMucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgVW5pZm9ybXMudVBhc3MrKztcclxuICAgICAgaWYgKFVuaWZvcm1zLnVQYXNzID09IFVuaWZvcm1zLnVOdW1QYXNzZXMpIHtcclxuICAgICAgICAgVW5pZm9ybXMudVBhc3MgPSAwO1xyXG4gICAgICAgICBVbmlmb3Jtcy51U2FtcGxlKys7XHJcbiAgICAgIH1cclxuICAgfTtcclxuXHJcbiAgIHByaXZhdGUgZ2V0UGl4ZWxEYXRhKCk6IElQaXhlbERhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGE6IElQaXhlbERhdGEgPSB7XHJcbiAgICAgICAgIG1heENocm9tYTogMCxcclxuICAgICAgICAgYXZnTGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgbGlnaHRlc3RMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBkYXJrZXN0TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEsIDEsIDFdKSxcclxuICAgICAgICAgYXZnU2hhZG93Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGxpZ2h0ZXN0U2hhZG93Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGRhcmtlc3RTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzEsIDEsIDFdKSxcclxuICAgICAgICAgdGVybWluYXRvckNvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBoaWdobGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHNpemUgPSBVbmlmb3Jtcy51VGV4dHVyZVNpemU7XHJcblxyXG4gICAgICBpZiAodGhpcy5waXhlbHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLnBpeGVscyA9IG5ldyBGbG9hdDMyQXJyYXkoc2l6ZSAqIHNpemUgKiA0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVE9ETyBoYW5kbGUgY2FzZSB3aGVuIHRoZSB0ZXh0IHR5cGUgaXMgVU5TSUdORURfQllURVxyXG4gICAgICBnbC5yZWFkUGl4ZWxzKDAsIDAsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgVW5pZm9ybXMudVRleHR1cmVTaXplLCBnbC5SR0JBLCBnbC5GTE9BVCwgdGhpcy5waXhlbHMpO1xyXG5cclxuICAgICAgbGV0IG51bUxpZ2h0UGl4ZWxzID0gMDtcclxuICAgICAgbGV0IG51bVNoYWRvd1BpeGVscyA9IDA7XHJcbiAgICAgIGxldCBudW1UZXJtaW5hdG9yUGl4ZWxzID0gMDtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChyb3cgKiBzaXplICsgY29sKSAqIDQ7XHJcbiAgICAgICAgICAgIGxldCByID0gdGhpcy5waXhlbHNbaW5kZXggKyAwXTtcclxuICAgICAgICAgICAgbGV0IGcgPSB0aGlzLnBpeGVsc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMl07XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5waXhlbHNbaW5kZXggKyAzXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSB2YWx1ZXMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIGJhbGxcclxuICAgICAgICAgICAgaWYgKGEgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhdmcgPSAociArIGcgKyBiKSAvIDM7XHJcbiAgICAgICAgICAgIGxldCBjaHJvbWEgPSAoTWF0aC5hYnMociAtIGF2ZykgKyBNYXRoLmFicyhnIC0gYXZnKSArIE1hdGguYWJzKGIgLSBhdmcpKSAvICg0IC8gMyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hyb21hID4gZGF0YS5tYXhDaHJvbWEpIHtcclxuICAgICAgICAgICAgICAgZGF0YS5tYXhDaHJvbWEgPSBjaHJvbWE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IG5ldyBnbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgICAgICAgIGlmIChhID09IFVuaWZvcm1zLnVCQUxMX0xJR0hUKSB7XHJcbiAgICAgICAgICAgICAgIG51bUxpZ2h0UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RMaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmRhcmtlc3QoZGF0YS5kYXJrZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPT0gVW5pZm9ybXMudUJBTExfU0hBRE9XKSB7XHJcbiAgICAgICAgICAgICAgIG51bVNoYWRvd1BpeGVscysrO1xyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IuZGFya2VzdChkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPiBVbmlmb3Jtcy51QkFMTF9MSUdIVCkge1xyXG4gICAgICAgICAgICAgICBkYXRhLmhpZ2hsaWdodENvbG9yID0gZ2xDb2xvci5saWdodGVzdChkYXRhLmhpZ2hsaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXJtaW5hdG9yID0gKFVuaWZvcm1zLnVCQUxMX0xJR0hUICsgVW5pZm9ybXMudUJBTExfU0hBRE9XKSAvIDIuMDtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGEgLSB0ZXJtaW5hdG9yKSA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICBudW1UZXJtaW5hdG9yUGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobnVtTGlnaHRQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5yIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bVNoYWRvd1BpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5yIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtVGVybWluYXRvclBpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuciAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5nIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmIgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgIHZhciBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAgICAgbGV0IHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgaWYgKGlzTW9iaWxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBtYWluIHNjcmVlblxyXG4gICAgICBVbmlmb3Jtcy51U2NhbGUgPSAxLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVYT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBVbmlmb3Jtcy51WU9mZnNldCA9IDAuMDtcclxuICAgICAgVW5pZm9ybXMudU1vZGUgPSB0aGlzLm1haW5WaWV3O1xyXG4gICAgICBTaGFkZXJzLnNldFVuaWZvcm1zKHRoaXMudG9TY3JlZW5Qcm9ncmFtLCBVbmlmb3Jtcyk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG5cclxuICAgICAgLy8gZGlzcGxheSB0aGUgc21hbGxlciB2aWV3c1xyXG4gICAgICBVbmlmb3Jtcy51U2NhbGUgPSAwLjI1O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc21hbGxWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51WE9mZnNldCA9IDEuMCAtICh0aGlzLnNtYWxsVmlld3MubGVuZ3RoIC0gaSAtIDAuNSkgKiAoMiAqIFVuaWZvcm1zLnVTY2FsZSk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMS4wIC0gVW5pZm9ybXMudVNjYWxlO1xyXG4gICAgICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMuc21hbGxWaWV3c1tpXTtcclxuICAgICAgICAgU2hhZGVycy5zZXRVbmlmb3Jtcyh0aGlzLnRvU2NyZWVuUHJvZ3JhbSwgVW5pZm9ybXMpO1xyXG4gICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3dhcChwb3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnNtYWxsVmlld3MgPSBbXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICAgICBdO1xyXG4gICAgICBpZiAodGhpcy5tYWluVmlldyA9PSB0aGlzLnNtYWxsVmlld3NbcG9zXSkge1xyXG4gICAgICAgICB0aGlzLm1haW5WaWV3ID0gUmVuZGVyTW9kZS5BcnRpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMubWFpblZpZXcgPSB0aGlzLnNtYWxsVmlld3NbcG9zXTtcclxuICAgICAgICAgdGhpcy5zbWFsbFZpZXdzW3Bvc10gPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWRlcnMge1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBzZXRVbmlmb3Jtcyhwcm9ncmFtOiBXZWJHTFByb2dyYW0sIHVuaWZvcm1zOiBhbnkpIHtcclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiB1bmlmb3Jtcykge1xyXG4gICAgICAgICB2YXIgdmFsdWUgPSB1bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICAgdmFyIGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xyXG4gICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkgY29udGludWU7XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xWZWMzKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIG5ldyBGbG9hdDMyQXJyYXkodmFsdWUudmFsdWVzKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbENvbG9yKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIG5ldyBGbG9hdDMyQXJyYXkoW3ZhbHVlLnIsIHZhbHVlLmcsIHZhbHVlLmJdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJ1TW9kZVwiKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZVNvdXJjZShzb3VyY2U6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XHJcbiAgICAgIHZhciBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgdGhyb3cgJ2NvbXBpbGUgZXJyb3I6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBjb21waWxlU2hhZGVyKHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgU2hhZGVycy5jb21waWxlU291cmNlKHZlcnRleFNvdXJjZSwgZ2wuVkVSVEVYX1NIQURFUikpO1xyXG4gICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgU2hhZGVycy5jb21waWxlU291cmNlKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpKTtcclxuICAgICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcbiAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgdGhyb3cgJ2xpbmsgZXJyb3I6ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gXCIuL0NvbG9yUmFuZ2VcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGEgcGFzc2VkIHRvIHRoZSBTbGlkZXIgY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlclNldHVwIHtcclxuICAgaWQ6IHN0cmluZyxcclxuICAgbGFiZWw6IHN0cmluZyxcclxuICAgbWluOiBudW1iZXIsXHJcbiAgIG1heDogbnVtYmVyLFxyXG4gICB2YWx1ZTogbnVtYmVyLFxyXG4gICBjb2xvcnM6IGh0bWxDb2xvcltdLFxyXG4gICBvbmlucHV0PzogKCkgPT4gdm9pZCxcclxuICAgZ2V0VGV4dD86IChzbGlkZXI6IFNsaWRlcikgPT4gc3RyaW5nLFxyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc2xpZGVyIGNvbXBvc2VkIG9mIGEgbGFiZWwsIGlucHV0IHJhbmdlLCBjb2xvciBzcGFuIGFuZCB2YWx1ZSBzcGFuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2xpZGVyIHtcclxuXHJcbiAgIHByaXZhdGUgX3JhbmdlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICBwcml2YXRlIF9jb2xvclNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBfdmFsdWVTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX2NvbG9yczogQ29sb3JSYW5nZTtcclxuICAgcHJpdmF0ZSBfZ2V0VGV4dDogKHNsaWRlcjogU2xpZGVyKSA9PiBzdHJpbmc7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHBhcmVudCBUaGUgcGFyZW50IGh0bWwgb2JqZWN0LlxyXG4gICAgKiBAcGFyYW0gc2V0dXAgVGhlIHNldHVwIGRhdGEgb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgc2V0dXA6IElTbGlkZXJTZXR1cCkge1xyXG5cclxuICAgICAgdGhpcy5fZ2V0VGV4dCA9IHNldHVwLmdldFRleHQ7XHJcblxyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5pZCA9IHNldHVwLmlkICsgJ0xhYmVsJztcclxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ1NsaWRlckxhYmVsJztcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc2V0dXAubGFiZWw7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnR5cGUgPSAncmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5pZCA9IHNldHVwLmlkICsgJ1JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuY2xhc3NOYW1lID0gJ1NsaWRlclJhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UubWluID0gc2V0dXAubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1heCA9IHNldHVwLm1heC50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZSA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdGhpcy51cGRhdGVTcGFuQ29sb3IoKSk7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9yYW5nZSk7XHJcblxyXG4gICAgICB0aGlzLl9jb2xvclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMuX2NvbG9yU3Bhbi5pZCA9IHNldHVwLmlkICsgJ0NvbG9yU3Bhbic7XHJcbiAgICAgIHRoaXMuX2NvbG9yU3Bhbi5jbGFzc05hbWUgPSAnU2xpZGVyQ29sb3JTcGFuJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX2NvbG9yU3Bhbik7XHJcblxyXG4gICAgICB0aGlzLl92YWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pZCA9IHNldHVwLmlkICsgJ1ZhbHVlU3Bhbic7XHJcbiAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5jbGFzc05hbWUgPSAnU2xpZGVyVmFsdWVTcGFuJztcclxuICAgICAgLy8gICAgICB0aGlzLl92YWx1ZVNwYW4uaW5uZXJUZXh0ID0gc2V0dXAudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX3ZhbHVlU3Bhbik7XHJcblxyXG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgY29sb3JcclxuICAgICAgdGhpcy5jb2xvcnMgPSBzZXR1cC5jb2xvcnM7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZS5vbmlucHV0ID0gc2V0dXAub25pbnB1dDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIHNwYW4gY29sb3IgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvci5cclxuICAgICovXHJcbiAgIHByaXZhdGUgdXBkYXRlU3BhbkNvbG9yKCk6IHZvaWQge1xyXG4gICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ29sb3IodGhpcy5fY29sb3JzLmdldCh2YWwpKTtcclxuICAgICAgdGhpcy5fY29sb3JTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnRvSGV4KClcclxuICAgICAgaWYgKHRoaXMuX2dldFRleHQpIHtcclxuICAgICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHRoaXMuX2dldFRleHQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGh0bWwgcmFuZ2Ugb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbCByYW5nZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHJhbmdlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtaW4gc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWluKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heCBzbGlkZXIgdmFsdWUuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWF4KTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIGNvbG9yIGZvciB0aGUgc2xpZGVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IGNvbG9ycyhjb2xvcnM6IGh0bWxDb2xvcltdKSB7XHJcblxyXG4gICAgICAvLyBzdG9yZSB0aGUgY29sb3JzXHJcbiAgICAgIHRoaXMuX2NvbG9ycyA9IG5ldyBDb2xvclJhbmdlKGNvbG9ycyk7XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgZ3JhZGllbnQgc3R5bGUgZm9yIHRoZSByYW5nZSBvYmplY3RcclxuICAgICAgbGV0IGdyYWRpZW50U3RyID0gJzkwZGVnJztcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgZ3JhZGllbnRTdHIgKz0gJywgJyArIGNvbG9yc1tpXS50b0NzcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3JhbmdlLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KCcgKyBncmFkaWVudFN0ciArICcpJztcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3BhbiBjb2xvciB0b29cclxuICAgICAgdGhpcy51cGRhdGVTcGFuQ29sb3IoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIGN1cnJlbnQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGh0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgY3VycmVudCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZ2xDb2xvcigpOiBnbENvbG9yIHtcclxuICAgICAgbGV0IHZhbCA9ICh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xyXG4gICAgICByZXR1cm4gdGhpcy5fY29sb3JzLmdldCh2YWwpLnRvR2xDb2xvcigpO1xyXG4gICB9XHJcbn0iLCIvKipcclxuICogU3BoZXJpY2FsIGNvb3JkaW5hdGVzIGJhc2VkIG9uIHRoZSBXZWJHTCB2aWV3aW5nIHN5c3RlbTogeD1sZWZ0LXJpZ2h0LCB5PXVwLWRvd24sIHo9bmVhci1mYXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWxDb29yZCB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxldmF0aW9uIGZyb20gdGhlIGZsb29yIHRvIHRoZSBwb2ludC4gMCBhbmQgMTgwIGFyZSBvbiB0aGVcclxuICAgICogZmxvb3IuIDkwIHBvaW50cyB1cC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBlbGV2YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYW5nbGUsIHdoZW4gbG9va2luZyBkb3duIGZyb20gdGhlIHRvcCwgdG8gdGhlIHBvaW50LiAwIHBvaW50cyByaWdodC5cclxuICAgICovXHJcbiAgIHB1YmxpYyByb3RhdGlvbkFuZ2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSByYWRpdXNcclxuICAgICogQHBhcmFtIGVsZXZhdGlvbkFuZ2xlIFxyXG4gICAgKiBAcGFyYW0gcm90YXRpb25BbmdsZSBcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgZWxldmF0aW9uQW5nbGU6IG51bWJlciwgcm90YXRpb25BbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICB0aGlzLmVsZXZhdGlvbkFuZ2xlID0gZWxldmF0aW9uQW5nbGU7XHJcbiAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IHJvdGF0aW9uQW5nbGU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3BoZXJpY2FsIGNvb3JkaW5hdGUgZnJvbSBhIGNhcnRlc2lhbiBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHBvcyBUaGUgY2FydGVzaWFuIHBvaW50LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc3BoZXJpY2FsIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21YWVoocG9zOiBudW1iZXJbXSk6IFNwaGVyaWNhbENvb3JkIHtcclxuXHJcbiAgICAgIGxldCB4ID0gcG9zWzBdO1xyXG4gICAgICBsZXQgeSA9IHBvc1sxXTtcclxuICAgICAgbGV0IHogPSBwb3NbMl07XHJcblxyXG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XHJcbiAgICAgIGxldCByb3RhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hdGFuMih6LCB4KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hc2luKHkgLyByYWRpdXMpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcGhlcmljYWxDb29yZChyYWRpdXMsIGVsZXZhdGlvbkFuZ2xlLCByb3RhdGlvbkFuZ2xlKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgc3BoZXJpY2FsIGNvb3JkaW5hdGUgdG8gYSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1hZWigpOiBudW1iZXJbXSB7XHJcblxyXG4gICAgICBsZXQgZmxvb3JSYWRpdXMgPSB0aGlzLnJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeCA9IGZsb29yUmFkaXVzICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeiA9IGZsb29yUmFkaXVzICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBbeCwgeSwgel07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBmb3IgdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVbmlmb3JtcyB7XHJcbiAgIHVTY2FsZTogbnVtYmVyO1xyXG4gICB1WE9mZnNldDogbnVtYmVyO1xyXG4gICB1WU9mZnNldDogbnVtYmVyO1xyXG4gICB1TW9kZTogUmVuZGVyTW9kZTtcclxuICAgdU1heENocm9tYTogbnVtYmVyO1xyXG5cclxuICAgdUJhbGxMaWdodFNoaWZ0OiBudW1iZXI7XHJcbiAgIHVCYWxsTGlnaHRUaW50U3RyZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgIHVCYWxsU2hhZG93U2hpZnQ6IG51bWJlcjtcclxuICAgdUJhbGxTaGFkb3dUaW50U3RyZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgIHVIaWdobGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdU1pZExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVEYXJrTGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogZ2xDb2xvcjtcclxuICAgdVJlZmxlY3RlZExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVEYXJrQWNjZW50Q29sb3I6IGdsQ29sb3I7XHJcblxyXG4gICB1QkFMTF9TUEVDVUxBUjogbnVtYmVyO1xyXG4gICB1QkFMTF9MSUdIVDogbnVtYmVyO1xyXG4gICB1QkFMTF9TSEFET1c6IG51bWJlcjtcclxuXHJcbiAgIHVMaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICB1TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgdUxpZ2h0UG9zOiBnbFZlYzMsXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdUJhbGxDb2xvcjogZ2xDb2xvcixcclxuICAgdUJhbGxSYWRpdXM6IG51bWJlcixcclxuICAgdUV5ZTogZ2xWZWMzLFxyXG4gICB1VGV4dHVyZVNpemU6IG51bWJlcixcclxuICAgdVRleHR1cmVXZWlnaHQ6IG51bWJlcixcclxuICAgdVRpbWVTaW5jZVN0YXJ0OiBudW1iZXIsXHJcbiAgIHVSYXkwMDogZ2xWZWMzLFxyXG4gICB1UmF5MDE6IGdsVmVjMyxcclxuICAgdVJheTEwOiBnbFZlYzMsXHJcbiAgIHVSYXkxMTogZ2xWZWMzLFxyXG4gICB1UGFzczogbnVtYmVyLFxyXG4gICB1U2FtcGxlOiBudW1iZXIsXHJcbiAgIHVOdW1QYXNzZXM6IG51bWJlcixcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbHVlcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGxldCBVbmlmb3JtczogSVVuaWZvcm1zID0ge1xyXG4gICB1U2NhbGU6IDEuMCxcclxuICAgdVhPZmZzZXQ6IDAuMCxcclxuICAgdVlPZmZzZXQ6IDAuMCxcclxuICAgdU1vZGU6IDAsXHJcbiAgIHVNYXhDaHJvbWE6IDEuMCxcclxuXHJcbiAgIHVCYWxsTGlnaHRTaGlmdDogMC4wLFxyXG4gICB1QmFsbExpZ2h0VGludFN0cmVuZ3RoOiAwLjUsXHJcblxyXG4gICB1QmFsbFNoYWRvd1NoaWZ0OiAwLjAsXHJcbiAgIHVCYWxsU2hhZG93VGludFN0cmVuZ3RoOiAwLjUsXHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1TWlkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0xpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0FjY2VudENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1QkFMTF9TUEVDVUxBUjogMTAwMixcclxuICAgdUJBTExfTElHSFQ6IDEwMDEsXHJcbiAgIHVCQUxMX1NIQURPVzogMTAwMCxcclxuXHJcbiAgIHVMaWdodEludGVuc2l0eTogMC43LFxyXG4gICB1TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAxLjBdKSxcclxuICAgdUxpZ2h0UG9zOiBuZXcgZ2xWZWMzKFstMC42LCAxLjcsIDAuOF0pLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiAwLjMsXHJcbiAgIHVCYWxsQ29sb3I6IG5ldyBnbENvbG9yKFswLjUsIDAuNSwgMC44XSksXHJcbiAgIHVCYWxsUmFkaXVzOiAwLjUsXHJcbiAgIHVFeWU6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVRleHR1cmVTaXplOiAyNTYsXHJcbiAgIHVUZXh0dXJlV2VpZ2h0OiAwLFxyXG4gICB1VGltZVNpbmNlU3RhcnQ6IDAsXHJcbiAgIHVSYXkwMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MDE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UGFzczogMC4wLFxyXG4gICB1TnVtUGFzc2VzOiAxLjAsXHJcbiAgIHVTYW1wbGU6IDAuMCxcclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBQYXRoVHJhY2VyLCBSZW5kZXJNb2RlIH0gZnJvbSBcIi4vUGF0aFRyYWNlclwiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5pbXBvcnQgeyB6b29tWiwgYW5nbGVZLCBhbmdsZVgsIGNhbnZhcyB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSBcIi4vVW5pZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICBwdWJsaWMgdHJhY2VyID0gbmV3IFBhdGhUcmFjZXIoKTtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXc6IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHN0YXJ0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgY291bnQgPSAwO1xyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuIElmIGEgaGl0XHJcbiAgICAqIG9jY3VycywgdGhlIGNsaWNrZWQgb24gdmlldyBpcyBzd2FwcGVkIGZvciB0aGUgcHJpbWFyeSB2aWV3IGFuZCB0cnVlXHJcbiAgICAqIGlzIHJldHVybmVkLiBJZiBubyBoaXQgb2NjdXJzLCBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUuXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUuXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgLy8gVE9ETyBoYW5kbGUgdGhpcyB3aXRoaW4gdGhlIFBhdGhUcmFjZXIgY2xhc3Mgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGhhcmQgY29kZSB2aWV3IHN0dWZmXHJcbiAgICAgIGxldCBzaXplID0gY2FudmFzLndpZHRoIC8gNDtcclxuXHJcbiAgICAgIGlmICh5IDwgc2l6ZSkge1xyXG5cclxuICAgICAgICAgaWYgKHggPiBjYW52YXMud2lkdGggLSAxICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoeCA+IGNhbnZhcy53aWR0aCAtIDIgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh4ID4gY2FudmFzLndpZHRoIC0gMyAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBzZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgIHN3aXRjaCAodGhpcy50cmFjZXIucmVuZGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQXJ0aXN0OlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5DaHJvbWE6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ2hyb21hIFZpZXc6IHJlZD1oaWdoZXN0IGNocm9tYVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5WYWx1ZTpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJWYWx1ZSBWaWV3XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkJhbmRzOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIjUgQ29sb3IgKyBIaWdobGlnaHQgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZSh0aW1lU2luY2VTdGFydDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gZ2xNYXQ0Lm1ha2VMb29rQXQoXHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUsXHJcbiAgICAgICAgIG5ldyBnbFZlYzMoWzAsIDEsIDBdKSwgIC8vIGNlbnRlciBwb2ludFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSkgICAvLyB1cCB2ZWN0b3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IGdsTWF0NC5tYWtlUGVyc3BlY3RpdmUoNTUsIDEsIDAuMSwgMTAwKTtcclxuICAgICAgdGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0aW9uLm11bHRNKHRoaXMubW9kZWx2aWV3KTtcclxuICAgICAgdGhpcy50cmFjZXIudXBkYXRlVGV4dHVyZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24sIHRpbWVTaW5jZVN0YXJ0KTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy50cmFjZXIuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy50cmFjZXIucmVzdGFydCgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3dhcChwb3M6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnRyYWNlci5zd2FwKHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgbGV0IHRpbWVTaW5jZVN0YXJ0ID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0KSAqIDAuMDAxO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY291bnQgPCAxMDAwKSB7XHJcbiAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMF0gPSB6b29tWiAqIE1hdGguc2luKGFuZ2xlWSkgKiBNYXRoLmNvcyhhbmdsZVgpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1sxXSA9IHpvb21aICogTWF0aC5zaW4oYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMl0gPSB6b29tWiAqIE1hdGguY29zKGFuZ2xlWSkgKiBNYXRoLmNvcyhhbmdsZVgpO1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKHRpbWVTaW5jZVN0YXJ0KTtcclxuICAgICAgICAgdGhpcy5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBnbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGdsQ29sb3IuY2xhbXAoY29sb3Iucik7XHJcbiAgICAgIGxldCBnID0gZ2xDb2xvci5jbGFtcChjb2xvci5nKTtcclxuICAgICAgbGV0IGIgPSBnbENvbG9yLmNsYW1wKGNvbG9yLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxpZ2h0ZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBsaWdodGVzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbGlnaHRlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPiBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGRhcmtlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGRhcmtlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGRhcmtlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPCBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENsYW1wcyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICogQHJldHVybnMgVGhlIGNsYW1wZWQgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNsYW1wKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgaWYgKHZhbCA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsID4gMSkge1xyXG4gICAgICAgICByZXR1cm4gMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYW4gaHRtbCBjb2xvciBvYmplY3QgKDAtMjU1IGJhc2VkKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IdG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMucik7XHJcbiAgICAgIGxldCBnID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmcpO1xyXG4gICAgICBsZXQgYiA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5iKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGFkZHMgdGVtcGVyYXR1cmUgdG8gYSBDb2xvciBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIGV4dGVuZHMgZ2xDb2xvciB7XHJcbiAgIC8qKlxyXG4gICAgKiBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgX3RlbXBlcmF0dXJlOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgdGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICogQHBhcmFtIHRlbXBlcmF0dXJlIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10sIHRlbXBlcmF0dXJlOiBudW1iZXIpIHtcclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICAgICB0aGlzLl90ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogS25vd24gY29sb3IgdmFsdWVzLiBGb3Igb3RoZXIgcmVxdWVzdHMgdGhlIGNsYXNzIHdpbGwgcmV0dXJuIGludGVycG9sYXRlZCB2YWx1ZXNcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNvbG9yczogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVtdID0gW1xyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxNDcgLyAyNTUsIDQxIC8gMjU1XSwgMTkwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDE5NyAvIDI1NSwgMTQzIC8gMjU1XSwgMjYwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDIxNCAvIDI1NSwgMTcwIC8gMjU1XSwgMjg1MCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI0MSAvIDI1NSwgMjI0IC8gMjU1XSwgMzIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1MCAvIDI1NSwgMjQ0IC8gMjU1XSwgNTIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjUxIC8gMjU1XSwgNTQwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjU1IC8gMjU1XSwgNjAwMCksIC8vIGRheWxpZ2h0XHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyMDEgLyAyNTUsIDIyNiAvIDI1NSwgMjU1IC8gMjU1XSwgNzAwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFs2NCAvIDI1NSwgMTU2IC8gMjU1LCAyNTUgLyAyNTVdLCAyMDAwMCksXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldCBkYXlsaWdodCgpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKDYwMDApO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluaW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtaW5UZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXhpbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1heFRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSBDb2xvciBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGUodGVtcGVyYXR1cmU6IG51bWJlcik6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUge1xyXG5cclxuICAgICAgaWYgKHRlbXBlcmF0dXJlIDw9IHRoaXMubWluVGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRlbXBlcmF0dXJlID49IHRoaXMubWF4VGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IxID0gdGhpcy5jb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjIgPSB0aGlzLmNvbG9yc1tpICsgMV07XHJcbiAgICAgICAgICAgIGlmICh0ZW1wZXJhdHVyZSA+PSBjb2xvcjEudGVtcGVyYXR1cmUgJiYgdGVtcGVyYXR1cmUgPD0gY29sb3IyLnRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgIGxldCByYXRpbyA9ICh0ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSkgLyAoY29sb3IyLnRlbXBlcmF0dXJlIC0gY29sb3IxLnRlbXBlcmF0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCByID0gY29sb3IxLnIgKyByYXRpbyAqIChjb2xvcjIuciAtIGNvbG9yMS5yKTtcclxuICAgICAgICAgICAgICAgbGV0IGcgPSBjb2xvcjEuZyArIHJhdGlvICogKGNvbG9yMi5nIC0gY29sb3IxLmcpO1xyXG4gICAgICAgICAgICAgICBsZXQgYiA9IGNvbG9yMS5iICsgcmF0aW8gKiAoY29sb3IyLmIgLSBjb2xvcjEuYik7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbciwgZywgYl0sIHRlbXBlcmF0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzaG91bGRuJ3QgZ2V0IGhlcmUsIGJ1dCBpZiB3ZSBkbywgcmV0dXJuIHRoZSBsYXN0IGNvbG9yXHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzQsIGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyBtYXRyaXggZm9yIHVzZSBpbiBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xNYXQ0IHtcclxuICAgLyoqIFRoZSBtYXRyaXggdmFsdWUgc3RvcmVkIGFzIGEgMTYgZWxlbWVudCBhcnJheSAqL1xyXG4gICBwcml2YXRlIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbE1hdDQge1xyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NCh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSByb3cgVGhlIHJvdyBpbmRleC5cclxuICAgICogQHBhcmFtIGNvbCBUaGUgY29sdW1uIGluZGV4LlxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCB2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhIHZlY3RvciBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0Vih2ZWM6IGdsVmVjNCk6IGdsVmVjNCB7XHJcbiAgICAgIGxldCB2YWxzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tyb3cgKiA0ICsgY29sXSAqIHZlYy52YWx1ZXNbY29sXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB2YWxzLnB1c2goc3VtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjNCh2YWxzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgdGhpcyBtYXRyaXggYWdhaW5zdCBhbm90aGVyIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBtYXRyaXguXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRNKG90aGVyOiBnbE1hdDQpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5nZXQocm93LCBpKSAqIG90aGVyLmdldChpLCBjb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocm93LCBjb2wsIHN1bSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEludmVydHMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGludmVydCgpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRyYW5zcG9zZXMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCAodGhpcykuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGlzLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBnbE1hdDQge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZhbHVlcyA9IHJlc3VsdC52YWx1ZXM7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgdHJhbnNsYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdHJhbnNsYXRpb25zLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVHJhbnNsYXRpb24odjogZ2xWZWMzKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgdi52YWx1ZXNbMF0sXHJcbiAgICAgICAgIDAsIDEsIDAsIHYudmFsdWVzWzFdLFxyXG4gICAgICAgICAwLCAwLCAxLCB2LnZhbHVlc1syXSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KFxyXG4gICAgICBleWU6IGdsVmVjMyxcclxuICAgICAgY2VudGVyOiBnbFZlYzMsXHJcbiAgICAgIHVwOiBnbFZlYzMsXHJcbiAgICk6IGdsTWF0NCB7XHJcblxyXG4gICAgICAvLyBjbG9uZSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdvbmFsc1xyXG4gICAgICBsZXQgeiA9IGV5ZS5jbG9uZSgpLnN1YnRyYWN0KGNlbnRlcikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCB4ID0gdXAuY2xvbmUoKS5jcm9zcyh6KS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IHkgPSB6LmNsb25lKCkuY3Jvc3MoeCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICBsZXQgbSA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICB4LnZhbHVlc1swXSwgeC52YWx1ZXNbMV0sIHgudmFsdWVzWzJdLCAwLFxyXG4gICAgICAgICB5LnZhbHVlc1swXSwgeS52YWx1ZXNbMV0sIHkudmFsdWVzWzJdLCAwLFxyXG4gICAgICAgICB6LnZhbHVlc1swXSwgei52YWx1ZXNbMV0sIHoudmFsdWVzWzJdLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgdmFyIHQgPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgLWV5ZS52YWx1ZXNbMF0sXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUudmFsdWVzWzFdLFxyXG4gICAgICAgICAwLCAwLCAxLCAtZXllLnZhbHVlc1syXSxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBtLm11bHRNKHQpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVQZXJzcGVjdGl2ZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBmb3Z5IEZpZWxkIG9mIHZpZXcgKGluIGRlZ3JlZXMpLlxyXG4gICAgKiBAcGFyYW0gYXNwZWN0IFZpZXcgYXNwZWN0IHJhdGlvLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgTmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgRmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlUGVyc3BlY3RpdmUoXHJcbiAgICAgIGZvdnk6IG51bWJlcixcclxuICAgICAgYXNwZWN0OiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgeW1heCA9IHpuZWFyICogTWF0aC50YW4oZm92eSAqIE1hdGguUEkgLyAzNjAuMCk7XHJcbiAgICAgIHZhciB5bWluID0gLXltYXg7XHJcbiAgICAgIHZhciB4bWluID0geW1pbiAqIGFzcGVjdDtcclxuICAgICAgdmFyIHhtYXggPSB5bWF4ICogYXNwZWN0O1xyXG5cclxuICAgICAgcmV0dXJuIGdsTWF0NC5tYWtlRnJ1c3R1bSh4bWluLCB4bWF4LCB5bWluLCB5bWF4LCB6bmVhciwgemZhcik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1RnJ1c3R1bS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZWZ0IFRoZSBsZWZ0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gcmlnaHQgVGhlIHJpZ2h0IGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gYm90dG9tIFRoZSBib3R0b20gY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB0b3AgVGhlIHRvcCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpuZWFyIFRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBUaGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcmV0dXJucyB0aGUgcGVyc3BlY3RpdmUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlRnJ1c3R1bShcclxuICAgICAgbGVmdDogbnVtYmVyLFxyXG4gICAgICByaWdodDogbnVtYmVyLFxyXG4gICAgICBib3R0b206IG51bWJlcixcclxuICAgICAgdG9wOiBudW1iZXIsXHJcbiAgICAgIHpuZWFyOiBudW1iZXIsXHJcbiAgICAgIHpmYXI6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICB2YXIgWCA9IDIgKiB6bmVhciAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgWSA9IDIgKiB6bmVhciAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQSA9IChyaWdodCArIGxlZnQpIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBCID0gKHRvcCArIGJvdHRvbSkgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEMgPSAtKHpmYXIgKyB6bmVhcikgLyAoemZhciAtIHpuZWFyKTtcclxuICAgICAgdmFyIEQgPSAtMiAqIHpmYXIgKiB6bmVhciAvICh6ZmFyIC0gem5lYXIpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBYLCAwLCBBLCAwLFxyXG4gICAgICAgICAwLCBZLCBCLCAwLFxyXG4gICAgICAgICAwLCAwLCBDLCBELFxyXG4gICAgICAgICAwLCAwLCAtMSwgMFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxufSIsIlxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBnbFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIE5vcm1hbGl6ZXMgdGhpcyB2ZWN0b3IsIGFuZCBzdG9yZXMgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgbm9ybWFsaXplKCk6IGdsVmVjIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSAvPSBtYWc7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzMgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBub3JtYWxpemUoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLm5vcm1hbGl6ZSgpIGFzIGdsVmVjMztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFN1YnRyYWN0cyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBzdWJ0cmFjdC5cclxuICAgICogQHJldHVybnMgVGhpcyB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3VidHJhY3QodmVjOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSAtPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSAtPSB2ZWMudmFsdWVzWzFdO1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSAtPSB2ZWMudmFsdWVzWzJdO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNyb3NzKG90aGVyOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgQSA9IHRoaXMudmFsdWVzO1xyXG4gICAgICBsZXQgQiA9IG90aGVyLnZhbHVlcztcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBBWzFdICogQlsyXSAtIEFbMl0gKiBCWzFdLFxyXG4gICAgICAgICBBWzJdICogQlswXSAtIEFbMF0gKiBCWzJdLFxyXG4gICAgICAgICBBWzBdICogQlsxXSAtIEFbMV0gKiBCWzBdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzQgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4geC15LXogdmVjdG9yIHdoZXJlIGVhY2ggZWxlbWVudCBpcyBjb21wdXRlZCBieSBkaXZpZGluZyB0aGlzIHZlY3RvcnNcclxuICAgICogZWxlbWVudHMgYnkgdGhlIHcgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiB4LXkteiB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGl2aWRlQnlXKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB3ID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjU1XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHRtbENvbG9yIGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSB3aGl0ZSA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBibGFjayA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSByZWQgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDAsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBncmVlbiA9IG5ldyBodG1sQ29sb3IoWzAsIDI1NSwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJsdWUgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAyNTVdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBvcmFuZ2UgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDE2NSwgMF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gMykge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgMyBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYyBUaGUgbnVtZXJpYyB2YWx1ZVxyXG4gICAgKiBAcmV0dXJucyBUaGUgaGV4IHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbXBvbmVudFRvSGV4KGM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBoZXggc3RyaW5nIChlLmcuICMwZjBmMGYpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBoZXggc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSGV4KCk6IHN0cmluZyB7XHJcbiAgICAgIGxldCBySGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLnIpO1xyXG4gICAgICBsZXQgZ0hleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5nKTtcclxuICAgICAgbGV0IGJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBcIiNcIiArIHJIZXggKyBnSGV4ICsgYkhleDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgY3NzIHN0cmluZyAoZS5nLiAncmdiKDEyOCwyMjgsMzIpJykuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY3NzIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0NzcygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ3JnYignICsgdGhpcy5yICsgJywnICsgdGhpcy5nICsgJywnICsgdGhpcy5iICsgJyknO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IGZyb20gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaGV4IFRoZSBoZXggc3RyaW5nXHJcbiAgICAqIEByZXR1cm5zIFRoZSBodG1sQ29sb3Igb2JqZWN0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21IZXgoaGV4OiBzdHJpbmcpOiBodG1sQ29sb3Ige1xyXG4gICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgbGV0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgICAgbGV0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgICAgbGV0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuICAgICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLnIpO1xyXG4gICAgICBsZXQgZyA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5nKTtcclxuICAgICAgbGV0IGIgPSBodG1sQ29sb3IuY2xhbXAoY29sb3IuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSb3VuZHMgYSBudW1iZXIgdG8gYSB3aG9sZSBudW1iZXIgYW5kIGNsYW1wcyBpdCBiZXR3ZWVuIDAgYW5kIDI1NS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgcm91bmRlZCAmIGNsYW1wZWQgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNsYW1wKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgdmFsID0gTWF0aC5yb3VuZCh2YWwpO1xyXG4gICAgICBpZiAodmFsIDwgMCkge1xyXG4gICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh2YWwgPiAyNTUpIHtcclxuICAgICAgICAgcmV0dXJuIDI1NTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBjb2xvciB0byBhbiBlcXVpdmFsZW50IGdyYXktc2NhbGUgY29sb3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBncmF5LXNjYWxlIGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR3JheSgpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgcmdiID0gTWF0aC5yb3VuZCgodGhpcy5yICsgdGhpcy5nICsgdGhpcy5iKSAvIDMpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbcmdiLCByZ2IsIHJnYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBXZWJHTCBjb2xvciBvYmplY3QgKDAtMSBiYXNlZClcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HbENvbG9yKCk6IGdsQ29sb3Ige1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3RoaXMuciAvIDI1NSwgdGhpcy5nIC8gMjU1LCB0aGlzLmIgLyAyNTVdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUgfSBmcm9tIFwiLi9nbENvbG9yV2l0aFRlbXBlcmF0dXJlXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBoc3ZDb2xvciB9IGZyb20gXCIuL2hzdkNvbG9yXCI7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSBcIi4vVW5pZm9ybXNcIjtcclxuaW1wb3J0IHsgVGFiQ29udHJvbCB9IGZyb20gXCIuL1RhYkNvbnRyb2xcIjtcclxuaW1wb3J0IHsgU3BoZXJpY2FsQ29vcmQgfSBmcm9tIFwiLi9TcGhlcmljYWxDb29yZFwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3JXaXRoQWxwaGEgfSBmcm9tIFwiLi9odG1sQ29sb3JXaXRoQWxwaGFcIjtcclxuXHJcbmVudW0gUG9pbnRlck1vZGUge1xyXG4gICBWaWV3LFxyXG4gICBMaWdodCxcclxufVxyXG5cclxubGV0IGFwcDogQXBwO1xyXG5leHBvcnQgbGV0IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuZXhwb3J0IGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuZXhwb3J0IGxldCBhbmdsZVggPSAwLjU7XHJcbmV4cG9ydCBsZXQgYW5nbGVZID0gMC43NTtcclxuZXhwb3J0IGxldCB6b29tWiA9IDMuNTtcclxuXHJcbmxldCBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG5sZXQgcG9pbnRlck1vZGVTcGVjaWFsID0gZmFsc2U7XHJcbmxldCBwb3M6IFNwaGVyaWNhbENvb3JkO1xyXG5cclxubGV0IHNraW5Ub25lcyA9IFtcclxuICAgbmV3IGh0bWxDb2xvcihbMjQwLCAyMjMsIDIxNF0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsyNTUsIDIxOCwgMjAwXSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzIzMiwgMTc5LCAxMTddKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTkwLCAxMzYsIDg3XSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTE1LCA5MSwgNTldKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMTM5LCA3MywgNjVdKVxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzEzMiwgNTUsIDM0XSksXHJcbiAgIC8vbmV3IGh0bWxDb2xvcihbNjEsIDEyLCAyXSksXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMzgsIDcsIDFdKVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgIGNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBkZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcbiAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICBidXR0b24uaWQgPSAnbW9kZUJ1dHRvbic7XHJcbiAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyc7XHJcbiAgIHBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAocG9pbnRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5WaWV3OlxyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0xpZ2h0JztcclxuICAgICAgICAgICAgcG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5MaWdodDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLkxpZ2h0OlxyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICAgICAgICBwb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgIGxldCBpbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICBpZDogJ0xpZ2h0SW50ZW5zaXR5JyxcclxuICAgICAgbGFiZWw6ICdMaWdodCBJbnRlbnNpdHknLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICB2YWx1ZTogVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ID0gaW50ZW5zaXR5U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICBhcHAucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgLy8gYnVpbGQgYSByYW5nZSBvZiBjb2xvcnNcclxuICAgbGV0IG1pbiA9IDIwMDA7XHJcbiAgIGxldCBtYXggPSAxMDAwMDtcclxuICAgbGV0IGNvbG9yczogaHRtbENvbG9yW10gPSBbXTtcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gbWluICsgKGkgLyA5KSAqIChtYXggLSBtaW4pO1xyXG4gICAgICBjb2xvcnMucHVzaChnbENvbG9yV2l0aFRlbXBlcmF0dXJlLmNyZWF0ZSh0ZW1wKS50b0h0bWxDb2xvcigpKTtcclxuICAgfVxyXG4gICBsZXQgbGlnaHRDb2xvclNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgIGlkOiAnTGlnaHRDb2xvcicsXHJcbiAgICAgIGxhYmVsOiAnTGlnaHQgQ29sb3InLFxyXG4gICAgICBtaW46IDIwMDAsXHJcbiAgICAgIG1heDogMTAwMDAsXHJcbiAgICAgIHZhbHVlOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlLmRheWxpZ2h0LnRlbXBlcmF0dXJlLFxyXG4gICAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgICAgb25pbnB1dDogc2V0TGlnaHRDb2xvcixcclxuICAgICAgZ2V0VGV4dDogKHNsaWRlcjogU2xpZGVyKSA9PiB7IHJldHVybiBzbGlkZXIudmFsdWUudG9GaXhlZCgpICsgXCJLXCIgfVxyXG4gICB9KTtcclxuXHJcbiAgIC8vIGFwcGx5IHRoZSBpbml0aWFsIGNvbG9yc1xyXG4gICBzZXRMaWdodENvbG9yKCk7XHJcblxyXG4gICBmdW5jdGlvbiBzZXRMaWdodENvbG9yKCkge1xyXG5cclxuICAgICAgLy8gdXBkYXRlIHRoZSBjb2xvcnMgZm9yIHRoZSBpbnRlbnNpdHkgc2xpZGVyXHJcbiAgICAgIGludGVuc2l0eVNsaWRlci5jb2xvcnMgPSBbaHRtbENvbG9yLmJsYWNrLCBsaWdodENvbG9yU2xpZGVyLmh0bWxDb2xvcl07XHJcblxyXG4gICAgICAvLyB1c2UgdGhlIHZhbHVlIGluIHJlbmRlcmluZ1xyXG4gICAgICBVbmlmb3Jtcy51TGlnaHRDb2xvciA9IGxpZ2h0Q29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuICAgICAgaWYgKGFwcCkge1xyXG4gICAgICAgICBhcHAucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGxldCBiYWxsQ29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICBpZDogJ0JhbGxDb2xvcicsXHJcbiAgICAgIGxhYmVsOiAnQmFsbCBDb2xvcicsXHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxMDAsXHJcbiAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgY29sb3JzOiBza2luVG9uZXMsXHJcbiAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxDb2xvciA9IGJhbGxDb2xvclNsaWRlci5nbENvbG9yO1xyXG4gICAgICAgICBhcHAucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgLy8gbWFrZSBzdXJlIGdsIG1hdGNoZXMgdGhlIGluaXRpYWwgVUkgc2V0dGluZ1xyXG4gICBVbmlmb3Jtcy51QmFsbENvbG9yID0gYmFsbENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICBsZXQgYW1iaWVudEludGVuc2l0eVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgIGlkOiAnQW1iaWVudEludGVuc2l0eScsXHJcbiAgICAgIGxhYmVsOiAnQW1iaWVudCBMaWdodCcsXHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxMDAsXHJcbiAgICAgIHZhbHVlOiBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgIG9uaW5wdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSA9IGFtYmllbnRJbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuXHJcbnZhciBtb3VzZURvd24gPSBmYWxzZTtcclxudmFyIG9sZFg6IG51bWJlcjtcclxudmFyIG9sZFk6IG51bWJlcjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJykgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgIGlmICghZ2wpIHtcclxuICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgIH1cclxuXHJcbiAgIGlmICghZ2wpIHtcclxuICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50OiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIGxldCB5ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cclxuICAgICAgICAgICAgb25Eb3duKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjYW52YXMub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgb25Nb3ZlKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICBvbkRvd24oZXZlbnQueCwgZXZlbnQueSk7XHJcblxyXG4gICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdGlvbiBiZWNhdXNlIGRyYWdnaW5nIGlzIHVzZWQgZm9yIHJvdGF0aW5nIHRoZSBjYW1lcmEgYW5kIG1vdmluZyBvYmplY3RzXHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgIG9uTW92ZShldmVudC54LCBldmVudC55KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICBtb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkRvd24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgIGlmIChhcHAuY2xpY2soeCwgeSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9O1xyXG5cclxuICAgcG9pbnRlck1vZGVTcGVjaWFsID0gKHggPCAwLjEgKiBjYW52YXMud2lkdGgpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgb2xkWCA9IHg7XHJcbiAgIG9sZFkgPSB5O1xyXG5cclxuICAgcG9zID0gU3BoZXJpY2FsQ29vcmQuZnJvbVhZWihVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzKTtcclxuXHJcbiAgIG1vdXNlRG93biA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICBpZiAobW91c2VEb3duKSB7XHJcbiAgICAgIGlmIChwb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuVmlldykge1xyXG4gICAgICAgICBpZiAocG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgIHpvb21aICs9ICh5IC0gb2xkWSkgKiAwLjAxO1xyXG4gICAgICAgICAgICB6b29tWiA9IGNsYW1wKHpvb21aLCAxLCA2KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgICAgICAgYW5nbGVZIC09ICh4IC0gb2xkWCkgKiAwLjAxO1xyXG4gICAgICAgICAgICBhbmdsZVggKz0gKHkgLSBvbGRZKSAqIDAuMDE7XHJcblxyXG4gICAgICAgICAgICAvLyBkb24ndCBnbyB1cHNpZGUgZG93blxyXG4gICAgICAgICAgICBhbmdsZVggPSBNYXRoLm1heChhbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICAgICAgICBhbmdsZVggPSBNYXRoLm1pbihhbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChwb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgIGlmIChwb2ludGVyTW9kZVNwZWNpYWwpIHtcclxuICAgICAgICAgICAgcG9zLnJhZGl1cyAtPSAoeSAtIG9sZFkpICogMC4wMDU7XHJcbiAgICAgICAgICAgIHBvcy5yYWRpdXMgPSBjbGFtcChwb3MucmFkaXVzLCBVbmlmb3Jtcy51QmFsbFJhZGl1cyArIDAuNSwgNSk7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMgPSBwb3MudG9YWVooKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcG9zLnJvdGF0aW9uQW5nbGUgKz0gKHggLSBvbGRYKTtcclxuICAgICAgICAgICAgcG9zLmVsZXZhdGlvbkFuZ2xlICs9ICh5IC0gb2xkWSk7XHJcbiAgICAgICAgICAgIHBvcy5lbGV2YXRpb25BbmdsZSA9IGNsYW1wKHBvcy5lbGV2YXRpb25BbmdsZSwgMCwgMTgwKTtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0UG9zLnZhbHVlcyA9IHBvcy50b1hZWigpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNsZWFyIHRoZSBzYW1wbGUgYnVmZmVyXHJcbiAgICAgIGFwcC5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAvLyByZW1lbWJlciB0aGlzIGNvb3JkaW5hdGVcclxuICAgICAgb2xkWCA9IHg7XHJcbiAgICAgIG9sZFkgPSB5O1xyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgfVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIGludCB1TW9kZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVNYXhDaHJvbWE7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVIaWdobGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdU1pZExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVEYXJrTGlnaHRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdVNoYWRvd0NvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1UmVmbGVjdGVkTGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdURhcmtBY2NlbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVCQUxMX1NQRUNVTEFSO1xcclxcbnVuaWZvcm0gZmxvYXQgdUJBTExfTElHSFQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1QkFMTF9TSEFET1c7XFxyXFxuXFxyXFxuI2RlZmluZSBNT0RFX1NDSUVOQ0UgMFxcclxcbiNkZWZpbmUgTU9ERV9WQUxVRSAxXFxyXFxuI2RlZmluZSBNT0RFX0NIUk9NQSAyXFxyXFxuI2RlZmluZSBNT0RFX0JBTkRTIDNcXHJcXG5cXHJcXG52ZWM0IHdoaXRlID0gdmVjNCgxLjAsIDEuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgcmVkID0gdmVjNCgxLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgb3JhbmdlID0gdmVjNCgxLjAsIDAuNjUsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IHllbGxvdyA9IHZlYzQoMS4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGdyZWVuID0gdmVjNCgwLjAsIDEuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgY3lhbiA9IHZlYzQoMC4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IGJsdWUgPSB2ZWM0KDAuMCwgMC4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibGFjayA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4jZGVmaW5lIE5VTV9DT0xPUlMgNlxcclxcbnZlYzQgY29sb3JzW05VTV9DT0xPUlNdO1xcclxcblxcclxcbnZlYzQgdmFsdWUyQ29sb3IoZmxvYXQgdmFsdWUpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNwYW4gPSAxLjAgLyBmbG9hdChOVU1fQ09MT1JTIC0gMSk7XFxyXFxuICAgdmFsdWUgKj0gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIGlmICh2YWx1ZSA8IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1swXTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAxLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF0gKyB2YWx1ZSAqIChjb2xvcnNbMV0gLSBjb2xvcnNbMF0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDIuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1sxXSArICh2YWx1ZSAtIDEuMCkgKiAoY29sb3JzWzJdIC0gY29sb3JzWzFdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAzLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMl0gKyAodmFsdWUgLSAyLjApICogKGNvbG9yc1szXSAtIGNvbG9yc1syXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzNdICsgKHZhbHVlIC0gMy4wKSAqIChjb2xvcnNbNF0gLSBjb2xvcnNbM10pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDUuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s0XSArICh2YWx1ZSAtIDQuMCkgKiAoY29sb3JzWzVdIC0gY29sb3JzWzRdKTtcXHJcXG4gICB9XFxyXFxuICAgLypcXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDYuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s1XSArICh2YWx1ZSAtIDUuMCkgKiAoY29sb3JzWzZdIC0gY29sb3JzWzVdKTtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbTlVNX0NPTE9SUyAtIDFdO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgdG9HcmF5KHZlYzQgYylcXHJcXG57XFxyXFxuICAgLy8gbG90cyBvZiB3YXlzIHRvIGNvbnZlcnQgUkdCIHRvIGdyYXkgc2NhbGUuXFxyXFxuXFxyXFxuICAgLy8gc2ltcGxlIGF2ZXJhZ2luZyBtZXRob2RcXHJcXG4gICAvLyByZXR1cm4gKGMuciArIGMuZyArIGMuYikgLyAzLjA7XFxyXFxuXFxyXFxuICAgLy8gcmVsYXRpdmUgcGVyY2VwdHVhbCB2YWx1ZXNcXHJcXG4gICAvLyByZXR1cm4gMC4zICogYy5yICsgMC41OSAqIGMuZyArIDAuMTEgKiBjLmI7XFxyXFxuXFxyXFxuICAgLy8gbHVtaW5vc2l0eSBtZWFzdXJlXFxyXFxuICAgZmxvYXQgZ2FtbWEgPSAyLjI7XFxyXFxuICAgZmxvYXQgeSA9IDAuMjEyNiAqIHBvdyhjLnIsIGdhbW1hKSArIDAuNzE1MiAqIHBvdyhjLmcsIGdhbW1hKSArIC4wNzIyICogcG93KGMuYiwgZ2FtbWEpO1xcclxcbiAgIGZsb2F0IGwgPSAxMTYuMCAqIHBvdyh5LCAxLjAgLyAzLjApIC0gMTYuMDtcXHJcXG4gICByZXR1cm4gbCAvIDEwMC4wO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzVmFsdWUoKVxcclxcbntcXHJcXG4gICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuICAgZmxvYXQgcmdiID0gdG9HcmF5KGNvbG9yKTtcXHJcXG4gICByZXR1cm4gdmVjNChyZ2IsIHJnYiwgcmdiLCAxLjApO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzQ2hyb21hKClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgIC8vIHJlbmRlciB0aGUgc2NhbGUgYXMgYSBiYXIgb24gdGhlIGxlZnRcXHJcXG4gICBpZiAodGV4Q29vcmQueCA8IDAuMDMpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB2YWx1ZTJDb2xvcigodGV4Q29vcmQueSAtIDAuMSkgLyAwLjkpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIGlmIChjb2xvci5hID49IHVCQUxMX1NIQURPVylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZmxvYXQgYXZnID0gKGNvbG9yLnIgKyBjb2xvci5nICsgY29sb3IuYikgLyAzLjA7XFxyXFxuICAgICAgICAgZmxvYXQgcmdiID0gKGFicyhhdmcgLSBjb2xvci5yKSArIGFicyhhdmcgLSBjb2xvci5nKSArIGFicyhhdmcgLSBjb2xvci5iKSkgLyAoNC4wIC8gMy4wKTtcXHJcXG4gICAgICAgICByZXR1cm4gdmFsdWUyQ29sb3IocmdiIC8gdU1heENocm9tYSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBkMih2ZWMzIGMxLCB2ZWMzIGMyKVxcclxcbntcXHJcXG4gICAvLyBzdW0gdGhlIHNxdWFyZXMgb2YgdGhlIGRpZmZlcmVuY2VzXFxyXFxuICAgcmV0dXJuIHBvdyhjMS5yIC0gYzIuciwgMi4wKSArIHBvdyhjMS5nIC0gYzIuZywgMi4wKSArIHBvdyhjMS5iIC0gYzIuYiwgMi4wKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjbG9zZXN0KHZlYzMgY29sb3IsIHZlYzMgbGlnaHQsIHZlYzMgbWlkLCB2ZWMzIGRhcmspXFxyXFxue1xcclxcbiAgIGZsb2F0IGRsaWdodCA9IGQyKGNvbG9yLCBsaWdodCk7XFxyXFxuICAgZmxvYXQgZG1pZCA9IGQyKGNvbG9yLCBtaWQpO1xcclxcbiAgIGZsb2F0IGRkYXJrID0gZDIoY29sb3IsIGRhcmspO1xcclxcblxcclxcbiAgIGZsb2F0IGRtaW4gPSBtaW4oZGxpZ2h0LCBtaW4oZG1pZCwgZGRhcmspKTtcXHJcXG4gICBpZiAoZG1pbiA9PSBkbGlnaHQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBsaWdodDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAoZG1pbiA9PSBkbWlkKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbWlkO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBkYXJrO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc0JhbmRzKClcXHJcXG57XFxyXFxuICAgZmxvYXQgc2l6ZSA9IDAuMDc7XFxyXFxuICAgZmxvYXQgbWFyZ2luID0gKDEuMCAtIDYuMCAqIHNpemUpIC8gMi4wO1xcclxcbiAgIGlmICh0ZXhDb29yZC54IDwgc2l6ZSAmJiB0ZXhDb29yZC55ID4gbWFyZ2luICYmIHRleENvb3JkLnkgPCAoMS4wIC0gbWFyZ2luKSlcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMS4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVEYXJrQWNjZW50Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMi4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVTaGFkb3dDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyAzLjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodURhcmtMaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDQuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1TWlkTGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA1LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodUxpZ2h0TGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSAvLyBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA3LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodUhpZ2hsaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuICAgICAgLy8gZGVmaW5lIHRoZSB0ZXJtaW5hdG9yIGFzIHRoZSBwb2ludCB3aGVyZSB0aGluZ3MgYXJlIDUwJSBpbiBzaGFkb3dcXHJcXG4gICAgICBmbG9hdCB0ZXJtaW5hdG9yID0gKCh1QkFMTF9TSEFET1cgKyB1QkFMTF9MSUdIVCkgLyAyLjApO1xcclxcbiAgICAgIGlmIChjb2xvci5hID4gMS4wICYmIGNvbG9yLmEgPD0gdGVybWluYXRvcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmVjMyBjID0gY2xvc2VzdChjb2xvci5yZ2IsIHVTaGFkb3dDb2xvciwgdVJlZmxlY3RlZExpZ2h0Q29sb3IsIHVEYXJrQWNjZW50Q29sb3IpO1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KGMsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKGNvbG9yLmEgPiB0ZXJtaW5hdG9yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICAvLyBvbmx5IHJlbmRlciB0aGUgaGlnaGxpZ2h0IHdoZXJlIGl0J3MgY29udHJpYnV0aW9uIGlzIHNpZ25pZmljYW50LCBpLmUuIGdyZWF0ZXJcXHJcXG4gICAgICAgICAvLyB0aGFuIHNvbWUgdGhyZXNob2xkXFxyXFxuICAgICAgICAgY29uc3QgZmxvYXQgU1BFQ1VMQVJfVEhSRVNIT0xEID0gMC4xO1xcclxcbiAgICAgICAgIGlmIChjb2xvci5hID4gKHVCQUxMX0xJR0hUICsgU1BFQ1VMQVJfVEhSRVNIT0xEKSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHZlYzQodUhpZ2hsaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHZlYzMgYyA9IGNsb3Nlc3QoY29sb3IucmdiLCB1TGlnaHRMaWdodENvbG9yLCB1TWlkTGlnaHRDb2xvciwgdURhcmtMaWdodENvbG9yKTtcXHJcXG4gICAgICAgICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gY29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc1NjaWVuY2UoKVxcclxcbntcXHJcXG4gICAvLyBqdXN0IHJldHVybiB0aGUgdGV4dHVyZVxcclxcbiAgIHJldHVybiB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgY29sb3JzWzBdID0gYmxhY2s7XFxyXFxuICAgY29sb3JzWzFdID0gYmx1ZTtcXHJcXG4gICBjb2xvcnNbMl0gPSBncmVlbjtcXHJcXG4gICBjb2xvcnNbM10gPSB5ZWxsb3c7XFxyXFxuICAgY29sb3JzWzRdID0gb3JhbmdlO1xcclxcbiAgIGNvbG9yc1s1XSA9IHJlZDtcXHJcXG5cXHJcXG4gICBpZiAodU1vZGUgPT0gTU9ERV9WQUxVRSlcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNWYWx1ZSgpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh1TW9kZSA9PSBNT0RFX0NIUk9NQSlcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNDaHJvbWEoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9CQU5EUylcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNCYW5kcygpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzU2NpZW5jZSgpO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2NhbGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1WE9mZnNldDtcXHJcXG51bmlmb3JtIGZsb2F0IHVZT2Zmc2V0O1xcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHRleENvb3JkID0gdmVydGV4Lnh5ICogMC41ICsgMC41O1xcclxcblxcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh1U2NhbGUgKiB2ZXJ0ZXgueCArIHVYT2Zmc2V0LCB1U2NhbGUgKiB2ZXJ0ZXgueSArIHVZT2Zmc2V0LCAwLjAsIDEuMCk7XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWU7XFxyXFxudmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGV4dHVyZVdlaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVUZXh0dXJlU2l6ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUaW1lU2luY2VTdGFydDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0UG9zO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVCYWxsQ29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1QmFsbFJhZGl1cztcXHJcXG51bmlmb3JtIGZsb2F0IHVQYXNzO1xcclxcbnVuaWZvcm0gZmxvYXQgdU51bVBhc3NlcztcXHJcXG51bmlmb3JtIGZsb2F0IHVTYW1wbGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1QkFMTF9TUEVDVUxBUjtcXHJcXG51bmlmb3JtIGZsb2F0IHVCQUxMX0xJR0hUO1xcclxcbnVuaWZvcm0gZmxvYXQgdUJBTExfU0hBRE9XO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgdUJhbGxMaWdodFNoaWZ0O1xcclxcbnVuaWZvcm0gZmxvYXQgdUJhbGxMaWdodFRpbnRTdHJlbmd0aDtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVCYWxsU2hhZG93U2hpZnQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1QmFsbFNoYWRvd1RpbnRTdHJlbmd0aDtcXHJcXG5cXHJcXG5jb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDA7XFxyXFxuY29uc3QgZmxvYXQgRVBTSUxPTiA9IDAuMDAwMTtcXHJcXG5jb25zdCBmbG9hdCBJTkZJTklUWSA9IDEwMDAwLjA7XFxyXFxuY29uc3QgZmxvYXQgTElHSFRfU0laRSA9IDAuMTtcXHJcXG52ZWMzIEJBTExfQ0VOVEVSID0gdmVjMygwLCB1QmFsbFJhZGl1cywgMCk7XFxyXFxuY29uc3QgdmVjMyBET01FX0NFTlRFUiA9IHZlYzMoMCwgMCwgMCk7XFxyXFxuY29uc3QgZmxvYXQgRE9NRV9SQURJVVMgPSA3LjA7XFxyXFxuY29uc3QgZmxvYXQgVkFMID0gMC44O1xcclxcbmNvbnN0IHZlYzMgRE9NRV9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBGTE9PUl9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBBTUJJRU5UX0NPTE9SID0gdmVjMygxLjAsIDEuMCwgMS4wKTtcXHJcXG5jb25zdCBpbnQgTlVNX0xJR0hUUyA9IDY7XFxyXFxuY29uc3QgZmxvYXQgSEVJR0hUID0gNC4wO1xcclxcbmNvbnN0IGZsb2F0IFJBRElVUyA9IDQuMDtcXHJcXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjU7XFxyXFxuXFxyXFxuc3RydWN0IExpZ2h0XFxyXFxue1xcclxcbiAgIGZsb2F0IGludGVuc2l0eTtcXHJcXG4gICBmbG9hdCBzaXplO1xcclxcbiAgIHZlYzMgcG9zO1xcclxcbiAgIHZlYzMgY29sb3I7XFxyXFxufTtcXHJcXG5cXHJcXG5MaWdodCBMaWdodHNbTlVNX0xJR0hUU107XFxyXFxuXFxyXFxuZmxvYXQgaW50ZXJzZWN0U3BoZXJlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXHJcXG4gICBmbG9hdCBhID0gZG90KHJheSwgcmF5KTtcXHJcXG4gICBmbG9hdCBiID0gMi4wICogZG90KHRvU3BoZXJlLCByYXkpO1xcclxcbiAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cyAqIHNwaGVyZVJhZGl1cztcXHJcXG4gICBmbG9hdCBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xcclxcbiAgIGlmIChkaXNjcmltaW5hbnQgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHQxID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBmbG9hdCB0MiA9ICgtYiArIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgaWYgKHQxID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQyID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDI7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yU3BoZXJlKHZlYzMgaGl0LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICByZXR1cm4gKGhpdCAtIHNwaGVyZUNlbnRlcikgLyBzcGhlcmVSYWRpdXM7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6ICsgc2VlZCwgc2NhbGUpKSAqIDQzNzU4LjU0NTMgKyBzZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbihmbG9hdCBzZWVkLCB2ZWMzIG5vcm1hbClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCkgPCAuNSlcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygxLCAwLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygwLCAxLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByICogY29zKGFuZ2xlKSAqIHNkaXIgKyByICogc2luKGFuZ2xlKSAqIHRkaXIgKyBzcXJ0KDEuIC0gdSkgKiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB6ID0gMS4wIC0gMi4wICogdTtcXHJcXG4gICBmbG9hdCByID0gc3FydCgxLjAgLSB6ICogeik7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgcmV0dXJuIHZlYzMociAqIGNvcyhhbmdsZSksIHIgKiBzaW4oYW5nbGUpLCB6KTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihzZWVkKSAqIHNxcnQocmFuZG9tKHZlYzMoMzYuNzUzOSwgNTAuMzY1OCwgMzA2LjI3NTkpLCBzZWVkKSk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW5TaGFkb3codmVjMyBvcmlnaW4sIHZlYzMgcmF5KVxcclxcbntcXHJcXG4gICBmbG9hdCB0QmFsbCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG4gICBpZiAodEJhbGwgPCAxLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbi8vIEFsbCBjb21wb25lbnRzIGFyZSBpbiB0aGUgcmFuZ2UgWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IHJnYjJoc3YodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDAuMCwgLTEuMCAvIDMuMCwgMi4wIC8gMy4wLCAtMS4wKTtcXHJcXG4gICB2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSwgdmVjNChjLmdiLCBLLnh5KSwgc3RlcChjLmIsIGMuZykpO1xcclxcbiAgIHZlYzQgcSA9IG1peCh2ZWM0KHAueHl3LCBjLnIpLCB2ZWM0KGMuciwgcC55engpLCBzdGVwKHAueCwgYy5yKSk7XFxyXFxuXFxyXFxuICAgZmxvYXQgZCA9IHEueCAtIG1pbihxLncsIHEueSk7XFxyXFxuICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxyXFxuICAgcmV0dXJuIHZlYzQoYWJzKHEueiArIChxLncgLSBxLnkpIC8gKDYuMCAqIGQgKyBlKSksIGQgLyAocS54ICsgZSksIHEueCwgYy5hKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZVsw4oCmMV0sIGluY2x1ZGluZyBodWUuXFxyXFxudmVjNCBoc3YycmdiKHZlYzQgYylcXHJcXG57XFxyXFxuICAgdmVjNCBLID0gdmVjNCgxLjAsIDIuMCAvIDMuMCwgMS4wIC8gMy4wLCAzLjApO1xcclxcbiAgIHZlYzMgcCA9IGFicyhmcmFjdChjLnh4eCArIEsueHl6KSAqIDYuMCAtIEsud3d3KTtcXHJcXG4gICByZXR1cm4gdmVjNChjLnogKiBtaXgoSy54eHgsIGNsYW1wKHAgLSBLLnh4eCwgMC4wLCAxLjApLCBjLnkpLCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHNoaWZ0VGVtcGVyYXR1cmUodmVjNCByZ2IsIGZsb2F0IGRlZywgZmxvYXQgdGludFN0cmVuZ3RoKVxcclxcbntcXHJcXG4gICB2ZWM0IGhzdiA9IHJnYjJoc3YocmdiKTtcXHJcXG4gICBoc3YueCArPSBkZWcgLyAzNjAuMDtcXHJcXG4gICB2ZWM0IGZ1bGxUaW50UmdiID0gaHN2MnJnYihoc3YpO1xcclxcblxcclxcbiAgIHJldHVybiBtaXgocmdiLCBmdWxsVGludFJnYiwgdGludFN0cmVuZ3RoKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gVE9ETyBtb3ZlIHRvIGEgY29tbW9uIGZpbGVcXHJcXG5mbG9hdCB0b0dyYXkodmVjNCBjKVxcclxcbntcXHJcXG4gICAvLyBsb3RzIG9mIHdheXMgdG8gY29udmVydCBSR0IgdG8gZ3JheSBzY2FsZS5cXHJcXG5cXHJcXG4gICAvLyBzaW1wbGUgYXZlcmFnaW5nIG1ldGhvZFxcclxcbiAgIC8vIHJldHVybiAoYy5yICsgYy5nICsgYy5iKSAvIDMuMDtcXHJcXG5cXHJcXG4gICAvLyByZWxhdGl2ZSBwZXJjZXB0dWFsIHZhbHVlc1xcclxcbiAgIC8vIHJldHVybiAwLjMgKiBjLnIgKyAwLjU5ICogYy5nICsgMC4xMSAqIGMuYjtcXHJcXG5cXHJcXG4gICAvLyBsdW1pbm9zaXR5IG1lYXN1cmVcXHJcXG4gICBmbG9hdCBnYW1tYSA9IDIuMjtcXHJcXG4gICBmbG9hdCB5ID0gMC4yMTI2ICogcG93KGMuciwgZ2FtbWEpICsgMC43MTUyICogcG93KGMuZywgZ2FtbWEpICsgLjA3MjIgKiBwb3coYy5iLCBnYW1tYSk7XFxyXFxuICAgZmxvYXQgbCA9IDExNi4wICogcG93KHksIDEuMCAvIDMuMCkgLSAxNi4wO1xcclxcbiAgIHJldHVybiBsIC8gMTAwLjA7XFxyXFxufVxcclxcblxcclxcbnZlYzQgdG9BcnRpc3QodmVjNCBjb2xvcilcXHJcXG57XFxyXFxuICAgZmxvYXQgcGVyY2VudFNoYWRvdyA9IGNsYW1wKHVCQUxMX0xJR0hUIC0gY29sb3IuYSwgMC4wLCAxLjApO1xcclxcbiAgIGZsb2F0IHBlcmNlbnRMaWdodCA9IDEuMCAtIHBlcmNlbnRTaGFkb3c7XFxyXFxuXFxyXFxuICAgLy8gdGVtcGVyYXR1cmUgc2hpZnRcXHJcXG4gICB2ZWM0IHJnYmxpZ2h0ID0gc2hpZnRUZW1wZXJhdHVyZShjb2xvciwgLXVCYWxsTGlnaHRTaGlmdCwgdUJhbGxMaWdodFRpbnRTdHJlbmd0aCk7XFxyXFxuICAgdmVjNCByZ2JzaGFkb3cgPSBzaGlmdFRlbXBlcmF0dXJlKGNvbG9yLCAtdUJhbGxTaGFkb3dTaGlmdCwgdUJhbGxTaGFkb3dUaW50U3RyZW5ndGgpO1xcclxcbiAgIHZlYzQgcmdibWl4ID0gbWl4KHJnYmxpZ2h0LCByZ2JzaGFkb3csIHBlcmNlbnRTaGFkb3cpO1xcclxcbiAgIHZlYzQgaHN2ID0gcmdiMmhzdihyZ2JtaXgpO1xcclxcblxcclxcbiAgIC8vIGNvcnJlY3Qgb3ZlcmZsb3dzXFxyXFxuICAgaWYgKGhzdi54ID4gMS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICBoc3YueCAtPSAxLjA7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKGhzdi54IDwgMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICBoc3YueCArPSAxLjA7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC8vIGFkanVzdCBsaWdodC9kYXJrIHZhbHVlIHRvIG1hdGNoIHRoZSBvbGQgdmFsdWUgaW4gcmdiIHNwYWNlXFxyXFxuICAgZmxvYXQgb3JpZ1ZhbHVlID0gdG9HcmF5KGNvbG9yKTtcXHJcXG4gICBmbG9hdCBuZXdWYWx1ZSA9IHRvR3JheShoc3YycmdiKGhzdikpO1xcclxcbiAgIGZvciAoaW50IGkgPSAwOyBpIDwgMTAwMDsgaSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAoYWJzKG9yaWdWYWx1ZSAtIG5ld1ZhbHVlKSA8IDAuMDEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGhzdi56ICs9IChvcmlnVmFsdWUgLSBuZXdWYWx1ZSkgLyAxMC4wO1xcclxcbiAgICAgICAgIG5ld1ZhbHVlID0gdG9HcmF5KGhzdjJyZ2IoaHN2KSk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBjb252ZXJ0IGJhY2sgdG8gcmdiXFxyXFxuICAgcmV0dXJuIGhzdjJyZ2IoY2xhbXAoaHN2LCAwLjAsIDEuMCkpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IGNhbGN1bGF0ZUNvbG9yKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSlcXHJcXG57XFxyXFxuICAgdmVjMyBhY2N1bXVsYXRlZENvbG9yID0gdmVjMygwLjApO1xcclxcbiAgIHZlYzMgY29sb3JNYXNrID0gdmVjMygxLjApO1xcclxcbiAgIHZlYzMgZXllID0gb3JpZ2luO1xcclxcbiAgIGJvb2wgYmFsbEhpdCA9IGZhbHNlO1xcclxcbiAgIGJvb2wgYmFsbFNoYWRvdyA9IGZhbHNlO1xcclxcbiAgIGZsb2F0IHNwZWN1bGFyQ29udHJpYnV0aW9uID0gMC4wO1xcclxcblxcclxcbiAgIC8vIG1haW4gcmF5dHJhY2luZyBsb29wXFxyXFxuICAgZm9yIChpbnQgYm91bmNlID0gMDsgYm91bmNlIDwgTUFYX0JPVU5DRVM7IGJvdW5jZSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBjb21wdXRlIHRoZSBpbnRlcnNlY3Rpb24gd2l0aCBldmVyeXRoaW5nXFxyXFxuICAgICAgZmxvYXQgdEJhbGwgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuICAgICAgdmVjMyBzdXJmYWNlQ29sb3IgPSB2ZWMzKDAuNSwgMC41LCAwLjUpO1xcclxcblxcclxcbiAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gaWYgdGhlIGZpcnN0IHJheSBoaXRzIHRoZSBsaWdodCwgcmV0dXJuIHRoZSBsaWdodCBjb2xvci4gVGhpc1xcclxcbiAgICAgICAgIC8vIHNpbXVsYXRlcyBkaXNwbGF5aW5nIHRoZSBsaWdodFxcclxcbiAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBMaWdodHNbaV0ucG9zLCBMaWdodHNbaV0uc2l6ZSkgPCB0QmFsbClcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgcmV0dXJuIHZlYzQoTGlnaHRzW2ldLmludGVuc2l0eSAqIExpZ2h0c1tpXS5jb2xvciwgMS4wKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBmbG9hdCB0RG9tZSA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG5cXHJcXG4gICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGludGVyc2VjdGlvblxcclxcbiAgICAgIGZsb2F0IHQgPSBJTkZJTklUWTtcXHJcXG4gICAgICBmbG9hdCB0Zmxvb3IgPSBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAgICAvLyBjaGVjayBmb3IgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZFxcclxcbiAgICAgIGlmIChyYXkueSA8IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gZGlzdGFuY2UgdG8gZmxvb3IgPSBudW0gdW5pdCB2ZWN0b3JzIHJlcXVpcmVkIHRvIHJlYWNoIHRoZSBmbG9vclxcclxcbiAgICAgICAgIHRmbG9vciA9IC1vcmlnaW4ueSAvIHJheS55O1xcclxcbiAgICAgICAgIGlmICh0Zmxvb3IgPCB0KVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB0ID0gdGZsb29yO1xcclxcbiAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBGTE9PUl9DT0xPUjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHRCYWxsIDwgdClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdmVjMyh1QmFsbENvbG9yKTtcXHJcXG4gICAgICAgICB0ID0gdEJhbGw7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBiYWxsSGl0ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHREb21lIDwgdClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRE9NRV9DT0xPUjtcXHJcXG4gICAgICAgICB0ID0gdERvbWU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGluZm8gYWJvdXQgaGl0XFxyXFxuICAgICAgdmVjMyBoaXQgPSBvcmlnaW4gKyByYXkgKiB0O1xcclxcbiAgICAgIHZlYzMgbm9ybWFsO1xcclxcblxcclxcbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsXFxyXFxuICAgICAgaWYgKHQgPT0gdGZsb29yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSB2ZWMzKDAuMCwgMS4wLCAwLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRCYWxsKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JTcGhlcmUoaGl0LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHREb21lKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBub3JtYWwgPSAtbm9ybWFsRm9yU3BoZXJlKGhpdCwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgY29sb3JNYXNrICo9IHN1cmZhY2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgICBpZiAobGVuZ3RoKGNvbG9yTWFzaykgPCAwLjAxKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGNvbXB1dGUgZGlmZnVzZSBsaWdodGluZyBjb250cmlidXRpb25cXHJcXG4gICAgICAgICB2ZWMzIHRvTGlnaHQgPSBMaWdodHNbaV0ucG9zIC0gaGl0O1xcclxcblxcclxcbiAgICAgICAgIC8vIHRyYWNlIGEgc2hhZG93IHJheSB0byB0aGUgbGlnaHRcXHJcXG4gICAgICAgICBpZiAoaW5TaGFkb3coaGl0ICsgbm9ybWFsICogRVBTSUxPTiwgdG9MaWdodCkgPT0gZmFsc2UpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIC8vIGRpZmZ1c2UgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlmZnVzZSA9IG1heCgwLjAsIGRvdChub3JtYWxpemUodG9MaWdodCksIG5vcm1hbCkpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIHNwZWN1bGFyIGNvbXBvbmVudFxcclxcbiAgICAgICAgICAgIHZlYzMgdG9FeWUgPSBleWUgLSBoaXQ7XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmwgPSBub3JtYWxpemUodG9MaWdodCk7XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmUgPSBub3JtYWxpemUodG9FeWUpO1xcclxcbiAgICAgICAgICAgIHZlYzMgYmlzZWN0b3IgPSAobjJsICsgbjJlKSAvIGxlbmd0aChuMmwgKyBuMmUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyQ29lZmZpY2llbnQgPSAwLjU7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc2hpbmluZXNzID0gMTAwLjA7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc3BlY3VsYXIgPSBzcGVjdWxhckNvZWZmaWNpZW50ICogcG93KG1heCgwLjAsIGRvdChiaXNlY3Rvciwgbm9ybWFsKSksIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gYXBwbHkgbGlnaHQgZmFsbCBvZmYgYXMgZGlzdGFuY2Ugc3F1YXJlcy4gVXNlIGEgbWluIHZhbHVlIGZvciB0aGVcXHJcXG4gICAgICAgICAgICAvLyBsaWdodCBzaXplIG90aGVyd2lzZSBmYWxsb2ZmIGlzIHRvbyByYXBpZFxcclxcbiAgICAgICAgICAgIGZsb2F0IHJhZGl1cyA9IG1heCgwLjc1LCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IG1heCgxLjAsIChsZW5ndGgodG9MaWdodCkgLSByYWRpdXMpIC8gcmFkaXVzKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBsaWdodEludGVuc2l0eSA9IExpZ2h0c1tpXS5pbnRlbnNpdHkgLyAoZGlzdCAqIGRpc3QpO1xcclxcblxcclxcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gY29sb3JNYXNrICogTGlnaHRzW2ldLmNvbG9yICogbGlnaHRJbnRlbnNpdHkgKiBkaWZmdXNlO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIFRPRE8gZGVmaW5lIGEgY29sb3IgbWFzayBmb3Igc3BlY3VsYXIgcmVmbGVjdGlvblxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBtaXgoc3VyZmFjZUNvbG9yLCBMaWdodHNbaV0uY29sb3IsIDAuOCkgKlxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9XFxyXFxuICAgICAgICAgICAgICAgIChsZW5ndGgoc3VyZmFjZUNvbG9yKSAqIExpZ2h0c1tpXS5jb2xvcikgKiBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcblxcclxcbiAgICAgICAgICAgIGlmIChib3VuY2UgPT0gMCAmJiBpID09IDApXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHNwZWN1bGFyQ29udHJpYnV0aW9uICs9IGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlIGlmIChib3VuY2UgPT0gMCAmJiBpID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGJhbGxTaGFkb3cgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIG5leHQgb3JpZ2luXFxyXFxuICAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odVRpbWVTaW5jZVN0YXJ0ICsgZmxvYXQoYm91bmNlKSwgbm9ybWFsKTtcXHJcXG5cXHJcXG4gICAgICBvcmlnaW4gPSBoaXQ7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIGZsb2F0IGFscGhhID0gMS4wO1xcclxcbiAgIGlmIChiYWxsSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAoYmFsbFNoYWRvdylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1QkFMTF9TSEFET1c7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1QkFMTF9MSUdIVDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYWxwaGEgKz0gY2xhbXAoc3BlY3VsYXJDb250cmlidXRpb24sIDAuMCwgMS4wKTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgdmVjNCBzY2llbmNlQ29sb3IgPSB2ZWM0KGNsYW1wKGFjY3VtdWxhdGVkQ29sb3IsIDAuMCwgMS4wKSwgYWxwaGEpO1xcclxcbiAgIHJldHVybiBzY2llbmNlQ29sb3I7XFxyXFxuICAgLypcXHJcXG4gICBpZiAoYmFsbEhpdClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHZlYzQodG9BcnRpc3Qoc2NpZW5jZUNvbG9yKS5yZ2IsIGFscGhhKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gc2NpZW5jZUNvbG9yO1xcclxcbiAgIH1cXHJcXG4gICAqL1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBpZiAoZmxvb3IobW9kKGdsX0ZyYWdDb29yZC54LCB1TnVtUGFzc2VzKSkgIT0gdVBhc3MpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh1U2FtcGxlID09IDAuMCAmJiB1UGFzcyA9PSAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHVUZXh0dXJlU2l6ZSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHJldHVybjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gICB2ZWMzIHJhbmQgPSB1bmlmb3JtbHlSYW5kb21WZWN0b3IodVRpbWVTaW5jZVN0YXJ0KSAqIExJR0hUX1NJWkU7XFxyXFxuICAgdmVjMyByYW5kID0gdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHVTYW1wbGUpICogTElHSFRfU0laRTtcXHJcXG5cXHJcXG4gICBMaWdodHNbMF0uaW50ZW5zaXR5ID0gdUxpZ2h0SW50ZW5zaXR5O1xcclxcbiAgIExpZ2h0c1swXS5zaXplID0gTElHSFRfU0laRTtcXHJcXG4gICBMaWdodHNbMF0ucG9zID0gdUxpZ2h0UG9zICsgcmFuZDtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB1TGlnaHRDb2xvcjtcXHJcXG5cXHJcXG4gICBmb3IgKGludCBpID0gMTsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgeCA9IFJBRElVUyAqIHNpbigyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLng7XFxyXFxuICAgICAgZmxvYXQgeSA9IEhFSUdIVCArIHJhbmQueTtcXHJcXG4gICAgICBmbG9hdCB6ID0gUkFESVVTICogY29zKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQuejtcXHJcXG5cXHJcXG4gICAgICBMaWdodHNbaV0uaW50ZW5zaXR5ID0gdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG4gICAgICBMaWdodHNbaV0uc2l6ZSA9IDIuMCAqIExJR0hUX1NJWkU7XFxyXFxuICAgICAgTGlnaHRzW2ldLnBvcyA9IHZlYzMoeCwgeSwgeik7XFxyXFxuICAgICAgTGlnaHRzW2ldLmNvbG9yID0gQU1CSUVOVF9DT0xPUjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gbWVyZ2UgdGhlIG5ldyBjb2xvciBpbnRvIHRoZSBleGlzdGluZyB0ZXh0dXJlXFxyXFxuICAgdmVjNCB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHVUZXh0dXJlU2l6ZSk7XFxyXFxuICAgdmVjNCBuZXdDb2xvciA9IGNhbGN1bGF0ZUNvbG9yKHVFeWUsIGluaXRpYWxSYXkpO1xcclxcbiAgIGdsX0ZyYWdDb2xvciA9IG1peChuZXdDb2xvciwgdGV4dHVyZUNvbG9yLCB1VGV4dHVyZVdlaWdodCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWUsIHVSYXkwMCwgdVJheTAxLCB1UmF5MTAsIHVSYXkxMTtcXHJcXG52YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgodVJheTAwLCB1UmF5MDEsIHBlcmNlbnQueSksIG1peCh1UmF5MTAsIHVSYXkxMSwgcGVyY2VudC55KSwgcGVyY2VudC54KTtcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcclxcbn1cXHJcXG5cIiJdLCJzb3VyY2VSb290IjoiIn0=