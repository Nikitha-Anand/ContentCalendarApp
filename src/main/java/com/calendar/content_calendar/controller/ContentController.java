package com.calendar.content_calendar.controller;

import com.calendar.content_calendar.model.Content;
import com.calendar.content_calendar.service.ContentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/content")
public class ContentController {

    private final ContentService contentService;

    // GET request to fetch all content
    @GetMapping
    public List<Content> getAllContent() {
        return contentService.getAllContent();
    }

    // POST request to add new content
    @PostMapping
    public ResponseEntity<Content> createContent(@RequestBody Content content) {
        content.setId(null);
        Content savedContent = contentService.addContent(content);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedContent);
    }

    // PUT request to update existing content
    @PutMapping("/{id}")
    public ResponseEntity<Content> updateContent(@PathVariable Integer id, @RequestBody Content newContent) {
        Optional<Content> updated = contentService.updateContent(id, newContent);
        return updated.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE request to remove content
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContent(@PathVariable Integer id) {
        return contentService.deleteContent(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

}