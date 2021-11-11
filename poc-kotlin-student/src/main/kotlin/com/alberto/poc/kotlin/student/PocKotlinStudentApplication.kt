package com.alberto.poc.kotlin.student

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class PocKotlinStudentApplication

fun main(args: Array<String>) {
	runApplication<PocKotlinStudentApplication>(*args)
}
