import React from 'react';
import {Link} from "react-router-dom";
import cls from "../scssModules/Header.module.scss"

const Header = () => {
    return (
        <header >
            <nav className={cls.headContainer}>
            <span className={cls.logo}>
                <Link
                    to={"/"}
                    className={cls.logoLink}>
                        FileCloud</Link>
            </span>
                <div className={cls.links}>

                <span
                    className={cls.link}>
                    <Link
                        to={"/auths"}
                        className={cls.noneDecor}>
                        Авторізація</Link>
                </span>
                    <span
                        className={cls.link}>
                    <Link
                        to={"/"}
                        className={cls.noneDecor}>
                        Главная</Link>
                </span>
                </div>
            </nav>
        </header>

    );
};

export default Header;