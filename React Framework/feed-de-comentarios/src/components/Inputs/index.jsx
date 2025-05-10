export function Input({ type, id, text, value, inputFunction}){
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input type={type} name={id} id={id} value={value} onChange={inputFunction} />
        </>
    )
}

export function TextArea({id, text, value, inputFunction}){
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <textarea cols="35" rows="6" name={id} id={id} value={value} onChange={inputFunction} />
        </>
    )
}