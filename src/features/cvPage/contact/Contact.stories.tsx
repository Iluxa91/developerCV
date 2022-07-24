import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Contact} from "./Contact";
import {ReduxStoreProviderDecorator} from "../../../stories/decorators/ReduxStoreProviderDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UserSV/Contact',
    component: Contact,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    decorators:[ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Contact>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Contact> = (args) => <Contact />;

export const ContactExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContactExample.args = {

};