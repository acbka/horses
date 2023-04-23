import React from "react";
import styled from "@emotion/styled/macro";

const StyledButton = styled.button`
  font-size: 13px;
  text-align: end;
  font-family: inherit;
  border: none;
  padding: 4px 2px 2px 2px;
  margin: 0 3px;
  color: #000;
  background: transparent;
  width: 100%;
  cursor: pointer;
  & * path {
    stroke: var(--color-main);
  }
  &:hover {
    & * path {
      stroke: var(--color-second);
    }
  }
  &:disabled {
    & * path {
      stroke: var(--color-darkgrey);
    }
  }
`;

type MenuButtonPropsType = {
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
};

const IconButton = ({
  title,
  disabled,
  children,
  className,
  handleClick,
}: MenuButtonPropsType) => {
  return (
    <StyledButton
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {title || children}
    </StyledButton>
  );
};

export default IconButton;
