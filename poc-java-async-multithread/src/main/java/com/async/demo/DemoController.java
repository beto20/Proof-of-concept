package com.async.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoController {

    @Autowired
    DemoService demoService;
    @Autowired
    DemoService2 demoService2;
    @Autowired
    DemoService3 demoService3;

    @GetMapping("test")
    public String test() {
//        demoService.getDemo();
//        demoService2.getDemo();

        demoService3.getDemo();

        return " prueba";
    }
}
