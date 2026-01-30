import { Title } from "./components/Title"

function sum(a, b) {
  return a + b
}


export function App(){
  return(
    <div>
      <Title/>
      <h2>It's easy, like 1 + 1 is {sum(1, 1)}</h2>
    </div>
  )
} 