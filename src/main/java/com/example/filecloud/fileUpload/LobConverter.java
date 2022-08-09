package com.example.filecloud.fileUpload;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.*;
import java.sql.Blob;
import java.sql.SQLException;

@Component
public class LobConverter implements BlobConverter{


    @Override
    public Blob createBlob(MultipartFile file) throws IOException, SQLException {
        return new SerialBlob(file.getBytes());
    }
}
