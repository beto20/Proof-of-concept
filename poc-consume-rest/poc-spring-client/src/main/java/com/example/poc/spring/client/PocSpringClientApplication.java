package com.example.poc.spring.client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class PocSpringClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(PocSpringClientApplication.class, args);
    }

    @Bean
    public RestTemplate registerRestTemplate() {
        return new RestTemplate();
    }
}
