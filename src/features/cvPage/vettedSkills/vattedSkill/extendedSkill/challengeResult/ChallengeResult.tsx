import React from 'react';
import s from './ChallengeResult.module.scss'
import {Rating} from "@mui/material";

type PropsType = {
    title: string
    rating: number
}

export const ChallengeResult = (props:PropsType) => {
    return (
        <div className={s.block}>
            <span>{props.title}</span>
            <div className={s.starsContainer}>
                <span>{props.rating}</span>
                <Rating name={'half-rating'} defaultValue={props.rating} precision={0.1} readOnly/>
            </div>

        </div>
    );
};
