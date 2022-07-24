import React from 'react';
import {OptionTitle} from "../../../common/components/OptionTitle";
import vetImg from "../../../assets/images/logo_6.jpg"
import {VattedSkill} from "./vattedSkill/VattedSkill";
import s from "./VattedSkills.module.scss"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {VattedSkillsType} from "../profile-reducer";

const vetIMG = {backgroundImage: `url(${vetImg})`}

export const VettedSkills = () => {
    const vattedSkills = useSelector<AppRootStateType,VattedSkillsType[]>(state => state.userCV.vattedSkills)
    return (
        <div className={s.skillsblock}>
            <OptionTitle title={'Vetted Skills'} style={vetIMG}/>
            <div className={s.skillsContainer}>
                <span>This developer passed 3+ hours of rigorous for the following skills</span>
                <div className={s.question}>
                    <HelpOutlineIcon/>
                    <span>What is a Vetted skill? Learn more about our skill assessment methodology</span>
                </div>
                {vattedSkills.map(el=><VattedSkill title={el.title} rating={el.rating} id={el.id} icon={el.icon}/>)}
            </div>
        </div>
    );
};
