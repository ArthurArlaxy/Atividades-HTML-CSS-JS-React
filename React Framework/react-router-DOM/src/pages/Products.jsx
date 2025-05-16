import { Link } from 'react-router-dom'
import products from '../data.json'

export function Products(){
    return(
        <>
            <h1>Nossos produtos:</h1>
            <hr />
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <Link to={`/products/${product.id}`}><button>ver</button></Link>
                        <button>comprar</button>
                    </li>
                ))}
            </ul>
        </>
    )
}