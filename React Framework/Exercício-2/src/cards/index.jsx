import styles from "./card.module.css"

export function Card(props){
    return(
        <div className={styles.card}>
            <section>
                <img className={styles.img} src={props.url} />
            </section>
            <section>
                <h2>{props.título}</h2>
                <p>{props.paragrafo}</p>
                <button className={styles.btn} type="submit">Comprar Agora</button>
            </section>
        </div>
    )
}

