import { useLoaderData } from "react-router-dom";

export function Item(){
    const item = useLoaderData()

    return(
        <>
            <div>
                <h1>{item.nome}</h1>
                <button>Excluir</button>
            </div>
        </>
    )
}