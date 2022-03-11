import { Routes, Route, Link } from "react-router-dom";
import {ListPoke} from "./component/ListPoke";
import {MyPoke} from "./component/MyPoke";
import {DetailPoke} from "./component/DetailPoke";
import './App.css';

const App = () =>{
 
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
