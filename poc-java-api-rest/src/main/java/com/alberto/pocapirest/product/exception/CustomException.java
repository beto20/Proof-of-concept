package com.alberto.pocapirest.product.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class CustomException extends ResponseStatusException {

    public CustomException(HttpStatus status) {
        super(status, "reason");
    }
}
