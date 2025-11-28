package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phno;
    @Column(unique = true)
    private String email;
    private String password;
    private String affiliation;
    private String role;
}
