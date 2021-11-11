package com.alberto.poc.kotlin.student.web

import com.alberto.poc.kotlin.student.model.Student
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("kotlinWhitJava/students")
class StudentControllerKotlin(private val java: StudentControllerJava) {

    @GetMapping
    fun getAll() : List<Student> {
        return java.getAll()
    }
    @GetMapping("/{id}")
    fun getById(@PathVariable("id") id: Int) : Student {
        return java.getById(id)
    }
    @PostMapping
    fun insert(@RequestBody student: Student) : Student {
        return java.insert(student)
    }
    @PutMapping("/{id}")
    fun update(@PathVariable("id") id: Int, @RequestBody student: Student) : Student {
        return java.update(id, student)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") id: Int) {
        java.delete(id)
    }
}