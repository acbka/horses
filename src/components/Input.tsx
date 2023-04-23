import React, { ChangeEvent } from "react";
import styled from "@emotion/styled/macro";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  padding-left: 5px;
  border: 1px solid var(--color-main);
  border-radius: 4px;
  margin: 5px;
  background: transparent;
  font-size: 15px;
  height: 25px;
  width: 175px;
`;

type InputPropsType = {
  name: string;
  type?: string;
  initialValue: string | number;
  handleChange: (arg: string | number) => void;
};

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
