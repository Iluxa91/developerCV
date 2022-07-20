import React from 'react';
import s from './Contact.module.scss'

export const Contact = () => {
    return (
        <div className={s.block}>
            <h2>Would you like to schedule an interview with Ivan Ivanov?</h2>
            <button>Book a call</button>
        </div>
    );
};
