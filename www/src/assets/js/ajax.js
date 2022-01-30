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

const userAutorized = () => {
    if (sessionStorage.getItem("authorizedUser")) {
        let dataUser = JSON.parse(sessionStorage.getItem("authorizedUser"));
        setInterval(() => {
            document.cookie = `token=${MD5(
                dataUser.userId + dataUser.userLog + dataUser.userPass
            )}; path=/; max-age=2;`;
        }, 1000);

        xhr.open(
            "POST",
            `/user_signin?log=${dataUser.userLog}&pass=${dataUser.userPass}`
        );
        xhr.send();
    } else {
        xhr.open("GET", `/user_signout`);
        xhr.send();
    }
};
userAutorized();

const forwarding = (status) => {
    if (!status) {
        errorSignin.style.display = "block";
        errorSignin.innerHTML = responseJson.err;
    } else {
        sessionStorage.setItem(
            "authorizedUser",
            JSON.stringify({
                userId: responseJson.idUser,
                userLog: responseJson.login,
                userPass: responseJson.pass,
            })
        );
        let dataUser = JSON.parse(
            sessionStorage.getItem("authorizedUser")
        );
        document.cookie = `token=${MD5(
            dataUser.userId +
                dataUser.userLog +
                dataUser.userPass
        )}; path=/; max-age=2;`;
        window.location.href = "/";
    }
}

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
                xhr.open(
                    "POST",
                    `/user_signin?log=${listenerSigninLog}&pass=${listenerSigninPass}`
                );
                xhr.responseType = "json";
                xhr.send();

                xhr.onload = function () {
                    if (xhr.status != 200) {
                        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                    } else {
                        responseJson = xhr.response;
                        forwarding(responseJson.completed);
                    }
                };
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
                xhr.open("GET", "/user_signout");
                xhr.send();
                sessionStorage.removeItem("authorizedUser");
                document.cookie = "token=; path=/; max-age=-1;";
                window.location.href = "/";
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

                xhr.open(
                    "POST",
                    `/user_signup?login=${log}&passConf=${MD5(
                        passConf
                    ).toString()}`
                );
                xhr.responseType = "json";
                xhr.send();

                xhr.onload = function () {
                    if (xhr.status != 200) {
                        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                    } else {
                        responseJson = xhr.response;
                        forwarding(responseJson.completed);
                    }
                };
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
                    let dataUser = JSON.parse(
                        sessionStorage.getItem("authorizedUser")
                    );
                    document.cookie = `token=${MD5(
                        dataUser.userId + dataUser.userLog + dataUser.userPass
                    )}; path=/; max-age=2;`;

                    xhr.open(
                        "POST",
                        `/create_newtodo?userId=${dataUser.userId}&title=${title}&tag=${tag}&text=${todo}`
                    );
                    xhr.send();

                    xhr.onload = function () {
                        if (xhr.status != 200) {
                            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                            errorSignin.style.display = "block";
                        } else {
                            responseJson = xhr.response;
                            forwarding(responseJson.completed);
                            window.location.href = "/todo";
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