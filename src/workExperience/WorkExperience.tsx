import React from "react";
import {OptionTitle} from "../common/components/OptionTitle";
import bagIMG from "../assets/images/logo_1.jpg"
import s from "./WorkExperience.module.scss"
import {DevLang} from "../technologiesStack/DevLang";
import jsIMG from "../assets/images/JS.png";
import clcIMG from "../assets/images/logo_2.jpg";

const bgIMG = {
    backgroundImage: `url(${bagIMG})`
}
const jsImg = {
    backgroundImage:`url(${jsIMG})`
}
const clockImg = {
    backgroundImage:`url(${clcIMG})`
}

export const WorkExperience = () => {
    return (
        <div className={s.block}>
            <OptionTitle title={'Work Experience'} style={bgIMG}/>
            <div>
                <div className={s.title}>
                    <div className={s.circle}></div>
                    <h3>Senior Frontend Developer</h3>
                </div>
                <span>Sberbank</span>
                <div className={s.discription}>
                    <div style={clockImg} className={s.clock}></div>
                    <span> 2 years 2 month | June 2019 - October 2021</span>
                    <div>Hello, I am a person who has a strong passion for programming. I have experience in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this direction and expanding them with new technologies. I'm planing to study Node.js, because my next focus is to become a FullStack Developer. I spend my leisure time improving my English and studying new technologies. Open for your suggestions.</div>
                    <span>Languages</span>
                    <DevLang title={'JavaScript'} style={jsImg}/>
                    <DevLang title={'JavaSping'} style={jsImg}/>
                    <span>Technologies</span>
                    <DevLang title={'React'} style={jsImg}/>
                    <DevLang title={'Node.js'} style={jsImg}/>
                </div>
            </div>
        </div>
    );
};
