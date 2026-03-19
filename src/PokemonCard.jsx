import * as d3 from "d3";

const StatBar = ({ value, color, label }) => {
  const scale = d3.scaleLinear().domain([0, 160]).range([0, 100]);

  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <div className="stat-bar-bg">
        <div
          className="stat-bar-fill"
          style={{
            width: `${scale(value)}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <span className="stat-value">{value}</span>
    </div>
  );
};

const PokemonCard = ({ pokemon }) => {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const typeColor = `var(--type-${pokemon.type.toLowerCase()})`;

  return (
    <div className="pokemon-card" style={{ "--card-type-color": typeColor }}>
      <h2 className="pokemon-name">{pokemon.name}</h2>

      <div className="card-body">
        <div className="sprite-container">
          <img src={spriteUrl} alt={pokemon.name} className="pokemon-sprite" />
        </div>
        <div className="stats-container">
          <StatBar label="HP" value={pokemon.hp} color="#bebebe" />
          <StatBar label="ATK" value={pokemon.attack} color="#bebebe" />
        </div>
      </div>
      <div className="type-badge">{pokemon.type}</div>
    </div>
  );
};

export default PokemonCard;
