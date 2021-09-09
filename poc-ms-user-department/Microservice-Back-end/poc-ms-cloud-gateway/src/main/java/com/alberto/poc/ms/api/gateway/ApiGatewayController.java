package com.alberto.poc.ms.api.gateway;

import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiGatewayController {

    //@Retry(name = "departmentService", fallbackMethod = "fallback_retry")
    public ResponseEntity<String> fallback_retry(Exception e){
        //attempts=1;
        return new ResponseEntity<String>("Item service is down", HttpStatus.INTERNAL_SERVER_ERROR);
    }




}
