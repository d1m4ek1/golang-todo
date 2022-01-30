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
	pathTodoTpl          string = "./ui/html/pages/Todo.html"
	pathIndexTpl         string = "./ui/html/index.html"
)

func todoPage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles(pathTodoTpl, pathPopupSignInUpTpl, pathPopupNewToDo)
	if err != nil {
		fmt.Println(err)
		return
	}

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

	Data := struct {
		UserLogin string
	}{
		UserLogin: autorizations.AutorizedUserInfo.Login,
	}

	tpl.ExecuteTemplate(w, "index", Data)
}

func handleFunc() {

	rtr := mux.NewRouter()
	rtr.HandleFunc("/", homePage)
	rtr.HandleFunc("/todo", todoPage)

	rtr.HandleFunc("/user_signin", autorizations.SigninInUser)
	rtr.HandleFunc("/user_signout", autorizations.UserSignOut)

	http.Handle("/", rtr)
	http.Handle("/static/assets/", http.StripPrefix("/static/assets/", http.FileServer(http.Dir("./ui/static/assets/"))))

	http.ListenAndServe(":8800", nil)
}

func main() {
	handleFunc()
}
