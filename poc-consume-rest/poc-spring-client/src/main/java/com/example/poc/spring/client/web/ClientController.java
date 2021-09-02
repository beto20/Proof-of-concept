package com.example.poc.spring.client.web;

import com.example.poc.spring.client.model.Employee;
import com.example.poc.spring.client.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("client/employees")
public class ClientController {

    EmployeeService service;

    public ClientController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<String> getAll() {
        return service.getEmployee();
    }
    @GetMapping("/{id}")
    public String getById(@PathVariable("id") Integer id) {
        return service.getEmployeeById(id);
    }

    @PostMapping
    public Employee insert(@RequestBody Employee employee) {
        return service.insertEmployee(employee);
    }
    @PutMapping("/{id}")
    public void update(@RequestBody Employee employee, @PathVariable("id") Integer id) {
        service.updateEmployee(employee, id);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        service.deleteEmployee(id);
    }
}
