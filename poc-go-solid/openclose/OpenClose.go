package openclose

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

// Open Closed
// Software entities should be open for extension, but closed for modification
type report struct{}
type reportSchema struct{}

type exportProvider interface {
	export()
}

type exportTXT struct {
	by []byte
}

type exportCSV struct {
	by io.Reader
}

func (e *exportTXT) exportTXT() {
	os.WriteFile("output.txt", e.by, 0644)
}

func (e *exportCSV) exportCSV() {
	e.by.Read([]byte{})
}

func (r *report) generate() reportSchema {
	rs := reportSchema{}

	fmt.Println("Generating report")

	// by, _ := json.Marshal(rs)
	// e := export{}
	// e.exportTXT(by)
	return rs
}

func main() {
	r := report{}
	rs := r.generate()
	by, _ := json.Marshal(rs)
	e := exportTXT{
		by: by,
	}
	e.exportTXT()
}
