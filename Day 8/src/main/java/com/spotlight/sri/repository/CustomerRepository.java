package com.spotlight.sri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotlight.sri.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {
    
}

