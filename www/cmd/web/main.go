package main

import (
	"fmt"
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

// PATHS
const (
	pathPopupSignInUpTpl string = "./ui/html/template/Login.html"
	pathTodoTpl          string = "./ui/html/pages/Todo.html"
	pathIndexTpl         string = "./ui/html/index.html"
)

func todoPage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles(pathTodoTpl, pathPopupSignInUpTpl)
	if err != nil {
		fmt.Println(err)
		return
	}

	tpl.ExecuteTemplate(w, "todo", nil)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles(pathIndexTpl, pathPopupSignInUpTpl)
	if err != nil {
		fmt.Println(err)
		return
	}

	tpl.ExecuteTemplate(w, "index", nil)
}

func handleFunc() {

	rtr := mux.NewRouter()
	rtr.HandleFunc("/", homePage)
	rtr.HandleFunc("/todo", todoPage)

	http.Handle("/", rtr)
	http.Handle("/static/assets/", http.StripPrefix("/static/assets/", http.FileServer(http.Dir("./ui/static/assets/"))))

	http.ListenAndServe(":8800", nil)
}

func main() {
	handleFunc()
}
