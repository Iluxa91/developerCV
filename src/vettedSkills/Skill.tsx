import React, {useState} from 'react';
import s from "./Skill.module.scss";
import img from "../assets/images/vettedBG.jpg";
import reactIMG from "../assets/images/reactImg.png";

const vatIMG = {
    backgroundImage:`url(${img})`
}
const reactImg = {
    backgroundImage:`url(${reactIMG})`
}

type PropsType = {
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
                    <div style={reactImg}></div>
                    <h3>{props.title}</h3>
                </div>
                <div className={s.grade}>
                    <span>{props.stars}</span>
                    <span>starstarstarstarstar</span>
                    <span onClick={(e)=> {
                        props.setIsCollapsed(!props.collapsed)
                    }}>collapse</span>
                </div>
            </div>
        </div>
    );
};
