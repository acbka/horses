import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { selectHorses } from "../store/selectors";
import { addHorse } from "../store/requests/addHorse";
import { setPage } from "../store/slices/pageSlice";
import { HorseInterface } from "../common/types";
import {
  ButtonsGroup,
  ButtonsSection,
  Section,
  Wrapper,
} from "../common/styles";
import Button from "../components/Button";
import Alarm from "../components/Alarm";
import InputForm from "../components/InputForm";
import Modal from "../components/Modal";

const AddHorse = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const horses = useSelector(selectHorses);
  const [horse, setHorse] = useState<HorseInterface>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createHorse = () => {
    if (
      horse?.name &&
      horse?.profile.favouriteFood &&
      horse?.profile.physical.height &&
      horse?.profile.physical.weight
    ) {
      dispatch(addHorse({ horse })).then(() => history.goBack());
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
          <Alarm setIsOpen={() => setIsModalOpen(false)} />
        </Modal>
      )}
      <Section>
        <InputForm isEdit={false} setNewHorse={setHorse} />
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
