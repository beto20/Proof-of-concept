package com.alberto.pocapirest.product.service;

//import com.alberto.pocapirest.product.exception.GlobalExceptionHandler;
import com.alberto.pocapirest.product.exception.CustomException;
import com.alberto.pocapirest.product.model.ProductDocument;
import com.alberto.pocapirest.product.model.dto.request.ProductRequestDto;
import com.alberto.pocapirest.product.model.dto.response.MessageResponseDto;
import com.alberto.pocapirest.product.model.dto.response.ProductResponseDto;
import com.alberto.pocapirest.product.model.mapper.ProductMapper;
import com.alberto.pocapirest.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository repository;



    public Flux<ProductResponseDto> findAll() {
        return repository.findAll()
                .flatMap(Flux::just)
                .map(ProductMapper::productDocumentToResponseMap)
                .switchIfEmpty(Mono.error(new CustomException(HttpStatus.NOT_FOUND)));
    }

    public Mono<ProductResponseDto> findById(String productId) {
        return repository.findById(productId)
                .map(ProductMapper::productDocumentToResponseMap)
                .switchIfEmpty(Mono.error(new CustomException(HttpStatus.NOT_FOUND)));

    }

    public Mono<ProductResponseDto> save(ProductRequestDto productRequestDto) {
        ProductDocument productDocument = ProductMapper.productRequestToDocumentMap(productRequestDto);
        return repository.save(productDocument)
                .map(ProductMapper::productDocumentToResponseMap)
                .onErrorMap(e -> new RuntimeException(String.valueOf(HttpStatus.BAD_REQUEST)));

    }

    public Mono<ProductResponseDto> update(ProductRequestDto productRequestDto, String productId) {
        return repository.findById(productId)
                .flatMap(document -> {
                    document.setId(productId);
                    document.setCategory(productRequestDto.getCategory());
                    document.setProductName(productRequestDto.getProductName());
                    document.setDecimal(productRequestDto.getDecimal());
                    document.setStock(productRequestDto.getStock());
                    document.setUpdateAt(LocalDateTime.now().toString());
                    return repository.save(document)
                            .map(ProductMapper::productDocumentToResponseMap);
                })
                .onErrorMap(e -> new RuntimeException(String.valueOf(HttpStatus.BAD_REQUEST)));
    }

    public Mono<MessageResponseDto> delete(String productId) {
        return repository.deleteById(productId)
                .flatMap(unused -> {
                    MessageResponseDto message = MessageResponseDto.builder()
                            .message("Delete completed")
                            .description("Product has been deleted")
                            .build();
                    return Mono.just(message);
                });


    }


}
