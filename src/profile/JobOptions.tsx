import React from 'react';
import s from './JobOptions.module.scss'

type JobOptionsType = {
    title: string
    style: {backgroundImage: string}
}

export const JobOption = (props:JobOptionsType) => {
    return (
        <div className={s.container}>
                <div style={props.style}></div>
                <span>{props.title}</span>
        </div>
    );
};
