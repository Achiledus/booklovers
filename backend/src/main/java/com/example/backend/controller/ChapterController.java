package com.example.backend.controller;

import com.example.backend.model.Chapter;
import com.example.backend.repository.ChapterRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chapters")
@CrossOrigin(origins = "http://localhost:3000") // React frontend
public class ChapterController {

    private final ChapterRepository chapterRepository;

    public ChapterController(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    @GetMapping
    public List<Chapter> getAllChapters() {
        return chapterRepository.findAll();
    }

    @GetMapping("/{id}")
    public Chapter getChapterById(@PathVariable String id) {
        return chapterRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Chapter createChapter(@Valid @RequestBody Chapter chapter) {
        return chapterRepository.save(chapter);
    }
}
