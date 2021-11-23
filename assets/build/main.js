"use strict";
(self["webpackChunkhiking_in_norway"] = self["webpackChunkhiking_in_norway"] || []).push([["main"],{

/***/ "./src/scripts/Application.ts":
/*!************************************!*\
  !*** ./src/scripts/Application.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Application {
    constructor() {
    }
}
exports["default"] = Application;


/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Application_1 = __importDefault(__webpack_require__(/*! ./Application */ "./src/scripts/Application.ts"));
new Application_1.default();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/main.ts"));
/******/ }
]);