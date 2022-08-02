package com.example.filecloud.fileUpload;

import com.example.filecloud.entity.UserFile;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileManagerDataBase implements FileManager{

    @Override
    public void saveFile(MultipartFile file, UserFile userFile) {

    }

    @Override
    public void deleteFile(UserFile userFile) {

    }
}
