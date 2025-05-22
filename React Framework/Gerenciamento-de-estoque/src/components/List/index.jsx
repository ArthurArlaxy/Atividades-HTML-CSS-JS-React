import { Link } from "react-router-dom"


export function List({ title,items }){
    return(
        <>
            <div>
                <p>{title}</p>
                <p>Qtd.</p>
                <p>ações</p>
            </div>
            {items.length != 0 ? items.map(item => 
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <Link to={`/itens/${item.id}`}><button>Ver</button></Link>
                </div>
            ): <p>Adicione itens no estoque</p>}
        </>
    )
}

export function ListItems({ items,func }){

    return(
        <>
            <div>
                <p>Nome</p>
                <p>Em Estoque</p>
                <p>Categoria</p>
                <p>Data</p>
                <p>Ações</p>
            </div>
            {items.length != 0 ? items.map(item => 
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>{item.date}</p>
                    <p>{item.category}</p>
                    <div>
                        <Link to={`/itens/${item.id}`}><button>Ver</button></Link>
                        <Link><button onClick={()=> func(item.id)}>Excluir</button></Link>
                        <Link><button>Atualizar</button></Link>
                    </div>
                </div>
            ): <h2>Adicione itens ao estoque</h2>} 
        </>
    )
}