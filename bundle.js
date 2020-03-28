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
exports.push([module.i, "* {\r\n  font-family: Verdana;\r\n}\r\n\r\nbody {\r\n  margin: 0px;\r\n}\r\n\r\n#MainCanvas {\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n#Overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: transparent;\r\n  user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n.SliderLabel {\r\n  display: inline-block;\r\n  width: 25%;\r\n  text-align: right;\r\n  padding-bottom: 9px;\r\n}\r\n\r\n.SliderHeader {\r\n  padding-bottom: 5px;\r\n  padding-left: 5px;\r\n  color: gray;\r\n}\r\n\r\n.SliderRange {\r\n  width: 50%;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  border-radius: 15px;\r\n  height: 15px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3) inset;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.PlanesApp .SliderRange {\r\n  width: 35%;\r\n}\r\n\r\n.PlanesApp .SliderLabel {\r\n  width: 18%;\r\n}\r\n\r\n.PlanesApp #ThresholdCanvas {\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 150px;\r\n  height: 150px;\r\n  background-color: rgb(128, 128, 150);\r\n}\r\n\r\n.SliderRange::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n}\r\n\r\n.SliderRange::-moz-range-thumb {\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border-width: 0.5px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  background: linear-gradient(135deg, lightgreen, darkgreen);\r\n  cursor: pointer;\r\n}\r\n\r\n.SliderColorSpan {\r\n  display: inline-block;\r\n  vertical-align: text-bottom;\r\n  width: 15px;\r\n  height: 15px;\r\n  margin-right: 5px;\r\n  border-radius: 50%;\r\n  border: gray;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#drawTime {\r\n  position: absolute;\r\n  top: -495px;\r\n  left: 2px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  font-size: 8pt;\r\n  font-family: arial;\r\n  color: white;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n}\r\n\r\n#modeButton {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 5px;\r\n  padding: 2px;\r\n  padding-right: 5px;\r\n  padding-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 10pt;\r\n  font-family: arial;\r\n  color: yellow;\r\n  text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#progressSpan {\r\n  position: absolute;\r\n  bottom: 3px;\r\n  left: 0px;\r\n  right: 0px;\r\n  height: 5px;\r\n  background-color: rgba(50, 205, 50, 0.75);\r\n}\r\n\r\n/* Style the tab */\r\n.Tabs {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Style the buttons that are used to open the tab content */\r\n.Tabs button {\r\n  background-color: #fff;\r\n  float: left;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  font-size: 12pt;\r\n  color: #333;\r\n}\r\n\r\n/* Change background color of buttons on hover */\r\n.Tabs button:hover {\r\n  background-color: #ddd;\r\n  color: #000;\r\n}\r\n\r\n/* Create an active/current tablink class */\r\n.Tabs button.active {\r\n  background-color: #eee;\r\n  color: #000;\r\n}\r\n\r\n/* Style the tab content */\r\n.TabContent {\r\n  display: none;\r\n  padding: 20px 12px;\r\n  background-color: #eee;\r\n}\r\n\r\n@media only screen and (max-device-width: 800px) {\r\n  .SliderHeader {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .SliderLabel {\r\n    width: 15%;\r\n    font-size: 40px;\r\n    padding-bottom: 18px;\r\n  }\r\n\r\n  .SliderRange {\r\n    width: 20%;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .PlanesApp .SliderRange {\r\n    width: 30%;\r\n  }\r\n\r\n  .PlanesApp .SliderLabel {\r\n    width: 20%;\r\n  }\r\n\r\n  .PlanesApp #ThresholdCanvas {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: rgb(128, 128, 150);\r\n  }\r\n\r\n  .SliderRange::-webkit-slider-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderRange::-moz-range-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .SliderColorSpan {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .SliderValueSpan {\r\n    font-size: 40px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  #drawTime {\r\n    top: -960px;\r\n    left: 4px;\r\n    font-size: 16pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #description {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  #modeButton {\r\n    font-size: 20pt;\r\n    font-weight: darker;\r\n  }\r\n\r\n  .Tabs button {\r\n    padding: 20px 40px;\r\n    font-size: 40px;\r\n  }\r\n}\r\n", ""]);
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

/***/ "./node_modules/worker-loader/dist/cjs.js!./src/LoaderWorker.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./src/LoaderWorker.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "078794ab6075d0ffe52d.worker.js");
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
/* harmony import */ var worker_loader_LoaderWorker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! worker-loader!./LoaderWorker */ "./node_modules/worker-loader/dist/cjs.js!./src/LoaderWorker.ts");
/* harmony import */ var worker_loader_LoaderWorker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(worker_loader_LoaderWorker__WEBPACK_IMPORTED_MODULE_11__);












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
                var worker = new worker_loader_LoaderWorker__WEBPACK_IMPORTED_MODULE_11___default.a();
                var tStart = Date.now();
                worker.onmessage = function (_a) {
                    var data = _a.data;
                    if (typeof data === 'string') {
                        // avoid flashing messages for things that happen very quickly.
                        if (Date.now() - tStart > 0) {
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
                var file = location.pathname + query;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yQW5hbHl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbG9yUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4ZWRUcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aFRyYWNlckFwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aFRyYWNlclJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFuZXNBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5lc1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Qb2ludGVyRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Qcm9maWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGhlcmljYWxDb29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVGhyZXNob2xkQ3RybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVBcnJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVDdWJlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iai50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZVNwaGVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZvbHVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29sb3JXaXRoVGVtcGVyYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsQ29tcGlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsTWF0LnRzIiwid2VicGFjazovLy8uL3NyYy9nbE9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xUZXh0dXJlRnJhbWVCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVW5pZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xVbmlmb3JtQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVmVjLnRzIiwid2VicGFjazovLy8uL3NyYy9odG1sQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxDb2xvcldpdGhBbHBoYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9TY3JlZW5WZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QYXRoVHJhY2VyVG9UZXh0dXJlVmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvUGxhbmVzRnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9QbGFuZXNWZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIl0sIm5hbWVzIjpbXSwi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O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUNJO1lBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3pELElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUV2RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FB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LEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUVyRixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxzREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUViLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENB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ZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixJQUFZLEVBQUUsTUFBYztRQUV6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0osbUJBQUM7QUFBRCxDQUFDLENBeENpQyx3REFBVyxHQXdDNUM7Ozs7Ozs7Ozs7Ozs7O0FDN0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNtQjtBQUNsQjtBQUNJO0FBQ0o7QUFFbEMsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ25CLCtDQUFNO0lBQ04sMkNBQUk7QUFDUCxDQUFDLEVBSFcsVUFBVSxLQUFWLFVBQVUsUUFHckI7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQzs7QUFFRDs7R0FFRztBQUNIO0lBQUE7UUFDVyxZQUFPLEdBQWEsRUFBRSxDQUFDO0lBNEJsQyxDQUFDO0lBMUJFOzs7O09BSUc7SUFDSSw4QkFBSSxHQUFYLFVBQVksTUFBYztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBS0Qsc0JBQVcsbUNBQU07UUFIakI7O1dBRUc7YUFDSDtZQUNHLElBQUksQ0FBQyxHQUFHLElBQUksNkNBQU0sRUFBRSxDQUFDO1lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtZQUNELENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBRTNCLG1DQUFtQztZQUNuQyxPQUFPLENBQUMsQ0FBQztRQUNaLENBQUM7OztPQUFBO0lBQ0osc0JBQUM7QUFBRCxDQUFDO0FBQ0Q7Ozs7R0FJRztBQUNIO0lBQUE7UUFDVSxhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFzQixFQUFFLENBQUM7UUFDbEMsV0FBTSxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1RSxXQUFNLEdBQUcsSUFBSSw2Q0FBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9FLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFnWGpDLENBQUM7SUE5V0Usc0JBQVcsOEJBQUs7YUFBaEI7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsK0JBQU07YUFBakI7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQUs7YUFBaEI7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsK0JBQU07YUFBakI7WUFDRyxPQUFPLElBQUksNkNBQU0sQ0FBQztnQkFDZixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDbkMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ25DLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQ3JDLENBQUMsQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBRVMsMEJBQUksR0FBZCxVQUFlLEdBQW9CO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0NBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLGtEQUFRLEVBQUUsQ0FBQztRQUV2QixJQUFJLEtBQUssR0FBRyxJQUFJLDZDQUFNLENBQUM7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRWxELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENB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RUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksOENBQU0sRUFBRSxDQUFDLENBQUM7U0FDbEM7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUcsc0RBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFF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QUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEk7cUJBQ0k7b0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEk7YUFDSDtTQUNIO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1REFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNKLHNCQUFDO0FBQUQsQ0FBQyxDQWpGb0Msd0RBQVcsR0FpRi9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGZ0M7QUFDVztBQUNRO0FBRXBEOztHQUVHO0FBQ0g7SUFBb0Msa0NBQVc7SUFFNUM7Ozs7OztPQU1HO0lBQ0gsd0JBQW1CLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFBbkUsWUFFRyxpQkFBTyxTQU9UO1FBTEUsc0JBQXNCO1FBQ3RCLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5QyxxQ0FBcUM7UUFDckMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFDbEMsQ0FBQztJQUVPLHVDQUFjLEdBQXRCLFVBQXVCLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFFO2lCQUNJLElBQUksQ0FBQyxLQUFLLFFBQVEsR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNkNBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxRTtpQkFDSTtnQkFDRixJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFFMUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFFaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw2Q0FBTSxDQUFDO3dCQUMzQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQzt3QkFDOUQsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUNaLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO3FCQUNoRSxDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNIO1NBQ0g7SUFDSixDQUFDO0lBRU8sd0NBQWUsR0FBdkIsVUFBd0IsUUFBZ0I7UUFDckMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDVixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7b0JBQ2YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDMUU7cUJBQ0ksSUFBSSxDQUFDLEtBQUssUUFBUSxHQUFHLENBQUMsRUFBRTtvQkFDMUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQztvQkFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUMxRTtxQkFDSTtvQkFDRixJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNwQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDOUIsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUMxRTt5QkFDSTt3QkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUMxRTtpQkFDSDthQUNIO1NBQ0g7SUFDSixDQUFDO0lBQ0oscUJBQUM7QUFBRCxDQUFDLENBbEZtQyx3REFBVyxHQWtGOUM7Ozs7Ozs7Ozs7Ozs7O0FDeEZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDSDtBQUNpQjtBQXdDbEQ7O0dBRUc7QUFDSSxJQUFJLFFBQVEsR0FBYztJQUM5QixNQUFNLEVBQUUsR0FBRztJQUNYLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixLQUFLLEVBQUUsQ0FBQztJQUNSLFVBQVUsRUFBRSxHQUFHO0lBRWYsZUFBZSxFQUFFLFNBQVM7SUFDMUIsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixjQUFjLEVBQUUsU0FBUztJQUN6QixlQUFlLEVBQUUsU0FBUztJQUUxQixZQUFZLEVBQUUsU0FBUztJQUN2QixvQkFBb0IsRUFBRSxTQUFTO0lBQy9CLGdCQUFnQixFQUFFLFNBQVM7SUFFM0IsV0FBVyxFQUFFLElBQUk7SUFDakIsWUFBWSxFQUFFLElBQUk7SUFFbEIsZUFBZSxFQUFFLEdBQUc7SUFDcEIsV0FBVyxFQUFFLElBQUksZ0RBQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsU0FBUyxFQUFFLElBQUksNkNBQU0sQ0FBQyxJQUFJLDhEQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3RCxzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLFNBQVMsRUFBRSxJQUFJLGdEQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLElBQUksRUFBRSxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO0lBQ3RCLE1BQU0sRUFBRSxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sRUFBRSxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sRUFBRSxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sRUFBRSxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE9BQU8sRUFBRSxHQUFHO0NBQ2Q7Ozs7Ozs7Ozs7Ozs7QUM5RUQ7QUFBQTtBQUFBO0FBQWlDO0FBRWpDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLGtDQUFrQztBQUVwRDs7R0FFRztBQUNIO0lBQUE7UUFDRzs7V0FFRztRQUNJLGNBQVMsR0FBc0IsRUFBRSxDQUFDO1FBRXpDOztXQUVHO1FBQ0ksV0FBTSxHQUFHLElBQUksNkNBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU1Qzs7V0FFRztRQUNJLFdBQU0sR0FBRyxJQUFJLDZDQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFpQmxELENBQUM7SUFmRTs7OztPQUlHO0lBQ0kscUJBQUksR0FBWCxVQUFZLFFBQXlCO1FBRWxDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDSixhQUFD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QUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNsRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ25FLElBQUksc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUNuRSxJQUFJLHNCQUFzQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDbkUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDO0tBQ3JFLENBQUM7SUF1REws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QUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0YsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEMsNEJBQTRCO1FBQzVCLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxH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TyxDQUFDLG9IQUF1RDs7QUFFekY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI01haW5DYW52YXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxNTApO1xcclxcbn1cXHJcXG5cXHJcXG4jT3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJMYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVySGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uU2xpZGVyUmFuZ2Uge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XFxyXFxuICBib3JkZXI6IGdyYXk7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5QbGFuZXNBcHAgLlNsaWRlclJhbmdlIHtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxufVxcclxcblxcclxcbi5QbGFuZXNBcHAgLlNsaWRlckxhYmVsIHtcXHJcXG4gIHdpZHRoOiAxOCU7XFxyXFxufVxcclxcblxcclxcbi5QbGFuZXNBcHAgI1RocmVzaG9sZENhbnZhcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMCwgMHB4IDBweCAxcHggIzBkMGQwZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgbGlnaHRncmVlbiwgZGFya2dyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLlNsaWRlclJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDAsIDBweCAwcHggMXB4ICMwZDBkMGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci13aWR0aDogMC41cHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGxpZ2h0Z3JlZW4sIGRhcmtncmVlbik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5TbGlkZXJDb2xvclNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogZ3JheTtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIGxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RyYXdUaW1lIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTQ5NXB4O1xcclxcbiAgbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBmb250LXNpemU6IDhwdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtb2RlQnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9ncmVzc1NwYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAzcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgaGVpZ2h0OiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCAyMDUsIDUwLCAwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRhYiAqL1xcclxcbi5UYWJzIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiB0aGUgdGFiIGNvbnRlbnQgKi9cXHJcXG4uVGFicyBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXFxyXFxuLlRhYnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cXHJcXG4uVGFicyBidXR0b24uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXFxyXFxuLlRhYkNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuU2xpZGVySGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlckxhYmVsIHtcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZSB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyUmFuZ2Uge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAuU2xpZGVyTGFiZWwge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlBsYW5lc0FwcCAjVGhyZXNob2xkQ2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDE1MCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyUmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TbGlkZXJSYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU2xpZGVyQ29sb3JTcGFuIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLlNsaWRlclZhbHVlU3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZHJhd1RpbWUge1xcclxcbiAgICB0b3A6IC05NjBweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBkYXJrZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbW9kZUJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGRhcmtlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5UYWJzIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA3ODc5NGFiNjA3NWQwZmZlNTJkLndvcmtlci5qc1wiKTtcbn07IiwiXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgcmVwcmVzZW50aW5nIGNvbG9yIHZhbHVlcy4gVmFsdWVzIG1heSBiZSBvbiBhIDAtMSBvciAwLTI1NSBzY2FsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgIHB1YmxpYyByOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBnOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBiOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIFJHQiB2YWx1ZXMgdG8gc3RvcmUgaW4gdGhpcyBvYmplY3RcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb2xvcjogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5yID0gY29sb3JbMF07XHJcbiAgICAgIHRoaXMuZyA9IGNvbG9yWzFdO1xyXG4gICAgICB0aGlzLmIgPSBjb2xvclsyXTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gXCIuL2dsQ29sb3JcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogVGhlIGl0ZW1zIHJldHVybmVkIGZyb20gZXhhbWluaW5nIHRoZSBjdXJyZW50IHZpZXdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9yRGF0YSB7XHJcbiAgIG1heENocm9tYTogbnVtYmVyLFxyXG4gICBoaWdobGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgYXZnTGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgbGlnaHRlc3RMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICBkYXJrZXN0TGlnaHRDb2xvcjogZ2xDb2xvcixcclxuICAgYXZnU2hhZG93Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGxpZ2h0ZXN0U2hhZG93Q29sb3I6IGdsQ29sb3IsXHJcbiAgIGRhcmtlc3RTaGFkb3dDb2xvcjogZ2xDb2xvcixcclxuICAgdGVybWluYXRvckNvbG9yOiBnbENvbG9yLFxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBncmFicyBhIGNvcHkgb2YgdGhlIHJlbmRlcmVkIHRleHR1cmUgYW5kIGV4YW1pbmVzIGl0IGZvclxyXG4gKiBjb2xvciB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sb3JBbmFseXplciB7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGFycmF5IHdoZXJlIHdlJ2xsIGR1bXAgdGhlIHRleHR1cmUgdG8uIENhY2hlIHRoaXMgYXJyYXkgaW5zdGVhZCBvZlxyXG4gICAgKiBhbGxvY2F0aW5nIGEgbmV3IG9uZSBmb3IgZWFjaCBmcmFtZS5cclxuICAgICovXHJcbiAgIHByaXZhdGUgcGl4ZWxzOiBGbG9hdDMyQXJyYXk7XHJcblxyXG4gICAvKipcclxuICAgICogU2l6ZSBvZiB0aGUgdGV4dHVyZVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBudW1iZXI7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHNpemUgVGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGJ1ZmZlclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlcikge1xyXG5cclxuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuXHJcbiAgICAgIC8vIGFsbG9jYXRlIHRoZSBidWZmZXIgdXNlZCBmb3IgZ3JhYnNcclxuICAgICAgdGhpcy5waXhlbHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc2l6ZSAqIHRoaXMuc2l6ZSAqIDQpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUnVucyB0aGUgYW5hbHlzaXMgLSBncmFicyBhIGNvcHkgb2YgdGhlIGZyYW1lIGJ1ZmZlciBhbmQgc2NhbnMgaXQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYWxwaGFMaWdodCBUaGUgYWxwaGEgdmFsdWUgZm9yIHRoaW5ncyBpbiBsaWdodC4gVmFsdWVzIGFib3ZlIHRoaXMgYXJlIGR1ZSB0byBzcGVjdWxhciBsaWdodGluZy5cclxuICAgICogQHBhcmFtIGFscGhhU2hhZG93IFRoZSBhbHBoYSB2YWx1ZSBmb3IgdGhpbmdzIGluIHNoYWRvdy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBydW4oYWxwaGFMaWdodDogbnVtYmVyLCBhbHBoYVNoYWRvdzogbnVtYmVyKTogSUNvbG9yRGF0YSB7XHJcblxyXG4gICAgICBsZXQgZGF0YTogSUNvbG9yRGF0YSA9IHtcclxuICAgICAgICAgbWF4Q2hyb21hOiAwLFxyXG4gICAgICAgICBhdmdMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICAgICBsaWdodGVzdExpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGRhcmtlc3RMaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pLFxyXG4gICAgICAgICBhdmdTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgbGlnaHRlc3RTaGFkb3dDb2xvcjogbmV3IGdsQ29sb3IoWzAsIDAsIDBdKSxcclxuICAgICAgICAgZGFya2VzdFNoYWRvd0NvbG9yOiBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pLFxyXG4gICAgICAgICB0ZXJtaW5hdG9yQ29sb3I6IG5ldyBnbENvbG9yKFswLCAwLCAwXSksXHJcbiAgICAgICAgIGhpZ2hsaWdodENvbG9yOiBuZXcgZ2xDb2xvcihbMCwgMCwgMF0pLFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPIGhhbmRsZSBjYXNlIHdoZW4gdGhlIHRleHQgdHlwZSBpcyBVTlNJR05FRF9CWVRFXHJcbiAgICAgIGdsLnJlYWRQaXhlbHMoMCwgMCwgdGhpcy5zaXplLCB0aGlzLnNpemUsIGdsLlJHQkEsIGdsLkZMT0FULCB0aGlzLnBpeGVscyk7XHJcblxyXG4gICAgICBsZXQgbnVtTGlnaHRQaXhlbHMgPSAwO1xyXG4gICAgICBsZXQgbnVtU2hhZG93UGl4ZWxzID0gMDtcclxuICAgICAgbGV0IG51bVRlcm1pbmF0b3JQaXhlbHMgPSAwO1xyXG5cclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnNpemU7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChyb3cgKiB0aGlzLnNpemUgKyBjb2wpICogNDtcclxuICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnBpeGVsc1tpbmRleCArIDBdO1xyXG4gICAgICAgICAgICBsZXQgZyA9IHRoaXMucGl4ZWxzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIGxldCBiID0gdGhpcy5waXhlbHNbaW5kZXggKyAyXTtcclxuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnBpeGVsc1tpbmRleCArIDNdO1xyXG5cclxuICAgICAgICAgICAgLy8gaWdub3JlIHZhbHVlcyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgYmFsbFxyXG4gICAgICAgICAgICBpZiAoYSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGF2ZyA9IChyICsgZyArIGIpIC8gMztcclxuICAgICAgICAgICAgbGV0IGNocm9tYSA9IChNYXRoLmFicyhyIC0gYXZnKSArIE1hdGguYWJzKGcgLSBhdmcpICsgTWF0aC5hYnMoYiAtIGF2ZykpIC8gKDQgLyAzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaHJvbWEgPiBkYXRhLm1heENocm9tYSkge1xyXG4gICAgICAgICAgICAgICBkYXRhLm1heENocm9tYSA9IGNocm9tYTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgICAgICAgICAgaWYgKGEgPT0gYWxwaGFMaWdodCkge1xyXG4gICAgICAgICAgICAgICBudW1MaWdodFBpeGVscysrO1xyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5saWdodGVzdExpZ2h0Q29sb3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmIChkYXRhLmRhcmtlc3RMaWdodENvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0TGlnaHRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRhdGEubGlnaHRlc3RMaWdodENvbG9yID0gZ2xDb2xvci5saWdodGVzdChkYXRhLmxpZ2h0ZXN0TGlnaHRDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RMaWdodENvbG9yID0gZ2xDb2xvci5kYXJrZXN0KGRhdGEuZGFya2VzdExpZ2h0Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmIgKz0gY29sb3IuYjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmcgKz0gY29sb3IuZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhID09IGFscGhhU2hhZG93KSB7XHJcbiAgICAgICAgICAgICAgIG51bVNoYWRvd1BpeGVscysrO1xyXG4gICAgICAgICAgICAgICBpZiAoZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5saWdodGVzdFNoYWRvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFya2VzdFNoYWRvd0NvbG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEubGlnaHRlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciA9IGdsQ29sb3IuZGFya2VzdChkYXRhLmRhcmtlc3RTaGFkb3dDb2xvciwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICBkYXRhLmF2Z1NoYWRvd0NvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iICs9IGNvbG9yLmI7XHJcbiAgICAgICAgICAgICAgIGRhdGEuYXZnU2hhZG93Q29sb3IuZyArPSBjb2xvci5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPiBhbHBoYUxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIGRhdGEuaGlnaGxpZ2h0Q29sb3IgPSBnbENvbG9yLmxpZ2h0ZXN0KGRhdGEuaGlnaGxpZ2h0Q29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRlcm1pbmF0b3IgPSAoYWxwaGFMaWdodCArIGFscGhhU2hhZG93KSAvIDIuMDtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGEgLSB0ZXJtaW5hdG9yKSA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICBudW1UZXJtaW5hdG9yUGl4ZWxzKys7XHJcbiAgICAgICAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLnIgKz0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuYiArPSBjb2xvci5iO1xyXG4gICAgICAgICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5nICs9IGNvbG9yLmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobnVtTGlnaHRQaXhlbHMgPiAwKSB7XHJcbiAgICAgICAgIGRhdGEuYXZnTGlnaHRDb2xvci5yIC89IG51bUxpZ2h0UGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLmF2Z0xpZ2h0Q29sb3IuZyAvPSBudW1MaWdodFBpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdMaWdodENvbG9yLmIgLz0gbnVtTGlnaHRQaXhlbHM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bVNoYWRvd1BpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5yIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5nIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgICAgZGF0YS5hdmdTaGFkb3dDb2xvci5iIC89IG51bVNoYWRvd1BpeGVscztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtVGVybWluYXRvclBpeGVscyA+IDApIHtcclxuICAgICAgICAgZGF0YS50ZXJtaW5hdG9yQ29sb3IuciAvPSBudW1UZXJtaW5hdG9yUGl4ZWxzO1xyXG4gICAgICAgICBkYXRhLnRlcm1pbmF0b3JDb2xvci5nIC89IG51bVRlcm1pbmF0b3JQaXhlbHM7XHJcbiAgICAgICAgIGRhdGEudGVybWluYXRvckNvbG9yLmIgLz0gbnVtVGVybWluYXRvclBpeGVscztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVycG9sYXRlcyBhbmQgYXJyYXkgb2YgY29sb3JzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sb3JSYW5nZSB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgY29sb3JzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbG9yczogaHRtbENvbG9yW107XHJcblxyXG4gICAvKipcclxuICAgICogQ29uc3RydWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjb2xvcnMgVGhlIGNvbG9ycyB0byBpbnRlcnBvbGF0ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yczogaHRtbENvbG9yW10pIHtcclxuICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGFuIGludGVycG9sYXRlZCBjb2xvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSBBIHZhbHVlIGJldHdlZW4gMCBhbmQgMS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQodmFsdWU6IG51bWJlcik6IGh0bWxDb2xvciB7XHJcblxyXG4gICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh2YWx1ZSA+PSAxKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcigodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSk7XHJcbiAgICAgICAgIGxldCBwYXJ0aWFsID0gKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpICogdmFsdWUgLSBpbmRleDtcclxuXHJcbiAgICAgICAgIGxldCByID0gTWF0aC5yb3VuZCh0aGlzLmNvbG9yc1tpbmRleF0uciArIHBhcnRpYWwgKiAodGhpcy5jb2xvcnNbaW5kZXggKyAxXS5yIC0gdGhpcy5jb2xvcnNbaW5kZXhdLnIpKTtcclxuICAgICAgICAgbGV0IGcgPSBNYXRoLnJvdW5kKHRoaXMuY29sb3JzW2luZGV4XS5nICsgcGFydGlhbCAqICh0aGlzLmNvbG9yc1tpbmRleCArIDFdLmcgLSB0aGlzLmNvbG9yc1tpbmRleF0uZykpO1xyXG4gICAgICAgICBsZXQgYiA9IE1hdGgucm91bmQodGhpcy5jb2xvcnNbaW5kZXhdLmIgKyBwYXJ0aWFsICogKHRoaXMuY29sb3JzW2luZGV4ICsgMV0uYiAtIHRoaXMuY29sb3JzW2luZGV4XS5iKSk7XHJcblxyXG4gICAgICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImV4cG9ydCBsZXQgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGxldCBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIGlmICh2YWx1ZSA8IG1pbikge1xyXG4gICAgICByZXR1cm4gbWluO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9EZWcocmFkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKDE4MCAvIE1hdGguUEkpICogcmFkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9SYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gKE1hdGguUEkgLyAxODApICogZGVnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWl4KHYxOiBudW1iZXIsIHYyOiBudW1iZXIsIG1peDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuIHYxICsgY2xhbXAobWl4LCAwLCAxKSAqICh2MiAtIHYxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ3NzKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgKGEgPT09IHVuZGVmaW5lZCA/ICcnIDogJywnICsgYSkgKyAnKSc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxzIHtcclxuICAgcHVibGljIHN0YXRpYyBnZXQgZ2woKSB7XHJcbiAgICAgIHJldHVybiBnbDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBzZXQgZ2woY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICBnbCA9IGNvbnRleHQ7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgaG9sZGluZyBpbmZvcm1hdGlvbiBhYm91dCBhIHRyaWFuZ2xlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5kZXhlZFRyaWFuZ2xlIHtcclxuICAgdmVydGljZXM6IGdsVmVjM1tdO1xyXG4gICBwdWJsaWMgaVYwOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpVjE6IG51bWJlcjtcclxuICAgcHVibGljIGlWMjogbnVtYmVyO1xyXG5cclxuICAgbm9ybWFsczogZ2xWZWMzW107XHJcbiAgIHB1YmxpYyBpTjA6IG51bWJlcjtcclxuICAgcHVibGljIGlOMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaU4yOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihcclxuICAgICAgdmVydGljZXM6IGdsVmVjM1tdLCBpVjA6IG51bWJlciwgaVYxOiBudW1iZXIsIGlWMjogbnVtYmVyLFxyXG4gICAgICBub3JtYWxzOiBnbFZlYzNbXSwgaU4wPzogbnVtYmVyLCBpTjE/OiBudW1iZXIsIGlOMj86IG51bWJlcixcclxuICAgKSB7XHJcbiAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcclxuICAgICAgdGhpcy5pVjAgPSBpVjA7XHJcbiAgICAgIHRoaXMuaVYxID0gaVYxO1xyXG4gICAgICB0aGlzLmlWMiA9IGlWMjtcclxuXHJcbiAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgIGlmIChpTjAgPT09IHVuZGVmaW5lZCB8fCBpTjAgPT09IC0xKSB7XHJcbiAgICAgICAgIGxldCBub3JtYWwgPSB0aGlzLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsKTtcclxuICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ub3JtYWxzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgIHRoaXMuaU4wID0gaW5kZXg7XHJcbiAgICAgICAgIHRoaXMuaU4xID0gaW5kZXg7XHJcbiAgICAgICAgIHRoaXMuaU4yID0gaW5kZXg7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgIHRoaXMuaU4wID0gaU4wO1xyXG4gICAgICAgICB0aGlzLmlOMSA9IGlOMTtcclxuICAgICAgICAgdGhpcy5pTjIgPSBpTjI7XHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBsZXQgbiA9IHRoaXMuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICBsZXQgbjAgPSB0aGlzLm4wO1xyXG4gICAgICAgICBsZXQgbjEgPSB0aGlzLm4xO1xyXG4gICAgICAgICBsZXQgbjIgPSB0aGlzLm4yO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobjAudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuMS50b1N0cmluZygyKSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4yLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgKi9cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBnZXQgdjAoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbdGhpcy5pVjBdO1xyXG4gICB9XHJcbiAgIGdldCB2MSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1t0aGlzLmlWMV07XHJcbiAgIH1cclxuICAgZ2V0IHYyKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMuaVYyXTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG4wKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbHNbdGhpcy5pTjBdO1xyXG4gICB9XHJcbiAgIGdldCBuMSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxzW3RoaXMuaU4xXTtcclxuICAgfVxyXG4gICBnZXQgbjIoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsc1t0aGlzLmlOMl07XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5YKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYwLngsIE1hdGgubWluKHRoaXMudjEueCwgdGhpcy52Mi54KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5ZKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYwLnksIE1hdGgubWluKHRoaXMudjEueSwgdGhpcy52Mi55KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5aKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYwLnosIE1hdGgubWluKHRoaXMudjEueiwgdGhpcy52Mi56KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhYKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYwLngsIE1hdGgubWF4KHRoaXMudjEueCwgdGhpcy52Mi54KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhZKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYwLnksIE1hdGgubWF4KHRoaXMudjEueSwgdGhpcy52Mi55KSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhaKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYwLnosIE1hdGgubWF4KHRoaXMudjEueiwgdGhpcy52Mi56KSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlTm9ybWFsKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBhID0gdGhpcy52MS5zdWJ0cmFjdCh0aGlzLnYwKTtcclxuICAgICAgbGV0IGIgPSB0aGlzLnYyLnN1YnRyYWN0KHRoaXMudjEpO1xyXG4gICAgICByZXR1cm4gYS5jcm9zcyhiKS5ub3JtYWxpemUoKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFBhdGhUcmFjZXJSZW5kZXJlciwgUmVuZGVyTW9kZSB9IGZyb20gXCIuL1BhdGhUcmFjZXJSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tIFwiLi9nbE1hdFwiO1xyXG5pbXBvcnQgeyBVbmlmb3JtcyB9IGZyb20gXCIuL1VuaWZvcm1zXCI7XHJcbmltcG9ydCB7IFNwaGVyaWNhbENvb3JkIH0gZnJvbSBcIi4vU3BoZXJpY2FsQ29vcmRcIjtcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCI7XHJcbmltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIH0gZnJvbSBcIi4vZ2xDb2xvcldpdGhUZW1wZXJhdHVyZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxzLCBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZVNwaGVyZSB9IGZyb20gXCIuL1RyaWFuZ2xlU3BoZXJlXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlQ3ViZSB9IGZyb20gXCIuL1RyaWFuZ2xlQ3ViZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iakZpbGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9iakZpbGVcIjtcclxuXHJcbmxldCBza2luVG9uZXMgPSBbXHJcbiAgIG5ldyBodG1sQ29sb3IoWzI0MCwgMjIzLCAyMTRdKSxcclxuICAgbmV3IGh0bWxDb2xvcihbMjU1LCAyMTgsIDIwMF0pLFxyXG4gICBuZXcgaHRtbENvbG9yKFsyMzIsIDE3OSwgMTE3XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzE5MCwgMTM2LCA4N10pLFxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzExNSwgOTEsIDU5XSksXHJcbiAgIG5ldyBodG1sQ29sb3IoWzEzOSwgNzMsIDY1XSlcclxuICAgLy8gICBuZXcgaHRtbENvbG9yKFsxMzIsIDU1LCAzNF0pLFxyXG4gICAvL25ldyBodG1sQ29sb3IoWzYxLCAxMiwgMl0pLFxyXG4gICAvLyAgIG5ldyBodG1sQ29sb3IoWzM4LCA3LCAxXSlcclxuXTtcclxuXHJcbmVudW0gUG9pbnRlck1vZGUge1xyXG4gICBWaWV3LFxyXG4gICBMaWdodCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXJBcHAge1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFBhdGhUcmFjZXJSZW5kZXJlcjtcclxuICAgcHJpdmF0ZSBtb2RlbHZpZXc6IGdsTWF0NDtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uOiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3UHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGVTcGVjaWFsID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgcG9zOiBTcGhlcmljYWxDb29yZDtcclxuICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgcHJpdmF0ZSBpbnRlbnNpdHlTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBsaWdodENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYmFsbENvbG9yU2xpZGVyOiBTbGlkZXI7XHJcbiAgIHByaXZhdGUgYW1iaWVudEludGVuc2l0eVNsaWRlcjogU2xpZGVyO1xyXG5cclxuICAgcHJpdmF0ZSBhbmdsZVggPSAwLjU7XHJcbiAgIHByaXZhdGUgYW5nbGVZID0gMC43NTtcclxuICAgcHJpdmF0ZSB6b29tWiA9IDMuNTtcclxuXHJcbiAgIHByaXZhdGUgbW91c2VEb3duID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgb2xkWDogbnVtYmVyO1xyXG4gICBwcml2YXRlIG9sZFk6IG51bWJlcjtcclxuXHJcbiAgIHByaXZhdGUgbGFzdFRpbWVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IE1BWF9TQU1QTEVTID0gNTAwO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcG9uZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdjYW52YXMnO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgbGV0IGNvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgR2xvYmFscy5nbCA9IGNvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoc3RhcnQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uRG93bihldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYW52YXMub250b3VjaG1vdmUgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5vbk1vdmUoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbnRvdWNoZW5kID0gKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Eb3duKGV2ZW50LngsIGV2ZW50LnkpO1xyXG5cclxuICAgICAgICAgLy8gZGlzYWJsZSBzZWxlY3Rpb24gYmVjYXVzZSBkcmFnZ2luZyBpcyB1c2VkIGZvciByb3RhdGluZyB0aGUgY2FtZXJhIGFuZCBtb3Zpbmcgb2JqZWN0c1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub25Nb3ZlKGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcy5vbm1vdXNldXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY2FudmFzLm9ubW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvYWRNb2RlbCh0aGlzLnF1ZXJ5KS50aGVuKCh0T2JqOiBUcmlhbmdsZU9iaikgPT4ge1xyXG4gICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBhdGhUcmFjZXJSZW5kZXJlcih0T2JqKTtcclxuICAgICAgICAgLy90aGlzLnJlbmRlcmVyLnNldE1vZGVsKHRPYmopO1xyXG4gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGV0IGRyYXdUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRyYXdUaW1lLmlkID0gJ2RyYXdUaW1lJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUaW1lKTtcclxuXHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBidXR0b24uaWQgPSAnbW9kZUJ1dHRvbic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyc7XHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5WaWV3O1xyXG4gICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgc3dpdGNoICh0aGlzLnBvaW50ZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUG9pbnRlck1vZGUuVmlldzpcclxuICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdMaWdodCc7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9pbnRlck1vZGUgPSBQb2ludGVyTW9kZS5MaWdodDtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLkxpZ2h0OlxyXG4gICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcnO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuVmlldztcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICAgIGxldCBwcm9ncmVzc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHByb2dyZXNzU3Bhbi5pZCA9ICdwcm9ncmVzc1NwYW4nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NTcGFuKTtcclxuXHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgICAgdGhpcy5pbnRlbnNpdHlTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0SW50ZW5zaXR5JyxcclxuICAgICAgICAgbGFiZWw6ICdMaWdodCBJbnRlbnNpdHknLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUxpZ2h0SW50ZW5zaXR5ID0gdGhpcy5pbnRlbnNpdHlTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gYnVpbGQgYSByYW5nZSBvZiBjb2xvcnNcclxuICAgICAgbGV0IG1pbiA9IDIwMDA7XHJcbiAgICAgIGxldCBtYXggPSAxMDAwMDtcclxuICAgICAgbGV0IGNvbG9yczogaHRtbENvbG9yW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ZW1wID0gbWluICsgKGkgLyA5KSAqIChtYXggLSBtaW4pO1xyXG4gICAgICAgICBjb2xvcnMucHVzaChnbENvbG9yV2l0aFRlbXBlcmF0dXJlLmNyZWF0ZSh0ZW1wKS50b0h0bWxDb2xvcigpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIgPSBuZXcgU2xpZGVyKGRpdiwge1xyXG4gICAgICAgICBpZDogJ0xpZ2h0Q29sb3InLFxyXG4gICAgICAgICBsYWJlbDogJ0xpZ2h0IENvbG9yJyxcclxuICAgICAgICAgbWluOiAyMDAwLFxyXG4gICAgICAgICBtYXg6IDEwMDAwLFxyXG4gICAgICAgICB2YWx1ZTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZS5kYXlsaWdodC50ZW1wZXJhdHVyZSxcclxuICAgICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4geyByZXR1cm4gc2xpZGVyLnZhbHVlLnRvRml4ZWQoKSArIFwiS1wiIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBhcHBseSB0aGUgaW5pdGlhbCBjb2xvcnNcclxuICAgICAgdGhpcy5zZXRMaWdodENvbG9yKCk7XHJcblxyXG4gICAgICB0aGlzLmJhbGxDb2xvclNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQmFsbENvbG9yJyxcclxuICAgICAgICAgbGFiZWw6ICdCYWxsIENvbG9yJyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IDUwLFxyXG4gICAgICAgICBjb2xvcnM6IHNraW5Ub25lcyxcclxuICAgICAgICAgb25pbnB1dDogKCkgPT4ge1xyXG4gICAgICAgICAgICBVbmlmb3Jtcy51T2JqQ29sb3IgPSB0aGlzLmJhbGxDb2xvclNsaWRlci5nbENvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBnbCBtYXRjaGVzIHRoZSBpbml0aWFsIFVJIHNldHRpbmdcclxuICAgICAgVW5pZm9ybXMudU9iakNvbG9yID0gdGhpcy5iYWxsQ29sb3JTbGlkZXIuZ2xDb2xvcjtcclxuXHJcbiAgICAgIHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlciA9IG5ldyBTbGlkZXIoZGl2LCB7XHJcbiAgICAgICAgIGlkOiAnQW1iaWVudEludGVuc2l0eScsXHJcbiAgICAgICAgIGxhYmVsOiAnQW1iaWVudCBMaWdodCcsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiBVbmlmb3Jtcy51QW1iaWVudExpZ2h0SW50ZW5zaXR5ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgVW5pZm9ybXMudUFtYmllbnRMaWdodEludGVuc2l0eSA9IHRoaXMuYW1iaWVudEludGVuc2l0eVNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZGl2O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGxvYWRNb2RlbChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKSA9PT0gJ3RyaWFuZ2xlc3BoZXJlJykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSAwLjU7XHJcbiAgICAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCByYWRpdXMsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVTcGhlcmUoOCwgcmFkaXVzLCBjZW50ZXIpO1xyXG4gICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVjdWJlJykge1xyXG4gICAgICAgICBVbmlmb3Jtcy51QmFsbFJhZGl1cyA9IDA7XHJcbiAgICAgICAgIGxldCBzaXplID0gMC44O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgc2l6ZSAvIDIuMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZUN1YmUoc2l6ZSwgY2VudGVyKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcub2JqJykpIHtcclxuICAgICAgICAgVW5pZm9ybXMudUJhbGxSYWRpdXMgPSAwO1xyXG4gICAgICAgICByZXR1cm4gZmV0Y2gocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZU9iakZpbGUocmVzKTtcclxuICAgICAgICAgICAgICAgbGV0IHNpemUgPSAxLjU7XHJcbiAgICAgICAgICAgICAgIHRPYmouYXV0b0NlbnRlcihzaXplKTtcclxuICAgICAgICAgICAgICAgdE9iai50cmFuc2xhdGUobmV3IGdsVmVjMyhbMCwgdE9iai5oZWlnaHQgLyAyLCAwXSkpO1xyXG4gICAgICAgICAgICAgICB0T2JqLmJyZWFrSW50b1ZvbHVtZXMoKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0TGlnaHRDb2xvcigpIHtcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY29sb3JzIGZvciB0aGUgaW50ZW5zaXR5IHNsaWRlclxyXG4gICAgICB0aGlzLmludGVuc2l0eVNsaWRlci5jb2xvcnMgPSBbaHRtbENvbG9yLmJsYWNrLCB0aGlzLmxpZ2h0Q29sb3JTbGlkZXIuaHRtbENvbG9yXTtcclxuXHJcbiAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW4gcmVuZGVyaW5nXHJcbiAgICAgIFVuaWZvcm1zLnVMaWdodENvbG9yID0gdGhpcy5saWdodENvbG9yU2xpZGVyLmdsQ29sb3I7XHJcblxyXG4gICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbkRvd24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMucG9pbnRlck1vZGVTcGVjaWFsID0gKHggPCAwLjEgKiB0aGlzLmNhbnZhcy53aWR0aCkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICB0aGlzLm9sZFkgPSB5O1xyXG5cclxuICAgICAgdGhpcy5wb3MgPSBTcGhlcmljYWxDb29yZC5mcm9tWFlaKFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMpO1xyXG5cclxuICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW92ZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcclxuICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGUgPT09IFBvaW50ZXJNb2RlLlZpZXcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuem9vbVogLT0gKHkgLSB0aGlzLm9sZFkpICogMC4wMTtcclxuICAgICAgICAgICAgICAgdGhpcy56b29tWiA9IGNsYW1wKHRoaXMuem9vbVosIDEsIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFuZ2xlcyBiYXNlZCBvbiBob3cgZmFyIHdlIG1vdmVkIHNpbmNlIGxhc3QgdGltZVxyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWSAtPSAoeCAtIHRoaXMub2xkWCkgKiAwLjAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuZ2xlWCArPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAxO1xyXG5cclxuICAgICAgICAgICAgICAgLy8gZG9uJ3QgZ28gdXBzaWRlIGRvd25cclxuICAgICAgICAgICAgICAgdGhpcy5hbmdsZVggPSBNYXRoLm1heCh0aGlzLmFuZ2xlWCwgLU1hdGguUEkgLyAyICsgMC4wMSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuYW5nbGVYID0gTWF0aC5taW4odGhpcy5hbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5MaWdodCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlck1vZGVTcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyAtPSAoeSAtIHRoaXMub2xkWSkgKiAwLjAwNTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MucmFkaXVzID0gY2xhbXAodGhpcy5wb3MucmFkaXVzLCBVbmlmb3Jtcy51QmFsbFJhZGl1cyArIDAuNSwgNSk7XHJcbiAgICAgICAgICAgICAgIFVuaWZvcm1zLnVMaWdodFBvcy52YWx1ZXMgPSB0aGlzLnBvcy50b1hZWigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5yb3RhdGlvbkFuZ2xlICs9ICh4IC0gdGhpcy5vbGRYKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MuZWxldmF0aW9uQW5nbGUgKz0gKHkgLSB0aGlzLm9sZFkpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnBvcy5lbGV2YXRpb25BbmdsZSA9IGNsYW1wKHRoaXMucG9zLmVsZXZhdGlvbkFuZ2xlLCAwLCAxODApO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBjbGVhciB0aGUgc2FtcGxlIGJ1ZmZlclxyXG4gICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlbWVtYmVyIHRoaXMgY29vcmRpbmF0ZVxyXG4gICAgICAgICB0aGlzLm9sZFggPSB4O1xyXG4gICAgICAgICB0aGlzLm9sZFkgPSB5O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcm9jZXNzZXMgYSBjbGljay90b3VjaCBldmVudCBhdCB0aGUgZGVzaWduYXRlZCBjb29yZGluYXRlcy4gSWYgYSBoaXRcclxuICAgICogb2NjdXJzLCB0aGUgY2xpY2tlZCBvbiB2aWV3IGlzIHN3YXBwZWQgZm9yIHRoZSBwcmltYXJ5IHZpZXcgYW5kIHRydWVcclxuICAgICogaXMgcmV0dXJuZWQuIElmIG5vIGhpdCBvY2N1cnMsIGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY2xpY2soeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgLy8gVE9ETyBoYW5kbGUgdGhpcyB3aXRoaW4gdGhlIFBhdGhUcmFjZXIgY2xhc3Mgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGhhcmQgY29kZSB2aWV3IHN0dWZmXHJcbiAgICAgIGxldCBzaXplID0gMC4yICogdGhpcy5jYW52YXMud2lkdGg7XHJcblxyXG4gICAgICBpZiAoeSA8IHNpemUpIHtcclxuXHJcbiAgICAgICAgIGlmICh4ID4gdGhpcy5jYW52YXMud2lkdGggLSAxICogc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXAoMik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoeCA+IHRoaXMuY2FudmFzLndpZHRoIC0gMiAqIHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2FwKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHggPiB0aGlzLmNhbnZhcy53aWR0aCAtIDMgKiBzaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dhcCgwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICBzd2l0Y2ggKHRoaXMucmVuZGVyZXIucmVuZGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFJlbmRlck1vZGUuQXJ0aXN0OlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5DaHJvbWE6XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ2hyb21hIFZpZXc6IHJlZD1oaWdoZXN0IGNocm9tYVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgUmVuZGVyTW9kZS5WYWx1ZTpcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJWYWx1ZSBWaWV3XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBSZW5kZXJNb2RlLkJhbmRzOlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIjUgQ29sb3IgKyBIaWdobGlnaHQgVmlld1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVRleHR1cmUoKSB7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3ID0gZ2xNYXQ0Lm1ha2VMb29rQXQoXHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUsXHJcbiAgICAgICAgIG5ldyBnbFZlYzMoWzAsIDEsIDBdKSwgIC8vIGNlbnRlciBwb2ludFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAxLCAwXSkgICAvLyB1cCB2ZWN0b3JcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbiA9IGdsTWF0NC5tYWtlUGVyc3BlY3RpdmUoNTUsIDEsIDAuMSwgMTAwKTtcclxuICAgICAgdGhpcy5tb2RlbHZpZXdQcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0aW9uLm11bHRNKHRoaXMubW9kZWx2aWV3KTtcclxuICAgICAgdGhpcy5yZW5kZXJlci51cGRhdGVUZXh0dXJlKHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbik7XHJcbiAgIH07XHJcblxyXG4gICBwcml2YXRlIGRpc3BsYXlUZXh0dXJlKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmRpc3BsYXlUZXh0dXJlKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN3YXAocG9zOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zd2FwKHBvcyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVUaW1lckxhYmVsKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgICAgaWYgKFVuaWZvcm1zLnVTYW1wbGUgPCB0aGlzLk1BWF9TQU1QTEVTKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVFeWUudmFsdWVzWzBdID0gdGhpcy56b29tWiAqIE1hdGguc2luKHRoaXMuYW5nbGVZKSAqIE1hdGguY29zKHRoaXMuYW5nbGVYKTtcclxuICAgICAgICAgVW5pZm9ybXMudUV5ZS52YWx1ZXNbMV0gPSB0aGlzLnpvb21aICogTWF0aC5zaW4odGhpcy5hbmdsZVgpO1xyXG4gICAgICAgICBVbmlmb3Jtcy51RXllLnZhbHVlc1syXSA9IHRoaXMuem9vbVogKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlWCk7XHJcblxyXG4gICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoKTtcclxuICAgICAgICAgdGhpcy5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHVwZGF0ZVRpbWVyTGFiZWwoKSB7XHJcblxyXG4gICAgICBsZXQgdCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgbGV0IGRyYXdUaW1lTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd1RpbWUnKTtcclxuICAgICAgaWYgKHRoaXMubGFzdFRpbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgbGV0IGVsYXBzZWRNcyA9ICh0IC0gdGhpcy5sYXN0VGltZXNbMF0pIC8gdGhpcy5sYXN0VGltZXMubGVuZ3RoO1xyXG4gICAgICAgICBkcmF3VGltZUxhYmVsLmlubmVyVGV4dCA9IGVsYXBzZWRNcy50b0ZpeGVkKDApICsgJ21zJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxhc3RUaW1lcy5wdXNoKHQpO1xyXG4gICAgICBpZiAodGhpcy5sYXN0VGltZXMubGVuZ3RoID4gMzApIHtcclxuICAgICAgICAgdGhpcy5sYXN0VGltZXMuc2hpZnQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJhd1RpbWVMYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gVW5pZm9ybXMudVNhbXBsZSA8IHRoaXMuTUFYX1NBTVBMRVMgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgICAgbGV0IHByb2dyZXNzID0gVW5pZm9ybXMudVNhbXBsZSAvIHRoaXMuTUFYX1NBTVBMRVM7XHJcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzU3BhbicpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgbGV0IHcgPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgc3Bhbi5zdHlsZS5yaWdodCA9IHcgKiAoMSAtIHByb2dyZXNzKSArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHNwYW4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSAnLi9nbE1hdCc7XHJcbmltcG9ydCB7IGdsVmVjMywgZ2xWZWM0IH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB0b1NjcmVlblZlcnRleFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuVmVydGV4Lmdsc2wnO1xyXG5pbXBvcnQgdG9TY3JlZW5GcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvU2NyZWVuRnJhZ21lbnQuZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVWZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BhdGhUcmFjZXJUb1RleHR1cmVWZXJ0ZXguZ2xzbCc7XHJcbmltcG9ydCB0b1RleHR1cmVGcmFnbWVudFNvdXJjZSBmcm9tICcuL3NoYWRlcnMvUGF0aFRyYWNlclRvVGV4dHVyZUZyYWdtZW50Lmdsc2wnO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSAnLi9Db2xvclJhbmdlJztcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tICcuL1VuaWZvcm1zJztcclxuaW1wb3J0IHsgZ2wsIGlzTW9iaWxlIH0gZnJvbSAnLi9HbG9iYWxzJztcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tICcuL1Byb2ZpbGVyJztcclxuaW1wb3J0IHsgZ2xVbmlmb3JtIH0gZnJvbSAnLi9nbFVuaWZvcm0nO1xyXG5pbXBvcnQgeyBnbENvbXBpbGVyIH0gZnJvbSAnLi9nbENvbXBpbGVyJztcclxuaW1wb3J0IHsgQ29sb3JBbmFseXplciB9IGZyb20gJy4vQ29sb3JBbmFseXplcic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IGdsVW5pZm9ybUJsb2NrIH0gZnJvbSAnLi9nbFVuaWZvcm1CbG9jayc7XHJcblxyXG4vKipcclxuICogUmVuZGVyaW5nIG1vZGUgZm9yIGRpc3BsYXlpbmcgdGhlIHRleHR1cmVcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlbmRlck1vZGUge1xyXG4gICBBcnRpc3QgPSAwLFxyXG4gICBWYWx1ZSA9IDEsXHJcbiAgIENocm9tYSA9IDIsXHJcbiAgIEJhbmRzID0gMyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgZG9lcyB0aGUgd29yayBvZiBidWlsZGluZyB0aGUgUGF0aCBUcmFjZWQgdGV4dHVyZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhdGhUcmFjZXJSZW5kZXJlciB7XHJcblxyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XHJcbiAgIHByaXZhdGUgdGV4dHVyZXM6IFdlYkdMVGV4dHVyZVtdO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvU2NyZWVuVmVydGV4QXR0cmlidXRlOiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdG9UZXh0dXJlUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZTogbnVtYmVyO1xyXG4gICBwcml2YXRlIGFuYWx5emVyOiBDb2xvckFuYWx5emVyO1xyXG5cclxuICAgcHJpdmF0ZSBtYWluVmlldyA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICBwcml2YXRlIHNtYWxsVmlld3MgPSBbXHJcbiAgICAgIFJlbmRlck1vZGUuQ2hyb21hLFxyXG4gICAgICBSZW5kZXJNb2RlLlZhbHVlLFxyXG4gICAgICBSZW5kZXJNb2RlLkJhbmRzLFxyXG4gICBdO1xyXG5cclxuICAgcHJpdmF0ZSB2ZXJ0aWNlcyA9IFtcclxuICAgICAgLTEsIC0xLFxyXG4gICAgICAtMSwgKzEsXHJcbiAgICAgICsxLCAtMSxcclxuICAgICAgKzEsICsxXHJcbiAgIF07XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodE9iajogVHJpYW5nbGVPYmopIHtcclxuXHJcbiAgICAgIC8vIGxhcmdlciB0ZXh0dXJlIGlzIGhpZ2hlciByZXNvbHV0aW9uLCBidXQgdGFrZXMgbG9uZ2VyIHRvIGNvbXB1dGVcclxuICAgICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSA9IDI1NjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gVW5pZm9ybXMudVRleHR1cmVTaXplID0gNTEyO1xyXG4gICAgICAgICBVbmlmb3Jtcy51VGV4dHVyZVNpemUgPSAyNTY7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmFseXplciA9IG5ldyBDb2xvckFuYWx5emVyKFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdmVydGV4IGJ1ZmZlciAtIHRoZSBibG9jayB3ZSdsbCBkcmF3IG91ciByZW5kZXJlZCB0ZXh0dXJlIG9uXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgZnJhbWVidWZmZXJcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcblxyXG4gICAgICBsZXQgaW50ZXJuYWxGb3JtYXQ6IG51bWJlcjtcclxuICAgICAgbGV0IGZvcm1hdDogbnVtYmVyO1xyXG4gICAgICBsZXQgdHlwZTogbnVtYmVyO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHR1cmVzXHJcbiAgICAgIGlmIChnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICBsZXQgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0Jyk7XHJcbiAgICAgICAgIGlmIChleHQpIHtcclxuICAgICAgICAgICAgLy8gVGhhbmtzIEFwcGxlLiBBbHdheXMgZ290IHRvIGRvIHRoaW5ncyBhIGxpdHRsZSBkaWZmZXJlbnRseVxyXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgICAgIHR5cGUgPSBleHQuSEFMRl9GTE9BVF9PRVM7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5vIGZsb2F0aW5nIHBvaW50IHRleHR1cmVzPyByZWFsbHkgZmFsbCBiYWNrIHRvIHVuc2lnbmVkIGJ5dGVzXHJcbiAgICAgICAgICAgIGludGVybmFsRm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICAgICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IGxldCB5b3UgZG8gYW4gJ2Vsc2UgaWYnIGhlcmUgYW5kIHdoZW4gV2ViR0wyIGlzXHJcbiAgICAgIC8vIG5vdCBzdXBwb3J0ZWQsIHdlIGdldCBhbiBleGNlcHRpb24sIHNvIHRodXMgdGhlIHRyeS1jYXRjaFxyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1MzgxMTIyL3R5cGVzY3JpcHQtdHlwZS1uYXJyb3dlZC10by1uZXZlci13aXRoLWluc3RhbmNlb2YtaW4tYW4taWYtZWxzZS1zdGF0ZW1lbnRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgaWYgKGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgICAgICBnbC5nZXRFeHRlbnNpb24oJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnKTtcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBMzJGO1xyXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgICAgICAgICB0eXBlID0gZ2wuRkxPQVRcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdHdvIHRleHR1cmVzLiBPbmUgd2UgZGlzcGxheSBhbmQgb25lIHdlIGRyYXcgdG9cclxuICAgICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goZ2wuY3JlYXRlVGV4dHVyZSgpKTtcclxuICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1tpXSk7XHJcbiAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELCAgICAgICAgICAvLyB0YXJnZXRcclxuICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgLy8gbGV2ZWxcclxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQsICAgICAgICAgLy8gaW50ZXJuYWwgZm9ybWF0XHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIHdpZHRoXHJcbiAgICAgICAgICAgIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSwgIC8vIGhlaWdodFxyXG4gICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXJcclxuICAgICAgICAgICAgZm9ybWF0LCAgICAgICAgICAgICAgICAgLy8gZm9ybWF0XHJcbiAgICAgICAgICAgIHR5cGUsICAgICAgICAgICAgICAgICAgIC8vIHR5cGVcclxuICAgICAgICAgICAgbnVsbCAgICAgICAgICAgICAgICAgICAgLy8gcGl4ZWxzXHJcbiAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdG9TY3JlZW4gc2hhZGVyXHJcbiAgICAgIHRoaXMudG9TY3JlZW5Qcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKHRvU2NyZWVuVmVydGV4U291cmNlLCB0b1NjcmVlbkZyYWdtZW50U291cmNlKTtcclxuICAgICAgdGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9TY3JlZW5Qcm9ncmFtLCAndmVydGV4Jyk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudG9TY3JlZW5WZXJ0ZXhBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgdGhpcy5jb21waWxlU2hhZGVyKHRPYmopO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNvbXBpbGVTaGFkZXIodE9iaj86IFRyaWFuZ2xlT2JqKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgdG9UZXh0dXJlIHNoYWRlclxyXG4gICAgICBpZiAodE9iaiAmJiB0T2JqLnRyaWFuZ2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgdG9UZXh0dXJlVmVydGV4U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnI3ZlcnNpb24gMzAwIGVzJylcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJ05PVEhJTkcnLCAnVVNFX1RSSUFOR0xFUycpLFxyXG4gICAgICAgICAgICB0b1RleHR1cmVGcmFnbWVudFNvdXJjZVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPFZFUlNJT04+JywgJyN2ZXJzaW9uIDMwMCBlcycpXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCdOT1RISU5HJywgJ1VTRV9UUklBTkdMRVMnKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9WRVJUSUNFUz4nLCB0T2JqLnZlcnRpY2VzLmxlbmd0aC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAucmVwbGFjZSgnPE5VTV9WT0xVTUVTPicsIHRPYmoudm9sdW1lcy5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgLnJlcGxhY2UoJzxOVU1fVFJJQU5HTEVTPicsIHRPYmoudHJpYW5nbGVzLmxlbmd0aC50b1N0cmluZygpKVxyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgLy8gdXBsb2FkIHRyaWFuZ2xlcyB0byB0aGUgR1BVXHJcbiAgICAgICAgIHRoaXMudXBsb2FkVW5pZm9ybXModE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudG9UZXh0dXJlUHJvZ3JhbSA9IGdsQ29tcGlsZXIuY29tcGlsZShcclxuICAgICAgICAgICAgdG9UZXh0dXJlVmVydGV4U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnJyksXHJcbiAgICAgICAgICAgIHRvVGV4dHVyZUZyYWdtZW50U291cmNlXHJcbiAgICAgICAgICAgICAgIC5yZXBsYWNlKCc8VkVSU0lPTj4nLCAnJylcclxuICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSk7XHJcbiAgICAgIHAubG9nKCdjb21waWxlJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBVcGxvYWRzIGFsbCB0aGUgdHJpYW5nbGUgZGF0YSB0byBXZWJHTFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHByb2dyYW0gVGhlIHByb2dyYW0gdG8gdXBsb2FkIHRvXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHVwbG9hZFVuaWZvcm1zKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICAvLyB1cGxvYWQgdGhlIGJpZyBjaHVua3MgYXMgVW5pZm9ybSBCbG9ja3NcclxuICAgICAgbGV0IGJsb2NrQmluZGluZyA9IDI7XHJcbiAgICAgIGxldCB2QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2sodGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlWZXJ0aWNlc0Jsb2NrJywgYmxvY2tCaW5kaW5nKTtcclxuXHJcbiAgICAgIC8vIHB1dCB0aGUgZGF0YSBpbnRvIGEgRmxvYXQzMkFycmF5IGZvciB1cGxvYWRpbmdcclxuICAgICAgbGV0IHZEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0T2JqLnZlcnRpY2VzLmxlbmd0aCAqIDQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHYgPSB0T2JqLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDBdID0gdi54O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDFdID0gdi55O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDJdID0gdi56O1xyXG4gICAgICAgICB2RGF0YVs0ICogaSArIDNdID0gMDtcclxuICAgICAgfVxyXG4gICAgICB2QmxvY2sudXBsb2FkKHZEYXRhKTtcclxuXHJcbiAgICAgIGJsb2NrQmluZGluZyA9IDM7XHJcbiAgICAgIGxldCB0QmxvY2sgPSBuZXcgZ2xVbmlmb3JtQmxvY2sodGhpcy50b1RleHR1cmVQcm9ncmFtLCAnTXlUcmlhbmdsZXNCbG9jaycsIGJsb2NrQmluZGluZyk7XHJcblxyXG4gICAgICAvLyBwdXQgdGhlIGRhdGEgaW50byBhIEZsb2F0MzJBcnJheSBmb3IgdXBsb2FkaW5nXHJcbiAgICAgIGxldCB0RGF0YSA9IG5ldyBJbnQzMkFycmF5KHRPYmoudHJpYW5nbGVzLmxlbmd0aCAqIDQpO1xyXG4gICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IHRPYmoudm9sdW1lcy5sZW5ndGg7IHYrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdE9iai52b2x1bWVzW3ZdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZvbC50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHQgPSB2b2wudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYwO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYxO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IHQuaVYyO1xyXG4gICAgICAgICAgICB0RGF0YVtpbmRleCsrXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0QmxvY2sudXBsb2FkKHREYXRhKTtcclxuXHJcbiAgICAgIC8vIFVwbG9hZCB0aGUgdm9sdW1lIGluZm8gYXMgYSBzdGFuZGFyZCB1bmlmb3JtXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9UZXh0dXJlUHJvZ3JhbSk7XHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnZvbHVtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZvbCA9IHRPYmoudm9sdW1lc1tpXTtcclxuICAgICAgICAgdW5pLnNldCgnb2JqZWN0LnZvbHVtZXNbJyArIGkgKyAnXS5zdGFydEluZGV4Jywgc3RhcnRJbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgIHVuaS5zZXQoJ29iamVjdC52b2x1bWVzWycgKyBpICsgJ10ubnVtVHJpYW5nbGVzJywgdm9sLnRyaWFuZ2xlcy5sZW5ndGgsIHRydWUpO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1pbicsIHZvbC5ib3hNaW4pO1xyXG4gICAgICAgICB1bmkuc2V0KCdvYmplY3Qudm9sdW1lc1snICsgaSArICddLmJveE1heCcsIHZvbC5ib3hNYXgpO1xyXG4gICAgICAgICBzdGFydEluZGV4ICs9IHZvbC50cmlhbmdsZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNaW4nLCB0T2JqLmJveE1pbik7XHJcbiAgICAgIHVuaS5zZXQoJ29iamVjdC5ib3hNYXgnLCB0T2JqLmJveE1heCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgcmVuZGVyTW9kZSgpOiBSZW5kZXJNb2RlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpblZpZXc7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBVbmlmb3Jtcy51U2FtcGxlID0gMDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRFeWVSYXkobWF0cml4OiBnbE1hdDQsIHg6IG51bWJlciwgeTogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzQoW3gsIHksIDAsIDFdKTtcclxuICAgICAgcmV0dXJuIG1hdHJpeC5tdWx0Vih2ZWMpLmRpdmlkZUJ5VygpLnN1YnRyYWN0KFVuaWZvcm1zLnVFeWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlVGV4dHVyZShtb2RlbHZpZXdQcm9qZWN0aW9uOiBnbE1hdDQpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIGltcGxlbWVudCBhbGlhc2luZyBieSByYW5kb20gc2FtcGxpbmcgd2l0aGluIGEgcGl4ZWxcclxuICAgICAgbGV0IHggPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHkgPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAvIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZTtcclxuICAgICAgbGV0IHogPSAwO1xyXG5cclxuICAgICAgbGV0IHYgPSBuZXcgZ2xWZWMzKFt4LCB5LCB6XSk7XHJcbiAgICAgIGxldCBqaXR0ZXIgPSBnbE1hdDQuZnJvbVRyYW5zbGF0aW9uKHYpO1xyXG4gICAgICBsZXQgbWF0cml4ID0gaml0dGVyLm11bHRNKG1vZGVsdmlld1Byb2plY3Rpb24pLmludmVydCgpO1xyXG5cclxuICAgICAgVW5pZm9ybXMudVJheTAwID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCAtMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy51UmF5MDEgPSB0aGlzLmdldEV5ZVJheShtYXRyaXgsIC0xLCArMSk7XHJcbiAgICAgIFVuaWZvcm1zLnVSYXkxMCA9IHRoaXMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMudVJheTExID0gdGhpcy5nZXRFeWVSYXkobWF0cml4LCArMSwgKzEpO1xyXG4gICAgICAvLyBzZXQgdW5pZm9ybXNcclxuICAgICAgbGV0IHVuaSA9IG5ldyBnbFVuaWZvcm0odGhpcy50b1RleHR1cmVQcm9ncmFtKTtcclxuICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcblxyXG4gICAgICAvLyByZW5kZXIgdG8gdGV4dHVyZVxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBVbmlmb3Jtcy51VGV4dHVyZVNpemUsIFVuaWZvcm1zLnVUZXh0dXJlU2l6ZSk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMV0sIDApO1xyXG5cclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRvVGV4dHVyZVZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmFuYWx5emVyLnJ1bihVbmlmb3Jtcy51TGlnaHRBbHBoYSwgVW5pZm9ybXMudVNoYWRvd0FscGhhKTtcclxuICAgICAgVW5pZm9ybXMudU1heENocm9tYSA9IGRhdGEubWF4Q2hyb21hO1xyXG5cclxuICAgICAgbGV0IGNyID0gbmV3IENvbG9yUmFuZ2UoW2RhdGEuZGFya2VzdExpZ2h0Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdMaWdodENvbG9yLnRvSHRtbENvbG9yKCksIGRhdGEubGlnaHRlc3RMaWdodENvbG9yLnRvSHRtbENvbG9yKCldKTtcclxuICAgICAgVW5pZm9ybXMudUhpZ2hsaWdodENvbG9yID0gZGF0YS5oaWdobGlnaHRDb2xvcjtcclxuICAgICAgVW5pZm9ybXMudUxpZ2h0TGlnaHRDb2xvciA9IGNyLmdldCgwLjg1KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudU1pZExpZ2h0Q29sb3IgPSBjci5nZXQoMC41KS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtMaWdodENvbG9yID0gY3IuZ2V0KDAuMTUpLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgY3IgPSBuZXcgQ29sb3JSYW5nZShbZGF0YS5kYXJrZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKSwgZGF0YS5hdmdTaGFkb3dDb2xvci50b0h0bWxDb2xvcigpLCBkYXRhLmxpZ2h0ZXN0U2hhZG93Q29sb3IudG9IdG1sQ29sb3IoKV0pO1xyXG4gICAgICAvL1VuaWZvcm1zLnVTaGFkb3dDb2xvciA9IGRhdGEudGVybWluYXRvckNvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51U2hhZG93Q29sb3IgPSBkYXRhLmF2Z1NoYWRvd0NvbG9yO1xyXG4gICAgICBVbmlmb3Jtcy51UmVmbGVjdGVkTGlnaHRDb2xvciA9IGNyLmdldCgxKS50b0dsQ29sb3IoKTtcclxuICAgICAgVW5pZm9ybXMudURhcmtBY2NlbnRDb2xvciA9IGNyLmdldCgwLjApLnRvR2xDb2xvcigpO1xyXG5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIC8vIHBpbmcgcG9uZyB0ZXh0dXJlc1xyXG4gICAgICB0aGlzLnRleHR1cmVzLnJldmVyc2UoKTtcclxuXHJcbiAgICAgIFVuaWZvcm1zLnVTYW1wbGUrKztcclxuICAgICAgVW5pZm9ybXMudVJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgIH07XHJcblxyXG4gICBwdWJsaWMgZGlzcGxheVRleHR1cmUoKTogdm9pZCB7XHJcblxyXG4gICAgICAvLyBzaXplIG9mIHRoZSBhY3R1YWwgY2FudmFzLiBUaGUgdGV4dHVyZSB3ZSBjcmVhdGUgaXMgZHJhd24gdG8gdGhpcyBpdGVtXHJcbiAgICAgIGxldCBzaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgLy8gbm90IHN1cmUgd2h5LCBidXQgdGhpcyBiYXNpY2FsbHkgYmVjb21lcyBmdWxsIHdpZHRoIG9uIG15IHBob25lXHJcbiAgICAgICAgIHNpemUgPSA1MTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdsLmNhbnZhcy53aWR0aCA9IHNpemU7XHJcbiAgICAgIGdsLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMudG9TY3JlZW5Qcm9ncmFtKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1swXSk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50b1NjcmVlblZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1haW4gc2NyZWVuXHJcbiAgICAgIGxldCB1bmkgPSBuZXcgZ2xVbmlmb3JtKHRoaXMudG9TY3JlZW5Qcm9ncmFtKTtcclxuICAgICAgVW5pZm9ybXMudVNjYWxlID0gMS4wO1xyXG4gICAgICBVbmlmb3Jtcy51WE9mZnNldCA9IDAuMDtcclxuICAgICAgVW5pZm9ybXMudVlPZmZzZXQgPSAwLjA7XHJcbiAgICAgIFVuaWZvcm1zLnVNb2RlID0gdGhpcy5tYWluVmlldztcclxuICAgICAgdW5pLnNldEFsbChVbmlmb3Jtcyk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG5cclxuICAgICAgLy8gZGlzcGxheSB0aGUgc21hbGxlciB2aWV3c1xyXG4gICAgICBVbmlmb3Jtcy51U2NhbGUgPSAwLjI7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbWFsbFZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVYT2Zmc2V0ID0gMS4wIC0gKHRoaXMuc21hbGxWaWV3cy5sZW5ndGggLSBpIC0gMC41KSAqICgyICogVW5pZm9ybXMudVNjYWxlKTtcclxuICAgICAgICAgVW5pZm9ybXMudVlPZmZzZXQgPSAxLjAgLSBVbmlmb3Jtcy51U2NhbGU7XHJcbiAgICAgICAgIFVuaWZvcm1zLnVNb2RlID0gdGhpcy5zbWFsbFZpZXdzW2ldO1xyXG4gICAgICAgICB1bmkuc2V0QWxsKFVuaWZvcm1zKTtcclxuICAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN3YXAocG9zOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zbWFsbFZpZXdzID0gW1xyXG4gICAgICAgICBSZW5kZXJNb2RlLkNocm9tYSxcclxuICAgICAgICAgUmVuZGVyTW9kZS5WYWx1ZSxcclxuICAgICAgICAgUmVuZGVyTW9kZS5CYW5kcyxcclxuICAgICAgXTtcclxuICAgICAgaWYgKHRoaXMubWFpblZpZXcgPT0gdGhpcy5zbWFsbFZpZXdzW3Bvc10pIHtcclxuICAgICAgICAgdGhpcy5tYWluVmlldyA9IFJlbmRlck1vZGUuQXJ0aXN0O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLm1haW5WaWV3ID0gdGhpcy5zbWFsbFZpZXdzW3Bvc107XHJcbiAgICAgICAgIHRoaXMuc21hbGxWaWV3c1twb3NdID0gUmVuZGVyTW9kZS5BcnRpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kaXNwbGF5VGV4dHVyZSgpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuL1NsaWRlclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgR2xvYmFscywgdG9SYWQsIGlzTW9iaWxlIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBQbGFuZXNSZW5kZXJlciB9IGZyb20gXCIuL1BsYW5lc1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcbmltcG9ydCB7IGdsVmVjNCwgZ2xWZWMzLCBnbFZlYzIgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBOb3JtYWxUeXBlLCBUcmlhbmdsZU9iaiwgVHJpYW5nbGVPYmpEYXRhIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVTcGhlcmUgfSBmcm9tIFwiLi9UcmlhbmdsZVNwaGVyZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUN1YmUgfSBmcm9tIFwiLi9UcmlhbmdsZUN1YmVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmpGaWxlIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpGaWxlXCI7XHJcbmltcG9ydCB7IFRocmVzaG9sZEN0cmwgfSBmcm9tIFwiLi9UaHJlc2hvbGRDdHJsXCI7XHJcbmltcG9ydCB7IFBvaW50ZXJFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9Qb2ludGVyRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCBMb2FkZXJXb3JrZXIgZnJvbSAnd29ya2VyLWxvYWRlciEuL0xvYWRlcldvcmtlcic7XHJcblxyXG5lbnVtIFBvaW50ZXJNb2RlIHtcclxuICAgVmlldyxcclxuICAgTGlnaHQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFuZXNBcHAge1xyXG4gICBwdWJsaWMgcmVuZGVyZXI6IFBsYW5lc1JlbmRlcmVyO1xyXG4gICBwcml2YXRlIHBvaW50ZXJNb2RlOiBQb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgIHByaXZhdGUgcG9pbnRlck1vZGVTcGVjaWFsID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgcHJpdmF0ZSBvdmVybGF5OiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgaGFuZGxlcjogUG9pbnRlckV2ZW50SGFuZGxlcjtcclxuXHJcbiAgIHByaXZhdGUgZGlydHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgcHJpdmF0ZSBxdWVyeTogc3RyaW5nO1xyXG5cclxuICAgcHJpdmF0ZSBoaWdobGlnaHRTbGlkZXI6IFNsaWRlclxyXG4gICBwcml2YXRlIGxpZ2h0TGlnaHRTbGlkZXI6IFNsaWRlcjtcclxuICAgcHJpdmF0ZSBtaWRMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIGRhcmtMaWdodFNsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIHNoYWRvd1NsaWRlcjogU2xpZGVyO1xyXG4gICBwcml2YXRlIHRocmVzaG9sZEN0cmw6IFRocmVzaG9sZEN0cmw7XHJcbiAgIHByaXZhdGUgbW9kZUJ1dHRvbjogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICAgcHVibGljIHNldCB0aHJlc2hvbGQxKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIudGhyZXNob2xkMSA9IHZhbDtcclxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnRocmVzaG9sZDIgPSB2YWw7XHJcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocXVlcnk6IHN0cmluZykge1xyXG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wb25lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdQbGFuZXNBcHAnO1xyXG5cclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5pZCA9ICdNYWluQ2FudmFzJztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGhpcy5vdmVybGF5LmlkID0gJ092ZXJsYXknO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuXHJcbiAgICAgIGxldCBzaXplID0gNTEyO1xyXG4gICAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgICAgc2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBzaXplO1xyXG4gICAgICAvL3RoaXMub3ZlcmxheS5zdHlsZS53aWR0aCA9IHNpemU7XHJcbiAgICAgIC8vdGhpcy5vdmVybGF5LmhlaWdodCA9IHNpemU7XHJcbiAgICAgIGRpdi5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnO1xyXG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubGluZUhlaWdodCA9IHNpemUgKyAncHgnOyAvLyB2ZXJ0aWNhbGx5IGNlbnRlciB0ZXh0XHJcblxyXG5cclxuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgICAvLyBUT0RPIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IG5vdCBiZWluZyBhYmxlIHRvIGNyZWF0ZSBhIFdlYkdMIGNvbnRleHRcclxuICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gZ2V0IFdlYkdMIGNvbnRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgR2xvYmFscy5nbCA9IGNvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFBsYW5lc1JlbmRlcmVyKCk7XHJcblxyXG4gICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgUG9pbnRlckV2ZW50SGFuZGxlcih0aGlzLmNhbnZhcyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlci5vbkRvd24gPSAocG9zKSA9PiB0aGlzLm9uRG93bihwb3MpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Nb3ZlID0gKHBvcykgPT4gdGhpcy5vbk1vdmUocG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uQ2xpY2sgPSAocG9zKSA9PiB0aGlzLm9uQ2xpY2socG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uRGJsQ2xpY2sgPSAocG9zKSA9PiB0aGlzLm9uRGJsQ2xpY2socG9zKTtcclxuXHJcbiAgICAgIGRvY3VtZW50Lm9ua2V5cHJlc3MgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ28nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIub3B0aW1pemUoTm9ybWFsVHlwZS5TbW9vdGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ3AnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIub3B0aW1pemUoTm9ybWFsVHlwZS5GbGF0KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRoaXMubW9kZUJ1dHRvbi5pZCA9ICdtb2RlQnV0dG9uJztcclxuICAgICAgdGhpcy5tb2RlQnV0dG9uLmlubmVySFRNTCA9ICdWaWV3JztcclxuICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgIHRoaXMubW9kZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLnRvZ2dsZU1vZGUoKTtcclxuICAgICAgfVxyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tb2RlQnV0dG9uKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29udGFpbmVyMi5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcjIpO1xyXG5cclxuICAgICAgdGhpcy50aHJlc2hvbGRDdHJsID0gbmV3IFRocmVzaG9sZEN0cmwoY29udGFpbmVyMiwgdGhpcyk7XHJcblxyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNsaWRlciA9IG5ldyBTbGlkZXIoY29udGFpbmVyMiwge1xyXG4gICAgICAgICBpZDogJ0hpZ2hsaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnSGlnaGxpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5oaWdobGlnaHQgPSB0aGlzLmhpZ2hsaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5oaWdobGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5saWdodExpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihjb250YWluZXIyLCB7XHJcbiAgICAgICAgIGlkOiAnTGlnaHRMaWdodCcsXHJcbiAgICAgICAgIGxhYmVsOiAnTGlnaHQgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5saWdodExpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saWdodExpZ2h0ID0gdGhpcy5saWdodExpZ2h0U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5taWRMaWdodFNsaWRlciA9IG5ldyBTbGlkZXIoY29udGFpbmVyMiwge1xyXG4gICAgICAgICBpZDogJ01pZExpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdNaWQgTGlnaHQnLFxyXG4gICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJlci5taWRMaWdodCAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubWlkTGlnaHQgPSB0aGlzLm1pZExpZ2h0U2xpZGVyLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGdldFRleHQ6ICgpID0+IHsgcmV0dXJuICgxMDAgKiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZGFya0xpZ2h0U2xpZGVyID0gbmV3IFNsaWRlcihjb250YWluZXIyLCB7XHJcbiAgICAgICAgIGlkOiAnRGFya0xpZ2h0JyxcclxuICAgICAgICAgbGFiZWw6ICdEYXJrIExpZ2h0JyxcclxuICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0ICogMTAwLFxyXG4gICAgICAgICBjb2xvcnM6IFtodG1sQ29sb3IuYmxhY2ssIGh0bWxDb2xvci53aGl0ZV0sXHJcbiAgICAgICAgIG9uaW5wdXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQgPSB0aGlzLmRhcmtMaWdodFNsaWRlci52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBnZXRUZXh0OiAoKSA9PiB7IHJldHVybiAoMTAwICogdGhpcy5yZW5kZXJlci5kYXJrTGlnaHQpLnRvRml4ZWQoMCkgKyBcIiVcIiB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zaGFkb3dTbGlkZXIgPSBuZXcgU2xpZGVyKGNvbnRhaW5lcjIsIHtcclxuICAgICAgICAgaWQ6ICdTaGFkb3cnLFxyXG4gICAgICAgICBsYWJlbDogJ1NoYWRvdycsXHJcbiAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlcmVyLnNoYWRvdyAqIDEwMCxcclxuICAgICAgICAgY29sb3JzOiBbaHRtbENvbG9yLmJsYWNrLCBodG1sQ29sb3Iud2hpdGVdLFxyXG4gICAgICAgICBvbmlucHV0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93ID0gdGhpcy5zaGFkb3dTbGlkZXIudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2xpZGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgZ2V0VGV4dDogKCkgPT4geyByZXR1cm4gKDEwMCAqIHRoaXMucmVuZGVyZXIuc2hhZG93KS50b0ZpeGVkKDApICsgXCIlXCIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMubG9hZE1vZGVsKHRoaXMucXVlcnkpXHJcbiAgICAgICAgIC50aGVuKCh0T2JqOiBUcmlhbmdsZU9iaikgPT4ge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gZXJyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGRpdjtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBsb2FkTW9kZWwocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuXHJcbiAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVzcGhlcmUnKSB7XHJcbiAgICAgICAgIGxldCByYWRpdXMgPSAwLjc1O1xyXG4gICAgICAgICBsZXQgY2VudGVyID0gbmV3IGdsVmVjMyhbMCwgMCwgMF0pO1xyXG4gICAgICAgICBsZXQgdE9iaiA9IG5ldyBUcmlhbmdsZVNwaGVyZSgxMDAsIHJhZGl1cywgY2VudGVyKVxyXG4gICAgICAgICB0T2JqLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0T2JqKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChxdWVyeSAmJiBxdWVyeS50b0xvd2VyQ2FzZSgpID09PSAndHJpYW5nbGVjdWJlJykge1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IDAuODtcclxuICAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBnbFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVDdWJlKHNpemUsIGNlbnRlcik7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0TW9kZWwodE9iaik7XHJcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodE9iaik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAocXVlcnkgJiYgcXVlcnkudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLm9iaicpKSB7XHJcblxyXG4gICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFRyaWFuZ2xlT2JqPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtlciA9IG5ldyBMb2FkZXJXb3JrZXIoKTtcclxuICAgICAgICAgICAgbGV0IHRTdGFydCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSAoeyBkYXRhIH06IHsgZGF0YTogYW55IH0pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgZmxhc2hpbmcgbWVzc2FnZXMgZm9yIHRoaW5ncyB0aGF0IGhhcHBlbiB2ZXJ5IHF1aWNrbHkuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdFN0YXJ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuaW5uZXJUZXh0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgdE9iaiA9IFRyaWFuZ2xlT2JqLmltcG9ydChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRNb2RlbCh0T2JqKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vcmllbnQodE9iaiwgcXVlcnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHRPYmopO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IGxvY2F0aW9uLnBhdGhuYW1lICsgcXVlcnk7XHJcbiAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShmaWxlKTtcclxuXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gVE9ETyBtdWx0aSBsaW5lIGVycm9yIG1lc3NhZ2VzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdVbmtub3duIE1vZGVsOicgKyBxdWVyeSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIG9yaWVudCh0T2JqOiBUcmlhbmdsZU9iaiwgcXVlcnk6IHN0cmluZykge1xyXG5cclxuICAgICAgbGV0IGNlbnRlciA9IHRPYmouY2VudGVyO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFstY2VudGVyLngsIC1jZW50ZXIueSwgLWNlbnRlci56XSkpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNjYWxlKDIuMCAvIE1hdGguc3FydCh0T2JqLndpZHRoICogdE9iai53aWR0aCArIHRPYmouaGVpZ2h0ICogdE9iai5oZWlnaHQgKyB0T2JqLmRlcHRoICogdE9iai5kZXB0aCkpO1xyXG5cclxuICAgICAgLy8gb3JpZW50IGVhY2ggZmlsZSBzbyB0aGF0IGl0IGlzIGZhY2luZyBmb3J3YXJkXHJcbiAgICAgIHN3aXRjaCAocXVlcnkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICBjYXNlICdza3VsbC5vYmonOlxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFgodG9SYWQoOTApKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKDE4MCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgJ3dvbGYub2JqJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKC0xNDApKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RYKHRvUmFkKDUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdzaGVlcGhlYWQub2JqJzpcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKHRvUmFkKC0xNjApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlICdwb3NlMS5vYmonOlxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WSh0b1JhZCgxODApKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB1cGRhdGVTbGlkZXJzKCkge1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuaGlnaGxpZ2h0O1xyXG4gICAgICB0aGlzLmxpZ2h0TGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLmxpZ2h0TGlnaHQ7XHJcbiAgICAgIHRoaXMubWlkTGlnaHRTbGlkZXIudmFsdWUgPSAxMDAgKiB0aGlzLnJlbmRlcmVyLm1pZExpZ2h0O1xyXG4gICAgICB0aGlzLmRhcmtMaWdodFNsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuZGFya0xpZ2h0O1xyXG4gICAgICB0aGlzLnNoYWRvd1NsaWRlci52YWx1ZSA9IDEwMCAqIHRoaXMucmVuZGVyZXIuc2hhZG93O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHRvZ2dsZU1vZGUoKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTW9kZSkge1xyXG4gICAgICAgICBjYXNlIFBvaW50ZXJNb2RlLlZpZXc6XHJcbiAgICAgICAgICAgIHRoaXMubW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnTGlnaHQnO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJNb2RlID0gUG9pbnRlck1vZGUuTGlnaHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgY2FzZSBQb2ludGVyTW9kZS5MaWdodDpcclxuICAgICAgICAgICAgdGhpcy5tb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdWaWV3JztcclxuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW9kZSA9IFBvaW50ZXJNb2RlLlZpZXc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Eb3duKHBvczogZ2xWZWMyKSB7XHJcblxyXG4gICAgICB0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCA9IChwb3MueCA8IDAuMSAqIHRoaXMuY2FudmFzLndpZHRoKSA/IHRydWUgOiBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdmUocG9zOiBnbFZlYzIpIHtcclxuICAgICAgaWYgKHRoaXMuaGFuZGxlci5tb3VzZURvd24pIHtcclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICAgICBsZXQgb2xkID0gdGhpcy5oYW5kbGVyLmxhc3RQb3M7XHJcbiAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlID09PSBQb2ludGVyTW9kZS5WaWV3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJvdFooKG9sZC55IC0gcG9zLnkpICogMC4wMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucm90WCgocG9zLnkgLSBvbGQueSkgKiAwLjAxKTtcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yb3RZKChwb3MueCAtIG9sZC54KSAqIDAuMDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodGhpcy5wb2ludGVyTW9kZSA9PT0gUG9pbnRlck1vZGUuTGlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJNb2RlU3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICBsZXQgc1BvcyA9IFNwaGVyaWNhbENvb3JkLmZyb21YWVoodGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24udmFsdWVzKTtcclxuICAgICAgICAgICAgICAgdGhpcy5wb3MucmFkaXVzIC09ICh5IC0gb2xkLnkpICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgIHRoaXMucG9zLnJhZGl1cyA9IGNsYW1wKHRoaXMucG9zLnJhZGl1cywgVW5pZm9ybXMudUJhbGxSYWRpdXMgKyAwLjUsIDUpO1xyXG4gICAgICAgICAgICAgICBVbmlmb3Jtcy51TGlnaHRQb3MudmFsdWVzID0gdGhpcy5wb3MudG9YWVooKTtcclxuICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgbGV0IG1hdFkgPSBnbE1hdDQuZnJvbVJvdFkodG9SYWQocG9zLnggLSBvbGQueCkpO1xyXG4gICAgICAgICAgICAgICBsZXQgbWF0WCA9IGdsTWF0NC5mcm9tUm90WCh0b1JhZChwb3MueSAtIG9sZC55KSk7XHJcbiAgICAgICAgICAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWM0KFtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueCxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueixcclxuICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgdmVjID0gbWF0WC5tdWx0Vih2ZWMpO1xyXG4gICAgICAgICAgICAgICB2ZWMgPSBtYXRZLm11bHRWKHZlYyk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudUxpZ2h0RGlyZWN0aW9uLnggPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnVMaWdodERpcmVjdGlvbi55ID0gdmVjLnZhbHVlc1sxXTtcclxuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci51TGlnaHREaXJlY3Rpb24ueiA9IHZlYy52YWx1ZXNbMl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFByb2Nlc3NlcyBhIGNsaWNrL3RvdWNoIGV2ZW50IGF0IHRoZSBkZXNpZ25hdGVkIGNvb3JkaW5hdGVzLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHggVGhlIHggY29vcmRpbmF0ZS5cclxuICAgICogQHBhcmFtIHkgVGhlIHkgY29vcmRpbmF0ZS5cclxuICAgICogQHJldHVybnMgdHJ1ZSBpZiBhIGhpdCBvbiBvbmUgb2YgdGhlIHZpZXdzIG9jY3Vycy5cclxuICAgICovXHJcbiAgIHByaXZhdGUgb25DbGljayhwb3M6IGdsVmVjMik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgbGV0IHNpemUgPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuXHJcbiAgICAgIC8vIFRPRE8gZ2V0IHRoZSBzaXplIG9mIHRoZSBhcmVhIGZyb20gdGhlIHJlbmRlcmVyXHJcbiAgICAgIGlmIChwb3MueCA8IHNpemUgLyA1ICYmIHBvcy55IDwgc2l6ZSAvIDUpIHtcclxuICAgICAgICAgdGhpcy50b2dnbGVNb2RlKCk7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jbGljayhwb3MueCAvIHNpemUsIDEgLSAocG9zLnkgLyBzaXplKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25EYmxDbGljayhwb3M6IGdsVmVjMikge1xyXG5cclxuICAgICAgdGhpcy50b2dnbGVNb2RlKCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0aWNrKCkge1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoKTtcclxuICAgICAgICAgdGhpcy50aHJlc2hvbGRDdHJsLmRyYXcoKTtcclxuICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy50aWNrKCkpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSAnLi9nbE1hdCc7XHJcbmltcG9ydCB7IGdsVmVjMywgZ2xWZWMyIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB2ZXJ0ZXhTb3VyY2UgZnJvbSAnLi9zaGFkZXJzL1BsYW5lc1ZlcnRleC5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50U291cmNlIGZyb20gJy4vc2hhZGVycy9QbGFuZXNGcmFnbWVudC5nbHNsJztcclxuaW1wb3J0IHsgZ2wsIGNsYW1wLCBtaXgsIHRvUmFkLCB0b0RlZywgaXNNb2JpbGUgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZVNwaGVyZSB9IGZyb20gJy4vVHJpYW5nbGVTcGhlcmUnO1xyXG5pbXBvcnQgeyBnbFVuaWZvcm0gfSBmcm9tICcuL2dsVW5pZm9ybSc7XHJcbmltcG9ydCB7IGdsQ29tcGlsZXIgfSBmcm9tICcuL2dsQ29tcGlsZXInO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBnbE9iamVjdCB9IGZyb20gJy4vZ2xPYmplY3QnO1xyXG5pbXBvcnQgeyBUcmlhbmdsZUFycm93IH0gZnJvbSAnLi9UcmlhbmdsZUFycm93JztcclxuaW1wb3J0IHsgZ2xDb2xvciB9IGZyb20gJy4vZ2xDb2xvcic7XHJcbmltcG9ydCB7IFRleHR1cmVSZW5kZXJlciB9IGZyb20gJy4vVGV4dHVyZVJlbmRlcmVyJztcclxuaW1wb3J0IHsgZ2xUZXh0dXJlRnJhbWVCdWZmZXIsIEZyYW1lQnVmZmVyU3R5bGUgfSBmcm9tICcuL2dsVGV4dHVyZUZyYW1lQnVmZmVyJztcclxuaW1wb3J0IHsgdGV4dHVyZVNpemUgfSBmcm9tICcuL1RocmVzaG9sZEN0cmwnO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tICcuL2h0bWxDb2xvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFsbEltYWdlRGF0YSB7XHJcbiAgIHB1YmxpYyBpbWFnZTogSW1hZ2VEYXRhO1xyXG4gICBwdWJsaWMgYmFsbENlbnRlcjogZ2xWZWMyO1xyXG4gICBwdWJsaWMgYmFsbFJhZGl1czogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCQUxMX1JBRElVUyA9IDAuNTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IHJlbmRlcnMgdHJpYW5nbGVzIGFuZCBhIGxpZ2h0IHNvdXJjZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYW5lc1JlbmRlcmVyIHtcclxuXHJcbiAgIHByaXZhdGUgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG4gICBwcml2YXRlIHZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgIHByaXZhdGUgc2hhZG93VmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgcHJpdmF0ZSBwcm9qZWN0aW9uID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgcHJpdmF0ZSB1Q29sb3IgPSBuZXcgZ2xDb2xvcihbMSwgMSwgMV0pO1xyXG4gICBwcml2YXRlIHVUaHJlc2hvbGQxID0gNDA7XHJcbiAgIHByaXZhdGUgdVRocmVzaG9sZDIgPSA3MDtcclxuXHJcbiAgIHByaXZhdGUgdUhpZ2hsaWdodDogbnVtYmVyID0gMS4wO1xyXG4gICBwcml2YXRlIHVMaWdodExpZ2h0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdU1pZExpZ2h0OiBudW1iZXI7XHJcbiAgIHByaXZhdGUgdURhcmtMaWdodDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHVTaGFkb3c6IG51bWJlciA9IDAuMjtcclxuXHJcbiAgIC8vIHNpemUgb2YgdGhlIHNtYWxsZXIgdmlld1xyXG4gICBwcml2YXRlIHJlYWRvbmx5IG1pbmlTaXplID0gMC4yO1xyXG5cclxuICAgcHJpdmF0ZSB1VXNlVGhyZXNob2xkcyA9IGZhbHNlO1xyXG5cclxuICAgcHJpdmF0ZSBiYWxsOiBnbE9iamVjdDtcclxuICAgcHJpdmF0ZSBhcnJvdzogZ2xPYmplY3Q7XHJcbiAgIHByaXZhdGUgb2JqOiBnbE9iamVjdDtcclxuXHJcbiAgIHByaXZhdGUgc2hhZG93RnJhbWVCdWZmZXI6IGdsVGV4dHVyZUZyYW1lQnVmZmVyO1xyXG4gICBwcml2YXRlIHRleHR1cmVGcmFtZUJ1ZmZlcjogZ2xUZXh0dXJlRnJhbWVCdWZmZXI7XHJcblxyXG4gICBwdWJsaWMgdUxpZ2h0RGlyZWN0aW9uID0gbmV3IGdsVmVjMyhbMS4wLCAtMS4wLCAxLjVdKTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgIHRoaXMuY29tcHV0ZUNvbG9ycygpO1xyXG5cclxuICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgICAgdGhpcy5wcm9ncmFtID0gZ2xDb21waWxlci5jb21waWxlKHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpO1xyXG5cclxuICAgICAgbGV0IHRCYWxsID0gbmV3IFRyaWFuZ2xlU3BoZXJlKDEwMCwgQkFMTF9SQURJVVMsIG5ldyBnbFZlYzMoWzAsIDAsIDBdKSk7XHJcbiAgICAgIHRCYWxsLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuU21vb3RoKTtcclxuICAgICAgdGhpcy5iYWxsID0gbmV3IGdsT2JqZWN0KHRCYWxsLCB0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgbGV0IHRBcnJvdyA9IG5ldyBUcmlhbmdsZUFycm93KCk7XHJcbiAgICAgIHRoaXMuYXJyb3cgPSBuZXcgZ2xPYmplY3QodEFycm93LCB0aGlzLnByb2dyYW0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMub2JqLnJvdFgoYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RZKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5vYmoucm90WShhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFooYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm9iai5yb3RaKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm9iai5zY2FsZShzY2FsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLm9iai50cmFuc2xhdGUob2Zmc2V0KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoaWdobGlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudUhpZ2hsaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IGhpZ2hsaWdodCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1pbih0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IE1hdGgubWluKHRoaXMudU1pZExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1pbih0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBsaWdodExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVMaWdodExpZ2h0O1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgbGlnaHRMaWdodCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gTWF0aC5taW4odGhpcy51TWlkTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IE1hdGgubWluKHRoaXMudURhcmtMaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51U2hhZG93ID0gTWF0aC5taW4odGhpcy51U2hhZG93LCB2YWwpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IG1pZExpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVNaWRMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IG1pZExpZ2h0KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudUhpZ2hsaWdodCA9IE1hdGgubWF4KHRoaXMudUhpZ2hsaWdodCwgdmFsKTtcclxuICAgICAgdGhpcy51TGlnaHRMaWdodCA9IE1hdGgubWF4KHRoaXMudUxpZ2h0TGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gdmFsO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1pbih0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkYXJrTGlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudURhcmtMaWdodDtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IGRhcmtMaWdodCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1heCh0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IE1hdGgubWF4KHRoaXMudU1pZExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSB2YWw7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IE1hdGgubWluKHRoaXMudVNoYWRvdywgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBzaGFkb3coKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudVNoYWRvdztcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHNoYWRvdyh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVIaWdobGlnaHQgPSBNYXRoLm1heCh0aGlzLnVIaWdobGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudUxpZ2h0TGlnaHQgPSBNYXRoLm1heCh0aGlzLnVMaWdodExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVNaWRMaWdodCA9IE1hdGgubWF4KHRoaXMudU1pZExpZ2h0LCB2YWwpO1xyXG4gICAgICB0aGlzLnVEYXJrTGlnaHQgPSBNYXRoLm1heCh0aGlzLnVEYXJrTGlnaHQsIHZhbCk7XHJcbiAgICAgIHRoaXMudVNoYWRvdyA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQxKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQxO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gTWF0aC5tYXgodGhpcy51VGhyZXNob2xkMiwgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB0aHJlc2hvbGQyKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnVUaHJlc2hvbGQyO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgdGhyZXNob2xkMih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQyID0gdmFsO1xyXG4gICAgICB0aGlzLnVUaHJlc2hvbGQxID0gTWF0aC5taW4odGhpcy51VGhyZXNob2xkMSwgdmFsKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb2xvckF0KGRlZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgZGVnID0gY2xhbXAoZGVnLCAwLCA5MCk7XHJcbiAgICAgIHJldHVybiBtaXgodGhpcy51U2hhZG93LCB0aGlzLnVIaWdobGlnaHQgLSAwLjEsIE1hdGguY29zKHRvUmFkKGRlZykpKTtcclxuICAgfVxyXG5cclxuICAgLypcclxuICAgcHJpdmF0ZSB0aHJlc2hvbGRBdChjb2xvcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgY29sb3IgPSBjbGFtcChjb2xvciwgdGhpcy5hbWJpZW50SW50ZW5zaXR5LCB0aGlzLmFtYmllbnRJbnRlbnNpdHkgKyB0aGlzLmxpZ2h0SW50ZW5zaXR5KTtcclxuICAgICAgcmV0dXJuIHRvRGVnKE1hdGguYWNvcyhjb2xvciAtIHRoaXMuYW1iaWVudEludGVuc2l0eSkgLyB0aGlzLmxpZ2h0SW50ZW5zaXR5KTtcclxuICAgfVxyXG4qL1xyXG5cclxuICAgcHJpdmF0ZSBjb21wdXRlQ29sb3JzKCkge1xyXG4gICAgICB0aGlzLnVMaWdodExpZ2h0ID0gdGhpcy5jb2xvckF0KDAuNSAqIHRoaXMudGhyZXNob2xkMSk7XHJcbiAgICAgIHRoaXMudU1pZExpZ2h0ID0gdGhpcy5jb2xvckF0KG1peCh0aGlzLnRocmVzaG9sZDEsIHRoaXMudGhyZXNob2xkMiwgMC41KSk7XHJcbiAgICAgIHRoaXMudURhcmtMaWdodCA9IHRoaXMuY29sb3JBdCgodGhpcy50aHJlc2hvbGQyICsgOTApIC8gMik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXRNb2RlbCh0T2JqOiBUcmlhbmdsZU9iaikge1xyXG4gICAgICB0aGlzLm9iaiA9IG5ldyBnbE9iamVjdCh0T2JqLCB0aGlzLnByb2dyYW0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG5cclxuICAgICAgLy90aGlzLnJlbmRlckJhbGwoKTtcclxuICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5yZW5kZXJUb1NoYWRvd01hcCgpO1xyXG4gICAgICB0aGlzLnJlbmRlclRvU2NyZWVuKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgc2V0U3RkVW5pZm9ybXMoKTogZ2xVbmlmb3JtIHtcclxuICAgICAgbGV0IHVuaSA9IG5ldyBnbFVuaWZvcm0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgdW5pLnNldCgndmlldycsIHRoaXMudmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3NoYWRvd1ZpZXcnLCB0aGlzLnNoYWRvd1ZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCdwcm9qZWN0aW9uJywgdGhpcy5wcm9qZWN0aW9uLnRyYW5zcG9zZSgpKTtcclxuICAgICAgdW5pLnNldCgndVVzZVRocmVzaG9sZHMnLCB0aGlzLnVVc2VUaHJlc2hvbGRzID8gMSA6IDAsIHRydWUpO1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCB0aGlzLnVMaWdodERpcmVjdGlvbik7XHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDEpO1xyXG5cclxuICAgICAgdW5pLnNldCgndVRocmVzaG9sZDEnLCAxIC0gTWF0aC5zaW4odG9SYWQodGhpcy50aHJlc2hvbGQxICsgOTApKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VUaHJlc2hvbGQyJywgMSAtIE1hdGguc2luKHRvUmFkKHRoaXMudGhyZXNob2xkMiArIDkwKSkpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUxpZ2h0SW50ZW5zaXR5JywgdGhpcy51SGlnaGxpZ2h0IC0gdGhpcy51U2hhZG93IC0gMC4xKTtcclxuICAgICAgdW5pLnNldCgndUFtYmllbnRJbnRlbnNpdHknLCB0aGlzLnVTaGFkb3cpO1xyXG4gICAgICB1bmkuc2V0KCd1SGlnaGxpZ2h0JywgdGhpcy51SGlnaGxpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndUxpZ2h0TGlnaHQnLCB0aGlzLnVMaWdodExpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndU1pZExpZ2h0JywgdGhpcy51TWlkTGlnaHQpO1xyXG4gICAgICB1bmkuc2V0KCd1RGFya0xpZ2h0JywgdGhpcy51RGFya0xpZ2h0KTtcclxuICAgICAgdW5pLnNldCgndVNoYWRvdycsIHRoaXMudVNoYWRvdyk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1Q29sb3InLCB0aGlzLnVDb2xvcik7XHJcblxyXG4gICAgICByZXR1cm4gdW5pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0QmFsbEltYWdlKCk6IEJhbGxJbWFnZURhdGEge1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnRleHR1cmVGcmFtZUJ1ZmZlcikge1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVGcmFtZUJ1ZmZlciA9IG5ldyBnbFRleHR1cmVGcmFtZUJ1ZmZlcih0ZXh0dXJlU2l6ZSwgdGV4dHVyZVNpemUsIEZyYW1lQnVmZmVyU3R5bGUuRGVwdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnbC52aWV3cG9ydCgwLCAwLCB0ZXh0dXJlU2l6ZSwgdGV4dHVyZVNpemUpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIuY29sb3JUZXh0dXJlKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnRleHR1cmVGcmFtZUJ1ZmZlci5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlRnJhbWVCdWZmZXIuY29sb3JUZXh0dXJlLCAwKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcblxyXG5cclxuICAgICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSg8RWxlbWVudD5nbC5jYW52YXMpO1xyXG4gICAgICBsZXQgY29sb3IgPSBodG1sQ29sb3IuZnJvbUNzcyhzdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLnRvR2xDb2xvcigpO1xyXG4gICAgICBnbC5jbGVhckNvbG9yKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIsIDEpO1xyXG4gICAgICAvL2dsLmNsZWFyQ29sb3IoMC41LCAwLjUsIDAuNiwgMSk7XHJcbiAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICBsZXQgdmlldyA9IG5ldyBnbE1hdDQoKTtcclxuICAgICAgdmlldy50cmFuc2xhdGUobmV3IGdsVmVjMyhbLTAuNDUsIC0wLjQ1LCAwXSkpO1xyXG4gICAgICB1bmkuc2V0KCd2aWV3Jywgdmlldy50cmFuc3Bvc2UoKSk7XHJcblxyXG4gICAgICAvLyBhbHdheXMgcmVuZGVyIHdpdGggYmFuZHNcclxuICAgICAgdW5pLnNldGkoJ3VVc2VUaHJlc2hvbGRzJywgMSk7XHJcblxyXG4gICAgICAvLyBzaG9vdCB0aGUgbGlnaHQgc3RyYWlnaHQgZG93blxyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgZ2xWZWMzKFswLCAtMSwgMF0pKTtcclxuXHJcbiAgICAgIC8vIGRvbid0IGNhc3Qgc2hhZG93c1xyXG4gICAgICB1bmkuc2V0aSgndVVzZVNoYWRvd3MnLCAwKTtcclxuXHJcbiAgICAgIHRoaXMuYmFsbC5kcmF3KCk7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBCYWxsSW1hZ2VEYXRhKCk7XHJcbiAgICAgIGRhdGEuYmFsbFJhZGl1cyA9IEJBTExfUkFESVVTO1xyXG4gICAgICBsZXQgYyA9IDAuMDUgKyBCQUxMX1JBRElVUztcclxuICAgICAgZGF0YS5iYWxsQ2VudGVyID0gbmV3IGdsVmVjMihbYywgY10pO1xyXG5cclxuICAgICAgLy8gbm9ybWFsaXplIHZhbHVlIHNpbmNlIG91ciBkcmF3aW5nIHNwYWNlIGlzIC0xIHRvIDFcclxuICAgICAgZGF0YS5iYWxsUmFkaXVzIC89IDI7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlci54IC89IDI7XHJcbiAgICAgIGRhdGEuYmFsbENlbnRlci55IC89IDI7XHJcblxyXG4gICAgICAvLyBkcmF3IHRoZSBhcnJvd1xyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgZ2xWZWMzKFsxLCAtMC41LCAwLjVdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgMCwgdHJ1ZSk7XHJcblxyXG4gICAgICAvLyBmaXJzdCByZXNldCB0aGluZ3Mgc28gdGhhdCB3ZSdyZSBsb29raW5nIGRvd24gdGhlIHotYXhpc1xyXG4gICAgICB0aGlzLmFycm93LmNsZWFyVHJhbnNmb3JtcygpO1xyXG4gICAgICB0aGlzLmFycm93LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFswLjAsIDEuMCwgMC4wXSkpO1xyXG5cclxuICAgICAgdW5pLnNldCgndUNvbG9yJywgbmV3IGdsQ29sb3IoWzEuMCwgMS4wLCAwLjVdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VBbWJpZW50SW50ZW5zaXR5JywgMC40KTtcclxuICAgICAgdGhpcy5hcnJvdy5kcmF3KCk7XHJcblxyXG5cclxuICAgICAgbGV0IHBpeGVscyA9IG5ldyBVaW50OEFycmF5KHRleHR1cmVTaXplICogdGV4dHVyZVNpemUgKiA0KTtcclxuICAgICAgZ2wucmVhZFBpeGVscygwLCAwLCB0ZXh0dXJlU2l6ZSwgdGV4dHVyZVNpemUsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHBpeGVscyk7XHJcblxyXG4gICAgICBkYXRhLmltYWdlID0gbmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkocGl4ZWxzKSwgdGV4dHVyZVNpemUsIHRleHR1cmVTaXplKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHJlbmRlclRvU2hhZG93TWFwKCk6IHZvaWQge1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyKSB7XHJcbiAgICAgICAgIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIgPSBuZXcgZ2xUZXh0dXJlRnJhbWVCdWZmZXIoZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0LCBGcmFtZUJ1ZmZlclN0eWxlLkRlcHRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmZyYW1lQnVmZmVyKTtcclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgIGdsLmNsZWFyKGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgIGxldCBjZW50ZXIgPSBuZXcgZ2xWZWMzKFswLCAwLCAwXSk7XHJcbiAgICAgIGxldCB1cCA9IG5ldyBnbFZlYzMoWzAsIDEsIDBdKTtcclxuICAgICAgbGV0IG1hdCA9IGdsTWF0NC5tYWtlTG9va0F0KHRoaXMudUxpZ2h0RGlyZWN0aW9uLCBjZW50ZXIsIHVwKTtcclxuICAgICAgbWF0LnNldCgwLCAzLCAwKTtcclxuICAgICAgbWF0LnNldCgxLCAzLCAwKTtcclxuICAgICAgbWF0LnNldCgyLCAzLCAwKTtcclxuICAgICAgdGhpcy5zaGFkb3dWaWV3ID0gbWF0O1xyXG5cclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuXHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgdmlldyBtYXRyaXggc28gdGhhdCBvdXIgdmlldyBpcyBmcm9tIHRoZSBsaWdodFxyXG4gICAgICB1bmkuc2V0KCd2aWV3JywgdGhpcy5zaGFkb3dWaWV3LnRyYW5zcG9zZSgpKTtcclxuXHJcbiAgICAgIC8vIGRvbid0IHRyeSB0byB1c2UgdGhlIHNoYWRvdyB0ZXh0dXJlIHdoaWxlIHdlJ3JlIGNyZWF0aW5nIGl0XHJcbiAgICAgIHVuaS5zZXRpKCd1VXNlU2hhZG93cycsIDApO1xyXG5cclxuICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcmVuZGVyVG9TY3JlZW4oKTogdm9pZCB7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAvLyBkaXNwbGF5IHRoZSBkZXB0aCBidWZmZXIgZm9yIHRlc3RpbmcgcHVycG9zZXNcclxuICAgICAgbGV0IHRyID0gbmV3IFRleHR1cmVSZW5kZXJlcigpO1xyXG4gICAgICB0ci5yZW5kZXIodGhpcy5zaGFkb3dNYXAuZGVwdGhUZXh0dXJlKTtcclxuICAgICAgKi9cclxuXHJcbiAgICAgIC8qXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgLy8gZGlzcGxheSB0aGUgZGVwdGggYnVmZmVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAgICAgIGxldCB0ciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIoKTtcclxuICAgICAgdHIucmVuZGVyKHRoaXMudGV4dHVyZUZyYW1lQnVmZmVyLmNvbG9yVGV4dHVyZSk7XHJcblxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICAqL1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5kZXB0aFRleHR1cmUpXHJcblxyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUIHwgZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAvLyByZXNldCB0aGUgdmlldyBtYXRyaXhcclxuICAgICAgdGhpcy52aWV3ID0gbmV3IGdsTWF0NCgpO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgbWFpbiBvYmplY3RcclxuICAgICAgbGV0IHVuaSA9IHRoaXMuc2V0U3RkVW5pZm9ybXMoKTtcclxuICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgb2JqZWN0IGluIHRoZSB1cHBlciByaWdodCBhdCBhIHJlZHVjZWQgc2l6ZSBhbmQgb3Bwb3NpdGUgYmFuZGluZ1xyXG4gICAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICAgICAgdGhpcy52aWV3LnNjYWxlKHRoaXMubWluaVNpemUpO1xyXG4gICAgICB0aGlzLnZpZXcudHJhbnNsYXRlKG5ldyBnbFZlYzMoWzEgLSB0aGlzLm1pbmlTaXplLCAxIC0gdGhpcy5taW5pU2l6ZSwgMF0pKTtcclxuICAgICAgdW5pLnNldCgndmlldycsIHRoaXMudmlldy50cmFuc3Bvc2UoKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgdGhpcy51VXNlVGhyZXNob2xkcyA/IDAgOiAxLCB0cnVlKTtcclxuICAgICAgdGhpcy5vYmouZHJhdygpO1xyXG5cclxuICAgICAgLy8gZHJhdyB0aGUgYmFsbFxyXG4gICAgICB0aGlzLmRyYXdCYWxsKCk7XHJcblxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBkcmF3QmFsbCgpIHtcclxuXHJcbiAgICAgIGxldCB1bmkgPSB0aGlzLnNldFN0ZFVuaWZvcm1zKCk7XHJcblxyXG4gICAgICAvLyBzdG9wIHVzaW5nIHRoZSBzaGFkb3dtYXBcclxuICAgICAgdW5pLnNldGkoJ3VVc2VTaGFkb3dzJywgMCk7XHJcblxyXG4gICAgICB0aGlzLnZpZXcgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgICAgIHRoaXMudmlldy5zY2FsZSh0aGlzLm1pbmlTaXplKTtcclxuICAgICAgdGhpcy52aWV3LnRyYW5zbGF0ZShuZXcgZ2xWZWMzKFstKDEgLSB0aGlzLm1pbmlTaXplKSwgMSAtIHRoaXMubWluaVNpemUsIDBdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3ZpZXcnLCB0aGlzLnZpZXcudHJhbnNwb3NlKCkpO1xyXG4gICAgICB1bmkuc2V0KCd1VXNlVGhyZXNob2xkcycsIHRoaXMudVVzZVRocmVzaG9sZHMgPyAxIDogMCwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuYmFsbC5kcmF3KCk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1TGlnaHREaXJlY3Rpb24nLCBuZXcgZ2xWZWMzKFsxLCAtMC41LCAwLjVdKSk7XHJcbiAgICAgIHVuaS5zZXQoJ3VVc2VUaHJlc2hvbGRzJywgMCwgdHJ1ZSk7XHJcblxyXG4gICAgICAvLyBiYWNrIG91dCBhbmdsZXMgYXMgaWYgbG9va2luZyBkb3duIHRoZSB6LWF4aXNcclxuICAgICAgbGV0IHggPSB0aGlzLnVMaWdodERpcmVjdGlvbi54O1xyXG4gICAgICBsZXQgeSA9IHRoaXMudUxpZ2h0RGlyZWN0aW9uLnk7XHJcbiAgICAgIGxldCB6ID0gdGhpcy51TGlnaHREaXJlY3Rpb24uejtcclxuXHJcbiAgICAgIC8vIHN0YXJ0IGJ5IGxvb2tpbmcgZG93biBmcm9tIHRoZSBaIGRpcmVjdGlvblxyXG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XHJcbiAgICAgIGxldCBlbGV2YXRpb25BbmdsZSA9IE1hdGguYWNvcyh6IC8gcmFkaXVzKTtcclxuICAgICAgbGV0IHJvdGF0aW9uQW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgcmVzZXQgdGhpbmdzIHNvIHRoYXQgd2UncmUgbG9va2luZyBkb3duIHRoZSB6LWF4aXNcclxuICAgICAgdGhpcy5hcnJvdy5jbGVhclRyYW5zZm9ybXMoKTtcclxuICAgICAgdGhpcy5hcnJvdy50cmFuc2xhdGUobmV3IGdsVmVjMyhbMC4wLCAwLjU1LCAwLjBdKSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90WCh0b1JhZCg5MCkpO1xyXG5cclxuICAgICAgLy8gcm90YXRlIHRvIG1hdGNoIHRoZSBsaWdodCBzb3VyY2VcclxuICAgICAgdGhpcy5hcnJvdy5yb3RZKC1lbGV2YXRpb25BbmdsZSk7XHJcbiAgICAgIHRoaXMuYXJyb3cucm90Wigtcm90YXRpb25BbmdsZSk7XHJcblxyXG4gICAgICB1bmkuc2V0KCd1Q29sb3InLCBuZXcgZ2xDb2xvcihbMS4wLCAwLjksIDAuN10pKTtcclxuICAgICAgdW5pLnNldCgndUFtYmllbnRJbnRlbnNpdHknLCAwLjQpO1xyXG4gICAgICB0aGlzLmFycm93LmRyYXcoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFByb2Nlc3NlcyBhIGNsaWNrL3RvdWNoIGV2ZW50IGF0IHRoZSBkZXNpZ25hdGVkIGNvb3JkaW5hdGVzLiBJZiBhIGhpdFxyXG4gICAgKiBvY2N1cnMsIHRoZSBjbGlja2VkIG9uIHZpZXcgaXMgc3dhcHBlZCBmb3IgdGhlIHByaW1hcnkgdmlldyBhbmQgdHJ1ZVxyXG4gICAgKiBpcyByZXR1cm5lZC4gSWYgbm8gaGl0IG9jY3VycywgZmFsc2UgaXMgcmV0dXJuZWQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0geCBUaGUgeCBjb29yZGluYXRlIFswLTFdLlxyXG4gICAgKiBAcGFyYW0geSBUaGUgeSBjb29yZGluYXRlIFswLTFdLlxyXG4gICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgaGl0IG9uIG9uZSBvZiB0aGUgdmlld3Mgb2NjdXJzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsaWNrKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICBpZiAoeCA+ICgxIC0gdGhpcy5taW5pU2l6ZSkgJiYgeSA+ICgxIC0gdGhpcy5taW5pU2l6ZSkpIHtcclxuICAgICAgICAgdGhpcy51VXNlVGhyZXNob2xkcyA9ICF0aGlzLnVVc2VUaHJlc2hvbGRzO1xyXG4gICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG4gICAgICB0aGlzLm9iai5vcHRpbWl6ZShub3JtYWxUeXBlKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMyIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbnR5cGUgUG9pbnRlckV2ZW50Vm9pZEZ1bmN0aW9uID0gKHBvczogZ2xWZWMyKSA9PiB2b2lkO1xyXG50eXBlIFBvaW50ZXJFdmVudEJvb2xlYW5GdW5jdGlvbiA9IChwb3M6IGdsVmVjMikgPT4gYm9vbGVhbjtcclxuXHJcbmNvbnN0IERCTF9DTElDS19USU1FID0gMzAwOyAvLyBtc1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIG1hbmFnaW5nIHRvdWNoL21vdXNlIGV2ZW50cyBvdmVyIGEgaHRtbCBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9pbnRlckV2ZW50SGFuZGxlciB7XHJcblxyXG4gICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBwdWJsaWMgbW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICBwdWJsaWMgb25VcDogVm9pZEZ1bmN0aW9uO1xyXG4gICBwdWJsaWMgb25Eb3duOiBQb2ludGVyRXZlbnRWb2lkRnVuY3Rpb247XHJcbiAgIHB1YmxpYyBvbk1vdmU6IFBvaW50ZXJFdmVudFZvaWRGdW5jdGlvbjtcclxuICAgcHVibGljIG9uQ2xpY2s6IFBvaW50ZXJFdmVudEJvb2xlYW5GdW5jdGlvbjtcclxuICAgcHVibGljIG9uRGJsQ2xpY2s6IFBvaW50ZXJFdmVudFZvaWRGdW5jdGlvbjtcclxuXHJcbiAgIHB1YmxpYyBsYXN0UG9zOiBnbFZlYzI7XHJcbiAgIHByaXZhdGUgbGFzdFRvdWNoVGltZTogbnVtYmVyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICBlbGVtZW50Lm9udG91Y2hzdGFydCA9IChldmVudDogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFtldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSByZWN0LngsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QueV0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAodGltZSAtIHRoaXMubGFzdFRvdWNoVGltZSA8IERCTF9DTElDS19USU1FKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3VyRGJsQ2xpY2socG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5vdXJPbkRvd24ocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUb3VjaFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub250b3VjaG1vdmUgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgbGV0IHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFtldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSByZWN0LngsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QueV0pO1xyXG4gICAgICAgICB0aGlzLm91ck9uTW92ZShwb3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9udG91Y2hlbmQgPSAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgdGhpcy5vdXJPblVwKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgbGV0IHBvcyA9IG5ldyBnbFZlYzIoWyg8YW55PmV2ZW50KS5sYXllclgsICg8YW55PmV2ZW50KS5sYXllclldKTtcclxuICAgICAgICAgdGhpcy5vdXJPbkRvd24ocG9zKTtcclxuXHJcbiAgICAgICAgIC8vIGRpc2FibGUgc2VsZWN0aW9uIGJlY2F1c2UgZHJhZ2dpbmcgaXMgdXNlZCBmb3Igcm90YXRpbmcgdGhlIGNhbWVyYSBhbmQgbW92aW5nIG9iamVjdHNcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50Lm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIHRoaXMub3VyT25Nb3ZlKHBvcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQub25tb3VzZXVwID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIHRoaXMub3VyT25VcCgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZWxlbWVudC5vbm1vdXNlbGVhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5vbmRibGNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgIGxldCBwb3MgPSBuZXcgZ2xWZWMyKFsoPGFueT5ldmVudCkubGF5ZXJYLCAoPGFueT5ldmVudCkubGF5ZXJZXSk7XHJcbiAgICAgICAgIHRoaXMub3VyRGJsQ2xpY2socG9zKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG91ck9uRG93bihwb3M6IGdsVmVjMikge1xyXG4gICAgICBpZiAodGhpcy5vbkNsaWNrICYmIHRoaXMub25DbGljayhwb3MuY2xvbmUoKSkpIHtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMubGFzdFBvcyA9IHBvcy5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgaWYgKHRoaXMub25Eb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb3duKHBvcy5jbG9uZSgpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25VcCgpIHtcclxuXHJcbiAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vblVwKSB7XHJcbiAgICAgICAgIHRoaXMub25VcCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyT25Nb3ZlKHBvczogZ2xWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uTW92ZSkge1xyXG4gICAgICAgICB0aGlzLm9uTW92ZShwb3MuY2xvbmUoKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0UG9zID0gcG9zLmNsb25lKCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb3VyRGJsQ2xpY2socG9zOiBnbFZlYzIpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9uRGJsQ2xpY2spIHtcclxuICAgICAgICAgdGhpcy5vbkRibENsaWNrKHBvcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGxvZ2dpbmcgdGltaW5nIG1lc3NhZ2VzIGZvciBwcm9maWxlIGNvZGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlciB7XHJcbiAgIC8vIHRoZSBsYXN0IHRpbWUgc3RhbXBcclxuICAgcHJpdmF0ZSB0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpIHtcclxuICAgICAgcmV0dXJuIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudCk7XHJcbiAgIH1cclxuICAgLyoqXHJcbiAgICAqIFByaW50cyBhIG1lc3NhZ2UgdG8gY29uc29sZSBvZiB0aGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBsYXN0IG1hcmtcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gcHJpbnQgd2l0aCB0aGUgdGltZVxyXG4gICAgKi9cclxuICAgcHVibGljIGxvZyhtc2c6IHN0cmluZykge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cgKyAnICcgKyB0aGlzLmVsYXBzZWRNcy50b0ZpeGVkKDEpICsgJyBtcycpO1xyXG4gICAgICB0aGlzLm1hcmsoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFVwZGF0ZXMgdGhlIHRpbWVzdGFtcCB0byBub3dcclxuICAgICovXHJcbiAgIHB1YmxpYyBtYXJrKCkge1xyXG4gICAgICB0aGlzLnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgfVxyXG5cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyBDb2xvclJhbmdlIH0gZnJvbSBcIi4vQ29sb3JSYW5nZVwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3JXaXRoQWxwaGEgfSBmcm9tIFwiLi9odG1sQ29sb3JXaXRoQWxwaGFcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGRhdGEgcGFzc2VkIHRvIHRoZSBTbGlkZXIgY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNsaWRlclNldHVwIHtcclxuICAgaWQ6IHN0cmluZyxcclxuICAgbGFiZWw6IHN0cmluZyxcclxuICAgbWluOiBudW1iZXIsXHJcbiAgIG1heDogbnVtYmVyLFxyXG4gICB2YWx1ZTogbnVtYmVyLFxyXG4gICBjb2xvcnM/OiBodG1sQ29sb3JbXSxcclxuICAgb25pbnB1dD86ICgpID0+IHZvaWQsXHJcbiAgIGdldFRleHQ/OiAoc2xpZGVyOiBTbGlkZXIpID0+IHN0cmluZyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHNsaWRlciBjb21wb3NlZCBvZiBhIGxhYmVsLCBpbnB1dCByYW5nZSwgY29sb3Igc3BhbiBhbmQgdmFsdWUgc3BhblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsaWRlciB7XHJcblxyXG4gICBwcml2YXRlIF9yYW5nZTogSFRNTElucHV0RWxlbWVudDtcclxuICAgcHJpdmF0ZSBfY29sb3JTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgIHByaXZhdGUgX3ZhbHVlU3BhbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gICBwcml2YXRlIF9jb2xvcnM6IENvbG9yUmFuZ2U7XHJcbiAgIHByaXZhdGUgX2dldFRleHQ6IChzbGlkZXI6IFNsaWRlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBwYXJlbnQgVGhlIHBhcmVudCBodG1sIG9iamVjdC5cclxuICAgICogQHBhcmFtIHNldHVwIFRoZSBzZXR1cCBkYXRhIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIHNldHVwOiBJU2xpZGVyU2V0dXApIHtcclxuXHJcbiAgICAgIHRoaXMuX2dldFRleHQgPSBzZXR1cC5nZXRUZXh0O1xyXG5cclxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBkaXYuaWQgPSBzZXR1cC5pZDtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdTbGlkZXJEaXYnO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgIGxhYmVsLmlkID0gc2V0dXAuaWQgKyAnTGFiZWwnO1xyXG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSAnU2xpZGVyTGFiZWwnO1xyXG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBzZXR1cC5sYWJlbDtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgIHRoaXMuX3JhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgdGhpcy5fcmFuZ2UudHlwZSA9ICdyYW5nZSc7XHJcbiAgICAgIHRoaXMuX3JhbmdlLmlkID0gc2V0dXAuaWQgKyAnUmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5jbGFzc05hbWUgPSAnU2xpZGVyUmFuZ2UnO1xyXG4gICAgICB0aGlzLl9yYW5nZS5taW4gPSBzZXR1cC5taW4udG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5fcmFuZ2UubWF4ID0gc2V0dXAubWF4LnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX3JhbmdlLnZhbHVlID0gc2V0dXAudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5fcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3BhbkNvbG9yKCk7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlU3BhblRleHQoKVxyXG4gICAgICB9KTtcclxuICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuX3JhbmdlKTtcclxuXHJcbiAgICAgIGlmIChzZXR1cC5jb2xvcnMpIHtcclxuICAgICAgICAgdGhpcy5fY29sb3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICB0aGlzLl9jb2xvclNwYW4uaWQgPSBzZXR1cC5pZCArICdDb2xvclNwYW4nO1xyXG4gICAgICAgICB0aGlzLl9jb2xvclNwYW4uY2xhc3NOYW1lID0gJ1NsaWRlckNvbG9yU3Bhbic7XHJcbiAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl9jb2xvclNwYW4pO1xyXG5cclxuICAgICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIGNvbG9yLlxyXG4gICAgICAgICB0aGlzLmNvbG9ycyA9IHNldHVwLmNvbG9ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICB0aGlzLl92YWx1ZVNwYW4uaWQgPSBzZXR1cC5pZCArICdWYWx1ZVNwYW4nO1xyXG4gICAgICB0aGlzLl92YWx1ZVNwYW4uY2xhc3NOYW1lID0gJ1NsaWRlclZhbHVlU3Bhbic7XHJcbiAgICAgIC8vICAgICAgdGhpcy5fdmFsdWVTcGFuLmlubmVyVGV4dCA9IHNldHVwLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLl92YWx1ZVNwYW4pO1xyXG5cclxuICAgICAgLy8gc2V0IHRoZSBpbml0aWFsIHNwYW4gdGV4dFxyXG4gICAgICB0aGlzLnVwZGF0ZVNwYW5UZXh0KCk7XHJcblxyXG4gICAgICB0aGlzLl9yYW5nZS5vbmlucHV0ID0gc2V0dXAub25pbnB1dDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIHNwYW4gY29sb3IgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjb2xvci5cclxuICAgICovXHJcbiAgIHByaXZhdGUgdXBkYXRlU3BhbkNvbG9yKCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgIGxldCB2YWwgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcclxuICAgICAgICAgbGV0IGNvbG9yID0gaHRtbENvbG9yLmZyb21Db2xvcih0aGlzLl9jb2xvcnMuZ2V0KHZhbCkpO1xyXG4gICAgICAgICB0aGlzLl9jb2xvclNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IudG9IZXgoKVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gKiBTZXRzIHRoZSBzcGFuIGNvbG9yIHRvIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3IuXHJcbiAqL1xyXG4gICBwcml2YXRlIHVwZGF0ZVNwYW5UZXh0KCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5fZ2V0VGV4dCkge1xyXG4gICAgICAgICB0aGlzLl92YWx1ZVNwYW4uaW5uZXJUZXh0ID0gdGhpcy5fZ2V0VGV4dCh0aGlzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgaHRtbCByYW5nZSBvYmplY3RcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBodG1sIHJhbmdlIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgcmFuZ2UoKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYW5nZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgc2xpZGVyIHZhbHVlXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBzbGlkZXIgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JhbmdlLnZhbHVlQXNOdW1iZXI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIChhbmQgYXNzb2NpYXRlZCBjb250ZW50KVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCB0aGUgZGVzaXJlZCBzbGlkZXIgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgdmFsdWUodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5fcmFuZ2UudmFsdWVBc051bWJlciA9IHZhbDtcclxuICAgICAgdGhpcy51cGRhdGVTcGFuQ29sb3IoKTtcclxuICAgICAgdGhpcy51cGRhdGVTcGFuVGV4dCgpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWluIHNsaWRlciB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtaW4gc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWluKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1heCBzbGlkZXIgdmFsdWUuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSBtYXggc2xpZGVyIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5fcmFuZ2UubWF4KTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIGNvbG9yIGZvciB0aGUgc2xpZGVyXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IGNvbG9ycyhjb2xvcnM6IGh0bWxDb2xvcltdKSB7XHJcblxyXG4gICAgICAvLyBzdG9yZSB0aGUgY29sb3JzXHJcbiAgICAgIHRoaXMuX2NvbG9ycyA9IG5ldyBDb2xvclJhbmdlKGNvbG9ycyk7XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgZ3JhZGllbnQgc3R5bGUgZm9yIHRoZSByYW5nZSBvYmplY3RcclxuICAgICAgbGV0IGdyYWRpZW50U3RyID0gJzkwZGVnJztcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgZ3JhZGllbnRTdHIgKz0gJywgJyArIGNvbG9yc1tpXS50b0NzcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3JhbmdlLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KCcgKyBncmFkaWVudFN0ciArICcpJztcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3BhbiBjb2xvciB0b29cclxuICAgICAgdGhpcy51cGRhdGVTcGFuQ29sb3IoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGN1cnJlbnQgY29sb3IgYXMgYW4gaHRtbENvbG9yIG9iamVjdC5cclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIGN1cnJlbnQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGh0bWxDb2xvcigpOiBodG1sQ29sb3Ige1xyXG4gICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgIGxldCB2YWwgPSAodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ycy5nZXQodmFsKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGh0bWxDb2xvcldpdGhBbHBoYS50cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgY3VycmVudCBjb2xvciBhcyBhIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIGN1cnJlbnQgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGdsQ29sb3IoKTogZ2xDb2xvciB7XHJcbiAgICAgIGlmICh0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgbGV0IHZhbCA9ICh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JzLmdldCh2YWwpLnRvR2xDb2xvcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3IoWzAsIDAsIDBdKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCIvKipcclxuICogU3BoZXJpY2FsIGNvb3JkaW5hdGVzIGJhc2VkIG9uIHRoZSBXZWJHTCB2aWV3aW5nIHN5c3RlbTogeD1sZWZ0LXJpZ2h0LCB5PXVwLWRvd24sIHo9bmVhci1mYXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWxDb29yZCB7XHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgb3JpZ2luIHRvIHRoZSBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxldmF0aW9uIGZyb20gdGhlIGZsb29yIHRvIHRoZSBwb2ludC4gMCBhbmQgMTgwIGFyZSBvbiB0aGVcclxuICAgICogZmxvb3IuIDkwIHBvaW50cyB1cC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBlbGV2YXRpb25BbmdsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgYW5nbGUsIHdoZW4gbG9va2luZyBkb3duIGZyb20gdGhlIHRvcCwgdG8gdGhlIHBvaW50LiAwIHBvaW50cyByaWdodC5cclxuICAgICovXHJcbiAgIHB1YmxpYyByb3RhdGlvbkFuZ2xlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSByYWRpdXNcclxuICAgICogQHBhcmFtIGVsZXZhdGlvbkFuZ2xlIFxyXG4gICAgKiBAcGFyYW0gcm90YXRpb25BbmdsZSBcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyYWRpdXM6IG51bWJlciwgZWxldmF0aW9uQW5nbGU6IG51bWJlciwgcm90YXRpb25BbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICB0aGlzLmVsZXZhdGlvbkFuZ2xlID0gZWxldmF0aW9uQW5nbGU7XHJcbiAgICAgIHRoaXMucm90YXRpb25BbmdsZSA9IHJvdGF0aW9uQW5nbGU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3BoZXJpY2FsIGNvb3JkaW5hdGUgZnJvbSBhIGNhcnRlc2lhbiBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHBvcyBUaGUgY2FydGVzaWFuIHBvaW50LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc3BoZXJpY2FsIGNvb3JkaW5hdGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21YWVoocG9zOiBudW1iZXJbXSk6IFNwaGVyaWNhbENvb3JkIHtcclxuXHJcbiAgICAgIGxldCB4ID0gcG9zWzBdO1xyXG4gICAgICBsZXQgeSA9IHBvc1sxXTtcclxuICAgICAgbGV0IHogPSBwb3NbMl07XHJcblxyXG4gICAgICBsZXQgcmFkaXVzID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XHJcbiAgICAgIGxldCByb3RhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hdGFuMih6LCB4KTtcclxuICAgICAgbGV0IGVsZXZhdGlvbkFuZ2xlID0gKDE4MCAvIE1hdGguUEkpICogTWF0aC5hc2luKHkgLyByYWRpdXMpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcGhlcmljYWxDb29yZChyYWRpdXMsIGVsZXZhdGlvbkFuZ2xlLCByb3RhdGlvbkFuZ2xlKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgc3BoZXJpY2FsIGNvb3JkaW5hdGUgdG8gYSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1hZWigpOiBudW1iZXJbXSB7XHJcblxyXG4gICAgICBsZXQgZmxvb3JSYWRpdXMgPSB0aGlzLnJhZGl1cyAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeCA9IGZsb29yUmFkaXVzICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhZGl1cyAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqIHRoaXMuZWxldmF0aW9uQW5nbGUpO1xyXG4gICAgICBsZXQgeiA9IGZsb29yUmFkaXVzICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogdGhpcy5yb3RhdGlvbkFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBbeCwgeSwgel07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgUGxhbmVzQXBwIH0gZnJvbSBcIi4vUGxhbmVzQXBwXCI7XHJcbmltcG9ydCB7IHRvUmFkLCB0b0RlZywgY2xhbXAsIGlzTW9iaWxlIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBnbFZlYzIgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBQb2ludGVyRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vUG9pbnRlckV2ZW50SGFuZGxlclwiO1xyXG5cclxuLy8gVE9ETyBtYWtlIHRoZXNlIHZhcmlhYmxlc1xyXG5leHBvcnQgbGV0IHRleHR1cmVTaXplID0gMjU2O1xyXG5leHBvcnQgbGV0IGRpc3BsYXlTaXplID0gMTUwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRocmVzaG9sZEN0cmwge1xyXG4gICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHByaXZhdGUgaGlkZGVuQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgcHJpdmF0ZSBhcHA6IFBsYW5lc0FwcDtcclxuICAgcHJpdmF0ZSBtb3VzZU9mZnNldCA9IG5ldyBnbFZlYzIoKTtcclxuICAgcHJpdmF0ZSBoaXQgPSAwO1xyXG4gICBwcml2YXRlIGhhbmRsZXI6IFBvaW50ZXJFdmVudEhhbmRsZXI7XHJcblxyXG4gICBwcml2YXRlIGJhbGxDZW50ZXI6IGdsVmVjMjtcclxuICAgcHJpdmF0ZSBwMTogZ2xWZWMyO1xyXG4gICBwcml2YXRlIHAyOiBnbFZlYzI7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCwgYXBwOiBQbGFuZXNBcHApIHtcclxuXHJcbiAgICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAgICBkaXNwbGF5U2l6ZSA9IDMwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuY2FudmFzLmlkID0gJ1RocmVzaG9sZENhbnZhcyc7XHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gZGlzcGxheVNpemU7XHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRpc3BsYXlTaXplO1xyXG5cclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLndpZHRoID0gdGV4dHVyZVNpemU7XHJcbiAgICAgIHRoaXMuaGlkZGVuQ2FudmFzLmhlaWdodCA9IHRleHR1cmVTaXplO1xyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5DYW52YXMpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVyID0gbmV3IFBvaW50ZXJFdmVudEhhbmRsZXIodGhpcy5jYW52YXMpO1xyXG4gICAgICB0aGlzLmhhbmRsZXIub25Eb3duID0gKHBvcykgPT4gdGhpcy5vbkRvd24ocG9zKTtcclxuICAgICAgdGhpcy5oYW5kbGVyLm9uTW92ZSA9IChwb3MpID0+IHRoaXMub25Nb3ZlKHBvcyk7XHJcblxyXG4gICB9XHJcbiAgIHByaXZhdGUgb25Eb3duKHBvczogZ2xWZWMyKSB7XHJcblxyXG4gICAgICB0aGlzLmhpdFRlc3QocG9zKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBoaXRUZXN0KHBvczogZ2xWZWMyKSB7XHJcbiAgICAgIGxldCBkMSA9IHRoaXMucDEuZGlzdGFuY2UocG9zKTtcclxuICAgICAgbGV0IGQyID0gdGhpcy5wMi5kaXN0YW5jZShwb3MpO1xyXG5cclxuICAgICAgY29uc3QgSElUX1JBRElVUyA9IDE1O1xyXG4gICAgICBpZiAoZDEgPCBISVRfUkFESVVTICYmIGQxIDw9IGQyKSB7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gMTtcclxuICAgICAgICAgdGhpcy5tb3VzZU9mZnNldCA9IG5ldyBnbFZlYzIoW3RoaXMucDEueCAtIHBvcy54LCB0aGlzLnAxLnkgLSBwb3MueV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGQyIDwgSElUX1JBRElVUyAmJiBkMiA8PSBkMSkge1xyXG4gICAgICAgICB0aGlzLmhpdCA9IDI7XHJcbiAgICAgICAgIHRoaXMubW91c2VPZmZzZXQgPSBuZXcgZ2xWZWMyKFt0aGlzLnAyLnggLSBwb3MueCwgdGhpcy5wMi55IC0gcG9zLnldKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5oaXQgPSAwO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Nb3ZlKHBvczogZ2xWZWMyKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhbmRsZXIubW91c2VEb3duICYmIHRoaXMuaGl0ID4gMCkge1xyXG4gICAgICAgICBsZXQgaGl0UHQgPSBuZXcgZ2xWZWMyKFtwb3MueCAtIHRoaXMubW91c2VPZmZzZXQueCwgcG9zLnkgLSB0aGlzLm1vdXNlT2Zmc2V0LnldKTtcclxuICAgICAgICAgaGl0UHQueCA9IE1hdGgubWF4KGhpdFB0LngsIHRoaXMuYmFsbENlbnRlci54KTtcclxuICAgICAgICAgaGl0UHQueSA9IE1hdGgubWluKGhpdFB0LnksIHRoaXMuYmFsbENlbnRlci55KTtcclxuICAgICAgICAgbGV0IHJhZGl1cyA9IHRoaXMuYmFsbENlbnRlci5kaXN0YW5jZShoaXRQdCk7XHJcbiAgICAgICAgIGxldCBhbmdsZSA9IHRvRGVnKE1hdGguYXNpbigoaGl0UHQueCAtIHRoaXMuYmFsbENlbnRlci54KSAvIHJhZGl1cykpO1xyXG4gICAgICAgICBpZiAodGhpcy5oaXQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC50aHJlc2hvbGQxID0gY2xhbXAoYW5nbGUsIDAsIDkwKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAudGhyZXNob2xkMiA9IGNsYW1wKGFuZ2xlLCAwLCA5MCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhdygpIHtcclxuXHJcbiAgICAgIGxldCBiYWxsSW1hZ2VEYXRhID0gdGhpcy5hcHAucmVuZGVyZXIuZ2V0QmFsbEltYWdlKCk7XHJcblxyXG4gICAgICB0aGlzLmhpZGRlbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShiYWxsSW1hZ2VEYXRhLmltYWdlLCAwLCAwKTtcclxuXHJcbiAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjdHgucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSgwLCBkaXNwbGF5U2l6ZSAvIDIpO1xyXG4gICAgICBjdHguc2NhbGUoZGlzcGxheVNpemUgLyB0ZXh0dXJlU2l6ZSwgLWRpc3BsYXlTaXplIC8gdGV4dHVyZVNpemUpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaGlkZGVuQ2FudmFzLCAwLCAtdGV4dHVyZVNpemUgLyAyKTtcclxuXHJcbiAgICAgIGN0eC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICAgICB0aGlzLmJhbGxDZW50ZXIgPSBuZXcgZ2xWZWMyKFtcclxuICAgICAgICAgZGlzcGxheVNpemUgKiBiYWxsSW1hZ2VEYXRhLmJhbGxDZW50ZXIueCxcclxuICAgICAgICAgZGlzcGxheVNpemUgKiAoMSAtIGJhbGxJbWFnZURhdGEuYmFsbENlbnRlci55KVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnbGltZWdyZWVuJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJ1xyXG5cclxuICAgICAgY29uc3QgS05PQl9MRU5HVEggPSAyNTtcclxuICAgICAgY29uc3QgS05PQl9SQURJVVMgPSA4O1xyXG4gICAgICBsZXQgciA9IGRpc3BsYXlTaXplICogYmFsbEltYWdlRGF0YS5iYWxsUmFkaXVzO1xyXG4gICAgICBsZXQgczEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgcik7XHJcbiAgICAgIHRoaXMucDEgPSB0aGlzLmdldFB0KHRoaXMuYmFsbENlbnRlciwgdGhpcy5hcHAucmVuZGVyZXIudGhyZXNob2xkMSwgciArIEtOT0JfTEVOR1RIKTtcclxuICAgICAgbGV0IHMyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIpO1xyXG4gICAgICB0aGlzLnAyID0gdGhpcy5nZXRQdCh0aGlzLmJhbGxDZW50ZXIsIHRoaXMuYXBwLnJlbmRlcmVyLnRocmVzaG9sZDIsIHIgKyBLTk9CX0xFTkdUSCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oczEueCwgczEueSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5wMS54LCB0aGlzLnAxLnkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmModGhpcy5wMS54LCB0aGlzLnAxLnksIEtOT0JfUkFESVVTLCAwLCB0b1JhZCgzNjApKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKHMyLngsIHMyLnkpO1xyXG4gICAgICBjdHgubGluZVRvKHRoaXMucDIueCwgdGhpcy5wMi55KTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHRoaXMucDIueCwgdGhpcy5wMi55LCBLTk9CX1JBRElVUywgMCwgdG9SYWQoMzYwKSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRQdChjZW50ZXI6IGdsVmVjMiwgdGhyZXNob2xkOiBudW1iZXIsIHJhZGl1czogbnVtYmVyKTogZ2xWZWMyIHtcclxuXHJcbiAgICAgIGxldCBveSA9IHJhZGl1cyAqIE1hdGguc2luKHRvUmFkKDkwIC0gdGhyZXNob2xkKSk7XHJcbiAgICAgIGxldCBveCA9IHJhZGl1cyAqIE1hdGguY29zKHRvUmFkKDkwIC0gdGhyZXNob2xkKSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMihbY2VudGVyLnggKyBveCwgY2VudGVyLnkgLSBveV0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSAzRCBhcnJvdyB1c2luZyB0cmlhbmdsZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZUFycm93IGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgY29uc3QgTlVNX1NURVBTID0gMzA7XHJcbiAgICAgIGNvbnN0IFRJUCA9IG5ldyBnbFZlYzMoWzAsIDAsIDBdKTtcclxuICAgICAgY29uc3QgVE9UQUxfTEVOR1RIID0gMC40O1xyXG4gICAgICBjb25zdCBBUlJPV19SQURJVVMgPSAwLjE1O1xyXG4gICAgICBjb25zdCBBUlJPV19MRU5HVEggPSAxLjUgKiBBUlJPV19SQURJVVM7XHJcbiAgICAgIGNvbnN0IFNIQUZUX1JBRElVUyA9IDAuNSAqIEFSUk9XX1JBRElVUztcclxuXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSBhcnJvdyBoZWFkXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChUSVApO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbMCwgQVJST1dfTEVOR1RILCAwXSkpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gQVJST1dfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBBUlJPV19MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gQVJST1dfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGlUaXAgPSAwO1xyXG4gICAgICBsZXQgaUJhc2UgPSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpMSA9IDIgKyBpO1xyXG4gICAgICAgICBsZXQgaTIgPSAoaSA9PSBOVU1fU1RFUFMgLSAxKSA/IDAgOiBpMSArIDE7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGlUaXAsIGkyLCBpMSwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGlCYXNlLCBpMSwgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBidWlsZCB0aGUgYXJyb3cgc2hhZnRcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoWzAsIFRPVEFMX0xFTkdUSCwgMF0pKTtcclxuICAgICAgbGV0IGlFbmQgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1NURVBTOyBpKyspIHtcclxuICAgICAgICAgbGV0IHggPSBTSEFGVF9SQURJVVMgKiBNYXRoLnNpbihpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICBsZXQgeSA9IEFSUk9XX0xFTkdUSDtcclxuICAgICAgICAgbGV0IHogPSBTSEFGVF9SQURJVVMgKiBNYXRoLmNvcyhpIC8gKE5VTV9TVEVQUyAtIDEpICogMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbeCwgeSwgel0pKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB4ID0gU0hBRlRfUkFESVVTICogTWF0aC5zaW4oaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgbGV0IHkgPSBUT1RBTF9MRU5HVEg7XHJcbiAgICAgICAgIGxldCB6ID0gU0hBRlRfUkFESVVTICogTWF0aC5jb3MoaSAvIChOVU1fU1RFUFMgLSAxKSAqIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW3gsIHksIHpdKSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGlTdGFydCA9IGlFbmQgKyAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpMSA9IGlTdGFydCArIGk7XHJcbiAgICAgICAgIGxldCBpMiA9IChpID09IE5VTV9TVEVQUyAtIDEpID8gaVN0YXJ0IDogaTEgKyAxO1xyXG4gICAgICAgICBsZXQgaTMgPSBpMSArIE5VTV9TVEVQUztcclxuICAgICAgICAgbGV0IGk0ID0gaTIgKyBOVU1fU1RFUFM7XHJcblxyXG4gICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTIsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTQsIGkzLCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkzLCBpNCwgaUVuZCwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFZvbHVtZSB9IGZyb20gXCIuL1ZvbHVtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlQ3ViZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIsIGNlbnRlcjogZ2xWZWMzKSB7XHJcblxyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVUcmlhbmdsZXMoc2l6ZSwgY2VudGVyKTtcclxuXHJcbiAgICAgIHRoaXMudm9sdW1lcy5wdXNoKG5ldyBWb2x1bWUoKSk7XHJcbiAgICAgIHRoaXMudm9sdW1lc1swXS5ib3hNaW4gPSB0aGlzLmJveE1pbi5jbG9uZSgpO1xyXG4gICAgICB0aGlzLnZvbHVtZXNbMF0uYm94TWF4ID0gdGhpcy5ib3hNYXguY2xvbmUoKTtcclxuICAgICAgdGhpcy52b2x1bWVzWzBdLnRyaWFuZ2xlcyA9IHRoaXMudHJpYW5nbGVzO1xyXG4gICB9XHJcblxyXG4gICBjcmVhdGVGYWNlKGkxOiBudW1iZXIsIGkyOiBudW1iZXIsIGkzOiBudW1iZXIsIGk0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMiwgaTMsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMiwgaTQsIGkzLCB0aGlzLm5vcm1hbHMpKTtcclxuICAgfVxyXG5cclxuICAgY3JlYXRlVHJpYW5nbGVzKHNpemU6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSAtIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggLSBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54IC0gc2l6ZSAvIDIsIGNlbnRlci55ICsgc2l6ZSAvIDIsIGNlbnRlci56IC0gc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCAtIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiArIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgLSBzaXplIC8gMiwgY2VudGVyLnogLSBzaXplIC8gMl0pKTtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54ICsgc2l6ZSAvIDIsIGNlbnRlci55IC0gc2l6ZSAvIDIsIGNlbnRlci56ICsgc2l6ZSAvIDJdKSk7XHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCArIHNpemUgLyAyLCBjZW50ZXIueSArIHNpemUgLyAyLCBjZW50ZXIueiAtIHNpemUgLyAyXSkpO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IGdsVmVjMyhbY2VudGVyLnggKyBzaXplIC8gMiwgY2VudGVyLnkgKyBzaXplIC8gMiwgY2VudGVyLnogKyBzaXplIC8gMl0pKTtcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgwLCAxLCAyLCAzKTtcclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDQsIDYsIDUsIDcpO1xyXG5cclxuICAgICAgdGhpcy5jcmVhdGVGYWNlKDAsIDQsIDEsIDUpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMiwgMywgNiwgNyk7XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUZhY2UoMCwgMiwgNCwgNik7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmFjZSgxLCA1LCAzLCA3KTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBWb2x1bWUgfSBmcm9tIFwiLi9Wb2x1bWVcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE5vcm1hbFR5cGUge1xyXG4gICBTbW9vdGgsXHJcbiAgIEZsYXRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRGF0YSB7XHJcbiAgIHZlcnRpY2VzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIG5vcm1hbHM6IEZsb2F0MzJBcnJheTtcclxuICAgbkluZGljZXM6IEludDMyQXJyYXk7XHJcbiAgIHZJbmRpY2VzOiBJbnQzMkFycmF5O1xyXG4gICBib3hNaW46IGdsVmVjMztcclxuICAgYm94TWF4OiBnbFZlYzM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIGNvbXB1dGUgbm9ybWFscyBmb3IgdmVydGljZXMgdGhhdCBqb2luIG11bHRpcGxlIGZhY2VzXHJcbiAqL1xyXG5jbGFzcyBNdWx0aU5vcm1WZXJ0ZXgge1xyXG4gICBwcml2YXRlIG5vcm1hbHM6IGdsVmVjM1tdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogU3RvcmVzIGEgbm9ybWFsIGZvciB0aGlzIHZlcnRleFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5vcm1hbCBTdG9yZXMgYSBub3JtYWwgZm9yIHRoZSB2ZXJ0ZXhcclxuICAgICovXHJcbiAgIHB1YmxpYyBwdXNoKG5vcm1hbDogZ2xWZWMzKSB7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbm9ybWFsIGJ5IGF2ZXJhZ2luZyBhbGwgdGhlIGluZGl2aWR1YWwgbm9ybWFscyBhc3NvY2lhdGVkIHdpdGggdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBub3JtYWwoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IG4gPSBuZXcgZ2xWZWMzKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIG4ueCArPSB0aGlzLm5vcm1hbHNbaV0ueDtcclxuICAgICAgICAgbi55ICs9IHRoaXMubm9ybWFsc1tpXS55O1xyXG4gICAgICAgICBuLnogKz0gdGhpcy5ub3JtYWxzW2ldLno7XHJcbiAgICAgIH1cclxuICAgICAgbi54IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueSAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBuLnogLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3JtYWxzLmxlbmd0aCk7XHJcbiAgICAgIHJldHVybiBuO1xyXG4gICB9XHJcbn1cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZnJvbSBhIGJ1bmNoIG9mIHRyaWFuZ2xlcy4gVGhlIGNsYXNzXHJcbiAqIGVmZmljaWVudGx5IG1hbmFnZXMgdGhlIHRyaWFuZ2xlcyBieSBzdG9yaW5nIHRoZW0gaW4gdm9sdW1lcyBhbmQgYnlcclxuICogcGFzc2luZyB0aGVtIHRvIFdlYkdMIHVzaW5nIFVuaWZvcm0gQnVmZmVyc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqIHtcclxuICAgcHVibGljIHZlcnRpY2VzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICBwdWJsaWMgbm9ybWFsczogZ2xWZWMzW10gPSBbXTtcclxuICAgcHVibGljIHRyaWFuZ2xlczogSW5kZXhlZFRyaWFuZ2xlW10gPSBbXTtcclxuICAgcHVibGljIGJveE1pbiA9IG5ldyBnbFZlYzMoW051bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUVdKTtcclxuICAgcHVibGljIGJveE1heCA9IG5ldyBnbFZlYzMoWy1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUVdKTtcclxuICAgcHVibGljIHZvbHVtZXM6IFZvbHVtZVtdID0gW107XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC54IC0gdGhpcy5ib3hNaW4ueDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnkgLSB0aGlzLmJveE1pbi55O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC56IC0gdGhpcy5ib3hNaW4uejtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjZW50ZXIoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueCArIHRoaXMuYm94TWF4LngpIC8gMixcclxuICAgICAgICAgKHRoaXMuYm94TWluLnkgKyB0aGlzLmJveE1heC55KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi56ICsgdGhpcy5ib3hNYXgueikgLyAyLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIHB1c2godHJpOiBJbmRleGVkVHJpYW5nbGUpIHtcclxuICAgICAgdGhpcy50cmlhbmdsZXMucHVzaCh0cmkpO1xyXG4gICAgICB0aGlzLmJveE1pbi54ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueCwgdHJpLm1pblgpO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueSwgdHJpLm1pblkpO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdHJpLm1pblopO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueCwgdHJpLm1heFgpO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdHJpLm1heFkpO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueiwgdHJpLm1heFopO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2NhbGVzIHRoZSBvYmplY3QgdG8gdGhlIHNwZWNpZmllZCBzaXplIGFuZCBjZW50ZXJzIGl0IGFib3V0ICgwLDAsMClcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBzaXplIFRoZSBtYXggc2l6ZSBmb3IgdGhlIHdpZHRoLCBoZWlnaHQsIGFuZCBkZXB0aFxyXG4gICAgKi9cclxuICAgcHVibGljIGF1dG9DZW50ZXIoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICBsZXQgdHJhbnMgPSBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgLSh0aGlzLmJveE1heC54ICsgdGhpcy5ib3hNaW4ueCkgLyAyLFxyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnkgKyB0aGlzLmJveE1pbi55KSAvIDIsXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueiArIHRoaXMuYm94TWluLnopIC8gMixcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgc2NhbGUgPSBzaXplIC8gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuXHJcbiAgICAgICAgIHYueCA9ICh2LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LnkgPSAodi55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgICAgdi56ID0gKHYueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm94TWluLnggPSAodGhpcy5ib3hNaW4ueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSAodGhpcy5ib3hNaW4ueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSAodGhpcy5ib3hNaW4ueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSAodGhpcy5ib3hNYXgueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSAodGhpcy5ib3hNYXgueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSAodGhpcy5ib3hNYXgueiArIHRyYW5zLnopICogc2NhbGU7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9sdW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudm9sdW1lc1tpXTtcclxuICAgICAgICAgdi5ib3hNaW4ueCA9ICh2LmJveE1pbi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNaW4ueSA9ICh2LmJveE1pbi55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNaW4ueiA9ICh2LmJveE1pbi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNYXgueCA9ICh2LmJveE1heC54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNYXgueSA9ICh2LmJveE1heC55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNYXgueiA9ICh2LmJveE1heC56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ2F1dG9BZGp1c3QoKScpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2hpZnQgdGhlIG9iamVjdCBpbiBzcGFjZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIGFtb3VudCB0byBzaGlmdFxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuXHJcbiAgICAgICAgIHYueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdi55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2LnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogKz0gb2Zmc2V0Lno7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9sdW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdGhpcy52b2x1bWVzW2ldO1xyXG4gICAgICAgICB2b2wuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1pbi56ICs9IG9mZnNldC56O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1heC56ICs9IG9mZnNldC56O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCcmVha3MgdGhlIG9iamVjdCBpbnRvIGV2ZW5seSBzcGFjZWQgdm9sdW1lcy4gVGhlIG51bWJlciBvZiB2b2x1bWVzIGlzIGF1dG9tYXRpY2FsbHlcclxuICAgICogZGV0ZXJtaW5lZCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHRyaWFuZ2xlcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBicmVha0ludG9Wb2x1bWVzKCkge1xyXG4gICAgICBsZXQgbnVtU3RlcHM7XHJcbiAgICAgIGlmICh0aGlzLnRyaWFuZ2xlcy5sZW5ndGggPCA0MCkge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cmlhbmdsZXMubGVuZ3RoIDwgMTUwMCkge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZvbHVtZXMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnBvdyhudW1TdGVwcywgMyk7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnZvbHVtZXMucHVzaChuZXcgVm9sdW1lKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblggLSB0aGlzLmJveE1pbi54KSAvICh0aGlzLmJveE1heC54IC0gdGhpcy5ib3hNaW4ueCkpO1xyXG4gICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5ZIC0gdGhpcy5ib3hNaW4ueSkgLyAodGhpcy5ib3hNYXgueSAtIHRoaXMuYm94TWluLnkpKTtcclxuICAgICAgICAgbGV0IHogPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWiAtIHRoaXMuYm94TWluLnopIC8gKHRoaXMuYm94TWF4LnogLSB0aGlzLmJveE1pbi56KSk7XHJcbiAgICAgICAgIHggPSBjbGFtcCh4LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB5ID0gY2xhbXAoeSwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeiA9IGNsYW1wKHosIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IHggKyB5ICogbnVtU3RlcHMgKyB6ICogbnVtU3RlcHMgKiBudW1TdGVwcztcclxuICAgICAgICAgdGhpcy52b2x1bWVzW2luZGV4XS5wdXNoKHQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlTm9ybWFscyh0eXBlOiBOb3JtYWxUeXBlKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICBsZXQgbm9ybWFsczogZ2xWZWMzW10gPSBbXTtcclxuICAgICAgbGV0IG11bHRpTm9ybVZlcnRpY2VzOiBNdWx0aU5vcm1WZXJ0ZXhbXSA9IFtdO1xyXG4gICAgICBpZiAodHlwZSA9PT0gTm9ybWFsVHlwZS5TbW9vdGgpIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzLnB1c2gobmV3IE11bHRpTm9ybVZlcnRleCgpKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RvcmUgdGhlIG5vcm1hbHMgd2l0aCBlYWNoIHZlcnRleCAtIHdlJ2xsIGxhdGVyIGF2ZXJhZ2UgdGhlc2VcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBuID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmlWMF0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmlWMV0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmlWMl0ucHVzaChuKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IG5vcm1hbHMgYXJyYXlcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0aU5vcm1WZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gobXVsdGlOb3JtVmVydGljZXNbaV0ubm9ybWFsKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gdXBkYXRlIHRoZSB0cmlhbmdsZXNcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgIHRyaS5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgICAgdHJpLmlOMCA9IHRyaS5pVjA7XHJcbiAgICAgICAgICAgIHRyaS5pTjEgPSB0cmkuaVYxO1xyXG4gICAgICAgICAgICB0cmkuaU4yID0gdHJpLmlWMjtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHRyaS5jb21wdXRlTm9ybWFsKCkpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBub3JtYWxzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICB0cmkubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgICAgIHRyaS5pTjAgPSBpbmRleDtcclxuICAgICAgICAgICAgdHJpLmlOMSA9IGluZGV4O1xyXG4gICAgICAgICAgICB0cmkuaU4yID0gaW5kZXg7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG5cclxuICAgICAgcC5sb2coJ2NvbXB1dGVOb3JtYWxzJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIGluIHRoZSBmb3IgLk9CSiBmaWxlIGZvcm1hdFxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIHRvT2JqU3RyaW5nKGRpZ2l0cyA9IDgpIHtcclxuXHJcbiAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgc3RyICs9ICcjIFZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICcjIE5vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnIyBUcmlhbmdsZXM6ICcgKyB0aGlzLnRyaWFuZ2xlcy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICdcXG4nO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuICAgICAgICAgc3RyICs9ICd2ICcgKyB2LngudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHYueS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdi56LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9ybWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgbiA9IHRoaXMubm9ybWFsc1tpXTtcclxuICAgICAgICAgc3RyICs9ICd2biAnICsgbi54LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuLnkudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG4uei50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdCA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICBzdHIgKz0gJ2YgJyArXHJcbiAgICAgICAgICAgICh0LmlWMCArIDEpICsgJy8vJyArICh0LmlOMCArIDEpICsgJyAnICtcclxuICAgICAgICAgICAgKHQuaVYxICsgMSkgKyAnLy8nICsgKHQuaU4xICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pVjIgKyAxKSArICcvLycgKyAodC5pTjIgKyAxKSArICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgbGV0IG1zZyA9ICdPcHRpbWl6ZWQgLk9CSiBjb250ZW50IGNvcGllZCB0byBjbGlwYm9hcmRcXG5cXG4nO1xyXG4gICAgICBtc2cgKz0gJ051bSBUcmlhbmdsZXM6ICcgKyB0aGlzLnRyaWFuZ2xlcy5sZW5ndGggKyAnXFxuJztcclxuXHJcbiAgICAgIGxldCB2ZXJ0ZXhUb0luZGV4TWFwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgbGV0IGluZGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCBnZW5lcmF0ZSBhIHVuaXF1ZSBzZXQgb2YgdmVydGljZXNcclxuICAgICAgbGV0IHVuaXF1ZVZlcnRpY2VzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgIGxldCBvbGRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICBsZXQga2V5ID0gdGhpcy52ZXJ0aWNlc1tpXS50b1N0cmluZyg0LCAnICcpO1xyXG4gICAgICAgICBsZXQgb2xkSW5kZXggPSBpICsgMTtcclxuICAgICAgICAgbGV0IG5ld0luZGV4O1xyXG4gICAgICAgICBpZiAodmVydGV4VG9JbmRleE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAvLyBqdXN0IG1hcCB0aGUgb2xkIGluZGV4IHRvIHRoZSBleGlzdGluZyBlbnRyeVxyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHZlcnRleFRvSW5kZXhNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBlbnRyeVxyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIHZlcnRleFRvSW5kZXhNYXAuc2V0KGtleSwgbmV3SW5kZXgpO1xyXG4gICAgICAgICAgICB1bmlxdWVWZXJ0aWNlcy5wdXNoKG9sZFZlcnRleCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gc3RvcmUgdGhlIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgIGluZGV4VG9JbmRleE1hcC5zZXQob2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG9sZFNpemUgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICAgICAgbGV0IG5ld1NpemUgPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICAgIG1zZyArPSAnTnVtIFZlcnRpY2VzOiAnICsgb2xkU2l6ZSArICcgdG8gJyArIG5ld1NpemUgKyAnLCAnICsgKDEwMCAqIG5ld1NpemUgLyBvbGRTaXplKS50b0ZpeGVkKCkgKyAnICVcXG4nO1xyXG5cclxuICAgICAgLy8gcmVzZXQgYWxsIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLnZlcnRpY2VzID0gdW5pcXVlVmVydGljZXM7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICB0cmkudmVydGljZXMgPSB1bmlxdWVWZXJ0aWNlcztcclxuICAgICAgICAgdHJpLmlWMCA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMCArIDEpIC0gMTtcclxuICAgICAgICAgdHJpLmlWMSA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMSArIDEpIC0gMTtcclxuICAgICAgICAgdHJpLmlWMiA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMiArIDEpIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb2xkU2l6ZSA9IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMobm9ybWFsVHlwZSk7XHJcbiAgICAgIG5ld1NpemUgPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBtc2cgKz0gJ051bSBOb3JtYWxzOiAnICsgb2xkU2l6ZSArICcgdG8gJyArIG5ld1NpemUgKyAnLCAnICsgKDEwMCAqIG5ld1NpemUgLyBvbGRTaXplKS50b0ZpeGVkKCkgKyAnICUnO1xyXG5cclxuICAgICAgbGV0IHN0ciA9IHRoaXMudG9PYmpTdHJpbmcoNik7XHJcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHN0cikudGhlbigoKSA9PiB7IGFsZXJ0KG1zZykgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcHVzaFZlYyhhcnJheTogbnVtYmVyW10sIHZlYzogZ2xWZWMzKSB7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLngpO1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy55KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBleHBvcnQoKTogVHJpYW5nbGVPYmpEYXRhIHtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFRyaWFuZ2xlT2JqRGF0YTtcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgdGhlIHRyaWFuZ2xlcyBpbnRvIGFycmF5cyB0aGF0IGNhbiBiZSB1cGxvYWRlZFxyXG4gICAgICBsZXQgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRoaXMudmVydGljZXNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRoaXMubm9ybWFsc1tpXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB2SW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5JbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuXHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMCk7XHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMSk7XHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMik7XHJcblxyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjApO1xyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjEpO1xyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XHJcbiAgICAgIGRhdGEubm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XHJcbiAgICAgIGRhdGEudkluZGljZXMgPSBuZXcgSW50MzJBcnJheSh2SW5kaWNlcyk7XHJcbiAgICAgIGRhdGEubkluZGljZXMgPSBuZXcgSW50MzJBcnJheShuSW5kaWNlcyk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gdGhpcy5ib3hNaW4uY2xvbmUoKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSB0aGlzLmJveE1heC5jbG9uZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxuXHJcblxyXG4gICBwcml2YXRlIHN0YXRpYyBkYXRhMnZlcnRleChkYXRhOiBUcmlhbmdsZU9iakRhdGEsIGluZGV4OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMF0sXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMV0sXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZGF0YTJub3JtYWwoZGF0YTogVHJpYW5nbGVPYmpEYXRhLCBpbmRleDogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBkYXRhLm5vcm1hbHNbMyAqIGluZGV4ICsgMF0sXHJcbiAgICAgICAgIGRhdGEubm9ybWFsc1szICogaW5kZXggKyAxXSxcclxuICAgICAgICAgZGF0YS5ub3JtYWxzWzMgKiBpbmRleCArIDJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGltcG9ydChkYXRhOiBUcmlhbmdsZU9iakRhdGEpOiBUcmlhbmdsZU9iaiB7XHJcbiAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqKCk7XHJcblxyXG4gICAgICAvLyByZXN0b3JlIHZlcnRpY2VzXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS52ZXJ0aWNlcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgdE9iai52ZXJ0aWNlcy5wdXNoKHRoaXMuZGF0YTJ2ZXJ0ZXgoZGF0YSwgaSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXN0b3JlIG5vcm1hbHNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLm5vcm1hbHMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIHRPYmoubm9ybWFscy5wdXNoKHRoaXMuZGF0YTJub3JtYWwoZGF0YSwgaSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXN0b3JlIHRyaWFuZ2xlc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudkluZGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpVjAgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIGxldCBpVjEgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIGxldCBpVjIgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCBpTjAgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIGxldCBpTjEgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIGxldCBpTjIgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCB0ID0gbmV3IEluZGV4ZWRUcmlhbmdsZSh0T2JqLnZlcnRpY2VzLCBpVjAsIGlWMSwgaVYyLCB0T2JqLm5vcm1hbHMsIGlOMCwgaU4xLCBpTjIpO1xyXG4gICAgICAgICB0T2JqLnRyaWFuZ2xlcy5wdXNoKHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0T2JqLmJveE1pbiA9IG5ldyBnbFZlYzMoZGF0YS5ib3hNaW4udmFsdWVzKTtcclxuICAgICAgdE9iai5ib3hNYXggPSBuZXcgZ2xWZWMzKGRhdGEuYm94TWF4LnZhbHVlcyk7XHJcblxyXG4gICAgICByZXR1cm4gdE9iajtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4vUHJvZmlsZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFN0YXR1c0Z1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbG9hZHMgYSAub2JqIGZpbGUgYW5kIGNyZWF0ZXMgdHJpYW5nbGVzIGZvciBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRmlsZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU3RhdHVzOiBTdGF0dXNGdW5jdGlvbjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzcmM6IHN0cmluZywgc3RhdHVzRnVuY3Rpb24/OiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIC8vIHJlY29yZCB0aGUgc3RhdHVzIGZ1bmN0aW9uLiBJZiBvbmUgaXMgbm90IHN1cHBsaWVkLCBjcmVhdGUgb25lIHRoYXQgZG9lcyBub3RoaW5nXHJcbiAgICAgIGlmIChzdGF0dXNGdW5jdGlvbikge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyA9IHN0YXR1c0Z1bmN0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyA9IChzdGF0dXMpID0+IHsgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wYXJzZShzcmMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlRmFjZShsaW5lOiBzdHJpbmcpOiB7IGlWOiBudW1iZXJbXSwgaU46IG51bWJlcltdIH0ge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBpVjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgICAgIGlOOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgfVxyXG4gICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgbGV0IG51bVZhbHMgPSB0b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWxzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZhbHMgPSB0b2tlbnNbaSArIDFdLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgIHJldC5pVi5wdXNoKHBhcnNlSW50KHZhbHNbMF0pIC0gMSk7XHJcbiAgICAgICAgIHJldC5pTi5wdXNoKHZhbHMubGVuZ3RoID09PSAzID8gcGFyc2VJbnQodmFsc1syXSkgLSAxIDogLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2Uoc3JjOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nJyk7XHJcbiAgICAgIGxldCB0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIGxldCBsaW5lcyA9IHNyYy5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIHAubG9nKCdzcGxpdCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAvLyByZXBvcnQgcHJvZ3Jlc3MgZXZlcnkgNTAgbXNcclxuICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0ID4gNTApIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6ICcgKyAoMTAwICogaSAvIGxpbmVzLmxlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgICAgICAgICAgdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgndiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzMoW3BhcnNlRmxvYXQodG9rZW5zWzFdKSwgcGFyc2VGbG9hdCh0b2tlbnNbMl0pLCBwYXJzZUZsb2F0KHRva2Vuc1szXSldKVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVjKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3ZuICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjMyhbcGFyc2VGbG9hdCh0b2tlbnNbMV0pLCBwYXJzZUZsb2F0KHRva2Vuc1syXSksIHBhcnNlRmxvYXQodG9rZW5zWzNdKV0pXHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHZlYyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCdmICcpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLnBhcnNlRmFjZShsaW5lKTtcclxuICAgICAgICAgICAgaWYgKHJldC5pTi5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgcmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSwgdGhpcy5ub3JtYWxzLCByZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHJldC5pVlswXSwgcmV0LmlWWzJdLCByZXQuaVZbM10sIHRoaXMubm9ybWFscywgcmV0LmlOWzBdLCByZXQuaU5bMl0sIHJldC5pTlszXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCByZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdLCB0aGlzLm5vcm1hbHMsIHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubm9ybWFscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6IDEwMCUnKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ05vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCk7XHJcbiAgICAgIHAubG9nKCdwYXJzZScpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzcGhlcmUgdXNpbmcgdHJpYW5nbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVTcGhlcmUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyB0aGUgc3BoZXJlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbnVtU3RlcHMgVGhlIG51bWJlciBvZiBiYW5kcyB1c2VkIHRvIGNvdmVyIHRoZSBzcGhlcmVcclxuICAgICogQHBhcmFtIHJhZGl1cyBUaGUgcmFkaXVzIG9mIHRoZSBzcGhlcmVcclxuICAgICogQHBhcmFtIGNlbnRlciBUaGUgY2VudGVyIG9mIHRoZSBzcGhlcmVcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihudW1TdGVwczogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY2VudGVyOiBnbFZlYzMpIHtcclxuXHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMuY3JlYXRlVmVydGljZXMobnVtU3RlcHMsIHJhZGl1cywgY2VudGVyKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0cmlhbmdsZXMgZnJvbSB0aGUgdmVydGljZXNcclxuICAgICAgdGhpcy5jb25uZWN0VmVydGljZXMobnVtU3RlcHMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIGNyZWF0ZVZlcnRpY2VzKG51bVN0ZXBzOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjZW50ZXI6IGdsVmVjMykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBnbFZlYzMoW2NlbnRlci54LCBjZW50ZXIueSArIHJhZGl1cywgY2VudGVyLnpdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAoaSA9PT0gbnVtU3RlcHMgLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtjZW50ZXIueCwgY2VudGVyLnkgLSByYWRpdXMsIGNlbnRlci56XSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgeSA9IHJhZGl1cyAqIE1hdGguY29zKGkgLyAobnVtU3RlcHMgLSAxKSAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBsZXQgciA9IHJhZGl1cyAqIE1hdGguc2luKGkgLyAobnVtU3RlcHMgLSAxKSAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gaSAlIDIgPyAwIDogKCgyICogTWF0aC5QSSkgLyBudW1TdGVwcykgKiAwLjU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bVN0ZXBzOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaChuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgICAgICAgICAgY2VudGVyLnggKyByICogTWF0aC5zaW4oKGogLyBudW1TdGVwcykgKiAyICogTWF0aC5QSSAtIG9mZnNldCksXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlci55ICsgeSxcclxuICAgICAgICAgICAgICAgICAgY2VudGVyLnogKyByICogTWF0aC5jb3MoKGogLyBudW1TdGVwcykgKiAyICogTWF0aC5QSSAtIG9mZnNldCksXHJcbiAgICAgICAgICAgICAgIF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjb25uZWN0VmVydGljZXMobnVtU3RlcHM6IG51bWJlcikge1xyXG4gICAgICBsZXQgZmlyc3QgPSAwO1xyXG4gICAgICBsZXQgbGFzdCA9IHRoaXMudmVydGljZXMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGVwcyAtIDE7IGkrKykge1xyXG4gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bVN0ZXBzOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgbGV0IGkxID0gZmlyc3Q7XHJcbiAgICAgICAgICAgICAgIGxldCBpMiA9IGogKyAxO1xyXG4gICAgICAgICAgICAgICBsZXQgaTMgPSBqID09PSAobnVtU3RlcHMgLSAxKSA/IDEgOiBpMiArIDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpMiwgaTMsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IG51bVN0ZXBzIC0gMikge1xyXG4gICAgICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGxhc3QgLSBudW1TdGVwcztcclxuICAgICAgICAgICAgICAgbGV0IGkxID0gbGFzdDtcclxuICAgICAgICAgICAgICAgbGV0IGkyID0gc3RhcnRJbmRleCArIGo7XHJcbiAgICAgICAgICAgICAgIGxldCBpMyA9IGogPT09IChudW1TdGVwcyAtIDEpID8gc3RhcnRJbmRleCA6IGkyICsgMTtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkzLCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGxldCBzdGFydEEgPSAxICsgKGkgLSAxKSAqIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBsZXQgc3RhcnRCID0gMSArIGkgKiBudW1TdGVwcztcclxuICAgICAgICAgICAgICAgbGV0IGkxID0gc3RhcnRBICsgajtcclxuICAgICAgICAgICAgICAgbGV0IGkyID0gKGogPT09IChudW1TdGVwcyAtIDEpKSA/IHN0YXJ0QSA6IGkxICsgMTtcclxuICAgICAgICAgICAgICAgbGV0IGkzID0gc3RhcnRCICsgajtcclxuICAgICAgICAgICAgICAgbGV0IGk0ID0gKGogPT09IChudW1TdGVwcyAtIDEpKSA/IHN0YXJ0QiA6IGkzICsgMTtcclxuICAgICAgICAgICAgICAgaWYgKGkgJSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkxLCBpNCwgaTIsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCBpMSwgaTMsIGk0LCB0aGlzLm5vcm1hbHMpKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgaTEsIGkzLCBpMiwgdGhpcy5ub3JtYWxzKSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIGkyLCBpMywgaTQsIHRoaXMubm9ybWFscykpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZW5kZXJNb2RlIH0gZnJvbSBcIi4vUGF0aFRyYWNlclJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IFNwaGVyaWNhbENvb3JkIH0gZnJvbSBcIi4vU3BoZXJpY2FsQ29vcmRcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBmb3IgdGhlIHVuaWZvcm0gdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElVbmlmb3JtcyB7XHJcbiAgIHVTY2FsZTogbnVtYmVyO1xyXG4gICB1WE9mZnNldDogbnVtYmVyO1xyXG4gICB1WU9mZnNldDogbnVtYmVyO1xyXG4gICB1TW9kZTogUmVuZGVyTW9kZTtcclxuICAgdU1heENocm9tYTogbnVtYmVyO1xyXG5cclxuICAgdUhpZ2hsaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1TGlnaHRMaWdodENvbG9yOiBnbENvbG9yO1xyXG4gICB1TWlkTGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdURhcmtMaWdodENvbG9yOiBnbENvbG9yO1xyXG5cclxuICAgdVNoYWRvd0NvbG9yOiBnbENvbG9yO1xyXG4gICB1UmVmbGVjdGVkTGlnaHRDb2xvcjogZ2xDb2xvcjtcclxuICAgdURhcmtBY2NlbnRDb2xvcjogZ2xDb2xvcjtcclxuXHJcbiAgIHVMaWdodEFscGhhOiBudW1iZXI7XHJcbiAgIHVTaGFkb3dBbHBoYTogbnVtYmVyO1xyXG5cclxuICAgdUxpZ2h0SW50ZW5zaXR5OiBudW1iZXIsXHJcbiAgIHVMaWdodENvbG9yOiBnbENvbG9yLFxyXG4gICB1TGlnaHRQb3M6IGdsVmVjMyxcclxuICAgdUFtYmllbnRMaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICB1T2JqQ29sb3I6IGdsQ29sb3IsXHJcbiAgIHVCYWxsUmFkaXVzOiBudW1iZXIsXHJcbiAgIHVFeWU6IGdsVmVjMyxcclxuICAgdVRleHR1cmVTaXplOiBudW1iZXIsXHJcbiAgIHVSYW5kb206IG51bWJlcixcclxuICAgdVJheTAwOiBnbFZlYzMsXHJcbiAgIHVSYXkwMTogZ2xWZWMzLFxyXG4gICB1UmF5MTA6IGdsVmVjMyxcclxuICAgdVJheTExOiBnbFZlYzMsXHJcbiAgIHVTYW1wbGU6IG51bWJlcixcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbHVlcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGxldCBVbmlmb3JtczogSVVuaWZvcm1zID0ge1xyXG4gICB1U2NhbGU6IDEuMCxcclxuICAgdVhPZmZzZXQ6IDAuMCxcclxuICAgdVlPZmZzZXQ6IDAuMCxcclxuICAgdU1vZGU6IDAsXHJcbiAgIHVNYXhDaHJvbWE6IDEuMCxcclxuXHJcbiAgIHVIaWdobGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG4gICB1TGlnaHRMaWdodENvbG9yOiB1bmRlZmluZWQsXHJcbiAgIHVNaWRMaWdodENvbG9yOiB1bmRlZmluZWQsXHJcbiAgIHVEYXJrTGlnaHRDb2xvcjogdW5kZWZpbmVkLFxyXG5cclxuICAgdVNoYWRvd0NvbG9yOiB1bmRlZmluZWQsXHJcbiAgIHVSZWZsZWN0ZWRMaWdodENvbG9yOiB1bmRlZmluZWQsXHJcbiAgIHVEYXJrQWNjZW50Q29sb3I6IHVuZGVmaW5lZCxcclxuXHJcbiAgIHVMaWdodEFscGhhOiAxMDAxLFxyXG4gICB1U2hhZG93QWxwaGE6IDEwMDAsXHJcblxyXG4gICB1TGlnaHRJbnRlbnNpdHk6IDAuNyxcclxuICAgdUxpZ2h0Q29sb3I6IG5ldyBnbENvbG9yKFsxLjAsIDEuMCwgMS4wXSksXHJcbiAgIHVMaWdodFBvczogbmV3IGdsVmVjMyhuZXcgU3BoZXJpY2FsQ29vcmQoMiwgNjAsIDExMCkudG9YWVooKSksXHJcbiAgIHVBbWJpZW50TGlnaHRJbnRlbnNpdHk6IDAuMyxcclxuICAgdU9iakNvbG9yOiBuZXcgZ2xDb2xvcihbMC41LCAwLjUsIDAuOF0pLFxyXG4gICB1QmFsbFJhZGl1czogMC41LFxyXG4gICB1RXllOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVUZXh0dXJlU2l6ZTogMjU2LFxyXG4gICB1UmFuZG9tOiBNYXRoLnJhbmRvbSgpLFxyXG4gICB1UmF5MDA6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVJheTAxOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHVSYXkxMDogbmV3IGdsVmVjMyhbMCwgMCwgMF0pLFxyXG4gICB1UmF5MTE6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgdVNhbXBsZTogMC4wLFxyXG59XHJcbiIsImltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5cclxuY29uc3QgTUFYID0gMTAwMDsgLy8gSU5GSU5JVFkgaW4gb3VyIHJlbmRlcmluZyB3b3JsZFxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbWFuYWdlcyBhIHNldCBvZiB0cmlhbmdsZXMgd2l0aGluIGEgZ2l2ZW4gc3BhY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWb2x1bWUge1xyXG4gICAvKipcclxuICAgICogVGhlIHRyaWFuZ2xlcyBlbmNsb3NlZCB3aXRoaW4gdGhlIGJvdW5kaW5nIGJveFxyXG4gICAgKi9cclxuICAgcHVibGljIHRyaWFuZ2xlczogSW5kZXhlZFRyaWFuZ2xlW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCb3VuZGluZyBib3ggbWluaW11bVxyXG4gICAgKi9cclxuICAgcHVibGljIGJveE1pbiA9IG5ldyBnbFZlYzMoW01BWCwgTUFYLCBNQVhdKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCb3VuZGluZyBib3ggbWF4aW11bVxyXG4gICAgKi9cclxuICAgcHVibGljIGJveE1heCA9IG5ldyBnbFZlYzMoWy1NQVgsIC1NQVgsIC1NQVhdKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSB0cmlhbmdsZSBhbmQgdXBkYXRlcyB0aGUgYm91bmRpbmcgYm94XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdHJpYW5nbGUgVGhlIHRyaWFuZ2xlIHRvIHN0b3JlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcHVzaCh0cmlhbmdsZTogSW5kZXhlZFRyaWFuZ2xlKSB7XHJcblxyXG4gICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKHRyaWFuZ2xlKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueCA9IE1hdGgubWluKHRoaXMuYm94TWluLngsIHRyaWFuZ2xlLm1pblgpO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueSwgdHJpYW5nbGUubWluWSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSBNYXRoLm1pbih0aGlzLmJveE1pbi56LCB0cmlhbmdsZS5taW5aKTtcclxuICAgICAgdGhpcy5ib3hNYXgueCA9IE1hdGgubWF4KHRoaXMuYm94TWF4LngsIHRyaWFuZ2xlLm1heFgpO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdHJpYW5nbGUubWF4WSk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSBNYXRoLm1heCh0aGlzLmJveE1heC56LCB0cmlhbmdsZS5tYXhaKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIGEgV2ViR2wgQnVmZmVyIGFuZCBBdHRyaWJ1dGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbEJ1ZmZlciB7XHJcbiAgIHByaXZhdGUgYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgcHJpdmF0ZSBhdHRyaWJ1dGVMb2NhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHByb2dyYW06IFdlYkdMUHJvZ3JhbSwgYXR0cmlidXRlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyaWJ1dGVOYW1lKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwbG9hZCh2ZXJ0aWNlczogbnVtYmVyW10pIHtcclxuICAgICAgdGhpcy5iaW5kKCk7XHJcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYmluZCgpIHtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVMb2NhdGlvbik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcbiAgICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb24sXHJcbiAgICAgICAgIDMsICAgICAgICAgICAgICAgIC8vIHNpemVcclxuICAgICAgICAgZ2wuRkxPQVQsICAgICAgICAgLy8gdHlwZVxyXG4gICAgICAgICBmYWxzZSwgICAgICAgICAgICAvLyBub3JtYWxpemVkXHJcbiAgICAgICAgIDAsICAgICAgICAgICAgICAgIC8vIHN0cmlkZVxyXG4gICAgICAgICAwICAgICAgICAgICAgICAgICAvLyBvZmZzZXRcclxuICAgICAgKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBodG1sQ29sb3IgfSBmcm9tIFwiLi9odG1sQ29sb3JcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogQ29sb3IgY2xhc3MgdGhhdCByZXF1aXJlcyBSR0IgdmFsdWVzIHRvIGJlIGJldHdlZW4gMCBhbmQgMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMSkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yICdyJyB2YWx1ZSAoZXhwZWN0ZWQgWzAtMV0pXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2xvclsxXSA8IDAgfHwgY29sb3JbMV0gPiAxKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0xXSlcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbG9yWzJdIDwgMCB8fCBjb2xvclsyXSA+IDEpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYicgdmFsdWUgKGV4cGVjdGVkIFswLTFdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhbiBnbENvbG9yIG9iamVjdCB1c2luZyB2YWx1ZXMgaW4gYSBDb2xvciBvYmplY3QuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gY29sb3IgQSBnZW5lcmljIENvbG9yIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IGdsQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGNsYW1wKGNvbG9yLnIsIDAsIDEpO1xyXG4gICAgICBsZXQgZyA9IGNsYW1wKGNvbG9yLmcsIDAsIDEpO1xyXG4gICAgICBsZXQgYiA9IGNsYW1wKGNvbG9yLmIsIDAsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3IGdsQ29sb3IoW3IsIGcsIGJdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxpZ2h0ZXIgb2YgdHdvIGNvbG9yc1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGMxIFRoZSBmaXJzdCBjb2xvci5cclxuICAgICogQHBhcmFtIGMyIFRoZSBzZWNvbmQgY29sb3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBsaWdodGVzdCBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbGlnaHRlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPiBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGRhcmtlciBvZiB0d28gY29sb3JzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYzEgVGhlIGZpcnN0IGNvbG9yLlxyXG4gICAgKiBAcGFyYW0gYzIgVGhlIHNlY29uZCBjb2xvci5cclxuICAgICogQHJldHVybnMgVGhlIGRhcmtlc3QgY29sb3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGRhcmtlc3QoYzE6IGdsQ29sb3IsIGMyOiBnbENvbG9yKTogZ2xDb2xvciB7XHJcbiAgICAgIC8vIFRPRE86IHVzZSBsdW1pbm9zaXR5IGluc3RlYWQ/XHJcbiAgICAgIGlmIChjMS5yICsgYzEuZyArIGMxLmIgPCBjMi5yICsgYzIuZyArIGMyLmIpIHtcclxuICAgICAgICAgcmV0dXJuIGMxO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gYzI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGFuIGh0bWwgY29sb3Igb2JqZWN0ICgwLTI1NSBiYXNlZCkuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiBodG1sQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvSHRtbENvbG9yKCk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByID0gTWF0aC5yb3VuZCgyNTUgKiB0aGlzLnIpO1xyXG4gICAgICBsZXQgZyA9IE1hdGgucm91bmQoMjU1ICogdGhpcy5nKTtcclxuICAgICAgbGV0IGIgPSBNYXRoLnJvdW5kKDI1NSAqIHRoaXMuYik7XHJcbiAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBhZGRzIHRlbXBlcmF0dXJlIHRvIGEgQ29sb3Igb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSBleHRlbmRzIGdsQ29sb3Ige1xyXG4gICAvKipcclxuICAgICogVGVtcGVyYXR1cmUgaW4gS2VsdmluXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIF90ZW1wZXJhdHVyZTogbnVtYmVyO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHRlbXBlcmF0dXJlIGluIEtlbHZpblxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB0ZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCIGNvbG9yIGFycmF5XHJcbiAgICAqIEBwYXJhbSB0ZW1wZXJhdHVyZSBUZW1wZXJhdHVyZSBpbiBLZWx2aW5cclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoY29sb3I6IG51bWJlcltdLCB0ZW1wZXJhdHVyZTogbnVtYmVyKSB7XHJcbiAgICAgIHN1cGVyKGNvbG9yKTtcclxuICAgICAgdGhpcy5fdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEtub3duIGNvbG9yIHZhbHVlcy4gRm9yIG90aGVyIHJlcXVlc3RzIHRoZSBjbGFzcyB3aWxsIHJldHVybiBpbnRlcnBvbGF0ZWQgdmFsdWVzXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjb2xvcnM6IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmVbXSA9IFtcclxuICAgICAgbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoWzI1NSAvIDI1NSwgMTQ3IC8gMjU1LCA0MSAvIDI1NV0sIDE5MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAxOTcgLyAyNTUsIDE0MyAvIDI1NV0sIDI2MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyMTQgLyAyNTUsIDE3MCAvIDI1NV0sIDI4NTApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNDEgLyAyNTUsIDIyNCAvIDI1NV0sIDMyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTAgLyAyNTUsIDI0NCAvIDI1NV0sIDUyMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1MSAvIDI1NV0sIDU0MDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjU1IC8gMjU1LCAyNTUgLyAyNTUsIDI1NSAvIDI1NV0sIDYwMDApLCAvLyBkYXlsaWdodFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbMjAxIC8gMjU1LCAyMjYgLyAyNTUsIDI1NSAvIDI1NV0sIDcwMDApLFxyXG4gICAgICBuZXcgZ2xDb2xvcldpdGhUZW1wZXJhdHVyZShbNjQgLyAyNTUsIDE1NiAvIDI1NSwgMjU1IC8gMjU1XSwgMjAwMDApLFxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgZGF5bGlnaHQoKTogZ2xDb2xvcldpdGhUZW1wZXJhdHVyZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSg2MDAwKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG1pbmltdW0gc3VwcG9ydGVkIHRlbXBlcmF0dXJlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGVtcGVyYXR1cmUgdmFsdWUgaW4gS2VsdmluLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBnZXQgbWluVGVtcGVyYXR1cmUoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JzWzBdLnRlbXBlcmF0dXJlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbWF4aW11bSBzdXBwb3J0ZWQgdGVtcGVyYXR1cmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0ZW1wZXJhdHVyZSB2YWx1ZSBpbiBLZWx2aW4uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBtYXhUZW1wZXJhdHVyZSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV0udGVtcGVyYXR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIGEgQ29sb3IgbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCB0ZW1wZXJhdHVyZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRlbXBlcmF0dXJlIHZhbHVlIGluIEtlbHZpbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHRlbXBlcmF0dXJlOiBudW1iZXIpOiBnbENvbG9yV2l0aFRlbXBlcmF0dXJlIHtcclxuXHJcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA8PSB0aGlzLm1pblRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0ZW1wZXJhdHVyZSA+PSB0aGlzLm1heFRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yc1t0aGlzLmNvbG9ycy5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yMSA9IHRoaXMuY29sb3JzW2ldO1xyXG4gICAgICAgICAgICBsZXQgY29sb3IyID0gdGhpcy5jb2xvcnNbaSArIDFdO1xyXG4gICAgICAgICAgICBpZiAodGVtcGVyYXR1cmUgPj0gY29sb3IxLnRlbXBlcmF0dXJlICYmIHRlbXBlcmF0dXJlIDw9IGNvbG9yMi50ZW1wZXJhdHVyZSkge1xyXG4gICAgICAgICAgICAgICBsZXQgcmF0aW8gPSAodGVtcGVyYXR1cmUgLSBjb2xvcjEudGVtcGVyYXR1cmUpIC8gKGNvbG9yMi50ZW1wZXJhdHVyZSAtIGNvbG9yMS50ZW1wZXJhdHVyZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yMS5yICsgcmF0aW8gKiAoY29sb3IyLnIgLSBjb2xvcjEucik7XHJcbiAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IxLmcgKyByYXRpbyAqIChjb2xvcjIuZyAtIGNvbG9yMS5nKTtcclxuICAgICAgICAgICAgICAgbGV0IGIgPSBjb2xvcjEuYiArIHJhdGlvICogKGNvbG9yMi5iIC0gY29sb3IxLmIpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gbmV3IGdsQ29sb3JXaXRoVGVtcGVyYXR1cmUoW3IsIGcsIGJdLCB0ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc2hvdWxkbid0IGdldCBoZXJlLCBidXQgaWYgd2UgZG8sIHJldHVybiB0aGUgbGFzdCBjb2xvclxyXG4gICAgICAgICByZXR1cm4gdGhpcy5jb2xvcnNbdGhpcy5jb2xvcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSB3cmFwcGVyIGZvciBjb21waWxpbmcgV2ViR0wgc2hhZGVyIHByb2dyYW1zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xDb21waWxlciB7XHJcblxyXG4gICAvKipcclxuICAgICogdXNlIHN0YXRpYyBmdW5jdGlvbnMgb25seVxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXBpbGVzIGEgc2hhZGVyIHByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB0eXBlIFRoZSBzaGFkZXIgdHlwZVxyXG4gICAgKiBAdGhyb3dzIGlmIHRoZSBjb21waWxhdGlvbiBmYWlsc1xyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBzdGF0aWMgY29tcGlsZVNoYWRlcihzb3VyY2U6IHN0cmluZywgdHlwZTogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coc291cmNlKTtcclxuICAgICAgICAgdGhyb3cgJ2NvbXBpbGUgZXJyb3I6ICcgKyBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXBpbGVzIGFuZCBsaW5rcyB2ZXJ0ZXggYW5kIGZyYWdtZW50IHNoYWRlcnMgaW50byBhIHByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZXJ0ZXhTb3VyY2UgVmVydGV4IHNoYWRlciBzb3VyY2VcclxuICAgICogQHBhcmFtIGZyYWdtZW50U291cmNlIEZyYWdtZW50IHNoYWRlciBzb3VyY2VcclxuICAgICogQHJldHVybnMgdGhlIHByb2dyYW0gaWRcclxuICAgICogQHRocm93cyBpZiB0aGUgY29tcGlsYXRpb24gZmFpbHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZSh2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZykge1xyXG4gICAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGdsQ29tcGlsZXIuY29tcGlsZVNoYWRlcihmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKSk7XHJcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdsaW5rIGVycm9yOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsVmVjNCwgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgdG9EZWcsIHRvUmFkIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgbWF0cml4IGZvciB1c2UgaW4gV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsTWF0NCB7XHJcbiAgIC8qKiBUaGUgbWF0cml4IHZhbHVlIHN0b3JlZCBhcyBhIDE2IGVsZW1lbnQgYXJyYXkgKi9cclxuICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlcyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgbWF0cml4IHZhbHVlcy4gSWYgbm90IHN1cHBsaWVkLCB0aGUgbWF0cml4IGlzIFxyXG4gICAgKiBpbml0aWFsaXplZCBhcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWVzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldCdzIGFuIGlkZW50aXR5IG1hdHJpeC4gU2FtZSBhcyBjcmVhdGluZyBhIG5ldyBtYXRyaXgsIGJ1dCBzeW50YWN0aWNhbGx5XHJcbiAgICAqIHNob3dzIHdoYXQgaXMgaGFwcGVuaW5nLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBuZXcgaWRlbml0eSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IGdsTWF0NCB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xNYXQ0IHtcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgdmFsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYSB2ZWN0b3IgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3Rvci5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdFYodmVjOiBnbFZlYzQpOiBnbFZlYzQge1xyXG4gICAgICBsZXQgdmFsczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbcm93ICogNCArIGNvbF0gKiB2ZWMudmFsdWVzW2NvbF07XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdmFscy5wdXNoKHN1bSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzQodmFscyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYW5vdGhlciBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgbWF0cml4LlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0TShvdGhlcjogZ2xNYXQ0KTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZ2V0KHJvdywgaSkgKiBvdGhlci5nZXQoaSwgY29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCBzdW0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBJbnZlcnRzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgKHRoaXMpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhpcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBpbnZlcnQoKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBsZXQgYTAwID0gdGhpcy52YWx1ZXNbMF0sIGEwMSA9IHRoaXMudmFsdWVzWzFdLCBhMDIgPSB0aGlzLnZhbHVlc1syXSwgYTAzID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIGxldCBhMTAgPSB0aGlzLnZhbHVlc1s0XSwgYTExID0gdGhpcy52YWx1ZXNbNV0sIGExMiA9IHRoaXMudmFsdWVzWzZdLCBhMTMgPSB0aGlzLnZhbHVlc1s3XTtcclxuICAgICAgbGV0IGEyMCA9IHRoaXMudmFsdWVzWzhdLCBhMjEgPSB0aGlzLnZhbHVlc1s5XSwgYTIyID0gdGhpcy52YWx1ZXNbMTBdLCBhMjMgPSB0aGlzLnZhbHVlc1sxMV07XHJcbiAgICAgIGxldCBhMzAgPSB0aGlzLnZhbHVlc1sxMl0sIGEzMSA9IHRoaXMudmFsdWVzWzEzXSwgYTMyID0gdGhpcy52YWx1ZXNbMTRdLCBhMzMgPSB0aGlzLnZhbHVlc1sxNV07XHJcblxyXG4gICAgICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xyXG4gICAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xyXG4gICAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xyXG4gICAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xyXG4gICAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xyXG4gICAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xyXG4gICAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xyXG4gICAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xyXG4gICAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxyXG4gICAgICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgaWYgKCFkZXQpIHtcclxuICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgcmVzdWx0LnZhbHVlc1swXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1szXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XHJcbiAgICAgIHJlc3VsdC52YWx1ZXNbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcclxuICAgICAgcmVzdWx0LnZhbHVlc1s5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xyXG4gICAgICByZXN1bHQudmFsdWVzWzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRyYW5zcG9zZXMgdGhpcyBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIG5ldyBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNwb3NlZCBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJhbnNwb3NlKCk6IGdsTWF0NCB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCB0aGlzLmdldChjb2wsIHJvdykpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSBzY2FsZSBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gc2NhbGUgVGhlIHNjYWxlIGZhY3RvclxyXG4gICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tU2NhbGUoc2NhbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIHNjYWxlLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBzY2FsZSwgMCwgMCxcclxuICAgICAgICAgMCwgMCwgc2NhbGUsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbWF0cml4IHRoYXQgY29udGFpbnMgYSB0cmFuc2xhdGlvbiBvcGVyYXRpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB0cmFuc2xhdGlvbnMuXHJcbiAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21UcmFuc2xhdGlvbih2OiBnbFZlYzMpOiBnbE1hdDQge1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCB2LngsXHJcbiAgICAgICAgIDAsIDEsIDAsIHYueSxcclxuICAgICAgICAgMCwgMCwgMSwgdi56LFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Sb3RYKGFuZ2xlOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSlcclxuICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSlcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQoW1xyXG4gICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAwLCAtcywgYywgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tUm90WShhbmdsZTogbnVtYmVyKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpXHJcbiAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgYywgMCwgLXMsIDAsXHJcbiAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVJvdFooYW5nbGU6IG51bWJlcik6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKVxyXG4gICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKVxyXG4gICAgICByZXR1cm4gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIGMsIHMsIDAsIDAsXHJcbiAgICAgICAgIC1zLCBjLCAwLCAwLFxyXG4gICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcm90WChhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21Sb3RYKGFuZ2xlKS5tdWx0TSh0aGlzKS52YWx1ZXM7XHJcbiAgIH1cclxuICAgcHVibGljIHJvdFkoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tUm90WShhbmdsZSkubXVsdE0odGhpcykudmFsdWVzO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RaKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSBnbE1hdDQuZnJvbVJvdFooYW5nbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgdHJhbnNsYXRlKG9mZnNldDogZ2xWZWMzKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gZ2xNYXQ0LmZyb21UcmFuc2xhdGlvbihvZmZzZXQpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG4gICBwdWJsaWMgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IGdsTWF0NC5mcm9tU2NhbGUoc2NhbGUpLm11bHRNKHRoaXMpLnZhbHVlcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSB2aWV3aW5nIG1hdHJpeC4gU2VlIGdsdUxvb2tBdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBleWUgVGhlIGV5ZSBwb3NpdGlvbi5cclxuICAgICogQHBhcmFtIGNlbnRlciBUaGUgcG9pbnQgb2YgaW50ZXJlc3QuXHJcbiAgICAqIEBwYXJhbSB1cCBUaGUgdXAgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmlld2luZyBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VMb29rQXQoZXllOiBnbFZlYzMsIGNlbnRlcjogZ2xWZWMzLCB1cDogZ2xWZWMzLCApOiBnbE1hdDQge1xyXG5cclxuICAgICAgbGV0IGEgPSBleWUuc3VidHJhY3QoY2VudGVyKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGIgPSB1cC5jcm9zcyhhKS5ub3JtYWxpemUoKTtcclxuICAgICAgbGV0IGMgPSBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgbGV0IG0gPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgYi54LCBiLnksIGIueiwgMCxcclxuICAgICAgICAgYy54LCBjLnksIGMueiwgMCxcclxuICAgICAgICAgYS54LCBhLnksIGEueiwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHZhciB0ID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIDEsIDAsIDAsIC1leWUueCxcclxuICAgICAgICAgMCwgMSwgMCwgLWV5ZS55LFxyXG4gICAgICAgICAwLCAwLCAxLCAtZXllLnosXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbS5tdWx0TSh0KTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1UGVyc3BlY3RpdmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZm92eSBGaWVsZCBvZiB2aWV3IChpbiBkZWdyZWVzKS5cclxuICAgICogQHBhcmFtIGFzcGVjdCBWaWV3IGFzcGVjdCByYXRpby5cclxuICAgICogQHBhcmFtIHpuZWFyIE5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIEZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZVBlcnNwZWN0aXZlKFxyXG4gICAgICBmb3Z5OiBudW1iZXIsXHJcbiAgICAgIGFzcGVjdDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIHltYXggPSB6bmVhciAqIE1hdGgudGFuKGZvdnkgKiBNYXRoLlBJIC8gMzYwLjApO1xyXG4gICAgICB2YXIgeW1pbiA9IC15bWF4O1xyXG4gICAgICB2YXIgeG1pbiA9IHltaW4gKiBhc3BlY3Q7XHJcbiAgICAgIHZhciB4bWF4ID0geW1heCAqIGFzcGVjdDtcclxuXHJcbiAgICAgIHJldHVybiBnbE1hdDQubWFrZUZydXN0dW0oeG1pbiwgeG1heCwgeW1pbiwgeW1heCwgem5lYXIsIHpmYXIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdUZydXN0dW0uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIGJvdHRvbSBUaGUgYm90dG9tIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6bmVhciBUaGUgbmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgVGhlIGZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHJldHVybnMgdGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZUZydXN0dW0oXHJcbiAgICAgIGxlZnQ6IG51bWJlcixcclxuICAgICAgcmlnaHQ6IG51bWJlcixcclxuICAgICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICAgIHRvcDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIFggPSAyICogem5lYXIgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIFkgPSAyICogem5lYXIgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEEgPSAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgQiA9ICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBDID0gLSh6ZmFyICsgem5lYXIpIC8gKHpmYXIgLSB6bmVhcik7XHJcbiAgICAgIHZhciBEID0gLTIgKiB6ZmFyICogem5lYXIgLyAoemZhciAtIHpuZWFyKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgWCwgMCwgQSwgMCxcclxuICAgICAgICAgMCwgWSwgQiwgMCxcclxuICAgICAgICAgMCwgMCwgQywgRCxcclxuICAgICAgICAgMCwgMCwgLTEsIDBcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcsIGRpZ2l0czogbnVtYmVyID0gMikge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IDQ7IHIrKykge1xyXG4gICAgICAgICBsZXQgbGluZSA9IFwiXCI7XHJcbiAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XHJcbiAgICAgICAgICAgIGxpbmUgKz0gdGhpcy5nZXQociwgYykudG9GaXhlZChkaWdpdHMpICsgJyAnO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGxpbmUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IGdsQnVmZmVyIH0gZnJvbSBcIi4vZ2xCdWZmZXJcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IGdsVW5pZm9ybSB9IGZyb20gXCIuL2dsVW5pZm9ybVwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xPYmplY3Qge1xyXG4gICBwcml2YXRlIHRPYmo6IFRyaWFuZ2xlT2JqO1xyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB2ZXJ0ZXhCdWZmZXI6IGdsQnVmZmVyO1xyXG4gICBwcml2YXRlIG5vcm1hbEJ1ZmZlcjogZ2xCdWZmZXI7XHJcbiAgIHByaXZhdGUgbW9kZWwgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodE9iajogVHJpYW5nbGVPYmosIHByb2dyYW06IFdlYkdMUHJvZ3JhbSkge1xyXG5cclxuICAgICAgdGhpcy50T2JqID0gdE9iajtcclxuICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBidWZmZXJzIChhbmQgYXNzb2NpYXRlZCBhdHRyaWJ1dGVzKVxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG5ldyBnbEJ1ZmZlcihwcm9ncmFtLCAnYVZlcnRleCcpO1xyXG4gICAgICB0aGlzLm5vcm1hbEJ1ZmZlciA9IG5ldyBnbEJ1ZmZlcihwcm9ncmFtLCAnYU5vcm1hbCcpO1xyXG5cclxuICAgICAgdGhpcy51cGxvYWRUcmlhbmdsZXMoKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJvdFgoYW5nbGU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm1vZGVsLnJvdFgoYW5nbGUpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyByb3RZKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbC5yb3RZKGFuZ2xlKTtcclxuICAgfVxyXG4gICBwdWJsaWMgcm90WihhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWwucm90WihhbmdsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbC5zY2FsZShzY2FsZSk7XHJcbiAgIH1cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG4gICAgICB0aGlzLm1vZGVsLnRyYW5zbGF0ZShvZmZzZXQpO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBjbGVhclRyYW5zZm9ybXMoKSB7XHJcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgZ2xNYXQ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcHVzaFZlYyhhcnJheTogbnVtYmVyW10sIHZlYzogZ2xWZWMzKSB7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLngpO1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy55KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGxvYWRUcmlhbmdsZXMoKSB7XHJcblxyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICAvLyBjb252ZXJ0IHRoZSB0cmlhbmdsZXMgaW50byBhcnJheXMgdGhhdCBjYW4gYmUgdXBsb2FkZWRcclxuICAgICAgbGV0IHZlcnRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBsZXQgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRPYmoudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRPYmoudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRyaS52MCk7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyh2ZXJ0aWNlcywgdHJpLnYxKTtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKHZlcnRpY2VzLCB0cmkudjIpO1xyXG5cclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRyaS5uMCk7XHJcbiAgICAgICAgIHRoaXMucHVzaFZlYyhub3JtYWxzLCB0cmkubjEpO1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWMobm9ybWFscywgdHJpLm4yKTtcclxuICAgICAgfVxyXG4gICAgICBwLmxvZygndG8gZ2xWZWNbXScpO1xyXG5cclxuICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIudXBsb2FkKHZlcnRpY2VzKTtcclxuICAgICAgdGhpcy5ub3JtYWxCdWZmZXIudXBsb2FkKG5vcm1hbHMpO1xyXG4gICAgICBwLmxvZygndXBsb2FkJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkcmF3KCkge1xyXG5cclxuICAgICAgbGV0IHVuaSA9IG5ldyBnbFVuaWZvcm0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgdW5pLnNldCgnbW9kZWwnLCB0aGlzLm1vZGVsLnRyYW5zcG9zZSgpKTtcclxuXHJcbiAgICAgIHRoaXMudmVydGV4QnVmZmVyLmJpbmQoKTtcclxuICAgICAgdGhpcy5ub3JtYWxCdWZmZXIuYmluZCgpO1xyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgdGhpcy50T2JqLnRyaWFuZ2xlcy5sZW5ndGggKiAzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuICAgICAgdGhpcy50T2JqLm9wdGltaXplKG5vcm1hbFR5cGUpO1xyXG4gICAgICB0aGlzLnVwbG9hZFRyaWFuZ2xlcygpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBnbCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEZyYW1lQnVmZmVyU3R5bGUge1xyXG4gICBOb3JtYWwsXHJcbiAgIERlcHRoLFxyXG4gICBGbG9hdFxyXG59XHJcblxyXG4vKipcclxuICogQSBmcmFtZSBidWZmZXIgdGhhdCBjYW4gYmUgcmVuZGVyZWQgdG9cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFRleHR1cmVGcmFtZUJ1ZmZlciB7XHJcblxyXG4gICBwdWJsaWMgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XHJcbiAgIHB1YmxpYyBjb2xvclRleHR1cmU6IFdlYkdMVGV4dHVyZTtcclxuICAgcHVibGljIGRlcHRoVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIGZyYW1lIGJ1ZmZlciBmb3IgcmVuZGVyaW5nIGludG8gdGV4dHVyZSBvYmplY3RzLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCAoaW4gcGl4ZWxzKSBvZiB0aGUgcmVuZGVyaW5nIChtdXN0IGJlIHBvd2VyIG9mIDIpXHJcbiAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCAoaW4gcGl4ZWxzKSBvZiB0aGUgcmVuZGVyaW5nIChtdXN0IGJlIHBvd2VyIG9mIDIpXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHN0eWxlOiBGcmFtZUJ1ZmZlclN0eWxlKSB7XHJcblxyXG4gICAgICBzd2l0Y2ggKHN0eWxlKSB7XHJcbiAgICAgICAgIGNhc2UgRnJhbWVCdWZmZXJTdHlsZS5Ob3JtYWw6XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgIGNhc2UgRnJhbWVCdWZmZXJTdHlsZS5EZXB0aDpcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZXB0aCh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICBjYXNlIEZyYW1lQnVmZmVyU3R5bGUuRmxvYXQ6XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRmxvYXQod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgY3JlYXRlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAvLyBTdGVwIDE6IENyZWF0ZSBhIGZyYW1lIGJ1ZmZlciBvYmplY3RcclxuICAgICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcblxyXG4gICAgICAvLyBTdGVwIDI6IENyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIHRleHR1cmUgYnVmZmVyIHRvIGhvbGQgdGhlIGNvbG9ycy5cclxuICAgICAgdGhpcy5jb2xvclRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuY29sb3JUZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLFxyXG4gICAgICAgICBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBudWxsKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcblxyXG4gICAgICAvLyBTdGVwIDQ6IEF0dGFjaCB0aGUgc3BlY2lmaWMgYnVmZmVycyB0byB0aGUgZnJhbWUgYnVmZmVyLlxyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMuY29sb3JUZXh0dXJlLCAwKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNTogVmVyaWZ5IHRoYXQgdGhlIGZyYW1lIGJ1ZmZlciBpcyB2YWxpZC5cclxuICAgICAgbGV0IHN0YXR1cyA9IGdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoZ2wuRlJBTUVCVUZGRVIpO1xyXG4gICAgICBpZiAoc3RhdHVzICE9PSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURSkge1xyXG4gICAgICAgICBsZXQgbXNnID0gXCJUaGUgY3JlYXRlZCBmcmFtZSBidWZmZXIgaXMgaW52YWxpZDogXCIgKyBzdGF0dXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgYWxlcnQobXNnKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVW5iaW5kIHRoZXNlIG5ldyBvYmplY3RzLCB3aGljaCBtYWtlcyB0aGUgZGVmYXVsdCBmcmFtZSBidWZmZXIgdGhlXHJcbiAgICAgIC8vIHRhcmdldCBmb3IgcmVuZGVyaW5nLlxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBjcmVhdGVEZXB0aCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICBsZXQgZGVwdGhfdGV4dHVyZV9leHRlbnNpb24gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlcHRoX3RleHR1cmUnKTtcclxuICAgICAgaWYgKCFkZXB0aF90ZXh0dXJlX2V4dGVuc2lvbikge1xyXG4gICAgICAgICBhbGVydCgnVGhpcyBXZWJHTCBwcm9ncmFtIHJlcXVpcmVzIHRoZSB1c2Ugb2YgdGhlIFdFQkdMX2RlcHRoX3RleHR1cmUgZXh0ZW5zaW9uLicpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFN0ZXAgMTogQ3JlYXRlIGEgZnJhbWUgYnVmZmVyIG9iamVjdFxyXG4gICAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMjogQ3JlYXRlIGFuZCBpbml0aWFsaXplIGEgdGV4dHVyZSBidWZmZXIgdG8gaG9sZCB0aGUgY29sb3JzLlxyXG4gICAgICB0aGlzLmNvbG9yVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsXHJcbiAgICAgICAgIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMzogQ3JlYXRlIGFuZCBpbml0aWFsaXplIGEgdGV4dHVyZSBidWZmZXIgdG8gaG9sZCB0aGUgZGVwdGggdmFsdWVzLlxyXG4gICAgICAvLyBOb3RlOiB0aGUgV0VCR0xfZGVwdGhfdGV4dHVyZSBleHRlbnNpb24gaXMgcmVxdWlyZWQgZm9yIHRoaXMgdG8gd29ya1xyXG4gICAgICAvLyAgICAgICBhbmQgZm9yIHRoZSBnbC5ERVBUSF9DT01QT05FTlQgdGV4dHVyZSBmb3JtYXQgdG8gYmUgc3VwcG9ydGVkLlxyXG4gICAgICB0aGlzLmRlcHRoVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5kZXB0aFRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLkRFUFRIX0NPTVBPTkVOVCwgd2lkdGgsIGhlaWdodCwgMCxcclxuICAgICAgICAgZ2wuREVQVEhfQ09NUE9ORU5ULCBnbC5VTlNJR05FRF9JTlQsIG51bGwpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNDogQXR0YWNoIHRoZSBzcGVjaWZpYyBidWZmZXJzIHRvIHRoZSBmcmFtZSBidWZmZXIuXHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy5jb2xvclRleHR1cmUsIDApO1xyXG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuREVQVEhfQVRUQUNITUVOVCwgZ2wuVEVYVFVSRV8yRCwgdGhpcy5kZXB0aFRleHR1cmUsIDApO1xyXG5cclxuICAgICAgLy8gU3RlcCA1OiBWZXJpZnkgdGhhdCB0aGUgZnJhbWUgYnVmZmVyIGlzIHZhbGlkLlxyXG4gICAgICBsZXQgc3RhdHVzID0gZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyhnbC5GUkFNRUJVRkZFUik7XHJcbiAgICAgIGlmIChzdGF0dXMgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XHJcbiAgICAgICAgIGxldCBtc2cgPSBcIlRoZSBjcmVhdGVkIGZyYW1lIGJ1ZmZlciBpcyBpbnZhbGlkOiBcIiArIHN0YXR1cy50b1N0cmluZygpO1xyXG4gICAgICAgICBhbGVydChtc2cpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVbmJpbmQgdGhlc2UgbmV3IG9iamVjdHMsIHdoaWNoIG1ha2VzIHRoZSBkZWZhdWx0IGZyYW1lIGJ1ZmZlciB0aGVcclxuICAgICAgLy8gdGFyZ2V0IGZvciByZW5kZXJpbmcuXHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY3JlYXRlRmxvYXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IGdsQ29sb3IgfSBmcm9tIFwiLi9nbENvbG9yXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3Igc2V0dGluZyB1bmlmb3JtIHZhbHVlcyBpbiBhIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVW5pZm9ybSB7XHJcbiAgIC8vIHRoZSBXZWJHTCBzaGFkZXIgcHJvZ3JhbVxyXG4gICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIG9iamVjdCBmb3Igc2V0dGluZyB2YWx1ZXMgYW5kIGNhbGxzIGdsLnVzZVByb2dyYW1cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwcm9ncmFtIFRoZSBwcm9ncmFtIGFzc29jaWF0ZWQgd2l0aCB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9ncmFtOiBXZWJHTFByb2dyYW0pIHtcclxuICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgYSB1bmlmb3JtIHZhbHVlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbmFtZSBUaGUgdmFyaWFibGUgbmFtZVxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlXHJcbiAgICAqIEBwYXJhbSBpbnQgSWYgdHJ1ZSBhbmQgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGFuIGludGVnZXJcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIHwgZ2xWZWMzIHwgZ2xDb2xvciB8IGdsTWF0NCwgaW50OiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICAgIGxldCBsb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLCBuYW1lKTtcclxuICAgICAgaWYgKGxvYykge1xyXG4gICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbFZlYzMpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2MsIG5ldyBGbG9hdDMyQXJyYXkodmFsdWUudmFsdWVzKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbENvbG9yKSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYobG9jLCBuZXcgRmxvYXQzMkFycmF5KFt2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgZ2xNYXQ0KSB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheSh2YWx1ZS52YWx1ZXMpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInVNb2RlXCIpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFpKGxvYywgdmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaW50KSB7XHJcbiAgICAgICAgICAgICAgIGdsLnVuaWZvcm0xaShsb2MsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgZ2wudW5pZm9ybTFmKGxvYywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhbiBpbnRlZ2VyIHVuaWZvcm0gdmFsdWUgKHNhbWUgYXMgc2V0KG5hbWUsIHZhbHVlLCB0cnVlKSlcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBuYW1lIFRoZSB2YXJpYWJsZSBuYW1lXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXRpKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGFsbCB2YWx1ZXMgZm9yIHZhcmlhYmxlcyBzdG9yZWQgYXMgbWVtYmVycyBvZiBhbiBvYmplY3RcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB1bmlmb3JtcyBUaGUgb2JqZWN0IHdpdGggbWVtYmVyIHZhbHVlc1xyXG4gICAgKi9cclxuICAgcHVibGljIHNldEFsbCh1bmlmb3JtczogYW55KSB7XHJcblxyXG4gICAgICBmb3IgKHZhciBuYW1lIGluIHVuaWZvcm1zKSB7XHJcbiAgICAgICAgIHZhciB2YWx1ZSA9IHVuaWZvcm1zW25hbWVdO1xyXG4gICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xVbmlmb3JtQmxvY2sge1xyXG4gICBwcml2YXRlIGJsb2NrTG9jYXRpb246IG51bWJlcjtcclxuICAgcHJpdmF0ZSBibG9ja0J1ZmZlcjogV2ViR0xCdWZmZXI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihwcm9ncmFtOiBXZWJHTFByb2dyYW0sIGJsb2NrTmFtZTogc3RyaW5nLCBibG9ja0JpbmRpbmc6IG51bWJlcikge1xyXG5cclxuICAgICAgbGV0IGdsMiA9IGdsIGFzIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgICB0aGlzLmJsb2NrTG9jYXRpb24gPSBnbDIuZ2V0VW5pZm9ybUJsb2NrSW5kZXgocHJvZ3JhbSwgYmxvY2tOYW1lKTtcclxuICAgICAgZ2wyLnVuaWZvcm1CbG9ja0JpbmRpbmcocHJvZ3JhbSwgdGhpcy5ibG9ja0xvY2F0aW9uLCBibG9ja0JpbmRpbmcpO1xyXG5cclxuICAgICAgdGhpcy5ibG9ja0J1ZmZlciA9IGdsMi5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgZ2wyLmJpbmRCdWZmZXJCYXNlKGdsMi5VTklGT1JNX0JVRkZFUiwgYmxvY2tCaW5kaW5nLCB0aGlzLmJsb2NrQnVmZmVyKTtcclxuICAgfVxyXG5cclxuICAgdXBsb2FkKGRhdGE6IEZsb2F0MzJBcnJheSB8IEludDMyQXJyYXkpIHtcclxuXHJcbiAgICAgIGxldCBnbDIgPSBnbCBhcyBXZWJHTDJSZW5kZXJpbmdDb250ZXh0O1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIHRoaXMuYmxvY2tCdWZmZXIpO1xyXG4gICAgICBnbDIuYnVmZmVyRGF0YShnbDIuVU5JRk9STV9CVUZGRVIsIGRhdGEsIGdsMi5TVEFUSUNfRFJBVyk7XHJcbiAgICAgIGdsMi5iaW5kQnVmZmVyKGdsMi5VTklGT1JNX0JVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICB2YXIgdW5pZm9ybUJsb2NrQnVmZmVyID0gZ2wyLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIHVuaWZvcm1CbG9ja0J1ZmZlcik7XHJcbiAgICAgIGdsMi5idWZmZXJEYXRhKGdsMi5VTklGT1JNX0JVRkZFUiwgdHJpYW5nbGVEYXRhLCBnbDIuU1RBVElDX0RSQVcpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlcihnbDIuVU5JRk9STV9CVUZGRVIsIG51bGwpO1xyXG4gICAgICBnbDIuYmluZEJ1ZmZlckJhc2UoZ2wyLlVOSUZPUk1fQlVGRkVSLCAyLCB1bmlmb3JtQmxvY2tCdWZmZXIpO1xyXG4gICAgICAqL1xyXG5cclxuICAgfVxyXG59IiwiXHJcbi8qKlxyXG4gKiBWZWN0b3IgY2xhc3MgZm9yIHVzZSB3aXRoIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmNsYXNzIGdsVmVjIHtcclxuXHJcbiAgIC8qKiBUaGUgdmVjdG9yIHZhbHVlcy4gKi9cclxuICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlc09yU2l6ZSBJZiBhIGFycmF5LCB0aGUgdmFsdWVzIGZvciB0aGUgdmVjdG9yLiBJZiBhIG51bWJlciwgdGhlIHNpemUgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih2YWx1ZXNPclNpemU6IG51bWJlciB8IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXNPclNpemUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNPclNpemVdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBBcnJheSh2YWx1ZXNPclNpemUpO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09yU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gMDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIFRoZSB2ZWN0b3IgbWFnbml0dWRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hZ25pdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbaV0gKiB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteSB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWMyIGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbFZlYzIge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMih0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIHRvIGFub3RoZXIgcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgcG9pbnRcclxuICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBwb2ludCBhbmQgdGhlIG90aGVyIHBvaW50XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGlzdGFuY2Uob3RoZXI6IGdsVmVjMik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54IC0gb3RoZXIueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSBvdGhlci55LCAyKSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzMgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1syXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHoodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzModGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZGlnaXRzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gZGlzcGxheS4gVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gdG9GaXhlZCgpLlxyXG4gICAgKiBAcGFyYW0gZGl2aWRlciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGVhY2ggbnVtYmVyLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHM6IG51bWJlciwgZGl2aWRlciA9ICcsJyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLngudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMueS50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy56LnRvRml4ZWQoZGlnaXRzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgbGV0IHJldCA9IHRoaXMuY2xvbmUoKTtcclxuICAgICAgaWYgKG1hZyAhPT0gMCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJldC52YWx1ZXNbaV0gLz0gbWFnO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdWJ0cmFjdHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gc3VidHJhY3QuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3VidHJhY3QodmVjOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC0gdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLSB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAtIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBBZGRzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIGFkZC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhZGQodmVjOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdICsgdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gKyB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSArIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjcm9zcyhvdGhlcjogZ2xWZWMzKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IEEgPSB0aGlzLnZhbHVlcztcclxuICAgICAgbGV0IEIgPSBvdGhlci52YWx1ZXM7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgQVsxXSAqIEJbMl0gLSBBWzJdICogQlsxXSxcclxuICAgICAgICAgQVsyXSAqIEJbMF0gLSBBWzBdICogQlsyXSxcclxuICAgICAgICAgQVswXSAqIEJbMV0gLSBBWzFdICogQlswXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ2xWZWM0IGV4dGVuZHMgZ2xWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIHgteS16IHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgY29tcHV0ZWQgYnkgZGl2aWRpbmcgdGhpcyB2ZWN0b3JzXHJcbiAgICAqIGVsZW1lbnRzIGJ5IHRoZSB3IHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4geC15LXogdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpdmlkZUJ5VygpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgdyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAvIHdcclxuICAgICAgXSk7XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBnbENvbG9yIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5pbXBvcnQgeyB0b0NzcyB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBjbGFzcyB0aGF0IHJlcXVpcmVzIFJHQiB2YWx1ZXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyNTVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3IgZXh0ZW5kcyBDb2xvciB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHdoaXRlID0gbmV3IGh0bWxDb2xvcihbMjU1LCAyNTUsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJsYWNrID0gbmV3IGh0bWxDb2xvcihbMCwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJlZCA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMCwgMF0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGdyZWVuID0gbmV3IGh0bWxDb2xvcihbMCwgMjU1LCAwXSk7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmx1ZSA9IG5ldyBodG1sQ29sb3IoWzAsIDAsIDI1NV0pO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG9yYW5nZSA9IG5ldyBodG1sQ29sb3IoWzI1NSwgMTY1LCAwXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGNvbG9yIEFuIFJHQiBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgYXJyYXkgbGVuZ3RoIChleHBlY3RlZCAzIGVsZW1lbnRzKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMF0gPCAwIHx8IGNvbG9yWzBdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ3InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMV0gPCAwIHx8IGNvbG9yWzFdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2cnIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29sb3JbMl0gPCAwIHx8IGNvbG9yWzJdID4gMjU1KSB7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29sb3IgJ2InIHZhbHVlIChleHBlY3RlZCBbMC0yNTVdKVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSB2YWx1ZSB0byBhIGhleCBzdHJpbmdcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjIFRoZSBudW1lcmljIHZhbHVlXHJcbiAgICAqIEByZXR1cm5zIFRoZSBoZXggc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29tcG9uZW50VG9IZXgoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGlzIG9iamVjdCB0byBhIGhleCBzdHJpbmcgKGUuZy4gIzBmMGYwZikuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGhleCBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9IZXgoKTogc3RyaW5nIHtcclxuICAgICAgbGV0IHJIZXggPSB0aGlzLmNvbXBvbmVudFRvSGV4KHRoaXMucik7XHJcbiAgICAgIGxldCBnSGV4ID0gdGhpcy5jb21wb25lbnRUb0hleCh0aGlzLmcpO1xyXG4gICAgICBsZXQgYkhleCA9IHRoaXMuY29tcG9uZW50VG9IZXgodGhpcy5iKTtcclxuICAgICAgcmV0dXJuIFwiI1wiICsgckhleCArIGdIZXggKyBiSGV4O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgdGhpcyBvYmplY3QgdG8gYSBjc3Mgc3RyaW5nIChlLmcuICdyZ2IoMTI4LDIyOCwzMiknKS5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjc3Mgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvQ3NzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0b0Nzcyh0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgY3NzIHN0eWxlIHN0cmluZyAoZS5nLiAncmdiKDI0LDM2LDgzKScpIHRvIGEgY29sb3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBjc3MgVGhlIGNzcyBzdHJpbmcuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbUNzcyhjc3M6IHN0cmluZyk6IGh0bWxDb2xvciB7XHJcbiAgICAgIGxldCByZWdleCA9IC9cXGQrL2c7XHJcbiAgICAgIGxldCB2YWxzID0gY3NzLm1hdGNoKHJlZ2V4KS5zbGljZSgwLCAzKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3BhcnNlSW50KHZhbHNbMF0pLCBwYXJzZUludCh2YWxzWzFdKSwgcGFyc2VJbnQodmFsc1syXSldKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYW4gaHRtbENvbG9yIG9iamVjdCBmcm9tIGEgaGV4IHN0cmluZ1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGhleCBUaGUgaGV4IHN0cmluZ1xyXG4gICAgKiBAcmV0dXJucyBUaGUgaHRtbENvbG9yIG9iamVjdFxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tSGV4KGhleDogc3RyaW5nKTogaHRtbENvbG9yIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgIGxldCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgICAgICAgIGxldCBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XHJcbiAgICAgICAgIGxldCBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XHJcbiAgICAgICAgIHJldHVybiBuZXcgaHRtbENvbG9yKFtyLCBnLCBiXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGFuIGh0bWxDb2xvciBvYmplY3QgdXNpbmcgdmFsdWVzIGluIGEgQ29sb3Igb2JqZWN0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGNvbG9yIEEgZ2VuZXJpYyBDb2xvciBvYmplY3QuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBodG1sQ29sb3Ige1xyXG4gICAgICBsZXQgciA9IGh0bWxDb2xvci5jbGFtcChjb2xvci5yKTtcclxuICAgICAgbGV0IGcgPSBodG1sQ29sb3IuY2xhbXAoY29sb3IuZyk7XHJcbiAgICAgIGxldCBiID0gaHRtbENvbG9yLmNsYW1wKGNvbG9yLmIpO1xyXG4gICAgICByZXR1cm4gbmV3IGh0bWxDb2xvcihbciwgZywgYl0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUm91bmRzIGEgbnVtYmVyIHRvIGEgd2hvbGUgbnVtYmVyIGFuZCBjbGFtcHMgaXQgYmV0d2VlbiAwIGFuZCAyNTUuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZS5cclxuICAgICogQHJldHVybnMgVGhlIHJvdW5kZWQgJiBjbGFtcGVkIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIHN0YXRpYyBjbGFtcCh2YWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHZhbCA9IE1hdGgucm91bmQodmFsKTtcclxuICAgICAgaWYgKHZhbCA8IDApIHtcclxuICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodmFsID4gMjU1KSB7XHJcbiAgICAgICAgIHJldHVybiAyNTU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgY29sb3IgdG8gYW4gZXF1aXZhbGVudCBncmF5LXNjYWxlIGNvbG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZ3JheS1zY2FsZSBjb2xvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0dyYXkoKTogaHRtbENvbG9yIHtcclxuICAgICAgbGV0IHJnYiA9IE1hdGgucm91bmQoKHRoaXMuciArIHRoaXMuZyArIHRoaXMuYikgLyAzKTtcclxuICAgICAgcmV0dXJuIG5ldyBodG1sQ29sb3IoW3JnYiwgcmdiLCByZ2JdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgV2ViR0wgY29sb3Igb2JqZWN0ICgwLTEgYmFzZWQpXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGdsQ29sb3Igb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvR2xDb2xvcigpOiBnbENvbG9yIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbENvbG9yKFt0aGlzLnIgLyAyNTUsIHRoaXMuZyAvIDI1NSwgdGhpcy5iIC8gMjU1XSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGh0bWxDb2xvciB9IGZyb20gXCIuL2h0bWxDb2xvclwiO1xyXG5pbXBvcnQgeyB0b0NzcyB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBodG1sIGNvbG9yIHdpdGggYSB0cmFuc3BhcmVuY3kgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBodG1sQ29sb3JXaXRoQWxwaGEgZXh0ZW5kcyBodG1sQ29sb3Ige1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0cmFuc3BhcmVudCA9IG5ldyBodG1sQ29sb3JXaXRoQWxwaGEoWzAsIDAsIDAsIDBdKTtcclxuXHJcbiAgIC8qKiBUaGUgdHJhbnNwYXJlbmN5IChhbHBoYSkgdmFsdWUgKi9cclxuICAgcHVibGljIGE6IG51bWJlciA9IDI1NTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gY29sb3IgQW4gUkdCQSBjb2xvciBhcnJheVxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbG9yOiBudW1iZXJbXSkge1xyXG5cclxuICAgICAgc3VwZXIoW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl1dKTtcclxuXHJcbiAgICAgIGlmIChjb2xvci5sZW5ndGggIT0gNCkge1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGFycmF5IGxlbmd0aCAoZXhwZWN0ZWQgNCBlbGVtZW50cylcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb2xvcls0XSA8IDAgfHwgY29sb3JbNF0gPiAyNTUpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciAnYScgdmFsdWUgKGV4cGVjdGVkIFswLTI1NV0pXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmEgPSBjb2xvclszXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoaXMgb2JqZWN0IHRvIGEgY3NzIHN0cmluZyAoZS5nLiAncmdiKDEyOCwyMjgsMzIsMjU1KScpLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNzcyBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Dc3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRvQ3NzKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFBhdGhUcmFjZXJBcHAgfSBmcm9tIFwiLi9QYXRoVHJhY2VyQXBwXCI7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUGxhbmVzQXBwIH0gZnJvbSBcIi4vUGxhbmVzQXBwXCI7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgbGV0IHF1ZXJ5OiBzdHJpbmc7XHJcbiAgIGxldCB0eXBlID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcclxuICAgICAgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcclxuXHJcbiAgICAgIGxldCB0b2tlbnMgPSBxdWVyeS5zcGxpdCgnLScpO1xyXG4gICAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICB0eXBlID0gdG9rZW5zWzBdO1xyXG4gICAgICAgICBxdWVyeSA9IHRva2Vuc1sxXTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpZiAodHlwZSA9PT0gJ3BsYW5lcycpIHtcclxuICAgICAgbGV0IGFwcCA9IG5ldyBQbGFuZXNBcHAocXVlcnkpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC5jb21wb25lbnQoKSk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIGxldCBhcHAgPSBuZXcgUGF0aFRyYWNlckFwcChxdWVyeSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLmNvbXBvbmVudCgpKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG52YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxyXFxudW5pZm9ybSBpbnQgdU1vZGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1TWF4Q2hyb21hO1xcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1SGlnaGxpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVNaWRMaWdodENvbG9yO1xcclxcbnVuaWZvcm0gdmVjMyB1RGFya0xpZ2h0Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSB2ZWMzIHVTaGFkb3dDb2xvcjtcXHJcXG51bmlmb3JtIHZlYzMgdVJlZmxlY3RlZExpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSB2ZWMzIHVEYXJrQWNjZW50Q29sb3I7XFxyXFxuXFxyXFxudW5pZm9ybSBmbG9hdCB1U2hhZG93QWxwaGE7XFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRBbHBoYTtcXHJcXG5cXHJcXG4jZGVmaW5lIE1PREVfU0NJRU5DRSAwXFxyXFxuI2RlZmluZSBNT0RFX1ZBTFVFIDFcXHJcXG4jZGVmaW5lIE1PREVfQ0hST01BIDJcXHJcXG4jZGVmaW5lIE1PREVfQkFORFMgM1xcclxcblxcclxcbnZlYzQgd2hpdGUgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIDEuMCk7XFxyXFxudmVjNCByZWQgPSB2ZWM0KDEuMCwgMC4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBvcmFuZ2UgPSB2ZWM0KDEuMCwgMC42NSwgMC4wLCAxLjApO1xcclxcbnZlYzQgeWVsbG93ID0gdmVjNCgxLjAsIDEuMCwgMC4wLCAxLjApO1xcclxcbnZlYzQgZ3JlZW4gPSB2ZWM0KDAuMCwgMS4wLCAwLjAsIDEuMCk7XFxyXFxudmVjNCBjeWFuID0gdmVjNCgwLjAsIDEuMCwgMS4wLCAxLjApO1xcclxcbnZlYzQgYmx1ZSA9IHZlYzQoMC4wLCAwLjAsIDEuMCwgMS4wKTtcXHJcXG52ZWM0IGJsYWNrID0gdmVjNCgwLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbiNkZWZpbmUgTlVNX0NPTE9SUyA2XFxyXFxudmVjNCBjb2xvcnNbTlVNX0NPTE9SU107XFxyXFxuXFxyXFxudmVjNCB2YWx1ZTJDb2xvcihmbG9hdCB2YWx1ZSlcXHJcXG57XFxyXFxuICAgZmxvYXQgc3BhbiA9IDEuMCAvIGZsb2F0KE5VTV9DT0xPUlMgLSAxKTtcXHJcXG4gICB2YWx1ZSAqPSBmbG9hdChOVU1fQ09MT1JTIC0gMSk7XFxyXFxuICAgaWYgKHZhbHVlIDwgMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzBdO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDEuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1swXSArIHZhbHVlICogKGNvbG9yc1sxXSAtIGNvbG9yc1swXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgMi4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzFdICsgKHZhbHVlIC0gMS4wKSAqIChjb2xvcnNbMl0gLSBjb2xvcnNbMV0pO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh2YWx1ZSA8IDMuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1syXSArICh2YWx1ZSAtIDIuMCkgKiAoY29sb3JzWzNdIC0gY29sb3JzWzJdKTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZSBpZiAodmFsdWUgPCA0LjApXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBjb2xvcnNbM10gKyAodmFsdWUgLSAzLjApICogKGNvbG9yc1s0XSAtIGNvbG9yc1szXSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNS4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzRdICsgKHZhbHVlIC0gNC4wKSAqIChjb2xvcnNbNV0gLSBjb2xvcnNbNF0pO1xcclxcbiAgIH1cXHJcXG4gICAvKlxcclxcbiAgIGVsc2UgaWYgKHZhbHVlIDwgNi4wKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gY29sb3JzWzVdICsgKHZhbHVlIC0gNS4wKSAqIChjb2xvcnNbNl0gLSBjb2xvcnNbNV0pO1xcclxcbiAgIH1cXHJcXG4gICAqL1xcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGNvbG9yc1tOVU1fQ09MT1JTIC0gMV07XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCB0b0dyYXkodmVjNCBjKVxcclxcbntcXHJcXG4gICAvLyBsb3RzIG9mIHdheXMgdG8gY29udmVydCBSR0IgdG8gZ3JheSBzY2FsZS5cXHJcXG5cXHJcXG4gICAvLyBzaW1wbGUgYXZlcmFnaW5nIG1ldGhvZFxcclxcbiAgIC8vIHJldHVybiAoYy5yICsgYy5nICsgYy5iKSAvIDMuMDtcXHJcXG5cXHJcXG4gICAvLyByZWxhdGl2ZSBwZXJjZXB0dWFsIHZhbHVlc1xcclxcbiAgIC8vIHJldHVybiAwLjMgKiBjLnIgKyAwLjU5ICogYy5nICsgMC4xMSAqIGMuYjtcXHJcXG5cXHJcXG4gICAvLyBsdW1pbm9zaXR5IG1lYXN1cmVcXHJcXG4gICBmbG9hdCBnYW1tYSA9IDIuMjtcXHJcXG4gICBmbG9hdCB5ID0gMC4yMTI2ICogcG93KGMuciwgZ2FtbWEpICsgMC43MTUyICogcG93KGMuZywgZ2FtbWEpICsgLjA3MjIgKiBwb3coYy5iLCBnYW1tYSk7XFxyXFxuICAgZmxvYXQgbCA9IDExNi4wICogcG93KHksIDEuMCAvIDMuMCkgLSAxNi4wO1xcclxcbiAgIHJldHVybiBsIC8gMTAwLjA7XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNWYWx1ZSgpXFxyXFxue1xcclxcbiAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG4gICBmbG9hdCByZ2IgPSB0b0dyYXkoY29sb3IpO1xcclxcbiAgIHJldHVybiB2ZWM0KHJnYiwgcmdiLCByZ2IsIDEuMCk7XFxyXFxufVxcclxcblxcclxcbnZlYzQgcmVuZGVyQXNDaHJvbWEoKVxcclxcbntcXHJcXG4gICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB0ZXhDb29yZCk7XFxyXFxuXFxyXFxuICAgLy8gcmVuZGVyIHRoZSBzY2FsZSBhcyBhIGJhciBvbiB0aGUgbGVmdFxcclxcbiAgIGlmICh0ZXhDb29yZC54IDwgMC4wMylcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIHZhbHVlMkNvbG9yKCh0ZXhDb29yZC55IC0gMC4xKSAvIDAuOSk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKGNvbG9yLmEgPj0gdVNoYWRvd0FscGhhKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBmbG9hdCBhdmcgPSAoY29sb3IuciArIGNvbG9yLmcgKyBjb2xvci5iKSAvIDMuMDtcXHJcXG4gICAgICAgICBmbG9hdCByZ2IgPSAoYWJzKGF2ZyAtIGNvbG9yLnIpICsgYWJzKGF2ZyAtIGNvbG9yLmcpICsgYWJzKGF2ZyAtIGNvbG9yLmIpKSAvICg0LjAgLyAzLjApO1xcclxcbiAgICAgICAgIHJldHVybiB2YWx1ZTJDb2xvcihyZ2IgLyB1TWF4Q2hyb21hKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCgwLjAsIDAuMCwgMC4wLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbmZsb2F0IGQyKHZlYzMgYzEsIHZlYzMgYzIpXFxyXFxue1xcclxcbiAgIC8vIHN1bSB0aGUgc3F1YXJlcyBvZiB0aGUgZGlmZmVyZW5jZXNcXHJcXG4gICByZXR1cm4gcG93KGMxLnIgLSBjMi5yLCAyLjApICsgcG93KGMxLmcgLSBjMi5nLCAyLjApICsgcG93KGMxLmIgLSBjMi5iLCAyLjApO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGNsb3Nlc3QodmVjMyBjb2xvciwgdmVjMyBsaWdodCwgdmVjMyBtaWQsIHZlYzMgZGFyaylcXHJcXG57XFxyXFxuICAgZmxvYXQgZGxpZ2h0ID0gZDIoY29sb3IsIGxpZ2h0KTtcXHJcXG4gICBmbG9hdCBkbWlkID0gZDIoY29sb3IsIG1pZCk7XFxyXFxuICAgZmxvYXQgZGRhcmsgPSBkMihjb2xvciwgZGFyayk7XFxyXFxuXFxyXFxuICAgZmxvYXQgZG1pbiA9IG1pbihkbGlnaHQsIG1pbihkbWlkLCBkZGFyaykpO1xcclxcbiAgIGlmIChkbWluID09IGRsaWdodClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGxpZ2h0O1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmIChkbWluID09IGRtaWQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBtaWQ7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGRhcms7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzQmFuZHMoKVxcclxcbntcXHJcXG4gICBmbG9hdCBzaXplID0gMC4wNztcXHJcXG4gICBmbG9hdCBtYXJnaW4gPSAoMS4wIC0gNi4wICogc2l6ZSkgLyAyLjA7XFxyXFxuICAgaWYgKHRleENvb3JkLnggPCBzaXplICYmIHRleENvb3JkLnkgPiBtYXJnaW4gJiYgdGV4Q29vcmQueSA8ICgxLjAgLSBtYXJnaW4pKVxcclxcbiAgIHtcXHJcXG4gICAgICBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyAxLjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodURhcmtBY2NlbnRDb2xvciwgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAodGV4Q29vcmQueSA8IChtYXJnaW4gKyAyLjAgKiBzaXplKSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQodVNoYWRvd0NvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDMuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1RGFya0xpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHRleENvb3JkLnkgPCAobWFyZ2luICsgNC4wICogc2l6ZSkpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiB2ZWM0KHVNaWRMaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDUuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1TGlnaHRMaWdodENvbG9yLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIC8vIGlmICh0ZXhDb29yZC55IDwgKG1hcmdpbiArIDcuMCAqIHNpemUpKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICByZXR1cm4gdmVjNCh1SGlnaGxpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHRleENvb3JkKTtcXHJcXG5cXHJcXG4gICAgICAvLyBkZWZpbmUgdGhlIHRlcm1pbmF0b3IgYXMgdGhlIHBvaW50IHdoZXJlIHRoaW5ncyBhcmUgNTAlIGluIHNoYWRvd1xcclxcbiAgICAgIGZsb2F0IHRlcm1pbmF0b3IgPSAoKHVTaGFkb3dBbHBoYSArIHVMaWdodEFscGhhKSAvIDIuMCk7XFxyXFxuICAgICAgaWYgKGNvbG9yLmEgPiAxLjAgJiYgY29sb3IuYSA8PSB0ZXJtaW5hdG9yKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICB2ZWMzIGMgPSBjbG9zZXN0KGNvbG9yLnJnYiwgdVNoYWRvd0NvbG9yLCB1UmVmbGVjdGVkTGlnaHRDb2xvciwgdURhcmtBY2NlbnRDb2xvcik7XFxyXFxuICAgICAgICAgcmV0dXJuIHZlYzQoYywgMS4wKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZSBpZiAoY29sb3IuYSA+IHRlcm1pbmF0b3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIG9ubHkgcmVuZGVyIHRoZSBoaWdobGlnaHQgd2hlcmUgaXQncyBjb250cmlidXRpb24gaXMgc2lnbmlmaWNhbnQsIGkuZS4gZ3JlYXRlclxcclxcbiAgICAgICAgIC8vIHRoYW4gc29tZSB0aHJlc2hvbGRcXHJcXG4gICAgICAgICBjb25zdCBmbG9hdCBTUEVDVUxBUl9USFJFU0hPTEQgPSAwLjE7XFxyXFxuICAgICAgICAgaWYgKGNvbG9yLmEgPiAodUxpZ2h0QWxwaGEgKyBTUEVDVUxBUl9USFJFU0hPTEQpKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4gdmVjNCh1SGlnaGxpZ2h0Q29sb3IsIDEuMCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIGVsc2VcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgdmVjMyBjID0gY2xvc2VzdChjb2xvci5yZ2IsIHVMaWdodExpZ2h0Q29sb3IsIHVNaWRMaWdodENvbG9yLCB1RGFya0xpZ2h0Q29sb3IpO1xcclxcbiAgICAgICAgICAgIHJldHVybiB2ZWM0KGMsIDEuMCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJldHVybiBjb2xvcjtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHJlbmRlckFzU2NpZW5jZSgpXFxyXFxue1xcclxcbiAgIC8vIGp1c3QgcmV0dXJuIHRoZSB0ZXh0dXJlXFxyXFxuICAgcmV0dXJuIHRleHR1cmUyRCh1VGV4dHVyZSwgdGV4Q29vcmQpO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBjb2xvcnNbMF0gPSBibGFjaztcXHJcXG4gICBjb2xvcnNbMV0gPSBibHVlO1xcclxcbiAgIGNvbG9yc1syXSA9IGdyZWVuO1xcclxcbiAgIGNvbG9yc1szXSA9IHllbGxvdztcXHJcXG4gICBjb2xvcnNbNF0gPSBvcmFuZ2U7XFxyXFxuICAgY29sb3JzWzVdID0gcmVkO1xcclxcblxcclxcbiAgIGlmICh1TW9kZSA9PSBNT0RFX1ZBTFVFKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc1ZhbHVlKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2UgaWYgKHVNb2RlID09IE1PREVfQ0hST01BKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc0Nocm9tYSgpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlIGlmICh1TW9kZSA9PSBNT0RFX0JBTkRTKVxcclxcbiAgIHtcXHJcXG4gICAgICBnbF9GcmFnQ29sb3IgPSByZW5kZXJBc0JhbmRzKCk7XFxyXFxuICAgfVxcclxcbiAgIGVsc2VcXHJcXG4gICB7XFxyXFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gcmVuZGVyQXNTY2llbmNlKCk7XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiYXR0cmlidXRlIHZlYzMgdmVydGV4O1xcclxcbnZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcXHJcXG51bmlmb3JtIGZsb2F0IHVTY2FsZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVYT2Zmc2V0O1xcclxcbnVuaWZvcm0gZmxvYXQgdVlPZmZzZXQ7XFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdGV4Q29vcmQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxyXFxuXFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHVTY2FsZSAqIHZlcnRleC54ICsgdVhPZmZzZXQsIHVTY2FsZSAqIHZlcnRleC55ICsgdVlPZmZzZXQsIDAuMCwgMS4wKTtcXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxWRVJTSU9OPlxcclxcblxcclxcbiNkZWZpbmUgTk9USElOR1xcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuI2RlZmluZSBFUzMwMFxcclxcbiNlbmRpZlxcclxcblxcclxcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5pbiB2ZWMzIGluaXRpYWxSYXk7XFxyXFxuI2Vsc2VcXHJcXG52YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG51bmlmb3JtIHZlYzMgdUV5ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVUZXh0dXJlU2l6ZTtcXHJcXG51bmlmb3JtIGZsb2F0IHVSYW5kb207XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XFxyXFxudW5pZm9ybSB2ZWMzIHVMaWdodFBvcztcXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIHZlYzMgdUxpZ2h0Q29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1QW1iaWVudExpZ2h0SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1T2JqQ29sb3I7XFxyXFxudW5pZm9ybSBmbG9hdCB1QmFsbFJhZGl1cztcXHJcXG51bmlmb3JtIGZsb2F0IHVTYW1wbGU7XFxyXFxudW5pZm9ybSBmbG9hdCB1TGlnaHRBbHBoYTtcXHJcXG51bmlmb3JtIGZsb2F0IHVTaGFkb3dBbHBoYTtcXHJcXG5cXHJcXG4jaWZkZWYgRVMzMDBcXHJcXG5vdXQgdmVjNCBmcmFnQ29sb3I7XFxyXFxuI2Vsc2VcXHJcXG4jZGVmaW5lIGZyYWdDb2xvciBnbF9GcmFnQ29sb3JcXHJcXG4jZGVmaW5lIHRleHR1cmUgdGV4dHVyZTJEXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuY29uc3QgaW50IE1BWF9CT1VOQ0VTID0gMTA7XFxyXFxuY29uc3QgZmxvYXQgRVBTSUxPTiA9IDAuMDAwMDAxO1xcclxcbmNvbnN0IGZsb2F0IE9GRlNFVCA9IDAuMDAwMTtcXHJcXG5jb25zdCBmbG9hdCBJTkZJTklUWSA9IDEwMDAwLjA7XFxyXFxuY29uc3QgZmxvYXQgTElHSFRfU0laRSA9IDAuMTtcXHJcXG4jZGVmaW5lIEJBTExfQ0VOVEVSIHZlYzMoMCwgdUJhbGxSYWRpdXMsIDApXFxyXFxuY29uc3QgdmVjMyBET01FX0NFTlRFUiA9IHZlYzMoMCwgMCwgMCk7XFxyXFxuY29uc3QgZmxvYXQgRE9NRV9SQURJVVMgPSA4LjA7XFxyXFxuY29uc3QgZmxvYXQgVkFMID0gMC44O1xcclxcbmNvbnN0IHZlYzMgRE9NRV9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBGTE9PUl9DT0xPUiA9IHZlYzMoVkFMLCBWQUwsIFZBTCk7XFxyXFxuY29uc3QgdmVjMyBBTUJJRU5UX0NPTE9SID0gdmVjMygxLjAsIDEuMCwgMS4wKTtcXHJcXG5jb25zdCBpbnQgTlVNX0xJR0hUUyA9IDY7XFxyXFxuY29uc3QgZmxvYXQgSEVJR0hUID0gNS4wO1xcclxcbmNvbnN0IGZsb2F0IFJBRElVUyA9IDQuMDtcXHJcXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjU7XFxyXFxuXFxyXFxuc3RydWN0IExpZ2h0XFxyXFxue1xcclxcbiAgIGZsb2F0IGludGVuc2l0eTtcXHJcXG4gICBmbG9hdCBzaXplO1xcclxcbiAgIHZlYzMgcG9zO1xcclxcbiAgIHZlYzMgY29sb3I7XFxyXFxufTtcXHJcXG5cXHJcXG4gTGlnaHQgTGlnaHRzW05VTV9MSUdIVFNdO1xcclxcblxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuc3RydWN0IFRyaWFuZ2xlXFxyXFxue1xcclxcbiAgIHZlYzMgcDA7XFxyXFxuICAgdmVjMyBwMTtcXHJcXG4gICB2ZWMzIHAyO1xcclxcbn07XFxyXFxuXFxyXFxuc3RydWN0IFZvbHVtZVxcclxcbntcXHJcXG4gICBpbnQgc3RhcnRJbmRleDtcXHJcXG4gICBpbnQgbnVtVHJpYW5nbGVzO1xcclxcbiAgIHZlYzMgYm94TWluO1xcclxcbiAgIHZlYzMgYm94TWF4O1xcclxcbn07XFxyXFxuXFxyXFxuLy8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIHJlcGxhY2VkIHdpdGggY29kZSBnZW5lcmF0ZWQgaW4gSmF2YVNjcmlwdFxcclxcbmNvbnN0IGludCBOVU1fVkVSVElDRVMgPSA8TlVNX1ZFUlRJQ0VTPjtcXHJcXG5jb25zdCBpbnQgTlVNX1ZPTFVNRVMgPSA8TlVNX1ZPTFVNRVM+O1xcclxcbmNvbnN0IGludCBOVU1fVFJJQU5HTEVTID0gPE5VTV9UUklBTkdMRVM+O1xcclxcblxcclxcbmxheW91dChzdGQxNDApIHVuaWZvcm0gTXlWZXJ0aWNlc0Jsb2NrIHsgdmVjMyB2ZXJ0aWNlc1tOVU1fVkVSVElDRVNdOyB9O1xcclxcblxcclxcbnN0cnVjdCBJVHJpYW5nbGVcXHJcXG57XFxyXFxuICAgaW50IGkwO1xcclxcbiAgIGludCBpMTtcXHJcXG4gICBpbnQgaTI7XFxyXFxufTtcXHJcXG5cXHJcXG5sYXlvdXQoc3RkMTQwKSB1bmlmb3JtIE15VHJpYW5nbGVzQmxvY2sgeyBJVHJpYW5nbGUgdHJpYW5nbGVzW05VTV9UUklBTkdMRVNdOyB9O1xcclxcblRyaWFuZ2xlIGdldFRyaWFuZ2xlKGludCBpbmRleClcXHJcXG57XFxyXFxuICAgSVRyaWFuZ2xlIHRyaSA9IHRyaWFuZ2xlc1tpbmRleF07XFxyXFxuICAgdmVjMyBwMCA9IHZlcnRpY2VzW3RyaS5pMF07XFxyXFxuICAgdmVjMyBwMSA9IHZlcnRpY2VzW3RyaS5pMV07XFxyXFxuICAgdmVjMyBwMiA9IHZlcnRpY2VzW3RyaS5pMl07XFxyXFxuICAgcmV0dXJuIFRyaWFuZ2xlKHAwLCBwMSwgcDIpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBUaGUgY2VudHJhbCBvYmplY3QgYmVpbmcgcmVuZGVyZWRcXHJcXG5zdHJ1Y3QgT2JqZWN0XFxyXFxue1xcclxcbiAgIFZvbHVtZSB2b2x1bWVzW05VTV9WT0xVTUVTXTtcXHJcXG4gICB2ZWMzIGJveE1pbjtcXHJcXG4gICB2ZWMzIGJveE1heDtcXHJcXG59O1xcclxcblxcclxcbnVuaWZvcm0gT2JqZWN0IG9iamVjdDtcXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdEJveChjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIGNvbnN0IHZlYzMgYm94TWluLCBjb25zdCB2ZWMzIGJveE1heClcXHJcXG57XFxyXFxuICAgdmVjMyByYXlJbnYgPSAxLjAgLyByYXk7XFxyXFxuICAgdmVjMyB0Ym90ID0gcmF5SW52ICogKGJveE1pbiAtIG9yaWdpbik7XFxyXFxuICAgdmVjMyB0dG9wID0gcmF5SW52ICogKGJveE1heCAtIG9yaWdpbik7XFxyXFxuICAgdmVjMyB0bWluID0gbWluKHR0b3AsIHRib3QpO1xcclxcbiAgIHZlYzMgdG1heCA9IG1heCh0dG9wLCB0Ym90KTtcXHJcXG4gICB2ZWMyIHQgPSBtYXgodG1pbi54eCwgdG1pbi55eik7XFxyXFxuICAgZmxvYXQgdDAgPSBtYXgodC54LCB0LnkpO1xcclxcbiAgIHQgPSBtaW4odG1heC54eCwgdG1heC55eik7XFxyXFxuICAgZmxvYXQgdDEgPSBtaW4odC54LCB0LnkpO1xcclxcbiAgIHJldHVybiB0MSA+IG1heCh0MCwgMC4wKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9vbCBpbnRlcnNlY3RWb2woY29uc3QgdmVjMyBvcmlnaW4sIGNvbnN0IHZlYzMgcmF5LCBWb2x1bWUgdm9sKVxcclxcbntcXHJcXG4gICBpZiAodm9sLm51bVRyaWFuZ2xlcyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHJldHVybiBpbnRlcnNlY3RCb3gob3JpZ2luLCByYXksIHZvbC5ib3hNaW4sIHZvbC5ib3hNYXgpO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGludGVyc2VjdE9iaihjb25zdCB2ZWMzIG9yaWdpbiwgY29uc3QgdmVjMyByYXksIE9iamVjdCBvYmplY3QpXFxyXFxue1xcclxcbiAgIHJldHVybiBpbnRlcnNlY3RCb3gob3JpZ2luLCByYXksIG9iamVjdC5ib3hNaW4sIG9iamVjdC5ib3hNYXgpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNw7ZsbGVy4oCTVHJ1bWJvcmUgcmF5LXRyaWFuZ2xlIGludGVyc2VjdGlvbiBhbGdvcml0aG1cXHJcXG4vLyBzb3VyY2U6IGh0dHA6Ly9iaXQubHkvMk14blBNR1xcclxcbmZsb2F0IGludGVyc2VjdFRyaWFuZ2xlKHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgVHJpYW5nbGUgdHJpKVxcclxcbntcXHJcXG4gICB2ZWMzIGVkZ2UxLCBlZGdlMiwgaCwgcywgcTtcXHJcXG4gICBmbG9hdCBhLCBmLCB1LCB2O1xcclxcbiAgIGVkZ2UxID0gdHJpLnAxIC0gdHJpLnAwO1xcclxcbiAgIGVkZ2UyID0gdHJpLnAyIC0gdHJpLnAwO1xcclxcblxcclxcbiAgIGggPSBjcm9zcyhyYXksIGVkZ2UyKTtcXHJcXG4gICBhID0gZG90KGVkZ2UxLCBoKTtcXHJcXG4gICBpZiAoYWJzKGEpIDwgRVBTSUxPTilcXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgZiA9IDEuMCAvIGE7XFxyXFxuICAgcyA9IG9yaWdpbiAtIHRyaS5wMDtcXHJcXG4gICB1ID0gZiAqIGRvdChzLCBoKTtcXHJcXG4gICBpZiAodSA8IDAuMCB8fCB1ID4gMS4wKVxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICBxID0gY3Jvc3MocywgZWRnZTEpO1xcclxcbiAgIHYgPSBmICogZG90KHJheSwgcSk7XFxyXFxuICAgaWYgKHYgPCAwLjAgfHwgKHUgKyB2KSA+IDEuMClcXHJcXG4gICAgICByZXR1cm4gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgLy8gQXQgdGhpcyBzdGFnZSB3ZSBjYW4gY29tcHV0ZSB0IHRvIGZpbmQgb3V0IHdoZXJlIHRoZSBpbnRlcnNlY3Rpb24gcG9pbnQgaXMgb24gdGhlIGxpbmUuXFxyXFxuICAgZmxvYXQgdCA9IGYgKiBkb3QoZWRnZTIsIHEpO1xcclxcbiAgIGlmICh0IDw9IEVQU0lMT04pIC8vIHRoaXMgbWVhbnMgdGhhdCB0aGVyZSBpcyBhIGxpbmUgaW50ZXJzZWN0aW9uIGJ1dCBub3QgYSByYXkgaW50ZXJzZWN0aW9uLlxcclxcbiAgICAgIHJldHVybiBJTkZJTklUWTtcXHJcXG5cXHJcXG4gICByZXR1cm4gdDsgLy8gcmF5IGludGVyc2VjdGlvblxcclxcbn1cXHJcXG5cXHJcXG52ZWMzIG5vcm1hbEZvclRyaWFuZ2xlKHZlYzMgb3JpZ2luLCB2ZWMzIGhpdCwgaW50IHRJbmRleClcXHJcXG57XFxyXFxuICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUodEluZGV4KTtcXHJcXG4gICB2ZWMzIG5vcm1hbCA9IGNyb3NzKHRyaS5wMSAtIHRyaS5wMCwgdHJpLnAyIC0gdHJpLnAwKTtcXHJcXG4gICBub3JtYWwgPSBub3JtYWxpemUobm9ybWFsKTtcXHJcXG4gICBpZiAoZG90KG5vcm1hbCwgb3JpZ2luIC0gaGl0KSA+IDAuMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIG5vcm1hbDtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gLW5vcm1hbDtcXHJcXG4gICB9XFxyXFxufVxcclxcbiNlbmRpZlxcclxcblxcclxcbmZsb2F0IGludGVyc2VjdFNwaGVyZSh2ZWMzIG9yaWdpbiwgdmVjMyByYXksIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpXFxyXFxue1xcclxcbiAgIHZlYzMgdG9TcGhlcmUgPSBvcmlnaW4gLSBzcGhlcmVDZW50ZXI7XFxyXFxuICAgZmxvYXQgYSA9IGRvdChyYXksIHJheSk7XFxyXFxuICAgZmxvYXQgYiA9IDIuMCAqIGRvdCh0b1NwaGVyZSwgcmF5KTtcXHJcXG4gICBmbG9hdCBjID0gZG90KHRvU3BoZXJlLCB0b1NwaGVyZSkgLSBzcGhlcmVSYWRpdXMgKiBzcGhlcmVSYWRpdXM7XFxyXFxuICAgZmxvYXQgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0LjAgKiBhICogYztcXHJcXG4gICBpZiAoZGlzY3JpbWluYW50ID4gMC4wKVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB0MSA9ICgtYiAtIHNxcnQoZGlzY3JpbWluYW50KSkgLyAoMi4wICogYSk7XFxyXFxuICAgICAgZmxvYXQgdDIgPSAoLWIgKyBzcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIuMCAqIGEpO1xcclxcbiAgICAgIGlmICh0MSA+IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHQxO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0MiA+IDAuMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmV0dXJuIHQyO1xcclxcbiAgICAgIH1cXHJcXG4gICB9XFxyXFxuICAgcmV0dXJuIElORklOSVRZO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIG5vcm1hbEZvclNwaGVyZSh2ZWMzIGhpdCwgdmVjMyBzcGhlcmVDZW50ZXIsIGZsb2F0IHNwaGVyZVJhZGl1cylcXHJcXG57XFxyXFxuICAgcmV0dXJuIChoaXQgLSBzcGhlcmVDZW50ZXIpIC8gc3BoZXJlUmFkaXVzO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCByYW5kb20odmVjMyBzY2FsZSwgZmxvYXQgc2VlZClcXHJcXG57XFxyXFxuICAgcmV0dXJuIGZyYWN0KHNpbihkb3QoZ2xfRnJhZ0Nvb3JkLnh5eiArIHNlZWQsIHNjYWxlKSkgKiA0Mzc1OC41NDUzICsgc2VlZCk7XFxyXFxufVxcclxcblxcclxcbnZlYzMgY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24oZmxvYXQgc2VlZCwgdmVjMyBub3JtYWwpXFxyXFxue1xcclxcbiAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgdiA9IHJhbmRvbSh2ZWMzKDYzLjcyNjQsIDEwLjg3MywgNjIzLjY3MzYpLCBzZWVkKTtcXHJcXG4gICBmbG9hdCByID0gc3FydCh1KTtcXHJcXG4gICBmbG9hdCBhbmdsZSA9IDYuMjgzMTg1MzA3MTc5NTg2ICogdjtcXHJcXG4gICAvLyBjb21wdXRlIGJhc2lzIGZyb20gbm9ybWFsXFxyXFxuICAgdmVjMyBzZGlyLCB0ZGlyO1xcclxcbiAgIGlmIChhYnMobm9ybWFsLngpIDwgLjUpXFxyXFxuICAge1xcclxcbiAgICAgIHNkaXIgPSBjcm9zcyhub3JtYWwsIHZlYzMoMSwgMCwgMCkpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHNkaXIgPSBjcm9zcyhub3JtYWwsIHZlYzMoMCwgMSwgMCkpO1xcclxcbiAgIH1cXHJcXG4gICB0ZGlyID0gY3Jvc3Mobm9ybWFsLCBzZGlyKTtcXHJcXG4gICByZXR1cm4gciAqIGNvcyhhbmdsZSkgKiBzZGlyICsgciAqIHNpbihhbmdsZSkgKiB0ZGlyICsgc3FydCgxLiAtIHUpICogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihmbG9hdCBzZWVkKVxcclxcbntcXHJcXG4gICBmbG9hdCB1ID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIHNlZWQpO1xcclxcbiAgIGZsb2F0IHYgPSByYW5kb20odmVjMyg2My43MjY0LCAxMC44NzMsIDYyMy42NzM2KSwgc2VlZCk7XFxyXFxuICAgZmxvYXQgeiA9IDEuMCAtIDIuMCAqIHU7XFxyXFxuICAgZmxvYXQgciA9IHNxcnQoMS4wIC0geiAqIHopO1xcclxcbiAgIGZsb2F0IGFuZ2xlID0gNi4yODMxODUzMDcxNzk1ODYgKiB2O1xcclxcbiAgIHJldHVybiB2ZWMzKHIgKiBjb3MoYW5nbGUpLCByICogc2luKGFuZ2xlKSwgeik7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5pZm9ybWx5UmFuZG9tVmVjdG9yKGZsb2F0IHNlZWQpXFxyXFxue1xcclxcbiAgIHJldHVybiB1bmlmb3JtbHlSYW5kb21EaXJlY3Rpb24oc2VlZCkgKiBzcXJ0KHJhbmRvbSh2ZWMzKDM2Ljc1MzksIDUwLjM2NTgsIDMwNi4yNzU5KSwgc2VlZCkpO1xcclxcbn1cXHJcXG5cXHJcXG5ib29sIGluU2hhZG93KHZlYzMgb3JpZ2luLCB2ZWMzIHJheSwgZmxvYXQgdExpZ2h0KVxcclxcbntcXHJcXG4gICBmbG9hdCB0QmFsbCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgQkFMTF9DRU5URVIsIHVCYWxsUmFkaXVzKTtcXHJcXG4gICBpZiAodEJhbGwgPCB0TGlnaHQpXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4jaWZkZWYgVVNFX1RSSUFOR0xFU1xcclxcbiAgIGlmIChpbnRlcnNlY3RPYmoob3JpZ2luLCByYXksIG9iamVjdCkpXFxyXFxuICAge1xcclxcbiAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgTlVNX1ZPTFVNRVM7IGkrKylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgVm9sdW1lIHZvbCA9IG9iamVjdC52b2x1bWVzW2ldO1xcclxcbiAgICAgICAgIGlmIChpbnRlcnNlY3RWb2wob3JpZ2luLCByYXksIHZvbCkpXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSB2b2wuc3RhcnRJbmRleDsgaSA8ICh2b2wuc3RhcnRJbmRleCArIHZvbC5udW1UcmlhbmdsZXMpOyBpKyspXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgIFRyaWFuZ2xlIHRyaSA9IGdldFRyaWFuZ2xlKGkpO1xcclxcbiAgICAgICAgICAgICAgIGlmIChpbnRlcnNlY3RUcmlhbmdsZShvcmlnaW4sIHJheSwgdHJpKSA8IHRMaWdodClcXHJcXG4gICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgIH1cXHJcXG4jZW5kaWZcXHJcXG5cXHJcXG4gICByZXR1cm4gZmFsc2U7XFxyXFxufVxcclxcblxcclxcbi8vIEFsbCBjb21wb25lbnRzIGFyZSBpbiB0aGUgcmFuZ2UgWzDigKYxXSwgaW5jbHVkaW5nIGh1ZS5cXHJcXG52ZWM0IHJnYjJoc3YodmVjNCBjKVxcclxcbntcXHJcXG4gICB2ZWM0IEsgPSB2ZWM0KDAuMCwgLTEuMCAvIDMuMCwgMi4wIC8gMy4wLCAtMS4wKTtcXHJcXG4gICB2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSwgdmVjNChjLmdiLCBLLnh5KSwgc3RlcChjLmIsIGMuZykpO1xcclxcbiAgIHZlYzQgcSA9IG1peCh2ZWM0KHAueHl3LCBjLnIpLCB2ZWM0KGMuciwgcC55engpLCBzdGVwKHAueCwgYy5yKSk7XFxyXFxuXFxyXFxuICAgZmxvYXQgZCA9IHEueCAtIG1pbihxLncsIHEueSk7XFxyXFxuICAgZmxvYXQgZSA9IDEuMGUtMTA7XFxyXFxuICAgcmV0dXJuIHZlYzQoYWJzKHEueiArIChxLncgLSBxLnkpIC8gKDYuMCAqIGQgKyBlKSksIGQgLyAocS54ICsgZSksIHEueCwgYy5hKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQWxsIGNvbXBvbmVudHMgYXJlIGluIHRoZSByYW5nZVsw4oCmMV0sIGluY2x1ZGluZyBodWUuXFxyXFxudmVjNCBoc3YycmdiKHZlYzQgYylcXHJcXG57XFxyXFxuICAgdmVjNCBLID0gdmVjNCgxLjAsIDIuMCAvIDMuMCwgMS4wIC8gMy4wLCAzLjApO1xcclxcbiAgIHZlYzMgcCA9IGFicyhmcmFjdChjLnh4eCArIEsueHl6KSAqIDYuMCAtIEsud3d3KTtcXHJcXG4gICByZXR1cm4gdmVjNChjLnogKiBtaXgoSy54eHgsIGNsYW1wKHAgLSBLLnh4eCwgMC4wLCAxLjApLCBjLnkpLCBjLmEpO1xcclxcbn1cXHJcXG5cXHJcXG52ZWM0IHNoaWZ0VGVtcGVyYXR1cmUodmVjNCByZ2IsIGZsb2F0IGRlZywgZmxvYXQgdGludFN0cmVuZ3RoKVxcclxcbntcXHJcXG4gICB2ZWM0IGhzdiA9IHJnYjJoc3YocmdiKTtcXHJcXG4gICBoc3YueCArPSBkZWcgLyAzNjAuMDtcXHJcXG4gICB2ZWM0IGZ1bGxUaW50UmdiID0gaHN2MnJnYihoc3YpO1xcclxcblxcclxcbiAgIHJldHVybiBtaXgocmdiLCBmdWxsVGludFJnYiwgdGludFN0cmVuZ3RoKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gVE9ETyBtb3ZlIHRvIGEgY29tbW9uIGZpbGVcXHJcXG5mbG9hdCB0b0dyYXkodmVjNCBjKVxcclxcbntcXHJcXG4gICAvLyBsb3RzIG9mIHdheXMgdG8gY29udmVydCBSR0IgdG8gZ3JheSBzY2FsZS5cXHJcXG5cXHJcXG4gICAvLyBzaW1wbGUgYXZlcmFnaW5nIG1ldGhvZFxcclxcbiAgIC8vIHJldHVybiAoYy5yICsgYy5nICsgYy5iKSAvIDMuMDtcXHJcXG5cXHJcXG4gICAvLyByZWxhdGl2ZSBwZXJjZXB0dWFsIHZhbHVlc1xcclxcbiAgIC8vIHJldHVybiAwLjMgKiBjLnIgKyAwLjU5ICogYy5nICsgMC4xMSAqIGMuYjtcXHJcXG5cXHJcXG4gICAvLyBsdW1pbm9zaXR5IG1lYXN1cmVcXHJcXG4gICBmbG9hdCBnYW1tYSA9IDIuMjtcXHJcXG4gICBmbG9hdCB5ID0gMC4yMTI2ICogcG93KGMuciwgZ2FtbWEpICsgMC43MTUyICogcG93KGMuZywgZ2FtbWEpICsgLjA3MjIgKiBwb3coYy5iLCBnYW1tYSk7XFxyXFxuICAgZmxvYXQgbCA9IDExNi4wICogcG93KHksIDEuMCAvIDMuMCkgLSAxNi4wO1xcclxcbiAgIHJldHVybiBsIC8gMTAwLjA7XFxyXFxufVxcclxcblxcclxcbnZlYzQgY2FsY3VsYXRlQ29sb3IodmVjMyBvcmlnaW4sIHZlYzMgcmF5KVxcclxcbntcXHJcXG4gICB2ZWMzIGFjY3VtdWxhdGVkQ29sb3IgPSB2ZWMzKDAuMCk7XFxyXFxuICAgdmVjMyBjb2xvck1hc2sgPSB2ZWMzKDEuMCk7XFxyXFxuICAgdmVjMyBleWUgPSBvcmlnaW47XFxyXFxuICAgYm9vbCBvYmpIaXQgPSBmYWxzZTtcXHJcXG4gICBib29sIG9ialNoYWRvdyA9IGZhbHNlO1xcclxcbiAgIGZsb2F0IHNwZWN1bGFyQ29udHJpYnV0aW9uID0gMC4wO1xcclxcblxcclxcbiAgIC8vIG1haW4gcmF5dHJhY2luZyBsb29wXFxyXFxuICAgZm9yIChpbnQgYm91bmNlID0gMDsgYm91bmNlIDwgTUFYX0JPVU5DRVM7IGJvdW5jZSsrKVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBjb21wdXRlIHRoZSBpbnRlcnNlY3Rpb24gd2l0aCBldmVyeXRoaW5nXFxyXFxuICAgICAgZmxvYXQgdEJhbGwgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIEJBTExfQ0VOVEVSLCB1QmFsbFJhZGl1cyk7XFxyXFxuICAgICAgdmVjMyBzdXJmYWNlQ29sb3IgPSB2ZWMzKDAuNSwgMC41LCAwLjUpO1xcclxcblxcclxcbiAgICAgIGZsb2F0IHRPYmogPSBJTkZJTklUWTtcXHJcXG4gICAgICBpbnQgdEluZGV4O1xcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgICAgaWYgKGludGVyc2VjdE9iaihvcmlnaW4sIHJheSwgb2JqZWN0KSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fVk9MVU1FUzsgaSsrKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBWb2x1bWUgdm9sID0gb2JqZWN0LnZvbHVtZXNbaV07XFxyXFxuICAgICAgICAgICAgaWYgKGludGVyc2VjdFZvbChvcmlnaW4sIHJheSwgdm9sKSlcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IHZvbC5zdGFydEluZGV4OyBpIDwgKHZvbC5zdGFydEluZGV4ICsgdm9sLm51bVRyaWFuZ2xlcyk7IGkrKylcXHJcXG4gICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgVHJpYW5nbGUgdHJpID0gZ2V0VHJpYW5nbGUoaSk7XFxyXFxuICAgICAgICAgICAgICAgICAgZmxvYXQgdFRyaSA9IG1pbih0T2JqLCBpbnRlcnNlY3RUcmlhbmdsZShvcmlnaW4sIHJheSwgdHJpKSk7XFxyXFxuICAgICAgICAgICAgICAgICAgaWYgKHRUcmkgPCB0T2JqKVxcclxcbiAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICB0T2JqID0gdFRyaTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICB0SW5kZXggPSBpO1xcclxcbiAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxuICAgICAgLy8gaWYgdGhlIGZpcnN0IHJheSBoaXRzIHRoZSBsaWdodCwgcmV0dXJuIHRoZSBsaWdodCBjb2xvci4gVGhpc1xcclxcbiAgICAgIC8vIHNpbXVsYXRlcyBkaXNwbGF5aW5nIHRoZSBsaWdodFxcclxcbiAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAgICAgICAge1xcclxcbiAgICAgICAgICAgIGZsb2F0IHRMaWdodCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgTGlnaHRzW2ldLnBvcywgTGlnaHRzW2ldLnNpemUpO1xcclxcbiAgICAgICAgICAgIGlmICh0TGlnaHQgPCB0QmFsbCAmJiB0TGlnaHQgPCB0T2JqKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICByZXR1cm4gdmVjNChMaWdodHNbaV0uaW50ZW5zaXR5ICogTGlnaHRzW2ldLmNvbG9yLCAxLjApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGZpbmQgdGhlIGNsb3Nlc3QgaW50ZXJzZWN0aW9uXFxyXFxuICAgICAgZmxvYXQgdERvbWUgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIERPTUVfQ0VOVEVSLCBET01FX1JBRElVUyk7XFxyXFxuICAgICAgZmxvYXQgdEZsb29yID0gSU5GSU5JVFk7XFxyXFxuXFxyXFxuICAgICAgLy8gY2hlY2sgZm9yIGludGVyc2VjdGlvbiB3aXRoIHRoZSBncm91bmRcXHJcXG4gICAgICBpZiAocmF5LnkgPCAwLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGRpc3RhbmNlIHRvIGZsb29yID0gbnVtIHVuaXQgdmVjdG9ycyByZXF1aXJlZCB0byByZWFjaCB0aGUgZmxvb3JcXHJcXG4gICAgICAgICB0Rmxvb3IgPSAtb3JpZ2luLnkgLyByYXkueTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gZmluZCB0aGUgY2xvc2VzdCBoaXRcXHJcXG4gICAgICBmbG9hdCB0ID0gbWluKG1pbih0RG9tZSwgdEZsb29yKSwgbWluKHRCYWxsLCB0T2JqKSk7XFxyXFxuXFxyXFxuICAgICAgLy8gaW5mbyBhYm91dCBoaXRcXHJcXG4gICAgICB2ZWMzIGhpdCA9IG9yaWdpbiArIHJheSAqIHQ7XFxyXFxuICAgICAgdmVjMyBub3JtYWw7XFxyXFxuXFxyXFxuICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub3JtYWxcXHJcXG4gICAgICBpZiAodCA9PSB0Rmxvb3IpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IEZMT09SX0NPTE9SO1xcclxcbiAgICAgICAgIG5vcm1hbCA9IHZlYzMoMC4wLCAxLjAsIDAuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2UgaWYgKHQgPT0gdEJhbGwpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHN1cmZhY2VDb2xvciA9IHZlYzModU9iakNvbG9yKTtcXHJcXG4gICAgICAgICBub3JtYWwgPSBub3JtYWxGb3JTcGhlcmUoaGl0LCBCQUxMX0NFTlRFUiwgdUJhbGxSYWRpdXMpO1xcclxcblxcclxcbiAgICAgICAgIGlmIChib3VuY2UgPT0gMClcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgb2JqSGl0ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiNpZmRlZiBVU0VfVFJJQU5HTEVTXFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0T2JqKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBzdXJmYWNlQ29sb3IgPSB1T2JqQ29sb3I7XFxyXFxuICAgICAgICAgbm9ybWFsID0gbm9ybWFsRm9yVHJpYW5nbGUob3JpZ2luLCBoaXQsIHRJbmRleCk7XFxyXFxuXFxyXFxuICAgICAgICAgaWYgKGJvdW5jZSA9PSAwKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICBvYmpIaXQgPSB0cnVlO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuI2VuZGlmXFxyXFxuICAgICAgZWxzZSBpZiAodCA9PSB0RG9tZSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgc3VyZmFjZUNvbG9yID0gRE9NRV9DT0xPUjtcXHJcXG4gICAgICAgICBub3JtYWwgPSAtbm9ybWFsRm9yU3BoZXJlKGhpdCwgRE9NRV9DRU5URVIsIERPTUVfUkFESVVTKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgZWxzZVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgY29sb3JNYXNrICo9IHN1cmZhY2VDb2xvcjtcXHJcXG5cXHJcXG4gICAgICBpZiAobGVuZ3RoKGNvbG9yTWFzaykgPCAwLjAxKVxcclxcbiAgICAgIHtcXHJcXG4gICAgICAgICBicmVhaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIC8vIGNvbXB1dGUgZGlmZnVzZSBsaWdodGluZyBjb250cmlidXRpb25cXHJcXG4gICAgICAgICB2ZWMzIHRvTGlnaHQgPSBMaWdodHNbaV0ucG9zIC0gaGl0O1xcclxcbiAgICAgICAgIHZlYzMgdG9MaWdodE4gPSBub3JtYWxpemUodG9MaWdodCk7XFxyXFxuXFxyXFxuICAgICAgICAgLy8gdHJhY2UgYSBzaGFkb3cgcmF5IHRvIHRoZSBsaWdodFxcclxcbiAgICAgICAgIGlmIChpblNoYWRvdyhoaXQgKyBub3JtYWwgKiBPRkZTRVQsIHRvTGlnaHROLCBsZW5ndGgodG9MaWdodCkpID09IGZhbHNlKVxcclxcbiAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAvLyBkaWZmdXNlIGNvbXBvbmVudFxcclxcbiAgICAgICAgICAgIGZsb2F0IGRpZmZ1c2UgPSBtYXgoMC4wLCBkb3QodG9MaWdodE4sIG5vcm1hbCkpO1xcclxcblxcclxcbiAgICAgICAgICAgIC8vIHNwZWN1bGFyIGNvbXBvbmVudFxcclxcbiAgICAgICAgICAgIHZlYzMgdG9FeWUgPSBleWUgLSBoaXQ7XFxyXFxuICAgICAgICAgICAgdmVjMyBuMmwgPSB0b0xpZ2h0TjtcXHJcXG4gICAgICAgICAgICB2ZWMzIG4yZSA9IG5vcm1hbGl6ZSh0b0V5ZSk7XFxyXFxuICAgICAgICAgICAgdmVjMyBiaXNlY3RvciA9IChuMmwgKyBuMmUpIC8gbGVuZ3RoKG4ybCArIG4yZSk7XFxyXFxuICAgICAgICAgICAgZmxvYXQgc3BlY3VsYXJDb2VmZmljaWVudCA9IDAuNTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzaGluaW5lc3MgPSAxMDAuMDtcXHJcXG4gICAgICAgICAgICBmbG9hdCBzcGVjdWxhciA9IHNwZWN1bGFyQ29lZmZpY2llbnQgKiBwb3cobWF4KDAuMCwgZG90KGJpc2VjdG9yLCBub3JtYWwpKSwgc2hpbmluZXNzKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvLyBhcHBseSBsaWdodCBmYWxsIG9mZiBhcyBkaXN0YW5jZSBzcXVhcmVzLiBVc2UgYSBtaW4gdmFsdWUgZm9yIHRoZVxcclxcbiAgICAgICAgICAgIC8vIGxpZ2h0IHNpemUgb3RoZXJ3aXNlIGZhbGxvZmYgaXMgdG9vIHJhcGlkXFxyXFxuICAgICAgICAgICAgZmxvYXQgcmFkaXVzID0gbWF4KDAuNzUsIExpZ2h0c1tpXS5zaXplKTtcXHJcXG4gICAgICAgICAgICBmbG9hdCBkaXN0ID0gbWF4KDEuMCwgKGxlbmd0aCh0b0xpZ2h0KSAtIHJhZGl1cykgLyByYWRpdXMpO1xcclxcbiAgICAgICAgICAgIGZsb2F0IGxpZ2h0SW50ZW5zaXR5ID0gTGlnaHRzW2ldLmludGVuc2l0eSAvIChkaXN0ICogZGlzdCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYWNjdW11bGF0ZWRDb2xvciArPSBjb2xvck1hc2sgKiBMaWdodHNbaV0uY29sb3IgKiBsaWdodEludGVuc2l0eSAqIGRpZmZ1c2U7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gVE9ETyBkZWZpbmUgYSBjb2xvciBtYXNrIGZvciBzcGVjdWxhciByZWZsZWN0aW9uXFxyXFxuICAgICAgICAgICAgLy8gICAgICAgICAgICBhY2N1bXVsYXRlZENvbG9yICs9IG1peChzdXJmYWNlQ29sb3IsIExpZ2h0c1tpXS5jb2xvciwgMC44KSAqXFxyXFxuICAgICAgICAgICAgLy8gICAgICAgICAgICBsaWdodEludGVuc2l0eSAqIHNwZWN1bGFyO1xcclxcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkQ29sb3IgKz1cXHJcXG4gICAgICAgICAgICAgICAgKGxlbmd0aChzdXJmYWNlQ29sb3IpICogTGlnaHRzW2ldLmNvbG9yKSAqIGxpZ2h0SW50ZW5zaXR5ICogc3BlY3VsYXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgaWYgKGJvdW5jZSA9PSAwICYmIGkgPT0gMClcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgc3BlY3VsYXJDb250cmlidXRpb24gKz0gbGlnaHRJbnRlbnNpdHkgKiBzcGVjdWxhcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIGVsc2UgaWYgKGJvdW5jZSA9PSAwICYmIGkgPT0gMClcXHJcXG4gICAgICAgICB7XFxyXFxuICAgICAgICAgICAgb2JqU2hhZG93ID0gdHJ1ZTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC8vIGNhbGN1bGF0ZSBuZXh0IG9yaWdpblxcclxcbiAgICAgIHJheSA9IGNvc2luZVdlaWdodGVkRGlyZWN0aW9uKHVSYW5kb20gKyBmbG9hdChib3VuY2UpLCBub3JtYWwpO1xcclxcblxcclxcbiAgICAgIG9yaWdpbiA9IGhpdDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgZmxvYXQgYWxwaGEgPSAxLjA7XFxyXFxuICAgaWYgKG9iakhpdClcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKG9ialNoYWRvdylcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1U2hhZG93QWxwaGE7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgYWxwaGEgPSB1TGlnaHRBbHBoYTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgYWxwaGEgKz0gY2xhbXAoc3BlY3VsYXJDb250cmlidXRpb24sIDAuMCwgMS4wKTtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgdmVjNCBzY2llbmNlQ29sb3IgPSB2ZWM0KGNsYW1wKGFjY3VtdWxhdGVkQ29sb3IsIDAuMCwgMS4wKSwgYWxwaGEpO1xcclxcbiAgIHJldHVybiBzY2llbmNlQ29sb3I7XFxyXFxuICAgLypcXHJcXG4gICBpZiAob2JqSGl0KVxcclxcbiAgIHtcXHJcXG4gICAgICByZXR1cm4gdmVjNCh0b0FydGlzdChzY2llbmNlQ29sb3IpLnJnYiwgYWxwaGEpO1xcclxcbiAgIH1cXHJcXG4gICBlbHNlXFxyXFxuICAge1xcclxcbiAgICAgIHJldHVybiBzY2llbmNlQ29sb3I7XFxyXFxuICAgfVxcclxcbiAgICovXFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIHZlYzMgcmFuZCA9IHVuaWZvcm1seVJhbmRvbVZlY3Rvcih1UmFuZG9tKSAqIExJR0hUX1NJWkU7XFxyXFxuXFxyXFxuICAgTGlnaHRzWzBdLmludGVuc2l0eSA9IHVMaWdodEludGVuc2l0eTtcXHJcXG4gICBMaWdodHNbMF0uc2l6ZSA9IExJR0hUX1NJWkU7XFxyXFxuICAgTGlnaHRzWzBdLnBvcyA9IHVMaWdodFBvcyArIHJhbmQ7XFxyXFxuICAgTGlnaHRzWzBdLmNvbG9yID0gdUxpZ2h0Q29sb3I7XFxyXFxuXFxyXFxuICAgZm9yIChpbnQgaSA9IDE7IGkgPCBOVU1fTElHSFRTOyBpKyspXFxyXFxuICAge1xcclxcbiAgICAgIGZsb2F0IHggPSBSQURJVVMgKiBzaW4oMi4wICogUEkgKiBmbG9hdChpKSAvIChmbG9hdChOVU1fTElHSFRTKSAtIDEuMCkpICsgcmFuZC54O1xcclxcbiAgICAgIGZsb2F0IHkgPSBIRUlHSFQgKyByYW5kLnk7XFxyXFxuICAgICAgZmxvYXQgeiA9IFJBRElVUyAqIGNvcygyLjAgKiBQSSAqIGZsb2F0KGkpIC8gKGZsb2F0KE5VTV9MSUdIVFMpIC0gMS4wKSkgKyByYW5kLno7XFxyXFxuXFxyXFxuICAgICAgTGlnaHRzW2ldLmludGVuc2l0eSA9IHVBbWJpZW50TGlnaHRJbnRlbnNpdHk7XFxyXFxuICAgICAgTGlnaHRzW2ldLnNpemUgPSAyLjAgKiBMSUdIVF9TSVpFO1xcclxcbiAgICAgIExpZ2h0c1tpXS5wb3MgPSB2ZWMzKHgsIHksIHopO1xcclxcbiAgICAgIExpZ2h0c1tpXS5jb2xvciA9IEFNQklFTlRfQ09MT1I7XFxyXFxuICAgfVxcclxcblxcclxcbiAgIC8vIG1lcmdlIHRoZSBuZXcgY29sb3IgaW50byB0aGUgZXhpc3RpbmcgdGV4dHVyZVxcclxcbiAgIHZlYzQgdGV4dHVyZUNvbG9yID0gdGV4dHVyZSh1VGV4dHVyZSwgZ2xfRnJhZ0Nvb3JkLnh5IC8gdVRleHR1cmVTaXplKTtcXHJcXG4gICB2ZWM0IG5ld0NvbG9yID0gY2FsY3VsYXRlQ29sb3IodUV5ZSwgaW5pdGlhbFJheSk7XFxyXFxuICAgZmxvYXQgd2VpZ2h0ID0gKHVTYW1wbGUgLyAoMS4wICsgdVNhbXBsZSkpO1xcclxcbiAgIGZyYWdDb2xvciA9IG1peChuZXdDb2xvciwgdGV4dHVyZUNvbG9yLCB3ZWlnaHQpO1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiPFZFUlNJT04+XFxyXFxuXFxyXFxuI2RlZmluZSBOT1RISU5HXFxyXFxuI2lmZGVmIFVTRV9UUklBTkdMRVNcXHJcXG4jZGVmaW5lIEVTMzAwXFxyXFxuI2VuZGlmXFxyXFxuXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcbnVuaWZvcm0gdmVjMyB1RXllLCB1UmF5MDAsIHVSYXkwMSwgdVJheTEwLCB1UmF5MTE7XFxyXFxuXFxyXFxuI2lmZGVmIEVTMzAwXFxyXFxuaW4gdmVjMyB2ZXJ0ZXg7XFxyXFxub3V0IHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZWxzZVxcclxcbmF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXHJcXG4jZW5kaWYgXFxyXFxuXFxyXFxudm9pZCBtYWluKClcXHJcXG57XFxyXFxuICAgdmVjMiBwZXJjZW50ID0gdmVydGV4Lnh5ICogMC41ICsgMC41O1xcclxcbiAgIGluaXRpYWxSYXkgPSBtaXgobWl4KHVSYXkwMCwgdVJheTAxLCBwZXJjZW50LnkpLCBtaXgodVJheTEwLCB1UmF5MTEsIHBlcmNlbnQueSksIHBlcmNlbnQueCk7XFxyXFxuICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHZlcnRleCwgMS4wKTtcXHJcXG59XFxyXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXHJcXG5cXHJcXG4vLyBpbnRlcnBvbGF0ZWQgdmFsdWVzIGZyb20gdGhlIHZlcnRleCBzaGFkZXJcXHJcXG52YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXHJcXG52YXJ5aW5nIHZlYzMgdlZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG51bmlmb3JtIGZsb2F0IHVMaWdodEludGVuc2l0eTtcXHJcXG51bmlmb3JtIGZsb2F0IHVBbWJpZW50SW50ZW5zaXR5O1xcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHREaXJlY3Rpb247XFxyXFxudW5pZm9ybSB2ZWMzIHVDb2xvcjtcXHJcXG5cXHJcXG51bmlmb3JtIGludCB1VXNlVGhyZXNob2xkcztcXHJcXG51bmlmb3JtIGZsb2F0IHVUaHJlc2hvbGQxO1xcclxcbnVuaWZvcm0gZmxvYXQgdVRocmVzaG9sZDI7XFxyXFxudW5pZm9ybSBmbG9hdCB1SGlnaGxpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0TGlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1TWlkTGlnaHQ7XFxyXFxudW5pZm9ybSBmbG9hdCB1RGFya0xpZ2h0O1xcclxcbnVuaWZvcm0gZmxvYXQgdVNoYWRvdztcXHJcXG5cXHJcXG51bmlmb3JtIGludCB1VXNlU2hhZG93cztcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2hhZG93VGV4dHVyZTtcXHJcXG5cXHJcXG5ib29sIGluX3NoYWRvdyh2b2lkKVxcclxcbntcXHJcXG4gICBpZiAodVVzZVNoYWRvd3MgPT0gMClcXHJcXG4gICB7XFxyXFxuICAgICAgcmV0dXJuIGZhbHNlO1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAvLyBUaGUgdmVydGV4IGxvY2F0aW9uIHJlbmRlcmVkIGZyb20gdGhlIGxpZ2h0IHNvdXJjZSBpcyBhbG1vc3QgaW4gTm9ybWFsaXplZFxcclxcbiAgIC8vIERldmljZSBDb29yZGluYXRlcyAoTkRDKSwgYnV0IHRoZSBwZXJzcGVjdGl2ZSBkaXZpc2lvbiBoYXMgbm90IGJlZW5cXHJcXG4gICAvLyBwZXJmb3JtZWQgeWV0LiBQZXJmb3JtIHRoZSBwZXJzcGVjdGl2ZSBkaXZpZGUuIFRoZSAoeCx5LHopIHZlcnRleCBsb2NhdGlvblxcclxcbiAgIC8vIGNvbXBvbmVudHMgYXJlIG5vdyBlYWNoIGluIHRoZSByYW5nZSBbLTEuMCwrMS4wXS5cXHJcXG4gICAvLyB2ZWMzIHZlcnRleF9yZWxhdGl2ZV90b19saWdodCA9IHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnh5eiAvIHZfVmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0Lnc7XFxyXFxuICAgdmVjMyB2ZXJ0ZXggPSB2U2hhZG93VmVydGV4O1xcclxcblxcclxcbiAgIC8vIENvbnZlcnQgdGhlIHRoZSB2YWx1ZXMgZnJvbSBOb3JtYWxpemVkIERldmljZSBDb29yZGluYXRlcyAocmFuZ2UgWy0xLjAsKzEuMF0pXFxyXFxuICAgLy8gdG8gdGhlIHJhbmdlIFswLjAsMS4wXS4gVGhpcyBtYXBwaW5nIGlzIGRvbmUgYnkgc2NhbGluZ1xcclxcbiAgIC8vIHRoZSB2YWx1ZXMgYnkgMC41LCB3aGljaCBnaXZlcyB2YWx1ZXMgaW4gdGhlIHJhbmdlIFstMC41LCswLjVdIGFuZCB0aGVuXFxyXFxuICAgLy8gc2hpZnRpbmcgdGhlIHZhbHVlcyBieSArMC41LlxcclxcbiAgIHZlcnRleCA9IHZlcnRleCAqIDAuNSArIDAuNTtcXHJcXG5cXHJcXG4gICAvLyBHZXQgdGhlIHogdmFsdWUgb2YgdGhpcyBmcmFnbWVudCBpbiByZWxhdGlvbnNoaXAgdG8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAvLyBUaGlzIHZhbHVlIHdhcyBzdG9yZWQgaW4gdGhlIHNoYWRvdyBtYXAgKGRlcHRoIGJ1ZmZlciBvZiB0aGUgZnJhbWUgYnVmZmVyKVxcclxcbiAgIC8vIHdoaWNoIHdhcyBwYXNzZWQgdG8gdGhlIHNoYWRlciBhcyBhIHRleHR1cmUgbWFwLlxcclxcbiAgIC8vIHZlYzQgdGV4dHVyZVZhbHVlID0gdGV4dHVyZTJEKHVTaGFkb3dTYW1wbGVyLCB2ZXJ0ZXgueHkpO1xcclxcblxcclxcbiAgIC8vIFRoZSB0ZXh0dXJlIG1hcCBjb250YWlucyBhIHNpbmdsZSBkZXB0aCB2YWx1ZSBmb3IgZWFjaCBwaXhlbC4gSG93ZXZlcixcXHJcXG4gICAvLyB0aGUgdGV4dHVyZTJEIHNhbXBsZXIgYWx3YXlzIHJldHVybnMgYSBjb2xvciBmcm9tIGEgdGV4dHVyZS4gRm9yIGFcXHJcXG4gICAvLyBnbC5ERVBUSF9DT01QT05FTlQgdGV4dHVyZSwgdGhlIGNvbG9yIGNvbnRhaW5zIHRoZSBkZXB0aCB2YWx1ZSBpblxcclxcbiAgIC8vIGVhY2ggb2YgdGhlIGNvbG9yIGNvbXBvbmVudHMuIElmIHRoZSB2YWx1ZSB3YXMgZCwgdGhlbiB0aGUgY29sb3IgcmV0dXJuZWRcXHJcXG4gICAvLyBpcyAoZCxkLGQsMSkuIFRoaXMgaXMgYSBcXFwiY29sb3JcXFwiIChkZXB0aCkgdmFsdWUgYmV0d2VlbiBbMC4wLCsxLjBdLlxcclxcbiAgIGZsb2F0IHNoYWRvd21hcF9kaXN0YW5jZSA9IHRleHR1cmUyRCh1U2hhZG93VGV4dHVyZSwgdmVydGV4Lnh5KS5yO1xcclxcblxcclxcbiAgIC8vIFRlc3QgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBmcmFnbWVudCBhbmQgdGhlIGxpZ2h0IHNvdXJjZSBhc1xcclxcbiAgIC8vIGNhbGN1bGF0ZWQgdXNpbmcgdGhlIHNoYWRvd21hcCB0cmFuc2Zvcm1hdGlvbiAodmVydGV4X3JlbGF0aXZlX3RvX2xpZ2h0LnopIGFuZFxcclxcbiAgIC8vIHRoZSBzbWFsbGVzdCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjbG9zZXN0IGZyYWdtZW50IHRvIHRoZSBsaWdodCBzb3VyY2VcXHJcXG4gICAvLyBmb3IgdGhpcyBsb2NhdGlvbiwgYXMgc3RvcmVkIGluIHRoZSBzaGFkb3dtYXAuIFdoZW4gdGhlIGNsb3Nlc3RcXHJcXG4gICAvLyBkaXN0YW5jZSB0byB0aGUgbGlnaHQgc291cmNlIHdhcyBzYXZlZCBpbiB0aGUgc2hhZG93bWFwLCBzb21lXFxyXFxuICAgLy8gcHJlY2lzaW9uIHdhcyBsb3N0LiBUaGVyZWZvcmUgd2UgbmVlZCBhIHNtYWxsIHRvbGVyYW5jZSBmYWN0b3IgdG9cXHJcXG4gICAvLyBjb21wZW5zYXRlIGZvciB0aGUgbG9zdCBwcmVjaXNpb24uXFxyXFxuICAgZmxvYXQgdG9sID0gMC4wMDE7XFxyXFxuICAgaWYgKHZlcnRleC56IDw9IHNoYWRvd21hcF9kaXN0YW5jZSArIHRvbClcXHJcXG4gICB7XFxyXFxuICAgICAgLy8gVGhpcyBzdXJmYWNlIHJlY2VpdmVzIGZ1bGwgbGlnaHQgYmVjYXVzZSBpdCBpcyB0aGUgY2xvc2VzdCBzdXJmYWNlXFxyXFxuICAgICAgLy8gdG8gdGhlIGxpZ2h0LlxcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICAvLyBUaGlzIHN1cmZhY2UgaXMgaW4gYSBzaGFkb3cgYmVjYXVzZSB0aGVyZSBpcyBhIGNsb3NlciBzdXJmYWNlIHRvXFxyXFxuICAgICAgLy8gdGhlIGxpZ2h0IHNvdXJjZS5cXHJcXG4gICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICB9XFxyXFxufVxcclxcblxcclxcbnZvaWQgbWFpbigpXFxyXFxue1xcclxcbiAgIGlmIChpbl9zaGFkb3coKSlcXHJcXG4gICB7XFxyXFxuICAgICAgaWYgKHVVc2VUaHJlc2hvbGRzID09IDApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodmVjMyh1QW1iaWVudEludGVuc2l0eSksIDEuMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2ZWMzKHVTaGFkb3cpLCAxLjApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICByZXR1cm47XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzMgZXllID0gdmVjMygwLjAsIDAuMCwgLTEwLjApO1xcclxcbiAgIHZlYzMgdG9MaWdodCA9IG5vcm1hbGl6ZSgtdUxpZ2h0RGlyZWN0aW9uKTtcXHJcXG4gICB2ZWMzIHRvRXllID0gbm9ybWFsaXplKGV5ZSAtIHZWZXJ0ZXgpO1xcclxcbiAgIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZOb3JtYWwpOyAvLyB2Tm9ybWFsIGlzIGludGVycG9sYXRlZCBhbmQgbm8gbG9uZyBub3JtYWxcXHJcXG5cXHJcXG4gICAvLyBjb21wdXRlIGRpZmZ1c2UgY29udHJpYnV0aW9uID0gY29zIG9mIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvcnMgKGRvdCBwcm9kdWN0KVxcclxcbiAgIGZsb2F0IGRpZmZ1c2VGYWN0b3IgPSBjbGFtcChkb3Qobm9ybWFsLCB0b0xpZ2h0KSwgMC4wLCAxLjApO1xcclxcbiAgIGZsb2F0IGRpZmZ1c2UgPSBkaWZmdXNlRmFjdG9yICogdUxpZ2h0SW50ZW5zaXR5O1xcclxcblxcclxcbiAgIC8vIGNvbXB1dGUgc3BlY3VsYXIgY29udHJpYnV0aW9uXFxyXFxuICAgZmxvYXQgc2hpbmluZXNzID0gMTUuMDtcXHJcXG4gICB2ZWMzIHJlZmxlY3Rpb24gPSBub3JtYWxpemUoMi4wICogZG90KG5vcm1hbCwgdG9MaWdodCkgKiBub3JtYWwgLSB0b0xpZ2h0KTtcXHJcXG4gICBmbG9hdCBjb3NBbmdsZSA9IGNsYW1wKGRvdChyZWZsZWN0aW9uLCB0b0V5ZSksIDAuMCwgMS4wKTsgLy8gY2xhbXAgdG8gYXZvaWQgdmFsdWVzID4gOTAgZGVnXFxyXFxuICAgZmxvYXQgc3BlY3VsYXIgPSAwLjEgKiBwb3coY29zQW5nbGUsIHNoaW5pbmVzcyk7XFxyXFxuXFxyXFxuICAgZmxvYXQgcmdiO1xcclxcbiAgIGlmICh1VXNlVGhyZXNob2xkcyA9PSAwKVxcclxcbiAgIHtcXHJcXG4gICAgICByZ2IgPSB1QW1iaWVudEludGVuc2l0eSArIGRpZmZ1c2UgKyBzcGVjdWxhcjtcXHJcXG4gICB9XFxyXFxuICAgZWxzZVxcclxcbiAgIHtcXHJcXG4gICAgICBmbG9hdCB0aHJlc2hvbGQgPSAxLjAgLSBkaWZmdXNlRmFjdG9yO1xcclxcblxcclxcbiAgICAgIGZsb2F0IHYxID0gbWluKHVUaHJlc2hvbGQxLCB1VGhyZXNob2xkMik7XFxyXFxuICAgICAgZmxvYXQgdjIgPSBtYXgodVRocmVzaG9sZDEsIHVUaHJlc2hvbGQyKTtcXHJcXG5cXHJcXG4gICAgICBpZiAodGhyZXNob2xkIDwgdjEpXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVMaWdodExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCB2MilcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmdiID0gdU1pZExpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBlbHNlIGlmICh0aHJlc2hvbGQgPCAxLjApXFxyXFxuICAgICAge1xcclxcbiAgICAgICAgIHJnYiA9IHVEYXJrTGlnaHQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGVsc2VcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmdiID0gdVNoYWRvdztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHNwZWN1bGFyID4gMC4wNSlcXHJcXG4gICAgICB7XFxyXFxuICAgICAgICAgcmdiID0gdUhpZ2hsaWdodDtcXHJcXG4gICAgICB9XFxyXFxuICAgfVxcclxcblxcclxcbiAgIHZlYzMgcmdidiA9IHZlYzMocmdiLCByZ2IsIHJnYik7XFxyXFxuICAgcmdidiAqPSB1Q29sb3I7XFxyXFxuICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChyZ2J2LCAxLjApO1xcclxcbn1cIiIsImV4cG9ydCBkZWZhdWx0IFwiYXR0cmlidXRlIHZlYzMgYVZlcnRleDtcXHJcXG5hdHRyaWJ1dGUgdmVjMyBhTm9ybWFsO1xcclxcblxcclxcbnVuaWZvcm0gbWF0NCBtb2RlbDtcXHJcXG51bmlmb3JtIG1hdDQgdmlldztcXHJcXG51bmlmb3JtIG1hdDQgc2hhZG93VmlldztcXHJcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXHJcXG5cXHJcXG52YXJ5aW5nIHZlYzMgdk5vcm1hbDtcXHJcXG52YXJ5aW5nIHZlYzMgdlZlcnRleDtcXHJcXG52YXJ5aW5nIHZlYzMgdlNoYWRvd1ZlcnRleDtcXHJcXG5cXHJcXG52b2lkIG1haW4oKVxcclxcbntcXHJcXG4gICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCk7XFxyXFxuICAgdk5vcm1hbCA9IChtb2RlbCAqIHZlYzQoYU5vcm1hbCwgMC4wKSkueHl6O1xcclxcbiAgIHZWZXJ0ZXggPSAobW9kZWwgKiB2ZWM0KGFWZXJ0ZXgsIDEuMCkpLnh5ejtcXHJcXG4gICB2U2hhZG93VmVydGV4ID0gKHNoYWRvd1ZpZXcgKiBtb2RlbCAqIHZlYzQoYVZlcnRleCwgMS4wKSkueHl6O1xcclxcbn1cIiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=