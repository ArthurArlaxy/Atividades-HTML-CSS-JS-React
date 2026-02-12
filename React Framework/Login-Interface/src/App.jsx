import { TextArea } from "./Components/TextArea"
import { Button } from "./Components/Button"
import "./App.css"

function App() {


  return (
    <section>
      <img src="" alt="" />
      <div>
        <TextArea content="Sou Foda"/>
        <TextArea content="Sou Foda"/>
        <TextArea content="Sou Foda"/>
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
