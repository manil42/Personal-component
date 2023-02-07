import React from "react";
import TableHead from "./tableHead/TableHead";
import TableBody from "./tableBody/TableBody";
import { TableProps } from "./Table.type";

export const Table = ({ columns, rows, caption }: TableProps) => {
  return (
    <>
      <caption>{caption}</caption>
      <table>
        <TableHead {...{ columns }} />
        <TableBody {...{ columns, rows }} />
      </table>
    </>
  );
};
