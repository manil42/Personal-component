import { DropdownProps } from "./Dropdown.type";
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from "./Dropdown";
import { DropdownValueWithAvatar, DropdownValueWithOutAvatar } from "../__mock/DropdownValue";


export default {
    title:"Components/Dropdown",
    component: Dropdown,
}as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args:any) => <Dropdown {...args}/>

export const DropdownWithAvatar = Template.bind({});

DropdownWithAvatar.args = {
    ...DropdownValueWithAvatar
}

export const DropdownWithOutAvatar = Template.bind({});

DropdownWithOutAvatar.args = {
    ...DropdownValueWithOutAvatar
}
