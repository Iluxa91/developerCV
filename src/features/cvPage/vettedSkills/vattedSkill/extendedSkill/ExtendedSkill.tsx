import React from 'react';
import {ChallengeResult} from "./challengeResult/ChallengeResult";
import s from './ExtendedSkill.module.scss'
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../app/store";
import {ResultsType} from "../../../profile-reducer";
type PropsType = {
    id:string
}
export const ExtendedSkill = (props:PropsType) => {
    const quizResults = useSelector<AppRootStateType, ResultsType>(state=> state.userCV.quizResults)
    const codingChallengeResults = useSelector<AppRootStateType, ResultsType>(state=> state.userCV.codingChallengeResults)
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.titleContainer}>
                    <h3>Quiz</h3>
                    <Button variant="outlined">See Quiz results</Button>
                </div>
                <div className={s.testContainer}>
                    <span className={s.text}>Includes 15 questions on the following topics</span>
                    {quizResults[props.id].map(el=><ChallengeResult title={el.title} rating={el.rating}/>)}
                </div>
            </div>
            <div className={s.container}>
                <div className={s.titleContainer}>
                    <h3>Coding Challenge</h3>
                    <Button variant="outlined">See Code</Button>
                </div>
                <div className={s.testContainer} >
                    <span className={s.text}>Includes 3 tasks on coding skills</span>
                    {codingChallengeResults[props.id].map(el=><ChallengeResult title={el.title} rating={el.rating}/>)}
                </div>
            </div>
        </div>
    );
};
