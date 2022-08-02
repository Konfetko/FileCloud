package com.example.filecloud.fileUpload;

import com.example.filecloud.entity.UserFile;
import org.springframework.web.multipart.MultipartFile;

public interface FileManager {
    void saveFile(MultipartFile file, UserFile userFile);
    void deleteFile(UserFile userFile);

}
