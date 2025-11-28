package com.example.demo.service;

import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public String insertreview(Review review) {
        try {
            reviewRepository.save(review);
            return "Review submitted successfully!";
        } catch (Exception e) {
            return "Error submitting review: " + e.getMessage();
        }
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
}
