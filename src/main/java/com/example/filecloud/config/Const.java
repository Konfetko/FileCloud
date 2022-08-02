package com.example.filecloud.config;

public class Const {
    public static final long EXPIRATION_TIME = 24 * 60 * 60 * 1000;     // 24 hours
    public static final long EXPIRATION_TIME_REFRESH_TOKEN = 24 * 60 * 60 * 10000;     // 24 hours
    public static final String SECRET = "P@S5W0RD";      // jwt password
    public static final String TOKEN_PREFIX = "Bearer";         // Token prefix
    public static final String HEADER_STRING = "Authorization"; // header key
}
