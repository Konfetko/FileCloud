package com.example.filecloud.controller;

import com.example.filecloud.entity.User;
import com.example.filecloud.request.UserDTO;
import com.example.filecloud.response.JwtResponse;
import com.example.filecloud.service.AuthService;
import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity authorize(@RequestBody UserDTO user){
        JwtResponse response = authService.login(user);
        return  (response==null)
                ?ResponseEntity.badRequest().body("Пользователь не найден")
                :ResponseEntity.ok(response);

    }
    @PostMapping("/registration")
    public ResponseEntity registration(@RequestBody User user){
        //URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/registration").toUriString());
        JwtResponse response = authService.register(user);
        return (response==null)
                ?ResponseEntity.badRequest().body("Пользователь с таким логином уже зарегистрирован")
                :ResponseEntity.ok(response);
    }
    @GetMapping("/refresh")
    public ResponseEntity refreshUser(@RequestParam String token){
        JwtResponse response = authService.refreshUser(token);
        return (response==null)
                ?ResponseEntity.badRequest().body("Пользователь не авторізован")
                :ResponseEntity.ok(response);

    }
    @GetMapping("/message")
    public String message() throws AuthenticationException {
        return "you are admin";
    }
}
