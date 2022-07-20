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
            <div className={s.container}>
                <div className={s.title}>
                    <div className={s.circle}></div>
                    <h3>Senior Frontend Developer</h3>
                </div>
                <span>Sberbank</span>
                <div className={s.description}>
                    <div className={s.clockContainer}>
                        <div style={clockImg} ></div>
                        <span> 2 years 2 month | June 2019 - October 2021</span>
                    </div>
                    <span className={s.text}>Hello, I am a person who has a strong passion for programming. I have experience in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this direction and expanding them with new technologies. I'm planing to study Node.js, because my next focus is to become a FullStack Developer. I spend my leisure time improving my English and studying new technologies. Open for your suggestions.</span>
                    <span className={s.skillsTitle}>Languages</span>
                    <div className={s.languageContainer}>
                        <DevLang title={'JavaScript'} style={jsImg}/>
                        <DevLang title={'JavaSping'} style={jsImg}/>
                    </div>
                    <span className={s.skillsTitle}>Technologies</span>
                    <div className={s.languageContainer}>
                        <DevLang title={'React'} style={jsImg}/>
                        <DevLang title={'Node.js'} style={jsImg}/>
                    </div>

                </div>
            </div>
        </div>
    );
};
