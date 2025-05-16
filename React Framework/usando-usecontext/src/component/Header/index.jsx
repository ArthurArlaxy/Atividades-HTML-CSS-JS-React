import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export function Header(){
    const userContext = useContext(UserContext)
    return(
        <h3>Bem Vindo, {userContext.name}!</h3>
    )
}