package com.animal.animalservice.controller;

import com.animal.animalservice.payload.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.logging.Logger;

@RestController
@RequestMapping("/animal")
public class AnimalController {

    private final static Logger LOGGER = Logger.getLogger(AnimalController.class.getName());

    @CrossOrigin
    @PostMapping("/postdata")
    public Data getData(@Valid @RequestBody Data data) {
        LOGGER.info("getData");
        LOGGER.info(data.getName());
        LOGGER.info(String.valueOf(data.getAge()));
        return data;
    }

    @GetMapping("getdata")
    public Data getData() {
        LOGGER.info("getData");
        return new Data("bob", 12);
    }
}
