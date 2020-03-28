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
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n#MainCanvas {\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n#Overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: transparent;\r\n  user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n.SliderLabel {\r\n  display: inline-block;\r\n  width: 25%;\r\n  text-align: right;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.SliderHeader {\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  color: gray;\r\n}\r\n\r\n.SliderRange {\r\n  width: 50%;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  border-radius: 15px;\r\n  height: 15px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.PlanesApp .SliderRange {\r\n  width: 35%;\r\n}\r\n\r\n.PlanesApp .SliderLabel {\r\n  width: 18%;\r\n}\r\n\r\n.PlanesApp #ThresholdCanvas {\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 150px;\r\n  height: 150px;\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n.SliderRange::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n}\r\n\r\n.SliderRange::-moz-range-thumb {\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n  cursor: pointer;\r\n}\r\n\r\n.SliderColorSpan {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 5px;\r\n  border-radius: 50%;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#drawTime {\r\n  position: absolute;\r\n  top: -495px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  font-size: 8pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#modeButton {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: yellow;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#progressSpan {\r\n  position: absolute;\r\n  bottom: 3px;\r\n  left: 0px;\r\n  right: 0px;\r\n  height: 5px;\r\n  background-color: rgba(50, 205, 50, 0.75);\r\n}\r\n\r\n/* Style the tab */\r\n.Tabs {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Style the buttons that are used to open the tab content */\r\n.Tabs button {\r\n  background-color: #fff;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  font-size: 12pt;\r\n  color: #333;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n.Tabs button:hover {\r\n  background-color: #ddd;\r\n  color: #000;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n.Tabs button.active {\r\n  background-color: #eee;\r\n  color: #000;\r\n}\r\n\r\n/* Style the tab content */\r\n.TabContent {\r\n  display: none;\r\n  padding: 20px 12px;\r\n  background-color: #eee;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .SliderHeader {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .SliderLabel {\r\n    width: 30%;\r\n    font-size: 40px;\r\n    padding-bottom: 18px;\r\n  }\r\n\r\n  .SliderRange {\r\n    width: 45%;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .PlanesApp .SliderRange {\r\n    width: 30%;\r\n  }\r\n\r\n  .PlanesApp .SliderLabel {\r\n    width: 20%;\r\n  }\r\n\r\n  .PlanesApp #ThresholdCanvas {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: rgb(128, 128, 150);\r\n  }\r\n\r\n  .SliderRange::-webkit-slider-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderRange::-moz-range-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderColorSpan {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .SliderValueSpan {\r\n    font-size: 40px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #drawTime {\r\n    top: -960px;\r\n    left: 4px;\r\n    font-size: 16pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #modeButton {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  .Tabs button {\r\n    padding: 20px 40px;\r\n    font-size: 40px;\r\n  }\r\n}\r\n", ""]);
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
        var _this = this;
        var div = document.createElement('div');
        div.className = 'PlanesApp';
        var container = document.createElement('div');
        container.className = 'container';
        div.appendChild(container);
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'MainCanvas';
        container.appendChild(this.canvas);
        this.overlay = document.createElement('span');
        this.overlay.id = 'Overlay';
        container.appendChild(this.overlay);
        var size = 512;
        if (_Globals__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) {
            size = document.body.clientWidth;
        }
        this.canvas.width = size;
        this.canvas.height = size;
        //this.overlay.style.width = size;
        //this.overlay.height = size;
        div.style.width = size + 'px';
        this.overlay.style.lineHeight = size + 'px'; // vertically center text
        var context = this.canvas.getContext('webgl');
        if (!context) {
            // TODO display a message about not being able to create a WebGL context
            console.log("Unable to get WebGL context");
        }
        _Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"].gl = context;
        this.renderer = new _PlanesRenderer__WEBPACK_IMPORTED_MODULE_3__["PlanesRenderer"]();
        this.handler = new _PointerEventHandler__WEBPACK_IMPORTED_MODULE_10__["PointerEventHandler"](this.canvas);
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
        this.modeButton = document.createElement('span');
        this.modeButton.id = 'modeButton';
        this.modeButton.innerHTML = 'View';
        this.pointerMode = PointerMode.View;
        this.modeButton.onclick = function () {
            _this.toggleMode();
        };
        container.appendChild(this.modeButton);
        var container2 = document.createElement('div');
        container2.className = 'container';
        div.appendChild(container2);
        this.thresholdCtrl = new _ThresholdCtrl__WEBPACK_IMPORTED_MODULE_9__["ThresholdCtrl"](container2, this);
        this.highlightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](container2, {
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
        this.lightLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](container2, {
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
        this.midLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](container2, {
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
        this.darkLightSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](container2, {
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
        this.shadowSlider = new _Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](container2, {
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
        this.loadModel(this.query)
            .then(function (tObj) {
            requestAnimationFrame(function () { return _this.tick(); });
        })
            .catch(function (err) {
            _this.overlay.innerText = err.toString();
        });
        return div;
    };
    PlanesApp.prototype.loadModel = function (query) {
        var _this = this;
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
            var promise = new Promise(function (resolve, reject) {
                var worker = new worker_loader_name_LoaderWorker_worker_js_LoaderWorker__WEBPACK_IMPORTED_MODULE_11___default.a();
                var tStart = Date.now();
                worker.onmessage = function (_a) {
                    var data = _a.data;
                    if (typeof data === 'string') {
                        // avoid flashing messages for things that happen very quickly.
                        if (Date.now() - tStart > 500) {
                            _this.overlay.innerText = data;
                        }
                    }
                    else {
                        var tObj = _TriangleObj__WEBPACK_IMPORTED_MODULE_6__["TriangleObj"].import(data);
                        _this.renderer.setModel(tObj);
                        _this.orient(tObj, query);
                        _this.overlay.innerText = '';
                        resolve(tObj);
                    }
                };
                var file = query;
                worker.postMessage(file);
            });
            return promise;
        }
        else {
            // TODO multi line error messages not supported
            return Promise.reject('Unknown Model:' + query);
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
                this.modeButton.innerText = 'Light';
                this.pointerMode = PointerMode.Light;
                break;
            case PointerMode.Light:
                this.modeButton.innerText = 'View';
                this.pointerMode = PointerMode.View;
                break;
        }
    };
    PlanesApp.prototype.onDown = function (pos) {
        this.pointerModeSpecial = (pos.x < 0.1 * this.canvas.width) ? true : false;
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
                if (this.pointerModeSpecial) {
                    /*
                    let sPos = SphericalCoord.fromXYZ(this.renderer.uLightDirection.values);
                    this.pos.radius -= (y - old.y) * 0.005;
                    this.pos.radius = clamp(this.pos.radius, Uniforms.uBallRadius + 0.5, 5);
                    Uniforms.uLightPos.values = this.pos.toXYZ();
                    */
                }
                else {
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
                }
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
        var size = this.canvas.width;
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
        var KNOB_LENGTH = 25;
        var KNOB_RADIUS = 8;
        var r = displaySize * ballImageData.ballRadius;
        var s1 = this.getPt(this.ballCenter, this.app.renderer.threshold1, r);
        this.p1 = this.getPt(this.ballCenter, this.app.renderer.threshold1, r + KNOB_LENGTH);
        var s2 = this.getPt(this.ballCenter, this.app.renderer.threshold2, r);
        this.p2 = this.getPt(this.ballCenter, this.app.renderer.threshold2, r + KNOB_LENGTH);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yQW5hbHl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4ZWRUcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aFRyYWNlckFwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aFRyYWNlclJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXNBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5lc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Qb2ludGVyRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Qcm9maWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGhlcmljYWxDb29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVGhyZXNob2xkQ3RybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVBcnJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVDdWJlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iai50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZVNwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZvbHVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsTWF0LnRzIiwid2VicGFjazovLy8uL3NyYy9nbE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xUZXh0dXJlRnJhbWVCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVW5pZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xVbmlmb3JtQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVmVjLnRzIiwid2VicGFjazovLy8uL3NyYy9odG1sQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvcldpdGhBbHBoYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9TY3JlZW5WZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGxhbmVzRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QbGFuZXNWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIl0sIm5hbWVzIjpbXSwi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O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUNJO1lBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV2RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RyxPQUFPLElBQUksb0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztJQUNKLENBQUM7SUFDSixpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQUksRUFBRSxHQUFtRCxJQUFJLENBQUM7QUFFOUQsSUFBSSxRQUFRLEdBQUcsMkJBQTJCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVyRSxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDMUQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2QsT0FBTyxHQUFHLENBQUM7S0FDYjtTQUNJLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQztLQUNiO1NBQ0k7UUFDRixPQUFPLEtBQUssQ0FBQztLQUNmO0FBQ0osQ0FBQztBQUVNLFNBQVMsS0FBSyxDQUFDLEdBQVc7SUFDOUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2hDLENBQUM7QUFFTSxTQUFTLEtBQUssQ0FBQyxHQUFXO0lBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNoQyxDQUFDO0FBRU0sU0FBUyxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxHQUFXO0lBQ3BELE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFTSxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVO0lBQzlELE9BQU8sTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDbEYsQ0FBQztBQUVEO0lBQUE7SUFRQSxDQUFDO0lBUEUsc0JBQWtCLGFBQUU7YUFBcEI7WUFDRyxPQUFPLEVBQUUsQ0FBQztRQUNiLENBQUM7YUFFRCxVQUFxQixPQUF1RDtZQUN6RSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLENBQUM7OztPQUpBO0lBS0osY0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdENEO0FBQUE7QUFBQTs7R0FFRztBQUNIO0lBV0cseUJBQ0csUUFBa0IsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFDekQsT0FBaUIsRUFBRSxHQUFZLEVBQUUsR0FBWSxFQUFFLEdBQVk7UUFFM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ25CO2FBQ0k7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFFZjs7Ozs7Ozs7O2NBU0U7U0FDSjtJQUNKLENBQUM7SUFFRCxzQkFBSSwrQkFBRTthQUFOO1lBQ0csT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLCtCQUFFO2FBQU47WUFDRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksK0JBQUU7YUFBTjtZQUNHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBRTthQUFOO1lBQ0csT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLCtCQUFFO2FBQU47WUFDRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksK0JBQUU7YUFBTjtZQUNHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7YUFBUjtZQUNHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7YUFBUjtZQUNHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFFTSx1Q0FBYSxHQUFwQjtRQUNHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDSixzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdEdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDcUM7QUFDckM7QUFDSztBQUNZO0FBQ2hCO0FBQ007QUFDMEI7QUFDdkI7QUFFTztBQUNKO0FBQ007QUFFcEQsSUFBSSxTQUFTLEdBQUc7SUFDYixJQUFJLG9EQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLElBQUksb0RBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxvREFBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixJQUFJLG9EQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLGtDQUFrQztJQUNsQyxJQUFJLG9EQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsOEJBQThCO0NBQ2hDLENBQUM7QUFFRixJQUFLLFdBR0o7QUFIRCxXQUFLLFdBQVc7SUFDYiw2Q0FBSTtJQUNKLCtDQUFLO0FBQ1IsQ0FBQyxFQUhJLFdBQVcsS0FBWCxXQUFXLFFBR2Y7QUFFRDtJQTRCRyx1QkFBbUIsS0FBYTtRQXZCeEIsZ0JBQVcsR0FBZ0IsV0FBVyxDQUFDLElBQUksQ0FBQztRQUM1Qyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFTM0IsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBRVosY0FBUyxHQUFHLEtBQUssQ0FBQztRQUlsQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsR0FBRyxDQUFDO1FBS2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQXVLQztRQXRLRSxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDbEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLElBQUksT0FBTyxHQUFtRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUNyRTtRQUVELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWCx3RUFBd0U7WUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsZ0RBQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLFVBQUMsS0FBaUI7WUFDMUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUU3QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEU7UUFDSixDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFpQjtZQUN6QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFDLEtBQWlCO1lBQ3hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFpQjtZQUN6QyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlCLHdGQUF3RjtZQUN4RixPQUFPLEtBQUssQ0FBQztRQUNoQixDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFpQjtZQUN6QyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFDLEtBQUs7WUFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsVUFBQyxLQUFLO1lBQzlCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFpQjtZQUMvQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0VBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsK0JBQStCO1lBQy9CLHFCQUFxQixDQUFDLGNBQU0sWUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztRQUVGLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDekIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFdBQVcsQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDO1FBQy9CLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbkMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQztRQUN6QixNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDcEMsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNkLFFBQVEsS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDdkIsS0FBSyxXQUFXLENBQUMsSUFBSTtvQkFDbEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDckMsTUFBTTtnQkFFVCxLQUFLLFdBQVcsQ0FBQyxLQUFLO29CQUNuQixNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNwQyxNQUFNO2FBQ1g7UUFDSixDQUFDO1FBQ0QsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELFlBQVksQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFcEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDhDQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3BDLEVBQUUsRUFBRSxnQkFBZ0I7WUFDcEIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLGtEQUFRLENBQUMsZUFBZSxHQUFHLEdBQUc7WUFDckMsTUFBTSxFQUFFLENBQUMsb0RBQVMsQ0FBQyxLQUFLLEVBQUUsb0RBQVMsQ0FBQyxLQUFLLENBQUM7WUFDMUMsT0FBTyxFQUFFO2dCQUNOLGtEQUFRLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDNUQsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLENBQUM7U0FDSCxDQUFDLENBQUM7UUFFSCwwQkFBMEI7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyw4RUFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDhDQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3JDLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUsOEVBQXNCLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDbEQsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxPQUFPLEVBQUUsVUFBQyxNQUFjLElBQU8sT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBQyxDQUFDO1NBQ3RFLENBQUMsQ0FBQztRQUVILDJCQUEyQjtRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDhDQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3BDLEVBQUUsRUFBRSxXQUFXO1lBQ2YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsT0FBTyxFQUFFO2dCQUNOLGtEQUFRLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO2dCQUNsRCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQztTQUNILENBQUMsQ0FBQztRQUVILDhDQUE4QztRQUM5QyxrREFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUVsRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSw4Q0FBTSxDQUFDLEdBQUcsRUFBRTtZQUMzQyxFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEtBQUssRUFBRSxlQUFlO1lBQ3RCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsa0RBQVEsQ0FBQyxzQkFBc0IsR0FBRyxHQUFHO1lBQzVDLE1BQU0sRUFBRSxDQUFDLG9EQUFTLENBQUMsS0FBSyxFQUFFLG9EQUFTLENBQUMsS0FBSyxDQUFDO1lBQzFDLE9BQU8sRUFBRTtnQkFDTixrREFBUSxDQUFDLHNCQUFzQixHQUFHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUMxRSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsQ0FBQztTQUNILENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVPLGlDQUFTLEdBQWpCLFVBQWtCLEtBQWE7UUFDNUIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLGdCQUFnQixFQUFFO1lBQ3BELGtEQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksOERBQWMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjthQUNJLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxjQUFjLEVBQUU7WUFDdkQsa0RBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksTUFBTSxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSwyREFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFDSSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JELGtEQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUN6QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ2YsSUFBSSxDQUFDLGFBQUcsSUFBSSxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2lCQUN2QixJQUFJLENBQUMsYUFBRztnQkFDTixJQUFJLElBQUksR0FBRyxJQUFJLGlFQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDZixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixPQUFPLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1NBQ1I7YUFDSTtZQUNGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNKLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUVHLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLG9EQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRiw2QkFBNkI7UUFDN0Isa0RBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUVyRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLDhCQUFNLEdBQWQsVUFBZSxDQUFTLEVBQUUsQ0FBUztRQUVoQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ25CLE9BQU87U0FDVDtRQUFBLENBQUM7UUFFRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXZFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsR0FBRyxHQUFHLDhEQUFjLENBQUMsT0FBTyxDQUFDLGtEQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFTyw4QkFBTSxHQUFkLFVBQWUsQ0FBUyxFQUFFLENBQVM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO2dCQUN4QyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLHNEQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZDO3FCQUNJO29CQUNGLDhEQUE4RDtvQkFDOUQsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUN0QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBRXRDLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQzFEO2FBQ0g7aUJBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBRTlDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxzREFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGtEQUFRLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEUsa0RBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQy9DO3FCQUNJO29CQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxzREFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDakUsa0RBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQy9DO2FBQ0g7WUFFRCwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWYsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSyw2QkFBSyxHQUFiLFVBQWMsQ0FBUyxFQUFFLENBQVM7UUFDL0IsNkZBQTZGO1FBQzdGLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVuQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFFWCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsT0FBTyxJQUFJLENBQUM7YUFDZDtpQkFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsT0FBTyxJQUFJLENBQUM7YUFDZDtpQkFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsT0FBTyxJQUFJLENBQUM7YUFDZDtTQUNIO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVPLHNDQUFjLEdBQXRCO1FBQ0csSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQy9CLEtBQUssOERBQVUsQ0FBQyxNQUFNO2dCQUNuQixXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsTUFBTTtZQUVULEtBQUssOERBQVUsQ0FBQyxNQUFNO2dCQUNuQixXQUFXLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO2dCQUMxRCxNQUFNO1lBRVQsS0FBSyw4REFBVSxDQUFDLEtBQUs7Z0JBQ2xCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2dCQUNyQyxNQUFNO1lBRVQsS0FBSyw4REFBVSxDQUFDLEtBQUs7Z0JBQ2xCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7Z0JBQ25ELE1BQU07U0FDWDtJQUNKLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUNHLElBQUksQ0FBQyxTQUFTLEdBQUcsNkNBQU0sQ0FBQyxVQUFVLENBQy9CLGtEQUFRLENBQUMsSUFBSSxFQUNiLElBQUksNkNBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRyxlQUFlO1FBQ3ZDLElBQUksNkNBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRyxZQUFZO1NBQ3RDLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLDZDQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUFBLENBQUM7SUFFTSxzQ0FBYyxHQUF0QjtRQUNHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUFBLENBQUM7SUFFSywrQkFBTyxHQUFkO1FBQ0csSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7SUFDSixDQUFDO0lBRU0sNEJBQUksR0FBWCxVQUFZLEdBQVc7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFBQSxpQkFjQztRQVpFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLGtEQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsa0RBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckYsa0RBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0Qsa0RBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUVELHFCQUFxQixDQUFDLGNBQU0sWUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEI7UUFFRyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ2hFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pCO1FBRUQsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsa0RBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDL0YsQ0FBQztJQUVPLHNDQUFjLEdBQXRCO1FBQ0csSUFBSSxRQUFRLEdBQUcsa0RBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBb0IsQ0FBQztRQUN0RSxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMvQzthQUNJO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1NBQ25DO0lBQ0osQ0FBQztJQUNKLG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM1Y0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNRO0FBQ2tDO0FBQ0k7QUFDRjtBQUNJO0FBQ3ZDO0FBQ0o7QUFDRztBQUNIO0FBQ0U7QUFDRTtBQUNNO0FBRUU7QUFFbEQ7O0dBRUc7QUFDSCxJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDbkIsK0NBQVU7SUFDViw2Q0FBUztJQUNULCtDQUFVO0lBQ1YsNkNBQVM7QUFDWixDQUFDLEVBTFcsVUFBVSxLQUFWLFVBQVUsUUFLckI7QUFFRDs7R0FFRztBQUNIO0lBeUJHLDRCQUFtQixJQUFpQjtRQWQ1QixhQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUM3QixlQUFVLEdBQUc7WUFDbEIsVUFBVSxDQUFDLE1BQU07WUFDakIsVUFBVSxDQUFDLEtBQUs7WUFDaEIsVUFBVSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztRQUVNLGFBQVEsR0FBRztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDUixDQUFDO1FBSUMsbUVBQW1FO1FBQ25FLElBQUksaURBQVEsRUFBRTtZQUNYLGtEQUFRLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUM5QjthQUNJO1lBQ0YsK0JBQStCO1lBQy9CLGtEQUFRLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw2REFBYSxDQUFDLGtEQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekQsc0VBQXNFO1FBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsMkNBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QywyQ0FBRSxDQUFDLFVBQVUsQ0FBQywyQ0FBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsMkNBQUUsQ0FBQyxVQUFVLENBQUMsMkNBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLDJDQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEYscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsMkNBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFDLElBQUksY0FBc0IsQ0FBQztRQUMzQixJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFJLElBQVksQ0FBQztRQUVqQixrQkFBa0I7UUFDbEIsSUFBSSwyQ0FBRSxZQUFZLHFCQUFxQixFQUFFO1lBQ3RDLElBQUksR0FBRyxHQUFHLDJDQUFFLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDcEQsSUFBSSxHQUFHLEVBQUU7Z0JBQ04sNkRBQTZEO2dCQUM3RCxjQUFjLEdBQUcsMkNBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU0sR0FBRywyQ0FBRSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7YUFDNUI7aUJBQ0k7Z0JBQ0YsaUVBQWlFO2dCQUNqRSxjQUFjLEdBQUcsMkNBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU0sR0FBRywyQ0FBRSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxHQUFHLDJDQUFFLENBQUMsYUFBYSxDQUFDO2FBQzFCO1NBQ0g7UUFFRCxxRUFBcUU7UUFDckUsNERBQTREO1FBQzVELDhIQUE4SDtRQUM5SCxJQUFJO1lBQ0QsSUFBSSwyQ0FBRSxZQUFZLHNCQUFzQixFQUFFO2dCQUN2QywyQ0FBRSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUMxQyxjQUFjLEdBQUcsMkNBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQzVCLE1BQU0sR0FBRywyQ0FBRSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxHQUFHLDJDQUFFLENBQUMsS0FBSzthQUNqQjtTQUNIO1FBQ0QsT0FBTyxLQUFLLEVBQUU7U0FDYjtRQUVELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDJDQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN2QywyQ0FBRSxDQUFDLFdBQVcsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsMkNBQUUsQ0FBQyxhQUFhLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsMkNBQUUsQ0FBQyxrQkFBa0IsRUFBRSwyQ0FBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25FLDJDQUFFLENBQUMsYUFBYSxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLDJDQUFFLENBQUMsa0JBQWtCLEVBQUUsMkNBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRSwyQ0FBRSxDQUFDLFVBQVUsQ0FDViwyQ0FBRSxDQUFDLFVBQVUsRUFBVyxTQUFTO1lBQ2pDLENBQUMsRUFBdUIsUUFBUTtZQUNoQyxjQUFjLEVBQVUsa0JBQWtCO1lBQzFDLGtEQUFRLENBQUMsWUFBWSxFQUFHLFFBQVE7WUFDaEMsa0RBQVEsQ0FBQyxZQUFZLEVBQUcsU0FBUztZQUNqQyxDQUFDLEVBQXVCLFNBQVM7WUFDakMsTUFBTSxFQUFrQixTQUFTO1lBQ2pDLElBQUksRUFBb0IsT0FBTztZQUMvQixJQUFJLENBQW9CLFNBQVM7YUFDbkMsQ0FBQztTQUNKO1FBQ0QsMkNBQUUsQ0FBQyxXQUFXLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsdURBQVUsQ0FBQyxPQUFPLENBQUMsOEVBQW9CLEVBQUUsZ0ZBQXNCLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsdUJBQXVCLEdBQUcsMkNBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BGLDJDQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sMENBQWEsR0FBckIsVUFBc0IsSUFBa0I7UUFDckMsSUFBSSxDQUFDLEdBQUcsSUFBSSxrREFBUSxFQUFFLENBQUM7UUFDdkIsOEJBQThCO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsdURBQVUsQ0FBQyxPQUFPLENBQ3ZDLCtFQUFxQjtpQkFDakIsT0FBTyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztpQkFDdkMsT0FBTyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsRUFDdkMsaUZBQXVCO2lCQUNuQixPQUFPLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDO2lCQUN2QyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztpQkFDbkMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUMxRCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUN4RCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FDbEUsQ0FBQztZQUVGLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQ0k7WUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsdURBQVUsQ0FBQyxPQUFPLENBQ3ZDLCtFQUFxQjtpQkFDakIsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFDNUIsaUZBQXVCO2lCQUNuQixPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUM5QixDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsMkNBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEYsMkNBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssMkNBQWMsR0FBdEIsVUFBdUIsSUFBaUI7UUFFckMsMENBQTBDO1FBQzFDLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLCtEQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXhGLGlEQUFpRDtRQUNqRCxJQUFJLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSwrREFBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV6RixpREFBaUQ7UUFDakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7U0FDSDtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsK0NBQStDO1FBQy9DLElBQUksR0FBRyxHQUFHLElBQUkscURBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsY0FBYyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRSxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5RSxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsVUFBVSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ3JDO1FBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0JBQVcsMENBQVU7YUFBckI7WUFDRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBTyxHQUFkO1FBQ0csa0RBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxzQ0FBUyxHQUFqQixVQUFrQixNQUFjLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLGtEQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLDBDQUFhLEdBQXBCLFVBQXFCLG1CQUEyQjtRQUU3Qyx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLGtEQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxrREFBUSxDQUFDLFlBQVksQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJLENBQUMsR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxNQUFNLEdBQUcsNkNBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXhELGtEQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsa0RBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxrREFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELGtEQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsZUFBZTtRQUNmLElBQUksR0FBRyxHQUFHLElBQUkscURBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLGtEQUFRLENBQUMsQ0FBQztRQUVyQixvQkFBb0I7UUFDcEIsMkNBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxrREFBUSxDQUFDLFlBQVksRUFBRSxrREFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLDJDQUFFLENBQUMsV0FBVyxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCwyQ0FBRSxDQUFDLFVBQVUsQ0FBQywyQ0FBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsMkNBQUUsQ0FBQyxlQUFlLENBQUMsMkNBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELDJDQUFFLENBQUMsb0JBQW9CLENBQUMsMkNBQUUsQ0FBQyxXQUFXLEVBQUUsMkNBQUUsQ0FBQyxpQkFBaUIsRUFBRSwyQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxHLDJDQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsRUFBRSwyQ0FBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWhGLDJDQUFFLENBQUMsVUFBVSxDQUFDLDJDQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrREFBUSxDQUFDLFdBQVcsRUFBRSxrREFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFFLGtEQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFckMsSUFBSSxFQUFFLEdBQUcsSUFBSSxzREFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6SSxrREFBUSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9DLGtEQUFRLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyRCxrREFBUSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xELGtEQUFRLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFcEQsRUFBRSxHQUFHLElBQUksc0RBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEksK0NBQStDO1FBQy9DLGtEQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDNUMsa0RBQVEsQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RELGtEQUFRLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVwRCwyQ0FBRSxDQUFDLGVBQWUsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6QyxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV4QixrREFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLGtEQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQUEsQ0FBQztJQUVLLDJDQUFjLEdBQXJCO1FBRUcseUVBQXlFO1FBQ3pFLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQUksaURBQVEsS0FBSyxLQUFLLEVBQUU7WUFDckIsa0VBQWtFO1lBQ2xFLElBQUksR0FBRyxHQUFHLENBQUM7U0FDYjtRQUVELDJDQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkIsMkNBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QiwyQ0FBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLDJDQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSwyQ0FBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCwyQ0FBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEMsMkNBQUUsQ0FBQyxXQUFXLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELDJDQUFFLENBQUMsVUFBVSxDQUFDLDJDQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCwyQ0FBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEVBQUUsMkNBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUvRSwwQkFBMEI7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxxREFBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5QyxrREFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdEIsa0RBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLGtEQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN4QixrREFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0RBQVEsQ0FBQyxDQUFDO1FBQ3JCLDJDQUFFLENBQUMsVUFBVSxDQUFDLDJDQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV2Qyw0QkFBNEI7UUFDNUIsa0RBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxrREFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsa0RBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRixrREFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsa0RBQVEsQ0FBQyxNQUFNLENBQUM7WUFDMUMsa0RBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLGtEQUFRLENBQUMsQ0FBQztZQUNyQiwyQ0FBRSxDQUFDLFVBQVUsQ0FBQywyQ0FBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDSixDQUFDO0lBRU0saUNBQUksR0FBWCxVQUFZLEdBQVc7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNmLFVBQVUsQ0FBQyxNQUFNO1lBQ2pCLFVBQVUsQ0FBQyxLQUFLO1lBQ2hCLFVBQVUsQ0FBQyxLQUFLO1NBQ2xCLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDcEM7YUFDSTtZQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNKLHlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN6VkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ007QUFDYTtBQUNIO0FBQ2pCO0FBQ2dCO0FBQ087QUFDTjtBQUNKO0FBQ0U7QUFDWTtBQUU1RCw2REFBNkQ7QUFDN0QsMEJBQTBCO0FBQzBEO0FBRXBGLElBQUssV0FHSjtBQUhELFdBQUssV0FBVztJQUNiLDZDQUFJO0lBQ0osK0NBQUs7QUFDUixDQUFDLEVBSEksV0FBVyxLQUFYLFdBQVcsUUFHZjtBQUVEO0lBOEJHLG1CQUFtQixLQUFhO1FBNUJ4QixnQkFBVyxHQUFnQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzVDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUszQixVQUFLLEdBQVksSUFBSSxDQUFDO1FBdUIzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBWkQsc0JBQVcsaUNBQVU7YUFBckIsVUFBc0IsR0FBVztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpQ0FBVTthQUFyQixVQUFzQixHQUFXO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQU1NLDZCQUFTLEdBQWhCO1FBQUEsaUJBd0pDO1FBdkpFLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFFNUIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNsQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUM7UUFDOUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUM1QixTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLGlEQUFRLEVBQUU7WUFDWCxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLHlCQUF5QjtRQUd0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQTBCLENBQUM7UUFFdkUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNYLHdFQUF3RTtZQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDN0M7UUFDRCxnREFBTyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFFckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDhEQUFjLEVBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkseUVBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQUMsR0FBRyxJQUFLLFlBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLElBQUssWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQUcsSUFBSyxZQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFqQixDQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQUMsR0FBRyxJQUFLLFlBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQXBCLENBQW9CLENBQUM7UUFFeEQsUUFBUSxDQUFDLFVBQVUsR0FBRyxVQUFDLEtBQW9CO1lBQ3hDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHVEQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUM7aUJBQ0ksSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDekIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsdURBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQztRQUNKLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUc7WUFDdkIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDREQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSw4Q0FBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQyxFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsR0FBRztZQUNwQyxNQUFNLEVBQUUsQ0FBQyxvREFBUyxDQUFDLEtBQUssRUFBRSxvREFBUyxDQUFDLEtBQUssQ0FBQztZQUMxQyxPQUFPLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUMzRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFDRCxPQUFPLEVBQUUsY0FBUSxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBQyxDQUFDO1NBQzVFLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDhDQUFNLENBQUMsVUFBVSxFQUFFO1lBQzVDLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsR0FBRztZQUNyQyxNQUFNLEVBQUUsQ0FBQyxvREFBUyxDQUFDLEtBQUssRUFBRSxvREFBUyxDQUFDLEtBQUssQ0FBQztZQUMxQyxPQUFPLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sRUFBRSxjQUFRLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDLENBQUM7U0FDN0UsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDhDQUFNLENBQUMsVUFBVSxFQUFFO1lBQzFDLEVBQUUsRUFBRSxVQUFVO1lBQ2QsS0FBSyxFQUFFLFdBQVc7WUFDbEIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHO1lBQ25DLE1BQU0sRUFBRSxDQUFDLG9EQUFTLENBQUMsS0FBSyxFQUFFLG9EQUFTLENBQUMsS0FBSyxDQUFDO1lBQzFDLE9BQU8sRUFBRTtnQkFDTixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sRUFBRSxjQUFRLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDLENBQUM7U0FDM0UsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDhDQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNDLEVBQUUsRUFBRSxXQUFXO1lBQ2YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxHQUFHO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLG9EQUFTLENBQUMsS0FBSyxFQUFFLG9EQUFTLENBQUMsS0FBSyxDQUFDO1lBQzFDLE9BQU8sRUFBRTtnQkFDTixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sRUFBRSxjQUFRLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDLENBQUM7U0FDNUUsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDhDQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3hDLEVBQUUsRUFBRSxRQUFRO1lBQ1osS0FBSyxFQUFFLFFBQVE7WUFDZixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUc7WUFDakMsTUFBTSxFQUFFLENBQUMsb0RBQVMsQ0FBQyxLQUFLLEVBQUUsb0RBQVMsQ0FBQyxLQUFLLENBQUM7WUFDMUMsT0FBTyxFQUFFO2dCQUNOLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDckQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNyQixDQUFDO1lBQ0QsT0FBTyxFQUFFLGNBQVEsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUMsQ0FBQztTQUN6RSxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDdEIsSUFBSSxDQUFDLFVBQUMsSUFBaUI7WUFDckIscUJBQXFCLENBQUMsY0FBTSxZQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVOLE9BQU8sR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVPLDZCQUFTLEdBQWpCLFVBQWtCLEtBQWE7UUFBL0IsaUJBa0RDO1FBaERFLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxnQkFBZ0IsRUFBRTtZQUNwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksSUFBSSxHQUFHLElBQUksOERBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLHVEQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO2FBQ0ksSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLGNBQWMsRUFBRTtZQUN2RCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLE1BQU0sR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSwwREFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFDSSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXJELElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFjLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3BELElBQU0sTUFBTSxHQUFHLElBQUksOEZBQVksRUFBRSxDQUFDO2dCQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBQyxFQUF1Qjt3QkFBckIsY0FBSTtvQkFFdkIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQzNCLCtEQUErRDt3QkFDL0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRTs0QkFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUNoQztxQkFDSDt5QkFDSTt3QkFDRixJQUFJLElBQUksR0FBRyx3REFBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUV6QixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7d0JBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDaEI7Z0JBQ0osQ0FBQyxDQUFDO2dCQUVGLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDakIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU1QixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sT0FBTyxDQUFDO1NBQ2pCO2FBQ0k7WUFDRiwrQ0FBK0M7WUFDL0MsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxJQUFpQixFQUFFLEtBQWE7UUFFM0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFcEgsZ0RBQWdEO1FBQ2hELFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzFCLEtBQUssV0FBVztnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNEQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUVULEtBQUssVUFBVTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzREFBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0RBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBRVQsS0FBSyxlQUFlO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzREFBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUVULEtBQUssV0FBVztnQkFDYixNQUFNO1lBRVQ7Z0JBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0RBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNO1NBQ1g7SUFDSixDQUFDO0lBRU8saUNBQWEsR0FBckI7UUFDRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEQsQ0FBQztJQUVPLDhCQUFVLEdBQWxCO1FBQ0csUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3ZCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNyQyxNQUFNO1lBRVQsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLE1BQU07U0FDWDtJQUNKLENBQUM7SUFFTywwQkFBTSxHQUFkLFVBQWUsR0FBVztRQUV2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5RSxDQUFDO0lBRU8sMEJBQU0sR0FBZCxVQUFlLEdBQVc7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUVsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtnQkFDeEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQzdDO3FCQUNJO29CQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQzdDO2FBQ0g7aUJBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBRTlDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUMxQjs7Ozs7c0JBS0U7aUJBQ0o7cUJBQ0k7b0JBQ0YsSUFBSSxJQUFJLEdBQUcsNkNBQU0sQ0FBQyxRQUFRLENBQUMsc0RBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxJQUFJLElBQUksR0FBRyw2Q0FBTSxDQUFDLFFBQVEsQ0FBQyxzREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELElBQUksR0FBRyxHQUFHLElBQUksNkNBQU0sQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQztxQkFDSCxDQUFDLENBQUM7b0JBQ0gsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtnQkFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNIO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLDJCQUFPLEdBQWYsVUFBZ0IsR0FBVztRQUV4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUU3QixrREFBa0Q7UUFDbEQsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVPLDhCQUFVLEdBQWxCLFVBQW1CLEdBQVc7UUFFM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQUEsaUJBU0M7UUFQRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDckI7UUFFRCxxQkFBcUIsQ0FBQyxjQUFNLFlBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0osZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQy9ZRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDUTtBQUNjO0FBQ0k7QUFDUTtBQUNqQjtBQUNWO0FBQ0U7QUFDYztBQUNsQjtBQUNVO0FBQ1o7QUFFNEM7QUFDbEM7QUFDTjtBQUV4QztJQUFBO0lBSUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQzs7QUFFRCxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFFeEI7O0dBRUc7QUFDSDtJQStCRztRQTVCUSxTQUFJLEdBQUcsSUFBSSw2Q0FBTSxFQUFFLENBQUM7UUFDcEIsZUFBVSxHQUFHLElBQUksNkNBQU0sRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxJQUFJLDZDQUFNLEVBQUUsQ0FBQztRQUUxQixXQUFNLEdBQUcsSUFBSSxpREFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBVyxHQUFHLENBQUM7UUFJekIsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUU5QiwyQkFBMkI7UUFDVixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBRXhCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBU3hCLG9CQUFlLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFJbkQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLDJDQUFFLENBQUMsTUFBTSxDQUFDLDJDQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxzREFBVSxDQUFDLE9BQU8sQ0FBQyxrRUFBWSxFQUFFLG9FQUFjLENBQUMsQ0FBQztRQUVoRSxJQUFJLEtBQUssR0FBRyxJQUFJLDhEQUFjLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxLQUFLLENBQUMsY0FBYyxDQUFDLHVEQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtEQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLDZEQUFhLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0RBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSw2QkFBSSxHQUFYLFVBQVksS0FBYTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ00sNkJBQUksR0FBWCxVQUFZLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNNLDZCQUFJLEdBQVgsVUFBWSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTSw4QkFBSyxHQUFaLFVBQWEsS0FBYTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sa0NBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcscUNBQVM7YUFBcEI7WUFDRyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXFCLEdBQVc7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BUEE7SUFTRCxzQkFBVyxzQ0FBVTthQUFyQjtZQUNHLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQixDQUFDO2FBQ0QsVUFBc0IsR0FBVztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FQQTtJQVNELHNCQUFXLG9DQUFRO2FBQW5CO1lBQ0csT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFvQixHQUFXO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQVBBO0lBU0Qsc0JBQVcscUNBQVM7YUFBcEI7WUFDRyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXFCLEdBQVc7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BUEE7SUFTRCxzQkFBVyxrQ0FBTTthQUFqQjtZQUNHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBa0IsR0FBVztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FQQTtJQVNELHNCQUFXLHNDQUFVO2FBQXJCO1lBQ0csT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFzQixHQUFXO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUpBO0lBTUQsc0JBQVcsc0NBQVU7YUFBckI7WUFDRyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQXNCLEdBQVc7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BSkE7SUFNTyxnQ0FBTyxHQUFmLFVBQWdCLEdBQVc7UUFDeEIsR0FBRyxHQUFHLHNEQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QixPQUFPLG9EQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLHNEQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7Ozs7R0FLRDtJQUVTLHNDQUFhLEdBQXJCO1FBQ0csSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG9EQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixJQUFpQjtRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksa0RBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBRUcsb0JBQW9CO1FBQ3BCLDJDQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsMkNBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLDJDQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sdUNBQWMsR0FBdEI7UUFDRyxJQUFJLEdBQUcsR0FBRyxJQUFJLG9EQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsc0RBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzREFBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxFLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9CLE9BQU8sR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBRUcsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSwyRUFBb0IsQ0FBQywyREFBVyxFQUFFLDJEQUFXLEVBQUUsdUVBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkc7UUFFRCwyQ0FBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLDJEQUFXLEVBQUUsMkRBQVcsQ0FBQyxDQUFDO1FBRTVDLDJDQUFFLENBQUMsV0FBVyxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSwyQ0FBRSxDQUFDLGVBQWUsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsMkNBQUUsQ0FBQyxvQkFBb0IsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSwyQ0FBRSxDQUFDLGlCQUFpQixFQUFFLDJDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEgsMkNBQUUsQ0FBQyxXQUFXLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEMsMkNBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzVCLElBQUksS0FBSyxHQUFHLGdCQUFnQixDQUFVLDJDQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcscURBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pFLDJDQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGtDQUFrQztRQUNsQywyQ0FBRSxDQUFDLEtBQUssQ0FBQywyQ0FBRSxDQUFDLGdCQUFnQixHQUFHLDJDQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVwRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSw2Q0FBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFbEMsMkJBQTJCO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUIsZ0NBQWdDO1FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRCxxQkFBcUI7UUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxXQUFXLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixpQkFBaUI7UUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5DLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksaURBQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUdsQixJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQywyREFBVyxHQUFHLDJEQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0QsMkNBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSwyREFBVyxFQUFFLDJEQUFXLEVBQUUsMkNBQUUsQ0FBQyxJQUFJLEVBQUUsMkNBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLDJEQUFXLEVBQUUsMkRBQVcsQ0FBQyxDQUFDO1FBRXBGLE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVPLDBDQUFpQixHQUF6QjtRQUVHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksMkVBQW9CLENBQUMsMkNBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLDJDQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSx1RUFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRztRQUVELDJDQUFFLENBQUMsZUFBZSxDQUFDLDJDQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RSwyQ0FBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUIsMkNBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQUUsQ0FBQyxnQkFBZ0IsR0FBRywyQ0FBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFcEQsSUFBSSxNQUFNLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksRUFBRSxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLEdBQUcsR0FBRyw2Q0FBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5RCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFaEMsNERBQTREO1FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUU3Qyw4REFBOEQ7UUFDOUQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVoQiwyQ0FBRSxDQUFDLFdBQVcsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQywyQ0FBRSxDQUFDLGVBQWUsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sdUNBQWMsR0FBdEI7UUFFRzs7OztVQUlFO1FBRUY7Ozs7Ozs7Ozs7O1VBV0U7UUFFRiwyQ0FBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUIsMkNBQUUsQ0FBQyxXQUFXLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztRQUVsRSwyQ0FBRSxDQUFDLEtBQUssQ0FBQywyQ0FBRSxDQUFDLGdCQUFnQixHQUFHLDJDQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVwRCx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZDQUFNLEVBQUUsQ0FBQztRQUV6Qix1QkFBdUI7UUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEIsNEVBQTRFO1FBQzVFLDJDQUFFLENBQUMsS0FBSyxDQUFDLDJDQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQiwyQ0FBRSxDQUFDLFdBQVcsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU8saUNBQVEsR0FBaEI7UUFFRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFaEMsMkJBQTJCO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2Q0FBTSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuQyxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFL0IsNkNBQTZDO1FBQzdDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQywyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFM0IsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLGlEQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksOEJBQUssR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTO1FBRTlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixVQUFzQjtRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNKLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNsYkQ7QUFBQTtBQUFBO0FBQWlDO0FBS2pDLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUs7QUFFakM7O0dBRUc7QUFDSDtJQWNHLDZCQUFtQixPQUFvQjtRQUF2QyxpQkF5REM7UUFwRU0sY0FBUyxHQUFHLEtBQUssQ0FBQztRQWF0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLENBQUMsWUFBWSxHQUFHLFVBQUMsS0FBaUI7WUFDdEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM3QixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ2hELElBQUksR0FBRyxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTdGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLGFBQWEsR0FBRyxjQUFjLEVBQUU7b0JBQzdDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3hCO3FCQUNJO29CQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1FBQ0osQ0FBQztRQUVELE9BQU8sQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFpQjtZQUNyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2hELElBQUksR0FBRyxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFDLEtBQWlCO1lBQ3BDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUVELE9BQU8sQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFpQjtZQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBTyxLQUFNLENBQUMsTUFBTSxFQUFRLEtBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFcEIsd0ZBQXdGO1lBQ3hGLE9BQU8sS0FBSyxDQUFDO1FBQ2hCLENBQUM7UUFFRCxPQUFPLENBQUMsV0FBVyxHQUFHLFVBQUMsS0FBaUI7WUFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQU8sS0FBTSxDQUFDLE1BQU0sRUFBUSxLQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQUMsS0FBaUI7WUFDbkMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUVGLE9BQU8sQ0FBQyxZQUFZLEdBQUcsVUFBQyxLQUFLO1lBQzFCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7UUFFRCxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQUMsS0FBaUI7WUFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQU8sS0FBTSxDQUFDLE1BQU0sRUFBUSxLQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSixDQUFDO0lBRU8sdUNBQVMsR0FBakIsVUFBa0IsR0FBVztRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUM1QyxPQUFPO1NBQ1Q7YUFDSTtZQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO1NBQ0g7SUFDSixDQUFDO0lBRU8scUNBQU8sR0FBZjtRQUVHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO0lBQ0osQ0FBQztJQUVPLHVDQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyx5Q0FBVyxHQUFuQixVQUFvQixHQUFXO1FBRTVCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0osQ0FBQztJQUNKLDBCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN2SEQ7QUFBQTtBQUFBOztHQUVHO0FBQ0g7SUFBQTtRQUNHLHNCQUFzQjtRQUNkLE1BQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFzQmpDLENBQUM7SUFwQkUsc0JBQVcsK0JBQVM7YUFBcEI7WUFDRyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUNEOzs7O09BSUc7SUFDSSxzQkFBRyxHQUFWLFVBQVcsR0FBVztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0ksdUJBQUksR0FBWDtRQUNHLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFSixlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMzQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0U7QUFDTjtBQUNzQjtBQWdCMUQ7O0dBRUc7QUFDSDtJQVFHOzs7T0FHRztJQUNILGdCQUFtQixNQUFtQixFQUFFLEtBQW1CO1FBQTNELGlCQWdEQztRQTlDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFOUIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDOUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDaEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDbkMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxjQUFjLEVBQUU7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7WUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7WUFDOUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFakMseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUM5QywyREFBMkQ7UUFDM0QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakMsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNLLGdDQUFlLEdBQXZCO1FBQ0csSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksS0FBSyxHQUFHLG9EQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUU7U0FDdkQ7SUFDSixDQUFDO0lBRUQ7O0lBRUE7SUFDUSwrQkFBYyxHQUF0QjtRQUNHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQztJQU9ELHNCQUFXLHlCQUFLO1FBTGhCOzs7O1dBSUc7YUFDSDtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQU9ELHNCQUFXLHlCQUFLO1FBTGhCOzs7O1dBSUc7YUFDSDtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDcEMsQ0FBQztRQUVEOzs7O1dBSUc7YUFDSCxVQUFpQixHQUFXO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUNoQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7OztPQVhBO0lBa0JELHNCQUFXLHVCQUFHO1FBTGQ7Ozs7V0FJRzthQUNIO1lBQ0csT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQU9ELHNCQUFXLHVCQUFHO1FBTGQ7Ozs7V0FJRzthQUNIO1lBQ0csT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUtELHNCQUFXLDBCQUFNO1FBSGpCOztXQUVHO2FBQ0gsVUFBa0IsTUFBbUI7WUFFbEMsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzREFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXRDLGdEQUFnRDtZQUNoRCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLFdBQVcsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGtCQUFrQixHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFFdEUsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU9ELHNCQUFXLDZCQUFTO1FBTHBCOzs7O1dBSUc7YUFDSDtZQUNHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7aUJBQ0k7Z0JBQ0YsT0FBTyxzRUFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDeEM7UUFDSixDQUFDOzs7T0FBQTtJQU9ELHNCQUFXLDJCQUFPO1FBTGxCOzs7O1dBSUc7YUFDSDtZQUNHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDM0M7aUJBQ0k7Z0JBQ0YsT0FBTyxJQUFJLGdEQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7UUFDSixDQUFDOzs7T0FBQTtJQUNKLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZNRDtBQUFBO0FBQUE7O0dBRUc7QUFDSDtJQWlCRzs7OztPQUlHO0lBQ0gsd0JBQW1CLE1BQWMsRUFBRSxjQUFzQixFQUFFLGFBQXFCO1FBckJoRjs7V0FFRztRQUNJLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFMUI7OztXQUdHO1FBQ0ksbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFFbEM7O1dBRUc7UUFDSSxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQVE5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxzQkFBTyxHQUFyQixVQUFzQixHQUFhO1FBRWhDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVmLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLGFBQWEsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxjQUFjLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRTdELE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDhCQUFLLEdBQVo7UUFFRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNKLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMvREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDekI7QUFDMkI7QUFFNUQsNEJBQTRCO0FBQ3JCLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN0QixJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFFN0I7SUFZRyx1QkFBbUIsTUFBbUIsRUFBRSxHQUFjO1FBQXRELGlCQXdCQztRQWhDTyxnQkFBVyxHQUFHLElBQUksNkNBQU0sRUFBRSxDQUFDO1FBQzNCLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFTYixJQUFJLGlEQUFRLEVBQUU7WUFDWCxXQUFXLEdBQUcsR0FBRyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUVqQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx3RUFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLElBQUssWUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFDLEdBQUcsSUFBSyxZQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDO0lBRW5ELENBQUM7SUFDTyw4QkFBTSxHQUFkLFVBQWUsR0FBVztRQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTywrQkFBTyxHQUFmLFVBQWdCLEdBQVc7UUFDeEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksRUFBRSxHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQ0ksSUFBSSxFQUFFLEdBQUcsVUFBVSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFDSTtZQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7SUFDSixDQUFDO0lBRU8sOEJBQU0sR0FBZCxVQUFlLEdBQVc7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLEtBQUssR0FBRyxzREFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxzREFBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDNUM7aUJBQ0k7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsc0RBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO1NBQ0g7SUFDSixDQUFDO0lBRU0sNEJBQUksR0FBWDtRQUVHLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXJELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBRSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUNqRSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXRELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksNkNBQU0sQ0FBQztZQUMxQixXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUM1QixHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU87UUFFekIsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDckYsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBRXJGLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFYixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLHNEQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFYixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxzREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyw2QkFBSyxHQUFiLFVBQWMsTUFBYyxFQUFFLFNBQWlCLEVBQUUsTUFBYztRQUU1RCxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzREFBSyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksRUFBRSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNEQUFLLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsT0FBTyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNKLG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SWdDO0FBQ1c7QUFDUTtBQUVwRDs7R0FFRztBQUNIO0lBQW1DLGlDQUFXO0lBRTNDO1FBQUEsWUFFRyxpQkFBTyxTQW9EVDtRQW5ERSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBTSxHQUFHLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBTSxZQUFZLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN4QyxJQUFNLFlBQVksR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBRXhDLHVCQUF1QjtRQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnRUFBZSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFlLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM3RTtRQUVELHdCQUF3QjtRQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDeEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQztZQUV4QixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnRUFBZSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFlLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM1RTs7SUFDSixDQUFDO0lBQ0osb0JBQUM7QUFBRCxDQUFDLENBekRrQyx3REFBVyxHQXlEN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFZ0M7QUFDVztBQUNRO0FBQ2xCO0FBRWxDO0lBQWtDLGdDQUFXO0lBRTFDLHNCQUFtQixJQUFZLEVBQUUsTUFBYztRQUEvQyxZQUVHLGlCQUFPLFNBUVQ7UUFORSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVuQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDhDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDOztJQUM5QyxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFFdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxNQUFjO1FBRXpDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FB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QUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENB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Q0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBTSxFQUFFLENBQUMsQ0FBQztTQUNsQztRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRyxzREFBSyxDQUFDLENBQUMsRUFBRSxDQUFD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QUMsQ0FBQyxDQUFDO1FBRTVDOztXQUVHO1FBQ0ksV0FBTSxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQWlCbEQsQ0FBQztJQWZFOzs7O09BSUc7SUFDSSxxQkFBSSxHQUFYLFVBQVksUUFBeUI7UUFFbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNK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QUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ2xFLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7S0FDckUsQ0FBQztJ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QUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvRixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQyw0QkFBNEI7UUFDNUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEYsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7UUFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFOUQsT0FBTyxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwwQkFBUyxHQUFoQjtRQUNHLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFFMUIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMvQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNIO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csZ0JBQVMsR0FBdkIsVUFBd0IsS0FBYTtRQUVsQyxPQUFPLElBQUksTUFBTSxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLHNCQUFlLEdBQTdCLFVBQThCLENBQVM7UUFFcEMsT0FBTyxJQUFJLE1BQU0sQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7SUFDTixDQUFDO0lBRWEsZUFBUSxHQUF0QixVQUF1QixLQUFhO1FBRWpDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxNQUFNLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNYLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7SUFDTixDQUFDO0lBRWEsZUFBUSxHQUF0QixVQUF1QixLQUFhO1FBRWpDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxNQUFNLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7SUFDTixDQUFDO0lBRWEsZUFBUSxHQUF0QixVQUF1QixLQUFhO1FBRWpDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxNQUFNLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1gsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0scUJBQUksR0FBWCxVQUFZLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0QsQ0FBQztJQUNNLHFCQUFJLEdBQVgsVUFBWSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzNELENBQUM7SUFDTSxxQkFBSSxHQUFYLFVBQVksS0FBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMzRCxDQUFDO0lBQ00sMEJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuRSxDQUFDO0lBQ00sc0JBQUssR0FBWixVQUFhLEtBQWE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDVyxpQkFBVSxHQUF4QixVQUF5QixHQUFXLEVBQUUsTUFBYyxFQUFFLEVBQVU7UUFFN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDO1lBQ2hCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sTUFBTSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ1csc0JBQWUsR0FBN0IsVUFDRyxJQUFZLEVBQ1osTUFBYyxFQUNkLEtBQWEsRUFDYixJQUFZO1FBRVosSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBRXpCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ1csa0JBQVcsR0FBekIsVUFDRyxJQUFZLEVBQ1osS0FBYSxFQUNiLE1BQWMsRUFDZCxHQUFXLEVBQ1gsS0FBYSxFQUNiLElBQVk7UUFFWixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTNDLE9BQU8sSUFBSSxNQUFNLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0sb0JBQUcsR0FBVixVQUFXLEdBQVcsRUFBRSxNQUFrQjtRQUFsQixtQ0FBa0I7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQy9DO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUosYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDOVdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0w7QUFFRjtBQUNTO0FBQ0Y7QUFFdEM7SUFPRyxrQkFBbUIsSUFBaUIsRUFBRSxPQUFxQjtRQUZuRCxVQUFLLEdBQUcsSUFBSSw2Q0FBTSxFQUFFLENBQUM7UUFJMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxrREFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksa0RBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSx1QkFBSSxHQUFYLFVBQVksS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ00sdUJBQUksR0FBWCxVQUFZLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLHVCQUFJLEdBQVgsVUFBWSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSx3QkFBSyxHQUFaLFVBQWEsS0FBYTtRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ00sNEJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ00sa0NBQWUsR0FBdEI7UUFDRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksNkNBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTywwQkFBTyxHQUFmLFVBQWdCLEtBQWUsRUFBRSxHQUFXO1FBQ3pDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxrQ0FBZSxHQUF0QjtRQUVHLElBQUksQ0FBQyxHQUFHLElBQUksa0RBQVEsRUFBRSxDQUFDO1FBQ3ZCLHlEQUF5RDtRQUN6RCxJQUFJLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEM7UUFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFFRyxJQUFJLEdBQUcsR0FBRyxJQUFJLG9EQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsMkNBQUUsQ0FBQyxVQUFVLENBQUMsMkNBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sMkJBQVEsR0FBZixVQUFnQixVQUFzQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNKLGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pGRDtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUUvQixJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDekIsMkRBQU07SUFDTix5REFBSztJQUNMLHlEQUFLO0FBQ1IsQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFFRDs7R0FFRztBQUNIO0lBTUc7Ozs7O09BS0c7SUFDSCw4QkFBbUIsS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUF1QjtRQUV0RSxRQUFRLEtBQUssRUFBRTtZQUNaLEtBQUssZ0JBQWdCLENBQUMsTUFBTTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLE1BQU07WUFFVCxLQUFLLGdCQUFnQixDQUFDLEtBQUs7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBRVQsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtTQUNYO0lBQ0osQ0FBQztJQUVPLHFDQUFNLEdBQWQsVUFBZSxLQUFhLEVBQUUsTUFBYztRQUV6Qyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRywyQ0FBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUMscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsMkNBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QywyQ0FBRSxDQUFDLFdBQVcsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsMkNBQUUsQ0FBQyxVQUFVLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLDJDQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUN0RCwyQ0FBRSxDQUFDLElBQUksRUFBRSwyQ0FBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQywyQ0FBRSxDQUFDLGFBQWEsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSwyQ0FBRSxDQUFDLGtCQUFrQixFQUFFLDJDQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsMkNBQUUsQ0FBQyxhQUFhLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsMkNBQUUsQ0FBQyxrQkFBa0IsRUFBRSwyQ0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLDJDQUFFLENBQUMsYUFBYSxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLDJDQUFFLENBQUMsY0FBYyxFQUFFLDJDQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsMkNBQUUsQ0FBQyxhQUFhLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsMkNBQUUsQ0FBQyxjQUFjLEVBQUUsMkNBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyRSwyREFBMkQ7UUFDM0QsMkNBQUUsQ0FBQyxlQUFlLENBQUMsMkNBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELDJDQUFFLENBQUMsb0JBQW9CLENBQUMsMkNBQUUsQ0FBQyxXQUFXLEVBQUUsMkNBQUUsQ0FBQyxpQkFBaUIsRUFBRSwyQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5HLGlEQUFpRDtRQUNqRCxJQUFJLE1BQU0sR0FBRywyQ0FBRSxDQUFDLHNCQUFzQixDQUFDLDJDQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxNQUFNLEtBQUssMkNBQUUsQ0FBQyxvQkFBb0IsRUFBRTtZQUNyQyxJQUFJLEdBQUcsR0FBRyx1Q0FBdUMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjtRQUVELHFFQUFxRTtRQUNyRSx3QkFBd0I7UUFDeEIsMkNBQUUsQ0FBQyxXQUFXLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsMkNBQUUsQ0FBQyxlQUFlLENBQUMsMkNBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLDBDQUFXLEdBQW5CLFVBQW9CLEtBQWEsRUFBRSxNQUFjO1FBQzlDLElBQUksdUJBQXVCLEdBQUcsMkNBQUUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDM0IsS0FBSyxDQUFDLDJFQUEyRSxDQUFDLENBQUM7WUFDbkYsT0FBTztTQUNUO1FBRUQsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsMkNBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFDLHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsWUFBWSxHQUFHLDJDQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsMkNBQUUsQ0FBQyxXQUFXLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELDJDQUFFLENBQUMsVUFBVSxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSwyQ0FBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFDdEQsMkNBQUUsQ0FBQyxJQUFJLEVBQUUsMkNBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsMkNBQUUsQ0FBQyxhQUFhLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsMkNBQUUsQ0FBQyxrQkFBa0IsRUFBRSwyQ0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLDJDQUFFLENBQUMsYUFBYSxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLDJDQUFFLENBQUMsa0JBQWtCLEVBQUUsMkNBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSwyQ0FBRSxDQUFDLGFBQWEsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSwyQ0FBRSxDQUFDLGNBQWMsRUFBRSwyQ0FBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLDJDQUFFLENBQUMsYUFBYSxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLDJDQUFFLENBQUMsY0FBYyxFQUFFLDJDQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckUsMkVBQTJFO1FBQzNFLHVFQUF1RTtRQUN2RSx1RUFBdUU7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRywyQ0FBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLDJDQUFFLENBQUMsV0FBVyxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCwyQ0FBRSxDQUFDLFVBQVUsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsMkNBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQ2pFLDJDQUFFLENBQUMsZUFBZSxFQUFFLDJDQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLDJDQUFFLENBQUMsYUFBYSxDQUFDLDJDQUFFLENBQUMsVUFBVSxFQUFFLDJDQUFFLENBQUMsa0JBQWtCLEVBQUUsMkNBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSwyQ0FBRSxDQUFDLGFBQWEsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSwyQ0FBRSxDQUFDLGtCQUFrQixFQUFFLDJDQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsMkNBQUUsQ0FBQyxhQUFhLENBQUMsMkNBQUUsQ0FBQyxVQUFVLEVBQUUsMkNBQUUsQ0FBQyxjQUFjLEVBQUUsMkNBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRSwyQ0FBRSxDQUFDLGFBQWEsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSwyQ0FBRSxDQUFDLGNBQWMsRUFBRSwyQ0FBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXJFLDJEQUEyRDtRQUMzRCwyQ0FBRSxDQUFDLGVBQWUsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsMkNBQUUsQ0FBQyxvQkFBb0IsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSwyQ0FBRSxDQUFDLGlCQUFpQixFQUFFLDJDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkcsMkNBQUUsQ0FBQyxvQkFBb0IsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSwyQ0FBRSxDQUFDLGdCQUFnQixFQUFFLDJDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEcsaURBQWlEO1FBQ2pELElBQUksTUFBTSxHQUFHLDJDQUFFLENBQUMsc0JBQXNCLENBQUMsMkNBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLE1BQU0sS0FBSywyQ0FBRSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JDLElBQUksR0FBRyxHQUFHLHVDQUF1QyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO1FBRUQscUVBQXFFO1FBQ3JFLHdCQUF3QjtRQUN4QiwyQ0FBRSxDQUFDLFdBQVcsQ0FBQywyQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQywyQ0FBRSxDQUFDLGVBQWUsQ0FBQywyQ0FBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sMENBQVcsR0FBbEIsVUFBbUIsS0FBYSxFQUFFLE1BQWM7SUFDaEQsQ0FBQztJQUNKLDJCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM5SEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ0Y7QUFDSztBQUNIO0FBRWpDOztHQUVHO0FBQ0g7SUFJRzs7OztPQUlHO0lBQ0gsbUJBQW1CLE9BQXFCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLDJDQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSx1QkFBRyxHQUFWLFVBQVcsSUFBWSxFQUFFLEtBQXlDLEVBQUUsR0FBb0I7UUFBcEIsaUNBQW9CO1FBRXJGLElBQUksR0FBRyxHQUFHLDJDQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsRUFBRTtZQUNOLElBQUksS0FBSyxZQUFZLDZDQUFNLEVBQUU7Z0JBQzFCLDJDQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNyRDtpQkFDSSxJQUFJLEtBQUssWUFBWSxnREFBTyxFQUFFO2dCQUNoQywyQ0FBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRTtpQkFDSSxJQUFJLEtBQUssWUFBWSw2Q0FBTSxFQUFFO2dCQUMvQiwyQ0FBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbEU7aUJBQ0ksSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN4QiwyQ0FBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0I7aUJBQ0k7Z0JBQ0YsSUFBSSxHQUFHLEVBQUU7b0JBQ04sMkNBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMzQjtxQkFDSTtvQkFDRiwyQ0FBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzNCO2FBQ0g7U0FDSDtJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHdCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwwQkFBTSxHQUFiLFVBQWMsUUFBYTtRQUV4QixLQUFLLElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEI7SUFDSixDQUFDO0lBQ0osZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzlFRDtBQUFBO0FBQUE7QUFBK0I7QUFFL0I7SUFJRyx3QkFBWSxPQUFxQixFQUFFLFNBQWlCLEVBQUUsWUFBb0I7UUFFdkUsSUFBSSxHQUFHLEdBQUcsMkNBQTRCLENBQUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLElBQStCO1FBRW5DLElBQUksR0FBRyxHQUFHLDJDQUE0QixDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDOzs7Ozs7VUFNRTtJQUVMLENBQUM7SUFDSixxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENEOztHQUVHO0FBQ0g7SUFLRzs7T0FFRztJQUNILGVBQXNCLFlBQStCO1FBQ2xELElBQUksWUFBWSxZQUFZLEtBQUssRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxrQkFBTyxZQUFZLENBQUMsQ0FBQztTQUNsQzthQUNJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjtTQUNIO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx5QkFBUyxHQUFoQjtRQUNHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDSixZQUFDO0FBQUQsQ0FBQztBQUVEOztHQUVHO0FBQ0g7SUFBNEIsMEJBQUs7SUFFOUI7O09BRUc7SUFDSCxnQkFBbUIsSUFBZTtRQUFsQyxpQkFPQztRQU5FLElBQUksSUFBSSxFQUFFO1lBQ1AsMEJBQU0sSUFBSSxDQUFDLFNBQUM7U0FDZDthQUNJO1lBQ0YsMEJBQU0sQ0FBQyxDQUFDLFNBQUM7U0FDWDs7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHNCQUFLLEdBQVo7UUFDRyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBT0Qsc0JBQVcscUJBQUM7UUFMWjs7OztXQUlHO2FBQ0g7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7O1dBSUc7YUFDSCxVQUFhLEdBQVc7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BVEE7SUFnQkQsc0JBQVcscUJBQUM7UUFMWjs7OztXQUlHO2FBQ0g7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7O1dBSUc7YUFDSCxVQUFhLEdBQVc7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BVEE7SUFXRDs7Ozs7T0FLRztJQUNJLHlCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0osYUFBQztBQUFELENBQUMsQ0FwRTJCLEtBQUssR0FvRWhDOztBQUVEOztHQUVHO0FBQ0g7SUFBNEIsMEJBQUs7SUFFOUI7O09BRUc7SUFDSCxnQkFBbUIsSUFBZTtRQUFsQyxpQkFPQztRQU5FLElBQUksSUFBSSxFQUFFO1lBQ1AsMEJBQU0sSUFBSSxDQUFDLFNBQUM7U0FDZDthQUNJO1lBQ0YsMEJBQU0sQ0FBQyxDQUFDLFNBQUM7U0FDWDs7SUFDSixDQUFDO0lBT0Qsc0JBQVcscUJBQUM7UUFMWjs7OztXQUlHO2FBQ0g7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7O1dBSUc7YUFDSCxVQUFhLEdBQVc7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BVEE7SUFnQkQsc0JBQVcscUJBQUM7UUFMWjs7OztXQUlHO2FBQ0g7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7O1dBSUc7YUFDSCxVQUFhLEdBQVc7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BVEE7SUFnQkQsc0JBQVcscUJBQUM7UUFMWjs7OztXQUlHO2FBQ0g7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7O1dBSUc7YUFDSCxVQUFhLEdBQVc7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BVEE7SUFXRDs7OztPQUlHO0lBQ0ksc0JBQUssR0FBWjtRQUNHLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSx5QkFBUSxHQUFmLFVBQWdCLE1BQWMsRUFBRSxPQUFhO1FBQWIsdUNBQWE7UUFDMUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMEJBQVMsR0FBaEI7UUFDRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7YUFDdkI7U0FDSDtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0kseUJBQVEsR0FBZixVQUFnQixHQUFXO1FBQ3hCLE9BQU8sSUFBSSxNQUFNLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxvQkFBRyxHQUFWLFVBQVcsR0FBVztRQUNuQixPQUFPLElBQUksTUFBTSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQkFBSyxHQUFaLFVBQWEsS0FBYTtRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLE1BQU0sQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSixhQUFDO0FBQUQsQ0FBQyxDQW5KMkIsS0FBSyxHQW1KaEM7O0FBRUQ7O0dBRUc7QUFDSDtJQUE0QiwwQkFBSztJQUU5Qjs7T0FFRztJQUNILGdCQUFtQixJQUFlO1FBQWxDLGlCQU9DO1FBTkUsSUFBSSxJQUFJLEVBQUU7WUFDUCwwQkFBTSxJQUFJLENBQUMsU0FBQztTQUNkO2FBQ0k7WUFDRiwwQkFBTSxDQUFDLENBQUMsU0FBQztTQUNYOztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDBCQUFTLEdBQWhCO1FBQ0csSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksTUFBTSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNKLGFBQUM7QUFBRCxDQUFDLENBNUIyQixLQUFLLEdBNEJoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UytCO0FBQ0k7QUFDRjtBQUVsQzs7R0FFRztBQUNIO0lBQStCLDZCQUFLO0lBU2pDOztPQUVHO0lBQ0gsbUJBQW1CLEtBQWU7UUFBbEMsaUJBZ0JDO1FBZEUsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDaEU7UUFFRCwwQkFBTSxLQUFLLENBQUMsU0FBQzs7SUFDaEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sa0NBQWMsR0FBeEIsVUFBeUIsQ0FBUztRQUMvQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHlCQUFLLEdBQVo7UUFDRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHlCQUFLLEdBQVo7UUFDRyxPQUFPLHNEQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxpQkFBTyxHQUFyQixVQUFzQixHQUFXO1FBQzlCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxpQkFBTyxHQUFyQixVQUFzQixHQUFXO1FBQzlCLElBQUksTUFBTSxHQUFHLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLE1BQU0sRUFBRTtZQUNULElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7YUFDSTtZQUNGLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLG1CQUFTLEdBQXZCLFVBQXdCLEtBQVk7UUFDakMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDWSxlQUFLLEdBQXBCLFVBQXFCLEdBQVc7UUFDN0IsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLENBQUM7U0FDWDthQUNJLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNqQixPQUFPLEdBQUcsQ0FBQztTQUNiO2FBQ0k7WUFDRixPQUFPLEdBQUcsQ0FBQztTQUNiO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwwQkFBTSxHQUFiO1FBQ0csSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUFTLEdBQWhCO1FBQ0csT0FBTyxJQUFJLGdEQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQTNJc0IsZUFBSyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLGVBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxhQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsZUFBSyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLGNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxnQkFBTSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBdUloRSxnQkFBQztDQUFBLENBOUk4Qiw0Q0FBSyxHQThJbkM7QUE5SXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQa0I7QUFDTjtBQUVsQzs7R0FFRztBQUNIO0lBQXdDLHNDQUFTO0lBTzlDOztPQUVHO0lBQ0gsNEJBQW1CLEtBQWU7UUFBbEMsWUFFRyxrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FXdkM7UUFuQkQscUNBQXFDO1FBQzlCLE9BQUMsR0FBVyxHQUFHLENBQUM7UUFTcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDdEU7UUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDaEU7UUFFRCxLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQ0FBSyxHQUFaO1FBQ0csT0FBTyxzREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBOUJzQiw4QkFBVyxHQUFHLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBK0I3RSx5QkFBQztDQUFBLENBakN1QyxvREFBUyxHQWlDaEQ7QUFqQzhCOzs7Ozs7Ozs7Ozs7O0FDTi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDMUI7QUFDa0I7QUFFeEMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUViLElBQUksS0FBYSxDQUFDO0lBQ2xCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUVyQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtLQUNIO0lBRUQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksb0RBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUM3QztTQUNJO1FBQ0YsSUFBSSxHQUFHLEdBQUcsSUFBSSw0REFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQzdDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUFlLHNGQUF1QiwwQkFBMEIsK0JBQStCLHNCQUFzQiw2QkFBNkIscUNBQXFDLGtDQUFrQyxnQ0FBZ0MsaUNBQWlDLGtDQUFrQyxzQ0FBc0Msa0NBQWtDLG1DQUFtQyw4QkFBOEIscUpBQXFKLHdDQUF3Qyw0Q0FBNEMsMkNBQTJDLDBDQUEwQyx5Q0FBeUMseUNBQXlDLDBDQUEwQyxvREFBb0QsMENBQTBDLGdEQUFnRCxzQ0FBc0MsK0JBQStCLDJCQUEyQixRQUFRLG9DQUFvQyw2REFBNkQsUUFBUSxvQ0FBb0MscUVBQXFFLFFBQVEsb0NBQW9DLHFFQUFxRSxRQUFRLG9DQUFvQyxxRUFBcUUsUUFBUSxvQ0FBb0MscUVBQXFFLFFBQVEsNkNBQTZDLHFFQUFxRSxRQUFRLDRCQUE0Qix3Q0FBd0MsUUFBUSxLQUFLLGlDQUFpQyxrSUFBa0ksNkZBQTZGLHlEQUF5RCwrRkFBK0Ysa0RBQWtELHdCQUF3QixLQUFLLGlDQUFpQyxrREFBa0QsaUNBQWlDLHVDQUF1QyxLQUFLLGtDQUFrQyxrREFBa0Qsd0ZBQXdGLHVEQUF1RCxRQUFRLG1CQUFtQixpREFBaUQsNkRBQTZELHNHQUFzRyxrREFBa0QsV0FBVyx5QkFBeUIsNkNBQTZDLFdBQVcsUUFBUSxLQUFLLHVDQUF1QyxnSUFBZ0ksS0FBSyxzRUFBc0UsdUNBQXVDLG1DQUFtQyxxQ0FBcUMsc0RBQXNELGtDQUFrQyx1QkFBdUIsUUFBUSxxQ0FBcUMscUJBQXFCLFFBQVEsbUJBQW1CLHNCQUFzQixRQUFRLEtBQUssaUNBQWlDLHlCQUF5QiwrQ0FBK0MsMkZBQTJGLDREQUE0RCxnREFBZ0QsV0FBVyxpRUFBaUUsNENBQTRDLFdBQVcsaUVBQWlFLCtDQUErQyxXQUFXLGlFQUFpRSw4Q0FBOEMsV0FBVyxpRUFBaUUsZ0RBQWdELFdBQVcsb0VBQW9FLCtDQUErQyxXQUFXLFFBQVEsbUJBQW1CLHFEQUFxRCxvSkFBb0osZ0VBQWdFLCtGQUErRixpQ0FBaUMsV0FBVyxtREFBbUQsbUxBQW1MLDRFQUE0RSxrREFBa0QsY0FBYywrQkFBK0IsK0ZBQStGLG9DQUFvQyxjQUFjLFdBQVcseUJBQXlCLDBCQUEwQixXQUFXLFFBQVEsS0FBSyxtQ0FBbUMsNkVBQTZFLEtBQUssd0JBQXdCLHlCQUF5Qix3QkFBd0IseUJBQXlCLDBCQUEwQiwwQkFBMEIsdUJBQXVCLDJDQUEyQyx5Q0FBeUMsUUFBUSw2Q0FBNkMsMENBQTBDLFFBQVEsNENBQTRDLHlDQUF5QyxRQUFRLG1CQUFtQiwyQ0FBMkMsUUFBUSxLQUFLLEs7Ozs7Ozs7Ozs7OztBQ0Evdk07QUFBZSxzRkFBdUIsMEJBQTBCLHlCQUF5QiwyQkFBMkIsMkJBQTJCLHdCQUF3Qix3Q0FBd0Msb0dBQW9HLEtBQUssSzs7Ozs7Ozs7Ozs7O0FDQXhUO0FBQWUscUxBQXNILDJDQUEyQyxxQ0FBcUMsb0NBQW9DLCtCQUErQiwwQkFBMEIsK0JBQStCLDJCQUEyQixrQ0FBa0MsNkJBQTZCLHlDQUF5QywyQkFBMkIsOEJBQThCLDBCQUEwQiw4QkFBOEIsK0JBQStCLDJDQUEyQyxxSEFBcUgsbUNBQW1DLGdDQUFnQyxtQ0FBbUMsaUNBQWlDLDBGQUEwRixrQ0FBa0MsMEJBQTBCLGdEQUFnRCxpREFBaUQsbURBQW1ELDZCQUE2Qiw2QkFBNkIsNkJBQTZCLGdDQUFnQyx5QkFBeUIsdUJBQXVCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLE1BQU0sa0NBQWtDLG9EQUFvRCxlQUFlLGVBQWUsZUFBZSxNQUFNLDBCQUEwQixzQkFBc0Isd0JBQXdCLG1CQUFtQixtQkFBbUIsTUFBTSx1SEFBdUgsMENBQTBDLDhDQUE4QyxnREFBZ0QsNkJBQTZCLEdBQUcsNkJBQTZCLGNBQWMsY0FBYyxjQUFjLE1BQU0saURBQWlELG9DQUFvQyxHQUFHLHdDQUF3Qyx3Q0FBd0Msa0NBQWtDLGtDQUFrQyxrQ0FBa0MsbUNBQW1DLEtBQUssa0VBQWtFLG1DQUFtQyxtQkFBbUIsbUJBQW1CLE1BQU0sOEJBQThCLHVHQUF1RywrQkFBK0IsOENBQThDLDhDQUE4QyxtQ0FBbUMsbUNBQW1DLHNDQUFzQyxnQ0FBZ0MsaUNBQWlDLGdDQUFnQyxnQ0FBZ0MsS0FBSyw2RUFBNkUseUNBQXlDLHVCQUF1QixRQUFRLG9FQUFvRSxLQUFLLGdGQUFnRixzRUFBc0UsS0FBSyx1S0FBdUssa0NBQWtDLHdCQUF3QiwrQkFBK0IsK0JBQStCLGlDQUFpQyx5QkFBeUIsc0RBQXNELHVCQUF1QiwyQkFBMkIseUJBQXlCLHdEQUF3RCwrQkFBK0IsMkJBQTJCLDhEQUE4RCx3SUFBd0ksOEhBQThILG9CQUFvQix5QkFBeUIsc0VBQXNFLDBDQUEwQyw2REFBNkQsa0NBQWtDLG1EQUFtRCx3QkFBd0IsUUFBUSxtQkFBbUIseUJBQXlCLFFBQVEsS0FBSywwR0FBMEcsNkNBQTZDLCtCQUErQiwwQ0FBMEMsdUVBQXVFLGdEQUFnRCxzQ0FBc0MsMkRBQTJELDJEQUEyRCxrQ0FBa0MsdUJBQXVCLFdBQVcsdUNBQXVDLHVCQUF1QixXQUFXLFFBQVEsdUJBQXVCLEtBQUssa0ZBQWtGLGtEQUFrRCxLQUFLLGlEQUFpRCxrRkFBa0YsS0FBSyxrRUFBa0UsK0RBQStELCtEQUErRCx5QkFBeUIsMkNBQTJDLDBEQUEwRCxzQ0FBc0MsOENBQThDLFFBQVEsbUJBQW1CLDhDQUE4QyxRQUFRLGtDQUFrQyxvRkFBb0YsS0FBSyxzREFBc0QsK0RBQStELCtEQUErRCwrQkFBK0IsbUNBQW1DLDJDQUEyQyxzREFBc0QsS0FBSyxtREFBbUQsb0dBQW9HLEtBQUssK0RBQStELDRFQUE0RSxrQ0FBa0Msc0JBQXNCLFFBQVEsaUZBQWlGLHlCQUF5QixpQkFBaUIsZ0JBQWdCLDRDQUE0Qyw4REFBOEQsNENBQTRDLHlDQUF5QyxzQkFBc0IsaURBQWlELHdGQUF3RixrQ0FBa0Msb0JBQW9CLGlCQUFpQixjQUFjLFdBQVcsUUFBUSxrQ0FBa0MsS0FBSyw2RkFBNkYsdURBQXVELHdFQUF3RSx3RUFBd0UseUNBQXlDLHlCQUF5QixvRkFBb0YsS0FBSyw0RkFBNEYscURBQXFELHdEQUF3RCwyRUFBMkUsS0FBSywyRUFBMkUsK0JBQStCLDRCQUE0Qix1Q0FBdUMsc0RBQXNELEtBQUssa0VBQWtFLGtJQUFrSSw2RkFBNkYseURBQXlELCtGQUErRixrREFBa0Qsd0JBQXdCLEtBQUssdURBQXVELHlDQUF5QyxrQ0FBa0MseUJBQXlCLDJCQUEyQiw4QkFBOEIsd0NBQXdDLDZEQUE2RCxzQkFBc0Isa0JBQWtCLG9JQUFvSSxrREFBa0Qsb0NBQW9DLHFCQUFxQixtRkFBbUYsNEJBQTRCLGlCQUFpQixtQkFBbUIsK0NBQStDLG9FQUFvRSwrQ0FBK0MseUNBQXlDLHlCQUF5QixvREFBb0Qsa0ZBQWtGLDZEQUE2RCxxQ0FBcUMsb0NBQW9DLHVCQUF1QixvQkFBb0IsaUJBQWlCLGNBQWMsV0FBVyx3S0FBd0ssNEJBQTRCLGdCQUFnQixtQkFBbUIsMkZBQTJGLHFFQUFxRSwyRUFBMkUsaUJBQWlCLGNBQWMsV0FBVyw2SEFBNkgsa0NBQWtDLDRGQUE0Rix3SEFBd0gsV0FBVyxtR0FBbUcscUVBQXFFLHNCQUFzQiwwRUFBMEUsd0NBQXdDLDBDQUEwQyxXQUFXLHlDQUF5Qyw0Q0FBNEMscUVBQXFFLCtDQUErQyw4QkFBOEIsY0FBYyxXQUFXLGdFQUFnRSxzQ0FBc0MsNkRBQTZELCtDQUErQyw4QkFBOEIsY0FBYyxXQUFXLG1EQUFtRCx1Q0FBdUMsc0VBQXNFLFdBQVcseUJBQXlCLG1CQUFtQixXQUFXLHdDQUF3QyxzREFBc0QsbUJBQW1CLFdBQVcsNkJBQTZCLGdCQUFnQixnQkFBZ0IscUdBQXFHLGdEQUFnRCxzSkFBc0osb0dBQW9HLGdGQUFnRixvQ0FBb0MsNENBQTRDLGdFQUFnRSxnREFBZ0Qsd0NBQXdDLHVHQUF1Ryw2TUFBNk0sMkVBQTJFLDJFQUEyRSwrRkFBK0YsME5BQTBOLDRIQUE0SCwrREFBK0QscUVBQXFFLGlCQUFpQixjQUFjLDBEQUEwRCxpQ0FBaUMsY0FBYyxXQUFXLCtHQUErRywyQkFBMkIsUUFBUSw2QkFBNkIsMEJBQTBCLG1DQUFtQyxrQ0FBa0MsV0FBVyx5QkFBeUIsaUNBQWlDLFdBQVcseURBQXlELFFBQVEsOEVBQThFLDJCQUEyQixtQ0FBbUMseURBQXlELFFBQVEsbUJBQW1CLDhCQUE4QixRQUFRLGNBQWMsd0JBQXdCLCtEQUErRCxpREFBaUQsbUNBQW1DLHdDQUF3QyxxQ0FBcUMsMEJBQTBCLGdCQUFnQixhQUFhLDJGQUEyRixvQ0FBb0MsMkZBQTJGLDJEQUEyRCw0Q0FBNEMsd0NBQXdDLDBDQUEwQyxRQUFRLHdJQUF3SSx3REFBd0Qsa0RBQWtELHVEQUF1RCxLQUFLLEM7Ozs7Ozs7Ozs7OztBQ0FseGY7QUFBZSxpTEFBa0gsc0RBQXNELHVDQUF1Qyx3QkFBd0IsbUNBQW1DLDRCQUE0QixtQ0FBbUMsNENBQTRDLG1HQUFtRyx1Q0FBdUMsS0FBSyxLOzs7Ozs7Ozs7Ozs7QUNBbmhCO0FBQWUsc0ZBQXVCLDhFQUE4RSx5QkFBeUIsK0JBQStCLHNDQUFzQyxvQ0FBb0MsaUNBQWlDLHdCQUF3QixtQ0FBbUMsOEJBQThCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLGdDQUFnQyxxQ0FBcUMsaUNBQWlDLG9DQUFvQyx1QkFBdUIsUUFBUSw0WkFBNFosbUNBQW1DLHNUQUFzVCxvU0FBb1Msb2RBQW9kLHFoQkFBcWhCLHdEQUF3RCxnSUFBZ0ksUUFBUSxtQkFBbUIsaUlBQWlJLFFBQVEsS0FBSyx3QkFBd0IsK0JBQStCLDZDQUE2QywrREFBK0QsV0FBVyx5QkFBeUIscURBQXFELFdBQVcsaUJBQWlCLFFBQVEsNENBQTRDLGtEQUFrRCw2Q0FBNkMsd0NBQXdDLDRNQUE0TSx1REFBdUQseUVBQXlFLGtGQUFrRixnRUFBZ0UseUZBQXlGLHFCQUFxQix1Q0FBdUMsdURBQXVELFFBQVEsbUJBQW1CLGdEQUFnRCx1REFBdUQsbURBQW1ELDRDQUE0QywrQkFBK0IsV0FBVyw2Q0FBNkMsNkJBQTZCLFdBQVcsOENBQThDLDhCQUE4QixXQUFXLHlCQUF5QiwyQkFBMkIsV0FBVyw2Q0FBNkMsOEJBQThCLFdBQVcsUUFBUSwyQ0FBMkMsc0JBQXNCLHNDQUFzQyxLQUFLLEM7Ozs7Ozs7Ozs7OztBQ0FyMko7QUFBZSx1RkFBd0IsMkJBQTJCLDJCQUEyQixzQkFBc0IsNEJBQTRCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLCtCQUErQix3QkFBd0Isb0VBQW9FLGtEQUFrRCxrREFBa0QscUVBQXFFLEtBQUssQzs7Ozs7Ozs7Ozs7QUNBMWdCLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsb0hBQXVEOztBQUV6Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jTWFpbkNhbnZhcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxufVxcclxcblxcclxcbiNPdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJIZWFkZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJSYW5nZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgd2lkdGg6IDE4JTtcXHJcXG59XFxyXFxuXFxyXFxuLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwLCAwcHggMHB4IDFweCAjMGQwZDBkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBsaWdodGdyZWVuLCBkYXJrZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlckNvbG9yU3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyOiBncmF5O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZHJhd1RpbWUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtNDk1cHg7XFxyXFxuICBsZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogOHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGVCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICBmb250LWZhbWlseTogYXJpYWw7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2dyZXNzU3BhbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDNweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDIwNSwgNTAsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgdGFiICovXFxyXFxuLlRhYnMge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIHRoZSB0YWIgY29udGVudCAqL1xcclxcbi5UYWJzIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB0O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cXHJcXG4uVGFicyBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xcclxcbi5UYWJzIGJ1dHRvbi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cXHJcXG4uVGFiQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMjBweCAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5TbGlkZXJIZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyTGFiZWwge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUGxhbmVzQXBwIC5TbGlkZXJSYW5nZSB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUGxhbmVzQXBwIC5TbGlkZXJMYWJlbCB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUGxhbmVzQXBwICNUaHJlc2hvbGRDYW52YXMge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTUwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyVmFsdWVTcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkcmF3VGltZSB7XFxyXFxuICAgIHRvcDogLTk2MHB4O1xcclxcbiAgICBsZWZ0OiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtb2RlQnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgICBmb250LXdlaWdodDogZGFya2VyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlRhYnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiTG9hZGVyV29ya2VyLndvcmtlci5qc1wiKTtcbn07IiwiXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgcmVwcmVzZW50aW5nIGNvbG9yIHZhbHVlcy4gVmFsdWVzIG1heSBiZSBvbiBhIDAtMSBvciAwLTI1NSBzY2FsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgIHB1YmxpYyByOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBnOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBiOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIFJHQiB2YWx1ZXMgdG8gc3RvcmUgaW4gdGhpcyBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5yID0gY29sb3JbMF07XHJcbiAgICAgIHRoaXMuZyA9IGNvbG9yWzFdO1xyXG4gICAgICB0aGlzLmIgPSBjb2xvclsyXTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogVGhlIGl0ZW1zIHJldHVybmVkIGZyb20gZXhhbWluaW5nIHRoZSBjdXJyZW50IHZpZXdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9yRGF0YSB7XHJcbiAgIG1heENocm9tYTogbnVtYmVyLFxyXG4gICBoaWdobGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgYXZnTGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgbGlnaHRlc3RMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBkYXJrZXN0TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgYXZnU2hhZG93Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGxpZ2h0ZXN0U2hhZG93Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGRhcmtlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgdGVybWluYXRvckNvbG9yOiBnbENvbG9yLFxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBncmFicyBhIGNvcHkgb2YgdGhlIHJlbmRlcmVkIHRleHR1cmUgYW5kIGV4YW1pbmVzIGl0IGZvclxyXG4gKiBjb2xvciB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sb3JBbmFseXplciB7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGFycmF5IHdoZXJlIHdlJ2xsIGR1bXAgdGhlIHRleHR1cmUgdG8uIENhY2hlIHRoaXMgYXJyYXkgaW5zdGVhZCBvZlxyXG4gICAgKiBhbGxvY2F0aW5nIGEgbmV3IG9uZSBmb3IgZWFjaCBmcmFtZS5cclxuICAgICovXHJcbiAgIHByaXZhdGUgcGl4ZWxzOiBGbG9hdDMyQXJyYXk7XHJcblxyXG4gICAvKipcclxuICAgICogU2l6ZSBvZiB0aGUgdGV4dHVyZVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHNpemUgVGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGJ1ZmZlclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlcikge1xyXG5cclxuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuXHJcbiAgICAgIC8vIGFsbG9jYXRlIHRoZSBidWZmZXIgdXNlZCBmb3IgZ3JhYnNcclxuICAgICAgdGhpcy5waXhlbHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc2l6ZSAqIHRoaXMuc2l6ZSAqIDQpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUnVucyB0aGUgYW5hbHlzaXMgLSBncmFicyBhIGNvcHkgb2YgdGhlIGZyYW1lIGJ1ZmZlciBhbmQgc2NhbnMgaXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYWxwaGFMaWdodCBUaGUgYWxwaGEgdmFsdWUgZm9yIHRoaW5ncyBpbiBsaWdodC4gVmFsdWVzIGFib3ZlIHRoaXMgYXJlIGR1ZSB0byBzcGVjdWxhciBsaWdodGluZy5cclxuICAgICogQHBhcmFtIGFscGhhU2hhZG93IFRoZSBhbHBoYSB2YWx1ZSBmb3IgdGhpbmdzIGluIHNoYWRvdy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBydW4oYWxwaGFMaWdodDogbnVtYmVyLCBhbHBoYVNoYWRvdzogbnVtYmVyKTogSUNvbG9yRGF0YSB7XHJcblxyXG4gICAgICBsZXQgZGF0YTogSUNvbG9yRGF0YSA9IHtcclxuICAgICAgICAgbWF4Q2hyb21hOiAwLFxyXG4gICAgICAgICBhdmdMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBsaWdodGVzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGRhcmtlc3RMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pLFxyXG4gICAgICAgICBhdmdTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgZGFya2VzdFNoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pLFxyXG4gICAgICAgICB0ZXJtaW5hdG9yQ29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGhpZ2hsaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPIGhhbmRsZSBjYXNlIHdoZW4gdGhlIHRleHQgdHlwZSBpcyBVTlNJR05FRF9CWVRFXHJcbiAgICAgIGdsLnJlYWRQaXhlbHMoMCwgMCwgdGhpcy5zaXplLCB0aGlzLnNpemUsIGdsLlJHQkEsIGdsLkZMT0FULCB0aGlzLnBpeGVscyk7XHJcblxyXG4gICAgICBsZXQgbnVtTGlnaHRQaXhlbHMgPSAwO1xyXG4gICAgICBsZXQgbnVtU2hhZG93UGl4ZWxzID0gMDtcclxuICAgICAgbGV0IG51bVRlcm1pbmF0b3JQaXhlbHMgPSAwO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChyb3cgKiB0aGlzLnNpemUgKyBjb2wpICogNDtcclxuICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDBdO1xyXG4gICAgICAgICAgICBsZXQgZyA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIGxldCBiID0gdGhpcy5waXhlbHNbaW5kZXggKyAyXTtcclxuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnBpeGVsc1tpbmRleCArIDNdO1xyXG5cclxuICAgICAgICAgICAgLy8gaWdub3JlIHZhbHVlcyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgYmFsbFxyXG4gICAgICAgICAgICBpZiAoYSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGF2ZyA9IChyICsgZyArIGIpIC8gMztcclxuICAgICAgICAgICAgbGV0IGNocm9tYSA9IChNYXRoLmFicyhyIC0gYXZnKSArIE1hdGguYWJzKGcgLSBhdmcpICsgTWF0aC5hYnMoYiAtIGF2ZykpIC8gKDQgLyAzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaHJvbWEgPiBkYXRhLm1heENocm9tYSkge1xyXG4gICAgICAgICAgICAgICBkYXRhLm1heENocm9tYSA9IGNocm9tYTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgICAgICAgaWYgKGEgPT0gYWxwaGFMaWdodCkge1xyXG4gICAgICAgICAgICAgICBudW1MaWdodFBpeGVscysrO1xyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmRhcmtlc3RMaWdodENvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gZ2xDb2xvci5saWdodGVzdChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gZ2xDb2xvci5kYXJrZXN0KGRhdGEuZGFya2VzdExpZ2h0Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhID09IGFscGhhU2hhZG93KSB7XHJcbiAgICAgICAgICAgICAgIG51bVNoYWRvd1BpeGVscysrO1xyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IuZGFya2VzdChkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPiBhbHBoYUxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIGRhdGEuaGlnaGxpZ2h0Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEuaGlnaGxpZ2h0Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRlcm1pbmF0b3IgPSAoYWxwaGFMaWdodCArIGFscGhhU2hhZG93KSAvIDIuMDtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGEgLSB0ZXJtaW5hdG9yKSA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICBudW1UZXJtaW5hdG9yUGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobnVtTGlnaHRQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5yIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bVNoYWRvd1BpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5yIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtVGVybWluYXRvclBpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuciAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5nIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmIgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVycG9sYXRlcyBhbmQgYXJyYXkgb2YgY29sb3JzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sb3JSYW5nZSB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgY29sb3JzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbG9yczogaHRtbENvbG9yW107XHJcblxyXG4gICAvKipcclxuICAgICogQ29uc3RydWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvcnMgVGhlIGNvbG9ycyB0byBpbnRlcnBvbGF0ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yczogaHRtbENvbG9yW10pIHtcclxuICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGFuIGludGVycG9sYXRlZCBjb2xvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSBBIHZhbHVlIGJldHdlZW4gMCBhbmQgMS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQodmFsdWU6IG51bWJlcik6IGh0bWxDb2xvciB7XHJcblxyXG4gICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh2YWx1ZSA+PSAxKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcigodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSk7XHJcbiAgICAgICAgIGxldCBwYXJ0aWFsID0gKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpICogdmFsdWUgLSBpbmRleDtcclxuXHJcbiAgICAgICAgIGxldCByID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uciArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5yIC0gdGhpcy5jb2xvcnNbaW5kZXhdLnIpKTtcclxuICAgICAgICAgbGV0IGcgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5nICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLmcgLSB0aGlzLmNvbG9yc1tpbmRleF0uZykpO1xyXG4gICAgICAgICBsZXQgYiA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLmIgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uYiAtIHRoaXMuY29sb3JzW2luZGV4XS5iKSk7XHJcblxyXG4gICAgICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImV4cG9ydCBsZXQgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGxldCBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWcocmFkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKDE4MCAvIE1hdGguUEkpICogcmFkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9SYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKE1hdGguUEkgLyAxODApICogZGVnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWl4KHYxOiBudW1iZXIsIHYyOiBudW1iZXIsIG1peDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuIHYxICsgY2xhbXAobWl4LCAwLCAxKSAqICh2MiAtIHYxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgKGEgPT09IHVuZGVmaW5lZCA/ICcnIDogJywnICsgYSkgKyAnKSc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxzIHtcclxuICAgcHVibGljIHN0YXRpYyBnZXQgZ2woKSB7XHJcbiAgICAgIHJldHVybiBnbDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBzZXQgZ2woY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICBnbCA9IGNvbnRleHQ7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgaG9sZGluZyBpbmZvcm1hdGlvbiBhYm91dCBhIHRyaWFuZ2xlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5kZXhlZFRyaWFuZ2xlIHtcclxuICAgdmVydGljZXM6IGdsVmVjM1tdO1xyXG4gICBwdWJsaWMgaVYwOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpVjE6IG51bWJlcjtcclxuICAgcHVibGljIGlWMjogbnVtYmVyO1xyXG5cclxuICAgbm9ybWFsczogZ2xWZWMzW107XHJcbiAgIHB1YmxpYyBpTjA6IG51bWJlcjtcclxuICAgcHVibGljIGlOMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaU4yOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihcclxuICAgICAgdmVydGljZXM6IGdsVmVjM1tdLCBpVjA6IG51bWJlciwgaVYxOiBudW1iZXIsIGlWMjogbnVtYmVyLFxyXG4gICAgICBub3JtYWxzOiBnbFZlYzNbXSwgaU4wPzogbnVtYmVyLCBpTjE/OiBudW1iZXIsIGlOMj86IG51bWJlcixcclxuICAgKSB7XHJcbiAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcclxuICAgICAgdGhpcy5pVjAgPSBpVjA7XHJcbiAgICAgIHRoaXMuaVYxID0gaVYxO1xyXG4gICAgICB0aGlzLmlWMiA9IGlWMjtcclxuXHJcbiAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgIGlmIChpTjAgPT09IHVuZGVmaW5lZCB8fCBpTjAgPT09IC0xKSB7XHJcbiAgICAgICAgIGxldCBub3JtYWwgPSB0aGlzLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsKTtcclxuICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ub3JtYWxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgIHRoaXMuaU4wID0gaW5kZXg7XHJcbiAgICAgICAgIHRoaXMuaU4xID0gaW5kZXg7XHJcbiAgICAgICAgIHRoaXMuaU4yID0gaW5kZXg7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgIHRoaXMuaU4wID0gaU4wO1xyXG4gICAgICAgICB0aGlzLmlOMSA9IGlOMTtcclxuICAgICAgICAgdGhpcy5pTjIgPSBpTjI7XHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBsZXQgbiA9IHRoaXMuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICBsZXQgbjAgPSB0aGlzLm4wO1xyXG4gICAgICAgICBsZXQgbjEgPSB0aGlzLm4xO1xyXG4gICAgICAgICBsZXQgbjIgPSB0aGlzLm4yO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobjAudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuMS50b1N0cmluZygyKSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4yLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgKi9cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBnZXQgdjAoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbdGhpcy5pVjBdO1xyXG4gICB9XHJcbiAgIGdldCB2MSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1t0aGlzLmlWMV07XHJcbiAgIH1cclxuICAgZ2V0IHYyKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMuaVYyXTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG4wKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbHNbdGhpcy5pTjBdO1xyXG4gICB9XHJcbiAgIGdldCBuMSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxzW3RoaXMuaU4xXTtcclxuICAgfVxyXG4gICBnZXQgbjIoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsc1t0aGlzLmlOMl07XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5YKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYwLngsIE1hdGgubWluKHRoaXMudjEueCwgdGhpcy52Mi54KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5ZKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYwLnksIE1hdGgubWluKHRoaXMudjEueSwgdGhpcy52Mi55KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5aKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYwLnosIE1hdGgubWluKHRoaXMudjEueiwgdGhpcy52Mi56KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhYKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYwLngsIE1hdGgubWF4KHRoaXMudjEueCwgdGhpcy52Mi54KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhZKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYwLnksIE1hdGgubWF4KHRoaXMudjEueSwgdGhpcy52Mi55KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhaKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYwLnosIE1hdGgubWF4KHRoaXMudjEueiwgdGhpcy52Mi56KSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlTm9ybWFsKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBhID0gdGhpcy52MS5zdWJ0cmFjdCh0aGlzLnYwKTtcclxuICAgICAgbGV0IGIgPSB0aGlzLnYyLnN1YnRyYWN0KHRoaXMudjEpO1xyXG4gICAgICByZXR1cm4gYS5jcm9zcyhiKS5ub3JtYWxpemUoKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFBhdGhUcmFjZXJSZW5kZXJlciwgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5pbXBvcnQgeyBVbmlmb3JtcyB9IGZyb20gXCIuL1VuaWZvcm1zXCI7XHJcbmltcG9ydCB7IFNwaGVyaWNhbENvb3JkIH0gZnJvbSBcIi4vU3BoZXJpY2FsQ29vcmRcIjtcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCI7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIH0gZnJvbSBcIi4vZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxzLCBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZVNwaGVyZSB9IGZyb20gXCIuL1RyaWFuZ2xlU3BoZXJlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlQ3ViZSB9IGZyb20gXCIuL1RyaWFuZ2xlQ3ViZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iakZpbGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9iakZpbGVcIjtcclxuXHJcbmxldCBza2luVG9uZXMgPSBbXHJcbiAgIG5ldyBodG1sQ29sb3IoWzI0MCwgMjIzLCAyMTRdKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMjU1LCAyMTgsIDIwMF0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsyMzIsIDE3OSwgMTE3XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzE5MCwgMTM2LCA4N10pLFxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzExNSwgOTEsIDU5XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzEzOSwgNzMsIDY1XSlcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFsxMzIsIDU1LCAzNF0pLFxyXG4gICAvL25ldyBodG1sQ29sb3IoWzYxLCAxMiwgMl0pLFxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzM4LCA3LCAxXSlcclxuXTtcclxuXHJcbmVudW0gUG9pbnRlck1vZGUge1xyXG4gICBWaWV3LFxyXG4gICBMaWdodCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXJBcHAge1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFBhdGhUcmFjZXJSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXc6IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGVTcGVjaWFsID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgcG9zOiBTcGhlcmljYWxDb29yZDtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgcHJpdmF0ZSBpbnRlbnNpdHlTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBsaWdodENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYmFsbENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYW1iaWVudEludGVuc2l0eVNsaWRlcjogU2xpZGVyO1xyXG5cclxuICAgcHJpdmF0ZSBhbmdsZVggPSAwLjU7XHJcbiAgIHByaXZhdGUgYW5nbGVZID0gMC43NTtcclxuICAgcHJpdmF0ZSB6b29tWiA9IDMuNTtcclxuXHJcbiAgIHByaXZhdGUgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgb2xkWDogbnVtYmVyO1xyXG4gICBwcml2YXRlIG9sZFk6IG51bWJlcjtcclxuXHJcbiAgIHByaXZhdGUgbGFzdFRpbWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IE1BWF9TQU1QTEVTID0gNTAwO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgbGV0IGNvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgR2xvYmFscy5nbCA9IGNvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoc3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaG1vdmUgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5vbk1vdmUoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoZW5kID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Eb3duKGV2ZW50LngsIGV2ZW50LnkpO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Nb3ZlKGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNldXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRNb2RlbCh0aGlzLnF1ZXJ5KS50aGVuKCh0T2JqOiBUcmlhbmdsZU9iaikgPT4ge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBhdGhUcmFjZXJSZW5kZXJlcih0T2JqKTtcclxuICAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IGRyYXdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRyYXdUaW1lLmlkID0gJ2RyYXdUaW1lJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUaW1lKTtcclxuXHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBidXR0b24uaWQgPSAnbW9kZUJ1dHRvbic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyc7XHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgc3dpdGNoICh0aGlzLnBvaW50ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuVmlldzpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdMaWdodCc7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5MaWdodDtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLkxpZ2h0OlxyXG4gICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICAgIGxldCBwcm9ncmVzc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHByb2dyZXNzU3Bhbi5pZCA9ICdwcm9ncmVzc1NwYW4nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NTcGFuKTtcclxuXHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0SW50ZW5zaXR5JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBJbnRlbnNpdHknLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ID0gdGhpcy5pbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gYnVpbGQgYSByYW5nZSBvZiBjb2xvcnNcclxuICAgICAgbGV0IG1pbiA9IDIwMDA7XHJcbiAgICAgIGxldCBtYXggPSAxMDAwMDtcclxuICAgICAgbGV0IGNvbG9yczogaHRtbENvbG9yW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ZW1wID0gbWluICsgKGkgLyA5KSAqIChtYXggLSBtaW4pO1xyXG4gICAgICAgICBjb2xvcnMucHVzaChnbENvbG9yV2l0aFRlbXBlcmF0dXJlLmNyZWF0ZSh0ZW1wKS50b0h0bWxDb2xvcigpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0Q29sb3InLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0IENvbG9yJyxcclxuICAgICAgICAgbWluOiAyMDAwLFxyXG4gICAgICAgICBtYXg6IDEwMDAwLFxyXG4gICAgICAgICB2YWx1ZTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS5kYXlsaWdodC50ZW1wZXJhdHVyZSxcclxuICAgICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4geyByZXR1cm4gc2xpZGVyLnZhbHVlLnRvRml4ZWQoKSArIFwiS1wiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBhcHBseSB0aGUgaW5pdGlhbCBjb2xvcnNcclxuICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcblxyXG4gICAgICB0aGlzLmJhbGxDb2xvclNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQmFsbENvbG9yJyxcclxuICAgICAgICAgbGFiZWw6ICdCYWxsIENvbG9yJyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IDUwLFxyXG4gICAgICAgICBjb2xvcnM6IHNraW5Ub25lcyxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICBVbmlmb3Jtcy51T2JqQ29sb3IgPSB0aGlzLmJhbGxDb2xvclNsaWRlci5nbENvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBnbCBtYXRjaGVzIHRoZSBpbml0aWFsIFVJIHNldHRpbmdcclxuICAgICAgVW5pZm9ybXMudU9iakNvbG9yID0gdGhpcy5iYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuXHJcbiAgICAgIHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQW1iaWVudEludGVuc2l0eScsXHJcbiAgICAgICAgIGxhYmVsOiAnQW1iaWVudCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSA9IHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGxvYWRNb2RlbChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3RyaWFuZ2xlc3BoZXJlJykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSAwLjU7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCByYWRpdXMsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVTcGhlcmUoOCwgcmFkaXVzLCBjZW50ZXIpO1xyXG4gICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVjdWJlJykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIGxldCBzaXplID0gMC44O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgc2l6ZSAvIDIuMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZUN1YmUoc2l6ZSwgY2VudGVyKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcub2JqJykpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICByZXR1cm4gZmV0Y2gocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iakZpbGUocmVzKTtcclxuICAgICAgICAgICAgICAgbGV0IHNpemUgPSAxLjU7XHJcbiAgICAgICAgICAgICAgIHRPYmouYXV0b0NlbnRlcihzaXplKTtcclxuICAgICAgICAgICAgICAgdE9iai50cmFuc2xhdGUobmV3IGdsVmVjMyhbMCwgdE9iai5oZWlnaHQgLyAyLCAwXSkpO1xyXG4gICAgICAgICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0TGlnaHRDb2xvcigpIHtcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY29sb3JzIGZvciB0aGUgaW50ZW5zaXR5IHNsaWRlclxyXG4gICAgICB0aGlzLmludGVuc2l0eVNsaWRlci5jb2xvcnMgPSBbaHRtbENvbG9yLmJsYWNrLCB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIuaHRtbENvbG9yXTtcclxuXHJcbiAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW4gcmVuZGVyaW5nXHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodENvbG9yID0gdGhpcy5saWdodENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRvd24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGVTcGVjaWFsID0gKHggPCAwLjEgKiB0aGlzLmNhbnZhcy53aWR0aCkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICB0aGlzLm9sZFkgPSB5O1xyXG5cclxuICAgICAgdGhpcy5wb3MgPSBTcGhlcmljYWxDb29yZC5mcm9tWFlaKFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMpO1xyXG5cclxuICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcclxuICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLlZpZXcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy56b29tWiA9IGNsYW1wKHRoaXMuem9vbVosIDEsIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFuZ2xlcyBiYXNlZCBvbiBob3cgZmFyIHdlIG1vdmVkIHNpbmNlIGxhc3QgdGltZVxyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWSAtPSAoeCAtIHRoaXMub2xkWCkgKiAwLjAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCArPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAxO1xyXG5cclxuICAgICAgICAgICAgICAgLy8gZG9uJ3QgZ28gdXBzaWRlIGRvd25cclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggPSBNYXRoLm1heCh0aGlzLmFuZ2xlWCwgLU1hdGguUEkgLyAyICsgMC4wMSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5taW4odGhpcy5hbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5MaWdodCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyAtPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAwNTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MucmFkaXVzID0gY2xhbXAodGhpcy5wb3MucmFkaXVzLCBVbmlmb3Jtcy51QmFsbFJhZGl1cyArIDAuNSwgNSk7XHJcbiAgICAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMgPSB0aGlzLnBvcy50b1hZWigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yb3RhdGlvbkFuZ2xlICs9ICh4IC0gdGhpcy5vbGRYKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgKz0gKHkgLSB0aGlzLm9sZFkpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSA9IGNsYW1wKHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlLCAwLCAxODApO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBjbGVhciB0aGUgc2FtcGxlIGJ1ZmZlclxyXG4gICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlbWVtYmVyIHRoaXMgY29vcmRpbmF0ZVxyXG4gICAgICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICAgICB0aGlzLm9sZFkgPSB5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgLy8gVE9ETyBoYW5kbGUgdGhpcyB3aXRoaW4gdGhlIFBhdGhUcmFjZXIgY2xhc3Mgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGhhcmQgY29kZSB2aWV3IHN0dWZmXHJcbiAgICAgIGxldCBzaXplID0gMC4yICogdGhpcy5jYW52YXMud2lkdGg7XHJcblxyXG4gICAgICBpZiAoeSA8IHNpemUpIHtcclxuXHJcbiAgICAgICAgIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAxICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMiAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDMgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucmVuZGVyZXIucmVuZGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQXJ0aXN0OlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5DaHJvbWE6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ2hyb21hIFZpZXc6IHJlZD1oaWdoZXN0IGNocm9tYVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5WYWx1ZTpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJWYWx1ZSBWaWV3XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkJhbmRzOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIjUgQ29sb3IgKyBIaWdobGlnaHQgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVRleHR1cmUoKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gZ2xNYXQ0Lm1ha2VMb29rQXQoXHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUsXHJcbiAgICAgICAgIG5ldyBnbFZlYzMoWzAsIDEsIDBdKSwgIC8vIGNlbnRlciBwb2ludFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSkgICAvLyB1cCB2ZWN0b3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IGdsTWF0NC5tYWtlUGVyc3BlY3RpdmUoNTUsIDEsIDAuMSwgMTAwKTtcclxuICAgICAgdGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0aW9uLm11bHRNKHRoaXMubW9kZWx2aWV3KTtcclxuICAgICAgdGhpcy5yZW5kZXJlci51cGRhdGVUZXh0dXJlKHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbik7XHJcbiAgIH07XHJcblxyXG4gICBwcml2YXRlIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN3YXAocG9zOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zd2FwKHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgICAgaWYgKFVuaWZvcm1zLnVTYW1wbGUgPCB0aGlzLk1BWF9TQU1QTEVTKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzBdID0gdGhpcy56b29tWiAqIE1hdGguc2luKHRoaXMuYW5nbGVZKSAqIE1hdGguY29zKHRoaXMuYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMV0gPSB0aGlzLnpvb21aICogTWF0aC5zaW4odGhpcy5hbmdsZVgpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1syXSA9IHRoaXMuem9vbVogKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWCk7XHJcblxyXG4gICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoKTtcclxuICAgICAgICAgdGhpcy5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVRpbWVyTGFiZWwoKSB7XHJcblxyXG4gICAgICBsZXQgdCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgbGV0IGRyYXdUaW1lTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd1RpbWUnKTtcclxuICAgICAgaWYgKHRoaXMubGFzdFRpbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgbGV0IGVsYXBzZWRNcyA9ICh0IC0gdGhpcy5sYXN0VGltZXNbMF0pIC8gdGhpcy5sYXN0VGltZXMubGVuZ3RoO1xyXG4gICAgICAgICBkcmF3VGltZUxhYmVsLmlubmVyVGV4dCA9IGVsYXBzZWRNcy50b0ZpeGVkKDApICsgJ21zJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxhc3RUaW1lcy5wdXNoKHQpO1xyXG4gICAgICBpZiAodGhpcy5sYXN0VGltZXMubGVuZ3RoID4gMzApIHtcclxuICAgICAgICAgdGhpcy5sYXN0VGltZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJhd1RpbWVMYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gVW5pZm9ybXMudVNhbXBsZSA8IHRoaXMuTUFYX1NBTVBMRVMgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgICAgbGV0IHByb2dyZXNzID0gVW5pZm9ybXMudVNhbXBsZSAvIHRoaXMuTUFYX1NBTVBMRVM7XHJcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzU3BhbicpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgbGV0IHcgPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgc3Bhbi5zdHlsZS5yaWdodCA9IHcgKiAoMSAtIHByb2dyZXNzKSArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSAnLi9nbE1hdCc7XHJcbmltcG9ydCB7IGdsVmVjMywgZ2xWZWM0IH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB0b1NjcmVlblZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVWZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvVGV4dHVyZUZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSAnLi9Db2xvclJhbmdlJztcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tICcuL1VuaWZvcm1zJztcclxuaW1wb3J0IHsgZ2wsIGlzTW9iaWxlIH0gZnJvbSAnLi9HbG9iYWxzJztcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tICcuL1Byb2ZpbGVyJztcclxuaW1wb3J0IHsgZ2xVbmlmb3JtIH0gZnJvbSAnLi9nbFVuaWZvcm0nO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuaW1wb3J0IHsgQ29sb3JBbmFseXplciB9IGZyb20gJy4vQ29sb3JBbmFseXplcic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IGdsVW5pZm9ybUJsb2NrIH0gZnJvbSAnLi9nbFVuaWZvcm1CbG9jayc7XHJcblxyXG4vKipcclxuICogUmVuZGVyaW5nIG1vZGUgZm9yIGRpc3BsYXlpbmcgdGhlIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlbmRlck1vZGUge1xyXG4gICBBcnRpc3QgPSAwLFxyXG4gICBWYWx1ZSA9IDEsXHJcbiAgIENocm9tYSA9IDIsXHJcbiAgIEJhbmRzID0gMyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgZG9lcyB0aGUgd29yayBvZiBidWlsZGluZyB0aGUgUGF0aCBUcmFjZWQgdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXJSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XHJcbiAgIHByaXZhdGUgdGV4dHVyZXM6IFdlYkdMVGV4dHVyZVtdO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdG9UZXh0dXJlUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGFuYWx5emVyOiBDb2xvckFuYWx5emVyO1xyXG5cclxuICAgcHJpdmF0ZSBtYWluVmlldyA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICBwcml2YXRlIHNtYWxsVmlld3MgPSBbXHJcbiAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICBdO1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0aWNlcyA9IFtcclxuICAgICAgLTEsIC0xLFxyXG4gICAgICAtMSwgKzEsXHJcbiAgICAgICsxLCAtMSxcclxuICAgICAgKzEsICsxXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodE9iajogVHJpYW5nbGVPYmopIHtcclxuXHJcbiAgICAgIC8vIGxhcmdlciB0ZXh0dXJlIGlzIGhpZ2hlciByZXNvbHV0aW9uLCBidXQgdGFrZXMgbG9uZ2VyIHRvIGNvbXB1dGVcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDI1NjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gVW5pZm9ybXMudVRleHR1cmVTaXplID0gNTEyO1xyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSAyNTY7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmFseXplciA9IG5ldyBDb2xvckFuYWx5emVyKFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdmVydGV4IGJ1ZmZlciAtIHRoZSBibG9jayB3ZSdsbCBkcmF3IG91ciByZW5kZXJlZCB0ZXh0dXJlIG9uXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgZnJhbWVidWZmZXJcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcblxyXG4gICAgICBsZXQgaW50ZXJuYWxGb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IGZvcm1hdDogbnVtYmVyO1xyXG4gICAgICBsZXQgdHlwZTogbnVtYmVyO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHR1cmVzXHJcbiAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICBsZXQgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0Jyk7XHJcbiAgICAgICAgIGlmIChleHQpIHtcclxuICAgICAgICAgICAgLy8gVGhhbmtzIEFwcGxlLiBBbHdheXMgZ290IHRvIGRvIHRoaW5ncyBhIGxpdHRsZSBkaWZmZXJlbnRseVxyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBleHQuSEFMRl9GTE9BVF9PRVM7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5vIGZsb2F0aW5nIHBvaW50IHRleHR1cmVzPyByZWFsbHkgZmFsbCBiYWNrIHRvIHVuc2lnbmVkIGJ5dGVzXHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGxldCB5b3UgZG8gYW4gJ2Vsc2UgaWYnIGhlcmUgYW5kIHdoZW4gV2ViR0wyIGlzXHJcbiAgICAgIC8vIG5vdCBzdXBwb3J0ZWQsIHdlIGdldCBhbiBleGNlcHRpb24sIHNvIHRodXMgdGhlIHRyeS1jYXRjaFxyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1MzgxMTIyL3R5cGVzY3JpcHQtdHlwZS1uYXJyb3dlZC10by1uZXZlci13aXRoLWluc3RhbmNlb2YtaW4tYW4taWYtZWxzZS1zdGF0ZW1lbnRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgaWYgKGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICAgICBnbC5nZXRFeHRlbnNpb24oJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnKTtcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBMzJGO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZ2wuRkxPQVRcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdHdvIHRleHR1cmVzLiBPbmUgd2UgZGlzcGxheSBhbmQgb25lIHdlIGRyYXcgdG9cclxuICAgICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goZ2wuY3JlYXRlVGV4dHVyZSgpKTtcclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1tpXSk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELCAgICAgICAgICAvLyB0YXJnZXRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gbGV2ZWxcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQsICAgICAgICAgLy8gaW50ZXJuYWwgZm9ybWF0XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIHdpZHRoXHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIGhlaWdodFxyXG4gICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXJcclxuICAgICAgICAgICAgZm9ybWF0LCAgICAgICAgICAgICAgICAgLy8gZm9ybWF0XHJcbiAgICAgICAgICAgIHR5cGUsICAgICAgICAgICAgICAgICAgIC8vIHR5cGVcclxuICAgICAgICAgICAgbnVsbCAgICAgICAgICAgICAgICAgICAgLy8gcGl4ZWxzXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdG9TY3JlZW4gc2hhZGVyXHJcbiAgICAgIHRoaXMudG9TY3JlZW5Qcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKHRvU2NyZWVuVmVydGV4U291cmNlLCB0b1NjcmVlbkZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9TY3JlZW5Qcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgdGhpcy5jb21waWxlU2hhZGVyKHRPYmopO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXBpbGVTaGFkZXIodE9iaj86IFRyaWFuZ2xlT2JqKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdG9UZXh0dXJlIHNoYWRlclxyXG4gICAgICBpZiAodE9iaiAmJiB0T2JqLnRyaWFuZ2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgdG9UZXh0dXJlVmVydGV4U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnI3ZlcnNpb24gMzAwIGVzJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJ05PVEhJTkcnLCAnVVNFX1RSSUFOR0xFUycpLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVGcmFnbWVudFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJyN2ZXJzaW9uIDMwMCBlcycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCdOT1RISU5HJywgJ1VTRV9UUklBTkdMRVMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9WRVJUSUNFUz4nLCB0T2JqLnZlcnRpY2VzLmxlbmd0aC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9WT0xVTUVTPicsIHRPYmoudm9sdW1lcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVFJJQU5HTEVTPicsIHRPYmoudHJpYW5nbGVzLmxlbmd0aC50b1N0cmluZygpKVxyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgLy8gdXBsb2FkIHRyaWFuZ2xlcyB0byB0aGUgR1BVXHJcbiAgICAgICAgIHRoaXMudXBsb2FkVW5pZm9ybXModE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgdG9UZXh0dXJlVmVydGV4U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnJyksXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZUZyYWdtZW50U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnJylcclxuICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgICAgIHAubG9nKCdjb21waWxlJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGxvYWRzIGFsbCB0aGUgdHJpYW5nbGUgZGF0YSB0byBXZWJHTFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHByb2dyYW0gVGhlIHByb2dyYW0gdG8gdXBsb2FkIHRvXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwbG9hZFVuaWZvcm1zKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICAvLyB1cGxvYWQgdGhlIGJpZyBjaHVua3MgYXMgVW5pZm9ybSBCbG9ja3NcclxuICAgICAgbGV0IGJsb2NrQmluZGluZyA9IDI7XHJcbiAgICAgIGxldCB2QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2sodGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlWZXJ0aWNlc0Jsb2NrJywgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIC8vIHB1dCB0aGUgZGF0YSBpbnRvIGEgRmxvYXQzMkFycmF5IGZvciB1cGxvYWRpbmdcclxuICAgICAgbGV0IHZEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0T2JqLnZlcnRpY2VzLmxlbmd0aCAqIDQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0T2JqLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDBdID0gdi54O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDFdID0gdi55O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDJdID0gdi56O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDNdID0gMDtcclxuICAgICAgfVxyXG4gICAgICB2QmxvY2sudXBsb2FkKHZEYXRhKTtcclxuXHJcbiAgICAgIGJsb2NrQmluZGluZyA9IDM7XHJcbiAgICAgIGxldCB0QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2sodGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlUcmlhbmdsZXNCbG9jaycsIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICAvLyBwdXQgdGhlIGRhdGEgaW50byBhIEZsb2F0MzJBcnJheSBmb3IgdXBsb2FkaW5nXHJcbiAgICAgIGxldCB0RGF0YSA9IG5ldyBJbnQzMkFycmF5KHRPYmoudHJpYW5nbGVzLmxlbmd0aCAqIDQpO1xyXG4gICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IHRPYmoudm9sdW1lcy5sZW5ndGg7IHYrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdE9iai52b2x1bWVzW3ZdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZvbC50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSB2b2wudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYwO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYxO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYyO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0QmxvY2sudXBsb2FkKHREYXRhKTtcclxuXHJcbiAgICAgIC8vIFVwbG9hZCB0aGUgdm9sdW1lIGluZm8gYXMgYSBzdGFuZGFyZCB1bmlmb3JtXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRPYmoudm9sdW1lc1tpXTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5zdGFydEluZGV4Jywgc3RhcnRJbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10ubnVtVHJpYW5nbGVzJywgdm9sLnRyaWFuZ2xlcy5sZW5ndGgsIHRydWUpO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1pbicsIHZvbC5ib3hNaW4pO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1heCcsIHZvbC5ib3hNYXgpO1xyXG4gICAgICAgICBzdGFydEluZGV4ICs9IHZvbC50cmlhbmdsZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNaW4nLCB0T2JqLmJveE1pbik7XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNYXgnLCB0T2JqLmJveE1heCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgcmVuZGVyTW9kZSgpOiBSZW5kZXJNb2RlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpblZpZXc7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlID0gMDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRFeWVSYXkobWF0cml4OiBnbE1hdDQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzQoW3gsIHksIDAsIDFdKTtcclxuICAgICAgcmV0dXJuIG1hdHJpeC5tdWx0Vih2ZWMpLmRpdmlkZUJ5VygpLnN1YnRyYWN0KFVuaWZvcm1zLnVFeWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZShtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBhbGlhc2luZyBieSByYW5kb20gc2FtcGxpbmcgd2l0aGluIGEgcGl4ZWxcclxuICAgICAgbGV0IHggPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHkgPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHogPSAwO1xyXG5cclxuICAgICAgbGV0IHYgPSBuZXcgZ2xWZWMzKFt4LCB5LCB6XSk7XHJcbiAgICAgIGxldCBqaXR0ZXIgPSBnbE1hdDQuZnJvbVRyYW5zbGF0aW9uKHYpO1xyXG4gICAgICBsZXQgbWF0cml4ID0gaml0dGVyLm11bHRNKG1vZGVsdmlld1Byb2plY3Rpb24pLmludmVydCgpO1xyXG5cclxuICAgICAgVW5pZm9ybXMudVJheTAwID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCAtMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MDEgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsIC0xLCArMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMCA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTExID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCArMSwgKzEpO1xyXG4gICAgICAvLyBzZXQgdW5pZm9ybXNcclxuICAgICAgbGV0IHVuaSA9IG5ldyBnbFVuaWZvcm0odGhpcy50b1RleHR1cmVQcm9ncmFtKTtcclxuICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcblxyXG4gICAgICAvLyByZW5kZXIgdG8gdGV4dHVyZVxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMV0sIDApO1xyXG5cclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmFuYWx5emVyLnJ1bihVbmlmb3Jtcy51TGlnaHRBbHBoYSwgVW5pZm9ybXMudVNoYWRvd0FscGhhKTtcclxuICAgICAgVW5pZm9ybXMudU1heENocm9tYSA9IGRhdGEubWF4Q2hyb21hO1xyXG5cclxuICAgICAgbGV0IGNyID0gbmV3IENvbG9yUmFuZ2UoW2RhdGEuZGFya2VzdExpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdMaWdodENvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEubGlnaHRlc3RMaWdodENvbG9yLnRvSHRtbENvbG9yKCldKTtcclxuICAgICAgVW5pZm9ybXMudUhpZ2hsaWdodENvbG9yID0gZGF0YS5oaWdobGlnaHRDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudUxpZ2h0TGlnaHRDb2xvciA9IGNyLmdldCgwLjg1KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudU1pZExpZ2h0Q29sb3IgPSBjci5nZXQoMC41KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtMaWdodENvbG9yID0gY3IuZ2V0KDAuMTUpLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgY3IgPSBuZXcgQ29sb3JSYW5nZShbZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKV0pO1xyXG4gICAgICAvL1VuaWZvcm1zLnVTaGFkb3dDb2xvciA9IGRhdGEudGVybWluYXRvckNvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51U2hhZG93Q29sb3IgPSBkYXRhLmF2Z1NoYWRvd0NvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51UmVmbGVjdGVkTGlnaHRDb2xvciA9IGNyLmdldCgxKS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtBY2NlbnRDb2xvciA9IGNyLmdldCgwLjApLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIHBpbmcgcG9uZyB0ZXh0dXJlc1xyXG4gICAgICB0aGlzLnRleHR1cmVzLnJldmVyc2UoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVTYW1wbGUrKztcclxuICAgICAgVW5pZm9ybXMudVJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgZGlzcGxheVRleHR1cmUoKTogdm9pZCB7XHJcblxyXG4gICAgICAvLyBzaXplIG9mIHRoZSBhY3R1YWwgY2FudmFzLiBUaGUgdGV4dHVyZSB3ZSBjcmVhdGUgaXMgZHJhd24gdG8gdGhpcyBpdGVtXHJcbiAgICAgIGxldCBzaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgLy8gbm90IHN1cmUgd2h5LCBidXQgdGhpcyBiYXNpY2FsbHkgYmVjb21lcyBmdWxsIHdpZHRoIG9uIG15IHBob25lXHJcbiAgICAgICAgIHNpemUgPSA1MTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMudG9TY3JlZW5Qcm9ncmFtKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1swXSk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9TY3JlZW5Qcm9ncmFtKTtcclxuICAgICAgVW5pZm9ybXMudVNjYWxlID0gMS4wO1xyXG4gICAgICBVbmlmb3Jtcy51WE9mZnNldCA9IDAuMDtcclxuICAgICAgVW5pZm9ybXMudVlPZmZzZXQgPSAwLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVNb2RlID0gdGhpcy5tYWluVmlldztcclxuICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG5cclxuICAgICAgLy8gZGlzcGxheSB0aGUgc21hbGxlciB2aWV3c1xyXG4gICAgICBVbmlmb3Jtcy51U2NhbGUgPSAwLjI7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbWFsbFZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVYT2Zmc2V0ID0gMS4wIC0gKHRoaXMuc21hbGxWaWV3cy5sZW5ndGggLSBpIC0gMC41KSAqICgyICogVW5pZm9ybXMudVNjYWxlKTtcclxuICAgICAgICAgVW5pZm9ybXMudVlPZmZzZXQgPSAxLjAgLSBVbmlmb3Jtcy51U2NhbGU7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVNb2RlID0gdGhpcy5zbWFsbFZpZXdzW2ldO1xyXG4gICAgICAgICB1bmkuc2V0QWxsKFVuaWZvcm1zKTtcclxuICAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN3YXAocG9zOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zbWFsbFZpZXdzID0gW1xyXG4gICAgICAgICBSZW5kZXJNb2RlLkNocm9tYSxcclxuICAgICAgICAgUmVuZGVyTW9kZS5WYWx1ZSxcclxuICAgICAgICAgUmVuZGVyTW9kZS5CYW5kcyxcclxuICAgICAgXTtcclxuICAgICAgaWYgKHRoaXMubWFpblZpZXcgPT0gdGhpcy5zbWFsbFZpZXdzW3Bvc10pIHtcclxuICAgICAgICAgdGhpcy5tYWluVmlldyA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLm1haW5WaWV3ID0gdGhpcy5zbWFsbFZpZXdzW3Bvc107XHJcbiAgICAgICAgIHRoaXMuc21hbGxWaWV3c1twb3NdID0gUmVuZGVyTW9kZS5BcnRpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgR2xvYmFscywgdG9SYWQsIGlzTW9iaWxlIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBQbGFuZXNSZW5kZXJlciB9IGZyb20gXCIuL1BsYW5lc1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsVmVjNCwgZ2xWZWMzLCBnbFZlYzIgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBOb3JtYWxUeXBlLCBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlU3BoZXJlIH0gZnJvbSBcIi4vVHJpYW5nbGVTcGhlcmVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVDdWJlIH0gZnJvbSBcIi4vVHJpYW5nbGVDdWJlXCI7XHJcbmltcG9ydCB7IFRocmVzaG9sZEN0cmwgfSBmcm9tIFwiLi9UaHJlc2hvbGRDdHJsXCI7XHJcbmltcG9ydCB7IFBvaW50ZXJFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9Qb2ludGVyRXZlbnRIYW5kbGVyXCI7XHJcblxyXG4vLyBzcGVjaWZ5IGxvYWRlciBhbmQgb3B0aW9ucyBoZXJlLiBUaGlzIHZhbHVlIG11c3QgbWF0Y2ggdGhlXHJcbi8vIGNvbnRlbnRzIG9mIHdvcmtlci5kLnRzXHJcbmltcG9ydCBMb2FkZXJXb3JrZXIgZnJvbSAnd29ya2VyLWxvYWRlcj9uYW1lPUxvYWRlcldvcmtlci53b3JrZXIuanMhLi9Mb2FkZXJXb3JrZXInO1xyXG5cclxuZW51bSBQb2ludGVyTW9kZSB7XHJcbiAgIFZpZXcsXHJcbiAgIExpZ2h0LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbmVzQXBwIHtcclxuICAgcHVibGljIHJlbmRlcmVyOiBQbGFuZXNSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBwb2ludGVyTW9kZTogUG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlU3BlY2lhbCA9IGZhbHNlO1xyXG4gICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHByaXZhdGUgb3ZlcmxheTogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIGhhbmRsZXI6IFBvaW50ZXJFdmVudEhhbmRsZXI7XHJcblxyXG4gICBwcml2YXRlIGRpcnR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHJcbiAgIHByaXZhdGUgaGlnaGxpZ2h0U2xpZGVyOiBTbGlkZXJcclxuICAgcHJpdmF0ZSBsaWdodExpZ2h0U2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgbWlkTGlnaHRTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBkYXJrTGlnaHRTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBzaGFkb3dTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSB0aHJlc2hvbGRDdHJsOiBUaHJlc2hvbGRDdHJsO1xyXG4gICBwcml2YXRlIG1vZGVCdXR0b246IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDEgPSB2YWw7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2V0IHRocmVzaG9sZDIodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci50aHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnUGxhbmVzQXBwJztcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgdGhpcy5jYW52YXMuaWQgPSAnTWFpbkNhbnZhcyc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5pZCA9ICdPdmVybGF5JztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IDUxMjtcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIHNpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gc2l6ZTtcclxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgLy90aGlzLm92ZXJsYXkuc3R5bGUud2lkdGggPSBzaXplO1xyXG4gICAgICAvL3RoaXMub3ZlcmxheS5oZWlnaHQgPSBzaXplO1xyXG4gICAgICBkaXYuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcclxuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmxpbmVIZWlnaHQgPSBzaXplICsgJ3B4JzsgLy8gdmVydGljYWxseSBjZW50ZXIgdGV4dFxyXG5cclxuXHJcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgICAgLy8gVE9ETyBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCBub3QgYmVpbmcgYWJsZSB0byBjcmVhdGUgYSBXZWJHTCBjb250ZXh0XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGdldCBXZWJHTCBjb250ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIEdsb2JhbHMuZ2wgPSBjb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBQbGFuZXNSZW5kZXJlcigpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIodGhpcy5jYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Eb3duID0gKHBvcykgPT4gdGhpcy5vbkRvd24ocG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uTW92ZSA9IChwb3MpID0+IHRoaXMub25Nb3ZlKHBvcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkNsaWNrID0gKHBvcykgPT4gdGhpcy5vbkNsaWNrKHBvcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkRibENsaWNrID0gKHBvcykgPT4gdGhpcy5vbkRibENsaWNrKHBvcyk7XHJcblxyXG4gICAgICBkb2N1bWVudC5vbmtleXByZXNzID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdvJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm9wdGltaXplKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdwJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm9wdGltaXplKE5vcm1hbFR5cGUuRmxhdCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5tb2RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB0aGlzLm1vZGVCdXR0b24uaWQgPSAnbW9kZUJ1dHRvbic7XHJcbiAgICAgIHRoaXMubW9kZUJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyc7XHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICB0aGlzLm1vZGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgdGhpcy50b2dnbGVNb2RlKCk7XHJcbiAgICAgIH1cclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubW9kZUJ1dHRvbik7XHJcblxyXG4gICAgICBjb25zdCBjb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnRhaW5lcjIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIyKTtcclxuXHJcbiAgICAgIHRoaXMudGhyZXNob2xkQ3RybCA9IG5ldyBUaHJlc2hvbGRDdHJsKGNvbnRhaW5lcjIsIHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKGNvbnRhaW5lcjIsIHtcclxuICAgICAgICAgaWQ6ICdIaWdobGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ID0gdGhpcy5oaWdobGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHRMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIoY29udGFpbmVyMiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0TGlnaHQnLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0IExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIubGlnaHRMaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlnaHRMaWdodCA9IHRoaXMubGlnaHRMaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5saWdodExpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIgPSBuZXcgU2xpZGVyKGNvbnRhaW5lcjIsIHtcclxuICAgICAgICAgaWQ6ICdNaWRMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnTWlkIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIubWlkTGlnaHQgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0ID0gdGhpcy5taWRMaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodCkudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIoY29udGFpbmVyMiwge1xyXG4gICAgICAgICBpZDogJ0RhcmtMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnRGFyayBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLmRhcmtMaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0ID0gdGhpcy5kYXJrTGlnaHRTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2hhZG93U2xpZGVyID0gbmV3IFNsaWRlcihjb250YWluZXIyLCB7XHJcbiAgICAgICAgIGlkOiAnU2hhZG93JyxcclxuICAgICAgICAgbGFiZWw6ICdTaGFkb3cnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5zaGFkb3cgKiAxMDAsXHJcbiAgICAgICAgIGNvbG9yczogW2h0bWxDb2xvci5ibGFjaywgaHRtbENvbG9yLndoaXRlXSxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNoYWRvdyA9IHRoaXMuc2hhZG93U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLnNoYWRvdykudG9GaXhlZCgwKSArIFwiJVwiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmxvYWRNb2RlbCh0aGlzLnF1ZXJ5KVxyXG4gICAgICAgICAudGhlbigodE9iajogVHJpYW5nbGVPYmopID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgICAgICAgfSlcclxuICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmlubmVyVGV4dCA9IGVyci50b1N0cmluZygpO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBkaXY7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgbG9hZE1vZGVsKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPFRyaWFuZ2xlT2JqPiB7XHJcblxyXG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3RyaWFuZ2xlc3BoZXJlJykge1xyXG4gICAgICAgICBsZXQgcmFkaXVzID0gMC43NTtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBnbFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVTcGhlcmUoMTAwLCByYWRpdXMsIGNlbnRlcilcclxuICAgICAgICAgdE9iai5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0TW9kZWwodE9iaik7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3RyaWFuZ2xlY3ViZScpIHtcclxuICAgICAgICAgbGV0IHNpemUgPSAwLjg7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlQ3ViZShzaXplLCBjZW50ZXIpO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRPYmopO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5vYmonKSkge1xyXG5cclxuICAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxUcmlhbmdsZU9iaj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgTG9hZGVyV29ya2VyKCk7XHJcbiAgICAgICAgICAgIGxldCB0U3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9OiB7IGRhdGE6IGFueSB9KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIGZsYXNoaW5nIG1lc3NhZ2VzIGZvciB0aGluZ3MgdGhhdCBoYXBwZW4gdmVyeSBxdWlja2x5LlxyXG4gICAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRTdGFydCA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgdE9iaiA9IFRyaWFuZ2xlT2JqLmltcG9ydChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vcmllbnQodE9iaiwgcXVlcnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHRPYmopO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IHF1ZXJ5O1xyXG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZmlsZSk7XHJcblxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIFRPRE8gbXVsdGkgbGluZSBlcnJvciBtZXNzYWdlcyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnVW5rbm93biBNb2RlbDonICsgcXVlcnkpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcmllbnQodE9iajogVHJpYW5nbGVPYmosIHF1ZXJ5OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIGxldCBjZW50ZXIgPSB0T2JqLmNlbnRlcjtcclxuICAgICAgdGhpcy5yZW5kZXJlci50cmFuc2xhdGUobmV3IGdsVmVjMyhbLWNlbnRlci54LCAtY2VudGVyLnksIC1jZW50ZXIuel0pKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zY2FsZSgyLjAgLyBNYXRoLnNxcnQodE9iai53aWR0aCAqIHRPYmoud2lkdGggKyB0T2JqLmhlaWdodCAqIHRPYmouaGVpZ2h0ICsgdE9iai5kZXB0aCAqIHRPYmouZGVwdGgpKTtcclxuXHJcbiAgICAgIC8vIG9yaWVudCBlYWNoIGZpbGUgc28gdGhhdCBpdCBpcyBmYWNpbmcgZm9yd2FyZFxyXG4gICAgICBzd2l0Y2ggKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgY2FzZSAnc2t1bGwub2JqJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RYKHRvUmFkKDkwKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSh0b1JhZCgxODApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICd3b2xmLm9iaic6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSh0b1JhZCgtMTQwKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WCh0b1JhZCg1KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAnc2hlZXBoZWFkLm9iaic6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSh0b1JhZCgtMTYwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSAncG9zZTEub2JqJzpcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFkodG9SYWQoMTgwKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU2xpZGVycygpIHtcclxuICAgICAgdGhpcy5oaWdobGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmhpZ2hsaWdodDtcclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5saWdodExpZ2h0O1xyXG4gICAgICB0aGlzLm1pZExpZ2h0U2xpZGVyLnZhbHVlID0gMTAwICogdGhpcy5yZW5kZXJlci5taWRMaWdodDtcclxuICAgICAgdGhpcy5kYXJrTGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmRhcmtMaWdodDtcclxuICAgICAgdGhpcy5zaGFkb3dTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLnNoYWRvdztcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB0b2dnbGVNb2RlKCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucG9pbnRlck1vZGUpIHtcclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5WaWV3OlxyXG4gICAgICAgICAgICB0aGlzLm1vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ0xpZ2h0JztcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLkxpZ2h0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuTGlnaHQ6XHJcbiAgICAgICAgICAgIHRoaXMubW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnVmlldyc7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRG93bihwb3M6IGdsVmVjMikge1xyXG5cclxuICAgICAgdGhpcy5wb2ludGVyTW9kZVNwZWNpYWwgPSAocG9zLnggPCAwLjEgKiB0aGlzLmNhbnZhcy53aWR0aCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Nb3ZlKHBvczogZ2xWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhbmRsZXIubW91c2VEb3duKSB7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgbGV0IG9sZCA9IHRoaXMuaGFuZGxlci5sYXN0UG9zO1xyXG4gICAgICAgICBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuVmlldykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyTW9kZVNwZWNpYWwpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RaKChvbGQueSAtIHBvcy55KSAqIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFgoKHBvcy55IC0gb2xkLnkpICogMC4wMSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSgocG9zLnggLSBvbGQueCkgKiAwLjAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLkxpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyTW9kZVNwZWNpYWwpIHtcclxuICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgbGV0IHNQb3MgPSBTcGhlcmljYWxDb29yZC5mcm9tWFlaKHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyAtPSAoeSAtIG9sZC55KSAqIDAuMDA1O1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yYWRpdXMgPSBjbGFtcCh0aGlzLnBvcy5yYWRpdXMsIFVuaWZvcm1zLnVCYWxsUmFkaXVzICsgMC41LCA1KTtcclxuICAgICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0UG9zLnZhbHVlcyA9IHRoaXMucG9zLnRvWFlaKCk7XHJcbiAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGxldCBtYXRZID0gZ2xNYXQ0LmZyb21Sb3RZKHRvUmFkKHBvcy54IC0gb2xkLngpKTtcclxuICAgICAgICAgICAgICAgbGV0IG1hdFggPSBnbE1hdDQuZnJvbVJvdFgodG9SYWQocG9zLnkgLSBvbGQueSkpO1xyXG4gICAgICAgICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjNChbXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnksXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnosXHJcbiAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgIHZlYyA9IG1hdFgubXVsdFYodmVjKTtcclxuICAgICAgICAgICAgICAgdmVjID0gbWF0WS5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi54ID0gdmVjLnZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSA9IHZlYy52YWx1ZXNbMV07XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnogPSB2ZWMudmFsdWVzWzJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB4IFRoZSB4IGNvb3JkaW5hdGUuXHJcbiAgICAqIEBwYXJhbSB5IFRoZSB5IGNvb3JkaW5hdGUuXHJcbiAgICAqIEByZXR1cm5zIHRydWUgaWYgYSBoaXQgb24gb25lIG9mIHRoZSB2aWV3cyBvY2N1cnMuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIG9uQ2xpY2socG9zOiBnbFZlYzIpOiBib29sZWFuIHtcclxuXHJcbiAgICAgIGxldCBzaXplID0gdGhpcy5jYW52YXMud2lkdGg7XHJcblxyXG4gICAgICAvLyBUT0RPIGdldCB0aGUgc2l6ZSBvZiB0aGUgYXJlYSBmcm9tIHRoZSByZW5kZXJlclxyXG4gICAgICBpZiAocG9zLnggPCBzaXplIC8gNSAmJiBwb3MueSA8IHNpemUgLyA1KSB7XHJcbiAgICAgICAgIHRoaXMudG9nZ2xlTW9kZSgpO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuY2xpY2socG9zLnggLyBzaXplLCAxIC0gKHBvcy55IC8gc2l6ZSkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uRGJsQ2xpY2socG9zOiBnbFZlYzIpIHtcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlTW9kZSgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdGljaygpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICAgICAgIHRoaXMudGhyZXNob2xkQ3RybC5kcmF3KCk7XHJcbiAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudGljaygpKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsTWF0NCB9IGZyb20gJy4vZ2xNYXQnO1xyXG5pbXBvcnQgeyBnbFZlYzMsIGdsVmVjMiB9IGZyb20gJy4vZ2xWZWMnO1xyXG5pbXBvcnQgdmVydGV4U291cmNlIGZyb20gJy4vc2hhZGVycy9QbGFuZXNWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCBmcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGxhbmVzRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB7IGdsLCBjbGFtcCwgbWl4LCB0b1JhZCwgdG9EZWcsIGlzTW9iaWxlIH0gZnJvbSAnLi9HbG9iYWxzJztcclxuaW1wb3J0IHsgVHJpYW5nbGVTcGhlcmUgfSBmcm9tICcuL1RyaWFuZ2xlU3BoZXJlJztcclxuaW1wb3J0IHsgZ2xVbmlmb3JtIH0gZnJvbSAnLi9nbFVuaWZvcm0nO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tICcuL1RyaWFuZ2xlT2JqJztcclxuaW1wb3J0IHsgZ2xPYmplY3QgfSBmcm9tICcuL2dsT2JqZWN0JztcclxuaW1wb3J0IHsgVHJpYW5nbGVBcnJvdyB9IGZyb20gJy4vVHJpYW5nbGVBcnJvdyc7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tICcuL2dsQ29sb3InO1xyXG5pbXBvcnQgeyBUZXh0dXJlUmVuZGVyZXIgfSBmcm9tICcuL1RleHR1cmVSZW5kZXJlcic7XHJcbmltcG9ydCB7IGdsVGV4dHVyZUZyYW1lQnVmZmVyLCBGcmFtZUJ1ZmZlclN0eWxlIH0gZnJvbSAnLi9nbFRleHR1cmVGcmFtZUJ1ZmZlcic7XHJcbmltcG9ydCB7IHRleHR1cmVTaXplIH0gZnJvbSAnLi9UaHJlc2hvbGRDdHJsJztcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSAnLi9odG1sQ29sb3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGxJbWFnZURhdGEge1xyXG4gICBwdWJsaWMgaW1hZ2U6IEltYWdlRGF0YTtcclxuICAgcHVibGljIGJhbGxDZW50ZXI6IGdsVmVjMjtcclxuICAgcHVibGljIGJhbGxSYWRpdXM6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQkFMTF9SQURJVVMgPSAwLjU7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCByZW5kZXJzIHRyaWFuZ2xlcyBhbmQgYSBsaWdodCBzb3VyY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXNSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB2aWV3ID0gbmV3IGdsTWF0NCgpO1xyXG4gICBwcml2YXRlIHNoYWRvd1ZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbiA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgIHByaXZhdGUgdUNvbG9yID0gbmV3IGdsQ29sb3IoWzEsIDEsIDFdKTtcclxuICAgcHJpdmF0ZSB1VGhyZXNob2xkMSA9IDQwO1xyXG4gICBwcml2YXRlIHVUaHJlc2hvbGQyID0gNzA7XHJcblxyXG4gICBwcml2YXRlIHVIaWdobGlnaHQ6IG51bWJlciA9IDEuMDtcclxuICAgcHJpdmF0ZSB1TGlnaHRMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVNaWRMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVEYXJrTGlnaHQ6IG51bWJlcjtcclxuICAgcHJpdmF0ZSB1U2hhZG93OiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAvLyBzaXplIG9mIHRoZSBzbWFsbGVyIHZpZXdcclxuICAgcHJpdmF0ZSByZWFkb25seSBtaW5pU2l6ZSA9IDAuMjtcclxuXHJcbiAgIHByaXZhdGUgdVVzZVRocmVzaG9sZHMgPSBmYWxzZTtcclxuXHJcbiAgIHByaXZhdGUgYmFsbDogZ2xPYmplY3Q7XHJcbiAgIHByaXZhdGUgYXJyb3c6IGdsT2JqZWN0O1xyXG4gICBwcml2YXRlIG9iajogZ2xPYmplY3Q7XHJcblxyXG4gICBwcml2YXRlIHNoYWRvd0ZyYW1lQnVmZmVyOiBnbFRleHR1cmVGcmFtZUJ1ZmZlcjtcclxuICAgcHJpdmF0ZSB0ZXh0dXJlRnJhbWVCdWZmZXI6IGdsVGV4dHVyZUZyYW1lQnVmZmVyO1xyXG5cclxuICAgcHVibGljIHVMaWdodERpcmVjdGlvbiA9IG5ldyBnbFZlYzMoWzEuMCwgLTEuMCwgMS41XSk7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICB0aGlzLmNvbXB1dGVDb2xvcnMoKTtcclxuXHJcbiAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZSh2ZXJ0ZXhTb3VyY2UsIGZyYWdtZW50U291cmNlKTtcclxuXHJcbiAgICAgIGxldCB0QmFsbCA9IG5ldyBUcmlhbmdsZVNwaGVyZSgxMDAsIEJBTExfUkFESVVTLCBuZXcgZ2xWZWMzKFswLCAwLCAwXSkpO1xyXG4gICAgICB0QmFsbC5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgIHRoaXMuYmFsbCA9IG5ldyBnbE9iamVjdCh0QmFsbCwgdGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGxldCB0QXJyb3cgPSBuZXcgVHJpYW5nbGVBcnJvdygpO1xyXG4gICAgICB0aGlzLmFycm93ID0gbmV3IGdsT2JqZWN0KHRBcnJvdywgdGhpcy5wcm9ncmFtKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJvdFgoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm9iai5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMub2JqLnJvdFkoYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5vYmoucm90WihhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5vYmouc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5vYmoudHJhbnNsYXRlKG9mZnNldCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgaGlnaGxpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVIaWdobGlnaHQ7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCBoaWdobGlnaHQodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gdmFsO1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gTWF0aC5taW4odGhpcy51TGlnaHRMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51TWlkTGlnaHQgPSBNYXRoLm1pbih0aGlzLnVNaWRMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51RGFya0xpZ2h0ID0gTWF0aC5taW4odGhpcy51RGFya0xpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVTaGFkb3cgPSBNYXRoLm1pbih0aGlzLnVTaGFkb3csIHZhbCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbGlnaHRMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51TGlnaHRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IGxpZ2h0TGlnaHQodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gTWF0aC5tYXgodGhpcy51SGlnaGxpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gdmFsO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IE1hdGgubWluKHRoaXMudU1pZExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1pbih0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBtaWRMaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51TWlkTGlnaHQ7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCBtaWRMaWdodCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1heCh0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IHZhbDtcclxuICAgICAgdGhpcy51RGFya0xpZ2h0ID0gTWF0aC5taW4odGhpcy51RGFya0xpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVTaGFkb3cgPSBNYXRoLm1pbih0aGlzLnVTaGFkb3csIHZhbCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGFya0xpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVEYXJrTGlnaHQ7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCBkYXJrTGlnaHQodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gTWF0aC5tYXgodGhpcy51SGlnaGxpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gTWF0aC5tYXgodGhpcy51TGlnaHRMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51TWlkTGlnaHQgPSBNYXRoLm1heCh0aGlzLnVNaWRMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51RGFya0xpZ2h0ID0gdmFsO1xyXG4gICAgICB0aGlzLnVTaGFkb3cgPSBNYXRoLm1pbih0aGlzLnVTaGFkb3csIHZhbCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgc2hhZG93KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVTaGFkb3c7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCBzaGFkb3codmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51SGlnaGxpZ2h0ID0gTWF0aC5tYXgodGhpcy51SGlnaGxpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gTWF0aC5tYXgodGhpcy51TGlnaHRMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51TWlkTGlnaHQgPSBNYXRoLm1heCh0aGlzLnVNaWRMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51RGFya0xpZ2h0ID0gTWF0aC5tYXgodGhpcy51RGFya0xpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVTaGFkb3cgPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgdGhyZXNob2xkMSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51VGhyZXNob2xkMTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHRocmVzaG9sZDEodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51VGhyZXNob2xkMSA9IHZhbDtcclxuICAgICAgdGhpcy51VGhyZXNob2xkMiA9IE1hdGgubWF4KHRoaXMudVRocmVzaG9sZDIsIHZhbCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgdGhyZXNob2xkMigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy51VGhyZXNob2xkMjtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHRocmVzaG9sZDIodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy51VGhyZXNob2xkMiA9IHZhbDtcclxuICAgICAgdGhpcy51VGhyZXNob2xkMSA9IE1hdGgubWluKHRoaXMudVRocmVzaG9sZDEsIHZhbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29sb3JBdChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIGRlZyA9IGNsYW1wKGRlZywgMCwgOTApO1xyXG4gICAgICByZXR1cm4gbWl4KHRoaXMudVNoYWRvdywgdGhpcy51SGlnaGxpZ2h0IC0gMC4xLCBNYXRoLmNvcyh0b1JhZChkZWcpKSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qXHJcbiAgIHByaXZhdGUgdGhyZXNob2xkQXQoY29sb3I6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIGNvbG9yID0gY2xhbXAoY29sb3IsIHRoaXMuYW1iaWVudEludGVuc2l0eSwgdGhpcy5hbWJpZW50SW50ZW5zaXR5ICsgdGhpcy5saWdodEludGVuc2l0eSk7XHJcbiAgICAgIHJldHVybiB0b0RlZyhNYXRoLmFjb3MoY29sb3IgLSB0aGlzLmFtYmllbnRJbnRlbnNpdHkpIC8gdGhpcy5saWdodEludGVuc2l0eSk7XHJcbiAgIH1cclxuKi9cclxuXHJcbiAgIHByaXZhdGUgY29tcHV0ZUNvbG9ycygpIHtcclxuICAgICAgdGhpcy51TGlnaHRMaWdodCA9IHRoaXMuY29sb3JBdCgwLjUgKiB0aGlzLnRocmVzaG9sZDEpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IHRoaXMuY29sb3JBdChtaXgodGhpcy50aHJlc2hvbGQxLCB0aGlzLnRocmVzaG9sZDIsIDAuNSkpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSB0aGlzLmNvbG9yQXQoKHRoaXMudGhyZXNob2xkMiArIDkwKSAvIDIpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2V0TW9kZWwodE9iajogVHJpYW5nbGVPYmopIHtcclxuICAgICAgdGhpcy5vYmogPSBuZXcgZ2xPYmplY3QodE9iaiwgdGhpcy5wcm9ncmFtKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vdGhpcy5yZW5kZXJCYWxsKCk7XHJcbiAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIHRoaXMucmVuZGVyVG9TaGFkb3dNYXAoKTtcclxuICAgICAgdGhpcy5yZW5kZXJUb1NjcmVlbigpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldFN0ZFVuaWZvcm1zKCk6IGdsVW5pZm9ybSB7XHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdzaGFkb3dWaWV3JywgdGhpcy5zaGFkb3dWaWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgncHJvamVjdGlvbicsIHRoaXMucHJvamVjdGlvbi50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51VXNlVGhyZXNob2xkcyA/IDEgOiAwLCB0cnVlKTtcclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgdGhpcy51TGlnaHREaXJlY3Rpb24pO1xyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAxKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VUaHJlc2hvbGQxJywgMSAtIE1hdGguc2luKHRvUmFkKHRoaXMudGhyZXNob2xkMSArIDkwKSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VGhyZXNob2xkMicsIDEgLSBNYXRoLnNpbih0b1JhZCh0aGlzLnRocmVzaG9sZDIgKyA5MCkpKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodEludGVuc2l0eScsIHRoaXMudUhpZ2hsaWdodCAtIHRoaXMudVNoYWRvdyAtIDAuMSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgdGhpcy51U2hhZG93KTtcclxuICAgICAgdW5pLnNldCgndUhpZ2hsaWdodCcsIHRoaXMudUhpZ2hsaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VMaWdodExpZ2h0JywgdGhpcy51TGlnaHRMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VNaWRMaWdodCcsIHRoaXMudU1pZExpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndURhcmtMaWdodCcsIHRoaXMudURhcmtMaWdodCk7XHJcbiAgICAgIHVuaS5zZXQoJ3VTaGFkb3cnLCB0aGlzLnVTaGFkb3cpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUNvbG9yJywgdGhpcy51Q29sb3IpO1xyXG5cclxuICAgICAgcmV0dXJuIHVuaTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldEJhbGxJbWFnZSgpOiBCYWxsSW1hZ2VEYXRhIHtcclxuXHJcbiAgICAgIGlmICghdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIpIHtcclxuICAgICAgICAgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIgPSBuZXcgZ2xUZXh0dXJlRnJhbWVCdWZmZXIodGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCBGcmFtZUJ1ZmZlclN0eWxlLkRlcHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmNvbG9yVGV4dHVyZSk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmNvbG9yVGV4dHVyZSwgMCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuXHJcbiAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoPEVsZW1lbnQ+Z2wuY2FudmFzKTtcclxuICAgICAgbGV0IGNvbG9yID0gaHRtbENvbG9yLmZyb21Dc3Moc3R5bGUuYmFja2dyb3VuZENvbG9yKS50b0dsQ29sb3IoKTtcclxuICAgICAgZ2wuY2xlYXJDb2xvcihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCAxKTtcclxuICAgICAgLy9nbC5jbGVhckNvbG9yKDAuNSwgMC41LCAwLjYsIDEpO1xyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG5cclxuICAgICAgbGV0IHZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgICAgIHZpZXcudHJhbnNsYXRlKG5ldyBnbFZlYzMoWy0wLjQ1LCAtMC40NSwgMF0pKTtcclxuICAgICAgdW5pLnNldCgndmlldycsIHZpZXcudHJhbnNwb3NlKCkpO1xyXG5cclxuICAgICAgLy8gYWx3YXlzIHJlbmRlciB3aXRoIGJhbmRzXHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlVGhyZXNob2xkcycsIDEpO1xyXG5cclxuICAgICAgLy8gc2hvb3QgdGhlIGxpZ2h0IHN0cmFpZ2h0IGRvd25cclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IGdsVmVjMyhbMCwgLTEsIDBdKSk7XHJcblxyXG4gICAgICAvLyBkb24ndCBjYXN0IHNoYWRvd3NcclxuICAgICAgdW5pLnNldGkoJ3VVc2VTaGFkb3dzJywgMCk7XHJcblxyXG4gICAgICB0aGlzLmJhbGwuZHJhdygpO1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgQmFsbEltYWdlRGF0YSgpO1xyXG4gICAgICBkYXRhLmJhbGxSYWRpdXMgPSBCQUxMX1JBRElVUztcclxuICAgICAgbGV0IGMgPSAwLjA1ICsgQkFMTF9SQURJVVM7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlciA9IG5ldyBnbFZlYzIoW2MsIGNdKTtcclxuXHJcbiAgICAgIC8vIG5vcm1hbGl6ZSB2YWx1ZSBzaW5jZSBvdXIgZHJhd2luZyBzcGFjZSBpcyAtMSB0byAxXHJcbiAgICAgIGRhdGEuYmFsbFJhZGl1cyAvPSAyO1xyXG4gICAgICBkYXRhLmJhbGxDZW50ZXIueCAvPSAyO1xyXG4gICAgICBkYXRhLmJhbGxDZW50ZXIueSAvPSAyO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgYXJyb3dcclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IGdsVmVjMyhbMSwgLTAuNSwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIDAsIHRydWUpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgcmVzZXQgdGhpbmdzIHNvIHRoYXQgd2UncmUgbG9va2luZyBkb3duIHRoZSB6LWF4aXNcclxuICAgICAgdGhpcy5hcnJvdy5jbGVhclRyYW5zZm9ybXMoKTtcclxuICAgICAgdGhpcy5hcnJvdy50cmFuc2xhdGUobmV3IGdsVmVjMyhbMC4wLCAxLjAsIDAuMF0pKTtcclxuXHJcbiAgICAgIHVuaS5zZXQoJ3VDb2xvcicsIG5ldyBnbENvbG9yKFsxLjAsIDEuMCwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1QW1iaWVudEludGVuc2l0eScsIDAuNCk7XHJcbiAgICAgIHRoaXMuYXJyb3cuZHJhdygpO1xyXG5cclxuXHJcbiAgICAgIGxldCBwaXhlbHMgPSBuZXcgVWludDhBcnJheSh0ZXh0dXJlU2l6ZSAqIHRleHR1cmVTaXplICogNCk7XHJcbiAgICAgIGdsLnJlYWRQaXhlbHMoMCwgMCwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBwaXhlbHMpO1xyXG5cclxuICAgICAgZGF0YS5pbWFnZSA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVscyksIHRleHR1cmVTaXplLCB0ZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSByZW5kZXJUb1NoYWRvd01hcCgpOiB2b2lkIHtcclxuXHJcbiAgICAgIGlmICghdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyID0gbmV3IGdsVGV4dHVyZUZyYW1lQnVmZmVyKGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCwgRnJhbWVCdWZmZXJTdHlsZS5EZXB0aCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5mcmFtZUJ1ZmZlcik7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICBsZXQgdXAgPSBuZXcgZ2xWZWMzKFswLCAxLCAwXSk7XHJcbiAgICAgIGxldCBtYXQgPSBnbE1hdDQubWFrZUxvb2tBdCh0aGlzLnVMaWdodERpcmVjdGlvbiwgY2VudGVyLCB1cCk7XHJcbiAgICAgIG1hdC5zZXQoMCwgMywgMCk7XHJcbiAgICAgIG1hdC5zZXQoMSwgMywgMCk7XHJcbiAgICAgIG1hdC5zZXQoMiwgMywgMCk7XHJcbiAgICAgIHRoaXMuc2hhZG93VmlldyA9IG1hdDtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICAvLyBjaGFuZ2UgdGhlIHZpZXcgbWF0cml4IHNvIHRoYXQgb3VyIHZpZXcgaXMgZnJvbSB0aGUgbGlnaHRcclxuICAgICAgdW5pLnNldCgndmlldycsIHRoaXMuc2hhZG93Vmlldy50cmFuc3Bvc2UoKSk7XHJcblxyXG4gICAgICAvLyBkb24ndCB0cnkgdG8gdXNlIHRoZSBzaGFkb3cgdGV4dHVyZSB3aGlsZSB3ZSdyZSBjcmVhdGluZyBpdFxyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAwKTtcclxuXHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHJlbmRlclRvU2NyZWVuKCk6IHZvaWQge1xyXG5cclxuICAgICAgLypcclxuICAgICAgLy8gZGlzcGxheSB0aGUgZGVwdGggYnVmZmVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgIGxldCB0ciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIoKTtcclxuICAgICAgdHIucmVuZGVyKHRoaXMuc2hhZG93TWFwLmRlcHRoVGV4dHVyZSk7XHJcbiAgICAgICovXHJcblxyXG4gICAgICAvKlxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIGRlcHRoIGJ1ZmZlciBmb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBsZXQgdHIgPSBuZXcgVGV4dHVyZVJlbmRlcmVyKCk7XHJcbiAgICAgIHRyLnJlbmRlcih0aGlzLnRleHR1cmVGcmFtZUJ1ZmZlci5jb2xvclRleHR1cmUpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgICAgKi9cclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuZGVwdGhUZXh0dXJlKVxyXG5cclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgdGhlIHZpZXcgbWF0cml4XHJcbiAgICAgIHRoaXMudmlldyA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIG1haW4gb2JqZWN0XHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIG9iamVjdCBpbiB0aGUgdXBwZXIgcmlnaHQgYXQgYSByZWR1Y2VkIHNpemUgYW5kIG9wcG9zaXRlIGJhbmRpbmdcclxuICAgICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICAgIHRoaXMudmlldy5zY2FsZSh0aGlzLm1pbmlTaXplKTtcclxuICAgICAgdGhpcy52aWV3LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFsxIC0gdGhpcy5taW5pU2l6ZSwgMSAtIHRoaXMubWluaVNpemUsIDBdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIHRoaXMudVVzZVRocmVzaG9sZHMgPyAwIDogMSwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMub2JqLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgdGhlIGJhbGxcclxuICAgICAgdGhpcy5kcmF3QmFsbCgpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZHJhd0JhbGwoKSB7XHJcblxyXG4gICAgICBsZXQgdW5pID0gdGhpcy5zZXRTdGRVbmlmb3JtcygpO1xyXG5cclxuICAgICAgLy8gc3RvcCB1c2luZyB0aGUgc2hhZG93bWFwXHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDApO1xyXG5cclxuICAgICAgdGhpcy52aWV3ID0gbmV3IGdsTWF0NCgpO1xyXG4gICAgICB0aGlzLnZpZXcuc2NhbGUodGhpcy5taW5pU2l6ZSk7XHJcbiAgICAgIHRoaXMudmlldy50cmFuc2xhdGUobmV3IGdsVmVjMyhbLSgxIC0gdGhpcy5taW5pU2l6ZSksIDEgLSB0aGlzLm1pbmlTaXplLCAwXSkpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy52aWV3LnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICB0aGlzLmJhbGwuZHJhdygpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUxpZ2h0RGlyZWN0aW9uJywgbmV3IGdsVmVjMyhbMSwgLTAuNSwgMC41XSkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIDAsIHRydWUpO1xyXG5cclxuICAgICAgLy8gYmFjayBvdXQgYW5nbGVzIGFzIGlmIGxvb2tpbmcgZG93biB0aGUgei1heGlzXHJcbiAgICAgIGxldCB4ID0gdGhpcy51TGlnaHREaXJlY3Rpb24ueDtcclxuICAgICAgbGV0IHkgPSB0aGlzLnVMaWdodERpcmVjdGlvbi55O1xyXG4gICAgICBsZXQgeiA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLno7XHJcblxyXG4gICAgICAvLyBzdGFydCBieSBsb29raW5nIGRvd24gZnJvbSB0aGUgWiBkaXJlY3Rpb25cclxuICAgICAgbGV0IHJhZGl1cyA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xyXG4gICAgICBsZXQgZWxldmF0aW9uQW5nbGUgPSBNYXRoLmFjb3MoeiAvIHJhZGl1cyk7XHJcbiAgICAgIGxldCByb3RhdGlvbkFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KTtcclxuXHJcbiAgICAgIC8vIGZpcnN0IHJlc2V0IHRoaW5ncyBzbyB0aGF0IHdlJ3JlIGxvb2tpbmcgZG93biB0aGUgei1heGlzXHJcbiAgICAgIHRoaXMuYXJyb3cuY2xlYXJUcmFuc2Zvcm1zKCk7XHJcbiAgICAgIHRoaXMuYXJyb3cudHJhbnNsYXRlKG5ldyBnbFZlYzMoWzAuMCwgMC41NSwgMC4wXSkpO1xyXG4gICAgICB0aGlzLmFycm93LnJvdFgodG9SYWQoOTApKTtcclxuXHJcbiAgICAgIC8vIHJvdGF0ZSB0byBtYXRjaCB0aGUgbGlnaHQgc291cmNlXHJcbiAgICAgIHRoaXMuYXJyb3cucm90WSgtZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICB0aGlzLmFycm93LnJvdFooLXJvdGF0aW9uQW5nbGUpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUNvbG9yJywgbmV3IGdsQ29sb3IoWzEuMCwgMC45LCAwLjddKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZSBbMC0xXS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbGljayh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgaWYgKHggPiAoMSAtIHRoaXMubWluaVNpemUpICYmIHkgPiAoMSAtIHRoaXMubWluaVNpemUpKSB7XHJcbiAgICAgICAgIHRoaXMudVVzZVRocmVzaG9sZHMgPSAhdGhpcy51VXNlVGhyZXNob2xkcztcclxuICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuICAgICAgdGhpcy5vYmoub3B0aW1pemUobm9ybWFsVHlwZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMiB9IGZyb20gXCIuL2dsVmVjXCI7XHJcblxyXG50eXBlIFBvaW50ZXJFdmVudFZvaWRGdW5jdGlvbiA9IChwb3M6IGdsVmVjMikgPT4gdm9pZDtcclxudHlwZSBQb2ludGVyRXZlbnRCb29sZWFuRnVuY3Rpb24gPSAocG9zOiBnbFZlYzIpID0+IGJvb2xlYW47XHJcblxyXG5jb25zdCBEQkxfQ0xJQ0tfVElNRSA9IDMwMDsgLy8gbXNcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBtYW5hZ2luZyB0b3VjaC9tb3VzZSBldmVudHMgb3ZlciBhIGh0bWwgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvaW50ZXJFdmVudEhhbmRsZXIge1xyXG5cclxuICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgcHVibGljIG1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgcHVibGljIG9uVXA6IFZvaWRGdW5jdGlvbjtcclxuICAgcHVibGljIG9uRG93bjogUG9pbnRlckV2ZW50Vm9pZEZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25Nb3ZlOiBQb2ludGVyRXZlbnRWb2lkRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkNsaWNrOiBQb2ludGVyRXZlbnRCb29sZWFuRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbkRibENsaWNrOiBQb2ludGVyRXZlbnRWb2lkRnVuY3Rpb247XHJcblxyXG4gICBwdWJsaWMgbGFzdFBvczogZ2xWZWMyO1xyXG4gICBwcml2YXRlIGxhc3RUb3VjaFRpbWU6IG51bWJlcjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgZWxlbWVudC5vbnRvdWNoc3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC54LCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnldKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHRpbWUgLSB0aGlzLmxhc3RUb3VjaFRpbWUgPCBEQkxfQ0xJQ0tfVElNRSkge1xyXG4gICAgICAgICAgICAgICB0aGlzLm91ckRibENsaWNrKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3VyT25Eb3duKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VG91Y2hUaW1lID0gdGltZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9udG91Y2htb3ZlID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGxldCByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC54LCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnldKTtcclxuICAgICAgICAgdGhpcy5vdXJPbk1vdmUocG9zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbnRvdWNoZW5kID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMub3VyT25VcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIHRoaXMub3VyT25Eb3duKHBvcyk7XHJcblxyXG4gICAgICAgICAvLyBkaXNhYmxlIHNlbGVjdGlvbiBiZWNhdXNlIGRyYWdnaW5nIGlzIHVzZWQgZm9yIHJvdGF0aW5nIHRoZSBjYW1lcmEgYW5kIG1vdmluZyBvYmplY3RzXHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbKDxhbnk+ZXZlbnQpLmxheWVyWCwgKDxhbnk+ZXZlbnQpLmxheWVyWV0pO1xyXG4gICAgICAgICB0aGlzLm91ck9uTW92ZShwb3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2V1cCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm91ck9uVXAoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25kYmxjbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICBsZXQgcG9zID0gbmV3IGdsVmVjMihbKDxhbnk+ZXZlbnQpLmxheWVyWCwgKDxhbnk+ZXZlbnQpLmxheWVyWV0pO1xyXG4gICAgICAgICB0aGlzLm91ckRibENsaWNrKHBvcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvdXJPbkRvd24ocG9zOiBnbFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMub25DbGljayAmJiB0aGlzLm9uQ2xpY2socG9zLmNsb25lKCkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmxhc3RQb3MgPSBwb3MuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLm9uRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihwb3MuY2xvbmUoKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uVXAoKSB7XHJcblxyXG4gICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub25VcCkge1xyXG4gICAgICAgICB0aGlzLm9uVXAoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uTW92ZShwb3M6IGdsVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5vbk1vdmUpIHtcclxuICAgICAgICAgdGhpcy5vbk1vdmUocG9zLmNsb25lKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdFBvcyA9IHBvcy5jbG9uZSgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ckRibENsaWNrKHBvczogZ2xWZWMyKSB7XHJcblxyXG4gICAgICBpZiAodGhpcy5vbkRibENsaWNrKSB7XHJcbiAgICAgICAgIHRoaXMub25EYmxDbGljayhwb3MpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsIi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBsb2dnaW5nIHRpbWluZyBtZXNzYWdlcyBmb3IgcHJvZmlsZSBjb2RlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZmlsZXIge1xyXG4gICAvLyB0aGUgbGFzdCB0aW1lIHN0YW1wXHJcbiAgIHByaXZhdGUgdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgcHVibGljIGdldCBlbGFwc2VkTXMoKSB7XHJcbiAgICAgIHJldHVybiAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnQpO1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgKiBQcmludHMgYSBtZXNzYWdlIHRvIGNvbnNvbGUgb2YgdGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgbGFzdCBtYXJrXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIHByaW50IHdpdGggdGhlIHRpbWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnICsgJyAnICsgdGhpcy5lbGFwc2VkTXMudG9GaXhlZCgxKSArICcgbXMnKTtcclxuICAgICAgdGhpcy5tYXJrKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGRhdGVzIHRoZSB0aW1lc3RhbXAgdG8gbm93XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFyaygpIHtcclxuICAgICAgdGhpcy50ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgQ29sb3JSYW5nZSB9IGZyb20gXCIuL0NvbG9yUmFuZ2VcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yV2l0aEFscGhhIH0gZnJvbSBcIi4vaHRtbENvbG9yV2l0aEFscGhhXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBkYXRhIHBhc3NlZCB0byB0aGUgU2xpZGVyIGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJTZXR1cCB7XHJcbiAgIGlkOiBzdHJpbmcsXHJcbiAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgIG1pbjogbnVtYmVyLFxyXG4gICBtYXg6IG51bWJlcixcclxuICAgdmFsdWU6IG51bWJlcixcclxuICAgY29sb3JzPzogaHRtbENvbG9yW10sXHJcbiAgIG9uaW5wdXQ/OiAoKSA9PiB2b2lkLFxyXG4gICBnZXRUZXh0PzogKHNsaWRlcjogU2xpZGVyKSA9PiBzdHJpbmcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzbGlkZXIgY29tcG9zZWQgb2YgYSBsYWJlbCwgaW5wdXQgcmFuZ2UsIGNvbG9yIHNwYW4gYW5kIHZhbHVlIHNwYW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXIge1xyXG5cclxuICAgcHJpdmF0ZSBfcmFuZ2U6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX2NvbG9yU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF92YWx1ZVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JzOiBDb2xvclJhbmdlO1xyXG4gICBwcml2YXRlIF9nZXRUZXh0OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZztcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcGFyZW50IFRoZSBwYXJlbnQgaHRtbCBvYmplY3QuXHJcbiAgICAqIEBwYXJhbSBzZXR1cCBUaGUgc2V0dXAgZGF0YSBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBzZXR1cDogSVNsaWRlclNldHVwKSB7XHJcblxyXG4gICAgICB0aGlzLl9nZXRUZXh0ID0gc2V0dXAuZ2V0VGV4dDtcclxuXHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmlkID0gc2V0dXAuaWQ7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnU2xpZGVyRGl2JztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYWJlbC5pZCA9IHNldHVwLmlkICsgJ0xhYmVsJztcclxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ1NsaWRlckxhYmVsJztcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gc2V0dXAubGFiZWw7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnR5cGUgPSAncmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5pZCA9IHNldHVwLmlkICsgJ1JhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UuY2xhc3NOYW1lID0gJ1NsaWRlclJhbmdlJztcclxuICAgICAgdGhpcy5fcmFuZ2UubWluID0gc2V0dXAubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLm1heCA9IHNldHVwLm1heC50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLl9yYW5nZS52YWx1ZSA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5Db2xvcigpO1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KClcclxuICAgICAgfSk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl9yYW5nZSk7XHJcblxyXG4gICAgICBpZiAoc2V0dXAuY29sb3JzKSB7XHJcbiAgICAgICAgIHRoaXMuX2NvbG9yU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmlkID0gc2V0dXAuaWQgKyAnQ29sb3JTcGFuJztcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJDb2xvclNwYW4nO1xyXG4gICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fY29sb3JTcGFuKTtcclxuXHJcbiAgICAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBjb2xvci5cclxuICAgICAgICAgdGhpcy5jb2xvcnMgPSBzZXR1cC5jb2xvcnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmlkID0gc2V0dXAuaWQgKyAnVmFsdWVTcGFuJztcclxuICAgICAgdGhpcy5fdmFsdWVTcGFuLmNsYXNzTmFtZSA9ICdTbGlkZXJWYWx1ZVNwYW4nO1xyXG4gICAgICAvLyAgICAgIHRoaXMuX3ZhbHVlU3Bhbi5pbm5lclRleHQgPSBzZXR1cC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGhpcy5fdmFsdWVTcGFuKTtcclxuXHJcbiAgICAgIC8vIHNldCB0aGUgaW5pdGlhbCBzcGFuIHRleHRcclxuICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpO1xyXG5cclxuICAgICAgdGhpcy5fcmFuZ2Uub25pbnB1dCA9IHNldHVwLm9uaW5wdXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBzcGFuIGNvbG9yIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwZGF0ZVNwYW5Db2xvcigpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIGxldCBjb2xvciA9IGh0bWxDb2xvci5mcm9tQ29sb3IodGhpcy5fY29sb3JzLmdldCh2YWwpKTtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnRvSGV4KClcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICogU2V0cyB0aGUgc3BhbiBjb2xvciB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yLlxyXG4gKi9cclxuICAgcHJpdmF0ZSB1cGRhdGVTcGFuVGV4dCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX2dldFRleHQpIHtcclxuICAgICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHRoaXMuX2dldFRleHQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGh0bWwgcmFuZ2Ugb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbCByYW5nZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHJhbmdlKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IHNsaWRlciB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZS52YWx1ZUFzTnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciAoYW5kIGFzc29jaWF0ZWQgY29udGVudClcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgdGhlIGRlc2lyZWQgc2xpZGVyIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHZhbHVlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnZhbHVlQXNOdW1iZXIgPSB2YWw7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbiBzbGlkZXIgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWluKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1pbik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbWF4IHNsaWRlciB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuX3JhbmdlLm1heCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBjb2xvciBmb3IgdGhlIHNsaWRlclxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCBjb2xvcnMoY29sb3JzOiBodG1sQ29sb3JbXSkge1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIGNvbG9yc1xyXG4gICAgICB0aGlzLl9jb2xvcnMgPSBuZXcgQ29sb3JSYW5nZShjb2xvcnMpO1xyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGdyYWRpZW50IHN0eWxlIGZvciB0aGUgcmFuZ2Ugb2JqZWN0XHJcbiAgICAgIGxldCBncmFkaWVudFN0ciA9ICc5MGRlZyc7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGdyYWRpZW50U3RyICs9ICcsICcgKyBjb2xvcnNbaV0udG9Dc3MoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9yYW5nZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCgnICsgZ3JhZGllbnRTdHIgKyAnKSc7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgdGhlIHNwYW4gY29sb3IgdG9vXHJcbiAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBjdXJyZW50IGNvbG9yIGFzIGFuIGh0bWxDb2xvciBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBodG1sQ29sb3IoKTogaHRtbENvbG9yIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICBsZXQgdmFsID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnMuZ2V0KHZhbCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBodG1sQ29sb3JXaXRoQWxwaGEudHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYSBnbENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjdXJyZW50IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBnbENvbG9yKCk6IGdsQ29sb3Ige1xyXG4gICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgIGxldCB2YWwgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ycy5nZXQodmFsKS50b0dsQ29sb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFswLCAwLCAwXSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFNwaGVyaWNhbCBjb29yZGluYXRlcyBiYXNlZCBvbiB0aGUgV2ViR0wgdmlld2luZyBzeXN0ZW06IHg9bGVmdC1yaWdodCwgeT11cC1kb3duLCB6PW5lYXItZmFyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3BoZXJpY2FsQ29vcmQge1xyXG4gICAvKipcclxuICAgICogVGhlIGRpc3RhbmNlIGZyb20gdGhlIG9yaWdpbiB0byB0aGUgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsZXZhdGlvbiBmcm9tIHRoZSBmbG9vciB0byB0aGUgcG9pbnQuIDAgYW5kIDE4MCBhcmUgb24gdGhlXHJcbiAgICAqIGZsb29yLiA5MCBwb2ludHMgdXAuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZWxldmF0aW9uQW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGFuZ2xlLCB3aGVuIGxvb2tpbmcgZG93biBmcm9tIHRoZSB0b3AsIHRvIHRoZSBwb2ludC4gMCBwb2ludHMgcmlnaHQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcm90YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gcmFkaXVzXHJcbiAgICAqIEBwYXJhbSBlbGV2YXRpb25BbmdsZSBcclxuICAgICogQHBhcmFtIHJvdGF0aW9uQW5nbGUgXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIGVsZXZhdGlvbkFuZ2xlOiBudW1iZXIsIHJvdGF0aW9uQW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgdGhpcy5lbGV2YXRpb25BbmdsZSA9IGVsZXZhdGlvbkFuZ2xlO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uQW5nbGUgPSByb3RhdGlvbkFuZ2xlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHNwaGVyaWNhbCBjb29yZGluYXRlIGZyb20gYSBjYXJ0ZXNpYW4gcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwb3MgVGhlIGNhcnRlc2lhbiBwb2ludC5cclxuICAgICogQHJldHVybnMgVGhlIHNwaGVyaWNhbCBjb29yZGluYXRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tWFlaKHBvczogbnVtYmVyW10pOiBTcGhlcmljYWxDb29yZCB7XHJcblxyXG4gICAgICBsZXQgeCA9IHBvc1swXTtcclxuICAgICAgbGV0IHkgPSBwb3NbMV07XHJcbiAgICAgIGxldCB6ID0gcG9zWzJdO1xyXG5cclxuICAgICAgbGV0IHJhZGl1cyA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xyXG4gICAgICBsZXQgcm90YXRpb25BbmdsZSA9ICgxODAgLyBNYXRoLlBJKSAqIE1hdGguYXRhbjIoeiwgeCk7XHJcbiAgICAgIGxldCBlbGV2YXRpb25BbmdsZSA9ICgxODAgLyBNYXRoLlBJKSAqIE1hdGguYXNpbih5IC8gcmFkaXVzKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgU3BoZXJpY2FsQ29vcmQocmFkaXVzLCBlbGV2YXRpb25BbmdsZSwgcm90YXRpb25BbmdsZSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIHNwaGVyaWNhbCBjb29yZGluYXRlIHRvIGEgY2FydGVzaWFuIGNvb3JkaW5hdGUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgY2FydGVzaWFuIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9YWVooKTogbnVtYmVyW10ge1xyXG5cclxuICAgICAgbGV0IGZsb29yUmFkaXVzID0gdGhpcy5yYWRpdXMgKiBNYXRoLmNvcygoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLmVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHggPSBmbG9vclJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMucm90YXRpb25BbmdsZSk7XHJcbiAgICAgIGxldCB5ID0gdGhpcy5yYWRpdXMgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiB0aGlzLmVsZXZhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHogPSBmbG9vclJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMucm90YXRpb25BbmdsZSk7XHJcblxyXG4gICAgICByZXR1cm4gW3gsIHksIHpdO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBsYW5lc0FwcCB9IGZyb20gXCIuL1BsYW5lc0FwcFwiO1xyXG5pbXBvcnQgeyB0b1JhZCwgdG9EZWcsIGNsYW1wLCBpc01vYmlsZSB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgZ2xWZWMyIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50SGFuZGxlciB9IGZyb20gXCIuL1BvaW50ZXJFdmVudEhhbmRsZXJcIjtcclxuXHJcbi8vIFRPRE8gbWFrZSB0aGVzZSB2YXJpYWJsZXNcclxuZXhwb3J0IGxldCB0ZXh0dXJlU2l6ZSA9IDI1NjtcclxuZXhwb3J0IGxldCBkaXNwbGF5U2l6ZSA9IDE1MDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaHJlc2hvbGRDdHJsIHtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBwcml2YXRlIGhpZGRlbkNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHByaXZhdGUgYXBwOiBQbGFuZXNBcHA7XHJcbiAgIHByaXZhdGUgbW91c2VPZmZzZXQgPSBuZXcgZ2xWZWMyKCk7XHJcbiAgIHByaXZhdGUgaGl0ID0gMDtcclxuICAgcHJpdmF0ZSBoYW5kbGVyOiBQb2ludGVyRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgcHJpdmF0ZSBiYWxsQ2VudGVyOiBnbFZlYzI7XHJcbiAgIHByaXZhdGUgcDE6IGdsVmVjMjtcclxuICAgcHJpdmF0ZSBwMjogZ2xWZWMyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGFwcDogUGxhbmVzQXBwKSB7XHJcblxyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgZGlzcGxheVNpemUgPSAzMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdUaHJlc2hvbGRDYW52YXMnO1xyXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGRpc3BsYXlTaXplO1xyXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkaXNwbGF5U2l6ZTtcclxuXHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcblxyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy53aWR0aCA9IHRleHR1cmVTaXplO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5oZWlnaHQgPSB0ZXh0dXJlU2l6ZTtcclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuQ2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMuaGFuZGxlciA9IG5ldyBQb2ludGVyRXZlbnRIYW5kbGVyKHRoaXMuY2FudmFzKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRG93biA9IChwb3MpID0+IHRoaXMub25Eb3duKHBvcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbk1vdmUgPSAocG9zKSA9PiB0aGlzLm9uTW92ZShwb3MpO1xyXG5cclxuICAgfVxyXG4gICBwcml2YXRlIG9uRG93bihwb3M6IGdsVmVjMikge1xyXG5cclxuICAgICAgdGhpcy5oaXRUZXN0KHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgaGl0VGVzdChwb3M6IGdsVmVjMikge1xyXG4gICAgICBsZXQgZDEgPSB0aGlzLnAxLmRpc3RhbmNlKHBvcyk7XHJcbiAgICAgIGxldCBkMiA9IHRoaXMucDIuZGlzdGFuY2UocG9zKTtcclxuXHJcbiAgICAgIGNvbnN0IEhJVF9SQURJVVMgPSAxNTtcclxuICAgICAgaWYgKGQxIDwgSElUX1JBRElVUyAmJiBkMSA8PSBkMikge1xyXG4gICAgICAgICB0aGlzLmhpdCA9IDE7XHJcbiAgICAgICAgIHRoaXMubW91c2VPZmZzZXQgPSBuZXcgZ2xWZWMyKFt0aGlzLnAxLnggLSBwb3MueCwgdGhpcy5wMS55IC0gcG9zLnldKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChkMiA8IEhJVF9SQURJVVMgJiYgZDIgPD0gZDEpIHtcclxuICAgICAgICAgdGhpcy5oaXQgPSAyO1xyXG4gICAgICAgICB0aGlzLm1vdXNlT2Zmc2V0ID0gbmV3IGdsVmVjMihbdGhpcy5wMi54IC0gcG9zLngsIHRoaXMucDIueSAtIHBvcy55XSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gMDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW92ZShwb3M6IGdsVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5oYW5kbGVyLm1vdXNlRG93biAmJiB0aGlzLmhpdCA+IDApIHtcclxuICAgICAgICAgbGV0IGhpdFB0ID0gbmV3IGdsVmVjMihbcG9zLnggLSB0aGlzLm1vdXNlT2Zmc2V0LngsIHBvcy55IC0gdGhpcy5tb3VzZU9mZnNldC55XSk7XHJcbiAgICAgICAgIGhpdFB0LnggPSBNYXRoLm1heChoaXRQdC54LCB0aGlzLmJhbGxDZW50ZXIueCk7XHJcbiAgICAgICAgIGhpdFB0LnkgPSBNYXRoLm1pbihoaXRQdC55LCB0aGlzLmJhbGxDZW50ZXIueSk7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmJhbGxDZW50ZXIuZGlzdGFuY2UoaGl0UHQpO1xyXG4gICAgICAgICBsZXQgYW5nbGUgPSB0b0RlZyhNYXRoLmFzaW4oKGhpdFB0LnggLSB0aGlzLmJhbGxDZW50ZXIueCkgLyByYWRpdXMpKTtcclxuICAgICAgICAgaWYgKHRoaXMuaGl0ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAudGhyZXNob2xkMSA9IGNsYW1wKGFuZ2xlLCAwLCA5MCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLnRocmVzaG9sZDIgPSBjbGFtcChhbmdsZSwgMCwgOTApO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGRyYXcoKSB7XHJcblxyXG4gICAgICBsZXQgYmFsbEltYWdlRGF0YSA9IHRoaXMuYXBwLnJlbmRlcmVyLmdldEJhbGxJbWFnZSgpO1xyXG5cclxuICAgICAgdGhpcy5oaWRkZW5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoYmFsbEltYWdlRGF0YS5pbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY3R4LnJlc2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUoMCwgZGlzcGxheVNpemUgLyAyKTtcclxuICAgICAgY3R4LnNjYWxlKGRpc3BsYXlTaXplIC8gdGV4dHVyZVNpemUsIC1kaXNwbGF5U2l6ZSAvIHRleHR1cmVTaXplKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmhpZGRlbkNhbnZhcywgMCwgLXRleHR1cmVTaXplIC8gMik7XHJcblxyXG4gICAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgdGhpcy5iYWxsQ2VudGVyID0gbmV3IGdsVmVjMihbXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsQ2VudGVyLngsXHJcbiAgICAgICAgIGRpc3BsYXlTaXplICogKDEgLSBiYWxsSW1hZ2VEYXRhLmJhbGxDZW50ZXIueSlcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2xpbWVncmVlbic7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjaydcclxuXHJcbiAgICAgIGNvbnN0IEtOT0JfTEVOR1RIID0gMjU7XHJcbiAgICAgIGNvbnN0IEtOT0JfUkFESVVTID0gODtcclxuICAgICAgbGV0IHIgPSBkaXNwbGF5U2l6ZSAqIGJhbGxJbWFnZURhdGEuYmFsbFJhZGl1cztcclxuICAgICAgbGV0IHMxID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDEsIHIpO1xyXG4gICAgICB0aGlzLnAxID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDEsIHIgKyBLTk9CX0xFTkdUSCk7XHJcbiAgICAgIGxldCBzMiA9IHRoaXMuZ2V0UHQodGhpcy5iYWxsQ2VudGVyLCB0aGlzLmFwcC5yZW5kZXJlci50aHJlc2hvbGQyLCByKTtcclxuICAgICAgdGhpcy5wMiA9IHRoaXMuZ2V0UHQodGhpcy5iYWxsQ2VudGVyLCB0aGlzLmFwcC5yZW5kZXJlci50aHJlc2hvbGQyLCByICsgS05PQl9MRU5HVEgpO1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKHMxLngsIHMxLnkpO1xyXG4gICAgICBjdHgubGluZVRvKHRoaXMucDEueCwgdGhpcy5wMS55KTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHRoaXMucDEueCwgdGhpcy5wMS55LCBLTk9CX1JBRElVUywgMCwgdG9SYWQoMzYwKSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbyhzMi54LCBzMi55KTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLnAyLngsIHRoaXMucDIueSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh0aGlzLnAyLngsIHRoaXMucDIueSwgS05PQl9SQURJVVMsIDAsIHRvUmFkKDM2MCkpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0UHQoY2VudGVyOiBnbFZlYzIsIHRocmVzaG9sZDogbnVtYmVyLCByYWRpdXM6IG51bWJlcik6IGdsVmVjMiB7XHJcblxyXG4gICAgICBsZXQgb3kgPSByYWRpdXMgKiBNYXRoLnNpbih0b1JhZCg5MCAtIHRocmVzaG9sZCkpO1xyXG4gICAgICBsZXQgb3ggPSByYWRpdXMgKiBNYXRoLmNvcyh0b1JhZCg5MCAtIHRocmVzaG9sZCkpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzIoW2NlbnRlci54ICsgb3gsIGNlbnRlci55IC0gb3ldKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgM0QgYXJyb3cgdXNpbmcgdHJpYW5nbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVBcnJvdyBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIGNvbnN0IE5VTV9TVEVQUyA9IDMwO1xyXG4gICAgICBjb25zdCBUSVAgPSBuZXcgZ2xWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgIGNvbnN0IFRPVEFMX0xFTkdUSCA9IDAuNDtcclxuICAgICAgY29uc3QgQVJST1dfUkFESVVTID0gMC4xNTtcclxuICAgICAgY29uc3QgQVJST1dfTEVOR1RIID0gMS41ICogQVJST1dfUkFESVVTO1xyXG4gICAgICBjb25zdCBTSEFGVF9SQURJVVMgPSAwLjUgKiBBUlJPV19SQURJVVM7XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgYXJyb3cgaGVhZFxyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2goVElQKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoWzAsIEFSUk9XX0xFTkdUSCwgMF0pKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgeCA9IEFSUk9XX1JBRElVUyAqIE1hdGguc2luKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB5ID0gQVJST1dfTEVOR1RIO1xyXG4gICAgICAgICBsZXQgeiA9IEFSUk9XX1JBRElVUyAqIE1hdGguY29zKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFt4LCB5LCB6XSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBpVGlwID0gMDtcclxuICAgICAgbGV0IGlCYXNlID0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaTEgPSAyICsgaTtcclxuICAgICAgICAgbGV0IGkyID0gKGkgPT0gTlVNX1NURVBTIC0gMSkgPyAwIDogaTEgKyAxO1xyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpVGlwLCBpMiwgaTEsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpQmFzZSwgaTEsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYnVpbGQgdGhlIGFycm93IHNoYWZ0XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFswLCBUT1RBTF9MRU5HVEgsIDBdKSk7XHJcbiAgICAgIGxldCBpRW5kID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gU0hBRlRfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBBUlJPV19MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gU0hBRlRfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgeCA9IFNIQUZUX1JBRElVUyAqIE1hdGguc2luKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIGxldCB5ID0gVE9UQUxfTEVOR1RIO1xyXG4gICAgICAgICBsZXQgeiA9IFNIQUZUX1JBRElVUyAqIE1hdGguY29zKGkgLyAoTlVNX1NURVBTIC0gMSkgKiAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFt4LCB5LCB6XSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBpU3RhcnQgPSBpRW5kICsgMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fU1RFUFM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaTEgPSBpU3RhcnQgKyBpO1xyXG4gICAgICAgICBsZXQgaTIgPSAoaSA9PSBOVU1fU1RFUFMgLSAxKSA/IGlTdGFydCA6IGkxICsgMTtcclxuICAgICAgICAgbGV0IGkzID0gaTEgKyBOVU1fU1RFUFM7XHJcbiAgICAgICAgIGxldCBpNCA9IGkyICsgTlVNX1NURVBTO1xyXG5cclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkyLCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGk0LCBpMywgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMywgaTQsIGlFbmQsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBWb2x1bWUgfSBmcm9tIFwiLi9Wb2x1bWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZUN1YmUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyLCBjZW50ZXI6IGdsVmVjMykge1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlVHJpYW5nbGVzKHNpemUsIGNlbnRlcik7XHJcblxyXG4gICAgICB0aGlzLnZvbHVtZXMucHVzaChuZXcgVm9sdW1lKCkpO1xyXG4gICAgICB0aGlzLnZvbHVtZXNbMF0uYm94TWluID0gdGhpcy5ib3hNaW4uY2xvbmUoKTtcclxuICAgICAgdGhpcy52b2x1bWVzWzBdLmJveE1heCA9IHRoaXMuYm94TWF4LmNsb25lKCk7XHJcbiAgICAgIHRoaXMudm9sdW1lc1swXS50cmlhbmdsZXMgPSB0aGlzLnRyaWFuZ2xlcztcclxuICAgfVxyXG5cclxuICAgY3JlYXRlRmFjZShpMTogbnVtYmVyLCBpMjogbnVtYmVyLCBpMzogbnVtYmVyLCBpNDogbnVtYmVyKSB7XHJcblxyXG4gICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTIsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTIsIGk0LCBpMywgdGhpcy5ub3JtYWxzKSk7XHJcbiAgIH1cclxuXHJcbiAgIGNyZWF0ZVRyaWFuZ2xlcyhzaXplOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54IC0gc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56IC0gc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCArIHNpemUgLyAyLCBjZW50ZXIueSAtIHNpemUgLyAyLCBjZW50ZXIueiArIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55ICsgc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMCwgMSwgMiwgMyk7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSg0LCA2LCA1LCA3KTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgwLCA0LCAxLCA1KTtcclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDIsIDMsIDYsIDcpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDAsIDIsIDQsIDYpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMSwgNSwgMywgNyk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVm9sdW1lIH0gZnJvbSBcIi4vVm9sdW1lXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4vUHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBOb3JtYWxUeXBlIHtcclxuICAgU21vb3RoLFxyXG4gICBGbGF0XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iakRhdGEge1xyXG4gICB2ZXJ0aWNlczogRmxvYXQzMkFycmF5O1xyXG4gICBub3JtYWxzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIG5JbmRpY2VzOiBJbnQzMkFycmF5O1xyXG4gICB2SW5kaWNlczogSW50MzJBcnJheTtcclxuICAgYm94TWluOiBnbFZlYzM7XHJcbiAgIGJveE1heDogZ2xWZWMzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBjb21wdXRlIG5vcm1hbHMgZm9yIHZlcnRpY2VzIHRoYXQgam9pbiBtdWx0aXBsZSBmYWNlc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlOb3JtVmVydGV4IHtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBnbFZlYzNbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhpcyB2ZXJ0ZXhcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBub3JtYWwgU3RvcmVzIGEgbm9ybWFsIGZvciB0aGUgdmVydGV4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcHVzaChub3JtYWw6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWwpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG5vcm1hbCBieSBhdmVyYWdpbmcgYWxsIHRoZSBpbmRpdmlkdWFsIG5vcm1hbHMgYXNzb2NpYXRlZCB3aXRoIHRoZSB2ZXJ0ZXhcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbm9ybWFsKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBuID0gbmV3IGdsVmVjMygpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9ybWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBuLnggKz0gdGhpcy5ub3JtYWxzW2ldLng7XHJcbiAgICAgICAgIG4ueSArPSB0aGlzLm5vcm1hbHNbaV0ueTtcclxuICAgICAgICAgbi56ICs9IHRoaXMubm9ybWFsc1tpXS56O1xyXG4gICAgICB9XHJcbiAgICAgIG4ueCAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBuLnkgLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi56IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcblxyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm9ybWFscy5sZW5ndGgpO1xyXG4gICAgICByZXR1cm4gbjtcclxuICAgfVxyXG59XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciByZXByZXNlbnRpbmcgYW4gb2JqZWN0IGZyb20gYSBidW5jaCBvZiB0cmlhbmdsZXMuIFRoZSBjbGFzc1xyXG4gKiBlZmZpY2llbnRseSBtYW5hZ2VzIHRoZSB0cmlhbmdsZXMgYnkgc3RvcmluZyB0aGVtIGluIHZvbHVtZXMgYW5kIGJ5XHJcbiAqIHBhc3NpbmcgdGhlbSB0byBXZWJHTCB1c2luZyBVbmlmb3JtIEJ1ZmZlcnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iaiB7XHJcbiAgIHB1YmxpYyB2ZXJ0aWNlczogZ2xWZWMzW10gPSBbXTtcclxuICAgcHVibGljIG5vcm1hbHM6IGdsVmVjM1tdID0gW107XHJcbiAgIHB1YmxpYyB0cmlhbmdsZXM6IEluZGV4ZWRUcmlhbmdsZVtdID0gW107XHJcbiAgIHB1YmxpYyBib3hNaW4gPSBuZXcgZ2xWZWMzKFtOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFXSk7XHJcbiAgIHB1YmxpYyBib3hNYXggPSBuZXcgZ2xWZWMzKFstTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFXSk7XHJcbiAgIHB1YmxpYyB2b2x1bWVzOiBWb2x1bWVbXSA9IFtdO1xyXG5cclxuICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3hNYXgueCAtIHRoaXMuYm94TWluLng7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC55IC0gdGhpcy5ib3hNaW4ueTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3hNYXgueiAtIHRoaXMuYm94TWluLno7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgY2VudGVyKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgKHRoaXMuYm94TWluLnggKyB0aGlzLmJveE1heC54KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi55ICsgdGhpcy5ib3hNYXgueSkgLyAyLFxyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueiArIHRoaXMuYm94TWF4LnopIC8gMixcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBwdXNoKHRyaTogSW5kZXhlZFRyaWFuZ2xlKSB7XHJcbiAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2godHJpKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRyaS5taW5YKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9IE1hdGgubWluKHRoaXMuYm94TWluLnksIHRyaS5taW5ZKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueiA9IE1hdGgubWluKHRoaXMuYm94TWluLnosIHRyaS5taW5aKTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHRyaS5tYXhYKTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnksIHRyaS5tYXhZKTtcclxuICAgICAgdGhpcy5ib3hNYXgueiA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnosIHRyaS5tYXhaKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNjYWxlcyB0aGUgb2JqZWN0IHRvIHRoZSBzcGVjaWZpZWQgc2l6ZSBhbmQgY2VudGVycyBpdCBhYm91dCAoMCwwLDApXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gc2l6ZSBUaGUgbWF4IHNpemUgZm9yIHRoZSB3aWR0aCwgaGVpZ2h0LCBhbmQgZGVwdGhcclxuICAgICovXHJcbiAgIHB1YmxpYyBhdXRvQ2VudGVyKHNpemU6IG51bWJlcikge1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG5cclxuICAgICAgbGV0IHRyYW5zID0gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueCArIHRoaXMuYm94TWluLngpIC8gMixcclxuICAgICAgICAgLSh0aGlzLmJveE1heC55ICsgdGhpcy5ib3hNaW4ueSkgLyAyLFxyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnogKyB0aGlzLmJveE1pbi56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IHNjYWxlID0gc2l6ZSAvIE1hdGgubWF4KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmRlcHRoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudmVydGljZXNbaV07XHJcblxyXG4gICAgICAgICB2LnggPSAodi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi55ID0gKHYueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYueiA9ICh2LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveE1pbi54ID0gKHRoaXMuYm94TWluLnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gKHRoaXMuYm94TWluLnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gKHRoaXMuYm94TWluLnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gKHRoaXMuYm94TWF4LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gKHRoaXMuYm94TWF4LnkgKyB0cmFucy55KSAqIHNjYWxlO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gKHRoaXMuYm94TWF4LnogKyB0cmFucy56KSAqIHNjYWxlO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0aGlzLnZvbHVtZXNbaV07XHJcbiAgICAgICAgIHYuYm94TWluLnggPSAodi5ib3hNaW4ueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnkgPSAodi5ib3hNaW4ueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWluLnogPSAodi5ib3hNaW4ueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnggPSAodi5ib3hNYXgueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnkgPSAodi5ib3hNYXgueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgICAgIHYuYm94TWF4LnogPSAodi5ib3hNYXgueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdhdXRvQWRqdXN0KCknKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNoaWZ0IHRoZSBvYmplY3QgaW4gc3BhY2UuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBhbW91bnQgdG8gc2hpZnRcclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudmVydGljZXNbaV07XHJcblxyXG4gICAgICAgICB2LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHYueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdi56ICs9IG9mZnNldC56O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveE1pbi54ICs9IG9mZnNldC54O1xyXG4gICAgICB0aGlzLmJveE1pbi55ICs9IG9mZnNldC55O1xyXG4gICAgICB0aGlzLmJveE1pbi56ICs9IG9mZnNldC56O1xyXG4gICAgICB0aGlzLmJveE1heC54ICs9IG9mZnNldC54O1xyXG4gICAgICB0aGlzLmJveE1heC55ICs9IG9mZnNldC55O1xyXG4gICAgICB0aGlzLmJveE1heC56ICs9IG9mZnNldC56O1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRoaXMudm9sdW1lc1tpXTtcclxuICAgICAgICAgdm9sLmJveE1pbi54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICB2b2wuYm94TWluLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueiArPSBvZmZzZXQuejtcclxuICAgICAgICAgdm9sLmJveE1heC54ICs9IG9mZnNldC54O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueiArPSBvZmZzZXQuejtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQnJlYWtzIHRoZSBvYmplY3QgaW50byBldmVubHkgc3BhY2VkIHZvbHVtZXMuIFRoZSBudW1iZXIgb2Ygdm9sdW1lcyBpcyBhdXRvbWF0aWNhbGx5XHJcbiAgICAqIGRldGVybWluZWQgYmFzZWQgb24gdGhlIG51bWJlciBvZiB0cmlhbmdsZXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYnJlYWtJbnRvVm9sdW1lcygpIHtcclxuICAgICAgbGV0IG51bVN0ZXBzO1xyXG4gICAgICBpZiAodGhpcy50cmlhbmdsZXMubGVuZ3RoIDwgNDApIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHJpYW5nbGVzLmxlbmd0aCA8IDE1MDApIHtcclxuICAgICAgICAgbnVtU3RlcHMgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52b2x1bWVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3cobnVtU3RlcHMsIDMpOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52b2x1bWVzLnB1c2gobmV3IFZvbHVtZSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdCA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5YIC0gdGhpcy5ib3hNaW4ueCkgLyAodGhpcy5ib3hNYXgueCAtIHRoaXMuYm94TWluLngpKTtcclxuICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWSAtIHRoaXMuYm94TWluLnkpIC8gKHRoaXMuYm94TWF4LnkgLSB0aGlzLmJveE1pbi55KSk7XHJcbiAgICAgICAgIGxldCB6ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblogLSB0aGlzLmJveE1pbi56KSAvICh0aGlzLmJveE1heC56IC0gdGhpcy5ib3hNaW4ueikpO1xyXG4gICAgICAgICB4ID0gY2xhbXAoeCwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeSA9IGNsYW1wKHksIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHogPSBjbGFtcCh6LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgIHRoaXMudm9sdW1lc1tpbmRleF0ucHVzaCh0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbHModHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG5cclxuICAgICAgbGV0IG5vcm1hbHM6IGdsVmVjM1tdID0gW107XHJcbiAgICAgIGxldCBtdWx0aU5vcm1WZXJ0aWNlczogTXVsdGlOb3JtVmVydGV4W10gPSBbXTtcclxuICAgICAgaWYgKHR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlcy5wdXNoKG5ldyBNdWx0aU5vcm1WZXJ0ZXgoKSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0b3JlIHRoZSBub3JtYWxzIHdpdGggZWFjaCB2ZXJ0ZXggLSB3ZSdsbCBsYXRlciBhdmVyYWdlIHRoZXNlXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgbiA9IHRyaS5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pVjBdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pVjFdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pVjJdLnB1c2gobik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBub3JtYWxzIGFycmF5XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXVsdGlOb3JtVmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKG11bHRpTm9ybVZlcnRpY2VzW2ldLm5vcm1hbCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdHJpYW5nbGVzXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICB0cmkubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgICAgIHRyaS5pTjAgPSB0cmkuaVYwO1xyXG4gICAgICAgICAgICB0cmkuaU4xID0gdHJpLmlWMTtcclxuICAgICAgICAgICAgdHJpLmlOMiA9IHRyaS5pVjI7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaCh0cmkuY29tcHV0ZU5vcm1hbCgpKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9ybWFscy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgdHJpLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICAgICB0cmkuaU4wID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRyaS5pTjEgPSBpbmRleDtcclxuICAgICAgICAgICAgdHJpLmlOMiA9IGluZGV4O1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuXHJcbiAgICAgIHAubG9nKCdjb21wdXRlTm9ybWFscycpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyBpbiB0aGUgZm9yIC5PQkogZmlsZSBmb3JtYXRcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRoZSBzdHJpbmdcclxuICAgICovXHJcbiAgIHB1YmxpYyB0b09ialN0cmluZyhkaWdpdHMgPSA4KSB7XHJcblxyXG4gICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgIHN0ciArPSAnIyBWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnIyBOb3JtYWxzOiAnICsgdGhpcy5ub3JtYWxzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJyMgVHJpYW5nbGVzOiAnICsgdGhpcy50cmlhbmdsZXMubGVuZ3RoICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnXFxuJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudmVydGljZXNbaV07XHJcbiAgICAgICAgIHN0ciArPSAndiAnICsgdi54LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2LnkudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHYuei50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IG4gPSB0aGlzLm5vcm1hbHNbaV07XHJcbiAgICAgICAgIHN0ciArPSAndm4gJyArIG4ueC50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgbi55LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuLnoudG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHQgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgc3RyICs9ICdmICcgK1xyXG4gICAgICAgICAgICAodC5pVjAgKyAxKSArICcvLycgKyAodC5pTjAgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmlWMSArIDEpICsgJy8vJyArICh0LmlOMSArIDEpICsgJyAnICtcclxuICAgICAgICAgICAgKHQuaVYyICsgMSkgKyAnLy8nICsgKHQuaU4yICsgMSkgKyAnXFxuJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuXHJcbiAgICAgIGxldCBtc2cgPSAnT3B0aW1pemVkIC5PQkogY29udGVudCBjb3BpZWQgdG8gY2xpcGJvYXJkXFxuXFxuJztcclxuICAgICAgbXNnICs9ICdOdW0gVHJpYW5nbGVzOiAnICsgdGhpcy50cmlhbmdsZXMubGVuZ3RoICsgJ1xcbic7XHJcblxyXG4gICAgICBsZXQgdmVydGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbiAgICAgIGxldCBpbmRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgZ2VuZXJhdGUgYSB1bmlxdWUgc2V0IG9mIHZlcnRpY2VzXHJcbiAgICAgIGxldCB1bmlxdWVWZXJ0aWNlczogZ2xWZWMzW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICBsZXQgb2xkVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuICAgICAgICAgbGV0IGtleSA9IHRoaXMudmVydGljZXNbaV0udG9TdHJpbmcoNCwgJyAnKTtcclxuICAgICAgICAgbGV0IG9sZEluZGV4ID0gaSArIDE7XHJcbiAgICAgICAgIGxldCBuZXdJbmRleDtcclxuICAgICAgICAgaWYgKHZlcnRleFRvSW5kZXhNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgLy8ganVzdCBtYXAgdGhlIG9sZCBpbmRleCB0byB0aGUgZXhpc3RpbmcgZW50cnlcclxuICAgICAgICAgICAgbmV3SW5kZXggPSB2ZXJ0ZXhUb0luZGV4TWFwLmdldChrZXkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZW50cnlcclxuICAgICAgICAgICAgbmV3SW5kZXggPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhUb0luZGV4TWFwLnNldChrZXksIG5ld0luZGV4KTtcclxuICAgICAgICAgICAgdW5pcXVlVmVydGljZXMucHVzaChvbGRWZXJ0ZXgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vIHN0b3JlIHRoZSB0cmFuc2xhdGlvblxyXG4gICAgICAgICBpbmRleFRvSW5kZXhNYXAuc2V0KG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBvbGRTaXplID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICAgIGxldCBuZXdTaXplID0gdW5pcXVlVmVydGljZXMubGVuZ3RoO1xyXG4gICAgICBtc2cgKz0gJ051bSBWZXJ0aWNlczogJyArIG9sZFNpemUgKyAnIHRvICcgKyBuZXdTaXplICsgJywgJyArICgxMDAgKiBuZXdTaXplIC8gb2xkU2l6ZSkudG9GaXhlZCgpICsgJyAlXFxuJztcclxuXHJcbiAgICAgIC8vIHJlc2V0IGFsbCB0aGUgdmVydGljZXNcclxuICAgICAgdGhpcy52ZXJ0aWNlcyA9IHVuaXF1ZVZlcnRpY2VzO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgdHJpLnZlcnRpY2VzID0gdW5pcXVlVmVydGljZXM7XHJcbiAgICAgICAgIHRyaS5pVjAgPSBpbmRleFRvSW5kZXhNYXAuZ2V0KHRyaS5pVjAgKyAxKSAtIDE7XHJcbiAgICAgICAgIHRyaS5pVjEgPSBpbmRleFRvSW5kZXhNYXAuZ2V0KHRyaS5pVjEgKyAxKSAtIDE7XHJcbiAgICAgICAgIHRyaS5pVjIgPSBpbmRleFRvSW5kZXhNYXAuZ2V0KHRyaS5pVjIgKyAxKSAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9sZFNpemUgPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKG5vcm1hbFR5cGUpO1xyXG4gICAgICBuZXdTaXplID0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbXNnICs9ICdOdW0gTm9ybWFsczogJyArIG9sZFNpemUgKyAnIHRvICcgKyBuZXdTaXplICsgJywgJyArICgxMDAgKiBuZXdTaXplIC8gb2xkU2l6ZSkudG9GaXhlZCgpICsgJyAlJztcclxuXHJcbiAgICAgIGxldCBzdHIgPSB0aGlzLnRvT2JqU3RyaW5nKDYpO1xyXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzdHIpLnRoZW4oKCkgPT4geyBhbGVydChtc2cpIH0pO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHB1c2hWZWMoYXJyYXk6IG51bWJlcltdLCB2ZWM6IGdsVmVjMykge1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy54KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueSk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZXhwb3J0KCk6IFRyaWFuZ2xlT2JqRGF0YSB7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBUcmlhbmdsZU9iakRhdGE7XHJcblxyXG4gICAgICAvLyBjb252ZXJ0IHRoZSB0cmlhbmdsZXMgaW50byBhcnJheXMgdGhhdCBjYW4gYmUgdXBsb2FkZWRcclxuICAgICAgbGV0IHZlcnRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHZlcnRpY2VzLCB0aGlzLnZlcnRpY2VzW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyhub3JtYWxzLCB0aGlzLm5vcm1hbHNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBuSW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcblxyXG4gICAgICAgICB2SW5kaWNlcy5wdXNoKHRyaS5pVjApO1xyXG4gICAgICAgICB2SW5kaWNlcy5wdXNoKHRyaS5pVjEpO1xyXG4gICAgICAgICB2SW5kaWNlcy5wdXNoKHRyaS5pVjIpO1xyXG5cclxuICAgICAgICAgbkluZGljZXMucHVzaCh0cmkuaU4wKTtcclxuICAgICAgICAgbkluZGljZXMucHVzaCh0cmkuaU4xKTtcclxuICAgICAgICAgbkluZGljZXMucHVzaCh0cmkuaU4yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YS52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbHMpO1xyXG4gICAgICBkYXRhLnZJbmRpY2VzID0gbmV3IEludDMyQXJyYXkodkluZGljZXMpO1xyXG4gICAgICBkYXRhLm5JbmRpY2VzID0gbmV3IEludDMyQXJyYXkobkluZGljZXMpO1xyXG4gICAgICBkYXRhLmJveE1pbiA9IHRoaXMuYm94TWluLmNsb25lKCk7XHJcbiAgICAgIGRhdGEuYm94TWF4ID0gdGhpcy5ib3hNYXguY2xvbmUoKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcblxyXG5cclxuICAgcHJpdmF0ZSBzdGF0aWMgZGF0YTJ2ZXJ0ZXgoZGF0YTogVHJpYW5nbGVPYmpEYXRhLCBpbmRleDogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzWzMgKiBpbmRleCArIDBdLFxyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzWzMgKiBpbmRleCArIDFdLFxyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzWzMgKiBpbmRleCArIDJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGRhdGEybm9ybWFsKGRhdGE6IFRyaWFuZ2xlT2JqRGF0YSwgaW5kZXg6IG51bWJlcik6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgZGF0YS5ub3JtYWxzWzMgKiBpbmRleCArIDBdLFxyXG4gICAgICAgICBkYXRhLm5vcm1hbHNbMyAqIGluZGV4ICsgMV0sXHJcbiAgICAgICAgIGRhdGEubm9ybWFsc1szICogaW5kZXggKyAyXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBpbXBvcnQoZGF0YTogVHJpYW5nbGVPYmpEYXRhKTogVHJpYW5nbGVPYmoge1xyXG4gICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iaigpO1xyXG5cclxuICAgICAgLy8gcmVzdG9yZSB2ZXJ0aWNlc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudmVydGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIHRPYmoudmVydGljZXMucHVzaCh0aGlzLmRhdGEydmVydGV4KGRhdGEsIGkpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVzdG9yZSBub3JtYWxzXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5ub3JtYWxzLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICB0T2JqLm5vcm1hbHMucHVzaCh0aGlzLmRhdGEybm9ybWFsKGRhdGEsIGkpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVzdG9yZSB0cmlhbmdsZXNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnZJbmRpY2VzLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaVYwID0gZGF0YS52SW5kaWNlc1szICogaSArIDBdO1xyXG4gICAgICAgICBsZXQgaVYxID0gZGF0YS52SW5kaWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICBsZXQgaVYyID0gZGF0YS52SW5kaWNlc1szICogaSArIDJdO1xyXG4gICAgICAgICBsZXQgaU4wID0gZGF0YS5uSW5kaWNlc1szICogaSArIDBdO1xyXG4gICAgICAgICBsZXQgaU4xID0gZGF0YS5uSW5kaWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICBsZXQgaU4yID0gZGF0YS5uSW5kaWNlc1szICogaSArIDJdO1xyXG4gICAgICAgICBsZXQgdCA9IG5ldyBJbmRleGVkVHJpYW5nbGUodE9iai52ZXJ0aWNlcywgaVYwLCBpVjEsIGlWMiwgdE9iai5ub3JtYWxzLCBpTjAsIGlOMSwgaU4yKTtcclxuICAgICAgICAgdE9iai50cmlhbmdsZXMucHVzaCh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdE9iai5ib3hNaW4gPSBuZXcgZ2xWZWMzKGRhdGEuYm94TWluLnZhbHVlcyk7XHJcbiAgICAgIHRPYmouYm94TWF4ID0gbmV3IGdsVmVjMyhkYXRhLmJveE1heC52YWx1ZXMpO1xyXG5cclxuICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0dXNGdW5jdGlvbiA9IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGxvYWRzIGEgLm9iaiBmaWxlIGFuZCBjcmVhdGVzIHRyaWFuZ2xlcyBmb3IgaXRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iakZpbGUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVN0YXR1czogU3RhdHVzRnVuY3Rpb247XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIHN0YXR1c0Z1bmN0aW9uPzogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAvLyByZWNvcmQgdGhlIHN0YXR1cyBmdW5jdGlvbi4gSWYgb25lIGlzIG5vdCBzdXBwbGllZCwgY3JlYXRlIG9uZSB0aGF0IGRvZXMgbm90aGluZ1xyXG4gICAgICBpZiAoc3RhdHVzRnVuY3Rpb24pIHtcclxuICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMgPSBzdGF0dXNGdW5jdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFyc2Uoc3JjKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZUZhY2UobGluZTogc3RyaW5nKTogeyBpVjogbnVtYmVyW10sIGlOOiBudW1iZXJbXSB9IHtcclxuICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgaVY6IFtdIGFzIG51bWJlcltdLFxyXG4gICAgICAgICBpTjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgIGxldCBudW1WYWxzID0gdG9rZW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmFsczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2YWxzID0gdG9rZW5zW2kgKyAxXS5zcGxpdCgnLycpO1xyXG4gICAgICAgICByZXQuaVYucHVzaChwYXJzZUludCh2YWxzWzBdKSAtIDEpO1xyXG4gICAgICAgICByZXQuaU4ucHVzaCh2YWxzLmxlbmd0aCA9PT0gMyA/IHBhcnNlSW50KHZhbHNbMl0pIC0gMSA6IC0xKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlKHNyYzogc3RyaW5nKSB7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZycpO1xyXG4gICAgICBsZXQgdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBsZXQgbGluZXMgPSBzcmMuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBwLmxvZygnc3BsaXQnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgLy8gcmVwb3J0IHByb2dyZXNzIGV2ZXJ5IDUwIG1zXHJcbiAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdCA+IDUwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nOiAnICsgKDEwMCAqIGkgLyBsaW5lcy5sZW5ndGgpLnRvRml4ZWQoKSArICclJyk7XHJcbiAgICAgICAgICAgIHQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxldCBsaW5lID0gbGluZXNbaV07XHJcbiAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3YgJykpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWMzKFtwYXJzZUZsb2F0KHRva2Vuc1sxXSksIHBhcnNlRmxvYXQodG9rZW5zWzJdKSwgcGFyc2VGbG9hdCh0b2tlbnNbM10pXSlcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlYyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCd2biAnKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzMoW3BhcnNlRmxvYXQodG9rZW5zWzFdKSwgcGFyc2VGbG9hdCh0b2tlbnNbMl0pLCBwYXJzZUZsb2F0KHRva2Vuc1szXSldKVxyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh2ZWMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgcmV0ID0gdGhpcy5wYXJzZUZhY2UobGluZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXQuaU4ubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0sIHRoaXMubm9ybWFscywgcmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSkpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCByZXQuaVZbMF0sIHJldC5pVlsyXSwgcmV0LmlWWzNdLCB0aGlzLm5vcm1hbHMsIHJldC5pTlswXSwgcmV0LmlOWzJdLCByZXQuaU5bM10pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgcmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSwgdGhpcy5ub3JtYWxzLCByZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm5vcm1hbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nOiAxMDAlJyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb3JtYWxzOiAnICsgdGhpcy5ub3JtYWxzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUcmlhbmdsZXM6ICcgKyB0aGlzLnRyaWFuZ2xlcy5sZW5ndGgpO1xyXG4gICAgICBwLmxvZygncGFyc2UnKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc3BoZXJlIHVzaW5nIHRyaWFuZ2xlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlU3BoZXJlIGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgdGhlIHNwaGVyZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG51bVN0ZXBzIFRoZSBudW1iZXIgb2YgYmFuZHMgdXNlZCB0byBjb3ZlciB0aGUgc3BoZXJlXHJcbiAgICAqIEBwYXJhbSByYWRpdXMgVGhlIHJhZGl1cyBvZiB0aGUgc3BoZXJlXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIGNlbnRlciBvZiB0aGUgc3BoZXJlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobnVtU3RlcHM6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLmNyZWF0ZVZlcnRpY2VzKG51bVN0ZXBzLCByYWRpdXMsIGNlbnRlcik7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdHJpYW5nbGVzIGZyb20gdGhlIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMuY29ubmVjdFZlcnRpY2VzKG51bVN0ZXBzKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVWZXJ0aWNlcyhudW1TdGVwczogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwczsgaSsrKSB7XHJcbiAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCwgY2VudGVyLnkgKyByYWRpdXMsIGNlbnRlci56XSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGkgPT09IG51bVN0ZXBzIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLngsIGNlbnRlci55IC0gcmFkaXVzLCBjZW50ZXIuel0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHkgPSByYWRpdXMgKiBNYXRoLmNvcyhpIC8gKG51bVN0ZXBzIC0gMSkgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgbGV0IHIgPSByYWRpdXMgKiBNYXRoLnNpbihpIC8gKG51bVN0ZXBzIC0gMSkgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IGkgJSAyID8gMCA6ICgoMiAqIE1hdGguUEkpIC8gbnVtU3RlcHMpICogMC41O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1TdGVwczsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci54ICsgciAqIE1hdGguc2luKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXIueSArIHksXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci56ICsgciAqIE1hdGguY29zKChqIC8gbnVtU3RlcHMpICogMiAqIE1hdGguUEkgLSBvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY29ubmVjdFZlcnRpY2VzKG51bVN0ZXBzOiBudW1iZXIpIHtcclxuICAgICAgbGV0IGZpcnN0ID0gMDtcclxuICAgICAgbGV0IGxhc3QgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RlcHMgLSAxOyBpKyspIHtcclxuICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1TdGVwczsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGZpcnN0O1xyXG4gICAgICAgICAgICAgICBsZXQgaTIgPSBqICsgMTtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gaiA9PT0gKG51bVN0ZXBzIC0gMSkgPyAxIDogaTIgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTIsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpID09PSBudW1TdGVwcyAtIDIpIHtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBsYXN0IC0gbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IGxhc3Q7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IHN0YXJ0SW5kZXggKyBqO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBqID09PSAobnVtU3RlcHMgLSAxKSA/IHN0YXJ0SW5kZXggOiBpMiArIDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMywgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICBsZXQgc3RhcnRBID0gMSArIChpIC0gMSkgKiBudW1TdGVwcztcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0QiA9IDEgKyBpICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBpMSA9IHN0YXJ0QSArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEEgOiBpMSArIDE7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IHN0YXJ0QiArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpNCA9IChqID09PSAobnVtU3RlcHMgLSAxKSkgPyBzdGFydEIgOiBpMyArIDE7XHJcbiAgICAgICAgICAgICAgIGlmIChpICUgMikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTQsIGkyLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkzLCBpNCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMywgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMiwgaTMsIGk0LCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxDb29yZCB9IGZyb20gXCIuL1NwaGVyaWNhbENvb3JkXCI7XHJcblxyXG4vKipcclxuICogVHlwZXMgZm9yIHRoZSB1bmlmb3JtIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVW5pZm9ybXMge1xyXG4gICB1U2NhbGU6IG51bWJlcjtcclxuICAgdVhPZmZzZXQ6IG51bWJlcjtcclxuICAgdVlPZmZzZXQ6IG51bWJlcjtcclxuICAgdU1vZGU6IFJlbmRlck1vZGU7XHJcbiAgIHVNYXhDaHJvbWE6IG51bWJlcjtcclxuXHJcbiAgIHVIaWdobGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdU1pZExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVEYXJrTGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogZ2xDb2xvcjtcclxuICAgdVJlZmxlY3RlZExpZ2h0Q29sb3I6IGdsQ29sb3I7XHJcbiAgIHVEYXJrQWNjZW50Q29sb3I6IGdsQ29sb3I7XHJcblxyXG4gICB1TGlnaHRBbHBoYTogbnVtYmVyO1xyXG4gICB1U2hhZG93QWxwaGE6IG51bWJlcjtcclxuXHJcbiAgIHVMaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICB1TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgdUxpZ2h0UG9zOiBnbFZlYzMsXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IG51bWJlcixcclxuICAgdU9iakNvbG9yOiBnbENvbG9yLFxyXG4gICB1QmFsbFJhZGl1czogbnVtYmVyLFxyXG4gICB1RXllOiBnbFZlYzMsXHJcbiAgIHVUZXh0dXJlU2l6ZTogbnVtYmVyLFxyXG4gICB1UmFuZG9tOiBudW1iZXIsXHJcbiAgIHVSYXkwMDogZ2xWZWMzLFxyXG4gICB1UmF5MDE6IGdsVmVjMyxcclxuICAgdVJheTEwOiBnbFZlYzMsXHJcbiAgIHVSYXkxMTogZ2xWZWMzLFxyXG4gICB1U2FtcGxlOiBudW1iZXIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWx1ZXMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBsZXQgVW5pZm9ybXM6IElVbmlmb3JtcyA9IHtcclxuICAgdVNjYWxlOiAxLjAsXHJcbiAgIHVYT2Zmc2V0OiAwLjAsXHJcbiAgIHVZT2Zmc2V0OiAwLjAsXHJcbiAgIHVNb2RlOiAwLFxyXG4gICB1TWF4Q2hyb21hOiAxLjAsXHJcblxyXG4gICB1SGlnaGxpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuICAgdUxpZ2h0TGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1TWlkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0xpZ2h0Q29sb3I6IHVuZGVmaW5lZCxcclxuXHJcbiAgIHVTaGFkb3dDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1RGFya0FjY2VudENvbG9yOiB1bmRlZmluZWQsXHJcblxyXG4gICB1TGlnaHRBbHBoYTogMTAwMSxcclxuICAgdVNoYWRvd0FscGhhOiAxMDAwLFxyXG5cclxuICAgdUxpZ2h0SW50ZW5zaXR5OiAwLjcsXHJcbiAgIHVMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMS4wLCAxLjAsIDEuMF0pLFxyXG4gICB1TGlnaHRQb3M6IG5ldyBnbFZlYzMobmV3IFNwaGVyaWNhbENvb3JkKDIsIDYwLCAxMTApLnRvWFlaKCkpLFxyXG4gICB1QW1iaWVudExpZ2h0SW50ZW5zaXR5OiAwLjMsXHJcbiAgIHVPYmpDb2xvcjogbmV3IGdsQ29sb3IoWzAuNSwgMC41LCAwLjhdKSxcclxuICAgdUJhbGxSYWRpdXM6IDAuNSxcclxuICAgdUV5ZTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1VGV4dHVyZVNpemU6IDI1NixcclxuICAgdVJhbmRvbTogTWF0aC5yYW5kb20oKSxcclxuICAgdVJheTAwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkwMTogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MTA6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTExOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVTYW1wbGU6IDAuMCxcclxufVxyXG4iLCJpbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbmNvbnN0IE1BWCA9IDEwMDA7IC8vIElORklOSVRZIGluIG91ciByZW5kZXJpbmcgd29ybGRcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IG1hbmFnZXMgYSBzZXQgb2YgdHJpYW5nbGVzIHdpdGhpbiBhIGdpdmVuIHNwYWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVm9sdW1lIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSB0cmlhbmdsZXMgZW5jbG9zZWQgd2l0aGluIHRoZSBib3VuZGluZyBib3hcclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmlhbmdsZXM6IEluZGV4ZWRUcmlhbmdsZVtdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1pbmltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNaW4gPSBuZXcgZ2xWZWMzKFtNQVgsIE1BWCwgTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1heGltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNYXggPSBuZXcgZ2xWZWMzKFstTUFYLCAtTUFYLCAtTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogU3RvcmVzIGEgdHJpYW5nbGUgYW5kIHVwZGF0ZXMgdGhlIGJvdW5kaW5nIGJveFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHRyaWFuZ2xlIFRoZSB0cmlhbmdsZSB0byBzdG9yZVxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2godHJpYW5nbGU6IEluZGV4ZWRUcmlhbmdsZSkge1xyXG5cclxuICAgICAgdGhpcy50cmlhbmdsZXMucHVzaCh0cmlhbmdsZSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnggPSBNYXRoLm1pbih0aGlzLmJveE1pbi54LCB0cmlhbmdsZS5taW5YKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9IE1hdGgubWluKHRoaXMuYm94TWluLnksIHRyaWFuZ2xlLm1pblkpO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdHJpYW5nbGUubWluWik7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0cmlhbmdsZS5tYXhYKTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnksIHRyaWFuZ2xlLm1heFkpO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueiwgdHJpYW5nbGUubWF4Wik7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBhIFdlYkdsIEJ1ZmZlciBhbmQgQXR0cmlidXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xCdWZmZXIge1xyXG4gICBwcml2YXRlIGJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgYXR0cmlidXRlTG9jYXRpb246IG51bWJlcjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9ncmFtOiBXZWJHTFByb2dyYW0sIGF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xyXG4gICAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0cmlidXRlTmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGxvYWQodmVydGljZXM6IG51bWJlcltdKSB7XHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGJpbmQoKSB7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcik7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmlidXRlTG9jYXRpb24pO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9uLFxyXG4gICAgICAgICAzLCAgICAgICAgICAgICAgICAvLyBzaXplXHJcbiAgICAgICAgIGdsLkZMT0FULCAgICAgICAgIC8vIHR5cGVcclxuICAgICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gbm9ybWFsaXplZFxyXG4gICAgICAgICAwLCAgICAgICAgICAgICAgICAvLyBzdHJpZGVcclxuICAgICAgICAgMCAgICAgICAgICAgICAgICAgLy8gb2Zmc2V0XHJcbiAgICAgICk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgaHRtbENvbG9yIH0gZnJvbSBcIi4vaHRtbENvbG9yXCI7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIGNsYXNzIHRoYXQgcmVxdWlyZXMgUkdCIHZhbHVlcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbENvbG9yIGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gMykge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgMyBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAncicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsyXSA8IDAgfHwgY29sb3JbMl0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gZ2xDb2xvciBvYmplY3QgdXNpbmcgdmFsdWVzIGluIGEgQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9yIEEgZ2VuZXJpYyBDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBnbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBjbGFtcChjb2xvci5yLCAwLCAxKTtcclxuICAgICAgbGV0IGcgPSBjbGFtcChjb2xvci5nLCAwLCAxKTtcclxuICAgICAgbGV0IGIgPSBjbGFtcChjb2xvci5iLCAwLCAxKTtcclxuICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsaWdodGVyIG9mIHR3byBjb2xvcnNcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjMSBUaGUgZmlyc3QgY29sb3IuXHJcbiAgICAqIEBwYXJhbSBjMiBUaGUgc2Vjb25kIGNvbG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbGlnaHRlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGxpZ2h0ZXN0KGMxOiBnbENvbG9yLCBjMjogZ2xDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICAvLyBUT0RPOiB1c2UgbHVtaW5vc2l0eSBpbnN0ZWFkP1xyXG4gICAgICBpZiAoYzEuciArIGMxLmcgKyBjMS5iID4gYzIuciArIGMyLmcgKyBjMi5iKSB7XHJcbiAgICAgICAgIHJldHVybiBjMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGMyO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBkYXJrZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBkYXJrZXN0IGNvbG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBkYXJrZXN0KGMxOiBnbENvbG9yLCBjMjogZ2xDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICAvLyBUT0RPOiB1c2UgbHVtaW5vc2l0eSBpbnN0ZWFkP1xyXG4gICAgICBpZiAoYzEuciArIGMxLmcgKyBjMS5iIDwgYzIuciArIGMyLmcgKyBjMi5iKSB7XHJcbiAgICAgICAgIHJldHVybiBjMTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGMyO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhbiBodG1sIGNvbG9yIG9iamVjdCAoMC0yNTUgYmFzZWQpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0h0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5yKTtcclxuICAgICAgbGV0IGcgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuZyk7XHJcbiAgICAgIGxldCBiID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgYWRkcyB0ZW1wZXJhdHVyZSB0byBhIENvbG9yIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUgZXh0ZW5kcyBnbENvbG9yIHtcclxuICAgLyoqXHJcbiAgICAqIFRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBfdGVtcGVyYXR1cmU6IG51bWJlcjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB0ZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgdGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKiBAcGFyYW0gdGVtcGVyYXR1cmUgVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSwgdGVtcGVyYXR1cmU6IG51bWJlcikge1xyXG4gICAgICBzdXBlcihjb2xvcik7XHJcbiAgICAgIHRoaXMuX3RlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBLbm93biBjb2xvciB2YWx1ZXMuIEZvciBvdGhlciByZXF1ZXN0cyB0aGUgY2xhc3Mgd2lsbCByZXR1cm4gaW50ZXJwb2xhdGVkIHZhbHVlc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY29sb3JzOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlW10gPSBbXHJcbiAgICAgIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFsyNTUgLyAyNTUsIDE0NyAvIDI1NSwgNDEgLyAyNTVdLCAxOTAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTk3IC8gMjU1LCAxNDMgLyAyNTVdLCAyNjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjE0IC8gMjU1LCAxNzAgLyAyNTVdLCAyODUwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjQxIC8gMjU1LCAyMjQgLyAyNTVdLCAzMjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjUwIC8gMjU1LCAyNDQgLyAyNTVdLCA1MjAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjU1IC8gMjU1LCAyNTEgLyAyNTVdLCA1NDAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMjU1IC8gMjU1LCAyNTUgLyAyNTVdLCA2MDAwKSwgLy8gZGF5bGlnaHRcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzIwMSAvIDI1NSwgMjI2IC8gMjU1LCAyNTUgLyAyNTVdLCA3MDAwKSxcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzY0IC8gMjU1LCAxNTYgLyAyNTUsIDI1NSAvIDI1NV0sIDIwMDAwKSxcclxuICAgXTtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IGRheWxpZ2h0KCk6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGUoNjAwMCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBtaW5pbXVtIHN1cHBvcnRlZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1pblRlbXBlcmF0dXJlKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXS50ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heGltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWF4VGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIENvbG9yIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGNyZWF0ZSh0ZW1wZXJhdHVyZTogbnVtYmVyKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcblxyXG4gICAgICBpZiAodGVtcGVyYXR1cmUgPD0gdGhpcy5taW5UZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbMF07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGVtcGVyYXR1cmUgPj0gdGhpcy5tYXhUZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xvcnMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcjEgPSB0aGlzLmNvbG9yc1tpXTtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMiA9IHRoaXMuY29sb3JzW2kgKyAxXTtcclxuICAgICAgICAgICAgaWYgKHRlbXBlcmF0dXJlID49IGNvbG9yMS50ZW1wZXJhdHVyZSAmJiB0ZW1wZXJhdHVyZSA8PSBjb2xvcjIudGVtcGVyYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgbGV0IHJhdGlvID0gKHRlbXBlcmF0dXJlIC0gY29sb3IxLnRlbXBlcmF0dXJlKSAvIChjb2xvcjIudGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgbGV0IHIgPSBjb2xvcjEuciArIHJhdGlvICogKGNvbG9yMi5yIC0gY29sb3IxLnIpO1xyXG4gICAgICAgICAgICAgICBsZXQgZyA9IGNvbG9yMS5nICsgcmF0aW8gKiAoY29sb3IyLmcgLSBjb2xvcjEuZyk7XHJcbiAgICAgICAgICAgICAgIGxldCBiID0gY29sb3IxLmIgKyByYXRpbyAqIChjb2xvcjIuYiAtIGNvbG9yMS5iKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlKFtyLCBnLCBiXSwgdGVtcGVyYXR1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHNob3VsZG4ndCBnZXQgaGVyZSwgYnV0IGlmIHdlIGRvLCByZXR1cm4gdGhlIGxhc3QgY29sb3JcclxuICAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JzW3RoaXMuY29sb3JzLmxlbmd0aCAtIDFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgd3JhcHBlciBmb3IgY29tcGlsaW5nIFdlYkdMIHNoYWRlciBwcm9ncmFtc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29tcGlsZXIge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIHVzZSBzdGF0aWMgZnVuY3Rpb25zIG9ubHlcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21waWxlcyBhIHNoYWRlciBwcm9ncmFtXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgY29kZVxyXG4gICAgKiBAcGFyYW0gdHlwZSBUaGUgc2hhZGVyIHR5cGVcclxuICAgICogQHRocm93cyBpZiB0aGUgY29tcGlsYXRpb24gZmFpbHNcclxuICAgICovXHJcbiAgIHByaXZhdGUgc3RhdGljIGNvbXBpbGVTaGFkZXIoc291cmNlOiBzdHJpbmcsIHR5cGU6IG51bWJlcikge1xyXG4gICAgICBsZXQgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XHJcbiAgICAgICAgIHRocm93ICdjb21waWxlIGVycm9yOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21waWxlcyBhbmQgbGlua3MgdmVydGV4IGFuZCBmcmFnbWVudCBzaGFkZXJzIGludG8gYSBwcm9ncmFtXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVydGV4U291cmNlIFZlcnRleCBzaGFkZXIgc291cmNlXHJcbiAgICAqIEBwYXJhbSBmcmFnbWVudFNvdXJjZSBGcmFnbWVudCBzaGFkZXIgc291cmNlXHJcbiAgICAqIEByZXR1cm5zIHRoZSBwcm9ncmFtIGlkXHJcbiAgICAqIEB0aHJvd3MgaWYgdGhlIGNvbXBpbGF0aW9uIGZhaWxzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGNvbXBpbGUodmVydGV4U291cmNlOiBzdHJpbmcsIGZyYWdtZW50U291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgbGV0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBnbENvbXBpbGVyLmNvbXBpbGVTaGFkZXIodmVydGV4U291cmNlLCBnbC5WRVJURVhfU0hBREVSKSk7XHJcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBnbENvbXBpbGVyLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTb3VyY2UsIGdsLkZSQUdNRU5UX1NIQURFUikpO1xyXG4gICAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICB0aHJvdyAnbGluayBlcnJvcjogJyArIGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzQsIGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IHRvRGVnLCB0b1JhZCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IG1hdHJpeCBmb3IgdXNlIGluIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbE1hdDQge1xyXG4gICAvKiogVGhlIG1hdHJpeCB2YWx1ZSBzdG9yZWQgYXMgYSAxNiBlbGVtZW50IGFycmF5ICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIG1hdHJpeCB2YWx1ZXMuIElmIG5vdCBzdXBwbGllZCwgdGhlIG1hdHJpeCBpcyBcclxuICAgICogaW5pdGlhbGl6ZWQgYXMgYW4gaWRlbnRpdHkgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXQncyBhbiBpZGVudGl0eSBtYXRyaXguIFNhbWUgYXMgY3JlYXRpbmcgYSBuZXcgbWF0cml4LCBidXQgc3ludGFjdGljYWxseVxyXG4gICAgKiBzaG93cyB3aGF0IGlzIGhhcHBlbmluZy5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgbmV3IGlkZW5pdHkgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBpZGVudGl0eSgpOiBnbE1hdDQge1xyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NCgpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIG1hdHJpeC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1s0ICogcm93ICsgY29sXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB2YWx1ZSBpbiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHJvdyBUaGUgcm93IGluZGV4LlxyXG4gICAgKiBAcGFyYW0gY29sIFRoZSBjb2x1bW4gaW5kZXguXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNldChyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHZhbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGEgdmVjdG9yIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb24uIFxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHRWKHZlYzogZ2xWZWM0KTogZ2xWZWM0IHtcclxuICAgICAgbGV0IHZhbHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW3JvdyAqIDQgKyBjb2xdICogdmVjLnZhbHVlc1tjb2xdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHZhbHMucHVzaChzdW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWM0KHZhbHMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCBhZ2FpbnN0IGFub3RoZXIgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG1hdHJpeC5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdE0ob3RoZXI6IGdsTWF0NCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmdldChyb3csIGkpICogb3RoZXIuZ2V0KGksIGNvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgc3VtKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogSW52ZXJ0cyB0aGlzIG1hdHJpeCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0ICh0aGlzKS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoaXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgaW52ZXJ0KCk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWzBdLCBhMDEgPSB0aGlzLnZhbHVlc1sxXSwgYTAyID0gdGhpcy52YWx1ZXNbMl0sIGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICBsZXQgYTEwID0gdGhpcy52YWx1ZXNbNF0sIGExMSA9IHRoaXMudmFsdWVzWzVdLCBhMTIgPSB0aGlzLnZhbHVlc1s2XSwgYTEzID0gdGhpcy52YWx1ZXNbN107XHJcbiAgICAgIGxldCBhMjAgPSB0aGlzLnZhbHVlc1s4XSwgYTIxID0gdGhpcy52YWx1ZXNbOV0sIGEyMiA9IHRoaXMudmFsdWVzWzEwXSwgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbMTJdLCBhMzEgPSB0aGlzLnZhbHVlc1sxM10sIGEzMiA9IHRoaXMudmFsdWVzWzE0XSwgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1sxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUcmFuc3Bvc2VzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSBuZXcgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zcG9zZWQgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zcG9zZSgpOiBnbE1hdDQge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldChyb3csIGNvbCwgdGhpcy5nZXQoY29sLCByb3cpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgc2NhbGUgb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHNjYWxlIFRoZSBzY2FsZSBmYWN0b3JcclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVNjYWxlKHNjYWxlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBzY2FsZSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgc2NhbGUsIDAsIDAsXHJcbiAgICAgICAgIDAsIDAsIHNjYWxlLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIG1hdHJpeCB0aGF0IGNvbnRhaW5zIGEgdHJhbnNsYXRpb24gb3BlcmF0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdHJhbnNsYXRpb25zLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVHJhbnNsYXRpb24odjogZ2xWZWMzKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgdi54LFxyXG4gICAgICAgICAwLCAxLCAwLCB2LnksXHJcbiAgICAgICAgIDAsIDAsIDEsIHYueixcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tUm90WChhbmdsZTogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgYywgcywgMCxcclxuICAgICAgICAgMCwgLXMsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFkoYW5nbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKVxyXG4gICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKVxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICBzLCAwLCBjLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RaKGFuZ2xlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICBjLCBzLCAwLCAwLFxyXG4gICAgICAgICAtcywgYywgMCwgMCxcclxuICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJvdFgoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tUm90WChhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RZKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVJvdFkoYW5nbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WihhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21Sb3RaKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tVHJhbnNsYXRpb24ob2Zmc2V0KS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVNjYWxlKHNjYWxlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgdmlld2luZyBtYXRyaXguIFNlZSBnbHVMb29rQXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZXllIFRoZSBleWUgcG9zaXRpb24uXHJcbiAgICAqIEBwYXJhbSBjZW50ZXIgVGhlIHBvaW50IG9mIGludGVyZXN0LlxyXG4gICAgKiBAcGFyYW0gdXAgVGhlIHVwIHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIHZpZXdpbmcgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBtYWtlTG9va0F0KGV5ZTogZ2xWZWMzLCBjZW50ZXI6IGdsVmVjMywgdXA6IGdsVmVjMywgKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBhID0gZXllLnN1YnRyYWN0KGNlbnRlcikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCBiID0gdXAuY3Jvc3MoYSkubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCBjID0gYS5jcm9zcyhiKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgIGxldCBtID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGIueCwgYi55LCBiLnosIDAsXHJcbiAgICAgICAgIGMueCwgYy55LCBjLnosIDAsXHJcbiAgICAgICAgIGEueCwgYS55LCBhLnosIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICB2YXIgdCA9IG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAtZXllLngsXHJcbiAgICAgICAgIDAsIDEsIDAsIC1leWUueSxcclxuICAgICAgICAgMCwgMCwgMSwgLWV5ZS56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9IG0ubXVsdE0odCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdVBlcnNwZWN0aXZlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGZvdnkgRmllbGQgb2YgdmlldyAoaW4gZGVncmVlcykuXHJcbiAgICAqIEBwYXJhbSBhc3BlY3QgVmlldyBhc3BlY3QgcmF0aW8uXHJcbiAgICAqIEBwYXJhbSB6bmVhciBOZWFyIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gemZhciBGYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VQZXJzcGVjdGl2ZShcclxuICAgICAgZm92eTogbnVtYmVyLFxyXG4gICAgICBhc3BlY3Q6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciB5bWF4ID0gem5lYXIgKiBNYXRoLnRhbihmb3Z5ICogTWF0aC5QSSAvIDM2MC4wKTtcclxuICAgICAgdmFyIHltaW4gPSAteW1heDtcclxuICAgICAgdmFyIHhtaW4gPSB5bWluICogYXNwZWN0O1xyXG4gICAgICB2YXIgeG1heCA9IHltYXggKiBhc3BlY3Q7XHJcblxyXG4gICAgICByZXR1cm4gZ2xNYXQ0Lm1ha2VGcnVzdHVtKHhtaW4sIHhtYXgsIHltaW4sIHltYXgsIHpuZWFyLCB6ZmFyKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBwZXJzcGVjdGl2ZSBtYXRyaXguIFNlZSBnbHVGcnVzdHVtLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlZnQgVGhlIGxlZnQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSByaWdodCBUaGUgcmlnaHQgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSBib3R0b20gVGhlIGJvdHRvbSBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHRvcCBUaGUgdG9wIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gem5lYXIgVGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIFRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEByZXR1cm5zIHRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VGcnVzdHVtKFxyXG4gICAgICBsZWZ0OiBudW1iZXIsXHJcbiAgICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICAgIGJvdHRvbTogbnVtYmVyLFxyXG4gICAgICB0b3A6IG51bWJlcixcclxuICAgICAgem5lYXI6IG51bWJlcixcclxuICAgICAgemZhcjogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIHZhciBYID0gMiAqIHpuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgIHZhciBZID0gMiAqIHpuZWFyIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBBID0gKHJpZ2h0ICsgbGVmdCkgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIEIgPSAodG9wICsgYm90dG9tKSAvICh0b3AgLSBib3R0b20pO1xyXG4gICAgICB2YXIgQyA9IC0oemZhciArIHpuZWFyKSAvICh6ZmFyIC0gem5lYXIpO1xyXG4gICAgICB2YXIgRCA9IC0yICogemZhciAqIHpuZWFyIC8gKHpmYXIgLSB6bmVhcik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIFgsIDAsIEEsIDAsXHJcbiAgICAgICAgIDAsIFksIEIsIDAsXHJcbiAgICAgICAgIDAsIDAsIEMsIEQsXHJcbiAgICAgICAgIDAsIDAsIC0xLCAwXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nLCBkaWdpdHM6IG51bWJlciA9IDIpIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCA0OyByKyspIHtcclxuICAgICAgICAgbGV0IGxpbmUgPSBcIlwiO1xyXG4gICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDQ7IGMrKykge1xyXG4gICAgICAgICAgICBsaW5lICs9IHRoaXMuZ2V0KHIsIGMpLnRvRml4ZWQoZGlnaXRzKSArICcgJztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhsaW5lKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygpO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBnbEJ1ZmZlciB9IGZyb20gXCIuL2dsQnVmZmVyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tIFwiLi9nbFVuaWZvcm1cIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdsT2JqZWN0IHtcclxuICAgcHJpdmF0ZSB0T2JqOiBUcmlhbmdsZU9iajtcclxuICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgIHByaXZhdGUgdmVydGV4QnVmZmVyOiBnbEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBub3JtYWxCdWZmZXI6IGdsQnVmZmVyO1xyXG4gICBwcml2YXRlIG1vZGVsID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHRPYmo6IFRyaWFuZ2xlT2JqLCBwcm9ncmFtOiBXZWJHTFByb2dyYW0pIHtcclxuXHJcbiAgICAgIHRoaXMudE9iaiA9IHRPYmo7XHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYnVmZmVycyAoYW5kIGFzc29jaWF0ZWQgYXR0cmlidXRlcylcclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBuZXcgZ2xCdWZmZXIocHJvZ3JhbSwgJ2FWZXJ0ZXgnKTtcclxuICAgICAgdGhpcy5ub3JtYWxCdWZmZXIgPSBuZXcgZ2xCdWZmZXIocHJvZ3JhbSwgJ2FOb3JtYWwnKTtcclxuXHJcbiAgICAgIHRoaXMudXBsb2FkVHJpYW5nbGVzKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByb3RYKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbC5yb3RYKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WShhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsLnJvdFooYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuc2NhbGUoc2NhbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyB0cmFuc2xhdGUob2Zmc2V0OiBnbFZlYzMpIHtcclxuICAgICAgdGhpcy5tb2RlbC50cmFuc2xhdGUob2Zmc2V0KTtcclxuICAgfVxyXG4gICBwdWJsaWMgY2xlYXJUcmFuc2Zvcm1zKCkge1xyXG4gICAgICB0aGlzLm1vZGVsID0gbmV3IGdsTWF0NCgpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHB1c2hWZWMoYXJyYXk6IG51bWJlcltdLCB2ZWM6IGdsVmVjMykge1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy54KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueSk7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBsb2FkVHJpYW5nbGVzKCkge1xyXG5cclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgLy8gY29udmVydCB0aGUgdHJpYW5nbGVzIGludG8gYXJyYXlzIHRoYXQgY2FuIGJlIHVwbG9hZGVkXHJcbiAgICAgIGxldCB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50T2JqLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy50T2JqLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHZlcnRpY2VzLCB0cmkudjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRyaS52MSk7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyh2ZXJ0aWNlcywgdHJpLnYyKTtcclxuXHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyhub3JtYWxzLCB0cmkubjApO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWMobm9ybWFscywgdHJpLm4xKTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRyaS5uMik7XHJcbiAgICAgIH1cclxuICAgICAgcC5sb2coJ3RvIGdsVmVjW10nKTtcclxuXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyLnVwbG9hZCh2ZXJ0aWNlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLnVwbG9hZChub3JtYWxzKTtcclxuICAgICAgcC5sb2coJ3VwbG9hZCcpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgIHVuaS5zZXQoJ21vZGVsJywgdGhpcy5tb2RlbC50cmFuc3Bvc2UoKSk7XHJcblxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlci5iaW5kKCk7XHJcbiAgICAgIHRoaXMubm9ybWFsQnVmZmVyLmJpbmQoKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMudE9iai50cmlhbmdsZXMubGVuZ3RoICogMyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcHRpbWl6ZShub3JtYWxUeXBlOiBOb3JtYWxUeXBlKSB7XHJcbiAgICAgIHRoaXMudE9iai5vcHRpbWl6ZShub3JtYWxUeXBlKTtcclxuICAgICAgdGhpcy51cGxvYWRUcmlhbmdsZXMoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBGcmFtZUJ1ZmZlclN0eWxlIHtcclxuICAgTm9ybWFsLFxyXG4gICBEZXB0aCxcclxuICAgRmxvYXRcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZnJhbWUgYnVmZmVyIHRoYXQgY2FuIGJlIHJlbmRlcmVkIHRvXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xUZXh0dXJlRnJhbWVCdWZmZXIge1xyXG5cclxuICAgcHVibGljIGZyYW1lQnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xyXG4gICBwdWJsaWMgY29sb3JUZXh0dXJlOiBXZWJHTFRleHR1cmU7XHJcbiAgIHB1YmxpYyBkZXB0aFRleHR1cmU6IFdlYkdMVGV4dHVyZTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBmcmFtZSBidWZmZXIgZm9yIHJlbmRlcmluZyBpbnRvIHRleHR1cmUgb2JqZWN0cy5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKiBAcGFyYW0gaGVpZ2h0IFRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHJlbmRlcmluZyAobXVzdCBiZSBwb3dlciBvZiAyKVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzdHlsZTogRnJhbWVCdWZmZXJTdHlsZSkge1xyXG5cclxuICAgICAgc3dpdGNoIChzdHlsZSkge1xyXG4gICAgICAgICBjYXNlIEZyYW1lQnVmZmVyU3R5bGUuTm9ybWFsOlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIEZyYW1lQnVmZmVyU3R5bGUuRGVwdGg6XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGVwdGgod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBGcmFtZUJ1ZmZlclN0eWxlLkZsb2F0OlxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZsb2F0KHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgYSBmcmFtZSBidWZmZXIgb2JqZWN0XHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgLy8gU3RlcCAyOiBDcmVhdGUgYW5kIGluaXRpYWxpemUgYSB0ZXh0dXJlIGJ1ZmZlciB0byBob2xkIHRoZSBjb2xvcnMuXHJcbiAgICAgIHRoaXMuY29sb3JUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCxcclxuICAgICAgICAgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgbnVsbCk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG5cclxuICAgICAgLy8gU3RlcCA0OiBBdHRhY2ggdGhlIHNwZWNpZmljIGJ1ZmZlcnMgdG8gdGhlIGZyYW1lIGJ1ZmZlci5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLmNvbG9yVGV4dHVyZSwgMCk7XHJcblxyXG4gICAgICAvLyBTdGVwIDU6IFZlcmlmeSB0aGF0IHRoZSBmcmFtZSBidWZmZXIgaXMgdmFsaWQuXHJcbiAgICAgIGxldCBzdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gZ2wuRlJBTUVCVUZGRVJfQ09NUExFVEUpIHtcclxuICAgICAgICAgbGV0IG1zZyA9IFwiVGhlIGNyZWF0ZWQgZnJhbWUgYnVmZmVyIGlzIGludmFsaWQ6IFwiICsgc3RhdHVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVuYmluZCB0aGVzZSBuZXcgb2JqZWN0cywgd2hpY2ggbWFrZXMgdGhlIGRlZmF1bHQgZnJhbWUgYnVmZmVyIHRoZVxyXG4gICAgICAvLyB0YXJnZXQgZm9yIHJlbmRlcmluZy5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlRGVwdGgod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgbGV0IGRlcHRoX3RleHR1cmVfZXh0ZW5zaW9uID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZXB0aF90ZXh0dXJlJyk7XHJcbiAgICAgIGlmICghZGVwdGhfdGV4dHVyZV9leHRlbnNpb24pIHtcclxuICAgICAgICAgYWxlcnQoJ1RoaXMgV2ViR0wgcHJvZ3JhbSByZXF1aXJlcyB0aGUgdXNlIG9mIHRoZSBXRUJHTF9kZXB0aF90ZXh0dXJlIGV4dGVuc2lvbi4nKTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTdGVwIDE6IENyZWF0ZSBhIGZyYW1lIGJ1ZmZlciBvYmplY3RcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcblxyXG4gICAgICAvLyBTdGVwIDI6IENyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIHRleHR1cmUgYnVmZmVyIHRvIGhvbGQgdGhlIGNvbG9ycy5cclxuICAgICAgdGhpcy5jb2xvclRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuY29sb3JUZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLFxyXG4gICAgICAgICBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBudWxsKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblxyXG4gICAgICAvLyBTdGVwIDM6IENyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIHRleHR1cmUgYnVmZmVyIHRvIGhvbGQgdGhlIGRlcHRoIHZhbHVlcy5cclxuICAgICAgLy8gTm90ZTogdGhlIFdFQkdMX2RlcHRoX3RleHR1cmUgZXh0ZW5zaW9uIGlzIHJlcXVpcmVkIGZvciB0aGlzIHRvIHdvcmtcclxuICAgICAgLy8gICAgICAgYW5kIGZvciB0aGUgZ2wuREVQVEhfQ09NUE9ORU5UIHRleHR1cmUgZm9ybWF0IHRvIGJlIHN1cHBvcnRlZC5cclxuICAgICAgdGhpcy5kZXB0aFRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuZGVwdGhUZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5ERVBUSF9DT01QT05FTlQsIHdpZHRoLCBoZWlnaHQsIDAsXHJcbiAgICAgICAgIGdsLkRFUFRIX0NPTVBPTkVOVCwgZ2wuVU5TSUdORURfSU5ULCBudWxsKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblxyXG4gICAgICAvLyBTdGVwIDQ6IEF0dGFjaCB0aGUgc3BlY2lmaWMgYnVmZmVycyB0byB0aGUgZnJhbWUgYnVmZmVyLlxyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMuY29sb3JUZXh0dXJlLCAwKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkRFUFRIX0FUVEFDSE1FTlQsIGdsLlRFWFRVUkVfMkQsIHRoaXMuZGVwdGhUZXh0dXJlLCAwKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNTogVmVyaWZ5IHRoYXQgdGhlIGZyYW1lIGJ1ZmZlciBpcyB2YWxpZC5cclxuICAgICAgbGV0IHN0YXR1cyA9IGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpO1xyXG4gICAgICBpZiAoc3RhdHVzICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICBsZXQgbXNnID0gXCJUaGUgY3JlYXRlZCBmcmFtZSBidWZmZXIgaXMgaW52YWxpZDogXCIgKyBzdGF0dXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgYWxlcnQobXNnKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVW5iaW5kIHRoZXNlIG5ldyBvYmplY3RzLCB3aGljaCBtYWtlcyB0aGUgZGVmYXVsdCBmcmFtZSBidWZmZXIgdGhlXHJcbiAgICAgIC8vIHRhcmdldCBmb3IgcmVuZGVyaW5nLlxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNyZWF0ZUZsb2F0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIHNldHRpbmcgdW5pZm9ybSB2YWx1ZXMgaW4gYSBzaGFkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFVuaWZvcm0ge1xyXG4gICAvLyB0aGUgV2ViR0wgc2hhZGVyIHByb2dyYW1cclxuICAgcHJpdmF0ZSBwcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBvYmplY3QgZm9yIHNldHRpbmcgdmFsdWVzIGFuZCBjYWxscyBnbC51c2VQcm9ncmFtXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcHJvZ3JhbSBUaGUgcHJvZ3JhbSBhc3NvY2lhdGVkIHdpdGggdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocHJvZ3JhbTogV2ViR0xQcm9ncmFtKSB7XHJcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdW5pZm9ybSB2YWx1ZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5hbWUgVGhlIHZhcmlhYmxlIG5hbWVcclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZVxyXG4gICAgKiBAcGFyYW0gaW50IElmIHRydWUgYW5kIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhbiBpbnRlZ2VyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlciB8IGdsVmVjMyB8IGdsQ29sb3IgfCBnbE1hdDQsIGludDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICBsZXQgbG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSk7XHJcbiAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xWZWMzKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jLCBuZXcgRmxvYXQzMkFycmF5KHZhbHVlLnZhbHVlcykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xDb2xvcikge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KGxvYywgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuciwgdmFsdWUuZywgdmFsdWUuYl0pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGdsTWF0NCkge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvYywgZmFsc2UsIG5ldyBGbG9hdDMyQXJyYXkodmFsdWUudmFsdWVzKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJ1TW9kZVwiKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2MsIHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGludCkge1xyXG4gICAgICAgICAgICAgICBnbC51bmlmb3JtMWkobG9jLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xZihsb2MsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYW4gaW50ZWdlciB1bmlmb3JtIHZhbHVlIChzYW1lIGFzIHNldChuYW1lLCB2YWx1ZSwgdHJ1ZSkpXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbmFtZSBUaGUgdmFyaWFibGUgbmFtZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0aShuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUsIHRydWUpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhbGwgdmFsdWVzIGZvciB2YXJpYWJsZXMgc3RvcmVkIGFzIG1lbWJlcnMgb2YgYW4gb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdW5pZm9ybXMgVGhlIG9iamVjdCB3aXRoIG1lbWJlciB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXRBbGwodW5pZm9ybXM6IGFueSkge1xyXG5cclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiB1bmlmb3Jtcykge1xyXG4gICAgICAgICB2YXIgdmFsdWUgPSB1bmlmb3Jtc1tuYW1lXTtcclxuICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdsVW5pZm9ybUJsb2NrIHtcclxuICAgcHJpdmF0ZSBibG9ja0xvY2F0aW9uOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgYmxvY2tCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IocHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBibG9ja05hbWU6IHN0cmluZywgYmxvY2tCaW5kaW5nOiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGxldCBnbDIgPSBnbCBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgICAgdGhpcy5ibG9ja0xvY2F0aW9uID0gZ2wyLmdldFVuaWZvcm1CbG9ja0luZGV4KHByb2dyYW0sIGJsb2NrTmFtZSk7XHJcbiAgICAgIGdsMi51bmlmb3JtQmxvY2tCaW5kaW5nKHByb2dyYW0sIHRoaXMuYmxvY2tMb2NhdGlvbiwgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIHRoaXMuYmxvY2tCdWZmZXIgPSBnbDIuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyQmFzZShnbDIuVU5JRk9STV9CVUZGRVIsIGJsb2NrQmluZGluZywgdGhpcy5ibG9ja0J1ZmZlcik7XHJcbiAgIH1cclxuXHJcbiAgIHVwbG9hZChkYXRhOiBGbG9hdDMyQXJyYXkgfCBJbnQzMkFycmF5KSB7XHJcblxyXG4gICAgICBsZXQgZ2wyID0gZ2wgYXMgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCB0aGlzLmJsb2NrQnVmZmVyKTtcclxuICAgICAgZ2wyLmJ1ZmZlckRhdGEoZ2wyLlVOSUZPUk1fQlVGRkVSLCBkYXRhLCBnbDIuU1RBVElDX0RSQVcpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgLypcclxuICAgICAgdmFyIHVuaWZvcm1CbG9ja0J1ZmZlciA9IGdsMi5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCB1bmlmb3JtQmxvY2tCdWZmZXIpO1xyXG4gICAgICBnbDIuYnVmZmVyRGF0YShnbDIuVU5JRk9STV9CVUZGRVIsIHRyaWFuZ2xlRGF0YSwgZ2wyLlNUQVRJQ19EUkFXKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXIoZ2wyLlVOSUZPUk1fQlVGRkVSLCBudWxsKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXJCYXNlKGdsMi5VTklGT1JNX0JVRkZFUiwgMiwgdW5pZm9ybUJsb2NrQnVmZmVyKTtcclxuICAgICAgKi9cclxuXHJcbiAgIH1cclxufSIsIlxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBnbFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjMiBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigyKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xWZWMyIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzIodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSB0byBhbm90aGVyIHBvaW50XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHBvaW50XHJcbiAgICAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgcG9pbnQgYW5kIHRoZSBvdGhlciBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIGRpc3RhbmNlKG90aGVyOiBnbFZlYzIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCAtIG90aGVyLngsIDIpICsgTWF0aC5wb3codGhpcy55IC0gb3RoZXIueSwgMikpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkteiB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWMzIGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGRpZ2l0cyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGRpc3BsYXkuIFRoaXMgdmFsdWUgaXMgcGFzc2VkIHRvIHRvRml4ZWQoKS5cclxuICAgICogQHBhcmFtIGRpdmlkZXIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBlYWNoIG51bWJlci5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIsIGRpdmlkZXIgPSAnLCcpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy54LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnkudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMuei50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBub3JtYWxpemUoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGxldCByZXQgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXQudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnRyYWN0KHZlYzogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAtIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC0gdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLSB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQWRkcyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBhZGQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYWRkKHZlYzogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSArIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdICsgdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gKyB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGxldCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjNCBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhbiB4LXkteiB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IGlzIGNvbXB1dGVkIGJ5IGRpdmlkaW5nIHRoaXMgdmVjdG9yc1xyXG4gICAgKiBlbGVtZW50cyBieSB0aGUgdyB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIHgteS16IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXZpZGVCeVcoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgdG9Dc3MgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjU1XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHRtbENvbG9yIGV4dGVuZHMgQ29sb3Ige1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSB3aGl0ZSA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMjU1LCAyNTVdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBibGFjayA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSByZWQgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDAsIDBdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBncmVlbiA9IG5ldyBodG1sQ29sb3IoWzAsIDI1NSwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJsdWUgPSBuZXcgaHRtbENvbG9yKFswLCAwLCAyNTVdKTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBvcmFuZ2UgPSBuZXcgaHRtbENvbG9yKFsyNTUsIDE2NSwgMF0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBbiBSR0IgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gMykge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgMyBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzBdIDwgMCB8fCBjb2xvclswXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzFdIDwgMCB8fCBjb2xvclsxXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdnJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDI1NSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdiJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMjU1XSlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgdmFsdWUgdG8gYSBoZXggc3RyaW5nXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYyBUaGUgbnVtZXJpYyB2YWx1ZVxyXG4gICAgKiBAcmV0dXJucyBUaGUgaGV4IHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbXBvbmVudFRvSGV4KGM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBoZXggc3RyaW5nIChlLmcuICMwZjBmMGYpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBoZXggc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSGV4KCk6IHN0cmluZyB7XHJcbiAgICAgIGxldCBySGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLnIpO1xyXG4gICAgICBsZXQgZ0hleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5nKTtcclxuICAgICAgbGV0IGJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBcIiNcIiArIHJIZXggKyBnSGV4ICsgYkhleDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgY3NzIHN0cmluZyAoZS5nLiAncmdiKDEyOCwyMjgsMzIpJykuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY3NzIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0NzcygpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdG9Dc3ModGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIGNzcyBzdHlsZSBzdHJpbmcgKGUuZy4gJ3JnYigyNCwzNiw4MyknKSB0byBhIGNvbG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY3NzIFRoZSBjc3Mgc3RyaW5nLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Dc3MoY3NzOiBzdHJpbmcpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgcmVnZXggPSAvXFxkKy9nO1xyXG4gICAgICBsZXQgdmFscyA9IGNzcy5tYXRjaChyZWdleCkuc2xpY2UoMCwgMyk7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtwYXJzZUludCh2YWxzWzBdKSwgcGFyc2VJbnQodmFsc1sxXSksIHBhcnNlSW50KHZhbHNbMl0pXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgZnJvbSBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBoZXggVGhlIGhleCBzdHJpbmdcclxuICAgICogQHJldHVybnMgVGhlIGh0bWxDb2xvciBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUhleChoZXg6IHN0cmluZyk6IGh0bWxDb2xvciB7XHJcbiAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICBsZXQgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xyXG4gICAgICAgICBsZXQgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gICAgICAgICBsZXQgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xyXG4gICAgICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBodG1sQ29sb3Igb2JqZWN0IHVzaW5nIHZhbHVlcyBpbiBhIENvbG9yIG9iamVjdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvciBBIGdlbmVyaWMgQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tQ29sb3IoY29sb3I6IENvbG9yKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHIgPSBodG1sQ29sb3IuY2xhbXAoY29sb3Iucik7XHJcbiAgICAgIGxldCBnID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLmcpO1xyXG4gICAgICBsZXQgYiA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5iKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJvdW5kcyBhIG51bWJlciB0byBhIHdob2xlIG51bWJlciBhbmQgY2xhbXBzIGl0IGJldHdlZW4gMCBhbmQgMjU1LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqIEByZXR1cm5zIFRoZSByb3VuZGVkICYgY2xhbXBlZCB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY2xhbXAodmFsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICB2YWwgPSBNYXRoLnJvdW5kKHZhbCk7XHJcbiAgICAgIGlmICh2YWwgPCAwKSB7XHJcbiAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHZhbCA+IDI1NSkge1xyXG4gICAgICAgICByZXR1cm4gMjU1O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIGNvbG9yIHRvIGFuIGVxdWl2YWxlbnQgZ3JheS1zY2FsZSBjb2xvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGdyYXktc2NhbGUgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9HcmF5KCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByZ2IgPSBNYXRoLnJvdW5kKCh0aGlzLnIgKyB0aGlzLmcgKyB0aGlzLmIpIC8gMyk7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyZ2IsIHJnYiwgcmdiXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIFdlYkdMIGNvbG9yIG9iamVjdCAoMC0xIGJhc2VkKVxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBnbENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dsQ29sb3IoKTogZ2xDb2xvciB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xDb2xvcihbdGhpcy5yIC8gMjU1LCB0aGlzLmcgLyAyNTUsIHRoaXMuYiAvIDI1NV0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgdG9Dc3MgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQW4gaHRtbCBjb2xvciB3aXRoIGEgdHJhbnNwYXJlbmN5IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaHRtbENvbG9yV2l0aEFscGhhIGV4dGVuZHMgaHRtbENvbG9yIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdHJhbnNwYXJlbnQgPSBuZXcgaHRtbENvbG9yV2l0aEFscGhhKFswLCAwLCAwLCAwXSk7XHJcblxyXG4gICAvKiogVGhlIHRyYW5zcGFyZW5jeSAoYWxwaGEpIHZhbHVlICovXHJcbiAgIHB1YmxpYyBhOiBudW1iZXIgPSAyNTU7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQkEgY29sb3IgYXJyYXlcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuXHJcbiAgICAgIHN1cGVyKFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdXSk7XHJcblxyXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9IDQpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBhcnJheSBsZW5ndGggKGV4cGVjdGVkIDQgZWxlbWVudHMpXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29sb3JbNF0gPCAwIHx8IGNvbG9yWzRdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2EnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hID0gY29sb3JbM107XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGNzcyBzdHJpbmcgKGUuZy4gJ3JnYigxMjgsMjI4LDMyLDI1NSknKS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjc3Mgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvQ3NzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0b0Nzcyh0aGlzLnIsIHRoaXMuZywgdGhpcy5iLCB0aGlzLmEpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBQYXRoVHJhY2VyQXBwIH0gZnJvbSBcIi4vUGF0aFRyYWNlckFwcFwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IFBsYW5lc0FwcCB9IGZyb20gXCIuL1BsYW5lc0FwcFwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgIGxldCBxdWVyeTogc3RyaW5nO1xyXG4gICBsZXQgdHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHJcbiAgICAgIHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSk7XHJcblxyXG4gICAgICBsZXQgdG9rZW5zID0gcXVlcnkuc3BsaXQoJy0nKTtcclxuICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgdHlwZSA9IHRva2Vuc1swXTtcclxuICAgICAgICAgcXVlcnkgPSB0b2tlbnNbMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaWYgKHR5cGUgPT09ICdwbGFuZXMnKSB7XHJcbiAgICAgIGxldCBhcHAgPSBuZXcgUGxhbmVzQXBwKHF1ZXJ5KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAuY29tcG9uZW50KCkpO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICBsZXQgYXBwID0gbmV3IFBhdGhUcmFjZXJBcHAocXVlcnkpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC5jb21wb25lbnQoKSk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxudmFyeWluZyB2ZWMyIHRleENvb3JkO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcclxcbnVuaWZvcm0gaW50IHVNb2RlO1xcclxcbnVuaWZvcm0gZmxvYXQgdU1heENocm9tYTtcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdUhpZ2hsaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1TWlkTGlnaHRDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdURhcmtMaWdodENvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1U2hhZG93Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVSZWZsZWN0ZWRMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1RGFya0FjY2VudENvbG9yO1xcclxcblxcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvd0FscGhhO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0QWxwaGE7XFxyXFxuXFxyXFxuI2RlZmluZSBNT0RFX1NDSUVOQ0UgMFxcclxcbiNkZWZpbmUgTU9ERV9WQUxVRSAxXFxyXFxuI2RlZmluZSBNT0RFX0NIUk9NQSAyXFxyXFxuI2RlZmluZSBNT0RFX0JBTkRTIDNcXHJcXG5cXHJcXG52ZWM0IHdoaXRlID0gdmVjNCgxLjAsIDEuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgcmVkID0gdmVjNCgxLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgb3JhbmdlID0gdmVjNCgxLjAsIDAuNjUsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IHllbGxvdyA9IHZlYzQoMS4wLCAxLjAsIDAuMCwgMS4wKTtcXHJcXG52ZWM0IGdyZWVuID0gdmVjNCgwLjAsIDEuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgY3lhbiA9IHZlYzQoMC4wLCAxLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IGJsdWUgPSB2ZWM0KDAuMCwgMC4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCBibGFjayA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4jZGVmaW5lIE5VTV9DT0xPUlMgNlxcclxcbnZlYzQgY29sb3JzW05VTV9DT0xPUlNdO1xcclxcblxcclxcbnZlYzQgdmFsdWUyQ29sb3IoZmxvYXQgdmFsdWUpXFxyXFxue1xcclxcbiAgIGZsb2F0IHNwYW4gPSAxLjAgLyBmbG9hdChOVU1fQ09MT1JTIC0gMSk7XFxyXFxuICAgdmFsdWUgKj0gZmxvYXQoTlVNX0NPTE9SUyAtIDEpO1xcclxcbiAgIGlmICh2YWx1ZSA8IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1swXTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAxLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMF0gKyB2YWx1ZSAqIChjb2xvcnNbMV0gLSBjb2xvcnNbMF0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDIuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1sxXSArICh2YWx1ZSAtIDEuMCkgKiAoY29sb3JzWzJdIC0gY29sb3JzWzFdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCAzLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbMl0gKyAodmFsdWUgLSAyLjApICogKGNvbG9yc1szXSAtIGNvbG9yc1syXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzNdICsgKHZhbHVlIC0gMy4wKSAqIChjb2xvcnNbNF0gLSBjb2xvcnNbM10pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDUuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s0XSArICh2YWx1ZSAtIDQuMCkgKiAoY29sb3JzWzVdIC0gY29sb3JzWzRdKTtcXHJcXG4gICB9XFxyXFxuICAgLypcXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDYuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1s1XSArICh2YWx1ZSAtIDUuMCkgKiAoY29sb3JzWzZdIC0gY29sb3JzWzVdKTtcXHJcXG4gICB9XFxyXFxuICAgKi9cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbTlVNX0NPTE9SUyAtIDFdO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgdG9HcmF5KHZlYzQgYylcXHJcXG57XFxyXFxuICAgLy8gbG90cyBvZiB3YXlzIHRvIGNvbnZlcnQgUkdCIHRvIGdyYXkgc2NhbGUuXFxyXFxuXFxyXFxuICAgLy8gc2ltcGxlIGF2ZXJhZ2luZyBtZXRob2RcXHJcXG4gICAvLyByZXR1cm4gKGMuciArIGMuZyArIGMuYikgLyAzLjA7XFxyXFxuXFxyXFxuICAgLy8gcmVsYXRpdmUgcGVyY2VwdHVhbCB2YWx1ZXNcXHJcXG4gICAvLyByZXR1cm4gMC4zICogYy5yICsgMC41OSAqIGMuZyArIDAuMTEgKiBjLmI7XFxyXFxuXFxyXFxuICAgLy8gbHVtaW5vc2l0eSBtZWFzdXJlXFxyXFxuICAgZmxvYXQgZ2FtbWEgPSAyLjI7XFxyXFxuICAgZmxvYXQgeSA9IDAuMjEyNiAqIHBvdyhjLnIsIGdhbW1hKSArIDAuNzE1MiAqIHBvdyhjLmcsIGdhbW1hKSArIC4wNzIyICogcG93KGMuYiwgZ2FtbWEpO1xcclxcbiAgIGZsb2F0IGwgPSAxMTYuMCAqIHBvdyh5LCAxLjAgLyAzLjApIC0gMTYuMDtcXHJcXG4gICByZXR1cm4gbCAvIDEwMC4wO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzVmFsdWUoKVxcclxcbntcXHJcXG4gICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuICAgZmxvYXQgcmdiID0gdG9HcmF5KGNvbG9yKTtcXHJcXG4gICByZXR1cm4gdmVjNChyZ2IsIHJnYiwgcmdiLCAxLjApO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzQ2hyb21hKClcXHJcXG57XFxyXFxuICAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcblxcclxcbiAgIC8vIHJlbmRlciB0aGUgc2NhbGUgYXMgYSBiYXIgb24gdGhlIGxlZnRcXHJcXG4gICBpZiAodGV4Q29vcmQueCA8IDAuMDMpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB2YWx1ZTJDb2xvcigodGV4Q29vcmQueSAtIDAuMSkgLyAwLjkpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIGlmIChjb2xvci5hID49IHVTaGFkb3dBbHBoYSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZmxvYXQgYXZnID0gKGNvbG9yLnIgKyBjb2xvci5nICsgY29sb3IuYikgLyAzLjA7XFxyXFxuICAgICAgICAgZmxvYXQgcmdiID0gKGFicyhhdmcgLSBjb2xvci5yKSArIGFicyhhdmcgLSBjb2xvci5nKSArIGFicyhhdmcgLSBjb2xvci5iKSkgLyAoNC4wIC8gMy4wKTtcXHJcXG4gICAgICAgICByZXR1cm4gdmFsdWUyQ29sb3IocmdiIC8gdU1heENocm9tYSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQoMC4wLCAwLjAsIDAuMCwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCBkMih2ZWMzIGMxLCB2ZWMzIGMyKVxcclxcbntcXHJcXG4gICAvLyBzdW0gdGhlIHNxdWFyZXMgb2YgdGhlIGRpZmZlcmVuY2VzXFxyXFxuICAgcmV0dXJuIHBvdyhjMS5yIC0gYzIuciwgMi4wKSArIHBvdyhjMS5nIC0gYzIuZywgMi4wKSArIHBvdyhjMS5iIC0gYzIuYiwgMi4wKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBjbG9zZXN0KHZlYzMgY29sb3IsIHZlYzMgbGlnaHQsIHZlYzMgbWlkLCB2ZWMzIGRhcmspXFxyXFxue1xcclxcbiAgIGZsb2F0IGRsaWdodCA9IGQyKGNvbG9yLCBsaWdodCk7XFxyXFxuICAgZmxvYXQgZG1pZCA9IGQyKGNvbG9yLCBtaWQpO1xcclxcbiAgIGZsb2F0IGRkYXJrID0gZDIoY29sb3IsIGRhcmspO1xcclxcblxcclxcbiAgIGZsb2F0IGRtaW4gPSBtaW4oZGxpZ2h0LCBtaW4oZG1pZCwgZGRhcmspKTtcXHJcXG4gICBpZiAoZG1pbiA9PSBkbGlnaHQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBsaWdodDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAoZG1pbiA9PSBkbWlkKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gbWlkO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBkYXJrO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc0JhbmRzKClcXHJcXG57XFxyXFxuICAgZmxvYXQgc2l6ZSA9IDAuMDc7XFxyXFxuICAgZmxvYXQgbWFyZ2luID0gKDEuMCAtIDYuMCAqIHNpemUpIC8gMi4wO1xcclxcbiAgIGlmICh0ZXhDb29yZC54IDwgc2l6ZSAmJiB0ZXhDb29yZC55ID4gbWFyZ2luICYmIHRleENvb3JkLnkgPCAoMS4wIC0gbWFyZ2luKSlcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMS4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVEYXJrQWNjZW50Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgMi4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVTaGFkb3dDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyAzLjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodURhcmtMaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDQuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1TWlkTGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA1LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodUxpZ2h0TGlnaHRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSAvLyBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyA3LjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodUhpZ2hsaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuICAgICAgLy8gZGVmaW5lIHRoZSB0ZXJtaW5hdG9yIGFzIHRoZSBwb2ludCB3aGVyZSB0aGluZ3MgYXJlIDUwJSBpbiBzaGFkb3dcXHJcXG4gICAgICBmbG9hdCB0ZXJtaW5hdG9yID0gKCh1U2hhZG93QWxwaGEgKyB1TGlnaHRBbHBoYSkgLyAyLjApO1xcclxcbiAgICAgIGlmIChjb2xvci5hID4gMS4wICYmIGNvbG9yLmEgPD0gdGVybWluYXRvcilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgdmVjMyBjID0gY2xvc2VzdChjb2xvci5yZ2IsIHVTaGFkb3dDb2xvciwgdVJlZmxlY3RlZExpZ2h0Q29sb3IsIHVEYXJrQWNjZW50Q29sb3IpO1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KGMsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKGNvbG9yLmEgPiB0ZXJtaW5hdG9yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICAvLyBvbmx5IHJlbmRlciB0aGUgaGlnaGxpZ2h0IHdoZXJlIGl0J3MgY29udHJpYnV0aW9uIGlzIHNpZ25pZmljYW50LCBpLmUuIGdyZWF0ZXJcXHJcXG4gICAgICAgICAvLyB0aGFuIHNvbWUgdGhyZXNob2xkXFxyXFxuICAgICAgICAgY29uc3QgZmxvYXQgU1BFQ1VMQVJfVEhSRVNIT0xEID0gMC4xO1xcclxcbiAgICAgICAgIGlmIChjb2xvci5hID4gKHVMaWdodEFscGhhICsgU1BFQ1VMQVJfVEhSRVNIT0xEKSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHZlYzQodUhpZ2hsaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIHZlYzMgYyA9IGNsb3Nlc3QoY29sb3IucmdiLCB1TGlnaHRMaWdodENvbG9yLCB1TWlkTGlnaHRDb2xvciwgdURhcmtMaWdodENvbG9yKTtcXHJcXG4gICAgICAgICAgICByZXR1cm4gdmVjNChjLCAxLjApO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gY29sb3I7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG59XFxyXFxuXFxyXFxudmVjNCByZW5kZXJBc1NjaWVuY2UoKVxcclxcbntcXHJcXG4gICAvLyBqdXN0IHJldHVybiB0aGUgdGV4dHVyZVxcclxcbiAgIHJldHVybiB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG59XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgY29sb3JzWzBdID0gYmxhY2s7XFxyXFxuICAgY29sb3JzWzFdID0gYmx1ZTtcXHJcXG4gICBjb2xvcnNbMl0gPSBncmVlbjtcXHJcXG4gICBjb2xvcnNbM10gPSB5ZWxsb3c7XFxyXFxuICAgY29sb3JzWzRdID0gb3JhbmdlO1xcclxcbiAgIGNvbG9yc1s1XSA9IHJlZDtcXHJcXG5cXHJcXG4gICBpZiAodU1vZGUgPT0gTU9ERV9WQUxVRSlcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNWYWx1ZSgpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh1TW9kZSA9PSBNT0RFX0NIUk9NQSlcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNDaHJvbWEoKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodU1vZGUgPT0gTU9ERV9CQU5EUylcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNCYW5kcygpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHJlbmRlckFzU2NpZW5jZSgpO1xcclxcbiAgIH1cXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2NhbGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1WE9mZnNldDtcXHJcXG51bmlmb3JtIGZsb2F0IHVZT2Zmc2V0O1xcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHRleENvb3JkID0gdmVydGV4Lnh5ICogMC41ICsgMC41O1xcclxcblxcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh1U2NhbGUgKiB2ZXJ0ZXgueCArIHVYT2Zmc2V0LCB1U2NhbGUgKiB2ZXJ0ZXgueSArIHVZT2Zmc2V0LCAwLjAsIDEuMCk7XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8VkVSU0lPTj5cXHJcXG5cXHJcXG4jZGVmaW5lIE5PVEhJTkdcXHJcXG5cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiNkZWZpbmUgRVMzMDBcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuXFxyXFxuI2lmZGVmIEVTMzAwXFxyXFxuaW4gdmVjMyBpbml0aWFsUmF5O1xcclxcbiNlbHNlXFxyXFxudmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVFeWU7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGV4dHVyZVNpemU7XFxyXFxudW5pZm9ybSBmbG9hdCB1UmFuZG9tO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRQb3M7XFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gZmxvYXQgdUFtYmllbnRMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIHZlYzMgdU9iakNvbG9yO1xcclxcbnVuaWZvcm0gZmxvYXQgdUJhbGxSYWRpdXM7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2FtcGxlO1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0QWxwaGE7XFxyXFxudW5pZm9ybSBmbG9hdCB1U2hhZG93QWxwaGE7XFxyXFxuXFxyXFxuI2lmZGVmIEVTMzAwXFxyXFxub3V0IHZlYzQgZnJhZ0NvbG9yO1xcclxcbiNlbHNlXFxyXFxuI2RlZmluZSBmcmFnQ29sb3IgZ2xfRnJhZ0NvbG9yXFxyXFxuI2RlZmluZSB0ZXh0dXJlIHRleHR1cmUyRFxcclxcbiNlbmRpZlxcclxcblxcclxcbmNvbnN0IGludCBNQVhfQk9VTkNFUyA9IDEwO1xcclxcbmNvbnN0IGZsb2F0IEVQU0lMT04gPSAwLjAwMDAwMTtcXHJcXG5jb25zdCBmbG9hdCBPRkZTRVQgPSAwLjAwMDE7XFxyXFxuY29uc3QgZmxvYXQgSU5GSU5JVFkgPSAxMDAwMC4wO1xcclxcbmNvbnN0IGZsb2F0IExJR0hUX1NJWkUgPSAwLjE7XFxyXFxuI2RlZmluZSBCQUxMX0NFTlRFUiB2ZWMzKDAsIHVCYWxsUmFkaXVzLCAwKVxcclxcbmNvbnN0IHZlYzMgRE9NRV9DRU5URVIgPSB2ZWMzKDAsIDAsIDApO1xcclxcbmNvbnN0IGZsb2F0IERPTUVfUkFESVVTID0gOC4wO1xcclxcbmNvbnN0IGZsb2F0IFZBTCA9IDAuODtcXHJcXG5jb25zdCB2ZWMzIERPTUVfQ09MT1IgPSB2ZWMzKFZBTCwgVkFMLCBWQUwpO1xcclxcbmNvbnN0IHZlYzMgRkxPT1JfQ09MT1IgPSB2ZWMzKFZBTCwgVkFMLCBWQUwpO1xcclxcbmNvbnN0IHZlYzMgQU1CSUVOVF9DT0xPUiA9IHZlYzMoMS4wLCAxLjAsIDEuMCk7XFxyXFxuY29uc3QgaW50IE5VTV9MSUdIVFMgPSA2O1xcclxcbmNvbnN0IGZsb2F0IEhFSUdIVCA9IDUuMDtcXHJcXG5jb25zdCBmbG9hdCBSQURJVVMgPSA0LjA7XFxyXFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1O1xcclxcblxcclxcbnN0cnVjdCBMaWdodFxcclxcbntcXHJcXG4gICBmbG9hdCBpbnRlbnNpdHk7XFxyXFxuICAgZmxvYXQgc2l6ZTtcXHJcXG4gICB2ZWMzIHBvcztcXHJcXG4gICB2ZWMzIGNvbG9yO1xcclxcbn07XFxyXFxuXFxyXFxuIExpZ2h0IExpZ2h0c1tOVU1fTElHSFRTXTtcXHJcXG5cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbnN0cnVjdCBUcmlhbmdsZVxcclxcbntcXHJcXG4gICB2ZWMzIHAwO1xcclxcbiAgIHZlYzMgcDE7XFxyXFxuICAgdmVjMyBwMjtcXHJcXG59O1xcclxcblxcclxcbnN0cnVjdCBWb2x1bWVcXHJcXG57XFxyXFxuICAgaW50IHN0YXJ0SW5kZXg7XFxyXFxuICAgaW50IG51bVRyaWFuZ2xlcztcXHJcXG4gICB2ZWMzIGJveE1pbjtcXHJcXG4gICB2ZWMzIGJveE1heDtcXHJcXG59O1xcclxcblxcclxcbi8vIFRoZSBmb2xsb3dpbmcgbGluZSBpcyByZXBsYWNlZCB3aXRoIGNvZGUgZ2VuZXJhdGVkIGluIEphdmFTY3JpcHRcXHJcXG5jb25zdCBpbnQgTlVNX1ZFUlRJQ0VTID0gPE5VTV9WRVJUSUNFUz47XFxyXFxuY29uc3QgaW50IE5VTV9WT0xVTUVTID0gPE5VTV9WT0xVTUVTPjtcXHJcXG5jb25zdCBpbnQgTlVNX1RSSUFOR0xFUyA9IDxOVU1fVFJJQU5HTEVTPjtcXHJcXG5cXHJcXG5sYXlvdXQoc3RkMTQwKSB1bmlmb3JtIE15VmVydGljZXNCbG9jayB7IHZlYzMgdmVydGljZXNbTlVNX1ZFUlRJQ0VTXTsgfTtcXHJcXG5cXHJcXG5zdHJ1Y3QgSVRyaWFuZ2xlXFxyXFxue1xcclxcbiAgIGludCBpMDtcXHJcXG4gICBpbnQgaTE7XFxyXFxuICAgaW50IGkyO1xcclxcbn07XFxyXFxuXFxyXFxubGF5b3V0KHN0ZDE0MCkgdW5pZm9ybSBNeVRyaWFuZ2xlc0Jsb2NrIHsgSVRyaWFuZ2xlIHRyaWFuZ2xlc1tOVU1fVFJJQU5HTEVTXTsgfTtcXHJcXG5UcmlhbmdsZSBnZXRUcmlhbmdsZShpbnQgaW5kZXgpXFxyXFxue1xcclxcbiAgIElUcmlhbmdsZSB0cmkgPSB0cmlhbmdsZXNbaW5kZXhdO1xcclxcbiAgIHZlYzMgcDAgPSB2ZXJ0aWNlc1t0cmkuaTBdO1xcclxcbiAgIHZlYzMgcDEgPSB2ZXJ0aWNlc1t0cmkuaTFdO1xcclxcbiAgIHZlYzMgcDIgPSB2ZXJ0aWNlc1t0cmkuaTJdO1xcclxcbiAgIHJldHVybiBUcmlhbmdsZShwMCwgcDEsIHAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gVGhlIGNlbnRyYWwgb2JqZWN0IGJlaW5nIHJlbmRlcmVkXFxyXFxuc3RydWN0IE9iamVjdFxcclxcbntcXHJcXG4gICBWb2x1bWUgdm9sdW1lc1tOVU1fVk9MVU1FU107XFxyXFxuICAgdmVjMyBib3hNaW47XFxyXFxuICAgdmVjMyBib3hNYXg7XFxyXFxufTtcXHJcXG5cXHJcXG51bmlmb3JtIE9iamVjdCBvYmplY3Q7XFxyXFxuXFxyXFxuYm9vbCBpbnRlcnNlY3RCb3goY29uc3QgdmVjMyBvcmlnaW4sIGNvbnN0IHZlYzMgcmF5LCBjb25zdCB2ZWMzIGJveE1pbiwgY29uc3QgdmVjMyBib3hNYXgpXFxyXFxue1xcclxcbiAgIHZlYzMgcmF5SW52ID0gMS4wIC8gcmF5O1xcclxcbiAgIHZlYzMgdGJvdCA9IHJheUludiAqIChib3hNaW4gLSBvcmlnaW4pO1xcclxcbiAgIHZlYzMgdHRvcCA9IHJheUludiAqIChib3hNYXggLSBvcmlnaW4pO1xcclxcbiAgIHZlYzMgdG1pbiA9IG1pbih0dG9wLCB0Ym90KTtcXHJcXG4gICB2ZWMzIHRtYXggPSBtYXgodHRvcCwgdGJvdCk7XFxyXFxuICAgdmVjMiB0ID0gbWF4KHRtaW4ueHgsIHRtaW4ueXopO1xcclxcbiAgIGZsb2F0IHQwID0gbWF4KHQueCwgdC55KTtcXHJcXG4gICB0ID0gbWluKHRtYXgueHgsIHRtYXgueXopO1xcclxcbiAgIGZsb2F0IHQxID0gbWluKHQueCwgdC55KTtcXHJcXG4gICByZXR1cm4gdDEgPiBtYXgodDAsIDAuMCk7XFxyXFxufVxcclxcblxcclxcbmJvb2wgaW50ZXJzZWN0Vm9sKGNvbnN0IHZlYzMgb3JpZ2luLCBjb25zdCB2ZWMzIHJheSwgVm9sdW1lIHZvbClcXHJcXG57XFxyXFxuICAgaWYgKHZvbC5udW1UcmlhbmdsZXMgPT0gMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICByZXR1cm4gaW50ZXJzZWN0Qm94KG9yaWdpbiwgcmF5LCB2b2wuYm94TWluLCB2b2wuYm94TWF4KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9vbCBpbnRlcnNlY3RPYmooY29uc3QgdmVjMyBvcmlnaW4sIGNvbnN0IHZlYzMgcmF5LCBPYmplY3Qgb2JqZWN0KVxcclxcbntcXHJcXG4gICByZXR1cm4gaW50ZXJzZWN0Qm94KG9yaWdpbiwgcmF5LCBvYmplY3QuYm94TWluLCBvYmplY3QuYm94TWF4KTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTcO2bGxlcuKAk1RydW1ib3JlIHJheS10cmlhbmdsZSBpbnRlcnNlY3Rpb24gYWxnb3JpdGhtXFxyXFxuLy8gc291cmNlOiBodHRwOi8vYml0Lmx5LzJNeG5QTUdcXHJcXG5mbG9hdCBpbnRlcnNlY3RUcmlhbmdsZSh2ZWMzIG9yaWdpbiwgdmVjMyByYXksIFRyaWFuZ2xlIHRyaSlcXHJcXG57XFxyXFxuICAgdmVjMyBlZGdlMSwgZWRnZTIsIGgsIHMsIHE7XFxyXFxuICAgZmxvYXQgYSwgZiwgdSwgdjtcXHJcXG4gICBlZGdlMSA9IHRyaS5wMSAtIHRyaS5wMDtcXHJcXG4gICBlZGdlMiA9IHRyaS5wMiAtIHRyaS5wMDtcXHJcXG5cXHJcXG4gICBoID0gY3Jvc3MocmF5LCBlZGdlMik7XFxyXFxuICAgYSA9IGRvdChlZGdlMSwgaCk7XFxyXFxuICAgaWYgKGFicyhhKSA8IEVQU0lMT04pXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIGYgPSAxLjAgLyBhO1xcclxcbiAgIHMgPSBvcmlnaW4gLSB0cmkucDA7XFxyXFxuICAgdSA9IGYgKiBkb3QocywgaCk7XFxyXFxuICAgaWYgKHUgPCAwLjAgfHwgdSA+IDEuMClcXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgcSA9IGNyb3NzKHMsIGVkZ2UxKTtcXHJcXG4gICB2ID0gZiAqIGRvdChyYXksIHEpO1xcclxcbiAgIGlmICh2IDwgMC4wIHx8ICh1ICsgdikgPiAxLjApXFxyXFxuICAgICAgcmV0dXJuIElORklOSVRZO1xcclxcblxcclxcbiAgIC8vIEF0IHRoaXMgc3RhZ2Ugd2UgY2FuIGNvbXB1dGUgdCB0byBmaW5kIG91dCB3aGVyZSB0aGUgaW50ZXJzZWN0aW9uIHBvaW50IGlzIG9uIHRoZSBsaW5lLlxcclxcbiAgIGZsb2F0IHQgPSBmICogZG90KGVkZ2UyLCBxKTtcXHJcXG4gICBpZiAodCA8PSBFUFNJTE9OKSAvLyB0aGlzIG1lYW5zIHRoYXQgdGhlcmUgaXMgYSBsaW5lIGludGVyc2VjdGlvbiBidXQgbm90IGEgcmF5IGludGVyc2VjdGlvbi5cXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgcmV0dXJuIHQ7IC8vIHJheSBpbnRlcnNlY3Rpb25cXHJcXG59XFxyXFxuXFxyXFxudmVjMyBub3JtYWxGb3JUcmlhbmdsZSh2ZWMzIG9yaWdpbiwgdmVjMyBoaXQsIGludCB0SW5kZXgpXFxyXFxue1xcclxcbiAgIFRyaWFuZ2xlIHRyaSA9IGdldFRyaWFuZ2xlKHRJbmRleCk7XFxyXFxuICAgdmVjMyBub3JtYWwgPSBjcm9zcyh0cmkucDEgLSB0cmkucDAsIHRyaS5wMiAtIHRyaS5wMCk7XFxyXFxuICAgbm9ybWFsID0gbm9ybWFsaXplKG5vcm1hbCk7XFxyXFxuICAgaWYgKGRvdChub3JtYWwsIG9yaWdpbiAtIGhpdCkgPiAwLjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBub3JtYWw7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIC1ub3JtYWw7XFxyXFxuICAgfVxcclxcbn1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG5mbG9hdCBpbnRlcnNlY3RTcGhlcmUodmVjMyBvcmlnaW4sIHZlYzMgcmF5LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKVxcclxcbntcXHJcXG4gICB2ZWMzIHRvU3BoZXJlID0gb3JpZ2luIC0gc3BoZXJlQ2VudGVyO1xcclxcbiAgIGZsb2F0IGEgPSBkb3QocmF5LCByYXkpO1xcclxcbiAgIGZsb2F0IGIgPSAyLjAgKiBkb3QodG9TcGhlcmUsIHJheSk7XFxyXFxuICAgZmxvYXQgYyA9IGRvdCh0b1NwaGVyZSwgdG9TcGhlcmUpIC0gc3BoZXJlUmFkaXVzICogc3BoZXJlUmFkaXVzO1xcclxcbiAgIGZsb2F0IGRpc2NyaW1pbmFudCA9IGIgKiBiIC0gNC4wICogYSAqIGM7XFxyXFxuICAgaWYgKGRpc2NyaW1pbmFudCA+IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgdDEgPSAoLWIgLSBzcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIuMCAqIGEpO1xcclxcbiAgICAgIGZsb2F0IHQyID0gKC1iICsgc3FydChkaXNjcmltaW5hbnQpKSAvICgyLjAgKiBhKTtcXHJcXG4gICAgICBpZiAodDEgPiAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB0MTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodDIgPiAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB0MjtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbiAgIHJldHVybiBJTkZJTklUWTtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBub3JtYWxGb3JTcGhlcmUodmVjMyBoaXQsIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpXFxyXFxue1xcclxcbiAgIHJldHVybiAoaGl0IC0gc3BoZXJlQ2VudGVyKSAvIHNwaGVyZVJhZGl1cztcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgcmFuZG9tKHZlYzMgc2NhbGUsIGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIHJldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXogKyBzZWVkLCBzY2FsZSkpICogNDM3NTguNTQ1MyArIHNlZWQpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGNvc2luZVdlaWdodGVkRGlyZWN0aW9uKGZsb2F0IHNlZWQsIHZlYzMgbm9ybWFsKVxcclxcbntcXHJcXG4gICBmbG9hdCB1ID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHYgPSByYW5kb20odmVjMyg2My43MjY0LCAxMC44NzMsIDYyMy42NzM2KSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgciA9IHNxcnQodSk7XFxyXFxuICAgZmxvYXQgYW5nbGUgPSA2LjI4MzE4NTMwNzE3OTU4NiAqIHY7XFxyXFxuICAgLy8gY29tcHV0ZSBiYXNpcyBmcm9tIG5vcm1hbFxcclxcbiAgIHZlYzMgc2RpciwgdGRpcjtcXHJcXG4gICBpZiAoYWJzKG5vcm1hbC54KSA8IC41KVxcclxcbiAgIHtcXHJcXG4gICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDEsIDAsIDApKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBzZGlyID0gY3Jvc3Mobm9ybWFsLCB2ZWMzKDAsIDEsIDApKTtcXHJcXG4gICB9XFxyXFxuICAgdGRpciA9IGNyb3NzKG5vcm1hbCwgc2Rpcik7XFxyXFxuICAgcmV0dXJuIHIgKiBjb3MoYW5nbGUpICogc2RpciArIHIgKiBzaW4oYW5nbGUpICogdGRpciArIHNxcnQoMS4gLSB1KSAqIG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyB1bmlmb3JtbHlSYW5kb21EaXJlY3Rpb24oZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgZmxvYXQgdSA9IHJhbmRvbSh2ZWMzKDEyLjk4OTgsIDc4LjIzMywgMTUxLjcxODIpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHogPSAxLjAgLSAyLjAgKiB1O1xcclxcbiAgIGZsb2F0IHIgPSBzcXJ0KDEuMCAtIHogKiB6KTtcXHJcXG4gICBmbG9hdCBhbmdsZSA9IDYuMjgzMTg1MzA3MTc5NTg2ICogdjtcXHJcXG4gICByZXR1cm4gdmVjMyhyICogY29zKGFuZ2xlKSwgciAqIHNpbihhbmdsZSksIHopO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIHVuaWZvcm1seVJhbmRvbVZlY3RvcihmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICByZXR1cm4gdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKHNlZWQpICogc3FydChyYW5kb20odmVjMygzNi43NTM5LCA1MC4zNjU4LCAzMDYuMjc1OSksIHNlZWQpKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9vbCBpblNoYWRvdyh2ZWMzIG9yaWdpbiwgdmVjMyByYXksIGZsb2F0IHRMaWdodClcXHJcXG57XFxyXFxuICAgZmxvYXQgdEJhbGwgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuICAgaWYgKHRCYWxsIDwgdExpZ2h0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4gICBpZiAoaW50ZXJzZWN0T2JqKG9yaWdpbiwgcmF5LCBvYmplY3QpKVxcclxcbiAgIHtcXHJcXG4gICAgICBmb3IgKGludCBpID0gMDsgaSA8IE5VTV9WT0xVTUVTOyBpKyspXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIFZvbHVtZSB2b2wgPSBvYmplY3Qudm9sdW1lc1tpXTtcXHJcXG4gICAgICAgICBpZiAoaW50ZXJzZWN0Vm9sKG9yaWdpbiwgcmF5LCB2b2wpKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBmb3IgKGludCBpID0gdm9sLnN0YXJ0SW5kZXg7IGkgPCAodm9sLnN0YXJ0SW5kZXggKyB2b2wubnVtVHJpYW5nbGVzKTsgaSsrKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICBUcmlhbmdsZSB0cmkgPSBnZXRUcmlhbmdsZShpKTtcXHJcXG4gICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0VHJpYW5nbGUob3JpZ2luLCByYXksIHRyaSkgPCB0TGlnaHQpXFxyXFxuICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuICAgcmV0dXJuIGZhbHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBBbGwgY29tcG9uZW50cyBhcmUgaW4gdGhlIHJhbmdlIFsw4oCmMV0sIGluY2x1ZGluZyBodWUuXFxyXFxudmVjNCByZ2IyaHN2KHZlYzQgYylcXHJcXG57XFxyXFxuICAgdmVjNCBLID0gdmVjNCgwLjAsIC0xLjAgLyAzLjAsIDIuMCAvIDMuMCwgLTEuMCk7XFxyXFxuICAgdmVjNCBwID0gbWl4KHZlYzQoYy5iZywgSy53eiksIHZlYzQoYy5nYiwgSy54eSksIHN0ZXAoYy5iLCBjLmcpKTtcXHJcXG4gICB2ZWM0IHEgPSBtaXgodmVjNChwLnh5dywgYy5yKSwgdmVjNChjLnIsIHAueXp4KSwgc3RlcChwLngsIGMucikpO1xcclxcblxcclxcbiAgIGZsb2F0IGQgPSBxLnggLSBtaW4ocS53LCBxLnkpO1xcclxcbiAgIGZsb2F0IGUgPSAxLjBlLTEwO1xcclxcbiAgIHJldHVybiB2ZWM0KGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLCBkIC8gKHEueCArIGUpLCBxLngsIGMuYSk7XFxyXFxufVxcclxcblxcclxcbi8vIEFsbCBjb21wb25lbnRzIGFyZSBpbiB0aGUgcmFuZ2VbMOKApjFdLCBpbmNsdWRpbmcgaHVlLlxcclxcbnZlYzQgaHN2MnJnYih2ZWM0IGMpXFxyXFxue1xcclxcbiAgIHZlYzQgSyA9IHZlYzQoMS4wLCAyLjAgLyAzLjAsIDEuMCAvIDMuMCwgMy4wKTtcXHJcXG4gICB2ZWMzIHAgPSBhYnMoZnJhY3QoYy54eHggKyBLLnh5eikgKiA2LjAgLSBLLnd3dyk7XFxyXFxuICAgcmV0dXJuIHZlYzQoYy56ICogbWl4KEsueHh4LCBjbGFtcChwIC0gSy54eHgsIDAuMCwgMS4wKSwgYy55KSwgYy5hKTtcXHJcXG59XFxyXFxuXFxyXFxudmVjNCBzaGlmdFRlbXBlcmF0dXJlKHZlYzQgcmdiLCBmbG9hdCBkZWcsIGZsb2F0IHRpbnRTdHJlbmd0aClcXHJcXG57XFxyXFxuICAgdmVjNCBoc3YgPSByZ2IyaHN2KHJnYik7XFxyXFxuICAgaHN2LnggKz0gZGVnIC8gMzYwLjA7XFxyXFxuICAgdmVjNCBmdWxsVGludFJnYiA9IGhzdjJyZ2IoaHN2KTtcXHJcXG5cXHJcXG4gICByZXR1cm4gbWl4KHJnYiwgZnVsbFRpbnRSZ2IsIHRpbnRTdHJlbmd0aCk7XFxyXFxufVxcclxcblxcclxcbi8vIFRPRE8gbW92ZSB0byBhIGNvbW1vbiBmaWxlXFxyXFxuZmxvYXQgdG9HcmF5KHZlYzQgYylcXHJcXG57XFxyXFxuICAgLy8gbG90cyBvZiB3YXlzIHRvIGNvbnZlcnQgUkdCIHRvIGdyYXkgc2NhbGUuXFxyXFxuXFxyXFxuICAgLy8gc2ltcGxlIGF2ZXJhZ2luZyBtZXRob2RcXHJcXG4gICAvLyByZXR1cm4gKGMuciArIGMuZyArIGMuYikgLyAzLjA7XFxyXFxuXFxyXFxuICAgLy8gcmVsYXRpdmUgcGVyY2VwdHVhbCB2YWx1ZXNcXHJcXG4gICAvLyByZXR1cm4gMC4zICogYy5yICsgMC41OSAqIGMuZyArIDAuMTEgKiBjLmI7XFxyXFxuXFxyXFxuICAgLy8gbHVtaW5vc2l0eSBtZWFzdXJlXFxyXFxuICAgZmxvYXQgZ2FtbWEgPSAyLjI7XFxyXFxuICAgZmxvYXQgeSA9IDAuMjEyNiAqIHBvdyhjLnIsIGdhbW1hKSArIDAuNzE1MiAqIHBvdyhjLmcsIGdhbW1hKSArIC4wNzIyICogcG93KGMuYiwgZ2FtbWEpO1xcclxcbiAgIGZsb2F0IGwgPSAxMTYuMCAqIHBvdyh5LCAxLjAgLyAzLjApIC0gMTYuMDtcXHJcXG4gICByZXR1cm4gbCAvIDEwMC4wO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IGNhbGN1bGF0ZUNvbG9yKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSlcXHJcXG57XFxyXFxuICAgdmVjMyBhY2N1bXVsYXRlZENvbG9yID0gdmVjMygwLjApO1xcclxcbiAgIHZlYzMgY29sb3JNYXNrID0gdmVjMygxLjApO1xcclxcbiAgIHZlYzMgZXllID0gb3JpZ2luO1xcclxcbiAgIGJvb2wgb2JqSGl0ID0gZmFsc2U7XFxyXFxuICAgYm9vbCBvYmpTaGFkb3cgPSBmYWxzZTtcXHJcXG4gICBmbG9hdCBzcGVjdWxhckNvbnRyaWJ1dGlvbiA9IDAuMDtcXHJcXG5cXHJcXG4gICAvLyBtYWluIHJheXRyYWNpbmcgbG9vcFxcclxcbiAgIGZvciAoaW50IGJvdW5jZSA9IDA7IGJvdW5jZSA8IE1BWF9CT1VOQ0VTOyBib3VuY2UrKylcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gY29tcHV0ZSB0aGUgaW50ZXJzZWN0aW9uIHdpdGggZXZlcnl0aGluZ1xcclxcbiAgICAgIGZsb2F0IHRCYWxsID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcbiAgICAgIHZlYzMgc3VyZmFjZUNvbG9yID0gdmVjMygwLjUsIDAuNSwgMC41KTtcXHJcXG5cXHJcXG4gICAgICBmbG9hdCB0T2JqID0gSU5GSU5JVFk7XFxyXFxuICAgICAgaW50IHRJbmRleDtcXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiAgICAgIGlmIChpbnRlcnNlY3RPYmoob3JpZ2luLCByYXksIG9iamVjdCkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX1ZPTFVNRVM7IGkrKylcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgVm9sdW1lIHZvbCA9IG9iamVjdC52b2x1bWVzW2ldO1xcclxcbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3RWb2wob3JpZ2luLCByYXksIHZvbCkpXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSB2b2wuc3RhcnRJbmRleDsgaSA8ICh2b2wuc3RhcnRJbmRleCArIHZvbC5udW1UcmlhbmdsZXMpOyBpKyspXFxyXFxuICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgIFRyaWFuZ2xlIHRyaSA9IGdldFRyaWFuZ2xlKGkpO1xcclxcbiAgICAgICAgICAgICAgICAgIGZsb2F0IHRUcmkgPSBtaW4odE9iaiwgaW50ZXJzZWN0VHJpYW5nbGUob3JpZ2luLCByYXksIHRyaSkpO1xcclxcbiAgICAgICAgICAgICAgICAgIGlmICh0VHJpIDwgdE9iailcXHJcXG4gICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgdE9iaiA9IHRUcmk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgdEluZGV4ID0gaTtcXHJcXG4gICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiNlbmRpZlxcclxcblxcclxcbiAgICAgIC8vIGlmIHRoZSBmaXJzdCByYXkgaGl0cyB0aGUgbGlnaHQsIHJldHVybiB0aGUgbGlnaHQgY29sb3IuIFRoaXNcXHJcXG4gICAgICAvLyBzaW11bGF0ZXMgZGlzcGxheWluZyB0aGUgbGlnaHRcXHJcXG4gICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBmbG9hdCB0TGlnaHQgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIExpZ2h0c1tpXS5wb3MsIExpZ2h0c1tpXS5zaXplKTtcXHJcXG4gICAgICAgICAgICBpZiAodExpZ2h0IDwgdEJhbGwgJiYgdExpZ2h0IDwgdE9iailcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgcmV0dXJuIHZlYzQoTGlnaHRzW2ldLmludGVuc2l0eSAqIExpZ2h0c1tpXS5jb2xvciwgMS4wKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGludGVyc2VjdGlvblxcclxcbiAgICAgIGZsb2F0IHREb21lID0gaW50ZXJzZWN0U3BoZXJlKG9yaWdpbiwgcmF5LCBET01FX0NFTlRFUiwgRE9NRV9SQURJVVMpO1xcclxcbiAgICAgIGZsb2F0IHRGbG9vciA9IElORklOSVRZO1xcclxcblxcclxcbiAgICAgIC8vIGNoZWNrIGZvciBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgZ3JvdW5kXFxyXFxuICAgICAgaWYgKHJheS55IDwgMC4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICAvLyBkaXN0YW5jZSB0byBmbG9vciA9IG51bSB1bml0IHZlY3RvcnMgcmVxdWlyZWQgdG8gcmVhY2ggdGhlIGZsb29yXFxyXFxuICAgICAgICAgdEZsb29yID0gLW9yaWdpbi55IC8gcmF5Lnk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGZpbmQgdGhlIGNsb3Nlc3QgaGl0XFxyXFxuICAgICAgZmxvYXQgdCA9IG1pbihtaW4odERvbWUsIHRGbG9vciksIG1pbih0QmFsbCwgdE9iaikpO1xcclxcblxcclxcbiAgICAgIC8vIGluZm8gYWJvdXQgaGl0XFxyXFxuICAgICAgdmVjMyBoaXQgPSBvcmlnaW4gKyByYXkgKiB0O1xcclxcbiAgICAgIHZlYzMgbm9ybWFsO1xcclxcblxcclxcbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsXFxyXFxuICAgICAgaWYgKHQgPT0gdEZsb29yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSBGTE9PUl9DT0xPUjtcXHJcXG4gICAgICAgICBub3JtYWwgPSB2ZWMzKDAuMCwgMS4wLCAwLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ID09IHRCYWxsKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSB2ZWMzKHVPYmpDb2xvcik7XFxyXFxuICAgICAgICAgbm9ybWFsID0gbm9ybWFsRm9yU3BoZXJlKGhpdCwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG5cXHJcXG4gICAgICAgICBpZiAoYm91bmNlID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9iakhpdCA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiAgICAgIGVsc2UgaWYgKHQgPT0gdE9iailcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gdU9iakNvbG9yO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IG5vcm1hbEZvclRyaWFuZ2xlKG9yaWdpbiwgaGl0LCB0SW5kZXgpO1xcclxcblxcclxcbiAgICAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgb2JqSGl0ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiNlbmRpZlxcclxcbiAgICAgIGVsc2UgaWYgKHQgPT0gdERvbWUpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IERPTUVfQ09MT1I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gLW5vcm1hbEZvclNwaGVyZShoaXQsIERPTUVfQ0VOVEVSLCBET01FX1JBRElVUyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGNvbG9yTWFzayAqPSBzdXJmYWNlQ29sb3I7XFxyXFxuXFxyXFxuICAgICAgaWYgKGxlbmd0aChjb2xvck1hc2spIDwgMC4wMSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICAvLyBjb21wdXRlIGRpZmZ1c2UgbGlnaHRpbmcgY29udHJpYnV0aW9uXFxyXFxuICAgICAgICAgdmVjMyB0b0xpZ2h0ID0gTGlnaHRzW2ldLnBvcyAtIGhpdDtcXHJcXG4gICAgICAgICB2ZWMzIHRvTGlnaHROID0gbm9ybWFsaXplKHRvTGlnaHQpO1xcclxcblxcclxcbiAgICAgICAgIC8vIHRyYWNlIGEgc2hhZG93IHJheSB0byB0aGUgbGlnaHRcXHJcXG4gICAgICAgICBpZiAoaW5TaGFkb3coaGl0ICsgbm9ybWFsICogT0ZGU0VULCB0b0xpZ2h0TiwgbGVuZ3RoKHRvTGlnaHQpKSA9PSBmYWxzZSlcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgLy8gZGlmZnVzZSBjb21wb25lbnRcXHJcXG4gICAgICAgICAgICBmbG9hdCBkaWZmdXNlID0gbWF4KDAuMCwgZG90KHRvTGlnaHROLCBub3JtYWwpKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBzcGVjdWxhciBjb21wb25lbnRcXHJcXG4gICAgICAgICAgICB2ZWMzIHRvRXllID0gZXllIC0gaGl0O1xcclxcbiAgICAgICAgICAgIHZlYzMgbjJsID0gdG9MaWdodE47XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmUgPSBub3JtYWxpemUodG9FeWUpO1xcclxcbiAgICAgICAgICAgIHZlYzMgYmlzZWN0b3IgPSAobjJsICsgbjJlKSAvIGxlbmd0aChuMmwgKyBuMmUpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IHNwZWN1bGFyQ29lZmZpY2llbnQgPSAwLjU7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc2hpbmluZXNzID0gMTAwLjA7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc3BlY3VsYXIgPSBzcGVjdWxhckNvZWZmaWNpZW50ICogcG93KG1heCgwLjAsIGRvdChiaXNlY3Rvciwgbm9ybWFsKSksIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gYXBwbHkgbGlnaHQgZmFsbCBvZmYgYXMgZGlzdGFuY2Ugc3F1YXJlcy4gVXNlIGEgbWluIHZhbHVlIGZvciB0aGVcXHJcXG4gICAgICAgICAgICAvLyBsaWdodCBzaXplIG90aGVyd2lzZSBmYWxsb2ZmIGlzIHRvbyByYXBpZFxcclxcbiAgICAgICAgICAgIGZsb2F0IHJhZGl1cyA9IG1heCgwLjc1LCBMaWdodHNbaV0uc2l6ZSk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgZGlzdCA9IG1heCgxLjAsIChsZW5ndGgodG9MaWdodCkgLSByYWRpdXMpIC8gcmFkaXVzKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBsaWdodEludGVuc2l0eSA9IExpZ2h0c1tpXS5pbnRlbnNpdHkgLyAoZGlzdCAqIGRpc3QpO1xcclxcblxcclxcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz0gY29sb3JNYXNrICogTGlnaHRzW2ldLmNvbG9yICogbGlnaHRJbnRlbnNpdHkgKiBkaWZmdXNlO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIFRPRE8gZGVmaW5lIGEgY29sb3IgbWFzayBmb3Igc3BlY3VsYXIgcmVmbGVjdGlvblxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBtaXgoc3VyZmFjZUNvbG9yLCBMaWdodHNbaV0uY29sb3IsIDAuOCkgKlxcclxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG4gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9XFxyXFxuICAgICAgICAgICAgICAgIChsZW5ndGgoc3VyZmFjZUNvbG9yKSAqIExpZ2h0c1tpXS5jb2xvcikgKiBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcblxcclxcbiAgICAgICAgICAgIGlmIChib3VuY2UgPT0gMCAmJiBpID09IDApXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIHNwZWN1bGFyQ29udHJpYnV0aW9uICs9IGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICBlbHNlIGlmIChib3VuY2UgPT0gMCAmJiBpID09IDApXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIG9ialNoYWRvdyA9IHRydWU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBjYWxjdWxhdGUgbmV4dCBvcmlnaW5cXHJcXG4gICAgICByYXkgPSBjb3NpbmVXZWlnaHRlZERpcmVjdGlvbih1UmFuZG9tICsgZmxvYXQoYm91bmNlKSwgbm9ybWFsKTtcXHJcXG5cXHJcXG4gICAgICBvcmlnaW4gPSBoaXQ7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIGZsb2F0IGFscGhhID0gMS4wO1xcclxcbiAgIGlmIChvYmpIaXQpXFxyXFxuICAge1xcclxcbiAgICAgIGlmIChvYmpTaGFkb3cpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGFscGhhID0gdVNoYWRvd0FscGhhO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGFscGhhID0gdUxpZ2h0QWxwaGE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGFscGhhICs9IGNsYW1wKHNwZWN1bGFyQ29udHJpYnV0aW9uLCAwLjAsIDEuMCk7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzQgc2NpZW5jZUNvbG9yID0gdmVjNChjbGFtcChhY2N1bXVsYXRlZENvbG9yLCAwLjAsIDEuMCksIGFscGhhKTtcXHJcXG4gICByZXR1cm4gc2NpZW5jZUNvbG9yO1xcclxcbiAgIC8qXFxyXFxuICAgaWYgKG9iakhpdClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHZlYzQodG9BcnRpc3Qoc2NpZW5jZUNvbG9yKS5yZ2IsIGFscGhhKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gc2NpZW5jZUNvbG9yO1xcclxcbiAgIH1cXHJcXG4gICAqL1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICB2ZWMzIHJhbmQgPSB1bmlmb3JtbHlSYW5kb21WZWN0b3IodVJhbmRvbSkgKiBMSUdIVF9TSVpFO1xcclxcblxcclxcbiAgIExpZ2h0c1swXS5pbnRlbnNpdHkgPSB1TGlnaHRJbnRlbnNpdHk7XFxyXFxuICAgTGlnaHRzWzBdLnNpemUgPSBMSUdIVF9TSVpFO1xcclxcbiAgIExpZ2h0c1swXS5wb3MgPSB1TGlnaHRQb3MgKyByYW5kO1xcclxcbiAgIExpZ2h0c1swXS5jb2xvciA9IHVMaWdodENvbG9yO1xcclxcblxcclxcbiAgIGZvciAoaW50IGkgPSAxOyBpIDwgTlVNX0xJR0hUUzsgaSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB4ID0gUkFESVVTICogc2luKDIuMCAqIFBJICogZmxvYXQoaSkgLyAoZmxvYXQoTlVNX0xJR0hUUykgLSAxLjApKSArIHJhbmQueDtcXHJcXG4gICAgICBmbG9hdCB5ID0gSEVJR0hUICsgcmFuZC55O1xcclxcbiAgICAgIGZsb2F0IHogPSBSQURJVVMgKiBjb3MoMi4wICogUEkgKiBmbG9hdChpKSAvIChmbG9hdChOVU1fTElHSFRTKSAtIDEuMCkpICsgcmFuZC56O1xcclxcblxcclxcbiAgICAgIExpZ2h0c1tpXS5pbnRlbnNpdHkgPSB1QW1iaWVudExpZ2h0SW50ZW5zaXR5O1xcclxcbiAgICAgIExpZ2h0c1tpXS5zaXplID0gMi4wICogTElHSFRfU0laRTtcXHJcXG4gICAgICBMaWdodHNbaV0ucG9zID0gdmVjMyh4LCB5LCB6KTtcXHJcXG4gICAgICBMaWdodHNbaV0uY29sb3IgPSBBTUJJRU5UX0NPTE9SO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBtZXJnZSB0aGUgbmV3IGNvbG9yIGludG8gdGhlIGV4aXN0aW5nIHRleHR1cmVcXHJcXG4gICB2ZWM0IHRleHR1cmVDb2xvciA9IHRleHR1cmUodVRleHR1cmUsIGdsX0ZyYWdDb29yZC54eSAvIHVUZXh0dXJlU2l6ZSk7XFxyXFxuICAgdmVjNCBuZXdDb2xvciA9IGNhbGN1bGF0ZUNvbG9yKHVFeWUsIGluaXRpYWxSYXkpO1xcclxcbiAgIGZsb2F0IHdlaWdodCA9ICh1U2FtcGxlIC8gKDEuMCArIHVTYW1wbGUpKTtcXHJcXG4gICBmcmFnQ29sb3IgPSBtaXgobmV3Q29sb3IsIHRleHR1cmVDb2xvciwgd2VpZ2h0KTtcXHJcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcIjxWRVJTSU9OPlxcclxcblxcclxcbiNkZWZpbmUgTk9USElOR1xcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuI2RlZmluZSBFUzMwMFxcclxcbiNlbmRpZlxcclxcblxcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG51bmlmb3JtIHZlYzMgdUV5ZSwgdVJheTAwLCB1UmF5MDEsIHVSYXkxMCwgdVJheTExO1xcclxcblxcclxcbiNpZmRlZiBFUzMwMFxcclxcbmluIHZlYzMgdmVydGV4O1xcclxcbm91dCB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2Vsc2VcXHJcXG5hdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2VuZGlmIFxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHZlYzIgcGVyY2VudCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXHJcXG4gICBpbml0aWFsUmF5ID0gbWl4KG1peCh1UmF5MDAsIHVSYXkwMSwgcGVyY2VudC55KSwgbWl4KHVSYXkxMCwgdVJheTExLCBwZXJjZW50LnkpLCBwZXJjZW50LngpO1xcclxcbiAgIGdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgsIDEuMCk7XFxyXFxufVxcclxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxyXFxuXFxyXFxuLy8gaW50ZXJwb2xhdGVkIHZhbHVlcyBmcm9tIHRoZSB2ZXJ0ZXggc2hhZGVyXFxyXFxudmFyeWluZyB2ZWMzIHZOb3JtYWw7XFxyXFxudmFyeWluZyB2ZWMzIHZWZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMzIHZTaGFkb3dWZXJ0ZXg7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRJbnRlbnNpdHk7XFxyXFxudW5pZm9ybSBmbG9hdCB1QW1iaWVudEludGVuc2l0eTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0RGlyZWN0aW9uO1xcclxcbnVuaWZvcm0gdmVjMyB1Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVRocmVzaG9sZHM7XFxyXFxudW5pZm9ybSBmbG9hdCB1VGhyZXNob2xkMTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUaHJlc2hvbGQyO1xcclxcbnVuaWZvcm0gZmxvYXQgdUhpZ2hsaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdU1pZExpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdURhcmtMaWdodDtcXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3c7XFxyXFxuXFxyXFxudW5pZm9ybSBpbnQgdVVzZVNoYWRvd3M7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNoYWRvd1RleHR1cmU7XFxyXFxuXFxyXFxuYm9vbCBpbl9zaGFkb3codm9pZClcXHJcXG57XFxyXFxuICAgaWYgKHVVc2VTaGFkb3dzID09IDApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgLy8gVGhlIHZlcnRleCBsb2NhdGlvbiByZW5kZXJlZCBmcm9tIHRoZSBsaWdodCBzb3VyY2UgaXMgYWxtb3N0IGluIE5vcm1hbGl6ZWRcXHJcXG4gICAvLyBEZXZpY2UgQ29vcmRpbmF0ZXMgKE5EQyksIGJ1dCB0aGUgcGVyc3BlY3RpdmUgZGl2aXNpb24gaGFzIG5vdCBiZWVuXFxyXFxuICAgLy8gcGVyZm9ybWVkIHlldC4gUGVyZm9ybSB0aGUgcGVyc3BlY3RpdmUgZGl2aWRlLiBUaGUgKHgseSx6KSB2ZXJ0ZXggbG9jYXRpb25cXHJcXG4gICAvLyBjb21wb25lbnRzIGFyZSBub3cgZWFjaCBpbiB0aGUgcmFuZ2UgWy0xLjAsKzEuMF0uXFxyXFxuICAgLy8gdmVjMyB2ZXJ0ZXhfcmVsYXRpdmVfdG9fbGlnaHQgPSB2X1ZlcnRleF9yZWxhdGl2ZV90b19saWdodC54eXogLyB2X1ZlcnRleF9yZWxhdGl2ZV90b19saWdodC53O1xcclxcbiAgIHZlYzMgdmVydGV4ID0gdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG4gICAvLyBDb252ZXJ0IHRoZSB0aGUgdmFsdWVzIGZyb20gTm9ybWFsaXplZCBEZXZpY2UgQ29vcmRpbmF0ZXMgKHJhbmdlIFstMS4wLCsxLjBdKVxcclxcbiAgIC8vIHRvIHRoZSByYW5nZSBbMC4wLDEuMF0uIFRoaXMgbWFwcGluZyBpcyBkb25lIGJ5IHNjYWxpbmdcXHJcXG4gICAvLyB0aGUgdmFsdWVzIGJ5IDAuNSwgd2hpY2ggZ2l2ZXMgdmFsdWVzIGluIHRoZSByYW5nZSBbLTAuNSwrMC41XSBhbmQgdGhlblxcclxcbiAgIC8vIHNoaWZ0aW5nIHRoZSB2YWx1ZXMgYnkgKzAuNS5cXHJcXG4gICB2ZXJ0ZXggPSB2ZXJ0ZXggKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgLy8gR2V0IHRoZSB6IHZhbHVlIG9mIHRoaXMgZnJhZ21lbnQgaW4gcmVsYXRpb25zaGlwIHRvIHRoZSBsaWdodCBzb3VyY2UuXFxyXFxuICAgLy8gVGhpcyB2YWx1ZSB3YXMgc3RvcmVkIGluIHRoZSBzaGFkb3cgbWFwIChkZXB0aCBidWZmZXIgb2YgdGhlIGZyYW1lIGJ1ZmZlcilcXHJcXG4gICAvLyB3aGljaCB3YXMgcGFzc2VkIHRvIHRoZSBzaGFkZXIgYXMgYSB0ZXh0dXJlIG1hcC5cXHJcXG4gICAvLyB2ZWM0IHRleHR1cmVWYWx1ZSA9IHRleHR1cmUyRCh1U2hhZG93U2FtcGxlciwgdmVydGV4Lnh5KTtcXHJcXG5cXHJcXG4gICAvLyBUaGUgdGV4dHVyZSBtYXAgY29udGFpbnMgYSBzaW5nbGUgZGVwdGggdmFsdWUgZm9yIGVhY2ggcGl4ZWwuIEhvd2V2ZXIsXFxyXFxuICAgLy8gdGhlIHRleHR1cmUyRCBzYW1wbGVyIGFsd2F5cyByZXR1cm5zIGEgY29sb3IgZnJvbSBhIHRleHR1cmUuIEZvciBhXFxyXFxuICAgLy8gZ2wuREVQVEhfQ09NUE9ORU5UIHRleHR1cmUsIHRoZSBjb2xvciBjb250YWlucyB0aGUgZGVwdGggdmFsdWUgaW5cXHJcXG4gICAvLyBlYWNoIG9mIHRoZSBjb2xvciBjb21wb25lbnRzLiBJZiB0aGUgdmFsdWUgd2FzIGQsIHRoZW4gdGhlIGNvbG9yIHJldHVybmVkXFxyXFxuICAgLy8gaXMgKGQsZCxkLDEpLiBUaGlzIGlzIGEgXFxcImNvbG9yXFxcIiAoZGVwdGgpIHZhbHVlIGJldHdlZW4gWzAuMCwrMS4wXS5cXHJcXG4gICBmbG9hdCBzaGFkb3dtYXBfZGlzdGFuY2UgPSB0ZXh0dXJlMkQodVNoYWRvd1RleHR1cmUsIHZlcnRleC54eSkucjtcXHJcXG5cXHJcXG4gICAvLyBUZXN0IHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgZnJhZ21lbnQgYW5kIHRoZSBsaWdodCBzb3VyY2UgYXNcXHJcXG4gICAvLyBjYWxjdWxhdGVkIHVzaW5nIHRoZSBzaGFkb3dtYXAgdHJhbnNmb3JtYXRpb24gKHZlcnRleF9yZWxhdGl2ZV90b19saWdodC56KSBhbmRcXHJcXG4gICAvLyB0aGUgc21hbGxlc3QgZGlzdGFuY2UgYmV0d2VlbiB0aGUgY2xvc2VzdCBmcmFnbWVudCB0byB0aGUgbGlnaHQgc291cmNlXFxyXFxuICAgLy8gZm9yIHRoaXMgbG9jYXRpb24sIGFzIHN0b3JlZCBpbiB0aGUgc2hhZG93bWFwLiBXaGVuIHRoZSBjbG9zZXN0XFxyXFxuICAgLy8gZGlzdGFuY2UgdG8gdGhlIGxpZ2h0IHNvdXJjZSB3YXMgc2F2ZWQgaW4gdGhlIHNoYWRvd21hcCwgc29tZVxcclxcbiAgIC8vIHByZWNpc2lvbiB3YXMgbG9zdC4gVGhlcmVmb3JlIHdlIG5lZWQgYSBzbWFsbCB0b2xlcmFuY2UgZmFjdG9yIHRvXFxyXFxuICAgLy8gY29tcGVuc2F0ZSBmb3IgdGhlIGxvc3QgcHJlY2lzaW9uLlxcclxcbiAgIGZsb2F0IHRvbCA9IDAuMDAxO1xcclxcbiAgIGlmICh2ZXJ0ZXgueiA8PSBzaGFkb3dtYXBfZGlzdGFuY2UgKyB0b2wpXFxyXFxuICAge1xcclxcbiAgICAgIC8vIFRoaXMgc3VyZmFjZSByZWNlaXZlcyBmdWxsIGxpZ2h0IGJlY2F1c2UgaXQgaXMgdGhlIGNsb3Nlc3Qgc3VyZmFjZVxcclxcbiAgICAgIC8vIHRvIHRoZSBsaWdodC5cXHJcXG4gICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gVGhpcyBzdXJmYWNlIGlzIGluIGEgc2hhZG93IGJlY2F1c2UgdGhlcmUgaXMgYSBjbG9zZXIgc3VyZmFjZSB0b1xcclxcbiAgICAgIC8vIHRoZSBsaWdodCBzb3VyY2UuXFxyXFxuICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBpZiAoaW5fc2hhZG93KCkpXFxyXFxuICAge1xcclxcbiAgICAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZlYzModUFtYmllbnRJbnRlbnNpdHkpLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodmVjMyh1U2hhZG93KSwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgcmV0dXJuO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWMzIGV5ZSA9IHZlYzMoMC4wLCAwLjAsIC0xMC4wKTtcXHJcXG4gICB2ZWMzIHRvTGlnaHQgPSBub3JtYWxpemUoLXVMaWdodERpcmVjdGlvbik7XFxyXFxuICAgdmVjMyB0b0V5ZSA9IG5vcm1hbGl6ZShleWUgLSB2VmVydGV4KTtcXHJcXG4gICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2Tm9ybWFsKTsgLy8gdk5vcm1hbCBpcyBpbnRlcnBvbGF0ZWQgYW5kIG5vIGxvbmcgbm9ybWFsXFxyXFxuXFxyXFxuICAgLy8gY29tcHV0ZSBkaWZmdXNlIGNvbnRyaWJ1dGlvbiA9IGNvcyBvZiBhbmdsZSBiZXR3ZWVuIHRoZSB2ZWN0b3JzIChkb3QgcHJvZHVjdClcXHJcXG4gICBmbG9hdCBkaWZmdXNlRmFjdG9yID0gY2xhbXAoZG90KG5vcm1hbCwgdG9MaWdodCksIDAuMCwgMS4wKTtcXHJcXG4gICBmbG9hdCBkaWZmdXNlID0gZGlmZnVzZUZhY3RvciAqIHVMaWdodEludGVuc2l0eTtcXHJcXG5cXHJcXG4gICAvLyBjb21wdXRlIHNwZWN1bGFyIGNvbnRyaWJ1dGlvblxcclxcbiAgIGZsb2F0IHNoaW5pbmVzcyA9IDE1LjA7XFxyXFxuICAgdmVjMyByZWZsZWN0aW9uID0gbm9ybWFsaXplKDIuMCAqIGRvdChub3JtYWwsIHRvTGlnaHQpICogbm9ybWFsIC0gdG9MaWdodCk7XFxyXFxuICAgZmxvYXQgY29zQW5nbGUgPSBjbGFtcChkb3QocmVmbGVjdGlvbiwgdG9FeWUpLCAwLjAsIDEuMCk7IC8vIGNsYW1wIHRvIGF2b2lkIHZhbHVlcyA+IDkwIGRlZ1xcclxcbiAgIGZsb2F0IHNwZWN1bGFyID0gMC4xICogcG93KGNvc0FuZ2xlLCBzaGluaW5lc3MpO1xcclxcblxcclxcbiAgIGZsb2F0IHJnYjtcXHJcXG4gICBpZiAodVVzZVRocmVzaG9sZHMgPT0gMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmdiID0gdUFtYmllbnRJbnRlbnNpdHkgKyBkaWZmdXNlICsgc3BlY3VsYXI7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgZmxvYXQgdGhyZXNob2xkID0gMS4wIC0gZGlmZnVzZUZhY3RvcjtcXHJcXG5cXHJcXG4gICAgICBmbG9hdCB2MSA9IG1pbih1VGhyZXNob2xkMSwgdVRocmVzaG9sZDIpO1xcclxcbiAgICAgIGZsb2F0IHYyID0gbWF4KHVUaHJlc2hvbGQxLCB1VGhyZXNob2xkMik7XFxyXFxuXFxyXFxuICAgICAgaWYgKHRocmVzaG9sZCA8IHYxKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZ2IgPSB1TGlnaHRMaWdodDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGhyZXNob2xkIDwgdjIpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVNaWRMaWdodDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGhyZXNob2xkIDwgMS4wKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZ2IgPSB1RGFya0xpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVTaGFkb3c7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlmIChzcGVjdWxhciA+IDAuMDUpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVIaWdobGlnaHQ7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG5cXHJcXG4gICB2ZWMzIHJnYnYgPSB2ZWMzKHJnYiwgcmdiLCByZ2IpO1xcclxcbiAgIHJnYnYgKj0gdUNvbG9yO1xcclxcbiAgIGdsX0ZyYWdDb2xvciA9IHZlYzQocmdidiwgMS4wKTtcXHJcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWMzIGFWZXJ0ZXg7XFxyXFxuYXR0cmlidXRlIHZlYzMgYU5vcm1hbDtcXHJcXG5cXHJcXG51bmlmb3JtIG1hdDQgbW9kZWw7XFxyXFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxyXFxudW5pZm9ybSBtYXQ0IHNoYWRvd1ZpZXc7XFxyXFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxyXFxuXFxyXFxudmFyeWluZyB2ZWMzIHZOb3JtYWw7XFxyXFxudmFyeWluZyB2ZWMzIHZWZXJ0ZXg7XFxyXFxudmFyeWluZyB2ZWMzIHZTaGFkb3dWZXJ0ZXg7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChhVmVydGV4LCAxLjApO1xcclxcbiAgIHZOb3JtYWwgPSAobW9kZWwgKiB2ZWM0KGFOb3JtYWwsIDAuMCkpLnh5ejtcXHJcXG4gICB2VmVydGV4ID0gKG1vZGVsICogdmVjNChhVmVydGV4LCAxLjApKS54eXo7XFxyXFxuICAgdlNoYWRvd1ZlcnRleCA9IChzaGFkb3dWaWV3ICogbW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCkpLnh5ejtcXHJcXG59XCIiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9