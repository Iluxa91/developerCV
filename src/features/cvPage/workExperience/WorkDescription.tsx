import React from 'react';
import s from "./WorkDescription.module.scss";
import {DeveloperStack} from "../technologiesStack/DeveloperStack";
import {ExperienceTitle} from "../../../common/components/ExperienceTitle";
import {StacksType} from "../profile-reducer";

type PropsType = {
    title:string
    institutionTitle:string
    description: string
    dates:string
    languages: StacksType[]
    technologies: StacksType[]
}

export const WorkDescription = (props:PropsType) => {

    return (
            <div className={s.container}>
                <ExperienceTitle title={props.title} institutionTitle={props.institutionTitle} dates={props.dates}/>
                <div className={s.description}>
                    <span className={s.text}>{props.description}</span>
                    <span className={s.skillsTitle}>Languages</span>
                    <div className={s.languageContainer}>
                        {props.languages.map(el=> <DeveloperStack title={el.title} style={el.icon}/>)}
                    </div>
                    <span className={s.skillsTitle}>Technologies</span>
                    <div className={s.languageContainer}>
                        {props.technologies.map(el=> <DeveloperStack title={el.title} style={el.icon}/>)}
                    </div>
                </div>
            </div>
    );
};
