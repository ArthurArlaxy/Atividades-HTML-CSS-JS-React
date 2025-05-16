import products from '../data.json'

export function LoadProduct({ params }){
    const { productId } = params
    const product = products.find(p => p.id === +productId)

    if (!product){
        throw new Response("404 Produto não encontrado", {status:404})
    }

    return product
}