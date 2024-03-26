package com.spotlight.sri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotlight.sri.model.Venue;

public interface VenueRepository extends JpaRepository<Venue, String> {

    
} 
