package com.ifast.ionic.training.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ifast.ionic.training.UserForm;
import com.ifast.ionic.training.domain.entity.User;
import com.ifast.ionic.training.domain.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	UserRepository userRepository;

	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public void saveUser(@RequestBody UserForm userForm) {
		User user = new User(userForm.getUsername(), userForm.getPassword());
		userRepository.save(user);
	}

}
