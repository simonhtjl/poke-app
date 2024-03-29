import axios from "axios"
const baseURL = "https://pokeapi.co/api/v2"

export const getPokemons = () => axios({
    method: "GET",
    baseURL,
    url:"/pokemon",
})

export const getPokemonByName = (name) => axios({
    method: "GET",
    baseURL,
    url: `/pokemon/${name}`,
  });