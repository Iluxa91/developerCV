import React from 'react';
import s from './VattedTopic.module.scss'

type PropsType = {
    title: string
    stars: number
}

export const VattedTopic = (props:PropsType) => {
    return (
        <div className={s.block}>
            <span>{props.title}</span>
            <div>
                <span>{props.stars}</span>
                <span className={s.stars}>starstarstarstarstar</span>
            </div>

        </div>
    );
};
