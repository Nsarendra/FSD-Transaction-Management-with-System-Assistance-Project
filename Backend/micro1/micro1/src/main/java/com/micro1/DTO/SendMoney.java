package com.micro1.DTO;

public class SendMoney {
	
	private int userId;

	private int accountNumber;
	
	private int amount;
	
	private int pin;
	
	public SendMoney() {
		
	}

	public SendMoney(int userId, int accountNumber, int amount, int pin) {
		super();
		this.userId = userId;
		this.accountNumber = accountNumber;
		this.amount = amount;
		this.pin = pin;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}
	
	
	
	
	
}
