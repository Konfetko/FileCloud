import React, {useEffect} from 'react';
import cls from '../scssModules/File.module.scss'
import IFileProps from "../models/props/IFileProps";
import Card from "./Card";


const File = ({file,openFile}:IFileProps) => {

    return (
        <Card width={310} height={310}>
            <div
                className={cls.outer}
                onDoubleClick={()=>openFile(file)}
            >
                <div className={cls.inner}>

                    <div >
                        <img src={require('../images/filePNG.png')} alt="file" className={cls.image}/>
                    </div>
                    <div className={cls.title}>{file.title}</div>
                    <div className={cls.upload}>{new Date(file.dateUpload).toDateString()}</div>
                </div>
                <div className={cls.hovered}></div>
            </div>
        </Card>
    );
};

export default File;