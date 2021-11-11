package com.alberto.poc.kotlin.student.web;

import com.alberto.poc.kotlin.student.business.impl.StudentBusinessImplKotlin;
import com.alberto.poc.kotlin.student.model.Student;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("javaWithKotlin/students")
public class StudentControllerJava {

    private final StudentBusinessImplKotlin kotlin;

    public StudentControllerJava(StudentBusinessImplKotlin kotlin) {
        this.kotlin = kotlin;
    }

    @GetMapping
    public List<Student> getAll() {
        return kotlin.findAll();
    }

    @GetMapping("/{id}")
    public Student getById(@PathVariable("id") Integer id) {
        return kotlin.findById(id);
    }

    @PostMapping
    public Student insert(@RequestBody Student student) {
        return kotlin.insert(student);
    }

    @PutMapping("/{id}")
    public Student update(@PathVariable("id") Integer id, @RequestBody Student student) {
        return kotlin.update(id, student);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        kotlin.delete(id);
    }
}
