package com.alberto.poc.kotlin.student.business.impl

import com.alberto.poc.kotlin.student.business.StudentBusiness
import com.alberto.poc.kotlin.student.model.Student
import com.alberto.poc.kotlin.student.repository.StudentRepository
import org.springframework.stereotype.Service

@Service
class StudentBusinessImplKotlin(private val repository: StudentRepository) : StudentBusiness{

    override fun findAll(): List<Student> {
        return repository.findAll()
    }

    override fun findById(id: Int): Student {
        return repository.findById(id)
                .orElseThrow { IllegalArgumentException() }
    }

    override fun insert(student: Student): Student {
        return repository.save(student)
    }

    override fun update(id: Int, student: Student): Student {
        return repository.findById(id)
                .map {
                    it.id = id
                    it.name = student.name
                    it.lastname = student.lastname
                    it.email = student.email
                    it.age = student.age
                    it
                } .map { repository.save(it) }
                .orElseThrow { IllegalArgumentException() }
    }

    override fun delete(id: Int) {
        repository.deleteById(id)
    }
}