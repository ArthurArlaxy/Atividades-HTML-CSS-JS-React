import { useEffect, useState } from 'react'

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await response.json()
  return data.results
}

function App() {
  const [pokemon, setPokemon] = useState([])
  const [showPokemon, setShowPokemon] = useState(null)

  useEffect(() => {
    fetchPokemon().then(results =>{
      console.log(`Requisição funcionando`)
      console.log(`${results}`)
      setPokemon(results)
    })
  },[])

  const showDetails = async (url) =>{
    const data = await fetch(url).then(response => response.json())
    console.log(`Pokemon encontrado`)
    console.log(data)
    setShowPokemon(data)
  }

  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        <ul className="pokemon">
          {pokemon.map(mon => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button onClick={() => showDetails(mon.url)}>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showPokemon && (
        <div>
          <h2>{showPokemon.name}</h2>
          <img
            src={showPokemon.sprites.front_default}
            alt=""
          />
          <div className="stat">
            <b>Tipo: </b>
            {showPokemon.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>{showPokemon.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>{showPokemon.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {showPokemon.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {showPokemon.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}


export default App
