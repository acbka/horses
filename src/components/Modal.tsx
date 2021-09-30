import React from "react";
import styled from "@emotion/styled/macro";

type ModalPropsType = {
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  left: calc(50% - 165px);
  width: 330px;
  height: 140px;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.5);
  z-index: 5;
`;

const Modal = ({ children }: ModalPropsType) => {
  return (
    <>
      <Layout></Layout>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Modal;
