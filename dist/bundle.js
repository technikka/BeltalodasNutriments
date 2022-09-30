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

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPageContent\": () => (/* binding */ contactPageContent)\n/* harmony export */ });\nconst contactPageContent = () => {\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageContent\": () => (/* binding */ homePageContent)\n/* harmony export */ });\nconst homePageContent = () => {\n  const contentContainer = document.getElementById('content');\n\n  const backdrop1 = addBackdrop(contentContainer);\n  addTitle(backdrop1);\n\n  const backdrop2 = addBackdrop(contentContainer);\n  addEnticement(backdrop2);\n\n  const backdrop3 = addBackdrop(contentContainer);\n  addHours(backdrop3);\n}\n\nconst addBackdrop = (parent) => {\n  let backdrop = document.createElement('div');\n  backdrop.classList.add('backdrop');\n  parent.appendChild(backdrop);\n  return backdrop \n}\n\nconst addTitle = (parent) => {\n  let title = document.createElement('h1');\n  title.innerHTML = 'Beltaloda\\'s Nutriments';\n  parent.appendChild(title);\n}\n\nconst addEnticement = (parent) => {\n  let enticement = document.createElement('p');\n  enticement.innerHTML = \"A Belter's Paradise! Enjoy the luxurious, green diet of Earth right here in the Belt. The finest and freshest sun grown foods, hard-burned right to our restaurant. Come walk the \\\"Beltaloda tunnel of light\\\", of system-wide fame, and have the experience of a lifetime.\"\n  parent.appendChild(enticement);\n}\n\nconst addHours = (parent) => {\n  let hours = document.createElement('p');\n  let heading = document.createElement('h2');\n  heading.innerHTML = 'Hours';\n  hours.innerHTML = 'Sunday: Ceres Hr3 - Hr9' + '<br />' + \n                    'Monday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Tuesday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Wednesday: Ceres Hr3 - Hr5' + '<br />' + \n                    'Thursday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Friday: Ceres Hr1 - Hr9' + '<br />' + \n                    'Saturday: Ceres Hr1 - Hr9' + '<br />';\n  parent.appendChild(heading);\n  parent.appendChild(hours); \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n\n\n\n\nconst contentContainer = document.getElementById('content');\nconst nav = document.getElementById('navbar');\n\nconst clearPage = () => {\n  contentContainer.textContent = '';\n}\n\nlet homeTab = document.createElement('div');\nhomeTab.textContent = 'Home';\nhomeTab.addEventListener('click', () => {\n  clearPage();\n  (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePageContent)();\n})\n\nlet menuTab = document.createElement('div');\nmenuTab.textContent = 'Menu';\nmenuTab.addEventListener('click', () => {\n  clearPage();\n  (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.menuPageContent)();\n})\n\nlet contactTab = document.createElement('div');\ncontactTab.textContent = 'Contact';\n\nnav.appendChild(homeTab);\nnav.appendChild(menuTab);\nnav.appendChild(contactTab);\n\n(0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePageContent)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageContent\": () => (/* binding */ menuPageContent)\n/* harmony export */ });\n/* harmony import */ var _pexels_olena_bohovyk_3323682_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pexels-olena-bohovyk-3323682.jpg */ \"./src/pexels-olena-bohovyk-3323682.jpg\");\n\n\nconst menuPageContent = () => {\n  const contentContainer = document.getElementById('content');\n\n  const backdrop1 = addBackdrop(contentContainer);\n  addTitle(backdrop1);\n\n  const backdrop2 = addBackdrop(contentContainer);\n  backdrop2.classList.add('menu-subtitle');\n  addSubTitle(backdrop2, 'Beverages');\n\n  const backdrop3 = addBackdrop(contentContainer);\n  addItem(backdrop3, 'Blood Orange Horizon', _pexels_olena_bohovyk_3323682_jpg__WEBPACK_IMPORTED_MODULE_0__);\n}\n\nconst addBackdrop = (parent) => {\n  let backdrop = document.createElement('div');\n  backdrop.classList.add('backdrop');\n  parent.appendChild(backdrop);\n  return backdrop \n}\n\nconst addTitle = (parent) => {\n  let title = document.createElement('h1');\n  title.innerHTML = 'Menu';\n  parent.appendChild(title);\n}\n\nconst addSubTitle = (parent, subtitle) => {\n  let title = document.createElement('h2');\n  title.innerHTML = subtitle;\n  parent.appendChild(title);\n}\n\nconst addItem = (parent, itemName, imgPath) => {\n  parent.classList.add('menu-item');\n  let heading = document.createElement('h3');\n  heading.innerHTML = itemName;\n  parent.appendChild(heading);\n  let imgContainer = document.createElement('div');\n  imgContainer.classList.add('img-container');\n  let img = document.createElement('img');\n  img.setAttribute('src', imgPath);\n  imgContainer.appendChild(img)\n  parent.appendChild(imgContainer);\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu-page.js?");

/***/ }),

/***/ "./src/pexels-olena-bohovyk-3323682.jpg":
/*!**********************************************!*\
  !*** ./src/pexels-olena-bohovyk-3323682.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16dc5386cb0ac42c7e91.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/pexels-olena-bohovyk-3323682.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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