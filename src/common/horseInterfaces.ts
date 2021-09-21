export interface horseInterface {
  name: string;
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
