const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;