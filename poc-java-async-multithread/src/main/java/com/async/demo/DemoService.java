package com.async.demo;


import io.micrometer.observation.GlobalObservationConvention;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class DemoService {

    Logger logger = LoggerFactory.getLogger(DemoService.class);

    @Async("mockExecutor1")
    public void getDemo() {

        try {
            for (int i = 0; i < 2; i++) {
                asyncValid(i);
            }
        } catch (Exception e) {
            logger.info("Exception {}", e.getMessage());
        }

        syncValid();

    }


    public void asyncValid(int k) {
        logger.info("Thread {}", Thread.currentThread().getName());
        for (int i = 0; i < 10; i++) {
            logger.info("test async {}", k);
            if (i > 5) {
                throw new RuntimeException("test async Exception");
            }
        }
    }

    public void syncValid() {

        for (int i = 0; i < 3; i++) {
            logger.info("test");
        }
    }

}
