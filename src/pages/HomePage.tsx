import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import {
  selectIsHorsesLoading,
  selectHorses,
  selectPage,
} from "../store/selectors";
import {
  addHorseToCompare,
  removeHorseFromCompare,
} from "../store/slices/horsesSlice";
import { setPage } from "../store/slices/pageSlice";
import { deleteHorse } from "../store/requests/deleteHorse";
import { HorseIdInterface } from "../common/types";
import {
  ButtonsGroup,
  ButtonsSection,
  List,
  Section,
  Wrapper,
} from "../common/styles";
import Button from "../components/Button";
import Horse from "../components/Horse";
import Spinner from "../components/Spinner";

const AddButton = styled(Button)`
  height: 40px;
`;

const HomePage = () => {
  const horsesPerPage = 5;
  const dispatch = useAppDispatch();
  const [pages, setPages] = useState(1);
  const [horsesOnPage, setHorsesOnPage] = useState<HorseIdInterface[]>();
  const horses = useSelector(selectHorses);
  const page = useSelector(selectPage);
  const isHorsesLoading = useSelector(selectIsHorsesLoading);
  const navigate = useNavigate();

  useEffect(() => {
    setPages(Math.ceil(horses.length / horsesPerPage));
  }, [dispatch, horses.length]);

  useEffect(() => {
    const horsesArray: HorseIdInterface[] = [...horses].splice(
      (page - 1) * horsesPerPage,
      horsesPerPage
    );
    setHorsesOnPage(horsesArray);
  }, [horses, page]);

  const createComparableArray = (value: HorseIdInterface) => {
    dispatch(addHorseToCompare(value));
  };

  const addNewHorse = () => {
    navigate("/AddHorse");
  };

  const removeHorse = (horse: HorseIdInterface) => {
    dispatch(deleteHorse(horse)).then(() =>
      dispatch(removeHorseFromCompare(horse.id))
    );

    const numberOfPages = Math.ceil((horses.length - 1) / horsesPerPage);

    if (page > numberOfPages) {
      dispatch(setPage(Math.ceil(numberOfPages)));
    }
  };

  return (
    <Wrapper>
      <Section>
        {isHorsesLoading ? (
          <Spinner />
        ) : (
          <>
            <List>
              {horsesOnPage?.map((item, index) => (
                <Horse
                  key={index}
                  horse={item}
                  selectHorse={createComparableArray}
                  removeHorse={removeHorse}
                />
              ))}
            </List>
            <ButtonsSection>
              <ButtonsGroup>
                <Button
                  title={`Preev ${horsesPerPage}`}
                  handleClick={() => dispatch(setPage(page - 1))}
                  disabled={page === 1}
                />
                <Button
                  title={`Next ${horsesPerPage}`}
                  handleClick={() => dispatch(setPage(page + 1))}
                  disabled={page === pages}
                />
              </ButtonsGroup>
              <AddButton title="Add horse" handleClick={addNewHorse} />
            </ButtonsSection>
          </>
        )}
      </Section>
    </Wrapper>
  );
};

export default HomePage;
