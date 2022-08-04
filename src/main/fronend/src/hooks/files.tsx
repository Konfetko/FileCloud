import IUserFile from "../models/IUserFile";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {useParams} from "react-router";

export  function useFiles(){
    const [files,setFiles] = useState<IUserFile[]>([])
    const {store} = useContext(Context)
    const {id}=useParams()

    useEffect(()=>{
        store.getFiles(Number(id)).then(r=>setFiles(r))
    },[])
    return {files}
}