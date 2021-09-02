package com.example.poc.spring.client.model;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Employee {

    private Integer employee_id;
    private String address;
    private String department;
    private String name;
    private String phone;

}
