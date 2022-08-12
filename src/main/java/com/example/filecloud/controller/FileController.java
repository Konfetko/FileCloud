package com.example.filecloud.controller;


import com.example.filecloud.response.FileResponse;
import com.example.filecloud.service.FileService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;


@RestController
@CrossOrigin(value="http://localhost:3000",allowCredentials = "true")
@AllArgsConstructor
@RequestMapping("/files/")
@Slf4j
public class FileController {
    private final FileService fileService;
    @PostMapping(path="/fileupload{userId}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadFile(@PathVariable("userId") Long userId,@RequestParam("file") MultipartFile file){
       fileService.saveFile(file,userId);
    }
    @GetMapping(path = "/fileList{userId}")
    public ResponseEntity sendUserFiles(@PathVariable("userId") Long userId){
        List<FileResponse> files = fileService.getUserFiles(userId);
        return files==null
                ?ResponseEntity.badRequest().body("Файлы отстутствуют")
                :ResponseEntity.ok(files);
    }
    @GetMapping("/file{fileId}")
    public ResponseEntity sendUserFile(@PathVariable("fileId") Long fileId) throws IOException, SQLException {
        Blob blobFile = fileService.getUserFile(fileId);
        return blobFile==null
                ?ResponseEntity.badRequest().body("file is null")
                :ResponseEntity.ok(new InputStreamResource(blobFile.getBinaryStream()));



    }
    @DeleteMapping("/file{fileId}")
    public ResponseEntity deleteUserFile(@PathVariable("fileId") Long fileId) {
        try{
            fileService.deleteFile(fileId);
            return ResponseEntity.ok("File was deleted");
        }catch (Exception ex){
            return ResponseEntity.badRequest().body("File isn't deleted | "+ex.getMessage());
        }
    }
}
