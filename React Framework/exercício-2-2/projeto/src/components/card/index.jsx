import styles from "./card.module.css"

export function Card(){
    return(
        <div className={styles.container}>
            <img src="/starwars.jpg" alt="Star Wars" />
            <div >
                <h2>Pôster: Star Wars (1977)</h2>
                <p>Em um novo projeto React, crie um componente chamado “Card”. O componente deverá ser criado em um arquivo separado do “App.jsx” e deverá ser estilizado de acordo com a imagem abaixo.</p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}