import React from 'react';
import s from './Profile.module.scss'
import {JobOption} from "./JobOptions";
// import bgImg from '../../../assets/images/logo_1.jpg'
// import clcImg from '../../../assets/images/logo_2.jpg'
// import doneImg from '../../../assets/images/logo_3.jpg'
// import listImg from '../../../assets/images/logo_4.jpg'
import {Button} from "@mui/material";
import IosShareIcon from '@mui/icons-material/IosShare';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import {ProfileType} from "../profile-reducer";
import {AppRootStateType} from "../../../app/store";
import {useSelector} from "react-redux";

export const Profile = () => {
    // const bagIMG = {backgroundImage: `url(${bgImg})`}
    // const clockIMG = {backgroundImage: `url(${clcImg})`}
    // const doneIMG = {backgroundImage: `url(${doneImg})`}
    // const listIMG = {backgroundImage: `url(${listImg})`}
    const profile = useSelector<AppRootStateType,ProfileType>(state => state.userCV.profile)

    return (
        <div className={s.profileBlock}>
            <div className={s.imageContainer}></div>
            <div className={s.descriptionContainer}>
                <div className={s.nameContainer}>
                    <div>
                        <h1>{profile.name}</h1>
                        <h3>{profile.jobTitle}</h3>
                    </div>
                    <div className={s.buttons}>
                        <Button variant="outlined" startIcon={<IosShareIcon/>}>Share</Button>
                        <Button variant="contained">Book a call</Button>
                    </div>
                </div>
                <JobOption
                    icon={<BusinessCenterIcon/>}
                    title={`${profile.totalWorkExperience} - total work experience`}
                    // style={bagIMG}
                />
                <JobOption
                    icon={<AccessTimeIcon/>}
                    title={'Overlap with your time zone: XXam - XXpm'}
                    // style={clockIMG}
                />
                <JobOption
                    icon={<TaskAltIcon/>}
                    title={`Availability: ${profile.availability}`}
                    // style={doneIMG}
                />
                <JobOption
                    icon={<PendingActionsIcon/>}
                    title={profile.employmentTime}
                    // style={listIMG}
                />
                <div className={s.text}>{profile.aboutMe}
                </div>
            </div>
        </div>
    );
};
