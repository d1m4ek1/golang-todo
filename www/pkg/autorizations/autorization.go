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

const (
	pathToError string = "pkg/autorizations -> Function "
)

var AutorizedUserInfo autorizedUser

// ERRORS
var (
	errorSigninUser    string = pathToError + "signinUser"
	errorUserAutorized string = pathToError + "UserAutorized"
)

// SQL QUERYS
var (
	sqlQuerySigninInUser  string = "SELECT id, login, password FROM users WHERE login=$1 AND password=$2"
	sqlQueryUserAutorized string = "SELECT login FROM users u WHERE u.login=$1 AND u.password=$2"
)

func UserAutorized(token, log, pass string) {

	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorUserAutorized, err))
	}

	_, err = database.Exec("UPDATE users u SET token=$1 WHERE u.login=$2 AND u.password=$3;", token, log, pass)
	if err != nil {
		fmt.Println(NewError.GiveError(errorUserAutorized, err))
	}

	result := database.QueryRow(sqlQueryUserAutorized, log, pass)

	err = result.Scan(&AutorizedUserInfo.Login)
	if err != nil {
		fmt.Println(NewError.GiveError(errorUserAutorized, err))
	}
}

func SigninInUser(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorSigninUser, err))
		return
	}

	login := r.URL.Query().Get("log")
	password := r.URL.Query().Get("pass")

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
		encoder := json.NewEncoder(w)
		err = encoder.Encode(&j)
		if err != nil {
			fmt.Println(NewError.GiveError(errorSigninUser, err))
		}
		return
	}

	if userSignIn.Login == login && userSignIn.Password == password {

		token, _ := r.Cookie("token")
		tokenS := strings.Replace(fmt.Sprintf("%s", token), "token=", "", -1)

		UserAutorized(tokenS, login, password)

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
			fmt.Println(NewError.GiveError(errorSigninUser, err))
		}
	}
}

func UserSignOut(w http.ResponseWriter, r *http.Request) {
	AutorizedUserInfo.Login = ""
}
