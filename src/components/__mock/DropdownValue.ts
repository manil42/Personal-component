import { DropdownProps } from "../Dropdown";

export const DropdownValueWithAvatar:DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      avatar: "people",
    },
    {
      id: 1,
      name: "Settings",
      value: "Settings",
      avatar: "settings",
    },
    {
      id: 1,
      name: "Account",
      value: "Account",
      avatar: "lock",
    },
  ],

  handleChange:(e:any)=>{},
  size:'medium'

};

export const DropdownValueWithOutAvatar:DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
    },
    {
      id: 1,
      name: "Settings",
      value: "Settings",
    },
    {
      id: 1,
      name: "Account",
      value: "Account",
    },
  ],

  handleChange:(e:any)=>{},
  size:'medium'
};

