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