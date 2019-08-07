package com.example.DATA_FOR_DAYS;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ValuesController {

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/values")
    public String[] getValues(){
        return new String[] {"value1","value2"};
    }
}