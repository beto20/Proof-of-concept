package com.alberto.poc.kotlin.student.business.impl;

import com.alberto.poc.kotlin.student.business.StudentBusiness;
import com.alberto.poc.kotlin.student.model.Student;
import com.alberto.poc.kotlin.student.repository.StudentRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentBusinessImplJava implements StudentBusiness {

    private final StudentRepository repository;

    public StudentBusinessImplJava(StudentRepository repository) {
        this.repository = repository;
    }

    @NotNull
    @Override
    public List<Student> findAll() {
        return repository.findAll();
    }

    @NotNull
    @Override
    public Student findById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException());
    }

    @NotNull
    @Override
    public Student insert(@NotNull Student student) {
        return repository.save(student);
    }

    @Override
    public Student update(int id, @NotNull Student student) {
        return repository.findById(id)
                .map(sf -> {
                    sf.setId(id);
                    sf.setName(student.getName());
                    sf.setLastname(student.getLastname());
                    sf.setEmail(student.getEmail());
                    sf.setAge(student.getAge());
                    return sf;
                })
                .map(repository::save)
                .orElseThrow(() -> new IllegalArgumentException());
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }
}
