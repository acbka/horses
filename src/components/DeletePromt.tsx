import React from "react";
import styled from "@emotion/styled/macro";
import Button from "./Button";

type DeletePromtPropsType = {
  deleteHorse: () => void;
  closeModal: () => void;
};

const Paragraph = styled.div`
  padding: 20px 0;
`;
const ButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & :first-of-type {
    margin-right: 10px;
  }
`;

const DeletePromt = ({ deleteHorse, closeModal }: DeletePromtPropsType) => {
  const delHorse = () => {
    deleteHorse();
    closeModal();
  };

  return (
    <>
      <Paragraph>Are you sure?</Paragraph>
      <ButtonsGroup>
        <Button title="Yes" handleClick={delHorse} />
        <Button title="No" handleClick={closeModal} />
      </ButtonsGroup>
    </>
  );
};

export default DeletePromt;
