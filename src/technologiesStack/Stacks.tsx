import React from 'react';
import {DeveloperStack} from "./DeveloperStack";
import s from './Stacks.module.scss'
import jsIMG from '../assets/images/JS.png'
import stckIMG from '../assets/images/logo_5.jpg'
import reactIMG from '../assets/images/reactImg.png'
import {OptionTitle} from "../common/components/OptionTitle";
import BuildIcon from '@mui/icons-material/Build';

export const Stacks = () => {
    const jsImg = {
        backgroundImage:`url(${jsIMG})`
    }
    const reactImg = {
        backgroundImage:`url(${reactIMG})`
    }
    const stckImg = {
        backgroundImage:`url(${stckIMG})`
    }

    return (
        <div className={s.stackBlock}>
            <OptionTitle title={'Technologies stack'} style={stckImg}/>
            <div className={s.stackContainer} >
                <h2>Current stack</h2>
                <h3>Languages</h3>
                <div className={s.langContainer}>
                    <DeveloperStack title={'JavaScript'} style={jsImg}/>
                    <DeveloperStack title={'JavaScript'} style={jsImg}/>
                    <DeveloperStack title={'JavaScript'} style={jsImg}/>
                    <DeveloperStack title={'JavaScript'} style={jsImg}/>
                    <DeveloperStack title={'JavaScript'} style={jsImg}/>
                    <DeveloperStack title={'JavaScript'} style={jsImg}/>
                </div>
                <h3>Technologies</h3>
                <div className={s.techContainer}>
                    <DeveloperStack title={'React'} style={reactImg}/>
                    <DeveloperStack title={'React'} style={reactImg}/>
                </div>
                <h2>Has experience in</h2>
                <div className={s.experContainer} >
                    <span>Redux</span>
                    <span>Azure</span>
                </div>
            </div>
        </div>
    );
};
