import styles from "./game.module.css"

export function Game({title, cover, onRemove}){
    return (
    <div className={styles.game}>
        <img src={cover} alt={title} />
        <div>
            <h2>{title}</h2>
            <button onClick={onRemove}>Remover</button>
        </div>
    </div>
    )
}