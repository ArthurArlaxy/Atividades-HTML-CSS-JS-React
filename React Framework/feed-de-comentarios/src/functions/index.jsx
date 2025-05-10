import { useState } from "react"

export function comentsFunction(){
    const [coments, setComents] = useState([])


    const addComent = ({email, coment} ) => {
        const id = Math.floor(Math.random()*100000)
        const newComent = { id, email, coment}
        setComents( state => {
            const newStateComents = [...state, newComent]
            return newStateComents
        })
    }
    
    return { coments, addComent }
}