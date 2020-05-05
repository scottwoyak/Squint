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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/ts-loader/index.js!./src/LoaderWorker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ts-loader/index.js!./src/LoaderWorker.ts":
/*!******************************************************!*\
  !*** ./node_modules/ts-loader!./src/LoaderWorker.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TriangleObjFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TriangleObjFile */ "./src/TriangleObjFile.ts");
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
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
                    tObj = new _TriangleObjFile__WEBPACK_IMPORTED_MODULE_0__["TriangleObjFile"](file, res, function (status) { worker.postMessage(status); });
                    data = tObj.toData();
                    return [3 /*break*/, 5];
                case 3:
                    if (!file.toLowerCase().endsWith('.blob')) return [3 /*break*/, 5];
                    blob = new Blob([chunksAll]);
                    return [4 /*yield*/, _TriangleObj__WEBPACK_IMPORTED_MODULE_1__["TriangleObj"].blobToData(blob)];
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

/***/ "./src/BlobFile.ts":
/*!*************************!*\
  !*** ./src/BlobFile.ts ***!
  \*************************/
/*! exports provided: BlobFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobFile", function() { return BlobFile; });
/* harmony import */ var _BlobShim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlobShim */ "./src/BlobShim.ts");
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

/***/ "./src/BlobShim.ts":
/*!*************************!*\
  !*** ./src/BlobShim.ts ***!
  \*************************/
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

/***/ "./src/BoundingBox.ts":
/*!****************************!*\
  !*** ./src/BoundingBox.ts ***!
  \****************************/
/*! exports provided: BoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return BoundingBox; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");

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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "height", {
        get: function () {
            return this.max.y - this.min.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "depth", {
        get: function () {
            return this.max.z - this.min.z;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox.prototype, "diagonal", {
        get: function () {
            var w = this.width;
            var h = this.height;
            var d = this.depth;
            return Math.sqrt(w * w + h * h + d * d);
        },
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundingBox, "infinite", {
        get: function () {
            var MAX = Number.POSITIVE_INFINITY;
            var MIN = Number.NEGATIVE_INFINITY;
            return new BoundingBox(new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([MIN, MIN, MIN]), new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([MAX, MAX, MAX]));
        },
        enumerable: true,
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

/***/ "./src/BoundingPts.ts":
/*!****************************!*\
  !*** ./src/BoundingPts.ts ***!
  \****************************/
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
        this.pts.forEach(function (pts) {
            var d = pts.distToPoint(pt);
            ret.min = Math.min(d, ret.min);
            ret.max = Math.min(d, ret.max);
        });
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

/***/ "./src/Globals.ts":
/*!************************!*\
  !*** ./src/Globals.ts ***!
  \************************/
/*! exports provided: isMobile, clamp, toDeg, toRad, mix, toCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDeg", function() { return toDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCss", function() { return toCss; });
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
/* harmony import */ var _IndexedVec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexedVec3 */ "./src/IndexedVec3.ts");

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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minY", {
        get: function () {
            return Math.min(this.v1.y, this.v2.y, this.v3.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "minZ", {
        get: function () {
            return Math.min(this.v1.z, this.v2.z, this.v3.z);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxX", {
        get: function () {
            return Math.max(this.v1.x, this.v2.x, this.v3.x);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxY", {
        get: function () {
            return Math.max(this.v1.y, this.v2.y, this.v3.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedTriangle.prototype, "maxZ", {
        get: function () {
            return Math.max(this.v1.z, this.v2.z, this.v3.z);
        },
        enumerable: true,
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

/***/ "./src/IndexedVec3.ts":
/*!****************************!*\
  !*** ./src/IndexedVec3.ts ***!
  \****************************/
/*! exports provided: IndexedVec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedVec3", function() { return IndexedVec3; });
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");

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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedVec3.prototype, "y", {
        get: function () {
            return this.values[3 * this.index + 1];
        },
        set: function (val) {
            this.values[3 * this.index + 1] = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedVec3.prototype, "z", {
        get: function () {
            return this.values[3 * this.index + 2];
        },
        set: function (val) {
            this.values[3 * this.index + 2] = val;
        },
        enumerable: true,
        configurable: true
    });
    IndexedVec3.prototype.toVec3 = function () {
        return new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]([this.x, this.y, this.z]);
    };
    return IndexedVec3;
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
/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
/* harmony import */ var _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexedTriangle */ "./src/IndexedTriangle.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
/* harmony import */ var _BlobFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlobFile */ "./src/BlobFile.ts");
/* harmony import */ var _IndexedVec3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IndexedVec3 */ "./src/IndexedVec3.ts");
/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoundingBox */ "./src/BoundingBox.ts");
/* harmony import */ var _BoundingPts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BoundingPts */ "./src/BoundingPts.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Globals */ "./src/Globals.ts");
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
        this.box = new _BoundingBox__WEBPACK_IMPORTED_MODULE_5__["BoundingBox"]();
        this.name = name;
    }
    Object.defineProperty(TriangleObj.prototype, "numVertices", {
        get: function () {
            return this.vertices.length / 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "numTriangles", {
        get: function () {
            return this.indices.length / 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "width", {
        get: function () {
            return this.box.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "height", {
        get: function () {
            return this.box.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "depth", {
        get: function () {
            return this.box.depth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "diagonal", {
        get: function () {
            return this.box.diagonal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangleObj.prototype, "center", {
        get: function () {
            return this.box.center;
        },
        enumerable: true,
        configurable: true
    });
    TriangleObj.prototype.getTriangle = function (index) {
        var i1 = this.indices[3 * index + 0];
        var i2 = this.indices[3 * index + 1];
        var i3 = this.indices[3 * index + 2];
        return new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, this.normals, i1, i2, i3);
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
        var tri = new _IndexedTriangle__WEBPACK_IMPORTED_MODULE_1__["IndexedTriangle"](this.vertices, this.normals, i1, i2, i3);
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
        var box = new _BoundingBox__WEBPACK_IMPORTED_MODULE_5__["BoundingBox"]();
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
            boxes.push(new _BoundingBox__WEBPACK_IMPORTED_MODULE_5__["BoundingBox"]());
        }
        var v = new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
        for (var i = 0; i < this.numVertices; i++) {
            v.x = this.vertices[3 * i + 0];
            v.y = this.vertices[3 * i + 1];
            v.z = this.vertices[3 * i + 2];
            var x = Math.floor(numSteps * (v.x - this.box.min.x) / (this.box.width));
            var y = Math.floor(numSteps * (v.y - this.box.min.y) / (this.box.height));
            var z = Math.floor(numSteps * (v.z - this.box.min.z) / (this.box.depth));
            x = Object(_Globals__WEBPACK_IMPORTED_MODULE_7__["clamp"])(x, 0, numSteps - 1);
            y = Object(_Globals__WEBPACK_IMPORTED_MODULE_7__["clamp"])(y, 0, numSteps - 1);
            z = Object(_Globals__WEBPACK_IMPORTED_MODULE_7__["clamp"])(z, 0, numSteps - 1);
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
        this.boundingPts = new _BoundingPts__WEBPACK_IMPORTED_MODULE_6__["BoundingPts"](pts);
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
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_2__["Profiler"]();
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
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_2__["Profiler"]();
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
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_2__["Profiler"]();
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
        tObj.box = new _BoundingBox__WEBPACK_IMPORTED_MODULE_5__["BoundingBox"](new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"](data.boxMin.values), new _Vec__WEBPACK_IMPORTED_MODULE_0__["Vec3"](data.boxMax.values));
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
        return _BlobFile__WEBPACK_IMPORTED_MODULE_3__["BlobFile"].createBlob(info, parts);
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
                        return [4 /*yield*/, _BlobFile__WEBPACK_IMPORTED_MODULE_3__["BlobFile"].extract(blob)];
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
        enumerable: true,
        configurable: true
    });
    return MultiNormVertex;
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
/* harmony import */ var _TriangleObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TriangleObj */ "./src/TriangleObj.ts");
/* harmony import */ var _Profiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profiler */ "./src/Profiler.ts");
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
        var p2 = new _Profiler__WEBPACK_IMPORTED_MODULE_1__["Profiler"]();
        var p = new _Profiler__WEBPACK_IMPORTED_MODULE_1__["Profiler"]();
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

/***/ "./src/Vec.ts":
/*!********************!*\
  !*** ./src/Vec.ts ***!
  \********************/
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQmxvYkZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jsb2JTaGltLnRzIiwid2VicGFjazovLy8uL3NyYy9Cb3VuZGluZ0JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQm91bmRpbmdQdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4ZWRUcmlhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXhlZFZlYzMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9UcmlhbmdsZU9iai50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVPYmpGaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9WZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtR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QUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxLQUFrQjtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLEdBQVM7UUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUkseUNBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUkseUNBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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RyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNKLFdBQUM7QUFBRCxDQUFDLENBakp5QixHQUFHLEdBaUo1QiIsImZpbGUiOiJMb2FkZXJXb3JrZXIud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc3JjL0xvYWRlcldvcmtlci50c1wiKTtcbiIsImltcG9ydCB7IFRyaWFuZ2xlT2JqRmlsZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqRmlsZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgVHJpYW5nbGVPYmpEYXRhIH0gZnJvbSBcIi4vVHJpYW5nbGVPYmpcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIHdvcmtlciB0aGF0IGxvYWRzIGFuZCBwcm9jZXNzZXMgdGhlIC5vYmogZmlsZVxyXG4gKi9cclxuY29uc3Qgd29ya2VyOiBXb3JrZXIgPSBzZWxmIGFzIGFueTtcclxuXHJcbi8vIEhhbmRsZXIgZm9yIHJlY2VpdmluZyBtZXNzYWdlcyBmcm9tIHRoZSBtYWluIHRocmVhZFxyXG53b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9OiB7IGRhdGE6IHN0cmluZyB9KSA9PiB7XHJcblxyXG4gICAvLyB3aGVuIHdlIHJlY2VpdmUgYSBzdHJpbmcgYXMgYSBtZXNzYWdlLCBpdCdzIHRoZSB1cmwgb2YgdGhlIGZpbGUgdG8gbG9hZFxyXG4gICBsb2FkRmlsZShkYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB3b3JrZXIgZnVuY3Rpb24gdG8gbG9hZCBhIGZpbGVcclxuICogXHJcbiAqIEBwYXJhbSBmaWxlIFRoZSB1cmwgb2YgdGhlIGZpbGUgdG8gbG9hZFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEZpbGUoZmlsZTogc3RyaW5nKSB7XHJcblxyXG4gICAvLyB0aGUgaW5pdGlhbCBzdGF0dXMgbWVzc2FnZVxyXG4gICB3b3JrZXIucG9zdE1lc3NhZ2UoJ0Rvd25sb2FkaW5nIDAlJyk7XHJcblxyXG4gICB0cnkge1xyXG4gICAgICBsZXQgY2h1bmtzQWxsID0gYXdhaXQgZmV0Y2hEYXRhKGZpbGUpO1xyXG4gICAgICBsZXQgZGF0YTogVHJpYW5nbGVPYmpEYXRhO1xyXG5cclxuICAgICAgaWYgKGZpbGUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLm9iaicpKSB7XHJcbiAgICAgICAgIC8vIGRlY29kZSBpbnRvIGEgc3RyaW5nXHJcbiAgICAgICAgIGxldCByZXMgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUoY2h1bmtzQWxsKTtcclxuXHJcbiAgICAgICAgIC8vIHR1cm4gdGhlIC5vYmogc3RyaW5nIGludG8gdHJpYW5nbGVzXHJcbiAgICAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqRmlsZShmaWxlLCByZXMsIChzdGF0dXMpID0+IHsgd29ya2VyLnBvc3RNZXNzYWdlKHN0YXR1cyk7IH0pO1xyXG4gICAgICAgICBkYXRhID0gdE9iai50b0RhdGEoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChmaWxlLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5ibG9iJykpIHtcclxuICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY2h1bmtzQWxsXSk7XHJcbiAgICAgICAgIGRhdGEgPSBhd2FpdCBUcmlhbmdsZU9iai5ibG9iVG9EYXRhKGJsb2IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXR1cm4gdGhlIHJlc3VsdCBhcyBhcnJheXNcclxuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGRhdGEsIFtcclxuICAgICAgICAgZGF0YS52ZXJ0aWNlcy5idWZmZXIsXHJcbiAgICAgICAgIGRhdGEubm9ybWFscy5idWZmZXIsXHJcbiAgICAgICAgIGRhdGEuaW5kaWNlcy5idWZmZXIsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbiAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGVycik7XHJcbiAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGZpbGU6IHN0cmluZyk6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG5cclxuICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmlsZSk7XHJcblxyXG4gICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UocmVzcG9uc2Uuc3RhdHVzICsgJzogJyArIGZpbGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XHJcbiAgIGNvbnN0IGNvbnRlbnRMZW5ndGggPSArcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtTGVuZ3RoJyk7XHJcblxyXG4gICAvLyBsb29wIHRvIGxvYWQgdGhlIGRhdGEsIG9uZSBjaHVuayBhdCBhIHRpbWVcclxuICAgbGV0IHJlY2VpdmVkTGVuZ3RoID0gMDsgLy8gcmVjZWl2ZWQgdGhhdCBtYW55IGJ5dGVzIGF0IHRoZSBtb21lbnRcclxuICAgbGV0IGNodW5rcyA9IFtdOyAvLyBhcnJheSBvZiByZWNlaXZlZCBiaW5hcnkgY2h1bmtzIChjb21wcmlzZXMgdGhlIGJvZHkpXHJcbiAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XHJcblxyXG4gICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2h1bmtzLnB1c2godmFsdWUpO1xyXG4gICAgICByZWNlaXZlZExlbmd0aCArPSB2YWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoJ0Rvd25sb2FkaW5nOiAnICsgKDEwMCAqIHJlY2VpdmVkTGVuZ3RoIC8gY29udGVudExlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgfVxyXG5cclxuICAgLy8gY29uY2F0ZW5hdGUgY2h1bmtzIGludG8gc2luZ2xlIFVpbnQ4QXJyYXlcclxuICAgbGV0IGNodW5rc0FsbCA9IG5ldyBVaW50OEFycmF5KHJlY2VpdmVkTGVuZ3RoKTsgLy8gKDQuMSlcclxuICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgZm9yIChsZXQgY2h1bmsgb2YgY2h1bmtzKSB7XHJcbiAgICAgIGNodW5rc0FsbC5zZXQoY2h1bmssIHBvc2l0aW9uKTsgLy8gKDQuMilcclxuICAgICAgcG9zaXRpb24gKz0gY2h1bmsubGVuZ3RoO1xyXG4gICB9XHJcblxyXG4gICByZXR1cm4gY2h1bmtzQWxsO1xyXG59IiwiaW1wb3J0ICcuL0Jsb2JTaGltJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjbGFzcyBmb3Igc2xpY2luZyB1cCBCbG9ic1xyXG4gKi9cclxuY2xhc3MgQmxvYlNsaWNlciB7XHJcblxyXG4gICAvLyBUaGUgc3RhcnQgYnl0ZSB2YWx1ZSBmb3IgdGhlIG5leHQgc2xpY2VcclxuICAgcHJpdmF0ZSBzdGFydCA9IDA7XHJcblxyXG4gICAvLyBUaGUgQmxvYiB3ZSdyZSBzbGljaW5nIFxyXG4gICBwcml2YXRlIGJsb2I6IEJsb2I7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gYmUgc2xpY2VkXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IoYmxvYjogQmxvYikge1xyXG4gICAgICB0aGlzLmJsb2IgPSBibG9iO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgbmV4dCBzbGljZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBzbGljZWQgQmxvYi5cclxuICAgICovXHJcbiAgIHB1YmxpYyBuZXh0KGxlbjogbnVtYmVyKTogQmxvYiB7XHJcbiAgICAgIGxldCBiID0gdGhpcy5ibG9iLnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuc3RhcnQgKyBsZW4pO1xyXG4gICAgICB0aGlzLnN0YXJ0ICs9IGxlbjtcclxuICAgICAgcmV0dXJuIGI7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gQXJyYXlCdWZmZXIuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBBcnJheUJ1ZmZlciBwcm9taXNlLlxyXG4gICAgKi9cclxuICAgcHVibGljIG5leHRBcnJheUJ1ZmZlcihsZW46IG51bWJlcik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV4dChsZW4pLmFycmF5QnVmZmVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTbGljZXMgdGhlIEJsb2IgYW5kIHJldHVybnMgaXQgYXMgYW4gSW50MzJBcnJheVxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHNsaWNlLlxyXG4gICAgKiBAcmV0dXJucyBBbiBJbnQzMkFycmF5IHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dEludDMyQXJyYXkobGVuOiBudW1iZXIpOiBQcm9taXNlPEludDMyQXJyYXk+IHtcclxuICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGF3YWl0IHRoaXMubmV4dEFycmF5QnVmZmVyKGxlbikpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2xpY2VzIHRoZSBCbG9iIGFuZCByZXR1cm5zIGl0IGFzIGEgc3RyaW5nXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgc2xpY2UuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgYXN5bmMgbmV4dFN0cmluZyhsZW46IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5leHQobGVuKS50ZXh0KCk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1hbmFnZXMgY3JlYXRpb24gYW5kIGV4dHJhY3Rpb24gb2YgYSBzZWxmIGRlc2NyaWJpbmcgQmxvYi4gRGF0YVxyXG4gKiBpcyBzdG9yZWQgYXM6XHJcbiAqIFxyXG4gKiBbbnVtRW50cmllc10gLSBUaGUgbnVtYmVyIGVudHJpZXMgaW4gdGhlIGZpbGUuIDQgYnl0ZSBJbnQzMlxyXG4gKiBbc2l6ZXNdIC0gU2l6ZXMgb2YgYWxsIHRoZSBlbnRyaWVzLCBpbmNsdWRpbmcgdGhlIGluZm8gb2JqZWN0XHJcbiAqIFtpbmZvXSAtIFVzZXIgc3VwcGxpZWQgZGF0YSBhcyBhIEpTT04gc3RyaW5nXHJcbiAqIFtlbnRyeSAxXSAtIEZpcnN0IHVzZXIgZW50cnlcclxuICogW2VudHJ5IDJdIC0gU2Vjb25kIHVzZXIgZW50cnlcclxuICogWy4uLl1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9iRmlsZSB7XHJcbiAgIHB1YmxpYyBpbmZvOiBhbnk7XHJcbiAgIHB1YmxpYyBwYXJ0czogQmxvYltdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIGluZm8gVGhlIGluZm9ybWF0aW9uIGhlYWRlciB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQmxvYlxyXG4gICAgKiBAcGFyYW0gcGFydHMgVGhlIGRhdGEgY29udGVudHMgb2YgdGhlIEJsb2JcclxuICAgICovXHJcbiAgIHByaXZhdGUgY29uc3RydWN0b3IoaW5mbzogb2JqZWN0LCBwYXJ0czogQmxvYltdKSB7XHJcbiAgICAgIHRoaXMuaW5mbyA9IGluZm87XHJcbiAgICAgIHRoaXMucGFydHMgPSBwYXJ0cztcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGEgcmF3IEJsb2Igb2JqZWN0IGludG8gYSBCbG9iRmlsZVxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGJsb2IgVGhlIEJsb2IgdG8gcHJvY2Vzcy5cclxuICAgICogQHJldHVybiBBIEJsb2JGaWxlIHByb21pc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4dHJhY3QoYmxvYjogQmxvYik6IFByb21pc2U8QmxvYkZpbGU+IHtcclxuXHJcbiAgICAgIGxldCBibG9iU2xpY2VyID0gbmV3IEJsb2JTbGljZXIoYmxvYik7XHJcblxyXG4gICAgICAvLyBmaXJzdCBleHRyYWN0IHRoZSBudW1iZXIgb2YgZW50cmllc1xyXG4gICAgICBsZXQgbnVtRW50cmllcyA9IChhd2FpdCBibG9iU2xpY2VyLm5leHRJbnQzMkFycmF5KDQpKVswXTtcclxuXHJcbiAgICAgIC8vIHRoZSB0aGUgc2l6ZXMgYXJyYXlcclxuICAgICAgbGV0IHNpemVzID0gYXdhaXQgYmxvYlNsaWNlci5uZXh0SW50MzJBcnJheSg0ICogKG51bUVudHJpZXMgKyAxKSk7XHJcblxyXG4gICAgICAvLyB0aGVuIHRoZSBpbmZvIG9iamVjdFxyXG4gICAgICBsZXQganNvbkluZm8gPSBhd2FpdCBibG9iU2xpY2VyLm5leHRTdHJpbmcoc2l6ZXNbMF0pO1xyXG5cclxuICAgICAgLy8gdGhlbiBhbGwgdGhlIHN1YiBibG9ic1xyXG4gICAgICBsZXQgcGFydHM6IEJsb2JbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUVudHJpZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgc2l6ZSA9IHNpemVzW2kgKyAxXTtcclxuICAgICAgICAgcGFydHMucHVzaChibG9iU2xpY2VyLm5leHQoc2l6ZSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEJsb2JGaWxlKEpTT04ucGFyc2UoanNvbkluZm8pLCBwYXJ0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBCbG9iRmlsZSBCbG9iXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gaW5mbyBUaGUgaW5mb3JtYXRpb24gaGVhZGVyIHRvIGJlIHN0b3JlZCB3aXRoIHRoZSBCbG9iXHJcbiAgICAqIEBwYXJhbSBwYXJ0cyBUaGUgZGF0YSBjb250ZW50cyBvZiB0aGUgQmxvYlxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGVCbG9iKGluZm86IG9iamVjdCwgcGFydHM6IEJsb2JQYXJ0W10pOiBCbG9iIHtcclxuXHJcbiAgICAgIGxldCBqc29uSW5mbyA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xyXG5cclxuICAgICAgLy8gQnVpbGQgdGhlIGFycmF5IG9mIHNpemVzXHJcbiAgICAgIGxldCBzaXplczogbnVtYmVyW10gPSBbanNvbkluZm8ubGVuZ3RoXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgcGFydCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICBpZiAocGFydCBpbnN0YW5jZW9mIEludDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaCg0ICogcGFydC5sZW5ndGgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKHBhcnQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICAgICAgc2l6ZXMucHVzaChwYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPSAnVW5zdXBwb3J0ZWQgQmxvYiBQYXJ0IFR5cGU6ICcgKyB0eXBlb2YgcGFydDtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhc3NlbWJsZSB0aGUgYmxvYiBwYXJ0c1xyXG4gICAgICBsZXQgYWxsUGFydHM6IEJsb2JQYXJ0W10gPSBbXTtcclxuICAgICAgYWxsUGFydHMucHVzaChuZXcgSW50MzJBcnJheShbcGFydHMubGVuZ3RoXSkpO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKG5ldyBJbnQzMkFycmF5KHNpemVzKSk7XHJcbiAgICAgIGFsbFBhcnRzLnB1c2goanNvbkluZm8pO1xyXG4gICAgICBhbGxQYXJ0cy5wdXNoKC4uLnBhcnRzKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgYmxvYlxyXG4gICAgICByZXR1cm4gbmV3IEJsb2IoYWxsUGFydHMpO1xyXG4gICB9XHJcbn0iLCIvLyBuZWVkZWQgZm9yIFNhZmFyaVxyXG5pZiAoIUJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyKSB7XHJcbiAgIEJsb2IucHJvdG90eXBlLmFycmF5QnVmZmVyID0gZnVuY3Rpb24gKCk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuXHJcbiAgICAgIC8vIHJlYWQgdGhlIEJsb2IgdGhlIG9sZCBmYXNoaW9uZWQgd2F5XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHN0YXJ0IHRoZSByZWFkXHJcbiAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG5cclxuLy8gbmVlZGVkIGZvciBTYWZhcmlcclxuaWYgKCFCbG9iLnByb3RvdHlwZS50ZXh0KSB7XHJcblxyXG4gICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICBCbG9iLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAvLyByZWFkIHRoZSBCbG9iIHRoZSBvbGQgZmFzaGlvbmVkIHdheVxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlY29kZSBpbnRvIGEgc3RyaW5nXHJcbiAgICAgICAgICAgIGxldCB0eHQgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHh0KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdGFydCB0aGUgcmVhZFxyXG4gICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjMywgVmVjNCB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBJVmVjMyB9IGZyb20gXCIuL0lWZWMzXCI7XHJcbmltcG9ydCB7IE1hdDQgfSBmcm9tIFwiLi9NYXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1pbk1heCB7XHJcbiAgIHJlYWRvbmx5IG1pbjogbnVtYmVyO1xyXG4gICByZWFkb25seSBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvdW5kaW5nQm94IHtcclxuICAgcHVibGljIG1pbjogVmVjMztcclxuICAgcHVibGljIG1heDogVmVjMztcclxuXHJcbiAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4LnggLSB0aGlzLm1pbi54O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXgueSAtIHRoaXMubWluLnk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF4LnogLSB0aGlzLm1pbi56O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRpYWdvbmFsKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCB3ID0gdGhpcy53aWR0aDtcclxuICAgICAgbGV0IGggPSB0aGlzLmhlaWdodDtcclxuICAgICAgbGV0IGQgPSB0aGlzLmRlcHRoO1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHcgKiB3ICsgaCAqIGggKyBkICogZCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgY2VudGVyKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICAodGhpcy5taW4ueCArIHRoaXMubWF4LngpIC8gMixcclxuICAgICAgICAgKHRoaXMubWluLnkgKyB0aGlzLm1heC55KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLm1pbi56ICsgdGhpcy5tYXgueikgLyAyLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjb3JuZXJzKCk6IFZlYzNbXSB7XHJcbiAgICAgIGxldCBjb3JuZXJzOiBWZWMzW10gPSBbXTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWluLngsIHRoaXMubWluLnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5taW4ueCwgdGhpcy5tYXgueSwgdGhpcy5taW4uel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1pbi54LCB0aGlzLm1heC55LCB0aGlzLm1heC56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWluLnksIHRoaXMubWluLnpdKSk7XHJcbiAgICAgIGNvcm5lcnMucHVzaChuZXcgVmVjMyhbdGhpcy5tYXgueCwgdGhpcy5taW4ueSwgdGhpcy5tYXguel0pKTtcclxuICAgICAgY29ybmVycy5wdXNoKG5ldyBWZWMzKFt0aGlzLm1heC54LCB0aGlzLm1heC55LCB0aGlzLm1pbi56XSkpO1xyXG4gICAgICBjb3JuZXJzLnB1c2gobmV3IFZlYzMoW3RoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWF4LnpdKSk7XHJcbiAgICAgIHJldHVybiBjb3JuZXJzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29uc3RydWN0b3IobWluOiBWZWMzID0gbmV3IFZlYzMoW051bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUVdKSxcclxuICAgICAgbWF4OiBWZWMzID0gbmV3IFZlYzMoWy1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUVdKSkge1xyXG4gICAgICB0aGlzLm1pbiA9IG1pbjtcclxuICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluZmluaXRlKCk6IEJvdW5kaW5nQm94IHtcclxuICAgICAgY29uc3QgTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xyXG4gICAgICBjb25zdCBNSU4gPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgIHJldHVybiBuZXcgQm91bmRpbmdCb3gobmV3IFZlYzMoW01JTiwgTUlOLCBNSU5dKSwgbmV3IFZlYzMoW01BWCwgTUFYLCBNQVhdKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBpbnNpZGUodmVjOiBJVmVjMyk6IGJvb2xlYW4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIHZlYy54ID49IHRoaXMubWluLnggJiYgdmVjLnggPD0gdGhpcy5tYXgueCAmJlxyXG4gICAgICAgICB2ZWMueSA+PSB0aGlzLm1pbi55ICYmIHZlYy55IDw9IHRoaXMubWF4LnkgJiZcclxuICAgICAgICAgdmVjLnogPj0gdGhpcy5taW4ueiAmJiB2ZWMueiA8PSB0aGlzLm1heC56XHJcbiAgICAgICkge1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIpIHtcclxuICAgICAgcmV0dXJuICdbJyArIHRoaXMubWluLnRvU3RyaW5nKGRpZ2l0cykgKyAnXScgK1xyXG4gICAgICAgICAnWycgKyB0aGlzLm1heC50b1N0cmluZyhkaWdpdHMpICsgJ10nO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdXBkYXRlKHY6IElWZWMzKSB7XHJcbiAgICAgIGlmIChpc05hTih2LngpIHx8IGlzTmFOKHYueSkgfHwgaXNOYU4odi56KSkge1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmFOJyk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1pbi54ID0gTWF0aC5taW4odGhpcy5taW4ueCwgdi54KTtcclxuICAgICAgdGhpcy5taW4ueSA9IE1hdGgubWluKHRoaXMubWluLnksIHYueSk7XHJcbiAgICAgIHRoaXMubWluLnogPSBNYXRoLm1pbih0aGlzLm1pbi56LCB2LnopO1xyXG4gICAgICB0aGlzLm1heC54ID0gTWF0aC5tYXgodGhpcy5tYXgueCwgdi54KTtcclxuICAgICAgdGhpcy5tYXgueSA9IE1hdGgubWF4KHRoaXMubWF4LnksIHYueSk7XHJcbiAgICAgIHRoaXMubWF4LnogPSBNYXRoLm1heCh0aGlzLm1heC56LCB2LnopO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgbWVyZ2Uob3RoZXI6IEJvdW5kaW5nQm94KSB7XHJcbiAgICAgIHRoaXMubWluLnggPSBNYXRoLm1pbih0aGlzLm1pbi54LCBvdGhlci5taW4ueCk7XHJcbiAgICAgIHRoaXMubWluLnkgPSBNYXRoLm1pbih0aGlzLm1pbi55LCBvdGhlci5taW4ueSk7XHJcbiAgICAgIHRoaXMubWluLnogPSBNYXRoLm1pbih0aGlzLm1pbi56LCBvdGhlci5taW4ueik7XHJcbiAgICAgIHRoaXMubWF4LnggPSBNYXRoLm1heCh0aGlzLm1heC54LCBvdGhlci5tYXgueCk7XHJcbiAgICAgIHRoaXMubWF4LnkgPSBNYXRoLm1heCh0aGlzLm1heC55LCBvdGhlci5tYXgueSk7XHJcbiAgICAgIHRoaXMubWF4LnogPSBNYXRoLm1heCh0aGlzLm1heC56LCBvdGhlci5tYXgueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBtdWx0TShtYXQ6IE1hdDQpOiBCb3VuZGluZ0JveCB7XHJcbiAgICAgIGxldCByZXQgPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgbGV0IHYxID0gbWF0Lm11bHRWKG5ldyBWZWM0KFt0aGlzLm1pbi54LCB0aGlzLm1pbi55LCB0aGlzLm1pbi56LCAxXSkpO1xyXG4gICAgICBsZXQgdjIgPSBtYXQubXVsdFYobmV3IFZlYzQoW3RoaXMubWF4LngsIHRoaXMubWF4LnksIHRoaXMubWF4LnosIDFdKSk7XHJcbiAgICAgIHJldC5taW4ueCA9IE1hdGgubWluKHYxLngsIHYyLngpO1xyXG4gICAgICByZXQubWluLnkgPSBNYXRoLm1pbih2MS55LCB2Mi55KTtcclxuICAgICAgcmV0Lm1pbi56ID0gTWF0aC5taW4odjEueiwgdjIueik7XHJcbiAgICAgIHJldC5tYXgueCA9IE1hdGgubWF4KHYxLngsIHYyLngpO1xyXG4gICAgICByZXQubWF4LnkgPSBNYXRoLm1heCh2MS55LCB2Mi55KTtcclxuICAgICAgcmV0Lm1heC56ID0gTWF0aC5tYXgodjEueiwgdjIueik7XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IE1hdDQgfSBmcm9tIFwiLi9NYXRcIjtcclxuaW1wb3J0IHsgSU1pbk1heCB9IGZyb20gXCIuL0JvdW5kaW5nQm94XCI7XHJcbmltcG9ydCB7IFBsYW5lIH0gZnJvbSBcIi4vUGxhbmVcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHNldCBvZiBwb2ludHMgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kaW5nIGVkZ2VzIG9mIGFuIG9iamVjdC4gQWxsIHBvaW50cyBhcmVcclxuICogZW5jbG9zZWQgaW4gdGhlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJvdW5kaW5nUHRzIHtcclxuICAgcHJpdmF0ZSBwdHM6IFZlYzNbXTtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihwdHM6IFZlYzNbXSkge1xyXG4gICAgICB0aGlzLnB0cyA9IHB0cztcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldChpOiBudW1iZXIpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHRzW2ldO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGlzdFRvUG9pbnQocHQ6IFZlYzMpOiBJTWluTWF4IHtcclxuICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgbWluOiBOdW1iZXIuTUFYX1ZBTFVFLFxyXG4gICAgICAgICBtYXg6IC1OdW1iZXIuTUFYX1ZBTFVFLFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnB0cy5mb3JFYWNoKChwdHM6IFZlYzMpID0+IHtcclxuICAgICAgICAgbGV0IGQgPSBwdHMuZGlzdFRvUG9pbnQocHQpO1xyXG4gICAgICAgICByZXQubWluID0gTWF0aC5taW4oZCwgcmV0Lm1pbik7XHJcbiAgICAgICAgIHJldC5tYXggPSBNYXRoLm1pbihkLCByZXQubWF4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZGlzdFRvUGxhbmUocGxhbmU6IFBsYW5lKTogSU1pbk1heCB7XHJcbiAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcclxuICAgICAgICAgbWF4OiAtTnVtYmVyLk1BWF9WQUxVRSxcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wdHMuZm9yRWFjaCgocHQ6IFZlYzMpID0+IHtcclxuICAgICAgICAgbGV0IGQgPSBwbGFuZS5kaXN0VG9QdChwdCk7XHJcbiAgICAgICAgIHJldC5taW4gPSBNYXRoLm1pbihkLCByZXQubWluKTtcclxuICAgICAgICAgcmV0Lm1heCA9IE1hdGgubWF4KGQsIHJldC5tYXgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IGdsQ29sb3IzIH0gZnJvbSBcIi4vZ2xDb2xvclwiO1xyXG5cclxuZXhwb3J0IHR5cGUgU3RhdHVzRnVuY3Rpb24gPSAoc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gdjEgKyBjbGFtcChtaXgsIDAsIDEpICogKHYyIC0gdjEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3MocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAoYSA9PT0gdW5kZWZpbmVkID8gJycgOiAnLCcgKyBhKSArICcpJztcclxufVxyXG4iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSBcIi4vVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRWZWMzIH0gZnJvbSBcIi4vSW5kZXhlZFZlYzNcIjtcclxuXHJcbi8qKlxyXG4gKiBNaW5pbWFsaXN0IHdyYXBwZXIgYXJvdW5kIGEgV2ViR0wgdHJpYW5nbGUgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRUcmlhbmdsZSB7XHJcbiAgIHB1YmxpYyB2MTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyB2MzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMTogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMjogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBuMzogSW5kZXhlZFZlYzM7XHJcbiAgIHB1YmxpYyBpMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaTI6IG51bWJlcjtcclxuICAgcHVibGljIGkzOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihcclxuICAgICAgdmVydGljZXM6IG51bWJlcltdLFxyXG4gICAgICBub3JtYWxzOiBudW1iZXJbXSxcclxuICAgICAgaTE6IG51bWJlcixcclxuICAgICAgaTI6IG51bWJlcixcclxuICAgICAgaTM6IG51bWJlcixcclxuICAgKSB7XHJcbiAgICAgIHRoaXMudjEgPSBuZXcgSW5kZXhlZFZlYzModmVydGljZXMsIGkxKTtcclxuICAgICAgdGhpcy52MiA9IG5ldyBJbmRleGVkVmVjMyh2ZXJ0aWNlcywgaTIpO1xyXG4gICAgICB0aGlzLnYzID0gbmV3IEluZGV4ZWRWZWMzKHZlcnRpY2VzLCBpMyk7XHJcbiAgICAgIHRoaXMubjEgPSBuZXcgSW5kZXhlZFZlYzMobm9ybWFscywgaTEpO1xyXG4gICAgICB0aGlzLm4yID0gbmV3IEluZGV4ZWRWZWMzKG5vcm1hbHMsIGkyKTtcclxuICAgICAgdGhpcy5uMyA9IG5ldyBJbmRleGVkVmVjMyhub3JtYWxzLCBpMyk7XHJcbiAgICAgIHRoaXMuaTEgPSBpMTtcclxuICAgICAgdGhpcy5pMiA9IGkyO1xyXG4gICAgICB0aGlzLmkzID0gaTM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBtaW5YKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnYxLngsIHRoaXMudjIueCwgdGhpcy52My54KTtcclxuICAgfVxyXG4gICBnZXQgbWluWSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy52MS55LCB0aGlzLnYyLnksIHRoaXMudjMueSk7XHJcbiAgIH1cclxuICAgZ2V0IG1pblooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjEueiwgdGhpcy52Mi56LCB0aGlzLnYzLnopO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbWF4WCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy52MS54LCB0aGlzLnYyLngsIHRoaXMudjMueCk7XHJcbiAgIH1cclxuICAgZ2V0IG1heFkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjEueSwgdGhpcy52Mi55LCB0aGlzLnYzLnkpO1xyXG4gICB9XHJcbiAgIGdldCBtYXhaKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLnYxLnosIHRoaXMudjIueiwgdGhpcy52My56KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGxldCB2MSA9IHRoaXMudjEudG9WZWMzKCk7XHJcbiAgICAgIGxldCB2MiA9IHRoaXMudjIudG9WZWMzKCk7XHJcbiAgICAgIGxldCB2MyA9IHRoaXMudjMudG9WZWMzKCk7XHJcblxyXG4gICAgICBsZXQgYSA9IHYyLnN1YnRyYWN0KHYxKTtcclxuICAgICAgbGV0IGIgPSB2My5zdWJ0cmFjdCh2Mik7XHJcbiAgICAgIHJldHVybiBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBJVmVjMyB9IGZyb20gXCIuL0lWZWMzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXhlZFZlYzMgaW1wbGVtZW50cyBJVmVjMyB7XHJcblxyXG4gICBwcml2YXRlIHZhbHVlczogbnVtYmVyW107XHJcbiAgIHByaXZhdGUgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHZhbHVlczogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDBdO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMyAqIHRoaXMuaW5kZXggKyAxXTtcclxuICAgfVxyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzMgKiB0aGlzLmluZGV4ICsgMl07XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDBdID0gdmFsO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDFdID0gdmFsO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szICogdGhpcy5pbmRleCArIDJdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgdG9WZWMzKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdKTtcclxuICAgfVxyXG59IiwiLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGxvZ2dpbmcgdGltaW5nIG1lc3NhZ2VzIGZvciBwcm9maWxlIGNvZGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlciB7XHJcbiAgIC8vIHRoZSBsYXN0IHRpbWUgc3RhbXBcclxuICAgcHJpdmF0ZSB0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpIHtcclxuICAgICAgcmV0dXJuIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudCk7XHJcbiAgIH1cclxuICAgLyoqXHJcbiAgICAqIFByaW50cyBhIG1lc3NhZ2UgdG8gY29uc29sZSBvZiB0aGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBsYXN0IG1hcmtcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gcHJpbnQgd2l0aCB0aGUgdGltZVxyXG4gICAgKi9cclxuICAgcHVibGljIGxvZyhtc2c6IHN0cmluZykge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cgKyAnICcgKyB0aGlzLmVsYXBzZWRNcy50b0ZpeGVkKDEpICsgJyBtcycpO1xyXG4gICAgICB0aGlzLm1hcmsoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFVwZGF0ZXMgdGhlIHRpbWVzdGFtcCB0byBub3dcclxuICAgICovXHJcbiAgIHB1YmxpYyBtYXJrKCkge1xyXG4gICAgICB0aGlzLnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgfVxyXG5cclxufSIsImltcG9ydCB7IFZlYzMgfSBmcm9tIFwiLi9WZWNcIjtcclxuaW1wb3J0IHsgSW5kZXhlZFRyaWFuZ2xlIH0gZnJvbSBcIi4vSW5kZXhlZFRyaWFuZ2xlXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4vUHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgQmxvYkZpbGUgfSBmcm9tIFwiLi9CbG9iRmlsZVwiO1xyXG5pbXBvcnQgeyBJbmRleGVkVmVjMyB9IGZyb20gXCIuL0luZGV4ZWRWZWMzXCI7XHJcbmltcG9ydCB7IElWZWMzIH0gZnJvbSBcIi4vSVZlYzNcIjtcclxuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tIFwiLi9Cb3VuZGluZ0JveFwiO1xyXG5pbXBvcnQgeyBCb3VuZGluZ1B0cyB9IGZyb20gXCIuL0JvdW5kaW5nUHRzXCI7XHJcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gTm9ybWFsVHlwZSB7XHJcbiAgIFNtb290aCxcclxuICAgRmxhdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVPYmpEYXRhIHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICBzb3VyY2U6IHN0cmluZztcclxuICAgdmVydGljZXM6IEZsb2F0MzJBcnJheTtcclxuICAgbm9ybWFsczogRmxvYXQzMkFycmF5O1xyXG4gICBpbmRpY2VzOiBJbnQzMkFycmF5O1xyXG4gICBib3hNaW46IFZlYzM7XHJcbiAgIGJveE1heDogVmVjMztcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZnJvbSBhIGJ1bmNoIG9mIHRyaWFuZ2xlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZU9iaiB7XHJcbiAgIHB1YmxpYyB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgcHVibGljIG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgIHB1YmxpYyBpbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICBwdWJsaWMgYm94ID0gbmV3IEJvdW5kaW5nQm94KCk7XHJcbiAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBzb3VyY2U6IHN0cmluZztcclxuICAgcHJpdmF0ZSBib3VuZGluZ1B0czogQm91bmRpbmdQdHM7XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVZlcnRpY2VzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IG51bVRyaWFuZ2xlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNlcy5sZW5ndGggLyAzO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveC53aWR0aDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmhlaWdodDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5ib3guZGVwdGg7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgZGlhZ29uYWwoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmRpYWdvbmFsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94LmNlbnRlcjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldFRyaWFuZ2xlKGluZGV4OiBudW1iZXIpOiBJbmRleGVkVHJpYW5nbGUge1xyXG4gICAgICBsZXQgaTEgPSB0aGlzLmluZGljZXNbMyAqIGluZGV4ICsgMF07XHJcbiAgICAgIGxldCBpMiA9IHRoaXMuaW5kaWNlc1szICogaW5kZXggKyAxXTtcclxuICAgICAgbGV0IGkzID0gdGhpcy5pbmRpY2VzWzMgKiBpbmRleCArIDJdO1xyXG4gICAgICByZXR1cm4gbmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCB0aGlzLm5vcm1hbHMsIGkxLCBpMiwgaTMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgcHVzaFF1YWQodjE6IElWZWMzLCB2MjogSVZlYzMsIHYzOiBJVmVjMywgdjQ6IElWZWMzKSB7XHJcblxyXG4gICAgICB0aGlzLnB1c2hUcmlhbmdsZSh2MSwgdjIsIHYzKTtcclxuICAgICAgdGhpcy5wdXNoVHJpYW5nbGUodjIsIHY0LCB2Myk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBwdXNoVHJpYW5nbGUodjE6IElWZWMzLCB2MjogSVZlYzMsIHYzOiBJVmVjMykge1xyXG5cclxuICAgICAgLy8gYWRkIGluZGljZXNcclxuICAgICAgbGV0IGkxID0gdGhpcy5udW1WZXJ0aWNlcztcclxuICAgICAgbGV0IGkyID0gaTEgKyAxO1xyXG4gICAgICBsZXQgaTMgPSBpMSArIDI7XHJcbiAgICAgIHRoaXMuaW5kaWNlcy5wdXNoKGkxLCBpMiwgaTMpO1xyXG5cclxuICAgICAgLy8gYWRkIHZlcnRpY2VzXHJcbiAgICAgIHRoaXMudmVydGljZXMucHVzaCh2MS54LCB2MS55LCB2MS56LCB2Mi54LCB2Mi55LCB2Mi56LCB2My54LCB2My55LCB2My56KTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYxKTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYyKTtcclxuICAgICAgdGhpcy5ib3gudXBkYXRlKHYzKTtcclxuXHJcbiAgICAgIC8vIGFkZCBub3JtYWxzXHJcbiAgICAgIGxldCB0cmkgPSBuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHRoaXMubm9ybWFscywgaTEsIGkyLCBpMyk7XHJcbiAgICAgIGxldCBub3JtYWwgPSB0cmkuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICB0aGlzLm5vcm1hbHMucHVzaCguLi5ub3JtYWwudmFsdWVzKTtcclxuICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKC4uLm5vcm1hbC52YWx1ZXMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgY29tcHV0ZU5vcm1hbHModHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09IE5vcm1hbFR5cGUuU21vb3RoKSB7XHJcbiAgICAgICAgIGxldCBtdWx0aU5vcm1WZXJ0aWNlczogTXVsdGlOb3JtVmVydGV4W10gPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXMucHVzaChuZXcgTXVsdGlOb3JtVmVydGV4KCkpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBzdG9yZSB0aGUgbm9ybWFscyB3aXRoIGVhY2ggdmVydGV4IC0gd2UnbGwgbGF0ZXIgYXZlcmFnZSB0aGVzZVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyaSA9IHRoaXMuZ2V0VHJpYW5nbGUoaSk7XHJcbiAgICAgICAgICAgIGxldCBuID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmkxXS5wdXNoKG4pO1xyXG4gICAgICAgICAgICBtdWx0aU5vcm1WZXJ0aWNlc1t0cmkuaTJdLnB1c2gobik7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzW3RyaS5pM10ucHVzaChuKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gcG9wdWxhdGUgdGhlIG5vcm1hbHMgYXJyYXlcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXVsdGlOb3JtVmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2goLi4ubXVsdGlOb3JtVmVydGljZXNbaV0ubm9ybWFsLnZhbHVlcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gdG8gZ28gdGhpcyB3YXkgd2UgbmVlZCB0byBoYXZlIGEgdW5pcXVlIHZlY3RvciBhbmQgbm9ybWFsIGZvciBlYWNoIHRyaWFuZ2xlXHJcbiAgICAgICAgIC8vIGNvcm5lci4gQmxvdyBhd2F5IHRoZSBvbGQgc3R1ZmYgYW5kIHJlYnVpbGRcclxuICAgICAgICAgbGV0IG9sZEluZGljZXMgPSB0aGlzLmluZGljZXM7XHJcbiAgICAgICAgIGxldCBvbGRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7XHJcblxyXG4gICAgICAgICAvLyByZXNldCBldmVyeXRoaW5nXHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xyXG5cclxuICAgICAgICAgLy8gcmVidWlsZFxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEluZGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2MSA9IG5ldyBJbmRleGVkVmVjMyhvbGRWZXJ0aWNlcywgb2xkSW5kaWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgbGV0IHYyID0gbmV3IEluZGV4ZWRWZWMzKG9sZFZlcnRpY2VzLCBvbGRJbmRpY2VzWzMgKiBpICsgMV0pO1xyXG4gICAgICAgICAgICBsZXQgdjMgPSBuZXcgSW5kZXhlZFZlYzMob2xkVmVydGljZXMsIG9sZEluZGljZXNbMyAqIGkgKyAyXSk7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaFRyaWFuZ2xlKHYxLCB2MiwgdjMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSB4KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF07XHJcbiAgIH1cclxuICAgcHJpdmF0ZSB5KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMV07XHJcbiAgIH1cclxuICAgcHJpdmF0ZSB6KGk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl07XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBmaW5kQm91bmRzKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZmluZGluZyBib3VuZHMnKTtcclxuICAgICAgbGV0IGJveCA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLmdldFRyaWFuZ2xlKGkpO1xyXG4gICAgICAgICBib3gudXBkYXRlKHRyaS52MSk7XHJcbiAgICAgICAgIGJveC51cGRhdGUodHJpLnYyKTtcclxuICAgICAgICAgYm94LnVwZGF0ZSh0cmkudjMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveCA9IGJveDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEJyZWFrcyB0aGUgb2JqZWN0IGludG8gZXZlbmx5IHNwYWNlZCB2b2x1bWVzLiBUaGUgbnVtYmVyIG9mIHZvbHVtZXMgaXMgYXV0b21hdGljYWxseVxyXG4gICAgKiBkZXRlcm1pbmVkIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzLlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldEJvdW5kaW5nUHRzKCk6IEJvdW5kaW5nUHRzIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvdW5kaW5nUHRzKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmJvdW5kaW5nUHRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbnVtU3RlcHMgPSAxNTtcclxuXHJcbiAgICAgIGxldCBib3hlczogQm91bmRpbmdCb3hbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KG51bVN0ZXBzLCAzKTsgaSsrKSB7XHJcbiAgICAgICAgIGJveGVzLnB1c2gobmV3IEJvdW5kaW5nQm94KCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdiA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIHYueCA9IHRoaXMudmVydGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgdi55ID0gdGhpcy52ZXJ0aWNlc1szICogaSArIDFdO1xyXG4gICAgICAgICB2LnogPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh2LnggLSB0aGlzLmJveC5taW4ueCkgLyAodGhpcy5ib3gud2lkdGgpKTtcclxuICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHYueSAtIHRoaXMuYm94Lm1pbi55KSAvICh0aGlzLmJveC5oZWlnaHQpKTtcclxuICAgICAgICAgbGV0IHogPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHYueiAtIHRoaXMuYm94Lm1pbi56KSAvICh0aGlzLmJveC5kZXB0aCkpO1xyXG4gICAgICAgICB4ID0gY2xhbXAoeCwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeSA9IGNsYW1wKHksIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIHogPSBjbGFtcCh6LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgIGJveGVzW2luZGV4XS51cGRhdGUodik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBib3hNYXAgPSBuZXcgTWFwPG51bWJlciwgQm91bmRpbmdCb3g+KCk7XHJcbiAgICAgIGxldCBib3hDb3VudCA9IDA7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtU3RlcHM7IHgrKykge1xyXG4gICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG51bVN0ZXBzOyB5KyspIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0OiB7XHJcbiAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIGJveDogQm91bmRpbmdCb3gsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBsYXN0OiB7XHJcbiAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIGJveDogQm91bmRpbmdCb3gsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgbnVtU3RlcHM7IHorKykge1xyXG4gICAgICAgICAgICAgICBsZXQgaW5kZXggPSB4ICsgeSAqIG51bVN0ZXBzICsgeiAqIG51bVN0ZXBzICogbnVtU3RlcHM7XHJcbiAgICAgICAgICAgICAgIGxldCBib3ggPSBib3hlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgIGlmIChib3gubWluLnggPT09IE51bWJlci5NQVhfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgYm94Q291bnQrKztcclxuICAgICAgICAgICAgICAgaWYgKCFmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICBmaXJzdCA9IHsgaW5kZXg6IGluZGV4LCBib3g6IGJveCB9O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGxhc3QgPSB7IGluZGV4OiBpbmRleCwgYm94OiBib3ggfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0ICYmIGJveE1hcC5oYXMoZmlyc3QuaW5kZXgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICBib3hNYXAuc2V0KGZpcnN0LmluZGV4LCBmaXJzdC5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsYXN0ICYmIGJveE1hcC5oYXMobGFzdC5pbmRleCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgIGJveE1hcC5zZXQobGFzdC5pbmRleCwgbGFzdC5ib3gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHB0czogVmVjM1tdID0gW107XHJcbiAgICAgIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgICAgICBpZiAoYm94Lm1pbi54ICE9PSBOdW1iZXIuTUFYX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgIHB0cy5wdXNoKC4uLmJveC5jb3JuZXJzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYm91bmRpbmdQdHMgPSBuZXcgQm91bmRpbmdQdHMocHRzKTtcclxuICAgICAgcmV0dXJuIHRoaXMuYm91bmRpbmdQdHM7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIGluIHRoZSBmb3IgLk9CSiBmaWxlIGZvcm1hdFxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIHRvT2JqU3RyaW5nKGRpZ2l0cyA9IDgpIHtcclxuXHJcbiAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgc3RyICs9ICcjIFZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICcjIFRyaWFuZ2xlczogJyArIHRoaXMubnVtVHJpYW5nbGVzICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnXFxuJztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlcztcclxuICAgICAgICAgc3RyICs9ICd2ICcgKyB2WzMgKiBpICsgMF0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHZbMyAqIGkgKyAxXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdlszICogaSArIDJdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgbiA9IHRoaXMubm9ybWFscztcclxuICAgICAgICAgc3RyICs9ICd2biAnICsgblszICogaSArIDBdLnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuWzMgKiBpICsgMV0udG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG5bMyAqIGkgKyAyXS50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuICAgICAgICAgc3RyICs9ICdmICcgK1xyXG4gICAgICAgICAgICAodC5pMSArIDEpICsgJy8vJyArICh0LmkxICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pMiArIDEpICsgJy8vJyArICh0LmkyICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pMyArIDEpICsgJy8vJyArICh0LmkzICsgMSkgKyAnXFxuJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgfVxyXG5cclxuICAgcHVibGljIG9wdGltaXplKG5vcm1hbFR5cGU6IE5vcm1hbFR5cGUpIHtcclxuXHJcbiAgICAgIGlmIChub3JtYWxUeXBlID09PSBOb3JtYWxUeXBlLlNtb290aCkge1xyXG5cclxuICAgICAgICAgbGV0IHZlcnRleFRvSW5kZXhNYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgICAgICBsZXQgaW5kZXhUb0luZGV4TWFwID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgIC8vIGZpcnN0IGdlbmVyYXRlIGEgdW5pcXVlIHNldCBvZiB2ZXJ0aWNlc1xyXG4gICAgICAgICBsZXQgdW5pcXVlVmVydGljZXM6IEluZGV4ZWRWZWMzW10gPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBvbGRWZXJ0ZXggPSBuZXcgSW5kZXhlZFZlYzModGhpcy52ZXJ0aWNlcywgaSk7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0udG9GaXhlZCg0KSArICcgJyArIHRoaXMudmVydGljZXNbMyAqIGkgKyAxXS50b0ZpeGVkKDQpICsgJyAnICsgdGhpcy52ZXJ0aWNlc1szICogaSArIDJdLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgbmV3SW5kZXg7XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXhUb0luZGV4TWFwLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGp1c3QgbWFwIHRoZSBvbGQgaW5kZXggdG8gdGhlIGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgICAgICAgIG5ld0luZGV4ID0gdmVydGV4VG9JbmRleE1hcC5nZXQoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGVudHJ5XHJcbiAgICAgICAgICAgICAgIG5ld0luZGV4ID0gdW5pcXVlVmVydGljZXMubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgICAgdmVydGV4VG9JbmRleE1hcC5zZXQoa2V5LCBuZXdJbmRleCk7XHJcbiAgICAgICAgICAgICAgIHVuaXF1ZVZlcnRpY2VzLnB1c2gob2xkVmVydGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgdHJhbnNsYXRpb25cclxuICAgICAgICAgICAgaW5kZXhUb0luZGV4TWFwLnNldChvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyByZXNldCBhbGwgdGhlIHZlcnRpY2VzXHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlxdWVWZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godW5pcXVlVmVydGljZXNbaV0ueCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1bmlxdWVWZXJ0aWNlc1tpXS55KTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHVuaXF1ZVZlcnRpY2VzW2ldLnopO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyByZW1hcCBhbGwgaW5kaWNlc1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb2xkSW5kZXggPSB0aGlzLmluZGljZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNlc1tpXSA9IGluZGV4VG9JbmRleE1hcC5nZXQob2xkSW5kZXggKyAxKSAtIDE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgLy8gbm90aGluZyB0byBkbyBmb3IgZmxhdCBub3JtYWxzLiBOZXcgdmVydGljZXMgYW5kIG5vcm1hbHMgYXJlIGNyZWF0ZWQgaW4gXHJcbiAgICAgICAgIC8vIGNvbXB1dGVOb3JtYWxzKCkgYmVsb3cgaWYgbmVlZGVkXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMobm9ybWFsVHlwZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0cmltKGJveDogQm91bmRpbmdCb3gpIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuICAgICAgbGV0IGluZGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgdHJpID0gdGhpcy5nZXRUcmlhbmdsZShpKTtcclxuXHJcbiAgICAgICAgIGlmIChib3guaW5zaWRlKHRyaS52MSkgJiYgYm94Lmluc2lkZSh0cmkudjIpICYmIGJveC5pbnNpZGUodHJpLnYzKSkge1xyXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2godHJpLmkxKTtcclxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKHRyaS5pMik7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaCh0cmkuaTMpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3RyaW1tZWQgJyArICh0aGlzLmluZGljZXMubGVuZ3RoIC0gaW5kaWNlcy5sZW5ndGgpICsgJyB0cmlhbmdsZXMnKTtcclxuICAgICAgdGhpcy5pbmRpY2VzID0gaW5kaWNlcztcclxuICAgICAgdGhpcy5maW5kQm91bmRzKCk7XHJcbiAgICAgIHAubG9nKCdUcmltIENvbXBsZXRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBtaXJyb3IoeDogbnVtYmVyLCBhZGQ6IGJvb2xlYW4pIHtcclxuICAgICAgbGV0IHAgPSBuZXcgUHJvZmlsZXIoKTtcclxuXHJcbiAgICAgIGlmIChhZGQpIHtcclxuICAgICAgICAgLy8gZHVwbGljYXRlIHZlcnRpY2VzXHJcbiAgICAgICAgIGxldCBudW1WZXJ0aWNlcyA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0gLT0geDs7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCgtdGhpcy52ZXJ0aWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRoaXMudmVydGljZXNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0aGlzLnZlcnRpY2VzWzMgKiBpICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCgtdGhpcy5ub3JtYWxzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh0aGlzLm5vcm1hbHNbMyAqIGkgKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHRoaXMubm9ybWFsc1szICogaSArIDJdKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgbGV0IG51bUluZGljZXMgPSB0aGlzLmluZGljZXMubGVuZ3RoO1xyXG4gICAgICAgICBsZXQgc3RhcnRJbmRleCA9IG51bVZlcnRpY2VzO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUluZGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmluZGljZXMucHVzaChzdGFydEluZGV4ICsgdGhpcy5pbmRpY2VzW2ldKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAvLyByZWZsZWN0IHZlcnRpY2VzXHJcbiAgICAgICAgIGxldCBudW1WZXJ0aWNlcyA9IHRoaXMubnVtVmVydGljZXM7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0gPSB4ICsgKHggLSB0aGlzLnZlcnRpY2VzWzMgKiBpICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHNbMyAqIGkgKyAwXSA9IC10aGlzLm5vcm1hbHNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpbmRCb3VuZHMoKTtcclxuXHJcbiAgICAgIHAubG9nKCdNaXJyb3IgQ29tcGxldGUnKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHJldmVyc2UoKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICAvLyByZWZsZWN0IHZlcnRpY2VzXHJcbiAgICAgIGxldCB4ID0gdGhpcy5jZW50ZXIueDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZlcnRpY2VzOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlc1szICogaSArIDBdID0geCArICh4IC0gdGhpcy52ZXJ0aWNlc1szICogaSArIDBdKTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzWzMgKiBpICsgMF0gPSAtdGhpcy5ub3JtYWxzWzMgKiBpICsgMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlb3JkZXIgdHJpYW5nbGVzIHRvIHByZXNlcnZlIGZyb250LWJhY2sgZmFjaW5nXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICBsZXQgaTEgPSB0aGlzLmluZGljZXNbMyAqIGkgKyAwXTtcclxuICAgICAgICAgbGV0IGkyID0gdGhpcy5pbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlc1szICogaSArIDBdID0gaTI7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlc1szICogaSArIDFdID0gaTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAubG9nKCdSZXZlcnNlIENvbXBsZXRlJyk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21iaW5lKHRPYmo6IFRyaWFuZ2xlT2JqKSB7XHJcblxyXG4gICAgICAvLyBzYXZlIHRoZSB2YWx1ZSBmb3IgdGhlIGZpcnN0IGluZGV4IG9mIHRoZSBjb21iaW5lZCBvYmplY3RzXHJcbiAgICAgIGxldCBzdGFydEluZGV4ID0gdGhpcy5udW1WZXJ0aWNlcztcclxuXHJcbiAgICAgIC8vIGFkZCB0aGUgb3RoZXIgdmVydGljZXMgYW5kIG5vcm1hbHMgdG8gb3Vyc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmoudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRPYmoudmVydGljZXNbaV0pO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMucHVzaCh0T2JqLm5vcm1hbHNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhZGQgdGhlIG90aGVyIGluZGljZXMsIGJ1dCBvZmZzZXQgdGhlbSBwcm9wZXJseVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRPYmouaW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLmluZGljZXMucHVzaChzdGFydEluZGV4ICsgdE9iai5pbmRpY2VzW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbWVyZ2UgdGhlIGJvdW5kaW5nIGJveGVzXHJcbiAgICAgIHRoaXMuYm94Lm1lcmdlKHRPYmouYm94KTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHRvRGF0YSgpOiBUcmlhbmdsZU9iakRhdGEge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhO1xyXG4gICAgICBkYXRhLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubm9ybWFscyk7XHJcbiAgICAgIGRhdGEuaW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KHRoaXMuaW5kaWNlcyk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gdGhpcy5ib3gubWluLmNsb25lKCk7XHJcbiAgICAgIGRhdGEuYm94TWF4ID0gdGhpcy5ib3gubWF4LmNsb25lKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21EYXRhKGRhdGE6IFRyaWFuZ2xlT2JqRGF0YSk6IFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqKCk7XHJcbiAgICAgIHRPYmoubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgdE9iai52ZXJ0aWNlcyA9IEFycmF5LmZyb20oZGF0YS52ZXJ0aWNlcyk7XHJcbiAgICAgIHRPYmoubm9ybWFscyA9IEFycmF5LmZyb20oZGF0YS5ub3JtYWxzKTtcclxuICAgICAgdE9iai5pbmRpY2VzID0gQXJyYXkuZnJvbShkYXRhLmluZGljZXMpO1xyXG4gICAgICB0T2JqLmJveCA9IG5ldyBCb3VuZGluZ0JveChuZXcgVmVjMyhkYXRhLmJveE1pbi52YWx1ZXMpLCBuZXcgVmVjMyhkYXRhLmJveE1heC52YWx1ZXMpKTtcclxuICAgICAgcmV0dXJuIHRPYmo7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyB0b0Jsb2IoKTogQmxvYiB7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgYSBkZXNjcmlwdGlvblxyXG4gICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgRmlsZVR5cGU6ICdCaW5hcnkgT0JKJyxcclxuICAgICAgICAgVmVyc2lvbjogJzEuMCcsXHJcbiAgICAgICAgIE5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgU291cmNlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZ2V0IHRoZSByYXcgZGF0YVxyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMudG9EYXRhKCk7XHJcblxyXG4gICAgICAvLyBicmVhayBpdCBpbnRvIHBhcnRzXHJcbiAgICAgIGxldCBwYXJ0czogQmxvYlBhcnRbXSA9IFtdO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEudmVydGljZXMpO1xyXG4gICAgICBwYXJ0cy5wdXNoKGRhdGEubm9ybWFscyk7XHJcbiAgICAgIHBhcnRzLnB1c2goZGF0YS5pbmRpY2VzKTtcclxuICAgICAgcGFydHMucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEuYm94TWluLnZhbHVlcykpO1xyXG4gICAgICBwYXJ0cy5wdXNoKG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5ib3hNYXgudmFsdWVzKSk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIEJsb2JcclxuICAgICAgcmV0dXJuIEJsb2JGaWxlLmNyZWF0ZUJsb2IoaW5mbywgcGFydHMpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21CbG9iKGJsb2I6IEJsb2IpOiBQcm9taXNlPFRyaWFuZ2xlT2JqPiB7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IFRyaWFuZ2xlT2JqLmJsb2JUb0RhdGEoYmxvYik7XHJcbiAgICAgIHJldHVybiBUcmlhbmdsZU9iai5mcm9tRGF0YShkYXRhKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBibG9iVG9EYXRhKGJsb2I6IEJsb2IpOiBQcm9taXNlPFRyaWFuZ2xlT2JqRGF0YT4ge1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVHJpYW5nbGVPYmpEYXRhKCk7XHJcbiAgICAgIGxldCBiRmlsZSA9IGF3YWl0IEJsb2JGaWxlLmV4dHJhY3QoYmxvYik7XHJcblxyXG4gICAgICBkYXRhLm5hbWUgPSBiRmlsZS5pbmZvLk5hbWU7XHJcbiAgICAgIGRhdGEuc291cmNlID0gYkZpbGUuaW5mby5Tb3VyY2U7XHJcbiAgICAgIGRhdGEudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzBdLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBkYXRhLm5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KGF3YWl0IGJGaWxlLnBhcnRzWzFdLmFycmF5QnVmZmVyKCkpO1xyXG4gICAgICBkYXRhLmluZGljZXMgPSBuZXcgSW50MzJBcnJheShhd2FpdCBiRmlsZS5wYXJ0c1syXS5hcnJheUJ1ZmZlcigpKTtcclxuICAgICAgZGF0YS5ib3hNaW4gPSBuZXcgVmVjMyhBcnJheS5mcm9tKG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbM10uYXJyYXlCdWZmZXIoKSkpKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSBuZXcgVmVjMyhBcnJheS5mcm9tKG5ldyBGbG9hdDMyQXJyYXkoYXdhaXQgYkZpbGUucGFydHNbNF0uYXJyYXlCdWZmZXIoKSkpKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBjb21wdXRlIG5vcm1hbHMgZm9yIHZlcnRpY2VzIHRoYXQgam9pbiBtdWx0aXBsZSBmYWNlc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlOb3JtVmVydGV4IHtcclxuICAgcHJpdmF0ZSBub3JtYWxzOiBWZWMzW10gPSBbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTdG9yZXMgYSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gbm9ybWFsIFN0b3JlcyBhIG5vcm1hbCBmb3IgdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2gobm9ybWFsOiBWZWMzKSB7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbm9ybWFsIGJ5IGF2ZXJhZ2luZyBhbGwgdGhlIGluZGl2aWR1YWwgbm9ybWFscyBhc3NvY2lhdGVkIHdpdGggdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBub3JtYWwoKTogVmVjMyB7XHJcbiAgICAgIGxldCBuID0gbmV3IFZlYzMoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbi54ICs9IHRoaXMubm9ybWFsc1tpXS54O1xyXG4gICAgICAgICBuLnkgKz0gdGhpcy5ub3JtYWxzW2ldLnk7XHJcbiAgICAgICAgIG4ueiArPSB0aGlzLm5vcm1hbHNbaV0uejtcclxuICAgICAgfVxyXG4gICAgICBuLnggLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuICAgICAgbi55IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueiAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG5cclxuICAgICAgcmV0dXJuIG47XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVmVjMyB9IGZyb20gXCIuL1ZlY1wiO1xyXG5pbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgVHJpYW5nbGVPYmosIE5vcm1hbFR5cGUgfSBmcm9tIFwiLi9UcmlhbmdsZU9ialwiO1xyXG5pbXBvcnQgeyBQcm9maWxlciB9IGZyb20gXCIuL1Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IFN0YXR1c0Z1bmN0aW9uIH0gZnJvbSBcIi4vR2xvYmFsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbG9hZHMgYSAub2JqIGZpbGUgYW5kIGNyZWF0ZXMgdHJpYW5nbGVzIGZvciBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRmlsZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCB1cGRhdGVTdGF0dXM/OiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAvLyByZWNvcmQgdGhlIHN0YXR1cyBmdW5jdGlvbi4gSWYgb25lIGlzIG5vdCBzdXBwbGllZCwgY3JlYXRlIG9uZSB0aGF0IGRvZXMgbm90aGluZ1xyXG4gICAgICBpZiAoIXVwZGF0ZVN0YXR1cykge1xyXG4gICAgICAgICB1cGRhdGVTdGF0dXMgPSAoc3RhdHVzKSA9PiB7IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFyc2Uoc3JjLCB1cGRhdGVTdGF0dXMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlRmFjZShsaW5lOiBzdHJpbmcpOiB7IGlWOiBudW1iZXJbXSwgaU46IG51bWJlcltdIH0ge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBpVjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgICAgIGlOOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgfVxyXG4gICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgbGV0IG51bVZhbHMgPSB0b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWxzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZhbHMgPSB0b2tlbnNbaSArIDFdLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgIHJldC5pVi5wdXNoKHBhcnNlSW50KHZhbHNbMF0pIC0gMSk7XHJcbiAgICAgICAgIGlmICh2YWxzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICByZXQuaU4ucHVzaChwYXJzZUludCh2YWxzWzJdKSAtIDEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBwYXJzZShzcmM6IHN0cmluZywgdXBkYXRlU3RhdHVzOiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgdXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nJyk7XHJcbiAgICAgIGxldCB0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIGxldCBwMiA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBsZXQgcCA9IG5ldyBQcm9maWxlcigpO1xyXG4gICAgICBsZXQgbGluZXMgPSBzcmMuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBwLmxvZygnc3BsaXQnKTtcclxuXHJcbiAgICAgIGxldCB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5vcm1hbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGxldCB2SW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5JbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBsZXQgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICBsZXQgY29udGFpbnNOb3JtYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgLy8gcmVwb3J0IHByb2dyZXNzIGV2ZXJ5IDUwIG1zXHJcbiAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gdCA+IDUwKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogJyArICgxMDAgKiBpIC8gbGluZXMubGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICAgICAgICAgICB0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCd2ICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzFdKSk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgdmVydGljZXMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1szXSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aCgndm4gJykpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IGxpbmUubWF0Y2goL1xcUysvZyk7XHJcbiAgICAgICAgICAgIG5vcm1hbHMucHVzaChwYXJzZUZsb2F0KHRva2Vuc1sxXSkpO1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHBhcnNlRmxvYXQodG9rZW5zWzNdKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCdmICcpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLnBhcnNlRmFjZShsaW5lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgaWYgKHJldC5pVi5sZW5ndGggIT09IHJldC5pTi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGFpbnNOb3JtYWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm9ybWFscyBub3Qgc3BlY2lmaWVkIGluIGZpbGUuIEZsYXQgbm9ybWFscyB3aWxsIGJlIGNvbXB1dGVkLicpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0LmlWLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQuaVZbaV0gIT0gcmV0LmlOW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVmVydGljZXMgYW5kIG5vcm1hbHMgZG9uXFwndCBtYXRjaC4gQ29udGVudCB3aWxsIGJlIHJlLWluZGV4ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXQuaVYubGVuZ3RoID09PSA0KSB7XHJcblxyXG4gICAgICAgICAgICAgICB2SW5kaWNlcy5wdXNoKHJldC5pVlswXSwgcmV0LmlWWzFdLCByZXQuaVZbMl0pO1xyXG4gICAgICAgICAgICAgICB2SW5kaWNlcy5wdXNoKHJldC5pVlswXSwgcmV0LmlWWzJdLCByZXQuaVZbM10pO1xyXG4gICAgICAgICAgICAgICBpZiAoY29udGFpbnNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5JbmRpY2VzLnB1c2gocmV0LmlOWzBdLCByZXQuaU5bMV0sIHJldC5pTlsyXSk7XHJcbiAgICAgICAgICAgICAgICAgIG5JbmRpY2VzLnB1c2gocmV0LmlOWzBdLCByZXQuaU5bMl0sIHJldC5pTlszXSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdkluZGljZXMucHVzaChyZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdKTtcclxuICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICBuSW5kaWNlcy5wdXNoKHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwLmxvZygncGFyc2UnKTtcclxuXHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IHZJbmRpY2VzO1xyXG5cclxuICAgICAgICAgaWYgKGNvbnRhaW5zTm9ybWFscykge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gW107XHJcbiAgICAgICAgIHRoaXMuaW5kaWNlcyA9IFtdO1xyXG5cclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2SW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMV0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGljZXNbMyAqIHZJbmRpY2VzW2ldICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWxzWzMgKiBuSW5kaWNlc1tpXSArIDBdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxzLnB1c2gobm9ybWFsc1szICogbkluZGljZXNbaV0gKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbHNbMyAqIG5JbmRpY2VzW2ldICsgMl0pO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljZXMucHVzaChpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBwLmxvZygncmVpbmRleCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udGFpbnNOb3JtYWxzID09PSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWxzKE5vcm1hbFR5cGUuRmxhdCk7XHJcbiAgICAgICAgIHAubG9nKCdjb21wdXRlIG5vcm1hbHMnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maW5kQm91bmRzKCk7XHJcbiAgICAgIHAubG9nKCdmaW5kQm91bmRzJyk7XHJcbiAgICAgIHAyLmxvZygnVG90YWwnKTtcclxuXHJcbiAgICAgIHVwZGF0ZVN0YXR1cygnUHJvY2Vzc2luZzogMTAwJScpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1ZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnTm9ybWFsczogJyArIHRoaXMubm9ybWFscy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnVHJpYW5nbGVzOiAnICsgdGhpcy5udW1UcmlhbmdsZXMpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBJVmVjMyB9IGZyb20gXCIuL0lWZWMzXCI7XHJcblxyXG4vKipcclxuICogVmVjdG9yIGNsYXNzIGZvciB1c2Ugd2l0aCBXZWJHTCBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBWZWMge1xyXG5cclxuICAgLyoqIFRoZSB2ZWN0b3IgdmFsdWVzLiAqL1xyXG4gICBwdWJsaWMgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzT3JTaXplIElmIGEgYXJyYXksIHRoZSB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuIElmIGEgbnVtYmVyLCB0aGUgc2l6ZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlc09yU2l6ZTogbnVtYmVyIHwgbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlc09yU2l6ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc09yU2l6ZV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KHZhbHVlc09yU2l6ZSk7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gVGhlIHZlY3RvciBtYWduaXR1ZGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFnbml0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tpXSAqIHRoaXMudmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWZWMyIGV4dGVuZHMgVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigyKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICpcclxuICAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2xvbmUoKTogVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMih0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBYIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB4KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzBdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKlxyXG4gICAgKiBAcmV0dXJucyBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMV07XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmFsIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIHNldCB5KHZhbDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIHRvIGFub3RoZXIgcG9pbnRcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgcG9pbnRcclxuICAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyBwb2ludCBhbmQgdGhlIG90aGVyIHBvaW50XHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGlzdGFuY2Uob3RoZXI6IFZlYzIpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCAtIG90aGVyLngsIDIpICsgTWF0aC5wb3codGhpcy55IC0gb3RoZXIueSwgMikpO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXkteiB2ZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmVjMyBleHRlbmRzIFZlYyBpbXBsZW1lbnRzIElWZWMzIHtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9yaWdpbigpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFswLCAwLCAwXSk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHgteSBjb21wb25lbnRzIGFzIGEgMmQgdmVjXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm4gdGhlIFZlYzNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeHkoKTogVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMihbdGhpcy54LCB0aGlzLnldKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIGRpZ2l0cyBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIGRpc3BsYXkuIFRoaXMgdmFsdWUgaXMgcGFzc2VkIHRvIHRvRml4ZWQoKS5cclxuICAgICogQHBhcmFtIGRpdmlkZXIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBlYWNoIG51bWJlci5cclxuICAgICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9TdHJpbmcoZGlnaXRzOiBudW1iZXIsIGRpdmlkZXIgPSAnLCcpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy54LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnkudG9GaXhlZChkaWdpdHMpICsgZGl2aWRlciArIHRoaXMuei50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKiBcclxuICAgICogUmV0dXJucyBhIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbm9ybWFsaXplKCk6IFZlYzMge1xyXG4gICAgICBsZXQgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgaWYgKG1hZyA9PT0gMCkge1xyXG4gICAgICAgICByZXR1cm4gbmV3IFZlYzMoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMubXVsdCgxIC8gbWFnKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogTXVsdGlwbGllcyBtZW1iZXJzIGJ5IGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIG5ldyB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbXVsdGlwbGljYXRpb24gdmFsdWUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbXVsdCh2YWx1ZTogbnVtYmVyKTogVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjMyhbXHJcbiAgICAgICAgIHRoaXMueCAqIHZhbHVlLFxyXG4gICAgICAgICB0aGlzLnkgKiB2YWx1ZSxcclxuICAgICAgICAgdGhpcy56ICogdmFsdWUsXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgdmVjdG9yIHBvaW50aW5nIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBUaGUgbmVnYXRlZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbmVnYXRlKCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoWy10aGlzLngsIC10aGlzLnksIC10aGlzLnpdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFN1YnRyYWN0cyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBzdWJ0cmFjdC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWM6IFZlYzMpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLSB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAtIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC0gdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEFkZHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gYWRkLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFkZCh2ZWM6IFZlYzMpOiBWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gKyB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSArIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdICsgdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNyb3NzKG90aGVyOiBWZWMzKTogVmVjMyB7XHJcbiAgICAgIGxldCBBID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgIGxldCBCID0gb3RoZXIudmFsdWVzO1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICBBWzFdICogQlsyXSAtIEFbMl0gKiBCWzFdLFxyXG4gICAgICAgICBBWzJdICogQlswXSAtIEFbMF0gKiBCWzJdLFxyXG4gICAgICAgICBBWzBdICogQlsxXSAtIEFbMV0gKiBCWzBdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwb2ludCB0byBhIHNwZWNpZmllZCBwb2ludC5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBwdCBUaGUgcG9pbnQuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSB0byB0aGUgcG9pbnQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGlzdFRvUG9pbnQocHQ6IFZlYzMpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChwdCkubWFnbml0dWRlKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCdWlsZHMgYSBWZWM0IGZyb20gdGhpcyBWZWMzXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdyBUaGUgdyBjb21wb25lbnQgb2YgdGhlIG5ldyB2ZWN0b3IuXHJcbiAgICAqIEByZXR1cm5zIFRoZSBuZXcgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvVmVjNCh3OiBudW1iZXIpOiBWZWM0IHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWM0KFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB3XSk7XHJcbiAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIHgteS16LXcgdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZlYzQgZXh0ZW5kcyBWZWMge1xyXG5cclxuICAgLyoqXHJcbiAgICAqIEBwYXJhbSB2YWxzIElmIHN1cHBsaWVkLCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcig0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHcoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzNdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgdyh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1szXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHgteS16IGNvbXBvbmVudHMgYXMgYSAzZCB2ZWNcclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gdGhlIFZlYzNcclxuICAgICovXHJcbiAgIHB1YmxpYyBnZXQgeHl6KCk6IFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBWZWM0IHtcclxuICAgICAgcmV0dXJuIG5ldyBWZWM0KHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4geC15LXogdmVjdG9yIHdoZXJlIGVhY2ggZWxlbWVudCBpcyBjb21wdXRlZCBieSBkaXZpZGluZyB0aGlzIHZlY3RvcnNcclxuICAgICogZWxlbWVudHMgYnkgdGhlIHcgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiB4LXkteiB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGl2aWRlQnlXKCk6IFZlYzMge1xyXG4gICAgICBsZXQgdyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzMoW1xyXG4gICAgICAgICB0aGlzLnZhbHVlc1swXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzFdIC8gdyxcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMl0gLyB3XHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIE5vcm1hbGl6ZXMgdGhpcyB2ZWN0b3IsIGFuZCBzdG9yZXMgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbm9ybWFsaXplKCk6IFZlYzQge1xyXG4gICAgICBsZXQgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTtcclxuICAgICAgbGV0IHJldCA9IHRoaXMuY2xvbmUoKTtcclxuICAgICAgaWYgKG1hZyAhPT0gMCkge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJldC52YWx1ZXNbaV0gLz0gbWFnO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgVmVjNCBmcm9tIGEgVmVjMyBvYmplY3RcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIFZlYzMgb2JqZWN0XHJcbiAgICAqIEBwYXJhbSB3IFRoZSB3IHZhbHVlIGZvciB0aGUgVmVjNFxyXG4gICAgKi9cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVmVjMyh2ZWM6IFZlYzMsIHc6IG51bWJlcik6IFZlYzQge1xyXG4gICAgICByZXR1cm4gbmV3IFZlYzQoW3ZlYy54LCB2ZWMueSwgdmVjLnosIDFdKTtcclxuICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9