import React, {useState} from 'react';
import FileList from "../components/FileList";
import Layout from "../components/Layout";
import ToolBar from "../components/ToolBar";
import cls from "../scssModules/UserPage.module.scss"
import SingleFile from "../components/SingleFile";
import {useUser} from "../hooks/user";
import FileService from "../services/FileService";
import UploadForm from "../components/UploadForm";
import Modal from "../components/Modal";
import IUserFileBlob from "../models/IUserFileBlob";
import IUserFile from "../models/IUserFile";
import About from "../components/About";

const UserPage = () => {
    const [isOpelFile,setOpenFile] = useState(false)
    const [openUpload,setOpenUpload]=useState(false)
    const [blob,setBlob] = useState<IUserFileBlob>()
    const openFile=async (file:IUserFile)=>{
        const fileService = new FileService()
        // @ts-ignore
        await fileService.getFile(file.idFile).then(res=>setBlob({info:file,file:res.data}))
        setOpenFile(true)
    }
    const closeFile=()=>{
        setOpenFile(false)
    }
    const closeUploadForm=()=>{
        setOpenUpload(false)
    }
    const openUploadForm=()=>{
        setOpenUpload(true)
    }
    const openContextMenu=(id:number,e:React.MouseEvent)=>{

    }

    return (

        <Layout>
            <div className={cls.doubleContainer}>
                <ToolBar openUploadForm={openUploadForm}/>
                <FileList openFile={openFile} openContextMenu={openContextMenu}/>
                <About/>
                { // @ts-ignore
                    isOpelFile && <Modal onClose={closeFile}><SingleFile blobFile={blob}/></Modal>
                }
                {
                    openUpload && <Modal onClose={closeUploadForm}><UploadForm/></Modal>
                }
            </div>
        </Layout>
    );
};

export default UserPage;