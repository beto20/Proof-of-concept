package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"

	"github.com/beto20/goroutine/data"
)

func main() {
	start := time.Now()
	wg := &sync.WaitGroup{}
	m := &sync.RWMutex{}

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go readBook(i, wg, m)
	}

	// time.Sleep(time.Minute)
	wg.Wait()
	duration := time.Since(start).Milliseconds()

	fmt.Printf("%dms \n", duration)
}

func showGoroutine(id int, wg *sync.WaitGroup) {
	delay := rand.Intn(500)
	fmt.Printf("Goroutine #%d with #%d \n", id, delay)

	time.Sleep(time.Millisecond * time.Duration(delay))

	wg.Done()
}

func readBook(id int, wg *sync.WaitGroup, m *sync.RWMutex) {
	data.FinishBook(id, m)
	delay := rand.Intn(800)
	time.Sleep(time.Millisecond * time.Duration(delay))

	wg.Done()
}
