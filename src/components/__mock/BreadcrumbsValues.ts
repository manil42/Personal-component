import { BreadcrumbsProps } from "components/breadcrumbs";
import "material-symbols";


export const DefaultBreadcrumbsValues: BreadcrumbsProps = {
  data: [
    { text: "Home", url: "/", icon:"person" },
    { text: "Category", url: "/category" },
    { text: "Subcategory", url: "/category/subcategory" },
    { text: "Page", url: "/category/subcategory/page" },
  ],
  separator:">"
};

export const IconBreadcrumbsValues: BreadcrumbsProps = {
  data: [
    { text: "Home", url: "/", icon:"person" },
    { text: "Category", url: "/category", icon:"category" },
    { text: "Subcategory", url: "/category/subcategory", icon:"class" },
    { text: "Page", url: "/category/subcategory/page", icon:"pages" },
  ],
  separator:">"
};
