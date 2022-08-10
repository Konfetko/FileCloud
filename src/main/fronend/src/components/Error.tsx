import React from 'react';
import cls from '../scssModules/Error.module.scss'

interface IErrorProps{
    error:string
}
const Error = ({error}:IErrorProps) => {
    return (
        <div className={cls.errorBlock}>
            {error}
        </div>
    );
};

export default Error;