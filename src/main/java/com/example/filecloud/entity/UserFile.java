package com.example.filecloud.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Blob;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "files")
public class UserFile {
    @Id
    @Column(name = "idfile")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFile;

    @Column(name ="title")
    private String title;

    @Column(name = "dateupload")
    private Date dateUpload;

    //@JsonBackReference
    @ManyToOne
    @JoinColumn(name = "iduser",nullable = false)
    private User user;

    //@Lob
    //@Column(name = "fileBin")
    //private Blob fileBin;

    public UserFile(String title, Date dateUpload, User user) {
        this.title = title;
        this.dateUpload = dateUpload;
        this.user = user;
    }
//    @JsonBackReference
//    @ManyToOne
//    @JoinColumn(name = "iduser")
//
//    public User getUser() {
//        return user;
//    }
}
