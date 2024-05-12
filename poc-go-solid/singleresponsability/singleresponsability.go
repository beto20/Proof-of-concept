package singleresponsability

import (
	"encoding/json"
	"fmt"
	"os"
)

// Single responsability
// There should never be more than oene reason for a class to change. In other words, every class should have only one responsability
type report struct{}
type reportSchema struct{}
type export struct{}

func (e *export) exportTXT(by []byte) {
	os.WriteFile("output.txt", by, 0644)
}

func (r *report) generate() reportSchema{
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
	e := export{}
	e.exportTXT(by)
}

// Open Closed
// Software entities should be open for extension, but closed for modification
