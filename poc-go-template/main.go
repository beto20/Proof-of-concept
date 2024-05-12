package main

import (
	"bufio"
	"embed"
	_ "embed"
	"fmt"
	// "io/fs"
	"os"
	"text/template"
)

type Pet struct {
	Name   string
	Sex    string
	Intact bool
	Age    string
	Breed  string
}

// //go:embed files/*
// var tmplFile embed.FS

//go:embed hello.txt
var content embed.FS

//go:embed pets.tmpl
var petTmpl embed.FS

func main() {

  embedExample()

}

func readFileEmbed() {
	data, err := petTmpl.ReadFile("pets.tmpl")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println("Embedded File Content:")
	fmt.Println(string(data))

}

func embedExample() {
	dogs := []Pet{
		{
			Name:   "Jujube",
			Sex:    "Female",
			Intact: false,
			Age:    "10 months",
			Breed:  "German Shepherd/Pitbull",
		},
		{
			Name:   "Zephyr",
			Sex:    "Male",
			Intact: true,
			Age:    "13 years, 3 months",
			Breed:  "German Shepherd/Border Collie",
		},
	}


 	// var tmplFile = "pets.tmpl"

    // files, err := fs.ReadDir(tmplFile, "files")
    // if err != nil {
    //     fmt.Println("Error:", err)
    //     return
    // }

    // Iterate over the files and print their names
    // for _, file := range files {
        // fmt.Println("File Name:", file.Name())
    // }

  // fmt.Println("File Name:", files[0].Name())

  // tmpl, err := template.New("pets.tmpl").ParseFiles("pets.tmpl")

  tmpl, err := template.ParseFS(petTmpl, "pets.tmpl")
	if err != nil {
		fmt.Println("Error parsing templates:", err)
		return
	}

	// Execute the template with the data
	err = tmpl.ExecuteTemplate(os.Stdout, "pets.tmpl", dogs)
	if err != nil {
		fmt.Println("Error executing template:", err)
		return
	}

  // if err != nil {
		// panic(err)
	// }

  f, err := os.Create("example3.txt")
 
  // err = tmpl.Execute(os.Stdout, dogs)
	err = tmpl.Execute(f, dogs)
	if err != nil {
		panic(err)
	}

}

func printTxt() {
    // Open a file for writing. If the file doesn't exist, create it.
    file, err := os.Create("output.txt")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer file.Close()

    // Create a bufio.Writer to write efficiently to the file
    writer := bufio.NewWriter(file)

    // Write text to the file
    text := "Hello, World!\nThis is a sample text written to a file."
    _, err = writer.WriteString(text)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    // Flush the bufio.Writer to ensure all buffered data is written to the file
    err = writer.Flush()
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Text written to output.txt successfully.")
}
