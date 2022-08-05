import React from 'react';
import {useFiles} from "../hooks/files";
import File from '../components/File'
import cls from '../scssModules/FileList.module.scss'

interface IFileListProps{
    openFile:(fileId:number)=>void
}

const FileList = ({openFile}:IFileListProps) => {
    const {files}=useFiles()
    return (
        <div className={cls.container}>
            {files.map(x=><File file={x} onClick={openFile}/>)}
        </div>
    );
};

export default FileList;