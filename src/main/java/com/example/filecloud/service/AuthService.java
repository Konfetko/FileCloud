package com.example.filecloud.service;

import com.example.filecloud.entity.Role;
import com.example.filecloud.repository.RolesRepository;
import com.example.filecloud.repository.UserRepository;
import com.example.filecloud.config.JwtTokenUtil;
import com.example.filecloud.entity.User;
import com.example.filecloud.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolesRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public String login(UserRequest user) {

        UsernamePasswordAuthenticationToken upToken = new UsernamePasswordAuthenticationToken( user.getUsername(), user.getPassword() );

        Authentication authentication = authenticationManager.authenticate(upToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        final User userDetails =  userRepository.findUserByUsername( user.getUsername() );
        if (userDetails == null){
            return null;
        }
        if(!passwordEncoder.matches(user.getPassword(),userDetails.getPassword() ))
        {
            return null;
        }
        final String token = jwtTokenUtil.generateToken(userDetails);
        return token;
    }

    public User register(User userToAdd ) {

        final String username = userToAdd.getUsername();
        boolean flag = userRepository.existsUserByUsername(username);
        if( flag ) {
            return null;
        }
        Role role =roleRepository.findRoleByRoleTitle(userToAdd.getRole().getRoleTitle());
        if(role!=null)
            userToAdd.setRole(role);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        final String rawPassword = userToAdd.getPassword();
        userToAdd.setPassword( encoder.encode(rawPassword) );
        var a= userRepository.save(userToAdd);
        return a;
    }
}