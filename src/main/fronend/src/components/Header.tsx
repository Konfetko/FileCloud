import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cls from "../scssModules/Header.module.scss"
import {Context} from "../index";
import {useUser} from "../hooks/user";

const Header = () => {
    const {user} = useUser()
    const {store} = useContext(Context)
    const logOut = async()=>{
        await store.logout()
    }
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

                    {
                        user===null||user===undefined
                            ?<span
                            className={cls.link}>
                                <Link
                                to={"/auths"}
                                className={cls.noneDecor}>
                                Авторизация</Link>
                            </span>
                            :<span
                                className={cls.link}>
                                <Link
                                    to={`/user/files${user?.idUser}`}
                                    className={cls.noneDecor}>
                                Мои файлы</Link>
                            </span>
                    }
                    <span
                        className={cls.link}>
                        <Link
                        to={"/"}
                        className={cls.noneDecor}>
                        Главная</Link>
                    </span>
                    {
                        user!==null&& user!==undefined?
                        <span
                            className={cls.link }>
                        <Link
                            to={"/"}
                            onClick={logOut}
                            className={cls.noneDecor+" "+cls.logout}>
                        Выйти</Link>
                        </span>:<></>
                    }
                </div>
            </nav>
        </header>

    );
};

export default Header;