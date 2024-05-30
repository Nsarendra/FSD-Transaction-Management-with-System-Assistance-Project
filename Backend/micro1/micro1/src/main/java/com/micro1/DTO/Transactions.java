package com.micro1.DTO;

public class Transactions {

	private String sender;
	private String Receiver;
	private int amount;
	private String typeOfTransaction;
	public Transactions()
	{
		
	}
	public Transactions(String sender, String receiver, int amount, String typeOfTransaction) {
		super();
		this.sender = sender;
		Receiver = receiver;
		this.amount = amount;
		this.typeOfTransaction = typeOfTransaction;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getReceiver() {
		return Receiver;
	}
	public void setReceiver(String receiver) {
		Receiver = receiver;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getTypeOfTransaction() {
		return typeOfTransaction;
	}
	public void setTypeOfTransaction(String typeOfTransaction) {
		this.typeOfTransaction = typeOfTransaction;
	}
	
	
}
