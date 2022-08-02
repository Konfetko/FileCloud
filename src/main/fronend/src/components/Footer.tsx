import React from 'react';
import cls from '../scssModules/Footer.module.scss'

const Footer = () => {
    return (
        <div className={cls.background}>
            <div className={cls.lists}>
                <ul className={cls.listAbilities}>
                    <li>Загрузіть</li>
                    <li>Удаліть</li>
                    <li>Просмотреть файлы</li>
                </ul>
            </div>
            <div className={cls.createdBy}>
                Created by: Yeroshevich V.A.
            </div>
        </div>
    );
};

export default Footer;