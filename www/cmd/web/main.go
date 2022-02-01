package main

import (
	"fmt"
	"golang-todo/www/pkg/autorizations"
	"golang-todo/www/pkg/todo"
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

// PATHS
const (
	pathPopupSignInUpTpl string = "./ui/html/template/Login.html"
	pathPopupNewToDo     string = "./ui/html/template/NewTodo.html"
	pathPopupDeleteTodo  string = "./ui/html/template/DeleteTodo.html"
	pathPopupEditTodo    string = "./ui/html/template/EditTodo.html"
	pathPopupMoreTodo    string = "./ui/html/template/MoreTodo.html"

	pathDevIndex string = "./ui/html/devIndex.html"

	pathTodoTpl  string = "./ui/html/pages/Todo.html"
	pathIndexTpl string = "./ui/html/index.html"
)

func todoPage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles(pathTodoTpl, pathPopupSignInUpTpl, pathPopupNewToDo, pathPopupDeleteTodo, pathPopupEditTodo, pathPopupMoreTodo)
	if err != nil {
		fmt.Println(err)
		return
	}

	autorizations.UserAutorized(w, r)
	Data := struct {
		UserLogin string
		UserTodo  []todo.TodoList
	}{
		UserLogin: autorizations.AutorizedUserInfo.Login,
		UserTodo:  todo.AllTodo(r),
	}

	tpl.ExecuteTemplate(w, "todo", Data)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles(pathIndexTpl, pathPopupSignInUpTpl)
	if err != nil {
		fmt.Println(err)
		return
	}

	token, _ := r.Cookie("token")

	if token == nil {
		autorizations.AutorizedUserInfo.Login = ""
	}

	autorizations.UserAutorized(w, r)
	Data := struct {
		UserLogin string
	}{
		UserLogin: autorizations.AutorizedUserInfo.Login,
	}

	tpl.ExecuteTemplate(w, "index", Data)
}

func devPage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles(pathDevIndex)
	if err != nil {
		fmt.Println(err)
		return
	}

	tpl.ExecuteTemplate(w, "devIndex", nil)
}

func handleFunc() {

	rtr := mux.NewRouter()

	rtr.HandleFunc("/", devPage)
	rtr.HandleFunc("/dev_autorized", autorizations.DevSignIn)
	rtr.HandleFunc("/dev_autorized_token", autorizations.DevAutorized)

	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002", homePage)
	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002/todo", todoPage)

	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002/user_signin", autorizations.SignInUser)
	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002/user_signout", autorizations.UserSignOut)
	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002/user_signup", autorizations.SignUpUser)

	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002/create_newtodo", todo.SetNewTodo)
	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002/delete_todo", todo.DeleteTodo)
	rtr.HandleFunc("/dev_edition_v0_0_12token_17devdvp09high2002/edit_todo", todo.EditTodo)

	http.Handle("/", rtr)
	http.Handle("/static/assets/", http.StripPrefix("/static/assets/", http.FileServer(http.Dir("./ui/static/assets/"))))

	http.ListenAndServe(":8800", nil)
}

func main() {
	handleFunc()
}
