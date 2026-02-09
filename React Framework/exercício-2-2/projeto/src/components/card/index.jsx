import styles from "./card.module.css"
import { Button } from "../Button"

export function Card(props){
    return(
        <div className={styles.container}>
            <img src="/starwars.jpg" alt="Star Wars" />
            <div >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <Button/>
            </div>
        </div>
    )
}