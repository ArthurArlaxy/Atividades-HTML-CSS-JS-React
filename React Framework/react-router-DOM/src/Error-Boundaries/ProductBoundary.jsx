import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ProductErrorBoundary(){
    const error = useRouteError()

    if (isRouteErrorResponse(error)){
        switch (error.status) {
            case 404:
                return <h2>Oops... Esse produto não foi encontrado</h2>
            case 401:
                return <h2>Você precisa fazer login para ter acesso a essa pagina</h2>
            case 500:
                return <h2>Ocorreu um erro em nosso servidor =(</h2>
            default:
                return <h2>Ops... Ocorreu um erro!</h2>
        }
    }
    return <h2>Ops... Ocorreu um erro!</h2>
}