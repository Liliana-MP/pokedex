export type Pokemon = {
  abilities: PokemonAbility[];
  base_experience: string;
  forms: Form[];
  game_indices: GameIndices[];
  height: number;
  held_items: Item[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: Specie;
  sprites: Sprite;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};

type PokemonAbility = {
  ability: Ability;
  isHidden: boolean;
  slot: number;
};

type Ability = {
  name: string;
  url: string;
};

type Form = {
  name: string;
  url: string;
};

type GameIndices = {
  game_index: number;
  version: Version;
};

type Version = {
  name: string;
  url: string;
};

type Item = {
  name: string;
  url: string;
  version_details: VersionDetails[];
};

type VersionDetails = {
  rarity: number;
  version: Version;
};

type Move = {
  name: string;
  url: string;
  version_group_details: VersionGroupDetails[];
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
};

type MoveLearnMethod = {
  name: string;
  url: string;
};

type VersionGroup = {
  name: string;
  url: string;
};

type Specie = {
  name: string;
  url: string;
};

type Sprite = {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: Stat;
};

type Stat = {
  name: string;
  url: string;
};

type PokemonType = {
  slot: number;
  type: Typing;
};

type Typing = {
  name: string;
  url: string;
};
