//import { DropdownProps } from "../dropdown";
import { DropdownProps } from "components/dropdown";
import { PlaceholderInput } from "components/input/Input.stories";

export const DropdownValueWithIcon: DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      avatar: "people",
      error: "Error"

    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      avatar: "settings",
      error: "Error"

    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      avatar: "lock",
      error: "Error"

    },
  ],

  handleChange: (e: any) => {},
  size: "small",
};

export const DropdownValueWithOutIcon: DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      error: "Error"

    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      error: "Error"

    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      error: "Error"

    },
  ],
  label: "Name",
  handleChange: (e: any) => {},
  size: "small",
  placeholder: "Placeholder"
};

export const DropdownDisabledValues: DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      error: "Error"

    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      error: "Error"

    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      error: "Error"

    },
  ],

  handleChange: (e: any) => {},
  size: "small",
  isDisabled: true
};

export const DropdownErrorValues: DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      error: "Error"
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      error: "Error"

    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      error: "Error"

    },
  ],

  handleChange: (e: any) => {},
  size: "small",
  isError: true,
  errorMessage: "This is Error Message"
};

export const DropdownwithMultiSelectValues: DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      error: "Error"
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      error: "Error"
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      error: "Error"
    },
  ],

  handleChange: (e: any) => { },
  // size: "small",
  isMultiSelect: true,
  placeholder: "Placeholder",
  size: "small"
};