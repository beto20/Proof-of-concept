package com.alberto.poc.ms.user.controller;

import com.alberto.poc.ms.user.entity.User;
import com.alberto.poc.ms.user.service.UserService;
import com.alberto.poc.ms.user.valueObject.ResponseTemplateVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/")
    public List<User> getAllUser() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable("id") Long id) {
        return service.getById(id);
    }

    @PostMapping("/")
    public User insertUser(@RequestBody User user) {
        return service.insert(user);
    }

    @GetMapping("/department/{id}")
    public ResponseTemplateVO getUserWithDepartment(@PathVariable("id") Long userId) {
        return service.getUserWithDepartment(userId);
    }
}
