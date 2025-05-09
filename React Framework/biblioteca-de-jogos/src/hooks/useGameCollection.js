import { useState } from "react"

export function useGameCollections(){
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("game-lib")
        if (!storedGames || storedGames === "undefined"){
            return []
        } 
        const gameArray = JSON.parse(storedGames)
        return gameArray
    })
    
    const addGames = ({title, cover}) => {
        const id=Math.floor(Math.random()* 1000000)
        const game = { id, title, cover }
        setGames(state => {
            const newState = [...state,game]
            localStorage.setItem("game-lib", JSON.stringify(newState))
            return newState
        })
    }
    
    const removeGame = (id) => {
        const newState = setGames(state => state.filter(game => game.id !== id )) 
        localStorage.setItem("game-lib",JSON.stringify(newState))
        return newState 
    }
    
    return { games, addGames, removeGame}
}