import React from 'react';
import {VattedTopic} from "./VattedTopic";
import s from './ExtendedSkill.module.scss'

export const ExtendedSkill = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.titleContainer}>
                    <h3>Quiz</h3>
                    <button>See Quiz results</button>
                </div>
                <div className={s.testContainer}>
                    <span>Includes 15 questions on the following topics</span>
                    <VattedTopic title={'DOM'} stars={4.5}/>
                    <VattedTopic title={'HTML'} stars={4.2}/>
                    <VattedTopic title={'CSS'} stars={4}/>
                    <VattedTopic title={'JavaScript'} stars={3}/>
                    <VattedTopic title={'ReactComponents'} stars={3.5}/>
                </div>
            </div>
            <div className={s.container}>
                <div className={s.titleContainer}>
                    <h3>Coding Challenge</h3>
                    <button>See Code</button>
                </div>
                <div className={s.testContainer} >
                    <span>Includes 3 tasks on coding skills</span>
                    <VattedTopic title={'Sorting algorithm'} stars={4.5}/>
                    <VattedTopic title={'Strings and arrays'} stars={4.2}/>
                    <VattedTopic title={'Complexity'} stars={4}/>
                </div>
            </div>

        </div>
    );
};
