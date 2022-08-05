import React from 'react';
import IUserFile from "../models/IUserFile";
import cls from '../scssModules/File.module.scss'
interface IFileProps{
    file:IUserFile,
    onClick:(fileId:number)=>void
}

const File = ({file,onClick}:IFileProps) => {
    return (
        <div className={cls.outer} onClick={()=>onClick(file.idFile)}>
            <div className={cls.inner}>
                <div className={cls.title}>{file.title}</div>
                <div >
                    <img src={require('../images/filePNG.png')} alt="file" className={cls.image}/>
                </div>
                <div className={cls.upload}>{String(file.dateUpload).substring(0,10)}</div>
            </div>
            <div className={cls.hovered}></div>
        </div>
    );
};

export default File;