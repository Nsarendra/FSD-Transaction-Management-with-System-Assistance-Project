package com.micro2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.micro2.model.UserLogs;



@Repository
public interface UserLogsRepository extends JpaRepository<UserLogs, Integer>{
//	UserLogs findBySender(int id);
}