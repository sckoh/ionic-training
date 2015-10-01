package com.ifast.ionic.training.utils;

import java.security.Principal;

import org.springframework.security.oauth2.provider.OAuth2Authentication;

import com.ifast.ionic.training.domain.entity.User;
import com.ifast.ionic.training.security.CustomUserDetails;

public class AuthUtils {

	public static User getUser(Principal principal) {
		User user = ((CustomUserDetails) ((OAuth2Authentication) principal).getPrincipal()).getUser();
		return user;
	}

}
