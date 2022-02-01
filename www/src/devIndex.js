import { MD5 } from "crypto-js";
import "./devIndex.css";

let log = document.getElementById("card_login");
let pass = document.getElementById("card_password");
let btn = document.getElementById("card_btn");

let loaders = document.querySelector(".loaders");
let cardForm = document.querySelector(".card_form");

const xhr = new XMLHttpRequest();

const signin = () => {
    let logList, passList;

    log.addEventListener("input", () => {
        return (function () {
            logList = log.value;
        })();
    });
    pass.addEventListener("input", () => {
        return (function () {
            passList = pass.value;
        })();
    });

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

    btn.addEventListener("click", () => {
        return (function () {
            if (logList !== "" && passList !== "") {
                const devToken = MD5(logList + passList + _RNDSH(10));

                xhr.open(
                    "GET",
                    `/dev_autorized?log=${logList}&pass=${MD5(passList)}&token=${devToken}`
                );

                xhr.responseType = "json";

                xhr.send();

                xhr.onload = function () {
                    if (xhr.status != 200) {
                        console.log(
                            "Error: " + xhr.status + "\n" + xhr.statusText
                        );
                    } else {
                        let respObj = xhr.response;

                        if (respObj.err === "") {
                            document.cookie = `devToken=${devToken}; max-age=300;`;
                            window.location.href = respObj.url;
                        } else {
                            document.getElementById("errors").innerText =
                            respObj.err;
                        }
                    }
                };
            }
        })();
    });
};

setTimeout(() => {
    loaders.style.display = "none";
}, 3000);
setTimeout(() => {

    let cookies = document.cookie.split(";");
    cookies.forEach((item) => {
        if (item.includes("devToken=")) {
            xhr.open(
                "GET",
                `/dev_autorized_token?${item}`
            );

            xhr.responseType = "json";

            xhr.send();

            xhr.onload = function () {
                if (xhr.status != 200) {
                    console.log(
                        "Error: " + xhr.status + "\n" + xhr.statusText
                    );
                } else {
                    let respObj = xhr.response;

                    if (respObj.err === "") {
                        window.location.href = respObj.url;
                    } else {
                        document.getElementById("errors").innerText =
                        respObj.err;
                    }
                }
            };
        }
    });


    cardForm.style.display = null;
    signin();
}, 3050);
