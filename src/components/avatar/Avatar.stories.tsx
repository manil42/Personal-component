import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";
import { AvatarImageValues, DefaultAvatarValues } from "components/__mock/AvatarValues";
import {Home} from '@mui/icons-material';

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: any) => (
  <Avatar {...args} />
);

export const DefaultAvatar = Template.bind({});

DefaultAvatar.args = {
  ...DefaultAvatarValues
};

export const AvatarImage = Template.bind({});

AvatarImage.args = {
  ...AvatarImageValues
};

export const AvatarCustom = Template.bind({});

AvatarCustom.args ={
    children:[
      <Home />
    ]
}
