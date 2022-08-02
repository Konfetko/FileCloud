import React from 'react';
import Layout from "../components/Layout";
import document from '../images/documents.png'
import cls from "../scssModules/MainPage.module.scss"
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <Layout>
            <div className={cls.background}>
                <div className={cls.nextLink}>
                    <div className={cls.uploadLink}>
                        <Link to={"/"} className={cls.uploadLink}>
                            <img className={cls.documentImage} src={require('../images/documents.png')}></img>
                        </Link>

                    </div>
                    <Link to={"/"} className={cls.link}>
                        <span className={cls.underImage}>Загрузіть файл</span>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default MainPage;