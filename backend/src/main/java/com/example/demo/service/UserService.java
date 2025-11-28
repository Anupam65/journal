package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String insertUser(User user) {
        try {
            userRepository.save(user);
            return "Registration Successful";
        } catch (Exception e) {
            return "Error registering user: " + e.getMessage();
        }
    }

    public boolean validateUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password).isPresent();
    }
}
