package todo

import (
	"fmt"
	NewError "golang-todo/www/pkg/NewError"
	"golang-todo/www/pkg/database"
	"net/http"
	"strings"
)

const (
	sqlQueryAllTodo string = `SELECT t.id, title, tag, text FROM users_todo t, users u, users_tasks ts
	WHERE t.users_id=ts.users_todo_id AND u.id=ts.users_todo_id AND u.token=`
)

type TodoList struct {
	IdTodo int
	Title  string
	Tag    string
	Text   string
}

const (
	pathToError string = "pkg/todo -> Function "
)

var (
	errorAllTodo    string = pathToError + "AllTodo"
	errorSetNewTodo string = pathToError + "SetNewTodo"
	errorDeleteTodo string = pathToError + "DeleteTodo"
	errorEditTodo   string = pathToError + "EditTodo"
)

func AllTodo(r *http.Request) []TodoList {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorAllTodo, "Connect to db", err))
	}

	token, _ := r.Cookie("token")
	tokenS := strings.Replace(token.Value, "token=", "", -1)

	result, err := database.Query(fmt.Sprintf("%s'%s';", sqlQueryAllTodo, tokenS))
	if err != nil {
		fmt.Println(NewError.Wrap(errorAllTodo, "Query to db", err))
	}

	todoListArr := []TodoList{}

	for result.Next() {
		j := TodoList{}
		if err := result.Scan(&j.IdTodo, &j.Title, &j.Tag, &j.Text); err != nil {
			fmt.Println(NewError.Wrap(errorAllTodo, "cycle -> result.Next()", err))
			continue
		}
		todoListArr = append(todoListArr, j)
	}

	return todoListArr
}

func SetNewTodo(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorSetNewTodo, "Connect to db", err))
	}

	title := r.URL.Query().Get("title")
	tag := r.URL.Query().Get("tag")
	text := r.URL.Query().Get("text")

	token, _ := r.Cookie("token")
	tokenS := strings.Replace(token.Value, "token=", "", -1)

	var idColumn int

	database.QueryRow(`SELECT u.id FROM users u WHERE token=$1`, tokenS).Scan(&idColumn)

	if _, err = database.Exec(`INSERT INTO users_todo (users_id, title, tag, text) VALUES ($1, $2, $3, $4)`,
		idColumn, title, tag, text); err != nil {
		fmt.Println(NewError.Wrap(errorSetNewTodo, "Query to db", err))
	}
}

func DeleteTodo(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorDeleteTodo, "Connect to db", err))
	}

	todoId := r.URL.Query().Get("todoId")

	if _, err = database.Exec("DELETE FROM users_todo WHERE id=$1;", todoId); err != nil {
		fmt.Println(NewError.Wrap(errorDeleteTodo, "Query to db", err))
	}
}

func EditTodo(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorEditTodo, "Connect to db", err))
	}

	todoId := r.URL.Query().Get("todoId")
	title := r.URL.Query().Get("title")
	tag := r.URL.Query().Get("tag")
	text := r.URL.Query().Get("text")

	if _, err = database.Exec("UPDATE users_todo SET title=$1, tag=$2, text=$3 WHERE id=$4",
		title, tag, text, todoId); err != nil {
		fmt.Println(NewError.Wrap(errorEditTodo, "Query to db", err))
	}
}
