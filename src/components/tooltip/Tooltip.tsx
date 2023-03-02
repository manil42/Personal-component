import React, { useEffect, useRef, useState } from "react";
import { TooltipProps } from "./Tooltip.type";

const Tooltip = ({
  className,
  children,
  position,
  description,
  color,
  arrow,
  offset = 8,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState(position);

  useEffect(() => {
    const tooltipEl = tooltipRef.current;
    if (!tooltipEl) return;

    const { left, top, width, height } = tooltipEl.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;
    let newTooltipPosition = position;

    if (position === "right" && left + width > innerWidth) {
      newTooltipPosition = "left";
    } else if (position === "left" && left - offset < 0) {
      newTooltipPosition = "right";
    } else if (position === "bottom" && top + height > innerHeight) {
      newTooltipPosition = "top";
    } else if (position === "top" && top - offset < 0) {
      newTooltipPosition = "bottom";
    }
    setTooltipPosition(newTooltipPosition);
  }, [description, position, offset]);

  // if(!tooltipRef) return;

  // const {left, top, width, height} = tooltipEl.

  return (
    <div
      className={`tooltip-wrapper tooltip-direction-${tooltipPosition}  ${
        className && className
      }`}
    >
      <div className="description-wrapper">
        <div className="tooltip-inner-wrapper">
          <span>{children} </span>
          <span
            className={`description ${
              arrow ? `arrow` : ``
            } description-${color}`}
            ref={tooltipRef}
          >
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
