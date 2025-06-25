import './title.css';
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ResourceList from "../components/ResourceList";


const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCharacters = async (query = "") => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
      setCharacters(res.data.results);
    } catch {
      setCharacters([]);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1 className="title">Proyecto rick y morty</h1>
      <SearchBar onSearch={fetchCharacters} />
      <ResourceList characters={characters} />
    </div>
  );
};

export default Home;