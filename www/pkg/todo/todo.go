package todo

import (
	"fmt"
	NewError "golang-todo/www/pkg/NewError"
	"golang-todo/www/pkg/database"
	"net/http"
	"strings"
)

const (
	sqlQueryAllTodo string = `SELECT t.id, title, tag, text FROM users_todo t, users u, users_todo_goals tg
	WHERE t.id=tg.users_todo_fk AND u.id=tg.users_id AND u.token=`
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
)

func AllTodo(r *http.Request) []TodoList {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorAllTodo, err))
	}

	token, _ := r.Cookie("token")
	tokenS := strings.Replace(fmt.Sprintf("%s", token), "token=", "", -1)

	result, err := database.Query(fmt.Sprintf("%s'%s';", sqlQueryAllTodo, tokenS))
	if err != nil {
		fmt.Println(NewError.GiveError(errorAllTodo, err))
	}

	todoListArr := []TodoList{}

	for result.Next() {
		j := TodoList{}
		err := result.Scan(&j.IdTodo, &j.Title, &j.Tag, &j.Text)
		if err != nil {
			fmt.Println(NewError.GiveError(errorAllTodo, err))
			continue
		}
		todoListArr = append(todoListArr, j)
	}

	return todoListArr
}

func SetNewTodo(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorSetNewTodo, err))
	}

	userId := r.URL.Query().Get("userId")
	title := r.URL.Query().Get("title")
	tag := r.URL.Query().Get("tag")
	text := r.URL.Query().Get("text")

	var idColumn int

	database.QueryRow(`INSERT INTO users_todo (title, tag, text) VALUES ($1, $2, $3) RETURNING id;`,
		title, tag, text).Scan(&idColumn)

	_, err = database.Exec(`INSERT INTO users_todo_goals (users_id, users_todo_fk) VALUES ($1, $2)`, userId, idColumn)
	if err != nil {
		fmt.Println(NewError.GiveError(errorSetNewTodo, err))
	}
}

func DeleteTodo(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorSetNewTodo, err))
	}

	todoId := r.URL.Query().Get("todoId")

	_, err = database.Exec("DELETE FROM users_todo_goals WHERE users_todo_fk=$1;", todoId)
	if err != nil {
		fmt.Println(NewError.GiveError(errorSetNewTodo, err))
	}

	_, err = database.Exec("DELETE FROM users_todo WHERE id=$1;", todoId)
	if err != nil {
		fmt.Println(NewError.GiveError(errorSetNewTodo, err))
	}
}

func EditTodo(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorSetNewTodo, err))
	}

	todoId := r.URL.Query().Get("todoId")
	title := r.URL.Query().Get("title")
	tag := r.URL.Query().Get("tag")
	text := r.URL.Query().Get("text")

	_, err = database.Exec("UPDATE users_todo SET title=$1, tag=$2, text=$3 WHERE id=$4", title, tag, text, todoId)
	if err != nil {
		fmt.Println(NewError.GiveError(errorSetNewTodo, err))
	}
}
