import React, { ReactElement } from "react";
import { BreadcrumbsProps } from "./Breadcrumbs.type";

const Breadcrumbs = ({
  children,
  separator,
}: BreadcrumbsProps): ReactElement => {
  return (
    <nav className="breadcrumbs">
      <ol>
        {React.Children.map(children, (child, index) => {
          return (
            <li>
              {React.cloneElement(child)}
              {children.length - 1 != index && separator}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
