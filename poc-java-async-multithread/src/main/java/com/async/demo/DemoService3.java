package com.async.demo;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class DemoService3 {

    @Autowired
    DemoRepository demoRepository;

    Logger logger = LoggerFactory.getLogger(DemoService3.class);


    @Async("mockExecutor1")
    public void getDemo() {
        demoRepository.getRepo();
        asyncValid(1);
        this.syncValid();

    }


    public void asyncValid(int k) {
        logger.info("Thread 3 {}", Thread.currentThread().getName());
        for (int i = 0; i < 10; i++) {
            logger.info("test async 3 {}", k);
            if (i > 5) {
//                throw new RuntimeException("test async Exception 3");
            }
        }
    }

    public void syncValid() {

        for (int i = 0; i < 3; i++) {
            logger.info("test 3");
        }
    }

}
