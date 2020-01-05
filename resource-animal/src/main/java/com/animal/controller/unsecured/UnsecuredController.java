package com.animal.controller.unsecured;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/unsecured/")
public class UnsecuredController {

    @GetMapping("all")
    public String getAllData() {
        return "All data";
    }
}
