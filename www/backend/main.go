package main

import (
	"fmt"
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles("../index.html")
	if err != nil {
		fmt.Println(err)
		return
	}

	tpl.ExecuteTemplate(w, "index", nil)
}

func handleFunc() {

	rtr := mux.NewRouter()
	rtr.HandleFunc("/", homePage)

	http.Handle("/", rtr)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("../assets/"))))

	http.ListenAndServe(":8800", nil)
}

func main() {
	handleFunc()
}
