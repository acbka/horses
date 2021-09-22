import { horseIdInterface } from "../common/horseInterfaces";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCompareHorses } from "../api/selectors";
import { addHorseToCompare } from "../api/slices/horsesSlice";
import Button from "../components/Button";

type HorsePropsType = {
  horse: horseIdInterface;
  selectHorse: (arg: horseIdInterface) => void;
};

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const StyledButton = styled(Button)`
  margin-left: 35px;
  width: 50px;
  height: 20px;
`;

const Horse = ({ horse, selectHorse }: HorsePropsType) => {
   const compareHorses = useSelector(selectCompareHorses);
  return (
    <Item>
      <Link to={`/horse/${horse.id}`}>{horse.name}</Link>
      <StyledButton title="Select" handleClick={() => selectHorse(horse)} disabled={compareHorses.length===2} />
    </Item>
  );
};

export default Horse;
