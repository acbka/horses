import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { useAppDispatch } from "../api/store";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  selectHorses,
  selectIsHorsesLoading,
  selectPage,
} from "../api/selectors";
import { addHorseToCompare } from "../api/slices/horsesSlice";
import { setPage } from "../api/slices/pageSlice";
import { getHorses } from "../api/requests/getHorses";
import Horse from "./Horse";
import Button from "../components/Button";
import { horseIdInterface } from "../common/horseInterfaces";
import Spinner from "../components/Spinner";
import {
  Wrapper,
  List,
  ButtonsGroup,
  Section,
  ButtonsSection,
} from "../common/styles";

const AddButton = styled(Button)`
  height: 40px;
`;

const HomePage = () => {
  const horsesPerPage = 5;
  const [pages, setPages] = useState(1);
  const [horsesOnPage, setHorsesOnPage] = useState<horseIdInterface[]>();
  const dispatch = useAppDispatch();
  const horses = useSelector(selectHorses);
  const page = useSelector(selectPage);
  const isHorsesLoading = useSelector(selectIsHorsesLoading);
  const history = useHistory();

  useEffect(() => {
    dispatch(getHorses()).then(() =>
      setPages(Math.ceil(horses.length / horsesPerPage))
    );
  }, [dispatch, horses.length]);

  useEffect(() => {
    const horsesArray: horseIdInterface[] = [...horses].splice(
      (page - 1) * horsesPerPage,
      horsesPerPage
    );
    setHorsesOnPage(horsesArray);
  }, [horses, page]);

  const createComparableArray = (value: horseIdInterface) => {
    dispatch(addHorseToCompare(value));
  };

  const horsesList = horsesOnPage?.map((item, index) => (
    <Horse key={index} horse={item} selectHorse={createComparableArray} />
  ));

  const addNewHorse = () => {
    history.push("/AddHorse");
  };

  return (
    <Wrapper>
      <Section>
        {isHorsesLoading ? <Spinner /> : <List>{horsesList}</List>}
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
      </Section>
    </Wrapper>
  );
};
export default HomePage;
