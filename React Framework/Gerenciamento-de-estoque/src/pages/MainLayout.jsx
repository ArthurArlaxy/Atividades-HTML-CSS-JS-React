import { Link, Outlet } from "react-router-dom";

export function MainLayout(){
    return(
        <>
            <header>
                <h2>React Arthur Stock</h2>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/itens">Itens</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>Feito com React e React Router, por Arthur Albuquerque </p>
            </footer>
        </>
    )
}