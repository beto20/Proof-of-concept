package com.alberto.pocapirest.product.model.dto.response;

import lombok.Builder;

import java.io.Serializable;

@Builder
public class MessageResponseDto implements Serializable {
    
    private String message;
    private String description;
}
