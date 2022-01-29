package main

import (
	"database/sql"
	"fmt"
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

func openConnect() {
	connStr := "user=postgres password=537537 dbname=test_datab sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	result, err := db.Query("SELECT * FROM users")
	if err != nil {
		panic(err)
	}
	defer result.Close()
	fmt.Println(result)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles("./ui/html/index.html")
	if err != nil {
		fmt.Println(err)
		return
	}

	openConnect()

	tpl.ExecuteTemplate(w, "index", nil)
}

func handleFunc() {

	rtr := mux.NewRouter()
	rtr.HandleFunc("/", homePage)

	http.Handle("/", rtr)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./ui/assets/"))))

	http.ListenAndServe(":8800", nil)
}

func main() {
	handleFunc()
}
