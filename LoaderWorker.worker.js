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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/ts-loader/index.js!./src/Apps/Viewer/LoaderWorker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ts-loader/index.js!./src/Apps/Viewer/LoaderWorker.ts":
/*!******************************************************************!*\
  !*** ./node_modules/ts-loader!./src/Apps/Viewer/LoaderWorker.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util3D_TriangleObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Util3D/TriangleObj */ "./src/Util3D/TriangleObj.ts");
/* harmony import */ var _Util3D_TriangleObjFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Util3D/TriangleObjFile */ "./src/Util3D/TriangleObjFile.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * This is the worker that loads and processes the .obj file
 */
var worker = self;
// Handler for receiving messages from the main thread
worker.onmessage = function (_a) {
    var data = _a.data;
    // when we receive a string as a message, it's the url of the file to load
    loadFile(data);
};
/**
 * The worker function to load a file
 *
 * @param file The url of the file to load
 */
function loadFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var chunksAll, data, res, tObj, blob, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // the initial status message
                    worker.postMessage('Downloading 0%');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetchData(file)];
                case 2:
                    chunksAll = _a.sent();
                    data = void 0;
                    if (!file.toLowerCase().endsWith('.obj')) return [3 /*break*/, 3];
                    res = new TextDecoder('utf-8').decode(chunksAll);
                    tObj = new _Util3D_TriangleObjFile__WEBPACK_IMPORTED_MODULE_1__["TriangleObjFile"](file, res, function (status) { worker.postMessage(status); });
                    data = tObj.toData();
                    return [3 /*break*/, 5];
                case 3:
                    if (!file.toLowerCase().endsWith('.blob')) return [3 /*break*/, 5];
                    blob = new Blob([chunksAll]);
                    return [4 /*yield*/, _Util3D_TriangleObj__WEBPACK_IMPORTED_MODULE_0__["TriangleObj"].blobToData(blob)];
                case 4:
                    data = _a.sent();
                    _a.label = 5;
                case 5:
                    // return the result as arrays
                    worker.postMessage(data, [
                        data.vertices.buffer,
                        data.normals.buffer,
                        data.indices.buffer,
                    ]);
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    worker.postMessage(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function fetchData(file) {
    return __awaiter(this, void 0, void 0, function () {
        var response, reader, contentLength, receivedLength, chunks, _a, done, value, chunksAll, position, _i, chunks_1, chunk;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch(file)];
                case 1:
                    response = _b.sent();
                    if (response.status != 200) {
                        worker.postMessage(response.status + ': ' + file);
                        return [2 /*return*/];
                    }
                    reader = response.body.getReader();
                    contentLength = +response.headers.get('Content-Length');
                    receivedLength = 0;
                    chunks = [];
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4 /*yield*/, reader.read()];
                case 3:
                    _a = _b.sent(), done = _a.done, value = _a.value;
                    if (done) {
                        return [3 /*break*/, 4];
                    }
                    chunks.push(value);
                    receivedLength += value.length;
                    worker.postMessage('Downloading: ' + (100 * receivedLength / contentLength).toFixed() + '%');
                    return [3 /*break*/, 2];
                case 4:
                    chunksAll = new Uint8Array(receivedLength);
                    position = 0;
                    for (_i = 0, chunks_1 = chunks; _i < chunks_1.length; _i++) {
                        chunk = chunks_1[_i];
                        chunksAll.set(chunk, position); // (4.2)
                        position += chunk.length;
                    }
                    return [2 /*return*/, chunksAll];
            }
        });
    });
}


/***/ }),

/***/ "./src/Util/BlobFile.ts":
/*!******************************!*\
  !*** ./src/Util/BlobFile.ts ***!
  \******************************/
/*! exports provided: BlobFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobFile", function() { return BlobFile; });
/* harmony import */ var _BlobShim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlobShim */ "./src/Util/BlobShim.ts");
/* harmony import */ var _BlobShim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_BlobShim__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * Internal class for slicing up Blobs
 */
var BlobSlicer = /** @class */ (function () {
    /**
     * @param blob The Blob to be sliced
     */
    function BlobSlicer(blob) {
        // The start byte value for the next slice
        this.start = 0;
        this.blob = blob;
    }
    /**
     * Gets the next slice.
     *
     * @param len The length of the slice.
     * @returns The sliced Blob.
     */
    BlobSlicer.prototype.next = function (len) {
        var b = this.blob.slice(this.start, this.start + len);
        this.start += len;
        return b;
    };
    /**
     * Slices the Blob and returns it as an ArrayBuffer.
     *
     * @param len The length of the slice.
     * @returns An ArrayBuffer promise.
     */
    BlobSlicer.prototype.nextArrayBuffer = function (len) {
        return this.next(len).arrayBuffer();
    };
    /**
     * Slices the Blob and returns it as an Int32Array
     *
     * @param len The length of the slice.
     * @returns An Int32Array promise.
     */
    BlobSlicer.prototype.nextInt32Array = function (len) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Int32Array.bind;
                        return [4 /*yield*/, this.nextArrayBuffer(len)];
                    case 1: return [2 /*return*/, new (_a.apply(Int32Array, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    /**
     * Slices the Blob and returns it as a string
     *
     * @param len The length of the slice.
     * @returns A string promise.
     */
    BlobSlicer.prototype.nextString = function (len) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.next(len).text()];
            });
        });
    };
    return BlobSlicer;
}());
/**
 * Manages creation and extraction of a self describing Blob. Data
 * is stored as:
 *
 * [numEntries] - The number entries in the file. 4 byte Int32
 * [sizes] - Sizes of all the entries, including the info object
 * [info] - User supplied data as a JSON string
 * [entry 1] - First user entry
 * [entry 2] - Second user entry
 * [...]
 */
var BlobFile = /** @class */ (function () {
    /**
     * @param info The information header to be stored with the Blob
     * @param parts The data contents of the Blob
     */
    function BlobFile(info, parts) {
        this.parts = [];
        this.info = info;
        this.parts = parts;
    }
    /**
     * Converts a raw Blob object into a BlobFile
     *
     * @param blob The Blob to process.
     * @return A BlobFile promise.
     */
    BlobFile.extract = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var blobSlicer, numEntries, sizes, jsonInfo, parts, i, size;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blobSlicer = new BlobSlicer(blob);
                        return [4 /*yield*/, blobSlicer.nextInt32Array(4)];
                    case 1:
                        numEntries = (_a.sent())[0];
                        return [4 /*yield*/, blobSlicer.nextInt32Array(4 * (numEntries + 1))];
                    case 2:
                        sizes = _a.sent();
                        return [4 /*yield*/, blobSlicer.nextString(sizes[0])];
                    case 3:
                        jsonInfo = _a.sent();
                        parts = [];
                        for (i = 0; i < numEntries; i++) {
                            size = sizes[i + 1];
                            parts.push(blobSlicer.next(size));
                        }
                        return [2 /*return*/, new BlobFile(JSON.parse(jsonInfo), parts)];
                }
            });
        });
    };
    /**
     * Create a BlobFile Blob
     *
     * @param info The information header to be stored with the Blob
     * @param parts The data contents of the Blob
     */
    BlobFile.createBlob = function (info, parts) {
        var jsonInfo = JSON.stringify(info);
        // Build the array of sizes
        var sizes = [jsonInfo.length];
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part instanceof Int32Array) {
                sizes.push(4 * part.length);
            }
            else if (part instanceof Float32Array) {
                sizes.push(4 * part.length);
            }
            else if (part instanceof String) {
                sizes.push(part.length);
            }
            else {
                var msg = 'Unsupported Blob Part Type: ' + typeof part;
                console.error(msg);
                throw new Error(msg);
            }
        }
        // assemble the blob parts
        var allParts = [];
        allParts.push(new Int32Array([parts.length]));
        allParts.push(new Int32Array(sizes));
        allParts.push(jsonInfo);
        allParts.push.apply(allParts, parts);
        // create the blob
        return new Blob(allParts);
    };
    return BlobFile;
}());



/***/ }),

/***/ "./src/Util/BlobShim.ts":
/*!******************************!*\
  !*** ./src/Util/BlobShim.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// needed for Safari
if (!Blob.prototype.arrayBuffer) {
    Blob.prototype.arrayBuffer = function () {
        var _this = this;
        // read the Blob the old fashioned way
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            // register event handlers
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
            // start the read
            reader.readAsArrayBuffer(_this);
        });
    };
}
// needed for Safari
if (!Blob.prototype.text) {
    // read the Blob the old fashioned way
    Blob.prototype.text = function () {
        var _this = this;
        // read the Blob the old fashioned way
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            // register event handlers
            reader.onloadend = function () {
                // decode into a string
                var txt = new TextDecoder('utf-8').decode(reader.result);
                resolve(txt);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
            // start the read
            reader.readAsArrayBuffer(_this);
        });
    };
}


/***/ }),

/***/ "./src/Util/Globals.ts":
/*!*****************************!*\
  !*** ./src/Util/Globals.ts ***!
  \*****************************/
/*! exports provided: isMobile, env, baseUrl, getTimeStr, getEmPixels, pxToNumber, clamp, toDeg, toRad, mix, toCss, toSizeStr, getBooleanValue, iOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeStr", function() { return getTimeStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmPixels", function() { return getEmPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToNumber", function() { return pxToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDeg", function() { return toDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCss", function() { return toCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSizeStr", function() { return toSizeStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBooleanValue", function() { return getBooleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOS", function() { return iOS; });
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var env = {
    isTesting: false
};
function baseUrl() {
    var url = location.origin + location.pathname;
    if (url.endsWith('index.html')) {
        url = url.substr(0, url.length - 10);
    }
    if (url.endsWith('/') === false) {
        url += '/';
    }
    return url;
}
function getTimeStr() {
    var d = new Date();
    var hours = d.getHours();
    var hoursStr = '';
    if (hours === 0) {
        hoursStr = '12';
    }
    else if (hours > 12) {
        hoursStr = (hours - 12).toString();
    }
    else {
        hoursStr = hours.toString();
    }
    var mins = d.getMinutes();
    var minsStr = '';
    if (mins < 10) {
        minsStr = '0' + mins;
    }
    else {
        minsStr = mins.toString();
    }
    return hoursStr + ':' + minsStr + ' ' + (hours > 12 ? 'PM' : 'AM');
}
function getEmPixels() {
    var style = getComputedStyle(document.body);
    return Number.parseFloat(style.fontSize.substr(0, style.fontSize.length - 2));
}
function pxToNumber(pxValue) {
    if (pxValue.endsWith('px')) {
        return Number.parseFloat(pxValue.substr(0, pxValue.length - 2));
    }
    else {
        return Number.NaN;
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
function toSizeStr(val) {
    if (val < 1024) {
        return val + ' bytes';
    }
    else if (val < 1024 * 1024) {
        return (val / 1024).toFixed(1) + ' kb';
    }
    else {
        return (val / (1024 * 1024)).toFixed(1) + ' mb';
    }
}
function getBooleanValue(value) {
    if (value === undefined || value === null) {
        return false;
    }
    else if (typeof value === 'boolean') {
        return value;
    }
    else if (typeof value === 'function') {
        return value();
    }
    else {
        return false;
    }
}
function iOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}


/***/ }),

/***/ "./src/Util/Profiler.ts":
/*!******************************!*\
  !*** ./src/Util/Profiler.ts ***!
  \******************************/
/*! exports provided: Profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/* harmony import */ var _Stopwatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stopwatch */ "./src/Util/Stopwatch.ts");

/**
 * Utility class for logging timing messages for profile code
 */
var Profiler = /** @class */ (function () {
    function Profiler() {
        this.sw = new _Stopwatch__WEBPACK_IMPORTED_MODULE_0__["Stopwatch"]();
    }
    Object.defineProperty(Profiler.prototype, "elapsedMs", {
        /**
         * The elapsed time in milliseconds
         */
        get: function () {
            return this.sw.elapsedMs;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Prints a message to console of the elapsed time
     *
     * @param msg The message to print with the time
     */
    Profiler.prototype.log = function (msg) {
        console.log(msg + ' ' + this.elapsedMs.toFixed(1) + ' ms');
        this.sw.restart();
    };
    return Profiler;
}());



/***/ }),

/***/ "./src/Util/Stopwatch.ts":
/*!*******************************!*\
  !*** ./src/Util/Stopwatch.ts ***!
  \*******************************/
/*! exports provided: Stopwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stopwatch", function() { return Stopwatch; });
/**
 * Utility class for tracking time
 */
var Stopwatch = /** @class */ (function () {
    function Stopwatch(start) {
        if (start === void 0) { start = true; }
        this.accumulatedMs = 0;
        this.startTime = NaN;
        this._paused = false;
        this.reset(start);
    }
    Object.defineProperty(Stopwatch.prototype, "paused", {
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "running", {
        get: function () {
            return !this.paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedMs", {
        /**
         * The elapsed time in milliseconds
         */
        get: function () {
            if (isNaN(this.startTime)) {
                return this.accumulatedMs;
            }
            else {
                return this.accumulatedMs + (this.getTimeMs() - this.startTime);
            }
        },
        set: function (value) {
            this.accumulatedMs = value;
            if (this.running) {
                this.startTime = this.getTimeMs();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedS", {
        /**
         * The elapsed time in milliseconds
         */
        get: function () {
            return this.elapsedMs / 1000;
        },
        enumerable: false,
        configurable: true
    });
    Stopwatch.prototype.getTimeMs = function () {
        // window.performance is not defined for nodejs so our test need
        // this to compile
        if (typeof window !== 'undefined' && typeof window.performance != 'undefined') {
            return window.performance.now();
        }
        else {
            return Date.now();
        }
    };
    Stopwatch.prototype.reset = function (start) {
        this.accumulatedMs = 0;
        if (start) {
            this._paused = false;
            this.startTime = this.getTimeMs();
        }
        else {
            this._paused = true;
            this.startTime = NaN;
        }
    };
    Stopwatch.prototype.restart = function () {
        this.reset(true);
    };
    Stopwatch.prototype.stop = function () {
        if (this._paused === false) {
            this._paused = true;
            this.accumulatedMs = this.elapsedMs;
            this.startTime = NaN;
        }
    };
    Stopwatch.prototype.start = function () {
        if (this._paused === true) {
            this._paused = false;
            this.startTime = this.getTimeMs();
        }
    };
    return Stopwatch;
}());



/***/ }),

/***/ "./src/Util3D/BoundingBox.ts":
/*!***********************************!*\
  !*** ./src/Util3D/BoundingBox.ts ***!
  \***********************************/
/*! exports provided: BoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return BoundingBox; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Util3D/Vec.ts");

var BoundingBox = /** @class */ (function () {
    function BoundingBox(min, max) {
        if (min === void 0) { min = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]); }
        if (max === void 0) { max = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]); }
        this.min = min;
        this.max = max;
    }
    Object.defineProperty(BoundingBox.prototype, "width", {
        get: function () {
            return this.max.x - this.min.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "height", {
        get: function () {
            return this.max.y - this.min.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "depth", {
        get: function () {
            return this.max.z - this.min.z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "diagonal", {
        get: function () {
            var w = this.width;
            var h = this.height;
            var d = this.depth;
            return Math.sqrt(w * w + h * h + d * d);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "center", {
        get: function () {
            return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([
                (this.min.x + this.max.x) / 2,
                (this.min.y + this.max.y) / 2,
                (this.min.z + this.max.z) / 2,
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "corners", {
        get: function () {
            var corners = [];
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.min.x, this.min.y, this.min.z]));
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.min.x, this.min.y, this.max.z]));
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.min.x, this.max.y, this.min.z]));
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.min.x, this.max.y, this.max.z]));
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.max.x, this.min.y, this.min.z]));
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.max.x, this.min.y, this.max.z]));
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.max.x, this.max.y, this.min.z]));
            corners.push(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.max.x, this.max.y, this.max.z]));
            return corners;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoundingBox, "infinite", {
        get: function () {
            var MAX = Number.POSITIVE_INFINITY;
            var MIN = Number.NEGATIVE_INFINITY;
            return new BoundingBox(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([MIN, MIN, MIN]), new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([MAX, MAX, MAX]));
        },
        enumerable: false,
        configurable: true
    });
    BoundingBox.prototype.inside = function (vec) {
        if (vec.x >= this.min.x && vec.x <= this.max.x &&
            vec.y >= this.min.y && vec.y <= this.max.y &&
            vec.z >= this.min.z && vec.z <= this.max.z) {
            return true;
        }
        else {
            return false;
        }
    };
    BoundingBox.prototype.toString = function (digits) {
        return '[' + this.min.toString(digits) + ']' +
            '[' + this.max.toString(digits) + ']';
    };
    BoundingBox.prototype.update = function (v) {
        if (isNaN(v.x) || isNaN(v.y) || isNaN(v.z)) {
            //console.log('----------------------------------------------NaN');
            return;
        }
        this.min.x = Math.min(this.min.x, v.x);
        this.min.y = Math.min(this.min.y, v.y);
        this.min.z = Math.min(this.min.z, v.z);
        this.max.x = Math.max(this.max.x, v.x);
        this.max.y = Math.max(this.max.y, v.y);
        this.max.z = Math.max(this.max.z, v.z);
    };
    BoundingBox.prototype.merge = function (other) {
        this.min.x = Math.min(this.min.x, other.min.x);
        this.min.y = Math.min(this.min.y, other.min.y);
        this.min.z = Math.min(this.min.z, other.min.z);
        this.max.x = Math.max(this.max.x, other.max.x);
        this.max.y = Math.max(this.max.y, other.max.y);
        this.max.z = Math.max(this.max.z, other.max.z);
    };
    BoundingBox.prototype.multM = function (mat) {
        var ret = new BoundingBox();
        var v1 = mat.multV(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec4"]([this.min.x, this.min.y, this.min.z, 1]));
        var v2 = mat.multV(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec4"]([this.max.x, this.max.y, this.max.z, 1]));
        ret.min.x = Math.min(v1.x, v2.x);
        ret.min.y = Math.min(v1.y, v2.y);
        ret.min.z = Math.min(v1.z, v2.z);
        ret.max.x = Math.max(v1.x, v2.x);
        ret.max.y = Math.max(v1.y, v2.y);
        ret.max.z = Math.max(v1.z, v2.z);
        return ret;
    };
    return BoundingBox;
}());



/***/ }),

/***/ "./src/Util3D/BoundingPts.ts":
/*!***********************************!*\
  !*** ./src/Util3D/BoundingPts.ts ***!
  \***********************************/
/*! exports provided: BoundingPts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingPts", function() { return BoundingPts; });
/**
 * A set of points used to define the bounding edges of an object. All points are
 * enclosed in the object
 */
var BoundingPts = /** @class */ (function () {
    function BoundingPts(pts) {
        this.pts = pts;
    }
    BoundingPts.prototype.get = function (i) {
        return this.pts[i];
    };
    BoundingPts.prototype.distToPoint = function (pt) {
        var ret = {
            min: Number.MAX_VALUE,
            max: -Number.MAX_VALUE,
        };
        this.pts.forEach(function (pt2) {
            var x = pt2.x - pt.x;
            var y = pt2.y - pt.y;
            var z = pt2.z - pt.z;
            var d = x * x + y * y + z * z;
            ret.min = Math.min(d, ret.min);
            ret.max = Math.max(d, ret.max);
        });
        // don't bother getting the square root of every calculation, just the min and max
        ret.min = Math.sqrt(ret.min);
        ret.max = Math.sqrt(ret.max);
        return ret;
    };
    BoundingPts.prototype.distToPlane = function (plane) {
        var ret = {
            min: Number.MAX_VALUE,
            max: -Number.MAX_VALUE,
        };
        this.pts.forEach(function (pt) {
            var d = plane.distToPt(pt);
            ret.min = Math.min(d, ret.min);
            ret.max = Math.max(d, ret.max);
        });
        return ret;
    };
    return BoundingPts;
}());



/***/ }),

/***/ "./src/Util3D/IndexedTriangle.ts":
/*!***************************************!*\
  !*** ./src/Util3D/IndexedTriangle.ts ***!
  \***************************************/
/*! exports provided: IndexedTriangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedTriangle", function() { return IndexedTriangle; });
/* harmony import */ var _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexedVec3 */ "./src/Util3D/IndexedVec3.ts");

/**
 * Minimalist wrapper around a WebGL triangle element
 */
var IndexedTriangle = /** @class */ (function () {
    function IndexedTriangle(vertices, normals, i1, i2, i3) {
        this.v1 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](vertices, i1);
        this.v2 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](vertices, i2);
        this.v3 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](vertices, i3);
        this.n1 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](normals, i1);
        this.n2 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](normals, i2);
        this.n3 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__["IndexedVec3"](normals, i3);
        this.i1 = i1;
        this.i2 = i2;
        this.i3 = i3;
    }
    Object.defineProperty(IndexedTriangle.prototype, "minX", {
        get: function () {
            return Math.min(this.v1.x, this.v2.x, this.v3.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minY", {
        get: function () {
            return Math.min(this.v1.y, this.v2.y, this.v3.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minZ", {
        get: function () {
            return Math.min(this.v1.z, this.v2.z, this.v3.z);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxX", {
        get: function () {
            return Math.max(this.v1.x, this.v2.x, this.v3.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxY", {
        get: function () {
            return Math.max(this.v1.y, this.v2.y, this.v3.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxZ", {
        get: function () {
            return Math.max(this.v1.z, this.v2.z, this.v3.z);
        },
        enumerable: false,
        configurable: true
    });
    IndexedTriangle.prototype.computeNormal = function () {
        var v1 = this.v1.toVec3();
        var v2 = this.v2.toVec3();
        var v3 = this.v3.toVec3();
        var a = v2.subtract(v1);
        var b = v3.subtract(v2);
        return a.cross(b).normalize();
    };
    return IndexedTriangle;
}());



/***/ }),

/***/ "./src/Util3D/IndexedVec3.ts":
/*!***********************************!*\
  !*** ./src/Util3D/IndexedVec3.ts ***!
  \***********************************/
/*! exports provided: IndexedVec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedVec3", function() { return IndexedVec3; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Util3D/Vec.ts");

var IndexedVec3 = /** @class */ (function () {
    function IndexedVec3(values, index) {
        this.values = values;
        this.index = index;
    }
    Object.defineProperty(IndexedVec3.prototype, "x", {
        get: function () {
            return this.values[3 * this.index + 0];
        },
        set: function (val) {
            this.values[3 * this.index + 0] = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexedVec3.prototype, "y", {
        get: function () {
            return this.values[3 * this.index + 1];
        },
        set: function (val) {
            this.values[3 * this.index + 1] = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IndexedVec3.prototype, "z", {
        get: function () {
            return this.values[3 * this.index + 2];
        },
        set: function (val) {
            this.values[3 * this.index + 2] = val;
        },
        enumerable: false,
        configurable: true
    });
    IndexedVec3.prototype.toVec3 = function () {
        return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.x, this.y, this.z]);
    };
    return IndexedVec3;
}());



/***/ }),

/***/ "./src/Util3D/TriangleObj.ts":
/*!***********************************!*\
  !*** ./src/Util3D/TriangleObj.ts ***!
  \***********************************/
/*! exports provided: NormalType, TriangleObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalType", function() { return NormalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObj", function() { return TriangleObj; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Util3D/Vec.ts");
/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundingBox */ "./src/Util3D/BoundingBox.ts");
/* harmony import */ var _BoundingPts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoundingPts */ "./src/Util3D/BoundingPts.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/Util3D/IndexedTriangle.ts");
/* harmony import */ var _IndexedVec3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IndexedVec3 */ "./src/Util3D/IndexedVec3.ts");
/* harmony import */ var _Util_Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Util/Globals */ "./src/Util/Globals.ts");
/* harmony import */ var _Util_Profiler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Util/Profiler */ "./src/Util/Profiler.ts");
/* harmony import */ var _Util_BlobFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util/BlobFile */ "./src/Util/BlobFile.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */








var NormalType;
(function (NormalType) {
    NormalType[NormalType["Smooth"] = 0] = "Smooth";
    NormalType[NormalType["Flat"] = 1] = "Flat";
})(NormalType || (NormalType = {}));
/**
 * Base class for representing an object from a bunch of triangles.
 */
var TriangleObj = /** @class */ (function () {
    function TriangleObj(name) {
        this.vertices = [];
        this.normals = [];
        this.indices = [];
        this.box = new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["BoundingBox"]();
        this.name = name;
    }
    Object.defineProperty(TriangleObj.prototype, "numVertices", {
        get: function () {
            return this.vertices.length / 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "numTriangles", {
        get: function () {
            return this.indices.length / 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "width", {
        get: function () {
            return this.box.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "height", {
        get: function () {
            return this.box.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "depth", {
        get: function () {
            return this.box.depth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "diagonal", {
        get: function () {
            return this.box.diagonal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "center", {
        get: function () {
            return this.box.center;
        },
        enumerable: false,
        configurable: true
    });
    TriangleObj.prototype.getTriangle = function (index) {
        var i1 = this.indices[3 * index + 0];
        var i2 = this.indices[3 * index + 1];
        var i3 = this.indices[3 * index + 2];
        return new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_3__["IndexedTriangle"](this.vertices, this.normals, i1, i2, i3);
    };
    TriangleObj.prototype.pushQuad = function (v1, v2, v3, v4) {
        this.pushTriangle(v1, v2, v3);
        this.pushTriangle(v2, v4, v3);
    };
    TriangleObj.prototype.pushTriangle = function (v1, v2, v3) {
        var _a, _b, _c;
        // add indices
        var i1 = this.numVertices;
        var i2 = i1 + 1;
        var i3 = i1 + 2;
        this.indices.push(i1, i2, i3);
        // add vertices
        this.vertices.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z);
        this.box.update(v1);
        this.box.update(v2);
        this.box.update(v3);
        // add normals
        var tri = new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_3__["IndexedTriangle"](this.vertices, this.normals, i1, i2, i3);
        var normal = tri.computeNormal();
        (_a = this.normals).push.apply(_a, normal.values);
        (_b = this.normals).push.apply(_b, normal.values);
        (_c = this.normals).push.apply(_c, normal.values);
    };
    TriangleObj.prototype.computeNormals = function (type) {
        var _a;
        if (type === NormalType.Smooth) {
            var multiNormVertices = [];
            for (var i = 0; i < this.numVertices; i++) {
                multiNormVertices.push(new MultiNormVertex());
            }
            // store the normals with each vertex - we'll later average these
            for (var i = 0; i < this.numTriangles; i++) {
                var tri = this.getTriangle(i);
                var n = tri.computeNormal();
                multiNormVertices[tri.i1].push(n);
                multiNormVertices[tri.i2].push(n);
                multiNormVertices[tri.i3].push(n);
            }
            // populate the normals array
            this.normals = [];
            for (var i = 0; i < multiNormVertices.length; i++) {
                (_a = this.normals).push.apply(_a, multiNormVertices[i].normal.values);
            }
        }
        else {
            // to go this way we need to have a unique vector and normal for each triangle
            // corner. Blow away the old stuff and rebuild
            var oldIndices = this.indices;
            var oldVertices = this.vertices;
            // reset everything
            this.vertices = [];
            this.normals = [];
            this.indices = [];
            // rebuild
            for (var i = 0; i < oldIndices.length / 3; i++) {
                var v1 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_4__["IndexedVec3"](oldVertices, oldIndices[3 * i + 0]);
                var v2 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_4__["IndexedVec3"](oldVertices, oldIndices[3 * i + 1]);
                var v3 = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_4__["IndexedVec3"](oldVertices, oldIndices[3 * i + 2]);
                this.pushTriangle(v1, v2, v3);
            }
        }
    };
    TriangleObj.prototype.x = function (i) {
        return this.vertices[3 * i + 0];
    };
    TriangleObj.prototype.y = function (i) {
        return this.vertices[3 * i + 1];
    };
    TriangleObj.prototype.z = function (i) {
        return this.vertices[3 * i + 2];
    };
    TriangleObj.prototype.findBounds = function () {
        console.log('finding bounds');
        var box = new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["BoundingBox"]();
        for (var i = 0; i < this.numTriangles; i++) {
            var tri = this.getTriangle(i);
            box.update(tri.v1);
            box.update(tri.v2);
            box.update(tri.v3);
        }
        this.box = box;
    };
    /**
     * Breaks the object into evenly spaced volumes. The number of volumes is automatically
     * determined based on the number of triangles.
     */
    TriangleObj.prototype.getBoundingPts = function () {
        if (this.boundingPts) {
            return this.boundingPts;
        }
        var numSteps = 15;
        var boxes = [];
        for (var i = 0; i < Math.pow(numSteps, 3); i++) {
            boxes.push(new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["BoundingBox"]());
        }
        var v = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
        for (var i = 0; i < this.numVertices; i++) {
            v.x = this.vertices[3 * i + 0];
            v.y = this.vertices[3 * i + 1];
            v.z = this.vertices[3 * i + 2];
            var x = Math.floor(numSteps * (v.x - this.box.min.x) / (this.box.width));
            var y = Math.floor(numSteps * (v.y - this.box.min.y) / (this.box.height));
            var z = Math.floor(numSteps * (v.z - this.box.min.z) / (this.box.depth));
            x = Object(_Util_Globals__WEBPACK_IMPORTED_MODULE_5__["clamp"])(x, 0, numSteps - 1);
            y = Object(_Util_Globals__WEBPACK_IMPORTED_MODULE_5__["clamp"])(y, 0, numSteps - 1);
            z = Object(_Util_Globals__WEBPACK_IMPORTED_MODULE_5__["clamp"])(z, 0, numSteps - 1);
            var index = x + y * numSteps + z * numSteps * numSteps;
            boxes[index].update(v);
        }
        var boxMap = new Map();
        var boxCount = 0;
        for (var x = 0; x < numSteps; x++) {
            for (var y = 0; y < numSteps; y++) {
                var first = void 0;
                var last = void 0;
                for (var z = 0; z < numSteps; z++) {
                    var index = x + y * numSteps + z * numSteps * numSteps;
                    var box = boxes[index];
                    if (box.min.x === Number.MAX_VALUE) {
                        continue;
                    }
                    boxCount++;
                    if (!first) {
                        first = { index: index, box: box };
                    }
                    last = { index: index, box: box };
                }
                if (first && boxMap.has(first.index) === false) {
                    boxMap.set(first.index, first.box);
                }
                if (last && boxMap.has(last.index) === false) {
                    boxMap.set(last.index, last.box);
                }
            }
        }
        var pts = [];
        boxes.forEach(function (box) {
            if (box.min.x !== Number.MAX_VALUE) {
                pts.push.apply(pts, box.corners);
            }
        });
        this.boundingPts = new _BoundingPts__WEBPACK_IMPORTED_MODULE_2__["BoundingPts"](pts);
        return this.boundingPts;
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
        str += '# Triangles: ' + this.numTriangles + '\n';
        str += '\n';
        for (var i = 0; i < this.numVertices; i++) {
            var v = this.vertices;
            str += 'v ' + v[3 * i + 0].toPrecision(digits) + ' ' + v[3 * i + 1].toPrecision(digits) + ' ' + v[3 * i + 2].toPrecision(digits) + '\n';
        }
        for (var i = 0; i < this.numVertices; i++) {
            var n = this.normals;
            str += 'vn ' + n[3 * i + 0].toPrecision(digits) + ' ' + n[3 * i + 1].toPrecision(digits) + ' ' + n[3 * i + 2].toPrecision(digits) + '\n';
        }
        for (var i = 0; i < this.numTriangles; i++) {
            var t = this.getTriangle(i);
            str += 'f ' +
                (t.i1 + 1) + '//' + (t.i1 + 1) + ' ' +
                (t.i2 + 1) + '//' + (t.i2 + 1) + ' ' +
                (t.i3 + 1) + '//' + (t.i3 + 1) + '\n';
        }
        return str;
    };
    TriangleObj.prototype.optimize = function (normalType) {
        if (normalType === NormalType.Smooth) {
            var vertexToIndexMap = new Map();
            var indexToIndexMap = new Map();
            // first generate a unique set of vertices
            var uniqueVertices = [];
            for (var i = 0; i < this.numVertices; i++) {
                var oldVertex = new _IndexedVec3__WEBPACK_IMPORTED_MODULE_4__["IndexedVec3"](this.vertices, i);
                var key = this.vertices[3 * i + 0].toFixed(4) + ' ' + this.vertices[3 * i + 1].toFixed(4) + ' ' + this.vertices[3 * i + 2].toFixed(4);
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
            // reset all the vertices
            this.vertices = [];
            for (var i = 0; i < uniqueVertices.length; i++) {
                this.vertices.push(uniqueVertices[i].x);
                this.vertices.push(uniqueVertices[i].y);
                this.vertices.push(uniqueVertices[i].z);
            }
            // remap all indices
            for (var i = 0; i < this.indices.length; i++) {
                var oldIndex = this.indices[i];
                this.indices[i] = indexToIndexMap.get(oldIndex + 1) - 1;
            }
        }
        else {
            // nothing to do for flat normals. New vertices and normals are created in 
            // computeNormals() below if needed
        }
        this.computeNormals(normalType);
    };
    TriangleObj.prototype.trim = function (box) {
        var p = new _Util_Profiler__WEBPACK_IMPORTED_MODULE_6__["Profiler"]();
        var indices = [];
        for (var i = 0; i < this.numTriangles; i++) {
            var tri = this.getTriangle(i);
            if (box.inside(tri.v1) && box.inside(tri.v2) && box.inside(tri.v3)) {
                indices.push(tri.i1);
                indices.push(tri.i2);
                indices.push(tri.i3);
            }
        }
        console.log('trimmed ' + (this.indices.length - indices.length) + ' triangles');
        this.indices = indices;
        this.findBounds();
        p.log('Trim Complete');
    };
    TriangleObj.prototype.mirror = function (x, add) {
        var p = new _Util_Profiler__WEBPACK_IMPORTED_MODULE_6__["Profiler"]();
        if (add) {
            // duplicate vertices
            var numVertices = this.numVertices;
            for (var i = 0; i < numVertices; i++) {
                this.vertices[3 * i + 0] -= x;
                this.vertices.push(-this.vertices[3 * i + 0]);
                this.vertices.push(this.vertices[3 * i + 1]);
                this.vertices.push(this.vertices[3 * i + 2]);
                this.normals.push(-this.normals[3 * i + 0]);
                this.normals.push(this.normals[3 * i + 1]);
                this.normals.push(this.normals[3 * i + 2]);
            }
            var numIndices = this.indices.length;
            var startIndex = numVertices;
            for (var i = 0; i < numIndices; i++) {
                this.indices.push(startIndex + this.indices[i]);
            }
        }
        else {
            // reflect vertices
            var numVertices = this.numVertices;
            for (var i = 0; i < numVertices; i++) {
                this.vertices[3 * i + 0] = x + (x - this.vertices[3 * i + 0]);
                this.normals[3 * i + 0] = -this.normals[3 * i + 0];
            }
        }
        this.findBounds();
        p.log('Mirror Complete');
    };
    TriangleObj.prototype.reverse = function () {
        var p = new _Util_Profiler__WEBPACK_IMPORTED_MODULE_6__["Profiler"]();
        // reflect vertices
        var x = this.center.x;
        for (var i = 0; i < this.numVertices; i++) {
            this.vertices[3 * i + 0] = x + (x - this.vertices[3 * i + 0]);
            this.normals[3 * i + 0] = -this.normals[3 * i + 0];
        }
        // reorder triangles to preserve front-back facing
        for (var i = 0; i < this.numTriangles; i++) {
            var i1 = this.indices[3 * i + 0];
            var i2 = this.indices[3 * i + 1];
            this.indices[3 * i + 0] = i2;
            this.indices[3 * i + 1] = i1;
        }
        p.log('Reverse Complete');
    };
    TriangleObj.prototype.combine = function (tObj) {
        // save the value for the first index of the combined objects
        var startIndex = this.numVertices;
        // add the other vertices and normals to ours
        for (var i = 0; i < tObj.vertices.length; i++) {
            this.vertices.push(tObj.vertices[i]);
            this.normals.push(tObj.normals[i]);
        }
        // add the other indices, but offset them properly
        for (var i = 0; i < tObj.indices.length; i++) {
            this.indices.push(startIndex + tObj.indices[i]);
        }
        // merge the bounding boxes
        this.box.merge(tObj.box);
    };
    TriangleObj.prototype.toData = function () {
        return {
            source: this.source,
            name: this.name,
            vertices: new Float32Array(this.vertices),
            normals: new Float32Array(this.normals),
            indices: new Int32Array(this.indices),
            boxMin: this.box.min.clone(),
            boxMax: this.box.max.clone(),
        };
    };
    TriangleObj.fromData = function (data) {
        var tObj = new TriangleObj();
        tObj.name = data.name;
        tObj.vertices = Array.from(data.vertices);
        tObj.normals = Array.from(data.normals);
        tObj.indices = Array.from(data.indices);
        tObj.box = new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["BoundingBox"](new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"](data.boxMin.values), new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"](data.boxMax.values));
        return tObj;
    };
    TriangleObj.prototype.toBlob = function () {
        // create a description
        var info = {
            FileType: 'Binary OBJ',
            Version: '1.0',
            Name: this.name,
            Source: this.source,
        };
        // get the raw data
        var data = this.toData();
        // break it into parts
        var parts = [];
        parts.push(data.vertices);
        parts.push(data.normals);
        parts.push(data.indices);
        parts.push(new Float32Array(data.boxMin.values));
        parts.push(new Float32Array(data.boxMax.values));
        // create the Blob
        return _Util_BlobFile__WEBPACK_IMPORTED_MODULE_7__["BlobFile"].createBlob(info, parts);
    };
    TriangleObj.fromBlob = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TriangleObj.blobToData(blob)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, TriangleObj.fromData(data)];
                }
            });
        });
    };
    TriangleObj.blobToData = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var bFile, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            var _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0: return [4 /*yield*/, _Util_BlobFile__WEBPACK_IMPORTED_MODULE_7__["BlobFile"].extract(blob)];
                    case 1:
                        bFile = _o.sent();
                        _m = {
                            name: bFile.info.Name,
                            source: bFile.info.Source
                        };
                        _a = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[0].arrayBuffer()];
                    case 2:
                        _m.vertices = new (_a.apply(Float32Array, [void 0, _o.sent()]))();
                        _b = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[1].arrayBuffer()];
                    case 3:
                        _m.normals = new (_b.apply(Float32Array, [void 0, _o.sent()]))();
                        _c = Int32Array.bind;
                        return [4 /*yield*/, bFile.parts[2].arrayBuffer()];
                    case 4:
                        _m.indices = new (_c.apply(Int32Array, [void 0, _o.sent()]))();
                        _d = _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"].bind;
                        _f = (_e = Array).from;
                        _g = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[3].arrayBuffer()];
                    case 5:
                        _m.boxMin = new (_d.apply(_Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"], [void 0, _f.apply(_e, [new (_g.apply(Float32Array, [void 0, _o.sent()]))()])]))();
                        _h = _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"].bind;
                        _k = (_j = Array).from;
                        _l = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[4].arrayBuffer()];
                    case 6: return [2 /*return*/, (_m.boxMax = new (_h.apply(_Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"], [void 0, _k.apply(_j, [new (_l.apply(Float32Array, [void 0, _o.sent()]))()])]))(),
                            _m)];
                }
            });
        });
    };
    return TriangleObj;
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
            var n = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
            for (var i = 0; i < this.normals.length; i++) {
                n.x += this.normals[i].x;
                n.y += this.normals[i].y;
                n.z += this.normals[i].z;
            }
            n.x /= this.normals.length;
            n.y /= this.normals.length;
            n.z /= this.normals.length;
            return n;
        },
        enumerable: false,
        configurable: true
    });
    return MultiNormVertex;
}());


/***/ }),

/***/ "./src/Util3D/TriangleObjFile.ts":
/*!***************************************!*\
  !*** ./src/Util3D/TriangleObjFile.ts ***!
  \***************************************/
/*! exports provided: TriangleObjFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObjFile", function() { return TriangleObjFile; });
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TriangleObj */ "./src/Util3D/TriangleObj.ts");
/* harmony import */ var _Util_Profiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/Profiler */ "./src/Util/Profiler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    function TriangleObjFile(name, src, updateStatus) {
        var _this = _super.call(this, name) || this;
        // record the status function. If one is not supplied, create one that does nothing
        if (!updateStatus) {
            updateStatus = function (status) { return; };
        }
        _this.parse(src, updateStatus);
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
            if (vals.length === 3) {
                ret.iN.push(parseInt(vals[2]) - 1);
            }
        }
        return ret;
    };
    TriangleObjFile.prototype.parse = function (src, updateStatus) {
        updateStatus('Processing');
        var t = Date.now();
        var p2 = new _Util_Profiler__WEBPACK_IMPORTED_MODULE_1__["Profiler"]();
        var p = new _Util_Profiler__WEBPACK_IMPORTED_MODULE_1__["Profiler"]();
        var lines = src.split('\n');
        p.log('split');
        var vertices = [];
        var normals = [];
        var vIndices = [];
        var nIndices = [];
        var match = true;
        var containsNormals = true;
        for (var i = 0; i < lines.length; i++) {
            // report progress every 50 ms
            if (Date.now() - t > 50) {
                updateStatus('Processing: ' + (100 * i / lines.length).toFixed() + '%');
                t = Date.now();
            }
            var line = lines[i];
            if (line.startsWith('v ')) {
                var tokens = line.match(/\S+/g);
                vertices.push(parseFloat(tokens[1]));
                vertices.push(parseFloat(tokens[2]));
                vertices.push(parseFloat(tokens[3]));
            }
            else if (line.startsWith('vn ')) {
                var tokens = line.match(/\S+/g);
                normals.push(parseFloat(tokens[1]));
                normals.push(parseFloat(tokens[2]));
                normals.push(parseFloat(tokens[3]));
            }
            else if (line.startsWith('f ')) {
                var ret = this.parseFace(line);
                if (containsNormals) {
                    if (ret.iV.length !== ret.iN.length) {
                        containsNormals = false;
                        console.warn('Normals not specified in file. Flat normals will be computed.');
                    }
                    else if (match) {
                        for (var i_1 = 0; i_1 < ret.iV.length; i_1++) {
                            if (ret.iV[i_1] != ret.iN[i_1]) {
                                console.warn('Vertices and normals don\'t match. Content will be re-indexed');
                                match = false;
                                break;
                            }
                        }
                    }
                }
                if (ret.iV.length === 4) {
                    vIndices.push(ret.iV[0], ret.iV[1], ret.iV[2]);
                    vIndices.push(ret.iV[0], ret.iV[2], ret.iV[3]);
                    if (containsNormals) {
                        nIndices.push(ret.iN[0], ret.iN[1], ret.iN[2]);
                        nIndices.push(ret.iN[0], ret.iN[2], ret.iN[3]);
                    }
                }
                else {
                    vIndices.push(ret.iV[0], ret.iV[1], ret.iV[2]);
                    if (containsNormals) {
                        nIndices.push(ret.iN[0], ret.iN[1], ret.iN[2]);
                    }
                }
            }
        }
        p.log('parse');
        if (match) {
            this.vertices = vertices;
            this.indices = vIndices;
            if (containsNormals) {
                this.normals = normals;
            }
        }
        else {
            this.vertices = [];
            this.normals = [];
            this.indices = [];
            for (var i = 0; i < vIndices.length; i++) {
                this.vertices.push(vertices[3 * vIndices[i] + 0]);
                this.vertices.push(vertices[3 * vIndices[i] + 1]);
                this.vertices.push(vertices[3 * vIndices[i] + 2]);
                this.normals.push(normals[3 * nIndices[i] + 0]);
                this.normals.push(normals[3 * nIndices[i] + 1]);
                this.normals.push(normals[3 * nIndices[i] + 2]);
                this.indices.push(i);
            }
            p.log('reindex');
        }
        if (containsNormals === false) {
            this.computeNormals(_TriangleObj__WEBPACK_IMPORTED_MODULE_0__["NormalType"].Flat);
            p.log('compute normals');
        }
        this.findBounds();
        p.log('findBounds');
        p2.log('Total');
        updateStatus('Processing: 100%');
        console.log('Vertices: ' + this.vertices.length);
        console.log('Normals: ' + this.normals.length);
        console.log('Triangles: ' + this.numTriangles);
    };
    return TriangleObjFile;
}(_TriangleObj__WEBPACK_IMPORTED_MODULE_0__["TriangleObj"]));



/***/ }),

/***/ "./src/Util3D/Vec.ts":
/*!***************************!*\
  !*** ./src/Util3D/Vec.ts ***!
  \***************************/
/*! exports provided: Vec2, Vec3, Vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return Vec2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return Vec4; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/**
 * Vector class for use with WebGL applications.
 */
var Vec = /** @class */ (function () {
    /**
     * @param valuesOrSize If a array, the values for the vector. If a number, the size of the vector.
     */
    function Vec(valuesOrSize) {
        if (valuesOrSize instanceof Array) {
            this.values = __spreadArray([], valuesOrSize);
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
    Vec.prototype.magnitude = function () {
        var sum = 0;
        for (var i = 0; i < this.values.length; i++) {
            sum += this.values[i] * this.values[i];
        }
        return Math.sqrt(sum);
    };
    return Vec;
}());
/**
 * An x-y vector.
 */
var Vec2 = /** @class */ (function (_super) {
    __extends(Vec2, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function Vec2(vals) {
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
    Vec2.prototype.clone = function () {
        return new Vec2(this.values);
    };
    Object.defineProperty(Vec2.prototype, "x", {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "y", {
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
        enumerable: false,
        configurable: true
    });
    /**
     * Computes the distance to another point
     *
     * @param other The other point
     * @returns The distance between this point and the other point
     */
    Vec2.prototype.distance = function (other) {
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    };
    /**
     * Creates a string representation of the vector
     *
     * @param digits The number of decimal places to display. This value is passed to toFixed().
     * @param divider The string to separate each number.
     * @returns A string representation.
     */
    Vec2.prototype.toString = function (digits, divider) {
        if (digits === void 0) { digits = 2; }
        if (divider === void 0) { divider = ','; }
        return this.x.toFixed(digits) + divider + this.y.toFixed(digits);
    };
    return Vec2;
}(Vec));

/**
 * An x-y-z vector.
 */
var Vec3 = /** @class */ (function (_super) {
    __extends(Vec3, _super);
    /**
     * @param vals If supplied, the initial values for the vector
     */
    function Vec3(vals) {
        var _this = this;
        if (vals) {
            _this = _super.call(this, vals) || this;
        }
        else {
            _this = _super.call(this, 3) || this;
        }
        return _this;
    }
    Object.defineProperty(Vec3, "origin", {
        get: function () {
            return new Vec3([0, 0, 0]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "x", {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "y", {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "z", {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "xy", {
        /**
         * Gets the x-y components as a 2d vec
         *
         * @return the Vec3
         */
        get: function () {
            return new Vec2([this.x, this.y]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a copy of the vector.
     *
     * @returns A copy of the vector.
     */
    Vec3.prototype.clone = function () {
        return new Vec3(this.values);
    };
    /**
     * Creates a string representation of the vector
     *
     * @param digits The number of decimal places to display. This value is passed to toFixed().
     * @param divider The string to separate each number.
     * @returns A string representation.
     */
    Vec3.prototype.toString = function (digits, divider) {
        if (digits === void 0) { digits = 2; }
        if (divider === void 0) { divider = ','; }
        return this.x.toFixed(digits) + divider + this.y.toFixed(digits) + divider + this.z.toFixed(digits);
    };
    /**
     * Returns a normalized version of this vector.
     *
     * @returns The resulting normalized vector.
     */
    Vec3.prototype.normalize = function () {
        var mag = this.magnitude();
        if (mag === 0) {
            return new Vec3();
        }
        else {
            return this.mult(1 / mag);
        }
    };
    /**
     * Multiplies members by a value and returns the new vector
     *
     * @param value The multiplication value.
     */
    Vec3.prototype.mult = function (value) {
        return new Vec3([
            this.x * value,
            this.y * value,
            this.z * value,
        ]);
    };
    /**
     * Returns the vector pointing in the opposite direction.
     *
     * @returns The negated vector.
     */
    Vec3.prototype.negate = function () {
        return new Vec3([-this.x, -this.y, -this.z]);
    };
    /**
     * Subtracts values from this vector.
     *
     * @param vec The vector to subtract.
     * @returns The computed vector.
     */
    Vec3.prototype.subtract = function (vec) {
        return new Vec3([
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
    Vec3.prototype.add = function (vec) {
        return new Vec3([
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
    Vec3.prototype.cross = function (other) {
        var A = this.values;
        var B = other.values;
        return new Vec3([
            A[1] * B[2] - A[2] * B[1],
            A[2] * B[0] - A[0] * B[2],
            A[0] * B[1] - A[1] * B[0]
        ]);
    };
    /**
     * Computes the distance from this point to a specified point.
     *
     * @param pt The point.
     * @returns The distance to the point.
     */
    Vec3.prototype.distToPoint = function (pt) {
        return this.subtract(pt).magnitude();
    };
    /**
     * Builds a Vec4 from this Vec3
     *
     * @param w The w component of the new vector.
     * @returns The new vector.
     */
    Vec3.prototype.toVec4 = function (w) {
        return new Vec4([this.x, this.y, this.z, w]);
    };
    return Vec3;
}(Vec));

/**
 * An x-y-z-w vector.
 */
var Vec4 = /** @class */ (function (_super) {
    __extends(Vec4, _super);
    /**
     * @param vals If supplied, the initial values for the vector.
     */
    function Vec4(vals) {
        var _this = this;
        if (vals) {
            _this = _super.call(this, vals) || this;
        }
        else {
            _this = _super.call(this, 4) || this;
        }
        return _this;
    }
    Object.defineProperty(Vec4.prototype, "x", {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec4.prototype, "y", {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec4.prototype, "z", {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec4.prototype, "w", {
        /**
         * Gets the Z component of the vector
         *
         * @returns The value
         */
        get: function () {
            return this.values[3];
        },
        /**
         * Sets the Z component of the vector
         *
         * @param val The value
         */
        set: function (val) {
            this.values[3] = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec4.prototype, "xyz", {
        /**
         * Gets the x-y-z components as a 3d vec
         *
         * @return the Vec3
         */
        get: function () {
            return new Vec3([this.x, this.y, this.z]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a copy of the vector.
     *
     * @returns A copy of the vector.
     */
    Vec4.prototype.clone = function () {
        return new Vec4(this.values);
    };
    /**
     * Returns an x-y-z vector where each element is computed by dividing this vectors
     * elements by the w value.
     *
     * @returns An x-y-z vector.
     */
    Vec4.prototype.divideByW = function () {
        var w = this.values[3];
        return new Vec3([
            this.values[0] / w,
            this.values[1] / w,
            this.values[2] / w
        ]);
    };
    /**
     * Normalizes this vector, and stores and returns the result.
     *
     * @returns The resulting normalized vector.
     */
    Vec4.prototype.normalize = function () {
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
     * Creates a Vec4 from a Vec3 object
     *
     * @param vec The Vec3 object
     * @param w The w value for the Vec4
     */
    Vec4.fromVec3 = function (vec, w) {
        if (w === void 0) { w = 1; }
        return new Vec4([vec.x, vec.y, vec.z, w]);
    };
    return Vec4;
}(Vec));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcHMvVmlld2VyL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iU2hpbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9HbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1N0b3B3YXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL0JvdW5kaW5nQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvQm91bmRpbmdQdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL1RyaWFuZ2xlT2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVmVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsS0FBa0I7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxHQUFTO1FBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMs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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFTSx1Q0FBYSxHQUFwQjtRQUNHLElBQU0s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QUFXLENBQUM7U0FDMUI7UUFFRCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBTSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLHdEQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBTSxDQUFDLEdBQUcsSUFBSSx5Q0FBSSxFQUFFLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElB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R0FBRyxHQWlKNUIiLCJmaWxlIjoiTG9hZGVyV29ya2VyLndvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9BcHBzL1ZpZXdlci9Mb2FkZXJXb3JrZXIudHNcIik7XG4iLCJpbXBvcnQgeyBJVHJpYW5nbGVPYmpEYXRhLCBUcmlhbmdsZU9iaiB9IGZyb20gJy4uLy4uL1V0aWwzRC9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqRmlsZSB9IGZyb20gJy4uLy4uL1V0aWwzRC9UcmlhbmdsZU9iakZpbGUnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIHdvcmtlciB0aGF0IGxvYWRzIGFuZCBwcm9jZXNzZXMgdGhlIC5vYmogZmlsZVxyXG4gKi9cclxuY29uc3Qgd29ya2VyOiBXb3JrZXIgPSBzZWxmIGFzIGFueTtcclxuXHJcbi8vIEhhbmRsZXIgZm9yIHJlY2VpdmluZyBtZXNzYWdlcyBmcm9tIHRoZSBtYWluIHRocmVhZFxyXG53b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9OiB7IGRhdGE6IHN0cmluZyB9KSA9PiB7XHJcblxyXG4gICAvLyB3aGVuIHdlIHJlY2VpdmUgYSBzdHJpbmcgYXMgYSBtZXNzYWdlLCBpdCdzIHRoZSB1cmwgb2YgdGhlIGZpbGUgdG8gbG9hZFxyXG4gICBsb2FkRmlsZShkYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB3b3JrZXIgZnVuY3Rpb24gdG8gbG9hZCBhIGZpbGVcclxuICogXHJcbiAqIEBwYXJhbSBmaWxlIFRoZSB1cmwgb2YgdGhlIGZpbGUgdG8gbG9hZFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEZpbGUoZmlsZTogc3RyaW5nKSB7XHJcblxyXG4gICAvLyB0aGUgaW5pdGlhbCBzdGF0dXMgbWVzc2FnZVxyXG4gICB3b3JrZXIucG9zdE1lc3NhZ2UoJ0Rvd25sb2FkaW5nIDAlJyk7XHJcblxyXG4gICB0cnkge1xyXG4gICAgICBjb25zdCBjaHVua3NBbGwgPSBhd2FpdCBmZXRjaERhdGEoZmlsZSk7XHJcbiAgICAgIGxldCBkYXRhOiBJVHJpYW5nbGVPYmpEYXRhO1xyXG5cclxuICAgICAgaWYgKGZpbGUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLm9iaicpKSB7XHJcbiAgICAgICAgIC8vIGRlY29kZSBpbnRvIGEgc3RyaW5nXHJcbiAgICAgICAgIGNvbnN0IHJlcyA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKS5kZWNvZGUoY2h1bmtzQWxsKTtcclxuXHJcbiAgICAgICAgIC8vIHR1cm4gdGhlIC5vYmogc3RyaW5nIGludG8gdHJpYW5nbGVzXHJcbiAgICAgICAgIGNvbnN0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmpGaWxlKGZpbGUsIHJlcywgKHN0YXR1cykgPT4geyB3b3JrZXIucG9zdE1lc3NhZ2Uoc3RhdHVzKTsgfSk7XHJcbiAgICAgICAgIGRhdGEgPSB0T2JqLnRvRGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGZpbGUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmJsb2InKSkge1xyXG4gICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NodW5rc0FsbF0pO1xyXG4gICAgICAgICBkYXRhID0gYXdhaXQgVHJpYW5nbGVPYmouYmxvYlRvRGF0YShibG9iKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmV0dXJuIHRoZSByZXN1bHQgYXMgYXJyYXlzXHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShkYXRhLCBbXHJcbiAgICAgICAgIGRhdGEudmVydGljZXMuYnVmZmVyLFxyXG4gICAgICAgICBkYXRhLm5vcm1hbHMuYnVmZmVyLFxyXG4gICAgICAgICBkYXRhLmluZGljZXMuYnVmZmVyLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG4gICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShlcnIpO1xyXG4gICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShmaWxlOiBzdHJpbmcpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuXHJcbiAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmlsZSk7XHJcblxyXG4gICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UocmVzcG9uc2Uuc3RhdHVzICsgJzogJyArIGZpbGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XHJcbiAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSArcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtTGVuZ3RoJyk7XHJcblxyXG4gICAvLyBsb29wIHRvIGxvYWQgdGhlIGRhdGEsIG9uZSBjaHVuayBhdCBhIHRpbWVcclxuICAgbGV0IHJlY2VpdmVkTGVuZ3RoID0gMDsgLy8gcmVjZWl2ZWQgdGhhdCBtYW55IGJ5dGVzIGF0IHRoZSBtb21lbnRcclxuICAgbGV0IGNodW5rcyA9IFtdOyAvLyBhcnJheSBvZiByZWNlaXZlZCBiaW5hcnkgY2h1bmtzIChjb21wcmlzZXMgdGhlIGJvZHkpXHJcbiAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XHJcblxyXG4gICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2h1bmtzLnB1c2godmFsdWUpO1xyXG4gICAgICByZWNlaXZlZExlbmd0aCArPSB2YWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoJ0Rvd25sb2FkaW5nOiAnICsgKDEwMCAqIHJlY2VpdmVkTGVuZ3RoIC8gY29udGVudExlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgfVxyXG5cclxuICAgLy8gY29uY2F0ZW5hdGUgY2h1bmtzIGludG8gc2luZ2xlIFVpbnQ4QXJyYXlcclxuICAgbGV0IGNodW5rc0FsbCA9IG5ldyBVaW50OEFycmF5KHJlY2VpdmVkTGVuZ3RoKTsgLy8gKDQuMSlcclxuICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgZm9yIChsZXQgY2h1bmsgb2YgY2h1bmtzKSB7XHJcbiAgICAgIGNodW5rc0FsbC5zZXQoY2h1bmssIHBvc2l0aW9uKTsgLy8gKDQuMilcclxuICAgICAgcG9zaXRpb24gKz0gY2h1bmsubGVuZ3RoO1xyXG4gICB9XHJcblxyXG4gICByZXR1cm4gY2h1bmtzQWxsO1xyXG59IiwiaW1wb3J0ICcuL0Jsb2JTaGltJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyBmb3Igc2xpY2luZyB1cCBCbG9ic1xyXG4gKi9cclxuY2xhc3MgQmxvYlNsaWNlciB7XHJcblxyXG4gICAvLyBUaGUgc3RhcnQgYnl0ZSB2YWx1ZSBmb3IgdGhlIG5leHQgc2xpY2VcclxuICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAvLyBUaGUgQmxvYiB3ZSdyZSBzbGljaW5nIFxyXG4gICBwcml2YXRlIGJsb2I6IEJsb2I7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gYmUgc2xpY2VkXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoYmxvYjogQmxvYikge1xyXG4gICAgICB0aGlzLmJsb2IgPSBibG9iO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbmV4dCBzbGljZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBzbGljZWQgQmxvYi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZXh0KGxlbjogbnVtYmVyKTogQmxvYiB7XHJcbiAgICAgIGNvbnN0IGIgPSB0aGlzLmJsb2Iuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5zdGFydCArIGxlbik7XHJcbiAgICAgIHRoaXMuc3RhcnQgKz0gbGVuO1xyXG4gICAgICByZXR1cm4gYjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNsaWNlcyB0aGUgQmxvYiBhbmQgcmV0dXJucyBpdCBhcyBhbiBBcnJheUJ1ZmZlci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEFuIEFycmF5QnVmZmVyIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbmV4dEFycmF5QnVmZmVyKGxlbjogbnVtYmVyKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXh0KGxlbikuYXJyYXlCdWZmZXIoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNsaWNlcyB0aGUgQmxvYiBhbmQgcmV0dXJucyBpdCBhcyBhbiBJbnQzMkFycmF5XHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEFuIEludDMyQXJyYXkgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhc3luYyBuZXh0SW50MzJBcnJheShsZW46IG51bWJlcik6IFByb21pc2U8SW50MzJBcnJheT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEludDMyQXJyYXkoYXdhaXQgdGhpcy5uZXh0QXJyYXlCdWZmZXIobGVuKSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYSBzdHJpbmdcclxuICAgICpcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhc3luYyBuZXh0U3RyaW5nKGxlbjogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV4dChsZW4pLnRleHQoKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBjcmVhdGlvbiBhbmQgZXh0cmFjdGlvbiBvZiBhIHNlbGYgZGVzY3JpYmluZyBCbG9iLiBEYXRhXHJcbiAqIGlzIHN0b3JlZCBhczpcclxuICogXHJcbiAqIFtudW1FbnRyaWVzXSAtIFRoZSBudW1iZXIgZW50cmllcyBpbiB0aGUgZmlsZS4gNCBieXRlIEludDMyXHJcbiAqIFtzaXplc10gLSBTaXplcyBvZiBhbGwgdGhlIGVudHJpZXMsIGluY2x1ZGluZyB0aGUgaW5mbyBvYmplY3RcclxuICogW2luZm9dIC0gVXNlciBzdXBwbGllZCBkYXRhIGFzIGEgSlNPTiBzdHJpbmdcclxuICogW2VudHJ5IDFdIC0gRmlyc3QgdXNlciBlbnRyeVxyXG4gKiBbZW50cnkgMl0gLSBTZWNvbmQgdXNlciBlbnRyeVxyXG4gKiBbLi4uXVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2JGaWxlIHtcclxuICAgcHVibGljIGluZm86IGFueTtcclxuICAgcHVibGljIHBhcnRzOiBCbG9iW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gaGVhZGVyIHRvIGJlIHN0b3JlZCB3aXRoIHRoZSBCbG9iXHJcbiAgICAqIEBwYXJhbSBwYXJ0cyBUaGUgZGF0YSBjb250ZW50cyBvZiB0aGUgQmxvYlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihpbmZvOiBvYmplY3QsIHBhcnRzOiBCbG9iW10pIHtcclxuICAgICAgdGhpcy5pbmZvID0gaW5mbztcclxuICAgICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSByYXcgQmxvYiBvYmplY3QgaW50byBhIEJsb2JGaWxlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYmxvYiBUaGUgQmxvYiB0byBwcm9jZXNzLlxyXG4gICAgKiBAcmV0dXJuIEEgQmxvYkZpbGUgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZXh0cmFjdChibG9iOiBCbG9iKTogUHJvbWlzZTxCbG9iRmlsZT4ge1xyXG5cclxuICAgICAgY29uc3QgYmxvYlNsaWNlciA9IG5ldyBCbG9iU2xpY2VyKGJsb2IpO1xyXG5cclxuICAgICAgLy8gZmlyc3QgZXh0cmFjdCB0aGUgbnVtYmVyIG9mIGVudHJpZXNcclxuICAgICAgY29uc3QgbnVtRW50cmllcyA9IChhd2FpdCBibG9iU2xpY2VyLm5leHRJbnQzMkFycmF5KDQpKVswXTtcclxuXHJcbiAgICAgIC8vIHRoZSB0aGUgc2l6ZXMgYXJyYXlcclxuICAgICAgY29uc3Qgc2l6ZXMgPSBhd2FpdCBibG9iU2xpY2VyLm5leHRJbnQzMkFycmF5KDQgKiAobnVtRW50cmllcyArIDEpKTtcclxuXHJcbiAgICAgIC8vIHRoZW4gdGhlIGluZm8gb2JqZWN0XHJcbiAgICAgIGNvbnN0IGpzb25JbmZvID0gYXdhaXQgYmxvYlNsaWNlci5uZXh0U3RyaW5nKHNpemVzWzBdKTtcclxuXHJcbiAgICAgIC8vIHRoZW4gYWxsIHRoZSBzdWIgYmxvYnNcclxuICAgICAgY29uc3QgcGFydHM6IEJsb2JbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUVudHJpZXM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCBzaXplID0gc2l6ZXNbaSArIDFdO1xyXG4gICAgICAgICBwYXJ0cy5wdXNoKGJsb2JTbGljZXIubmV4dChzaXplKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgQmxvYkZpbGUoSlNPTi5wYXJzZShqc29uSW5mbyksIHBhcnRzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIEJsb2JGaWxlIEJsb2JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiBoZWFkZXIgdG8gYmUgc3RvcmVkIHdpdGggdGhlIEJsb2JcclxuICAgICogQHBhcmFtIHBhcnRzIFRoZSBkYXRhIGNvbnRlbnRzIG9mIHRoZSBCbG9iXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJsb2IoaW5mbzogb2JqZWN0LCBwYXJ0czogQmxvYlBhcnRbXSk6IEJsb2Ige1xyXG5cclxuICAgICAgY29uc3QganNvbkluZm8gPSBKU09OLnN0cmluZ2lmeShpbmZvKTtcclxuXHJcbiAgICAgIC8vIEJ1aWxkIHRoZSBhcnJheSBvZiBzaXplc1xyXG4gICAgICBjb25zdCBzaXplczogbnVtYmVyW10gPSBbanNvbkluZm8ubGVuZ3RoXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XHJcbiAgICAgICAgIGlmIChwYXJ0IGluc3RhbmNlb2YgSW50MzJBcnJheSkge1xyXG4gICAgICAgICAgICBzaXplcy5wdXNoKDQgKiBwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAocGFydCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xyXG4gICAgICAgICAgICBzaXplcy5wdXNoKDQgKiBwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAocGFydCBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICBzaXplcy5wdXNoKHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gJ1Vuc3VwcG9ydGVkIEJsb2IgUGFydCBUeXBlOiAnICsgdHlwZW9mIHBhcnQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXNzZW1ibGUgdGhlIGJsb2IgcGFydHNcclxuICAgICAgY29uc3QgYWxsUGFydHM6IEJsb2JQYXJ0W10gPSBbXTtcclxuICAgICAgYWxsUGFydHMucHVzaChuZXcgSW50MzJBcnJheShbcGFydHMubGVuZ3RoXSkpO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKG5ldyBJbnQzMkFycmF5KHNpemVzKSk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2goanNvbkluZm8pO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKC4uLnBhcnRzKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgYmxvYlxyXG4gICAgICByZXR1cm4gbmV3IEJsb2IoYWxsUGFydHMpO1xyXG4gICB9XHJcbn0iLCIvLyBuZWVkZWQgZm9yIFNhZmFyaVxyXG5pZiAoIUJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyKSB7XHJcbiAgIEJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuXHJcbiAgICAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RhcnQgdGhlIHJlYWRcclxuICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcblxyXG4vLyBuZWVkZWQgZm9yIFNhZmFyaVxyXG5pZiAoIUJsb2IucHJvdG90eXBlLnRleHQpIHtcclxuXHJcbiAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgIEJsb2IucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiAoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkZWNvZGUgaW50byBhIHN0cmluZ1xyXG4gICAgICAgICAgICBjb25zdCB0eHQgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykuZGVjb2RlKHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHR4dCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RhcnQgdGhlIHJlYWRcclxuICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcbiIsIlxyXG5leHBvcnQgdHlwZSBTdGF0dXNGdW5jdGlvbiA9IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuZXhwb3J0IGxldCBlbnYgPSB7XHJcbiAgIGlzVGVzdGluZzogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VVcmwoKTogc3RyaW5nIHtcclxuICAgbGV0IHVybCA9IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICBpZiAodXJsLmVuZHNXaXRoKCdpbmRleC5odG1sJykpIHtcclxuICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwubGVuZ3RoIC0gMTApO1xyXG4gICB9XHJcbiAgIGlmICh1cmwuZW5kc1dpdGgoJy8nKSA9PT0gZmFsc2UpIHtcclxuICAgICAgdXJsICs9ICcvJztcclxuICAgfVxyXG4gICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVN0cigpOiBzdHJpbmcge1xyXG5cclxuICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgbGV0IGhvdXJzID0gZC5nZXRIb3VycygpO1xyXG4gICBsZXQgaG91cnNTdHIgPSAnJztcclxuICAgaWYgKGhvdXJzID09PSAwKSB7XHJcbiAgICAgIGhvdXJzU3RyID0gJzEyJztcclxuICAgfVxyXG4gICBlbHNlIGlmIChob3VycyA+IDEyKSB7XHJcbiAgICAgIGhvdXJzU3RyID0gKGhvdXJzIC0gMTIpLnRvU3RyaW5nKCk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIGhvdXJzU3RyID0gaG91cnMudG9TdHJpbmcoKTtcclxuICAgfVxyXG5cclxuICAgbGV0IG1pbnMgPSBkLmdldE1pbnV0ZXMoKTtcclxuICAgbGV0IG1pbnNTdHIgPSAnJztcclxuICAgaWYgKG1pbnMgPCAxMCkge1xyXG4gICAgICBtaW5zU3RyID0gJzAnICsgbWlucztcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgbWluc1N0ciA9IG1pbnMudG9TdHJpbmcoKTtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIGhvdXJzU3RyICsgJzonICsgbWluc1N0ciArICcgJyArIChob3VycyA+IDEyID8gJ1BNJyA6ICdBTScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW1QaXhlbHMoKTogbnVtYmVyIHtcclxuICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcclxuICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHN0eWxlLmZvbnRTaXplLnN1YnN0cigwLCBzdHlsZS5mb250U2l6ZS5sZW5ndGggLSAyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBweFRvTnVtYmVyKHB4VmFsdWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgIGlmIChweFZhbHVlLmVuZHNXaXRoKCdweCcpKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChweFZhbHVlLnN1YnN0cigwLCBweFZhbHVlLmxlbmd0aCAtIDIpKTtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIE51bWJlci5OYU47XHJcbiAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICBpZiAodmFsdWUgPCBtaW4pIHtcclxuICAgICAgcmV0dXJuIG1pbjtcclxuICAgfVxyXG4gICBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICByZXR1cm4gbWF4O1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVnKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuICgxODAgLyBNYXRoLlBJKSAqIHJhZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgcmV0dXJuIChNYXRoLlBJIC8gMTgwKSAqIGRlZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1peCh2MTogbnVtYmVyLCB2MjogbnVtYmVyLCBtaXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiB2MSArIGNsYW1wKG1peCwgMCwgMSkgKiAodjIgLSB2MSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0NzcyhyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgcmV0dXJuICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArIChhID09PSB1bmRlZmluZWQgPyAnJyA6ICcsJyArIGEpICsgJyknO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9TaXplU3RyKHZhbDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgaWYgKHZhbCA8IDEwMjQpIHtcclxuICAgICAgcmV0dXJuIHZhbCArICcgYnl0ZXMnO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHZhbCA8IDEwMjQgKiAxMDI0KSB7XHJcbiAgICAgIHJldHVybiAodmFsIC8gMTAyNCkudG9GaXhlZCgxKSArICcga2InO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gKHZhbCAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMSkgKyAnIG1iJztcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9vbGVhblZhbHVlKHZhbHVlOiBib29sZWFuIHwgKCgpID0+IGJvb2xlYW4pIHwgdW5kZWZpbmVkIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gdmFsdWUoKTtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpT1MoKTogYm9vbGVhbiB7XHJcbiAgIHJldHVybiBbXHJcbiAgICAgICdpUGFkIFNpbXVsYXRvcicsXHJcbiAgICAgICdpUGhvbmUgU2ltdWxhdG9yJyxcclxuICAgICAgJ2lQb2QgU2ltdWxhdG9yJyxcclxuICAgICAgJ2lQYWQnLFxyXG4gICAgICAnaVBob25lJyxcclxuICAgICAgJ2lQb2QnXHJcbiAgIF0uaW5jbHVkZXMobmF2aWdhdG9yLnBsYXRmb3JtKVxyXG4gICAgICAvLyBpUGFkIG9uIGlPUyAxMyBkZXRlY3Rpb25cclxuICAgICAgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ01hYycpICYmICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudClcclxufSIsImltcG9ydCB7IFN0b3B3YXRjaCB9IGZyb20gJy4vU3RvcHdhdGNoJztcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBsb2dnaW5nIHRpbWluZyBtZXNzYWdlcyBmb3IgcHJvZmlsZSBjb2RlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJvZmlsZXIge1xyXG5cclxuICAgcHJpdmF0ZSBzdyA9IG5ldyBTdG9wd2F0Y2goKTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxhcHNlZCB0aW1lIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBlbGFwc2VkTXMoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3cuZWxhcHNlZE1zO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUHJpbnRzIGEgbWVzc2FnZSB0byBjb25zb2xlIG9mIHRoZSBlbGFwc2VkIHRpbWVcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gcHJpbnQgd2l0aCB0aGUgdGltZVxyXG4gICAgKi9cclxuICAgcHVibGljIGxvZyhtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cgKyAnICcgKyB0aGlzLmVsYXBzZWRNcy50b0ZpeGVkKDEpICsgJyBtcycpO1xyXG4gICAgICB0aGlzLnN3LnJlc3RhcnQoKTtcclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIHRyYWNraW5nIHRpbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdG9wd2F0Y2gge1xyXG5cclxuICAgcHJpdmF0ZSBhY2N1bXVsYXRlZE1zID0gMDtcclxuICAgcHJpdmF0ZSBzdGFydFRpbWUgPSBOYU47XHJcbiAgIHByaXZhdGUgX3BhdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgcHVibGljIGdldCBwYXVzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgcnVubmluZygpOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuICF0aGlzLnBhdXNlZDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBlbGFwc2VkIHRpbWUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpOiBudW1iZXIge1xyXG4gICAgICBpZiAoaXNOYU4odGhpcy5zdGFydFRpbWUpKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmFjY3VtdWxhdGVkTXM7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmFjY3VtdWxhdGVkTXMgKyAodGhpcy5nZXRUaW1lTXMoKSAtIHRoaXMuc3RhcnRUaW1lKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc2V0IGVsYXBzZWRNcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuYWNjdW11bGF0ZWRNcyA9IHZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5nZXRUaW1lTXMoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsYXBzZWQgdGltZSBpbiBtaWxsaXNlY29uZHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZWxhcHNlZFMoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZE1zIC8gMTAwMDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRUaW1lTXMoKTogbnVtYmVyIHtcclxuICAgICAgLy8gd2luZG93LnBlcmZvcm1hbmNlIGlzIG5vdCBkZWZpbmVkIGZvciBub2RlanMgc28gb3VyIHRlc3QgbmVlZFxyXG4gICAgICAvLyB0aGlzIHRvIGNvbXBpbGVcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2UgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHN0YXJ0ID0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnJlc2V0KHN0YXJ0KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlc2V0KHN0YXJ0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuYWNjdW11bGF0ZWRNcyA9IDA7XHJcbiAgICAgIGlmIChzdGFydCkge1xyXG4gICAgICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLmdldFRpbWVNcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IE5hTjtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5yZXNldCh0cnVlKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLl9wYXVzZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMuYWNjdW11bGF0ZWRNcyA9IHRoaXMuZWxhcHNlZE1zO1xyXG4gICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IE5hTjtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLl9wYXVzZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5nZXRUaW1lTXMoKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWMzLCBJVmVjMywgVmVjNCB9IGZyb20gJy4vVmVjJztcclxuaW1wb3J0IHsgTWF0NCB9IGZyb20gJy4vTWF0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1pbk1heCB7XHJcbiAgIHJlYWRvbmx5IG1pbjogbnVtYmVyO1xyXG4gICByZWFkb25seSBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvdW5kaW5nQm94IHtcclxuICAgcHVibGljIG1pbjogVmVjMztcclxuICAgcHVibGljIG1heDogVmVjMztcclxuXHJcbiAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueSAtIHRoaXMubWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRpYWdvbmFsKCk6IG51bWJlciB7XHJcbiAgICAgIGNvbnN0IHcgPSB0aGlzLndpZHRoO1xyXG4gICAgICBjb25zdCBoID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGQgPSB0aGlzLmRlcHRoO1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHcgKiB3ICsgaCAqIGggKyBkICogZCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgY2VudGVyKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICAodGhpcy5taW4ueCArIHRoaXMubWF4LngpIC8gMixcclxuICAgICAgICAgKHRoaXMubWluLnkgKyB0aGlzLm1heC55KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLm1pbi56ICsgdGhpcy5tYXgueikgLyAyLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjb3JuZXJzKCk6IFZlYzNbXSB7XHJcbiAgICAgIGNvbnN0IGNvcm5lcnM6IFZlYzNbXSA9IFtdO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWluLngsIHRoaXMubWluLnksIHRoaXMubWluLnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5taW4ueCwgdGhpcy5taW4ueSwgdGhpcy5tYXguel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1heC55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWluLngsIHRoaXMubWF4LnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5tYXgueCwgdGhpcy5taW4ueSwgdGhpcy5taW4uel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1heC54LCB0aGlzLm1pbi55LCB0aGlzLm1heC56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWluLnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5tYXgueCwgdGhpcy5tYXgueSwgdGhpcy5tYXguel0pKTtcclxuICAgICAgcmV0dXJuIGNvcm5lcnM7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtaW46IFZlYzMgPSBuZXcgVmVjMyhbTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRV0pLFxyXG4gICAgICBtYXg6IFZlYzMgPSBuZXcgVmVjMyhbLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRV0pKSB7XHJcbiAgICAgIHRoaXMubWluID0gbWluO1xyXG4gICAgICB0aGlzLm1heCA9IG1heDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgaW5maW5pdGUoKTogQm91bmRpbmdCb3gge1xyXG4gICAgICBjb25zdCBNQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgIGNvbnN0IE1JTiA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuICAgICAgcmV0dXJuIG5ldyBCb3VuZGluZ0JveChuZXcgVmVjMyhbTUlOLCBNSU4sIE1JTl0pLCBuZXcgVmVjMyhbTUFYLCBNQVgsIE1BWF0pKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGluc2lkZSh2ZWM6IElWZWMzKTogYm9vbGVhbiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAgdmVjLnggPj0gdGhpcy5taW4ueCAmJiB2ZWMueCA8PSB0aGlzLm1heC54ICYmXHJcbiAgICAgICAgIHZlYy55ID49IHRoaXMubWluLnkgJiYgdmVjLnkgPD0gdGhpcy5tYXgueSAmJlxyXG4gICAgICAgICB2ZWMueiA+PSB0aGlzLm1pbi56ICYmIHZlYy56IDw9IHRoaXMubWF4LnpcclxuICAgICAgKSB7XHJcbiAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHM6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnWycgKyB0aGlzLm1pbi50b1N0cmluZyhkaWdpdHMpICsgJ10nICtcclxuICAgICAgICAgJ1snICsgdGhpcy5tYXgudG9TdHJpbmcoZGlnaXRzKSArICddJztcclxuICAgfVxyXG5cclxuICAgcHVibGljIHVwZGF0ZSh2OiBJVmVjMyk6IHZvaWQge1xyXG4gICAgICBpZiAoaXNOYU4odi54KSB8fCBpc05hTih2LnkpIHx8IGlzTmFOKHYueikpIHtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5hTicpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5taW4ueCA9IE1hdGgubWluKHRoaXMubWluLngsIHYueCk7XHJcbiAgICAgIHRoaXMubWluLnkgPSBNYXRoLm1pbih0aGlzLm1pbi55LCB2LnkpO1xyXG4gICAgICB0aGlzLm1pbi56ID0gTWF0aC5taW4odGhpcy5taW4ueiwgdi56KTtcclxuICAgICAgdGhpcy5tYXgueCA9IE1hdGgubWF4KHRoaXMubWF4LngsIHYueCk7XHJcbiAgICAgIHRoaXMubWF4LnkgPSBNYXRoLm1heCh0aGlzLm1heC55LCB2LnkpO1xyXG4gICAgICB0aGlzLm1heC56ID0gTWF0aC5tYXgodGhpcy5tYXgueiwgdi56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG1lcmdlKG90aGVyOiBCb3VuZGluZ0JveCk6IHZvaWQge1xyXG4gICAgICB0aGlzLm1pbi54ID0gTWF0aC5taW4odGhpcy5taW4ueCwgb3RoZXIubWluLngpO1xyXG4gICAgICB0aGlzLm1pbi55ID0gTWF0aC5taW4odGhpcy5taW4ueSwgb3RoZXIubWluLnkpO1xyXG4gICAgICB0aGlzLm1pbi56ID0gTWF0aC5taW4odGhpcy5taW4ueiwgb3RoZXIubWluLnopO1xyXG4gICAgICB0aGlzLm1heC54ID0gTWF0aC5tYXgodGhpcy5tYXgueCwgb3RoZXIubWF4LngpO1xyXG4gICAgICB0aGlzLm1heC55ID0gTWF0aC5tYXgodGhpcy5tYXgueSwgb3RoZXIubWF4LnkpO1xyXG4gICAgICB0aGlzLm1heC56ID0gTWF0aC5tYXgodGhpcy5tYXgueiwgb3RoZXIubWF4LnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbXVsdE0obWF0OiBNYXQ0KTogQm91bmRpbmdCb3gge1xyXG4gICAgICBjb25zdCByZXQgPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgY29uc3QgdjEgPSBtYXQubXVsdFYobmV3IFZlYzQoW3RoaXMubWluLngsIHRoaXMubWluLnksIHRoaXMubWluLnosIDFdKSk7XHJcbiAgICAgIGNvbnN0IHYyID0gbWF0Lm11bHRWKG5ldyBWZWM0KFt0aGlzLm1heC54LCB0aGlzLm1heC55LCB0aGlzLm1heC56LCAxXSkpO1xyXG4gICAgICByZXQubWluLnggPSBNYXRoLm1pbih2MS54LCB2Mi54KTtcclxuICAgICAgcmV0Lm1pbi55ID0gTWF0aC5taW4odjEueSwgdjIueSk7XHJcbiAgICAgIHJldC5taW4ueiA9IE1hdGgubWluKHYxLnosIHYyLnopO1xyXG4gICAgICByZXQubWF4LnggPSBNYXRoLm1heCh2MS54LCB2Mi54KTtcclxuICAgICAgcmV0Lm1heC55ID0gTWF0aC5tYXgodjEueSwgdjIueSk7XHJcbiAgICAgIHJldC5tYXgueiA9IE1hdGgubWF4KHYxLnosIHYyLnopO1xyXG5cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjMyB9IGZyb20gJy4vVmVjJztcclxuaW1wb3J0IHsgSU1pbk1heCB9IGZyb20gJy4vQm91bmRpbmdCb3gnO1xyXG5pbXBvcnQgeyBQbGFuZSB9IGZyb20gJy4uL0FwcHMvVmlld2VyL1BsYW5lJztcclxuXHJcbi8qKlxyXG4gKiBBIHNldCBvZiBwb2ludHMgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kaW5nIGVkZ2VzIG9mIGFuIG9iamVjdC4gQWxsIHBvaW50cyBhcmVcclxuICogZW5jbG9zZWQgaW4gdGhlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJvdW5kaW5nUHRzIHtcclxuICAgcHJpdmF0ZSBwdHM6IFZlYzNbXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdHM6IFZlYzNbXSkge1xyXG4gICAgICB0aGlzLnB0cyA9IHB0cztcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldChpOiBudW1iZXIpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHRzW2ldO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGlzdFRvUG9pbnQocHQ6IFZlYzMpOiBJTWluTWF4IHtcclxuICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgICAgIG1heDogLU51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHRzLmZvckVhY2goKHB0MjogVmVjMykgPT4ge1xyXG4gICAgICAgICBjb25zdCB4ID0gcHQyLnggLSBwdC54O1xyXG4gICAgICAgICBjb25zdCB5ID0gcHQyLnkgLSBwdC55O1xyXG4gICAgICAgICBjb25zdCB6ID0gcHQyLnogLSBwdC56O1xyXG4gICAgICAgICBjb25zdCBkID0geCAqIHggKyB5ICogeSArIHogKiB6O1xyXG4gICAgICAgICByZXQubWluID0gTWF0aC5taW4oZCwgcmV0Lm1pbik7XHJcbiAgICAgICAgIHJldC5tYXggPSBNYXRoLm1heChkLCByZXQubWF4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBkb24ndCBib3RoZXIgZ2V0dGluZyB0aGUgc3F1YXJlIHJvb3Qgb2YgZXZlcnkgY2FsY3VsYXRpb24sIGp1c3QgdGhlIG1pbiBhbmQgbWF4XHJcbiAgICAgIHJldC5taW4gPSBNYXRoLnNxcnQocmV0Lm1pbik7XHJcbiAgICAgIHJldC5tYXggPSBNYXRoLnNxcnQocmV0Lm1heCk7XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGlzdFRvUGxhbmUocGxhbmU6IFBsYW5lKTogSU1pbk1heCB7XHJcbiAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgbWluOiBOdW1iZXIuTUFYX1ZBTFVFLFxyXG4gICAgICAgICBtYXg6IC1OdW1iZXIuTUFYX1ZBTFVFLFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnB0cy5mb3JFYWNoKChwdDogVmVjMykgPT4ge1xyXG4gICAgICAgICBjb25zdCBkID0gcGxhbmUuZGlzdFRvUHQocHQpO1xyXG4gICAgICAgICByZXQubWluID0gTWF0aC5taW4oZCwgcmV0Lm1pbik7XHJcbiAgICAgICAgIHJldC5tYXggPSBNYXRoLm1heChkLCByZXQubWF4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBJbmRleGVkVmVjMyB9IGZyb20gJy4vSW5kZXhlZFZlYzMnO1xyXG5pbXBvcnQgeyBWZWMzIH0gZnJvbSAnLi9WZWMnO1xyXG5cclxuLyoqXHJcbiAqIE1pbmltYWxpc3Qgd3JhcHBlciBhcm91bmQgYSBXZWJHTCB0cmlhbmdsZSBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5kZXhlZFRyaWFuZ2xlIHtcclxuICAgcHVibGljIHYxOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIHYyOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIHYzOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIG4xOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIG4yOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIG4zOiBJbmRleGVkVmVjMztcclxuICAgcHVibGljIGkxOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpMjogbnVtYmVyO1xyXG4gICBwdWJsaWMgaTM6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICB2ZXJ0aWNlczogbnVtYmVyW10sXHJcbiAgICAgIG5vcm1hbHM6IG51bWJlcltdLFxyXG4gICAgICBpMTogbnVtYmVyLFxyXG4gICAgICBpMjogbnVtYmVyLFxyXG4gICAgICBpMzogbnVtYmVyLFxyXG4gICApIHtcclxuICAgICAgdGhpcy52MSA9IG5ldyBJbmRleGVkVmVjMyh2ZXJ0aWNlcywgaTEpO1xyXG4gICAgICB0aGlzLnYyID0gbmV3IEluZGV4ZWRWZWMzKHZlcnRpY2VzLCBpMik7XHJcbiAgICAgIHRoaXMudjMgPSBuZXcgSW5kZXhlZFZlYzModmVydGljZXMsIGkzKTtcclxuICAgICAgdGhpcy5uMSA9IG5ldyBJbmRleGVkVmVjMyhub3JtYWxzLCBpMSk7XHJcbiAgICAgIHRoaXMubjIgPSBuZXcgSW5kZXhlZFZlYzMobm9ybWFscywgaTIpO1xyXG4gICAgICB0aGlzLm4zID0gbmV3IEluZGV4ZWRWZWMzKG5vcm1hbHMsIGkzKTtcclxuICAgICAgdGhpcy5pMSA9IGkxO1xyXG4gICAgICB0aGlzLmkyID0gaTI7XHJcbiAgICAgIHRoaXMuaTMgPSBpMztcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjEueCwgdGhpcy52Mi54LCB0aGlzLnYzLngpO1xyXG4gICB9XHJcbiAgIGdldCBtaW5ZKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYxLnksIHRoaXMudjIueSwgdGhpcy52My55KTtcclxuICAgfVxyXG4gICBnZXQgbWluWigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MS56LCB0aGlzLnYyLnosIHRoaXMudjMueik7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtYXhYKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYxLngsIHRoaXMudjIueCwgdGhpcy52My54KTtcclxuICAgfVxyXG4gICBnZXQgbWF4WSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MS55LCB0aGlzLnYyLnksIHRoaXMudjMueSk7XHJcbiAgIH1cclxuICAgZ2V0IG1heFooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjEueiwgdGhpcy52Mi56LCB0aGlzLnYzLnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbCgpOiBWZWMzIHtcclxuICAgICAgY29uc3QgdjEgPSB0aGlzLnYxLnRvVmVjMygpO1xyXG4gICAgICBjb25zdCB2MiA9IHRoaXMudjIudG9WZWMzKCk7XHJcbiAgICAgIGNvbnN0IHYzID0gdGhpcy52My50b1ZlYzMoKTtcclxuXHJcbiAgICAgIGNvbnN0IGEgPSB2Mi5zdWJ0cmFjdCh2MSk7XHJcbiAgICAgIGNvbnN0IGIgPSB2My5zdWJ0cmFjdCh2Mik7XHJcbiAgICAgIHJldHVybiBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZlYzMsIFZlYzMgfSBmcm9tICcuL1ZlYyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXhlZFZlYzMgaW1wbGVtZW50cyBJVmVjMyB7XHJcblxyXG4gICBwcml2YXRlIHZhbHVlczogbnVtYmVyW107XHJcbiAgIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHZhbHVlczogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDBdO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDBdID0gdmFsO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAxXTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAxXSA9IHZhbDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMl07XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b1ZlYzMoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbdGhpcy54LCB0aGlzLnksIHRoaXMuel0pO1xyXG4gICB9XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50ICovXHJcbmltcG9ydCB7IFZlYzMsIElWZWMzIH0gZnJvbSAnLi9WZWMnO1xyXG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJy4vQm91bmRpbmdCb3gnO1xyXG5pbXBvcnQgeyBCb3VuZGluZ1B0cyB9IGZyb20gJy4vQm91bmRpbmdQdHMnO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tICcuL0luZGV4ZWRUcmlhbmdsZSc7XHJcbmltcG9ydCB7IEluZGV4ZWRWZWMzIH0gZnJvbSAnLi9JbmRleGVkVmVjMyc7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vVXRpbC9HbG9iYWxzJztcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tICcuLi9VdGlsL1Byb2ZpbGVyJztcclxuaW1wb3J0IHsgQmxvYkZpbGUgfSBmcm9tICcuLi9VdGlsL0Jsb2JGaWxlJztcclxuXHJcbmV4cG9ydCBlbnVtIE5vcm1hbFR5cGUge1xyXG4gICBTbW9vdGgsXHJcbiAgIEZsYXRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVHJpYW5nbGVPYmpEYXRhIHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICBzb3VyY2U6IHN0cmluZztcclxuICAgdmVydGljZXM6IEZsb2F0MzJBcnJheTtcclxuICAgbm9ybWFsczogRmxvYXQzMkFycmF5O1xyXG4gICBpbmRpY2VzOiBJbnQzMkFycmF5O1xyXG4gICBib3hNaW46IFZlYzM7XHJcbiAgIGJveE1heDogVmVjMztcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZnJvbSBhIGJ1bmNoIG9mIHRyaWFuZ2xlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iaiB7XHJcbiAgIHB1YmxpYyB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgcHVibGljIG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgIHB1YmxpYyBpbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwdWJsaWMgYm94ID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgcHJpdmF0ZSBib3VuZGluZ1B0czogQm91bmRpbmdQdHM7XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVZlcnRpY2VzKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmxlbmd0aCAvIDM7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgbnVtVHJpYW5nbGVzKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmluZGljZXMubGVuZ3RoIC8gMztcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3gud2lkdGg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveC5oZWlnaHQ7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmRlcHRoO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRpYWdvbmFsKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveC5kaWFnb25hbDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjZW50ZXIoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveC5jZW50ZXI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXRUcmlhbmdsZShpbmRleDogbnVtYmVyKTogSW5kZXhlZFRyaWFuZ2xlIHtcclxuICAgICAgY29uc3QgaTEgPSB0aGlzLmluZGljZXNbMyAqIGluZGV4ICsgMF07XHJcbiAgICAgIGNvbnN0IGkyID0gdGhpcy5pbmRpY2VzWzMgKiBpbmRleCArIDFdO1xyXG4gICAgICBjb25zdCBpMyA9IHRoaXMuaW5kaWNlc1szICogaW5kZXggKyAyXTtcclxuICAgICAgcmV0dXJuIG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgdGhpcy5ub3JtYWxzLCBpMSwgaTIsIGkzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHB1c2hRdWFkKHYxOiBJVmVjMywgdjI6IElWZWMzLCB2MzogSVZlYzMsIHY0OiBJVmVjMyk6IHZvaWQge1xyXG5cclxuICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjEsIHYyLCB2Myk7XHJcbiAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHYyLCB2NCwgdjMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcHVzaFRyaWFuZ2xlKHYxOiBJVmVjMywgdjI6IElWZWMzLCB2MzogSVZlYzMpOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIGFkZCBpbmRpY2VzXHJcbiAgICAgIGNvbnN0IGkxID0gdGhpcy5udW1WZXJ0aWNlcztcclxuICAgICAgY29uc3QgaTIgPSBpMSArIDE7XHJcbiAgICAgIGNvbnN0IGkzID0gaTEgKyAyO1xyXG4gICAgICB0aGlzLmluZGljZXMucHVzaChpMSwgaTIsIGkzKTtcclxuXHJcbiAgICAgIC8vIGFkZCB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnB1c2godjEueCwgdjEueSwgdjEueiwgdjIueCwgdjIueSwgdjIueiwgdjMueCwgdjMueSwgdjMueik7XHJcbiAgICAgIHRoaXMuYm94LnVwZGF0ZSh2MSk7XHJcbiAgICAgIHRoaXMuYm94LnVwZGF0ZSh2Mik7XHJcbiAgICAgIHRoaXMuYm94LnVwZGF0ZSh2Myk7XHJcblxyXG4gICAgICAvLyBhZGQgbm9ybWFsc1xyXG4gICAgICBjb25zdCB0cmkgPSBuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHRoaXMubm9ybWFscywgaTEsIGkyLCBpMyk7XHJcbiAgICAgIGNvbnN0IG5vcm1hbCA9IHRyaS5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm5vcm1hbC52YWx1ZXMpO1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5ub3JtYWwudmFsdWVzKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubm9ybWFsLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlTm9ybWFscyh0eXBlOiBOb3JtYWxUeXBlKTogdm9pZCB7XHJcblxyXG4gICAgICBpZiAodHlwZSA9PT0gTm9ybWFsVHlwZS5TbW9vdGgpIHtcclxuICAgICAgICAgY29uc3QgbXVsdGlOb3JtVmVydGljZXM6IE11bHRpTm9ybVZlcnRleFtdID0gW107XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzLnB1c2gobmV3IE11bHRpTm9ybVZlcnRleCgpKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RvcmUgdGhlIG5vcm1hbHMgd2l0aCBlYWNoIHZlcnRleCAtIHdlJ2xsIGxhdGVyIGF2ZXJhZ2UgdGhlc2VcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaSA9IHRoaXMuZ2V0VHJpYW5nbGUoaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaTFdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pMl0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmkzXS5wdXNoKG4pO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgbm9ybWFscyBhcnJheVxyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0aU5vcm1WZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5tdWx0aU5vcm1WZXJ0aWNlc1tpXS5ub3JtYWwudmFsdWVzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyB0byBnbyB0aGlzIHdheSB3ZSBuZWVkIHRvIGhhdmUgYSB1bmlxdWUgdmVjdG9yIGFuZCBub3JtYWwgZm9yIGVhY2ggdHJpYW5nbGVcclxuICAgICAgICAgLy8gY29ybmVyLiBCbG93IGF3YXkgdGhlIG9sZCBzdHVmZiBhbmQgcmVidWlsZFxyXG4gICAgICAgICBjb25zdCBvbGRJbmRpY2VzID0gdGhpcy5pbmRpY2VzO1xyXG4gICAgICAgICBjb25zdCBvbGRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XHJcblxyXG4gICAgICAgICAvLyByZXNldCBldmVyeXRoaW5nXHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xyXG5cclxuICAgICAgICAgLy8gcmVidWlsZFxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEluZGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHYxID0gbmV3IEluZGV4ZWRWZWMzKG9sZFZlcnRpY2VzLCBvbGRJbmRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICBjb25zdCB2MiA9IG5ldyBJbmRleGVkVmVjMyhvbGRWZXJ0aWNlcywgb2xkSW5kaWNlc1szICogaSArIDFdKTtcclxuICAgICAgICAgICAgY29uc3QgdjMgPSBuZXcgSW5kZXhlZFZlYzMob2xkVmVydGljZXMsIG9sZEluZGljZXNbMyAqIGkgKyAyXSk7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHYxLCB2MiwgdjMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB4KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF07XHJcbiAgIH1cclxuICAgcHJpdmF0ZSB5KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMV07XHJcbiAgIH1cclxuICAgcHJpdmF0ZSB6KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl07XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBmaW5kQm91bmRzKCk6IHZvaWQge1xyXG4gICAgICBjb25zb2xlLmxvZygnZmluZGluZyBib3VuZHMnKTtcclxuICAgICAgY29uc3QgYm94ID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgdHJpID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgYm94LnVwZGF0ZSh0cmkudjEpO1xyXG4gICAgICAgICBib3gudXBkYXRlKHRyaS52Mik7XHJcbiAgICAgICAgIGJveC51cGRhdGUodHJpLnYzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib3ggPSBib3g7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCcmVha3MgdGhlIG9iamVjdCBpbnRvIGV2ZW5seSBzcGFjZWQgdm9sdW1lcy4gVGhlIG51bWJlciBvZiB2b2x1bWVzIGlzIGF1dG9tYXRpY2FsbHlcclxuICAgICogZGV0ZXJtaW5lZCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHRyaWFuZ2xlcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXRCb3VuZGluZ1B0cygpOiBCb3VuZGluZ1B0cyB7XHJcblxyXG4gICAgICBpZiAodGhpcy5ib3VuZGluZ1B0cykge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGluZ1B0cztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbnVtU3RlcHMgPSAxNTtcclxuXHJcbiAgICAgIGNvbnN0IGJveGVzOiBCb3VuZGluZ0JveFtdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3cobnVtU3RlcHMsIDMpOyBpKyspIHtcclxuICAgICAgICAgYm94ZXMucHVzaChuZXcgQm91bmRpbmdCb3goKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHYgPSBuZXcgVmVjMygpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICB2LnggPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIHYueSA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAxXTtcclxuICAgICAgICAgdi56ID0gdGhpcy52ZXJ0aWNlc1szICogaSArIDJdO1xyXG4gICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodi54IC0gdGhpcy5ib3gubWluLngpIC8gKHRoaXMuYm94LndpZHRoKSk7XHJcbiAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh2LnkgLSB0aGlzLmJveC5taW4ueSkgLyAodGhpcy5ib3guaGVpZ2h0KSk7XHJcbiAgICAgICAgIGxldCB6ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh2LnogLSB0aGlzLmJveC5taW4ueikgLyAodGhpcy5ib3guZGVwdGgpKTtcclxuICAgICAgICAgeCA9IGNsYW1wKHgsIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHkgPSBjbGFtcCh5LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB6ID0gY2xhbXAoeiwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgY29uc3QgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgIGJveGVzW2luZGV4XS51cGRhdGUodik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGJveE1hcCA9IG5ldyBNYXA8bnVtYmVyLCBCb3VuZGluZ0JveD4oKTtcclxuICAgICAgbGV0IGJveENvdW50ID0gMDtcclxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBudW1TdGVwczsgeCsrKSB7XHJcbiAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbnVtU3RlcHM7IHkrKykge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3Q6IHtcclxuICAgICAgICAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgYm94OiBCb3VuZGluZ0JveCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IGxhc3Q6IHtcclxuICAgICAgICAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgYm94OiBCb3VuZGluZ0JveCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBudW1TdGVwczsgeisrKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geCArIHkgKiBudW1TdGVwcyArIHogKiBudW1TdGVwcyAqIG51bVN0ZXBzO1xyXG4gICAgICAgICAgICAgICBjb25zdCBib3ggPSBib3hlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgIGlmIChib3gubWluLnggPT09IE51bWJlci5NQVhfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgYm94Q291bnQrKztcclxuICAgICAgICAgICAgICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICBmaXJzdCA9IHsgaW5kZXg6IGluZGV4LCBib3g6IGJveCB9O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGxhc3QgPSB7IGluZGV4OiBpbmRleCwgYm94OiBib3ggfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0ICYmIGJveE1hcC5oYXMoZmlyc3QuaW5kZXgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICBib3hNYXAuc2V0KGZpcnN0LmluZGV4LCBmaXJzdC5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsYXN0ICYmIGJveE1hcC5oYXMobGFzdC5pbmRleCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgIGJveE1hcC5zZXQobGFzdC5pbmRleCwgbGFzdC5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcHRzOiBWZWMzW10gPSBbXTtcclxuICAgICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgICAgIGlmIChib3gubWluLnggIT09IE51bWJlci5NQVhfVkFMVUUpIHtcclxuICAgICAgICAgICAgcHRzLnB1c2goLi4uYm94LmNvcm5lcnMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5ib3VuZGluZ1B0cyA9IG5ldyBCb3VuZGluZ1B0cyhwdHMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3VuZGluZ1B0cztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgaW4gdGhlIGZvciAuT0JKIGZpbGUgZm9ybWF0XHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyB0aGUgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9PYmpTdHJpbmcoZGlnaXRzID0gOCk6IHN0cmluZyB7XHJcblxyXG4gICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgIHN0ciArPSAnIyBWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnIyBUcmlhbmdsZXM6ICcgKyB0aGlzLm51bVRyaWFuZ2xlcyArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJ1xcbic7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCB2ID0gdGhpcy52ZXJ0aWNlcztcclxuICAgICAgICAgc3RyICs9ICd2ICcgKyB2WzMgKiBpICsgMF0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHZbMyAqIGkgKyAxXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdlszICogaSArIDJdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCBuID0gdGhpcy5ub3JtYWxzO1xyXG4gICAgICAgICBzdHIgKz0gJ3ZuICcgKyBuWzMgKiBpICsgMF0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG5bMyAqIGkgKyAxXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgblszICogaSArIDJdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgdCA9IHRoaXMuZ2V0VHJpYW5nbGUoaSk7XHJcbiAgICAgICAgIHN0ciArPSAnZiAnICtcclxuICAgICAgICAgICAgKHQuaTEgKyAxKSArICcvLycgKyAodC5pMSArIDEpICsgJyAnICtcclxuICAgICAgICAgICAgKHQuaTIgKyAxKSArICcvLycgKyAodC5pMiArIDEpICsgJyAnICtcclxuICAgICAgICAgICAgKHQuaTMgKyAxKSArICcvLycgKyAodC5pMyArIDEpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvcHRpbWl6ZShub3JtYWxUeXBlOiBOb3JtYWxUeXBlKTogdm9pZCB7XHJcblxyXG4gICAgICBpZiAobm9ybWFsVHlwZSA9PT0gTm9ybWFsVHlwZS5TbW9vdGgpIHtcclxuXHJcbiAgICAgICAgIGNvbnN0IHZlcnRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICAgICBjb25zdCBpbmRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgICAgLy8gZmlyc3QgZ2VuZXJhdGUgYSB1bmlxdWUgc2V0IG9mIHZlcnRpY2VzXHJcbiAgICAgICAgIGNvbnN0IHVuaXF1ZVZlcnRpY2VzOiBJbmRleGVkVmVjM1tdID0gW107XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvbGRWZXJ0ZXggPSBuZXcgSW5kZXhlZFZlYzModGhpcy52ZXJ0aWNlcywgaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAwXS50b0ZpeGVkKDQpICsgJyAnICsgdGhpcy52ZXJ0aWNlc1szICogaSArIDFdLnRvRml4ZWQoNCkgKyAnICcgKyB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl0udG9GaXhlZCg0KTtcclxuICAgICAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBpICsgMTtcclxuICAgICAgICAgICAgbGV0IG5ld0luZGV4O1xyXG4gICAgICAgICAgICBpZiAodmVydGV4VG9JbmRleE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAvLyBqdXN0IG1hcCB0aGUgb2xkIGluZGV4IHRvIHRoZSBleGlzdGluZyBlbnRyeVxyXG4gICAgICAgICAgICAgICBuZXdJbmRleCA9IHZlcnRleFRvSW5kZXhNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBlbnRyeVxyXG4gICAgICAgICAgICAgICBuZXdJbmRleCA9IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgICAgIHZlcnRleFRvSW5kZXhNYXAuc2V0KGtleSwgbmV3SW5kZXgpO1xyXG4gICAgICAgICAgICAgICB1bmlxdWVWZXJ0aWNlcy5wdXNoKG9sZFZlcnRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgICAgIGluZGV4VG9JbmRleE1hcC5zZXQob2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gcmVzZXQgYWxsIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pcXVlVmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHVuaXF1ZVZlcnRpY2VzW2ldLngpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godW5pcXVlVmVydGljZXNbaV0ueSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1bmlxdWVWZXJ0aWNlc1tpXS56KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gcmVtYXAgYWxsIGluZGljZXNcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluZGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmluZGljZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNlc1tpXSA9IGluZGV4VG9JbmRleE1hcC5nZXQob2xkSW5kZXggKyAxKSAtIDE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gbm90aGluZyB0byBkbyBmb3IgZmxhdCBub3JtYWxzLiBOZXcgdmVydGljZXMgYW5kIG5vcm1hbHMgYXJlIGNyZWF0ZWQgaW4gXHJcbiAgICAgICAgIC8vIGNvbXB1dGVOb3JtYWxzKCkgYmVsb3cgaWYgbmVlZGVkXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMobm9ybWFsVHlwZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0cmltKGJveDogQm91bmRpbmdCb3gpOiB2b2lkIHtcclxuICAgICAgY29uc3QgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBjb25zdCBpbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgdHJpID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuXHJcbiAgICAgICAgIGlmIChib3guaW5zaWRlKHRyaS52MSkgJiYgYm94Lmluc2lkZSh0cmkudjIpICYmIGJveC5pbnNpZGUodHJpLnYzKSkge1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpLmkxKTtcclxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaS5pMik7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmkuaTMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3RyaW1tZWQgJyArICh0aGlzLmluZGljZXMubGVuZ3RoIC0gaW5kaWNlcy5sZW5ndGgpICsgJyB0cmlhbmdsZXMnKTtcclxuICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcclxuICAgICAgdGhpcy5maW5kQm91bmRzKCk7XHJcbiAgICAgIHAubG9nKCdUcmltIENvbXBsZXRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBtaXJyb3IoeDogbnVtYmVyLCBhZGQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgY29uc3QgcCA9IG5ldyBQcm9maWxlcigpO1xyXG5cclxuICAgICAgaWYgKGFkZCkge1xyXG4gICAgICAgICAvLyBkdXBsaWNhdGUgdmVydGljZXNcclxuICAgICAgICAgY29uc3QgbnVtVmVydGljZXMgPSB0aGlzLm51bVZlcnRpY2VzO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1szICogaSArIDBdIC09IHg7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCgtdGhpcy52ZXJ0aWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRoaXMudmVydGljZXNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCgtdGhpcy5ub3JtYWxzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh0aGlzLm5vcm1hbHNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHRoaXMubm9ybWFsc1szICogaSArIDJdKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgY29uc3QgbnVtSW5kaWNlcyA9IHRoaXMuaW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBudW1WZXJ0aWNlcztcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1JbmRpY2VzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2VzLnB1c2goc3RhcnRJbmRleCArIHRoaXMuaW5kaWNlc1tpXSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gcmVmbGVjdCB2ZXJ0aWNlc1xyXG4gICAgICAgICBjb25zdCBudW1WZXJ0aWNlcyA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0gPSB4ICsgKHggLSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHNbMyAqIGkgKyAwXSA9IC10aGlzLm5vcm1hbHNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpbmRCb3VuZHMoKTtcclxuXHJcbiAgICAgIHAubG9nKCdNaXJyb3IgQ29tcGxldGUnKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJldmVyc2UoKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIC8vIHJlZmxlY3QgdmVydGljZXNcclxuICAgICAgY29uc3QgeCA9IHRoaXMuY2VudGVyLng7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXNbMyAqIGkgKyAwXSA9IHggKyAoeCAtIHRoaXMudmVydGljZXNbMyAqIGkgKyAwXSk7XHJcbiAgICAgICAgIHRoaXMubm9ybWFsc1szICogaSArIDBdID0gLXRoaXMubm9ybWFsc1szICogaSArIDBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZW9yZGVyIHRyaWFuZ2xlcyB0byBwcmVzZXJ2ZSBmcm9udC1iYWNrIGZhY2luZ1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgaTEgPSB0aGlzLmluZGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgY29uc3QgaTIgPSB0aGlzLmluZGljZXNbMyAqIGkgKyAxXTtcclxuICAgICAgICAgdGhpcy5pbmRpY2VzWzMgKiBpICsgMF0gPSBpMjtcclxuICAgICAgICAgdGhpcy5pbmRpY2VzWzMgKiBpICsgMV0gPSBpMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ1JldmVyc2UgQ29tcGxldGUnKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbWJpbmUodE9iajogVHJpYW5nbGVPYmopOiB2b2lkIHtcclxuXHJcbiAgICAgIC8vIHNhdmUgdGhlIHZhbHVlIGZvciB0aGUgZmlyc3QgaW5kZXggb2YgdGhlIGNvbWJpbmVkIG9iamVjdHNcclxuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMubnVtVmVydGljZXM7XHJcblxyXG4gICAgICAvLyBhZGQgdGhlIG90aGVyIHZlcnRpY2VzIGFuZCBub3JtYWxzIHRvIG91cnNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0T2JqLnZlcnRpY2VzW2ldKTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2godE9iai5ub3JtYWxzW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWRkIHRoZSBvdGhlciBpbmRpY2VzLCBidXQgb2Zmc2V0IHRoZW0gcHJvcGVybHlcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0T2JqLmluZGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5pbmRpY2VzLnB1c2goc3RhcnRJbmRleCArIHRPYmouaW5kaWNlc1tpXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG1lcmdlIHRoZSBib3VuZGluZyBib3hlc1xyXG4gICAgICB0aGlzLmJveC5tZXJnZSh0T2JqLmJveCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b0RhdGEoKTogSVRyaWFuZ2xlT2JqRGF0YSB7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgIHZlcnRpY2VzOiBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpLFxyXG4gICAgICAgICBub3JtYWxzOiBuZXcgRmxvYXQzMkFycmF5KHRoaXMubm9ybWFscyksXHJcbiAgICAgICAgIGluZGljZXM6IG5ldyBJbnQzMkFycmF5KHRoaXMuaW5kaWNlcyksXHJcbiAgICAgICAgIGJveE1pbjogdGhpcy5ib3gubWluLmNsb25lKCksXHJcbiAgICAgICAgIGJveE1heDogdGhpcy5ib3gubWF4LmNsb25lKCksXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tRGF0YShkYXRhOiBJVHJpYW5nbGVPYmpEYXRhKTogVHJpYW5nbGVPYmoge1xyXG5cclxuICAgICAgY29uc3QgdE9iaiA9IG5ldyBUcmlhbmdsZU9iaigpO1xyXG4gICAgICB0T2JqLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgIHRPYmoudmVydGljZXMgPSBBcnJheS5mcm9tKGRhdGEudmVydGljZXMpO1xyXG4gICAgICB0T2JqLm5vcm1hbHMgPSBBcnJheS5mcm9tKGRhdGEubm9ybWFscyk7XHJcbiAgICAgIHRPYmouaW5kaWNlcyA9IEFycmF5LmZyb20oZGF0YS5pbmRpY2VzKTtcclxuICAgICAgdE9iai5ib3ggPSBuZXcgQm91bmRpbmdCb3gobmV3IFZlYzMoZGF0YS5ib3hNaW4udmFsdWVzKSwgbmV3IFZlYzMoZGF0YS5ib3hNYXgudmFsdWVzKSk7XHJcbiAgICAgIHJldHVybiB0T2JqO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9CbG9iKCk6IEJsb2Ige1xyXG5cclxuICAgICAgLy8gY3JlYXRlIGEgZGVzY3JpcHRpb25cclxuICAgICAgY29uc3QgaW5mbyA9IHtcclxuICAgICAgICAgRmlsZVR5cGU6ICdCaW5hcnkgT0JKJyxcclxuICAgICAgICAgVmVyc2lvbjogJzEuMCcsXHJcbiAgICAgICAgIE5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgU291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZ2V0IHRoZSByYXcgZGF0YVxyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy50b0RhdGEoKTtcclxuXHJcbiAgICAgIC8vIGJyZWFrIGl0IGludG8gcGFydHNcclxuICAgICAgY29uc3QgcGFydHM6IEJsb2JQYXJ0W10gPSBbXTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLnZlcnRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLm5vcm1hbHMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEuaW5kaWNlcyk7XHJcbiAgICAgIHBhcnRzLnB1c2gobmV3IEZsb2F0MzJBcnJheShkYXRhLmJveE1pbi52YWx1ZXMpKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWF4LnZhbHVlcykpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBCbG9iXHJcbiAgICAgIHJldHVybiBCbG9iRmlsZS5jcmVhdGVCbG9iKGluZm8sIHBhcnRzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBmcm9tQmxvYihibG9iOiBCbG9iKTogUHJvbWlzZTxUcmlhbmdsZU9iaj4ge1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFRyaWFuZ2xlT2JqLmJsb2JUb0RhdGEoYmxvYik7XHJcbiAgICAgIHJldHVybiBUcmlhbmdsZU9iai5mcm9tRGF0YShkYXRhKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBibG9iVG9EYXRhKGJsb2I6IEJsb2IpOiBQcm9taXNlPElUcmlhbmdsZU9iakRhdGE+IHtcclxuXHJcbiAgICAgIGNvbnN0IGJGaWxlID0gYXdhaXQgQmxvYkZpbGUuZXh0cmFjdChibG9iKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIG5hbWU6IGJGaWxlLmluZm8uTmFtZSxcclxuICAgICAgICAgc291cmNlOiBiRmlsZS5pbmZvLlNvdXJjZSxcclxuICAgICAgICAgdmVydGljZXM6IG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbMF0uYXJyYXlCdWZmZXIoKSksXHJcbiAgICAgICAgIG5vcm1hbHM6IG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbMV0uYXJyYXlCdWZmZXIoKSksXHJcbiAgICAgICAgIGluZGljZXM6IG5ldyBJbnQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzJdLmFycmF5QnVmZmVyKCkpLFxyXG4gICAgICAgICBib3hNaW46IG5ldyBWZWMzKEFycmF5LmZyb20obmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1szXS5hcnJheUJ1ZmZlcigpKSkpLFxyXG4gICAgICAgICBib3hNYXg6IG5ldyBWZWMzKEFycmF5LmZyb20obmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1s0XS5hcnJheUJ1ZmZlcigpKSkpLFxyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIGNvbXB1dGUgbm9ybWFscyBmb3IgdmVydGljZXMgdGhhdCBqb2luIG11bHRpcGxlIGZhY2VzXHJcbiAqL1xyXG5jbGFzcyBNdWx0aU5vcm1WZXJ0ZXgge1xyXG4gICBwcml2YXRlIG5vcm1hbHM6IFZlYzNbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhpcyB2ZXJ0ZXhcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBub3JtYWwgU3RvcmVzIGEgbm9ybWFsIGZvciB0aGUgdmVydGV4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcHVzaChub3JtYWw6IFZlYzMpIHtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBub3JtYWwgYnkgYXZlcmFnaW5nIGFsbCB0aGUgaW5kaXZpZHVhbCBub3JtYWxzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmVydGV4XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IG5vcm1hbCgpOiBWZWMzIHtcclxuICAgICAgY29uc3QgbiA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIG4ueCArPSB0aGlzLm5vcm1hbHNbaV0ueDtcclxuICAgICAgICAgbi55ICs9IHRoaXMubm9ybWFsc1tpXS55O1xyXG4gICAgICAgICBuLnogKz0gdGhpcy5ub3JtYWxzW2ldLno7XHJcbiAgICAgIH1cclxuICAgICAgbi54IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueSAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBuLnogLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuXHJcbiAgICAgIHJldHVybiBuO1xyXG4gICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFRyaWFuZ2xlT2JqLCBOb3JtYWxUeXBlIH0gZnJvbSAnLi9UcmlhbmdsZU9iaic7XHJcbmltcG9ydCB7IFN0YXR1c0Z1bmN0aW9uIH0gZnJvbSAnLi4vVXRpbC9HbG9iYWxzJztcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tICcuLi9VdGlsL1Byb2ZpbGVyJztcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGxvYWRzIGEgLm9iaiBmaWxlIGFuZCBjcmVhdGVzIHRyaWFuZ2xlcyBmb3IgaXRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iakZpbGUgZXh0ZW5kcyBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzcmM6IHN0cmluZywgdXBkYXRlU3RhdHVzPzogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHN1cGVyKG5hbWUpO1xyXG5cclxuICAgICAgLy8gcmVjb3JkIHRoZSBzdGF0dXMgZnVuY3Rpb24uIElmIG9uZSBpcyBub3Qgc3VwcGxpZWQsIGNyZWF0ZSBvbmUgdGhhdCBkb2VzIG5vdGhpbmdcclxuICAgICAgaWYgKCF1cGRhdGVTdGF0dXMpIHtcclxuICAgICAgICAgdXBkYXRlU3RhdHVzID0gKHN0YXR1cykgPT4geyByZXR1cm47IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFyc2Uoc3JjLCB1cGRhdGVTdGF0dXMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlRmFjZShsaW5lOiBzdHJpbmcpOiB7IGlWOiBudW1iZXJbXSwgaU46IG51bWJlcltdIH0ge1xyXG4gICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgIGlWOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgICAgaU46IFtdIGFzIG51bWJlcltdLFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgIGNvbnN0IG51bVZhbHMgPSB0b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWxzOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgdmFscyA9IHRva2Vuc1tpICsgMV0uc3BsaXQoJy8nKTtcclxuICAgICAgICAgcmV0LmlWLnB1c2gocGFyc2VJbnQodmFsc1swXSkgLSAxKTtcclxuICAgICAgICAgaWYgKHZhbHMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgIHJldC5pTi5wdXNoKHBhcnNlSW50KHZhbHNbMl0pIC0gMSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlKHNyYzogc3RyaW5nLCB1cGRhdGVTdGF0dXM6IFN0YXR1c0Z1bmN0aW9uKSB7XHJcblxyXG4gICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3NpbmcnKTtcclxuICAgICAgbGV0IHQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgY29uc3QgcDIgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgY29uc3QgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBjb25zdCBsaW5lcyA9IHNyYy5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIHAubG9nKCdzcGxpdCcpO1xyXG5cclxuICAgICAgY29uc3QgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGNvbnN0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGNvbnN0IHZJbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBjb25zdCBuSW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG1hdGNoID0gdHJ1ZTtcclxuICAgICAgbGV0IGNvbnRhaW5zTm9ybWFscyA9IHRydWU7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIC8vIHJlcG9ydCBwcm9ncmVzcyBldmVyeSA1MCBtc1xyXG4gICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHQgPiA1MCkge1xyXG4gICAgICAgICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6ICcgKyAoMTAwICogaSAvIGxpbmVzLmxlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgICAgICAgICAgdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCd2ICcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMV0pKTtcclxuICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzNdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCd2biAnKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMV0pKTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1szXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZiAnKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLnBhcnNlRmFjZShsaW5lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgaWYgKHJldC5pVi5sZW5ndGggIT09IHJldC5pTi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGFpbnNOb3JtYWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm9ybWFscyBub3Qgc3BlY2lmaWVkIGluIGZpbGUuIEZsYXQgbm9ybWFscyB3aWxsIGJlIGNvbXB1dGVkLicpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0LmlWLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQuaVZbaV0gIT0gcmV0LmlOW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVmVydGljZXMgYW5kIG5vcm1hbHMgZG9uXFwndCBtYXRjaC4gQ29udGVudCB3aWxsIGJlIHJlLWluZGV4ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXQuaVYubGVuZ3RoID09PSA0KSB7XHJcblxyXG4gICAgICAgICAgICAgICB2SW5kaWNlcy5wdXNoKHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0pO1xyXG4gICAgICAgICAgICAgICB2SW5kaWNlcy5wdXNoKHJldC5pVlswXSwgcmV0LmlWWzJdLCByZXQuaVZbM10pO1xyXG4gICAgICAgICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5JbmRpY2VzLnB1c2gocmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSk7XHJcbiAgICAgICAgICAgICAgICAgIG5JbmRpY2VzLnB1c2gocmV0LmlOWzBdLCByZXQuaU5bMl0sIHJldC5pTlszXSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdKTtcclxuICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwLmxvZygncGFyc2UnKTtcclxuXHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IHZJbmRpY2VzO1xyXG5cclxuICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xyXG5cclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2SW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWxzWzMgKiBuSW5kaWNlc1tpXSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsc1szICogbkluZGljZXNbaV0gKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbHNbMyAqIG5JbmRpY2VzW2ldICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljZXMucHVzaChpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBwLmxvZygncmVpbmRleCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udGFpbnNOb3JtYWxzID09PSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuRmxhdCk7XHJcbiAgICAgICAgIHAubG9nKCdjb21wdXRlIG5vcm1hbHMnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maW5kQm91bmRzKCk7XHJcbiAgICAgIHAubG9nKCdmaW5kQm91bmRzJyk7XHJcbiAgICAgIHAyLmxvZygnVG90YWwnKTtcclxuXHJcbiAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogMTAwJScpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1ZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnTm9ybWFsczogJyArIHRoaXMubm9ybWFscy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVHJpYW5nbGVzOiAnICsgdGhpcy5udW1UcmlhbmdsZXMpO1xyXG4gICB9XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElWZWMzIHtcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBWZWMge1xyXG5cclxuICAgLyoqIFRoZSB2ZWN0b3IgdmFsdWVzLiAqL1xyXG4gICBwdWJsaWMgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzT3JTaXplIElmIGEgYXJyYXksIHRoZSB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuIElmIGEgbnVtYmVyLCB0aGUgc2l6ZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlc09yU2l6ZTogbnVtYmVyIHwgbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlc09yU2l6ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc09yU2l6ZV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KHZhbHVlc09yU2l6ZSk7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gVGhlIHZlY3RvciBtYWduaXR1ZGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFnbml0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tpXSAqIHRoaXMudmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWMyIGV4dGVuZHMgVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigyKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMih0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIHRvIGFub3RoZXIgcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgcG9pbnRcclxuICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBwb2ludCBhbmQgdGhlIG90aGVyIHBvaW50XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGlzdGFuY2Uob3RoZXI6IFZlYzIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCAtIG90aGVyLngsIDIpICsgTWF0aC5wb3codGhpcy55IC0gb3RoZXIueSwgMikpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZGlnaXRzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gZGlzcGxheS4gVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gdG9GaXhlZCgpLlxyXG4gICAgKiBAcGFyYW0gZGl2aWRlciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGVhY2ggbnVtYmVyLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHMgPSAyLCBkaXZpZGVyID0gJywnKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMueC50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy55LnRvRml4ZWQoZGlnaXRzKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXogdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzMgZXh0ZW5kcyBWZWMgaW1wbGVtZW50cyBJVmVjMyB7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldCBvcmlnaW4oKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbMCwgMCwgMF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1syXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHoodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB4LXkgY29tcG9uZW50cyBhcyBhIDJkIHZlY1xyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJuIHRoZSBWZWMzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHh5KCk6IFZlYzIge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzIoW3RoaXMueCwgdGhpcy55XSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBkaWdpdHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBkaXNwbGF5LiBUaGlzIHZhbHVlIGlzIHBhc3NlZCB0byB0b0ZpeGVkKCkuXHJcbiAgICAqIEBwYXJhbSBkaXZpZGVyIFRoZSBzdHJpbmcgdG8gc2VwYXJhdGUgZWFjaCBudW1iZXIuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvU3RyaW5nKGRpZ2l0cyA9IDIsIGRpdmlkZXIgPSAnLCcpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy54LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnkudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMuei50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogUmV0dXJucyBhIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbm9ybWFsaXplKCk6IFZlYzMge1xyXG4gICAgICBjb25zdCBtYWcgPSB0aGlzLm1hZ25pdHVkZSgpO1xyXG4gICAgICBpZiAobWFnID09PSAwKSB7XHJcbiAgICAgICAgIHJldHVybiBuZXcgVmVjMygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5tdWx0KDEgLyBtYWcpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBNdWx0aXBsaWVzIG1lbWJlcnMgYnkgYSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgbmV3IHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbHVlIFRoZSBtdWx0aXBsaWNhdGlvbiB2YWx1ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtdWx0KHZhbHVlOiBudW1iZXIpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy54ICogdmFsdWUsXHJcbiAgICAgICAgIHRoaXMueSAqIHZhbHVlLFxyXG4gICAgICAgICB0aGlzLnogKiB2YWx1ZSxcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSB2ZWN0b3IgcG9pbnRpbmcgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSBuZWdhdGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZWdhdGUoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbLXRoaXMueCwgLXRoaXMueSwgLXRoaXMuel0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU3VidHJhY3RzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIHN1YnRyYWN0LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN1YnRyYWN0KHZlYzogVmVjMyk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAtIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC0gdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLSB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQWRkcyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBhZGQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYWRkKHZlYzogVmVjMyk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSArIHZlYy52YWx1ZXNbMF0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdICsgdmVjLnZhbHVlc1sxXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gKyB2ZWMudmFsdWVzWzJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY3Jvc3Mob3RoZXI6IFZlYzMpOiBWZWMzIHtcclxuICAgICAgY29uc3QgQSA9IHRoaXMudmFsdWVzO1xyXG4gICAgICBjb25zdCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICBBWzFdICogQlsyXSAtIEFbMl0gKiBCWzFdLFxyXG4gICAgICAgICBBWzJdICogQlswXSAtIEFbMF0gKiBCWzJdLFxyXG4gICAgICAgICBBWzBdICogQlsxXSAtIEFbMV0gKiBCWzBdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwb2ludCB0byBhIHNwZWNpZmllZCBwb2ludC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwdCBUaGUgcG9pbnQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSB0byB0aGUgcG9pbnQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGlzdFRvUG9pbnQocHQ6IFZlYzMpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChwdCkubWFnbml0dWRlKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCdWlsZHMgYSBWZWM0IGZyb20gdGhpcyBWZWMzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdyBUaGUgdyBjb21wb25lbnQgb2YgdGhlIG5ldyB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBuZXcgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvVmVjNCh3OiBudW1iZXIpOiBWZWM0IHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWM0KFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB3XSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzQgZXh0ZW5kcyBWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHcoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzNdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgdyh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHgteS16IGNvbXBvbmVudHMgYXMgYSAzZCB2ZWNcclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gdGhlIFZlYzNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeHl6KCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWM0IHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWM0KHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4geC15LXogdmVjdG9yIHdoZXJlIGVhY2ggZWxlbWVudCBpcyBjb21wdXRlZCBieSBkaXZpZGluZyB0aGlzIHZlY3RvcnNcclxuICAgICogZWxlbWVudHMgYnkgdGhlIHcgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiB4LXkteiB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGl2aWRlQnlXKCk6IFZlYzMge1xyXG4gICAgICBjb25zdCB3ID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAvIHdcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogTm9ybWFsaXplcyB0aGlzIHZlY3RvciwgYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBub3JtYWxpemUoKTogVmVjNCB7XHJcbiAgICAgIGNvbnN0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGNvbnN0IHJldCA9IHRoaXMuY2xvbmUoKTtcclxuICAgICAgaWYgKG1hZyAhPT0gMCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJldC52YWx1ZXNbaV0gLz0gbWFnO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgVmVjNCBmcm9tIGEgVmVjMyBvYmplY3RcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIFZlYzMgb2JqZWN0XHJcbiAgICAqIEBwYXJhbSB3IFRoZSB3IHZhbHVlIGZvciB0aGUgVmVjNFxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVmVjMyh2ZWM6IFZlYzMsIHcgPSAxKTogVmVjNCB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjNChbdmVjLngsIHZlYy55LCB2ZWMueiwgd10pO1xyXG4gICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=