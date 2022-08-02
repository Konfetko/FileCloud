package com.example.filecloud.repository;

import com.example.filecloud.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesRepository extends JpaRepository<Role, Long> {
    Role findRoleByRoleTitle(String title);
}
