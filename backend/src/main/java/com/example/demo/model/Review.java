package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String journal;

    @JsonProperty("final")
    private String finalVerdict;

    private int originality;
    private int scientific;
    private int clarity;
    private int relevance;

    @Column(length = 2000)
    private String summary;

    @Column(length = 2000)
    private String author;

    @Column(length = 2000)
    private String editor;
}
