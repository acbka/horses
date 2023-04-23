import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectCompareHorses } from "../store/selectors";
import { Wrapper, Section, List } from "../common/styles";
import Button from "../components/Button";

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding-bottom: 15px;
  min-width: 100px;
  width: 100%;
`;
const BackButton = styled(Button)`
  height: 40px;
`;

const CompareHorses = () => {
  const history = useHistory();
  const compareHorses = useSelector(selectCompareHorses);

  const goToMainPage = () => {
    history.push("/");
  };

  useEffect(() => {
    if (compareHorses.length === 0) history.push("/");
  }, [compareHorses, history]);

  return (
    <Wrapper>
      <Section>
        <h2>Compare horses</h2>
        <List>
          <Item>
            <span>Name: </span>
            <span> {compareHorses[0]?.name}</span>
            <span>{compareHorses[1]?.name}</span>
          </Item>
          <Item>
            <span>Breed: </span>
            <span> {compareHorses[0]?.breed}</span>
            <span>{compareHorses[1]?.breed}</span>
          </Item>
          <Item>
            <span>Favourite Food: </span>
            <span> {compareHorses[0]?.profile.favouriteFood}</span>
            <span>{compareHorses[1]?.profile.favouriteFood}</span>
          </Item>
          <Item>
            <span>Height: </span>
            <span> {compareHorses[0]?.profile.physical.height}</span>
            <span>{compareHorses[1]?.profile.physical.height}</span>
          </Item>
          <Item>
            <span>Weight: </span>
            <span> {compareHorses[0]?.profile.physical.weight}</span>
            <span>{compareHorses[1]?.profile.physical.weight}</span>
          </Item>
        </List>
        <BackButton title="Back" handleClick={goToMainPage} />
      </Section>
    </Wrapper>
  );
};

export default CompareHorses;
