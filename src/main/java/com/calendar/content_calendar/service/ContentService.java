package com.calendar.content_calendar.service;

import com.calendar.content_calendar.model.Content;
import com.calendar.content_calendar.repository.ContentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ContentService {
    private final ContentRepository contentRepository;

    // Method to get all content
    public List<Content> getAllContent() {
        return contentRepository.findAll();
    }

    // Method to add new content
    public Content addContent(Content content) {
        content.setId(null);
        return contentRepository.save(content);
    }

    // Method to update existing content
    public Optional<Content> updateContent(Integer id, Content updatedContent) {
        return contentRepository.findById(id).map(existingContent -> {
            existingContent.setTitle(updatedContent.getTitle());
            existingContent.setDescription(updatedContent.getDescription());
            existingContent.setDate(updatedContent.getDate());
            return contentRepository.save(existingContent);
        });
    }

    // Method to delete an existing content
    public boolean deleteContent(Integer id) {
        if (contentRepository.existsById(id)) {
            contentRepository.deleteById(id);
            return true;
        }
        return false;
    }
}