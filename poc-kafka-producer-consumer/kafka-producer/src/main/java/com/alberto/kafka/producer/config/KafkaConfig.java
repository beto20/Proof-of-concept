package com.alberto.kafka.producer.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class KafkaConfig {

//    @Bean
//    public NewTopic createNewTopic() {
//        var config = new HashMap<String, String>();
//
//        config.put("kafka:", "9094");
//
//        return new NewTopic("new-topic-mock", 3, (short) 2).configs(config);
//    }

}
