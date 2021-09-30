import React from "react";
import styled from "@emotion/styled/macro";
import Button from "../components/Button";

type AlarmPropsType = {
  setIsOpen: () => void;
};

const Paragraph = styled.div`
  padding: 20px 0;
`;

const Alarm = ({ setIsOpen }: AlarmPropsType) => {
  return (
    <>
      <Paragraph>All fields must be filled!</Paragraph>
      <Button title="OK" handleClick={setIsOpen} />
    </>
  );
};

export default Alarm;
