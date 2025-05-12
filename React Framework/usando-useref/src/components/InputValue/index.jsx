import { useRef } from "react";

export function InputValue(){
    const inputRef = useRef(null)

    const handleClick = () =>{
        console.log(inputRef.current.value)
    }

    return (
        <>
            <input ref={inputRef} type="text" placeholder="Veja o valor no console" />
            <button onClick={handleClick}>Exibir Valor</button>
        </>
    )
}