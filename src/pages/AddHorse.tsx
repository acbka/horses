import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "../api/store";
import { useSelector } from "react-redux";
import { selectHorses } from "../api/selectors";
import { addHorse } from "../api/requests/addHorse";
import Button from "../components/Button";
import Alarm from "../components/Alarm";
import InputForm from "../components/InputForm";
import {
  Wrapper,
  ButtonsGroup,
  Section,
  ButtonsSection,
} from "../common/styles";
import { horseInterface } from "../common/horseInterfaces";
import { setPage } from "../api/slices/pageSlice";

const AddHorse = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const horses = useSelector(selectHorses);
  const [horse, setHorse] = useState<horseInterface>();
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);

  const createHorse = () => {
    horse?.name &&
    horse?.profile.favouriteFood &&
    horse?.profile.physical.height &&
    horse?.profile.physical.weight
      ? dispatch(addHorse({ horse })).then(() => history.goBack())
      : setIsAlarmOpen(true);
    if (Math.ceil((horses.length + 1) / 5) > Math.ceil(horses.length / 5)) {
      dispatch(setPage(Math.ceil((horses.length + 1) / 5)));
    } else {
      dispatch(setPage(Math.ceil(horses.length / 5)));
    }
  };

  return (
    <Wrapper>
      {isAlarmOpen && <Alarm setIsOpen={() => setIsAlarmOpen(false)} />}
      <Section>
        <InputForm setNewHorse={setHorse} />
        <ButtonsSection>
          <ButtonsGroup>
            <Button title="Create" handleClick={createHorse} />
            <Button title="Cancel" handleClick={() => history.goBack()} />
          </ButtonsGroup>
        </ButtonsSection>
      </Section>
    </Wrapper>
  );
};

export default AddHorse;
