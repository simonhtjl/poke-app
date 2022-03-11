import './ListPoke.css';
import {useNavigate} from 'react-router-dom'
import usePokemon from '../hooks/usePokemon';

export const MyPoke = () => {
  const navigate = useNavigate()
  const { pokemonCarts ,deletePokemonFromCart} = usePokemon();

  return (
    <>
    {Array.from(pokemonCarts || []).map((item,index) => {
      return(
        <div className="listPoke">
        <img src={item.img}
             alt=""
             className="img-poke"
             onClick={() => navigate(`/pokemons/${item.id}?name=${item.name}`)}/>
        <span className="name-poke">{item?.name}</span> <hr/>
        <button 
          className="btn-poke"
          onClick={() => {
            deletePokemonFromCart(index);
          }}>
            -
        </button>
      </div>
      );
    })}

    </>
  )
}
