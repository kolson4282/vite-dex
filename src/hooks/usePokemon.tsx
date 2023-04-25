import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../types/pokemon";
import axios from "axios";

const usePokemon = (id: string | number) => {
  const query = useQuery<Pokemon>([`pokemon/${id}`], () => getPokemon(id));

  return query;
};

const getPokemon = (id: string | number) => {
  return axios
    .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.data);
};

export default usePokemon;
