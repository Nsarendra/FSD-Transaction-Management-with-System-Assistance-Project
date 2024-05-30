package com.micro2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.micro2.repository.UserRepository;
import com.micro2.service.UserService;

@RestController
public class UserController {
	@Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserService userService;
	
	
	 @GetMapping("/history/{id}")
	    public ResponseEntity<?> getHistory(@PathVariable int id){
	      	return ResponseEntity.status(HttpStatus.OK).body(userService.getHistory(id));
	    }
}
