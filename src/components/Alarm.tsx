import React from "react";
import styled from "@emotion/styled/macro";
import Button from "./Button";

type AlarmPropsType = {
  setIsOpen: () => void;
};

const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0.6em 1em 0.35em rgba(0, 0, 0, 0.17);
  padding: 20px;
  z-index: 10;
`;
const Layout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgb(255, 255, 255, 0.5);
  z-index: 5;
`;

const Paragraph = styled.div`
  padding: 20px 0;
`;

const Alarm = ({ setIsOpen }: AlarmPropsType) => {
  return (
    <>
      <Layout></Layout>
      <Wrapper>
        <Paragraph>Enter horse name!</Paragraph>
        <Button title="OK" handleClick={setIsOpen} />
      </Wrapper>
    </>
  );
};

export default Alarm;
