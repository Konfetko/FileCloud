package com.example.filecloud.controller;

import com.example.filecloud.entity.UserFile;
import com.example.filecloud.fileUpload.LobConverter;
import com.example.filecloud.repository.UserFileRepository;
import com.example.filecloud.repository.UserRepository;
import com.example.filecloud.response.FileResponse;
import com.example.filecloud.service.FileService;
import com.example.filecloud.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin(value="http://localhost:3000",allowCredentials = "true")
@AllArgsConstructor
@RequestMapping("/files/")
@Slf4j
public class FileController {
    private final FileService fileService;
    private final UserService userService;
    private final UserFileRepository fileRepository;
    private final UserRepository userRepository;

    @PostMapping(path="/fileupload{userId}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadFile(@PathVariable("userId") Long userId,@RequestParam("file") MultipartFile file){
       fileService.saveFile(file,userId);
    }
    @GetMapping(path = "/getFiles{userId}")
    public ResponseEntity sendUserFiles(@PathVariable("userId") Long userId){
        List<FileResponse> files = fileService.getUserFiles(userId);
        return files==null
                ?ResponseEntity.badRequest().body("Файлы отстутствуют")
                :ResponseEntity.ok(files);
    }
    @GetMapping("/getFile{fileId}")
    public ResponseEntity sendUserFile(@PathVariable("fileId") Long fileId) throws IOException, SQLException {
        Blob blobFile = fileService.getUserFile(fileId);
        return blobFile==null
                ?ResponseEntity.badRequest().body("file is null")
                :ResponseEntity.ok(new InputStreamResource(blobFile.getBinaryStream()));



    }
}
