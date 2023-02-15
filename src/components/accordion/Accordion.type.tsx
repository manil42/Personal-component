import { ReactElement, ReactNode } from "react";

export interface AccordionProps {
  title: string;
  content: any;
  openIcon?: ReactElement;
  closeIcon?: ReactElement;
}
