import React from 'react';
import s from './EducationUnit.module.scss'
import {ExperienceTitle} from "../../../common/components/ExperienceTitle";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {EducationType} from "../profile-reducer";

export const EducationUnit = () => {
    const education = useSelector<AppRootStateType,EducationType[]>(state=>state.userCV.education)
    return (
        <div className={s.block} >
            {education.map(el=><ExperienceTitle title={el.title} institutionTitle={el.institutionTitle} dates={el.dates} />)}
        </div>
    );
};
