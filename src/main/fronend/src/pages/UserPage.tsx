import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import  {useFiles} from "../hooks/files";
import IUserFile from "../models/IUserFile";

const UserPage = () => {
    const {store} = useContext(Context)
    const {files}=useFiles()

    return (
        <div>
            {files.map(x=><h1 key={x.idFile}>{x.title}</h1>)}
        </div>
    );
};

export default UserPage;