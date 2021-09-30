import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-size: 40px;
  text-align: center;
`;


const NotFoundPage = () => {
   
  return (
    <div>
      <Title>404</Title>
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
