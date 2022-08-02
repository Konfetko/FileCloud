package com.example.filecloud.repository;

import com.example.filecloud.entity.UserFile;
import com.example.filecloud.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface UserFileRepository extends JpaRepository<UserFile,Long> {
    UserFile findUserFileByTitle(String title);
    List<UserFile> findUserFilesByDateUpload(Date date);

}
