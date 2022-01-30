const mainBlock = document.querySelector(".main");
const popupSignInUp = document.querySelector(".popup_sign");

let btnReg, btnSign;
if(document.querySelector(".header_nav__signin") && document.querySelector(".header_nav__signup")) {
    btnReg = document.querySelector(".header_nav__signin");
    btnSign = document.querySelector(".header_nav__signup");
}

const signInBtn = document.querySelector(".signin_btn");
const signUpBtn = document.querySelector(".signup_btn");

const signInSelector = document.querySelector("#popup_signin");
const signUpSelector = document.querySelector("#popup_signup");

const closePopup = document.querySelector(".popup_close");

class SetActiveBtn {
    constructor(signIn, signUp) {
        this.$in = signIn;
        this.$up = signUp;
    }

    removeActiveClass(key) {
        switch (key) {
            case "signInBtn":
                this.$in.classList.remove("active_sign");
                break;
            case "signUpBtn":
                this.$up.classList.remove("active_sign");
                break;
        }
    }

    addActiveClass(key) {
        switch (key) {
            case "signInBtn":
                this.$in.classList.add("active_sign");
                break;
            case "signUpBtn":
                this.$up.classList.add("active_sign");
                break;
        }
    }
}

class SelectorSignInUp {
    constructor(signIn, signUp) {
        this.$in = signIn;
        this.$up = signUp;
    }

    selectSignUp() {
        this.$in.style.left = "-520px";
        this.$up.style.right = "0";
    }
    selectSignIn() {
        this.$in.style.left = null;
        this.$up.style.right = null;
    }
}

const setActiveBtn = new SetActiveBtn(signInBtn, signUpBtn);
const selectorSignInUp = new SelectorSignInUp(signInSelector, signUpSelector);

const showPopupSignInUp = () => {
    popupSignInUp.style.display = null;

    signUpBtn.addEventListener("click", () => {
        return (function () {
            if (!signUpBtn.classList.contains("active_sign")) {
                setActiveBtn.removeActiveClass("signInBtn");
                setActiveBtn.addActiveClass("signUpBtn");
                selectorSignInUp.selectSignUp();
            }
        })();
    });
    signInBtn.addEventListener("click", () => {
        return (function () {
            if (!signInBtn.classList.contains("active_sign")) {
                setActiveBtn.removeActiveClass("signUpBtn");
                setActiveBtn.addActiveClass("signInBtn");
                selectorSignInUp.selectSignIn();
            }
        })();
    });
};

const eventBtnPopup = () => {
    if(document.querySelector(".header_nav__signin") && document.querySelector(".header_nav__signup")) {
        btnReg.addEventListener("click", () => {
            return (function () {
                showPopupSignInUp();
            })();
        });
        btnSign.addEventListener("click", () => {
            return (function () {
                setActiveBtn.removeActiveClass("signInBtn");
                setActiveBtn.addActiveClass("signUpBtn");
                selectorSignInUp.selectSignUp();
                showPopupSignInUp();
            })();
        });
        closePopup.addEventListener("click", () => {
            return (function () {
                setActiveBtn.removeActiveClass("signUpBtn");
                setActiveBtn.addActiveClass("signInBtn");
                popupSignInUp.style.display = "none";
            })();
        });
    }
};
eventBtnPopup();