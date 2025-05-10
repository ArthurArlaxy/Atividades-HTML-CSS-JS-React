import { useState } from 'react'
import { Button } from '../Button'
import { Input, TextArea } from '../Inputs'
import styles from './Form.module.css'



export function Comentsform({ addComents }) {
    const [email, setEmail] = useState("")
    const [coment, setComent] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addComents({email,coment})
        setEmail("")
        setComent("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Feed de Comentários</h1>
            <Input type="text" text="Email:" id="email" value={email} inputFunction={(ev)=> setEmail(ev.target.value)}/>
            <TextArea text="Email:" id="comentario" value={coment} inputFunction={(ev) => setComent(ev.target.value)}/>
            <Button />
        </form>
    )  
}