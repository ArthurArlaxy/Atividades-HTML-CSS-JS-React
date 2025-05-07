import styles from "./Button.module.css"
export function Button({ text, functionBtn }){
    return <a className={ styles.btn } onClick={ functionBtn } >{text}</a>
}