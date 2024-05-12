package com.async.demo;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class DemoRepository {

    Logger logger = LoggerFactory.getLogger(DemoRepository.class);
    @Async("mockExecutor2")
    public void getRepo() {
        try {
            asyncValid();
        } catch (Exception e) {
            logger.info("Exception repo {}", e.getMessage());
            throw new IllegalArgumentException("");
        }
        syncValid();

    }


    public void asyncValid() {
        logger.info("Thread 2 {}", Thread.currentThread().getName());
        for (int i = 0; i < 10; i++) {
            logger.info("test async repo");
            if (i > 5) {
                throw new RuntimeException("test async Exception repo");
            }
        }
    }

    public void syncValid() {

        for (int i = 0; i < 3; i++) {
            logger.info("test repo");
        }
    }

}
