package com.alberto.poc.ms.user.service;

import com.alberto.poc.ms.user.entity.User;
import com.alberto.poc.ms.user.repository.UserRepository;
import com.alberto.poc.ms.user.valueObject.Department;
import com.alberto.poc.ms.user.valueObject.ResponseTemplateVO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final RestTemplate restTemplate;

    public User insert(User user) {
        return repository.save(user);
    }

    public Optional<User> getById(Long id) {
        return repository.findById(id);
    }

    public List<User> getAll() {
        return repository.findAll();
    }

    public ResponseTemplateVO getUserWithDepartment(Long userId) {
        ResponseTemplateVO vo = new ResponseTemplateVO();
        User user = repository.findByUserId(userId);

        Department department = restTemplate.getForObject("http://DEPARTMENT-SERVICE/departments/" + user.getDepartmentId(),Department.class);
        vo.setUser(user);
        vo.setDepartment(department);
        return vo;
    }
}
