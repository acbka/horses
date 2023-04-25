import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addHorseToCompare } from "../store/slices/horsesSlice";
import {
  selectCompareHorses,
  selectHorse,
  selectIsHorseLoading,
} from "../store/selectors";
import { getHorseById } from "../store/requests/getHorseById";
import {
  ButtonsGroup,
  ButtonsSection,
  List,
  Section,
  Wrapper,
} from "../common/styles";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

type Params = {
  id: string;
};

const Item = styled.div`
  padding: 10px 0;
`;

const HorseInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const horse = useSelector(selectHorse);
  const isLoading = useSelector(selectIsHorseLoading);
  const compareHorses = useSelector(selectCompareHorses);
  const { id } = useParams<Params>();

  useEffect(() => {
    dispatch(getHorseById(id));
  }, [dispatch, id]);

  const editHorse = () => {
    history.push(`/edit/${horse.id}`);
  };
  if (Object.keys(horse).length === 0) return null;

  return (
    <Wrapper>
      <Section>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <List>
              <Item>
                <span>Name: </span>
                {horse.name}
              </Item>
              <Item>
                <span>Breed: </span>
                {horse.breed}
              </Item>
              <Item>
                <span>Favourite Food: </span>
                {horse.profile.favouriteFood}
              </Item>
              <Item>
                <span>Height: </span>
                {horse.profile.physical.height}
              </Item>
              <Item>
                <span>Weight: </span>
                {horse.profile.physical.weight}
              </Item>
            </List>
            <ButtonsSection>
              <ButtonsGroup>
                <Button
                  title="Edit"
                  handleClick={editHorse}
                  disabled={
                    compareHorses.findIndex((item) => item.id === horse.id) !==
                    -1
                  }
                />
                <Button
                  title="Select"
                  handleClick={() => {
                    dispatch(addHorseToCompare(horse));
                  }}
                  disabled={
                    compareHorses.length === 2 ||
                    compareHorses.findIndex((item) => item.id === horse.id) !==
                      -1
                  }
                />
              </ButtonsGroup>
              <Button
                title="Back"
                handleClick={() => {
                  history.push("/");
                }}
              />
            </ButtonsSection>
          </>
        )}
      </Section>
    </Wrapper>
  );
};

export default HorseInfo;
