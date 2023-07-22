package com.alberto.kafka.comsumer.consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaMessageListener {

    Logger logger = LoggerFactory.getLogger(KafkaMessageListener.class);

    @KafkaListener(topics = "mock-ui", groupId = "mock-id-1")
    public void consume(String message) {
        logger.info("consumer 1 consume the message {}", message);
    }

    @KafkaListener(topics = "mock-ui", groupId = "mock-id-1")
    public void consume2(String message) {
        logger.info("consumer 2 consume the message {}", message);
    }

    @KafkaListener(topics = "mock-ui", groupId = "mock-id-1")
    public void consume3(String message) {
        logger.info("consumer 3 consume the message {}", message);
    }


}
