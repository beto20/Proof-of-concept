package com.alberto.poc.kotlin.student.business

import com.alberto.poc.kotlin.student.model.Student

interface StudentBusiness {
    fun findAll() : List<Student>
    fun findById(id: Int) : Student
    fun insert(student: Student) : Student
    fun update(id: Int, student: Student) : Student
    fun delete(id: Int)
}