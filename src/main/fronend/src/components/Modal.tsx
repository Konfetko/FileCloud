import React from 'react';
import cls from "../scssModules/Modal.module.scss";

interface IModalProps{
    children:React.ReactNode,
    onClose:()=>void
}
const Modal = ({children,onClose}:IModalProps) => {
    return (
        <>
            <div className={cls.opacityContainer} onClick={onClose}></div>
            <div className={cls.innerDocument}>
                {children}
            </div>
        </>
    );
};

export default Modal;