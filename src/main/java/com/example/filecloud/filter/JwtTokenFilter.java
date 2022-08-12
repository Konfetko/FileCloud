package com.example.filecloud.filter;

import com.example.filecloud.config.JWTConsts;
import com.example.filecloud.config.JwtTokenUtil;
import com.example.filecloud.entity.User;
import com.example.filecloud.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtTokenFilter extends OncePerRequestFilter {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;



    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        String authHeader = request.getHeader( JWTConsts.HEADER_STRING );
        if (authHeader != null && authHeader.startsWith( JWTConsts.TOKEN_PREFIX )) {
            final String authToken = authHeader.substring( JWTConsts.TOKEN_PREFIX.length() );
            String username = jwtTokenUtil.getUsernameFromToken(authToken);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                User userDetails = userRepository.findUserByUsername(username);
                if (jwtTokenUtil.validateToken(authToken, userDetails)) {
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities());

                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(
                            request));

                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }

            }
        }
        filterChain.doFilter(request, response);
    }
}