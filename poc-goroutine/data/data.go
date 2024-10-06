package data

import (
	"fmt"
	"sync"
)

type Book struct {
	Id       int
	Title    string
	Finished bool
}

var books = []*Book{
	{1, "test1", false},
	{2, "test2", false},
	{3, "test3", false},
	{4, "test4", false},
	{5, "test5", false},
	{6, "test6", false},
}

func FindBook(id int, m *sync.RWMutex) (int, *Book) {
	index := -1
	var book *Book

	m.RLock()
	for i, b := range books {
		if b.Id == id {
			index = i
			book = b
		}
	}
	m.RUnlock()

	return index, book
}

func FinishBook(id int, m *sync.RWMutex) {
	i, book := FindBook(id, m)
	if i < 0 {
		return
	}

	m.Lock()
	book.Finished = true
	books[i] = book
	m.Unlock()

	fmt.Printf("Finished Book: %s \n", book.Title)
}
