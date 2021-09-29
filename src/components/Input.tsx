import React, { ChangeEvent } from "react";
import styled from "@emotion/styled/macro";

type InputPropsType = {
  name: string;
  type?: string;
  initialValue: string | number;
  handleChange: (arg: string | number) => void;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 25px;
  width: 175px;
  padding-left: 5px;
  border: 1px solid var(--color-main);
  border-radius: 4px;
  margin: 5px;
  background: transparent;
  font-size: 15px;
`;

const Input = ({
  name,
  type = "text",
  initialValue,
  handleChange,
}: InputPropsType) => {
  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <Wrapper>
      <span>{`${name}: `}</span>
      <StyledInput
        type={type}
        name={name}
        value={initialValue}
        onChange={inputData}
      />
    </Wrapper>
  );
};

export default Input;
