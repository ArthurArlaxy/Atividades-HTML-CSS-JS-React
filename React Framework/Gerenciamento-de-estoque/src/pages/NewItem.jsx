import { useState } from "react"
import { ItemsLoader } from "../loaders/ItemsLoader"

export function NewItem(){
    const [name, setName] = useState("") 
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const { addItem } = ItemsLoader()
    

    const handleSubmit = (ev) =>{
        ev.preventDefault()
        addItem(name,Number(quantity),Number(price),category,description)
        setName("")
        setQuantity("")
        setPrice("")
        setCategory("")
        setDescription("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" value={name} onChange={(ev) => setName(ev.target.value)}/>
            </div>
                    <div>
                <label htmlFor="quantity">Quantidade</label>
                <input type="number" id="quantity" value={quantity} onChange={(ev) => setQuantity(ev.target.value)} />
            </div>
            <div>
                <label htmlFor="price">Preço</label>
                <input type="number" id="price" value={price} onChange={(ev) => setPrice(ev.target.value)}/>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" value={category} onChange={(ev) => setCategory(ev.target.value)}>

                    <option value="" disabled>Qual categoria</option>
                    <option value="eletronicos">Eletronicos</option>
                    <option value="roupas">Roupas</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="livros">Livros</option>   

                </select>

            </div>
            <textarea name="Description" id="description" placeholder="faça uma breve descrição" value={description} onChange={(ev) => setDescription(ev.target.value)}></textarea>

            <button >Salvar</button>
        </form>
    )
}