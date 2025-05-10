import styles from './Button.module.css'

export function Button(){
    return(
        <button className={styles.btn} type="submit">Enviar Comentário</button>
    )
}