package com.example.demo.service;

import com.example.demo.model.Journal;
import com.example.demo.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JournalService {

    @Autowired
    private JournalRepository journalRepository;

    public String insertJournal(Journal journal) {
        try {
            journalRepository.save(journal);
            return "Journal submitted successfully!";
        } catch (Exception e) {
            return "Error submitting journal: " + e.getMessage();
        }
    }

    public List<Journal> getAllJournals() {
        return journalRepository.findAll();
    }
}
