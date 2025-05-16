import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export function UserInfo(){
    const userContext = useContext(UserContext)
    return(
        <>
            <h1>Informações do usuário</h1>
            <p>Nome de Usuário: {userContext.name}</p>
            <p>email: {userContext.email}</p>
            <p>XP: {userContext.xp}</p>
        </>
    )
}