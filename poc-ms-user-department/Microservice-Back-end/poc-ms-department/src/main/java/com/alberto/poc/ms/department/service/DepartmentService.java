package com.alberto.poc.ms.department.service;

import com.alberto.poc.ms.department.entity.Department;
import com.alberto.poc.ms.department.repository.DepartmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service @AllArgsConstructor
public class DepartmentService {

    private final DepartmentRepository repository;

    public Department insert(Department department) {
        return repository.save(department);
    }

    public List<Department> getAll() {
        return repository.findAll();
    }

    public Optional<Department> getById(Long id) {
        return repository.findById(id);
    }


}
