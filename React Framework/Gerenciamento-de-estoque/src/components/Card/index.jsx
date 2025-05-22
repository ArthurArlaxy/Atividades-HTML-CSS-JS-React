import styles from "./Card.module.css"

export function Card({ text, number = 0  }){
    return(
        <div className={styles.card}>
            <p>{text}</p>   
            <h3>{number}</h3>
        </div>
    )
}
