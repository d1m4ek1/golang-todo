package error

import "fmt"

type NewError struct {
	String   string
	ErrorStr error
}

func GiveError(str string, err error) error {
	setError := NewError{
		String:   str,
		ErrorStr: err,
	}
	return fmt.Errorf("%s\n%s", setError.String, setError.ErrorStr)
}
