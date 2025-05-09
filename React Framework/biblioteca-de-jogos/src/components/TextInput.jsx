export function TextInput({ text,id, value, onChange}){
    return(
        <div>
            <label htmlFor={id}>{text}</label>
            <input type="text" name={id} id={id} value={value} onChange={onChange} />
        </div>
    )
}