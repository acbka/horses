import styled from "@emotion/styled/macro";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  min-height: 365px;
  height: 100%;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 0.6em 1em 0.35em rgba(0, 0, 0, 0.17);
  padding: 20px;
  margin-top: 30px;
  @media screen and (min-width: 830px) {
    margin-top: 0px;
  }
`;

export const List = styled.div`
  display: flex;
  min-width: 100px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`;

export const ButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  & :first-of-type {
    margin-right: 10px;
  }
`;
