package com.alberto.pocapirest;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "API REST Doc", version = "1.0", description = "API REST of products and users"))
public class PocApiRestApplication {

    public static void main(String[] args) {
        SpringApplication.run(PocApiRestApplication.class, args);
    }

}
