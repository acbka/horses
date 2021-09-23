import React from "react";
import styled from "@emotion/styled/macro";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../api/store";
import { removeHorseFromCompare } from "../api/slices/horsesSlice";
import { selectCompareHorses } from "../api/selectors";
import { useHistory } from "react-router";
import Button from "../components/Button";

const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  background: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 0.6em 1em 0.35em rgba(0, 0, 0, 0.17);
  padding: 20px;
`;
const StyledDiv = styled.div`
  margin: 10px 0;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;
const StyledButton = styled(Button)`
  margin-left: 35px;
  width: 60px;
  height: 20px;
`;

const CompareHorsesPreview = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const compareHorses = useSelector(selectCompareHorses);

  const removeHorse = (value: string) => {
    dispatch(removeHorseFromCompare(value));
  };

  const horsesList = compareHorses.map((horse, index) => (
    <Item key={index}>
      {horse.name}{" "}
      <StyledButton title="Remove" handleClick={() => removeHorse(horse.id)} />
    </Item>
  ));

  return (
    <Wrapper>
      <h3>Horses to compare</h3>
      {compareHorses.length ? (
        <StyledDiv>{horsesList}</StyledDiv>
      ) : (
        <StyledDiv>No horses to compare</StyledDiv>
      )}
      {compareHorses.length === 2 && (
        <Button
          title="Compare"
          disabled={compareHorses.length !== 2}
          handleClick={() => history.push("/CompareHorses")}
        />
      )}
    </Wrapper>
  );
};

export default CompareHorsesPreview;
