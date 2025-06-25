import './title.css';
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ResourceList from "../components/ResourceList";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true); 

  const fetchCharacters = async (query = "", currentPage = 1) => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}&page=${currentPage}`);
      setCharacters(res.data.results);
      setHasNextPage(res.data.info.next !== null);
    } catch {
      setCharacters([]);
      setHasNextPage(false);
    }
  };

  useEffect(() => {
    fetchCharacters(search, page);
  }, [page]);

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
    fetchCharacters(value, 1);
  };

  return (
    <div>
      <h1 className="title">Proyecto Rick y Morty</h1>
      <SearchBar onSearch={handleSearch} />
      <ResourceList characters={characters} />
      
      {}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)} disabled={!hasNextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
};


export default Home;