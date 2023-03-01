import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DefaultBreadcrumbsValues } from "components/__mock/BreadcrumbsValues";
import Breadcrumbs from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args: any) => (
  <Breadcrumbs {...args} />
);

export const DefaultBreadcrumbs = Template.bind({});

DefaultBreadcrumbs.args = {
  ...DefaultBreadcrumbsValues
};
