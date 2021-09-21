import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";
import { useAppDispatch } from "../api/store";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectHorses } from "../api/selectors";
import { getHorses } from "../api/requests/getHorses";
import Horse from "./Horse";
import Button from "../components/Button";
import {
  Wrapper,
  List,
  ButtonsGroup,
  Section,
  ButtonsSection,
} from "../common/styles";
import { horseIdInterface } from "../common/horseInterfaces";

const AddButton = styled(Button)`
  height: 40px;
`;

const HomePage = () => {
  const horsesPerPage = 10;
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [horsesOnPage, setHorsesOnPage] = useState<horseIdInterface[]>();
  const dispatch = useAppDispatch();
  const horses = useSelector(selectHorses);
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

  const horsesList = horsesOnPage?.map((item, index) => (
    <Horse key={index} horse={item} />
  ));

  const addNewHorse = () => {
    history.push("/AddHorse");
  };

  return (
    <Wrapper>
      <Section>
        <List>{horsesList}</List>
        <ButtonsSection>
          <ButtonsGroup>
            <Button
              title={`Preev ${horsesPerPage}`}
              handleClick={() => setPage(page - 1)}
              disabled={page === 1}
            />
            <Button
              title={`Next ${horsesPerPage}`}
              handleClick={() => setPage(page + 1)}
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
