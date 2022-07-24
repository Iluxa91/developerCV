import React from 'react';
import s from "./Skill.module.scss";
import img from "../../../../../assets/images/vettedBG.jpg";
import reactIMG from "../../../../../assets/images/reactImg.png";
import {Rating} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const vatIMG = {
    backgroundImage:`url(${img})`
}
const reactImg = {
    backgroundImage:`url(${reactIMG})`
}

type PropsType = {
    icon: { backgroundImage: string }
    title:string
    stars:number
    setIsCollapsed: (collapsed:boolean)=>void
    collapsed: boolean
}

export const Skill = (props:PropsType) => {

    return (
        <div>
            <div className={s.introduction}>
                <div style={vatIMG}></div>
            </div>
            <div className={s.container}>
                <div className={s.skill}>
                    <div style={props.icon}></div>
                    <h3>{props.title}</h3>
                </div>
                <div className={s.grade}>
                    <span className={s.numberRating} >{props.stars}</span>
                    <Rating name={'half-rating'} defaultValue={props.stars} precision={0.1} readOnly/>
                    {!props.collapsed
                        ? <ExpandMoreIcon onClick={()=>props.setIsCollapsed(!props.collapsed)}/>
                        : <ExpandLessIcon onClick={()=>props.setIsCollapsed(!props.collapsed)}/>}
                </div>
            </div>
        </div>
    );
};
