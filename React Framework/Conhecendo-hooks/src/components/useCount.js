import { useState } from "react";

function getInitialValue() {
    console.log("obtendo valor inicial")
    return 0 + 1
}

export default function useCounter() {
    //Mas isso apresenta um problema, como podemos ver no console, que é o fato da função ser executada em cada montagem. Para resolver isso só precisamos envolver a chamada da função em uma função anônima:
    
    const [count, setCount] = useState(() => getInitialValue())

    const increment = () => {

    //O setState aceita como parâmetro uma função de callback cujo primeiro argumento é o valor “imediatamente” anterior, o que nos permite ter acesso a esse valor sempre atualizado. O retorno desse callback deve ser o valor que queremos “setar” no estado:

    setCount((previousCount) => previousCount + 1)
    setCount((previousCount) => previousCount + 1)
}

    return { count, increment }
}