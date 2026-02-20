import { TextArea } from "./Components/TextArea"
import { Button } from "./Components/Button"
import "./App.css"

function App() {


  return (
    <section>
      <img src="./Foto_Arthur.jpg" alt="" />
      <div>
        <TextArea content="Projetos para praticar e evoluir como desenvolvedor."/>
        <TextArea content="Aplicações com foco em backend, APIs e banco de dados."/>
        <TextArea content="Código organizado, versionado e em constante evolução."/>
      </div>
      <div>
        <Button link="Github" content="Github"/>
        <Button link="Linkedin" content="Linkedin"/>
        <Button link="Twitter" content="Twitter"/>
      </div>
    </section>
  )
}

export default App
