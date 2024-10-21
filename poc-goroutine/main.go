package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"

	"github.com/beto20/goroutine/data"
)

func main() {
	// goroutineExample()
	// example3()
	// example2()
	example()
}

func goroutineExample() {
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

// channels for communication a return value, also can use for synchronization
// waitgruops is a better option for synchronization if the functions/methods doesnt return a value

// example using waitgruops
func dowork(d time.Duration, wg *sync.WaitGroup) {
	fmt.Println("execute...")
	time.Sleep(d)
	fmt.Println("work done")
	wg.Done()
}

func example() {
	start := time.Now()
	wg := sync.WaitGroup{}
	wg.Add(3)
	go dowork(time.Second*2, &wg)
	go dowork(time.Second*4, &wg)
	go dowork(time.Second*6, &wg)
	wg.Wait()

	fmt.Printf("work took %v seconds \n", time.Since(start))
}

// example2 using channels
func dowork2(d time.Duration, resch chan string) {
	fmt.Println("execute...")
	time.Sleep(d)
	fmt.Println("work done")
	resch <- fmt.Sprintf("result of the work -> %d", rand.Intn(100))
}

func example2() {
	start := time.Now()
	resultch := make(chan string)
	go dowork2(time.Second*2, resultch)
	go dowork2(time.Second*4, resultch)
	go dowork2(time.Second*6, resultch)

	res1 := <-resultch
	fmt.Println(res1)
	res2 := <-resultch
	fmt.Println(res2)
	res3 := <-resultch
	fmt.Println(res3)

	fmt.Printf("work took %v seconds \n", time.Since(start))
}

// example3 using channels and wg
func dowork3(d time.Duration, resch chan string) {
	fmt.Println("execute...")
	time.Sleep(d)
	fmt.Println("work done")
	resch <- fmt.Sprintf("result of the work -> %d", rand.Intn(100))
	wg.Done()
}

var wg *sync.WaitGroup

func example3() {
	start := time.Now()
	resultch := make(chan string)
	wg = &sync.WaitGroup{}
	wg.Add(3)
	go dowork3(time.Second*2, resultch)
	go dowork3(time.Second*4, resultch)
	go dowork3(time.Second*6, resultch)

	go func() {
		for res := range resultch {
			fmt.Println(res)
		}
		fmt.Printf("work took %v seconds \n", time.Since(start))

	}()

	wg.Wait()
	close(resultch)
	time.Sleep(time.Second)
}
