package com.example.filecloud.controller;

import com.example.filecloud.service.FileService;
import com.example.filecloud.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin("*")
@AllArgsConstructor
@RequestMapping("/files/")
public class FileController {
    private final FileService fileService;
    private final UserService userService;

    @PostMapping(path="/fileupload{userId}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadFile(@PathVariable("userId") Long userId,@RequestParam("file") MultipartFile file){
       fileService.saveFile(file,userId);
    }
}
