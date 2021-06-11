import "./App.css";
import Header from "./component/Header";
import Search from "./component/Search";
import Cards from "./component/Cards";
import { useEffect, useState } from "react";

function App() {
  const [episodes, setEpisodes] = useState([]);

  const getAllEpisodes = () => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse.results);
        setEpisodes(jsonResponse.results);
      });
  };

  useEffect(() => {
    getAllEpisodes();
  }, []);
  return (
    <div className="App">
      <Header />
      <Search />
      <Cards episodes={episodes} />
    </div>
  );
}

export default App;
