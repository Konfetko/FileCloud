import React, {useEffect, useState} from 'react';
import ISingleFileProps from "../models/props/ISingleFileProps";


const SingleFile = ({blobFile}:ISingleFileProps) => {
    const [url,setUrl] = useState<string>("")
    const [text,setText] = useState<string>("")
    const [element,setElement] = useState<HTMLElement>()

    const chooseFileFormat=()=>{
        const arr = blobFile.info.title.split('.')
        const format = arr[arr.length-1]
        switch (format){
            case "txt":
                blobFile.file.text().then(r=>setText(r))
                 return <div>{text}</div>
            case "jpg" ||"png"||"jpeg":
                setUrl(URL.createObjectURL(blobFile.file))
                return <img src={url} alt="ваша картинка"/>
        }
    }
    useEffect(()=>{
        // @ts-ignore
        setElement(chooseFileFormat())
    },[])


    return (
        <>
            {element}
        </>
    );
};

export default SingleFile;