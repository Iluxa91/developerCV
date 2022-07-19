import React from 'react';
import {OptionTitle} from "../common/components/OptionTitle";
import vetImg from "../assets/images/logo_6.jpg"
import {VattedSkill} from "./VattedSkill";
import s from "./VattedSkills.module.scss"
import {Skill} from "./Skill";

const vetIMG = {
    backgroundImage: `url(${vetImg})`
}

export const VettedSkills = () => {
    return (
        <div className={s.skillsblock}>
            <OptionTitle title={'Vetted Skills'} style={vetIMG}/>
            <div className={s.skillsContainer}>
                <span>This developer passed 3+ hours of rigorous for the folowwing skills</span>
                <div className={s.question}>
                    <div>?</div>
                    <span>What is a Vetted skill? Learn more about our skill asassment methodology</span>
                </div>
                <VattedSkill title={'React'} stars={4.8}/>
                <VattedSkill title={'React'} stars={4.8}/>

            </div>
        </div>
    );
};
