package com.micro1.DTO;

public class AddMoneyDto {

	private int userId;
	
	private int amount;
	
	private int pin;
	
	public AddMoneyDto(){
		
	}

	public AddMoneyDto(int userId, int amount, int pin) {
		super();
		this.userId = userId;
		this.amount = amount;
		this.pin=pin;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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
