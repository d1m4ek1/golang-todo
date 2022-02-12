package autorizations

import (
	"encoding/json"
	"fmt"
	NewError "golang-todo/www/pkg/NewError"
	"golang-todo/www/pkg/database"
	"net/http"
	"strings"
)

type UserSignIn struct {
	Id       int
	Login    string
	Password string
}

type ResponseSignIn struct {
	IdUsers   int    `json:"idUser"`
	Login     string `json:"login"`
	Password  string `json:"pass"`
	Completed bool   `json:"completed"`
	Err       string `json:"err"`
}

type autorizedUser struct {
	Login string
}

type Forwarding struct {
	Url string `json:"url"`
	Err string `json:"err"`
}

const (
	pathToError string = "pkg/autorizations -> Function "
)

var AutorizedUserInfo autorizedUser

// ERRORS
var (
	errorSigninUser    string = pathToError + "signinUser"
	errorUserAutorized string = pathToError + "UserAutorized"
	errorSignUpUser    string = pathToError + "SignUpUser"
	errorUserSignOut   string = pathToError + "UserSignOut"
)

// SQL QUERYS
var (
	sqlQuerySigninInUser string = "SELECT id, login, password FROM users WHERE login=$1 AND password=$2"
	sqlQueryCountColumn  string = "SELECT COUNT(*) FROM users"
	// SELECT LOGIN
	userAutorizedSelLog string = "SELECT login FROM users s WHERE s.token=$1"
	// DELETE TOKEN
	userSignOutDelToken string = "UPDATE users s SET token=NULL WHERE s.token=$1"
)

func UserAutorized(w http.ResponseWriter, r *http.Request) {

	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorUserAutorized, "Connect to db", err))
	}

	token, _ := r.Cookie("token")
	tokenS := strings.Replace(fmt.Sprintf("%s", token), "token=", "", -1)

	if token != nil {
		result := database.QueryRow(userAutorizedSelLog, tokenS)

		err = result.Scan(&AutorizedUserInfo.Login)
		if err != nil {
			fmt.Println(NewError.Wrap(errorUserAutorized, "Condition for token", err))
		}
	} else {
		AutorizedUserInfo.Login = ""
	}
}

func SignInUser(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorSigninUser, "Connect to db", err))
		return
	}

	login := r.URL.Query().Get("log")
	password := r.URL.Query().Get("pass")
	token := r.URL.Query().Get("token")

	userSignIn := UserSignIn{}
	result := database.QueryRow(sqlQuerySigninInUser, login, password)

	j := ResponseSignIn{}

	err = result.Scan(&userSignIn.Id, &userSignIn.Login, &userSignIn.Password)
	if err != nil {

		j = ResponseSignIn{
			IdUsers:   0,
			Login:     "",
			Password:  "",
			Completed: false,
			Err:       "Wrong login or password",
		}
		if err := json.NewEncoder(w).Encode(&j); err != nil {
			fmt.Println(NewError.Wrap(errorSigninUser, "json encoder -> 'IN ERROR'", err))
		}
		return
	}

	if userSignIn.Login == login && userSignIn.Password == password {

		_, err = database.Exec("UPDATE users u SET token=$1 WHERE u.login=$2 AND u.password=$3;", token, login, password)
		if err != nil {
			fmt.Println(NewError.Wrap(errorSigninUser, "Query to db", err))
		}

		UserAutorized(w, r)

		AutorizedUserInfo.Login = login

		j = ResponseSignIn{
			IdUsers:   userSignIn.Id,
			Login:     userSignIn.Login,
			Password:  userSignIn.Password,
			Completed: true,
			Err:       "",
		}

		encoder := json.NewEncoder(w)
		err = encoder.Encode(&j)
		if err != nil {
			fmt.Println(NewError.Wrap(errorSigninUser, "json encoder", err))
		}
	}
}

func SignUpUser(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorSignUpUser, "Connect to db", err))
		return
	}

	login := r.URL.Query().Get("login")
	password := r.URL.Query().Get("passConf")
	token := r.URL.Query().Get("token")

	var lenUsersTG int
	len := database.QueryRow(sqlQueryCountColumn)

	if err = len.Scan(&lenUsersTG); err != nil {
		fmt.Println(NewError.Wrap(errorSignUpUser, "Scan &lenUsersTG", err))
	}

	_, err = database.Exec("INSERT INTO users (login, password, token) VALUES ($1, $2, $3)", login, password, token)
	if err != nil {
		j := ResponseSignIn{
			IdUsers:   0,
			Login:     "",
			Password:  "",
			Completed: false,
			Err:       "Возможно логин указанный выше уже занят, попробуйте еще раз",
		}

		if err = json.NewEncoder(w).Encode(&j); err != nil {
			fmt.Println(NewError.Wrap(errorSignUpUser, "json encoder -> 'IN ERROR'", err))
		}
	} else {

		userSignIn := UserSignIn{}
		result := database.QueryRow("SELECT id, login, password FROM users WHERE login=$1 AND password=$2;", login, password)

		if err = result.Scan(&userSignIn.Id, &userSignIn.Login, &userSignIn.Password); err != nil {
			fmt.Println(NewError.Wrap(errorSignUpUser, "result.Scan()", err))
		}

		if _, err = database.Exec(`INSERT INTO users_tasks (users_todo_id) VALUES ($1)`, userSignIn.Id); err != nil {
			fmt.Println(NewError.Wrap(errorSignUpUser, "Query to db", err))
		}

		j := ResponseSignIn{
			IdUsers:   userSignIn.Id,
			Login:     userSignIn.Login,
			Password:  userSignIn.Password,
			Completed: true,
			Err:       "",
		}

		if err = json.NewEncoder(w).Encode(&j); err != nil {
			fmt.Println(NewError.Wrap(errorSignUpUser, "json encode", err))
		}
	}
}

func UserSignOut(w http.ResponseWriter, r *http.Request) {

	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.Wrap(errorUserSignOut, "Connect to db", err))
		return
	}

	token := r.URL.Query().Get("token")

	if _, err = database.Exec(userSignOutDelToken, token); err != nil {
		fmt.Println(NewError.Wrap(errorUserSignOut, "Query to db", err))
	}

	AutorizedUserInfo.Login = ""
}
