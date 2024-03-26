package com.spotlight.sri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotlight.sri.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, String> {
    
}
