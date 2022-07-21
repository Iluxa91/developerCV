import React from 'react';
import s from './Contact.module.scss'
import {Button} from "@mui/material";

export const Contact = () => {
    return (
        <div className={s.block}>
            <h2>Would you like to schedule an interview with Ivan Ivanov?</h2>
            <Button variant="contained" >
                Book a call
            </Button>

        </div>
    );
};
