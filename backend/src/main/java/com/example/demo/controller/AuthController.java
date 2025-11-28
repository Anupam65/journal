package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174",
        "https://anupam65.github.io"
}, allowCredentials = "true")
@RestController
@RequestMapping
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/user")
    public String InsertData(@RequestBody User user) {
        return service.insertUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User loginRequest) {
        boolean isValid = service.validateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (isValid) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
    }
}
