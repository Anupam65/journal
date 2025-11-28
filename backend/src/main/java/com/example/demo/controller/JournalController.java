package com.example.demo.controller;

import com.example.demo.model.Journal;
import com.example.demo.repository.JournalRepository;
import com.example.demo.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:5173", "https://anupam65.github.io" }, allowCredentials = "true")
@RestController
@RequestMapping("/Journal")
public class JournalController {

    @Autowired
    private JournalService service;

    @Autowired
    private JournalRepository journalrepo;

    // Insert a new journal
    @PostMapping("/add")
    public String insertJournal(
            @RequestParam("title") String title,
            @RequestParam("author") String author,
            @RequestParam("affiliation") String affiliation,
            @RequestParam("abstractt") String abstractt,
            @RequestParam("file") MultipartFile file) throws IOException {

        Journal journal = new Journal();
        journal.setTitle(title);
        journal.setAuthor(author);
        journal.setAffiliation(affiliation);
        journal.setAbstractt(abstractt);
        journal.setFileData(file.getBytes());

        return service.insertJournal(journal);
    }

    // Get all journals
    @GetMapping("/all")
    public List<Journal> getAllJournals() {
        return service.getAllJournals();
    }

    // Download journal file by ID
    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadJournal(@PathVariable Long id) {
        Journal journal = journalrepo.findById(id).orElse(null);
        if (journal == null || journal.getFileData() == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + journal.getTitle() + ".pdf\"")
                .body(journal.getFileData());
    }
}
