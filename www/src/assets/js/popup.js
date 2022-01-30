import MD5 from "crypto-js/md5";

const mainBlock = document.querySelector(".main");
const popupSignInUp = document.querySelector(".popup_sign");

let btnReg, btnSign;
if (
    document.querySelector(".header_nav__signin") &&
    document.querySelector(".header_nav__signup")
) {
    btnReg = document.querySelector(".header_nav__signin");
    btnSign = document.querySelector(".header_nav__signup");
}

const signInBtn = document.querySelector(".signin_btn");
const signUpBtn = document.querySelector(".signup_btn");
const closePopup = document.querySelectorAll(".popup_close");

const signInSelector = document.querySelector("#popup_signin");
const signUpSelector = document.querySelector("#popup_signup");

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

class TemplatesPopup {
    constructor(btnPopup, popup, utils) {
        this.$btn = btnPopup;
        this.$pop = popup;
        this.$ut = utils;
    }

    showPopup() {
        this.$btn.forEach((item) => {
            item.addEventListener("click", (event) => {
                this.$pop.style.display = null;

                switch (this.$ut) {
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

    closePopup() {
        closePopup.forEach((item) => {
            item.addEventListener("click", () => {
                this.$pop.classList.add("hide_popup")
                setTimeout(() => {
                    this.$pop.style.display = "none";
                    this.$pop.classList.remove("hide_popup")
                }, 290)
            });
        });
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
    if (
        document.querySelector(".header_nav__signin") &&
        document.querySelector(".header_nav__signup")
    ) {
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
        const closePopup = document.querySelector(".popup_close");
        closePopup.addEventListener("click", () => {
            return (function () {
                popupSignInUp.classList.add("hide_popup");
                setTimeout(() => {
                    setActiveBtn.removeActiveClass("signUpBtn");
                    setActiveBtn.addActiveClass("signInBtn");
                    popupSignInUp.style.display = "none";
                    popupSignInUp.classList.remove("hide_popup");
                }, 290);
            })();
        });
    }
};
eventBtnPopup();

const showNewTodo = () => {
    if (document.querySelector(".popup.popup_newtodo")) {
        let btnShowPopup = document.querySelectorAll(".btn.new_todo_btn");
        let popupNewTodo = document.querySelector(".popup.popup_newtodo");

        let templatesPopup = new TemplatesPopup(btnShowPopup, popupNewTodo);

        templatesPopup.showPopup();
        templatesPopup.closePopup();
    }
};
showNewTodo();

const showDeleteTodo = () => {
    if (document.querySelector(".popup.popup_todoDelete")) {
        let btnShowPopup = document.querySelectorAll(".show_delete_todo");
        let popupDeleteTodo = document.querySelector(".popup.popup_todoDelete");

        let templatesPopup = new TemplatesPopup(
            btnShowPopup,
            popupDeleteTodo,
            "delete"
        );

        templatesPopup.showPopup();
        templatesPopup.closePopup();
    }
};
showDeleteTodo();

const showEditTodo = () => {
    if (document.querySelector(".popup.popup_edittodo")) {
        let btnShowPopup = document.querySelectorAll(".show_edit_todo");
        let popupEditTodo = document.querySelector(".popup.popup_edittodo");

        let templatesPopup = new TemplatesPopup(
            btnShowPopup,
            popupEditTodo,
            "edit"
        );

        templatesPopup.showPopup();
        templatesPopup.closePopup();
    }
};
showEditTodo();

// AJAX
// AJAX
const xhr = new XMLHttpRequest();

function userDeleteTodo(elem) {
    if (elem) {
        let yesBtn = document.querySelector(".btn.yes_delete");
        let notBtn = document.querySelector(".btn.not_delete");
        let popupDeleteTodo = document.querySelector(".popup.popup_todoDelete");

        let templatesPopup = new TemplatesPopup(null, popupDeleteTodo);

        notBtn.addEventListener("click", () => {
            return (function () {
                templatesPopup.closePopup();
            })();
        });

        yesBtn.addEventListener("click", () => {
            return (function () {
                xhr.open(
                    "POST",
                    `/delete_todo?todoId=${elem.replace(/todo_/g, "")}`
                );
                xhr.send();

                window.location.href = "/todo";
            })();
        });
    }
}

function userEditTodo(elem) {
    if (elem) {
        const title = document.querySelector(
            `#${elem} > .todo_rec__title > h2`
        ).innerHTML;
        const tag = document
            .querySelector(`#${elem} > .todo_rec__title > h3`)
            .innerHTML.replace(/Tag: @/g, "");
        const text = document.querySelector(
            `#${elem} > .todo_rec__content > p`
        ).innerText;

        const inputTitle = document.getElementById("edittodo_title");
        const inputTag = document.getElementById("edittodo_tag");
        const inputText = document.getElementById("edittodo_todo");

        inputTitle.value = title;
        inputTag.value = tag;
        inputText.value = text;

        const editBtn = document.getElementById("edittodo_btn");
        const popupEditTodo = document.querySelector(".popup.popup_edittodo");

        let templatesPopup = new TemplatesPopup(null, popupEditTodo);

        templatesPopup.closePopup();

        editBtn.addEventListener("click", () => {
            return (function () {
                xhr.open(
                    "POST",
                    `/edit_todo?todoId=${elem.replace(/todo_/g, "")}&title=${
                        inputTitle.value
                    }&tag=${inputTag.value}&text=${inputText.value}`
                );
                xhr.send();

                let dataUser = JSON.parse(
                    sessionStorage.getItem("authorizedUser")
                );
                document.cookie = `token=${MD5(
                    dataUser.userId + dataUser.userLog + dataUser.userPass
                )}; path=/; max-age=2;`;

                window.location.href = "/todo";
            })();
        });
    }
}
