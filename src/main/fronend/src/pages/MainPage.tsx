import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import cls from "../scssModules/MainPage.module.scss"
import {Link} from "react-router-dom";
import {useUser} from "../hooks/user";

const MainPage = () => {
    const {user} = useUser()
    const userId = user?.idUser
    const link:string = user===null||user===undefined?"/auths":`/user/files${userId}`

    return (


            <Layout>

                <div className={cls.background}>
                    <div className={cls.triangle}>
                        <div className={cls.top}></div>
                        <div className={cls.down}></div>
                        <div className={cls.right}></div>
                        <div className={cls.left}></div>
                        <div className={cls.circle}></div>

                    </div>
                    <div className={cls.nextLink}>
                        <div className={cls.uploadLink}>
                            <Link to={link} className={cls.uploadLink}>
                                <img className={cls.documentImage} src={require('../images/documents.png')}></img>
                            </Link>

                        </div>
                        <Link to={link} className={cls.link}>
                            <span className={cls.underImage}>Загрузіть файл</span>
                        </Link>
                    </div>

                </div>


            </Layout>
    );
};

export default MainPage;