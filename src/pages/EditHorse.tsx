import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addHorseToCompare } from "../store/slices/horsesSlice";
import { selectHorse, selectCompareHorses } from "../store/selectors";
import { getHorseById } from "../store/requests/getHorseById";
import { updateHorse } from "../store/requests/updateHorse";
import { HorseIdInterface, HorseInterface } from "../common/types";
import {
  ButtonsGroup,
  ButtonsSection,
  Section,
  Wrapper,
} from "../common/styles";
import Alarm from "../components/Alarm";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import Modal from "../components/Modal";
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
    HorseIdInterface | HorseInterface
  >(horse);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getHorseById(id));
  }, [dispatch, id]);

  const updateCurrentHorse = () => {
    currentHorse.name &&
    currentHorse.profile.favouriteFood &&
    currentHorse.profile.physical.height &&
    currentHorse.profile.physical.weight
      ? dispatch(
          updateHorse({ ...horse, horse: currentHorse as HorseIdInterface })
        )
      : setIsModalOpen(true);
    history.push(`/horse/${horse.id}`);
  };

  if (Object.keys(horse).length === 0) return null;

  return (
    <Wrapper>
      <Section>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <InputForm
              isEdit={true}
              initialHorse={horse}
              setNewHorse={setCurrentHorse}
            />
            <ButtonsSection>
              <ButtonsGroup>
                <Button
                  title="Save"
                  handleClick={updateCurrentHorse}
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
      {isModalOpen && (
        <Modal>
          <Alarm setIsOpen={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default EditHorse;
