import React from 'react';
import cls from "../scssModules/ToolBar.module.scss"

interface IToolBarProps{
    openUploadForm:()=>void
}

const ToolBar = ({openUploadForm}:IToolBarProps) => {
    return (
        <div className={cls.bar}>
            <div className={cls.innerBar}>
                <h2>Вспомогательная панель</h2>
                <button onClick={openUploadForm} className={cls.button}> Загрузить файл</button>
            </div>
        </div>
    );
};

export default ToolBar;