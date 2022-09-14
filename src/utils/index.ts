export const POKEMON_TYPES = {
  FIRE: "fire",
  WATER: "water",
  GRASS: "grass",
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
};

export const getBackground = (type: string) => {
  switch (type) {
    case POKEMON_TYPES.FIRE:
      return "url(https://upload.wikimedia.org/wikipedia/commons/5/56/Pokémon_Fire_Type_Icon.svg)";
    case POKEMON_TYPES.WATER:
      return "url(https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg)";
    case POKEMON_TYPES.GRASS:
      return "url(https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg)";
    case POKEMON_TYPES.BUG:
      return "url(https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg)";
    case POKEMON_TYPES.ELECTRIC:
      return "url(https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg)";
    case POKEMON_TYPES.PSYCHIC:
      return "url(https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg)";
    case POKEMON_TYPES.POISON:
      return "url(https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg)";
    case POKEMON_TYPES.GROUND:
      return "url(https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg)";
    case POKEMON_TYPES.GHOST:
      return "url(https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg)";
    case POKEMON_TYPES.ROCK:
      return "url(https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg)";
    case POKEMON_TYPES.STEEL:
      return "url(https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg)";
    case POKEMON_TYPES.DRAGON:
      return "url(https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg)";
    case POKEMON_TYPES.FAIRY:
      return "url(https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg)";
    case POKEMON_TYPES.NORMAL:
      return "url(https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg)";
  }
};
