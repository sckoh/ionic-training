package com.ifast.ionic.training.domain.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.ifast.ionic.training.domain.entity.Todo;

@Repository
public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {

	List<Todo> findByUser_Id(Long userId);
}
