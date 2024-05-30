package com.micro1.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String userName;
	private String email;
	private int pin;
	private int accountNumber;
	private int balance;

	@OneToMany(mappedBy = "sender", cascade = CascadeType.ALL)
//	@JsonManagedReference
	private List<UserLogs> sentTransactions;
	
	@OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
//	@JsonManagedReference
	private List<UserLogs> receivedTransactions;

	public User() {
       sentTransactions=new ArrayList<>();
       receivedTransactions=new ArrayList<>();
	}

	public User(int id, String userName, String email, int pin, int accountNumber, int balance,
			List<UserLogs> sentTransactions, List<UserLogs> receivedTransactions) {
		super();
		this.id = id;
		this.userName = userName;
		this.email = email;
		this.pin = pin;
		this.accountNumber = accountNumber;
		this.balance = balance;
		this.sentTransactions = sentTransactions;
		this.receivedTransactions = receivedTransactions;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public List<UserLogs> getSentTransactions() {
		return sentTransactions;
	}

	public void setSentTransactions(List<UserLogs> sentTransactions) {
		this.sentTransactions = sentTransactions;
	}

	public List<UserLogs> getReceivedTransactions() {
		return receivedTransactions;
	}

	public void setReceivedTransactions(List<UserLogs> receivedTransactions) {
		this.receivedTransactions = receivedTransactions;
	}

//	public User(int id, String userName, String email, int pin, int accountNumber, int balance) {
//		super();
//		this.id = id;
//		this.userName = userName;
//		this.email = email;
//		this.pin = pin;
//		this.accountNumber = accountNumber;
//		this.balance = balance;
//	}
//	public int getId() {
//		return id;
//	}
//	public void setId(int id) {
//		this.id = id;
//	}
//	public String getUserName() {
//		return userName;
//	}
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public int getPin() {
//		return pin;
//	}
//	public void setPin(int pin) {
//		this.pin = pin;
//	}
//	public int getAccountNumber() {
//		return accountNumber;
//	}
//	public void setAccountNumber(int accountNumber) {
//		this.accountNumber = accountNumber;
//	}
//	public int getBalance() {
//		return balance;
//	}
//	public void setBalance(int balance) {
//		this.balance = balance;
//	}

}
