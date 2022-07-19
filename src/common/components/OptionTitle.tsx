import React from 'react';
import s from './OptionTitle.module.scss'

type PropsType = {
    title: string
    style: {backgroundImage:string}
}



export const OptionTitle = (props: PropsType) => {
    return (
        <div className={s.titleContainer} >
                <div style={props.style}></div>
                <h2>{props.title}</h2>
        </div>
    );
};