package com.ifast.ionic.training.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.ifast.ionic.training.domain.entity.User;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {

	User findByUsername(String username);

}
