const Card = ({ character }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      width: "200px",
      textAlign: "center"
    }}>
      <img src={character.image} alt={character.name} style={{ width: "100%" }} />
      <h3>{character.name}</h3>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
      <p>Género: {character.gender}</p>
    </div>
  );
};

export default Card;