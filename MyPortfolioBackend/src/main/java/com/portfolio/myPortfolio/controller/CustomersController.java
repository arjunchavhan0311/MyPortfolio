package com.portfolio.myPortfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.portfolio.myPortfolio.entity.Customers;
import com.portfolio.myPortfolio.services.CustomerService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomersController {

    private final CustomerService customerService;

    public CustomersController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/send")
    public ResponseEntity<String> submitContact(@RequestBody Customers customers) {
        customerService.saveContact(customers);
        return ResponseEntity.ok("Message sent successfully");
    }
}
