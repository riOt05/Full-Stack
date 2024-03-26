package com.spotlight.sri.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.spotlight.sri.dto.Request.ForgotPasswordRequest;
import com.spotlight.sri.dto.Request.LoginRequest;
import com.spotlight.sri.dto.Request.RegisterRequest;
import com.spotlight.sri.dto.Response.BasicResponse;
import com.spotlight.sri.dto.Response.LoginResponse;
import com.spotlight.sri.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/spotlight/api/v1/authentication")
@RequiredArgsConstructor
@Tag(name = "Authentication",description = "It's used to authenticate and authorize the user")
public class AuthController {

    private final AuthService authenticationService;
    
    @PostMapping("/register")
    @Operation(summary = "User registration", description = "For the registration process, I collect user credentials such as name, email and password")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        BasicResponse<String> response = new BasicResponse<>();
        try{
            response = authenticationService.register(registerRequest);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/login")
    @Operation(summary = "User authentication", description = "Upon successful authentication using user credentialls (email and password), a JSON Web Token is generated")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        BasicResponse<LoginResponse> response = new BasicResponse<>();
        try {
            response = authenticationService.login(loginRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            response.setData(LoginResponse.builder().accessToken("").build());
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }                                                                              

    @PatchExchange("/forget-password")
    @Operation(summary = "Forgot Password", description = "Reset old password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgetPasswordRequest){
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = authenticationService.forgotPassword(forgetPasswordRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
            
        } catch (Exception e) {
            response.setMessage("something went wrong");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    
}
