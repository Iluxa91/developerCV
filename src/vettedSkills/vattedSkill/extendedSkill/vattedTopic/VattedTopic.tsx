import React from 'react';
import s from './VattedTopic.module.scss'
import {Rating} from "@mui/material";

type PropsType = {
    title: string
    stars: number
}

export const VattedTopic = (props:PropsType) => {
    return (
        <div className={s.block}>
            <span>{props.title}</span>
            <div className={s.starsContainer}>
                <span>{props.stars}</span>
                <Rating name={'half-rating'} defaultValue={props.stars} precision={0.1} readOnly/>
                {/*<span className={s.stars}>starstarstarstarstar</span>*/}
            </div>

        </div>
    );
};
