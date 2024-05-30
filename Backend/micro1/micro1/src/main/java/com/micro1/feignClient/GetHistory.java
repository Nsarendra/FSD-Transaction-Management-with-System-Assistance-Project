package com.micro1.feignClient;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.micro1.DTO.Transactions;



	@FeignClient(name="micro2")
	public interface GetHistory {
		@GetMapping("/history/{id}")
		List<Transactions> getHistory(@PathVariable int id);
	 
	}
	
	

