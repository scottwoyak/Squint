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
/*! exports provided: isMobile, env, clamp, toDeg, toRad, mix, toCss, toSizeStr, toTimeStr, getBooleanValue, iOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDeg", function() { return toDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCss", function() { return toCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSizeStr", function() { return toSizeStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTimeStr", function() { return toTimeStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBooleanValue", function() { return getBooleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOS", function() { return iOS; });
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var env = {
    isTesting: false
};
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
function toTimeStr(val) {
    if (val < 1000) {
        return val.toFixed(0) + ' ms';
    }
    else {
        return (val / 1000).toFixed(1) + ' s';
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
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals */ "./src/Util/Globals.ts");

/**
 * Utility class for tracking time
 */
var Stopwatch = /** @class */ (function () {
    function Stopwatch() {
        this.accumulatedMs = 0;
        this.startTime = performance.now();
        this._paused = false;
    }
    Object.defineProperty(Stopwatch.prototype, "paused", {
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Stopwatch.prototype.pause = function () {
        if (this._paused === false) {
            this._paused = true;
            this.accumulatedMs = this.elapsedMs;
            this.startTime = NaN;
        }
    };
    Stopwatch.prototype.resume = function () {
        if (this._paused === true) {
            this._paused = false;
            this.startTime = performance.now();
        }
    };
    Object.defineProperty(Stopwatch.prototype, "elapsedStr", {
        /**
         * The elapsed time in as a string
         */
        get: function () {
            return Object(_Globals__WEBPACK_IMPORTED_MODULE_0__["toTimeStr"])(this.elapsedMs);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedMs", {
        /**
         * The elapsed time in milliseconds
         */
        get: function () {
            return this.accumulatedMs + (performance.now() - this.startTime);
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
    /**
     * Resets elapsed time to 0
     */
    Stopwatch.prototype.restart = function () {
        this.startTime = performance.now();
        this.accumulatedMs = 0;
        this._paused = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcHMvVmlld2VyL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iU2hpbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9HbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1N0b3B3YXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL0JvdW5kaW5nQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvQm91bmRpbmdQdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL1RyaWFuZ2xlT2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVmVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLEtBQWtCO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsR0FBUztRQUNuQixJQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSx5Q0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSx5Q0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJ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QUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksaUNBQUk7YUFBUjtZQUNHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7YUFBUjtZQUNHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksaUNBQUk7YUFBUjtZQUNHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksaUNBQUk7YUFBUjtZQUNHLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBRU0sdUNBQWEsR0FBcEI7UUFDRyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxF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LENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSx3REFBVyxFQUFFLENBQUMsQ0FBQztTQUNoQztRQUVELElBQU0sQ0FBQyxHQUFHLElBQUkseUNBQUksRUFBRSxDQUFDO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FB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QUNJLHdCQUFTLEdBQWhCO1FBQ0csSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksSUFBSSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3QkFBUyxHQUFoQjtRQUNHLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQzthQUN2QjtTQUNIO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxhQUFRLEdBQXRCLFVBQXVCLEdBQVMsRUFBRSxDQUFLO1FBQUwseUJBQUs7UUFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNKLFdBQUM7QUFBRCxDQUFDLENBakp5QixHQUFHLEdBaUo1QiIsImZpbGUiOiJMb2FkZXJXb3JrZXIud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc3JjL0FwcHMvVmlld2VyL0xvYWRlcldvcmtlci50c1wiKTtcbiIsImltcG9ydCB7IElUcmlhbmdsZU9iakRhdGEsIFRyaWFuZ2xlT2JqIH0gZnJvbSAnLi4vLi4vVXRpbDNEL1RyaWFuZ2xlT2JqJztcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmpGaWxlIH0gZnJvbSAnLi4vLi4vVXRpbDNEL1RyaWFuZ2xlT2JqRmlsZSc7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgd29ya2VyIHRoYXQgbG9hZHMgYW5kIHByb2Nlc3NlcyB0aGUgLm9iaiBmaWxlXHJcbiAqL1xyXG5jb25zdCB3b3JrZXI6IFdvcmtlciA9IHNlbGYgYXMgYW55O1xyXG5cclxuLy8gSGFuZGxlciBmb3IgcmVjZWl2aW5nIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkXHJcbndvcmtlci5vbm1lc3NhZ2UgPSAoeyBkYXRhIH06IHsgZGF0YTogc3RyaW5nIH0pID0+IHtcclxuXHJcbiAgIC8vIHdoZW4gd2UgcmVjZWl2ZSBhIHN0cmluZyBhcyBhIG1lc3NhZ2UsIGl0J3MgdGhlIHVybCBvZiB0aGUgZmlsZSB0byBsb2FkXHJcbiAgIGxvYWRGaWxlKGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0byBsb2FkIGEgZmlsZVxyXG4gKiBcclxuICogQHBhcmFtIGZpbGUgVGhlIHVybCBvZiB0aGUgZmlsZSB0byBsb2FkXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkRmlsZShmaWxlOiBzdHJpbmcpIHtcclxuXHJcbiAgIC8vIHRoZSBpbml0aWFsIHN0YXR1cyBtZXNzYWdlXHJcbiAgIHdvcmtlci5wb3N0TWVzc2FnZSgnRG93bmxvYWRpbmcgMCUnKTtcclxuXHJcbiAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNodW5rc0FsbCA9IGF3YWl0IGZldGNoRGF0YShmaWxlKTtcclxuICAgICAgbGV0IGRhdGE6IElUcmlhbmdsZU9iakRhdGE7XHJcblxyXG4gICAgICBpZiAoZmlsZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcub2JqJykpIHtcclxuICAgICAgICAgLy8gZGVjb2RlIGludG8gYSBzdHJpbmdcclxuICAgICAgICAgY29uc3QgcmVzID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpLmRlY29kZShjaHVua3NBbGwpO1xyXG5cclxuICAgICAgICAgLy8gdHVybiB0aGUgLm9iaiBzdHJpbmcgaW50byB0cmlhbmdsZXNcclxuICAgICAgICAgY29uc3QgdE9iaiA9IG5ldyBUcmlhbmdsZU9iakZpbGUoZmlsZSwgcmVzLCAoc3RhdHVzKSA9PiB7IHdvcmtlci5wb3N0TWVzc2FnZShzdGF0dXMpOyB9KTtcclxuICAgICAgICAgZGF0YSA9IHRPYmoudG9EYXRhKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoZmlsZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuYmxvYicpKSB7XHJcbiAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY2h1bmtzQWxsXSk7XHJcbiAgICAgICAgIGRhdGEgPSBhd2FpdCBUcmlhbmdsZU9iai5ibG9iVG9EYXRhKGJsb2IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXR1cm4gdGhlIHJlc3VsdCBhcyBhcnJheXNcclxuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGRhdGEsIFtcclxuICAgICAgICAgZGF0YS52ZXJ0aWNlcy5idWZmZXIsXHJcbiAgICAgICAgIGRhdGEubm9ybWFscy5idWZmZXIsXHJcbiAgICAgICAgIGRhdGEuaW5kaWNlcy5idWZmZXIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbiAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGVycik7XHJcbiAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGZpbGU6IHN0cmluZyk6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG5cclxuICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaWxlKTtcclxuXHJcbiAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShyZXNwb25zZS5zdGF0dXMgKyAnOiAnICsgZmlsZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcclxuICAgY29uc3QgY29udGVudExlbmd0aCA9ICtyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1MZW5ndGgnKTtcclxuXHJcbiAgIC8vIGxvb3AgdG8gbG9hZCB0aGUgZGF0YSwgb25lIGNodW5rIGF0IGEgdGltZVxyXG4gICBsZXQgcmVjZWl2ZWRMZW5ndGggPSAwOyAvLyByZWNlaXZlZCB0aGF0IG1hbnkgYnl0ZXMgYXQgdGhlIG1vbWVudFxyXG4gICBsZXQgY2h1bmtzID0gW107IC8vIGFycmF5IG9mIHJlY2VpdmVkIGJpbmFyeSBjaHVua3MgKGNvbXByaXNlcyB0aGUgYm9keSlcclxuICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcclxuXHJcbiAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaHVua3MucHVzaCh2YWx1ZSk7XHJcbiAgICAgIHJlY2VpdmVkTGVuZ3RoICs9IHZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSgnRG93bmxvYWRpbmc6ICcgKyAoMTAwICogcmVjZWl2ZWRMZW5ndGggLyBjb250ZW50TGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICB9XHJcblxyXG4gICAvLyBjb25jYXRlbmF0ZSBjaHVua3MgaW50byBzaW5nbGUgVWludDhBcnJheVxyXG4gICBsZXQgY2h1bmtzQWxsID0gbmV3IFVpbnQ4QXJyYXkocmVjZWl2ZWRMZW5ndGgpOyAvLyAoNC4xKVxyXG4gICBsZXQgcG9zaXRpb24gPSAwO1xyXG4gICBmb3IgKGxldCBjaHVuayBvZiBjaHVua3MpIHtcclxuICAgICAgY2h1bmtzQWxsLnNldChjaHVuaywgcG9zaXRpb24pOyAvLyAoNC4yKVxyXG4gICAgICBwb3NpdGlvbiArPSBjaHVuay5sZW5ndGg7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBjaHVua3NBbGw7XHJcbn0iLCJpbXBvcnQgJy4vQmxvYlNoaW0nO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNsYXNzIGZvciBzbGljaW5nIHVwIEJsb2JzXHJcbiAqL1xyXG5jbGFzcyBCbG9iU2xpY2VyIHtcclxuXHJcbiAgIC8vIFRoZSBzdGFydCBieXRlIHZhbHVlIGZvciB0aGUgbmV4dCBzbGljZVxyXG4gICBwcml2YXRlIHN0YXJ0ID0gMDtcclxuXHJcbiAgIC8vIFRoZSBCbG9iIHdlJ3JlIHNsaWNpbmcgXHJcbiAgIHByaXZhdGUgYmxvYjogQmxvYjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gYmxvYiBUaGUgQmxvYiB0byBiZSBzbGljZWRcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihibG9iOiBCbG9iKSB7XHJcbiAgICAgIHRoaXMuYmxvYiA9IGJsb2I7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBuZXh0IHNsaWNlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgVGhlIHNsaWNlZCBCbG9iLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5leHQobGVuOiBudW1iZXIpOiBCbG9iIHtcclxuICAgICAgY29uc3QgYiA9IHRoaXMuYmxvYi5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0ICsgbGVuKTtcclxuICAgICAgdGhpcy5zdGFydCArPSBsZW47XHJcbiAgICAgIHJldHVybiBiO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGFuIEFycmF5QnVmZmVyLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQW4gQXJyYXlCdWZmZXIgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZXh0QXJyYXlCdWZmZXIobGVuOiBudW1iZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5leHQobGVuKS5hcnJheUJ1ZmZlcigpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGFuIEludDMyQXJyYXlcclxuICAgICpcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQW4gSW50MzJBcnJheSBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFzeW5jIG5leHRJbnQzMkFycmF5KGxlbjogbnVtYmVyKTogUHJvbWlzZTxJbnQzMkFycmF5PiB7XHJcbiAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShhd2FpdCB0aGlzLm5leHRBcnJheUJ1ZmZlcihsZW4pKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNsaWNlcyB0aGUgQmxvYiBhbmQgcmV0dXJucyBpdCBhcyBhIHN0cmluZ1xyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFzeW5jIG5leHRTdHJpbmcobGVuOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXh0KGxlbikudGV4dCgpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGNyZWF0aW9uIGFuZCBleHRyYWN0aW9uIG9mIGEgc2VsZiBkZXNjcmliaW5nIEJsb2IuIERhdGFcclxuICogaXMgc3RvcmVkIGFzOlxyXG4gKiBcclxuICogW251bUVudHJpZXNdIC0gVGhlIG51bWJlciBlbnRyaWVzIGluIHRoZSBmaWxlLiA0IGJ5dGUgSW50MzJcclxuICogW3NpemVzXSAtIFNpemVzIG9mIGFsbCB0aGUgZW50cmllcywgaW5jbHVkaW5nIHRoZSBpbmZvIG9iamVjdFxyXG4gKiBbaW5mb10gLSBVc2VyIHN1cHBsaWVkIGRhdGEgYXMgYSBKU09OIHN0cmluZ1xyXG4gKiBbZW50cnkgMV0gLSBGaXJzdCB1c2VyIGVudHJ5XHJcbiAqIFtlbnRyeSAyXSAtIFNlY29uZCB1c2VyIGVudHJ5XHJcbiAqIFsuLi5dXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvYkZpbGUge1xyXG4gICBwdWJsaWMgaW5mbzogYW55O1xyXG4gICBwdWJsaWMgcGFydHM6IEJsb2JbXSA9IFtdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiBoZWFkZXIgdG8gYmUgc3RvcmVkIHdpdGggdGhlIEJsb2JcclxuICAgICogQHBhcmFtIHBhcnRzIFRoZSBkYXRhIGNvbnRlbnRzIG9mIHRoZSBCbG9iXHJcbiAgICAqL1xyXG4gICBwcml2YXRlIGNvbnN0cnVjdG9yKGluZm86IG9iamVjdCwgcGFydHM6IEJsb2JbXSkge1xyXG4gICAgICB0aGlzLmluZm8gPSBpbmZvO1xyXG4gICAgICB0aGlzLnBhcnRzID0gcGFydHM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhIHJhdyBCbG9iIG9iamVjdCBpbnRvIGEgQmxvYkZpbGVcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBibG9iIFRoZSBCbG9iIHRvIHByb2Nlc3MuXHJcbiAgICAqIEByZXR1cm4gQSBCbG9iRmlsZSBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBleHRyYWN0KGJsb2I6IEJsb2IpOiBQcm9taXNlPEJsb2JGaWxlPiB7XHJcblxyXG4gICAgICBjb25zdCBibG9iU2xpY2VyID0gbmV3IEJsb2JTbGljZXIoYmxvYik7XHJcblxyXG4gICAgICAvLyBmaXJzdCBleHRyYWN0IHRoZSBudW1iZXIgb2YgZW50cmllc1xyXG4gICAgICBjb25zdCBudW1FbnRyaWVzID0gKGF3YWl0IGJsb2JTbGljZXIubmV4dEludDMyQXJyYXkoNCkpWzBdO1xyXG5cclxuICAgICAgLy8gdGhlIHRoZSBzaXplcyBhcnJheVxyXG4gICAgICBjb25zdCBzaXplcyA9IGF3YWl0IGJsb2JTbGljZXIubmV4dEludDMyQXJyYXkoNCAqIChudW1FbnRyaWVzICsgMSkpO1xyXG5cclxuICAgICAgLy8gdGhlbiB0aGUgaW5mbyBvYmplY3RcclxuICAgICAgY29uc3QganNvbkluZm8gPSBhd2FpdCBibG9iU2xpY2VyLm5leHRTdHJpbmcoc2l6ZXNbMF0pO1xyXG5cclxuICAgICAgLy8gdGhlbiBhbGwgdGhlIHN1YiBibG9ic1xyXG4gICAgICBjb25zdCBwYXJ0czogQmxvYltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRW50cmllczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHNpemUgPSBzaXplc1tpICsgMV07XHJcbiAgICAgICAgIHBhcnRzLnB1c2goYmxvYlNsaWNlci5uZXh0KHNpemUpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBCbG9iRmlsZShKU09OLnBhcnNlKGpzb25JbmZvKSwgcGFydHMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlIGEgQmxvYkZpbGUgQmxvYlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIGhlYWRlciB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQmxvYlxyXG4gICAgKiBAcGFyYW0gcGFydHMgVGhlIGRhdGEgY29udGVudHMgb2YgdGhlIEJsb2JcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQmxvYihpbmZvOiBvYmplY3QsIHBhcnRzOiBCbG9iUGFydFtdKTogQmxvYiB7XHJcblxyXG4gICAgICBjb25zdCBqc29uSW5mbyA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xyXG5cclxuICAgICAgLy8gQnVpbGQgdGhlIGFycmF5IG9mIHNpemVzXHJcbiAgICAgIGNvbnN0IHNpemVzOiBudW1iZXJbXSA9IFtqc29uSW5mby5sZW5ndGhdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgaWYgKHBhcnQgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goNCAqIHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChwYXJ0IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2goNCAqIHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChwYXJ0IGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHNpemVzLnB1c2gocGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSAnVW5zdXBwb3J0ZWQgQmxvYiBQYXJ0IFR5cGU6ICcgKyB0eXBlb2YgcGFydDtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhc3NlbWJsZSB0aGUgYmxvYiBwYXJ0c1xyXG4gICAgICBjb25zdCBhbGxQYXJ0czogQmxvYlBhcnRbXSA9IFtdO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKG5ldyBJbnQzMkFycmF5KFtwYXJ0cy5sZW5ndGhdKSk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2gobmV3IEludDMyQXJyYXkoc2l6ZXMpKTtcclxuICAgICAgYWxsUGFydHMucHVzaChqc29uSW5mbyk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2goLi4ucGFydHMpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBibG9iXHJcbiAgICAgIHJldHVybiBuZXcgQmxvYihhbGxQYXJ0cyk7XHJcbiAgIH1cclxufSIsIi8vIG5lZWRlZCBmb3IgU2FmYXJpXHJcbmlmICghQmxvYi5wcm90b3R5cGUuYXJyYXlCdWZmZXIpIHtcclxuICAgQmxvYi5wcm90b3R5cGUuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG5cclxuICAgICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdGFydCB0aGUgcmVhZFxyXG4gICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8vIG5lZWRlZCBmb3IgU2FmYXJpXHJcbmlmICghQmxvYi5wcm90b3R5cGUudGV4dCkge1xyXG5cclxuICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgQmxvYi5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uICgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG5cclxuICAgICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlY29kZSBpbnRvIGEgc3RyaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHR4dCA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKS5kZWNvZGUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHh0KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdGFydCB0aGUgcmVhZFxyXG4gICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuIiwiXHJcbmV4cG9ydCB0eXBlIFN0YXR1c0Z1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgbGV0IGVudiA9IHtcclxuICAgaXNUZXN0aW5nOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gdjEgKyBjbGFtcChtaXgsIDAsIDEpICogKHYyIC0gdjEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3MocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAoYSA9PT0gdW5kZWZpbmVkID8gJycgOiAnLCcgKyBhKSArICcpJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvU2l6ZVN0cih2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIGlmICh2YWwgPCAxMDI0KSB7XHJcbiAgICAgIHJldHVybiB2YWwgKyAnIGJ5dGVzJztcclxuICAgfVxyXG4gICBlbHNlIGlmICh2YWwgPCAxMDI0ICogMTAyNCkge1xyXG4gICAgICByZXR1cm4gKHZhbCAvIDEwMjQpLnRvRml4ZWQoMSkgKyAnIGtiJztcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuICh2YWwgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDEpICsgJyBtYic7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZVN0cih2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIGlmICh2YWwgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiB2YWwudG9GaXhlZCgwKSArICcgbXMnO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gKHZhbCAvIDEwMDApLnRvRml4ZWQoMSkgKyAnIHMnO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCb29sZWFuVmFsdWUodmFsdWU6IGJvb2xlYW4gfCAoKCkgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQgfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG4gICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZSgpO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlPUygpOiBib29sZWFuIHtcclxuICAgcmV0dXJuIFtcclxuICAgICAgJ2lQYWQgU2ltdWxhdG9yJyxcclxuICAgICAgJ2lQaG9uZSBTaW11bGF0b3InLFxyXG4gICAgICAnaVBvZCBTaW11bGF0b3InLFxyXG4gICAgICAnaVBhZCcsXHJcbiAgICAgICdpUGhvbmUnLFxyXG4gICAgICAnaVBvZCdcclxuICAgXS5pbmNsdWRlcyhuYXZpZ2F0b3IucGxhdGZvcm0pXHJcbiAgICAgIC8vIGlQYWQgb24gaU9TIDEzIGRldGVjdGlvblxyXG4gICAgICB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnTWFjJykgJiYgJ29udG91Y2hlbmQnIGluIGRvY3VtZW50KVxyXG59IiwiaW1wb3J0IHsgU3RvcHdhdGNoIH0gZnJvbSAnLi9TdG9wd2F0Y2gnO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGxvZ2dpbmcgdGltaW5nIG1lc3NhZ2VzIGZvciBwcm9maWxlIGNvZGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlciB7XHJcblxyXG4gICBwcml2YXRlIHN3ID0gbmV3IFN0b3B3YXRjaCgpO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBlbGFwc2VkIHRpbWUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdy5lbGFwc2VkTXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcmludHMgYSBtZXNzYWdlIHRvIGNvbnNvbGUgb2YgdGhlIGVsYXBzZWQgdGltZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG1zZyBUaGUgbWVzc2FnZSB0byBwcmludCB3aXRoIHRoZSB0aW1lXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZyArICcgJyArIHRoaXMuZWxhcHNlZE1zLnRvRml4ZWQoMSkgKyAnIG1zJyk7XHJcbiAgICAgIHRoaXMuc3cucmVzdGFydCgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyB0b1RpbWVTdHIgfSBmcm9tICcuL0dsb2JhbHMnO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIHRyYWNraW5nIHRpbWVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdG9wd2F0Y2gge1xyXG5cclxuICAgcHJpdmF0ZSBhY2N1bXVsYXRlZE1zID0gMDtcclxuICAgcHJpdmF0ZSBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgcHJpdmF0ZSBfcGF1c2VkID0gZmFsc2U7XHJcblxyXG4gICBwdWJsaWMgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5fcGF1c2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmFjY3VtdWxhdGVkTXMgPSB0aGlzLmVsYXBzZWRNcztcclxuICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBOYU47XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuX3BhdXNlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsYXBzZWQgdGltZSBpbiBhcyBhIHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBlbGFwc2VkU3RyKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0b1RpbWVTdHIodGhpcy5lbGFwc2VkTXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsYXBzZWQgdGltZSBpbiBtaWxsaXNlY29uZHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZWxhcHNlZE1zKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFjY3VtdWxhdGVkTXMgKyAocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBUaGUgZWxhcHNlZCB0aW1lIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBlbGFwc2VkUygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbGFwc2VkTXMgLyAxMDAwO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmVzZXRzIGVsYXBzZWQgdGltZSB0byAwXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgdGhpcy5hY2N1bXVsYXRlZE1zID0gMDtcclxuICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMsIElWZWMzLCBWZWM0IH0gZnJvbSAnLi9WZWMnO1xyXG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi9NYXQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWluTWF4IHtcclxuICAgcmVhZG9ubHkgbWluOiBudW1iZXI7XHJcbiAgIHJlYWRvbmx5IG1heDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm91bmRpbmdCb3gge1xyXG4gICBwdWJsaWMgbWluOiBWZWMzO1xyXG4gICBwdWJsaWMgbWF4OiBWZWMzO1xyXG5cclxuICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueCAtIHRoaXMubWluLng7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1heC55IC0gdGhpcy5taW4ueTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueiAtIHRoaXMubWluLno7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGlhZ29uYWwoKTogbnVtYmVyIHtcclxuICAgICAgY29uc3QgdyA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNvbnN0IGggPSB0aGlzLmhlaWdodDtcclxuICAgICAgY29uc3QgZCA9IHRoaXMuZGVwdGg7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodyAqIHcgKyBoICogaCArIGQgKiBkKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjZW50ZXIoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgICh0aGlzLm1pbi54ICsgdGhpcy5tYXgueCkgLyAyLFxyXG4gICAgICAgICAodGhpcy5taW4ueSArIHRoaXMubWF4LnkpIC8gMixcclxuICAgICAgICAgKHRoaXMubWluLnogKyB0aGlzLm1heC56KSAvIDIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNvcm5lcnMoKTogVmVjM1tdIHtcclxuICAgICAgY29uc3QgY29ybmVyczogVmVjM1tdID0gW107XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5taW4ueCwgdGhpcy5taW4ueSwgdGhpcy5taW4uel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1heC56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWluLngsIHRoaXMubWF4LnksIHRoaXMubWluLnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5taW4ueCwgdGhpcy5tYXgueSwgdGhpcy5tYXguel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1heC54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWluLnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5tYXgueCwgdGhpcy5tYXgueSwgdGhpcy5taW4uel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1heC54LCB0aGlzLm1heC55LCB0aGlzLm1heC56XSkpO1xyXG4gICAgICByZXR1cm4gY29ybmVycztcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKG1pbjogVmVjMyA9IG5ldyBWZWMzKFtOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFXSksXHJcbiAgICAgIG1heDogVmVjMyA9IG5ldyBWZWMzKFstTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFXSkpIHtcclxuICAgICAgdGhpcy5taW4gPSBtaW47XHJcbiAgICAgIHRoaXMubWF4ID0gbWF4O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGdldCBpbmZpbml0ZSgpOiBCb3VuZGluZ0JveCB7XHJcbiAgICAgIGNvbnN0IE1BWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcclxuICAgICAgY29uc3QgTUlOID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG4gICAgICByZXR1cm4gbmV3IEJvdW5kaW5nQm94KG5ldyBWZWMzKFtNSU4sIE1JTiwgTUlOXSksIG5ldyBWZWMzKFtNQVgsIE1BWCwgTUFYXSkpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgaW5zaWRlKHZlYzogSVZlYzMpOiBib29sZWFuIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICB2ZWMueCA+PSB0aGlzLm1pbi54ICYmIHZlYy54IDw9IHRoaXMubWF4LnggJiZcclxuICAgICAgICAgdmVjLnkgPj0gdGhpcy5taW4ueSAmJiB2ZWMueSA8PSB0aGlzLm1heC55ICYmXHJcbiAgICAgICAgIHZlYy56ID49IHRoaXMubWluLnogJiYgdmVjLnogPD0gdGhpcy5tYXguelxyXG4gICAgICApIHtcclxuICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvU3RyaW5nKGRpZ2l0czogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdbJyArIHRoaXMubWluLnRvU3RyaW5nKGRpZ2l0cykgKyAnXScgK1xyXG4gICAgICAgICAnWycgKyB0aGlzLm1heC50b1N0cmluZyhkaWdpdHMpICsgJ10nO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlKHY6IElWZWMzKTogdm9pZCB7XHJcbiAgICAgIGlmIChpc05hTih2LngpIHx8IGlzTmFOKHYueSkgfHwgaXNOYU4odi56KSkge1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmFOJyk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1pbi54ID0gTWF0aC5taW4odGhpcy5taW4ueCwgdi54KTtcclxuICAgICAgdGhpcy5taW4ueSA9IE1hdGgubWluKHRoaXMubWluLnksIHYueSk7XHJcbiAgICAgIHRoaXMubWluLnogPSBNYXRoLm1pbih0aGlzLm1pbi56LCB2LnopO1xyXG4gICAgICB0aGlzLm1heC54ID0gTWF0aC5tYXgodGhpcy5tYXgueCwgdi54KTtcclxuICAgICAgdGhpcy5tYXgueSA9IE1hdGgubWF4KHRoaXMubWF4LnksIHYueSk7XHJcbiAgICAgIHRoaXMubWF4LnogPSBNYXRoLm1heCh0aGlzLm1heC56LCB2LnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbWVyZ2Uob3RoZXI6IEJvdW5kaW5nQm94KTogdm9pZCB7XHJcbiAgICAgIHRoaXMubWluLnggPSBNYXRoLm1pbih0aGlzLm1pbi54LCBvdGhlci5taW4ueCk7XHJcbiAgICAgIHRoaXMubWluLnkgPSBNYXRoLm1pbih0aGlzLm1pbi55LCBvdGhlci5taW4ueSk7XHJcbiAgICAgIHRoaXMubWluLnogPSBNYXRoLm1pbih0aGlzLm1pbi56LCBvdGhlci5taW4ueik7XHJcbiAgICAgIHRoaXMubWF4LnggPSBNYXRoLm1heCh0aGlzLm1heC54LCBvdGhlci5tYXgueCk7XHJcbiAgICAgIHRoaXMubWF4LnkgPSBNYXRoLm1heCh0aGlzLm1heC55LCBvdGhlci5tYXgueSk7XHJcbiAgICAgIHRoaXMubWF4LnogPSBNYXRoLm1heCh0aGlzLm1heC56LCBvdGhlci5tYXgueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBtdWx0TShtYXQ6IE1hdDQpOiBCb3VuZGluZ0JveCB7XHJcbiAgICAgIGNvbnN0IHJldCA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICBjb25zdCB2MSA9IG1hdC5tdWx0VihuZXcgVmVjNChbdGhpcy5taW4ueCwgdGhpcy5taW4ueSwgdGhpcy5taW4ueiwgMV0pKTtcclxuICAgICAgY29uc3QgdjIgPSBtYXQubXVsdFYobmV3IFZlYzQoW3RoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWF4LnosIDFdKSk7XHJcbiAgICAgIHJldC5taW4ueCA9IE1hdGgubWluKHYxLngsIHYyLngpO1xyXG4gICAgICByZXQubWluLnkgPSBNYXRoLm1pbih2MS55LCB2Mi55KTtcclxuICAgICAgcmV0Lm1pbi56ID0gTWF0aC5taW4odjEueiwgdjIueik7XHJcbiAgICAgIHJldC5tYXgueCA9IE1hdGgubWF4KHYxLngsIHYyLngpO1xyXG4gICAgICByZXQubWF4LnkgPSBNYXRoLm1heCh2MS55LCB2Mi55KTtcclxuICAgICAgcmV0Lm1heC56ID0gTWF0aC5tYXgodjEueiwgdjIueik7XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSAnLi9WZWMnO1xyXG5pbXBvcnQgeyBJTWluTWF4IH0gZnJvbSAnLi9Cb3VuZGluZ0JveCc7XHJcbmltcG9ydCB7IFBsYW5lIH0gZnJvbSAnLi4vQXBwcy9WaWV3ZXIvUGxhbmUnO1xyXG5cclxuLyoqXHJcbiAqIEEgc2V0IG9mIHBvaW50cyB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRpbmcgZWRnZXMgb2YgYW4gb2JqZWN0LiBBbGwgcG9pbnRzIGFyZVxyXG4gKiBlbmNsb3NlZCBpbiB0aGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQm91bmRpbmdQdHMge1xyXG4gICBwcml2YXRlIHB0czogVmVjM1tdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHB0czogVmVjM1tdKSB7XHJcbiAgICAgIHRoaXMucHRzID0gcHRzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0KGk6IG51bWJlcik6IFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdHNbaV07XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkaXN0VG9Qb2ludChwdDogVmVjMyk6IElNaW5NYXgge1xyXG4gICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcclxuICAgICAgICAgbWF4OiAtTnVtYmVyLk1BWF9WQUxVRSxcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wdHMuZm9yRWFjaCgocHQyOiBWZWMzKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IHggPSBwdDIueCAtIHB0Lng7XHJcbiAgICAgICAgIGNvbnN0IHkgPSBwdDIueSAtIHB0Lnk7XHJcbiAgICAgICAgIGNvbnN0IHogPSBwdDIueiAtIHB0Lno7XHJcbiAgICAgICAgIGNvbnN0IGQgPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7XHJcbiAgICAgICAgIHJldC5taW4gPSBNYXRoLm1pbihkLCByZXQubWluKTtcclxuICAgICAgICAgcmV0Lm1heCA9IE1hdGgubWF4KGQsIHJldC5tYXgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGRvbid0IGJvdGhlciBnZXR0aW5nIHRoZSBzcXVhcmUgcm9vdCBvZiBldmVyeSBjYWxjdWxhdGlvbiwganVzdCB0aGUgbWluIGFuZCBtYXhcclxuICAgICAgcmV0Lm1pbiA9IE1hdGguc3FydChyZXQubWluKTtcclxuICAgICAgcmV0Lm1heCA9IE1hdGguc3FydChyZXQubWF4KTtcclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkaXN0VG9QbGFuZShwbGFuZTogUGxhbmUpOiBJTWluTWF4IHtcclxuICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgICAgIG1heDogLU51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHRzLmZvckVhY2goKHB0OiBWZWMzKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGQgPSBwbGFuZS5kaXN0VG9QdChwdCk7XHJcbiAgICAgICAgIHJldC5taW4gPSBNYXRoLm1pbihkLCByZXQubWluKTtcclxuICAgICAgICAgcmV0Lm1heCA9IE1hdGgubWF4KGQsIHJldC5tYXgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEluZGV4ZWRWZWMzIH0gZnJvbSAnLi9JbmRleGVkVmVjMyc7XHJcbmltcG9ydCB7IFZlYzMgfSBmcm9tICcuL1ZlYyc7XHJcblxyXG4vKipcclxuICogTWluaW1hbGlzdCB3cmFwcGVyIGFyb3VuZCBhIFdlYkdMIHRyaWFuZ2xlIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkVHJpYW5nbGUge1xyXG4gICBwdWJsaWMgdjE6IEluZGV4ZWRWZWMzO1xyXG4gICBwdWJsaWMgdjI6IEluZGV4ZWRWZWMzO1xyXG4gICBwdWJsaWMgdjM6IEluZGV4ZWRWZWMzO1xyXG4gICBwdWJsaWMgbjE6IEluZGV4ZWRWZWMzO1xyXG4gICBwdWJsaWMgbjI6IEluZGV4ZWRWZWMzO1xyXG4gICBwdWJsaWMgbjM6IEluZGV4ZWRWZWMzO1xyXG4gICBwdWJsaWMgaTE6IG51bWJlcjtcclxuICAgcHVibGljIGkyOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpMzogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHZlcnRpY2VzOiBudW1iZXJbXSxcclxuICAgICAgbm9ybWFsczogbnVtYmVyW10sXHJcbiAgICAgIGkxOiBudW1iZXIsXHJcbiAgICAgIGkyOiBudW1iZXIsXHJcbiAgICAgIGkzOiBudW1iZXIsXHJcbiAgICkge1xyXG4gICAgICB0aGlzLnYxID0gbmV3IEluZGV4ZWRWZWMzKHZlcnRpY2VzLCBpMSk7XHJcbiAgICAgIHRoaXMudjIgPSBuZXcgSW5kZXhlZFZlYzModmVydGljZXMsIGkyKTtcclxuICAgICAgdGhpcy52MyA9IG5ldyBJbmRleGVkVmVjMyh2ZXJ0aWNlcywgaTMpO1xyXG4gICAgICB0aGlzLm4xID0gbmV3IEluZGV4ZWRWZWMzKG5vcm1hbHMsIGkxKTtcclxuICAgICAgdGhpcy5uMiA9IG5ldyBJbmRleGVkVmVjMyhub3JtYWxzLCBpMik7XHJcbiAgICAgIHRoaXMubjMgPSBuZXcgSW5kZXhlZFZlYzMobm9ybWFscywgaTMpO1xyXG4gICAgICB0aGlzLmkxID0gaTE7XHJcbiAgICAgIHRoaXMuaTIgPSBpMjtcclxuICAgICAgdGhpcy5pMyA9IGkzO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWluWCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MS54LCB0aGlzLnYyLngsIHRoaXMudjMueCk7XHJcbiAgIH1cclxuICAgZ2V0IG1pblkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjEueSwgdGhpcy52Mi55LCB0aGlzLnYzLnkpO1xyXG4gICB9XHJcbiAgIGdldCBtaW5aKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYxLnosIHRoaXMudjIueiwgdGhpcy52My56KTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjEueCwgdGhpcy52Mi54LCB0aGlzLnYzLngpO1xyXG4gICB9XHJcbiAgIGdldCBtYXhZKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYxLnksIHRoaXMudjIueSwgdGhpcy52My55KTtcclxuICAgfVxyXG4gICBnZXQgbWF4WigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MS56LCB0aGlzLnYyLnosIHRoaXMudjMueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlTm9ybWFsKCk6IFZlYzMge1xyXG4gICAgICBjb25zdCB2MSA9IHRoaXMudjEudG9WZWMzKCk7XHJcbiAgICAgIGNvbnN0IHYyID0gdGhpcy52Mi50b1ZlYzMoKTtcclxuICAgICAgY29uc3QgdjMgPSB0aGlzLnYzLnRvVmVjMygpO1xyXG5cclxuICAgICAgY29uc3QgYSA9IHYyLnN1YnRyYWN0KHYxKTtcclxuICAgICAgY29uc3QgYiA9IHYzLnN1YnRyYWN0KHYyKTtcclxuICAgICAgcmV0dXJuIGEuY3Jvc3MoYikubm9ybWFsaXplKCk7XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJVmVjMywgVmVjMyB9IGZyb20gJy4vVmVjJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkVmVjMyBpbXBsZW1lbnRzIElWZWMzIHtcclxuXHJcbiAgIHByaXZhdGUgdmFsdWVzOiBudW1iZXJbXTtcclxuICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IodmFsdWVzOiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMF07XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMF0gPSB2YWw7XHJcbiAgIH1cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDFdO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDFdID0gdmFsO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAyXTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHoodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAyXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvVmVjMygpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFt0aGlzLngsIHRoaXMueSwgdGhpcy56XSk7XHJcbiAgIH1cclxufSIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cclxuaW1wb3J0IHsgVmVjMywgSVZlYzMgfSBmcm9tICcuL1ZlYyc7XHJcbmltcG9ydCB7IEJvdW5kaW5nQm94IH0gZnJvbSAnLi9Cb3VuZGluZ0JveCc7XHJcbmltcG9ydCB7IEJvdW5kaW5nUHRzIH0gZnJvbSAnLi9Cb3VuZGluZ1B0cyc7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gJy4vSW5kZXhlZFRyaWFuZ2xlJztcclxuaW1wb3J0IHsgSW5kZXhlZFZlYzMgfSBmcm9tICcuL0luZGV4ZWRWZWMzJztcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tICcuLi9VdGlsL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gJy4uL1V0aWwvUHJvZmlsZXInO1xyXG5pbXBvcnQgeyBCbG9iRmlsZSB9IGZyb20gJy4uL1V0aWwvQmxvYkZpbGUnO1xyXG5cclxuZXhwb3J0IGVudW0gTm9ybWFsVHlwZSB7XHJcbiAgIFNtb290aCxcclxuICAgRmxhdFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmlhbmdsZU9iakRhdGEge1xyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICB2ZXJ0aWNlczogRmxvYXQzMkFycmF5O1xyXG4gICBub3JtYWxzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIGluZGljZXM6IEludDMyQXJyYXk7XHJcbiAgIGJveE1pbjogVmVjMztcclxuICAgYm94TWF4OiBWZWMzO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcmVwcmVzZW50aW5nIGFuIG9iamVjdCBmcm9tIGEgYnVuY2ggb2YgdHJpYW5nbGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqIHtcclxuICAgcHVibGljIHZlcnRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwdWJsaWMgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgcHVibGljIGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgIHB1YmxpYyBib3ggPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgcHVibGljIHNvdXJjZTogc3RyaW5nO1xyXG4gICBwcml2YXRlIGJvdW5kaW5nUHRzOiBCb3VuZGluZ1B0cztcclxuXHJcbiAgIHB1YmxpYyBnZXQgbnVtVmVydGljZXMoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXMubGVuZ3RoIC8gMztcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBudW1UcmlhbmdsZXMoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveC53aWR0aDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmhlaWdodDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3guZGVwdGg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGlhZ29uYWwoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmRpYWdvbmFsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmNlbnRlcjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldFRyaWFuZ2xlKGluZGV4OiBudW1iZXIpOiBJbmRleGVkVHJpYW5nbGUge1xyXG4gICAgICBjb25zdCBpMSA9IHRoaXMuaW5kaWNlc1szICogaW5kZXggKyAwXTtcclxuICAgICAgY29uc3QgaTIgPSB0aGlzLmluZGljZXNbMyAqIGluZGV4ICsgMV07XHJcbiAgICAgIGNvbnN0IGkzID0gdGhpcy5pbmRpY2VzWzMgKiBpbmRleCArIDJdO1xyXG4gICAgICByZXR1cm4gbmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCB0aGlzLm5vcm1hbHMsIGkxLCBpMiwgaTMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcHVzaFF1YWQodjE6IElWZWMzLCB2MjogSVZlYzMsIHYzOiBJVmVjMywgdjQ6IElWZWMzKTogdm9pZCB7XHJcblxyXG4gICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2MSwgdjIsIHYzKTtcclxuICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjIsIHY0LCB2Myk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBwdXNoVHJpYW5nbGUodjE6IElWZWMzLCB2MjogSVZlYzMsIHYzOiBJVmVjMyk6IHZvaWQge1xyXG5cclxuICAgICAgLy8gYWRkIGluZGljZXNcclxuICAgICAgY29uc3QgaTEgPSB0aGlzLm51bVZlcnRpY2VzO1xyXG4gICAgICBjb25zdCBpMiA9IGkxICsgMTtcclxuICAgICAgY29uc3QgaTMgPSBpMSArIDI7XHJcbiAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKGkxLCBpMiwgaTMpO1xyXG5cclxuICAgICAgLy8gYWRkIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaCh2MS54LCB2MS55LCB2MS56LCB2Mi54LCB2Mi55LCB2Mi56LCB2My54LCB2My55LCB2My56KTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYxKTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYyKTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYzKTtcclxuXHJcbiAgICAgIC8vIGFkZCBub3JtYWxzXHJcbiAgICAgIGNvbnN0IHRyaSA9IG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgdGhpcy5ub3JtYWxzLCBpMSwgaTIsIGkzKTtcclxuICAgICAgY29uc3Qgbm9ybWFsID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm5vcm1hbC52YWx1ZXMpO1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5ub3JtYWwudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWxzKHR5cGU6IE5vcm1hbFR5cGUpOiB2b2lkIHtcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSBOb3JtYWxUeXBlLlNtb290aCkge1xyXG4gICAgICAgICBjb25zdCBtdWx0aU5vcm1WZXJ0aWNlczogTXVsdGlOb3JtVmVydGV4W10gPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXMucHVzaChuZXcgTXVsdGlOb3JtVmVydGV4KCkpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgbm9ybWFscyB3aXRoIGVhY2ggdmVydGV4IC0gd2UnbGwgbGF0ZXIgYXZlcmFnZSB0aGVzZVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRyaS5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pMV0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmkyXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaTNdLnB1c2gobik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHBvcHVsYXRlIHRoZSBub3JtYWxzIGFycmF5XHJcbiAgICAgICAgIHRoaXMubm9ybWFscyA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11bHRpTm9ybVZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm11bHRpTm9ybVZlcnRpY2VzW2ldLm5vcm1hbC52YWx1ZXMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIC8vIHRvIGdvIHRoaXMgd2F5IHdlIG5lZWQgdG8gaGF2ZSBhIHVuaXF1ZSB2ZWN0b3IgYW5kIG5vcm1hbCBmb3IgZWFjaCB0cmlhbmdsZVxyXG4gICAgICAgICAvLyBjb3JuZXIuIEJsb3cgYXdheSB0aGUgb2xkIHN0dWZmIGFuZCByZWJ1aWxkXHJcbiAgICAgICAgIGNvbnN0IG9sZEluZGljZXMgPSB0aGlzLmluZGljZXM7XHJcbiAgICAgICAgIGNvbnN0IG9sZFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcztcclxuXHJcbiAgICAgICAgIC8vIHJlc2V0IGV2ZXJ5dGhpbmdcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBbXTtcclxuICAgICAgICAgdGhpcy5pbmRpY2VzID0gW107XHJcblxyXG4gICAgICAgICAvLyByZWJ1aWxkXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkSW5kaWNlcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdjEgPSBuZXcgSW5kZXhlZFZlYzMob2xkVmVydGljZXMsIG9sZEluZGljZXNbMyAqIGkgKyAwXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHYyID0gbmV3IEluZGV4ZWRWZWMzKG9sZFZlcnRpY2VzLCBvbGRJbmRpY2VzWzMgKiBpICsgMV0pO1xyXG4gICAgICAgICAgICBjb25zdCB2MyA9IG5ldyBJbmRleGVkVmVjMyhvbGRWZXJ0aWNlcywgb2xkSW5kaWNlc1szICogaSArIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjEsIHYyLCB2Myk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHgoaTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbMyAqIGkgKyAwXTtcclxuICAgfVxyXG4gICBwcml2YXRlIHkoaTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbMyAqIGkgKyAxXTtcclxuICAgfVxyXG4gICBwcml2YXRlIHooaTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbMyAqIGkgKyAyXTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGZpbmRCb3VuZHMoKTogdm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmaW5kaW5nIGJvdW5kcycpO1xyXG4gICAgICBjb25zdCBib3ggPSBuZXcgQm91bmRpbmdCb3goKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCB0cmkgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG4gICAgICAgICBib3gudXBkYXRlKHRyaS52MSk7XHJcbiAgICAgICAgIGJveC51cGRhdGUodHJpLnYyKTtcclxuICAgICAgICAgYm94LnVwZGF0ZSh0cmkudjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveCA9IGJveDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEJyZWFrcyB0aGUgb2JqZWN0IGludG8gZXZlbmx5IHNwYWNlZCB2b2x1bWVzLiBUaGUgbnVtYmVyIG9mIHZvbHVtZXMgaXMgYXV0b21hdGljYWxseVxyXG4gICAgKiBkZXRlcm1pbmVkIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldEJvdW5kaW5nUHRzKCk6IEJvdW5kaW5nUHRzIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvdW5kaW5nUHRzKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmJvdW5kaW5nUHRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBudW1TdGVwcyA9IDE1O1xyXG5cclxuICAgICAgY29uc3QgYm94ZXM6IEJvdW5kaW5nQm94W10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnBvdyhudW1TdGVwcywgMyk7IGkrKykge1xyXG4gICAgICAgICBib3hlcy5wdXNoKG5ldyBCb3VuZGluZ0JveCgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdiA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIHYueCA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgdi55ID0gdGhpcy52ZXJ0aWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICB2LnogPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh2LnggLSB0aGlzLmJveC5taW4ueCkgLyAodGhpcy5ib3gud2lkdGgpKTtcclxuICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHYueSAtIHRoaXMuYm94Lm1pbi55KSAvICh0aGlzLmJveC5oZWlnaHQpKTtcclxuICAgICAgICAgbGV0IHogPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHYueiAtIHRoaXMuYm94Lm1pbi56KSAvICh0aGlzLmJveC5kZXB0aCkpO1xyXG4gICAgICAgICB4ID0gY2xhbXAoeCwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeSA9IGNsYW1wKHksIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHogPSBjbGFtcCh6LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICBjb25zdCBpbmRleCA9IHggKyB5ICogbnVtU3RlcHMgKyB6ICogbnVtU3RlcHMgKiBudW1TdGVwcztcclxuICAgICAgICAgYm94ZXNbaW5kZXhdLnVwZGF0ZSh2KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYm94TWFwID0gbmV3IE1hcDxudW1iZXIsIEJvdW5kaW5nQm94PigpO1xyXG4gICAgICBsZXQgYm94Q291bnQgPSAwO1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG51bVN0ZXBzOyB4KyspIHtcclxuICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBudW1TdGVwczsgeSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdDoge1xyXG4gICAgICAgICAgICAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICBib3g6IEJvdW5kaW5nQm94LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgbGFzdDoge1xyXG4gICAgICAgICAgICAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICBib3g6IEJvdW5kaW5nQm94LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG51bVN0ZXBzOyB6KyspIHtcclxuICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGJveGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgaWYgKGJveC5taW4ueCA9PT0gTnVtYmVyLk1BWF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBib3hDb3VudCsrO1xyXG4gICAgICAgICAgICAgICBpZiAoIWZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgIGZpcnN0ID0geyBpbmRleDogaW5kZXgsIGJveDogYm94IH07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgbGFzdCA9IHsgaW5kZXg6IGluZGV4LCBib3g6IGJveCB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyc3QgJiYgYm94TWFwLmhhcyhmaXJzdC5pbmRleCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgIGJveE1hcC5zZXQoZmlyc3QuaW5kZXgsIGZpcnN0LmJveCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxhc3QgJiYgYm94TWFwLmhhcyhsYXN0LmluZGV4KSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgYm94TWFwLnNldChsYXN0LmluZGV4LCBsYXN0LmJveCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwdHM6IFZlYzNbXSA9IFtdO1xyXG4gICAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgICAgaWYgKGJveC5taW4ueCAhPT0gTnVtYmVyLk1BWF9WQUxVRSkge1xyXG4gICAgICAgICAgICBwdHMucHVzaCguLi5ib3guY29ybmVycyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmJvdW5kaW5nUHRzID0gbmV3IEJvdW5kaW5nUHRzKHB0cyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmJvdW5kaW5nUHRzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyBpbiB0aGUgZm9yIC5PQkogZmlsZSBmb3JtYXRcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIHRoZSBzdHJpbmdcclxuICAgICovXHJcbiAgIHB1YmxpYyB0b09ialN0cmluZyhkaWdpdHMgPSA4KTogc3RyaW5nIHtcclxuXHJcbiAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgc3RyICs9ICcjIFZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICcjIFRyaWFuZ2xlczogJyArIHRoaXMubnVtVHJpYW5nbGVzICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnXFxuJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHYgPSB0aGlzLnZlcnRpY2VzO1xyXG4gICAgICAgICBzdHIgKz0gJ3YgJyArIHZbMyAqIGkgKyAwXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdlszICogaSArIDFdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyB2WzMgKiBpICsgMl0udG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IG4gPSB0aGlzLm5vcm1hbHM7XHJcbiAgICAgICAgIHN0ciArPSAndm4gJyArIG5bMyAqIGkgKyAwXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgblszICogaSArIDFdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuWzMgKiBpICsgMl0udG9QcmVjaXNpb24oZGlnaXRzKSArICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCB0ID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgc3RyICs9ICdmICcgK1xyXG4gICAgICAgICAgICAodC5pMSArIDEpICsgJy8vJyArICh0LmkxICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pMiArIDEpICsgJy8vJyArICh0LmkyICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pMyArIDEpICsgJy8vJyArICh0LmkzICsgMSkgKyAnXFxuJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpOiB2b2lkIHtcclxuXHJcbiAgICAgIGlmIChub3JtYWxUeXBlID09PSBOb3JtYWxUeXBlLlNtb290aCkge1xyXG5cclxuICAgICAgICAgY29uc3QgdmVydGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbiAgICAgICAgIGNvbnN0IGluZGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcblxyXG4gICAgICAgICAvLyBmaXJzdCBnZW5lcmF0ZSBhIHVuaXF1ZSBzZXQgb2YgdmVydGljZXNcclxuICAgICAgICAgY29uc3QgdW5pcXVlVmVydGljZXM6IEluZGV4ZWRWZWMzW10gPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFZlcnRleCA9IG5ldyBJbmRleGVkVmVjMyh0aGlzLnZlcnRpY2VzLCBpKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdLnRvRml4ZWQoNCkgKyAnICcgKyB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMV0udG9GaXhlZCg0KSArICcgJyArIHRoaXMudmVydGljZXNbMyAqIGkgKyAyXS50b0ZpeGVkKDQpO1xyXG4gICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgbmV3SW5kZXg7XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXhUb0luZGV4TWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGp1c3QgbWFwIHRoZSBvbGQgaW5kZXggdG8gdGhlIGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgICAgICAgIG5ld0luZGV4ID0gdmVydGV4VG9JbmRleE1hcC5nZXQoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGVudHJ5XHJcbiAgICAgICAgICAgICAgIG5ld0luZGV4ID0gdW5pcXVlVmVydGljZXMubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgICAgdmVydGV4VG9JbmRleE1hcC5zZXQoa2V5LCBuZXdJbmRleCk7XHJcbiAgICAgICAgICAgICAgIHVuaXF1ZVZlcnRpY2VzLnB1c2gob2xkVmVydGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgdHJhbnNsYXRpb25cclxuICAgICAgICAgICAgaW5kZXhUb0luZGV4TWFwLnNldChvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyByZXNldCBhbGwgdGhlIHZlcnRpY2VzXHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlxdWVWZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godW5pcXVlVmVydGljZXNbaV0ueCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1bmlxdWVWZXJ0aWNlc1tpXS55KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHVuaXF1ZVZlcnRpY2VzW2ldLnopO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyByZW1hcCBhbGwgaW5kaWNlc1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuaW5kaWNlc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5pbmRpY2VzW2ldID0gaW5kZXhUb0luZGV4TWFwLmdldChvbGRJbmRleCArIDEpIC0gMTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGZvciBmbGF0IG5vcm1hbHMuIE5ldyB2ZXJ0aWNlcyBhbmQgbm9ybWFscyBhcmUgY3JlYXRlZCBpbiBcclxuICAgICAgICAgLy8gY29tcHV0ZU5vcm1hbHMoKSBiZWxvdyBpZiBuZWVkZWRcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhub3JtYWxUeXBlKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRyaW0oYm94OiBCb3VuZGluZ0JveCk6IHZvaWQge1xyXG4gICAgICBjb25zdCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIGNvbnN0IGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCB0cmkgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG5cclxuICAgICAgICAgaWYgKGJveC5pbnNpZGUodHJpLnYxKSAmJiBib3guaW5zaWRlKHRyaS52MikgJiYgYm94Lmluc2lkZSh0cmkudjMpKSB7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmkuaTEpO1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpLmkyKTtcclxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaS5pMyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygndHJpbW1lZCAnICsgKHRoaXMuaW5kaWNlcy5sZW5ndGggLSBpbmRpY2VzLmxlbmd0aCkgKyAnIHRyaWFuZ2xlcycpO1xyXG4gICAgICB0aGlzLmluZGljZXMgPSBpbmRpY2VzO1xyXG4gICAgICB0aGlzLmZpbmRCb3VuZHMoKTtcclxuICAgICAgcC5sb2coJ1RyaW0gQ29tcGxldGUnKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG1pcnJvcih4OiBudW1iZXIsIGFkZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICBjb25zdCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICBpZiAoYWRkKSB7XHJcbiAgICAgICAgIC8vIGR1cGxpY2F0ZSB2ZXJ0aWNlc1xyXG4gICAgICAgICBjb25zdCBudW1WZXJ0aWNlcyA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0gLT0geDtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKC10aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godGhpcy52ZXJ0aWNlc1szICogaSArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRoaXMudmVydGljZXNbMyAqIGkgKyAyXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKC10aGlzLm5vcm1hbHNbMyAqIGkgKyAwXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHRoaXMubm9ybWFsc1szICogaSArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2godGhpcy5ub3JtYWxzWzMgKiBpICsgMl0pO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBjb25zdCBudW1JbmRpY2VzID0gdGhpcy5pbmRpY2VzLmxlbmd0aDtcclxuICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IG51bVZlcnRpY2VzO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUluZGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmluZGljZXMucHVzaChzdGFydEluZGV4ICsgdGhpcy5pbmRpY2VzW2ldKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyByZWZsZWN0IHZlcnRpY2VzXHJcbiAgICAgICAgIGNvbnN0IG51bVZlcnRpY2VzID0gdGhpcy5udW1WZXJ0aWNlcztcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXNbMyAqIGkgKyAwXSA9IHggKyAoeCAtIHRoaXMudmVydGljZXNbMyAqIGkgKyAwXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFsc1szICogaSArIDBdID0gLXRoaXMubm9ybWFsc1szICogaSArIDBdO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmluZEJvdW5kcygpO1xyXG5cclxuICAgICAgcC5sb2coJ01pcnJvciBDb21wbGV0ZScpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcmV2ZXJzZSgpOiB2b2lkIHtcclxuICAgICAgY29uc3QgcCA9IG5ldyBQcm9maWxlcigpO1xyXG5cclxuICAgICAgLy8gcmVmbGVjdCB2ZXJ0aWNlc1xyXG4gICAgICBjb25zdCB4ID0gdGhpcy5jZW50ZXIueDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlc1szICogaSArIDBdID0geCArICh4IC0gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzWzMgKiBpICsgMF0gPSAtdGhpcy5ub3JtYWxzWzMgKiBpICsgMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlb3JkZXIgdHJpYW5nbGVzIHRvIHByZXNlcnZlIGZyb250LWJhY2sgZmFjaW5nXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCBpMSA9IHRoaXMuaW5kaWNlc1szICogaSArIDBdO1xyXG4gICAgICAgICBjb25zdCBpMiA9IHRoaXMuaW5kaWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICB0aGlzLmluZGljZXNbMyAqIGkgKyAwXSA9IGkyO1xyXG4gICAgICAgICB0aGlzLmluZGljZXNbMyAqIGkgKyAxXSA9IGkxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLmxvZygnUmV2ZXJzZSBDb21wbGV0ZScpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tYmluZSh0T2JqOiBUcmlhbmdsZU9iaik6IHZvaWQge1xyXG5cclxuICAgICAgLy8gc2F2ZSB0aGUgdmFsdWUgZm9yIHRoZSBmaXJzdCBpbmRleCBvZiB0aGUgY29tYmluZWQgb2JqZWN0c1xyXG4gICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5udW1WZXJ0aWNlcztcclxuXHJcbiAgICAgIC8vIGFkZCB0aGUgb3RoZXIgdmVydGljZXMgYW5kIG5vcm1hbHMgdG8gb3Vyc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRPYmoudmVydGljZXNbaV0pO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh0T2JqLm5vcm1hbHNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhZGQgdGhlIG90aGVyIGluZGljZXMsIGJ1dCBvZmZzZXQgdGhlbSBwcm9wZXJseVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmouaW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLmluZGljZXMucHVzaChzdGFydEluZGV4ICsgdE9iai5pbmRpY2VzW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbWVyZ2UgdGhlIGJvdW5kaW5nIGJveGVzXHJcbiAgICAgIHRoaXMuYm94Lm1lcmdlKHRPYmouYm94KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvRGF0YSgpOiBJVHJpYW5nbGVPYmpEYXRhIHtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgdmVydGljZXM6IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcyksXHJcbiAgICAgICAgIG5vcm1hbHM6IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5ub3JtYWxzKSxcclxuICAgICAgICAgaW5kaWNlczogbmV3IEludDMyQXJyYXkodGhpcy5pbmRpY2VzKSxcclxuICAgICAgICAgYm94TWluOiB0aGlzLmJveC5taW4uY2xvbmUoKSxcclxuICAgICAgICAgYm94TWF4OiB0aGlzLmJveC5tYXguY2xvbmUoKSxcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21EYXRhKGRhdGE6IElUcmlhbmdsZU9iakRhdGEpOiBUcmlhbmdsZU9iaiB7XHJcblxyXG4gICAgICBjb25zdCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqKCk7XHJcbiAgICAgIHRPYmoubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgdE9iai52ZXJ0aWNlcyA9IEFycmF5LmZyb20oZGF0YS52ZXJ0aWNlcyk7XHJcbiAgICAgIHRPYmoubm9ybWFscyA9IEFycmF5LmZyb20oZGF0YS5ub3JtYWxzKTtcclxuICAgICAgdE9iai5pbmRpY2VzID0gQXJyYXkuZnJvbShkYXRhLmluZGljZXMpO1xyXG4gICAgICB0T2JqLmJveCA9IG5ldyBCb3VuZGluZ0JveChuZXcgVmVjMyhkYXRhLmJveE1pbi52YWx1ZXMpLCBuZXcgVmVjMyhkYXRhLmJveE1heC52YWx1ZXMpKTtcclxuICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b0Jsb2IoKTogQmxvYiB7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYSBkZXNjcmlwdGlvblxyXG4gICAgICBjb25zdCBpbmZvID0ge1xyXG4gICAgICAgICBGaWxlVHlwZTogJ0JpbmFyeSBPQkonLFxyXG4gICAgICAgICBWZXJzaW9uOiAnMS4wJyxcclxuICAgICAgICAgTmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICBTb3VyY2U6IHRoaXMuc291cmNlLFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBnZXQgdGhlIHJhdyBkYXRhXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRvRGF0YSgpO1xyXG5cclxuICAgICAgLy8gYnJlYWsgaXQgaW50byBwYXJ0c1xyXG4gICAgICBjb25zdCBwYXJ0czogQmxvYlBhcnRbXSA9IFtdO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEudmVydGljZXMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEubm9ybWFscyk7XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS5pbmRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWluLnZhbHVlcykpO1xyXG4gICAgICBwYXJ0cy5wdXNoKG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5ib3hNYXgudmFsdWVzKSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIEJsb2JcclxuICAgICAgcmV0dXJuIEJsb2JGaWxlLmNyZWF0ZUJsb2IoaW5mbywgcGFydHMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21CbG9iKGJsb2I6IEJsb2IpOiBQcm9taXNlPFRyaWFuZ2xlT2JqPiB7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgVHJpYW5nbGVPYmouYmxvYlRvRGF0YShibG9iKTtcclxuICAgICAgcmV0dXJuIFRyaWFuZ2xlT2JqLmZyb21EYXRhKGRhdGEpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGJsb2JUb0RhdGEoYmxvYjogQmxvYik6IFByb21pc2U8SVRyaWFuZ2xlT2JqRGF0YT4ge1xyXG5cclxuICAgICAgY29uc3QgYkZpbGUgPSBhd2FpdCBCbG9iRmlsZS5leHRyYWN0KGJsb2IpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgbmFtZTogYkZpbGUuaW5mby5OYW1lLFxyXG4gICAgICAgICBzb3VyY2U6IGJGaWxlLmluZm8uU291cmNlLFxyXG4gICAgICAgICB2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1swXS5hcnJheUJ1ZmZlcigpKSxcclxuICAgICAgICAgbm9ybWFsczogbmV3IEZsb2F0MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1sxXS5hcnJheUJ1ZmZlcigpKSxcclxuICAgICAgICAgaW5kaWNlczogbmV3IEludDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbMl0uYXJyYXlCdWZmZXIoKSksXHJcbiAgICAgICAgIGJveE1pbjogbmV3IFZlYzMoQXJyYXkuZnJvbShuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzNdLmFycmF5QnVmZmVyKCkpKSksXHJcbiAgICAgICAgIGJveE1heDogbmV3IFZlYzMoQXJyYXkuZnJvbShuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzRdLmFycmF5QnVmZmVyKCkpKSksXHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gY29tcHV0ZSBub3JtYWxzIGZvciB2ZXJ0aWNlcyB0aGF0IGpvaW4gbXVsdGlwbGUgZmFjZXNcclxuICovXHJcbmNsYXNzIE11bHRpTm9ybVZlcnRleCB7XHJcbiAgIHByaXZhdGUgbm9ybWFsczogVmVjM1tdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogU3RvcmVzIGEgbm9ybWFsIGZvciB0aGlzIHZlcnRleFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5vcm1hbCBTdG9yZXMgYSBub3JtYWwgZm9yIHRoZSB2ZXJ0ZXhcclxuICAgICovXHJcbiAgIHB1YmxpYyBwdXNoKG5vcm1hbDogVmVjMykge1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWwpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG5vcm1hbCBieSBhdmVyYWdpbmcgYWxsIHRoZSBpbmRpdmlkdWFsIG5vcm1hbHMgYXNzb2NpYXRlZCB3aXRoIHRoZSB2ZXJ0ZXhcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgbm9ybWFsKCk6IFZlYzMge1xyXG4gICAgICBjb25zdCBuID0gbmV3IFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tICcuL1RyaWFuZ2xlT2JqJztcclxuaW1wb3J0IHsgU3RhdHVzRnVuY3Rpb24gfSBmcm9tICcuLi9VdGlsL0dsb2JhbHMnO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gJy4uL1V0aWwvUHJvZmlsZXInO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbG9hZHMgYSAub2JqIGZpbGUgYW5kIGNyZWF0ZXMgdHJpYW5nbGVzIGZvciBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRmlsZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCB1cGRhdGVTdGF0dXM/OiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAvLyByZWNvcmQgdGhlIHN0YXR1cyBmdW5jdGlvbi4gSWYgb25lIGlzIG5vdCBzdXBwbGllZCwgY3JlYXRlIG9uZSB0aGF0IGRvZXMgbm90aGluZ1xyXG4gICAgICBpZiAoIXVwZGF0ZVN0YXR1cykge1xyXG4gICAgICAgICB1cGRhdGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7IHJldHVybjsgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wYXJzZShzcmMsIHVwZGF0ZVN0YXR1cyk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2VGYWNlKGxpbmU6IHN0cmluZyk6IHsgaVY6IG51bWJlcltdLCBpTjogbnVtYmVyW10gfSB7XHJcbiAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgaVY6IFtdIGFzIG51bWJlcltdLFxyXG4gICAgICAgICBpTjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgY29uc3QgbnVtVmFscyA9IHRva2Vucy5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZhbHM7IGkrKykge1xyXG4gICAgICAgICBjb25zdCB2YWxzID0gdG9rZW5zW2kgKyAxXS5zcGxpdCgnLycpO1xyXG4gICAgICAgICByZXQuaVYucHVzaChwYXJzZUludCh2YWxzWzBdKSAtIDEpO1xyXG4gICAgICAgICBpZiAodmFscy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgcmV0LmlOLnB1c2gocGFyc2VJbnQodmFsc1syXSkgLSAxKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2Uoc3JjOiBzdHJpbmcsIHVwZGF0ZVN0YXR1czogU3RhdHVzRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZycpO1xyXG4gICAgICBsZXQgdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICBjb25zdCBwMiA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBjb25zdCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gc3JjLnNwbGl0KCdcXG4nKTtcclxuICAgICAgcC5sb2coJ3NwbGl0Jyk7XHJcblxyXG4gICAgICBjb25zdCB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgY29uc3Qgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgY29uc3QgdkluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGNvbnN0IG5JbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBsZXQgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICBsZXQgY29udGFpbnNOb3JtYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgLy8gcmVwb3J0IHByb2dyZXNzIGV2ZXJ5IDUwIG1zXHJcbiAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdCA+IDUwKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogJyArICgxMDAgKiBpIC8gbGluZXMubGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICAgICAgICAgICB0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XHJcbiAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3YgJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1sxXSkpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbM10pKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3ZuICcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1sxXSkpO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzNdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCdmICcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHRoaXMucGFyc2VGYWNlKGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICBpZiAocmV0LmlWLmxlbmd0aCAhPT0gcmV0LmlOLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICBjb250YWluc05vcm1hbHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOb3JtYWxzIG5vdCBzcGVjaWZpZWQgaW4gZmlsZS4gRmxhdCBub3JtYWxzIHdpbGwgYmUgY29tcHV0ZWQuJyk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXQuaVYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5pVltpXSAhPSByZXQuaU5baV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdWZXJ0aWNlcyBhbmQgbm9ybWFscyBkb25cXCd0IG1hdGNoLiBDb250ZW50IHdpbGwgYmUgcmUtaW5kZXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJldC5pVi5sZW5ndGggPT09IDQpIHtcclxuXHJcbiAgICAgICAgICAgICAgIHZJbmRpY2VzLnB1c2gocmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSk7XHJcbiAgICAgICAgICAgICAgIHZJbmRpY2VzLnB1c2gocmV0LmlWWzBdLCByZXQuaVZbMl0sIHJldC5pVlszXSk7XHJcbiAgICAgICAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgICAgbkluZGljZXMucHVzaChyZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKTtcclxuICAgICAgICAgICAgICAgICAgbkluZGljZXMucHVzaChyZXQuaU5bMF0sIHJldC5pTlsyXSwgcmV0LmlOWzNdKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB2SW5kaWNlcy5wdXNoKHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0pO1xyXG4gICAgICAgICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5JbmRpY2VzLnB1c2gocmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdwYXJzZScpO1xyXG5cclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcclxuICAgICAgICAgdGhpcy5pbmRpY2VzID0gdkluZGljZXM7XHJcblxyXG4gICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMgPSBbXTtcclxuICAgICAgICAgdGhpcy5pbmRpY2VzID0gW107XHJcblxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZJbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0aWNlc1szICogdkluZGljZXNbaV0gKyAwXSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0aWNlc1szICogdkluZGljZXNbaV0gKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0aWNlc1szICogdkluZGljZXNbaV0gKyAyXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbHNbMyAqIG5JbmRpY2VzW2ldICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWxzWzMgKiBuSW5kaWNlc1tpXSArIDFdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsc1szICogbkluZGljZXNbaV0gKyAyXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKGkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHAubG9nKCdyZWluZGV4Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb250YWluc05vcm1hbHMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMoTm9ybWFsVHlwZS5GbGF0KTtcclxuICAgICAgICAgcC5sb2coJ2NvbXB1dGUgbm9ybWFscycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpbmRCb3VuZHMoKTtcclxuICAgICAgcC5sb2coJ2ZpbmRCb3VuZHMnKTtcclxuICAgICAgcDIubG9nKCdUb3RhbCcpO1xyXG5cclxuICAgICAgdXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nOiAxMDAlJyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnVmVydGljZXM6ICcgKyB0aGlzLnZlcnRpY2VzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb3JtYWxzOiAnICsgdGhpcy5ub3JtYWxzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUcmlhbmdsZXM6ICcgKyB0aGlzLm51bVRyaWFuZ2xlcyk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBpbnRlcmZhY2UgSVZlYzMge1xyXG4gICB4OiBudW1iZXI7XHJcbiAgIHk6IG51bWJlcjtcclxuICAgejogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBWZWN0b3IgY2xhc3MgZm9yIHVzZSB3aXRoIFdlYkdMIGFwcGxpY2F0aW9ucy5cclxuICovXHJcbmNsYXNzIFZlYyB7XHJcblxyXG4gICAvKiogVGhlIHZlY3RvciB2YWx1ZXMuICovXHJcbiAgIHB1YmxpYyB2YWx1ZXM6IG51bWJlcltdO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWx1ZXNPclNpemUgSWYgYSBhcnJheSwgdGhlIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci4gSWYgYSBudW1iZXIsIHRoZSBzaXplIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWVzT3JTaXplOiBudW1iZXIgfCBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFsdWVzT3JTaXplIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBbLi4udmFsdWVzT3JTaXplXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgQXJyYXkodmFsdWVzT3JTaXplKTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNPclNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybiBUaGUgdmVjdG9yIG1hZ25pdHVkZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IHRoaXMudmFsdWVzW2ldICogdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzIgZXh0ZW5kcyBWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3JcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWMyIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMyKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgdG8gYW5vdGhlciBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciBwb2ludFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHBvaW50IGFuZCB0aGUgb3RoZXIgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXN0YW5jZShvdGhlcjogVmVjMik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54IC0gb3RoZXIueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSBvdGhlci55LCAyKSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBkaWdpdHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBkaXNwbGF5LiBUaGlzIHZhbHVlIGlzIHBhc3NlZCB0byB0b0ZpeGVkKCkuXHJcbiAgICAqIEBwYXJhbSBkaXZpZGVyIFRoZSBzdHJpbmcgdG8gc2VwYXJhdGUgZWFjaCBudW1iZXIuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvU3RyaW5nKGRpZ2l0cyA9IDIsIGRpdmlkZXIgPSAnLCcpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy54LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnkudG9GaXhlZChkaWdpdHMpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkteiB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVjMyBleHRlbmRzIFZlYyBpbXBsZW1lbnRzIElWZWMzIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9yaWdpbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFswLCAwLCAwXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHgteSBjb21wb25lbnRzIGFzIGEgMmQgdmVjXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm4gdGhlIFZlYzNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeHkoKTogVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMihbdGhpcy54LCB0aGlzLnldKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGRpZ2l0cyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGRpc3BsYXkuIFRoaXMgdmFsdWUgaXMgcGFzc2VkIHRvIHRvRml4ZWQoKS5cclxuICAgICogQHBhcmFtIGRpdmlkZXIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBlYWNoIG51bWJlci5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzID0gMiwgZGl2aWRlciA9ICcsJyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLngudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMueS50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy56LnRvRml4ZWQoZGlnaXRzKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBSZXR1cm5zIGEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHJlc3VsdGluZyBub3JtYWxpemVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBub3JtYWxpemUoKTogVmVjMyB7XHJcbiAgICAgIGNvbnN0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGlmIChtYWcgPT09IDApIHtcclxuICAgICAgICAgcmV0dXJuIG5ldyBWZWMzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLm11bHQoMSAvIG1hZyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgbWVtYmVycyBieSBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSBuZXcgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIG11bHRpcGxpY2F0aW9uIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHQodmFsdWU6IG51bWJlcik6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnggKiB2YWx1ZSxcclxuICAgICAgICAgdGhpcy55ICogdmFsdWUsXHJcbiAgICAgICAgIHRoaXMueiAqIHZhbHVlLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHZlY3RvciBwb2ludGluZyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIG5lZ2F0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5lZ2F0ZSgpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFstdGhpcy54LCAtdGhpcy55LCAtdGhpcy56XSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdWJ0cmFjdHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gc3VidHJhY3QuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3VidHJhY3QodmVjOiBWZWMzKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC0gdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLSB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAtIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBBZGRzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIGFkZC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhZGQodmVjOiBWZWMzKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdICsgdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gKyB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSArIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjcm9zcyhvdGhlcjogVmVjMyk6IFZlYzMge1xyXG4gICAgICBjb25zdCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGNvbnN0IEIgPSBvdGhlci52YWx1ZXM7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIEFbMV0gKiBCWzJdIC0gQVsyXSAqIEJbMV0sXHJcbiAgICAgICAgIEFbMl0gKiBCWzBdIC0gQVswXSAqIEJbMl0sXHJcbiAgICAgICAgIEFbMF0gKiBCWzFdIC0gQVsxXSAqIEJbMF1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHBvaW50IHRvIGEgc3BlY2lmaWVkIHBvaW50LlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHB0IFRoZSBwb2ludC5cclxuICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIHRvIHRoZSBwb2ludC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXN0VG9Qb2ludChwdDogVmVjMyk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KHB0KS5tYWduaXR1ZGUoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEJ1aWxkcyBhIFZlYzQgZnJvbSB0aGlzIFZlYzNcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB3IFRoZSB3IGNvbXBvbmVudCBvZiB0aGUgbmV3IHZlY3Rvci5cclxuICAgICogQHJldHVybnMgVGhlIG5ldyB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9WZWM0KHc6IG51bWJlcik6IFZlYzQge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzQoW3RoaXMueCwgdGhpcy55LCB0aGlzLnosIHddKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXotdyB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVjNCBleHRlbmRzIFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWxzPzogbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHMpIHtcclxuICAgICAgICAgc3VwZXIodmFscyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHN1cGVyKDQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgdygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbM107XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB3KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzNdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgeC15LXogY29tcG9uZW50cyBhcyBhIDNkIHZlY1xyXG4gICAgKiBcclxuICAgICogQHJldHVybiB0aGUgVmVjM1xyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4eXooKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbdGhpcy54LCB0aGlzLnksIHRoaXMuel0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IFZlYzQge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzQodGhpcy52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhbiB4LXkteiB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IGlzIGNvbXB1dGVkIGJ5IGRpdmlkaW5nIHRoaXMgdmVjdG9yc1xyXG4gICAgKiBlbGVtZW50cyBieSB0aGUgdyB2YWx1ZS5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIEFuIHgteS16IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXZpZGVCeVcoKTogVmVjMyB7XHJcbiAgICAgIGNvbnN0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBWZWM0IHtcclxuICAgICAgY29uc3QgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgY29uc3QgcmV0ID0gdGhpcy5jbG9uZSgpO1xyXG4gICAgICBpZiAobWFnICE9PSAwKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmV0LnZhbHVlc1tpXSAvPSBtYWc7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBWZWM0IGZyb20gYSBWZWMzIG9iamVjdFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgVmVjMyBvYmplY3RcclxuICAgICogQHBhcmFtIHcgVGhlIHcgdmFsdWUgZm9yIHRoZSBWZWM0XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGZyb21WZWMzKHZlYzogVmVjMywgdyA9IDEpOiBWZWM0IHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWM0KFt2ZWMueCwgdmVjLnksIHZlYy56LCB3XSk7XHJcbiAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==