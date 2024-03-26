package com.spotlight.sri.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotlight.sri.model.Token;

public interface TokenRepository extends JpaRepository<Token, String> {

    List<Token> findAllByUser_userIdAndRevokedFalseAndExpiredFalse(String id);
    
    Optional<Token> findByToken(String token);
    
}
