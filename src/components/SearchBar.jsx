import './search.css';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Buscar..."
      onChange={(e) => onSearch(e.target.value)}
    
    />
  );
};

export default SearchBar;