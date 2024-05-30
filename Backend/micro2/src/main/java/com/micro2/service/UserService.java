package com.micro2.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.micro2.DTO.Transactions;
import com.micro2.model.User;
import com.micro2.model.UserLogs;
import com.micro2.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
    private UserRepository userRepository;


	public List<Transactions> getHistory(int id){
		User user=userRepository.findById(id);
		List<Transactions>  transactions=new ArrayList<>();
			for(UserLogs userLog:user.getSentTransactions())
			{
				Transactions transaction=new Transactions(userLog.getSender().getUserName(),userLog.getReceiver().getUserName(),userLog.getAmount(),"sent");
				transactions.add(transaction);
			}
			for(UserLogs userLog:user.getReceivedTransactions())
			{
				Transactions transaction=new Transactions(userLog.getSender().getUserName(),userLog.getReceiver().getUserName(),userLog.getAmount(),"received");
				transactions.add(transaction);
			}
		return transactions;
	
	}
}
