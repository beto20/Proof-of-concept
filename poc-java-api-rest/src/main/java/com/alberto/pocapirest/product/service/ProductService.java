package com.alberto.pocapirest.product.service;

import com.alberto.pocapirest.product.model.dto.request.ProductRequestDto;
import com.alberto.pocapirest.product.model.dto.response.MessageResponseDto;
import com.alberto.pocapirest.product.model.dto.response.ProductResponseDto;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductService {

    Flux<ProductResponseDto> findAll();
    Mono<ProductResponseDto> findById(String productId);
    Mono<ProductResponseDto> save(ProductRequestDto productRequestDto);
    Mono<ProductResponseDto> update(ProductRequestDto productRequestDto, String productId);
    Mono<MessageResponseDto> delete(String productId);
}
