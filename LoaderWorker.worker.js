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
                    res = new TextDecoder("utf-8").decode(chunksAll);
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
                var txt = new TextDecoder("utf-8").decode(reader.result);
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
/*! exports provided: isMobile, clamp, toDeg, toRad, mix, toCss, toSizeStr, toTimeStr, getBooleanValue, iOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
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
    if (typeof value === 'boolean') {
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
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
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
        this.startTime = performance.now();
    }
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
            return (performance.now() - this.startTime);
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
/*! exports provided: NormalType, TriangleObjData, TriangleObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalType", function() { return NormalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleObjData", function() { return TriangleObjData; });
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
                ;
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
        var data = new TriangleObjData;
        data.name = this.name;
        data.vertices = new Float32Array(this.vertices);
        data.normals = new Float32Array(this.normals);
        data.indices = new Int32Array(this.indices);
        data.boxMin = this.box.min.clone();
        data.boxMax = this.box.max.clone();
        return data;
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
            var data, bFile, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        data = new TriangleObjData();
                        return [4 /*yield*/, _Util_BlobFile__WEBPACK_IMPORTED_MODULE_7__["BlobFile"].extract(blob)];
                    case 1:
                        bFile = _s.sent();
                        data.name = bFile.info.Name;
                        data.source = bFile.info.Source;
                        _a = data;
                        _b = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[0].arrayBuffer()];
                    case 2:
                        _a.vertices = new (_b.apply(Float32Array, [void 0, _s.sent()]))();
                        _c = data;
                        _d = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[1].arrayBuffer()];
                    case 3:
                        _c.normals = new (_d.apply(Float32Array, [void 0, _s.sent()]))();
                        _e = data;
                        _f = Int32Array.bind;
                        return [4 /*yield*/, bFile.parts[2].arrayBuffer()];
                    case 4:
                        _e.indices = new (_f.apply(Int32Array, [void 0, _s.sent()]))();
                        _g = data;
                        _h = _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"].bind;
                        _k = (_j = Array).from;
                        _l = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[3].arrayBuffer()];
                    case 5:
                        _g.boxMin = new (_h.apply(_Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"], [void 0, _k.apply(_j, [new (_l.apply(Float32Array, [void 0, _s.sent()]))()])]))();
                        _m = data;
                        _o = _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"].bind;
                        _q = (_p = Array).from;
                        _r = Float32Array.bind;
                        return [4 /*yield*/, bFile.parts[4].arrayBuffer()];
                    case 6:
                        _m.boxMax = new (_o.apply(_Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"], [void 0, _q.apply(_p, [new (_r.apply(Float32Array, [void 0, _s.sent()]))()])]))();
                        return [2 /*return*/, data];
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
    function TriangleObjFile(name, src, updateStatus) {
        var _this = _super.call(this, name) || this;
        // record the status function. If one is not supplied, create one that does nothing
        if (!updateStatus) {
            updateStatus = function (status) { };
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
        return new Vec4([vec.x, vec.y, vec.z, 1]);
    };
    return Vec4;
}(Vec));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcHMvVmlld2VyL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9CbG9iU2hpbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbC9HbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsL1N0b3B3YXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL0JvdW5kaW5nQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvQm91bmRpbmdQdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwzRC9JbmRleGVkVmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbDNEL1RyaWFuZ2xlT2JqLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9VdGlsM0QvVmVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxLQUFrQjtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLEdBQVM7UUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUkseUNBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUkseUNBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMs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QUVELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGlDQUFJO2FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFD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SSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDckIsR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzSTtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsR0FBRyxJQUFJLElBQUk7Z0JBQ1IsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztnQkFDcEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztnQkFDcEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzNDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRU0sOEJBQVEsR0FBZixV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R0FBRyxPQUFPLENBQUM7YUFDekI7U0FDSDthQUNJO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsQ0FBQyxD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QixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO2FBQ3ZCO1NBQ0g7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLGFBQVEsR0FBdEIsVUFBdUIsR0FBUyxFQUFFLENBQVM7UUFDeEMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNKLFdBQUM7QUFBRCxDQUFDLENBakp5QixHQUFHLEdBaUo1QiIsImZpbGUiOiJMb2FkZXJXb3JrZXIud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc3JjL0FwcHMvVmlld2VyL0xvYWRlcldvcmtlci50c1wiKTtcbiIsImltcG9ydCB7IFRyaWFuZ2xlT2JqRGF0YSwgVHJpYW5nbGVPYmogfSBmcm9tIFwiLi4vLi4vVXRpbDNEL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFRyaWFuZ2xlT2JqRmlsZSB9IGZyb20gXCIuLi8uLi9VdGlsM0QvVHJpYW5nbGVPYmpGaWxlXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgd29ya2VyIHRoYXQgbG9hZHMgYW5kIHByb2Nlc3NlcyB0aGUgLm9iaiBmaWxlXHJcbiAqL1xyXG5jb25zdCB3b3JrZXI6IFdvcmtlciA9IHNlbGYgYXMgYW55O1xyXG5cclxuLy8gSGFuZGxlciBmb3IgcmVjZWl2aW5nIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkXHJcbndvcmtlci5vbm1lc3NhZ2UgPSAoeyBkYXRhIH06IHsgZGF0YTogc3RyaW5nIH0pID0+IHtcclxuXHJcbiAgIC8vIHdoZW4gd2UgcmVjZWl2ZSBhIHN0cmluZyBhcyBhIG1lc3NhZ2UsIGl0J3MgdGhlIHVybCBvZiB0aGUgZmlsZSB0byBsb2FkXHJcbiAgIGxvYWRGaWxlKGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0byBsb2FkIGEgZmlsZVxyXG4gKiBcclxuICogQHBhcmFtIGZpbGUgVGhlIHVybCBvZiB0aGUgZmlsZSB0byBsb2FkXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkRmlsZShmaWxlOiBzdHJpbmcpIHtcclxuXHJcbiAgIC8vIHRoZSBpbml0aWFsIHN0YXR1cyBtZXNzYWdlXHJcbiAgIHdvcmtlci5wb3N0TWVzc2FnZSgnRG93bmxvYWRpbmcgMCUnKTtcclxuXHJcbiAgIHRyeSB7XHJcbiAgICAgIGxldCBjaHVua3NBbGwgPSBhd2FpdCBmZXRjaERhdGEoZmlsZSk7XHJcbiAgICAgIGxldCBkYXRhOiBUcmlhbmdsZU9iakRhdGE7XHJcblxyXG4gICAgICBpZiAoZmlsZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcub2JqJykpIHtcclxuICAgICAgICAgLy8gZGVjb2RlIGludG8gYSBzdHJpbmdcclxuICAgICAgICAgbGV0IHJlcyA9IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpLmRlY29kZShjaHVua3NBbGwpO1xyXG5cclxuICAgICAgICAgLy8gdHVybiB0aGUgLm9iaiBzdHJpbmcgaW50byB0cmlhbmdsZXNcclxuICAgICAgICAgbGV0IHRPYmogPSBuZXcgVHJpYW5nbGVPYmpGaWxlKGZpbGUsIHJlcywgKHN0YXR1cykgPT4geyB3b3JrZXIucG9zdE1lc3NhZ2Uoc3RhdHVzKTsgfSk7XHJcbiAgICAgICAgIGRhdGEgPSB0T2JqLnRvRGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGZpbGUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmJsb2InKSkge1xyXG4gICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjaHVua3NBbGxdKTtcclxuICAgICAgICAgZGF0YSA9IGF3YWl0IFRyaWFuZ2xlT2JqLmJsb2JUb0RhdGEoYmxvYik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJldHVybiB0aGUgcmVzdWx0IGFzIGFycmF5c1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZGF0YSwgW1xyXG4gICAgICAgICBkYXRhLnZlcnRpY2VzLmJ1ZmZlcixcclxuICAgICAgICAgZGF0YS5ub3JtYWxzLmJ1ZmZlcixcclxuICAgICAgICAgZGF0YS5pbmRpY2VzLmJ1ZmZlcixcclxuICAgICAgXSk7XHJcbiAgIH1cclxuICAgY2F0Y2ggKGVycikge1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZXJyKTtcclxuICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoZmlsZTogc3RyaW5nKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcblxyXG4gICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaWxlKTtcclxuXHJcbiAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShyZXNwb25zZS5zdGF0dXMgKyAnOiAnICsgZmlsZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcclxuICAgY29uc3QgY29udGVudExlbmd0aCA9ICtyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1MZW5ndGgnKTtcclxuXHJcbiAgIC8vIGxvb3AgdG8gbG9hZCB0aGUgZGF0YSwgb25lIGNodW5rIGF0IGEgdGltZVxyXG4gICBsZXQgcmVjZWl2ZWRMZW5ndGggPSAwOyAvLyByZWNlaXZlZCB0aGF0IG1hbnkgYnl0ZXMgYXQgdGhlIG1vbWVudFxyXG4gICBsZXQgY2h1bmtzID0gW107IC8vIGFycmF5IG9mIHJlY2VpdmVkIGJpbmFyeSBjaHVua3MgKGNvbXByaXNlcyB0aGUgYm9keSlcclxuICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcclxuXHJcbiAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaHVua3MucHVzaCh2YWx1ZSk7XHJcbiAgICAgIHJlY2VpdmVkTGVuZ3RoICs9IHZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSgnRG93bmxvYWRpbmc6ICcgKyAoMTAwICogcmVjZWl2ZWRMZW5ndGggLyBjb250ZW50TGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICB9XHJcblxyXG4gICAvLyBjb25jYXRlbmF0ZSBjaHVua3MgaW50byBzaW5nbGUgVWludDhBcnJheVxyXG4gICBsZXQgY2h1bmtzQWxsID0gbmV3IFVpbnQ4QXJyYXkocmVjZWl2ZWRMZW5ndGgpOyAvLyAoNC4xKVxyXG4gICBsZXQgcG9zaXRpb24gPSAwO1xyXG4gICBmb3IgKGxldCBjaHVuayBvZiBjaHVua3MpIHtcclxuICAgICAgY2h1bmtzQWxsLnNldChjaHVuaywgcG9zaXRpb24pOyAvLyAoNC4yKVxyXG4gICAgICBwb3NpdGlvbiArPSBjaHVuay5sZW5ndGg7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBjaHVua3NBbGw7XHJcbn0iLCJpbXBvcnQgJy4vQmxvYlNoaW0nO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNsYXNzIGZvciBzbGljaW5nIHVwIEJsb2JzXHJcbiAqL1xyXG5jbGFzcyBCbG9iU2xpY2VyIHtcclxuXHJcbiAgIC8vIFRoZSBzdGFydCBieXRlIHZhbHVlIGZvciB0aGUgbmV4dCBzbGljZVxyXG4gICBwcml2YXRlIHN0YXJ0ID0gMDtcclxuXHJcbiAgIC8vIFRoZSBCbG9iIHdlJ3JlIHNsaWNpbmcgXHJcbiAgIHByaXZhdGUgYmxvYjogQmxvYjtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gYmxvYiBUaGUgQmxvYiB0byBiZSBzbGljZWRcclxuICAgICovXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihibG9iOiBCbG9iKSB7XHJcbiAgICAgIHRoaXMuYmxvYiA9IGJsb2I7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBuZXh0IHNsaWNlLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgVGhlIHNsaWNlZCBCbG9iLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5leHQobGVuOiBudW1iZXIpOiBCbG9iIHtcclxuICAgICAgbGV0IGIgPSB0aGlzLmJsb2Iuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5zdGFydCArIGxlbik7XHJcbiAgICAgIHRoaXMuc3RhcnQgKz0gbGVuO1xyXG4gICAgICByZXR1cm4gYjtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNsaWNlcyB0aGUgQmxvYiBhbmQgcmV0dXJucyBpdCBhcyBhbiBBcnJheUJ1ZmZlci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEFuIEFycmF5QnVmZmVyIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbmV4dEFycmF5QnVmZmVyKGxlbjogbnVtYmVyKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXh0KGxlbikuYXJyYXlCdWZmZXIoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNsaWNlcyB0aGUgQmxvYiBhbmQgcmV0dXJucyBpdCBhcyBhbiBJbnQzMkFycmF5XHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEFuIEludDMyQXJyYXkgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhc3luYyBuZXh0SW50MzJBcnJheShsZW46IG51bWJlcik6IFByb21pc2U8SW50MzJBcnJheT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEludDMyQXJyYXkoYXdhaXQgdGhpcy5uZXh0QXJyYXlCdWZmZXIobGVuKSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYSBzdHJpbmdcclxuICAgICpcclxuICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSBzbGljZS5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhc3luYyBuZXh0U3RyaW5nKGxlbjogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV4dChsZW4pLnRleHQoKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFuYWdlcyBjcmVhdGlvbiBhbmQgZXh0cmFjdGlvbiBvZiBhIHNlbGYgZGVzY3JpYmluZyBCbG9iLiBEYXRhXHJcbiAqIGlzIHN0b3JlZCBhczpcclxuICogXHJcbiAqIFtudW1FbnRyaWVzXSAtIFRoZSBudW1iZXIgZW50cmllcyBpbiB0aGUgZmlsZS4gNCBieXRlIEludDMyXHJcbiAqIFtzaXplc10gLSBTaXplcyBvZiBhbGwgdGhlIGVudHJpZXMsIGluY2x1ZGluZyB0aGUgaW5mbyBvYmplY3RcclxuICogW2luZm9dIC0gVXNlciBzdXBwbGllZCBkYXRhIGFzIGEgSlNPTiBzdHJpbmdcclxuICogW2VudHJ5IDFdIC0gRmlyc3QgdXNlciBlbnRyeVxyXG4gKiBbZW50cnkgMl0gLSBTZWNvbmQgdXNlciBlbnRyeVxyXG4gKiBbLi4uXVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2JGaWxlIHtcclxuICAgcHVibGljIGluZm86IGFueTtcclxuICAgcHVibGljIHBhcnRzOiBCbG9iW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gaGVhZGVyIHRvIGJlIHN0b3JlZCB3aXRoIHRoZSBCbG9iXHJcbiAgICAqIEBwYXJhbSBwYXJ0cyBUaGUgZGF0YSBjb250ZW50cyBvZiB0aGUgQmxvYlxyXG4gICAgKi9cclxuICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihpbmZvOiBvYmplY3QsIHBhcnRzOiBCbG9iW10pIHtcclxuICAgICAgdGhpcy5pbmZvID0gaW5mbztcclxuICAgICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29udmVydHMgYSByYXcgQmxvYiBvYmplY3QgaW50byBhIEJsb2JGaWxlXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gYmxvYiBUaGUgQmxvYiB0byBwcm9jZXNzLlxyXG4gICAgKiBAcmV0dXJuIEEgQmxvYkZpbGUgcHJvbWlzZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZXh0cmFjdChibG9iOiBCbG9iKTogUHJvbWlzZTxCbG9iRmlsZT4ge1xyXG5cclxuICAgICAgbGV0IGJsb2JTbGljZXIgPSBuZXcgQmxvYlNsaWNlcihibG9iKTtcclxuXHJcbiAgICAgIC8vIGZpcnN0IGV4dHJhY3QgdGhlIG51bWJlciBvZiBlbnRyaWVzXHJcbiAgICAgIGxldCBudW1FbnRyaWVzID0gKGF3YWl0IGJsb2JTbGljZXIubmV4dEludDMyQXJyYXkoNCkpWzBdO1xyXG5cclxuICAgICAgLy8gdGhlIHRoZSBzaXplcyBhcnJheVxyXG4gICAgICBsZXQgc2l6ZXMgPSBhd2FpdCBibG9iU2xpY2VyLm5leHRJbnQzMkFycmF5KDQgKiAobnVtRW50cmllcyArIDEpKTtcclxuXHJcbiAgICAgIC8vIHRoZW4gdGhlIGluZm8gb2JqZWN0XHJcbiAgICAgIGxldCBqc29uSW5mbyA9IGF3YWl0IGJsb2JTbGljZXIubmV4dFN0cmluZyhzaXplc1swXSk7XHJcblxyXG4gICAgICAvLyB0aGVuIGFsbCB0aGUgc3ViIGJsb2JzXHJcbiAgICAgIGxldCBwYXJ0czogQmxvYltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRW50cmllczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBzaXplID0gc2l6ZXNbaSArIDFdO1xyXG4gICAgICAgICBwYXJ0cy5wdXNoKGJsb2JTbGljZXIubmV4dChzaXplKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgQmxvYkZpbGUoSlNPTi5wYXJzZShqc29uSW5mbyksIHBhcnRzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIEJsb2JGaWxlIEJsb2JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBpbmZvIFRoZSBpbmZvcm1hdGlvbiBoZWFkZXIgdG8gYmUgc3RvcmVkIHdpdGggdGhlIEJsb2JcclxuICAgICogQHBhcmFtIHBhcnRzIFRoZSBkYXRhIGNvbnRlbnRzIG9mIHRoZSBCbG9iXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJsb2IoaW5mbzogb2JqZWN0LCBwYXJ0czogQmxvYlBhcnRbXSk6IEJsb2Ige1xyXG5cclxuICAgICAgbGV0IGpzb25JbmZvID0gSlNPTi5zdHJpbmdpZnkoaW5mbyk7XHJcblxyXG4gICAgICAvLyBCdWlsZCB0aGUgYXJyYXkgb2Ygc2l6ZXNcclxuICAgICAgbGV0IHNpemVzOiBudW1iZXJbXSA9IFtqc29uSW5mby5sZW5ndGhdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBwYXJ0ID0gcGFydHNbaV07XHJcbiAgICAgICAgIGlmIChwYXJ0IGluc3RhbmNlb2YgSW50MzJBcnJheSkge1xyXG4gICAgICAgICAgICBzaXplcy5wdXNoKDQgKiBwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAocGFydCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xyXG4gICAgICAgICAgICBzaXplcy5wdXNoKDQgKiBwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAocGFydCBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgICAgICBzaXplcy5wdXNoKHBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9ICdVbnN1cHBvcnRlZCBCbG9iIFBhcnQgVHlwZTogJyArIHR5cGVvZiBwYXJ0O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFzc2VtYmxlIHRoZSBibG9iIHBhcnRzXHJcbiAgICAgIGxldCBhbGxQYXJ0czogQmxvYlBhcnRbXSA9IFtdO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKG5ldyBJbnQzMkFycmF5KFtwYXJ0cy5sZW5ndGhdKSk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2gobmV3IEludDMyQXJyYXkoc2l6ZXMpKTtcclxuICAgICAgYWxsUGFydHMucHVzaChqc29uSW5mbyk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2goLi4ucGFydHMpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBibG9iXHJcbiAgICAgIHJldHVybiBuZXcgQmxvYihhbGxQYXJ0cyk7XHJcbiAgIH1cclxufSIsIi8vIG5lZWRlZCBmb3IgU2FmYXJpXHJcbmlmICghQmxvYi5wcm90b3R5cGUuYXJyYXlCdWZmZXIpIHtcclxuICAgQmxvYi5wcm90b3R5cGUuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG5cclxuICAgICAgLy8gcmVhZCB0aGUgQmxvYiB0aGUgb2xkIGZhc2hpb25lZCB3YXlcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RhcnQgdGhlIHJlYWRcclxuICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcblxyXG4vLyBuZWVkZWQgZm9yIFNhZmFyaVxyXG5pZiAoIUJsb2IucHJvdG90eXBlLnRleHQpIHtcclxuXHJcbiAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgIEJsb2IucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiAoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgLy8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gZGVjb2RlIGludG8gYSBzdHJpbmdcclxuICAgICAgICAgICAgbGV0IHR4dCA9IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpLmRlY29kZShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0eHQpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0YXJ0IHRoZSByZWFkXHJcbiAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG4iLCJcclxuZXhwb3J0IHR5cGUgU3RhdHVzRnVuY3Rpb24gPSAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gdjEgKyBjbGFtcChtaXgsIDAsIDEpICogKHYyIC0gdjEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3MocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAoYSA9PT0gdW5kZWZpbmVkID8gJycgOiAnLCcgKyBhKSArICcpJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvU2l6ZVN0cih2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIGlmICh2YWwgPCAxMDI0KSB7XHJcbiAgICAgIHJldHVybiB2YWwgKyAnIGJ5dGVzJztcclxuICAgfVxyXG4gICBlbHNlIGlmICh2YWwgPCAxMDI0ICogMTAyNCkge1xyXG4gICAgICByZXR1cm4gKHZhbCAvIDEwMjQpLnRvRml4ZWQoMSkgKyAnIGtiJztcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuICh2YWwgLyAoMTAyNCAqIDEwMjQpKS50b0ZpeGVkKDEpICsgJyBtYic7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZVN0cih2YWw6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIGlmICh2YWwgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiB2YWwudG9GaXhlZCgwKSArICcgbXMnO1xyXG4gICB9XHJcbiAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gKHZhbCAvIDEwMDApLnRvRml4ZWQoMSkgKyAnIHMnO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCb29sZWFuVmFsdWUodmFsdWU6IGJvb2xlYW4gfCAoKCkgPT4gYm9vbGVhbikpOiBib29sZWFuIHtcclxuICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgfVxyXG4gICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlKCk7XHJcbiAgIH1cclxuICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaU9TKCkge1xyXG4gICByZXR1cm4gW1xyXG4gICAgICAnaVBhZCBTaW11bGF0b3InLFxyXG4gICAgICAnaVBob25lIFNpbXVsYXRvcicsXHJcbiAgICAgICdpUG9kIFNpbXVsYXRvcicsXHJcbiAgICAgICdpUGFkJyxcclxuICAgICAgJ2lQaG9uZScsXHJcbiAgICAgICdpUG9kJ1xyXG4gICBdLmluY2x1ZGVzKG5hdmlnYXRvci5wbGF0Zm9ybSlcclxuICAgICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXHJcbiAgICAgIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiTWFjXCIpICYmIFwib250b3VjaGVuZFwiIGluIGRvY3VtZW50KVxyXG59IiwiaW1wb3J0IHsgU3RvcHdhdGNoIH0gZnJvbSBcIi4vU3RvcHdhdGNoXCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgbG9nZ2luZyB0aW1pbmcgbWVzc2FnZXMgZm9yIHByb2ZpbGUgY29kZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVyIHtcclxuXHJcbiAgIHByaXZhdGUgc3cgPSBuZXcgU3RvcHdhdGNoKCk7XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsYXBzZWQgdGltZSBpbiBtaWxsaXNlY29uZHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZWxhcHNlZE1zKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdy5lbGFwc2VkTXM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBQcmludHMgYSBtZXNzYWdlIHRvIGNvbnNvbGUgb2YgdGhlIGVsYXBzZWQgdGltZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG1zZyBUaGUgbWVzc2FnZSB0byBwcmludCB3aXRoIHRoZSB0aW1lXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbG9nKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZyArICcgJyArIHRoaXMuZWxhcHNlZE1zLnRvRml4ZWQoMSkgKyAnIG1zJyk7XHJcbiAgICAgIHRoaXMuc3cucmVzdGFydCgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyB0b1RpbWVTdHIgfSBmcm9tIFwiLi9HbG9iYWxzXCI7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgdHJhY2tpbmcgdGltZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3B3YXRjaCB7XHJcblxyXG4gICBwcml2YXRlIHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBlbGFwc2VkIHRpbWUgaW4gYXMgYSBzdHJpbmdcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZWxhcHNlZFN0cigpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdG9UaW1lU3RyKHRoaXMuZWxhcHNlZE1zKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFRoZSBlbGFwc2VkIHRpbWUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogVGhlIGVsYXBzZWQgdGltZSBpbiBtaWxsaXNlY29uZHNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgZWxhcHNlZFMoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZE1zIC8gMTAwMDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJlc2V0cyBlbGFwc2VkIHRpbWUgdG8gMFxyXG4gICAgKi9cclxuICAgcHVibGljIHJlc3RhcnQoKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlYzMsIElWZWMzLCBWZWM0IH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IE1hdDQgfSBmcm9tIFwiLi9NYXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1pbk1heCB7XHJcbiAgIHJlYWRvbmx5IG1pbjogbnVtYmVyO1xyXG4gICByZWFkb25seSBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvdW5kaW5nQm94IHtcclxuICAgcHVibGljIG1pbjogVmVjMztcclxuICAgcHVibGljIG1heDogVmVjMztcclxuXHJcbiAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueSAtIHRoaXMubWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRpYWdvbmFsKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCB3ID0gdGhpcy53aWR0aDtcclxuICAgICAgbGV0IGggPSB0aGlzLmhlaWdodDtcclxuICAgICAgbGV0IGQgPSB0aGlzLmRlcHRoO1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHcgKiB3ICsgaCAqIGggKyBkICogZCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgY2VudGVyKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICAodGhpcy5taW4ueCArIHRoaXMubWF4LngpIC8gMixcclxuICAgICAgICAgKHRoaXMubWluLnkgKyB0aGlzLm1heC55KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLm1pbi56ICsgdGhpcy5tYXgueikgLyAyLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjb3JuZXJzKCk6IFZlYzNbXSB7XHJcbiAgICAgIGxldCBjb3JuZXJzOiBWZWMzW10gPSBbXTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWluLngsIHRoaXMubWluLnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5taW4ueCwgdGhpcy5tYXgueSwgdGhpcy5taW4uel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1heC55LCB0aGlzLm1heC56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWluLnksIHRoaXMubWluLnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5tYXgueCwgdGhpcy5taW4ueSwgdGhpcy5tYXguel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1heC54LCB0aGlzLm1heC55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIHJldHVybiBjb3JuZXJzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobWluOiBWZWMzID0gbmV3IFZlYzMoW051bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUVdKSxcclxuICAgICAgbWF4OiBWZWMzID0gbmV3IFZlYzMoWy1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUVdKSkge1xyXG4gICAgICB0aGlzLm1pbiA9IG1pbjtcclxuICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluZmluaXRlKCk6IEJvdW5kaW5nQm94IHtcclxuICAgICAgY29uc3QgTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xyXG4gICAgICBjb25zdCBNSU4gPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgIHJldHVybiBuZXcgQm91bmRpbmdCb3gobmV3IFZlYzMoW01JTiwgTUlOLCBNSU5dKSwgbmV3IFZlYzMoW01BWCwgTUFYLCBNQVhdKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBpbnNpZGUodmVjOiBJVmVjMyk6IGJvb2xlYW4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIHZlYy54ID49IHRoaXMubWluLnggJiYgdmVjLnggPD0gdGhpcy5tYXgueCAmJlxyXG4gICAgICAgICB2ZWMueSA+PSB0aGlzLm1pbi55ICYmIHZlYy55IDw9IHRoaXMubWF4LnkgJiZcclxuICAgICAgICAgdmVjLnogPj0gdGhpcy5taW4ueiAmJiB2ZWMueiA8PSB0aGlzLm1heC56XHJcbiAgICAgICkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIpIHtcclxuICAgICAgcmV0dXJuICdbJyArIHRoaXMubWluLnRvU3RyaW5nKGRpZ2l0cykgKyAnXScgK1xyXG4gICAgICAgICAnWycgKyB0aGlzLm1heC50b1N0cmluZyhkaWdpdHMpICsgJ10nO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlKHY6IElWZWMzKSB7XHJcbiAgICAgIGlmIChpc05hTih2LngpIHx8IGlzTmFOKHYueSkgfHwgaXNOYU4odi56KSkge1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmFOJyk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1pbi54ID0gTWF0aC5taW4odGhpcy5taW4ueCwgdi54KTtcclxuICAgICAgdGhpcy5taW4ueSA9IE1hdGgubWluKHRoaXMubWluLnksIHYueSk7XHJcbiAgICAgIHRoaXMubWluLnogPSBNYXRoLm1pbih0aGlzLm1pbi56LCB2LnopO1xyXG4gICAgICB0aGlzLm1heC54ID0gTWF0aC5tYXgodGhpcy5tYXgueCwgdi54KTtcclxuICAgICAgdGhpcy5tYXgueSA9IE1hdGgubWF4KHRoaXMubWF4LnksIHYueSk7XHJcbiAgICAgIHRoaXMubWF4LnogPSBNYXRoLm1heCh0aGlzLm1heC56LCB2LnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbWVyZ2Uob3RoZXI6IEJvdW5kaW5nQm94KSB7XHJcbiAgICAgIHRoaXMubWluLnggPSBNYXRoLm1pbih0aGlzLm1pbi54LCBvdGhlci5taW4ueCk7XHJcbiAgICAgIHRoaXMubWluLnkgPSBNYXRoLm1pbih0aGlzLm1pbi55LCBvdGhlci5taW4ueSk7XHJcbiAgICAgIHRoaXMubWluLnogPSBNYXRoLm1pbih0aGlzLm1pbi56LCBvdGhlci5taW4ueik7XHJcbiAgICAgIHRoaXMubWF4LnggPSBNYXRoLm1heCh0aGlzLm1heC54LCBvdGhlci5tYXgueCk7XHJcbiAgICAgIHRoaXMubWF4LnkgPSBNYXRoLm1heCh0aGlzLm1heC55LCBvdGhlci5tYXgueSk7XHJcbiAgICAgIHRoaXMubWF4LnogPSBNYXRoLm1heCh0aGlzLm1heC56LCBvdGhlci5tYXgueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBtdWx0TShtYXQ6IE1hdDQpOiBCb3VuZGluZ0JveCB7XHJcbiAgICAgIGxldCByZXQgPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgbGV0IHYxID0gbWF0Lm11bHRWKG5ldyBWZWM0KFt0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56LCAxXSkpO1xyXG4gICAgICBsZXQgdjIgPSBtYXQubXVsdFYobmV3IFZlYzQoW3RoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWF4LnosIDFdKSk7XHJcbiAgICAgIHJldC5taW4ueCA9IE1hdGgubWluKHYxLngsIHYyLngpO1xyXG4gICAgICByZXQubWluLnkgPSBNYXRoLm1pbih2MS55LCB2Mi55KTtcclxuICAgICAgcmV0Lm1pbi56ID0gTWF0aC5taW4odjEueiwgdjIueik7XHJcbiAgICAgIHJldC5tYXgueCA9IE1hdGgubWF4KHYxLngsIHYyLngpO1xyXG4gICAgICByZXQubWF4LnkgPSBNYXRoLm1heCh2MS55LCB2Mi55KTtcclxuICAgICAgcmV0Lm1heC56ID0gTWF0aC5tYXgodjEueiwgdjIueik7XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IElNaW5NYXggfSBmcm9tIFwiLi9Cb3VuZGluZ0JveFwiO1xyXG5pbXBvcnQgeyBQbGFuZSB9IGZyb20gXCIuLi9BcHBzL1ZpZXdlci9QbGFuZVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgc2V0IG9mIHBvaW50cyB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRpbmcgZWRnZXMgb2YgYW4gb2JqZWN0LiBBbGwgcG9pbnRzIGFyZVxyXG4gKiBlbmNsb3NlZCBpbiB0aGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQm91bmRpbmdQdHMge1xyXG4gICBwcml2YXRlIHB0czogVmVjM1tdO1xyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHB0czogVmVjM1tdKSB7XHJcbiAgICAgIHRoaXMucHRzID0gcHRzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0KGk6IG51bWJlcik6IFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5wdHNbaV07XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkaXN0VG9Qb2ludChwdDogVmVjMyk6IElNaW5NYXgge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgICAgIG1heDogLU51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHRzLmZvckVhY2goKHB0MjogVmVjMykgPT4ge1xyXG4gICAgICAgICBsZXQgeCA9IHB0Mi54IC0gcHQueDtcclxuICAgICAgICAgbGV0IHkgPSBwdDIueSAtIHB0Lnk7XHJcbiAgICAgICAgIGxldCB6ID0gcHQyLnogLSBwdC56O1xyXG4gICAgICAgICBsZXQgZCA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcclxuICAgICAgICAgcmV0Lm1pbiA9IE1hdGgubWluKGQsIHJldC5taW4pO1xyXG4gICAgICAgICByZXQubWF4ID0gTWF0aC5tYXgoZCwgcmV0Lm1heCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gZG9uJ3QgYm90aGVyIGdldHRpbmcgdGhlIHNxdWFyZSByb290IG9mIGV2ZXJ5IGNhbGN1bGF0aW9uLCBqdXN0IHRoZSBtaW4gYW5kIG1heFxyXG4gICAgICByZXQubWluID0gTWF0aC5zcXJ0KHJldC5taW4pO1xyXG4gICAgICByZXQubWF4ID0gTWF0aC5zcXJ0KHJldC5tYXgpO1xyXG5cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRpc3RUb1BsYW5lKHBsYW5lOiBQbGFuZSk6IElNaW5NYXgge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgICAgIG1heDogLU51bWJlci5NQVhfVkFMVUUsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucHRzLmZvckVhY2goKHB0OiBWZWMzKSA9PiB7XHJcbiAgICAgICAgIGxldCBkID0gcGxhbmUuZGlzdFRvUHQocHQpO1xyXG4gICAgICAgICByZXQubWluID0gTWF0aC5taW4oZCwgcmV0Lm1pbik7XHJcbiAgICAgICAgIHJldC5tYXggPSBNYXRoLm1heChkLCByZXQubWF4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBJbmRleGVkVmVjMyB9IGZyb20gXCIuL0luZGV4ZWRWZWMzXCI7XHJcbmltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuXHJcbi8qKlxyXG4gKiBNaW5pbWFsaXN0IHdyYXBwZXIgYXJvdW5kIGEgV2ViR0wgdHJpYW5nbGUgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgIHB1YmxpYyB2MTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBpMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaTI6IG51bWJlcjtcclxuICAgcHVibGljIGkzOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihcclxuICAgICAgdmVydGljZXM6IG51bWJlcltdLFxyXG4gICAgICBub3JtYWxzOiBudW1iZXJbXSxcclxuICAgICAgaTE6IG51bWJlcixcclxuICAgICAgaTI6IG51bWJlcixcclxuICAgICAgaTM6IG51bWJlcixcclxuICAgKSB7XHJcbiAgICAgIHRoaXMudjEgPSBuZXcgSW5kZXhlZFZlYzModmVydGljZXMsIGkxKTtcclxuICAgICAgdGhpcy52MiA9IG5ldyBJbmRleGVkVmVjMyh2ZXJ0aWNlcywgaTIpO1xyXG4gICAgICB0aGlzLnYzID0gbmV3IEluZGV4ZWRWZWMzKHZlcnRpY2VzLCBpMyk7XHJcbiAgICAgIHRoaXMubjEgPSBuZXcgSW5kZXhlZFZlYzMobm9ybWFscywgaTEpO1xyXG4gICAgICB0aGlzLm4yID0gbmV3IEluZGV4ZWRWZWMzKG5vcm1hbHMsIGkyKTtcclxuICAgICAgdGhpcy5uMyA9IG5ldyBJbmRleGVkVmVjMyhub3JtYWxzLCBpMyk7XHJcbiAgICAgIHRoaXMuaTEgPSBpMTtcclxuICAgICAgdGhpcy5pMiA9IGkyO1xyXG4gICAgICB0aGlzLmkzID0gaTM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5YKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYxLngsIHRoaXMudjIueCwgdGhpcy52My54KTtcclxuICAgfVxyXG4gICBnZXQgbWluWSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MS55LCB0aGlzLnYyLnksIHRoaXMudjMueSk7XHJcbiAgIH1cclxuICAgZ2V0IG1pblooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjEueiwgdGhpcy52Mi56LCB0aGlzLnYzLnopO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MS54LCB0aGlzLnYyLngsIHRoaXMudjMueCk7XHJcbiAgIH1cclxuICAgZ2V0IG1heFkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjEueSwgdGhpcy52Mi55LCB0aGlzLnYzLnkpO1xyXG4gICB9XHJcbiAgIGdldCBtYXhaKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYxLnosIHRoaXMudjIueiwgdGhpcy52My56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGxldCB2MSA9IHRoaXMudjEudG9WZWMzKCk7XHJcbiAgICAgIGxldCB2MiA9IHRoaXMudjIudG9WZWMzKCk7XHJcbiAgICAgIGxldCB2MyA9IHRoaXMudjMudG9WZWMzKCk7XHJcblxyXG4gICAgICBsZXQgYSA9IHYyLnN1YnRyYWN0KHYxKTtcclxuICAgICAgbGV0IGIgPSB2My5zdWJ0cmFjdCh2Mik7XHJcbiAgICAgIHJldHVybiBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVZlYzMsIFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkVmVjMyBpbXBsZW1lbnRzIElWZWMzIHtcclxuXHJcbiAgIHByaXZhdGUgdmFsdWVzOiBudW1iZXJbXTtcclxuICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IodmFsdWVzOiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMF07XHJcbiAgIH1cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDFdO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAyXTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMF0gPSB2YWw7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMV0gPSB2YWw7XHJcbiAgIH1cclxuICAgcHVibGljIHNldCB6KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b1ZlYzMoKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbdGhpcy54LCB0aGlzLnksIHRoaXMuel0pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWMzLCBJVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gXCIuL0JvdW5kaW5nQm94XCI7XHJcbmltcG9ydCB7IEJvdW5kaW5nUHRzIH0gZnJvbSBcIi4vQm91bmRpbmdQdHNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRWZWMzIH0gZnJvbSBcIi4vSW5kZXhlZFZlYzNcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi4vVXRpbC9HbG9iYWxzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4uL1V0aWwvUHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgQmxvYkZpbGUgfSBmcm9tIFwiLi4vVXRpbC9CbG9iRmlsZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gTm9ybWFsVHlwZSB7XHJcbiAgIFNtb290aCxcclxuICAgRmxhdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpEYXRhIHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICBzb3VyY2U6IHN0cmluZztcclxuICAgdmVydGljZXM6IEZsb2F0MzJBcnJheTtcclxuICAgbm9ybWFsczogRmxvYXQzMkFycmF5O1xyXG4gICBpbmRpY2VzOiBJbnQzMkFycmF5O1xyXG4gICBib3hNaW46IFZlYzM7XHJcbiAgIGJveE1heDogVmVjMztcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZnJvbSBhIGJ1bmNoIG9mIHRyaWFuZ2xlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iaiB7XHJcbiAgIHB1YmxpYyB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgcHVibGljIG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgIHB1YmxpYyBpbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwdWJsaWMgYm94ID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgcHJpdmF0ZSBib3VuZGluZ1B0czogQm91bmRpbmdQdHM7XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVZlcnRpY2VzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVRyaWFuZ2xlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveC53aWR0aDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmhlaWdodDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3guZGVwdGg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGlhZ29uYWwoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmRpYWdvbmFsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmNlbnRlcjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldFRyaWFuZ2xlKGluZGV4OiBudW1iZXIpOiBJbmRleGVkVHJpYW5nbGUge1xyXG4gICAgICBsZXQgaTEgPSB0aGlzLmluZGljZXNbMyAqIGluZGV4ICsgMF07XHJcbiAgICAgIGxldCBpMiA9IHRoaXMuaW5kaWNlc1szICogaW5kZXggKyAxXTtcclxuICAgICAgbGV0IGkzID0gdGhpcy5pbmRpY2VzWzMgKiBpbmRleCArIDJdO1xyXG4gICAgICByZXR1cm4gbmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCB0aGlzLm5vcm1hbHMsIGkxLCBpMiwgaTMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcHVzaFF1YWQodjE6IElWZWMzLCB2MjogSVZlYzMsIHYzOiBJVmVjMywgdjQ6IElWZWMzKSB7XHJcblxyXG4gICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2MSwgdjIsIHYzKTtcclxuICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjIsIHY0LCB2Myk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBwdXNoVHJpYW5nbGUodjE6IElWZWMzLCB2MjogSVZlYzMsIHYzOiBJVmVjMykge1xyXG5cclxuICAgICAgLy8gYWRkIGluZGljZXNcclxuICAgICAgbGV0IGkxID0gdGhpcy5udW1WZXJ0aWNlcztcclxuICAgICAgbGV0IGkyID0gaTEgKyAxO1xyXG4gICAgICBsZXQgaTMgPSBpMSArIDI7XHJcbiAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKGkxLCBpMiwgaTMpO1xyXG5cclxuICAgICAgLy8gYWRkIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaCh2MS54LCB2MS55LCB2MS56LCB2Mi54LCB2Mi55LCB2Mi56LCB2My54LCB2My55LCB2My56KTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYxKTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYyKTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYzKTtcclxuXHJcbiAgICAgIC8vIGFkZCBub3JtYWxzXHJcbiAgICAgIGxldCB0cmkgPSBuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHRoaXMubm9ybWFscywgaTEsIGkyLCBpMyk7XHJcbiAgICAgIGxldCBub3JtYWwgPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5ub3JtYWwudmFsdWVzKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm5vcm1hbC52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbHModHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcbiAgICAgICAgIGxldCBtdWx0aU5vcm1WZXJ0aWNlczogTXVsdGlOb3JtVmVydGV4W10gPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXMucHVzaChuZXcgTXVsdGlOb3JtVmVydGV4KCkpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgbm9ybWFscyB3aXRoIGVhY2ggdmVydGV4IC0gd2UnbGwgbGF0ZXIgYXZlcmFnZSB0aGVzZVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMuZ2V0VHJpYW5nbGUoaSk7XHJcbiAgICAgICAgICAgIGxldCBuID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmkxXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaTJdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pM10ucHVzaChuKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gcG9wdWxhdGUgdGhlIG5vcm1hbHMgYXJyYXlcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXVsdGlOb3JtVmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubXVsdGlOb3JtVmVydGljZXNbaV0ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gdG8gZ28gdGhpcyB3YXkgd2UgbmVlZCB0byBoYXZlIGEgdW5pcXVlIHZlY3RvciBhbmQgbm9ybWFsIGZvciBlYWNoIHRyaWFuZ2xlXHJcbiAgICAgICAgIC8vIGNvcm5lci4gQmxvdyBhd2F5IHRoZSBvbGQgc3R1ZmYgYW5kIHJlYnVpbGRcclxuICAgICAgICAgbGV0IG9sZEluZGljZXMgPSB0aGlzLmluZGljZXM7XHJcbiAgICAgICAgIGxldCBvbGRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XHJcblxyXG4gICAgICAgICAvLyByZXNldCBldmVyeXRoaW5nXHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xyXG5cclxuICAgICAgICAgLy8gcmVidWlsZFxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEluZGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2MSA9IG5ldyBJbmRleGVkVmVjMyhvbGRWZXJ0aWNlcywgb2xkSW5kaWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgbGV0IHYyID0gbmV3IEluZGV4ZWRWZWMzKG9sZFZlcnRpY2VzLCBvbGRJbmRpY2VzWzMgKiBpICsgMV0pO1xyXG4gICAgICAgICAgICBsZXQgdjMgPSBuZXcgSW5kZXhlZFZlYzMob2xkVmVydGljZXMsIG9sZEluZGljZXNbMyAqIGkgKyAyXSk7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHYxLCB2MiwgdjMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB4KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF07XHJcbiAgIH1cclxuICAgcHJpdmF0ZSB5KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMV07XHJcbiAgIH1cclxuICAgcHJpdmF0ZSB6KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl07XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBmaW5kQm91bmRzKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZmluZGluZyBib3VuZHMnKTtcclxuICAgICAgbGV0IGJveCA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG4gICAgICAgICBib3gudXBkYXRlKHRyaS52MSk7XHJcbiAgICAgICAgIGJveC51cGRhdGUodHJpLnYyKTtcclxuICAgICAgICAgYm94LnVwZGF0ZSh0cmkudjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveCA9IGJveDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEJyZWFrcyB0aGUgb2JqZWN0IGludG8gZXZlbmx5IHNwYWNlZCB2b2x1bWVzLiBUaGUgbnVtYmVyIG9mIHZvbHVtZXMgaXMgYXV0b21hdGljYWxseVxyXG4gICAgKiBkZXRlcm1pbmVkIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldEJvdW5kaW5nUHRzKCk6IEJvdW5kaW5nUHRzIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvdW5kaW5nUHRzKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmJvdW5kaW5nUHRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbnVtU3RlcHMgPSAxNTtcclxuXHJcbiAgICAgIGxldCBib3hlczogQm91bmRpbmdCb3hbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KG51bVN0ZXBzLCAzKTsgaSsrKSB7XHJcbiAgICAgICAgIGJveGVzLnB1c2gobmV3IEJvdW5kaW5nQm94KCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdiA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIHYueCA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgdi55ID0gdGhpcy52ZXJ0aWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICB2LnogPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh2LnggLSB0aGlzLmJveC5taW4ueCkgLyAodGhpcy5ib3gud2lkdGgpKTtcclxuICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHYueSAtIHRoaXMuYm94Lm1pbi55KSAvICh0aGlzLmJveC5oZWlnaHQpKTtcclxuICAgICAgICAgbGV0IHogPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHYueiAtIHRoaXMuYm94Lm1pbi56KSAvICh0aGlzLmJveC5kZXB0aCkpO1xyXG4gICAgICAgICB4ID0gY2xhbXAoeCwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeSA9IGNsYW1wKHksIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHogPSBjbGFtcCh6LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgIGJveGVzW2luZGV4XS51cGRhdGUodik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBib3hNYXAgPSBuZXcgTWFwPG51bWJlciwgQm91bmRpbmdCb3g+KCk7XHJcbiAgICAgIGxldCBib3hDb3VudCA9IDA7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtU3RlcHM7IHgrKykge1xyXG4gICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG51bVN0ZXBzOyB5KyspIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0OiB7XHJcbiAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIGJveDogQm91bmRpbmdCb3gsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBsYXN0OiB7XHJcbiAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIGJveDogQm91bmRpbmdCb3gsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbnVtU3RlcHM7IHorKykge1xyXG4gICAgICAgICAgICAgICBsZXQgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBib3ggPSBib3hlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgIGlmIChib3gubWluLnggPT09IE51bWJlci5NQVhfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgYm94Q291bnQrKztcclxuICAgICAgICAgICAgICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICBmaXJzdCA9IHsgaW5kZXg6IGluZGV4LCBib3g6IGJveCB9O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGxhc3QgPSB7IGluZGV4OiBpbmRleCwgYm94OiBib3ggfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0ICYmIGJveE1hcC5oYXMoZmlyc3QuaW5kZXgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICBib3hNYXAuc2V0KGZpcnN0LmluZGV4LCBmaXJzdC5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsYXN0ICYmIGJveE1hcC5oYXMobGFzdC5pbmRleCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgIGJveE1hcC5zZXQobGFzdC5pbmRleCwgbGFzdC5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHB0czogVmVjM1tdID0gW107XHJcbiAgICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICAgICBpZiAoYm94Lm1pbi54ICE9PSBOdW1iZXIuTUFYX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgIHB0cy5wdXNoKC4uLmJveC5jb3JuZXJzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYm91bmRpbmdQdHMgPSBuZXcgQm91bmRpbmdQdHMocHRzKTtcclxuICAgICAgcmV0dXJuIHRoaXMuYm91bmRpbmdQdHM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIGluIHRoZSBmb3IgLk9CSiBmaWxlIGZvcm1hdFxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIHRvT2JqU3RyaW5nKGRpZ2l0cyA9IDgpIHtcclxuXHJcbiAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgc3RyICs9ICcjIFZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICcjIFRyaWFuZ2xlczogJyArIHRoaXMubnVtVHJpYW5nbGVzICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnXFxuJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlcztcclxuICAgICAgICAgc3RyICs9ICd2ICcgKyB2WzMgKiBpICsgMF0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHZbMyAqIGkgKyAxXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdlszICogaSArIDJdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgbiA9IHRoaXMubm9ybWFscztcclxuICAgICAgICAgc3RyICs9ICd2biAnICsgblszICogaSArIDBdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuWzMgKiBpICsgMV0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG5bMyAqIGkgKyAyXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgc3RyICs9ICdmICcgK1xyXG4gICAgICAgICAgICAodC5pMSArIDEpICsgJy8vJyArICh0LmkxICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pMiArIDEpICsgJy8vJyArICh0LmkyICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pMyArIDEpICsgJy8vJyArICh0LmkzICsgMSkgKyAnXFxuJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuXHJcbiAgICAgIGlmIChub3JtYWxUeXBlID09PSBOb3JtYWxUeXBlLlNtb290aCkge1xyXG5cclxuICAgICAgICAgbGV0IHZlcnRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICAgICBsZXQgaW5kZXhUb0luZGV4TWFwID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgIC8vIGZpcnN0IGdlbmVyYXRlIGEgdW5pcXVlIHNldCBvZiB2ZXJ0aWNlc1xyXG4gICAgICAgICBsZXQgdW5pcXVlVmVydGljZXM6IEluZGV4ZWRWZWMzW10gPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBvbGRWZXJ0ZXggPSBuZXcgSW5kZXhlZFZlYzModGhpcy52ZXJ0aWNlcywgaSk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0udG9GaXhlZCg0KSArICcgJyArIHRoaXMudmVydGljZXNbMyAqIGkgKyAxXS50b0ZpeGVkKDQpICsgJyAnICsgdGhpcy52ZXJ0aWNlc1szICogaSArIDJdLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgbmV3SW5kZXg7XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXhUb0luZGV4TWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGp1c3QgbWFwIHRoZSBvbGQgaW5kZXggdG8gdGhlIGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgICAgICAgIG5ld0luZGV4ID0gdmVydGV4VG9JbmRleE1hcC5nZXQoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGVudHJ5XHJcbiAgICAgICAgICAgICAgIG5ld0luZGV4ID0gdW5pcXVlVmVydGljZXMubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgICAgdmVydGV4VG9JbmRleE1hcC5zZXQoa2V5LCBuZXdJbmRleCk7XHJcbiAgICAgICAgICAgICAgIHVuaXF1ZVZlcnRpY2VzLnB1c2gob2xkVmVydGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgdHJhbnNsYXRpb25cclxuICAgICAgICAgICAgaW5kZXhUb0luZGV4TWFwLnNldChvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyByZXNldCBhbGwgdGhlIHZlcnRpY2VzXHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlxdWVWZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godW5pcXVlVmVydGljZXNbaV0ueCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1bmlxdWVWZXJ0aWNlc1tpXS55KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHVuaXF1ZVZlcnRpY2VzW2ldLnopO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyByZW1hcCBhbGwgaW5kaWNlc1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb2xkSW5kZXggPSB0aGlzLmluZGljZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNlc1tpXSA9IGluZGV4VG9JbmRleE1hcC5nZXQob2xkSW5kZXggKyAxKSAtIDE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gbm90aGluZyB0byBkbyBmb3IgZmxhdCBub3JtYWxzLiBOZXcgdmVydGljZXMgYW5kIG5vcm1hbHMgYXJlIGNyZWF0ZWQgaW4gXHJcbiAgICAgICAgIC8vIGNvbXB1dGVOb3JtYWxzKCkgYmVsb3cgaWYgbmVlZGVkXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMobm9ybWFsVHlwZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0cmltKGJveDogQm91bmRpbmdCb3gpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuXHJcbiAgICAgICAgIGlmIChib3guaW5zaWRlKHRyaS52MSkgJiYgYm94Lmluc2lkZSh0cmkudjIpICYmIGJveC5pbnNpZGUodHJpLnYzKSkge1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpLmkxKTtcclxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaS5pMik7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmkuaTMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3RyaW1tZWQgJyArICh0aGlzLmluZGljZXMubGVuZ3RoIC0gaW5kaWNlcy5sZW5ndGgpICsgJyB0cmlhbmdsZXMnKTtcclxuICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcclxuICAgICAgdGhpcy5maW5kQm91bmRzKCk7XHJcbiAgICAgIHAubG9nKCdUcmltIENvbXBsZXRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBtaXJyb3IoeDogbnVtYmVyLCBhZGQ6IGJvb2xlYW4pIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGlmIChhZGQpIHtcclxuICAgICAgICAgLy8gZHVwbGljYXRlIHZlcnRpY2VzXHJcbiAgICAgICAgIGxldCBudW1WZXJ0aWNlcyA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0gLT0geDs7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCgtdGhpcy52ZXJ0aWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRoaXMudmVydGljZXNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCgtdGhpcy5ub3JtYWxzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh0aGlzLm5vcm1hbHNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHRoaXMubm9ybWFsc1szICogaSArIDJdKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgbGV0IG51bUluZGljZXMgPSB0aGlzLmluZGljZXMubGVuZ3RoO1xyXG4gICAgICAgICBsZXQgc3RhcnRJbmRleCA9IG51bVZlcnRpY2VzO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUluZGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmluZGljZXMucHVzaChzdGFydEluZGV4ICsgdGhpcy5pbmRpY2VzW2ldKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyByZWZsZWN0IHZlcnRpY2VzXHJcbiAgICAgICAgIGxldCBudW1WZXJ0aWNlcyA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0gPSB4ICsgKHggLSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHNbMyAqIGkgKyAwXSA9IC10aGlzLm5vcm1hbHNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpbmRCb3VuZHMoKTtcclxuXHJcbiAgICAgIHAubG9nKCdNaXJyb3IgQ29tcGxldGUnKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJldmVyc2UoKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICAvLyByZWZsZWN0IHZlcnRpY2VzXHJcbiAgICAgIGxldCB4ID0gdGhpcy5jZW50ZXIueDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlc1szICogaSArIDBdID0geCArICh4IC0gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzWzMgKiBpICsgMF0gPSAtdGhpcy5ub3JtYWxzWzMgKiBpICsgMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlb3JkZXIgdHJpYW5nbGVzIHRvIHByZXNlcnZlIGZyb250LWJhY2sgZmFjaW5nXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaTEgPSB0aGlzLmluZGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgbGV0IGkyID0gdGhpcy5pbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlc1szICogaSArIDBdID0gaTI7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlc1szICogaSArIDFdID0gaTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdSZXZlcnNlIENvbXBsZXRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21iaW5lKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICAvLyBzYXZlIHRoZSB2YWx1ZSBmb3IgdGhlIGZpcnN0IGluZGV4IG9mIHRoZSBjb21iaW5lZCBvYmplY3RzXHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gdGhpcy5udW1WZXJ0aWNlcztcclxuXHJcbiAgICAgIC8vIGFkZCB0aGUgb3RoZXIgdmVydGljZXMgYW5kIG5vcm1hbHMgdG8gb3Vyc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRPYmoudmVydGljZXNbaV0pO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh0T2JqLm5vcm1hbHNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhZGQgdGhlIG90aGVyIGluZGljZXMsIGJ1dCBvZmZzZXQgdGhlbSBwcm9wZXJseVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmouaW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLmluZGljZXMucHVzaChzdGFydEluZGV4ICsgdE9iai5pbmRpY2VzW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbWVyZ2UgdGhlIGJvdW5kaW5nIGJveGVzXHJcbiAgICAgIHRoaXMuYm94Lm1lcmdlKHRPYmouYm94KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvRGF0YSgpOiBUcmlhbmdsZU9iakRhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhO1xyXG4gICAgICBkYXRhLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubm9ybWFscyk7XHJcbiAgICAgIGRhdGEuaW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gdGhpcy5ib3gubWluLmNsb25lKCk7XHJcbiAgICAgIGRhdGEuYm94TWF4ID0gdGhpcy5ib3gubWF4LmNsb25lKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21EYXRhKGRhdGE6IFRyaWFuZ2xlT2JqRGF0YSk6IFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqKCk7XHJcbiAgICAgIHRPYmoubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgdE9iai52ZXJ0aWNlcyA9IEFycmF5LmZyb20oZGF0YS52ZXJ0aWNlcyk7XHJcbiAgICAgIHRPYmoubm9ybWFscyA9IEFycmF5LmZyb20oZGF0YS5ub3JtYWxzKTtcclxuICAgICAgdE9iai5pbmRpY2VzID0gQXJyYXkuZnJvbShkYXRhLmluZGljZXMpO1xyXG4gICAgICB0T2JqLmJveCA9IG5ldyBCb3VuZGluZ0JveChuZXcgVmVjMyhkYXRhLmJveE1pbi52YWx1ZXMpLCBuZXcgVmVjMyhkYXRhLmJveE1heC52YWx1ZXMpKTtcclxuICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b0Jsb2IoKTogQmxvYiB7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYSBkZXNjcmlwdGlvblxyXG4gICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgRmlsZVR5cGU6ICdCaW5hcnkgT0JKJyxcclxuICAgICAgICAgVmVyc2lvbjogJzEuMCcsXHJcbiAgICAgICAgIE5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgU291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZ2V0IHRoZSByYXcgZGF0YVxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMudG9EYXRhKCk7XHJcblxyXG4gICAgICAvLyBicmVhayBpdCBpbnRvIHBhcnRzXHJcbiAgICAgIGxldCBwYXJ0czogQmxvYlBhcnRbXSA9IFtdO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEudmVydGljZXMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEubm9ybWFscyk7XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS5pbmRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWluLnZhbHVlcykpO1xyXG4gICAgICBwYXJ0cy5wdXNoKG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5ib3hNYXgudmFsdWVzKSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIEJsb2JcclxuICAgICAgcmV0dXJuIEJsb2JGaWxlLmNyZWF0ZUJsb2IoaW5mbywgcGFydHMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21CbG9iKGJsb2I6IEJsb2IpOiBQcm9taXNlPFRyaWFuZ2xlT2JqPiB7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IFRyaWFuZ2xlT2JqLmJsb2JUb0RhdGEoYmxvYik7XHJcbiAgICAgIHJldHVybiBUcmlhbmdsZU9iai5mcm9tRGF0YShkYXRhKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBibG9iVG9EYXRhKGJsb2I6IEJsb2IpOiBQcm9taXNlPFRyaWFuZ2xlT2JqRGF0YT4ge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhKCk7XHJcbiAgICAgIGxldCBiRmlsZSA9IGF3YWl0IEJsb2JGaWxlLmV4dHJhY3QoYmxvYik7XHJcblxyXG4gICAgICBkYXRhLm5hbWUgPSBiRmlsZS5pbmZvLk5hbWU7XHJcbiAgICAgIGRhdGEuc291cmNlID0gYkZpbGUuaW5mby5Tb3VyY2U7XHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzBdLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzFdLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBkYXRhLmluZGljZXMgPSBuZXcgSW50MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1syXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5ib3hNaW4gPSBuZXcgVmVjMyhBcnJheS5mcm9tKG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbM10uYXJyYXlCdWZmZXIoKSkpKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSBuZXcgVmVjMyhBcnJheS5mcm9tKG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbNF0uYXJyYXlCdWZmZXIoKSkpKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBjb21wdXRlIG5vcm1hbHMgZm9yIHZlcnRpY2VzIHRoYXQgam9pbiBtdWx0aXBsZSBmYWNlc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlOb3JtVmVydGV4IHtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBWZWMzKSB7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbm9ybWFsIGJ5IGF2ZXJhZ2luZyBhbGwgdGhlIGluZGl2aWR1YWwgbm9ybWFscyBhc3NvY2lhdGVkIHdpdGggdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBub3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGxldCBuID0gbmV3IFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBTdGF0dXNGdW5jdGlvbiB9IGZyb20gXCIuLi9VdGlsL0dsb2JhbHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi4vVXRpbC9Qcm9maWxlclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbG9hZHMgYSAub2JqIGZpbGUgYW5kIGNyZWF0ZXMgdHJpYW5nbGVzIGZvciBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRmlsZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCB1cGRhdGVTdGF0dXM/OiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAvLyByZWNvcmQgdGhlIHN0YXR1cyBmdW5jdGlvbi4gSWYgb25lIGlzIG5vdCBzdXBwbGllZCwgY3JlYXRlIG9uZSB0aGF0IGRvZXMgbm90aGluZ1xyXG4gICAgICBpZiAoIXVwZGF0ZVN0YXR1cykge1xyXG4gICAgICAgICB1cGRhdGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFyc2Uoc3JjLCB1cGRhdGVTdGF0dXMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlRmFjZShsaW5lOiBzdHJpbmcpOiB7IGlWOiBudW1iZXJbXSwgaU46IG51bWJlcltdIH0ge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBpVjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgICAgIGlOOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgfVxyXG4gICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgbGV0IG51bVZhbHMgPSB0b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWxzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZhbHMgPSB0b2tlbnNbaSArIDFdLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgIHJldC5pVi5wdXNoKHBhcnNlSW50KHZhbHNbMF0pIC0gMSk7XHJcbiAgICAgICAgIGlmICh2YWxzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICByZXQuaU4ucHVzaChwYXJzZUludCh2YWxzWzJdKSAtIDEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZShzcmM6IHN0cmluZywgdXBkYXRlU3RhdHVzOiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgdXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nJyk7XHJcbiAgICAgIGxldCB0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIGxldCBwMiA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBsZXQgbGluZXMgPSBzcmMuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBwLmxvZygnc3BsaXQnKTtcclxuXHJcbiAgICAgIGxldCB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCB2SW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5JbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBsZXQgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICBsZXQgY29udGFpbnNOb3JtYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgLy8gcmVwb3J0IHByb2dyZXNzIGV2ZXJ5IDUwIG1zXHJcbiAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdCA+IDUwKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogJyArICgxMDAgKiBpIC8gbGluZXMubGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICAgICAgICAgICB0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCd2ICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzFdKSk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1szXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgndm4gJykpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1sxXSkpO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzNdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCdmICcpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLnBhcnNlRmFjZShsaW5lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgaWYgKHJldC5pVi5sZW5ndGggIT09IHJldC5pTi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGFpbnNOb3JtYWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm9ybWFscyBub3Qgc3BlY2lmaWVkIGluIGZpbGUuIEZsYXQgbm9ybWFscyB3aWxsIGJlIGNvbXB1dGVkLicpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0LmlWLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQuaVZbaV0gIT0gcmV0LmlOW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVmVydGljZXMgYW5kIG5vcm1hbHMgZG9uXFwndCBtYXRjaC4gQ29udGVudCB3aWxsIGJlIHJlLWluZGV4ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXQuaVYubGVuZ3RoID09PSA0KSB7XHJcblxyXG4gICAgICAgICAgICAgICB2SW5kaWNlcy5wdXNoKHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0pO1xyXG4gICAgICAgICAgICAgICB2SW5kaWNlcy5wdXNoKHJldC5pVlswXSwgcmV0LmlWWzJdLCByZXQuaVZbM10pO1xyXG4gICAgICAgICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5JbmRpY2VzLnB1c2gocmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSk7XHJcbiAgICAgICAgICAgICAgICAgIG5JbmRpY2VzLnB1c2gocmV0LmlOWzBdLCByZXQuaU5bMl0sIHJldC5pTlszXSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdKTtcclxuICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwLmxvZygncGFyc2UnKTtcclxuXHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IHZJbmRpY2VzO1xyXG5cclxuICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xyXG5cclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2SW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWxzWzMgKiBuSW5kaWNlc1tpXSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsc1szICogbkluZGljZXNbaV0gKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbHNbMyAqIG5JbmRpY2VzW2ldICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljZXMucHVzaChpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBwLmxvZygncmVpbmRleCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udGFpbnNOb3JtYWxzID09PSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuRmxhdCk7XHJcbiAgICAgICAgIHAubG9nKCdjb21wdXRlIG5vcm1hbHMnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maW5kQm91bmRzKCk7XHJcbiAgICAgIHAubG9nKCdmaW5kQm91bmRzJyk7XHJcbiAgICAgIHAyLmxvZygnVG90YWwnKTtcclxuXHJcbiAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogMTAwJScpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1ZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnTm9ybWFsczogJyArIHRoaXMubm9ybWFscy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVHJpYW5nbGVzOiAnICsgdGhpcy5udW1UcmlhbmdsZXMpO1xyXG4gICB9XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElWZWMzIHtcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHo6IG51bWJlcjtcclxufVxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBWZWMge1xyXG5cclxuICAgLyoqIFRoZSB2ZWN0b3IgdmFsdWVzLiAqL1xyXG4gICBwdWJsaWMgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzT3JTaXplIElmIGEgYXJyYXksIHRoZSB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuIElmIGEgbnVtYmVyLCB0aGUgc2l6ZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlc09yU2l6ZTogbnVtYmVyIHwgbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlc09yU2l6ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc09yU2l6ZV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KHZhbHVlc09yU2l6ZSk7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gVGhlIHZlY3RvciBtYWduaXR1ZGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFnbml0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tpXSAqIHRoaXMudmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWMyIGV4dGVuZHMgVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigyKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMih0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIHRvIGFub3RoZXIgcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgcG9pbnRcclxuICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBwb2ludCBhbmQgdGhlIG90aGVyIHBvaW50XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGlzdGFuY2Uob3RoZXI6IFZlYzIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCAtIG90aGVyLngsIDIpICsgTWF0aC5wb3codGhpcy55IC0gb3RoZXIueSwgMikpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gZGlnaXRzIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gZGlzcGxheS4gVGhpcyB2YWx1ZSBpcyBwYXNzZWQgdG8gdG9GaXhlZCgpLlxyXG4gICAgKiBAcGFyYW0gZGl2aWRlciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGVhY2ggbnVtYmVyLlxyXG4gICAgKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1N0cmluZyhkaWdpdHM6IG51bWJlciA9IDIsIGRpdmlkZXIgPSAnLCcpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy54LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnkudG9GaXhlZChkaWdpdHMpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkteiB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVjMyBleHRlbmRzIFZlYyBpbXBsZW1lbnRzIElWZWMzIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9yaWdpbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFswLCAwLCAwXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHgteSBjb21wb25lbnRzIGFzIGEgMmQgdmVjXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm4gdGhlIFZlYzNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeHkoKTogVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMihbdGhpcy54LCB0aGlzLnldKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGRpZ2l0cyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGRpc3BsYXkuIFRoaXMgdmFsdWUgaXMgcGFzc2VkIHRvIHRvRml4ZWQoKS5cclxuICAgICogQHBhcmFtIGRpdmlkZXIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBlYWNoIG51bWJlci5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIgPSAyLCBkaXZpZGVyID0gJywnKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMueC50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy55LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnoudG9GaXhlZChkaWdpdHMpO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIFJldHVybnMgYSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBWZWMzIHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGlmIChtYWcgPT09IDApIHtcclxuICAgICAgICAgcmV0dXJuIG5ldyBWZWMzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLm11bHQoMSAvIG1hZyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIE11bHRpcGxpZXMgbWVtYmVycyBieSBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSBuZXcgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsdWUgVGhlIG11bHRpcGxpY2F0aW9uIHZhbHVlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG11bHQodmFsdWU6IG51bWJlcik6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnggKiB2YWx1ZSxcclxuICAgICAgICAgdGhpcy55ICogdmFsdWUsXHJcbiAgICAgICAgIHRoaXMueiAqIHZhbHVlLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHZlY3RvciBwb2ludGluZyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIG5lZ2F0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5lZ2F0ZSgpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFstdGhpcy54LCAtdGhpcy55LCAtdGhpcy56XSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdWJ0cmFjdHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gc3VidHJhY3QuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBjb21wdXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3VidHJhY3QodmVjOiBWZWMzKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdIC0gdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gLSB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSAtIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBBZGRzIHZhbHVlcyBmcm9tIHRoaXMgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZlYyBUaGUgdmVjdG9yIHRvIGFkZC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBhZGQodmVjOiBWZWMzKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzBdICsgdmVjLnZhbHVlc1swXSxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMV0gKyB2ZWMudmFsdWVzWzFdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1syXSArIHZlYy52YWx1ZXNbMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gb3RoZXIgVGhlIG90aGVyIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjcm9zcyhvdGhlcjogVmVjMyk6IFZlYzMge1xyXG4gICAgICBsZXQgQSA9IHRoaXMudmFsdWVzO1xyXG4gICAgICBsZXQgQiA9IG90aGVyLnZhbHVlcztcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgQVsxXSAqIEJbMl0gLSBBWzJdICogQlsxXSxcclxuICAgICAgICAgQVsyXSAqIEJbMF0gLSBBWzBdICogQlsyXSxcclxuICAgICAgICAgQVswXSAqIEJbMV0gLSBBWzFdICogQlswXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcG9pbnQgdG8gYSBzcGVjaWZpZWQgcG9pbnQuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gcHQgVGhlIHBvaW50LlxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgdG8gdGhlIHBvaW50LlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpc3RUb1BvaW50KHB0OiBWZWMzKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3QocHQpLm1hZ25pdHVkZSgpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQnVpbGRzIGEgVmVjNCBmcm9tIHRoaXMgVmVjM1xyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHcgVGhlIHcgY29tcG9uZW50IG9mIHRoZSBuZXcgdmVjdG9yLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgbmV3IHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1ZlYzQodzogbnVtYmVyKTogVmVjNCB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjNChbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgd10pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWM0IGV4dGVuZHMgVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1syXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHoodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMl0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBaIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB3KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHcodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbM10gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB4LXkteiBjb21wb25lbnRzIGFzIGEgM2QgdmVjXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJuIHRoZSBWZWMzXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHh5eigpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFt0aGlzLngsIHRoaXMueSwgdGhpcy56XSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogVmVjNCB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjNCh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIHgteS16IHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgY29tcHV0ZWQgYnkgZGl2aWRpbmcgdGhpcyB2ZWN0b3JzXHJcbiAgICAqIGVsZW1lbnRzIGJ5IHRoZSB3IHZhbHVlLlxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgQW4geC15LXogdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGRpdmlkZUJ5VygpOiBWZWMzIHtcclxuICAgICAgbGV0IHcgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqIFxyXG4gICAgKiBOb3JtYWxpemVzIHRoaXMgdmVjdG9yLCBhbmQgc3RvcmVzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0aW5nIG5vcm1hbGl6ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5vcm1hbGl6ZSgpOiBWZWM0IHtcclxuICAgICAgbGV0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7XHJcbiAgICAgIGxldCByZXQgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgIGlmIChtYWcgIT09IDApIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXQudmFsdWVzW2ldIC89IG1hZztcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIFZlYzQgZnJvbSBhIFZlYzMgb2JqZWN0XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSBWZWMzIG9iamVjdFxyXG4gICAgKiBAcGFyYW0gdyBUaGUgdyB2YWx1ZSBmb3IgdGhlIFZlYzRcclxuICAgICovXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVZlYzModmVjOiBWZWMzLCB3OiBudW1iZXIpOiBWZWM0IHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWM0KFt2ZWMueCwgdmVjLnksIHZlYy56LCAxXSk7XHJcbiAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==