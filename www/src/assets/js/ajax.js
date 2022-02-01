import MD5 from "crypto-js/md5";

const signinLog = document.getElementById("signin_log");
const signinPass = document.getElementById("signin_pass");
const signinBtn = document.getElementById("signin_btn");

const signupLog = document.getElementById("signup_log");
const signupPass = document.getElementById("signup_pass");
const signupPassConf = document.getElementById("signup_pass_conf");
const signupBtn = document.getElementById("signup_btn");

const errorSignin = document.querySelector(".error_signin");
const errorSignup = document.querySelector(".error_signup");

let newtodoTitle, newtodoTag, newtodoTodo, newtodoBtn;

const xhr = new XMLHttpRequest();

let listenerSigninLog, listenerSigninPass;

function _RNDSH(sumString) {
    const symbolArr =
        "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var rtsdnr = "";
    for (let i = 0; i < sumString; i++) {
        var index = Math.floor(Math.random() * symbolArr.length);
        rtsdnr += symbolArr[index];
    }
    return rtsdnr;
}

const userAutorized = () => {
    let cookies = document.cookie.split(";");
    cookies.forEach((item) => {
        if (item.includes("token=")) {
            setInterval(() => {
                document.cookie = `${item}; path=/; max-age=2;`;
            }, 1000);
        }
        if(!item.includes("devToken=") && !item.includes("token=")) {
            window.location.href = "/"
        }
    });
};
userAutorized();

document.addEventListener("keydown", (event) => {
    return function() {
        if(event.code === "Insert") {
            let confExit = confirm("Вы действительно хотите выйти из системы?", "")

            if(confExit) {
                document.cookie = "token=; path=/; max-age=-1;";
                document.cookie = "devToken=; path=/; max-age=-1;";
                window.location.href = "/"
            }
        }
    }()
})

let responseJson;

const userSignIn = () => {
    signinLog.addEventListener("input", () => {
        signinLog.value != ""
            ? (listenerSigninLog = signinLog.value)
            : (listenerSigninLog = "");
    });
    signinPass.addEventListener("input", () => {
        signinPass.value != ""
            ? (listenerSigninPass = MD5(signinPass.value).toString())
            : (listenerSigninPass = "");
    });
    signinBtn.addEventListener("click", () => {
        return (function () {
            if ((signinLog != "", signinPass != "")) {
                let rndsh = _RNDSH(10);

                xhr.open(
                    "POST",
                    `/dev_edition_v0_0_12token_17devdvp09high2002/user_signin?log=${listenerSigninLog}&pass=${listenerSigninPass}&token=${MD5(
                        listenerSigninLog + listenerSigninPass + rndsh
                    )}`
                );
                xhr.responseType = "json";
                xhr.send();
                responseJson = xhr.response

                xhr.onload = function () {
                    if (xhr.status != 200) {
                        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                    } else {
                        document.cookie = `token=${MD5(
                            listenerSigninLog + listenerSigninPass + rndsh
                        )}; path=/; max-age=2;`;
                        window.location.reload();
                    }
                };
            } else {
                errorSignin.style.display = "block";
                errorSignin.innerHTML = responseJson.err
            }
        })();
    });
};
userSignIn();

const userSignOut = () => {
    if (document.querySelector(".header_nav__signout")) {
        const btnSignOut = document.querySelector(".header_nav__signout");
        btnSignOut.addEventListener("click", () => {
            return (function () {
                let cookies = document.cookie.split(";");
                cookies.forEach((item) => {
                    if (item.includes("token=")) {
                        xhr.open("POST", `/dev_edition_v0_0_12token_17devdvp09high2002/user_signout?${item}`);
                        xhr.send();
                        document.cookie = "token=; path=/; max-age=-1;";
                        window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002";
                    }
                });
            })();
        });
    }
};
userSignOut();

const userSignUp = () => {
    let log, pass, passConf;

    signupLog.addEventListener("input", () => {
        signupLog.value !== "" ? (log = signupLog.value) : (log = "");
    });
    signupPass.addEventListener("input", () => {
        signupPass.value !== "" ? (pass = signupPass.value) : (pass = "");
    });
    signupPassConf.addEventListener("input", () => {
        signupPassConf.value !== ""
            ? (passConf = signupPassConf.value)
            : (passConf = "");
    });

    signupBtn.addEventListener("click", () => {
        return (function () {
            if (log !== "" && pass !== "" && passConf !== "") {
                if (pass === passConf) {
                    let rndsh = _RNDSH(10);

                    xhr.open(
                        "POST",
                        `/dev_edition_v0_0_12token_17devdvp09high2002/user_signup?login=${log}&passConf=${MD5(
                            passConf
                        ).toString()}&token=${MD5(log + passConf + rndsh)}`
                    );
                    xhr.responseType = "json";
                    xhr.send();
                    responseJson = xhr.response

                    xhr.onload = function () {
                        if (xhr.status != 200) {
                            console.log(
                                `Ошибка ${xhr.status}: ${xhr.statusText}`
                            );
                        } else {
                            document.cookie = `token=${MD5(
                                listenerSigninLog + listenerSigninPass + rndsh
                            )}; path=/; max-age=2;`;
                            window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002";
                        }
                    };
                } else {
                    errorSignup.style.display = "block";
                    errorSignup.innerHTML = responseJson.err
                }
            } else {
                errorSignup.style.display = "block";
                errorSignup.innerHTML = responseJson.err
            }
        })();
    });
};
userSignUp();

const userCreateNewTodo = () => {
    if (document.querySelector(".popup.popup_newtodo")) {
        newtodoTitle = document.getElementById("newtodo_title");
        newtodoTag = document.getElementById("newtodo_tag");
        newtodoTodo = document.getElementById("newtodo_todo");
        newtodoBtn = document.getElementById("newtodo_btn");

        let title, tag, todo;

        newtodoTitle.addEventListener("input", () => {
            newtodoTitle.value !== "" && [...newtodoTitle.value].length < 255
                ? (title = newtodoTitle.value)
                : ((title = ""), (errorSignin.style.display = "block"));
        });
        newtodoTag.addEventListener("input", () => {
            newtodoTag.value !== "" && [...newtodoTag.value].length < 130
                ? (tag = newtodoTag.value)
                : ((tag = ""), (errorSignin.style.display = "block"));
        });
        newtodoTodo.addEventListener("input", () => {
            newtodoTodo.value !== "" ? (todo = newtodoTodo.value) : (todo = "");
        });

        newtodoBtn.addEventListener("click", () => {
            return (function () {
                if (title !== "" && tag !== "" && todo !== "") {
                    let cookies = document.cookie.split(";");
                    cookies.forEach((item) => {
                        if (item.includes("token=")) {
                            document.cookie = `${item}; path=/; max-age=2;`;
                        }
                    });
                    xhr.open(
                        "POST",
                        `/dev_edition_v0_0_12token_17devdvp09high2002/create_newtodo?title=${title}&tag=${tag}&text=${todo}`
                    );
                    xhr.send();

                    xhr.onload = function () {
                        if (xhr.status != 200) {
                            console.log(
                                `Ошибка ${xhr.status}: ${xhr.statusText}`
                            );
                            errorSignin.style.display = "block";
                        } else {
                            window.location.href = "/dev_edition_v0_0_12token_17devdvp09high2002/todo";
                        }
                    };
                } else {
                    errorSignin.style.display = "block";
                }
            })();
        });
    }
};
userCreateNewTodo();
