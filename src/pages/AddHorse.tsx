import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { selectHorses } from "../store/selectors";
import { addHorse } from "../store/requests/addHorse";
import { getHorses } from "../store/requests/getHorses";
import { setPage } from "../store/slices/pageSlice";
import {
  ButtonsGroup,
  Section,
  ButtonsSection,
  Wrapper,
} from "../common/styles";
import { HorseInterface } from "../common/types";
import Alarm from "../components/Alarm";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import Modal from "../components/Modal";

const AddHorse = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const horses = useSelector(selectHorses);
  const [horse, setHorse] = useState<HorseInterface>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const existingName = horses.some((h) => h.name === horse?.name);

  const createHorse = () => {
    if (
      horse?.name &&
      horse?.profile.favouriteFood &&
      horse?.profile.physical.height &&
      horse?.profile.physical.weight &&
      !existingName
    ) {
      dispatch(addHorse(horse))
        .then(() => dispatch(getHorses()))
        .then(() => navigate(-1));
      if (Math.ceil((horses.length + 1) / 5) > Math.ceil(horses.length / 5)) {
        dispatch(setPage(Math.ceil((horses.length + 1) / 5)));
      } else {
        dispatch(setPage(Math.ceil(horses.length / 5)));
      }
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <Wrapper>
      {isModalOpen && (
        <Modal>
          <Alarm
            message={
              existingName
                ? `A horse named ${horse?.name} already exists`
                : "All fields must be filled!"
            }
            setIsOpen={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
      <Section>
        <InputForm isEdit={false} setNewHorse={setHorse} />
        <ButtonsSection>
          <ButtonsGroup>
            <Button title="Create" handleClick={createHorse} />
            <Button title="Cancel" handleClick={() => navigate(-1)} />
          </ButtonsGroup>
        </ButtonsSection>
      </Section>
    </Wrapper>
  );
};

export default AddHorse;
