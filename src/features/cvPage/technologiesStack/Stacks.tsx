import React from 'react';
import {DeveloperStack} from "./DeveloperStack";
import s from './Stacks.module.scss'
import stckIMG from '../../../assets/images/logo_5.jpg'
import {OptionTitle} from "../../../common/components/OptionTitle";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {InitialStateType} from "../profile-reducer";

export const Stacks = () => {
    const stckImg = {backgroundImage:`url(${stckIMG})`}
    const userCV = useSelector<AppRootStateType,InitialStateType>(state => state.userCV)

    return (
        <div className={s.stackBlock}>
            <OptionTitle title={'Technologies stack'} style={stckImg}/>
            <div className={s.stackContainer} >
                <h2>Current stack</h2>
                <h3>Languages</h3>
                <div className={s.langContainer}>
                    {userCV.stacks.map(st=><DeveloperStack title={st.title} style={st.icon}/> )}
                </div>
                <h3>Technologies</h3>
                <div className={s.techContainer}>
                    {userCV.technologies.map(tc=><DeveloperStack title={tc.title} style={tc.icon}/> )}
                </div>
                <h2>Has experience in</h2>
                <div className={s.experContainer} >
                    {userCV.hasExperience.map(ex=><span>{ex}</span>)}
                </div>
            </div>
        </div>
    );
};
