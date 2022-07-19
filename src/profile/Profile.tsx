import React from 'react';
import s from './Profile.module.scss'
import {JobOption} from "./JobOptions";
import bgImg from '../assets/images/logo_1.jpg'
import clcImg from '../assets/images/logo_2.jpg'
import doneImg from '../assets/images/logo_3.jpg'
import listImg from '../assets/images/logo_4.jpg'

type ProfilePropsType = {
    name: string
}

const bagIMG = {
    backgroundImage: `url(${bgImg})`
}
const clockIMG = {
    backgroundImage: `url(${clcImg})`
}
const doneIMG = {
    backgroundImage: `url(${doneImg})`
}
const listIMG = {
    backgroundImage: `url(${listImg})`
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profileBlock}>
            <div className={s.imageContainer}>image</div>
            <div className={s.descriptionContainer}>
                <div className={s.nameContainer}>
                    <div>
                        <h1>{props.name}</h1>
                        <h3>Senior Frontend Developer</h3>
                    </div>
                    <div className={s.buttons}>
                        <button className={s.shareBut}>Share</button>
                        <button>Book a call</button>
                    </div>
                </div>
                <JobOption
                    title={'6 years - total work experience'}
                    style={bagIMG}
                />
                <JobOption
                    title={'Overlap with your time zone: XXam - XXpm'}
                    style={clockIMG}/>
                <JobOption
                    title={'Availability: Ready to start now'}
                    style={doneIMG}/>
                <JobOption
                    title={'Full time - 40 hours per week'}
                    style={listIMG}/>
                <div className={s.text}>Hello, I am a person who has a strong passion for programming. I have experience
                    in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this direction and expanding them
                    with new technologies. I'm planing to study Node.js, because my next focus is to become a FullStack
                    Developer. I spend my leisure time improving my English and studying new technologies.
                    Open for your suggestions.
                </div>
            </div>
        </div>
    );
};
