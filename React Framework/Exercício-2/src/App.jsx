import { Card } from './cards'


export function App() {
  return (
    <>
      <Card
      url="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"
      título="Pôster: Star Wars (1977)"
      paragrafo="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!"
      />
      <Card
      url="/minha_foto.jpeg"
      título="Pôster: Arthur o programador "
      paragrafo="Um grande e belo homem que está aprendendo a programar em React"
      />
      <Card
      título="Pôster: O Vazio"
      paragrafo="Simplesmente o vazio"
      />
    </>
  )
}

