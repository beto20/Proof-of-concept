package com.alberto.kafka.producer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;


@Service
public class KafkaPublisher {

    @Autowired
    private KafkaTemplate<String, Object> template;

    public void sendMessage(String message) {
        ListenableFuture<SendResult<String, Object>> future = template.send("mock-ui","key1", message);

        future.completable().whenComplete((result, ex) -> {
            if (ex == null) System.out.println("Sent message: " + message + " offset " + result.getRecordMetadata().offset());
            else System.out.println("Unable to send message: " + message + "caused by" + ex.getMessage());
        });

    }

    public void sendMessageK2(String message) {
        ListenableFuture<SendResult<String, Object>> future = template.send("mock-ui-two","key2", message);

        future.completable().whenComplete((result, ex) -> {
            if (ex == null) System.out.println("Sent message k2: " + message + " offset " + result.getRecordMetadata().offset());
            else System.out.println("Unable to send message k2: " + message + "caused by" + ex.getMessage());
        });

    }

    public void sendMessageK3(String message) {
        ListenableFuture<SendResult<String, Object>> future = template.send("new-topic-mock","key3", message);

        future.completable().whenComplete((result, ex) -> {
            if (ex == null) System.out.println("Sent message k3: " + message + " offset " + result.getRecordMetadata().offset());
            else System.out.println("Unable to send message k3: " + message + "caused by" + ex.getMessage());
        });

    }


}
