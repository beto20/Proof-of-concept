package com.alberto.pocapirest.product.model.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties
public class ProductRequestDto implements Serializable {

    private String id;
    @NotNull(message = "Can not be null")
    @NotEmpty(message = "Can not be empty")
    private String category;
    @NotNull(message = "Can not be null")
    @NotEmpty(message = "Can not be empty")
    private String productName;
    @NotNull(message = "Can not be null")
    @DecimalMin(value = "0.1", message = "Can not be negative")
    private Float decimal;
    @NotNull(message = "Can not be null")
    @Min(value = 1, message = "Can not be decimal, neither negative")
    private Integer stock;
    private String updateAt = LocalDateTime.now().toString();
    private String createdAt = LocalDateTime.now().toString();
}
