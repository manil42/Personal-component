import React from "react";
import { TableHeadProps } from "./TableHead.type";

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column: any) => {
          return <th key={column.key}>{column.name}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
