package com.alberto.poc.ms.api.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PocMsApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(PocMsApiGatewayApplication.class, args);
    }

}
