import React, { useEffect } from "react";
import { TooltipProps } from "./Tooltip.type";

const Tooltip = ({
  className,
  children,
  direction,
  description,
  color,
  arrow,
}: TooltipProps) => {
  return (
    <div
      className={`tooltip-wrapper tooltip-direction-${direction}  ${
        className && className
      }`}
    >
      <div className="description-wrapper">
        <div className="tooltip-inner-wrapper">
          {children}
          <span
            className={`description ${
              arrow ? `arrow` : ``
            } description-${color}`}
          >
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
