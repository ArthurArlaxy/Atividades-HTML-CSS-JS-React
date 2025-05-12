import { useRef, useState } from 'react'
import { InputValue } from './components/InputValue'


function App() {
    const ref = useRef(0)
    const [state, setState] = useState(0)
    let variable = 0

    const showValues = () => {
      alert(`
        Variavel: ${variable}
        Ref: ${ref.current}
        State: ${state}`)
    }

  return (
    <>
      <h1>Veja o valor no console, alert ou renderizado</h1>
      <InputValue/>
      <hr />
      <h2>Conhecendo o useRef</h2>
      <p>Variavel: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <hr />
      <button onClick={showValues}>Mostrar valores</button>
      <button onClick={() => variable++}>Aumentar Variavel</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState(state => state + 1) }>Aumentar State</button>
    </>
  )
}

export default App
