package com.calendar.content_calendar.repository;

import com.calendar.content_calendar.model.Content;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer> {}