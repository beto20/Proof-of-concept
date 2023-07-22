package com.alberto.kafka.producer.controller;

import com.alberto.kafka.producer.service.KafkaPublisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/producer")
public class KafkaController {

    @Autowired
    private KafkaPublisher kafkaPublisher;

    @GetMapping("/{message}")
    public String publishMessage(@PathVariable("message") String message, @RequestParam("key") Integer key) {

        if (key == 1) kafkaPublisher.sendMessage(message);
        else if (key == 2) kafkaPublisher.sendMessageK2(message);
        else if (key == 3) kafkaPublisher.sendMessageK3(message);
        else kafkaPublisher.sendMessage(message);

        return "Ok";
    }

}
