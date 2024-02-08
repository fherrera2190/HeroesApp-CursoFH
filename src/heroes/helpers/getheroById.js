import { heroes } from "../data/heroes";

export const getheroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
