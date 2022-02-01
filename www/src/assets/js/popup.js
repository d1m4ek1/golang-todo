import MD5 from "crypto-js/md5";

const popupData = {
    popupSignInUp: {
        isPopup: null,
        btnReg: null,
        btnSign: null,
        signInBtn: null,
        signUpBtn: null,
        popupSelectors: {
            leftSelector: null,
            rightSelector: null,
        },
    },
    popupContact: {
        isPopup: null,
        contactBtn: [],
        messBtn: null,
        addressBtn: null,
        popupSelectors: {
            leftSelector: null,
            rightSelector: null,
        },
    },
    closePopup: document.querySelectorAll(".popup_close"),
};

class SetPopup {
    constructor(option) {
        this.$pp = option;
    }

    setSignInUp() {
        this.$pp.popupSignInUp.btnReg = document.querySelector(
            ".header_nav__signup"
        );
        this.$pp.popupSignInUp.btnSign = document.querySelector(
            ".header_nav__signin"
        );

        this.$pp.popupSignInUp.isPopup = document.querySelector(".popup_sign");
        this.$pp.popupSignInUp.signInBtn =
            document.querySelector(".signin_btn");
        this.$pp.popupSignInUp.signUpBtn =
            document.querySelector(".signup_btn");

        this.$pp.popupSignInUp.popupSelectors.leftSelector =
            document.querySelector(".section_signinup.popup_section_left");
        this.$pp.popupSignInUp.popupSelectors.rightSelector =
            document.querySelector(".section_signinup.popup_section_right");
    }
}

class SetActiveBtn {
    constructor(leftBtn, rightBtn) {
        this.$lt = leftBtn;
        this.$rt = rightBtn;
    }

    removeActiveClass(key) {
        switch (key) {
            case "left":
                this.$lt.classList.remove("active_popup_btn");
                break;
            case "right":
                this.$rt.classList.remove("active_popup_btn");
                break;
        }
    }

    addActiveClass(key) {
        switch (key) {
            case "left":
                this.$lt.classList.add("active_popup_btn");
                break;
            case "right":
                this.$rt.classList.add("active_popup_btn");
                break;
        }
    }
}

class SelectorPopupSection {
    constructor(leftBtn, rightBtn) {
        this.$lt = leftBtn;
        this.$rt = rightBtn;
    }

    selectLeft() {
        this.$lt.style.left = "-100%";
        this.$rt.style.right = "0";
    }
    selectRight() {
        this.$lt.style.left = null;
        this.$rt.style.right = null;
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
        popupData.closePopup.forEach((item) => {
            item.addEventListener("click", () => {
                this.$pop.classList.add("hide_popup");
                setTimeout(() => {
                    this.$pop.style.display = "none";
                    this.$pop.classList.remove("hide_popup");
                }, 290);
            });
        });
    }
}

const showPopupSignInUp = (setActiveBtn, selectorPopupSection) => {
    popupData.popupSignInUp.isPopup.style.display = null;

    popupData.popupSignInUp.signInBtn.addEventListener("click", () => {
        return (function () {
            if (
                !popupData.popupSignInUp.signInBtn.classList.contains(
                    "active_popup_btn"
                )
            ) {
                setActiveBtn.removeActiveClass("right");
                setActiveBtn.addActiveClass("left");
                selectorPopupSection.selectRight();
            }
        })();
    });
    popupData.popupSignInUp.signUpBtn.addEventListener("click", () => {
        return (function () {
            if (
                !popupData.popupSignInUp.signUpBtn.classList.contains(
                    "active_popup_btn"
                )
            ) {
                setActiveBtn.removeActiveClass("left");
                setActiveBtn.addActiveClass("right");
                selectorPopupSection.selectLeft();
            }
        })();
    });
};

const eventBtnPopupSignInUp = () => {
    const setActiveBtn = new SetActiveBtn(
        popupData.popupSignInUp.signInBtn,
        popupData.popupSignInUp.signUpBtn
    );
    const selectorPopupSection = new SelectorPopupSection(
        popupData.popupSignInUp.popupSelectors.leftSelector,
        popupData.popupSignInUp.popupSelectors.rightSelector
    );
    if (popupData.popupSignInUp.btnSign && popupData.popupSignInUp.btnReg) {
        popupData.popupSignInUp.btnSign.addEventListener("click", () => {
            return (function () {
                showPopupSignInUp(setActiveBtn, selectorPopupSection);
            })();
        });
        popupData.popupSignInUp.btnReg.addEventListener("click", () => {
            return (function () {
                setActiveBtn.removeActiveClass("left");
                setActiveBtn.addActiveClass("right");
                selectorPopupSection.selectLeft();
                showPopupSignInUp(setActiveBtn, selectorPopupSection);
            })();
        });
    }
    popupData.closePopup.forEach((item) => {
        item.addEventListener("click", () => {
            return (function () {
                setActiveBtn.removeActiveClass("right");
                setActiveBtn.addActiveClass("left");
                selectorPopupSection.selectRight();
                popupData.popupSignInUp.isPopup.style.display = "none";
            })();
        });
    });
};

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

const showMoreTodo = () => {
    if (document.querySelector(".popup.popup_moretodo")) {
        let btnShowPopup = document.querySelectorAll(".show_more_todo");
        let popupMoreTodo = document.querySelector(".popup.popup_moretodo");

        btnShowPopup.forEach((item) => {
            item.addEventListener("click", (event) => {
                return (function () {
                    popupMoreTodo.style.display = null;

                    const todoId = event.path[2].id

                    const title = document.querySelector(
                        `#${todoId} > .todo_rec__title > h2`
                    ).innerHTML;
                    const tag = document
                        .querySelector(`#${todoId} > .todo_rec__title > h3`)
                        .innerHTML.replace(/Tag: @/g, "");
                    const text = document.querySelector(
                        `#${todoId} > .todo_rec__content > p`
                    ).innerText;

                    const titleBlock =
                        document.querySelector(".moretodo_title");
                    const tagBlock = document.querySelector(".moretodo_tag");
                    const textBlock = document.querySelector(".moretodo_text");

                    titleBlock.innerHTML = `Заголовок | ${title}`;
                    tagBlock.innerHTML = `Тэг | @${tag}`;
                    textBlock.innerHTML = text;
                })();
            });
        });

        new TemplatesPopup(null, popupMoreTodo, null).closePopup();
    }
};
showMoreTodo();

if (document.querySelector(".popup.popup_sign")) {
    const setPopup = new SetPopup(popupData);
    setPopup.setSignInUp(), eventBtnPopupSignInUp();
}

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

                let cookies = document.cookie.split(";");
                cookies.forEach((item) => {
                    if (item.includes("token=")) {
                        document.cookie = `${item}; path=/; max-age=2;`;
                    }
                });

                window.location.href = "/todo";
            })();
        });
    }
}
