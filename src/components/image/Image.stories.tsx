import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultImageValues } from "components/__mock/ImageValues";
import Image from "./Image";

export default {
    title: "Components/Image",
    component: Image,
  } as ComponentMeta<typeof Image>;
  
  const Template: ComponentStory<typeof Image> = (args: any) => (
    <Image {...args} />
  );
  
  export const DefaultImage = Template.bind({});

  DefaultImage.args = {
    ...DefaultImageValues
  };