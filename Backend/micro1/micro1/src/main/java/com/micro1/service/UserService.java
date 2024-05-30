package com.micro1.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.micro1.DTO.AddMoneyDto;
import com.micro1.DTO.SendMoney;
import com.micro1.DTO.Transactions;
import com.micro1.model.User;
import com.micro1.model.UserLogs;
import com.micro1.repo.UserLogsRepository;
import com.micro1.repo.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserLogsRepository ul;
	
	public int generateAccountNumber() {
		Random random = new Random();
	     int randomNumber = random.nextInt(90000000) + 10000000;
	     return randomNumber;
	}
	
	public int createAccountNumber() {
		 int randomNumber=generateAccountNumber();
	     
	     if(userRepository.existsByAccountNumber(randomNumber)) {
	    	 createAccountNumber();
	     }
	
	     return randomNumber;
	}
	
	public ResponseEntity<?> register(User user){
		
	if(userRepository.existsByEmail(user.getEmail())) {
		return ResponseEntity.badRequest().body("User already exists with this email");
	}
	
	int accountNumber=createAccountNumber();
	user.setAccountNumber(accountNumber);
	
	System.out.println(user.getUserName());
	
	userRepository.saveAndFlush(user);
		
	return ResponseEntity.ok("You are succesfully registered and your accountNumber is "+accountNumber );
		
	}
	
	public ResponseEntity<?> login(User user){
		if(userRepository.existsByEmail(user.getEmail())) {
			
			User u= userRepository.findByEmail(user.getEmail());
			Map<String, Object> response=new HashMap<>();
			if(user.getPin()==u.getPin()) {
//				Map<String, Object> response=new HashMap<>();
				response.put("message", "Login Succesfull");
				response.put("userId",u.getId() );
				response.put("userName",u.getUserName());
				response.put("balance",u.getBalance());
				response.put("accountNumber", u.getAccountNumber());
				
				
				return ResponseEntity.ok().body(response);
				
			}
			else {
				response.put("message", "Invalid Credentials");
				return ResponseEntity.badRequest().body("Invalid Credentials");
			}
			
		
		}
		else {
			return ResponseEntity.badRequest().body("Invalid credentials");
		}
		
	}
	
	public int getDetails(int id){
		User u=userRepository.findById(id);
		
		return u.getBalance();
	}
	
	
	public ResponseEntity<?> addMoney(AddMoneyDto amd){
		
		
		User u=userRepository.findById(amd.getUserId());
		System.out.println(u.getUserName());
		
		if(u.getPin()==amd.getPin()) {
			u.setBalance(u.getBalance()+amd.getAmount());
			
			userRepository.saveAndFlush(u);
			
			return ResponseEntity.ok().body("Money added into your succesfully");
		}
		else {
			return ResponseEntity.badRequest().body("Wrong Pin");
		}

		
		
	}
	@Transactional
	public ResponseEntity<?> sendMoney(SendMoney sm){
		
	
		
		User sender=userRepository.findById(sm.getUserId());
		
		User receiver=userRepository.findByAccountNumber(sm.getAccountNumber());
		
		if(receiver==null) {
			return ResponseEntity.badRequest().body("Account number "+sm.getAccountNumber() +" does not exists");
		}
		
//		UserLogs log=ul.findBySender(sm.getUserId());
		
	if(sender.getPin()==sm.getPin()) {
		
		if(sender.getBalance()>=sm.getAmount() ) {

			sender.setBalance(sender.getBalance()-sm.getAmount());
			receiver.setBalance(receiver.getBalance()+sm.getAmount());
			
//			log.setSender(sender);
//			log.setReceiver(receiver);
//			log.setAmount(sm.getAmount());
			UserLogs userLog=new UserLogs();
			userLog.setAmount(sm.getAmount());
			userLog.setSender(sender);
			userLog.setReceiver(receiver);
			sender.getSentTransactions().add(userLog);
			receiver.getReceivedTransactions().add(userLog);
			userRepository.save(sender);
			userRepository.save(receiver);
			return ResponseEntity.ok().body("Amount "+sm.getAmount()+" sent succesfully to "+receiver.getUserName());
		}
		else {
			return ResponseEntity.ok().body("Insufficient Funds. Your bank balance is  "+sender.getBalance());
		}
		
	}
	
	else {
		return ResponseEntity.badRequest().body("Invalid Pin");
	}
	}
	
	
	
	
	
	
	
	
	
}
