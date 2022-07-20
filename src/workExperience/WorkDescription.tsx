import React from 'react';
import s from "./WorkDescription.module.scss";
import {DeveloperStack} from "../technologiesStack/DeveloperStack";
import jsIMG from "../assets/images/JS.png";
import reactIMG from "../assets/images/reactImg.png";
import nodeIMG from "../assets/images/nodejs_logo.png";
import javaspringIMG from "../assets/images/javaspring.png";
import {ExperienceTitle} from "../common/components/ExperienceTitle";


export const WorkDescription = () => {
    const jsImg = {
        backgroundImage:`url(${jsIMG})`
    }
    const reactImg = {
        backgroundImage:`url(${reactIMG})`
    }
    const nodeImg = {
        backgroundImage:`url(${nodeIMG})`
    }
    const javaspringImg = {
        backgroundImage:`url(${javaspringIMG})`
    }

    return (
            <div className={s.container}>
                <ExperienceTitle title={'Senior Frontend Developer'} institutionTitle={'Sberbank'}/>
                <div className={s.description}>
                    <span className={s.text}>Hello, I am a person who has a strong passion for programming. I have experience in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this direction and expanding them with new technologies. I'm planing to study Node.js, because my next focus is to become a FullStack Developer. I spend my leisure time improving my English and studying new technologies. Open for your suggestions.</span>
                    <span className={s.skillsTitle}>Languages</span>
                    <div className={s.languageContainer}>
                        <DeveloperStack title={'JavaScript'} style={jsImg}/>
                        <DeveloperStack title={'JavaSping'} style={javaspringImg}/>
                    </div>
                    <span className={s.skillsTitle}>Technologies</span>
                    <div className={s.languageContainer}>
                        <DeveloperStack title={'React'} style={reactImg}/>
                        <DeveloperStack title={'Node.js'} style={nodeImg}/>
                    </div>

                </div>
            </div>
    );
};
