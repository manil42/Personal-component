//import { DropdownProps } from "../dropdown";
import { DropdownProps } from "../Dropdown";

export const DropdownValueWithAvatar: DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
      avatar: "people",
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
      avatar: "settings",
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
      avatar: "lock",
    },
  ],

  handleChange: (e: any) => {},
  size: "medium",
};

export const DropdownValueWithOutAvatar: DropdownProps = {
  option: [
    {
      id: 1,
      name: "Profile",
      value: "Profile",
    },
    {
      id: 2,
      name: "Settings",
      value: "Settings",
    },
    {
      id: 3,
      name: "Account",
      value: "Account",
    },
  ],

  handleChange: (e: any) => {},
  size: "medium",
};
