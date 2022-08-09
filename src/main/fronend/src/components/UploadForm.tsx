import React, {useState} from 'react';
import cls from '../scssModules/UploadForm.module.scss'
import FileService from "../services/FileService";
import {useUser} from "../hooks/user";
import axios from "axios";


const UploadForm = () => {
    const [selectedFile, setSelectedFile] = useState<Blob>();
    const {user} = useUser()

    const handleSubmit = async(event:React.FormEvent) => {
        event.preventDefault()
        const formData = new FormData();
        // @ts-ignore
        formData.append("file", selectedFile);
        const fileService = new FileService()
        try {
            const response = await fileService.uploadFile(Number(user?.idUser),formData)

        } catch(error) {
            console.log(error)
        }
    }

    const handleFileSelect = (files:FileList) => {
        setSelectedFile(files[0])
    }



    return (
        <>
            <div className={cls.chooseFile}>
                <form onSubmit={handleSubmit}>
                    {    // @ts-ignore
                        <input type="file" onChange={(e)=>handleFileSelect(e.target.files)}/>
                    }
                    <input type="submit" value="Upload File" />
                </form>
            </div>
        </>
    );
};

export default UploadForm;