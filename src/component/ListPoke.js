import React, { useEffect,useState } from 'react';
import './ListPoke.css';
import {getPokemons,getPokemonByName} from '../services/axios';
import { useNavigate } from "react-router-dom";
import usePokemon from '../hooks/usePokemon';


export const ListPoke = () => {
  const { addPokemonToCart } = usePokemon();
  const navigate = useNavigate();
  const [allPokemons,setAllPokemons] = useState([])
  
  
  useEffect(() => {
    fetchPokemons()
  },[])

  const fetchPokemons = async () => {
    try {
      const payload = await getPokemons();
      const promises = Array.from(payload?.data?.results || []).map(
        async (item) => {
          const payloadDetail = await getPokemonByName(item?.name || "");
          return {
            id: payloadDetail?.data?.name || "",
            name: payloadDetail?.data?.name || "",
            img:
              payloadDetail?.data?.sprites.other.dream_world.front_default ||
              "",
          };
        }
      );
      const results = await Promise.all(promises);
      setAllPokemons(results);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
    {Array.from(allPokemons || []).map((item,index) => {
      return(
        <div className="listPoke">
        <img src={item.img}
             className="img-poke"
             onClick={() => navigate(`/pokemons/${item.id}?name=${item.name}`)}/>
        <span className="name-poke">{item?.name}</span><hr/>
        <button 
          className="btn-poke"
          onClick={(e) => {
            e.preventDefault();
            addPokemonToCart(item);
          }}>
            +
        </button>
      </div>
      );
    })}

    </>
  )
}
