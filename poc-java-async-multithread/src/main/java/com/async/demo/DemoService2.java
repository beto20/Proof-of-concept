package com.async.demo;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class DemoService2 {

    Logger logger = LoggerFactory.getLogger(DemoService2.class);
    @Async("mockExecutor2")
    public void getDemo() {

        try {
            for (int i = 0; i < 2; i++) {
                asyncValid(i);
            }
        } catch (Exception e) {
            logger.info("Exception 2 {}", e.getMessage());
        }

        syncValid();

    }


    public void asyncValid(int k) {
        logger.info("Thread 2 {}", Thread.currentThread().getName());
        for (int i = 0; i < 10; i++) {
            logger.info("test async 2 {}", k);
            if (i > 5) {
                throw new RuntimeException("test async Exception 2");
            }
        }
    }

    public void syncValid() {

        for (int i = 0; i < 3; i++) {
            logger.info("test 2");
        }
    }

}
