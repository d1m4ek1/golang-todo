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
		fmt.Println(NewError.GiveError(errorUserAutorized, err))
	}

	token, _ := r.Cookie("token")
	tokenS := strings.Replace(fmt.Sprintf("%s", token), "token=", "", -1)

	if token != nil {
		result := database.QueryRow(userAutorizedSelLog, tokenS)

		err = result.Scan(&AutorizedUserInfo.Login)
		if err != nil {
			fmt.Println(NewError.GiveError(errorUserAutorized, err))
		}
	} else {
		AutorizedUserInfo.Login = ""
	}
}

func SignInUser(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorSigninUser, err))
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
		encoder := json.NewEncoder(w)
		err = encoder.Encode(&j)
		if err != nil {
			fmt.Println(NewError.GiveError(errorSigninUser, err))
		}
		return
	}

	if userSignIn.Login == login && userSignIn.Password == password {

		_, err = database.Exec("UPDATE users u SET token=$1 WHERE u.login=$2 AND u.password=$3;", token, login, password)
		if err != nil {
			fmt.Println(NewError.GiveError(errorUserAutorized, err))
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
			fmt.Println(NewError.GiveError(errorSigninUser, err))
		}
	}
}

func SignUpUser(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorSignUpUser, err))
		return
	}

	login := r.URL.Query().Get("login")
	password := r.URL.Query().Get("passConf")

	var lenUsersTG int
	len := database.QueryRow(sqlQueryCountColumn)
	err = len.Scan(&lenUsersTG)
	if err != nil {
		fmt.Println(NewError.GiveError(errorSignUpUser, err))
	}

	_, err = database.Exec("INSERT INTO users (login, password) VALUES ($1, $2)", login, password)
	if err != nil {
		j := ResponseSignIn{
			IdUsers:   0,
			Login:     "",
			Password:  "",
			Completed: false,
			Err:       "Возможно логин указанный выше уже занят, попробуйте еще раз",
		}

		encoder := json.NewEncoder(w)
		err = encoder.Encode(&j)
		if err != nil {
			fmt.Println(NewError.GiveError(errorSigninUser, err))
		}
	} else {

		userSignIn := UserSignIn{}
		result := database.QueryRow("SELECT id, login, password FROM users WHERE login=$1 AND password=$2;", login, password)
		err = result.Scan(&userSignIn.Id, &userSignIn.Login, &userSignIn.Password)

		j := ResponseSignIn{
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

	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorUserSignOut, err))
		return
	}

	token := r.URL.Query().Get("token")

	_, err = database.Exec(userSignOutDelToken, token)
	if err != nil {
		fmt.Println(NewError.GiveError(errorUserSignOut, err))
	}

	AutorizedUserInfo.Login = ""
}

func DevSignIn(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorUserSignOut, err))
		return
	}

	login := r.URL.Query().Get("log")
	password := r.URL.Query().Get("pass")
	token := r.URL.Query().Get("token")

	var urlForwarding string = "/dev_edition_v0_0_12token_17devdvp09high2002"

	data := Forwarding{}
	var resp string

	database.QueryRow("SELECT login FROM developers WHERE login=$1 AND password=$2", login, password).Scan(&resp)

	if resp == "" {

		data = Forwarding{
			Url: "",
			Err: "Wrong login or password",
		}
		encoder := json.NewEncoder(w)
		err = encoder.Encode(&data)
		if err != nil {
			fmt.Println(err)
		}
	} else {

		database.Exec("UPDATE developers SET token=$1 WHERE login=$2 AND password=$3;", token, login, password)

		data = Forwarding{
			Url: urlForwarding,
			Err: "",
		}
		encoder := json.NewEncoder(w)
		err = encoder.Encode(&data)
		if err != nil {
			fmt.Println(err)
		}
	}
}

func DevAutorized(w http.ResponseWriter, r *http.Request) {
	database, err := database.ConnectToDatabase()
	if err != nil {
		fmt.Println(NewError.GiveError(errorUserSignOut, err))
		return
	}

	devToken := r.URL.Query().Get("devToken")

	var urlForwarding string = "/dev_edition_v0_0_12token_17devdvp09high2002"

	data := Forwarding{}
	var resp string

	database.QueryRow("SELECT login FROM developers WHERE token=$1", devToken).Scan(&resp)

	if resp == "" {
		data = Forwarding{
			Url: "",
			Err: "Wrong login or password",
		}
		encoder := json.NewEncoder(w)
		err = encoder.Encode(&data)
		if err != nil {
			fmt.Println(err)
		}
	} else {
		data = Forwarding{
			Url: urlForwarding,
			Err: "",
		}
		encoder := json.NewEncoder(w)
		err = encoder.Encode(&data)
		if err != nil {
			fmt.Println(err)
		}
	}
}
