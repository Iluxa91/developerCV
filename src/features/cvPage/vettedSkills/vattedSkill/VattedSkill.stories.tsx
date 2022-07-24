import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {VattedSkill} from "./VattedSkill";
import reactIMG from "../../../../assets/images/reactImg.png";
import {ReduxStoreProviderDecorator} from "../../../../stories/decorators/ReduxStoreProviderDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UserSV/VattedSkill',
    component: VattedSkill,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    decorators:[ReduxStoreProviderDecorator]
} as ComponentMeta<typeof VattedSkill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VattedSkill> = (args) => <VattedSkill {...args} />;
const reactImg = {backgroundImage: `url(${reactIMG})`}
export const VattedSkillExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VattedSkillExample.args = {
    title: 'React',
    rating: 4.3,
    id: 'skillID1',
    icon: reactImg
};