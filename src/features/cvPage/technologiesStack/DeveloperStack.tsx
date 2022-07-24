import React from 'react';
import s from './DeveloperStack.module.scss'

type PropsType = {
    title: string
    style: {backgroundImage:string}
}

export const DeveloperStack = (props:PropsType) => {
    return (
        <div className={s.container}>
            <div style={props.style}></div>
            <span>{props.title}</span>
        </div>
    );
};
