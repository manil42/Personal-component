import React, { FC, PropsWithChildren, ReactElement } from "react";
import { BreadcrumbsProps } from "./Breadcrumbs.type";
import "material-symbols";


const Breadcrumbs = ({
  children,
  separator,
  icon
}: BreadcrumbsProps): ReactElement => {
  return (
    <nav className="breadcrumbs">
      <ul>
        {React.Children.map(children, (child, index) => {
          return (
            <li>
              {React.cloneElement(child)}
              {children.length - 1 != index && separator}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
