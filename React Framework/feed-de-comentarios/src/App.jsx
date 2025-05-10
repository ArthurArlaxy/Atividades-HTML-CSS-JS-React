import { Comentsform } from './components/ComentsForm'
import { comentsFunction } from './functions'


function App() {
  const { addComent, coments} = comentsFunction()
  return (
    <>
      <Comentsform addComents={addComent}/>
      <div>
        {coments.length > 0? 
        coments.map((coment => (
          <div key={coment.id}>
            <h3>{coment.email}</h3>
            <p>{coment.coment}</p>
          </div>
        ))) 
        :<h2>Seja o primeiro a comentar!</h2>}
      </div>
    </>
  )
}

export default App
