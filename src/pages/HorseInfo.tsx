import { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addHorseToCompare } from "../api/slices/horsesSlice";
import { selectCompareHorses } from "../api/selectors";
import { selectHorse } from "../api/selectors";
import { getHorseById } from "../api/requests/getHorseById";
import { updateHorse } from "../api/requests/updateHorse";
import { horseIdInterface, horseInterface } from "../common/horseInterfaces";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import {
  Wrapper,
  Section,
  List,
  ButtonsSection,
  ButtonsGroup,
} from "../common/styles";

type Params = {
  id: string;
};

const Item = styled.div`
  padding: 10px 0;
`;

const HorseInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const horse: horseIdInterface = useSelector(selectHorse);
  const compareHorses = useSelector(selectCompareHorses);
  const { id } = useParams<Params>();
  const [currentHorse, setCurrentHorse] = useState<
    horseIdInterface | horseInterface
  >(horse);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    dispatch(getHorseById({ id }));
  }, [dispatch, id]);

  const updateCurrentHorse = () => {
    if (currentHorse.name) {
      dispatch(updateHorse({ horse: currentHorse as horseIdInterface }));
      setIsEdit(false);
    } else alert("Enter horse name");
  };

  if (Object.keys(horse).length === 0) return null;

  return (
    <Wrapper>
      <Section>
        {isEdit ? (
          <InputForm initialHorse={horse} setNewHorse={setCurrentHorse} />
        ) : (
          <List>
            <Item>
              <span>Name: </span>
              {horse.name}
            </Item>
            <Item>
              <span>Favourite Food: </span>
              {horse.profile.favouriteFood}
            </Item>
            <Item>
              <span>Height: </span>
              {horse.profile.physical.height > 0
                ? horse.profile?.physical?.height
                : ""}
            </Item>
            <Item>
              <span>Weight: </span>
              {horse.profile.physical.weight > 0
                ? horse.profile.physical.weight
                : ""}
            </Item>
          </List>
        )}
        <ButtonsSection>
          <ButtonsGroup>
            {!isEdit ? (
              <Button
                title="Edit"
                handleClick={() => setIsEdit(true)}
                disabled={
                  compareHorses.findIndex((item) => item.id === horse.id) !== -1
                }
              />
            ) : (
              <Button
                title="Save"
                handleClick={updateCurrentHorse}
                disabled={
                  compareHorses.findIndex((item) => item.id === horse.id) !== -1
                }
              />
            )}
            <Button
              title="Select"
              handleClick={() => {
                dispatch(addHorseToCompare(horse));
              }}
              disabled={
                compareHorses.length === 2 ||
                compareHorses.findIndex((item) => item.id === horse.id) !== -1
              }
            />
          </ButtonsGroup>
          <Button
            title="Back"
            handleClick={() => {
              history.goBack();
            }}
          />
        </ButtonsSection>
      </Section>
    </Wrapper>
  );
};

export default HorseInfo;
