import React from 'react';
import cls from '../scssModules/Card.module.scss'

interface ICardProps{
    children:React.ReactNode,
    width:number,
    height:number
}

const Card = ({children,width,height}:ICardProps) => {
    return (
        <div className={cls.outerBorder} style={{"width":width,"height":height}}>
            {children}
        </div>
    );
};

export default Card;