package com.example.filecloud.fileUpload;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Blob;
import java.sql.Clob;
import java.sql.SQLException;

public interface BlobConverter {
    Blob createBlob(MultipartFile file) throws IOException, SQLException;

}
