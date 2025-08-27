import React, { useState } from "react";
import { HorseBreeds, HorseInterface, HorseIdInterface } from "../common/types";
import { List } from "../common/styles";
import Input from "./Input";
import Select from "./Select";

type InputFormPropsType = {
  isEdit: boolean;
  initialHorse?: HorseIdInterface;
  setNewHorse: (arg: HorseInterface | HorseIdInterface) => void;
};

const InputForm = ({
  isEdit,
  initialHorse,
  setNewHorse,
}: InputFormPropsType) => {
  const [horse, setHorse] = useState<HorseInterface | HorseIdInterface>(
    initialHorse || {
      name: "",
      breed: Object.values(HorseBreeds)[0],
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
      {!isEdit && (
        <Select
          name="Breed"
          handleChange={(value) => setHorse({ ...horse, breed: value })}
        />
      )}
      <Input
        name="Food"
        initialValue={horse.profile.favouriteFood}
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
