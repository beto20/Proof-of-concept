package com.alberto.poc.ms.service.registry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class PocMsServiceRegistryApplication {

    public static void main(String[] args) {
        SpringApplication.run(PocMsServiceRegistryApplication.class, args);
    }

}
