package interfacesegregation


import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

// Interface segregation
// Clients should not be forced to depend upon interfaces that ther do not use
type report struct{}
type reportSchema struct{}

type exportProviderCloud interface {
	export()
	exportToCloud()
}

type exportProviderOffline interface {
	export()
}

type exportCMD struct {
	by []byte
}
type exportTXT struct {
	by []byte
}
type exportCSV struct {
	by io.Reader
}

func (e * exportCMD) export() {
	fmt.Println("Generating report")
}
func (e * exportCMD) exportToCloud() {
	fmt.Println("Generating report")
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
