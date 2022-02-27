package com.alberto.pocapirest.product.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Document
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDocument implements Serializable {

    @Id
    private String id;
    private String category;
    private String productName;
    private Float decimal;
    private Integer stock;
    private String updateAt;
    private String createdAt;
}
