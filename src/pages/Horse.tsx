import React from "react";
import styled from "@emotion/styled/macro";
import { horseIdInterface } from "../common/horseInterfaces";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCompareHorses } from "../api/selectors";
import MenuButton from "../components/MenuButton";
import SelectIcon from "../components/icons/SelectIcon";
import EditIcon from "../components/icons/EditIcon";
import DeleteIcon from "../components/icons/DeleteIcon";

type HorsePropsType = {
  horse: horseIdInterface;
  selectHorse: (arg: horseIdInterface) => void;
  removeHorse: (arg: horseIdInterface) => void;
};

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
  & :first-of-type {
     margin-left: 0;
  }
`;
const StyledLink = styled(Link)`
  margin-right: 5px;
`;

const Horse = ({ horse, selectHorse, removeHorse }: HorsePropsType) => {
  const compareHorses = useSelector(selectCompareHorses);

  return (
    <>
      <Item>
        <Link to={`/horse/${horse.id}`}>{horse.name}</Link>
        <ButtonsGroup>
          <StyledLink to={`/edit/${horse.id}`}>
            <MenuButton
              // handleClick={getData}
              disabled={
                compareHorses.findIndex((item) => item.id === horse.id) !== -1
              }
            >
              <EditIcon />
            </MenuButton>
          </StyledLink>

          <MenuButton
            handleClick={() => selectHorse(horse)}
            disabled={
              compareHorses.length === 2 ||
              compareHorses.findIndex((item) => item.id === horse.id) !== -1
            }
          >
            <SelectIcon />
          </MenuButton>
          <MenuButton handleClick={() => removeHorse(horse)}>
            <DeleteIcon />
          </MenuButton>
        </ButtonsGroup>
      </Item>
    </>
  );
};

export default Horse;
