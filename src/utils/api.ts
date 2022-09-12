import axios from "axios";
import { BASE_URL } from "../routes/routes";

export const getPokemon = (searchValue: string) => {
  return axios.get(BASE_URL + searchValue);
};
