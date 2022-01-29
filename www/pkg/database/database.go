package database

import (
	"database/sql"
	"fmt"
)

const (
	user    string = "postgres"
	pass    string = "537537"
	dbname  string = "my_tasks"
	sslmode string = "disable"
)

func ConnectToDatabase() (*sql.DB, error) {
	var connectString string = fmt.Sprintf("user=%s password=%s dbname=%s sslmode=%s", user, pass, dbname, sslmode)
	db, err := sql.Open("postgres", connectString)
	if err != nil {
		return nil, err
	}

	return db, nil
}
