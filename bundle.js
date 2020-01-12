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
exports.push([module.i, "body {\r\n  margin: 0px;\r\n} \r\n \r\n/* Mouse-over effects */\r\n.slider:hover {\r\n  opacity: 1; /* Fully shown on mouse-over */\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 300px;\r\n  height: 5px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  -webkit-transition: 0.2s;\r\n  transition: opacity 0.2s;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background: #4caf50;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background: #4caf50;\r\n  cursor: pointer;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  width: 100px;\r\n  text-align: right;\r\n}\r\n\r\n", ""]);
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

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
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
  var css = remove ? '' : obj.css; // For old IE

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

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

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
        // create vertex buffer
        this.vertexBuffer = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].createBuffer();
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindBuffer(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, this.vertexBuffer);
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bufferData(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].ARRAY_BUFFER, new Float32Array(this.vertices), _index__WEBPACK_IMPORTED_MODULE_3__["gl"].STATIC_DRAW);
        // create framebuffer
        this.frameBuffer = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].createFramebuffer();
        // create textures
        var type = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getExtension('OES_texture_float') ? _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT : _index__WEBPACK_IMPORTED_MODULE_3__["gl"].UNSIGNED_BYTE;
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getExtension('EXT_color_buffer_float');
        //      type = gl.UNSIGNED_BYTE;
        type = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].FLOAT;
        this.textures = [];
        for (var i = 0; i < 2; i++) {
            this.textures.push(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].createTexture());
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, this.textures[i]);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texParameteri(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_MAG_FILTER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].NEAREST);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texParameteri(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_MIN_FILTER, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].NEAREST);
            _index__WEBPACK_IMPORTED_MODULE_3__["gl"].texImage2D(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, 0, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGB, 512, 512, 0, _index__WEBPACK_IMPORTED_MODULE_3__["gl"].RGB, type, null);
        }
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].bindTexture(_index__WEBPACK_IMPORTED_MODULE_3__["gl"].TEXTURE_2D, null);
        //   gl.viewport(0, 0, 300, 300);
        // create render shader
        this.renderProgram = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].compileShader(_Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].renderVertexSource, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].renderFragmentSource);
        this.renderVertexAttribute = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getAttribLocation(this.renderProgram, 'vertex');
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].enableVertexAttribArray(this.renderVertexAttribute);
        this.sampleCount = 0;
        this.tracerProgram = _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].compileShader(_Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].tracerVertexSource, _Shaders__WEBPACK_IMPORTED_MODULE_0__["Shaders"].makeTracerFragmentSource());
        this.tracerVertexAttribute = _index__WEBPACK_IMPORTED_MODULE_3__["gl"].getAttribLocation(this.tracerProgram, 'vertex');
        _index__WEBPACK_IMPORTED_MODULE_3__["gl"].enableVertexAttribArray(this.tracerVertexAttribute);
    }
    ;
    PathTracer.prototype.restart = function () {
        this.sampleCount = 0;
    };
    PathTracer.prototype.update = function (modelviewProjection, timeSinceStart) {
        var x = Math.random() * 2 - 1;
        var y = Math.random() * 2 - 1;
        var z = 0;
        var size = 512.0;
        var v = new _glVec__WEBPACK_IMPORTED_MODULE_2__["glVec3"]([x / size, y / size, z / size]);
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
    PathTracer.prototype.render = function () {
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


// constants for the shaders
var bounces = '5';
var epsilon = '0.0001';
var infinity = '10000.0';
var lightSize = 0.1;
/**
 * Values that are passed to the shader
 */
var Uniforms = {
    lightIntensity: 0.8,
    lightColor: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([1.0, 1.0, 1.0]),
    ballColor: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0.5, 0.5, 0.8]),
    eye: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    light: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([-0.4, 0.5, 0.6]),
    textureWeight: 0,
    timeSinceStart: 0,
    sphereCenter0: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, -0.5, 0]),
    sphereRadius0: 0.5,
    ray00: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    ray01: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    ray10: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
    ray11: new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]),
};
var Shaders = /** @class */ (function () {
    function Shaders() {
    }
    Object.defineProperty(Shaders, "renderVertexSource", {
        // vertex shader for drawing a textured quad
        get: function () {
            return '' +
                ' attribute vec3 vertex;\n' +
                ' varying vec2 texCoord;\n' +
                ' void main()\n' +
                ' {\n' +
                '   texCoord = vertex.xy * 0.5 + 0.5;\n' +
                '   gl_Position = vec4(vertex, 1.0);\n' +
                ' }\n';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shaders, "renderFragmentSource", {
        // fragment shader for drawing a textured quad
        get: function () {
            return '' +
                ' precision highp float;\n' +
                ' varying vec2 texCoord;\n' +
                ' uniform sampler2D texture;\n' +
                ' void main()\n' +
                ' {\n' +
                '   gl_FragColor = texture2D(texture, texCoord);\n' +
                ' }\n';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shaders, "tracerVertexSource", {
        // vertex shader, interpolate ray per-pixel
        get: function () {
            return "" +
                ' attribute vec3 vertex;\n' +
                ' uniform vec3 eye, ray00, ray01, ray10, ray11;\n' +
                ' varying vec3 initialRay;\n' +
                ' void main()\n' +
                ' {\n' +
                '   vec2 percent = vertex.xy * 0.5 + 0.5;\n' +
                '   initialRay = mix(mix(ray00, ray01, percent.y), mix(ray10, ray11, percent.y), percent.x);\n' +
                '   gl_Position = vec4(vertex, 1.0);\n' +
                ' }\n';
        },
        enumerable: true,
        configurable: true
    });
    Shaders.makeTracerFragmentSource = function () {
        return '' +
            ' precision highp float;\n' +
            ' uniform vec3 eye;\n' +
            ' varying vec3 initialRay;\n' +
            ' uniform float textureWeight;\n' +
            ' uniform float timeSinceStart;\n' +
            ' uniform sampler2D texture;\n' +
            ' uniform vec3 light;\n' +
            ' uniform float lightIntensity;\n' +
            ' uniform vec3 lightColor;\n' +
            ' uniform vec3 ballColor;\n' +
            ' uniform vec3 sphereCenter0;\n' +
            ' uniform float sphereRadius0;\n' +
            ' float intersectSphere(vec3 origin, vec3 ray, vec3 sphereCenter, float sphereRadius)\n' +
            ' {\n' +
            '   vec3 toSphere = origin - sphereCenter;\n' +
            '   float a = dot(ray, ray);\n' +
            '   float b = 2.0 * dot(toSphere, ray);\n' +
            '   float c = dot(toSphere, toSphere) - sphereRadius*sphereRadius;\n' +
            '   float discriminant = b*b - 4.0*a*c;\n' +
            '   if(discriminant > 0.0) {\n' +
            '     float t = (-b - sqrt(discriminant)) / (2.0 * a);\n' +
            '     if(t > 0.0) return t;\n' +
            '   }\n' +
            '   return ' + infinity + ';\n' +
            ' }\n' +
            '\n' +
            ' vec3 normalForSphere(vec3 hit, vec3 sphereCenter, float sphereRadius) \n' +
            ' {\n' +
            '   return (hit - sphereCenter) / sphereRadius;\n' +
            ' }\n' +
            '\n' +
            ' float random(vec3 scale, float seed) \n' +
            ' {\n' +
            '   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n' +
            ' }\n' +
            '\n' +
            ' vec3 cosineWeightedDirection(float seed, vec3 normal) \n' +
            ' {\n' +
            '   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\n' +
            '   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\n' +
            '   float r = sqrt(u);\n' +
            '   float angle = 6.283185307179586 * v;\n' +
            '   // compute basis from normal\n' +
            '   vec3 sdir, tdir;\n' +
            '   if (abs(normal.x)<.5) \n' +
            '   {\n' +
            '     sdir = cross(normal, vec3(1,0,0));\n' +
            '   }\n' +
            '   else \n' +
            '   {\n' +
            '     sdir = cross(normal, vec3(0,1,0));\n' +
            '   }\n' +
            '   tdir = cross(normal, sdir);\n' +
            '   return r*cos(angle)*sdir + r*sin(angle)*tdir + sqrt(1.-u)*normal;\n' +
            ' }\n' +
            '\n' +
            ' vec3 uniformlyRandomDirection(float seed) \n' +
            ' {\n' +
            '   float u = random(vec3(12.9898, 78.233, 151.7182), seed);\n' +
            '   float v = random(vec3(63.7264, 10.873, 623.6736), seed);\n' +
            '   float z = 1.0 - 2.0 * u;\n' +
            '   float r = sqrt(1.0 - z * z);\n' +
            '   float angle = 6.283185307179586 * v;\n' +
            '   return vec3(r * cos(angle), r * sin(angle), z);\n' +
            ' }\n' +
            '\n' +
            ' vec3 uniformlyRandomVector(float seed) \n' +
            ' {\n' +
            '   return uniformlyRandomDirection(seed) * sqrt(random(vec3(36.7539, 50.3658, 306.2759), seed));\n' +
            ' }\n' +
            '\n' +
            ' float shadow(vec3 origin, vec3 ray) \n' +
            ' {\n' +
            '   float tSphere0 = intersectSphere(origin, ray, sphereCenter0, sphereRadius0);\n' +
            '   if(tSphere0 < 1.0)\n' +
            '   {\n' +
            '     return 0.0;\n' +
            '   }\n' +
            '   else\n' +
            '   {\n' +
            '     return 1.0;\n' +
            '   }\n' +
            ' }\n' +
            '\n' +
            ' vec3 calculateColor(vec3 origin, vec3 ray, vec3 light) \n' +
            ' {\n' +
            '   vec3 colorMask = lightColor;\n' +
            '   vec3 accumulatedColor = vec3(0.0);\n' +
            '\n' +
            '   // main raytracing loop\n' +
            '   for(int bounce = 0; bounce < ' + bounces + '; bounce++) \n' +
            '   {\n' +
            '\n' +
            '     // compute the intersection with everything\n' +
            '     float tSphere0 = intersectSphere(origin, ray, sphereCenter0, sphereRadius0);\n' +
            '     vec3 surfaceColor = vec3(0.5);\n' + // SAW material color
            '\n' +
            '     // find the closest intersection\n' +
            '     float t = ' + infinity + ';\n' +
            '     float tfloor = ' + infinity + ';\n' +
            '\n' +
            '     // check for intersection with the ground\n' +
            '     if (ray.y < 0.0)\n' +
            '     {\n' +
            '       // distance to floor = num unit vectors required to reach the floor\n' +
            '       tfloor = -(origin.y+1.0)/ray.y;\n' +
            '       if (tfloor < t )\n' +
            '       {\n' +
            '         t = tfloor;\n' +
            '       }\n' +
            '     }\n' +
            '\n' +
            '     if(tSphere0 < t)\n' +
            '     {\n' +
            '       surfaceColor = vec3(ballColor);\n' +
            '       t = tSphere0;\n' +
            '     }\n' +
            '\n' +
            '     // info about hit\n' +
            '     vec3 hit = origin + ray * t;\n' +
            '     float specularHighlight = 0.0;\n' +
            '     vec3 normal;\n' +
            '\n' +
            '     // calculate the normal\n' +
            '     if(t == tfloor)\n' +
            '     {\n' +
            '       normal = vec3(0.0,1.0,0.0);\n' +
            '     }\n' +
            '     else if(t == tSphere0)\n' +
            '     {\n' +
            '       normal = normalForSphere(hit, sphereCenter0, sphereRadius0);\n' +
            '     }\n' +
            '     else\n' +
            '     {\n' +
            '       break;\n' +
            '     }\n' +
            '\n' +
            '     ray = cosineWeightedDirection(timeSinceStart + float(bounce), normal);\n' +
            '\n' +
            '     // compute diffuse lighting contribution\n' +
            '     vec3 toLight = light - hit;\n' +
            '     float diffuse = max(0.0, dot(normalize(toLight), normal));\n' +
            '\n' +
            '     // trace a shadow ray to the light\n' +
            '     float shadowIntensity = shadow(hit + normal * ' + epsilon + ', toLight);\n' +
            '\n' +
            '     // do light bounce\n' +
            '     colorMask *= surfaceColor;\n' +
            '     accumulatedColor += colorMask * (lightIntensity * diffuse * shadowIntensity);\n' +
            '     accumulatedColor += colorMask * specularHighlight * shadowIntensity;\n' +
            '\n' +
            '     // calculate next origin\n' +
            '     origin = hit;\n' +
            '   }\n' +
            '\n' +
            '   return accumulatedColor;\n' +
            ' }\n' +
            '\n' +
            ' void main() \n' +
            ' {\n' +
            '   vec3 newLight = light + uniformlyRandomVector(timeSinceStart - 53.0) * ' + lightSize + ';\n' +
            '   vec3 texture = texture2D(texture, gl_FragCoord.xy / 512.0).rgb;\n' +
            '   gl_FragColor = vec4(mix(calculateColor(eye, initialRay, newLight), texture, textureWeight), 1.0);\n' +
            ' }\n';
    };
    ////////////////////////////////////////////////////////////////////////////////
    // utility functions
    ////////////////////////////////////////////////////////////////////////////////
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
            else {
                _index__WEBPACK_IMPORTED_MODULE_1__["gl"].uniform1f(location, value);
            }
        }
    };
    Shaders.compileSource = function (source, type) {
        console.log('-----------------------------------------------------------------------------');
        console.log(source);
        console.log('-----------------------------------------------------------------------------');
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
    // compute specular lighting contribution
    Shaders.specularReflection = ' vec3 reflectedLight = normalize(reflect(light - hit, normal));\n' +
        ' specularHighlight = max(0.0, dot(reflectedLight, normalize(hit - origin)));\n';
    // update ray using normal and bounce according to a diffuse reflection
    Shaders.newDiffuseRay = '       ray = cosineWeightedDirection(timeSinceStart + float(bounce), normal);\n';
    // update ray using normal according to a specular reflection
    Shaders.newReflectiveRay = '       ray = reflect(ray, normal);\n' +
        Shaders.specularReflection +
        '     specularHighlight = 2.0 * pow(specularHighlight, 20.0);\n';
    // update ray using normal and bounce according to a glossy reflection
    Shaders.newGlossyRay = '       ray = normalize(reflect(ray, normal)) + uniformlyRandomVector(timeSinceStart + float(bounce)) * glossiness;\n' +
        Shaders.specularReflection +
        '     specularHighlight = pow(specularHighlight, 3.0);\n';
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
    App.prototype.update = function (timeSinceStart) {
        this.modelview = _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"].makeLookAt(_Shaders__WEBPACK_IMPORTED_MODULE_1__["Uniforms"].eye, new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 0, 0]), // center point
        new _glVec__WEBPACK_IMPORTED_MODULE_0__["glVec3"]([0, 1, 0]) // up vector
        );
        this.projection = _glMat__WEBPACK_IMPORTED_MODULE_3__["glMat4"].makePerspective(55, 1, 0.1, 100);
        this.modelviewProjection = this.projection.multM(this.modelview);
        this.tracer.update(this.modelviewProjection, timeSinceStart);
    };
    ;
    App.prototype.render = function () {
        this.tracer.render();
    };
    ;
    App.prototype.restart = function () {
        this.tracer.restart();
    };
    return App;
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
/* harmony import */ var _glVec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glVec */ "./src/glVec.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);




var app;
var gl;
var canvas;
var angleX = 0;
var angleY = 0;
var zoomZ = 3.0;
function component() {
    var element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = '   <div id="main">\n' +
        '<canvas id="canvas" width="512" height="512"></canvas>\n' +
        '</div>\n' +
        '<label for="range1">Light</label>\n' +
        '<input id="range1" type="range" min="1" max="100" value="50" class="slider">\n' +
        '<input id="picker1" type="color">\n' +
        '<br>\n' +
        '<label for="picker2">Ball</label>\n' +
        '<input id="picker2" type="color">\n';
    return element;
}
document.body.appendChild(component());
function tick(timeSinceStart) {
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].eye.set(0, zoomZ * Math.sin(angleY) * Math.cos(angleX));
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].eye.set(1, zoomZ * Math.sin(angleX));
    _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].eye.set(2, zoomZ * Math.cos(angleY) * Math.cos(angleX));
    app.update(timeSinceStart);
    app.render();
}
window.onload = function () {
    gl = null;
    canvas = document.getElementById('canvas');
    try {
        gl = canvas.getContext('webgl');
    }
    catch (e) { }
    if (gl) {
        app = new _app__WEBPACK_IMPORTED_MODULE_2__["App"]();
        var start = new Date().getTime();
        setInterval(function () { tick(((new Date()).getTime() - start) * 0.001); }, 1000 / 60);
    }
    var slider = document.getElementById("range1");
    slider.value = "" + _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightIntensity * 50;
    slider.oninput = function () {
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightIntensity = parseFloat(slider.value) / 50;
        app.restart();
    };
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    var lightPicker = document.getElementById("picker1");
    var r = Math.round(255 * _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightColor.get(0));
    var g = Math.round(255 * _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightColor.get(1));
    var b = Math.round(255 * _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightColor.get(2));
    lightPicker.value = rgbToHex(r, g, b);
    lightPicker.oninput = function () {
        var color = hexToRgb(lightPicker.value);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].lightColor = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([color.r / 255.0, color.g / 255.0, color.b / 255.0]);
        app.restart();
    };
    var ballPicker = document.getElementById("picker2");
    r = Math.round(255 * _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ballColor.get(0));
    g = Math.round(255 * _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ballColor.get(1));
    b = Math.round(255 * _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ballColor.get(2));
    ballPicker.value = rgbToHex(r, g, b);
    ballPicker.oninput = function () {
        var color = hexToRgb(ballPicker.value);
        _Shaders__WEBPACK_IMPORTED_MODULE_0__["Uniforms"].ballColor = new _glVec__WEBPACK_IMPORTED_MODULE_1__["glVec3"]([color.r / 255.0, color.g / 255.0, color.b / 255.0]);
        app.restart();
    };
};
function elementPos(element) {
    var x = 0, y = 0;
    while (element.offsetParent) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return { x: x, y: y };
}
function eventPos(event) {
    return {
        x: event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        y: event.clientY + document.body.scrollTop + document.documentElement.scrollTop
    };
}
function canvasMousePos(event) {
    var mousePos = eventPos(event);
    var canvasPos = elementPos(canvas);
    return {
        x: mousePos.x - canvasPos.x,
        y: mousePos.y - canvasPos.y
    };
}
var mouseDown = false;
var oldX;
var oldY;
document.onmousedown = function (event) {
    var mouse = canvasMousePos(event);
    oldX = mouse.x;
    oldY = mouse.y;
    if (mouse.x >= 0 && mouse.y >= 0 && mouse.x < 512 && mouse.y < 512) {
        mouseDown = true;
        // disable selection because dragging is used for rotating the camera and moving objects
        return false;
    }
    return true;
};
document.onmousemove = function (event) {
    var mouse = canvasMousePos(event);
    if (mouseDown) {
        // update the angles based on how far we moved since last time
        angleY -= (mouse.x - oldX) * 0.01;
        angleX += (mouse.y - oldY) * 0.01;
        // don't go upside down
        angleX = Math.max(angleX, -Math.PI / 2 + 0.01);
        angleX = Math.min(angleX, Math.PI / 2 - 0.01);
        // clear the sample buffer
        app.restart();
        // remember this coordinate
        oldX = mouse.x;
        oldY = mouse.y;
    }
    document.onmouseup = function (event) {
        mouseDown = false;
    };
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

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhdGhUcmFjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NoYWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xNYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsVmVjLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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QUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvRixJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQyw0QkFBNEI7UUFDNUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEYsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7UUFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFNUQsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFTLEdBQWhCO1FBQ0csSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUUxQixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQy9CLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzNDO1NBQ0g7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxzQkFBZSxHQUE3QixVQUE4QixDQUFT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LENBQUMsQ0FBQztRQUMvQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFOUMsMEJBQTBCO1FBQzFCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVkLDJCQUEyQjtRQUMzQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBRUQsUUFBUSxDQUFDLFNBQVMsR0FBRyxVQUFVLEtBQUs7UUFDakMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7QUN6S0QsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRXpGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUzs7QUFFMUI7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn0gXFxyXFxuIFxcclxcbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xcclxcbi5zbGlkZXI6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgc2hvd24gb24gbW91c2Utb3ZlciAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBsaXN0W2ldWzFdLFxuICAgICAgbWVkaWE6IGxpc3RbaV1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGxpc3RbaV1bM11cbiAgICB9O1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ucHVzaChhZGRTdHlsZShwYXJ0LCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbW9kdWxlSWQgPSBvcHRpb25zLmJhc2UgPyBtb2R1bGVJZCArIG9wdGlvbnMuYmFzZSA6IG1vZHVsZUlkO1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcblxuICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICB9XG5cbiAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICAgIH1cblxuICAgIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBqID0gbmV3TGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtqXSgpO1xuICAgIH1cblxuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPSBuZXdMaXN0Lmxlbmd0aDtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgc3R5bGVzSW5Eb21bbW9kdWxlSWRdO1xuICAgIH1cbiAgfTtcbn07IiwiXHJcbi8qXHJcbiBXZWJHTCBQYXRoIFRyYWNpbmcgKGh0dHA6Ly9tYWRlYnlldmFuLmNvbS93ZWJnbC1wYXRoLXRyYWNpbmcvKVxyXG4gTGljZW5zZTogTUlUIExpY2Vuc2UgKHNlZSBiZWxvdylcclxuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTAgRXZhbiBXYWxsYWNlXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cclxuIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXHJcbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcclxuIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxyXG4gY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxyXG4gU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcclxuIGNvbmRpdGlvbnM6XHJcblxyXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXHJcbiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG4gSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcbiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgU2hhZGVycywgVW5pZm9ybXMgfSBmcm9tICcuL1NoYWRlcnMnO1xyXG5pbXBvcnQgeyBnbE1hdDQgfSBmcm9tICcuL2dsTWF0JztcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSAnLi9nbFZlYyc7XHJcbmltcG9ydCB7IGdsIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aFRyYWNlciB7XHJcblxyXG4gICBwcml2YXRlIHZlcnRleEJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgIHByaXZhdGUgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XHJcbiAgIHByaXZhdGUgdGV4dHVyZXM6IFdlYkdMVGV4dHVyZVtdO1xyXG4gICBwcml2YXRlIHJlbmRlclByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSByZW5kZXJWZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBzYW1wbGVDb3VudDogbnVtYmVyO1xyXG4gICBwcml2YXRlIHRyYWNlclByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuICAgcHJpdmF0ZSB0cmFjZXJWZXJ0ZXhBdHRyaWJ1dGU6IG51bWJlcjtcclxuXHJcbiAgIHByaXZhdGUgdmVydGljZXMgPSBbXHJcbiAgICAgIC0xLCAtMSxcclxuICAgICAgLTEsICsxLFxyXG4gICAgICArMSwgLTEsXHJcbiAgICAgICsxLCArMVxyXG4gICBdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAvLyBjcmVhdGUgdmVydGV4IGJ1ZmZlclxyXG4gICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGZyYW1lYnVmZmVyXHJcbiAgICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRleHR1cmVzXHJcbiAgICAgIHZhciB0eXBlID0gZ2wuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9mbG9hdCcpID8gZ2wuRkxPQVQgOiBnbC5VTlNJR05FRF9CWVRFO1xyXG4gICAgICBnbC5nZXRFeHRlbnNpb24oJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnKTtcclxuICAgICAgLy8gICAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURTtcclxuICAgICAgdHlwZSA9IGdsLkZMT0FUO1xyXG4gICAgICB0aGlzLnRleHR1cmVzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudGV4dHVyZXMucHVzaChnbC5jcmVhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzW2ldKTtcclxuICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCLCA1MTIsIDUxMiwgMCwgZ2wuUkdCLCB0eXBlLCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgLy8gICBnbC52aWV3cG9ydCgwLCAwLCAzMDAsIDMwMCk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgcmVuZGVyIHNoYWRlclxyXG4gICAgICB0aGlzLnJlbmRlclByb2dyYW0gPSBTaGFkZXJzLmNvbXBpbGVTaGFkZXIoU2hhZGVycy5yZW5kZXJWZXJ0ZXhTb3VyY2UsIFNoYWRlcnMucmVuZGVyRnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgICB0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucmVuZGVyUHJvZ3JhbSwgJ3ZlcnRleCcpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICB0aGlzLnNhbXBsZUNvdW50ID0gMDtcclxuICAgICAgdGhpcy50cmFjZXJQcm9ncmFtID0gU2hhZGVycy5jb21waWxlU2hhZGVyKFNoYWRlcnMudHJhY2VyVmVydGV4U291cmNlLCBTaGFkZXJzLm1ha2VUcmFjZXJGcmFnbWVudFNvdXJjZSgpKTtcclxuICAgICAgdGhpcy50cmFjZXJWZXJ0ZXhBdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnRyYWNlclByb2dyYW0sICd2ZXJ0ZXgnKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50cmFjZXJWZXJ0ZXhBdHRyaWJ1dGUpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc2FtcGxlQ291bnQgPSAwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlKG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NCwgdGltZVNpbmNlU3RhcnQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XHJcbiAgICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xyXG4gICAgICBsZXQgeiA9IDA7XHJcblxyXG4gICAgICBsZXQgc2l6ZSA9IDUxMi4wO1xyXG4gICAgICBsZXQgdiA9IG5ldyBnbFZlYzMoW3ggLyBzaXplLCB5IC8gc2l6ZSwgeiAvIHNpemVdKTtcclxuICAgICAgbGV0IGppdHRlciA9IGdsTWF0NC5mcm9tVHJhbnNsYXRpb24odik7XHJcbiAgICAgIGxldCBtYXRyaXggPSBqaXR0ZXIubXVsdE0obW9kZWx2aWV3UHJvamVjdGlvbikuaW52ZXJ0KCk7XHJcblxyXG4gICAgICBVbmlmb3Jtcy5yYXkwMCA9IFNoYWRlcnMuZ2V0RXllUmF5KG1hdHJpeCwgLTEsIC0xKTtcclxuICAgICAgVW5pZm9ybXMucmF5MDEgPSBTaGFkZXJzLmdldEV5ZVJheShtYXRyaXgsIC0xLCArMSk7XHJcbiAgICAgIFVuaWZvcm1zLnJheTEwID0gU2hhZGVycy5nZXRFeWVSYXkobWF0cml4LCArMSwgLTEpO1xyXG4gICAgICBVbmlmb3Jtcy5yYXkxMSA9IFNoYWRlcnMuZ2V0RXllUmF5KG1hdHJpeCwgKzEsICsxKTtcclxuICAgICAgVW5pZm9ybXMudGltZVNpbmNlU3RhcnQgPSB0aW1lU2luY2VTdGFydDtcclxuICAgICAgVW5pZm9ybXMudGV4dHVyZVdlaWdodCA9IHRoaXMuc2FtcGxlQ291bnQgLyAodGhpcy5zYW1wbGVDb3VudCArIDEpO1xyXG5cclxuICAgICAgLy8gc2V0IHVuaWZvcm1zXHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy50cmFjZXJQcm9ncmFtKTtcclxuICAgICAgU2hhZGVycy5zZXRVbmlmb3Jtcyh0aGlzLnRyYWNlclByb2dyYW0pO1xyXG5cclxuICAgICAgLy8gcmVuZGVyIHRvIHRleHR1cmVcclxuICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnRyYWNlclByb2dyYW0pO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzBdKTtcclxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2wuRlJBTUVCVUZGRVIsIGdsLkNPTE9SX0FUVEFDSE1FTlQwLCBnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmVzWzFdLCAwKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XHJcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcblxyXG4gICAgICAvLyBwaW5nIHBvbmcgdGV4dHVyZXNcclxuICAgICAgdGhpcy50ZXh0dXJlcy5yZXZlcnNlKCk7XHJcbiAgICAgIHRoaXMuc2FtcGxlQ291bnQrKztcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5yZW5kZXJQcm9ncmFtKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1swXSk7XHJcbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdsVmVjMywgZ2xWZWM0IH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgZ2xNYXQ0IH0gZnJvbSBcIi4vZ2xNYXRcIjtcclxuaW1wb3J0IHsgZ2wgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuLy8gY29uc3RhbnRzIGZvciB0aGUgc2hhZGVyc1xyXG52YXIgYm91bmNlcyA9ICc1JztcclxudmFyIGVwc2lsb24gPSAnMC4wMDAxJztcclxudmFyIGluZmluaXR5ID0gJzEwMDAwLjAnO1xyXG52YXIgbGlnaHRTaXplID0gMC4xO1xyXG5cclxuLyoqXHJcbiAqIFR5cGVzIGZvciB0aGUgdW5pZm9ybSB2YWx1ZXNcclxuICovXHJcbmludGVyZmFjZSBJVW5pZm9ybXMge1xyXG4gICBsaWdodEludGVuc2l0eTogbnVtYmVyLFxyXG4gICBsaWdodENvbG9yOiBnbFZlYzMsXHJcbiAgIGJhbGxDb2xvcjogZ2xWZWMzLFxyXG4gICBleWU6IGdsVmVjMyxcclxuICAgbGlnaHQ6IGdsVmVjMyxcclxuICAgdGV4dHVyZVdlaWdodDogbnVtYmVyLFxyXG4gICB0aW1lU2luY2VTdGFydDogbnVtYmVyLFxyXG4gICBzcGhlcmVDZW50ZXIwOiBnbFZlYzMsXHJcbiAgIHNwaGVyZVJhZGl1czA6IG51bWJlcixcclxuICAgcmF5MDA6IGdsVmVjMyxcclxuICAgcmF5MDE6IGdsVmVjMyxcclxuICAgcmF5MTA6IGdsVmVjMyxcclxuICAgcmF5MTE6IGdsVmVjMyxcclxuICAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnlcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbHVlcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IHZhciBVbmlmb3JtczogSVVuaWZvcm1zID0ge1xyXG4gICBsaWdodEludGVuc2l0eTogMC44LFxyXG4gICBsaWdodENvbG9yOiBuZXcgZ2xWZWMzKFsxLjAsIDEuMCwgMS4wXSksXHJcbiAgIGJhbGxDb2xvcjogbmV3IGdsVmVjMyhbMC41LCAwLjUsIDAuOF0pLFxyXG4gICBleWU6IG5ldyBnbFZlYzMoWzAsIDAsIDBdKSxcclxuICAgbGlnaHQ6IG5ldyBnbFZlYzMoWy0wLjQsIDAuNSwgMC42XSksIC8vIFNBVyBsaWdodCBwb3NpdGlvblxyXG4gICB0ZXh0dXJlV2VpZ2h0OiAwLFxyXG4gICB0aW1lU2luY2VTdGFydDogMCxcclxuICAgc3BoZXJlQ2VudGVyMDogbmV3IGdsVmVjMyhbMCwgLTAuNSwgMF0pLFxyXG4gICBzcGhlcmVSYWRpdXMwOiAwLjUsXHJcbiAgIHJheTAwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHJheTAxOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHJheTEwOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbiAgIHJheTExOiBuZXcgZ2xWZWMzKFswLCAwLCAwXSksXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFkZXJzIHtcclxuXHJcbiAgIC8vIHZlcnRleCBzaGFkZXIgZm9yIGRyYXdpbmcgYSB0ZXh0dXJlZCBxdWFkXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IHJlbmRlclZlcnRleFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJycgK1xyXG4gICAgICAgICAnIGF0dHJpYnV0ZSB2ZWMzIHZlcnRleDtcXG4nICtcclxuICAgICAgICAgJyB2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxuJyArXHJcbiAgICAgICAgICcgdm9pZCBtYWluKClcXG4nICtcclxuICAgICAgICAgJyB7XFxuJyArXHJcbiAgICAgICAgICcgICB0ZXhDb29yZCA9IHZlcnRleC54eSAqIDAuNSArIDAuNTtcXG4nICtcclxuICAgICAgICAgJyAgIGdsX1Bvc2l0aW9uID0gdmVjNCh2ZXJ0ZXgsIDEuMCk7XFxuJyArXHJcbiAgICAgICAgICcgfVxcbidcclxuICAgfVxyXG5cclxuICAgLy8gZnJhZ21lbnQgc2hhZGVyIGZvciBkcmF3aW5nIGEgdGV4dHVyZWQgcXVhZFxyXG4gICBwdWJsaWMgc3RhdGljIGdldCByZW5kZXJGcmFnbWVudFNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJycgK1xyXG4gICAgICAgICAnIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4nICtcclxuICAgICAgICAgJyB2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XFxuJyArXHJcbiAgICAgICAgICcgdW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcXG4nICtcclxuICAgICAgICAgJyB2b2lkIG1haW4oKVxcbicgK1xyXG4gICAgICAgICAnIHtcXG4nICtcclxuICAgICAgICAgJyAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlLCB0ZXhDb29yZCk7XFxuJyArXHJcbiAgICAgICAgICcgfVxcbic7XHJcbiAgIH1cclxuXHJcbiAgIC8vIHZlcnRleCBzaGFkZXIsIGludGVycG9sYXRlIHJheSBwZXItcGl4ZWxcclxuICAgcHVibGljIHN0YXRpYyBnZXQgdHJhY2VyVmVydGV4U291cmNlKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBcIlwiICtcclxuICAgICAgICAgJyBhdHRyaWJ1dGUgdmVjMyB2ZXJ0ZXg7XFxuJyArXHJcbiAgICAgICAgICcgdW5pZm9ybSB2ZWMzIGV5ZSwgcmF5MDAsIHJheTAxLCByYXkxMCwgcmF5MTE7XFxuJyArXHJcbiAgICAgICAgICcgdmFyeWluZyB2ZWMzIGluaXRpYWxSYXk7XFxuJyArXHJcbiAgICAgICAgICcgdm9pZCBtYWluKClcXG4nICtcclxuICAgICAgICAgJyB7XFxuJyArXHJcbiAgICAgICAgICcgICB2ZWMyIHBlcmNlbnQgPSB2ZXJ0ZXgueHkgKiAwLjUgKyAwLjU7XFxuJyArXHJcbiAgICAgICAgICcgICBpbml0aWFsUmF5ID0gbWl4KG1peChyYXkwMCwgcmF5MDEsIHBlcmNlbnQueSksIG1peChyYXkxMCwgcmF5MTEsIHBlcmNlbnQueSksIHBlcmNlbnQueCk7XFxuJyArXHJcbiAgICAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQodmVydGV4LCAxLjApO1xcbicgK1xyXG4gICAgICAgICAnIH1cXG4nO1xyXG4gICB9XHJcblxyXG4gICAvLyBjb21wdXRlIHNwZWN1bGFyIGxpZ2h0aW5nIGNvbnRyaWJ1dGlvblxyXG4gICBwcml2YXRlIHN0YXRpYyBzcGVjdWxhclJlZmxlY3Rpb24gPVxyXG4gICAgICAnIHZlYzMgcmVmbGVjdGVkTGlnaHQgPSBub3JtYWxpemUocmVmbGVjdChsaWdodCAtIGhpdCwgbm9ybWFsKSk7XFxuJyArXHJcbiAgICAgICcgc3BlY3VsYXJIaWdobGlnaHQgPSBtYXgoMC4wLCBkb3QocmVmbGVjdGVkTGlnaHQsIG5vcm1hbGl6ZShoaXQgLSBvcmlnaW4pKSk7XFxuJztcclxuXHJcbiAgIC8vIHVwZGF0ZSByYXkgdXNpbmcgbm9ybWFsIGFuZCBib3VuY2UgYWNjb3JkaW5nIHRvIGEgZGlmZnVzZSByZWZsZWN0aW9uXHJcbiAgIHByaXZhdGUgc3RhdGljIG5ld0RpZmZ1c2VSYXkgPVxyXG4gICAgICAnICAgICAgIHJheSA9IGNvc2luZVdlaWdodGVkRGlyZWN0aW9uKHRpbWVTaW5jZVN0YXJ0ICsgZmxvYXQoYm91bmNlKSwgbm9ybWFsKTtcXG4nO1xyXG5cclxuICAgLy8gdXBkYXRlIHJheSB1c2luZyBub3JtYWwgYWNjb3JkaW5nIHRvIGEgc3BlY3VsYXIgcmVmbGVjdGlvblxyXG4gICBwcml2YXRlIHN0YXRpYyBuZXdSZWZsZWN0aXZlUmF5ID1cclxuICAgICAgJyAgICAgICByYXkgPSByZWZsZWN0KHJheSwgbm9ybWFsKTtcXG4nICtcclxuICAgICAgU2hhZGVycy5zcGVjdWxhclJlZmxlY3Rpb24gK1xyXG4gICAgICAnICAgICBzcGVjdWxhckhpZ2hsaWdodCA9IDIuMCAqIHBvdyhzcGVjdWxhckhpZ2hsaWdodCwgMjAuMCk7XFxuJztcclxuXHJcbiAgIC8vIHVwZGF0ZSByYXkgdXNpbmcgbm9ybWFsIGFuZCBib3VuY2UgYWNjb3JkaW5nIHRvIGEgZ2xvc3N5IHJlZmxlY3Rpb25cclxuICAgcHJpdmF0ZSBzdGF0aWMgbmV3R2xvc3N5UmF5ID1cclxuICAgICAgJyAgICAgICByYXkgPSBub3JtYWxpemUocmVmbGVjdChyYXksIG5vcm1hbCkpICsgdW5pZm9ybWx5UmFuZG9tVmVjdG9yKHRpbWVTaW5jZVN0YXJ0ICsgZmxvYXQoYm91bmNlKSkgKiBnbG9zc2luZXNzO1xcbicgK1xyXG4gICAgICBTaGFkZXJzLnNwZWN1bGFyUmVmbGVjdGlvbiArXHJcbiAgICAgICcgICAgIHNwZWN1bGFySGlnaGxpZ2h0ID0gcG93KHNwZWN1bGFySGlnaGxpZ2h0LCAzLjApO1xcbic7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIG1ha2VUcmFjZXJGcmFnbWVudFNvdXJjZSgpIHtcclxuICAgICAgcmV0dXJuICcnICtcclxuICAgICAgICAgJyBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuJyArXHJcbiAgICAgICAgICcgdW5pZm9ybSB2ZWMzIGV5ZTtcXG4nICtcclxuICAgICAgICAgJyB2YXJ5aW5nIHZlYzMgaW5pdGlhbFJheTtcXG4nICtcclxuICAgICAgICAgJyB1bmlmb3JtIGZsb2F0IHRleHR1cmVXZWlnaHQ7XFxuJyArXHJcbiAgICAgICAgICcgdW5pZm9ybSBmbG9hdCB0aW1lU2luY2VTdGFydDtcXG4nICtcclxuICAgICAgICAgJyB1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xcbicgK1xyXG4gICAgICAgICAnIHVuaWZvcm0gdmVjMyBsaWdodDtcXG4nICtcclxuICAgICAgICAgJyB1bmlmb3JtIGZsb2F0IGxpZ2h0SW50ZW5zaXR5O1xcbicgK1xyXG4gICAgICAgICAnIHVuaWZvcm0gdmVjMyBsaWdodENvbG9yO1xcbicgK1xyXG4gICAgICAgICAnIHVuaWZvcm0gdmVjMyBiYWxsQ29sb3I7XFxuJyArXHJcbiAgICAgICAgICcgdW5pZm9ybSB2ZWMzIHNwaGVyZUNlbnRlcjA7XFxuJyArXHJcbiAgICAgICAgICcgdW5pZm9ybSBmbG9hdCBzcGhlcmVSYWRpdXMwO1xcbicgK1xyXG4gICAgICAgICAnIGZsb2F0IGludGVyc2VjdFNwaGVyZSh2ZWMzIG9yaWdpbiwgdmVjMyByYXksIHZlYzMgc3BoZXJlQ2VudGVyLCBmbG9hdCBzcGhlcmVSYWRpdXMpXFxuJyArXHJcbiAgICAgICAgICcge1xcbicgK1xyXG4gICAgICAgICAnICAgdmVjMyB0b1NwaGVyZSA9IG9yaWdpbiAtIHNwaGVyZUNlbnRlcjtcXG4nICtcclxuICAgICAgICAgJyAgIGZsb2F0IGEgPSBkb3QocmF5LCByYXkpO1xcbicgK1xyXG4gICAgICAgICAnICAgZmxvYXQgYiA9IDIuMCAqIGRvdCh0b1NwaGVyZSwgcmF5KTtcXG4nICtcclxuICAgICAgICAgJyAgIGZsb2F0IGMgPSBkb3QodG9TcGhlcmUsIHRvU3BoZXJlKSAtIHNwaGVyZVJhZGl1cypzcGhlcmVSYWRpdXM7XFxuJyArXHJcbiAgICAgICAgICcgICBmbG9hdCBkaXNjcmltaW5hbnQgPSBiKmIgLSA0LjAqYSpjO1xcbicgK1xyXG4gICAgICAgICAnICAgaWYoZGlzY3JpbWluYW50ID4gMC4wKSB7XFxuJyArXHJcbiAgICAgICAgICcgICAgIGZsb2F0IHQgPSAoLWIgLSBzcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIuMCAqIGEpO1xcbicgK1xyXG4gICAgICAgICAnICAgICBpZih0ID4gMC4wKSByZXR1cm4gdDtcXG4nICtcclxuICAgICAgICAgJyAgIH1cXG4nICtcclxuICAgICAgICAgJyAgIHJldHVybiAnICsgaW5maW5pdHkgKyAnO1xcbicgK1xyXG4gICAgICAgICAnIH1cXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnIHZlYzMgbm9ybWFsRm9yU3BoZXJlKHZlYzMgaGl0LCB2ZWMzIHNwaGVyZUNlbnRlciwgZmxvYXQgc3BoZXJlUmFkaXVzKSBcXG4nICtcclxuICAgICAgICAgJyB7XFxuJyArXHJcbiAgICAgICAgICcgICByZXR1cm4gKGhpdCAtIHNwaGVyZUNlbnRlcikgLyBzcGhlcmVSYWRpdXM7XFxuJyArXHJcbiAgICAgICAgICcgfVxcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgZmxvYXQgcmFuZG9tKHZlYzMgc2NhbGUsIGZsb2F0IHNlZWQpIFxcbicgK1xyXG4gICAgICAgICAnIHtcXG4nICtcclxuICAgICAgICAgJyAgIHJldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXogKyBzZWVkLCBzY2FsZSkpICogNDM3NTguNTQ1MyArIHNlZWQpO1xcbicgK1xyXG4gICAgICAgICAnIH1cXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnIHZlYzMgY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24oZmxvYXQgc2VlZCwgdmVjMyBub3JtYWwpIFxcbicgK1xyXG4gICAgICAgICAnIHtcXG4nICtcclxuICAgICAgICAgJyAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxuJyArXHJcbiAgICAgICAgICcgICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcbicgK1xyXG4gICAgICAgICAnICAgZmxvYXQgciA9IHNxcnQodSk7XFxuJyArXHJcbiAgICAgICAgICcgICBmbG9hdCBhbmdsZSA9IDYuMjgzMTg1MzA3MTc5NTg2ICogdjtcXG4nICtcclxuICAgICAgICAgJyAgIC8vIGNvbXB1dGUgYmFzaXMgZnJvbSBub3JtYWxcXG4nICtcclxuICAgICAgICAgJyAgIHZlYzMgc2RpciwgdGRpcjtcXG4nICtcclxuICAgICAgICAgJyAgIGlmIChhYnMobm9ybWFsLngpPC41KSBcXG4nICtcclxuICAgICAgICAgJyAgIHtcXG4nICtcclxuICAgICAgICAgJyAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygxLDAsMCkpO1xcbicgK1xyXG4gICAgICAgICAnICAgfVxcbicgK1xyXG4gICAgICAgICAnICAgZWxzZSBcXG4nICtcclxuICAgICAgICAgJyAgIHtcXG4nICtcclxuICAgICAgICAgJyAgICAgc2RpciA9IGNyb3NzKG5vcm1hbCwgdmVjMygwLDEsMCkpO1xcbicgK1xyXG4gICAgICAgICAnICAgfVxcbicgK1xyXG4gICAgICAgICAnICAgdGRpciA9IGNyb3NzKG5vcm1hbCwgc2Rpcik7XFxuJyArXHJcbiAgICAgICAgICcgICByZXR1cm4gcipjb3MoYW5nbGUpKnNkaXIgKyByKnNpbihhbmdsZSkqdGRpciArIHNxcnQoMS4tdSkqbm9ybWFsO1xcbicgK1xyXG4gICAgICAgICAnIH1cXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnIHZlYzMgdW5pZm9ybWx5UmFuZG9tRGlyZWN0aW9uKGZsb2F0IHNlZWQpIFxcbicgK1xyXG4gICAgICAgICAnIHtcXG4nICtcclxuICAgICAgICAgJyAgIGZsb2F0IHUgPSByYW5kb20odmVjMygxMi45ODk4LCA3OC4yMzMsIDE1MS43MTgyKSwgc2VlZCk7XFxuJyArXHJcbiAgICAgICAgICcgICBmbG9hdCB2ID0gcmFuZG9tKHZlYzMoNjMuNzI2NCwgMTAuODczLCA2MjMuNjczNiksIHNlZWQpO1xcbicgK1xyXG4gICAgICAgICAnICAgZmxvYXQgeiA9IDEuMCAtIDIuMCAqIHU7XFxuJyArXHJcbiAgICAgICAgICcgICBmbG9hdCByID0gc3FydCgxLjAgLSB6ICogeik7XFxuJyArXHJcbiAgICAgICAgICcgICBmbG9hdCBhbmdsZSA9IDYuMjgzMTg1MzA3MTc5NTg2ICogdjtcXG4nICtcclxuICAgICAgICAgJyAgIHJldHVybiB2ZWMzKHIgKiBjb3MoYW5nbGUpLCByICogc2luKGFuZ2xlKSwgeik7XFxuJyArXHJcbiAgICAgICAgICcgfVxcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgdmVjMyB1bmlmb3JtbHlSYW5kb21WZWN0b3IoZmxvYXQgc2VlZCkgXFxuJyArXHJcbiAgICAgICAgICcge1xcbicgK1xyXG4gICAgICAgICAnICAgcmV0dXJuIHVuaWZvcm1seVJhbmRvbURpcmVjdGlvbihzZWVkKSAqIHNxcnQocmFuZG9tKHZlYzMoMzYuNzUzOSwgNTAuMzY1OCwgMzA2LjI3NTkpLCBzZWVkKSk7XFxuJyArXHJcbiAgICAgICAgICcgfVxcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgZmxvYXQgc2hhZG93KHZlYzMgb3JpZ2luLCB2ZWMzIHJheSkgXFxuJyArXHJcbiAgICAgICAgICcge1xcbicgK1xyXG4gICAgICAgICAnICAgZmxvYXQgdFNwaGVyZTAgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luLCByYXksIHNwaGVyZUNlbnRlcjAsIHNwaGVyZVJhZGl1czApO1xcbicgK1xyXG4gICAgICAgICAnICAgaWYodFNwaGVyZTAgPCAxLjApXFxuJyArXHJcbiAgICAgICAgICcgICB7XFxuJyArXHJcbiAgICAgICAgICcgICAgIHJldHVybiAwLjA7XFxuJyArXHJcbiAgICAgICAgICcgICB9XFxuJyArXHJcbiAgICAgICAgICcgICBlbHNlXFxuJyArXHJcbiAgICAgICAgICcgICB7XFxuJyArXHJcbiAgICAgICAgICcgICAgIHJldHVybiAxLjA7XFxuJyArXHJcbiAgICAgICAgICcgICB9XFxuJyArXHJcbiAgICAgICAgICcgfVxcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgdmVjMyBjYWxjdWxhdGVDb2xvcih2ZWMzIG9yaWdpbiwgdmVjMyByYXksIHZlYzMgbGlnaHQpIFxcbicgK1xyXG4gICAgICAgICAnIHtcXG4nICtcclxuICAgICAgICAgJyAgIHZlYzMgY29sb3JNYXNrID0gbGlnaHRDb2xvcjtcXG4nICtcclxuICAgICAgICAgJyAgIHZlYzMgYWNjdW11bGF0ZWRDb2xvciA9IHZlYzMoMC4wKTtcXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnICAgLy8gbWFpbiByYXl0cmFjaW5nIGxvb3BcXG4nICtcclxuICAgICAgICAgJyAgIGZvcihpbnQgYm91bmNlID0gMDsgYm91bmNlIDwgJyArIGJvdW5jZXMgKyAnOyBib3VuY2UrKykgXFxuJyArXHJcbiAgICAgICAgICcgICB7XFxuJyArXHJcbiAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgJyAgICAgLy8gY29tcHV0ZSB0aGUgaW50ZXJzZWN0aW9uIHdpdGggZXZlcnl0aGluZ1xcbicgK1xyXG4gICAgICAgICAnICAgICBmbG9hdCB0U3BoZXJlMCA9IGludGVyc2VjdFNwaGVyZShvcmlnaW4sIHJheSwgc3BoZXJlQ2VudGVyMCwgc3BoZXJlUmFkaXVzMCk7XFxuJyArXHJcbiAgICAgICAgICcgICAgIHZlYzMgc3VyZmFjZUNvbG9yID0gdmVjMygwLjUpO1xcbicgKyAvLyBTQVcgbWF0ZXJpYWwgY29sb3JcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnICAgICAvLyBmaW5kIHRoZSBjbG9zZXN0IGludGVyc2VjdGlvblxcbicgK1xyXG4gICAgICAgICAnICAgICBmbG9hdCB0ID0gJyArIGluZmluaXR5ICsgJztcXG4nICtcclxuICAgICAgICAgJyAgICAgZmxvYXQgdGZsb29yID0gJyArIGluZmluaXR5ICsgJztcXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnICAgICAvLyBjaGVjayBmb3IgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZFxcbicgK1xyXG4gICAgICAgICAnICAgICBpZiAocmF5LnkgPCAwLjApXFxuJyArXHJcbiAgICAgICAgICcgICAgIHtcXG4nICtcclxuICAgICAgICAgJyAgICAgICAvLyBkaXN0YW5jZSB0byBmbG9vciA9IG51bSB1bml0IHZlY3RvcnMgcmVxdWlyZWQgdG8gcmVhY2ggdGhlIGZsb29yXFxuJyArXHJcbiAgICAgICAgICcgICAgICAgdGZsb29yID0gLShvcmlnaW4ueSsxLjApL3JheS55O1xcbicgK1xyXG4gICAgICAgICAnICAgICAgIGlmICh0Zmxvb3IgPCB0IClcXG4nICtcclxuICAgICAgICAgJyAgICAgICB7XFxuJyArXHJcbiAgICAgICAgICcgICAgICAgICB0ID0gdGZsb29yO1xcbicgK1xyXG4gICAgICAgICAnICAgICAgIH1cXG4nICtcclxuICAgICAgICAgJyAgICAgfVxcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgICAgIGlmKHRTcGhlcmUwIDwgdClcXG4nICtcclxuICAgICAgICAgJyAgICAge1xcbicgK1xyXG4gICAgICAgICAnICAgICAgIHN1cmZhY2VDb2xvciA9IHZlYzMoYmFsbENvbG9yKTtcXG4nICtcclxuICAgICAgICAgJyAgICAgICB0ID0gdFNwaGVyZTA7XFxuJyArXHJcbiAgICAgICAgICcgICAgIH1cXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnICAgICAvLyBpbmZvIGFib3V0IGhpdFxcbicgK1xyXG4gICAgICAgICAnICAgICB2ZWMzIGhpdCA9IG9yaWdpbiArIHJheSAqIHQ7XFxuJyArXHJcbiAgICAgICAgICcgICAgIGZsb2F0IHNwZWN1bGFySGlnaGxpZ2h0ID0gMC4wO1xcbicgK1xyXG4gICAgICAgICAnICAgICB2ZWMzIG5vcm1hbDtcXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vcm1hbFxcbicgK1xyXG4gICAgICAgICAnICAgICBpZih0ID09IHRmbG9vcilcXG4nICtcclxuICAgICAgICAgJyAgICAge1xcbicgK1xyXG4gICAgICAgICAnICAgICAgIG5vcm1hbCA9IHZlYzMoMC4wLDEuMCwwLjApO1xcbicgK1xyXG4gICAgICAgICAnICAgICB9XFxuJyArXHJcbiAgICAgICAgICcgICAgIGVsc2UgaWYodCA9PSB0U3BoZXJlMClcXG4nICtcclxuICAgICAgICAgJyAgICAge1xcbicgK1xyXG4gICAgICAgICAnICAgICAgIG5vcm1hbCA9IG5vcm1hbEZvclNwaGVyZShoaXQsIHNwaGVyZUNlbnRlcjAsIHNwaGVyZVJhZGl1czApO1xcbicgK1xyXG4gICAgICAgICAnICAgICB9XFxuJyArXHJcbiAgICAgICAgICcgICAgIGVsc2VcXG4nICtcclxuICAgICAgICAgJyAgICAge1xcbicgK1xyXG4gICAgICAgICAnICAgICAgIGJyZWFrO1xcbicgK1xyXG4gICAgICAgICAnICAgICB9XFxuJyArXHJcbiAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgJyAgICAgcmF5ID0gY29zaW5lV2VpZ2h0ZWREaXJlY3Rpb24odGltZVNpbmNlU3RhcnQgKyBmbG9hdChib3VuY2UpLCBub3JtYWwpO1xcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgICAgIC8vIGNvbXB1dGUgZGlmZnVzZSBsaWdodGluZyBjb250cmlidXRpb25cXG4nICtcclxuICAgICAgICAgJyAgICAgdmVjMyB0b0xpZ2h0ID0gbGlnaHQgLSBoaXQ7XFxuJyArXHJcbiAgICAgICAgICcgICAgIGZsb2F0IGRpZmZ1c2UgPSBtYXgoMC4wLCBkb3Qobm9ybWFsaXplKHRvTGlnaHQpLCBub3JtYWwpKTtcXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnICAgICAvLyB0cmFjZSBhIHNoYWRvdyByYXkgdG8gdGhlIGxpZ2h0XFxuJyArXHJcbiAgICAgICAgICcgICAgIGZsb2F0IHNoYWRvd0ludGVuc2l0eSA9IHNoYWRvdyhoaXQgKyBub3JtYWwgKiAnICsgZXBzaWxvbiArICcsIHRvTGlnaHQpO1xcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgICAgIC8vIGRvIGxpZ2h0IGJvdW5jZVxcbicgK1xyXG4gICAgICAgICAnICAgICBjb2xvck1hc2sgKj0gc3VyZmFjZUNvbG9yO1xcbicgK1xyXG4gICAgICAgICAnICAgICBhY2N1bXVsYXRlZENvbG9yICs9IGNvbG9yTWFzayAqIChsaWdodEludGVuc2l0eSAqIGRpZmZ1c2UgKiBzaGFkb3dJbnRlbnNpdHkpO1xcbicgK1xyXG4gICAgICAgICAnICAgICBhY2N1bXVsYXRlZENvbG9yICs9IGNvbG9yTWFzayAqIHNwZWN1bGFySGlnaGxpZ2h0ICogc2hhZG93SW50ZW5zaXR5O1xcbicgK1xyXG4gICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICcgICAgIC8vIGNhbGN1bGF0ZSBuZXh0IG9yaWdpblxcbicgK1xyXG4gICAgICAgICAnICAgICBvcmlnaW4gPSBoaXQ7XFxuJyArXHJcbiAgICAgICAgICcgICB9XFxuJyArXHJcbiAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgJyAgIHJldHVybiBhY2N1bXVsYXRlZENvbG9yO1xcbicgK1xyXG4gICAgICAgICAnIH1cXG4nICtcclxuICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAnIHZvaWQgbWFpbigpIFxcbicgK1xyXG4gICAgICAgICAnIHtcXG4nICtcclxuICAgICAgICAgJyAgIHZlYzMgbmV3TGlnaHQgPSBsaWdodCArIHVuaWZvcm1seVJhbmRvbVZlY3Rvcih0aW1lU2luY2VTdGFydCAtIDUzLjApICogJyArIGxpZ2h0U2l6ZSArICc7XFxuJyArXHJcbiAgICAgICAgICcgICB2ZWMzIHRleHR1cmUgPSB0ZXh0dXJlMkQodGV4dHVyZSwgZ2xfRnJhZ0Nvb3JkLnh5IC8gNTEyLjApLnJnYjtcXG4nICtcclxuICAgICAgICAgJyAgIGdsX0ZyYWdDb2xvciA9IHZlYzQobWl4KGNhbGN1bGF0ZUNvbG9yKGV5ZSwgaW5pdGlhbFJheSwgbmV3TGlnaHQpLCB0ZXh0dXJlLCB0ZXh0dXJlV2VpZ2h0KSwgMS4wKTtcXG4nICtcclxuICAgICAgICAgJyB9XFxuJztcclxuICAgfVxyXG5cclxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0RXllUmF5KG1hdHJpeDogZ2xNYXQ0LCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB2ZWMgPSBuZXcgZ2xWZWM0KFt4LCB5LCAwLCAxXSk7XHJcbiAgICAgIHJldHVybiBtYXRyaXgubXVsdFYodmVjKS5kaXZpZGVCeVcoKS5zdWJ0cmFjdChVbmlmb3Jtcy5leWUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHNldFVuaWZvcm1zKHByb2dyYW06IFdlYkdMUHJvZ3JhbSkge1xyXG4gICAgICBmb3IgKHZhciBuYW1lIGluIFVuaWZvcm1zKSB7XHJcbiAgICAgICAgIHZhciB2YWx1ZSA9IFVuaWZvcm1zW25hbWVdO1xyXG4gICAgICAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XHJcbiAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBnbFZlYzMpIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgbmV3IEZsb2F0MzJBcnJheShbdmFsdWUuZ2V0KDApLCB2YWx1ZS5nZXQoMSksIHZhbHVlLmdldCgyKV0pKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGNvbXBpbGVTb3VyY2Uoc291cmNlOiBzdHJpbmcsIHR5cGU6IG51bWJlcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgY29uc29sZS5sb2coc291cmNlKTtcclxuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdjb21waWxlIGVycm9yOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZVNoYWRlcih2ZXJ0ZXhTb3VyY2U6IHN0cmluZywgZnJhZ21lbnRTb3VyY2U6IHN0cmluZykge1xyXG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIFNoYWRlcnMuY29tcGlsZVNvdXJjZSh2ZXJ0ZXhTb3VyY2UsIGdsLlZFUlRFWF9TSEFERVIpKTtcclxuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIFNoYWRlcnMuY29tcGlsZVNvdXJjZShmcmFnbWVudFNvdXJjZSwgZ2wuRlJBR01FTlRfU0hBREVSKSk7XHJcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xyXG4gICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgIHRocm93ICdsaW5rIGVycm9yOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNoYWRlclByb2dyYW07XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgVW5pZm9ybXMgfSBmcm9tIFwiLi9TaGFkZXJzXCI7XHJcbmltcG9ydCB7IFBhdGhUcmFjZXIgfSBmcm9tIFwiLi9QYXRoVHJhY2VyXCI7XHJcbmltcG9ydCB7IGdsTWF0NCB9IGZyb20gXCIuL2dsTWF0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgcHVibGljIHRyYWNlciA9IG5ldyBQYXRoVHJhY2VyKCk7XHJcbiAgIHByaXZhdGUgbW9kZWx2aWV3OiBnbE1hdDQ7XHJcbiAgIHByaXZhdGUgcHJvamVjdGlvbjogZ2xNYXQ0O1xyXG4gICBwcml2YXRlIG1vZGVsdmlld1Byb2plY3Rpb246IGdsTWF0NDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlKHRpbWVTaW5jZVN0YXJ0OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbHZpZXcgPSBnbE1hdDQubWFrZUxvb2tBdChcclxuICAgICAgICAgVW5pZm9ybXMuZXllLFxyXG4gICAgICAgICBuZXcgZ2xWZWMzKFswLCAwLCAwXSksICAvLyBjZW50ZXIgcG9pbnRcclxuICAgICAgICAgbmV3IGdsVmVjMyhbMCwgMSwgMF0pICAgLy8gdXAgdmVjdG9yXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb24gPSBnbE1hdDQubWFrZVBlcnNwZWN0aXZlKDU1LCAxLCAwLjEsIDEwMCk7XHJcbiAgICAgIHRoaXMubW9kZWx2aWV3UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdGlvbi5tdWx0TSh0aGlzLm1vZGVsdmlldyk7XHJcbiAgICAgIHRoaXMudHJhY2VyLnVwZGF0ZSh0aGlzLm1vZGVsdmlld1Byb2plY3Rpb24sIHRpbWVTaW5jZVN0YXJ0KTtcclxuICAgfTtcclxuXHJcbiAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudHJhY2VyLnJlbmRlcigpO1xyXG4gICB9O1xyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudHJhY2VyLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2xWZWM0LCBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgbWF0cml4IGZvciB1c2UgaW4gV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsTWF0NCB7XHJcbiAgIC8qKiBUaGUgbWF0cml4IHZhbHVlIHN0b3JlZCBhcyBhIDE2IGVsZW1lbnQgYXJyYXkgKi9cclxuICAgcHJpdmF0ZSB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIG1hdHJpeCB2YWx1ZXMuIElmIG5vdCBzdXBwbGllZCwgdGhlIG1hdHJpeCBpcyBcclxuICAgICogaW5pdGlhbGl6ZWQgYXMgYW4gaWRlbnRpdHkgbWF0cml4LlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlcz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgbWF0cml4LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSBtYXRyaXguXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogZ2xNYXQ0IHtcclxuICAgICAgcmV0dXJuIG5ldyBnbE1hdDQodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzQgKiByb3cgKyBjb2xdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyBhIHZhbHVlIGluIHRoZSBtYXRyaXguXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcm93IFRoZSByb3cgaW5kZXguXHJcbiAgICAqIEBwYXJhbSBjb2wgVGhlIGNvbHVtbiBpbmRleC5cclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgdmFsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgdGhpcy52YWx1ZXNbNCAqIHJvdyArIGNvbF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYSB2ZWN0b3IgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3Rvci5cclxuICAgICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBtdWx0aXBsaWNhdGlvbi4gXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdFYodmVjOiBnbFZlYzQpOiBnbFZlYzQge1xyXG4gICAgICBsZXQgdmFsczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbcm93ICogNCArIGNvbF0gKiB2ZWMuZ2V0KGNvbCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdmFscy5wdXNoKHN1bSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzQodmFscyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIHRoaXMgbWF0cml4IGFnYWluc3QgYW5vdGhlciBtYXRyaXggYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgbWF0cml4LlxyXG4gICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgb2YgdGhlIG11bHRpcGxpY2F0aW9uLiBcclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0TShvdGhlcjogZ2xNYXQ0KTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBuZXcgZ2xNYXQ0KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZ2V0KHJvdywgaSkgKiBvdGhlci5nZXQoaSwgY29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQuc2V0KHJvdywgY29sLCBzdW0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBJbnZlcnRzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgKHRoaXMpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhpcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBpbnZlcnQoKTogZ2xNYXQ0IHtcclxuXHJcbiAgICAgIGxldCBhMDAgPSB0aGlzLnZhbHVlc1swXSwgYTAxID0gdGhpcy52YWx1ZXNbMV0sIGEwMiA9IHRoaXMudmFsdWVzWzJdLCBhMDMgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgbGV0IGExMCA9IHRoaXMudmFsdWVzWzRdLCBhMTEgPSB0aGlzLnZhbHVlc1s1XSwgYTEyID0gdGhpcy52YWx1ZXNbNl0sIGExMyA9IHRoaXMudmFsdWVzWzddO1xyXG4gICAgICBsZXQgYTIwID0gdGhpcy52YWx1ZXNbOF0sIGEyMSA9IHRoaXMudmFsdWVzWzldLCBhMjIgPSB0aGlzLnZhbHVlc1sxMF0sIGEyMyA9IHRoaXMudmFsdWVzWzExXTtcclxuICAgICAgbGV0IGEzMCA9IHRoaXMudmFsdWVzWzEyXSwgYTMxID0gdGhpcy52YWx1ZXNbMTNdLCBhMzIgPSB0aGlzLnZhbHVlc1sxNF0sIGEzMyA9IHRoaXMudmFsdWVzWzE1XTtcclxuXHJcbiAgICAgIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XHJcbiAgICAgIGxldCBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XHJcbiAgICAgIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XHJcbiAgICAgIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XHJcbiAgICAgIGxldCBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XHJcbiAgICAgIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XHJcbiAgICAgIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XHJcbiAgICAgIGxldCBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XHJcbiAgICAgIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XHJcbiAgICAgIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XHJcbiAgICAgIGxldCBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XHJcbiAgICAgIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XHJcblxyXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XHJcbiAgICAgIGxldCBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XHJcblxyXG4gICAgICBpZiAoIWRldCkge1xyXG4gICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1szXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1s0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1s1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1s2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1s3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1s4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1s5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xyXG4gICAgICB0aGlzLnZhbHVlc1sxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcclxuICAgICAgdGhpcy52YWx1ZXNbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XHJcbiAgICAgIHRoaXMudmFsdWVzWzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUcmFuc3Bvc2VzIHRoaXMgbWF0cml4IGFuZCByZXR1cm5zIHRoZSByZXN1bHQgKHRoaXMpLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhpcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmFuc3Bvc2UoKTogZ2xNYXQ0IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IG5ldyBnbE1hdDQoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocm93LCBjb2wsIHRoaXMuZ2V0KGNvbCwgcm93KSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy52YWx1ZXMgPSByZXN1bHQudmFsdWVzO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBtYXRyaXggdGhhdCBjb250YWlucyBhIHRyYW5zbGF0aW9uIG9wZXJhdGlvbi5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHRyYW5zbGF0aW9ucy5cclxuICAgICogQHJldHVybnMgVGhlIHRyYW5zbGF0aW9uIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVRyYW5zbGF0aW9uKHY6IGdsVmVjMyk6IGdsTWF0NCB7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIDEsIDAsIDAsIHYuZ2V0KDApLFxyXG4gICAgICAgICAwLCAxLCAwLCB2LmdldCgxKSxcclxuICAgICAgICAgMCwgMCwgMSwgdi5nZXQoMiksXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHZpZXdpbmcgbWF0cml4LiBTZWUgZ2x1TG9va0F0LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGV5ZSBUaGUgZXllIHBvc2l0aW9uLlxyXG4gICAgKiBAcGFyYW0gY2VudGVyIFRoZSBwb2ludCBvZiBpbnRlcmVzdC5cclxuICAgICogQHBhcmFtIHVwIFRoZSB1cCB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2aWV3aW5nIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZUxvb2tBdChcclxuICAgICAgZXllOiBnbFZlYzMsXHJcbiAgICAgIGNlbnRlcjogZ2xWZWMzLFxyXG4gICAgICB1cDogZ2xWZWMzLFxyXG4gICApOiBnbE1hdDQge1xyXG5cclxuICAgICAgLy8gY2xvbmUgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnb25hbHNcclxuICAgICAgbGV0IHogPSBleWUuY2xvbmUoKS5zdWJ0cmFjdChjZW50ZXIpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICBsZXQgeCA9IHVwLmNsb25lKCkuY3Jvc3Moeikubm9ybWFsaXplKCk7XHJcbiAgICAgIGxldCB5ID0gei5jbG9uZSgpLmNyb3NzKHgpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgbGV0IG0gPSBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgeC5nZXQoMCksIHguZ2V0KDEpLCB4LmdldCgyKSwgMCxcclxuICAgICAgICAgeS5nZXQoMCksIHkuZ2V0KDEpLCB5LmdldCgyKSwgMCxcclxuICAgICAgICAgei5nZXQoMCksIHouZ2V0KDEpLCB6LmdldCgyKSwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHZhciB0ID0gbmV3IGdsTWF0NChbXHJcbiAgICAgICAgIDEsIDAsIDAsIC1leWUuZ2V0KDApLFxyXG4gICAgICAgICAwLCAxLCAwLCAtZXllLmdldCgxKSxcclxuICAgICAgICAgMCwgMCwgMSwgLWV5ZS5nZXQoMiksXHJcbiAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gbS5tdWx0TSh0KTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgcGVyc3BlY3RpdmUgbWF0cml4LiBTZWUgZ2x1UGVyc3BlY3RpdmUuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZm92eSBGaWVsZCBvZiB2aWV3IChpbiBkZWdyZWVzKS5cclxuICAgICogQHBhcmFtIGFzcGVjdCBWaWV3IGFzcGVjdCByYXRpby5cclxuICAgICogQHBhcmFtIHpuZWFyIE5lYXIgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6ZmFyIEZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZVBlcnNwZWN0aXZlKFxyXG4gICAgICBmb3Z5OiBudW1iZXIsXHJcbiAgICAgIGFzcGVjdDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIHltYXggPSB6bmVhciAqIE1hdGgudGFuKGZvdnkgKiBNYXRoLlBJIC8gMzYwLjApO1xyXG4gICAgICB2YXIgeW1pbiA9IC15bWF4O1xyXG4gICAgICB2YXIgeG1pbiA9IHltaW4gKiBhc3BlY3Q7XHJcbiAgICAgIHZhciB4bWF4ID0geW1heCAqIGFzcGVjdDtcclxuXHJcbiAgICAgIHJldHVybiBnbE1hdDQubWFrZUZydXN0dW0oeG1pbiwgeG1heCwgeW1pbiwgeW1heCwgem5lYXIsIHpmYXIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHBlcnNwZWN0aXZlIG1hdHJpeC4gU2VlIGdsdUZydXN0dW0uXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVmdCBUaGUgbGVmdCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHJpZ2h0IFRoZSByaWdodCBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIGJvdHRvbSBUaGUgYm90dG9tIGNsaXBwaW5nIHBsYW5lLlxyXG4gICAgKiBAcGFyYW0gdG9wIFRoZSB0b3AgY2xpcHBpbmcgcGxhbmUuXHJcbiAgICAqIEBwYXJhbSB6bmVhciBUaGUgbmVhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHBhcmFtIHpmYXIgVGhlIGZhciBjbGlwcGluZyBwbGFuZS5cclxuICAgICogQHJldHVybnMgdGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgbWFrZUZydXN0dW0oXHJcbiAgICAgIGxlZnQ6IG51bWJlcixcclxuICAgICAgcmlnaHQ6IG51bWJlcixcclxuICAgICAgYm90dG9tOiBudW1iZXIsXHJcbiAgICAgIHRvcDogbnVtYmVyLFxyXG4gICAgICB6bmVhcjogbnVtYmVyLFxyXG4gICAgICB6ZmFyOiBudW1iZXIpOiBnbE1hdDQge1xyXG5cclxuICAgICAgdmFyIFggPSAyICogem5lYXIgLyAocmlnaHQgLSBsZWZ0KTtcclxuICAgICAgdmFyIFkgPSAyICogem5lYXIgLyAodG9wIC0gYm90dG9tKTtcclxuICAgICAgdmFyIEEgPSAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICB2YXIgQiA9ICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSk7XHJcbiAgICAgIHZhciBDID0gLSh6ZmFyICsgem5lYXIpIC8gKHpmYXIgLSB6bmVhcik7XHJcbiAgICAgIHZhciBEID0gLTIgKiB6ZmFyICogem5lYXIgLyAoemZhciAtIHpuZWFyKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgZ2xNYXQ0KFtcclxuICAgICAgICAgWCwgMCwgQSwgMCxcclxuICAgICAgICAgMCwgWSwgQiwgMCxcclxuICAgICAgICAgMCwgMCwgQywgRCxcclxuICAgICAgICAgMCwgMCwgLTEsIDBcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbn0iLCJcclxuLyoqXHJcbiAqIFZlY3RvciBjbGFzcyBmb3IgdXNlIHdpdGggV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuY2xhc3MgZ2xWZWMge1xyXG5cclxuICAgLyoqIFRoZSB2ZWN0b3IgdmFsdWVzLiAqL1xyXG4gICBwcm90ZWN0ZWQgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzT3JTaXplIElmIGEgYXJyYXksIHRoZSB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuIElmIGEgbnVtYmVyLCB0aGUgc2l6ZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlc09yU2l6ZTogbnVtYmVyIHwgbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlc09yU2l6ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc09yU2l6ZV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KHZhbHVlc09yU2l6ZSk7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgYSB2YWx1ZSBpbiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGluZGV4IFRoZSBlbGVtZW50IGluZGV4LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgZWxlbWVudCB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpbmRleF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBpbmRleCBUaGUgZWxlbWVudCBpbmRleC5cclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbGVtZW50IHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNldChpbmRleDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHRoaXMudmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIE5vcm1hbGl6ZXMgdGhpcyB2ZWN0b3IsIGFuZCBzdG9yZXMgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgbm9ybWFsaXplKCk6IGdsVmVjIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSAvPSBtYWc7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzMgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBub3JtYWxpemUoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLm5vcm1hbGl6ZSgpIGFzIGdsVmVjMztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFN1YnRyYWN0cyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBzdWJ0cmFjdC5cclxuICAgICogQHJldHVybnMgVGhpcyB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3VidHJhY3QodmVjOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSAtPSB2ZWMudmFsdWVzWzBdO1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSAtPSB2ZWMudmFsdWVzWzFdO1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSAtPSB2ZWMudmFsdWVzWzJdO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNyb3NzKG90aGVyOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgQSA9IHRoaXMudmFsdWVzO1xyXG4gICAgICBsZXQgQiA9IG90aGVyLnZhbHVlcztcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBBWzFdICogQlsyXSAtIEFbMl0gKiBCWzFdLFxyXG4gICAgICAgICBBWzJdICogQlswXSAtIEFbMF0gKiBCWzJdLFxyXG4gICAgICAgICBBWzBdICogQlsxXSAtIEFbMV0gKiBCWzBdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzQgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4geC15LXogdmVjdG9yIHdoZXJlIGVhY2ggZWxlbWVudCBpcyBjb21wdXRlZCBieSBkaXZpZGluZyB0aGlzIHZlY3RvcnNcclxuICAgICogZWxlbWVudHMgYnkgdGhlIHcgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiB4LXkteiB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGl2aWRlQnlXKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB3ID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBVbmlmb3JtcyB9IGZyb20gXCIuL1NoYWRlcnNcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbmxldCBhcHA6IEFwcDtcclxuZXhwb3J0IGxldCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5sZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmxldCBhbmdsZVggPSAwO1xyXG5sZXQgYW5nbGVZID0gMDtcclxubGV0IHpvb21aID0gMy4wO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAvLyBMb2Rhc2gsIG5vdyBpbXBvcnRlZCBieSB0aGlzIHNjcmlwdFxyXG4gICBlbGVtZW50LmlubmVySFRNTCA9ICcgICA8ZGl2IGlkPVwibWFpblwiPlxcbicgK1xyXG4gICAgICAnPGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPVwiNTEyXCIgaGVpZ2h0PVwiNTEyXCI+PC9jYW52YXM+XFxuJyArXHJcbiAgICAgICc8L2Rpdj5cXG4nICtcclxuICAgICAgJzxsYWJlbCBmb3I9XCJyYW5nZTFcIj5MaWdodDwvbGFiZWw+XFxuJyArXHJcbiAgICAgICc8aW5wdXQgaWQ9XCJyYW5nZTFcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIxXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1MFwiIGNsYXNzPVwic2xpZGVyXCI+XFxuJyArXHJcbiAgICAgICc8aW5wdXQgaWQ9XCJwaWNrZXIxXCIgdHlwZT1cImNvbG9yXCI+XFxuJyArXHJcbiAgICAgICc8YnI+XFxuJyArXHJcbiAgICAgICc8bGFiZWwgZm9yPVwicGlja2VyMlwiPkJhbGw8L2xhYmVsPlxcbicgK1xyXG4gICAgICAnPGlucHV0IGlkPVwicGlja2VyMlwiIHR5cGU9XCJjb2xvclwiPlxcbic7XHJcblxyXG4gICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcblxyXG5mdW5jdGlvbiB0aWNrKHRpbWVTaW5jZVN0YXJ0OiBudW1iZXIpIHtcclxuICAgVW5pZm9ybXMuZXllLnNldCgwLCB6b29tWiAqIE1hdGguc2luKGFuZ2xlWSkgKiBNYXRoLmNvcyhhbmdsZVgpKTtcclxuICAgVW5pZm9ybXMuZXllLnNldCgxLCB6b29tWiAqIE1hdGguc2luKGFuZ2xlWCkpO1xyXG4gICBVbmlmb3Jtcy5leWUuc2V0KDIsIHpvb21aICogTWF0aC5jb3MoYW5nbGVZKSAqIE1hdGguY29zKGFuZ2xlWCkpO1xyXG5cclxuICAgYXBwLnVwZGF0ZSh0aW1lU2luY2VTdGFydCk7XHJcbiAgIGFwcC5yZW5kZXIoKTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgZ2wgPSBudWxsO1xyXG4gICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIHRyeSB7IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJyk7IH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgaWYgKGdsKSB7XHJcbiAgICAgIGFwcCA9IG5ldyBBcHAoKTtcclxuICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgdGljaygoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHN0YXJ0KSAqIDAuMDAxKTsgfSwgMTAwMCAvIDYwKTtcclxuICAgfVxyXG5cclxuICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZ2UxXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgIHNsaWRlci52YWx1ZSA9IFwiXCIgKyBVbmlmb3Jtcy5saWdodEludGVuc2l0eSAqIDUwO1xyXG4gICBzbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgVW5pZm9ybXMubGlnaHRJbnRlbnNpdHkgPSBwYXJzZUZsb2F0KHNsaWRlci52YWx1ZSkgLyA1MDtcclxuICAgICAgYXBwLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxuICAgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgIH1cclxuXHJcbiAgIGZ1bmN0aW9uIHJnYlRvSGV4KHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gXCIjXCIgKyBjb21wb25lbnRUb0hleChyKSArIGNvbXBvbmVudFRvSGV4KGcpICsgY29tcG9uZW50VG9IZXgoYik7XHJcbiAgIH1cclxuXHJcbiAgIGZ1bmN0aW9uIGhleFRvUmdiKGhleDogc3RyaW5nKSB7XHJcbiAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gICAgICB9IDogbnVsbDtcclxuICAgfVxyXG5cclxuICAgdmFyIGxpZ2h0UGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrZXIxXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgIHZhciByID0gTWF0aC5yb3VuZCgyNTUgKiBVbmlmb3Jtcy5saWdodENvbG9yLmdldCgwKSk7XHJcbiAgIHZhciBnID0gTWF0aC5yb3VuZCgyNTUgKiBVbmlmb3Jtcy5saWdodENvbG9yLmdldCgxKSk7XHJcbiAgIHZhciBiID0gTWF0aC5yb3VuZCgyNTUgKiBVbmlmb3Jtcy5saWdodENvbG9yLmdldCgyKSk7XHJcbiAgIGxpZ2h0UGlja2VyLnZhbHVlID0gcmdiVG9IZXgociwgZywgYilcclxuICAgbGlnaHRQaWNrZXIub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGNvbG9yID0gaGV4VG9SZ2IobGlnaHRQaWNrZXIudmFsdWUpO1xyXG4gICAgICBVbmlmb3Jtcy5saWdodENvbG9yID0gbmV3IGdsVmVjMyhbY29sb3IuciAvIDI1NS4wLCBjb2xvci5nIC8gMjU1LjAsIGNvbG9yLmIgLyAyNTUuMF0pO1xyXG4gICAgICBhcHAucmVzdGFydCgpO1xyXG4gICB9XHJcblxyXG4gICB2YXIgYmFsbFBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGlja2VyMlwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICByID0gTWF0aC5yb3VuZCgyNTUgKiBVbmlmb3Jtcy5iYWxsQ29sb3IuZ2V0KDApKTtcclxuICAgZyA9IE1hdGgucm91bmQoMjU1ICogVW5pZm9ybXMuYmFsbENvbG9yLmdldCgxKSk7XHJcbiAgIGIgPSBNYXRoLnJvdW5kKDI1NSAqIFVuaWZvcm1zLmJhbGxDb2xvci5nZXQoMikpO1xyXG4gICBiYWxsUGlja2VyLnZhbHVlID0gcmdiVG9IZXgociwgZywgYik7XHJcbiAgIGJhbGxQaWNrZXIub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGNvbG9yID0gaGV4VG9SZ2IoYmFsbFBpY2tlci52YWx1ZSk7XHJcbiAgICAgIFVuaWZvcm1zLmJhbGxDb2xvciA9IG5ldyBnbFZlYzMoW2NvbG9yLnIgLyAyNTUuMCwgY29sb3IuZyAvIDI1NS4wLCBjb2xvci5iIC8gMjU1LjBdKTtcclxuICAgICAgYXBwLnJlc3RhcnQoKTtcclxuICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZWxlbWVudFBvcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IGFueSB7XHJcbiAgIHZhciB4ID0gMCwgeSA9IDA7XHJcbiAgIHdoaWxlIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xyXG4gICAgICB4ICs9IGVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgeSArPSBlbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICB9XHJcbiAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnRQb3MoZXZlbnQ6IGFueSkge1xyXG4gICByZXR1cm4ge1xyXG4gICAgICB4OiBldmVudC5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXHJcbiAgICAgIHk6IGV2ZW50LmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcclxuICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FudmFzTW91c2VQb3MoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgdmFyIG1vdXNlUG9zID0gZXZlbnRQb3MoZXZlbnQpO1xyXG4gICB2YXIgY2FudmFzUG9zID0gZWxlbWVudFBvcyhjYW52YXMpO1xyXG4gICByZXR1cm4ge1xyXG4gICAgICB4OiBtb3VzZVBvcy54IC0gY2FudmFzUG9zLngsXHJcbiAgICAgIHk6IG1vdXNlUG9zLnkgLSBjYW52YXNQb3MueVxyXG4gICB9O1xyXG59XHJcblxyXG52YXIgbW91c2VEb3duID0gZmFsc2U7XHJcbnZhciBvbGRYOiBudW1iZXI7XHJcbnZhciBvbGRZOiBudW1iZXI7XHJcblxyXG5kb2N1bWVudC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICB2YXIgbW91c2UgPSBjYW52YXNNb3VzZVBvcyhldmVudCk7XHJcbiAgIG9sZFggPSBtb3VzZS54O1xyXG4gICBvbGRZID0gbW91c2UueTtcclxuXHJcbiAgIGlmIChtb3VzZS54ID49IDAgJiYgbW91c2UueSA+PSAwICYmIG1vdXNlLnggPCA1MTIgJiYgbW91c2UueSA8IDUxMikge1xyXG5cclxuICAgICAgbW91c2VEb3duID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIGRpc2FibGUgc2VsZWN0aW9uIGJlY2F1c2UgZHJhZ2dpbmcgaXMgdXNlZCBmb3Igcm90YXRpbmcgdGhlIGNhbWVyYSBhbmQgbW92aW5nIG9iamVjdHNcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgIHZhciBtb3VzZSA9IGNhbnZhc01vdXNlUG9zKGV2ZW50KTtcclxuXHJcbiAgIGlmIChtb3VzZURvd24pIHtcclxuICAgICAgLy8gdXBkYXRlIHRoZSBhbmdsZXMgYmFzZWQgb24gaG93IGZhciB3ZSBtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcclxuICAgICAgYW5nbGVZIC09IChtb3VzZS54IC0gb2xkWCkgKiAwLjAxO1xyXG4gICAgICBhbmdsZVggKz0gKG1vdXNlLnkgLSBvbGRZKSAqIDAuMDE7XHJcblxyXG4gICAgICAvLyBkb24ndCBnbyB1cHNpZGUgZG93blxyXG4gICAgICBhbmdsZVggPSBNYXRoLm1heChhbmdsZVgsIC1NYXRoLlBJIC8gMiArIDAuMDEpO1xyXG4gICAgICBhbmdsZVggPSBNYXRoLm1pbihhbmdsZVgsIE1hdGguUEkgLyAyIC0gMC4wMSk7XHJcblxyXG4gICAgICAvLyBjbGVhciB0aGUgc2FtcGxlIGJ1ZmZlclxyXG4gICAgICBhcHAucmVzdGFydCgpO1xyXG5cclxuICAgICAgLy8gcmVtZW1iZXIgdGhpcyBjb29yZGluYXRlXHJcbiAgICAgIG9sZFggPSBtb3VzZS54O1xyXG4gICAgICBvbGRZID0gbW91c2UueTtcclxuICAgfVxyXG5cclxuICAgZG9jdW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIG1vdXNlRG93biA9IGZhbHNlO1xyXG4gICB9O1xyXG59XHJcblxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9