import { DropdownProps } from "./Dropdown.type";
import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import {
  DropdownDisabledValues,
  DropdownErrorValues,
  DropdownValueWithIcon,
  DropdownValueWithOutIcon,
  DropdownwithMultiSelectValues,
} from "../__mock/DropdownValue";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: any) => (
  <Dropdown {...args} />
);

export const DropdownWithIcon = Template.bind({});

DropdownWithIcon.args = {
  ...DropdownValueWithIcon,
};

export const DropdownWithOutIcon = Template.bind({});

DropdownWithOutIcon.args = {
  ...DropdownValueWithOutIcon,
};

export const DropdownDisabled = Template.bind({});

DropdownDisabled.args={
  ...DropdownDisabledValues,
}

export const DropdownError = Template.bind({});

DropdownError.args={
  ...DropdownErrorValues,
}

export const DropdownWithMultiSelect = Template.bind({});

DropdownWithMultiSelect.args={
  ...DropdownwithMultiSelectValues,
}


