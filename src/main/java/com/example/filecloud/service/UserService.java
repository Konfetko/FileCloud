package com.example.filecloud.service;


import com.example.filecloud.entity.User;
import com.example.filecloud.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class UserService implements UserDetailsService{
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User findedUser = userRepository.findUserByUsername(username);
        if(findedUser==null)
        {
            log.error("User is not registered");
            throw new UsernameNotFoundException("User is not registered");
        }
        log.info("User: "+ findedUser.getUsername()+" was founded");
        return findedUser;
    }


    public List<User> getAllUsers(){
        return userRepository.findAll();
    }


}
