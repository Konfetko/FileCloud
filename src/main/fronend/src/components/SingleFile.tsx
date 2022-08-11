import React, {useEffect, useRef, useState} from 'react';
import ISingleFileProps from "../models/props/ISingleFileProps";
import cls from '../scssModules/SingleFile.module.scss'
import FileService from "../services/FileService";


const SingleFile = ({blobFile,saveFile,deleteFile}:ISingleFileProps) => {
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



    return (
        <>
            <div className={cls.toolBar}>
                <button className={cls.button} onClick={()=>saveFile()}>Сохранить</button>
                <button className={cls.button} onClick={()=>deleteFile(blobFile)}>Удалить</button>
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