package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String abstractt;
    private String author;
    private String affiliation;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] fileData;

    @Temporal(TemporalType.TIMESTAMP)
    private Date submittedAt = new Date();
}
