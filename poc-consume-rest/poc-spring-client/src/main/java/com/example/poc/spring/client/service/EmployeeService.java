package com.example.poc.spring.client.service;

import com.example.poc.spring.client.model.Employee;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class EmployeeService {

    RestTemplate restTemplate;
    public EmployeeService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    private static final String GET_ALL = "http://localhost:3300/employees";
    private static final String GET_BY_ID = "http://localhost:3300/employee/{id}";
    private static final String INSERT_EMPLOYEE = "http://localhost:3300/employee";
    private static final String UPDATE_EMPLOYEE = "http://localhost:3300/employee/{id}";
    private static final String DELETE_EMPLOYEE = "http://localhost:3300/employee/{id}";

    public ResponseEntity<String> getEmployee() {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<String> result = restTemplate.exchange(GET_ALL, HttpMethod.GET, entity, String.class);
        return result;
    }

    public String getEmployeeById(Integer id) {
        //This method return a String, because the api rest doesnt specified a json-string return, so
        //from the back just return plain text
        Map<String, Integer> param = new HashMap<>();
        param.put("id", id);
        return restTemplate.getForObject(GET_BY_ID, String.class, param);
    }

    public Employee insertEmployee(Employee employee) {
        //Added try-catch just to solved an error in the service, NOT in client
        try {
            return restTemplate.postForObject(INSERT_EMPLOYEE, employee, Employee.class);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void updateEmployee(Employee employee, Integer id) {
        //Added try-catch just to solved an error in the service, NOT in client
        try {
            Map<String, Integer> param = new HashMap<>();
            param.put("id", id);
            restTemplate.put(UPDATE_EMPLOYEE,employee,param);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deleteEmployee(Integer id) {
        Map<String, Integer> param = new HashMap<>();
        param.put("id", id);
        restTemplate.delete(DELETE_EMPLOYEE, param);
    }
}
