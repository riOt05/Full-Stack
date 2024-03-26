package com.spotlight.sri.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {

    @Builder.Default
    private String message = "something went wrong";

    @Builder.Default
    private String accessToken = "";
    
    
}
