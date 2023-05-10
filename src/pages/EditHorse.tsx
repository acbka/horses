import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { addHorseToCompare } from "../store/slices/horsesSlice";
import {
  selectCompareHorses,
  selectHorse,
  selectIsHorseLoading,
} from "../store/selectors";
import { getHorseById } from "../store/requests/getHorseById";
import { getHorses } from "../store/requests/getHorses";
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

const EditHorse = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const horse = useSelector(selectHorse);
  const isLoading = useSelector(selectIsHorseLoading);
  const compareHorses = useSelector(selectCompareHorses);
  const { id } = useParams();
  const [currentHorse, setCurrentHorse] = useState<
    HorseIdInterface | HorseInterface
  >(horse);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getHorseById(id as string));
  }, [dispatch, id]);

  const updateCurrentHorse = () => {
    currentHorse.name &&
    currentHorse.profile.favouriteFood &&
    currentHorse.profile.physical.height &&
    currentHorse.profile.physical.weight
      ? dispatch(updateHorse(currentHorse as HorseIdInterface)).then(() =>
          dispatch(getHorses())
        )
      : setIsModalOpen(true);
    navigate(`/horse/${horse.id}`, { replace: true });
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
                  navigate("/");
                }}
              />
            </ButtonsSection>
          </>
        )}
      </Section>
      {isModalOpen && (
        <Modal>
          <Alarm
            message="All fields must be filled!"
            setIsOpen={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

export default EditHorse;
