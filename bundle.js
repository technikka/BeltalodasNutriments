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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPageContent\": () => (/* binding */ contactPageContent)\n/* harmony export */ });\nconst contactPageContent = () => {\n  const contentContainer = document.getElementById('content');\n\n  const backdrop1 = addBackdrop(contentContainer);\n  addTitle(backdrop1);\n  const backdrop2 = addBackdrop(contentContainer);\n  backdrop2.classList.add('color-backdrop');\n  let para = document.createElement('p');\n  para.innerHTML = '<b>From Ceres Station:</b> ' + '<br />' + '12-596' + \n                   '<br /><br />' + '<b>Tight-beam coordinates:</b>' + '<br />' + \n                   '283746.4059937.28475553.2847398 SAU' + '<br /><br />' +\n                   'If you\\'re off station but within docking range, our host will be glad to communicate with you in real time, regardless of if you plan to dock.';\n  para.style.textAlign = 'start';\n  backdrop2.appendChild(para); \n}\n\nconst addBackdrop = (parent) => {\n  let backdrop = document.createElement('div');\n  backdrop.classList.add('backdrop');\n  parent.appendChild(backdrop);\n  return backdrop \n}\n\nconst addTitle = (parent) => {\n  let title = document.createElement('h1');\n  title.innerHTML = 'Contact';\n  parent.appendChild(title);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageContent\": () => (/* binding */ homePageContent)\n/* harmony export */ });\nconst homePageContent = () => {\n  const contentContainer = document.getElementById('content');\n\n  const backdrop1 = addBackdrop(contentContainer);\n  addTitle(backdrop1);\n\n  const backdrop2 = addBackdrop(contentContainer);\n  backdrop2.classList.add('color-backdrop');\n  addEnticement(backdrop2);\n\n  const backdrop3 = addBackdrop(contentContainer);\n  backdrop3.classList.add('color-backdrop');\n  addHours(backdrop3);\n}\n\nconst addBackdrop = (parent) => {\n  let backdrop = document.createElement('div');\n  backdrop.classList.add('backdrop');\n  parent.appendChild(backdrop);\n  return backdrop \n}\n\nconst addTitle = (parent) => {\n  let title = document.createElement('h1');\n  title.innerHTML = 'Beltaloda\\'s Nutriments';\n  parent.appendChild(title);\n}\n\nconst addEnticement = (parent) => {\n  let enticement = document.createElement('p');\n  enticement.innerHTML = \"A Belter's Paradise! Enjoy the luxurious, green diet of Earth right here in the Belt. The finest and freshest sun grown foods, hard-burned right to our restaurant. Come walk the \\\"Beltaloda tunnel of light\\\", of system-wide fame, and have the experience of a lifetime.\"\n  parent.appendChild(enticement);\n}\n\nconst addHours = (parent) => {\n  let hours = document.createElement('p');\n  let heading = document.createElement('h2');\n  heading.innerHTML = 'Hours';\n  hours.innerHTML = 'Sunday: Ceres Hr3 - Hr9' + '<br />' + \n                    'Monday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Tuesday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Wednesday: Ceres Hr3 - Hr5' + '<br />' + \n                    'Thursday: Ceres Hr4 - Hr7' + '<br />' + \n                    'Friday: Ceres Hr1 - Hr9' + '<br />' + \n                    'Saturday: Ceres Hr1 - Hr9' + '<br />';\n  parent.appendChild(heading);\n  parent.appendChild(hours); \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home-page.js?");

/***/ }),

/***/ "./src/img-credit.js":
/*!***************************!*\
  !*** ./src/img-credit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBackgroundCredit\": () => (/* binding */ addBackgroundCredit),\n/* harmony export */   \"addFoodCredit\": () => (/* binding */ addFoodCredit)\n/* harmony export */ });\nconst addBackgroundCredit = (parent) => {\n  let bgCredit = document.createElement('p');\n  bgCredit.classList.add('img-credit');\n  let authorLink = document.createElement('a');\n  authorLink.setAttribute('href', 'https://unsplash.com/@nvte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');\n  authorLink.textContent = 'Nathan Duck';\n  let imageLink = document.createElement('a');\n  imageLink.setAttribute('href', 'https://unsplash.com/s/photos/sci-fi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText')\n  imageLink.textContent = 'Unsplash'\n  bgCredit.innerHTML = 'Background image by ';\n  bgCredit.appendChild(authorLink);\n  bgCredit.innerHTML += ' on '\n  bgCredit.appendChild(imageLink);\n  parent.appendChild(bgCredit);\n}\n\nconst addFoodCredit = (parent) => {\n  let credit = document.createElement('p');\n  credit.classList.add('img-credit');\n  let unsplashLink = document.createElement('a');\n  unsplashLink.setAttribute('href', 'https://unsplash.com/');\n  unsplashLink.textContent = 'Unsplash';\n\n  let pexelLink = document.createElement('a');\n  pexelLink.setAttribute('href', 'https://www.pexels.com');\n  pexelLink.textContent = 'Pexels';\n\n  credit.innerHTML = 'Food images taken from ';\n  credit.appendChild(unsplashLink);\n  credit.innerHTML += ' and '\n  credit.appendChild(pexelLink);\n  parent.appendChild(credit);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/img-credit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n/* harmony import */ var _img_credit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img-credit */ \"./src/img-credit.js\");\n\n\n\n\n\nconst html = document.querySelector('html');\nconst contentContainer = document.getElementById('content');\nconst nav = document.getElementById('navbar');\n\nconst clearPage = () => {\n  contentContainer.textContent = '';\n}\n\nlet homeTab = document.createElement('div');\nhomeTab.textContent = 'Home';\nhomeTab.addEventListener('click', () => {\n  clearPage();\n  (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePageContent)();\n})\n\nlet menuTab = document.createElement('div');\nmenuTab.textContent = 'Menu';\nmenuTab.addEventListener('click', () => {\n  clearPage();\n  (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.menuPageContent)();\n  (0,_img_credit__WEBPACK_IMPORTED_MODULE_3__.addFoodCredit)(contentContainer);\n})\n\nlet contactTab = document.createElement('div');\ncontactTab.textContent = 'Contact';\ncontactTab.addEventListener('click', () => {\n  clearPage();\n  (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__.contactPageContent)();\n})\n\nnav.appendChild(homeTab);\nnav.appendChild(menuTab);\nnav.appendChild(contactTab);\n\n(0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePageContent)();\n(0,_img_credit__WEBPACK_IMPORTED_MODULE_3__.addBackgroundCredit)(html);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageContent\": () => (/* binding */ menuPageContent)\n/* harmony export */ });\n/* harmony import */ var _menu_images_pexels_olena_bohovyk_3323682_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-images/pexels-olena-bohovyk-3323682.jpg */ \"./src/menu-images/pexels-olena-bohovyk-3323682.jpg\");\n/* harmony import */ var _menu_images_petr_sidorov_DrTXmESWaN8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-images/petr-sidorov-DrTXmESWaN8-unsplash.jpg */ \"./src/menu-images/petr-sidorov-DrTXmESWaN8-unsplash.jpg\");\n/* harmony import */ var _menu_images_pexels_anna_pyshniuk_6048537_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-images/pexels-anna-pyshniuk-6048537.jpg */ \"./src/menu-images/pexels-anna-pyshniuk-6048537.jpg\");\n/* harmony import */ var _menu_images_pexels_wagner_soares_1129482_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-images/pexels-wagner-soares-1129482.jpg */ \"./src/menu-images/pexels-wagner-soares-1129482.jpg\");\n/* harmony import */ var _menu_images_pexels_polina_tankilevitch_3872373_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-images/pexels-polina-tankilevitch-3872373.jpg */ \"./src/menu-images/pexels-polina-tankilevitch-3872373.jpg\");\n/* harmony import */ var _menu_images_pexels_deeana_arts_2894651_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-images/pexels-deeana-arts-2894651.jpg */ \"./src/menu-images/pexels-deeana-arts-2894651.jpg\");\n/* harmony import */ var _menu_images_vd_photography_h4XEpzG4Y_I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-images/vd-photography-h4XEpzG4Y-I-unsplash.jpg */ \"./src/menu-images/vd-photography-h4XEpzG4Y-I-unsplash.jpg\");\n/* harmony import */ var _menu_images_pexels_dana_tentis_364657_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-images/pexels-dana-tentis-364657.jpg */ \"./src/menu-images/pexels-dana-tentis-364657.jpg\");\n/* harmony import */ var _menu_images_jennifer_burk_1_F5YvloMGA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-images/jennifer-burk-1-F5YvloMGA-unsplash.jpg */ \"./src/menu-images/jennifer-burk-1-F5YvloMGA-unsplash.jpg\");\n/* harmony import */ var _menu_images_dianne_cabahug_XHnvXceoxkI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-images/dianne-cabahug-XHnvXceoxkI-unsplash.jpg */ \"./src/menu-images/dianne-cabahug-XHnvXceoxkI-unsplash.jpg\");\n/* harmony import */ var _menu_images_do_mee_SH8_JmrsQcw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-images/do-mee-SH8_JmrsQcw-unsplash.jpg */ \"./src/menu-images/do-mee-SH8_JmrsQcw-unsplash.jpg\");\n/* harmony import */ var _menu_images_pexels_polina_tankilevitch_5848492_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-images/pexels-polina-tankilevitch-5848492.jpg */ \"./src/menu-images/pexels-polina-tankilevitch-5848492.jpg\");\n/* harmony import */ var _menu_images_nathan_dumlao_8Uv6eanQWzY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-images/nathan-dumlao-8Uv6eanQWzY-unsplash.jpg */ \"./src/menu-images/nathan-dumlao-8Uv6eanQWzY-unsplash.jpg\");\n/* harmony import */ var _menu_images_casey_lee_awj7sRviVXo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-images/casey-lee-awj7sRviVXo-unsplash.jpg */ \"./src/menu-images/casey-lee-awj7sRviVXo-unsplash.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst menuPageContent = () => {\n  const contentContainer = document.getElementById('content');\n  const backdrop1 = addBackdrop(contentContainer);\n  addTitle(backdrop1);\n\n  const backdrop2 = addBackdrop(contentContainer);\n  backdrop2.classList.add('menu-subtitle');\n  addSubTitle(backdrop2, 'Beverages');\n\n  const backdrop3 = addBackdrop(contentContainer);\n  addItem(backdrop3, 'Blood Orange Tea', '80 CNY', _menu_images_pexels_olena_bohovyk_3323682_jpg__WEBPACK_IMPORTED_MODULE_0__);\n  const backdrop4 = addBackdrop(contentContainer);\n  addItem(backdrop4, 'Oolong Tea', '70 CNY', _menu_images_petr_sidorov_DrTXmESWaN8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__);\n  const backdrop5 = addBackdrop(contentContainer);\n  addItem(backdrop5, 'Coffee Latte', '90 CNY', _menu_images_pexels_anna_pyshniuk_6048537_jpg__WEBPACK_IMPORTED_MODULE_2__);\n  const backdrop6 = addBackdrop(contentContainer);\n  addItem(backdrop6, 'Baikal Stream Water', '300 CNY', _menu_images_pexels_wagner_soares_1129482_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\n  const backdrop7 = addBackdrop(contentContainer);\n  backdrop7.classList.add('menu-subtitle');\n  addSubTitle(backdrop7, 'Small Dishes');\n\n  const backdrop8 = addBackdrop(contentContainer);\n  addItem(backdrop8, 'Quinoa and Veggie Bowl', '240 CNY', _menu_images_pexels_polina_tankilevitch_3872373_jpg__WEBPACK_IMPORTED_MODULE_4__);\n  const backdrop9 = addBackdrop(contentContainer);\n  addItem(backdrop9, 'Garbanzo Bean and Avacado Salad', '240 CNY', _menu_images_pexels_deeana_arts_2894651_jpg__WEBPACK_IMPORTED_MODULE_5__);\n  const backdrop10 = addBackdrop(contentContainer);\n  addItem(backdrop10, 'Mega Fruits Plate', '360 CNY', _menu_images_vd_photography_h4XEpzG4Y_I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__);\n  const backdrop11 = addBackdrop(contentContainer);\n  addItem(backdrop11, 'Zuchinni Cakes', '260 CNY', _menu_images_pexels_dana_tentis_364657_jpg__WEBPACK_IMPORTED_MODULE_7__);\n\n  const backdrop12 = addBackdrop(contentContainer);\n  backdrop12.classList.add('menu-subtitle');\n  addSubTitle(backdrop12, 'Large Dishes');\n\n  const backdrop16 = addBackdrop(contentContainer);\n  addItem(backdrop16, 'Honey Pepper Noodles', '380 CNY', _menu_images_pexels_polina_tankilevitch_5848492_jpg__WEBPACK_IMPORTED_MODULE_11__);\n  const backdrop18 = addBackdrop(contentContainer);\n  addItem(backdrop18, 'Salmon and Zuchinni', '500 CNY', _menu_images_casey_lee_awj7sRviVXo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_13__);\n  const backdrop13 = addBackdrop(contentContainer);\n  addItem(backdrop13, 'Smoked Potato Nut', '420 CNY', _menu_images_jennifer_burk_1_F5YvloMGA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__);\n  const backdrop14 = addBackdrop(contentContainer);\n  addItem(backdrop14, 'Clam Chowder Soup', '420 CNY', _menu_images_do_mee_SH8_JmrsQcw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__);\n  const backdrop15 = addBackdrop(contentContainer);\n  addItem(backdrop15, 'Ramen', '460 CNY', _menu_images_dianne_cabahug_XHnvXceoxkI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__);\n  const backdrop17 = addBackdrop(contentContainer);\n  addItem(backdrop17, 'BBQ Chicken and Kale', '500 CNY', _menu_images_nathan_dumlao_8Uv6eanQWzY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_12__);\n}\n\nconst addBackdrop = (parent) => {\n  let backdrop = document.createElement('div');\n  backdrop.classList.add('backdrop');\n  parent.appendChild(backdrop);\n  return backdrop \n}\n\nconst addTitle = (parent) => {\n  let title = document.createElement('h1');\n  title.innerHTML = 'Menu';\n  parent.appendChild(title);\n}\n\nconst addSubTitle = (parent, subtitle) => {\n  let title = document.createElement('h2');\n  title.innerHTML = subtitle;\n  parent.appendChild(title);\n}\n\nconst addItem = (parent, itemName, itemPrice, imgPath) => {\n  parent.classList.add('menu-item');\n  let heading = document.createElement('h3');\n  heading.innerHTML = itemName;\n  parent.appendChild(heading);\n  let price = document.createElement('p');\n  price.innerHTML = itemPrice;\n  parent.appendChild(price);\n  let imgContainer = document.createElement('div');\n  imgContainer.classList.add('img-container');\n  let img = document.createElement('img');\n  img.setAttribute('src', imgPath);\n  imgContainer.appendChild(img)\n  parent.appendChild(imgContainer);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu-page.js?");

/***/ }),

/***/ "./src/menu-images/casey-lee-awj7sRviVXo-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/menu-images/casey-lee-awj7sRviVXo-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7df290c4d9ed23be3837.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/casey-lee-awj7sRviVXo-unsplash.jpg?");

/***/ }),

/***/ "./src/menu-images/dianne-cabahug-XHnvXceoxkI-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/menu-images/dianne-cabahug-XHnvXceoxkI-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6794f6f905b71ba6e5e6.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/dianne-cabahug-XHnvXceoxkI-unsplash.jpg?");

/***/ }),

/***/ "./src/menu-images/do-mee-SH8_JmrsQcw-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/menu-images/do-mee-SH8_JmrsQcw-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac3bd53a5af564ae7841.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/do-mee-SH8_JmrsQcw-unsplash.jpg?");

/***/ }),

/***/ "./src/menu-images/jennifer-burk-1-F5YvloMGA-unsplash.jpg":
/*!****************************************************************!*\
  !*** ./src/menu-images/jennifer-burk-1-F5YvloMGA-unsplash.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"826c6611ec1399fc2f44.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/jennifer-burk-1-F5YvloMGA-unsplash.jpg?");

/***/ }),

/***/ "./src/menu-images/nathan-dumlao-8Uv6eanQWzY-unsplash.jpg":
/*!****************************************************************!*\
  !*** ./src/menu-images/nathan-dumlao-8Uv6eanQWzY-unsplash.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a09269620b70af2499f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/nathan-dumlao-8Uv6eanQWzY-unsplash.jpg?");

/***/ }),

/***/ "./src/menu-images/petr-sidorov-DrTXmESWaN8-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/menu-images/petr-sidorov-DrTXmESWaN8-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93af4bee53eba5ffd909.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/petr-sidorov-DrTXmESWaN8-unsplash.jpg?");

/***/ }),

/***/ "./src/menu-images/pexels-anna-pyshniuk-6048537.jpg":
/*!**********************************************************!*\
  !*** ./src/menu-images/pexels-anna-pyshniuk-6048537.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6210b16594b9be116cd.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/pexels-anna-pyshniuk-6048537.jpg?");

/***/ }),

/***/ "./src/menu-images/pexels-dana-tentis-364657.jpg":
/*!*******************************************************!*\
  !*** ./src/menu-images/pexels-dana-tentis-364657.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1dae2c63ada765a24502.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/pexels-dana-tentis-364657.jpg?");

/***/ }),

/***/ "./src/menu-images/pexels-deeana-arts-2894651.jpg":
/*!********************************************************!*\
  !*** ./src/menu-images/pexels-deeana-arts-2894651.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b751eea9eb6606245e8.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/pexels-deeana-arts-2894651.jpg?");

/***/ }),

/***/ "./src/menu-images/pexels-olena-bohovyk-3323682.jpg":
/*!**********************************************************!*\
  !*** ./src/menu-images/pexels-olena-bohovyk-3323682.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4987e56e091db5a907f6.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/pexels-olena-bohovyk-3323682.jpg?");

/***/ }),

/***/ "./src/menu-images/pexels-polina-tankilevitch-3872373.jpg":
/*!****************************************************************!*\
  !*** ./src/menu-images/pexels-polina-tankilevitch-3872373.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3901b4239758a42953d5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/pexels-polina-tankilevitch-3872373.jpg?");

/***/ }),

/***/ "./src/menu-images/pexels-polina-tankilevitch-5848492.jpg":
/*!****************************************************************!*\
  !*** ./src/menu-images/pexels-polina-tankilevitch-5848492.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be6df020e78ea52abd40.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/pexels-polina-tankilevitch-5848492.jpg?");

/***/ }),

/***/ "./src/menu-images/pexels-wagner-soares-1129482.jpg":
/*!**********************************************************!*\
  !*** ./src/menu-images/pexels-wagner-soares-1129482.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6cde2794893a7ecfad5b.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/pexels-wagner-soares-1129482.jpg?");

/***/ }),

/***/ "./src/menu-images/vd-photography-h4XEpzG4Y-I-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/menu-images/vd-photography-h4XEpzG4Y-I-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"471052155532372cff15.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menu-images/vd-photography-h4XEpzG4Y-I-unsplash.jpg?");

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