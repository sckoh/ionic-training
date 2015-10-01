package com.ifast.ionic.training.web;

import java.security.Principal;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ifast.ionic.training.domain.entity.Todo;
import com.ifast.ionic.training.domain.entity.User;
import com.ifast.ionic.training.domain.repository.TodoRepository;
import com.ifast.ionic.training.utils.AuthUtils;

@RestController
@RequestMapping("/api")
public class TodoController {

	@Autowired
	TodoRepository todoRepository;

	@RequestMapping(value = "/todos", method = RequestMethod.GET)
	public List<Todo> findTodos(Principal principal) {
		User user = AuthUtils.getUser(principal);
		return todoRepository.findByUser_Id(user.getId());
	}

	@RequestMapping(value = "/todos/{todoId}", method = RequestMethod.GET)
	public Todo findTodo(@PathVariable Long todoId) {
		return todoRepository.findOne(todoId);
	}

	@RequestMapping(value = "/todos", method = RequestMethod.POST)
	public Todo saveTodo(@RequestBody Todo todo, Principal principal) {
		User user = AuthUtils.getUser(principal);
		todo.setUser(new User(user.getId()));
		todo.setCreatedDate(new Date());
		todoRepository.save(todo);
		return todo;
	}

	@RequestMapping(value = "/todos/{todoId}", method = RequestMethod.DELETE)
	public void deleteTodo(@PathVariable Long todoId) {
		todoRepository.delete(todoId);
	}

	@RequestMapping(value = "/todos", method = RequestMethod.PUT)
	public Todo findTodos(@RequestBody Todo todo) {
		Todo existTodo = todoRepository.findOne(todo.getId());
		existTodo.setContent(todo.getContent());
		todoRepository.save(existTodo);
		return existTodo;
	}
}
