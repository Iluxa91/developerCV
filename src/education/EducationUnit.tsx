import React from 'react';
import s from './EducationUnit.module.scss'
import {ExperienceTitle} from "../common/components/ExperienceTitle";

export const EducationUnit = () => {
    return (
        <div className={s.block} >
           <ExperienceTitle title={'Computer Science'} institutionTitle={'Boston Academy'}/>
           <ExperienceTitle title={'Computer Science'} institutionTitle={'Boston Academy'}/>
        </div>
    );
};
