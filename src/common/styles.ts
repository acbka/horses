import styled from "@emotion/styled/macro";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 80px 50px;
  background-image: url("https://source.unsplash.com/1600x900/?horse");
`;
export const Section = styled.div`
  height: 100%;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 0.6em 1em 0.35em rgba(0, 0, 0, 0.17);
  padding: 20px 0;
`;
export const List = styled.div`
  display: flex;
  min-width: 100px;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 0 20px;
`;
export const ButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  & :first-child {
    margin-right: 10px;
  }
`;

export const Item = styled.div`
  padding: 10px 0;
`;
