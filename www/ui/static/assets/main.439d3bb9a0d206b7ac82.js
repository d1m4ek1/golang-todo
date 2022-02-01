var main;
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
  });
};

userAutorized();
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

        xhr.open("POST", "/user_signin?log=".concat(listenerSigninLog, "&pass=").concat(listenerSigninPass, "&token=").concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(listenerSigninLog + listenerSigninPass + rndsh)));
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
            xhr.open("POST", "/user_signout?".concat(item));
            xhr.send();
            document.cookie = "token=; path=/; max-age=-1;";
            window.location.href = "/";
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

          xhr.open("POST", "/user_signup?login=".concat(log, "&passConf=").concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(passConf).toString(), "&token=").concat(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(log + passConf + rndsh)));
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
          xhr.open("POST", "/create_newtodo?title=".concat(title, "&tag=").concat(tag, "&text=").concat(todo));
          xhr.send();

          xhr.onload = function () {
            if (xhr.status != 200) {
              console.log("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(xhr.status, ": ").concat(xhr.statusText));
              errorSignin.style.display = "block";
            } else {
              window.location.href = "/todo";
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
        xhr.open("POST", "/delete_todo?todoId=".concat(elem.replace(/todo_/g, "")));
        xhr.send();
        window.location.href = "/todo";
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
        xhr.open("POST", "/edit_todo?todoId=".concat(elem.replace(/todo_/g, ""), "&title=").concat(inputTitle.value, "&tag=").concat(inputTag.value, "&text=").concat(inputText.value));
        xhr.send();
        var cookies = document.cookie.split(";");
        cookies.forEach(function (item) {
          if (item.includes("token=")) {
            document.cookie = "".concat(item, "; path=/; max-age=2;");
          }
        });
        window.location.href = "/todo";
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

main = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvYXNzZXRzL21haW4uNDM5ZDNiYjlhMGQyMDZiN2FjODIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQSxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUVBLElBQU1HLFNBQVMsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBQ0EsSUFBTUksVUFBVSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQSxJQUFNSyxjQUFjLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBdkI7QUFDQSxJQUFNTSxTQUFTLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUVBLElBQU1PLFdBQVcsR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHVixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFFQSxJQUFJRSxZQUFKLEVBQWtCQyxVQUFsQixFQUE4QkMsV0FBOUIsRUFBMkNDLFVBQTNDO0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUVBLElBQUlDLGlCQUFKLEVBQXVCQyxrQkFBdkI7O0FBRUEsU0FBU0MsTUFBVCxDQUFnQkMsU0FBaEIsRUFBMkI7QUFDdkIsTUFBTUMsU0FBUyxHQUNYLGdFQURKO0FBRUEsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxTQUFwQixFQUErQkcsQ0FBQyxFQUFo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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVOztBQUVWO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVOztBQUVWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QkFBdUIsa0JBQWtCLG9CQUFvQixvQ0FBb0MsR0FBRyw0QkFBNEIsaUJBQWlCLG1CQUFtQixHQUFHLFNBQVMsNEZBQTRGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNmQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYXNzZXRzL2pzL2FqYXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2Fzc2V0cy9qcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tZDUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2Fzc2V0cy9jc3MvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYXNzZXRzL2Nzcy9NYWluLmNzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYXNzZXRzL2Nzcy9Qb3B1cHMuY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hc3NldHMvY3NzL1RvZG8uY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vaWdub3JlZHwvaG9tZS9kbWl0cnkvZ28vc3JjL2dvbGFuZy10b2RvL3d3dy9ub2RlX21vZHVsZXMvY3J5cHRvLWpzfGNyeXB0byIsIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNRDUgZnJvbSBcImNyeXB0by1qcy9tZDVcIjtcblxuY29uc3Qgc2lnbmluTG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduaW5fbG9nXCIpO1xuY29uc3Qgc2lnbmluUGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbmluX3Bhc3NcIik7XG5jb25zdCBzaWduaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25pbl9idG5cIik7XG5cbmNvbnN0IHNpZ251cExvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbnVwX2xvZ1wiKTtcbmNvbnN0IHNpZ251cFBhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cF9wYXNzXCIpO1xuY29uc3Qgc2lnbnVwUGFzc0NvbmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cF9wYXNzX2NvbmZcIik7XG5jb25zdCBzaWdudXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cF9idG5cIik7XG5cbmNvbnN0IGVycm9yU2lnbmluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9zaWduaW5cIik7XG5jb25zdCBlcnJvclNpZ251cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3Jfc2lnbnVwXCIpO1xuXG5sZXQgbmV3dG9kb1RpdGxlLCBuZXd0b2RvVGFnLCBuZXd0b2RvVG9kbywgbmV3dG9kb0J0bjtcblxuY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbmxldCBsaXN0ZW5lclNpZ25pbkxvZywgbGlzdGVuZXJTaWduaW5QYXNzO1xuXG5mdW5jdGlvbiBfUk5EU0goc3VtU3RyaW5nKSB7XG4gICAgY29uc3Qgc3ltYm9sQXJyID1cbiAgICAgICAgXCIxMjM0NTY3ODkwcXdlcnR5dWlvcGFzZGZnaGprbHp4Y3Zibm1RV0VSVFlVSU9QQVNERkdISktMWlhDVkJOTVwiO1xuICAgIHZhciBydHNkbnIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VtU3RyaW5nOyBpKyspIHtcbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3ltYm9sQXJyLmxlbmd0aCk7XG4gICAgICAgIHJ0c2RuciArPSBzeW1ib2xBcnJbaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gcnRzZG5yO1xufVxuXG5jb25zdCB1c2VyQXV0b3JpemVkID0gKCkgPT4ge1xuICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICBjb29raWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoXCJ0b2tlbj1cIikpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtpdGVtfTsgcGF0aD0vOyBtYXgtYWdlPTI7YDtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xudXNlckF1dG9yaXplZCgpO1xuXG5sZXQgcmVzcG9uc2VKc29uO1xuXG5jb25zdCB1c2VyU2lnbkluID0gKCkgPT4ge1xuICAgIHNpZ25pbkxvZy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICBzaWduaW5Mb2cudmFsdWUgIT0gXCJcIlxuICAgICAgICAgICAgPyAobGlzdGVuZXJTaWduaW5Mb2cgPSBzaWduaW5Mb2cudmFsdWUpXG4gICAgICAgICAgICA6IChsaXN0ZW5lclNpZ25pbkxvZyA9IFwiXCIpO1xuICAgIH0pO1xuICAgIHNpZ25pblBhc3MuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgc2lnbmluUGFzcy52YWx1ZSAhPSBcIlwiXG4gICAgICAgICAgICA/IChsaXN0ZW5lclNpZ25pblBhc3MgPSBNRDUoc2lnbmluUGFzcy52YWx1ZSkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIDogKGxpc3RlbmVyU2lnbmluUGFzcyA9IFwiXCIpO1xuICAgIH0pO1xuICAgIHNpZ25pbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgoc2lnbmluTG9nICE9IFwiXCIsIHNpZ25pblBhc3MgIT0gXCJcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm5kc2ggPSBfUk5EU0goMTApO1xuXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oXG4gICAgICAgICAgICAgICAgICAgIFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBgL3VzZXJfc2lnbmluP2xvZz0ke2xpc3RlbmVyU2lnbmluTG9nfSZwYXNzPSR7bGlzdGVuZXJTaWduaW5QYXNzfSZ0b2tlbj0ke01ENShcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyU2lnbmluTG9nICsgbGlzdGVuZXJTaWduaW5QYXNzICsgcm5kc2hcbiAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJqc29uXCI7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSB4aHIucmVzcG9uc2VcblxuICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHRva2VuPSR7TUQ1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyU2lnbmluTG9nICsgbGlzdGVuZXJTaWduaW5QYXNzICsgcm5kc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICl9OyBwYXRoPS87IG1heC1hZ2U9MjtgO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3JTaWduaW4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBlcnJvclNpZ25pbi5pbm5lckhUTUwgPSByZXNwb25zZUpzb24uZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG59O1xudXNlclNpZ25JbigpO1xuXG5jb25zdCB1c2VyU2lnbk91dCA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfbmF2X19zaWdub3V0XCIpKSB7XG4gICAgICAgIGNvbnN0IGJ0blNpZ25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9uYXZfX3NpZ25vdXRcIik7XG4gICAgICAgIGJ0blNpZ25PdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgICAgICAgICBjb29raWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoXCJ0b2tlbj1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBgL3VzZXJfc2lnbm91dD8ke2l0ZW19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0b2tlbj07IHBhdGg9LzsgbWF4LWFnZT0tMTtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG51c2VyU2lnbk91dCgpO1xuXG5jb25zdCB1c2VyU2lnblVwID0gKCkgPT4ge1xuICAgIGxldCBsb2csIHBhc3MsIHBhc3NDb25mO1xuXG4gICAgc2lnbnVwTG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHNpZ251cExvZy52YWx1ZSAhPT0gXCJcIiA/IChsb2cgPSBzaWdudXBMb2cudmFsdWUpIDogKGxvZyA9IFwiXCIpO1xuICAgIH0pO1xuICAgIHNpZ251cFBhc3MuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgc2lnbnVwUGFzcy52YWx1ZSAhPT0gXCJcIiA/IChwYXNzID0gc2lnbnVwUGFzcy52YWx1ZSkgOiAocGFzcyA9IFwiXCIpO1xuICAgIH0pO1xuICAgIHNpZ251cFBhc3NDb25mLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHNpZ251cFBhc3NDb25mLnZhbHVlICE9PSBcIlwiXG4gICAgICAgICAgICA/IChwYXNzQ29uZiA9IHNpZ251cFBhc3NDb25mLnZhbHVlKVxuICAgICAgICAgICAgOiAocGFzc0NvbmYgPSBcIlwiKTtcbiAgICB9KTtcblxuICAgIHNpZ251cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChsb2cgIT09IFwiXCIgJiYgcGFzcyAhPT0gXCJcIiAmJiBwYXNzQ29uZiAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzID09PSBwYXNzQ29uZikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm5kc2ggPSBfUk5EU0goMTApO1xuXG4gICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBgL3VzZXJfc2lnbnVwP2xvZ2luPSR7bG9nfSZwYXNzQ29uZj0ke01ENShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzQ29uZlxuICAgICAgICAgICAgICAgICAgICAgICAgKS50b1N0cmluZygpfSZ0b2tlbj0ke01ENShsb2cgKyBwYXNzQ29uZiArIHJuZHNoKX1gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0geGhyLnJlc3BvbnNlXG5cbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBg0J7RiNC40LHQutCwICR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGB0b2tlbj0ke01ENShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJTaWduaW5Mb2cgKyBsaXN0ZW5lclNpZ25pblBhc3MgKyBybmRzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9OyBwYXRoPS87IG1heC1hZ2U9MjtgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclNpZ251cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICBlcnJvclNpZ251cC5pbm5lckhUTUwgPSByZXNwb25zZUpzb24uZXJyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvclNpZ251cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGVycm9yU2lnbnVwLmlubmVySFRNTCA9IHJlc3BvbnNlSnNvbi5lcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbn07XG51c2VyU2lnblVwKCk7XG5cbmNvbnN0IHVzZXJDcmVhdGVOZXdUb2RvID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLnBvcHVwX25ld3RvZG9cIikpIHtcbiAgICAgICAgbmV3dG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXd0b2RvX3RpdGxlXCIpO1xuICAgICAgICBuZXd0b2RvVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXd0b2RvX3RhZ1wiKTtcbiAgICAgICAgbmV3dG9kb1RvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld3RvZG9fdG9kb1wiKTtcbiAgICAgICAgbmV3dG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3dG9kb19idG5cIik7XG5cbiAgICAgICAgbGV0IHRpdGxlLCB0YWcsIHRvZG87XG5cbiAgICAgICAgbmV3dG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXd0b2RvVGl0bGUudmFsdWUgIT09IFwiXCIgJiYgWy4uLm5ld3RvZG9UaXRsZS52YWx1ZV0ubGVuZ3RoIDwgMjU1XG4gICAgICAgICAgICAgICAgPyAodGl0bGUgPSBuZXd0b2RvVGl0bGUudmFsdWUpXG4gICAgICAgICAgICAgICAgOiAoKHRpdGxlID0gXCJcIiksIChlcnJvclNpZ25pbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBuZXd0b2RvVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXd0b2RvVGFnLnZhbHVlICE9PSBcIlwiICYmIFsuLi5uZXd0b2RvVGFnLnZhbHVlXS5sZW5ndGggPCAxMzBcbiAgICAgICAgICAgICAgICA/ICh0YWcgPSBuZXd0b2RvVGFnLnZhbHVlKVxuICAgICAgICAgICAgICAgIDogKCh0YWcgPSBcIlwiKSwgKGVycm9yU2lnbmluLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5ld3RvZG9Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXd0b2RvVG9kby52YWx1ZSAhPT0gXCJcIiA/ICh0b2RvID0gbmV3dG9kb1RvZG8udmFsdWUpIDogKHRvZG8gPSBcIlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3dG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiICYmIHRhZyAhPT0gXCJcIiAmJiB0b2RvICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29va2llcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcyhcInRva2VuPVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke2l0ZW19OyBwYXRoPS87IG1heC1hZ2U9MjtgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGAvY3JlYXRlX25ld3RvZG8/dGl0bGU9JHt0aXRsZX0mdGFnPSR7dGFnfSZ0ZXh0PSR7dG9kb31gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBg0J7RiNC40LHQutCwICR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JTaWduaW4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi90b2RvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTaWduaW4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xudXNlckNyZWF0ZU5ld1RvZG8oKTtcbiIsImltcG9ydCBNRDUgZnJvbSBcImNyeXB0by1qcy9tZDVcIjtcblxuY29uc3QgcG9wdXBEYXRhID0ge1xuICAgIHBvcHVwU2lnbkluVXA6IHtcbiAgICAgICAgaXNQb3B1cDogbnVsbCxcbiAgICAgICAgYnRuUmVnOiBudWxsLFxuICAgICAgICBidG5TaWduOiBudWxsLFxuICAgICAgICBzaWduSW5CdG46IG51bGwsXG4gICAgICAgIHNpZ25VcEJ0bjogbnVsbCxcbiAgICAgICAgcG9wdXBTZWxlY3RvcnM6IHtcbiAgICAgICAgICAgIGxlZnRTZWxlY3RvcjogbnVsbCxcbiAgICAgICAgICAgIHJpZ2h0U2VsZWN0b3I6IG51bGwsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwb3B1cENvbnRhY3Q6IHtcbiAgICAgICAgaXNQb3B1cDogbnVsbCxcbiAgICAgICAgY29udGFjdEJ0bjogW10sXG4gICAgICAgIG1lc3NCdG46IG51bGwsXG4gICAgICAgIGFkZHJlc3NCdG46IG51bGwsXG4gICAgICAgIHBvcHVwU2VsZWN0b3JzOiB7XG4gICAgICAgICAgICBsZWZ0U2VsZWN0b3I6IG51bGwsXG4gICAgICAgICAgICByaWdodFNlbGVjdG9yOiBudWxsLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2xvc2VQb3B1cDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9jbG9zZVwiKSxcbn07XG5cbmNsYXNzIFNldFBvcHVwIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICAgICAgdGhpcy4kcHAgPSBvcHRpb247XG4gICAgfVxuXG4gICAgc2V0U2lnbkluVXAoKSB7XG4gICAgICAgIHRoaXMuJHBwLnBvcHVwU2lnbkluVXAuYnRuUmVnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmhlYWRlcl9uYXZfX3NpZ251cFwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuJHBwLnBvcHVwU2lnbkluVXAuYnRuU2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5oZWFkZXJfbmF2X19zaWduaW5cIlxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuJHBwLnBvcHVwU2lnbkluVXAuaXNQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfc2lnblwiKTtcbiAgICAgICAgdGhpcy4kcHAucG9wdXBTaWduSW5VcC5zaWduSW5CdG4gPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduaW5fYnRuXCIpO1xuICAgICAgICB0aGlzLiRwcC5wb3B1cFNpZ25JblVwLnNpZ25VcEJ0biA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cF9idG5cIik7XG5cbiAgICAgICAgdGhpcy4kcHAucG9wdXBTaWduSW5VcC5wb3B1cFNlbGVjdG9ycy5sZWZ0U2VsZWN0b3IgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWN0aW9uX3NpZ25pbnVwLnBvcHVwX3NlY3Rpb25fbGVmdFwiKTtcbiAgICAgICAgdGhpcy4kcHAucG9wdXBTaWduSW5VcC5wb3B1cFNlbGVjdG9ycy5yaWdodFNlbGVjdG9yID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvbl9zaWduaW51cC5wb3B1cF9zZWN0aW9uX3JpZ2h0XCIpO1xuICAgIH1cbn1cblxuY2xhc3MgU2V0QWN0aXZlQnRuIHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0QnRuLCByaWdodEJ0bikge1xuICAgICAgICB0aGlzLiRsdCA9IGxlZnRCdG47XG4gICAgICAgIHRoaXMuJHJ0ID0gcmlnaHRCdG47XG4gICAgfVxuXG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3Moa2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuJGx0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfcG9wdXBfYnRuXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy4kcnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9wb3B1cF9idG5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRBY3RpdmVDbGFzcyhrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy4kbHQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZV9wb3B1cF9idG5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLiRydC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX3BvcHVwX2J0blwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgU2VsZWN0b3JQb3B1cFNlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGxlZnRCdG4sIHJpZ2h0QnRuKSB7XG4gICAgICAgIHRoaXMuJGx0ID0gbGVmdEJ0bjtcbiAgICAgICAgdGhpcy4kcnQgPSByaWdodEJ0bjtcbiAgICB9XG5cbiAgICBzZWxlY3RMZWZ0KCkge1xuICAgICAgICB0aGlzLiRsdC5zdHlsZS5sZWZ0ID0gXCItMTAwJVwiO1xuICAgICAgICB0aGlzLiRydC5zdHlsZS5yaWdodCA9IFwiMFwiO1xuICAgIH1cbiAgICBzZWxlY3RSaWdodCgpIHtcbiAgICAgICAgdGhpcy4kbHQuc3R5bGUubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMuJHJ0LnN0eWxlLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIFRlbXBsYXRlc1BvcHVwIHtcbiAgICBjb25zdHJ1Y3RvcihidG5Qb3B1cCwgcG9wdXAsIHV0aWxzKSB7XG4gICAgICAgIHRoaXMuJGJ0biA9IGJ0blBvcHVwO1xuICAgICAgICB0aGlzLiRwb3AgPSBwb3B1cDtcbiAgICAgICAgdGhpcy4kdXQgPSB1dGlscztcbiAgICB9XG5cbiAgICBzaG93UG9wdXAoKSB7XG4gICAgICAgIHRoaXMuJGJ0bi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRwb3Auc3R5bGUuZGlzcGxheSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuJHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYXRoWzJdLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRlbGV0ZVRvZG8oZXZlbnQucGF0aFsyXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYXRoWzJdLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckVkaXRUb2RvKGV2ZW50LnBhdGhbMl0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlUG9wdXAoKSB7XG4gICAgICAgIHBvcHVwRGF0YS5jbG9zZVBvcHVwLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRwb3AuY2xhc3NMaXN0LmFkZChcImhpZGVfcG9wdXBcIik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBvcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBvcC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZV9wb3B1cFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyOTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3Qgc2hvd1BvcHVwU2lnbkluVXAgPSAoc2V0QWN0aXZlQnRuLCBzZWxlY3RvclBvcHVwU2VjdGlvbikgPT4ge1xuICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLmlzUG9wdXAuc3R5bGUuZGlzcGxheSA9IG51bGw7XG5cbiAgICBwb3B1cERhdGEucG9wdXBTaWduSW5VcC5zaWduSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIXBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLnNpZ25JbkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlX3BvcHVwX2J0blwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlQnRuLnJlbW92ZUFjdGl2ZUNsYXNzKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlQnRuLmFkZEFjdGl2ZUNsYXNzKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclBvcHVwU2VjdGlvbi5zZWxlY3RSaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0pO1xuICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLnNpZ25VcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuc2lnblVwQnRuLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVfcG9wdXBfYnRuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4ucmVtb3ZlQWN0aXZlQ2xhc3MoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZUJ0bi5hZGRBY3RpdmVDbGFzcyhcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUG9wdXBTZWN0aW9uLnNlbGVjdExlZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGV2ZW50QnRuUG9wdXBTaWduSW5VcCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXRBY3RpdmVCdG4gPSBuZXcgU2V0QWN0aXZlQnRuKFxuICAgICAgICBwb3B1cERhdGEucG9wdXBTaWduSW5VcC5zaWduSW5CdG4sXG4gICAgICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLnNpZ25VcEJ0blxuICAgICk7XG4gICAgY29uc3Qgc2VsZWN0b3JQb3B1cFNlY3Rpb24gPSBuZXcgU2VsZWN0b3JQb3B1cFNlY3Rpb24oXG4gICAgICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLnBvcHVwU2VsZWN0b3JzLmxlZnRTZWxlY3RvcixcbiAgICAgICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAucG9wdXBTZWxlY3RvcnMucmlnaHRTZWxlY3RvclxuICAgICk7XG4gICAgaWYgKHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLmJ0blNpZ24gJiYgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuYnRuUmVnKSB7XG4gICAgICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLmJ0blNpZ24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNob3dQb3B1cFNpZ25JblVwKHNldEFjdGl2ZUJ0biwgc2VsZWN0b3JQb3B1cFNlY3Rpb24pO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBvcHVwRGF0YS5wb3B1cFNpZ25JblVwLmJ0blJlZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlQnRuLnJlbW92ZUFjdGl2ZUNsYXNzKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4uYWRkQWN0aXZlQ2xhc3MoXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RvclBvcHVwU2VjdGlvbi5zZWxlY3RMZWZ0KCk7XG4gICAgICAgICAgICAgICAgc2hvd1BvcHVwU2lnbkluVXAoc2V0QWN0aXZlQnRuLCBzZWxlY3RvclBvcHVwU2VjdGlvbik7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9wdXBEYXRhLmNsb3NlUG9wdXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4ucmVtb3ZlQWN0aXZlQ2xhc3MoXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVCdG4uYWRkQWN0aXZlQ2xhc3MoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yUG9wdXBTZWN0aW9uLnNlbGVjdFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgcG9wdXBEYXRhLnBvcHVwU2lnbkluVXAuaXNQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHNob3dOZXdUb2RvID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLnBvcHVwX25ld3RvZG9cIikpIHtcbiAgICAgICAgbGV0IGJ0blNob3dQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLm5ld190b2RvX2J0blwiKTtcbiAgICAgICAgbGV0IHBvcHVwTmV3VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfbmV3dG9kb1wiKTtcblxuICAgICAgICBsZXQgdGVtcGxhdGVzUG9wdXAgPSBuZXcgVGVtcGxhdGVzUG9wdXAoYnRuU2hvd1BvcHVwLCBwb3B1cE5ld1RvZG8pO1xuXG4gICAgICAgIHRlbXBsYXRlc1BvcHVwLnNob3dQb3B1cCgpO1xuICAgICAgICB0ZW1wbGF0ZXNQb3B1cC5jbG9zZVBvcHVwKCk7XG4gICAgfVxufTtcbnNob3dOZXdUb2RvKCk7XG5cbmNvbnN0IHNob3dEZWxldGVUb2RvID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLnBvcHVwX3RvZG9EZWxldGVcIikpIHtcbiAgICAgICAgbGV0IGJ0blNob3dQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd19kZWxldGVfdG9kb1wiKTtcbiAgICAgICAgbGV0IHBvcHVwRGVsZXRlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfdG9kb0RlbGV0ZVwiKTtcblxuICAgICAgICBsZXQgdGVtcGxhdGVzUG9wdXAgPSBuZXcgVGVtcGxhdGVzUG9wdXAoXG4gICAgICAgICAgICBidG5TaG93UG9wdXAsXG4gICAgICAgICAgICBwb3B1cERlbGV0ZVRvZG8sXG4gICAgICAgICAgICBcImRlbGV0ZVwiXG4gICAgICAgICk7XG5cbiAgICAgICAgdGVtcGxhdGVzUG9wdXAuc2hvd1BvcHVwKCk7XG4gICAgICAgIHRlbXBsYXRlc1BvcHVwLmNsb3NlUG9wdXAoKTtcbiAgICB9XG59O1xuc2hvd0RlbGV0ZVRvZG8oKTtcblxuY29uc3Qgc2hvd0VkaXRUb2RvID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLnBvcHVwX2VkaXR0b2RvXCIpKSB7XG4gICAgICAgIGxldCBidG5TaG93UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfZWRpdF90b2RvXCIpO1xuICAgICAgICBsZXQgcG9wdXBFZGl0VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfZWRpdHRvZG9cIik7XG5cbiAgICAgICAgbGV0IHRlbXBsYXRlc1BvcHVwID0gbmV3IFRlbXBsYXRlc1BvcHVwKFxuICAgICAgICAgICAgYnRuU2hvd1BvcHVwLFxuICAgICAgICAgICAgcG9wdXBFZGl0VG9kbyxcbiAgICAgICAgICAgIFwiZWRpdFwiXG4gICAgICAgICk7XG5cbiAgICAgICAgdGVtcGxhdGVzUG9wdXAuc2hvd1BvcHVwKCk7XG4gICAgICAgIHRlbXBsYXRlc1BvcHVwLmNsb3NlUG9wdXAoKTtcbiAgICB9XG59O1xuc2hvd0VkaXRUb2RvKCk7XG5cbmNvbnN0IHNob3dNb3JlVG9kbyA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF9tb3JldG9kb1wiKSkge1xuICAgICAgICBsZXQgYnRuU2hvd1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93X21vcmVfdG9kb1wiKTtcbiAgICAgICAgbGV0IHBvcHVwTW9yZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLnBvcHVwX21vcmV0b2RvXCIpO1xuXG4gICAgICAgIGJ0blNob3dQb3B1cC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBNb3JlVG9kby5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvSWQgPSBldmVudC5wYXRoWzJdLmlkXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCMke3RvZG9JZH0gPiAudG9kb19yZWNfX3RpdGxlID4gaDJgXG4gICAgICAgICAgICAgICAgICAgICkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RvZG9JZH0gPiAudG9kb19yZWNfX3RpdGxlID4gaDNgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmlubmVySFRNTC5yZXBsYWNlKC9UYWc6IEAvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCMke3RvZG9JZH0gPiAudG9kb19yZWNfX2NvbnRlbnQgPiBwYFxuICAgICAgICAgICAgICAgICAgICApLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUJsb2NrID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZXRvZG9fdGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JldG9kb190YWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9yZXRvZG9fdGV4dFwiKTtcblxuICAgICAgICAgICAgICAgICAgICB0aXRsZUJsb2NrLmlubmVySFRNTCA9IGDQl9Cw0LPQvtC70L7QstC+0LogfCAke3RpdGxlfWA7XG4gICAgICAgICAgICAgICAgICAgIHRhZ0Jsb2NrLmlubmVySFRNTCA9IGDQotGN0LMgfCBAJHt0YWd9YDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJsb2NrLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgVGVtcGxhdGVzUG9wdXAobnVsbCwgcG9wdXBNb3JlVG9kbywgbnVsbCkuY2xvc2VQb3B1cCgpO1xuICAgIH1cbn07XG5zaG93TW9yZVRvZG8oKTtcblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAucG9wdXBfc2lnblwiKSkge1xuICAgIGNvbnN0IHNldFBvcHVwID0gbmV3IFNldFBvcHVwKHBvcHVwRGF0YSk7XG4gICAgc2V0UG9wdXAuc2V0U2lnbkluVXAoKSwgZXZlbnRCdG5Qb3B1cFNpZ25JblVwKCk7XG59XG5cbi8vIEFKQVhcbi8vIEFKQVhcbmNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5mdW5jdGlvbiB1c2VyRGVsZXRlVG9kbyhlbGVtKSB7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgICAgbGV0IHllc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLnllc19kZWxldGVcIik7XG4gICAgICAgIGxldCBub3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi5ub3RfZGVsZXRlXCIpO1xuICAgICAgICBsZXQgcG9wdXBEZWxldGVUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF90b2RvRGVsZXRlXCIpO1xuXG4gICAgICAgIGxldCB0ZW1wbGF0ZXNQb3B1cCA9IG5ldyBUZW1wbGF0ZXNQb3B1cChudWxsLCBwb3B1cERlbGV0ZVRvZG8pO1xuXG4gICAgICAgIG5vdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzUG9wdXAuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB4aHIub3BlbihcbiAgICAgICAgICAgICAgICAgICAgXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGAvZGVsZXRlX3RvZG8/dG9kb0lkPSR7ZWxlbS5yZXBsYWNlKC90b2RvXy9nLCBcIlwiKX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi90b2RvXCI7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVzZXJFZGl0VG9kbyhlbGVtKSB7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCMke2VsZW19ID4gLnRvZG9fcmVjX190aXRsZSA+IGgyYFxuICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtfSA+IC50b2RvX3JlY19fdGl0bGUgPiBoM2ApXG4gICAgICAgICAgICAuaW5uZXJIVE1MLnJlcGxhY2UoL1RhZzogQC9nLCBcIlwiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgIyR7ZWxlbX0gPiAudG9kb19yZWNfX2NvbnRlbnQgPiBwYFxuICAgICAgICApLmlubmVyVGV4dDtcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0dG9kb190aXRsZVwiKTtcbiAgICAgICAgY29uc3QgaW5wdXRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXR0b2RvX3RhZ1wiKTtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0dG9kb190b2RvXCIpO1xuXG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSB0aXRsZTtcbiAgICAgICAgaW5wdXRUYWcudmFsdWUgPSB0YWc7XG4gICAgICAgIGlucHV0VGV4dC52YWx1ZSA9IHRleHQ7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHRvZG9fYnRuXCIpO1xuICAgICAgICBjb25zdCBwb3B1cEVkaXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC5wb3B1cF9lZGl0dG9kb1wiKTtcblxuICAgICAgICBsZXQgdGVtcGxhdGVzUG9wdXAgPSBuZXcgVGVtcGxhdGVzUG9wdXAobnVsbCwgcG9wdXBFZGl0VG9kbyk7XG5cbiAgICAgICAgdGVtcGxhdGVzUG9wdXAuY2xvc2VQb3B1cCgpO1xuXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKFxuICAgICAgICAgICAgICAgICAgICBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgYC9lZGl0X3RvZG8/dG9kb0lkPSR7ZWxlbS5yZXBsYWNlKC90b2RvXy9nLCBcIlwiKX0mdGl0bGU9JHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VGl0bGUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSZ0YWc9JHtpbnB1dFRhZy52YWx1ZX0mdGV4dD0ke2lucHV0VGV4dC52YWx1ZX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgICAgIGNvb2tpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcyhcInRva2VuPVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7aXRlbX07IHBhdGg9LzsgbWF4LWFnZT0yO2A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvdG9kb1wiO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qZ2xvYmFscyB3aW5kb3csIGdsb2JhbCwgcmVxdWlyZSovXG5cblx0LyoqXG5cdCAqIENyeXB0b0pTIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdHZhciBDcnlwdG9KUyA9IENyeXB0b0pTIHx8IChmdW5jdGlvbiAoTWF0aCwgdW5kZWZpbmVkKSB7XG5cblx0ICAgIHZhciBjcnlwdG87XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3aW5kb3cgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW4gd2ViIHdvcmtlciAoQnJvd3Nlcilcblx0ICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBzZWxmLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIHdvcmtlclxuXHQgICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbFRoaXMuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgKGV4cGVyaW1lbnRhbCBJRSAxMSkgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm1zQ3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gd2luZG93Lm1zQ3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gZ2xvYmFsIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gZ2xvYmFsLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBpbXBvcnQgdmlhIHJlcXVpcmUgKE5vZGVKUylcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgfVxuXG5cdCAgICAvKlxuXHQgICAgICogQ3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG5cdCAgICAgKlxuXHQgICAgICogQXMgTWF0aC5yYW5kb20oKSBpcyBjcnlwdG9ncmFwaGljYWxseSBub3Qgc2FmZSB0byB1c2Vcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyeXB0b1NlY3VyZVJhbmRvbUludCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoY3J5cHRvKSB7XG5cdCAgICAgICAgICAgIC8vIFVzZSBnZXRSYW5kb21WYWx1ZXMgbWV0aG9kIChCcm93c2VyKVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFVzZSByYW5kb21CeXRlcyBtZXRob2QgKE5vZGVKUylcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8ucmFuZG9tQnl0ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyg0KS5yZWFkSW50MzJMRSgpO1xuXHQgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYXRpdmUgY3J5cHRvIG1vZHVsZSBjb3VsZCBub3QgYmUgdXNlZCB0byBnZXQgc2VjdXJlIHJhbmRvbSBudW1iZXIuJyk7XG5cdCAgICB9O1xuXG5cdCAgICAvKlxuXHQgICAgICogTG9jYWwgcG9seWZpbGwgb2YgT2JqZWN0LmNyZWF0ZVxuXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQ3J5cHRvSlMgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2Ugb2JqZWN0IGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2UgPSAoZnVuY3Rpb24gKCkge1xuXG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzIFByb3BlcnRpZXMgdG8gY29weSBpbnRvIHRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGV4dGVuZDogZnVuY3Rpb24gKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cblx0ICAgICAgICAgICAgICAgIHZhciBzdWJ0eXBlID0gY3JlYXRlKHRoaXMpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XG5cdCAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5taXhJbihvdmVycmlkZXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCBpbml0aWFsaXplclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdC5wcm90b3R5cGUgPSBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlciA9IHRoaXM7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFeHRlbmRzIHRoaXMgb2JqZWN0IGFuZCBydW5zIHRoZSBpbml0IG1ldGhvZC5cblx0ICAgICAgICAgICAgICogQXJndW1lbnRzIHRvIGNyZWF0ZSgpIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGluc3RhbmNlID0gTXlUeXBlLmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmV4dGVuZCgpO1xuXHQgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENvcGllcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIE15VHlwZS5taXhJbih7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSUUgd29uJ3QgY29weSB0b1N0cmluZyB1c2luZyB0aGUgbG9vcCBhYm92ZVxuXHQgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZW5jb2Rlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGVuY29kZXIgfHwgSGV4KS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRXb3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbmNhdFxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoYXRTaWdCeXRlczsgaiArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBqKSA+Pj4gMl0gPSB0aGF0V29yZHNbaiA+Pj4gMl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIGluc2lnbmlmaWNhbnQgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xhbXA6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXBcblx0ICAgICAgICAgICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgd29yZHMubGVuZ3RoID0gTWF0aC5jZWlsKHNpZ0J5dGVzIC8gNCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSB3b3JkIGFycmF5IGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByYW5kb206IGZ1bmN0aW9uIChuQnl0ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaChjcnlwdG9TZWN1cmVSYW5kb21JbnQoKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEVuY29kZXIgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoZXhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgaGV4Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGV4U3RyTGVuZ3RoID0gaGV4U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBMYXRpbjEgPSBDX2VuYy5MYXRpbjEgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbGF0aW4xU3RyaW5nID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMUNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAobGF0aW4xU3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtOCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgVVRGLTggZGF0YScpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemUgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG5cdCAgICAgKi9cblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5LmluaXQoKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYXBwZW5kLiBTdHJpbmdzIGFyZSBjb252ZXJ0ZWQgdG8gYSBXb3JkQXJyYXkgdXNpbmcgVVRGLTguXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb0ZsdXNoIFdoZXRoZXIgYWxsIGJsb2NrcyBhbmQgcGFydGlhbCBibG9ja3Mgc2hvdWxkIGJlIHByb2Nlc3NlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3Byb2Nlc3M6IGZ1bmN0aW9uIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgIHZhciBwcm9jZXNzZWRXb3JkcztcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICBwcm9jZXNzZWRXb3JkcyA9IGRhdGFXb3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9taW5CdWZmZXJTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBoYXNoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGhhc2hlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMTYgKDUxMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKCksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoZXIgPSBDcnlwdG9KUy5hbGdvLlNIQTI1Ni5jcmVhdGUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtIYXNoZXJ9IFRoaXMgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2RvRmluYWxpemUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgSG1hY1NIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIbWFjSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ28gPSB7fTtcblxuXHQgICAgcmV0dXJuIEM7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBDb25zdGFudHMgdGFibGVcblx0ICAgIHZhciBUID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICBUW2ldID0gKE1hdGguYWJzKE1hdGguc2luKGkgKyAxKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogTUQ1IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgTUQ1ID0gQ19hbGdvLk1ENSA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSxcblx0ICAgICAgICAgICAgICAgIDB4OThiYWRjZmUsIDB4MTAzMjU0NzZcblx0ICAgICAgICAgICAgXSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIG9mZnNldF9pID0gb2Zmc2V0ICsgaTtcblx0ICAgICAgICAgICAgICAgIHZhciBNX29mZnNldF9pID0gTVtvZmZzZXRfaV07XG5cblx0ICAgICAgICAgICAgICAgIE1bb2Zmc2V0X2ldID0gKFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgOCkgIHwgKE1fb2Zmc2V0X2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCAyNCkgfCAoTV9vZmZzZXRfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMCAgPSBNW29mZnNldCArIDBdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMSAgPSBNW29mZnNldCArIDFdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMiAgPSBNW29mZnNldCArIDJdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMyAgPSBNW29mZnNldCArIDNdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNCAgPSBNW29mZnNldCArIDRdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNSAgPSBNW29mZnNldCArIDVdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNiAgPSBNW29mZnNldCArIDZdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNyAgPSBNW29mZnNldCArIDddO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfOCAgPSBNW29mZnNldCArIDhdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfOSAgPSBNW29mZnNldCArIDldO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTAgPSBNW29mZnNldCArIDEwXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzExID0gTVtvZmZzZXQgKyAxMV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xMiA9IE1bb2Zmc2V0ICsgMTJdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTMgPSBNW29mZnNldCArIDEzXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzE0ID0gTVtvZmZzZXQgKyAxNF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xNSA9IE1bb2Zmc2V0ICsgMTVdO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFsYmVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfMCwgIDcsICBUWzBdKTtcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEsICAxMiwgVFsxXSk7XG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8yLCAgMTcsIFRbMl0pO1xuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMywgIDIyLCBUWzNdKTtcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzQsICA3LCAgVFs0XSk7XG5cdCAgICAgICAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF81LCAgMTIsIFRbNV0pO1xuXHQgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfNiwgIDE3LCBUWzZdKTtcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzcsICAyMiwgVFs3XSk7XG5cdCAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF84LCAgNywgIFRbOF0pO1xuXHQgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfOSwgIDEyLCBUWzldKTtcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzEwLCAxNywgVFsxMF0pO1xuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTEsIDIyLCBUWzExXSk7XG5cdCAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF8xMiwgNywgIFRbMTJdKTtcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEzLCAxMiwgVFsxM10pO1xuXHQgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTQsIDE3LCBUWzE0XSk7XG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8xNSwgMjIsIFRbMTVdKTtcblxuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfMSwgIDUsICBUWzE2XSk7XG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF82LCAgOSwgIFRbMTddKTtcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzExLCAxNCwgVFsxOF0pO1xuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfMCwgIDIwLCBUWzE5XSk7XG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF81LCAgNSwgIFRbMjBdKTtcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEwLCA5LCAgVFsyMV0pO1xuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMTUsIDE0LCBUWzIyXSk7XG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF80LCAgMjAsIFRbMjNdKTtcblx0ICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksICA1LCAgVFsyNF0pO1xuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMTQsIDksICBUWzI1XSk7XG5cdCAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF8zLCAgMTQsIFRbMjZdKTtcblx0ICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzgsICAyMCwgVFsyN10pO1xuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfMTMsIDUsICBUWzI4XSk7XG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF8yLCAgOSwgIFRbMjldKTtcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzcsICAxNCwgVFszMF0pO1xuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfMTIsIDIwLCBUWzMxXSk7XG5cblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzUsICA0LCAgVFszMl0pO1xuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfOCwgIDExLCBUWzMzXSk7XG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8xMSwgMTYsIFRbMzRdKTtcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzE0LCAyMywgVFszNV0pO1xuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfMSwgIDQsICBUWzM2XSk7XG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF80LCAgMTEsIFRbMzddKTtcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzcsICAxNiwgVFszOF0pO1xuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTAsIDIzLCBUWzM5XSk7XG5cdCAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF8xMywgNCwgIFRbNDBdKTtcblx0ICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzAsICAxMSwgVFs0MV0pO1xuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMywgIDE2LCBUWzQyXSk7XG5cdCAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF82LCAgMjMsIFRbNDNdKTtcblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksICA0LCAgVFs0NF0pO1xuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTIsIDExLCBUWzQ1XSk7XG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8xNSwgMTYsIFRbNDZdKTtcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzIsICAyMywgVFs0N10pO1xuXG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF8wLCAgNiwgIFRbNDhdKTtcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzcsICAxMCwgVFs0OV0pO1xuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTQsIDE1LCBUWzUwXSk7XG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF81LCAgMjEsIFRbNTFdKTtcblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEyLCA2LCAgVFs1Ml0pO1xuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMywgIDEwLCBUWzUzXSk7XG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8xMCwgMTUsIFRbNTRdKTtcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEsICAyMSwgVFs1NV0pO1xuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfOCwgIDYsICBUWzU2XSk7XG5cdCAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF8xNSwgMTAsIFRbNTddKTtcblx0ICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzYsICAxNSwgVFs1OF0pO1xuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTMsIDIxLCBUWzU5XSk7XG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF80LCAgNiwgIFRbNjBdKTtcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzExLCAxMCwgVFs2MV0pO1xuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMiwgIDE1LCBUWzYyXSk7XG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF85LCAgMjEsIFRbNjNdKTtcblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbEggPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsTCA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gKFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbEggPDwgOCkgIHwgKG5CaXRzVG90YWxIID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbEggPDwgMjQpIHwgKG5CaXRzVG90YWxIID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSAoXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsTCA8PCA4KSAgfCAobkJpdHNUb3RhbEwgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsTCA8PCAyNCkgfCAobkJpdHNUb3RhbEwgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICApO1xuXG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSAoZGF0YVdvcmRzLmxlbmd0aCArIDEpICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5faGFzaDtcblx0ICAgICAgICAgICAgdmFyIEggPSBoYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICAgICAgdmFyIEhfaSA9IEhbaV07XG5cblx0ICAgICAgICAgICAgICAgIEhbaV0gPSAoKChIX2kgPDwgOCkgIHwgKEhfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAgICAoKChIX2kgPDwgMjQpIHwgKEhfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIEZGKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoKGIgJiBjKSB8ICh+YiAmIGQpKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIEdHKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoKGIgJiBkKSB8IChjICYgfmQpKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIEhIKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIElJKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoYyBeIChiIHwgfmQpKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENSh3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLk1ENSA9IEhhc2hlci5fY3JlYXRlSGVscGVyKE1ENSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjTUQ1KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY01ENSA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihNRDUpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5NRDU7XG5cbn0pKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTEwMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyIHtcXG4gICAgbGVmdDogMDtcXG59XFxuLmhlYWRlcl90aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uaGVhZGVyX3RpdGxlIGgxIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uYnVyZ2VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDdweDtcXG4gICAgcmlnaHQ6IDdweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XFxufVxcbi5idXJnZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uaGVhZGVyX2JhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC40KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyOmhvdmVyICsgLmhlYWRlcl9iYWNrZ3JvdW5kIHtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5oZWFkZXI6aG92ZXIgKyAuaGVhZGVyX2JhY2tncm91bmQgKyAubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNzBweDtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0yMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluayB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtIGEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRlcl9uYXZfX3NpZ25pbixcXG4uaGVhZGVyX25hdl9fc2lnbnVwLFxcbi5oZWFkZXJfbmF2X19zaWdub3V0IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaGVhZGVyX25hdl9fc2lnbmluOmhvdmVyLFxcbi5oZWFkZXJfbmF2X19zaWdudXA6aG92ZXIsXFxuLmhlYWRlcl9uYXZfX3NpZ25vdXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzNiwgMjU1KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVxcbi5pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgxKSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMikgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAyLCAwKTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMykgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyNTUsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNCkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg0KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAyMzQpO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNSkgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg1KSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg2KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDYpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDAsIDI1NSk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg3KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDcpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDI0Mik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL0hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksT0FBTztBQUNYO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7OztJQUdJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBOzs7SUFHSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxnQ0FBZ0M7QUFDcEM7QUFDQTs7SUFFSSxrQ0FBa0M7QUFDdEM7QUFDQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFDQTs7SUFFSSxrQ0FBa0M7QUFDdEM7QUFDQTs7SUFFSSxpQ0FBaUM7QUFDckM7QUFDQTs7SUFFSSxrQ0FBa0M7QUFDdEM7QUFDQTs7SUFFSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAtMTAwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5oZWFkZXI6aG92ZXIge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4uaGVhZGVyX3RpdGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5oZWFkZXJfdGl0bGUgaDEge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5idXJnZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogN3B4O1xcbiAgICByaWdodDogN3B4O1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZDtcXG59XFxuLmJ1cmdlcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5oZWFkZXJfYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjQpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5oZWFkZXI6aG92ZXIgKyAuaGVhZGVyX2JhY2tncm91bmQge1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLmhlYWRlcjpob3ZlciArIC5oZWFkZXJfYmFja2dyb3VuZCArIC5tYWluIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE3MHB4O1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW0gLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogLTIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcbi5oZWFkZXJfbmF2X19saW5rIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW0gYSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGVyX25hdl9fc2lnbmluLFxcbi5oZWFkZXJfbmF2X19zaWdudXAsXFxuLmhlYWRlcl9uYXZfX3NpZ25vdXQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5oZWFkZXJfbmF2X19zaWduaW46aG92ZXIsXFxuLmhlYWRlcl9uYXZfX3NpZ251cDpob3ZlcixcXG4uaGVhZGVyX25hdl9fc2lnbm91dDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMjM2LCAyNTUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgxKSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMikgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDIsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMykgLmhlYWRlcl9uYXZfX2xpbms6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDI1NSwgMCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg0KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDIzNCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg1KSAuaGVhZGVyX25hdl9fbGluazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA2MCwgMjU1KTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDYpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMCwgMjU1KTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDcpIC5oZWFkZXJfbmF2X19saW5rOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMjQyKTtcXG59XFxuLmltYWdlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgxKSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDEpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMikgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgyKSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDIsIDApO1xcbn1cXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoMykgLmltYWdlLFxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCgzKSAuaW1hZ2UuYWN0aXZlOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDI1NSwgMCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg0KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDQpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDIzNCk7XFxufVxcbi5oZWFkZXJfbmF2X19pdGVtOm50aC1jaGlsZCg1KSAuaW1hZ2UsXFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDUpIC5pbWFnZS5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA2MCwgMjU1KTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDYpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNikgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMCwgMjU1KTtcXG59XFxuLmhlYWRlcl9uYXZfX2l0ZW06bnRoLWNoaWxkKDcpIC5pbWFnZSxcXG4uaGVhZGVyX25hdl9faXRlbTpudGgtY2hpbGQoNykgLmltYWdlLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMjQyKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dNYWluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHNob3dNYWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuLm1haW5fY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRlbnRfdGl0bGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGVudF90aXRsZSBoMSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbi5jb250ZW50X3RpdGxlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNvbnRlbnRfYmxvY2sge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYigwLCAwLCAwLCAwLjMpO1xcbn1cXG4uY29udGVudF9ibG9jazpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuLmNvbnRlbnRfbmV3c19faGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG4uY29udGVudF9uZXdzX19jb250ZW50IHAge1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG59XFxuLmNvbnRlbnRfYmxvY2sudXNlciA+IGgyIHtcXG4gICAgcGFkZGluZzogMTBweCAwIDMwcHggMDtcXG59XFxuLmNvbnRlbnRfYmxvY2tfX2l0ZW1zLnVzZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL01haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93TWFpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuQGtleWZyYW1lcyBzaG93TWFpbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbi5tYWluX2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50X3RpdGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnRfdGl0bGUgaDEge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uY29udGVudF90aXRsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb250ZW50X2Jsb2NrIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG59XFxuLmNvbnRlbnRfYmxvY2s6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcbi5jb250ZW50X25ld3NfX2hlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuLmNvbnRlbnRfbmV3c19fY29udGVudCBwIHtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxufVxcbi5jb250ZW50X2Jsb2NrLnVzZXIgPiBoMiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAzMHB4IDA7XFxufVxcbi5jb250ZW50X2Jsb2NrX19pdGVtcy51c2VyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhpZGVfcG9wdXAge1xcbiAgICBhbmltYXRpb24tbmFtZTogaGlkZVBvcHVwO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcbkBrZXlmcmFtZXMgaGlkZVBvcHVwIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICB9XFxufVxcbi5wb3B1cDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dCZztcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5Aa2V5ZnJhbWVzIHNob3dCZyB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbi5wb3B1cF9jbG9zZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wb3B1cF9jbG9zZTo6YWZ0ZXIsXFxuLnBvcHVwX2Nsb3NlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbi5wb3B1cF9oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucG9wdXBfaGVhZGVyIGgyOm50aC1jaGlsZChvZGQpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG4ucG9wdXBfaGVhZGVyIGgyIHtcXG4gICAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG59XFxuLmFjdGl2ZV9wb3B1cF9idG4ge1xcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4ucG9wdXBfYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBhbmltYXRpb24tbmFtZTogc2hvd1BvcHVwO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5Aa2V5ZnJhbWVzIHNob3dQb3B1cCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG4ucG9wdXBfc2lnbiAucG9wdXBfYmxvY2sge1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG4ucG9wdXBfZWRpdHRvZG8gLnBvcHVwX2Jsb2NrLFxcbi5wb3B1cF9uZXd0b2RvIC5wb3B1cF9ibG9jayB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxufVxcbi5wb3B1cF9tb3JldG9kbyAucG9wdXBfYmxvY2sge1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG59XFxuLnBvcHVwX3RvZG9EZWxldGUgLnBvcHVwX2Jsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLm1vcmVfaW5mbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5wb3B1cF9zZWN0aW9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmVycm9yX3NpZ25pbixcXG4uZXJyb3Jfc2lnbnVwIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4ucG9wdXBfY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuLnBvcHVwX3RvZG9EZWxldGUgLnBvcHVwX2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG4ucG9wdXBfdG9kb0RlbGV0ZSAucG9wdXBfY29udGVudCBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucG9wdXBfbW9yZXRvZG8gLnBvcHVwX2NvbnRlbnQge1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9ibG9jayxcXG4ucG9wdXBfbmV3dG9kbyAucG9wdXBfYmxvY2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ucG9wdXBfZWRpdHRvZG8gLnBvcHVwX2NvbnRlbnQge1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XFxufVxcbi5wb3B1cF9zZWN0aW9uX2xlZnQge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4ucG9wdXBfc2VjdGlvbl9yaWdodCB7XFxuICAgIHJpZ2h0OiAtMTAwJTtcXG59XFxuLnBvcHVwX3NlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NlY3Rpb24gZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiBmb3JtIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLnBvcHVwX3NlY3Rpb24gZm9ybSBpbnB1dDpub3QoW3R5cGU9XFxcInN1Ym1pdFxcXCJdKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMjI0KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ucG9wdXBfc2VjdGlvbiBmb3JtIGlucHV0OmZvY3VzOm5vdChbdHlwZT1cXFwic3VibWl0XFxcIl0pIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYigyMDcsIDIwNywgMjA3KTtcXG59XFxuLnBvcHVwX2lucHV0cyB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGZvcm0gLnBvcHVwX2lucHV0czpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfaW5wdXRzLFxcbi5wb3B1cF9uZXd0b2RvIC5wb3B1cF9pbnB1dHMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9pbnB1dHMgaW5wdXQsXFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9pbnB1dHMgdGV4dGFyZWEsXFxuLnBvcHVwX25ld3RvZG8gLnBvcHVwX2lucHV0cyBpbnB1dCxcXG4ucG9wdXBfbmV3dG9kbyAucG9wdXBfaW5wdXRzIHRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xcbn1cXG4ucG9wdXBfbW9yZXRvZG8gLnBvcHVwX2lucHV0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ucG9wdXBfbW9yZXRvZG8gLnBvcHVwX2lucHV0cyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ucG9wdXBfbW9yZXRvZG8gLnBvcHVwX2lucHV0cyBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNlY3Rpb25fZGVsZXRldG9kbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLnNlY3Rpb25fZGVsZXRldG9kbyAuYnRuIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9Qb3B1cHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHFCQUFxQjtJQUN6QjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksT0FBTztBQUNYO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBOztJQUVJLG9CQUFvQjtBQUN4QjtBQUNBOzs7O0lBSUksV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oaWRlX3BvcHVwIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpZGVQb3B1cDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5Aa2V5ZnJhbWVzIGhpZGVQb3B1cCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgfVxcbn1cXG4ucG9wdXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93Qmc7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuQGtleWZyYW1lcyBzaG93Qmcge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG4ucG9wdXBfY2xvc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucG9wdXBfY2xvc2U6OmFmdGVyLFxcbi5wb3B1cF9jbG9zZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLnBvcHVwX2Nsb3NlOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLnBvcHVwX2Nsb3NlOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG4ucG9wdXBfaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnBvcHVwX2hlYWRlciBoMjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG59XFxuLnBvcHVwX2hlYWRlciBoMiB7XFxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxufVxcbi5hY3RpdmVfcG9wdXBfYnRuIHtcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnBvcHVwX2Jsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNob3dQb3B1cDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuQGtleWZyYW1lcyBzaG93UG9wdXAge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuLnBvcHVwX3NpZ24gLnBvcHVwX2Jsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG59XFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9ibG9jayxcXG4ucG9wdXBfbmV3dG9kbyAucG9wdXBfYmxvY2sge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG4ucG9wdXBfbW9yZXRvZG8gLnBvcHVwX2Jsb2NrIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxufVxcbi5wb3B1cF90b2RvRGVsZXRlIC5wb3B1cF9ibG9jayB7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcbi5tb3JlX2luZm8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5lcnJvcl9zaWduaW4sXFxuLmVycm9yX3NpZ251cCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuLnBvcHVwX2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcbi5wb3B1cF90b2RvRGVsZXRlIC5wb3B1cF9jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuLnBvcHVwX3RvZG9EZWxldGUgLnBvcHVwX2NvbnRlbnQgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9jb250ZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfYmxvY2ssXFxuLnBvcHVwX25ld3RvZG8gLnBvcHVwX2Jsb2NrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnBvcHVwX2VkaXR0b2RvIC5wb3B1cF9jb250ZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xcbn1cXG4ucG9wdXBfc2VjdGlvbl9sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG59XFxuLnBvcHVwX3NlY3Rpb25fcmlnaHQge1xcbiAgICByaWdodDogLTEwMCU7XFxufVxcbi5wb3B1cF9zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NlY3Rpb24gaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBvcHVwX3NlY3Rpb24gZm9ybSBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wb3B1cF9zZWN0aW9uIGZvcm0gaW5wdXQ6bm90KFt0eXBlPVxcXCJzdWJtaXRcXFwiXSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnBvcHVwX3NlY3Rpb24gZm9ybSBpbnB1dDpmb2N1czpub3QoW3R5cGU9XFxcInN1Ym1pdFxcXCJdKSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoMjA3LCAyMDcsIDIwNyk7XFxufVxcbi5wb3B1cF9pbnB1dHMge1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG4ucG9wdXBfc2VjdGlvbiBmb3JtIC5wb3B1cF9pbnB1dHM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucG9wdXBfZWRpdHRvZG8gLnBvcHVwX2lucHV0cyxcXG4ucG9wdXBfbmV3dG9kbyAucG9wdXBfaW5wdXRzIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfaW5wdXRzIGlucHV0LFxcbi5wb3B1cF9lZGl0dG9kbyAucG9wdXBfaW5wdXRzIHRleHRhcmVhLFxcbi5wb3B1cF9uZXd0b2RvIC5wb3B1cF9pbnB1dHMgaW5wdXQsXFxuLnBvcHVwX25ld3RvZG8gLnBvcHVwX2lucHV0cyB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxODBweDtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9pbnB1dHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9pbnB1dHMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLnBvcHVwX21vcmV0b2RvIC5wb3B1cF9pbnB1dHMgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zZWN0aW9uX2RlbGV0ZXRvZG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5zZWN0aW9uX2RlbGV0ZXRvZG8gLmJ0biB7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaF90b2RvIHtcXG4gICAgcGFkZGluZzogMTBweCAwIDQwcHggMDtcXG59XFxuLnNlYXJjaF90b2RvIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5zZWFyY2hfdG9kb19faW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uaW5wdXQuc2VhcmNoX3RvZG9faW5wLFxcbi5idG4uc2VhcmNoX3RvZG9fYnRuIHtcXG4gICAgd2lkdGg6IDQ4JTtcXG59XFxuLmJ0bi5uZXdfdG9kb19idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4udG9kb19yZWMge1xcbiAgICB3aWR0aDogNDglO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRvZG9fcmVjX190aXRsZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4udG9kb19yZWNfX2NvbnRlbnQge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG4udG9kb19yZWNfX2NvbnRlbnQgcCB7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbn1cXG4uY29udGVudF9uZXdzX19mb290ZXIsXFxuLnRvZG9fcmVjX19mb290ZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHAsXFxuLnRvZG9fcmVjX19mb290ZXIgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHA6aG92ZXIsXFxuLnRvZG9fcmVjX19mb290ZXIgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgxKSB7XFxuICAgIGNvbG9yOiByb3lhbGJsdWU7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgY29sb3I6IHRvbWF0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvVG9kby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBOztJQUVJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBOztJQUVJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlYXJjaF90b2RvIHtcXG4gICAgcGFkZGluZzogMTBweCAwIDQwcHggMDtcXG59XFxuLnNlYXJjaF90b2RvIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5zZWFyY2hfdG9kb19faW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uaW5wdXQuc2VhcmNoX3RvZG9faW5wLFxcbi5idG4uc2VhcmNoX3RvZG9fYnRuIHtcXG4gICAgd2lkdGg6IDQ4JTtcXG59XFxuLmJ0bi5uZXdfdG9kb19idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4udG9kb19yZWMge1xcbiAgICB3aWR0aDogNDglO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRvZG9fcmVjX190aXRsZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4udG9kb19yZWNfX2NvbnRlbnQge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG4udG9kb19yZWNfX2NvbnRlbnQgcCB7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbn1cXG4uY29udGVudF9uZXdzX19mb290ZXIsXFxuLnRvZG9fcmVjX19mb290ZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLnRvZG9fcmVjX19mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHAsXFxuLnRvZG9fcmVjX19mb290ZXIgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHA6aG92ZXIsXFxuLnRvZG9fcmVjX19mb290ZXIgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4udG9kb19yZWNfX2Zvb3RlciBwOm50aC1jaGlsZCgxKSB7XFxuICAgIGNvbG9yOiByb3lhbGJsdWU7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XFxufVxcbi50b2RvX3JlY19fZm9vdGVyIHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgY29sb3I6IHRvbWF0bztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fzc2V0cy9jc3MvSGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fzc2V0cy9jc3MvTWFpbi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3NldHMvY3NzL1RvZG8uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzL2Nzcy9Qb3B1cHMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMjM2LCAyNTUpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnAsIGEge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5idG4sIC5pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG4uaW5wdXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmlucHV0OmZvY3VzLCAuYnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYigyMjYsIDIyNiwgMjI2KTtcXG59XFxuLnRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC4vYXNzZXRzL2Nzcy9IZWFkZXIuY3NzKTtcXG5AaW1wb3J0IHVybCguL2Fzc2V0cy9jc3MvTWFpbi5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vYXNzZXRzL2Nzcy9Ub2RvLmNzcyk7XFxuQGltcG9ydCB1cmwoLi9hc3NldHMvY3NzL1BvcHVwcy5jc3MpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyMzYsIDI1NSk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxucCwgYSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJ0biwgLmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcbi5pbnB1dCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uaW5wdXQ6Zm9jdXMsIC5idG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiKDIyNiwgMjI2LCAyMjYpO1xcbn1cXG4udGV4dGFyZWEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCAnLi9hc3NldHMvanMvYWpheC5qcydcbmltcG9ydCAnLi9hc3NldHMvanMvcG9wdXAuanMnIl0sIm5hbWVzIjpbIk1ENSIsInNpZ25pbkxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaWduaW5QYXNzIiwic2lnbmluQnRuIiwic2lnbnVwTG9nIiwic2lnbnVwUGFzcyIsInNpZ251cFBhc3NDb25mIiwic2lnbnVwQnRuIiwiZXJyb3JTaWduaW4iLCJxdWVyeVNlbGVjdG9yIiwiZXJyb3JTaWdudXAiLCJuZXd0b2RvVGl0bGUiLCJuZXd0b2RvVGFnIiwibmV3dG9kb1RvZG8iLCJuZXd0b2RvQnRuIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJsaXN0ZW5lclNpZ25pbkxvZyIsImxpc3RlbmVyU2lnbmluUGFzcyIsIl9STkRTSCIsInN1bVN0cmluZyIsInN5bWJvbEFyciIsInJ0c2RuciIsImkiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInVzZXJBdXRvcml6ZWQiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImluY2x1ZGVzIiwic2V0SW50ZXJ2YWwiLCJyZXNwb25zZUpzb24iLCJ1c2VyU2lnbkluIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwidG9TdHJpbmciLCJybmRzaCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJzZW5kIiwicmVzcG9uc2UiLCJvbmxvYWQiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzVGV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3R5bGUiLCJkaXNwbGF5IiwiaW5uZXJIVE1MIiwiZXJyIiwidXNlclNpZ25PdXQiLCJidG5TaWduT3V0IiwiaHJlZiIsInVzZXJTaWduVXAiLCJwYXNzIiwicGFzc0NvbmYiLCJ1c2VyQ3JlYXRlTmV3VG9kbyIsInRpdGxlIiwidGFnIiwidG9kbyIsInBvcHVwRGF0YSIsInBvcHVwU2lnbkluVXAiLCJpc1BvcHVwIiwiYnRuUmVnIiwiYnRuU2lnbiIsInNpZ25JbkJ0biIsInNpZ25VcEJ0biIsInBvcHVwU2VsZWN0b3JzIiwibGVmdFNlbGVjdG9yIiwicmlnaHRTZWxlY3RvciIsInBvcHVwQ29udGFjdCIsImNvbnRhY3RCdG4iLCJtZXNzQnRuIiwiYWRkcmVzc0J0biIsImNsb3NlUG9wdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiU2V0UG9wdXAiLCJvcHRpb24iLCIkcHAiLCJTZXRBY3RpdmVCdG4iLCJsZWZ0QnRuIiwicmlnaHRCdG4iLCIkbHQiLCIkcnQiLCJrZXkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJTZWxlY3RvclBvcHVwU2VjdGlvbiIsImxlZnQiLCJyaWdodCIsIlRlbXBsYXRlc1BvcHVwIiwiYnRuUG9wdXAiLCJwb3B1cCIsInV0aWxzIiwiJGJ0biIsIiRwb3AiLCIkdXQiLCJldmVudCIsInBhdGgiLCJpZCIsInVzZXJEZWxldGVUb2RvIiwidXNlckVkaXRUb2RvIiwic2V0VGltZW91dCIsInNob3dQb3B1cFNpZ25JblVwIiwic2V0QWN0aXZlQnRuIiwic2VsZWN0b3JQb3B1cFNlY3Rpb24iLCJjb250YWlucyIsInJlbW92ZUFjdGl2ZUNsYXNzIiwiYWRkQWN0aXZlQ2xhc3MiLCJzZWxlY3RSaWdodCIsInNlbGVjdExlZnQiLCJldmVudEJ0blBvcHVwU2lnbkluVXAiLCJzaG93TmV3VG9kbyIsImJ0blNob3dQb3B1cCIsInBvcHVwTmV3VG9kbyIsInRlbXBsYXRlc1BvcHVwIiwic2hvd1BvcHVwIiwic2hvd0RlbGV0ZVRvZG8iLCJwb3B1cERlbGV0ZVRvZG8iLCJzaG93RWRpdFRvZG8iLCJwb3B1cEVkaXRUb2RvIiwic2hvd01vcmVUb2RvIiwicG9wdXBNb3JlVG9kbyIsInRvZG9JZCIsInJlcGxhY2UiLCJ0ZXh0IiwiaW5uZXJUZXh0IiwidGl0bGVCbG9jayIsInRhZ0Jsb2NrIiwidGV4dEJsb2NrIiwic2V0UG9wdXAiLCJzZXRTaWduSW5VcCIsImVsZW0iLCJ5ZXNCdG4iLCJub3RCdG4iLCJpbnB1dFRpdGxlIiwiaW5wdXRUYWciLCJpbnB1dFRleHQiLCJlZGl0QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==