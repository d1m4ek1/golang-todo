const openCloseModalToDo = () => {
    const btnOpenModal = document.querySelector(".todo_create__btn");
    const btnCloseModal = document.querySelector(".modal_close__btn");

    btnOpenModal.addEventListener("click", () => {
        return function() {
            document.querySelector(".todo_create__modal").style.display = "flex";
        }();
    });
    btnCloseModal.addEventListener("click", () => {
        return function() {
            document.querySelector(".todo_create__modal").style.display = "none";
        }();
    });
}; 
openCloseModalToDo();

const changeTheme = () => {
    const colorizerItems = document.querySelectorAll(".bg_colorizer__items > button");

    colorizerItems.forEach(item => {
        item.addEventListener("click", event => {
            return function() {
                let themeColor = event.target.id;

                colorizerItems.forEach(item => {
                    item.classList.remove("active")
                })
                item.classList.add("active")

                switch (themeColor) {
                    case "bg_col_light":
                        document.body.style.backgroundColor = "white";
                        break;
                    case "bg_col_blue":
                        document.body.style.backgroundColor = "rgb(163, 163, 255)";
                        break;
                    case "bg_col_dark":
                        document.body.style.backgroundColor = "rgb(58, 58, 58)";
                        break;
                    case "bg_col_red":
                        document.body.style.backgroundColor = "rgb(255, 148, 148)";
                        break;
                    case "bg_col_purple":
                        document.body.style.backgroundColor = "rgb(165, 117, 255)";
                        break;
                }
            }();
        });
    });
};
changeTheme();