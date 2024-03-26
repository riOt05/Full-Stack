package com.spotlight.sri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotlight.sri.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {
    
}