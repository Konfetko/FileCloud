package com.example.filecloud.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FileResponse {

    private Long idFile;
    private String title;
    private Date dateUpload;

}
