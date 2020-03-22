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
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n.SliderLabel {\r\n  display: inline-block;\r\n  width: 25%;\r\n  text-align: right;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.SliderHeader {\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  color: gray;\r\n}\r\n\r\n.SliderRange {\r\n  width: 50%;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  border-radius: 15px;\r\n  height: 15px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.SliderRange::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n}\r\n\r\n.SliderRange::-moz-range-thumb {\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n  cursor: pointer;\r\n}\r\n\r\n.SliderColorSpan {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 5px;\r\n  border-radius: 50%;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#drawTime {\r\n  position: absolute;\r\n  top: -495px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  font-size: 8pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#modeButton {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: yellow;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#progressSpan {\r\n  position: absolute;\r\n  bottom: 3px;\r\n  left: 0px;\r\n  right: 0px;\r\n  height: 5px;\r\n  background-color: rgba(50, 205, 50, 0.75);\r\n}\r\n\r\n/* Style the tab */\r\n.Tabs {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Style the buttons that are used to open the tab content */\r\n.Tabs button {\r\n  background-color: #fff;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  font-size: 12pt;\r\n  color: #333;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n.Tabs button:hover {\r\n  background-color: #ddd;\r\n  color: #000;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n.Tabs button.active {\r\n  background-color: #eee;\r\n  color: #000;\r\n}\r\n\r\n/* Style the tab content */\r\n.TabContent {\r\n  display: none;\r\n  padding: 20px 12px;\r\n  background-color: #eee;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .SliderHeader {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .SliderLabel {\r\n    width: 30%;\r\n    font-size: 40px;\r\n    padding-bottom: 18px;\r\n  }\r\n\r\n  .SliderRange {\r\n    width: 45%;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .SliderRange::-webkit-slider-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderRange::-moz-range-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderColorSpan {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .SliderValueSpan {\r\n    font-size: 40px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #drawTime {\r\n    top: -960px;\r\n    left: 4px;\r\n    font-size: 16pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #modeButton {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  .Tabs button {\r\n    padding: 20px 40px;\r\n    font-size: 40px;\r\n  }\r\n}\r\n", ""]);
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

/***/ "./src/Globals.ts":
/*!************************!*\
  !*** ./src/Globals.ts ***!
  \************************/
/*! exports provided: gl, isMobile, clamp, toDeg, toRad, mix, Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDeg", function() { return toDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
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
/* harmony import */ var _SphericalCoord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SphericalCoord */ "./src/SphericalCoord.ts");
/* harmony import */ var _glMat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./glMat */ "./src/glMat.ts");
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _TriangleSphere__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TriangleSphere */ "./src/TriangleSphere.ts");
/* harmony import */ var _TriangleCube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TriangleCube */ "./src/TriangleCube.ts");
/* harmony import */ var _TriangleObjFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TriangleObjFile */ "./src/TriangleObjFile.ts");











var PointerMode;
(function (PointerMode) {
    PointerMode[PointerMode["View"] = 0] = "View";
    PointerMode[PointerMode["Light"] = 1] = "Light";
})(PointerMode || (PointerMode = {}));
var PlanesApp = /** @class */ (function () {
    function PlanesApp(query) {
        this.pointerMode = PointerMode.View;
        this.pointerModeSpecial = false;
        this.mouseDown = false;
        this.dirty = true;
        this.query = query;
    }
    PlanesApp.prototype.component = function () {
        var _this = this;
        var div = document.createElement('div');
        var container = document.createElement('span');
        container.className = 'container';
        div.appendChild(container);
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas';
        container.appendChild(this.canvas);
        var context = this.canvas.getContext('webgl');
        if (!context) {
            // TODO display a message about not being able to create a WebGL context
            console.log("Unable to get WebGL context");
        }
        _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"].gl = context;
        this.renderer = new _PlanesRenderer__WEBPACK_IMPORTED_MODULE_3__["PlanesRenderer"]();
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
        document.onkeypress = function (event) {
            if (event.key === 'o') {
                _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_7__["NormalType"].Smooth);
            }
            else if (event.key === 'p') {
                _this.renderer.optimize(_TriangleObj__WEBPACK_IMPORTED_MODULE_7__["NormalType"].Flat);
            }
        };
        this.loadModel(this.query).then(function (tObj) {
            //this.renderer.setModel(tObj);
            requestAnimationFrame(function () { return _this.tick(); });
        });
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
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));
        /*
        let lightSlider = new Slider(div, {
           id: 'LightIntensity',
           label: 'Light',
           min: 0,
           max: 100,
           value: this.renderer.lightIntensity * 100,
           colors: [htmlColor.black, htmlColor.white],
           oninput: () => {
              this.renderer.lightIntensity = lightSlider.value / 100;
              this.dirty = true;
           }
        });
  
        let ambientSlider = new Slider(div, {
           id: 'AmbientIntensity',
           label: 'Ambient',
           min: 0,
           max: 100,
           value: this.renderer.ambientIntensity * 100,
           colors: [htmlColor.black, htmlColor.white],
           oninput: () => {
              this.renderer.ambientIntensity = ambientSlider.value / 100;
              this.dirty = true;
           }
        });
        */
        var syncLabel = document.createElement('label');
        syncLabel.id = 'SyncLabel';
        syncLabel.className = 'Label';
        syncLabel.innerText = 'Synchronize Values';
        div.appendChild(syncLabel);
        var syncCheckbox = document.createElement('input');
        syncCheckbox.type = 'checkbox';
        syncCheckbox.id = 'SyncCheckBox';
        syncCheckbox.className = 'SyncCheckBox';
        syncCheckbox.checked = this.renderer.sync;
        syncCheckbox.oninput = function () {
            _this.renderer.sync = !_this.renderer.sync;
            _this.updateSliders();
        };
        div.appendChild(syncCheckbox);
        div.appendChild(document.createElement('br'));
        this.threshold1Slider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](div, {
            id: 'Threshold1',
            label: 'Threshold 1',
            min: 0,
            max: 90,
            value: this.renderer.threshold1,
            oninput: function () {
                _this.renderer.threshold1 = _this.threshold1Slider.value;
                _this.updateSliders();
                _this.dirty = true;
            },
            getText: function () { return _this.renderer.threshold1.toFixed(0) + "º"; }
        });
        this.threshold2Slider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](div, {
            id: 'Threshold2',
            label: 'Threshold 2',
            min: 0,
            max: 90,
            value: this.renderer.threshold2,
            oninput: function () {
                _this.renderer.threshold2 = _this.threshold2Slider.value;
                _this.updateSliders();
                _this.dirty = true;
            },
            getText: function () { return _this.renderer.threshold2.toFixed(0) + "º"; }
        });
        this.lightLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](div, {
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
        this.midLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](div, {
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
        this.darkLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](div, {
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
        return div;
    };
    PlanesApp.prototype.loadModel = function (query) {
        var _this = this;
        if (query && query.toLowerCase() === 'trianglesphere') {
            var radius = 0.75;
            var center = new _glVec__WEBPACK_IMPORTED_MODULE_6__["glVec3"]([0, 0, 0]);
            var tObj = new _TriangleSphere__WEBPACK_IMPORTED_MODULE_8__["TriangleSphere"](100, radius, center);
            tObj.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_7__["NormalType"].Smooth);
            this.renderer.setModel(tObj);
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase() === 'trianglecube') {
            var size = 0.8;
            var center = new _glVec__WEBPACK_IMPORTED_MODULE_6__["glVec3"]([0, 0, 0]);
            var tObj = new _TriangleCube__WEBPACK_IMPORTED_MODULE_9__["TriangleCube"](size, center);
            this.renderer.setModel(tObj);
            return Promise.resolve(tObj);
        }
        else if (query && query.toLowerCase().endsWith('.obj')) {
            return fetch(query)
                .then(function (res) { return res.text(); })
                .then(function (res) {
                var tObj = new _TriangleObjFile__WEBPACK_IMPORTED_MODULE_10__["TriangleObjFile"](res);
                _this.renderer.setModel(tObj);
                _this.orient(tObj, query);
                return tObj;
            });
        }
        else {
            return Promise.reject('Unknown model: \'' + query + '\'');
        }
    };
    PlanesApp.prototype.orient = function (tObj, query) {
        var center = tObj.center;
        this.renderer.translate(new _glVec__WEBPACK_IMPORTED_MODULE_6__["glVec3"]([-center.x, -center.y, -center.z]));
        this.renderer.scale(1.75 / Math.max(tObj.width, tObj.height, tObj.depth));
        // orient each file so that it is facing forward
        switch (query.toLowerCase()) {
            case 'skull.obj':
                this.renderer.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(90));
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'femalehead.obj':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
            case 'wolf.obj':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-140));
                this.renderer.rotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(5));
                break;
            case 'sheephead.obj':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(-160));
                break;
            case 'tom.obj':
            case 'malehead.obj':
                this.renderer.rotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(180));
                break;
        }
    };
    PlanesApp.prototype.updateSliders = function () {
        this.threshold1Slider.value = this.renderer.threshold1;
        this.threshold2Slider.value = this.renderer.threshold2;
        this.lightLightSlider.value = 100 * this.renderer.lightLight;
        this.midLightSlider.value = 100 * this.renderer.midLight;
        this.darkLightSlider.value = 100 * this.renderer.darkLight;
    };
    PlanesApp.prototype.onDown = function (x, y) {
        if (this.click(x, y)) {
            return;
        }
        ;
        this.pointerModeSpecial = (x < 0.1 * this.canvas.width) ? true : false;
        this.oldX = x;
        this.oldY = y;
        this.mouseDown = true;
    };
    PlanesApp.prototype.onMove = function (x, y) {
        if (this.mouseDown) {
            this.dirty = true;
            if (this.pointerMode === PointerMode.View) {
                if (this.pointerModeSpecial) {
                    this.renderer.rotZ((this.oldY - y) * 0.01);
                }
                else {
                    this.renderer.rotX((y - this.oldY) * 0.01);
                    this.renderer.rotY((x - this.oldX) * 0.01);
                }
            }
            else if (this.pointerMode === PointerMode.Light) {
                var pos = _SphericalCoord__WEBPACK_IMPORTED_MODULE_4__["SphericalCoord"].fromXYZ(this.renderer.uLightDirection.values);
                if (this.pointerModeSpecial) {
                    /*
                    this.pos.radius -= (y - this.oldY) * 0.005;
                    this.pos.radius = clamp(this.pos.radius, Uniforms.uBallRadius + 0.5, 5);
                    Uniforms.uLightPos.values = this.pos.toXYZ();
                    */
                }
                else {
                    var matY = _glMat__WEBPACK_IMPORTED_MODULE_5__["glMat4"].fromRotY(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(x - this.oldX));
                    var matX = _glMat__WEBPACK_IMPORTED_MODULE_5__["glMat4"].fromRotX(Object(_Globals__WEBPACK_IMPORTED_MODULE_2__["toRad"])(y - this.oldY));
                    var vec = new _glVec__WEBPACK_IMPORTED_MODULE_6__["glVec4"]([
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
                }
                this.dirty = true;
            }
            // remember this coordinate
            this.oldX = x;
            this.oldY = y;
        }
    };
    /**
     * Processes a click/touch event at the designated coordinates.
     *
     * @param x The x coordinate.
     * @param y The y coordinate.
     * @returns true if a hit on one of the views occurs.
     */
    PlanesApp.prototype.click = function (x, y) {
        var size = this.canvas.width;
        return this.renderer.click(x / size, 1 - (y / size));
    };
    PlanesApp.prototype.tick = function () {
        var _this = this;
        if (this.dirty) {
            this.renderer.render();
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
/*! exports provided: PlanesRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _ShadowMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadowMap */ "./src/ShadowMap.ts");













/**
 * Class that renders triangles and a light source
 */
var PlanesRenderer = /** @class */ (function () {
    function PlanesRenderer() {
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.shadowView = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.projection = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.lightIntensity = 0.7;
        this.ambientIntensity = 0.2;
        this.uColor = new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1, 1, 1]);
        this.uThreshold1 = 15;
        this.uThreshold2 = 55;
        this._sync = true;
        // size of the smaller view
        this.miniSize = 0.2;
        this.uUseThresholds = true;
        this.uLightDirection = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1.0, -1.0, 1.5]);
        this.computeColors();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].enable(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_TEST);
        this.program = _glCompiler__WEBPACK_IMPORTED_MODULE_7__["glCompiler"].compile(_shaders_PlanesVertex_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_PlanesFragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var tBall = new _TriangleSphere__WEBPACK_IMPORTED_MODULE_5__["TriangleSphere"](100, 0.5, new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]));
        tBall.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_8__["NormalType"].Smooth);
        this.ball = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tBall, this.program);
        var tArrow = new _TriangleArrow__WEBPACK_IMPORTED_MODULE_10__["TriangleArrow"]();
        this.arrow = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tArrow, this.program);
    }
    Object.defineProperty(PlanesRenderer.prototype, "sync", {
        get: function () {
            return this._sync;
        },
        set: function (val) {
            this._sync = val;
            this.computeColors();
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(PlanesRenderer.prototype, "lightLight", {
        get: function () {
            return this.uLightLight;
        },
        set: function (val) {
            this.uLightLight = val;
            this.uMidLight = Math.min(this.uMidLight, val);
            this.uDarkLight = Math.min(this.uDarkLight, val);
            if (this.sync) {
                this.uThreshold1 = 2 * (this.thresholdAt(this.uLightLight));
                this.uThreshold2 = 2 * this.thresholdAt(this.uDarkLight) - 90;
                this.computeColors();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "midLight", {
        get: function () {
            return this.uMidLight;
        },
        set: function (val) {
            this.uMidLight = val;
            this.uLightLight = Math.max(this.uLightLight, val);
            this.uDarkLight = Math.min(this.uDarkLight, val);
            if (this.sync) {
                var range = this.uThreshold2 - this.uThreshold1;
                this.uThreshold1 = this.thresholdAt(this.uMidLight) - range / 2;
                this.uThreshold2 = this.thresholdAt(this.uMidLight) + range / 2;
                this.computeColors();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanesRenderer.prototype, "darkLight", {
        get: function () {
            return this.uDarkLight;
        },
        set: function (val) {
            this.uDarkLight = val;
            this.uLightLight = Math.max(this.uLightLight, val);
            this.uMidLight = Math.max(this.uMidLight, val);
            if (this.sync) {
                this.uThreshold2 = 2 * this.thresholdAt(this.uDarkLight) - 90;
                this.uThreshold1 = 2 * this.thresholdAt(this.uMidLight) - this.uThreshold2;
                this.computeColors();
            }
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
    PlanesRenderer.prototype.colorAt = function (deg) {
        deg = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(deg, 0, 90);
        //      return mix(this.ambientIntensity, this.lightIntensity, Math.cos(toRad(deg)));
        return this.ambientIntensity + this.lightIntensity * Math.cos(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toRad"])(deg));
    };
    PlanesRenderer.prototype.thresholdAt = function (color) {
        color = Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["clamp"])(color, this.ambientIntensity, this.ambientIntensity + this.lightIntensity);
        return Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["toDeg"])(Math.acos(color - this.ambientIntensity) / this.lightIntensity);
    };
    PlanesRenderer.prototype.computeColors = function () {
        this.uLightLight = this.colorAt(0.5 * this.threshold1);
        this.uMidLight = this.colorAt(Object(_Globals__WEBPACK_IMPORTED_MODULE_4__["mix"])(this.threshold1, this.threshold2, 0.7));
        this.uDarkLight = this.colorAt((this.threshold2 + 90) / 2);
    };
    PlanesRenderer.prototype.setModel = function (tObj) {
        this.obj = new _glObject__WEBPACK_IMPORTED_MODULE_9__["glObject"](tObj, this.program);
    };
    PlanesRenderer.prototype.render = function () {
        // size of the actual canvas.
        var size = document.body.clientWidth;
        if (_Globals__WEBPACK_IMPORTED_MODULE_4__["isMobile"] === false) {
            // not sure why, but this basically becomes full width on my phone
            size = 512;
        }
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.width = size;
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.height = size;
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].viewport(0, 0, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.width, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.height);
        this.renderToShadowMap();
        this.renderToScreen();
    };
    PlanesRenderer.prototype.renderToShadowMap = function () {
        if (!this.shadowMap) {
            this.shadowMap = new _ShadowMap__WEBPACK_IMPORTED_MODULE_12__["ShadowMap"](_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.width, _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].canvas.height);
        }
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, this.shadowMap.frameBuffer);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].useProgram(this.program);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clearColor(0.5, 0.5, 0.5, 1);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT | _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_BUFFER_BIT);
        var center = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 0, 0]);
        var up = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([0, 1, 0]);
        var mat = _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"].makeLookAt(this.uLightDirection, center, up);
        mat.set(0, 3, 0);
        mat.set(1, 3, 0);
        mat.set(2, 3, 0);
        this.shadowView = mat;
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_6__["glUniform"](this.program);
        uni.set('uUseShadows', 0, true);
        uni.set('view', this.shadowView.transpose());
        uni.set('projection', this.projection.transpose());
        this.obj.draw();
        //      gl.bindTexture(gl.TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].FRAMEBUFFER, null);
    };
    PlanesRenderer.prototype.renderToScreen = function () {
        /*
        // display the depth buffer for testing purposes
        let tr = new TextureRenderer();
        tr.render(this.shadowMap.depthTexture);
        */
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].useProgram(this.program);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, this.shadowMap.depthTexture);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clearColor(0.5, 0.5, 0.5, 1);
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT | _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].COLOR_BUFFER_BIT);
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_6__["glUniform"](this.program);
        uni.set('view', this.view.transpose());
        uni.set('shadowView', this.shadowView.transpose());
        uni.set('projection', this.projection.transpose());
        uni.set('uUseShadows', 1, true);
        uni.set('uLightIntensity', this.lightIntensity);
        uni.set('uAmbientIntensity', this.ambientIntensity);
        uni.set('uThreshold1', this.threshold1 / 90);
        uni.set('uThreshold2', this.threshold2 / 90);
        uni.set('uLightLight', this.uLightLight);
        uni.set('uMidLight', this.uMidLight);
        uni.set('uDarkLight', this.uDarkLight);
        uni.set('uUseThresholds', this.uUseThresholds ? 1 : 0, true);
        uni.set('uLightDirection', this.uLightDirection);
        uni.set('uColor', this.uColor);
        this.obj.draw();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].clear(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].DEPTH_BUFFER_BIT);
        this.view.scale(this.miniSize);
        this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([1 - this.miniSize, 1 - this.miniSize, 0]));
        uni.set('view', this.view.transpose());
        uni.set('uUseThresholds', this.uUseThresholds ? 0 : 1, true);
        this.obj.draw();
        this.drawBall();
        _Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_4__["gl"].TEXTURE_2D, null);
    };
    PlanesRenderer.prototype.drawBall = function () {
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_6__["glUniform"](this.program);
        // stop using the shadowmap
        uni.set('uUseShadows', 0, true);
        this.view = new _glMat__WEBPACK_IMPORTED_MODULE_0__["glMat4"]();
        this.view.scale(this.miniSize);
        this.view.translate(new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([-(1 - this.miniSize), 1 - this.miniSize, 0]));
        uni.set('view', this.view.transpose());
        uni.set('uUseThresholds', this.uUseThresholds ? 1 : 0, true);
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
        uni.set('uColor', new _glColor__WEBPACK_IMPORTED_MODULE_11__["glColor"]([1.0, 0.9, 0.7]));
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
            return false;
        }
    };
    PlanesRenderer.prototype.optimize = function (normalType) {
        this.obj.optimize(normalType);
        this.render();
    };
    return PlanesRenderer;
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
        this.t = window.performance.now();
    }
    Object.defineProperty(Profiler.prototype, "elapsedMs", {
        get: function () {
            return (window.performance.now() - this.t);
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
        this.t = window.performance.now();
    };
    return Profiler;
}());



/***/ }),

/***/ "./src/ShadowMap.ts":
/*!**************************!*\
  !*** ./src/ShadowMap.ts ***!
  \**************************/
/*! exports provided: ShadowMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowMap", function() { return ShadowMap; });
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");

var ShadowMap = /** @class */ (function () {
    /**
     * Create a frame buffer for rendering into texture objects.
     *
     * @param width The width (in pixels) of the rendering (must be power of 2)
     * @param height The height (in pixels) of the rendering (must be power of 2)
     */
    function ShadowMap(width, height) {
        var depth_texture_extension = _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].getExtension('WEBGL_depth_texture');
        if (!depth_texture_extension) {
            console.log('This WebGL program requires the use of the ' +
                'WEBGL_depth_texture extension. This extension is not supported ' +
                'by your browser, so this WEBGL program is terminating.');
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
            console.log("The created frame buffer is invalid: " + status.toString());
        }
        // Unbind these new objects, which makes the default frame buffer the
        // target for rendering.
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, null);
        _Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_Globals__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, null);
    }
    return ShadowMap;
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
        this._range.addEventListener('input', function () {
            _this.updateSpanColor();
            _this.updateSpanText();
        });
        parent.appendChild(this._range);
        if (setup.colors) {
            this._colorSpan = document.createElement('span');
            this._colorSpan.id = setup.id + 'ColorSpan';
            this._colorSpan.className = 'SliderColorSpan';
            parent.appendChild(this._colorSpan);
            // set the initial color.
            this.colors = setup.colors;
        }
        this._valueSpan = document.createElement('span');
        this._valueSpan.id = setup.id + 'ValueSpan';
        this._valueSpan.className = 'SliderValueSpan';
        //      this._valueSpan.innerText = setup.value.toString();
        parent.appendChild(this._valueSpan);
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
/*! exports provided: NormalType, TriangleObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalType", function() { return NormalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObj", function() { return TriangleObj; });
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _Volume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Volume */ "./src/Volume.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");




var NormalType;
(function (NormalType) {
    NormalType[NormalType["Smooth"] = 0] = "Smooth";
    NormalType[NormalType["Flat"] = 1] = "Flat";
})(NormalType || (NormalType = {}));
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
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_2__["Profiler"]();
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
            this.volumes.push(new _Volume__WEBPACK_IMPORTED_MODULE_1__["Volume"]());
        }
        for (var i = 0; i < this.triangles.length; i++) {
            var t = this.triangles[i];
            var x = Math.floor(numSteps * (t.minX - this.boxMin.x) / (this.boxMax.x - this.boxMin.x));
            var y = Math.floor(numSteps * (t.minY - this.boxMin.y) / (this.boxMax.y - this.boxMin.y));
            var z = Math.floor(numSteps * (t.minZ - this.boxMin.z) / (this.boxMax.z - this.boxMin.z));
            x = Object(_Globals__WEBPACK_IMPORTED_MODULE_3__["clamp"])(x, 0, numSteps - 1);
            y = Object(_Globals__WEBPACK_IMPORTED_MODULE_3__["clamp"])(y, 0, numSteps - 1);
            z = Object(_Globals__WEBPACK_IMPORTED_MODULE_3__["clamp"])(z, 0, numSteps - 1);
            var index = x + y * numSteps + z * numSteps * numSteps;
            this.volumes[index].push(t);
        }
    };
    TriangleObj.prototype.computeNormals = function (type) {
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_2__["Profiler"]();
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
    TriangleObj.prototype.toObjString = function () {
        var str = "";
        for (var i = 0; i < this.vertices.length; i++) {
            var v = this.vertices[i];
            str += 'v ' + v.x + ' ' + v.y + ' ' + v.z + '\n';
        }
        for (var i = 0; i < this.normals.length; i++) {
            var n = this.normals[i];
            str += 'vn ' + n.x + ' ' + n.y + ' ' + n.z + '\n';
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
        var str = this.toObjString();
        navigator.clipboard.writeText(str).then(function () { alert(msg); });
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
    function TriangleObjFile(src) {
        var _this = _super.call(this) || this;
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
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_3__["Profiler"]();
        var lines = src.split('\n');
        p.log('split');
        for (var i = 0; i < lines.length; i++) {
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




var glObject = /** @class */ (function () {
    function glObject(tObj, program) {
        this.model = new _glMat__WEBPACK_IMPORTED_MODULE_1__["glMat4"]();
        this.vertices = [];
        this.normals = [];
        this.tObj = tObj;
        this.program = program;
        // create buffers (and associated attributes)
        this.vertexBuffer = new _glBuffer__WEBPACK_IMPORTED_MODULE_0__["glBuffer"](program, 'aVertex');
        this.normalBuffer = new _glBuffer__WEBPACK_IMPORTED_MODULE_0__["glBuffer"](program, 'aNormal');
        this.uploadTriangles();
    }
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
        // convert the triangles into arrays that can be uploaded
        this.vertices = [];
        this.normals = [];
        for (var i = 0; i < this.tObj.triangles.length; i++) {
            var tri = this.tObj.triangles[i];
            this.pushVec(this.vertices, tri.v0);
            this.pushVec(this.vertices, tri.v1);
            this.pushVec(this.vertices, tri.v2);
            this.pushVec(this.normals, tri.n0);
            this.pushVec(this.normals, tri.n1);
            this.pushVec(this.normals, tri.n2);
        }
        this.vertexBuffer.upload(this.vertices);
        this.normalBuffer.upload(this.normals);
    };
    glObject.prototype.draw = function () {
        var uni = new _glUniform__WEBPACK_IMPORTED_MODULE_3__["glUniform"](this.program);
        uni.set('model', this.model.transpose());
        this.vertexBuffer.bind();
        this.normalBuffer.bind();
        _Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].drawArrays(_Globals__WEBPACK_IMPORTED_MODULE_2__["gl"].TRIANGLES, 0, this.vertices.length / 3);
    };
    glObject.prototype.optimize = function (normalType) {
        this.tObj.optimize(normalType);
        this.uploadTriangles();
    };
    return glObject;
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
        return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\r\n\r\n// interpolated values from the vertex shader\r\nvarying vec3 vNormal;\r\nvarying vec3 vVertex;\r\nvarying vec3 vShadowVertex;\r\n\r\nuniform float uLightIntensity;\r\nuniform float uAmbientIntensity;\r\nuniform vec3 uLightDirection;\r\nuniform vec3 uColor;\r\n\r\nuniform int uUseThresholds;\r\nuniform float uThreshold1;\r\nuniform float uThreshold2;\r\nuniform float uLightLight;\r\nuniform float uMidLight;\r\nuniform float uDarkLight;\r\n\r\nuniform int uUseShadows;\r\nuniform sampler2D uShadowTexture;\r\n\r\nbool in_shadow(void)\r\n{\r\n   if (uUseShadows == 0)\r\n   {\r\n      return false;\r\n   }\r\n\r\n   // The vertex location rendered from the light source is almost in Normalized\r\n   // Device Coordinates (NDC), but the perspective division has not been\r\n   // performed yet. Perform the perspective divide. The (x,y,z) vertex location\r\n   // components are now each in the range [-1.0,+1.0].\r\n   // vec3 vertex_relative_to_light = v_Vertex_relative_to_light.xyz / v_Vertex_relative_to_light.w;\r\n   vec3 vertex = vShadowVertex;\r\n\r\n   // Convert the the values from Normalized Device Coordinates (range [-1.0,+1.0])\r\n   // to the range [0.0,1.0]. This mapping is done by scaling\r\n   // the values by 0.5, which gives values in the range [-0.5,+0.5] and then\r\n   // shifting the values by +0.5.\r\n   vertex = vertex * 0.5 + 0.5;\r\n\r\n   // Get the z value of this fragment in relationship to the light source.\r\n   // This value was stored in the shadow map (depth buffer of the frame buffer)\r\n   // which was passed to the shader as a texture map.\r\n   // vec4 textureValue = texture2D(uShadowSampler, vertex.xy);\r\n\r\n   // The texture map contains a single depth value for each pixel. However,\r\n   // the texture2D sampler always returns a color from a texture. For a\r\n   // gl.DEPTH_COMPONENT texture, the color contains the depth value in\r\n   // each of the color components. If the value was d, then the color returned\r\n   // is (d,d,d,1). This is a \"color\" (depth) value between [0.0,+1.0].\r\n   float shadowmap_distance = texture2D(uShadowTexture, vertex.xy).r;\r\n\r\n   // Test the distance between this fragment and the light source as\r\n   // calculated using the shadowmap transformation (vertex_relative_to_light.z) and\r\n   // the smallest distance between the closest fragment to the light source\r\n   // for this location, as stored in the shadowmap. When the closest\r\n   // distance to the light source was saved in the shadowmap, some\r\n   // precision was lost. Therefore we need a small tolerance factor to\r\n   // compensate for the lost precision.\r\n   float tol = 0.001;\r\n   if (vertex.z <= shadowmap_distance + tol)\r\n   {\r\n      // This surface receives full light because it is the closest surface\r\n      // to the light.\r\n      return false;\r\n   }\r\n   else\r\n   {\r\n      // This surface is in a shadow because there is a closer surface to\r\n      // the light source.\r\n      return true;\r\n   }\r\n}\r\n\r\nvoid main()\r\n{\r\n   if (in_shadow())\r\n   {\r\n      gl_FragColor = vec4(vec3(uAmbientIntensity), 1.0);\r\n      return;\r\n   }\r\n\r\n   vec3 eye = vec3(0.0, 0.0, -10.0);\r\n   vec3 toLight = normalize(-uLightDirection);\r\n   vec3 toEye = normalize(eye - vVertex);\r\n   vec3 normal = normalize(vNormal); // vNormal is interpolated and no long normal\r\n\r\n   // compute diffuse contribution = cos of angle between the vectors (dot product)\r\n   float diffuseFactor = clamp(dot(normal, toLight), 0.0, 1.0);\r\n   float diffuse = diffuseFactor * uLightIntensity;\r\n\r\n   // compute specular contribution\r\n   float shininess = 50.0;\r\n   vec3 reflection = normalize(2.0 * dot(normal, toLight) * normal - toLight);\r\n   float cosAngle = clamp(dot(reflection, toEye), 0.0, 1.0); // clamp to avoid values > 90 deg\r\n   float specular = 0.2 * pow(cosAngle, shininess);\r\n\r\n   float rgb;\r\n   if (uUseThresholds == 0)\r\n   {\r\n      rgb = uAmbientIntensity + diffuse + specular;\r\n   }\r\n   else\r\n   {\r\n      float threshold = 1.0 - diffuseFactor;\r\n\r\n      float v1 = min(uThreshold1, uThreshold2);\r\n      float v2 = max(uThreshold1, uThreshold2);\r\n\r\n      if (threshold < v1)\r\n      {\r\n         rgb = uLightLight;\r\n      }\r\n      else if (threshold < v2)\r\n      {\r\n         rgb = uMidLight;\r\n      }\r\n      else if (threshold < 1.0)\r\n      {\r\n         rgb = uDarkLight;\r\n      }\r\n      else\r\n      {\r\n         // in shadow\r\n         rgb = uAmbientIntensity;\r\n      }\r\n\r\n      if (specular > 0.05)\r\n      {\r\n         rgb = 1.0;\r\n      }\r\n   }\r\n\r\n   vec3 rgbv = vec3(rgb, rgb, rgb);\r\n   rgbv *= uColor;\r\n   gl_FragColor = vec4(rgbv, 1.0);\r\n}");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9Db2xvckFuYWx5emVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Db2xvclJhbmdlLnRzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9JbmRleGVkVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhdGhUcmFjZXJBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhdGhUcmFjZXJSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxhbmVzQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXNSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZmlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NoYWRvd01hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGhlcmljYWxDb29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVBcnJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVDdWJlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iai50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZVNwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZvbHVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsTWF0LnRzIiwid2VicGFjazovLy8uL3NyYy9nbE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xVbmlmb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9nbFVuaWZvcm1CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xWZWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbENvbG9yV2l0aEFscGhhLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9TY3JlZW5GcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QbGFuZXNGcmFnbWVudC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL1BsYW5lc1ZlcnRleC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7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Q0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxNQUFjO1FBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRWxELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFD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LEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN2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SUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFFO2lCQUNJO2dCQUNGLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hELElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUUxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO3dCQUM5RCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ1osTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENB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SSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ2xFLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENB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RSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0YsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEMsNEJBQTRCO1FBQzVCLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdB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RCxpQkFBaUIsUUFBUSw0Q0FBNEMsa0RBQWtELDZDQUE2Qyx3Q0FBd0MsNE1BQTRNLHVEQUF1RCx5RUFBeUUsa0ZBQWtGLGdFQUFnRSx5RkFBeUYscUJBQXFCLHVDQUF1Qyx1REFBdUQsUUFBUSxtQkFBbUIsZ0RBQWdELHVEQUF1RCxtREFBbUQsNENBQTRDLCtCQUErQixXQUFXLDZDQUE2Qyw2QkFBNkIsV0FBVyw4Q0FBOEMsOEJBQThCLFdBQVcseUJBQXlCLDhEQUE4RCxXQUFXLDZDQUE2Qyx1QkFBdUIsV0FBVyxRQUFRLDJDQUEyQyxzQkFBc0Isc0NBQXNDLEtBQUssQzs7Ozs7Ozs7Ozs7O0FDQXRySjtBQUFlLHVGQUF3QiwyQkFBMkIsMkJBQTJCLHNCQUFzQiw0QkFBNEIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsK0JBQStCLHdCQUF3QixvRUFBb0Usa0RBQWtELGtEQUFrRCxxRUFBcUUsS0FBSyxDOzs7Ozs7Ozs7OztBQ0ExZ0IsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRXpGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJMYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVySGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2Uge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XFxyXFxuICBib3JkZXI6IGdyYXk7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JlZW4sIGRhcmtncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyZWVuLCBkYXJrZ3JlZW4pO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IGdyYXk7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICBsZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNkcmF3VGltZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IC00OTVweDtcXHJcXG4gIGxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgZm9udC1zaXplOiA4cHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kZUJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZ3Jlc3NTcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogM3B4O1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMjA1LCA1MCwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0YWIgKi9cXHJcXG4uVGFicyB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gdGhlIHRhYiBjb250ZW50ICovXFxyXFxuLlRhYnMgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEycHQ7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xcclxcbi5UYWJzIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXFxyXFxuLlRhYnMgYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xcclxcbi5UYWJDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MDBweCkge1xcclxcbiAgLlNsaWRlckhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJMYWJlbCB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyVmFsdWVTcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkcmF3VGltZSB7XFxyXFxuICAgIHRvcDogLTk2MHB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtb2RlQnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgICBmb250LXdlaWdodDogZGFya2VyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlRhYnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcclxuLyoqXHJcbiAqIENsYXNzIGZvciByZXByZXNlbnRpbmcgY29sb3IgdmFsdWVzLiBWYWx1ZXMgbWF5IGJlIG9uIGEgMC0xIG9yIDAtMjU1IHNjYWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICAgcHVibGljIHI6IG51bWJlcjtcclxuICAgcHVibGljIGc6IG51bWJlcjtcclxuICAgcHVibGljIGI6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgUkdCIHZhbHVlcyB0byBzdG9yZSBpbiB0aGlzIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG4gICAgICB0aGlzLnIgPSBjb2xvclswXTtcclxuICAgICAgdGhpcy5nID0gY29sb3JbMV07XHJcbiAgICAgIHRoaXMuYiA9IGNvbG9yWzJdO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgaXRlbXMgcmV0dXJuZWQgZnJvbSBleGFtaW5pbmcgdGhlIGN1cnJlbnQgdmlld1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sb3JEYXRhIHtcclxuICAgbWF4Q2hyb21hOiBudW1iZXIsXHJcbiAgIGhpZ2hsaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBhdmdMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBsaWdodGVzdExpZ2h0Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGRhcmtlc3RMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBhdmdTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgZGFya2VzdFNoYWRvd0NvbG9yOiBnbENvbG9yLFxyXG4gICB0ZXJtaW5hdG9yQ29sb3I6IGdsQ29sb3IsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGdyYWJzIGEgY29weSBvZiB0aGUgcmVuZGVyZWQgdGV4dHVyZSBhbmQgZXhhbWluZXMgaXQgZm9yXHJcbiAqIGNvbG9yIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvckFuYWx5emVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYXJyYXkgd2hlcmUgd2UnbGwgZHVtcCB0aGUgdGV4dHVyZSB0by4gQ2FjaGUgdGhpcyBhcnJheSBpbnN0ZWFkIG9mXHJcbiAgICAqIGFsbG9jYXRpbmcgYSBuZXcgb25lIGZvciBlYWNoIGZyYW1lLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBwaXhlbHM6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTaXplIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gc2l6ZSBUaGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgYnVmZmVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgLy8gYWxsb2NhdGUgdGhlIGJ1ZmZlciB1c2VkIGZvciBncmFic1xyXG4gICAgICB0aGlzLnBpeGVscyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zaXplICogdGhpcy5zaXplICogNCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSdW5zIHRoZSBhbmFseXNpcyAtIGdyYWJzIGEgY29weSBvZiB0aGUgZnJhbWUgYnVmZmVyIGFuZCBzY2FucyBpdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBhbHBoYUxpZ2h0IFRoZSBhbHBoYSB2YWx1ZSBmb3IgdGhpbmdzIGluIGxpZ2h0LiBWYWx1ZXMgYWJvdmUgdGhpcyBhcmUgZHVlIHRvIHNwZWN1bGFyIGxpZ2h0aW5nLlxyXG4gICAgKiBAcGFyYW0gYWxwaGFTaGFkb3cgVGhlIGFscGhhIHZhbHVlIGZvciB0aGluZ3MgaW4gc2hhZG93LlxyXG4gICAgKi9cclxuICAgcHVibGljIHJ1bihhbHBoYUxpZ2h0OiBudW1iZXIsIGFscGhhU2hhZG93OiBudW1iZXIpOiBJQ29sb3JEYXRhIHtcclxuXHJcbiAgICAgIGxldCBkYXRhOiBJQ29sb3JEYXRhID0ge1xyXG4gICAgICAgICBtYXhDaHJvbWE6IDAsXHJcbiAgICAgICAgIGF2Z0xpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGxpZ2h0ZXN0TGlnaHRDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgZGFya2VzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIGF2Z1NoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBsaWdodGVzdFNoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBkYXJrZXN0U2hhZG93Q29sb3I6IG5ldyBnbENvbG9yKFsxLCAxLCAxXSksXHJcbiAgICAgICAgIHRlcm1pbmF0b3JDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIGNhc2Ugd2hlbiB0aGUgdGV4dCB0eXBlIGlzIFVOU0lHTkVEX0JZVEVcclxuICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgZ2wuUkdCQSwgZ2wuRkxPQVQsIHRoaXMucGl4ZWxzKTtcclxuXHJcbiAgICAgIGxldCBudW1MaWdodFBpeGVscyA9IDA7XHJcbiAgICAgIGxldCBudW1TaGFkb3dQaXhlbHMgPSAwO1xyXG4gICAgICBsZXQgbnVtVGVybWluYXRvclBpeGVscyA9IDA7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuc2l6ZTsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gKHJvdyAqIHRoaXMuc2l6ZSArIGNvbCkgKiA0O1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMF07XHJcbiAgICAgICAgICAgIGxldCBnID0gdGhpcy5waXhlbHNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgbGV0IGIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDJdO1xyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMucGl4ZWxzW2luZGV4ICsgM107XHJcblxyXG4gICAgICAgICAgICAvLyBpZ25vcmUgdmFsdWVzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBiYWxsXHJcbiAgICAgICAgICAgIGlmIChhID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYXZnID0gKHIgKyBnICsgYikgLyAzO1xyXG4gICAgICAgICAgICBsZXQgY2hyb21hID0gKE1hdGguYWJzKHIgLSBhdmcpICsgTWF0aC5hYnMoZyAtIGF2ZykgKyBNYXRoLmFicyhiIC0gYXZnKSkgLyAoNCAvIDMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNocm9tYSA+IGRhdGEubWF4Q2hyb21hKSB7XHJcbiAgICAgICAgICAgICAgIGRhdGEubWF4Q2hyb21hID0gY2hyb21hO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgZ2xDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBhbHBoYUxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIG51bUxpZ2h0UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RMaWdodENvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdExpZ2h0Q29sb3IgPSBnbENvbG9yLmRhcmtlc3QoZGF0YS5kYXJrZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPT0gYWxwaGFTaGFkb3cpIHtcclxuICAgICAgICAgICAgICAgbnVtU2hhZG93UGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID0gZ2xDb2xvci5kYXJrZXN0KGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYSA+IGFscGhhTGlnaHQpIHtcclxuICAgICAgICAgICAgICAgZGF0YS5oaWdobGlnaHRDb2xvciA9IGdsQ29sb3IubGlnaHRlc3QoZGF0YS5oaWdobGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVybWluYXRvciA9IChhbHBoYUxpZ2h0ICsgYWxwaGFTaGFkb3cpIC8gMi4wO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYSAtIHRlcm1pbmF0b3IpIDwgMC4xKSB7XHJcbiAgICAgICAgICAgICAgIG51bVRlcm1pbmF0b3JQaXhlbHMrKztcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuciArPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChudW1MaWdodFBpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLnIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5nIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuYiAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtU2hhZG93UGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmcgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLmIgLz0gbnVtU2hhZG93UGl4ZWxzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1UZXJtaW5hdG9yUGl4ZWxzID4gMCkge1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5yIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmcgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuYiAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJwb2xhdGVzIGFuZCBhcnJheSBvZiBjb2xvcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvclJhbmdlIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSBjb2xvcnNcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29sb3JzOiBodG1sQ29sb3JbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9ycyBUaGUgY29sb3JzIHRvIGludGVycG9sYXRlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG4gICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYW4gaW50ZXJwb2xhdGVkIGNvbG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCh2YWx1ZTogbnVtYmVyKTogaHRtbENvbG9yIHtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKTtcclxuICAgICAgICAgbGV0IHBhcnRpYWwgPSAodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSAtIGluZGV4O1xyXG5cclxuICAgICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5yICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLnIgLSB0aGlzLmNvbG9yc1tpbmRleF0ucikpO1xyXG4gICAgICAgICBsZXQgZyA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLmcgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uZyAtIHRoaXMuY29sb3JzW2luZGV4XS5nKSk7XHJcbiAgICAgICAgIGxldCBiID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uYiArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5iIC0gdGhpcy5jb2xvcnNbaW5kZXhdLmIpKTtcclxuXHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiZXhwb3J0IGxldCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcblxyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpIHtcclxuICAgcmV0dXJuIHYxICsgY2xhbXAobWl4LCAwLCAxKSAqICh2MiAtIHYxKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbHMge1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBnbCgpIHtcclxuICAgICAgcmV0dXJuIGdsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHNldCBnbChjb250ZXh0OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICAgIGdsID0gY29udGV4dDtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGhvbGRpbmcgaW5mb3JtYXRpb24gYWJvdXQgYSB0cmlhbmdsZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgIHZlcnRpY2VzOiBnbFZlYzNbXTtcclxuICAgaVYwOiBudW1iZXI7XHJcbiAgIGlWMTogbnVtYmVyO1xyXG4gICBpVjI6IG51bWJlcjtcclxuXHJcbiAgIG5vcm1hbHM6IGdsVmVjM1tdO1xyXG4gICBpTjA6IG51bWJlcjtcclxuICAgaU4xOiBudW1iZXI7XHJcbiAgIGlOMjogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHZlcnRpY2VzOiBnbFZlYzNbXSwgaVYwOiBudW1iZXIsIGlWMTogbnVtYmVyLCBpVjI6IG51bWJlcixcclxuICAgICAgbm9ybWFsczogZ2xWZWMzW10sIGlOMD86IG51bWJlciwgaU4xPzogbnVtYmVyLCBpTjI/OiBudW1iZXIsXHJcbiAgICkge1xyXG4gICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICAgIHRoaXMuaVYwID0gaVYwO1xyXG4gICAgICB0aGlzLmlWMSA9IGlWMTtcclxuICAgICAgdGhpcy5pVjIgPSBpVjI7XHJcblxyXG4gICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICBpZiAoaU4wID09PSB1bmRlZmluZWQgfHwgaU4wID09PSAtMSkge1xyXG4gICAgICAgICBsZXQgbm9ybWFsID0gdGhpcy5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9ybWFscy5sZW5ndGggLSAxO1xyXG4gICAgICAgICB0aGlzLmlOMCA9IGluZGV4O1xyXG4gICAgICAgICB0aGlzLmlOMSA9IGluZGV4O1xyXG4gICAgICAgICB0aGlzLmlOMiA9IGluZGV4O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICB0aGlzLmlOMCA9IGlOMDtcclxuICAgICAgICAgdGhpcy5pTjEgPSBpTjE7XHJcbiAgICAgICAgIHRoaXMuaU4yID0gaU4yO1xyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgbGV0IG4gPSB0aGlzLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgbGV0IG4wID0gdGhpcy5uMDtcclxuICAgICAgICAgbGV0IG4xID0gdGhpcy5uMTtcclxuICAgICAgICAgbGV0IG4yID0gdGhpcy5uMjtcclxuICAgICAgICAgY29uc29sZS5sb2cobi50b1N0cmluZygyKSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4wLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobjEudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuMi50b1N0cmluZygyKSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0IHYwKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMuaVYwXTtcclxuICAgfVxyXG4gICBnZXQgdjEoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbdGhpcy5pVjFdO1xyXG4gICB9XHJcbiAgIGdldCB2MigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1t0aGlzLmlWMl07XHJcbiAgIH1cclxuXHJcbiAgIGdldCBuMCgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxzW3RoaXMuaU4wXTtcclxuICAgfVxyXG4gICBnZXQgbjEoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsc1t0aGlzLmlOMV07XHJcbiAgIH1cclxuICAgZ2V0IG4yKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbHNbdGhpcy5pTjJdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWluWCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MC54LCBNYXRoLm1pbih0aGlzLnYxLngsIHRoaXMudjIueCkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWluWSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MC55LCBNYXRoLm1pbih0aGlzLnYxLnksIHRoaXMudjIueSkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWluWigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MC56LCBNYXRoLm1pbih0aGlzLnYxLnosIHRoaXMudjIueikpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MC54LCBNYXRoLm1heCh0aGlzLnYxLngsIHRoaXMudjIueCkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MC55LCBNYXRoLm1heCh0aGlzLnYxLnksIHRoaXMudjIueSkpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MC56LCBNYXRoLm1heCh0aGlzLnYxLnosIHRoaXMudjIueikpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbCgpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgYSA9IHRoaXMudjEuc3VidHJhY3QodGhpcy52MCk7XHJcbiAgICAgIGxldCBiID0gdGhpcy52Mi5zdWJ0cmFjdCh0aGlzLnYxKTtcclxuICAgICAgcmV0dXJuIGEuY3Jvc3MoYikubm9ybWFsaXplKCk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBQYXRoVHJhY2VyUmVuZGVyZXIsIFJlbmRlck1vZGUgfSBmcm9tIFwiLi9QYXRoVHJhY2VyUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tIFwiLi9Vbmlmb3Jtc1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxDb29yZCB9IGZyb20gXCIuL1NwaGVyaWNhbENvb3JkXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB9IGZyb20gXCIuL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmVcIjtcclxuaW1wb3J0IHsgR2xvYmFscywgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVTcGhlcmUgfSBmcm9tIFwiLi9UcmlhbmdsZVNwaGVyZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUN1YmUgfSBmcm9tIFwiLi9UcmlhbmdsZUN1YmVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmpGaWxlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpGaWxlXCI7XHJcblxyXG5sZXQgc2tpblRvbmVzID0gW1xyXG4gICBuZXcgaHRtbENvbG9yKFsyNDAsIDIyMywgMjE0XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzI1NSwgMjE4LCAyMDBdKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMjMyLCAxNzksIDExN10pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxOTAsIDEzNiwgODddKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFsxMTUsIDkxLCA1OV0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsxMzksIDczLCA2NV0pXHJcbiAgIC8vICAgbmV3IGh0bWxDb2xvcihbMTMyLCA1NSwgMzRdKSxcclxuICAgLy9uZXcgaHRtbENvbG9yKFs2MSwgMTIsIDJdKSxcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFszOCwgNywgMV0pXHJcbl07XHJcblxyXG5lbnVtIFBvaW50ZXJNb2RlIHtcclxuICAgVmlldyxcclxuICAgTGlnaHQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyQXBwIHtcclxuICAgcHVibGljIHJlbmRlcmVyOiBQYXRoVHJhY2VyUmVuZGVyZXI7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3OiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlU3BlY2lhbCA9IGZhbHNlO1xyXG4gICBwcml2YXRlIHBvczogU3BoZXJpY2FsQ29vcmQ7XHJcbiAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgIHByaXZhdGUgaW50ZW5zaXR5U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgbGlnaHRDb2xvclNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGJhbGxDb2xvclNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGFtYmllbnRJbnRlbnNpdHlTbGlkZXI6IFNsaWRlcjtcclxuXHJcbiAgIHByaXZhdGUgYW5nbGVYID0gMC41O1xyXG4gICBwcml2YXRlIGFuZ2xlWSA9IDAuNzU7XHJcbiAgIHByaXZhdGUgem9vbVogPSAzLjU7XHJcblxyXG4gICBwcml2YXRlIG1vdXNlRG93biA9IGZhbHNlO1xyXG4gICBwcml2YXRlIG9sZFg6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBvbGRZOiBudW1iZXI7XHJcblxyXG4gICBwcml2YXRlIGxhc3RUaW1lczogbnVtYmVyW10gPSBbXTtcclxuICAgcHJpdmF0ZSByZWFkb25seSBNQVhfU0FNUExFUyA9IDUwMDtcclxuXHJcbiAgIHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihxdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXBvbmVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgdGhpcy5jYW52YXMuaWQgPSAnY2FudmFzJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIGxldCBjb250ZXh0OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgYXMgV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIEdsb2JhbHMuZ2wgPSBjb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaHN0YXJ0ID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkRvd24oZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9udG91Y2htb3ZlID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMub25Nb3ZlKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaGVuZCA9IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm9uRG93bihldmVudC54LCBldmVudC55KTtcclxuXHJcbiAgICAgICAgIC8vIGRpc2FibGUgc2VsZWN0aW9uIGJlY2F1c2UgZHJhZ2dpbmcgaXMgdXNlZCBmb3Igcm90YXRpbmcgdGhlIGNhbWVyYSBhbmQgbW92aW5nIG9iamVjdHNcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm9uTW92ZShldmVudC54LCBldmVudC55KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub25tb3VzZXVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5sb2FkTW9kZWwodGhpcy5xdWVyeSkudGhlbigodE9iajogVHJpYW5nbGVPYmopID0+IHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBQYXRoVHJhY2VyUmVuZGVyZXIodE9iaik7XHJcbiAgICAgICAgIC8vdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCBkcmF3VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkcmF3VGltZS5pZCA9ICdkcmF3VGltZSc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGltZSk7XHJcblxyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgYnV0dG9uLmlkID0gJ21vZGVCdXR0b24nO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLlZpZXc6XHJcbiAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnTGlnaHQnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdWaWV3JztcclxuICAgICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgICBsZXQgcHJvZ3Jlc3NTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBwcm9ncmVzc1NwYW4uaWQgPSAncHJvZ3Jlc3NTcGFuJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzU3Bhbik7XHJcblxyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZW5zaXR5U2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodEludGVuc2l0eScsXHJcbiAgICAgICAgIGxhYmVsOiAnTGlnaHQgSW50ZW5zaXR5JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodEludGVuc2l0eSA9IHRoaXMuaW50ZW5zaXR5U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGJ1aWxkIGEgcmFuZ2Ugb2YgY29sb3JzXHJcbiAgICAgIGxldCBtaW4gPSAyMDAwO1xyXG4gICAgICBsZXQgbWF4ID0gMTAwMDA7XHJcbiAgICAgIGxldCBjb2xvcnM6IGh0bWxDb2xvcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICBsZXQgdGVtcCA9IG1pbiArIChpIC8gOSkgKiAobWF4IC0gbWluKTtcclxuICAgICAgICAgY29sb3JzLnB1c2goZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS5jcmVhdGUodGVtcCkudG9IdG1sQ29sb3IoKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWdodENvbG9yU2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodENvbG9yJyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBDb2xvcicsXHJcbiAgICAgICAgIG1pbjogMjAwMCxcclxuICAgICAgICAgbWF4OiAxMDAwMCxcclxuICAgICAgICAgdmFsdWU6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUuZGF5bGlnaHQudGVtcGVyYXR1cmUsXHJcbiAgICAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGlnaHRDb2xvcigpO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHsgcmV0dXJuIHNsaWRlci52YWx1ZS50b0ZpeGVkKCkgKyBcIktcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gYXBwbHkgdGhlIGluaXRpYWwgY29sb3JzXHJcbiAgICAgIHRoaXMuc2V0TGlnaHRDb2xvcigpO1xyXG5cclxuICAgICAgdGhpcy5iYWxsQ29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0JhbGxDb2xvcicsXHJcbiAgICAgICAgIGxhYmVsOiAnQmFsbCBDb2xvcicsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgICAgY29sb3JzOiBza2luVG9uZXMsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudU9iakNvbG9yID0gdGhpcy5iYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBtYWtlIHN1cmUgZ2wgbWF0Y2hlcyB0aGUgaW5pdGlhbCBVSSBzZXR0aW5nXHJcbiAgICAgIFVuaWZvcm1zLnVPYmpDb2xvciA9IHRoaXMuYmFsbENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICAgICB0aGlzLmFtYmllbnRJbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0FtYmllbnRJbnRlbnNpdHknLFxyXG4gICAgICAgICBsYWJlbDogJ0FtYmllbnQgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVBbWJpZW50TGlnaHRJbnRlbnNpdHkgPSB0aGlzLmFtYmllbnRJbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkgPT09ICd0cmlhbmdsZXNwaGVyZScpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICBsZXQgcmFkaXVzID0gMC41O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgcmFkaXVzLCAwXSk7XHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlU3BoZXJlKDgsIHJhZGl1cywgY2VudGVyKTtcclxuICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3RyaWFuZ2xlY3ViZScpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IDAuODtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBnbFZlYzMoWzAsIHNpemUgLyAyLjAsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVDdWJlKHNpemUsIGNlbnRlcik7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLm9iaicpKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVCYWxsUmFkaXVzID0gMDtcclxuICAgICAgICAgcmV0dXJuIGZldGNoKHF1ZXJ5KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmpGaWxlKHJlcyk7XHJcbiAgICAgICAgICAgICAgIGxldCBzaXplID0gMS41O1xyXG4gICAgICAgICAgICAgICB0T2JqLmF1dG9DZW50ZXIoc2l6ZSk7XHJcbiAgICAgICAgICAgICAgIHRPYmoudHJhbnNsYXRlKG5ldyBnbFZlYzMoWzAsIHRPYmouaGVpZ2h0IC8gMiwgMF0pKTtcclxuICAgICAgICAgICAgICAgdE9iai5icmVha0ludG9Wb2x1bWVzKCk7XHJcbiAgICAgICAgICAgICAgIHJldHVybiB0T2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldExpZ2h0Q29sb3IoKSB7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIGNvbG9ycyBmb3IgdGhlIGludGVuc2l0eSBzbGlkZXJcclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIuY29sb3JzID0gW2h0bWxDb2xvci5ibGFjaywgdGhpcy5saWdodENvbG9yU2xpZGVyLmh0bWxDb2xvcl07XHJcblxyXG4gICAgICAvLyB1c2UgdGhlIHZhbHVlIGluIHJlbmRlcmluZ1xyXG4gICAgICBVbmlmb3Jtcy51TGlnaHRDb2xvciA9IHRoaXMubGlnaHRDb2xvclNsaWRlci5nbENvbG9yO1xyXG5cclxuICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Eb3duKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGljayh4LCB5KSkge1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCA9ICh4IDwgMC4xICogdGhpcy5jYW52YXMud2lkdGgpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgdGhpcy5vbGRZID0geTtcclxuXHJcbiAgICAgIHRoaXMucG9zID0gU3BoZXJpY2FsQ29vcmQuZnJvbVhZWihVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzKTtcclxuXHJcbiAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XHJcbiAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnpvb21aIC09ICh5IC0gdGhpcy5vbGRZKSAqIDAuMDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogPSBjbGFtcCh0aGlzLnpvb21aLCAxLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVkgLT0gKHggLSB0aGlzLm9sZFgpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggKz0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuXHJcbiAgICAgICAgICAgICAgIC8vIGRvbid0IGdvIHVwc2lkZSBkb3duXHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5tYXgodGhpcy5hbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCA9IE1hdGgubWluKHRoaXMuYW5nbGVYLCBNYXRoLlBJIC8gMiAtIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yYWRpdXMgLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyA9IGNsYW1wKHRoaXMucG9zLnJhZGl1cywgVW5pZm9ybXMudUJhbGxSYWRpdXMgKyAwLjUsIDUpO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3Mucm90YXRpb25BbmdsZSArPSAoeCAtIHRoaXMub2xkWCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlICs9ICh5IC0gdGhpcy5vbGRZKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgPSBjbGFtcCh0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSwgMCwgMTgwKTtcclxuICAgICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0UG9zLnZhbHVlcyA9IHRoaXMucG9zLnRvWFlaKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gY2xlYXIgdGhlIHNhbXBsZSBidWZmZXJcclxuICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAvLyByZW1lbWJlciB0aGlzIGNvb3JkaW5hdGVcclxuICAgICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgICAgdGhpcy5vbGRZID0geTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuIElmIGEgaGl0XHJcbiAgICAqIG9jY3VycywgdGhlIGNsaWNrZWQgb24gdmlldyBpcyBzd2FwcGVkIGZvciB0aGUgcHJpbWFyeSB2aWV3IGFuZCB0cnVlXHJcbiAgICAqIGlzIHJldHVybmVkLiBJZiBubyBoaXQgb2NjdXJzLCBmYWxzZSBpcyByZXR1cm5lZC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUuXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUuXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgIC8vIFRPRE8gaGFuZGxlIHRoaXMgd2l0aGluIHRoZSBQYXRoVHJhY2VyIGNsYXNzIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBoYXJkIGNvZGUgdmlldyBzdHVmZlxyXG4gICAgICBsZXQgc2l6ZSA9IDAuMiAqIHRoaXMuY2FudmFzLndpZHRoO1xyXG5cclxuICAgICAgaWYgKHkgPCBzaXplKSB7XHJcblxyXG4gICAgICAgICBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMSAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDIgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAzICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgc3dpdGNoICh0aGlzLnJlbmRlcmVyLnJlbmRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkFydGlzdDpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQ2hyb21hOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkNocm9tYSBWaWV3OiByZWQ9aGlnaGVzdCBjaHJvbWFcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuVmFsdWU6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVmFsdWUgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5CYW5kczpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCI1IENvbG9yICsgSGlnaGxpZ2h0IFZpZXdcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUZXh0dXJlKCkge1xyXG4gICAgICB0aGlzLm1vZGVsdmlldyA9IGdsTWF0NC5tYWtlTG9va0F0KFxyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSksICAvLyBjZW50ZXIgcG9pbnRcclxuICAgICAgICAgbmV3IGdsVmVjMyhbMCwgMSwgMF0pICAgLy8gdXAgdmVjdG9yXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb24gPSBnbE1hdDQubWFrZVBlcnNwZWN0aXZlKDU1LCAxLCAwLjEsIDEwMCk7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdGlvbi5tdWx0TSh0aGlzLm1vZGVsdmlldyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudXBkYXRlVGV4dHVyZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24pO1xyXG4gICB9O1xyXG5cclxuICAgcHJpdmF0ZSBkaXNwbGF5VGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc3dhcChwb3MpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdGljaygpIHtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVGltZXJMYWJlbCgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICAgIGlmIChVbmlmb3Jtcy51U2FtcGxlIDwgdGhpcy5NQVhfU0FNUExFUykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1swXSA9IHRoaXMuem9vbVogKiBNYXRoLnNpbih0aGlzLmFuZ2xlWSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWCk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzFdID0gdGhpcy56b29tWiAqIE1hdGguc2luKHRoaXMuYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMl0gPSB0aGlzLnpvb21aICogTWF0aC5jb3ModGhpcy5hbmdsZVkpICogTWF0aC5jb3ModGhpcy5hbmdsZVgpO1xyXG5cclxuICAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVUaW1lckxhYmVsKCkge1xyXG5cclxuICAgICAgbGV0IHQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIGxldCBkcmF3VGltZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdUaW1lJyk7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RUaW1lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIGxldCBlbGFwc2VkTXMgPSAodCAtIHRoaXMubGFzdFRpbWVzWzBdKSAvIHRoaXMubGFzdFRpbWVzLmxlbmd0aDtcclxuICAgICAgICAgZHJhd1RpbWVMYWJlbC5pbm5lclRleHQgPSBlbGFwc2VkTXMudG9GaXhlZCgwKSArICdtcyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0VGltZXMucHVzaCh0KTtcclxuICAgICAgaWYgKHRoaXMubGFzdFRpbWVzLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgIHRoaXMubGFzdFRpbWVzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyYXdUaW1lTGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9IFVuaWZvcm1zLnVTYW1wbGUgPCB0aGlzLk1BWF9TQU1QTEVTID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IFVuaWZvcm1zLnVTYW1wbGUgLyB0aGlzLk1BWF9TQU1QTEVTO1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc1NwYW4nKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgIGxldCB3ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUucmlnaHQgPSB3ICogKDEgLSBwcm9ncmVzcykgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzcGFuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdsTWF0NCB9IGZyb20gJy4vZ2xNYXQnO1xyXG5pbXBvcnQgeyBnbFZlYzMsIGdsVmVjNCB9IGZyb20gJy4vZ2xWZWMnO1xyXG5pbXBvcnQgdG9TY3JlZW5WZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlblZlcnRleC5nbHNsJztcclxuaW1wb3J0IHRvU2NyZWVuRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1NjcmVlbkZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlVmVydGV4U291cmNlIGZyb20gJy4vc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gJy4vQ29sb3JSYW5nZSc7XHJcbmltcG9ydCB7IFVuaWZvcm1zIH0gZnJvbSAnLi9Vbmlmb3Jtcyc7XHJcbmltcG9ydCB7IGdsLCBpc01vYmlsZSB9IGZyb20gJy4vR2xvYmFscyc7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSAnLi9Qcm9maWxlcic7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gJy4vZ2xVbmlmb3JtJztcclxuaW1wb3J0IHsgZ2xDb21waWxlciB9IGZyb20gJy4vZ2xDb21waWxlcic7XHJcbmltcG9ydCB7IENvbG9yQW5hbHl6ZXIgfSBmcm9tICcuL0NvbG9yQW5hbHl6ZXInO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm1CbG9jayB9IGZyb20gJy4vZ2xVbmlmb3JtQmxvY2snO1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlcmluZyBtb2RlIGZvciBkaXNwbGF5aW5nIHRoZSB0ZXh0dXJlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZW5kZXJNb2RlIHtcclxuICAgQXJ0aXN0ID0gMCxcclxuICAgVmFsdWUgPSAxLFxyXG4gICBDaHJvbWEgPSAyLFxyXG4gICBCYW5kcyA9IDMsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGRvZXMgdGhlIHdvcmsgb2YgYnVpbGRpbmcgdGhlIFBhdGggVHJhY2VkIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXRoVHJhY2VyUmVuZGVyZXIge1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG4gICBwcml2YXRlIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVzOiBXZWJHTFRleHR1cmVbXTtcclxuICAgcHJpdmF0ZSB0b1NjcmVlblByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB0b1NjcmVlblZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB0b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBhbmFseXplcjogQ29sb3JBbmFseXplcjtcclxuXHJcbiAgIHByaXZhdGUgbWFpblZpZXcgPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgcHJpdmF0ZSBzbWFsbFZpZXdzID0gW1xyXG4gICAgICBSZW5kZXJNb2RlLkNocm9tYSxcclxuICAgICAgUmVuZGVyTW9kZS5WYWx1ZSxcclxuICAgICAgUmVuZGVyTW9kZS5CYW5kcyxcclxuICAgXTtcclxuXHJcbiAgIHByaXZhdGUgdmVydGljZXMgPSBbXHJcbiAgICAgIC0xLCAtMSxcclxuICAgICAgLTEsICsxLFxyXG4gICAgICArMSwgLTEsXHJcbiAgICAgICsxLCArMVxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICAvLyBsYXJnZXIgdGV4dHVyZSBpcyBoaWdoZXIgcmVzb2x1dGlvbiwgYnV0IHRha2VzIGxvbmdlciB0byBjb21wdXRlXHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSAyNTY7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDUxMjtcclxuICAgICAgICAgVW5pZm9ybXMudVRleHR1cmVTaXplID0gMjU2O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5hbHl6ZXIgPSBuZXcgQ29sb3JBbmFseXplcihVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHZlcnRleCBidWZmZXIgLSB0aGUgYmxvY2sgd2UnbGwgZHJhdyBvdXIgcmVuZGVyZWQgdGV4dHVyZSBvblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGZyYW1lYnVmZmVyXHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgbGV0IGludGVybmFsRm9ybWF0OiBudW1iZXI7XHJcbiAgICAgIGxldCBmb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IHR5cGU6IG51bWJlcjtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0ZXh0dXJlc1xyXG4gICAgICBpZiAoZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgbGV0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcpO1xyXG4gICAgICAgICBpZiAoZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIFRoYW5rcyBBcHBsZS4gQWx3YXlzIGdvdCB0byBkbyB0aGluZ3MgYSBsaXR0bGUgZGlmZmVyZW50bHlcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZXh0LkhBTEZfRkxPQVRfT0VTO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyBmbG9hdGluZyBwb2ludCB0ZXh0dXJlcz8gcmVhbGx5IGZhbGwgYmFjayB0byB1bnNpZ25lZCBieXRlc1xyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCBsZXQgeW91IGRvIGFuICdlbHNlIGlmJyBoZXJlIGFuZCB3aGVuIFdlYkdMMiBpc1xyXG4gICAgICAvLyBub3Qgc3VwcG9ydGVkLCB3ZSBnZXQgYW4gZXhjZXB0aW9uLCBzbyB0aHVzIHRoZSB0cnktY2F0Y2hcclxuICAgICAgLy8gc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTM4MTEyMi90eXBlc2NyaXB0LXR5cGUtbmFycm93ZWQtdG8tbmV2ZXItd2l0aC1pbnN0YW5jZW9mLWluLWFuLWlmLWVsc2Utc3RhdGVtZW50XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQpIHtcclxuICAgICAgICAgICAgZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTMyRjtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLkZMT0FUXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY3JlYXRlIHR3byB0ZXh0dXJlcy4gT25lIHdlIGRpc3BsYXkgYW5kIG9uZSB3ZSBkcmF3IHRvXHJcbiAgICAgIHRoaXMudGV4dHVyZXMgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKGdsLmNyZWF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbaV0pO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgICAgICAgICAgLy8gdGFyZ2V0XHJcbiAgICAgICAgICAgIDAsICAgICAgICAgICAgICAgICAgICAgIC8vIGxldmVsXHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0LCAgICAgICAgIC8vIGludGVybmFsIGZvcm1hdFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyB3aWR0aFxyXG4gICAgICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUsICAvLyBoZWlnaHRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyXHJcbiAgICAgICAgICAgIGZvcm1hdCwgICAgICAgICAgICAgICAgIC8vIGZvcm1hdFxyXG4gICAgICAgICAgICB0eXBlLCAgICAgICAgICAgICAgICAgICAvLyB0eXBlXHJcbiAgICAgICAgICAgIG51bGwgICAgICAgICAgICAgICAgICAgIC8vIHBpeGVsc1xyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRvU2NyZWVuIHNoYWRlclxyXG4gICAgICB0aGlzLnRvU2NyZWVuUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZSh0b1NjcmVlblZlcnRleFNvdXJjZSwgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSk7XHJcbiAgICAgIHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRvU2NyZWVuUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvU2NyZWVuVmVydGV4QXR0cmlidXRlKTtcclxuXHJcbiAgICAgIHRoaXMuY29tcGlsZVNoYWRlcih0T2JqKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb21waWxlU2hhZGVyKHRPYmo/OiBUcmlhbmdsZU9iaikge1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICAvLyBjcmVhdGUgdGhlIHRvVGV4dHVyZSBzaGFkZXJcclxuICAgICAgaWYgKHRPYmogJiYgdE9iai50cmlhbmdsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICB0aGlzLnRvVGV4dHVyZVByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZVZlcnRleFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJyN2ZXJzaW9uIDMwMCBlcycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCdOT1RISU5HJywgJ1VTRV9UUklBTkdMRVMnKSxcclxuICAgICAgICAgICAgdG9UZXh0dXJlRnJhZ21lbnRTb3VyY2VcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxWRVJTSU9OPicsICcjdmVyc2lvbiAzMDAgZXMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnTk9USElORycsICdVU0VfVFJJQU5HTEVTJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVkVSVElDRVM+JywgdE9iai52ZXJ0aWNlcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVk9MVU1FUz4nLCB0T2JqLnZvbHVtZXMubGVuZ3RoLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8TlVNX1RSSUFOR0xFUz4nLCB0T2JqLnRyaWFuZ2xlcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIC8vIHVwbG9hZCB0cmlhbmdsZXMgdG8gdGhlIEdQVVxyXG4gICAgICAgICB0aGlzLnVwbG9hZFVuaWZvcm1zKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnRvVGV4dHVyZVByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUoXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZVZlcnRleFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJycpLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVGcmFnbWVudFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJycpXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRvVGV4dHVyZVByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG4gICAgICBwLmxvZygnY29tcGlsZScpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVXBsb2FkcyBhbGwgdGhlIHRyaWFuZ2xlIGRhdGEgdG8gV2ViR0xcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwcm9ncmFtIFRoZSBwcm9ncmFtIHRvIHVwbG9hZCB0b1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSB1cGxvYWRVbmlmb3Jtcyh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG5cclxuICAgICAgLy8gdXBsb2FkIHRoZSBiaWcgY2h1bmtzIGFzIFVuaWZvcm0gQmxvY2tzXHJcbiAgICAgIGxldCBibG9ja0JpbmRpbmcgPSAyO1xyXG4gICAgICBsZXQgdkJsb2NrID0gbmV3IGdsVW5pZm9ybUJsb2NrKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ015VmVydGljZXNCbG9jaycsIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICAvLyBwdXQgdGhlIGRhdGEgaW50byBhIEZsb2F0MzJBcnJheSBmb3IgdXBsb2FkaW5nXHJcbiAgICAgIGxldCB2RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodE9iai52ZXJ0aWNlcy5sZW5ndGggKiA0KTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdE9iai52ZXJ0aWNlc1tpXTtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAwXSA9IHYueDtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAxXSA9IHYueTtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAyXSA9IHYuejtcclxuICAgICAgICAgdkRhdGFbNCAqIGkgKyAzXSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdkJsb2NrLnVwbG9hZCh2RGF0YSk7XHJcblxyXG4gICAgICBibG9ja0JpbmRpbmcgPSAzO1xyXG4gICAgICBsZXQgdEJsb2NrID0gbmV3IGdsVW5pZm9ybUJsb2NrKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ015VHJpYW5nbGVzQmxvY2snLCBibG9ja0JpbmRpbmcpO1xyXG5cclxuICAgICAgLy8gcHV0IHRoZSBkYXRhIGludG8gYSBGbG9hdDMyQXJyYXkgZm9yIHVwbG9hZGluZ1xyXG4gICAgICBsZXQgdERhdGEgPSBuZXcgSW50MzJBcnJheSh0T2JqLnRyaWFuZ2xlcy5sZW5ndGggKiA0KTtcclxuICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCB0T2JqLnZvbHVtZXMubGVuZ3RoOyB2KyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRPYmoudm9sdW1lc1t2XTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2b2wudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdm9sLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMDtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMTtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSB0LmlWMjtcclxuICAgICAgICAgICAgdERhdGFbaW5kZXgrK10gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdEJsb2NrLnVwbG9hZCh0RGF0YSk7XHJcblxyXG4gICAgICAvLyBVcGxvYWQgdGhlIHZvbHVtZSBpbmZvIGFzIGEgc3RhbmRhcmQgdW5pZm9ybVxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnRvVGV4dHVyZVByb2dyYW0pO1xyXG4gICAgICBsZXQgc3RhcnRJbmRleCA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2b2wgPSB0T2JqLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10uc3RhcnRJbmRleCcsIHN0YXJ0SW5kZXgsIHRydWUpO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLm51bVRyaWFuZ2xlcycsIHZvbC50cmlhbmdsZXMubGVuZ3RoLCB0cnVlKTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5ib3hNaW4nLCB2b2wuYm94TWluKTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5ib3hNYXgnLCB2b2wuYm94TWF4KTtcclxuICAgICAgICAgc3RhcnRJbmRleCArPSB2b2wudHJpYW5nbGVzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICB1bmkuc2V0KCdvYmplY3QuYm94TWluJywgdE9iai5ib3hNaW4pO1xyXG4gICAgICB1bmkuc2V0KCdvYmplY3QuYm94TWF4JywgdE9iai5ib3hNYXgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHJlbmRlck1vZGUoKTogUmVuZGVyTW9kZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1haW5WaWV3O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgVW5pZm9ybXMudVNhbXBsZSA9IDA7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0RXllUmF5KG1hdHJpeDogZ2xNYXQ0LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWM0KFt4LCB5LCAwLCAxXSk7XHJcbiAgICAgIHJldHVybiBtYXRyaXgubXVsdFYodmVjKS5kaXZpZGVCeVcoKS5zdWJ0cmFjdChVbmlmb3Jtcy51RXllKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwZGF0ZVRleHR1cmUobW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0KTogdm9pZCB7XHJcblxyXG4gICAgICAvLyBpbXBsZW1lbnQgYWxpYXNpbmcgYnkgcmFuZG9tIHNhbXBsaW5nIHdpdGhpbiBhIHBpeGVsXHJcbiAgICAgIGxldCB4ID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgLyBVbmlmb3Jtcy51VGV4dHVyZVNpemU7XHJcbiAgICAgIGxldCB5ID0gKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgLyBVbmlmb3Jtcy51VGV4dHVyZVNpemU7XHJcbiAgICAgIGxldCB6ID0gMDtcclxuXHJcbiAgICAgIGxldCB2ID0gbmV3IGdsVmVjMyhbeCwgeSwgel0pO1xyXG4gICAgICBsZXQgaml0dGVyID0gZ2xNYXQ0LmZyb21UcmFuc2xhdGlvbih2KTtcclxuICAgICAgbGV0IG1hdHJpeCA9IGppdHRlci5tdWx0TShtb2RlbHZpZXdQcm9qZWN0aW9uKS5pbnZlcnQoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVSYXkwMCA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTAxID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCAtMSwgKzEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MTAgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsICsxLCAtMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMSA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsICsxKTtcclxuICAgICAgLy8gc2V0IHVuaWZvcm1zXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG5cclxuICAgICAgLy8gcmVuZGVyIHRvIHRleHR1cmVcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgVW5pZm9ybXMudVRleHR1cmVTaXplLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLCAwKTtcclxuXHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1RleHR1cmVWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5hbmFseXplci5ydW4oVW5pZm9ybXMudUxpZ2h0QWxwaGEsIFVuaWZvcm1zLnVTaGFkb3dBbHBoYSk7XHJcbiAgICAgIFVuaWZvcm1zLnVNYXhDaHJvbWEgPSBkYXRhLm1heENocm9tYTtcclxuXHJcbiAgICAgIGxldCBjciA9IG5ldyBDb2xvclJhbmdlKFtkYXRhLmRhcmtlc3RMaWdodENvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEuYXZnTGlnaHRDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvci50b0h0bWxDb2xvcigpXSk7XHJcbiAgICAgIFVuaWZvcm1zLnVIaWdobGlnaHRDb2xvciA9IGRhdGEuaGlnaGxpZ2h0Q29sb3I7XHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodExpZ2h0Q29sb3IgPSBjci5nZXQoMC44NSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVNaWRMaWdodENvbG9yID0gY3IuZ2V0KDAuNSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVEYXJrTGlnaHRDb2xvciA9IGNyLmdldCgwLjE1KS50b0dsQ29sb3IoKTtcclxuXHJcbiAgICAgIGNyID0gbmV3IENvbG9yUmFuZ2UoW2RhdGEuZGFya2VzdFNoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEuYXZnU2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yLnRvSHRtbENvbG9yKCldKTtcclxuICAgICAgLy9Vbmlmb3Jtcy51U2hhZG93Q29sb3IgPSBkYXRhLnRlcm1pbmF0b3JDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudVNoYWRvd0NvbG9yID0gZGF0YS5hdmdTaGFkb3dDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudVJlZmxlY3RlZExpZ2h0Q29sb3IgPSBjci5nZXQoMSkudG9HbENvbG9yKCk7XHJcbiAgICAgIFVuaWZvcm1zLnVEYXJrQWNjZW50Q29sb3IgPSBjci5nZXQoMC4wKS50b0dsQ29sb3IoKTtcclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBwaW5nIHBvbmcgdGV4dHVyZXNcclxuICAgICAgdGhpcy50ZXh0dXJlcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlKys7XHJcbiAgICAgIFVuaWZvcm1zLnVSYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG5cclxuICAgICAgLy8gc2l6ZSBvZiB0aGUgYWN0dWFsIGNhbnZhcy4gVGhlIHRleHR1cmUgd2UgY3JlYXRlIGlzIGRyYXduIHRvIHRoaXMgaXRlbVxyXG4gICAgICBsZXQgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIC8vIG5vdCBzdXJlIHdoeSwgYnV0IHRoaXMgYmFzaWNhbGx5IGJlY29tZXMgZnVsbCB3aWR0aCBvbiBteSBwaG9uZVxyXG4gICAgICAgICBzaXplID0gNTEyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICBnbC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBtYWluIHNjcmVlblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnRvU2NyZWVuUHJvZ3JhbSk7XHJcbiAgICAgIFVuaWZvcm1zLnVTY2FsZSA9IDEuMDtcclxuICAgICAgVW5pZm9ybXMudVhPZmZzZXQgPSAwLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMC4wO1xyXG4gICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMubWFpblZpZXc7XHJcbiAgICAgIHVuaS5zZXRBbGwoVW5pZm9ybXMpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIHNtYWxsZXIgdmlld3NcclxuICAgICAgVW5pZm9ybXMudVNjYWxlID0gMC4yO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc21hbGxWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51WE9mZnNldCA9IDEuMCAtICh0aGlzLnNtYWxsVmlld3MubGVuZ3RoIC0gaSAtIDAuNSkgKiAoMiAqIFVuaWZvcm1zLnVTY2FsZSk7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVZT2Zmc2V0ID0gMS4wIC0gVW5pZm9ybXMudVNjYWxlO1xyXG4gICAgICAgICBVbmlmb3Jtcy51TW9kZSA9IHRoaXMuc21hbGxWaWV3c1tpXTtcclxuICAgICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcbiAgICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzd2FwKHBvczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc21hbGxWaWV3cyA9IFtcclxuICAgICAgICAgUmVuZGVyTW9kZS5DaHJvbWEsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuVmFsdWUsXHJcbiAgICAgICAgIFJlbmRlck1vZGUuQmFuZHMsXHJcbiAgICAgIF07XHJcbiAgICAgIGlmICh0aGlzLm1haW5WaWV3ID09IHRoaXMuc21hbGxWaWV3c1twb3NdKSB7XHJcbiAgICAgICAgIHRoaXMubWFpblZpZXcgPSBSZW5kZXJNb2RlLkFydGlzdDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tYWluVmlldyA9IHRoaXMuc21hbGxWaWV3c1twb3NdO1xyXG4gICAgICAgICB0aGlzLnNtYWxsVmlld3NbcG9zXSA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlzcGxheVRleHR1cmUoKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IEdsb2JhbHMsIHRvUmFkIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBQbGFuZXNSZW5kZXJlciB9IGZyb20gXCIuL1BsYW5lc1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IFNwaGVyaWNhbENvb3JkIH0gZnJvbSBcIi4vU3BoZXJpY2FsQ29vcmRcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2xWZWM0LCBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBOb3JtYWxUeXBlLCBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlU3BoZXJlIH0gZnJvbSBcIi4vVHJpYW5nbGVTcGhlcmVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVDdWJlIH0gZnJvbSBcIi4vVHJpYW5nbGVDdWJlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqRmlsZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqRmlsZVwiO1xyXG5cclxuZW51bSBQb2ludGVyTW9kZSB7XHJcbiAgIFZpZXcsXHJcbiAgIExpZ2h0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbmVzQXBwIHtcclxuICAgcHVibGljIHJlbmRlcmVyOiBQbGFuZXNSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlU3BlY2lhbCA9IGZhbHNlO1xyXG4gICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBwcml2YXRlIG1vdXNlRG93biA9IGZhbHNlO1xyXG4gICBwcml2YXRlIG9sZFg6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBvbGRZOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgZGlydHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHJpdmF0ZSB0aHJlc2hvbGQxU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgdGhyZXNob2xkMlNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGxpZ2h0TGlnaHRTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBtaWRMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGRhcmtMaWdodFNsaWRlcjogU2xpZGVyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgR2xvYmFscy5nbCA9IGNvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBsYW5lc1JlbmRlcmVyKCk7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoc3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaG1vdmUgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5vbk1vdmUoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoZW5kID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Eb3duKGV2ZW50LngsIGV2ZW50LnkpO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Nb3ZlKGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNldXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2N1bWVudC5vbmtleXByZXNzID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdvJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm9wdGltaXplKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdwJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm9wdGltaXplKE5vcm1hbFR5cGUuRmxhdCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5sb2FkTW9kZWwodGhpcy5xdWVyeSkudGhlbigodE9iajogVHJpYW5nbGVPYmopID0+IHtcclxuICAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgYnV0dG9uLmlkID0gJ21vZGVCdXR0b24nO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLlZpZXc6XHJcbiAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnTGlnaHQnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdWaWV3JztcclxuICAgICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgIGxldCBsaWdodFNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnTGlnaHRJbnRlbnNpdHknLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIubGlnaHRJbnRlbnNpdHkgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpZ2h0SW50ZW5zaXR5ID0gbGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGFtYmllbnRTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0FtYmllbnRJbnRlbnNpdHknLFxyXG4gICAgICAgICBsYWJlbDogJ0FtYmllbnQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5hbWJpZW50SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hbWJpZW50SW50ZW5zaXR5ID0gYW1iaWVudFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICovXHJcblxyXG4gICAgICBsZXQgc3luY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgc3luY0xhYmVsLmlkID0gJ1N5bmNMYWJlbCc7XHJcbiAgICAgIHN5bmNMYWJlbC5jbGFzc05hbWUgPSAnTGFiZWwnO1xyXG4gICAgICBzeW5jTGFiZWwuaW5uZXJUZXh0ID0gJ1N5bmNocm9uaXplIFZhbHVlcyc7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChzeW5jTGFiZWwpO1xyXG5cclxuICAgICAgbGV0IHN5bmNDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHN5bmNDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgICAgc3luY0NoZWNrYm94LmlkID0gJ1N5bmNDaGVja0JveCc7XHJcbiAgICAgIHN5bmNDaGVja2JveC5jbGFzc05hbWUgPSAnU3luY0NoZWNrQm94JztcclxuICAgICAgc3luY0NoZWNrYm94LmNoZWNrZWQgPSB0aGlzLnJlbmRlcmVyLnN5bmM7XHJcbiAgICAgIHN5bmNDaGVja2JveC5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnN5bmMgPSAhdGhpcy5yZW5kZXJlci5zeW5jO1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgfVxyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoc3luY0NoZWNrYm94KTtcclxuXHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcbiAgICAgIHRoaXMudGhyZXNob2xkMVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnVGhyZXNob2xkMScsXHJcbiAgICAgICAgIGxhYmVsOiAnVGhyZXNob2xkIDEnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogOTAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDEsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci50aHJlc2hvbGQxID0gdGhpcy50aHJlc2hvbGQxU2xpZGVyLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuIHRoaXMucmVuZGVyZXIudGhyZXNob2xkMS50b0ZpeGVkKDApICsgXCLCulwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnRocmVzaG9sZDJTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ1RocmVzaG9sZDInLFxyXG4gICAgICAgICBsYWJlbDogJ1RocmVzaG9sZCAyJyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDkwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci50aHJlc2hvbGQyLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudGhyZXNob2xkMiA9IHRoaXMudGhyZXNob2xkMlNsaWRlci52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDIudG9GaXhlZCgwKSArIFwiwrpcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdMaWdodExpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQgPSB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIubGlnaHRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLm1pZExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihkaXYsIHtcclxuICAgICAgICAgaWQ6ICdNaWRMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnTWlkIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIubWlkTGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0ID0gdGhpcy5taWRMaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnRGFya0xpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdEYXJrIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQgPSB0aGlzLmRhcmtMaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuXHJcbiAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVzcGhlcmUnKSB7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSAwLjc1O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZVNwaGVyZSgxMDAsIHJhZGl1cywgY2VudGVyKVxyXG4gICAgICAgICB0T2JqLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVjdWJlJykge1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IDAuODtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBnbFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVDdWJlKHNpemUsIGNlbnRlcik7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0TW9kZWwodE9iaik7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLm9iaicpKSB7XHJcbiAgICAgICAgIHJldHVybiBmZXRjaChxdWVyeSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqRmlsZShyZXMpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICAgICAgICB0aGlzLm9yaWVudCh0T2JqLCBxdWVyeSk7XHJcbiAgICAgICAgICAgICAgIHJldHVybiB0T2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdVbmtub3duIG1vZGVsOiBcXCcnICsgcXVlcnkgKyAnXFwnJyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIG9yaWVudCh0T2JqOiBUcmlhbmdsZU9iaiwgcXVlcnk6IHN0cmluZykge1xyXG5cclxuICAgICAgbGV0IGNlbnRlciA9IHRPYmouY2VudGVyO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFstY2VudGVyLngsIC1jZW50ZXIueSwgLWNlbnRlci56XSkpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNjYWxlKDEuNzUgLyBNYXRoLm1heCh0T2JqLndpZHRoLCB0T2JqLmhlaWdodCwgdE9iai5kZXB0aCkpO1xyXG5cclxuICAgICAgLy8gb3JpZW50IGVhY2ggZmlsZSBzbyB0aGF0IGl0IGlzIGZhY2luZyBmb3J3YXJkXHJcbiAgICAgIHN3aXRjaCAocXVlcnkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICBjYXNlICdza3VsbC5vYmonOlxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFgodG9SYWQoOTApKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKDE4MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgJ2ZlbWFsZWhlYWQub2JqJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKDE4MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgJ3dvbGYub2JqJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKC0xNDApKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RYKHRvUmFkKDUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdzaGVlcGhlYWQub2JqJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKC0xNjApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICd0b20ub2JqJzpcclxuICAgICAgICAgY2FzZSAnbWFsZWhlYWQub2JqJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKDE4MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVNsaWRlcnMoKSB7XHJcbiAgICAgIHRoaXMudGhyZXNob2xkMVNsaWRlci52YWx1ZSA9IHRoaXMucmVuZGVyZXIudGhyZXNob2xkMTtcclxuICAgICAgdGhpcy50aHJlc2hvbGQyU2xpZGVyLnZhbHVlID0gdGhpcy5yZW5kZXJlci50aHJlc2hvbGQyO1xyXG4gICAgICB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQ7XHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0O1xyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRG93bih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cclxuICAgICAgaWYgKHRoaXMuY2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5wb2ludGVyTW9kZVNwZWNpYWwgPSAoeCA8IDAuMSAqIHRoaXMuY2FudmFzLndpZHRoKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMub2xkWCA9IHg7XHJcbiAgICAgIHRoaXMub2xkWSA9IHk7XHJcblxyXG4gICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Nb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFooKHRoaXMub2xkWSAtIHkpICogMC4wMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WCgoeSAtIHRoaXMub2xkWSkgKiAwLjAxKTtcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKCh4IC0gdGhpcy5vbGRYKSAqIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IFNwaGVyaWNhbENvb3JkLmZyb21YWVoodGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24udmFsdWVzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yYWRpdXMgLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyA9IGNsYW1wKHRoaXMucG9zLnJhZGl1cywgVW5pZm9ybXMudUJhbGxSYWRpdXMgKyAwLjUsIDUpO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IG1hdFkgPSBnbE1hdDQuZnJvbVJvdFkodG9SYWQoeCAtIHRoaXMub2xkWCkpO1xyXG4gICAgICAgICAgICAgICBsZXQgbWF0WCA9IGdsTWF0NC5mcm9tUm90WCh0b1JhZCh5IC0gdGhpcy5vbGRZKSk7XHJcbiAgICAgICAgICAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWM0KFtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueCxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueixcclxuICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgdmVjID0gbWF0WC5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICAgICAgICB2ZWMgPSBtYXRZLm11bHRWKHZlYyk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnggPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi55ID0gdmVjLnZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueiA9IHZlYy52YWx1ZXNbMl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyByZW1lbWJlciB0aGlzIGNvb3JkaW5hdGVcclxuICAgICAgICAgdGhpcy5vbGRYID0geDtcclxuICAgICAgICAgdGhpcy5vbGRZID0geTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJvY2Vzc2VzIGEgY2xpY2svdG91Y2ggZXZlbnQgYXQgdGhlIGRlc2lnbmF0ZWQgY29vcmRpbmF0ZXMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlLlxyXG4gICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlLlxyXG4gICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgaGl0IG9uIG9uZSBvZiB0aGUgdmlld3Mgb2NjdXJzLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjbGljayh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgbGV0IHNpemUgPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuY2xpY2soeCAvIHNpemUsIDEgLSAoeSAvIHNpemUpKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRpY2soKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcigpO1xyXG4gICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnRpY2soKSk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbE1hdDQgfSBmcm9tICcuL2dsTWF0JztcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB2ZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BsYW5lc1ZlcnRleC5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50U291cmNlIGZyb20gJy4vc2hhZGVycy9QbGFuZXNGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgZ2wsIGNsYW1wLCBtaXgsIHRvUmFkLCB0b0RlZywgaXNNb2JpbGUgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZVNwaGVyZSB9IGZyb20gJy4vVHJpYW5nbGVTcGhlcmUnO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tICcuL2dsVW5pZm9ybSc7XHJcbmltcG9ydCB7IGdsQ29tcGlsZXIgfSBmcm9tICcuL2dsQ29tcGlsZXInO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBnbE9iamVjdCB9IGZyb20gJy4vZ2xPYmplY3QnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUFycm93IH0gZnJvbSAnLi9UcmlhbmdsZUFycm93JztcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gJy4vZ2xDb2xvcic7XHJcbmltcG9ydCB7IFNoYWRvd01hcCB9IGZyb20gJy4vU2hhZG93TWFwJztcclxuaW1wb3J0IHsgVGV4dHVyZVJlbmRlcmVyIH0gZnJvbSAnLi9UZXh0dXJlUmVuZGVyZXInO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgcmVuZGVycyB0cmlhbmdsZXMgYW5kIGEgbGlnaHQgc291cmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxhbmVzUmVuZGVyZXIge1xyXG5cclxuICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgcHJpdmF0ZSBzaGFkb3dWaWV3ID0gbmV3IGdsTWF0NCgpO1xyXG4gICBwcml2YXRlIHByb2plY3Rpb24gPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICBwdWJsaWMgbGlnaHRJbnRlbnNpdHkgPSAwLjc7XHJcbiAgIHB1YmxpYyBhbWJpZW50SW50ZW5zaXR5ID0gMC4yO1xyXG5cclxuICAgcHJpdmF0ZSB1Q29sb3IgPSBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pO1xyXG4gICBwcml2YXRlIHVUaHJlc2hvbGQxID0gMTU7XHJcbiAgIHByaXZhdGUgdVRocmVzaG9sZDIgPSA1NTtcclxuXHJcbiAgIHByaXZhdGUgdUxpZ2h0TGlnaHQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB1TWlkTGlnaHQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB1RGFya0xpZ2h0OiBudW1iZXI7XHJcblxyXG4gICBwcml2YXRlIF9zeW5jOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIC8vIHNpemUgb2YgdGhlIHNtYWxsZXIgdmlld1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IG1pbmlTaXplID0gMC4yO1xyXG5cclxuICAgcHJpdmF0ZSB1VXNlVGhyZXNob2xkcyA9IHRydWU7XHJcblxyXG4gICBwcml2YXRlIGJhbGw6IGdsT2JqZWN0O1xyXG4gICBwcml2YXRlIGFycm93OiBnbE9iamVjdDtcclxuICAgcHJpdmF0ZSBvYmo6IGdsT2JqZWN0O1xyXG5cclxuICAgcHJpdmF0ZSBzaGFkb3dNYXA6IFNoYWRvd01hcDtcclxuXHJcbiAgIHB1YmxpYyB1TGlnaHREaXJlY3Rpb24gPSBuZXcgZ2xWZWMzKFsxLjAsIC0xLjAsIDEuNV0pO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcblxyXG4gICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gICAgICB0aGlzLnByb2dyYW0gPSBnbENvbXBpbGVyLmNvbXBpbGUodmVydGV4U291cmNlLCBmcmFnbWVudFNvdXJjZSk7XHJcblxyXG4gICAgICBsZXQgdEJhbGwgPSBuZXcgVHJpYW5nbGVTcGhlcmUoMTAwLCAwLjUsIG5ldyBnbFZlYzMoWzAsIDAsIDBdKSk7XHJcbiAgICAgIHRCYWxsLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgdGhpcy5iYWxsID0gbmV3IGdsT2JqZWN0KHRCYWxsLCB0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgbGV0IHRBcnJvdyA9IG5ldyBUcmlhbmdsZUFycm93KCk7XHJcbiAgICAgIHRoaXMuYXJyb3cgPSBuZXcgZ2xPYmplY3QodEFycm93LCB0aGlzLnByb2dyYW0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHN5bmMoKTogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zeW5jO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgc3luYyh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5fc3luYyA9IHZhbDtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5vYmoucm90WChhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFkoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm9iai5yb3RZKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WihhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMub2JqLnJvdFooYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMub2JqLnNjYWxlKHNjYWxlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcbiAgICAgIHRoaXMub2JqLnRyYW5zbGF0ZShvZmZzZXQpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGxpZ2h0TGlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudUxpZ2h0TGlnaHQ7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCBsaWdodExpZ2h0KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gTWF0aC5taW4odGhpcy51TWlkTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IE1hdGgubWluKHRoaXMudURhcmtMaWdodCwgdmFsKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN5bmMpIHtcclxuICAgICAgICAgdGhpcy51VGhyZXNob2xkMSA9IDIgKiAodGhpcy50aHJlc2hvbGRBdCh0aGlzLnVMaWdodExpZ2h0KSk7XHJcbiAgICAgICAgIHRoaXMudVRocmVzaG9sZDIgPSAyICogdGhpcy50aHJlc2hvbGRBdCh0aGlzLnVEYXJrTGlnaHQpIC0gOTA7XHJcbiAgICAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbWlkTGlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudU1pZExpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgbWlkTGlnaHQodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51TWlkTGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1heCh0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1pbih0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zeW5jKSB7XHJcbiAgICAgICAgIGxldCByYW5nZSA9IHRoaXMudVRocmVzaG9sZDIgLSB0aGlzLnVUaHJlc2hvbGQxXHJcbiAgICAgICAgIHRoaXMudVRocmVzaG9sZDEgPSB0aGlzLnRocmVzaG9sZEF0KHRoaXMudU1pZExpZ2h0KSAtIHJhbmdlIC8gMjtcclxuICAgICAgICAgdGhpcy51VGhyZXNob2xkMiA9IHRoaXMudGhyZXNob2xkQXQodGhpcy51TWlkTGlnaHQpICsgcmFuZ2UgLyAyO1xyXG4gICAgICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRhcmtMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51RGFya0xpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgZGFya0xpZ2h0KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IHZhbDtcclxuICAgICAgdGhpcy51TGlnaHRMaWdodCA9IE1hdGgubWF4KHRoaXMudUxpZ2h0TGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gTWF0aC5tYXgodGhpcy51TWlkTGlnaHQsIHZhbCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zeW5jKSB7XHJcbiAgICAgICAgIHRoaXMudVRocmVzaG9sZDIgPSAyICogdGhpcy50aHJlc2hvbGRBdCh0aGlzLnVEYXJrTGlnaHQpIC0gOTA7XHJcbiAgICAgICAgIHRoaXMudVRocmVzaG9sZDEgPSAyICogdGhpcy50aHJlc2hvbGRBdCh0aGlzLnVNaWRMaWdodCkgLSB0aGlzLnVUaHJlc2hvbGQyO1xyXG4gICAgICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHRocmVzaG9sZDEoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudVRocmVzaG9sZDE7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB0aHJlc2hvbGQxKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDEgPSB2YWw7XHJcbiAgICAgIHRoaXMudVRocmVzaG9sZDIgPSBNYXRoLm1heCh0aGlzLnVUaHJlc2hvbGQyLCB2YWwpO1xyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQyO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gTWF0aC5taW4odGhpcy51VGhyZXNob2xkMSwgdmFsKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ29sb3JzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29sb3JBdChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIGRlZyA9IGNsYW1wKGRlZywgMCwgOTApO1xyXG4gICAgICAvLyAgICAgIHJldHVybiBtaXgodGhpcy5hbWJpZW50SW50ZW5zaXR5LCB0aGlzLmxpZ2h0SW50ZW5zaXR5LCBNYXRoLmNvcyh0b1JhZChkZWcpKSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmFtYmllbnRJbnRlbnNpdHkgKyB0aGlzLmxpZ2h0SW50ZW5zaXR5ICogTWF0aC5jb3ModG9SYWQoZGVnKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdGhyZXNob2xkQXQoY29sb3I6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIGNvbG9yID0gY2xhbXAoY29sb3IsIHRoaXMuYW1iaWVudEludGVuc2l0eSwgdGhpcy5hbWJpZW50SW50ZW5zaXR5ICsgdGhpcy5saWdodEludGVuc2l0eSk7XHJcbiAgICAgIHJldHVybiB0b0RlZyhNYXRoLmFjb3MoY29sb3IgLSB0aGlzLmFtYmllbnRJbnRlbnNpdHkpIC8gdGhpcy5saWdodEludGVuc2l0eSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29tcHV0ZUNvbG9ycygpIHtcclxuICAgICAgdGhpcy51TGlnaHRMaWdodCA9IHRoaXMuY29sb3JBdCgwLjUgKiB0aGlzLnRocmVzaG9sZDEpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IHRoaXMuY29sb3JBdChtaXgodGhpcy50aHJlc2hvbGQxLCB0aGlzLnRocmVzaG9sZDIsIDAuNykpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSB0aGlzLmNvbG9yQXQoKHRoaXMudGhyZXNob2xkMiArIDkwKSAvIDIpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2V0TW9kZWwodE9iajogVHJpYW5nbGVPYmopIHtcclxuICAgICAgdGhpcy5vYmogPSBuZXcgZ2xPYmplY3QodE9iaiwgdGhpcy5wcm9ncmFtKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIHNpemUgb2YgdGhlIGFjdHVhbCBjYW52YXMuXHJcbiAgICAgIGxldCBzaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgLy8gbm90IHN1cmUgd2h5LCBidXQgdGhpcyBiYXNpY2FsbHkgYmVjb21lcyBmdWxsIHdpZHRoIG9uIG15IHBob25lXHJcbiAgICAgICAgIHNpemUgPSA1MTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJUb1NoYWRvd01hcCgpO1xyXG4gICAgICB0aGlzLnJlbmRlclRvU2NyZWVuKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZW5kZXJUb1NoYWRvd01hcCgpOiB2b2lkIHtcclxuXHJcbiAgICAgIGlmICghdGhpcy5zaGFkb3dNYXApIHtcclxuICAgICAgICAgdGhpcy5zaGFkb3dNYXAgPSBuZXcgU2hhZG93TWFwKGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zaGFkb3dNYXAuZnJhbWVCdWZmZXIpO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgZ2wuY2xlYXJDb2xvcigwLjUsIDAuNSwgMC41LCAxKTtcclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgbGV0IGNlbnRlciA9IG5ldyBnbFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgbGV0IHVwID0gbmV3IGdsVmVjMyhbMCwgMSwgMF0pO1xyXG4gICAgICBsZXQgbWF0ID0gZ2xNYXQ0Lm1ha2VMb29rQXQodGhpcy51TGlnaHREaXJlY3Rpb24sIGNlbnRlciwgdXApO1xyXG4gICAgICBtYXQuc2V0KDAsIDMsIDApO1xyXG4gICAgICBtYXQuc2V0KDEsIDMsIDApO1xyXG4gICAgICBtYXQuc2V0KDIsIDMsIDApO1xyXG4gICAgICB0aGlzLnNoYWRvd1ZpZXcgPSBtYXQ7XHJcblxyXG4gICAgICBsZXQgdW5pID0gbmV3IGdsVW5pZm9ybSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlU2hhZG93cycsIDAsIHRydWUpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy5zaGFkb3dWaWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgncHJvamVjdGlvbicsIHRoaXMucHJvamVjdGlvbi50cmFuc3Bvc2UoKSk7XHJcblxyXG4gICAgICB0aGlzLm9iai5kcmF3KCk7XHJcblxyXG4gICAgICAvLyAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVuZGVyVG9TY3JlZW4oKTogdm9pZCB7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBkZXB0aCBidWZmZXIgZm9yIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgbGV0IHRyID0gbmV3IFRleHR1cmVSZW5kZXJlcigpO1xyXG4gICAgICB0ci5yZW5kZXIodGhpcy5zaGFkb3dNYXAuZGVwdGhUZXh0dXJlKTtcclxuICAgICAgKi9cclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuc2hhZG93TWFwLmRlcHRoVGV4dHVyZSlcclxuXHJcbiAgICAgIGdsLmNsZWFyQ29sb3IoMC41LCAwLjUsIDAuNSwgMSk7XHJcbiAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgIHRoaXMudmlldyA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdzaGFkb3dWaWV3JywgdGhpcy5zaGFkb3dWaWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgncHJvamVjdGlvbicsIHRoaXMucHJvamVjdGlvbi50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VTaGFkb3dzJywgMSwgdHJ1ZSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodEludGVuc2l0eScsIHRoaXMubGlnaHRJbnRlbnNpdHkpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIHRoaXMuYW1iaWVudEludGVuc2l0eSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VUaHJlc2hvbGQxJywgdGhpcy50aHJlc2hvbGQxIC8gOTApO1xyXG4gICAgICB1bmkuc2V0KCd1VGhyZXNob2xkMicsIHRoaXMudGhyZXNob2xkMiAvIDkwKTtcclxuICAgICAgdW5pLnNldCgndUxpZ2h0TGlnaHQnLCB0aGlzLnVMaWdodExpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndU1pZExpZ2h0JywgdGhpcy51TWlkTGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1RGFya0xpZ2h0JywgdGhpcy51RGFya0xpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCB0aGlzLnVMaWdodERpcmVjdGlvbik7XHJcbiAgICAgIHVuaS5zZXQoJ3VDb2xvcicsIHRoaXMudUNvbG9yKTtcclxuXHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gICAgICB0aGlzLnZpZXcuc2NhbGUodGhpcy5taW5pU2l6ZSk7XHJcbiAgICAgIHRoaXMudmlldy50cmFuc2xhdGUobmV3IGdsVmVjMyhbMSAtIHRoaXMubWluaVNpemUsIDEgLSB0aGlzLm1pbmlTaXplLCAwXSkpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy52aWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMCA6IDEsIHRydWUpO1xyXG4gICAgICB0aGlzLm9iai5kcmF3KCk7XHJcblxyXG4gICAgICB0aGlzLmRyYXdCYWxsKCk7XHJcblxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBkcmF3QmFsbCgpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIC8vIHN0b3AgdXNpbmcgdGhlIHNoYWRvd21hcFxyXG4gICAgICB1bmkuc2V0KCd1VXNlU2hhZG93cycsIDAsIHRydWUpO1xyXG5cclxuICAgICAgdGhpcy52aWV3ID0gbmV3IGdsTWF0NCgpO1xyXG4gICAgICB0aGlzLnZpZXcuc2NhbGUodGhpcy5taW5pU2l6ZSk7XHJcbiAgICAgIHRoaXMudmlldy50cmFuc2xhdGUobmV3IGdsVmVjMyhbLSgxIC0gdGhpcy5taW5pU2l6ZSksIDEgLSB0aGlzLm1pbmlTaXplLCAwXSkpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy52aWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICB0aGlzLmJhbGwuZHJhdygpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IGdsVmVjMyhbMSwgLTAuNSwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIDAsIHRydWUpO1xyXG5cclxuICAgICAgLy8gYmFjayBvdXQgYW5nbGVzIGFzIGlmIGxvb2tpbmcgZG93biB0aGUgei1heGlzXHJcbiAgICAgIGxldCB4ID0gdGhpcy51TGlnaHREaXJlY3Rpb24ueDtcclxuICAgICAgbGV0IHkgPSB0aGlzLnVMaWdodERpcmVjdGlvbi55O1xyXG4gICAgICBsZXQgeiA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLno7XHJcblxyXG4gICAgICAvLyBzdGFydCBieSBsb29raW5nIGRvd24gZnJvbSB0aGUgWiBkaXJlY3Rpb25cclxuICAgICAgbGV0IHJhZGl1cyA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xyXG4gICAgICBsZXQgZWxldmF0aW9uQW5nbGUgPSBNYXRoLmFjb3MoeiAvIHJhZGl1cyk7XHJcbiAgICAgIGxldCByb3RhdGlvbkFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KTtcclxuXHJcbiAgICAgIC8vIGZpcnN0IHJlc2V0IHRoaW5ncyBzbyB0aGF0IHdlJ3JlIGxvb2tpbmcgZG93biB0aGUgei1heGlzXHJcbiAgICAgIHRoaXMuYXJyb3cuY2xlYXJUcmFuc2Zvcm1zKCk7XHJcbiAgICAgIHRoaXMuYXJyb3cudHJhbnNsYXRlKG5ldyBnbFZlYzMoWzAuMCwgMC41NSwgMC4wXSkpO1xyXG4gICAgICB0aGlzLmFycm93LnJvdFgodG9SYWQoOTApKTtcclxuXHJcbiAgICAgIC8vIHJvdGF0ZSB0byBtYXRjaCB0aGUgbGlnaHQgc291cmNlXHJcbiAgICAgIHRoaXMuYXJyb3cucm90WSgtZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICB0aGlzLmFycm93LnJvdFooLXJvdGF0aW9uQW5nbGUpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUNvbG9yJywgbmV3IGdsQ29sb3IoWzEuMCwgMC45LCAwLjddKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbGljayh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgaWYgKHggPiAoMSAtIHRoaXMubWluaVNpemUpICYmIHkgPiAoMSAtIHRoaXMubWluaVNpemUpKSB7XHJcbiAgICAgICAgIHRoaXMudVVzZVRocmVzaG9sZHMgPSAhdGhpcy51VXNlVGhyZXNob2xkcztcclxuICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcHRpbWl6ZShub3JtYWxUeXBlOiBOb3JtYWxUeXBlKSB7XHJcbiAgICAgIHRoaXMub2JqLm9wdGltaXplKG5vcm1hbFR5cGUpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICB9XHJcbn0iLCIvKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgbG9nZ2luZyB0aW1pbmcgbWVzc2FnZXMgZm9yIHByb2ZpbGUgY29kZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVyIHtcclxuICAgLy8gdGhlIGxhc3QgdGltZSBzdGFtcFxyXG4gICBwcml2YXRlIHQgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpIHtcclxuICAgICAgcmV0dXJuICh3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnQpO1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgKiBQcmludHMgYSBtZXNzYWdlIHRvIGNvbnNvbGUgb2YgdGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgbGFzdCBtYXJrXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIHByaW50IHdpdGggdGhlIHRpbWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnICsgJyAnICsgdGhpcy5lbGFwc2VkTXMudG9GaXhlZCgxKSArICcgbXMnKTtcclxuICAgICAgdGhpcy5tYXJrKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGRhdGVzIHRoZSB0aW1lc3RhbXAgdG8gbm93XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFyaygpIHtcclxuICAgICAgdGhpcy50ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhZG93TWFwIHtcclxuXHJcbiAgIHB1YmxpYyBmcmFtZUJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlcjtcclxuICAgcHVibGljIGNvbG9yVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xyXG4gICBwdWJsaWMgZGVwdGhUZXh0dXJlOiBXZWJHTFRleHR1cmU7XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlIGEgZnJhbWUgYnVmZmVyIGZvciByZW5kZXJpbmcgaW50byB0ZXh0dXJlIG9iamVjdHMuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIChpbiBwaXhlbHMpIG9mIHRoZSByZW5kZXJpbmcgKG11c3QgYmUgcG93ZXIgb2YgMilcclxuICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IChpbiBwaXhlbHMpIG9mIHRoZSByZW5kZXJpbmcgKG11c3QgYmUgcG93ZXIgb2YgMilcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgbGV0IGRlcHRoX3RleHR1cmVfZXh0ZW5zaW9uID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZXB0aF90ZXh0dXJlJyk7XHJcbiAgICAgIGlmICghZGVwdGhfdGV4dHVyZV9leHRlbnNpb24pIHtcclxuICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgV2ViR0wgcHJvZ3JhbSByZXF1aXJlcyB0aGUgdXNlIG9mIHRoZSAnICtcclxuICAgICAgICAgICAgJ1dFQkdMX2RlcHRoX3RleHR1cmUgZXh0ZW5zaW9uLiBUaGlzIGV4dGVuc2lvbiBpcyBub3Qgc3VwcG9ydGVkICcgK1xyXG4gICAgICAgICAgICAnYnkgeW91ciBicm93c2VyLCBzbyB0aGlzIFdFQkdMIHByb2dyYW0gaXMgdGVybWluYXRpbmcuJyk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgYSBmcmFtZSBidWZmZXIgb2JqZWN0XHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgLy8gU3RlcCAyOiBDcmVhdGUgYW5kIGluaXRpYWxpemUgYSB0ZXh0dXJlIGJ1ZmZlciB0byBob2xkIHRoZSBjb2xvcnMuXHJcbiAgICAgIHRoaXMuY29sb3JUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCxcclxuICAgICAgICAgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cclxuICAgICAgLy8gU3RlcCAzOiBDcmVhdGUgYW5kIGluaXRpYWxpemUgYSB0ZXh0dXJlIGJ1ZmZlciB0byBob2xkIHRoZSBkZXB0aCB2YWx1ZXMuXHJcbiAgICAgIC8vIE5vdGU6IHRoZSBXRUJHTF9kZXB0aF90ZXh0dXJlIGV4dGVuc2lvbiBpcyByZXF1aXJlZCBmb3IgdGhpcyB0byB3b3JrXHJcbiAgICAgIC8vICAgICAgIGFuZCBmb3IgdGhlIGdsLkRFUFRIX0NPTVBPTkVOVCB0ZXh0dXJlIGZvcm1hdCB0byBiZSBzdXBwb3J0ZWQuXHJcbiAgICAgIHRoaXMuZGVwdGhUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmRlcHRoVGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuREVQVEhfQ09NUE9ORU5ULCB3aWR0aCwgaGVpZ2h0LCAwLFxyXG4gICAgICAgICBnbC5ERVBUSF9DT01QT05FTlQsIGdsLlVOU0lHTkVEX0lOVCwgbnVsbCk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cclxuICAgICAgLy8gU3RlcCA0OiBBdHRhY2ggdGhlIHNwZWNpZmljIGJ1ZmZlcnMgdG8gdGhlIGZyYW1lIGJ1ZmZlci5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSwgMCk7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5ERVBUSF9BVFRBQ0hNRU5ULCBnbC5URVhUVVJFXzJELCB0aGlzLmRlcHRoVGV4dHVyZSwgMCk7XHJcblxyXG4gICAgICAvLyBTdGVwIDU6IFZlcmlmeSB0aGF0IHRoZSBmcmFtZSBidWZmZXIgaXMgdmFsaWQuXHJcbiAgICAgIGxldCBzdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY3JlYXRlZCBmcmFtZSBidWZmZXIgaXMgaW52YWxpZDogXCIgKyBzdGF0dXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVuYmluZCB0aGVzZSBuZXcgb2JqZWN0cywgd2hpY2ggbWFrZXMgdGhlIGRlZmF1bHQgZnJhbWUgYnVmZmVyIHRoZVxyXG4gICAgICAvLyB0YXJnZXQgZm9yIHJlbmRlcmluZy5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSBcIi4vQ29sb3JSYW5nZVwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3JXaXRoQWxwaGEgfSBmcm9tIFwiLi9odG1sQ29sb3JXaXRoQWxwaGFcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGEgcGFzc2VkIHRvIHRoZSBTbGlkZXIgY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlclNldHVwIHtcclxuICAgaWQ6IHN0cmluZyxcclxuICAgbGFiZWw6IHN0cmluZyxcclxuICAgbWluOiBudW1iZXIsXHJcbiAgIG1heDogbnVtYmVyLFxyXG4gICB2YWx1ZTogbnVtYmVyLFxyXG4gICBjb2xvcnM/OiBodG1sQ29sb3JbXSxcclxuICAgb25pbnB1dD86ICgpID0+IHZvaWQsXHJcbiAgIGdldFRleHQ/OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHNsaWRlciBjb21wb3NlZCBvZiBhIGxhYmVsLCBpbnB1dCByYW5nZSwgY29sb3Igc3BhbiBhbmQgdmFsdWUgc3BhblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsaWRlciB7XHJcblxyXG4gICBwcml2YXRlIF9yYW5nZTogSFRNTElucHV0RWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX3ZhbHVlU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF9jb2xvcnM6IENvbG9yUmFuZ2U7XHJcbiAgIHByaXZhdGUgX2dldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCBodG1sIG9iamVjdC5cclxuICAgICogQHBhcmFtIHNldHVwIFRoZSBzZXR1cCBkYXRhIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIHNldHVwOiBJU2xpZGVyU2V0dXApIHtcclxuXHJcbiAgICAgIHRoaXMuX2dldFRleHQgPSBzZXR1cC5nZXRUZXh0O1xyXG5cclxuICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgbGFiZWwuaWQgPSBzZXR1cC5pZCArICdMYWJlbCc7XHJcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdTbGlkZXJMYWJlbCc7XHJcbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHNldHVwLmxhYmVsO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgICAgdGhpcy5fcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICB0aGlzLl9yYW5nZS50eXBlID0gJ3JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuaWQgPSBzZXR1cC5pZCArICdSYW5nZSc7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmNsYXNzTmFtZSA9ICdTbGlkZXJSYW5nZSc7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1pbiA9IHNldHVwLm1pbi50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS5tYXggPSBzZXR1cC5tYXgudG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5fcmFuZ2UudmFsdWUgPSBzZXR1cC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgdGhpcy51cGRhdGVTcGFuQ29sb3IoKTtcclxuICAgICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpXHJcbiAgICAgIH0pO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5fcmFuZ2UpO1xyXG5cclxuICAgICAgaWYgKHNldHVwLmNvbG9ycykge1xyXG4gICAgICAgICB0aGlzLl9jb2xvclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3Bhbi5pZCA9IHNldHVwLmlkICsgJ0NvbG9yU3Bhbic7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3Bhbi5jbGFzc05hbWUgPSAnU2xpZGVyQ29sb3JTcGFuJztcclxuICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX2NvbG9yU3Bhbik7XHJcblxyXG4gICAgICAgICAvLyBzZXQgdGhlIGluaXRpYWwgY29sb3IuXHJcbiAgICAgICAgIHRoaXMuY29sb3JzID0gc2V0dXAuY29sb3JzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl92YWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pZCA9IHNldHVwLmlkICsgJ1ZhbHVlU3Bhbic7XHJcbiAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5jbGFzc05hbWUgPSAnU2xpZGVyVmFsdWVTcGFuJztcclxuICAgICAgLy8gICAgICB0aGlzLl92YWx1ZVNwYW4uaW5uZXJUZXh0ID0gc2V0dXAudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX3ZhbHVlU3Bhbik7XHJcblxyXG4gICAgICAvLyBzZXQgdGhlIGluaXRpYWwgc3BhbiB0ZXh0XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKTtcclxuXHJcbiAgICAgIHRoaXMuX3JhbmdlLm9uaW5wdXQgPSBzZXR1cC5vbmlucHV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgc3BhbiBjb2xvciB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSB1cGRhdGVTcGFuQ29sb3IoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgbGV0IHZhbCA9ICh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xyXG4gICAgICAgICBsZXQgY29sb3IgPSBodG1sQ29sb3IuZnJvbUNvbG9yKHRoaXMuX2NvbG9ycy5nZXQodmFsKSk7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci50b0hleCgpXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAqIFNldHMgdGhlIHNwYW4gY29sb3IgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvci5cclxuICovXHJcbiAgIHByaXZhdGUgdXBkYXRlU3BhblRleHQoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLl9nZXRUZXh0KSB7XHJcbiAgICAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pbm5lclRleHQgPSB0aGlzLl9nZXRUZXh0KHRoaXMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBodG1sIHJhbmdlIG9iamVjdFxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGh0bWwgcmFuZ2Ugb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCByYW5nZSgpOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgY3VycmVudCBzbGlkZXIgdmFsdWVcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2UudmFsdWVBc051bWJlcjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgKGFuZCBhc3NvY2lhdGVkIGNvbnRlbnQpXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIHRoZSBkZXNpcmVkIHNsaWRlciB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB2YWx1ZSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyID0gdmFsO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNwYW5Db2xvcigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtaW4gc2xpZGVyIHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIG1pbiBzbGlkZXIgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IG1pbigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLl9yYW5nZS5taW4pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWF4IHNsaWRlciB2YWx1ZS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIG1heCBzbGlkZXIgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLl9yYW5nZS5tYXgpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgY29sb3IgZm9yIHRoZSBzbGlkZXJcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgY29sb3JzKGNvbG9yczogaHRtbENvbG9yW10pIHtcclxuXHJcbiAgICAgIC8vIHN0b3JlIHRoZSBjb2xvcnNcclxuICAgICAgdGhpcy5fY29sb3JzID0gbmV3IENvbG9yUmFuZ2UoY29sb3JzKTtcclxuXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSBncmFkaWVudCBzdHlsZSBmb3IgdGhlIHJhbmdlIG9iamVjdFxyXG4gICAgICBsZXQgZ3JhZGllbnRTdHIgPSAnOTBkZWcnO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBncmFkaWVudFN0ciArPSAnLCAnICsgY29sb3JzW2ldLnRvQ3NzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fcmFuZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQoJyArIGdyYWRpZW50U3RyICsgJyknO1xyXG5cclxuICAgICAgLy8gdXBkYXRlIHRoZSBzcGFuIGNvbG9yIHRvb1xyXG4gICAgICB0aGlzLnVwZGF0ZVNwYW5Db2xvcigpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgY3VycmVudCBjb2xvciBhcyBhbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY3VycmVudCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgaHRtbENvbG9yKCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGlmICh0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgbGV0IHZhbCA9ICh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JzLmdldCh2YWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gaHRtbENvbG9yV2l0aEFscGhhLnRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGEgZ2xDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgY3VycmVudCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZ2xDb2xvcigpOiBnbENvbG9yIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCkudG9HbENvbG9yKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsIi8qKlxyXG4gKiBTcGhlcmljYWwgY29vcmRpbmF0ZXMgYmFzZWQgb24gdGhlIFdlYkdMIHZpZXdpbmcgc3lzdGVtOiB4PWxlZnQtcmlnaHQsIHk9dXAtZG93biwgej1uZWFyLWZhclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNwaGVyaWNhbENvb3JkIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSBkaXN0YW5jZSBmcm9tIHRoZSBvcmlnaW4gdG8gdGhlIHBvaW50XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcmFkaXVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBlbGV2YXRpb24gZnJvbSB0aGUgZmxvb3IgdG8gdGhlIHBvaW50LiAwIGFuZCAxODAgYXJlIG9uIHRoZVxyXG4gICAgKiBmbG9vci4gOTAgcG9pbnRzIHVwLlxyXG4gICAgKi9cclxuICAgcHVibGljIGVsZXZhdGlvbkFuZ2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBhbmdsZSwgd2hlbiBsb29raW5nIGRvd24gZnJvbSB0aGUgdG9wLCB0byB0aGUgcG9pbnQuIDAgcG9pbnRzIHJpZ2h0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHJvdGF0aW9uQW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHJhZGl1c1xyXG4gICAgKiBAcGFyYW0gZWxldmF0aW9uQW5nbGUgXHJcbiAgICAqIEBwYXJhbSByb3RhdGlvbkFuZ2xlIFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBlbGV2YXRpb25BbmdsZTogbnVtYmVyLCByb3RhdGlvbkFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgIHRoaXMuZWxldmF0aW9uQW5nbGUgPSBlbGV2YXRpb25BbmdsZTtcclxuICAgICAgdGhpcy5yb3RhdGlvbkFuZ2xlID0gcm90YXRpb25BbmdsZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzcGhlcmljYWwgY29vcmRpbmF0ZSBmcm9tIGEgY2FydGVzaWFuIHBvaW50XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcG9zIFRoZSBjYXJ0ZXNpYW4gcG9pbnQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBzcGhlcmljYWwgY29vcmRpbmF0ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVhZWihwb3M6IG51bWJlcltdKTogU3BoZXJpY2FsQ29vcmQge1xyXG5cclxuICAgICAgbGV0IHggPSBwb3NbMF07XHJcbiAgICAgIGxldCB5ID0gcG9zWzFdO1xyXG4gICAgICBsZXQgeiA9IHBvc1syXTtcclxuXHJcbiAgICAgIGxldCByYWRpdXMgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcclxuICAgICAgbGV0IHJvdGF0aW9uQW5nbGUgPSAoMTgwIC8gTWF0aC5QSSkgKiBNYXRoLmF0YW4yKHosIHgpO1xyXG4gICAgICBsZXQgZWxldmF0aW9uQW5nbGUgPSAoMTgwIC8gTWF0aC5QSSkgKiBNYXRoLmFzaW4oeSAvIHJhZGl1cyk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFNwaGVyaWNhbENvb3JkKHJhZGl1cywgZWxldmF0aW9uQW5nbGUsIHJvdGF0aW9uQW5nbGUpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBzcGhlcmljYWwgY29vcmRpbmF0ZSB0byBhIGNhcnRlc2lhbiBjb29yZGluYXRlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGNhcnRlc2lhbiBjb29yZGluYXRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvWFlaKCk6IG51bWJlcltdIHtcclxuXHJcbiAgICAgIGxldCBmbG9vclJhZGl1cyA9IHRoaXMucmFkaXVzICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogdGhpcy5lbGV2YXRpb25BbmdsZSk7XHJcbiAgICAgIGxldCB4ID0gZmxvb3JSYWRpdXMgKiBNYXRoLmNvcygoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLnJvdGF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeSA9IHRoaXMucmFkaXVzICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogdGhpcy5lbGV2YXRpb25BbmdsZSk7XHJcbiAgICAgIGxldCB6ID0gZmxvb3JSYWRpdXMgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLnJvdGF0aW9uQW5nbGUpO1xyXG5cclxuICAgICAgcmV0dXJuIFt4LCB5LCB6XTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSAzRCBhcnJvdyB1c2luZyB0cmlhbmdsZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZUFycm93IGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgY29uc3QgTlVNX1NURVBTID0gMzA7XHJcbiAgICAgIGNvbnN0IFRJUCA9IG5ldyBnbFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgY29uc3QgVE9UQUxfTEVOR1RIID0gMC40O1xyXG4gICAgICBjb25zdCBBUlJPV19SQURJVVMgPSAwLjE1O1xyXG4gICAgICBjb25zdCBBUlJPV19MRU5HVEggPSAxLjUgKiBBUlJPV19SQURJVVM7XHJcbiAgICAgIGNvbnN0IFNIQUZUX1JBRElVUyA9IDAuNSAqIEFSUk9XX1JBRElVUztcclxuXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSBhcnJvdyBoZWFkXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChUSVApO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbMCwgQVJST1dfTEVOR1RILCAwXSkpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gQVJST1dfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBBUlJPV19MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gQVJST1dfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGlUaXAgPSAwO1xyXG4gICAgICBsZXQgaUJhc2UgPSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpMSA9IDIgKyBpO1xyXG4gICAgICAgICBsZXQgaTIgPSAoaSA9PSBOVU1fU1RFUFMgLSAxKSA/IDAgOiBpMSArIDE7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGlUaXAsIGkyLCBpMSwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGlCYXNlLCBpMSwgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgYXJyb3cgc2hhZnRcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoWzAsIFRPVEFMX0xFTkdUSCwgMF0pKTtcclxuICAgICAgbGV0IGlFbmQgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IHggPSBTSEFGVF9SQURJVVMgKiBNYXRoLnNpbihpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeSA9IEFSUk9XX0xFTkdUSDtcclxuICAgICAgICAgbGV0IHogPSBTSEFGVF9SQURJVVMgKiBNYXRoLmNvcyhpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbeCwgeSwgel0pKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gU0hBRlRfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBUT1RBTF9MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gU0hBRlRfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGlTdGFydCA9IGlFbmQgKyAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpMSA9IGlTdGFydCArIGk7XHJcbiAgICAgICAgIGxldCBpMiA9IChpID09IE5VTV9TVEVQUyAtIDEpID8gaVN0YXJ0IDogaTEgKyAxO1xyXG4gICAgICAgICBsZXQgaTMgPSBpMSArIE5VTV9TVEVQUztcclxuICAgICAgICAgbGV0IGk0ID0gaTIgKyBOVU1fU1RFUFM7XHJcblxyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTIsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTQsIGkzLCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkzLCBpNCwgaUVuZCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFZvbHVtZSB9IGZyb20gXCIuL1ZvbHVtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlQ3ViZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVUcmlhbmdsZXMoc2l6ZSwgY2VudGVyKTtcclxuXHJcbiAgICAgIHRoaXMudm9sdW1lcy5wdXNoKG5ldyBWb2x1bWUoKSk7XHJcbiAgICAgIHRoaXMudm9sdW1lc1swXS5ib3hNaW4gPSB0aGlzLmJveE1pbi5jbG9uZSgpO1xyXG4gICAgICB0aGlzLnZvbHVtZXNbMF0uYm94TWF4ID0gdGhpcy5ib3hNYXguY2xvbmUoKTtcclxuICAgICAgdGhpcy52b2x1bWVzWzBdLnRyaWFuZ2xlcyA9IHRoaXMudHJpYW5nbGVzO1xyXG4gICB9XHJcblxyXG4gICBjcmVhdGVGYWNlKGkxOiBudW1iZXIsIGkyOiBudW1iZXIsIGkzOiBudW1iZXIsIGk0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMiwgaTMsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMiwgaTQsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgfVxyXG5cclxuICAgY3JlYXRlVHJpYW5nbGVzKHNpemU6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSAtIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54IC0gc2l6ZSAvIDIsIGNlbnRlci55ICsgc2l6ZSAvIDIsIGNlbnRlci56IC0gc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiArIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCArIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgwLCAxLCAyLCAzKTtcclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDQsIDYsIDUsIDcpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDAsIDQsIDEsIDUpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMiwgMywgNiwgNyk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMCwgMiwgNCwgNik7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgxLCA1LCAzLCA3KTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBWb2x1bWUgfSBmcm9tIFwiLi9Wb2x1bWVcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE5vcm1hbFR5cGUge1xyXG4gICBTbW9vdGgsXHJcbiAgIEZsYXRcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gY29tcHV0ZSBub3JtYWxzIGZvciB2ZXJ0aWNlcyB0aGF0IGpvaW4gbXVsdGlwbGUgZmFjZXNcclxuICovXHJcbmNsYXNzIE11bHRpTm9ybVZlcnRleCB7XHJcbiAgIHByaXZhdGUgbm9ybWFsczogZ2xWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBub3JtYWwgYnkgYXZlcmFnaW5nIGFsbCB0aGUgaW5kaXZpZHVhbCBub3JtYWxzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmVydGV4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IG5vcm1hbCgpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgbiA9IG5ldyBnbFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcmVwcmVzZW50aW5nIGFuIG9iamVjdCBmcm9tIGEgYnVuY2ggb2YgdHJpYW5nbGVzLiBUaGUgY2xhc3NcclxuICogZWZmaWNpZW50bHkgbWFuYWdlcyB0aGUgdHJpYW5nbGVzIGJ5IHN0b3JpbmcgdGhlbSBpbiB2b2x1bWVzIGFuZCBieVxyXG4gKiBwYXNzaW5nIHRoZW0gdG8gV2ViR0wgdXNpbmcgVW5pZm9ybSBCdWZmZXJzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmoge1xyXG4gICBwdWJsaWMgdmVydGljZXM6IGdsVmVjM1tdID0gW107XHJcbiAgIHB1YmxpYyBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICBwdWJsaWMgdHJpYW5nbGVzOiBJbmRleGVkVHJpYW5nbGVbXSA9IFtdO1xyXG4gICBwdWJsaWMgYm94TWluID0gbmV3IGdsVmVjMyhbTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgYm94TWF4ID0gbmV3IGdsVmVjMyhbLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRV0pO1xyXG4gICBwdWJsaWMgdm9sdW1lczogVm9sdW1lW10gPSBbXTtcclxuXHJcbiAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3hNYXgueSAtIHRoaXMuYm94TWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnogLSB0aGlzLmJveE1pbi56O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi54ICsgdGhpcy5ib3hNYXgueCkgLyAyLFxyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueSArIHRoaXMuYm94TWF4LnkpIC8gMixcclxuICAgICAgICAgKHRoaXMuYm94TWluLnogKyB0aGlzLmJveE1heC56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgcHVzaCh0cmk6IEluZGV4ZWRUcmlhbmdsZSkge1xyXG4gICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKHRyaSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnggPSBNYXRoLm1pbih0aGlzLmJveE1pbi54LCB0cmkubWluWCk7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSBNYXRoLm1pbih0aGlzLmJveE1pbi55LCB0cmkubWluWSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSBNYXRoLm1pbih0aGlzLmJveE1pbi56LCB0cmkubWluWik7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0cmkubWF4WCk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSBNYXRoLm1heCh0aGlzLmJveE1heC55LCB0cmkubWF4WSk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSBNYXRoLm1heCh0aGlzLmJveE1heC56LCB0cmkubWF4Wik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTY2FsZXMgdGhlIG9iamVjdCB0byB0aGUgc3BlY2lmaWVkIHNpemUgYW5kIGNlbnRlcnMgaXQgYWJvdXQgKDAsMCwwKVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNpemUgVGhlIG1heCBzaXplIGZvciB0aGUgd2lkdGgsIGhlaWdodCwgYW5kIGRlcHRoXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXV0b0NlbnRlcihzaXplOiBudW1iZXIpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCB0cmFucyA9IG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnggKyB0aGlzLmJveE1pbi54KSAvIDIsXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueSArIHRoaXMuYm94TWluLnkpIC8gMixcclxuICAgICAgICAgLSh0aGlzLmJveE1heC56ICsgdGhpcy5ib3hNaW4ueikgLyAyLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCBzY2FsZSA9IHNpemUgLyBNYXRoLm1heCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5kZXB0aCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG5cclxuICAgICAgICAgdi54ID0gKHYueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYueSA9ICh2LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LnogPSAodi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib3hNaW4ueCA9ICh0aGlzLmJveE1pbi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9ICh0aGlzLmJveE1pbi55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9ICh0aGlzLmJveE1pbi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9ICh0aGlzLmJveE1heC54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9ICh0aGlzLmJveE1heC55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9ICh0aGlzLmJveE1heC56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52b2x1bWVzW2ldO1xyXG4gICAgICAgICB2LmJveE1pbi54ID0gKHYuYm94TWluLnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1pbi55ID0gKHYuYm94TWluLnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1pbi56ID0gKHYuYm94TWluLnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC54ID0gKHYuYm94TWF4LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC55ID0gKHYuYm94TWF4LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LmJveE1heC56ID0gKHYuYm94TWF4LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLmxvZygnYXV0b0FkanVzdCgpJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTaGlmdCB0aGUgb2JqZWN0IGluIHNwYWNlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG9mZnNldCBUaGUgYW1vdW50IHRvIHNoaWZ0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG5cclxuICAgICAgICAgdi54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICB2LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgIHYueiArPSBvZmZzZXQuejtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib3hNaW4ueCArPSBvZmZzZXQueDtcclxuICAgICAgdGhpcy5ib3hNaW4ueSArPSBvZmZzZXQueTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiArPSBvZmZzZXQuejtcclxuICAgICAgdGhpcy5ib3hNYXgueCArPSBvZmZzZXQueDtcclxuICAgICAgdGhpcy5ib3hNYXgueSArPSBvZmZzZXQueTtcclxuICAgICAgdGhpcy5ib3hNYXgueiArPSBvZmZzZXQuejtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52b2x1bWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2b2wgPSB0aGlzLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdm9sLmJveE1pbi55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2b2wuYm94TWluLnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdm9sLmJveE1heC55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEJyZWFrcyB0aGUgb2JqZWN0IGludG8gZXZlbmx5IHNwYWNlZCB2b2x1bWVzLiBUaGUgbnVtYmVyIG9mIHZvbHVtZXMgaXMgYXV0b21hdGljYWxseVxyXG4gICAgKiBkZXRlcm1pbmVkIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGJyZWFrSW50b1ZvbHVtZXMoKSB7XHJcbiAgICAgIGxldCBudW1TdGVwcztcclxuICAgICAgaWYgKHRoaXMudHJpYW5nbGVzLmxlbmd0aCA8IDQwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyaWFuZ2xlcy5sZW5ndGggPCAxNTAwKSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAzO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudm9sdW1lcyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KG51bVN0ZXBzLCAzKTsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudm9sdW1lcy5wdXNoKG5ldyBWb2x1bWUoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHQgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWCAtIHRoaXMuYm94TWluLngpIC8gKHRoaXMuYm94TWF4LnggLSB0aGlzLmJveE1pbi54KSk7XHJcbiAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblkgLSB0aGlzLmJveE1pbi55KSAvICh0aGlzLmJveE1heC55IC0gdGhpcy5ib3hNaW4ueSkpO1xyXG4gICAgICAgICBsZXQgeiA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5aIC0gdGhpcy5ib3hNaW4ueikgLyAodGhpcy5ib3hNYXgueiAtIHRoaXMuYm94TWluLnopKTtcclxuICAgICAgICAgeCA9IGNsYW1wKHgsIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHkgPSBjbGFtcCh5LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB6ID0gY2xhbXAoeiwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgbGV0IGluZGV4ID0geCArIHkgKiBudW1TdGVwcyArIHogKiBudW1TdGVwcyAqIG51bVN0ZXBzO1xyXG4gICAgICAgICB0aGlzLnZvbHVtZXNbaW5kZXhdLnB1c2godCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWxzKHR5cGU6IE5vcm1hbFR5cGUpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGxldCBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICAgICBsZXQgbXVsdGlOb3JtVmVydGljZXM6IE11bHRpTm9ybVZlcnRleFtdID0gW107XHJcbiAgICAgIGlmICh0eXBlID09PSBOb3JtYWxUeXBlLlNtb290aCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXMucHVzaChuZXcgTXVsdGlOb3JtVmVydGV4KCkpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgbm9ybWFscyB3aXRoIGVhY2ggdmVydGV4IC0gd2UnbGwgbGF0ZXIgYXZlcmFnZSB0aGVzZVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgbGV0IG4gPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYwXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYxXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaVYyXS5wdXNoKG4pO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbm9ybWFscyBhcnJheVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11bHRpTm9ybVZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChtdWx0aU5vcm1WZXJ0aWNlc1tpXS5ub3JtYWwpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyB1cGRhdGUgdGhlIHRyaWFuZ2xlc1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgdHJpLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICAgICB0cmkuaU4wID0gdHJpLmlWMDtcclxuICAgICAgICAgICAgdHJpLmlOMSA9IHRyaS5pVjE7XHJcbiAgICAgICAgICAgIHRyaS5pTjIgPSB0cmkuaVYyO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2godHJpLmNvbXB1dGVOb3JtYWwoKSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG5vcm1hbHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRyaS5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgICAgdHJpLmlOMCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0cmkuaU4xID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRyaS5pTjIgPSBpbmRleDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcblxyXG4gICAgICBwLmxvZygnY29tcHV0ZU5vcm1hbHMnKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgaW4gdGhlIGZvciAuT0JKIGZpbGUgZm9ybWF0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9PYmpTdHJpbmcoKSB7XHJcblxyXG4gICAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuICAgICAgICAgc3RyICs9ICd2ICcgKyB2LnggKyAnICcgKyB2LnkgKyAnICcgKyB2LnogKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9ybWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgbiA9IHRoaXMubm9ybWFsc1tpXTtcclxuICAgICAgICAgc3RyICs9ICd2biAnICsgbi54ICsgJyAnICsgbi55ICsgJyAnICsgbi56ICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdCA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICBzdHIgKz0gJ2YgJyArXHJcbiAgICAgICAgICAgICh0LmlWMCArIDEpICsgJy8vJyArICh0LmlOMCArIDEpICsgJyAnICtcclxuICAgICAgICAgICAgKHQuaVYxICsgMSkgKyAnLy8nICsgKHQuaU4xICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pVjIgKyAxKSArICcvLycgKyAodC5pTjIgKyAxKSArICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgbGV0IG1zZyA9ICdPcHRpbWl6ZWQgLk9CSiBjb250ZW50IGNvcGllZCB0byBjbGlwYm9hcmRcXG5cXG4nO1xyXG4gICAgICBtc2cgKz0gJ051bSBUcmlhbmdsZXM6ICcgKyB0aGlzLnRyaWFuZ2xlcy5sZW5ndGggKyAnXFxuJztcclxuXHJcbiAgICAgIGxldCB2ZXJ0ZXhUb0luZGV4TWFwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgbGV0IGluZGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCBnZW5lcmF0ZSBhIHVuaXF1ZSBzZXQgb2YgdmVydGljZXNcclxuICAgICAgbGV0IHVuaXF1ZVZlcnRpY2VzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgIGxldCBvbGRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICBsZXQga2V5ID0gdGhpcy52ZXJ0aWNlc1tpXS50b1N0cmluZyg0LCAnICcpO1xyXG4gICAgICAgICBsZXQgb2xkSW5kZXggPSBpICsgMTtcclxuICAgICAgICAgbGV0IG5ld0luZGV4O1xyXG4gICAgICAgICBpZiAodmVydGV4VG9JbmRleE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAvLyBqdXN0IG1hcCB0aGUgb2xkIGluZGV4IHRvIHRoZSBleGlzdGluZyBlbnRyeVxyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHZlcnRleFRvSW5kZXhNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBlbnRyeVxyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIHZlcnRleFRvSW5kZXhNYXAuc2V0KGtleSwgbmV3SW5kZXgpO1xyXG4gICAgICAgICAgICB1bmlxdWVWZXJ0aWNlcy5wdXNoKG9sZFZlcnRleCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gc3RvcmUgdGhlIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgIGluZGV4VG9JbmRleE1hcC5zZXQob2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG9sZFNpemUgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICAgICAgbGV0IG5ld1NpemUgPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICAgIG1zZyArPSAnTnVtIFZlcnRpY2VzOiAnICsgb2xkU2l6ZSArICcgdG8gJyArIG5ld1NpemUgKyAnLCAnICsgKDEwMCAqIG5ld1NpemUgLyBvbGRTaXplKS50b0ZpeGVkKCkgKyAnICVcXG4nO1xyXG5cclxuICAgICAgLy8gcmVzZXQgYWxsIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLnZlcnRpY2VzID0gdW5pcXVlVmVydGljZXM7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICB0cmkudmVydGljZXMgPSB1bmlxdWVWZXJ0aWNlcztcclxuICAgICAgICAgdHJpLmlWMCA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMCArIDEpIC0gMTtcclxuICAgICAgICAgdHJpLmlWMSA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMSArIDEpIC0gMTtcclxuICAgICAgICAgdHJpLmlWMiA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMiArIDEpIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb2xkU2l6ZSA9IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMobm9ybWFsVHlwZSk7XHJcbiAgICAgIG5ld1NpemUgPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBtc2cgKz0gJ051bSBOb3JtYWxzOiAnICsgb2xkU2l6ZSArICcgdG8gJyArIG5ld1NpemUgKyAnLCAnICsgKDEwMCAqIG5ld1NpemUgLyBvbGRTaXplKS50b0ZpeGVkKCkgKyAnICUnO1xyXG5cclxuICAgICAgbGV0IHN0ciA9IHRoaXMudG9PYmpTdHJpbmcoKTtcclxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc3RyKS50aGVuKCgpID0+IHsgYWxlcnQobXNnKSB9KTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4vUHJvZmlsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGxvYWRzIGEgLm9iaiBmaWxlIGFuZCBjcmVhdGVzIHRyaWFuZ2xlcyBmb3IgaXRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iakZpbGUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHNyYzogc3RyaW5nKSB7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLnBhcnNlKHNyYyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2VGYWNlKGxpbmU6IHN0cmluZyk6IHsgaVY6IG51bWJlcltdLCBpTjogbnVtYmVyW10gfSB7XHJcbiAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgIGlWOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgICAgaU46IFtdIGFzIG51bWJlcltdLFxyXG4gICAgICB9XHJcbiAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICBsZXQgbnVtVmFscyA9IHRva2Vucy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZhbHM7IGkrKykge1xyXG4gICAgICAgICBsZXQgdmFscyA9IHRva2Vuc1tpICsgMV0uc3BsaXQoJy8nKTtcclxuICAgICAgICAgcmV0LmlWLnB1c2gocGFyc2VJbnQodmFsc1swXSkgLSAxKTtcclxuICAgICAgICAgcmV0LmlOLnB1c2godmFscy5sZW5ndGggPT09IDMgPyBwYXJzZUludCh2YWxzWzJdKSAtIDEgOiAtMSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZShzcmM6IHN0cmluZykge1xyXG5cclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IGxpbmVzID0gc3JjLnNwbGl0KCdcXG4nKTtcclxuICAgICAgcC5sb2coJ3NwbGl0Jyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBsaW5lID0gbGluZXNbaV07XHJcbiAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3YgJykpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWMzKFtwYXJzZUZsb2F0KHRva2Vuc1sxXSksIHBhcnNlRmxvYXQodG9rZW5zWzJdKSwgcGFyc2VGbG9hdCh0b2tlbnNbM10pXSlcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlYyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCd2biAnKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzMoW3BhcnNlRmxvYXQodG9rZW5zWzFdKSwgcGFyc2VGbG9hdCh0b2tlbnNbMl0pLCBwYXJzZUZsb2F0KHRva2Vuc1szXSldKVxyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh2ZWMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5wYXJzZUZhY2UobGluZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXQuaU4ubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0sIHRoaXMubm9ybWFscywgcmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSkpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCByZXQuaVZbMF0sIHJldC5pVlsyXSwgcmV0LmlWWzNdLCB0aGlzLm5vcm1hbHMsIHJldC5pTlswXSwgcmV0LmlOWzJdLCByZXQuaU5bM10pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgcmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSwgdGhpcy5ub3JtYWxzLCByZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm5vcm1hbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb3JtYWxzOiAnICsgdGhpcy5ub3JtYWxzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUcmlhbmdsZXM6ICcgKyB0aGlzLnRyaWFuZ2xlcy5sZW5ndGgpO1xyXG4gICAgICBwLmxvZygncGFyc2UnKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc3BoZXJlIHVzaW5nIHRyaWFuZ2xlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlU3BoZXJlIGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgdGhlIHNwaGVyZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG51bVN0ZXBzIFRoZSBudW1iZXIgb2YgYmFuZHMgdXNlZCB0byBjb3ZlciB0aGUgc3BoZXJlXHJcbiAgICAqIEBwYXJhbSByYWRpdXMgVGhlIHJhZGl1cyBvZiB0aGUgc3BoZXJlXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIGNlbnRlciBvZiB0aGUgc3BoZXJlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobnVtU3RlcHM6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLmNyZWF0ZVZlcnRpY2VzKG51bVN0ZXBzLCByYWRpdXMsIGNlbnRlcik7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdHJpYW5nbGVzIGZyb20gdGhlIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMuY29ubmVjdFZlcnRpY2VzKG51bVN0ZXBzKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVWZXJ0aWNlcyhudW1TdGVwczogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwczsgaSsrKSB7XHJcbiAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCwgY2VudGVyLnkgKyByYWRpdXMsIGNlbnRlci56XSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGkgPT09IG51bVN0ZXBzIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLngsIGNlbnRlci55IC0gcmFkaXVzLCBjZW50ZXIuel0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHkgPSByYWRpdXMgKiBNYXRoLmNvcyhpIC8gKG51bVN0ZXBzIC0gMSkgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgbGV0IHIgPSByYWRpdXMgKiBNYXRoLnNpbihpIC8gKG51bVN0ZXBzIC0gMSkgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IGkgJSAyID8gMCA6ICgoMiAqIE1hdGguUEkpIC8gbnVtU3RlcHMpICogMC41O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1TdGVwczsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci54ICsgciAqIE1hdGguc2luKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueSArIHksXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci56ICsgciAqIE1hdGguY29zKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29ubmVjdFZlcnRpY2VzKG51bVN0ZXBzOiBudW1iZXIpIHtcclxuICAgICAgbGV0IGZpcnN0ID0gMDtcclxuICAgICAgbGV0IGxhc3QgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHMgLSAxOyBpKyspIHtcclxuICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1TdGVwczsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGZpcnN0O1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gaiA9PT0gKG51bVN0ZXBzIC0gMSkgPyAxIDogaTIgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTIsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpID09PSBudW1TdGVwcyAtIDIpIHtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBsYXN0IC0gbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGxhc3Q7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IHN0YXJ0SW5kZXggKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBqID09PSAobnVtU3RlcHMgLSAxKSA/IHN0YXJ0SW5kZXggOiBpMiArIDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMywgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICBsZXQgc3RhcnRBID0gMSArIChpIC0gMSkgKiBudW1TdGVwcztcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0QiA9IDEgKyBpICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IHN0YXJ0QSArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEEgOiBpMSArIDE7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IHN0YXJ0QiArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpNCA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEIgOiBpMyArIDE7XHJcbiAgICAgICAgICAgICAgIGlmIChpICUgMikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTQsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkzLCBpNCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMywgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMiwgaTMsIGk0LCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxDb29yZCB9IGZyb20gXCIuL1NwaGVyaWNhbENvb3JkXCI7XHJcblxyXG4vKipcclxuICogVHlwZXMgZm9yIHRoZSB1bmlmb3JtIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVW5pZm9ybXMge1xyXG4gICB1U2NhbGU6IG51bWJlcjtcclxuICAgdVhPZmZzZXQ6IG51bWJlcjtcclxuICAgdVlPZmZzZXQ6IG51bWJlcjtcclxuICAgdU1vZGU6IFJlbmRlck1vZGU7XHJcbiAgIHVNYXhDaHJvbWE6IG51bWJlcjtcclxuXHJcbiAgIHVIaWdobGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdU1pZExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVEYXJrTGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogZ2xDb2xvcjtcclxuICAgdVJlZmxlY3RlZExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVEYXJrQWNjZW50Q29sb3I6IGdsQ29sb3I7XHJcblxyXG4gICB1TGlnaHRBbHBoYTogbnVtYmVyO1xyXG4gICB1U2hhZG93QWxwaGE6IG51bWJlcjtcclxuXHJcbiAgIHVMaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICB1TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgdUxpZ2h0UG9zOiBnbFZlYzMsXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdU9iakNvbG9yOiBnbENvbG9yLFxyXG4gICB1QmFsbFJhZGl1czogbnVtYmVyLFxyXG4gICB1RXllOiBnbFZlYzMsXHJcbiAgIHVUZXh0dXJlU2l6ZTogbnVtYmVyLFxyXG4gICB1UmFuZG9tOiBudW1iZXIsXHJcbiAgIHVSYXkwMDogZ2xWZWMzLFxyXG4gICB1UmF5MDE6IGdsVmVjMyxcclxuICAgdVJheTEwOiBnbFZlYzMsXHJcbiAgIHVSYXkxMTogZ2xWZWMzLFxyXG4gICB1U2FtcGxlOiBudW1iZXIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWx1ZXMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBsZXQgVW5pZm9ybXM6IElVbmlmb3JtcyA9IHtcclxuICAgdVNjYWxlOiAxLjAsXHJcbiAgIHVYT2Zmc2V0OiAwLjAsXHJcbiAgIHVZT2Zmc2V0OiAwLjAsXHJcbiAgIHVNb2RlOiAwLFxyXG4gICB1TWF4Q2hyb21hOiAxLjAsXHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1TWlkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0xpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0FjY2VudENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1TGlnaHRBbHBoYTogMTAwMSxcclxuICAgdVNoYWRvd0FscGhhOiAxMDAwLFxyXG5cclxuICAgdUxpZ2h0SW50ZW5zaXR5OiAwLjcsXHJcbiAgIHVMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMS4wLCAxLjAsIDEuMF0pLFxyXG4gICB1TGlnaHRQb3M6IG5ldyBnbFZlYzMobmV3IFNwaGVyaWNhbENvb3JkKDIsIDYwLCAxMTApLnRvWFlaKCkpLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiAwLjMsXHJcbiAgIHVPYmpDb2xvcjogbmV3IGdsQ29sb3IoWzAuNSwgMC41LCAwLjhdKSxcclxuICAgdUJhbGxSYWRpdXM6IDAuNSxcclxuICAgdUV5ZTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1VGV4dHVyZVNpemU6IDI1NixcclxuICAgdVJhbmRvbTogTWF0aC5yYW5kb20oKSxcclxuICAgdVJheTAwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkwMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MTA6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTExOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVTYW1wbGU6IDAuMCxcclxufVxyXG4iLCJpbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbmNvbnN0IE1BWCA9IDEwMDA7IC8vIElORklOSVRZIGluIG91ciByZW5kZXJpbmcgd29ybGRcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IG1hbmFnZXMgYSBzZXQgb2YgdHJpYW5nbGVzIHdpdGhpbiBhIGdpdmVuIHNwYWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVm9sdW1lIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSB0cmlhbmdsZXMgZW5jbG9zZWQgd2l0aGluIHRoZSBib3VuZGluZyBib3hcclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmlhbmdsZXM6IEluZGV4ZWRUcmlhbmdsZVtdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1pbmltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNaW4gPSBuZXcgZ2xWZWMzKFtNQVgsIE1BWCwgTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1heGltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNYXggPSBuZXcgZ2xWZWMzKFstTUFYLCAtTUFYLCAtTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogU3RvcmVzIGEgdHJpYW5nbGUgYW5kIHVwZGF0ZXMgdGhlIGJvdW5kaW5nIGJveFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHRyaWFuZ2xlIFRoZSB0cmlhbmdsZSB0byBzdG9yZVxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2godHJpYW5nbGU6IEluZGV4ZWRUcmlhbmdsZSkge1xyXG5cclxuICAgICAgdGhpcy50cmlhbmdsZXMucHVzaCh0cmlhbmdsZSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnggPSBNYXRoLm1pbih0aGlzLmJveE1pbi54LCB0cmlhbmdsZS5taW5YKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9IE1hdGgubWluKHRoaXMuYm94TWluLnksIHRyaWFuZ2xlLm1pblkpO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdHJpYW5nbGUubWluWik7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0cmlhbmdsZS5tYXhYKTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnksIHRyaWFuZ2xlLm1heFkpO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueiwgdHJpYW5nbGUubWF4Wik7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBhIFdlYkdsIEJ1ZmZlciBhbmQgQXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xCdWZmZXIge1xyXG4gICBwcml2YXRlIGJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgYXR0cmlidXRlTG9jYXRpb246IG51bWJlcjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9ncmFtOiBXZWJHTFByb2dyYW0sIGF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0cmlidXRlTmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGxvYWQodmVydGljZXM6IG51bWJlcltdKSB7XHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGJpbmQoKSB7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmlidXRlTG9jYXRpb24pO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uLFxyXG4gICAgICAgICAzLCAgICAgICAgICAgICAgICAvLyBzaXplXHJcbiAgICAgICAgIGdsLkZMT0FULCAgICAgICAgIC8vIHR5cGVcclxuICAgICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gbm9ybWFsaXplZFxyXG4gICAgICAgICAwLCAgICAgICAgICAgICAgICAvLyBzdHJpZGVcclxuICAgICAgICAgMCAgICAgICAgICAgICAgICAgLy8gb2Zmc2V0XHJcbiAgICAgICk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBnbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGdsQ29sb3IuY2xhbXAoY29sb3Iucik7XHJcbiAgICAgIGxldCBnID0gZ2xDb2xvci5jbGFtcChjb2xvci5nKTtcclxuICAgICAgbGV0IGIgPSBnbENvbG9yLmNsYW1wKGNvbG9yLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxpZ2h0ZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBsaWdodGVzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbGlnaHRlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPiBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGRhcmtlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGRhcmtlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGRhcmtlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPCBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENsYW1wcyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICogQHJldHVybnMgVGhlIGNsYW1wZWQgdmFsdWVcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNsYW1wKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgaWYgKHZhbCA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsID4gMSkge1xyXG4gICAgICAgICByZXR1cm4gMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYW4gaHRtbCBjb2xvciBvYmplY3QgKDAtMjU1IGJhc2VkKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IdG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMucik7XHJcbiAgICAgIGxldCBnID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmcpO1xyXG4gICAgICBsZXQgYiA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5iKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGFkZHMgdGVtcGVyYXR1cmUgdG8gYSBDb2xvciBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIGV4dGVuZHMgZ2xDb2xvciB7XHJcbiAgIC8qKlxyXG4gICAgKiBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgX3RlbXBlcmF0dXJlOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgdGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICogQHBhcmFtIHRlbXBlcmF0dXJlIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10sIHRlbXBlcmF0dXJlOiBudW1iZXIpIHtcclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICAgICB0aGlzLl90ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogS25vd24gY29sb3IgdmFsdWVzLiBGb3Igb3RoZXIgcmVxdWVzdHMgdGhlIGNsYXNzIHdpbGwgcmV0dXJuIGludGVycG9sYXRlZCB2YWx1ZXNcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNvbG9yczogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVtdID0gW1xyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxNDcgLyAyNTUsIDQxIC8gMjU1XSwgMTkwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDE5NyAvIDI1NSwgMTQzIC8gMjU1XSwgMjYwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDIxNCAvIDI1NSwgMTcwIC8gMjU1XSwgMjg1MCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI0MSAvIDI1NSwgMjI0IC8gMjU1XSwgMzIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1MCAvIDI1NSwgMjQ0IC8gMjU1XSwgNTIwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjUxIC8gMjU1XSwgNTQwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDI1NSAvIDI1NSwgMjU1IC8gMjU1XSwgNjAwMCksIC8vIGRheWxpZ2h0XHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyMDEgLyAyNTUsIDIyNiAvIDI1NSwgMjU1IC8gMjU1XSwgNzAwMCksXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFs2NCAvIDI1NSwgMTU2IC8gMjU1LCAyNTUgLyAyNTVdLCAyMDAwMCksXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldCBkYXlsaWdodCgpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKDYwMDApO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluaW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtaW5UZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXhpbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1heFRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSBDb2xvciBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGUodGVtcGVyYXR1cmU6IG51bWJlcik6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUge1xyXG5cclxuICAgICAgaWYgKHRlbXBlcmF0dXJlIDw9IHRoaXMubWluVGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRlbXBlcmF0dXJlID49IHRoaXMubWF4VGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29sb3IxID0gdGhpcy5jb2xvcnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjIgPSB0aGlzLmNvbG9yc1tpICsgMV07XHJcbiAgICAgICAgICAgIGlmICh0ZW1wZXJhdHVyZSA+PSBjb2xvcjEudGVtcGVyYXR1cmUgJiYgdGVtcGVyYXR1cmUgPD0gY29sb3IyLnRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgIGxldCByYXRpbyA9ICh0ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSkgLyAoY29sb3IyLnRlbXBlcmF0dXJlIC0gY29sb3IxLnRlbXBlcmF0dXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCByID0gY29sb3IxLnIgKyByYXRpbyAqIChjb2xvcjIuciAtIGNvbG9yMS5yKTtcclxuICAgICAgICAgICAgICAgbGV0IGcgPSBjb2xvcjEuZyArIHJhdGlvICogKGNvbG9yMi5nIC0gY29sb3IxLmcpO1xyXG4gICAgICAgICAgICAgICBsZXQgYiA9IGNvbG9yMS5iICsgcmF0aW8gKiAoY29sb3IyLmIgLSBjb2xvcjEuYik7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbciwgZywgYl0sIHRlbXBlcmF0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzaG91bGRuJ3QgZ2V0IGhlcmUsIGJ1dCBpZiB3ZSBkbywgcmV0dXJuIHRoZSBsYXN0IGNvbG9yXHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IHdyYXBwZXIgZm9yIGNvbXBpbGluZyBXZWJHTCBzaGFkZXIgcHJvZ3JhbXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbXBpbGVyIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiB1c2Ugc3RhdGljIGZ1bmN0aW9ucyBvbmx5XHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcGlsZXMgYSBzaGFkZXIgcHJvZ3JhbVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIGNvZGVcclxuICAgICogQHBhcmFtIHR5cGUgVGhlIHNoYWRlciB0eXBlXHJcbiAgICAqIEB0aHJvd3MgaWYgdGhlIGNvbXBpbGF0aW9uIGZhaWxzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb21waWxlU2hhZGVyKHNvdXJjZTogc3RyaW5nLCB0eXBlOiBudW1iZXIpIHtcclxuICAgICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xyXG4gICAgICAgICB0aHJvdyAnY29tcGlsZSBlcnJvcjogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcGlsZXMgYW5kIGxpbmtzIHZlcnRleCBhbmQgZnJhZ21lbnQgc2hhZGVycyBpbnRvIGEgcHJvZ3JhbVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlcnRleFNvdXJjZSBWZXJ0ZXggc2hhZGVyIHNvdXJjZVxyXG4gICAgKiBAcGFyYW0gZnJhZ21lbnRTb3VyY2UgRnJhZ21lbnQgc2hhZGVyIHNvdXJjZVxyXG4gICAgKiBAcmV0dXJucyB0aGUgcHJvZ3JhbSBpZFxyXG4gICAgKiBAdGhyb3dzIGlmIHRoZSBjb21waWxhdGlvbiBmYWlsc1xyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjb21waWxlKHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgIGxldCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZ2xDb21waWxlci5jb21waWxlU2hhZGVyKHZlcnRleFNvdXJjZSwgZ2wuVkVSVEVYX1NIQURFUikpO1xyXG4gICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZ2xDb21waWxlci5jb21waWxlU2hhZGVyKGZyYWdtZW50U291cmNlLCBnbC5GUkFHTUVOVF9TSEFERVIpKTtcclxuICAgICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgdGhyb3cgJ2xpbmsgZXJyb3I6ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWM0LCBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyB0b0RlZywgdG9SYWQgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyBtYXRyaXggZm9yIHVzZSBpbiBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xNYXQ0IHtcclxuICAgLyoqIFRoZSBtYXRyaXggdmFsdWUgc3RvcmVkIGFzIGEgMTYgZWxlbWVudCBhcnJheSAqL1xyXG4gICBwdWJsaWMgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCBtYXRyaXggdmFsdWVzLiBJZiBub3Qgc3VwcGxpZWQsIHRoZSBtYXRyaXggaXMgXHJcbiAgICAqIGluaXRpYWxpemVkIGFzIGFuIGlkZW50aXR5IG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZXM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzKSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc107XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHZhbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGEgdmVjdG9yIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRWKHZlYzogZ2xWZWM0KTogZ2xWZWM0IHtcclxuICAgICAgbGV0IHZhbHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW3JvdyAqIDQgKyBjb2xdICogdmVjLnZhbHVlc1tjb2xdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHZhbHMucHVzaChzdW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWM0KHZhbHMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGFub3RoZXIgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG1hdHJpeC5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdE0ob3RoZXI6IGdsTWF0NCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmdldChyb3csIGkpICogb3RoZXIuZ2V0KGksIGNvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgc3VtKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogSW52ZXJ0cyB0aGlzIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0ICh0aGlzKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoaXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgaW52ZXJ0KCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUcmFuc3Bvc2VzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSBuZXcgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zcG9zZWQgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBnbE1hdDQge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgc2NhbGUgb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNjYWxlIFRoZSBzY2FsZSBmYWN0b3JcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVNjYWxlKHNjYWxlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBzY2FsZSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgc2NhbGUsIDAsIDAsXHJcbiAgICAgICAgIDAsIDAsIHNjYWxlLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgdHJhbnNsYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdHJhbnNsYXRpb25zLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVHJhbnNsYXRpb24odjogZ2xWZWMzKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgdi54LFxyXG4gICAgICAgICAwLCAxLCAwLCB2LnksXHJcbiAgICAgICAgIDAsIDAsIDEsIHYueixcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tUm90WChhbmdsZTogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgYywgcywgMCxcclxuICAgICAgICAgMCwgLXMsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFkoYW5nbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKVxyXG4gICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKVxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICBzLCAwLCBjLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RaKGFuZ2xlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBjLCBzLCAwLCAwLFxyXG4gICAgICAgICAtcywgYywgMCwgMCxcclxuICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJvdFgoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tUm90WChhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RZKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVJvdFkoYW5nbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WihhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21Sb3RaKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tVHJhbnNsYXRpb24ob2Zmc2V0KS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVNjYWxlKHNjYWxlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KGV5ZTogZ2xWZWMzLCBjZW50ZXI6IGdsVmVjMywgdXA6IGdsVmVjMywgKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBhID0gZXllLnN1YnRyYWN0KGNlbnRlcikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCBiID0gdXAuY3Jvc3MoYSkubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCBjID0gYS5jcm9zcyhiKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgIGxldCBtID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGIueCwgYi55LCBiLnosIDAsXHJcbiAgICAgICAgIGMueCwgYy55LCBjLnosIDAsXHJcbiAgICAgICAgIGEueCwgYS55LCBhLnosIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICB2YXIgdCA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAtZXllLngsXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUueSxcclxuICAgICAgICAgMCwgMCwgMSwgLWV5ZS56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG0ubXVsdE0odCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdVBlcnNwZWN0aXZlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGZvdnkgRmllbGQgb2YgdmlldyAoaW4gZGVncmVlcykuXHJcbiAgICAqIEBwYXJhbSBhc3BlY3QgVmlldyBhc3BlY3QgcmF0aW8uXHJcbiAgICAqIEBwYXJhbSB6bmVhciBOZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBGYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VQZXJzcGVjdGl2ZShcclxuICAgICAgZm92eTogbnVtYmVyLFxyXG4gICAgICBhc3BlY3Q6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciB5bWF4ID0gem5lYXIgKiBNYXRoLnRhbihmb3Z5ICogTWF0aC5QSSAvIDM2MC4wKTtcclxuICAgICAgdmFyIHltaW4gPSAteW1heDtcclxuICAgICAgdmFyIHhtaW4gPSB5bWluICogYXNwZWN0O1xyXG4gICAgICB2YXIgeG1heCA9IHltYXggKiBhc3BlY3Q7XHJcblxyXG4gICAgICByZXR1cm4gZ2xNYXQ0Lm1ha2VGcnVzdHVtKHhtaW4sIHhtYXgsIHltaW4sIHltYXgsIHpuZWFyLCB6ZmFyKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVGcnVzdHVtLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlZnQgVGhlIGxlZnQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSByaWdodCBUaGUgcmlnaHQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSBib3R0b20gVGhlIGJvdHRvbSBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHRvcCBUaGUgdG9wIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgVGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIFRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEByZXR1cm5zIHRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VGcnVzdHVtKFxyXG4gICAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgICB0b3A6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciBYID0gMiAqIHpuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBZID0gMiAqIHpuZWFyIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBBID0gKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIEIgPSAodG9wICsgYm90dG9tKSAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQyA9IC0oemZhciArIHpuZWFyKSAvICh6ZmFyIC0gem5lYXIpO1xyXG4gICAgICB2YXIgRCA9IC0yICogemZhciAqIHpuZWFyIC8gKHpmYXIgLSB6bmVhcik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIFgsIDAsIEEsIDAsXHJcbiAgICAgICAgIDAsIFksIEIsIDAsXHJcbiAgICAgICAgIDAsIDAsIEMsIEQsXHJcbiAgICAgICAgIDAsIDAsIC0xLCAwXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nLCBkaWdpdHM6IG51bWJlciA9IDIpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCA0OyByKyspIHtcclxuICAgICAgICAgbGV0IGxpbmUgPSBcIlwiO1xyXG4gICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDQ7IGMrKykge1xyXG4gICAgICAgICAgICBsaW5lICs9IHRoaXMuZ2V0KHIsIGMpLnRvRml4ZWQoZGlnaXRzKSArICcgJztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhsaW5lKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygpO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBnbEJ1ZmZlciB9IGZyb20gXCIuL2dsQnVmZmVyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tIFwiLi9nbFVuaWZvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBnbE9iamVjdCB7XHJcbiAgIHByaXZhdGUgdE9iajogVHJpYW5nbGVPYmo7XHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogZ2xCdWZmZXI7XHJcbiAgIHByaXZhdGUgbm9ybWFsQnVmZmVyOiBnbEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBtb2RlbCA9IG5ldyBnbE1hdDQoKTtcclxuICAgcHJpdmF0ZSB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHRPYmo6IFRyaWFuZ2xlT2JqLCBwcm9ncmFtOiBXZWJHTFByb2dyYW0pIHtcclxuXHJcbiAgICAgIHRoaXMudE9iaiA9IHRPYmo7XHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYnVmZmVycyAoYW5kIGFzc29jaWF0ZWQgYXR0cmlidXRlcylcclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBuZXcgZ2xCdWZmZXIocHJvZ3JhbSwgJ2FWZXJ0ZXgnKTtcclxuICAgICAgdGhpcy5ub3JtYWxCdWZmZXIgPSBuZXcgZ2xCdWZmZXIocHJvZ3JhbSwgJ2FOb3JtYWwnKTtcclxuXHJcbiAgICAgIHRoaXMudXBsb2FkVHJpYW5nbGVzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbC5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsLnJvdFooYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5tb2RlbC50cmFuc2xhdGUob2Zmc2V0KTtcclxuICAgfVxyXG4gICBwdWJsaWMgY2xlYXJUcmFuc2Zvcm1zKCkge1xyXG4gICAgICB0aGlzLm1vZGVsID0gbmV3IGdsTWF0NCgpO1xyXG4gICB9XHJcblxyXG5cclxuICAgcHJpdmF0ZSBwdXNoVmVjKGFycmF5OiBudW1iZXJbXSwgdmVjOiBnbFZlYzMpIHtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueCk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnkpO1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZFRyaWFuZ2xlcygpIHtcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgdGhlIHRyaWFuZ2xlcyBpbnRvIGFycmF5cyB0aGF0IGNhbiBiZSB1cGxvYWRlZFxyXG4gICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgIHRoaXMubm9ybWFscyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudE9iai50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRyaSA9IHRoaXMudE9iai50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyh0aGlzLnZlcnRpY2VzLCB0cmkudjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModGhpcy52ZXJ0aWNlcywgdHJpLnYxKTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHRoaXMudmVydGljZXMsIHRyaS52Mik7XHJcblxyXG4gICAgICAgICB0aGlzLnB1c2hWZWModGhpcy5ub3JtYWxzLCB0cmkubjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModGhpcy5ub3JtYWxzLCB0cmkubjEpO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModGhpcy5ub3JtYWxzLCB0cmkubjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlci51cGxvYWQodGhpcy52ZXJ0aWNlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLnVwbG9hZCh0aGlzLm5vcm1hbHMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ21vZGVsJywgdGhpcy5tb2RlbC50cmFuc3Bvc2UoKSk7XHJcblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmJpbmQoKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMudmVydGljZXMubGVuZ3RoIC8gMyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcHRpbWl6ZShub3JtYWxUeXBlOiBOb3JtYWxUeXBlKSB7XHJcbiAgICAgIHRoaXMudE9iai5vcHRpbWl6ZShub3JtYWxUeXBlKTtcclxuICAgICAgdGhpcy51cGxvYWRUcmlhbmdsZXMoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3Igc2V0dGluZyB1bmlmb3JtIHZhbHVlcyBpbiBhIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVW5pZm9ybSB7XHJcbiAgIC8vIHRoZSBXZWJHTCBzaGFkZXIgcHJvZ3JhbVxyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIG9iamVjdCBmb3Igc2V0dGluZyB2YWx1ZXMgYW5kIGNhbGxzIGdsLnVzZVByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwcm9ncmFtIFRoZSBwcm9ncmFtIGFzc29jaWF0ZWQgd2l0aCB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9ncmFtOiBXZWJHTFByb2dyYW0pIHtcclxuICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB1bmlmb3JtIHZhbHVlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbmFtZSBUaGUgdmFyaWFibGUgbmFtZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAgICAqIEBwYXJhbSBpbnQgSWYgdHJ1ZSBhbmQgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGFuIGludGVnZXJcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIHwgZ2xWZWMzIHwgZ2xDb2xvciB8IGdsTWF0NCwgaW50OiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICAgIGxldCBsb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCBuYW1lKTtcclxuICAgICAgaWYgKGxvYykge1xyXG4gICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbFZlYzMpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2MsIG5ldyBGbG9hdDMyQXJyYXkodmFsdWUudmFsdWVzKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbENvbG9yKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jLCBuZXcgRmxvYXQzMkFycmF5KFt2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xNYXQ0KSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheSh2YWx1ZS52YWx1ZXMpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInVNb2RlXCIpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGxvYywgdmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaW50KSB7XHJcbiAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2MsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgZ2wudW5pZm9ybTFmKGxvYywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhbGwgdmFsdWVzIGZvciB2YXJpYWJsZXMgc3RvcmVkIGFzIG1lbWJlcnMgb2YgYW4gb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdW5pZm9ybXMgVGhlIG9iamVjdCB3aXRoIG1lbWJlciB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXRBbGwodW5pZm9ybXM6IGFueSkge1xyXG5cclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiB1bmlmb3Jtcykge1xyXG4gICAgICAgICB2YXIgdmFsdWUgPSB1bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdsVW5pZm9ybUJsb2NrIHtcclxuICAgcHJpdmF0ZSBibG9ja0xvY2F0aW9uOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgYmxvY2tCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IocHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBibG9ja05hbWU6IHN0cmluZywgYmxvY2tCaW5kaW5nOiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGxldCBnbDIgPSBnbCBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5ibG9ja0xvY2F0aW9uID0gZ2wyLmdldFVuaWZvcm1CbG9ja0luZGV4KHByb2dyYW0sIGJsb2NrTmFtZSk7XHJcbiAgICAgIGdsMi51bmlmb3JtQmxvY2tCaW5kaW5nKHByb2dyYW0sIHRoaXMuYmxvY2tMb2NhdGlvbiwgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIHRoaXMuYmxvY2tCdWZmZXIgPSBnbDIuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyQmFzZShnbDIuVU5JRk9STV9CVUZGRVIsIGJsb2NrQmluZGluZywgdGhpcy5ibG9ja0J1ZmZlcik7XHJcbiAgIH1cclxuXHJcbiAgIHVwbG9hZChkYXRhOiBGbG9hdDMyQXJyYXkgfCBJbnQzMkFycmF5KSB7XHJcblxyXG4gICAgICBsZXQgZ2wyID0gZ2wgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCB0aGlzLmJsb2NrQnVmZmVyKTtcclxuICAgICAgZ2wyLmJ1ZmZlckRhdGEoZ2wyLlVOSUZPUk1fQlVGRkVSLCBkYXRhLCBnbDIuU1RBVElDX0RSQVcpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgLypcclxuICAgICAgdmFyIHVuaWZvcm1CbG9ja0J1ZmZlciA9IGdsMi5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCB1bmlmb3JtQmxvY2tCdWZmZXIpO1xyXG4gICAgICBnbDIuYnVmZmVyRGF0YShnbDIuVU5JRk9STV9CVUZGRVIsIHRyaWFuZ2xlRGF0YSwgZ2wyLlNUQVRJQ19EUkFXKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCBudWxsKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXJCYXNlKGdsMi5VTklGT1JNX0JVRkZFUiwgMiwgdW5pZm9ybUJsb2NrQnVmZmVyKTtcclxuICAgICAgKi9cclxuXHJcbiAgIH1cclxufSIsIlxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBnbFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkteiB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWMzIGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGRpZ2l0cyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGRpc3BsYXkuIFRoaXMgdmFsdWUgaXMgcGFzc2VkIHRvIHRvRml4ZWQoKS5cclxuICAgICogQHBhcmFtIGRpdmlkZXIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBlYWNoIG51bWJlci5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIsIGRpdmlkZXIgPSAnLCcpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy54LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnkudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMuei50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBub3JtYWxpemUoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGxldCByZXQgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXQudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnRyYWN0KHZlYzogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAtIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC0gdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLSB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQWRkcyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBhZGQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYWRkKHZlYzogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSArIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdICsgdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gKyB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGxldCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjNCBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhbiB4LXkteiB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IGlzIGNvbXB1dGVkIGJ5IGRpdmlkaW5nIHRoaXMgdmVjdG9yc1xyXG4gICAgKiBlbGVtZW50cyBieSB0aGUgdyB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIHgteS16IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXZpZGVCeVcoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyNTVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHdoaXRlID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTUsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJsYWNrID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJlZCA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGdyZWVuID0gbmV3IGh0bWxDb2xvcihbMCwgMjU1LCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmx1ZSA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG9yYW5nZSA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMTY1LCAwXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjIFRoZSBudW1lcmljIHZhbHVlXHJcbiAgICAqIEByZXR1cm5zIFRoZSBoZXggc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29tcG9uZW50VG9IZXgoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGhleCBzdHJpbmcgKGUuZy4gIzBmMGYwZikuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGhleCBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IZXgoKTogc3RyaW5nIHtcclxuICAgICAgbGV0IHJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMucik7XHJcbiAgICAgIGxldCBnSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmcpO1xyXG4gICAgICBsZXQgYkhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5iKTtcclxuICAgICAgcmV0dXJuIFwiI1wiICsgckhleCArIGdIZXggKyBiSGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBjc3Mgc3RyaW5nIChlLmcuICdyZ2IoMTI4LDIyOCwzMiknKS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjc3Mgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvQ3NzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLnIgKyAnLCcgKyB0aGlzLmcgKyAnLCcgKyB0aGlzLmIgKyAnKSc7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgZnJvbSBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBoZXggVGhlIGhleCBzdHJpbmdcclxuICAgICogQHJldHVybnMgVGhlIGh0bWxDb2xvciBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUhleChoZXg6IHN0cmluZyk6IGh0bWxDb2xvciB7XHJcbiAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICBsZXQgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xyXG4gICAgICAgICBsZXQgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gICAgICAgICBsZXQgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xyXG4gICAgICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IHVzaW5nIHZhbHVlcyBpbiBhIENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBIGdlbmVyaWMgQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tQ29sb3IoY29sb3I6IENvbG9yKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBodG1sQ29sb3IuY2xhbXAoY29sb3Iucik7XHJcbiAgICAgIGxldCBnID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLmcpO1xyXG4gICAgICBsZXQgYiA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5iKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJvdW5kcyBhIG51bWJlciB0byBhIHdob2xlIG51bWJlciBhbmQgY2xhbXBzIGl0IGJldHdlZW4gMCBhbmQgMjU1LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqIEByZXR1cm5zIFRoZSByb3VuZGVkICYgY2xhbXBlZCB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY2xhbXAodmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICB2YWwgPSBNYXRoLnJvdW5kKHZhbCk7XHJcbiAgICAgIGlmICh2YWwgPCAwKSB7XHJcbiAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbCA+IDI1NSkge1xyXG4gICAgICAgICByZXR1cm4gMjU1O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIGNvbG9yIHRvIGFuIGVxdWl2YWxlbnQgZ3JheS1zY2FsZSBjb2xvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGdyYXktc2NhbGUgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HcmF5KCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByZ2IgPSBNYXRoLnJvdW5kKCh0aGlzLnIgKyB0aGlzLmcgKyB0aGlzLmIpIC8gMyk7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyZ2IsIHJnYiwgcmdiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIFdlYkdMIGNvbG9yIG9iamVjdCAoMC0xIGJhc2VkKVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBnbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dsQ29sb3IoKTogZ2xDb2xvciB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbdGhpcy5yIC8gMjU1LCB0aGlzLmcgLyAyNTUsIHRoaXMuYiAvIDI1NV0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBodG1sIGNvbG9yIHdpdGggYSB0cmFuc3BhcmVuY3kgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3JXaXRoQWxwaGEgZXh0ZW5kcyBodG1sQ29sb3Ige1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0cmFuc3BhcmVudCA9IG5ldyBodG1sQ29sb3JXaXRoQWxwaGEoWzAsIDAsIDAsIDBdKTtcclxuXHJcbiAgIC8qKiBUaGUgdHJhbnNwYXJlbmN5IChhbHBoYSkgdmFsdWUgKi9cclxuICAgcHVibGljIGE6IG51bWJlciA9IDI1NTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCQSBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgc3VwZXIoW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl1dKTtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gNCkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgNCBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb2xvcls0XSA8IDAgfHwgY29sb3JbNF0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYScgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmEgPSBjb2xvclszXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgY3NzIHN0cmluZyAoZS5nLiAncmdiKDEyOCwyMjgsMzIsMjU1KScpLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNzcyBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Dc3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdyZ2IoJyArIHRoaXMuciArICcsJyArIHRoaXMuZyArICcsJyArIHRoaXMuYiArICcsJyArIHRoaXMuYSArICcpJztcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgUGF0aFRyYWNlckFwcCB9IGZyb20gXCIuL1BhdGhUcmFjZXJBcHBcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBQbGFuZXNBcHAgfSBmcm9tIFwiLi9QbGFuZXNBcHBcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICBsZXQgcXVlcnk6IHN0cmluZztcclxuICAgbGV0IHR5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1xyXG4gICAgICBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xyXG5cclxuICAgICAgbGV0IHRva2VucyA9IHF1ZXJ5LnNwbGl0KCctJyk7XHJcbiAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgIHR5cGUgPSB0b2tlbnNbMF07XHJcbiAgICAgICAgIHF1ZXJ5ID0gdG9rZW5zWzFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGlmICh0eXBlID09PSAncGxhbmVzJykge1xyXG4gICAgICBsZXQgYXBwID0gbmV3IFBsYW5lc0FwcChxdWVyeSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLmNvbXBvbmVudCgpKTtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgbGV0IGFwcCA9IG5ldyBQYXRoVHJhY2VyQXBwKHF1ZXJ5KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY29tcG9uZW50KCkpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIGludCB1TW9kZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVNYXhDaHJvbWE7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVIaWdobGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdU1pZExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVEYXJrTGlnaHRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdVNoYWRvd0NvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1UmVmbGVjdGVkTGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdURhcmtBY2NlbnRDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3dBbHBoYTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcblxcclxcbiNkZWZpbmUgTU9ERV9TQ0lFTkNFIDBcXHJcXG4jZGVmaW5lIE1PREVfVkFMVUUgMVxcclxcbiNkZWZpbmUgTU9ERV9DSFJPTUEgMlxcclxcbiNkZWZpbmUgTU9ERV9CQU5EUyAzXFxyXFxuXFxyXFxudmVjNCB3aGl0ZSA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IHJlZCA9IHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IG9yYW5nZSA9IHZlYzQoMS4wLCAwLjY1LCAwLjAsIDEuMCk7XFxyXFxudmVjNCB5ZWxsb3cgPSB2ZWM0KDEuMCwgMS4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBncmVlbiA9IHZlYzQoMC4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGN5YW4gPSB2ZWM0KDAuMCwgMS4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibHVlID0gdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgYmxhY2sgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuI2RlZmluZSBOVU1fQ09MT1JTIDZcXHJcXG52ZWM0IGNvbG9yc1tOVU1fQ09MT1JTXTtcXHJcXG5cXHJcXG52ZWM0IHZhbHVlMkNvbG9yKGZsb2F0IHZhbHVlKVxcclxcbntcXHJcXG4gICBmbG9hdCBzcGFuID0gMS4wIC8gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIHZhbHVlICo9IGZsb2F0KE5VTV9DT0xPUlMgLSAxKTtcXHJcXG4gICBpZiAodmFsdWUgPCAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF07XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzBdICsgdmFsdWUgKiAoY29sb3JzWzFdIC0gY29sb3JzWzBdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAyLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMV0gKyAodmFsdWUgLSAxLjApICogKGNvbG9yc1syXSAtIGNvbG9yc1sxXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMy4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzJdICsgKHZhbHVlIC0gMi4wKSAqIChjb2xvcnNbM10gLSBjb2xvcnNbMl0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDQuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1szXSArICh2YWx1ZSAtIDMuMCkgKiAoY29sb3JzWzRdIC0gY29sb3JzWzNdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA1LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNF0gKyAodmFsdWUgLSA0LjApICogKGNvbG9yc1s1XSAtIGNvbG9yc1s0XSk7XFxyXFxuICAgfVxcclxcbiAgIC8qXFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA2LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbNV0gKyAodmFsdWUgLSA1LjApICogKGNvbG9yc1s2XSAtIGNvbG9yc1s1XSk7XFxyXFxuICAgfVxcclxcbiAgICovXFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzW05VTV9DT0xPUlMgLSAxXTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc1ZhbHVlKClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbiAgIGZsb2F0IHJnYiA9IHRvR3JheShjb2xvcik7XFxyXFxuICAgcmV0dXJuIHZlYzQocmdiLCByZ2IsIHJnYiwgMS4wKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc0Nocm9tYSgpXFxyXFxue1xcclxcbiAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG5cXHJcXG4gICAvLyByZW5kZXIgdGhlIHNjYWxlIGFzIGEgYmFyIG9uIHRoZSBsZWZ0XFxyXFxuICAgaWYgKHRleENvb3JkLnggPCAwLjAzKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdmFsdWUyQ29sb3IoKHRleENvb3JkLnkgLSAwLjEpIC8gMC45KTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+PSB1U2hhZG93QWxwaGEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZsb2F0IGF2ZyA9IChjb2xvci5yICsgY29sb3IuZyArIGNvbG9yLmIpIC8gMy4wO1xcclxcbiAgICAgICAgIGZsb2F0IHJnYiA9IChhYnMoYXZnIC0gY29sb3IucikgKyBhYnMoYXZnIC0gY29sb3IuZykgKyBhYnMoYXZnIC0gY29sb3IuYikpIC8gKDQuMCAvIDMuMCk7XFxyXFxuICAgICAgICAgcmV0dXJuIHZhbHVlMkNvbG9yKHJnYiAvIHVNYXhDaHJvbWEpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgZDIodmVjMyBjMSwgdmVjMyBjMilcXHJcXG57XFxyXFxuICAgLy8gc3VtIHRoZSBzcXVhcmVzIG9mIHRoZSBkaWZmZXJlbmNlc1xcclxcbiAgIHJldHVybiBwb3coYzEuciAtIGMyLnIsIDIuMCkgKyBwb3coYzEuZyAtIGMyLmcsIDIuMCkgKyBwb3coYzEuYiAtIGMyLmIsIDIuMCk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgY2xvc2VzdCh2ZWMzIGNvbG9yLCB2ZWMzIGxpZ2h0LCB2ZWMzIG1pZCwgdmVjMyBkYXJrKVxcclxcbntcXHJcXG4gICBmbG9hdCBkbGlnaHQgPSBkMihjb2xvciwgbGlnaHQpO1xcclxcbiAgIGZsb2F0IGRtaWQgPSBkMihjb2xvciwgbWlkKTtcXHJcXG4gICBmbG9hdCBkZGFyayA9IGQyKGNvbG9yLCBkYXJrKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkbWluID0gbWluKGRsaWdodCwgbWluKGRtaWQsIGRkYXJrKSk7XFxyXFxuICAgaWYgKGRtaW4gPT0gZGxpZ2h0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbGlnaHQ7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKGRtaW4gPT0gZG1pZClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIG1pZDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gZGFyaztcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNCYW5kcygpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNpemUgPSAwLjA3O1xcclxcbiAgIGZsb2F0IG1hcmdpbiA9ICgxLjAgLSA2LjAgKiBzaXplKSAvIDIuMDtcXHJcXG4gICBpZiAodGV4Q29vcmQueCA8IHNpemUgJiYgdGV4Q29vcmQueSA+IG1hcmdpbiAmJiB0ZXhDb29yZC55IDwgKDEuMCAtIG1hcmdpbikpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDEuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1RGFya0FjY2VudENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDIuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1U2hhZG93Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVEYXJrTGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA0LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodU1pZExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNS4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVMaWdodExpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgLy8gaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNy4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgICAgIC8vIGRlZmluZSB0aGUgdGVybWluYXRvciBhcyB0aGUgcG9pbnQgd2hlcmUgdGhpbmdzIGFyZSA1MCUgaW4gc2hhZG93XFxyXFxuICAgICAgZmxvYXQgdGVybWluYXRvciA9ICgodVNoYWRvd0FscGhhICsgdUxpZ2h0QWxwaGEpIC8gMi4wKTtcXHJcXG4gICAgICBpZiAoY29sb3IuYSA+IDEuMCAmJiBjb2xvci5hIDw9IHRlcm1pbmF0b3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHZlYzMgYyA9IGNsb3Nlc3QoY29sb3IucmdiLCB1U2hhZG93Q29sb3IsIHVSZWZsZWN0ZWRMaWdodENvbG9yLCB1RGFya0FjY2VudENvbG9yKTtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmIChjb2xvci5hID4gdGVybWluYXRvcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gb25seSByZW5kZXIgdGhlIGhpZ2hsaWdodCB3aGVyZSBpdCdzIGNvbnRyaWJ1dGlvbiBpcyBzaWduaWZpY2FudCwgaS5lLiBncmVhdGVyXFxyXFxuICAgICAgICAgLy8gdGhhbiBzb21lIHRocmVzaG9sZFxcclxcbiAgICAgICAgIGNvbnN0IGZsb2F0IFNQRUNVTEFSX1RIUkVTSE9MRCA9IDAuMTtcXHJcXG4gICAgICAgICBpZiAoY29sb3IuYSA+ICh1TGlnaHRBbHBoYSArIFNQRUNVTEFSX1RIUkVTSE9MRCkpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHJldHVybiB2ZWM0KHVIaWdobGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICB2ZWMzIGMgPSBjbG9zZXN0KGNvbG9yLnJnYiwgdUxpZ2h0TGlnaHRDb2xvciwgdU1pZExpZ2h0Q29sb3IsIHVEYXJrTGlnaHRDb2xvcik7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHZlYzQoYywgMS4wKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIGNvbG9yO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNTY2llbmNlKClcXHJcXG57XFxyXFxuICAgLy8ganVzdCByZXR1cm4gdGhlIHRleHR1cmVcXHJcXG4gICByZXR1cm4gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGNvbG9yc1swXSA9IGJsYWNrO1xcclxcbiAgIGNvbG9yc1sxXSA9IGJsdWU7XFxyXFxuICAgY29sb3JzWzJdID0gZ3JlZW47XFxyXFxuICAgY29sb3JzWzNdID0geWVsbG93O1xcclxcbiAgIGNvbG9yc1s0XSA9IG9yYW5nZTtcXHJcXG4gICBjb2xvcnNbNV0gPSByZWQ7XFxyXFxuXFxyXFxuICAgaWYgKHVNb2RlID09IE1PREVfVkFMVUUpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzVmFsdWUoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9DSFJPTUEpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQ2hyb21hKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQkFORFMpXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzQmFuZHMoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc1NjaWVuY2UoKTtcXHJcXG4gICB9XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNjYWxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdVhPZmZzZXQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1WU9mZnNldDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB0ZXhDb29yZCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodVNjYWxlICogdmVydGV4LnggKyB1WE9mZnNldCwgdVNjYWxlICogdmVydGV4LnkgKyB1WU9mZnNldCwgMC4wLCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPFZFUlNJT04+XFxyXFxuXFxyXFxuI2RlZmluZSBOT1RISU5HXFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4jZGVmaW5lIEVTMzAwXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbmluIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZWxzZVxcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZlxcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1RXllO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRleHR1cmVTaXplO1xcclxcbnVuaWZvcm0gZmxvYXQgdVJhbmRvbTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0UG9zO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVPYmpDb2xvcjtcXHJcXG51bmlmb3JtIGZsb2F0IHVCYWxsUmFkaXVzO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNhbXBsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFscGhhO1xcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvd0FscGhhO1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbm91dCB2ZWM0IGZyYWdDb2xvcjtcXHJcXG4jZWxzZVxcclxcbiNkZWZpbmUgZnJhZ0NvbG9yIGdsX0ZyYWdDb2xvclxcclxcbiNkZWZpbmUgdGV4dHVyZSB0ZXh0dXJlMkRcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5jb25zdCBpbnQgTUFYX0JPVU5DRVMgPSAxMDtcXHJcXG5jb25zdCBmbG9hdCBFUFNJTE9OID0gMC4wMDAwMDE7XFxyXFxuY29uc3QgZmxvYXQgT0ZGU0VUID0gMC4wMDAxO1xcclxcbmNvbnN0IGZsb2F0IElORklOSVRZID0gMTAwMDAuMDtcXHJcXG5jb25zdCBmbG9hdCBMSUdIVF9TSVpFID0gMC4xO1xcclxcbiNkZWZpbmUgQkFMTF9DRU5URVIgdmVjMygwLCB1QmFsbFJhZGl1cywgMClcXHJcXG5jb25zdCB2ZWMzIERPTUVfQ0VOVEVSID0gdmVjMygwLCAwLCAwKTtcXHJcXG5jb25zdCBmbG9hdCBET01FX1JBRElVUyA9IDguMDtcXHJcXG5jb25zdCBmbG9hdCBWQUwgPSAwLjg7XFxyXFxuY29uc3QgdmVjMyBET01FX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEZMT09SX0NPTE9SID0gdmVjMyhWQUwsIFZBTCwgVkFMKTtcXHJcXG5jb25zdCB2ZWMzIEFNQklFTlRfQ09MT1IgPSB2ZWMzKDEuMCwgMS4wLCAxLjApO1xcclxcbmNvbnN0IGludCBOVU1fTElHSFRTID0gNjtcXHJcXG5jb25zdCBmbG9hdCBIRUlHSFQgPSA1LjA7XFxyXFxuY29uc3QgZmxvYXQgUkFESVVTID0gNC4wO1xcclxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTtcXHJcXG5cXHJcXG5zdHJ1Y3QgTGlnaHRcXHJcXG57XFxyXFxuICAgZmxvYXQgaW50ZW5zaXR5O1xcclxcbiAgIGZsb2F0IHNpemU7XFxyXFxuICAgdmVjMyBwb3M7XFxyXFxuICAgdmVjMyBjb2xvcjtcXHJcXG59O1xcclxcblxcclxcbiBMaWdodCBMaWdodHNbTlVNX0xJR0hUU107XFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG5zdHJ1Y3QgVHJpYW5nbGVcXHJcXG57XFxyXFxuICAgdmVjMyBwMDtcXHJcXG4gICB2ZWMzIHAxO1xcclxcbiAgIHZlYzMgcDI7XFxyXFxufTtcXHJcXG5cXHJcXG5zdHJ1Y3QgVm9sdW1lXFxyXFxue1xcclxcbiAgIGludCBzdGFydEluZGV4O1xcclxcbiAgIGludCBudW1UcmlhbmdsZXM7XFxyXFxuICAgdmVjMyBib3hNaW47XFxyXFxuICAgdmVjMyBib3hNYXg7XFxyXFxufTtcXHJcXG5cXHJcXG4vLyBUaGUgZm9sbG93aW5nIGxpbmUgaXMgcmVwbGFjZWQgd2l0aCBjb2RlIGdlbmVyYXRlZCBpbiBKYXZhU2NyaXB0XFxyXFxuY29uc3QgaW50IE5VTV9WRVJUSUNFUyA9IDxOVU1fVkVSVElDRVM+O1xcclxcbmNvbnN0IGludCBOVU1fVk9MVU1FUyA9IDxOVU1fVk9MVU1FUz47XFxyXFxuY29uc3QgaW50IE5VTV9UUklBTkdMRVMgPSA8TlVNX1RSSUFOR0xFUz47XFxyXFxuXFxyXFxubGF5b3V0KHN0ZDE0MCkgdW5pZm9ybSBNeVZlcnRpY2VzQmxvY2sgeyB2ZWMzIHZlcnRpY2VzW05VTV9WRVJUSUNFU107IH07XFxyXFxuXFxyXFxuc3RydWN0IElUcmlhbmdsZVxcclxcbntcXHJcXG4gICBpbnQgaTA7XFxyXFxuICAgaW50IGkxO1xcclxcbiAgIGludCBpMjtcXHJcXG59O1xcclxcblxcclxcbmxheW91dChzdGQxNDApIHVuaWZvcm0gTXlUcmlhbmdsZXNCbG9jayB7IElUcmlhbmdsZSB0cmlhbmdsZXNbTlVNX1RSSUFOR0xFU107IH07XFxyXFxuVHJpYW5nbGUgZ2V0VHJpYW5nbGUoaW50IGluZGV4KVxcclxcbntcXHJcXG4gICBJVHJpYW5nbGUgdHJpID0gdHJpYW5nbGVzW2luZGV4XTtcXHJcXG4gICB2ZWMzIHAwID0gdmVydGljZXNbdHJpLmkwXTtcXHJcXG4gICB2ZWMzIHAxID0gdmVydGljZXNbdHJpLmkxXTtcXHJcXG4gICB2ZWMzIHAyID0gdmVydGljZXNbdHJpLmkyXTtcXHJcXG4gICByZXR1cm4gVHJpYW5nbGUocDAsIHAxLCBwMik7XFxyXFxufVxcclxcblxcclxcbi8vIFRoZSBjZW50cmFsIG9iamVjdCBiZWluZyByZW5kZXJlZFxcclxcbnN0cnVjdCBPYmplY3RcXHJcXG57XFxyXFxuICAgVm9sdW1lIHZvbHVtZXNbTlVNX1ZPTFVNRVNdO1xcclxcbiAgIHZlYzMgYm94TWluO1xcclxcbiAgIHZlYzMgYm94TWF4O1xcclxcbn07XFxyXFxuXFxyXFxudW5pZm9ybSBPYmplY3Qgb2JqZWN0O1xcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0Qm94KGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgY29uc3QgdmVjMyBib3hNaW4sIGNvbnN0IHZlYzMgYm94TWF4KVxcclxcbntcXHJcXG4gICB2ZWMzIHJheUludiA9IDEuMCAvIHJheTtcXHJcXG4gICB2ZWMzIHRib3QgPSByYXlJbnYgKiAoYm94TWluIC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHR0b3AgPSByYXlJbnYgKiAoYm94TWF4IC0gb3JpZ2luKTtcXHJcXG4gICB2ZWMzIHRtaW4gPSBtaW4odHRvcCwgdGJvdCk7XFxyXFxuICAgdmVjMyB0bWF4ID0gbWF4KHR0b3AsIHRib3QpO1xcclxcbiAgIHZlYzIgdCA9IG1heCh0bWluLnh4LCB0bWluLnl6KTtcXHJcXG4gICBmbG9hdCB0MCA9IG1heCh0LngsIHQueSk7XFxyXFxuICAgdCA9IG1pbih0bWF4Lnh4LCB0bWF4Lnl6KTtcXHJcXG4gICBmbG9hdCB0MSA9IG1pbih0LngsIHQueSk7XFxyXFxuICAgcmV0dXJuIHQxID4gbWF4KHQwLCAwLjApO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdFZvbChjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIFZvbHVtZSB2b2wpXFxyXFxue1xcclxcbiAgIGlmICh2b2wubnVtVHJpYW5nbGVzID09IDApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgdm9sLmJveE1pbiwgdm9sLmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0T2JqKGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgT2JqZWN0IG9iamVjdClcXHJcXG57XFxyXFxuICAgcmV0dXJuIGludGVyc2VjdEJveChvcmlnaW4sIHJheSwgb2JqZWN0LmJveE1pbiwgb2JqZWN0LmJveE1heCk7XFxyXFxufVxcclxcblxcclxcbi8vIE3DtmxsZXLigJNUcnVtYm9yZSByYXktdHJpYW5nbGUgaW50ZXJzZWN0aW9uIGFsZ29yaXRobVxcclxcbi8vIHNvdXJjZTogaHR0cDovL2JpdC5seS8yTXhuUE1HXFxyXFxuZmxvYXQgaW50ZXJzZWN0VHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBUcmlhbmdsZSB0cmkpXFxyXFxue1xcclxcbiAgIHZlYzMgZWRnZTEsIGVkZ2UyLCBoLCBzLCBxO1xcclxcbiAgIGZsb2F0IGEsIGYsIHUsIHY7XFxyXFxuICAgZWRnZTEgPSB0cmkucDEgLSB0cmkucDA7XFxyXFxuICAgZWRnZTIgPSB0cmkucDIgLSB0cmkucDA7XFxyXFxuXFxyXFxuICAgaCA9IGNyb3NzKHJheSwgZWRnZTIpO1xcclxcbiAgIGEgPSBkb3QoZWRnZTEsIGgpO1xcclxcbiAgIGlmIChhYnMoYSkgPCBFUFNJTE9OKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICBmID0gMS4wIC8gYTtcXHJcXG4gICBzID0gb3JpZ2luIC0gdHJpLnAwO1xcclxcbiAgIHUgPSBmICogZG90KHMsIGgpO1xcclxcbiAgIGlmICh1IDwgMC4wIHx8IHUgPiAxLjApXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHEgPSBjcm9zcyhzLCBlZGdlMSk7XFxyXFxuICAgdiA9IGYgKiBkb3QocmF5LCBxKTtcXHJcXG4gICBpZiAodiA8IDAuMCB8fCAodSArIHYpID4gMS4wKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAvLyBBdCB0aGlzIHN0YWdlIHdlIGNhbiBjb21wdXRlIHQgdG8gZmluZCBvdXQgd2hlcmUgdGhlIGludGVyc2VjdGlvbiBwb2ludCBpcyBvbiB0aGUgbGluZS5cXHJcXG4gICBmbG9hdCB0ID0gZiAqIGRvdChlZGdlMiwgcSk7XFxyXFxuICAgaWYgKHQgPD0gRVBTSUxPTikgLy8gdGhpcyBtZWFucyB0aGF0IHRoZXJlIGlzIGEgbGluZSBpbnRlcnNlY3Rpb24gYnV0IG5vdCBhIHJheSBpbnRlcnNlY3Rpb24uXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIHJldHVybiB0OyAvLyByYXkgaW50ZXJzZWN0aW9uXFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yVHJpYW5nbGUodmVjMyBvcmlnaW4sIHZlYzMgaGl0LCBpbnQgdEluZGV4KVxcclxcbntcXHJcXG4gICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZSh0SW5kZXgpO1xcclxcbiAgIHZlYzMgbm9ybWFsID0gY3Jvc3ModHJpLnAxIC0gdHJpLnAwLCB0cmkucDIgLSB0cmkucDApO1xcclxcbiAgIG5vcm1hbCA9IG5vcm1hbGl6ZShub3JtYWwpO1xcclxcbiAgIGlmIChkb3Qobm9ybWFsLCBvcmlnaW4gLSBoaXQpID4gMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbm9ybWFsO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiAtbm9ybWFsO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuZmxvYXQgaW50ZXJzZWN0U3BoZXJlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXHJcXG4gICBmbG9hdCBhID0gZG90KHJheSwgcmF5KTtcXHJcXG4gICBmbG9hdCBiID0gMi4wICogZG90KHRvU3BoZXJlLCByYXkpO1xcclxcbiAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cyAqIHNwaGVyZVJhZGl1cztcXHJcXG4gICBmbG9hdCBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xcclxcbiAgIGlmIChkaXNjcmltaW5hbnQgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHQxID0gKC1iIC0gc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBmbG9hdCB0MiA9ICgtYiArIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgaWYgKHQxID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQyID4gMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdDI7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICByZXR1cm4gSU5GSU5JVFk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgbm9ybWFsRm9yU3BoZXJlKHZlYzMgaGl0LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICByZXR1cm4gKGhpdCAtIHNwaGVyZUNlbnRlcikgLyBzcGhlcmVSYWRpdXM7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6ICsgc2VlZCwgc2NhbGUpKSAqIDQzNzU4LjU0NTMgKyBzZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbihmbG9hdCBzZWVkLCB2ZWMzIG5vcm1hbClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KHUpO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXHJcXG4gICB2ZWMzIHNkaXIsIHRkaXI7XFxyXFxuICAgaWYgKGFicyhub3JtYWwueCkgPCAuNSlcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygxLCAwLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygwLCAxLCAwKSk7XFxyXFxuICAgfVxcclxcbiAgIHRkaXIgPSBjcm9zcyhub3JtYWwsIHNkaXIpO1xcclxcbiAgIHJldHVybiByICogY29zKGFuZ2xlKSAqIHNkaXIgKyByICogc2luKGFuZ2xlKSAqIHRkaXIgKyBzcXJ0KDEuIC0gdSkgKiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB6ID0gMS4wIC0gMi4wICogdTtcXHJcXG4gICBmbG9hdCByID0gc3FydCgxLjAgLSB6ICogeik7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgcmV0dXJuIHZlYzMociAqIGNvcyhhbmdsZSksIHIgKiBzaW4oYW5nbGUpLCB6KTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihzZWVkKSAqIHNxcnQocmFuZG9tKHZlYzMoMzYuNzUzOSwgNTAuMzY1OCwgMzA2LjI3NTkpLCBzZWVkKSk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW5TaGFkb3codmVjMyBvcmlnaW4sIHZlYzMgcmF5LCBmbG9hdCB0TGlnaHQpXFxyXFxue1xcclxcbiAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcbiAgIGlmICh0QmFsbCA8IHRMaWdodClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgaWYgKGludGVyc2VjdE9iaihvcmlnaW4sIHJheSwgb2JqZWN0KSlcXHJcXG4gICB7XFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fVk9MVU1FUzsgaSsrKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBWb2x1bWUgdm9sID0gb2JqZWN0LnZvbHVtZXNbaV07XFxyXFxuICAgICAgICAgaWYgKGludGVyc2VjdFZvbChvcmlnaW4sIHJheSwgdm9sKSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IHZvbC5zdGFydEluZGV4OyBpIDwgKHZvbC5zdGFydEluZGV4ICsgdm9sLm51bVRyaWFuZ2xlcyk7IGkrKylcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUoaSk7XFxyXFxuICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpIDwgdExpZ2h0KVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiNlbmRpZlxcclxcblxcclxcbiAgIHJldHVybiBmYWxzZTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZSBbMOKApjFdLCBpbmNsdWRpbmcgaHVlLlxcclxcbnZlYzQgcmdiMmhzdih2ZWM0IGMpXFxyXFxue1xcclxcbiAgIHZlYzQgSyA9IHZlYzQoMC4wLCAtMS4wIC8gMy4wLCAyLjAgLyAzLjAsIC0xLjApO1xcclxcbiAgIHZlYzQgcCA9IG1peCh2ZWM0KGMuYmcsIEsud3opLCB2ZWM0KGMuZ2IsIEsueHkpLCBzdGVwKGMuYiwgYy5nKSk7XFxyXFxuICAgdmVjNCBxID0gbWl4KHZlYzQocC54eXcsIGMuciksIHZlYzQoYy5yLCBwLnl6eCksIHN0ZXAocC54LCBjLnIpKTtcXHJcXG5cXHJcXG4gICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcXHJcXG4gICBmbG9hdCBlID0gMS4wZS0xMDtcXHJcXG4gICByZXR1cm4gdmVjNChhYnMocS56ICsgKHEudyAtIHEueSkgLyAoNi4wICogZCArIGUpKSwgZCAvIChxLnggKyBlKSwgcS54LCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBBbGwgY29tcG9uZW50cyBhcmUgaW4gdGhlIHJhbmdlWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IGhzdjJyZ2IodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDEuMCwgMi4wIC8gMy4wLCAxLjAgLyAzLjAsIDMuMCk7XFxyXFxuICAgdmVjMyBwID0gYWJzKGZyYWN0KGMueHh4ICsgSy54eXopICogNi4wIC0gSy53d3cpO1xcclxcbiAgIHJldHVybiB2ZWM0KGMueiAqIG1peChLLnh4eCwgY2xhbXAocCAtIEsueHh4LCAwLjAsIDEuMCksIGMueSksIGMuYSk7XFxyXFxufVxcclxcblxcclxcbnZlYzQgc2hpZnRUZW1wZXJhdHVyZSh2ZWM0IHJnYiwgZmxvYXQgZGVnLCBmbG9hdCB0aW50U3RyZW5ndGgpXFxyXFxue1xcclxcbiAgIHZlYzQgaHN2ID0gcmdiMmhzdihyZ2IpO1xcclxcbiAgIGhzdi54ICs9IGRlZyAvIDM2MC4wO1xcclxcbiAgIHZlYzQgZnVsbFRpbnRSZ2IgPSBoc3YycmdiKGhzdik7XFxyXFxuXFxyXFxuICAgcmV0dXJuIG1peChyZ2IsIGZ1bGxUaW50UmdiLCB0aW50U3RyZW5ndGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBUT0RPIG1vdmUgdG8gYSBjb21tb24gZmlsZVxcclxcbmZsb2F0IHRvR3JheSh2ZWM0IGMpXFxyXFxue1xcclxcbiAgIC8vIGxvdHMgb2Ygd2F5cyB0byBjb252ZXJ0IFJHQiB0byBncmF5IHNjYWxlLlxcclxcblxcclxcbiAgIC8vIHNpbXBsZSBhdmVyYWdpbmcgbWV0aG9kXFxyXFxuICAgLy8gcmV0dXJuIChjLnIgKyBjLmcgKyBjLmIpIC8gMy4wO1xcclxcblxcclxcbiAgIC8vIHJlbGF0aXZlIHBlcmNlcHR1YWwgdmFsdWVzXFxyXFxuICAgLy8gcmV0dXJuIDAuMyAqIGMuciArIDAuNTkgKiBjLmcgKyAwLjExICogYy5iO1xcclxcblxcclxcbiAgIC8vIGx1bWlub3NpdHkgbWVhc3VyZVxcclxcbiAgIGZsb2F0IGdhbW1hID0gMi4yO1xcclxcbiAgIGZsb2F0IHkgPSAwLjIxMjYgKiBwb3coYy5yLCBnYW1tYSkgKyAwLjcxNTIgKiBwb3coYy5nLCBnYW1tYSkgKyAuMDcyMiAqIHBvdyhjLmIsIGdhbW1hKTtcXHJcXG4gICBmbG9hdCBsID0gMTE2LjAgKiBwb3coeSwgMS4wIC8gMy4wKSAtIDE2LjA7XFxyXFxuICAgcmV0dXJuIGwgLyAxMDAuMDtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCBjYWxjdWxhdGVDb2xvcih2ZWMzIG9yaWdpbiwgdmVjMyByYXkpXFxyXFxue1xcclxcbiAgIHZlYzMgYWNjdW11bGF0ZWRDb2xvciA9IHZlYzMoMC4wKTtcXHJcXG4gICB2ZWMzIGNvbG9yTWFzayA9IHZlYzMoMS4wKTtcXHJcXG4gICB2ZWMzIGV5ZSA9IG9yaWdpbjtcXHJcXG4gICBib29sIG9iakhpdCA9IGZhbHNlO1xcclxcbiAgIGJvb2wgb2JqU2hhZG93ID0gZmFsc2U7XFxyXFxuICAgZmxvYXQgc3BlY3VsYXJDb250cmlidXRpb24gPSAwLjA7XFxyXFxuXFxyXFxuICAgLy8gbWFpbiByYXl0cmFjaW5nIGxvb3BcXHJcXG4gICBmb3IgKGludCBib3VuY2UgPSAwOyBib3VuY2UgPCBNQVhfQk9VTkNFUzsgYm91bmNlKyspXFxyXFxuICAge1xcclxcbiAgICAgIC8vIGNvbXB1dGUgdGhlIGludGVyc2VjdGlvbiB3aXRoIGV2ZXJ5dGhpbmdcXHJcXG4gICAgICBmbG9hdCB0QmFsbCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG4gICAgICB2ZWMzIHN1cmZhY2VDb2xvciA9IHZlYzMoMC41LCAwLjUsIDAuNSk7XFxyXFxuXFxyXFxuICAgICAgZmxvYXQgdE9iaiA9IElORklOSVRZO1xcclxcbiAgICAgIGludCB0SW5kZXg7XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBpZiAoaW50ZXJzZWN0T2JqKG9yaWdpbiwgcmF5LCBvYmplY3QpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9WT0xVTUVTOyBpKyspXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIFZvbHVtZSB2b2wgPSBvYmplY3Qudm9sdW1lc1tpXTtcXHJcXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0Vm9sKG9yaWdpbiwgcmF5LCB2b2wpKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBmb3IgKGludCBpID0gdm9sLnN0YXJ0SW5kZXg7IGkgPCAodm9sLnN0YXJ0SW5kZXggKyB2b2wubnVtVHJpYW5nbGVzKTsgaSsrKVxcclxcbiAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZShpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBmbG9hdCB0VHJpID0gbWluKHRPYmosIGludGVyc2VjdFRyaWFuZ2xlKG9yaWdpbiwgcmF5LCB0cmkpKTtcXHJcXG4gICAgICAgICAgICAgICAgICBpZiAodFRyaSA8IHRPYmopXFxyXFxuICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRPYmogPSB0VHJpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgIHRJbmRleCA9IGk7XFxyXFxuICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4gICAgICAvLyBpZiB0aGUgZmlyc3QgcmF5IGhpdHMgdGhlIGxpZ2h0LCByZXR1cm4gdGhlIGxpZ2h0IGNvbG9yLiBUaGlzXFxyXFxuICAgICAgLy8gc2ltdWxhdGVzIGRpc3BsYXlpbmcgdGhlIGxpZ2h0XFxyXFxuICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgZmxvYXQgdExpZ2h0ID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBMaWdodHNbaV0ucG9zLCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgaWYgKHRMaWdodCA8IHRCYWxsICYmIHRMaWdodCA8IHRPYmopXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHJldHVybiB2ZWM0KExpZ2h0c1tpXS5pbnRlbnNpdHkgKiBMaWdodHNbaV0uY29sb3IsIDEuMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBpbnRlcnNlY3Rpb25cXHJcXG4gICAgICBmbG9hdCB0RG9tZSA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICBmbG9hdCB0Rmxvb3IgPSBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICAgICAvLyBjaGVjayBmb3IgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZFxcclxcbiAgICAgIGlmIChyYXkueSA8IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gZGlzdGFuY2UgdG8gZmxvb3IgPSBudW0gdW5pdCB2ZWN0b3JzIHJlcXVpcmVkIHRvIHJlYWNoIHRoZSBmbG9vclxcclxcbiAgICAgICAgIHRGbG9vciA9IC1vcmlnaW4ueSAvIHJheS55O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGhpdFxcclxcbiAgICAgIGZsb2F0IHQgPSBtaW4obWluKHREb21lLCB0Rmxvb3IpLCBtaW4odEJhbGwsIHRPYmopKTtcXHJcXG5cXHJcXG4gICAgICAvLyBpbmZvIGFib3V0IGhpdFxcclxcbiAgICAgIHZlYzMgaGl0ID0gb3JpZ2luICsgcmF5ICogdDtcXHJcXG4gICAgICB2ZWMzIG5vcm1hbDtcXHJcXG5cXHJcXG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbFxcclxcbiAgICAgIGlmICh0ID09IHRGbG9vcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRkxPT1JfQ09MT1I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gdmVjMygwLjAsIDEuMCwgMC4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0QmFsbClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdmVjMyh1T2JqQ29sb3IpO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IG5vcm1hbEZvclNwaGVyZShoaXQsIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpIaXQgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRPYmopXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IHVPYmpDb2xvcjtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JUcmlhbmdsZShvcmlnaW4sIGhpdCwgdEluZGV4KTtcXHJcXG5cXHJcXG4gICAgICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9iakhpdCA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jZW5kaWZcXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHREb21lKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBET01FX0NPTE9SO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IC1ub3JtYWxGb3JTcGhlcmUoaGl0LCBET01FX0NFTlRFUiwgRE9NRV9SQURJVVMpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBjb2xvck1hc2sgKj0gc3VyZmFjZUNvbG9yO1xcclxcblxcclxcbiAgICAgIGlmIChsZW5ndGgoY29sb3JNYXNrKSA8IDAuMDEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gY29tcHV0ZSBkaWZmdXNlIGxpZ2h0aW5nIGNvbnRyaWJ1dGlvblxcclxcbiAgICAgICAgIHZlYzMgdG9MaWdodCA9IExpZ2h0c1tpXS5wb3MgLSBoaXQ7XFxyXFxuICAgICAgICAgdmVjMyB0b0xpZ2h0TiA9IG5vcm1hbGl6ZSh0b0xpZ2h0KTtcXHJcXG5cXHJcXG4gICAgICAgICAvLyB0cmFjZSBhIHNoYWRvdyByYXkgdG8gdGhlIGxpZ2h0XFxyXFxuICAgICAgICAgaWYgKGluU2hhZG93KGhpdCArIG5vcm1hbCAqIE9GRlNFVCwgdG9MaWdodE4sIGxlbmd0aCh0b0xpZ2h0KSkgPT0gZmFsc2UpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIC8vIGRpZmZ1c2UgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlmZnVzZSA9IG1heCgwLjAsIGRvdCh0b0xpZ2h0Tiwgbm9ybWFsKSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gc3BlY3VsYXIgY29tcG9uZW50XFxyXFxuICAgICAgICAgICAgdmVjMyB0b0V5ZSA9IGV5ZSAtIGhpdDtcXHJcXG4gICAgICAgICAgICB2ZWMzIG4ybCA9IHRvTGlnaHROO1xcclxcbiAgICAgICAgICAgIHZlYzMgbjJlID0gbm9ybWFsaXplKHRvRXllKTtcXHJcXG4gICAgICAgICAgICB2ZWMzIGJpc2VjdG9yID0gKG4ybCArIG4yZSkgLyBsZW5ndGgobjJsICsgbjJlKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzcGVjdWxhckNvZWZmaWNpZW50ID0gMC41O1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNoaW5pbmVzcyA9IDEwMC4wO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyID0gc3BlY3VsYXJDb2VmZmljaWVudCAqIHBvdyhtYXgoMC4wLCBkb3QoYmlzZWN0b3IsIG5vcm1hbCkpLCBzaGluaW5lc3MpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIGFwcGx5IGxpZ2h0IGZhbGwgb2ZmIGFzIGRpc3RhbmNlIHNxdWFyZXMuIFVzZSBhIG1pbiB2YWx1ZSBmb3IgdGhlXFxyXFxuICAgICAgICAgICAgLy8gbGlnaHQgc2l6ZSBvdGhlcndpc2UgZmFsbG9mZiBpcyB0b28gcmFwaWRcXHJcXG4gICAgICAgICAgICBmbG9hdCByYWRpdXMgPSBtYXgoMC43NSwgTGlnaHRzW2ldLnNpemUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IGRpc3QgPSBtYXgoMS4wLCAobGVuZ3RoKHRvTGlnaHQpIC0gcmFkaXVzKSAvIHJhZGl1cyk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgbGlnaHRJbnRlbnNpdHkgPSBMaWdodHNbaV0uaW50ZW5zaXR5IC8gKGRpc3QgKiBkaXN0KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9IGNvbG9yTWFzayAqIExpZ2h0c1tpXS5jb2xvciAqIGxpZ2h0SW50ZW5zaXR5ICogZGlmZnVzZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBUT0RPIGRlZmluZSBhIGNvbG9yIG1hc2sgZm9yIHNwZWN1bGFyIHJlZmxlY3Rpb25cXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gbWl4KHN1cmZhY2VDb2xvciwgTGlnaHRzW2ldLmNvbG9yLCAwLjgpICpcXHJcXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPVxcclxcbiAgICAgICAgICAgICAgICAobGVuZ3RoKHN1cmZhY2VDb2xvcikgKiBMaWdodHNbaV0uY29sb3IpICogbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBzcGVjdWxhckNvbnRyaWJ1dGlvbiArPSBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgZWxzZSBpZiAoYm91bmNlID09IDAgJiYgaSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpTaGFkb3cgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIG5leHQgb3JpZ2luXFxyXFxuICAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odVJhbmRvbSArIGZsb2F0KGJvdW5jZSksIG5vcm1hbCk7XFxyXFxuXFxyXFxuICAgICAgb3JpZ2luID0gaGl0O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICBmbG9hdCBhbHBoYSA9IDEuMDtcXHJcXG4gICBpZiAob2JqSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAob2JqU2hhZG93KVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVTaGFkb3dBbHBoYTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBhbHBoYSA9IHVMaWdodEFscGhhO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBhbHBoYSArPSBjbGFtcChzcGVjdWxhckNvbnRyaWJ1dGlvbiwgMC4wLCAxLjApO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWM0IHNjaWVuY2VDb2xvciA9IHZlYzQoY2xhbXAoYWNjdW11bGF0ZWRDb2xvciwgMC4wLCAxLjApLCBhbHBoYSk7XFxyXFxuICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICAvKlxcclxcbiAgIGlmIChvYmpIaXQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB2ZWM0KHRvQXJ0aXN0KHNjaWVuY2VDb2xvcikucmdiLCBhbHBoYSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHNjaWVuY2VDb2xvcjtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdmVjMyByYW5kID0gdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHVSYW5kb20pICogTElHSFRfU0laRTtcXHJcXG5cXHJcXG4gICBMaWdodHNbMF0uaW50ZW5zaXR5ID0gdUxpZ2h0SW50ZW5zaXR5O1xcclxcbiAgIExpZ2h0c1swXS5zaXplID0gTElHSFRfU0laRTtcXHJcXG4gICBMaWdodHNbMF0ucG9zID0gdUxpZ2h0UG9zICsgcmFuZDtcXHJcXG4gICBMaWdodHNbMF0uY29sb3IgPSB1TGlnaHRDb2xvcjtcXHJcXG5cXHJcXG4gICBmb3IgKGludCBpID0gMTsgaSA8IE5VTV9MSUdIVFM7IGkrKylcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgeCA9IFJBRElVUyAqIHNpbigyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLng7XFxyXFxuICAgICAgZmxvYXQgeSA9IEhFSUdIVCArIHJhbmQueTtcXHJcXG4gICAgICBmbG9hdCB6ID0gUkFESVVTICogY29zKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQuejtcXHJcXG5cXHJcXG4gICAgICBMaWdodHNbaV0uaW50ZW5zaXR5ID0gdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG4gICAgICBMaWdodHNbaV0uc2l6ZSA9IDIuMCAqIExJR0hUX1NJWkU7XFxyXFxuICAgICAgTGlnaHRzW2ldLnBvcyA9IHZlYzMoeCwgeSwgeik7XFxyXFxuICAgICAgTGlnaHRzW2ldLmNvbG9yID0gQU1CSUVOVF9DT0xPUjtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gbWVyZ2UgdGhlIG5ldyBjb2xvciBpbnRvIHRoZSBleGlzdGluZyB0ZXh0dXJlXFxyXFxuICAgdmVjNCB0ZXh0dXJlQ29sb3IgPSB0ZXh0dXJlKHVUZXh0dXJlLCBnbF9GcmFnQ29vcmQueHkgLyB1VGV4dHVyZVNpemUpO1xcclxcbiAgIHZlYzQgbmV3Q29sb3IgPSBjYWxjdWxhdGVDb2xvcih1RXllLCBpbml0aWFsUmF5KTtcXHJcXG4gICBmbG9hdCB3ZWlnaHQgPSAodVNhbXBsZSAvICgxLjAgKyB1U2FtcGxlKSk7XFxyXFxuICAgZnJhZ0NvbG9yID0gbWl4KG5ld0NvbG9yLCB0ZXh0dXJlQ29sb3IsIHdlaWdodCk7XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8VkVSU0lPTj5cXHJcXG5cXHJcXG4jZGVmaW5lIE5PVEhJTkdcXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiNkZWZpbmUgRVMzMDBcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudW5pZm9ybSB2ZWMzIHVFeWUsIHVSYXkwMCwgdVJheTAxLCB1UmF5MTAsIHVSYXkxMTtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5pbiB2ZWMzIHZlcnRleDtcXHJcXG5vdXQgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbHNlXFxyXFxuYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbmRpZiBcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuICAgaW5pdGlhbFJheSA9IG1peChtaXgodVJheTAwLCB1UmF5MDEsIHBlcmNlbnQueSksIG1peCh1UmF5MTAsIHVSYXkxMSwgcGVyY2VudC55KSwgcGVyY2VudC54KTtcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbi8vIGludGVycG9sYXRlZCB2YWx1ZXMgZnJvbSB0aGUgdmVydGV4IHNoYWRlclxcclxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcclxcbnZhcnlpbmcgdmVjMyB2VmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMyB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gZmxvYXQgdUFtYmllbnRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodERpcmVjdGlvbjtcXHJcXG51bmlmb3JtIHZlYzMgdUNvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gaW50IHVVc2VUaHJlc2hvbGRzO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRocmVzaG9sZDE7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGhyZXNob2xkMjtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdU1pZExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdURhcmtMaWdodDtcXHJcXG5cXHJcXG51bmlmb3JtIGludCB1VXNlU2hhZG93cztcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2hhZG93VGV4dHVyZTtcXHJcXG5cXHJcXG5ib29sIGluX3NoYWRvdyh2b2lkKVxcclxcbntcXHJcXG4gICBpZiAodVVzZVNoYWRvd3MgPT0gMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBUaGUgdmVydGV4IGxvY2F0aW9uIHJlbmRlcmVkIGZyb20gdGhlIGxpZ2h0IHNvdXJjZSBpcyBhbG1vc3QgaW4gTm9ybWFsaXplZFxcclxcbiAgIC8vIERldmljZSBDb29yZGluYXRlcyAoTkRDKSwgYnV0IHRoZSBwZXJzcGVjdGl2ZSBkaXZpc2lvbiBoYXMgbm90IGJlZW5cXHJcXG4gICAvLyBwZXJmb3JtZWQgeWV0LiBQZXJmb3JtIHRoZSBwZXJzcGVjdGl2ZSBkaXZpZGUuIFRoZSAoeCx5LHopIHZlcnRleCBsb2NhdGlvblxcclxcbiAgIC8vIGNvbXBvbmVudHMgYXJlIG5vdyBlYWNoIGluIHRoZSByYW5nZSBbLTEuMCwrMS4wXS5cXHJcXG4gICAvLyB2ZWMzIHZlcnRleF9yZWxhdGl2ZV90b19saWdodCA9IHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnh5eiAvIHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnc7XFxyXFxuICAgdmVjMyB2ZXJ0ZXggPSB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbiAgIC8vIENvbnZlcnQgdGhlIHRoZSB2YWx1ZXMgZnJvbSBOb3JtYWxpemVkIERldmljZSBDb29yZGluYXRlcyAocmFuZ2UgWy0xLjAsKzEuMF0pXFxyXFxuICAgLy8gdG8gdGhlIHJhbmdlIFswLjAsMS4wXS4gVGhpcyBtYXBwaW5nIGlzIGRvbmUgYnkgc2NhbGluZ1xcclxcbiAgIC8vIHRoZSB2YWx1ZXMgYnkgMC41LCB3aGljaCBnaXZlcyB2YWx1ZXMgaW4gdGhlIHJhbmdlIFstMC41LCswLjVdIGFuZCB0aGVuXFxyXFxuICAgLy8gc2hpZnRpbmcgdGhlIHZhbHVlcyBieSArMC41LlxcclxcbiAgIHZlcnRleCA9IHZlcnRleCAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICAvLyBHZXQgdGhlIHogdmFsdWUgb2YgdGhpcyBmcmFnbWVudCBpbiByZWxhdGlvbnNoaXAgdG8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAvLyBUaGlzIHZhbHVlIHdhcyBzdG9yZWQgaW4gdGhlIHNoYWRvdyBtYXAgKGRlcHRoIGJ1ZmZlciBvZiB0aGUgZnJhbWUgYnVmZmVyKVxcclxcbiAgIC8vIHdoaWNoIHdhcyBwYXNzZWQgdG8gdGhlIHNoYWRlciBhcyBhIHRleHR1cmUgbWFwLlxcclxcbiAgIC8vIHZlYzQgdGV4dHVyZVZhbHVlID0gdGV4dHVyZTJEKHVTaGFkb3dTYW1wbGVyLCB2ZXJ0ZXgueHkpO1xcclxcblxcclxcbiAgIC8vIFRoZSB0ZXh0dXJlIG1hcCBjb250YWlucyBhIHNpbmdsZSBkZXB0aCB2YWx1ZSBmb3IgZWFjaCBwaXhlbC4gSG93ZXZlcixcXHJcXG4gICAvLyB0aGUgdGV4dHVyZTJEIHNhbXBsZXIgYWx3YXlzIHJldHVybnMgYSBjb2xvciBmcm9tIGEgdGV4dHVyZS4gRm9yIGFcXHJcXG4gICAvLyBnbC5ERVBUSF9DT01QT05FTlQgdGV4dHVyZSwgdGhlIGNvbG9yIGNvbnRhaW5zIHRoZSBkZXB0aCB2YWx1ZSBpblxcclxcbiAgIC8vIGVhY2ggb2YgdGhlIGNvbG9yIGNvbXBvbmVudHMuIElmIHRoZSB2YWx1ZSB3YXMgZCwgdGhlbiB0aGUgY29sb3IgcmV0dXJuZWRcXHJcXG4gICAvLyBpcyAoZCxkLGQsMSkuIFRoaXMgaXMgYSBcXFwiY29sb3JcXFwiIChkZXB0aCkgdmFsdWUgYmV0d2VlbiBbMC4wLCsxLjBdLlxcclxcbiAgIGZsb2F0IHNoYWRvd21hcF9kaXN0YW5jZSA9IHRleHR1cmUyRCh1U2hhZG93VGV4dHVyZSwgdmVydGV4Lnh5KS5yO1xcclxcblxcclxcbiAgIC8vIFRlc3QgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBmcmFnbWVudCBhbmQgdGhlIGxpZ2h0IHNvdXJjZSBhc1xcclxcbiAgIC8vIGNhbGN1bGF0ZWQgdXNpbmcgdGhlIHNoYWRvd21hcCB0cmFuc2Zvcm1hdGlvbiAodmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0LnopIGFuZFxcclxcbiAgIC8vIHRoZSBzbWFsbGVzdCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjbG9zZXN0IGZyYWdtZW50IHRvIHRoZSBsaWdodCBzb3VyY2VcXHJcXG4gICAvLyBmb3IgdGhpcyBsb2NhdGlvbiwgYXMgc3RvcmVkIGluIHRoZSBzaGFkb3dtYXAuIFdoZW4gdGhlIGNsb3Nlc3RcXHJcXG4gICAvLyBkaXN0YW5jZSB0byB0aGUgbGlnaHQgc291cmNlIHdhcyBzYXZlZCBpbiB0aGUgc2hhZG93bWFwLCBzb21lXFxyXFxuICAgLy8gcHJlY2lzaW9uIHdhcyBsb3N0LiBUaGVyZWZvcmUgd2UgbmVlZCBhIHNtYWxsIHRvbGVyYW5jZSBmYWN0b3IgdG9cXHJcXG4gICAvLyBjb21wZW5zYXRlIGZvciB0aGUgbG9zdCBwcmVjaXNpb24uXFxyXFxuICAgZmxvYXQgdG9sID0gMC4wMDE7XFxyXFxuICAgaWYgKHZlcnRleC56IDw9IHNoYWRvd21hcF9kaXN0YW5jZSArIHRvbClcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gVGhpcyBzdXJmYWNlIHJlY2VpdmVzIGZ1bGwgbGlnaHQgYmVjYXVzZSBpdCBpcyB0aGUgY2xvc2VzdCBzdXJmYWNlXFxyXFxuICAgICAgLy8gdG8gdGhlIGxpZ2h0LlxcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBUaGlzIHN1cmZhY2UgaXMgaW4gYSBzaGFkb3cgYmVjYXVzZSB0aGVyZSBpcyBhIGNsb3NlciBzdXJmYWNlIHRvXFxyXFxuICAgICAgLy8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGlmIChpbl9zaGFkb3coKSlcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2ZWMzKHVBbWJpZW50SW50ZW5zaXR5KSwgMS4wKTtcXHJcXG4gICAgICByZXR1cm47XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzMgZXllID0gdmVjMygwLjAsIDAuMCwgLTEwLjApO1xcclxcbiAgIHZlYzMgdG9MaWdodCA9IG5vcm1hbGl6ZSgtdUxpZ2h0RGlyZWN0aW9uKTtcXHJcXG4gICB2ZWMzIHRvRXllID0gbm9ybWFsaXplKGV5ZSAtIHZWZXJ0ZXgpO1xcclxcbiAgIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZOb3JtYWwpOyAvLyB2Tm9ybWFsIGlzIGludGVycG9sYXRlZCBhbmQgbm8gbG9uZyBub3JtYWxcXHJcXG5cXHJcXG4gICAvLyBjb21wdXRlIGRpZmZ1c2UgY29udHJpYnV0aW9uID0gY29zIG9mIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvcnMgKGRvdCBwcm9kdWN0KVxcclxcbiAgIGZsb2F0IGRpZmZ1c2VGYWN0b3IgPSBjbGFtcChkb3Qobm9ybWFsLCB0b0xpZ2h0KSwgMC4wLCAxLjApO1xcclxcbiAgIGZsb2F0IGRpZmZ1c2UgPSBkaWZmdXNlRmFjdG9yICogdUxpZ2h0SW50ZW5zaXR5O1xcclxcblxcclxcbiAgIC8vIGNvbXB1dGUgc3BlY3VsYXIgY29udHJpYnV0aW9uXFxyXFxuICAgZmxvYXQgc2hpbmluZXNzID0gNTAuMDtcXHJcXG4gICB2ZWMzIHJlZmxlY3Rpb24gPSBub3JtYWxpemUoMi4wICogZG90KG5vcm1hbCwgdG9MaWdodCkgKiBub3JtYWwgLSB0b0xpZ2h0KTtcXHJcXG4gICBmbG9hdCBjb3NBbmdsZSA9IGNsYW1wKGRvdChyZWZsZWN0aW9uLCB0b0V5ZSksIDAuMCwgMS4wKTsgLy8gY2xhbXAgdG8gYXZvaWQgdmFsdWVzID4gOTAgZGVnXFxyXFxuICAgZmxvYXQgc3BlY3VsYXIgPSAwLjIgKiBwb3coY29zQW5nbGUsIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgZmxvYXQgcmdiO1xcclxcbiAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICByZ2IgPSB1QW1iaWVudEludGVuc2l0eSArIGRpZmZ1c2UgKyBzcGVjdWxhcjtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB0aHJlc2hvbGQgPSAxLjAgLSBkaWZmdXNlRmFjdG9yO1xcclxcblxcclxcbiAgICAgIGZsb2F0IHYxID0gbWluKHVUaHJlc2hvbGQxLCB1VGhyZXNob2xkMik7XFxyXFxuICAgICAgZmxvYXQgdjIgPSBtYXgodVRocmVzaG9sZDEsIHVUaHJlc2hvbGQyKTtcXHJcXG5cXHJcXG4gICAgICBpZiAodGhyZXNob2xkIDwgdjEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVMaWdodExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCB2MilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmdiID0gdU1pZExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCAxLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVEYXJrTGlnaHQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgLy8gaW4gc2hhZG93XFxyXFxuICAgICAgICAgcmdiID0gdUFtYmllbnRJbnRlbnNpdHk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlmIChzcGVjdWxhciA+IDAuMDUpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IDEuMDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzMgcmdidiA9IHZlYzMocmdiLCByZ2IsIHJnYik7XFxyXFxuICAgcmdidiAqPSB1Q29sb3I7XFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChyZ2J2LCAxLjApO1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiYXR0cmlidXRlIHZlYzMgYVZlcnRleDtcXHJcXG5hdHRyaWJ1dGUgdmVjMyBhTm9ybWFsO1xcclxcblxcclxcbnVuaWZvcm0gbWF0NCBtb2RlbDtcXHJcXG51bmlmb3JtIG1hdDQgdmlldztcXHJcXG51bmlmb3JtIG1hdDQgc2hhZG93VmlldztcXHJcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXHJcXG52YXJ5aW5nIHZlYzMgdlZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCk7XFxyXFxuICAgdk5vcm1hbCA9IChtb2RlbCAqIHZlYzQoYU5vcm1hbCwgMC4wKSkueHl6O1xcclxcbiAgIHZWZXJ0ZXggPSAobW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCkpLnh5ejtcXHJcXG4gICB2U2hhZG93VmVydGV4ID0gKHNoYWRvd1ZpZXcgKiBtb2RlbCAqIHZlYzQoYVZlcnRleCwgMS4wKSkueHl6O1xcclxcbn1cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=