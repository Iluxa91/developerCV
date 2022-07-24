import React from 'react';
import {OptionTitle} from "../../../common/components/OptionTitle";
import educImg from "../../../assets/images/education.jpg"
import {EducationUnit} from "./EducationUnit";
import s from "./Education.module.scss"

export const Education = () => {

    const educIMG = {
        backgroundImage: `url(${educImg})`
    }
    return (
        <div className={s.block}>
            <OptionTitle title={'Education'} style={educIMG}/>
            <EducationUnit/>
        </div>
    );
};