import React from 'react';
import cls from '../scssModules/File.module.scss'
import IFileProps from "../models/props/IFileProps";


const File = ({file,openFile,openContextMenu}:IFileProps) => {
    return (
        <div
            className={cls.outer}
            onContextMenu={(e)=>openContextMenu(file.idFile,e)}
            onDoubleClick={()=>openFile(file)}
        >
            <div className={cls.inner}>

                <div >
                    <img src={require('../images/filePNG.png')} alt="file" className={cls.image}/>
                </div>
                <div className={cls.title}>{file.title}</div>
                <div className={cls.upload}>{file.dateUpload.toString()}</div>
            </div>
            <div className={cls.hovered}></div>
        </div>
    );
};

export default File;