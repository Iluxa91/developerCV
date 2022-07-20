import React from 'react';
import s from "./ExperienceTitle.module.scss";
import clcIMG from "../../assets/images/logo_2.jpg";


type PropsType = {
    title:string
    institutionTitle: string
}
export const ExperienceTitle = (props:PropsType) => {

    const clockImg = {
        backgroundImage:`url(${clcIMG})`
    }
    return (
        <div>
            <div className={s.title}>
                <div className={s.circle}></div>
                <h2>{props.title}</h2>
            </div>
            <span>{props.institutionTitle}</span>
            <div className={s.clockContainer}>
                <div style={clockImg} ></div>
                <span> 2 years 2 month | June 2019 - October 2021</span>
            </div>
        </div>

    );
};
