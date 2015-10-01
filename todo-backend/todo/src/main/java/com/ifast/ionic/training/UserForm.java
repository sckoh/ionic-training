package com.ifast.ionic.training;

import java.io.Serializable;

public class UserForm implements Serializable {

	private static final long serialVersionUID = -5135892244311238241L;

	private String username;
	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
