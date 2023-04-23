import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectCompareHorses } from "../store/selectors";
import { HorseIdInterface } from "../common/types";
import DeletePromt from "./DeletePromt";
import IconButton from "./IconButton";
import Modal from "./Modal";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import SelectIcon from "../icons/SelectIcon";

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`;

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-main);
  border-radius: 4px;
`;

type HorsePropsType = {
  horse: HorseIdInterface;
  selectHorse: (arg: HorseIdInterface) => void;
  removeHorse: (arg: HorseIdInterface) => void;
};

const Horse = ({ horse, selectHorse, removeHorse }: HorsePropsType) => {
  const compareHorses = useSelector(selectCompareHorses);
  const history = useHistory();
  const [isModalOpen, setModalOpen] = useState(false);

  const editHorse = () => {
    history.push(`/edit/${horse.id}`);
  };

  return (
    <>
      <Item>
        <Link to={`/horse/${horse.id}`}>{horse.name}</Link>
        <ButtonsGroup>
          <IconButton
            handleClick={editHorse}
            disabled={
              compareHorses.findIndex((item) => item.id === horse.id) !== -1
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton
            handleClick={() => selectHorse(horse)}
            disabled={
              compareHorses.length === 2 ||
              compareHorses.findIndex((item) => item.id === horse.id) !== -1
            }
          >
            <SelectIcon />
          </IconButton>
          <IconButton handleClick={() => setModalOpen(true)}>
            <DeleteIcon />
          </IconButton>
        </ButtonsGroup>
      </Item>
      {isModalOpen && (
        <Modal>
          <DeletePromt
            deleteHorse={() => removeHorse(horse)}
            closeModal={() => setModalOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default Horse;
