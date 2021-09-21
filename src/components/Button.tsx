import styled from "@emotion/styled/macro";

type ButtonPropsType = {
  title: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
};

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  text-align: center;
  font-family: inherit;
  font-weight: 600px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
  background: var(--color-main);
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  &:disabled {
    color: #000;
    background: var(--color-grey);
    &:hover {
      color: #000;
      background: var(--color-grey);
    }
  }
  &:hover {
    color: #fff;
    background: var(--color-second);
  }
`;

const Button = ({
  title,
  disabled,
  children,
  className,
  handleClick,
}: ButtonPropsType) => {
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

export default Button;
