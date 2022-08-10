import React, {useEffect, useRef, useState} from 'react';
import ISingleFileProps from "../models/props/ISingleFileProps";
import cls from '../scssModules/SingleFile.module.scss'
import FileService from "../services/FileService";


const SingleFile = ({blobFile}:ISingleFileProps) => {
    const [url,setUrl] = useState<string>("")
    const [text,setText] = useState<string>("")
    const [isImage,setIsImage]=useState<boolean>(false)
    const aRef = useRef<HTMLHRElement>(null)

    useEffect(()=>{
        const arr = blobFile.info.title.split('.')
        const format = arr[arr.length-1]
        switch (format){
            case "txt":
                blobFile.file.text().then(r=>setText(r))
                setIsImage(false)
                break
            case "jpg" ||"png"||"jpeg":
                setUrl(URL.createObjectURL(blobFile.file))
                setIsImage(true)
                break
        }
    },[])

    const saveFile=()=>{
        // @ts-ignore
        aRef.current.click()
    }
    const deleteFile=()=>{
        // eslint-disable-next-line no-restricted-globals
        let result:boolean = confirm("Вы уверены что хотите удалить файл?")
        if(!result)return
        const fileService:FileService = new FileService()
        fileService.deleteFile(blobFile.info.idFile).then(r=>document.location.reload()).catch(e=>console.log(e))
    }

    return (
        <>
            <div className={cls.toolBar}>
                <button className={cls.button} onClick={saveFile}>Сохранить</button>
                <button className={cls.button} onClick={deleteFile}>Удалить</button>
            </div>
            {
                // @ts-ignore
                <a ref={aRef} href={url} download={blobFile.info.title}></a>
            }


            {
                isImage
                ? <div><img src={url} alt="your image"/></div>
                : <div>{text}</div>
            }
        </>
    );
};

export default SingleFile;