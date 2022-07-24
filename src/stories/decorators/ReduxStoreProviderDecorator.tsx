import {AppRootStateType} from "../../app/store";
import jsIMG from "../../assets/images/JS.png";
import reactIMG from "../../assets/images/reactImg.png";
import reduxIMG from "../../assets/images/redux.png";
import javaspringIMG from "../../assets/images/javaspring.png";
import nodeIMG from "../../assets/images/nodejs_logo.png";
import {combineReducers, createStore} from "redux";
import {profileReducer} from "../../features/cvPage/profile-reducer";
import {Provider} from "react-redux";

const jsImg = {backgroundImage: `url(${jsIMG})`}
const reactImg = {backgroundImage: `url(${reactIMG})`}
const reduxImg = {backgroundImage: `url(${reduxIMG})`}
const javaspringImg = {backgroundImage: `url(${javaspringIMG})`}
const nodeImg = {backgroundImage: `url(${nodeIMG})`}

const rootReducer = combineReducers({
    userCV: profileReducer
})


const initialGlobalState: AppRootStateType = {
    userCV: {
        profile: {
            id: 1, name: 'Ivan Ivanov', jobTitle: 'Senior Frontend Developer', totalWorkExperience: '6 years',
            availability: 'Ready to start now', employmentTime: 'Full time - 40 hours per week',
            aboutMe: 'Hello, I am a person who has a strong passion for programming. I have experience in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this direction and expanding them with new technologies. I\'m planing to study Node.js, because my next focus is to become a FullStack Developer. I spend my leisure time improving my English and studying new technologies. Open for your suggestions.'
        },
        stacks: [{icon: jsImg, title: 'JavaScript'},
            {icon: jsImg, title: 'JavaScript'},
            {icon: javaspringImg, title: 'JavaSping'},
            {icon: jsImg, title: 'JavaScript'},
            {icon: javaspringImg, title: 'JavaSping'}],
        technologies: [{icon: reactImg, title: 'React'},
            {icon: reduxImg, title: 'Redux'}],
        hasExperience: ['Redux', 'Azure'],
        vattedSkills: [
            {id: 'skillID1', title: 'React', rating: 4.5, icon: reactImg},
            {id: 'skillID2', title: 'Redux', rating: 3.3, icon: reduxImg}
        ],
        quizResults: {
            'skillID1': [{title: 'DOM', rating: 4.5}, {title: 'HTML', rating: 4.2},
                {title: 'CSS', rating: 4.0}, {title: 'JavaScript', rating: 3.0}, {
                    title: 'ReactComponents',
                    rating: 3.5
                }],
            'skillID2': [{title: 'DOM', rating: 4.5}, {title: 'HTML', rating: 4.2},
                {title: 'CSS', rating: 4.0}, {title: 'JavaScript', rating: 3.0}, {
                    title: 'ReactComponents',
                    rating: 3.5
                }]
        },
        codingChallengeResults: {
            'skillID1': [{title: 'Sorting algorithm', rating: 4.5}, {
                title: 'Strings and arrays', rating: 4.2
            }, {title: 'Complexity', rating: 4.0}],
            'skillID2': [{title: 'Sorting algorithm', rating: 4.5}, {
                title: 'Strings and arrays', rating: 4.2
            }, {title: 'Complexity', rating: 4.0}]
        },
        workExperiences: [
            {
                title: 'Senior Frontend Developer',
                institutionTitle: 'Sberbank',
                description: 'Hello, I am a person who has a strong passion for programming. I have experience in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this direction and expanding them with new technologies. I\'m planing to study Node.js, because my next focus is to become a FullStack Developer. I spend my leisure time improving my English and studying new technologies. Open for your suggestions.',
                dates: '2 years 2 month | June 2019 - October 2021',
                languages: [{icon: jsImg, title: 'JavaScript'}, {icon: javaspringImg, title: 'JavaSping'}],
                technologies: [{icon: reactImg, title: 'React'}, {icon: nodeImg, title: 'Node.js'}]
            },
            {
                title: 'Middle Frontend Developer',
                institutionTitle: 'Sberbank',
                description: 'Hello, I am a person who has a strong passion for programming. I have experience in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this direction and expanding them with new technologies. I\'m planing to study Node.js, because my next focus is to become a FullStack Developer. I spend my leisure time improving my English and studying new technologies. Open for your suggestions.',
                dates: '2 years 2 month | June 2019 - October 2021',
                languages: [{icon: jsImg, title: 'JavaScript'}, {icon: javaspringImg, title: 'JavaSping'}],
                technologies: [{icon: reactImg, title: 'React'}, {icon: nodeImg, title: 'Node.js'}]
            }
        ],
        education: [
            {
                title: 'Computer Science',
                institutionTitle: 'Boston Academy',
                dates: '2 years 2 month | June 2019 - October 2021'
            },
            {
                title: 'Computer Science',
                institutionTitle: 'Cleveland College',
                dates: '1 years 2 month | July 2017 - June 2019'
            }
        ]
    }
}


export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>)