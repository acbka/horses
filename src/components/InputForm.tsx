import React, { useState } from "react";
import Input from "../components/Input";
import { horseInterface, horseIdInterface } from "../common/horseInterfaces";
import { List } from "../common/styles";

type InputFormPropsType = {
  initialHorse?: horseIdInterface;
  setNewHorse: (arg: horseInterface | horseIdInterface) => void;
};

const InputForm = ({ initialHorse, setNewHorse }: InputFormPropsType) => {
  const [horse, setHorse] = useState<horseInterface | horseIdInterface>(
    initialHorse || {
      name: "",
      breed: "",
      profile: {
        favouriteFood: "",
        physical: {
          height: "",
          weight: "",
        },
      },
    }
  );

  return (
    <List onBlur={() => setNewHorse(horse)}>
      <Input
        name="Name"
        initialValue={horse.name}
        handleChange={(value) => setHorse({ ...horse, name: value as string })}
      />
      <Input
        name="Food"
        initialValue={horse.profile?.favouriteFood}
        handleChange={(value) =>
          setHorse({
            ...horse,
            profile: { ...horse.profile, favouriteFood: value as string },
          })
        }
      />
      <Input
        name="Height"
        type="number"
        initialValue={horse.profile?.physical.height}
        handleChange={(value) =>
          setHorse({
            ...horse,
            profile: {
              ...horse.profile,
              physical: {
                ...horse.profile?.physical,
                height: value,
              },
            },
          })
        }
      />
      <Input
        name="Weight"
        type="number"
        initialValue={horse.profile.physical.weight}
        handleChange={(value) =>
          setHorse({
            ...horse,
            profile: {
              ...horse.profile,
              physical: {
                ...horse.profile?.physical,
                weight: value,
              },
            },
          })
        }
      />
    </List>
  );
};

export default InputForm;
