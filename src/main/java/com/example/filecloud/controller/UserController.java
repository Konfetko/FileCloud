package com.example.filecloud.controller;

import com.example.filecloud.entity.User;
import com.example.filecloud.request.UserRequest;
import com.example.filecloud.service.AuthService;
import com.example.filecloud.service.UserService;
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
    public ResponseEntity<String> authorize(@RequestBody UserRequest user){
        String token = authService.login(user);
        return  (token==null)
                ?ResponseEntity.badRequest().body("Пользователь не найден")
                :ResponseEntity.ok(token);

    }
    @PostMapping("/registration")
    public ResponseEntity registration(@RequestBody User user){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/registration").toUriString());
        User registeredUser = authService.register(user);
        return (registeredUser==null)
                ?ResponseEntity.badRequest().body("Пользователь с таким логином уже зарегистрирован")
                :ResponseEntity.created(uri).body(registeredUser);
    }
    @GetMapping("/message")
    public String message() throws AuthenticationException {
        return "you are admin";
    }
}
