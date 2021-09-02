//Firma /  imports
const client = require('./connection.js')
const express = require('express')
const app = express()

app.listen(3300, () => {
    console.log("Server is now listening")
})


client.connect()

//GET ALL
app.get('/employees', (req, res) => {
    client.query(`select * from employee`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }else{
            console.log(err.stack)
        }
    });
    client.end;
})

//GET BY ID
app.get('/employee/:id', (req, res) => {
    client.query(`select * from employee where employee_id = ${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }else{
            console.log(err.stack)
        }
    });
    client.end;
})


//ADD EMPLOYEE
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/employee', (req, res) => {
    const employee = req.body;
    let insertEmployee = `insert into employee(employee_id, address, department, name, phone)
                            values(${employee.employee_id}, '${employee.address}', '${employee.department}', '${employee.name}', '${employee.phone}')`
    client.query(insertEmployee, (err, result) => {
        if (!err) {
            res.send('Employee added')
        }else{
            console.log(err.message)
        }
    })
    client.end;
})

//UPDATE EMPLOYEE

app.put('/employee/:id', (req, res) => {
    let employee = req.body
    let updateEmployee = `update employee
                            set address = '${employee.address}',
                            department = '${employee.department}',
                            name = '${employee.name}',
                            phone = '${employee.phone}'
                            where employee_id = ${req.params.id}`
    client.query(updateEmployee, (err, result) => {
        if (!err) {
            res.status(200).send("Employee updated")
        }else{
            console.log(err.message)
        }
    })
    client.end;
})

//DELETE EMPLOYEE

app.delete('/employee/:id', (req, res) => {
    let deleteEmployee = `delete from employee where employee_id = ${req.params.id}`
    client.query(deleteEmployee, (err, result) => {
        if (!err) {
            res.status(200).send("Employee deleted")
        }else{
            console.log(err.message)
        }
    })
    client.end;
})

