import styled from "@emotion/styled/macro";

type MenuButtonPropsType = {
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  handleClick?: () => void;
};

const StyledButton = styled.button`
  width: 100%;
  font-size: 13px;
  text-align: end;
  font-family: inherit;
  border: none;
  padding: 4px 2px 2px 2px;
  margin: 0 3px;
  cursor: pointer;
  color: #000;
  background: transparent;
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

const MenuButton = ({
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

export default MenuButton;
