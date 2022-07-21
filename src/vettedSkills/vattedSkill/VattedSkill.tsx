import React, {useState} from 'react';
import {ExtendedSkill} from "./extendedSkill/ExtendedSkill";
import s from './VattedSkill.module.scss'
import {Skill} from "./skill/Skill";

type PropsType = {
    title: string
    stars: number
}

export const VattedSkill = (props:PropsType) => {
    const [collapsed, setIsCollapsed]=useState(false)
    return (
        <div className={s.block} >
            <Skill
                title={props.title}
                stars={props.stars}
                setIsCollapsed={setIsCollapsed}
                collapsed={collapsed}
            />
            {collapsed && <ExtendedSkill />}

        </div>
    );
};