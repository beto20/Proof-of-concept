package main

import (
	"database/sql"
	"fmt"
	"log"
	_ "modernc.org/sqlite"
)

// DB is a global variable for the SQLite database connection
//var db *sql.DB

func main() {
	//CreateDatabase()
	//InsertUser("PRUEBA")
	//QueryUsers()
	//DeleteUser(1)
	//UpdateUser(2, "NUEVO ROW")
}

func CreateDatabase() {
	db, err := sql.Open("sqlite", "./test.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	sqlStmt := `
    CREATE TABLE IF NOT EXISTS Users (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name TEXT
    );
    `
	_, err = db.Exec(sqlStmt)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Database created")
}

func InsertUser(username string) {
	db, err := sql.Open("sqlite", "./test.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	sqlStmt := `INSERT INTO USERS(name) VALUES (?);`
	_, err = db.Exec(sqlStmt, username)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Database inserted")
}

func QueryUsers() {
	db, err := sql.Open("sqlite", "./test.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	sqlStmt := `SELECT * FROM USERS`
	rows, err := db.Query(sqlStmt)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		err = rows.Scan(&id, &name)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("User ID: %d, Name: %s\n", id, name)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

}

func DeleteUser(id int) {
	db, err := sql.Open("sqlite", "./test.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	sqlStmt := `DELETE FROM USERS WHERE id=?`

	result, err := db.Exec(sqlStmt, id)
	if err != nil {
		log.Fatal(err)
	}

	affectedRows, err := result.RowsAffected()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Deleted %d rows", affectedRows)
}

func UpdateUser(id int, name string) {
	db, err := sql.Open("sqlite", "./test.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	sqlStmt := `UPDATE USERS SET name=? WHERE id=?`

	result, err := db.Exec(sqlStmt, name, id)
	if err != nil {
		log.Fatal(err)
	}

	affectedRows, err := result.RowsAffected()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Updated %d rows", affectedRows)
}
