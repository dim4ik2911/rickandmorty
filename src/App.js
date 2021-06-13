import "./App.css";
import Header from "./component/Header";
import Search from "./component/Search";
import Cards from "./component/Cards";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [find, letsFind] = useState(" ");

  useEffect(() => {
    const getAllCharacters = () =>
      fetch(`https://rickandmortyapi.com/api/character/?name=${find}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results);
        });

    getAllCharacters();
  }, [find]);

  return (
    <div className="App">
      <Header />
      <Search setFind={(f) => letsFind(f)} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
