package com.example.filecloud.exeption;

public class ExpiredToken extends RuntimeException {
    public ExpiredToken(String mes){
        super(mes);
    }
}
