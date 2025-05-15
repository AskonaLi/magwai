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
var config = {
  baseUrl: 'https://jsonplaceholder.typicode.com'
};

// Функция обработки ответа от сервера
var getResponse = function getResponse(result) {
  if (result.ok) {
    return result.json();
  }
  return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(result.status));
};

// Функция загрузки данных о названии и тексте с сервера
function loadingCardsInfo() {
  return fetch("".concat(config.baseUrl, "/posts"), {
    method: 'GET'
  }).then(getResponse);
}

// Функция загрузки данных о фотографии с сервера
function loadingImageInfo() {
  return fetch("".concat(config.baseUrl, "/photos"), {
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

var initialCards = [{
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
/* harmony import */ var _img_coins_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/coins.png */ "./src/img/coins.png");

var cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
function createCard(cardTemplate, item) {
  var cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
  var cardImage = cardElement.querySelector('.card__item-img');
  var cardTitle = cardElement.querySelector('.card__item-title');
  var cardParagraph = cardElement.querySelector('.card__item-paragraph');
  var cardMark = cardElement.querySelector('.card__item-mark');
  var cardDate = cardElement.querySelector('.card__item-date');
  cardImage.src = item.url || _img_coins_png__WEBPACK_IMPORTED_MODULE_0__;
  cardImage.alt = item.heading;
  cardTitle.textContent = item.heading;
  cardParagraph.textContent = item.title;
  cardMark.textContent = item.body;
  cardImage.addEventListener('error', function handleError() {
    cardImage.src = _img_coins_png__WEBPACK_IMPORTED_MODULE_0__;
    cardImage.alt = 'default';
  });

  // Добавление жирности шрифта автору поста после фразы 'Posted by'
  if (item.date && typeof item.date === 'string') {
    var dateParts = item.date.match(/Posted by (.+), on (.+)/);
    if (dateParts) {
      cardDate.textContent = 'Posted by ';
      var authorSpan = document.createElement('span');
      authorSpan.textContent = dateParts[1];
      authorSpan.classList.add('weight-bold');
      cardDate.appendChild(authorSpan);
      cardDate.append(", on ".concat(dateParts[2]));
    } else {
      cardDate.textContent = item.date;
    }
  } else {
    cardDate.textContent = 'Unknown Date';
  }
  return cardElement;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***********************************************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Regular.woff2 */ "./src/fonts/Montserrat-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Regular.woff */ "./src/fonts/Montserrat-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-SemiBold.woff2 */ "./src/fonts/Montserrat-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-SemiBold.woff */ "./src/fonts/Montserrat-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Bold.woff2 */ "./src/fonts/Montserrat-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Bold.woff */ "./src/fonts/Montserrat-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Mulish-Regular.woff2 */ "./src/fonts/Mulish-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Mulish-Regular.woff */ "./src/fonts/Mulish-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Mulish-SemiBold.woff2 */ "./src/fonts/Mulish-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Mulish-SemiBold.woff */ "./src/fonts/Mulish-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Mulish-Bold.woff2 */ "./src/fonts/Mulish-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Mulish-Bold.woff */ "./src/fonts/Mulish-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LucidaGrande.woff2 */ "./src/fonts/LucidaGrande.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LucidaGrande.woff */ "./src/fonts/LucidaGrande.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LucidaGrande-Bold.woff2 */ "./src/fonts/LucidaGrande-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LucidaGrande-Bold.woff */ "./src/fonts/LucidaGrande-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! img/planet-img.png */ "./src/img/planet-img.png"), __webpack_require__.b);
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
___CSS_LOADER_EXPORT___.push([module.id, `*,:after,:before{box-sizing:border-box}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:initial}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}a{color:inherit;text-decoration:none}input{font-family:inherit}button,input{box-shadow:none;color:inherit}button{background:none;border:none;cursor:pointer;font:inherit;margin:0;padding:0}@font-face{font-display:swap;font-family:Montserrat;font-style:normal;font-weight:400;src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff")}@font-face{font-display:swap;font-family:Montserrat;font-style:normal;font-weight:600;src:url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff")}@font-face{font-display:swap;font-family:Montserrat;font-style:normal;font-weight:700;src:url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff")}@font-face{font-display:swap;font-family:Mulish;font-style:normal;font-weight:400;src:url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff")}@font-face{font-display:swap;font-family:Mulish;font-style:normal;font-weight:600;src:url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("woff")}@font-face{font-display:swap;font-family:Mulish;font-style:normal;font-weight:700;src:url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format("woff")}@font-face{font-display:swap;font-family:Lucida Grande;font-style:normal;font-weight:400;src:url(${___CSS_LOADER_URL_REPLACEMENT_12___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format("woff")}@font-face{font-display:swap;font-family:Lucida Grande;font-style:normal;font-weight:700;src:url(${___CSS_LOADER_URL_REPLACEMENT_14___}) format("woff2"),url(${___CSS_LOADER_URL_REPLACEMENT_15___}) format("woff")}body{background-color:#131313;color:#000;font-family:Montserrat,Arial,sans-serif}.card__contacts-smbt:hover .card__contacts-smbt-block,.header__contacts-smbt:hover .header__contacts-smbt-block,.planet__contacts-smbt:hover .planet__contacts-smbt-block{background-color:#b88d3d;transition:background-color .3s ease}.main-wrapper{margin:0 auto;max-width:1820px}.weight-bold{font-weight:700}.anti-skew{display:inline-block;transform:skewX(17deg)}.header{padding-block:28px;padding-inline:50px}.header,.header__logos{align-items:center;display:flex;justify-content:space-between}.header__logos{gap:8px;max-width:156px}.header__wrapper{align-self:center;gap:20px}.header__nav,.header__wrapper{display:flex;justify-content:space-between;width:100%}.header__nav{color:#fff;font-size:14px;font-weight:700;line-height:1.5;margin-left:76px}.header__nav-list{align-items:center;display:flex;gap:42px;width:fit-content}.header__nav-list-item{white-space:nowrap}.header__nav-list-item:hover{color:#c2ab81;transition:color .4s ease}.header__contacts{align-items:start;display:flex;gap:12.5px;margin-right:0}.header__contacts-phone{box-shadow:inset 0 0 0 2px #717171;height:100%;padding:18px 23px 18px 20px;transform:skewX(-17deg)}.header__contacts-phone:hover{box-shadow:inset 0 0 0 2px #b88d3d;transition:all .4s ease}.header__contacts-phone:hover .header__contacts-phone-logo{color:#b88d3d;transition:all .4s ease}.header__contacts-phone-logo{color:#717171;max-width:20px;transform:skewX(20deg)}.header__contacts-smbt{display:flex;flex-direction:row;gap:4px;transform:skewX(-17deg);width:100%}.header__contacts-smbt-btn{background-color:#c2ab81;border:1px solid #717171;color:#fff;cursor:pointer;font-size:12px;font-weight:700;line-height:1.5;padding:20px 23px 21px 20px;text-align:center;text-transform:uppercase;white-space:nowrap;width:250px}.header__contacts-smbt-btn:hover{background-color:#b88d3d;transition:background-color .4s ease}.header__contacts-smbt-block{background-color:#fff;border:1px solid #717171;padding:2px;text-align:center;width:100%;width:1px}.header__burger{display:none}@media only screen and (width <= 1536px){.header__nav-list-item:nth-child(-n+2){display:none}}@media only screen and (width <= 1400px){.header__nav-list-item:nth-child(-n+3){display:none}}@media only screen and (width <= 1200px){.header__nav-list-item:nth-child(-n+4){display:none}}@media only screen and (width <= 992px){.header__wrapper{width:fit-content}.header__nav{margin-left:40px}.header__contacts-phone{margin-right:-8px}.header__contacts-smbt,.header__contacts-smbt-btn{height:60px;max-width:212px}.header__contacts-smbt-btn{height:100%}.header__nav-list-item:nth-child(-n+5){display:none}}@media only screen and (width <= 768px){.header{position:relative}.header__wrapper{background-color:#131313;display:block;height:100vh;left:-200%;padding:0 20px;position:absolute;top:119px;transition:all .3s;width:100vw}.header__nav{animation:burgerAnimation .4s;background-color:#131313;height:auto;margin-left:0;padding:60px 50px;position:static;width:auto;z-index:50}.header__nav-list{align-items:start;color:#0000;flex-direction:column;font-size:36px;font-weight:700;gap:30px;line-height:150%}.header__nav-link{text-shadow:-1px 0 grey,0 1px grey,1px 0 grey,0 -1px grey}@keyframes burgerAnimation{0%{opacity:0}to{opacity:1}}.header__burger{align-items:center;cursor:pointer;display:flex;height:18px;justify-content:flex-start;position:relative;width:30px;z-index:55}.header__burger:after,.header__burger:before{background-color:#faf6f2;content:"";height:2px;position:absolute;transition:all .3s ease 0s}.header__burger:before{top:0;width:50%}.header__burger:after{bottom:0;width:70%}.header__burger-span{background-color:#faf6f2;height:2px;transform:scale(1);width:100%}.header__contacts{flex-direction:column;margin-bottom:0;margin-top:auto}.header__contacts-phone{align-items:center;display:flex;justify-content:center;margin-inline:auto;min-height:70px;padding:18px 23px 18px 20px;width:100%}.header__contacts-phone-logo{margin-inline:auto;max-width:32px}.header__contacts-smbt{min-height:70px}.header__contacts-smbt,.header__contacts-smbt-btn{height:auto;max-width:none;width:100%}.header__contacts-smbt-block{display:none}.header__burger.active .header__burger-span{transform:scale(0)}.header__burger.active:before{top:50%;transform:rotate(-45deg) translateY(-50%);width:100%}.header__burger.active:after{top:50%;transform:rotate(45deg) translateY(50%);width:100%}.header__wrapper.open{left:0;z-index:50}@supports (text-stroke:1px #808080) or (-webkit-text-stroke:1px #808080){.header__nav-link{-webkit-text-stroke:1px grey;text-stroke:1px grey;text-shadow:none}}.header__nav-list-item:nth-child(n){display:flex}}@media only screen and (width <= 576px){.header__contacts{display:flex}.header__contacts-phone{font-size:36px;font-weight:700;gap:30px;line-height:150%}.header__nav-list{font-size:20px;gap:15px}}@media only screen and (width <= 390px){.header__nav{padding:0 0 51px}}.planet{align-content:end;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_16___});background-repeat:no-repeat;background-size:cover;border-radius:50px 50px 0 0;justify-content:flex-end;min-height:960px;position:relative;width:100%;z-index:0}.planet__article{display:flex;flex-direction:column;gap:40px;margin-bottom:0;margin-left:0;max-width:686px;padding-bottom:96px;padding-left:100px}.planet__title{color:#fff;font-size:42px;font-weight:700;text-transform:uppercase;z-index:1}.planet__paragraph{color:#fff;font-size:16px;font-weight:400;line-height:1.5;opacity:.79;z-index:1}.planet__contacts-smbt{display:flex;flex-direction:row;gap:4px;transform:skewX(-17deg);width:100%}.planet__contacts-smbt-btn{background-color:#c2ab81;border:1px solid #717171;color:#fff;cursor:pointer;font-size:12px;font-weight:700;line-height:1.5;padding:20px 23px 21px 20px;text-align:center;text-transform:uppercase;white-space:nowrap;width:250px}.planet__contacts-smbt-btn:hover{background-color:#b88d3d;transition:background-color .4s ease}.planet__contacts-smbt-block{background-color:#fff;border:1px solid #717171;padding:2px;text-align:center;width:100%;width:1px}.overlay{background-color:#000;height:100%;inset:0;opacity:.6;position:absolute;width:100%;z-index:0}@media only screen and (width <= 768px){.planet{background-attachment:fixed;background-position:50%;min-height:907px}.planet__article{max-width:686px;padding-bottom:52.31px;padding-left:40px}.planet__paragraph{max-width:450px;opacity:.8}.planet__title{font-size:38px}}@media only screen and (width <= 576px){.planet{background-attachment:local;background-position:bottom;min-height:600px}.planet__title{font-size:30px;max-width:300px}}@media only screen and (width <= 360px){.planet{background-attachment:local;background-position:bottom;min-height:495px}.planet__article{gap:20px;padding-bottom:52.31px;padding-left:14.1px}.planet__paragraph{font-style:14px;max-width:300px}.planet__title{font-size:20px;max-width:250px}.planet__contacts-smbt{margin-left:10px;width:228px}.planet__contacts-smbt-btn{height:47px;max-width:228px;padding:14px 15px 17px}}.card{padding-block-end:156px;padding-block-start:134px;padding-inline:50px}.card__title{color:#fff;font-size:42px;font-weight:700;margin-bottom:53px;text-transform:uppercase}.card__list{display:grid;gap:30px;grid-template-columns:repeat(auto-fill,320px);justify-content:center;justify-items:center;margin:0 auto 60px;width:100%}.card__item{max-width:320px}.card__item-img{display:block;max-height:185px;width:100%}.card__item-container{background-color:#fff;color:#171717;display:flex;flex-direction:column;font-weight:400;gap:20px;min-height:436px;padding-block-end:30px;padding-block-start:25px;padding-inline:23.7px}.card__item-title{font-family:Mulish,Helvetica,sans-serif;font-size:14px;font-weight:700;letter-spacing:.11em;line-height:1.86;text-transform:uppercase}.card__item-paragraph{font-size:16px;line-height:1.62}.card__item-mark{flex-grow:1}.card__item-date,.card__item-mark{color:#666;font-size:14px;line-height:1.71}.card__item-date{font-size:12px;margin-top:auto}.card__item-button{background-color:#171717;color:#fff;font-family:Mulish,Helvetica,sans-serif;padding-block:16px;padding-inline:20px;white-space:nowrap}.card__item-button:hover{background-color:#fff;box-shadow:inset 0 0 0 2px #171717;color:#171717;transition:all .4s ease}.card__contacts-smbt{display:flex;flex-direction:row;gap:4px;justify-content:center;transform:skewX(-17deg);width:100%}.card__contacts-smbt-btn{background-color:#c2ab81;border:1px solid #717171;color:#fff;cursor:pointer;font-size:12px;font-weight:700;line-height:1.5;padding:20px 23px 21px 20px;text-align:center;text-transform:uppercase;white-space:nowrap;width:250px}.card__contacts-smbt-btn:hover{background-color:#b88d3d;transition:background-color .4s ease}.card__contacts-smbt-block{background-color:#fff;border:1px solid #717171;padding:2px;text-align:center;width:100%;width:1px}@media only screen and (width <= 768px){.card{padding-block-start:44px;padding-inline:40px}.card__list{column-gap:20px;grid-template-columns:repeat(auto-fill,334px);row-gap:24px}.card__item{max-width:334px}}@media only screen and (width <= 360px){.card{padding-block-end:43px;padding-block-start:48px;padding-inline:15px}.card__title{font-size:20px;margin-bottom:30px}.card__list{grid-template-columns:repeat(auto-fill,330px);margin-bottom:38px;row-gap:20px}.card__item{max-width:330px}}`, "",{"version":3,"sources":["webpack://./src/style/reset.css","webpack://./src/index.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_style.scss","webpack://./src/style/_var.scss","webpack://./src/style/_abstracts.scss","webpack://./src/style/blocks/_header.scss","webpack://./src/style/_mixins.scss","webpack://./src/style/blocks/_planet.scss","webpack://./src/style/blocks/_card.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\ninput {\n  font-family: inherit;\n  color: inherit;\n  box-shadow: none;\n}\n\nbutton {\n  box-shadow: none;\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\ninput {\n  font-family: inherit;\n  color: inherit;\n  box-shadow: none;\n}\n\nbutton {\n  box-shadow: none;\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"./fonts/Montserrat-Regular.woff2\") format(\"woff2\"), url(\"./fonts/Montserrat-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"./fonts/Montserrat-SemiBold.woff2\") format(\"woff2\"), url(\"./fonts/Montserrat-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"./fonts/Montserrat-Bold.woff2\") format(\"woff2\"), url(\"./fonts/Montserrat-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mulish\";\n  src: url(\"./fonts/Mulish-Regular.woff2\") format(\"woff2\"), url(\"./fonts/Mulish-Regular.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mulish\";\n  src: url(\"./fonts/Mulish-SemiBold.woff2\") format(\"woff2\"), url(\"./fonts/Mulish-SemiBold.woff\") format(\"woff\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Mulish\";\n  src: url(\"./fonts/Mulish-Bold.woff2\") format(\"woff2\"), url(\"./fonts/Mulish-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Lucida Grande\";\n  src: url(\"./fonts/LucidaGrande.woff2\") format(\"woff2\"), url(\"./fonts/LucidaGrande.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Lucida Grande\";\n  src: url(\"./fonts/LucidaGrande-Bold.woff2\") format(\"woff2\"), url(\"./fonts/LucidaGrande-Bold.woff\") format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\nbody {\n  font-family: \"Montserrat\", Arial, sans-serif;\n  background-color: #131313;\n  color: #000;\n}\n\n.header__contacts-smbt:hover .header__contacts-smbt-block,\n.planet__contacts-smbt:hover .planet__contacts-smbt-block,\n.card__contacts-smbt:hover .card__contacts-smbt-block {\n  background-color: #b88d3d;\n  transition: background-color 0.3s ease;\n}\n\n.main-wrapper {\n  max-width: 1820px;\n  margin: 0 auto;\n}\n\n.weight-bold {\n  font-weight: bold;\n}\n\n.anti-skew {\n  display: inline-block;\n  transform: skewX(17deg);\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 28px;\n  padding-inline: 50px;\n}\n.header__logos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  max-width: 156px;\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-self: center;\n  width: 100%;\n  gap: 20px;\n}\n.header__nav {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-left: 76px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #fff;\n}\n.header__nav-list {\n  display: flex;\n  align-items: center;\n  gap: 42px;\n  width: fit-content;\n}\n.header__nav-list-item {\n  white-space: nowrap;\n}\n.header__nav-list-item:hover {\n  transition: color 0.4s ease;\n  color: #c2ab81;\n}\n.header__contacts {\n  margin-right: 0;\n  display: flex;\n  align-items: start;\n  gap: 12.5px;\n}\n.header__contacts-phone {\n  padding: 18px 23px 18px 20px;\n  box-shadow: inset 0 0 0 2px #717171;\n  transform: skewX(-17deg);\n  height: 100%;\n}\n.header__contacts-phone:hover {\n  transition: all 0.4s ease;\n  box-shadow: inset 0 0 0 2px #b88d3d;\n}\n.header__contacts-phone:hover .header__contacts-phone-logo {\n  transition: all 0.4s ease;\n  color: #b88d3d;\n}\n.header__contacts-phone-logo {\n  color: #717171;\n  max-width: 20px;\n  transform: skewX(20deg);\n}\n.header__contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n}\n.header__contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: #c2ab81;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.header__contacts-smbt-btn:hover {\n  transition: background-color 0.4s ease;\n  background-color: #b88d3d;\n}\n.header__contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: #fff;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n.header__burger {\n  display: none;\n}\n\n@media only screen and (width <= 1536px) {\n  .header__nav-list-item:nth-child(-n+2) {\n    display: none;\n  }\n}\n@media only screen and (width <= 1400px) {\n  .header__nav-list-item:nth-child(-n+3) {\n    display: none;\n  }\n}\n@media only screen and (width <= 1200px) {\n  .header__nav-list-item:nth-child(-n+4) {\n    display: none;\n  }\n}\n@media only screen and (width <= 992px) {\n  .header__wrapper {\n    width: fit-content;\n  }\n  .header__nav {\n    margin-left: 40px;\n  }\n  .header__contacts-phone {\n    margin-right: -8px;\n  }\n  .header__contacts-smbt {\n    max-width: 212px;\n    height: 60px;\n  }\n  .header__contacts-smbt-btn {\n    max-width: 212px;\n    height: 60px;\n    height: 100%;\n  }\n  .header__nav-list-item:nth-child(-n+5) {\n    display: none;\n  }\n}\n@media only screen and (width <= 768px) {\n  .header {\n    position: relative;\n  }\n  .header__wrapper {\n    position: absolute;\n    top: 119px;\n    left: -200%;\n    width: 100vw;\n    height: 100vh;\n    background-color: #131313;\n    transition: all 0.3s;\n    padding: 0 20px;\n    display: block;\n  }\n  .header__nav {\n    position: static;\n    padding: 0;\n    width: initial;\n    height: initial;\n    z-index: 50;\n    padding: 60px 50px;\n    background-color: #131313;\n    animation: burgerAnimation 0.4s;\n    margin-left: 0;\n  }\n  .header__nav-list {\n    flex-direction: column;\n    align-items: start;\n    gap: 30px;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: transparent;\n  }\n  .header__nav-link {\n    text-shadow: -1px 0 #808080, 0 1px #808080, 1px 0 #808080, 0 -1px #808080;\n  }\n  @keyframes burgerAnimation {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  .header__burger {\n    display: flex;\n    position: relative;\n    z-index: 55;\n    align-items: center;\n    justify-content: flex-start;\n    width: 30px;\n    height: 18px;\n    cursor: pointer;\n  }\n  .header__burger::before, .header__burger::after {\n    content: \"\";\n    position: absolute;\n    height: 2px;\n    background-color: #faf6f2;\n    transition: all 0.3s ease 0s;\n  }\n  .header__burger::before {\n    top: 0;\n    width: 50%;\n  }\n  .header__burger::after {\n    bottom: 0;\n    width: 70%;\n  }\n  .header__burger-span {\n    height: 2px;\n    width: 100%;\n    transform: scale(1);\n    background-color: #faf6f2;\n  }\n  .header__contacts {\n    flex-direction: column;\n    margin-top: auto;\n    margin-bottom: 0;\n  }\n  .header__contacts-phone {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 18px 23px 18px 20px;\n    width: 100%;\n    margin-inline: auto;\n    min-height: 70px;\n  }\n  .header__contacts-phone-logo {\n    max-width: 32px;\n    margin-inline: auto;\n  }\n  .header__contacts-smbt {\n    max-width: none;\n    height: auto;\n    width: 100%;\n    min-height: 70px;\n  }\n  .header__contacts-smbt-btn {\n    max-width: none;\n    height: auto;\n    width: 100%;\n  }\n  .header__contacts-smbt-block {\n    display: none;\n  }\n  .header__burger.active .header__burger-span {\n    transform: scale(0);\n  }\n  .header__burger.active::before {\n    top: 50%;\n    transform: rotate(-45deg) translate(0, -50%);\n    width: 100%;\n  }\n  .header__burger.active::after {\n    top: 50%;\n    transform: rotate(45deg) translate(0, 50%);\n    width: 100%;\n  }\n  .header__wrapper.open {\n    left: 0;\n    z-index: 50;\n  }\n  @supports (text-stroke: 1px #808080) or (-webkit-text-stroke: 1px #808080) {\n    .header__nav-link {\n      -webkit-text-stroke: 1px #808080;\n      text-stroke: 1px #808080;\n      text-shadow: none;\n    }\n  }\n  .header__nav-list-item:nth-child(n) {\n    display: flex;\n  }\n}\n@media only screen and (width <= 576px) {\n  .header__contacts {\n    display: flex;\n  }\n  .header__contacts-phone {\n    gap: 30px;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n  }\n  .header__nav-list {\n    gap: 15px;\n    font-size: 20px;\n  }\n}\n@media only screen and (width <= 390px) {\n  .header__nav {\n    padding: 0 0 51px;\n  }\n}\n.planet {\n  background-image: url(\"~@../../img/planet-img.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  border-radius: 50px 50px 0 0;\n  min-height: 960px;\n  position: relative;\n  z-index: 0;\n  justify-content: flex-end;\n  align-content: end;\n}\n.planet__article {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 96px;\n  gap: 40px;\n  max-width: 686px;\n  margin-left: 0;\n  margin-bottom: 0;\n  padding-left: 100px;\n}\n.planet__title {\n  font-weight: 700;\n  font-size: 42px;\n  text-transform: uppercase;\n  color: #fff;\n  z-index: 1;\n}\n.planet__paragraph {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  font-size: 16px;\n  opacity: 0.79;\n  color: #fff;\n  z-index: 1;\n}\n.planet__contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n}\n.planet__contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: #c2ab81;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.planet__contacts-smbt-btn:hover {\n  transition: background-color 0.4s ease;\n  background-color: #b88d3d;\n}\n.planet__contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: #fff;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n\n.overlay {\n  position: absolute;\n  opacity: 0.6;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n  background-color: #000000;\n  z-index: 0;\n}\n\n@media only screen and (width <= 768px) {\n  .planet {\n    background-position: center;\n    background-attachment: fixed;\n    min-height: 907px;\n  }\n  .planet__article {\n    padding-bottom: 76px;\n    max-width: 686px;\n    padding-left: 49px;\n    padding-bottom: 52.31px;\n    padding-left: 40px;\n  }\n  .planet__paragraph {\n    opacity: 0.8;\n    max-width: 450px;\n  }\n  .planet__title {\n    font-size: 38px;\n  }\n}\n@media only screen and (width <= 576px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 600px;\n  }\n  .planet__title {\n    font-size: 30px;\n    max-width: 300px;\n  }\n}\n@media only screen and (width <= 360px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 495px;\n  }\n  .planet__article {\n    padding-bottom: 52.31px;\n    gap: 20px;\n    padding-left: 14.1px;\n  }\n  .planet__paragraph {\n    max-width: 300px;\n    font-style: 14px;\n  }\n  .planet__title {\n    font-size: 20px;\n    max-width: 250px;\n  }\n  .planet__contacts-smbt {\n    width: 228px;\n    margin-left: 10px;\n  }\n  .planet__contacts-smbt-btn {\n    max-width: 228px;\n    height: 47px;\n    padding: 14px 15px 17px 15px;\n  }\n}\n.card {\n  padding-inline: 50px;\n  padding-block-start: 134px;\n  padding-block-end: 156px;\n}\n.card__title {\n  font-weight: 700;\n  font-size: 42px;\n  text-transform: uppercase;\n  color: #fff;\n  margin-bottom: 53px;\n}\n.card__list {\n  width: 100%;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 320px);\n  gap: 30px;\n  justify-content: center;\n  justify-items: center;\n  margin-bottom: 60px;\n}\n.card__item {\n  max-width: 320px;\n}\n.card__item-img {\n  width: 100%;\n  display: block;\n  max-height: 185px;\n}\n.card__item-container {\n  color: #171717;\n  padding-block-start: 25px;\n  padding-block-end: 30px;\n  padding-inline: 23.7px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background-color: #fff;\n  font-weight: 400;\n  min-height: 436px;\n}\n.card__item-title {\n  font-family: \"Mulish\", Helvetica, sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.86;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n.card__item-paragraph {\n  font-size: 16px;\n  line-height: 1.62;\n}\n.card__item-mark {\n  font-size: 14px;\n  line-height: 1.71;\n  color: #666;\n  flex-grow: 1;\n}\n.card__item-date {\n  font-size: 14px;\n  line-height: 1.71;\n  font-size: 12px;\n  color: #666;\n  margin-top: auto;\n}\n.card__item-button {\n  font-family: \"Mulish\", Helvetica, sans-serif;\n  padding-block: 16px;\n  padding-inline: 20px;\n  background-color: #171717;\n  white-space: nowrap;\n  color: #fff;\n}\n.card__item-button:hover {\n  background-color: #fff;\n  color: #171717;\n  box-shadow: inset 0 0 0 2px #171717;\n  transition: all 0.4s ease;\n}\n.card__contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n  justify-content: center;\n}\n.card__contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: #c2ab81;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.card__contacts-smbt-btn:hover {\n  transition: background-color 0.4s ease;\n  background-color: #b88d3d;\n}\n.card__contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: #fff;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n\n@media only screen and (width <= 768px) {\n  .card {\n    padding-block-start: 44px;\n    padding-inline: 40px;\n  }\n  .card__list {\n    grid-template-columns: repeat(auto-fill, 334px);\n    row-gap: 24px;\n    column-gap: 20px;\n  }\n  .card__item {\n    max-width: 334px;\n  }\n}\n@media only screen and (width <= 360px) {\n  .card {\n    padding-block-start: 48px;\n    padding-block-end: 43px;\n    padding-inline: 15px;\n  }\n  .card__title {\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n  .card__list {\n    grid-template-columns: repeat(auto-fill, 330px);\n    row-gap: 20px;\n    margin-bottom: 38px;\n  }\n  .card__item {\n    max-width: 330px;\n  }\n}","@font-face {\n  font-family: 'Montserrat';\n  src:\n    url('./fonts/Montserrat-Regular.woff2') format('woff2'),\n    url('./fonts/Montserrat-Regular.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src:\n    url('./fonts/Montserrat-SemiBold.woff2') format('woff2'),\n    url('./fonts/Montserrat-SemiBold.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src:\n    url('./fonts/Montserrat-Bold.woff2') format('woff2'),\n    url('./fonts/Montserrat-Bold.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Mulish';\n  src:\n    url('./fonts/Mulish-Regular.woff2') format('woff2'),\n    url('./fonts/Mulish-Regular.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Mulish';\n  src:\n    url('./fonts/Mulish-SemiBold.woff2') format('woff2'),\n    url('./fonts/Mulish-SemiBold.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Mulish';\n  src:\n    url('./fonts/Mulish-Bold.woff2') format('woff2'),\n    url('./fonts/Mulish-Bold.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Lucida Grande';\n  src:\n    url('./fonts/LucidaGrande.woff2') format('woff2'),\n    url('./fonts/LucidaGrande.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Lucida Grande';\n  src:\n    url('./fonts/LucidaGrande-Bold.woff2') format('woff2'),\n    url('./fonts/LucidaGrande-Bold.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n","@use '../style/var' as *;\n@use '../style/fonts' as *;\n\nbody {\n  font-family: $montserrat;\n  background-color: $main-bgc;\n  color: $black;\n}\n\n.header__contacts-smbt:hover .header__contacts-smbt-block,\n.planet__contacts-smbt:hover .planet__contacts-smbt-block,\n.card__contacts-smbt:hover .card__contacts-smbt-block {\n  background-color: $submit-color-2;\n  transition: background-color 0.3s ease;\n}\n","$montserrat: 'Montserrat', Arial, sans-serif;\n$mulish: 'Mulish', Helvetica, sans-serif;\n$lucidaGrande: 'Lucida Grande', sans-serif;\n\n$weightBold: 700;\n$weightSemiBold: 600;\n$weightMedium: 500;\n$weightRegular: 400;\n\n$size-20: 20px;\n$size-16: 16px;\n$size-14: 14px;\n$size-12: 12px;\n\n$white: #fff;\n$black: #000;\n\n$main-bgc: #131313;\n$submit-color: #c2ab81;\n$submit-color-2: #b88d3d;\n$paragraph-color: #171717;\n$mark-color: #666;\n$text-stroke-color: #808080;\n","@use './var' as *;\n\n.main-wrapper {\n  max-width: 1820px;\n  margin: 0 auto;\n}\n\n.weight-bold {\n  font-weight: bold;\n}\n\n.anti-skew {\n  display: inline-block;\n  transform: skewX(17deg);\n}\n","@use '../var' as *;\n@use '../mixins' as *;\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 28px;\n  padding-inline: 50px;\n\n  &__logos {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    max-width: 156px;\n  }\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-self: center;\n    width: 100%;\n    gap: 20px;\n  }\n\n  &__nav {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-left: 76px;\n    font-weight: $weightBold;\n    font-size: $size-14;\n    line-height: 1.5;\n    color: $white;\n\n    &-list {\n      display: flex;\n      align-items: center;\n      gap: 42px;\n      width: fit-content;\n\n      &-item {\n        white-space: nowrap;\n        &:hover {\n          transition: color 0.4s ease;\n          color: $submit-color;\n        }\n      }\n    }\n  }\n\n  &__contacts {\n    margin-right: 0;\n    display: flex;\n    align-items: start;\n    gap: 12.5px;\n\n    &-phone {\n      padding: 18px 23px 18px 20px;\n      box-shadow: inset 0 0 0 2px #717171;\n      transform: skewX(-17deg);\n      height: 100%;\n      &:hover {\n        transition: all 0.4s ease;\n        box-shadow: inset 0 0 0 2px $submit-color-2;\n      }\n\n      &:hover .header__contacts-phone-logo {\n        transition: all 0.4s ease;\n\n        color: $submit-color-2;\n      }\n\n      &-logo {\n        color: #717171;\n        max-width: 20px;\n        transform: skewX(20deg);\n      }\n    }\n\n    &-smbt {\n      @include contacts-smbt;\n      &-btn {\n        @include contacts-smbt-btn;\n      }\n\n      &-block {\n        @include contacts-smbt-block;\n      }\n    }\n  }\n\n  &__burger {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 1536px) {\n  .header__nav-list-item:nth-child(-n + 2) {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 1400px) {\n  .header__nav-list-item:nth-child(-n + 3) {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 1200px) {\n  .header__nav-list-item:nth-child(-n + 4) {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 992px) {\n  .header {\n    &__wrapper {\n      width: fit-content;\n    }\n\n    &__nav {\n      margin-left: 40px;\n    }\n\n    &__contacts {\n      &-phone {\n        margin-right: -8px;\n      }\n\n      &-smbt {\n        max-width: 212px;\n        height: 60px;\n\n        &-btn {\n          max-width: 212px;\n          height: 60px;\n          height: 100%;\n        }\n      }\n    }\n  }\n  .header__nav-list-item:nth-child(-n + 5) {\n    display: none;\n  }\n}\n\n@media only screen and (width <= 768px) {\n  .header {\n    position: relative;\n\n    &__wrapper {\n      position: absolute;\n      top: 119px;\n      left: -200%;\n      width: 100vw;\n      height: 100vh;\n      background-color: #131313;\n      transition: all 0.3s;\n      padding: 0 20px;\n      display: block;\n    }\n\n    &__nav {\n      position: static;\n      padding: 0;\n      width: initial;\n      height: initial;\n      z-index: 50;\n      padding: 60px 50px;\n      background-color: $main-bgc;\n      animation: burgerAnimation 0.4s;\n      margin-left: 0;\n\n      &-list {\n        flex-direction: column;\n        align-items: start;\n        gap: 30px;\n        font-weight: 700;\n        font-size: 36px;\n        line-height: 150%;\n        color: transparent;\n      }\n\n      &-link {\n        text-shadow:\n          -1px 0 #808080,\n          0 1px #808080,\n          1px 0 #808080,\n          0 -1px #808080;\n      }\n\n      @keyframes burgerAnimation {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n    }\n\n    &__burger {\n      display: flex;\n      position: relative;\n      z-index: 55;\n      align-items: center;\n      justify-content: flex-start;\n      width: 30px;\n      height: 18px;\n      cursor: pointer;\n\n      &::before,\n      &::after {\n        content: '';\n        position: absolute;\n        height: 2px;\n        background-color: #faf6f2;\n        transition: all 0.3s ease 0s;\n      }\n\n      &::before {\n        top: 0;\n        width: 50%;\n      }\n\n      &::after {\n        bottom: 0;\n        width: 70%;\n      }\n\n      &-span {\n        height: 2px;\n        width: 100%;\n        transform: scale(1);\n        background-color: #faf6f2;\n      }\n    }\n\n    &__contacts {\n      flex-direction: column;\n      margin-top: auto;\n      margin-bottom: 0;\n\n      &-phone {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 18px 23px 18px 20px;\n        width: 100%;\n        margin-inline: auto;\n        min-height: 70px;\n\n        &-logo {\n          max-width: 32px;\n          margin-inline: auto;\n        }\n      }\n\n      &-smbt {\n        max-width: none;\n        height: auto;\n        width: 100%;\n        min-height: 70px;\n\n        &-btn {\n          max-width: none;\n          height: auto;\n          width: 100%;\n        }\n\n        &-block {\n          display: none;\n        }\n      }\n    }\n  }\n\n  .header__burger.active .header__burger-span {\n    transform: scale(0);\n  }\n\n  .header__burger.active::before {\n    top: 50%;\n    transform: rotate(-45deg) translate(0, -50%);\n    width: 100%;\n  }\n\n  .header__burger.active::after {\n    top: 50%;\n    transform: rotate(45deg) translate(0, 50%);\n    width: 100%;\n  }\n\n  .header__wrapper.open {\n    left: 0;\n    z-index: 50;\n  }\n\n  @supports ((text-stroke: 1px #808080) or (-webkit-text-stroke: 1px #808080)) {\n    .header__nav-link {\n      -webkit-text-stroke: 1px #808080;\n      text-stroke: 1px #808080;\n      text-shadow: none;\n    }\n  }\n\n  .header__nav-list-item:nth-child(n) {\n    display: flex;\n  }\n}\n\n@media only screen and (width <= 576px) {\n  .header__contacts {\n    display: flex;\n  }\n\n  .header__contacts-phone {\n    gap: 30px;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n  }\n\n  .header__nav-list {\n    gap: 15px;\n    font-size: 20px;\n  }\n}\n\n@media only screen and (width <= 390px) {\n  .header__nav {\n    padding: 0 0 51px;\n  }\n}\n","@use './var' as *;\n\n@mixin main-title {\n  font-weight: $weightBold;\n  font-size: 42px;\n  text-transform: uppercase;\n  color: $white;\n}\n\n@mixin contacts-smbt {\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  width: 100%;\n  transform: skewX(-17deg);\n}\n\n@mixin contacts-smbt-btn {\n  padding: 20px 23px 21px 20px;\n  border: 1px solid #717171;\n  font-weight: $weightBold;\n  font-size: $size-12;\n  line-height: 1.5;\n  color: white;\n  white-space: nowrap;\n  background-color: $submit-color;\n  text-align: center;\n  width: 250px;\n  cursor: pointer;\n  text-transform: uppercase;\n  &:hover {\n    transition: background-color 0.4s ease;\n    background-color: $submit-color-2;\n  }\n}\n\n@mixin contacts-smbt-block {\n  padding: 2px;\n  border: 1px solid #717171;\n  background-color: $white;\n  text-align: center;\n  width: 100%;\n  width: 1px;\n}\n","@use '../var' as *;\n@use '../mixins' as *;\n\n.planet {\n  background-image: url('~@../../img/planet-img.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n\n  border-radius: 50px 50px 0 0;\n\n  min-height: 960px;\n\n  position: relative;\n  z-index: 0;\n\n  justify-content: flex-end;\n  align-content: end;\n\n  &__article {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 96px;\n    gap: 40px;\n    max-width: 686px;\n    margin-left: 0;\n    margin-bottom: 0;\n    padding-left: 100px;\n  }\n\n  &__title {\n    @include main-title;\n    z-index: 1;\n  }\n\n  &__paragraph {\n    font-size: $size-16;\n    font-weight: $weightRegular;\n    line-height: 1.5;\n    font-size: $size-16;\n    opacity: 0.79;\n    color: $white;\n    z-index: 1;\n  }\n\n  &__contacts-smbt {\n    @include contacts-smbt;\n\n    &-btn {\n      @include contacts-smbt-btn;\n    }\n\n    &-block {\n      @include contacts-smbt-block;\n    }\n  }\n}\n\n.overlay {\n  position: absolute;\n  opacity: 0.6;\n  width: 100%;\n  height: 100%;\n  inset: 0;\n  background-color: #000000;\n  z-index: 0;\n}\n\n@media only screen and (width <= 768px) {\n  .planet {\n    background-position: center;\n    background-attachment: fixed;\n    min-height: 907px;\n\n    &__article {\n      padding-bottom: 76px;\n      max-width: 686px;\n      padding-left: 49px;\n      padding-bottom: 52.31px;\n      padding-left: 40px;\n    }\n\n    &__paragraph {\n      opacity: 0.8;\n      max-width: 450px;\n    }\n\n    &__title {\n      font-size: 38px;\n    }\n  }\n}\n\n@media only screen and (width <= 576px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 600px;\n\n    &__title {\n      font-size: 30px;\n      max-width: 300px;\n    }\n  }\n}\n\n@media only screen and (width <= 360px) {\n  .planet {\n    background-position: bottom;\n    background-attachment: local;\n    min-height: 495px;\n\n    &__article {\n      padding-bottom: 52.31px;\n      gap: 20px;\n      padding-left: 14.1px;\n    }\n\n    &__paragraph {\n      max-width: 300px;\n      font-style: 14px;\n    }\n\n    &__title {\n      font-size: 20px;\n      max-width: 250px;\n    }\n\n    &__contacts-smbt {\n      width: 228px;\n      margin-left: 10px;\n      &-btn {\n        max-width: 228px;\n        height: 47px;\n        padding: 14px 15px 17px 15px;\n      }\n    }\n  }\n}\n","@use '../var' as *;\n@use '../mixins' as *;\n\n.card {\n  padding-inline: 50px;\n  padding-block-start: 134px;\n  padding-block-end: 156px;\n\n  &__title {\n    @include main-title;\n    margin-bottom: 53px;\n  }\n\n  &__list {\n    width: 100%;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 320px);\n    gap: 30px;\n    justify-content: center;\n    justify-items: center;\n    margin-bottom: 60px;\n  }\n\n  &__item {\n    max-width: 320px;\n\n    &-img {\n      width: 100%;\n      display: block;\n      max-height: 185px;\n    }\n\n    &-container {\n      color: $paragraph-color;\n      padding-block-start: 25px;\n      padding-block-end: 30px;\n      padding-inline: 23.7px;\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      background-color: $white;\n      font-weight: $weightRegular;\n      min-height: 436px;\n    }\n\n    &-title {\n      font-family: $mulish;\n      font-weight: $weightBold;\n      font-size: $size-14;\n      line-height: 1.86;\n      letter-spacing: 0.11em;\n      text-transform: uppercase;\n    }\n\n    &-paragraph {\n      font-size: $size-16;\n      line-height: 1.62;\n    }\n\n    &-mark {\n      font-size: $size-14;\n      line-height: 1.71;\n      color: $mark-color;\n      flex-grow: 1;\n    }\n\n    &-date {\n      font-size: $size-14;\n      line-height: 1.71;\n      font-size: $size-12;\n      color: $mark-color;\n      margin-top: auto;\n    }\n\n    &-button {\n      font-family: $mulish;\n      padding-block: 16px;\n      padding-inline: 20px;\n      background-color: $paragraph-color;\n      white-space: nowrap;\n      color: $white;\n      &:hover {\n        background-color: $white;\n        color: $paragraph-color;\n        box-shadow: inset 0 0 0 2px $paragraph-color;\n        transition: all 0.4s ease;\n      }\n    }\n  }\n\n  &__contacts-smbt {\n    @include contacts-smbt;\n    justify-content: center;\n    &-btn {\n      @include contacts-smbt-btn;\n    }\n\n    &-block {\n      @include contacts-smbt-block;\n    }\n  }\n}\n\n@media only screen and (width <= 768px) {\n  .card {\n    padding-block-start: 44px;\n    padding-inline: 40px;\n\n    &__list {\n      grid-template-columns: repeat(auto-fill, 334px);\n      row-gap: 24px;\n      column-gap: 20px;\n    }\n\n    &__item {\n      max-width: 334px;\n    }\n  }\n}\n\n@media only screen and (width <= 360px) {\n  .card {\n    padding-block-start: 48px;\n    padding-block-end: 43px;\n    padding-inline: 15px;\n\n    &__title {\n      font-size: $size-20;\n      margin-bottom: 30px;\n    }\n\n    &__list {\n      grid-template-columns: repeat(auto-fill, 330px);\n      row-gap: 20px;\n      margin-bottom: 38px;\n    }\n\n    &__item {\n      max-width: 330px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!doctype html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\" />\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\" />\n\n    <title>Magwai</title>\n  </head>\n  <body>\n    <header class=\"header main-wrapper\">\n      <div class=\"header__burger\">\n        <span class=\"header__burger-span\"></span>\n      </div>\n\n      <div class=\"header__logos\">\n        <a href=\"/\">\n          <img\n            class=\"header__logos-icon\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n            alt=\"Логотип Магвай\"\n          />\n        </a>\n        <a href=\"/\">\n          <img\n            class=\"header__logos-word\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n            alt=\"Слово Магвай на латинице\"\n          />\n        </a>\n      </div>\n      <div class=\"header__wrapper\">\n        <nav class=\"header__nav\">\n          <ul class=\"header__nav-list\">\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">УСЛУГИ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">АБОНЕМЕНТЫ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">ПОЧЕМУ МЫ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">ОБОРУДОВАНИЕ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">АКЦИИ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">FAQ</a>\n            </li>\n            <li class=\"header__nav-list-item\">\n              <a class=\"header__nav-link\" href=\"#\">КОНТАКТЫ</a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"header__contacts\">\n          <a href=\"tel:+1234567890\" class=\"header__contacts-phone\">\n            <svg\n              class=\"header__contacts-phone-logo\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"21\"\n              height=\"20\"\n              fill=\"currentColor\"\n            >\n              <path\n                d=\"m13.532 14.214 1.722-1.723a1.683 1.683 0 0 1 1.8-.37l2.098.84a1.677 1.677 0 0 1 1.046 1.537v3.846a1.67 1.67 0 0 1-1.753 1.654C3.737 19.083.769 6.622.208 1.854A1.67 1.67 0 0 1 1.876 0H5.59a1.66 1.66 0 0 1 1.537 1.046l.838 2.1a1.662 1.662 0 0 1-.36 1.8L5.881 6.669s.992 6.714 7.65 7.545Z\"\n              />\n            </svg>\n          </a>\n          <div class=\"header__contacts-smbt\">\n            <button class=\"header__contacts-smbt-btn\">\n              <span class=\"anti-skew\">ОСТАВИТЬ ЗАЯВКУ</span>\n            </button>\n            <div class=\"header__contacts-smbt-block\"></div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <main class=\"main\">\n      <section class=\"planet\">\n        <div class=\"overlay\"></div>\n        <article class=\"planet__article main-wrapper\">\n          <h1 class=\"planet__title\">Полет Илона Маска и&nbsp;DOGIE COIN</h1>\n          <p class=\"planet__paragraph\">\n            В прошлый четверг все офигели от полета DOGIE COIN на марс.\n          </p>\n\n          <div class=\"planet__contacts-smbt\">\n            <button class=\"planet__contacts-smbt-btn\">\n              <span class=\"anti-skew\">ОСТАВИТЬ ЗАЯВКУ</span>\n            </button>\n            <div class=\"planet__contacts-smbt-block\"></div>\n          </div>\n        </article>\n      </section>\n\n      <section class=\"card main-wrapper\">\n        <h2 class=\"card__title\">Карточки</h2>\n        <ul class=\"card__list\"></ul>\n        <div class=\"card__contacts-smbt\">\n          <button class=\"card__contacts-smbt-btn\">\n            <span class=\"anti-skew\">загрузить еще</span>\n          </button>\n          <div class=\"card__contacts-smbt-block\"></div>\n        </div>\n      </section>\n    </main>\n\n    <footer>Подвал сайта</footer>\n\n    <template id=\"card-template\">\n      <li class=\"card__item\">\n        <img\n          class=\"card__item-img\"\n          src=\"<%= imagePath ? imagePath : '' %>\"\n          alt=\"\"\n        />\n        <div class=\"card__item-container\">\n          <h3 class=\"card__item-title\"></h3>\n          <p class=\"card__item-paragraph\"></p>\n          <p class=\"card__item-mark\"></p>\n          <p class=\"card__item-date\"></p>\n          <button class=\"card__item-button\">Continue reading</button>\n        </div>\n      </li>\n    </template>\n  </body>\n</html>\n";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

module.exports = __webpack_require__.p + "fonts/coins.png";

/***/ }),

/***/ "./src/img/magwai-ico-png.png":
/*!************************************!*\
  !*** ./src/img/magwai-ico-png.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/magwai-ico-png.png";

/***/ }),

/***/ "./src/img/magwai-word-logo.svg":
/*!**************************************!*\
  !*** ./src/img/magwai-word-logo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/magwai-word-logo.svg";

/***/ }),

/***/ "./src/img/magwai.svg":
/*!****************************!*\
  !*** ./src/img/magwai.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/magwai.svg";

/***/ }),

/***/ "./src/img/planet-img.png":
/*!********************************!*\
  !*** ./src/img/planet-img.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/planet-img.png";

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var cardList = document.querySelector('.card__list');
var cardCotactsSmbtBtn = document.querySelector('.card__contacts-smbt-btn');

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
  _style_components_card_items__WEBPACK_IMPORTED_MODULE_4__.initialCards.forEach(function (item) {
    var newCardElement = (0,_style_components_card__WEBPACK_IMPORTED_MODULE_5__.createCard)(_style_components_card__WEBPACK_IMPORTED_MODULE_5__.cardTemplate, item);
    cardList.append(newCardElement);
  });
}

// Вывод данных о профиле и карточках с сервера
cardCotactsSmbtBtn.addEventListener('click', function () {
  Promise.all([(0,_style_components_api__WEBPACK_IMPORTED_MODULE_3__.loadingImageInfo)(), (0,_style_components_api__WEBPACK_IMPORTED_MODULE_3__.loadingCardsInfo)()]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      imageInfoResult = _ref2[0],
      cardsInfoResult = _ref2[1];
    // Берём первые MAX_CARDS записей
    var MAX_CARDS = 10;
    var limitedCards = cardsInfoResult.slice(0, MAX_CARDS);
    var limitedImages = imageInfoResult.slice(0, MAX_CARDS);
    var cardsWidthImages = limitedCards.map(function (card, index) {
      var _limitedImages$index;
      return _objectSpread(_objectSpread({}, card), {}, {
        url: ((_limitedImages$index = limitedImages[index]) === null || _limitedImages$index === void 0 ? void 0 : _limitedImages$index.url) || _img_coins_png__WEBPACK_IMPORTED_MODULE_2__ // Подставляем картинку или дефолтную
      });
    });

    // Вывести карточки на страницу
    cardsWidthImages.slice(0, MAX_CARDS).forEach(function (item) {
      var eachElement = (0,_style_components_card__WEBPACK_IMPORTED_MODULE_5__.createCard)(_style_components_card__WEBPACK_IMPORTED_MODULE_5__.cardTemplate, item);
      cardList.append(eachElement);
    });
  }).catch(function (err) {
    return console.log(err);
  });
});
renderCards(); // Рендерим все карточки при загрузке
})();

/******/ })()
;
//# sourceMappingURL=main.964f800baff6827956b6.js.map