package com.example.filecloud.service;

import com.example.filecloud.entity.UserFile;
import com.example.filecloud.entity.User;

import com.example.filecloud.fileUpload.LobConverter;
import com.example.filecloud.repository.UserFileRepository;
import com.example.filecloud.repository.UserRepository;
import com.example.filecloud.response.FileResponse;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Service
@AllArgsConstructor
@Slf4j
public class FileService {
    private final UserFileRepository fileRepository;
    private final UserRepository userRepository;
    private final LobConverter lobConverter;



    public List<FileResponse> getUserFiles(Long idUser){
        var files = userRepository.findById(idUser).get().getFiles();
        var listReturn = new ArrayList<FileResponse>();
        for(var file :files)
            listReturn.add(new FileResponse(file.getIdFile(),file.getTitle(),file.getDateUpload()));
        return  listReturn;
    }
    public Blob getUserFile(Long fileId) throws IOException {
        UserFile file = fileRepository.findById(fileId).get();
        if(file==null)throw new NullPointerException("When is getting file, file was null");
        return file.getFileBin();
    }
    @Transactional
    public void deleteFile(Long fileId){
        try{
            UserFile file = fileRepository.findById(fileId).get();
            if(file==null)throw new NullPointerException("File is null");
            fileRepository.delete(file);
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
            UserFile userFile = new UserFile(
                    file.getOriginalFilename(),
                    new Date(
                            date.getYear(),
                            date.getMonthValue(),
                            date.getDayOfMonth()),
                    owner,
                    lobConverter.createBlob(file)
            );

            return fileRepository.save(userFile);
        }catch (Exception ex){
            log.info(ex.getMessage());
            throw new NullPointerException();
        }
    }

}
