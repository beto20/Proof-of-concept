package com.alberto.poc.ms.department.controller;

import com.alberto.poc.ms.department.entity.Department;
import com.alberto.poc.ms.department.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/departments")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:4200")
public class DepartmentController {

    private final DepartmentService service;

    @GetMapping("/")
    public List<Department> getAllDepartment() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Department> getDepartmentById(@PathVariable("id") Long id) {
        return service.getById(id);
    }

    @PostMapping("/")
    public Department insertDepartment(@RequestBody Department department) {
        return service.insert(department);
    }



}
