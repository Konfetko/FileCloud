import React from 'react';
import cls from '../scssModules/About.module.scss'

const About = () => {
    return (
        <div className={cls.mainContainer}>
            <div className={cls.title}>Сервис поддерживает файлы с расширением:</div>
            <div className={cls.formats}>
                TXT,JPG,JPEG,PNG
            </div>
            <div className={cls.instructions}>
                <div className={cls.instruction}>
                    Для открытия файла, необходимо кликнуть два раза по нему
                </div>
                <div className={cls.instruction}>
                    Чтобы загрузить файл на сервер, воспользуйтесь вспомогательной панелью
                </div>
            </div>
        </div>
    );
};

export default About;