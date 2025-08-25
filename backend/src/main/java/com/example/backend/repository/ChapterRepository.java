package com.example.backend.repository;

import com.example.backend.model.Chapter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChapterRepository extends MongoRepository<Chapter, String> {
    Chapter findByChapterNumber(int chapterNumber);
}
