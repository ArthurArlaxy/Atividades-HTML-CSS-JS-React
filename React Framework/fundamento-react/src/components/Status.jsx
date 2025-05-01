export const Status = ()=>{
    const status = true
    return (
    <h2 
        style={{
            color: status ? "#00ff9f":"#f64348"
        }}
    > 
        Current status: {status ? "On" : "Off"}
    </h2>)
}
