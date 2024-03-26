package com.spotlight.sri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotlight.sri.model.User;
import java.util.Optional;



public interface UserRepository extends JpaRepository<User, String>{
 
    Optional<User> findByEmail(String email);
    
}