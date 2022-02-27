package com.alberto.pocapirest.product.repository;

import com.alberto.pocapirest.product.model.ProductDocument;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends ReactiveMongoRepository<ProductDocument, String> {
}
