package dependencyinversion

import (
	"fmt"
)

// Dependency inversion
// High level modules should not depend on low level modules, both should depend on abstaction

type notificationService interface {
	send()
}

type emailNotification struct{}
type smsNotification struct{}

func (e *emailNotification) send() {
	fmt.Println("Sending email")
}
func (s *smsNotification) send() {
	fmt.Println("Sending sms")
}

type report struct {
	ns notificationService
}

func main() {
	sns := smsNotification{}
	r := report{
		ns: &sns,
	}
	r.ns.send()
}
