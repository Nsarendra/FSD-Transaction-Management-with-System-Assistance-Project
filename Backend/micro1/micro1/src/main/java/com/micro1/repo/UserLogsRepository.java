package com.micro1.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.micro1.model.User;
import com.micro1.model.UserLogs;

@Repository
public interface UserLogsRepository extends JpaRepository<UserLogs, Integer>{
//	UserLogs findBySender(int id);
}
