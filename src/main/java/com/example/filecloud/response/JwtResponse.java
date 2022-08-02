package com.example.filecloud.response;

import lombok.Data;
import com.example.filecloud.entity.User;

@Data
public class JwtResponse {
    private String accessToken;
    private String refreshToken;
    private User user;
}
