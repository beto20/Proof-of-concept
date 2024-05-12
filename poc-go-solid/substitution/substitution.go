package substitution

import "fmt"

// Liskov Substitution
// Objects of a superclass shall be replaceable with objects of its subsclasses without breaking the application

type flyingbird interface {
	fly()
}

type nonflyingbird interface {
	nonfly()
}

type eagle struct{}

type pinguin struct{}

func (e *eagle) fly() {
	fmt.Println("I am flying")
}

func (p *pinguin) nonfly() {
	fmt.Println("I am not flying")
}

func sendLetter(b flyingbird) {
	b.fly()
}

func main() {
	e := eagle{}
    p := pinguin{}

	birds := []flyingbird{&e}

	for _, b := range birds {
        sendLetter(b)
    }
}
