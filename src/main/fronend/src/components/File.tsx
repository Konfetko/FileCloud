import React from 'react';
import IUserFile from "../models/IUserFile";
interface IFileProps{
    file:IUserFile
}

const File = ({file}:IFileProps) => {
    return (
        <div>
            <h1>{file.title}</h1>
        </div>
    );
};

export default File;