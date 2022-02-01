var app;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/ajax.js":
/*!*******************************!*\
  !*** ./src/assets/js/ajax.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js/md5 */ "./node_modules/crypto-js/md5.js");
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var signinLog = document.getElementById("signin_log");
var signinPass = document.getElementById("signin_pass");
var signinBtn = document.getElementById("signin_btn");
var signupLog = document.getElementById("signup_log");
var signupPass = document.getElementById("signup_pass");
var signupPassConf = document.getElementById("signup_pass_conf");
var signupBtn = document.getElementById("signup_btn");
var errorSignin = document.querySelector(".error_signin");
var errorSignup = document.querySelector(".error_signup");
var newtodoTitle, newtodoTag, newtodoTodo, newtodoBtn;
var xhr = new XMLHttpRequest();
var listenerSigninLog, listenerSigninPass;

function _RNDSH(sumString) {
  var symbolArr = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  var rtsdnr = "";

  for (var i = 0; i < sumString; i++) {
    var index = Math.floor(Math.random() * symbolArr.length);
    rtsdnr += symbolArr[index];
  }

  return rtsdnr;
}

var userAutorized = function userAutorized() {
  var cookies = document.cookie.split(";");
  cookies.forEach(function (item) {
    if (item.includes("token=")) {
      setInterval(function () {
        document.cookie = "".concat(item, "; path=/; max-age=2;");
      }, 1000);
    }

    if (!item.includes("devToken=") && !item.includes("token=")) {
      window.location.href = "/";
    }
  });
};

userAutorized();
document.addEventListener("keydown", function (event) {
  return function () {
    if (event.code === "Insert") {
      var confExit = confirm("Вы действительно хотите выйти из системы?", "");

      if (confExit) {
        document.cookie = "token=; path=/; max-age=-1;";
        document.cookie = "devToken=; path=/; max-age=-1;";
        window.location.href = "/";
      }
    }
  }();
});
var responseJson;

var userSignIn = function userSignIn() {
  signinLog.addEventListener("input", function () {
    signinLog.value != "" ? listenerSigninLog = signinLog.value : listenerSigninLog = "";
  });
  signinPass.addEventListener("input", function () {
    signinPass.value != "" ? listenerSigninPass = crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(signinPass.value).toString() : listenerSigninPass = "";
  });
  signinBtn.addEventListener("click", function () {
    return function () {
      if (signinLog != "", signinPass != "") {
        var rndsh = _RNDSH(10);

        xhr.open("POST", "/dev_edition_v0_0_12token_17devdvp09high2002/user_signin?log=".concat(listenerSigninLog, "&pass=").concat(listenerSigninPass, "&token=").concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(listenerSigninLog + listenerSigninPass + rndsh)));
        xhr.responseType = "json";
        xhr.send();
        responseJson = xhr.response;

        xhr.onload = function () {
          if (xhr.status != 200) {
            console.log("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(xhr.status, ": ").concat(xhr.statusText));
          } else {
            document.cookie = "token=".concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(listenerSigninLog + listenerSigninPass + rndsh), "; path=/; max-age=2;");
            window.location.reload();
          }
        };
      } else {
        errorSignin.style.display = "block";
        errorSignin.innerHTML = responseJson.err;
      }
    }();
  });
};

userSignIn();

var userSignOut = function userSignOut() {
  if (document.querySelector(".header_nav__signout")) {
    var btnSignOut = document.querySelector(".header_nav__signout");
    btnSignOut.addEventListener("click", function () {
      return function () {
        var cookies = document.cookie.split(";");
        cookies.forEach(function (item) {
          if (item.includes("token=")) {
            xhr.open("POST", "/dev_edition_v0_0_12token_17devdvp09high2002/user_signout?".concat(item));
            xhr.send();
            document.cookie = "token=; path=/; max-age=-1;";
            window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002";
          }
        });
      }();
    });
  }
};

userSignOut();

var userSignUp = function userSignUp() {
  var log, pass, passConf;
  signupLog.addEventListener("input", function () {
    signupLog.value !== "" ? log = signupLog.value : log = "";
  });
  signupPass.addEventListener("input", function () {
    signupPass.value !== "" ? pass = signupPass.value : pass = "";
  });
  signupPassConf.addEventListener("input", function () {
    signupPassConf.value !== "" ? passConf = signupPassConf.value : passConf = "";
  });
  signupBtn.addEventListener("click", function () {
    return function () {
      if (log !== "" && pass !== "" && passConf !== "") {
        if (pass === passConf) {
          var rndsh = _RNDSH(10);

          xhr.open("POST", "/dev_edition_v0_0_12token_17devdvp09high2002/user_signup?login=".concat(log, "&passConf=").concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(passConf).toString(), "&token=").concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(log + passConf + rndsh)));
          xhr.responseType = "json";
          xhr.send();
          responseJson = xhr.response;

          xhr.onload = function () {
            if (xhr.status != 200) {
              console.log("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(xhr.status, ": ").concat(xhr.statusText));
            } else {
              document.cookie = "token=".concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(listenerSigninLog + listenerSigninPass + rndsh), "; path=/; max-age=2;");
              window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002";
            }
          };
        } else {
          errorSignup.style.display = "block";
          errorSignup.innerHTML = responseJson.err;
        }
      } else {
        errorSignup.style.display = "block";
        errorSignup.innerHTML = responseJson.err;
      }
    }();
  });
};

userSignUp();

var userCreateNewTodo = function userCreateNewTodo() {
  if (document.querySelector(".popup.popup_newtodo")) {
    newtodoTitle = document.getElementById("newtodo_title");
    newtodoTag = document.getElementById("newtodo_tag");
    newtodoTodo = document.getElementById("newtodo_todo");
    newtodoBtn = document.getElementById("newtodo_btn");
    var title, tag, todo;
    newtodoTitle.addEventListener("input", function () {
      newtodoTitle.value !== "" && _toConsumableArray(newtodoTitle.value).length < 255 ? title = newtodoTitle.value : (title = "", errorSignin.style.display = "block");
    });
    newtodoTag.addEventListener("input", function () {
      newtodoTag.value !== "" && _toConsumableArray(newtodoTag.value).length < 130 ? tag = newtodoTag.value : (tag = "", errorSignin.style.display = "block");
    });
    newtodoTodo.addEventListener("input", function () {
      newtodoTodo.value !== "" ? todo = newtodoTodo.value : todo = "";
    });
    newtodoBtn.addEventListener("click", function () {
      return function () {
        if (title !== "" && tag !== "" && todo !== "") {
          var cookies = document.cookie.split(";");
          cookies.forEach(function (item) {
            if (item.includes("token=")) {
              document.cookie = "".concat(item, "; path=/; max-age=2;");
            }
          });
          xhr.open("POST", "/dev_edition_v0_0_12token_17devdvp09high2002/create_newtodo?title=".concat(title, "&tag=").concat(tag, "&text=").concat(todo));
          xhr.send();

          xhr.onload = function () {
            if (xhr.status != 200) {
              console.log("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(xhr.status, ": ").concat(xhr.statusText));
              errorSignin.style.display = "block";
            } else {
              window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002/todo";
            }
          };
        } else {
          errorSignin.style.display = "block";
        }
      }();
    });
  }
};

userCreateNewTodo();

/***/ }),

/***/ "./src/assets/js/popup.js":
/*!********************************!*\
  !*** ./src/assets/js/popup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js/md5 */ "./node_modules/crypto-js/md5.js");
/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var popupData = {
  popupSignInUp: {
    isPopup: null,
    btnReg: null,
    btnSign: null,
    signInBtn: null,
    signUpBtn: null,
    popupSelectors: {
      leftSelector: null,
      rightSelector: null
    }
  },
  popupContact: {
    isPopup: null,
    contactBtn: [],
    messBtn: null,
    addressBtn: null,
    popupSelectors: {
      leftSelector: null,
      rightSelector: null
    }
  },
  closePopup: document.querySelectorAll(".popup_close")
};

var SetPopup = /*#__PURE__*/function () {
  function SetPopup(option) {
    _classCallCheck(this, SetPopup);

    this.$pp = option;
  }

  _createClass(SetPopup, [{
    key: "setSignInUp",
    value: function setSignInUp() {
      this.$pp.popupSignInUp.btnReg = document.querySelector(".header_nav__signup");
      this.$pp.popupSignInUp.btnSign = document.querySelector(".header_nav__signin");
      this.$pp.popupSignInUp.isPopup = document.querySelector(".popup_sign");
      this.$pp.popupSignInUp.signInBtn = document.querySelector(".signin_btn");
      this.$pp.popupSignInUp.signUpBtn = document.querySelector(".signup_btn");
      this.$pp.popupSignInUp.popupSelectors.leftSelector = document.querySelector(".section_signinup.popup_section_left");
      this.$pp.popupSignInUp.popupSelectors.rightSelector = document.querySelector(".section_signinup.popup_section_right");
    }
  }]);

  return SetPopup;
}();

var SetActiveBtn = /*#__PURE__*/function () {
  function SetActiveBtn(leftBtn, rightBtn) {
    _classCallCheck(this, SetActiveBtn);

    this.$lt = leftBtn;
    this.$rt = rightBtn;
  }

  _createClass(SetActiveBtn, [{
    key: "removeActiveClass",
    value: function removeActiveClass(key) {
      switch (key) {
        case "left":
          this.$lt.classList.remove("active_popup_btn");
          break;

        case "right":
          this.$rt.classList.remove("active_popup_btn");
          break;
      }
    }
  }, {
    key: "addActiveClass",
    value: function addActiveClass(key) {
      switch (key) {
        case "left":
          this.$lt.classList.add("active_popup_btn");
          break;

        case "right":
          this.$rt.classList.add("active_popup_btn");
          break;
      }
    }
  }]);

  return SetActiveBtn;
}();

var SelectorPopupSection = /*#__PURE__*/function () {
  function SelectorPopupSection(leftBtn, rightBtn) {
    _classCallCheck(this, SelectorPopupSection);

    this.$lt = leftBtn;
    this.$rt = rightBtn;
  }

  _createClass(SelectorPopupSection, [{
    key: "selectLeft",
    value: function selectLeft() {
      this.$lt.style.left = "-100%";
      this.$rt.style.right = "0";
    }
  }, {
    key: "selectRight",
    value: function selectRight() {
      this.$lt.style.left = null;
      this.$rt.style.right = null;
    }
  }]);

  return SelectorPopupSection;
}();

var TemplatesPopup = /*#__PURE__*/function () {
  function TemplatesPopup(btnPopup, popup, utils) {
    _classCallCheck(this, TemplatesPopup);

    this.$btn = btnPopup;
    this.$pop = popup;
    this.$ut = utils;
  }

  _createClass(TemplatesPopup, [{
    key: "showPopup",
    value: function showPopup() {
      var _this = this;

      this.$btn.forEach(function (item) {
        item.addEventListener("click", function (event) {
          _this.$pop.style.display = null;

          switch (_this.$ut) {
            case "delete":
              if (event.path[2].id) {
                userDeleteTodo(event.path[2].id);
              }

              break;

            case "edit":
              if (event.path[2].id) {
                userEditTodo(event.path[2].id);
              }

              break;
          }
        });
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      var _this2 = this;

      popupData.closePopup.forEach(function (item) {
        item.addEventListener("click", function () {
          _this2.$pop.classList.add("hide_popup");

          setTimeout(function () {
            _this2.$pop.style.display = "none";

            _this2.$pop.classList.remove("hide_popup");
          }, 290);
        });
      });
    }
  }]);

  return TemplatesPopup;
}();

var showPopupSignInUp = function showPopupSignInUp(setActiveBtn, selectorPopupSection) {
  popupData.popupSignInUp.isPopup.style.display = null;
  popupData.popupSignInUp.signInBtn.addEventListener("click", function () {
    return function () {
      if (!popupData.popupSignInUp.signInBtn.classList.contains("active_popup_btn")) {
        setActiveBtn.removeActiveClass("right");
        setActiveBtn.addActiveClass("left");
        selectorPopupSection.selectRight();
      }
    }();
  });
  popupData.popupSignInUp.signUpBtn.addEventListener("click", function () {
    return function () {
      if (!popupData.popupSignInUp.signUpBtn.classList.contains("active_popup_btn")) {
        setActiveBtn.removeActiveClass("left");
        setActiveBtn.addActiveClass("right");
        selectorPopupSection.selectLeft();
      }
    }();
  });
};

var eventBtnPopupSignInUp = function eventBtnPopupSignInUp() {
  var setActiveBtn = new SetActiveBtn(popupData.popupSignInUp.signInBtn, popupData.popupSignInUp.signUpBtn);
  var selectorPopupSection = new SelectorPopupSection(popupData.popupSignInUp.popupSelectors.leftSelector, popupData.popupSignInUp.popupSelectors.rightSelector);

  if (popupData.popupSignInUp.btnSign && popupData.popupSignInUp.btnReg) {
    popupData.popupSignInUp.btnSign.addEventListener("click", function () {
      return function () {
        showPopupSignInUp(setActiveBtn, selectorPopupSection);
      }();
    });
    popupData.popupSignInUp.btnReg.addEventListener("click", function () {
      return function () {
        setActiveBtn.removeActiveClass("left");
        setActiveBtn.addActiveClass("right");
        selectorPopupSection.selectLeft();
        showPopupSignInUp(setActiveBtn, selectorPopupSection);
      }();
    });
  }

  popupData.closePopup.forEach(function (item) {
    item.addEventListener("click", function () {
      return function () {
        setActiveBtn.removeActiveClass("right");
        setActiveBtn.addActiveClass("left");
        selectorPopupSection.selectRight();
        popupData.popupSignInUp.isPopup.style.display = "none";
      }();
    });
  });
};

var showNewTodo = function showNewTodo() {
  if (document.querySelector(".popup.popup_newtodo")) {
    var btnShowPopup = document.querySelectorAll(".btn.new_todo_btn");
    var popupNewTodo = document.querySelector(".popup.popup_newtodo");
    var templatesPopup = new TemplatesPopup(btnShowPopup, popupNewTodo);
    templatesPopup.showPopup();
    templatesPopup.closePopup();
  }
};

showNewTodo();

var showDeleteTodo = function showDeleteTodo() {
  if (document.querySelector(".popup.popup_todoDelete")) {
    var btnShowPopup = document.querySelectorAll(".show_delete_todo");
    var popupDeleteTodo = document.querySelector(".popup.popup_todoDelete");
    var templatesPopup = new TemplatesPopup(btnShowPopup, popupDeleteTodo, "delete");
    templatesPopup.showPopup();
    templatesPopup.closePopup();
  }
};

showDeleteTodo();

var showEditTodo = function showEditTodo() {
  if (document.querySelector(".popup.popup_edittodo")) {
    var btnShowPopup = document.querySelectorAll(".show_edit_todo");
    var popupEditTodo = document.querySelector(".popup.popup_edittodo");
    var templatesPopup = new TemplatesPopup(btnShowPopup, popupEditTodo, "edit");
    templatesPopup.showPopup();
    templatesPopup.closePopup();
  }
};

showEditTodo();

var showMoreTodo = function showMoreTodo() {
  if (document.querySelector(".popup.popup_moretodo")) {
    var btnShowPopup = document.querySelectorAll(".show_more_todo");
    var popupMoreTodo = document.querySelector(".popup.popup_moretodo");
    btnShowPopup.forEach(function (item) {
      item.addEventListener("click", function (event) {
        return function () {
          popupMoreTodo.style.display = null;
          var todoId = event.path[2].id;
          var title = document.querySelector("#".concat(todoId, " > .todo_rec__title > h2")).innerHTML;
          var tag = document.querySelector("#".concat(todoId, " > .todo_rec__title > h3")).innerHTML.replace(/Tag: @/g, "");
          var text = document.querySelector("#".concat(todoId, " > .todo_rec__content > p")).innerText;
          var titleBlock = document.querySelector(".moretodo_title");
          var tagBlock = document.querySelector(".moretodo_tag");
          var textBlock = document.querySelector(".moretodo_text");
          titleBlock.innerHTML = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A | ".concat(title);
          tagBlock.innerHTML = "\u0422\u044D\u0433 | @".concat(tag);
          textBlock.innerHTML = text;
        }();
      });
    });
    new TemplatesPopup(null, popupMoreTodo, null).closePopup();
  }
};

showMoreTodo();

if (document.querySelector(".popup.popup_sign")) {
  var setPopup = new SetPopup(popupData);
  setPopup.setSignInUp(), eventBtnPopupSignInUp();
} // AJAX
// AJAX


var xhr = new XMLHttpRequest();

function userDeleteTodo(elem) {
  if (elem) {
    var yesBtn = document.querySelector(".btn.yes_delete");
    var notBtn = document.querySelector(".btn.not_delete");
    var popupDeleteTodo = document.querySelector(".popup.popup_todoDelete");
    var templatesPopup = new TemplatesPopup(null, popupDeleteTodo);
    notBtn.addEventListener("click", function () {
      return function () {
        templatesPopup.closePopup();
      }();
    });
    yesBtn.addEventListener("click", function () {
      return function () {
        xhr.open("POST", "/dev_edition_v0_0_12token_17devdvp09high2002/delete_todo?todoId=".concat(elem.replace(/todo_/g, "")));
        xhr.send();
        window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002/todo";
      }();
    });
  }
}

function userEditTodo(elem) {
  if (elem) {
    var title = document.querySelector("#".concat(elem, " > .todo_rec__title > h2")).innerHTML;
    var tag = document.querySelector("#".concat(elem, " > .todo_rec__title > h3")).innerHTML.replace(/Tag: @/g, "");
    var text = document.querySelector("#".concat(elem, " > .todo_rec__content > p")).innerText;
    var inputTitle = document.getElementById("edittodo_title");
    var inputTag = document.getElementById("edittodo_tag");
    var inputText = document.getElementById("edittodo_todo");
    inputTitle.value = title;
    inputTag.value = tag;
    inputText.value = text;
    var editBtn = document.getElementById("edittodo_btn");
    var popupEditTodo = document.querySelector(".popup.popup_edittodo");
    var templatesPopup = new TemplatesPopup(null, popupEditTodo);
    templatesPopup.closePopup();
    editBtn.addEventListener("click", function () {
      return function () {
        xhr.open("POST", "/dev_edition_v0_0_12token_17devdvp09high2002/edit_todo?todoId=".concat(elem.replace(/todo_/g, ""), "&title=").concat(inputTitle.value, "&tag=").concat(inputTag.value, "&text=").concat(inputText.value));
        xhr.send();
        var cookies = document.cookie.split(";");
        cookies.forEach(function (item) {
          if (item.includes("token=")) {
            document.cookie = "".concat(item, "; path=/; max-age=2;");
          }
        });
        window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002/todo";
      }();
    });
  }
}

/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.crypto) {
	        crypto = __webpack_require__.g.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ "?9157");
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/md5.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

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
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n    position: fixed;\n    top: 0;\n    left: -100px;\n    width: 150px;\n    height: 100%;\n    z-index: 100;\n    background-color: white;\n    transition: .3s;\n}\n.header:hover {\n    left: 0;\n}\n.header_title {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 40px;\n}\n.header_title h1 {\n    padding-left: 10px;\n}\n.burger {\n    position: absolute;\n    top: 7px;\n    right: 7px;\n    width: 36px;\n    height: 31px;\n    border-top: 5px solid black;\n    border-bottom: 5px solid;\n}\n.burger::before {\n    content: '';\n    position: absolute;\n    top: 8px;\n    left: 0;\n    width: 100%;\n    height: 5px;\n    background-color: black;\n}\n.header_background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    display: block;\n    width: 100%;\n    height: 100vh;\n    background-color: rgb(0, 0, 0, .4);\n    opacity: 0;\n    transition: .3s;\n}\n.header:hover + .header_background {\n    z-index: 99;\n    opacity: 1;\n}\n.header:hover + .header_background + .main {\n    margin-left: 170px;\n}\n.header_nav__item {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n}\n.header_nav__item .image.active::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -20px;\n    width: 20px;\n    height: 100%;\n    z-index: 0;\n}\n.header_nav__link {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    font-weight: 500;\n    width: 100px;\n    height: 50px;\n    transition: .3s;\n}\n.header_nav__item a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100px;\n    height: 100%;\n}\n.header_nav__link:hover {\n    color: white;\n}\n.header_nav__signin,\n.header_nav__signup,\n.header_nav__signout {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    transition: .3s;\n}\n.header_nav__signin:hover,\n.header_nav__signup:hover,\n.header_nav__signout:hover {\n    cursor: pointer;\n    background-color: rgb(159, 236, 255);\n    padding-left: 20px;\n}\n.header_nav__item:nth-child(1) .header_nav__link:hover {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .header_nav__link:hover {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .header_nav__link:hover {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .header_nav__link:hover {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .header_nav__link:hover {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .header_nav__link:hover {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .header_nav__link:hover {\n    background-color: rgb(255, 0, 242);\n}\n.image {\n    display: block;\n    width: 50px;\n    height: 50px;\n}\n.header_nav__item:nth-child(1) .image,\n.header_nav__item:nth-child(1) .image.active::before {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .image,\n.header_nav__item:nth-child(2) .image.active::before {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .image,\n.header_nav__item:nth-child(3) .image.active::before {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .image,\n.header_nav__item:nth-child(4) .image.active::before {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .image,\n.header_nav__item:nth-child(5) .image.active::before {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .image,\n.header_nav__item:nth-child(6) .image.active::before {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .image,\n.header_nav__item:nth-child(7) .image.active::before {\n    background-color: rgb(255, 0, 242);\n}", "",{"version":3,"sources":["webpack://./src/assets/css/Header.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,OAAO;AACX;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,WAAW;IACX,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,cAAc;IACd,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,UAAU;IACV,eAAe;AACnB;AACA;IACI,WAAW;IACX,UAAU;AACd;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,cAAc;IACd,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;;;IAGI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;AACA;;;IAGI,eAAe;IACf,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,iCAAiC;AACrC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,iCAAiC;AACrC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;AACA;;IAEI,gCAAgC;AACpC;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,iCAAiC;AACrC;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,iCAAiC;AACrC;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,kCAAkC;AACtC","sourcesContent":[".header {\n    position: fixed;\n    top: 0;\n    left: -100px;\n    width: 150px;\n    height: 100%;\n    z-index: 100;\n    background-color: white;\n    transition: .3s;\n}\n.header:hover {\n    left: 0;\n}\n.header_title {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 40px;\n}\n.header_title h1 {\n    padding-left: 10px;\n}\n.burger {\n    position: absolute;\n    top: 7px;\n    right: 7px;\n    width: 36px;\n    height: 31px;\n    border-top: 5px solid black;\n    border-bottom: 5px solid;\n}\n.burger::before {\n    content: '';\n    position: absolute;\n    top: 8px;\n    left: 0;\n    width: 100%;\n    height: 5px;\n    background-color: black;\n}\n.header_background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    display: block;\n    width: 100%;\n    height: 100vh;\n    background-color: rgb(0, 0, 0, .4);\n    opacity: 0;\n    transition: .3s;\n}\n.header:hover + .header_background {\n    z-index: 99;\n    opacity: 1;\n}\n.header:hover + .header_background + .main {\n    margin-left: 170px;\n}\n.header_nav__item {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n}\n.header_nav__item .image.active::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: -20px;\n    width: 20px;\n    height: 100%;\n    z-index: 0;\n}\n.header_nav__link {\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    font-weight: 500;\n    width: 100px;\n    height: 50px;\n    transition: .3s;\n}\n.header_nav__item a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100px;\n    height: 100%;\n}\n.header_nav__link:hover {\n    color: white;\n}\n.header_nav__signin,\n.header_nav__signup,\n.header_nav__signout {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    transition: .3s;\n}\n.header_nav__signin:hover,\n.header_nav__signup:hover,\n.header_nav__signout:hover {\n    cursor: pointer;\n    background-color: rgb(159, 236, 255);\n    padding-left: 20px;\n}\n.header_nav__item:nth-child(1) .header_nav__link:hover {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .header_nav__link:hover {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .header_nav__link:hover {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .header_nav__link:hover {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .header_nav__link:hover {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .header_nav__link:hover {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .header_nav__link:hover {\n    background-color: rgb(255, 0, 242);\n}\n.image {\n    display: block;\n    width: 50px;\n    height: 50px;\n}\n.header_nav__item:nth-child(1) .image,\n.header_nav__item:nth-child(1) .image.active::before {\n    background-color: rgb(255, 0, 0);\n}\n.header_nav__item:nth-child(2) .image,\n.header_nav__item:nth-child(2) .image.active::before {\n    background-color: rgb(255, 102, 0);\n}\n.header_nav__item:nth-child(3) .image,\n.header_nav__item:nth-child(3) .image.active::before {\n    background-color: rgb(30, 255, 0);\n}\n.header_nav__item:nth-child(4) .image,\n.header_nav__item:nth-child(4) .image.active::before {\n    background-color: rgb(0, 255, 234);\n}\n.header_nav__item:nth-child(5) .image,\n.header_nav__item:nth-child(5) .image.active::before {\n    background-color: rgb(0, 60, 255);\n}\n.header_nav__item:nth-child(6) .image,\n.header_nav__item:nth-child(6) .image.active::before {\n    background-color: rgb(140, 0, 255);\n}\n.header_nav__item:nth-child(7) .image,\n.header_nav__item:nth-child(7) .image.active::before {\n    background-color: rgb(255, 0, 242);\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n    display: block;\n    height: 100%;\n    transition: 0.3s;\n    background-color: white;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 70px;\n    margin-right: 20px;\n    animation-name: showMain;\n    animation-duration: 1s;\n}\n@keyframes showMain {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n.main_content {\n    padding: 20px;\n    height: 100%;\n}\n.content_title {\n    position: relative;\n    width: 100%;\n    padding: 20px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.content_title h1 {\n    white-space: nowrap;\n    padding-right: 20px;\n}\n.content_title::after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 4px;\n    background-color: black;\n}\n\n.content_block {\n    padding: 20px;\n    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.3);\n}\n.content_block:not(:last-child) {\n    margin-bottom: 50px;\n}\n.content_news__header {\n    padding: 10px 0;\n}\n.content_news__content p {\n    padding: 2px 0;\n}\n.content_block.user > h2 {\n    padding: 10px 0 30px 0;\n}\n.content_block__items.user {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/Main.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;IACxB,sBAAsB;AAC1B;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,wCAAwC;AAC5C;AACA;IACI,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;AAClB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB","sourcesContent":[".main {\n    display: block;\n    height: 100%;\n    transition: 0.3s;\n    background-color: white;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: 70px;\n    margin-right: 20px;\n    animation-name: showMain;\n    animation-duration: 1s;\n}\n@keyframes showMain {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n.main_content {\n    padding: 20px;\n    height: 100%;\n}\n.content_title {\n    position: relative;\n    width: 100%;\n    padding: 20px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.content_title h1 {\n    white-space: nowrap;\n    padding-right: 20px;\n}\n.content_title::after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 4px;\n    background-color: black;\n}\n\n.content_block {\n    padding: 20px;\n    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.3);\n}\n.content_block:not(:last-child) {\n    margin-bottom: 50px;\n}\n.content_news__header {\n    padding: 10px 0;\n}\n.content_news__content p {\n    padding: 2px 0;\n}\n.content_block.user > h2 {\n    padding: 10px 0 30px 0;\n}\n.content_block__items.user {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.hide_popup {\n    animation-name: hidePopup;\n    animation-duration: 0.3s;\n}\n@keyframes hidePopup {\n    from {\n        opacity: 1;\n        transform: scale(1);\n    }\n    to {\n        opacity: 0;\n        transform: scale(0.8);\n    }\n}\n.popup::before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    background-color: rgba(0, 0, 0, 0.4);\n    width: 100%;\n    height: 100%;\n    animation-name: showBg;\n    animation-duration: 0.3s;\n}\n@keyframes showBg {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n.popup_close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20px;\n    height: 20px;\n    background-color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.popup_close::after,\n.popup_close::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background-color: black;\n}\n.popup_close::after {\n    transform: rotate(45deg);\n}\n.popup_close::before {\n    transform: rotate(-45deg);\n}\n.popup_header {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n.popup_header h2:nth-child(odd) {\n    cursor: pointer;\n    margin: 0 5px;\n}\n.popup_header h2 {\n    color: rgb(150, 150, 150);\n}\n.active_popup_btn {\n    color: black !important;\n    padding: 0 10px;\n    transition: 0.3s;\n}\n.popup_block {\n    background-color: white;\n    padding: 20px;\n    margin: 10px;\n    overflow: hidden;\n    animation-name: showPopup;\n    animation-duration: 0.3s;\n    width: 100%;\n}\n@keyframes showPopup {\n    from {\n        opacity: 0;\n        transform: scale(0.8);\n    }\n    to {\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n.popup_sign .popup_block {\n    max-width: 500px;\n    height: 350px;\n}\n.popup_edittodo .popup_block,\n.popup_newtodo .popup_block {\n    max-width: 800px;\n    height: 450px;\n}\n.popup_moretodo .popup_block {\n    max-width: 1000px;\n    height: 600px;\n}\n.popup_todoDelete .popup_block {\n    max-width: 350px;\n    height: 200px;\n}\n.more_info {\n    width: 100%;\n    height: 100%;\n}\n.popup_section {\n    transition: 0.3s;\n}\n.error_signin,\n.error_signup {\n    color: rgb(255, 0, 0);\n    padding-bottom: 5px;\n}\n.popup_content {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n}\n.popup_todoDelete .popup_content {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    flex-direction: column;\n    height: 80%;\n}\n.popup_todoDelete .popup_content p {\n    text-align: center;\n}\n.popup_moretodo .popup_content {\n    align-items: unset;\n    overflow-y: scroll;\n    overflow-x: scroll;\n    height: 90%;\n    margin-top: 20px;\n}\n.popup_edittodo .popup_block,\n.popup_newtodo .popup_block {\n    position: relative;\n    width: 100%;\n}\n.popup_edittodo .popup_content {\n    align-items: unset;\n}\n.popup_section_left {\n    left: 0;\n}\n.popup_section_right {\n    right: -100%;\n}\n.popup_section {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_section h2 {\n    text-align: center;\n}\n.popup_section form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_section form input {\n    width: 100%;\n    height: 30px;\n}\n.popup_section form input:not([type=\"submit\"]) {\n    background-color: rgb(224, 224, 224);\n    outline: none;\n    border: none;\n    border-radius: 10px;\n    padding-left: 5px;\n    font-size: 16px;\n}\n.popup_section form input:focus:not([type=\"submit\"]) {\n    box-shadow: 0 0 0 3px rgb(207, 207, 207);\n}\n.popup_inputs {\n    width: 70%;\n}\n.popup_section form .popup_inputs:not(:last-child) {\n    padding-bottom: 10px;\n}\n.popup_edittodo .popup_inputs,\n.popup_newtodo .popup_inputs {\n    padding-bottom: 20px;\n}\n.popup_edittodo .popup_inputs input,\n.popup_edittodo .popup_inputs textarea,\n.popup_newtodo .popup_inputs input,\n.popup_newtodo .popup_inputs textarea{\n    width: 100%;\n    max-width: 100%;\n    min-width: 100%;\n    max-height: 180px;\n}\n.popup_moretodo .popup_inputs {\n    width: 100%;\n}\n.popup_moretodo .popup_inputs {\n    padding-bottom: 20px;\n}\n.popup_moretodo .popup_inputs h3 {\n    text-align: center;\n}\n.section_deletetodo {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n.section_deletetodo .btn {\n    width: 45%;\n    height: 40px;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/Popups.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;IACI;QACI,UAAU;QACV,mBAAmB;IACvB;IACA;QACI,UAAU;QACV,qBAAqB;IACzB;AACJ;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,wBAAwB;AAC5B;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;AACnB;AACA;;IAEI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,wBAAwB;IACxB,WAAW;AACf;AACA;IACI;QACI,UAAU;QACV,qBAAqB;IACzB;IACA;QACI,UAAU;QACV,mBAAmB;IACvB;AACJ;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;;IAEI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;AACpB;AACA;;IAEI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;AACA;;IAEI,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,kBAAkB;AACtB;AACA;IACI,OAAO;AACX;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,oCAAoC;IACpC,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,UAAU;AACd;AACA;IACI,oBAAoB;AACxB;AACA;;IAEI,oBAAoB;AACxB;AACA;;;;IAII,WAAW;IACX,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,WAAW;AACf;AACA;IACI,oBAAoB;AACxB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,UAAU;IACV,YAAY;AAChB","sourcesContent":[".popup {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.hide_popup {\n    animation-name: hidePopup;\n    animation-duration: 0.3s;\n}\n@keyframes hidePopup {\n    from {\n        opacity: 1;\n        transform: scale(1);\n    }\n    to {\n        opacity: 0;\n        transform: scale(0.8);\n    }\n}\n.popup::before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    background-color: rgba(0, 0, 0, 0.4);\n    width: 100%;\n    height: 100%;\n    animation-name: showBg;\n    animation-duration: 0.3s;\n}\n@keyframes showBg {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n.popup_close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20px;\n    height: 20px;\n    background-color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.popup_close::after,\n.popup_close::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background-color: black;\n}\n.popup_close::after {\n    transform: rotate(45deg);\n}\n.popup_close::before {\n    transform: rotate(-45deg);\n}\n.popup_header {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n.popup_header h2:nth-child(odd) {\n    cursor: pointer;\n    margin: 0 5px;\n}\n.popup_header h2 {\n    color: rgb(150, 150, 150);\n}\n.active_popup_btn {\n    color: black !important;\n    padding: 0 10px;\n    transition: 0.3s;\n}\n.popup_block {\n    background-color: white;\n    padding: 20px;\n    margin: 10px;\n    overflow: hidden;\n    animation-name: showPopup;\n    animation-duration: 0.3s;\n    width: 100%;\n}\n@keyframes showPopup {\n    from {\n        opacity: 0;\n        transform: scale(0.8);\n    }\n    to {\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n.popup_sign .popup_block {\n    max-width: 500px;\n    height: 350px;\n}\n.popup_edittodo .popup_block,\n.popup_newtodo .popup_block {\n    max-width: 800px;\n    height: 450px;\n}\n.popup_moretodo .popup_block {\n    max-width: 1000px;\n    height: 600px;\n}\n.popup_todoDelete .popup_block {\n    max-width: 350px;\n    height: 200px;\n}\n.more_info {\n    width: 100%;\n    height: 100%;\n}\n.popup_section {\n    transition: 0.3s;\n}\n.error_signin,\n.error_signup {\n    color: rgb(255, 0, 0);\n    padding-bottom: 5px;\n}\n.popup_content {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n}\n.popup_todoDelete .popup_content {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    flex-direction: column;\n    height: 80%;\n}\n.popup_todoDelete .popup_content p {\n    text-align: center;\n}\n.popup_moretodo .popup_content {\n    align-items: unset;\n    overflow-y: scroll;\n    overflow-x: scroll;\n    height: 90%;\n    margin-top: 20px;\n}\n.popup_edittodo .popup_block,\n.popup_newtodo .popup_block {\n    position: relative;\n    width: 100%;\n}\n.popup_edittodo .popup_content {\n    align-items: unset;\n}\n.popup_section_left {\n    left: 0;\n}\n.popup_section_right {\n    right: -100%;\n}\n.popup_section {\n    position: absolute;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_section h2 {\n    text-align: center;\n}\n.popup_section form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.popup_section form input {\n    width: 100%;\n    height: 30px;\n}\n.popup_section form input:not([type=\"submit\"]) {\n    background-color: rgb(224, 224, 224);\n    outline: none;\n    border: none;\n    border-radius: 10px;\n    padding-left: 5px;\n    font-size: 16px;\n}\n.popup_section form input:focus:not([type=\"submit\"]) {\n    box-shadow: 0 0 0 3px rgb(207, 207, 207);\n}\n.popup_inputs {\n    width: 70%;\n}\n.popup_section form .popup_inputs:not(:last-child) {\n    padding-bottom: 10px;\n}\n.popup_edittodo .popup_inputs,\n.popup_newtodo .popup_inputs {\n    padding-bottom: 20px;\n}\n.popup_edittodo .popup_inputs input,\n.popup_edittodo .popup_inputs textarea,\n.popup_newtodo .popup_inputs input,\n.popup_newtodo .popup_inputs textarea{\n    width: 100%;\n    max-width: 100%;\n    min-width: 100%;\n    max-height: 180px;\n}\n.popup_moretodo .popup_inputs {\n    width: 100%;\n}\n.popup_moretodo .popup_inputs {\n    padding-bottom: 20px;\n}\n.popup_moretodo .popup_inputs h3 {\n    text-align: center;\n}\n.section_deletetodo {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n.section_deletetodo .btn {\n    width: 45%;\n    height: 40px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".search_todo {\n    padding: 10px 0 40px 0;\n}\n.search_todo h2 {\n    padding-bottom: 10px;\n}\n.search_todo__inputs {\n    display: flex;\n    justify-content: space-between;\n}\n.input.search_todo_inp,\n.btn.search_todo_btn {\n    width: 48%;\n}\n.btn.new_todo_btn {\n    width: 100%;\n    height: 60px;\n    font-weight: bold;\n    font-size: 25px;\n}\n.todo_rec {\n    width: 48%;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: 0 0 15px rgb(0, 0, 0, 0.1);\n    margin-bottom: 20px;\n}\n.todo_rec__title {\n    padding-bottom: 10px;\n}\n.todo_rec__content {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 5;\n    -webkit-box-orient: vertical;\n}\n.todo_rec__content p {\n    padding: 2px 0;\n}\n.content_news__footer,\n.todo_rec__footer {\n    padding-top: 10px;\n}\n.todo_rec__footer {\n    display: flex;\n    justify-content: space-between;\n}\n.todo_rec__footer p,\n.todo_rec__footer a {\n    cursor: pointer;\n    padding: 0 5px;\n}\n.todo_rec__footer p:hover,\n.todo_rec__footer a:hover {\n    text-decoration: underline;\n}\n.todo_rec__footer p:nth-child(1) {\n    color: royalblue;\n}\n.todo_rec__footer p:nth-child(2) {\n    color: rgb(255, 174, 0);\n}\n.todo_rec__footer p:nth-child(3) {\n    color: tomato;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/Todo.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;;IAEI,UAAU;AACd;AACA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,mBAAmB;AACvB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;AAChC;AACA;IACI,cAAc;AAClB;AACA;;IAEI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;;IAEI,eAAe;IACf,cAAc;AAClB;AACA;;IAEI,0BAA0B;AAC9B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;AACjB","sourcesContent":[".search_todo {\n    padding: 10px 0 40px 0;\n}\n.search_todo h2 {\n    padding-bottom: 10px;\n}\n.search_todo__inputs {\n    display: flex;\n    justify-content: space-between;\n}\n.input.search_todo_inp,\n.btn.search_todo_btn {\n    width: 48%;\n}\n.btn.new_todo_btn {\n    width: 100%;\n    height: 60px;\n    font-weight: bold;\n    font-size: 25px;\n}\n.todo_rec {\n    width: 48%;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: 0 0 15px rgb(0, 0, 0, 0.1);\n    margin-bottom: 20px;\n}\n.todo_rec__title {\n    padding-bottom: 10px;\n}\n.todo_rec__content {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 5;\n    -webkit-box-orient: vertical;\n}\n.todo_rec__content p {\n    padding: 2px 0;\n}\n.content_news__footer,\n.todo_rec__footer {\n    padding-top: 10px;\n}\n.todo_rec__footer {\n    display: flex;\n    justify-content: space-between;\n}\n.todo_rec__footer p,\n.todo_rec__footer a {\n    cursor: pointer;\n    padding: 0 5px;\n}\n.todo_rec__footer p:hover,\n.todo_rec__footer a:hover {\n    text-decoration: underline;\n}\n.todo_rec__footer p:nth-child(1) {\n    color: royalblue;\n}\n.todo_rec__footer p:nth-child(2) {\n    color: rgb(255, 174, 0);\n}\n.todo_rec__footer p:nth-child(3) {\n    color: tomato;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing:border-box;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: rgb(159, 236, 255);\n}\n\n.wrapper {\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n\np, a {\n    font-size: 18px;\n}\n.btn, .input {\n    outline: none;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    border-radius: 10px;\n    height: 30px;\n    font-size: 15px;\n    transition: .3s;\n}\n.input {\n    padding-left: 10px;\n}\n.btn {\n    cursor: pointer;\n    padding: 0 10px;\n}\n.input:focus, .btn:hover {\n    box-shadow: 0 0 0 4px rgb(226, 226, 226);\n}\n.textarea {\n    outline: none;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    border-radius: 10px;\n    font-size: 15px;\n    min-height: 30px;\n    min-width: 100px;\n    padding-left: 10px;\n    padding-top: 5px;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAKA;IACI,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,yCAAyC;IACzC,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["@import url(./assets/css/Header.css);\n@import url(./assets/css/Main.css);\n@import url(./assets/css/Todo.css);\n@import url(./assets/css/Popups.css);\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing:border-box;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: rgb(159, 236, 255);\n}\n\n.wrapper {\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n\np, a {\n    font-size: 18px;\n}\n.btn, .input {\n    outline: none;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    border-radius: 10px;\n    height: 30px;\n    font-size: 15px;\n    transition: .3s;\n}\n.input {\n    padding-left: 10px;\n}\n.btn {\n    cursor: pointer;\n    padding: 0 10px;\n}\n.input:focus, .btn:hover {\n    box-shadow: 0 0 0 4px rgb(226, 226, 226);\n}\n.textarea {\n    outline: none;\n    border: none;\n    background-color: rgb(240, 240, 240);\n    border-radius: 10px;\n    font-size: 15px;\n    min-height: 30px;\n    min-width: 100px;\n    padding-left: 10px;\n    padding-top: 5px;\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/* harmony import */ var _assets_js_ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/ajax.js */ "./src/assets/js/ajax.js");
/* harmony import */ var _assets_js_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/popup.js */ "./src/assets/js/popup.js");



})();

app = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvYXNzZXRzL2FwcC42NTg2ZGU4NTViYzNmYTM3Y2NjNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBLElBQU1FLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBRUEsSUFBTUcsU0FBUyxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQSxJQUFNSSxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBLElBQU1LLGNBQWMsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF2QjtBQUNBLElBQU1NLFNBQVMsR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBRUEsSUFBTU8sV0FBVyxHQUFHUixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxJQUFNQyxXQUFXLEdBQUdWLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUVBLElBQUlFLFlBQUosRUFBa0JDLFVBQWxCLEVBQThCQyxXQUE5QixFQUEyQ0MsVUFBM0M7QUFFQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBRUEsSUFBSUMsaUJBQUosRUFBdUJDLGtCQUF2Qjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxTQUFoQixFQUEyQjtBQUN2QixNQUFNQyxTQUFTLEdBQ1gsZ0VBREo7QUFFQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFNBQXBCLEVBQStCRyxDQUFDLEVBQWhD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QUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0Es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LE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sUUFBUSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLGtDQUFrQyxzQkFBc0Is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Q0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2Fzc2V0cy9qcy9hamF4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hc3NldHMvanMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9jb3JlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvbWQ1LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hc3NldHMvY3NzL0hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2Fzc2V0cy9jc3MvTWFpbi5jc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2Fzc2V0cy9jc3MvUG9wdXBzLmNzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYXNzZXRzL2Nzcy9Ub2RvLmNzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vW25hbWVdL2lnbm9yZWR8L2hvbWUvZG1pdHJ5L2dvL3NyYy9nb2xhbmctdG9kby93d3cvbm9kZV9tb2R1bGVzL2NyeXB0by1qc3xjcnlwdG8iLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTUQ1IGZyb20gXCJjcnlwdG8tanMvbWQ1XCI7XG5cbmNvbnN0IHNpZ25pbkxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmluX2xvZ1wiKTtcbmNvbnN0IHNpZ25pblBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25pbl9wYXNzXCIpO1xuY29uc3Qgc2lnbmluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduaW5fYnRuXCIpO1xuXG5jb25zdCBzaWdudXBMb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cF9sb2dcIik7XG5jb25zdCBzaWdudXBQYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWdudXBfcGFzc1wiKTtcbmNvbnN0IHNpZ251cFBhc3NDb25mID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWdudXBfcGFzc19jb25mXCIpO1xuY29uc3Qgc2lnbnVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWdudXBfYnRuXCIpO1xuXG5jb25zdCBlcnJvclNpZ25pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3Jfc2lnbmluXCIpO1xuY29uc3QgZXJyb3JTaWdudXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yX3NpZ251cFwiKTtcblxubGV0IG5ld3RvZG9UaXRsZSwgbmV3dG9kb1RhZywgbmV3dG9kb1RvZG8sIG5ld3RvZG9CdG47XG5cbmNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5sZXQgbGlzdGVuZXJTaWduaW5Mb2csIGxpc3RlbmVyU2lnbmluUGFzcztcblxuZnVuY3Rpb24gX1JORFNIKHN1bVN0cmluZykge1xuICAgIGNvbnN0IHN5bWJvbEFyciA9XG4gICAgICAgIFwiMTIzNDU2Nzg5MHF3ZXJ0eXVpb3Bhc2RmZ2hqa2x6eGN2Ym5tUVdFUlRZVUlPUEFTREZHSEpLTFpYQ1ZCTk1cIjtcbiAgICB2YXIgcnRzZG5yID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1bVN0cmluZzsgaSsrKSB7XG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN5bWJvbEFyci5sZW5ndGgpO1xuICAgICAgICBydHNkbnIgKz0gc3ltYm9sQXJyW2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHJ0c2Rucjtcbn1cblxuY29uc3QgdXNlckF1dG9yaXplZCA9ICgpID0+IHtcbiAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgY29va2llcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKFwidG9rZW49XCIpKSB7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7aXRlbX07IHBhdGg9LzsgbWF4LWFnZT0yO2A7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZighaXRlbS5pbmNsdWRlcyhcImRldlRva2VuPVwiKSAmJiAhaXRlbS5pbmNsdWRlcyhcInRva2VuPVwiKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxuICAgICAgICB9XG4gICAgfSk7XG59O1xudXNlckF1dG9yaXplZCgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKGV2ZW50LmNvZGUgPT09IFwiSW5zZXJ0XCIpIHtcbiAgICAgICAgICAgIGxldCBjb25mRXhpdCA9IGNvbmZpcm0oXCLQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQstGL0LnRgtC4INC40Lcg0YHQuNGB0YLQtdC80Ys/XCIsIFwiXCIpXG5cbiAgICAgICAgICAgIGlmKGNvbmZFeGl0KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0b2tlbj07IHBhdGg9LzsgbWF4LWFnZT0tMTtcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImRldlRva2VuPTsgcGF0aD0vOyBtYXgtYWdlPS0xO1wiO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0oKVxufSlcblxubGV0IHJlc3BvbnNlSnNvbjtcblxuY29uc3QgdXNlclNpZ25JbiA9ICgpID0+IHtcbiAgICBzaWduaW5Mb2cuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgc2lnbmluTG9nLnZhbHVlICE9IFwiXCJcbiAgICAgICAgICAgID8gKGxpc3RlbmVyU2lnbmluTG9nID0gc2lnbmluTG9nLnZhbHVlKVxuICAgICAgICAgICAgOiAobGlzdGVuZXJTaWduaW5Mb2cgPSBcIlwiKTtcbiAgICB9KTtcbiAgICBzaWduaW5QYXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHNpZ25pblBhc3MudmFsdWUgIT0gXCJcIlxuICAgICAgICAgICAgPyAobGlzdGVuZXJTaWduaW5QYXNzID0gTUQ1KHNpZ25pblBhc3MudmFsdWUpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICA6IChsaXN0ZW5lclNpZ25pblBhc3MgPSBcIlwiKTtcbiAgICB9KTtcbiAgICBzaWduaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKHNpZ25pbkxvZyAhPSBcIlwiLCBzaWduaW5QYXNzICE9IFwiXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJuZHNoID0gX1JORFNIKDEwKTtcblxuICAgICAgICAgICAgICAgIHhoci5vcGVuKFxuICAgICAgICAgICAgICAgICAgICBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgYC9kZXZfZWRpdGlvbl92MF8wXzEydG9rZW5fMTdkZXZkdnAwOWhpZ2gyMDAyL3VzZXJfc2lnbmluP2xvZz0ke2xpc3RlbmVyU2lnbmluTG9nfSZwYXNzPSR7bGlzdGVuZXJTaWduaW5QYXNzfSZ0b2tlbj0ke01ENShcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyU2lnbmluTG9nICsgbGlzdGVuZXJTaWduaW5QYXNzICsgcm5kc2hcbiAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJqc29uXCI7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSB4aHIucmVzcG9uc2VcblxuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHRva2VuPSR7TUQ1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyU2lnbmluTG9nICsgbGlzdGVuZXJTaWduaW5QYXNzICsgcm5kc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICl9OyBwYXRoPS87IG1heC1hZ2U9MjtgO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3JTaWduaW4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBlcnJvclNpZ25pbi5pbm5lckhUTUwgPSByZXNwb25zZUpzb24uZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG59O1xudXNlclNpZ25JbigpO1xuXG5jb25zdCB1c2VyU2lnbk91dCA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfbmF2X19zaWdub3V0XCIpKSB7XG4gICAgICAgIGNvbnN0IGJ0blNpZ25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9uYXZfX3NpZ25vdXRcIik7XG4gICAgICAgIGJ0blNpZ25PdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgICAgICAgICBjb29raWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoXCJ0b2tlbj1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBgL2Rldl9lZGl0aW9uX3YwXzBfMTJ0b2tlbl8xN2RldmR2cDA5aGlnaDIwMDIvdXNlcl9zaWdub3V0PyR7aXRlbX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcInRva2VuPTsgcGF0aD0vOyBtYXgtYWdlPS0xO1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kZXZfZWRpdGlvbl92MF8wXzEydG9rZW5fMTdkZXZkdnAwOWhpZ2gyMDAyXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG51c2VyU2lnbk91dCgpO1xuXG5jb25zdCB1c2VyU2lnblVwID0gKCkgPT4ge1xuICAgIGxldCBsb2csIHBhc3MsIHBhc3NDb25mO1xuXG4gICAgc2lnbnVwTG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHNpZ251cExvZy52YWx1ZSAhPT0gXCJcIiA/IChsb2cgPSBzaWdudXBMb2cudmFsdWUpIDogKGxvZyA9IFwiXCIpO1xuICAgIH0pO1xuICAgIHNpZ251cFBhc3MuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgc2lnbnVwUGFzcy52YWx1ZSAhPT0gXCJcIiA/IChwYXNzID0gc2lnbnVwUGFzcy52YWx1ZSkgOiAocGFzcyA9IFwiXCIpO1xuICAgIH0pO1xuICAgIHNpZ251cFBhc3NDb25mLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHNpZ251cFBhc3NDb25mLnZhbHVlICE9PSBcIlwiXG4gICAgICAgICAgICA/IChwYXNzQ29uZiA9IHNpZ251cFBhc3NDb25mLnZhbHVlKVxuICAgICAgICAgICAgOiAocGFzc0NvbmYgPSBcIlwiKTtcbiAgICB9KTtcblxuICAgIHNpZ251cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChsb2cgIT09IFwiXCIgJiYgcGFzcyAhPT0gXCJcIiAmJiBwYXNzQ29uZiAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzID09PSBwYXNzQ29uZikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm5kc2ggPSBfUk5EU0goMTApO1xuXG4gICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBgL2Rldl9lZGl0aW9uX3YwXzBfMTJ0b2tlbl8xN2RldmR2cDA5aGlnaDIwMDIvdXNlcl9zaWdudXA/bG9naW49JHtsb2d9JnBhc3NDb25mPSR7TUQ1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NDb25mXG4gICAgICAgICAgICAgICAgICAgICAgICApLnRvU3RyaW5nKCl9JnRva2VuPSR7TUQ1KGxvZyArIHBhc3NDb25mICsgcm5kc2gpfWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSB4aHIucmVzcG9uc2VcblxuICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGDQntGI0LjQsdC60LAgJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHRva2VuPSR7TUQ1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lclNpZ25pbkxvZyArIGxpc3RlbmVyU2lnbmluUGFzcyArIHJuZHNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX07IHBhdGg9LzsgbWF4LWFnZT0yO2A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kZXZfZWRpdGlvbl92MF8wXzEydG9rZW5fMTdkZXZkdnAwOWhpZ2gyMDAyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTaWdudXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTaWdudXAuaW5uZXJIVE1MID0gcmVzcG9uc2VKc29uLmVyclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3JTaWdudXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBlcnJvclNpZ251cC5pbm5lckhUTUwgPSByZXNwb25zZUpzb24uZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG59O1xudXNlclNpZ25VcCgpO1xuXG5jb25zdCB1c2VyQ3JlYXRlTmV3VG9kbyA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF9uZXd0b2RvXCIpKSB7XG4gICAgICAgIG5ld3RvZG9UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3dG9kb190aXRsZVwiKTtcbiAgICAgICAgbmV3dG9kb1RhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3dG9kb190YWdcIik7XG4gICAgICAgIG5ld3RvZG9Ub2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXd0b2RvX3RvZG9cIik7XG4gICAgICAgIG5ld3RvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld3RvZG9fYnRuXCIpO1xuXG4gICAgICAgIGxldCB0aXRsZSwgdGFnLCB0b2RvO1xuXG4gICAgICAgIG5ld3RvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbmV3dG9kb1RpdGxlLnZhbHVlICE9PSBcIlwiICYmIFsuLi5uZXd0b2RvVGl0bGUudmFsdWVdLmxlbmd0aCA8IDI1NVxuICAgICAgICAgICAgICAgID8gKHRpdGxlID0gbmV3dG9kb1RpdGxlLnZhbHVlKVxuICAgICAgICAgICAgICAgIDogKCh0aXRsZSA9IFwiXCIpLCAoZXJyb3JTaWduaW4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV3dG9kb1RhZy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbmV3dG9kb1RhZy52YWx1ZSAhPT0gXCJcIiAmJiBbLi4ubmV3dG9kb1RhZy52YWx1ZV0ubGVuZ3RoIDwgMTMwXG4gICAgICAgICAgICAgICAgPyAodGFnID0gbmV3dG9kb1RhZy52YWx1ZSlcbiAgICAgICAgICAgICAgICA6ICgodGFnID0gXCJcIiksIChlcnJvclNpZ25pbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXd0b2RvVG9kby5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbmV3dG9kb1RvZG8udmFsdWUgIT09IFwiXCIgPyAodG9kbyA9IG5ld3RvZG9Ub2RvLnZhbHVlKSA6ICh0b2RvID0gXCJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld3RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAhPT0gXCJcIiAmJiB0YWcgIT09IFwiXCIgJiYgdG9kbyAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoXCJ0b2tlbj1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtpdGVtfTsgcGF0aD0vOyBtYXgtYWdlPTI7YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBgL2Rldl9lZGl0aW9uX3YwXzBfMTJ0b2tlbl8xN2RldmR2cDA5aGlnaDIwMDIvY3JlYXRlX25ld3RvZG8/dGl0bGU9JHt0aXRsZX0mdGFnPSR7dGFnfSZ0ZXh0PSR7dG9kb31gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBg0J7RiNC40LHQutCwICR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JTaWduaW4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kZXZfZWRpdGlvbl92MF8wXzEydG9rZW5fMTdkZXZkdnAwOWhpZ2gyMDAyL3RvZG9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclNpZ25pbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG51c2VyQ3JlYXRlTmV3VG9kbygpO1xuIiwiaW1wb3J0IE1ENSBmcm9tIFwiY3J5cHRvLWpzL21kNVwiO1xuXG5jb25zdCBwb3B1cERhdGEgPSB7XG4gICAgcG9wdXBTaWduSW5VcDoge1xuICAgICAgICBpc1BvcHVwOiBudWxsLFxuICAgICAgICBidG5SZWc6IG51bGwsXG4gICAgICAgIGJ0blNpZ246IG51bGwsXG4gICAgICAgIHNpZ25JbkJ0bjogbnVsbCxcbiAgICAgICAgc2lnblVwQnRuOiBudWxsLFxuICAgICAgICBwb3B1cFNlbGVjdG9yczoge1xuICAgICAgICAgICAgbGVmdFNlbGVjdG9yOiBudWxsLFxuICAgICAgICAgICAgcmlnaHRTZWxlY3RvcjogbnVsbCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBvcHVwQ29udGFjdDoge1xuICAgICAgICBpc1BvcHVwOiBudWxsLFxuICAgICAgICBjb250YWN0QnRuOiBbXSxcbiAgICAgICAgbWVzc0J0bjogbnVsbCxcbiAgICAgICAgYWRkcmVzc0J0bjogbnVsbCxcbiAgICAgICAgcG9wdXBTZWxlY3RvcnM6IHtcbiAgICAgICAgICAgIGxlZnRTZWxlY3RvcjogbnVsbCxcbiAgICAgICAgICAgIHJpZ2h0U2VsZWN0b3I6IG51bGwsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjbG9zZVBvcHVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX2Nsb3NlXCIpLFxufTtcblxuY2xhc3MgU2V0UG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgICAgICB0aGlzLiRwcCA9IG9wdGlvbjtcbiAgICB9XG5cbiAgICBzZXRTaWduSW5VcCgpIHtcbiAgICAgICAgdGhpcy4kcHAucG9wdXBTaWduSW5VcC5idG5SZWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuaGVhZGVyX25hdl9fc2lnbnVwXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy4kcHAucG9wdXBTaWduSW5VcC5idG5TaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmhlYWRlcl9uYXZfX3NpZ25pblwiXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4kcHAucG9wdXBTaWduSW5VcC5pc1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9zaWduXCIpO1xuICAgICAgICB0aGlzLiRwcC5wb3B1cFNpZ25JblVwLnNpZ25JbkJ0biA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ25pbl9idG5cIik7XG4gICAgICAgIHRoaXMuJHBwLnBvcHVwU2lnbkluVXAuc2lnblVwQnRuID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwX2J0blwiKTtcblxuICAgICAgICB0aGlzLiRwcC5wb3B1cFNpZ25JblVwLnBvcHVwU2VsZWN0b3JzLmxlZnRTZWxlY3RvciA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25fc2lnbmludXAucG9wdXBfc2VjdGlvbl9sZWZ0XCIpO1xuICAgICAgICB0aGlzLiRwcC5wb3B1cFNpZ25JblVwLnBvcHVwU2VsZWN0b3JzLnJpZ2h0U2VsZWN0b3IgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uX3NpZ25pbnVwLnBvcHVwX3NlY3Rpb25fcmlnaHRcIik7XG4gICAgfVxufVxuXG5jbGFzcyBTZXRBY3RpdmVCdG4ge1xuICAgIGNvbnN0cnVjdG9yKGxlZnRCdG4sIHJpZ2h0QnRuKSB7XG4gICAgICAgIHRoaXMuJGx0ID0gbGVmdEJ0bjtcbiAgICAgICAgdGhpcy4kcnQgPSByaWdodEJ0bjtcbiAgICB9XG5cbiAgICByZW1vdmVBY3RpdmVDbGFzcyhrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy4kbHQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9wb3B1cF9idG5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLiRydC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlX3BvcHVwX2J0blwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEFjdGl2ZUNsYXNzKGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLiRsdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX3BvcHVwX2J0blwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuJHJ0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfcG9wdXBfYnRuXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTZWxlY3RvclBvcHVwU2VjdGlvbiB7XG4gICAgY29uc3RydWN0b3IobGVmdEJ0biwgcmlnaHRCdG4pIHtcbiAgICAgICAgdGhpcy4kbHQgPSBsZWZ0QnRuO1xuICAgICAgICB0aGlzLiRydCA9IHJpZ2h0QnRuO1xuICAgIH1cblxuICAgIHNlbGVjdExlZnQoKSB7XG4gICAgICAgIHRoaXMuJGx0LnN0eWxlLmxlZnQgPSBcIi0xMDAlXCI7XG4gICAgICAgIHRoaXMuJHJ0LnN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgfVxuICAgIHNlbGVjdFJpZ2h0KCkge1xuICAgICAgICB0aGlzLiRsdC5zdHlsZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcnQuc3R5bGUucmlnaHQgPSBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgVGVtcGxhdGVzUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKGJ0blBvcHVwLCBwb3B1cCwgdXRpbHMpIHtcbiAgICAgICAgdGhpcy4kYnRuID0gYnRuUG9wdXA7XG4gICAgICAgIHRoaXMuJHBvcCA9IHBvcHVwO1xuICAgICAgICB0aGlzLiR1dCA9IHV0aWxzO1xuICAgIH1cblxuICAgIHNob3dQb3B1cCgpIHtcbiAgICAgICAgdGhpcy4kYnRuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHBvcC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy4kdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhdGhbMl0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGVsZXRlVG9kbyhldmVudC5wYXRoWzJdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhdGhbMl0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRWRpdFRvZG8oZXZlbnQucGF0aFsyXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VQb3B1cCgpIHtcbiAgICAgICAgcG9wdXBEYXRhLmNsb3NlUG9wdXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHBvcC5jbGFzc0xpc3QuYWRkKFwiaGlkZV9wb3B1cFwiKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcG9wLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcG9wLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlX3BvcHVwXCIpO1xuICAgICAgICAgICAgICAgIH0sIDI5MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBzaG93UG9wdXBTaWduSW5VcCA9IChzZXRBY3RpdmVCdG4sIHNlbGVjdG9yUG9wdXBTZWN0aW9uKSA9PiB7XG4gICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuaXNQb3B1cC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcblxuICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLnNpZ25JbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuc2lnbkluQnRuLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVfcG9wdXBfYnRuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4ucmVtb3ZlQWN0aXZlQ2xhc3MoXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4uYWRkQWN0aXZlQ2xhc3MoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUG9wdXBTZWN0aW9uLnNlbGVjdFJpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG4gICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuc2lnblVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFwb3B1cERhdGEucG9wdXBTaWduSW5VcC5zaWduVXBCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZV9wb3B1cF9idG5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5yZW1vdmVBY3RpdmVDbGFzcyhcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlQnRuLmFkZEFjdGl2ZUNsYXNzKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JQb3B1cFNlY3Rpb24uc2VsZWN0TGVmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZXZlbnRCdG5Qb3B1cFNpZ25JblVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldEFjdGl2ZUJ0biA9IG5ldyBTZXRBY3RpdmVCdG4oXG4gICAgICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLnNpZ25JbkJ0bixcbiAgICAgICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuc2lnblVwQnRuXG4gICAgKTtcbiAgICBjb25zdCBzZWxlY3RvclBvcHVwU2VjdGlvbiA9IG5ldyBTZWxlY3RvclBvcHVwU2VjdGlvbihcbiAgICAgICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAucG9wdXBTZWxlY3RvcnMubGVmdFNlbGVjdG9yLFxuICAgICAgICBwb3B1cERhdGEucG9wdXBTaWduSW5VcC5wb3B1cFNlbGVjdG9ycy5yaWdodFNlbGVjdG9yXG4gICAgKTtcbiAgICBpZiAocG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuYnRuU2lnbiAmJiBwb3B1cERhdGEucG9wdXBTaWduSW5VcC5idG5SZWcpIHtcbiAgICAgICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuYnRuU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2hvd1BvcHVwU2lnbkluVXAoc2V0QWN0aXZlQnRuLCBzZWxlY3RvclBvcHVwU2VjdGlvbik7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuYnRuUmVnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4ucmVtb3ZlQWN0aXZlQ2xhc3MoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5hZGRBY3RpdmVDbGFzcyhcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUG9wdXBTZWN0aW9uLnNlbGVjdExlZnQoKTtcbiAgICAgICAgICAgICAgICBzaG93UG9wdXBTaWduSW5VcChzZXRBY3RpdmVCdG4sIHNlbGVjdG9yUG9wdXBTZWN0aW9uKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3B1cERhdGEuY2xvc2VQb3B1cC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5yZW1vdmVBY3RpdmVDbGFzcyhcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5hZGRBY3RpdmVDbGFzcyhcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JQb3B1cFNlY3Rpb24uc2VsZWN0UmlnaHQoKTtcbiAgICAgICAgICAgICAgICBwb3B1cERhdGEucG9wdXBTaWduSW5VcC5pc1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc2hvd05ld1RvZG8gPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfbmV3dG9kb1wiKSkge1xuICAgICAgICBsZXQgYnRuU2hvd1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4ubmV3X3RvZG9fYnRuXCIpO1xuICAgICAgICBsZXQgcG9wdXBOZXdUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF9uZXd0b2RvXCIpO1xuXG4gICAgICAgIGxldCB0ZW1wbGF0ZXNQb3B1cCA9IG5ldyBUZW1wbGF0ZXNQb3B1cChidG5TaG93UG9wdXAsIHBvcHVwTmV3VG9kbyk7XG5cbiAgICAgICAgdGVtcGxhdGVzUG9wdXAuc2hvd1BvcHVwKCk7XG4gICAgICAgIHRlbXBsYXRlc1BvcHVwLmNsb3NlUG9wdXAoKTtcbiAgICB9XG59O1xuc2hvd05ld1RvZG8oKTtcblxuY29uc3Qgc2hvd0RlbGV0ZVRvZG8gPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfdG9kb0RlbGV0ZVwiKSkge1xuICAgICAgICBsZXQgYnRuU2hvd1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93X2RlbGV0ZV90b2RvXCIpO1xuICAgICAgICBsZXQgcG9wdXBEZWxldGVUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF90b2RvRGVsZXRlXCIpO1xuXG4gICAgICAgIGxldCB0ZW1wbGF0ZXNQb3B1cCA9IG5ldyBUZW1wbGF0ZXNQb3B1cChcbiAgICAgICAgICAgIGJ0blNob3dQb3B1cCxcbiAgICAgICAgICAgIHBvcHVwRGVsZXRlVG9kbyxcbiAgICAgICAgICAgIFwiZGVsZXRlXCJcbiAgICAgICAgKTtcblxuICAgICAgICB0ZW1wbGF0ZXNQb3B1cC5zaG93UG9wdXAoKTtcbiAgICAgICAgdGVtcGxhdGVzUG9wdXAuY2xvc2VQb3B1cCgpO1xuICAgIH1cbn07XG5zaG93RGVsZXRlVG9kbygpO1xuXG5jb25zdCBzaG93RWRpdFRvZG8gPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfZWRpdHRvZG9cIikpIHtcbiAgICAgICAgbGV0IGJ0blNob3dQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd19lZGl0X3RvZG9cIik7XG4gICAgICAgIGxldCBwb3B1cEVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF9lZGl0dG9kb1wiKTtcblxuICAgICAgICBsZXQgdGVtcGxhdGVzUG9wdXAgPSBuZXcgVGVtcGxhdGVzUG9wdXAoXG4gICAgICAgICAgICBidG5TaG93UG9wdXAsXG4gICAgICAgICAgICBwb3B1cEVkaXRUb2RvLFxuICAgICAgICAgICAgXCJlZGl0XCJcbiAgICAgICAgKTtcblxuICAgICAgICB0ZW1wbGF0ZXNQb3B1cC5zaG93UG9wdXAoKTtcbiAgICAgICAgdGVtcGxhdGVzUG9wdXAuY2xvc2VQb3B1cCgpO1xuICAgIH1cbn07XG5zaG93RWRpdFRvZG8oKTtcblxuY29uc3Qgc2hvd01vcmVUb2RvID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLnBvcHVwX21vcmV0b2RvXCIpKSB7XG4gICAgICAgIGxldCBidG5TaG93UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfbW9yZV90b2RvXCIpO1xuICAgICAgICBsZXQgcG9wdXBNb3JlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfbW9yZXRvZG9cIik7XG5cbiAgICAgICAgYnRuU2hvd1BvcHVwLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cE1vcmVUb2RvLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IGV2ZW50LnBhdGhbMl0uaWRcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgIyR7dG9kb0lkfSA+IC50b2RvX3JlY19fdGl0bGUgPiBoMmBcbiAgICAgICAgICAgICAgICAgICAgKS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7dG9kb0lkfSA+IC50b2RvX3JlY19fdGl0bGUgPiBoM2ApXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5uZXJIVE1MLnJlcGxhY2UoL1RhZzogQC9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgIyR7dG9kb0lkfSA+IC50b2RvX3JlY19fY29udGVudCA+IHBgXG4gICAgICAgICAgICAgICAgICAgICkuaW5uZXJUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQmxvY2sgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JldG9kb190aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFnQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vcmV0b2RvX3RhZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JldG9kb190ZXh0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQmxvY2suaW5uZXJIVE1MID0gYNCX0LDQs9C+0LvQvtCy0L7QuiB8ICR7dGl0bGV9YDtcbiAgICAgICAgICAgICAgICAgICAgdGFnQmxvY2suaW5uZXJIVE1MID0gYNCi0Y3QsyB8IEAke3RhZ31gO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QmxvY2suaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ldyBUZW1wbGF0ZXNQb3B1cChudWxsLCBwb3B1cE1vcmVUb2RvLCBudWxsKS5jbG9zZVBvcHVwKCk7XG4gICAgfVxufTtcbnNob3dNb3JlVG9kbygpO1xuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF9zaWduXCIpKSB7XG4gICAgY29uc3Qgc2V0UG9wdXAgPSBuZXcgU2V0UG9wdXAocG9wdXBEYXRhKTtcbiAgICBzZXRQb3B1cC5zZXRTaWduSW5VcCgpLCBldmVudEJ0blBvcHVwU2lnbkluVXAoKTtcbn1cblxuLy8gQUpBWFxuLy8gQUpBWFxuY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbmZ1bmN0aW9uIHVzZXJEZWxldGVUb2RvKGVsZW0pIHtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgICBsZXQgeWVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4ueWVzX2RlbGV0ZVwiKTtcbiAgICAgICAgbGV0IG5vdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLm5vdF9kZWxldGVcIik7XG4gICAgICAgIGxldCBwb3B1cERlbGV0ZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLnBvcHVwX3RvZG9EZWxldGVcIik7XG5cbiAgICAgICAgbGV0IHRlbXBsYXRlc1BvcHVwID0gbmV3IFRlbXBsYXRlc1BvcHVwKG51bGwsIHBvcHVwRGVsZXRlVG9kbyk7XG5cbiAgICAgICAgbm90QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZXNQb3B1cC5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKFxuICAgICAgICAgICAgICAgICAgICBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgYC9kZXZfZWRpdGlvbl92MF8wXzEydG9rZW5fMTdkZXZkdnAwOWhpZ2gyMDAyL2RlbGV0ZV90b2RvP3RvZG9JZD0ke2VsZW0ucmVwbGFjZSgvdG9kb18vZywgXCJcIil9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZGV2X2VkaXRpb25fdjBfMF8xMnRva2VuXzE3ZGV2ZHZwMDloaWdoMjAwMi90b2RvXCI7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVzZXJFZGl0VG9kbyhlbGVtKSB7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCMke2VsZW19ID4gLnRvZG9fcmVjX190aXRsZSA+IGgyYFxuICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtfSA+IC50b2RvX3JlY19fdGl0bGUgPiBoM2ApXG4gICAgICAgICAgICAuaW5uZXJIVE1MLnJlcGxhY2UoL1RhZzogQC9nLCBcIlwiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgIyR7ZWxlbX0gPiAudG9kb19yZWNfX2NvbnRlbnQgPiBwYFxuICAgICAgICApLmlubmVyVGV4dDtcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0dG9kb190aXRsZVwiKTtcbiAgICAgICAgY29uc3QgaW5wdXRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXR0b2RvX3RhZ1wiKTtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0dG9kb190b2RvXCIpO1xuXG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSB0aXRsZTtcbiAgICAgICAgaW5wdXRUYWcudmFsdWUgPSB0YWc7XG4gICAgICAgIGlucHV0VGV4dC52YWx1ZSA9IHRleHQ7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHRvZG9fYnRuXCIpO1xuICAgICAgICBjb25zdCBwb3B1cEVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF9lZGl0dG9kb1wiKTtcblxuICAgICAgICBsZXQgdGVtcGxhdGVzUG9wdXAgPSBuZXcgVGVtcGxhdGVzUG9wdXAobnVsbCwgcG9wdXBFZGl0VG9kbyk7XG5cbiAgICAgICAgdGVtcGxhdGVzUG9wdXAuY2xvc2VQb3B1cCgpO1xuXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKFxuICAgICAgICAgICAgICAgICAgICBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgYC9kZXZfZWRpdGlvbl92MF8wXzEydG9rZW5fMTdkZXZkdnAwOWhpZ2gyMDAyL2VkaXRfdG9kbz90b2RvSWQ9JHtlbGVtLnJlcGxhY2UoL3RvZG9fL2csIFwiXCIpfSZ0aXRsZT0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUaXRsZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9JnRhZz0ke2lucHV0VGFnLnZhbHVlfSZ0ZXh0PSR7aW5wdXRUZXh0LnZhbHVlfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgICAgICAgICAgY29va2llcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKFwidG9rZW49XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtpdGVtfTsgcGF0aD0vOyBtYXgtYWdlPTI7YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kZXZfZWRpdGlvbl92MF8wXzEydG9rZW5fMTdkZXZkdnAwOWhpZ2gyMDAyL3RvZG9cIjtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKmdsb2JhbHMgd2luZG93LCBnbG9iYWwsIHJlcXVpcmUqL1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXG5cdCAgICB2YXIgY3J5cHRvO1xuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGluIHdlYiB3b3JrZXIgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gc2VsZi5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3b3JrZXJcblx0ICAgIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcy5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBnbG9iYWxUaGlzLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIChleHBlcmltZW50YWwgSUUgMTEpIGNyeXB0byBmcm9tIHdpbmRvdyAoQnJvd3Nlcilcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tc0NyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5tc0NyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIGdsb2JhbCAoTm9kZUpTKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbC5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW1wb3J0IHZpYSByZXF1aXJlIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgIH1cblxuXHQgICAgLypcblx0ICAgICAqIENyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuXHQgICAgICpcblx0ICAgICAqIEFzIE1hdGgucmFuZG9tKCkgaXMgY3J5cHRvZ3JhcGhpY2FsbHkgbm90IHNhZmUgdG8gdXNlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcnlwdG9TZWN1cmVSYW5kb21JbnQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgaWYgKGNyeXB0bykge1xuXHQgICAgICAgICAgICAvLyBVc2UgZ2V0UmFuZG9tVmFsdWVzIG1ldGhvZCAoQnJvd3Nlcilcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50MzJBcnJheSgxKSlbMF07XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBVc2UgcmFuZG9tQnl0ZXMgbWV0aG9kIChOb2RlSlMpXG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvLnJhbmRvbUJ5dGVzID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tQnl0ZXMoNCkucmVhZEludDMyTEUoKTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcignTmF0aXZlIGNyeXB0byBtb2R1bGUgY291bGQgbm90IGJlIHVzZWQgdG8gZ2V0IHNlY3VyZSByYW5kb20gbnVtYmVyLicpO1xuXHQgICAgfTtcblxuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWxsIG9mIE9iamVjdC5jcmVhdGVcblxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fVxuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGF0U2lnQnl0ZXM7IGogKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaikgPj4+IDJdID0gdGhhdFdvcmRzW2ogPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goY3J5cHRvU2VjdXJlUmFuZG9tSW50KCkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gQ29uc3RhbnRzIHRhYmxlXG5cdCAgICB2YXIgVCA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGNvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0ICAgICAgICAgICAgVFtpXSA9IChNYXRoLmFicyhNYXRoLnNpbihpICsgMSkpICogMHgxMDAwMDAwMDApIHwgMDtcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIE1ENSBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIE1ENSA9IENfYWxnby5NRDUgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KFtcblx0ICAgICAgICAgICAgICAgIDB4Njc0NTIzMDEsIDB4ZWZjZGFiODksXG5cdCAgICAgICAgICAgICAgICAweDk4YmFkY2ZlLCAweDEwMzI1NDc2XG5cdCAgICAgICAgICAgIF0pO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBvZmZzZXRfaSA9IG9mZnNldCArIGk7XG5cdCAgICAgICAgICAgICAgICB2YXIgTV9vZmZzZXRfaSA9IE1bb2Zmc2V0X2ldO1xuXG5cdCAgICAgICAgICAgICAgICBNW29mZnNldF9pXSA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChNX29mZnNldF9pIDw8IDgpICB8IChNX29mZnNldF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgMjQpIHwgKE1fb2Zmc2V0X2kgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzAgID0gTVtvZmZzZXQgKyAwXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzEgID0gTVtvZmZzZXQgKyAxXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzIgID0gTVtvZmZzZXQgKyAyXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzMgID0gTVtvZmZzZXQgKyAzXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzQgID0gTVtvZmZzZXQgKyA0XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzUgID0gTVtvZmZzZXQgKyA1XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzYgID0gTVtvZmZzZXQgKyA2XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzcgID0gTVtvZmZzZXQgKyA3XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzggID0gTVtvZmZzZXQgKyA4XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzkgID0gTVtvZmZzZXQgKyA5XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzEwID0gTVtvZmZzZXQgKyAxMF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xMSA9IE1bb2Zmc2V0ICsgMTFdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTIgPSBNW29mZnNldCArIDEyXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzEzID0gTVtvZmZzZXQgKyAxM107XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xNCA9IE1bb2Zmc2V0ICsgMTRdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTUgPSBNW29mZnNldCArIDE1XTtcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhbGJlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzAsICA3LCAgVFswXSk7XG5cdCAgICAgICAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF8xLCAgMTIsIFRbMV0pO1xuXHQgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfMiwgIDE3LCBUWzJdKTtcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzMsICAyMiwgVFszXSk7XG5cdCAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF80LCAgNywgIFRbNF0pO1xuXHQgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfNSwgIDEyLCBUWzVdKTtcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzYsICAxNywgVFs2XSk7XG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF83LCAgMjIsIFRbN10pO1xuXHQgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfOCwgIDcsICBUWzhdKTtcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzksICAxMiwgVFs5XSk7XG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8xMCwgMTcsIFRbMTBdKTtcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzExLCAyMiwgVFsxMV0pO1xuXHQgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTIsIDcsICBUWzEyXSk7XG5cdCAgICAgICAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF8xMywgMTIsIFRbMTNdKTtcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE0LCAxNywgVFsxNF0pO1xuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTUsIDIyLCBUWzE1XSk7XG5cblx0ICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEsICA1LCAgVFsxNl0pO1xuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfNiwgIDksICBUWzE3XSk7XG5cdCAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF8xMSwgMTQsIFRbMThdKTtcblx0ICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzAsICAyMCwgVFsxOV0pO1xuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfNSwgIDUsICBUWzIwXSk7XG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF8xMCwgOSwgIFRbMjFdKTtcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE1LCAxNCwgVFsyMl0pO1xuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfNCwgIDIwLCBUWzIzXSk7XG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF85LCAgNSwgIFRbMjRdKTtcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzE0LCA5LCAgVFsyNV0pO1xuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMywgIDE0LCBUWzI2XSk7XG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF84LCAgMjAsIFRbMjddKTtcblx0ICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEzLCA1LCAgVFsyOF0pO1xuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMiwgIDksICBUWzI5XSk7XG5cdCAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF83LCAgMTQsIFRbMzBdKTtcblx0ICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEyLCAyMCwgVFszMV0pO1xuXG5cdCAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF81LCAgNCwgIFRbMzJdKTtcblx0ICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzgsICAxMSwgVFszM10pO1xuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTEsIDE2LCBUWzM0XSk7XG5cdCAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8xNCwgMjMsIFRbMzVdKTtcblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEsICA0LCAgVFszNl0pO1xuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfNCwgIDExLCBUWzM3XSk7XG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF83LCAgMTYsIFRbMzhdKTtcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEwLCAyMywgVFszOV0pO1xuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTMsIDQsICBUWzQwXSk7XG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF8wLCAgMTEsIFRbNDFdKTtcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzMsICAxNiwgVFs0Ml0pO1xuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfNiwgIDIzLCBUWzQzXSk7XG5cdCAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF85LCAgNCwgIFRbNDRdKTtcblx0ICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEyLCAxMSwgVFs0NV0pO1xuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTUsIDE2LCBUWzQ2XSk7XG5cdCAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8yLCAgMjMsIFRbNDddKTtcblxuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfMCwgIDYsICBUWzQ4XSk7XG5cdCAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF83LCAgMTAsIFRbNDldKTtcblx0ICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE0LCAxNSwgVFs1MF0pO1xuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfNSwgIDIxLCBUWzUxXSk7XG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF8xMiwgNiwgIFRbNTJdKTtcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzMsICAxMCwgVFs1M10pO1xuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTAsIDE1LCBUWzU0XSk7XG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF8xLCAgMjEsIFRbNTVdKTtcblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzgsICA2LCAgVFs1Nl0pO1xuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTUsIDEwLCBUWzU3XSk7XG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF82LCAgMTUsIFRbNThdKTtcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEzLCAyMSwgVFs1OV0pO1xuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfNCwgIDYsICBUWzYwXSk7XG5cdCAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF8xMSwgMTAsIFRbNjFdKTtcblx0ICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzIsICAxNSwgVFs2Ml0pO1xuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfOSwgIDIxLCBUWzYzXSk7XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWxIID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbEwgPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IChcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWxIIDw8IDgpICB8IChuQml0c1RvdGFsSCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWxIIDw8IDI0KSB8IChuQml0c1RvdGFsSCA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gKFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbEwgPDwgOCkgIHwgKG5CaXRzVG90YWxMID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbEwgPDwgMjQpIHwgKG5CaXRzVG90YWxMID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgKTtcblxuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gKGRhdGFXb3Jkcy5sZW5ndGggKyAxKSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2hhc2g7XG5cdCAgICAgICAgICAgIHZhciBIID0gaGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgICAgIHZhciBIX2kgPSBIW2ldO1xuXG5cdCAgICAgICAgICAgICAgICBIW2ldID0gKCgoSF9pIDw8IDgpICB8IChIX2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgICAgKCgoSF9pIDw8IDI0KSB8IChIX2kgPj4+IDgpKSAgJiAweGZmMDBmZjAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBmdW5jdGlvbiBGRihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG5cdCAgICAgICAgdmFyIG4gPSBhICsgKChiICYgYykgfCAofmIgJiBkKSkgKyB4ICsgdDtcblx0ICAgICAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBHRyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG5cdCAgICAgICAgdmFyIG4gPSBhICsgKChiICYgZCkgfCAoYyAmIH5kKSkgKyB4ICsgdDtcblx0ICAgICAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBISChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG5cdCAgICAgICAgdmFyIG4gPSBhICsgKGIgXiBjIF4gZCkgKyB4ICsgdDtcblx0ICAgICAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBJSShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG5cdCAgICAgICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyB4ICsgdDtcblx0ICAgICAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xuXHQgICAgfVxuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuTUQ1KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5NRDUgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihNRDUpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY01ENShtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNNRDUgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoTUQ1KTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuTUQ1O1xuXG59KSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IC0xMDBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLmhlYWRlcjpob3ZlciB7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5oZWFkZXJfdGl0bGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmhlYWRlcl90aXRsZSBoMSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmJ1cmdlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA3cHg7XFxuICAgIHJpZ2h0OiA3cHg7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkO1xcbn1cXG4uYnVyZ2VyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmhlYWRlcl9iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuNCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLmhlYWRlcjpob3ZlciArIC5oZWFkZXJfYmFja2dyb3VuZCB7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uaGVhZGVyOmhvdmVyICsgLmhlYWRlcl9iYWNrZ3JvdW5kICsgLm1haW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMTcwcHg7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAtMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMDtcXG59XFxuLmhlYWRlcl9uYXZfX2xpbmsge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbSBhIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkZXJfbmF2X19zaWduaW4sXFxuLmhlYWRlcl9uYXZfX3NpZ251cCxcXG4uaGVhZGVyX25hdl9fc2lnbm91dCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLmhlYWRlcl9uYXZfX3NpZ25pbjpob3ZlcixcXG4uaGVhZGVyX25hdl9fc2lnbnVwOmhvdmVyLFxcbi5oZWFkZXJfbmF2X19zaWdub3V0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyMzYsIDI1NSk7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDEpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgyKSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMiwgMCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgzKSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjU1LCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDQpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjM0KTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDUpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDYwLCAyNTUpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNikgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAwLCAyNTUpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNykgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAyNDIpO1xcbn1cXG4uaW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDEpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgyKSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMiwgMCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgzKSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjU1LCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDQpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjM0KTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDUpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDYwLCAyNTUpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNikgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAwLCAyNTUpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNykgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAyNDIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9IZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLE9BQU87QUFDWDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOzs7SUFHSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTs7O0lBR0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksZ0NBQWdDO0FBQ3BDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksaUNBQWlDO0FBQ3JDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksaUNBQWlDO0FBQ3JDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTEwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyIHtcXG4gICAgbGVmdDogMDtcXG59XFxuLmhlYWRlcl90aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uaGVhZGVyX3RpdGxlIGgxIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uYnVyZ2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDdweDtcXG4gICAgcmlnaHQ6IDdweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XFxufVxcbi5idXJnZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uaGVhZGVyX2JhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC40KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyICsgLmhlYWRlcl9iYWNrZ3JvdW5kIHtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5oZWFkZXI6aG92ZXIgKyAuaGVhZGVyX2JhY2tncm91bmQgKyAubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluayB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIGEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlcl9uYXZfX3NpZ25pbixcXG4uaGVhZGVyX25hdl9fc2lnbnVwLFxcbi5oZWFkZXJfbmF2X19zaWdub3V0IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyX25hdl9fc2lnbmluOmhvdmVyLFxcbi5oZWFkZXJfbmF2X19zaWdudXA6aG92ZXIsXFxuLmhlYWRlcl9uYXZfX3NpZ25vdXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzNiwgMjU1KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVxcbi5pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgxKSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMikgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMykgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg0KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg1KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDYpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDcpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93TWFpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuQGtleWZyYW1lcyBzaG93TWFpbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbi5tYWluX2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50X3RpdGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnRfdGl0bGUgaDEge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uY29udGVudF90aXRsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250ZW50X2Jsb2NrIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG59XFxuLmNvbnRlbnRfYmxvY2s6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5jb250ZW50X25ld3NfX2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuLmNvbnRlbnRfbmV3c19fY29udGVudCBwIHtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxufVxcbi5jb250ZW50X2Jsb2NrLnVzZXIgPiBoMiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAzMHB4IDA7XFxufVxcbi5jb250ZW50X2Jsb2NrX19pdGVtcy51c2VyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9NYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hvd01haW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcbkBrZXlmcmFtZXMgc2hvd01haW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG4ubWFpbl9jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY29udGVudF90aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250ZW50X3RpdGxlIGgxIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuLmNvbnRlbnRfdGl0bGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGVudF9ibG9jayB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5jb250ZW50X2Jsb2NrOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG4uY29udGVudF9uZXdzX19oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5jb250ZW50X25ld3NfX2NvbnRlbnQgcCB7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbn1cXG4uY29udGVudF9ibG9jay51c2VyID4gaDIge1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMzBweCAwO1xcbn1cXG4uY29udGVudF9ibG9ja19faXRlbXMudXNlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oaWRlX3BvcHVwIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGVQb3B1cDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5Aa2V5ZnJhbWVzIGhpZGVQb3B1cCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgfVxcbn1cXG4ucG9wdXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93Qmc7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuQGtleWZyYW1lcyBzaG93Qmcge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG4ucG9wdXBfY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmFmdGVyLFxcbi5wb3B1cF9jbG9zZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLnBvcHVwX2Nsb3NlOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLnBvcHVwX2Nsb3NlOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4ucG9wdXBfaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBvcHVwX2hlYWRlciBoMjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG59XFxuLnBvcHVwX2hlYWRlciBoMiB7XFxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcbi5hY3RpdmVfcG9wdXBfYnRuIHtcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnBvcHVwX2Jsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dQb3B1cDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuQGtleWZyYW1lcyBzaG93UG9wdXAge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuLnBvcHVwX3NpZ24gLnBvcHVwX2Jsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG59XFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9ibG9jayxcXG4ucG9wdXBfbmV3dG9kbyAucG9wdXBfYmxvY2sge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG4ucG9wdXBfbW9yZXRvZG8gLnBvcHVwX2Jsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxufVxcbi5wb3B1cF90b2RvRGVsZXRlIC5wb3B1cF9ibG9jayB7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcbi5tb3JlX2luZm8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5lcnJvcl9zaWduaW4sXFxuLmVycm9yX3NpZ251cCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuLnBvcHVwX2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcbi5wb3B1cF90b2RvRGVsZXRlIC5wb3B1cF9jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuLnBvcHVwX3RvZG9EZWxldGUgLnBvcHVwX2NvbnRlbnQgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9jb250ZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfYmxvY2ssXFxuLnBvcHVwX25ld3RvZG8gLnBvcHVwX2Jsb2NrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9jb250ZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xcbn1cXG4ucG9wdXBfc2VjdGlvbl9sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG59XFxuLnBvcHVwX3NlY3Rpb25fcmlnaHQge1xcbiAgICByaWdodDogLTEwMCU7XFxufVxcbi5wb3B1cF9zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NlY3Rpb24gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NlY3Rpb24gZm9ybSBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGZvcm0gaW5wdXQ6bm90KFt0eXBlPVxcXCJzdWJtaXRcXFwiXSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnBvcHVwX3NlY3Rpb24gZm9ybSBpbnB1dDpmb2N1czpub3QoW3R5cGU9XFxcInN1Ym1pdFxcXCJdKSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoMjA3LCAyMDcsIDIwNyk7XFxufVxcbi5wb3B1cF9pbnB1dHMge1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiBmb3JtIC5wb3B1cF9pbnB1dHM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucG9wdXBfZWRpdHRvZG8gLnBvcHVwX2lucHV0cyxcXG4ucG9wdXBfbmV3dG9kbyAucG9wdXBfaW5wdXRzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfaW5wdXRzIGlucHV0LFxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfaW5wdXRzIHRleHRhcmVhLFxcbi5wb3B1cF9uZXd0b2RvIC5wb3B1cF9pbnB1dHMgaW5wdXQsXFxuLnBvcHVwX25ld3RvZG8gLnBvcHVwX2lucHV0cyB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxODBweDtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9pbnB1dHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9pbnB1dHMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9pbnB1dHMgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zZWN0aW9uX2RlbGV0ZXRvZG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5zZWN0aW9uX2RlbGV0ZXRvZG8gLmJ0biB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvUG9wdXBzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFVBQVU7UUFDVixxQkFBcUI7SUFDekI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUNBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLE9BQU87QUFDWDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTs7SUFFSSxvQkFBb0I7QUFDeEI7QUFDQTs7OztJQUlJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGlkZV9wb3B1cCB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBoaWRlUG9wdXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuQGtleWZyYW1lcyBoaWRlUG9wdXAge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIH1cXG59XFxuLnBvcHVwOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hvd0JnO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcbkBrZXlmcmFtZXMgc2hvd0JnIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuLnBvcHVwX2Nsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBvcHVwX2Nsb3NlOjphZnRlcixcXG4ucG9wdXBfY2xvc2U6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5wb3B1cF9jbG9zZTo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5wb3B1cF9jbG9zZTo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLnBvcHVwX2hlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wb3B1cF9oZWFkZXIgaDI6bnRoLWNoaWxkKG9kZCkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcbi5wb3B1cF9oZWFkZXIgaDIge1xcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbn1cXG4uYWN0aXZlX3BvcHVwX2J0biB7XFxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5wb3B1cF9ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93UG9wdXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbkBrZXlmcmFtZXMgc2hvd1BvcHVwIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcbi5wb3B1cF9zaWduIC5wb3B1cF9ibG9jayB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxufVxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfYmxvY2ssXFxuLnBvcHVwX25ld3RvZG8gLnBvcHVwX2Jsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9ibG9jayB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbn1cXG4ucG9wdXBfdG9kb0RlbGV0ZSAucG9wdXBfYmxvY2sge1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4ubW9yZV9pbmZvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnBvcHVwX3NlY3Rpb24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uZXJyb3Jfc2lnbmluLFxcbi5lcnJvcl9zaWdudXAge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5wb3B1cF9jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG4ucG9wdXBfdG9kb0RlbGV0ZSAucG9wdXBfY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcbi5wb3B1cF90b2RvRGVsZXRlIC5wb3B1cF9jb250ZW50IHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wb3B1cF9tb3JldG9kbyAucG9wdXBfY29udGVudCB7XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ucG9wdXBfZWRpdHRvZG8gLnBvcHVwX2Jsb2NrLFxcbi5wb3B1cF9uZXd0b2RvIC5wb3B1cF9ibG9jayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfY29udGVudCB7XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcXG59XFxuLnBvcHVwX3NlY3Rpb25fbGVmdCB7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5wb3B1cF9zZWN0aW9uX3JpZ2h0IHtcXG4gICAgcmlnaHQ6IC0xMDAlO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiBmb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGZvcm0gaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucG9wdXBfc2VjdGlvbiBmb3JtIGlucHV0Om5vdChbdHlwZT1cXFwic3VibWl0XFxcIl0pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGZvcm0gaW5wdXQ6Zm9jdXM6bm90KFt0eXBlPVxcXCJzdWJtaXRcXFwiXSkge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDIwNywgMjA3LCAyMDcpO1xcbn1cXG4ucG9wdXBfaW5wdXRzIHtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuLnBvcHVwX3NlY3Rpb24gZm9ybSAucG9wdXBfaW5wdXRzOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9pbnB1dHMsXFxuLnBvcHVwX25ld3RvZG8gLnBvcHVwX2lucHV0cyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ucG9wdXBfZWRpdHRvZG8gLnBvcHVwX2lucHV0cyBpbnB1dCxcXG4ucG9wdXBfZWRpdHRvZG8gLnBvcHVwX2lucHV0cyB0ZXh0YXJlYSxcXG4ucG9wdXBfbmV3dG9kbyAucG9wdXBfaW5wdXRzIGlucHV0LFxcbi5wb3B1cF9uZXd0b2RvIC5wb3B1cF9pbnB1dHMgdGV4dGFyZWF7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTgwcHg7XFxufVxcbi5wb3B1cF9tb3JldG9kbyAucG9wdXBfaW5wdXRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5wb3B1cF9tb3JldG9kbyAucG9wdXBfaW5wdXRzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cF9tb3JldG9kbyAucG9wdXBfaW5wdXRzIGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2VjdGlvbl9kZWxldGV0b2RvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uc2VjdGlvbl9kZWxldGV0b2RvIC5idG4ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZWFyY2hfdG9kbyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCA0MHB4IDA7XFxufVxcbi5zZWFyY2hfdG9kbyBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uc2VhcmNoX3RvZG9fX2lucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmlucHV0LnNlYXJjaF90b2RvX2lucCxcXG4uYnRuLnNlYXJjaF90b2RvX2J0biB7XFxuICAgIHdpZHRoOiA0OCU7XFxufVxcbi5idG4ubmV3X3RvZG9fYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLnRvZG9fcmVjIHtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50b2RvX3JlY19fdGl0bGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnRvZG9fcmVjX19jb250ZW50IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNTtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuLnRvZG9fcmVjX19jb250ZW50IHAge1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG59XFxuLmNvbnRlbnRfbmV3c19fZm9vdGVyLFxcbi50b2RvX3JlY19fZm9vdGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwLFxcbi50b2RvX3JlY19fZm9vdGVyIGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOmhvdmVyLFxcbi50b2RvX3JlY19fZm9vdGVyIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIgcDpudGgtY2hpbGQoMSkge1xcbiAgICBjb2xvcjogcm95YWxibHVlO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgyKSB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgzKSB7XFxuICAgIGNvbG9yOiB0b21hdG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL1RvZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWFyY2hfdG9kbyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCA0MHB4IDA7XFxufVxcbi5zZWFyY2hfdG9kbyBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uc2VhcmNoX3RvZG9fX2lucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmlucHV0LnNlYXJjaF90b2RvX2lucCxcXG4uYnRuLnNlYXJjaF90b2RvX2J0biB7XFxuICAgIHdpZHRoOiA0OCU7XFxufVxcbi5idG4ubmV3X3RvZG9fYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLnRvZG9fcmVjIHtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50b2RvX3JlY19fdGl0bGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnRvZG9fcmVjX19jb250ZW50IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNTtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuLnRvZG9fcmVjX19jb250ZW50IHAge1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG59XFxuLmNvbnRlbnRfbmV3c19fZm9vdGVyLFxcbi50b2RvX3JlY19fZm9vdGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwLFxcbi50b2RvX3JlY19fZm9vdGVyIGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOmhvdmVyLFxcbi50b2RvX3JlY19fZm9vdGVyIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIgcDpudGgtY2hpbGQoMSkge1xcbiAgICBjb2xvcjogcm95YWxibHVlO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgyKSB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgzKSB7XFxuICAgIGNvbG9yOiB0b21hdG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3NldHMvY3NzL0hlYWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3NldHMvY3NzL01haW4uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzL2Nzcy9Ub2RvLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fzc2V0cy9jc3MvUG9wdXBzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzNiwgMjU1KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5wLCBhIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYnRuLCAuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLmlucHV0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5pbnB1dDpmb2N1cywgLmJ0bjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2IoMjI2LCAyMjYsIDIyNik7XFxufVxcbi50ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCguL2Fzc2V0cy9jc3MvSGVhZGVyLmNzcyk7XFxuQGltcG9ydCB1cmwoLi9hc3NldHMvY3NzL01haW4uY3NzKTtcXG5AaW1wb3J0IHVybCguL2Fzc2V0cy9jc3MvVG9kby5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vYXNzZXRzL2Nzcy9Qb3B1cHMuY3NzKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMjM2LCAyNTUpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnAsIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5idG4sIC5pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaW5wdXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmlucHV0OmZvY3VzLCAuYnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigyMjYsIDIyNiwgMjI2KTtcXG59XFxuLnRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgJy4vYXNzZXRzL2pzL2FqYXguanMnXG5pbXBvcnQgJy4vYXNzZXRzL2pzL3BvcHVwLmpzJyJdLCJuYW1lcyI6WyJNRDUiLCJzaWduaW5Mb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2lnbmluUGFzcyIsInNpZ25pbkJ0biIsInNpZ251cExvZyIsInNpZ251cFBhc3MiLCJzaWdudXBQYXNzQ29uZiIsInNpZ251cEJ0biIsImVycm9yU2lnbmluIiwicXVlcnlTZWxlY3RvciIsImVycm9yU2lnbnVwIiwibmV3dG9kb1RpdGxlIiwibmV3dG9kb1RhZyIsIm5ld3RvZG9Ub2RvIiwibmV3dG9kb0J0biIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwibGlzdGVuZXJTaWduaW5Mb2ciLCJsaXN0ZW5lclNpZ25pblBhc3MiLCJfUk5EU0giLCJzdW1TdHJpbmciLCJzeW1ib2xBcnIiLCJydHNkbnIiLCJpIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ1c2VyQXV0b3JpemVkIiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwiZm9yRWFjaCIsIml0ZW0iLCJpbmNsdWRlcyIsInNldEludGVydmFsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsImNvbmZFeGl0IiwiY29uZmlybSIsInJlc3BvbnNlSnNvbiIsInVzZXJTaWduSW4iLCJ2YWx1ZSIsInRvU3RyaW5nIiwicm5kc2giLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsInJlc3BvbnNlIiwib25sb2FkIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJyZWxvYWQiLCJzdHlsZSIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJlcnIiLCJ1c2VyU2lnbk91dCIsImJ0blNpZ25PdXQiLCJ1c2VyU2lnblVwIiwicGFzcyIsInBhc3NDb25mIiwidXNlckNyZWF0ZU5ld1RvZG8iLCJ0aXRsZSIsInRhZyIsInRvZG8iLCJwb3B1cERhdGEiLCJwb3B1cFNpZ25JblVwIiwiaXNQb3B1cCIsImJ0blJlZyIsImJ0blNpZ24iLCJzaWduSW5CdG4iLCJzaWduVXBCdG4iLCJwb3B1cFNlbGVjdG9ycyIsImxlZnRTZWxlY3RvciIsInJpZ2h0U2VsZWN0b3IiLCJwb3B1cENvbnRhY3QiLCJjb250YWN0QnRuIiwibWVzc0J0biIsImFkZHJlc3NCdG4iLCJjbG9zZVBvcHVwIiwicXVlcnlTZWxlY3RvckFsbCIsIlNldFBvcHVwIiwib3B0aW9uIiwiJHBwIiwiU2V0QWN0aXZlQnRuIiwibGVmdEJ0biIsInJpZ2h0QnRuIiwiJGx0IiwiJHJ0Iiwia2V5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiU2VsZWN0b3JQb3B1cFNlY3Rpb24iLCJsZWZ0IiwicmlnaHQiLCJUZW1wbGF0ZXNQb3B1cCIsImJ0blBvcHVwIiwicG9wdXAiLCJ1dGlscyIsIiRidG4iLCIkcG9wIiwiJHV0IiwicGF0aCIsImlkIiwidXNlckRlbGV0ZVRvZG8iLCJ1c2VyRWRpdFRvZG8iLCJzZXRUaW1lb3V0Iiwic2hvd1BvcHVwU2lnbkluVXAiLCJzZXRBY3RpdmVCdG4iLCJzZWxlY3RvclBvcHVwU2VjdGlvbiIsImNvbnRhaW5zIiwicmVtb3ZlQWN0aXZlQ2xhc3MiLCJhZGRBY3RpdmVDbGFzcyIsInNlbGVjdFJpZ2h0Iiwic2VsZWN0TGVmdCIsImV2ZW50QnRuUG9wdXBTaWduSW5VcCIsInNob3dOZXdUb2RvIiwiYnRuU2hvd1BvcHVwIiwicG9wdXBOZXdUb2RvIiwidGVtcGxhdGVzUG9wdXAiLCJzaG93UG9wdXAiLCJzaG93RGVsZXRlVG9kbyIsInBvcHVwRGVsZXRlVG9kbyIsInNob3dFZGl0VG9kbyIsInBvcHVwRWRpdFRvZG8iLCJzaG93TW9yZVRvZG8iLCJwb3B1cE1vcmVUb2RvIiwidG9kb0lkIiwicmVwbGFjZSIsInRleHQiLCJpbm5lclRleHQiLCJ0aXRsZUJsb2NrIiwidGFnQmxvY2siLCJ0ZXh0QmxvY2siLCJzZXRQb3B1cCIsInNldFNpZ25JblVwIiwiZWxlbSIsInllc0J0biIsIm5vdEJ0biIsImlucHV0VGl0bGUiLCJpbnB1dFRhZyIsImlucHV0VGV4dCIsImVkaXRCdG4iXSwic291cmNlUm9vdCI6IiJ9