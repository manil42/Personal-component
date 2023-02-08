import React from "react";
import styled from "styled-components";

interface StyleDropdownProps {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor:string;
  openParentColor:string;
}

export const StyledDropdown = styled.div<StyleDropdownProps>`
  .dropdown button{
    background-color: ${(props: StyleDropdownProps) => props.backgroundColor};
    color: ${(props: StyleDropdownProps) => props.color};
  }

  .dropdown button:hover {
    background: ${(props: StyleDropdownProps) => props.hoverBackgroundColor};
  }
  
  .dropdown.open > button {
    background: ${(props: StyleDropdownProps) => props.openParentColor};
  }
`;
