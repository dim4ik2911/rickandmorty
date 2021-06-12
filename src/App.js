import "./App.css";
import Header from "./component/Header";
import Search from "./component/Search";
import Cards from "./component/Cards";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse.results);
        setCharacters(jsonResponse.results);
      });
  };

  useEffect(() => {
    getAllCharacters();
  }, []);
  return (
    <div className="App">
      <Header />
      <Search />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
