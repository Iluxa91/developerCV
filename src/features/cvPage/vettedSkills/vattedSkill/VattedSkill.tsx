import React, {useState} from 'react';
import {ExtendedSkill} from "./extendedSkill/ExtendedSkill";
import s from './VattedSkill.module.scss'
import {Skill} from "./skill/Skill";

type PropsType = {
    title: string
    rating: number
    id: string
    icon: { backgroundImage: string }
}

export const VattedSkill = (props:PropsType) => {

    const [collapsed, setIsCollapsed]=useState(false)
    return (
        <div className={s.block} >
            <Skill
                icon={props.icon}
                title={props.title}
                stars={props.rating}
                setIsCollapsed={setIsCollapsed}
                collapsed={collapsed}
            />
            {collapsed && <ExtendedSkill id={props.id}/>}
        </div>
    );
};
