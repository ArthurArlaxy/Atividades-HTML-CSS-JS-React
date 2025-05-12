import { useState } from "react"

export function comentsFunction(){
    const [coments, setComents] = useState([])


    const addComent = ({email, coment} ) => {
        const id = Math.floor(Math.random()*100000)
        const createdAt = new Date()
        const newComent = { id, email, createdAt, coment,}
        setComents( state => {
            const newStateComents = [ newComent,...state]
            return newStateComents
        })
    }
    
    return { coments, addComent }
}