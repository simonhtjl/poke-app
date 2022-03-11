import { Routes, Route, Link } from "react-router-dom";
import {ListPoke} from "./component/ListPoke";
import {MyPoke} from "./component/MyPoke";
import {DetailPoke} from "./component/DetailPoke";
import './App.css';
import { useEffect, useState } from "react";

const App = () =>{
  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () =>{
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results){
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a,b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h3>PokeDEX</h3>
          <div className="link">
            <Link to={"/"} className="link-1" style={{textDecoration: 'none'}}>List Poke</Link>
            <Link to={"/mypoke"} className="link-2" style={{textDecoration: 'none'}}>My Poke</Link>
          </div>
        </div>
        
        <div className="main">
            <Routes>
                <Route path="/" element={<ListPoke />} />
                <Route path="pokemons/:id" element={<DetailPoke />} />
                <Route path="/mypoke" element={<MyPoke />} />
            </Routes>
        </div>
      </div>



    </div>
  );
}

export default App;
