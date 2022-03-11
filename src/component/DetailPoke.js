import {React,useEffect,useState} from 'react'
import { useNavigate, useParams, } from "react-router-dom";
import {getPokemonByName} from '../services/axios'
import './DetailPoke.css';

export const DetailPoke = () => {
  const params = useParams()
  const navigate = useNavigate();
  const [pokemonData, setPokemon] = useState(null);
  
  useEffect(() => {
    if (params?.id) {
      fetchPokemon(params?.id);
    }
  }, [params]);

  const fetchPokemon = async (id) => {
    try {
      const payloadDetail = await getPokemonByName(id);
      const result = {
          id: payloadDetail?.data?.name || "",
          name: payloadDetail?.data?.name || "",
          img: payloadDetail?.data?.sprites.other.dream_world.front_default || ""
      };
      setPokemon(result)
    } catch (error) {
      console.log(error, "error");
    }
  };

  return(
    <div className="dtl-listPoke">
    <img src={pokemonData?.img} className="dtl-imgpoke" />
    <span className="dtl-namepoke">name : <br/>{pokemonData?.name}</span>
  </div>
  );
}
