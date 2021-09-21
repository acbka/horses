import { horseIdInterface } from "../common/horseInterfaces";
import { Link } from "react-router-dom";
import { Item } from "../common/styles";

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
