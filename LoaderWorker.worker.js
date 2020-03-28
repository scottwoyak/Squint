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
        var response, reader, contentLength, receivedLength, chunks, _a, done, value, chunksAll, position, _i, chunks_1, chunk, res, tObj, data, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // the initial status message
                    worker.postMessage('Downloading 0%');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch(file)];
                case 2:
                    response = _b.sent();
                    if (response.status != 200) {
                        worker.postMessage(response.status + ': ' + file);
                        return [2 /*return*/];
                    }
                    reader = response.body.getReader();
                    contentLength = +response.headers.get('Content-Length');
                    receivedLength = 0;
                    chunks = [];
                    _b.label = 3;
                case 3:
                    if (false) {}
                    return [4 /*yield*/, reader.read()];
                case 4:
                    _a = _b.sent(), done = _a.done, value = _a.value;
                    if (done) {
                        return [3 /*break*/, 5];
                    }
                    chunks.push(value);
                    receivedLength += value.length;
                    worker.postMessage('Downloading: ' + (100 * receivedLength / contentLength).toFixed() + '%');
                    return [3 /*break*/, 3];
                case 5:
                    chunksAll = new Uint8Array(receivedLength);
                    position = 0;
                    for (_i = 0, chunks_1 = chunks; _i < chunks_1.length; _i++) {
                        chunk = chunks_1[_i];
                        chunksAll.set(chunk, position); // (4.2)
                        position += chunk.length;
                    }
                    res = new TextDecoder("utf-8").decode(chunksAll);
                    tObj = new _TriangleObjFile__WEBPACK_IMPORTED_MODULE_0__["TriangleObjFile"](res, function (status) { worker.postMessage(status); });
                    data = tObj.export();
                    worker.postMessage(data, [
                        data.vertices.buffer,
                        data.normals.buffer,
                        data.vIndices.buffer,
                        data.nIndices.buffer
                    ]);
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _b.sent();
                    worker.postMessage(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}


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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvYWRlcldvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXhlZFRyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9Qcm9maWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpYW5nbGVPYmoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWFuZ2xlT2JqRmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVm9sdW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9nbFZlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRm9EO0FBRXBEOztHQUVHO0FBQ0gsSUFBTSxN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QUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXpCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFL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QUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBTSxFQUFFLENBQUMsQ0FBQztTQUNsQztRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FB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SSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5SCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoSTtxQkFDSTtvQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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LEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDSixhQUFDO0FBQUQsQ0FBQyxDQW5KMkIsS0FBSyxHQW1KaEM7O0FBRUQ7O0dBRUc7QUFDSDtJQUE0QiwwQkFBSztJQUU5Qjs7T0FFRztJQUNILGdCQUFtQixJQUFlO1FBQWxDLGlCQU9DO1FBTkUsSUFBSSxJQUFJLEVBQUU7WUFDUCwwQkFBTSxJQUFJLENBQUMsU0FBQztTQUNkO2FBQ0k7WUFDRiwwQkFBTSxDQUFDLENBQUMsU0FBQztTQUNYOztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDBCQUFTLEdBQWhCO1FBQ0csSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksTUFBTSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNKLGFBQUM7QUFBRCxDQUFDLENBNUIyQixLQUFLLEdBNEJoQyIsImZpbGUiOiJMb2FkZXJXb3JrZXIud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc3JjL0xvYWRlcldvcmtlci50c1wiKTtcbiIsImltcG9ydCB7IFRyaWFuZ2xlT2JqRmlsZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqRmlsZVwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIHdvcmtlciB0aGF0IGxvYWRzIGFuZCBwcm9jZXNzZXMgdGhlIC5vYmogZmlsZVxyXG4gKi9cclxuY29uc3Qgd29ya2VyOiBXb3JrZXIgPSBzZWxmIGFzIGFueTtcclxuXHJcbi8vIEhhbmRsZXIgZm9yIHJlY2VpdmluZyBtZXNzYWdlcyBmcm9tIHRoZSBtYWluIHRocmVhZFxyXG53b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9OiB7IGRhdGE6IHN0cmluZyB9KSA9PiB7XHJcblxyXG4gICAvLyB3aGVuIHdlIHJlY2VpdmUgYSBzdHJpbmcgYXMgYSBtZXNzYWdlLCBpdCdzIHRoZSB1cmwgb2YgdGhlIGZpbGUgdG8gbG9hZFxyXG4gICBsb2FkRmlsZShkYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB3b3JrZXIgZnVuY3Rpb24gdG8gbG9hZCBhIGZpbGVcclxuICogXHJcbiAqIEBwYXJhbSBmaWxlIFRoZSB1cmwgb2YgdGhlIGZpbGUgdG8gbG9hZFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEZpbGUoZmlsZTogc3RyaW5nKSB7XHJcblxyXG4gICAvLyB0aGUgaW5pdGlhbCBzdGF0dXMgbWVzc2FnZVxyXG4gICB3b3JrZXIucG9zdE1lc3NhZ2UoJ0Rvd25sb2FkaW5nIDAlJyk7XHJcblxyXG4gICB0cnkge1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaWxlKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShyZXNwb25zZS5zdGF0dXMgKyAnOiAnICsgZmlsZSk7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcclxuICAgICAgY29uc3QgY29udGVudExlbmd0aCA9ICtyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1MZW5ndGgnKTtcclxuXHJcbiAgICAgIC8vIGxvb3AgdG8gbG9hZCB0aGUgZGF0YSwgb25lIGNodW5rIGF0IGEgdGltZVxyXG4gICAgICBsZXQgcmVjZWl2ZWRMZW5ndGggPSAwOyAvLyByZWNlaXZlZCB0aGF0IG1hbnkgYnl0ZXMgYXQgdGhlIG1vbWVudFxyXG4gICAgICBsZXQgY2h1bmtzID0gW107IC8vIGFycmF5IG9mIHJlY2VpdmVkIGJpbmFyeSBjaHVua3MgKGNvbXByaXNlcyB0aGUgYm9keSlcclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcclxuXHJcbiAgICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBjaHVua3MucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgIHJlY2VpdmVkTGVuZ3RoICs9IHZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSgnRG93bmxvYWRpbmc6ICcgKyAoMTAwICogcmVjZWl2ZWRMZW5ndGggLyBjb250ZW50TGVuZ3RoKS50b0ZpeGVkKCkgKyAnJScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25jYXRlbmF0ZSBjaHVua3MgaW50byBzaW5nbGUgVWludDhBcnJheVxyXG4gICAgICBsZXQgY2h1bmtzQWxsID0gbmV3IFVpbnQ4QXJyYXkocmVjZWl2ZWRMZW5ndGgpOyAvLyAoNC4xKVxyXG4gICAgICBsZXQgcG9zaXRpb24gPSAwO1xyXG4gICAgICBmb3IgKGxldCBjaHVuayBvZiBjaHVua3MpIHtcclxuICAgICAgICAgY2h1bmtzQWxsLnNldChjaHVuaywgcG9zaXRpb24pOyAvLyAoNC4yKVxyXG4gICAgICAgICBwb3NpdGlvbiArPSBjaHVuay5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGRlY29kZSBpbnRvIGEgc3RyaW5nXHJcbiAgICAgIGxldCByZXMgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUoY2h1bmtzQWxsKTtcclxuXHJcbiAgICAgIC8vIHR1cm4gdGhlIC5vYmogc3RyaW5nIGludG8gdHJpYW5nbGVzXHJcbiAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqRmlsZShyZXMsIChzdGF0dXMpID0+IHsgd29ya2VyLnBvc3RNZXNzYWdlKHN0YXR1cyk7IH0pO1xyXG5cclxuICAgICAgLy8gcmV0dXJuIHRoZSByZXN1bHQgYXMgYXJyYXlzXHJcbiAgICAgIGxldCBkYXRhID0gdE9iai5leHBvcnQoKTtcclxuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGRhdGEsIFtcclxuICAgICAgICAgZGF0YS52ZXJ0aWNlcy5idWZmZXIsXHJcbiAgICAgICAgIGRhdGEubm9ybWFscy5idWZmZXIsXHJcbiAgICAgICAgIGRhdGEudkluZGljZXMuYnVmZmVyLFxyXG4gICAgICAgICBkYXRhLm5JbmRpY2VzLmJ1ZmZlclxyXG4gICAgICBdKTtcclxuICAgfVxyXG4gICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShlcnIpO1xyXG4gICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGxldCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCA9IG51bGw7XHJcblxyXG5leHBvcnQgbGV0IGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgaWYgKHZhbHVlIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgIH1cclxuICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIG1heDtcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoMTgwIC8gTWF0aC5QSSkgKiByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XHJcbiAgIHJldHVybiAoTWF0aC5QSSAvIDE4MCkgKiBkZWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgodjE6IG51bWJlciwgdjI6IG51bWJlciwgbWl4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICByZXR1cm4gdjEgKyBjbGFtcChtaXgsIDAsIDEpICogKHYyIC0gdjEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Dc3MocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAoYSA9PT0gdW5kZWZpbmVkID8gJycgOiAnLCcgKyBhKSArICcpJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbHMge1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBnbCgpIHtcclxuICAgICAgcmV0dXJuIGdsO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHNldCBnbChjb250ZXh0OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICAgIGdsID0gY29udGV4dDtcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnbFZlYzMgfSBmcm9tIFwiLi9nbFZlY1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBob2xkaW5nIGluZm9ybWF0aW9uIGFib3V0IGEgdHJpYW5nbGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmRleGVkVHJpYW5nbGUge1xyXG4gICB2ZXJ0aWNlczogZ2xWZWMzW107XHJcbiAgIHB1YmxpYyBpVjA6IG51bWJlcjtcclxuICAgcHVibGljIGlWMTogbnVtYmVyO1xyXG4gICBwdWJsaWMgaVYyOiBudW1iZXI7XHJcblxyXG4gICBub3JtYWxzOiBnbFZlYzNbXTtcclxuICAgcHVibGljIGlOMDogbnVtYmVyO1xyXG4gICBwdWJsaWMgaU4xOiBudW1iZXI7XHJcbiAgIHB1YmxpYyBpTjI6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICB2ZXJ0aWNlczogZ2xWZWMzW10sIGlWMDogbnVtYmVyLCBpVjE6IG51bWJlciwgaVYyOiBudW1iZXIsXHJcbiAgICAgIG5vcm1hbHM6IGdsVmVjM1tdLCBpTjA/OiBudW1iZXIsIGlOMT86IG51bWJlciwgaU4yPzogbnVtYmVyLFxyXG4gICApIHtcclxuICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgICB0aGlzLmlWMCA9IGlWMDtcclxuICAgICAgdGhpcy5pVjEgPSBpVjE7XHJcbiAgICAgIHRoaXMuaVYyID0gaVYyO1xyXG5cclxuICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgaWYgKGlOMCA9PT0gdW5kZWZpbmVkIHx8IGlOMCA9PT0gLTEpIHtcclxuICAgICAgICAgbGV0IG5vcm1hbCA9IHRoaXMuY29tcHV0ZU5vcm1hbCgpO1xyXG4gICAgICAgICB0aGlzLm5vcm1hbHMucHVzaChub3JtYWwpO1xyXG4gICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm5vcm1hbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgdGhpcy5pTjAgPSBpbmRleDtcclxuICAgICAgICAgdGhpcy5pTjEgPSBpbmRleDtcclxuICAgICAgICAgdGhpcy5pTjIgPSBpbmRleDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgdGhpcy5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgdGhpcy5pTjAgPSBpTjA7XHJcbiAgICAgICAgIHRoaXMuaU4xID0gaU4xO1xyXG4gICAgICAgICB0aGlzLmlOMiA9IGlOMjtcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIGxldCBuID0gdGhpcy5jb21wdXRlTm9ybWFsKCk7XHJcbiAgICAgICAgIGxldCBuMCA9IHRoaXMubjA7XHJcbiAgICAgICAgIGxldCBuMSA9IHRoaXMubjE7XHJcbiAgICAgICAgIGxldCBuMiA9IHRoaXMubjI7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4udG9TdHJpbmcoMikpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhuMC50b1N0cmluZygyKSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG4xLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgY29uc29sZS5sb2cobjIudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGdldCB2MCgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1t0aGlzLmlWMF07XHJcbiAgIH1cclxuICAgZ2V0IHYxKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW3RoaXMuaVYxXTtcclxuICAgfVxyXG4gICBnZXQgdjIoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNbdGhpcy5pVjJdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbjAoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIHRoaXMubm9ybWFsc1t0aGlzLmlOMF07XHJcbiAgIH1cclxuICAgZ2V0IG4xKCk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vcm1hbHNbdGhpcy5pTjFdO1xyXG4gICB9XHJcbiAgIGdldCBuMigpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub3JtYWxzW3RoaXMuaU4yXTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueCwgTWF0aC5taW4odGhpcy52MS54LCB0aGlzLnYyLngpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueSwgTWF0aC5taW4odGhpcy52MS55LCB0aGlzLnYyLnkpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1pblooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMudjAueiwgTWF0aC5taW4odGhpcy52MS56LCB0aGlzLnYyLnopKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueCwgTWF0aC5tYXgodGhpcy52MS54LCB0aGlzLnYyLngpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueSwgTWF0aC5tYXgodGhpcy52MS55LCB0aGlzLnYyLnkpKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IG1heFooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMudjAueiwgTWF0aC5tYXgodGhpcy52MS56LCB0aGlzLnYyLnopKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGNvbXB1dGVOb3JtYWwoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IGEgPSB0aGlzLnYxLnN1YnRyYWN0KHRoaXMudjApO1xyXG4gICAgICBsZXQgYiA9IHRoaXMudjIuc3VidHJhY3QodGhpcy52MSk7XHJcbiAgICAgIHJldHVybiBhLmNyb3NzKGIpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGxvZ2dpbmcgdGltaW5nIG1lc3NhZ2VzIGZvciBwcm9maWxlIGNvZGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlciB7XHJcbiAgIC8vIHRoZSBsYXN0IHRpbWUgc3RhbXBcclxuICAgcHJpdmF0ZSB0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICBwdWJsaWMgZ2V0IGVsYXBzZWRNcygpIHtcclxuICAgICAgcmV0dXJuIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMudCk7XHJcbiAgIH1cclxuICAgLyoqXHJcbiAgICAqIFByaW50cyBhIG1lc3NhZ2UgdG8gY29uc29sZSBvZiB0aGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBsYXN0IG1hcmtcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBtc2cgVGhlIG1lc3NhZ2UgdG8gcHJpbnQgd2l0aCB0aGUgdGltZVxyXG4gICAgKi9cclxuICAgcHVibGljIGxvZyhtc2c6IHN0cmluZykge1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cgKyAnICcgKyB0aGlzLmVsYXBzZWRNcy50b0ZpeGVkKDEpICsgJyBtcycpO1xyXG4gICAgICB0aGlzLm1hcmsoKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFVwZGF0ZXMgdGhlIHRpbWVzdGFtcCB0byBub3dcclxuICAgICovXHJcbiAgIHB1YmxpYyBtYXJrKCkge1xyXG4gICAgICB0aGlzLnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgfVxyXG5cclxufSIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBWb2x1bWUgfSBmcm9tIFwiLi9Wb2x1bWVcIjtcclxuaW1wb3J0IHsgUHJvZmlsZXIgfSBmcm9tIFwiLi9Qcm9maWxlclwiO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL0dsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE5vcm1hbFR5cGUge1xyXG4gICBTbW9vdGgsXHJcbiAgIEZsYXRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRGF0YSB7XHJcbiAgIHZlcnRpY2VzOiBGbG9hdDMyQXJyYXk7XHJcbiAgIG5vcm1hbHM6IEZsb2F0MzJBcnJheTtcclxuICAgbkluZGljZXM6IEludDMyQXJyYXk7XHJcbiAgIHZJbmRpY2VzOiBJbnQzMkFycmF5O1xyXG4gICBib3hNaW46IGdsVmVjMztcclxuICAgYm94TWF4OiBnbFZlYzM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIGNvbXB1dGUgbm9ybWFscyBmb3IgdmVydGljZXMgdGhhdCBqb2luIG11bHRpcGxlIGZhY2VzXHJcbiAqL1xyXG5jbGFzcyBNdWx0aU5vcm1WZXJ0ZXgge1xyXG4gICBwcml2YXRlIG5vcm1hbHM6IGdsVmVjM1tdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogU3RvcmVzIGEgbm9ybWFsIGZvciB0aGlzIHZlcnRleFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG5vcm1hbCBTdG9yZXMgYSBub3JtYWwgZm9yIHRoZSB2ZXJ0ZXhcclxuICAgICovXHJcbiAgIHB1YmxpYyBwdXNoKG5vcm1hbDogZ2xWZWMzKSB7XHJcbiAgICAgIHRoaXMubm9ybWFscy5wdXNoKG5vcm1hbCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgbm9ybWFsIGJ5IGF2ZXJhZ2luZyBhbGwgdGhlIGluZGl2aWR1YWwgbm9ybWFscyBhc3NvY2lhdGVkIHdpdGggdGhlIHZlcnRleFxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBub3JtYWwoKTogZ2xWZWMzIHtcclxuICAgICAgbGV0IG4gPSBuZXcgZ2xWZWMzKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub3JtYWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIG4ueCArPSB0aGlzLm5vcm1hbHNbaV0ueDtcclxuICAgICAgICAgbi55ICs9IHRoaXMubm9ybWFsc1tpXS55O1xyXG4gICAgICAgICBuLnogKz0gdGhpcy5ub3JtYWxzW2ldLno7XHJcbiAgICAgIH1cclxuICAgICAgbi54IC89IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIG4ueSAvPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBuLnogLz0gdGhpcy5ub3JtYWxzLmxlbmd0aDtcclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub3JtYWxzLmxlbmd0aCk7XHJcbiAgICAgIHJldHVybiBuO1xyXG4gICB9XHJcbn1cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHJlcHJlc2VudGluZyBhbiBvYmplY3QgZnJvbSBhIGJ1bmNoIG9mIHRyaWFuZ2xlcy4gVGhlIGNsYXNzXHJcbiAqIGVmZmljaWVudGx5IG1hbmFnZXMgdGhlIHRyaWFuZ2xlcyBieSBzdG9yaW5nIHRoZW0gaW4gdm9sdW1lcyBhbmQgYnlcclxuICogcGFzc2luZyB0aGVtIHRvIFdlYkdMIHVzaW5nIFVuaWZvcm0gQnVmZmVyc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqIHtcclxuICAgcHVibGljIHZlcnRpY2VzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICBwdWJsaWMgbm9ybWFsczogZ2xWZWMzW10gPSBbXTtcclxuICAgcHVibGljIHRyaWFuZ2xlczogSW5kZXhlZFRyaWFuZ2xlW10gPSBbXTtcclxuICAgcHVibGljIGJveE1pbiA9IG5ldyBnbFZlYzMoW051bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUVdKTtcclxuICAgcHVibGljIGJveE1heCA9IG5ldyBnbFZlYzMoWy1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSwgLU51bWJlci5NQVhfVkFMVUVdKTtcclxuICAgcHVibGljIHZvbHVtZXM6IFZvbHVtZVtdID0gW107XHJcblxyXG4gICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC54IC0gdGhpcy5ib3hNaW4ueDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYm94TWF4LnkgLSB0aGlzLmJveE1pbi55O1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0IGRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJveE1heC56IC0gdGhpcy5ib3hNaW4uejtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGdldCBjZW50ZXIoKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICAodGhpcy5ib3hNaW4ueCArIHRoaXMuYm94TWF4LngpIC8gMixcclxuICAgICAgICAgKHRoaXMuYm94TWluLnkgKyB0aGlzLmJveE1heC55KSAvIDIsXHJcbiAgICAgICAgICh0aGlzLmJveE1pbi56ICsgdGhpcy5ib3hNYXgueikgLyAyLFxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIHB1c2godHJpOiBJbmRleGVkVHJpYW5nbGUpIHtcclxuICAgICAgdGhpcy50cmlhbmdsZXMucHVzaCh0cmkpO1xyXG4gICAgICB0aGlzLmJveE1pbi54ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueCwgdHJpLm1pblgpO1xyXG4gICAgICB0aGlzLmJveE1pbi55ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueSwgdHJpLm1pblkpO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdHJpLm1pblopO1xyXG4gICAgICB0aGlzLmJveE1heC54ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueCwgdHJpLm1heFgpO1xyXG4gICAgICB0aGlzLmJveE1heC55ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueSwgdHJpLm1heFkpO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueiwgdHJpLm1heFopO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2NhbGVzIHRoZSBvYmplY3QgdG8gdGhlIHNwZWNpZmllZCBzaXplIGFuZCBjZW50ZXJzIGl0IGFib3V0ICgwLDAsMClcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBzaXplIFRoZSBtYXggc2l6ZSBmb3IgdGhlIHdpZHRoLCBoZWlnaHQsIGFuZCBkZXB0aFxyXG4gICAgKi9cclxuICAgcHVibGljIGF1dG9DZW50ZXIoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICBsZXQgdHJhbnMgPSBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgLSh0aGlzLmJveE1heC54ICsgdGhpcy5ib3hNaW4ueCkgLyAyLFxyXG4gICAgICAgICAtKHRoaXMuYm94TWF4LnkgKyB0aGlzLmJveE1pbi55KSAvIDIsXHJcbiAgICAgICAgIC0odGhpcy5ib3hNYXgueiArIHRoaXMuYm94TWluLnopIC8gMixcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgc2NhbGUgPSBzaXplIC8gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZGVwdGgpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuXHJcbiAgICAgICAgIHYueCA9ICh2LnggKyB0cmFucy54KSAqIHNjYWxlO1xyXG4gICAgICAgICB2LnkgPSAodi55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgICAgdi56ID0gKHYueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm94TWluLnggPSAodGhpcy5ib3hNaW4ueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgPSAodGhpcy5ib3hNaW4ueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWluLnogPSAodGhpcy5ib3hNaW4ueiArIHRyYW5zLnopICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSAodGhpcy5ib3hNYXgueCArIHRyYW5zLngpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgPSAodGhpcy5ib3hNYXgueSArIHRyYW5zLnkpICogc2NhbGU7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogPSAodGhpcy5ib3hNYXgueiArIHRyYW5zLnopICogc2NhbGU7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9sdW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdiA9IHRoaXMudm9sdW1lc1tpXTtcclxuICAgICAgICAgdi5ib3hNaW4ueCA9ICh2LmJveE1pbi54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNaW4ueSA9ICh2LmJveE1pbi55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNaW4ueiA9ICh2LmJveE1pbi56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNYXgueCA9ICh2LmJveE1heC54ICsgdHJhbnMueCkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNYXgueSA9ICh2LmJveE1heC55ICsgdHJhbnMueSkgKiBzY2FsZTtcclxuICAgICAgICAgdi5ib3hNYXgueiA9ICh2LmJveE1heC56ICsgdHJhbnMueikgKiBzY2FsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcC5sb2coJ2F1dG9BZGp1c3QoKScpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2hpZnQgdGhlIG9iamVjdCBpbiBzcGFjZS5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIGFtb3VudCB0byBzaGlmdFxyXG4gICAgKi9cclxuICAgcHVibGljIHRyYW5zbGF0ZShvZmZzZXQ6IGdsVmVjMykge1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuXHJcbiAgICAgICAgIHYueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgdi55ICs9IG9mZnNldC55O1xyXG4gICAgICAgICB2LnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWluLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWluLnogKz0gb2Zmc2V0Lno7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgIHRoaXMuYm94TWF4LnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgIHRoaXMuYm94TWF4LnogKz0gb2Zmc2V0Lno7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9sdW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdm9sID0gdGhpcy52b2x1bWVzW2ldO1xyXG4gICAgICAgICB2b2wuYm94TWluLnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNaW4ueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1pbi56ICs9IG9mZnNldC56O1xyXG4gICAgICAgICB2b2wuYm94TWF4LnggKz0gb2Zmc2V0Lng7XHJcbiAgICAgICAgIHZvbC5ib3hNYXgueSArPSBvZmZzZXQueTtcclxuICAgICAgICAgdm9sLmJveE1heC56ICs9IG9mZnNldC56O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBCcmVha3MgdGhlIG9iamVjdCBpbnRvIGV2ZW5seSBzcGFjZWQgdm9sdW1lcy4gVGhlIG51bWJlciBvZiB2b2x1bWVzIGlzIGF1dG9tYXRpY2FsbHlcclxuICAgICogZGV0ZXJtaW5lZCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHRyaWFuZ2xlcy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBicmVha0ludG9Wb2x1bWVzKCkge1xyXG4gICAgICBsZXQgbnVtU3RlcHM7XHJcbiAgICAgIGlmICh0aGlzLnRyaWFuZ2xlcy5sZW5ndGggPCA0MCkge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cmlhbmdsZXMubGVuZ3RoIDwgMTUwMCkge1xyXG4gICAgICAgICBudW1TdGVwcyA9IDI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIG51bVN0ZXBzID0gMztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZvbHVtZXMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnBvdyhudW1TdGVwcywgMyk7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnZvbHVtZXMucHVzaChuZXcgVm9sdW1lKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0ID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihudW1TdGVwcyAqICh0Lm1pblggLSB0aGlzLmJveE1pbi54KSAvICh0aGlzLmJveE1heC54IC0gdGhpcy5ib3hNaW4ueCkpO1xyXG4gICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IobnVtU3RlcHMgKiAodC5taW5ZIC0gdGhpcy5ib3hNaW4ueSkgLyAodGhpcy5ib3hNYXgueSAtIHRoaXMuYm94TWluLnkpKTtcclxuICAgICAgICAgbGV0IHogPSBNYXRoLmZsb29yKG51bVN0ZXBzICogKHQubWluWiAtIHRoaXMuYm94TWluLnopIC8gKHRoaXMuYm94TWF4LnogLSB0aGlzLmJveE1pbi56KSk7XHJcbiAgICAgICAgIHggPSBjbGFtcCh4LCAwLCBudW1TdGVwcyAtIDEpO1xyXG4gICAgICAgICB5ID0gY2xhbXAoeSwgMCwgbnVtU3RlcHMgLSAxKTtcclxuICAgICAgICAgeiA9IGNsYW1wKHosIDAsIG51bVN0ZXBzIC0gMSk7XHJcbiAgICAgICAgIGxldCBpbmRleCA9IHggKyB5ICogbnVtU3RlcHMgKyB6ICogbnVtU3RlcHMgKiBudW1TdGVwcztcclxuICAgICAgICAgdGhpcy52b2x1bWVzW2luZGV4XS5wdXNoKHQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb21wdXRlTm9ybWFscyh0eXBlOiBOb3JtYWxUeXBlKSB7XHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcblxyXG4gICAgICBsZXQgbm9ybWFsczogZ2xWZWMzW10gPSBbXTtcclxuICAgICAgbGV0IG11bHRpTm9ybVZlcnRpY2VzOiBNdWx0aU5vcm1WZXJ0ZXhbXSA9IFtdO1xyXG4gICAgICBpZiAodHlwZSA9PT0gTm9ybWFsVHlwZS5TbW9vdGgpIHtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG11bHRpTm9ybVZlcnRpY2VzLnB1c2gobmV3IE11bHRpTm9ybVZlcnRleCgpKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gc3RvcmUgdGhlIG5vcm1hbHMgd2l0aCBlYWNoIHZlcnRleCAtIHdlJ2xsIGxhdGVyIGF2ZXJhZ2UgdGhlc2VcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBuID0gdHJpLmNvbXB1dGVOb3JtYWwoKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmlWMF0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmlWMV0ucHVzaChuKTtcclxuICAgICAgICAgICAgbXVsdGlOb3JtVmVydGljZXNbdHJpLmlWMl0ucHVzaChuKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IG5vcm1hbHMgYXJyYXlcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0aU5vcm1WZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBub3JtYWxzLnB1c2gobXVsdGlOb3JtVmVydGljZXNbaV0ubm9ybWFsKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gdXBkYXRlIHRoZSB0cmlhbmdsZXNcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJpID0gdGhpcy50cmlhbmdsZXNbaV07XHJcbiAgICAgICAgICAgIHRyaS5ub3JtYWxzID0gbm9ybWFscztcclxuICAgICAgICAgICAgdHJpLmlOMCA9IHRyaS5pVjA7XHJcbiAgICAgICAgICAgIHRyaS5pTjEgPSB0cmkuaVYxO1xyXG4gICAgICAgICAgICB0cmkuaU4yID0gdHJpLmlWMjtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuICAgICAgICAgICAgbm9ybWFscy5wdXNoKHRyaS5jb21wdXRlTm9ybWFsKCkpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBub3JtYWxzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICB0cmkubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgICAgIHRyaS5pTjAgPSBpbmRleDtcclxuICAgICAgICAgICAgdHJpLmlOMSA9IGluZGV4O1xyXG4gICAgICAgICAgICB0cmkuaU4yID0gaW5kZXg7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5vcm1hbHMgPSBub3JtYWxzO1xyXG5cclxuICAgICAgcC5sb2coJ2NvbXB1dGVOb3JtYWxzJyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIGluIHRoZSBmb3IgLk9CSiBmaWxlIGZvcm1hdFxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgdGhlIHN0cmluZ1xyXG4gICAgKi9cclxuICAgcHVibGljIHRvT2JqU3RyaW5nKGRpZ2l0cyA9IDgpIHtcclxuXHJcbiAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgc3RyICs9ICcjIFZlcnRpY2VzOiAnICsgdGhpcy52ZXJ0aWNlcy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICcjIE5vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoICsgJ1xcbic7XHJcbiAgICAgIHN0ciArPSAnIyBUcmlhbmdsZXM6ICcgKyB0aGlzLnRyaWFuZ2xlcy5sZW5ndGggKyAnXFxuJztcclxuICAgICAgc3RyICs9ICdcXG4nO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB2ID0gdGhpcy52ZXJ0aWNlc1tpXTtcclxuICAgICAgICAgc3RyICs9ICd2ICcgKyB2LngudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIHYueS50b1ByZWNpc2lvbihkaWdpdHMpICsgJyAnICsgdi56LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9ybWFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgbiA9IHRoaXMubm9ybWFsc1tpXTtcclxuICAgICAgICAgc3RyICs9ICd2biAnICsgbi54LnRvUHJlY2lzaW9uKGRpZ2l0cykgKyAnICcgKyBuLnkudG9QcmVjaXNpb24oZGlnaXRzKSArICcgJyArIG4uei50b1ByZWNpc2lvbihkaWdpdHMpICsgJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgdCA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICBzdHIgKz0gJ2YgJyArXHJcbiAgICAgICAgICAgICh0LmlWMCArIDEpICsgJy8vJyArICh0LmlOMCArIDEpICsgJyAnICtcclxuICAgICAgICAgICAgKHQuaVYxICsgMSkgKyAnLy8nICsgKHQuaU4xICsgMSkgKyAnICcgK1xyXG4gICAgICAgICAgICAodC5pVjIgKyAxKSArICcvLycgKyAodC5pTjIgKyAxKSArICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb3B0aW1pemUobm9ybWFsVHlwZTogTm9ybWFsVHlwZSkge1xyXG5cclxuICAgICAgbGV0IG1zZyA9ICdPcHRpbWl6ZWQgLk9CSiBjb250ZW50IGNvcGllZCB0byBjbGlwYm9hcmRcXG5cXG4nO1xyXG4gICAgICBtc2cgKz0gJ051bSBUcmlhbmdsZXM6ICcgKyB0aGlzLnRyaWFuZ2xlcy5sZW5ndGggKyAnXFxuJztcclxuXHJcbiAgICAgIGxldCB2ZXJ0ZXhUb0luZGV4TWFwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuICAgICAgbGV0IGluZGV4VG9JbmRleE1hcCA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcblxyXG4gICAgICAvLyBmaXJzdCBnZW5lcmF0ZSBhIHVuaXF1ZSBzZXQgb2YgdmVydGljZXNcclxuICAgICAgbGV0IHVuaXF1ZVZlcnRpY2VzOiBnbFZlYzNbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgIGxldCBvbGRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgICAgICBsZXQga2V5ID0gdGhpcy52ZXJ0aWNlc1tpXS50b1N0cmluZyg0LCAnICcpO1xyXG4gICAgICAgICBsZXQgb2xkSW5kZXggPSBpICsgMTtcclxuICAgICAgICAgbGV0IG5ld0luZGV4O1xyXG4gICAgICAgICBpZiAodmVydGV4VG9JbmRleE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAvLyBqdXN0IG1hcCB0aGUgb2xkIGluZGV4IHRvIHRoZSBleGlzdGluZyBlbnRyeVxyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHZlcnRleFRvSW5kZXhNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBlbnRyeVxyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHVuaXF1ZVZlcnRpY2VzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIHZlcnRleFRvSW5kZXhNYXAuc2V0KGtleSwgbmV3SW5kZXgpO1xyXG4gICAgICAgICAgICB1bmlxdWVWZXJ0aWNlcy5wdXNoKG9sZFZlcnRleCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gc3RvcmUgdGhlIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgIGluZGV4VG9JbmRleE1hcC5zZXQob2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG9sZFNpemUgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICAgICAgbGV0IG5ld1NpemUgPSB1bmlxdWVWZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICAgIG1zZyArPSAnTnVtIFZlcnRpY2VzOiAnICsgb2xkU2l6ZSArICcgdG8gJyArIG5ld1NpemUgKyAnLCAnICsgKDEwMCAqIG5ld1NpemUgLyBvbGRTaXplKS50b0ZpeGVkKCkgKyAnICVcXG4nO1xyXG5cclxuICAgICAgLy8gcmVzZXQgYWxsIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICB0aGlzLnZlcnRpY2VzID0gdW5pcXVlVmVydGljZXM7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IHRyaSA9IHRoaXMudHJpYW5nbGVzW2ldO1xyXG4gICAgICAgICB0cmkudmVydGljZXMgPSB1bmlxdWVWZXJ0aWNlcztcclxuICAgICAgICAgdHJpLmlWMCA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMCArIDEpIC0gMTtcclxuICAgICAgICAgdHJpLmlWMSA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMSArIDEpIC0gMTtcclxuICAgICAgICAgdHJpLmlWMiA9IGluZGV4VG9JbmRleE1hcC5nZXQodHJpLmlWMiArIDEpIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb2xkU2l6ZSA9IHRoaXMubm9ybWFscy5sZW5ndGg7XHJcbiAgICAgIHRoaXMuY29tcHV0ZU5vcm1hbHMobm9ybWFsVHlwZSk7XHJcbiAgICAgIG5ld1NpemUgPSB0aGlzLm5vcm1hbHMubGVuZ3RoO1xyXG4gICAgICBtc2cgKz0gJ051bSBOb3JtYWxzOiAnICsgb2xkU2l6ZSArICcgdG8gJyArIG5ld1NpemUgKyAnLCAnICsgKDEwMCAqIG5ld1NpemUgLyBvbGRTaXplKS50b0ZpeGVkKCkgKyAnICUnO1xyXG5cclxuICAgICAgbGV0IHN0ciA9IHRoaXMudG9PYmpTdHJpbmcoNik7XHJcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHN0cikudGhlbigoKSA9PiB7IGFsZXJ0KG1zZykgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcHVzaFZlYyhhcnJheTogbnVtYmVyW10sIHZlYzogZ2xWZWMzKSB7XHJcbiAgICAgIGFycmF5LnB1c2godmVjLngpO1xyXG4gICAgICBhcnJheS5wdXNoKHZlYy55KTtcclxuICAgICAgYXJyYXkucHVzaCh2ZWMueik7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBleHBvcnQoKTogVHJpYW5nbGVPYmpEYXRhIHtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFRyaWFuZ2xlT2JqRGF0YTtcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgdGhlIHRyaWFuZ2xlcyBpbnRvIGFycmF5cyB0aGF0IGNhbiBiZSB1cGxvYWRlZFxyXG4gICAgICBsZXQgdmVydGljZXM6IG51bWJlcltdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICB0aGlzLnB1c2hWZWModmVydGljZXMsIHRoaXMudmVydGljZXNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbm9ybWFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vcm1hbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgdGhpcy5wdXNoVmVjKG5vcm1hbHMsIHRoaXMubm9ybWFsc1tpXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB2SW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IG5JbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCB0cmkgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcclxuXHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMCk7XHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMSk7XHJcbiAgICAgICAgIHZJbmRpY2VzLnB1c2godHJpLmlWMik7XHJcblxyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjApO1xyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjEpO1xyXG4gICAgICAgICBuSW5kaWNlcy5wdXNoKHRyaS5pTjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyk7XHJcbiAgICAgIGRhdGEubm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFscyk7XHJcbiAgICAgIGRhdGEudkluZGljZXMgPSBuZXcgSW50MzJBcnJheSh2SW5kaWNlcyk7XHJcbiAgICAgIGRhdGEubkluZGljZXMgPSBuZXcgSW50MzJBcnJheShuSW5kaWNlcyk7XHJcbiAgICAgIGRhdGEuYm94TWluID0gdGhpcy5ib3hNaW4uY2xvbmUoKTtcclxuICAgICAgZGF0YS5ib3hNYXggPSB0aGlzLmJveE1heC5jbG9uZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxuXHJcblxyXG4gICBwcml2YXRlIHN0YXRpYyBkYXRhMnZlcnRleChkYXRhOiBUcmlhbmdsZU9iakRhdGEsIGluZGV4OiBudW1iZXIpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyhbXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMF0sXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMV0sXHJcbiAgICAgICAgIGRhdGEudmVydGljZXNbMyAqIGluZGV4ICsgMl1cclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZGF0YTJub3JtYWwoZGF0YTogVHJpYW5nbGVPYmpEYXRhLCBpbmRleDogbnVtYmVyKTogZ2xWZWMzIHtcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBkYXRhLm5vcm1hbHNbMyAqIGluZGV4ICsgMF0sXHJcbiAgICAgICAgIGRhdGEubm9ybWFsc1szICogaW5kZXggKyAxXSxcclxuICAgICAgICAgZGF0YS5ub3JtYWxzWzMgKiBpbmRleCArIDJdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGltcG9ydChkYXRhOiBUcmlhbmdsZU9iakRhdGEpOiBUcmlhbmdsZU9iaiB7XHJcbiAgICAgIGxldCB0T2JqID0gbmV3IFRyaWFuZ2xlT2JqKCk7XHJcblxyXG4gICAgICAvLyByZXN0b3JlIHZlcnRpY2VzXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS52ZXJ0aWNlcy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgdE9iai52ZXJ0aWNlcy5wdXNoKHRoaXMuZGF0YTJ2ZXJ0ZXgoZGF0YSwgaSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXN0b3JlIG5vcm1hbHNcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLm5vcm1hbHMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIHRPYmoubm9ybWFscy5wdXNoKHRoaXMuZGF0YTJub3JtYWwoZGF0YSwgaSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXN0b3JlIHRyaWFuZ2xlc1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudkluZGljZXMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBpVjAgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIGxldCBpVjEgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIGxldCBpVjIgPSBkYXRhLnZJbmRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCBpTjAgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMF07XHJcbiAgICAgICAgIGxldCBpTjEgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMV07XHJcbiAgICAgICAgIGxldCBpTjIgPSBkYXRhLm5JbmRpY2VzWzMgKiBpICsgMl07XHJcbiAgICAgICAgIGxldCB0ID0gbmV3IEluZGV4ZWRUcmlhbmdsZSh0T2JqLnZlcnRpY2VzLCBpVjAsIGlWMSwgaVYyLCB0T2JqLm5vcm1hbHMsIGlOMCwgaU4xLCBpTjIpO1xyXG4gICAgICAgICB0T2JqLnRyaWFuZ2xlcy5wdXNoKHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0T2JqLmJveE1pbiA9IG5ldyBnbFZlYzMoZGF0YS5ib3hNaW4udmFsdWVzKTtcclxuICAgICAgdE9iai5ib3hNYXggPSBuZXcgZ2xWZWMzKGRhdGEuYm94TWF4LnZhbHVlcyk7XHJcblxyXG4gICAgICByZXR1cm4gdE9iajtcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdsVmVjMyB9IGZyb20gXCIuL2dsVmVjXCI7XHJcbmltcG9ydCB7IEluZGV4ZWRUcmlhbmdsZSB9IGZyb20gXCIuL0luZGV4ZWRUcmlhbmdsZVwiO1xyXG5pbXBvcnQgeyBUcmlhbmdsZU9iaiwgTm9ybWFsVHlwZSB9IGZyb20gXCIuL1RyaWFuZ2xlT2JqXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVyIH0gZnJvbSBcIi4vUHJvZmlsZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFN0YXR1c0Z1bmN0aW9uID0gKHN0YXR1czogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgbG9hZHMgYSAub2JqIGZpbGUgYW5kIGNyZWF0ZXMgdHJpYW5nbGVzIGZvciBpdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlT2JqRmlsZSBleHRlbmRzIFRyaWFuZ2xlT2JqIHtcclxuXHJcbiAgIHByaXZhdGUgdXBkYXRlU3RhdHVzOiBTdGF0dXNGdW5jdGlvbjtcclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzcmM6IHN0cmluZywgc3RhdHVzRnVuY3Rpb24/OiBTdGF0dXNGdW5jdGlvbikge1xyXG5cclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIC8vIHJlY29yZCB0aGUgc3RhdHVzIGZ1bmN0aW9uLiBJZiBvbmUgaXMgbm90IHN1cHBsaWVkLCBjcmVhdGUgb25lIHRoYXQgZG9lcyBub3RoaW5nXHJcbiAgICAgIGlmIChzdGF0dXNGdW5jdGlvbikge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyA9IHN0YXR1c0Z1bmN0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyA9IChzdGF0dXMpID0+IHsgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wYXJzZShzcmMpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHBhcnNlRmFjZShsaW5lOiBzdHJpbmcpOiB7IGlWOiBudW1iZXJbXSwgaU46IG51bWJlcltdIH0ge1xyXG4gICAgICBsZXQgcmV0ID0ge1xyXG4gICAgICAgICBpVjogW10gYXMgbnVtYmVyW10sXHJcbiAgICAgICAgIGlOOiBbXSBhcyBudW1iZXJbXSxcclxuICAgICAgfVxyXG4gICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgbGV0IG51bVZhbHMgPSB0b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWxzOyBpKyspIHtcclxuICAgICAgICAgbGV0IHZhbHMgPSB0b2tlbnNbaSArIDFdLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgIHJldC5pVi5wdXNoKHBhcnNlSW50KHZhbHNbMF0pIC0gMSk7XHJcbiAgICAgICAgIHJldC5pTi5wdXNoKHZhbHMubGVuZ3RoID09PSAzID8gcGFyc2VJbnQodmFsc1syXSkgLSAxIDogLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXQ7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgcGFyc2Uoc3JjOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdHVzKCdQcm9jZXNzaW5nJyk7XHJcbiAgICAgIGxldCB0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIGxldCBwID0gbmV3IFByb2ZpbGVyKCk7XHJcbiAgICAgIGxldCBsaW5lcyA9IHNyYy5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIHAubG9nKCdzcGxpdCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAvLyByZXBvcnQgcHJvZ3Jlc3MgZXZlcnkgNTAgbXNcclxuICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0ID4gNTApIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6ICcgKyAoMTAwICogaSAvIGxpbmVzLmxlbmd0aCkudG9GaXhlZCgpICsgJyUnKTtcclxuICAgICAgICAgICAgdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgndiAnKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gbGluZS5tYXRjaCgvXFxTKy9nKTtcclxuICAgICAgICAgICAgbGV0IHZlYyA9IG5ldyBnbFZlYzMoW3BhcnNlRmxvYXQodG9rZW5zWzFdKSwgcGFyc2VGbG9hdCh0b2tlbnNbMl0pLCBwYXJzZUZsb2F0KHRva2Vuc1szXSldKVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVjKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoJ3ZuICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBsaW5lLm1hdGNoKC9cXFMrL2cpO1xyXG4gICAgICAgICAgICBsZXQgdmVjID0gbmV3IGdsVmVjMyhbcGFyc2VGbG9hdCh0b2tlbnNbMV0pLCBwYXJzZUZsb2F0KHRva2Vuc1syXSksIHBhcnNlRmxvYXQodG9rZW5zWzNdKV0pXHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFscy5wdXNoKHZlYyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKCdmICcpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSB0aGlzLnBhcnNlRmFjZShsaW5lKTtcclxuICAgICAgICAgICAgaWYgKHJldC5pTi5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBJbmRleGVkVHJpYW5nbGUodGhpcy52ZXJ0aWNlcywgcmV0LmlWWzBdLCByZXQuaVZbMV0sIHJldC5pVlsyXSwgdGhpcy5ub3JtYWxzLCByZXQuaU5bMF0sIHJldC5pTlsxXSwgcmV0LmlOWzJdKSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMucHVzaChuZXcgSW5kZXhlZFRyaWFuZ2xlKHRoaXMudmVydGljZXMsIHJldC5pVlswXSwgcmV0LmlWWzJdLCByZXQuaVZbM10sIHRoaXMubm9ybWFscywgcmV0LmlOWzBdLCByZXQuaU5bMl0sIHJldC5pTlszXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLnB1c2gobmV3IEluZGV4ZWRUcmlhbmdsZSh0aGlzLnZlcnRpY2VzLCByZXQuaVZbMF0sIHJldC5pVlsxXSwgcmV0LmlWWzJdLCB0aGlzLm5vcm1hbHMsIHJldC5pTlswXSwgcmV0LmlOWzFdLCByZXQuaU5bMl0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubm9ybWFscy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFscyhOb3JtYWxUeXBlLlNtb290aCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVTdGF0dXMoJ1Byb2Nlc3Npbmc6IDEwMCUnKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0aWNlczogJyArIHRoaXMudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ05vcm1hbHM6ICcgKyB0aGlzLm5vcm1hbHMubGVuZ3RoKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyaWFuZ2xlczogJyArIHRoaXMudHJpYW5nbGVzLmxlbmd0aCk7XHJcbiAgICAgIHAubG9nKCdwYXJzZScpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBJbmRleGVkVHJpYW5nbGUgfSBmcm9tIFwiLi9JbmRleGVkVHJpYW5nbGVcIjtcclxuaW1wb3J0IHsgZ2xWZWMzIH0gZnJvbSBcIi4vZ2xWZWNcIjtcclxuXHJcbmNvbnN0IE1BWCA9IDEwMDA7IC8vIElORklOSVRZIGluIG91ciByZW5kZXJpbmcgd29ybGRcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IG1hbmFnZXMgYSBzZXQgb2YgdHJpYW5nbGVzIHdpdGhpbiBhIGdpdmVuIHNwYWNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVm9sdW1lIHtcclxuICAgLyoqXHJcbiAgICAqIFRoZSB0cmlhbmdsZXMgZW5jbG9zZWQgd2l0aGluIHRoZSBib3VuZGluZyBib3hcclxuICAgICovXHJcbiAgIHB1YmxpYyB0cmlhbmdsZXM6IEluZGV4ZWRUcmlhbmdsZVtdID0gW107XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1pbmltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNaW4gPSBuZXcgZ2xWZWMzKFtNQVgsIE1BWCwgTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogQm91bmRpbmcgYm94IG1heGltdW1cclxuICAgICovXHJcbiAgIHB1YmxpYyBib3hNYXggPSBuZXcgZ2xWZWMzKFstTUFYLCAtTUFYLCAtTUFYXSk7XHJcblxyXG4gICAvKipcclxuICAgICogU3RvcmVzIGEgdHJpYW5nbGUgYW5kIHVwZGF0ZXMgdGhlIGJvdW5kaW5nIGJveFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHRyaWFuZ2xlIFRoZSB0cmlhbmdsZSB0byBzdG9yZVxyXG4gICAgKi9cclxuICAgcHVibGljIHB1c2godHJpYW5nbGU6IEluZGV4ZWRUcmlhbmdsZSkge1xyXG5cclxuICAgICAgdGhpcy50cmlhbmdsZXMucHVzaCh0cmlhbmdsZSk7XHJcbiAgICAgIHRoaXMuYm94TWluLnggPSBNYXRoLm1pbih0aGlzLmJveE1pbi54LCB0cmlhbmdsZS5taW5YKTtcclxuICAgICAgdGhpcy5ib3hNaW4ueSA9IE1hdGgubWluKHRoaXMuYm94TWluLnksIHRyaWFuZ2xlLm1pblkpO1xyXG4gICAgICB0aGlzLmJveE1pbi56ID0gTWF0aC5taW4odGhpcy5ib3hNaW4ueiwgdHJpYW5nbGUubWluWik7XHJcbiAgICAgIHRoaXMuYm94TWF4LnggPSBNYXRoLm1heCh0aGlzLmJveE1heC54LCB0cmlhbmdsZS5tYXhYKTtcclxuICAgICAgdGhpcy5ib3hNYXgueSA9IE1hdGgubWF4KHRoaXMuYm94TWF4LnksIHRyaWFuZ2xlLm1heFkpO1xyXG4gICAgICB0aGlzLmJveE1heC56ID0gTWF0aC5tYXgodGhpcy5ib3hNYXgueiwgdHJpYW5nbGUubWF4Wik7XHJcbiAgIH1cclxufVxyXG4iLCJcclxuLyoqXHJcbiAqIFZlY3RvciBjbGFzcyBmb3IgdXNlIHdpdGggV2ViR0wgYXBwbGljYXRpb25zLlxyXG4gKi9cclxuY2xhc3MgZ2xWZWMge1xyXG5cclxuICAgLyoqIFRoZSB2ZWN0b3IgdmFsdWVzLiAqL1xyXG4gICBwdWJsaWMgdmFsdWVzOiBudW1iZXJbXTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFsdWVzT3JTaXplIElmIGEgYXJyYXksIHRoZSB2YWx1ZXMgZm9yIHRoZSB2ZWN0b3IuIElmIGEgbnVtYmVyLCB0aGUgc2l6ZSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHZhbHVlc09yU2l6ZTogbnVtYmVyIHwgbnVtYmVyW10pIHtcclxuICAgICAgaWYgKHZhbHVlc09yU2l6ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gWy4uLnZhbHVlc09yU2l6ZV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KHZhbHVlc09yU2l6ZSk7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzT3JTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaV0gPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm4gVGhlIHZlY3RvciBtYWduaXR1ZGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWFnbml0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tpXSAqIHRoaXMudmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzIgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoMik7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNsb25lKCk6IGdsVmVjMiB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMyKHRoaXMudmFsdWVzKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHgodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMF0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBZIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXHJcbiAgICAqXHJcbiAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZVxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFNldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2V0IHkodmFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWw7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgdG8gYW5vdGhlciBwb2ludFxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIG90aGVyIFRoZSBvdGhlciBwb2ludFxyXG4gICAgKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHBvaW50IGFuZCB0aGUgb3RoZXIgcG9pbnRcclxuICAgICovXHJcbiAgIHB1YmxpYyBkaXN0YW5jZShvdGhlcjogZ2xWZWMyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLnggLSBvdGhlci54LCAyKSArIE1hdGgucG93KHRoaXMueSAtIG90aGVyLnksIDIpKTtcclxuICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4geC15LXogdmVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGdsVmVjMyBleHRlbmRzIGdsVmVjIHtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBAcGFyYW0gdmFscyBJZiBzdXBwbGllZCwgdGhlIGluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmVjdG9yXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY29uc3RydWN0b3IodmFscz86IG51bWJlcltdKSB7XHJcbiAgICAgIGlmICh2YWxzKSB7XHJcbiAgICAgICAgIHN1cGVyKHZhbHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICBzdXBlcigzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogR2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeCh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeSh2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1sxXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIFogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcclxuICAgICpcclxuICAgICogQHJldHVybnMgVGhlIHZhbHVlXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogU2V0cyB0aGUgWiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxyXG4gICAgKiBcclxuICAgICogQHBhcmFtIHZhbCBUaGUgdmFsdWVcclxuICAgICovXHJcbiAgIHB1YmxpYyBzZXQgeih2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnZhbHVlc1syXSA9IHZhbDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjbG9uZSgpOiBnbFZlYzMge1xyXG4gICAgICByZXR1cm4gbmV3IGdsVmVjMyh0aGlzLnZhbHVlcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBkaWdpdHMgVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byBkaXNwbGF5LiBUaGlzIHZhbHVlIGlzIHBhc3NlZCB0byB0b0ZpeGVkKCkuXHJcbiAgICAqIEBwYXJhbSBkaXZpZGVyIFRoZSBzdHJpbmcgdG8gc2VwYXJhdGUgZWFjaCBudW1iZXIuXHJcbiAgICAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvU3RyaW5nKGRpZ2l0czogbnVtYmVyLCBkaXZpZGVyID0gJywnKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMueC50b0ZpeGVkKGRpZ2l0cykgKyBkaXZpZGVyICsgdGhpcy55LnRvRml4ZWQoZGlnaXRzKSArIGRpdmlkZXIgKyB0aGlzLnoudG9GaXhlZChkaWdpdHMpO1xyXG4gICB9XHJcblxyXG4gICAvKiogXHJcbiAgICAqIE5vcm1hbGl6ZXMgdGhpcyB2ZWN0b3IsIGFuZCBzdG9yZXMgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICogXHJcbiAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgbm9ybWFsaXplZCB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbm9ybWFsaXplKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCBtYWcgPSB0aGlzLm1hZ25pdHVkZSgpO1xyXG4gICAgICBsZXQgcmV0ID0gdGhpcy5jbG9uZSgpO1xyXG4gICAgICBpZiAobWFnICE9PSAwKSB7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmV0LnZhbHVlc1tpXSAvPSBtYWc7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJldDtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFN1YnRyYWN0cyB2YWx1ZXMgZnJvbSB0aGlzIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSB2ZWMgVGhlIHZlY3RvciB0byBzdWJ0cmFjdC5cclxuICAgICogQHJldHVybnMgVGhlIGNvbXB1dGVkIHZlY3Rvci5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzdWJ0cmFjdCh2ZWM6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLSB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAtIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC0gdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEFkZHMgdmFsdWVzIGZyb20gdGhpcyB2ZWN0b3IuXHJcbiAgICAqIFxyXG4gICAgKiBAcGFyYW0gdmVjIFRoZSB2ZWN0b3IgdG8gYWRkLlxyXG4gICAgKiBAcmV0dXJucyBUaGUgY29tcHV0ZWQgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGFkZCh2ZWM6IGdsVmVjMyk6IGdsVmVjMyB7XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gKyB2ZWMudmFsdWVzWzBdLFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSArIHZlYy52YWx1ZXNbMV0sXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdICsgdmVjLnZhbHVlc1syXVxyXG4gICAgICBdKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cclxuICAgICogXHJcbiAgICAqIEBwYXJhbSBvdGhlciBUaGUgb3RoZXIgdmVjdG9yLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNyb3NzKG90aGVyOiBnbFZlYzMpOiBnbFZlYzMge1xyXG4gICAgICBsZXQgQSA9IHRoaXMudmFsdWVzO1xyXG4gICAgICBsZXQgQiA9IG90aGVyLnZhbHVlcztcclxuICAgICAgcmV0dXJuIG5ldyBnbFZlYzMoW1xyXG4gICAgICAgICBBWzFdICogQlsyXSAtIEFbMl0gKiBCWzFdLFxyXG4gICAgICAgICBBWzJdICogQlswXSAtIEFbMF0gKiBCWzJdLFxyXG4gICAgICAgICBBWzBdICogQlsxXSAtIEFbMV0gKiBCWzBdXHJcbiAgICAgIF0pO1xyXG4gICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiB4LXktei13IHZlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBnbFZlYzQgZXh0ZW5kcyBnbFZlYyB7XHJcblxyXG4gICAvKipcclxuICAgICogQHBhcmFtIHZhbHMgSWYgc3VwcGxpZWQsIHRoZSBpbml0aWFsIHZhbHVlcyBmb3IgdGhlIHZlY3RvclxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHM/OiBudW1iZXJbXSkge1xyXG4gICAgICBpZiAodmFscykge1xyXG4gICAgICAgICBzdXBlcih2YWxzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgc3VwZXIoNCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4geC15LXogdmVjdG9yIHdoZXJlIGVhY2ggZWxlbWVudCBpcyBjb21wdXRlZCBieSBkaXZpZGluZyB0aGlzIHZlY3RvcnNcclxuICAgICogZWxlbWVudHMgYnkgdGhlIHcgdmFsdWUuXHJcbiAgICAqIFxyXG4gICAgKiBAcmV0dXJucyBBbiB4LXkteiB2ZWN0b3IuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgZGl2aWRlQnlXKCk6IGdsVmVjMyB7XHJcbiAgICAgIGxldCB3ID0gdGhpcy52YWx1ZXNbM107XHJcbiAgICAgIHJldHVybiBuZXcgZ2xWZWMzKFtcclxuICAgICAgICAgdGhpcy52YWx1ZXNbMF0gLyB3LFxyXG4gICAgICAgICB0aGlzLnZhbHVlc1sxXSAvIHcsXHJcbiAgICAgICAgIHRoaXMudmFsdWVzWzJdIC8gd1xyXG4gICAgICBdKTtcclxuICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9