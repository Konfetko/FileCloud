package com.example.filecloud.service;

import com.example.filecloud.entity.UserFile;
import com.example.filecloud.entity.User;
import com.example.filecloud.fileUpload.FileManager;

import com.example.filecloud.repository.UserFileRepository;
import com.example.filecloud.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class FileService {
    private final UserFileRepository fileRepository;
    private final UserRepository userRepository;
    private final List<FileManager> fileManagers;


    public List<UserFile> getUserFiles(Long idUser){
        return (List<UserFile>) fileRepository.findAll().stream().filter(x->x.getUser().getIdUser()==idUser);
    }
    @Transactional
    public void deleteFile(Long userID,Long fileID){
        try{
            UserFile file = fileRepository.findById(fileID).get();
            if(file==null)throw new NullPointerException("File is null");
            fileManagers.forEach(x->x.deleteFile(file));
        }catch (Exception ex){
            log.info(ex.getMessage());
        }
    }
    @Transactional
    public UserFile saveFile(MultipartFile file,Long userId)
    {
        try{
            User owner = userRepository.findById(userId).get();
            if(owner==null)throw new NullPointerException("User is not registered");
            LocalDate date = LocalDate.now();
            UserFile userFile = new UserFile(file.getOriginalFilename(), new Date(date.getYear(),date.getMonthValue(),date.getDayOfMonth()),owner);
            fileManagers.forEach(x->x.saveFile(file,userFile));
            return fileRepository.save(userFile);
        }catch (Exception ex){
            log.info(ex.getMessage());
            throw new NullPointerException();
        }
    }

}
