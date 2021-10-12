export interface horseInterface {
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

export interface horseIdInterface extends horseInterface {
  id: string;
}
