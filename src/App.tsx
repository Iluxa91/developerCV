import React from 'react';
import './App.css';
import {Profile} from "./profile/Profile";
import {Stack} from "./technologiesStack/Stack";
import {VettedSkills} from "./vettedSkills/VettedSkills";
import {WorkExperience} from "./workExperience/WorkExperience";

function App() {
    return (
        <div className="App">
            <Profile name={'Ivan Ivanov'}/>
            <Stack/>
            <VettedSkills/>
            <WorkExperience/>
        </div>
    );
}

export default App;
