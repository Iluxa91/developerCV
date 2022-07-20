import React from "react";
import {OptionTitle} from "../common/components/OptionTitle";
import bagIMG from "../assets/images/logo_1.jpg"
import s from "./WorkExperience.module.scss"
import {WorkDescription} from "./WorkDescription";

const bgIMG = {
    backgroundImage: `url(${bagIMG})`
}

export const WorkExperience = () => {
    return (
        <div className={s.block}>
            <OptionTitle title={'Work Experience'} style={bgIMG}/>
            <div className={s.container}>
                <WorkDescription/>
                <WorkDescription/>
            </div>
        </div>
    );
};
