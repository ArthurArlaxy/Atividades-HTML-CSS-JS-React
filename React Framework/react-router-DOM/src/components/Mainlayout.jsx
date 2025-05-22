import {Link, Outlet } from "react-router-dom";

export function MainLayout(){
    return(
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>O mercado feito para você</p>
            </footer>
        </>
    )
}