package newerror

import "fmt"

// Struct for structuring an error
type Error struct {
	StringFunction string
	WhereError     string
	ErrorStr       error
}

// Function that returns an error string
func (ne *Error) Error() string {
	return fmt.Sprintf("%s;\nWhere error: %s;\n%s", ne.StringFunction, ne.WhereError, ne.ErrorStr)
}

func Wrap(stringFunction, whereError string, errorStr error) *Error {
	return &Error{
		StringFunction: stringFunction,
		WhereError:     whereError,
		ErrorStr:       errorStr,
	}
}
