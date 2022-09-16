export const POKEMON_TYPES = {
  FIRE: "fire",
  WATER: "water",
  GRASS: "grass",
  FLYING: "flying",
  BUG: "bug",
  ELECTRIC: "electric",
  PSYCHIC: "psychic",
  POISON: "poison",
  GROUND: "ground",
  GHOST: "ghost",
  ROCK: "rock",
  STEEL: "steel",
  DRAGON: "dragon",
  FAIRY: "fairy",
  NORMAL: "normal",
  DARK: "dark",
  ICE: "ice",
  FIGHTING: "fighting",
};

export const getColor = (type: string) => {
  switch (type) {
    case POKEMON_TYPES.FIRE:
      return "#EE8130";
    case POKEMON_TYPES.WATER:
      return "#6390F0";
    case POKEMON_TYPES.GRASS:
      return "#7AC74C";
    case POKEMON_TYPES.FLYING:
      return "#A98FF3";
    case POKEMON_TYPES.BUG:
      return "#A6B91A";
    case POKEMON_TYPES.ELECTRIC:
      return "#F7D02C";
    case POKEMON_TYPES.PSYCHIC:
      return "#F95587";
    case POKEMON_TYPES.POISON:
      return "#A33EA1";
    case POKEMON_TYPES.GROUND:
      return "#E2BF65";
    case POKEMON_TYPES.GHOST:
      return "#735797";
    case POKEMON_TYPES.ROCK:
      return "#B6A136";
    case POKEMON_TYPES.STEEL:
      return "#B7B7CE";
    case POKEMON_TYPES.DRAGON:
      return "#6F35FC";
    case POKEMON_TYPES.FAIRY:
      return "#D685AD";
    case POKEMON_TYPES.NORMAL:
      return "#A8A77A";
    case POKEMON_TYPES.DARK:
      return "#705746";
    case POKEMON_TYPES.ICE:
      return "#96D9D6";
    case POKEMON_TYPES.FIGHTING:
      return "#C22E28";
    default:
      return "black";
  }
};
