import { useState } from "react"
import { TextInput } from "./TextInput"


export function NewGameForm({ addGames }){

    const [title,setTitle] = useState("")
    const [cover,setCover] = useState("")

    const handleSubmit = (ev) =>{
        ev.preventDefault()
        addGames({title, cover})
        setTitle("")
        setCover("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextInput text="Título:" id="title" value={title} onChange={(ev) => setTitle(ev.target.value)}/>
            <TextInput text="Imagem:" id="cover" value={cover} onChange={(ev) => setCover(ev.target.value)}/>
            <button type="submit">Adicionar à Biblioteca</button>
        </form>
    )
}