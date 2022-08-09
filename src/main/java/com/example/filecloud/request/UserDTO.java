package com.example.filecloud.request;

import com.example.filecloud.entity.Role;
import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;

@Data
public class UserDTO {
    private String username;
    private String password;
    @JsonIgnore
    private Role role;
}
