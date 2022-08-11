package com.example.filecloud.converter;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;

public interface BlobConverter {
    Blob createBlob(MultipartFile file) throws IOException, SQLException;

}
