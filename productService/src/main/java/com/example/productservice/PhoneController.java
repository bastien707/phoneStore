package com.example.productservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PhoneController {
    @Autowired
    private PhoneRepository phoneRepository;

    @GetMapping("/")
    public String hello() {
        return "Hello from Product Service";
    }

    @GetMapping("/phones/all")
    public @ResponseBody List<Phone> getAllPhones() {
        return (List<Phone>) phoneRepository.findAll();
    }


    @PostMapping("/phones/add")
    public @ResponseBody String addNewPhone(@RequestBody PhoneRequest p) {
        Phone phone = new Phone();
        phone.setName(p.getName());
        phone.setBrand(p.getBrand());
        phone.setPrice(p.getPrice());
        phone.setImage_url(p.getImage_url());
        phoneRepository.save(phone);
        return "Saved";
    }

}
