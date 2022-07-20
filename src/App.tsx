import React from 'react';
import './App.css';
import {Profile} from "./profile/Profile";
import {Stacks} from "./technologiesStack/Stacks";
import {VettedSkills} from "./vettedSkills/VettedSkills";
import {WorkExperience} from "./workExperience/WorkExperience";
import {Education} from "./education/Education";
import {Contact} from "./contact/Contact";

function App() {
    return (
        <div className="App">
            <Profile name={'Ivan Ivanov'}/>
            <Stacks/>
            <VettedSkills/>
            <WorkExperience/>
            <Education/>
            <Contact/>
        </div>
    );
}

export default App;
