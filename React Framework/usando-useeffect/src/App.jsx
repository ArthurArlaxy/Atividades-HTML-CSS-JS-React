import { useEffect, useState } from 'react'


function Counter(){
  const [count , setCount] = useState(0)

  useEffect( ()=> {
    console.log(`Exibindo o componente`)

    return ()=>{
      console.log(`Limpando o componente`)
      console.log(`Componente retirado`)
    }
  },[])

  return(
    <button onClick={()=> setCount(count => count + 1)}>Contador: {count}</button>
  )
}

function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Usando o useEffect </h1>
      <div>
        <label htmlFor="check">Exibir</label>
        <input type="checkbox" name="check" id="check" onChange={() => setShow(state => !state)} />
      </div>
      {show ? <Counter/> : null}
    </>
  )
}

export default App
