import React, {useEffect, useRef, useState} from 'react';
import cls from '../scssModules/SingleFile.module.scss'
import ISingleFileProps from "../models/props/ISingleFileProps";
import useFile from "../hooks/file";
import {Img} from "react-image";
import DocViewer from "@cyntler/react-doc-viewer";
import Modal from "./Modal";


const SingleFile = ({blobFile}:ISingleFileProps) => {
    const [url,setUrl] = useState<string>("")
    useEffect(()=>{
        setUrl(URL.createObjectURL(blobFile))
    },[])

    return (
        <>
                {
                    <div>
                        <img alt="картинка" src={url}/>
                        <DocViewer documents={[{uri:url}]}/>
                    </div>
                }



        </>
    );
};

export default SingleFile;