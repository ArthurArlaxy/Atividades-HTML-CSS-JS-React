import { Header } from './components/Header' 
import { ContainersPictures } from './components/containers.jsx'
import { MainText } from './components/MainText/index.jsx'
import { FinalText } from './components/FinalText/index.jsx'
import { Footer } from './components/Footer/index.jsx'

function App() {

  return (
    <>
      <Header/>
      <main>
        <MainText/>
        <ContainersPictures linkImage="/image4.jpeg" text="Percebi que amar é aceitar —
aceitar ser cuidado, aceitar carinho, aceitar o jeito do outro, até nas imperfeições,
aceitar conversas difíceis."/>
        <ContainersPictures linkImage="/image5.jpeg" className="reverse" text="Amar também é entregar sem esperar nada em troca —
entregar atenção, afeto, presença, tempo, esforços sinceros.
É sobre ceder, é sobre diálogo, é parceria."/>
        <ContainersPictures linkImage="/image3.jpeg" text="Amar é conforto no meio do caos,
é confiança construída com tempo,
é escolher o outro todos os dias,
é ser forte e também permitir ser frágil.
Amar é apoio, é sentimento."/>
      <FinalText/>
      </main>
      <Footer/>
    </>
  )
}

export default App
