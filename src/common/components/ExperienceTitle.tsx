import React from 'react';
import s from "./ExperienceTitle.module.scss";
import clcIMG from "../../assets/images/logo_2.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type PropsType = {
    title:string
    institutionTitle: string
    dates:string
}
export const ExperienceTitle = (props:PropsType) => {
    // const clockImg = {backgroundImage:`url(${clcIMG})`}
    return (
        <div>
            <div className={s.title}>
                <div className={s.circle}></div>
                <h2>{props.title}</h2>
            </div>
            <span className={s.subTitle}>{props.institutionTitle}</span>
            <div className={s.clockContainer}>
                <AccessTimeIcon/>
                {/*<div style={clockImg} ></div>*/}
                <span>{props.dates}</span>
            </div>
        </div>

    );
};
