package com.micro1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.micro1.DTO.AddMoneyDto;
import com.micro1.DTO.SendMoney;
import com.micro1.feignClient.GetHistory;
import com.micro1.model.User;
import com.micro1.repo.UserRepository;
import com.micro1.service.UserService;

@RestController

public class UserController {
	
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private GetHistory getHistory;
    @Autowired
    private UserService userService;

    @PostMapping("register")
   public ResponseEntity<?> register(@RequestBody User user){
	   
	   return userService.register(user);
   }
    
    @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody User user){
	  return userService.login(user);
  }
    
    @GetMapping("/getDetails/{id}")
    public int getDetails(@PathVariable int id){
    	return userService.getDetails(id);
    }
    
    @PostMapping("/addMoney")
    public ResponseEntity<?> addMoney(@RequestBody AddMoneyDto amd ){
    	
		return userService.addMoney(amd);
    	
    }
    
    @PostMapping("/sendMoney")
    public ResponseEntity<?> sendMoney(@RequestBody SendMoney sm){
    	return userService.sendMoney(sm);
    }
    
//    @GetMapping("/history/{id}")
//    public ResponseEntity<?> getHistory(@PathVariable int id){
//      	return ResponseEntity.status(HttpStatus.OK).body(userService.getHistory(id));
//    }
    
    @GetMapping("/history/{id}")
    public ResponseEntity<?> getHistory(@PathVariable int id){
        
        return ResponseEntity.status(HttpStatus.OK).body(getHistory.getHistory(id));
    }
}


