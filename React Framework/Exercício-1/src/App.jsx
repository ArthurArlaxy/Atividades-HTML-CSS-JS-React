import { useState } from 'react'


export function App() {
  return (
    <main>
      <section>
          <img src="/react-logo.webp" className="logo react" alt="React logo" />
          <h2>React</h2>
          <p>A biblioteca para interfaces de usuário web e nativas</p>
          <button>Aprenda React</button><button>Referência da API</button>
          <hr />
      </section>
      <section>
        <h2>Crie interfaces de usuário de componentes</h2>
        <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes</p>
        <hr />
      </section>
      <section>
        <h2>Escreva componentes com código e marcação</h2>
        <p>Componetes React são funçoes JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React</p>
        <hr />
      </section>
      <section>
        <h2>Próximos passos</h2>
        <ul>
          <li>Uso de dados dinãmicos no jsx</li>
          <li>Criação de novos componentes</li>
          <li>Estilização de componentes</li>
          <li>Uso de props e children</li>
          <li>Uso de eventos do JavaScript</li>
        </ul>
      </section>
    </main>
  )
}

export function Header(){
  return <h1>Primeiro exercício</h1>
}
