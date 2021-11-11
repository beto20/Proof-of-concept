package com.alberto.poc.kotlin.student.repository

import com.alberto.poc.kotlin.student.model.Student
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface StudentRepository : JpaRepository<Student, Int> {
}