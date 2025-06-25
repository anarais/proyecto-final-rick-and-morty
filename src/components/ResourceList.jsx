import Card from "./Card";

const ResourceList = ({ characters }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "10px" }}>
      {characters.map((char) => (
        <Card key={char.id} character={char} />
      ))}
    </div>
  );
};

export default ResourceList;