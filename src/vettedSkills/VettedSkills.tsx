import React from 'react';
import {OptionTitle} from "../common/components/OptionTitle";
import vetImg from "../assets/images/logo_6.jpg"
import {VattedSkill} from "./vattedSkill/VattedSkill";
import s from "./VattedSkills.module.scss"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const vetIMG = {
    backgroundImage: `url(${vetImg})`
}

export const VettedSkills = () => {
    return (
        <div className={s.skillsblock}>
            <OptionTitle title={'Vetted Skills'} style={vetIMG}/>
            <div className={s.skillsContainer}>
                <span>This developer passed 3+ hours of rigorous for the following skills</span>
                <div className={s.question}>
                    <HelpOutlineIcon/>
                    <span>What is a Vetted skill? Learn more about our skill assessment methodology</span>
                </div>
                <VattedSkill title={'React'} stars={4.5}/>
                <VattedSkill title={'React'} stars={3.3}/>

            </div>
        </div>
    );
};
