package com.example.filecloud.controller;

import com.example.filecloud.response.FileResponse;
import com.example.filecloud.service.FileService;
import com.example.filecloud.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@CrossOrigin(value="http://localhost:3000",allowCredentials = "true")
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
    @GetMapping(path = "/getFiles{userId}")
    public ResponseEntity sendUserFiles(@PathVariable("userId") Long userId){
        List<FileResponse> files = fileService.getUserFiles(userId);
        return files==null
                ?ResponseEntity.badRequest().body("Файлы отстутствуют")
                :ResponseEntity.ok(files);
    }
    @GetMapping(path = "/getFile{userId}&{fileTitle}")
    public ResponseEntity sendUserFile(@PathVariable("userId") Long userId,@PathVariable("fileTitle") String fileTitle){
        return ResponseEntity.ok(fileService.getUserFiles(userId));
    }
}
