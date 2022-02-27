package com.alberto.pocapirest.product.web;

import com.alberto.pocapirest.product.model.dto.request.ProductRequestDto;
import com.alberto.pocapirest.product.model.dto.response.MessageResponseDto;
import com.alberto.pocapirest.product.model.dto.response.ProductResponseDto;
import com.alberto.pocapirest.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
@RequestMapping("api-rest/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    Flux<ProductResponseDto> findAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/{productId}")
    Mono<ProductResponseDto> findByProductId(@PathVariable String productId) {
        return productService.findById(productId);
    }

    @PostMapping
    Mono<ProductResponseDto> saveOneProduct(@Valid @RequestBody ProductRequestDto productRequestDto) {
        return productService.save(productRequestDto);
    }

    @PutMapping("/{productId}")
    Mono<ProductResponseDto> updateOneProduct(@Valid @RequestBody ProductRequestDto productRequestDto, @PathVariable String productId) {
        return productService.update(productRequestDto, productId);
    }

    @DeleteMapping("/{productId}")
    Mono<MessageResponseDto> deleteOneProduct(@PathVariable String productId) {
       return productService.delete(productId);
    }
}
