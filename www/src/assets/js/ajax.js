import MD5 from "crypto-js/md5";

const signinLog = document.getElementById("signin_log");
const signinPass = document.getElementById("signin_pass");
const signinBtn = document.getElementById("signin_btn");
const errorSignin = document.querySelector(".error_signin");

const xhr = new XMLHttpRequest();

let listenerSigninLog, listenerSigninPass;

const autorizedUser = () => {
    if (sessionStorage.getItem("authorizedUser")) {
        let dataUser = JSON.parse(sessionStorage.getItem("authorizedUser"));
        setInterval(()=> {
            document.cookie = `token=${MD5(dataUser.userId + dataUser.userLog + dataUser.userPass)}; path=/; max-age=2;`
        }, 1000)

        xhr.open(
            "POST",
            `/user_signin?log=${dataUser.userLog}&pass=${dataUser.userPass}`
        );
        xhr.send();

    } else {
        xhr.open(
            "GET",
            `/user_signout`
        );
        xhr.send();
    }
};
autorizedUser()

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
                                userPass: responseJson.pass
                            })
                        );
                        let dataUser = JSON.parse(sessionStorage.getItem("authorizedUser"));
                        document.cookie = `token=${MD5(dataUser.userId + dataUser.userLog + dataUser.userPass)}; path=/; max-age=2;`
                        window.location.href= "/";
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
                xhr.open("GET", "/user_signout")
                xhr.send()
                sessionStorage.removeItem("authorizedUser");
                document.cookie = "token=; path=/; max-age=-1;"
                window.location.href= "/";
            })();
        });
    }
};
userSignOut();