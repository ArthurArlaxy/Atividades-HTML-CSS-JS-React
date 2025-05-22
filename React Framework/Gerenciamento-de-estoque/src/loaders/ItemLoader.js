import { ItemsLoader } from "./ItemsLoader"

export function ItemLoader({ params }){
    const { items } = ItemsLoader()
    const { itemId } = params
    
    const findItem = items.find(item => item.id === +itemId)
    
    return findItem
}