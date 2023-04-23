export interface HorseInterface {
  name: string;
  breed: string;
  profile: {
    favouriteFood: string;
    physical: {
      height: number | string;
      weight: number | string;
    };
  };
}

export interface HorseIdInterface extends HorseInterface {
  id: string;
}
