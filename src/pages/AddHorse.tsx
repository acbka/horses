import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "../api/store";
import { addHorse } from "../api/requests/addHorse";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import {
  Wrapper,
  ButtonsGroup,
  Section,
  ButtonsSection,
} from "../common/styles";
import { horseInterface } from "../common/horseInterfaces";


const AddHorse = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [horse, setHorse] = useState<horseInterface>();

  const createHorse = () => {
    if (horse?.name) {
      dispatch(addHorse({ horse })).then(() => history.goBack());
    } else alert("Enter horse name");
  };

  return (
    <Wrapper>
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
