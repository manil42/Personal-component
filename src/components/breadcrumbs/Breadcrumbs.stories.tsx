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
      <BreadcrumbItem to="/" icon={<Home className="breadcrumbs-icon" />}>Home</BreadcrumbItem>
      <BreadcrumbItem to="/about" icon={<Info className="breadcrumbs-icon" />}>About</BreadcrumbItem>
      <BreadcrumbItem icon={<ContactPage className="breadcrumbs-icon" />}>Page</BreadcrumbItem>
  </Breadcrumbs>
);


export const BreadcrumbsWithIcon = TemplateWithIcon.bind({});

BreadcrumbsWithIcon.args = {
  separator: ">"
};

const TemplateWithIconOnly: ComponentStory<typeof Breadcrumbs> = (args: any) => (
  <Breadcrumbs {...args}>
      <BreadcrumbItem to="/" icon={<Home className="breadcrumbs-icon" />}></BreadcrumbItem>
      <BreadcrumbItem to="/about" icon={<Info className="breadcrumbs-icon" />}></BreadcrumbItem>
      <BreadcrumbItem icon={<ContactPage className="breadcrumbs-icon" />}></BreadcrumbItem>
  </Breadcrumbs>
);


export const BreadcrumbsWithIconOnly = TemplateWithIconOnly.bind({});

BreadcrumbsWithIconOnly.args = {
  separator: "/"
};