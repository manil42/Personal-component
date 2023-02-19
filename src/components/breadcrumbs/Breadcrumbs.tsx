import "material-symbols";
import { FC, PropsWithChildren } from "react";
import { BreadcrumbsProps } from "./Breadcrumbs.type";

const Breadcrumbs = ({ data, separator }: BreadcrumbsProps) => {
  const Icon: FC<PropsWithChildren> = ({ children }) => (
    <i className="material-symbols-outlined breadcrumbs-icon">{children}</i>
  );

  return (
    <nav aria-label="breadcrumbs">
      <ul className="breadcrumbs">
        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;
          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLastItem ? "breadcrumb-active" : ""}`}
            >
              {isLastItem ? (
                item.text
              ) : (
                <div className="breadcrumbs-items">
                  <span><Icon>{item.icon}</Icon></span>
                  <a href={item.url}>{item.text}</a>
                  <span className="breadcrumb-seperator">{separator} </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
