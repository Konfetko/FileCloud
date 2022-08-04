import React from 'react';
import {useFiles} from "../hooks/files";
import File from '../components/File'
import cls from '../scssModules/FileList.module.scss'

const FileList = () => {
    const {files}=useFiles()
    return (
        <div className={cls.container}>
            {files.map(x=><File file={x}/>)}
        </div>
    );
};

export default FileList;