package com.alberto.pocapirest.product.model.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties
public class ProductResponseDto implements Serializable {

    private String id;
    private String category;
    private String productName;
    private Float decimal;
    private Integer stock;
    private String updateAt;
    private String createdAt;
}
