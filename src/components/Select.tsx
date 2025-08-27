import React, { useState, ChangeEvent } from "react";
import styled from "@emotion/styled/macro";
import { HorseBreeds } from "../common/types";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSelect = styled.select`
  height: 25px;
  width: 175px;
  padding-left: 5px;
  border: 1px solid var(--color-main);
  border-radius: 4px;
  margin: 5px;
  background: transparent;
  font-size: 15px;
`;

type SelectPropsType = {
  name: string;
  handleChange: (arg: string) => void;
};

const Select = ({ name, handleChange }: SelectPropsType) => {
  const [breed, setBreed] = useState(Object.values(HorseBreeds)[0]);

  const optionsList = Object.values(HorseBreeds).map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const selectBreed = (e: ChangeEvent<HTMLSelectElement>) => {
    setBreed(e.target.value as HorseBreeds);
    handleChange(e.target.value);
  };

  return (
    <Wrapper>
      <span>{`${name}: `}</span>
      <StyledSelect name={name} value={breed} onChange={selectBreed}>
        {optionsList}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
