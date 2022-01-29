var main;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/popup.js":
/*!********************************!*\
  !*** ./src/assets/js/popup.js ***!
  \********************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var mainBlock = document.querySelector(".main");
var popupSignInUp = document.querySelector(".popup_sign");
var btnReg = document.querySelector(".header_nav__signin");
var btnSign = document.querySelector(".header_nav__signup");
var signInBtn = document.querySelector(".signin_btn");
var signUpBtn = document.querySelector(".signup_btn");
var signInSelector = document.querySelector("#popup_signin");
var signUpSelector = document.querySelector("#popup_signup");
var closePopup = document.querySelector(".popup_close");

var SetActiveBtn = /*#__PURE__*/function () {
  function SetActiveBtn(signIn, signUp) {
    _classCallCheck(this, SetActiveBtn);

    this.$in = signIn;
    this.$up = signUp;
  }

  _createClass(SetActiveBtn, [{
    key: "removeActiveClass",
    value: function removeActiveClass(key) {
      switch (key) {
        case "signInBtn":
          this.$in.classList.remove("active_sign");
          break;

        case "signUpBtn":
          this.$up.classList.remove("active_sign");
          break;
      }
    }
  }, {
    key: "addActiveClass",
    value: function addActiveClass(key) {
      switch (key) {
        case "signInBtn":
          this.$in.classList.add("active_sign");
          break;

        case "signUpBtn":
          this.$up.classList.add("active_sign");
          break;
      }
    }
  }]);

  return SetActiveBtn;
}();

var SelectorSignInUp = /*#__PURE__*/function () {
  function SelectorSignInUp(signIn, signUp) {
    _classCallCheck(this, SelectorSignInUp);

    this.$in = signIn;
    this.$up = signUp;
  }

  _createClass(SelectorSignInUp, [{
    key: "selectSignUp",
    value: function selectSignUp() {
      this.$in.style.left = "-520px";
      this.$up.style.right = "0";
    }
  }, {
    key: "selectSignIn",
    value: function selectSignIn() {
      this.$in.style.left = null;
      this.$up.style.right = null;
    }
  }]);

  return SelectorSignInUp;
}();

var setActiveBtn = new SetActiveBtn(signInBtn, signUpBtn);
var selectorSignInUp = new SelectorSignInUp(signInSelector, signUpSelector);

var showPopupSignInUp = function showPopupSignInUp() {
  popupSignInUp.style.display = null;
  signUpBtn.addEventListener("click", function () {
    return function () {
      if (!signUpBtn.classList.contains("active_sign")) {
        setActiveBtn.removeActiveClass("signInBtn");
        setActiveBtn.addActiveClass("signUpBtn");
        selectorSignInUp.selectSignUp();
      }
    }();
  });
  signInBtn.addEventListener("click", function () {
    return function () {
      if (!signInBtn.classList.contains("active_sign")) {
        setActiveBtn.removeActiveClass("signUpBtn");
        setActiveBtn.addActiveClass("signInBtn");
        selectorSignInUp.selectSignIn();
      }
    }();
  });
};

var eventBtnPopup = function eventBtnPopup() {
  btnReg.addEventListener("click", function () {
    return function () {
      showPopupSignInUp();
    }();
  });
  btnSign.addEventListener("click", function () {
    return function () {
      setActiveBtn.removeActiveClass("signInBtn");
      setActiveBtn.addActiveClass("signUpBtn");
      selectorSignInUp.selectSignUp();
      showPopupSignInUp();
    }();
  });
  closePopup.addEventListener("click", function () {
    return function () {
      setActiveBtn.removeActiveClass("signUpBtn");
      setActiveBtn.addActiveClass("signInBtn");
      popupSignInUp.style.display = "none";
    }();
  });
};

eventBtnPopup();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Header.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/Header.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n    position: fixed;\n    top: 0;\n    left: -100px;\n    width: 150px;\n    height: 100%;\n    z-index: 100;\n    background-color: white;\n    transition: .3s;\n}\n.header:hover {\n    left: 0;\n}\n.header_title {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 40px;\n}\n.header_title h1 {\n    padding-left: 10px;\n}\n.burger {\n    position: absolute;\n    top: 7px;\n    right: 7px;\n    width: 36px;\n    height: 20px;\n    border-top: 5px solid black;\n    border-bottom: 5px solid;\n}\n.burger::before {\n    content: '';\n    position: absolute;\n    top: 8px;\n    left: 0;\n    width: 100%;\n    height: 5px;\n    background-color: black;\n}\n.header_background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    display: block;\n    width: 100%;\n    height: 100vh;\n    background-color: rgb(0, 0, 0, .4);\n    opacity: 0;\n    transition: .3s;\n}\n.header:hover + .header_background {\n    z-index: 99;\n    opacity: 1;\n}\n.header:hover + .header_background + .main {\n    margin-left: 170px;\n}\n.header_nav__item {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n}\n.header_nav__item .image.active::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -20px;\n    width: 20px;\n    height: 100%;\n    z-index: 0;\n}\n.header_nav__link {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    font-weight: 500;\n    width: 100px;\n    height: 50px;\n    transition: .3s;\n}\n.header_nav__item a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100px;\n    height: 100%;\n}\n.header_nav__link:hover {\n    color: white;\n}\n.header_nav__signin,\n.header_nav__signup {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    transition: .3s;\n}\n.header_nav__signin:hover,\n.header_nav__signup:hover {\n    cursor: pointer;\n    background-color: rgb(159, 236, 255);\n    padding-left: 20px;\n}\n.header_nav__item:nth-child(1) .header_nav__link:hover {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .header_nav__link:hover {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .header_nav__link:hover {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .header_nav__link:hover {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .header_nav__link:hover {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .header_nav__link:hover {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .header_nav__link:hover {\n    background-color: rgb(255, 0, 242);\n}\n.image {\n    display: block;\n    width: 50px;\n    height: 50px;\n}\n.header_nav__item:nth-child(1) .image,\n.header_nav__item:nth-child(1) .image.active::before {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .image,\n.header_nav__item:nth-child(2) .image.active::before {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .image,\n.header_nav__item:nth-child(3) .image.active::before {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .image,\n.header_nav__item:nth-child(4) .image.active::before {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .image,\n.header_nav__item:nth-child(5) .image.active::before {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .image,\n.header_nav__item:nth-child(6) .image.active::before {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .image,\n.header_nav__item:nth-child(7) .image.active::before {\n    background-color: rgb(255, 0, 242);\n}", "",{"version":3,"sources":["webpack://./src/assets/css/Header.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,OAAO;AACX;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,WAAW;IACX,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,cAAc;IACd,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,UAAU;IACV,eAAe;AACnB;AACA;IACI,WAAW;IACX,UAAU;AACd;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,cAAc;IACd,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;;IAEI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;AACA;;IAEI,eAAe;IACf,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,iCAAiC;AACrC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,iCAAiC;AACrC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;AACA;;IAEI,gCAAgC;AACpC;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,iCAAiC;AACrC;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,iCAAiC;AACrC;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,kCAAkC;AACtC","sourcesContent":[".header {\n    position: fixed;\n    top: 0;\n    left: -100px;\n    width: 150px;\n    height: 100%;\n    z-index: 100;\n    background-color: white;\n    transition: .3s;\n}\n.header:hover {\n    left: 0;\n}\n.header_title {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 40px;\n}\n.header_title h1 {\n    padding-left: 10px;\n}\n.burger {\n    position: absolute;\n    top: 7px;\n    right: 7px;\n    width: 36px;\n    height: 20px;\n    border-top: 5px solid black;\n    border-bottom: 5px solid;\n}\n.burger::before {\n    content: '';\n    position: absolute;\n    top: 8px;\n    left: 0;\n    width: 100%;\n    height: 5px;\n    background-color: black;\n}\n.header_background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    display: block;\n    width: 100%;\n    height: 100vh;\n    background-color: rgb(0, 0, 0, .4);\n    opacity: 0;\n    transition: .3s;\n}\n.header:hover + .header_background {\n    z-index: 99;\n    opacity: 1;\n}\n.header:hover + .header_background + .main {\n    margin-left: 170px;\n}\n.header_nav__item {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n}\n.header_nav__item .image.active::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -20px;\n    width: 20px;\n    height: 100%;\n    z-index: 0;\n}\n.header_nav__link {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    font-weight: 500;\n    width: 100px;\n    height: 50px;\n    transition: .3s;\n}\n.header_nav__item a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100px;\n    height: 100%;\n}\n.header_nav__link:hover {\n    color: white;\n}\n.header_nav__signin,\n.header_nav__signup {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    transition: .3s;\n}\n.header_nav__signin:hover,\n.header_nav__signup:hover {\n    cursor: pointer;\n    background-color: rgb(159, 236, 255);\n    padding-left: 20px;\n}\n.header_nav__item:nth-child(1) .header_nav__link:hover {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .header_nav__link:hover {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .header_nav__link:hover {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .header_nav__link:hover {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .header_nav__link:hover {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .header_nav__link:hover {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .header_nav__link:hover {\n    background-color: rgb(255, 0, 242);\n}\n.image {\n    display: block;\n    width: 50px;\n    height: 50px;\n}\n.header_nav__item:nth-child(1) .image,\n.header_nav__item:nth-child(1) .image.active::before {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .image,\n.header_nav__item:nth-child(2) .image.active::before {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .image,\n.header_nav__item:nth-child(3) .image.active::before {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .image,\n.header_nav__item:nth-child(4) .image.active::before {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .image,\n.header_nav__item:nth-child(5) .image.active::before {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .image,\n.header_nav__item:nth-child(6) .image.active::before {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .image,\n.header_nav__item:nth-child(7) .image.active::before {\n    background-color: rgb(255, 0, 242);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/Main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n    position: relative;\n    display: block;\n    height: 100%;\n    transition: 0.3s;\n    background-color: white;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 70px;\n    margin-right: 20px;\n    animation-name: showMain;\n    animation-duration: 1s;\n}\n@keyframes showMain {\n    from {\n        left: -50%;\n        opacity: 0;\n    }\n    to {\n        left: 0;\n        opacity: 1;\n    }\n}\n.main_content {\n    padding: 20px;\n    height: 100%;\n}\n.content_title {\n    position: relative;\n    width: 100%;\n    padding: 20px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.content_title h1 {\n    white-space: nowrap;\n    padding-right: 20px;\n}\n.content_title::after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 4px;\n    background-color: black;\n}\n\n.content_block {\n    padding: 20px;\n    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.3);\n}\n.content_block:not(:last-child) {\n    margin-bottom: 50px;\n}\n.content_news__header {\n    padding: 10px 0;\n}\n.content_news__content p {\n    padding: 2px 0;\n}\n.content_block.user > h2 {\n    padding: 10px 0 30px 0;\n}\n.content_block__items.user {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n.todo_rec {\n    width: 48%;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: 0 0 15px rgb(0, 0, 0, 0.1);\n}\n.todo_rec__title {\n    padding-bottom: 10px;\n}\n.todo_rec__content p {\n    padding: 2px 0;\n}\n.content_news__footer,\n.todo_rec__footer {\n    padding-top: 10px;\n}\n.todo_rec__footer {\n    display: flex;\n    justify-content: space-between;\n}\n.todo_rec__footer p, .todo_rec__footer a {\n    text-decoration: underline;\n    cursor: pointer;\n    padding: 0 5px;\n}\n.todo_rec__footer p:nth-child(1) {\n    color: royalblue;\n}\n.todo_rec__footer p:nth-child(2) {\n    color: rgb(255, 174, 0);\n}\n.todo_rec__footer p:nth-child(3) {\n    color: tomato;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/Main.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;IACxB,sBAAsB;AAC1B;AACA;IACI;QACI,UAAU;QACV,UAAU;IACd;IACA;QACI,OAAO;QACP,UAAU;IACd;AACJ;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,wCAAwC;AAC5C;AACA;IACI,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;AAClB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB;AACA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,sCAAsC;AAC1C;AACA;IACI,oBAAoB;AACxB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,cAAc;AAClB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;AACjB","sourcesContent":[".main {\n    position: relative;\n    display: block;\n    height: 100%;\n    transition: 0.3s;\n    background-color: white;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 70px;\n    margin-right: 20px;\n    animation-name: showMain;\n    animation-duration: 1s;\n}\n@keyframes showMain {\n    from {\n        left: -50%;\n        opacity: 0;\n    }\n    to {\n        left: 0;\n        opacity: 1;\n    }\n}\n.main_content {\n    padding: 20px;\n    height: 100%;\n}\n.content_title {\n    position: relative;\n    width: 100%;\n    padding: 20px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.content_title h1 {\n    white-space: nowrap;\n    padding-right: 20px;\n}\n.content_title::after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 4px;\n    background-color: black;\n}\n\n.content_block {\n    padding: 20px;\n    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.3);\n}\n.content_block:not(:last-child) {\n    margin-bottom: 50px;\n}\n.content_news__header {\n    padding: 10px 0;\n}\n.content_news__content p {\n    padding: 2px 0;\n}\n.content_block.user > h2 {\n    padding: 10px 0 30px 0;\n}\n.content_block__items.user {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n.todo_rec {\n    width: 48%;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: 0 0 15px rgb(0, 0, 0, 0.1);\n}\n.todo_rec__title {\n    padding-bottom: 10px;\n}\n.todo_rec__content p {\n    padding: 2px 0;\n}\n.content_news__footer,\n.todo_rec__footer {\n    padding-top: 10px;\n}\n.todo_rec__footer {\n    display: flex;\n    justify-content: space-between;\n}\n.todo_rec__footer p, .todo_rec__footer a {\n    text-decoration: underline;\n    cursor: pointer;\n    padding: 0 5px;\n}\n.todo_rec__footer p:nth-child(1) {\n    color: royalblue;\n}\n.todo_rec__footer p:nth-child(2) {\n    color: rgb(255, 174, 0);\n}\n.todo_rec__footer p:nth-child(3) {\n    color: tomato;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Popups.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/Popups.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.popup::before {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    background-color: rgba(0, 0, 0, .4);\n    width: 100%;\n    height: 100%;\n}\n.popup_close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20px;\n    height: 20px;\n    background-color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.popup_close::after, .popup_close::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background-color: black;\n}\n.popup_close::after {\n    transform: rotate(45deg);\n}\n.popup_close::before {\n    transform: rotate(-45deg);\n}\n.popup_siginup__block {\n    max-width: 500px;\n    width: 100%;\n    height: 350px;\n    background-color: white;\n    padding: 20px;\n    margin: 10px;\n    overflow: hidden;\n}\n.popup_siginup__header {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n.popup_siginup__header h2:nth-child(odd) {\n    cursor: pointer;\n    margin: 0 5px;\n}\n.popup_siginup__header h2 {\n    color: rgb(150, 150, 150);\n}\n.active_sign {\n    color: black !important;\n    padding: 0 10px;\n    transition: .3s;\n}\n.popup_signinup_section {\n    transition: .3s;\n}\n.error_signin {\n    color: rgb(255, 0, 0);\n    padding-bottom: 5px;\n}\n.popup_siginup_content {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n}\n.popup_signinup_left {\n    left: 0;\n}\n.popup_signinup_right {\n    right: -520px;\n}\n.popup_signinup_section {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_signinup_section h2 {\n    text-align: center;\n}\n.popup_signinup_section form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_signinup_section form input {\n    width: 100%;\n    height: 30px;\n}\n.popup_signinup_section form input:not([type=\"submit\"]){\n    background-color: rgb(224, 224, 224);\n    outline: none;\n    border: none;\n    border-radius: 10px;\n    padding-left: 5px;\n    font-size: 16px;\n}\n.popup_signinup_section form input:focus:not([type=\"submit\"]) {\n    box-shadow: 0 0 0 3px rgb(207, 207, 207);\n}\n.popup_signin_inputs {\n    width: 70%;\n}\n.popup_signinup_section form .popup_signin_inputs:not(:last-child) {\n    padding-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/Popups.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,mCAAmC;IACnC,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;IACvB,eAAe;IACf,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,OAAO;AACX;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,oCAAoC;IACpC,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,UAAU;AACd;AACA;IACI,oBAAoB;AACxB","sourcesContent":[".popup {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.popup::before {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    background-color: rgba(0, 0, 0, .4);\n    width: 100%;\n    height: 100%;\n}\n.popup_close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20px;\n    height: 20px;\n    background-color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.popup_close::after, .popup_close::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background-color: black;\n}\n.popup_close::after {\n    transform: rotate(45deg);\n}\n.popup_close::before {\n    transform: rotate(-45deg);\n}\n.popup_siginup__block {\n    max-width: 500px;\n    width: 100%;\n    height: 350px;\n    background-color: white;\n    padding: 20px;\n    margin: 10px;\n    overflow: hidden;\n}\n.popup_siginup__header {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n.popup_siginup__header h2:nth-child(odd) {\n    cursor: pointer;\n    margin: 0 5px;\n}\n.popup_siginup__header h2 {\n    color: rgb(150, 150, 150);\n}\n.active_sign {\n    color: black !important;\n    padding: 0 10px;\n    transition: .3s;\n}\n.popup_signinup_section {\n    transition: .3s;\n}\n.error_signin {\n    color: rgb(255, 0, 0);\n    padding-bottom: 5px;\n}\n.popup_siginup_content {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n}\n.popup_signinup_left {\n    left: 0;\n}\n.popup_signinup_right {\n    right: -520px;\n}\n.popup_signinup_section {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_signinup_section h2 {\n    text-align: center;\n}\n.popup_signinup_section form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_signinup_section form input {\n    width: 100%;\n    height: 30px;\n}\n.popup_signinup_section form input:not([type=\"submit\"]){\n    background-color: rgb(224, 224, 224);\n    outline: none;\n    border: none;\n    border-radius: 10px;\n    padding-left: 5px;\n    font-size: 16px;\n}\n.popup_signinup_section form input:focus:not([type=\"submit\"]) {\n    box-shadow: 0 0 0 3px rgb(207, 207, 207);\n}\n.popup_signin_inputs {\n    width: 70%;\n}\n.popup_signinup_section form .popup_signin_inputs:not(:last-child) {\n    padding-bottom: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Todo.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/Todo.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search_todo {\n    padding: 10px 0 40px 0;\n}\n.search_todo h2 {\n    padding-bottom: 10px;\n}\n.search_todo__inputs {\n    display: flex;\n    justify-content: space-between;\n}\n.input.search_todo_inp,\n.btn.search_todo_btn {\n    width: 48%;\n}\n.btn.new_todo_btn {\n    width: 100%;\n    height: 60px;\n    font-weight: bold;\n    font-size: 25px;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/Todo.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;;IAEI,UAAU;AACd;AACA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB","sourcesContent":[".search_todo {\n    padding: 10px 0 40px 0;\n}\n.search_todo h2 {\n    padding-bottom: 10px;\n}\n.search_todo__inputs {\n    display: flex;\n    justify-content: space-between;\n}\n.input.search_todo_inp,\n.btn.search_todo_btn {\n    width: 48%;\n}\n.btn.new_todo_btn {\n    width: 100%;\n    height: 60px;\n    font-weight: bold;\n    font-size: 25px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/Header.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_Main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/Main.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Main.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_Todo_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/Todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Todo.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_css_Popups_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/css/Popups.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/Popups.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_Header_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_Main_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_Todo_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_css_Popups_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background-color: rgb(159, 236, 255);\n}\n\n.wrapper {\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n\np, a {\n    font-size: 18px;\n}\n.btn, .input {\n    outline: none;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    border-radius: 10px;\n    height: 30px;\n    font-size: 15px;\n    transition: .3s;\n}\n.input {\n    padding-left: 10px;\n}\n.btn {\n    cursor: pointer;\n    padding: 0 10px;\n}\n.input:focus, .btn:hover {\n    box-shadow: 0 0 0 4px rgb(226, 226, 226);\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAKA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA;IACI,wCAAwC;AAC5C","sourcesContent":["@import url(./assets/css/Header.css);\n@import url(./assets/css/Main.css);\n@import url(./assets/css/Todo.css);\n@import url(./assets/css/Popups.css);\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    background-color: rgb(159, 236, 255);\n}\n\n.wrapper {\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n\np, a {\n    font-size: 18px;\n}\n.btn, .input {\n    outline: none;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    border-radius: 10px;\n    height: 30px;\n    font-size: 15px;\n    transition: .3s;\n}\n.input {\n    padding-left: 10px;\n}\n.btn {\n    cursor: pointer;\n    padding: 0 10px;\n}\n.input:focus, .btn:hover {\n    box-shadow: 0 0 0 4px rgb(226, 226, 226);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _assets_js_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/popup.js */ "./src/assets/js/popup.js");
/* harmony import */ var _assets_js_popup_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_popup_js__WEBPACK_IMPORTED_MODULE_1__);


})();

main = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvYXNzZXRzL21haW4uZGEzMjk3MWQ1MGE5MjFkODVhZDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBdEI7QUFFQSxJQUFNRSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBZjtBQUNBLElBQU1HLE9BQU8sR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUFoQjtBQUVBLElBQU1JLFNBQVMsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQ0EsSUFBTUssU0FBUyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFFQSxJQUFNTSxjQUFjLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUF2QjtBQUNBLElBQU1PLGNBQWMsR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXZCO0FBRUEsSUFBTVEsVUFBVSxHQUFHVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7O0lBRU1TO0FBQ0Ysd0JBQVlDLE1BQVosRUFBb0JDLE1BQXBCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUtDLEdBQUwsR0FBV0YsTUFBWDtBQUNBLFNBQUtHLEdBQUwsR0FBV0YsTUFBWDtBQUNIOzs7O1dBRUQsMkJBQWtCRyxHQUFsQixFQUF1QjtBQUNuQixjQUFRQSxHQUFSO0FBQ0ksYUFBSyxXQUFMO0FBQ0ksZUFBS0YsR0FBTCxDQUFTRyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixhQUExQjtBQUNBOztBQUNKLGFBQUssV0FBTDtBQUNJLGVBQUtILEdBQUwsQ0FBU0UsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsYUFBMUI7QUFDQTtB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QUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2Fzc2V0cy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYXNzZXRzL2Nzcy9IZWFkZXIuY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hc3NldHMvY3NzL01haW4uY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hc3NldHMvY3NzL1BvcHVwcy5jc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2Fzc2V0cy9jc3MvVG9kby5jc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFpbkJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuY29uc3QgcG9wdXBTaWduSW5VcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfc2lnblwiKTtcblxuY29uc3QgYnRuUmVnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfbmF2X19zaWduaW5cIik7XG5jb25zdCBidG5TaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfbmF2X19zaWdudXBcIik7XG5cbmNvbnN0IHNpZ25JbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbmluX2J0blwiKTtcbmNvbnN0IHNpZ25VcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwX2J0blwiKTtcblxuY29uc3Qgc2lnbkluU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwX3NpZ25pblwiKTtcbmNvbnN0IHNpZ25VcFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cF9zaWdudXBcIik7XG5cbmNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2Nsb3NlXCIpO1xuXG5jbGFzcyBTZXRBY3RpdmVCdG4ge1xuICAgIGNvbnN0cnVjdG9yKHNpZ25Jbiwgc2lnblVwKSB7XG4gICAgICAgIHRoaXMuJGluID0gc2lnbkluO1xuICAgICAgICB0aGlzLiR1cCA9IHNpZ25VcDtcbiAgICB9XG5cbiAgICByZW1vdmVBY3RpdmVDbGFzcyhrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzaWduSW5CdG5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLiRpbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX3NpZ25cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2lnblVwQnRuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy4kdXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9zaWduXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQWN0aXZlQ2xhc3Moa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwic2lnbkluQnRuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy4kaW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9zaWduXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNpZ25VcEJ0blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuJHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfc2lnblwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU2VsZWN0b3JTaWduSW5VcCB7XG4gICAgY29uc3RydWN0b3Ioc2lnbkluLCBzaWduVXApIHtcbiAgICAgICAgdGhpcy4kaW4gPSBzaWduSW47XG4gICAgICAgIHRoaXMuJHVwID0gc2lnblVwO1xuICAgIH1cblxuICAgIHNlbGVjdFNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy4kaW4uc3R5bGUubGVmdCA9IFwiLTUyMHB4XCI7XG4gICAgICAgIHRoaXMuJHVwLnN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgfVxuICAgIHNlbGVjdFNpZ25JbigpIHtcbiAgICAgICAgdGhpcy4kaW4uc3R5bGUubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMuJHVwLnN0eWxlLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG59XG5cbmNvbnN0IHNldEFjdGl2ZUJ0biA9IG5ldyBTZXRBY3RpdmVCdG4oc2lnbkluQnRuLCBzaWduVXBCdG4pO1xuY29uc3Qgc2VsZWN0b3JTaWduSW5VcCA9IG5ldyBTZWxlY3RvclNpZ25JblVwKHNpZ25JblNlbGVjdG9yLCBzaWduVXBTZWxlY3Rvcik7XG5cbmNvbnN0IHNob3dQb3B1cFNpZ25JblVwID0gKCkgPT4ge1xuICAgIHBvcHVwU2lnbkluVXAuc3R5bGUuZGlzcGxheSA9IG51bGw7XG5cbiAgICBzaWduVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXNpZ25VcEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVfc2lnblwiKSkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5yZW1vdmVBY3RpdmVDbGFzcyhcInNpZ25JbkJ0blwiKTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4uYWRkQWN0aXZlQ2xhc3MoXCJzaWduVXBCdG5cIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JTaWduSW5VcC5zZWxlY3RTaWduVXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbiAgICBzaWduSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXNpZ25JbkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVfc2lnblwiKSkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5yZW1vdmVBY3RpdmVDbGFzcyhcInNpZ25VcEJ0blwiKTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4uYWRkQWN0aXZlQ2xhc3MoXCJzaWduSW5CdG5cIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JTaWduSW5VcC5zZWxlY3RTaWduSW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGV2ZW50QnRuUG9wdXAgPSAoKSA9PiB7XG4gICAgYnRuUmVnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2hvd1BvcHVwU2lnbkluVXAoKTtcbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbiAgICBidG5TaWduLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0QWN0aXZlQnRuLnJlbW92ZUFjdGl2ZUNsYXNzKFwic2lnbkluQnRuXCIpO1xuICAgICAgICAgICAgc2V0QWN0aXZlQnRuLmFkZEFjdGl2ZUNsYXNzKFwic2lnblVwQnRuXCIpO1xuICAgICAgICAgICAgc2VsZWN0b3JTaWduSW5VcC5zZWxlY3RTaWduVXAoKTtcbiAgICAgICAgICAgIHNob3dQb3B1cFNpZ25JblVwKCk7XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG4gICAgY2xvc2VQb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5yZW1vdmVBY3RpdmVDbGFzcyhcInNpZ25VcEJ0blwiKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5hZGRBY3RpdmVDbGFzcyhcInNpZ25JbkJ0blwiKTtcbiAgICAgICAgICAgIHBvcHVwU2lnbkluVXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KSgpO1xuICAgIH0pO1xufTtcbmV2ZW50QnRuUG9wdXAoKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTEwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyIHtcXG4gICAgbGVmdDogMDtcXG59XFxuLmhlYWRlcl90aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uaGVhZGVyX3RpdGxlIGgxIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uYnVyZ2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDdweDtcXG4gICAgcmlnaHQ6IDdweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XFxufVxcbi5idXJnZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uaGVhZGVyX2JhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC40KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyICsgLmhlYWRlcl9iYWNrZ3JvdW5kIHtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5oZWFkZXI6aG92ZXIgKyAuaGVhZGVyX2JhY2tncm91bmQgKyAubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluayB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIGEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlcl9uYXZfX3NpZ25pbixcXG4uaGVhZGVyX25hdl9fc2lnbnVwIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyX25hdl9fc2lnbmluOmhvdmVyLFxcbi5oZWFkZXJfbmF2X19zaWdudXA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzNiwgMjU1KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVxcbi5pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgxKSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMikgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMykgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg0KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg1KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDYpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDcpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksT0FBTztBQUNYO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksZ0NBQWdDO0FBQ3BDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksaUNBQWlDO0FBQ3JDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksaUNBQWlDO0FBQ3JDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTEwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyIHtcXG4gICAgbGVmdDogMDtcXG59XFxuLmhlYWRlcl90aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uaGVhZGVyX3RpdGxlIGgxIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uYnVyZ2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDdweDtcXG4gICAgcmlnaHQ6IDdweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XFxufVxcbi5idXJnZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uaGVhZGVyX2JhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC40KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyICsgLmhlYWRlcl9iYWNrZ3JvdW5kIHtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5oZWFkZXI6aG92ZXIgKyAuaGVhZGVyX2JhY2tncm91bmQgKyAubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluayB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIGEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlcl9uYXZfX3NpZ25pbixcXG4uaGVhZGVyX25hdl9fc2lnbnVwIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyX25hdl9fc2lnbmluOmhvdmVyLFxcbi5oZWFkZXJfbmF2X19zaWdudXA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzNiwgMjU1KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVxcbi5pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgxKSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMikgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMykgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg0KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg1KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDYpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDcpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dNYWluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHNob3dNYWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBsZWZ0OiAtNTAlO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG4ubWFpbl9jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY29udGVudF90aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250ZW50X3RpdGxlIGgxIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuLmNvbnRlbnRfdGl0bGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGVudF9ibG9jayB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5jb250ZW50X2Jsb2NrOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uY29udGVudF9uZXdzX19oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5jb250ZW50X25ld3NfX2NvbnRlbnQgcCB7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbn1cXG4uY29udGVudF9ibG9jay51c2VyID4gaDIge1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMzBweCAwO1xcbn1cXG4uY29udGVudF9ibG9ja19faXRlbXMudXNlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnRvZG9fcmVjIHtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcbi50b2RvX3JlY19fdGl0bGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnRvZG9fcmVjX19jb250ZW50IHAge1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG59XFxuLmNvbnRlbnRfbmV3c19fZm9vdGVyLFxcbi50b2RvX3JlY19fZm9vdGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwLCAudG9kb19yZWNfX2Zvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHA6bnRoLWNoaWxkKDEpIHtcXG4gICAgY29sb3I6IHJveWFsYmx1ZTtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIgcDpudGgtY2hpbGQoMikge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIgcDpudGgtY2hpbGQoMykge1xcbiAgICBjb2xvcjogdG9tYXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9NYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksT0FBTztRQUNQLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hvd01haW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcbkBrZXlmcmFtZXMgc2hvd01haW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGxlZnQ6IC01MCU7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbi5tYWluX2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50X3RpdGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnRfdGl0bGUgaDEge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uY29udGVudF90aXRsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250ZW50X2Jsb2NrIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG59XFxuLmNvbnRlbnRfYmxvY2s6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5jb250ZW50X25ld3NfX2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuLmNvbnRlbnRfbmV3c19fY29udGVudCBwIHtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxufVxcbi5jb250ZW50X2Jsb2NrLnVzZXIgPiBoMiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAzMHB4IDA7XFxufVxcbi5jb250ZW50X2Jsb2NrX19pdGVtcy51c2VyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4udG9kb19yZWMge1xcbiAgICB3aWR0aDogNDglO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuLnRvZG9fcmVjX190aXRsZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4udG9kb19yZWNfX2NvbnRlbnQgcCB7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbn1cXG4uY29udGVudF9uZXdzX19mb290ZXIsXFxuLnRvZG9fcmVjX19mb290ZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHAsIC50b2RvX3JlY19fZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIgcDpudGgtY2hpbGQoMSkge1xcbiAgICBjb2xvcjogcm95YWxibHVlO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgyKSB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgzKSB7XFxuICAgIGNvbG9yOiB0b21hdG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnBvcHVwX2Nsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBvcHVwX2Nsb3NlOjphZnRlciwgLnBvcHVwX2Nsb3NlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbi5wb3B1cF9zaWdpbnVwX19ibG9jayB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucG9wdXBfc2lnaW51cF9faGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NpZ2ludXBfX2hlYWRlciBoMjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG59XFxuLnBvcHVwX3NpZ2ludXBfX2hlYWRlciBoMiB7XFxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcbi5hY3RpdmVfc2lnbiB7XFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24ge1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5lcnJvcl9zaWduaW4ge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5wb3B1cF9zaWdpbnVwX2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcbi5wb3B1cF9zaWduaW51cF9sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3JpZ2h0IHtcXG4gICAgcmlnaHQ6IC01MjBweDtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXBfc2lnbmludXBfc2VjdGlvbiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24gZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXBfc2lnbmludXBfc2VjdGlvbiBmb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24gZm9ybSBpbnB1dDpub3QoW3R5cGU9XFxcInN1Ym1pdFxcXCJdKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wb3B1cF9zaWduaW51cF9zZWN0aW9uIGZvcm0gaW5wdXQ6Zm9jdXM6bm90KFt0eXBlPVxcXCJzdWJtaXRcXFwiXSkge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDIwNywgMjA3LCAyMDcpO1xcbn1cXG4ucG9wdXBfc2lnbmluX2lucHV0cyB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbi5wb3B1cF9zaWduaW51cF9zZWN0aW9uIGZvcm0gLnBvcHVwX3NpZ25pbl9pbnB1dHM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9Qb3B1cHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnBvcHVwX2Nsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBvcHVwX2Nsb3NlOjphZnRlciwgLnBvcHVwX2Nsb3NlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbi5wb3B1cF9zaWdpbnVwX19ibG9jayB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucG9wdXBfc2lnaW51cF9faGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NpZ2ludXBfX2hlYWRlciBoMjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG59XFxuLnBvcHVwX3NpZ2ludXBfX2hlYWRlciBoMiB7XFxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcbi5hY3RpdmVfc2lnbiB7XFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24ge1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5lcnJvcl9zaWduaW4ge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5wb3B1cF9zaWdpbnVwX2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcbi5wb3B1cF9zaWduaW51cF9sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3JpZ2h0IHtcXG4gICAgcmlnaHQ6IC01MjBweDtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXBfc2lnbmludXBfc2VjdGlvbiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24gZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXBfc2lnbmludXBfc2VjdGlvbiBmb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLnBvcHVwX3NpZ25pbnVwX3NlY3Rpb24gZm9ybSBpbnB1dDpub3QoW3R5cGU9XFxcInN1Ym1pdFxcXCJdKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wb3B1cF9zaWduaW51cF9zZWN0aW9uIGZvcm0gaW5wdXQ6Zm9jdXM6bm90KFt0eXBlPVxcXCJzdWJtaXRcXFwiXSkge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDIwNywgMjA3LCAyMDcpO1xcbn1cXG4ucG9wdXBfc2lnbmluX2lucHV0cyB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbi5wb3B1cF9zaWduaW51cF9zZWN0aW9uIGZvcm0gLnBvcHVwX3NpZ25pbl9pbnB1dHM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoX3RvZG8ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgNDBweCAwO1xcbn1cXG4uc2VhcmNoX3RvZG8gaDIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnNlYXJjaF90b2RvX19pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5pbnB1dC5zZWFyY2hfdG9kb19pbnAsXFxuLmJ0bi5zZWFyY2hfdG9kb19idG4ge1xcbiAgICB3aWR0aDogNDglO1xcbn1cXG4uYnRuLm5ld190b2RvX2J0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL1RvZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlYXJjaF90b2RvIHtcXG4gICAgcGFkZGluZzogMTBweCAwIDQwcHggMDtcXG59XFxuLnNlYXJjaF90b2RvIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5zZWFyY2hfdG9kb19faW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uaW5wdXQuc2VhcmNoX3RvZG9faW5wLFxcbi5idG4uc2VhcmNoX3RvZG9fYnRuIHtcXG4gICAgd2lkdGg6IDQ4JTtcXG59XFxuLmJ0bi5uZXdfdG9kb19idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzL2Nzcy9IZWFkZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzL2Nzcy9NYWluLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fzc2V0cy9jc3MvVG9kby5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3NldHMvY3NzL1BvcHVwcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzNiwgMjU1KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5wLCBhIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYnRuLCAuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLmlucHV0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5pbnB1dDpmb2N1cywgLmJ0bjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMjI2LCAyMjYsIDIyNik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9hc3NldHMvY3NzL0hlYWRlci5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vYXNzZXRzL2Nzcy9NYWluLmNzcyk7XFxuQGltcG9ydCB1cmwoLi9hc3NldHMvY3NzL1RvZG8uY3NzKTtcXG5AaW1wb3J0IHVybCguL2Fzc2V0cy9jc3MvUG9wdXBzLmNzcyk7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMjM2LCAyNTUpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnAsIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5idG4sIC5pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaW5wdXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmlucHV0OmZvY3VzLCAuYnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigyMjYsIDIyNiwgMjI2KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCAnLi9hc3NldHMvanMvcG9wdXAuanMnIl0sIm5hbWVzIjpbIm1haW5CbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBvcHVwU2lnbkluVXAiLCJidG5SZWciLCJidG5TaWduIiwic2lnbkluQnRuIiwic2lnblVwQnRuIiwic2lnbkluU2VsZWN0b3IiLCJzaWduVXBTZWxlY3RvciIsImNsb3NlUG9wdXAiLCJTZXRBY3RpdmVCdG4iLCJzaWduSW4iLCJzaWduVXAiLCIkaW4iLCIkdXAiLCJrZXkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJTZWxlY3RvclNpZ25JblVwIiwic3R5bGUiLCJsZWZ0IiwicmlnaHQiLCJzZXRBY3RpdmVCdG4iLCJzZWxlY3RvclNpZ25JblVwIiwic2hvd1BvcHVwU2lnbkluVXAiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5zIiwicmVtb3ZlQWN0aXZlQ2xhc3MiLCJhZGRBY3RpdmVDbGFzcyIsInNlbGVjdFNpZ25VcCIsInNlbGVjdFNpZ25JbiIsImV2ZW50QnRuUG9wdXAiXSwic291cmNlUm9vdCI6IiJ9