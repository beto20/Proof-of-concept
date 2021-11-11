package com.alberto.poc.kotlin.student.web

import com.alberto.poc.kotlin.student.business.impl.StudentBusinessImplKotlin
import com.alberto.poc.kotlin.student.model.Student
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("students")
class StudentControllerKotlinV2(private val business: StudentBusinessImplKotlin) {

    @GetMapping
    fun getAll() : List<Student> {
        return business.findAll()
    }
    @GetMapping("/{id}")
    fun getById(@PathVariable("id") id: Int) : Student {
        return business.findById(id)
    }
    @PostMapping
    fun insert(@RequestBody student: Student) : Student {
        return business.insert(student)
    }
    @PutMapping("/{id}")
    fun update(@PathVariable("id") id: Int, @RequestBody student: Student) : Student {
        return business.update(id, student)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") id: Int) {
        business.delete(id)
    }
}