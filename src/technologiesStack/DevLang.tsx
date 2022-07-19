import React from 'react';
import s from './DevLang.module.scss'

type DevLangType = {
    title: string
    style: {backgroundImage:string}
}

export const DevLang = (props:DevLangType) => {
    return (
        <div className={s.container}>
            <div style={props.style}></div>
            <span>{props.title}</span>
        </div>
    );
};
