package com.alberto.pocapirest.product.model.mapper;

import com.alberto.pocapirest.product.model.ProductDocument;
import com.alberto.pocapirest.product.model.dto.request.ProductRequestDto;
import com.alberto.pocapirest.product.model.dto.response.ProductResponseDto;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {

    public static ProductDocument productRequestToDocumentMap(ProductRequestDto requestDto) {
        return ProductDocument.builder()
                .category(requestDto.getCategory())
                .productName(requestDto.getProductName())
                .decimal(requestDto.getDecimal())
                .stock(requestDto.getStock())
                .updateAt(requestDto.getUpdateAt())
                .createdAt(requestDto.getCreatedAt())
                .build();
    }

    public static ProductResponseDto productDocumentToResponseMap(ProductDocument document) {
        return ProductResponseDto.builder()
                .id(document.getId())
                .category(document.getCategory())
                .productName(document.getProductName())
                .decimal(document.getDecimal())
                .stock(document.getStock())
                .updateAt(document.getUpdateAt())
                .createdAt(document.getCreatedAt())
                .build();
    }
}
