import React from "react";
import {OptionTitle} from "../../../common/components/OptionTitle";
import bagIMG from "../../../assets/images/logo_1.jpg"
import s from "./WorkExperience.module.scss"
import {WorkDescription} from "./WorkDescription";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {workExperienceType} from "../profile-reducer";

export const WorkExperience = () => {
    const workExperiences = useSelector<AppRootStateType,workExperienceType[]>(state=>state.userCV.workExperiences)
    const bgIMG = {backgroundImage: `url(${bagIMG})`}
    return (
        <div className={s.block}>
            <OptionTitle title={'Work Experience'} style={bgIMG}/>
            <div className={s.container}>
                {workExperiences.map(el=><WorkDescription technologies={el.technologies} languages={el.languages} title={el.title} institutionTitle={el.institutionTitle} description={el.description} dates={el.dates}/>)}
            </div>
        </div>
    );
};
