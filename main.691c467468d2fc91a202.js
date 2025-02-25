/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/components/api.js":
/*!*************************************!*\
  !*** ./src/style/components/api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   getResponse: () => (/* binding */ getResponse),
/* harmony export */   loadingCardsInfo: () => (/* binding */ loadingCardsInfo),
/* harmony export */   loadingImageInfo: () => (/* binding */ loadingImageInfo)
/* harmony export */ });
// Конфиг
const config = {
  baseUrl: 'https://jsonplaceholder.typicode.com'
};

// Функция обработки ответа от сервера
const getResponse = result => {
  if (result.ok) {
    return result.json();
  }
  return Promise.reject(`Ошибка: ${result.status}`);
};

// Функция загрузки данных о названии и тексте с сервера
function loadingCardsInfo() {
  return fetch(`${config.baseUrl}/posts`, {
    method: 'GET'
  }).then(getResponse);
}

// Функция загрузки данных о фотографии с сервера
function loadingImageInfo() {
  return fetch(`${config.baseUrl}/photos`, {
    method: 'GET'
  }).then(getResponse);
}

/***/ }),

/***/ "./src/style/components/card-items.js":
/*!********************************************!*\
  !*** ./src/style/components/card-items.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialCards: () => (/* binding */ initialCards)
/* harmony export */ });
/* harmony import */ var _img_coins_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/coins.png */ "./src/img/coins.png");

const initialCards = [{
  url: _img_coins_png__WEBPACK_IMPORTED_MODULE_0__,
  heading: 'bridge',
  title: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  date: 'Posted by Eugenia, on July  24, 2019'
}, {
  url: _img_coins_png__WEBPACK_IMPORTED_MODULE_0__,
  heading: 'bridge',
  title: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  date: 'Posted by Eugenia, on July  24, 2019'
}, {
  url: _img_coins_png__WEBPACK_IMPORTED_MODULE_0__,
  heading: 'bridge',
  title: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  date: 'Posted by Eugenia, on July  24, 2019'
}, {
  url: _img_coins_png__WEBPACK_IMPORTED_MODULE_0__,
  heading: 'bridge',
  title: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  date: 'Posted by Eugenia, on July  24, 2019'
}, {
  url: _img_coins_png__WEBPACK_IMPORTED_MODULE_0__,
  heading: 'bridge',
  title: 'How to increase your productivity with a Music',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…',
  date: 'Posted by Eugenia, on July  24, 2019'
}];


/***/ }),

/***/ "./src/style/components/card.js":
/*!**************************************!*\
  !*** ./src/style/components/card.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardTemplate: () => (/* binding */ cardTemplate),
/* harmony export */   createCard: () => (/* binding */ createCard)
/* harmony export */ });
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
function createCard(cardTemplate, item) {
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__item-img');
  const cardTitle = cardElement.querySelector('.card__item-title');
  const cardParagraph = cardElement.querySelector('.card__item-paragraph');
  const cardMark = cardElement.querySelector('.card__item-mark');
  const cardDate = cardElement.querySelector('.card__item-date');
  cardImage.src = item.url;
  cardImage.alt = item.heading;
  cardTitle.textContent = item.heading;
  cardParagraph.textContent = item.title;
  cardMark.textContent = item.body;

  // Добавление жирности шрифта автору поста после фразы 'Posted by'
  if (item.date && typeof item.date === 'string') {
    const dateParts = item.date.match(/Posted by (.+), on (.+)/);
    if (dateParts) {
      cardDate.textContent = 'Posted by ';
      const authorSpan = document.createElement('span');
      authorSpan.textContent = dateParts[1];
      authorSpan.classList.add('weight-bold');
      cardDate.appendChild(authorSpan);
      cardDate.append(`, on ${dateParts[2]}`);
    } else {
      cardDate.textContent = item.date;
    }
  } else {
    cardDate.textContent = 'Unknown Date';
  }
  return cardElement;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-Regular.woff2 */ "./src/fonts/Montserrat-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-Regular.woff */ "./src/fonts/Montserrat-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-SemiBold.woff2 */ "./src/fonts/Montserrat-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-SemiBold.woff */ "./src/fonts/Montserrat-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-Bold.woff2 */ "./src/fonts/Montserrat-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-Bold.woff */ "./src/fonts/Montserrat-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mulish-Regular.woff2 */ "./src/fonts/Mulish-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mulish-Regular.woff */ "./src/fonts/Mulish-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mulish-SemiBold.woff2 */ "./src/fonts/Mulish-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mulish-SemiBold.woff */ "./src/fonts/Mulish-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mulish-Bold.woff2 */ "./src/fonts/Mulish-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mulish-Bold.woff */ "./src/fonts/Mulish-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LucidaGrande.woff2 */ "./src/fonts/LucidaGrande.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LucidaGrande.woff */ "./src/fonts/LucidaGrande.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LucidaGrande-Bold.woff2 */ "./src/fonts/LucidaGrande-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/LucidaGrande-Bold.woff */ "./src/fonts/LucidaGrande-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! @../../img/planet-img.png */ "./src/img/planet-img.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
}

input {
  font-family: inherit;
  color: inherit;
  box-shadow: none;
}

button {
  box-shadow: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Mulish";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Mulish";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Mulish";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Lucida Grande";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_12___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Lucida Grande";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_14___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_15___}) format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
body {
  font-family: "Montserrat", Arial, sans-serif;
  background-color: #131313;
  color: #000;
}

.main-wrapper {
  max-width: 1820px;
  margin: 0 auto;
}

.weight-bold {
  font-weight: bold;
}

.anti-skew {
  display: inline-block;
  transform: skewX(17deg);
}

.weight-bold {
  font-weight: bold;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 50px;
  padding-right: 50px;
}
.header__logos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  max-width: 156px;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  gap: 20px;
}
.header__nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 76px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
}
.header__nav-list {
  display: flex;
  align-items: center;
  gap: 42px;
  width: fit-content;
}
.header__nav-list-item {
  white-space: nowrap;
}
.header__contacts {
  margin-right: 0;
  display: flex;
  align-items: start;
  gap: 12.5px;
}
.header__contacts-phone {
  padding: 18px 23px 18px 20px;
  border: 1px solid #717171;
  transform: skewX(-17deg);
}
.header__contacts-phone-logo {
  max-width: 20px;
  transform: skewX(20deg);
  opacity: 0.4;
}
.header__contacts-smbt {
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  transform: skewX(-17deg);
}
.header__contacts-smbt-btn {
  padding: 20px 23px 21px 20px;
  border: 1px solid #717171;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  color: white;
  white-space: nowrap;
  background-color: #c2ab81;
  text-align: center;
  width: 250px;
  cursor: pointer;
  text-transform: uppercase;
}
.header__contacts-smbt-block {
  padding: 2px;
  border: 1px solid #717171;
  background-color: #fff;
  text-align: center;
  width: 100%;
  width: 1px;
}
.header__burger {
  display: none;
}

@media only screen and (max-width: 1536px) {
  .header__nav-list-item:nth-child(-n+2) {
    display: none;
  }
}
@media only screen and (max-width: 1400px) {
  .header__nav-list-item:nth-child(-n+3) {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  .header__nav-list-item:nth-child(-n+4) {
    display: none;
  }
}
@media only screen and (max-width: 992px) {
  .header__nav-list-item:nth-child(-n+5) {
    display: none;
  }
  .header__contacts-phone {
    margin-right: -8px;
  }
  .header__contacts-smbt {
    max-width: 212px;
    height: 60px;
  }
  .header__contacts-smbt-btn {
    max-width: 212px;
    height: 60px;
    height: 100%;
  }
  .header__nav {
    margin-left: 40px;
  }
  .header__wrapper {
    width: fit-content;
  }
}
@media only screen and (max-width: 768px) {
  .header {
    position: relative;
  }
  .header__burger {
    display: flex;
    position: relative;
    z-index: 55;
    align-items: center;
    justify-content: flex-start;
    width: 30px;
    height: 18px;
  }
  .header__burger::before, .header__burger::after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: #faf6f2;
    transition: all 0.3s ease 0s;
  }
  .header__burger::before {
    top: 0;
    width: 50%;
  }
  .header__burger::after {
    bottom: 0;
    width: 70%;
  }
  .header__burger-span {
    height: 2px;
    width: 100%;
    transform: scale(1);
    background-color: #faf6f2;
  }
  .header__burger.active .header__burger-span {
    transform: scale(0);
  }
  .header__burger.active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0, -50%);
    width: 100%;
  }
  .header__burger.active::after {
    top: 50%;
    transform: rotate(45deg) translate(0, 50%);
    width: 100%;
  }
  .header__wrapper {
    position: absolute;
    top: 119px;
    left: -200%;
    width: 100vw;
    height: 100vh;
    background-color: #131313;
    transition: all 0.3s;
    padding: 0 20px;
    display: block;
  }
  .header__wrapper.open {
    left: 0;
    z-index: 50;
  }
  .header__nav {
    position: static;
    padding: 0;
    width: auto;
    width: initial;
    height: auto;
    height: initial;
    z-index: 50;
    padding: 60px 50px;
    background-color: #131313;
    animation: burgerAnimation 0.4s;
    margin-left: 0;
  }
  .header__nav-list {
    flex-direction: column;
    align-items: start;
    gap: 30px;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    color: transparent;
  }
  .header__nav-link {
    text-shadow: -1px 0 #808080, 0 1px #808080, 1px 0 #808080, 0 -1px #808080;
  }
  @keyframes burgerAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @supports (text-stroke: 1px #808080) or (-webkit-text-stroke: 1px #808080) {
    .header__nav-link {
      -webkit-text-stroke: 1px #808080;
      text-stroke: 1px #808080;
      text-shadow: none;
    }
  }
  .header__contacts {
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 0;
  }
  .header__contacts-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px 23px 18px 20px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    min-height: 70px;
  }
  .header__contacts-phone-logo {
    max-width: 32px;
    margin-left: auto;
    margin-right: auto;
  }
  .header__contacts-smbt {
    max-width: none;
    height: auto;
    width: 100%;
    min-height: 70px;
  }
  .header__contacts-smbt-btn {
    max-width: none;
    height: auto;
    width: 100%;
  }
  .header__contacts-smbt-block {
    display: none;
  }
  .header__nav-list-item:nth-child(n) {
    display: flex;
  }
}
@media only screen and (max-width: 576px) {
  .header__contacts {
    display: flex;
  }
  .header__contacts-phone {
    gap: 30px;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
  }
  .header__nav-list {
    gap: 15px;
    font-size: 20px;
  }
}
@media only screen and (max-width: 390px) {
  .header__nav {
    padding: 0;
  }
}
.planet {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  border-radius: 50px 50px 0 0;
  min-height: 960px;
  position: relative;
  z-index: 0;
  justify-content: flex-end;
  align-content: end;
}
.planet__article {
  display: flex;
  flex-direction: column;
  padding-bottom: 96px;
  gap: 40px;
  max-width: 686px;
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 100px;
}
.planet__title {
  font-weight: 700;
  font-size: 42px;
  text-transform: uppercase;
  color: #fff;
  z-index: 1;
}
.planet__paragraph {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
  opacity: 0.79;
  color: #fff;
  z-index: 1;
}
.planet__contacts-smbt {
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  transform: skewX(-17deg);
}
.planet__contacts-smbt-btn {
  padding: 20px 23px 21px 20px;
  border: 1px solid #717171;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  color: white;
  white-space: nowrap;
  background-color: #c2ab81;
  text-align: center;
  width: 250px;
  cursor: pointer;
  text-transform: uppercase;
}
.planet__contacts-smbt-block {
  padding: 2px;
  border: 1px solid #717171;
  background-color: #fff;
  text-align: center;
  width: 100%;
  width: 1px;
}

.overlay {
  position: absolute;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;
  z-index: 0;
}

@media only screen and (max-width: 768px) {
  .planet {
    background-position: center;
    background-attachment: fixed;
    min-height: 907px;
  }
  .planet__article {
    padding-bottom: 76px;
    max-width: 686px;
    padding-left: 49px;
    padding-bottom: 52.31px;
    padding-left: 40px;
  }
  .planet__paragraph {
    opacity: 0.8;
    max-width: 450px;
  }
  .planet__title {
    font-size: 38px;
  }
}
@media only screen and (max-width: 576px) {
  .planet {
    background-position: bottom;
    background-attachment: local;
    min-height: 600px;
  }
  .planet__title {
    font-size: 30px;
    max-width: 300px;
  }
}
@media only screen and (max-width: 360px) {
  .planet {
    background-position: bottom;
    background-attachment: local;
    min-height: 495px;
  }
  .planet__article {
    padding-bottom: 52.31px;
    gap: 20px;
    padding-left: 14.1px;
  }
  .planet__paragraph {
    max-width: 300px;
    font-style: 14px;
  }
  .planet__title {
    font-size: 20px;
    max-width: 250px;
  }
  .planet__contacts-smbt {
    width: 228px;
    margin-left: 10px;
  }
  .planet__contacts-smbt-btn {
    max-width: 228px;
    height: 47px;
    padding: 14px 15px 17px 15px;
  }
}
.card {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 134px;
  padding-bottom: 156px;
}
.card__title {
  font-weight: 700;
  font-size: 42px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 53px;
}
.card__list {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 30px;
  gap: 30px;
  justify-content: center;
  justify-items: center;
  margin-bottom: 60px;
}
.card__item {
  max-width: 320px;
}
.card__item-img {
  width: 100%;
  display: block;
  max-height: 185px;
}
.card__item-container {
  color: #171717;
  padding-top: 25px;
  padding-bottom: 30px;
  padding-left: 23.7px;
  padding-right: 23.7px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  font-weight: 400;
  min-height: 436px;
}
.card__item-title {
  font-family: "Mulish", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.86;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}
.card__item-paragraph {
  font-size: 16px;
  line-height: 1.62;
}
.card__item-mark {
  font-size: 14px;
  line-height: 1.71;
  color: #666;
  flex-grow: 1;
}
.card__item-date {
  font-size: 14px;
  line-height: 1.71;
  font-size: 12px;
  color: #666;
  margin-top: auto;
}
.card__item-button {
  font-family: "Mulish", Helvetica, sans-serif;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #171717;
  white-space: nowrap;
  color: #fff;
}
.card__contacts-smbt {
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  transform: skewX(-17deg);
  justify-content: center;
}
.card__contacts-smbt-btn {
  padding: 20px 23px 21px 20px;
  border: 1px solid #717171;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  color: white;
  white-space: nowrap;
  background-color: #c2ab81;
  text-align: center;
  width: 250px;
  cursor: pointer;
  text-transform: uppercase;
}
.card__contacts-smbt-block {
  padding: 2px;
  border: 1px solid #717171;
  background-color: #fff;
  text-align: center;
  width: 100%;
  width: 1px;
}

@media only screen and (max-width: 768px) {
  .card {
    padding-top: 44px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .card__list {
    grid-template-columns: repeat(auto-fill, 334px);
    row-gap: 24px;
    column-gap: 20px;
  }
  .card__item {
    max-width: 334px;
  }
}
@media only screen and (max-width: 360px) {
  .card {
    padding-top: 48px;
    padding-bottom: 43px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .card__title {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .card__list {
    grid-template-columns: repeat(auto-fill, 330px);
    row-gap: 20px;
    margin-bottom: 38px;
  }
  .card__item {
    max-width: 330px;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/reset.css","webpack://./src/index.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_style.scss","webpack://./src/style/_var.scss","webpack://./src/style/_abstracts.scss","webpack://./src/style/blocks/_header.scss","webpack://./src/style/_mixins.scss","webpack://./src/style/blocks/_planet.scss","webpack://./src/style/blocks/_card.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\ninput {\n  font-family: inherit;\n  color: inherit;\n  box-shadow: none;\n}\n\nbutton {\n  box-shadow: none;\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\ninput {\n  font-family: inherit;\n  color: inherit;\n  box-shadow: none;\n}\n\nbutton {\n  box-shadow: none;\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"./fonts/Montserrat-Regular.woff2\") format(\"woff2\"), url(\"./fonts/Montserrat-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"./fonts/Montserrat-SemiBold.woff2\") format(\"woff2\"), url(\"./fonts/Montserrat-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"./fonts/Montserrat-Bold.woff2\") format(\"woff2\"), url(\"./fonts/Montserrat-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mulish\";\n  src: url(\"./fonts/Mulish-Regular.woff2\") format(\"woff2\"), url(\"./fonts/Mulish-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mulish\";\n  src: url(\"./fonts/Mulish-SemiBold.woff2\") format(\"woff2\"), url(\"./fonts/Mulish-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mulish\";\n  src: url(\"./fonts/Mulish-Bold.woff2\") format(\"woff2\"), url(\"./fonts/Mulish-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Lucida Grande\";\n  src: url(\"./fonts/LucidaGrande.woff2\") format(\"woff2\"), url(\"./fonts/LucidaGrande.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Lucida Grande\";\n  src: url(\"./fonts/LucidaGrande-Bold.woff2\") format(\"woff2\"), url(\"./fonts/LucidaGrande-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\nbody {\n  font-family: \"Montserrat\", Arial, sans-serif;\n  background-color: #131313;\n  color: #000;\n}\n\n.main-wrapper {\n  max-width: 1820px;\n  margin: 0 auto;\n}\n\n.weight-bold {\n  font-weight: bold;\n}\n\n.anti-skew {\n  display: inline-block;\n  transform: skewX(17deg);\n}\n\n.weight-bold {\n  font-weight: bold;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 28px;\n  padding-inline: 50px;\n}\n.header__logos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  max-width: 156px;\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-self: center;\n  width: 100%;\n  gap: 20px;\n}\n.header__nav {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-left: 76px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #fff;\n}\n.header__nav-list {\n  display: flex;\n  align-items: center;\n  gap: 42px;\n  width: fit-content;\n}\n.header__nav-list-item {\n  white-space: nowrap;\n}\n.header__contacts {\n  margin-right: 0;\n  display: flex;\n  align-items: start;\n  gap: 12.5px;\n}\n.header__contacts-phone {\n  padding: 18px 23px 18px 20px;\n  border: 1px solid #717171;\n  transform: skewX(-17deg);\n}\n.header__contacts-phone-logo {\n  max-width: 20px;\n  transform: skewX(20deg);\n  opacity: 0.4;\n}\n.header__contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n}\n.header__contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: #c2ab81;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.header__contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: #fff;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n.header__burger {\n  display: none;\n}\n\n@media only screen and (width <= 1536px) {\n  .header__nav-list-item:nth-child(-n+2) {\n    display: none;\n  }\n}\n@media only screen and (width <= 1400px) {\n  .header__nav-list-item:nth-child(-n+3) {\n    display: none;\n  }\n}\n@media only screen and (width <= 1200px) {\n  .header__nav-list-item:nth-child(-n+4) {\n    display: none;\n  }\n}\n@media only screen and (width <= 992px) {\n  .header__nav-list-item:nth-child(-n+5) {\n    display: none;\n  }\n  .header__contacts-phone {\n    margin-right: -8px;\n  }\n  .header__contacts-smbt {\n    max-width: 212px;\n    height: 60px;\n  }\n  .header__contacts-smbt-btn {\n    max-width: 212px;\n    height: 60px;\n    height: 100%;\n  }\n  .header__nav {\n    margin-left: 40px;\n  }\n  .header__wrapper {\n    width: fit-content;\n  }\n}\n@media only screen and (width <= 768px) {\n  .header {\n    position: relative;\n  }\n  .header__burger {\n    display: flex;\n    position: relative;\n    z-index: 55;\n    align-items: center;\n    justify-content: flex-start;\n    width: 30px;\n    height: 18px;\n  }\n  .header__burger::before, .header__burger::after {\n    content: \"\";\n    position: absolute;\n    height: 2px;\n    background-color: #faf6f2;\n    transition: all 0.3s ease 0s;\n  }\n  .header__burger::before {\n    top: 0;\n    width: 50%;\n  }\n  .header__burger::after {\n    bottom: 0;\n    width: 70%;\n  }\n  .header__burger-span {\n    height: 2px;\n    width: 100%;\n    transform: scale(1);\n    background-color: #faf6f2;\n  }\n  .header__burger.active .header__burger-span {\n    transform: scale(0);\n  }\n  .header__burger.active::before {\n    top: 50%;\n    transform: rotate(-45deg) translate(0, -50%);\n    width: 100%;\n  }\n  .header__burger.active::after {\n    top: 50%;\n    transform: rotate(45deg) translate(0, 50%);\n    width: 100%;\n  }\n  .header__wrapper {\n    position: absolute;\n    top: 119px;\n    left: -200%;\n    width: 100vw;\n    height: 100vh;\n    background-color: #131313;\n    transition: all 0.3s;\n    padding: 0 20px;\n    display: block;\n  }\n  .header__wrapper.open {\n    left: 0;\n    z-index: 50;\n  }\n  .header__nav {\n    position: static;\n    padding: 0;\n    width: initial;\n    height: initial;\n    z-index: 50;\n    padding: 60px 50px;\n    background-color: #131313;\n    animation: burgerAnimation 0.4s;\n    margin-left: 0;\n  }\n  .header__nav-list {\n    flex-direction: column;\n    align-items: start;\n    gap: 30px;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: transparent;\n  }\n  .header__nav-link {\n    text-shadow: -1px 0 #808080, 0 1px #808080, 1px 0 #808080, 0 -1px #808080;\n  }\n  @keyframes burgerAnimation {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @supports (text-stroke: 1px #808080) or (-webkit-text-stroke: 1px #808080) {\n    .header__nav-link {\n      -webkit-text-stroke: 1px #808080;\n      text-stroke: 1px #808080;\n      text-shadow: none;\n    }\n  }\n  .header__contacts {\n    flex-direction: column;\n    margin-top: auto;\n    margin-bottom: 0;\n  }\n  .header__contacts-phone {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 18px 23px 18px 20px;\n    width: 100%;\n    margin-inline: auto;\n    min-height: 70px;\n  }\n  .header__contacts-phone-logo {\n    max-width: 32px;\n    margin-inline: auto;\n  }\n  .header__contacts-smbt {\n    max-width: none;\n    height: auto;\n    width: 100%;\n    min-height: 70px;\n  }\n  .header__contacts-smbt-btn {\n    max-width: none;\n    height: auto;\n    width: 100%;\n  }\n  .header__contacts-smbt-block {\n    display: none;\n  }\n  .header__nav-list-item:nth-child(n) {\n    display: flex;\n  }\n}\n@media only screen and (width <= 576px) {\n  .header__contacts {\n    display: flex;\n  }\n  .header__contacts-phone {\n    gap: 30px;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n  }\n  .header__nav-list {\n    gap: 15px;\n    font-size: 20px;\n  }\n}\n@media only screen and (width <= 390px) {\n  .header__nav {\n    padding: 0;\n  }\n}\n.planet {\n  background-image: url(\"~@../../img/planet-img.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  border-radius: 50px 50px 0 0;\n  min-height: 960px;\n  position: relative;\n  z-index: 0;\n  justify-content: flex-end;\n  align-content: end;\n}\n.planet__article {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 96px;\n  gap: 40px;\n  max-width: 686px;\n  margin-left: 0;\n  margin-bottom: 0;\n  padding-left: 100px;\n}\n.planet__title {\n  font-weight: 700;\n  font-size: 42px;\n  text-transform: uppercase;\n  color: #fff;\n  z-index: 1;\n}\n.planet__paragraph {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 16px;\n  opacity: 0.79;\n  color: #fff;\n  z-index: 1;\n}\n.planet__contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n}\n.planet__contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: #c2ab81;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.planet__contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: #fff;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n\n.overlay {\n  position: absolute;\n  opacity: 0.6;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n  background-color: #000000;\n  z-index: 0;\n}\n\n@media only screen and (width <= 768px) {\n  .planet {\n    background-position: center;\n    background-attachment: fixed;\n    min-height: 907px;\n  }\n  .planet__article {\n    padding-bottom: 76px;\n    max-width: 686px;\n    padding-left: 49px;\n    padding-bottom: 52.31px;\n    padding-left: 40px;\n  }\n  .planet__paragraph {\n    opacity: 0.8;\n    max-width: 450px;\n  }\n  .planet__title {\n    font-size: 38px;\n  }\n}\n@media only screen and (width <= 576px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 600px;\n  }\n  .planet__title {\n    font-size: 30px;\n    max-width: 300px;\n  }\n}\n@media only screen and (width <= 360px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 495px;\n  }\n  .planet__article {\n    padding-bottom: 52.31px;\n    gap: 20px;\n    padding-left: 14.1px;\n  }\n  .planet__paragraph {\n    max-width: 300px;\n    font-style: 14px;\n  }\n  .planet__title {\n    font-size: 20px;\n    max-width: 250px;\n  }\n  .planet__contacts-smbt {\n    width: 228px;\n    margin-left: 10px;\n  }\n  .planet__contacts-smbt-btn {\n    max-width: 228px;\n    height: 47px;\n    padding: 14px 15px 17px 15px;\n  }\n}\n.card {\n  padding-inline: 50px;\n  padding-block-start: 134px;\n  padding-block-end: 156px;\n}\n.card__title {\n  font-weight: 700;\n  font-size: 42px;\n  text-transform: uppercase;\n  color: #fff;\n  margin-bottom: 53px;\n}\n.card__list {\n  width: 100%;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 320px);\n  gap: 30px;\n  justify-content: center;\n  justify-items: center;\n  margin-bottom: 60px;\n}\n.card__item {\n  max-width: 320px;\n}\n.card__item-img {\n  width: 100%;\n  display: block;\n  max-height: 185px;\n}\n.card__item-container {\n  color: #171717;\n  padding-block-start: 25px;\n  padding-block-end: 30px;\n  padding-inline: 23.7px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background-color: #fff;\n  font-weight: 400;\n  min-height: 436px;\n}\n.card__item-title {\n  font-family: \"Mulish\", Helvetica, sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.86;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.card__item-paragraph {\n  font-size: 16px;\n  line-height: 1.62;\n}\n.card__item-mark {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #666;\n  flex-grow: 1;\n}\n.card__item-date {\n  font-size: 14px;\n  line-height: 1.71;\n  font-size: 12px;\n  color: #666;\n  margin-top: auto;\n}\n.card__item-button {\n  font-family: \"Mulish\", Helvetica, sans-serif;\n  padding-block: 16px;\n  padding-inline: 20px;\n  background-color: #171717;\n  white-space: nowrap;\n  color: #fff;\n}\n.card__contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n  justify-content: center;\n}\n.card__contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: #c2ab81;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.card__contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: #fff;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n\n@media only screen and (width <= 768px) {\n  .card {\n    padding-block-start: 44px;\n    padding-inline: 40px;\n  }\n  .card__list {\n    grid-template-columns: repeat(auto-fill, 334px);\n    row-gap: 24px;\n    column-gap: 20px;\n  }\n  .card__item {\n    max-width: 334px;\n  }\n}\n@media only screen and (width <= 360px) {\n  .card {\n    padding-block-start: 48px;\n    padding-block-end: 43px;\n    padding-inline: 15px;\n  }\n  .card__title {\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n  .card__list {\n    grid-template-columns: repeat(auto-fill, 330px);\n    row-gap: 20px;\n    margin-bottom: 38px;\n  }\n  .card__item {\n    max-width: 330px;\n  }\n}","@font-face {\n  font-family: 'Montserrat';\n  src:\n    url('./fonts/Montserrat-Regular.woff2') format('woff2'),\n    url('./fonts/Montserrat-Regular.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src:\n    url('./fonts/Montserrat-SemiBold.woff2') format('woff2'),\n    url('./fonts/Montserrat-SemiBold.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src:\n    url('./fonts/Montserrat-Bold.woff2') format('woff2'),\n    url('./fonts/Montserrat-Bold.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Mulish';\n  src:\n    url('./fonts/Mulish-Regular.woff2') format('woff2'),\n    url('./fonts/Mulish-Regular.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Mulish';\n  src:\n    url('./fonts/Mulish-SemiBold.woff2') format('woff2'),\n    url('./fonts/Mulish-SemiBold.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Mulish';\n  src:\n    url('./fonts/Mulish-Bold.woff2') format('woff2'),\n    url('./fonts/Mulish-Bold.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Lucida Grande';\n  src:\n    url('./fonts/LucidaGrande.woff2') format('woff2'),\n    url('./fonts/LucidaGrande.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Lucida Grande';\n  src:\n    url('./fonts/LucidaGrande-Bold.woff2') format('woff2'),\n    url('./fonts/LucidaGrande-Bold.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n","@use '../style/var' as *;\n@use '../style/fonts' as *;\n\nbody {\n  font-family: $montserrat;\n  background-color: $main-bgc;\n  color: $black;\n}\n","$montserrat: 'Montserrat', Arial, sans-serif;\n$mulish: 'Mulish', Helvetica, sans-serif;\n$lucidaGrande: 'Lucida Grande', sans-serif;\n\n$weightBold: 700;\n$weightSemiBold: 600;\n$weightMedium: 500;\n$weightRegular: 400;\n\n$size-20: 20px;\n$size-16: 16px;\n$size-14: 14px;\n$size-12: 12px;\n\n$white: #fff;\n$black: #000;\n\n$main-bgc: #131313;\n$submit-color: #c2ab81;\n$paragraph-color: #171717;\n$mark-color: #666;\n$text-stroke-color: #808080;\n","@use './var' as *;\n\n.main-wrapper {\n  max-width: 1820px;\n  margin: 0 auto;\n}\n\n.weight-bold {\n  font-weight: bold;\n}\n\n.anti-skew {\n  display: inline-block;\n  transform: skewX(17deg);\n}\n\n.weight-bold {\n  font-weight: bold;\n}\n","@use '../var' as *;\n@use '../mixins' as *;\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 28px;\n  padding-inline: 50px;\n\n  &__logos {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    max-width: 156px;\n  }\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    width: 100%;\n    gap: 20px;\n  }\n\n  &__nav {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-left: 76px;\n    font-weight: $weightBold;\n    font-size: $size-14;\n    line-height: 1.5;\n    color: $white;\n\n    &-list {\n      display: flex;\n      align-items: center;\n      gap: 42px;\n      width: fit-content;\n\n      &-item {\n        white-space: nowrap;\n      }\n    }\n  }\n\n  &__contacts {\n    margin-right: 0;\n    display: flex;\n    align-items: start;\n    gap: 12.5px;\n\n    &-phone {\n      padding: 18px 23px 18px 20px;\n      border: 1px solid #717171;\n      transform: skewX(-17deg);\n\n      &-logo {\n        max-width: 20px;\n        transform: skewX(20deg);\n        opacity: 0.4;\n      }\n    }\n\n    &-smbt {\n      @include contacts-smbt;\n\n      &-btn {\n        @include contacts-smbt-btn;\n      }\n\n      &-block {\n        @include contacts-smbt-block;\n      }\n    }\n  }\n\n  &__burger {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 1536px) {\n  .header__nav-list-item:nth-child(-n + 2) {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 1400px) {\n  .header__nav-list-item:nth-child(-n + 3) {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 1200px) {\n  .header__nav-list-item:nth-child(-n + 4) {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 992px) {\n  .header__nav-list-item:nth-child(-n + 5) {\n    display: none;\n  }\n\n  .header__contacts-phone {\n    margin-right: -8px;\n  }\n\n  .header__contacts-smbt {\n    max-width: 212px;\n    height: 60px;\n  }\n\n  .header__contacts-smbt-btn {\n    max-width: 212px;\n    height: 60px;\n    height: 100%;\n  }\n\n  .header__nav {\n    margin-left: 40px;\n  }\n\n  .header__wrapper {\n    width: fit-content;\n  }\n}\n\n@media only screen and (width <= 768px) {\n  .header {\n    position: relative;\n  }\n\n  .header__burger {\n    display: flex;\n    position: relative;\n    z-index: 55;\n    align-items: center;\n    justify-content: flex-start;\n    width: 30px;\n    height: 18px;\n\n    &::before,\n    &::after {\n      content: '';\n      position: absolute;\n      height: 2px;\n      background-color: #faf6f2;\n      transition: all 0.3s ease 0s;\n    }\n\n    &::before {\n      top: 0;\n      width: 50%;\n    }\n\n    &::after {\n      bottom: 0;\n      width: 70%;\n    }\n\n    &-span {\n      height: 2px;\n      width: 100%;\n      transform: scale(1);\n      background-color: #faf6f2;\n    }\n  }\n\n  .header__burger.active .header__burger-span {\n    transform: scale(0);\n  }\n\n  .header__burger.active::before {\n    top: 50%;\n    transform: rotate(-45deg) translate(0, -50%);\n    width: 100%;\n  }\n\n  .header__burger.active::after {\n    top: 50%;\n    transform: rotate(45deg) translate(0, 50%);\n    width: 100%;\n  }\n\n  .header__wrapper {\n    position: absolute;\n    top: 119px;\n    left: -200%;\n    width: 100vw;\n    height: 100vh;\n    background-color: #131313;\n    transition: all 0.3s;\n    padding: 0 20px;\n    display: block;\n  }\n\n  .header__wrapper.open {\n    left: 0;\n    z-index: 50;\n  }\n\n  .header__nav {\n    position: static;\n    padding: 0;\n    width: initial;\n    height: initial;\n    z-index: 50;\n    padding: 60px 50px;\n    background-color: $main-bgc;\n    animation: burgerAnimation 0.4s;\n    margin-left: 0;\n\n    &-list {\n      flex-direction: column;\n      align-items: start;\n      gap: 30px;\n      font-weight: 700;\n      font-size: 36px;\n      line-height: 150%;\n      color: transparent;\n    }\n\n    &-link {\n      text-shadow:\n        -1px 0 #808080,\n        0 1px #808080,\n        1px 0 #808080,\n        0 -1px #808080;\n    }\n\n    @keyframes burgerAnimation {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n  }\n\n  @supports ((text-stroke: 1px #808080) or (-webkit-text-stroke: 1px #808080)) {\n    .header__nav-link {\n      -webkit-text-stroke: 1px #808080;\n      text-stroke: 1px #808080;\n      text-shadow: none;\n    }\n  }\n\n  .header__contacts {\n    flex-direction: column;\n    margin-top: auto;\n    margin-bottom: 0;\n\n    &-phone {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 18px 23px 18px 20px;\n      width: 100%;\n      margin-inline: auto;\n      min-height: 70px;\n\n      &-logo {\n        max-width: 32px;\n        margin-inline: auto;\n      }\n    }\n\n    &-smbt {\n      max-width: none;\n      height: auto;\n      width: 100%;\n      min-height: 70px;\n\n      &-btn {\n        max-width: none;\n        height: auto;\n        width: 100%;\n      }\n\n      &-block {\n        display: none;\n      }\n    }\n  }\n  .header__nav-list-item:nth-child(n) {\n    display: flex;\n  }\n}\n\n@media only screen and (width <= 576px) {\n  .header__contacts {\n    display: flex;\n  }\n\n  .header__contacts-phone {\n    gap: 30px;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n  }\n\n  .header__nav-list {\n    gap: 15px;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (width <= 390px) {\n  .header__contacts {\n    // position: absolute;\n    // top: 5;\n    // width: 1vw;\n\n    // z-index: 70;\n  }\n\n  .header__nav {\n    padding: 0;\n  }\n}\n","@use './var' as *;\n\n@mixin main-title {\n  font-weight: $weightBold;\n  font-size: 42px;\n  text-transform: uppercase;\n  color: $white;\n}\n\n@mixin contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n}\n\n@mixin contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: $weightBold;\n  font-size: $size-12;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: $submit-color;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n@mixin contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: $white;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n","@use '../var' as *;\n@use '../mixins' as *;\n\n.planet {\n  background-image: url('~@../../img/planet-img.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n\n  border-radius: 50px 50px 0 0;\n\n  min-height: 960px;\n\n  position: relative;\n  z-index: 0;\n\n  justify-content: flex-end;\n  align-content: end;\n\n  &__article {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 96px;\n    gap: 40px;\n    max-width: 686px;\n    margin-left: 0;\n    margin-bottom: 0;\n    padding-left: 100px;\n  }\n\n  &__title {\n    @include main-title;\n    z-index: 1;\n  }\n\n  &__paragraph {\n    font-size: $size-16;\n    font-weight: $weightRegular;\n    line-height: 1.5;\n    font-size: $size-16;\n    opacity: 0.79;\n    color: $white;\n    z-index: 1;\n  }\n\n  &__contacts-smbt {\n    @include contacts-smbt;\n\n    &-btn {\n      @include contacts-smbt-btn;\n    }\n\n    &-block {\n      @include contacts-smbt-block;\n    }\n  }\n}\n\n.overlay {\n  position: absolute;\n  opacity: 0.6;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n  background-color: #000000;\n  z-index: 0;\n}\n\n@media only screen and (width <= 768px) {\n  .planet {\n    background-position: center;\n    background-attachment: fixed;\n    min-height: 907px;\n\n    &__article {\n      padding-bottom: 76px;\n      max-width: 686px;\n      padding-left: 49px;\n      padding-bottom: 52.31px;\n      padding-left: 40px;\n    }\n\n    &__paragraph {\n      opacity: 0.8;\n      max-width: 450px;\n    }\n\n    &__title {\n      font-size: 38px;\n    }\n  }\n}\n\n@media only screen and (width <= 576px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 600px;\n\n    &__title {\n      font-size: 30px;\n      max-width: 300px;\n    }\n  }\n}\n\n@media only screen and (width <= 360px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 495px;\n\n    &__article {\n      padding-bottom: 52.31px;\n      gap: 20px;\n      padding-left: 14.1px;\n    }\n\n    &__paragraph {\n      max-width: 300px;\n      font-style: 14px;\n    }\n\n    &__title {\n      font-size: 20px;\n      max-width: 250px;\n    }\n\n    &__contacts-smbt {\n      width: 228px;\n      margin-left: 10px;\n      &-btn {\n        max-width: 228px;\n        height: 47px;\n        padding: 14px 15px 17px 15px;\n      }\n    }\n  }\n}\n","@use '../var' as *;\n@use '../mixins' as *;\n\n.card {\n  padding-inline: 50px;\n  padding-block-start: 134px;\n  padding-block-end: 156px;\n\n  &__title {\n    @include main-title;\n    margin-bottom: 53px;\n  }\n\n  &__list {\n    width: 100%;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 320px);\n    gap: 30px;\n    justify-content: center;\n    justify-items: center;\n    margin-bottom: 60px;\n  }\n\n  &__item {\n    max-width: 320px;\n\n    &-img {\n      width: 100%;\n      display: block;\n      max-height: 185px;\n    }\n\n    &-container {\n      color: $paragraph-color;\n      padding-block-start: 25px;\n      padding-block-end: 30px;\n      padding-inline: 23.7px;\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      background-color: $white;\n      font-weight: $weightRegular;\n      min-height: 436px;\n    }\n\n    &-title {\n      font-family: $mulish;\n      font-weight: $weightBold;\n      font-size: $size-14;\n      line-height: 1.86;\n      letter-spacing: 0.11em;\n      text-transform: uppercase;\n    }\n\n    &-paragraph {\n      font-size: $size-16;\n      line-height: 1.62;\n    }\n\n    &-mark {\n      font-size: $size-14;\n      line-height: 1.71;\n      color: $mark-color;\n      flex-grow: 1;\n    }\n\n    &-date {\n      font-size: $size-14;\n      line-height: 1.71;\n      font-size: $size-12;\n      color: $mark-color;\n      margin-top: auto;\n    }\n\n    &-button {\n      font-family: $mulish;\n      padding-block: 16px;\n      padding-inline: 20px;\n      background-color: $paragraph-color;\n      white-space: nowrap;\n      color: $white;\n    }\n  }\n\n  &__contacts-smbt {\n    @include contacts-smbt;\n    justify-content: center;\n    &-btn {\n      @include contacts-smbt-btn;\n    }\n\n    &-block {\n      @include contacts-smbt-block;\n    }\n  }\n}\n\n@media only screen and (width <= 768px) {\n  .card {\n    padding-block-start: 44px;\n    padding-inline: 40px;\n\n    &__list {\n      grid-template-columns: repeat(auto-fill, 334px);\n      row-gap: 24px;\n      column-gap: 20px;\n    }\n\n    &__item {\n      max-width: 334px;\n    }\n  }\n}\n\n@media only screen and (width <= 360px) {\n  .card {\n    padding-block-start: 48px;\n    padding-block-end: 43px;\n    padding-inline: 15px;\n\n    &__title {\n      font-size: $size-20;\n      margin-bottom: 30px;\n    }\n\n    &__list {\n      grid-template-columns: repeat(auto-fill, 330px);\n      row-gap: 20px;\n      margin-bottom: 38px;\n    }\n\n    &__item {\n      max-width: 330px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/magwai.svg */ "./src/img/magwai.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/magwai-ico-png.png */ "./src/img/magwai-ico-png.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/magwai-word-logo.svg */ "./src/img/magwai-word-logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/phone-logo.png */ "./src/img/phone-logo.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!doctype html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" />\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\" />\n\n    <title>Magwai</title>\n  </head>\n  <body>\n    <header class=\"header main-wrapper\">\n      <div class=\"header__burger\">\n        <span class=\"header__burger-span\"></span>\n      </div>\n\n      <div class=\"header__logos\">\n        <a href=\"/\">\n          <img\n            class=\"header__logos-icon\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n            alt=\"Логотип Магвай\"\n          />\n        </a>\n        <a href=\"/\">\n          <img\n            class=\"header__logos-word\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n            alt=\"Слово Магвай на латинице\"\n          />\n        </a>\n      </div>\n      <div class=\"header__wrapper\">\n        <nav class=\"header__nav\">\n          <ul class=\"header__nav-list\">\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">УСЛУГИ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">АБОНЕМЕНТЫ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">ПОЧЕМУ МЫ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">ОБОРУДОВАНИЕ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">АКЦИИ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">FAQ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">КОНТАКТЫ</a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"header__contacts\">\n          <a href=\"tel:+1234567890\" class=\"header__contacts-phone\">\n            <img\n              class=\"header__contacts-phone-logo\"\n              alt=\"Значок телефонной трубки\"\n              src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n            />\n          </a>\n          <div class=\"header__contacts-smbt\">\n            <button class=\"header__contacts-smbt-btn\">\n              <span class=\"anti-skew\">ОСТАВИТЬ ЗАЯВКУ</span>\n            </button>\n            <div class=\"header__contacts-smbt-block\"></div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <main class=\"main\">\n      <section class=\"planet\">\n        <div class=\"overlay\"></div>\n        <article class=\"planet__article main-wrapper\">\n          <h1 class=\"planet__title\">Полет Илона Маска и&nbsp;DOGIE COIN</h1>\n          <p class=\"planet__paragraph\">\n            В прошлый четверг все офигели от полета DOGIE COIN на марс.\n          </p>\n\n          <div class=\"planet__contacts-smbt\">\n            <button class=\"planet__contacts-smbt-btn\">\n              <span class=\"anti-skew\">ОСТАВИТЬ ЗАЯВКУ</span>\n            </button>\n            <div class=\"planet__contacts-smbt-block\"></div>\n          </div>\n        </article>\n      </section>\n\n      <section class=\"card main-wrapper\">\n        <h2 class=\"card__title\">Карточки</h2>\n        <ul class=\"card__list\"></ul>\n        <div class=\"card__contacts-smbt\">\n          <button class=\"card__contacts-smbt-btn\">\n            <span class=\"anti-skew\">загрузить еще</span>\n          </button>\n          <div class=\"card__contacts-smbt-block\"></div>\n        </div>\n      </section>\n    </main>\n\n    <footer>Подвал сайта</footer>\n\n    <template id=\"card-template\">\n      <li class=\"card__item\">\n        <img\n          class=\"card__item-img\"\n          src=\"<%= imagePath ? imagePath : '' %>\"\n          alt=\"\"\n        />\n        <div class=\"card__item-container\">\n          <h3 class=\"card__item-title\"></h3>\n          <p class=\"card__item-paragraph\"></p>\n          <p class=\"card__item-mark\"></p>\n          <p class=\"card__item-date\"></p>\n          <button class=\"card__item-button\">Continue reading</button>\n        </div>\n      </li>\n    </template>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/LucidaGrande-Bold.woff":
/*!******************************************!*\
  !*** ./src/fonts/LucidaGrande-Bold.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/LucidaGrande-Bold.woff";

/***/ }),

/***/ "./src/fonts/LucidaGrande-Bold.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/LucidaGrande-Bold.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/LucidaGrande-Bold.woff2";

/***/ }),

/***/ "./src/fonts/LucidaGrande.woff":
/*!*************************************!*\
  !*** ./src/fonts/LucidaGrande.woff ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/LucidaGrande.woff";

/***/ }),

/***/ "./src/fonts/LucidaGrande.woff2":
/*!**************************************!*\
  !*** ./src/fonts/LucidaGrande.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/LucidaGrande.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-Bold.woff":
/*!****************************************!*\
  !*** ./src/fonts/Montserrat-Bold.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Bold.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Bold.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Montserrat-Bold.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Bold.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Montserrat-SemiBold.woff":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-SemiBold.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-SemiBold.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-SemiBold.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/Montserrat-SemiBold.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-SemiBold.woff2";

/***/ }),

/***/ "./src/fonts/Mulish-Bold.woff":
/*!************************************!*\
  !*** ./src/fonts/Mulish-Bold.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Mulish-Bold.woff";

/***/ }),

/***/ "./src/fonts/Mulish-Bold.woff2":
/*!*************************************!*\
  !*** ./src/fonts/Mulish-Bold.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Mulish-Bold.woff2";

/***/ }),

/***/ "./src/fonts/Mulish-Regular.woff":
/*!***************************************!*\
  !*** ./src/fonts/Mulish-Regular.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Mulish-Regular.woff";

/***/ }),

/***/ "./src/fonts/Mulish-Regular.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Mulish-Regular.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Mulish-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Mulish-SemiBold.woff":
/*!****************************************!*\
  !*** ./src/fonts/Mulish-SemiBold.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Mulish-SemiBold.woff";

/***/ }),

/***/ "./src/fonts/Mulish-SemiBold.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Mulish-SemiBold.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Mulish-SemiBold.woff2";

/***/ }),

/***/ "./src/img/coins.png":
/*!***************************!*\
  !*** ./src/img/coins.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/coins.png";

/***/ }),

/***/ "./src/img/magwai-ico-png.png":
/*!************************************!*\
  !*** ./src/img/magwai-ico-png.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/magwai-ico-png.png";

/***/ }),

/***/ "./src/img/magwai-word-logo.svg":
/*!**************************************!*\
  !*** ./src/img/magwai-word-logo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/magwai-word-logo.svg";

/***/ }),

/***/ "./src/img/magwai.svg":
/*!****************************!*\
  !*** ./src/img/magwai.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/magwai.svg";

/***/ }),

/***/ "./src/img/phone-logo.png":
/*!********************************!*\
  !*** ./src/img/phone-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/phone-logo.png";

/***/ }),

/***/ "./src/img/planet-img.png":
/*!********************************!*\
  !*** ./src/img/planet-img.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/planet-img.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _img_coins_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/coins.png */ "./src/img/coins.png");
/* harmony import */ var _style_components_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/components/api */ "./src/style/components/api.js");
/* harmony import */ var _style_components_card_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/components/card-items */ "./src/style/components/card-items.js");
/* harmony import */ var _style_components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/components/card */ "./src/style/components/card.js");






const cardList = document.querySelector('.card__list');
const cardCotactsSmbtBtn = document.querySelector('.card__contacts-smbt-btn');

// Функция открытия слайдера
document.querySelector('.header__burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('open');
  document.querySelector('.header__wrapper').classList.toggle('open');
  document.querySelector('.header').classList.toggle('active');
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
});

// Функция рендера карточек с корневой директории
function renderCards() {
  _style_components_card_items__WEBPACK_IMPORTED_MODULE_4__.initialCards.forEach(item => {
    const newCardElement = (0,_style_components_card__WEBPACK_IMPORTED_MODULE_5__.createCard)(_style_components_card__WEBPACK_IMPORTED_MODULE_5__.cardTemplate, item);
    cardList.append(newCardElement);
  });
}

// Вывод данных о профиле и карточках с сервера
cardCotactsSmbtBtn.addEventListener('click', () => {
  Promise.all([(0,_style_components_api__WEBPACK_IMPORTED_MODULE_3__.loadingImageInfo)(), (0,_style_components_api__WEBPACK_IMPORTED_MODULE_3__.loadingCardsInfo)()]).then(_ref => {
    let [imageInfoResult, cardsInfoResult] = _ref;
    // Берём первые MAX_CARDS записей
    const MAX_CARDS = 10;
    const limitedCards = cardsInfoResult.slice(0, MAX_CARDS);
    const limitedImages = imageInfoResult.slice(0, MAX_CARDS);
    const cardsWidthImages = limitedCards.map((card, index) => ({
      ...card,
      url: limitedImages[index]?.url || _img_coins_png__WEBPACK_IMPORTED_MODULE_2__ // Подставляем картинку или дефолтную
    }));

    // Вывести карточки на страницу
    cardsWidthImages.slice(0, MAX_CARDS).forEach(function (item) {
      const eachElement = (0,_style_components_card__WEBPACK_IMPORTED_MODULE_5__.createCard)(_style_components_card__WEBPACK_IMPORTED_MODULE_5__.cardTemplate, item);
      cardList.append(eachElement);
    });
  }).catch(err => console.log(err));
});
renderCards(); // Рендерим все карточки при загрузке
})();

/******/ })()
;
//# sourceMappingURL=main.691c467468d2fc91a202.js.map