import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addHorseToCompare } from "../api/slices/horsesSlice";
import { selectHorse, selectCompareHorses } from "../api/selectors";
import { getHorseById } from "../api/requests/getHorseById";
import { updateHorse } from "../api/requests/updateHorse";
import { horseIdInterface, horseInterface } from "../common/horseInterfaces";
import Button from "../components/Button";
import Alarm from "../components/Alarm";
import InputForm from "../components/InputForm";
import {
  Wrapper,
  Section,
  ButtonsSection,
  ButtonsGroup,
} from "../common/styles";
import Spinner from "../components/Spinner";

type Params = {
  id: string;
};

const EditHorse = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { horse, isLoading } = useSelector(selectHorse);
  const compareHorses = useSelector(selectCompareHorses);
  const { id } = useParams<Params>();
  const [currentHorse, setCurrentHorse] = useState<
    horseIdInterface | horseInterface
  >(horse);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);

  useEffect(() => {
    dispatch(getHorseById({ id }));
  }, [dispatch, id]);

  const updateCurrentHorse = () => {
    (currentHorse.name &&
    currentHorse.profile.favouriteFood &&
    currentHorse.profile.physical.height &&
    currentHorse.profile.physical.weight)
       ? dispatch(updateHorse({ ...horse, horse: currentHorse as horseIdInterface }))
       : setIsAlarmOpen(true);
       history.push(`/horse/${horse.id}`)
  };
   
  if (Object.keys(horse).length === 0) return null;

  return (
    <Wrapper>
      {isAlarmOpen && <Alarm setIsOpen={() => setIsAlarmOpen(false)} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <Section>
          <InputForm initialHorse={horse} setNewHorse={setCurrentHorse} />
          <ButtonsSection>
            <ButtonsGroup>
              <Button
                title="Save"
                handleClick={updateCurrentHorse}
                disabled={
                  compareHorses.findIndex((item) => item.id === horse.id) !== -1
                }
              />
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
                history.push("/");
              }}
            />
          </ButtonsSection>
        </Section>
      )}
    </Wrapper>
  );
};

export default EditHorse;
