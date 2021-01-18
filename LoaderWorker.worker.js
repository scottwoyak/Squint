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
var Vec = /** @class */ (function () {
    /**
     * @param valuesOrSize If a array, the values for the vector. If a number, the size of the vector.
     */
    function Vec(valuesOrSize) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcHMvVmlld2VyL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iU2hpbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9HbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1N0b3B3YXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL0JvdW5kaW5nQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvQm91bmRpbmdQdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL1RyaWFuZ2xlT2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVmVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsS0FBa0I7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxHQUFTO1FBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDOUIsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLHlDQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMs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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0csT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFTSx1Q0FBYSxHQUFwQjtRQUNHLElBQU0s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QUFXLENBQUM7U0FDMUI7UUFFRCxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBTSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLHdEQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBTSxDQUFDLEdBQUcsSUFBSSx5Q0FBSSxFQUFFLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElB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QUcsR0FpSjVCIiwiZmlsZSI6IkxvYWRlcldvcmtlci53b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zcmMvQXBwcy9WaWV3ZXIvTG9hZGVyV29ya2VyLnRzXCIpO1xuIiwiaW1wb3J0IHsgSVRyaWFuZ2xlT2JqRGF0YSwgVHJpYW5nbGVPYmogfSBmcm9tICcuLi8uLi9VdGlsM0QvVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iakZpbGUgfSBmcm9tICcuLi8uLi9VdGlsM0QvVHJpYW5nbGVPYmpGaWxlJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSB3b3JrZXIgdGhhdCBsb2FkcyBhbmQgcHJvY2Vzc2VzIHRoZSAub2JqIGZpbGVcclxuICovXHJcbmNvbnN0IHdvcmtlcjogV29ya2VyID0gc2VsZiBhcyBhbnk7XHJcblxyXG4vLyBIYW5kbGVyIGZvciByZWNlaXZpbmcgbWVzc2FnZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWRcclxud29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfTogeyBkYXRhOiBzdHJpbmcgfSkgPT4ge1xyXG5cclxuICAgLy8gd2hlbiB3ZSByZWNlaXZlIGEgc3RyaW5nIGFzIGEgbWVzc2FnZSwgaXQncyB0aGUgdXJsIG9mIHRoZSBmaWxlIHRvIGxvYWRcclxuICAgbG9hZEZpbGUoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgd29ya2VyIGZ1bmN0aW9uIHRvIGxvYWQgYSBmaWxlXHJcbiAqIFxyXG4gKiBAcGFyYW0gZmlsZSBUaGUgdXJsIG9mIHRoZSBmaWxlIHRvIGxvYWRcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRGaWxlKGZpbGU6IHN0cmluZykge1xyXG5cclxuICAgLy8gdGhlIGluaXRpYWwgc3RhdHVzIG1lc3NhZ2VcclxuICAgd29ya2VyLnBvc3RNZXNzYWdlKCdEb3dubG9hZGluZyAwJScpO1xyXG5cclxuICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2h1bmtzQWxsID0gYXdhaXQgZmV0Y2hEYXRhKGZpbGUpO1xyXG4gICAgICBsZXQgZGF0YTogSVRyaWFuZ2xlT2JqRGF0YTtcclxuXHJcbiAgICAgIGlmIChmaWxlLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5vYmonKSkge1xyXG4gICAgICAgICAvLyBkZWNvZGUgaW50byBhIHN0cmluZ1xyXG4gICAgICAgICBjb25zdCByZXMgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykuZGVjb2RlKGNodW5rc0FsbCk7XHJcblxyXG4gICAgICAgICAvLyB0dXJuIHRoZSAub2JqIHN0cmluZyBpbnRvIHRyaWFuZ2xlc1xyXG4gICAgICAgICBjb25zdCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqRmlsZShmaWxlLCByZXMsIChzdGF0dXMpID0+IHsgd29ya2VyLnBvc3RNZXNzYWdlKHN0YXR1cyk7IH0pO1xyXG4gICAgICAgICBkYXRhID0gdE9iai50b0RhdGEoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChmaWxlLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5ibG9iJykpIHtcclxuICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjaHVua3NBbGxdKTtcclxuICAgICAgICAgZGF0YSA9IGF3YWl0IFRyaWFuZ2xlT2JqLmJsb2JUb0RhdGEoYmxvYik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJldHVybiB0aGUgcmVzdWx0IGFzIGFycmF5c1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZGF0YSwgW1xyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzLmJ1ZmZlcixcclxuICAgICAgICAgZGF0YS5ub3JtYWxzLmJ1ZmZlcixcclxuICAgICAgICAgZGF0YS5pbmRpY2VzLmJ1ZmZlcixcclxuICAgICAgXSk7XHJcbiAgIH1cclxuICAgY2F0Y2ggKGVycikge1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZXJyKTtcclxuICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoZmlsZTogc3RyaW5nKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcblxyXG4gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG5cclxuICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHJlc3BvbnNlLnN0YXR1cyArICc6ICcgKyBmaWxlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xyXG4gICBjb25zdCBjb250ZW50TGVuZ3RoID0gK3Jlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LUxlbmd0aCcpO1xyXG5cclxuICAgLy8gbG9vcCB0byBsb2FkIHRoZSBkYXRhLCBvbmUgY2h1bmsgYXQgYSB0aW1lXHJcbiAgIGxldCByZWNlaXZlZExlbmd0aCA9IDA7IC8vIHJlY2VpdmVkIHRoYXQgbWFueSBieXRlcyBhdCB0aGUgbW9tZW50XHJcbiAgIGxldCBjaHVua3MgPSBbXTsgLy8gYXJyYXkgb2YgcmVjZWl2ZWQgYmluYXJ5IGNodW5rcyAoY29tcHJpc2VzIHRoZSBib2R5KVxyXG4gICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xyXG5cclxuICAgICAgaWYgKGRvbmUpIHtcclxuICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNodW5rcy5wdXNoKHZhbHVlKTtcclxuICAgICAgcmVjZWl2ZWRMZW5ndGggKz0gdmFsdWUubGVuZ3RoO1xyXG5cclxuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKCdEb3dubG9hZGluZzogJyArICgxMDAgKiByZWNlaXZlZExlbmd0aCAvIGNvbnRlbnRMZW5ndGgpLnRvRml4ZWQoKSArICclJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIGNvbmNhdGVuYXRlIGNodW5rcyBpbnRvIHNpbmdsZSBVaW50OEFycmF5XHJcbiAgIGxldCBjaHVua3NBbGwgPSBuZXcgVWludDhBcnJheShyZWNlaXZlZExlbmd0aCk7IC8vICg0LjEpXHJcbiAgIGxldCBwb3NpdGlvbiA9IDA7XHJcbiAgIGZvciAobGV0IGNodW5rIG9mIGNodW5rcykge1xyXG4gICAgICBjaHVua3NBbGwuc2V0KGNodW5rLCBwb3NpdGlvbik7IC8vICg0LjIpXHJcbiAgICAgIHBvc2l0aW9uICs9IGNodW5rLmxlbmd0aDtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIGNodW5rc0FsbDtcclxufSIsImltcG9ydCAnLi9CbG9iU2hpbSc7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgZm9yIHNsaWNpbmcgdXAgQmxvYnNcclxuICovXHJcbmNsYXNzIEJsb2JTbGljZXIge1xyXG5cclxuICAgLy8gVGhlIHN0YXJ0IGJ5dGUgdmFsdWUgZm9yIHRoZSBuZXh0IHNsaWNlXHJcbiAgIHByaXZhdGUgc3RhcnQgPSAwO1xyXG5cclxuICAgLy8gVGhlIEJsb2Igd2UncmUgc2xpY2luZyBcclxuICAgcHJpdmF0ZSBibG9iOiBCbG9iO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBibG9iIFRoZSBCbG9iIHRvIGJlIHNsaWNlZFxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKGJsb2I6IEJsb2IpIHtcclxuICAgICAgdGhpcy5ibG9iID0gYmxvYjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG5leHQgc2xpY2UuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgc2xpY2VkIEJsb2IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbmV4dChsZW46IG51bWJlcik6IEJsb2Ige1xyXG4gICAgICBjb25zdCBiID0gdGhpcy5ibG9iLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuc3RhcnQgKyBsZW4pO1xyXG4gICAgICB0aGlzLnN0YXJ0ICs9IGxlbjtcclxuICAgICAgcmV0dXJuIGI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gQXJyYXlCdWZmZXIuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBBcnJheUJ1ZmZlciBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5leHRBcnJheUJ1ZmZlcihsZW46IG51bWJlcik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV4dChsZW4pLmFycmF5QnVmZmVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gSW50MzJBcnJheVxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBJbnQzMkFycmF5IHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dEludDMyQXJyYXkobGVuOiBudW1iZXIpOiBQcm9taXNlPEludDMyQXJyYXk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGF3YWl0IHRoaXMubmV4dEFycmF5QnVmZmVyKGxlbikpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGEgc3RyaW5nXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dFN0cmluZyhsZW46IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5leHQobGVuKS50ZXh0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgY3JlYXRpb24gYW5kIGV4dHJhY3Rpb24gb2YgYSBzZWxmIGRlc2NyaWJpbmcgQmxvYi4gRGF0YVxyXG4gKiBpcyBzdG9yZWQgYXM6XHJcbiAqIFxyXG4gKiBbbnVtRW50cmllc10gLSBUaGUgbnVtYmVyIGVudHJpZXMgaW4gdGhlIGZpbGUuIDQgYnl0ZSBJbnQzMlxyXG4gKiBbc2l6ZXNdIC0gU2l6ZXMgb2YgYWxsIHRoZSBlbnRyaWVzLCBpbmNsdWRpbmcgdGhlIGluZm8gb2JqZWN0XHJcbiAqIFtpbmZvXSAtIFVzZXIgc3VwcGxpZWQgZGF0YSBhcyBhIEpTT04gc3RyaW5nXHJcbiAqIFtlbnRyeSAxXSAtIEZpcnN0IHVzZXIgZW50cnlcclxuICogW2VudHJ5IDJdIC0gU2Vjb25kIHVzZXIgZW50cnlcclxuICogWy4uLl1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9iRmlsZSB7XHJcbiAgIHB1YmxpYyBpbmZvOiBhbnk7XHJcbiAgIHB1YmxpYyBwYXJ0czogQmxvYltdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIGhlYWRlciB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQmxvYlxyXG4gICAgKiBAcGFyYW0gcGFydHMgVGhlIGRhdGEgY29udGVudHMgb2YgdGhlIEJsb2JcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoaW5mbzogb2JqZWN0LCBwYXJ0czogQmxvYltdKSB7XHJcbiAgICAgIHRoaXMuaW5mbyA9IGluZm87XHJcbiAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgcmF3IEJsb2Igb2JqZWN0IGludG8gYSBCbG9iRmlsZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gcHJvY2Vzcy5cclxuICAgICogQHJldHVybiBBIEJsb2JGaWxlIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4dHJhY3QoYmxvYjogQmxvYik6IFByb21pc2U8QmxvYkZpbGU+IHtcclxuXHJcbiAgICAgIGNvbnN0IGJsb2JTbGljZXIgPSBuZXcgQmxvYlNsaWNlcihibG9iKTtcclxuXHJcbiAgICAgIC8vIGZpcnN0IGV4dHJhY3QgdGhlIG51bWJlciBvZiBlbnRyaWVzXHJcbiAgICAgIGNvbnN0IG51bUVudHJpZXMgPSAoYXdhaXQgYmxvYlNsaWNlci5uZXh0SW50MzJBcnJheSg0KSlbMF07XHJcblxyXG4gICAgICAvLyB0aGUgdGhlIHNpemVzIGFycmF5XHJcbiAgICAgIGNvbnN0IHNpemVzID0gYXdhaXQgYmxvYlNsaWNlci5uZXh0SW50MzJBcnJheSg0ICogKG51bUVudHJpZXMgKyAxKSk7XHJcblxyXG4gICAgICAvLyB0aGVuIHRoZSBpbmZvIG9iamVjdFxyXG4gICAgICBjb25zdCBqc29uSW5mbyA9IGF3YWl0IGJsb2JTbGljZXIubmV4dFN0cmluZyhzaXplc1swXSk7XHJcblxyXG4gICAgICAvLyB0aGVuIGFsbCB0aGUgc3ViIGJsb2JzXHJcbiAgICAgIGNvbnN0IHBhcnRzOiBCbG9iW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1FbnRyaWVzOyBpKyspIHtcclxuICAgICAgICAgY29uc3Qgc2l6ZSA9IHNpemVzW2kgKyAxXTtcclxuICAgICAgICAgcGFydHMucHVzaChibG9iU2xpY2VyLm5leHQoc2l6ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEJsb2JGaWxlKEpTT04ucGFyc2UoanNvbkluZm8pLCBwYXJ0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBCbG9iRmlsZSBCbG9iXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gaGVhZGVyIHRvIGJlIHN0b3JlZCB3aXRoIHRoZSBCbG9iXHJcbiAgICAqIEBwYXJhbSBwYXJ0cyBUaGUgZGF0YSBjb250ZW50cyBvZiB0aGUgQmxvYlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGVCbG9iKGluZm86IG9iamVjdCwgcGFydHM6IEJsb2JQYXJ0W10pOiBCbG9iIHtcclxuXHJcbiAgICAgIGNvbnN0IGpzb25JbmZvID0gSlNPTi5zdHJpbmdpZnkoaW5mbyk7XHJcblxyXG4gICAgICAvLyBCdWlsZCB0aGUgYXJyYXkgb2Ygc2l6ZXNcclxuICAgICAgY29uc3Qgc2l6ZXM6IG51bWJlcltdID0gW2pzb25JbmZvLmxlbmd0aF07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICBpZiAocGFydCBpbnN0YW5jZW9mIEludDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaChwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdVbnN1cHBvcnRlZCBCbG9iIFBhcnQgVHlwZTogJyArIHR5cGVvZiBwYXJ0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFzc2VtYmxlIHRoZSBibG9iIHBhcnRzXHJcbiAgICAgIGNvbnN0IGFsbFBhcnRzOiBCbG9iUGFydFtdID0gW107XHJcbiAgICAgIGFsbFBhcnRzLnB1c2gobmV3IEludDMyQXJyYXkoW3BhcnRzLmxlbmd0aF0pKTtcclxuICAgICAgYWxsUGFydHMucHVzaChuZXcgSW50MzJBcnJheShzaXplcykpO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKGpzb25JbmZvKTtcclxuICAgICAgYWxsUGFydHMucHVzaCguLi5wYXJ0cyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIGJsb2JcclxuICAgICAgcmV0dXJuIG5ldyBCbG9iKGFsbFBhcnRzKTtcclxuICAgfVxyXG59IiwiLy8gbmVlZGVkIGZvciBTYWZhcmlcclxuaWYgKCFCbG9iLnByb3RvdHlwZS5hcnJheUJ1ZmZlcikge1xyXG4gICBCbG9iLnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcblxyXG4gICAgICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXlCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0YXJ0IHRoZSByZWFkXHJcbiAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG5cclxuLy8gbmVlZGVkIGZvciBTYWZhcmlcclxuaWYgKCFCbG9iLnByb3RvdHlwZS50ZXh0KSB7XHJcblxyXG4gICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICBCbG9iLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gZGVjb2RlIGludG8gYSBzdHJpbmdcclxuICAgICAgICAgICAgY29uc3QgdHh0ID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpLmRlY29kZShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0eHQpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0YXJ0IHRoZSByZWFkXHJcbiAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG4iLCJcclxuZXhwb3J0IHR5cGUgU3RhdHVzRnVuY3Rpb24gPSAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbmV4cG9ydCBsZXQgZW52ID0ge1xyXG4gICBpc1Rlc3Rpbmc6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlVXJsKCk6IHN0cmluZyB7XHJcbiAgIGxldCB1cmwgPSBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZTtcclxuICAgaWYgKHVybC5lbmRzV2l0aCgnaW5kZXguaHRtbCcpKSB7XHJcbiAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEwKTtcclxuICAgfVxyXG4gICBpZiAodXJsLmVuZHNXaXRoKCcvJykgPT09IGZhbHNlKSB7XHJcbiAgICAgIHVybCArPSAnLyc7XHJcbiAgIH1cclxuICAgcmV0dXJuIHVybDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVTdHIoKTogc3RyaW5nIHtcclxuXHJcbiAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgIGxldCBob3VycyA9IGQuZ2V0SG91cnMoKTtcclxuICAgbGV0IGhvdXJzU3RyID0gJyc7XHJcbiAgIGlmIChob3VycyA9PT0gMCkge1xyXG4gICAgICBob3Vyc1N0ciA9ICcxMic7XHJcbiAgIH1cclxuICAgZWxzZSBpZiAoaG91cnMgPiAxMikge1xyXG4gICAgICBob3Vyc1N0ciA9IChob3VycyAtIDEyKS50b1N0cmluZygpO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICBob3Vyc1N0ciA9IGhvdXJzLnRvU3RyaW5nKCk7XHJcbiAgIH1cclxuXHJcbiAgIGxldCBtaW5zID0gZC5nZXRNaW51dGVzKCk7XHJcbiAgIGxldCBtaW5zU3RyID0gJyc7XHJcbiAgIGlmIChtaW5zIDwgMTApIHtcclxuICAgICAgbWluc1N0ciA9ICcwJyArIG1pbnM7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIG1pbnNTdHIgPSBtaW5zLnRvU3RyaW5nKCk7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBob3Vyc1N0ciArICc6JyArIG1pbnNTdHIgKyAnICcgKyAoaG91cnMgPiAxMiA/ICdQTScgOiAnQU0nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVtUGl4ZWxzKCk6IG51bWJlciB7XHJcbiAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XHJcbiAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChzdHlsZS5mb250U2l6ZS5zdWJzdHIoMCwgc3R5bGUuZm9udFNpemUubGVuZ3RoIC0gMikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHhUb051bWJlcihweFZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICBpZiAocHhWYWx1ZS5lbmRzV2l0aCgncHgnKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQocHhWYWx1ZS5zdWJzdHIoMCwgcHhWYWx1ZS5sZW5ndGggLSAyKSk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIuTmFOO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gdjEgKyBjbGFtcChtaXgsIDAsIDEpICogKHYyIC0gdjEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3MocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAoYSA9PT0gdW5kZWZpbmVkID8gJycgOiAnLCcgKyBhKSArICcpJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvU2l6ZVN0cih2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIGlmICh2YWwgPCAxMDI0KSB7XHJcbiAgICAgIHJldHVybiB2YWwgKyAnIGJ5dGVzJztcclxuICAgfVxyXG4gICBlbHNlIGlmICh2YWwgPCAxMDI0ICogMTAyNCkge1xyXG4gICAgICByZXR1cm4gKHZhbCAvIDEwMjQpLnRvRml4ZWQoMSkgKyAnIGtiJztcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuICh2YWwgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDEpICsgJyBtYic7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvb2xlYW5WYWx1ZSh2YWx1ZTogYm9vbGVhbiB8ICgoKSA9PiBib29sZWFuKSB8IHVuZGVmaW5lZCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgfVxyXG4gICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlKCk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaU9TKCk6IGJvb2xlYW4ge1xyXG4gICByZXR1cm4gW1xyXG4gICAgICAnaVBhZCBTaW11bGF0b3InLFxyXG4gICAgICAnaVBob25lIFNpbXVsYXRvcicsXHJcbiAgICAgICdpUG9kIFNpbXVsYXRvcicsXHJcbiAgICAgICdpUGFkJyxcclxuICAgICAgJ2lQaG9uZScsXHJcbiAgICAgICdpUG9kJ1xyXG4gICBdLmluY2x1ZGVzKG5hdmlnYXRvci5wbGF0Zm9ybSlcclxuICAgICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXHJcbiAgICAgIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdNYWMnKSAmJiAnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQpXHJcbn0iLCJpbXBvcnQgeyBTdG9wd2F0Y2ggfSBmcm9tICcuL1N0b3B3YXRjaCc7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgbG9nZ2luZyB0aW1pbmcgbWVzc2FnZXMgZm9yIHByb2ZpbGUgY29kZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVyIHtcclxuXHJcbiAgIHByaXZhdGUgc3cgPSBuZXcgU3RvcHdhdGNoKCk7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsYXBzZWQgdGltZSBpbiBtaWxsaXNlY29uZHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZWxhcHNlZE1zKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN3LmVsYXBzZWRNcztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFByaW50cyBhIG1lc3NhZ2UgdG8gY29uc29sZSBvZiB0aGUgZWxhcHNlZCB0aW1lXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbXNnIFRoZSBtZXNzYWdlIHRvIHByaW50IHdpdGggdGhlIHRpbWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBsb2cobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgY29uc29sZS5sb2cobXNnICsgJyAnICsgdGhpcy5lbGFwc2VkTXMudG9GaXhlZCgxKSArICcgbXMnKTtcclxuICAgICAgdGhpcy5zdy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxufSIsIi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciB0cmFja2luZyB0aW1lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RvcHdhdGNoIHtcclxuXHJcbiAgIHByaXZhdGUgYWNjdW11bGF0ZWRNcyA9IDA7XHJcbiAgIHByaXZhdGUgc3RhcnRUaW1lID0gTmFOO1xyXG4gICBwcml2YXRlIF9wYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgIHB1YmxpYyBnZXQgcGF1c2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHJ1bm5pbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5wYXVzZWQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxhcHNlZCB0aW1lIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBlbGFwc2VkTXMoKTogbnVtYmVyIHtcclxuICAgICAgaWYgKGlzTmFOKHRoaXMuc3RhcnRUaW1lKSkge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5hY2N1bXVsYXRlZE1zO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5hY2N1bXVsYXRlZE1zICsgKHRoaXMuZ2V0VGltZU1zKCkgLSB0aGlzLnN0YXJ0VGltZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHNldCBlbGFwc2VkTXModmFsdWU6IG51bWJlcikge1xyXG4gICAgICB0aGlzLmFjY3VtdWxhdGVkTXMgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZ2V0VGltZU1zKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBlbGFwc2VkIHRpbWUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRTKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVsYXBzZWRNcyAvIDEwMDA7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0VGltZU1zKCk6IG51bWJlciB7XHJcbiAgICAgIC8vIHdpbmRvdy5wZXJmb3JtYW5jZSBpcyBub3QgZGVmaW5lZCBmb3Igbm9kZWpzIHNvIG91ciB0ZXN0IG5lZWRcclxuICAgICAgLy8gdGhpcyB0byBjb21waWxlXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzdGFydCA9IHRydWUpIHtcclxuICAgICAgdGhpcy5yZXNldChzdGFydCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXNldChzdGFydDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICB0aGlzLmFjY3VtdWxhdGVkTXMgPSAwO1xyXG4gICAgICBpZiAoc3RhcnQpIHtcclxuICAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5nZXRUaW1lTXMoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBOYU47XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5fcGF1c2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmFjY3VtdWxhdGVkTXMgPSB0aGlzLmVsYXBzZWRNcztcclxuICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBOYU47XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5fcGF1c2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZ2V0VGltZU1zKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjMywgSVZlYzMsIFZlYzQgfSBmcm9tICcuL1ZlYyc7XHJcbmltcG9ydCB7IE1hdDQgfSBmcm9tICcuL01hdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNaW5NYXgge1xyXG4gICByZWFkb25seSBtaW46IG51bWJlcjtcclxuICAgcmVhZG9ubHkgbWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3VuZGluZ0JveCB7XHJcbiAgIHB1YmxpYyBtaW46IFZlYzM7XHJcbiAgIHB1YmxpYyBtYXg6IFZlYzM7XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1heC54IC0gdGhpcy5taW4ueDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4LnkgLSB0aGlzLm1pbi55O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1heC56IC0gdGhpcy5taW4uejtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkaWFnb25hbCgpOiBudW1iZXIge1xyXG4gICAgICBjb25zdCB3ID0gdGhpcy53aWR0aDtcclxuICAgICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBkID0gdGhpcy5kZXB0aDtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydCh3ICogdyArIGggKiBoICsgZCAqIGQpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgKHRoaXMubWluLnggKyB0aGlzLm1heC54KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLm1pbi55ICsgdGhpcy5tYXgueSkgLyAyLFxyXG4gICAgICAgICAodGhpcy5taW4ueiArIHRoaXMubWF4LnopIC8gMixcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgY29ybmVycygpOiBWZWMzW10ge1xyXG4gICAgICBjb25zdCBjb3JuZXJzOiBWZWMzW10gPSBbXTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWluLngsIHRoaXMubWluLnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5taW4ueCwgdGhpcy5tYXgueSwgdGhpcy5taW4uel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1heC55LCB0aGlzLm1heC56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWluLnksIHRoaXMubWluLnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5tYXgueCwgdGhpcy5taW4ueSwgdGhpcy5tYXguel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1heC54LCB0aGlzLm1heC55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIHJldHVybiBjb3JuZXJzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobWluOiBWZWMzID0gbmV3IFZlYzMoW051bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUVdKSxcclxuICAgICAgbWF4OiBWZWMzID0gbmV3IFZlYzMoWy1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUVdKSkge1xyXG4gICAgICB0aGlzLm1pbiA9IG1pbjtcclxuICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluZmluaXRlKCk6IEJvdW5kaW5nQm94IHtcclxuICAgICAgY29uc3QgTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xyXG4gICAgICBjb25zdCBNSU4gPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgIHJldHVybiBuZXcgQm91bmRpbmdCb3gobmV3IFZlYzMoW01JTiwgTUlOLCBNSU5dKSwgbmV3IFZlYzMoW01BWCwgTUFYLCBNQVhdKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBpbnNpZGUodmVjOiBJVmVjMyk6IGJvb2xlYW4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIHZlYy54ID49IHRoaXMubWluLnggJiYgdmVjLnggPD0gdGhpcy5tYXgueCAmJlxyXG4gICAgICAgICB2ZWMueSA+PSB0aGlzLm1pbi55ICYmIHZlYy55IDw9IHRoaXMubWF4LnkgJiZcclxuICAgICAgICAgdmVjLnogPj0gdGhpcy5taW4ueiAmJiB2ZWMueiA8PSB0aGlzLm1heC56XHJcbiAgICAgICkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1snICsgdGhpcy5taW4udG9TdHJpbmcoZGlnaXRzKSArICddJyArXHJcbiAgICAgICAgICdbJyArIHRoaXMubWF4LnRvU3RyaW5nKGRpZ2l0cykgKyAnXSc7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB1cGRhdGUodjogSVZlYzMpOiB2b2lkIHtcclxuICAgICAgaWYgKGlzTmFOKHYueCkgfHwgaXNOYU4odi55KSB8fCBpc05hTih2LnopKSB7XHJcbiAgICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OYU4nKTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWluLnggPSBNYXRoLm1pbih0aGlzLm1pbi54LCB2LngpO1xyXG4gICAgICB0aGlzLm1pbi55ID0gTWF0aC5taW4odGhpcy5taW4ueSwgdi55KTtcclxuICAgICAgdGhpcy5taW4ueiA9IE1hdGgubWluKHRoaXMubWluLnosIHYueik7XHJcbiAgICAgIHRoaXMubWF4LnggPSBNYXRoLm1heCh0aGlzLm1heC54LCB2LngpO1xyXG4gICAgICB0aGlzLm1heC55ID0gTWF0aC5tYXgodGhpcy5tYXgueSwgdi55KTtcclxuICAgICAgdGhpcy5tYXgueiA9IE1hdGgubWF4KHRoaXMubWF4LnosIHYueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBtZXJnZShvdGhlcjogQm91bmRpbmdCb3gpOiB2b2lkIHtcclxuICAgICAgdGhpcy5taW4ueCA9IE1hdGgubWluKHRoaXMubWluLngsIG90aGVyLm1pbi54KTtcclxuICAgICAgdGhpcy5taW4ueSA9IE1hdGgubWluKHRoaXMubWluLnksIG90aGVyLm1pbi55KTtcclxuICAgICAgdGhpcy5taW4ueiA9IE1hdGgubWluKHRoaXMubWluLnosIG90aGVyLm1pbi56KTtcclxuICAgICAgdGhpcy5tYXgueCA9IE1hdGgubWF4KHRoaXMubWF4LngsIG90aGVyLm1heC54KTtcclxuICAgICAgdGhpcy5tYXgueSA9IE1hdGgubWF4KHRoaXMubWF4LnksIG90aGVyLm1heC55KTtcclxuICAgICAgdGhpcy5tYXgueiA9IE1hdGgubWF4KHRoaXMubWF4LnosIG90aGVyLm1heC56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG11bHRNKG1hdDogTWF0NCk6IEJvdW5kaW5nQm94IHtcclxuICAgICAgY29uc3QgcmV0ID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgICAgIGNvbnN0IHYxID0gbWF0Lm11bHRWKG5ldyBWZWM0KFt0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56LCAxXSkpO1xyXG4gICAgICBjb25zdCB2MiA9IG1hdC5tdWx0VihuZXcgVmVjNChbdGhpcy5tYXgueCwgdGhpcy5tYXgueSwgdGhpcy5tYXgueiwgMV0pKTtcclxuICAgICAgcmV0Lm1pbi54ID0gTWF0aC5taW4odjEueCwgdjIueCk7XHJcbiAgICAgIHJldC5taW4ueSA9IE1hdGgubWluKHYxLnksIHYyLnkpO1xyXG4gICAgICByZXQubWluLnogPSBNYXRoLm1pbih2MS56LCB2Mi56KTtcclxuICAgICAgcmV0Lm1heC54ID0gTWF0aC5tYXgodjEueCwgdjIueCk7XHJcbiAgICAgIHJldC5tYXgueSA9IE1hdGgubWF4KHYxLnksIHYyLnkpO1xyXG4gICAgICByZXQubWF4LnogPSBNYXRoLm1heCh2MS56LCB2Mi56KTtcclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tICcuL1ZlYyc7XHJcbmltcG9ydCB7IElNaW5NYXggfSBmcm9tICcuL0JvdW5kaW5nQm94JztcclxuaW1wb3J0IHsgUGxhbmUgfSBmcm9tICcuLi9BcHBzL1ZpZXdlci9QbGFuZSc7XHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgcG9pbnRzIHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGluZyBlZGdlcyBvZiBhbiBvYmplY3QuIEFsbCBwb2ludHMgYXJlXHJcbiAqIGVuY2xvc2VkIGluIHRoZSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCb3VuZGluZ1B0cyB7XHJcbiAgIHByaXZhdGUgcHRzOiBWZWMzW107XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IocHRzOiBWZWMzW10pIHtcclxuICAgICAgdGhpcy5wdHMgPSBwdHM7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQoaTogbnVtYmVyKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnB0c1tpXTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRpc3RUb1BvaW50KHB0OiBWZWMzKTogSU1pbk1heCB7XHJcbiAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgbWluOiBOdW1iZXIuTUFYX1ZBTFVFLFxyXG4gICAgICAgICBtYXg6IC1OdW1iZXIuTUFYX1ZBTFVFLFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnB0cy5mb3JFYWNoKChwdDI6IFZlYzMpID0+IHtcclxuICAgICAgICAgY29uc3QgeCA9IHB0Mi54IC0gcHQueDtcclxuICAgICAgICAgY29uc3QgeSA9IHB0Mi55IC0gcHQueTtcclxuICAgICAgICAgY29uc3QgeiA9IHB0Mi56IC0gcHQuejtcclxuICAgICAgICAgY29uc3QgZCA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcclxuICAgICAgICAgcmV0Lm1pbiA9IE1hdGgubWluKGQsIHJldC5taW4pO1xyXG4gICAgICAgICByZXQubWF4ID0gTWF0aC5tYXgoZCwgcmV0Lm1heCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gZG9uJ3QgYm90aGVyIGdldHRpbmcgdGhlIHNxdWFyZSByb290IG9mIGV2ZXJ5IGNhbGN1bGF0aW9uLCBqdXN0IHRoZSBtaW4gYW5kIG1heFxyXG4gICAgICByZXQubWluID0gTWF0aC5zcXJ0KHJldC5taW4pO1xyXG4gICAgICByZXQubWF4ID0gTWF0aC5zcXJ0KHJldC5tYXgpO1xyXG5cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRpc3RUb1BsYW5lKHBsYW5lOiBQbGFuZSk6IElNaW5NYXgge1xyXG4gICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcclxuICAgICAgICAgbWF4OiAtTnVtYmVyLk1BWF9WQUxVRSxcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wdHMuZm9yRWFjaCgocHQ6IFZlYzMpID0+IHtcclxuICAgICAgICAgY29uc3QgZCA9IHBsYW5lLmRpc3RUb1B0KHB0KTtcclxuICAgICAgICAgcmV0Lm1pbiA9IE1hdGgubWluKGQsIHJldC5taW4pO1xyXG4gICAgICAgICByZXQubWF4ID0gTWF0aC5tYXgoZCwgcmV0Lm1heCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgSW5kZXhlZFZlYzMgfSBmcm9tICcuL0luZGV4ZWRWZWMzJztcclxuaW1wb3J0IHsgVmVjMyB9IGZyb20gJy4vVmVjJztcclxuXHJcbi8qKlxyXG4gKiBNaW5pbWFsaXN0IHdyYXBwZXIgYXJvdW5kIGEgV2ViR0wgdHJpYW5nbGUgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgIHB1YmxpYyB2MTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBpMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaTI6IG51bWJlcjtcclxuICAgcHVibGljIGkzOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihcclxuICAgICAgdmVydGljZXM6IG51bWJlcltdLFxyXG4gICAgICBub3JtYWxzOiBudW1iZXJbXSxcclxuICAgICAgaTE6IG51bWJlcixcclxuICAgICAgaTI6IG51bWJlcixcclxuICAgICAgaTM6IG51bWJlcixcclxuICAgKSB7XHJcbiAgICAgIHRoaXMudjEgPSBuZXcgSW5kZXhlZFZlYzModmVydGljZXMsIGkxKTtcclxuICAgICAgdGhpcy52MiA9IG5ldyBJbmRleGVkVmVjMyh2ZXJ0aWNlcywgaTIpO1xyXG4gICAgICB0aGlzLnYzID0gbmV3IEluZGV4ZWRWZWMzKHZlcnRpY2VzLCBpMyk7XHJcbiAgICAgIHRoaXMubjEgPSBuZXcgSW5kZXhlZFZlYzMobm9ybWFscywgaTEpO1xyXG4gICAgICB0aGlzLm4yID0gbmV3IEluZGV4ZWRWZWMzKG5vcm1hbHMsIGkyKTtcclxuICAgICAgdGhpcy5uMyA9IG5ldyBJbmRleGVkVmVjMyhub3JtYWxzLCBpMyk7XHJcbiAgICAgIHRoaXMuaTEgPSBpMTtcclxuICAgICAgdGhpcy5pMiA9IGkyO1xyXG4gICAgICB0aGlzLmkzID0gaTM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5YKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYxLngsIHRoaXMudjIueCwgdGhpcy52My54KTtcclxuICAgfVxyXG4gICBnZXQgbWluWSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MS55LCB0aGlzLnYyLnksIHRoaXMudjMueSk7XHJcbiAgIH1cclxuICAgZ2V0IG1pblooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjEueiwgdGhpcy52Mi56LCB0aGlzLnYzLnopO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MS54LCB0aGlzLnYyLngsIHRoaXMudjMueCk7XHJcbiAgIH1cclxuICAgZ2V0IG1heFkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjEueSwgdGhpcy52Mi55LCB0aGlzLnYzLnkpO1xyXG4gICB9XHJcbiAgIGdldCBtYXhaKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYxLnosIHRoaXMudjIueiwgdGhpcy52My56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGNvbnN0IHYxID0gdGhpcy52MS50b1ZlYzMoKTtcclxuICAgICAgY29uc3QgdjIgPSB0aGlzLnYyLnRvVmVjMygpO1xyXG4gICAgICBjb25zdCB2MyA9IHRoaXMudjMudG9WZWMzKCk7XHJcblxyXG4gICAgICBjb25zdCBhID0gdjIuc3VidHJhY3QodjEpO1xyXG4gICAgICBjb25zdCBiID0gdjMuc3VidHJhY3QodjIpO1xyXG4gICAgICByZXR1cm4gYS5jcm9zcyhiKS5ub3JtYWxpemUoKTtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElWZWMzLCBWZWMzIH0gZnJvbSAnLi9WZWMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRWZWMzIGltcGxlbWVudHMgSVZlYzMge1xyXG5cclxuICAgcHJpdmF0ZSB2YWx1ZXM6IG51bWJlcltdO1xyXG4gICBwcml2YXRlIGluZGV4OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAwXTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAwXSA9IHZhbDtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMV07XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMV0gPSB2YWw7XHJcbiAgIH1cclxuICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDJdO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9WZWMzKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdKTtcclxuICAgfVxyXG59IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xyXG5pbXBvcnQgeyBWZWMzLCBJVmVjMyB9IGZyb20gJy4vVmVjJztcclxuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICcuL0JvdW5kaW5nQm94JztcclxuaW1wb3J0IHsgQm91bmRpbmdQdHMgfSBmcm9tICcuL0JvdW5kaW5nUHRzJztcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSAnLi9JbmRleGVkVHJpYW5nbGUnO1xyXG5pbXBvcnQgeyBJbmRleGVkVmVjMyB9IGZyb20gJy4vSW5kZXhlZFZlYzMnO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4uL1V0aWwvR2xvYmFscyc7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSAnLi4vVXRpbC9Qcm9maWxlcic7XHJcbmltcG9ydCB7IEJsb2JGaWxlIH0gZnJvbSAnLi4vVXRpbC9CbG9iRmlsZSc7XHJcblxyXG5leHBvcnQgZW51bSBOb3JtYWxUeXBlIHtcclxuICAgU21vb3RoLFxyXG4gICBGbGF0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyaWFuZ2xlT2JqRGF0YSB7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgc291cmNlOiBzdHJpbmc7XHJcbiAgIHZlcnRpY2VzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIG5vcm1hbHM6IEZsb2F0MzJBcnJheTtcclxuICAgaW5kaWNlczogSW50MzJBcnJheTtcclxuICAgYm94TWluOiBWZWMzO1xyXG4gICBib3hNYXg6IFZlYzM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciByZXByZXNlbnRpbmcgYW4gb2JqZWN0IGZyb20gYSBidW5jaCBvZiB0cmlhbmdsZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmoge1xyXG4gICBwdWJsaWMgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgIHB1YmxpYyBub3JtYWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwdWJsaWMgaW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgcHVibGljIGJveCA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICBwdWJsaWMgc291cmNlOiBzdHJpbmc7XHJcbiAgIHByaXZhdGUgYm91bmRpbmdQdHM6IEJvdW5kaW5nUHRzO1xyXG5cclxuICAgcHVibGljIGdldCBudW1WZXJ0aWNlcygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVRyaWFuZ2xlcygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRpY2VzLmxlbmd0aCAvIDM7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LndpZHRoO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3guaGVpZ2h0O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveC5kZXB0aDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkaWFnb25hbCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3guZGlhZ29uYWw7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgY2VudGVyKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3guY2VudGVyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobmFtZT86IHN0cmluZykge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0VHJpYW5nbGUoaW5kZXg6IG51bWJlcik6IEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgICAgIGNvbnN0IGkxID0gdGhpcy5pbmRpY2VzWzMgKiBpbmRleCArIDBdO1xyXG4gICAgICBjb25zdCBpMiA9IHRoaXMuaW5kaWNlc1szICogaW5kZXggKyAxXTtcclxuICAgICAgY29uc3QgaTMgPSB0aGlzLmluZGljZXNbMyAqIGluZGV4ICsgMl07XHJcbiAgICAgIHJldHVybiBuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHRoaXMubm9ybWFscywgaTEsIGkyLCBpMyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBwdXNoUXVhZCh2MTogSVZlYzMsIHYyOiBJVmVjMywgdjM6IElWZWMzLCB2NDogSVZlYzMpOiB2b2lkIHtcclxuXHJcbiAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHYxLCB2MiwgdjMpO1xyXG4gICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2MiwgdjQsIHYzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHB1c2hUcmlhbmdsZSh2MTogSVZlYzMsIHYyOiBJVmVjMywgdjM6IElWZWMzKTogdm9pZCB7XHJcblxyXG4gICAgICAvLyBhZGQgaW5kaWNlc1xyXG4gICAgICBjb25zdCBpMSA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgIGNvbnN0IGkyID0gaTEgKyAxO1xyXG4gICAgICBjb25zdCBpMyA9IGkxICsgMjtcclxuICAgICAgdGhpcy5pbmRpY2VzLnB1c2goaTEsIGkyLCBpMyk7XHJcblxyXG4gICAgICAvLyBhZGQgdmVydGljZXNcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHYxLngsIHYxLnksIHYxLnosIHYyLngsIHYyLnksIHYyLnosIHYzLngsIHYzLnksIHYzLnopO1xyXG4gICAgICB0aGlzLmJveC51cGRhdGUodjEpO1xyXG4gICAgICB0aGlzLmJveC51cGRhdGUodjIpO1xyXG4gICAgICB0aGlzLmJveC51cGRhdGUodjMpO1xyXG5cclxuICAgICAgLy8gYWRkIG5vcm1hbHNcclxuICAgICAgY29uc3QgdHJpID0gbmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCB0aGlzLm5vcm1hbHMsIGkxLCBpMiwgaTMpO1xyXG4gICAgICBjb25zdCBub3JtYWwgPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5ub3JtYWwudmFsdWVzKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm5vcm1hbC52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbHModHlwZTogTm9ybWFsVHlwZSk6IHZvaWQge1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcbiAgICAgICAgIGNvbnN0IG11bHRpTm9ybVZlcnRpY2VzOiBNdWx0aU5vcm1WZXJ0ZXhbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlcy5wdXNoKG5ldyBNdWx0aU5vcm1WZXJ0ZXgoKSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0b3JlIHRoZSBub3JtYWxzIHdpdGggZWFjaCB2ZXJ0ZXggLSB3ZSdsbCBsYXRlciBhdmVyYWdlIHRoZXNlXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmkgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmkxXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaTJdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pM10ucHVzaChuKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gcG9wdWxhdGUgdGhlIG5vcm1hbHMgYXJyYXlcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXVsdGlOb3JtVmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubXVsdGlOb3JtVmVydGljZXNbaV0ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gdG8gZ28gdGhpcyB3YXkgd2UgbmVlZCB0byBoYXZlIGEgdW5pcXVlIHZlY3RvciBhbmQgbm9ybWFsIGZvciBlYWNoIHRyaWFuZ2xlXHJcbiAgICAgICAgIC8vIGNvcm5lci4gQmxvdyBhd2F5IHRoZSBvbGQgc3R1ZmYgYW5kIHJlYnVpbGRcclxuICAgICAgICAgY29uc3Qgb2xkSW5kaWNlcyA9IHRoaXMuaW5kaWNlcztcclxuICAgICAgICAgY29uc3Qgb2xkVmVydGljZXMgPSB0aGlzLnZlcnRpY2VzO1xyXG5cclxuICAgICAgICAgLy8gcmVzZXQgZXZlcnl0aGluZ1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgIHRoaXMubm9ybWFscyA9IFtdO1xyXG4gICAgICAgICB0aGlzLmluZGljZXMgPSBbXTtcclxuXHJcbiAgICAgICAgIC8vIHJlYnVpbGRcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRJbmRpY2VzLmxlbmd0aCAvIDM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB2MSA9IG5ldyBJbmRleGVkVmVjMyhvbGRWZXJ0aWNlcywgb2xkSW5kaWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgY29uc3QgdjIgPSBuZXcgSW5kZXhlZFZlYzMob2xkVmVydGljZXMsIG9sZEluZGljZXNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHYzID0gbmV3IEluZGV4ZWRWZWMzKG9sZFZlcnRpY2VzLCBvbGRJbmRpY2VzWzMgKiBpICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2MSwgdjIsIHYzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgeChpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgeShpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDFdO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgeihpOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1szICogaSArIDJdO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZmluZEJvdW5kcygpOiB2b2lkIHtcclxuICAgICAgY29uc29sZS5sb2coJ2ZpbmRpbmcgYm91bmRzJyk7XHJcbiAgICAgIGNvbnN0IGJveCA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHRyaSA9IHRoaXMuZ2V0VHJpYW5nbGUoaSk7XHJcbiAgICAgICAgIGJveC51cGRhdGUodHJpLnYxKTtcclxuICAgICAgICAgYm94LnVwZGF0ZSh0cmkudjIpO1xyXG4gICAgICAgICBib3gudXBkYXRlKHRyaS52Myk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm94ID0gYm94O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQnJlYWtzIHRoZSBvYmplY3QgaW50byBldmVubHkgc3BhY2VkIHZvbHVtZXMuIFRoZSBudW1iZXIgb2Ygdm9sdW1lcyBpcyBhdXRvbWF0aWNhbGx5XHJcbiAgICAqIGRldGVybWluZWQgYmFzZWQgb24gdGhlIG51bWJlciBvZiB0cmlhbmdsZXMuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0Qm91bmRpbmdQdHMoKTogQm91bmRpbmdQdHMge1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm91bmRpbmdQdHMpIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRpbmdQdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG51bVN0ZXBzID0gMTU7XHJcblxyXG4gICAgICBjb25zdCBib3hlczogQm91bmRpbmdCb3hbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KG51bVN0ZXBzLCAzKTsgaSsrKSB7XHJcbiAgICAgICAgIGJveGVzLnB1c2gobmV3IEJvdW5kaW5nQm94KCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2ID0gbmV3IFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgdi54ID0gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdO1xyXG4gICAgICAgICB2LnkgPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIHYueiA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAyXTtcclxuICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHYueCAtIHRoaXMuYm94Lm1pbi54KSAvICh0aGlzLmJveC53aWR0aCkpO1xyXG4gICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodi55IC0gdGhpcy5ib3gubWluLnkpIC8gKHRoaXMuYm94LmhlaWdodCkpO1xyXG4gICAgICAgICBsZXQgeiA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodi56IC0gdGhpcy5ib3gubWluLnopIC8gKHRoaXMuYm94LmRlcHRoKSk7XHJcbiAgICAgICAgIHggPSBjbGFtcCh4LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB5ID0gY2xhbXAoeSwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeiA9IGNsYW1wKHosIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIGNvbnN0IGluZGV4ID0geCArIHkgKiBudW1TdGVwcyArIHogKiBudW1TdGVwcyAqIG51bVN0ZXBzO1xyXG4gICAgICAgICBib3hlc1tpbmRleF0udXBkYXRlKHYpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBib3hNYXAgPSBuZXcgTWFwPG51bWJlciwgQm91bmRpbmdCb3g+KCk7XHJcbiAgICAgIGxldCBib3hDb3VudCA9IDA7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtU3RlcHM7IHgrKykge1xyXG4gICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG51bVN0ZXBzOyB5KyspIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0OiB7XHJcbiAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIGJveDogQm91bmRpbmdCb3gsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBsYXN0OiB7XHJcbiAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIGJveDogQm91bmRpbmdCb3gsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbnVtU3RlcHM7IHorKykge1xyXG4gICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHggKyB5ICogbnVtU3RlcHMgKyB6ICogbnVtU3RlcHMgKiBudW1TdGVwcztcclxuICAgICAgICAgICAgICAgY29uc3QgYm94ID0gYm94ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICBpZiAoYm94Lm1pbi54ID09PSBOdW1iZXIuTUFYX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGJveENvdW50Kys7XHJcbiAgICAgICAgICAgICAgIGlmICghZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgZmlyc3QgPSB7IGluZGV4OiBpbmRleCwgYm94OiBib3ggfTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBsYXN0ID0geyBpbmRleDogaW5kZXgsIGJveDogYm94IH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmaXJzdCAmJiBib3hNYXAuaGFzKGZpcnN0LmluZGV4KSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgYm94TWFwLnNldChmaXJzdC5pbmRleCwgZmlyc3QuYm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGFzdCAmJiBib3hNYXAuaGFzKGxhc3QuaW5kZXgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICBib3hNYXAuc2V0KGxhc3QuaW5kZXgsIGxhc3QuYm94KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHB0czogVmVjM1tdID0gW107XHJcbiAgICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICAgICBpZiAoYm94Lm1pbi54ICE9PSBOdW1iZXIuTUFYX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgIHB0cy5wdXNoKC4uLmJveC5jb3JuZXJzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYm91bmRpbmdQdHMgPSBuZXcgQm91bmRpbmdQdHMocHRzKTtcclxuICAgICAgcmV0dXJuIHRoaXMuYm91bmRpbmdQdHM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIGluIHRoZSBmb3IgLk9CSiBmaWxlIGZvcm1hdFxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIHRvT2JqU3RyaW5nKGRpZ2l0cyA9IDgpOiBzdHJpbmcge1xyXG5cclxuICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICBzdHIgKz0gJyMgVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCArICdcXG4nO1xyXG4gICAgICBzdHIgKz0gJyMgVHJpYW5nbGVzOiAnICsgdGhpcy5udW1UcmlhbmdsZXMgKyAnXFxuJztcclxuICAgICAgc3RyICs9ICdcXG4nO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgdiA9IHRoaXMudmVydGljZXM7XHJcbiAgICAgICAgIHN0ciArPSAndiAnICsgdlszICogaSArIDBdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2WzMgKiBpICsgMV0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHZbMyAqIGkgKyAyXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgY29uc3QgbiA9IHRoaXMubm9ybWFscztcclxuICAgICAgICAgc3RyICs9ICd2biAnICsgblszICogaSArIDBdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuWzMgKiBpICsgMV0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG5bMyAqIGkgKyAyXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHQgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG4gICAgICAgICBzdHIgKz0gJ2YgJyArXHJcbiAgICAgICAgICAgICh0LmkxICsgMSkgKyAnLy8nICsgKHQuaTEgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmkyICsgMSkgKyAnLy8nICsgKHQuaTIgKyAxKSArICcgJyArXHJcbiAgICAgICAgICAgICh0LmkzICsgMSkgKyAnLy8nICsgKHQuaTMgKyAxKSArICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSk6IHZvaWQge1xyXG5cclxuICAgICAgaWYgKG5vcm1hbFR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcblxyXG4gICAgICAgICBjb25zdCB2ZXJ0ZXhUb0luZGV4TWFwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgICAgY29uc3QgaW5kZXhUb0luZGV4TWFwID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgIC8vIGZpcnN0IGdlbmVyYXRlIGEgdW5pcXVlIHNldCBvZiB2ZXJ0aWNlc1xyXG4gICAgICAgICBjb25zdCB1bmlxdWVWZXJ0aWNlczogSW5kZXhlZFZlYzNbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2xkVmVydGV4ID0gbmV3IEluZGV4ZWRWZWMzKHRoaXMudmVydGljZXMsIGkpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0udG9GaXhlZCg0KSArICcgJyArIHRoaXMudmVydGljZXNbMyAqIGkgKyAxXS50b0ZpeGVkKDQpICsgJyAnICsgdGhpcy52ZXJ0aWNlc1szICogaSArIDJdLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZEluZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgIGxldCBuZXdJbmRleDtcclxuICAgICAgICAgICAgaWYgKHZlcnRleFRvSW5kZXhNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgLy8ganVzdCBtYXAgdGhlIG9sZCBpbmRleCB0byB0aGUgZXhpc3RpbmcgZW50cnlcclxuICAgICAgICAgICAgICAgbmV3SW5kZXggPSB2ZXJ0ZXhUb0luZGV4TWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZW50cnlcclxuICAgICAgICAgICAgICAgbmV3SW5kZXggPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICB2ZXJ0ZXhUb0luZGV4TWFwLnNldChrZXksIG5ld0luZGV4KTtcclxuICAgICAgICAgICAgICAgdW5pcXVlVmVydGljZXMucHVzaChvbGRWZXJ0ZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB0cmFuc2xhdGlvblxyXG4gICAgICAgICAgICBpbmRleFRvSW5kZXhNYXAuc2V0KG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHJlc2V0IGFsbCB0aGUgdmVydGljZXNcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1bmlxdWVWZXJ0aWNlc1tpXS54KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHVuaXF1ZVZlcnRpY2VzW2ldLnkpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godW5pcXVlVmVydGljZXNbaV0ueik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHJlbWFwIGFsbCBpbmRpY2VzXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5pbmRpY2VzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljZXNbaV0gPSBpbmRleFRvSW5kZXhNYXAuZ2V0KG9sZEluZGV4ICsgMSkgLSAxO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8gZm9yIGZsYXQgbm9ybWFscy4gTmV3IHZlcnRpY2VzIGFuZCBub3JtYWxzIGFyZSBjcmVhdGVkIGluIFxyXG4gICAgICAgICAvLyBjb21wdXRlTm9ybWFscygpIGJlbG93IGlmIG5lZWRlZFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKG5vcm1hbFR5cGUpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdHJpbShib3g6IEJvdW5kaW5nQm94KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgY29uc3QgaW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHRyaSA9IHRoaXMuZ2V0VHJpYW5nbGUoaSk7XHJcblxyXG4gICAgICAgICBpZiAoYm94Lmluc2lkZSh0cmkudjEpICYmIGJveC5pbnNpZGUodHJpLnYyKSAmJiBib3guaW5zaWRlKHRyaS52MykpIHtcclxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaS5pMSk7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmkuaTIpO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpLmkzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0cmltbWVkICcgKyAodGhpcy5pbmRpY2VzLmxlbmd0aCAtIGluZGljZXMubGVuZ3RoKSArICcgdHJpYW5nbGVzJyk7XHJcbiAgICAgIHRoaXMuaW5kaWNlcyA9IGluZGljZXM7XHJcbiAgICAgIHRoaXMuZmluZEJvdW5kcygpO1xyXG4gICAgICBwLmxvZygnVHJpbSBDb21wbGV0ZScpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbWlycm9yKHg6IG51bWJlciwgYWRkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGlmIChhZGQpIHtcclxuICAgICAgICAgLy8gZHVwbGljYXRlIHZlcnRpY2VzXHJcbiAgICAgICAgIGNvbnN0IG51bVZlcnRpY2VzID0gdGhpcy5udW1WZXJ0aWNlcztcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXNbMyAqIGkgKyAwXSAtPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2goLXRoaXMudmVydGljZXNbMyAqIGkgKyAwXSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0aGlzLnZlcnRpY2VzWzMgKiBpICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godGhpcy52ZXJ0aWNlc1szICogaSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLXRoaXMubm9ybWFsc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2godGhpcy5ub3JtYWxzWzMgKiBpICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh0aGlzLm5vcm1hbHNbMyAqIGkgKyAyXSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGNvbnN0IG51bUluZGljZXMgPSB0aGlzLmluZGljZXMubGVuZ3RoO1xyXG4gICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gbnVtVmVydGljZXM7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtSW5kaWNlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKHN0YXJ0SW5kZXggKyB0aGlzLmluZGljZXNbaV0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIHJlZmxlY3QgdmVydGljZXNcclxuICAgICAgICAgY29uc3QgbnVtVmVydGljZXMgPSB0aGlzLm51bVZlcnRpY2VzO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1szICogaSArIDBdID0geCArICh4IC0gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzWzMgKiBpICsgMF0gPSAtdGhpcy5ub3JtYWxzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maW5kQm91bmRzKCk7XHJcblxyXG4gICAgICBwLmxvZygnTWlycm9yIENvbXBsZXRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyByZXZlcnNlKCk6IHZvaWQge1xyXG4gICAgICBjb25zdCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICAvLyByZWZsZWN0IHZlcnRpY2VzXHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmNlbnRlci54O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0gPSB4ICsgKHggLSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHNbMyAqIGkgKyAwXSA9IC10aGlzLm5vcm1hbHNbMyAqIGkgKyAwXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVvcmRlciB0cmlhbmdsZXMgdG8gcHJlc2VydmUgZnJvbnQtYmFjayBmYWNpbmdcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IGkxID0gdGhpcy5pbmRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIGNvbnN0IGkyID0gdGhpcy5pbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlc1szICogaSArIDBdID0gaTI7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlc1szICogaSArIDFdID0gaTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdSZXZlcnNlIENvbXBsZXRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21iaW5lKHRPYmo6IFRyaWFuZ2xlT2JqKTogdm9pZCB7XHJcblxyXG4gICAgICAvLyBzYXZlIHRoZSB2YWx1ZSBmb3IgdGhlIGZpcnN0IGluZGV4IG9mIHRoZSBjb21iaW5lZCBvYmplY3RzXHJcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLm51bVZlcnRpY2VzO1xyXG5cclxuICAgICAgLy8gYWRkIHRoZSBvdGhlciB2ZXJ0aWNlcyBhbmQgbm9ybWFscyB0byBvdXJzXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godE9iai52ZXJ0aWNlc1tpXSk7XHJcbiAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHRPYmoubm9ybWFsc1tpXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFkZCB0aGUgb3RoZXIgaW5kaWNlcywgYnV0IG9mZnNldCB0aGVtIHByb3Blcmx5XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdE9iai5pbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKHN0YXJ0SW5kZXggKyB0T2JqLmluZGljZXNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBtZXJnZSB0aGUgYm91bmRpbmcgYm94ZXNcclxuICAgICAgdGhpcy5ib3gubWVyZ2UodE9iai5ib3gpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9EYXRhKCk6IElUcmlhbmdsZU9iakRhdGEge1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICB2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKSxcclxuICAgICAgICAgbm9ybWFsczogbmV3IEZsb2F0MzJBcnJheSh0aGlzLm5vcm1hbHMpLFxyXG4gICAgICAgICBpbmRpY2VzOiBuZXcgSW50MzJBcnJheSh0aGlzLmluZGljZXMpLFxyXG4gICAgICAgICBib3hNaW46IHRoaXMuYm94Lm1pbi5jbG9uZSgpLFxyXG4gICAgICAgICBib3hNYXg6IHRoaXMuYm94Lm1heC5jbG9uZSgpLFxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbURhdGEoZGF0YTogSVRyaWFuZ2xlT2JqRGF0YSk6IFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgICAgIGNvbnN0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmooKTtcclxuICAgICAgdE9iai5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICB0T2JqLnZlcnRpY2VzID0gQXJyYXkuZnJvbShkYXRhLnZlcnRpY2VzKTtcclxuICAgICAgdE9iai5ub3JtYWxzID0gQXJyYXkuZnJvbShkYXRhLm5vcm1hbHMpO1xyXG4gICAgICB0T2JqLmluZGljZXMgPSBBcnJheS5mcm9tKGRhdGEuaW5kaWNlcyk7XHJcbiAgICAgIHRPYmouYm94ID0gbmV3IEJvdW5kaW5nQm94KG5ldyBWZWMzKGRhdGEuYm94TWluLnZhbHVlcyksIG5ldyBWZWMzKGRhdGEuYm94TWF4LnZhbHVlcykpO1xyXG4gICAgICByZXR1cm4gdE9iajtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvQmxvYigpOiBCbG9iIHtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBhIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbnN0IGluZm8gPSB7XHJcbiAgICAgICAgIEZpbGVUeXBlOiAnQmluYXJ5IE9CSicsXHJcbiAgICAgICAgIFZlcnNpb246ICcxLjAnLFxyXG4gICAgICAgICBOYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgIFNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGdldCB0aGUgcmF3IGRhdGFcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMudG9EYXRhKCk7XHJcblxyXG4gICAgICAvLyBicmVhayBpdCBpbnRvIHBhcnRzXHJcbiAgICAgIGNvbnN0IHBhcnRzOiBCbG9iUGFydFtdID0gW107XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS52ZXJ0aWNlcyk7XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS5ub3JtYWxzKTtcclxuICAgICAgcGFydHMucHVzaChkYXRhLmluZGljZXMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5ib3hNaW4udmFsdWVzKSk7XHJcbiAgICAgIHBhcnRzLnB1c2gobmV3IEZsb2F0MzJBcnJheShkYXRhLmJveE1heC52YWx1ZXMpKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgQmxvYlxyXG4gICAgICByZXR1cm4gQmxvYkZpbGUuY3JlYXRlQmxvYihpbmZvLCBwYXJ0cyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZnJvbUJsb2IoYmxvYjogQmxvYik6IFByb21pc2U8VHJpYW5nbGVPYmo+IHtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBUcmlhbmdsZU9iai5ibG9iVG9EYXRhKGJsb2IpO1xyXG4gICAgICByZXR1cm4gVHJpYW5nbGVPYmouZnJvbURhdGEoZGF0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgYmxvYlRvRGF0YShibG9iOiBCbG9iKTogUHJvbWlzZTxJVHJpYW5nbGVPYmpEYXRhPiB7XHJcblxyXG4gICAgICBjb25zdCBiRmlsZSA9IGF3YWl0IEJsb2JGaWxlLmV4dHJhY3QoYmxvYik7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICBuYW1lOiBiRmlsZS5pbmZvLk5hbWUsXHJcbiAgICAgICAgIHNvdXJjZTogYkZpbGUuaW5mby5Tb3VyY2UsXHJcbiAgICAgICAgIHZlcnRpY2VzOiBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzBdLmFycmF5QnVmZmVyKCkpLFxyXG4gICAgICAgICBub3JtYWxzOiBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzFdLmFycmF5QnVmZmVyKCkpLFxyXG4gICAgICAgICBpbmRpY2VzOiBuZXcgSW50MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1syXS5hcnJheUJ1ZmZlcigpKSxcclxuICAgICAgICAgYm94TWluOiBuZXcgVmVjMyhBcnJheS5mcm9tKG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbM10uYXJyYXlCdWZmZXIoKSkpKSxcclxuICAgICAgICAgYm94TWF4OiBuZXcgVmVjMyhBcnJheS5mcm9tKG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbNF0uYXJyYXlCdWZmZXIoKSkpKSxcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBjb21wdXRlIG5vcm1hbHMgZm9yIHZlcnRpY2VzIHRoYXQgam9pbiBtdWx0aXBsZSBmYWNlc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlOb3JtVmVydGV4IHtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBWZWMzKSB7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbm9ybWFsIGJ5IGF2ZXJhZ2luZyBhbGwgdGhlIGluZGl2aWR1YWwgbm9ybWFscyBhc3NvY2lhdGVkIHdpdGggdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBub3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGNvbnN0IG4gPSBuZXcgVmVjMygpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9ybWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBuLnggKz0gdGhpcy5ub3JtYWxzW2ldLng7XHJcbiAgICAgICAgIG4ueSArPSB0aGlzLm5vcm1hbHNbaV0ueTtcclxuICAgICAgICAgbi56ICs9IHRoaXMubm9ybWFsc1tpXS56O1xyXG4gICAgICB9XHJcbiAgICAgIG4ueCAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBuLnkgLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi56IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcblxyXG4gICAgICByZXR1cm4gbjtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gJy4vVHJpYW5nbGVPYmonO1xyXG5pbXBvcnQgeyBTdGF0dXNGdW5jdGlvbiB9IGZyb20gJy4uL1V0aWwvR2xvYmFscyc7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSAnLi4vVXRpbC9Qcm9maWxlcic7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBsb2FkcyBhIC5vYmogZmlsZSBhbmQgY3JlYXRlcyB0cmlhbmdsZXMgZm9yIGl0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpGaWxlIGV4dGVuZHMgVHJpYW5nbGVPYmoge1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgc3JjOiBzdHJpbmcsIHVwZGF0ZVN0YXR1cz86IFN0YXR1c0Z1bmN0aW9uKSB7XHJcblxyXG4gICAgICBzdXBlcihuYW1lKTtcclxuXHJcbiAgICAgIC8vIHJlY29yZCB0aGUgc3RhdHVzIGZ1bmN0aW9uLiBJZiBvbmUgaXMgbm90IHN1cHBsaWVkLCBjcmVhdGUgb25lIHRoYXQgZG9lcyBub3RoaW5nXHJcbiAgICAgIGlmICghdXBkYXRlU3RhdHVzKSB7XHJcbiAgICAgICAgIHVwZGF0ZVN0YXR1cyA9IChzdGF0dXMpID0+IHsgcmV0dXJuOyB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnBhcnNlKHNyYywgdXBkYXRlU3RhdHVzKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZUZhY2UobGluZTogc3RyaW5nKTogeyBpVjogbnVtYmVyW10sIGlOOiBudW1iZXJbXSB9IHtcclxuICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICBpVjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgICAgIGlOOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICBjb25zdCBudW1WYWxzID0gdG9rZW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmFsczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHZhbHMgPSB0b2tlbnNbaSArIDFdLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgIHJldC5pVi5wdXNoKHBhcnNlSW50KHZhbHNbMF0pIC0gMSk7XHJcbiAgICAgICAgIGlmICh2YWxzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICByZXQuaU4ucHVzaChwYXJzZUludCh2YWxzWzJdKSAtIDEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZShzcmM6IHN0cmluZywgdXBkYXRlU3RhdHVzOiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgdXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nJyk7XHJcbiAgICAgIGxldCB0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIGNvbnN0IHAyID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIGNvbnN0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgY29uc3QgbGluZXMgPSBzcmMuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBwLmxvZygnc3BsaXQnKTtcclxuXHJcbiAgICAgIGNvbnN0IHZlcnRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBjb25zdCBub3JtYWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBjb25zdCB2SW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgY29uc3QgbkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCBtYXRjaCA9IHRydWU7XHJcbiAgICAgIGxldCBjb250YWluc05vcm1hbHMgPSB0cnVlO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAvLyByZXBvcnQgcHJvZ3Jlc3MgZXZlcnkgNTAgbXNcclxuICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0ID4gNTApIHtcclxuICAgICAgICAgICAgdXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nOiAnICsgKDEwMCAqIGkgLyBsaW5lcy5sZW5ndGgpLnRvRml4ZWQoKSArICclJyk7XHJcbiAgICAgICAgICAgIHQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgndiAnKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzFdKSk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1szXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgndm4gJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzFdKSk7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbM10pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ2YgJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5wYXJzZUZhY2UobGluZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgIGlmIChyZXQuaVYubGVuZ3RoICE9PSByZXQuaU4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5zTm9ybWFscyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vcm1hbHMgbm90IHNwZWNpZmllZCBpbiBmaWxlLiBGbGF0IG5vcm1hbHMgd2lsbCBiZSBjb21wdXRlZC4nKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldC5pVi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICBpZiAocmV0LmlWW2ldICE9IHJldC5pTltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1ZlcnRpY2VzIGFuZCBub3JtYWxzIGRvblxcJ3QgbWF0Y2guIENvbnRlbnQgd2lsbCBiZSByZS1pbmRleGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmV0LmlWLmxlbmd0aCA9PT0gNCkge1xyXG5cclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdKTtcclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsyXSwgcmV0LmlWWzNdKTtcclxuICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pO1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzJdLCByZXQuaU5bM10pO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgIHZJbmRpY2VzLnB1c2gocmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSk7XHJcbiAgICAgICAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgICAgbkluZGljZXMucHVzaChyZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ3BhcnNlJyk7XHJcblxyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgICAgICB0aGlzLmluZGljZXMgPSB2SW5kaWNlcztcclxuXHJcbiAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgIHRoaXMubm9ybWFscyA9IFtdO1xyXG4gICAgICAgICB0aGlzLmluZGljZXMgPSBbXTtcclxuXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdkluZGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRpY2VzWzMgKiB2SW5kaWNlc1tpXSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsc1szICogbkluZGljZXNbaV0gKyAwXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbHNbMyAqIG5JbmRpY2VzW2ldICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWxzWzMgKiBuSW5kaWNlc1tpXSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2VzLnB1c2goaSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcC5sb2coJ3JlaW5kZXgnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLkZsYXQpO1xyXG4gICAgICAgICBwLmxvZygnY29tcHV0ZSBub3JtYWxzJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmluZEJvdW5kcygpO1xyXG4gICAgICBwLmxvZygnZmluZEJvdW5kcycpO1xyXG4gICAgICBwMi5sb2coJ1RvdGFsJyk7XHJcblxyXG4gICAgICB1cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6IDEwMCUnKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ05vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyaWFuZ2xlczogJyArIHRoaXMubnVtVHJpYW5nbGVzKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJVmVjMyB7XHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG4gICB6OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIFZlY3RvciBjbGFzcyBmb3IgdXNlIHdpdGggV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuY2xhc3MgVmVjIHtcclxuXHJcbiAgIC8qKiBUaGUgdmVjdG9yIHZhbHVlcy4gKi9cclxuICAgcHVibGljIHZhbHVlczogbnVtYmVyW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHVlc09yU2l6ZSBJZiBhIGFycmF5LCB0aGUgdmFsdWVzIGZvciB0aGUgdmVjdG9yLiBJZiBhIG51bWJlciwgdGhlIHNpemUgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih2YWx1ZXNPclNpemU6IG51bWJlciB8IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWx1ZXNPclNpemUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IFsuLi52YWx1ZXNPclNpemVdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBBcnJheSh2YWx1ZXNPclNpemUpO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlc09yU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gMDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIFRoZSB2ZWN0b3IgbWFnbml0dWRlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG1hZ25pdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBzdW0gKz0gdGhpcy52YWx1ZXNbaV0gKiB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteSB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVjMiBleHRlbmRzIFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMik7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IFZlYzIge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzIodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSB0byBhbm90aGVyIHBvaW50XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHBvaW50XHJcbiAgICAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgcG9pbnQgYW5kIHRoZSBvdGhlciBwb2ludFxyXG4gICAgKi9cclxuICAgcHVibGljIGRpc3RhbmNlKG90aGVyOiBWZWMyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLnggLSBvdGhlci54LCAyKSArIE1hdGgucG93KHRoaXMueSAtIG90aGVyLnksIDIpKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGRpZ2l0cyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGRpc3BsYXkuIFRoaXMgdmFsdWUgaXMgcGFzc2VkIHRvIHRvRml4ZWQoKS5cclxuICAgICogQHBhcmFtIGRpdmlkZXIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBlYWNoIG51bWJlci5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzID0gMiwgZGl2aWRlciA9ICcsJyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLngudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMueS50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWMzIGV4dGVuZHMgVmVjIGltcGxlbWVudHMgSVZlYzMge1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBnZXQgb3JpZ2luKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoWzAsIDAsIDBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgeC15IGNvbXBvbmVudHMgYXMgYSAyZCB2ZWNcclxuICAgICpcclxuICAgICogQHJldHVybiB0aGUgVmVjM1xyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4eSgpOiBWZWMyIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMyKFt0aGlzLngsIHRoaXMueV0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzModGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZGlnaXRzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gZGlzcGxheS4gVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gdG9GaXhlZCgpLlxyXG4gICAgKiBAcGFyYW0gZGl2aWRlciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGVhY2ggbnVtYmVyLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHMgPSAyLCBkaXZpZGVyID0gJywnKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMueC50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy55LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnoudG9GaXhlZChkaWdpdHMpO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIFJldHVybnMgYSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBWZWMzIHtcclxuICAgICAgY29uc3QgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgaWYgKG1hZyA9PT0gMCkge1xyXG4gICAgICAgICByZXR1cm4gbmV3IFZlYzMoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMubXVsdCgxIC8gbWFnKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyBtZW1iZXJzIGJ5IGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIG5ldyB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbXVsdGlwbGljYXRpb24gdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdCh2YWx1ZTogbnVtYmVyKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIHRoaXMueCAqIHZhbHVlLFxyXG4gICAgICAgICB0aGlzLnkgKiB2YWx1ZSxcclxuICAgICAgICAgdGhpcy56ICogdmFsdWUsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgdmVjdG9yIHBvaW50aW5nIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgbmVnYXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbmVnYXRlKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoWy10aGlzLngsIC10aGlzLnksIC10aGlzLnpdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFN1YnRyYWN0cyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBzdWJ0cmFjdC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWM6IFZlYzMpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLSB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAtIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC0gdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEFkZHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gYWRkLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFkZCh2ZWM6IFZlYzMpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gKyB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSArIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdICsgdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNyb3NzKG90aGVyOiBWZWMzKTogVmVjMyB7XHJcbiAgICAgIGNvbnN0IEEgPSB0aGlzLnZhbHVlcztcclxuICAgICAgY29uc3QgQiA9IG90aGVyLnZhbHVlcztcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgQVsxXSAqIEJbMl0gLSBBWzJdICogQlsxXSxcclxuICAgICAgICAgQVsyXSAqIEJbMF0gLSBBWzBdICogQlsyXSxcclxuICAgICAgICAgQVswXSAqIEJbMV0gLSBBWzFdICogQlswXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcG9pbnQgdG8gYSBzcGVjaWZpZWQgcG9pbnQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcHQgVGhlIHBvaW50LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgdG8gdGhlIHBvaW50LlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpc3RUb1BvaW50KHB0OiBWZWMzKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3QocHQpLm1hZ25pdHVkZSgpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQnVpbGRzIGEgVmVjNCBmcm9tIHRoaXMgVmVjM1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHcgVGhlIHcgY29tcG9uZW50IG9mIHRoZSBuZXcgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbmV3IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1ZlYzQodzogbnVtYmVyKTogVmVjNCB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjNChbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgd10pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWM0IGV4dGVuZHMgVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1syXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHoodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB3KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHcodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbM10gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB4LXkteiBjb21wb25lbnRzIGFzIGEgM2QgdmVjXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIHRoZSBWZWMzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHh5eigpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFt0aGlzLngsIHRoaXMueSwgdGhpcy56XSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogVmVjNCB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjNCh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIHgteS16IHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgY29tcHV0ZWQgYnkgZGl2aWRpbmcgdGhpcyB2ZWN0b3JzXHJcbiAgICAqIGVsZW1lbnRzIGJ5IHRoZSB3IHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4geC15LXogdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpdmlkZUJ5VygpOiBWZWMzIHtcclxuICAgICAgY29uc3QgdyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIE5vcm1hbGl6ZXMgdGhpcyB2ZWN0b3IsIGFuZCBzdG9yZXMgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbm9ybWFsaXplKCk6IFZlYzQge1xyXG4gICAgICBjb25zdCBtYWcgPSB0aGlzLm1hZ25pdHVkZSgpO1xyXG4gICAgICBjb25zdCByZXQgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXQudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIFZlYzQgZnJvbSBhIFZlYzMgb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSBWZWMzIG9iamVjdFxyXG4gICAgKiBAcGFyYW0gdyBUaGUgdyB2YWx1ZSBmb3IgdGhlIFZlYzRcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVZlYzModmVjOiBWZWMzLCB3ID0gMSk6IFZlYzQge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzQoW3ZlYy54LCB2ZWMueSwgdmVjLnosIHddKTtcclxuICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9