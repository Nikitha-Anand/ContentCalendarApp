package com.calendar.content_calendar.repository;

import com.calendar.content_calendar.model.Content;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Repository
//This class can be used when an arraylist is used in the place of a database
public class ArrayListRepository {
    private final List<Content> contentList = new ArrayList<>();

    // Method to get all content
    public List<Content> getContent() {
        return contentList;
    }

    // Method to add new content
    public Content pushingContent(Content content) {
        contentList.add(content);
        return content;
    }

    // Method to update existing content
    public Content updatingContent(Integer id, Content updatedContent) {
        for (int i = 0; i < contentList.size(); i++) {
            if (contentList.get(i).getId().equals(id)) {
                System.out.println("Updating content with ID: " + id);
                contentList.set(i, updatedContent); // Replace old content with new content
                return updatedContent;
            }
        }
        return null; // Return null if ID is not found
    }

    // Method to delete a content
    public boolean removingContent(Integer id) {
        return contentList.removeIf(content -> content.getId().equals(id));
    }


}
