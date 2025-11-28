package com.example.demo.controller;

import com.example.demo.model.Review;
import com.example.demo.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:5173", "http://localhost:5174" }, allowCredentials = "true")
@RestController
@RequestMapping("/")
public class ReviewController {

    @Autowired
    private ReviewService service;

    @PostMapping("/review")
    public String insertreview(@RequestBody Review review) {
        return service.insertreview(review);
    }

    @GetMapping("/reviews")
    public List<Review> getAllReviews() {
        return service.getAllReviews();
    }
}
