export enum HorseBreeds {
  AmericanQuarter = "American Quarter",
  Andalusian = "Andalusian",
  Appaloosa = "Appaloosa",
  Arabian = "Arabian",
  Morgan = "Morgan",
  Paint = "Paint",
  Pony = "Pony",
  TennesseeWalker = "Tennessee Walker",
  Thoroughbred = "Thoroughbred",
  Warmblood = "Warmblood",
}

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
