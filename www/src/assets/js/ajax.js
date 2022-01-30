import MD5 from "crypto-js/md5";

const signinLog = document.getElementById("signin_log");
const signinPass = document.getElementById("signin_pass");
const signinBtn = document.getElementById("signin_btn");
const errorSignin = document.querySelector(".error_signin");

let newtodoTitle, newtodoTag, newtodoTodo, newtodoBtn;

const xhr = new XMLHttpRequest();

let listenerSigninLog, listenerSigninPass;

const autorizedUser = () => {
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
autorizedUser();

let responseJson;

const signinForm = () => {
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

                function forwarding(status) {
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
signinForm();

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

if (document.querySelector(".popup.popup_newtodo")) {
    newtodoTitle = document.getElementById("newtodo_title");
    newtodoTag = document.getElementById("newtodo_tag");
    newtodoTodo = document.getElementById("newtodo_todo");
    newtodoBtn = document.getElementById("newtodo_btn");

    let title, tag, todo;

    newtodoTitle.addEventListener("input", () => {
        newtodoTitle.value != "" && [...newtodoTitle.value].length < 255
            ? (title = newtodoTitle.value)
            : ((title = ""), (errorSignin.style.display = "block"));
    });
    newtodoTag.addEventListener("input", () => {
        newtodoTag.value != "" && [...newtodoTag.value].length < 130
            ? (tag = newtodoTag.value)
            : ((tag = ""), (errorSignin.style.display = "block"));
    });
    newtodoTodo.addEventListener("input", () => {
        newtodoTodo.value != "" ? (todo = newtodoTodo.value) : (todo = "");
    });

    newtodoBtn.addEventListener("click", () => {
        return (function () {
            if (title != "" && tag != "" && todo != "") {
                let dataUser = JSON.parse(
                    sessionStorage.getItem("authorizedUser")
                );
                console.log(dataUser.userId)
                xhr.open(
                    "POST",
                    `/create_newtodo?userId=${dataUser.userId}&title=${title}&tag=${tag}&text=${todo}`
                );
                xhr.send();
                window.location.reload();
            } else {
                errorSignin.style.display = "block";
            }
        })();
    });
}
