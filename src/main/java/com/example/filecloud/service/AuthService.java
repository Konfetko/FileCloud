package com.example.filecloud.service;

import com.example.filecloud.entity.Role;
import com.example.filecloud.exeption.ExpiredToken;
import com.example.filecloud.repository.RoleRepository;
import com.example.filecloud.repository.UserRepository;
import com.example.filecloud.config.JwtTokenUtil;
import com.example.filecloud.entity.User;
import com.example.filecloud.request.UserDTO;
import com.example.filecloud.response.JwtResponse;
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
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public JwtResponse login(UserDTO user) {

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
        JwtResponse response = new JwtResponse();
        response.setUser(userDetails);
        response.setAccessToken(token);
        response.setRefreshToken(token);

        return response;
    }

    public JwtResponse register(User userToAdd ) {

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

        var user = userRepository.save(userToAdd);

        final String token = jwtTokenUtil.generateToken(userToAdd);

        JwtResponse response = new JwtResponse();
        response.setUser(user);
        response.setAccessToken(token);
        response.setRefreshToken(token);
        return response;
    }
    public JwtResponse refreshUser(String token) {
        String username = jwtTokenUtil.getUsernameFromToken(token);
        if(username==null)
            throw new NullPointerException("Username is null");
        User user = userRepository.findUserByUsername(username);
        if(!jwtTokenUtil.validateToken(token,user))
            throw new ExpiredToken("Token is expired");

        JwtResponse response = new JwtResponse();
        response.setAccessToken(jwtTokenUtil.refreshToken(token));
        response.setRefreshToken(jwtTokenUtil.refreshToken(token));
        response.setUser(user);
        return response;
    }
}