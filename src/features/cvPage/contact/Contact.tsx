import React from 'react';
import s from './Contact.module.scss'
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";

export const Contact = () => {
    const profileName = useSelector<AppRootStateType,string>(state=>state.userCV.profile.name)
    return (
        <div className={s.block}>
            <h2>Would you like to schedule an interview with {profileName}?</h2>
            <Button variant="contained" >
                Book a call
            </Button>
        </div>
    );
};
