import { Game } from "./components/Game"
import { NewGameForm } from "./components/NewGameForm"
import { useGameCollections } from "./hooks/useGameCollection"

export default function App(){
  const { games, addGames, removeGame } = useGameCollections()

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGames={addGames}/>
      <div className="games">
        {games.length > 0 ? 
          games.map((game => ( <Game key={game.id} title={game.title} cover={game.cover} onRemove={() => removeGame(game.id)}/> )))
          : ( <h2>Tente adicionar jogos</h2>) }
      </div>
    </div>
  )
}