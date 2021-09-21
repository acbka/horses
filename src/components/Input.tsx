import React, { useState, ChangeEvent } from "react";
import styled from "@emotion/styled/macro";

type InputPropsType = {
  name: string;
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
  padding-left: 5px;
  border: 1px solid var(--color-main);
  border-radius: 4px;
  margin: 5px;
  background: transparent;
`;

const Input = ({ name, initialValue, handleChange }: InputPropsType) => {
  const [inputValue, setInputValue] = useState<string | number>(initialValue);

  const inputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleChange(e.target.value);
  };

  const setData = () => {
    handleChange(inputValue);
  };

  return (
    <Wrapper>
      <span>{`${name}: `}</span>
      <StyledInput
        type="text"
        name={name}
        value={inputValue}
        onBlur={setData}
        onChange={inputData}
      />
    </Wrapper>
  );
};

export default Input;
