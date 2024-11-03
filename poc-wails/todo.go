package main

import (
	"fmt"
)

// App struct
type Todo struct {
	Id   int64
	Name string
}

// NewApp creates a new App application struct
func NewTodo() *Todo {
	return &Todo{}
}

var data = make(map[int64]string)
var index int64 = 0

func (a *Todo) Add(activity string) bool {
	fmt.Println("ACTI:", activity)
	data[index] = activity
	fmt.Println("map: ", data)
	index++
	return true
}

func (a *Todo) GetOne(id int64) string {
	fmt.Println("id: ", id)
	return data[id]
}

func (a *Todo) GetData() []Todo {
	var todos []Todo

	for key, value := range data {
		fmt.Printf("key: %d, value: %s \n", key, value)
		t := Todo{
			Id:   key,
			Name: value,
		}
		todos = append(todos, t)
	}

	return todos
}

func (a *Todo) Update(id int64, newValue string) bool {
	if data[id] != "" {
		data[id] = newValue
		return true
	}
	return false
}
