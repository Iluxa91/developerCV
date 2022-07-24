import React from 'react';
import s from './JobOptions.module.scss'

type JobOptionsType = {
    title: string
    // style: {backgroundImage: string}
    icon: any
}

export const JobOption = (props:JobOptionsType) => {
    return (
        <div className={s.container}>
            {props.icon}
                {/*<div style={props.style}></div>*/}
                <span>{props.title}</span>
        </div>
    );
};
