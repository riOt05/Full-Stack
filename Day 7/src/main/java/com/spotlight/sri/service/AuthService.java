package com.spotlight.sri.service;

import com.spotlight.sri.dto.Request.ForgotPasswordRequest;
import com.spotlight.sri.dto.Request.LoginRequest;
import com.spotlight.sri.dto.Request.RegisterRequest;
import com.spotlight.sri.dto.Response.BasicResponse;
import com.spotlight.sri.dto.Response.LoginResponse;

public interface AuthService {
    
    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgetPasswordRequest);

}