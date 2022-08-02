package com.example.filecloud.fileUpload;

import com.example.filecloud.entity.UserFile;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Component
public class FileManagerServer implements  FileManager{
    @Value("${filesDirectoryPath}")
    private  String uploadPath;


    @Override
    public void saveFile(MultipartFile file, UserFile userFile) {
        if(file.isEmpty())
            throw  new IllegalStateException("File is empty");

        String userDirectoryPath = uploadPath+"/"+userFile.getUser().getIdUser();
        File userDirectory = new File(userDirectoryPath);

        if(!userDirectory.exists())
            userDirectory.mkdir();

        String filePath = userDirectoryPath+"/"+file.getOriginalFilename();
        try {
            file.transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteFile(UserFile userFile) {
        String filePath = uploadPath+"/"+userFile.getUser().getIdUser()+"/"+userFile.getTitle();
        File file = new File(filePath);

        if(file.exists())
            file.delete();
        else
            throw new NullPointerException("File is not exists");
    }
}
