import React from 'react';
import cls from "../scssModules/ToolBar.module.scss"

interface IToolBarProps{
    openUploadForm:()=>void
}

const ToolBar = ({openUploadForm}:IToolBarProps) => {
    return (
        <div className={cls.bar}>
            <button onClick={openUploadForm}> Загрузить файл</button>
        </div>
    );
};

export default ToolBar;