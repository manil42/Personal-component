import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbItemProps } from "./BreadcrumbItem.type";

const BreadcrumbItem = ({
  to,
  children,
  separator,
  icon
}: BreadcrumbItemProps): ReactElement => {
  return to ? (
    <>
      {icon && <span className="icon">{children}</span>}
      <a href={to}>{children} </a>
      <span>{separator}</span>

    </>
  ) : (
    
    <span className="last-item">{children}</span>
  );
};

export default BreadcrumbItem;
