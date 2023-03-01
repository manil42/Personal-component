import { BreadcrumbsProps } from "components/breadcrumbs";
import "material-symbols";


export const DefaultBreadcrumbsValues: BreadcrumbsProps = {
  data: [
    { text: "Home", url: "/", icon:"person" },
    { text: "Category", url: "/category" },
    { text: "Subcategory", url: "/category/subcategory" },
    { text: "Page", url: "/category/subcategory/page" },
  ],
  seperator:">"
};
