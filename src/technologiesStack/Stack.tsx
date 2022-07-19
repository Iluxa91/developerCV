import React from 'react';
import {DevLang} from "./DevLang";
import s from './Stack.module.scss'
import jsIMG from '../assets/images/JS.png'
import stckIMG from '../assets/images/logo_5.jpg'
import reactIMG from '../assets/images/reactImg.png'
import {OptionTitle} from "../common/components/OptionTitle";

const jsImg = {
    backgroundImage:`url(${jsIMG})`
}
const reactImg = {
    backgroundImage:`url(${reactIMG})`
}
const stckImg = {
    backgroundImage:`url(${stckIMG})`
}

export const Stack = () => {
    return (
        <div className={s.stackBlock}>
            {/*<div className={s.titleContainer}>*/}
            {/*    <div style={stckImg}></div>*/}
            {/*    <h2>Technologies stack</h2>*/}
            {/*</div>*/}
            <OptionTitle title={'Technologies stack'} style={stckImg}/>
            <div className={s.stackContainer} >
                <h2>Current stack</h2>
                <h3>Languages</h3>
                <div className={s.langContainer}>
                    <DevLang title={'JavaScript'} style={jsImg}/>
                    <DevLang title={'JavaScript'} style={jsImg}/>
                    <DevLang title={'JavaScript'} style={jsImg}/>
                    <DevLang title={'JavaScript'} style={jsImg}/>
                    <DevLang title={'JavaScript'} style={jsImg}/>
                </div>
                <h3>Technologies</h3>
                <div className={s.techContainer}>
                    <DevLang title={'React'} style={reactImg}/>
                    <DevLang title={'React'} style={reactImg}/>
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
