import React from 'react';
import './App.css';
import {Profile} from "../features/cvPage/profile/Profile";
import {Stacks} from "../features/cvPage/technologiesStack/Stacks";
import {VettedSkills} from "../features/cvPage/vettedSkills/VettedSkills";
import {WorkExperience} from "../features/cvPage/workExperience/WorkExperience";
import {Education} from "../features/cvPage/education/Education";
import {Contact} from "../features/cvPage/contact/Contact";

function App() {
    return (
        <div className="App">
            <Profile />
            <Stacks/>
            <VettedSkills/>
            <WorkExperience/>
            <Education/>
            <Contact/>
        </div>
    );
}

export default App;
