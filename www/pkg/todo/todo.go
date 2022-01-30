package todo

import (
	"fmt"
	"golang-todo/www/pkg/database"
	"net/http"
	"strings"
)

const (
	sqlQueryAllTodo string = `SELECT t.id, title, tag, text FROM users u
	JOIN users_todo t ON u.id=t.id
	WHERE u.token=`
)

type TodoList struct {
	IdTodo int
	Title  string
	Tag    string
	Text   string
}

func AllTodo(r *http.Request) []TodoList {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(err)
	}

	token, _ := r.Cookie("token")
	tokenS := strings.Replace(fmt.Sprintf("%s", token), "token=", "", -1)

	result, err := database.Query(fmt.Sprintf("%s'%s';", sqlQueryAllTodo, tokenS))
	if err != nil {
		fmt.Println(err)
	}

	todoListArr := []TodoList{}

	for result.Next() {
		j := TodoList{}
		err := result.Scan(&j.IdTodo, &j.Title, &j.Tag, &j.Text)
		if err != nil {
			fmt.Println(err)
			continue
		}
		todoListArr = append(todoListArr, j)
	}

	return todoListArr
}
