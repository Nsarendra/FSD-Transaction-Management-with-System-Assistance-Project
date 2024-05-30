package com.micro2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.micro2.model.User;



@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findById(int id);
    User findByEmail(String email);
    boolean existsByEmail(String email); 
    
    User findByAccountNumber(int acc);
    
    boolean existsByAccountNumber(int accountNumber);
}