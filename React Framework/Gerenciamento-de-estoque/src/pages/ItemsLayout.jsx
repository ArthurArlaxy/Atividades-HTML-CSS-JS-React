import { Link, Outlet } from "react-router-dom";

export function ItemsLayout(){
    return(
        <>
            <h1>Stock Items</h1>
            <nav>
                <Link to="/itens">Todos os itens</Link>
                <Link to="/itens/newItens">Novo item</Link>
            </nav>
            <section>
                <Outlet/>
            </section>
        </>
    )
}