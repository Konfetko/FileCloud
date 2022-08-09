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

const UserPage = () => {
    const [isOpelFile,setOpenFile] = useState(false)
    const [openUpload,setOpenUpload]=useState(false)
    const [blob,setBlob] = useState<Blob>()
    const {user} = useUser()
    const openFile=async (fileId:number)=>{
        alert(fileId)
        console.log(user?.idUser)
        const fileService = new FileService()
        // @ts-ignore
        await fileService.getFile(fileId).then(res=>setBlob(res.data))
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