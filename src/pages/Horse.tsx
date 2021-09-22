import { horseIdInterface } from "../common/horseInterfaces";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

type HorsePropsType = {
  horse: horseIdInterface;
};

const Horse = ({ horse }: HorsePropsType) => {
  return (
    <Item>
      <Link to={`/horse/${horse.id}`}>{horse.name}</Link>
    </Item>
  );
};

export default Horse;
