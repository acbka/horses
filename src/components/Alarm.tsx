import React from "react";
import styled from "@emotion/styled/macro";
import Button from "./Button";

type AlarmPropsType = {
  message: string;
  setIsOpen: () => void;
};

const Paragraph = styled.div`
  padding: 20px 0;
`;

const Alarm = ({ message, setIsOpen }: AlarmPropsType) => {
  return (
    <>
      <Paragraph>{message}</Paragraph>
      <Button title="OK" handleClick={setIsOpen} />
    </>
  );
};

export default Alarm;
