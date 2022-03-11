import { useSMState, useSMUpdater } from './useSM';
  
  const usePokemon = () => {
    const state = useSMState();
    const dispatch = useSMUpdater();
    
    const addPokemonToCart = (data) => {
        dispatch({
            type: "ADD_POKEMON_TO_CART",
            data
        })
    }

    const deletePokemonFromCart = (index) => {
      dispatch({
          type: "DELETE_POKEMON_FROM_CART",
          index : index
      })
  }

    console.log(state)
    return { pokemonCarts: state?.pokemonCarts, addPokemonToCart,deletePokemonFromCart };
  };
  
  export default usePokemon;
  