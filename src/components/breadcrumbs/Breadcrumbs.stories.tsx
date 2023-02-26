import { ComponentStory, ComponentMeta } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./breadcrumbsItems/BreadcrumbItem";
import { ContactPage, Home, Info, Pages } from '@mui/icons-material/';

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args: any) => (
  <Breadcrumbs {...args}>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/about">About</BreadcrumbItem>
      <BreadcrumbItem>Page</BreadcrumbItem>
  </Breadcrumbs>
);


export const DefaultBreadcrumbs = Template.bind({});

DefaultBreadcrumbs.args = {
  separator: ">"
};

const TemplateWithIcon: ComponentStory<typeof Breadcrumbs> = (args: any) => (
  <Breadcrumbs {...args}>
      <BreadcrumbItem to="/" icon={<Home />}>Home</BreadcrumbItem>
      <BreadcrumbItem to="/about" icon={<Info />}>About</BreadcrumbItem>
      <BreadcrumbItem icon={<ContactPage />}>Page</BreadcrumbItem>
  </Breadcrumbs>
);


export const BreadcrumbsWithIcon = TemplateWithIcon.bind({});

BreadcrumbsWithIcon.args = {
  separator: ">"
};

const TemplateWithIconOnly: ComponentStory<typeof Breadcrumbs> = (args: any) => (
  <Breadcrumbs {...args}>
      <BreadcrumbItem to="/" icon={<Home />}></BreadcrumbItem>
      <BreadcrumbItem to="/about" icon={<Info />}></BreadcrumbItem>
      <BreadcrumbItem icon={<ContactPage />}></BreadcrumbItem>
  </Breadcrumbs>
);


export const BreadcrumbsWithIconOnly = TemplateWithIconOnly.bind({});

BreadcrumbsWithIconOnly.args = {
  separator: ">"
};