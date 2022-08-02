package com.example.filecloud.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @Column(name = "idrole")
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long idRole;
    @Column(name = "roleTitle")
    private String roleTitle;


    public Role(String roleTitle) {
        this.roleTitle = roleTitle;
    }


}
