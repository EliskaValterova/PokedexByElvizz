import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import "./index.css";

const PokemonTypes = [
  { name: "all", color: "var(--type-all)" },
  { name: "dragon", color: "var(--type-dragon)" },
  { name: "electric", color: "var(--type-electric)" },
  { name: "fighting", color: "var(--type-fighting)" },
  { name: "fire", color: "var(--type-fire)" },
  { name: "ghost", color: "var(--type-ghost)" },
  { name: "grass", color: "var(--type-grass)" },
  { name: "normal", color: "var(--type-normal)" },
  { name: "psychic", color: "var(--type-psychic)" },
  { name: "rock", color: "var(--type-rock)" },
  { name: "water", color: "var(--type-water)" },
];

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPokemons = pokemons.filter((p) => {
    const matchesType =
      activeFilter === "all" || p.type.toLowerCase() === activeFilter;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="container">
      <header className="header">
        <h1>Pokedex</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      <nav className="filter-bar">
        {PokemonTypes.map((type) => (
          <div
            key={type.name}
            onClick={() => setActiveFilter(type.name)}
            className={`filter-item ${activeFilter === type.name ? "active" : ""}`}
            style={{ "--active-color": type.color }}
          >
            {type.name}
          </div>
        ))}
      </nav>

      <main className="card-grid">
        {filteredPokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </main>
    </div>
  );
}

export default App;
