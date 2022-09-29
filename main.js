/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ \"./src/initial-page.js\");\n\n\n(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.createPageContent)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPageContent\": () => (/* binding */ createPageContent)\n/* harmony export */ });\nconst createPageContent = () => {\n  const contentContainer = document.getElementById('content');\n  const backdrop1 = addBackdrop(contentContainer);\n  addTitle(backdrop1);\n\n  const backdrop2 = addBackdrop(contentContainer);\n  addEnticement(backdrop2);\n\n  const backdrop3 = addBackdrop(contentContainer);\n  addHours(backdrop3);\n}\n\nconst addBackdrop = (parent) => {\n  let backdrop = document.createElement('div');\n  backdrop.classList.add('backdrop');\n  parent.appendChild(backdrop);\n  return backdrop \n}\n\nconst addTitle = (parent) => {\n  let title = document.createElement('h1');\n  title.innerHTML = 'Beltaloda\\'s Nutriments';\n  parent.appendChild(title);\n}\n\nconst addEnticement = (parent) => {\n  let enticement = document.createElement('p');\n  enticement.innerHTML = \"A Belter's Paradise! Enjoy the luxurious, green diet of Earth right here in the Belt. The finest and freshest sun grown foods, hard-burned right to our restaurant. Come walk the infamous \\\"Beltaloda tunnel of light\\\" and have the experience of a lifetime.\"\n  parent.appendChild(enticement);\n}\n\nconst addHours = (parent) => {\n  let hours = document.createElement('p');\n  hours.innerHTML = 'Sunday: Ceres Hr3 - Hr9' + '<br />' + \n                    'Monday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Tuesday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Wednesday: Ceres Hr3 - Hr5' + '<br />' + \n                    'Thursday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Friday: Ceres Hr1 - Hr9' + '<br />' + \n                    'Saturday: Ceres Hr1 - Hr9' + '<br />';\n  parent.appendChild(hours); \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/initial-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;